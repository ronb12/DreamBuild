const STORAGE_KEY = 'dreambuild-database-state'

const cloneTable = (table) => JSON.parse(JSON.stringify(table))

const DATABASE_ADAPTERS = [
  {
    id: 'dreambuild-tables',
    name: 'DreamBuild Tables',
    status: 'Available in browser',
    use: 'Fast project data, prototypes, admin records, form submissions, and generated CRUD screens.',
    mode: 'local-first'
  },
  {
    id: 'dreambuild-postgres',
    name: 'DreamBuild Postgres',
    status: 'Cloud Runner ready',
    use: 'Production SQL apps, relational records, reporting, migrations, and server APIs.',
    mode: 'hosted'
  },
  {
    id: 'dreambuild-kv',
    name: 'DreamBuild KV',
    status: 'Cloud Runner ready',
    use: 'Settings, sessions, feature flags, rate limits, cache entries, and lightweight app state.',
    mode: 'hosted'
  },
  {
    id: 'dreambuild-blob',
    name: 'DreamBuild Blob Assets',
    status: 'Cloud Runner ready',
    use: 'Uploaded images, generated graphics, documents, media, and downloadable app assets.',
    mode: 'hosted'
  }
]

const SCHEMA_TEMPLATES = [
  {
    id: 'users-auth',
    name: 'Users and Roles',
    tables: ['users', 'profiles', 'roles', 'sessions'],
    bestFor: 'Login, admin portals, permissions, saved preferences, and customer accounts.'
  },
  {
    id: 'commerce-bookings',
    name: 'Commerce and Bookings',
    tables: ['customers', 'products', 'orders', 'bookings', 'payments'],
    bestFor: 'Stores, travel, salons, appointments, restaurants, checkout flows, and invoices.'
  },
  {
    id: 'content-cms',
    name: 'Content Manager',
    tables: ['pages', 'posts', 'media_assets', 'categories', 'audit_log'],
    bestFor: 'Blogs, business websites, galleries, landing pages, and editable marketing content.'
  },
  {
    id: 'analytics-events',
    name: 'Analytics Events',
    tables: ['events', 'funnels', 'experiments', 'daily_metrics'],
    bestFor: 'Dashboards, app tracker reporting, usage metrics, and conversion insights.'
  }
]

