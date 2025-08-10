# DreamBuild

A project with Firebase Hosting bootstrap capabilities.

## Prerequisites

Before running the Firebase bootstrap script, ensure you have:

1. **Node.js 18+** installed
2. **Firebase CLI** installed globally:
   ```bash
   npm install -g firebase-tools
   ```
3. **Firebase account** and logged in:
   ```bash
   firebase login
   ```

## Firebase Hosting Setup

The project includes an automated bootstrap script that sets up Firebase Hosting for you.

### Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the bootstrap script:**
   ```bash
   npm run firebase:init
   ```

   Or set the project ID via environment variable:
   ```bash
   FIREBASE_PROJECT_ID=your-project-id npm run firebase:init
   ```

### What the Script Does

The bootstrap script automatically:

1. Prompts for Firebase project ID (if not provided via env)
2. Creates a new Firebase project if it doesn't exist
3. Sets the project as default locally
4. Initializes Firebase Hosting with `public` directory
5. Creates a minimal `public/index.html` if missing
6. Creates a Firebase Web App and writes configuration to `.env`
7. Deploys the hosting to Firebase

### Generated Files

After running the script, you'll have:

- `firebase.json` - Firebase configuration
- `public/index.html` - Basic landing page
- `.env` - Firebase Web App configuration (for Vite)
- Firebase project and hosting setup

### Deployment

Your site will be available at:
```
https://your-project-id.web.app
```

## Manual Commands

If you prefer to run Firebase commands manually:

```bash
# List projects
firebase projects:list

# Create project
firebase projects:create your-project-id

# Initialize hosting
firebase init hosting

# Deploy
firebase deploy --only hosting
```

## Environment Variables

The script creates a `.env` file with Firebase configuration:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

These are prefixed with `VITE_` for use with Vite.js applications.
