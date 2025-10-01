# Security Notes for DreamBuild

## Firebase API Keys - Why They're Public

### Important: Firebase API Keys Are NOT Secrets

The Firebase API keys in `src/config/firebase.js` are **intentionally public** and safe to commit to the repository. Here's why:

1. **Client-Side Apps**: Firebase keys for web apps are always visible in:
   - Browser DevTools
   - Network requests
   - JavaScript bundle
   - Page source

2. **Security Model**: Firebase security works through:
   - ✅ **Firebase Security Rules** (Firestore, Storage)
   - ✅ **Firebase Authentication** (who can access what)
   - ✅ **Firebase App Check** (prevents unauthorized apps)
   - ❌ NOT through hiding the API key

3. **Official Documentation**: 
   > "Unlike how API keys are typically used, API keys for Firebase services are not used to control access to backend resources; that can only be done with Firebase Security Rules. Usually, you need to fastidiously guard API keys; however, API keys for Firebase services are ok to include in code or checked-in config files."
   
   Source: https://firebase.google.com/docs/projects/api-keys

## Real Security Measures

### 1. Firebase Security Rules
Ensure your Firestore and Storage rules properly restrict access:

```javascript
// Example Firestore Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /apps/{appId} {
      // Only allow reads if app is public
      allow read: if resource.data.isPublic == true;
      // Only allow writes if authenticated and is owner
      allow write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

### 2. Firebase App Check
Enable App Check to prevent unauthorized use of your Firebase resources:
- https://console.firebase.google.com/project/dreambuild-2024-app/appcheck

### 3. Quota Management
Set quotas and monitor usage to prevent abuse:
- https://console.firebase.google.com/project/dreambuild-2024-app/usage

## What IS Secret?

The following should NEVER be committed:
- ❌ Service account keys (`.json` files)
- ❌ Admin SDK credentials
- ❌ Server-side API keys
- ❌ OAuth client secrets
- ❌ Private keys (`.pem`, `.key` files)
- ❌ Environment files with sensitive data (`.env.local`)

## Development vs Production

**Development (.env.local):**
```bash
# Use environment variables for local development
VITE_FIREBASE_API_KEY=your_key_here
```

**Production (Firebase Hosting):**
- Values are baked into the build at compile time
- Fallback values in `firebase.js` are used
- This is normal and expected for client-side apps

## GitHub Secret Scanning

GitHub may flag Firebase API keys as "secrets." This is a false positive for client-side web apps. The keys are:
- ✅ Safe to be public
- ✅ Protected by Firebase Security Rules
- ✅ Standard practice for Firebase web apps

---

**Product of Bradley Virtual Solutions, LLC**

