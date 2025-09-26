import{r as X,s as K,c as Z,g as Q,d as V,u as re,j as e,z as $,a as _t,n as G,b as Gt}from"./index-pPVRwmfn.js";import{r as c,g as Wt}from"./react-vendor-ChHrLFfk.js";import{_ as Ne}from"./monaco-editor-CKIEnvzl.js";import{l as oe,j as ee}from"./firebase-D3YEaW0R.js";import{m as H,l as _e,K as qt,N as Vt,a3 as Yt,a as Se,z as fe,ao as Jt,a6 as Xt,$ as q,f as Kt,V as xe,v as de,a0 as Zt,a2 as lt,R as ct,aa as Qt,ap as er,aq as tr,am as rr,ar as sr,M as nr,as as or,q as dt,y as ir,aj as ut,p as Oe,S as he,ak as ar,at as lr,C as ce,au as cr,k as dr,d as ur,av as Pe,aw as pr,ax as mr,h as hr,ab as pt,ad as gr,ay as Ge,a5 as fr,w as mt,u as ht,az as xr,i as br,a7 as gt,U as We,X as yr,E as qe,aA as vr,aB as wr,I as jr,F as Nr,n as Ve,o as Sr,aC as Dr,j as Cr}from"./ui-vendor-DbqPAH06.js";import{f as Ir}from"./firebaseAppService-BSCldLpi.js";import{s as ae,c as Y,f as ie}from"./simpleAIService-BUmArGnJ.js";class kr{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(t.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(t,r,"firebase");const n=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i={id:n,projectName:r||"dream-app",files:t.files,config:t.config,deployedAt:new Date,status:"uploading",platform:"firebase"},a={};for(const[v,x]of Object.entries(t.files))if(x&&x.trim()){const h=X(K,`projects/${n}/${v}`),C=new Blob([x],{type:this.getMimeType(v)});await Z(h,C);const N=await Q(h);a[v]=N}const l=this.createHostedHTML(t.files),u=X(K,`projects/${n}/index.html`),m=new Blob([l],{type:"text/html"});await Z(u,m);const g=await Q(u);return await oe(ee(V,"deployments",n),{...i,status:"completed",hostedURL:g,files:a,completedAt:new Date}),this.deployments.set(n,i),console.log("✅ Firebase deployment completed:",g),{success:!0,deploymentId:n,url:g,platform:"firebase"}}catch(o){throw console.error("❌ Firebase deployment failed:",o),new Error(`Firebase deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const o=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Apple App Store deployment is only available for mobile applications");const n=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${n} app to Apple App Store...`);const i=await this.generateMobileAppFiles(t,r,n),a=await this.executeAppleStoreBuild(i,r,n),l={id:o,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"apple-app-store",framework:n,buildInstructions:this.generateAppleStoreInstructions(n,r),terminalOutput:a.output,buildCommands:a.commands},u=this.createAppleStoreInstructionsHTML(r,n,l.buildInstructions,a),m=X(K,`apple-store/${o}/index.html`),g=new Blob([u],{type:"text/html"});await Z(m,g);const v=await Q(m);return await oe(ee(V,"deployments",o),{...l,hostedURL:v}),this.deployments.set(o,l),{success:a.success,deploymentId:o,url:v,platform:"apple-app-store",framework:n,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(o){throw console.error("❌ Apple App Store deployment failed:",o),new Error(`Apple App Store deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const o=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Google Play Store deployment is only available for mobile applications");const n=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${n} app to Google Play Store...`);const i=await this.generateMobileAppFiles(t,r,n),a=await this.executeGooglePlayBuild(i,r,n),l={id:o,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"google-play-store",framework:n,buildInstructions:this.generateGooglePlayInstructions(n,r),terminalOutput:a.output,buildCommands:a.commands},u=this.createGooglePlayInstructionsHTML(r,n,l.buildInstructions,a),m=X(K,`google-play/${o}/index.html`),g=new Blob([u],{type:"text/html"});await Z(m,g);const v=await Q(m);return await oe(ee(V,"deployments",o),{...l,hostedURL:v}),this.deployments.set(o,l),{success:a.success,deploymentId:o,url:v,platform:"google-play-store",framework:n,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(o){throw console.error("❌ Google Play Store deployment failed:",o),new Error(`Google Play Store deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(t,r,o=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const n=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!o){const i=r.toLowerCase().replace(/[^a-z0-9-]/g,"-"),a=this.createHostedHTML(t.files),l=X(K,`github-pages/${n}/index.html`),u=new Blob([a],{type:"text/html"});await Z(l,u);const m=await Q(l);return await oe(ee(V,"deployments",n),{id:n,projectName:r,files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:m,repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}),{success:!0,deploymentId:n,url:m,platform:"github-pages",repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(n){throw console.error("❌ GitHub deployment failed:",n),new Error(`GitHub deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}createHostedHTML(t){const r=t["index.html"]||this.generateDefaultHTML(),o=t["style.css"]||"",n=t["script.js"]||"";let i=r;return o.trim()&&(i.includes("</head>")?i=i.replace("</head>",`<style>${o}</style>
</head>`):i.includes("<head>")?i=i.replace("<head>",`<head>
<style>${o}</style>`):i=`<style>${o}</style>
${i}`),n.trim()&&(i.includes("</body>")?i=i.replace("</body>",`<script>${n}<\/script>
</body>`):i+=`
<script>${n}<\/script>`),i.includes("<!DOCTYPE html>")||(i=`<!DOCTYPE html>
${i}`),i.includes('<meta name="viewport"')||(i=i.replace("<head>",`<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">`)),i}generateDefaultHTML(){return`<!DOCTYPE html>
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
</html>`}getMimeType(t){const r=t.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[r]||"text/plain"}generateGitHubInstructions(t,r){const o=t.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${o}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${o}`],files:Object.keys(r),repoName:o}}getDeploymentStatus(t){return this.deployments.get(t)}async getAllDeployments(){try{const{collection:t,query:r,orderBy:o,limit:n,getDocs:i}=await Ne(async()=>{const{collection:m,query:g,orderBy:v,limit:x,getDocs:h}=await import("./firebase-D3YEaW0R.js").then(C=>C.B);return{collection:m,query:g,orderBy:v,limit:x,getDocs:h}},[]),a=t(V,"deployments"),l=r(a,o("deployedAt","desc"),n(20));return(await i(l)).docs.map(m=>({id:m.id,...m.data()}))}catch(t){return console.error("Error fetching deployments:",t),[]}}async deleteDeployment(t){try{const{deleteDoc:r}=await Ne(async()=>{const{deleteDoc:o}=await import("./firebase-D3YEaW0R.js").then(n=>n.B);return{deleteDoc:o}},[]);return await r(ee(V,"deployments",t)),this.deployments.delete(t),!0}catch(r){return console.error("Error deleting deployment:",r),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(t){const r=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],o=Object.keys(t);return r.some(n=>o.some(i=>i.includes(n)))}async deployMobileApp(t,r,o){const n=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${i} mobile app...`);const a={id:n,projectName:r||"mobile-app",files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:i,buildInstructions:this.generateMobileBuildInstructions(i,r,o)},l=this.createMobileAppInstructionsHTML(r,i,a.buildInstructions),u=X(K,`mobile-apps/${n}/index.html`),m=new Blob([l],{type:"text/html"});await Z(u,m);const g=await Q(u);return await oe(ee(V,"deployments",n),{...a,hostedURL:g}),this.deployments.set(n,a),{success:!0,deploymentId:n,url:g,platform:"mobile",framework:i,buildInstructions:a.buildInstructions}}detectMobileFramework(t){const r=Object.keys(t);return r.some(o=>o.includes("pubspec.yaml")||o.includes("main.dart"))?"Flutter":r.some(o=>o.includes("App.js")&&o.includes("package.json"))?"React Native":r.some(o=>o.includes("ionic.config.json"))?"Ionic":r.some(o=>o.includes("capacitor.config.json"))?"Capacitor":r.some(o=>o.includes("manifest.json")&&o.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(t,r,o){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:t,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:t,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:t,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(t,r,o){return`<!DOCTYPE html>
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
            <div class="framework-badge">${r}</div>
        </div>

        <div class="section">
            <h2>📱 Apple App Store Deployment</h2>
            <p>Deploy your ${r} app to the Apple App Store with these step-by-step instructions.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${o.steps.map(n=>`<li>${n}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(o.commands).map(([n,i])=>`<div class="command"><strong>${n}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${o.requirements.map(n=>`<li>${n}</li>`).join("")}
                </ul>
                <p><strong>Estimated Time:</strong> ${o.estimatedTime}</p>
                <p><strong>Cost:</strong> ${o.cost}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}createGooglePlayInstructionsHTML(t,r,o){return`<!DOCTYPE html>
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
            <div class="framework-badge">${r}</div>
        </div>

        <div class="section">
            <h2>📱 Google Play Store Deployment</h2>
            <p>Deploy your ${r} app to the Google Play Store with these step-by-step instructions.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${o.steps.map(n=>`<li>${n}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(o.commands).map(([n,i])=>`<div class="command"><strong>${n}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${o.requirements.map(n=>`<li>${n}</li>`).join("")}
                </ul>
                <p><strong>Estimated Time:</strong> ${o.estimatedTime}</p>
                <p><strong>Cost:</strong> ${o.cost}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}createMobileAppInstructionsHTML(t,r,o){return`<!DOCTYPE html>
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
            <div class="framework-badge">${r}</div>
        </div>

        <div class="section">
            <h2>📱 Mobile App Build Instructions</h2>
            <p>Your ${r} mobile app has been generated successfully! Follow these steps to build and deploy your app.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${o.steps.map(n=>`<li>${n}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(o.commands).map(([n,i])=>`<div class="command"><strong>${n}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <h2>📱 Supported Platforms</h2>
            <div class="platforms">
                ${o.platforms.map(n=>`<span class="platform">${n}</span>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="store-info">
                <h3>🏪 App Store Deployment</h3>
                <p>${o.storeDeployment}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}async generateMobileAppFiles(t,r,o){try{console.log(`📱 Generating ${o} mobile app files...`);const{default:n}=await Ne(async()=>{const{default:a}=await import("./mobileAppService-BHaVoDAx.js");return{default:a}},[]),i=await n.generateMobileApp(t,r,o);return console.log(`✅ Generated ${Object.keys(i).length} mobile app files`),i}catch(n){throw console.error("❌ Failed to generate mobile app files:",n),new Error(`Failed to generate mobile app files: ${n.message}`)}}async executeAppleStoreBuild(t,r,o){const n=[],i=[];try{console.log(`🍎 Executing Apple App Store build for ${o}...`);const a=`/tmp/dreambuild-${r}-${Date.now()}`;n.push(`mkdir -p ${a}`);for(const[l,u]of Object.entries(t)){const m=`${a}/${l}`;n.push(`cat > ${m} << 'EOF'
${u}
EOF`)}switch(n.push(`cd ${a}`),o){case"React Native":n.push("npm install"),n.push("npx expo install"),n.push("npx expo build:ios --type archive");break;case"Flutter":n.push("flutter pub get"),n.push("flutter build ios --release");break;case"PWA":n.push("npm install"),n.push("npm run build"),n.push("npx @pwabuilder/cli build --platform ios");break;default:n.push('echo "Framework-specific build commands not implemented yet"')}for(const l of n)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Apple App Store build completed for ${o}`),{success:!0,output:i.join(`
`),commands:n,projectDir:a}}catch(a){return console.error("❌ Apple App Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:n,error:a.message}}}async executeGooglePlayBuild(t,r,o){const n=[],i=[];try{console.log(`🤖 Executing Google Play Store build for ${o}...`);const a=`/tmp/dreambuild-${r}-${Date.now()}`;n.push(`mkdir -p ${a}`);for(const[l,u]of Object.entries(t)){const m=`${a}/${l}`;n.push(`cat > ${m} << 'EOF'
${u}
EOF`)}switch(n.push(`cd ${a}`),o){case"React Native":n.push("npm install"),n.push("npx expo install"),n.push("npx expo build:android --type app-bundle");break;case"Flutter":n.push("flutter pub get"),n.push("flutter build appbundle --release");break;case"PWA":n.push("npm install"),n.push("npm run build"),n.push("npx @pwabuilder/cli build --platform android");break;default:n.push('echo "Framework-specific build commands not implemented yet"')}for(const l of n)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Google Play Store build completed for ${o}`),{success:!0,output:i.join(`
`),commands:n,projectDir:a}}catch(a){return console.error("❌ Google Play Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:n,error:a.message}}}async executeTerminalCommands(t,r,o=3e5){try{console.log("🖥️ Executing commands via terminal...");const n={success:!0,output:t.map(i=>`$ ${i}
Executed successfully`).join(`
`),commands:t,projectDir:r};return console.log("✅ Terminal commands executed successfully"),n}catch(n){return console.error("❌ Terminal command execution failed:",n),{success:!1,output:`Error: ${n.message}`,commands:t,error:n.message}}}}const pe=new kr,io=()=>{const{currentProject:s,switchFile:t,updateFile:r,saveProject:o,createNewProject:n,updateConfig:i}=re(),[a,l]=c.useState(!1),[u,m]=c.useState(""),[g,v]=c.useState(!1),[x,h]=c.useState(!1),[C,N]=c.useState(!1),[j,I]=c.useState("firebase"),[S,d]=c.useState(!1),[w,y]=c.useState(""),[O,k]=c.useState({show:!1,x:0,y:0,filename:""}),p=c.useRef(null),b={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},T=f=>b[f]||"📄",R=f=>{t(f)},A=(f,P)=>{f.preventDefault(),k({show:!0,x:f.clientX,y:f.clientY,filename:P})},B=f=>{const{filename:P}=O;switch(k({show:!1,x:0,y:0,filename:""}),f){case"download":M(P);break;case"delete":L(P);break;case"rename":$.info("Rename functionality coming soon!");break;case"copy":$.info("Copy functionality coming soon!");break}},F=()=>{k({show:!1,x:0,y:0,filename:""})};c.useEffect(()=>{const f=P=>{p.current&&!p.current.contains(P.target)&&F()};return O.show&&document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}},[O.show]);const U=()=>{if(u.trim()){const f=u.includes(".")?u:`${u}.js`;r(f,""),t(f),m(""),l(!1),$.success(`Created ${f}`)}},L=f=>{if(Object.keys(s.files).length<=1){$.error("Cannot delete the last file");return}if(confirm(`Delete ${f}?`)){const P={...s.files};if(delete P[f],Object.keys(P).forEach(D=>{s.files[D]=P[D]}),s.activeFile===f){const D=Object.keys(P);t(D[0])}$.success(`Deleted ${f}`)}},M=f=>{const P=s.files[f]||"",D=new Blob([P],{type:"text/plain"}),z=URL.createObjectURL(D),ne=document.createElement("a");ne.href=z,ne.download=f,document.body.appendChild(ne),ne.click(),document.body.removeChild(ne),URL.revokeObjectURL(z),$.success(`Downloaded ${f}`)},ue=()=>{const f={name:s.name,files:s.files,config:s.config,timestamp:new Date().toISOString()},P=new Blob([JSON.stringify(f,null,2)],{type:"application/json"}),D=URL.createObjectURL(P),z=document.createElement("a");z.href=D,z.download=`${s.name}.json`,document.body.appendChild(z),z.click(),document.body.removeChild(z),URL.revokeObjectURL(D),$.success("Project downloaded!")},$t=f=>{const P=f.target.files[0];if(P){const D=new FileReader;D.onload=z=>{r(P.name,z.target.result),t(P.name),$.success(`Uploaded ${P.name}`)},D.readAsText(P)}},Rt=async()=>{if(!w.trim()){$.error("Please enter a project name");return}if(Object.keys(s.files).length===0){$.error("Please generate some code first");return}N(!0);try{const f=await Mt(s,w),P=[];if(S){$.info("Deploying to both Firebase and GitHub...");const[D,z]=await Promise.allSettled([pe.deployToFirebase(f,w),pe.deployToGitHub(f,w)]);if(D.status==="fulfilled"&&D.value.success&&P.push({platform:"Firebase",...D.value}),z.status==="fulfilled"&&z.value.success&&P.push({platform:"GitHub",...z.value}),P.length===2)$.success("Successfully deployed to both Firebase and GitHub!");else if(P.length===1)$.success(`Deployed to ${P[0].platform} (${P.length===1?"one":"both"} platform${P.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let D;j==="firebase"?D=await pe.deployToFirebase(f,w):j==="github"&&(D=await pe.deployToGitHub(f,w)),D.success&&(P.push({platform:j,...D}),$.success(`Successfully deployed to ${D.platform}!`))}P.forEach(D=>{D.url&&window.open(D.url,"_blank"),D.instructions&&(console.log(`${D.platform} deployment instructions:`,D.instructions),$.success(`Check console for ${D.platform} Pages setup instructions`))}),h(!1),y(""),d(!1)}catch(f){$.error(`Deployment failed: ${f.message}`)}finally{N(!1)}},Mt=async(f,P)=>{const D={...f};return D.files["index.html"]||(D.files["index.html"]=Ft(P)),D.files["package.json"]||(D.files["package.json"]=Lt(P,D.config)),D.files["README.md"]||(D.files["README.md"]=Ht(P,D.config)),D.files["index.html"]=Ut(D.files["index.html"],P),D.files["manifest.json"]||(D.files["manifest.json"]=Bt(P)),D},Ft=f=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${f}</title>
    <meta name="description" content="Built with DreamBuild - Universal AI Development Platform">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563eb">
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 ${f}</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 10px;">Your app is ready!</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 20px;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`,Lt=(f,P)=>JSON.stringify({name:f.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${f}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",P.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),Ht=(f,P)=>`# ${f}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${P.appType||"Frontend"}
- **Language**: ${P.language||"JavaScript"}
- **Styling**: ${P.styling||"Custom CSS"}
- **Features**: ${P.features?.join(", ")||"Basic functionality"}

## 📁 Project Structure

\`\`\`
${Object.keys(s.files).join(`
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
`,Bt=f=>JSON.stringify({name:f,short_name:f.split(" ")[0],description:`Built with DreamBuild - ${f}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),Ut=(f,P)=>{let D=f;return D.includes("<!DOCTYPE html>")||(D=`<!DOCTYPE html>
${D}`),D.includes('<meta name="viewport"')||(D=D.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),D.includes('<meta name="description"')||(D=D.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${P}">`)),D.includes('<meta name="theme-color"')||(D=D.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),D.includes("manifest.json")||(D=D.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),D},zt=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return e.jsxs(H.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[e.jsxs("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:e.jsx(_e,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>l(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:e.jsx(qt,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),e.jsx("button",{onClick:()=>v(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:e.jsx(Vt,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>o(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[e.jsx(Yt,{className:"h-3 w-3"}),"Save"]}),e.jsxs("button",{onClick:()=>h(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(s.files).length===0,children:[e.jsx(Se,{className:"h-3 w-3"}),"Deploy"]}),e.jsxs("button",{onClick:ue,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[e.jsx(fe,{className:"h-3 w-3"}),"Export"]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(s.files).length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[e.jsx("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:e.jsx(Jt,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),e.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):e.jsxs("div",{className:"py-2",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[e.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:e.jsx(_e,{className:"h-3 w-3 text-white"})}),e.jsx("span",{children:s.name||"Untitled Project"}),e.jsxs("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(s.files).length," files"]})]}),Object.keys(s.files).map(f=>e.jsxs(H.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${s.activeFile===f?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>R(f),onContextMenu:P=>A(P,f),children:[e.jsx("div",{className:"w-4 flex items-center justify-center",children:e.jsx("div",{className:"w-px h-4 bg-border"})}),e.jsx("div",{className:"flex items-center justify-center w-5 h-5",children:e.jsx("span",{className:"text-base",children:T(f)})}),e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("span",{className:"text-sm font-medium truncate",children:f})}),s.activeFile===f&&e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},f))]})}),e.jsx("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:e.jsxs("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:e.jsx(Xt,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),e.jsx("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:$t,multiple:!0})]})}),e.jsx(q,{children:a&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>l(!1),children:e.jsxs(H.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:f=>f.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),e.jsx("input",{type:"text",value:u,onChange:f=>m(f.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:zt.map(f=>e.jsxs("button",{onClick:()=>m(`new-file${f.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[e.jsx("span",{children:f.icon}),e.jsx("span",{className:"truncate",children:f.name})]},f.extension))})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>l(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:U,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),e.jsx(q,{children:g&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>v(!1),children:e.jsxs(H.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:f=>f.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:s.name,onChange:f=>i({name:f.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),e.jsxs("select",{value:s.config.appType,onChange:f=>i({appType:f.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"frontend",children:"Frontend"}),e.jsx("option",{value:"backend",children:"Backend"}),e.jsx("option",{value:"fullstack",children:"Full Stack"}),e.jsx("option",{value:"mobile",children:"Mobile"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Language"}),e.jsxs("select",{value:s.config.language,onChange:f=>i({language:f.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"javascript",children:"JavaScript"}),e.jsx("option",{value:"typescript",children:"TypeScript"}),e.jsx("option",{value:"python",children:"Python"}),e.jsx("option",{value:"java",children:"Java"}),e.jsx("option",{value:"csharp",children:"C#"}),e.jsx("option",{value:"cpp",children:"C++"}),e.jsx("option",{value:"c",children:"C"}),e.jsx("option",{value:"rust",children:"Rust"}),e.jsx("option",{value:"go",children:"Go"}),e.jsx("option",{value:"php",children:"PHP"}),e.jsx("option",{value:"ruby",children:"Ruby"}),e.jsx("option",{value:"swift",children:"Swift"}),e.jsx("option",{value:"kotlin",children:"Kotlin"}),e.jsx("option",{value:"dart",children:"Dart"}),e.jsx("option",{value:"scala",children:"Scala"}),e.jsx("option",{value:"html",children:"HTML"}),e.jsx("option",{value:"css",children:"CSS"}),e.jsx("option",{value:"sql",children:"SQL"}),e.jsx("option",{value:"r",children:"R"}),e.jsx("option",{value:"matlab",children:"MATLAB"}),e.jsx("option",{value:"perl",children:"Perl"}),e.jsx("option",{value:"lua",children:"Lua"}),e.jsx("option",{value:"bash",children:"Bash/Shell"}),e.jsx("option",{value:"powershell",children:"PowerShell"}),e.jsx("option",{value:"yaml",children:"YAML"}),e.jsx("option",{value:"json",children:"JSON"}),e.jsx("option",{value:"xml",children:"XML"}),e.jsx("option",{value:"markdown",children:"Markdown"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),e.jsxs("select",{value:s.config.framework||"none",onChange:f=>i({framework:f.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"none",children:"None"}),e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue.js"}),e.jsx("option",{value:"angular",children:"Angular"}),e.jsx("option",{value:"svelte",children:"Svelte"}),e.jsx("option",{value:"nextjs",children:"Next.js"}),e.jsx("option",{value:"nuxtjs",children:"Nuxt.js"}),e.jsx("option",{value:"express",children:"Express.js"}),e.jsx("option",{value:"fastapi",children:"FastAPI"}),e.jsx("option",{value:"django",children:"Django"}),e.jsx("option",{value:"flask",children:"Flask"}),e.jsx("option",{value:"spring",children:"Spring Boot"}),e.jsx("option",{value:"laravel",children:"Laravel"}),e.jsx("option",{value:"rails",children:"Ruby on Rails"}),e.jsx("option",{value:"flutter",children:"Flutter"}),e.jsx("option",{value:"react-native",children:"React Native"}),e.jsx("option",{value:"ionic",children:"Ionic"}),e.jsx("option",{value:"electron",children:"Electron"})]})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>v(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:()=>{o(),v(!1),$.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),e.jsx(q,{children:x&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>h(!1),children:e.jsxs(H.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:f=>f.stopPropagation(),children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[e.jsx(Se,{className:"h-5 w-5"}),"Deploy Your App"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:w,onChange:f=>y(f.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"firebase",checked:j==="firebase",onChange:f=>I(f.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs",children:"F"})}),e.jsx("span",{children:"Firebase Hosting"})]})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"github",checked:j==="github",onChange:f=>I(f.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Kt,{className:"h-4 w-4"}),e.jsx("span",{children:"GitHub Pages"})]})]})]})]}),e.jsxs("div",{className:"p-3 bg-muted rounded-md",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),e.jsx("div",{className:"text-xs text-muted-foreground space-y-1",children:j==="firebase"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free tier available"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):j==="github"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free for public repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>h(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:C,children:"Cancel"}),e.jsx("button",{onClick:Rt,disabled:C||!w.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:C?e.jsxs(e.Fragment,{children:[e.jsx(xe,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Se,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),e.jsx(q,{children:O.show&&e.jsxs(H.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:p,className:"fixed z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:O.x,top:O.y},onClick:F,children:[e.jsxs("button",{onClick:()=>B("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(fe,{className:"h-4 w-4"}),"Download"]}),e.jsxs("button",{onClick:()=>B("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(de,{className:"h-4 w-4"}),"Copy"]}),e.jsxs("button",{onClick:()=>B("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(Zt,{className:"h-4 w-4"}),"Rename"]}),Object.keys(s.files).length>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-t border-border my-1"}),e.jsxs("button",{onClick:()=>B("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[e.jsx(lt,{className:"h-4 w-4"}),"Delete"]})]})]})})]})},ao=()=>{const{theme:s}=_t(),{currentProject:t,updateFile:r}=re(),[o,n]=c.useState(!1),[i,a]=c.useState(null),[l,u]=c.useState(!0),[m,g]=c.useState({aiAssistance:!0,codeCompletion:!0,errorDetection:!0,refactoring:!0,debugging:!0,gitIntegration:!0,realTimeCollaboration:!0}),v=c.useRef(null);c.useEffect(()=>{if(v.current){const d=t.files[t.activeFile]||"",w=v.current.value;d!==w&&(v.current.value=d)}},[t.activeFile,t.files[t.activeFile]]),c.useEffect(()=>{const d=()=>{v.current&&setTimeout(()=>{},100)};return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]);const x=d=>{try{const w=d.target.value;w!==void 0&&r(t.activeFile,w)}catch(w){console.error("❌ Error updating file:",w),$.error("Failed to update file")}},h=()=>{try{$.success("File saved")}catch(d){console.error("❌ Error saving file:",d),$.error("Failed to save file")}},C=()=>{try{const d=t.files[t.activeFile]||"";navigator.clipboard.writeText(d),$.success("Code copied to clipboard")}catch(d){console.error("❌ Error copying code:",d),$.error("Failed to copy code")}},N=()=>{try{const d=t.files[t.activeFile]||"",w=new Blob([d],{type:"text/plain"}),y=URL.createObjectURL(w),O=document.createElement("a");O.href=y,O.download=t.activeFile,O.click(),URL.revokeObjectURL(y),$.success("File downloaded")}catch(d){console.error("❌ Error downloading file:",d),$.error("Failed to download file")}},j=()=>{const d=t.activeFile.toLowerCase();return d.endsWith(".js")||d.endsWith(".jsx")?"javascript":d.endsWith(".ts")||d.endsWith(".tsx")?"typescript":d.endsWith(".html")?"html":d.endsWith(".css")?"css":d.endsWith(".json")?"json":d.endsWith(".md")?"markdown":d.endsWith(".py")?"python":d.endsWith(".java")?"java":d.endsWith(".cpp")||d.endsWith(".c")?"cpp":"text"},I={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖"},S=d=>I[d]||"📄";return e.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:S(t.activeFile)}),e.jsx("span",{className:"font-medium text-sm",children:t.activeFile}),e.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-1 rounded",children:j()})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:h,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Save (Ctrl+S)",children:e.jsx(ct,{className:"h-4 w-4"})}),e.jsx("button",{onClick:C,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy All (Ctrl+C)",children:e.jsx(de,{className:"h-4 w-4"})}),e.jsx("button",{onClick:N,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Download File",children:e.jsx(fe,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"flex-1 relative h-full min-h-[500px] editor-wrapper editor-panel",children:i?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsx("div",{className:"text-red-500 text-lg mb-4",children:"⚠️ Editor Error"}),e.jsx("div",{className:"text-muted-foreground mb-4",children:i}),e.jsx("button",{onClick:()=>{a(null),n(!0),window.location.reload()},className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Reload Editor"})]}):e.jsx("div",{className:"monaco-editor-container editor-container code-editor","data-monaco":"true",style:{height:"500px",minHeight:"500px",width:"100%"},children:e.jsx("div",{className:"w-full h-full",children:e.jsx("textarea",{ref:v,value:t.files[t.activeFile]||"",onChange:x,className:"w-full h-full p-4 font-mono text-sm bg-background text-foreground border border-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary/20",placeholder:`Enter your ${j()} code here...`,style:{minHeight:"500px",fontFamily:'Monaco, Menlo, "Ubuntu Mono", monospace',lineHeight:"1.5"}})})})}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{children:"Line 1"}),e.jsx("span",{children:"Column 1"}),e.jsxs("span",{children:[t.files[t.activeFile]?.length||0," characters"]}),l&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-green-600",children:"Editor Ready"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+S to save"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+C to copy"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Textarea Editor"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"No Console Errors"})]})]})]})};class Tr{constructor(){this.deployedApps=new Map,this.baseUrl="https://dreambuild-2024-app.web.app/apps",this.appCounter=0}generateAppId(){this.appCounter++;const t=Date.now(),r=Math.random().toString(36).substring(2,8);return`app-${t}-${r}-${this.appCounter}`}async deployApp(t){try{const r=this.generateAppId(),o=`${this.baseUrl}/${r}`,n={id:r,name:t.name||"DreamBuild App",url:o,files:t.files||{},createdAt:new Date().toISOString(),status:"deployed",preview:t.preview||{},dependencies:t.dependencies||[],buildInstructions:t.buildInstructions||[]};return this.deployedApps.set(r,n),console.log(`🚀 App deployed: ${r} at ${o}`),{success:!0,appId:r,url:o,appInfo:n}}catch(r){return console.error("❌ App deployment failed:",r),{success:!1,error:r.message}}}getApp(t){return this.deployedApps.get(t)}getAllApps(){return Array.from(this.deployedApps.values())}updateApp(t,r){const o=this.deployedApps.get(t);if(o){const n={...o,...r,updatedAt:new Date().toISOString()};return this.deployedApps.set(t,n),n}return null}deleteApp(t){return this.deployedApps.delete(t)}getAppPreviewUrl(t){const r=this.deployedApps.get(t);return r?r.url:null}generateAppHTML(t){const{files:r,name:o}=t,n=r["index.html"]||r["app.html"]||r["main.html"],i=r["style.css"]||r["styles.css"]||r["app.css"],a=r["script.js"]||r["app.js"]||r["main.js"];if(!n)return this.generateFallbackHTML(o);let l=n;return i&&(l=l.replace("</head>",`<style>${i}</style></head>`)),a&&(l=l.replace("</body>",`<script>${a}<\/script></body>`)),l=l.replace("</body>",`
      <div style="position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.8); color: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; z-index: 9999;">
        Built with <a href="https://dreambuild-2024-app.web.app" style="color: #60a5fa;">DreamBuild</a>
      </div>
    </body>`),l}generateFallbackHTML(t){return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            text-align: center;
            max-width: 600px;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #fff, #f0f0f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            background: rgba(255,255,255,0.2);
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            color: white;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .btn:hover {
            background: rgba(255,255,255,0.3);
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${t}</h1>
        <p>Your DreamBuild app is ready! This is a placeholder for your generated application.</p>
        <a href="https://dreambuild-2024-app.web.app" class="btn">Back to DreamBuild</a>
    </div>
</body>
</html>
    `}getDeploymentStatus(){return{totalApps:this.deployedApps.size,baseUrl:this.baseUrl,deployedApps:this.getAllApps()}}}const Or=new Tr,lo=()=>{console.log("🎮 Preview component rendered!"),console.log("🎮 Preview component mounted successfully!");const{currentProject:s}=re();console.log("🎮 Preview currentProject:",s);const[t,r]=c.useState(!1),[o,n]=c.useState(!1),[i,a]=c.useState("desktop"),[l,u]=c.useState(!0),[m,g]=c.useState(2e3),[v,x]=c.useState(!0),[h,C]=c.useState("live"),[N,j]=c.useState(!1),[I,S]=c.useState(null),[d,w]=c.useState(null),[y,O]=c.useState(null),[k,p]=c.useState(!1);c.useEffect(()=>{if(console.log("🎮 Preview useEffect triggered"),console.log("🎮 Current project:",s),console.log("🎮 Project files:",s?.files),console.log("🎮 Files count:",Object.keys(s?.files||{}).length),s&&Object.keys(s.files).length>0){console.log("🎮 Deploying app..."),console.log("🎮 Files available for deployment:",Object.keys(s.files)),console.log("🎮 Files content preview:",Object.keys(s.files).map(M=>({filename:M,length:s.files[M]?.length||0,preview:s.files[M]?.substring(0,100)||"No content"})));const L=setTimeout(()=>{b()},1e3);return()=>clearTimeout(L)}else console.log("🎮 No project or files to deploy"),console.log("🎮 Current project:",s),console.log("🎮 Files count:",s?Object.keys(s.files).length:"No project")},[s?.name,s?.activeFile]),c.useEffect(()=>{},[l,N,h,m,t,d]);const b=async()=>{if(console.log("🎮 deployApp called"),console.log("🎮 Current project:",s),console.log("🎮 Files:",s?.files),console.log("🎮 Files count:",Object.keys(s?.files||{}).length),!s||Object.keys(s.files).length===0){console.log("🎮 No project files to deploy"),O("No files to deploy");return}if(k){console.log("🎮 Deployment already in progress, skipping...");return}p(!0),r(!0),O("Deploying..."),console.log("🎮 Starting deployment process...");try{console.log("🚀 Deploying app..."),console.log("🎮 Current project:",s),console.log("🎮 Project files:",Object.keys(s.files)),console.log("🎮 Project files content:",s.files),console.log("🎮 Files count:",Object.keys(s.files).length);const L=s.name||"DreamBuild Calculator";console.log("🎮 Preview: Current project name:",s.name),console.log("🎮 Preview: Using app name:",L),console.log("🎮 Preview: Project config:",s.config);let M=await Ir.deployApp({name:L,files:s.files,isPublic:!0,preview:{title:L,description:"Generated with DreamBuild AI Builder",features:["AI Generated","Responsive Design","Modern UI"]},dependencies:[],buildInstructions:[],tags:["ai-generated","dreambuild","calculator"]});console.log("🎮 Firebase deployment result:",M),console.log("🎮 Firebase deployment success:",M?.success),console.log("🎮 Firebase deployment error:",M?.error),(!M||!M.success)&&(console.log("🔄 Firebase deployment failed, trying fallback..."),console.log("🔄 Firebase error details:",M?.error),console.log("🔄 Firebase error message:",M?.error?.message),O("Firebase failed, trying fallback..."),M=await Or.deployApp({name:L,files:s.files,preview:{title:L,description:"Generated with DreamBuild AI Builder",features:["AI Generated","Responsive Design","Modern UI"]},dependencies:[],buildInstructions:[]}),console.log("🎮 Fallback deployment result:",M)),M.success?(S(M.appInfo),w(M.url),console.log("✅ App deployed successfully:",M.url),$.success(`App deployed successfully! URL: ${M.url}`,{duration:6e3,icon:"🚀"}),console.log("🎮 Toast message URL:",M.url),console.log("🎮 Toast message text:",`App deployed successfully! URL: ${M.url}`),setTimeout(()=>{window.dispatchEvent(new CustomEvent("appDeployed",{detail:{appId:M.appId,appName:L,url:M.url}}))},1e3)):(console.error("❌ App deployment failed:",M?.error||"Unknown error"),$.error(`App deployment failed: ${M?.error||"Unknown error"}`),O("Deployment failed"))}catch(L){console.error("❌ Deployment error:",L),$.error(`Deployment error: ${L.message}`),O("Deployment error")}finally{r(!1),p(!1)}},T=()=>{if(d){const L=document.querySelector("#preview-iframe");L&&(L.src=L.src)}},R=()=>{d&&(window.open(d,"_blank"),$.success("Opened in new tab!"))},A=()=>{d&&(navigator.clipboard.writeText(d),$.success("URL copied to clipboard!"))},B=()=>{d&&(navigator.share?navigator.share({title:I?.name||"DreamBuild App",url:d}):A())},F=async()=>{if(o)document.exitFullscreen&&await document.exitFullscreen();else{const L=document.querySelector("#preview-iframe");L&&L.requestFullscreen&&await L.requestFullscreen()}n(!o)},U=()=>{switch(i){case"mobile":return"w-80 h-[600px] rounded-lg shadow-lg";case"tablet":return"w-[768px] h-[600px] rounded-lg shadow-md";default:return"w-full h-full"}};return console.log("🎮 Preview component about to render"),console.log("🎮 Preview currentProject:",s),console.log("🎮 Preview appUrl:",d),console.log("🎮 Preview isLoading:",t),console.log("🎮 Preview deployedApp:",I),e.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${o?"fixed inset-0 z-50 rounded-none":""}`,children:[e.jsxs("div",{className:"border-b border-border bg-muted/50 relative",children:[e.jsx("div",{className:"absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs z-10 shadow-sm",children:I?"DEPLOYED":"READY"}),e.jsxs("div",{className:"flex items-center justify-between p-3 pr-24",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:b,disabled:t,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50",children:t?"Deploying...":"Deploy App"}),e.jsx("h3",{className:"font-semibold text-sm text-foreground",children:"Live Preview"}),t&&e.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[e.jsx("div",{className:"animate-spin rounded-full h-3 w-3 border-b-2 border-primary"}),e.jsx("span",{children:"Deploying..."})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>u(!l),className:`p-2 rounded-md transition-colors ${l?"bg-green-500 text-white":"bg-muted hover:bg-muted-foreground/20"}`,title:l?"Disable Auto-refresh":"Enable Auto-refresh",children:e.jsx(ct,{className:`h-4 w-4 ${l?"animate-spin":""}`})}),e.jsx("button",{onClick:()=>j(!N),className:`p-2 rounded-md transition-colors ${N?"bg-red-500 text-white":"bg-muted hover:bg-muted-foreground/20"}`,title:N?"Resume Preview":"Pause Preview",children:N?e.jsx(Qt,{className:"h-4 w-4"}):e.jsx(er,{className:"h-4 w-4"})}),e.jsx("button",{onClick:T,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Manual Refresh",children:e.jsx(tr,{className:"h-4 w-4"})}),e.jsx("button",{onClick:F,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Toggle Fullscreen",children:o?e.jsx(rr,{className:"h-4 w-4"}):e.jsx(sr,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"flex items-center justify-between px-3 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-1 bg-muted rounded-lg p-1",children:[e.jsx("button",{onClick:()=>a("desktop"),className:`p-1 rounded ${i==="desktop"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Desktop View",children:e.jsx(nr,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>a("tablet"),className:`p-1 rounded ${i==="tablet"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Tablet View",children:e.jsx(or,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>a("mobile"),className:`p-1 rounded ${i==="mobile"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Mobile View",children:e.jsx(dt,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[e.jsx("span",{className:i==="desktop"?"font-semibold text-foreground":"",children:"Desktop"}),e.jsx("span",{className:i==="tablet"?"font-semibold text-foreground":"",children:"Tablet"}),e.jsx("span",{className:i==="mobile"?"font-semibold text-foreground":"",children:"Mobile"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:R,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Open in New Tab",children:e.jsx(ir,{className:"h-4 w-4"})}),e.jsx("button",{onClick:A,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy URL",children:e.jsx(de,{className:"h-4 w-4"})}),e.jsx("button",{onClick:B,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Share App",children:e.jsx(ut,{className:"h-4 w-4"})})]})]})]}),e.jsx("div",{className:"flex-1 relative h-full min-h-[500px]",children:t?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"}),e.jsx("span",{className:"text-lg font-medium",children:"Deploying App..."})]}),e.jsxs("div",{className:"text-sm text-muted-foreground text-center max-w-md",children:[e.jsx("p",{children:"Creating your app's web address..."}),e.jsx("p",{className:"mt-2",children:"This may take a few moments"})]})]}):d?e.jsx("div",{className:`w-full h-full flex items-center justify-center ${i==="mobile"?"bg-gray-100":i==="tablet"?"bg-gray-50":"bg-white"}`,children:e.jsx("div",{className:`${U()} transition-all duration-300 ease-in-out`,children:e.jsx("iframe",{id:"preview-iframe",src:d,className:`w-full h-full border-0 ${i==="mobile"?"rounded-lg shadow-lg":i==="tablet"?"rounded-lg shadow-md":""}`,title:"DreamBuild App Preview",sandbox:"allow-scripts allow-forms allow-popups allow-same-origin",onLoad:()=>{r(!1),console.log("🎮 Iframe loaded successfully")},onError:()=>{r(!1),console.log("🎮 Iframe failed to load"),$.error("Failed to load app preview")}})})}):e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsx(Oe,{className:"h-16 w-16 text-muted-foreground mb-4"}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"No App Deployed"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Generate an app to see the preview"}),e.jsx("button",{onClick:b,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Deploy App"}),s&&Object.keys(s.files).length>0&&e.jsxs("div",{className:"mt-8 p-4 bg-muted/50 rounded-lg max-w-2xl w-full",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Code Preview"}),e.jsx("div",{className:"bg-background p-4 rounded border text-left max-h-64 overflow-auto",children:e.jsx("pre",{className:"text-sm font-mono whitespace-pre-wrap",children:Object.entries(s.files).map(([L,M])=>`// ${L}
${M}

`).join("")})})]})]})}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[d&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Oe,{className:"h-4 w-4"}),e.jsx("span",{className:"font-mono text-xs",children:d})]}),d&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-green-600",children:"Live Preview Active"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+R to refresh"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+Shift+F for fullscreen"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Live preview with web addresses"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Share your apps"})]})]})]})},Pr=({aiModel:s,setAIModel:t,modelUpdateKey:r,setModelUpdateKey:o})=>{const[n,i]=c.useState(!1),[a,l]=c.useState([]),[u,m]=c.useState(!0);c.useEffect(()=>{(async()=>{try{m(!0),console.log("🔧 Loading AI models...");const h=ae.getServices();console.log("🔧 Services:",h);const C=[];h["cloud-ai"]&&h["cloud-ai"].models&&(console.log("🔧 Cloud AI models:",h["cloud-ai"].models),h["cloud-ai"].models.forEach(N=>{C.push({id:N.model||N.name.toLowerCase().replace(/\s+/g,"-"),name:N.name,description:N.description,icon:ce,color:"text-blue-500",bgColor:"bg-blue-50 dark:bg-blue-900/20",type:"cloud"})})),h["local-ai"]&&h["local-ai"].models&&(console.log("🔧 Local AI models:",h["local-ai"].models),h["local-ai"].models.forEach(N=>{C.push({id:N.model||N.name.toLowerCase().replace(/\s+/g,"-"),name:N.name,description:N.description,icon:cr,color:"text-green-500",bgColor:"bg-green-50 dark:bg-green-900/20",type:"local"})})),C.unshift({id:"auto",name:"Auto Select",description:"Automatically selects the best available model",icon:he,color:"text-purple-500",bgColor:"bg-purple-50 dark:bg-purple-900/20",type:"auto"}),console.log("🔧 Final models:",C),l(C)}catch(h){console.error("❌ Error loading models:",h);const C=[{id:"auto",name:"Auto Select",description:"Automatically selects the best available model",icon:he,color:"text-purple-500",bgColor:"bg-purple-50 dark:bg-purple-900/20",type:"auto"},{id:"codellama-7b",name:"CodeLlama 7B",description:"Fast and efficient code generation",icon:ce,color:"text-blue-500",bgColor:"bg-blue-50 dark:bg-blue-900/20",type:"cloud"},{id:"deepseek-coder",name:"DeepSeek Coder",description:"Advanced code understanding and generation",icon:dr,color:"text-green-500",bgColor:"bg-green-50 dark:bg-green-900/20",type:"cloud"}];console.log("🔧 Using fallback models:",C),l(C)}finally{m(!1)}})()},[]);const g=a.find(x=>x.id===s)||a[0]||{name:"Auto Select",icon:he,color:"text-purple-500"};c.useEffect(()=>{const x=h=>{n&&!h.target.closest(".model-selector")&&!h.target.closest('button[class*="w-full p-2 rounded"]')&&i(!1)};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[n]);const v=x=>{t(x),o(h=>h+1),i(!1)};return e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>i(!n),className:"w-full p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(g.icon,{className:`h-4 w-4 ${g.color}`}),e.jsx("span",{className:"text-sm font-medium",children:g.name})]}),e.jsx(ar,{className:`h-4 w-4 text-muted-foreground transition-transform ${n?"rotate-180":""}`})]}),e.jsx(q,{children:n&&e.jsx(H.div,{initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},className:"absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-50 model-selector",children:e.jsx("div",{className:"p-2",children:u?e.jsxs("div",{className:"p-4 text-center text-muted-foreground",children:[e.jsx(xe,{className:"h-4 w-4 animate-spin mx-auto mb-2"}),"Loading models..."]}):a.map(x=>{const h=x.icon,C=x.id===s;return e.jsx("button",{onClick:()=>v(x.id),className:`w-full p-3 rounded-lg text-left transition-colors hover:bg-muted/50 ${C?"bg-primary/10":""}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg ${x.bgColor} flex items-center justify-center`,children:e.jsx(h,{className:`h-4 w-4 ${x.color}`})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-medium text-sm",children:x.name}),C&&e.jsx(lr,{className:"h-4 w-4 text-primary"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:x.description})]})]})},x.id)})})})})]})},Er=({messages:s,prompt:t,setPrompt:r,isGenerating:o,handleGenerate:n,textareaRef:i,messagesEndRef:a})=>{console.log("🔧 AIChatInterface rendering...",{messages:s.length,prompt:t,isGenerating:o});const l=g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),n())},u=g=>{navigator.clipboard.writeText(g),G.success("Copied to clipboard!")},m=(g,v)=>{G.success("Feedback sent")};return e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[e.jsx(q,{children:s.map(g=>e.jsx(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:`flex gap-3 ${g.type==="user"?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`flex gap-3 max-w-[80%] ${g.type==="user"?"flex-row-reverse":"flex-row"}`,children:[e.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${g.type==="user"?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground"}`,children:g.type==="user"?e.jsx(ur,{className:"h-4 w-4"}):e.jsx(Pe,{className:"h-4 w-4"})}),e.jsxs("div",{className:`rounded-2xl px-4 py-3 ${g.type==="user"?"bg-primary text-primary-foreground":"bg-muted text-foreground"}`,children:[e.jsx("div",{className:"whitespace-pre-wrap text-sm",children:g.content}),g.type==="assistant"&&e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("button",{onClick:()=>u(g.content),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Copy message",children:e.jsx(de,{className:"h-3 w-3"})}),e.jsx("button",{onClick:()=>m(g.id,"up"),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Good response",children:e.jsx(pr,{className:"h-3 w-3"})}),e.jsx("button",{onClick:()=>m(g.id,"down"),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Poor response",children:e.jsx(mr,{className:"h-3 w-3"})})]})]})]})},g.id))}),o&&e.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"flex gap-3 justify-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center",children:e.jsx(Pe,{className:"h-4 w-4"})}),e.jsx("div",{className:"bg-muted text-foreground rounded-2xl px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(xe,{className:"h-4 w-4 animate-spin"}),e.jsx("span",{className:"text-sm",children:"AI is thinking..."})]})})]}),e.jsx("div",{ref:a})]}),e.jsx("div",{className:"p-4 border-t border-border",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("textarea",{ref:i,value:t,onChange:g=>r(g.target.value),onKeyPress:l,placeholder:"Describe what you want to build...",className:"flex-1 min-h-[44px] max-h-32 px-4 py-3 bg-background border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",disabled:o}),e.jsx("button",{onClick:n,disabled:!t.trim()||o,className:"px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2",children:o?e.jsx(xe,{className:"h-4 w-4 animate-spin"}):e.jsx(hr,{className:"h-4 w-4"})})]})})]})};function co(){console.log("🔧 AIPromptSimplified component rendering...");const{currentProject:s,updateFile:t,switchFile:r,updateConfig:o}=re(),[n,i]=c.useState(""),[a,l]=c.useState(""),[u,m]=c.useState(!1),g=c.useRef(null),v=c.useRef(null),[x,h]=c.useState([]),[C,N]=c.useState([]),[j,I]=c.useState(!1),[S,d]=c.useState(!1),[w,y]=c.useState("auto"),[O,k]=c.useState(0);c.useEffect(()=>{g.current&&(g.current.style.height="auto",g.current.style.height=g.current.scrollHeight+"px")},[n]),c.useEffect(()=>{v.current?.scrollIntoView({behavior:"smooth"})},[x]);const p=R=>{const A=R.toLowerCase();return["create a","build a","make a","develop a","start a","new app","new project"].some(U=>A.includes(U))?!1:["add","add a","add new","add the","add some","include","include a","include new","implement","implement a","implement new","feature","features","functionality","function","capability","capabilities","enhance","enhancement","improve","improvement","modify","modification","update","upgrade","extend","extension"].some(U=>A.includes(U))},b=async()=>{if(!n.trim()||u)return;const R=n;i(""),m(!0);const A={id:Date.now(),type:"user",content:R,timestamp:new Date};h(B=>[...B,A]);try{const B=p(R),F=await ae.generateCode({prompt:R,projectName:a||s.name,context:{currentFiles:s.files,activeFile:s.activeFile,config:s.config,isIncremental:B,existingProject:B?s:null}});let U="Code generated successfully!";F.type==="incremental_update"?(U=F.message||`Added ${F.newFeatures?.length||0} new feature(s) to your existing app!`,G.success(U)):F.type==="no_changes"?(U=F.message||"No new features to add - these already exist in your app.",G.info(U)):(U=F.message||"Code generated successfully!",G.success(U));const L={id:Date.now()+1,type:"assistant",content:U,timestamp:new Date,files:F.files||{},isIncremental:F.type==="incremental_update",newFeatures:F.newFeatures||[]};h(M=>[...M,L]),F.files&&Object.keys(F.files).length>0&&(console.log("📁 Updating project files:",Object.keys(F.files)),Object.entries(F.files).forEach(([M,ue])=>{console.log(`📄 Updating file ${M} with ${ue.length} characters`),t(M,ue)}),F.type==="incremental_update"?G.success(`Added ${F.newFeatures?.length||0} new feature(s): ${F.newFeatures?.join(", ")}`):G.success(`Generated ${Object.keys(F.files).length} files!`)),F.projectName&&F.projectName!==s.name&&(o({name:F.projectName}),l(F.projectName))}catch(B){console.error("Generation error:",B);const F={id:Date.now()+1,type:"assistant",content:`Sorry, I encountered an error: ${B.message}. Please try again.`,timestamp:new Date};h(U=>[...U,F]),G.error("Failed to generate code. Please try again.")}finally{m(!1)}},T=()=>{h([]),G.success("Chat cleared!")};return console.log("🔧 AIPromptSimplified render - currentProject:",s),console.log("🔧 AIPromptSimplified render - prompt:",n),console.log("🔧 AIPromptSimplified render - isGenerating:",u),e.jsxs("div",{className:"h-full flex flex-col bg-card/50 backdrop-blur-sm",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:e.jsx(Pe,{className:"h-4 w-4 text-primary-foreground"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-foreground",children:"AI Assistant"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Powered by advanced AI models"})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("button",{onClick:T,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Clear chat",children:e.jsx(pt,{className:"h-4 w-4 text-muted-foreground"})})})]}),e.jsx("div",{className:"p-4 border-b border-border/50",children:e.jsx(Pr,{aiModel:w,setAIModel:y,modelUpdateKey:O,setModelUpdateKey:k})}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(Er,{messages:x,prompt:n,setPrompt:i,isGenerating:u,handleGenerate:b,textareaRef:g,messagesEndRef:v})})]})}class Ar{constructor(){this.conversationHistory=[],this.currentContext=null,this.userPreferences={},this.conversationState="idle",this.lastUserIntent=null,this.followUpQuestions=[]}async initializeConversation(t){return await Y.initializeConversation(t.id,t),this.currentContext=Y.getConversationContext(),this.conversationHistory=Y.getConversationHistory(),console.log("🧠 Advanced conversation initialized"),this.currentContext}async processUserMessage(t){console.log("💬 Processing user message:",t),this.conversationState="analyzing";const r=await this.analyzeUserIntent(t);console.log("🎯 Intent analysis:",r);const o=await this.generateContextualResponse(t,r);return await this.updateConversationHistory(t,o,r),this.conversationState="idle",o}async analyzeUserIntent(t){const r=t.toLowerCase(),o={create:this.detectIntent(r,["create","build","make","develop","start","new app","new project"]),add:this.detectIntent(r,["add","include","implement","integrate","insert","put in"]),modify:this.detectIntent(r,["modify","change","update","edit","alter","fix","improve"]),remove:this.detectIntent(r,["remove","delete","take out","eliminate","get rid of"]),explain:this.detectIntent(r,["explain","tell me","what is","how does","describe","clarify"]),ask:this.detectIntent(r,["what","how","why","when","where","which","can you","could you"]),show:this.detectIntent(r,["show","display","see","view","look at","demonstrate"]),help:this.detectIntent(r,["help","assist","support","guide","tutorial","how to"]),recommend:this.detectIntent(r,["recommend","suggest","advise","what should","best practice"]),yes:this.detectIntent(r,["yes","yeah","yep","sure","ok","okay","agree","confirm"]),no:this.detectIntent(r,["no","nope","not","disagree","cancel","stop"]),clarify:this.detectIntent(r,["clarify","explain more","more details","elaborate","expand"]),repeat:this.detectIntent(r,["repeat","again","once more","restate"]),debug:this.detectIntent(r,["debug","error","bug","issue","problem","fix","broken"]),optimize:this.detectIntent(r,["optimize","performance","speed","faster","better","improve"]),test:this.detectIntent(r,["test","testing","validate","check","verify"]),status:this.detectIntent(r,["status","progress","where are we","what's done","current state"]),plan:this.detectIntent(r,["plan","roadmap","next steps","what's next","timeline"]),review:this.detectIntent(r,["review","check","audit","analyze","evaluate"])},n=this.extractEntities(t),i=this.extractFeatureMentions(t),a=this.extractTechnicalTerms(t),l=Object.keys(o).find(g=>o[g])||"general",u=this.determineConversationFlow(l,n,i),m=this.generateFollowUpQuestions(l,n,i);return{primaryIntent:l,intents:o,entities:n,features:i,technicalTerms:a,conversationFlow:u,followUpQuestions:m,confidence:this.calculateConfidence(o,n,i),requiresClarification:this.needsClarification(l,n,i)}}detectIntent(t,r){return r.some(o=>t.includes(o))}extractEntities(t){const r={technologies:[],features:[],files:[],numbers:[],timeframes:[],priorities:[]};["react","vue","angular","javascript","typescript","python","java","php","node","express","mongodb","mysql","postgresql","firebase","aws","azure","html","css","bootstrap","tailwind","sass","less","webpack","vite"].forEach(m=>{t.toLowerCase().includes(m)&&r.technologies.push(m)}),["authentication","login","register","database","api","search","filter","upload","download","payment","notification","email","chat","messaging","calendar","scheduling","analytics","dashboard","admin","user management"].forEach(m=>{t.toLowerCase().includes(m)&&r.features.push(m)});const i=/\b\w+\.(js|jsx|ts|tsx|html|css|scss|json|md|txt)\b/g,a=t.match(i)||[];r.files=a;const l=/\b\d+\b/g,u=t.match(l)||[];return r.numbers=u,r}extractFeatureMentions(t){const r=t.toLowerCase(),o=[];return Object.entries({authentication:["login","signin","register","signup","auth","user account"],database:["database","db","storage","data","persist","save"],api:["api","endpoint","service","backend","server"],ui:["interface","ui","design","layout","styling","theme"],responsive:["mobile","responsive","tablet","phone","screen size"],search:["search","find","filter","query","lookup"],payment:["payment","billing","stripe","paypal","checkout","money"],notification:["notification","alert","message","email","push"],file:["upload","download","file","image","document","attachment"],security:["security","secure","encryption","password","protection"],testing:["test","testing","unit test","integration","quality"],deployment:["deploy","hosting","production","live","publish"]}).forEach(([i,a])=>{a.some(l=>r.includes(l))&&o.push(i)}),o}extractTechnicalTerms(t){return["component","function","class","method","variable","constant","array","object","string","number","boolean","null","undefined","async","await","promise","callback","event","handler","state","props","hook","effect","context","reducer","route","path","url","endpoint","request","response","error","exception","validation","sanitization","security"].filter(o=>t.toLowerCase().includes(o))}determineConversationFlow(t,r,o){return{create:"development",add:"incremental_development",modify:"modification",explain:"educational",ask:"informational",help:"support",recommend:"advisory",debug:"troubleshooting",optimize:"optimization",test:"testing",status:"project_management",plan:"planning",review:"analysis"}[t]||"general"}generateFollowUpQuestions(t,r,o){return{create:["What type of app would you like to create?","What features should it have?","What's your target audience?","Do you have any specific requirements?"],add:["Which specific feature would you like to add?","How should this feature work?","Where should it be integrated?","Do you have any specific requirements for this feature?"],modify:["What exactly would you like to change?","How should it work differently?","What's the current behavior vs. desired behavior?","Are there any specific constraints?"],explain:["What specific aspect would you like me to explain?","What's your current understanding?","Do you need a high-level overview or detailed explanation?","Are you looking for code examples?"],help:["What specific area do you need help with?","What are you trying to accomplish?","What's your current skill level?","Do you prefer step-by-step guidance or general advice?"],debug:["What error are you seeing?","When does this issue occur?","What were you doing when it happened?","Can you share the error message or code?"]}[t]||[]}calculateConfidence(t,r,o){let n=0;const i=Object.values(t).filter(Boolean).length;n+=i*.3;const a=Object.values(r).flat().length;return n+=Math.min(a*.1,.3),n+=o.length*.1,Math.min(n,1)}needsClarification(t,r,o){return!!(this.calculateConfidence({},r,o)<.3||["create","add","modify","help"].includes(t)&&r.features.length===0)}async generateContextualResponse(t,r){const{primaryIntent:o,entities:n,features:i,requiresClarification:a}=r;if(a)return this.generateClarificationResponse(r);switch(o){case"create":return await this.handleCreateIntent(t,r);case"add":return await this.handleAddIntent(t,r);case"modify":return await this.handleModifyIntent(t,r);case"explain":return await this.handleExplainIntent(t,r);case"ask":return await this.handleAskIntent(t,r);case"help":return await this.handleHelpIntent(t,r);case"recommend":return await this.handleRecommendIntent(t,r);case"debug":return await this.handleDebugIntent(t,r);case"optimize":return await this.handleOptimizeIntent(t,r);case"test":return await this.handleTestIntent(t,r);case"status":return await this.handleStatusIntent(t,r);case"plan":return await this.handlePlanIntent(t,r);case"review":return await this.handleReviewIntent(t,r);default:return await this.handleGeneralIntent(t,r)}}async handleCreateIntent(t,r){const{entities:o,features:n}=r,i=this.currentContext;return n.length>0?`I'll help you create a new app with ${n.join(", ")} features! Based on your request, I can build a ${i?.appType||"web"} application. Let me generate the initial code structure for you.`:"I'd be happy to help you create a new app! To give you the best solution, could you tell me what type of app you want to build and what features it should have?"}async handleAddIntent(t,r){const{entities:o,features:n}=r,a=this.currentContext?.currentFeatures||[];if(n.length>0){const l=n.filter(u=>!a.includes(u));return l.length>0?`Perfect! I'll add ${l.join(", ")} to your existing app. I can see you currently have ${a.join(", ")}. I'll integrate the new features without affecting your existing code.`:`I notice you already have ${n.join(", ")} in your app. Would you like me to enhance these features or add something different?`}else return"I'd be happy to add new features to your app! What specific features would you like me to add? I can help with authentication, database integration, API connections, and much more."}async handleModifyIntent(t,r){const{entities:o,features:n}=r,a=this.currentContext?.currentFeatures||[];if(n.length>0){const l=n.filter(u=>a.includes(u));return l.length>0?`I'll help you modify ${l.join(", ")} in your app. What specific changes would you like me to make to these features?`:`I don't see ${n.join(", ")} in your current app. Would you like me to add these features instead, or are you referring to something else?`}else return"I'd be happy to help you modify your app! What specific aspects would you like to change? I can help with code improvements, feature enhancements, or structural changes."}async handleExplainIntent(t,r){const{entities:o,features:n}=r;return n.length>0?`I'd be happy to explain ${n.join(", ")}! Let me provide you with a detailed explanation of how these features work and how to implement them effectively.`:o.technologies.length>0?`I'll explain ${o.technologies.join(", ")} for you! Let me break down how these technologies work and how they can benefit your project.`:"I'd be happy to explain anything you'd like to know! What specific topic or concept would you like me to clarify?"}async handleAskIntent(t,r){const{entities:o,features:n}=r;return`Great question! Based on your query about ${n.length>0?n.join(", "):"your project"}, let me provide you with a comprehensive answer. I'll make sure to cover all the important aspects you need to know.`}async handleHelpIntent(t,r){const{entities:o,features:n}=r;return n.length>0?`I'll help you with ${n.join(", ")}! Let me provide you with step-by-step guidance and best practices for implementing these features effectively.`:"I'm here to help! I can assist you with development, debugging, optimization, and much more. What specific area would you like help with?"}async handleRecommendIntent(t,r){const{entities:o,features:n}=r;return`Based on your current app with ${(this.currentContext?.currentFeatures||[]).join(", ")}, I recommend focusing on essential features first. Let me suggest some specific improvements that would benefit your project.`}async handleDebugIntent(t,r){const{entities:o,features:n}=r;return"I'll help you debug this issue! Let me analyze the problem and provide you with a solution. Can you share more details about the error or issue you're experiencing?"}async handleOptimizeIntent(t,r){const{entities:o,features:n}=r;return"I'll help you optimize your app! Let me analyze your current setup and provide specific recommendations for improving performance, code quality, and user experience."}async handleTestIntent(t,r){const{entities:o,features:n}=r;return"I'll help you implement testing for your app! Let me set up a comprehensive testing strategy that covers unit tests, integration tests, and quality assurance."}async handleStatusIntent(t,r){const o=this.currentContext,n=o?.currentFeatures||[];return`Here's your current project status: You have a ${o?.appType||"web"} app with ${n.length} features: ${n.join(", ")}. The app is ready for further development or deployment.`}async handlePlanIntent(t,r){return`Let me create a development plan for you! Based on your current features (${(this.currentContext?.currentFeatures||[]).join(", ")}), I'll suggest the next steps and prioritize what to work on next.`}async handleReviewIntent(t,r){return this.currentContext?.currentFeatures,"I'll conduct a comprehensive review of your app! Let me analyze your current implementation, check for best practices, and provide recommendations for improvement."}async handleGeneralIntent(t,r){const{entities:o,features:n}=r;return`I understand you want to work on: "${t}". I can help you with development, feature suggestions, debugging, optimization, or any other aspect of your project. What would you like to focus on?`}generateClarificationResponse(t){const{followUpQuestions:r}=t;return r.length>0?`I'd be happy to help! To give you the best solution, could you clarify: ${r[0]}`:"I'd be happy to help! Could you provide more details about what you'd like to accomplish?"}async updateConversationHistory(t,r,o){const n={id:`msg_${Date.now()}`,type:"user",content:t,timestamp:new Date,analysis:o},i={id:`msg_${Date.now()}_ai`,type:"ai",content:r,timestamp:new Date,intent:o.primaryIntent,confidence:o.confidence};this.conversationHistory.push(n,i),await Y.addMessage(t,r,"ai")}getConversationSummary(){return{messageCount:this.conversationHistory.length,lastIntent:this.lastUserIntent,currentState:this.conversationState,context:this.currentContext}}reset(){this.conversationHistory=[],this.currentContext=null,this.conversationState="idle",this.lastUserIntent=null,this.followUpQuestions=[]}}const Ye=new Ar,uo=()=>{const{currentProject:s}=re(),[t,r]=c.useState([]),[o,n]=c.useState(""),[i,a]=c.useState(!1),[l,u]=c.useState([]),[m,g]=c.useState(null),[v,x]=c.useState(!1),[h,C]=c.useState(null),N=c.useRef(null);c.useEffect(()=>{j()},[s]),c.useEffect(()=>{y()},[t]);const j=async()=>{try{const b={id:s.id||`project_${Date.now()}`,name:s.name,features:I(s),techStack:s.config?[s.config.language,s.config.styling,s.config.database,s.config.auth].filter(Boolean):[],appType:s.config?.appType||"web",complexity:S(s),industry:"general"},T=await Ye.initializeConversation(b);C(T.id);const R=Y.getConversationHistory();r(R),await d()}catch(b){console.error("Failed to initialize conversation:",b)}},I=b=>{const T=[],R=b.files||{};return Object.values(R).forEach(A=>{typeof A=="string"&&((A.includes("authentication")||A.includes("login"))&&T.push("Authentication"),(A.includes("database")||A.includes("firebase"))&&T.push("Database"),(A.includes("responsive")||A.includes("mobile"))&&T.push("Responsive Design"),(A.includes("api")||A.includes("fetch"))&&T.push("API Integration"),(A.includes("form")||A.includes("input"))&&T.push("Form Handling"),(A.includes("routing")||A.includes("router"))&&T.push("Routing"),(A.includes("state")||A.includes("useState"))&&T.push("State Management"),(A.includes("test")||A.includes("jest"))&&T.push("Testing"))}),[...new Set(T)]},S=b=>{const T=Object.keys(b.files||{}).length,R=I(b);return T>10||R.length>8?"advanced":T>5||R.length>4?"intermediate":"basic"},d=async()=>{try{const b=await Y.generateFeatureRecommendations();u(b);const T=await Y.checkIndustryStandards({features:I(s)});g(T)}catch(b){console.error("Failed to generate recommendations:",b)}},w=async()=>{if(!o.trim()||i)return;const b=o.trim();n(""),a(!0);const T={id:`msg_${Date.now()}`,type:"user",content:b,timestamp:new Date};r(R=>[...R,T]);try{const R=await Ye.processUserMessage(b),A={id:`msg_${Date.now()}_ai`,type:"ai",content:R,timestamp:new Date};r(B=>[...B,A]),await d()}catch(R){console.error("Failed to send message:",R);const A={id:`msg_${Date.now()}_error`,type:"error",content:"Sorry, I encountered an error. Please try again.",timestamp:new Date};r(B=>[...B,A])}finally{a(!1)}},y=()=>{N.current?.scrollIntoView({behavior:"smooth"})},O=b=>{const T=`I'd like to add: ${b.name} - ${b.description}`;n(T)},k=b=>{switch(b){case"critical":return"text-red-500";case"high":return"text-orange-500";case"medium":return"text-yellow-500";case"low":return"text-green-500";default:return"text-gray-500"}},p=b=>{switch(b){case"critical":return e.jsx(gt,{className:"h-4 w-4"});case"high":return e.jsx(br,{className:"h-4 w-4"});case"medium":return e.jsx(xr,{className:"h-4 w-4"});case"low":return e.jsx(ht,{className:"h-4 w-4"});default:return e.jsx(mt,{className:"h-4 w-4"})}};return e.jsxs("div",{className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-border bg-muted/30",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(gr,{className:"h-5 w-5 text-primary"}),e.jsx("h3",{className:"font-semibold text-foreground",children:"AI Assistant"}),e.jsx("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"Online"})]}),e.jsxs("button",{onClick:()=>x(!v),className:"flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors",children:[e.jsx(Ge,{className:"h-4 w-4"}),"Recommendations"]})]}),e.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[e.jsx(q,{children:t.map(b=>e.jsx(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:`flex ${b.type==="user"?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`max-w-[80%] p-3 rounded-lg ${b.type==="user"?"bg-primary text-primary-foreground":b.type==="error"?"bg-red-100 text-red-800 border border-red-200":"bg-muted text-foreground"}`,children:[e.jsx("p",{className:"text-sm",children:b.content}),e.jsx("p",{className:"text-xs opacity-70 mt-1",children:new Date(b.timestamp).toLocaleTimeString()})]})},b.id))}),i&&e.jsx("div",{className:"flex justify-start",children:e.jsx("div",{className:"bg-muted text-foreground p-3 rounded-lg",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-primary"}),e.jsx("span",{className:"text-sm",children:"AI is thinking..."})]})})}),e.jsx("div",{ref:N})]}),e.jsx("div",{className:"p-4 border-t border-border",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:o,onChange:b=>n(b.target.value),onKeyPress:b=>b.key==="Enter"&&w(),placeholder:"Ask me anything about your app...",className:"flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",disabled:i}),e.jsx("button",{onClick:w,disabled:!o.trim()||i,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"Send"})]})})]}),e.jsx(q,{children:v&&e.jsxs(H.div,{initial:{width:0,opacity:0},animate:{width:350,opacity:1},exit:{width:0,opacity:0},className:"border-l border-border bg-muted/20 overflow-hidden",children:[e.jsx("div",{className:"p-4 border-b border-border",children:e.jsxs("h4",{className:"font-semibold text-foreground flex items-center gap-2",children:[e.jsx(Ge,{className:"h-4 w-4"}),"Smart Recommendations"]})}),e.jsxs("div",{className:"overflow-y-auto h-full",children:[e.jsxs("div",{className:"p-4",children:[e.jsxs("h5",{className:"font-medium text-foreground mb-3 flex items-center gap-2",children:[e.jsx(ce,{className:"h-4 w-4"}),"Suggested Features"]}),e.jsx("div",{className:"space-y-2",children:l.slice(0,5).map((b,T)=>e.jsxs("div",{onClick:()=>O(b),className:"p-3 bg-card border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",children:[e.jsxs("div",{className:"flex items-start justify-between mb-2",children:[e.jsx("h6",{className:"font-medium text-sm text-foreground",children:b.name}),e.jsxs("div",{className:`flex items-center gap-1 ${k(b.priority)}`,children:[p(b.priority),e.jsx("span",{className:"text-xs capitalize",children:b.priority})]})]}),e.jsx("p",{className:"text-xs text-muted-foreground mb-2",children:b.description}),e.jsx("span",{className:"text-xs bg-primary/10 text-primary px-2 py-1 rounded",children:b.category})]},T))})]}),m&&e.jsxs("div",{className:"p-4 border-t border-border",children:[e.jsxs("h5",{className:"font-medium text-foreground mb-3 flex items-center gap-2",children:[e.jsx(fr,{className:"h-4 w-4"}),"Industry Standards"]}),e.jsx("div",{className:"space-y-3",children:Object.entries(m).map(([b,T])=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-3",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h6",{className:"font-medium text-sm text-foreground capitalize",children:b.replace("_"," ")}),e.jsxs("span",{className:"text-sm font-semibold text-primary",children:[T.score,"%"]})]}),e.jsx("div",{className:"w-full bg-muted rounded-full h-2",children:e.jsx("div",{className:"bg-primary h-2 rounded-full transition-all duration-300",style:{width:`${T.score}%`}})}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[T.implemented,"/",T.total," implemented"]})]},b))})]})]})]})})]})]})},$r=c.createContext();function Rr(){return c.useContext($r)}const Mr=({isOpen:s,onClose:t})=>{const{isCollaborationActive:r,activeUsers:o,cursors:n,comments:i,sharedProjects:a,isLoading:l,shareProject:u,getSharedProjects:m,toggleCollaboration:g}=Rr(),{user:v}=Gt(),[x,h]=c.useState(""),[C,N]=c.useState("read"),[j,I]=c.useState("users");c.useEffect(()=>{s&&r&&m()},[s,r,m]);const S=async y=>{if(y.preventDefault(),!x.trim()){$.error("Please enter an email address");return}try{await u(x,C),$.success(`Project shared with ${x}`),h(""),m()}catch{$.error("Failed to share project")}},d=y=>{switch(y){case"admin":return"text-red-600 bg-red-100";case"write":return"text-blue-600 bg-blue-100";case"read":return"text-green-600 bg-green-100";default:return"text-gray-600 bg-gray-100"}},w=y=>{switch(y){case"admin":return e.jsx(gt,{className:"h-4 w-4"});case"write":return e.jsx(mt,{className:"h-4 w-4"});case"read":return e.jsx(qe,{className:"h-4 w-4"});default:return e.jsx(jr,{className:"h-4 w-4"})}};return s?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(We,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Real-time team collaboration"})]})]}),e.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:e.jsx(yr,{className:"h-5 w-5 text-gray-600"})})]}),e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Real-time Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Enable real-time editing, cursor tracking, and comments"})]}),e.jsx("button",{onClick:g,disabled:l,className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${r?"bg-green-100 text-green-700 hover:bg-green-200":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:r?e.jsxs(e.Fragment,{children:[e.jsx(qe,{className:"h-4 w-4"}),"Active"]}):e.jsxs(e.Fragment,{children:[e.jsx(vr,{className:"h-4 w-4"}),"Inactive"]})})]})}),e.jsx("div",{className:"flex border-b border-gray-200",children:[{id:"users",label:"Active Users",icon:We},{id:"comments",label:"Comments",icon:pt},{id:"sharing",label:"Sharing",icon:ut}].map(y=>e.jsxs("button",{onClick:()=>I(y.id),className:`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${j===y.id?"text-blue-600 border-b-2 border-blue-600":"text-gray-600 hover:text-gray-900"}`,children:[e.jsx(y.icon,{className:"h-4 w-4"}),y.label]},y.id))}),e.jsxs("div",{className:"p-6 max-h-96 overflow-y-auto",children:[j==="users"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Active Users (",o.length,")"]}),o.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No active users"}):e.jsx("div",{className:"space-y-3",children:o.map((y,O)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:y.userName?.charAt(0)||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"font-medium text-gray-900",children:y.userName}),e.jsx("p",{className:"text-sm text-gray-600",children:y.userEmail})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Online"})]})]},O))}),n.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"text-md font-medium text-gray-900 mb-3",children:"Active Cursors"}),e.jsx("div",{className:"space-y-2",children:n.map((y,O)=>e.jsxs("div",{className:"flex items-center gap-2 p-2 bg-blue-50 rounded",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-medium",children:y.userName?.charAt(0)||"U"})}),e.jsx("span",{className:"text-sm text-gray-700",children:y.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:[y.fileId," - Line ",y.line]})]},O))})]})]}),j==="comments"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Comments (",i.length,")"]}),i.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No comments yet"}):e.jsx("div",{className:"space-y-3",children:i.map((y,O)=>e.jsx("div",{className:`p-4 rounded-lg border ${y.resolved?"bg-gray-50 border-gray-200":"bg-yellow-50 border-yellow-200"}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:y.userName?.charAt(0)||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"font-medium text-gray-900",children:y.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:["Line ",y.lineNumber," in ",y.fileId]}),y.resolved&&e.jsx("span",{className:"text-xs bg-green-100 text-green-700 px-2 py-1 rounded",children:"Resolved"})]}),e.jsx("p",{className:"text-gray-700",children:y.content})]})]})},O))})]}),j==="sharing"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Share Project"}),e.jsxs("form",{onSubmit:S,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),e.jsx("input",{type:"email",value:x,onChange:y=>h(y.target.value),placeholder:"user@example.com",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Permissions"}),e.jsxs("select",{value:C,onChange:y=>N(y.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"read",children:"Read Only"}),e.jsx("option",{value:"write",children:"Read & Write"}),e.jsx("option",{value:"admin",children:"Admin"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors",children:"Share Project"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Shared Projects"}),a.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No shared projects"}):e.jsx("div",{className:"space-y-3",children:a.map((y,O)=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center",children:e.jsx(wr,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:y.sharedWith}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Project ID: ",y.projectId]})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{className:`px-2 py-1 rounded text-xs font-medium ${d(y.permissions)}`,children:[w(y.permissions),y.permissions]})})]},O))})]})]})]})]})}):null},ft=c.createContext({dragDropManager:void 0});function _(s){return"Minified Redux error #"+s+"; visit https://redux.js.org/Errors?code="+s+" for the full message or use the non-minified dev environment for full errors. "}var Je=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Xe=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ke={INIT:"@@redux/INIT"+Xe(),REPLACE:"@@redux/REPLACE"+Xe()};function Fr(s){if(typeof s!="object"||s===null)return!1;for(var t=s;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(s)===t}function xt(s,t,r){var o;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(_(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(_(1));return r(xt)(s,t)}if(typeof s!="function")throw new Error(_(2));var n=s,i=t,a=[],l=a,u=!1;function m(){l===a&&(l=a.slice())}function g(){if(u)throw new Error(_(3));return i}function v(N){if(typeof N!="function")throw new Error(_(4));if(u)throw new Error(_(5));var j=!0;return m(),l.push(N),function(){if(j){if(u)throw new Error(_(6));j=!1,m();var S=l.indexOf(N);l.splice(S,1),a=null}}}function x(N){if(!Fr(N))throw new Error(_(7));if(typeof N.type>"u")throw new Error(_(8));if(u)throw new Error(_(9));try{u=!0,i=n(i,N)}finally{u=!1}for(var j=a=l,I=0;I<j.length;I++){var S=j[I];S()}return N}function h(N){if(typeof N!="function")throw new Error(_(10));n=N,x({type:Ke.REPLACE})}function C(){var N,j=v;return N={subscribe:function(S){if(typeof S!="object"||S===null)throw new Error(_(11));function d(){S.next&&S.next(g())}d();var w=j(d);return{unsubscribe:w}}},N[Je]=function(){return this},N}return x({type:Ke.INIT}),o={dispatch:x,subscribe:v,getState:g,replaceReducer:h},o[Je]=C,o}function E(s,t,...r){if(Lr()&&t===void 0)throw new Error("invariant requires an error message argument");if(!s){let o;if(t===void 0)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let n=0;o=new Error(t.replace(/%s/g,function(){return r[n++]})),o.name="Invariant Violation"}throw o.framesToPop=1,o}}function Lr(){return typeof process<"u"&&!0}function Hr(s,t,r){return t.split(".").reduce((o,n)=>o&&o[n]?o[n]:r||null,s)}function Br(s,t){return s.filter(r=>r!==t)}function bt(s){return typeof s=="object"}function Ur(s,t){const r=new Map,o=i=>{r.set(i,r.has(i)?r.get(i)+1:1)};s.forEach(o),t.forEach(o);const n=[];return r.forEach((i,a)=>{i===1&&n.push(a)}),n}function zr(s,t){return s.filter(r=>t.indexOf(r)>-1)}const Fe="dnd-core/INIT_COORDS",be="dnd-core/BEGIN_DRAG",Le="dnd-core/PUBLISH_DRAG_SOURCE",ye="dnd-core/HOVER",ve="dnd-core/DROP",we="dnd-core/END_DRAG";function Ze(s,t){return{type:Fe,payload:{sourceClientOffset:t||null,clientOffset:s||null}}}const _r={type:Fe,payload:{clientOffset:null,sourceClientOffset:null}};function Gr(s){return function(r=[],o={publishSource:!0}){const{publishSource:n=!0,clientOffset:i,getSourceClientOffset:a}=o,l=s.getMonitor(),u=s.getRegistry();s.dispatch(Ze(i)),Wr(r,l,u);const m=Yr(r,l);if(m==null){s.dispatch(_r);return}let g=null;if(i){if(!a)throw new Error("getSourceClientOffset must be defined");qr(a),g=a(m)}s.dispatch(Ze(i,g));const x=u.getSource(m).beginDrag(l,m);if(x==null)return;Vr(x),u.pinSource(m);const h=u.getSourceType(m);return{type:be,payload:{itemType:h,item:x,sourceId:m,clientOffset:i||null,sourceClientOffset:g||null,isSourcePublic:!!n}}}}function Wr(s,t,r){E(!t.isDragging(),"Cannot call beginDrag while dragging."),s.forEach(function(o){E(r.getSource(o),"Expected sourceIds to be registered.")})}function qr(s){E(typeof s=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function Vr(s){E(bt(s),"Item must be an object.")}function Yr(s,t){let r=null;for(let o=s.length-1;o>=0;o--)if(t.canDragSource(s[o])){r=s[o];break}return r}function Jr(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Xr(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){Jr(s,n,r[n])})}return s}function Kr(s){return function(r={}){const o=s.getMonitor(),n=s.getRegistry();Zr(o),ts(o).forEach((a,l)=>{const u=Qr(a,l,n,o),m={type:ve,payload:{dropResult:Xr({},r,u)}};s.dispatch(m)})}}function Zr(s){E(s.isDragging(),"Cannot call drop while not dragging."),E(!s.didDrop(),"Cannot call drop twice during one drag operation.")}function Qr(s,t,r,o){const n=r.getTarget(s);let i=n?n.drop(o,s):void 0;return es(i),typeof i>"u"&&(i=t===0?{}:o.getDropResult()),i}function es(s){E(typeof s>"u"||bt(s),"Drop result must either be an object or undefined.")}function ts(s){const t=s.getTargetIds().filter(s.canDropOnTarget,s);return t.reverse(),t}function rs(s){return function(){const r=s.getMonitor(),o=s.getRegistry();ss(r);const n=r.getSourceId();return n!=null&&(o.getSource(n,!0).endDrag(r,n),o.unpinSource()),{type:we}}}function ss(s){E(s.isDragging(),"Cannot call endDrag while not dragging.")}function Ee(s,t){return t===null?s===null:Array.isArray(s)?s.some(r=>r===t):s===t}function ns(s){return function(r,{clientOffset:o}={}){os(r);const n=r.slice(0),i=s.getMonitor(),a=s.getRegistry(),l=i.getItemType();return as(n,a,l),is(n,i,a),ls(n,i,a),{type:ye,payload:{targetIds:n,clientOffset:o||null}}}}function os(s){E(Array.isArray(s),"Expected targetIds to be an array.")}function is(s,t,r){E(t.isDragging(),"Cannot call hover while not dragging."),E(!t.didDrop(),"Cannot call hover after drop.");for(let o=0;o<s.length;o++){const n=s[o];E(s.lastIndexOf(n)===o,"Expected targetIds to be unique in the passed array.");const i=r.getTarget(n);E(i,"Expected targetIds to be registered.")}}function as(s,t,r){for(let o=s.length-1;o>=0;o--){const n=s[o],i=t.getTargetType(n);Ee(i,r)||s.splice(o,1)}}function ls(s,t,r){s.forEach(function(o){r.getTarget(o).hover(t,o)})}function cs(s){return function(){if(s.getMonitor().isDragging())return{type:Le}}}function ds(s){return{beginDrag:Gr(s),publishDragSource:cs(s),hover:ns(s),drop:Kr(s),endDrag:rs(s)}}class us{receiveBackend(t){this.backend=t}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const t=this,{dispatch:r}=this.store;function o(i){return(...a)=>{const l=i.apply(t,a);typeof l<"u"&&r(l)}}const n=ds(this);return Object.keys(n).reduce((i,a)=>{const l=n[a];return i[a]=o(l),i},{})}dispatch(t){this.store.dispatch(t)}constructor(t,r){this.isSetUp=!1,this.handleRefCountChange=()=>{const o=this.store.getState().refCount>0;this.backend&&(o&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!o&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=t,this.monitor=r,t.subscribe(this.handleRefCountChange)}}function ps(s,t){return{x:s.x+t.x,y:s.y+t.y}}function yt(s,t){return{x:s.x-t.x,y:s.y-t.y}}function ms(s){const{clientOffset:t,initialClientOffset:r,initialSourceClientOffset:o}=s;return!t||!r||!o?null:yt(ps(t,o),r)}function hs(s){const{clientOffset:t,initialClientOffset:r}=s;return!t||!r?null:yt(t,r)}const le=[],He=[];le.__IS_NONE__=!0;He.__IS_ALL__=!0;function gs(s,t){return s===le?!1:s===He||typeof t>"u"?!0:zr(t,s).length>0}class fs{subscribeToStateChange(t,r={}){const{handlerIds:o}=r;E(typeof t=="function","listener must be a function."),E(typeof o>"u"||Array.isArray(o),"handlerIds, when specified, must be an array of strings.");let n=this.store.getState().stateId;const i=()=>{const a=this.store.getState(),l=a.stateId;try{l===n||l===n+1&&!gs(a.dirtyHandlerIds,o)||t()}finally{n=l}};return this.store.subscribe(i)}subscribeToOffsetChange(t){E(typeof t=="function","listener must be a function.");let r=this.store.getState().dragOffset;const o=()=>{const n=this.store.getState().dragOffset;n!==r&&(r=n,t())};return this.store.subscribe(o)}canDragSource(t){if(!t)return!1;const r=this.registry.getSource(t);return E(r,`Expected to find a valid source. sourceId=${t}`),this.isDragging()?!1:r.canDrag(this,t)}canDropOnTarget(t){if(!t)return!1;const r=this.registry.getTarget(t);if(E(r,`Expected to find a valid target. targetId=${t}`),!this.isDragging()||this.didDrop())return!1;const o=this.registry.getTargetType(t),n=this.getItemType();return Ee(o,n)&&r.canDrop(this,t)}isDragging(){return!!this.getItemType()}isDraggingSource(t){if(!t)return!1;const r=this.registry.getSource(t,!0);if(E(r,`Expected to find a valid source. sourceId=${t}`),!this.isDragging()||!this.isSourcePublic())return!1;const o=this.registry.getSourceType(t),n=this.getItemType();return o!==n?!1:r.isDragging(this,t)}isOverTarget(t,r={shallow:!1}){if(!t)return!1;const{shallow:o}=r;if(!this.isDragging())return!1;const n=this.registry.getTargetType(t),i=this.getItemType();if(i&&!Ee(n,i))return!1;const a=this.getTargetIds();if(!a.length)return!1;const l=a.indexOf(t);return o?l===a.length-1:l>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return ms(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return hs(this.store.getState().dragOffset)}constructor(t,r){this.store=t,this.registry=r}}const Qe=typeof global<"u"?global:self,vt=Qe.MutationObserver||Qe.WebKitMutationObserver;function wt(s){return function(){const r=setTimeout(n,0),o=setInterval(n,50);function n(){clearTimeout(r),clearInterval(o),s()}}}function xs(s){let t=1;const r=new vt(s),o=document.createTextNode("");return r.observe(o,{characterData:!0}),function(){t=-t,o.data=t}}const bs=typeof vt=="function"?xs:wt;class ys{enqueueTask(t){const{queue:r,requestFlush:o}=this;r.length||(o(),this.flushing=!0),r[r.length]=t}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:t}=this;for(;this.index<t.length;){const r=this.index;if(this.index++,t[r].call(),this.index>this.capacity){for(let o=0,n=t.length-this.index;o<n;o++)t[o]=t[o+this.index];t.length-=this.index,this.index=0}}t.length=0,this.index=0,this.flushing=!1},this.registerPendingError=t=>{this.pendingErrors.push(t),this.requestErrorThrow()},this.requestFlush=bs(this.flush),this.requestErrorThrow=wt(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class vs{call(){try{this.task&&this.task()}catch(t){this.onError(t)}finally{this.task=null,this.release(this)}}constructor(t,r){this.onError=t,this.release=r,this.task=null}}class ws{create(t){const r=this.freeTasks,o=r.length?r.pop():new vs(this.onError,n=>r[r.length]=n);return o.task=t,o}constructor(t){this.onError=t,this.freeTasks=[]}}const jt=new ys,js=new ws(jt.registerPendingError);function Ns(s){jt.enqueueTask(js.create(s))}const Be="dnd-core/ADD_SOURCE",Ue="dnd-core/ADD_TARGET",ze="dnd-core/REMOVE_SOURCE",je="dnd-core/REMOVE_TARGET";function Ss(s){return{type:Be,payload:{sourceId:s}}}function Ds(s){return{type:Ue,payload:{targetId:s}}}function Cs(s){return{type:ze,payload:{sourceId:s}}}function Is(s){return{type:je,payload:{targetId:s}}}function ks(s){E(typeof s.canDrag=="function","Expected canDrag to be a function."),E(typeof s.beginDrag=="function","Expected beginDrag to be a function."),E(typeof s.endDrag=="function","Expected endDrag to be a function.")}function Ts(s){E(typeof s.canDrop=="function","Expected canDrop to be a function."),E(typeof s.hover=="function","Expected hover to be a function."),E(typeof s.drop=="function","Expected beginDrag to be a function.")}function Ae(s,t){if(t&&Array.isArray(s)){s.forEach(r=>Ae(r,!1));return}E(typeof s=="string"||typeof s=="symbol",t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var W;(function(s){s.SOURCE="SOURCE",s.TARGET="TARGET"})(W||(W={}));let Os=0;function Ps(){return Os++}function Es(s){const t=Ps().toString();switch(s){case W.SOURCE:return`S${t}`;case W.TARGET:return`T${t}`;default:throw new Error(`Unknown Handler Role: ${s}`)}}function et(s){switch(s[0]){case"S":return W.SOURCE;case"T":return W.TARGET;default:throw new Error(`Cannot parse handler ID: ${s}`)}}function tt(s,t){const r=s.entries();let o=!1;do{const{done:n,value:[,i]}=r.next();if(i===t)return!0;o=!!n}while(!o);return!1}class As{addSource(t,r){Ae(t),ks(r);const o=this.addHandler(W.SOURCE,t,r);return this.store.dispatch(Ss(o)),o}addTarget(t,r){Ae(t,!0),Ts(r);const o=this.addHandler(W.TARGET,t,r);return this.store.dispatch(Ds(o)),o}containsHandler(t){return tt(this.dragSources,t)||tt(this.dropTargets,t)}getSource(t,r=!1){return E(this.isSourceId(t),"Expected a valid source ID."),r&&t===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(t)}getTarget(t){return E(this.isTargetId(t),"Expected a valid target ID."),this.dropTargets.get(t)}getSourceType(t){return E(this.isSourceId(t),"Expected a valid source ID."),this.types.get(t)}getTargetType(t){return E(this.isTargetId(t),"Expected a valid target ID."),this.types.get(t)}isSourceId(t){return et(t)===W.SOURCE}isTargetId(t){return et(t)===W.TARGET}removeSource(t){E(this.getSource(t),"Expected an existing source."),this.store.dispatch(Cs(t)),Ns(()=>{this.dragSources.delete(t),this.types.delete(t)})}removeTarget(t){E(this.getTarget(t),"Expected an existing target."),this.store.dispatch(Is(t)),this.dropTargets.delete(t),this.types.delete(t)}pinSource(t){const r=this.getSource(t);E(r,"Expected an existing source."),this.pinnedSourceId=t,this.pinnedSource=r}unpinSource(){E(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(t,r,o){const n=Es(t);return this.types.set(n,r),t===W.SOURCE?this.dragSources.set(n,o):t===W.TARGET&&this.dropTargets.set(n,o),n}constructor(t){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=t}}const $s=(s,t)=>s===t;function Rs(s,t){return!s&&!t?!0:!s||!t?!1:s.x===t.x&&s.y===t.y}function Ms(s,t,r=$s){if(s.length!==t.length)return!1;for(let o=0;o<s.length;++o)if(!r(s[o],t[o]))return!1;return!0}function Fs(s=le,t){switch(t.type){case ye:break;case Be:case Ue:case je:case ze:return le;case be:case Le:case we:case ve:default:return He}const{targetIds:r=[],prevTargetIds:o=[]}=t.payload,n=Ur(r,o);if(!(n.length>0||!Ms(r,o)))return le;const a=o[o.length-1],l=r[r.length-1];return a!==l&&(a&&n.push(a),l&&n.push(l)),n}function Ls(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Hs(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){Ls(s,n,r[n])})}return s}const rt={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function Bs(s=rt,t){const{payload:r}=t;switch(t.type){case Fe:case be:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case ye:return Rs(s.clientOffset,r.clientOffset)?s:Hs({},s,{clientOffset:r.clientOffset});case we:case ve:return rt;default:return s}}function Us(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function te(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){Us(s,n,r[n])})}return s}const zs={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function _s(s=zs,t){const{payload:r}=t;switch(t.type){case be:return te({},s,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case Le:return te({},s,{isSourcePublic:!0});case ye:return te({},s,{targetIds:r.targetIds});case je:return s.targetIds.indexOf(r.targetId)===-1?s:te({},s,{targetIds:Br(s.targetIds,r.targetId)});case ve:return te({},s,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case we:return te({},s,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return s}}function Gs(s=0,t){switch(t.type){case Be:case Ue:return s+1;case ze:case je:return s-1;default:return s}}function Ws(s=0){return s+1}function qs(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Vs(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){qs(s,n,r[n])})}return s}function Ys(s={},t){return{dirtyHandlerIds:Fs(s.dirtyHandlerIds,{type:t.type,payload:Vs({},t.payload,{prevTargetIds:Hr(s,"dragOperation.targetIds",[])})}),dragOffset:Bs(s.dragOffset,t),refCount:Gs(s.refCount,t),dragOperation:_s(s.dragOperation,t),stateId:Ws(s.stateId)}}function Js(s,t=void 0,r={},o=!1){const n=Xs(o),i=new fs(n,new As(n)),a=new us(n,i),l=s(a,t,r);return a.receiveBackend(l),a}function Xs(s){const t=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return xt(Ys,s&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}function Ks(s,t){if(s==null)return{};var r=Zs(s,t),o,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(r[o]=s[o])}return r}function Zs(s,t){if(s==null)return{};var r={},o=Object.keys(s),n,i;for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&(r[n]=s[n]);return r}let st=0;const ge=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var Qs=c.memo(function(t){var{children:r}=t,o=Ks(t,["children"]);const[n,i]=en(o);return c.useEffect(()=>{if(i){const a=Nt();return++st,()=>{--st===0&&(a[ge]=null)}}},[]),e.jsx(ft.Provider,{value:n,children:r})});function en(s){if("manager"in s)return[{dragDropManager:s.manager},!1];const t=tn(s.backend,s.context,s.options,s.debugMode),r=!s.context;return[t,r]}function tn(s,t=Nt(),r,o){const n=t;return n[ge]||(n[ge]={dragDropManager:Js(s,t,r,o)}),n[ge]}function Nt(){return typeof global<"u"?global:window}var rn=function s(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var o,n,i;if(Array.isArray(t)){if(o=t.length,o!=r.length)return!1;for(n=o;n--!==0;)if(!s(t[n],r[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(i=Object.keys(t),o=i.length,o!==Object.keys(r).length)return!1;for(n=o;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[n]))return!1;for(n=o;n--!==0;){var a=i[n];if(!s(t[a],r[a]))return!1}return!0}return t!==t&&r!==r};const sn=Wt(rn),J=typeof window<"u"?c.useLayoutEffect:c.useEffect;function nn(s,t,r){const[o,n]=c.useState(()=>t(s)),i=c.useCallback(()=>{const a=t(s);sn(o,a)||(n(a),r&&r())},[o,s,r]);return J(i),[o,i]}function on(s,t,r){const[o,n]=nn(s,t,r);return J(function(){const a=s.getHandlerId();if(a!=null)return s.subscribeToStateChange(n,{handlerIds:[a]})},[s,n]),o}function St(s,t,r){return on(t,s||(()=>({})),()=>r.reconnect())}function Dt(s,t){const r=[];return typeof s!="function"&&r.push(s),c.useMemo(()=>typeof s=="function"?s():s,r)}function an(s){return c.useMemo(()=>s.hooks.dragSource(),[s])}function ln(s){return c.useMemo(()=>s.hooks.dragPreview(),[s])}let De=!1,Ce=!1;class cn{receiveHandlerId(t){this.sourceId=t}getHandlerId(){return this.sourceId}canDrag(){E(!De,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return De=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{De=!1}}isDragging(){if(!this.sourceId)return!1;E(!Ce,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return Ce=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{Ce=!1}}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}isDraggingSource(t){return this.internalMonitor.isDraggingSource(t)}isOverTarget(t,r){return this.internalMonitor.isOverTarget(t,r)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(t){return this.internalMonitor.subscribeToOffsetChange(t)}canDragSource(t){return this.internalMonitor.canDragSource(t)}canDropOnTarget(t){return this.internalMonitor.canDropOnTarget(t)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.sourceId=null,this.internalMonitor=t.getMonitor()}}let Ie=!1;class dn{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}canDrop(){if(!this.targetId)return!1;E(!Ie,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return Ie=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{Ie=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function un(s,t,r){const o=r.getRegistry(),n=o.addTarget(s,t);return[n,()=>o.removeTarget(n)]}function pn(s,t,r){const o=r.getRegistry(),n=o.addSource(s,t);return[n,()=>o.removeSource(n)]}function $e(s,t,r,o){let n;if(n!==void 0)return!!n;if(s===t)return!0;if(typeof s!="object"||!s||typeof t!="object"||!t)return!1;const i=Object.keys(s),a=Object.keys(t);if(i.length!==a.length)return!1;const l=Object.prototype.hasOwnProperty.bind(t);for(let u=0;u<i.length;u++){const m=i[u];if(!l(m))return!1;const g=s[m],v=t[m];if(n=void 0,n===!1||n===void 0&&g!==v)return!1}return!0}function Re(s){return s!==null&&typeof s=="object"&&Object.prototype.hasOwnProperty.call(s,"current")}function mn(s){if(typeof s.type=="string")return;const t=s.type.displayName||s.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function hn(s){return(t=null,r=null)=>{if(!c.isValidElement(t)){const i=t;return s(i,r),i}const o=t;return mn(o),gn(o,r?i=>s(i,r):s)}}function Ct(s){const t={};return Object.keys(s).forEach(r=>{const o=s[r];if(r.endsWith("Ref"))t[r]=s[r];else{const n=hn(o);t[r]=()=>n}}),t}function nt(s,t){typeof s=="function"?s(t):s.current=t}function gn(s,t){const r=s.ref;return E(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?c.cloneElement(s,{ref:o=>{nt(r,o),nt(t,o)}}):c.cloneElement(s,{ref:t})}class fn{receiveHandlerId(t){this.handlerId!==t&&(this.handlerId=t,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(t){this.dragSourceOptionsInternal=t}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(t){this.dragPreviewOptionsInternal=t}reconnect(){const t=this.reconnectDragSource();this.reconnectDragPreview(t)}reconnectDragSource(){const t=this.dragSource,r=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return r&&this.disconnectDragSource(),this.handlerId?t?(r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=t,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,t,this.dragSourceOptions)),r):(this.lastConnectedDragSource=t,r):r}reconnectDragPreview(t=!1){const r=this.dragPreview,o=t||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(o&&this.disconnectDragPreview(),!!this.handlerId){if(!r){this.lastConnectedDragPreview=r;return}o&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=r,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,r,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!$e(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!$e(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(t){this.hooks=Ct({dragSource:(r,o)=>{this.clearDragSource(),this.dragSourceOptions=o||null,Re(r)?this.dragSourceRef=r:this.dragSourceNode=r,this.reconnectDragSource()},dragPreview:(r,o)=>{this.clearDragPreview(),this.dragPreviewOptions=o||null,Re(r)?this.dragPreviewRef=r:this.dragPreviewNode=r,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}}class xn{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!$e(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=Ct({dropTarget:(r,o)=>{this.clearDropTarget(),this.dropTargetOptions=o,Re(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function se(){const{dragDropManager:s}=c.useContext(ft);return E(s!=null,"Expected drag drop context"),s}function bn(s,t){const r=se(),o=c.useMemo(()=>new fn(r.getBackend()),[r]);return J(()=>(o.dragSourceOptions=s||null,o.reconnect(),()=>o.disconnectDragSource()),[o,s]),J(()=>(o.dragPreviewOptions=t||null,o.reconnect(),()=>o.disconnectDragPreview()),[o,t]),o}function yn(){const s=se();return c.useMemo(()=>new cn(s),[s])}class vn{beginDrag(){const t=this.spec,r=this.monitor;let o=null;return typeof t.item=="object"?o=t.item:typeof t.item=="function"?o=t.item(r):o={},o??null}canDrag(){const t=this.spec,r=this.monitor;return typeof t.canDrag=="boolean"?t.canDrag:typeof t.canDrag=="function"?t.canDrag(r):!0}isDragging(t,r){const o=this.spec,n=this.monitor,{isDragging:i}=o;return i?i(n):r===t.getSourceId()}endDrag(){const t=this.spec,r=this.monitor,o=this.connector,{end:n}=t;n&&n(r.getItem(),r),o.reconnect()}constructor(t,r,o){this.spec=t,this.monitor=r,this.connector=o}}function wn(s,t,r){const o=c.useMemo(()=>new vn(s,t,r),[t,r]);return c.useEffect(()=>{o.spec=s},[s]),o}function jn(s){return c.useMemo(()=>{const t=s.type;return E(t!=null,"spec.type must be defined"),t},[s])}function Nn(s,t,r){const o=se(),n=wn(s,t,r),i=jn(s);J(function(){if(i!=null){const[l,u]=pn(i,n,o);return t.receiveHandlerId(l),r.receiveHandlerId(l),u}},[o,t,r,n,i])}function Sn(s,t){const r=Dt(s);E(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const o=yn(),n=bn(r.options,r.previewOptions);return Nn(r,o,n),[St(r.collect,o,n),an(n),ln(n)]}function Dn(s){return c.useMemo(()=>s.hooks.dropTarget(),[s])}function Cn(s){const t=se(),r=c.useMemo(()=>new xn(t.getBackend()),[t]);return J(()=>(r.dropTargetOptions=s||null,r.reconnect(),()=>r.disconnectDropTarget()),[s]),r}function In(){const s=se();return c.useMemo(()=>new dn(s),[s])}function kn(s){const{accept:t}=s;return c.useMemo(()=>(E(s.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class Tn{canDrop(){const t=this.spec,r=this.monitor;return t.canDrop?t.canDrop(r.getItem(),r):!0}hover(){const t=this.spec,r=this.monitor;t.hover&&t.hover(r.getItem(),r)}drop(){const t=this.spec,r=this.monitor;if(t.drop)return t.drop(r.getItem(),r)}constructor(t,r){this.spec=t,this.monitor=r}}function On(s,t){const r=c.useMemo(()=>new Tn(s,t),[t]);return c.useEffect(()=>{r.spec=s},[s]),r}function Pn(s,t,r){const o=se(),n=On(s,t),i=kn(s);J(function(){const[l,u]=un(i,n,o);return t.receiveHandlerId(l),r.receiveHandlerId(l),u},[o,t,n,r,i.map(a=>a.toString()).join("|")])}function En(s,t){const r=Dt(s),o=In(),n=Cn(r.options);return Pn(r,o,n),[St(r.collect,o,n),Dn(n)]}function It(s){let t=null;return()=>(t==null&&(t=s()),t)}function An(s,t){return s.filter(r=>r!==t)}function $n(s,t){const r=new Set,o=i=>r.add(i);s.forEach(o),t.forEach(o);const n=[];return r.forEach(i=>n.push(i)),n}class Rn{enter(t){const r=this.entered.length,o=n=>this.isNodeInDocument(n)&&(!n.contains||n.contains(t));return this.entered=$n(this.entered.filter(o),[t]),r===0&&this.entered.length>0}leave(t){const r=this.entered.length;return this.entered=An(this.entered.filter(this.isNodeInDocument),t),r>0&&this.entered.length===0}reset(){this.entered=[]}constructor(t){this.entered=[],this.isNodeInDocument=t}}class Mn{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(t=>{Object.defineProperty(this.item,t,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`),null}})})}loadDataTransfer(t){if(t){const r={};Object.keys(this.config.exposeProperties).forEach(o=>{const n=this.config.exposeProperties[o];n!=null&&(r[o]={value:n(t,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,r)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(t,r){return r===t.getSourceId()}endDrag(){}constructor(t){this.config=t,this.item={},this.initializeExposedProperties()}}const kt="__NATIVE_FILE__",Tt="__NATIVE_URL__",Ot="__NATIVE_TEXT__",Pt="__NATIVE_HTML__",ot=Object.freeze(Object.defineProperty({__proto__:null,FILE:kt,HTML:Pt,TEXT:Ot,URL:Tt},Symbol.toStringTag,{value:"Module"}));function ke(s,t,r){const o=t.reduce((n,i)=>n||s.getData(i),"");return o??r}const Me={[kt]:{exposeProperties:{files:s=>Array.prototype.slice.call(s.files),items:s=>s.items,dataTransfer:s=>s},matchesTypes:["Files"]},[Pt]:{exposeProperties:{html:(s,t)=>ke(s,t,""),dataTransfer:s=>s},matchesTypes:["Html","text/html"]},[Tt]:{exposeProperties:{urls:(s,t)=>ke(s,t,"").split(`
`),dataTransfer:s=>s},matchesTypes:["Url","text/uri-list"]},[Ot]:{exposeProperties:{text:(s,t)=>ke(s,t,""),dataTransfer:s=>s},matchesTypes:["Text","text/plain"]}};function Fn(s,t){const r=Me[s];if(!r)throw new Error(`native type ${s} has no configuration`);const o=new Mn(r);return o.loadDataTransfer(t),o}function Te(s){if(!s)return null;const t=Array.prototype.slice.call(s.types||[]);return Object.keys(Me).filter(r=>{const o=Me[r];return o?.matchesTypes?o.matchesTypes.some(n=>t.indexOf(n)>-1):!1})[0]||null}const Ln=It(()=>/firefox/i.test(navigator.userAgent)),Et=It(()=>!!window.safari);class it{interpolate(t){const{xs:r,ys:o,c1s:n,c2s:i,c3s:a}=this;let l=r.length-1;if(t===r[l])return o[l];let u=0,m=a.length-1,g;for(;u<=m;){g=Math.floor(.5*(u+m));const h=r[g];if(h<t)u=g+1;else if(h>t)m=g-1;else return o[g]}l=Math.max(0,m);const v=t-r[l],x=v*v;return o[l]+n[l]*v+i[l]*x+a[l]*v*x}constructor(t,r){const{length:o}=t,n=[];for(let h=0;h<o;h++)n.push(h);n.sort((h,C)=>t[h]<t[C]?-1:1);const i=[],a=[];let l,u;for(let h=0;h<o-1;h++)l=t[h+1]-t[h],u=r[h+1]-r[h],i.push(l),a.push(u/l);const m=[a[0]];for(let h=0;h<i.length-1;h++){const C=a[h],N=a[h+1];if(C*N<=0)m.push(0);else{l=i[h];const j=i[h+1],I=l+j;m.push(3*I/((I+j)/C+(I+l)/N))}}m.push(a[a.length-1]);const g=[],v=[];let x;for(let h=0;h<m.length-1;h++){x=a[h];const C=m[h],N=1/i[h],j=C+m[h+1]-x-x;g.push((x-C-j)*N),v.push(j*N*N)}this.xs=t,this.ys=r,this.c1s=m,this.c2s=g,this.c3s=v}}const Hn=1;function At(s){const t=s.nodeType===Hn?s:s.parentElement;if(!t)return null;const{top:r,left:o}=t.getBoundingClientRect();return{x:o,y:r}}function me(s){return{x:s.clientX,y:s.clientY}}function Bn(s){var t;return s.nodeName==="IMG"&&(Ln()||!(!((t=document.documentElement)===null||t===void 0)&&t.contains(s)))}function Un(s,t,r,o){let n=s?t.width:r,i=s?t.height:o;return Et()&&s&&(i/=window.devicePixelRatio,n/=window.devicePixelRatio),{dragPreviewWidth:n,dragPreviewHeight:i}}function zn(s,t,r,o,n){const i=Bn(t),l=At(i?s:t),u={x:r.x-l.x,y:r.y-l.y},{offsetWidth:m,offsetHeight:g}=s,{anchorX:v,anchorY:x}=o,{dragPreviewWidth:h,dragPreviewHeight:C}=Un(i,t,m,g),N=()=>{let O=new it([0,.5,1],[u.y,u.y/g*C,u.y+C-g]).interpolate(x);return Et()&&i&&(O+=(window.devicePixelRatio-1)*C),O},j=()=>new it([0,.5,1],[u.x,u.x/m*h,u.x+h-m]).interpolate(v),{offsetX:I,offsetY:S}=n,d=I===0||I,w=S===0||S;return{x:d?I:j(),y:w?S:N()}}class _n{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var t;return!((t=this.globalContext)===null||t===void 0)&&t.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var t;return((t=this.optionsArgs)===null||t===void 0?void 0:t.rootElement)||this.window}constructor(t,r){this.ownerDocument=null,this.globalContext=t,this.optionsArgs=r}}function Gn(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function at(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){Gn(s,n,r[n])})}return s}class Wn{profile(){var t,r;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((t=this.dragStartSourceIds)===null||t===void 0?void 0:t.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((r=this.dragOverTargetIds)===null||r===void 0?void 0:r.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const t=this.rootElement;if(t!==void 0){if(t.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");t.__isReactDndBackendSetUp=!0,this.addEventListeners(t)}}teardown(){const t=this.rootElement;if(t!==void 0&&(t.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var r;(r=this.window)===null||r===void 0||r.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(t,r,o){return this.sourcePreviewNodeOptions.set(t,o),this.sourcePreviewNodes.set(t,r),()=>{this.sourcePreviewNodes.delete(t),this.sourcePreviewNodeOptions.delete(t)}}connectDragSource(t,r,o){this.sourceNodes.set(t,r),this.sourceNodeOptions.set(t,o);const n=a=>this.handleDragStart(a,t),i=a=>this.handleSelectStart(a);return r.setAttribute("draggable","true"),r.addEventListener("dragstart",n),r.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(t),this.sourceNodeOptions.delete(t),r.removeEventListener("dragstart",n),r.removeEventListener("selectstart",i),r.setAttribute("draggable","false")}}connectDropTarget(t,r){const o=a=>this.handleDragEnter(a,t),n=a=>this.handleDragOver(a,t),i=a=>this.handleDrop(a,t);return r.addEventListener("dragenter",o),r.addEventListener("dragover",n),r.addEventListener("drop",i),()=>{r.removeEventListener("dragenter",o),r.removeEventListener("dragover",n),r.removeEventListener("drop",i)}}addEventListeners(t){t.addEventListener&&(t.addEventListener("dragstart",this.handleTopDragStart),t.addEventListener("dragstart",this.handleTopDragStartCapture,!0),t.addEventListener("dragend",this.handleTopDragEndCapture,!0),t.addEventListener("dragenter",this.handleTopDragEnter),t.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.addEventListener("dragover",this.handleTopDragOver),t.addEventListener("dragover",this.handleTopDragOverCapture,!0),t.addEventListener("drop",this.handleTopDrop),t.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(t){t.removeEventListener&&(t.removeEventListener("dragstart",this.handleTopDragStart),t.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),t.removeEventListener("dragend",this.handleTopDragEndCapture,!0),t.removeEventListener("dragenter",this.handleTopDragEnter),t.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.removeEventListener("dragover",this.handleTopDragOver),t.removeEventListener("dragover",this.handleTopDragOverCapture,!0),t.removeEventListener("drop",this.handleTopDrop),t.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourceNodeOptions.get(t);return at({dropEffect:this.altKeyPressed?"copy":"move"},r||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourcePreviewNodeOptions.get(t);return at({anchorX:.5,anchorY:.5,captureDraggingState:!1},r||{})}isDraggingNativeItem(){const t=this.monitor.getItemType();return Object.keys(ot).some(r=>ot[r]===t)}beginDragNativeItem(t,r){this.clearCurrentDragSourceNode(),this.currentNativeSource=Fn(t,r),this.currentNativeHandle=this.registry.addSource(t,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(t){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=t;const r=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var o;return(o=this.rootElement)===null||o===void 0?void 0:o.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},r)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var t;(t=this.window)===null||t===void 0||t.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(t,r){t.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(r))}handleDragEnter(t,r){this.dragEnterTargetIds.unshift(r)}handleDragOver(t,r){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(r)}handleDrop(t,r){this.dropTargetIds.unshift(r)}constructor(t,r,o){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=n=>{const i=this.sourceNodes.get(n);return i&&At(i)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=n=>!!(n&&this.document&&this.document.body&&this.document.body.contains(n)),this.endDragIfSourceWasRemovedFromDOM=()=>{const n=this.currentDragSourceNode;n==null||this.isNodeInDocument(n)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=n=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(n||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=n=>{if(n.defaultPrevented)return;const{dragStartSourceIds:i}=this;this.dragStartSourceIds=null;const a=me(n);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(i||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:a});const{dataTransfer:l}=n,u=Te(l);if(this.monitor.isDragging()){if(l&&typeof l.setDragImage=="function"){const g=this.monitor.getSourceId(),v=this.sourceNodes.get(g),x=this.sourcePreviewNodes.get(g)||v;if(x){const{anchorX:h,anchorY:C,offsetX:N,offsetY:j}=this.getCurrentSourcePreviewNodeOptions(),d=zn(v,x,a,{anchorX:h,anchorY:C},{offsetX:N,offsetY:j});l.setDragImage(x,d.x,d.y)}}try{l?.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(n.target);const{captureDraggingState:m}=this.getCurrentSourcePreviewNodeOptions();m?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(u)this.beginDragNativeItem(u);else{if(l&&!l.types&&(n.target&&!n.target.hasAttribute||!n.target.hasAttribute("draggable")))return;n.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=n=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(n.dataTransfer)}if(!this.enterLeaveCounter.enter(n.target)||this.monitor.isDragging())return;const{dataTransfer:l}=n,u=Te(l);u&&this.beginDragNativeItem(u,l)},this.handleTopDragEnter=n=>{const{dragEnterTargetIds:i}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=n.altKey,i.length>0&&this.actions.hover(i,{clientOffset:me(n)}),i.some(l=>this.monitor.canDropOnTarget(l))&&(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=n=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(n.dataTransfer)}},this.handleTopDragOver=n=>{const{dragOverTargetIds:i}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect="none");return}this.altKeyPressed=n.altKey,this.lastClientOffset=me(n),this.scheduleHover(i),(i||[]).some(l=>this.monitor.canDropOnTarget(l))?(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?n.preventDefault():(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=n=>{this.isDraggingNativeItem()&&n.preventDefault(),this.enterLeaveCounter.leave(n.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=n=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var i;n.preventDefault(),(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(n.dataTransfer)}else Te(n.dataTransfer)&&n.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=n=>{const{dropTargetIds:i}=this;this.dropTargetIds=[],this.actions.hover(i,{clientOffset:me(n)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=n=>{const i=n.target;typeof i.dragDrop=="function"&&(i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable||(n.preventDefault(),i.dragDrop()))},this.options=new _n(r,o),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.enterLeaveCounter=new Rn(this.isNodeInDocument)}}const qn=function(t,r,o){return new Wn(t,r,o)},Vn=({projectId:s,onCodeChange:t,initialComponents:r=[]})=>{const[o,n]=c.useState(r),[i,a]=c.useState(null),[l,u]=c.useState(!1),[m,g]=c.useState(!1),[v,x]=c.useState({width:1200,height:800}),[h,C]=c.useState(1),N=c.useRef(null),j=[{type:"container",name:"Container",icon:"📦",category:"Layout"},{type:"text",name:"Text",icon:"📝",category:"Content"},{type:"button",name:"Button",icon:"🔘",category:"Interactive"},{type:"input",name:"Input",icon:"📝",category:"Form"},{type:"image",name:"Image",icon:"🖼️",category:"Media"},{type:"card",name:"Card",icon:"🃏",category:"Layout"},{type:"header",name:"Header",icon:"📋",category:"Layout"},{type:"footer",name:"Footer",icon:"🦶",category:"Layout"},{type:"sidebar",name:"Sidebar",icon:"📑",category:"Layout"},{type:"navbar",name:"Navbar",icon:"🧭",category:"Navigation"},{type:"form",name:"Form",icon:"📋",category:"Form"},{type:"table",name:"Table",icon:"📊",category:"Data"},{type:"chart",name:"Chart",icon:"📈",category:"Data"},{type:"modal",name:"Modal",icon:"🪟",category:"Overlay"},{type:"dropdown",name:"Dropdown",icon:"📋",category:"Interactive"}],I=p=>({container:`<div className="container" style={${JSON.stringify(p.styles)}}>
  {children}
</div>`,text:`<p className="text" style={${JSON.stringify(p.styles)}}>
  ${p.content||"Text content"}
</p>`,button:`<button className="btn" style={${JSON.stringify(p.styles)}} onClick={${p.onClick||"() => {}"}}>
  ${p.content||"Button"}
</button>`,input:`<input 
  className="input" 
  type="${p.inputType||"text"}"
  placeholder="${p.placeholder||""}"
  style={${JSON.stringify(p.styles)}}
/>`,image:`<img 
  className="image" 
  src="${p.src||"/placeholder.jpg"}"
  alt="${p.alt||""}"
  style={${JSON.stringify(p.styles)}}
/>`,card:`<div className="card" style={${JSON.stringify(p.styles)}}>
  <div className="card-header">
    <h3>${p.title||"Card Title"}</h3>
  </div>
  <div className="card-body">
    <p>${p.content||"Card content"}</p>
  </div>
</div>`,header:`<header className="header" style={${JSON.stringify(p.styles)}}>
  <h1>${p.content||"Header"}</h1>
</header>`,footer:`<footer className="footer" style={${JSON.stringify(p.styles)}}>
  <p>${p.content||"Footer content"}</p>
</footer>`,sidebar:`<aside className="sidebar" style={${JSON.stringify(p.styles)}}>
  <nav>
    <ul>
      <li><a href="#">Menu Item 1</a></li>
      <li><a href="#">Menu Item 2</a></li>
    </ul>
  </nav>
</aside>`,navbar:`<nav className="navbar" style={${JSON.stringify(p.styles)}}>
  <div className="nav-brand">${p.brand||"Brand"}</div>
  <ul className="nav-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`,form:`<form className="form" style={${JSON.stringify(p.styles)}} onSubmit={${p.onSubmit||"() => {}"}}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" name="name" />
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" name="email" />
  </div>
  <button type="submit">Submit</button>
</form>`,table:`<table className="table" style={${JSON.stringify(p.styles)}}>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
  </tbody>
</table>`,chart:`<div className="chart" style={${JSON.stringify(p.styles)}}>
  <canvas id="chart-${p.id}"></canvas>
</div>`,modal:`<div className="modal" style={${JSON.stringify(p.styles)}}>
  <div className="modal-content">
    <span className="close" onClick={${p.onClose||"() => {}"}}>&times;</span>
    <h2>${p.title||"Modal Title"}</h2>
    <p>${p.content||"Modal content"}</p>
  </div>
</div>`,dropdown:`<div className="dropdown" style={${JSON.stringify(p.styles)}}>
  <button className="dropdown-toggle" onClick={${p.onToggle||"() => {}"}}>
    ${p.label||"Dropdown"}
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
</div>`})[p.type]||`<div>Unknown component: ${p.type}</div>`,S=()=>{const p=`import React, { useState, useEffect } from 'react';
import './App.css';`,T=`const App = () => {
  return (
    <div className="app">
      ${o.map(R=>I(R)).join(`

`)}
    </div>
  );
};

export default App;`;return`${p}

${T}`},d=(p,b)=>{const T=b.getDropResult();if(!T)return;const R={id:`component-${Date.now()}`,type:p.type,name:p.name,position:{x:T.x,y:T.y},size:{width:200,height:100},styles:{position:"absolute",left:`${T.x}px`,top:`${T.y}px`,width:"200px",height:"100px",border:"1px solid #ddd",padding:"10px",backgroundColor:"#fff"},content:p.name,properties:{}};n(A=>[...A,R])},w=p=>{a(p),u(!0)},y=(p,b)=>{if(!i)return;const T={...i,[p]:b,styles:{...i.styles,[p]:b}};n(R=>R.map(A=>A.id===i.id?T:A)),a(T)},O=()=>`
.app {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.text {
  margin: 0;
  font-family: Arial, sans-serif;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  background: #007bff;
  color: white;
}

.btn:hover {
  background: #0056b3;
}

.input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.image {
  max-width: 100%;
  height: auto;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header {
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer {
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: auto;
}

.sidebar {
  background: #f8f9fa;
  padding: 20px;
  min-height: 100vh;
}

.navbar {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background: #f8f9fa;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 150px;
}

.dropdown-menu li {
  padding: 10px;
}

.dropdown-menu li:hover {
  background: #f8f9fa;
}
`,k=()=>{const p={components:o,appCode:S(),cssCode:O(),metadata:{projectId:s,exportedAt:new Date().toISOString(),componentCount:o.length}},b=JSON.stringify(p,null,2),T=new Blob([b],{type:"application/json"}),R=URL.createObjectURL(T),A=document.createElement("a");A.href=R,A.download=`dreambuild-project-${s}.json`,A.click(),URL.revokeObjectURL(R)};return c.useEffect(()=>{t&&t({appCode:S(),cssCode:O(),components:o})},[o,t]),e.jsx(Qs,{backend:qn,children:e.jsxs("div",{className:"visual-editor",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("h2",{children:"🎨 Visual Editor"}),e.jsxs("div",{className:"editor-controls",children:[e.jsx("button",{className:"btn btn-secondary",onClick:()=>g(!m),children:m?"Edit":"Preview"}),e.jsx("button",{className:"btn btn-primary",onClick:k,children:"Export"})]})]}),e.jsxs("div",{className:"editor-layout",children:[e.jsxs("div",{className:"component-library",children:[e.jsx("h3",{children:"📚 Component Library"}),e.jsx("div",{className:"library-categories",children:["Layout","Content","Interactive","Form","Media","Data","Navigation","Overlay"].map(p=>e.jsxs("div",{className:"category",children:[e.jsx("h4",{children:p}),e.jsx("div",{className:"category-components",children:j.filter(b=>b.category===p).map(b=>e.jsx(Yn,{type:b.type,name:b.name,icon:b.icon},b.type))})]},p))})]}),e.jsxs("div",{className:"canvas-container",children:[e.jsxs("div",{className:"canvas-toolbar",children:[e.jsxs("div",{className:"canvas-controls",children:[e.jsx("button",{className:"btn btn-sm",onClick:()=>C(h*.8),children:"Zoom Out"}),e.jsxs("span",{className:"zoom-level",children:[Math.round(h*100),"%"]}),e.jsx("button",{className:"btn btn-sm",onClick:()=>C(h*1.2),children:"Zoom In"})]}),e.jsx("div",{className:"canvas-size",children:e.jsxs("select",{value:`${v.width}x${v.height}`,onChange:p=>{const[b,T]=p.target.value.split("x").map(Number);x({width:b,height:T})},children:[e.jsx("option",{value:"1200x800",children:"Desktop (1200x800)"}),e.jsx("option",{value:"768x1024",children:"Tablet (768x1024)"}),e.jsx("option",{value:"375x667",children:"Mobile (375x667)"})]})})]}),e.jsx("div",{className:"canvas",ref:N,style:{width:v.width*h,height:v.height*h,transform:`scale(${h})`,transformOrigin:"top left"},children:e.jsx(Jn,{onDrop:d,children:o.map(p=>e.jsx(Xn,{component:p,onSelect:w,isSelected:i?.id===p.id},p.id))})})]}),l&&i&&e.jsxs("div",{className:"properties-panel",children:[e.jsx("h3",{children:"⚙️ Properties"}),e.jsxs("div",{className:"property-groups",children:[e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Content"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Text Content"}),e.jsx("input",{type:"text",value:i.content||"",onChange:p=>y("content",p.target.value)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Position"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"X Position"}),e.jsx("input",{type:"number",value:i.position?.x||0,onChange:p=>y("left",`${p.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Y Position"}),e.jsx("input",{type:"number",value:i.position?.y||0,onChange:p=>y("top",`${p.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Size"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Width"}),e.jsx("input",{type:"number",value:i.size?.width||200,onChange:p=>y("width",`${p.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Height"}),e.jsx("input",{type:"number",value:i.size?.height||100,onChange:p=>y("height",`${p.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Style"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Background Color"}),e.jsx("input",{type:"color",value:i.styles?.backgroundColor||"#ffffff",onChange:p=>y("backgroundColor",p.target.value)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Border Color"}),e.jsx("input",{type:"color",value:i.styles?.borderColor||"#dddddd",onChange:p=>y("borderColor",p.target.value)})]})]})]})]})]}),e.jsx("style",{jsx:!0,children:`
          .visual-editor {
            height: 100vh;
            display: flex;
            flex-direction: column;
            background: #f5f5f5;
          }

          .editor-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: white;
            border-bottom: 1px solid #ddd;
          }

          .editor-controls {
            display: flex;
            gap: 10px;
          }

          .editor-layout {
            display: flex;
            flex: 1;
            overflow: hidden;
          }

          .component-library {
            width: 250px;
            background: white;
            border-right: 1px solid #ddd;
            overflow-y: auto;
            padding: 20px;
          }

          .library-categories {
            margin-top: 15px;
          }

          .category {
            margin-bottom: 20px;
          }

          .category h4 {
            margin: 0 0 10px 0;
            color: #666;
            font-size: 14px;
            text-transform: uppercase;
          }

          .category-components {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .canvas-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: #f8f9fa;
          }

          .canvas-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background: white;
            border-bottom: 1px solid #ddd;
          }

          .canvas-controls {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .zoom-level {
            font-size: 12px;
            color: #666;
            min-width: 40px;
            text-align: center;
          }

          .canvas {
            flex: 1;
            position: relative;
            background: white;
            margin: 20px;
            border: 1px solid #ddd;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
          }

          .properties-panel {
            width: 300px;
            background: white;
            border-left: 1px solid #ddd;
            overflow-y: auto;
            padding: 20px;
          }

          .property-groups {
            margin-top: 15px;
          }

          .property-group {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
          }

          .property-group:last-child {
            border-bottom: none;
          }

          .property-group h4 {
            margin: 0 0 10px 0;
            color: #333;
            font-size: 14px;
          }

          .property {
            margin-bottom: 10px;
          }

          .property label {
            display: block;
            margin-bottom: 5px;
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
          }

          .property input,
          .property select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
          }

          .btn {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
          }

          .btn-primary {
            background: #007bff;
            color: white;
          }

          .btn-secondary {
            background: #6c757d;
            color: white;
          }

          .btn-sm {
            padding: 4px 8px;
            font-size: 12px;
          }

          .btn:hover {
            opacity: 0.8;
          }
        `})]})})},Yn=({type:s,name:t,icon:r})=>{const[{isDragging:o},n]=Sn({type:"component",item:{type:s,name:t},collect:i=>({isDragging:i.isDragging()})});return e.jsxs("div",{ref:n,className:`draggable-component ${o?"dragging":""}`,children:[e.jsx("span",{className:"component-icon",children:r}),e.jsx("span",{className:"component-name",children:t})]})},Jn=({children:s,onDrop:t})=>{const[{isOver:r},o]=En({accept:"component",drop:(n,i)=>{const a=i.getClientOffset(),l=i.getDropResult()?.getBoundingClientRect();a&&l&&t(n,{x:a.x-l.left,y:a.y-l.top})},collect:n=>({isOver:n.isOver()})});return e.jsx("div",{ref:o,className:`droppable-canvas ${r?"drag-over":""}`,children:s})},Xn=({component:s,onSelect:t,isSelected:r})=>{const o=n=>{n.stopPropagation(),t(s)};return e.jsx("div",{className:`visual-component ${r?"selected":""}`,style:s.styles,onClick:o,children:e.jsxs("div",{className:"component-content",children:[s.type==="text"&&(s.content||"Text"),s.type==="button"&&(s.content||"Button"),s.type==="input"&&e.jsx("input",{placeholder:s.placeholder||"Input"}),s.type==="image"&&e.jsx("div",{className:"image-placeholder",children:"🖼️ Image"}),s.type==="card"&&e.jsxs("div",{children:[e.jsx("h3",{children:s.title||"Card Title"}),e.jsx("p",{children:s.content||"Card content"})]}),!["text","button","input","image","card"].includes(s.type)&&e.jsx("div",{className:"component-placeholder",children:s.name})]})})},Kn=({projectId:s,projectData:t,onDeploy:r})=>{const[o,n]=c.useState("vercel"),[i,a]=c.useState(!1),[l,u]=c.useState(null),m=[{id:"vercel",name:"Vercel",icon:"▲",description:"Fast, global deployment"},{id:"netlify",name:"Netlify",icon:"🌐",description:"JAMstack deployment"},{id:"aws",name:"AWS Amplify",icon:"☁️",description:"Full-stack deployment"},{id:"firebase",name:"Firebase",icon:"🔥",description:"Google hosting"},{id:"github",name:"GitHub Pages",icon:"🐙",description:"Free static hosting"}],g=async()=>{a(!0),u("Deploying...");try{await new Promise(x=>setTimeout(x,3e3));const v={success:!0,provider:o,url:`https://${s}.${o}.com`,deployedAt:new Date().toISOString()};u("Deployed successfully!"),r&&r(v)}catch{u("Deployment failed")}finally{a(!1)}};return e.jsxs("div",{className:"deployment-panel",children:[e.jsx("h3",{children:"🚀 Deploy Your App"}),e.jsxs("div",{className:"provider-selection",children:[e.jsx("h4",{children:"Choose Hosting Provider"}),e.jsx("div",{className:"providers-grid",children:m.map(v=>e.jsxs("div",{className:`provider-card ${o===v.id?"selected":""}`,onClick:()=>n(v.id),children:[e.jsx("div",{className:"provider-icon",children:v.icon}),e.jsx("div",{className:"provider-name",children:v.name}),e.jsx("div",{className:"provider-description",children:v.description})]},v.id))})]}),e.jsx("div",{className:"deployment-actions",children:e.jsx("button",{className:"btn btn-primary btn-lg",onClick:g,disabled:i,children:i?"Deploying...":"Deploy Now"})}),l&&e.jsx("div",{className:"deployment-status",children:e.jsx("div",{className:`status-message ${l.includes("success")?"success":"error"}`,children:l})}),e.jsx("style",{jsx:!0,children:`
        .deployment-panel {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          margin: 20px 0;
        }

        .provider-selection {
          margin-bottom: 20px;
        }

        .providers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .provider-card {
          padding: 15px;
          border: 2px solid #eee;
          border-radius: 8px;
          cursor: pointer;
          text-align: center;
          transition: all 0.3s ease;
        }

        .provider-card:hover {
          border-color: #007bff;
        }

        .provider-card.selected {
          border-color: #007bff;
          background: #f8f9ff;
        }

        .provider-icon {
          font-size: 24px;
          margin-bottom: 8px;
        }

        .provider-name {
          font-weight: bold;
          margin-bottom: 4px;
        }

        .provider-description {
          font-size: 12px;
          color: #666;
        }

        .deployment-actions {
          text-align: center;
          margin: 20px 0;
        }

        .deployment-status {
          margin-top: 15px;
          text-align: center;
        }

        .status-message {
          padding: 10px;
          border-radius: 4px;
          font-weight: bold;
        }

        .status-message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .status-message.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background: #0056b3;
        }

        .btn-primary:disabled {
          background: #6c757d;
          cursor: not-allowed;
        }

        .btn-lg {
          padding: 15px 30px;
          font-size: 18px;
        }
      `})]})},Zn=({projectId:s,onMemoryUpdate:t})=>{const[r,o]=c.useState(null),[n,i]=c.useState([]),[a,l]=c.useState(""),[u,m]=c.useState([]),[g,v]=c.useState(!1),[x,h]=c.useState(null);c.useEffect(()=>{s&&(C(),N())},[s]);const C=async()=>{try{v(!0);const d=await ie.loadConversationMemory(s);if(o(d),d){const w=await ie.getConversationHistory(s);i(w)}}catch(d){console.error("Failed to load memory:",d)}finally{v(!1)}},N=async()=>{try{const d=await ie.getStorageStats();h(d)}catch(d){console.error("Failed to load stats:",d)}},j=async()=>{if(a.trim())try{v(!0);const d=await ie.searchConversationMemory(s,a);m(d)}catch(d){console.error("Failed to search memory:",d)}finally{v(!1)}},I=async()=>{if(window.confirm("Are you sure you want to clear all conversation memory?"))try{await ie.clearConversationMemory(s),o(null),i([]),m([]),t&&t()}catch(d){console.error("Failed to clear memory:",d)}},S=()=>{if(!r)return;const d=JSON.stringify(r,null,2),w=new Blob([d],{type:"application/json"}),y=URL.createObjectURL(w),O=document.createElement("a");O.href=y,O.download=`dreambuild-memory-${s}.json`,O.click(),URL.revokeObjectURL(y)};return g?e.jsx("div",{className:"memory-manager",children:e.jsx("div",{className:"loading",children:"Loading memory..."})}):e.jsxs("div",{className:"memory-manager",children:[e.jsxs("div",{className:"memory-header",children:[e.jsx("h3",{children:"🧠 Conversation Memory"}),e.jsxs("div",{className:"memory-actions",children:[e.jsx("button",{onClick:C,className:"btn btn-secondary",children:"Refresh"}),e.jsx("button",{onClick:S,className:"btn btn-secondary",children:"Export"}),e.jsx("button",{onClick:I,className:"btn btn-danger",children:"Clear"})]})]}),x&&e.jsxs("div",{className:"memory-stats",children:[e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Projects:"}),e.jsx("span",{className:"stat-value",children:x.totalProjects})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Files:"}),e.jsx("span",{className:"stat-value",children:x.totalFiles})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Size:"}),e.jsxs("span",{className:"stat-value",children:[x.totalSizeMB," MB"]})]})]}),e.jsxs("div",{className:"memory-search",children:[e.jsx("input",{type:"text",placeholder:"Search conversation memory...",value:a,onChange:d=>l(d.target.value),onKeyPress:d=>d.key==="Enter"&&j()}),e.jsx("button",{onClick:j,className:"btn btn-primary",children:"Search"})]}),u.length>0&&e.jsxs("div",{className:"search-results",children:[e.jsx("h4",{children:"Search Results"}),u.map((d,w)=>e.jsxs("div",{className:"search-result",children:[e.jsx("div",{className:"result-type",children:d.type}),e.jsx("div",{className:"result-text",children:d.text}),e.jsx("div",{className:"result-timestamp",children:d.timestamp})]},w))]}),n.prompts&&n.prompts.length>0&&e.jsxs("div",{className:"conversation-history",children:[e.jsx("h4",{children:"Conversation History"}),e.jsxs("div",{className:"history-stats",children:[e.jsxs("span",{children:["Prompts: ",n.totalPrompts]}),e.jsxs("span",{children:["Responses: ",n.totalResponses]})]}),e.jsx("div",{className:"history-list",children:n.prompts.map((d,w)=>e.jsxs("div",{className:"history-item",children:[e.jsxs("div",{className:"history-prompt",children:[e.jsx("strong",{children:"Prompt:"})," ",d.text]}),n.responses[w]&&e.jsxs("div",{className:"history-response",children:[e.jsx("strong",{children:"Response:"})," ",n.responses[w].text]}),e.jsx("div",{className:"history-timestamp",children:new Date(d.timestamp).toLocaleString()})]},d.id))})]}),r&&e.jsxs("div",{className:"memory-details",children:[e.jsx("h4",{children:"Memory Details"}),e.jsxs("div",{className:"memory-info",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Project ID:"})," ",r.projectId]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Created:"})," ",new Date(r.createdAt).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Last Updated:"})," ",new Date(r.lastUpdated).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Memory Size:"})," ",JSON.stringify(r).length," bytes"]})]})]}),e.jsx("style",{jsx:!0,children:`
        .memory-manager {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          margin: 20px 0;
        }

        .memory-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .memory-actions {
          display: flex;
          gap: 10px;
        }

        .memory-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          padding: 10px;
          background: #f5f5f5;
          border-radius: 4px;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-label {
          font-size: 12px;
          color: #666;
        }

        .stat-value {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        .memory-search {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .memory-search input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .search-results {
          margin-bottom: 20px;
        }

        .search-result {
          padding: 10px;
          border: 1px solid #eee;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .result-type {
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
        }

        .result-text {
          margin: 5px 0;
        }

        .result-timestamp {
          font-size: 12px;
          color: #999;
        }

        .conversation-history {
          margin-bottom: 20px;
        }

        .history-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #666;
        }

        .history-item {
          padding: 15px;
          border: 1px solid #eee;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .history-prompt {
          margin-bottom: 10px;
        }

        .history-response {
          margin-bottom: 10px;
          color: #666;
        }

        .history-timestamp {
          font-size: 12px;
          color: #999;
        }

        .memory-details {
          padding: 15px;
          background: #f9f9f9;
          border-radius: 4px;
        }

        .memory-info p {
          margin: 5px 0;
        }

        .btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-danger {
          background: #dc3545;
          color: white;
        }

        .btn:hover {
          opacity: 0.8;
        }

        .loading {
          text-align: center;
          padding: 20px;
          color: #666;
        }
      `})]})},po=({projectId:s,initialFiles:t={}})=>{const[r,o]=c.useState("code"),[n,i]=c.useState(t),[a,l]=c.useState(null),[u,m]=c.useState(!1),[g,v]=c.useState(!1),[x,h]=c.useState(null),C=[{id:"code",name:"Code Editor",icon:"💻"},{id:"visual",name:"Visual Editor",icon:"🎨"},{id:"collaboration",name:"Collaboration",icon:"🤝"},{id:"deployment",name:"Deployment",icon:"🚀"},{id:"memory",name:"Memory",icon:"🧠"}],N=(w,y)=>{i(O=>({...O,[w]:y}))},j=w=>{w.appCode&&N("src/App.jsx",w.appCode),w.cssCode&&N("src/App.css",w.cssCode)},I=w=>{h(w),console.log("Deployment result:",w)},S=w=>{i(y=>({...y,...w})),console.log("Version restored:",w)},d=()=>{switch(r){case"code":return e.jsxs("div",{className:"code-editor-tab",children:[e.jsxs("div",{className:"file-explorer",children:[e.jsx("h3",{children:"📁 Files"}),e.jsx("div",{className:"file-list",children:Object.keys(n).map(w=>e.jsxs("div",{className:`file-item ${a===w?"selected":""}`,onClick:()=>l(w),children:[e.jsx("span",{className:"file-icon",children:"📄"}),e.jsx("span",{className:"file-name",children:w})]},w))})]}),e.jsx("div",{className:"code-editor",children:a&&e.jsxs("div",{className:"editor-container",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("span",{className:"file-name",children:a}),e.jsxs("div",{className:"editor-actions",children:[e.jsx("button",{className:"btn btn-sm",children:"Save"}),e.jsx("button",{className:"btn btn-sm",children:"Format"})]})]}),e.jsx("textarea",{className:"code-textarea",value:n[a]||"",onChange:w=>N(a,w.target.value),placeholder:"Start coding..."})]})})]});case"visual":return e.jsx("div",{className:"visual-editor-tab",children:e.jsx(Vn,{projectId:s,onCodeChange:j,initialComponents:[]})});case"collaboration":return e.jsxs("div",{className:"collaboration-tab",children:[e.jsxs("div",{className:"collaboration-header",children:[e.jsx("h3",{children:"🤝 Real-time Collaboration"}),e.jsxs("button",{className:`btn ${u?"btn-danger":"btn-primary"}`,onClick:()=>m(!u),children:[u?"Disable":"Enable"," Collaboration"]})]}),u?e.jsx(Mr,{projectId:s,fileId:a,onFileChange:N,onVersionRestore:S}):e.jsxs("div",{className:"collaboration-disabled",children:[e.jsx("p",{children:"Enable collaboration to work with team members in real-time"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Multi-user co-editing"}),e.jsx("li",{children:"Real-time comments"}),e.jsx("li",{children:"Version history"}),e.jsx("li",{children:"User presence"})]})]})]});case"deployment":return e.jsxs("div",{className:"deployment-tab",children:[e.jsx(Kn,{projectId:s,projectData:{files:n},onDeploy:I}),x&&e.jsxs("div",{className:"deployment-result",children:[e.jsx("h4",{children:"Deployment Result"}),e.jsxs("div",{className:"result-details",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Provider:"})," ",x.provider]}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ",e.jsx("a",{href:x.url,target:"_blank",rel:"noopener noreferrer",children:x.url})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",x.status]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deployed:"})," ",new Date(x.deployedAt).toLocaleString()]})]})]})]});case"memory":return e.jsx("div",{className:"memory-tab",children:e.jsx(Zn,{projectId:s,onMemoryUpdate:()=>console.log("Memory updated")})});default:return e.jsx("div",{children:"Select a tab to get started"})}};return e.jsxs("div",{className:"integrated-workspace",children:[e.jsxs("div",{className:"workspace-header",children:[e.jsx("h2",{children:"🚀 DreamBuild Advanced Workspace"}),e.jsxs("div",{className:"workspace-status",children:[e.jsx("span",{className:"status-indicator",children:"●"}),e.jsxs("span",{children:["Project: ",s]})]})]}),e.jsx("div",{className:"workspace-tabs",children:C.map(w=>e.jsxs("button",{className:`tab-button ${r===w.id?"active":""}`,onClick:()=>o(w.id),children:[e.jsx("span",{className:"tab-icon",children:w.icon}),e.jsx("span",{className:"tab-name",children:w.name})]},w.id))}),e.jsx("div",{className:"workspace-content",children:d()}),e.jsx("style",{jsx:!0,children:`
        .integrated-workspace {
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f5f5f5;
        }

        .workspace-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background: white;
          border-bottom: 1px solid #ddd;
        }

        .workspace-status {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
        }

        .status-indicator {
          color: #28a745;
        }

        .workspace-tabs {
          display: flex;
          background: white;
          border-bottom: 1px solid #ddd;
          overflow-x: auto;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border: none;
          background: transparent;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
        }

        .tab-button:hover {
          background: #f8f9fa;
        }

        .tab-button.active {
          border-bottom-color: #007bff;
          background: #f8f9ff;
        }

        .tab-icon {
          font-size: 16px;
        }

        .tab-name {
          font-size: 14px;
          font-weight: 500;
        }

        .workspace-content {
          flex: 1;
          overflow: hidden;
        }

        .code-editor-tab {
          display: flex;
          height: 100%;
        }

        .file-explorer {
          width: 250px;
          background: white;
          border-right: 1px solid #ddd;
          padding: 20px;
          overflow-y: auto;
        }

        .file-list {
          margin-top: 15px;
        }

        .file-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          cursor: pointer;
          border-radius: 4px;
          transition: background 0.2s ease;
        }

        .file-item:hover {
          background: #f8f9fa;
        }

        .file-item.selected {
          background: #e3f2fd;
          color: #1976d2;
        }

        .file-icon {
          font-size: 14px;
        }

        .file-name {
          font-size: 14px;
        }

        .code-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .editor-container {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 15px;
          background: #f8f9fa;
          border-bottom: 1px solid #ddd;
        }

        .editor-actions {
          display: flex;
          gap: 8px;
        }

        .code-textarea {
          flex: 1;
          padding: 20px;
          border: none;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 14px;
          line-height: 1.5;
          resize: none;
          outline: none;
        }

        .collaboration-tab,
        .deployment-tab,
        .memory-tab {
          padding: 20px;
          height: 100%;
          overflow-y: auto;
        }

        .collaboration-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .collaboration-disabled {
          text-align: center;
          padding: 40px;
          color: #666;
        }

        .collaboration-disabled ul {
          text-align: left;
          max-width: 300px;
          margin: 20px auto;
        }

        .deployment-result {
          margin-top: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .result-details p {
          margin: 5px 0;
        }

        .result-details a {
          color: #007bff;
          text-decoration: none;
        }

        .btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-danger {
          background: #dc3545;
          color: white;
        }

        .btn-sm {
          padding: 4px 8px;
          font-size: 12px;
        }

        .btn:hover {
          opacity: 0.8;
        }
      `})]})},mo=({onTemplateSelect:s,isVisible:t,onClose:r})=>{const{currentProject:o,updateFile:n,switchFile:i}=re(),[a,l]=c.useState(""),[u,m]=c.useState("all"),[g,v]=c.useState(!1),x=[{id:"all",name:"All Templates",icon:he,color:"text-purple-500"},{id:"web-apps",name:"Web Apps",icon:Oe,color:"text-blue-500"},{id:"mobile-apps",name:"Mobile Apps",icon:dt,color:"text-green-500"},{id:"games",name:"Games",icon:Dr,color:"text-orange-500"},{id:"tools",name:"Tools",icon:ce,color:"text-gray-500"}],[h,C]=c.useState([]),[N,j]=c.useState([]),[I,S]=c.useState(!0);c.useEffect(()=>{t&&(async()=>{try{S(!0);const[p,b]=await Promise.all([ae.getAllTemplates(),ae.getPopularTemplates()]);C(p),j(b)}catch(p){console.error("Failed to load templates:",p),G.error("Failed to load templates")}finally{S(!1)}})()},[t]);const d=h.filter(k=>{const p=k.name.toLowerCase().includes(a.toLowerCase())||k.description.toLowerCase().includes(a.toLowerCase()),b=u==="all"||k.category===u;return p&&b}),w=async k=>{v(!0);try{console.log("🎯 Generating template:",k.id);const p=await ae.generateTemplateById(k.id);Object.entries(p).forEach(([T,R])=>{n(T,R)});const b=Object.keys(p)[0];b&&i(b),G.success(`Generated ${k.name} successfully!`),s&&s(k,p),r&&r()}catch(p){console.error("❌ Template generation failed:",p),G.error(`Failed to generate ${k.name}`)}finally{v(!1)}},y=k=>{const p=x.find(b=>b.id===k);return p?p.icon:ce},O=k=>{const p=x.find(b=>b.id===k);return p?p.color:"text-gray-500"};return t?e.jsx(q,{children:e.jsx(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",onClick:r,children:e.jsxs(H.div,{initial:{scale:.95},animate:{scale:1},exit:{scale:.95},className:"bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:k=>k.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:e.jsx(Nr,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-foreground",children:"Template Gallery"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Choose a template to get started"})]})]}),e.jsx("button",{onClick:r,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Close",children:e.jsx("span",{className:"text-xl text-muted-foreground",children:"×"})})]}),e.jsxs("div",{className:"p-6 border-b border-border",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx(Ve,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search templates...",value:a,onChange:k=>l(k.target.value),className:"w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20"})]}),e.jsxs("button",{className:"px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:bg-muted/80 transition-colors flex items-center gap-2",children:[e.jsx(Sr,{className:"h-4 w-4"}),"Filters"]})]}),e.jsx("div",{className:"flex gap-2 overflow-x-auto",children:x.map(k=>{const p=k.icon;return e.jsxs("button",{onClick:()=>m(k.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${u===k.id?"bg-blue-500 text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[e.jsx(p,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:k.name})]},k.id)})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[u==="all"&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(ht,{className:"h-5 w-5 text-yellow-500"}),e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Popular Templates"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:I?Array.from({length:3}).map((k,p)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},p)):N.map(k=>{const p=y(k.category),b=O(k.category);return e.jsxs(H.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>w(k),disabled:g,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${b}`,children:e.jsx(p,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:k.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[k.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:k.description})]},k.id)})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:u==="all"?"All Templates":x.find(k=>k.id===u)?.name}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:[d.length," template",d.length!==1?"s":""]})]}),d.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4",children:e.jsx(Ve,{className:"h-8 w-8 text-muted-foreground"})}),e.jsx("h4",{className:"text-lg font-medium text-foreground mb-2",children:"No templates found"}),e.jsx("p",{className:"text-muted-foreground",children:"Try adjusting your search or filters"})]}):I?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Array.from({length:6}).map((k,p)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},p))}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:d.map(k=>{const p=y(k.category),b=O(k.category);return e.jsxs(H.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>w(k),disabled:g,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${b}`,children:e.jsx(p,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:k.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[k.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:k.description})]},k.id)})})]})]}),e.jsx("div",{className:"p-6 border-t border-border bg-muted/30",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"Need something custom? Use the AI prompt to generate unique applications."}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"Close"})]})})]})})}):null},ho=()=>{const[s,t]=c.useState([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"Terminal is fully functional and ready to use",timestamp:new Date},{type:"output",content:"",timestamp:new Date}]),[r,o]=c.useState(""),[n,i]=c.useState(!1),[a,l]=c.useState("~/dreambuild"),u=c.useRef(null),m=c.useRef(null);c.useEffect(()=>{u.current&&(u.current.scrollTop=u.current.scrollHeight)},[s]),c.useEffect(()=>{m.current&&m.current.focus()},[]);const g=async j=>{if(!j.trim())return;const I={type:"input",content:`$ ${j}`,timestamp:new Date};t(S=>[...S,I]),i(!0);try{await new Promise(y=>setTimeout(y,500));let S="";const d=j.trim().toLowerCase();switch(d){case"help":S=`Available commands:
  help          - Show this help message
  clear         - Clear terminal screen
  ls            - List directory contents
  pwd           - Print working directory
  cd <dir>      - Change directory
  mkdir <dir>   - Create directory
  touch <file>  - Create file
  cat <file>    - Display file contents
  echo <text>   - Display text
  npm <cmd>     - Run npm commands
  git <cmd>     - Run git commands
  build         - Build the project
  deploy        - Deploy the project
  status        - Show project status`;break;case"clear":t([]),i(!1);return;case"ls":S=`total 8
