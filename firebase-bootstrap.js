import 'zx/globals';

(async () => {
  $.verbose = true;
  const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || await question('Firebase project id (unique, lowercase): ');

  // Check if project exists
  const projectsList = (await $`firebase projects:list --json`.nothrow()).stdout || '{}';
  const projects = JSON.parse(projectsList).result || [];
  const exists = projects.some(p => p.projectId === FIREBASE_PROJECT_ID);

  if (!exists) {
    await $`firebase projects:create ${FIREBASE_PROJECT_ID} --display-name ${FIREBASE_PROJECT_ID}`;
  }

  // Set default project
  await $`firebase use ${FIREBASE_PROJECT_ID} --add`.nothrow();

  // Minimal firebase.json
  const firebaseJson = {
    hosting: {
      public: "public",
      ignore: ["firebase.json", "**/.*", "**/node_modules/**"]
    }
  };
  await fs.writeFile('./firebase.json', JSON.stringify(firebaseJson, null, 2));

  // Create public/index.html
  await fs.mkdirp('./public');
  if (!(await fs.exists('./public/index.html'))) {
    await fs.writeFile('./public/index.html', `
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>DreamBuild</title>
</head>
<body>
  <h1>DreamBuild is live 🚀</h1>
</body>
</html>
`);
  }

  // Create a Web App in Firebase and output config
  let webConfig;
  try {
    const createRes = (await $`firebase apps:create web dreambuild-web --project=${FIREBASE_PROJECT_ID} --json`.nothrow()).stdout || '{}';
    const data = JSON.parse(createRes);
    const appId = data.result?.appId;
    if (appId) {
      const cfgRes = (await $`firebase apps:sdkconfig web ${appId} --project=${FIREBASE_PROJECT_ID} --json`).stdout;
      webConfig = JSON.parse(cfgRes).result?.sdkConfig?.config;
    }
  } catch (e) {
    // Fetch existing config if app already exists
    const appsList = (await $`firebase apps:list web --project=${FIREBASE_PROJECT_ID} --json`.nothrow()).stdout || '{}';
    const apps = JSON.parse(appsList).result || [];
    if (apps[0]?.appId) {
      const cfgRes = (await $`firebase apps:sdkconfig web ${apps[0].appId} --project=${FIREBASE_PROJECT_ID} --json`).stdout;
      webConfig = JSON.parse(cfgRes).result?.sdkConfig?.config;
    }
  }

  // Write .env with Firebase config
  if (webConfig) {
    const envStr = [
      `VITE_FIREBASE_API_KEY=${webConfig.apiKey}`,
      `VITE_FIREBASE_AUTH_DOMAIN=${webConfig.authDomain}`,
      `VITE_FIREBASE_PROJECT_ID=${webConfig.projectId}`,
      `VITE_FIREBASE_STORAGE_BUCKET=${webConfig.storageBucket}`,
      `VITE_FIREBASE_MESSAGING_SENDER_ID=${webConfig.messagingSenderId || ''}`,
      `VITE_FIREBASE_APP_ID=${webConfig.appId || ''}`,
      `VITE_FIREBASE_MEASUREMENT_ID=${webConfig.measurementId || ''}`
    ].join('\n') + '\n';
    await fs.writeFile('./.env', envStr);
  }

  // Deploy Hosting
  await $`firebase deploy --only hosting --project ${FIREBASE_PROJECT_ID}`;

  console.log(`\n✅ Hosting deployed! Visit: https://${FIREBASE_PROJECT_ID}.web.app`);
})();
