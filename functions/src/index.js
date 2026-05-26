import admin from 'firebase-admin'
import { onRequest } from 'firebase-functions/v2/https'
import { setGlobalOptions } from 'firebase-functions/v2/options'

setGlobalOptions({
  region: 'us-central1',
  maxInstances: 10,
  timeoutSeconds: 30,
  memory: '256MiB'
})

if (!admin.apps.length) {
  admin.initializeApp()
}

const db = admin.firestore()
const searchProviders = {
  brave: process.env.BRAVE_SEARCH_API_KEY,
  serper: process.env.SERPER_API_KEY,
  tavily: process.env.TAVILY_API_KEY
}

const supportedTargets = {
  web: {
    label: 'Web/PWA',
    status: 'runs-in-browser',
    toolchains: ['Vite', 'React', 'HTML', 'CSS', 'JavaScript'],
    credentials: []
  },
  backend: {
    label: 'Backend/API',
    status: 'cloud-runner-required',
    toolchains: ['Node.js', 'Python', 'Go', 'Java', 'Docker'],
    credentials: ['Hosting provider token if deploying', 'Database/API secrets if the app uses them']
  },
  mobile: {
    label: 'Mobile',
    status: 'cloud-runner-required',
    toolchains: ['Expo/EAS', 'React Native', 'Flutter', 'Android SDK', 'Xcode/macOS runner'],
    credentials: ['Apple Developer credentials for iOS', 'Google Play credentials for Android', 'Expo/EAS token when using Expo']
  },
  native: {
    label: 'Native/Desktop',
    status: 'cloud-runner-required',
    toolchains: ['Swift/Xcode', '.NET', 'Rust', 'C/C++', 'Electron'],
    credentials: ['Platform signing credentials when packaging installers', 'macOS/Xcode runner for iOS/macOS builds when required']
  },
  database: {
    label: 'Database/Infrastructure',
    status: 'cloud-runner-required',
    toolchains: ['Postgres', 'SQL migration runner', 'Terraform', 'Firebase CLI'],
    credentials: ['Database connection string', 'Cloud provider credentials for infrastructure changes']
  }
}

const sendJson = (res, status, body) => {
  res.set('Cache-Control', 'no-store')
  res.status(status).json(body)
}

const applyCors = (req, res) => {
  const origin = req.get('origin') || '*'
  res.set('Access-Control-Allow-Origin', origin)
  res.set('Vary', 'Origin')
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.status(204).send('')
    return true
  }

  return false
}

const detectTarget = (files = {}, config = {}) => {
  const text = `${config.appType || ''} ${Object.keys(files).join(' ')} ${Object.values(files).join(' ')}`.toLowerCase()

  if (text.includes('dockerfile') || text.includes('express') || text.includes('fastapi') || text.includes('backend') || text.includes('api')) {
    return 'backend'
  }

  if (text.includes('react-native') || text.includes('expo') || text.includes('flutter') || text.includes('android') || text.includes('ios')) {
    return 'mobile'
  }

  if (text.includes('swift') || text.includes('xcode') || text.includes('rust') || text.includes('electron') || text.includes('.net')) {
    return 'native'
  }

  if (text.includes('create table') || text.includes('terraform') || text.includes('migration') || text.includes('postgres')) {
    return 'database'
  }

  return 'web'
}

const getRequirements = (target) => {
  const targetInfo = supportedTargets[target] || supportedTargets.web
  const isBrowserTarget = targetInfo.status === 'runs-in-browser'

  return {
    target,
    label: targetInfo.label,
    canRunNow: isBrowserTarget,
    requirements: targetInfo.toolchains,
    credentials: targetInfo.credentials,
    message: isBrowserTarget
      ? 'This target can be previewed directly inside DreamBuild.'
      : 'DreamBuild received the build request. A connected worker will execute the required compiler, signing, and deployment steps.'
  }
}

const stripHtml = (html = '') => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()

const extractTitle = (html = '') => {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  return match ? stripHtml(match[1]).slice(0, 180) : ''
}

