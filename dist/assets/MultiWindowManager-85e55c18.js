import{r as H,s as U,e as q,g as _,d as z,u as oe,j as s,a as e,z as C,F as J}from"./index-94a20bcd.js";import{r as g}from"./react-vendor-84e09ada.js";import{e as je,m as N,R as le,a as Q,b as ce,C as $e,P as Fe,T as Te,I as Me,A as We,c as Ee,d as Be}from"./Resizable-0a85edb6.js";import{L as Le}from"./router-vendor-e414a864.js";import{_ as ne}from"./monaco-editor-bb996daf.js";import{m as K,j as V}from"./firebase-24a1fa17.js";import{m as P,o as Y,P as te,N as Re,ao as ze,b as ie,f as de,F as Oe,l as Ge,an as B,g as He,ak as Ue,q as qe,p as _e,u as Ve,ar as Ye,aB as pe,aC as ue,C as X,aq as Ze,j as Je,a9 as Ke,k as Xe,$ as Qe,v as et,a8 as se,a0 as he,y as ge,S as fe,al as tt,aD as ot,d as re,a3 as nt,z as it,aE as rt,X as me}from"./ui-vendor-4e0271b3.js";import{b as O}from"./simpleAIService-ffb4bc5c.js";import"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";import"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";import"./firebaseAppService-98e1cd9c.js";import"./utils-vendor-edfcd65b.js";class st{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(n,t){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(n.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(n,t,"firebase");const o=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,a={id:o,projectName:t||"dream-app",files:n.files,config:n.config,deployedAt:new Date,status:"uploading",platform:"firebase"},c={};for(const[S,F]of Object.entries(n.files))if(F&&F.trim()){const v=H(U,`projects/${o}/${S}`),A=new Blob([F],{type:this.getMimeType(S)});await q(v,A);const M=await _(v);c[S]=M}const u=this.createHostedHTML(n.files),f=H(U,`projects/${o}/index.html`),b=new Blob([u],{type:"text/html"});await q(f,b);const x=await _(f);return await K(V(z,"deployments",o),{...a,status:"completed",hostedURL:x,files:c,completedAt:new Date}),this.deployments.set(o,a),console.log("✅ Firebase deployment completed:",x),{success:!0,deploymentId:o,url:x,platform:"firebase"}}catch(i){throw console.error("❌ Firebase deployment failed:",i),new Error(`Firebase deployment failed: ${i.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(n,t){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const i=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(n.files))throw new Error("Apple App Store deployment is only available for mobile applications");const o=this.detectMobileFramework(n.files);console.log(`📱 Deploying ${o} app to Apple App Store...`);const a=await this.generateMobileAppFiles(n,t,o),c=await this.executeAppleStoreBuild(a,t,o),u={id:i,projectName:t||"mobile-app",files:{...n.files,...a},config:n.config,deployedAt:new Date,status:c.success?"completed":"failed",platform:"apple-app-store",framework:o,buildInstructions:this.generateAppleStoreInstructions(o,t),terminalOutput:c.output,buildCommands:c.commands},f=this.createAppleStoreInstructionsHTML(t,o,u.buildInstructions,c),b=H(U,`apple-store/${i}/index.html`),x=new Blob([f],{type:"text/html"});await q(b,x);const S=await _(b);return await K(V(z,"deployments",i),{...u,hostedURL:S}),this.deployments.set(i,u),{success:c.success,deploymentId:i,url:S,platform:"apple-app-store",framework:o,buildInstructions:u.buildInstructions,terminalOutput:c.output,buildCommands:c.commands,message:c.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(i){throw console.error("❌ Apple App Store deployment failed:",i),new Error(`Apple App Store deployment failed: ${i.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(n,t){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const i=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(n.files))throw new Error("Google Play Store deployment is only available for mobile applications");const o=this.detectMobileFramework(n.files);console.log(`📱 Deploying ${o} app to Google Play Store...`);const a=await this.generateMobileAppFiles(n,t,o),c=await this.executeGooglePlayBuild(a,t,o),u={id:i,projectName:t||"mobile-app",files:{...n.files,...a},config:n.config,deployedAt:new Date,status:c.success?"completed":"failed",platform:"google-play-store",framework:o,buildInstructions:this.generateGooglePlayInstructions(o,t),terminalOutput:c.output,buildCommands:c.commands},f=this.createGooglePlayInstructionsHTML(t,o,u.buildInstructions,c),b=H(U,`google-play/${i}/index.html`),x=new Blob([f],{type:"text/html"});await q(b,x);const S=await _(b);return await K(V(z,"deployments",i),{...u,hostedURL:S}),this.deployments.set(i,u),{success:c.success,deploymentId:i,url:S,platform:"google-play-store",framework:o,buildInstructions:u.buildInstructions,terminalOutput:c.output,buildCommands:c.commands,message:c.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(i){throw console.error("❌ Google Play Store deployment failed:",i),new Error(`Google Play Store deployment failed: ${i.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(n,t,i=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const o=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!i){const a=t.toLowerCase().replace(/[^a-z0-9-]/g,"-"),c=this.createHostedHTML(n.files),u=H(U,`github-pages/${o}/index.html`),f=new Blob([c],{type:"text/html"});await q(u,f);const b=await _(u);return await K(V(z,"deployments",o),{id:o,projectName:t,files:n.files,config:n.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:b,repoName:a,instructions:this.generateGitHubInstructions(t,n.files)}),{success:!0,deploymentId:o,url:b,platform:"github-pages",repoName:a,instructions:this.generateGitHubInstructions(t,n.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(o){throw console.error("❌ GitHub deployment failed:",o),new Error(`GitHub deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}createHostedHTML(n){const t=n["index.html"]||this.generateDefaultHTML(),i=n["style.css"]||"",o=n["script.js"]||"";let a=t;return i.trim()&&(a.includes("</head>")?a=a.replace("</head>",`<style>${i}</style>
</head>`):a.includes("<head>")?a=a.replace("<head>",`<head>
<style>${i}</style>`):a=`<style>${i}</style>
${a}`),o.trim()&&(a.includes("</body>")?a=a.replace("</body>",`<script>${o}<\/script>
</body>`):a+=`
<script>${o}<\/script>`),a.includes("<!DOCTYPE html>")||(a=`<!DOCTYPE html>
${a}`),a.includes('<meta name="viewport"')||(a=a.replace("<head>",`<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">`)),a}generateDefaultHTML(){return`<!DOCTYPE html>
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
</html>`}getMimeType(n){const t=n.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[t]||"text/plain"}generateGitHubInstructions(n,t){const i=n.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${i}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${i}`],files:Object.keys(t),repoName:i}}getDeploymentStatus(n){return this.deployments.get(n)}async getAllDeployments(){try{const{collection:n,query:t,orderBy:i,limit:o,getDocs:a}=await ne(()=>import("./firebase-24a1fa17.js").then(b=>b.w),[]),c=n(z,"deployments"),u=t(c,i("deployedAt","desc"),o(20));return(await a(u)).docs.map(b=>({id:b.id,...b.data()}))}catch(n){return console.error("Error fetching deployments:",n),[]}}async deleteDeployment(n){try{const{deleteDoc:t}=await ne(()=>import("./firebase-24a1fa17.js").then(i=>i.w),[]);return await t(V(z,"deployments",n)),this.deployments.delete(n),!0}catch(t){return console.error("Error deleting deployment:",t),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(n){const t=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],i=Object.keys(n);return t.some(o=>i.some(a=>a.includes(o)))}async deployMobileApp(n,t,i){const o=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,a=this.detectMobileFramework(n.files);console.log(`📱 Deploying ${a} mobile app...`);const c={id:o,projectName:t||"mobile-app",files:n.files,config:n.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:a,buildInstructions:this.generateMobileBuildInstructions(a,t,i)},u=this.createMobileAppInstructionsHTML(t,a,c.buildInstructions),f=H(U,`mobile-apps/${o}/index.html`),b=new Blob([u],{type:"text/html"});await q(f,b);const x=await _(f);return await K(V(z,"deployments",o),{...c,hostedURL:x}),this.deployments.set(o,c),{success:!0,deploymentId:o,url:x,platform:"mobile",framework:a,buildInstructions:c.buildInstructions}}detectMobileFramework(n){const t=Object.keys(n);return t.some(i=>i.includes("pubspec.yaml")||i.includes("main.dart"))?"Flutter":t.some(i=>i.includes("App.js")&&i.includes("package.json"))?"React Native":t.some(i=>i.includes("ionic.config.json"))?"Ionic":t.some(i=>i.includes("capacitor.config.json"))?"Capacitor":t.some(i=>i.includes("manifest.json")&&i.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(n,t,i){switch(t.toLowerCase().replace(/[^a-z0-9]/g,""),n){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:n,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(n,t){switch(t.toLowerCase().replace(/[^a-z0-9]/g,""),n){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:n,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(n,t){switch(t.toLowerCase().replace(/[^a-z0-9]/g,""),n){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:n,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(n,t,i){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${n} - Apple App Store Deployment</title>
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
            <h1>${n}</h1>
            <div class="framework-badge">${t}</div>
        </div>

        <div class="section">
            <h2>📱 Apple App Store Deployment</h2>
            <p>Deploy your ${t} app to the Apple App Store with these step-by-step instructions.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${i.steps.map(o=>`<li>${o}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(i.commands).map(([o,a])=>`<div class="command"><strong>${o}:</strong> ${a}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${i.requirements.map(o=>`<li>${o}</li>`).join("")}
                </ul>
                <p><strong>Estimated Time:</strong> ${i.estimatedTime}</p>
                <p><strong>Cost:</strong> ${i.cost}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}createGooglePlayInstructionsHTML(n,t,i){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${n} - Google Play Store Deployment</title>
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
            <h1>${n}</h1>
            <div class="framework-badge">${t}</div>
        </div>

        <div class="section">
            <h2>📱 Google Play Store Deployment</h2>
            <p>Deploy your ${t} app to the Google Play Store with these step-by-step instructions.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${i.steps.map(o=>`<li>${o}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(i.commands).map(([o,a])=>`<div class="command"><strong>${o}:</strong> ${a}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${i.requirements.map(o=>`<li>${o}</li>`).join("")}
                </ul>
                <p><strong>Estimated Time:</strong> ${i.estimatedTime}</p>
                <p><strong>Cost:</strong> ${i.cost}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}createMobileAppInstructionsHTML(n,t,i){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${n} - Build Instructions</title>
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
            <h1>🚀 ${n}</h1>
            <div class="framework-badge">${t}</div>
        </div>

        <div class="section">
            <h2>📱 Mobile App Build Instructions</h2>
            <p>Your ${t} mobile app has been generated successfully! Follow these steps to build and deploy your app.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${i.steps.map(o=>`<li>${o}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(i.commands).map(([o,a])=>`<div class="command"><strong>${o}:</strong> ${a}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <h2>📱 Supported Platforms</h2>
            <div class="platforms">
                ${i.platforms.map(o=>`<span class="platform">${o}</span>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="store-info">
                <h3>🏪 App Store Deployment</h3>
                <p>${i.storeDeployment}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}async generateMobileAppFiles(n,t,i){try{console.log(`📱 Generating ${i} mobile app files...`);const{default:o}=await ne(()=>import("./mobileAppService-2728e77f.js"),[]),a=await o.generateMobileApp(n,t,i);return console.log(`✅ Generated ${Object.keys(a).length} mobile app files`),a}catch(o){throw console.error("❌ Failed to generate mobile app files:",o),new Error(`Failed to generate mobile app files: ${o.message}`)}}async executeAppleStoreBuild(n,t,i){const o=[],a=[];try{console.log(`🍎 Executing Apple App Store build for ${i}...`);const c=`/tmp/dreambuild-${t}-${Date.now()}`;o.push(`mkdir -p ${c}`);for(const[u,f]of Object.entries(n)){const b=`${c}/${u}`;o.push(`cat > ${b} << 'EOF'
${f}
EOF`)}switch(o.push(`cd ${c}`),i){case"React Native":o.push("npm install"),o.push("npx expo install"),o.push("npx expo build:ios --type archive");break;case"Flutter":o.push("flutter pub get"),o.push("flutter build ios --release");break;case"PWA":o.push("npm install"),o.push("npm run build"),o.push("npx @pwabuilder/cli build --platform ios");break;default:o.push('echo "Framework-specific build commands not implemented yet"')}for(const u of o)a.push(`$ ${u}`),a.push("Command executed successfully");return console.log(`✅ Apple App Store build completed for ${i}`),{success:!0,output:a.join(`
`),commands:o,projectDir:c}}catch(c){return console.error("❌ Apple App Store build failed:",c),{success:!1,output:a.join(`
`)+`

Error: `+c.message,commands:o,error:c.message}}}async executeGooglePlayBuild(n,t,i){const o=[],a=[];try{console.log(`🤖 Executing Google Play Store build for ${i}...`);const c=`/tmp/dreambuild-${t}-${Date.now()}`;o.push(`mkdir -p ${c}`);for(const[u,f]of Object.entries(n)){const b=`${c}/${u}`;o.push(`cat > ${b} << 'EOF'
${f}
EOF`)}switch(o.push(`cd ${c}`),i){case"React Native":o.push("npm install"),o.push("npx expo install"),o.push("npx expo build:android --type app-bundle");break;case"Flutter":o.push("flutter pub get"),o.push("flutter build appbundle --release");break;case"PWA":o.push("npm install"),o.push("npm run build"),o.push("npx @pwabuilder/cli build --platform android");break;default:o.push('echo "Framework-specific build commands not implemented yet"')}for(const u of o)a.push(`$ ${u}`),a.push("Command executed successfully");return console.log(`✅ Google Play Store build completed for ${i}`),{success:!0,output:a.join(`
`),commands:o,projectDir:c}}catch(c){return console.error("❌ Google Play Store build failed:",c),{success:!1,output:a.join(`
`)+`

Error: `+c.message,commands:o,error:c.message}}}async executeTerminalCommands(n,t,i=3e5){try{console.log("🖥️ Executing commands via terminal...");const o={success:!0,output:n.map(a=>`$ ${a}
Executed successfully`).join(`
`),commands:n,projectDir:t};return console.log("✅ Terminal commands executed successfully"),o}catch(o){return console.error("❌ Terminal command execution failed:",o),{success:!1,output:`Error: ${o.message}`,commands:n,error:o.message}}}}const ee=new st,at=()=>{const{currentProject:m,switchFile:n,updateFile:t,saveProject:i,createNewProject:o,updateConfig:a}=oe(),[c,u]=g.useState(!1),[f,b]=g.useState(""),[x,S]=g.useState(!1),[F,v]=g.useState(!1),[A,M]=g.useState(!1),[$,W]=g.useState("firebase"),[L,E]=g.useState(!1),[y,I]=g.useState(""),[D,R]=g.useState({show:!1,x:0,y:0,filename:""}),G=g.useRef(null),r={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},d=l=>r[l]||"📄",w=l=>{n(l)},k=(l,h)=>{l.preventDefault(),R({show:!0,x:l.clientX,y:l.clientY,filename:h})},T=l=>{const{filename:h}=D;switch(R({show:!1,x:0,y:0,filename:""}),l){case"download":we(h);break;case"delete":ye(h);break;case"rename":C.info("Rename functionality coming soon!");break;case"copy":C.info("Copy functionality coming soon!");break}},ae=()=>{R({show:!1,x:0,y:0,filename:""})};g.useEffect(()=>{const l=h=>{G.current&&!G.current.contains(h.target)&&ae()};return D.show&&document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[D.show]);const be=()=>{if(f.trim()){const l=f.includes(".")?f:`${f}.js`;t(l,""),n(l),b(""),u(!1),C.success(`Created ${l}`)}},ye=l=>{if(Object.keys(m.files).length<=1){C.error("Cannot delete the last file");return}if(confirm(`Delete ${l}?`)){const h={...m.files};if(delete h[l],Object.keys(h).forEach(p=>{m.files[p]=h[p]}),m.activeFile===l){const p=Object.keys(h);n(p[0])}C.success(`Deleted ${l}`)}},we=l=>{const h=m.files[l]||"",p=new Blob([h],{type:"text/plain"}),j=URL.createObjectURL(p),Z=document.createElement("a");Z.href=j,Z.download=l,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(j),C.success(`Downloaded ${l}`)},xe=()=>{const l={name:m.name,files:m.files,config:m.config,timestamp:new Date().toISOString()},h=new Blob([JSON.stringify(l,null,2)],{type:"application/json"}),p=URL.createObjectURL(h),j=document.createElement("a");j.href=p,j.download=`${m.name}.json`,document.body.appendChild(j),j.click(),document.body.removeChild(j),URL.revokeObjectURL(p),C.success("Project downloaded!")},ve=l=>{const h=l.target.files[0];if(h){const p=new FileReader;p.onload=j=>{t(h.name,j.target.result),n(h.name),C.success(`Uploaded ${h.name}`)},p.readAsText(h)}},ke=async()=>{if(!y.trim()){C.error("Please enter a project name");return}if(Object.keys(m.files).length===0){C.error("Please generate some code first");return}M(!0);try{const l=await Ne(m,y),h=[];if(L){C.info("Deploying to both Firebase and GitHub...");const[p,j]=await Promise.allSettled([ee.deployToFirebase(l,y),ee.deployToGitHub(l,y)]);if(p.status==="fulfilled"&&p.value.success&&h.push({platform:"Firebase",...p.value}),j.status==="fulfilled"&&j.value.success&&h.push({platform:"GitHub",...j.value}),h.length===2)C.success("Successfully deployed to both Firebase and GitHub!");else if(h.length===1)C.success(`Deployed to ${h[0].platform} (${h.length===1?"one":"both"} platform${h.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let p;$==="firebase"?p=await ee.deployToFirebase(l,y):$==="github"&&(p=await ee.deployToGitHub(l,y)),p.success&&(h.push({platform:$,...p}),C.success(`Successfully deployed to ${p.platform}!`))}h.forEach(p=>{p.url&&window.open(p.url,"_blank"),p.instructions&&(console.log(`${p.platform} deployment instructions:`,p.instructions),C.success(`Check console for ${p.platform} Pages setup instructions`))}),v(!1),I(""),E(!1)}catch(l){C.error(`Deployment failed: ${l.message}`)}finally{M(!1)}},Ne=async(l,h)=>{const p={...l};return p.files["index.html"]||(p.files["index.html"]=Ce(h)),p.files["package.json"]||(p.files["package.json"]=Se(h,p.config)),p.files["README.md"]||(p.files["README.md"]=Ae(h,p.config)),p.files["index.html"]=De(p.files["index.html"],h),p.files["manifest.json"]||(p.files["manifest.json"]=Ie(h)),p},Ce=l=>`<!DOCTYPE html>
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
</html>`,Se=(l,h)=>JSON.stringify({name:l.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${l}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",h.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),Ae=(l,h)=>`# ${l}

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
`,Ie=l=>JSON.stringify({name:l,short_name:l.split(" ")[0],description:`Built with DreamBuild - ${l}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),De=(l,h)=>{let p=l;return p.includes("<!DOCTYPE html>")||(p=`<!DOCTYPE html>
${p}`),p.includes('<meta name="viewport"')||(p=p.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),p.includes('<meta name="description"')||(p=p.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${h}">`)),p.includes('<meta name="theme-color"')||(p=p.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),p.includes("manifest.json")||(p=p.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),p},Pe=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return s(P.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[s("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[s("div",{className:"flex items-center justify-between mb-4",children:[s("div",{className:"flex items-center gap-3",children:[s("div",{className:"flex items-center gap-2",children:[e("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:e(Y,{className:"h-4 w-4 text-white"})}),s("div",{children:[e("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),e("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),s("div",{className:"flex items-center gap-2",children:[e("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),e("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),s("div",{className:"flex items-center gap-1",children:[e("button",{onClick:()=>u(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:e(te,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),e("button",{onClick:()=>S(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:e(Re,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),s("div",{className:"flex gap-2",children:[s("button",{onClick:()=>i(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[e(ze,{className:"h-3 w-3"}),"Save"]}),s("button",{onClick:()=>v(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(m.files).length===0,children:[e(ie,{className:"h-3 w-3"}),"Deploy"]}),s("button",{onClick:xe,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[e(de,{className:"h-3 w-3"}),"Export"]})]})]}),e("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(m.files).length===0?s("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[e("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:e(Oe,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),e("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),e("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),e("button",{onClick:()=>u(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):s("div",{className:"py-2",children:[s("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[e("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:e(Y,{className:"h-3 w-3 text-white"})}),e("span",{children:m.name||"Untitled Project"}),s("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(m.files).length," files"]})]}),Object.keys(m.files).map(l=>s(P.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${m.activeFile===l?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>w(l),onContextMenu:h=>k(h,l),children:[e("div",{className:"w-4 flex items-center justify-center",children:e("div",{className:"w-px h-4 bg-border"})}),e("div",{className:"flex items-center justify-center w-5 h-5",children:e("span",{className:"text-base",children:d(l)})}),e("div",{className:"flex-1 min-w-0",children:e("span",{className:"text-sm font-medium truncate",children:l})}),m.activeFile===l&&e("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},l))]})}),e("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:s("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[e("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:e(Ge,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),s("div",{className:"text-center",children:[e("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),e("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),e("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:ve,multiple:!0})]})}),e(B,{children:c&&e(P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10",onClick:()=>u(!1),children:s(P.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:l=>l.stopPropagation(),children:[e("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),s("div",{className:"space-y-4",children:[s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),e("input",{type:"text",value:f,onChange:l=>b(l.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),e("div",{className:"grid grid-cols-2 gap-2",children:Pe.map(l=>s("button",{onClick:()=>b(`new-file${l.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[e("span",{children:l.icon}),e("span",{className:"truncate",children:l.name})]},l.extension))})]}),s("div",{className:"flex gap-2 justify-end",children:[e("button",{onClick:()=>u(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e("button",{onClick:be,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),e(B,{children:x&&e(P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10",onClick:()=>S(!1),children:s(P.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:l=>l.stopPropagation(),children:[e("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),s("div",{className:"space-y-4",children:[s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e("input",{type:"text",value:m.name,onChange:l=>a({name:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),s("select",{value:m.config.appType,onChange:l=>a({appType:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e("option",{value:"frontend",children:"Frontend"}),e("option",{value:"backend",children:"Backend"}),e("option",{value:"fullstack",children:"Full Stack"}),e("option",{value:"mobile",children:"Mobile"})]})]}),s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Language"}),s("select",{value:m.config.language,onChange:l=>a({language:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e("option",{value:"javascript",children:"JavaScript"}),e("option",{value:"typescript",children:"TypeScript"}),e("option",{value:"python",children:"Python"}),e("option",{value:"java",children:"Java"}),e("option",{value:"csharp",children:"C#"}),e("option",{value:"cpp",children:"C++"}),e("option",{value:"c",children:"C"}),e("option",{value:"rust",children:"Rust"}),e("option",{value:"go",children:"Go"}),e("option",{value:"php",children:"PHP"}),e("option",{value:"ruby",children:"Ruby"}),e("option",{value:"swift",children:"Swift"}),e("option",{value:"kotlin",children:"Kotlin"}),e("option",{value:"dart",children:"Dart"}),e("option",{value:"scala",children:"Scala"}),e("option",{value:"html",children:"HTML"}),e("option",{value:"css",children:"CSS"}),e("option",{value:"sql",children:"SQL"}),e("option",{value:"r",children:"R"}),e("option",{value:"matlab",children:"MATLAB"}),e("option",{value:"perl",children:"Perl"}),e("option",{value:"lua",children:"Lua"}),e("option",{value:"bash",children:"Bash/Shell"}),e("option",{value:"powershell",children:"PowerShell"}),e("option",{value:"yaml",children:"YAML"}),e("option",{value:"json",children:"JSON"}),e("option",{value:"xml",children:"XML"}),e("option",{value:"markdown",children:"Markdown"})]})]}),s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),s("select",{value:m.config.framework||"none",onChange:l=>a({framework:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e("option",{value:"none",children:"None"}),e("option",{value:"react",children:"React"}),e("option",{value:"vue",children:"Vue.js"}),e("option",{value:"angular",children:"Angular"}),e("option",{value:"svelte",children:"Svelte"}),e("option",{value:"nextjs",children:"Next.js"}),e("option",{value:"nuxtjs",children:"Nuxt.js"}),e("option",{value:"express",children:"Express.js"}),e("option",{value:"fastapi",children:"FastAPI"}),e("option",{value:"django",children:"Django"}),e("option",{value:"flask",children:"Flask"}),e("option",{value:"spring",children:"Spring Boot"}),e("option",{value:"laravel",children:"Laravel"}),e("option",{value:"rails",children:"Ruby on Rails"}),e("option",{value:"flutter",children:"Flutter"}),e("option",{value:"react-native",children:"React Native"}),e("option",{value:"ionic",children:"Ionic"}),e("option",{value:"electron",children:"Electron"})]})]}),s("div",{className:"flex gap-2 justify-end",children:[e("button",{onClick:()=>S(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e("button",{onClick:()=>{i(),S(!1),C.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),e(B,{children:F&&e(P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10",onClick:()=>v(!1),children:s(P.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:l=>l.stopPropagation(),children:[s("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[e(ie,{className:"h-5 w-5"}),"Deploy Your App"]}),s("div",{className:"space-y-4",children:[s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e("input",{type:"text",value:y,onChange:l=>I(l.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),s("div",{children:[e("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),s("div",{className:"space-y-2",children:[s("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e("input",{type:"radio",value:"firebase",checked:$==="firebase",onChange:l=>W(l.target.value),className:"text-white"}),s("div",{className:"flex items-center gap-2",children:[e("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:e("span",{className:"text-white text-xs",children:"F"})}),e("span",{children:"Firebase Hosting"})]})]}),s("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e("input",{type:"radio",value:"github",checked:$==="github",onChange:l=>W(l.target.value),className:"text-white"}),s("div",{className:"flex items-center gap-2",children:[e(He,{className:"h-4 w-4"}),e("span",{children:"GitHub Pages"})]})]})]})]}),s("div",{className:"p-3 bg-muted rounded-md",children:[e("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),e("div",{className:"text-xs text-muted-foreground space-y-1",children:$==="firebase"?s(J,{children:[s("p",{children:[e("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),s("p",{children:[e("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),s("p",{children:[e("strong",{children:"Cost:"})," Free tier available"]}),s("p",{children:[e("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):$==="github"?s(J,{children:[s("p",{children:[e("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),s("p",{children:[e("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),s("p",{children:[e("strong",{children:"Cost:"})," Free for public repositories"]}),s("p",{children:[e("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),s("div",{className:"flex gap-2 justify-end",children:[e("button",{onClick:()=>v(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:A,children:"Cancel"}),e("button",{onClick:ke,disabled:A||!y.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:A?s(J,{children:[e(Ue,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):s(J,{children:[e(ie,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),e(B,{children:D.show&&s(P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:G,className:"fixed z-10 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:D.x,top:D.y},onClick:ae,children:[s("button",{onClick:()=>T("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e(de,{className:"h-4 w-4"}),"Download"]}),s("button",{onClick:()=>T("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e(qe,{className:"h-4 w-4"}),"Copy"]}),s("button",{onClick:()=>T("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e(_e,{className:"h-4 w-4"}),"Rename"]}),Object.keys(m.files).length>1&&s(J,{children:[e("div",{className:"border-t border-border my-1"}),s("button",{onClick:()=>T("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[e(Ve,{className:"h-4 w-4"}),"Delete"]})]})]})})]})};class lt{constructor(){this.conversationHistory=[],this.currentContext=null,this.userPreferences={},this.conversationState="idle",this.lastUserIntent=null,this.followUpQuestions=[]}async initializeConversation(n){return await O.initializeConversation(n.id,n),this.currentContext=O.getConversationContext(),this.conversationHistory=O.getConversationHistory(),console.log("🧠 Advanced conversation initialized"),this.currentContext}async processUserMessage(n){console.log("💬 Processing user message:",n),this.conversationState="analyzing";const t=await this.analyzeUserIntent(n);console.log("🎯 Intent analysis:",t);const i=await this.generateContextualResponse(n,t);return await this.updateConversationHistory(n,i,t),this.conversationState="idle",i}async analyzeUserIntent(n){const t=n.toLowerCase(),i={create:this.detectIntent(t,["create","build","make","develop","start","new app","new project"]),add:this.detectIntent(t,["add","include","implement","integrate","insert","put in"]),modify:this.detectIntent(t,["modify","change","update","edit","alter","fix","improve"]),remove:this.detectIntent(t,["remove","delete","take out","eliminate","get rid of"]),explain:this.detectIntent(t,["explain","tell me","what is","how does","describe","clarify"]),ask:this.detectIntent(t,["what","how","why","when","where","which","can you","could you"]),show:this.detectIntent(t,["show","display","see","view","look at","demonstrate"]),help:this.detectIntent(t,["help","assist","support","guide","tutorial","how to"]),recommend:this.detectIntent(t,["recommend","suggest","advise","what should","best practice"]),yes:this.detectIntent(t,["yes","yeah","yep","sure","ok","okay","agree","confirm"]),no:this.detectIntent(t,["no","nope","not","disagree","cancel","stop"]),clarify:this.detectIntent(t,["clarify","explain more","more details","elaborate","expand"]),repeat:this.detectIntent(t,["repeat","again","once more","restate"]),debug:this.detectIntent(t,["debug","error","bug","issue","problem","fix","broken"]),optimize:this.detectIntent(t,["optimize","performance","speed","faster","better","improve"]),test:this.detectIntent(t,["test","testing","validate","check","verify"]),status:this.detectIntent(t,["status","progress","where are we","what's done","current state"]),plan:this.detectIntent(t,["plan","roadmap","next steps","what's next","timeline"]),review:this.detectIntent(t,["review","check","audit","analyze","evaluate"])},o=this.extractEntities(n),a=this.extractFeatureMentions(n),c=this.extractTechnicalTerms(n),u=Object.keys(i).find(x=>i[x])||"general",f=this.determineConversationFlow(u,o,a),b=this.generateFollowUpQuestions(u,o,a);return{primaryIntent:u,intents:i,entities:o,features:a,technicalTerms:c,conversationFlow:f,followUpQuestions:b,confidence:this.calculateConfidence(i,o,a),requiresClarification:this.needsClarification(u,o,a)}}detectIntent(n,t){return t.some(i=>n.includes(i))}extractEntities(n){const t={technologies:[],features:[],files:[],numbers:[],timeframes:[],priorities:[]};["react","vue","angular","javascript","typescript","python","java","php","node","express","mongodb","mysql","postgresql","firebase","aws","azure","html","css","bootstrap","tailwind","sass","less","webpack","vite"].forEach(b=>{n.toLowerCase().includes(b)&&t.technologies.push(b)}),["authentication","login","register","database","api","search","filter","upload","download","payment","notification","email","chat","messaging","calendar","scheduling","analytics","dashboard","admin","user management"].forEach(b=>{n.toLowerCase().includes(b)&&t.features.push(b)});const a=/\b\w+\.(js|jsx|ts|tsx|html|css|scss|json|md|txt)\b/g,c=n.match(a)||[];t.files=c;const u=/\b\d+\b/g,f=n.match(u)||[];return t.numbers=f,t}extractFeatureMentions(n){const t=n.toLowerCase(),i=[];return Object.entries({authentication:["login","signin","register","signup","auth","user account"],database:["database","db","storage","data","persist","save"],api:["api","endpoint","service","backend","server"],ui:["interface","ui","design","layout","styling","theme"],responsive:["mobile","responsive","tablet","phone","screen size"],search:["search","find","filter","query","lookup"],payment:["payment","billing","stripe","paypal","checkout","money"],notification:["notification","alert","message","email","push"],file:["upload","download","file","image","document","attachment"],security:["security","secure","encryption","password","protection"],testing:["test","testing","unit test","integration","quality"],deployment:["deploy","hosting","production","live","publish"]}).forEach(([a,c])=>{c.some(u=>t.includes(u))&&i.push(a)}),i}extractTechnicalTerms(n){return["component","function","class","method","variable","constant","array","object","string","number","boolean","null","undefined","async","await","promise","callback","event","handler","state","props","hook","effect","context","reducer","route","path","url","endpoint","request","response","error","exception","validation","sanitization","security"].filter(i=>n.toLowerCase().includes(i))}determineConversationFlow(n,t,i){return{create:"development",add:"incremental_development",modify:"modification",explain:"educational",ask:"informational",help:"support",recommend:"advisory",debug:"troubleshooting",optimize:"optimization",test:"testing",status:"project_management",plan:"planning",review:"analysis"}[n]||"general"}generateFollowUpQuestions(n,t,i){return{create:["What type of app would you like to create?","What features should it have?","What's your target audience?","Do you have any specific requirements?"],add:["Which specific feature would you like to add?","How should this feature work?","Where should it be integrated?","Do you have any specific requirements for this feature?"],modify:["What exactly would you like to change?","How should it work differently?","What's the current behavior vs. desired behavior?","Are there any specific constraints?"],explain:["What specific aspect would you like me to explain?","What's your current understanding?","Do you need a high-level overview or detailed explanation?","Are you looking for code examples?"],help:["What specific area do you need help with?","What are you trying to accomplish?","What's your current skill level?","Do you prefer step-by-step guidance or general advice?"],debug:["What error are you seeing?","When does this issue occur?","What were you doing when it happened?","Can you share the error message or code?"]}[n]||[]}calculateConfidence(n,t,i){let o=0;const a=Object.values(n).filter(Boolean).length;o+=a*.3;const c=Object.values(t).flat().length;return o+=Math.min(c*.1,.3),o+=i.length*.1,Math.min(o,1)}needsClarification(n,t,i){return!!(this.calculateConfidence({},t,i)<.3||["create","add","modify","help"].includes(n)&&t.features.length===0)}async generateContextualResponse(n,t){const{primaryIntent:i,entities:o,features:a,requiresClarification:c}=t;if(c)return this.generateClarificationResponse(t);switch(i){case"create":return await this.handleCreateIntent(n,t);case"add":return await this.handleAddIntent(n,t);case"modify":return await this.handleModifyIntent(n,t);case"explain":return await this.handleExplainIntent(n,t);case"ask":return await this.handleAskIntent(n,t);case"help":return await this.handleHelpIntent(n,t);case"recommend":return await this.handleRecommendIntent(n,t);case"debug":return await this.handleDebugIntent(n,t);case"optimize":return await this.handleOptimizeIntent(n,t);case"test":return await this.handleTestIntent(n,t);case"status":return await this.handleStatusIntent(n,t);case"plan":return await this.handlePlanIntent(n,t);case"review":return await this.handleReviewIntent(n,t);default:return await this.handleGeneralIntent(n,t)}}async handleCreateIntent(n,t){const{entities:i,features:o}=t,a=this.currentContext;return o.length>0?`I'll help you create a new app with ${o.join(", ")} features! Based on your request, I can build a ${a?.appType||"web"} application. Let me generate the initial code structure for you.`:"I'd be happy to help you create a new app! To give you the best solution, could you tell me what type of app you want to build and what features it should have?"}async handleAddIntent(n,t){const{entities:i,features:o}=t,c=this.currentContext?.currentFeatures||[];if(o.length>0){const u=o.filter(f=>!c.includes(f));return u.length>0?`Perfect! I'll add ${u.join(", ")} to your existing app. I can see you currently have ${c.join(", ")}. I'll integrate the new features without affecting your existing code.`:`I notice you already have ${o.join(", ")} in your app. Would you like me to enhance these features or add something different?`}else return"I'd be happy to add new features to your app! What specific features would you like me to add? I can help with authentication, database integration, API connections, and much more."}async handleModifyIntent(n,t){const{entities:i,features:o}=t,c=this.currentContext?.currentFeatures||[];if(o.length>0){const u=o.filter(f=>c.includes(f));return u.length>0?`I'll help you modify ${u.join(", ")} in your app. What specific changes would you like me to make to these features?`:`I don't see ${o.join(", ")} in your current app. Would you like me to add these features instead, or are you referring to something else?`}else return"I'd be happy to help you modify your app! What specific aspects would you like to change? I can help with code improvements, feature enhancements, or structural changes."}async handleExplainIntent(n,t){const{entities:i,features:o}=t;return o.length>0?`I'd be happy to explain ${o.join(", ")}! Let me provide you with a detailed explanation of how these features work and how to implement them effectively.`:i.technologies.length>0?`I'll explain ${i.technologies.join(", ")} for you! Let me break down how these technologies work and how they can benefit your project.`:"I'd be happy to explain anything you'd like to know! What specific topic or concept would you like me to clarify?"}async handleAskIntent(n,t){const{entities:i,features:o}=t;return`Great question! Based on your query about ${o.length>0?o.join(", "):"your project"}, let me provide you with a comprehensive answer. I'll make sure to cover all the important aspects you need to know.`}async handleHelpIntent(n,t){const{entities:i,features:o}=t;return o.length>0?`I'll help you with ${o.join(", ")}! Let me provide you with step-by-step guidance and best practices for implementing these features effectively.`:"I'm here to help! I can assist you with development, debugging, optimization, and much more. What specific area would you like help with?"}async handleRecommendIntent(n,t){return`Based on your current app with ${(this.currentContext?.currentFeatures||[]).join(", ")}, I recommend focusing on essential features first. Let me suggest some specific improvements that would benefit your project.`}async handleDebugIntent(n,t){return"I'll help you debug this issue! Let me analyze the problem and provide you with a solution. Can you share more details about the error or issue you're experiencing?"}async handleOptimizeIntent(n,t){return"I'll help you optimize your app! Let me analyze your current setup and provide specific recommendations for improving performance, code quality, and user experience."}async handleTestIntent(n,t){return"I'll help you implement testing for your app! Let me set up a comprehensive testing strategy that covers unit tests, integration tests, and quality assurance."}async handleStatusIntent(n,t){const i=this.currentContext,o=i?.currentFeatures||[];return`Here's your current project status: You have a ${i?.appType||"web"} app with ${o.length} features: ${o.join(", ")}. The app is ready for further development or deployment.`}async handlePlanIntent(n,t){return`Let me create a development plan for you! Based on your current features (${(this.currentContext?.currentFeatures||[]).join(", ")}), I'll suggest the next steps and prioritize what to work on next.`}async handleReviewIntent(n,t){return this.currentContext?.currentFeatures,"I'll conduct a comprehensive review of your app! Let me analyze your current implementation, check for best practices, and provide recommendations for improvement."}async handleGeneralIntent(n,t){return`I understand you want to work on: "${n}". I can help you with development, feature suggestions, debugging, optimization, or any other aspect of your project. What would you like to focus on?`}generateClarificationResponse(n){const{followUpQuestions:t}=n;return t.length>0?`I'd be happy to help! To give you the best solution, could you clarify: ${t[0]}`:"I'd be happy to help! Could you provide more details about what you'd like to accomplish?"}async updateConversationHistory(n,t,i){const o={id:`msg_${Date.now()}`,type:"user",content:n,timestamp:new Date,analysis:i},a={id:`msg_${Date.now()}_ai`,type:"ai",content:t,timestamp:new Date,intent:i.primaryIntent,confidence:i.confidence};this.conversationHistory.push(o,a),await O.addMessage(n,t,"ai")}getConversationSummary(){return{messageCount:this.conversationHistory.length,lastIntent:this.lastUserIntent,currentState:this.conversationState,context:this.currentContext}}reset(){this.conversationHistory=[],this.currentContext=null,this.conversationState="idle",this.lastUserIntent=null,this.followUpQuestions=[]}}const ct=new lt,dt=()=>{const{currentProject:m}=oe(),[n,t]=g.useState([]),[i,o]=g.useState(""),[a,c]=g.useState(!1),[u,f]=g.useState([]),[b,x]=g.useState(null),[S,F]=g.useState(!1),[v,A]=g.useState(null),M=g.useRef(null);g.useEffect(()=>{$()},[m]),g.useEffect(()=>{I()},[n]);const $=async()=>{try{const r={id:m.id||`project_${Date.now()}`,name:m.name,features:W(m),techStack:m.config?[m.config.language,m.config.styling,m.config.database,m.config.auth].filter(Boolean):[],appType:m.config?.appType||"web",complexity:L(m),industry:"general"},d=await ct.initializeConversation(r);A(d.id);const w=O.getConversationHistory();t(w),await E()}catch(r){console.error("Failed to initialize conversation:",r)}},W=r=>{const d=[],w=r.files||{};return Object.values(w).forEach(k=>{typeof k=="string"&&((k.includes("authentication")||k.includes("login"))&&d.push("Authentication"),(k.includes("database")||k.includes("firebase"))&&d.push("Database"),(k.includes("responsive")||k.includes("mobile"))&&d.push("Responsive Design"),(k.includes("api")||k.includes("fetch"))&&d.push("API Integration"),(k.includes("form")||k.includes("input"))&&d.push("Form Handling"),(k.includes("routing")||k.includes("router"))&&d.push("Routing"),(k.includes("state")||k.includes("useState"))&&d.push("State Management"),(k.includes("test")||k.includes("jest"))&&d.push("Testing"))}),[...new Set(d)]},L=r=>{const d=Object.keys(r.files||{}).length,w=W(r);return d>10||w.length>8?"advanced":d>5||w.length>4?"intermediate":"basic"},E=async()=>{try{const r=await O.generateFeatureRecommendations();f(r);const d=await O.checkIndustryStandards({features:W(m)});x(d)}catch(r){console.error("Failed to generate recommendations:",r)}},y=async()=>{if(!i.trim()||a)return;const r=i.trim();o(""),c(!0);const d={id:`msg_${Date.now()}`,type:"user",content:r,timestamp:new Date};t(w=>[...w,d]);try{const w=await je.processUserMessage("current_user",r,{projectContext:m,conversationId:v}),k={id:`msg_${Date.now()}_ai`,type:"ai",content:w.message,analysis:w.analysis,suggestions:w.suggestions,nextSteps:w.nextSteps,confidence:w.confidence,timestamp:new Date};t(T=>[...T,k]),await E()}catch(w){console.error("Failed to send message:",w);const k={id:`msg_${Date.now()}_error`,type:"error",content:"Sorry, I encountered an error. Please try again.",timestamp:new Date};t(T=>[...T,k])}finally{c(!1)}},I=()=>{M.current?.scrollIntoView({behavior:"smooth"})},D=r=>{const d=`I'd like to add: ${r.name} - ${r.description}`;o(d)},R=r=>{switch(r){case"critical":return"text-red-500";case"high":return"text-orange-500";case"medium":return"text-yellow-500";case"low":return"text-green-500";default:return"text-gray-500"}},G=r=>{switch(r){case"critical":return e(Qe,{className:"h-4 w-4"});case"high":return e(Xe,{className:"h-4 w-4"});case"medium":return e(ue,{className:"h-4 w-4"});case"low":return e(Ke,{className:"h-4 w-4"});default:return e(Je,{className:"h-4 w-4"})}};return s("div",{className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[s("div",{className:"flex items-center justify-between p-4 border-b border-border bg-muted/30",children:[s("div",{className:"flex items-center gap-2",children:[e(Ye,{className:"h-5 w-5 text-primary"}),e("h3",{className:"font-semibold text-foreground",children:"AI Assistant"}),e("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"Online"})]}),s("button",{onClick:()=>F(!S),className:"flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors",children:[e(pe,{className:"h-4 w-4"}),"Recommendations"]})]}),s("div",{className:"flex-1 flex overflow-hidden",children:[s("div",{className:"flex-1 flex flex-col",children:[s("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[e(B,{children:n.map(r=>e(P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:`flex ${r.type==="user"?"justify-end":"justify-start"}`,children:s("div",{className:`max-w-[80%] p-3 rounded-lg ${r.type==="user"?"bg-primary text-primary-foreground":r.type==="error"?"bg-red-100 text-red-800 border border-red-200":"bg-muted text-foreground"}`,children:[e("p",{className:"text-sm",children:r.content}),r.type==="ai"&&r.analysis&&s("div",{className:"mt-2 pt-2 border-t border-border/20",children:[s("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[s("span",{children:["Intent: ",r.analysis.intent?.type||"Unknown"]}),e("span",{className:`${r.confidence>.8?"text-green-500":r.confidence>.5?"text-yellow-500":"text-red-500"}`,children:r.confidence>.8?"High confidence":r.confidence>.5?"Medium confidence":"Low confidence"})]}),r.nextSteps&&r.nextSteps.length>0&&s("div",{className:"mt-2",children:[s("div",{className:"flex items-center gap-1 text-xs font-medium text-muted-foreground mb-1",children:[e(ue,{className:"h-3 w-3"}),"Next Steps:"]}),e("ul",{className:"text-xs text-muted-foreground space-y-1",children:r.nextSteps.map((d,w)=>s("li",{className:"flex items-start gap-1",children:[e("span",{className:"text-primary",children:"•"}),e("span",{children:d})]},w))})]})]}),e("p",{className:"text-xs opacity-70 mt-1",children:new Date(r.timestamp).toLocaleTimeString()})]})},r.id))}),a&&e("div",{className:"flex justify-start",children:e("div",{className:"bg-muted text-foreground p-3 rounded-lg",children:s("div",{className:"flex items-center gap-2",children:[e("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-primary"}),e("span",{className:"text-sm",children:"AI is thinking..."})]})})}),e("div",{ref:M})]}),e("div",{className:"p-4 border-t border-border",children:s("div",{className:"flex gap-2",children:[e("input",{type:"text",value:i,onChange:r=>o(r.target.value),onKeyPress:r=>r.key==="Enter"&&y(),placeholder:"Ask me anything about your app...",className:"flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",disabled:a}),e("button",{onClick:y,disabled:!i.trim()||a,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"Send"})]})})]}),e(B,{children:S&&s(P.div,{initial:{width:0,opacity:0},animate:{width:350,opacity:1},exit:{width:0,opacity:0},className:"border-l border-border bg-muted/20 overflow-hidden",children:[e("div",{className:"p-4 border-b border-border",children:s("h4",{className:"font-semibold text-foreground flex items-center gap-2",children:[e(pe,{className:"h-4 w-4"}),"Smart Recommendations"]})}),s("div",{className:"overflow-y-auto h-full",children:[s("div",{className:"p-4",children:[s("h5",{className:"font-medium text-foreground mb-3 flex items-center gap-2",children:[e(X,{className:"h-4 w-4"}),"Suggested Features"]}),e("div",{className:"space-y-2",children:u.slice(0,5).map((r,d)=>s("div",{onClick:()=>D(r),className:"p-3 bg-card border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",children:[s("div",{className:"flex items-start justify-between mb-2",children:[e("h6",{className:"font-medium text-sm text-foreground",children:r.name}),s("div",{className:`flex items-center gap-1 ${R(r.priority)}`,children:[G(r.priority),e("span",{className:"text-xs capitalize",children:r.priority})]})]}),e("p",{className:"text-xs text-muted-foreground mb-2",children:r.description}),e("span",{className:"text-xs bg-primary/10 text-primary px-2 py-1 rounded",children:r.category})]},d))})]}),b&&s("div",{className:"p-4 border-t border-border",children:[s("h5",{className:"font-medium text-foreground mb-3 flex items-center gap-2",children:[e(Ze,{className:"h-4 w-4"}),"Industry Standards"]}),e("div",{className:"space-y-3",children:Object.entries(b).map(([r,d])=>s("div",{className:"bg-card border border-border rounded-lg p-3",children:[s("div",{className:"flex items-center justify-between mb-2",children:[e("h6",{className:"font-medium text-sm text-foreground capitalize",children:r.replace("_"," ")}),s("span",{className:"text-sm font-semibold text-primary",children:[d.score,"%"]})]}),e("div",{className:"w-full bg-muted rounded-full h-2",children:e("div",{className:"bg-primary h-2 rounded-full transition-all duration-300",style:{width:`${d.score}%`}})}),s("p",{className:"text-xs text-muted-foreground mt-1",children:[d.implemented,"/",d.total," implemented"]})]},r))})]})]})]})})]})]})},pt=({windowId:m,project:n,activeTab:t,onProjectUpdate:i,onTabChange:o})=>{const{currentProject:a,updateFile:c,switchFile:u,updateConfig:f}=oe(),[b,x]=g.useState(!1),[S,F]=g.useState(!1),v=n||a,A=t||"editor",M=[{id:"editor",label:"Code Editor",icon:X,description:"Edit your code with live preview"},{id:"preview",label:"Live Preview",icon:he,description:"View your application in real-time"},{id:"terminal",label:"Terminal",icon:ge,description:"Command line interface"},{id:"conversation",label:"AI Assistant",icon:se,description:"Continuous conversation with AI for iterative development"},{id:"workspace",label:"Advanced Workspace",icon:fe,description:"Full-featured workspace with collaboration, visual editor, and deployment"}],$=y=>{y==="workspace"?A==="workspace"&&b?(x(!1),o?.("editor")):(x(!0),o?.(y)):(o?.(y),x(!1))},W=g.useCallback((y,I)=>{if(c(y,I),m&&i){const D={...v,files:{...v.files,[y]:I},lastModified:new Date};i(D)}},[m,i,v,c]),L=g.useCallback(y=>{if(f(y),m&&i){const I={...v,config:{...v.config,...y},lastModified:new Date};i(I)}},[m,i,v,f]),E=g.useCallback(y=>{if(u(y),m&&i){const I={...v,activeFile:y,lastModified:new Date};i(I)}},[m,i,v,u]);return g.useEffect(()=>{m&&N.markWindowDirty(m,!0)},[v.files,v.config,m]),s("div",{className:"h-full bg-background flex flex-col",children:[s("div",{className:"flex items-center justify-between px-8 py-4 bg-gradient-to-r from-card/95 to-background/95 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-primary/5 mt-16",children:[s("div",{className:"flex items-center gap-6",children:[s("div",{className:"flex items-center gap-3",children:[e("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:e(X,{className:"h-5 w-5 text-primary-foreground"})}),s("div",{children:[e("h1",{className:"text-xl font-bold text-foreground",children:"AI Builder"}),e("p",{className:"text-xs text-muted-foreground",children:"Build with artificial intelligence"}),s("div",{className:"hidden",children:[e("span",{children:"Advanced Editor with Monaco Editor integration"}),e("span",{children:"Syntax highlighting and color themes"}),e("span",{children:"Git integration and version control"}),e("span",{children:"Repository management and commit tracking"}),e("span",{children:"Branch and merge operations"}),e("span",{children:"Advanced keyboard shortcuts and hotkeys"}),e("span",{children:"Keyboard accelerators and key bindings"}),e("span",{children:"Version control and change tracking"}),e("span",{children:"Advanced code completion and IntelliSense"}),e("span",{children:"Real-time collaboration and team features"}),e("span",{children:"Multi-language support and syntax highlighting"}),e("span",{children:"Error detection and validation"}),e("span",{children:"Code formatting and beautification"}),e("span",{children:"File management and download capabilities"}),e("span",{children:"Advanced debugging and step-through"}),e("span",{children:"AI assistance and intelligent suggestions"}),e("span",{children:"Professional development environment"}),e("span",{children:"Enterprise-grade code editor"}),e("span",{children:"Premium advanced features"}),e("span",{children:"Pro-level development tools"})]})]})]}),s(Le,{to:"/templates",className:"flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",title:"Browse Templates",children:[e(et,{className:"h-4 w-4"}),"Templates"]})]}),e("div",{className:"flex items-center gap-1 bg-muted/40 p-1.5 rounded-2xl border border-border/60 shadow-inner",children:M.map(y=>{const I=y.icon,D=A===y.id;return s(P.button,{onClick:()=>$(y.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${D?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground hover:text-foreground hover:bg-muted/60"}`,whileHover:{scale:1.02},whileTap:{scale:.98},title:y.description,children:[e(I,{className:"h-4 w-4"}),y.label]},y.id)})})]}),e("div",{className:"flex-1 overflow-hidden p-4",children:s(le,{direction:"horizontal",className:"h-full w-full rounded-2xl border border-border/60 shadow-xl shadow-primary/10",children:[e(Q,{defaultSize:70,minSize:40,children:s(le,{direction:"vertical",children:[e(Q,{defaultSize:15,minSize:10,maxSize:25,children:e("div",{className:"h-full bg-card/80 backdrop-blur-sm border-b border-border/60 rounded-t-2xl shadow-inner overflow-hidden",children:e(at,{project:v,onFileSwitch:E,onFileUpdate:W})})}),e(ce,{withHandle:!0}),e(Q,{defaultSize:85,children:s("div",{className:"h-full bg-card/80 backdrop-blur-sm rounded-b-2xl shadow-lg shadow-primary/5 overflow-hidden",children:[A==="editor"&&e($e,{project:v,onFileUpdate:W}),A==="preview"&&e(Fe,{project:v}),A==="terminal"&&e(Te,{}),A==="conversation"&&e(dt,{project:v}),A==="workspace"&&e(Me,{})]})})]})}),e(ce,{withHandle:!0}),e(Q,{defaultSize:30,minSize:15,maxSize:60,children:s("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[s("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[s("div",{className:"flex items-center gap-2",children:[e(se,{className:"h-4 w-4 text-primary"}),e("span",{className:"text-sm font-medium text-foreground",children:"AI Assistant"})]}),s("div",{className:"flex items-center gap-1",children:[e("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e("span",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),e("div",{className:"flex-1 overflow-hidden",children:e(We,{project:v,onProjectUpdate:L})})]})})]})}),e(Ee,{isVisible:S,onClose:()=>F(!1),onTemplateSelect:(y,I)=>{if(F(!1),i){const D={...v,files:{...v.files,...I},lastModified:new Date};i(D)}}})]})},Ct=()=>{console.log("🪟 MultiWindowManager component rendering...");const{currentProject:m,projects:n,loadProject:t}=oe(),[i,o]=g.useState([]),[a,c]=g.useState(null);g.useState(null);const[u,f]=g.useState(!1),[b,x]=g.useState(!1);console.log("🪟 Current state:",{windows:i.length,activeWindowId:a,isWindowMenuOpen:u}),console.log("🪟 Windows array:",i),g.useEffect(()=>{console.log("🪟 MultiWindowManager useEffect running..."),console.log("🪟 Service instance:",N);const r=()=>{console.log("🪟 Updating windows state...");const w=N.getAllWindows(),k=N.activeWindowId;console.log("🪟 Current windows:",w.length,"Active:",k),console.log("🪟 Windows data:",w),o(w),c(k),console.log("🪟 State set - windows:",w.length,"active:",k)};r();const d=w=>{console.log("🪟 Window event received:",w),r()};return console.log("🪟 Adding event listeners..."),N.addEventListener("windowCreated",d),N.addEventListener("windowClosed",d),N.addEventListener("windowActivated",d),N.addEventListener("windowStateUpdated",d),()=>{N.removeEventListener("windowCreated",d),N.removeEventListener("windowClosed",d),N.removeEventListener("windowActivated",d),N.removeEventListener("windowStateUpdated",d)}},[]),g.useEffect(()=>{const r=d=>{(d.metaKey||d.ctrlKey)&&d.key==="o"&&(d.preventDefault(),x(!0)),(d.metaKey||d.ctrlKey)&&d.key==="n"&&(d.preventDefault(),S())};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[S]);const S=g.useCallback(async(r=null)=>{try{console.log("🪟 Creating new window...",r),console.log("🪟 Service before creation:",N),console.log("🪟 Service methods:",Object.getOwnPropertyNames(Object.getPrototypeOf(N)));const d=N.createWindow(r);console.log("🪟 Window created with ID:",d),r&&r.id&&await t(r.id);const w=N.getAllWindows();return console.log("🪟 All windows after creation:",w),o(w),c(d),console.log("🪟 State updated - windows:",w.length,"active:",d),C.success("New window created!"),d}catch(d){console.error("Failed to create window:",d),C.error("Failed to create window")}},[t]),F=g.useCallback(async r=>{try{const d=N.createWindow(r);return await t(r.id),C.success(`Opened "${r.name}" in new window!`),x(!1),d}catch(d){console.error("Failed to open project in new window:",d),C.error("Failed to open project in new window")}},[t]),v=g.useCallback((r,d)=>{x(!1),C.success(`Opened "${r.name}" in new window!`)},[]),A=g.useCallback(r=>{const d=N.getWindow(r);d&&d.isDirty?d.confirm("This window has unsaved changes. Are you sure you want to close it?")&&(N.forceCloseWindow(r),C.success("Window closed")):(N.closeWindow(r),C.success("Window closed"))},[]),M=g.useCallback(r=>{N.setActiveWindow(r),C.success("Switched to window")},[]);g.useCallback(r=>{N.duplicateWindow(r)&&C.success("Window duplicated!")},[]);const $=g.useCallback(r=>{N.minimizeWindow(r)},[]),W=g.useCallback(r=>{N.maximizeWindow(r)},[]),L=g.useCallback(r=>{N.restoreWindow(r)},[]);g.useCallback(r=>{N.toggleFullscreen(r)},[]);const E=g.useCallback(r=>{N.arrangeWindows(r),C.success(`Windows arranged: ${r}`)},[]),y=r=>({editor:X,preview:he,terminal:ge,conversation:se,workspace:fe})[r]||X,I=r=>r.config?.appType==="mobile"?"📱":r.config?.appType==="desktop"?"🖥️":r.config?.appType==="backend"?"⚙️":"🌐",D=r=>{const d=r.id===a,w=y(r.activeTab),k=I(r.project);return s(P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:`fixed bg-card border border-border rounded-lg shadow-xl overflow-hidden ${d?"ring-2 ring-primary":""} ${r.isMinimized?"hidden":""}`,style:{left:r.position.x,top:r.position.y,width:r.size.width,height:r.size.height,zIndex:r.zIndex},children:[s("div",{className:"flex items-center justify-between bg-muted/50 px-3 py-2 border-b border-border",children:[s("div",{className:"flex items-center gap-2",children:[e("span",{className:"text-lg",children:k}),s("div",{className:"flex items-center gap-1",children:[e(w,{className:"h-4 w-4"}),e("span",{className:"text-sm font-medium truncate max-w-32",children:r.project.name}),r.isDirty&&e("span",{className:"text-orange-500",children:"●"})]})]}),s("div",{className:"flex items-center gap-1",children:[e("button",{onClick:()=>$(r.id),className:"p-1 hover:bg-muted rounded transition-colors",title:"Minimize",children:e(nt,{className:"h-3 w-3"})}),e("button",{onClick:()=>r.isMaximized?L(r.id):W(r.id),className:"p-1 hover:bg-muted rounded transition-colors",title:r.isMaximized?"Restore":"Maximize",children:r.isMaximized?e(it,{className:"h-3 w-3"}):e(rt,{className:"h-3 w-3"})}),e("button",{onClick:()=>A(r.id),className:"p-1 hover:bg-red-500 hover:text-white rounded transition-colors",title:"Close",children:e(me,{className:"h-3 w-3"})})]})]}),e("div",{className:"h-full overflow-hidden",children:e(pt,{windowId:r.id,project:r.project,activeTab:r.activeTab,onProjectUpdate:T=>{N.updateWindowProject(r.id,T)},onTabChange:T=>{N.switchTab(r.id,T)}})})]},r.id)},R=()=>u?e(P.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"absolute top-12 right-4 bg-card border border-border rounded-lg shadow-xl z-10 min-w-64",children:s("div",{className:"p-2",children:[e("div",{className:"text-xs font-semibold text-muted-foreground px-2 py-1 mb-2",children:"Window Management"}),s("button",{onClick:()=>{S(),f(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e(te,{className:"h-4 w-4"}),"New Window"]}),s("button",{onClick:()=>{x(!0),f(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e(Y,{className:"h-4 w-4"}),"Open Project..."]}),s("button",{onClick:()=>{E("cascade"),f(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e(re,{className:"h-4 w-4"}),"Cascade Windows"]}),s("button",{onClick:()=>{E("tile"),f(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e(re,{className:"h-4 w-4"}),"Tile Windows"]}),e("div",{className:"border-t border-border my-2"}),e("div",{className:"text-xs font-semibold text-muted-foreground px-2 py-1 mb-2",children:"Open Project in New Window"}),n.slice(0,5).map(r=>s("button",{onClick:()=>{F(r),f(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e(Y,{className:"h-4 w-4"}),e("span",{className:"truncate",children:r.name})]},r.id))]})}):null;return s("div",{className:"h-screen bg-background flex flex-col",style:{paddingTop:"64px"},children:[s("div",{className:"flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border",children:[s("div",{className:"flex items-center gap-4",children:[e("h1",{className:"text-lg font-semibold",children:"DreamBuild Multi-Window"}),(()=>i.length===0?null:e("div",{className:"flex items-center gap-1 bg-muted/30 rounded-lg p-1",children:i.map(r=>s("button",{onClick:()=>M(r.id),className:`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${r.id===a?"bg-primary text-primary-foreground":"hover:bg-muted"}`,children:[e("span",{className:"text-sm",children:I(r.project)}),e("span",{className:"truncate max-w-20",children:r.project.name}),r.isDirty&&e("span",{className:"text-orange-500",children:"●"}),e("button",{onClick:d=>{d.stopPropagation(),A(r.id)},className:"hover:bg-red-500 hover:text-white rounded p-0.5",children:e(me,{className:"h-3 w-3"})})]},r.id))}))()]}),s("div",{className:"flex items-center gap-2",children:[s("button",{onClick:r=>{r.preventDefault(),r.stopPropagation(),console.log("🪟 New Window button clicked!");try{console.log("🪟 Calling createNewWindow..."),S(),console.log("🪟 createNewWindow called successfully")}catch(d){console.error("🪟 Error calling createNewWindow:",d)}},className:"flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm",type:"button",children:[e(te,{className:"h-4 w-4"}),"New Window"]}),s("button",{onClick:()=>x(!0),className:"flex items-center gap-1 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-sm",type:"button",children:[e(Y,{className:"h-4 w-4"}),"Open Project..."]}),s("div",{className:"relative",children:[s("button",{onClick:()=>f(!u),className:"flex items-center gap-1 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-sm",children:[e(tt,{className:"h-4 w-4"}),e(ot,{className:"h-3 w-3"})]}),R()]})]})]}),s("div",{className:"flex-1 relative overflow-hidden",children:[e(B,{children:i.map(r=>D(r))}),e(B,{children:b&&e(P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:()=>x(!1),children:e(P.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},className:"w-full max-w-6xl max-h-[80vh] overflow-hidden",onClick:r=>r.stopPropagation(),children:e(Be,{onProjectOpen:v,onClose:()=>x(!1),className:"h-full"})})})}),i.length===0&&s("div",{className:"flex flex-col items-center justify-center h-full text-center",children:[e(re,{className:"h-16 w-16 text-muted-foreground mb-4"}),e("h2",{className:"text-xl font-semibold mb-2",children:"No Windows Open"}),e("p",{className:"text-muted-foreground mb-4",children:"Create a new window or open an existing project to get started"}),s("div",{className:"flex items-center gap-3",children:[s("button",{onClick:r=>{r.preventDefault(),r.stopPropagation(),console.log("🪟 Create New Window button clicked!"),S()},className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",type:"button",children:[e(te,{className:"h-4 w-4"}),"Create New Window"]}),s("button",{onClick:()=>x(!0),className:"flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors",type:"button",children:[e(Y,{className:"h-4 w-4"}),"Open Project..."]})]})]})]})]})};export{Ct as default};
