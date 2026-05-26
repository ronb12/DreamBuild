class DreamBuildCloudService {
  constructor() {
    this.apiUrl = import.meta.env.VITE_DREAMBUILD_CLOUD_URL || ''
    this.storageKeys = {
      apps: 'dreambuild-cloud-hosted-apps',
      jobs: 'dreambuild-cloud-build-jobs'
    }
  }

  getStatus() {
    return {
      provider: 'dreambuild-cloud',
      mode: this.apiUrl ? 'dreambuild-cloud-api' : 'local-cloud-queue',
      apiUrl: this.apiUrl || null,
      firebaseRequired: false
    }
  }

  createId(name = 'dreambuild-app') {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 36) || 'dreambuild-app'
    const uniqueSuffix = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
    return `${slug}-${uniqueSuffix}`
  }

  readStore(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}')
    } catch {
      return {}
    }
  }

  writeStore(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  async request(path, options = {}) {
    if (!this.apiUrl) {
      throw new Error('DreamBuild Cloud API is not connected')
    }

    const response = await fetch(`${this.apiUrl.replace(/\/$/, '')}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    })

    if (!response.ok) {
      throw new Error(`DreamBuild Cloud request failed: ${response.status}`)
    }

    return response.json()
  }

  async deployHostedApp(appData) {
    const appId = appData.id || this.createId(appData.name)
    const appUrl = `${window.location.origin}/apps/${appId}`
    const hostedApp = {
      id: appId,
      name: appData.name || 'DreamBuild App',
      files: appData.files || {},
      config: appData.config || {},
      url: appUrl,
      platform: 'dreambuild-cloud',
      status: 'deployed',
      views: 0,
      deployedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    if (this.apiUrl) {
      return this.request('/apps', {
        method: 'POST',
        body: JSON.stringify(hostedApp)
      })
    }

    const apps = this.readStore(this.storageKeys.apps)
    apps[appId] = hostedApp
    this.writeStore(this.storageKeys.apps, apps)

    return {
      success: true,
      appId,
      url: appUrl,
      platform: 'dreambuild-cloud',
      appInfo: hostedApp,
      mode: 'local-cloud-queue'
    }
  }

  async getApp(appId) {
    if (this.apiUrl) {
      return this.request(`/apps/${appId}`)
    }

    const apps = this.readStore(this.storageKeys.apps)
    return apps[appId] || null
  }

  async incrementViews(appId) {
    if (this.apiUrl) {
      try {
        await this.request(`/apps/${appId}/views`, { method: 'POST' })
      } catch (error) {
        console.warn('DreamBuild Cloud view tracking failed:', error)
      }
      return
    }

    const apps = this.readStore(this.storageKeys.apps)
    if (!apps[appId]) return
    apps[appId] = {
      ...apps[appId],
      views: (apps[appId].views || 0) + 1,
      lastViewedAt: new Date().toISOString()
    }
    this.writeStore(this.storageKeys.apps, apps)
  }

  async createBuildJob(payload) {
    const jobId = this.createId(`${payload.target || 'build'}-job`)
    const job = {
      id: jobId,
      ...payload,
      platform: 'dreambuild-cloud',
      status: payload.status || 'queued',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    if (this.apiUrl) {
      return this.request('/builds', {
        method: 'POST',
        body: JSON.stringify(job)
      })
    }

    const jobs = this.readStore(this.storageKeys.jobs)
    jobs[jobId] = job
    this.writeStore(this.storageKeys.jobs, jobs)

    return {
      success: true,
      jobId,
      status: job.status,
      source: 'dreambuild-local-cloud-queue',
      message: 'DreamBuild Cloud job saved without Firebase. Connect VITE_DREAMBUILD_CLOUD_URL for shared cloud execution.'
    }
  }

  generateAppHTML(appData) {
    const files = appData.files || {}
    const appName = appData.name || 'DreamBuild App'
    const htmlFile = files['index.html'] || files['app.html'] || files['main.html']
    const cssFile = files['style.css'] || files['styles.css'] || files['app.css'] || ''
    const jsFile = files['script.js'] || files['app.js'] || files['main.js'] || ''

    let html = htmlFile || this.generateFallbackAppHTML(appName)

    if (cssFile && !html.includes(cssFile)) {
      html = html.includes('</head>') ? html.replace('</head>', `<style>${cssFile}</style></head>`) : `<style>${cssFile}</style>${html}`
    }

    if (jsFile && !html.includes(jsFile)) {
      html = html.includes('</body>') ? html.replace('</body>', `<script>${jsFile}</script></body>`) : `${html}<script>${jsFile}</script>`
    }

    if (!html.includes('<!DOCTYPE html>')) {
      html = `<!DOCTYPE html>\n${html}`
    }

    if (!html.includes('name="viewport"')) {
      html = html.replace('<head>', '<head><meta name="viewport" content="width=device-width, initial-scale=1.0">')
    }

    return html.replace('</body>', `
      <div style="position:fixed;right:14px;bottom:14px;z-index:2147483647;background:#0f172a;color:white;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:8px 12px;font:600 12px system-ui;box-shadow:0 10px 30px rgba(15,23,42,.25)">
        Hosted by <a href="https://dreambuild-2024-app.web.app" style="color:#7dd3fc;text-decoration:none">DreamBuild Cloud</a>
      </div>
    </body>`)
  }

  generateFallbackAppHTML(appName) {
    return `<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${appName}</title>
  <style>
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: system-ui, sans-serif; color: white; background: linear-gradient(135deg, #020617, #2563eb); }
    main { max-width: 680px; padding: 48px; text-align: center; border: 1px solid rgba(255,255,255,.18); border-radius: 28px; background: rgba(255,255,255,.1); box-shadow: 0 24px 80px rgba(15,23,42,.35); }
    h1 { font-size: clamp(2rem, 7vw, 4rem); margin: 0 0 16px; }
    p { color: rgba(255,255,255,.82); font-size: 1.1rem; line-height: 1.6; }
  </style>
</head>
<body>
  <main>
    <h1>${appName}</h1>
    <p>This DreamBuild Cloud app is live. Add project files to customize this page.</p>
  </main>
</body>
</html>`
  }
}

export default new DreamBuildCloudService()
