class ExecutionConnectorService {
  constructor() {
    this.desktopUrl = import.meta.env.VITE_DREAMBUILD_DESKTOP_URL || ''
    this.runnerUrl = import.meta.env.VITE_DREAMBUILD_RUNNER_URL || import.meta.env.VITE_DREAMBUILD_CLOUD_URL || ''
  }

  normalizeUrl(url) {
    return (url || '').replace(/\/$/, '')
  }

  getStatus() {
    const desktopConnected = Boolean(this.desktopUrl)
    const cloudRunnerConnected = Boolean(this.runnerUrl)

    return {
      desktopConnected,
      cloudRunnerConnected,
      desktopUrl: this.desktopUrl || null,
      runnerUrl: this.runnerUrl || null,
      realTerminalAvailable: desktopConnected || cloudRunnerConnected,
      fullBrowserControlAvailable: desktopConnected || cloudRunnerConnected,
      compiledExecutionAvailable: desktopConnected || cloudRunnerConnected,
      mode: desktopConnected
        ? 'dreambuild-desktop'
        : cloudRunnerConnected
          ? 'dreambuild-cloud-runner'
          : 'queue-only'
    }
  }

  async request(baseUrl, path, payload) {
    const response = await fetch(`${this.normalizeUrl(baseUrl)}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`DreamBuild connector request failed: ${response.status}`)
    }

    return response.json()
  }

  async runTerminalCommand(command, context = {}) {
    const status = this.getStatus()

    if (status.desktopConnected) {
      return this.request(this.desktopUrl, '/terminal/run', { command, context })
    }

    if (status.cloudRunnerConnected) {
      return this.request(this.runnerUrl, '/terminal/run', { command, context })
    }

    return {
      success: false,
      status: 'connector-required',
      output: '',
      message: 'Real terminal commands require DreamBuild Desktop or DreamBuild Cloud Runner to be connected.'
    }
  }

  async runBrowserControl(action, context = {}) {
    const status = this.getStatus()

    if (status.desktopConnected) {
      return this.request(this.desktopUrl, '/browser/control', { action, context })
    }

    if (status.cloudRunnerConnected) {
      return this.request(this.runnerUrl, '/browser/control', { action, context })
    }

    return {
      success: false,
      status: 'connector-required',
      message: 'Full browser control requires DreamBuild Desktop or DreamBuild Cloud Runner to be connected.'
    }
  }

  async runCompiledBuild(project, target, options = {}) {
    const status = this.getStatus()

    if (status.desktopConnected) {
      return this.request(this.desktopUrl, '/builds/run', { project, target, options })
    }

    if (status.cloudRunnerConnected) {
      return this.request(this.runnerUrl, '/builds/run', { project, target, options })
    }

    return {
      success: false,
      status: 'connector-required',
      message: 'Compiled native, mobile, and backend execution requires DreamBuild Desktop or DreamBuild Cloud Runner to be connected.'
    }
  }
}

export default new ExecutionConnectorService()
