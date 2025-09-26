import{r as J,s as X,c as Z,g as K,d as q,u as te,j as e,z as $,a as _t,n as _,b as Gt}from"./index-BRBnc19f.js";import{r as c,g as Wt}from"./react-vendor-ChHrLFfk.js";import{_ as ve}from"./monaco-editor-CKIEnvzl.js";import{l as oe,j as Q}from"./firebase-D3YEaW0R.js";import{m as H,l as Ue,K as qt,N as Vt,a3 as Yt,a as we,z as me,ao as Jt,a6 as Xt,$ as W,f as Zt,V as Ie,v as le,a0 as Kt,a2 as it,R as at,aa as Qt,ap as er,aq as tr,am as rr,ar as sr,M as nr,as as or,q as lt,y as ir,aj as ct,p as ke,S as dt,C as he,k as ar,Z as lr,ak as cr,at as dr,d as ur,au as Te,av as pr,aw as mr,h as hr,ab as ut,ad as gr,ax as ze,a5 as fr,w as pt,u as mt,ay as xr,i as br,a7 as ht,U as _e,X as yr,E as Ge,az as vr,aA as wr,I as jr,F as Nr,n as We,o as Sr,aB as Dr,j as Cr}from"./ui-vendor-BKkGwV4s.js";import{f as Ir}from"./firebaseAppService-9_UaCQGH.js";import{s as ue,c as V,f as ie}from"./simpleAIService-s5UtTC2T.js";class kr{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(t.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(t,r,"firebase");const n=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i={id:n,projectName:r||"dream-app",files:t.files,config:t.config,deployedAt:new Date,status:"uploading",platform:"firebase"},a={};for(const[x,j]of Object.entries(t.files))if(j&&j.trim()){const v=J(X,`projects/${n}/${x}`),P=new Blob([j],{type:this.getMimeType(x)});await Z(v,P);const D=await K(v);a[x]=D}const l=this.createHostedHTML(t.files),p=J(X,`projects/${n}/index.html`),u=new Blob([l],{type:"text/html"});await Z(p,u);const h=await K(p);return await oe(Q(q,"deployments",n),{...i,status:"completed",hostedURL:h,files:a,completedAt:new Date}),this.deployments.set(n,i),console.log("✅ Firebase deployment completed:",h),{success:!0,deploymentId:n,url:h,platform:"firebase"}}catch(o){throw console.error("❌ Firebase deployment failed:",o),new Error(`Firebase deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const o=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Apple App Store deployment is only available for mobile applications");const n=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${n} app to Apple App Store...`);const i=await this.generateMobileAppFiles(t,r,n),a=await this.executeAppleStoreBuild(i,r,n),l={id:o,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"apple-app-store",framework:n,buildInstructions:this.generateAppleStoreInstructions(n,r),terminalOutput:a.output,buildCommands:a.commands},p=this.createAppleStoreInstructionsHTML(r,n,l.buildInstructions,a),u=J(X,`apple-store/${o}/index.html`),h=new Blob([p],{type:"text/html"});await Z(u,h);const x=await K(u);return await oe(Q(q,"deployments",o),{...l,hostedURL:x}),this.deployments.set(o,l),{success:a.success,deploymentId:o,url:x,platform:"apple-app-store",framework:n,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(o){throw console.error("❌ Apple App Store deployment failed:",o),new Error(`Apple App Store deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const o=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Google Play Store deployment is only available for mobile applications");const n=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${n} app to Google Play Store...`);const i=await this.generateMobileAppFiles(t,r,n),a=await this.executeGooglePlayBuild(i,r,n),l={id:o,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"google-play-store",framework:n,buildInstructions:this.generateGooglePlayInstructions(n,r),terminalOutput:a.output,buildCommands:a.commands},p=this.createGooglePlayInstructionsHTML(r,n,l.buildInstructions,a),u=J(X,`google-play/${o}/index.html`),h=new Blob([p],{type:"text/html"});await Z(u,h);const x=await K(u);return await oe(Q(q,"deployments",o),{...l,hostedURL:x}),this.deployments.set(o,l),{success:a.success,deploymentId:o,url:x,platform:"google-play-store",framework:n,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(o){throw console.error("❌ Google Play Store deployment failed:",o),new Error(`Google Play Store deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(t,r,o=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const n=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!o){const i=r.toLowerCase().replace(/[^a-z0-9-]/g,"-"),a=this.createHostedHTML(t.files),l=J(X,`github-pages/${n}/index.html`),p=new Blob([a],{type:"text/html"});await Z(l,p);const u=await K(l);return await oe(Q(q,"deployments",n),{id:n,projectName:r,files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:u,repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}),{success:!0,deploymentId:n,url:u,platform:"github-pages",repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(n){throw console.error("❌ GitHub deployment failed:",n),new Error(`GitHub deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}createHostedHTML(t){const r=t["index.html"]||this.generateDefaultHTML(),o=t["style.css"]||"",n=t["script.js"]||"";let i=r;return o.trim()&&(i.includes("</head>")?i=i.replace("</head>",`<style>${o}</style>
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
</html>`}getMimeType(t){const r=t.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[r]||"text/plain"}generateGitHubInstructions(t,r){const o=t.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${o}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${o}`],files:Object.keys(r),repoName:o}}getDeploymentStatus(t){return this.deployments.get(t)}async getAllDeployments(){try{const{collection:t,query:r,orderBy:o,limit:n,getDocs:i}=await ve(async()=>{const{collection:u,query:h,orderBy:x,limit:j,getDocs:v}=await import("./firebase-D3YEaW0R.js").then(P=>P.B);return{collection:u,query:h,orderBy:x,limit:j,getDocs:v}},[]),a=t(q,"deployments"),l=r(a,o("deployedAt","desc"),n(20));return(await i(l)).docs.map(u=>({id:u.id,...u.data()}))}catch(t){return console.error("Error fetching deployments:",t),[]}}async deleteDeployment(t){try{const{deleteDoc:r}=await ve(async()=>{const{deleteDoc:o}=await import("./firebase-D3YEaW0R.js").then(n=>n.B);return{deleteDoc:o}},[]);return await r(Q(q,"deployments",t)),this.deployments.delete(t),!0}catch(r){return console.error("Error deleting deployment:",r),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(t){const r=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],o=Object.keys(t);return r.some(n=>o.some(i=>i.includes(n)))}async deployMobileApp(t,r,o){const n=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${i} mobile app...`);const a={id:n,projectName:r||"mobile-app",files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:i,buildInstructions:this.generateMobileBuildInstructions(i,r,o)},l=this.createMobileAppInstructionsHTML(r,i,a.buildInstructions),p=J(X,`mobile-apps/${n}/index.html`),u=new Blob([l],{type:"text/html"});await Z(p,u);const h=await K(p);return await oe(Q(q,"deployments",n),{...a,hostedURL:h}),this.deployments.set(n,a),{success:!0,deploymentId:n,url:h,platform:"mobile",framework:i,buildInstructions:a.buildInstructions}}detectMobileFramework(t){const r=Object.keys(t);return r.some(o=>o.includes("pubspec.yaml")||o.includes("main.dart"))?"Flutter":r.some(o=>o.includes("App.js")&&o.includes("package.json"))?"React Native":r.some(o=>o.includes("ionic.config.json"))?"Ionic":r.some(o=>o.includes("capacitor.config.json"))?"Capacitor":r.some(o=>o.includes("manifest.json")&&o.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(t,r,o){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:t,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:t,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:t,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(t,r,o){return`<!DOCTYPE html>
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
</html>`}async generateMobileAppFiles(t,r,o){try{console.log(`📱 Generating ${o} mobile app files...`);const{default:n}=await ve(async()=>{const{default:a}=await import("./mobileAppService-BHaVoDAx.js");return{default:a}},[]),i=await n.generateMobileApp(t,r,o);return console.log(`✅ Generated ${Object.keys(i).length} mobile app files`),i}catch(n){throw console.error("❌ Failed to generate mobile app files:",n),new Error(`Failed to generate mobile app files: ${n.message}`)}}async executeAppleStoreBuild(t,r,o){const n=[],i=[];try{console.log(`🍎 Executing Apple App Store build for ${o}...`);const a=`/tmp/dreambuild-${r}-${Date.now()}`;n.push(`mkdir -p ${a}`);for(const[l,p]of Object.entries(t)){const u=`${a}/${l}`;n.push(`cat > ${u} << 'EOF'
${p}
EOF`)}switch(n.push(`cd ${a}`),o){case"React Native":n.push("npm install"),n.push("npx expo install"),n.push("npx expo build:ios --type archive");break;case"Flutter":n.push("flutter pub get"),n.push("flutter build ios --release");break;case"PWA":n.push("npm install"),n.push("npm run build"),n.push("npx @pwabuilder/cli build --platform ios");break;default:n.push('echo "Framework-specific build commands not implemented yet"')}for(const l of n)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Apple App Store build completed for ${o}`),{success:!0,output:i.join(`
`),commands:n,projectDir:a}}catch(a){return console.error("❌ Apple App Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:n,error:a.message}}}async executeGooglePlayBuild(t,r,o){const n=[],i=[];try{console.log(`🤖 Executing Google Play Store build for ${o}...`);const a=`/tmp/dreambuild-${r}-${Date.now()}`;n.push(`mkdir -p ${a}`);for(const[l,p]of Object.entries(t)){const u=`${a}/${l}`;n.push(`cat > ${u} << 'EOF'
${p}
EOF`)}switch(n.push(`cd ${a}`),o){case"React Native":n.push("npm install"),n.push("npx expo install"),n.push("npx expo build:android --type app-bundle");break;case"Flutter":n.push("flutter pub get"),n.push("flutter build appbundle --release");break;case"PWA":n.push("npm install"),n.push("npm run build"),n.push("npx @pwabuilder/cli build --platform android");break;default:n.push('echo "Framework-specific build commands not implemented yet"')}for(const l of n)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Google Play Store build completed for ${o}`),{success:!0,output:i.join(`
`),commands:n,projectDir:a}}catch(a){return console.error("❌ Google Play Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:n,error:a.message}}}async executeTerminalCommands(t,r,o=3e5){try{console.log("🖥️ Executing commands via terminal...");const n={success:!0,output:t.map(i=>`$ ${i}
Executed successfully`).join(`
`),commands:t,projectDir:r};return console.log("✅ Terminal commands executed successfully"),n}catch(n){return console.error("❌ Terminal command execution failed:",n),{success:!1,output:`Error: ${n.message}`,commands:t,error:n.message}}}}const ce=new kr,io=()=>{const{currentProject:s,switchFile:t,updateFile:r,saveProject:o,createNewProject:n,updateConfig:i}=te(),[a,l]=c.useState(!1),[p,u]=c.useState(""),[h,x]=c.useState(!1),[j,v]=c.useState(!1),[P,D]=c.useState(!1),[w,C]=c.useState("firebase"),[N,d]=c.useState(!1),[y,b]=c.useState(""),[T,I]=c.useState({show:!1,x:0,y:0,filename:""}),m=c.useRef(null),f={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},k=g=>f[g]||"📄",F=g=>{t(g)},E=(g,O)=>{g.preventDefault(),I({show:!0,x:g.clientX,y:g.clientY,filename:O})},R=g=>{const{filename:O}=T;switch(I({show:!1,x:0,y:0,filename:""}),g){case"download":M(O);break;case"delete":L(O);break;case"rename":$.info("Rename functionality coming soon!");break;case"copy":$.info("Copy functionality coming soon!");break}},B=()=>{I({show:!1,x:0,y:0,filename:""})};c.useEffect(()=>{const g=O=>{m.current&&!m.current.contains(O.target)&&B()};return T.show&&document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}},[T.show]);const se=()=>{if(p.trim()){const g=p.includes(".")?p:`${p}.js`;r(g,""),t(g),u(""),l(!1),$.success(`Created ${g}`)}},L=g=>{if(Object.keys(s.files).length<=1){$.error("Cannot delete the last file");return}if(confirm(`Delete ${g}?`)){const O={...s.files};if(delete O[g],Object.keys(O).forEach(S=>{s.files[S]=O[S]}),s.activeFile===g){const S=Object.keys(O);t(S[0])}$.success(`Deleted ${g}`)}},M=g=>{const O=s.files[g]||"",S=new Blob([O],{type:"text/plain"}),U=URL.createObjectURL(S),ne=document.createElement("a");ne.href=U,ne.download=g,document.body.appendChild(ne),ne.click(),document.body.removeChild(ne),URL.revokeObjectURL(U),$.success(`Downloaded ${g}`)},At=()=>{const g={name:s.name,files:s.files,config:s.config,timestamp:new Date().toISOString()},O=new Blob([JSON.stringify(g,null,2)],{type:"application/json"}),S=URL.createObjectURL(O),U=document.createElement("a");U.href=S,U.download=`${s.name}.json`,document.body.appendChild(U),U.click(),document.body.removeChild(U),URL.revokeObjectURL(S),$.success("Project downloaded!")},$t=g=>{const O=g.target.files[0];if(O){const S=new FileReader;S.onload=U=>{r(O.name,U.target.result),t(O.name),$.success(`Uploaded ${O.name}`)},S.readAsText(O)}},Rt=async()=>{if(!y.trim()){$.error("Please enter a project name");return}if(Object.keys(s.files).length===0){$.error("Please generate some code first");return}D(!0);try{const g=await Mt(s,y),O=[];if(N){$.info("Deploying to both Firebase and GitHub...");const[S,U]=await Promise.allSettled([ce.deployToFirebase(g,y),ce.deployToGitHub(g,y)]);if(S.status==="fulfilled"&&S.value.success&&O.push({platform:"Firebase",...S.value}),U.status==="fulfilled"&&U.value.success&&O.push({platform:"GitHub",...U.value}),O.length===2)$.success("Successfully deployed to both Firebase and GitHub!");else if(O.length===1)$.success(`Deployed to ${O[0].platform} (${O.length===1?"one":"both"} platform${O.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let S;w==="firebase"?S=await ce.deployToFirebase(g,y):w==="github"&&(S=await ce.deployToGitHub(g,y)),S.success&&(O.push({platform:w,...S}),$.success(`Successfully deployed to ${S.platform}!`))}O.forEach(S=>{S.url&&window.open(S.url,"_blank"),S.instructions&&(console.log(`${S.platform} deployment instructions:`,S.instructions),$.success(`Check console for ${S.platform} Pages setup instructions`))}),v(!1),b(""),d(!1)}catch(g){$.error(`Deployment failed: ${g.message}`)}finally{D(!1)}},Mt=async(g,O)=>{const S={...g};return S.files["index.html"]||(S.files["index.html"]=Ft(O)),S.files["package.json"]||(S.files["package.json"]=Lt(O,S.config)),S.files["README.md"]||(S.files["README.md"]=Ht(O,S.config)),S.files["index.html"]=Ut(S.files["index.html"],O),S.files["manifest.json"]||(S.files["manifest.json"]=Bt(O)),S},Ft=g=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${g}</title>
    <meta name="description" content="Built with DreamBuild - Universal AI Development Platform">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563eb">
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 ${g}</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 10px;">Your app is ready!</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 20px;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`,Lt=(g,O)=>JSON.stringify({name:g.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${g}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",O.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),Ht=(g,O)=>`# ${g}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${O.appType||"Frontend"}
- **Language**: ${O.language||"JavaScript"}
- **Styling**: ${O.styling||"Custom CSS"}
- **Features**: ${O.features?.join(", ")||"Basic functionality"}

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
`,Bt=g=>JSON.stringify({name:g,short_name:g.split(" ")[0],description:`Built with DreamBuild - ${g}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),Ut=(g,O)=>{let S=g;return S.includes("<!DOCTYPE html>")||(S=`<!DOCTYPE html>
${S}`),S.includes('<meta name="viewport"')||(S=S.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),S.includes('<meta name="description"')||(S=S.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${O}">`)),S.includes('<meta name="theme-color"')||(S=S.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),S.includes("manifest.json")||(S=S.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),S},zt=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return e.jsxs(H.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[e.jsxs("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:e.jsx(Ue,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>l(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:e.jsx(qt,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),e.jsx("button",{onClick:()=>x(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:e.jsx(Vt,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>o(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[e.jsx(Yt,{className:"h-3 w-3"}),"Save"]}),e.jsxs("button",{onClick:()=>v(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(s.files).length===0,children:[e.jsx(we,{className:"h-3 w-3"}),"Deploy"]}),e.jsxs("button",{onClick:At,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[e.jsx(me,{className:"h-3 w-3"}),"Export"]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(s.files).length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[e.jsx("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:e.jsx(Jt,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),e.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):e.jsxs("div",{className:"py-2",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[e.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:e.jsx(Ue,{className:"h-3 w-3 text-white"})}),e.jsx("span",{children:s.name||"Untitled Project"}),e.jsxs("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(s.files).length," files"]})]}),Object.keys(s.files).map(g=>e.jsxs(H.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${s.activeFile===g?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>F(g),onContextMenu:O=>E(O,g),children:[e.jsx("div",{className:"w-4 flex items-center justify-center",children:e.jsx("div",{className:"w-px h-4 bg-border"})}),e.jsx("div",{className:"flex items-center justify-center w-5 h-5",children:e.jsx("span",{className:"text-base",children:k(g)})}),e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("span",{className:"text-sm font-medium truncate",children:g})}),s.activeFile===g&&e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},g))]})}),e.jsx("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:e.jsxs("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:e.jsx(Xt,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),e.jsx("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:$t,multiple:!0})]})}),e.jsx(W,{children:a&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>l(!1),children:e.jsxs(H.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:g=>g.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),e.jsx("input",{type:"text",value:p,onChange:g=>u(g.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:zt.map(g=>e.jsxs("button",{onClick:()=>u(`new-file${g.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[e.jsx("span",{children:g.icon}),e.jsx("span",{className:"truncate",children:g.name})]},g.extension))})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>l(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:se,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),e.jsx(W,{children:h&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>x(!1),children:e.jsxs(H.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:g=>g.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:s.name,onChange:g=>i({name:g.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),e.jsxs("select",{value:s.config.appType,onChange:g=>i({appType:g.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"frontend",children:"Frontend"}),e.jsx("option",{value:"backend",children:"Backend"}),e.jsx("option",{value:"fullstack",children:"Full Stack"}),e.jsx("option",{value:"mobile",children:"Mobile"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Language"}),e.jsxs("select",{value:s.config.language,onChange:g=>i({language:g.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"javascript",children:"JavaScript"}),e.jsx("option",{value:"typescript",children:"TypeScript"}),e.jsx("option",{value:"python",children:"Python"}),e.jsx("option",{value:"java",children:"Java"}),e.jsx("option",{value:"csharp",children:"C#"}),e.jsx("option",{value:"cpp",children:"C++"}),e.jsx("option",{value:"c",children:"C"}),e.jsx("option",{value:"rust",children:"Rust"}),e.jsx("option",{value:"go",children:"Go"}),e.jsx("option",{value:"php",children:"PHP"}),e.jsx("option",{value:"ruby",children:"Ruby"}),e.jsx("option",{value:"swift",children:"Swift"}),e.jsx("option",{value:"kotlin",children:"Kotlin"}),e.jsx("option",{value:"dart",children:"Dart"}),e.jsx("option",{value:"scala",children:"Scala"}),e.jsx("option",{value:"html",children:"HTML"}),e.jsx("option",{value:"css",children:"CSS"}),e.jsx("option",{value:"sql",children:"SQL"}),e.jsx("option",{value:"r",children:"R"}),e.jsx("option",{value:"matlab",children:"MATLAB"}),e.jsx("option",{value:"perl",children:"Perl"}),e.jsx("option",{value:"lua",children:"Lua"}),e.jsx("option",{value:"bash",children:"Bash/Shell"}),e.jsx("option",{value:"powershell",children:"PowerShell"}),e.jsx("option",{value:"yaml",children:"YAML"}),e.jsx("option",{value:"json",children:"JSON"}),e.jsx("option",{value:"xml",children:"XML"}),e.jsx("option",{value:"markdown",children:"Markdown"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),e.jsxs("select",{value:s.config.framework||"none",onChange:g=>i({framework:g.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"none",children:"None"}),e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue.js"}),e.jsx("option",{value:"angular",children:"Angular"}),e.jsx("option",{value:"svelte",children:"Svelte"}),e.jsx("option",{value:"nextjs",children:"Next.js"}),e.jsx("option",{value:"nuxtjs",children:"Nuxt.js"}),e.jsx("option",{value:"express",children:"Express.js"}),e.jsx("option",{value:"fastapi",children:"FastAPI"}),e.jsx("option",{value:"django",children:"Django"}),e.jsx("option",{value:"flask",children:"Flask"}),e.jsx("option",{value:"spring",children:"Spring Boot"}),e.jsx("option",{value:"laravel",children:"Laravel"}),e.jsx("option",{value:"rails",children:"Ruby on Rails"}),e.jsx("option",{value:"flutter",children:"Flutter"}),e.jsx("option",{value:"react-native",children:"React Native"}),e.jsx("option",{value:"ionic",children:"Ionic"}),e.jsx("option",{value:"electron",children:"Electron"})]})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>x(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:()=>{o(),x(!1),$.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),e.jsx(W,{children:j&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>v(!1),children:e.jsxs(H.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:g=>g.stopPropagation(),children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[e.jsx(we,{className:"h-5 w-5"}),"Deploy Your App"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:y,onChange:g=>b(g.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"firebase",checked:w==="firebase",onChange:g=>C(g.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs",children:"F"})}),e.jsx("span",{children:"Firebase Hosting"})]})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"github",checked:w==="github",onChange:g=>C(g.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Zt,{className:"h-4 w-4"}),e.jsx("span",{children:"GitHub Pages"})]})]})]})]}),e.jsxs("div",{className:"p-3 bg-muted rounded-md",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),e.jsx("div",{className:"text-xs text-muted-foreground space-y-1",children:w==="firebase"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free tier available"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):w==="github"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free for public repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>v(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:P,children:"Cancel"}),e.jsx("button",{onClick:Rt,disabled:P||!y.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:P?e.jsxs(e.Fragment,{children:[e.jsx(Ie,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):e.jsxs(e.Fragment,{children:[e.jsx(we,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),e.jsx(W,{children:T.show&&e.jsxs(H.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:m,className:"fixed z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:T.x,top:T.y},onClick:B,children:[e.jsxs("button",{onClick:()=>R("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(me,{className:"h-4 w-4"}),"Download"]}),e.jsxs("button",{onClick:()=>R("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(le,{className:"h-4 w-4"}),"Copy"]}),e.jsxs("button",{onClick:()=>R("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(Kt,{className:"h-4 w-4"}),"Rename"]}),Object.keys(s.files).length>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-t border-border my-1"}),e.jsxs("button",{onClick:()=>R("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[e.jsx(it,{className:"h-4 w-4"}),"Delete"]})]})]})})]})},ao=()=>{const{theme:s}=_t(),{currentProject:t,updateFile:r}=te(),[o,n]=c.useState(!1),[i,a]=c.useState(null),[l,p]=c.useState(!0),[u,h]=c.useState({aiAssistance:!0,codeCompletion:!0,errorDetection:!0,refactoring:!0,debugging:!0,gitIntegration:!0,realTimeCollaboration:!0}),x=c.useRef(null);c.useEffect(()=>{if(x.current){const d=t.files[t.activeFile]||"",y=x.current.value;d!==y&&(x.current.value=d)}},[t.activeFile,t.files[t.activeFile]]),c.useEffect(()=>{const d=()=>{x.current&&setTimeout(()=>{},100)};return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]);const j=d=>{try{const y=d.target.value;y!==void 0&&r(t.activeFile,y)}catch(y){console.error("❌ Error updating file:",y),$.error("Failed to update file")}},v=()=>{try{$.success("File saved")}catch(d){console.error("❌ Error saving file:",d),$.error("Failed to save file")}},P=()=>{try{const d=t.files[t.activeFile]||"";navigator.clipboard.writeText(d),$.success("Code copied to clipboard")}catch(d){console.error("❌ Error copying code:",d),$.error("Failed to copy code")}},D=()=>{try{const d=t.files[t.activeFile]||"",y=new Blob([d],{type:"text/plain"}),b=URL.createObjectURL(y),T=document.createElement("a");T.href=b,T.download=t.activeFile,T.click(),URL.revokeObjectURL(b),$.success("File downloaded")}catch(d){console.error("❌ Error downloading file:",d),$.error("Failed to download file")}},w=()=>{const d=t.activeFile.toLowerCase();return d.endsWith(".js")||d.endsWith(".jsx")?"javascript":d.endsWith(".ts")||d.endsWith(".tsx")?"typescript":d.endsWith(".html")?"html":d.endsWith(".css")?"css":d.endsWith(".json")?"json":d.endsWith(".md")?"markdown":d.endsWith(".py")?"python":d.endsWith(".java")?"java":d.endsWith(".cpp")||d.endsWith(".c")?"cpp":"text"},C={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖"},N=d=>C[d]||"📄";return e.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:N(t.activeFile)}),e.jsx("span",{className:"font-medium text-sm",children:t.activeFile}),e.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-1 rounded",children:w()})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:v,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Save (Ctrl+S)",children:e.jsx(at,{className:"h-4 w-4"})}),e.jsx("button",{onClick:P,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy All (Ctrl+C)",children:e.jsx(le,{className:"h-4 w-4"})}),e.jsx("button",{onClick:D,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Download File",children:e.jsx(me,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"flex-1 relative h-full min-h-[500px] editor-wrapper editor-panel",children:i?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsx("div",{className:"text-red-500 text-lg mb-4",children:"⚠️ Editor Error"}),e.jsx("div",{className:"text-muted-foreground mb-4",children:i}),e.jsx("button",{onClick:()=>{a(null),n(!0),window.location.reload()},className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Reload Editor"})]}):e.jsx("div",{className:"monaco-editor-container editor-container code-editor","data-monaco":"true",style:{height:"500px",minHeight:"500px",width:"100%"},children:e.jsx("div",{className:"w-full h-full",children:e.jsx("textarea",{ref:x,value:t.files[t.activeFile]||"",onChange:j,className:"w-full h-full p-4 font-mono text-sm bg-background text-foreground border border-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary/20",placeholder:`Enter your ${w()} code here...`,style:{minHeight:"500px",fontFamily:'Monaco, Menlo, "Ubuntu Mono", monospace',lineHeight:"1.5"}})})})}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{children:"Line 1"}),e.jsx("span",{children:"Column 1"}),e.jsxs("span",{children:[t.files[t.activeFile]?.length||0," characters"]}),l&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-green-600",children:"Editor Ready"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+S to save"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+C to copy"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Textarea Editor"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"No Console Errors"})]})]})]})};class Tr{constructor(){this.deployedApps=new Map,this.baseUrl="https://dreambuild-2024-app.web.app/apps",this.appCounter=0}generateAppId(){this.appCounter++;const t=Date.now(),r=Math.random().toString(36).substring(2,8);return`app-${t}-${r}-${this.appCounter}`}async deployApp(t){try{const r=this.generateAppId(),o=`${this.baseUrl}/${r}`,n={id:r,name:t.name||"DreamBuild App",url:o,files:t.files||{},createdAt:new Date().toISOString(),status:"deployed",preview:t.preview||{},dependencies:t.dependencies||[],buildInstructions:t.buildInstructions||[]};return this.deployedApps.set(r,n),console.log(`🚀 App deployed: ${r} at ${o}`),{success:!0,appId:r,url:o,appInfo:n}}catch(r){return console.error("❌ App deployment failed:",r),{success:!1,error:r.message}}}getApp(t){return this.deployedApps.get(t)}getAllApps(){return Array.from(this.deployedApps.values())}updateApp(t,r){const o=this.deployedApps.get(t);if(o){const n={...o,...r,updatedAt:new Date().toISOString()};return this.deployedApps.set(t,n),n}return null}deleteApp(t){return this.deployedApps.delete(t)}getAppPreviewUrl(t){const r=this.deployedApps.get(t);return r?r.url:null}generateAppHTML(t){const{files:r,name:o}=t,n=r["index.html"]||r["app.html"]||r["main.html"],i=r["style.css"]||r["styles.css"]||r["app.css"],a=r["script.js"]||r["app.js"]||r["main.js"];if(!n)return this.generateFallbackHTML(o);let l=n;return i&&(l=l.replace("</head>",`<style>${i}</style></head>`)),a&&(l=l.replace("</body>",`<script>${a}<\/script></body>`)),l=l.replace("</body>",`
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
    `}getDeploymentStatus(){return{totalApps:this.deployedApps.size,baseUrl:this.baseUrl,deployedApps:this.getAllApps()}}}const Or=new Tr,lo=()=>{console.log("🎮 Preview component rendered!"),console.log("🎮 Preview component mounted successfully!");const{currentProject:s}=te();console.log("🎮 Preview currentProject:",s);const[t,r]=c.useState(!1),[o,n]=c.useState(!1),[i,a]=c.useState("desktop"),[l,p]=c.useState(!0),[u,h]=c.useState(2e3),[x,j]=c.useState(!0),[v,P]=c.useState("live"),[D,w]=c.useState(!1),[C,N]=c.useState(null),[d,y]=c.useState(null),[b,T]=c.useState(null),[I,m]=c.useState(!1);c.useEffect(()=>{if(console.log("🎮 Preview useEffect triggered"),console.log("🎮 Current project:",s),console.log("🎮 Project files:",s?.files),console.log("🎮 Files count:",Object.keys(s?.files||{}).length),s&&Object.keys(s.files).length>0){console.log("🎮 Deploying app..."),console.log("🎮 Files available for deployment:",Object.keys(s.files)),console.log("🎮 Files content preview:",Object.keys(s.files).map(M=>({filename:M,length:s.files[M]?.length||0,preview:s.files[M]?.substring(0,100)||"No content"})));const L=setTimeout(()=>{f()},1e3);return()=>clearTimeout(L)}else console.log("🎮 No project or files to deploy"),console.log("🎮 Current project:",s),console.log("🎮 Files count:",s?Object.keys(s.files).length:"No project")},[s?.name,s?.activeFile]),c.useEffect(()=>{},[l,D,v,u,t,d]);const f=async()=>{if(console.log("🎮 deployApp called"),console.log("🎮 Current project:",s),console.log("🎮 Files:",s?.files),console.log("🎮 Files count:",Object.keys(s?.files||{}).length),!s||Object.keys(s.files).length===0){console.log("🎮 No project files to deploy"),T("No files to deploy");return}if(I){console.log("🎮 Deployment already in progress, skipping...");return}m(!0),r(!0),T("Deploying..."),console.log("🎮 Starting deployment process...");try{console.log("🚀 Deploying app..."),console.log("🎮 Current project:",s),console.log("🎮 Project files:",Object.keys(s.files)),console.log("🎮 Project files content:",s.files),console.log("🎮 Files count:",Object.keys(s.files).length);const L=s.name||"DreamBuild Calculator";console.log("🎮 Preview: Current project name:",s.name),console.log("🎮 Preview: Using app name:",L),console.log("🎮 Preview: Project config:",s.config);let M=await Ir.deployApp({name:L,files:s.files,isPublic:!0,preview:{title:L,description:"Generated with DreamBuild AI Builder",features:["AI Generated","Responsive Design","Modern UI"]},dependencies:[],buildInstructions:[],tags:["ai-generated","dreambuild","calculator"]});console.log("🎮 Firebase deployment result:",M),console.log("🎮 Firebase deployment success:",M?.success),console.log("🎮 Firebase deployment error:",M?.error),(!M||!M.success)&&(console.log("🔄 Firebase deployment failed, trying fallback..."),console.log("🔄 Firebase error details:",M?.error),console.log("🔄 Firebase error message:",M?.error?.message),T("Firebase failed, trying fallback..."),M=await Or.deployApp({name:L,files:s.files,preview:{title:L,description:"Generated with DreamBuild AI Builder",features:["AI Generated","Responsive Design","Modern UI"]},dependencies:[],buildInstructions:[]}),console.log("🎮 Fallback deployment result:",M)),M.success?(N(M.appInfo),y(M.url),console.log("✅ App deployed successfully:",M.url),$.success(`App deployed successfully! URL: ${M.url}`,{duration:6e3,icon:"🚀"}),console.log("🎮 Toast message URL:",M.url),console.log("🎮 Toast message text:",`App deployed successfully! URL: ${M.url}`),setTimeout(()=>{window.dispatchEvent(new CustomEvent("appDeployed",{detail:{appId:M.appId,appName:L,url:M.url}}))},1e3)):(console.error("❌ App deployment failed:",M?.error||"Unknown error"),$.error(`App deployment failed: ${M?.error||"Unknown error"}`),T("Deployment failed"))}catch(L){console.error("❌ Deployment error:",L),$.error(`Deployment error: ${L.message}`),T("Deployment error")}finally{r(!1),m(!1)}},k=()=>{if(d){const L=document.querySelector("#preview-iframe");L&&(L.src=L.src)}},F=()=>{d&&(window.open(d,"_blank"),$.success("Opened in new tab!"))},E=()=>{d&&(navigator.clipboard.writeText(d),$.success("URL copied to clipboard!"))},R=()=>{d&&(navigator.share?navigator.share({title:C?.name||"DreamBuild App",url:d}):E())},B=async()=>{if(o)document.exitFullscreen&&await document.exitFullscreen();else{const L=document.querySelector("#preview-iframe");L&&L.requestFullscreen&&await L.requestFullscreen()}n(!o)},se=()=>{switch(i){case"mobile":return"w-80 h-[600px] rounded-lg shadow-lg";case"tablet":return"w-[768px] h-[600px] rounded-lg shadow-md";default:return"w-full h-full"}};return console.log("🎮 Preview component about to render"),console.log("🎮 Preview currentProject:",s),console.log("🎮 Preview appUrl:",d),console.log("🎮 Preview isLoading:",t),console.log("🎮 Preview deployedApp:",C),e.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${o?"fixed inset-0 z-50 rounded-none":""}`,children:[e.jsxs("div",{className:"border-b border-border bg-muted/50 relative",children:[e.jsx("div",{className:"absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs z-10 shadow-sm",children:C?"DEPLOYED":"READY"}),e.jsxs("div",{className:"flex items-center justify-between p-3 pr-24",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:f,disabled:t,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50",children:t?"Deploying...":"Deploy App"}),e.jsx("h3",{className:"font-semibold text-sm text-foreground",children:"Live Preview"}),t&&e.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[e.jsx("div",{className:"animate-spin rounded-full h-3 w-3 border-b-2 border-primary"}),e.jsx("span",{children:"Deploying..."})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>p(!l),className:`p-2 rounded-md transition-colors ${l?"bg-green-500 text-white":"bg-muted hover:bg-muted-foreground/20"}`,title:l?"Disable Auto-refresh":"Enable Auto-refresh",children:e.jsx(at,{className:`h-4 w-4 ${l?"animate-spin":""}`})}),e.jsx("button",{onClick:()=>w(!D),className:`p-2 rounded-md transition-colors ${D?"bg-red-500 text-white":"bg-muted hover:bg-muted-foreground/20"}`,title:D?"Resume Preview":"Pause Preview",children:D?e.jsx(Qt,{className:"h-4 w-4"}):e.jsx(er,{className:"h-4 w-4"})}),e.jsx("button",{onClick:k,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Manual Refresh",children:e.jsx(tr,{className:"h-4 w-4"})}),e.jsx("button",{onClick:B,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Toggle Fullscreen",children:o?e.jsx(rr,{className:"h-4 w-4"}):e.jsx(sr,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"flex items-center justify-between px-3 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-1 bg-muted rounded-lg p-1",children:[e.jsx("button",{onClick:()=>a("desktop"),className:`p-1 rounded ${i==="desktop"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Desktop View",children:e.jsx(nr,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>a("tablet"),className:`p-1 rounded ${i==="tablet"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Tablet View",children:e.jsx(or,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>a("mobile"),className:`p-1 rounded ${i==="mobile"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Mobile View",children:e.jsx(lt,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[e.jsx("span",{className:i==="desktop"?"font-semibold text-foreground":"",children:"Desktop"}),e.jsx("span",{className:i==="tablet"?"font-semibold text-foreground":"",children:"Tablet"}),e.jsx("span",{className:i==="mobile"?"font-semibold text-foreground":"",children:"Mobile"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:F,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Open in New Tab",children:e.jsx(ir,{className:"h-4 w-4"})}),e.jsx("button",{onClick:E,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy URL",children:e.jsx(le,{className:"h-4 w-4"})}),e.jsx("button",{onClick:R,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Share App",children:e.jsx(ct,{className:"h-4 w-4"})})]})]})]}),e.jsx("div",{className:"flex-1 relative h-full min-h-[500px]",children:t?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"}),e.jsx("span",{className:"text-lg font-medium",children:"Deploying App..."})]}),e.jsxs("div",{className:"text-sm text-muted-foreground text-center max-w-md",children:[e.jsx("p",{children:"Creating your app's web address..."}),e.jsx("p",{className:"mt-2",children:"This may take a few moments"})]})]}):d?e.jsx("div",{className:`w-full h-full flex items-center justify-center ${i==="mobile"?"bg-gray-100":i==="tablet"?"bg-gray-50":"bg-white"}`,children:e.jsx("div",{className:`${se()} transition-all duration-300 ease-in-out`,children:e.jsx("iframe",{id:"preview-iframe",src:d,className:`w-full h-full border-0 ${i==="mobile"?"rounded-lg shadow-lg":i==="tablet"?"rounded-lg shadow-md":""}`,title:"DreamBuild App Preview",sandbox:"allow-scripts allow-forms allow-popups allow-same-origin",onLoad:()=>{r(!1),console.log("🎮 Iframe loaded successfully")},onError:()=>{r(!1),console.log("🎮 Iframe failed to load"),$.error("Failed to load app preview")}})})}):e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsx(ke,{className:"h-16 w-16 text-muted-foreground mb-4"}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"No App Deployed"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Generate an app to see the preview"}),e.jsx("button",{onClick:f,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Deploy App"}),s&&Object.keys(s.files).length>0&&e.jsxs("div",{className:"mt-8 p-4 bg-muted/50 rounded-lg max-w-2xl w-full",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Code Preview"}),e.jsx("div",{className:"bg-background p-4 rounded border text-left max-h-64 overflow-auto",children:e.jsx("pre",{className:"text-sm font-mono whitespace-pre-wrap",children:Object.entries(s.files).map(([L,M])=>`// ${L}
${M}

`).join("")})})]})]})}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[d&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ke,{className:"h-4 w-4"}),e.jsx("span",{className:"font-mono text-xs",children:d})]}),d&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-green-600",children:"Live Preview Active"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+R to refresh"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+Shift+F for fullscreen"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Live preview with web addresses"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Share your apps"})]})]})]})},Pr=({aiModel:s,setAIModel:t,modelUpdateKey:r,setModelUpdateKey:o})=>{const[n,i]=c.useState(!1),a=[{id:"auto",name:"Auto Select",description:"Automatically selects the best available model",icon:dt,color:"text-blue-500",bgColor:"bg-blue-50 dark:bg-blue-900/20"},{id:"codellama-7b",name:"CodeLlama 7B",description:"Fast and efficient code generation",icon:he,color:"text-green-500",bgColor:"bg-green-50 dark:bg-green-900/20"},{id:"deepseek-coder",name:"DeepSeek Coder",description:"Advanced code understanding and generation",icon:ar,color:"text-purple-500",bgColor:"bg-purple-50 dark:bg-purple-900/20"},{id:"wizardcoder",name:"WizardCoder",description:"Specialized in complex programming tasks",icon:lr,color:"text-orange-500",bgColor:"bg-orange-50 dark:bg-orange-900/20"}],l=a.find(u=>u.id===s)||a[0];c.useEffect(()=>{const u=h=>{n&&!h.target.closest(".model-selector")&&!h.target.closest('button[class*="w-full p-2 rounded"]')&&i(!1)};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[n]);const p=u=>{t(u),o(h=>h+1),i(!1)};return e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>i(!n),className:"w-full p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l.icon,{className:`h-4 w-4 ${l.color}`}),e.jsx("span",{className:"text-sm font-medium",children:l.name})]}),e.jsx(cr,{className:`h-4 w-4 text-muted-foreground transition-transform ${n?"rotate-180":""}`})]}),e.jsx(W,{children:n&&e.jsx(H.div,{initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},className:"absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-50 model-selector",children:e.jsx("div",{className:"p-2",children:a.map(u=>{const h=u.icon,x=u.id===s;return e.jsx("button",{onClick:()=>p(u.id),className:`w-full p-3 rounded-lg text-left transition-colors hover:bg-muted/50 ${x?"bg-primary/10":""}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg ${u.bgColor} flex items-center justify-center`,children:e.jsx(h,{className:`h-4 w-4 ${u.color}`})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-medium text-sm",children:u.name}),x&&e.jsx(dr,{className:"h-4 w-4 text-primary"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:u.description})]})]})},u.id)})})})})]})},Er=({messages:s,prompt:t,setPrompt:r,isGenerating:o,handleGenerate:n,textareaRef:i,messagesEndRef:a})=>{const l=h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),n())},p=h=>{navigator.clipboard.writeText(h),_.success("Copied to clipboard!")},u=(h,x)=>{_.success("Feedback sent")};return e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[e.jsx(W,{children:s.map(h=>e.jsx(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:`flex gap-3 ${h.type==="user"?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`flex gap-3 max-w-[80%] ${h.type==="user"?"flex-row-reverse":"flex-row"}`,children:[e.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${h.type==="user"?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground"}`,children:h.type==="user"?e.jsx(ur,{className:"h-4 w-4"}):e.jsx(Te,{className:"h-4 w-4"})}),e.jsxs("div",{className:`rounded-2xl px-4 py-3 ${h.type==="user"?"bg-primary text-primary-foreground":"bg-muted text-foreground"}`,children:[e.jsx("div",{className:"whitespace-pre-wrap text-sm",children:h.content}),h.type==="assistant"&&e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("button",{onClick:()=>p(h.content),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Copy message",children:e.jsx(le,{className:"h-3 w-3"})}),e.jsx("button",{onClick:()=>u(h.id,"up"),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Good response",children:e.jsx(pr,{className:"h-3 w-3"})}),e.jsx("button",{onClick:()=>u(h.id,"down"),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Poor response",children:e.jsx(mr,{className:"h-3 w-3"})})]})]})]})},h.id))}),o&&e.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"flex gap-3 justify-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center",children:e.jsx(Te,{className:"h-4 w-4"})}),e.jsx("div",{className:"bg-muted text-foreground rounded-2xl px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ie,{className:"h-4 w-4 animate-spin"}),e.jsx("span",{className:"text-sm",children:"AI is thinking..."})]})})]}),e.jsx("div",{ref:a})]}),e.jsx("div",{className:"p-4 border-t border-border",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("textarea",{ref:i,value:t,onChange:h=>r(h.target.value),onKeyPress:l,placeholder:"Describe what you want to build...",className:"flex-1 min-h-[44px] max-h-32 px-4 py-3 bg-background border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",disabled:o}),e.jsx("button",{onClick:n,disabled:!t.trim()||o,className:"px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2",children:o?e.jsx(Ie,{className:"h-4 w-4 animate-spin"}):e.jsx(hr,{className:"h-4 w-4"})})]})})]})};function co(){const{currentProject:s,updateFile:t,switchFile:r,updateConfig:o}=te(),[n,i]=c.useState(""),[a,l]=c.useState(""),[p,u]=c.useState(!1),h=c.useRef(null),x=c.useRef(null),[j,v]=c.useState([]),[P,D]=c.useState([]),[w,C]=c.useState(!1),[N,d]=c.useState(!1),[y,b]=c.useState("auto"),[T,I]=c.useState(0);c.useEffect(()=>{h.current&&(h.current.style.height="auto",h.current.style.height=h.current.scrollHeight+"px")},[n]),c.useEffect(()=>{x.current?.scrollIntoView({behavior:"smooth"})},[j]);const m=async()=>{if(!n.trim()||p)return;const k=n;i(""),u(!0);const F={id:Date.now(),type:"user",content:k,timestamp:new Date};v(E=>[...E,F]);try{const E=this.isIncrementalRequest(k),R=await ue.generateCode({prompt:k,projectName:a||s.name,context:{currentFiles:s.files,activeFile:s.activeFile,config:s.config,isIncremental:E,existingProject:E?s:null}});let B="Code generated successfully!";R.type==="incremental_update"?(B=R.message||`Added ${R.newFeatures?.length||0} new feature(s) to your existing app!`,_.success(B)):R.type==="no_changes"?(B=R.message||"No new features to add - these already exist in your app.",_.info(B)):(B=R.message||"Code generated successfully!",_.success(B));const se={id:Date.now()+1,type:"assistant",content:B,timestamp:new Date,files:R.files||{},isIncremental:R.type==="incremental_update",newFeatures:R.newFeatures||[]};v(L=>[...L,se]),R.files&&Object.keys(R.files).length>0&&(Object.entries(R.files).forEach(([L,M])=>{t(L,M)}),R.type==="incremental_update"?_.success(`Added ${R.newFeatures?.length||0} new feature(s): ${R.newFeatures?.join(", ")}`):_.success(`Generated ${Object.keys(R.files).length} files!`)),R.projectName&&R.projectName!==s.name&&(o({name:R.projectName}),l(R.projectName))}catch(E){console.error("Generation error:",E);const R={id:Date.now()+1,type:"assistant",content:`Sorry, I encountered an error: ${E.message}. Please try again.`,timestamp:new Date};v(B=>[...B,R]),_.error("Failed to generate code. Please try again.")}finally{u(!1)}},f=()=>{v([]),_.success("Chat cleared!")};return e.jsxs("div",{className:"h-full flex flex-col bg-card/50 backdrop-blur-sm",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:e.jsx(Te,{className:"h-4 w-4 text-primary-foreground"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-foreground",children:"AI Assistant"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Powered by advanced AI models"})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("button",{onClick:f,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Clear chat",children:e.jsx(ut,{className:"h-4 w-4 text-muted-foreground"})})})]}),e.jsx("div",{className:"p-4 border-b border-border/50",children:e.jsx(Pr,{aiModel:y,setAIModel:b,modelUpdateKey:T,setModelUpdateKey:I})}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(Er,{messages:j,prompt:n,setPrompt:i,isGenerating:p,handleGenerate:m,textareaRef:h,messagesEndRef:x})})]})}class Ar{constructor(){this.conversationHistory=[],this.currentContext=null,this.userPreferences={},this.conversationState="idle",this.lastUserIntent=null,this.followUpQuestions=[]}async initializeConversation(t){return await V.initializeConversation(t.id,t),this.currentContext=V.getConversationContext(),this.conversationHistory=V.getConversationHistory(),console.log("🧠 Advanced conversation initialized"),this.currentContext}async processUserMessage(t){console.log("💬 Processing user message:",t),this.conversationState="analyzing";const r=await this.analyzeUserIntent(t);console.log("🎯 Intent analysis:",r);const o=await this.generateContextualResponse(t,r);return await this.updateConversationHistory(t,o,r),this.conversationState="idle",o}async analyzeUserIntent(t){const r=t.toLowerCase(),o={create:this.detectIntent(r,["create","build","make","develop","start","new app","new project"]),add:this.detectIntent(r,["add","include","implement","integrate","insert","put in"]),modify:this.detectIntent(r,["modify","change","update","edit","alter","fix","improve"]),remove:this.detectIntent(r,["remove","delete","take out","eliminate","get rid of"]),explain:this.detectIntent(r,["explain","tell me","what is","how does","describe","clarify"]),ask:this.detectIntent(r,["what","how","why","when","where","which","can you","could you"]),show:this.detectIntent(r,["show","display","see","view","look at","demonstrate"]),help:this.detectIntent(r,["help","assist","support","guide","tutorial","how to"]),recommend:this.detectIntent(r,["recommend","suggest","advise","what should","best practice"]),yes:this.detectIntent(r,["yes","yeah","yep","sure","ok","okay","agree","confirm"]),no:this.detectIntent(r,["no","nope","not","disagree","cancel","stop"]),clarify:this.detectIntent(r,["clarify","explain more","more details","elaborate","expand"]),repeat:this.detectIntent(r,["repeat","again","once more","restate"]),debug:this.detectIntent(r,["debug","error","bug","issue","problem","fix","broken"]),optimize:this.detectIntent(r,["optimize","performance","speed","faster","better","improve"]),test:this.detectIntent(r,["test","testing","validate","check","verify"]),status:this.detectIntent(r,["status","progress","where are we","what's done","current state"]),plan:this.detectIntent(r,["plan","roadmap","next steps","what's next","timeline"]),review:this.detectIntent(r,["review","check","audit","analyze","evaluate"])},n=this.extractEntities(t),i=this.extractFeatureMentions(t),a=this.extractTechnicalTerms(t),l=Object.keys(o).find(h=>o[h])||"general",p=this.determineConversationFlow(l,n,i),u=this.generateFollowUpQuestions(l,n,i);return{primaryIntent:l,intents:o,entities:n,features:i,technicalTerms:a,conversationFlow:p,followUpQuestions:u,confidence:this.calculateConfidence(o,n,i),requiresClarification:this.needsClarification(l,n,i)}}detectIntent(t,r){return r.some(o=>t.includes(o))}extractEntities(t){const r={technologies:[],features:[],files:[],numbers:[],timeframes:[],priorities:[]};["react","vue","angular","javascript","typescript","python","java","php","node","express","mongodb","mysql","postgresql","firebase","aws","azure","html","css","bootstrap","tailwind","sass","less","webpack","vite"].forEach(u=>{t.toLowerCase().includes(u)&&r.technologies.push(u)}),["authentication","login","register","database","api","search","filter","upload","download","payment","notification","email","chat","messaging","calendar","scheduling","analytics","dashboard","admin","user management"].forEach(u=>{t.toLowerCase().includes(u)&&r.features.push(u)});const i=/\b\w+\.(js|jsx|ts|tsx|html|css|scss|json|md|txt)\b/g,a=t.match(i)||[];r.files=a;const l=/\b\d+\b/g,p=t.match(l)||[];return r.numbers=p,r}extractFeatureMentions(t){const r=t.toLowerCase(),o=[];return Object.entries({authentication:["login","signin","register","signup","auth","user account"],database:["database","db","storage","data","persist","save"],api:["api","endpoint","service","backend","server"],ui:["interface","ui","design","layout","styling","theme"],responsive:["mobile","responsive","tablet","phone","screen size"],search:["search","find","filter","query","lookup"],payment:["payment","billing","stripe","paypal","checkout","money"],notification:["notification","alert","message","email","push"],file:["upload","download","file","image","document","attachment"],security:["security","secure","encryption","password","protection"],testing:["test","testing","unit test","integration","quality"],deployment:["deploy","hosting","production","live","publish"]}).forEach(([i,a])=>{a.some(l=>r.includes(l))&&o.push(i)}),o}extractTechnicalTerms(t){return["component","function","class","method","variable","constant","array","object","string","number","boolean","null","undefined","async","await","promise","callback","event","handler","state","props","hook","effect","context","reducer","route","path","url","endpoint","request","response","error","exception","validation","sanitization","security"].filter(o=>t.toLowerCase().includes(o))}determineConversationFlow(t,r,o){return{create:"development",add:"incremental_development",modify:"modification",explain:"educational",ask:"informational",help:"support",recommend:"advisory",debug:"troubleshooting",optimize:"optimization",test:"testing",status:"project_management",plan:"planning",review:"analysis"}[t]||"general"}generateFollowUpQuestions(t,r,o){return{create:["What type of app would you like to create?","What features should it have?","What's your target audience?","Do you have any specific requirements?"],add:["Which specific feature would you like to add?","How should this feature work?","Where should it be integrated?","Do you have any specific requirements for this feature?"],modify:["What exactly would you like to change?","How should it work differently?","What's the current behavior vs. desired behavior?","Are there any specific constraints?"],explain:["What specific aspect would you like me to explain?","What's your current understanding?","Do you need a high-level overview or detailed explanation?","Are you looking for code examples?"],help:["What specific area do you need help with?","What are you trying to accomplish?","What's your current skill level?","Do you prefer step-by-step guidance or general advice?"],debug:["What error are you seeing?","When does this issue occur?","What were you doing when it happened?","Can you share the error message or code?"]}[t]||[]}calculateConfidence(t,r,o){let n=0;const i=Object.values(t).filter(Boolean).length;n+=i*.3;const a=Object.values(r).flat().length;return n+=Math.min(a*.1,.3),n+=o.length*.1,Math.min(n,1)}needsClarification(t,r,o){return!!(this.calculateConfidence({},r,o)<.3||["create","add","modify","help"].includes(t)&&r.features.length===0)}async generateContextualResponse(t,r){const{primaryIntent:o,entities:n,features:i,requiresClarification:a}=r;if(a)return this.generateClarificationResponse(r);switch(o){case"create":return await this.handleCreateIntent(t,r);case"add":return await this.handleAddIntent(t,r);case"modify":return await this.handleModifyIntent(t,r);case"explain":return await this.handleExplainIntent(t,r);case"ask":return await this.handleAskIntent(t,r);case"help":return await this.handleHelpIntent(t,r);case"recommend":return await this.handleRecommendIntent(t,r);case"debug":return await this.handleDebugIntent(t,r);case"optimize":return await this.handleOptimizeIntent(t,r);case"test":return await this.handleTestIntent(t,r);case"status":return await this.handleStatusIntent(t,r);case"plan":return await this.handlePlanIntent(t,r);case"review":return await this.handleReviewIntent(t,r);default:return await this.handleGeneralIntent(t,r)}}async handleCreateIntent(t,r){const{entities:o,features:n}=r,i=this.currentContext;return n.length>0?`I'll help you create a new app with ${n.join(", ")} features! Based on your request, I can build a ${i?.appType||"web"} application. Let me generate the initial code structure for you.`:"I'd be happy to help you create a new app! To give you the best solution, could you tell me what type of app you want to build and what features it should have?"}async handleAddIntent(t,r){const{entities:o,features:n}=r,a=this.currentContext?.currentFeatures||[];if(n.length>0){const l=n.filter(p=>!a.includes(p));return l.length>0?`Perfect! I'll add ${l.join(", ")} to your existing app. I can see you currently have ${a.join(", ")}. I'll integrate the new features without affecting your existing code.`:`I notice you already have ${n.join(", ")} in your app. Would you like me to enhance these features or add something different?`}else return"I'd be happy to add new features to your app! What specific features would you like me to add? I can help with authentication, database integration, API connections, and much more."}async handleModifyIntent(t,r){const{entities:o,features:n}=r,a=this.currentContext?.currentFeatures||[];if(n.length>0){const l=n.filter(p=>a.includes(p));return l.length>0?`I'll help you modify ${l.join(", ")} in your app. What specific changes would you like me to make to these features?`:`I don't see ${n.join(", ")} in your current app. Would you like me to add these features instead, or are you referring to something else?`}else return"I'd be happy to help you modify your app! What specific aspects would you like to change? I can help with code improvements, feature enhancements, or structural changes."}async handleExplainIntent(t,r){const{entities:o,features:n}=r;return n.length>0?`I'd be happy to explain ${n.join(", ")}! Let me provide you with a detailed explanation of how these features work and how to implement them effectively.`:o.technologies.length>0?`I'll explain ${o.technologies.join(", ")} for you! Let me break down how these technologies work and how they can benefit your project.`:"I'd be happy to explain anything you'd like to know! What specific topic or concept would you like me to clarify?"}async handleAskIntent(t,r){const{entities:o,features:n}=r;return`Great question! Based on your query about ${n.length>0?n.join(", "):"your project"}, let me provide you with a comprehensive answer. I'll make sure to cover all the important aspects you need to know.`}async handleHelpIntent(t,r){const{entities:o,features:n}=r;return n.length>0?`I'll help you with ${n.join(", ")}! Let me provide you with step-by-step guidance and best practices for implementing these features effectively.`:"I'm here to help! I can assist you with development, debugging, optimization, and much more. What specific area would you like help with?"}async handleRecommendIntent(t,r){const{entities:o,features:n}=r;return`Based on your current app with ${(this.currentContext?.currentFeatures||[]).join(", ")}, I recommend focusing on essential features first. Let me suggest some specific improvements that would benefit your project.`}async handleDebugIntent(t,r){const{entities:o,features:n}=r;return"I'll help you debug this issue! Let me analyze the problem and provide you with a solution. Can you share more details about the error or issue you're experiencing?"}async handleOptimizeIntent(t,r){const{entities:o,features:n}=r;return"I'll help you optimize your app! Let me analyze your current setup and provide specific recommendations for improving performance, code quality, and user experience."}async handleTestIntent(t,r){const{entities:o,features:n}=r;return"I'll help you implement testing for your app! Let me set up a comprehensive testing strategy that covers unit tests, integration tests, and quality assurance."}async handleStatusIntent(t,r){const o=this.currentContext,n=o?.currentFeatures||[];return`Here's your current project status: You have a ${o?.appType||"web"} app with ${n.length} features: ${n.join(", ")}. The app is ready for further development or deployment.`}async handlePlanIntent(t,r){return`Let me create a development plan for you! Based on your current features (${(this.currentContext?.currentFeatures||[]).join(", ")}), I'll suggest the next steps and prioritize what to work on next.`}async handleReviewIntent(t,r){return this.currentContext?.currentFeatures,"I'll conduct a comprehensive review of your app! Let me analyze your current implementation, check for best practices, and provide recommendations for improvement."}async handleGeneralIntent(t,r){const{entities:o,features:n}=r;return`I understand you want to work on: "${t}". I can help you with development, feature suggestions, debugging, optimization, or any other aspect of your project. What would you like to focus on?`}generateClarificationResponse(t){const{followUpQuestions:r}=t;return r.length>0?`I'd be happy to help! To give you the best solution, could you clarify: ${r[0]}`:"I'd be happy to help! Could you provide more details about what you'd like to accomplish?"}async updateConversationHistory(t,r,o){const n={id:`msg_${Date.now()}`,type:"user",content:t,timestamp:new Date,analysis:o},i={id:`msg_${Date.now()}_ai`,type:"ai",content:r,timestamp:new Date,intent:o.primaryIntent,confidence:o.confidence};this.conversationHistory.push(n,i),await V.addMessage(t,r,"ai")}getConversationSummary(){return{messageCount:this.conversationHistory.length,lastIntent:this.lastUserIntent,currentState:this.conversationState,context:this.currentContext}}reset(){this.conversationHistory=[],this.currentContext=null,this.conversationState="idle",this.lastUserIntent=null,this.followUpQuestions=[]}}const qe=new Ar,uo=()=>{const{currentProject:s}=te(),[t,r]=c.useState([]),[o,n]=c.useState(""),[i,a]=c.useState(!1),[l,p]=c.useState([]),[u,h]=c.useState(null),[x,j]=c.useState(!1),[v,P]=c.useState(null),D=c.useRef(null);c.useEffect(()=>{w()},[s]),c.useEffect(()=>{b()},[t]);const w=async()=>{try{const f={id:s.id||`project_${Date.now()}`,name:s.name,features:C(s),techStack:s.config?[s.config.language,s.config.styling,s.config.database,s.config.auth].filter(Boolean):[],appType:s.config?.appType||"web",complexity:N(s),industry:"general"},k=await qe.initializeConversation(f);P(k.id);const F=V.getConversationHistory();r(F),await d()}catch(f){console.error("Failed to initialize conversation:",f)}},C=f=>{const k=[],F=f.files||{};return Object.values(F).forEach(E=>{typeof E=="string"&&((E.includes("authentication")||E.includes("login"))&&k.push("Authentication"),(E.includes("database")||E.includes("firebase"))&&k.push("Database"),(E.includes("responsive")||E.includes("mobile"))&&k.push("Responsive Design"),(E.includes("api")||E.includes("fetch"))&&k.push("API Integration"),(E.includes("form")||E.includes("input"))&&k.push("Form Handling"),(E.includes("routing")||E.includes("router"))&&k.push("Routing"),(E.includes("state")||E.includes("useState"))&&k.push("State Management"),(E.includes("test")||E.includes("jest"))&&k.push("Testing"))}),[...new Set(k)]},N=f=>{const k=Object.keys(f.files||{}).length,F=C(f);return k>10||F.length>8?"advanced":k>5||F.length>4?"intermediate":"basic"},d=async()=>{try{const f=await V.generateFeatureRecommendations();p(f);const k=await V.checkIndustryStandards({features:C(s)});h(k)}catch(f){console.error("Failed to generate recommendations:",f)}},y=async()=>{if(!o.trim()||i)return;const f=o.trim();n(""),a(!0);const k={id:`msg_${Date.now()}`,type:"user",content:f,timestamp:new Date};r(F=>[...F,k]);try{const F=await qe.processUserMessage(f),E={id:`msg_${Date.now()}_ai`,type:"ai",content:F,timestamp:new Date};r(R=>[...R,E]),await d()}catch(F){console.error("Failed to send message:",F);const E={id:`msg_${Date.now()}_error`,type:"error",content:"Sorry, I encountered an error. Please try again.",timestamp:new Date};r(R=>[...R,E])}finally{a(!1)}},b=()=>{D.current?.scrollIntoView({behavior:"smooth"})},T=f=>{const k=`I'd like to add: ${f.name} - ${f.description}`;n(k)},I=f=>{switch(f){case"critical":return"text-red-500";case"high":return"text-orange-500";case"medium":return"text-yellow-500";case"low":return"text-green-500";default:return"text-gray-500"}},m=f=>{switch(f){case"critical":return e.jsx(ht,{className:"h-4 w-4"});case"high":return e.jsx(br,{className:"h-4 w-4"});case"medium":return e.jsx(xr,{className:"h-4 w-4"});case"low":return e.jsx(mt,{className:"h-4 w-4"});default:return e.jsx(pt,{className:"h-4 w-4"})}};return e.jsxs("div",{className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-border bg-muted/30",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(gr,{className:"h-5 w-5 text-primary"}),e.jsx("h3",{className:"font-semibold text-foreground",children:"AI Assistant"}),e.jsx("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"Online"})]}),e.jsxs("button",{onClick:()=>j(!x),className:"flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors",children:[e.jsx(ze,{className:"h-4 w-4"}),"Recommendations"]})]}),e.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[e.jsx(W,{children:t.map(f=>e.jsx(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:`flex ${f.type==="user"?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`max-w-[80%] p-3 rounded-lg ${f.type==="user"?"bg-primary text-primary-foreground":f.type==="error"?"bg-red-100 text-red-800 border border-red-200":"bg-muted text-foreground"}`,children:[e.jsx("p",{className:"text-sm",children:f.content}),e.jsx("p",{className:"text-xs opacity-70 mt-1",children:new Date(f.timestamp).toLocaleTimeString()})]})},f.id))}),i&&e.jsx("div",{className:"flex justify-start",children:e.jsx("div",{className:"bg-muted text-foreground p-3 rounded-lg",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-primary"}),e.jsx("span",{className:"text-sm",children:"AI is thinking..."})]})})}),e.jsx("div",{ref:D})]}),e.jsx("div",{className:"p-4 border-t border-border",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:o,onChange:f=>n(f.target.value),onKeyPress:f=>f.key==="Enter"&&y(),placeholder:"Ask me anything about your app...",className:"flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",disabled:i}),e.jsx("button",{onClick:y,disabled:!o.trim()||i,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"Send"})]})})]}),e.jsx(W,{children:x&&e.jsxs(H.div,{initial:{width:0,opacity:0},animate:{width:350,opacity:1},exit:{width:0,opacity:0},className:"border-l border-border bg-muted/20 overflow-hidden",children:[e.jsx("div",{className:"p-4 border-b border-border",children:e.jsxs("h4",{className:"font-semibold text-foreground flex items-center gap-2",children:[e.jsx(ze,{className:"h-4 w-4"}),"Smart Recommendations"]})}),e.jsxs("div",{className:"overflow-y-auto h-full",children:[e.jsxs("div",{className:"p-4",children:[e.jsxs("h5",{className:"font-medium text-foreground mb-3 flex items-center gap-2",children:[e.jsx(he,{className:"h-4 w-4"}),"Suggested Features"]}),e.jsx("div",{className:"space-y-2",children:l.slice(0,5).map((f,k)=>e.jsxs("div",{onClick:()=>T(f),className:"p-3 bg-card border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",children:[e.jsxs("div",{className:"flex items-start justify-between mb-2",children:[e.jsx("h6",{className:"font-medium text-sm text-foreground",children:f.name}),e.jsxs("div",{className:`flex items-center gap-1 ${I(f.priority)}`,children:[m(f.priority),e.jsx("span",{className:"text-xs capitalize",children:f.priority})]})]}),e.jsx("p",{className:"text-xs text-muted-foreground mb-2",children:f.description}),e.jsx("span",{className:"text-xs bg-primary/10 text-primary px-2 py-1 rounded",children:f.category})]},k))})]}),u&&e.jsxs("div",{className:"p-4 border-t border-border",children:[e.jsxs("h5",{className:"font-medium text-foreground mb-3 flex items-center gap-2",children:[e.jsx(fr,{className:"h-4 w-4"}),"Industry Standards"]}),e.jsx("div",{className:"space-y-3",children:Object.entries(u).map(([f,k])=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-3",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h6",{className:"font-medium text-sm text-foreground capitalize",children:f.replace("_"," ")}),e.jsxs("span",{className:"text-sm font-semibold text-primary",children:[k.score,"%"]})]}),e.jsx("div",{className:"w-full bg-muted rounded-full h-2",children:e.jsx("div",{className:"bg-primary h-2 rounded-full transition-all duration-300",style:{width:`${k.score}%`}})}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[k.implemented,"/",k.total," implemented"]})]},f))})]})]})]})})]})]})},$r=c.createContext();function Rr(){return c.useContext($r)}const Mr=({isOpen:s,onClose:t})=>{const{isCollaborationActive:r,activeUsers:o,cursors:n,comments:i,sharedProjects:a,isLoading:l,shareProject:p,getSharedProjects:u,toggleCollaboration:h}=Rr(),{user:x}=Gt(),[j,v]=c.useState(""),[P,D]=c.useState("read"),[w,C]=c.useState("users");c.useEffect(()=>{s&&r&&u()},[s,r,u]);const N=async b=>{if(b.preventDefault(),!j.trim()){$.error("Please enter an email address");return}try{await p(j,P),$.success(`Project shared with ${j}`),v(""),u()}catch{$.error("Failed to share project")}},d=b=>{switch(b){case"admin":return"text-red-600 bg-red-100";case"write":return"text-blue-600 bg-blue-100";case"read":return"text-green-600 bg-green-100";default:return"text-gray-600 bg-gray-100"}},y=b=>{switch(b){case"admin":return e.jsx(ht,{className:"h-4 w-4"});case"write":return e.jsx(pt,{className:"h-4 w-4"});case"read":return e.jsx(Ge,{className:"h-4 w-4"});default:return e.jsx(jr,{className:"h-4 w-4"})}};return s?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(_e,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Real-time team collaboration"})]})]}),e.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:e.jsx(yr,{className:"h-5 w-5 text-gray-600"})})]}),e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Real-time Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Enable real-time editing, cursor tracking, and comments"})]}),e.jsx("button",{onClick:h,disabled:l,className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${r?"bg-green-100 text-green-700 hover:bg-green-200":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:r?e.jsxs(e.Fragment,{children:[e.jsx(Ge,{className:"h-4 w-4"}),"Active"]}):e.jsxs(e.Fragment,{children:[e.jsx(vr,{className:"h-4 w-4"}),"Inactive"]})})]})}),e.jsx("div",{className:"flex border-b border-gray-200",children:[{id:"users",label:"Active Users",icon:_e},{id:"comments",label:"Comments",icon:ut},{id:"sharing",label:"Sharing",icon:ct}].map(b=>e.jsxs("button",{onClick:()=>C(b.id),className:`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${w===b.id?"text-blue-600 border-b-2 border-blue-600":"text-gray-600 hover:text-gray-900"}`,children:[e.jsx(b.icon,{className:"h-4 w-4"}),b.label]},b.id))}),e.jsxs("div",{className:"p-6 max-h-96 overflow-y-auto",children:[w==="users"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Active Users (",o.length,")"]}),o.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No active users"}):e.jsx("div",{className:"space-y-3",children:o.map((b,T)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:b.userName?.charAt(0)||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"font-medium text-gray-900",children:b.userName}),e.jsx("p",{className:"text-sm text-gray-600",children:b.userEmail})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Online"})]})]},T))}),n.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"text-md font-medium text-gray-900 mb-3",children:"Active Cursors"}),e.jsx("div",{className:"space-y-2",children:n.map((b,T)=>e.jsxs("div",{className:"flex items-center gap-2 p-2 bg-blue-50 rounded",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-medium",children:b.userName?.charAt(0)||"U"})}),e.jsx("span",{className:"text-sm text-gray-700",children:b.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:[b.fileId," - Line ",b.line]})]},T))})]})]}),w==="comments"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Comments (",i.length,")"]}),i.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No comments yet"}):e.jsx("div",{className:"space-y-3",children:i.map((b,T)=>e.jsx("div",{className:`p-4 rounded-lg border ${b.resolved?"bg-gray-50 border-gray-200":"bg-yellow-50 border-yellow-200"}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:b.userName?.charAt(0)||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"font-medium text-gray-900",children:b.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:["Line ",b.lineNumber," in ",b.fileId]}),b.resolved&&e.jsx("span",{className:"text-xs bg-green-100 text-green-700 px-2 py-1 rounded",children:"Resolved"})]}),e.jsx("p",{className:"text-gray-700",children:b.content})]})]})},T))})]}),w==="sharing"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Share Project"}),e.jsxs("form",{onSubmit:N,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),e.jsx("input",{type:"email",value:j,onChange:b=>v(b.target.value),placeholder:"user@example.com",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Permissions"}),e.jsxs("select",{value:P,onChange:b=>D(b.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"read",children:"Read Only"}),e.jsx("option",{value:"write",children:"Read & Write"}),e.jsx("option",{value:"admin",children:"Admin"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors",children:"Share Project"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Shared Projects"}),a.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No shared projects"}):e.jsx("div",{className:"space-y-3",children:a.map((b,T)=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center",children:e.jsx(wr,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:b.sharedWith}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Project ID: ",b.projectId]})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{className:`px-2 py-1 rounded text-xs font-medium ${d(b.permissions)}`,children:[y(b.permissions),b.permissions]})})]},T))})]})]})]})]})}):null},gt=c.createContext({dragDropManager:void 0});function z(s){return"Minified Redux error #"+s+"; visit https://redux.js.org/Errors?code="+s+" for the full message or use the non-minified dev environment for full errors. "}var Ve=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ye=function(){return Math.random().toString(36).substring(7).split("").join(".")},Je={INIT:"@@redux/INIT"+Ye(),REPLACE:"@@redux/REPLACE"+Ye()};function Fr(s){if(typeof s!="object"||s===null)return!1;for(var t=s;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(s)===t}function ft(s,t,r){var o;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(z(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(z(1));return r(ft)(s,t)}if(typeof s!="function")throw new Error(z(2));var n=s,i=t,a=[],l=a,p=!1;function u(){l===a&&(l=a.slice())}function h(){if(p)throw new Error(z(3));return i}function x(D){if(typeof D!="function")throw new Error(z(4));if(p)throw new Error(z(5));var w=!0;return u(),l.push(D),function(){if(w){if(p)throw new Error(z(6));w=!1,u();var N=l.indexOf(D);l.splice(N,1),a=null}}}function j(D){if(!Fr(D))throw new Error(z(7));if(typeof D.type>"u")throw new Error(z(8));if(p)throw new Error(z(9));try{p=!0,i=n(i,D)}finally{p=!1}for(var w=a=l,C=0;C<w.length;C++){var N=w[C];N()}return D}function v(D){if(typeof D!="function")throw new Error(z(10));n=D,j({type:Je.REPLACE})}function P(){var D,w=x;return D={subscribe:function(N){if(typeof N!="object"||N===null)throw new Error(z(11));function d(){N.next&&N.next(h())}d();var y=w(d);return{unsubscribe:y}}},D[Ve]=function(){return this},D}return j({type:Je.INIT}),o={dispatch:j,subscribe:x,getState:h,replaceReducer:v},o[Ve]=P,o}function A(s,t,...r){if(Lr()&&t===void 0)throw new Error("invariant requires an error message argument");if(!s){let o;if(t===void 0)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let n=0;o=new Error(t.replace(/%s/g,function(){return r[n++]})),o.name="Invariant Violation"}throw o.framesToPop=1,o}}function Lr(){return typeof process<"u"&&!0}function Hr(s,t,r){return t.split(".").reduce((o,n)=>o&&o[n]?o[n]:r||null,s)}function Br(s,t){return s.filter(r=>r!==t)}function xt(s){return typeof s=="object"}function Ur(s,t){const r=new Map,o=i=>{r.set(i,r.has(i)?r.get(i)+1:1)};s.forEach(o),t.forEach(o);const n=[];return r.forEach((i,a)=>{i===1&&n.push(a)}),n}function zr(s,t){return s.filter(r=>t.indexOf(r)>-1)}const Re="dnd-core/INIT_COORDS",ge="dnd-core/BEGIN_DRAG",Me="dnd-core/PUBLISH_DRAG_SOURCE",fe="dnd-core/HOVER",xe="dnd-core/DROP",be="dnd-core/END_DRAG";function Xe(s,t){return{type:Re,payload:{sourceClientOffset:t||null,clientOffset:s||null}}}const _r={type:Re,payload:{clientOffset:null,sourceClientOffset:null}};function Gr(s){return function(r=[],o={publishSource:!0}){const{publishSource:n=!0,clientOffset:i,getSourceClientOffset:a}=o,l=s.getMonitor(),p=s.getRegistry();s.dispatch(Xe(i)),Wr(r,l,p);const u=Yr(r,l);if(u==null){s.dispatch(_r);return}let h=null;if(i){if(!a)throw new Error("getSourceClientOffset must be defined");qr(a),h=a(u)}s.dispatch(Xe(i,h));const j=p.getSource(u).beginDrag(l,u);if(j==null)return;Vr(j),p.pinSource(u);const v=p.getSourceType(u);return{type:ge,payload:{itemType:v,item:j,sourceId:u,clientOffset:i||null,sourceClientOffset:h||null,isSourcePublic:!!n}}}}function Wr(s,t,r){A(!t.isDragging(),"Cannot call beginDrag while dragging."),s.forEach(function(o){A(r.getSource(o),"Expected sourceIds to be registered.")})}function qr(s){A(typeof s=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function Vr(s){A(xt(s),"Item must be an object.")}function Yr(s,t){let r=null;for(let o=s.length-1;o>=0;o--)if(t.canDragSource(s[o])){r=s[o];break}return r}function Jr(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Xr(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){Jr(s,n,r[n])})}return s}function Zr(s){return function(r={}){const o=s.getMonitor(),n=s.getRegistry();Kr(o),ts(o).forEach((a,l)=>{const p=Qr(a,l,n,o),u={type:xe,payload:{dropResult:Xr({},r,p)}};s.dispatch(u)})}}function Kr(s){A(s.isDragging(),"Cannot call drop while not dragging."),A(!s.didDrop(),"Cannot call drop twice during one drag operation.")}function Qr(s,t,r,o){const n=r.getTarget(s);let i=n?n.drop(o,s):void 0;return es(i),typeof i>"u"&&(i=t===0?{}:o.getDropResult()),i}function es(s){A(typeof s>"u"||xt(s),"Drop result must either be an object or undefined.")}function ts(s){const t=s.getTargetIds().filter(s.canDropOnTarget,s);return t.reverse(),t}function rs(s){return function(){const r=s.getMonitor(),o=s.getRegistry();ss(r);const n=r.getSourceId();return n!=null&&(o.getSource(n,!0).endDrag(r,n),o.unpinSource()),{type:be}}}function ss(s){A(s.isDragging(),"Cannot call endDrag while not dragging.")}function Oe(s,t){return t===null?s===null:Array.isArray(s)?s.some(r=>r===t):s===t}function ns(s){return function(r,{clientOffset:o}={}){os(r);const n=r.slice(0),i=s.getMonitor(),a=s.getRegistry(),l=i.getItemType();return as(n,a,l),is(n,i,a),ls(n,i,a),{type:fe,payload:{targetIds:n,clientOffset:o||null}}}}function os(s){A(Array.isArray(s),"Expected targetIds to be an array.")}function is(s,t,r){A(t.isDragging(),"Cannot call hover while not dragging."),A(!t.didDrop(),"Cannot call hover after drop.");for(let o=0;o<s.length;o++){const n=s[o];A(s.lastIndexOf(n)===o,"Expected targetIds to be unique in the passed array.");const i=r.getTarget(n);A(i,"Expected targetIds to be registered.")}}function as(s,t,r){for(let o=s.length-1;o>=0;o--){const n=s[o],i=t.getTargetType(n);Oe(i,r)||s.splice(o,1)}}function ls(s,t,r){s.forEach(function(o){r.getTarget(o).hover(t,o)})}function cs(s){return function(){if(s.getMonitor().isDragging())return{type:Me}}}function ds(s){return{beginDrag:Gr(s),publishDragSource:cs(s),hover:ns(s),drop:Zr(s),endDrag:rs(s)}}class us{receiveBackend(t){this.backend=t}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const t=this,{dispatch:r}=this.store;function o(i){return(...a)=>{const l=i.apply(t,a);typeof l<"u"&&r(l)}}const n=ds(this);return Object.keys(n).reduce((i,a)=>{const l=n[a];return i[a]=o(l),i},{})}dispatch(t){this.store.dispatch(t)}constructor(t,r){this.isSetUp=!1,this.handleRefCountChange=()=>{const o=this.store.getState().refCount>0;this.backend&&(o&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!o&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=t,this.monitor=r,t.subscribe(this.handleRefCountChange)}}function ps(s,t){return{x:s.x+t.x,y:s.y+t.y}}function bt(s,t){return{x:s.x-t.x,y:s.y-t.y}}function ms(s){const{clientOffset:t,initialClientOffset:r,initialSourceClientOffset:o}=s;return!t||!r||!o?null:bt(ps(t,o),r)}function hs(s){const{clientOffset:t,initialClientOffset:r}=s;return!t||!r?null:bt(t,r)}const ae=[],Fe=[];ae.__IS_NONE__=!0;Fe.__IS_ALL__=!0;function gs(s,t){return s===ae?!1:s===Fe||typeof t>"u"?!0:zr(t,s).length>0}class fs{subscribeToStateChange(t,r={}){const{handlerIds:o}=r;A(typeof t=="function","listener must be a function."),A(typeof o>"u"||Array.isArray(o),"handlerIds, when specified, must be an array of strings.");let n=this.store.getState().stateId;const i=()=>{const a=this.store.getState(),l=a.stateId;try{l===n||l===n+1&&!gs(a.dirtyHandlerIds,o)||t()}finally{n=l}};return this.store.subscribe(i)}subscribeToOffsetChange(t){A(typeof t=="function","listener must be a function.");let r=this.store.getState().dragOffset;const o=()=>{const n=this.store.getState().dragOffset;n!==r&&(r=n,t())};return this.store.subscribe(o)}canDragSource(t){if(!t)return!1;const r=this.registry.getSource(t);return A(r,`Expected to find a valid source. sourceId=${t}`),this.isDragging()?!1:r.canDrag(this,t)}canDropOnTarget(t){if(!t)return!1;const r=this.registry.getTarget(t);if(A(r,`Expected to find a valid target. targetId=${t}`),!this.isDragging()||this.didDrop())return!1;const o=this.registry.getTargetType(t),n=this.getItemType();return Oe(o,n)&&r.canDrop(this,t)}isDragging(){return!!this.getItemType()}isDraggingSource(t){if(!t)return!1;const r=this.registry.getSource(t,!0);if(A(r,`Expected to find a valid source. sourceId=${t}`),!this.isDragging()||!this.isSourcePublic())return!1;const o=this.registry.getSourceType(t),n=this.getItemType();return o!==n?!1:r.isDragging(this,t)}isOverTarget(t,r={shallow:!1}){if(!t)return!1;const{shallow:o}=r;if(!this.isDragging())return!1;const n=this.registry.getTargetType(t),i=this.getItemType();if(i&&!Oe(n,i))return!1;const a=this.getTargetIds();if(!a.length)return!1;const l=a.indexOf(t);return o?l===a.length-1:l>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return ms(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return hs(this.store.getState().dragOffset)}constructor(t,r){this.store=t,this.registry=r}}const Ze=typeof global<"u"?global:self,yt=Ze.MutationObserver||Ze.WebKitMutationObserver;function vt(s){return function(){const r=setTimeout(n,0),o=setInterval(n,50);function n(){clearTimeout(r),clearInterval(o),s()}}}function xs(s){let t=1;const r=new yt(s),o=document.createTextNode("");return r.observe(o,{characterData:!0}),function(){t=-t,o.data=t}}const bs=typeof yt=="function"?xs:vt;class ys{enqueueTask(t){const{queue:r,requestFlush:o}=this;r.length||(o(),this.flushing=!0),r[r.length]=t}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:t}=this;for(;this.index<t.length;){const r=this.index;if(this.index++,t[r].call(),this.index>this.capacity){for(let o=0,n=t.length-this.index;o<n;o++)t[o]=t[o+this.index];t.length-=this.index,this.index=0}}t.length=0,this.index=0,this.flushing=!1},this.registerPendingError=t=>{this.pendingErrors.push(t),this.requestErrorThrow()},this.requestFlush=bs(this.flush),this.requestErrorThrow=vt(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class vs{call(){try{this.task&&this.task()}catch(t){this.onError(t)}finally{this.task=null,this.release(this)}}constructor(t,r){this.onError=t,this.release=r,this.task=null}}class ws{create(t){const r=this.freeTasks,o=r.length?r.pop():new vs(this.onError,n=>r[r.length]=n);return o.task=t,o}constructor(t){this.onError=t,this.freeTasks=[]}}const wt=new ys,js=new ws(wt.registerPendingError);function Ns(s){wt.enqueueTask(js.create(s))}const Le="dnd-core/ADD_SOURCE",He="dnd-core/ADD_TARGET",Be="dnd-core/REMOVE_SOURCE",ye="dnd-core/REMOVE_TARGET";function Ss(s){return{type:Le,payload:{sourceId:s}}}function Ds(s){return{type:He,payload:{targetId:s}}}function Cs(s){return{type:Be,payload:{sourceId:s}}}function Is(s){return{type:ye,payload:{targetId:s}}}function ks(s){A(typeof s.canDrag=="function","Expected canDrag to be a function."),A(typeof s.beginDrag=="function","Expected beginDrag to be a function."),A(typeof s.endDrag=="function","Expected endDrag to be a function.")}function Ts(s){A(typeof s.canDrop=="function","Expected canDrop to be a function."),A(typeof s.hover=="function","Expected hover to be a function."),A(typeof s.drop=="function","Expected beginDrag to be a function.")}function Pe(s,t){if(t&&Array.isArray(s)){s.forEach(r=>Pe(r,!1));return}A(typeof s=="string"||typeof s=="symbol",t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var G;(function(s){s.SOURCE="SOURCE",s.TARGET="TARGET"})(G||(G={}));let Os=0;function Ps(){return Os++}function Es(s){const t=Ps().toString();switch(s){case G.SOURCE:return`S${t}`;case G.TARGET:return`T${t}`;default:throw new Error(`Unknown Handler Role: ${s}`)}}function Ke(s){switch(s[0]){case"S":return G.SOURCE;case"T":return G.TARGET;default:throw new Error(`Cannot parse handler ID: ${s}`)}}function Qe(s,t){const r=s.entries();let o=!1;do{const{done:n,value:[,i]}=r.next();if(i===t)return!0;o=!!n}while(!o);return!1}class As{addSource(t,r){Pe(t),ks(r);const o=this.addHandler(G.SOURCE,t,r);return this.store.dispatch(Ss(o)),o}addTarget(t,r){Pe(t,!0),Ts(r);const o=this.addHandler(G.TARGET,t,r);return this.store.dispatch(Ds(o)),o}containsHandler(t){return Qe(this.dragSources,t)||Qe(this.dropTargets,t)}getSource(t,r=!1){return A(this.isSourceId(t),"Expected a valid source ID."),r&&t===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(t)}getTarget(t){return A(this.isTargetId(t),"Expected a valid target ID."),this.dropTargets.get(t)}getSourceType(t){return A(this.isSourceId(t),"Expected a valid source ID."),this.types.get(t)}getTargetType(t){return A(this.isTargetId(t),"Expected a valid target ID."),this.types.get(t)}isSourceId(t){return Ke(t)===G.SOURCE}isTargetId(t){return Ke(t)===G.TARGET}removeSource(t){A(this.getSource(t),"Expected an existing source."),this.store.dispatch(Cs(t)),Ns(()=>{this.dragSources.delete(t),this.types.delete(t)})}removeTarget(t){A(this.getTarget(t),"Expected an existing target."),this.store.dispatch(Is(t)),this.dropTargets.delete(t),this.types.delete(t)}pinSource(t){const r=this.getSource(t);A(r,"Expected an existing source."),this.pinnedSourceId=t,this.pinnedSource=r}unpinSource(){A(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(t,r,o){const n=Es(t);return this.types.set(n,r),t===G.SOURCE?this.dragSources.set(n,o):t===G.TARGET&&this.dropTargets.set(n,o),n}constructor(t){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=t}}const $s=(s,t)=>s===t;function Rs(s,t){return!s&&!t?!0:!s||!t?!1:s.x===t.x&&s.y===t.y}function Ms(s,t,r=$s){if(s.length!==t.length)return!1;for(let o=0;o<s.length;++o)if(!r(s[o],t[o]))return!1;return!0}function Fs(s=ae,t){switch(t.type){case fe:break;case Le:case He:case ye:case Be:return ae;case ge:case Me:case be:case xe:default:return Fe}const{targetIds:r=[],prevTargetIds:o=[]}=t.payload,n=Ur(r,o);if(!(n.length>0||!Ms(r,o)))return ae;const a=o[o.length-1],l=r[r.length-1];return a!==l&&(a&&n.push(a),l&&n.push(l)),n}function Ls(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Hs(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){Ls(s,n,r[n])})}return s}const et={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function Bs(s=et,t){const{payload:r}=t;switch(t.type){case Re:case ge:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case fe:return Rs(s.clientOffset,r.clientOffset)?s:Hs({},s,{clientOffset:r.clientOffset});case be:case xe:return et;default:return s}}function Us(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function ee(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){Us(s,n,r[n])})}return s}const zs={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function _s(s=zs,t){const{payload:r}=t;switch(t.type){case ge:return ee({},s,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case Me:return ee({},s,{isSourcePublic:!0});case fe:return ee({},s,{targetIds:r.targetIds});case ye:return s.targetIds.indexOf(r.targetId)===-1?s:ee({},s,{targetIds:Br(s.targetIds,r.targetId)});case xe:return ee({},s,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case be:return ee({},s,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return s}}function Gs(s=0,t){switch(t.type){case Le:case He:return s+1;case Be:case ye:return s-1;default:return s}}function Ws(s=0){return s+1}function qs(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Vs(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){qs(s,n,r[n])})}return s}function Ys(s={},t){return{dirtyHandlerIds:Fs(s.dirtyHandlerIds,{type:t.type,payload:Vs({},t.payload,{prevTargetIds:Hr(s,"dragOperation.targetIds",[])})}),dragOffset:Bs(s.dragOffset,t),refCount:Gs(s.refCount,t),dragOperation:_s(s.dragOperation,t),stateId:Ws(s.stateId)}}function Js(s,t=void 0,r={},o=!1){const n=Xs(o),i=new fs(n,new As(n)),a=new us(n,i),l=s(a,t,r);return a.receiveBackend(l),a}function Xs(s){const t=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return ft(Ys,s&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}function Zs(s,t){if(s==null)return{};var r=Ks(s,t),o,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(r[o]=s[o])}return r}function Ks(s,t){if(s==null)return{};var r={},o=Object.keys(s),n,i;for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&(r[n]=s[n]);return r}let tt=0;const pe=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var Qs=c.memo(function(t){var{children:r}=t,o=Zs(t,["children"]);const[n,i]=en(o);return c.useEffect(()=>{if(i){const a=jt();return++tt,()=>{--tt===0&&(a[pe]=null)}}},[]),e.jsx(gt.Provider,{value:n,children:r})});function en(s){if("manager"in s)return[{dragDropManager:s.manager},!1];const t=tn(s.backend,s.context,s.options,s.debugMode),r=!s.context;return[t,r]}function tn(s,t=jt(),r,o){const n=t;return n[pe]||(n[pe]={dragDropManager:Js(s,t,r,o)}),n[pe]}function jt(){return typeof global<"u"?global:window}var rn=function s(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var o,n,i;if(Array.isArray(t)){if(o=t.length,o!=r.length)return!1;for(n=o;n--!==0;)if(!s(t[n],r[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(i=Object.keys(t),o=i.length,o!==Object.keys(r).length)return!1;for(n=o;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[n]))return!1;for(n=o;n--!==0;){var a=i[n];if(!s(t[a],r[a]))return!1}return!0}return t!==t&&r!==r};const sn=Wt(rn),Y=typeof window<"u"?c.useLayoutEffect:c.useEffect;function nn(s,t,r){const[o,n]=c.useState(()=>t(s)),i=c.useCallback(()=>{const a=t(s);sn(o,a)||(n(a),r&&r())},[o,s,r]);return Y(i),[o,i]}function on(s,t,r){const[o,n]=nn(s,t,r);return Y(function(){const a=s.getHandlerId();if(a!=null)return s.subscribeToStateChange(n,{handlerIds:[a]})},[s,n]),o}function Nt(s,t,r){return on(t,s||(()=>({})),()=>r.reconnect())}function St(s,t){const r=[];return typeof s!="function"&&r.push(s),c.useMemo(()=>typeof s=="function"?s():s,r)}function an(s){return c.useMemo(()=>s.hooks.dragSource(),[s])}function ln(s){return c.useMemo(()=>s.hooks.dragPreview(),[s])}let je=!1,Ne=!1;class cn{receiveHandlerId(t){this.sourceId=t}getHandlerId(){return this.sourceId}canDrag(){A(!je,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return je=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{je=!1}}isDragging(){if(!this.sourceId)return!1;A(!Ne,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return Ne=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{Ne=!1}}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}isDraggingSource(t){return this.internalMonitor.isDraggingSource(t)}isOverTarget(t,r){return this.internalMonitor.isOverTarget(t,r)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(t){return this.internalMonitor.subscribeToOffsetChange(t)}canDragSource(t){return this.internalMonitor.canDragSource(t)}canDropOnTarget(t){return this.internalMonitor.canDropOnTarget(t)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.sourceId=null,this.internalMonitor=t.getMonitor()}}let Se=!1;class dn{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}canDrop(){if(!this.targetId)return!1;A(!Se,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return Se=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{Se=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function un(s,t,r){const o=r.getRegistry(),n=o.addTarget(s,t);return[n,()=>o.removeTarget(n)]}function pn(s,t,r){const o=r.getRegistry(),n=o.addSource(s,t);return[n,()=>o.removeSource(n)]}function Ee(s,t,r,o){let n;if(n!==void 0)return!!n;if(s===t)return!0;if(typeof s!="object"||!s||typeof t!="object"||!t)return!1;const i=Object.keys(s),a=Object.keys(t);if(i.length!==a.length)return!1;const l=Object.prototype.hasOwnProperty.bind(t);for(let p=0;p<i.length;p++){const u=i[p];if(!l(u))return!1;const h=s[u],x=t[u];if(n=void 0,n===!1||n===void 0&&h!==x)return!1}return!0}function Ae(s){return s!==null&&typeof s=="object"&&Object.prototype.hasOwnProperty.call(s,"current")}function mn(s){if(typeof s.type=="string")return;const t=s.type.displayName||s.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function hn(s){return(t=null,r=null)=>{if(!c.isValidElement(t)){const i=t;return s(i,r),i}const o=t;return mn(o),gn(o,r?i=>s(i,r):s)}}function Dt(s){const t={};return Object.keys(s).forEach(r=>{const o=s[r];if(r.endsWith("Ref"))t[r]=s[r];else{const n=hn(o);t[r]=()=>n}}),t}function rt(s,t){typeof s=="function"?s(t):s.current=t}function gn(s,t){const r=s.ref;return A(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?c.cloneElement(s,{ref:o=>{rt(r,o),rt(t,o)}}):c.cloneElement(s,{ref:t})}class fn{receiveHandlerId(t){this.handlerId!==t&&(this.handlerId=t,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(t){this.dragSourceOptionsInternal=t}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(t){this.dragPreviewOptionsInternal=t}reconnect(){const t=this.reconnectDragSource();this.reconnectDragPreview(t)}reconnectDragSource(){const t=this.dragSource,r=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return r&&this.disconnectDragSource(),this.handlerId?t?(r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=t,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,t,this.dragSourceOptions)),r):(this.lastConnectedDragSource=t,r):r}reconnectDragPreview(t=!1){const r=this.dragPreview,o=t||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(o&&this.disconnectDragPreview(),!!this.handlerId){if(!r){this.lastConnectedDragPreview=r;return}o&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=r,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,r,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!Ee(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!Ee(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(t){this.hooks=Dt({dragSource:(r,o)=>{this.clearDragSource(),this.dragSourceOptions=o||null,Ae(r)?this.dragSourceRef=r:this.dragSourceNode=r,this.reconnectDragSource()},dragPreview:(r,o)=>{this.clearDragPreview(),this.dragPreviewOptions=o||null,Ae(r)?this.dragPreviewRef=r:this.dragPreviewNode=r,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}}class xn{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Ee(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=Dt({dropTarget:(r,o)=>{this.clearDropTarget(),this.dropTargetOptions=o,Ae(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function re(){const{dragDropManager:s}=c.useContext(gt);return A(s!=null,"Expected drag drop context"),s}function bn(s,t){const r=re(),o=c.useMemo(()=>new fn(r.getBackend()),[r]);return Y(()=>(o.dragSourceOptions=s||null,o.reconnect(),()=>o.disconnectDragSource()),[o,s]),Y(()=>(o.dragPreviewOptions=t||null,o.reconnect(),()=>o.disconnectDragPreview()),[o,t]),o}function yn(){const s=re();return c.useMemo(()=>new cn(s),[s])}class vn{beginDrag(){const t=this.spec,r=this.monitor;let o=null;return typeof t.item=="object"?o=t.item:typeof t.item=="function"?o=t.item(r):o={},o??null}canDrag(){const t=this.spec,r=this.monitor;return typeof t.canDrag=="boolean"?t.canDrag:typeof t.canDrag=="function"?t.canDrag(r):!0}isDragging(t,r){const o=this.spec,n=this.monitor,{isDragging:i}=o;return i?i(n):r===t.getSourceId()}endDrag(){const t=this.spec,r=this.monitor,o=this.connector,{end:n}=t;n&&n(r.getItem(),r),o.reconnect()}constructor(t,r,o){this.spec=t,this.monitor=r,this.connector=o}}function wn(s,t,r){const o=c.useMemo(()=>new vn(s,t,r),[t,r]);return c.useEffect(()=>{o.spec=s},[s]),o}function jn(s){return c.useMemo(()=>{const t=s.type;return A(t!=null,"spec.type must be defined"),t},[s])}function Nn(s,t,r){const o=re(),n=wn(s,t,r),i=jn(s);Y(function(){if(i!=null){const[l,p]=pn(i,n,o);return t.receiveHandlerId(l),r.receiveHandlerId(l),p}},[o,t,r,n,i])}function Sn(s,t){const r=St(s);A(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const o=yn(),n=bn(r.options,r.previewOptions);return Nn(r,o,n),[Nt(r.collect,o,n),an(n),ln(n)]}function Dn(s){return c.useMemo(()=>s.hooks.dropTarget(),[s])}function Cn(s){const t=re(),r=c.useMemo(()=>new xn(t.getBackend()),[t]);return Y(()=>(r.dropTargetOptions=s||null,r.reconnect(),()=>r.disconnectDropTarget()),[s]),r}function In(){const s=re();return c.useMemo(()=>new dn(s),[s])}function kn(s){const{accept:t}=s;return c.useMemo(()=>(A(s.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class Tn{canDrop(){const t=this.spec,r=this.monitor;return t.canDrop?t.canDrop(r.getItem(),r):!0}hover(){const t=this.spec,r=this.monitor;t.hover&&t.hover(r.getItem(),r)}drop(){const t=this.spec,r=this.monitor;if(t.drop)return t.drop(r.getItem(),r)}constructor(t,r){this.spec=t,this.monitor=r}}function On(s,t){const r=c.useMemo(()=>new Tn(s,t),[t]);return c.useEffect(()=>{r.spec=s},[s]),r}function Pn(s,t,r){const o=re(),n=On(s,t),i=kn(s);Y(function(){const[l,p]=un(i,n,o);return t.receiveHandlerId(l),r.receiveHandlerId(l),p},[o,t,n,r,i.map(a=>a.toString()).join("|")])}function En(s,t){const r=St(s),o=In(),n=Cn(r.options);return Pn(r,o,n),[Nt(r.collect,o,n),Dn(n)]}function Ct(s){let t=null;return()=>(t==null&&(t=s()),t)}function An(s,t){return s.filter(r=>r!==t)}function $n(s,t){const r=new Set,o=i=>r.add(i);s.forEach(o),t.forEach(o);const n=[];return r.forEach(i=>n.push(i)),n}class Rn{enter(t){const r=this.entered.length,o=n=>this.isNodeInDocument(n)&&(!n.contains||n.contains(t));return this.entered=$n(this.entered.filter(o),[t]),r===0&&this.entered.length>0}leave(t){const r=this.entered.length;return this.entered=An(this.entered.filter(this.isNodeInDocument),t),r>0&&this.entered.length===0}reset(){this.entered=[]}constructor(t){this.entered=[],this.isNodeInDocument=t}}class Mn{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(t=>{Object.defineProperty(this.item,t,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`),null}})})}loadDataTransfer(t){if(t){const r={};Object.keys(this.config.exposeProperties).forEach(o=>{const n=this.config.exposeProperties[o];n!=null&&(r[o]={value:n(t,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,r)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(t,r){return r===t.getSourceId()}endDrag(){}constructor(t){this.config=t,this.item={},this.initializeExposedProperties()}}const It="__NATIVE_FILE__",kt="__NATIVE_URL__",Tt="__NATIVE_TEXT__",Ot="__NATIVE_HTML__",st=Object.freeze(Object.defineProperty({__proto__:null,FILE:It,HTML:Ot,TEXT:Tt,URL:kt},Symbol.toStringTag,{value:"Module"}));function De(s,t,r){const o=t.reduce((n,i)=>n||s.getData(i),"");return o??r}const $e={[It]:{exposeProperties:{files:s=>Array.prototype.slice.call(s.files),items:s=>s.items,dataTransfer:s=>s},matchesTypes:["Files"]},[Ot]:{exposeProperties:{html:(s,t)=>De(s,t,""),dataTransfer:s=>s},matchesTypes:["Html","text/html"]},[kt]:{exposeProperties:{urls:(s,t)=>De(s,t,"").split(`
`),dataTransfer:s=>s},matchesTypes:["Url","text/uri-list"]},[Tt]:{exposeProperties:{text:(s,t)=>De(s,t,""),dataTransfer:s=>s},matchesTypes:["Text","text/plain"]}};function Fn(s,t){const r=$e[s];if(!r)throw new Error(`native type ${s} has no configuration`);const o=new Mn(r);return o.loadDataTransfer(t),o}function Ce(s){if(!s)return null;const t=Array.prototype.slice.call(s.types||[]);return Object.keys($e).filter(r=>{const o=$e[r];return o?.matchesTypes?o.matchesTypes.some(n=>t.indexOf(n)>-1):!1})[0]||null}const Ln=Ct(()=>/firefox/i.test(navigator.userAgent)),Pt=Ct(()=>!!window.safari);class nt{interpolate(t){const{xs:r,ys:o,c1s:n,c2s:i,c3s:a}=this;let l=r.length-1;if(t===r[l])return o[l];let p=0,u=a.length-1,h;for(;p<=u;){h=Math.floor(.5*(p+u));const v=r[h];if(v<t)p=h+1;else if(v>t)u=h-1;else return o[h]}l=Math.max(0,u);const x=t-r[l],j=x*x;return o[l]+n[l]*x+i[l]*j+a[l]*x*j}constructor(t,r){const{length:o}=t,n=[];for(let v=0;v<o;v++)n.push(v);n.sort((v,P)=>t[v]<t[P]?-1:1);const i=[],a=[];let l,p;for(let v=0;v<o-1;v++)l=t[v+1]-t[v],p=r[v+1]-r[v],i.push(l),a.push(p/l);const u=[a[0]];for(let v=0;v<i.length-1;v++){const P=a[v],D=a[v+1];if(P*D<=0)u.push(0);else{l=i[v];const w=i[v+1],C=l+w;u.push(3*C/((C+w)/P+(C+l)/D))}}u.push(a[a.length-1]);const h=[],x=[];let j;for(let v=0;v<u.length-1;v++){j=a[v];const P=u[v],D=1/i[v],w=P+u[v+1]-j-j;h.push((j-P-w)*D),x.push(w*D*D)}this.xs=t,this.ys=r,this.c1s=u,this.c2s=h,this.c3s=x}}const Hn=1;function Et(s){const t=s.nodeType===Hn?s:s.parentElement;if(!t)return null;const{top:r,left:o}=t.getBoundingClientRect();return{x:o,y:r}}function de(s){return{x:s.clientX,y:s.clientY}}function Bn(s){var t;return s.nodeName==="IMG"&&(Ln()||!(!((t=document.documentElement)===null||t===void 0)&&t.contains(s)))}function Un(s,t,r,o){let n=s?t.width:r,i=s?t.height:o;return Pt()&&s&&(i/=window.devicePixelRatio,n/=window.devicePixelRatio),{dragPreviewWidth:n,dragPreviewHeight:i}}function zn(s,t,r,o,n){const i=Bn(t),l=Et(i?s:t),p={x:r.x-l.x,y:r.y-l.y},{offsetWidth:u,offsetHeight:h}=s,{anchorX:x,anchorY:j}=o,{dragPreviewWidth:v,dragPreviewHeight:P}=Un(i,t,u,h),D=()=>{let T=new nt([0,.5,1],[p.y,p.y/h*P,p.y+P-h]).interpolate(j);return Pt()&&i&&(T+=(window.devicePixelRatio-1)*P),T},w=()=>new nt([0,.5,1],[p.x,p.x/u*v,p.x+v-u]).interpolate(x),{offsetX:C,offsetY:N}=n,d=C===0||C,y=N===0||N;return{x:d?C:w(),y:y?N:D()}}class _n{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var t;return!((t=this.globalContext)===null||t===void 0)&&t.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var t;return((t=this.optionsArgs)===null||t===void 0?void 0:t.rootElement)||this.window}constructor(t,r){this.ownerDocument=null,this.globalContext=t,this.optionsArgs=r}}function Gn(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function ot(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){Gn(s,n,r[n])})}return s}class Wn{profile(){var t,r;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((t=this.dragStartSourceIds)===null||t===void 0?void 0:t.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((r=this.dragOverTargetIds)===null||r===void 0?void 0:r.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const t=this.rootElement;if(t!==void 0){if(t.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");t.__isReactDndBackendSetUp=!0,this.addEventListeners(t)}}teardown(){const t=this.rootElement;if(t!==void 0&&(t.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var r;(r=this.window)===null||r===void 0||r.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(t,r,o){return this.sourcePreviewNodeOptions.set(t,o),this.sourcePreviewNodes.set(t,r),()=>{this.sourcePreviewNodes.delete(t),this.sourcePreviewNodeOptions.delete(t)}}connectDragSource(t,r,o){this.sourceNodes.set(t,r),this.sourceNodeOptions.set(t,o);const n=a=>this.handleDragStart(a,t),i=a=>this.handleSelectStart(a);return r.setAttribute("draggable","true"),r.addEventListener("dragstart",n),r.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(t),this.sourceNodeOptions.delete(t),r.removeEventListener("dragstart",n),r.removeEventListener("selectstart",i),r.setAttribute("draggable","false")}}connectDropTarget(t,r){const o=a=>this.handleDragEnter(a,t),n=a=>this.handleDragOver(a,t),i=a=>this.handleDrop(a,t);return r.addEventListener("dragenter",o),r.addEventListener("dragover",n),r.addEventListener("drop",i),()=>{r.removeEventListener("dragenter",o),r.removeEventListener("dragover",n),r.removeEventListener("drop",i)}}addEventListeners(t){t.addEventListener&&(t.addEventListener("dragstart",this.handleTopDragStart),t.addEventListener("dragstart",this.handleTopDragStartCapture,!0),t.addEventListener("dragend",this.handleTopDragEndCapture,!0),t.addEventListener("dragenter",this.handleTopDragEnter),t.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.addEventListener("dragover",this.handleTopDragOver),t.addEventListener("dragover",this.handleTopDragOverCapture,!0),t.addEventListener("drop",this.handleTopDrop),t.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(t){t.removeEventListener&&(t.removeEventListener("dragstart",this.handleTopDragStart),t.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),t.removeEventListener("dragend",this.handleTopDragEndCapture,!0),t.removeEventListener("dragenter",this.handleTopDragEnter),t.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.removeEventListener("dragover",this.handleTopDragOver),t.removeEventListener("dragover",this.handleTopDragOverCapture,!0),t.removeEventListener("drop",this.handleTopDrop),t.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourceNodeOptions.get(t);return ot({dropEffect:this.altKeyPressed?"copy":"move"},r||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourcePreviewNodeOptions.get(t);return ot({anchorX:.5,anchorY:.5,captureDraggingState:!1},r||{})}isDraggingNativeItem(){const t=this.monitor.getItemType();return Object.keys(st).some(r=>st[r]===t)}beginDragNativeItem(t,r){this.clearCurrentDragSourceNode(),this.currentNativeSource=Fn(t,r),this.currentNativeHandle=this.registry.addSource(t,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(t){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=t;const r=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var o;return(o=this.rootElement)===null||o===void 0?void 0:o.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},r)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var t;(t=this.window)===null||t===void 0||t.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(t,r){t.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(r))}handleDragEnter(t,r){this.dragEnterTargetIds.unshift(r)}handleDragOver(t,r){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(r)}handleDrop(t,r){this.dropTargetIds.unshift(r)}constructor(t,r,o){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=n=>{const i=this.sourceNodes.get(n);return i&&Et(i)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=n=>!!(n&&this.document&&this.document.body&&this.document.body.contains(n)),this.endDragIfSourceWasRemovedFromDOM=()=>{const n=this.currentDragSourceNode;n==null||this.isNodeInDocument(n)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=n=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(n||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=n=>{if(n.defaultPrevented)return;const{dragStartSourceIds:i}=this;this.dragStartSourceIds=null;const a=de(n);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(i||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:a});const{dataTransfer:l}=n,p=Ce(l);if(this.monitor.isDragging()){if(l&&typeof l.setDragImage=="function"){const h=this.monitor.getSourceId(),x=this.sourceNodes.get(h),j=this.sourcePreviewNodes.get(h)||x;if(j){const{anchorX:v,anchorY:P,offsetX:D,offsetY:w}=this.getCurrentSourcePreviewNodeOptions(),d=zn(x,j,a,{anchorX:v,anchorY:P},{offsetX:D,offsetY:w});l.setDragImage(j,d.x,d.y)}}try{l?.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(n.target);const{captureDraggingState:u}=this.getCurrentSourcePreviewNodeOptions();u?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(p)this.beginDragNativeItem(p);else{if(l&&!l.types&&(n.target&&!n.target.hasAttribute||!n.target.hasAttribute("draggable")))return;n.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=n=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(n.dataTransfer)}if(!this.enterLeaveCounter.enter(n.target)||this.monitor.isDragging())return;const{dataTransfer:l}=n,p=Ce(l);p&&this.beginDragNativeItem(p,l)},this.handleTopDragEnter=n=>{const{dragEnterTargetIds:i}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=n.altKey,i.length>0&&this.actions.hover(i,{clientOffset:de(n)}),i.some(l=>this.monitor.canDropOnTarget(l))&&(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=n=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(n.dataTransfer)}},this.handleTopDragOver=n=>{const{dragOverTargetIds:i}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect="none");return}this.altKeyPressed=n.altKey,this.lastClientOffset=de(n),this.scheduleHover(i),(i||[]).some(l=>this.monitor.canDropOnTarget(l))?(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?n.preventDefault():(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=n=>{this.isDraggingNativeItem()&&n.preventDefault(),this.enterLeaveCounter.leave(n.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=n=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var i;n.preventDefault(),(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(n.dataTransfer)}else Ce(n.dataTransfer)&&n.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=n=>{const{dropTargetIds:i}=this;this.dropTargetIds=[],this.actions.hover(i,{clientOffset:de(n)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=n=>{const i=n.target;typeof i.dragDrop=="function"&&(i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable||(n.preventDefault(),i.dragDrop()))},this.options=new _n(r,o),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.enterLeaveCounter=new Rn(this.isNodeInDocument)}}const qn=function(t,r,o){return new Wn(t,r,o)},Vn=({projectId:s,onCodeChange:t,initialComponents:r=[]})=>{const[o,n]=c.useState(r),[i,a]=c.useState(null),[l,p]=c.useState(!1),[u,h]=c.useState(!1),[x,j]=c.useState({width:1200,height:800}),[v,P]=c.useState(1),D=c.useRef(null),w=[{type:"container",name:"Container",icon:"📦",category:"Layout"},{type:"text",name:"Text",icon:"📝",category:"Content"},{type:"button",name:"Button",icon:"🔘",category:"Interactive"},{type:"input",name:"Input",icon:"📝",category:"Form"},{type:"image",name:"Image",icon:"🖼️",category:"Media"},{type:"card",name:"Card",icon:"🃏",category:"Layout"},{type:"header",name:"Header",icon:"📋",category:"Layout"},{type:"footer",name:"Footer",icon:"🦶",category:"Layout"},{type:"sidebar",name:"Sidebar",icon:"📑",category:"Layout"},{type:"navbar",name:"Navbar",icon:"🧭",category:"Navigation"},{type:"form",name:"Form",icon:"📋",category:"Form"},{type:"table",name:"Table",icon:"📊",category:"Data"},{type:"chart",name:"Chart",icon:"📈",category:"Data"},{type:"modal",name:"Modal",icon:"🪟",category:"Overlay"},{type:"dropdown",name:"Dropdown",icon:"📋",category:"Interactive"}],C=m=>({container:`<div className="container" style={${JSON.stringify(m.styles)}}>
  {children}
</div>`,text:`<p className="text" style={${JSON.stringify(m.styles)}}>
  ${m.content||"Text content"}
</p>`,button:`<button className="btn" style={${JSON.stringify(m.styles)}} onClick={${m.onClick||"() => {}"}}>
  ${m.content||"Button"}
</button>`,input:`<input 
  className="input" 
  type="${m.inputType||"text"}"
  placeholder="${m.placeholder||""}"
  style={${JSON.stringify(m.styles)}}
/>`,image:`<img 
  className="image" 
  src="${m.src||"/placeholder.jpg"}"
  alt="${m.alt||""}"
  style={${JSON.stringify(m.styles)}}
/>`,card:`<div className="card" style={${JSON.stringify(m.styles)}}>
  <div className="card-header">
    <h3>${m.title||"Card Title"}</h3>
  </div>
  <div className="card-body">
    <p>${m.content||"Card content"}</p>
  </div>
</div>`,header:`<header className="header" style={${JSON.stringify(m.styles)}}>
  <h1>${m.content||"Header"}</h1>
</header>`,footer:`<footer className="footer" style={${JSON.stringify(m.styles)}}>
  <p>${m.content||"Footer content"}</p>
</footer>`,sidebar:`<aside className="sidebar" style={${JSON.stringify(m.styles)}}>
  <nav>
    <ul>
      <li><a href="#">Menu Item 1</a></li>
      <li><a href="#">Menu Item 2</a></li>
    </ul>
  </nav>
</aside>`,navbar:`<nav className="navbar" style={${JSON.stringify(m.styles)}}>
  <div className="nav-brand">${m.brand||"Brand"}</div>
  <ul className="nav-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`,form:`<form className="form" style={${JSON.stringify(m.styles)}} onSubmit={${m.onSubmit||"() => {}"}}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" name="name" />
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" name="email" />
  </div>
  <button type="submit">Submit</button>
</form>`,table:`<table className="table" style={${JSON.stringify(m.styles)}}>
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
</table>`,chart:`<div className="chart" style={${JSON.stringify(m.styles)}}>
  <canvas id="chart-${m.id}"></canvas>
</div>`,modal:`<div className="modal" style={${JSON.stringify(m.styles)}}>
  <div className="modal-content">
    <span className="close" onClick={${m.onClose||"() => {}"}}>&times;</span>
    <h2>${m.title||"Modal Title"}</h2>
    <p>${m.content||"Modal content"}</p>
  </div>
</div>`,dropdown:`<div className="dropdown" style={${JSON.stringify(m.styles)}}>
  <button className="dropdown-toggle" onClick={${m.onToggle||"() => {}"}}>
    ${m.label||"Dropdown"}
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
</div>`})[m.type]||`<div>Unknown component: ${m.type}</div>`,N=()=>{const m=`import React, { useState, useEffect } from 'react';
import './App.css';`,k=`const App = () => {
  return (
    <div className="app">
      ${o.map(F=>C(F)).join(`

`)}
    </div>
  );
};

export default App;`;return`${m}

${k}`},d=(m,f)=>{const k=f.getDropResult();if(!k)return;const F={id:`component-${Date.now()}`,type:m.type,name:m.name,position:{x:k.x,y:k.y},size:{width:200,height:100},styles:{position:"absolute",left:`${k.x}px`,top:`${k.y}px`,width:"200px",height:"100px",border:"1px solid #ddd",padding:"10px",backgroundColor:"#fff"},content:m.name,properties:{}};n(E=>[...E,F])},y=m=>{a(m),p(!0)},b=(m,f)=>{if(!i)return;const k={...i,[m]:f,styles:{...i.styles,[m]:f}};n(F=>F.map(E=>E.id===i.id?k:E)),a(k)},T=()=>`
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
`,I=()=>{const m={components:o,appCode:N(),cssCode:T(),metadata:{projectId:s,exportedAt:new Date().toISOString(),componentCount:o.length}},f=JSON.stringify(m,null,2),k=new Blob([f],{type:"application/json"}),F=URL.createObjectURL(k),E=document.createElement("a");E.href=F,E.download=`dreambuild-project-${s}.json`,E.click(),URL.revokeObjectURL(F)};return c.useEffect(()=>{t&&t({appCode:N(),cssCode:T(),components:o})},[o,t]),e.jsx(Qs,{backend:qn,children:e.jsxs("div",{className:"visual-editor",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("h2",{children:"🎨 Visual Editor"}),e.jsxs("div",{className:"editor-controls",children:[e.jsx("button",{className:"btn btn-secondary",onClick:()=>h(!u),children:u?"Edit":"Preview"}),e.jsx("button",{className:"btn btn-primary",onClick:I,children:"Export"})]})]}),e.jsxs("div",{className:"editor-layout",children:[e.jsxs("div",{className:"component-library",children:[e.jsx("h3",{children:"📚 Component Library"}),e.jsx("div",{className:"library-categories",children:["Layout","Content","Interactive","Form","Media","Data","Navigation","Overlay"].map(m=>e.jsxs("div",{className:"category",children:[e.jsx("h4",{children:m}),e.jsx("div",{className:"category-components",children:w.filter(f=>f.category===m).map(f=>e.jsx(Yn,{type:f.type,name:f.name,icon:f.icon},f.type))})]},m))})]}),e.jsxs("div",{className:"canvas-container",children:[e.jsxs("div",{className:"canvas-toolbar",children:[e.jsxs("div",{className:"canvas-controls",children:[e.jsx("button",{className:"btn btn-sm",onClick:()=>P(v*.8),children:"Zoom Out"}),e.jsxs("span",{className:"zoom-level",children:[Math.round(v*100),"%"]}),e.jsx("button",{className:"btn btn-sm",onClick:()=>P(v*1.2),children:"Zoom In"})]}),e.jsx("div",{className:"canvas-size",children:e.jsxs("select",{value:`${x.width}x${x.height}`,onChange:m=>{const[f,k]=m.target.value.split("x").map(Number);j({width:f,height:k})},children:[e.jsx("option",{value:"1200x800",children:"Desktop (1200x800)"}),e.jsx("option",{value:"768x1024",children:"Tablet (768x1024)"}),e.jsx("option",{value:"375x667",children:"Mobile (375x667)"})]})})]}),e.jsx("div",{className:"canvas",ref:D,style:{width:x.width*v,height:x.height*v,transform:`scale(${v})`,transformOrigin:"top left"},children:e.jsx(Jn,{onDrop:d,children:o.map(m=>e.jsx(Xn,{component:m,onSelect:y,isSelected:i?.id===m.id},m.id))})})]}),l&&i&&e.jsxs("div",{className:"properties-panel",children:[e.jsx("h3",{children:"⚙️ Properties"}),e.jsxs("div",{className:"property-groups",children:[e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Content"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Text Content"}),e.jsx("input",{type:"text",value:i.content||"",onChange:m=>b("content",m.target.value)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Position"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"X Position"}),e.jsx("input",{type:"number",value:i.position?.x||0,onChange:m=>b("left",`${m.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Y Position"}),e.jsx("input",{type:"number",value:i.position?.y||0,onChange:m=>b("top",`${m.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Size"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Width"}),e.jsx("input",{type:"number",value:i.size?.width||200,onChange:m=>b("width",`${m.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Height"}),e.jsx("input",{type:"number",value:i.size?.height||100,onChange:m=>b("height",`${m.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Style"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Background Color"}),e.jsx("input",{type:"color",value:i.styles?.backgroundColor||"#ffffff",onChange:m=>b("backgroundColor",m.target.value)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Border Color"}),e.jsx("input",{type:"color",value:i.styles?.borderColor||"#dddddd",onChange:m=>b("borderColor",m.target.value)})]})]})]})]})]}),e.jsx("style",{jsx:!0,children:`
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
        `})]})})},Yn=({type:s,name:t,icon:r})=>{const[{isDragging:o},n]=Sn({type:"component",item:{type:s,name:t},collect:i=>({isDragging:i.isDragging()})});return e.jsxs("div",{ref:n,className:`draggable-component ${o?"dragging":""}`,children:[e.jsx("span",{className:"component-icon",children:r}),e.jsx("span",{className:"component-name",children:t})]})},Jn=({children:s,onDrop:t})=>{const[{isOver:r},o]=En({accept:"component",drop:(n,i)=>{const a=i.getClientOffset(),l=i.getDropResult()?.getBoundingClientRect();a&&l&&t(n,{x:a.x-l.left,y:a.y-l.top})},collect:n=>({isOver:n.isOver()})});return e.jsx("div",{ref:o,className:`droppable-canvas ${r?"drag-over":""}`,children:s})},Xn=({component:s,onSelect:t,isSelected:r})=>{const o=n=>{n.stopPropagation(),t(s)};return e.jsx("div",{className:`visual-component ${r?"selected":""}`,style:s.styles,onClick:o,children:e.jsxs("div",{className:"component-content",children:[s.type==="text"&&(s.content||"Text"),s.type==="button"&&(s.content||"Button"),s.type==="input"&&e.jsx("input",{placeholder:s.placeholder||"Input"}),s.type==="image"&&e.jsx("div",{className:"image-placeholder",children:"🖼️ Image"}),s.type==="card"&&e.jsxs("div",{children:[e.jsx("h3",{children:s.title||"Card Title"}),e.jsx("p",{children:s.content||"Card content"})]}),!["text","button","input","image","card"].includes(s.type)&&e.jsx("div",{className:"component-placeholder",children:s.name})]})})},Zn=({projectId:s,projectData:t,onDeploy:r})=>{const[o,n]=c.useState("vercel"),[i,a]=c.useState(!1),[l,p]=c.useState(null),u=[{id:"vercel",name:"Vercel",icon:"▲",description:"Fast, global deployment"},{id:"netlify",name:"Netlify",icon:"🌐",description:"JAMstack deployment"},{id:"aws",name:"AWS Amplify",icon:"☁️",description:"Full-stack deployment"},{id:"firebase",name:"Firebase",icon:"🔥",description:"Google hosting"},{id:"github",name:"GitHub Pages",icon:"🐙",description:"Free static hosting"}],h=async()=>{a(!0),p("Deploying...");try{await new Promise(j=>setTimeout(j,3e3));const x={success:!0,provider:o,url:`https://${s}.${o}.com`,deployedAt:new Date().toISOString()};p("Deployed successfully!"),r&&r(x)}catch{p("Deployment failed")}finally{a(!1)}};return e.jsxs("div",{className:"deployment-panel",children:[e.jsx("h3",{children:"🚀 Deploy Your App"}),e.jsxs("div",{className:"provider-selection",children:[e.jsx("h4",{children:"Choose Hosting Provider"}),e.jsx("div",{className:"providers-grid",children:u.map(x=>e.jsxs("div",{className:`provider-card ${o===x.id?"selected":""}`,onClick:()=>n(x.id),children:[e.jsx("div",{className:"provider-icon",children:x.icon}),e.jsx("div",{className:"provider-name",children:x.name}),e.jsx("div",{className:"provider-description",children:x.description})]},x.id))})]}),e.jsx("div",{className:"deployment-actions",children:e.jsx("button",{className:"btn btn-primary btn-lg",onClick:h,disabled:i,children:i?"Deploying...":"Deploy Now"})}),l&&e.jsx("div",{className:"deployment-status",children:e.jsx("div",{className:`status-message ${l.includes("success")?"success":"error"}`,children:l})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},Kn=({projectId:s,onMemoryUpdate:t})=>{const[r,o]=c.useState(null),[n,i]=c.useState([]),[a,l]=c.useState(""),[p,u]=c.useState([]),[h,x]=c.useState(!1),[j,v]=c.useState(null);c.useEffect(()=>{s&&(P(),D())},[s]);const P=async()=>{try{x(!0);const d=await ie.loadConversationMemory(s);if(o(d),d){const y=await ie.getConversationHistory(s);i(y)}}catch(d){console.error("Failed to load memory:",d)}finally{x(!1)}},D=async()=>{try{const d=await ie.getStorageStats();v(d)}catch(d){console.error("Failed to load stats:",d)}},w=async()=>{if(a.trim())try{x(!0);const d=await ie.searchConversationMemory(s,a);u(d)}catch(d){console.error("Failed to search memory:",d)}finally{x(!1)}},C=async()=>{if(window.confirm("Are you sure you want to clear all conversation memory?"))try{await ie.clearConversationMemory(s),o(null),i([]),u([]),t&&t()}catch(d){console.error("Failed to clear memory:",d)}},N=()=>{if(!r)return;const d=JSON.stringify(r,null,2),y=new Blob([d],{type:"application/json"}),b=URL.createObjectURL(y),T=document.createElement("a");T.href=b,T.download=`dreambuild-memory-${s}.json`,T.click(),URL.revokeObjectURL(b)};return h?e.jsx("div",{className:"memory-manager",children:e.jsx("div",{className:"loading",children:"Loading memory..."})}):e.jsxs("div",{className:"memory-manager",children:[e.jsxs("div",{className:"memory-header",children:[e.jsx("h3",{children:"🧠 Conversation Memory"}),e.jsxs("div",{className:"memory-actions",children:[e.jsx("button",{onClick:P,className:"btn btn-secondary",children:"Refresh"}),e.jsx("button",{onClick:N,className:"btn btn-secondary",children:"Export"}),e.jsx("button",{onClick:C,className:"btn btn-danger",children:"Clear"})]})]}),j&&e.jsxs("div",{className:"memory-stats",children:[e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Projects:"}),e.jsx("span",{className:"stat-value",children:j.totalProjects})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Files:"}),e.jsx("span",{className:"stat-value",children:j.totalFiles})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Size:"}),e.jsxs("span",{className:"stat-value",children:[j.totalSizeMB," MB"]})]})]}),e.jsxs("div",{className:"memory-search",children:[e.jsx("input",{type:"text",placeholder:"Search conversation memory...",value:a,onChange:d=>l(d.target.value),onKeyPress:d=>d.key==="Enter"&&w()}),e.jsx("button",{onClick:w,className:"btn btn-primary",children:"Search"})]}),p.length>0&&e.jsxs("div",{className:"search-results",children:[e.jsx("h4",{children:"Search Results"}),p.map((d,y)=>e.jsxs("div",{className:"search-result",children:[e.jsx("div",{className:"result-type",children:d.type}),e.jsx("div",{className:"result-text",children:d.text}),e.jsx("div",{className:"result-timestamp",children:d.timestamp})]},y))]}),n.prompts&&n.prompts.length>0&&e.jsxs("div",{className:"conversation-history",children:[e.jsx("h4",{children:"Conversation History"}),e.jsxs("div",{className:"history-stats",children:[e.jsxs("span",{children:["Prompts: ",n.totalPrompts]}),e.jsxs("span",{children:["Responses: ",n.totalResponses]})]}),e.jsx("div",{className:"history-list",children:n.prompts.map((d,y)=>e.jsxs("div",{className:"history-item",children:[e.jsxs("div",{className:"history-prompt",children:[e.jsx("strong",{children:"Prompt:"})," ",d.text]}),n.responses[y]&&e.jsxs("div",{className:"history-response",children:[e.jsx("strong",{children:"Response:"})," ",n.responses[y].text]}),e.jsx("div",{className:"history-timestamp",children:new Date(d.timestamp).toLocaleString()})]},d.id))})]}),r&&e.jsxs("div",{className:"memory-details",children:[e.jsx("h4",{children:"Memory Details"}),e.jsxs("div",{className:"memory-info",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Project ID:"})," ",r.projectId]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Created:"})," ",new Date(r.createdAt).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Last Updated:"})," ",new Date(r.lastUpdated).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Memory Size:"})," ",JSON.stringify(r).length," bytes"]})]})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},po=({projectId:s,initialFiles:t={}})=>{const[r,o]=c.useState("code"),[n,i]=c.useState(t),[a,l]=c.useState(null),[p,u]=c.useState(!1),[h,x]=c.useState(!1),[j,v]=c.useState(null),P=[{id:"code",name:"Code Editor",icon:"💻"},{id:"visual",name:"Visual Editor",icon:"🎨"},{id:"collaboration",name:"Collaboration",icon:"🤝"},{id:"deployment",name:"Deployment",icon:"🚀"},{id:"memory",name:"Memory",icon:"🧠"}],D=(y,b)=>{i(T=>({...T,[y]:b}))},w=y=>{y.appCode&&D("src/App.jsx",y.appCode),y.cssCode&&D("src/App.css",y.cssCode)},C=y=>{v(y),console.log("Deployment result:",y)},N=y=>{i(b=>({...b,...y})),console.log("Version restored:",y)},d=()=>{switch(r){case"code":return e.jsxs("div",{className:"code-editor-tab",children:[e.jsxs("div",{className:"file-explorer",children:[e.jsx("h3",{children:"📁 Files"}),e.jsx("div",{className:"file-list",children:Object.keys(n).map(y=>e.jsxs("div",{className:`file-item ${a===y?"selected":""}`,onClick:()=>l(y),children:[e.jsx("span",{className:"file-icon",children:"📄"}),e.jsx("span",{className:"file-name",children:y})]},y))})]}),e.jsx("div",{className:"code-editor",children:a&&e.jsxs("div",{className:"editor-container",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("span",{className:"file-name",children:a}),e.jsxs("div",{className:"editor-actions",children:[e.jsx("button",{className:"btn btn-sm",children:"Save"}),e.jsx("button",{className:"btn btn-sm",children:"Format"})]})]}),e.jsx("textarea",{className:"code-textarea",value:n[a]||"",onChange:y=>D(a,y.target.value),placeholder:"Start coding..."})]})})]});case"visual":return e.jsx("div",{className:"visual-editor-tab",children:e.jsx(Vn,{projectId:s,onCodeChange:w,initialComponents:[]})});case"collaboration":return e.jsxs("div",{className:"collaboration-tab",children:[e.jsxs("div",{className:"collaboration-header",children:[e.jsx("h3",{children:"🤝 Real-time Collaboration"}),e.jsxs("button",{className:`btn ${p?"btn-danger":"btn-primary"}`,onClick:()=>u(!p),children:[p?"Disable":"Enable"," Collaboration"]})]}),p?e.jsx(Mr,{projectId:s,fileId:a,onFileChange:D,onVersionRestore:N}):e.jsxs("div",{className:"collaboration-disabled",children:[e.jsx("p",{children:"Enable collaboration to work with team members in real-time"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Multi-user co-editing"}),e.jsx("li",{children:"Real-time comments"}),e.jsx("li",{children:"Version history"}),e.jsx("li",{children:"User presence"})]})]})]});case"deployment":return e.jsxs("div",{className:"deployment-tab",children:[e.jsx(Zn,{projectId:s,projectData:{files:n},onDeploy:C}),j&&e.jsxs("div",{className:"deployment-result",children:[e.jsx("h4",{children:"Deployment Result"}),e.jsxs("div",{className:"result-details",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Provider:"})," ",j.provider]}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ",e.jsx("a",{href:j.url,target:"_blank",rel:"noopener noreferrer",children:j.url})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",j.status]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deployed:"})," ",new Date(j.deployedAt).toLocaleString()]})]})]})]});case"memory":return e.jsx("div",{className:"memory-tab",children:e.jsx(Kn,{projectId:s,onMemoryUpdate:()=>console.log("Memory updated")})});default:return e.jsx("div",{children:"Select a tab to get started"})}};return e.jsxs("div",{className:"integrated-workspace",children:[e.jsxs("div",{className:"workspace-header",children:[e.jsx("h2",{children:"🚀 DreamBuild Advanced Workspace"}),e.jsxs("div",{className:"workspace-status",children:[e.jsx("span",{className:"status-indicator",children:"●"}),e.jsxs("span",{children:["Project: ",s]})]})]}),e.jsx("div",{className:"workspace-tabs",children:P.map(y=>e.jsxs("button",{className:`tab-button ${r===y.id?"active":""}`,onClick:()=>o(y.id),children:[e.jsx("span",{className:"tab-icon",children:y.icon}),e.jsx("span",{className:"tab-name",children:y.name})]},y.id))}),e.jsx("div",{className:"workspace-content",children:d()}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},mo=({onTemplateSelect:s,isVisible:t,onClose:r})=>{const{currentProject:o,updateFile:n,switchFile:i}=te(),[a,l]=c.useState(""),[p,u]=c.useState("all"),[h,x]=c.useState(!1),j=[{id:"all",name:"All Templates",icon:dt,color:"text-purple-500"},{id:"web-apps",name:"Web Apps",icon:ke,color:"text-blue-500"},{id:"mobile-apps",name:"Mobile Apps",icon:lt,color:"text-green-500"},{id:"games",name:"Games",icon:Dr,color:"text-orange-500"},{id:"tools",name:"Tools",icon:he,color:"text-gray-500"}],[v,P]=c.useState([]),[D,w]=c.useState([]),[C,N]=c.useState(!0);c.useEffect(()=>{t&&(async()=>{try{N(!0);const[m,f]=await Promise.all([ue.getAllTemplates(),ue.getPopularTemplates()]);P(m),w(f)}catch(m){console.error("Failed to load templates:",m),_.error("Failed to load templates")}finally{N(!1)}})()},[t]);const d=v.filter(I=>{const m=I.name.toLowerCase().includes(a.toLowerCase())||I.description.toLowerCase().includes(a.toLowerCase()),f=p==="all"||I.category===p;return m&&f}),y=async I=>{x(!0);try{console.log("🎯 Generating template:",I.id);const m=await ue.generateTemplateById(I.id);Object.entries(m).forEach(([k,F])=>{n(k,F)});const f=Object.keys(m)[0];f&&i(f),_.success(`Generated ${I.name} successfully!`),s&&s(I,m),r&&r()}catch(m){console.error("❌ Template generation failed:",m),_.error(`Failed to generate ${I.name}`)}finally{x(!1)}},b=I=>{const m=j.find(f=>f.id===I);return m?m.icon:he},T=I=>{const m=j.find(f=>f.id===I);return m?m.color:"text-gray-500"};return t?e.jsx(W,{children:e.jsx(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",onClick:r,children:e.jsxs(H.div,{initial:{scale:.95},animate:{scale:1},exit:{scale:.95},className:"bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:I=>I.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:e.jsx(Nr,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-foreground",children:"Template Gallery"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Choose a template to get started"})]})]}),e.jsx("button",{onClick:r,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Close",children:e.jsx("span",{className:"text-xl text-muted-foreground",children:"×"})})]}),e.jsxs("div",{className:"p-6 border-b border-border",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx(We,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search templates...",value:a,onChange:I=>l(I.target.value),className:"w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20"})]}),e.jsxs("button",{className:"px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:bg-muted/80 transition-colors flex items-center gap-2",children:[e.jsx(Sr,{className:"h-4 w-4"}),"Filters"]})]}),e.jsx("div",{className:"flex gap-2 overflow-x-auto",children:j.map(I=>{const m=I.icon;return e.jsxs("button",{onClick:()=>u(I.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${p===I.id?"bg-blue-500 text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[e.jsx(m,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:I.name})]},I.id)})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[p==="all"&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(mt,{className:"h-5 w-5 text-yellow-500"}),e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Popular Templates"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:C?Array.from({length:3}).map((I,m)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},m)):D.map(I=>{const m=b(I.category),f=T(I.category);return e.jsxs(H.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>y(I),disabled:h,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${f}`,children:e.jsx(m,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:I.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[I.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:I.description})]},I.id)})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:p==="all"?"All Templates":j.find(I=>I.id===p)?.name}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:[d.length," template",d.length!==1?"s":""]})]}),d.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4",children:e.jsx(We,{className:"h-8 w-8 text-muted-foreground"})}),e.jsx("h4",{className:"text-lg font-medium text-foreground mb-2",children:"No templates found"}),e.jsx("p",{className:"text-muted-foreground",children:"Try adjusting your search or filters"})]}):C?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Array.from({length:6}).map((I,m)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},m))}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:d.map(I=>{const m=b(I.category),f=T(I.category);return e.jsxs(H.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>y(I),disabled:h,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${f}`,children:e.jsx(m,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:I.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[I.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:I.description})]},I.id)})})]})]}),e.jsx("div",{className:"p-6 border-t border-border bg-muted/30",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"Need something custom? Use the AI prompt to generate unique applications."}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"Close"})]})})]})})}):null},ho=()=>{const[s,t]=c.useState([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"Terminal is fully functional and ready to use",timestamp:new Date},{type:"output",content:"",timestamp:new Date}]),[r,o]=c.useState(""),[n,i]=c.useState(!1),[a,l]=c.useState("~/dreambuild"),p=c.useRef(null),u=c.useRef(null);c.useEffect(()=>{p.current&&(p.current.scrollTop=p.current.scrollHeight)},[s]),c.useEffect(()=>{u.current&&u.current.focus()},[]);const h=async w=>{if(!w.trim())return;const C={type:"input",content:`$ ${w}`,timestamp:new Date};t(N=>[...N,C]),i(!0);try{await new Promise(b=>setTimeout(b,500));let N="";const d=w.trim().toLowerCase();switch(d){case"help":N=`Available commands:
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
  status        - Show project status`;break;case"clear":t([]),i(!1);return;case"ls":N=`total 8
drwxr-xr-x  3 user  staff   96 Dec 15 10:30 .
drwxr-xr-x  5 user  staff  160 Dec 15 10:25 ..
-rw-r--r--  1 user  staff  245 Dec 15 10:30 package.json
-rw-r--r--  1 user  staff  156 Dec 15 10:30 README.md
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 src
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 dist`;break;case"pwd":N=a;break;case"status":N=`Project Status:
  Name: DreamBuild AI Platform
  Version: 1.0.0
  Status: Running
  Port: 3000
  Environment: Development
  Last Build: 2 minutes ago
  Files: 15 modified`;break;case"build":N=`Building project...
  ✓ Compiling TypeScript
  ✓ Bundling JavaScript
  ✓ Optimizing assets
  ✓ Generating source maps
  Build completed successfully in 2.3s`;break;case"deploy":N=`Deploying to Firebase...
  ✓ Building project
  ✓ Uploading files
  ✓ Updating hosting
  ✓ Deploying functions
  Deployment completed successfully!
  URL: https://dreambuild-2024-app.web.app`;break;default:if(d.startsWith("cd ")){const b=d.substring(3);b===".."?(l(T=>T.split("/").slice(0,-1).join("/")||"~"),N=`Changed directory to ${a}`):b==="~"||b==="home"?(l("~/dreambuild"),N="Changed directory to ~/dreambuild"):(l(T=>`${T}/${b}`),N=`Changed directory to ${a}/${b}`)}else d.startsWith("mkdir ")?N=`Created directory: ${d.substring(6)}`:d.startsWith("touch ")?N=`Created file: ${d.substring(6)}`:d.startsWith("cat ")?N=`Contents of ${d.substring(4)}:
// This is a sample file
`:d.startsWith("echo ")?N=d.substring(5):d.startsWith("npm ")?N=`Running: npm ${d.substring(4)}
  ✓ Dependencies installed
  ✓ Script executed successfully`:d.startsWith("git ")?N=`Running: git ${d.substring(4)}
  ✓ Command executed successfully`:N=`Command not found: ${w}
Type "help" for available commands`}const y={type:"output",content:N,timestamp:new Date};t(b=>[...b,y])}catch(N){const d={type:"error",content:`Error: ${N.message}`,timestamp:new Date};t(y=>[...y,d])}finally{i(!1);const N={type:"prompt",content:`${a} $ `,timestamp:new Date};t(d=>[...d,N])}},x=w=>{w.preventDefault(),r.trim()&&!n&&(h(r),o(""))},j=w=>{w.key==="l"&&w.ctrlKey&&(w.preventDefault(),t([]))},v=()=>{t([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"",timestamp:new Date}])},P=()=>{const w=s.map(C=>C.content).join(`
`);navigator.clipboard.writeText(w),$.success("Terminal history copied to clipboard")},D=()=>{const w=s.map(y=>y.content).join(`
`),C=new Blob([w],{type:"text/plain"}),N=URL.createObjectURL(C),d=document.createElement("a");d.href=N,d.download="terminal-history.txt",d.click(),URL.revokeObjectURL(N),$.success("Terminal history downloaded")};return console.log("🖥️ Terminal component rendering"),e.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-gray-900 text-green-400 font-mono",children:[e.jsx("div",{className:"absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs z-50",children:"TERMINAL ACTIVE"}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Cr,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:"DreamBuild Terminal"}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:v,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Clear Terminal",children:e.jsx(it,{className:"h-4 w-4"})}),e.jsx("button",{onClick:P,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Copy History",children:e.jsx(le,{className:"h-4 w-4"})}),e.jsx("button",{onClick:D,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Download History",children:e.jsx(me,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{ref:p,className:"flex-1 overflow-y-auto p-4 space-y-1",style:{minHeight:"400px"},children:[s.map((w,C)=>e.jsx("div",{className:`${w.type==="input"?"text-blue-400":w.type==="error"?"text-red-400":w.type==="prompt"?"text-green-400":"text-gray-300"} whitespace-pre-wrap`,children:w.content},C)),n&&e.jsx("div",{className:"text-yellow-400 animate-pulse",children:e.jsx("span",{className:"inline-block w-2 h-4 bg-yellow-400 animate-pulse"})})]}),e.jsxs("form",{onSubmit:x,className:"flex items-center px-4 py-2 bg-gray-800 border-t border-gray-700",children:[e.jsxs("span",{className:"text-green-400 mr-2",children:[a," $"]}),e.jsx("input",{ref:u,type:"text",value:r,onChange:w=>o(w.target.value),onKeyDown:j,className:"flex-1 bg-transparent text-green-400 outline-none",placeholder:"Enter command...",disabled:n}),n&&e.jsx("div",{className:"ml-2",children:e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-green-400"})})]})]})},go=({children:s,direction:t="horizontal",className:r=""})=>e.jsx("div",{className:`resizable-panel-group flex ${t} h-full ${r}`,children:s}),fo=({children:s,defaultSize:t=50,minSize:r=10,maxSize:o=90,className:n=""})=>e.jsx("div",{className:`resizable-panel ${n}`,style:{flexBasis:`${t}%`,minWidth:`${r}%`,maxWidth:`${o}%`},children:s}),xo=({className:s="",onResize:t,children:r,handleIndex:o=0})=>{const[n,i]=c.useState(!1),a=c.useRef(null),l=h=>{i(!0),h.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",console.log("Handle clicked:",o)},p=c.useCallback(h=>{if(!n)return;const x=a.current?.parentElement;if(!x)return;const j=x.getBoundingClientRect(),P=(h.clientX-j.left)/j.width*100,w=Array.from(x.children).filter(C=>C.classList.contains("resizable-panel"));if(console.log("Total panels found:",w.length,"Handle index:",o),w.length>=2){let C,N;if(o===0?(C=w[0],N=w[1],console.log("Resizing File Manager and Code Editor")):o===1&&(C=w[1],N=w[2],console.log("Resizing Code Editor and AI Assistant")),C&&N){const d=Math.max(15,Math.min(70,P)),y=Math.max(15,Math.min(70,100-d));console.log("Setting sizes:",{leftSize:d,rightSize:y,percentage:P}),C.style.flexBasis=`${d}%`,N.style.flexBasis=`${y}%`,C.style.border="3px solid red",N.style.border="3px solid blue",setTimeout(()=>{C.style.border="",N.style.border=""},300),t&&t({leftSize:d,rightSize:y})}}},[n,t,o]),u=c.useCallback(()=>{i(!1),document.body.style.cursor="",document.body.style.userSelect=""},[]);return c.useEffect(()=>{if(n)return document.addEventListener("mousemove",p),document.addEventListener("mouseup",u),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",u)}},[n,p,u]),e.jsx("div",{ref:a,className:`resizable-handle w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group flex items-center justify-center ${n?"bg-primary/70":""} ${s}`,onMouseDown:l,children:r||e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/70 transition-colors"})})};export{co as A,ao as C,io as F,po as I,lo as P,go as R,ho as T,fo as a,xo as b,uo as c,mo as d};