const extractDescription = (html = '') => {
  const match = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)
  return match ? stripHtml(match[1]).slice(0, 280) : ''
}

const summarizeText = (text = '') => text.split(/(?<=[.!?])\s+/).filter(Boolean).slice(0, 2).join(' ').slice(0, 420)

const searchWithBrave = async (query, maxResults) => {
  const response = await fetch(`https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=${maxResults}`, {
    headers: {
      Accept: 'application/json',
      'X-Subscription-Token': searchProviders.brave
    }
  })
  if (!response.ok) throw new Error(`Brave Search returned ${response.status}`)
  const data = await response.json()
  return (data.web?.results || []).slice(0, maxResults).map((item) => ({
    title: item.title,
    url: item.url,
    snippet: item.description,
    source: 'brave-search',
    relevance: 0.9
  }))
}

const searchWithSerper = async (query, maxResults) => {
  const response = await fetch('https://google.serper.dev/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': searchProviders.serper
    },
    body: JSON.stringify({ q: query, num: maxResults })
  })
  if (!response.ok) throw new Error(`Serper returned ${response.status}`)
  const data = await response.json()
  return (data.organic || []).slice(0, maxResults).map((item) => ({
    title: item.title,
    url: item.link,
    snippet: item.snippet,
    source: 'serper',
    relevance: 0.88
  }))
}

const searchWithTavily = async (query, maxResults) => {
  const response = await fetch('https://api.tavily.com/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: searchProviders.tavily,
      query,
      max_results: maxResults,
      search_depth: 'basic'
    })
  })
  if (!response.ok) throw new Error(`Tavily returned ${response.status}`)
  const data = await response.json()
  return (data.results || []).slice(0, maxResults).map((item) => ({
    title: item.title,
    url: item.url,
    snippet: item.content,
    source: 'tavily',
    relevance: item.score || 0.86
  }))
}

const runSearch = async (query, maxResults = 5) => {
  if (searchProviders.brave) return { source: 'brave-search', results: await searchWithBrave(query, maxResults) }
  if (searchProviders.serper) return { source: 'serper', results: await searchWithSerper(query, maxResults) }
  if (searchProviders.tavily) return { source: 'tavily', results: await searchWithTavily(query, maxResults) }

  return {
    source: 'not-configured',
    results: [],
    needsConfiguration: true,
    message: 'Set BRAVE_SEARCH_API_KEY, SERPER_API_KEY, or TAVILY_API_KEY on DreamBuild backend to enable full live web search.'
  }
}

const crawlUrl = async (targetUrl, maxChars = 8000) => {
  const parsed = new URL(targetUrl)
  if (!['http:', 'https:'].includes(parsed.protocol)) {
    throw new Error('Only http and https URLs can be crawled')
  }

  const response = await fetch(parsed.href, {
    headers: {
      'user-agent': 'DreamBuild-Cloud-Runner/1.0 (+https://dreambuild-2024-app.web.app)'
    },
    redirect: 'follow'
  })
  if (!response.ok) throw new Error(`Crawl returned ${response.status}`)

  const contentType = response.headers.get('content-type') || 'text/html'
  const raw = await response.text()
  const text = contentType.includes('html') ? stripHtml(raw) : raw.replace(/\s+/g, ' ').trim()
  const clipped = text.slice(0, maxChars)

  return {
    success: true,
    url: parsed.href,
    title: contentType.includes('html') ? extractTitle(raw) : parsed.hostname,
    description: contentType.includes('html') ? extractDescription(raw) : '',
    content: clipped,
    summary: summarizeText(clipped),
    keyPoints: clipped.split(/(?<=[.!?])\s+/).filter(Boolean).slice(0, 5),
    metadata: {
      url: parsed.href,
      domain: parsed.hostname,
      contentType,
      wordCount: clipped.split(/\s+/).filter(Boolean).length,
      language: 'unknown',
      lastModified: response.headers.get('last-modified') || null
    }
  }
}

