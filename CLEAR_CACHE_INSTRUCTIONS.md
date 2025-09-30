# 🚨 MANDATORY CACHE CLEARING FOR DREAMBUILD

## The Problem
Your browser cached the OLD version of DreamBuild before we fixed the game generator.
The NEW code is deployed, but your browser refuses to download it.

## THE SOLUTION (Choose ONE)

### Option 1: Incognito/Private Window (EASIEST - 30 seconds)
1. **Close ALL DreamBuild tabs** (important!)
2. Press **Cmd+Shift+N** (Chrome) or **Cmd+Shift+P** (Safari)
3. In the NEW incognito window, go to: https://dreambuild-2024-app.web.app
4. Navigate to AI Builder
5. Type: "Create tetris game"
6. Click Send

**This WILL work because incognito doesn't use cache.**

---

### Option 2: Nuclear Option (100% Guaranteed)
1. Quit Chrome completely (Cmd+Q)
2. Reopen Chrome
3. Go to: chrome://settings/clearBrowserData
4. Select:
   - ✅ Cached images and files
   - ✅ Cookies and other site data
   - Time range: **Last 7 days**
5. Click "Clear data"
6. Go to: https://dreambuild-2024-app.web.app
7. Try building Tetris

---

### Option 3: Service Worker Kill (Technical)
1. Go to: chrome://serviceworker-internals/
2. Find "dreambuild-2024-app.web.app"
3. Click **Unregister**
4. Go to: chrome://settings/siteData
5. Search for "dreambuild"
6. Click the trash icon to delete all data
7. Restart Chrome
8. Go to: https://dreambuild-2024-app.web.app

---

## How to Verify You Have the NEW Version

When you open DreamBuild in a truly fresh session:
- The app should load normally
- When you generate "Create tetris game", you should see:
  - ✅ A canvas element in the preview
  - ✅ Game mentions "block", "piece", or "tetris"
  - ❌ NOT a generic "Design" app

---

## Why This Keeps Happening

Service Workers are DESIGNED to aggressively cache web apps for offline use.
This is normally good, but during development it means old code sticks around.

**The fix IS deployed. Your browser just needs to download it fresh.**
