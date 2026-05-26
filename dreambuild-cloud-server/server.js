import { createServer } from 'node:http'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const port = Number(process.env.PORT || 8787)
const dataDir = process.env.DREAMBUILD_CLOUD_DATA || join(process.cwd(), 'data')
const appsFile = join(dataDir, 'apps.json')
const jobsFile = join(dataDir, 'build-jobs.json')
const searchProviders = {
  brave: process.env.BRAVE_SEARCH_API_KEY,
  serper: process.env.SERPER_API_KEY,
  tavily: process.env.TAVILY_API_KEY
}

const json = (res, status, body) => {
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'content-type,authorization',
    'cache-control': 'no-store'
  })
  res.end(JSON.stringify(body))
}

const readJson = async (file) => {
  try {
    return JSON.parse(await readFile(file, 'utf8'))
  } catch {
    return {}
  }
}

const writeJson = async (file, value) => {
  await mkdir(dataDir, { recursive: true })
  await writeFile(file, JSON.stringify(value, null, 2))
}

const parseBody = async (req) => {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

const createId = (name = 'dreambuild') => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 36) || 'dreambuild'
  return `${slug}-${Date.now().toString(36)}`
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

const summarizeText = (text = '') => {
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean)
  return sentences.slice(0, 2).join(' ').slice(0, 420)
}

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
    message: 'Set BRAVE_SEARCH_API_KEY, SERPER_API_KEY, or TAVILY_API_KEY on the DreamBuild Cloud Runner to enable full live web search.'
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

const server = createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    json(res, 204, {})
    return
  }

  const url = new URL(req.url, `http://${req.headers.host}`)

  try {
    if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/health')) {
      json(res, 200, {
        ok: true,
        service: 'dreambuild-cloud',
        firebaseRequired: false,
        features: ['hosting', 'build-jobs', 'status', 'live-search', 'server-side-crawl'],
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

    if (req.method === 'POST' && url.pathname === '/apps') {
      const body = await parseBody(req)
      const apps = await readJson(appsFile)
      const id = body.id || createId(body.name || 'dreambuild-app')
      const app = {
        ...body,
        id,
        url: body.url || `/apps/${id}`,
        platform: 'dreambuild-cloud',
        status: 'deployed',
        deployedAt: body.deployedAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      apps[id] = app
      await writeJson(appsFile, apps)
      json(res, 201, { success: true, appId: id, url: app.url, platform: 'dreambuild-cloud', appInfo: app })
      return
    }

    const appMatch = url.pathname.match(/^\/apps\/([^/]+)$/)
    if (req.method === 'GET' && appMatch) {
      const apps = await readJson(appsFile)
      const app = apps[appMatch[1]]
      json(res, app ? 200 : 404, app || { success: false, error: 'App not found' })
      return
    }

    if (req.method === 'POST' && url.pathname === '/builds') {
      const body = await parseBody(req)
      const jobs = await readJson(jobsFile)
      const id = body.id || createId(`${body.target || 'build'}-job`)
      const job = {
        ...body,
        id,
        platform: 'dreambuild-cloud',
        status: body.status || 'queued',
        createdAt: body.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      jobs[id] = job
      await writeJson(jobsFile, jobs)
      json(res, 201, { success: true, jobId: id, status: job.status, source: 'dreambuild-cloud-server' })
      return
    }

    if (req.method === 'POST' && url.pathname === '/search') {
      const body = await parseBody(req)
      const query = String(body.query || '').trim()
      if (!query) {
        json(res, 400, { success: false, error: 'query is required' })
        return
      }

      const maxResults = Math.min(Number(body.maxResults || 5), 10)
      const search = await runSearch(query, maxResults)
      json(res, search.needsConfiguration ? 501 : 200, {
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

    if (req.method === 'POST' && url.pathname === '/crawl') {
      const body = await parseBody(req)
      const targetUrl = String(body.url || '').trim()
      if (!targetUrl) {
        json(res, 400, { success: false, error: 'url is required' })
        return
      }

      const crawl = await crawlUrl(targetUrl, Math.min(Number(body.maxChars || 8000), 20000))
      json(res, 200, crawl)
      return
    }

    const buildMatch = url.pathname.match(/^\/builds\/([^/]+)$/)
    if (req.method === 'GET' && buildMatch) {
      const jobs = await readJson(jobsFile)
      const job = jobs[buildMatch[1]]
      json(res, job ? 200 : 404, job || { success: false, error: 'Build job not found' })
      return
    }

    json(res, 404, { success: false, error: 'Route not found' })
  } catch (error) {
    json(res, 500, { success: false, error: error.message })
  }
})

server.listen(port, () => {
  console.log(`DreamBuild Cloud listening on http://localhost:${port}`)
})