const BASE_TABLES = {
  users: {
    name: 'users',
    purpose: 'Customer, admin, and account identity records.',
    columns: [
      { name: 'id', type: 'uuid', constraints: ['primary key'] },
      { name: 'email', type: 'text', constraints: ['unique', 'not null'] },
      { name: 'display_name', type: 'text', constraints: [] },
      { name: 'role', type: 'text', constraints: ['default customer'] },
      { name: 'created_at', type: 'timestamp', constraints: ['not null'] },
      { name: 'updated_at', type: 'timestamp', constraints: ['not null'] }
    ]
  },
  profiles: {
    name: 'profiles',
    purpose: 'Public profile and customer preference data.',
    columns: [
      { name: 'id', type: 'uuid', constraints: ['primary key'] },
      { name: 'user_id', type: 'uuid', constraints: ['references users.id'] },
      { name: 'phone', type: 'text', constraints: [] },
      { name: 'address', type: 'text', constraints: [] },
      { name: 'preferences', type: 'json', constraints: [] },
      { name: 'updated_at', type: 'timestamp', constraints: ['not null'] }
    ]
  },
  products: {
    name: 'products',
    purpose: 'Sellable products, packages, services, or listings.',
    columns: [
      { name: 'id', type: 'uuid', constraints: ['primary key'] },
      { name: 'name', type: 'text', constraints: ['not null'] },
      { name: 'description', type: 'text', constraints: [] },
      { name: 'price_cents', type: 'integer', constraints: ['not null'] },
      { name: 'status', type: 'text', constraints: ['default active'] },
      { name: 'metadata', type: 'json', constraints: [] },
      { name: 'created_at', type: 'timestamp', constraints: ['not null'] }
    ]
  },
  bookings: {
    name: 'bookings',
    purpose: 'Scheduled appointments, trips, rentals, reservations, or service windows.',
    columns: [
      { name: 'id', type: 'uuid', constraints: ['primary key'] },
      { name: 'user_id', type: 'uuid', constraints: ['references users.id'] },
      { name: 'start_at', type: 'timestamp', constraints: ['not null'] },
      { name: 'end_at', type: 'timestamp', constraints: [] },
      { name: 'status', type: 'text', constraints: ['default pending'] },
      { name: 'notes', type: 'text', constraints: [] },
      { name: 'created_at', type: 'timestamp', constraints: ['not null'] }
    ]
  },
  orders: {
    name: 'orders',
    purpose: 'Checkout orders, invoices, and purchase records.',
    columns: [
      { name: 'id', type: 'uuid', constraints: ['primary key'] },
      { name: 'user_id', type: 'uuid', constraints: ['references users.id'] },
      { name: 'status', type: 'text', constraints: ['default draft'] },
      { name: 'subtotal_cents', type: 'integer', constraints: ['not null'] },
      { name: 'total_cents', type: 'integer', constraints: ['not null'] },
      { name: 'created_at', type: 'timestamp', constraints: ['not null'] }
    ]
  },
  payments: {
    name: 'payments',
    purpose: 'Payment status and external payment provider references.',
    columns: [
      { name: 'id', type: 'uuid', constraints: ['primary key'] },
      { name: 'order_id', type: 'uuid', constraints: ['references orders.id'] },
      { name: 'provider', type: 'text', constraints: ['not null'] },
      { name: 'provider_reference', type: 'text', constraints: [] },
      { name: 'amount_cents', type: 'integer', constraints: ['not null'] },
      { name: 'status', type: 'text', constraints: ['not null'] },
      { name: 'created_at', type: 'timestamp', constraints: ['not null'] }
    ]
  },
  media_assets: {
    name: 'media_assets',
    purpose: 'Uploaded images, documents, generated graphics, and gallery assets.',
    columns: [
      { name: 'id', type: 'uuid', constraints: ['primary key'] },
      { name: 'owner_id', type: 'uuid', constraints: ['references users.id'] },
      { name: 'url', type: 'text', constraints: ['not null'] },
      { name: 'alt_text', type: 'text', constraints: [] },
      { name: 'mime_type', type: 'text', constraints: [] },
      { name: 'metadata', type: 'json', constraints: [] },
      { name: 'created_at', type: 'timestamp', constraints: ['not null'] }
    ]
  },
  messages: {
    name: 'messages',
    purpose: 'Contact forms, chats, support requests, and notification records.',
    columns: [
      { name: 'id', type: 'uuid', constraints: ['primary key'] },
      { name: 'user_id', type: 'uuid', constraints: ['references users.id'] },
      { name: 'subject', type: 'text', constraints: [] },
      { name: 'body', type: 'text', constraints: ['not null'] },
      { name: 'status', type: 'text', constraints: ['default unread'] },
      { name: 'created_at', type: 'timestamp', constraints: ['not null'] }
    ]
  },
  analytics_events: {
    name: 'analytics_events',
    purpose: 'User actions, funnel events, usage tracking, and app metrics.',
    columns: [
      { name: 'id', type: 'uuid', constraints: ['primary key'] },
      { name: 'user_id', type: 'uuid', constraints: ['references users.id'] },
      { name: 'event_name', type: 'text', constraints: ['not null'] },
      { name: 'properties', type: 'json', constraints: [] },
      { name: 'occurred_at', type: 'timestamp', constraints: ['not null'] }
    ]
  }
}

class DreamBuildDatabaseService {
  constructor() {
    this.runnerEnvKeys = [
      'VITE_DREAMBUILD_DATABASE_URL',
      'VITE_DREAMBUILD_DB_API_URL',
      'VITE_DREAMBUILD_RUNNER_URL',
      'VITE_DREAMBUILD_CLOUD_URL'
    ]
  }