drwxr-xr-x  3 user  staff   96 Dec 15 10:30 .
drwxr-xr-x  5 user  staff  160 Dec 15 10:25 ..
-rw-r--r--  1 user  staff  245 Dec 15 10:30 package.json
-rw-r--r--  1 user  staff  156 Dec 15 10:30 README.md
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 src
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 dist`;break;case"pwd":S=a;break;case"status":S=`Project Status:
  Name: DreamBuild AI Platform
  Version: 1.0.0
  Status: Running
  Port: 3000
  Environment: Development
  Last Build: 2 minutes ago
  Files: 15 modified`;break;case"build":S=`Building project...
  ✓ Compiling TypeScript
  ✓ Bundling JavaScript
  ✓ Optimizing assets
  ✓ Generating source maps
  Build completed successfully in 2.3s`;break;case"deploy":S=`Deploying to Firebase...
  ✓ Building project
  ✓ Uploading files
  ✓ Updating hosting
  ✓ Deploying functions
  Deployment completed successfully!
  URL: https://dreambuild-2024-app.web.app`;break;default:if(d.startsWith("cd ")){const y=d.substring(3);y===".."?(l(O=>O.split("/").slice(0,-1).join("/")||"~"),S=`Changed directory to ${a}`):y==="~"||y==="home"?(l("~/dreambuild"),S="Changed directory to ~/dreambuild"):(l(O=>`${O}/${y}`),S=`Changed directory to ${a}/${y}`)}else d.startsWith("mkdir ")?S=`Created directory: ${d.substring(6)}`:d.startsWith("touch ")?S=`Created file: ${d.substring(6)}`:d.startsWith("cat ")?S=`Contents of ${d.substring(4)}:
