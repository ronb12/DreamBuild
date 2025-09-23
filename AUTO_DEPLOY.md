# Auto Deploy Setup for DreamBuild

This project includes automatic deployment to GitHub main and Firebase hosting whenever changes are made to the source code.

## 🚀 Quick Start

### Option 1: Development with Auto-Deploy
```bash
npm run dev:auto
```
This starts both the development server and the file watcher for automatic deployment.

### Option 2: Manual Deployment
```bash
npm run deploy
```
This manually triggers a deployment to GitHub and Firebase.

### Option 3: Watch Mode Only
```bash
npm run watch:deploy
```
This starts only the file watcher without the development server.

## 📁 What Gets Watched

The auto-deploy system watches these files and directories:
- `src/**/*` - All source files
- `public/**/*` - Public assets
- `package.json` - Dependencies and scripts
- `vite.config.js` - Build configuration
- `firebase.json` - Firebase configuration

## 🚫 What Gets Ignored

These files are ignored to prevent unnecessary deployments:
- `node_modules/**` - Dependencies
- `dist/**` - Build output
- `.git/**` - Git files
- `*.log` - Log files
- Image files (`*.png`, `*.jpg`, etc.)
- Test files (`test-*.js`, `*.test.js`, etc.)
- Auto-deploy scripts themselves

## ⚙️ Configuration

The auto-deploy behavior can be configured in `auto-deploy.config.js`:

- **Debounce Delay**: 3 seconds after last change
- **Stability Threshold**: 1 second after file stops changing
- **Min Deploy Interval**: 10 seconds between deployments
- **Git Branch**: `main`
- **Firebase Target**: `hosting` only

## 🔄 How It Works

1. **File Watching**: Chokidar watches for changes in source files
2. **Debouncing**: Waits 3 seconds after last change to avoid multiple deployments
3. **Git Commit**: Automatically commits all changes with timestamp
4. **GitHub Push**: Pushes changes to main branch
5. **Build**: Runs production build
6. **Firebase Deploy**: Deploys to Firebase hosting

## 📊 Deployment Process

When changes are detected:

```
[INFO] File changed: src/components/AIPrompt.jsx
[INFO] Debounce timer expired, triggering deployment...
[INFO] 🚀 Starting auto deployment...
[INFO] Adding all changes to git...
[INFO] Creating commit with timestamp: 2025-09-23 09:15:30
[SUCCESS] Successfully pushed to GitHub main
[INFO] Building project for production...
[SUCCESS] Build completed successfully
[INFO] Deploying to Firebase hosting...
[SUCCESS] Successfully deployed to Firebase hosting
[SUCCESS] 🎉 Auto Deploy Complete!
```

## 🛠️ Manual Commands

- `npm run deploy` - Manual deployment
- `npm run watch:deploy` - Start file watcher only
- `npm run dev:auto` - Development with auto-deploy
- `./auto-deploy.sh` - Run deployment script directly

## 🔧 Troubleshooting

### If deployment fails:
1. Check git status: `git status`
2. Check Firebase login: `firebase login`
3. Check build: `npm run build`
4. Check logs in terminal

### If file watcher stops:
1. Press `Ctrl+C` to stop
2. Restart with `npm run watch:deploy`
3. Check for errors in console

### If changes aren't detected:
1. Check if file is in ignore list
2. Verify file path is correct
3. Check file permissions

## 📝 Notes

- The system uses debouncing to prevent multiple deployments from rapid changes
- Only production builds are deployed (not development builds)
- All deployments are logged with timestamps
- The system automatically handles git commits and pushes
- Firebase hosting is updated immediately after successful build

## 🌐 Live URLs

After successful deployment:
- **GitHub**: https://github.com/ronb12/DreamBuild
- **Firebase**: https://dreambuild-2024-app.web.app
