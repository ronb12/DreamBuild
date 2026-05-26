import dreamBuildCloudService from './dreamBuildCloudService'
import executionConnectorService from './executionConnectorService'

class CloudToolchainRunnerService {
  constructor() {
    this.runnerEndpoint = import.meta.env.VITE_DREAMBUILD_RUNNER_URL || ''
    this.supportedTargets = {
      web: {
        label: 'Web/PWA',
        status: 'runs-in-browser',
        toolchains: ['Vite', 'React', 'HTML', 'CSS', 'JavaScript']
      },
      backend: {
        label: 'Backend/API',
        status: 'cloud-runner-required',
        toolchains: ['Node.js', 'Python', 'Go', 'Java', 'Docker']
      },
      mobile: {
        label: 'Mobile',
        status: 'cloud-runner-required',
        toolchains: ['Expo/EAS', 'React Native', 'Flutter', 'Android SDK', 'Xcode/macOS runner']
      },
      native: {
        label: 'Native/Desktop',
        status: 'cloud-runner-required',
        toolchains: ['Swift/Xcode', '.NET', 'Rust', 'C/C++', 'Electron']
      },
      database: {
        label: 'Database/Infrastructure',
        status: 'cloud-runner-required',
        toolchains: ['Postgres', 'SQL migration runner', 'Terraform', 'Firebase CLI']
      }
    }
  }

  getStatus() {
    const connectorStatus = executionConnectorService.getStatus()

    return {
      configured: connectorStatus.cloudRunnerConnected || connectorStatus.desktopConnected,
      runnerEndpoint: connectorStatus.runnerUrl || connectorStatus.desktopUrl || null,
      supportedTargets: this.supportedTargets,
      mode: connectorStatus.mode
    }
  }

  detectTarget(project = {}) {
    const files = project.files || {}
    const config = project.config || {}
    const allText = `${config.appType || ''} ${Object.keys(files).join(' ')} ${Object.values(files).join(' ')}`.toLowerCase()

    if (allText.includes('dockerfile') || allText.includes('express') || allText.includes('fastapi') || allText.includes('backend') || allText.includes('api')) {
      return 'backend'
    }

    if (allText.includes('react-native') || allText.includes('expo') || allText.includes('flutter') || allText.includes('android') || allText.includes('ios')) {
      return 'mobile'
    }

    if (allText.includes('swift') || allText.includes('xcode') || allText.includes('rust') || allText.includes('electron') || allText.includes('.net')) {
      return 'native'
    }

    if (allText.includes('create table') || allText.includes('terraform') || allText.includes('migration') || allText.includes('postgres')) {
      return 'database'
    }

    return 'web'
  }

  getRequirements(target) {
    const targetInfo = this.supportedTargets[target] || this.supportedTargets.web

    if (targetInfo.status === 'runs-in-browser') {
      return {
        target,
        label: targetInfo.label,
        canRunNow: true,
        requirements: ['Browser preview'],
        credentials: [],
        message: 'This target can be previewed directly inside DreamBuild.'
      }
    }

    const credentialMap = {
      backend: ['Hosting provider token if deploying', 'Database/API secrets if the app uses them'],
      mobile: ['Apple Developer credentials for iOS', 'Google Play credentials for Android', 'Expo/EAS token when using Expo'],
      native: ['Platform signing credentials when packaging installers', 'macOS/Xcode runner for iOS/macOS builds when required'],
      database: ['Database connection string', 'Cloud provider credentials for infrastructure changes']
    }

    return {
      target,
      label: targetInfo.label,
      canRunNow: executionConnectorService.getStatus().compiledExecutionAvailable,
      requirements: targetInfo.toolchains,
      credentials: credentialMap[target] || [],
      message: executionConnectorService.getStatus().compiledExecutionAvailable
        ? 'DreamBuild can send this project to the connected DreamBuild Desktop or Cloud Runner from inside the app.'
        : 'DreamBuild can create an in-app build request now. DreamBuild Desktop or Cloud Runner must be connected to compile this target.'
    }
  }

  async createBuildJob(project, options = {}) {
    const target = options.target || this.detectTarget(project)
    const requirements = this.getRequirements(target)
    const payload = {
      projectName: options.projectName || project?.name || 'dreambuild-project',
      buildPrompt: options.buildPrompt || '',
      target,
      files: project?.files || {},
      config: project?.config || {},
      requirements,
      status: requirements.canRunNow ? 'queued' : 'needs-runner-connection',
      requestedAt: new Date().toISOString()
    }

    if (requirements.canRunNow) {
      const connectorResult = await executionConnectorService.runCompiledBuild(project, target, {
        priority: options.priority || 'normal',
        buildPrompt: options.buildPrompt || ''
      })

      if (connectorResult.success || connectorResult.status !== 'connector-required') {
        return {
          ...connectorResult,
          source: executionConnectorService.getStatus().mode,
          requirements
        }
      }
    }

    const result = await dreamBuildCloudService.createBuildJob(payload)

    return {
      success: true,
      jobId: result.jobId,
      source: result.source || 'dreambuild-cloud-queue',
      status: payload.status,
      requirements,
      message: result.message || requirements.message
    }
  }

  async createParallelBuildJobs(project, buildRequests = []) {
    const requests = buildRequests.length > 0 ? buildRequests : [
      { projectName: `${project?.name || 'DreamBuild'} Website`, target: 'web', buildPrompt: 'Build a responsive marketing website.' },
      { projectName: `${project?.name || 'DreamBuild'} Admin Portal`, target: 'web', buildPrompt: 'Build an admin dashboard with tables, forms, and analytics.' },
      { projectName: `${project?.name || 'DreamBuild'} API`, target: 'backend', buildPrompt: 'Build a backend API with validation and health checks.' }
    ]

    const queuedAt = new Date().toISOString()
    const jobs = await Promise.all(requests.map((request, index) => (
      this.createBuildJob(
        {
          ...project,
          name: request.projectName || `${project?.name || 'DreamBuild'} Build ${index + 1}`,
          config: {
            ...(project?.config || {}),
            parallelBatch: true,
            parallelIndex: index + 1,
            requestedPrompt: request.buildPrompt || ''
          }
        },
        {
          target: request.target || 'web',
          projectName: request.projectName,
          buildPrompt: request.buildPrompt,
          priority: request.priority || 'normal'
        }
      )
    )))

    return {
      success: true,
      batchId: `parallel-build-${Date.now().toString(36)}`,
      queuedAt,
      requested: requests.length,
      jobs
    }
  }
}

export default new CloudToolchainRunnerService()
