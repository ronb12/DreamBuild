import{j as e}from"./index-CcdfExU1.js";import{r as h,p as M,o as Y,P as te,ah as Te,aE as Fe,b as ne,c as re,n as Me,k as Re,N as L,g as Ee,Q as We,s as ge,q as Be,w as xe,aJ as Le,aP as ce,an as de,C as Q,ax as Oe,a1 as ze,ag as Ge,ap as He,a9 as Ue,au as le,z as qe,E as be,at as ae,S as ye,as as _e,j as Ve,am as oe,X as pe,aQ as Ye,a8 as Ke,a6 as Je}from"./ui-vendor-QtYWuEup.js";import{r as H,s as U,h as q,i as _,g as z,u as se,z as A,j as G,l as ue,f as me,m as S,c as Ze,R as he,k as X,n as fe,C as Qe,P as Xe,I as et,A as tt,T as st,o as nt}from"./App-JHMGR7pk.js";import{_ as ie}from"./monaco-editor-4pq07gti.js";import{l as Z,k as V}from"./firebase-C4KlH9TP.js";import"./react-vendor-D3F3s8fL.js";class ot{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(s,t){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(s.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(s,t,"firebase");const n=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i={id:n,projectName:t||"dream-app",files:s.files,config:s.config,deployedAt:new Date,status:"uploading",platform:"firebase"},a={};for(const[I,D]of Object.entries(s.files))if(D&&D.trim()){const y=H(U,`projects/${n}/${I}`),P=new Blob([D],{type:this.getMimeType(I)});await q(y,P);const E=await _(y);a[I]=E}const c=this.createHostedHTML(s.files),b=H(U,`projects/${n}/index.html`),g=new Blob([c],{type:"text/html"});await q(b,g);const N=await _(b);return await Z(V(z,"deployments",n),{...i,status:"completed",hostedURL:N,files:a,completedAt:new Date}),this.deployments.set(n,i),console.log("✅ Firebase deployment completed:",N),{success:!0,deploymentId:n,url:N,platform:"firebase"}}catch(o){throw console.error("❌ Firebase deployment failed:",o),new Error(`Firebase deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(s,t){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const o=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(s.files))throw new Error("Apple App Store deployment is only available for mobile applications");const n=this.detectMobileFramework(s.files);console.log(`📱 Deploying ${n} app to Apple App Store...`);const i=await this.generateMobileAppFiles(s,t,n),a=await this.executeAppleStoreBuild(i,t,n),c={id:o,projectName:t||"mobile-app",files:{...s.files,...i},config:s.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"apple-app-store",framework:n,buildInstructions:this.generateAppleStoreInstructions(n,t),terminalOutput:a.output,buildCommands:a.commands},b=this.createAppleStoreInstructionsHTML(t,n,c.buildInstructions,a),g=H(U,`apple-store/${o}/index.html`),N=new Blob([b],{type:"text/html"});await q(g,N);const I=await _(g);return await Z(V(z,"deployments",o),{...c,hostedURL:I}),this.deployments.set(o,c),{success:a.success,deploymentId:o,url:I,platform:"apple-app-store",framework:n,buildInstructions:c.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(o){throw console.error("❌ Apple App Store deployment failed:",o),new Error(`Apple App Store deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(s,t){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const o=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(s.files))throw new Error("Google Play Store deployment is only available for mobile applications");const n=this.detectMobileFramework(s.files);console.log(`📱 Deploying ${n} app to Google Play Store...`);const i=await this.generateMobileAppFiles(s,t,n),a=await this.executeGooglePlayBuild(i,t,n),c={id:o,projectName:t||"mobile-app",files:{...s.files,...i},config:s.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"google-play-store",framework:n,buildInstructions:this.generateGooglePlayInstructions(n,t),terminalOutput:a.output,buildCommands:a.commands},b=this.createGooglePlayInstructionsHTML(t,n,c.buildInstructions,a),g=H(U,`google-play/${o}/index.html`),N=new Blob([b],{type:"text/html"});await q(g,N);const I=await _(g);return await Z(V(z,"deployments",o),{...c,hostedURL:I}),this.deployments.set(o,c),{success:a.success,deploymentId:o,url:I,platform:"google-play-store",framework:n,buildInstructions:c.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(o){throw console.error("❌ Google Play Store deployment failed:",o),new Error(`Google Play Store deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(s,t,o=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const n=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!o){const i=t.toLowerCase().replace(/[^a-z0-9-]/g,"-"),a=this.createHostedHTML(s.files),c=H(U,`github-pages/${n}/index.html`),b=new Blob([a],{type:"text/html"});await q(c,b);const g=await _(c);return await Z(V(z,"deployments",n),{id:n,projectName:t,files:s.files,config:s.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:g,repoName:i,instructions:this.generateGitHubInstructions(t,s.files)}),{success:!0,deploymentId:n,url:g,platform:"github-pages",repoName:i,instructions:this.generateGitHubInstructions(t,s.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(n){throw console.error("❌ GitHub deployment failed:",n),new Error(`GitHub deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}createHostedHTML(s){const t=s["index.html"]||this.generateDefaultHTML(),o=s["style.css"]||"",n=s["script.js"]||"";let i=t;return o.trim()&&(i.includes("</head>")?i=i.replace("</head>",`<style>${o}</style>
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
</html>`}getMimeType(s){const t=s.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[t]||"text/plain"}generateGitHubInstructions(s,t){const o=s.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${o}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${o}`],files:Object.keys(t),repoName:o}}getDeploymentStatus(s){return this.deployments.get(s)}async getAllDeployments(){try{const{collection:s,query:t,orderBy:o,limit:n,getDocs:i}=await ie(async()=>{const{collection:g,query:N,orderBy:I,limit:D,getDocs:y}=await import("./firebase-C4KlH9TP.js").then(P=>P.A);return{collection:g,query:N,orderBy:I,limit:D,getDocs:y}},[]),a=s(z,"deployments"),c=t(a,o("deployedAt","desc"),n(20));return(await i(c)).docs.map(g=>({id:g.id,...g.data()}))}catch(s){return console.error("Error fetching deployments:",s),[]}}async deleteDeployment(s){try{const{deleteDoc:t}=await ie(async()=>{const{deleteDoc:o}=await import("./firebase-C4KlH9TP.js").then(n=>n.A);return{deleteDoc:o}},[]);return await t(V(z,"deployments",s)),this.deployments.delete(s),!0}catch(t){return console.error("Error deleting deployment:",t),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(s){const t=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],o=Object.keys(s);return t.some(n=>o.some(i=>i.includes(n)))}async deployMobileApp(s,t,o){const n=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=this.detectMobileFramework(s.files);console.log(`📱 Deploying ${i} mobile app...`);const a={id:n,projectName:t||"mobile-app",files:s.files,config:s.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:i,buildInstructions:this.generateMobileBuildInstructions(i,t,o)},c=this.createMobileAppInstructionsHTML(t,i,a.buildInstructions),b=H(U,`mobile-apps/${n}/index.html`),g=new Blob([c],{type:"text/html"});await q(b,g);const N=await _(b);return await Z(V(z,"deployments",n),{...a,hostedURL:N}),this.deployments.set(n,a),{success:!0,deploymentId:n,url:N,platform:"mobile",framework:i,buildInstructions:a.buildInstructions}}detectMobileFramework(s){const t=Object.keys(s);return t.some(o=>o.includes("pubspec.yaml")||o.includes("main.dart"))?"Flutter":t.some(o=>o.includes("App.js")&&o.includes("package.json"))?"React Native":t.some(o=>o.includes("ionic.config.json"))?"Ionic":t.some(o=>o.includes("capacitor.config.json"))?"Capacitor":t.some(o=>o.includes("manifest.json")&&o.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(s,t,o){switch(t.toLowerCase().replace(/[^a-z0-9]/g,""),s){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:s,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(s,t){switch(t.toLowerCase().replace(/[^a-z0-9]/g,""),s){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:s,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(s,t){switch(t.toLowerCase().replace(/[^a-z0-9]/g,""),s){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:s,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(s,t,o){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${s} - Apple App Store Deployment</title>
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
            <h1>${s}</h1>
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
</html>`}createGooglePlayInstructionsHTML(s,t,o){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${s} - Google Play Store Deployment</title>
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
            <h1>${s}</h1>
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
</html>`}createMobileAppInstructionsHTML(s,t,o){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${s} - Build Instructions</title>
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
            <h1>🚀 ${s}</h1>
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
</html>`}async generateMobileAppFiles(s,t,o){try{console.log(`📱 Generating ${o} mobile app files...`);const{default:n}=await ie(async()=>{const{default:a}=await import("./mobileAppService-BHaVoDAx.js");return{default:a}},[]),i=await n.generateMobileApp(s,t,o);return console.log(`✅ Generated ${Object.keys(i).length} mobile app files`),i}catch(n){throw console.error("❌ Failed to generate mobile app files:",n),new Error(`Failed to generate mobile app files: ${n.message}`)}}async executeAppleStoreBuild(s,t,o){const n=[],i=[];try{console.log(`🍎 Executing Apple App Store build for ${o}...`);const a=`/tmp/dreambuild-${t}-${Date.now()}`;n.push(`mkdir -p ${a}`);for(const[c,b]of Object.entries(s)){const g=`${a}/${c}`;n.push(`cat > ${g} << 'EOF'
${b}
EOF`)}switch(n.push(`cd ${a}`),o){case"React Native":n.push("npm install"),n.push("npx expo install"),n.push("npx expo build:ios --type archive");break;case"Flutter":n.push("flutter pub get"),n.push("flutter build ios --release");break;case"PWA":n.push("npm install"),n.push("npm run build"),n.push("npx @pwabuilder/cli build --platform ios");break;default:n.push('echo "Framework-specific build commands not implemented yet"')}for(const c of n)i.push(`$ ${c}`),i.push("Command executed successfully");return console.log(`✅ Apple App Store build completed for ${o}`),{success:!0,output:i.join(`
`),commands:n,projectDir:a}}catch(a){return console.error("❌ Apple App Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:n,error:a.message}}}async executeGooglePlayBuild(s,t,o){const n=[],i=[];try{console.log(`🤖 Executing Google Play Store build for ${o}...`);const a=`/tmp/dreambuild-${t}-${Date.now()}`;n.push(`mkdir -p ${a}`);for(const[c,b]of Object.entries(s)){const g=`${a}/${c}`;n.push(`cat > ${g} << 'EOF'
${b}
EOF`)}switch(n.push(`cd ${a}`),o){case"React Native":n.push("npm install"),n.push("npx expo install"),n.push("npx expo build:android --type app-bundle");break;case"Flutter":n.push("flutter pub get"),n.push("flutter build appbundle --release");break;case"PWA":n.push("npm install"),n.push("npm run build"),n.push("npx @pwabuilder/cli build --platform android");break;default:n.push('echo "Framework-specific build commands not implemented yet"')}for(const c of n)i.push(`$ ${c}`),i.push("Command executed successfully");return console.log(`✅ Google Play Store build completed for ${o}`),{success:!0,output:i.join(`
`),commands:n,projectDir:a}}catch(a){return console.error("❌ Google Play Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:n,error:a.message}}}async executeTerminalCommands(s,t,o=3e5){try{console.log("🖥️ Executing commands via terminal...");const n={success:!0,output:s.map(i=>`$ ${i}
Executed successfully`).join(`
`),commands:s,projectDir:t};return console.log("✅ Terminal commands executed successfully"),n}catch(n){return console.error("❌ Terminal command execution failed:",n),{success:!1,output:`Error: ${n.message}`,commands:s,error:n.message}}}}const ee=new ot,it=()=>{const{currentProject:m,switchFile:s,updateFile:t,saveProject:o,createNewProject:n,updateConfig:i}=se(),[a,c]=h.useState(!1),[b,g]=h.useState(""),[N,I]=h.useState(!1),[D,y]=h.useState(!1),[P,E]=h.useState(!1),[w,F]=h.useState("firebase"),[v,C]=h.useState(!1),[x,j]=h.useState(""),[T,W]=h.useState({show:!1,x:0,y:0,filename:""}),O=h.useRef(null),u={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},k=l=>u[l]||"📄",r=l=>{s(l)},d=(l,f)=>{l.preventDefault(),W({show:!0,x:l.clientX,y:l.clientY,filename:f})},$=l=>{const{filename:f}=T;switch(W({show:!1,x:0,y:0,filename:""}),l){case"download":ve(f);break;case"delete":we(f);break;case"rename":A.info("Rename functionality coming soon!");break;case"copy":A.info("Copy functionality coming soon!");break}},B=()=>{W({show:!1,x:0,y:0,filename:""})};h.useEffect(()=>{const l=f=>{O.current&&!O.current.contains(f.target)&&B()};return T.show&&document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[T.show]);const K=()=>{if(b.trim()){const l=b.includes(".")?b:`${b}.js`;t(l,""),s(l),g(""),c(!1),A.success(`Created ${l}`)}},we=l=>{if(Object.keys(m.files).length<=1){A.error("Cannot delete the last file");return}if(confirm(`Delete ${l}?`)){const f={...m.files};if(delete f[l],Object.keys(f).forEach(p=>{m.files[p]=f[p]}),m.activeFile===l){const p=Object.keys(f);s(p[0])}A.success(`Deleted ${l}`)}},ve=l=>{const f=m.files[l]||"",p=new Blob([f],{type:"text/plain"}),R=URL.createObjectURL(p),J=document.createElement("a");J.href=R,J.download=l,document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(R),A.success(`Downloaded ${l}`)},je=()=>{const l={name:m.name,files:m.files,config:m.config,timestamp:new Date().toISOString()},f=new Blob([JSON.stringify(l,null,2)],{type:"application/json"}),p=URL.createObjectURL(f),R=document.createElement("a");R.href=p,R.download=`${m.name}.json`,document.body.appendChild(R),R.click(),document.body.removeChild(R),URL.revokeObjectURL(p),A.success("Project downloaded!")},ke=l=>{const f=l.target.files[0];if(f){const p=new FileReader;p.onload=R=>{t(f.name,R.target.result),s(f.name),A.success(`Uploaded ${f.name}`)},p.readAsText(f)}},Ne=async()=>{if(!x.trim()){A.error("Please enter a project name");return}if(Object.keys(m.files).length===0){A.error("Please generate some code first");return}E(!0);try{const l=await Ce(m,x),f=[];if(v){A.info("Deploying to both Firebase and GitHub...");const[p,R]=await Promise.allSettled([ee.deployToFirebase(l,x),ee.deployToGitHub(l,x)]);if(p.status==="fulfilled"&&p.value.success&&f.push({platform:"Firebase",...p.value}),R.status==="fulfilled"&&R.value.success&&f.push({platform:"GitHub",...R.value}),f.length===2)A.success("Successfully deployed to both Firebase and GitHub!");else if(f.length===1)A.success(`Deployed to ${f[0].platform} (${f.length===1?"one":"both"} platform${f.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let p;w==="firebase"?p=await ee.deployToFirebase(l,x):w==="github"&&(p=await ee.deployToGitHub(l,x)),p.success&&(f.push({platform:w,...p}),A.success(`Successfully deployed to ${p.platform}!`))}f.forEach(p=>{p.url&&window.open(p.url,"_blank"),p.instructions&&(console.log(`${p.platform} deployment instructions:`,p.instructions),A.success(`Check console for ${p.platform} Pages setup instructions`))}),y(!1),j(""),C(!1)}catch(l){A.error(`Deployment failed: ${l.message}`)}finally{E(!1)}},Ce=async(l,f)=>{const p={...l};return p.files["index.html"]||(p.files["index.html"]=Se(f)),p.files["package.json"]||(p.files["package.json"]=Ae(f,p.config)),p.files["README.md"]||(p.files["README.md"]=Ie(f,p.config)),p.files["index.html"]=Pe(p.files["index.html"],f),p.files["manifest.json"]||(p.files["manifest.json"]=De(f)),p},Se=l=>`<!DOCTYPE html>
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
</html>`,Ae=(l,f)=>JSON.stringify({name:l.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${l}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",f.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),Ie=(l,f)=>`# ${l}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${f.appType||"Frontend"}
- **Language**: ${f.language||"JavaScript"}
- **Styling**: ${f.styling||"Custom CSS"}
- **Features**: ${f.features?.join(", ")||"Basic functionality"}

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
`,De=l=>JSON.stringify({name:l,short_name:l.split(" ")[0],description:`Built with DreamBuild - ${l}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),Pe=(l,f)=>{let p=l;return p.includes("<!DOCTYPE html>")||(p=`<!DOCTYPE html>
${p}`),p.includes('<meta name="viewport"')||(p=p.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),p.includes('<meta name="description"')||(p=p.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${f}">`)),p.includes('<meta name="theme-color"')||(p=p.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),p.includes("manifest.json")||(p=p.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),p},$e=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return e.jsxs(M.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[e.jsxs("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:e.jsx(Y,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>c(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:e.jsx(te,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),e.jsx("button",{onClick:()=>I(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:e.jsx(Te,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>o(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[e.jsx(Fe,{className:"h-3 w-3"}),"Save"]}),e.jsxs("button",{onClick:()=>y(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(m.files).length===0,children:[e.jsx(ne,{className:"h-3 w-3"}),"Deploy"]}),e.jsxs("button",{onClick:je,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[e.jsx(re,{className:"h-3 w-3"}),"Export"]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(m.files).length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[e.jsx("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:e.jsx(Me,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),e.jsx("button",{onClick:()=>c(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):e.jsxs("div",{className:"py-2",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[e.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:e.jsx(Y,{className:"h-3 w-3 text-white"})}),e.jsx("span",{children:m.name||"Untitled Project"}),e.jsxs("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(m.files).length," files"]})]}),Object.keys(m.files).map(l=>e.jsxs(M.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${m.activeFile===l?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>r(l),onContextMenu:f=>d(f,l),children:[e.jsx("div",{className:"w-4 flex items-center justify-center",children:e.jsx("div",{className:"w-px h-4 bg-border"})}),e.jsx("div",{className:"flex items-center justify-center w-5 h-5",children:e.jsx("span",{className:"text-base",children:k(l)})}),e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("span",{className:"text-sm font-medium truncate",children:l})}),m.activeFile===l&&e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},l))]})}),e.jsx("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:e.jsxs("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:e.jsx(Re,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),e.jsx("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:ke,multiple:!0})]})}),e.jsx(L,{children:a&&e.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10",onClick:()=>c(!1),children:e.jsxs(M.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:l=>l.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),e.jsx("input",{type:"text",value:b,onChange:l=>g(l.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:$e.map(l=>e.jsxs("button",{onClick:()=>g(`new-file${l.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[e.jsx("span",{children:l.icon}),e.jsx("span",{className:"truncate",children:l.name})]},l.extension))})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>c(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:K,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),e.jsx(L,{children:N&&e.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10",onClick:()=>I(!1),children:e.jsxs(M.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:l=>l.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:m.name,onChange:l=>i({name:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),e.jsxs("select",{value:m.config.appType,onChange:l=>i({appType:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"frontend",children:"Frontend"}),e.jsx("option",{value:"backend",children:"Backend"}),e.jsx("option",{value:"fullstack",children:"Full Stack"}),e.jsx("option",{value:"mobile",children:"Mobile"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Language"}),e.jsxs("select",{value:m.config.language,onChange:l=>i({language:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"javascript",children:"JavaScript"}),e.jsx("option",{value:"typescript",children:"TypeScript"}),e.jsx("option",{value:"python",children:"Python"}),e.jsx("option",{value:"java",children:"Java"}),e.jsx("option",{value:"csharp",children:"C#"}),e.jsx("option",{value:"cpp",children:"C++"}),e.jsx("option",{value:"c",children:"C"}),e.jsx("option",{value:"rust",children:"Rust"}),e.jsx("option",{value:"go",children:"Go"}),e.jsx("option",{value:"php",children:"PHP"}),e.jsx("option",{value:"ruby",children:"Ruby"}),e.jsx("option",{value:"swift",children:"Swift"}),e.jsx("option",{value:"kotlin",children:"Kotlin"}),e.jsx("option",{value:"dart",children:"Dart"}),e.jsx("option",{value:"scala",children:"Scala"}),e.jsx("option",{value:"html",children:"HTML"}),e.jsx("option",{value:"css",children:"CSS"}),e.jsx("option",{value:"sql",children:"SQL"}),e.jsx("option",{value:"r",children:"R"}),e.jsx("option",{value:"matlab",children:"MATLAB"}),e.jsx("option",{value:"perl",children:"Perl"}),e.jsx("option",{value:"lua",children:"Lua"}),e.jsx("option",{value:"bash",children:"Bash/Shell"}),e.jsx("option",{value:"powershell",children:"PowerShell"}),e.jsx("option",{value:"yaml",children:"YAML"}),e.jsx("option",{value:"json",children:"JSON"}),e.jsx("option",{value:"xml",children:"XML"}),e.jsx("option",{value:"markdown",children:"Markdown"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),e.jsxs("select",{value:m.config.framework||"none",onChange:l=>i({framework:l.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"none",children:"None"}),e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue.js"}),e.jsx("option",{value:"angular",children:"Angular"}),e.jsx("option",{value:"svelte",children:"Svelte"}),e.jsx("option",{value:"nextjs",children:"Next.js"}),e.jsx("option",{value:"nuxtjs",children:"Nuxt.js"}),e.jsx("option",{value:"express",children:"Express.js"}),e.jsx("option",{value:"fastapi",children:"FastAPI"}),e.jsx("option",{value:"django",children:"Django"}),e.jsx("option",{value:"flask",children:"Flask"}),e.jsx("option",{value:"spring",children:"Spring Boot"}),e.jsx("option",{value:"laravel",children:"Laravel"}),e.jsx("option",{value:"rails",children:"Ruby on Rails"}),e.jsx("option",{value:"flutter",children:"Flutter"}),e.jsx("option",{value:"react-native",children:"React Native"}),e.jsx("option",{value:"ionic",children:"Ionic"}),e.jsx("option",{value:"electron",children:"Electron"})]})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>I(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:()=>{o(),I(!1),A.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),e.jsx(L,{children:D&&e.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10",onClick:()=>y(!1),children:e.jsxs(M.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:l=>l.stopPropagation(),children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[e.jsx(ne,{className:"h-5 w-5"}),"Deploy Your App"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:x,onChange:l=>j(l.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"firebase",checked:w==="firebase",onChange:l=>F(l.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs",children:"F"})}),e.jsx("span",{children:"Firebase Hosting"})]})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"github",checked:w==="github",onChange:l=>F(l.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ee,{className:"h-4 w-4"}),e.jsx("span",{children:"GitHub Pages"})]})]})]})]}),e.jsxs("div",{className:"p-3 bg-muted rounded-md",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),e.jsx("div",{className:"text-xs text-muted-foreground space-y-1",children:w==="firebase"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free tier available"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):w==="github"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free for public repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>y(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:P,children:"Cancel"}),e.jsx("button",{onClick:Ne,disabled:P||!x.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:P?e.jsxs(e.Fragment,{children:[e.jsx(We,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):e.jsxs(e.Fragment,{children:[e.jsx(ne,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),e.jsx(L,{children:T.show&&e.jsxs(M.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:O,className:"fixed z-10 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:T.x,top:T.y},onClick:B,children:[e.jsxs("button",{onClick:()=>$("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(re,{className:"h-4 w-4"}),"Download"]}),e.jsxs("button",{onClick:()=>$("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(ge,{className:"h-4 w-4"}),"Copy"]}),e.jsxs("button",{onClick:()=>$("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(Be,{className:"h-4 w-4"}),"Rename"]}),Object.keys(m.files).length>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-t border-border my-1"}),e.jsxs("button",{onClick:()=>$("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[e.jsx(xe,{className:"h-4 w-4"}),"Delete"]})]})]})})]})};class rt{constructor(){this.conversationHistory=[],this.currentContext=null,this.userPreferences={},this.conversationState="idle",this.lastUserIntent=null,this.followUpQuestions=[]}async initializeConversation(s){return await G.initializeConversation(s.id,s),this.currentContext=G.getConversationContext(),this.conversationHistory=G.getConversationHistory(),console.log("🧠 Advanced conversation initialized"),this.currentContext}async processUserMessage(s){console.log("💬 Processing user message:",s),this.conversationState="analyzing";const t=await this.analyzeUserIntent(s);console.log("🎯 Intent analysis:",t);const o=await this.generateContextualResponse(s,t);return await this.updateConversationHistory(s,o,t),this.conversationState="idle",o}async analyzeUserIntent(s){const t=s.toLowerCase(),o={create:this.detectIntent(t,["create","build","make","develop","start","new app","new project"]),add:this.detectIntent(t,["add","include","implement","integrate","insert","put in"]),modify:this.detectIntent(t,["modify","change","update","edit","alter","fix","improve"]),remove:this.detectIntent(t,["remove","delete","take out","eliminate","get rid of"]),explain:this.detectIntent(t,["explain","tell me","what is","how does","describe","clarify"]),ask:this.detectIntent(t,["what","how","why","when","where","which","can you","could you"]),show:this.detectIntent(t,["show","display","see","view","look at","demonstrate"]),help:this.detectIntent(t,["help","assist","support","guide","tutorial","how to"]),recommend:this.detectIntent(t,["recommend","suggest","advise","what should","best practice"]),yes:this.detectIntent(t,["yes","yeah","yep","sure","ok","okay","agree","confirm"]),no:this.detectIntent(t,["no","nope","not","disagree","cancel","stop"]),clarify:this.detectIntent(t,["clarify","explain more","more details","elaborate","expand"]),repeat:this.detectIntent(t,["repeat","again","once more","restate"]),debug:this.detectIntent(t,["debug","error","bug","issue","problem","fix","broken"]),optimize:this.detectIntent(t,["optimize","performance","speed","faster","better","improve"]),test:this.detectIntent(t,["test","testing","validate","check","verify"]),status:this.detectIntent(t,["status","progress","where are we","what's done","current state"]),plan:this.detectIntent(t,["plan","roadmap","next steps","what's next","timeline"]),review:this.detectIntent(t,["review","check","audit","analyze","evaluate"])},n=this.extractEntities(s),i=this.extractFeatureMentions(s),a=this.extractTechnicalTerms(s),c=Object.keys(o).find(N=>o[N])||"general",b=this.determineConversationFlow(c,n,i),g=this.generateFollowUpQuestions(c,n,i);return{primaryIntent:c,intents:o,entities:n,features:i,technicalTerms:a,conversationFlow:b,followUpQuestions:g,confidence:this.calculateConfidence(o,n,i),requiresClarification:this.needsClarification(c,n,i)}}detectIntent(s,t){return t.some(o=>s.includes(o))}extractEntities(s){const t={technologies:[],features:[],files:[],numbers:[],timeframes:[],priorities:[]};["react","vue","angular","javascript","typescript","python","java","php","node","express","mongodb","mysql","postgresql","firebase","aws","azure","html","css","bootstrap","tailwind","sass","less","webpack","vite"].forEach(g=>{s.toLowerCase().includes(g)&&t.technologies.push(g)}),["authentication","login","register","database","api","search","filter","upload","download","payment","notification","email","chat","messaging","calendar","scheduling","analytics","dashboard","admin","user management"].forEach(g=>{s.toLowerCase().includes(g)&&t.features.push(g)});const i=/\b\w+\.(js|jsx|ts|tsx|html|css|scss|json|md|txt)\b/g,a=s.match(i)||[];t.files=a;const c=/\b\d+\b/g,b=s.match(c)||[];return t.numbers=b,t}extractFeatureMentions(s){const t=s.toLowerCase(),o=[];return Object.entries({authentication:["login","signin","register","signup","auth","user account"],database:["database","db","storage","data","persist","save"],api:["api","endpoint","service","backend","server"],ui:["interface","ui","design","layout","styling","theme"],responsive:["mobile","responsive","tablet","phone","screen size"],search:["search","find","filter","query","lookup"],payment:["payment","billing","stripe","paypal","checkout","money"],notification:["notification","alert","message","email","push"],file:["upload","download","file","image","document","attachment"],security:["security","secure","encryption","password","protection"],testing:["test","testing","unit test","integration","quality"],deployment:["deploy","hosting","production","live","publish"]}).forEach(([i,a])=>{a.some(c=>t.includes(c))&&o.push(i)}),o}extractTechnicalTerms(s){return["component","function","class","method","variable","constant","array","object","string","number","boolean","null","undefined","async","await","promise","callback","event","handler","state","props","hook","effect","context","reducer","route","path","url","endpoint","request","response","error","exception","validation","sanitization","security"].filter(o=>s.toLowerCase().includes(o))}determineConversationFlow(s,t,o){return{create:"development",add:"incremental_development",modify:"modification",explain:"educational",ask:"informational",help:"support",recommend:"advisory",debug:"troubleshooting",optimize:"optimization",test:"testing",status:"project_management",plan:"planning",review:"analysis"}[s]||"general"}generateFollowUpQuestions(s,t,o){return{create:["What type of app would you like to create?","What features should it have?","What's your target audience?","Do you have any specific requirements?"],add:["Which specific feature would you like to add?","How should this feature work?","Where should it be integrated?","Do you have any specific requirements for this feature?"],modify:["What exactly would you like to change?","How should it work differently?","What's the current behavior vs. desired behavior?","Are there any specific constraints?"],explain:["What specific aspect would you like me to explain?","What's your current understanding?","Do you need a high-level overview or detailed explanation?","Are you looking for code examples?"],help:["What specific area do you need help with?","What are you trying to accomplish?","What's your current skill level?","Do you prefer step-by-step guidance or general advice?"],debug:["What error are you seeing?","When does this issue occur?","What were you doing when it happened?","Can you share the error message or code?"]}[s]||[]}calculateConfidence(s,t,o){let n=0;const i=Object.values(s).filter(Boolean).length;n+=i*.3;const a=Object.values(t).flat().length;return n+=Math.min(a*.1,.3),n+=o.length*.1,Math.min(n,1)}needsClarification(s,t,o){return!!(this.calculateConfidence({},t,o)<.3||["create","add","modify","help"].includes(s)&&t.features.length===0)}async generateContextualResponse(s,t){const{primaryIntent:o,entities:n,features:i,requiresClarification:a}=t;if(a)return this.generateClarificationResponse(t);switch(o){case"create":return await this.handleCreateIntent(s,t);case"add":return await this.handleAddIntent(s,t);case"modify":return await this.handleModifyIntent(s,t);case"explain":return await this.handleExplainIntent(s,t);case"ask":return await this.handleAskIntent(s,t);case"help":return await this.handleHelpIntent(s,t);case"recommend":return await this.handleRecommendIntent(s,t);case"debug":return await this.handleDebugIntent(s,t);case"optimize":return await this.handleOptimizeIntent(s,t);case"test":return await this.handleTestIntent(s,t);case"status":return await this.handleStatusIntent(s,t);case"plan":return await this.handlePlanIntent(s,t);case"review":return await this.handleReviewIntent(s,t);default:return await this.handleGeneralIntent(s,t)}}async handleCreateIntent(s,t){const{entities:o,features:n}=t,i=this.currentContext;return n.length>0?`I'll help you create a new app with ${n.join(", ")} features! Based on your request, I can build a ${i?.appType||"web"} application. Let me generate the initial code structure for you.`:"I'd be happy to help you create a new app! To give you the best solution, could you tell me what type of app you want to build and what features it should have?"}async handleAddIntent(s,t){const{entities:o,features:n}=t,a=this.currentContext?.currentFeatures||[];if(n.length>0){const c=n.filter(b=>!a.includes(b));return c.length>0?`Perfect! I'll add ${c.join(", ")} to your existing app. I can see you currently have ${a.join(", ")}. I'll integrate the new features without affecting your existing code.`:`I notice you already have ${n.join(", ")} in your app. Would you like me to enhance these features or add something different?`}else return"I'd be happy to add new features to your app! What specific features would you like me to add? I can help with authentication, database integration, API connections, and much more."}async handleModifyIntent(s,t){const{entities:o,features:n}=t,a=this.currentContext?.currentFeatures||[];if(n.length>0){const c=n.filter(b=>a.includes(b));return c.length>0?`I'll help you modify ${c.join(", ")} in your app. What specific changes would you like me to make to these features?`:`I don't see ${n.join(", ")} in your current app. Would you like me to add these features instead, or are you referring to something else?`}else return"I'd be happy to help you modify your app! What specific aspects would you like to change? I can help with code improvements, feature enhancements, or structural changes."}async handleExplainIntent(s,t){const{entities:o,features:n}=t;return n.length>0?`I'd be happy to explain ${n.join(", ")}! Let me provide you with a detailed explanation of how these features work and how to implement them effectively.`:o.technologies.length>0?`I'll explain ${o.technologies.join(", ")} for you! Let me break down how these technologies work and how they can benefit your project.`:"I'd be happy to explain anything you'd like to know! What specific topic or concept would you like me to clarify?"}async handleAskIntent(s,t){const{entities:o,features:n}=t;return`Great question! Based on your query about ${n.length>0?n.join(", "):"your project"}, let me provide you with a comprehensive answer. I'll make sure to cover all the important aspects you need to know.`}async handleHelpIntent(s,t){const{entities:o,features:n}=t;return n.length>0?`I'll help you with ${n.join(", ")}! Let me provide you with step-by-step guidance and best practices for implementing these features effectively.`:"I'm here to help! I can assist you with development, debugging, optimization, and much more. What specific area would you like help with?"}async handleRecommendIntent(s,t){const{entities:o,features:n}=t;return`Based on your current app with ${(this.currentContext?.currentFeatures||[]).join(", ")}, I recommend focusing on essential features first. Let me suggest some specific improvements that would benefit your project.`}async handleDebugIntent(s,t){const{entities:o,features:n}=t;return"I'll help you debug this issue! Let me analyze the problem and provide you with a solution. Can you share more details about the error or issue you're experiencing?"}async handleOptimizeIntent(s,t){const{entities:o,features:n}=t;return"I'll help you optimize your app! Let me analyze your current setup and provide specific recommendations for improving performance, code quality, and user experience."}async handleTestIntent(s,t){const{entities:o,features:n}=t;return"I'll help you implement testing for your app! Let me set up a comprehensive testing strategy that covers unit tests, integration tests, and quality assurance."}async handleStatusIntent(s,t){const o=this.currentContext,n=o?.currentFeatures||[];return`Here's your current project status: You have a ${o?.appType||"web"} app with ${n.length} features: ${n.join(", ")}. The app is ready for further development or deployment.`}async handlePlanIntent(s,t){return`Let me create a development plan for you! Based on your current features (${(this.currentContext?.currentFeatures||[]).join(", ")}), I'll suggest the next steps and prioritize what to work on next.`}async handleReviewIntent(s,t){return this.currentContext?.currentFeatures,"I'll conduct a comprehensive review of your app! Let me analyze your current implementation, check for best practices, and provide recommendations for improvement."}async handleGeneralIntent(s,t){const{entities:o,features:n}=t;return`I understand you want to work on: "${s}". I can help you with development, feature suggestions, debugging, optimization, or any other aspect of your project. What would you like to focus on?`}generateClarificationResponse(s){const{followUpQuestions:t}=s;return t.length>0?`I'd be happy to help! To give you the best solution, could you clarify: ${t[0]}`:"I'd be happy to help! Could you provide more details about what you'd like to accomplish?"}async updateConversationHistory(s,t,o){const n={id:`msg_${Date.now()}`,type:"user",content:s,timestamp:new Date,analysis:o},i={id:`msg_${Date.now()}_ai`,type:"ai",content:t,timestamp:new Date,intent:o.primaryIntent,confidence:o.confidence};this.conversationHistory.push(n,i),await G.addMessage(s,t,"ai")}getConversationSummary(){return{messageCount:this.conversationHistory.length,lastIntent:this.lastUserIntent,currentState:this.conversationState,context:this.currentContext}}reset(){this.conversationHistory=[],this.currentContext=null,this.conversationState="idle",this.lastUserIntent=null,this.followUpQuestions=[]}}const at=new rt;class lt{constructor(){this.conversationSessions=new Map,this.userProfiles=new Map,this.contextMemory=new Map}async processUserMessage(s,t,o={}){try{const n=this.getOrCreateSession(s),i=ue.understandConversation(t,{...o,sessionId:n.id,userId:s});n.context=i.context,n.messages.push({timestamp:new Date,type:"user",content:t,analysis:i.analysis});const a=await this.generateIntelligentResponse(i,n);return n.messages.push({timestamp:new Date,type:"assistant",content:a.message,analysis:a.analysis,suggestions:a.suggestions,nextSteps:a.nextSteps}),await this.saveConversation(s,n),{message:a.message,analysis:i.analysis,suggestions:a.suggestions,nextSteps:a.nextSteps,confidence:i.analysis.confidence,context:n.context}}catch(n){return console.error("Error processing user message:",n),{message:"I apologize, but I'm having trouble understanding that. Could you please rephrase your request?",analysis:{intent:{type:"error",confidence:0}},suggestions:[],nextSteps:[],confidence:0,context:{}}}}async generateIntelligentResponse(s,t){const o=s.analysis.intent.type,n=s.analysis.confidence,i=s.analysis.entities;return s.analysis.sentiment,n>.8?await this.generateHighConfidenceResponse(o,i,t):n>.5?await this.generateMediumConfidenceResponse(o,i,t):await this.generateLowConfidenceResponse(s,t)}async generateHighConfidenceResponse(s,t,o){switch(s){case"create_app":return await this.handleCreateAppRequest(t,o);case"add_feature":return await this.handleAddFeatureRequest(t,o);case"modify_existing":return await this.handleModifyRequest(t,o);case"question":return await this.handleQuestionRequest(t,o);case"get_help":return await this.handleHelpRequest(t,o);default:return await this.handleGenericRequest(t,o)}}async handleCreateAppRequest(s,t){const o=this.extractAppTypes(s),n=this.extractFeatures(s);let i="I'll help you create that app! ";return o.length>0&&(i+=`I can see you want a ${o.join(" and ")} app. `),n.length>0&&(i+=`I'll include features like ${n.join(", ")}. `),i+="Let me generate the code for you. What specific functionality should the app have?",{message:i,analysis:{intent:"create_app",confidence:.9},suggestions:["Specify the main purpose of the app","Describe the target users","Choose a technology stack"],nextSteps:["Define app requirements","Select UI components","Configure backend services"]}}async handleAddFeatureRequest(s,t){const o=this.extractFeatures(s);let n="I'll add that feature to your existing app! ";return o.length>0&&(n+=`I'll implement ${o.join(", ")}. `),n+="Where would you like this feature to be added in your current project?",{message:n,analysis:{intent:"add_feature",confidence:.9},suggestions:["Specify the location in the app","Describe the feature behavior","Choose integration approach"],nextSteps:["Locate existing code","Implement new feature","Test integration"]}}async handleModifyRequest(s,t){const o=this.extractModifications(s);let n="I'll help you modify your existing app! ";return o.length>0&&(n+=`I'll update ${o.join(", ")}. `),n+="What specific changes would you like me to make?",{message:n,analysis:{intent:"modify_existing",confidence:.9},suggestions:["Specify what to change","Describe the new behavior","Choose modification approach"],nextSteps:["Identify code to modify","Implement changes","Test modifications"]}}async handleQuestionRequest(s,t){const o=this.extractQuestionTypes(s);let n="I'd be happy to help answer your question! ";return o.length>0&&(n+=`I can help with ${o.join(" and ")}. `),n+="What specific information do you need?",{message:n,analysis:{intent:"question",confidence:.8},suggestions:["Ask about specific features","Request code examples","Get implementation guidance"],nextSteps:["Provide detailed answer","Show code examples","Offer additional resources"]}}async handleHelpRequest(s,t){const o=this.extractHelpTopics(s);let n="I'm here to help! ";return o.length>0&&(n+=`I can assist with ${o.join(", ")}. `),n+="What would you like help with today?",{message:n,analysis:{intent:"get_help",confidence:.8},suggestions:["Browse available features","Get step-by-step guidance","Access documentation"],nextSteps:["Provide help content","Show tutorials","Connect to resources"]}}async handleGenericRequest(s,t){return{message:"I understand you want help with something. Could you provide more details about what you'd like to build or modify?",analysis:{intent:"generic",confidence:.6},suggestions:["Describe your project idea","Specify what you want to create","Ask for specific help"],nextSteps:["Gather more information","Provide clarification","Offer suggestions"]}}async generateMediumConfidenceResponse(s,t,o){return{message:`I think you want to ${s.replace("_"," ")}. Could you provide more details to help me understand exactly what you need?`,analysis:{intent:s,confidence:.6},suggestions:["Provide more specific details","Use different words to describe it","Give an example"],nextSteps:["Clarify the request","Ask follow-up questions","Provide options"]}}async generateLowConfidenceResponse(s,t){return{message:"I'm not quite sure what you're asking for. Could you rephrase your request or provide more details?",analysis:s.analysis,suggestions:["Try rephrasing your request","Use simpler language","Break it into smaller parts"],nextSteps:["Ask for clarification","Provide examples","Offer alternative approaches"]}}extractAppTypes(s){const t=[],o={web:["website","web app","web application"],mobile:["mobile app","phone app","android","ios"],desktop:["desktop app","computer app","windows","mac"],dashboard:["dashboard","admin panel","control panel"]};return s.forEach(n=>{for(const[i,a]of Object.entries(o))a.some(c=>c.includes(n.word))&&t.push(i)}),[...new Set(t)]}extractFeatures(s){const t=[],o={authentication:["login","signin","auth","security"],database:["database","storage","data"],search:["search","find","lookup"],forms:["form","input","submit"],navigation:["menu","navbar","navigation"],dashboard:["dashboard","analytics","stats"]};return s.forEach(n=>{for(const[i,a]of Object.entries(o))a.some(c=>c.includes(n.word))&&t.push(i)}),[...new Set(t)]}extractModifications(s){const t=[],o={ui:["interface","design","layout","styling"],functionality:["feature","function","behavior"],performance:["speed","optimization","performance"],security:["security","protection","safety"]};return s.forEach(n=>{for(const[i,a]of Object.entries(o))a.some(c=>c.includes(n.word))&&t.push(i)}),[...new Set(t)]}extractQuestionTypes(s){const t=[],o={implementation:["how","implement","create","build"],explanation:["what","explain","define","meaning"],troubleshooting:["error","problem","issue","fix"],best_practices:["best","recommend","suggest","advice"]};return s.forEach(n=>{for(const[i,a]of Object.entries(o))a.some(c=>c.includes(n.word))&&t.push(i)}),[...new Set(t)]}extractHelpTopics(s){const t=[],o={getting_started:["start","begin","tutorial","guide"],features:["feature","function","capability"],troubleshooting:["error","problem","issue","help"],advanced:["advanced","complex","expert","pro"]};return s.forEach(n=>{for(const[i,a]of Object.entries(o))a.some(c=>c.includes(n.word))&&t.push(i)}),[...new Set(t)]}getOrCreateSession(s){return this.conversationSessions.has(s)||this.conversationSessions.set(s,{id:`session_${Date.now()}`,userId:s,startTime:new Date,messages:[],context:{},insights:{}}),this.conversationSessions.get(s)}async saveConversation(s,t){try{await me.saveConversation(s,{sessionId:t.id,messages:t.messages,context:t.context,timestamp:new Date})}catch(o){console.error("Error saving conversation:",o)}}async getConversationHistory(s,t=50){try{return await me.getConversationHistory(s,t)}catch(o){return console.error("Error getting conversation history:",o),[]}}getConversationInsights(s){const t=this.conversationSessions.get(s);return t?{sessionId:t.id,messageCount:t.messages.length,duration:Date.now()-t.startTime.getTime(),insights:ue.getConversationInsights(),context:t.context}:null}clearSession(s){this.conversationSessions.delete(s),this.contextMemory.delete(s)}}const ct=new lt,dt=()=>{const{currentProject:m}=se(),[s,t]=h.useState([]),[o,n]=h.useState(""),[i,a]=h.useState(!1),[c,b]=h.useState([]),[g,N]=h.useState(null),[I,D]=h.useState(!1),[y,P]=h.useState(null),E=h.useRef(null);h.useEffect(()=>{w()},[m]),h.useEffect(()=>{j()},[s]);const w=async()=>{try{const u={id:m.id||`project_${Date.now()}`,name:m.name,features:F(m),techStack:m.config?[m.config.language,m.config.styling,m.config.database,m.config.auth].filter(Boolean):[],appType:m.config?.appType||"web",complexity:v(m),industry:"general"},k=await at.initializeConversation(u);P(k.id);const r=G.getConversationHistory();t(r),await C()}catch(u){console.error("Failed to initialize conversation:",u)}},F=u=>{const k=[],r=u.files||{};return Object.values(r).forEach(d=>{typeof d=="string"&&((d.includes("authentication")||d.includes("login"))&&k.push("Authentication"),(d.includes("database")||d.includes("firebase"))&&k.push("Database"),(d.includes("responsive")||d.includes("mobile"))&&k.push("Responsive Design"),(d.includes("api")||d.includes("fetch"))&&k.push("API Integration"),(d.includes("form")||d.includes("input"))&&k.push("Form Handling"),(d.includes("routing")||d.includes("router"))&&k.push("Routing"),(d.includes("state")||d.includes("useState"))&&k.push("State Management"),(d.includes("test")||d.includes("jest"))&&k.push("Testing"))}),[...new Set(k)]},v=u=>{const k=Object.keys(u.files||{}).length,r=F(u);return k>10||r.length>8?"advanced":k>5||r.length>4?"intermediate":"basic"},C=async()=>{try{const u=await G.generateFeatureRecommendations();b(u);const k=await G.checkIndustryStandards({features:F(m)});N(k)}catch(u){console.error("Failed to generate recommendations:",u)}},x=async()=>{if(!o.trim()||i)return;const u=o.trim();n(""),a(!0);const k={id:`msg_${Date.now()}`,type:"user",content:u,timestamp:new Date};t(r=>[...r,k]);try{const r=await ct.processUserMessage("current_user",u,{projectContext:m,conversationId:y}),d={id:`msg_${Date.now()}_ai`,type:"ai",content:r.message,analysis:r.analysis,suggestions:r.suggestions,nextSteps:r.nextSteps,confidence:r.confidence,timestamp:new Date};t($=>[...$,d]),await C()}catch(r){console.error("Failed to send message:",r);const d={id:`msg_${Date.now()}_error`,type:"error",content:"Sorry, I encountered an error. Please try again.",timestamp:new Date};t($=>[...$,d])}finally{a(!1)}},j=()=>{E.current?.scrollIntoView({behavior:"smooth"})},T=u=>{const k=`I'd like to add: ${u.name} - ${u.description}`;n(k)},W=u=>{switch(u){case"critical":return"text-red-500";case"high":return"text-orange-500";case"medium":return"text-yellow-500";case"low":return"text-green-500";default:return"text-gray-500"}},O=u=>{switch(u){case"critical":return e.jsx(Ue,{className:"h-4 w-4"});case"high":return e.jsx(He,{className:"h-4 w-4"});case"medium":return e.jsx(de,{className:"h-4 w-4"});case"low":return e.jsx(Ge,{className:"h-4 w-4"});default:return e.jsx(ze,{className:"h-4 w-4"})}};return e.jsxs("div",{className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-border bg-muted/30",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Le,{className:"h-5 w-5 text-primary"}),e.jsx("h3",{className:"font-semibold text-foreground",children:"AI Assistant"}),e.jsx("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"Online"})]}),e.jsxs("button",{onClick:()=>D(!I),className:"flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors",children:[e.jsx(ce,{className:"h-4 w-4"}),"Recommendations"]})]}),e.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[e.jsx(L,{children:s.map(u=>e.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:`flex ${u.type==="user"?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`max-w-[80%] p-3 rounded-lg ${u.type==="user"?"bg-primary text-primary-foreground":u.type==="error"?"bg-red-100 text-red-800 border border-red-200":"bg-muted text-foreground"}`,children:[e.jsx("p",{className:"text-sm",children:u.content}),u.type==="ai"&&u.analysis&&e.jsxs("div",{className:"mt-2 pt-2 border-t border-border/20",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[e.jsxs("span",{children:["Intent: ",u.analysis.intent?.type||"Unknown"]}),e.jsx("span",{className:`${u.confidence>.8?"text-green-500":u.confidence>.5?"text-yellow-500":"text-red-500"}`,children:u.confidence>.8?"High confidence":u.confidence>.5?"Medium confidence":"Low confidence"})]}),u.nextSteps&&u.nextSteps.length>0&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-muted-foreground mb-1",children:[e.jsx(de,{className:"h-3 w-3"}),"Next Steps:"]}),e.jsx("ul",{className:"text-xs text-muted-foreground space-y-1",children:u.nextSteps.map((k,r)=>e.jsxs("li",{className:"flex items-start gap-1",children:[e.jsx("span",{className:"text-primary",children:"•"}),e.jsx("span",{children:k})]},r))})]})]}),e.jsx("p",{className:"text-xs opacity-70 mt-1",children:new Date(u.timestamp).toLocaleTimeString()})]})},u.id))}),i&&e.jsx("div",{className:"flex justify-start",children:e.jsx("div",{className:"bg-muted text-foreground p-3 rounded-lg",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-primary"}),e.jsx("span",{className:"text-sm",children:"AI is thinking..."})]})})}),e.jsx("div",{ref:E})]}),e.jsx("div",{className:"p-4 border-t border-border",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:o,onChange:u=>n(u.target.value),onKeyPress:u=>u.key==="Enter"&&x(),placeholder:"Ask me anything about your app...",className:"flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",disabled:i}),e.jsx("button",{onClick:x,disabled:!o.trim()||i,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:"Send"})]})})]}),e.jsx(L,{children:I&&e.jsxs(M.div,{initial:{width:0,opacity:0},animate:{width:350,opacity:1},exit:{width:0,opacity:0},className:"border-l border-border bg-muted/20 overflow-hidden",children:[e.jsx("div",{className:"p-4 border-b border-border",children:e.jsxs("h4",{className:"font-semibold text-foreground flex items-center gap-2",children:[e.jsx(ce,{className:"h-4 w-4"}),"Smart Recommendations"]})}),e.jsxs("div",{className:"overflow-y-auto h-full",children:[e.jsxs("div",{className:"p-4",children:[e.jsxs("h5",{className:"font-medium text-foreground mb-3 flex items-center gap-2",children:[e.jsx(Q,{className:"h-4 w-4"}),"Suggested Features"]}),e.jsx("div",{className:"space-y-2",children:c.slice(0,5).map((u,k)=>e.jsxs("div",{onClick:()=>T(u),className:"p-3 bg-card border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors",children:[e.jsxs("div",{className:"flex items-start justify-between mb-2",children:[e.jsx("h6",{className:"font-medium text-sm text-foreground",children:u.name}),e.jsxs("div",{className:`flex items-center gap-1 ${W(u.priority)}`,children:[O(u.priority),e.jsx("span",{className:"text-xs capitalize",children:u.priority})]})]}),e.jsx("p",{className:"text-xs text-muted-foreground mb-2",children:u.description}),e.jsx("span",{className:"text-xs bg-primary/10 text-primary px-2 py-1 rounded",children:u.category})]},k))})]}),g&&e.jsxs("div",{className:"p-4 border-t border-border",children:[e.jsxs("h5",{className:"font-medium text-foreground mb-3 flex items-center gap-2",children:[e.jsx(Oe,{className:"h-4 w-4"}),"Industry Standards"]}),e.jsx("div",{className:"space-y-3",children:Object.entries(g).map(([u,k])=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-3",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h6",{className:"font-medium text-sm text-foreground capitalize",children:u.replace("_"," ")}),e.jsxs("span",{className:"text-sm font-semibold text-primary",children:[k.score,"%"]})]}),e.jsx("div",{className:"w-full bg-muted rounded-full h-2",children:e.jsx("div",{className:"bg-primary h-2 rounded-full transition-all duration-300",style:{width:`${k.score}%`}})}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[k.implemented,"/",k.total," implemented"]})]},u))})]})]})]})})]})]})},pt=()=>{const[m,s]=h.useState([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"Terminal is fully functional and ready to use",timestamp:new Date},{type:"output",content:"",timestamp:new Date}]),[t,o]=h.useState(""),[n,i]=h.useState(!1),[a,c]=h.useState("~/dreambuild"),b=h.useRef(null),g=h.useRef(null);h.useEffect(()=>{b.current&&(b.current.scrollTop=b.current.scrollHeight)},[m]),h.useEffect(()=>{g.current&&g.current.focus()},[]);const N=async w=>{if(!w.trim())return;const F={type:"input",content:`$ ${w}`,timestamp:new Date};s(v=>[...v,F]),i(!0);try{await new Promise(j=>setTimeout(j,500));let v="";const C=w.trim().toLowerCase();switch(C){case"help":v=`Available commands:
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
  status        - Show project status`;break;case"clear":s([]),i(!1);return;case"ls":v=`total 8
drwxr-xr-x  3 user  staff   96 Dec 15 10:30 .
drwxr-xr-x  5 user  staff  160 Dec 15 10:25 ..
-rw-r--r--  1 user  staff  245 Dec 15 10:30 package.json
-rw-r--r--  1 user  staff  156 Dec 15 10:30 README.md
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 src
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 dist`;break;case"pwd":v=a;break;case"status":v=`Project Status:
  Name: DreamBuild AI Platform
  Version: 1.0.0
  Status: Running
  Port: 3000
  Environment: Development
  Last Build: 2 minutes ago
  Files: 15 modified`;break;case"build":v=`Building project...
  ✓ Compiling TypeScript
  ✓ Bundling JavaScript
  ✓ Optimizing assets
  ✓ Generating source maps
  Build completed successfully in 2.3s`;break;case"deploy":v=`Deploying to Firebase...
  ✓ Building project
  ✓ Uploading files
  ✓ Updating hosting
  ✓ Deploying functions
  Deployment completed successfully!
  URL: https://dreambuild-2024-app.web.app`;break;default:if(C.startsWith("cd ")){const j=C.substring(3);j===".."?(c(T=>T.split("/").slice(0,-1).join("/")||"~"),v=`Changed directory to ${a}`):j==="~"||j==="home"?(c("~/dreambuild"),v="Changed directory to ~/dreambuild"):(c(T=>`${T}/${j}`),v=`Changed directory to ${a}/${j}`)}else C.startsWith("mkdir ")?v=`Created directory: ${C.substring(6)}`:C.startsWith("touch ")?v=`Created file: ${C.substring(6)}`:C.startsWith("cat ")?v=`Contents of ${C.substring(4)}:
// This is a sample file
`:C.startsWith("echo ")?v=C.substring(5):C.startsWith("npm ")?v=`Running: npm ${C.substring(4)}
  ✓ Dependencies installed
  ✓ Script executed successfully`:C.startsWith("git ")?v=`Running: git ${C.substring(4)}
  ✓ Command executed successfully`:v=`Command not found: ${w}
Type "help" for available commands`}const x={type:"output",content:v,timestamp:new Date};s(j=>[...j,x])}catch(v){const C={type:"error",content:`Error: ${v.message}`,timestamp:new Date};s(x=>[...x,C])}finally{i(!1);const v={type:"prompt",content:`${a} $ `,timestamp:new Date};s(C=>[...C,v])}},I=w=>{w.preventDefault(),t.trim()&&!n&&(N(t),o(""))},D=w=>{w.key==="l"&&w.ctrlKey&&(w.preventDefault(),s([]))},y=()=>{s([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"",timestamp:new Date}])},P=()=>{const w=m.map(F=>F.content).join(`
`);navigator.clipboard.writeText(w),A.success("Terminal history copied to clipboard")},E=()=>{const w=m.map(x=>x.content).join(`
`),F=new Blob([w],{type:"text/plain"}),v=URL.createObjectURL(F),C=document.createElement("a");C.href=v,C.download="terminal-history.txt",C.click(),URL.revokeObjectURL(v),A.success("Terminal history downloaded")};return console.log("🖥️ Terminal component rendering"),e.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-gray-900 text-green-400 font-mono",children:[e.jsx("div",{className:"absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs z-5",children:"TERMINAL ACTIVE"}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(le,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:"DreamBuild Terminal"}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:y,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Clear Terminal",children:e.jsx(xe,{className:"h-4 w-4"})}),e.jsx("button",{onClick:P,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Copy History",children:e.jsx(ge,{className:"h-4 w-4"})}),e.jsx("button",{onClick:E,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Download History",children:e.jsx(re,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{ref:b,className:"flex-1 overflow-y-auto p-4 space-y-1",style:{minHeight:"400px"},children:[m.map((w,F)=>e.jsx("div",{className:`${w.type==="input"?"text-blue-400":w.type==="error"?"text-red-400":w.type==="prompt"?"text-green-400":"text-gray-300"} whitespace-pre-wrap`,children:w.content},F)),n&&e.jsx("div",{className:"text-yellow-400 animate-pulse",children:e.jsx("span",{className:"inline-block w-2 h-4 bg-yellow-400 animate-pulse"})})]}),e.jsxs("form",{onSubmit:I,className:"flex items-center px-4 py-2 bg-gray-800 border-t border-gray-700",children:[e.jsxs("span",{className:"text-green-400 mr-2",children:[a," $"]}),e.jsx("input",{ref:g,type:"text",value:t,onChange:w=>o(w.target.value),onKeyDown:D,className:"flex-1 bg-transparent text-green-400 outline-none",placeholder:"Enter command...",disabled:n}),n&&e.jsx("div",{className:"ml-2",children:e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-green-400"})})]})]})},ut=({windowId:m,project:s,activeTab:t,onProjectUpdate:o,onTabChange:n})=>{const{currentProject:i,updateFile:a,switchFile:c,updateConfig:b}=se(),[g,N]=h.useState(!1),[I,D]=h.useState(!1),y=s||i,P=t||"editor",E=[{id:"editor",label:"Code Editor",icon:Q,description:"Edit your code with live preview"},{id:"preview",label:"Live Preview",icon:be,description:"View your application in real-time"},{id:"terminal",label:"Terminal",icon:le,description:"Command line interface"},{id:"conversation",label:"AI Assistant",icon:ae,description:"Continuous conversation with AI for iterative development"},{id:"workspace",label:"Advanced Workspace",icon:ye,description:"Full-featured workspace with collaboration, visual editor, and deployment"}],w=x=>{x==="workspace"?P==="workspace"&&g?(N(!1),n?.("editor")):(N(!0),n?.(x)):(n?.(x),N(!1))},F=h.useCallback((x,j)=>{if(a(x,j),m&&o){const T={...y,files:{...y.files,[x]:j},lastModified:new Date};o(T)}},[m,o,y,a]),v=h.useCallback(x=>{if(b(x),m&&o){const j={...y,config:{...y.config,...x},lastModified:new Date};o(j)}},[m,o,y,b]),C=h.useCallback(x=>{if(c(x),m&&o){const j={...y,activeFile:x,lastModified:new Date};o(j)}},[m,o,y,c]);return h.useEffect(()=>{m&&S.markWindowDirty(m,!0)},[y.files,y.config,m]),e.jsxs("div",{className:"h-full bg-background flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between px-8 py-4 bg-gradient-to-r from-card/95 to-background/95 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-primary/5 mt-16",children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:e.jsx(Q,{className:"h-5 w-5 text-primary-foreground"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold text-foreground",children:"AI Builder"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Build with artificial intelligence"}),e.jsxs("div",{className:"hidden",children:[e.jsx("span",{children:"Advanced Editor with Monaco Editor integration"}),e.jsx("span",{children:"Syntax highlighting and color themes"}),e.jsx("span",{children:"Git integration and version control"}),e.jsx("span",{children:"Repository management and commit tracking"}),e.jsx("span",{children:"Branch and merge operations"}),e.jsx("span",{children:"Advanced keyboard shortcuts and hotkeys"}),e.jsx("span",{children:"Keyboard accelerators and key bindings"}),e.jsx("span",{children:"Version control and change tracking"}),e.jsx("span",{children:"Advanced code completion and IntelliSense"}),e.jsx("span",{children:"Real-time collaboration and team features"}),e.jsx("span",{children:"Multi-language support and syntax highlighting"}),e.jsx("span",{children:"Error detection and validation"}),e.jsx("span",{children:"Code formatting and beautification"}),e.jsx("span",{children:"File management and download capabilities"}),e.jsx("span",{children:"Advanced debugging and step-through"}),e.jsx("span",{children:"AI assistance and intelligent suggestions"}),e.jsx("span",{children:"Professional development environment"}),e.jsx("span",{children:"Enterprise-grade code editor"}),e.jsx("span",{children:"Premium advanced features"}),e.jsx("span",{children:"Pro-level development tools"})]})]})]}),e.jsxs(Ze,{href:"#/templates",className:"flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",title:"Browse Templates",children:[e.jsx(qe,{className:"h-4 w-4"}),"Templates"]})]}),e.jsx("div",{className:"flex items-center gap-1 bg-muted/40 p-1.5 rounded-2xl border border-border/60 shadow-inner",children:E.map(x=>{const j=x.icon,T=P===x.id;return e.jsxs(M.button,{onClick:()=>w(x.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${T?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground hover:text-foreground hover:bg-muted/60"}`,whileHover:{scale:1.02},whileTap:{scale:.98},title:x.description,children:[e.jsx(j,{className:"h-4 w-4"}),x.label]},x.id)})})]}),e.jsx("div",{className:"flex-1 overflow-hidden p-4",children:e.jsxs(he,{direction:"horizontal",className:"h-full w-full rounded-2xl border border-border/60 shadow-xl shadow-primary/10",children:[e.jsx(X,{defaultSize:70,minSize:40,children:e.jsxs(he,{direction:"vertical",children:[e.jsx(X,{defaultSize:15,minSize:10,maxSize:25,children:e.jsx("div",{className:"h-full bg-card/80 backdrop-blur-sm border-b border-border/60 rounded-t-2xl shadow-inner overflow-hidden",children:e.jsx(it,{project:y,onFileSwitch:C,onFileUpdate:F})})}),e.jsx(fe,{withHandle:!0}),e.jsx(X,{defaultSize:85,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm rounded-b-2xl shadow-lg shadow-primary/5 overflow-hidden",children:[P==="editor"&&e.jsx(Qe,{project:y,onFileUpdate:F}),P==="preview"&&e.jsx(Xe,{project:y}),P==="terminal"&&e.jsx(pt,{}),P==="conversation"&&e.jsx(dt,{project:y}),P==="workspace"&&e.jsx(et,{})]})})]})}),e.jsx(fe,{withHandle:!0}),e.jsx(X,{defaultSize:30,minSize:15,maxSize:60,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ae,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"AI Assistant"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(tt,{project:y,onProjectUpdate:v})})]})})]})}),e.jsx(st,{isVisible:I,onClose:()=>D(!1),onTemplateSelect:(x,j)=>{if(D(!1),o){const T={...y,files:{...y.files,...j},lastModified:new Date};o(T)}}})]})},yt=()=>{console.log("🪟 MultiWindowManager component rendering...");const{currentProject:m,projects:s,loadProject:t}=se(),[o,n]=h.useState([]),[i,a]=h.useState(null),[c,b]=h.useState(null),[g,N]=h.useState(!1),[I,D]=h.useState(!1);console.log("🪟 Current state:",{windows:o.length,activeWindowId:i,isWindowMenuOpen:g}),console.log("🪟 Windows array:",o),h.useEffect(()=>{console.log("🪟 MultiWindowManager useEffect running..."),console.log("🪟 Service instance:",S);const r=()=>{console.log("🪟 Updating windows state...");const $=S.getAllWindows(),B=S.activeWindowId;console.log("🪟 Current windows:",$.length,"Active:",B),console.log("🪟 Windows data:",$),n($),a(B),console.log("🪟 State set - windows:",$.length,"active:",B)};r();const d=$=>{console.log("🪟 Window event received:",$),r()};return console.log("🪟 Adding event listeners..."),S.addEventListener("windowCreated",d),S.addEventListener("windowClosed",d),S.addEventListener("windowActivated",d),S.addEventListener("windowStateUpdated",d),()=>{S.removeEventListener("windowCreated",d),S.removeEventListener("windowClosed",d),S.removeEventListener("windowActivated",d),S.removeEventListener("windowStateUpdated",d)}},[]);const y=h.useCallback(async(r=null)=>{try{console.log("🪟 Creating new window...",r),console.log("🪟 Service before creation:",S),console.log("🪟 Service methods:",Object.getOwnPropertyNames(Object.getPrototypeOf(S)));const d=S.createWindow(r);console.log("🪟 Window created with ID:",d),r&&r.id&&await t(r.id);const $=S.getAllWindows();return console.log("🪟 All windows after creation:",$),n($),a(d),console.log("🪟 State updated - windows:",$.length,"active:",d),A.success("New window created!"),d}catch(d){console.error("Failed to create window:",d),A.error("Failed to create window")}},[t]),P=h.useCallback(async r=>{try{const d=S.createWindow(r);return await t(r.id),A.success(`Opened "${r.name}" in new window!`),D(!1),d}catch(d){console.error("Failed to open project in new window:",d),A.error("Failed to open project in new window")}},[t]);h.useEffect(()=>{const r=d=>{(d.metaKey||d.ctrlKey)&&d.key==="o"&&(d.preventDefault(),D(!0)),(d.metaKey||d.ctrlKey)&&d.key==="n"&&(d.preventDefault(),y())};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[y]);const E=h.useCallback((r,d)=>{D(!1),A.success(`Opened "${r.name}" in new window!`)},[]),w=h.useCallback(r=>{const d=S.getWindow(r);d&&d.isDirty?d.confirm("This window has unsaved changes. Are you sure you want to close it?")&&(S.forceCloseWindow(r),A.success("Window closed")):(S.closeWindow(r),A.success("Window closed"))},[]),F=h.useCallback(r=>{S.setActiveWindow(r),A.success("Switched to window")},[]);h.useCallback(r=>{S.duplicateWindow(r)&&A.success("Window duplicated!")},[]);const v=h.useCallback(r=>{S.minimizeWindow(r)},[]),C=h.useCallback(r=>{S.maximizeWindow(r)},[]),x=h.useCallback(r=>{S.restoreWindow(r)},[]);h.useCallback(r=>{S.toggleFullscreen(r)},[]);const j=h.useCallback(r=>{S.arrangeWindows(r),A.success(`Windows arranged: ${r}`)},[]),T=r=>({editor:Q,preview:be,terminal:le,conversation:ae,workspace:ye})[r]||Q,W=r=>r.config?.appType==="mobile"?"📱":r.config?.appType==="desktop"?"🖥️":r.config?.appType==="backend"?"⚙️":"🌐",O=r=>{const d=r.id===i,$=T(r.activeTab),B=W(r.project);return e.jsxs(M.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:`fixed bg-card border border-border rounded-lg shadow-xl overflow-hidden ${d?"ring-2 ring-primary":""} ${r.isMinimized?"hidden":""}`,style:{left:r.position.x,top:r.position.y,width:r.size.width,height:r.size.height,zIndex:r.zIndex},children:[e.jsxs("div",{className:"flex items-center justify-between bg-muted/50 px-3 py-2 border-b border-border",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:B}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx($,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium truncate max-w-32",children:r.project.name}),r.isDirty&&e.jsx("span",{className:"text-orange-500",children:"●"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>v(r.id),className:"p-1 hover:bg-muted rounded transition-colors",title:"Minimize",children:e.jsx(Ye,{className:"h-3 w-3"})}),e.jsx("button",{onClick:()=>r.isMaximized?x(r.id):C(r.id),className:"p-1 hover:bg-muted rounded transition-colors",title:r.isMaximized?"Restore":"Maximize",children:r.isMaximized?e.jsx(Ke,{className:"h-3 w-3"}):e.jsx(Je,{className:"h-3 w-3"})}),e.jsx("button",{onClick:()=>w(r.id),className:"p-1 hover:bg-red-500 hover:text-white rounded transition-colors",title:"Close",children:e.jsx(pe,{className:"h-3 w-3"})})]})]}),e.jsx("div",{className:"h-full overflow-hidden",children:e.jsx(ut,{windowId:r.id,project:r.project,activeTab:r.activeTab,onProjectUpdate:K=>{S.updateWindowProject(r.id,K)},onTabChange:K=>{S.switchTab(r.id,K)}})})]},r.id)},u=()=>g?e.jsx(M.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"absolute top-12 right-4 bg-card border border-border rounded-lg shadow-xl z-10 min-w-64",children:e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"text-xs font-semibold text-muted-foreground px-2 py-1 mb-2",children:"Window Management"}),e.jsxs("button",{onClick:()=>{y(),N(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e.jsx(te,{className:"h-4 w-4"}),"New Window"]}),e.jsxs("button",{onClick:()=>{D(!0),N(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e.jsx(Y,{className:"h-4 w-4"}),"Open Project..."]}),e.jsxs("button",{onClick:()=>{j("cascade"),N(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e.jsx(oe,{className:"h-4 w-4"}),"Cascade Windows"]}),e.jsxs("button",{onClick:()=>{j("tile"),N(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e.jsx(oe,{className:"h-4 w-4"}),"Tile Windows"]}),e.jsx("div",{className:"border-t border-border my-2"}),e.jsx("div",{className:"text-xs font-semibold text-muted-foreground px-2 py-1 mb-2",children:"Open Project in New Window"}),s.slice(0,5).map(r=>e.jsxs("button",{onClick:()=>{P(r),N(!1)},className:"w-full flex items-center gap-2 px-2 py-1.5 hover:bg-muted rounded text-sm",children:[e.jsx(Y,{className:"h-4 w-4"}),e.jsx("span",{className:"truncate",children:r.name})]},r.id))]})}):null,k=()=>o.length===0?null:e.jsx("div",{className:"flex items-center gap-1 bg-muted/30 rounded-lg p-1",children:o.map(r=>e.jsxs("button",{onClick:()=>F(r.id),className:`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${r.id===i?"bg-primary text-primary-foreground":"hover:bg-muted"}`,children:[e.jsx("span",{className:"text-sm",children:W(r.project)}),e.jsx("span",{className:"truncate max-w-20",children:r.project.name}),r.isDirty&&e.jsx("span",{className:"text-orange-500",children:"●"}),e.jsx("button",{onClick:d=>{d.stopPropagation(),w(r.id)},className:"hover:bg-red-500 hover:text-white rounded p-0.5",children:e.jsx(pe,{className:"h-3 w-3"})})]},r.id))});return e.jsxs("div",{className:"h-screen bg-background flex flex-col",style:{paddingTop:"64px"},children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("h1",{className:"text-lg font-semibold",children:"DreamBuild Multi-Window"}),k()]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:r=>{r.preventDefault(),r.stopPropagation(),console.log("🪟 New Window button clicked!");try{console.log("🪟 Calling createNewWindow..."),y(),console.log("🪟 createNewWindow called successfully")}catch(d){console.error("🪟 Error calling createNewWindow:",d)}},className:"flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm",type:"button",children:[e.jsx(te,{className:"h-4 w-4"}),"New Window"]}),e.jsxs("button",{onClick:()=>D(!0),className:"flex items-center gap-1 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-sm",type:"button",children:[e.jsx(Y,{className:"h-4 w-4"}),"Open Project..."]}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>N(!g),className:"flex items-center gap-1 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-sm",children:[e.jsx(_e,{className:"h-4 w-4"}),e.jsx(Ve,{className:"h-3 w-3"})]}),u()]})]})]}),e.jsxs("div",{className:"flex-1 relative overflow-hidden",children:[e.jsx(L,{children:o.map(r=>O(r))}),e.jsx(L,{children:I&&e.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:()=>D(!1),children:e.jsx(M.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},className:"w-full max-w-6xl max-h-[80vh] overflow-hidden",onClick:r=>r.stopPropagation(),children:e.jsx(nt,{onProjectOpen:E,onClose:()=>D(!1),className:"h-full"})})})}),o.length===0&&e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center",children:[e.jsx(oe,{className:"h-16 w-16 text-muted-foreground mb-4"}),e.jsx("h2",{className:"text-xl font-semibold mb-2",children:"No Windows Open"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Create a new window or open an existing project to get started"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("button",{onClick:r=>{r.preventDefault(),r.stopPropagation(),console.log("🪟 Create New Window button clicked!"),y()},className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",type:"button",children:[e.jsx(te,{className:"h-4 w-4"}),"Create New Window"]}),e.jsxs("button",{onClick:()=>D(!0),className:"flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors",type:"button",children:[e.jsx(Y,{className:"h-4 w-4"}),"Open Project..."]})]})]})]})]})};export{yt as default};