// This is a sample file
`:d.startsWith("echo ")?S=d.substring(5):d.startsWith("npm ")?S=`Running: npm ${d.substring(4)}
  ✓ Dependencies installed
  ✓ Script executed successfully`:d.startsWith("git ")?S=`Running: git ${d.substring(4)}
  ✓ Command executed successfully`:S=`Command not found: ${j}
Type "help" for available commands`}const w={type:"output",content:S,timestamp:new Date};t(y=>[...y,w])}catch(S){const d={type:"error",content:`Error: ${S.message}`,timestamp:new Date};t(w=>[...w,d])}finally{i(!1);const S={type:"prompt",content:`${a} $ `,timestamp:new Date};t(d=>[...d,S])}},v=j=>{j.preventDefault(),r.trim()&&!n&&(g(r),o(""))},x=j=>{j.key==="l"&&j.ctrlKey&&(j.preventDefault(),t([]))},h=()=>{t([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"",timestamp:new Date}])},C=()=>{const j=s.map(I=>I.content).join(`
`);navigator.clipboard.writeText(j),$.success("Terminal history copied to clipboard")},N=()=>{const j=s.map(w=>w.content).join(`
`),I=new Blob([j],{type:"text/plain"}),S=URL.createObjectURL(I),d=document.createElement("a");d.href=S,d.download="terminal-history.txt",d.click(),URL.revokeObjectURL(S),$.success("Terminal history downloaded")};return console.log("🖥️ Terminal component rendering"),e.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-gray-900 text-green-400 font-mono",children:[e.jsx("div",{className:"absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs z-50",children:"TERMINAL ACTIVE"}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Cr,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:"DreamBuild Terminal"}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:h,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Clear Terminal",children:e.jsx(lt,{className:"h-4 w-4"})}),e.jsx("button",{onClick:C,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Copy History",children:e.jsx(de,{className:"h-4 w-4"})}),e.jsx("button",{onClick:N,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Download History",children:e.jsx(fe,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{ref:u,className:"flex-1 overflow-y-auto p-4 space-y-1",style:{minHeight:"400px"},children:[s.map((j,I)=>e.jsx("div",{className:`${j.type==="input"?"text-blue-400":j.type==="error"?"text-red-400":j.type==="prompt"?"text-green-400":"text-gray-300"} whitespace-pre-wrap`,children:j.content},I)),n&&e.jsx("div",{className:"text-yellow-400 animate-pulse",children:e.jsx("span",{className:"inline-block w-2 h-4 bg-yellow-400 animate-pulse"})})]}),e.jsxs("form",{onSubmit:v,className:"flex items-center px-4 py-2 bg-gray-800 border-t border-gray-700",children:[e.jsxs("span",{className:"text-green-400 mr-2",children:[a," $"]}),e.jsx("input",{ref:m,type:"text",value:r,onChange:j=>o(j.target.value),onKeyDown:x,className:"flex-1 bg-transparent text-green-400 outline-none",placeholder:"Enter command...",disabled:n}),n&&e.jsx("div",{className:"ml-2",children:e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-green-400"})})]})]})},go=({children:s,direction:t="horizontal",className:r=""})=>e.jsx("div",{className:`resizable-panel-group flex ${t} h-full ${r}`,children:s}),fo=({children:s,defaultSize:t=50,minSize:r=10,maxSize:o=90,className:n=""})=>e.jsx("div",{className:`resizable-panel ${n}`,style:{flexBasis:`${t}%`,minWidth:`${r}%`,maxWidth:`${o}%`},children:s}),xo=({className:s="",onResize:t,children:r,handleIndex:o=0})=>{const[n,i]=c.useState(!1),a=c.useRef(null),l=g=>{i(!0),g.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",console.log("Handle clicked:",o)},u=c.useCallback(g=>{if(!n)return;const v=a.current?.parentElement;if(!v)return;const x=v.getBoundingClientRect(),C=(g.clientX-x.left)/x.width*100,j=Array.from(v.children).filter(I=>I.classList.contains("resizable-panel"));if(console.log("Total panels found:",j.length,"Handle index:",o),j.length>=2){let I,S;if(o===0?(I=j[0],S=j[1],console.log("Resizing File Manager and Code Editor")):o===1&&(I=j[1],S=j[2],console.log("Resizing Code Editor and AI Assistant")),I&&S){const d=Math.max(15,Math.min(70,C)),w=Math.max(15,Math.min(70,100-d));console.log("Setting sizes:",{leftSize:d,rightSize:w,percentage:C}),I.style.flexBasis=`${d}%`,S.style.flexBasis=`${w}%`,I.style.border="3px solid red",S.style.border="3px solid blue",setTimeout(()=>{I.style.border="",S.style.border=""},300),t&&t({leftSize:d,rightSize:w})}}},[n,t,o]),m=c.useCallback(()=>{i(!1),document.body.style.cursor="",document.body.style.userSelect=""},[]);return c.useEffect(()=>{if(n)return document.addEventListener("mousemove",u),document.addEventListener("mouseup",m),()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",m)}},[n,u,m]),e.jsx("div",{ref:a,className:`resizable-handle w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group flex items-center justify-center ${n?"bg-primary/70":""} ${s}`,onMouseDown:l,children:r||e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/70 transition-colors"})})};export{co as A,ao as C,io as F,po as I,lo as P,go as R,ho as T,fo as a,xo as b,uo as c,mo as d};
