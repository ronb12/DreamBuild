import{r as Y,s as ee,u as X,g as Z,d as V,a as me,j as e,z as E,b as Zt,n as q,c as Kt,e as Qt}from"./index-DPK5YjGW.js";import{r as u,g as er}from"./react-vendor-ChHrLFfk.js";import{L as tr}from"./router-vendor-BWBiukp8.js";import{_ as Ce}from"./monaco-editor-CKIEnvzl.js";import{l as _,j as L,i as Ke,g as Qe,f as rr,e as sr,o as nr,p as or,h as Te,q as ce,t as de,u as J,w as te,v as ke}from"./firebase-C6E9X45-.js";import{m as F,F as Me,P as ir,i as ar,j as lr,a as Ie,k as ye,l as cr,n as dr,o as K,e as ur,p as Fe,q as he,r as pr,s as ft,R as xt,t as mr,u as hr,v as bt,w as gr,x as fr,y as xr,E as br,z as yt,I as yr,J as vr,K as Le,S as vt,C as oe,N as ne,Z as wr,O as jr,Q as Nr,c as Sr,V as Be,W as Dr,Y as Cr,g as Tr,_ as wt,U as et,X as kr,$ as ve,a0 as Ir,a1 as Or,a2 as Pr,a3 as Er,a4 as Ar,a5 as jt,a6 as tt,a7 as Rr,a8 as $r,a9 as Mr,aa as ze}from"./ui-vendor-Tfh8VmzK.js";import{f as Fr}from"./firebaseAppService-DyLxS1gN.js";import xe from"./simpleAIService-BHA6-clH.js";import"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";import"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";import"./utils-vendor-ngrFHoWO.js";class Lr{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(t.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(t,r,"firebase");const o=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i={id:o,projectName:r||"dream-app",files:t.files,config:t.config,deployedAt:new Date,status:"uploading",platform:"firebase"},a={};for(const[x,w]of Object.entries(t.files))if(w&&w.trim()){const y=Y(ee,`projects/${o}/${x}`),I=new Blob([w],{type:this.getMimeType(x)});await X(y,I);const S=await Z(y);a[x]=S}const l=this.createHostedHTML(t.files),c=Y(ee,`projects/${o}/index.html`),p=new Blob([l],{type:"text/html"});await X(c,p);const h=await Z(c);return await _(L(V,"deployments",o),{...i,status:"completed",hostedURL:h,files:a,completedAt:new Date}),this.deployments.set(o,i),console.log("✅ Firebase deployment completed:",h),{success:!0,deploymentId:o,url:h,platform:"firebase"}}catch(n){throw console.error("❌ Firebase deployment failed:",n),new Error(`Firebase deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const n=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Apple App Store deployment is only available for mobile applications");const o=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${o} app to Apple App Store...`);const i=await this.generateMobileAppFiles(t,r,o),a=await this.executeAppleStoreBuild(i,r,o),l={id:n,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"apple-app-store",framework:o,buildInstructions:this.generateAppleStoreInstructions(o,r),terminalOutput:a.output,buildCommands:a.commands},c=this.createAppleStoreInstructionsHTML(r,o,l.buildInstructions,a),p=Y(ee,`apple-store/${n}/index.html`),h=new Blob([c],{type:"text/html"});await X(p,h);const x=await Z(p);return await _(L(V,"deployments",n),{...l,hostedURL:x}),this.deployments.set(n,l),{success:a.success,deploymentId:n,url:x,platform:"apple-app-store",framework:o,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Apple App Store deployment failed:",n),new Error(`Apple App Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const n=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Google Play Store deployment is only available for mobile applications");const o=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${o} app to Google Play Store...`);const i=await this.generateMobileAppFiles(t,r,o),a=await this.executeGooglePlayBuild(i,r,o),l={id:n,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"google-play-store",framework:o,buildInstructions:this.generateGooglePlayInstructions(o,r),terminalOutput:a.output,buildCommands:a.commands},c=this.createGooglePlayInstructionsHTML(r,o,l.buildInstructions,a),p=Y(ee,`google-play/${n}/index.html`),h=new Blob([c],{type:"text/html"});await X(p,h);const x=await Z(p);return await _(L(V,"deployments",n),{...l,hostedURL:x}),this.deployments.set(n,l),{success:a.success,deploymentId:n,url:x,platform:"google-play-store",framework:o,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Google Play Store deployment failed:",n),new Error(`Google Play Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(t,r,n=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const o=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!n){const i=r.toLowerCase().replace(/[^a-z0-9-]/g,"-"),a=this.createHostedHTML(t.files),l=Y(ee,`github-pages/${o}/index.html`),c=new Blob([a],{type:"text/html"});await X(l,c);const p=await Z(l);return await _(L(V,"deployments",o),{id:o,projectName:r,files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:p,repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}),{success:!0,deploymentId:o,url:p,platform:"github-pages",repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(o){throw console.error("❌ GitHub deployment failed:",o),new Error(`GitHub deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}createHostedHTML(t){const r=t["index.html"]||this.generateDefaultHTML(),n=t["style.css"]||"",o=t["script.js"]||"";let i=r;return n.trim()&&(i.includes("</head>")?i=i.replace("</head>",`<style>${n}</style>
</head>`):i.includes("<head>")?i=i.replace("<head>",`<head>
<style>${n}</style>`):i=`<style>${n}</style>
${i}`),o.trim()&&(i.includes("</body>")?i=i.replace("</body>",`<script>${o}<\/script>
</body>`):i+=`
<script>${o}<\/script>`),i.includes("<!DOCTYPE html>")||(i=`<!DOCTYPE html>
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
</html>`}getMimeType(t){const r=t.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[r]||"text/plain"}generateGitHubInstructions(t,r){const n=t.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${n}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${n}`],files:Object.keys(r),repoName:n}}getDeploymentStatus(t){return this.deployments.get(t)}async getAllDeployments(){try{const{collection:t,query:r,orderBy:n,limit:o,getDocs:i}=await Ce(async()=>{const{collection:p,query:h,orderBy:x,limit:w,getDocs:y}=await import("./firebase-C6E9X45-.js").then(I=>I.B);return{collection:p,query:h,orderBy:x,limit:w,getDocs:y}},[]),a=t(V,"deployments"),l=r(a,n("deployedAt","desc"),o(20));return(await i(l)).docs.map(p=>({id:p.id,...p.data()}))}catch(t){return console.error("Error fetching deployments:",t),[]}}async deleteDeployment(t){try{const{deleteDoc:r}=await Ce(async()=>{const{deleteDoc:n}=await import("./firebase-C6E9X45-.js").then(o=>o.B);return{deleteDoc:n}},[]);return await r(L(V,"deployments",t)),this.deployments.delete(t),!0}catch(r){return console.error("Error deleting deployment:",r),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(t){const r=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],n=Object.keys(t);return r.some(o=>n.some(i=>i.includes(o)))}async deployMobileApp(t,r,n){const o=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${i} mobile app...`);const a={id:o,projectName:r||"mobile-app",files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:i,buildInstructions:this.generateMobileBuildInstructions(i,r,n)},l=this.createMobileAppInstructionsHTML(r,i,a.buildInstructions),c=Y(ee,`mobile-apps/${o}/index.html`),p=new Blob([l],{type:"text/html"});await X(c,p);const h=await Z(c);return await _(L(V,"deployments",o),{...a,hostedURL:h}),this.deployments.set(o,a),{success:!0,deploymentId:o,url:h,platform:"mobile",framework:i,buildInstructions:a.buildInstructions}}detectMobileFramework(t){const r=Object.keys(t);return r.some(n=>n.includes("pubspec.yaml")||n.includes("main.dart"))?"Flutter":r.some(n=>n.includes("App.js")&&n.includes("package.json"))?"React Native":r.some(n=>n.includes("ionic.config.json"))?"Ionic":r.some(n=>n.includes("capacitor.config.json"))?"Capacitor":r.some(n=>n.includes("manifest.json")&&n.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(t,r,n){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:t,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:t,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:t,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(t,r,n){return`<!DOCTYPE html>
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
                    ${n.steps.map(o=>`<li>${o}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([o,i])=>`<div class="command"><strong>${o}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${n.requirements.map(o=>`<li>${o}</li>`).join("")}
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
</html>`}createGooglePlayInstructionsHTML(t,r,n){return`<!DOCTYPE html>
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
                    ${n.steps.map(o=>`<li>${o}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([o,i])=>`<div class="command"><strong>${o}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${n.requirements.map(o=>`<li>${o}</li>`).join("")}
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
</html>`}createMobileAppInstructionsHTML(t,r,n){return`<!DOCTYPE html>
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
                    ${n.steps.map(o=>`<li>${o}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([o,i])=>`<div class="command"><strong>${o}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <h2>📱 Supported Platforms</h2>
            <div class="platforms">
                ${n.platforms.map(o=>`<span class="platform">${o}</span>`).join("")}
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
</html>`}async generateMobileAppFiles(t,r,n){try{console.log(`📱 Generating ${n} mobile app files...`);const{default:o}=await Ce(async()=>{const{default:a}=await import("./mobileAppService-BHaVoDAx.js");return{default:a}},[]),i=await o.generateMobileApp(t,r,n);return console.log(`✅ Generated ${Object.keys(i).length} mobile app files`),i}catch(o){throw console.error("❌ Failed to generate mobile app files:",o),new Error(`Failed to generate mobile app files: ${o.message}`)}}async executeAppleStoreBuild(t,r,n){const o=[],i=[];try{console.log(`🍎 Executing Apple App Store build for ${n}...`);const a=`/tmp/dreambuild-${r}-${Date.now()}`;o.push(`mkdir -p ${a}`);for(const[l,c]of Object.entries(t)){const p=`${a}/${l}`;o.push(`cat > ${p} << 'EOF'
${c}
EOF`)}switch(o.push(`cd ${a}`),n){case"React Native":o.push("npm install"),o.push("npx expo install"),o.push("npx expo build:ios --type archive");break;case"Flutter":o.push("flutter pub get"),o.push("flutter build ios --release");break;case"PWA":o.push("npm install"),o.push("npm run build"),o.push("npx @pwabuilder/cli build --platform ios");break;default:o.push('echo "Framework-specific build commands not implemented yet"')}for(const l of o)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Apple App Store build completed for ${n}`),{success:!0,output:i.join(`
`),commands:o,projectDir:a}}catch(a){return console.error("❌ Apple App Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:o,error:a.message}}}async executeGooglePlayBuild(t,r,n){const o=[],i=[];try{console.log(`🤖 Executing Google Play Store build for ${n}...`);const a=`/tmp/dreambuild-${r}-${Date.now()}`;o.push(`mkdir -p ${a}`);for(const[l,c]of Object.entries(t)){const p=`${a}/${l}`;o.push(`cat > ${p} << 'EOF'
${c}
EOF`)}switch(o.push(`cd ${a}`),n){case"React Native":o.push("npm install"),o.push("npx expo install"),o.push("npx expo build:android --type app-bundle");break;case"Flutter":o.push("flutter pub get"),o.push("flutter build appbundle --release");break;case"PWA":o.push("npm install"),o.push("npm run build"),o.push("npx @pwabuilder/cli build --platform android");break;default:o.push('echo "Framework-specific build commands not implemented yet"')}for(const l of o)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Google Play Store build completed for ${n}`),{success:!0,output:i.join(`
`),commands:o,projectDir:a}}catch(a){return console.error("❌ Google Play Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:o,error:a.message}}}async executeTerminalCommands(t,r,n=3e5){try{console.log("🖥️ Executing commands via terminal...");const o={success:!0,output:t.map(i=>`$ ${i}
Executed successfully`).join(`
`),commands:t,projectDir:r};return console.log("✅ Terminal commands executed successfully"),o}catch(o){return console.error("❌ Terminal command execution failed:",o),{success:!1,output:`Error: ${o.message}`,commands:t,error:o.message}}}}const ge=new Lr,Br=()=>{const{currentProject:s,switchFile:t,updateFile:r,saveProject:n,createNewProject:o,updateConfig:i}=me(),[a,l]=u.useState(!1),[c,p]=u.useState(""),[h,x]=u.useState(!1),[w,y]=u.useState(!1),[I,S]=u.useState(!1),[v,C]=u.useState("firebase"),[j,d]=u.useState(!1),[b,f]=u.useState(""),[k,D]=u.useState({show:!1,x:0,y:0,filename:""}),m=u.useRef(null),P={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},$=g=>P[g]||"📄",B=g=>{t(g)},A=(g,T)=>{g.preventDefault(),D({show:!0,x:g.clientX,y:g.clientY,filename:T})},G=g=>{const{filename:T}=k;switch(D({show:!1,x:0,y:0,filename:""}),g){case"download":R(T);break;case"delete":M(T);break;case"rename":E.info("Rename functionality coming soon!");break;case"copy":E.info("Copy functionality coming soon!");break}},W=()=>{D({show:!1,x:0,y:0,filename:""})};u.useEffect(()=>{const g=T=>{m.current&&!m.current.contains(T.target)&&W()};return k.show&&document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}},[k.show]);const ae=()=>{if(c.trim()){const g=c.includes(".")?c:`${c}.js`;r(g,""),t(g),p(""),l(!1),E.success(`Created ${g}`)}},M=g=>{if(Object.keys(s.files).length<=1){E.error("Cannot delete the last file");return}if(confirm(`Delete ${g}?`)){const T={...s.files};if(delete T[g],Object.keys(T).forEach(N=>{s.files[N]=T[N]}),s.activeFile===g){const N=Object.keys(T);t(N[0])}E.success(`Deleted ${g}`)}},R=g=>{const T=s.files[g]||"",N=new Blob([T],{type:"text/plain"}),z=URL.createObjectURL(N),le=document.createElement("a");le.href=z,le.download=g,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(z),E.success(`Downloaded ${g}`)},Ht=()=>{const g={name:s.name,files:s.files,config:s.config,timestamp:new Date().toISOString()},T=new Blob([JSON.stringify(g,null,2)],{type:"application/json"}),N=URL.createObjectURL(T),z=document.createElement("a");z.href=N,z.download=`${s.name}.json`,document.body.appendChild(z),z.click(),document.body.removeChild(z),URL.revokeObjectURL(N),E.success("Project downloaded!")},Ut=g=>{const T=g.target.files[0];if(T){const N=new FileReader;N.onload=z=>{r(T.name,z.target.result),t(T.name),E.success(`Uploaded ${T.name}`)},N.readAsText(T)}},_t=async()=>{if(!b.trim()){E.error("Please enter a project name");return}if(Object.keys(s.files).length===0){E.error("Please generate some code first");return}S(!0);try{const g=await Gt(s,b),T=[];if(j){E.info("Deploying to both Firebase and GitHub...");const[N,z]=await Promise.allSettled([ge.deployToFirebase(g,b),ge.deployToGitHub(g,b)]);if(N.status==="fulfilled"&&N.value.success&&T.push({platform:"Firebase",...N.value}),z.status==="fulfilled"&&z.value.success&&T.push({platform:"GitHub",...z.value}),T.length===2)E.success("Successfully deployed to both Firebase and GitHub!");else if(T.length===1)E.success(`Deployed to ${T[0].platform} (${T.length===1?"one":"both"} platform${T.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let N;v==="firebase"?N=await ge.deployToFirebase(g,b):v==="github"&&(N=await ge.deployToGitHub(g,b)),N.success&&(T.push({platform:v,...N}),E.success(`Successfully deployed to ${N.platform}!`))}T.forEach(N=>{N.url&&window.open(N.url,"_blank"),N.instructions&&(console.log(`${N.platform} deployment instructions:`,N.instructions),E.success(`Check console for ${N.platform} Pages setup instructions`))}),y(!1),f(""),d(!1)}catch(g){E.error(`Deployment failed: ${g.message}`)}finally{S(!1)}},Gt=async(g,T)=>{const N={...g};return N.files["index.html"]||(N.files["index.html"]=Wt(T)),N.files["package.json"]||(N.files["package.json"]=qt(T,N.config)),N.files["README.md"]||(N.files["README.md"]=Vt(T,N.config)),N.files["index.html"]=Yt(N.files["index.html"],T),N.files["manifest.json"]||(N.files["manifest.json"]=Jt(T)),N},Wt=g=>`<!DOCTYPE html>
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
</html>`,qt=(g,T)=>JSON.stringify({name:g.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${g}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",T.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),Vt=(g,T)=>`# ${g}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${T.appType||"Frontend"}
- **Language**: ${T.language||"JavaScript"}
- **Styling**: ${T.styling||"Custom CSS"}
- **Features**: ${T.features?.join(", ")||"Basic functionality"}

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
`,Jt=g=>JSON.stringify({name:g,short_name:g.split(" ")[0],description:`Built with DreamBuild - ${g}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),Yt=(g,T)=>{let N=g;return N.includes("<!DOCTYPE html>")||(N=`<!DOCTYPE html>
${N}`),N.includes('<meta name="viewport"')||(N=N.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),N.includes('<meta name="description"')||(N=N.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${T}">`)),N.includes('<meta name="theme-color"')||(N=N.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),N.includes("manifest.json")||(N=N.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),N},Xt=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return e.jsxs(F.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[e.jsxs("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:e.jsx(Me,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>l(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:e.jsx(ir,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),e.jsx("button",{onClick:()=>x(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:e.jsx(ar,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>n(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[e.jsx(lr,{className:"h-3 w-3"}),"Save"]}),e.jsxs("button",{onClick:()=>y(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(s.files).length===0,children:[e.jsx(Ie,{className:"h-3 w-3"}),"Deploy"]}),e.jsxs("button",{onClick:Ht,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[e.jsx(ye,{className:"h-3 w-3"}),"Export"]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(s.files).length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[e.jsx("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:e.jsx(cr,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),e.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):e.jsxs("div",{className:"py-2",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[e.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:e.jsx(Me,{className:"h-3 w-3 text-white"})}),e.jsx("span",{children:s.name||"Untitled Project"}),e.jsxs("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(s.files).length," files"]})]}),Object.keys(s.files).map(g=>e.jsxs(F.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${s.activeFile===g?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>B(g),onContextMenu:T=>A(T,g),children:[e.jsx("div",{className:"w-4 flex items-center justify-center",children:e.jsx("div",{className:"w-px h-4 bg-border"})}),e.jsx("div",{className:"flex items-center justify-center w-5 h-5",children:e.jsx("span",{className:"text-base",children:$(g)})}),e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("span",{className:"text-sm font-medium truncate",children:g})}),s.activeFile===g&&e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},g))]})}),e.jsx("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:e.jsxs("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:e.jsx(dr,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),e.jsx("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:Ut,multiple:!0})]})}),e.jsx(K,{children:a&&e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>l(!1),children:e.jsxs(F.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:g=>g.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),e.jsx("input",{type:"text",value:c,onChange:g=>p(g.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:Xt.map(g=>e.jsxs("button",{onClick:()=>p(`new-file${g.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[e.jsx("span",{children:g.icon}),e.jsx("span",{className:"truncate",children:g.name})]},g.extension))})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>l(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:ae,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),e.jsx(K,{children:h&&e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>x(!1),children:e.jsxs(F.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:g=>g.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:s.name,onChange:g=>i({name:g.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),e.jsxs("select",{value:s.config.appType,onChange:g=>i({appType:g.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"frontend",children:"Frontend"}),e.jsx("option",{value:"backend",children:"Backend"}),e.jsx("option",{value:"fullstack",children:"Full Stack"}),e.jsx("option",{value:"mobile",children:"Mobile"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Language"}),e.jsxs("select",{value:s.config.language,onChange:g=>i({language:g.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"javascript",children:"JavaScript"}),e.jsx("option",{value:"typescript",children:"TypeScript"}),e.jsx("option",{value:"python",children:"Python"}),e.jsx("option",{value:"java",children:"Java"}),e.jsx("option",{value:"csharp",children:"C#"}),e.jsx("option",{value:"cpp",children:"C++"}),e.jsx("option",{value:"c",children:"C"}),e.jsx("option",{value:"rust",children:"Rust"}),e.jsx("option",{value:"go",children:"Go"}),e.jsx("option",{value:"php",children:"PHP"}),e.jsx("option",{value:"ruby",children:"Ruby"}),e.jsx("option",{value:"swift",children:"Swift"}),e.jsx("option",{value:"kotlin",children:"Kotlin"}),e.jsx("option",{value:"dart",children:"Dart"}),e.jsx("option",{value:"scala",children:"Scala"}),e.jsx("option",{value:"html",children:"HTML"}),e.jsx("option",{value:"css",children:"CSS"}),e.jsx("option",{value:"sql",children:"SQL"}),e.jsx("option",{value:"r",children:"R"}),e.jsx("option",{value:"matlab",children:"MATLAB"}),e.jsx("option",{value:"perl",children:"Perl"}),e.jsx("option",{value:"lua",children:"Lua"}),e.jsx("option",{value:"bash",children:"Bash/Shell"}),e.jsx("option",{value:"powershell",children:"PowerShell"}),e.jsx("option",{value:"yaml",children:"YAML"}),e.jsx("option",{value:"json",children:"JSON"}),e.jsx("option",{value:"xml",children:"XML"}),e.jsx("option",{value:"markdown",children:"Markdown"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),e.jsxs("select",{value:s.config.framework||"none",onChange:g=>i({framework:g.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"none",children:"None"}),e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue.js"}),e.jsx("option",{value:"angular",children:"Angular"}),e.jsx("option",{value:"svelte",children:"Svelte"}),e.jsx("option",{value:"nextjs",children:"Next.js"}),e.jsx("option",{value:"nuxtjs",children:"Nuxt.js"}),e.jsx("option",{value:"express",children:"Express.js"}),e.jsx("option",{value:"fastapi",children:"FastAPI"}),e.jsx("option",{value:"django",children:"Django"}),e.jsx("option",{value:"flask",children:"Flask"}),e.jsx("option",{value:"spring",children:"Spring Boot"}),e.jsx("option",{value:"laravel",children:"Laravel"}),e.jsx("option",{value:"rails",children:"Ruby on Rails"}),e.jsx("option",{value:"flutter",children:"Flutter"}),e.jsx("option",{value:"react-native",children:"React Native"}),e.jsx("option",{value:"ionic",children:"Ionic"}),e.jsx("option",{value:"electron",children:"Electron"})]})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>x(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:()=>{n(),x(!1),E.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),e.jsx(K,{children:w&&e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>y(!1),children:e.jsxs(F.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:g=>g.stopPropagation(),children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[e.jsx(Ie,{className:"h-5 w-5"}),"Deploy Your App"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:b,onChange:g=>f(g.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"firebase",checked:v==="firebase",onChange:g=>C(g.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs",children:"F"})}),e.jsx("span",{children:"Firebase Hosting"})]})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"github",checked:v==="github",onChange:g=>C(g.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ur,{className:"h-4 w-4"}),e.jsx("span",{children:"GitHub Pages"})]})]})]})]}),e.jsxs("div",{className:"p-3 bg-muted rounded-md",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),e.jsx("div",{className:"text-xs text-muted-foreground space-y-1",children:v==="firebase"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free tier available"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):v==="github"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free for public repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>y(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:I,children:"Cancel"}),e.jsx("button",{onClick:_t,disabled:I||!b.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:I?e.jsxs(e.Fragment,{children:[e.jsx(Fe,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Ie,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),e.jsx(K,{children:k.show&&e.jsxs(F.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:m,className:"fixed z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:k.x,top:k.y},onClick:W,children:[e.jsxs("button",{onClick:()=>G("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(ye,{className:"h-4 w-4"}),"Download"]}),e.jsxs("button",{onClick:()=>G("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(he,{className:"h-4 w-4"}),"Copy"]}),e.jsxs("button",{onClick:()=>G("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(pr,{className:"h-4 w-4"}),"Rename"]}),Object.keys(s.files).length>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-t border-border my-1"}),e.jsxs("button",{onClick:()=>G("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[e.jsx(ft,{className:"h-4 w-4"}),"Delete"]})]})]})})]})},zr=()=>{const{theme:s}=Zt(),{currentProject:t,updateFile:r}=me(),[n,o]=u.useState(!1),[i,a]=u.useState(null),[l,c]=u.useState(!0),[p,h]=u.useState({aiAssistance:!0,codeCompletion:!0,errorDetection:!0,refactoring:!0,debugging:!0,gitIntegration:!0,realTimeCollaboration:!0}),x=u.useRef(null);u.useEffect(()=>{if(x.current){const d=t.files[t.activeFile]||"",b=x.current.value;d!==b&&(x.current.value=d)}},[t.activeFile,t.files[t.activeFile]]),u.useEffect(()=>{const d=()=>{x.current&&setTimeout(()=>{},100)};return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]);const w=d=>{try{const b=d.target.value;b!==void 0&&r(t.activeFile,b)}catch(b){console.error("❌ Error updating file:",b),E.error("Failed to update file")}},y=()=>{try{E.success("File saved")}catch(d){console.error("❌ Error saving file:",d),E.error("Failed to save file")}},I=()=>{try{const d=t.files[t.activeFile]||"";navigator.clipboard.writeText(d),E.success("Code copied to clipboard")}catch(d){console.error("❌ Error copying code:",d),E.error("Failed to copy code")}},S=()=>{try{const d=t.files[t.activeFile]||"",b=new Blob([d],{type:"text/plain"}),f=URL.createObjectURL(b),k=document.createElement("a");k.href=f,k.download=t.activeFile,k.click(),URL.revokeObjectURL(f),E.success("File downloaded")}catch(d){console.error("❌ Error downloading file:",d),E.error("Failed to download file")}},v=()=>{const d=t.activeFile.toLowerCase();return d.endsWith(".js")||d.endsWith(".jsx")?"javascript":d.endsWith(".ts")||d.endsWith(".tsx")?"typescript":d.endsWith(".html")?"html":d.endsWith(".css")?"css":d.endsWith(".json")?"json":d.endsWith(".md")?"markdown":d.endsWith(".py")?"python":d.endsWith(".java")?"java":d.endsWith(".cpp")||d.endsWith(".c")?"cpp":"text"},C={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖"},j=d=>C[d]||"📄";return e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:j(t.activeFile)}),e.jsx("span",{className:"font-medium text-sm",children:t.activeFile}),e.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-1 rounded",children:v()})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:y,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Save (Ctrl+S)",children:e.jsx(xt,{className:"h-4 w-4"})}),e.jsx("button",{onClick:I,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy All (Ctrl+C)",children:e.jsx(he,{className:"h-4 w-4"})}),e.jsx("button",{onClick:S,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Download File",children:e.jsx(ye,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"flex-1 relative h-full min-h-[500px] editor-wrapper editor-panel",children:i?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsx("div",{className:"text-red-500 text-lg mb-4",children:"⚠️ Editor Error"}),e.jsx("div",{className:"text-muted-foreground mb-4",children:i}),e.jsx("button",{onClick:()=>{a(null),o(!0),window.location.reload()},className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Reload Editor"})]}):e.jsx("div",{className:"monaco-editor-container editor-container code-editor","data-monaco":"true",style:{height:"500px",minHeight:"500px",width:"100%"},children:e.jsx("div",{className:"w-full h-full",children:e.jsx("textarea",{ref:x,value:t.files[t.activeFile]||"",onChange:w,className:"w-full h-full p-4 font-mono text-sm bg-background text-foreground border border-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary/20",placeholder:`Enter your ${v()} code here...`,style:{minHeight:"500px",fontFamily:'Monaco, Menlo, "Ubuntu Mono", monospace',lineHeight:"1.5"}})})})}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{children:"Line 1"}),e.jsx("span",{children:"Column 1"}),e.jsxs("span",{children:[t.files[t.activeFile]?.length||0," characters"]}),l&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-green-600",children:"Editor Ready"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+S to save"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+C to copy"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Textarea Editor"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"No Console Errors"})]})]})]})};class Hr{constructor(){this.deployedApps=new Map,this.baseUrl="https://dreambuild-2024-app.web.app/apps",this.appCounter=0}generateAppId(){this.appCounter++;const t=Date.now(),r=Math.random().toString(36).substring(2,8);return`app-${t}-${r}-${this.appCounter}`}async deployApp(t){try{const r=this.generateAppId(),n=`${this.baseUrl}/${r}`,o={id:r,name:t.name||"DreamBuild App",url:n,files:t.files||{},createdAt:new Date().toISOString(),status:"deployed",preview:t.preview||{},dependencies:t.dependencies||[],buildInstructions:t.buildInstructions||[]};return this.deployedApps.set(r,o),console.log(`🚀 App deployed: ${r} at ${n}`),{success:!0,appId:r,url:n,appInfo:o}}catch(r){return console.error("❌ App deployment failed:",r),{success:!1,error:r.message}}}getApp(t){return this.deployedApps.get(t)}getAllApps(){return Array.from(this.deployedApps.values())}updateApp(t,r){const n=this.deployedApps.get(t);if(n){const o={...n,...r,updatedAt:new Date().toISOString()};return this.deployedApps.set(t,o),o}return null}deleteApp(t){return this.deployedApps.delete(t)}getAppPreviewUrl(t){const r=this.deployedApps.get(t);return r?r.url:null}generateAppHTML(t){const{files:r,name:n}=t,o=r["index.html"]||r["app.html"]||r["main.html"],i=r["style.css"]||r["styles.css"]||r["app.css"],a=r["script.js"]||r["app.js"]||r["main.js"];if(!o)return this.generateFallbackHTML(n);let l=o;return i&&(l=l.replace("</head>",`<style>${i}</style></head>`)),a&&(l=l.replace("</body>",`<script>${a}<\/script></body>`)),l=l.replace("</body>",`
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
    `}getDeploymentStatus(){return{totalApps:this.deployedApps.size,baseUrl:this.baseUrl,deployedApps:this.getAllApps()}}}const Ur=new Hr,_r=()=>{console.log("🎮 Preview component rendered!"),console.log("🎮 Preview component mounted successfully!");const{currentProject:s}=me();console.log("🎮 Preview currentProject:",s);const[t,r]=u.useState(!1),[n,o]=u.useState(!1),[i,a]=u.useState("desktop"),[l,c]=u.useState(!0),[p,h]=u.useState(2e3),[x,w]=u.useState(!0),[y,I]=u.useState("live"),[S,v]=u.useState(!1),[C,j]=u.useState(null),[d,b]=u.useState(null),[f,k]=u.useState(null),[D,m]=u.useState(!1);u.useEffect(()=>{if(console.log("🎮 Preview useEffect triggered"),console.log("🎮 Current project:",s),console.log("🎮 Project files:",s?.files),console.log("🎮 Files count:",Object.keys(s?.files||{}).length),s&&Object.keys(s.files).length>0){console.log("🎮 Deploying app..."),console.log("🎮 Files available for deployment:",Object.keys(s.files)),console.log("🎮 Files content preview:",Object.keys(s.files).map(R=>({filename:R,length:s.files[R]?.length||0,preview:s.files[R]?.substring(0,100)||"No content"})));const M=setTimeout(()=>{P()},1e3);return()=>clearTimeout(M)}else console.log("🎮 No project or files to deploy"),console.log("🎮 Current project:",s),console.log("🎮 Files count:",s?Object.keys(s.files).length:"No project")},[s?.name,s?.activeFile]),u.useEffect(()=>{},[l,S,y,p,t,d]);const P=async()=>{if(console.log("🎮 deployApp called"),console.log("🎮 Current project:",s),console.log("🎮 Files:",s?.files),console.log("🎮 Files count:",Object.keys(s?.files||{}).length),!s||Object.keys(s.files).length===0){console.log("🎮 No project files to deploy"),k("No files to deploy");return}if(D){console.log("🎮 Deployment already in progress, skipping...");return}m(!0),r(!0),k("Deploying..."),console.log("🎮 Starting deployment process...");try{console.log("🚀 Deploying app..."),console.log("🎮 Current project:",s),console.log("🎮 Project files:",Object.keys(s.files)),console.log("🎮 Project files content:",s.files),console.log("🎮 Files count:",Object.keys(s.files).length);const M=s.name||"DreamBuild Calculator";console.log("🎮 Preview: Current project name:",s.name),console.log("🎮 Preview: Using app name:",M),console.log("🎮 Preview: Project config:",s.config);let R=await Fr.deployApp({name:M,files:s.files,isPublic:!0,preview:{title:M,description:"Generated with DreamBuild AI Builder",features:["AI Generated","Responsive Design","Modern UI"]},dependencies:[],buildInstructions:[],tags:["ai-generated","dreambuild","calculator"]});console.log("🎮 Firebase deployment result:",R),console.log("🎮 Firebase deployment success:",R?.success),console.log("🎮 Firebase deployment error:",R?.error),(!R||!R.success)&&(console.log("🔄 Firebase deployment failed, trying fallback..."),console.log("🔄 Firebase error details:",R?.error),console.log("🔄 Firebase error message:",R?.error?.message),k("Firebase failed, trying fallback..."),R=await Ur.deployApp({name:M,files:s.files,preview:{title:M,description:"Generated with DreamBuild AI Builder",features:["AI Generated","Responsive Design","Modern UI"]},dependencies:[],buildInstructions:[]}),console.log("🎮 Fallback deployment result:",R)),R.success?(j(R.appInfo),b(R.url),console.log("✅ App deployed successfully:",R.url),E.success(`App deployed successfully! URL: ${R.url}`,{duration:6e3,icon:"🚀"}),console.log("🎮 Toast message URL:",R.url),console.log("🎮 Toast message text:",`App deployed successfully! URL: ${R.url}`),setTimeout(()=>{window.dispatchEvent(new CustomEvent("appDeployed",{detail:{appId:R.appId,appName:M,url:R.url}}))},1e3)):(console.error("❌ App deployment failed:",R?.error||"Unknown error"),E.error(`App deployment failed: ${R?.error||"Unknown error"}`),k("Deployment failed"))}catch(M){console.error("❌ Deployment error:",M),E.error(`Deployment error: ${M.message}`),k("Deployment error")}finally{r(!1),m(!1)}},$=()=>{if(d){const M=document.querySelector("#preview-iframe");M&&(M.src=M.src)}},B=()=>{d&&(window.open(d,"_blank"),E.success("Opened in new tab!"))},A=()=>{d&&(navigator.clipboard.writeText(d),E.success("URL copied to clipboard!"))},G=()=>{d&&(navigator.share?navigator.share({title:C?.name||"DreamBuild App",url:d}):A())},W=async()=>{if(n)document.exitFullscreen&&await document.exitFullscreen();else{const M=document.querySelector("#preview-iframe");M&&M.requestFullscreen&&await M.requestFullscreen()}o(!n)},ae=()=>{switch(i){case"mobile":return"w-80 h-[600px] rounded-lg shadow-lg";case"tablet":return"w-[768px] h-[600px] rounded-lg shadow-md";default:return"w-full h-full"}};return console.log("🎮 Preview component about to render"),console.log("🎮 Preview currentProject:",s),console.log("🎮 Preview appUrl:",d),console.log("🎮 Preview isLoading:",t),console.log("🎮 Preview deployedApp:",C),e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${n?"fixed inset-0 z-50 rounded-none":""}`,children:[e.jsx("div",{className:"absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs z-50",children:C?"DEPLOYED":"LOADING"}),e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:P,disabled:t,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50",children:t?"Deploying...":"Deploy App"}),e.jsx("h3",{className:"font-semibold text-sm text-foreground",children:"Live Preview"}),C&&e.jsx("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"DEPLOYED"}),t&&e.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[e.jsx("div",{className:"animate-spin rounded-full h-3 w-3 border-b-2 border-primary"}),e.jsx("span",{children:"Deploying..."})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1 bg-muted rounded-lg p-1",children:[e.jsx("button",{onClick:()=>a("desktop"),className:`p-1 rounded ${i==="desktop"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Desktop View",children:e.jsx(mr,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>a("tablet"),className:`p-1 rounded ${i==="tablet"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Tablet View",children:e.jsx(hr,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>a("mobile"),className:`p-1 rounded ${i==="mobile"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Mobile View",children:e.jsx(bt,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[e.jsx("span",{className:i==="desktop"?"font-semibold":"",children:"Desktop"}),e.jsx("span",{className:i==="tablet"?"font-semibold":"",children:"Tablet"}),e.jsx("span",{className:i==="mobile"?"font-semibold":"",children:"Mobile"})]}),e.jsx("button",{onClick:()=>c(!l),className:`p-2 rounded-md transition-colors ${l?"bg-green-500 text-white":"bg-muted hover:bg-muted-foreground/20"}`,title:l?"Disable Auto-refresh":"Enable Auto-refresh",children:e.jsx(xt,{className:`h-4 w-4 ${l?"animate-spin":""}`})}),e.jsx("button",{onClick:()=>v(!S),className:`p-2 rounded-md transition-colors ${S?"bg-red-500 text-white":"bg-muted hover:bg-muted-foreground/20"}`,title:S?"Resume Preview":"Pause Preview",children:S?e.jsx(gr,{className:"h-4 w-4"}):e.jsx(fr,{className:"h-4 w-4"})}),e.jsx("button",{onClick:$,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Manual Refresh",children:e.jsx(xr,{className:"h-4 w-4"})}),e.jsx("button",{onClick:B,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Open in New Tab",children:e.jsx(br,{className:"h-4 w-4"})}),e.jsx("button",{onClick:A,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy URL",children:e.jsx(he,{className:"h-4 w-4"})}),e.jsx("button",{onClick:G,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Share App",children:e.jsx(yt,{className:"h-4 w-4"})}),e.jsx("button",{onClick:W,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Toggle Fullscreen",children:n?e.jsx(yr,{className:"h-4 w-4"}):e.jsx(vr,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"flex-1 relative h-full min-h-[500px]",children:t?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"}),e.jsx("span",{className:"text-lg font-medium",children:"Deploying App..."})]}),e.jsxs("div",{className:"text-sm text-muted-foreground text-center max-w-md",children:[e.jsx("p",{children:"Creating your app's web address..."}),e.jsx("p",{className:"mt-2",children:"This may take a few moments"})]})]}):d?e.jsx("div",{className:`w-full h-full flex items-center justify-center ${i==="mobile"?"bg-gray-100":i==="tablet"?"bg-gray-50":"bg-white"}`,children:e.jsx("div",{className:`${ae()} transition-all duration-300 ease-in-out`,children:e.jsx("iframe",{id:"preview-iframe",src:d,className:`w-full h-full border-0 ${i==="mobile"?"rounded-lg shadow-lg":i==="tablet"?"rounded-lg shadow-md":""}`,title:"DreamBuild App Preview",sandbox:"allow-scripts allow-forms allow-popups allow-same-origin",onLoad:()=>{r(!1),console.log("🎮 Iframe loaded successfully")},onError:()=>{r(!1),console.log("🎮 Iframe failed to load"),E.error("Failed to load app preview")}})})}):e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsx(Le,{className:"h-16 w-16 text-muted-foreground mb-4"}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"No App Deployed"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Generate an app to see the preview"}),e.jsx("button",{onClick:P,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Deploy App"}),s&&Object.keys(s.files).length>0&&e.jsxs("div",{className:"mt-8 p-4 bg-muted/50 rounded-lg max-w-2xl w-full",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Code Preview"}),e.jsx("div",{className:"bg-background p-4 rounded border text-left max-h-64 overflow-auto",children:e.jsx("pre",{className:"text-sm font-mono whitespace-pre-wrap",children:Object.entries(s.files).map(([M,R])=>`// ${M}
${R}

`).join("")})})]})]})}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[d&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Le,{className:"h-4 w-4"}),e.jsx("span",{className:"font-mono text-xs",children:d})]}),d&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-green-600",children:"Live Preview Active"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+R to refresh"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+Shift+F for fullscreen"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Live preview with web addresses"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Share your apps"})]})]})]})},Gr=({aiModel:s,setAIModel:t,modelUpdateKey:r,setModelUpdateKey:n})=>{const[o,i]=u.useState(!1),a=[{id:"auto",name:"Auto Select",description:"Automatically selects the best available model",icon:vt,color:"text-blue-500",bgColor:"bg-blue-50 dark:bg-blue-900/20"},{id:"codellama-7b",name:"CodeLlama 7B",description:"Fast and efficient code generation",icon:oe,color:"text-green-500",bgColor:"bg-green-50 dark:bg-green-900/20"},{id:"deepseek-coder",name:"DeepSeek Coder",description:"Advanced code understanding and generation",icon:ne,color:"text-purple-500",bgColor:"bg-purple-50 dark:bg-purple-900/20"},{id:"wizardcoder",name:"WizardCoder",description:"Specialized in complex programming tasks",icon:wr,color:"text-orange-500",bgColor:"bg-orange-50 dark:bg-orange-900/20"}],l=a.find(p=>p.id===s)||a[0];u.useEffect(()=>{const p=h=>{o&&!h.target.closest(".model-selector")&&!h.target.closest('button[class*="w-full p-2 rounded"]')&&i(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[o]);const c=p=>{t(p),n(h=>h+1),i(!1)};return e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>i(!o),className:"w-full p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l.icon,{className:`h-4 w-4 ${l.color}`}),e.jsx("span",{className:"text-sm font-medium",children:l.name})]}),e.jsx(jr,{className:`h-4 w-4 text-muted-foreground transition-transform ${o?"rotate-180":""}`})]}),e.jsx(K,{children:o&&e.jsx(F.div,{initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},className:"absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-50 model-selector",children:e.jsx("div",{className:"p-2",children:a.map(p=>{const h=p.icon,x=p.id===s;return e.jsx("button",{onClick:()=>c(p.id),className:`w-full p-3 rounded-lg text-left transition-colors hover:bg-muted/50 ${x?"bg-primary/10":""}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg ${p.bgColor} flex items-center justify-center`,children:e.jsx(h,{className:`h-4 w-4 ${p.color}`})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-medium text-sm",children:p.name}),x&&e.jsx(Nr,{className:"h-4 w-4 text-primary"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:p.description})]})]})},p.id)})})})})]})},Wr=({messages:s,prompt:t,setPrompt:r,isGenerating:n,handleGenerate:o,textareaRef:i,messagesEndRef:a})=>{const l=h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),o())},c=h=>{navigator.clipboard.writeText(h),q.success("Copied to clipboard!")},p=(h,x)=>{q.success("Feedback sent")};return e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[e.jsx(K,{children:s.map(h=>e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:`flex gap-3 ${h.type==="user"?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`flex gap-3 max-w-[80%] ${h.type==="user"?"flex-row-reverse":"flex-row"}`,children:[e.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${h.type==="user"?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground"}`,children:h.type==="user"?e.jsx(Sr,{className:"h-4 w-4"}):e.jsx(Be,{className:"h-4 w-4"})}),e.jsxs("div",{className:`rounded-2xl px-4 py-3 ${h.type==="user"?"bg-primary text-primary-foreground":"bg-muted text-foreground"}`,children:[e.jsx("div",{className:"whitespace-pre-wrap text-sm",children:h.content}),h.type==="assistant"&&e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("button",{onClick:()=>c(h.content),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Copy message",children:e.jsx(he,{className:"h-3 w-3"})}),e.jsx("button",{onClick:()=>p(h.id,"up"),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Good response",children:e.jsx(Dr,{className:"h-3 w-3"})}),e.jsx("button",{onClick:()=>p(h.id,"down"),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Poor response",children:e.jsx(Cr,{className:"h-3 w-3"})})]})]})]})},h.id))}),n&&e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"flex gap-3 justify-start",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center",children:e.jsx(Be,{className:"h-4 w-4"})}),e.jsx("div",{className:"bg-muted text-foreground rounded-2xl px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Fe,{className:"h-4 w-4 animate-spin"}),e.jsx("span",{className:"text-sm",children:"AI is thinking..."})]})})]}),e.jsx("div",{ref:a})]}),e.jsx("div",{className:"p-4 border-t border-border",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("textarea",{ref:i,value:t,onChange:h=>r(h.target.value),onKeyPress:l,placeholder:"Describe what you want to build...",className:"flex-1 min-h-[44px] max-h-32 px-4 py-3 bg-background border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",disabled:n}),e.jsx("button",{onClick:o,disabled:!t.trim()||n,className:"px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2",children:n?e.jsx(Fe,{className:"h-4 w-4 animate-spin"}):e.jsx(Tr,{className:"h-4 w-4"})})]})})]})};function qr(){const{currentProject:s,updateFile:t,switchFile:r,updateConfig:n}=me(),[o,i]=u.useState(""),[a,l]=u.useState(""),[c,p]=u.useState(!1),h=u.useRef(null),x=u.useRef(null),[w,y]=u.useState([]),[I,S]=u.useState([]),[v,C]=u.useState(!1),[j,d]=u.useState(!1),[b,f]=u.useState("auto"),[k,D]=u.useState(0);u.useEffect(()=>{h.current&&(h.current.style.height="auto",h.current.style.height=h.current.scrollHeight+"px")},[o]),u.useEffect(()=>{x.current?.scrollIntoView({behavior:"smooth"})},[w]);const m=async()=>{if(!o.trim()||c)return;const $=o;i(""),p(!0);const B={id:Date.now(),type:"user",content:$,timestamp:new Date};y(A=>[...A,B]);try{const A=await xe.generateCode({prompt:$,projectName:a||s.name,context:{currentFiles:s.files,activeFile:s.activeFile,config:s.config}}),G={id:Date.now()+1,type:"assistant",content:A.message||"Code generated successfully!",timestamp:new Date,files:A.files||{}};y(W=>[...W,G]),A.files&&Object.keys(A.files).length>0&&(Object.entries(A.files).forEach(([W,ae])=>{t(W,ae)}),q.success(`Generated ${Object.keys(A.files).length} files!`)),A.projectName&&A.projectName!==s.name&&(n({name:A.projectName}),l(A.projectName))}catch(A){console.error("Generation error:",A);const G={id:Date.now()+1,type:"assistant",content:`Sorry, I encountered an error: ${A.message}. Please try again.`,timestamp:new Date};y(W=>[...W,G]),q.error("Failed to generate code. Please try again.")}finally{p(!1)}},P=()=>{y([]),q.success("Chat cleared!")};return e.jsxs("div",{className:"h-full flex flex-col bg-card/50 backdrop-blur-sm",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:e.jsx(Be,{className:"h-4 w-4 text-primary-foreground"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-foreground",children:"AI Assistant"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Powered by advanced AI models"})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("button",{onClick:P,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Clear chat",children:e.jsx(wt,{className:"h-4 w-4 text-muted-foreground"})})})]}),e.jsx("div",{className:"p-4 border-b border-border/50",children:e.jsx(Gr,{aiModel:b,setAIModel:f,modelUpdateKey:k,setModelUpdateKey:D})}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(Wr,{messages:w,prompt:o,setPrompt:i,isGenerating:c,handleGenerate:m,textareaRef:h,messagesEndRef:x})})]})}var re={};class Vr{constructor(){this.app=null,this.db=null,this.storage=null,this.auth=null,this.user=null,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const t={apiKey:re.REACT_APP_FIREBASE_API_KEY||"your-api-key",authDomain:re.REACT_APP_FIREBASE_AUTH_DOMAIN||"your-project.firebaseapp.com",projectId:re.REACT_APP_FIREBASE_PROJECT_ID||"your-project-id",storageBucket:re.REACT_APP_FIREBASE_STORAGE_BUCKET||"your-project.appspot.com",messagingSenderId:re.REACT_APP_FIREBASE_MESSAGING_SENDER_ID||"123456789",appId:re.REACT_APP_FIREBASE_APP_ID||"your-app-id"};try{this.app=Ke(t)}catch(r){if(r.code==="app/duplicate-app")this.app=Qe();else if(r.code==="app/no-options")try{this.app=Qe()}catch{this.app=Ke({apiKey:"demo-key",authDomain:"demo.firebaseapp.com",projectId:"demo-project"})}else throw r}this.db=rr(this.app),this.storage=Kt(this.app),this.auth=sr(this.app),nr(this.auth,r=>{this.user=r,console.log("Firebase auth state changed:",r?"authenticated":"not authenticated")});try{await or(this.auth),console.log("✅ Firebase anonymous auth successful")}catch(r){console.log("⚠️ Firebase auth not available, continuing without authentication:",r.message),this.user=null}this.isInitialized=!0,console.log("🔥 Firebase initialized successfully")}catch(t){console.error("❌ Failed to initialize Firebase:",t),this.isInitialized=!1,this.user=null,console.log("⚠️ Continuing without Firebase services")}}async storeProjectContext(t,r){try{await this.initialize();const n=L(this.db,"projectContexts",t);await _(n,{...r,userId:this.user?.uid||"anonymous",storedAt:new Date().toISOString(),dataSize:JSON.stringify(r).length}),console.log("✅ Project context stored successfully")}catch(n){throw console.error("❌ Failed to store project context:",n),n}}async loadProjectContext(t){try{await this.initialize();const r=L(this.db,"projectContexts",t),n=await Te(r);return n.exists()?(console.log("✅ Project context loaded successfully"),n.data()):(console.log("❌ Project context not found"),null)}catch(r){return console.error("❌ Failed to load project context:",r),null}}async storeProjectFiles(t,r){try{await this.initialize();const n=L(this.db,"projectFiles",t);await _(n,{projectId:t,files:r,fileCount:Object.keys(r).length,totalSize:JSON.stringify(r).length,userId:this.user?.uid||"anonymous",storedAt:new Date().toISOString()}),console.log("✅ Project files stored successfully")}catch(n){throw console.error("❌ Failed to store project files:",n),n}}async loadProjectFiles(t){try{await this.initialize();const r=L(this.db,"projectFiles",t),n=await Te(r);return n.exists()?(console.log("✅ Project files loaded successfully"),n.data().files):(console.log("❌ Project files not found"),null)}catch(r){return console.error("❌ Failed to load project files:",r),null}}async storeTemplate(t){try{await this.initialize();const r=L(this.db,"templates",t.id);await _(r,{...t,userId:this.user?.uid||"anonymous",updatedAt:new Date().toISOString()}),console.log("✅ Template stored successfully")}catch(r){throw console.error("❌ Failed to store template:",r),r}}async loadTemplates(){try{await this.initialize();const t=ce(this.db,"templates"),r=await de(t),n=[];return r.forEach(o=>{n.push(o.data())}),console.log("✅ Templates loaded successfully"),n}catch(t){return console.error("❌ Failed to load templates:",t),[]}}async searchTemplates(t,r,n){try{await this.initialize();const o=ce(this.db,"templates");let i=J(o);t&&t.length>0&&(i=J(i,te("keywords","array-contains-any",t))),r&&r.length>0&&(i=J(i,te("technologies","array-contains-any",r))),n&&n.length>0&&(i=J(i,te("patterns","array-contains-any",n)));const a=await de(i),l=[];return a.forEach(c=>{l.push(c.data())}),console.log("✅ Templates searched successfully"),l}catch(o){return console.error("❌ Failed to search templates:",o),[]}}async storeLargeFile(t,r,n){try{await this.initialize();const o=Y(this.storage,`projects/${t}/${r}`),i=new Blob([n],{type:"text/plain"});await X(o,i);const a=await Z(o);return console.log("✅ Large file stored successfully"),a}catch(o){throw console.error("❌ Failed to store large file:",o),o}}async loadLargeFile(t){try{const n=await(await fetch(t)).text();return console.log("✅ Large file loaded successfully"),n}catch(r){return console.error("❌ Failed to load large file:",r),null}}async getUserProjects(){try{await this.initialize();const t=ce(this.db,"projectContexts"),r=J(t,te("userId","==",this.user?.uid||"anonymous")),n=await de(r),o=[];return n.forEach(i=>{o.push({id:i.id,...i.data()})}),console.log("✅ User projects loaded successfully"),o}catch(t){return console.error("❌ Failed to load user projects:",t),[]}}async deleteProject(t){try{await this.initialize();const r=L(this.db,"projectContexts",t);await ke(r);const n=L(this.db,"projectFiles",t);await ke(n),console.log("✅ Project deleted successfully")}catch(r){throw console.error("❌ Failed to delete project:",r),r}}async getStorageStats(){try{await this.initialize();const t=await this.getUserProjects();let r=0,n=0;for(const o of t)r+=o.dataSize||0,n+=o.fileCount||0;return{totalProjects:t.length,totalFiles:n,totalSize:r,totalSizeMB:Math.round(r/(1024*1024)*100)/100}}catch(t){return console.error("❌ Failed to get storage stats:",t),{totalProjects:0,totalFiles:0,totalSize:0,totalSizeMB:0}}}async storeConversationMemory(t,r){try{await this.initialize();const n=JSON.stringify(r),o=8e5;if(n.length>o){console.log("⚠️ Conversation data too large, storing in chunks");const i=this.chunkData(r,o);for(let a=0;a<i.length;a++){const l=L(this.db,"conversationMemory",`${t}_chunk_${a}`);await _(l,{projectId:t,chunkIndex:a,totalChunks:i.length,conversation:i[a],userId:this.user?.uid||"anonymous",lastUpdated:new Date().toISOString()})}console.log(`🧠 Conversation memory stored in ${i.length} chunks`)}else{const i=L(this.db,"conversationMemory",t);await _(i,{projectId:t,conversation:r,userId:this.user?.uid||"anonymous",lastUpdated:new Date().toISOString(),memorySize:n.length}),console.log("🧠 Conversation memory stored successfully")}}catch(n){throw console.error("❌ Failed to store conversation memory:",n),n}}chunkData(t,r){const n=[],o=JSON.stringify(t);let i=0;for(;i<o.length;){let a=Math.min(i+r,o.length);if(a<o.length){let l=o.lastIndexOf("}",a),c=o.lastIndexOf("]",a),p=o.lastIndexOf(",",a);const h=Math.max(l,c,p);h>i+r*.8&&(a=h+1)}try{n.push(JSON.parse(o.slice(i,a)))}catch{n.push(o.slice(i,a))}i=a}return n}async loadConversationMemory(t){try{await this.initialize();const r=L(this.db,"conversationMemory",t),n=await Te(r);if(n.exists())return console.log("🧠 Conversation memory loaded successfully"),n.data().conversation;const o=ce(this.db,"conversationMemory"),i=J(o,te("projectId","==",t)),a=await de(i);if(!a.empty){const l=[];a.forEach(p=>{l.push({index:p.data().chunkIndex,data:p.data().conversation})}),l.sort((p,h)=>p.index-h.index);const c=l.map(p=>p.data);return console.log(`🧠 Conversation memory loaded from ${l.length} chunks`),c}return console.log("❌ Conversation memory not found"),null}catch(r){return console.error("❌ Failed to load conversation memory:",r),null}}async addPromptToMemory(t,r,n,o){try{await this.initialize();let i=await this.loadConversationMemory(t)||{projectId:t,prompts:[],responses:[],context:{},createdAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return i.prompts.push({id:`prompt-${Date.now()}`,text:r,timestamp:new Date().toISOString(),context:o}),i.responses.push({id:`response-${Date.now()}`,promptId:i.prompts[i.prompts.length-1].id,text:n,timestamp:new Date().toISOString(),context:o}),i.context={...i.context,...o},i.lastUpdated=new Date().toISOString(),await this.storeConversationMemory(t,i),console.log("🧠 Prompt added to memory successfully"),i}catch(i){throw console.error("❌ Failed to add prompt to memory:",i),i}}async getConversationHistory(t,r=50){try{await this.initialize();const n=await this.loadConversationMemory(t);if(!n)return[];const o=n.prompts.slice(-r),i=n.responses.slice(-r);return{prompts:o,responses:i,context:n.context,totalPrompts:n.prompts.length,totalResponses:n.responses.length}}catch(n){return console.error("❌ Failed to get conversation history:",n),[]}}async searchConversationMemory(t,r){try{await this.initialize();const n=await this.loadConversationMemory(t);if(!n)return[];const o=[],i=r.toLowerCase();return n.prompts.forEach(a=>{a.text.toLowerCase().includes(i)&&o.push({type:"prompt",id:a.id,text:a.text,timestamp:a.timestamp,context:a.context})}),n.responses.forEach(a=>{a.text.toLowerCase().includes(i)&&o.push({type:"response",id:a.id,text:a.text,timestamp:a.timestamp,context:a.context})}),console.log("🔍 Conversation memory searched successfully"),o}catch(n){return console.error("❌ Failed to search conversation memory:",n),[]}}async getConversationContext(t,r){try{await this.initialize();const n=await this.loadConversationMemory(t);if(!n)return null;const o={projectId:t,currentPrompt:r,previousPrompts:n.prompts.slice(-10),previousResponses:n.responses.slice(-10),projectContext:n.context,conversationSummary:this.generateConversationSummary(n),relevantHistory:this.findRelevantHistory(n,r)};return console.log("🧠 Conversation context generated successfully"),o}catch(n){return console.error("❌ Failed to get conversation context:",n),null}}generateConversationSummary(t){const r=t.prompts,n=t.responses;return r.length===0?"No previous conversation":{totalPrompts:r.length,totalResponses:n.length,firstPrompt:r[0]?.text||"",lastPrompt:r[r.length-1]?.text||"",keyTopics:this.extractKeyTopics(r),projectEvolution:this.trackProjectEvolution(t)}}extractKeyTopics(t){const r=new Set;return t.forEach(n=>{n.text.toLowerCase().split(" ").forEach(i=>{i.length>4&&!this.isCommonWord(i)&&r.add(i)})}),Array.from(r).slice(0,10)}isCommonWord(t){return["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","two","way","who","boy","did","man","men","put","say","she","too","use"].includes(t)}trackProjectEvolution(t){const r=[],n=t.prompts,o=t.responses;for(let i=0;i<n.length;i++){const a=n[i],l=o[i];r.push({phase:i+1,prompt:a.text,response:l.text,timestamp:a.timestamp,context:a.context})}return r}findRelevantHistory(t,r){const n=[],o=r.toLowerCase().split(" ");return t.prompts.forEach((i,a)=>{const l=i.text.toLowerCase().split(" "),c=o.filter(p=>l.includes(p));c.length>2&&n.push({prompt:i.text,response:t.responses[a]?.text||"",relevance:c.length,timestamp:i.timestamp})}),n.sort((i,a)=>a.relevance-i.relevance).slice(0,5)}async storeAILearningPattern(t,r){try{await this.initialize();const n=L(this.db,"aiLearningPatterns",`${t}-${Date.now()}`);await _(n,{projectId:t,pattern:r,userId:this.user?.uid||"anonymous",createdAt:new Date().toISOString()}),console.log("🧠 AI learning pattern stored successfully")}catch(n){throw console.error("❌ Failed to store AI learning pattern:",n),n}}async getAILearningPatterns(t){try{await this.initialize();const r=ce(this.db,"aiLearningPatterns"),n=J(r,te("projectId","==",t)),o=await de(n),i=[];return o.forEach(a=>{i.push(a.data())}),console.log("🧠 AI learning patterns loaded successfully"),i}catch(r){return console.error("❌ Failed to load AI learning patterns:",r),[]}}async clearConversationMemory(t){try{await this.initialize();const r=L(this.db,"conversationMemory",t);await ke(r),console.log("🧠 Conversation memory cleared successfully")}catch(r){throw console.error("❌ Failed to clear conversation memory:",r),r}}}const ue=new Vr,Jr=u.createContext();function Yr(){return u.useContext(Jr)}const Xr=({isOpen:s,onClose:t})=>{const{isCollaborationActive:r,activeUsers:n,cursors:o,comments:i,sharedProjects:a,isLoading:l,shareProject:c,getSharedProjects:p,toggleCollaboration:h}=Yr(),{user:x}=Qt(),[w,y]=u.useState(""),[I,S]=u.useState("read"),[v,C]=u.useState("users");u.useEffect(()=>{s&&r&&p()},[s,r,p]);const j=async f=>{if(f.preventDefault(),!w.trim()){E.error("Please enter an email address");return}try{await c(w,I),E.success(`Project shared with ${w}`),y(""),p()}catch{E.error("Failed to share project")}},d=f=>{switch(f){case"admin":return"text-red-600 bg-red-100";case"write":return"text-blue-600 bg-blue-100";case"read":return"text-green-600 bg-green-100";default:return"text-gray-600 bg-gray-100"}},b=f=>{switch(f){case"admin":return e.jsx(Ar,{className:"h-4 w-4"});case"write":return e.jsx(Er,{className:"h-4 w-4"});case"read":return e.jsx(ve,{className:"h-4 w-4"});default:return e.jsx(Pr,{className:"h-4 w-4"})}};return s?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(et,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Real-time team collaboration"})]})]}),e.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:e.jsx(kr,{className:"h-5 w-5 text-gray-600"})})]}),e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Real-time Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Enable real-time editing, cursor tracking, and comments"})]}),e.jsx("button",{onClick:h,disabled:l,className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${r?"bg-green-100 text-green-700 hover:bg-green-200":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:r?e.jsxs(e.Fragment,{children:[e.jsx(ve,{className:"h-4 w-4"}),"Active"]}):e.jsxs(e.Fragment,{children:[e.jsx(Ir,{className:"h-4 w-4"}),"Inactive"]})})]})}),e.jsx("div",{className:"flex border-b border-gray-200",children:[{id:"users",label:"Active Users",icon:et},{id:"comments",label:"Comments",icon:wt},{id:"sharing",label:"Sharing",icon:yt}].map(f=>e.jsxs("button",{onClick:()=>C(f.id),className:`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${v===f.id?"text-blue-600 border-b-2 border-blue-600":"text-gray-600 hover:text-gray-900"}`,children:[e.jsx(f.icon,{className:"h-4 w-4"}),f.label]},f.id))}),e.jsxs("div",{className:"p-6 max-h-96 overflow-y-auto",children:[v==="users"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Active Users (",n.length,")"]}),n.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No active users"}):e.jsx("div",{className:"space-y-3",children:n.map((f,k)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:f.userName?.charAt(0)||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"font-medium text-gray-900",children:f.userName}),e.jsx("p",{className:"text-sm text-gray-600",children:f.userEmail})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Online"})]})]},k))}),o.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"text-md font-medium text-gray-900 mb-3",children:"Active Cursors"}),e.jsx("div",{className:"space-y-2",children:o.map((f,k)=>e.jsxs("div",{className:"flex items-center gap-2 p-2 bg-blue-50 rounded",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-medium",children:f.userName?.charAt(0)||"U"})}),e.jsx("span",{className:"text-sm text-gray-700",children:f.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:[f.fileId," - Line ",f.line]})]},k))})]})]}),v==="comments"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Comments (",i.length,")"]}),i.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No comments yet"}):e.jsx("div",{className:"space-y-3",children:i.map((f,k)=>e.jsx("div",{className:`p-4 rounded-lg border ${f.resolved?"bg-gray-50 border-gray-200":"bg-yellow-50 border-yellow-200"}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:f.userName?.charAt(0)||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"font-medium text-gray-900",children:f.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:["Line ",f.lineNumber," in ",f.fileId]}),f.resolved&&e.jsx("span",{className:"text-xs bg-green-100 text-green-700 px-2 py-1 rounded",children:"Resolved"})]}),e.jsx("p",{className:"text-gray-700",children:f.content})]})]})},k))})]}),v==="sharing"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Share Project"}),e.jsxs("form",{onSubmit:j,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),e.jsx("input",{type:"email",value:w,onChange:f=>y(f.target.value),placeholder:"user@example.com",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Permissions"}),e.jsxs("select",{value:I,onChange:f=>S(f.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"read",children:"Read Only"}),e.jsx("option",{value:"write",children:"Read & Write"}),e.jsx("option",{value:"admin",children:"Admin"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors",children:"Share Project"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Shared Projects"}),a.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No shared projects"}):e.jsx("div",{className:"space-y-3",children:a.map((f,k)=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center",children:e.jsx(Or,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:f.sharedWith}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Project ID: ",f.projectId]})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{className:`px-2 py-1 rounded text-xs font-medium ${d(f.permissions)}`,children:[b(f.permissions),f.permissions]})})]},k))})]})]})]})]})}):null},Nt=u.createContext({dragDropManager:void 0});function H(s){return"Minified Redux error #"+s+"; visit https://redux.js.org/Errors?code="+s+" for the full message or use the non-minified dev environment for full errors. "}var rt=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),st=function(){return Math.random().toString(36).substring(7).split("").join(".")},nt={INIT:"@@redux/INIT"+st(),REPLACE:"@@redux/REPLACE"+st()};function Zr(s){if(typeof s!="object"||s===null)return!1;for(var t=s;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(s)===t}function St(s,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(H(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(H(1));return r(St)(s,t)}if(typeof s!="function")throw new Error(H(2));var o=s,i=t,a=[],l=a,c=!1;function p(){l===a&&(l=a.slice())}function h(){if(c)throw new Error(H(3));return i}function x(S){if(typeof S!="function")throw new Error(H(4));if(c)throw new Error(H(5));var v=!0;return p(),l.push(S),function(){if(v){if(c)throw new Error(H(6));v=!1,p();var j=l.indexOf(S);l.splice(j,1),a=null}}}function w(S){if(!Zr(S))throw new Error(H(7));if(typeof S.type>"u")throw new Error(H(8));if(c)throw new Error(H(9));try{c=!0,i=o(i,S)}finally{c=!1}for(var v=a=l,C=0;C<v.length;C++){var j=v[C];j()}return S}function y(S){if(typeof S!="function")throw new Error(H(10));o=S,w({type:nt.REPLACE})}function I(){var S,v=x;return S={subscribe:function(j){if(typeof j!="object"||j===null)throw new Error(H(11));function d(){j.next&&j.next(h())}d();var b=v(d);return{unsubscribe:b}}},S[rt]=function(){return this},S}return w({type:nt.INIT}),n={dispatch:w,subscribe:x,getState:h,replaceReducer:y},n[rt]=I,n}function O(s,t,...r){if(Kr()&&t===void 0)throw new Error("invariant requires an error message argument");if(!s){let n;if(t===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let o=0;n=new Error(t.replace(/%s/g,function(){return r[o++]})),n.name="Invariant Violation"}throw n.framesToPop=1,n}}function Kr(){return typeof process<"u"&&!0}function Qr(s,t,r){return t.split(".").reduce((n,o)=>n&&n[o]?n[o]:r||null,s)}function es(s,t){return s.filter(r=>r!==t)}function Dt(s){return typeof s=="object"}function ts(s,t){const r=new Map,n=i=>{r.set(i,r.has(i)?r.get(i)+1:1)};s.forEach(n),t.forEach(n);const o=[];return r.forEach((i,a)=>{i===1&&o.push(a)}),o}function rs(s,t){return s.filter(r=>t.indexOf(r)>-1)}const qe="dnd-core/INIT_COORDS",we="dnd-core/BEGIN_DRAG",Ve="dnd-core/PUBLISH_DRAG_SOURCE",je="dnd-core/HOVER",Ne="dnd-core/DROP",Se="dnd-core/END_DRAG";function ot(s,t){return{type:qe,payload:{sourceClientOffset:t||null,clientOffset:s||null}}}const ss={type:qe,payload:{clientOffset:null,sourceClientOffset:null}};function ns(s){return function(r=[],n={publishSource:!0}){const{publishSource:o=!0,clientOffset:i,getSourceClientOffset:a}=n,l=s.getMonitor(),c=s.getRegistry();s.dispatch(ot(i)),os(r,l,c);const p=ls(r,l);if(p==null){s.dispatch(ss);return}let h=null;if(i){if(!a)throw new Error("getSourceClientOffset must be defined");is(a),h=a(p)}s.dispatch(ot(i,h));const w=c.getSource(p).beginDrag(l,p);if(w==null)return;as(w),c.pinSource(p);const y=c.getSourceType(p);return{type:we,payload:{itemType:y,item:w,sourceId:p,clientOffset:i||null,sourceClientOffset:h||null,isSourcePublic:!!o}}}}function os(s,t,r){O(!t.isDragging(),"Cannot call beginDrag while dragging."),s.forEach(function(n){O(r.getSource(n),"Expected sourceIds to be registered.")})}function is(s){O(typeof s=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function as(s){O(Dt(s),"Item must be an object.")}function ls(s,t){let r=null;for(let n=s.length-1;n>=0;n--)if(t.canDragSource(s[n])){r=s[n];break}return r}function cs(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function ds(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){cs(s,o,r[o])})}return s}function us(s){return function(r={}){const n=s.getMonitor(),o=s.getRegistry();ps(n),gs(n).forEach((a,l)=>{const c=ms(a,l,o,n),p={type:Ne,payload:{dropResult:ds({},r,c)}};s.dispatch(p)})}}function ps(s){O(s.isDragging(),"Cannot call drop while not dragging."),O(!s.didDrop(),"Cannot call drop twice during one drag operation.")}function ms(s,t,r,n){const o=r.getTarget(s);let i=o?o.drop(n,s):void 0;return hs(i),typeof i>"u"&&(i=t===0?{}:n.getDropResult()),i}function hs(s){O(typeof s>"u"||Dt(s),"Drop result must either be an object or undefined.")}function gs(s){const t=s.getTargetIds().filter(s.canDropOnTarget,s);return t.reverse(),t}function fs(s){return function(){const r=s.getMonitor(),n=s.getRegistry();xs(r);const o=r.getSourceId();return o!=null&&(n.getSource(o,!0).endDrag(r,o),n.unpinSource()),{type:Se}}}function xs(s){O(s.isDragging(),"Cannot call endDrag while not dragging.")}function He(s,t){return t===null?s===null:Array.isArray(s)?s.some(r=>r===t):s===t}function bs(s){return function(r,{clientOffset:n}={}){ys(r);const o=r.slice(0),i=s.getMonitor(),a=s.getRegistry(),l=i.getItemType();return ws(o,a,l),vs(o,i,a),js(o,i,a),{type:je,payload:{targetIds:o,clientOffset:n||null}}}}function ys(s){O(Array.isArray(s),"Expected targetIds to be an array.")}function vs(s,t,r){O(t.isDragging(),"Cannot call hover while not dragging."),O(!t.didDrop(),"Cannot call hover after drop.");for(let n=0;n<s.length;n++){const o=s[n];O(s.lastIndexOf(o)===n,"Expected targetIds to be unique in the passed array.");const i=r.getTarget(o);O(i,"Expected targetIds to be registered.")}}function ws(s,t,r){for(let n=s.length-1;n>=0;n--){const o=s[n],i=t.getTargetType(o);He(i,r)||s.splice(n,1)}}function js(s,t,r){s.forEach(function(n){r.getTarget(n).hover(t,n)})}function Ns(s){return function(){if(s.getMonitor().isDragging())return{type:Ve}}}function Ss(s){return{beginDrag:ns(s),publishDragSource:Ns(s),hover:bs(s),drop:us(s),endDrag:fs(s)}}class Ds{receiveBackend(t){this.backend=t}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const t=this,{dispatch:r}=this.store;function n(i){return(...a)=>{const l=i.apply(t,a);typeof l<"u"&&r(l)}}const o=Ss(this);return Object.keys(o).reduce((i,a)=>{const l=o[a];return i[a]=n(l),i},{})}dispatch(t){this.store.dispatch(t)}constructor(t,r){this.isSetUp=!1,this.handleRefCountChange=()=>{const n=this.store.getState().refCount>0;this.backend&&(n&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!n&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=t,this.monitor=r,t.subscribe(this.handleRefCountChange)}}function Cs(s,t){return{x:s.x+t.x,y:s.y+t.y}}function Ct(s,t){return{x:s.x-t.x,y:s.y-t.y}}function Ts(s){const{clientOffset:t,initialClientOffset:r,initialSourceClientOffset:n}=s;return!t||!r||!n?null:Ct(Cs(t,n),r)}function ks(s){const{clientOffset:t,initialClientOffset:r}=s;return!t||!r?null:Ct(t,r)}const pe=[],Je=[];pe.__IS_NONE__=!0;Je.__IS_ALL__=!0;function Is(s,t){return s===pe?!1:s===Je||typeof t>"u"?!0:rs(t,s).length>0}class Os{subscribeToStateChange(t,r={}){const{handlerIds:n}=r;O(typeof t=="function","listener must be a function."),O(typeof n>"u"||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let o=this.store.getState().stateId;const i=()=>{const a=this.store.getState(),l=a.stateId;try{l===o||l===o+1&&!Is(a.dirtyHandlerIds,n)||t()}finally{o=l}};return this.store.subscribe(i)}subscribeToOffsetChange(t){O(typeof t=="function","listener must be a function.");let r=this.store.getState().dragOffset;const n=()=>{const o=this.store.getState().dragOffset;o!==r&&(r=o,t())};return this.store.subscribe(n)}canDragSource(t){if(!t)return!1;const r=this.registry.getSource(t);return O(r,`Expected to find a valid source. sourceId=${t}`),this.isDragging()?!1:r.canDrag(this,t)}canDropOnTarget(t){if(!t)return!1;const r=this.registry.getTarget(t);if(O(r,`Expected to find a valid target. targetId=${t}`),!this.isDragging()||this.didDrop())return!1;const n=this.registry.getTargetType(t),o=this.getItemType();return He(n,o)&&r.canDrop(this,t)}isDragging(){return!!this.getItemType()}isDraggingSource(t){if(!t)return!1;const r=this.registry.getSource(t,!0);if(O(r,`Expected to find a valid source. sourceId=${t}`),!this.isDragging()||!this.isSourcePublic())return!1;const n=this.registry.getSourceType(t),o=this.getItemType();return n!==o?!1:r.isDragging(this,t)}isOverTarget(t,r={shallow:!1}){if(!t)return!1;const{shallow:n}=r;if(!this.isDragging())return!1;const o=this.registry.getTargetType(t),i=this.getItemType();if(i&&!He(o,i))return!1;const a=this.getTargetIds();if(!a.length)return!1;const l=a.indexOf(t);return n?l===a.length-1:l>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return Ts(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return ks(this.store.getState().dragOffset)}constructor(t,r){this.store=t,this.registry=r}}const it=typeof global<"u"?global:self,Tt=it.MutationObserver||it.WebKitMutationObserver;function kt(s){return function(){const r=setTimeout(o,0),n=setInterval(o,50);function o(){clearTimeout(r),clearInterval(n),s()}}}function Ps(s){let t=1;const r=new Tt(s),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){t=-t,n.data=t}}const Es=typeof Tt=="function"?Ps:kt;class As{enqueueTask(t){const{queue:r,requestFlush:n}=this;r.length||(n(),this.flushing=!0),r[r.length]=t}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:t}=this;for(;this.index<t.length;){const r=this.index;if(this.index++,t[r].call(),this.index>this.capacity){for(let n=0,o=t.length-this.index;n<o;n++)t[n]=t[n+this.index];t.length-=this.index,this.index=0}}t.length=0,this.index=0,this.flushing=!1},this.registerPendingError=t=>{this.pendingErrors.push(t),this.requestErrorThrow()},this.requestFlush=Es(this.flush),this.requestErrorThrow=kt(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class Rs{call(){try{this.task&&this.task()}catch(t){this.onError(t)}finally{this.task=null,this.release(this)}}constructor(t,r){this.onError=t,this.release=r,this.task=null}}class $s{create(t){const r=this.freeTasks,n=r.length?r.pop():new Rs(this.onError,o=>r[r.length]=o);return n.task=t,n}constructor(t){this.onError=t,this.freeTasks=[]}}const It=new As,Ms=new $s(It.registerPendingError);function Fs(s){It.enqueueTask(Ms.create(s))}const Ye="dnd-core/ADD_SOURCE",Xe="dnd-core/ADD_TARGET",Ze="dnd-core/REMOVE_SOURCE",De="dnd-core/REMOVE_TARGET";function Ls(s){return{type:Ye,payload:{sourceId:s}}}function Bs(s){return{type:Xe,payload:{targetId:s}}}function zs(s){return{type:Ze,payload:{sourceId:s}}}function Hs(s){return{type:De,payload:{targetId:s}}}function Us(s){O(typeof s.canDrag=="function","Expected canDrag to be a function."),O(typeof s.beginDrag=="function","Expected beginDrag to be a function."),O(typeof s.endDrag=="function","Expected endDrag to be a function.")}function _s(s){O(typeof s.canDrop=="function","Expected canDrop to be a function."),O(typeof s.hover=="function","Expected hover to be a function."),O(typeof s.drop=="function","Expected beginDrag to be a function.")}function Ue(s,t){if(t&&Array.isArray(s)){s.forEach(r=>Ue(r,!1));return}O(typeof s=="string"||typeof s=="symbol",t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var U;(function(s){s.SOURCE="SOURCE",s.TARGET="TARGET"})(U||(U={}));let Gs=0;function Ws(){return Gs++}function qs(s){const t=Ws().toString();switch(s){case U.SOURCE:return`S${t}`;case U.TARGET:return`T${t}`;default:throw new Error(`Unknown Handler Role: ${s}`)}}function at(s){switch(s[0]){case"S":return U.SOURCE;case"T":return U.TARGET;default:throw new Error(`Cannot parse handler ID: ${s}`)}}function lt(s,t){const r=s.entries();let n=!1;do{const{done:o,value:[,i]}=r.next();if(i===t)return!0;n=!!o}while(!n);return!1}class Vs{addSource(t,r){Ue(t),Us(r);const n=this.addHandler(U.SOURCE,t,r);return this.store.dispatch(Ls(n)),n}addTarget(t,r){Ue(t,!0),_s(r);const n=this.addHandler(U.TARGET,t,r);return this.store.dispatch(Bs(n)),n}containsHandler(t){return lt(this.dragSources,t)||lt(this.dropTargets,t)}getSource(t,r=!1){return O(this.isSourceId(t),"Expected a valid source ID."),r&&t===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(t)}getTarget(t){return O(this.isTargetId(t),"Expected a valid target ID."),this.dropTargets.get(t)}getSourceType(t){return O(this.isSourceId(t),"Expected a valid source ID."),this.types.get(t)}getTargetType(t){return O(this.isTargetId(t),"Expected a valid target ID."),this.types.get(t)}isSourceId(t){return at(t)===U.SOURCE}isTargetId(t){return at(t)===U.TARGET}removeSource(t){O(this.getSource(t),"Expected an existing source."),this.store.dispatch(zs(t)),Fs(()=>{this.dragSources.delete(t),this.types.delete(t)})}removeTarget(t){O(this.getTarget(t),"Expected an existing target."),this.store.dispatch(Hs(t)),this.dropTargets.delete(t),this.types.delete(t)}pinSource(t){const r=this.getSource(t);O(r,"Expected an existing source."),this.pinnedSourceId=t,this.pinnedSource=r}unpinSource(){O(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(t,r,n){const o=qs(t);return this.types.set(o,r),t===U.SOURCE?this.dragSources.set(o,n):t===U.TARGET&&this.dropTargets.set(o,n),o}constructor(t){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=t}}const Js=(s,t)=>s===t;function Ys(s,t){return!s&&!t?!0:!s||!t?!1:s.x===t.x&&s.y===t.y}function Xs(s,t,r=Js){if(s.length!==t.length)return!1;for(let n=0;n<s.length;++n)if(!r(s[n],t[n]))return!1;return!0}function Zs(s=pe,t){switch(t.type){case je:break;case Ye:case Xe:case De:case Ze:return pe;case we:case Ve:case Se:case Ne:default:return Je}const{targetIds:r=[],prevTargetIds:n=[]}=t.payload,o=ts(r,n);if(!(o.length>0||!Xs(r,n)))return pe;const a=n[n.length-1],l=r[r.length-1];return a!==l&&(a&&o.push(a),l&&o.push(l)),o}function Ks(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Qs(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){Ks(s,o,r[o])})}return s}const ct={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function en(s=ct,t){const{payload:r}=t;switch(t.type){case qe:case we:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case je:return Ys(s.clientOffset,r.clientOffset)?s:Qs({},s,{clientOffset:r.clientOffset});case Se:case Ne:return ct;default:return s}}function tn(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function se(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){tn(s,o,r[o])})}return s}const rn={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function sn(s=rn,t){const{payload:r}=t;switch(t.type){case we:return se({},s,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case Ve:return se({},s,{isSourcePublic:!0});case je:return se({},s,{targetIds:r.targetIds});case De:return s.targetIds.indexOf(r.targetId)===-1?s:se({},s,{targetIds:es(s.targetIds,r.targetId)});case Ne:return se({},s,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case Se:return se({},s,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return s}}function nn(s=0,t){switch(t.type){case Ye:case Xe:return s+1;case Ze:case De:return s-1;default:return s}}function on(s=0){return s+1}function an(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function ln(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){an(s,o,r[o])})}return s}function cn(s={},t){return{dirtyHandlerIds:Zs(s.dirtyHandlerIds,{type:t.type,payload:ln({},t.payload,{prevTargetIds:Qr(s,"dragOperation.targetIds",[])})}),dragOffset:en(s.dragOffset,t),refCount:nn(s.refCount,t),dragOperation:sn(s.dragOperation,t),stateId:on(s.stateId)}}function dn(s,t=void 0,r={},n=!1){const o=un(n),i=new Os(o,new Vs(o)),a=new Ds(o,i),l=s(a,t,r);return a.receiveBackend(l),a}function un(s){const t=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return St(cn,s&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}function pn(s,t){if(s==null)return{};var r=mn(s,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(s,n)&&(r[n]=s[n])}return r}function mn(s,t){if(s==null)return{};var r={},n=Object.keys(s),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=s[o]);return r}let dt=0;const be=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var hn=u.memo(function(t){var{children:r}=t,n=pn(t,["children"]);const[o,i]=gn(n);return u.useEffect(()=>{if(i){const a=Ot();return++dt,()=>{--dt===0&&(a[be]=null)}}},[]),e.jsx(Nt.Provider,{value:o,children:r})});function gn(s){if("manager"in s)return[{dragDropManager:s.manager},!1];const t=fn(s.backend,s.context,s.options,s.debugMode),r=!s.context;return[t,r]}function fn(s,t=Ot(),r,n){const o=t;return o[be]||(o[be]={dragDropManager:dn(s,t,r,n)}),o[be]}function Ot(){return typeof global<"u"?global:window}var xn=function s(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(o=n;o--!==0;)if(!s(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(r).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;o--!==0;){var a=i[o];if(!s(t[a],r[a]))return!1}return!0}return t!==t&&r!==r};const bn=er(xn),Q=typeof window<"u"?u.useLayoutEffect:u.useEffect;function yn(s,t,r){const[n,o]=u.useState(()=>t(s)),i=u.useCallback(()=>{const a=t(s);bn(n,a)||(o(a),r&&r())},[n,s,r]);return Q(i),[n,i]}function vn(s,t,r){const[n,o]=yn(s,t,r);return Q(function(){const a=s.getHandlerId();if(a!=null)return s.subscribeToStateChange(o,{handlerIds:[a]})},[s,o]),n}function Pt(s,t,r){return vn(t,s||(()=>({})),()=>r.reconnect())}function Et(s,t){const r=[];return typeof s!="function"&&r.push(s),u.useMemo(()=>typeof s=="function"?s():s,r)}function wn(s){return u.useMemo(()=>s.hooks.dragSource(),[s])}function jn(s){return u.useMemo(()=>s.hooks.dragPreview(),[s])}let Oe=!1,Pe=!1;class Nn{receiveHandlerId(t){this.sourceId=t}getHandlerId(){return this.sourceId}canDrag(){O(!Oe,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return Oe=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{Oe=!1}}isDragging(){if(!this.sourceId)return!1;O(!Pe,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return Pe=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{Pe=!1}}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}isDraggingSource(t){return this.internalMonitor.isDraggingSource(t)}isOverTarget(t,r){return this.internalMonitor.isOverTarget(t,r)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(t){return this.internalMonitor.subscribeToOffsetChange(t)}canDragSource(t){return this.internalMonitor.canDragSource(t)}canDropOnTarget(t){return this.internalMonitor.canDropOnTarget(t)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.sourceId=null,this.internalMonitor=t.getMonitor()}}let Ee=!1;class Sn{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}canDrop(){if(!this.targetId)return!1;O(!Ee,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return Ee=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{Ee=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function Dn(s,t,r){const n=r.getRegistry(),o=n.addTarget(s,t);return[o,()=>n.removeTarget(o)]}function Cn(s,t,r){const n=r.getRegistry(),o=n.addSource(s,t);return[o,()=>n.removeSource(o)]}function _e(s,t,r,n){let o;if(o!==void 0)return!!o;if(s===t)return!0;if(typeof s!="object"||!s||typeof t!="object"||!t)return!1;const i=Object.keys(s),a=Object.keys(t);if(i.length!==a.length)return!1;const l=Object.prototype.hasOwnProperty.bind(t);for(let c=0;c<i.length;c++){const p=i[c];if(!l(p))return!1;const h=s[p],x=t[p];if(o=void 0,o===!1||o===void 0&&h!==x)return!1}return!0}function Ge(s){return s!==null&&typeof s=="object"&&Object.prototype.hasOwnProperty.call(s,"current")}function Tn(s){if(typeof s.type=="string")return;const t=s.type.displayName||s.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function kn(s){return(t=null,r=null)=>{if(!u.isValidElement(t)){const i=t;return s(i,r),i}const n=t;return Tn(n),In(n,r?i=>s(i,r):s)}}function At(s){const t={};return Object.keys(s).forEach(r=>{const n=s[r];if(r.endsWith("Ref"))t[r]=s[r];else{const o=kn(n);t[r]=()=>o}}),t}function ut(s,t){typeof s=="function"?s(t):s.current=t}function In(s,t){const r=s.ref;return O(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?u.cloneElement(s,{ref:n=>{ut(r,n),ut(t,n)}}):u.cloneElement(s,{ref:t})}class On{receiveHandlerId(t){this.handlerId!==t&&(this.handlerId=t,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(t){this.dragSourceOptionsInternal=t}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(t){this.dragPreviewOptionsInternal=t}reconnect(){const t=this.reconnectDragSource();this.reconnectDragPreview(t)}reconnectDragSource(){const t=this.dragSource,r=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return r&&this.disconnectDragSource(),this.handlerId?t?(r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=t,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,t,this.dragSourceOptions)),r):(this.lastConnectedDragSource=t,r):r}reconnectDragPreview(t=!1){const r=this.dragPreview,n=t||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!!this.handlerId){if(!r){this.lastConnectedDragPreview=r;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=r,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,r,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!_e(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!_e(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(t){this.hooks=At({dragSource:(r,n)=>{this.clearDragSource(),this.dragSourceOptions=n||null,Ge(r)?this.dragSourceRef=r:this.dragSourceNode=r,this.reconnectDragSource()},dragPreview:(r,n)=>{this.clearDragPreview(),this.dragPreviewOptions=n||null,Ge(r)?this.dragPreviewRef=r:this.dragPreviewNode=r,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}}class Pn{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!_e(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=At({dropTarget:(r,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,Ge(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function ie(){const{dragDropManager:s}=u.useContext(Nt);return O(s!=null,"Expected drag drop context"),s}function En(s,t){const r=ie(),n=u.useMemo(()=>new On(r.getBackend()),[r]);return Q(()=>(n.dragSourceOptions=s||null,n.reconnect(),()=>n.disconnectDragSource()),[n,s]),Q(()=>(n.dragPreviewOptions=t||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,t]),n}function An(){const s=ie();return u.useMemo(()=>new Nn(s),[s])}class Rn{beginDrag(){const t=this.spec,r=this.monitor;let n=null;return typeof t.item=="object"?n=t.item:typeof t.item=="function"?n=t.item(r):n={},n??null}canDrag(){const t=this.spec,r=this.monitor;return typeof t.canDrag=="boolean"?t.canDrag:typeof t.canDrag=="function"?t.canDrag(r):!0}isDragging(t,r){const n=this.spec,o=this.monitor,{isDragging:i}=n;return i?i(o):r===t.getSourceId()}endDrag(){const t=this.spec,r=this.monitor,n=this.connector,{end:o}=t;o&&o(r.getItem(),r),n.reconnect()}constructor(t,r,n){this.spec=t,this.monitor=r,this.connector=n}}function $n(s,t,r){const n=u.useMemo(()=>new Rn(s,t,r),[t,r]);return u.useEffect(()=>{n.spec=s},[s]),n}function Mn(s){return u.useMemo(()=>{const t=s.type;return O(t!=null,"spec.type must be defined"),t},[s])}function Fn(s,t,r){const n=ie(),o=$n(s,t,r),i=Mn(s);Q(function(){if(i!=null){const[l,c]=Cn(i,o,n);return t.receiveHandlerId(l),r.receiveHandlerId(l),c}},[n,t,r,o,i])}function Ln(s,t){const r=Et(s);O(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const n=An(),o=En(r.options,r.previewOptions);return Fn(r,n,o),[Pt(r.collect,n,o),wn(o),jn(o)]}function Bn(s){return u.useMemo(()=>s.hooks.dropTarget(),[s])}function zn(s){const t=ie(),r=u.useMemo(()=>new Pn(t.getBackend()),[t]);return Q(()=>(r.dropTargetOptions=s||null,r.reconnect(),()=>r.disconnectDropTarget()),[s]),r}function Hn(){const s=ie();return u.useMemo(()=>new Sn(s),[s])}function Un(s){const{accept:t}=s;return u.useMemo(()=>(O(s.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class _n{canDrop(){const t=this.spec,r=this.monitor;return t.canDrop?t.canDrop(r.getItem(),r):!0}hover(){const t=this.spec,r=this.monitor;t.hover&&t.hover(r.getItem(),r)}drop(){const t=this.spec,r=this.monitor;if(t.drop)return t.drop(r.getItem(),r)}constructor(t,r){this.spec=t,this.monitor=r}}function Gn(s,t){const r=u.useMemo(()=>new _n(s,t),[t]);return u.useEffect(()=>{r.spec=s},[s]),r}function Wn(s,t,r){const n=ie(),o=Gn(s,t),i=Un(s);Q(function(){const[l,c]=Dn(i,o,n);return t.receiveHandlerId(l),r.receiveHandlerId(l),c},[n,t,o,r,i.map(a=>a.toString()).join("|")])}function qn(s,t){const r=Et(s),n=Hn(),o=zn(r.options);return Wn(r,n,o),[Pt(r.collect,n,o),Bn(o)]}function Rt(s){let t=null;return()=>(t==null&&(t=s()),t)}function Vn(s,t){return s.filter(r=>r!==t)}function Jn(s,t){const r=new Set,n=i=>r.add(i);s.forEach(n),t.forEach(n);const o=[];return r.forEach(i=>o.push(i)),o}class Yn{enter(t){const r=this.entered.length,n=o=>this.isNodeInDocument(o)&&(!o.contains||o.contains(t));return this.entered=Jn(this.entered.filter(n),[t]),r===0&&this.entered.length>0}leave(t){const r=this.entered.length;return this.entered=Vn(this.entered.filter(this.isNodeInDocument),t),r>0&&this.entered.length===0}reset(){this.entered=[]}constructor(t){this.entered=[],this.isNodeInDocument=t}}class Xn{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(t=>{Object.defineProperty(this.item,t,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`),null}})})}loadDataTransfer(t){if(t){const r={};Object.keys(this.config.exposeProperties).forEach(n=>{const o=this.config.exposeProperties[n];o!=null&&(r[n]={value:o(t,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,r)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(t,r){return r===t.getSourceId()}endDrag(){}constructor(t){this.config=t,this.item={},this.initializeExposedProperties()}}const $t="__NATIVE_FILE__",Mt="__NATIVE_URL__",Ft="__NATIVE_TEXT__",Lt="__NATIVE_HTML__",pt=Object.freeze(Object.defineProperty({__proto__:null,FILE:$t,HTML:Lt,TEXT:Ft,URL:Mt},Symbol.toStringTag,{value:"Module"}));function Ae(s,t,r){const n=t.reduce((o,i)=>o||s.getData(i),"");return n??r}const We={[$t]:{exposeProperties:{files:s=>Array.prototype.slice.call(s.files),items:s=>s.items,dataTransfer:s=>s},matchesTypes:["Files"]},[Lt]:{exposeProperties:{html:(s,t)=>Ae(s,t,""),dataTransfer:s=>s},matchesTypes:["Html","text/html"]},[Mt]:{exposeProperties:{urls:(s,t)=>Ae(s,t,"").split(`
`),dataTransfer:s=>s},matchesTypes:["Url","text/uri-list"]},[Ft]:{exposeProperties:{text:(s,t)=>Ae(s,t,""),dataTransfer:s=>s},matchesTypes:["Text","text/plain"]}};function Zn(s,t){const r=We[s];if(!r)throw new Error(`native type ${s} has no configuration`);const n=new Xn(r);return n.loadDataTransfer(t),n}function Re(s){if(!s)return null;const t=Array.prototype.slice.call(s.types||[]);return Object.keys(We).filter(r=>{const n=We[r];return n?.matchesTypes?n.matchesTypes.some(o=>t.indexOf(o)>-1):!1})[0]||null}const Kn=Rt(()=>/firefox/i.test(navigator.userAgent)),Bt=Rt(()=>!!window.safari);class mt{interpolate(t){const{xs:r,ys:n,c1s:o,c2s:i,c3s:a}=this;let l=r.length-1;if(t===r[l])return n[l];let c=0,p=a.length-1,h;for(;c<=p;){h=Math.floor(.5*(c+p));const y=r[h];if(y<t)c=h+1;else if(y>t)p=h-1;else return n[h]}l=Math.max(0,p);const x=t-r[l],w=x*x;return n[l]+o[l]*x+i[l]*w+a[l]*x*w}constructor(t,r){const{length:n}=t,o=[];for(let y=0;y<n;y++)o.push(y);o.sort((y,I)=>t[y]<t[I]?-1:1);const i=[],a=[];let l,c;for(let y=0;y<n-1;y++)l=t[y+1]-t[y],c=r[y+1]-r[y],i.push(l),a.push(c/l);const p=[a[0]];for(let y=0;y<i.length-1;y++){const I=a[y],S=a[y+1];if(I*S<=0)p.push(0);else{l=i[y];const v=i[y+1],C=l+v;p.push(3*C/((C+v)/I+(C+l)/S))}}p.push(a[a.length-1]);const h=[],x=[];let w;for(let y=0;y<p.length-1;y++){w=a[y];const I=p[y],S=1/i[y],v=I+p[y+1]-w-w;h.push((w-I-v)*S),x.push(v*S*S)}this.xs=t,this.ys=r,this.c1s=p,this.c2s=h,this.c3s=x}}const Qn=1;function zt(s){const t=s.nodeType===Qn?s:s.parentElement;if(!t)return null;const{top:r,left:n}=t.getBoundingClientRect();return{x:n,y:r}}function fe(s){return{x:s.clientX,y:s.clientY}}function eo(s){var t;return s.nodeName==="IMG"&&(Kn()||!(!((t=document.documentElement)===null||t===void 0)&&t.contains(s)))}function to(s,t,r,n){let o=s?t.width:r,i=s?t.height:n;return Bt()&&s&&(i/=window.devicePixelRatio,o/=window.devicePixelRatio),{dragPreviewWidth:o,dragPreviewHeight:i}}function ro(s,t,r,n,o){const i=eo(t),l=zt(i?s:t),c={x:r.x-l.x,y:r.y-l.y},{offsetWidth:p,offsetHeight:h}=s,{anchorX:x,anchorY:w}=n,{dragPreviewWidth:y,dragPreviewHeight:I}=to(i,t,p,h),S=()=>{let k=new mt([0,.5,1],[c.y,c.y/h*I,c.y+I-h]).interpolate(w);return Bt()&&i&&(k+=(window.devicePixelRatio-1)*I),k},v=()=>new mt([0,.5,1],[c.x,c.x/p*y,c.x+y-p]).interpolate(x),{offsetX:C,offsetY:j}=o,d=C===0||C,b=j===0||j;return{x:d?C:v(),y:b?j:S()}}class so{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var t;return!((t=this.globalContext)===null||t===void 0)&&t.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var t;return((t=this.optionsArgs)===null||t===void 0?void 0:t.rootElement)||this.window}constructor(t,r){this.ownerDocument=null,this.globalContext=t,this.optionsArgs=r}}function no(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function ht(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){no(s,o,r[o])})}return s}class oo{profile(){var t,r;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((t=this.dragStartSourceIds)===null||t===void 0?void 0:t.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((r=this.dragOverTargetIds)===null||r===void 0?void 0:r.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const t=this.rootElement;if(t!==void 0){if(t.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");t.__isReactDndBackendSetUp=!0,this.addEventListeners(t)}}teardown(){const t=this.rootElement;if(t!==void 0&&(t.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var r;(r=this.window)===null||r===void 0||r.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(t,r,n){return this.sourcePreviewNodeOptions.set(t,n),this.sourcePreviewNodes.set(t,r),()=>{this.sourcePreviewNodes.delete(t),this.sourcePreviewNodeOptions.delete(t)}}connectDragSource(t,r,n){this.sourceNodes.set(t,r),this.sourceNodeOptions.set(t,n);const o=a=>this.handleDragStart(a,t),i=a=>this.handleSelectStart(a);return r.setAttribute("draggable","true"),r.addEventListener("dragstart",o),r.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(t),this.sourceNodeOptions.delete(t),r.removeEventListener("dragstart",o),r.removeEventListener("selectstart",i),r.setAttribute("draggable","false")}}connectDropTarget(t,r){const n=a=>this.handleDragEnter(a,t),o=a=>this.handleDragOver(a,t),i=a=>this.handleDrop(a,t);return r.addEventListener("dragenter",n),r.addEventListener("dragover",o),r.addEventListener("drop",i),()=>{r.removeEventListener("dragenter",n),r.removeEventListener("dragover",o),r.removeEventListener("drop",i)}}addEventListeners(t){t.addEventListener&&(t.addEventListener("dragstart",this.handleTopDragStart),t.addEventListener("dragstart",this.handleTopDragStartCapture,!0),t.addEventListener("dragend",this.handleTopDragEndCapture,!0),t.addEventListener("dragenter",this.handleTopDragEnter),t.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.addEventListener("dragover",this.handleTopDragOver),t.addEventListener("dragover",this.handleTopDragOverCapture,!0),t.addEventListener("drop",this.handleTopDrop),t.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(t){t.removeEventListener&&(t.removeEventListener("dragstart",this.handleTopDragStart),t.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),t.removeEventListener("dragend",this.handleTopDragEndCapture,!0),t.removeEventListener("dragenter",this.handleTopDragEnter),t.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.removeEventListener("dragover",this.handleTopDragOver),t.removeEventListener("dragover",this.handleTopDragOverCapture,!0),t.removeEventListener("drop",this.handleTopDrop),t.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourceNodeOptions.get(t);return ht({dropEffect:this.altKeyPressed?"copy":"move"},r||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourcePreviewNodeOptions.get(t);return ht({anchorX:.5,anchorY:.5,captureDraggingState:!1},r||{})}isDraggingNativeItem(){const t=this.monitor.getItemType();return Object.keys(pt).some(r=>pt[r]===t)}beginDragNativeItem(t,r){this.clearCurrentDragSourceNode(),this.currentNativeSource=Zn(t,r),this.currentNativeHandle=this.registry.addSource(t,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(t){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=t;const r=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var n;return(n=this.rootElement)===null||n===void 0?void 0:n.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},r)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var t;(t=this.window)===null||t===void 0||t.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(t,r){t.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(r))}handleDragEnter(t,r){this.dragEnterTargetIds.unshift(r)}handleDragOver(t,r){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(r)}handleDrop(t,r){this.dropTargetIds.unshift(r)}constructor(t,r,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=o=>{const i=this.sourceNodes.get(o);return i&&zt(i)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=o=>!!(o&&this.document&&this.document.body&&this.document.body.contains(o)),this.endDragIfSourceWasRemovedFromDOM=()=>{const o=this.currentDragSourceNode;o==null||this.isNodeInDocument(o)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=o=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(o||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=o=>{if(o.defaultPrevented)return;const{dragStartSourceIds:i}=this;this.dragStartSourceIds=null;const a=fe(o);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(i||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:a});const{dataTransfer:l}=o,c=Re(l);if(this.monitor.isDragging()){if(l&&typeof l.setDragImage=="function"){const h=this.monitor.getSourceId(),x=this.sourceNodes.get(h),w=this.sourcePreviewNodes.get(h)||x;if(w){const{anchorX:y,anchorY:I,offsetX:S,offsetY:v}=this.getCurrentSourcePreviewNodeOptions(),d=ro(x,w,a,{anchorX:y,anchorY:I},{offsetX:S,offsetY:v});l.setDragImage(w,d.x,d.y)}}try{l?.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(o.target);const{captureDraggingState:p}=this.getCurrentSourcePreviewNodeOptions();p?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(c)this.beginDragNativeItem(c);else{if(l&&!l.types&&(o.target&&!o.target.hasAttribute||!o.target.hasAttribute("draggable")))return;o.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=o=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}if(!this.enterLeaveCounter.enter(o.target)||this.monitor.isDragging())return;const{dataTransfer:l}=o,c=Re(l);c&&this.beginDragNativeItem(c,l)},this.handleTopDragEnter=o=>{const{dragEnterTargetIds:i}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=o.altKey,i.length>0&&this.actions.hover(i,{clientOffset:fe(o)}),i.some(l=>this.monitor.canDropOnTarget(l))&&(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=o=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}},this.handleTopDragOver=o=>{const{dragOverTargetIds:i}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="none");return}this.altKeyPressed=o.altKey,this.lastClientOffset=fe(o),this.scheduleHover(i),(i||[]).some(l=>this.monitor.canDropOnTarget(l))?(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?o.preventDefault():(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=o=>{this.isDraggingNativeItem()&&o.preventDefault(),this.enterLeaveCounter.leave(o.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=o=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var i;o.preventDefault(),(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}else Re(o.dataTransfer)&&o.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=o=>{const{dropTargetIds:i}=this;this.dropTargetIds=[],this.actions.hover(i,{clientOffset:fe(o)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=o=>{const i=o.target;typeof i.dragDrop=="function"&&(i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable||(o.preventDefault(),i.dragDrop()))},this.options=new so(r,n),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.enterLeaveCounter=new Yn(this.isNodeInDocument)}}const io=function(t,r,n){return new oo(t,r,n)},ao=({projectId:s,onCodeChange:t,initialComponents:r=[]})=>{const[n,o]=u.useState(r),[i,a]=u.useState(null),[l,c]=u.useState(!1),[p,h]=u.useState(!1),[x,w]=u.useState({width:1200,height:800}),[y,I]=u.useState(1),S=u.useRef(null),v=[{type:"container",name:"Container",icon:"📦",category:"Layout"},{type:"text",name:"Text",icon:"📝",category:"Content"},{type:"button",name:"Button",icon:"🔘",category:"Interactive"},{type:"input",name:"Input",icon:"📝",category:"Form"},{type:"image",name:"Image",icon:"🖼️",category:"Media"},{type:"card",name:"Card",icon:"🃏",category:"Layout"},{type:"header",name:"Header",icon:"📋",category:"Layout"},{type:"footer",name:"Footer",icon:"🦶",category:"Layout"},{type:"sidebar",name:"Sidebar",icon:"📑",category:"Layout"},{type:"navbar",name:"Navbar",icon:"🧭",category:"Navigation"},{type:"form",name:"Form",icon:"📋",category:"Form"},{type:"table",name:"Table",icon:"📊",category:"Data"},{type:"chart",name:"Chart",icon:"📈",category:"Data"},{type:"modal",name:"Modal",icon:"🪟",category:"Overlay"},{type:"dropdown",name:"Dropdown",icon:"📋",category:"Interactive"}],C=m=>({container:`<div className="container" style={${JSON.stringify(m.styles)}}>
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
</div>`})[m.type]||`<div>Unknown component: ${m.type}</div>`,j=()=>{const m=`import React, { useState, useEffect } from 'react';
import './App.css';`,$=`const App = () => {
  return (
    <div className="app">
      ${n.map(B=>C(B)).join(`

`)}
    </div>
  );
};

export default App;`;return`${m}

${$}`},d=(m,P)=>{const $=P.getDropResult();if(!$)return;const B={id:`component-${Date.now()}`,type:m.type,name:m.name,position:{x:$.x,y:$.y},size:{width:200,height:100},styles:{position:"absolute",left:`${$.x}px`,top:`${$.y}px`,width:"200px",height:"100px",border:"1px solid #ddd",padding:"10px",backgroundColor:"#fff"},content:m.name,properties:{}};o(A=>[...A,B])},b=m=>{a(m),c(!0)},f=(m,P)=>{if(!i)return;const $={...i,[m]:P,styles:{...i.styles,[m]:P}};o(B=>B.map(A=>A.id===i.id?$:A)),a($)},k=()=>`
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
`,D=()=>{const m={components:n,appCode:j(),cssCode:k(),metadata:{projectId:s,exportedAt:new Date().toISOString(),componentCount:n.length}},P=JSON.stringify(m,null,2),$=new Blob([P],{type:"application/json"}),B=URL.createObjectURL($),A=document.createElement("a");A.href=B,A.download=`dreambuild-project-${s}.json`,A.click(),URL.revokeObjectURL(B)};return u.useEffect(()=>{t&&t({appCode:j(),cssCode:k(),components:n})},[n,t]),e.jsx(hn,{backend:io,children:e.jsxs("div",{className:"visual-editor",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("h2",{children:"🎨 Visual Editor"}),e.jsxs("div",{className:"editor-controls",children:[e.jsx("button",{className:"btn btn-secondary",onClick:()=>h(!p),children:p?"Edit":"Preview"}),e.jsx("button",{className:"btn btn-primary",onClick:D,children:"Export"})]})]}),e.jsxs("div",{className:"editor-layout",children:[e.jsxs("div",{className:"component-library",children:[e.jsx("h3",{children:"📚 Component Library"}),e.jsx("div",{className:"library-categories",children:["Layout","Content","Interactive","Form","Media","Data","Navigation","Overlay"].map(m=>e.jsxs("div",{className:"category",children:[e.jsx("h4",{children:m}),e.jsx("div",{className:"category-components",children:v.filter(P=>P.category===m).map(P=>e.jsx(lo,{type:P.type,name:P.name,icon:P.icon},P.type))})]},m))})]}),e.jsxs("div",{className:"canvas-container",children:[e.jsxs("div",{className:"canvas-toolbar",children:[e.jsxs("div",{className:"canvas-controls",children:[e.jsx("button",{className:"btn btn-sm",onClick:()=>I(y*.8),children:"Zoom Out"}),e.jsxs("span",{className:"zoom-level",children:[Math.round(y*100),"%"]}),e.jsx("button",{className:"btn btn-sm",onClick:()=>I(y*1.2),children:"Zoom In"})]}),e.jsx("div",{className:"canvas-size",children:e.jsxs("select",{value:`${x.width}x${x.height}`,onChange:m=>{const[P,$]=m.target.value.split("x").map(Number);w({width:P,height:$})},children:[e.jsx("option",{value:"1200x800",children:"Desktop (1200x800)"}),e.jsx("option",{value:"768x1024",children:"Tablet (768x1024)"}),e.jsx("option",{value:"375x667",children:"Mobile (375x667)"})]})})]}),e.jsx("div",{className:"canvas",ref:S,style:{width:x.width*y,height:x.height*y,transform:`scale(${y})`,transformOrigin:"top left"},children:e.jsx(co,{onDrop:d,children:n.map(m=>e.jsx(uo,{component:m,onSelect:b,isSelected:i?.id===m.id},m.id))})})]}),l&&i&&e.jsxs("div",{className:"properties-panel",children:[e.jsx("h3",{children:"⚙️ Properties"}),e.jsxs("div",{className:"property-groups",children:[e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Content"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Text Content"}),e.jsx("input",{type:"text",value:i.content||"",onChange:m=>f("content",m.target.value)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Position"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"X Position"}),e.jsx("input",{type:"number",value:i.position?.x||0,onChange:m=>f("left",`${m.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Y Position"}),e.jsx("input",{type:"number",value:i.position?.y||0,onChange:m=>f("top",`${m.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Size"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Width"}),e.jsx("input",{type:"number",value:i.size?.width||200,onChange:m=>f("width",`${m.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Height"}),e.jsx("input",{type:"number",value:i.size?.height||100,onChange:m=>f("height",`${m.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Style"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Background Color"}),e.jsx("input",{type:"color",value:i.styles?.backgroundColor||"#ffffff",onChange:m=>f("backgroundColor",m.target.value)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Border Color"}),e.jsx("input",{type:"color",value:i.styles?.borderColor||"#dddddd",onChange:m=>f("borderColor",m.target.value)})]})]})]})]})]}),e.jsx("style",{jsx:!0,children:`
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
        `})]})})},lo=({type:s,name:t,icon:r})=>{const[{isDragging:n},o]=Ln({type:"component",item:{type:s,name:t},collect:i=>({isDragging:i.isDragging()})});return e.jsxs("div",{ref:o,className:`draggable-component ${n?"dragging":""}`,children:[e.jsx("span",{className:"component-icon",children:r}),e.jsx("span",{className:"component-name",children:t})]})},co=({children:s,onDrop:t})=>{const[{isOver:r},n]=qn({accept:"component",drop:(o,i)=>{const a=i.getClientOffset(),l=i.getDropResult()?.getBoundingClientRect();a&&l&&t(o,{x:a.x-l.left,y:a.y-l.top})},collect:o=>({isOver:o.isOver()})});return e.jsx("div",{ref:n,className:`droppable-canvas ${r?"drag-over":""}`,children:s})},uo=({component:s,onSelect:t,isSelected:r})=>{const n=o=>{o.stopPropagation(),t(s)};return e.jsx("div",{className:`visual-component ${r?"selected":""}`,style:s.styles,onClick:n,children:e.jsxs("div",{className:"component-content",children:[s.type==="text"&&(s.content||"Text"),s.type==="button"&&(s.content||"Button"),s.type==="input"&&e.jsx("input",{placeholder:s.placeholder||"Input"}),s.type==="image"&&e.jsx("div",{className:"image-placeholder",children:"🖼️ Image"}),s.type==="card"&&e.jsxs("div",{children:[e.jsx("h3",{children:s.title||"Card Title"}),e.jsx("p",{children:s.content||"Card content"})]}),!["text","button","input","image","card"].includes(s.type)&&e.jsx("div",{className:"component-placeholder",children:s.name})]})})},po=({projectId:s,projectData:t,onDeploy:r})=>{const[n,o]=u.useState("vercel"),[i,a]=u.useState(!1),[l,c]=u.useState(null),p=[{id:"vercel",name:"Vercel",icon:"▲",description:"Fast, global deployment"},{id:"netlify",name:"Netlify",icon:"🌐",description:"JAMstack deployment"},{id:"aws",name:"AWS Amplify",icon:"☁️",description:"Full-stack deployment"},{id:"firebase",name:"Firebase",icon:"🔥",description:"Google hosting"},{id:"github",name:"GitHub Pages",icon:"🐙",description:"Free static hosting"}],h=async()=>{a(!0),c("Deploying...");try{await new Promise(w=>setTimeout(w,3e3));const x={success:!0,provider:n,url:`https://${s}.${n}.com`,deployedAt:new Date().toISOString()};c("Deployed successfully!"),r&&r(x)}catch{c("Deployment failed")}finally{a(!1)}};return e.jsxs("div",{className:"deployment-panel",children:[e.jsx("h3",{children:"🚀 Deploy Your App"}),e.jsxs("div",{className:"provider-selection",children:[e.jsx("h4",{children:"Choose Hosting Provider"}),e.jsx("div",{className:"providers-grid",children:p.map(x=>e.jsxs("div",{className:`provider-card ${n===x.id?"selected":""}`,onClick:()=>o(x.id),children:[e.jsx("div",{className:"provider-icon",children:x.icon}),e.jsx("div",{className:"provider-name",children:x.name}),e.jsx("div",{className:"provider-description",children:x.description})]},x.id))})]}),e.jsx("div",{className:"deployment-actions",children:e.jsx("button",{className:"btn btn-primary btn-lg",onClick:h,disabled:i,children:i?"Deploying...":"Deploy Now"})}),l&&e.jsx("div",{className:"deployment-status",children:e.jsx("div",{className:`status-message ${l.includes("success")?"success":"error"}`,children:l})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},mo=({projectId:s,onMemoryUpdate:t})=>{const[r,n]=u.useState(null),[o,i]=u.useState([]),[a,l]=u.useState(""),[c,p]=u.useState([]),[h,x]=u.useState(!1),[w,y]=u.useState(null);u.useEffect(()=>{s&&(I(),S())},[s]);const I=async()=>{try{x(!0);const d=await ue.loadConversationMemory(s);if(n(d),d){const b=await ue.getConversationHistory(s);i(b)}}catch(d){console.error("Failed to load memory:",d)}finally{x(!1)}},S=async()=>{try{const d=await ue.getStorageStats();y(d)}catch(d){console.error("Failed to load stats:",d)}},v=async()=>{if(a.trim())try{x(!0);const d=await ue.searchConversationMemory(s,a);p(d)}catch(d){console.error("Failed to search memory:",d)}finally{x(!1)}},C=async()=>{if(window.confirm("Are you sure you want to clear all conversation memory?"))try{await ue.clearConversationMemory(s),n(null),i([]),p([]),t&&t()}catch(d){console.error("Failed to clear memory:",d)}},j=()=>{if(!r)return;const d=JSON.stringify(r,null,2),b=new Blob([d],{type:"application/json"}),f=URL.createObjectURL(b),k=document.createElement("a");k.href=f,k.download=`dreambuild-memory-${s}.json`,k.click(),URL.revokeObjectURL(f)};return h?e.jsx("div",{className:"memory-manager",children:e.jsx("div",{className:"loading",children:"Loading memory..."})}):e.jsxs("div",{className:"memory-manager",children:[e.jsxs("div",{className:"memory-header",children:[e.jsx("h3",{children:"🧠 Conversation Memory"}),e.jsxs("div",{className:"memory-actions",children:[e.jsx("button",{onClick:I,className:"btn btn-secondary",children:"Refresh"}),e.jsx("button",{onClick:j,className:"btn btn-secondary",children:"Export"}),e.jsx("button",{onClick:C,className:"btn btn-danger",children:"Clear"})]})]}),w&&e.jsxs("div",{className:"memory-stats",children:[e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Projects:"}),e.jsx("span",{className:"stat-value",children:w.totalProjects})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Files:"}),e.jsx("span",{className:"stat-value",children:w.totalFiles})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Size:"}),e.jsxs("span",{className:"stat-value",children:[w.totalSizeMB," MB"]})]})]}),e.jsxs("div",{className:"memory-search",children:[e.jsx("input",{type:"text",placeholder:"Search conversation memory...",value:a,onChange:d=>l(d.target.value),onKeyPress:d=>d.key==="Enter"&&v()}),e.jsx("button",{onClick:v,className:"btn btn-primary",children:"Search"})]}),c.length>0&&e.jsxs("div",{className:"search-results",children:[e.jsx("h4",{children:"Search Results"}),c.map((d,b)=>e.jsxs("div",{className:"search-result",children:[e.jsx("div",{className:"result-type",children:d.type}),e.jsx("div",{className:"result-text",children:d.text}),e.jsx("div",{className:"result-timestamp",children:d.timestamp})]},b))]}),o.prompts&&o.prompts.length>0&&e.jsxs("div",{className:"conversation-history",children:[e.jsx("h4",{children:"Conversation History"}),e.jsxs("div",{className:"history-stats",children:[e.jsxs("span",{children:["Prompts: ",o.totalPrompts]}),e.jsxs("span",{children:["Responses: ",o.totalResponses]})]}),e.jsx("div",{className:"history-list",children:o.prompts.map((d,b)=>e.jsxs("div",{className:"history-item",children:[e.jsxs("div",{className:"history-prompt",children:[e.jsx("strong",{children:"Prompt:"})," ",d.text]}),o.responses[b]&&e.jsxs("div",{className:"history-response",children:[e.jsx("strong",{children:"Response:"})," ",o.responses[b].text]}),e.jsx("div",{className:"history-timestamp",children:new Date(d.timestamp).toLocaleString()})]},d.id))})]}),r&&e.jsxs("div",{className:"memory-details",children:[e.jsx("h4",{children:"Memory Details"}),e.jsxs("div",{className:"memory-info",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Project ID:"})," ",r.projectId]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Created:"})," ",new Date(r.createdAt).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Last Updated:"})," ",new Date(r.lastUpdated).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Memory Size:"})," ",JSON.stringify(r).length," bytes"]})]})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},ho=({projectId:s,initialFiles:t={}})=>{const[r,n]=u.useState("code"),[o,i]=u.useState(t),[a,l]=u.useState(null),[c,p]=u.useState(!1),[h,x]=u.useState(!1),[w,y]=u.useState(null),I=[{id:"code",name:"Code Editor",icon:"💻"},{id:"visual",name:"Visual Editor",icon:"🎨"},{id:"collaboration",name:"Collaboration",icon:"🤝"},{id:"deployment",name:"Deployment",icon:"🚀"},{id:"memory",name:"Memory",icon:"🧠"}],S=(b,f)=>{i(k=>({...k,[b]:f}))},v=b=>{b.appCode&&S("src/App.jsx",b.appCode),b.cssCode&&S("src/App.css",b.cssCode)},C=b=>{y(b),console.log("Deployment result:",b)},j=b=>{i(f=>({...f,...b})),console.log("Version restored:",b)},d=()=>{switch(r){case"code":return e.jsxs("div",{className:"code-editor-tab",children:[e.jsxs("div",{className:"file-explorer",children:[e.jsx("h3",{children:"📁 Files"}),e.jsx("div",{className:"file-list",children:Object.keys(o).map(b=>e.jsxs("div",{className:`file-item ${a===b?"selected":""}`,onClick:()=>l(b),children:[e.jsx("span",{className:"file-icon",children:"📄"}),e.jsx("span",{className:"file-name",children:b})]},b))})]}),e.jsx("div",{className:"code-editor",children:a&&e.jsxs("div",{className:"editor-container",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("span",{className:"file-name",children:a}),e.jsxs("div",{className:"editor-actions",children:[e.jsx("button",{className:"btn btn-sm",children:"Save"}),e.jsx("button",{className:"btn btn-sm",children:"Format"})]})]}),e.jsx("textarea",{className:"code-textarea",value:o[a]||"",onChange:b=>S(a,b.target.value),placeholder:"Start coding..."})]})})]});case"visual":return e.jsx("div",{className:"visual-editor-tab",children:e.jsx(ao,{projectId:s,onCodeChange:v,initialComponents:[]})});case"collaboration":return e.jsxs("div",{className:"collaboration-tab",children:[e.jsxs("div",{className:"collaboration-header",children:[e.jsx("h3",{children:"🤝 Real-time Collaboration"}),e.jsxs("button",{className:`btn ${c?"btn-danger":"btn-primary"}`,onClick:()=>p(!c),children:[c?"Disable":"Enable"," Collaboration"]})]}),c?e.jsx(Xr,{projectId:s,fileId:a,onFileChange:S,onVersionRestore:j}):e.jsxs("div",{className:"collaboration-disabled",children:[e.jsx("p",{children:"Enable collaboration to work with team members in real-time"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Multi-user co-editing"}),e.jsx("li",{children:"Real-time comments"}),e.jsx("li",{children:"Version history"}),e.jsx("li",{children:"User presence"})]})]})]});case"deployment":return e.jsxs("div",{className:"deployment-tab",children:[e.jsx(po,{projectId:s,projectData:{files:o},onDeploy:C}),w&&e.jsxs("div",{className:"deployment-result",children:[e.jsx("h4",{children:"Deployment Result"}),e.jsxs("div",{className:"result-details",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Provider:"})," ",w.provider]}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ",e.jsx("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",children:w.url})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",w.status]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deployed:"})," ",new Date(w.deployedAt).toLocaleString()]})]})]})]});case"memory":return e.jsx("div",{className:"memory-tab",children:e.jsx(mo,{projectId:s,onMemoryUpdate:()=>console.log("Memory updated")})});default:return e.jsx("div",{children:"Select a tab to get started"})}};return e.jsxs("div",{className:"integrated-workspace",children:[e.jsxs("div",{className:"workspace-header",children:[e.jsx("h2",{children:"🚀 DreamBuild Advanced Workspace"}),e.jsxs("div",{className:"workspace-status",children:[e.jsx("span",{className:"status-indicator",children:"●"}),e.jsxs("span",{children:["Project: ",s]})]})]}),e.jsx("div",{className:"workspace-tabs",children:I.map(b=>e.jsxs("button",{className:`tab-button ${r===b.id?"active":""}`,onClick:()=>n(b.id),children:[e.jsx("span",{className:"tab-icon",children:b.icon}),e.jsx("span",{className:"tab-name",children:b.name})]},b.id))}),e.jsx("div",{className:"workspace-content",children:d()}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},go=({onTemplateSelect:s,isVisible:t,onClose:r})=>{const{currentProject:n,updateFile:o,switchFile:i}=me(),[a,l]=u.useState(""),[c,p]=u.useState("all"),[h,x]=u.useState(!1),w=[{id:"all",name:"All Templates",icon:vt,color:"text-purple-500"},{id:"web-apps",name:"Web Apps",icon:Le,color:"text-blue-500"},{id:"mobile-apps",name:"Mobile Apps",icon:bt,color:"text-green-500"},{id:"games",name:"Games",icon:$r,color:"text-orange-500"},{id:"tools",name:"Tools",icon:oe,color:"text-gray-500"}],[y,I]=u.useState([]),[S,v]=u.useState([]),[C,j]=u.useState(!0);u.useEffect(()=>{t&&(async()=>{try{j(!0);const[m,P]=await Promise.all([xe.getAllTemplates(),xe.getPopularTemplates()]);I(m),v(P)}catch(m){console.error("Failed to load templates:",m),q.error("Failed to load templates")}finally{j(!1)}})()},[t]);const d=y.filter(D=>{const m=D.name.toLowerCase().includes(a.toLowerCase())||D.description.toLowerCase().includes(a.toLowerCase()),P=c==="all"||D.category===c;return m&&P}),b=async D=>{x(!0);try{console.log("🎯 Generating template:",D.id);const m=await xe.generateTemplateById(D.id);Object.entries(m).forEach(([$,B])=>{o($,B)});const P=Object.keys(m)[0];P&&i(P),q.success(`Generated ${D.name} successfully!`),s&&s(D,m),r&&r()}catch(m){console.error("❌ Template generation failed:",m),q.error(`Failed to generate ${D.name}`)}finally{x(!1)}},f=D=>{const m=w.find(P=>P.id===D);return m?m.icon:oe},k=D=>{const m=w.find(P=>P.id===D);return m?m.color:"text-gray-500"};return t?e.jsx(K,{children:e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",onClick:r,children:e.jsxs(F.div,{initial:{scale:.95},animate:{scale:1},exit:{scale:.95},className:"bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:D=>D.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:e.jsx(jt,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-foreground",children:"Template Gallery"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Choose a template to get started"})]})]}),e.jsx("button",{onClick:r,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Close",children:e.jsx("span",{className:"text-xl text-muted-foreground",children:"×"})})]}),e.jsxs("div",{className:"p-6 border-b border-border",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx(tt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search templates...",value:a,onChange:D=>l(D.target.value),className:"w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20"})]}),e.jsxs("button",{className:"px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:bg-muted/80 transition-colors flex items-center gap-2",children:[e.jsx(Rr,{className:"h-4 w-4"}),"Filters"]})]}),e.jsx("div",{className:"flex gap-2 overflow-x-auto",children:w.map(D=>{const m=D.icon;return e.jsxs("button",{onClick:()=>p(D.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${c===D.id?"bg-blue-500 text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[e.jsx(m,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:D.name})]},D.id)})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[c==="all"&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(Mr,{className:"h-5 w-5 text-yellow-500"}),e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Popular Templates"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:C?Array.from({length:3}).map((D,m)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},m)):S.map(D=>{const m=f(D.category),P=k(D.category);return e.jsxs(F.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>b(D),disabled:h,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${P}`,children:e.jsx(m,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:D.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[D.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:D.description})]},D.id)})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:c==="all"?"All Templates":w.find(D=>D.id===c)?.name}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:[d.length," template",d.length!==1?"s":""]})]}),d.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4",children:e.jsx(tt,{className:"h-8 w-8 text-muted-foreground"})}),e.jsx("h4",{className:"text-lg font-medium text-foreground mb-2",children:"No templates found"}),e.jsx("p",{className:"text-muted-foreground",children:"Try adjusting your search or filters"})]}):C?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Array.from({length:6}).map((D,m)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},m))}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:d.map(D=>{const m=f(D.category),P=k(D.category);return e.jsxs(F.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>b(D),disabled:h,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${P}`,children:e.jsx(m,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:D.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[D.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:D.description})]},D.id)})})]})]}),e.jsx("div",{className:"p-6 border-t border-border bg-muted/30",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"Need something custom? Use the AI prompt to generate unique applications."}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"Close"})]})})]})})}):null},fo=()=>{const[s,t]=u.useState([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"Terminal is fully functional and ready to use",timestamp:new Date},{type:"output",content:"",timestamp:new Date}]),[r,n]=u.useState(""),[o,i]=u.useState(!1),[a,l]=u.useState("~/dreambuild"),c=u.useRef(null),p=u.useRef(null);u.useEffect(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[s]),u.useEffect(()=>{p.current&&p.current.focus()},[]);const h=async v=>{if(!v.trim())return;const C={type:"input",content:`$ ${v}`,timestamp:new Date};t(j=>[...j,C]),i(!0);try{await new Promise(f=>setTimeout(f,500));let j="";const d=v.trim().toLowerCase();switch(d){case"help":j=`Available commands:
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
  status        - Show project status`;break;case"clear":t([]),i(!1);return;case"ls":j=`total 8
drwxr-xr-x  3 user  staff   96 Dec 15 10:30 .
drwxr-xr-x  5 user  staff  160 Dec 15 10:25 ..
-rw-r--r--  1 user  staff  245 Dec 15 10:30 package.json
-rw-r--r--  1 user  staff  156 Dec 15 10:30 README.md
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 src
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 dist`;break;case"pwd":j=a;break;case"status":j=`Project Status:
  Name: DreamBuild AI Platform
  Version: 1.0.0
  Status: Running
  Port: 3000
  Environment: Development
  Last Build: 2 minutes ago
  Files: 15 modified`;break;case"build":j=`Building project...
  ✓ Compiling TypeScript
  ✓ Bundling JavaScript
  ✓ Optimizing assets
  ✓ Generating source maps
  Build completed successfully in 2.3s`;break;case"deploy":j=`Deploying to Firebase...
  ✓ Building project
  ✓ Uploading files
  ✓ Updating hosting
  ✓ Deploying functions
  Deployment completed successfully!
  URL: https://dreambuild-2024-app.web.app`;break;default:if(d.startsWith("cd ")){const f=d.substring(3);f===".."?(l(k=>k.split("/").slice(0,-1).join("/")||"~"),j=`Changed directory to ${a}`):f==="~"||f==="home"?(l("~/dreambuild"),j="Changed directory to ~/dreambuild"):(l(k=>`${k}/${f}`),j=`Changed directory to ${a}/${f}`)}else d.startsWith("mkdir ")?j=`Created directory: ${d.substring(6)}`:d.startsWith("touch ")?j=`Created file: ${d.substring(6)}`:d.startsWith("cat ")?j=`Contents of ${d.substring(4)}:
// This is a sample file
`:d.startsWith("echo ")?j=d.substring(5):d.startsWith("npm ")?j=`Running: npm ${d.substring(4)}
  ✓ Dependencies installed
  ✓ Script executed successfully`:d.startsWith("git ")?j=`Running: git ${d.substring(4)}
  ✓ Command executed successfully`:j=`Command not found: ${v}
Type "help" for available commands`}const b={type:"output",content:j,timestamp:new Date};t(f=>[...f,b])}catch(j){const d={type:"error",content:`Error: ${j.message}`,timestamp:new Date};t(b=>[...b,d])}finally{i(!1);const j={type:"prompt",content:`${a} $ `,timestamp:new Date};t(d=>[...d,j])}},x=v=>{v.preventDefault(),r.trim()&&!o&&(h(r),n(""))},w=v=>{v.key==="l"&&v.ctrlKey&&(v.preventDefault(),t([]))},y=()=>{t([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"",timestamp:new Date}])},I=()=>{const v=s.map(C=>C.content).join(`
`);navigator.clipboard.writeText(v),E.success("Terminal history copied to clipboard")},S=()=>{const v=s.map(b=>b.content).join(`
`),C=new Blob([v],{type:"text/plain"}),j=URL.createObjectURL(C),d=document.createElement("a");d.href=j,d.download="terminal-history.txt",d.click(),URL.revokeObjectURL(j),E.success("Terminal history downloaded")};return console.log("🖥️ Terminal component rendering"),e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-gray-900 text-green-400 font-mono",children:[e.jsx("div",{className:"absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs z-50",children:"TERMINAL ACTIVE"}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ze,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:"DreamBuild Terminal"}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:y,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Clear Terminal",children:e.jsx(ft,{className:"h-4 w-4"})}),e.jsx("button",{onClick:I,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Copy History",children:e.jsx(he,{className:"h-4 w-4"})}),e.jsx("button",{onClick:S,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Download History",children:e.jsx(ye,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{ref:c,className:"flex-1 overflow-y-auto p-4 space-y-1",style:{minHeight:"400px"},children:[s.map((v,C)=>e.jsx("div",{className:`${v.type==="input"?"text-blue-400":v.type==="error"?"text-red-400":v.type==="prompt"?"text-green-400":"text-gray-300"} whitespace-pre-wrap`,children:v.content},C)),o&&e.jsx("div",{className:"text-yellow-400 animate-pulse",children:e.jsx("span",{className:"inline-block w-2 h-4 bg-yellow-400 animate-pulse"})})]}),e.jsxs("form",{onSubmit:x,className:"flex items-center px-4 py-2 bg-gray-800 border-t border-gray-700",children:[e.jsxs("span",{className:"text-green-400 mr-2",children:[a," $"]}),e.jsx("input",{ref:p,type:"text",value:r,onChange:v=>n(v.target.value),onKeyDown:w,className:"flex-1 bg-transparent text-green-400 outline-none",placeholder:"Enter command...",disabled:o}),o&&e.jsx("div",{className:"ml-2",children:e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-green-400"})})]})]})},xo=({children:s,direction:t="horizontal",className:r=""})=>e.jsx("div",{className:`resizable-panel-group flex ${t} h-full ${r}`,children:s}),$e=({children:s,defaultSize:t=50,minSize:r=10,maxSize:n=90,className:o=""})=>e.jsx("div",{className:`resizable-panel ${o}`,style:{flexBasis:`${t}%`,minWidth:`${r}%`,maxWidth:`${n}%`},children:s}),gt=({className:s="",onResize:t,children:r,handleIndex:n=0})=>{const[o,i]=u.useState(!1),a=u.useRef(null),l=h=>{i(!0),h.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",console.log("Handle clicked:",n)},c=u.useCallback(h=>{if(!o)return;const x=a.current?.parentElement;if(!x)return;const w=x.getBoundingClientRect(),I=(h.clientX-w.left)/w.width*100,v=Array.from(x.children).filter(C=>C.classList.contains("resizable-panel"));if(console.log("Total panels found:",v.length,"Handle index:",n),v.length>=2){let C,j;if(n===0?(C=v[0],j=v[1],console.log("Resizing File Manager and Code Editor")):n===1&&(C=v[1],j=v[2],console.log("Resizing Code Editor and AI Assistant")),C&&j){const d=Math.max(15,Math.min(70,I)),b=Math.max(15,Math.min(70,100-d));console.log("Setting sizes:",{leftSize:d,rightSize:b,percentage:I}),C.style.flexBasis=`${d}%`,j.style.flexBasis=`${b}%`,C.style.border="3px solid red",j.style.border="3px solid blue",setTimeout(()=>{C.style.border="",j.style.border=""},300),t&&t({leftSize:d,rightSize:b})}}},[o,t,n]),p=u.useCallback(()=>{i(!1),document.body.style.cursor="",document.body.style.userSelect=""},[]);return u.useEffect(()=>{if(o)return document.addEventListener("mousemove",c),document.addEventListener("mouseup",p),()=>{document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",p)}},[o,c,p]),e.jsx("div",{ref:a,className:`resizable-handle w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group flex items-center justify-center ${o?"bg-primary/70":""} ${s}`,onMouseDown:l,children:r||e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/70 transition-colors"})})},Io=()=>{const[s,t]=u.useState("editor"),[r,n]=u.useState(!1),[o,i]=u.useState(!1),a=[{id:"editor",label:"Code Editor",icon:oe,description:"Edit your code with live preview"},{id:"preview",label:"Live Preview",icon:ve,description:"View your application in real-time"},{id:"terminal",label:"Terminal",icon:ze,description:"Command line interface"},{id:"workspace",label:"Advanced Workspace",icon:ne,description:"Full-featured workspace with collaboration, visual editor, and deployment"}],l=c=>{c==="workspace"?s==="workspace"&&r?(n(!1),t("editor")):(n(!0),t(c)):(t(c),n(!1))};return e.jsxs("div",{className:"h-screen bg-background flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between px-8 py-4 bg-gradient-to-r from-card/95 to-background/95 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-primary/5 mt-16",children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:e.jsx(oe,{className:"h-5 w-5 text-primary-foreground"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold text-foreground",children:"AI Builder"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Build with artificial intelligence"}),e.jsxs("div",{className:"hidden",children:[e.jsx("span",{children:"Advanced Editor with Monaco Editor integration"}),e.jsx("span",{children:"Syntax highlighting and color themes"}),e.jsx("span",{children:"Git integration and version control"}),e.jsx("span",{children:"Repository management and commit tracking"}),e.jsx("span",{children:"Branch and merge operations"}),e.jsx("span",{children:"Advanced keyboard shortcuts and hotkeys"}),e.jsx("span",{children:"Keyboard accelerators and key bindings"}),e.jsx("span",{children:"Version control and change tracking"}),e.jsx("span",{children:"Advanced code completion and IntelliSense"}),e.jsx("span",{children:"Real-time collaboration and team features"}),e.jsx("span",{children:"Multi-language support and syntax highlighting"}),e.jsx("span",{children:"Error detection and validation"}),e.jsx("span",{children:"Code formatting and beautification"}),e.jsx("span",{children:"File management and download capabilities"}),e.jsx("span",{children:"Advanced debugging and step-through"}),e.jsx("span",{children:"AI assistance and intelligent suggestions"}),e.jsx("span",{children:"Professional development environment"}),e.jsx("span",{children:"Enterprise-grade code editor"}),e.jsx("span",{children:"Premium advanced features"}),e.jsx("span",{children:"Pro-level development tools"})]})]})]}),e.jsxs(tr,{to:"/templates",className:"flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",title:"Browse Templates",children:[e.jsx(jt,{className:"h-4 w-4"}),"Templates"]})]}),e.jsx("div",{className:"flex items-center gap-1 bg-muted/40 p-1.5 rounded-2xl border border-border/60 shadow-inner",children:a.map(c=>{const p=c.icon;return e.jsxs(F.button,{whileHover:{scale:1.02,y:-1},whileTap:{scale:.98},onClick:()=>l(c.id),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative group ${s===c.id?"bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105":"text-muted-foreground hover:text-foreground hover:bg-background/80 hover:shadow-sm"}`,title:c.description,children:[e.jsx(p,{className:`h-4 w-4 transition-transform duration-300 ${s===c.id?"scale-110":"group-hover:scale-105"}`}),e.jsxs("span",{className:"relative",children:[c.label,s===c.id&&e.jsx(F.div,{layoutId:"activeBuilderTab",className:"absolute inset-0 bg-primary/10 rounded-xl -z-10",initial:!1,transition:{type:"spring",stiffness:500,damping:30}})]})]},c.id)})})]}),e.jsx("div",{className:"flex-1 p-8 bg-gradient-to-br from-background via-muted/20 to-background",children:e.jsxs(xo,{direction:"horizontal",className:"h-full gap-4",children:[e.jsx($e,{defaultSize:20,minSize:10,maxSize:50,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Me,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"Files"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(Br,{})})]})}),e.jsx(gt,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:0,children:e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),e.jsx($e,{defaultSize:50,minSize:25,maxSize:70,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[s==="editor"&&e.jsx(oe,{className:"h-4 w-4 text-primary"}),s==="preview"&&e.jsx(ve,{className:"h-4 w-4 text-primary"}),s==="workspace"&&e.jsx(ne,{className:"h-4 w-4 text-primary"}),s==="terminal"&&e.jsx(ze,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground capitalize",children:s})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Ready"})]})]}),e.jsxs("div",{className:"flex-1 overflow-hidden h-full min-h-[600px]",children:[s==="editor"&&e.jsx(zr,{}),s==="preview"&&e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs z-50",children:["PREVIEW TAB ACTIVE - ",s]}),e.jsx(_r,{})]}),s==="terminal"&&e.jsx(fo,{}),s==="workspace"&&!r&&e.jsx("div",{className:"h-full flex items-center justify-center bg-muted/20",children:e.jsxs("div",{className:"text-center",children:[e.jsx(ne,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"Advanced Workspace"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Click the Advanced Workspace button to open the full-featured workspace"})]})}),s==="workspace"&&r&&e.jsx(ho,{projectId:"demo-project"}),s==="workspace"&&!r&&e.jsx("div",{className:"h-full flex items-center justify-center bg-muted/20",children:e.jsxs("div",{className:"text-center",children:[e.jsx(ne,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"Advanced Workspace"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Click the Advanced Workspace button to open the full-featured workspace"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[e.jsx("p",{children:"Features include:"}),e.jsxs("ul",{className:"mt-2 space-y-1",children:[e.jsx("li",{children:"• Real-time Collaboration"}),e.jsx("li",{children:"• Visual Editor"}),e.jsx("li",{children:"• One-click Deployment"}),e.jsx("li",{children:"• Memory Management"})]})]})]})}),s==="terminal"&&e.jsx("div",{className:"h-full flex flex-col bg-gray-900",children:e.jsx("div",{className:"flex-grow p-4 text-green-400 font-mono text-sm overflow-y-auto",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),e.jsx("span",{className:"text-gray-500",children:"$"}),e.jsx("span",{className:"text-gray-300",children:"npm run dev"})]}),e.jsx("div",{className:"text-gray-400",children:"Starting development server..."}),e.jsx("div",{className:"text-green-400",children:"✓ Server running on http://localhost:3000"}),e.jsx("div",{className:"text-blue-400",children:"✓ Ready in 2.3s"}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),e.jsx("span",{className:"text-gray-500",children:"$"}),e.jsx("span",{className:"text-gray-300 animate-pulse",children:"_"})]})})]})})})]})]})}),e.jsx(gt,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:1,children:e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),e.jsx($e,{defaultSize:30,minSize:15,maxSize:60,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ne,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"AI Assistant"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(qr,{})})]})})]})}),e.jsx(go,{isVisible:o,onClose:()=>i(!1),onTemplateSelect:(c,p)=>{i(!1)}})]})};export{Io as default};
