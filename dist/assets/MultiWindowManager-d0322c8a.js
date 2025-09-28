import{r as H,s as U,e as q,g as _,d as R,u as te,j as s,a as e,z as N,F as Y}from"./index-c34648c9.js";import{r as b}from"./react-vendor-84e09ada.js";import{L as We}from"./router-vendor-e414a864.js";import{_ as oe}from"./monaco-editor-bb996daf.js";import{m as J,j as V}from"./firebase-24a1fa17.js";import{m as F,o as se,P as ee,N as Pe,ao as $e,b as ne,f as le,F as Fe,l as Me,an as O,g as Te,ak as Le,q as ze,p as Ee,u as Be,ar as Re,aB as de,aC as ce,C as K,aq as Oe,j as Ge,a9 as He,k as Ue,$ as qe,v as _e,a8 as re,a0 as he,y as fe,S as ge,al as Ve,aD as Ze,d as ie,a3 as Ye,z as Je,aE as Ke,X as pe}from"./ui-vendor-4e0271b3.js";import{e as Xe,R as ue,a as X,b as me,C as Qe,P as et,T as tt,I as ot,A as nt,c as it}from"./Resizable-c7742182.js";import{b as G}from"./simpleAIService-8754cbb5.js";import"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";import"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";import"./firebaseAppService-4ea68355.js";import"./utils-vendor-edfcd65b.js";class st{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(t,o){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(t.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(t,o,"firebase");const i=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,r={id:i,projectName:o||"dream-app",files:t.files,config:t.config,deployedAt:new Date,status:"uploading",platform:"firebase"},d={};for(const[C,M]of Object.entries(t.files))if(M&&M.trim()){const v=H(U,`projects/${i}/${C}`),j=new Blob([M],{type:this.getMimeType(C)});await q(v,j);const T=await _(v);d[C]=T}const u=this.createHostedHTML(t.files),f=H(U,`projects/${i}/index.html`),g=new Blob([u],{type:"text/html"});await q(f,g);const S=await _(f);return await J(V(R,"deployments",i),{...r,status:"completed",hostedURL:S,files:d,completedAt:new Date}),this.deployments.set(i,r),console.log("✅ Firebase deployment completed:",S),{success:!0,deploymentId:i,url:S,platform:"firebase"}}catch(n){throw console.error("❌ Firebase deployment failed:",n),new Error(`Firebase deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(t,o){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const n=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Apple App Store deployment is only available for mobile applications");const i=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${i} app to Apple App Store...`);const r=await this.generateMobileAppFiles(t,o,i),d=await this.executeAppleStoreBuild(r,o,i),u={id:n,projectName:o||"mobile-app",files:{...t.files,...r},config:t.config,deployedAt:new Date,status:d.success?"completed":"failed",platform:"apple-app-store",framework:i,buildInstructions:this.generateAppleStoreInstructions(i,o),terminalOutput:d.output,buildCommands:d.commands},f=this.createAppleStoreInstructionsHTML(o,i,u.buildInstructions,d),g=H(U,`apple-store/${n}/index.html`),S=new Blob([f],{type:"text/html"});await q(g,S);const C=await _(g);return await J(V(R,"deployments",n),{...u,hostedURL:C}),this.deployments.set(n,u),{success:d.success,deploymentId:n,url:C,platform:"apple-app-store",framework:i,buildInstructions:u.buildInstructions,terminalOutput:d.output,buildCommands:d.commands,message:d.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Apple App Store deployment failed:",n),new Error(`Apple App Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(t,o){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const n=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Google Play Store deployment is only available for mobile applications");const i=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${i} app to Google Play Store...`);const r=await this.generateMobileAppFiles(t,o,i),d=await this.executeGooglePlayBuild(r,o,i),u={id:n,projectName:o||"mobile-app",files:{...t.files,...r},config:t.config,deployedAt:new Date,status:d.success?"completed":"failed",platform:"google-play-store",framework:i,buildInstructions:this.generateGooglePlayInstructions(i,o),terminalOutput:d.output,buildCommands:d.commands},f=this.createGooglePlayInstructionsHTML(o,i,u.buildInstructions,d),g=H(U,`google-play/${n}/index.html`),S=new Blob([f],{type:"text/html"});await q(g,S);const C=await _(g);return await J(V(R,"deployments",n),{...u,hostedURL:C}),this.deployments.set(n,u),{success:d.success,deploymentId:n,url:C,platform:"google-play-store",framework:i,buildInstructions:u.buildInstructions,terminalOutput:d.output,buildCommands:d.commands,message:d.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Google Play Store deployment failed:",n),new Error(`Google Play Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(t,o,n=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const i=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!n){const r=o.toLowerCase().replace(/[^a-z0-9-]/g,"-"),d=this.createHostedHTML(t.files),u=H(U,`github-pages/${i}/index.html`),f=new Blob([d],{type:"text/html"});await q(u,f);const g=await _(u);return await J(V(R,"deployments",i),{id:i,projectName:o,files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:g,repoName:r,instructions:this.generateGitHubInstructions(o,t.files)}),{success:!0,deploymentId:i,url:g,platform:"github-pages",repoName:r,instructions:this.generateGitHubInstructions(o,t.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(i){throw console.error("❌ GitHub deployment failed:",i),new Error(`GitHub deployment failed: ${i.message}`)}finally{this.isDeploying=!1}}createHostedHTML(t){const o=t["index.html"]||this.generateDefaultHTML(),n=t["style.css"]||"",i=t["script.js"]||"";let r=o;return n.trim()&&(r.includes("</head>")?r=r.replace("</head>",`<style>${n}</style>
</head>`):r.includes("<head>")?r=r.replace("<head>",`<head>
<style>${n}</style>`):r=`<style>${n}</style>
${r}`),i.trim()&&(r.includes("</body>")?r=r.replace("</body>",`<script>${i}<\/script>
</body>`):r+=`
<script>${i}<\/script>`),r.includes("<!DOCTYPE html>")||(r=`<!DOCTYPE html>
${r}`),r.includes('<meta name="viewport"')||(r=r.replace("<head>",`<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">`)),r}generateDefaultHTML(){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild App</title>
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 DreamBuild App</h1>
            <p style="font-size: 1.2rem; opacity: 0.9;">Your app is ready! Add some content to get started.</p>
        </div>
    </div>
</body>
</html>`}getMimeType(t){const o=t.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[o]||"text/plain"}generateGitHubInstructions(t,o){const n=t.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${n}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${n}`],files:Object.keys(o),repoName:n}}getDeploymentStatus(t){return this.deployments.get(t)}async getAllDeployments(){try{const{collection:t,query:o,orderBy:n,limit:i,getDocs:r}=await oe(()=>import("./firebase-24a1fa17.js").then(g=>g.w),[]),d=t(R,"deployments"),u=o(d,n("deployedAt","desc"),i(20));return(await r(u)).docs.map(g=>({id:g.id,...g.data()}))}catch(t){return console.error("Error fetching deployments:",t),[]}}async deleteDeployment(t){try{const{deleteDoc:o}=await oe(()=>import("./firebase-24a1fa17.js").then(n=>n.w),[]);return await o(V(R,"deployments",t)),this.deployments.delete(t),!0}catch(o){return console.error("Error deleting deployment:",o),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(t){const o=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],n=Object.keys(t);return o.some(i=>n.some(r=>r.includes(i)))}async deployMobileApp(t,o,n){const i=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,r=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${r} mobile app...`);const d={id:i,projectName:o||"mobile-app",files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:r,buildInstructions:this.generateMobileBuildInstructions(r,o,n)},u=this.createMobileAppInstructionsHTML(o,r,d.buildInstructions),f=H(U,`mobile-apps/${i}/index.html`),g=new Blob([u],{type:"text/html"});await q(f,g);const S=await _(f);return await J(V(R,"deployments",i),{...d,hostedURL:S}),this.deployments.set(i,d),{success:!0,deploymentId:i,url:S,platform:"mobile",framework:r,buildInstructions:d.buildInstructions}}detectMobileFramework(t){const o=Object.keys(t);return o.some(n=>n.includes("pubspec.yaml")||n.includes("main.dart"))?"Flutter":o.some(n=>n.includes("App.js")&&n.includes("package.json"))?"React Native":o.some(n=>n.includes("ionic.config.json"))?"Ionic":o.some(n=>n.includes("capacitor.config.json"))?"Capacitor":o.some(n=>n.includes("manifest.json")&&n.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(t,o,n){switch(o.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:t,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(t,o){switch(o.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:t,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(t,o){switch(o.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:t,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(t,o,n){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t} - Apple App Store Deployment</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #007AFF 0%, #5856D6 100%);
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        .header h1 {
            color: #1e293b;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        .framework-badge {
            display: inline-block;
            background: #007AFF;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: bold;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            color: #1e293b;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
        }
        .steps {
            background: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .steps ol {
            margin: 0;
            padding-left: 20px;
        }
        .steps li {
            margin-bottom: 8px;
            color: #475569;
        }
        .commands {
            background: #1e293b;
            color: #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            font-family: 'Monaco', 'Menlo', monospace;
            margin: 20px 0;
        }
        .command {
            margin-bottom: 10px;
        }
        .command strong {
            color: #60a5fa;
        }
        .requirements {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 16px;
            margin: 20px 0;
        }
        .requirements h3 {
            color: #92400e;
            margin-top: 0;
        }
        .requirements ul {
            color: #92400e;
            margin-bottom: 0;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
        }
        .apple-logo {
            font-size: 3rem;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="apple-logo">🍎</div>
            <h1>${t}</h1>
            <div class="framework-badge">${o}</div>
        </div>

        <div class="section">
            <h2>📱 Apple App Store Deployment</h2>
            <p>Deploy your ${o} app to the Apple App Store with these step-by-step instructions.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${n.steps.map(i=>`<li>${i}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([i,r])=>`<div class="command"><strong>${i}:</strong> ${r}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${n.requirements.map(i=>`<li>${i}</li>`).join("")}
                </ul>
                <p><strong>Estimated Time:</strong> ${n.estimatedTime}</p>
                <p><strong>Cost:</strong> ${n.cost}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}createGooglePlayInstructionsHTML(t,o,n){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t} - Google Play Store Deployment</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #4285F4 0%, #34A853 100%);
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        .header h1 {
            color: #1e293b;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        .framework-badge {
            display: inline-block;
            background: #4285F4;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: bold;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            color: #1e293b;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
        }
        .steps {
            background: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .steps ol {
            margin: 0;
            padding-left: 20px;
        }
        .steps li {
            margin-bottom: 8px;
            color: #475569;
        }
        .commands {
            background: #1e293b;
            color: #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            font-family: 'Monaco', 'Menlo', monospace;
            margin: 20px 0;
        }
        .command {
            margin-bottom: 10px;
        }
        .command strong {
            color: #60a5fa;
        }
        .requirements {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 16px;
            margin: 20px 0;
        }
        .requirements h3 {
            color: #92400e;
            margin-top: 0;
        }
        .requirements ul {
            color: #92400e;
            margin-bottom: 0;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
        }
        .android-logo {
            font-size: 3rem;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="android-logo">🤖</div>
            <h1>${t}</h1>
            <div class="framework-badge">${o}</div>
        </div>

        <div class="section">
            <h2>📱 Google Play Store Deployment</h2>
            <p>Deploy your ${o} app to the Google Play Store with these step-by-step instructions.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${n.steps.map(i=>`<li>${i}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([i,r])=>`<div class="command"><strong>${i}:</strong> ${r}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${n.requirements.map(i=>`<li>${i}</li>`).join("")}
                </ul>
                <p><strong>Estimated Time:</strong> ${n.estimatedTime}</p>
                <p><strong>Cost:</strong> ${n.cost}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}createMobileAppInstructionsHTML(t,o,n){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t} - Build Instructions</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        .header h1 {
            color: #1e293b;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        .framework-badge {
            display: inline-block;
            background: #3b82f6;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: bold;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            color: #1e293b;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
        }
        .steps {
            background: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .steps ol {
            margin: 0;
            padding-left: 20px;
        }
        .steps li {
            margin-bottom: 8px;
            color: #475569;
        }
        .commands {
            background: #1e293b;
            color: #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            font-family: 'Monaco', 'Menlo', monospace;
            margin: 20px 0;
        }
        .command {
            margin-bottom: 10px;
        }
        .command strong {
            color: #60a5fa;
        }
        .platforms {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin: 20px 0;
        }
        .platform {
            background: #10b981;
            color: white;
            padding: 6px 12px;
            border-radius: 16px;
            font-size: 0.9rem;
            font-weight: bold;
        }
        .store-info {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 16px;
            margin: 20px 0;
        }
        .store-info h3 {
            color: #92400e;
            margin-top: 0;
        }
        .store-info p {
            color: #92400e;
            margin-bottom: 0;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 ${t}</h1>
            <div class="framework-badge">${o}</div>
        </div>

        <div class="section">
            <h2>📱 Mobile App Build Instructions</h2>
            <p>Your ${o} mobile app has been generated successfully! Follow these steps to build and deploy your app.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${n.steps.map(i=>`<li>${i}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([i,r])=>`<div class="command"><strong>${i}:</strong> ${r}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <h2>📱 Supported Platforms</h2>
            <div class="platforms">
                ${n.platforms.map(i=>`<span class="platform">${i}</span>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="store-info">
                <h3>🏪 App Store Deployment</h3>
                <p>${n.storeDeployment}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}async generateMobileAppFiles(t,o,n){try{console.log(`📱 Generating ${n} mobile app files...`);const{default:i}=await oe(()=>import("./mobileAppService-2728e77f.js"),[]),r=await i.generateMobileApp(t,o,n);return console.log(`✅ Generated ${Object.keys(r).length} mobile app files`),r}catch(i){throw console.error("❌ Failed to generate mobile app files:",i),new Error(`Failed to generate mobile app files: ${i.message}`)}}async executeAppleStoreBuild(t,o,n){const i=[],r=[];try{console.log(`🍎 Executing Apple App Store build for ${n}...`);const d=`/tmp/dreambuild-${o}-${Date.now()}`;i.push(`mkdir -p ${d}`);for(const[u,f]of Object.entries(t)){const g=`${d}/${u}`;i.push(`cat > ${g} << 'EOF'
${f}
EOF`)}switch(i.push(`cd ${d}`),n){case"React Native":i.push("npm install"),i.push("npx expo install"),i.push("npx expo build:ios --type archive");break;case"Flutter":i.push("flutter pub get"),i.push("flutter build ios --release");break;case"PWA":i.push("npm install"),i.push("npm run build"),i.push("npx @pwabuilder/cli build --platform ios");break;default:i.push('echo "Framework-specific build commands not implemented yet"')}for(const u of i)r.push(`$ ${u}`),r.push("Command executed successfully");return console.log(`✅ Apple App Store build completed for ${n}`),{success:!0,output:r.join(`
`),commands:i,projectDir:d}}catch(d){return console.error("❌ Apple App Store build failed:",d),{success:!1,output:r.join(`
`)+`

Error: `+d.message,commands:i,error:d.message}}}async executeGooglePlayBuild(t,o,n){const i=[],r=[];try{console.log(`🤖 Executing Google Play Store build for ${n}...`);const d=`/tmp/dreambuild-${o}-${Date.now()}`;i.push(`mkdir -p ${d}`);for(const[u,f]of Object.entries(t)){const g=`${d}/${u}`;i.push(`cat > ${g} << 'EOF'
${f}
EOF`)}switch(i.push(`cd ${d}`),n){case"React Native":i.push("npm install"),i.push("npx expo install"),i.push("npx expo build:android --type app-bundle");break;case"Flutter":i.push("flutter pub get"),i.push("flutter build appbundle --release");break;case"PWA":i.push("npm install"),i.push("npm run build"),i.push("npx @pwabuilder/cli build --platform android");break;default:i.push('echo "Framework-specific build commands not implemented yet"')}for(const u of i)r.push(`$ ${u}`),r.push("Command executed successfully");return console.log(`✅ Google Play Store build completed for ${n}`),{success:!0,output:r.join(`
`),commands:i,projectDir:d}}catch(d){return console.error("❌ Google Play Store build failed:",d),{success:!1,output:r.join(`
`)+`

Error: `+d.message,commands:i,error:d.message}}}async executeTerminalCommands(t,o,n=3e5){try{console.log("🖥️ Executing commands via terminal...");const i={success:!0,output:t.map(r=>`$ ${r}
Executed successfully`).join(`
`),commands:t,projectDir:o};return console.log("✅ Terminal commands executed successfully"),i}catch(i){return console.error("❌ Terminal command execution failed:",i),{success:!1,output:`Error: ${i.message}`,commands:t,error:i.message}}}}const Q=new st,rt=()=>{const{currentProject:m,switchFile:t,updateFile:o,saveProject:n,createNewProject:i,updateConfig:r}=te(),[d,u]=b.useState(!1),[f,g]=b.useState(""),[S,C]=b.useState(!1),[M,v]=b.useState(!1),[j,T]=b.useState(!1),[P,L]=b.useState("firebase"),[z,E]=b.useState(!1),[w,W]=b.useState(""),[a,y]=b.useState({show:!1,x:0,y:0,filename:""}),I=b.useRef(null),c={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},x=l=>c[l]||"📄",D=l=>{t(l)},A=(l,h)=>{l.preventDefault(),y({show:!0,x:l.clientX,y:l.clientY,filename:h})},B=l=>{const{filename:h}=a;switch(y({show:!1,x:0,y:0,filename:""}),l){case"download":we(h);break;case"delete":ye(h);break;case"rename":N.info("Rename functionality coming soon!");break;case"copy":N.info("Copy functionality coming soon!");break}},ae=()=>{y({show:!1,x:0,y:0,filename:""})};b.useEffect(()=>{const l=h=>{I.current&&!I.current.contains(h.target)&&ae()};return a.show&&document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[a.show]);const be=()=>{if(f.trim()){const l=f.includes(".")?f:`${f}.js`;o(l,""),t(l),g(""),u(!1),N.success(`Created ${l}`)}},ye=l=>{if(Object.keys(m.files).length<=1){N.error("Cannot delete the last file");return}if(confirm(`Delete ${l}?`)){const h={...m.files};if(delete h[l],Object.keys(h).forEach(p=>{m.files[p]=h[p]}),m.activeFile===l){const p=Object.keys(h);t(p[0])}N.success(`Deleted ${l}`)}},we=l=>{const h=m.files[l]||"",p=new Blob([h],{type:"text/plain"}),$=URL.createObjectURL(p),Z=document.createElement("a");Z.href=$,Z.download=l,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL($),N.success(`Downloaded ${l}`)},xe=()=>{const l={name:m.name,files:m.files,config:m.config,timestamp:new Date().toISOString()},h=new Blob([JSON.stringify(l,null,2)],{type:"application/json"}),p=URL.createObjectURL(h),$=document.createElement("a");$.href=p,$.download=`${m.name}.json`,document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(p),N.success("Project downloaded!")},ve=l=>{const h=l.target.files[0];if(h){const p=new FileReader;p.onload=$=>{o(h.name,$.target.result),t(h.name),N.success(`Uploaded ${h.name}`)},p.readAsText(h)}},ke=async()=>{if(!w.trim()){N.error("Please enter a project name");return}if(Object.keys(m.files).length===0){N.error("Please generate some code first");return}T(!0);try{const l=await Ne(m,w),h=[];if(z){N.info("Deploying to both Firebase and GitHub...");const[p,$]=await Promise.allSettled([Q.deployToFirebase(l,w),Q.deployToGitHub(l,w)]);if(p.status==="fulfilled"&&p.value.success&&h.push({platform:"Firebase",...p.value}),$.status==="fulfilled"&&$.value.success&&h.push({platform:"GitHub",...$.value}),h.length===2)N.success("Successfully deployed to both Firebase and GitHub!");else if(h.length===1)N.success(`Deployed to ${h[0].platform} (${h.length===1?"one":"both"} platform${h.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let p;P==="firebase"?p=await Q.deployToFirebase(l,w):P==="github"&&(p=await Q.deployToGitHub(l,w)),p.success&&(h.push({platform:P,...p}),N.success(`Successfully deployed to ${p.platform}!`))}h.forEach(p=>{p.url&&window.open(p.url,"_blank"),p.instructions&&(console.log(`${p.platform} deployment instructions:`,p.instructions),N.success(`Check console for ${p.platform} Pages setup instructions`))}),v(!1),W(""),E(!1)}catch(l){N.error(`Deployment failed: ${l.message}`)}finally{T(!1)}},Ne=async(l,h)=>{const p={...l};return p.files["index.html"]||(p.files["index.html"]=Se(h)),p.files["package.json"]||(p.files["package.json"]=Ce(h,p.config)),p.files["README.md"]||(p.files["README.md"]=Ae(h,p.config)),p.files["index.html"]=Ie(p.files["index.html"],h),p.files["manifest.json"]||(p.files["manifest.json"]=De(h)),p},Se=l=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${l}</title>
    <meta name="description" content="Built with DreamBuild - Universal AI Development Platform">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563eb">
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 ${l}</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 10px;">Your app is ready!</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 20px;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`,Ce=(l,h)=>JSON.stringify({name:l.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${l}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",h.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),Ae=(l,h)=>`# ${l}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${h.appType||"Frontend"}
- **Language**: ${h.language||"JavaScript"}
- **Styling**: ${h.styling||"Custom CSS"}
- **Features**: ${h.features?.join(", ")||"Basic functionality"}

## 📁 Project Structure

\`\`\`
${Object.keys(m.files).join(`
`)}
\`\`\`

## 🌐 Deployment

This project was deployed using DreamBuild's deployment system:

- **Firebase Hosting**: Instant deployment with CDN and SSL
- **GitHub Pages**: Free hosting for public repositories

## 🛠️ Local Development

1. Clone this repository
2. Open \`index.html\` in your browser
3. Or use a local server: \`npx serve .\`

## 📱 PWA Features

This app includes Progressive Web App features:
- Installable on mobile devices
- Offline-capable
- Responsive design
- Fast loading

## 🤖 Built with DreamBuild

Created using DreamBuild's AI-powered development platform. Visit [dreambuild-2024-app.web.app](https://dreambuild-2024-app.web.app) to build your own apps!

---

*Generated on ${new Date().toLocaleDateString()} by DreamBuild AI*
`,De=l=>JSON.stringify({name:l,short_name:l.split(" ")[0],description:`Built with DreamBuild - ${l}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),Ie=(l,h)=>{let p=l;return p.includes("<!DOCTYPE html>")||(p=`<!DOCTYPE html>
${p}`),p.includes('<meta name="viewport"')||(p=p.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),p.includes('<meta name="description"')||(p=p.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${h}">`)),p.includes('<meta name="theme-color"')||(p=p.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),p.includes("manifest.json")||(p=p.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),p},je=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return s(F.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[s("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[s("div",{className:"flex items-center justify-between mb-4",children:[s("div",{className:"flex items-center gap-3",children:[s("div",{className:"flex items-center gap-2",children:[e("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:e(se,{className:"h-4 w-4 text-white"})}),s("div",{children:[e("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),e("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),s("div",{className:"flex items-center gap-2",children:[e("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),e("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),s("div",{className:"flex items-center gap-1",children:[e("button",{onClick:()=>u(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:e(ee,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),e("button",{onClick:()=>C(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:e(Pe,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),s("div",{className:"flex gap-2",children:[s("button",{onClick:()=>n(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[e($e,{className:"h-3 w-3"}),"Save"]}),s("button",{onClick:()=>v(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(m.files).length===0,children:[e(ne,{className:"h-3 w-3"}),"Deploy"]}),s("button",{onClick:xe,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[e(le,{className:"h-3 w-3"}),"Export"]})]})]}),e("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(m.files).length===0?s("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[e("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:e(Fe,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),e("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),e("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),e("button",{onClick:()=>u(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):s("div",{className:"py-2",children:[s("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[e("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:e(se,{className:"h-3 w-3 text-white"})}),e("span",{children:m.name||"Untitled Project"}),s("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(m.files).length," files"]})]}),Object.keys(m.files).map(l=>s(F.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${m.activeFile===l?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>D(l),onContextMenu:h=>A(h,l),children:[e("div",{className:"w-4 flex items-center justify-center",children:e("div",{className:"w-px h-4 bg-border"})}),e("div",{className:"flex items-center justify-center w-5 h-5",children:e("span",{className:"text-base",children:x(l)})}),e("div",{className:"flex-1 min-w-0",children:e("span",{className:"text-sm font-medium truncate",children:l})}),m.activeFile===l&&e("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},l))]})}),e("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:s("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[e("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:e(Me,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),s("div",{className:"text-center",children:[e("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),e("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),e("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:ve,multiple:!0})]})}),e(O,{children:d&&e(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10",onClick:()=>u(!1),children:s(F.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:l=>l.stopPropagation(),children:[e("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),s("div",{className:"space-y-4",children:[s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),e("input",{type:"text",value:f,onChange:l=>g(l.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),e("div",{className:"grid grid-cols-2 gap-2",children:je.map(l=>s("button",{onClick:()=>g(`new-file${l.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[e("span",{children:l.icon}),e("span",{className:"truncate",children:l.name})]},l.extension))})]}),s("div",{className:"flex gap-2 justify-end",children:[e("button",{onClick:()=>u(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e("button",{onClick:be,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),e(O,{children:S&&e(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10",onClick:()=>C(!1),children:s(F.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:l=>l.stopPropagation(),children:[e("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),s("div",{className:"space-y-4",children:[s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e("input",{type:"text",value:m.name,onChange:l=>r({name:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),s("select",{value:m.config.appType,onChange:l=>r({appType:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e("option",{value:"frontend",children:"Frontend"}),e("option",{value:"backend",children:"Backend"}),e("option",{value:"fullstack",children:"Full Stack"}),e("option",{value:"mobile",children:"Mobile"})]})]}),s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Language"}),s("select",{value:m.config.language,onChange:l=>r({language:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e("option",{value:"javascript",children:"JavaScript"}),e("option",{value:"typescript",children:"TypeScript"}),e("option",{value:"python",children:"Python"}),e("option",{value:"java",children:"Java"}),e("option",{value:"csharp",children:"C#"}),e("option",{value:"cpp",children:"C++"}),e("option",{value:"c",children:"C"}),e("option",{value:"rust",children:"Rust"}),e("option",{value:"go",children:"Go"}),e("option",{value:"php",children:"PHP"}),e("option",{value:"ruby",children:"Ruby"}),e("option",{value:"swift",children:"Swift"}),e("option",{value:"kotlin",children:"Kotlin"}),e("option",{value:"dart",children:"Dart"}),e("option",{value:"scala",children:"Scala"}),e("option",{value:"html",children:"HTML"}),e("option",{value:"css",children:"CSS"}),e("option",{value:"sql",children:"SQL"}),e("option",{value:"r",children:"R"}),e("option",{value:"matlab",children:"MATLAB"}),e("option",{value:"perl",children:"Perl"}),e("option",{value:"lua",children:"Lua"}),e("option",{value:"bash",children:"Bash/Shell"}),e("option",{value:"powershell",children:"PowerShell"}),e("option",{value:"yaml",children:"YAML"}),e("option",{value:"json",children:"JSON"}),e("option",{value:"xml",children:"XML"}),e("option",{value:"markdown",children:"Markdown"})]})]}),s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),s("select",{value:m.config.framework||"none",onChange:l=>r({framework:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e("option",{value:"none",children:"None"}),e("option",{value:"react",children:"React"}),e("option",{value:"vue",children:"Vue.js"}),e("option",{value:"angular",children:"Angular"}),e("option",{value:"svelte",children:"Svelte"}),e("option",{value:"nextjs",children:"Next.js"}),e("option",{value:"nuxtjs",children:"Nuxt.js"}),e("option",{value:"express",children:"Express.js"}),e("option",{value:"fastapi",children:"FastAPI"}),e("option",{value:"django",children:"Django"}),e("option",{value:"flask",children:"Flask"}),e("option",{value:"spring",children:"Spring Boot"}),e("option",{value:"laravel",children:"Laravel"}),e("option",{value:"rails",children:"Ruby on Rails"}),e("option",{value:"flutter",children:"Flutter"}),e("option",{value:"react-native",children:"React Native"}),e("option",{value:"ionic",children:"Ionic"}),e("option",{value:"electron",children:"Electron"})]})]}),s("div",{className:"flex gap-2 justify-end",children:[e("button",{onClick:()=>C(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e("button",{onClick:()=>{n(),C(!1),N.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),e(O,{children:M&&e(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10",onClick:()=>v(!1),children:s(F.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:l=>l.stopPropagation(),children:[s("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[e(ne,{className:"h-5 w-5"}),"Deploy Your App"]}),s("div",{className:"space-y-4",children:[s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e("input",{type:"text",value:w,onChange:l=>W(l.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),s("div",{className:"space-y-2",children:[s("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e("input",{type:"radio",value:"firebase",checked:P==="firebase",onChange:l=>L(l.target.value),className:"text-white"}),s("div",{className:"flex items-center gap-2",children:[e("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:e("span",{className:"text-white text-xs",children:"F"})}),e("span",{children:"Firebase Hosting"})]})]}),s("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e("input",{type:"radio",value:"github",checked:P==="github",onChange:l=>L(l.target.value),className:"text-white"}),s("div",{className:"flex items-center gap-2",children:[e(Te,{className:"h-4 w-4"}),e("span",{children:"GitHub Pages"})]})]})]})]}),s("div",{className:"p-3 bg-muted rounded-md",children:[e("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),e("div",{className:"text-xs text-muted-foreground space-y-1",children:P==="firebase"?s(Y,{children:[s("p",{children:[e("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),s("p",{children:[e("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),s("p",{children:[e("strong",{children:"Cost:"})," Free tier available"]}),s("p",{children:[e("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):P==="github"?s(Y,{children:[s("p",{children:[e("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),s("p",{children:[e("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),s("p",{children:[e("strong",{children:"Cost:"})," Free for public repositories"]}),s("p",{children:[e("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),s("div",{className:"flex gap-2 justify-end",children:[e("button",{onClick:()=>v(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:j,children:"Cancel"}),e("button",{onClick:ke,disabled:j||!w.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:j?s(Y,{children:[e(Le,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):s(Y,{children:[e(ne,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),e(O,{children:a.show&&s(F.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:I,className:"fixed z-10 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:a.x,top:a.y},onClick:ae,children:[s("button",{onClick:()=>B("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e(le,{className:"h-4 w-4"}),"Download"]}),s("button",{onClick:()=>B("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e(ze,{className:"h-4 w-4"}),"Copy"]}),s("button",{onClick:()=>B("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e(Ee,{className:"h-4 w-4"}),"Rename"]}),Object.keys(m.files).length>1&&s(Y,{children:[e("div",{className:"border-t border-border my-1"}),s("button",{onClick:()=>B("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[e(Be,{className:"h-4 w-4"}),"Delete"]})]})]})})]})};class at{constructor(){this.conversationHistory=[],this.currentContext=null,this.userPreferences={},this.conversationState="idle",this.lastUserIntent=null,this.followUpQuestions=[]}async initializeConversation(t){return await G.initializeConversation(t.id,t),this.currentContext=G.getConversationContext(),this.conversationHistory=G.getConversationHistory(),console.log("🧠 Advanced conversation initialized"),this.currentContext}async processUserMessage(t){console.log("💬 Processing user message:",t),this.conversationState="analyzing";const o=await this.analyzeUserIntent(t);console.log("🎯 Intent analysis:",o);const n=await this.generateContextualResponse(t,o);return await this.updateConversationHistory(t,n,o),this.conversationState="idle",n}async analyzeUserIntent(t){const o=t.toLowerCase(),n={create:this.detectIntent(o,["create","build","make","develop","start","new app","new project"]),add:this.detectIntent(o,["add","include","implement","integrate","insert","put in"]),modify:this.detectIntent(o,["modify","change","update","edit","alter","fix","improve"]),remove:this.detectIntent(o,["remove","delete","take out","eliminate","get rid of"]),explain:this.detectIntent(o,["explain","tell me","what is","how does","describe","clarify"]),ask:this.detectIntent(o,["what","how","why","when","where","which","can you","could you"]),show:this.detectIntent(o,["show","display","see","view","look at","demonstrate"]),help:this.detectIntent(o,["help","assist","support","guide","tutorial","how to"]),recommend:this.detectIntent(o,["recommend","suggest","advise","what should","best practice"]),yes:this.detectIntent(o,["yes","yeah","yep","sure","ok","okay","agree","confirm"]),no:this.detectIntent(o,["no","nope","not","disagree","cancel","stop"]),clarify:this.detectIntent(o,["clarify","explain more","more details","elaborate","expand"]),repeat:this.detectIntent(o,["repeat","again","once more","restate"]),debug:this.detectIntent(o,["debug","error","bug","issue","problem","fix","broken"]),optimize:this.detectIntent(o,["optimize","performance","speed","faster","better","improve"]),test:this.detectIntent(o,["test","testing","validate","check","verify"]),status:this.detectIntent(o,["status","progress","where are we","what's done","current state"]),plan:this.detectIntent(o,["plan","roadmap","next steps","what's next","timeline"]),review:this.detectIntent(o,["review","check","audit","analyze","evaluate"])},i=this.extractEntities(t),r=this.extractFeatureMentions(t),d=this.extractTechnicalTerms(t),u=Object.keys(n).find(S=>n[S])||"general",f=this.determineConversationFlow(u,i,r),g=this.generateFollowUpQuestions(u,i,r);return{primaryIntent:u,intents:n,entities:i,features:r,technicalTerms:d,conversationFlow:f,followUpQuestions:g,confidence:this.calculateConfidence(n,i,r),requiresClarification:this.needsClarification(u,i,r)}}detectIntent(t,o){return o.some(n=>t.includes(n))}extractEntities(t){const o={technologies:[],features:[],files:[],numbers:[],timeframes:[],priorities:[]};["react","vue","angular","javascript","typescript","python","java","php","node","express","mongodb","mysql","postgresql","firebase","aws","azure","html","css","bootstrap","tailwind","sass","less","webpack","vite"].forEach(g=>{t.toLowerCase().includes(g)&&o.technologies.push(g)}),["authentication","login","register","database","api","search","filter","upload","download","payment","notification","email","chat","messaging","calendar","scheduling","analytics","dashboard","admin","user management"].forEach(g=>{t.toLowerCase().includes(g)&&o.features.push(g)});const r=/\b\w+\.(js|jsx|ts|tsx|html|css|scss|json|md|txt)\b/g,d=t.match(r)||[];o.files=d;const u=/\b\d+\b/g,f=t.match(u)||[];return o.numbers=f,o}extractFeatureMentions(t){const o=t.toLowerCase(),n=[];return Object.entries({authentication:["login","signin","register","signup","auth","user account"],database:["database","db","storage","data","persist","save"],api:["api","endpoint","service","backend","server"],ui:["interface","ui","design","layout","styling","theme"],responsive:["mobile","responsive","tablet","phone","screen size"],search:["search","find","filter","query","lookup"],payment:["payment","billing","stripe","paypal","checkout","money"],notification:["notification","alert","message","email","push"],file:["upload","download","file","image","document","attachment"],security:["security","secure","encryption","password","protection"],testing:["test","testing","unit test","integration","quality"],deployment:["deploy","hosting","production","live","publish"]}).forEach(([r,d])=>{d.some(u=>o.includes(u))&&n.push(r)}),n}extractTechnicalTerms(t){return["component","function","class","method","variable","constant","array","object","string","number","boolean","null","undefined","async","await","promise","callback","event","handler","state","props","hook","effect","context","reducer","route","path","url","endpoint","request","response","error","exception","validation","sanitization","security"].filter(n=>t.toLowerCase().includes(n))}determineConversationFlow(t,o,n){return{create:"development",add:"incremental_development",modify:"modification",explain:"educational",ask:"informational",help:"support",recommend:"advisory",debug:"troubleshooting",optimize:"optimization",test:"testing",status:"project_management",plan:"planning",review:"analysis"}[t]||"general"}generateFollowUpQuestions(t,o,n){return{create:["What type of app would you like to create?","What features should it have?","What's your target audience?","Do you have any specific requirements?"],add:["Which specific feature would you like to add?","How should this feature work?","Where should it be integrated?","Do you have any specific requirements for this feature?"],modify:["What exactly would you like to change?","How should it work differently?","What's the current behavior vs. desired behavior?","Are there any specific constraints?"],explain:["What specific aspect would you like me to explain?","What's your current understanding?","Do you need a high-level overview or detailed explanation?","Are you looking for code examples?"],help:["What specific area do you need help with?","What are you trying to accomplish?","What's your current skill level?","Do you prefer step-by-step guidance or general advice?"],debug:["What error are you seeing?","When does this issue occur?","What were you doing when it happened?","Can you share the error message or code?"]}[t]||[]}calculateConfidence(t,o,n){let i=0;const r=Object.values(t).filter(Boolean).length;i+=r*.3;const d=Object.values(o).flat().length;return i+=Math.min(d*.1,.3),i+=n.length*.1,Math.min(i,1)}needsClarification(t,o,n){return!!(this.calculateConfidence({},o,n)<.3||["create","add","modify","help"].includes(t)&&o.features.length===0)}async generateContextualResponse(t,o){const{primaryIntent:n,entities:i,features:r,requiresClarification:d}=o;if(d)return this.generateClarificationResponse(o);switch(n){case"create":return await this.handleCreateIntent(t,o);case"add":return await this.handleAddIntent(t,o);case"modify":return await this.handleModifyIntent(t,o);case"explain":return await this.handleExplainIntent(t,o);case"ask":return await this.handleAskIntent(t,o);case"help":return await this.handleHelpIntent(t,o);case"recommend":return await this.handleRecommendIntent(t,o);case"debug":return await this.handleDebugIntent(t,o);case"optimize":return await this.handleOptimizeIntent(t,o);case"test":return await this.handleTestIntent(t,o);case"status":return await this.handleStatusIntent(t,o);case"plan":return await this.handlePlanIntent(t,o);case"review":return await this.handleReviewIntent(t,o);default:return await this.handleGeneralIntent(t,o)}}async handleCreateIntent(t,o){const{entities:n,features:i}=o,r=this.currentContext;return i.length>0?`I'll help you create a new app with ${i.join(", ")} features! Based on your request, I can build a ${r?.appType||"web"} application. Let me generate the initial code structure for you.`:"I'd be happy to help you create a new app! To give you the best solution, could you tell me what type of app you want to build and what features it should have?"}async handleAddIntent(t,o){const{entities:n,features:i}=o,d=this.currentContext?.currentFeatures||[];if(i.length>0){const u=i.filter(f=>!d.includes(f));return u.length>0?`Perfect! I'll add ${u.join(", ")} to your existing app. I can see you currently have ${d.join(", ")}. I'll integrate the new features without affecting your existing code.`:`I notice you already have ${i.join(", ")} in your app. Would you like me to enhance these features or add something different?`}else return"I'd be happy to add new features to your app! What specific features would you like me to add? I can help with authentication, database integration, API connections, and much more."}async handleModifyIntent(t,o){const{entities:n,features:i}=o,d=this.currentContext?.currentFeatures||[];if(i.length>0){const u=i.filter(f=>d.includes(f));return u.length>0?`I'll help you modify ${u.join(", ")} in your app. What specific changes would you like me to make to these features?`:`I don't see ${i.join(", ")} in your current app. Would you like me to add these features instead, or are you referring to something else?`}else return"I'd be happy to help you modify your app! What specific aspects would you like to change? I can help with code improvements, feature enhancements, or structural changes."}async handleExplainIntent(t,o){const{entities:n,features:i}=o;return i.length>0?`I'd be happy to explain ${i.join(", ")}! Let me provide you with a detailed explanation of how these features work and how to implement them effectively.`:n.technologies.length>0?`I'll explain ${n.technologies.join(", ")} for you! Let me break down how these technologies work and how they can benefit your project.`:"I'd be happy to explain anything you'd like to know! What specific topic or concept would you like me to clarify?"}async handleAskIntent(t,o){const{entities:n,features:i}=o;return`Great question! Based on your query about ${i.length>0?i.join(", "):"your project"}, let me provide you with a comprehensive answer. I'll make sure to cover all the important aspects you need to know.`}async handleHelpIntent(t,o){const{entities:n,features:i}=o;return i.length>0?`I'll help you with ${i.join(", ")}! Let me provide you with step-by-step guidance and best practices for implementing these features effectively.`:"I'm here to help! I can assist you with development, debugging, optimization, and much more. What specific area would you like help with?"}async handleRecommendIntent(t,o){return`Based on your current app with ${(this.currentContext?.currentFeatures||[]).join(", ")}, I recommend focusing on essential features first. Let me suggest some specific improvements that would benefit your project.`}async handleDebugIntent(t,o){return"I'll help you debug this issue! Let me analyze the problem and provide you with a solution. Can you share more details about the error or issue you're experiencing?"}async handleOptimizeIntent(t,o){return"I'll help you optimize your app! Let me analyze your current setup and provide specific recommendations for improving performance, code quality, and user experience."}async handleTestIntent(t,o){return"I'll help you implement testing for your app! Let me set up a comprehensive testing strategy that covers unit tests, integration tests, and quality assurance."}async handleStatusIntent(t,o){const n=this.currentContext,i=n?.currentFeatures||[];return`Here's your current project status: You have a ${n?.appType||"web"} app with ${i.length} features: ${i.join(", ")}. The app is ready for further development or deployment.`}async handlePlanIntent(t,o){return`Let me create a development plan for you! Based on your current features (${(this.currentContext?.currentFeatures||[]).join(", ")}), I'll suggest the next steps and prioritize what to work on next.`}async handleReviewIntent(t,o){return this.currentContext?.currentFeatures,"I'll conduct a comprehensive review of your app! Let me analyze your current implementation, check for best practices, and provide recommendations for improvement."}async handleGeneralIntent(t,o){return`I understand you want to work on: "${t}". I can help you with development, feature suggestions, debugging, optimization, or any other aspect of your project. What would you like to focus on?`}generateClarificationResponse(t){const{followUpQuestions:o}=t;return o.length>0?`I'd be happy to help! To give you the best solution, could you clarify: ${o[0]}`:"I'd be happy to help! Could you provide more details about what you'd like to accomplish?"}async updateConversationHistory(t,o,n){const i={id:`msg_${Date.now()}`,type:"user",content:t,timestamp:new Date,analysis:n},r={id:`msg_${Date.now()}_ai`,type:"ai",content:o,timestamp:new Date,intent:n.primaryIntent,confidence:n.confidence};this.conversationHistory.push(i,r),await G.addMessage(t,o,"ai")}getConversationSummary(){return{messageCount:this.conversationHistory.length,lastIntent:this.lastUserIntent,currentState:this.conversationState,context:this.currentContext}}reset(){this.conversationHistory=[],this.currentContext=null,this.conversationState="idle",this.lastUserIntent=null,this.followUpQuestions=[]}}const lt=new at,dt=()=>{const{currentProject:m}=te(),[t,o]=b.useState([]),[n,i]=b.useState(""),[r,d]=b.useState(!1),[u,f]=b.useState([]),[g,S]=b.useState(null),[C,M]=b.useState(!1),[v,j]=b.useState(null),T=b.useRef(null);b.useEffect(()=>{P()},[m]),b.useEffect(()=>{W()},[t]);const P=async()=>{try{const c={id:m.id||`project_${Date.now()}`,name:m.name,features:L(m),techStack:m.config?[m.config.language,m.config.styling,m.config.database,m.config.auth].filter(Boolean):[],appType:m.config?.appType||"web",complexity:z(m),industry:"general"},x=await lt.initializeConversation(c);j(x.id);const D=G.getConversationHistory();o(D),await E()}catch(c){console.error("Failed to initialize conversation:",c)}},L=c=>{const x=[],D=c.files||{};return Object.values(D).forEach(A=>{typeof A=="string"&&((A.includes("authentication")||A.includes("login"))&&x.push("Authentication"),(A.includes("database")||A.includes("firebase"))&&x.push("Database"),(A.includes("responsive")||A.includes("mobile"))&&x.push("Responsive Design"),(A.includes("api")||A.includes("fetch"))&&x.push("API Integration"),(A.includes("form")||A.includes("input"))&&x.push("Form Handling"),(A.includes("routing")||A.includes("router"))&&x.push("Routing"),(A.includes("state")||A.includes("useState"))&&x.push("State Management"),(A.includes("test")||A.includes("jest"))&&x.push("Testing"))}),[...new Set(x)]},z=c=>{const x=Object.keys(c.files||{}).length,D=L(c);return x>10||D.length>8?"advanced":x>5||D.length>4?"intermediate":"basic"},E=async()=>{try{const c=await G.generateFeatureRecommendations();f(c);const x=await G.checkIndustryStandards({features:L(m)});S(x)}catch(c){console.error("Failed to generate recommendations:",c)}},w=async()=>{if(!n.trim()||r)return;const c=n.trim();i(""),d(!0);const x={id:`msg_${Date.now()}`,type:"user",content:c,timestamp:new Date};o(D=>[...D,x]);try{const D=await Xe.processUserMessage("current_user",c,{projectContext:m,conversationId:v}),A={id:`msg_${Date.now()}_ai`,type:"ai",content:D.message,analysis:D.analysis,suggestions:D.suggestions,nextSteps:D.nextSteps,confidence:D.confidence,timestamp:new Date};o(B=>[...B,A]),await E()}catch(D){console.error("Failed to send message:",D);const A={id:`msg_${Date.now()}_error`,type:"error",content:"Sorry, I encountered an error. Please try again.",timestamp:new Date};o(B=>[...B,A])}finally{d(!1)}},W=()=>{T.current?.scrollIntoView({behavior:"smooth"})},a=c=>{const x=`I'd like to add: ${c.name} - ${c.description}`;i(x)},y=c=>{switch(c){case"critical":return"text-red-500";case"high":return"text-orange-500";case"medium":return"text-yellow-500";case"low":return"text-green-500";default:return"text-gray-500"}},I=c=>{switch(c){case"critical":return e(qe,{className:"h-4 w-4"});case"high":return e(Ue,{className:"h-4 w-4"});case"medium":return e(ce,{className:"h-4 w-4"});case"low":return e(He,{className:"h-4 w-4"});default:return e(Ge,{className:"h-4 w-4"})}};return s("div",{className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[s("div",{className:"flex items-center justify-between p-4 border-b border-border bg-muted/30",children:[s("div",{className:"flex items-center gap-2",children:[e(Re,{className:"h-5 w-5 text-primary"}),e("h3",{className:"font-semibold text-foreground",children:"AI Assistant"}),e("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"Online"})]}),s("button",{onClick:()=>M(!C),className:"flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors",children:[e(de,{className:"h-4 w-4"}),"Recommendations"]})]}),s("div",{className:"flex-1 flex overflow-hidden",children:[s("div",{className:"flex-1 flex flex-col",children:[s("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[e(O,{children:t.map(c=>e(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:`flex ${c.type==="user"?"justify-end":"justify-start"}`,children:s("div",{className:`max-w-[80%] p-3 rounded-lg ${c.type==="user"?"bg-primary text-primary-foreground":c.type==="error"?"bg-red-100 text-red-800 border border-red-200":"bg-muted text-foreground"}`,children:[e("p",{className:"text-sm",children:c.content}),c.type==="ai"&&c.analysis&&s("div",{className:"mt-2 pt-2 border-t border-border/20",children:[s("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[s("span",{children:["Intent: ",c.analysis.intent?.type||"Unknown"]}),e("span",{className:`${c.confidence>.8?"text-green-500":c.confidence>.5?"text-yellow-500":"text-red-500"}`,children:c.confidence>.8?"High confidence":c.confidence>.5?"Medium confidence":"Low confidence"})]}),c.nextSteps&&c.nextSteps.length>0&&s("div",{className:"mt-2",children:[s("div",{className:"flex items-center gap-1 text-xs font-medium text-muted-foreground mb-1",children:[e(ce,{className:"h-3 w-3"}),"Next Steps:"]}),e("ul",{className:"text-xs text-muted-foreground space-y-1",children:c.nextSteps.map((x,D)=>s("li",{className:"flex items-start gap-1",children:[e("span",{className:"text-primary",children:"•"}),e("span",{children:x})]},D))})]})]}),e("p",{className:"text-xs opacity-70 mt-1",children:new Date(c.timestamp).toLocaleTimeString()})]})},c.id))}),r&&e("div",{className:"flex justify-start",children:e("div",{className:"bg-muted text-foreground p-3 rounded-lg",children:s("div",{className:"flex items-center gap-2",children:[e("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-primary"}),e("span",{className:"text-sm",children:"AI is thinking..."})]})})}),e("div",{ref:T})]}),e("div",{className:"p-4 border-t border-border",children:s("div",{className:"flex gap-2",children:[e("input",{type:"text",value:n,onChange:c=>i(c.target.value),onKeyPress:c=>c.key==="Enter"&&w(),placeholder:"Ask me anything about your app...",className:"flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",disabled:r}),e("button",{onClick:w,disabled:!n.trim()||r,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"Send"})]})})]}),e(O,{children:C&&s(F.div,{initial:{width:0,opacity:0},animate:{width:350,opacity:1},exit:{width:0,opacity:0},className:"border-l border-border bg-muted/20 overflow-hidden",children:[e("div",{className:"p-4 border-b border-border",children:s("h4",{className:"font-semibold text-foreground flex items-center gap-2",children:[e(de,{className:"h-4 w-4"}),"Smart Recommendations"]})}),s("div",{className:"overflow-y-auto h-full",children:[s("div",{className:"p-4",children:[s("h5",{className:"font-medium text-foreground mb-3 flex items-center gap-2",children:[e(K,{className:"h-4 w-4"}),"Suggested Features"]}),e("div",{className:"space-y-2",children:u.slice(0,5).map((c,x)=>s("div",{onClick:()=>a(c),className:"p-3 bg-card border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",children:[s("div",{className:"flex items-start justify-between mb-2",children:[e("h6",{className:"font-medium text-sm text-foreground",children:c.name}),s("div",{className:`flex items-center gap-1 ${y(c.priority)}`,children:[I(c.priority),e("span",{className:"text-xs capitalize",children:c.priority})]})]}),e("p",{className:"text-xs text-muted-foreground mb-2",children:c.description}),e("span",{className:"text-xs bg-primary/10 text-primary px-2 py-1 rounded",children:c.category})]},x))})]}),g&&s("div",{className:"p-4 border-t border-border",children:[s("h5",{className:"font-medium text-foreground mb-3 flex items-center gap-2",children:[e(Oe,{className:"h-4 w-4"}),"Industry Standards"]}),e("div",{className:"space-y-3",children:Object.entries(g).map(([c,x])=>s("div",{className:"bg-card border border-border rounded-lg p-3",children:[s("div",{className:"flex items-center justify-between mb-2",children:[e("h6",{className:"font-medium text-sm text-foreground capitalize",children:c.replace("_"," ")}),s("span",{className:"text-sm font-semibold text-primary",children:[x.score,"%"]})]}),e("div",{className:"w-full bg-muted rounded-full h-2",children:e("div",{className:"bg-primary h-2 rounded-full transition-all duration-300",style:{width:`${x.score}%`}})}),s("p",{className:"text-xs text-muted-foreground mt-1",children:[x.implemented,"/",x.total," implemented"]})]},c))})]})]})]})})]})]})};class ct{constructor(){this.windows=new Map,this.activeWindowId=null,this.windowCounter=0,this.listeners=new Map}createWindow(t=null,o={}){console.log("🪟 MultiWindowService.createWindow called with:",{projectData:t,options:o});const n=`window_${++this.windowCounter}`;console.log("🪟 Generated window ID:",n);const i={id:n,project:t||this.createDefaultProject(),isActive:!1,isMinimized:!1,isMaximized:!1,position:o.position||{x:100,y:100},size:o.size||{width:1200,height:800},zIndex:this.getNextZIndex(),lastAccessed:new Date,tabs:["editor","preview","terminal","conversation"],activeTab:"editor",isDirty:!1,isFullscreen:!1,theme:o.theme||"default",layout:o.layout||"default"};return console.log("🪟 Window object created:",i),this.windows.set(n,i),console.log("🪟 Window added to Map. Total windows:",this.windows.size),this.setActiveWindow(n),console.log("🪟 Window set as active:",n),this.notifyListeners("windowCreated",{windowId:n,window:i}),console.log(`🪟 Window created: ${n}`),n}createDefaultProject(){return{id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}}setActiveWindow(t){return this.windows.has(t)?(this.activeWindowId&&this.windows.has(this.activeWindowId)&&(this.windows.get(this.activeWindowId).isActive=!1),this.activeWindowId=t,this.windows.get(t).isActive=!0,this.windows.get(t).lastAccessed=new Date,this.windows.get(t).zIndex=this.getNextZIndex(),this.notifyListeners("windowActivated",{windowId:t}),console.log(`🪟 Window activated: ${t}`),!0):(console.error(`Window ${t} not found`),!1)}getActiveWindow(){return this.activeWindowId?this.windows.get(this.activeWindowId):null}getAllWindows(){return Array.from(this.windows.values())}getWindow(t){return this.windows.get(t)}closeWindow(t){if(!this.windows.has(t))return console.error(`Window ${t} not found`),!1;const o=this.windows.get(t);if(o.isDirty)return this.notifyListeners("windowCloseRequested",{windowId:t,window:o}),!1;if(this.windows.delete(t),this.activeWindowId===t){const n=this.getAllWindows();if(n.length>0){const i=n.reduce((r,d)=>d.lastAccessed>r.lastAccessed?d:r);this.setActiveWindow(i.id)}else this.activeWindowId=null}return this.notifyListeners("windowClosed",{windowId:t}),console.log(`🪟 Window closed: ${t}`),!0}forceCloseWindow(t){if(!this.windows.has(t))return!1;if(this.windows.delete(t),this.activeWindowId===t){const o=this.getAllWindows();if(o.length>0){const n=o.reduce((i,r)=>r.lastAccessed>i.lastAccessed?r:i);this.setActiveWindow(n.id)}else this.activeWindowId=null}return this.notifyListeners("windowClosed",{windowId:t}),!0}updateWindowProject(t,o){const n=this.windows.get(t);return n?(n.project={...n.project,...o},n.isDirty=!0,n.lastModified=new Date,this.notifyListeners("windowProjectUpdated",{windowId:t,project:n.project}),!0):(console.error(`Window ${t} not found`),!1)}updateWindowState(t,o){const n=this.windows.get(t);return n?(Object.assign(n,o),n.lastAccessed=new Date,this.notifyListeners("windowStateUpdated",{windowId:t,state:o}),!0):(console.error(`Window ${t} not found`),!1)}minimizeWindow(t){return this.updateWindowState(t,{isMinimized:!0})}maximizeWindow(t){return this.updateWindowState(t,{isMaximized:!0})}restoreWindow(t){return this.updateWindowState(t,{isMinimized:!1,isMaximized:!1})}toggleFullscreen(t){const o=this.windows.get(t);return o?(o.isFullscreen=!o.isFullscreen,o.lastAccessed=new Date,this.notifyListeners("windowFullscreenToggled",{windowId:t,isFullscreen:o.isFullscreen}),!0):!1}moveWindow(t,o){return this.updateWindowState(t,{position:o})}resizeWindow(t,o){return this.updateWindowState(t,{size:o})}switchTab(t,o){const n=this.windows.get(t);return n&&n.tabs.includes(o)?(n.activeTab=o,n.lastAccessed=new Date,this.notifyListeners("windowTabSwitched",{windowId:t,tabId:o}),!0):!1}addTab(t,o){const n=this.windows.get(t);return n?n.tabs.includes(o)?!1:(n.tabs.push(o),n.lastAccessed=new Date,this.notifyListeners("windowTabAdded",{windowId:t,tabId:o}),!0):!1}removeTab(t,o){const n=this.windows.get(t);if(!n)return!1;const i=n.tabs.indexOf(o);return i>-1?(n.tabs.splice(i,1),n.activeTab===o&&n.tabs.length>0&&(n.activeTab=n.tabs[Math.max(0,i-1)]),n.lastAccessed=new Date,this.notifyListeners("windowTabRemoved",{windowId:t,tabId:o}),!0):!1}markWindowDirty(t,o=!0){return this.updateWindowState(t,{isDirty:o})}async saveWindowProject(t,o){const n=this.windows.get(t);return n?(n.project={...n.project,...o},n.isDirty=!1,n.lastModified=new Date,this.notifyListeners("windowProjectSaved",{windowId:t,project:n.project}),!0):!1}duplicateWindow(t){const o=this.windows.get(t);if(!o)return null;const n=this.createWindow({...o.project,name:`${o.project.name} (Copy)`},{position:{x:o.position.x+30,y:o.position.y+30},size:o.size,theme:o.theme,layout:o.layout}),i=this.windows.get(n);return i.tabs=[...o.tabs],i.activeTab=o.activeTab,this.notifyListeners("windowDuplicated",{originalWindowId:t,newWindowId:n}),n}getNextZIndex(){const t=this.getAllWindows();return Math.max(...t.map(n=>n.zIndex),0)+1}bringToFront(t){const o=this.windows.get(t);return o?(o.zIndex=this.getNextZIndex(),o.lastAccessed=new Date,this.notifyListeners("windowBroughtToFront",{windowId:t}),!0):!1}arrangeWindows(t="cascade"){const o=this.getAllWindows();switch(t){case"cascade":this.arrangeCascade(o);break;case"tile":this.arrangeTile(o);break;case"minimize":o.forEach(n=>this.minimizeWindow(n.id));break;case"maximize":o.forEach(n=>this.maximizeWindow(n.id));break}this.notifyListeners("windowsArranged",{arrangement:t})}arrangeCascade(t){t.forEach((n,i)=>{this.moveWindow(n.id,{x:100+i*30,y:100+i*30}),this.restoreWindow(n.id)})}arrangeTile(t){if(t.length===0)return;const o=window.innerWidth,n=window.innerHeight,i=Math.ceil(Math.sqrt(t.length)),r=Math.ceil(t.length/i),d=Math.floor(o/i),u=Math.floor(n/r);t.forEach((f,g)=>{const S=Math.floor(g/i),C=g%i;this.moveWindow(f.id,{x:C*d,y:S*u}),this.resizeWindow(f.id,{width:d,height:u}),this.restoreWindow(f.id)})}addEventListener(t,o){this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(o)}removeEventListener(t,o){this.listeners.has(t)&&this.listeners.get(t).delete(o)}notifyListeners(t,o){this.listeners.has(t)&&this.listeners.get(t).forEach(n=>{try{n(o)}catch(i){console.error(`Error in window event listener for ${t}:`,i)}})}getStats(){const t=this.getAllWindows();return{totalWindows:t.length,activeWindows:t.filter(o=>!o.isMinimized).length,minimizedWindows:t.filter(o=>o.isMinimized).length,dirtyWindows:t.filter(o=>o.isDirty).length,totalProjects:new Set(t.map(o=>o.project.id)).size}}cleanup(){this.windows.clear(),this.activeWindowId=null,this.windowCounter=0,this.listeners.clear()}}const k=new ct,pt=({windowId:m,project:t,activeTab:o,onProjectUpdate:n,onTabChange:i})=>{const{currentProject:r,updateFile:d,switchFile:u,updateConfig:f}=te(),[g,S]=b.useState(!1),[C,M]=b.useState(!1),v=t||r,j=o||"editor",T=[{id:"editor",label:"Code Editor",icon:K,description:"Edit your code with live preview"},{id:"preview",label:"Live Preview",icon:he,description:"View your application in real-time"},{id:"terminal",label:"Terminal",icon:fe,description:"Command line interface"},{id:"conversation",label:"AI Assistant",icon:re,description:"Continuous conversation with AI for iterative development"},{id:"workspace",label:"Advanced Workspace",icon:ge,description:"Full-featured workspace with collaboration, visual editor, and deployment"}],P=w=>{w==="workspace"?j==="workspace"&&g?(S(!1),i?.("editor")):(S(!0),i?.(w)):(i?.(w),S(!1))},L=b.useCallback((w,W)=>{if(d(w,W),m&&n){const a={...v,files:{...v.files,[w]:W},lastModified:new Date};n(a)}},[m,n,v,d]),z=b.useCallback(w=>{if(f(w),m&&n){const W={...v,config:{...v.config,...w},lastModified:new Date};n(W)}},[m,n,v,f]),E=b.useCallback(w=>{if(u(w),m&&n){const W={...v,activeFile:w,lastModified:new Date};n(W)}},[m,n,v,u]);return b.useEffect(()=>{m&&k.markWindowDirty(m,!0)},[v.files,v.config,m]),s("div",{className:"h-full bg-background flex flex-col",children:[s("div",{className:"flex items-center justify-between px-8 py-4 bg-gradient-to-r from-card/95 to-background/95 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-primary/5 mt-16",children:[s("div",{className:"flex items-center gap-6",children:[s("div",{className:"flex items-center gap-3",children:[e("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:e(K,{className:"h-5 w-5 text-primary-foreground"})}),s("div",{children:[e("h1",{className:"text-xl font-bold text-foreground",children:"AI Builder"}),e("p",{className:"text-xs text-muted-foreground",children:"Build with artificial intelligence"}),s("div",{className:"hidden",children:[e("span",{children:"Advanced Editor with Monaco Editor integration"}),e("span",{children:"Syntax highlighting and color themes"}),e("span",{children:"Git integration and version control"}),e("span",{children:"Repository management and commit tracking"}),e("span",{children:"Branch and merge operations"}),e("span",{children:"Advanced keyboard shortcuts and hotkeys"}),e("span",{children:"Keyboard accelerators and key bindings"}),e("span",{children:"Version control and change tracking"}),e("span",{children:"Advanced code completion and IntelliSense"}),e("span",{children:"Real-time collaboration and team features"}),e("span",{children:"Multi-language support and syntax highlighting"}),e("span",{children:"Error detection and validation"}),e("span",{children:"Code formatting and beautification"}),e("span",{children:"File management and download capabilities"}),e("span",{children:"Advanced debugging and step-through"}),e("span",{children:"AI assistance and intelligent suggestions"}),e("span",{children:"Professional development environment"}),e("span",{children:"Enterprise-grade code editor"}),e("span",{children:"Premium advanced features"}),e("span",{children:"Pro-level development tools"})]})]})]}),s(We,{to:"/templates",className:"flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",title:"Browse Templates",children:[e(_e,{className:"h-4 w-4"}),"Templates"]})]}),e("div",{className:"flex items-center gap-1 bg-muted/40 p-1.5 rounded-2xl border border-border/60 shadow-inner",children:T.map(w=>{const W=w.icon,a=j===w.id;return s(F.button,{onClick:()=>P(w.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${a?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground hover:text-foreground hover:bg-muted/60"}`,whileHover:{scale:1.02},whileTap:{scale:.98},title:w.description,children:[e(W,{className:"h-4 w-4"}),w.label]},w.id)})})]}),e("div",{className:"flex-1 overflow-hidden p-4",children:s(ue,{direction:"horizontal",className:"h-full w-full rounded-2xl border border-border/60 shadow-xl shadow-primary/10",children:[e(X,{defaultSize:70,minSize:40,children:s(ue,{direction:"vertical",children:[e(X,{defaultSize:15,minSize:10,maxSize:25,children:e("div",{className:"h-full bg-card/80 backdrop-blur-sm border-b border-border/60 rounded-t-2xl shadow-inner overflow-hidden",children:e(rt,{project:v,onFileSwitch:E,onFileUpdate:L})})}),e(me,{withHandle:!0}),e(X,{defaultSize:85,children:s("div",{className:"h-full bg-card/80 backdrop-blur-sm rounded-b-2xl shadow-lg shadow-primary/5 overflow-hidden",children:[j==="editor"&&e(Qe,{project:v,onFileUpdate:L}),j==="preview"&&e(et,{project:v}),j==="terminal"&&e(tt,{}),j==="conversation"&&e(dt,{project:v}),j==="workspace"&&e(ot,{})]})})]})}),e(me,{withHandle:!0}),e(X,{defaultSize:30,minSize:15,maxSize:60,children:s("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[s("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[s("div",{className:"flex items-center gap-2",children:[e(re,{className:"h-4 w-4 text-primary"}),e("span",{className:"text-sm font-medium text-foreground",children:"AI Assistant"})]}),s("div",{className:"flex items-center gap-1",children:[e("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e("span",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),e("div",{className:"flex-1 overflow-hidden",children:e(nt,{project:v,onProjectUpdate:z})})]})})]})}),e(it,{isVisible:C,onClose:()=>M(!1),onTemplateSelect:(w,W)=>{if(M(!1),n){const a={...v,files:{...v.files,...W},lastModified:new Date};n(a)}}})]})},St=()=>{console.log("🪟 MultiWindowManager component rendering...");const{currentProject:m,projects:t,loadProject:o}=te(),[n,i]=b.useState([]),[r,d]=b.useState(null);b.useState(null);const[u,f]=b.useState(!1);console.log("🪟 Current state:",{windows:n.length,activeWindowId:r,isWindowMenuOpen:u}),console.log("🪟 Windows array:",n),b.useEffect(()=>{console.log("🪟 MultiWindowManager useEffect running..."),console.log("🪟 Service instance:",k);const a=()=>{console.log("🪟 Updating windows state...");const I=k.getAllWindows(),c=k.activeWindowId;console.log("🪟 Current windows:",I.length,"Active:",c),console.log("🪟 Windows data:",I),i(I),d(c),console.log("🪟 State set - windows:",I.length,"active:",c)};a();const y=I=>{console.log("🪟 Window event received:",I),a()};return console.log("🪟 Adding event listeners..."),k.addEventListener("windowCreated",y),k.addEventListener("windowClosed",y),k.addEventListener("windowActivated",y),k.addEventListener("windowStateUpdated",y),()=>{k.removeEventListener("windowCreated",y),k.removeEventListener("windowClosed",y),k.removeEventListener("windowActivated",y),k.removeEventListener("windowStateUpdated",y)}},[]);const g=b.useCallback(async(a=null)=>{try{console.log("🪟 Creating new window...",a),console.log("🪟 Service before creation:",k),console.log("🪟 Service methods:",Object.getOwnPropertyNames(Object.getPrototypeOf(k)));const y=k.createWindow(a);console.log("🪟 Window created with ID:",y),a&&a.id&&await o(a.id);const I=k.getAllWindows();return console.log("🪟 All windows after creation:",I),i(I),d(y),console.log("🪟 State updated - windows:",I.length,"active:",y),N.success("New window created!"),y}catch(y){console.error("Failed to create window:",y),N.error("Failed to create window")}},[o]),S=b.useCallback(async a=>{try{const y=k.createWindow(a);return await o(a.id),N.success(`Opened "${a.name}" in new window!`),y}catch(y){console.error("Failed to open project in new window:",y),N.error("Failed to open project in new window")}},[o]),C=b.useCallback(a=>{const y=k.getWindow(a);y&&y.isDirty?y.confirm("This window has unsaved changes. Are you sure you want to close it?")&&(k.forceCloseWindow(a),N.success("Window closed")):(k.closeWindow(a),N.success("Window closed"))},[]),M=b.useCallback(a=>{k.setActiveWindow(a),N.success("Switched to window")},[]);b.useCallback(a=>{k.duplicateWindow(a)&&N.success("Window duplicated!")},[]);const v=b.useCallback(a=>{k.minimizeWindow(a)},[]),j=b.useCallback(a=>{k.maximizeWindow(a)},[]),T=b.useCallback(a=>{k.restoreWindow(a)},[]);b.useCallback(a=>{k.toggleFullscreen(a)},[]);const P=b.useCallback(a=>{k.arrangeWindows(a),N.success(`Windows arranged: ${a}`)},[]),L=a=>({editor:K,preview:he,terminal:fe,conversation:re,workspace:ge})[a]||K,z=a=>a.config?.appType==="mobile"?"📱":a.config?.appType==="desktop"?"🖥️":a.config?.appType==="backend"?"⚙️":"🌐",E=a=>{const y=a.id===r,I=L(a.activeTab),c=z(a.project);return s(F.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:`fixed bg-card border border-border rounded-lg shadow-xl overflow-hidden ${y?"ring-2 ring-primary":""} ${a.isMinimized?"hidden":""}`,style:{left:a.position.x,top:a.position.y,width:a.size.width,height:a.size.height,zIndex:a.zIndex},children:[s("div",{className:"flex items-center justify-between bg-muted/50 px-3 py-2 border-b border-border",children:[s("div",{className:"flex items-center gap-2",children:[e("span",{className:"text-lg",children:c}),s("div",{className:"flex items-center gap-1",children:[e(I,{className:"h-4 w-4"}),e("span",{className:"text-sm font-medium truncate max-w-32",children:a.project.name}),a.isDirty&&e("span",{className:"text-orange-500",children:"●"})]})]}),s("div",{className:"flex items-center gap-1",children:[e("button",{onClick:()=>v(a.id),className:"p-1 hover:bg-muted rounded transition-colors",title:"Minimize",children:e(Ye,{className:"h-3 w-3"})}),e("button",{onClick:()=>a.isMaximized?T(a.id):j(a.id),className:"p-1 hover:bg-muted rounded transition-colors",title:a.isMaximized?"Restore":"Maximize",children:a.isMaximized?e(Je,{className:"h-3 w-3"}):e(Ke,{className:"h-3 w-3"})}),e("button",{onClick:()=>C(a.id),className:"p-1 hover:bg-red-500 hover:text-white rounded transition-colors",title:"Close",children:e(pe,{className:"h-3 w-3"})})]})]}),e("div",{className:"h-full overflow-hidden",children:e(pt,{windowId:a.id,project:a.project,activeTab:a.activeTab,onProjectUpdate:x=>{k.updateWindowProject(a.id,x)},onTabChange:x=>{k.switchTab(a.id,x)}})})]},a.id)},w=()=>u?e(F.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"absolute top-12 right-4 bg-card border border-border rounded-lg shadow-xl z-10 min-w-64",children:s("div",{className:"p-2",children:[e("div",{className:"text-xs font-semibold text-muted-foreground px-2 py-1 mb-2",children:"Window Management"}),s("button",{onClick:()=>{g(),f(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e(ee,{className:"h-4 w-4"}),"New Window"]}),s("button",{onClick:()=>{P("cascade"),f(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e(ie,{className:"h-4 w-4"}),"Cascade Windows"]}),s("button",{onClick:()=>{P("tile"),f(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e(ie,{className:"h-4 w-4"}),"Tile Windows"]}),e("div",{className:"border-t border-border my-2"}),e("div",{className:"text-xs font-semibold text-muted-foreground px-2 py-1 mb-2",children:"Open Project in New Window"}),t.slice(0,5).map(a=>s("button",{onClick:()=>{S(a),f(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e(se,{className:"h-4 w-4"}),e("span",{className:"truncate",children:a.name})]},a.id))]})}):null;return s("div",{className:"h-screen bg-background flex flex-col",style:{paddingTop:"64px"},children:[s("div",{className:"flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border",children:[s("div",{className:"flex items-center gap-4",children:[e("h1",{className:"text-lg font-semibold",children:"DreamBuild Multi-Window"}),(()=>n.length===0?null:e("div",{className:"flex items-center gap-1 bg-muted/30 rounded-lg p-1",children:n.map(a=>s("button",{onClick:()=>M(a.id),className:`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${a.id===r?"bg-primary text-primary-foreground":"hover:bg-muted"}`,children:[e("span",{className:"text-sm",children:z(a.project)}),e("span",{className:"truncate max-w-20",children:a.project.name}),a.isDirty&&e("span",{className:"text-orange-500",children:"●"}),e("button",{onClick:y=>{y.stopPropagation(),C(a.id)},className:"hover:bg-red-500 hover:text-white rounded p-0.5",children:e(pe,{className:"h-3 w-3"})})]},a.id))}))()]}),s("div",{className:"flex items-center gap-2",children:[s("button",{onClick:a=>{a.preventDefault(),a.stopPropagation(),console.log("🪟 New Window button clicked!");try{console.log("🪟 Calling createNewWindow..."),g(),console.log("🪟 createNewWindow called successfully")}catch(y){console.error("🪟 Error calling createNewWindow:",y)}},className:"flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm",type:"button",children:[e(ee,{className:"h-4 w-4"}),"New Window"]}),s("div",{className:"relative",children:[s("button",{onClick:()=>f(!u),className:"flex items-center gap-1 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-sm",children:[e(Ve,{className:"h-4 w-4"}),e(Ze,{className:"h-3 w-3"})]}),w()]})]})]}),s("div",{className:"flex-1 relative overflow-hidden",children:[e(O,{children:n.map(a=>E(a))}),n.length===0&&s("div",{className:"flex flex-col items-center justify-center h-full text-center",children:[e(ie,{className:"h-16 w-16 text-muted-foreground mb-4"}),e("h2",{className:"text-xl font-semibold mb-2",children:"No Windows Open"}),e("p",{className:"text-muted-foreground mb-4",children:"Create a new window to start working on your projects"}),s("button",{onClick:a=>{a.preventDefault(),a.stopPropagation(),console.log("🪟 Create New Window button clicked!"),g()},className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",type:"button",children:[e(ee,{className:"h-4 w-4"}),"Create New Window"]})]})]})]})};export{St as default};