  getStatus() {
    const connectedKey = this.runnerEnvKeys.find((key) => Boolean(import.meta.env?.[key]))

    return {
      provider: 'dreambuild-database',
      hasHostedDatabase: Boolean(connectedKey),
      connectedKey: connectedKey || null,
      mode: connectedKey ? 'hosted-database-api' : 'browser-local-design',
      statusLabel: connectedKey ? 'Hosted Database Connected' : 'Needs DreamBuild Database API',
      localPersistence: true,
      firebaseRequired: false,
      adapters: DATABASE_ADAPTERS,
      schemaTemplates: SCHEMA_TEMPLATES
    }
  }

  readState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    } catch {
      return {}
    }
  }

  writeState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...state,
      updatedAt: new Date().toISOString()
    }))
  }

  saveProjectDatabase(projectId, databasePlan) {
    const state = this.readState()
    const id = projectId || 'draft-project'
    const nextState = {
      ...state,
      [id]: {
        ...(state[id] || {}),
        ...databasePlan,
        projectId: id,
        updatedAt: new Date().toISOString()
      }
    }
    this.writeState(nextState)
    return nextState[id]
  }

  getProjectDatabase(projectId = 'draft-project') {
    return this.readState()[projectId] || null
  }

  createDatabasePlan(prompt, context = {}) {
    const lowerPrompt = String(prompt || '').toLowerCase()
    const selectedTemplates = this.detectTemplates(lowerPrompt)
    const status = this.getStatus()
    const appType = context.appType || 'web app'
    const features = context.features || []
    const schema = this.generateSchema(lowerPrompt, features)

    return {
      enabled: true,
      provider: 'dreambuild-database',
      mode: status.mode,
      statusLabel: status.statusLabel,
      firebaseRequired: false,
      appType,
      requestedForPrompt: prompt,
      selectedTemplates,
      schema,
      migrationSql: this.generateMigrationSql(schema),
      crudPlan: this.generateCrudPlan(schema),
      seedPlan: this.generateSeedPlan(schema),
      recommendedAdapter: this.recommendAdapter(lowerPrompt, features),
      generatedTasks: [
        'Create database schema from app requirements',
        'Generate CRUD data access helpers',
        'Add seed data for preview/testing',
        'Prepare migrations for DreamBuild Cloud Runner',
        'Add access-policy notes for admin and customer data'
      ],
      hostedPersistenceNote: status.hasHostedDatabase
        ? 'DreamBuild Database API is connected for hosted persistence.'
        : 'Browser mode stores project database plans locally. Shared production data needs DreamBuild Database API or Cloud Runner.'
    }
  }

  generateSchema(lowerPrompt, features = []) {
    const combined = `${lowerPrompt} ${features.join(' ').toLowerCase()}`
    const selected = new Map()
    const add = (name) => {
      if (BASE_TABLES[name]) selected.set(name, BASE_TABLES[name])
    }

    add('users')

    if (/(profile|account|customer|admin|member|role|login|auth)/.test(combined)) {
      add('profiles')
    }

    if (/(store|shop|product|service|package|listing|menu|inventory|ecommerce|commerce)/.test(combined)) {
      add('products')
    }

    if (/(book|booking|appointment|schedule|reservation|trip|hotel|flight|car rental|rental|cruise|calendar)/.test(combined)) {
      add('bookings')
    }

    if (/(checkout|order|cart|invoice|purchase|subscription|payment|stripe|pay)/.test(combined)) {
      add('orders')
      add('payments')
    }

    if (/(image|photo|upload|gallery|media|file|document|asset|graphic|logo)/.test(combined)) {
      add('media_assets')
    }

    if (/(message|chat|contact|support|notification|email|inbox)/.test(combined)) {
      add('messages')
    }

    if (/(analytics|report|dashboard|metric|tracker|revenue|conversion|event)/.test(combined)) {
      add('analytics_events')
    }

    return {
      tables: Array.from(selected.values()).map((table) => cloneTable(table)),
      relationships: this.generateRelationships(Array.from(selected.keys())),
      policies: [
        'Users can read and update their own profile data.',
        'Admins can manage operational tables.',
        'Payment provider secrets must stay server-side.',
        'Uploads require file type and size validation before storage.'
      ]
    }
  }

  generateRelationships(tableNames) {
    const relationships = []
    const has = (name) => tableNames.includes(name)

    if (has('profiles')) relationships.push('profiles.user_id -> users.id')
    if (has('bookings')) relationships.push('bookings.user_id -> users.id')
    if (has('orders')) relationships.push('orders.user_id -> users.id')
    if (has('payments')) relationships.push('payments.order_id -> orders.id')
    if (has('media_assets')) relationships.push('media_assets.owner_id -> users.id')
    if (has('messages')) relationships.push('messages.user_id -> users.id')
    if (has('analytics_events')) relationships.push('analytics_events.user_id -> users.id')

    return relationships
  }

  generateMigrationSql(schema) {
    return schema.tables.map((table) => {
      const columns = table.columns.map((column) => {
        const constraints = column.constraints?.join(' ') || ''
        return `  ${column.name} ${this.toSqlType(column.type)} ${constraints}`.trimEnd()
      }).join(',\n')

      return `create table if not exists ${table.name} (\n${columns}\n);`
    }).join('\n\n')
  }

  generateCrudPlan(schema) {
    return schema.tables.map((table) => ({
      table: table.name,
      operations: ['create', 'read', 'update', 'delete', 'list'],
      apiRoute: `/api/${table.name.replace(/_/g, '-')}`,
      adminScreen: `${table.name.replace(/_/g, ' ')} manager`
    }))
  }

  generateSeedPlan(schema) {
    return schema.tables.map((table) => ({
      table: table.name,
      rows: table.name === 'users' ? 2 : 3,
      purpose: `Preview/test records for ${table.purpose.toLowerCase()}`
    }))
  }

  toSqlType(type) {
    const map = {
      uuid: 'uuid',
      text: 'text',
      integer: 'integer',
      timestamp: 'timestamptz',
      json: 'jsonb'
    }

    return map[type] || 'text'
  }

  detectTemplates(lowerPrompt) {
    const matches = []

    if (/(user|login|auth|admin|customer|role|account|profile)/.test(lowerPrompt)) {
      matches.push(SCHEMA_TEMPLATES[0])
    }

    if (/(store|shop|order|booking|appointment|payment|checkout|hotel|flight|rental|trip|commerce)/.test(lowerPrompt)) {
      matches.push(SCHEMA_TEMPLATES[1])
    }

    if (/(blog|content|cms|gallery|image|page|post|media)/.test(lowerPrompt)) {
      matches.push(SCHEMA_TEMPLATES[2])
    }

    if (/(analytics|dashboard|report|tracker|metric|event|conversion)/.test(lowerPrompt)) {
      matches.push(SCHEMA_TEMPLATES[3])
    }

    return matches.length > 0 ? matches : [SCHEMA_TEMPLATES[0], SCHEMA_TEMPLATES[2]]
  }

  recommendAdapter(lowerPrompt, features = []) {
    const featureText = features.join(' ').toLowerCase()
    const combined = `${lowerPrompt} ${featureText}`

    if (/(image|upload|file|document|media|asset)/.test(combined)) {
      return DATABASE_ADAPTERS.find((adapter) => adapter.id === 'dreambuild-blob')
    }

    if (/(session|cache|setting|flag|token|rate limit)/.test(combined)) {
      return DATABASE_ADAPTERS.find((adapter) => adapter.id === 'dreambuild-kv')
    }

    if (/(production|sql|report|payment|booking|order|relational|admin)/.test(combined)) {
      return DATABASE_ADAPTERS.find((adapter) => adapter.id === 'dreambuild-postgres')
    }

    return DATABASE_ADAPTERS[0]
  }

  getLocalRecordCount() {
    return Object.keys(this.readState()).length
  }
}

export default new DreamBuildDatabaseService()
