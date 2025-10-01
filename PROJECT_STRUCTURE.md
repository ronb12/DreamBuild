# DreamBuild Project Structure
**Product of Bradley Virtual Solutions, LLC**

## 📁 Root Directory Organization

```
DreamBuild/
├── 📄 Configuration Files
│   ├── package.json              # NPM dependencies
│   ├── vite.config.js           # Vite build config
│   ├── firebase.json            # Firebase hosting config
│   ├── firestore.rules          # Firestore security rules
│   ├── storage.rules            # Firebase storage rules
│   └── env.example              # Environment variables template
│
├── 📚 docs/                     # All documentation
│   ├── README.md                # Documentation index
│   ├── SECURITY.md              # Security best practices
│   ├── PWA-VERIFICATION.md      # PWA capabilities
│   └── [12 more documentation files]
│
├── 🧪 tests/                    # Organized test files
│   ├── README.md                # Test documentation
│   ├── scripts/                 # Test scripts (82 files)
│   ├── screenshots/             # Test screenshots
│   ├── logs/                    # Test execution logs
│   ├── reports/                 # Test result reports (JSON)
│   └── generated-apps/          # Sample generated apps
│
├── 🛠️ scripts/                  # Utility scripts
│   ├── clear-firebase-apps.js   # Firebase cleanup
│   ├── apply-button-fixes.cjs   # Code fixes
│   └── monitor-*.sh             # Progress monitors
│
├── 💻 src/                      # Source code
│   ├── main.jsx                 # App entry point
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles
│   │
│   ├── components/              # React components
│   │   ├── Preview.jsx          # Live preview
│   │   ├── CodeEditor.jsx       # Monaco editor
│   │   ├── FileManager.jsx      # File management
│   │   ├── ai/                  # AI components
│   │   └── [60+ components]
│   │
│   ├── pages/                   # Page components
│   │   ├── AIBuilder.jsx        # Main builder
│   │   ├── Dashboard.jsx        # User dashboard
│   │   └── [20+ pages]
│   │
│   ├── services/                # Business logic
│   │   ├── dreamBuildAI.js      # AI code generation (9,700 lines)
│   │   ├── firebaseService.js   # Firebase integration
│   │   ├── codeInjectionService.js
│   │   └── [38+ services]
│   │
│   ├── contexts/                # React contexts
│   │   ├── ProjectContext.jsx   # Project state
│   │   ├── AuthContext.jsx      # Authentication
│   │   └── [4 contexts]
│   │
│   ├── config/                  # Configuration
│   │   └── firebase.js          # Firebase config
│   │
│   ├── data/                    # Static data
│   │   └── tutorialData.js      # Tutorial content
│   │
│   └── utils/                   # Utility functions
│       └── navigation.js
│
├── 🌐 public/                   # Static assets
│   ├── icons/                   # App icons
│   ├── manifest.json            # PWA manifest
│   └── sw.js                    # Service worker
│
├── 🖥️ server/                   # Server code (if needed)
│   └── services/
│
├── 📦 dist/                     # Build output (gitignored)
├── 🔒 node_modules/             # Dependencies (gitignored)
└── 🔥 .firebase/                # Firebase cache (gitignored)
```

## 🎯 Key Directories Explained

### `/src/services/dreamBuildAI.js`
The heart of DreamBuild - 9,700+ lines of AI code generation including:
- 33+ app type patterns
- 6 unique game implementations (Tetris, Snake, Pong, Breakout, Flappy Bird, Space Invaders)
- Universal template for unlimited app types
- PWA generation (manifest.json, service worker)
- Incremental development support

### `/src/components/`
60+ React components organized by feature:
- **Core:** Preview, CodeEditor, FileManager, Terminal
- **AI:** AIPromptSimplified, AIModelSelector
- **Collaboration:** Git integration, deployment panels
- **UI:** Navbar, Footer, Modals, Dialogs

### `/docs/`
13 documentation files covering:
- Feature documentation (PWA, Games)
- Fix documentation (Blob URL, Button fixes)
- Test guides (Manual testing)
- Achievement reports (100% pass rate)

### `/tests/`
Organized test structure:
- **scripts/**: 82 test scripts
- **screenshots/**: Visual test results
- **logs/**: Execution logs
- **reports/**: JSON test results
- **generated-apps/**: Sample outputs

## 📝 File Naming Conventions

### Tests
- `test-*.cjs` - Test scripts
- `verify-*.cjs` - Verification scripts
- `*-analysis.cjs` - Analysis scripts
- `debug-*.cjs` - Debug scripts

### Documentation
- `*-VERIFICATION.md` - Feature verification docs
- `*-FIX.md` - Fix documentation
- `*-GUIDE.md` - User guides
- `*-REPORT.md` - Test reports

### Components
- PascalCase for components: `AIBuilder.jsx`
- Descriptive names: `WindowAwareAIBuilder.jsx`

### Services
- camelCase for services: `dreamBuildAI.js`
- Feature-based: `incrementalDevelopmentService.js`

## 🚫 What's NOT Version Controlled

(See `.gitignore`)

- `node_modules/` - Dependencies
- `dist/` - Build output
- `.firebase/` - Firebase cache
- `tests/logs/*.log` - Test logs
- `tests/reports/*.json` - Test reports
- `tests/screenshots/*.png` - Screenshots
- `tests/generated-apps/*` - Generated test apps
- `.env*` - Environment variables

## 🔄 Build & Deploy Workflow

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build            # Build for production

# Deploy
firebase deploy --only hosting

# Test
node tests/scripts/test-50-games.cjs
node tests/scripts/test-30-apps.cjs
```

## 📊 Project Stats

- **Total Components:** 60+
- **Total Services:** 41
- **Total Pages:** 20+
- **Lines of AI Code:** 9,700+ (dreamBuildAI.js)
- **Test Scripts:** 82
- **Documentation Files:** 13
- **Supported App Types:** 33+ specific + unlimited via universal template
- **Unique Game Implementations:** 6

## 🎯 Main Entry Points

- **Web App:** `src/main.jsx` → `src/App.jsx`
- **AI Builder:** `src/pages/AIBuilder.jsx`
- **AI Engine:** `src/services/dreamBuildAI.js`
- **Preview:** `src/components/Preview.jsx`

## 🔧 Configuration Files

- **Vite:** `vite.config.js` - Build configuration
- **Firebase:** `firebase.json` - Hosting & deployment
- **Security:** `firestore.rules`, `storage.rules`
- **Environment:** `env.example` - Template for `.env.local`

---

*This structure keeps the project organized, maintainable, and scalable.*  
*Product of Bradley Virtual Solutions, LLC*