const createBuildJob = async (body) => {
  const project = body.project || {}
  const files = project.files || body.files || {}
  const config = project.config || body.config || {}
  const target = body.target || detectTarget(files, config)
  const requirements = getRequirements(target)
  const now = admin.firestore.FieldValue.serverTimestamp()

  const buildJob = {
    projectName: project.name || body.projectName || 'dreambuild-project',
    target,
    files,
    config,
    requirements,
    status: target === 'web' ? 'ready-for-preview' : 'queued-for-runner',
    priority: body.priority || 'normal',
    createdAt: now,
    updatedAt: now,
    runner: {
      type: 'dreambuild-cloud-runner',
      connected: false,
      note: 'Worker execution can be attached without changing the browser app.'
    }
  }

  const docRef = await db.collection('cloudBuildJobs').add(buildJob)

  return {
    success: true,
    jobId: docRef.id,
    status: buildJob.status,
    target,
    requirements,
    message: requirements.message
  }
}

export const api = onRequest(async (req, res) => {
  if (applyCors(req, res)) return

  const path = req.path.replace(/^\/api/, '') || '/'

  try {
    if (req.method === 'GET' && (path === '/' || path === '/health')) {
      sendJson(res, 200, {
        ok: true,
        service: 'dreambuild-backend',
        version: '1.0.0',
        latencyClass: 'fast',
        targets: supportedTargets,
        search: {
          configured: Boolean(searchProviders.brave || searchProviders.serper || searchProviders.tavily),
          providers: {
            brave: Boolean(searchProviders.brave),
            serper: Boolean(searchProviders.serper),
            tavily: Boolean(searchProviders.tavily)
          }
        },
        timestamp: new Date().toISOString()
      })
      return
    }

    if (req.method === 'GET' && path === '/targets') {
      sendJson(res, 200, {
        ok: true,
        targets: supportedTargets
      })
      return
    }

    if (req.method === 'POST' && path === '/builds') {
      const result = await createBuildJob(req.body || {})
      sendJson(res, 201, result)
      return
    }

    if (req.method === 'POST' && path === '/search') {
      const query = String(req.body?.query || '').trim()
      if (!query) {
        sendJson(res, 400, { success: false, error: 'query is required' })
        return
      }

      const maxResults = Math.min(Number(req.body?.maxResults || 5), 10)
      const search = await runSearch(query, maxResults)
      sendJson(res, search.needsConfiguration ? 501 : 200, {
        success: !search.needsConfiguration,
        source: search.source,
        results: search.results,
        summary: search.needsConfiguration ? search.message : `Found ${search.results.length} live result(s) for "${query}".`,
        keyPoints: search.results.slice(0, 3).map((item) => item.snippet || item.title).filter(Boolean),
        relatedQueries: [],
        needsConfiguration: Boolean(search.needsConfiguration),
        message: search.message
      })
      return
    }

    if (req.method === 'POST' && path === '/crawl') {
      const targetUrl = String(req.body?.url || '').trim()
      if (!targetUrl) {
        sendJson(res, 400, { success: false, error: 'url is required' })
        return
      }

      const crawl = await crawlUrl(targetUrl, Math.min(Number(req.body?.maxChars || 8000), 20000))
      sendJson(res, 200, crawl)
      return
    }

    const buildMatch = path.match(/^\/builds\/([^/]+)$/)
    if (req.method === 'GET' && buildMatch) {
      const snapshot = await db.collection('cloudBuildJobs').doc(buildMatch[1]).get()

      if (!snapshot.exists) {
        sendJson(res, 404, {
          ok: false,
          error: 'Build job not found'
        })
        return
      }

      sendJson(res, 200, {
        ok: true,
        jobId: snapshot.id,
        ...snapshot.data()
      })
      return
    }

    sendJson(res, 404, {
      ok: false,
      error: 'Route not found',
      path
    })
  } catch (error) {
    console.error('DreamBuild API error:', error)
    sendJson(res, 500, {
      ok: false,
      error: error.message || 'Internal server error'
    })
  }
})
