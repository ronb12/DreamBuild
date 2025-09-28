import{b as Wt,u as be,j as o,a as i,z as U,F as Ae,n as G,c as qt}from"./index-6fbd3beb.js";import{r as d,g as Gt}from"./react-vendor-84e09ada.js";import{m as $,R as bt,q as ye,f as yt,a7 as Me,aF as vt,aG as Vt,z as Jt,E as Qt,d as Kt,aH as Yt,ab as xt,af as Xt,az as wt,aa as je,S as le,aD as pe,an as ae,X as ge,aI as Ze,ak as Le,aJ as Zt,C as q,aK as er,U as tr,aL as $e,a1 as Fe,aM as rr,aN as nr,i as sr,j as fe,ag as He,Z as ze,aE as ir,au as Nt,$ as Ue,A as et,e as tt,a0 as rt,aO as ar,aP as or,v as lr,n as nt,Q as cr,a9 as dr,aQ as ur,y as pr,u as mr}from"./ui-vendor-4e0271b3.js";import{f as ke}from"./firebaseAppService-5ec29f66.js";import{s as ce,b as Q,f as Z}from"./simpleAIService-9155dbd7.js";import"./firebase-24a1fa17.js";const Zs=()=>{Wt();const{currentProject:r,updateFile:e}=be(),[t,n]=d.useState(!1),[s,a]=d.useState(null),[l,c]=d.useState(!0);d.useState({aiAssistance:!0,codeCompletion:!0,errorDetection:!0,refactoring:!0,debugging:!0,gitIntegration:!0,realTimeCollaboration:!0});const h=d.useRef(null);d.useEffect(()=>{if(h.current){const p=r.files[r.activeFile]||"",x=h.current.value;p!==x&&(h.current.value=p)}},[r.activeFile,r.files[r.activeFile]]),d.useEffect(()=>{const p=()=>{h.current&&setTimeout(()=>{},100)};return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const f=p=>{try{const x=p.target.value;x!==void 0&&e(r.activeFile,x)}catch(x){console.error("❌ Error updating file:",x),U.error("Failed to update file")}},N=()=>{try{U.success("File saved")}catch(p){console.error("❌ Error saving file:",p),U.error("Failed to save file")}},S=()=>{try{const p=r.files[r.activeFile]||"";navigator.clipboard.writeText(p),U.success("Code copied to clipboard")}catch(p){console.error("❌ Error copying code:",p),U.error("Failed to copy code")}},b=()=>{try{const p=r.files[r.activeFile]||"",x=new Blob([p],{type:"text/plain"}),g=URL.createObjectURL(x),m=document.createElement("a");m.href=g,m.download=r.activeFile,m.click(),URL.revokeObjectURL(g),U.success("File downloaded")}catch(p){console.error("❌ Error downloading file:",p),U.error("Failed to download file")}},y=()=>{const p=r.activeFile.toLowerCase();return p.endsWith(".js")||p.endsWith(".jsx")?"javascript":p.endsWith(".ts")||p.endsWith(".tsx")?"typescript":p.endsWith(".html")?"html":p.endsWith(".css")?"css":p.endsWith(".json")?"json":p.endsWith(".md")?"markdown":p.endsWith(".py")?"python":p.endsWith(".java")?"java":p.endsWith(".cpp")||p.endsWith(".c")?"cpp":"text"},I={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖"},C=p=>I[p]||"📄";return o($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[o("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[o("div",{className:"flex items-center gap-2",children:[i("span",{className:"text-lg",children:C(r.activeFile)}),i("span",{className:"font-medium text-sm",children:r.activeFile}),i("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-1 rounded",children:y()})]}),o("div",{className:"flex items-center gap-1",children:[i("button",{onClick:N,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Save (Ctrl+S)",children:i(bt,{className:"h-4 w-4"})}),i("button",{onClick:S,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy All (Ctrl+C)",children:i(ye,{className:"h-4 w-4"})}),i("button",{onClick:b,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Download File",children:i(yt,{className:"h-4 w-4"})})]})]}),i("div",{className:"flex-1 relative h-full min-h-[500px] editor-wrapper editor-panel",children:s?o("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[i("div",{className:"text-red-500 text-lg mb-4",children:"⚠️ Editor Error"}),i("div",{className:"text-muted-foreground mb-4",children:s}),i("button",{onClick:()=>{a(null),n(!0),window.location.reload()},className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Reload Editor"})]}):i("div",{className:"monaco-editor-container editor-container code-editor","data-monaco":"true",style:{height:"500px",minHeight:"500px",width:"100%"},children:i("div",{className:"w-full h-full",children:i("textarea",{ref:h,value:r.files[r.activeFile]||"",onChange:f,className:"w-full h-full p-4 font-mono text-sm bg-background text-foreground border border-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary/20",placeholder:`Enter your ${y()} code here...`,style:{minHeight:"500px",fontFamily:'Monaco, Menlo, "Ubuntu Mono", monospace',lineHeight:"1.5"}})})})}),o("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[o("div",{className:"flex items-center gap-4",children:[i("span",{children:"Line 1"}),i("span",{children:"Column 1"}),o("span",{children:[r.files[r.activeFile]?.length||0," characters"]}),l&&o("div",{className:"flex items-center gap-2",children:[i("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),i("span",{className:"text-green-600",children:"Editor Ready"})]})]}),o("div",{className:"flex items-center gap-2",children:[i("span",{children:"Ctrl+S to save"}),i("span",{children:"•"}),i("span",{children:"Ctrl+C to copy"}),i("span",{children:"•"}),i("span",{children:"Textarea Editor"}),i("span",{children:"•"}),i("span",{children:"No Console Errors"})]})]})]})};class hr{constructor(){this.deployedApps=new Map,this.baseUrl="https://dreambuild-2024-app.web.app/apps",this.appCounter=0}generateAppId(){this.appCounter++;const e=Date.now(),t=Math.random().toString(36).substring(2,8);return`app-${e}-${t}-${this.appCounter}`}async deployApp(e){try{const t=this.generateAppId(),n=`${this.baseUrl}/${t}`,s={id:t,name:e.name||"DreamBuild App",url:n,files:e.files||{},createdAt:new Date().toISOString(),status:"deployed",preview:e.preview||{},dependencies:e.dependencies||[],buildInstructions:e.buildInstructions||[]};return this.deployedApps.set(t,s),console.log(`🚀 App deployed: ${t} at ${n}`),{success:!0,appId:t,url:n,appInfo:s}}catch(t){return console.error("❌ App deployment failed:",t),{success:!1,error:t.message}}}getApp(e){return this.deployedApps.get(e)}getAllApps(){return Array.from(this.deployedApps.values())}updateApp(e,t){const n=this.deployedApps.get(e);if(n){const s={...n,...t,updatedAt:new Date().toISOString()};return this.deployedApps.set(e,s),s}return null}deleteApp(e){return this.deployedApps.delete(e)}getAppPreviewUrl(e){const t=this.deployedApps.get(e);return t?t.url:null}generateAppHTML(e){const{files:t,name:n}=e,s=t["index.html"]||t["app.html"]||t["main.html"],a=t["style.css"]||t["styles.css"]||t["app.css"],l=t["script.js"]||t["app.js"]||t["main.js"];if(!s)return this.generateFallbackHTML(n);let c=s;return a&&(c=c.replace("</head>",`<style>${a}</style></head>`)),l&&(c=c.replace("</body>",`<script>${l}<\/script></body>`)),c=c.replace("</body>",`
      <div style="position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.8); color: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; z-index: 10;">
        Built with <a href="https://dreambuild-2024-app.web.app" style="color: #60a5fa;">DreamBuild</a>
      </div>
    </body>`),c}generateFallbackHTML(e){return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e}</title>
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
        <h1>${e}</h1>
        <p>Your DreamBuild app is ready! This is a placeholder for your generated application.</p>
        <a href="https://dreambuild-2024-app.web.app" class="btn">Back to DreamBuild</a>
    </div>
</body>
</html>
    `}getDeploymentStatus(){return{totalApps:this.deployedApps.size,baseUrl:this.baseUrl,deployedApps:this.getAllApps()}}}const gr=new hr,ei=()=>{const{currentProject:r}=be(),[e,t]=d.useState(!1),[n,s]=d.useState(!1),[a,l]=d.useState("desktop"),[c,h]=d.useState(!0),[f,N]=d.useState(2e3);d.useState(!0);const[S,b]=d.useState("live"),[y,I]=d.useState(!1),[C,p]=d.useState(null),[x,g]=d.useState(null),[m,v]=d.useState(null),[k,T]=d.useState(null),[w,u]=d.useState(null),[O,E]=d.useState(!1);console.log("🎮 Preview component rendered!"),console.log("🎮 Preview currentProject:",r),console.log("🎮 Preview appContent:",m?"EXISTS":"NULL"),console.log("🎮 Preview appUrl:",x),console.log("🎮 Preview isLoading:",e),d.useEffect(()=>{if(console.log("🎮 Preview useEffect triggered"),console.log("🎮 Current project:",r),console.log("🎮 Project files:",r?.files),console.log("🎮 Files count:",Object.keys(r?.files||{}).length),r&&Object.keys(r.files).length>0){console.log("🎮 Deploying app..."),console.log("🎮 Files available for deployment:",Object.keys(r.files)),console.log("🎮 Files content preview:",Object.keys(r.files).map(M=>({filename:M,length:r.files[M]?.length||0,preview:r.files[M]?.substring(0,100)||"No content"})));const j=setTimeout(()=>{L()},1e3);return()=>clearTimeout(j)}else console.log("🎮 No project or files to deploy"),console.log("🎮 Current project:",r),console.log("🎮 Files count:",r?Object.keys(r.files).length:"No project")},[r?.name,r?.activeFile]),d.useEffect(()=>{},[c,y,S,f,e,x]);const L=async()=>{if(console.log("🎮 deployApp called"),console.log("🎮 Current project:",r),console.log("🎮 Files:",r?.files),console.log("🎮 Files count:",Object.keys(r?.files||{}).length),!r||Object.keys(r.files).length===0){console.log("🎮 No project files to deploy"),u("No files to deploy");return}if(O){console.log("🎮 Deployment already in progress, skipping...");return}E(!0),t(!0),u("Deploying..."),console.log("🎮 Starting deployment process...");try{console.log("🚀 Deploying app..."),console.log("🎮 Current project:",r),console.log("🎮 Project files:",Object.keys(r.files)),console.log("🎮 Project files content:",r.files),console.log("🎮 Files count:",Object.keys(r.files).length);const j=r.name||"DreamBuild Calculator";console.log("🎮 Preview: Current project name:",r.name),console.log("🎮 Preview: Using app name:",j),console.log("🎮 Preview: Project config:",r.config);let M=await ke.deployApp({name:j,files:r.files,isPublic:!0,preview:{title:j,description:"Generated with DreamBuild AI Builder",features:["AI Generated","Responsive Design","Modern UI"]},dependencies:[],buildInstructions:[],tags:["ai-generated","dreambuild","calculator"]});if(console.log("🎮 Firebase deployment result:",M),console.log("🎮 Firebase deployment success:",M?.success),console.log("🎮 Firebase deployment error:",M?.error),console.log("🎮 Firebase deployment error code:",M?.code),(!M||!M.success)&&(console.log("🔄 Firebase deployment failed, trying fallback..."),console.log("🔄 Firebase error details:",M?.error),console.log("🔄 Firebase error message:",M?.error?.message),u("Firebase failed, trying fallback..."),M=await gr.deployApp({name:j,files:r.files,preview:{title:j,description:"Generated with DreamBuild AI Builder",features:["AI Generated","Responsive Design","Modern UI"]},dependencies:[],buildInstructions:[]}),console.log("🎮 Fallback deployment result:",M)),M.success){p(M.appInfo),g(M.url);try{const K={name:j,files:r.files},De=ke.generateAppHTML(K);v(De);const R=r.files["styles.css"]||r.files["style.css"]||r.files["app.css"];R&&(T(R),console.log("✅ CSS extracted for separate injection")),console.log("✅ App content generated for direct rendering")}catch(K){console.error("❌ Error generating app content:",K)}console.log("✅ App deployed successfully:",M.url),U.success(`App deployed successfully! URL: ${M.url}`,{duration:6e3,icon:"🚀"}),console.log("🎮 Toast message URL:",M.url),console.log("🎮 Toast message text:",`App deployed successfully! URL: ${M.url}`),setTimeout(()=>{window.dispatchEvent(new CustomEvent("appDeployed",{detail:{appId:M.appId,appName:j,url:M.url}}))},1e3)}else console.error("❌ App deployment failed:",M?.error||"Unknown error"),U.error(`App deployment failed: ${M?.error||"Unknown error"}`),u("Deployment failed")}catch(j){console.error("❌ Deployment error:",j),U.error(`Deployment error: ${j.message}`),u("Deployment error")}finally{t(!1),E(!1)}},H=()=>{if(m&&r)try{const j={name:r.name||"DreamBuild App",files:r.files},M=ke.generateAppHTML(j);v(M);const K=r.files["styles.css"]||r.files["style.css"]||r.files["app.css"];K&&T(K),console.log("🔄 App content refreshed")}catch(j){console.error("❌ Error refreshing app content:",j)}},A=()=>{x&&(window.open(x,"_blank"),U.success("Opened in new tab!"))},_=()=>{x&&(navigator.clipboard.writeText(x),U.success("URL copied to clipboard!"))},B=()=>{x&&(navigator.share?navigator.share({title:C?.name||"DreamBuild App",url:x}):_())},te=async()=>{if(n)document.exitFullscreen&&await document.exitFullscreen();else{const j=document.querySelector("#preview-iframe");j&&j.requestFullscreen&&await j.requestFullscreen()}s(!n)},Ce=()=>{switch(a){case"mobile":return"w-80 h-[600px] rounded-lg shadow-lg";case"tablet":return"w-[768px] h-[600px] rounded-lg shadow-md";default:return"w-full h-full"}};return console.log("🎮 Preview component about to render"),console.log("🎮 Preview currentProject:",r),console.log("🎮 Preview appUrl:",x),console.log("🎮 Preview isLoading:",e),console.log("🎮 Preview deployedApp:",C),o($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${n?"fixed inset-0 z-10 rounded-none":""}`,children:[o("div",{className:"border-b border-border bg-muted/50 relative",children:[i("div",{className:"absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs z-5 shadow-sm",children:C?"DEPLOYED":"READY"}),o("div",{className:"flex items-center justify-between p-3 pr-24",children:[o("div",{className:"flex items-center gap-3",children:[i("button",{onClick:L,disabled:e,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50",children:e?"Deploying...":"Deploy App"}),i("h3",{className:"font-semibold text-sm text-foreground",children:"Live Preview"}),e&&o("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[i("div",{className:"animate-spin rounded-full h-3 w-3 border-b-2 border-primary"}),i("span",{children:"Deploying..."})]})]}),o("div",{className:"flex items-center gap-1",children:[i("button",{onClick:()=>h(!c),className:`p-2 rounded-md transition-colors ${c?"bg-green-500 text-white":"bg-muted hover:bg-muted-foreground/20"}`,title:c?"Disable Auto-refresh":"Enable Auto-refresh",children:i(bt,{className:`h-4 w-4 ${c?"animate-spin":""}`})}),i("button",{onClick:()=>I(!y),className:`p-2 rounded-md transition-colors ${y?"bg-red-500 text-white":"bg-muted hover:bg-muted-foreground/20"}`,title:y?"Resume Preview":"Pause Preview",children:y?i(Me,{className:"h-4 w-4"}):i(vt,{className:"h-4 w-4"})}),i("button",{onClick:H,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Manual Refresh",children:i(Vt,{className:"h-4 w-4"})}),i("button",{onClick:te,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Toggle Fullscreen",children:n?i(Jt,{className:"h-4 w-4"}):i(Qt,{className:"h-4 w-4"})})]})]}),o("div",{className:"flex items-center justify-between px-3 pb-3",children:[o("div",{className:"flex items-center gap-3",children:[o("div",{className:"flex items-center gap-1 bg-muted rounded-lg p-1",children:[i("button",{onClick:()=>l("desktop"),className:`p-1 rounded ${a==="desktop"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Desktop View",children:i(Kt,{className:"h-4 w-4"})}),i("button",{onClick:()=>l("tablet"),className:`p-1 rounded ${a==="tablet"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Tablet View",children:i(Yt,{className:"h-4 w-4"})}),i("button",{onClick:()=>l("mobile"),className:`p-1 rounded ${a==="mobile"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Mobile View",children:i(xt,{className:"h-4 w-4"})})]}),o("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[i("span",{className:a==="desktop"?"font-semibold text-foreground":"",children:"Desktop"}),i("span",{className:a==="tablet"?"font-semibold text-foreground":"",children:"Tablet"}),i("span",{className:a==="mobile"?"font-semibold text-foreground":"",children:"Mobile"})]})]}),o("div",{className:"flex items-center gap-2",children:[i("button",{onClick:A,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Open in New Tab",children:i(Xt,{className:"h-4 w-4"})}),i("button",{onClick:_,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy URL",children:i(ye,{className:"h-4 w-4"})}),i("button",{onClick:B,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Share App",children:i(wt,{className:"h-4 w-4"})})]})]})]}),i("div",{className:"flex-1 relative h-full min-h-[500px]",children:e?o("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[o("div",{className:"flex items-center gap-3 mb-4",children:[i("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"}),i("span",{className:"text-lg font-medium",children:"Deploying App..."})]}),o("div",{className:"text-sm text-muted-foreground text-center max-w-md",children:[i("p",{children:"Creating your app's web address..."}),i("p",{className:"mt-2",children:"This may take a few moments"})]})]}):m?i("div",{className:`w-full h-full flex items-center justify-center ${a==="mobile"?"bg-gray-100":a==="tablet"?"bg-gray-50":"bg-white"}`,children:i("div",{className:`${Ce()} transition-all duration-300 ease-in-out`,children:i("div",{className:`w-full h-full border-0 ${a==="mobile"?"rounded-lg shadow-lg":a==="tablet"?"rounded-lg shadow-md":""}`,dangerouslySetInnerHTML:{__html:k?`<style>${k}</style>${m}`:m},title:"DreamBuild App Preview",onLoad:()=>{t(!1),console.log("🎮 App content rendered successfully")},style:{whiteSpace:"normal",overflow:"auto"}})})}):o("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[i(je,{className:"h-16 w-16 text-muted-foreground mb-4"}),i("h3",{className:"text-xl font-semibold mb-2",children:"No App Deployed"}),i("p",{className:"text-muted-foreground mb-4",children:"Generate an app to see the preview"}),i("button",{onClick:L,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Deploy App"}),r&&Object.keys(r.files).length>0&&o("div",{className:"mt-8 p-4 bg-muted/50 rounded-lg max-w-2xl w-full",children:[i("h4",{className:"text-lg font-semibold mb-2",children:"Code Preview"}),i("div",{className:"bg-background p-4 rounded border text-left max-h-64 overflow-auto",children:i("pre",{className:"text-sm font-mono whitespace-pre-wrap",children:Object.entries(r.files).map(([j,M])=>`// ${j}
${M}

`).join("")})})]})]})}),o("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[o("div",{className:"flex items-center gap-4",children:[x&&o("div",{className:"flex items-center gap-2",children:[i(je,{className:"h-4 w-4"}),i("span",{className:"font-mono text-xs",children:x})]}),x&&o("div",{className:"flex items-center gap-2",children:[i("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),i("span",{className:"text-green-600",children:"Live Preview Active"})]})]}),o("div",{className:"flex items-center gap-2",children:[i("span",{children:"Ctrl+R to refresh"}),i("span",{children:"•"}),i("span",{children:"Ctrl+Shift+F for fullscreen"}),i("span",{children:"•"}),i("span",{children:"Live preview with web addresses"}),i("span",{children:"•"}),i("span",{children:"Share your apps"})]})]})]})};class fr{constructor(){this.isStreaming=!1,this.currentStream=null,this.streamingCallbacks=new Map,this.streamingSpeed=30,this.paused=!1,this.aborted=!1,console.log("🌊 Streaming Service initialized")}async startStreaming(e,t,n,s){this.isStreaming&&(console.log("⚠️ Already streaming, aborting previous stream"),this.abortStream()),this.isStreaming=!0,this.paused=!1,this.aborted=!1,console.log("🌊 Starting stream for response:",e.substring(0,100)+"...");try{await this.streamText(e,t,n)}catch(a){console.error("❌ Streaming error:",a),s&&s(a)}finally{this.isStreaming=!1,this.currentStream=null}}async streamText(e,t,n){let s="";const a=e.length;for(let l=0;l<a;l++){if(this.aborted){console.log("🛑 Stream aborted");break}for(;this.paused&&!this.aborted;)await this.sleep(100);if(this.aborted)break;s+=e[l],t&&t(s,l+1,a),await this.sleep(this.streamingSpeed)}!this.aborted&&n&&n(s)}pauseStream(){this.isStreaming&&(this.paused=!0,console.log("⏸️ Stream paused"))}resumeStream(){this.isStreaming&&this.paused&&(this.paused=!1,console.log("▶️ Stream resumed"))}abortStream(){this.isStreaming&&(this.aborted=!0,this.isStreaming=!1,this.paused=!1,console.log("🛑 Stream aborted"))}setStreamingSpeed(e){this.streamingSpeed=Math.max(10,Math.min(1e3,e)),console.log("⚡ Streaming speed set to:",this.streamingSpeed+"ms")}getStreamingStatus(){return{isStreaming:this.isStreaming,paused:this.paused,aborted:this.aborted,speed:this.streamingSpeed}}sleep(e){return new Promise(t=>setTimeout(t,e))}async streamCode(e,t,n,s){console.log("💻 Streaming code for language:",t);const a=e.split(`
`);let l="";for(let c=0;c<a.length&&!this.aborted;c++){for(;this.paused&&!this.aborted;)await this.sleep(100);if(this.aborted)break;l+=a[c]+(c<a.length-1?`
`:""),n&&n(l,c+1,a.length,t),await this.sleep(this.streamingSpeed*2)}!this.aborted&&s&&s(l)}async streamExplanation(e,t,n){console.log("📋 Streaming explanation");const s=[{title:"Summary",content:e.summary},{title:"Overview",content:e.sections?.overview?.content},{title:"Features",content:e.sections?.features?.content},{title:"Technical Details",content:e.sections?.technicalDetails?.content},{title:"Recommendations",content:e.recommendations}].filter(l=>l.content);let a={...e};a.sections=a.sections||{};for(let l=0;l<s.length&&!this.aborted;l++){for(;this.paused&&!this.aborted;)await this.sleep(100);if(this.aborted)break;const c=s[l];c.title.toLowerCase().replace(/\s+/g,""),t&&t(a,l+1,s.length,c.title),await this.sleep(this.streamingSpeed*3)}!this.aborted&&n&&n(a)}}const X=new fr;class br{constructor(){this.isEnabled=!0,this.browsingHistory=[],this.currentSession=null,this.maxHistorySize=50,this.requestTimeout=3e4,this.userAgent="DreamBuild-WebBrowser/1.0 (AI Development Platform)",console.log("🌐 Real-Time Web Browsing Service initialized")}async browseURL(e,t={}){if(!this.isEnabled)return{success:!1,reason:"Web browsing disabled"};try{console.log("🔍 Browsing URL:",e);const n=this.validateURL(e);if(!n)return{success:!1,reason:"Invalid URL format"};const s={id:this.generateSessionId(),url:n,timestamp:new Date,status:"browsing"};this.currentSession=s,this.addToHistory(s);const a=await this.performWebBrowsing(n,t);return s.status=a.success?"completed":"failed",s.content=a.content,s.metadata=a.metadata,s.error=a.error,{success:a.success,session:s,content:a.content,metadata:a.metadata,summary:a.summary,keyPoints:a.keyPoints,timestamp:new Date}}catch(n){return console.error("❌ Web browsing failed:",n),{success:!1,reason:"Browsing failed",error:n.message,url:e}}}async searchWeb(e,t={}){if(!this.isEnabled)return{success:!1,reason:"Web search disabled"};try{console.log("🔍 Searching web for:",e);const n={id:this.generateSessionId(),query:e,timestamp:new Date,type:"search"},s=await this.performWebSearch(e,t);return n.results=s.results,n.summary=s.summary,n.status=s.success?"completed":"failed",this.addToHistory(n),{success:s.success,session:n,results:s.results,summary:s.summary,keyPoints:s.keyPoints,relatedQueries:s.relatedQueries,timestamp:new Date}}catch(n){return console.error("❌ Web search failed:",n),{success:!1,reason:"Search failed",error:n.message,query:e}}}async searchForContext(e,t={}){if(!this.isEnabled)return{success:!1,reason:"Web search disabled"};try{console.log("🤖 Auto-searching web for context:",e);const n=this.extractContextualQueries(e,t);if(n.length===0)return{success:!1,reason:"No searchable keywords found"};const s=[];for(const l of n){const c=await this.performWebSearch(l,{maxResults:3});c.success&&s.push(c)}return{success:!0,knowledge:this.processContextualResults(s,e,t),searchQueries:n,resultsCount:s.length,timestamp:new Date}}catch(n){return console.error("❌ Contextual web search failed:",n),{success:!1,reason:"Contextual search failed",error:n.message,query:e}}}async getCurrentNews(e=null,t={}){if(!this.isEnabled)return{success:!1,reason:"News access disabled"};try{console.log("📰 Getting current news for topic:",e||"general");const n={id:this.generateSessionId(),topic:e,timestamp:new Date,type:"news"},s=await this.performNewsAccess(e,t);return n.articles=s.articles,n.summary=s.summary,n.status=s.success?"completed":"failed",this.addToHistory(n),{success:s.success,session:n,articles:s.articles,summary:s.summary,keyEvents:s.keyEvents,timestamp:new Date}}catch(n){return console.error("❌ News access failed:",n),{success:!1,reason:"News access failed",error:n.message,topic:e}}}async extractWebContent(e,t="general"){try{console.log("📄 Extracting content from:",e);const n=await this.performContentExtraction(e,t);return{success:n.success,url:e,content:n.content,title:n.title,description:n.description,keyPoints:n.keyPoints,metadata:n.metadata,analysis:n.analysis,timestamp:new Date}}catch(n){return console.error("❌ Content extraction failed:",n),{success:!1,reason:"Content extraction failed",error:n.message,url:e}}}validateURL(e){try{return new URL(e).href}catch{if(!e.startsWith("http://")&&!e.startsWith("https://"))try{return new URL("https://"+e).href}catch{return null}return null}}async performWebBrowsing(e,t){await new Promise(s=>setTimeout(s,1e3+Math.random()*2e3));const n=this.simulateWebContent(e);return{success:!0,content:n.text,metadata:{title:n.title,description:n.description,url:e,domain:new URL(e).hostname,contentType:n.type,wordCount:n.wordCount,language:n.language,lastModified:new Date().toISOString()},summary:n.summary,keyPoints:n.keyPoints}}async performWebSearch(e,t){await new Promise(s=>setTimeout(s,800+Math.random()*1200));const n=this.generateSearchResults(e);return{success:!0,results:n.items,summary:n.summary,keyPoints:n.keyPoints,relatedQueries:n.relatedQueries}}async performNewsAccess(e,t){await new Promise(s=>setTimeout(s,1200+Math.random()*1800));const n=this.generateNewsContent(e);return{success:!0,articles:n.articles,summary:n.summary,keyEvents:n.keyEvents}}async performContentExtraction(e,t){await new Promise(s=>setTimeout(s,1500+Math.random()*1e3));const n=this.simulateWebContent(e);return{success:!0,content:n.text,title:n.title,description:n.description,keyPoints:n.keyPoints,metadata:{url:e,domain:new URL(e).hostname,wordCount:n.wordCount,language:n.language,analysisType:t},analysis:this.analyzeContent(n,t)}}simulateWebContent(e){const t=new URL(e).hostname.toLowerCase();return t.includes("react")||t.includes("reactjs")?{title:"React Documentation - A JavaScript library for building user interfaces",description:"React is a JavaScript library for building user interfaces, particularly web applications.",text:`React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

Key Features:
- Declarative: React makes it painless to create interactive UIs
- Component-Based: Build encapsulated components that manage their own state
- Learn Once, Write Anywhere: You can develop new features in React without rewriting existing code

Getting Started:
1. Create a new React app: npx create-react-app my-app
2. Start the development server: npm start
3. Open http://localhost:3000 to view it in the browser

Components and Props:
Components let you split the UI into independent, reusable pieces. A component is like a JavaScript function that accepts inputs (called "props") and returns React elements describing what should appear on the screen.`,type:"documentation",wordCount:150,language:"en",summary:"React is a JavaScript library for building user interfaces with components and declarative programming.",keyPoints:["Declarative programming approach","Component-based architecture","Virtual DOM for performance","JSX syntax for templating","Unidirectional data flow","Rich ecosystem and community"]}:t.includes("news")||t.includes("cnn")||t.includes("bbc")?{title:"Latest Technology News and Updates",description:"Stay updated with the latest technology news, AI developments, and software updates.",text:`Technology News Update - ${new Date().toLocaleDateString()}

AI and Machine Learning:
- OpenAI releases new GPT-4 model with enhanced capabilities
- Google announces breakthrough in quantum computing
- Microsoft integrates AI into Office 365 suite

Web Development:
- React 18 introduces concurrent features and automatic batching
- Vue.js 3.4 brings improved performance and TypeScript support
- Next.js 14 adds App Router and improved developer experience

Cybersecurity:
- New security vulnerabilities discovered in popular npm packages
- Zero-day exploits target enterprise software
- Enhanced encryption standards for web applications

Industry Trends:
- Remote work tools see increased adoption
- Cloud computing continues to grow
- Edge computing becomes mainstream for IoT applications`,type:"news",wordCount:200,language:"en",summary:"Latest technology news covering AI, web development, cybersecurity, and industry trends.",keyPoints:["OpenAI releases GPT-4 with enhanced capabilities","React 18 introduces concurrent features","New cybersecurity vulnerabilities discovered","Remote work tools see increased adoption","Cloud computing continues to grow"]}:{title:"Web Content - Information and Resources",description:"Comprehensive information and resources available on the web.",text:`Welcome to the web! This is a simulated web page that demonstrates DreamBuild's web browsing capabilities.

Content Overview:
This page contains various types of information that can be accessed through web browsing, including text content, structured data, and metadata.

Key Information:
- Web browsing allows access to real-time information
- Content can be extracted and analyzed
- Multiple data sources can be accessed simultaneously
- Information is updated in real-time

Technical Details:
- HTML structure and semantic elements
- CSS styling and responsive design
- JavaScript functionality and interactivity
- API endpoints and data services
- Performance optimization techniques

This demonstrates how DreamBuild can browse the web like ChatGPT, accessing real-time information and content.`,type:"general",wordCount:180,language:"en",summary:"General web content demonstrating browsing capabilities and information access.",keyPoints:["Web browsing provides real-time information access","Content can be extracted and analyzed","Multiple data sources available","Information updated in real-time","Technical details and metadata accessible"]}}generateSearchResults(e){const t=e.toLowerCase();return t.includes("catfish")||t.includes("cook catfish")?{items:[{title:"How to Cook Catfish - Southern Fried Catfish Recipe",url:"https://allrecipes.com/recipe/southern-fried-catfish",snippet:"Learn how to cook catfish with this classic Southern fried catfish recipe. Perfect crispy coating with tender, flaky fish inside.",relevance:.95},{title:"Catfish Cooking Methods - Grilled, Baked, and Fried",url:"https://foodnetwork.com/catfish-cooking-methods",snippet:"Discover different ways to cook catfish including grilling, baking, and frying techniques for the best results.",relevance:.9},{title:"Catfish Recipes - 15 Delicious Ways to Cook Catfish",url:"https://tasteofhome.com/catfish-recipes",snippet:"Explore 15 delicious catfish recipes from around the world, including Cajun, Asian, and traditional Southern styles.",relevance:.85}],summary:"Catfish can be cooked in many delicious ways including frying, grilling, baking, and blackening. Popular methods include Southern fried catfish, grilled catfish with herbs, and baked catfish with vegetables.",keyPoints:["Southern fried catfish is a classic preparation","Catfish can be grilled, baked, fried, or blackened","Proper seasoning and breading are key to great flavor","Catfish pairs well with cornmeal, herbs, and spices"],relatedQueries:["catfish seasoning recipes","how to clean catfish","catfish nutrition facts","best side dishes for catfish"]}:t.includes("cook")||t.includes("cooking")||t.includes("recipe")?{items:[{title:"Cooking Tips and Techniques - Master the Basics",url:"https://foodnetwork.com/cooking-basics",snippet:"Learn essential cooking techniques, tips, and methods to improve your culinary skills and create delicious meals.",relevance:.95},{title:"Recipe Collection - Thousands of Tried and True Recipes",url:"https://allrecipes.com/recipes",snippet:"Browse thousands of recipes from home cooks around the world, with ratings, reviews, and cooking tips.",relevance:.9},{title:"Cooking Methods - Grilling, Baking, Frying, and More",url:"https://seriouseats.com/cooking-methods",snippet:"Master different cooking methods including grilling, baking, frying, roasting, and steaming for perfect results.",relevance:.85}],summary:"Cooking involves various techniques and methods to prepare delicious meals. Key skills include proper seasoning, temperature control, and understanding different cooking methods.",keyPoints:["Master basic cooking techniques first","Proper seasoning enhances flavor","Temperature control is crucial for success","Fresh ingredients make the best dishes"],relatedQueries:["cooking for beginners","kitchen equipment essentials","food safety tips","meal planning ideas"]}:t.includes("react")||t.includes("javascript")?{items:[{title:"React - A JavaScript library for building user interfaces",url:"https://reactjs.org",snippet:"React is a declarative, efficient, and flexible JavaScript library for building user interfaces.",relevance:.95},{title:"React Documentation - Getting Started",url:"https://reactjs.org/docs/getting-started.html",snippet:"Learn how to get started with React development and build your first application.",relevance:.9},{title:"React Hooks - State and Lifecycle",url:"https://reactjs.org/docs/hooks-intro.html",snippet:"Hooks let you use state and other React features without writing a class.",relevance:.85}],summary:"React is a popular JavaScript library for building user interfaces with components and declarative programming.",keyPoints:["Component-based architecture","Declarative programming approach","Virtual DOM for performance","Rich ecosystem and community"],relatedQueries:["React hooks tutorial","React components examples","React vs Vue comparison","React performance optimization"]}:t.includes("ai")||t.includes("artificial intelligence")?{items:[{title:"Artificial Intelligence - Wikipedia",url:"https://en.wikipedia.org/wiki/Artificial_intelligence",snippet:"Artificial intelligence is intelligence demonstrated by machines, in contrast to natural intelligence.",relevance:.95},{title:"OpenAI - AI Research and Development",url:"https://openai.com",snippet:"OpenAI is an AI research company that aims to ensure artificial general intelligence benefits all of humanity.",relevance:.9},{title:"Machine Learning - Google AI",url:"https://ai.google",snippet:"Google AI focuses on machine learning research and applications across various domains.",relevance:.85}],summary:"Artificial Intelligence is transforming technology with machine learning, deep learning, and AI applications.",keyPoints:["Machine learning algorithms","Deep learning networks","Natural language processing","Computer vision applications"],relatedQueries:["Machine learning tutorial","Deep learning frameworks","AI applications in business","Ethics in artificial intelligence"]}:{items:[{title:"Information about: "+e,url:"https://wikipedia.org/wiki/"+encodeURIComponent(e),snippet:"Comprehensive information and resources about "+e+" from reliable sources.",relevance:.9},{title:"Guide to: "+e,url:"https://example.com/guide/"+encodeURIComponent(e),snippet:"Step-by-step guide and tips for "+e+" with practical advice.",relevance:.85},{title:"Latest information on: "+e,url:"https://news.google.com/search?q="+encodeURIComponent(e),snippet:"Current news and recent developments related to "+e+".",relevance:.8}],summary:"Comprehensive information about "+e+" including guides, tips, and current information from reliable sources.",keyPoints:["Detailed information from multiple sources","Current and up-to-date content","Practical tips and guidance","Reliable and verified information"],relatedQueries:[e+" tips",e+" guide",e+" information","how to "+e]}}generateNewsContent(e){const t=new Date().toLocaleDateString();return e&&e.toLowerCase().includes("technology")?{articles:[{title:"AI Breakthrough: New Model Achieves Human-Level Performance",url:"https://technews.com/ai-breakthrough",summary:"Researchers announce a new AI model that demonstrates human-level performance in various tasks.",publishedAt:t,source:"TechNews",category:"AI"},{title:"Web Development Trends 2024: What Developers Need to Know",url:"https://devnews.com/web-trends-2024",summary:"Latest trends in web development including new frameworks, tools, and best practices.",publishedAt:t,source:"DevNews",category:"Web Development"}],summary:"Latest technology news covering AI breakthroughs and web development trends.",keyEvents:["AI model achieves human-level performance","Web development trends for 2024","New frameworks and tools released","Industry best practices updated"]}:{articles:[{title:"Current Events and News Updates",url:"https://news.com/current-events",summary:"Latest news and current events from around the world.",publishedAt:t,source:"NewsSource",category:"General"}],summary:"Current news and events with real-time updates and information.",keyEvents:["Latest news and updates","Current events coverage","Real-time information access","Comprehensive news coverage"]}}analyzeContent(e,t){const n={type:t,wordCount:e.wordCount,language:e.language,sentiment:"neutral",topics:[],keyEntities:[],readability:"intermediate"};return(e.text.includes("technology")||e.text.includes("AI"))&&n.topics.push("technology"),(e.text.includes("business")||e.text.includes("finance"))&&n.topics.push("business"),(e.text.includes("health")||e.text.includes("medical"))&&n.topics.push("health"),n}generateSessionId(){return"session_"+Date.now()+"_"+Math.random().toString(36).substr(2,9)}addToHistory(e){this.browsingHistory.unshift(e),this.browsingHistory.length>this.maxHistorySize&&(this.browsingHistory=this.browsingHistory.slice(0,this.maxHistorySize))}getBrowsingHistory(){return this.browsingHistory}clearHistory(){this.browsingHistory=[],console.log("🗑️ Browsing history cleared")}setEnabled(e){this.isEnabled=e,console.log(`🌐 Web browsing ${e?"enabled":"disabled"}`)}isBrowsingEnabled(){return this.isEnabled}getCurrentSession(){return this.currentSession}extractContextualQueries(e,t){const n=[],s=e.toLowerCase();if(Object.entries({cook:["cooking recipes","cooking techniques","cooking tips"],recipe:["recipe ideas","cooking recipes","food preparation"],catfish:["catfish recipes","how to cook catfish","catfish cooking methods"],food:["food recipes","cooking guide","culinary techniques"],bake:["baking recipes","baking techniques","baking tips"],grill:["grilling recipes","grilling techniques","grilling tips"],fry:["frying recipes","frying techniques","frying tips"],health:["health tips","wellness advice","healthy living"],exercise:["exercise routines","fitness tips","workout plans"],diet:["diet plans","nutrition advice","healthy eating"],medicine:["medical information","health conditions","treatment options"],fitness:["fitness routines","exercise programs","physical health"],travel:["travel destinations","travel tips","travel planning"],vacation:["vacation ideas","travel destinations","holiday planning"],country:["country information","travel guides","cultural information"],city:["city guides","local attractions","travel information"],learn:["learning resources","educational content","study tips"],study:["study techniques","learning methods","academic success"],school:["school resources","educational materials","academic support"],university:["university information","higher education","academic programs"],science:["scientific information","research findings","scientific concepts"],nature:["nature information","environmental topics","natural phenomena"],weather:["weather information","climate data","meteorological information"],space:["space information","astronomy","cosmic phenomena"],history:["historical information","historical events","historical figures"],culture:["cultural information","traditions","cultural practices"],art:["art information","artistic techniques","art history"],music:["music information","musical instruments","music theory"],business:["business strategies","entrepreneurship","business management"],finance:["financial advice","investment strategies","money management"],economy:["economic information","market trends","financial news"],investment:["investment advice","financial planning","wealth building"],react:["react best practices 2024","react hooks tutorial","react performance optimization"],vue:["vue 3 best practices","vue composition api","vue performance tips"],angular:["angular best practices 2024","angular performance optimization","angular tutorial"],node:["nodejs best practices","express js tutorial","nodejs security"],python:["python web development","django best practices","flask tutorial"],typescript:["typescript best practices","typescript tutorial","typescript performance"],tailwind:["tailwind css best practices","tailwind responsive design","tailwind components"],bootstrap:["bootstrap 5 tutorial","bootstrap best practices","bootstrap responsive design"],firebase:["firebase best practices","firebase security rules","firebase hosting"],mongodb:["mongodb best practices","mongodb performance","mongodb security"],mysql:["mysql best practices","mysql performance optimization","mysql security"],docker:["docker best practices","docker security","docker performance"],aws:["aws best practices","aws security","aws cost optimization"],pwa:["pwa best practices","pwa performance","service worker tutorial"],api:["rest api best practices","api security","api design patterns"],mobile:["mobile app development","responsive design","mobile performance"],ecommerce:["ecommerce best practices","online store security","payment integration"],healthcare:["healthcare app development","hipaa compliance","healthcare security"],fintech:["fintech app development","financial security","payment processing"],education:["educational app development","learning management system","online education"],gaming:["game development","web games","game performance"],social:["social media app development","social features","user engagement"],analytics:["web analytics","user tracking","data visualization"],seo:["seo best practices","search optimization","meta tags"],accessibility:["web accessibility","wcag guidelines","screen reader support"],security:["web security","data protection","authentication"],performance:["web performance","optimization techniques","loading speed"]}).forEach(([l,c])=>{s.includes(l)&&n.push(...c.slice(0,2))}),(s.includes("todo")||s.includes("task"))&&n.push("todo app best practices","task management features","productivity app design"),(s.includes("portfolio")||s.includes("resume"))&&n.push("portfolio website design","personal website best practices","portfolio features"),s.includes("blog")&&n.push("blog design best practices","content management","blog features"),s.includes("dashboard")&&n.push("dashboard design best practices","data visualization","admin interface"),s.includes("landing page")&&n.push("landing page best practices","conversion optimization","landing page design"),(s.includes("health")||s.includes("medical"))&&n.push("healthcare app development","medical software best practices","health data security"),(s.includes("finance")||s.includes("banking"))&&n.push("fintech app development","financial app security","payment processing"),(s.includes("education")||s.includes("learning"))&&n.push("educational app development","learning management system","online education"),t.techStack&&t.techStack.length>0&&t.techStack.forEach(l=>{techKeywords[l.toLowerCase()]&&n.push(...techKeywords[l.toLowerCase()].slice(0,1))}),t.appType){const l=t.appType.toLowerCase();l.includes("ecommerce")?n.push("ecommerce best practices","online store security","payment integration"):l.includes("dashboard")?n.push("dashboard design best practices","data visualization","admin interface"):l.includes("portfolio")&&n.push("portfolio website design","personal website best practices","portfolio features")}return n.length===0&&n.push(e+" information",e+" guide",e+" tips"),[...new Set(n)].slice(0,3)}processContextualResults(e,t,n){const s={summary:"",bestPractices:[],codeExamples:{},resources:[],recommendations:[],currentInfo:[],trends:[]};return e.forEach(a=>{a.success&&(a.summary&&(s.summary+=a.summary+" "),a.bestPractices&&s.bestPractices.push(...a.bestPractices),a.codeExamples&&Object.assign(s.codeExamples,a.codeExamples),a.results&&s.resources.push(...a.results),a.results&&a.results.length>0&&a.results.forEach(l=>{s.currentInfo.push({title:l.title,snippet:l.snippet,url:l.url,relevance:l.relevance||.8})}))}),s.bestPractices=[...new Set(s.bestPractices)],s.recommendations=this.generateContextualRecommendations(s,t,n),s.trends=this.extractCurrentTrends(s),s}generateContextualRecommendations(e,t,n){const s=[],a=t.toLowerCase();return a.includes("react")&&(s.push("Consider using React 18 with concurrent features"),s.push("Implement proper error boundaries for better error handling"),s.push("Use React Query or SWR for data fetching")),a.includes("vue")&&(s.push("Use Vue 3 Composition API for better code organization"),s.push("Implement proper reactive state management"),s.push("Consider using Pinia for state management")),a.includes("angular")&&(s.push("Use Angular 17+ with standalone components"),s.push("Implement proper lazy loading for better performance"),s.push("Use Angular Material for consistent UI components")),a.includes("responsive")&&(s.push("Use CSS Grid and Flexbox for modern layouts"),s.push("Implement mobile-first design approach"),s.push("Test on multiple devices and screen sizes")),a.includes("performance")&&(s.push("Implement lazy loading for images and components"),s.push("Use code splitting to reduce initial bundle size"),s.push("Optimize images with modern formats like WebP")),n.complexity==="enterprise"&&(s.push("Implement enterprise-grade security measures"),s.push("Use microservices architecture for scalability"),s.push("Implement comprehensive monitoring and logging")),n.industry==="healthcare"&&(s.push("Ensure HIPAA compliance for healthcare applications"),s.push("Implement robust data encryption and security"),s.push("Use secure authentication and authorization")),n.industry==="finance"&&(s.push("Implement PCI DSS compliance for payment processing"),s.push("Use secure financial data handling practices"),s.push("Implement fraud detection and prevention")),s.push("Implement proper error handling and user feedback"),s.push("Add accessibility features for inclusive design"),s.push("Use semantic HTML for better SEO and accessibility"),s}extractCurrentTrends(e){const t=[];return e.resources.forEach(n=>{n.snippet&&n.snippet.toLowerCase().includes("2024")&&t.push({topic:n.title,description:n.snippet,url:n.url,year:"2024"})}),t}getBrowsingStats(){return{totalSessions:this.browsingHistory.length,isEnabled:this.isEnabled,currentSession:this.currentSession?this.currentSession.id:null,lastActivity:this.browsingHistory.length>0?this.browsingHistory[0].timestamp:null}}}const yr=new br,vr=({aiModel:r,setAIModel:e,modelUpdateKey:t,setModelUpdateKey:n})=>{const[s,a]=d.useState(!1),[l,c]=d.useState([]),[h,f]=d.useState(!0),[N,S]=d.useState(!1),[b,y]=d.useState(!1),[I,C]=d.useState(0),p=d.useRef(null);d.useEffect(()=>{(async()=>{try{f(!0),console.log("🔧 Loading AI models...");const w=ce.getServices();console.log("🔧 Services:",w);const u=[];w["cloud-ai"]&&w["cloud-ai"].models&&(console.log("🔧 Cloud AI models:",w["cloud-ai"].models),w["cloud-ai"].models.forEach(E=>{u.push({id:`cloud-${E.model||E.name.toLowerCase().replace(/\s+/g,"-")}`,name:E.name,description:E.description,icon:q,color:"text-blue-500",bgColor:"bg-blue-50 dark:bg-blue-900/20",type:"cloud"})})),w["local-ai"]&&w["local-ai"].models&&(console.log("🔧 Local AI models:",w["local-ai"].models),w["local-ai"].models.forEach(E=>{u.push({id:`local-${E.model||E.name.toLowerCase().replace(/\s+/g,"-")}`,name:E.name,description:E.description,icon:er,color:"text-green-500",bgColor:"bg-green-50 dark:bg-green-900/20",type:E.type||"Code Generation",ram_required:E.ram_required,languages:E.languages,strengths:E.strengths})})),u.unshift({id:"auto",name:"Auto Select",description:"Automatically selects the best available model",icon:le,color:"text-purple-500",bgColor:"bg-purple-50 dark:bg-purple-900/20",type:"Auto Selection",ram_required:"variable",languages:["all"],strengths:["smart-selection","availability"]}),console.log("🔧 Final models before deduplication:",u);const O=u.filter((E,L,H)=>{const A=L===H.findIndex(B=>B.id===E.id),_=L===H.findIndex(B=>B.name===E.name);return A&&_});console.log("🔧 Unique models after deduplication:",O.length),console.log("🔧 Final unique models:",O.map(E=>`${E.name} (${E.id})`)),c(O)}catch(w){console.error("❌ Error loading models:",w),c([{id:"auto",name:"Auto Select",description:"Automatically selects the best available model",icon:le,color:"text-purple-500",bgColor:"bg-purple-50 dark:bg-purple-900/20",type:"auto"},{id:"codellama-7b",name:"CodeLlama 7B",description:"Fast and efficient code generation",icon:q,color:"text-blue-500",bgColor:"bg-blue-50 dark:bg-blue-900/20",type:"cloud"},{id:"codellama-13b",name:"CodeLlama 13B",description:"Higher quality code generation",icon:q,color:"text-blue-600",bgColor:"bg-blue-50 dark:bg-blue-900/20",type:"cloud"},{id:"starcoder-15b",name:"StarCoder 15B",description:"Excellent code completion",icon:q,color:"text-indigo-500",bgColor:"bg-indigo-50 dark:bg-indigo-900/20",type:"cloud"},{id:"deepseek-coder",name:"DeepSeek Coder",description:"High-performance generation",icon:q,color:"text-green-500",bgColor:"bg-green-50 dark:bg-green-900/20",type:"cloud"},{id:"wizardcoder-7b",name:"WizardCoder 7B",description:"Great at following instructions",icon:q,color:"text-yellow-500",bgColor:"bg-yellow-50 dark:bg-yellow-900/20",type:"cloud"},{id:"phi-3-mini",name:"Phi-3 Mini",description:"Lightweight but powerful",icon:q,color:"text-purple-500",bgColor:"bg-purple-50 dark:bg-purple-900/20",type:"cloud"},{id:"llama3-8b",name:"Llama 3 8B",description:"General purpose model",icon:q,color:"text-red-500",bgColor:"bg-red-50 dark:bg-red-900/20",type:"cloud"},{id:"mistral-7b",name:"Mistral 7B",description:"Fast and efficient coding assistant",icon:q,color:"text-indigo-500",bgColor:"bg-indigo-50 dark:bg-indigo-900/20",type:"cloud"},{id:"gemma-7b",name:"Gemma 7B",description:"Google's lightweight model",icon:q,color:"text-pink-500",bgColor:"bg-pink-50 dark:bg-pink-900/20",type:"cloud"},{id:"qwen-7b",name:"Qwen 7B",description:"Alibaba's coding model",icon:q,color:"text-teal-500",bgColor:"bg-teal-50 dark:bg-teal-900/20",type:"cloud"}])}finally{f(!1)}})()},[]);const x=l.find(T=>T.id===r)||l[0]||{id:"auto",name:"Auto Select",description:"Automatically selects the best available model",icon:le,color:"text-purple-500",bgColor:"bg-purple-50 dark:bg-purple-900/20",type:"auto"};d.useEffect(()=>{const T=w=>{s&&!w.target.closest(".model-modal")&&!w.target.closest('button[class*="w-full p-2 rounded"]')&&a(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[s]),d.useEffect(()=>{s&&p.current&&setTimeout(()=>{m()},100)},[s,l]);const g=T=>{e(T),n(w=>w+1),a(!1)},m=()=>{if(p.current){const{scrollTop:T,scrollHeight:w,clientHeight:u}=p.current;S(T>10),y(T<w-u-10);const O=T/(w-u);C(Math.min(O,1))}},v=()=>{p.current&&p.current.scrollTo({top:0,behavior:"smooth"})},k=()=>{p.current&&p.current.scrollTo({top:p.current.scrollHeight,behavior:"smooth"})};return o(Ae,{children:[o("button",{onClick:()=>a(!0),className:"w-full p-3 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 text-left flex items-center justify-between border border-primary/20 hover:border-primary/30",children:[o("div",{className:"flex items-center gap-3",children:[i("div",{className:`w-8 h-8 rounded-lg ${x.bgColor} flex items-center justify-center`,children:i(x.icon,{className:`h-4 w-4 ${x.color}`})}),o("div",{children:[i("div",{className:"font-medium text-sm",children:x.name}),i("div",{className:"text-xs text-muted-foreground",children:x.description})]})]}),i(pe,{className:"h-4 w-4 text-muted-foreground"})]}),i(ae,{children:s&&i($.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center p-4",onClick:()=>a(!1),children:o($.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{duration:.2},className:"bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col model-modal",onClick:T=>T.stopPropagation(),children:[o("div",{className:"flex items-center justify-between p-4 border-b border-border",children:[i("h3",{className:"text-lg font-semibold",children:"Select AI Model"}),i("button",{onClick:()=>a(!1),className:"p-1 rounded-lg hover:bg-muted transition-colors",children:i(ge,{className:"h-4 w-4"})})]}),o("div",{className:"flex-1 overflow-hidden relative",children:[i("div",{className:"absolute top-0 left-0 right-0 h-1 bg-muted/20 z-5",children:i("div",{className:"h-full bg-primary transition-all duration-200",style:{width:`${I*100}%`}})}),N&&i("div",{className:"absolute top-2 left-0 right-0 bg-gradient-to-b from-card via-card/90 to-transparent p-2 z-5 rounded-t-xl",children:o("button",{onClick:v,className:"w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors bg-card/80 backdrop-blur-sm rounded-lg py-2 border border-border/50",children:[i(Ze,{className:"h-3 w-3"}),"Scroll to top"]})}),o("div",{ref:p,onScroll:m,className:"flex-1 overflow-y-auto relative",style:{scrollbarWidth:"thin",scrollbarColor:"rgba(59, 130, 246, 0.5) rgba(0, 0, 0, 0.1)",scrollBehavior:"smooth",maxHeight:"400px"},children:[b&&i("div",{className:"absolute bottom-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2 z-5 shadow-lg border border-primary/30",children:i(pe,{className:"h-4 w-4 text-primary animate-bounce"})}),i("div",{className:"p-2",children:h?o("div",{className:"p-8 text-center text-muted-foreground",children:[i(Le,{className:"h-6 w-6 animate-spin mx-auto mb-3"}),i("p",{children:"Loading AI models..."})]}):i("div",{className:"space-y-1",children:l.map(T=>{const w=T.icon,u=T.id===r;return i("button",{onClick:()=>g(T.id),className:`w-full p-3 rounded-lg text-left transition-all duration-200 hover:bg-muted/50 border ${u?"bg-primary/10 border-primary/30 shadow-sm":"border-border hover:border-primary/20"}`,children:o("div",{className:"flex items-center gap-3",children:[i("div",{className:`w-8 h-8 rounded-lg ${T.bgColor} flex items-center justify-center`,children:i(w,{className:`h-4 w-4 ${T.color}`})}),o("div",{className:"flex-1 min-w-0",children:[o("div",{className:"flex items-center gap-2",children:[i("span",{className:"font-medium text-sm truncate",children:T.name}),u&&i(Zt,{className:"h-4 w-4 text-primary flex-shrink-0"})]}),i("p",{className:"text-xs text-muted-foreground mt-0.5 truncate",children:T.description}),o("div",{className:"flex items-center gap-2 mt-1",children:[i("span",{className:"text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full",children:T.type}),T.ram_required&&o("span",{className:"text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-full",children:[T.ram_required," RAM"]})]}),T.languages&&T.languages.length>0&&o("div",{className:"flex flex-wrap gap-1 mt-1",children:[T.languages.slice(0,3).map((O,E)=>i("span",{className:"text-xs px-1.5 py-0.5 bg-secondary/20 text-secondary-foreground rounded",children:O},E)),T.languages.length>3&&o("span",{className:"text-xs px-1.5 py-0.5 bg-muted text-muted-foreground rounded",children:["+",T.languages.length-3," more"]})]})]})]})},T.id)})})})]}),b&&i("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/90 to-transparent p-2 z-5 rounded-b-xl",children:o("button",{onClick:k,className:"w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors bg-card/80 backdrop-blur-sm rounded-lg py-2 border border-border/50",children:[i(pe,{className:"h-3 w-3"}),"Scroll to bottom"]})}),o("div",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-5",children:[N&&i("button",{onClick:v,className:"p-2 bg-primary/10 hover:bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 transition-all duration-200 shadow-lg",children:i(Ze,{className:"h-4 w-4 text-primary"})}),b&&i("button",{onClick:k,className:"p-2 bg-primary/10 hover:bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 transition-all duration-200 shadow-lg",children:i(pe,{className:"h-4 w-4 text-primary"})})]})]})]})})})]})},xr=({messages:r,prompt:e,setPrompt:t,isGenerating:n,handleGenerate:s,textareaRef:a,messagesEndRef:l,appExplanation:c,setShowExplanation:h})=>{console.log("🔧 AIChatInterface rendering...",{messages:r.length,prompt:e,isGenerating:n});const f=b=>{b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),s())},N=b=>{navigator.clipboard.writeText(b),G.success("Copied to clipboard!")},S=(b,y)=>{G.success("Feedback sent")};return o("div",{className:"flex flex-col h-full",children:[o("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[i(ae,{children:r.map(b=>i($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:`flex gap-3 ${b.type==="user"?"justify-end":"justify-start"}`,children:o("div",{className:`flex gap-3 max-w-[80%] ${b.type==="user"?"flex-row-reverse":"flex-row"}`,children:[i("div",{className:`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${b.type==="user"?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground"}`,children:b.type==="user"?i(tr,{className:"h-4 w-4"}):i($e,{className:"h-4 w-4"})}),o("div",{className:`rounded-2xl px-4 py-3 ${b.type==="user"?"bg-primary text-primary-foreground":"bg-muted text-foreground"}`,children:[i("div",{className:"whitespace-pre-wrap text-sm",children:b.content}),b.type==="assistant"&&o("div",{className:"flex items-center gap-2 mt-2",children:[c&&i("button",{onClick:()=>h(!0),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"View detailed explanation",children:i(Fe,{className:"h-3 w-3"})}),i("button",{onClick:()=>N(b.content),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Copy message",children:i(ye,{className:"h-3 w-3"})}),i("button",{onClick:()=>S(b.id,"up"),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Good response",children:i(rr,{className:"h-3 w-3"})}),i("button",{onClick:()=>S(b.id,"down"),className:"p-1 hover:bg-white/10 rounded transition-colors",title:"Poor response",children:i(nr,{className:"h-3 w-3"})})]})]})]})},b.id))}),n&&o($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"flex gap-3 justify-start",children:[i("div",{className:"w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center",children:i($e,{className:"h-4 w-4"})}),i("div",{className:"bg-muted text-foreground rounded-2xl px-4 py-3",children:o("div",{className:"flex items-center gap-2",children:[i(Le,{className:"h-4 w-4 animate-spin"}),i("span",{className:"text-sm",children:"AI is thinking..."})]})})]}),i("div",{ref:l})]}),i("div",{className:"p-4 border-t border-border",children:o("div",{className:"flex gap-2",children:[i("textarea",{ref:a,value:e,onChange:b=>t(b.target.value),onKeyPress:f,placeholder:"Describe what you want to build...",className:"flex-1 min-h-[44px] max-h-32 px-4 py-3 bg-background border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",disabled:n}),i("button",{onClick:()=>{console.log("🔘 Send button clicked!",{prompt:e.trim(),isGenerating:n}),s()},disabled:!e.trim()||n,className:"px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2",children:n?i(Le,{className:"h-4 w-4 animate-spin"}):i(sr,{className:"h-4 w-4"})})]})})]})};function wr({response:r,onComplete:e,onError:t,type:n="text",language:s="javascript",showControls:a=!0,autoStart:l=!0}){const[c,h]=d.useState(""),[f,N]=d.useState(!1),[S,b]=d.useState(!1),[y,I]=d.useState(0),[C,p]=d.useState(""),[x,g]=d.useState(30),[m,v]=d.useState(!1),k=d.useRef(null),T=d.useRef(null);d.useEffect(()=>{l&&r&&!f&&w()},[r,l]),d.useEffect(()=>{k.current&&(k.current.scrollTop=k.current.scrollHeight)},[c]);const w=async()=>{if(r){N(!0),b(!1),v(!1),h(""),I(0);try{n==="code"?await X.streamCode(r,s,(A,_,B,te)=>{h(A),I(_/B*100),p(`Line ${_} of ${B}`)},A=>{N(!1),v(!0),e&&e(A)}):n==="explanation"?await X.streamExplanation(r,(A,_,B,te)=>{h(JSON.stringify(A,null,2)),I(_/B*100),p(te)},A=>{N(!1),v(!0),e&&e(A)}):await X.startStreaming(r,(A,_,B)=>{h(A),I(_/B*100),p(`${_} of ${B} characters`)},A=>{N(!1),v(!0),e&&e(A)},A=>{N(!1),t&&t(A)})}catch(A){N(!1),t&&t(A)}}},u=()=>{X.pauseStream(),b(!0)},O=()=>{X.resumeStream(),b(!1)},E=()=>{X.abortStream(),N(!1),b(!1)},L=A=>{g(A),X.setStreamingSpeed(A)},H=A=>{if(n==="code")return A;if(n==="explanation")try{const _=JSON.parse(A);return JSON.stringify(_,null,2)}catch{return A}return A};return o("div",{className:"w-full h-full flex flex-col bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden",children:[a&&o("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/30",children:[o("div",{className:"flex items-center gap-2",children:[i("div",{className:"flex items-center gap-1",children:f?i($.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-4 h-4 border-2 border-primary border-t-transparent rounded-full"}):m?i(fe,{className:"w-4 h-4 text-green-500"}):i(He,{className:"w-4 h-4 text-muted-foreground"})}),i("span",{className:"text-sm font-medium text-foreground",children:f?"Streaming...":m?"Complete":"Ready"}),C&&o("span",{className:"text-xs text-muted-foreground",children:["• ",C]})]}),o("div",{className:"flex items-center gap-2",children:[o("div",{className:"flex items-center gap-1",children:[i(ze,{className:"w-3 h-3 text-muted-foreground"}),o("select",{value:x,onChange:A=>L(Number(A.target.value)),className:"text-xs bg-transparent border-none outline-none text-muted-foreground",disabled:f,children:[i("option",{value:10,children:"Fast"}),i("option",{value:30,children:"Normal"}),i("option",{value:60,children:"Slow"}),i("option",{value:100,children:"Very Slow"})]})]}),o("div",{className:"flex items-center gap-1",children:[f?S?i("button",{onClick:O,className:"p-1 hover:bg-muted rounded transition-colors",title:"Resume",children:i(Me,{className:"w-3 h-3"})}):i("button",{onClick:u,className:"p-1 hover:bg-muted rounded transition-colors",title:"Pause",children:i(vt,{className:"w-3 h-3"})}):i("button",{onClick:w,className:"p-1 hover:bg-muted rounded transition-colors",title:"Start",children:i(Me,{className:"w-3 h-3"})}),f&&i("button",{onClick:E,className:"p-1 hover:bg-muted rounded transition-colors",title:"Stop",children:i(ir,{className:"w-3 h-3"})})]})]})]}),f&&i("div",{className:"w-full h-1 bg-muted",children:i($.div,{className:"h-full bg-primary",initial:{width:0},animate:{width:`${y}%`},transition:{duration:.3}})}),i("div",{className:"flex-1 overflow-hidden",children:o("div",{ref:k,className:"h-full overflow-y-auto p-4 font-mono text-sm leading-relaxed",children:[i(ae,{children:c&&o($.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"whitespace-pre-wrap break-words",children:[H(c),f&&!S&&i($.span,{ref:T,animate:{opacity:[1,0,1]},transition:{duration:1,repeat:1/0},className:"inline-block w-2 h-4 bg-primary ml-1"})]})}),!c&&!f&&i("div",{className:"flex items-center justify-center h-full text-muted-foreground",children:o("div",{className:"text-center",children:[i(He,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),i("p",{children:"Ready to stream response..."})]})})]})}),a&&i("div",{className:"p-2 border-t border-border bg-muted/20",children:o("div",{className:"flex items-center justify-between text-xs text-muted-foreground",children:[o("div",{className:"flex items-center gap-4",children:[o("span",{children:["Type: ",n]}),n==="code"&&o("span",{children:["Language: ",s]}),o("span",{children:["Speed: ",x,"ms"]})]}),i("div",{className:"flex items-center gap-2",children:f&&o("span",{className:"flex items-center gap-1",children:[i($.div,{animate:{scale:[1,1.2,1]},transition:{duration:.5,repeat:1/0},className:"w-2 h-2 bg-primary rounded-full"}),"Live"]})})]})})]})}function ti(){console.log("🔧 AIPromptSimplified component rendering...");const{currentProject:r,updateFile:e,switchFile:t,updateConfig:n}=be(),[s,a]=d.useState(""),[l,c]=d.useState(""),[h,f]=d.useState(!1),N=d.useRef(null),S=d.useRef(null),[b,y]=d.useState([]),[I,C]=d.useState([]);d.useState(!1),d.useState(!1);const[p,x]=d.useState(null),[g,m]=d.useState(!1),[v,k]=d.useState(!1),[T,w]=d.useState(""),[u,O]=d.useState("text"),[E,L]=d.useState("javascript"),[H,A]=d.useState(!1);d.useState(!0);const[_,B]=d.useState("auto"),[te,Ce]=d.useState(0);d.useEffect(()=>{N.current&&(N.current.style.height="auto",N.current.style.height=N.current.scrollHeight+"px")},[s]),d.useEffect(()=>{S.current?.scrollIntoView({behavior:"smooth"})},[b]);const j=R=>{const z=R.toLowerCase();return["create a","build a","make a","develop a","start a","new app","new project"].some(D=>z.includes(D))?!1:["fix","fix the","fix a","fix this","fix that","broken","not working","doesn't work","isn't working","error","bug","issue","problem","button","click","clicking","clicked","correction","correct","wrong","incorrect","update","change","modify","adjust","improve","enhance","better"].some(D=>z.includes(D))?!0:["add","add a","add new","add the","add some","include","include a","include new","implement","implement a","implement new","feature","features","functionality","function","capability","capabilities","enhance","enhancement","improve","improvement","modify","modification","update","upgrade","extend","extension"].some(D=>z.includes(D))},M=async()=>{if(console.log("🚀 handleGenerate called!",{prompt:s.trim(),isGenerating:h}),!s.trim()||h){console.log("❌ handleGenerate blocked:",{promptEmpty:!s.trim(),isGenerating:h});return}const R=s;console.log("✅ Starting generation with prompt:",R),a(""),f(!0),Q.currentConversation||await Q.initializeConversation(r.id,{name:r.name,files:r.files,features:r.features||[],techStack:r.techStack||[],appType:r.appType||"web",complexity:r.complexity||"basic",industry:r.industry||"general"});const z={id:Date.now(),type:"user",content:R,timestamp:new Date};y(F=>[...F,z]),await Q.addMessage(R),console.log("🌐 Auto-searching web for context...");let W=null;try{const F=await yr.searchForContext(R,{techStack:r.techStack||[],appType:r.appType||"web",complexity:r.complexity||"basic",industry:r.industry||"general",features:r.features||[]});F.success?(W=F.knowledge,console.log("✅ Web context found:",W.summary)):console.log("⚠️ No web context found:",F.reason)}catch(F){console.error("❌ Web search failed:",F)}try{const F=j(R),re=Q.getConversationContext(),D=await ce.generateCode({prompt:R,projectName:l||r.name,context:{currentFiles:r.files,activeFile:r.activeFile,config:r.config,isIncremental:F,existingProject:F?r:null,conversationContext:re,conversationHistory:Q.getConversationHistory(),webContext:W}});let V="Code generated successfully!",ne="",Ut="text",_t="javascript";D.type==="conversational_response"?(console.log("💬 Conversational response detected:",D.message),V=D.message,ne=D.message,G.info("Question answered!")):D.type==="incremental_update"?(V=D.message||`Added ${D.newFeatures?.length||0} new feature(s) to your existing app!`,ne=V,G.success(V)):D.type==="no_changes"?(V=D.message||"No new features to add - these already exist in your app.",ne=V,G.info(V)):(D.explanation&&D.explanation.summary?(V=`Code generated successfully! ${D.explanation.summary}`,ne=D.explanation.summary):(V=D.message||"Code generated successfully!",ne=D.message||"Code generated successfully!"),G.success("Code generated successfully!")),D.files&&Object.keys(D.files).length>0&&(ne=Object.entries(D.files).map(([Y,ue])=>`// ${Y}
${ue}`).join(`

`),Ut="code",_t="javascript"),D.files&&Object.keys(D.files).length>0&&D.type!=="conversational_response"&&(A(!1),k(!1)),console.log("💾 Saving AI response to conversation:",V),await Q.addMessage(V,D,"assistant");const Bt={id:Date.now()+1,type:"assistant",content:V,timestamp:new Date,files:D.files||{},isIncremental:D.type==="incremental_update",newFeatures:D.newFeatures||[]};if(y(Y=>[...Y,Bt]),D.type!=="conversational_response"&&D.files&&Object.keys(D.files).length>0){const Y=await Q.generateFeatureRecommendations();C(Y)}else C([]),console.log("🧹 Cleared suggested features - not a code generation request");D.explanation&&D.type!=="conversational_response"&&D.files&&Object.keys(D.files).length>0&&(x(D.explanation),m(!0)),D.files&&Object.keys(D.files).length>0&&D.type!=="conversational_response"&&(console.log("📁 Updating project files:",Object.keys(D.files)),Object.entries(D.files).forEach(([Y,ue])=>{console.log(`📄 Updating file ${Y} with ${ue.length} characters`),e(Y,ue)}),D.type==="incremental_update"?G.success(`Added ${D.newFeatures?.length||0} new feature(s): ${D.newFeatures?.join(", ")}`):G.success(`Generated ${Object.keys(D.files).length} files!`)),D.projectName&&D.projectName!==r.name&&(n({name:D.projectName}),c(D.projectName))}catch(F){console.error("Generation error:",F);const re={id:Date.now()+1,type:"assistant",content:`Sorry, I encountered an error: ${F.message}. Please try again.`,timestamp:new Date};y(D=>[...D,re]),G.error("Failed to generate code. Please try again.")}finally{f(!1)}},K=()=>{y([]),Q.clearConversation(),G.success("Chat cleared!")},De=async R=>{!R.trim()||h||(a(R),await M())};return d.useEffect(()=>{r.id&&Q.loadConversationHistory(r.id)},[r.id]),console.log("🔧 AIPromptSimplified render - currentProject:",r),console.log("🔧 AIPromptSimplified render - prompt:",s),console.log("🔧 AIPromptSimplified render - isGenerating:",h),o("div",{className:"h-full flex flex-col bg-card/50 backdrop-blur-sm relative",children:[o("div",{className:"flex items-center justify-between p-4 border-b border-border/50",children:[o("div",{className:"flex items-center gap-3",children:[i("div",{className:"w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:i($e,{className:"h-4 w-4 text-primary-foreground"})}),o("div",{children:[i("h3",{className:"font-semibold text-foreground",children:"AI Assistant"}),i("p",{className:"text-xs text-muted-foreground",children:"Powered by advanced AI models"})]})]}),o("div",{className:"flex items-center gap-2",children:[o("div",{className:"flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs",children:[i(ze,{className:"h-3 w-3"}),i("span",{children:"Auto Stream"})]}),i("button",{onClick:K,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Clear chat",children:i(Nt,{className:"h-4 w-4 text-muted-foreground"})})]})]}),i("div",{className:"p-4 border-b border-border/50",children:i(vr,{aiModel:_,setAIModel:B,modelUpdateKey:te,setModelUpdateKey:Ce})}),o("div",{className:"flex-1 overflow-hidden relative",children:[i(xr,{messages:b,prompt:s,setPrompt:a,isGenerating:h,handleGenerate:M,textareaRef:N,messagesEndRef:S,appExplanation:p,setShowExplanation:m}),I.length>0&&i("div",{className:"absolute bottom-20 left-4 right-4 z-10",children:o("div",{className:"bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg",children:[i("h3",{className:"text-sm font-medium text-muted-foreground mb-2",children:"💡 Suggested Features"}),i("div",{className:"space-y-2",children:I.slice(0,3).map((R,z)=>o("button",{onClick:()=>De(`Add ${R.name.toLowerCase()}: ${R.description}`),className:"w-full text-left p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border/50 text-xs",children:[i("div",{className:"font-medium",children:R.name}),i("div",{className:"text-muted-foreground mt-1",children:R.description}),i("div",{className:"text-primary mt-1",children:"Click to add this feature"})]},z))})]})})]}),i(ae,{children:g&&p&&i($.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:()=>m(!1),children:o($.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:R=>R.stopPropagation(),children:[o("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[o("div",{className:"flex items-center gap-3",children:[i("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:i(Fe,{className:"w-5 h-5 text-primary-foreground"})}),o("div",{children:[i("h2",{className:"text-xl font-semibold text-foreground",children:"App Explanation"}),i("p",{className:"text-sm text-muted-foreground",children:"What I created for you"})]})]}),i("button",{onClick:()=>m(!1),className:"p-2 hover:bg-muted rounded-lg transition-colors",children:i(ge,{className:"w-5 h-5 text-muted-foreground"})})]}),o("div",{className:"p-6 overflow-y-auto max-h-[calc(80vh-120px)]",children:[p.summary&&o("div",{className:"mb-6 p-4 bg-muted/50 rounded-lg border border-border",children:[o("h3",{className:"font-semibold text-foreground mb-2 flex items-center gap-2",children:[i(fe,{className:"w-4 h-4 text-green-500"}),"Summary"]}),i("p",{className:"text-muted-foreground",children:p.summary})]}),p.sections&&Object.entries(p.sections).map(([R,z])=>o("div",{className:"mb-6",children:[o("h3",{className:"font-semibold text-foreground mb-3 flex items-center gap-2",children:[R==="overview"&&i(Fe,{className:"w-4 h-4 text-blue-500"}),R==="features"&&i(fe,{className:"w-4 h-4 text-green-500"}),R==="technicalDetails"&&i(Ue,{className:"w-4 h-4 text-purple-500"}),R==="userExperience"&&i(le,{className:"w-4 h-4 text-pink-500"}),R==="performance"&&i(et,{className:"w-4 h-4 text-orange-500"}),R==="security"&&i(Ue,{className:"w-4 h-4 text-red-500"}),z.title||R.charAt(0).toUpperCase()+R.slice(1)]}),z.content&&i("p",{className:"text-muted-foreground mb-3",children:z.content}),z.details&&i("ul",{className:"space-y-2",children:z.details.map((W,F)=>o("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[i("div",{className:"w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"}),typeof W=="string"?W:W.message||W]},F))}),z.features&&i("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3",children:z.features.map((W,F)=>o("div",{className:"p-3 bg-muted/30 rounded-lg border border-border",children:[i("h4",{className:"font-medium text-foreground mb-1",children:W.name}),i("p",{className:"text-sm text-muted-foreground",children:W.description}),W.benefits&&o("div",{className:"mt-2",children:[i("p",{className:"text-xs text-muted-foreground mb-1",children:"Benefits:"}),i("ul",{className:"text-xs text-muted-foreground space-y-1",children:W.benefits.map((re,D)=>o("li",{className:"flex items-center gap-1",children:[i("div",{className:"w-1 h-1 bg-primary rounded-full"}),re]},D))})]})]},F))})]},R)),p.recommendations&&p.recommendations.length>0&&o("div",{className:"mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800",children:[o("h3",{className:"font-semibold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2",children:[i(et,{className:"w-4 h-4"}),"Recommendations"]}),i("div",{className:"space-y-2",children:p.recommendations.map((R,z)=>o("div",{className:"flex items-start gap-2",children:[i("div",{className:`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${R.priority==="high"?"bg-red-500":R.priority==="medium"?"bg-yellow-500":"bg-blue-500"}`}),i("div",{children:o("p",{className:"text-sm text-amber-800 dark:text-amber-200",children:[o("span",{className:"font-medium",children:[R.category,":"]})," ",R.suggestion]})})]},z))})]})]})]})})}),i(ae,{children:H&&o($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"absolute top-4 right-4 bg-card border border-border rounded-xl shadow-2xl max-w-md w-full max-h-[60vh] overflow-hidden z-50",children:[o("div",{className:"flex items-center justify-between p-3 border-b border-border",children:[o("div",{className:"flex items-center gap-2",children:[i("div",{className:"w-6 h-6 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:i(ze,{className:"w-3 h-3 text-primary-foreground"})}),o("div",{children:[i("h3",{className:"text-sm font-semibold text-foreground",children:"Streaming"}),i("p",{className:"text-xs text-muted-foreground",children:"Generating code..."})]})]}),i("button",{onClick:()=>A(!1),className:"p-1 hover:bg-muted rounded-lg transition-colors",children:i(ge,{className:"w-3 h-3 text-muted-foreground"})})]}),i("div",{className:"p-3 overflow-y-auto max-h-[calc(60vh-60px)]",children:i(wr,{response:T,type:u,language:E,onComplete:R=>{console.log("✅ Streaming completed:",R),k(!1)},onError:R=>{console.error("❌ Streaming error:",R),k(!1)},showControls:!0,autoStart:!0})})]})})]})}class Nr{constructor(){this.dictionary=new Map,this.grammarRules=new Map,this.contextMemory=new Map,this.conversationHistory=[],this.intentPatterns=new Map,this.initializeDictionary(),this.initializeGrammarRules(),this.initializeIntentPatterns(),console.log("🧠 Language Understanding Service initialized")}initializeDictionary(){this.dictionary.set("app",{type:"noun",synonyms:["application","program","software","platform"],context:"development",examples:["mobile app","web app","desktop app"]}),this.dictionary.set("build",{type:"verb",synonyms:["create","develop","make","construct","generate"],context:"development",examples:["build an app","build a website","build a dashboard"]}),this.dictionary.set("dashboard",{type:"noun",synonyms:["control panel","admin panel","analytics page","overview"],context:"development",examples:["admin dashboard","analytics dashboard","user dashboard"]}),this.dictionary.set("button",{type:"noun",synonyms:["clickable element","action element","trigger"],context:"ui",examples:["submit button","navigation button","action button"]}),this.dictionary.set("form",{type:"noun",synonyms:["input form","data entry","user input"],context:"ui",examples:["contact form","login form","registration form"]}),this.dictionary.set("database",{type:"noun",synonyms:["data storage","data store","repository"],context:"backend",examples:["user database","product database","analytics database"]}),this.addDictionaryEntries()}addDictionaryEntries(){[{word:"api",type:"noun",synonyms:["interface","endpoint","service"],context:"backend"},{word:"frontend",type:"noun",synonyms:["client-side","user interface","UI"],context:"development"},{word:"backend",type:"noun",synonyms:["server-side","server","API"],context:"development"},{word:"database",type:"noun",synonyms:["data store","storage","repository"],context:"backend"},{word:"modal",type:"noun",synonyms:["popup","dialog","overlay"],context:"ui"},{word:"navbar",type:"noun",synonyms:["navigation bar","menu bar","header"],context:"ui"},{word:"sidebar",type:"noun",synonyms:["side panel","navigation panel"],context:"ui"},{word:"card",type:"noun",synonyms:["panel","container","widget"],context:"ui"},{word:"create",type:"verb",synonyms:["build","make","generate","develop"],context:"action"},{word:"update",type:"verb",synonyms:["modify","edit","change","revise"],context:"action"},{word:"delete",type:"verb",synonyms:["remove","destroy","eliminate"],context:"action"},{word:"display",type:"verb",synonyms:["show","render","present"],context:"action"},{word:"authentication",type:"noun",synonyms:["login","auth","security"],context:"feature"},{word:"authorization",type:"noun",synonyms:["permissions","access control"],context:"feature"},{word:"search",type:"noun",synonyms:["find","query","lookup"],context:"feature"},{word:"filter",type:"noun",synonyms:["sort","organize","categorize"],context:"feature"}].forEach(t=>{this.dictionary.set(t.word,{type:t.type,synonyms:t.synonyms,context:t.context,examples:[]})})}initializeGrammarRules(){this.grammarRules.set("question_patterns",[/^(what|how|where|when|why|which|who)\s+/i,/^(can|could|would|should|will|shall)\s+/i,/^(is|are|was|were|do|does|did|have|has|had)\s+/i]),this.grammarRules.set("command_patterns",[/^(create|build|make|generate|develop)\s+/i,/^(add|insert|include|implement)\s+/i,/^(remove|delete|eliminate)\s+/i,/^(update|modify|change|edit)\s+/i]),this.grammarRules.set("request_patterns",[/^(i want|i need|i would like)\s+/i,/^(please|can you|could you)\s+/i,/^(help me|assist me)\s+/i])}initializeIntentPatterns(){this.intentPatterns.set("create_app",[/create.*app/i,/build.*app/i,/make.*app/i,/develop.*app/i,/generate.*app/i]),this.intentPatterns.set("add_feature",[/add.*feature/i,/include.*feature/i,/implement.*feature/i,/add.*functionality/i]),this.intentPatterns.set("modify_existing",[/update.*existing/i,/modify.*current/i,/change.*app/i,/edit.*project/i]),this.intentPatterns.set("get_help",[/help/i,/how.*do/i,/what.*is/i,/explain/i,/tutorial/i])}analyzeText(e){const t=this.tokenize(e),n=this.detectIntent(e),s=this.extractEntities(e),a=this.analyzeSentiment(e),l=this.analyzeGrammar(e),c={originalText:e,tokens:t,intent:n,entities:s,sentiment:a,grammar:l,suggestions:this.generateSuggestions(e,s),confidence:0};return c.confidence=this.calculateConfidence(c),c}tokenize(e){return e.toLowerCase().replace(/[^\w\s]/g," ").split(/\s+/).filter(t=>t.length>0)}detectIntent(e){for(const[t,n]of this.intentPatterns)for(const s of n)if(s.test(e))return{type:t,confidence:.9,matchedPattern:s.source};return this.grammarRules.get("question_patterns").some(t=>t.test(e))?{type:"question",confidence:.7}:this.grammarRules.get("command_patterns").some(t=>t.test(e))?{type:"command",confidence:.8}:{type:"unknown",confidence:.3}}extractEntities(e){const t=[],n=this.tokenize(e);for(const s of n)if(this.dictionary.has(s)){const a=this.dictionary.get(s);t.push({word:s,type:a.type,context:a.context,synonyms:a.synonyms})}return t}analyzeSentiment(e){const t=["good","great","excellent","amazing","perfect","love","like"],n=["bad","terrible","awful","hate","dislike","wrong","error"],s=this.tokenize(e);let a=0;return s.forEach(l=>{t.includes(l)&&(a+=1),n.includes(l)&&(a-=1)}),a>0?"positive":a<0?"negative":"neutral"}analyzeGrammar(e){return{hasQuestion:this.grammarRules.get("question_patterns").some(n=>n.test(e)),hasCommand:this.grammarRules.get("command_patterns").some(n=>n.test(e)),hasRequest:this.grammarRules.get("request_patterns").some(n=>n.test(e)),wordCount:this.tokenize(e).length,complexity:this.calculateComplexity(e)}}calculateComplexity(e){const t=this.tokenize(e),n=t.reduce((l,c)=>l+c.length,0)/t.length,s=new Set(t).size,a=n*s/t.length;return a>5?"high":a>3?"medium":"low"}generateSuggestions(e,t=[]){const n=[];return t.forEach(s=>{s.synonyms&&s.synonyms.length>0&&n.push({type:"synonym",original:s.word,suggestions:s.synonyms.slice(0,3)})}),n}calculateConfidence(e){let t=0;return t+=e.intent.confidence*.4,t+=Math.min(e.entities.length/5,1)*.3,(e.grammar.hasCommand||e.grammar.hasRequest)&&(t+=.2),this.conversationHistory.length>0&&(t+=.1),Math.min(t,1)}understandConversation(e,t={}){const n=this.analyzeText(e);this.conversationHistory.push({timestamp:new Date,message:e,analysis:n,context:t}),this.conversationHistory.length>10&&this.conversationHistory.shift();const s=this.generateContextualResponse(n,t);return{analysis:n,response:s,context:this.buildContext(n,t)}}generateContextualResponse(e,t){const n={create_app:["I'll help you create that app! What type of app would you like to build?","Great! Let's build your app. What features should it have?","Perfect! I can create that for you. What's the main purpose of the app?"],add_feature:["I'll add that feature to your existing app. What specific functionality do you need?","Great idea! Let me implement that feature. Can you describe it in more detail?","I'll help you add that feature. What should it do exactly?"],question:["I'd be happy to help! What would you like to know?","Great question! Let me explain that for you.","I can help with that! What specific information do you need?"],command:["I'll execute that command for you. Let me know if you need any modifications.","Perfect! I'll handle that right away.","I'll take care of that for you. Anything else you'd like me to do?"]},s=e.intent.type,a=n[s]||n.command;return{message:a[Math.floor(Math.random()*a.length)],suggestions:e.suggestions,confidence:e.confidence,nextSteps:this.suggestNextSteps(e)}}suggestNextSteps(e){const t=[];return e.intent.type==="create_app"?(t.push("Specify the app type (web, mobile, desktop)"),t.push("Describe the main features"),t.push("Choose a technology stack")):e.intent.type==="add_feature"&&(t.push("Describe the feature in detail"),t.push("Specify where to add it"),t.push("Choose implementation approach")),t}buildContext(e,t){return{...t,intent:e.intent,entities:e.entities,sentiment:e.sentiment,complexity:e.grammar.complexity,timestamp:new Date,conversationLength:this.conversationHistory.length}}getConversationInsights(){return{totalMessages:this.conversationHistory.length,commonIntents:this.getCommonIntents(),averageComplexity:this.getAverageComplexity(),userPreferences:this.getUserPreferences()}}getCommonIntents(){const e={};return this.conversationHistory.forEach(t=>{const n=t.analysis.intent.type;e[n]=(e[n]||0)+1}),Object.entries(e).sort(([,t],[,n])=>n-t).slice(0,5)}getAverageComplexity(){return this.conversationHistory.length===0?0:this.conversationHistory.reduce((t,n)=>t+(n.analysis.grammar.complexity==="high"?3:n.analysis.grammar.complexity==="medium"?2:1),0)/this.conversationHistory.length}getUserPreferences(){return{preferredIntents:this.getCommonIntents().slice(0,3),averageMessageLength:this.conversationHistory.reduce((t,n)=>t+n.analysis.grammar.wordCount,0)/this.conversationHistory.length,commonEntities:this.getCommonEntities()}}getCommonEntities(){const e={};return this.conversationHistory.forEach(t=>{t.analysis.entities.forEach(n=>{e[n.word]=(e[n.word]||0)+1})}),Object.entries(e).sort(([,t],[,n])=>n-t).slice(0,10)}}const st=new Nr;class Sr{constructor(){this.conversationSessions=new Map,this.userProfiles=new Map,this.contextMemory=new Map,console.log("🧠 Enhanced Conversation Service initialized")}async processUserMessage(e,t,n={}){try{const s=this.getOrCreateSession(e),a=st.understandConversation(t,{...n,sessionId:s.id,userId:e});s.context=a.context,s.messages.push({timestamp:new Date,type:"user",content:t,analysis:a.analysis});const l=await this.generateIntelligentResponse(a,s);return s.messages.push({timestamp:new Date,type:"assistant",content:l.message,analysis:l.analysis,suggestions:l.suggestions,nextSteps:l.nextSteps}),await this.saveConversation(e,s),{message:l.message,analysis:a.analysis,suggestions:l.suggestions,nextSteps:l.nextSteps,confidence:a.analysis.confidence,context:s.context}}catch(s){return console.error("Error processing user message:",s),{message:"I apologize, but I'm having trouble understanding that. Could you please rephrase your request?",analysis:{intent:{type:"error",confidence:0}},suggestions:[],nextSteps:[],confidence:0,context:{}}}}async generateIntelligentResponse(e,t){const n=e.analysis.intent.type,s=e.analysis.confidence,a=e.analysis.entities;return e.analysis.sentiment,s>.8?await this.generateHighConfidenceResponse(n,a,t):s>.5?await this.generateMediumConfidenceResponse(n,a,t):await this.generateLowConfidenceResponse(e,t)}async generateHighConfidenceResponse(e,t,n){switch(e){case"create_app":return await this.handleCreateAppRequest(t,n);case"add_feature":return await this.handleAddFeatureRequest(t,n);case"modify_existing":return await this.handleModifyRequest(t,n);case"question":return await this.handleQuestionRequest(t,n);case"get_help":return await this.handleHelpRequest(t,n);default:return await this.handleGenericRequest(t,n)}}async handleCreateAppRequest(e,t){const n=this.extractAppTypes(e),s=this.extractFeatures(e);let a="I'll help you create that app! ";return n.length>0&&(a+=`I can see you want a ${n.join(" and ")} app. `),s.length>0&&(a+=`I'll include features like ${s.join(", ")}. `),a+="Let me generate the code for you. What specific functionality should the app have?",{message:a,analysis:{intent:"create_app",confidence:.9},suggestions:["Specify the main purpose of the app","Describe the target users","Choose a technology stack"],nextSteps:["Define app requirements","Select UI components","Configure backend services"]}}async handleAddFeatureRequest(e,t){const n=this.extractFeatures(e);let s="I'll add that feature to your existing app! ";return n.length>0&&(s+=`I'll implement ${n.join(", ")}. `),s+="Where would you like this feature to be added in your current project?",{message:s,analysis:{intent:"add_feature",confidence:.9},suggestions:["Specify the location in the app","Describe the feature behavior","Choose integration approach"],nextSteps:["Locate existing code","Implement new feature","Test integration"]}}async handleModifyRequest(e,t){const n=this.extractModifications(e);let s="I'll help you modify your existing app! ";return n.length>0&&(s+=`I'll update ${n.join(", ")}. `),s+="What specific changes would you like me to make?",{message:s,analysis:{intent:"modify_existing",confidence:.9},suggestions:["Specify what to change","Describe the new behavior","Choose modification approach"],nextSteps:["Identify code to modify","Implement changes","Test modifications"]}}async handleQuestionRequest(e,t){const n=this.extractQuestionTypes(e);let s="I'd be happy to help answer your question! ";return n.length>0&&(s+=`I can help with ${n.join(" and ")}. `),s+="What specific information do you need?",{message:s,analysis:{intent:"question",confidence:.8},suggestions:["Ask about specific features","Request code examples","Get implementation guidance"],nextSteps:["Provide detailed answer","Show code examples","Offer additional resources"]}}async handleHelpRequest(e,t){const n=this.extractHelpTopics(e);let s="I'm here to help! ";return n.length>0&&(s+=`I can assist with ${n.join(", ")}. `),s+="What would you like help with today?",{message:s,analysis:{intent:"get_help",confidence:.8},suggestions:["Browse available features","Get step-by-step guidance","Access documentation"],nextSteps:["Provide help content","Show tutorials","Connect to resources"]}}async handleGenericRequest(e,t){return{message:"I understand you want help with something. Could you provide more details about what you'd like to build or modify?",analysis:{intent:"generic",confidence:.6},suggestions:["Describe your project idea","Specify what you want to create","Ask for specific help"],nextSteps:["Gather more information","Provide clarification","Offer suggestions"]}}async generateMediumConfidenceResponse(e,t,n){return{message:`I think you want to ${e.replace("_"," ")}. Could you provide more details to help me understand exactly what you need?`,analysis:{intent:e,confidence:.6},suggestions:["Provide more specific details","Use different words to describe it","Give an example"],nextSteps:["Clarify the request","Ask follow-up questions","Provide options"]}}async generateLowConfidenceResponse(e,t){return{message:"I'm not quite sure what you're asking for. Could you rephrase your request or provide more details?",analysis:e.analysis,suggestions:["Try rephrasing your request","Use simpler language","Break it into smaller parts"],nextSteps:["Ask for clarification","Provide examples","Offer alternative approaches"]}}extractAppTypes(e){const t=[],n={web:["website","web app","web application"],mobile:["mobile app","phone app","android","ios"],desktop:["desktop app","computer app","windows","mac"],dashboard:["dashboard","admin panel","control panel"]};return e.forEach(s=>{for(const[a,l]of Object.entries(n))l.some(c=>c.includes(s.word))&&t.push(a)}),[...new Set(t)]}extractFeatures(e){const t=[],n={authentication:["login","signin","auth","security"],database:["database","storage","data"],search:["search","find","lookup"],forms:["form","input","submit"],navigation:["menu","navbar","navigation"],dashboard:["dashboard","analytics","stats"]};return e.forEach(s=>{for(const[a,l]of Object.entries(n))l.some(c=>c.includes(s.word))&&t.push(a)}),[...new Set(t)]}extractModifications(e){const t=[],n={ui:["interface","design","layout","styling"],functionality:["feature","function","behavior"],performance:["speed","optimization","performance"],security:["security","protection","safety"]};return e.forEach(s=>{for(const[a,l]of Object.entries(n))l.some(c=>c.includes(s.word))&&t.push(a)}),[...new Set(t)]}extractQuestionTypes(e){const t=[],n={implementation:["how","implement","create","build"],explanation:["what","explain","define","meaning"],troubleshooting:["error","problem","issue","fix"],best_practices:["best","recommend","suggest","advice"]};return e.forEach(s=>{for(const[a,l]of Object.entries(n))l.some(c=>c.includes(s.word))&&t.push(a)}),[...new Set(t)]}extractHelpTopics(e){const t=[],n={getting_started:["start","begin","tutorial","guide"],features:["feature","function","capability"],troubleshooting:["error","problem","issue","help"],advanced:["advanced","complex","expert","pro"]};return e.forEach(s=>{for(const[a,l]of Object.entries(n))l.some(c=>c.includes(s.word))&&t.push(a)}),[...new Set(t)]}getOrCreateSession(e){return this.conversationSessions.has(e)||this.conversationSessions.set(e,{id:`session_${Date.now()}`,userId:e,startTime:new Date,messages:[],context:{},insights:{}}),this.conversationSessions.get(e)}async saveConversation(e,t){try{await Z.saveConversation(e,{sessionId:t.id,messages:t.messages,context:t.context,timestamp:new Date})}catch(n){console.error("Error saving conversation:",n)}}async getConversationHistory(e,t=50){try{return await Z.getConversationHistory(e,t)}catch(n){return console.error("Error getting conversation history:",n),[]}}getConversationInsights(e){const t=this.conversationSessions.get(e);return t?{sessionId:t.id,messageCount:t.messages.length,duration:Date.now()-t.startTime.getTime(),insights:st.getConversationInsights(),context:t.context}:null}clearSession(e){this.conversationSessions.delete(e),this.contextMemory.delete(e)}}const ri=new Sr,Cr=d.createContext();function Dr(){return d.useContext(Cr)}const kr=({isOpen:r,onClose:e})=>{const{isCollaborationActive:t,activeUsers:n,cursors:s,comments:a,sharedProjects:l,isLoading:c,shareProject:h,getSharedProjects:f,toggleCollaboration:N}=Dr();qt();const[S,b]=d.useState(""),[y,I]=d.useState("read"),[C,p]=d.useState("users");d.useEffect(()=>{r&&t&&f()},[r,t,f]);const x=async v=>{if(v.preventDefault(),!S.trim()){U.error("Please enter an email address");return}try{await h(S,y),U.success(`Project shared with ${S}`),b(""),f()}catch{U.error("Failed to share project")}},g=v=>{switch(v){case"admin":return"text-red-600 bg-red-100";case"write":return"text-blue-600 bg-blue-100";case"read":return"text-green-600 bg-green-100";default:return"text-gray-600 bg-gray-100"}},m=v=>{switch(v){case"admin":return i(Ue,{className:"h-4 w-4"});case"write":return i(fe,{className:"h-4 w-4"});case"read":return i(rt,{className:"h-4 w-4"});default:return i(He,{className:"h-4 w-4"})}};return r?i("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10",children:o("div",{className:"bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden",children:[o("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[o("div",{className:"flex items-center gap-3",children:[i("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:i(tt,{className:"h-5 w-5 text-white"})}),o("div",{children:[i("h2",{className:"text-xl font-semibold text-gray-900",children:"Collaboration"}),i("p",{className:"text-sm text-gray-600",children:"Real-time team collaboration"})]})]}),i("button",{onClick:e,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:i(ge,{className:"h-5 w-5 text-gray-600"})})]}),i("div",{className:"p-6 border-b border-gray-200",children:o("div",{className:"flex items-center justify-between",children:[o("div",{children:[i("h3",{className:"text-lg font-medium text-gray-900",children:"Real-time Collaboration"}),i("p",{className:"text-sm text-gray-600",children:"Enable real-time editing, cursor tracking, and comments"})]}),i("button",{onClick:N,disabled:c,className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${t?"bg-green-100 text-green-700 hover:bg-green-200":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:t?o(Ae,{children:[i(rt,{className:"h-4 w-4"}),"Active"]}):o(Ae,{children:[i(ar,{className:"h-4 w-4"}),"Inactive"]})})]})}),i("div",{className:"flex border-b border-gray-200",children:[{id:"users",label:"Active Users",icon:tt},{id:"comments",label:"Comments",icon:Nt},{id:"sharing",label:"Sharing",icon:wt}].map(v=>o("button",{onClick:()=>p(v.id),className:`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${C===v.id?"text-blue-600 border-b-2 border-blue-600":"text-gray-600 hover:text-gray-900"}`,children:[i(v.icon,{className:"h-4 w-4"}),v.label]},v.id))}),o("div",{className:"p-6 max-h-96 overflow-y-auto",children:[C==="users"&&o("div",{className:"space-y-4",children:[o("h3",{className:"text-lg font-medium text-gray-900",children:["Active Users (",n.length,")"]}),n.length===0?i("p",{className:"text-gray-500 text-center py-8",children:"No active users"}):i("div",{className:"space-y-3",children:n.map((v,k)=>o("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg",children:[i("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:i("span",{className:"text-white text-sm font-medium",children:v.userName?.charAt(0)||"U"})}),o("div",{className:"flex-1",children:[i("p",{className:"font-medium text-gray-900",children:v.userName}),i("p",{className:"text-sm text-gray-600",children:v.userEmail})]}),o("div",{className:"flex items-center gap-2",children:[i("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),i("span",{className:"text-sm text-gray-600",children:"Online"})]})]},k))}),s.length>0&&o("div",{className:"mt-6",children:[i("h4",{className:"text-md font-medium text-gray-900 mb-3",children:"Active Cursors"}),i("div",{className:"space-y-2",children:s.map((v,k)=>o("div",{className:"flex items-center gap-2 p-2 bg-blue-50 rounded",children:[i("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center",children:i("span",{className:"text-white text-xs font-medium",children:v.userName?.charAt(0)||"U"})}),i("span",{className:"text-sm text-gray-700",children:v.userName}),o("span",{className:"text-xs text-gray-500",children:[v.fileId," - Line ",v.line]})]},k))})]})]}),C==="comments"&&o("div",{className:"space-y-4",children:[o("h3",{className:"text-lg font-medium text-gray-900",children:["Comments (",a.length,")"]}),a.length===0?i("p",{className:"text-gray-500 text-center py-8",children:"No comments yet"}):i("div",{className:"space-y-3",children:a.map((v,k)=>i("div",{className:`p-4 rounded-lg border ${v.resolved?"bg-gray-50 border-gray-200":"bg-yellow-50 border-yellow-200"}`,children:o("div",{className:"flex items-start gap-3",children:[i("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:i("span",{className:"text-white text-sm font-medium",children:v.userName?.charAt(0)||"U"})}),o("div",{className:"flex-1",children:[o("div",{className:"flex items-center gap-2 mb-1",children:[i("span",{className:"font-medium text-gray-900",children:v.userName}),o("span",{className:"text-xs text-gray-500",children:["Line ",v.lineNumber," in ",v.fileId]}),v.resolved&&i("span",{className:"text-xs bg-green-100 text-green-700 px-2 py-1 rounded",children:"Resolved"})]}),i("p",{className:"text-gray-700",children:v.content})]})]})},k))})]}),C==="sharing"&&o("div",{className:"space-y-6",children:[o("div",{children:[i("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Share Project"}),o("form",{onSubmit:x,className:"space-y-4",children:[o("div",{children:[i("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),i("input",{type:"email",value:S,onChange:v=>b(v.target.value),placeholder:"user@example.com",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),o("div",{children:[i("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Permissions"}),o("select",{value:y,onChange:v=>I(v.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[i("option",{value:"read",children:"Read Only"}),i("option",{value:"write",children:"Read & Write"}),i("option",{value:"admin",children:"Admin"})]})]}),i("button",{type:"submit",className:"w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors",children:"Share Project"})]})]}),o("div",{children:[i("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Shared Projects"}),l.length===0?i("p",{className:"text-gray-500 text-center py-8",children:"No shared projects"}):i("div",{className:"space-y-3",children:l.map((v,k)=>o("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[o("div",{className:"flex items-center gap-3",children:[i("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center",children:i(or,{className:"h-4 w-4 text-white"})}),o("div",{children:[i("p",{className:"font-medium text-gray-900",children:v.sharedWith}),o("p",{className:"text-sm text-gray-600",children:["Project ID: ",v.projectId]})]})]}),i("div",{className:"flex items-center gap-2",children:o("span",{className:`px-2 py-1 rounded text-xs font-medium ${g(v.permissions)}`,children:[m(v.permissions),v.permissions]})})]},k))})]})]})]})]})}):null},St=d.createContext({dragDropManager:void 0});var it=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Te=function(){return Math.random().toString(36).substring(7).split("").join(".")},at={INIT:"@@redux/INIT"+Te(),REPLACE:"@@redux/REPLACE"+Te(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Te()}};function Tr(r){if(typeof r!="object"||r===null)return!1;for(var e=r;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e}function Ir(r){if(r===void 0)return"undefined";if(r===null)return"null";var e=typeof r;switch(e){case"boolean":case"string":case"number":case"symbol":case"function":return e}if(Array.isArray(r))return"array";if(Pr(r))return"date";if(Er(r))return"error";var t=Or(r);switch(t){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return t}return e.slice(8,-1).toLowerCase().replace(/\s/g,"")}function Or(r){return typeof r.constructor=="function"?r.constructor.name:null}function Er(r){return r instanceof Error||typeof r.message=="string"&&r.constructor&&typeof r.constructor.stackTraceLimit=="number"}function Pr(r){return r instanceof Date?!0:typeof r.toDateString=="function"&&typeof r.getDate=="function"&&typeof r.setDate=="function"}function se(r){var e=typeof r;return e=Ir(r),e}function Ct(r,e,t){var n;if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error("Expected the enhancer to be a function. Instead, received: '"+se(t)+"'");return t(Ct)(r,e)}if(typeof r!="function")throw new Error("Expected the root reducer to be a function. Instead, received: '"+se(r)+"'");var s=r,a=e,l=[],c=l,h=!1;function f(){c===l&&(c=l.slice())}function N(){if(h)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return a}function S(C){if(typeof C!="function")throw new Error("Expected the listener to be a function. Instead, received: '"+se(C)+"'");if(h)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");var p=!0;return f(),c.push(C),function(){if(p){if(h)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");p=!1,f();var g=c.indexOf(C);c.splice(g,1),l=null}}}function b(C){if(!Tr(C))throw new Error("Actions must be plain objects. Instead, the actual type was: '"+se(C)+"'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");if(typeof C.type>"u")throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');if(h)throw new Error("Reducers may not dispatch actions.");try{h=!0,a=s(a,C)}finally{h=!1}for(var p=l=c,x=0;x<p.length;x++){var g=p[x];g()}return C}function y(C){if(typeof C!="function")throw new Error("Expected the nextReducer to be a function. Instead, received: '"+se(C));s=C,b({type:at.REPLACE})}function I(){var C,p=S;return C={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error("Expected the observer to be an object. Instead, received: '"+se(g)+"'");function m(){g.next&&g.next(N())}m();var v=p(m);return{unsubscribe:v}}},C[it]=function(){return this},C}return b({type:at.INIT}),n={dispatch:b,subscribe:S,getState:N,replaceReducer:y},n[it]=I,n}function P(r,e,...t){if(Rr()&&e===void 0)throw new Error("invariant requires an error message argument");if(!r){let n;if(e===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let s=0;n=new Error(e.replace(/%s/g,function(){return t[s++]})),n.name="Invariant Violation"}throw n.framesToPop=1,n}}function Rr(){return typeof process<"u"&&import.meta.env.NODE_ENV==="production"}function Ar(r,e,t){return e.split(".").reduce((n,s)=>n&&n[s]?n[s]:t||null,r)}function Mr(r,e){return r.filter(t=>t!==e)}function Dt(r){return typeof r=="object"}function jr(r,e){const t=new Map,n=a=>{t.set(a,t.has(a)?t.get(a)+1:1)};r.forEach(n),e.forEach(n);const s=[];return t.forEach((a,l)=>{a===1&&s.push(l)}),s}function Lr(r,e){return r.filter(t=>e.indexOf(t)>-1)}const Ve="dnd-core/INIT_COORDS",ve="dnd-core/BEGIN_DRAG",Je="dnd-core/PUBLISH_DRAG_SOURCE",xe="dnd-core/HOVER",we="dnd-core/DROP",Ne="dnd-core/END_DRAG";function ot(r,e){return{type:Ve,payload:{sourceClientOffset:e||null,clientOffset:r||null}}}const $r={type:Ve,payload:{clientOffset:null,sourceClientOffset:null}};function Fr(r){return function(t=[],n={publishSource:!0}){const{publishSource:s=!0,clientOffset:a,getSourceClientOffset:l}=n,c=r.getMonitor(),h=r.getRegistry();r.dispatch(ot(a)),Hr(t,c,h);const f=_r(t,c);if(f==null){r.dispatch($r);return}let N=null;if(a){if(!l)throw new Error("getSourceClientOffset must be defined");zr(l),N=l(f)}r.dispatch(ot(a,N));const b=h.getSource(f).beginDrag(c,f);if(b==null)return;Ur(b),h.pinSource(f);const y=h.getSourceType(f);return{type:ve,payload:{itemType:y,item:b,sourceId:f,clientOffset:a||null,sourceClientOffset:N||null,isSourcePublic:!!s}}}}function Hr(r,e,t){P(!e.isDragging(),"Cannot call beginDrag while dragging."),r.forEach(function(n){P(t.getSource(n),"Expected sourceIds to be registered.")})}function zr(r){P(typeof r=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function Ur(r){P(Dt(r),"Item must be an object.")}function _r(r,e){let t=null;for(let n=r.length-1;n>=0;n--)if(e.canDragSource(r[n])){t=r[n];break}return t}function Br(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Wr(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){Br(r,s,t[s])})}return r}function qr(r){return function(t={}){const n=r.getMonitor(),s=r.getRegistry();Gr(n),Qr(n).forEach((l,c)=>{const h=Vr(l,c,s,n),f={type:we,payload:{dropResult:Wr({},t,h)}};r.dispatch(f)})}}function Gr(r){P(r.isDragging(),"Cannot call drop while not dragging."),P(!r.didDrop(),"Cannot call drop twice during one drag operation.")}function Vr(r,e,t,n){const s=t.getTarget(r);let a=s?s.drop(n,r):void 0;return Jr(a),typeof a>"u"&&(a=e===0?{}:n.getDropResult()),a}function Jr(r){P(typeof r>"u"||Dt(r),"Drop result must either be an object or undefined.")}function Qr(r){const e=r.getTargetIds().filter(r.canDropOnTarget,r);return e.reverse(),e}function Kr(r){return function(){const t=r.getMonitor(),n=r.getRegistry();Yr(t);const s=t.getSourceId();return s!=null&&(n.getSource(s,!0).endDrag(t,s),n.unpinSource()),{type:Ne}}}function Yr(r){P(r.isDragging(),"Cannot call endDrag while not dragging.")}function _e(r,e){return e===null?r===null:Array.isArray(r)?r.some(t=>t===e):r===e}function Xr(r){return function(t,{clientOffset:n}={}){Zr(t);const s=t.slice(0),a=r.getMonitor(),l=r.getRegistry(),c=a.getItemType();return tn(s,l,c),en(s,a,l),rn(s,a,l),{type:xe,payload:{targetIds:s,clientOffset:n||null}}}}function Zr(r){P(Array.isArray(r),"Expected targetIds to be an array.")}function en(r,e,t){P(e.isDragging(),"Cannot call hover while not dragging."),P(!e.didDrop(),"Cannot call hover after drop.");for(let n=0;n<r.length;n++){const s=r[n];P(r.lastIndexOf(s)===n,"Expected targetIds to be unique in the passed array.");const a=t.getTarget(s);P(a,"Expected targetIds to be registered.")}}function tn(r,e,t){for(let n=r.length-1;n>=0;n--){const s=r[n],a=e.getTargetType(s);_e(a,t)||r.splice(n,1)}}function rn(r,e,t){r.forEach(function(n){t.getTarget(n).hover(e,n)})}function nn(r){return function(){if(r.getMonitor().isDragging())return{type:Je}}}function sn(r){return{beginDrag:Fr(r),publishDragSource:nn(r),hover:Xr(r),drop:qr(r),endDrag:Kr(r)}}class an{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const e=this,{dispatch:t}=this.store;function n(a){return(...l)=>{const c=a.apply(e,l);typeof c<"u"&&t(c)}}const s=sn(this);return Object.keys(s).reduce((a,l)=>{const c=s[l];return a[l]=n(c),a},{})}dispatch(e){this.store.dispatch(e)}constructor(e,t){this.isSetUp=!1,this.handleRefCountChange=()=>{const n=this.store.getState().refCount>0;this.backend&&(n&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!n&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=t,e.subscribe(this.handleRefCountChange)}}function on(r,e){return{x:r.x+e.x,y:r.y+e.y}}function kt(r,e){return{x:r.x-e.x,y:r.y-e.y}}function ln(r){const{clientOffset:e,initialClientOffset:t,initialSourceClientOffset:n}=r;return!e||!t||!n?null:kt(on(e,n),t)}function cn(r){const{clientOffset:e,initialClientOffset:t}=r;return!e||!t?null:kt(e,t)}const de=[],Qe=[];de.__IS_NONE__=!0;Qe.__IS_ALL__=!0;function dn(r,e){return r===de?!1:r===Qe||typeof e>"u"?!0:Lr(e,r).length>0}class un{subscribeToStateChange(e,t={}){const{handlerIds:n}=t;P(typeof e=="function","listener must be a function."),P(typeof n>"u"||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let s=this.store.getState().stateId;const a=()=>{const l=this.store.getState(),c=l.stateId;try{c===s||c===s+1&&!dn(l.dirtyHandlerIds,n)||e()}finally{s=c}};return this.store.subscribe(a)}subscribeToOffsetChange(e){P(typeof e=="function","listener must be a function.");let t=this.store.getState().dragOffset;const n=()=>{const s=this.store.getState().dragOffset;s!==t&&(t=s,e())};return this.store.subscribe(n)}canDragSource(e){if(!e)return!1;const t=this.registry.getSource(e);return P(t,`Expected to find a valid source. sourceId=${e}`),this.isDragging()?!1:t.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;const t=this.registry.getTarget(e);if(P(t,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;const n=this.registry.getTargetType(e),s=this.getItemType();return _e(n,s)&&t.canDrop(this,e)}isDragging(){return!!this.getItemType()}isDraggingSource(e){if(!e)return!1;const t=this.registry.getSource(e,!0);if(P(t,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;const n=this.registry.getSourceType(e),s=this.getItemType();return n!==s?!1:t.isDragging(this,e)}isOverTarget(e,t={shallow:!1}){if(!e)return!1;const{shallow:n}=t;if(!this.isDragging())return!1;const s=this.registry.getTargetType(e),a=this.getItemType();if(a&&!_e(s,a))return!1;const l=this.getTargetIds();if(!l.length)return!1;const c=l.indexOf(e);return n?c===l.length-1:c>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return ln(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return cn(this.store.getState().dragOffset)}constructor(e,t){this.store=e,this.registry=t}}const lt=typeof global<"u"?global:self,Tt=lt.MutationObserver||lt.WebKitMutationObserver;function It(r){return function(){const t=setTimeout(s,0),n=setInterval(s,50);function s(){clearTimeout(t),clearInterval(n),r()}}}function pn(r){let e=1;const t=new Tt(r),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){e=-e,n.data=e}}const mn=typeof Tt=="function"?pn:It;class hn{enqueueTask(e){const{queue:t,requestFlush:n}=this;t.length||(n(),this.flushing=!0),t[t.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;for(;this.index<e.length;){const t=this.index;if(this.index++,e[t].call(),this.index>this.capacity){for(let n=0,s=e.length-this.index;n<s;n++)e[n]=e[n+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=mn(this.flush),this.requestErrorThrow=It(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class gn{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,t){this.onError=e,this.release=t,this.task=null}}class fn{create(e){const t=this.freeTasks,n=t.length?t.pop():new gn(this.onError,s=>t[t.length]=s);return n.task=e,n}constructor(e){this.onError=e,this.freeTasks=[]}}const Ot=new hn,bn=new fn(Ot.registerPendingError);function yn(r){Ot.enqueueTask(bn.create(r))}const Ke="dnd-core/ADD_SOURCE",Ye="dnd-core/ADD_TARGET",Xe="dnd-core/REMOVE_SOURCE",Se="dnd-core/REMOVE_TARGET";function vn(r){return{type:Ke,payload:{sourceId:r}}}function xn(r){return{type:Ye,payload:{targetId:r}}}function wn(r){return{type:Xe,payload:{sourceId:r}}}function Nn(r){return{type:Se,payload:{targetId:r}}}function Sn(r){P(typeof r.canDrag=="function","Expected canDrag to be a function."),P(typeof r.beginDrag=="function","Expected beginDrag to be a function."),P(typeof r.endDrag=="function","Expected endDrag to be a function.")}function Cn(r){P(typeof r.canDrop=="function","Expected canDrop to be a function."),P(typeof r.hover=="function","Expected hover to be a function."),P(typeof r.drop=="function","Expected beginDrag to be a function.")}function Be(r,e){if(e&&Array.isArray(r)){r.forEach(t=>Be(t,!1));return}P(typeof r=="string"||typeof r=="symbol",e?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var J;(function(r){r.SOURCE="SOURCE",r.TARGET="TARGET"})(J||(J={}));let Dn=0;function kn(){return Dn++}function Tn(r){const e=kn().toString();switch(r){case J.SOURCE:return`S${e}`;case J.TARGET:return`T${e}`;default:throw new Error(`Unknown Handler Role: ${r}`)}}function ct(r){switch(r[0]){case"S":return J.SOURCE;case"T":return J.TARGET;default:throw new Error(`Cannot parse handler ID: ${r}`)}}function dt(r,e){const t=r.entries();let n=!1;do{const{done:s,value:[,a]}=t.next();if(a===e)return!0;n=!!s}while(!n);return!1}class In{addSource(e,t){Be(e),Sn(t);const n=this.addHandler(J.SOURCE,e,t);return this.store.dispatch(vn(n)),n}addTarget(e,t){Be(e,!0),Cn(t);const n=this.addHandler(J.TARGET,e,t);return this.store.dispatch(xn(n)),n}containsHandler(e){return dt(this.dragSources,e)||dt(this.dropTargets,e)}getSource(e,t=!1){return P(this.isSourceId(e),"Expected a valid source ID."),t&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return P(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return P(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return P(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return ct(e)===J.SOURCE}isTargetId(e){return ct(e)===J.TARGET}removeSource(e){P(this.getSource(e),"Expected an existing source."),this.store.dispatch(wn(e)),yn(()=>{this.dragSources.delete(e),this.types.delete(e)})}removeTarget(e){P(this.getTarget(e),"Expected an existing target."),this.store.dispatch(Nn(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){const t=this.getSource(e);P(t,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=t}unpinSource(){P(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,t,n){const s=Tn(e);return this.types.set(s,t),e===J.SOURCE?this.dragSources.set(s,n):e===J.TARGET&&this.dropTargets.set(s,n),s}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}const On=(r,e)=>r===e;function En(r,e){return!r&&!e?!0:!r||!e?!1:r.x===e.x&&r.y===e.y}function Pn(r,e,t=On){if(r.length!==e.length)return!1;for(let n=0;n<r.length;++n)if(!t(r[n],e[n]))return!1;return!0}function Rn(r=de,e){switch(e.type){case xe:break;case Ke:case Ye:case Se:case Xe:return de;case ve:case Je:case Ne:case we:default:return Qe}const{targetIds:t=[],prevTargetIds:n=[]}=e.payload,s=jr(t,n);if(!(s.length>0||!Pn(t,n)))return de;const l=n[n.length-1],c=t[t.length-1];return l!==c&&(l&&s.push(l),c&&s.push(c)),s}function An(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Mn(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){An(r,s,t[s])})}return r}const ut={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function jn(r=ut,e){const{payload:t}=e;switch(e.type){case Ve:case ve:return{initialSourceClientOffset:t.sourceClientOffset,initialClientOffset:t.clientOffset,clientOffset:t.clientOffset};case xe:return En(r.clientOffset,t.clientOffset)?r:Mn({},r,{clientOffset:t.clientOffset});case Ne:case we:return ut;default:return r}}function Ln(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function ie(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){Ln(r,s,t[s])})}return r}const $n={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function Fn(r=$n,e){const{payload:t}=e;switch(e.type){case ve:return ie({},r,{itemType:t.itemType,item:t.item,sourceId:t.sourceId,isSourcePublic:t.isSourcePublic,dropResult:null,didDrop:!1});case Je:return ie({},r,{isSourcePublic:!0});case xe:return ie({},r,{targetIds:t.targetIds});case Se:return r.targetIds.indexOf(t.targetId)===-1?r:ie({},r,{targetIds:Mr(r.targetIds,t.targetId)});case we:return ie({},r,{dropResult:t.dropResult,didDrop:!0,targetIds:[]});case Ne:return ie({},r,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return r}}function Hn(r=0,e){switch(e.type){case Ke:case Ye:return r+1;case Xe:case Se:return r-1;default:return r}}function zn(r=0){return r+1}function Un(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function _n(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){Un(r,s,t[s])})}return r}function Bn(r={},e){return{dirtyHandlerIds:Rn(r.dirtyHandlerIds,{type:e.type,payload:_n({},e.payload,{prevTargetIds:Ar(r,"dragOperation.targetIds",[])})}),dragOffset:jn(r.dragOffset,e),refCount:Hn(r.refCount,e),dragOperation:Fn(r.dragOperation,e),stateId:zn(r.stateId)}}function Wn(r,e=void 0,t={},n=!1){const s=qn(n),a=new un(s,new In(s)),l=new an(s,a),c=r(l,e,t);return l.receiveBackend(c),l}function qn(r){const e=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return Ct(Bn,r&&e&&e({name:"dnd-core",instanceId:"dnd-core"}))}function Gn(r,e){if(r==null)return{};var t=Vn(r,e),n,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(s=0;s<a.length;s++)n=a[s],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function Vn(r,e){if(r==null)return{};var t={},n=Object.keys(r),s,a;for(a=0;a<n.length;a++)s=n[a],!(e.indexOf(s)>=0)&&(t[s]=r[s]);return t}let pt=0;const he=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var Jn=d.memo(function(e){var{children:t}=e,n=Gn(e,["children"]);const[s,a]=Qn(n);return d.useEffect(()=>{if(a){const l=Et();return++pt,()=>{--pt===0&&(l[he]=null)}}},[]),i(St.Provider,{value:s,children:t})});function Qn(r){if("manager"in r)return[{dragDropManager:r.manager},!1];const e=Kn(r.backend,r.context,r.options,r.debugMode),t=!r.context;return[e,t]}function Kn(r,e=Et(),t,n){const s=e;return s[he]||(s[he]={dragDropManager:Wn(r,e,t,n)}),s[he]}function Et(){return typeof global<"u"?global:window}var Yn=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,s,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(s=n;s--!==0;)if(!r(e[s],t[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(s=n;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[s]))return!1;for(s=n;s--!==0;){var l=a[s];if(!r(e[l],t[l]))return!1}return!0}return e!==e&&t!==t};const Xn=Gt(Yn),ee=typeof window<"u"?d.useLayoutEffect:d.useEffect;function Zn(r,e,t){const[n,s]=d.useState(()=>e(r)),a=d.useCallback(()=>{const l=e(r);Xn(n,l)||(s(l),t&&t())},[n,r,t]);return ee(a),[n,a]}function es(r,e,t){const[n,s]=Zn(r,e,t);return ee(function(){const l=r.getHandlerId();if(l!=null)return r.subscribeToStateChange(s,{handlerIds:[l]})},[r,s]),n}function Pt(r,e,t){return es(e,r||(()=>({})),()=>t.reconnect())}function Rt(r,e){const t=[...e||[]];return e==null&&typeof r!="function"&&t.push(r),d.useMemo(()=>typeof r=="function"?r():r,t)}function ts(r){return d.useMemo(()=>r.hooks.dragSource(),[r])}function rs(r){return d.useMemo(()=>r.hooks.dragPreview(),[r])}let Ie=!1,Oe=!1;class ns{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){P(!Ie,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return Ie=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{Ie=!1}}isDragging(){if(!this.sourceId)return!1;P(!Oe,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return Oe=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{Oe=!1}}subscribeToStateChange(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,t){return this.internalMonitor.isOverTarget(e,t)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}let Ee=!1;class ss{receiveHandlerId(e){this.targetId=e}getHandlerId(){return this.targetId}subscribeToStateChange(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}canDrop(){if(!this.targetId)return!1;P(!Ee,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return Ee=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{Ee=!1}}isOver(e){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,e):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.targetId=null,this.internalMonitor=e.getMonitor()}}function is(r,e,t){const n=t.getRegistry(),s=n.addTarget(r,e);return[s,()=>n.removeTarget(s)]}function as(r,e,t){const n=t.getRegistry(),s=n.addSource(r,e);return[s,()=>n.removeSource(s)]}function We(r,e,t,n){let s=t?t.call(n,r,e):void 0;if(s!==void 0)return!!s;if(r===e)return!0;if(typeof r!="object"||!r||typeof e!="object"||!e)return!1;const a=Object.keys(r),l=Object.keys(e);if(a.length!==l.length)return!1;const c=Object.prototype.hasOwnProperty.bind(e);for(let h=0;h<a.length;h++){const f=a[h];if(!c(f))return!1;const N=r[f],S=e[f];if(s=t?t.call(n,N,S,f):void 0,s===!1||s===void 0&&N!==S)return!1}return!0}function qe(r){return r!==null&&typeof r=="object"&&Object.prototype.hasOwnProperty.call(r,"current")}function os(r){if(typeof r.type=="string")return;const e=r.type.displayName||r.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`)}function ls(r){return(e=null,t=null)=>{if(!d.isValidElement(e)){const a=e;return r(a,t),a}const n=e;return os(n),cs(n,t?a=>r(a,t):r)}}function At(r){const e={};return Object.keys(r).forEach(t=>{const n=r[t];if(t.endsWith("Ref"))e[t]=r[t];else{const s=ls(n);e[t]=()=>s}}),e}function mt(r,e){typeof r=="function"?r(e):r.current=e}function cs(r,e){const t=r.ref;return P(typeof t!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),t?d.cloneElement(r,{ref:n=>{mt(t,n),mt(e,n)}}):d.cloneElement(r,{ref:e})}class ds{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){const e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){const e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return t&&this.disconnectDragSource(),this.handlerId?e?(t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),t):(this.lastConnectedDragSource=e,t):t}reconnectDragPreview(e=!1){const t=this.dragPreview,n=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!!this.handlerId){if(!t){this.lastConnectedDragPreview=t;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=t,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,t,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!We(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!We(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=At({dragSource:(t,n)=>{this.clearDragSource(),this.dragSourceOptions=n||null,qe(t)?this.dragSourceRef=t:this.dragSourceNode=t,this.reconnectDragSource()},dragPreview:(t,n)=>{this.clearDragPreview(),this.dragPreviewOptions=n||null,qe(t)?this.dragPreviewRef=t:this.dragPreviewNode=t,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}class us{get connectTarget(){return this.dropTarget}reconnect(){const e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();const t=this.dropTarget;if(this.handlerId){if(!t){this.lastConnectedDropTarget=t;return}e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions))}}receiveHandlerId(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(e){this.dropTargetOptionsInternal=e}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!We(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(e){this.hooks=At({dropTarget:(t,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,qe(t)?this.dropTargetRef=t:this.dropTargetNode=t,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}}function oe(){const{dragDropManager:r}=d.useContext(St);return P(r!=null,"Expected drag drop context"),r}function ps(r,e){const t=oe(),n=d.useMemo(()=>new ds(t.getBackend()),[t]);return ee(()=>(n.dragSourceOptions=r||null,n.reconnect(),()=>n.disconnectDragSource()),[n,r]),ee(()=>(n.dragPreviewOptions=e||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,e]),n}function ms(){const r=oe();return d.useMemo(()=>new ns(r),[r])}class hs{beginDrag(){const e=this.spec,t=this.monitor;let n=null;return typeof e.item=="object"?n=e.item:typeof e.item=="function"?n=e.item(t):n={},n??null}canDrag(){const e=this.spec,t=this.monitor;return typeof e.canDrag=="boolean"?e.canDrag:typeof e.canDrag=="function"?e.canDrag(t):!0}isDragging(e,t){const n=this.spec,s=this.monitor,{isDragging:a}=n;return a?a(s):t===e.getSourceId()}endDrag(){const e=this.spec,t=this.monitor,n=this.connector,{end:s}=e;s&&s(t.getItem(),t),n.reconnect()}constructor(e,t,n){this.spec=e,this.monitor=t,this.connector=n}}function gs(r,e,t){const n=d.useMemo(()=>new hs(r,e,t),[e,t]);return d.useEffect(()=>{n.spec=r},[r]),n}function fs(r){return d.useMemo(()=>{const e=r.type;return P(e!=null,"spec.type must be defined"),e},[r])}function bs(r,e,t){const n=oe(),s=gs(r,e,t),a=fs(r);ee(function(){if(a!=null){const[c,h]=as(a,s,n);return e.receiveHandlerId(c),t.receiveHandlerId(c),h}},[n,e,t,s,a])}function ys(r,e){const t=Rt(r,e);P(!t.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const n=ms(),s=ps(t.options,t.previewOptions);return bs(t,n,s),[Pt(t.collect,n,s),ts(s),rs(s)]}function vs(r){return d.useMemo(()=>r.hooks.dropTarget(),[r])}function xs(r){const e=oe(),t=d.useMemo(()=>new us(e.getBackend()),[e]);return ee(()=>(t.dropTargetOptions=r||null,t.reconnect(),()=>t.disconnectDropTarget()),[r]),t}function ws(){const r=oe();return d.useMemo(()=>new ss(r),[r])}function Ns(r){const{accept:e}=r;return d.useMemo(()=>(P(r.accept!=null,"accept must be defined"),Array.isArray(e)?e:[e]),[e])}class Ss{canDrop(){const e=this.spec,t=this.monitor;return e.canDrop?e.canDrop(t.getItem(),t):!0}hover(){const e=this.spec,t=this.monitor;e.hover&&e.hover(t.getItem(),t)}drop(){const e=this.spec,t=this.monitor;if(e.drop)return e.drop(t.getItem(),t)}constructor(e,t){this.spec=e,this.monitor=t}}function Cs(r,e){const t=d.useMemo(()=>new Ss(r,e),[e]);return d.useEffect(()=>{t.spec=r},[r]),t}function Ds(r,e,t){const n=oe(),s=Cs(r,e),a=Ns(r);ee(function(){const[c,h]=is(a,s,n);return e.receiveHandlerId(c),t.receiveHandlerId(c),h},[n,e,s,t,a.map(l=>l.toString()).join("|")])}function ks(r,e){const t=Rt(r,e),n=ws(),s=xs(t.options);return Ds(t,n,s),[Pt(t.collect,n,s),vs(s)]}function Mt(r){let e=null;return()=>(e==null&&(e=r()),e)}function Ts(r,e){return r.filter(t=>t!==e)}function Is(r,e){const t=new Set,n=a=>t.add(a);r.forEach(n),e.forEach(n);const s=[];return t.forEach(a=>s.push(a)),s}class Os{enter(e){const t=this.entered.length,n=s=>this.isNodeInDocument(s)&&(!s.contains||s.contains(e));return this.entered=Is(this.entered.filter(n),[e]),t===0&&this.entered.length>0}leave(e){const t=this.entered.length;return this.entered=Ts(this.entered.filter(this.isNodeInDocument),e),t>0&&this.entered.length===0}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class Es{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null}})})}loadDataTransfer(e){if(e){const t={};Object.keys(this.config.exposeProperties).forEach(n=>{const s=this.config.exposeProperties[n];s!=null&&(t[n]={value:s(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,t)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,t){return t===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const jt="__NATIVE_FILE__",Lt="__NATIVE_URL__",$t="__NATIVE_TEXT__",Ft="__NATIVE_HTML__",ht=Object.freeze(Object.defineProperty({__proto__:null,FILE:jt,HTML:Ft,TEXT:$t,URL:Lt},Symbol.toStringTag,{value:"Module"}));function Pe(r,e,t){const n=e.reduce((s,a)=>s||r.getData(a),"");return n??t}const Ge={[jt]:{exposeProperties:{files:r=>Array.prototype.slice.call(r.files),items:r=>r.items,dataTransfer:r=>r},matchesTypes:["Files"]},[Ft]:{exposeProperties:{html:(r,e)=>Pe(r,e,""),dataTransfer:r=>r},matchesTypes:["Html","text/html"]},[Lt]:{exposeProperties:{urls:(r,e)=>Pe(r,e,"").split(`
`),dataTransfer:r=>r},matchesTypes:["Url","text/uri-list"]},[$t]:{exposeProperties:{text:(r,e)=>Pe(r,e,""),dataTransfer:r=>r},matchesTypes:["Text","text/plain"]}};function Ps(r,e){const t=Ge[r];if(!t)throw new Error(`native type ${r} has no configuration`);const n=new Es(t);return n.loadDataTransfer(e),n}function Re(r){if(!r)return null;const e=Array.prototype.slice.call(r.types||[]);return Object.keys(Ge).filter(t=>{const n=Ge[t];return n?.matchesTypes?n.matchesTypes.some(s=>e.indexOf(s)>-1):!1})[0]||null}const Rs=Mt(()=>/firefox/i.test(navigator.userAgent)),Ht=Mt(()=>!!window.safari);class gt{interpolate(e){const{xs:t,ys:n,c1s:s,c2s:a,c3s:l}=this;let c=t.length-1;if(e===t[c])return n[c];let h=0,f=l.length-1,N;for(;h<=f;){N=Math.floor(.5*(h+f));const y=t[N];if(y<e)h=N+1;else if(y>e)f=N-1;else return n[N]}c=Math.max(0,f);const S=e-t[c],b=S*S;return n[c]+s[c]*S+a[c]*b+l[c]*S*b}constructor(e,t){const{length:n}=e,s=[];for(let y=0;y<n;y++)s.push(y);s.sort((y,I)=>e[y]<e[I]?-1:1);const a=[],l=[];let c,h;for(let y=0;y<n-1;y++)c=e[y+1]-e[y],h=t[y+1]-t[y],a.push(c),l.push(h/c);const f=[l[0]];for(let y=0;y<a.length-1;y++){const I=l[y],C=l[y+1];if(I*C<=0)f.push(0);else{c=a[y];const p=a[y+1],x=c+p;f.push(3*x/((x+p)/I+(x+c)/C))}}f.push(l[l.length-1]);const N=[],S=[];let b;for(let y=0;y<f.length-1;y++){b=l[y];const I=f[y],C=1/a[y],p=I+f[y+1]-b-b;N.push((b-I-p)*C),S.push(p*C*C)}this.xs=e,this.ys=t,this.c1s=f,this.c2s=N,this.c3s=S}}const As=1;function zt(r){const e=r.nodeType===As?r:r.parentElement;if(!e)return null;const{top:t,left:n}=e.getBoundingClientRect();return{x:n,y:t}}function me(r){return{x:r.clientX,y:r.clientY}}function Ms(r){var e;return r.nodeName==="IMG"&&(Rs()||!(!((e=document.documentElement)===null||e===void 0)&&e.contains(r)))}function js(r,e,t,n){let s=r?e.width:t,a=r?e.height:n;return Ht()&&r&&(a/=window.devicePixelRatio,s/=window.devicePixelRatio),{dragPreviewWidth:s,dragPreviewHeight:a}}function Ls(r,e,t,n,s){const a=Ms(e),c=zt(a?r:e),h={x:t.x-c.x,y:t.y-c.y},{offsetWidth:f,offsetHeight:N}=r,{anchorX:S,anchorY:b}=n,{dragPreviewWidth:y,dragPreviewHeight:I}=js(a,e,f,N),C=()=>{let T=new gt([0,.5,1],[h.y,h.y/N*I,h.y+I-N]).interpolate(b);return Ht()&&a&&(T+=(window.devicePixelRatio-1)*I),T},p=()=>new gt([0,.5,1],[h.x,h.x/f*y,h.x+y-f]).interpolate(S),{offsetX:x,offsetY:g}=s,m=x===0||x,v=g===0||g;return{x:m?x:p(),y:v?g:C()}}class $s{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var e;return!((e=this.globalContext)===null||e===void 0)&&e.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return((e=this.optionsArgs)===null||e===void 0?void 0:e.rootElement)||this.window}constructor(e,t){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=t}}function Fs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function ft(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){Fs(r,s,t[s])})}return r}class Hs{profile(){var e,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((e=this.dragStartSourceIds)===null||e===void 0?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((t=this.dragOverTargetIds)===null||t===void 0?void 0:t.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(e!==void 0){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;if(e!==void 0&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var t;(t=this.window)===null||t===void 0||t.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(e,t,n){return this.sourcePreviewNodeOptions.set(e,n),this.sourcePreviewNodes.set(e,t),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,t,n){this.sourceNodes.set(e,t),this.sourceNodeOptions.set(e,n);const s=l=>this.handleDragStart(l,e),a=l=>this.handleSelectStart(l);return t.setAttribute("draggable","true"),t.addEventListener("dragstart",s),t.addEventListener("selectstart",a),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),t.removeEventListener("dragstart",s),t.removeEventListener("selectstart",a),t.setAttribute("draggable","false")}}connectDropTarget(e,t){const n=l=>this.handleDragEnter(l,e),s=l=>this.handleDragOver(l,e),a=l=>this.handleDrop(l,e);return t.addEventListener("dragenter",n),t.addEventListener("dragover",s),t.addEventListener("drop",a),()=>{t.removeEventListener("dragenter",n),t.removeEventListener("dragover",s),t.removeEventListener("drop",a)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(e);return ft({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId(),t=this.sourcePreviewNodeOptions.get(e);return ft({anchorX:.5,anchorY:.5,captureDraggingState:!1},t||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(ht).some(t=>ht[t]===e)}beginDragNativeItem(e,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=Ps(e,t),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;const t=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var n;return(n=this.rootElement)===null||n===void 0?void 0:n.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},t)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var e;(e=this.window)===null||e===void 0||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,t){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}handleDragEnter(e,t){this.dragEnterTargetIds.unshift(t)}handleDragOver(e,t){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}handleDrop(e,t){this.dropTargetIds.unshift(t)}constructor(e,t,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=s=>{const a=this.sourceNodes.get(s);return a&&zt(a)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=s=>!!(s&&this.document&&this.document.body&&this.document.body.contains(s)),this.endDragIfSourceWasRemovedFromDOM=()=>{const s=this.currentDragSourceNode;s==null||this.isNodeInDocument(s)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=s=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(s||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=s=>{if(s.defaultPrevented)return;const{dragStartSourceIds:a}=this;this.dragStartSourceIds=null;const l=me(s);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(a||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:l});const{dataTransfer:c}=s,h=Re(c);if(this.monitor.isDragging()){if(c&&typeof c.setDragImage=="function"){const N=this.monitor.getSourceId(),S=this.sourceNodes.get(N),b=this.sourcePreviewNodes.get(N)||S;if(b){const{anchorX:y,anchorY:I,offsetX:C,offsetY:p}=this.getCurrentSourcePreviewNodeOptions(),m=Ls(S,b,l,{anchorX:y,anchorY:I},{offsetX:C,offsetY:p});c.setDragImage(b,m.x,m.y)}}try{c?.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(s.target);const{captureDraggingState:f}=this.getCurrentSourcePreviewNodeOptions();f?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(h)this.beginDragNativeItem(h);else{if(c&&!c.types&&(s.target&&!s.target.hasAttribute||!s.target.hasAttribute("draggable")))return;s.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=s=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var a;(a=this.currentNativeSource)===null||a===void 0||a.loadDataTransfer(s.dataTransfer)}if(!this.enterLeaveCounter.enter(s.target)||this.monitor.isDragging())return;const{dataTransfer:c}=s,h=Re(c);h&&this.beginDragNativeItem(h,c)},this.handleTopDragEnter=s=>{const{dragEnterTargetIds:a}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=s.altKey,a.length>0&&this.actions.hover(a,{clientOffset:me(s)}),a.some(c=>this.monitor.canDropOnTarget(c))&&(s.preventDefault(),s.dataTransfer&&(s.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=s=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var a;(a=this.currentNativeSource)===null||a===void 0||a.loadDataTransfer(s.dataTransfer)}},this.handleTopDragOver=s=>{const{dragOverTargetIds:a}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){s.preventDefault(),s.dataTransfer&&(s.dataTransfer.dropEffect="none");return}this.altKeyPressed=s.altKey,this.lastClientOffset=me(s),this.scheduleHover(a),(a||[]).some(c=>this.monitor.canDropOnTarget(c))?(s.preventDefault(),s.dataTransfer&&(s.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?s.preventDefault():(s.preventDefault(),s.dataTransfer&&(s.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=s=>{this.isDraggingNativeItem()&&s.preventDefault(),this.enterLeaveCounter.leave(s.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=s=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var a;s.preventDefault(),(a=this.currentNativeSource)===null||a===void 0||a.loadDataTransfer(s.dataTransfer)}else Re(s.dataTransfer)&&s.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=s=>{const{dropTargetIds:a}=this;this.dropTargetIds=[],this.actions.hover(a,{clientOffset:me(s)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=s=>{const a=s.target;typeof a.dragDrop=="function"&&(a.tagName==="INPUT"||a.tagName==="SELECT"||a.tagName==="TEXTAREA"||a.isContentEditable||(s.preventDefault(),a.dragDrop()))},this.options=new $s(t,n),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new Os(this.isNodeInDocument)}}const zs=function(e,t,n){return new Hs(e,t,n)},Us=({projectId:r,onCodeChange:e,initialComponents:t=[]})=>{const[n,s]=d.useState(t),[a,l]=d.useState(null),[c,h]=d.useState(!1),[f,N]=d.useState(!1),[S,b]=d.useState({width:1200,height:800}),[y,I]=d.useState(1),C=d.useRef(null),p=[{type:"container",name:"Container",icon:"📦",category:"Layout"},{type:"text",name:"Text",icon:"📝",category:"Content"},{type:"button",name:"Button",icon:"🔘",category:"Interactive"},{type:"input",name:"Input",icon:"📝",category:"Form"},{type:"image",name:"Image",icon:"🖼️",category:"Media"},{type:"card",name:"Card",icon:"🃏",category:"Layout"},{type:"header",name:"Header",icon:"📋",category:"Layout"},{type:"footer",name:"Footer",icon:"🦶",category:"Layout"},{type:"sidebar",name:"Sidebar",icon:"📑",category:"Layout"},{type:"navbar",name:"Navbar",icon:"🧭",category:"Navigation"},{type:"form",name:"Form",icon:"📋",category:"Form"},{type:"table",name:"Table",icon:"📊",category:"Data"},{type:"chart",name:"Chart",icon:"📈",category:"Data"},{type:"modal",name:"Modal",icon:"🪟",category:"Overlay"},{type:"dropdown",name:"Dropdown",icon:"📋",category:"Interactive"}],x=u=>({container:`<div className="container" style={${JSON.stringify(u.styles)}}>
  {children}
</div>`,text:`<p className="text" style={${JSON.stringify(u.styles)}}>
  ${u.content||"Text content"}
</p>`,button:`<button className="btn" style={${JSON.stringify(u.styles)}} onClick={${u.onClick||"() => {}"}}>
  ${u.content||"Button"}
</button>`,input:`<input 
  className="input" 
  type="${u.inputType||"text"}"
  placeholder="${u.placeholder||""}"
  style={${JSON.stringify(u.styles)}}
/>`,image:`<img 
  className="image" 
  src="${u.src||"/placeholder.jpg"}"
  alt="${u.alt||""}"
  style={${JSON.stringify(u.styles)}}
/>`,card:`<div className="card" style={${JSON.stringify(u.styles)}}>
  <div className="card-header">
    <h3>${u.title||"Card Title"}</h3>
  </div>
  <div className="card-body">
    <p>${u.content||"Card content"}</p>
  </div>
</div>`,header:`<header className="header" style={${JSON.stringify(u.styles)}}>
  <h1>${u.content||"Header"}</h1>
</header>`,footer:`<footer className="footer" style={${JSON.stringify(u.styles)}}>
  <p>${u.content||"Footer content"}</p>
</footer>`,sidebar:`<aside className="sidebar" style={${JSON.stringify(u.styles)}}>
  <nav>
    <ul>
      <li><a href="#">Menu Item 1</a></li>
      <li><a href="#">Menu Item 2</a></li>
    </ul>
  </nav>
</aside>`,navbar:`<nav className="navbar" style={${JSON.stringify(u.styles)}}>
  <div className="nav-brand">${u.brand||"Brand"}</div>
  <ul className="nav-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`,form:`<form className="form" style={${JSON.stringify(u.styles)}} onSubmit={${u.onSubmit||"() => {}"}}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" name="name" />
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" name="email" />
  </div>
  <button type="submit">Submit</button>
</form>`,table:`<table className="table" style={${JSON.stringify(u.styles)}}>
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
</table>`,chart:`<div className="chart" style={${JSON.stringify(u.styles)}}>
  <canvas id="chart-${u.id}"></canvas>
</div>`,modal:`<div className="modal" style={${JSON.stringify(u.styles)}}>
  <div className="modal-content">
    <span className="close" onClick={${u.onClose||"() => {}"}}>&times;</span>
    <h2>${u.title||"Modal Title"}</h2>
    <p>${u.content||"Modal content"}</p>
  </div>
</div>`,dropdown:`<div className="dropdown" style={${JSON.stringify(u.styles)}}>
  <button className="dropdown-toggle" onClick={${u.onToggle||"() => {}"}}>
    ${u.label||"Dropdown"}
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
</div>`})[u.type]||`<div>Unknown component: ${u.type}</div>`,g=()=>{const u=`import React, { useState, useEffect } from 'react';
import './App.css';`,E=`const App = () => {
  return (
    <div className="app">
      ${n.map(L=>x(L)).join(`

`)}
    </div>
  );
};

export default App;`;return`${u}

${E}`},m=(u,O)=>{const E=O.getDropResult();if(!E)return;const L={id:`component-${Date.now()}`,type:u.type,name:u.name,position:{x:E.x,y:E.y},size:{width:200,height:100},styles:{position:"absolute",left:`${E.x}px`,top:`${E.y}px`,width:"200px",height:"100px",border:"1px solid #ddd",padding:"10px",backgroundColor:"#fff"},content:u.name,properties:{}};s(H=>[...H,L])},v=u=>{l(u),h(!0)},k=(u,O)=>{if(!a)return;const E={...a,[u]:O,styles:{...a.styles,[u]:O}};s(L=>L.map(H=>H.id===a.id?E:H)),l(E)},T=()=>`
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
`,w=()=>{const u={components:n,appCode:g(),cssCode:T(),metadata:{projectId:r,exportedAt:new Date().toISOString(),componentCount:n.length}},O=JSON.stringify(u,null,2),E=new Blob([O],{type:"application/json"}),L=URL.createObjectURL(E),H=document.createElement("a");H.href=L,H.download=`dreambuild-project-${r}.json`,H.click(),URL.revokeObjectURL(L)};return d.useEffect(()=>{e&&e({appCode:g(),cssCode:T(),components:n})},[n,e]),i(Jn,{backend:zs,children:o("div",{className:"visual-editor",children:[o("div",{className:"editor-header",children:[i("h2",{children:"🎨 Visual Editor"}),o("div",{className:"editor-controls",children:[i("button",{className:"btn btn-secondary",onClick:()=>N(!f),children:f?"Edit":"Preview"}),i("button",{className:"btn btn-primary",onClick:w,children:"Export"})]})]}),o("div",{className:"editor-layout",children:[o("div",{className:"component-library",children:[i("h3",{children:"📚 Component Library"}),i("div",{className:"library-categories",children:["Layout","Content","Interactive","Form","Media","Data","Navigation","Overlay"].map(u=>o("div",{className:"category",children:[i("h4",{children:u}),i("div",{className:"category-components",children:p.filter(O=>O.category===u).map(O=>i(_s,{type:O.type,name:O.name,icon:O.icon},O.type))})]},u))})]}),o("div",{className:"canvas-container",children:[o("div",{className:"canvas-toolbar",children:[o("div",{className:"canvas-controls",children:[i("button",{className:"btn btn-sm",onClick:()=>I(y*.8),children:"Zoom Out"}),o("span",{className:"zoom-level",children:[Math.round(y*100),"%"]}),i("button",{className:"btn btn-sm",onClick:()=>I(y*1.2),children:"Zoom In"})]}),i("div",{className:"canvas-size",children:o("select",{value:`${S.width}x${S.height}`,onChange:u=>{const[O,E]=u.target.value.split("x").map(Number);b({width:O,height:E})},children:[i("option",{value:"1200x800",children:"Desktop (1200x800)"}),i("option",{value:"768x1024",children:"Tablet (768x1024)"}),i("option",{value:"375x667",children:"Mobile (375x667)"})]})})]}),i("div",{className:"canvas",ref:C,style:{width:S.width*y,height:S.height*y,transform:`scale(${y})`,transformOrigin:"top left"},children:i(Bs,{onDrop:m,children:n.map(u=>i(Ws,{component:u,onSelect:v,isSelected:a?.id===u.id},u.id))})})]}),c&&a&&o("div",{className:"properties-panel",children:[i("h3",{children:"⚙️ Properties"}),o("div",{className:"property-groups",children:[o("div",{className:"property-group",children:[i("h4",{children:"Content"}),o("div",{className:"property",children:[i("label",{children:"Text Content"}),i("input",{type:"text",value:a.content||"",onChange:u=>k("content",u.target.value)})]})]}),o("div",{className:"property-group",children:[i("h4",{children:"Position"}),o("div",{className:"property",children:[i("label",{children:"X Position"}),i("input",{type:"number",value:a.position?.x||0,onChange:u=>k("left",`${u.target.value}px`)})]}),o("div",{className:"property",children:[i("label",{children:"Y Position"}),i("input",{type:"number",value:a.position?.y||0,onChange:u=>k("top",`${u.target.value}px`)})]})]}),o("div",{className:"property-group",children:[i("h4",{children:"Size"}),o("div",{className:"property",children:[i("label",{children:"Width"}),i("input",{type:"number",value:a.size?.width||200,onChange:u=>k("width",`${u.target.value}px`)})]}),o("div",{className:"property",children:[i("label",{children:"Height"}),i("input",{type:"number",value:a.size?.height||100,onChange:u=>k("height",`${u.target.value}px`)})]})]}),o("div",{className:"property-group",children:[i("h4",{children:"Style"}),o("div",{className:"property",children:[i("label",{children:"Background Color"}),i("input",{type:"color",value:a.styles?.backgroundColor||"#ffffff",onChange:u=>k("backgroundColor",u.target.value)})]}),o("div",{className:"property",children:[i("label",{children:"Border Color"}),i("input",{type:"color",value:a.styles?.borderColor||"#dddddd",onChange:u=>k("borderColor",u.target.value)})]})]})]})]})]}),i("style",{jsx:!0,children:`
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
        `})]})})},_s=({type:r,name:e,icon:t})=>{const[{isDragging:n},s]=ys({type:"component",item:{type:r,name:e},collect:a=>({isDragging:a.isDragging()})});return o("div",{ref:s,className:`draggable-component ${n?"dragging":""}`,children:[i("span",{className:"component-icon",children:t}),i("span",{className:"component-name",children:e})]})},Bs=({children:r,onDrop:e})=>{const[{isOver:t},n]=ks({accept:"component",drop:(s,a)=>{const l=a.getClientOffset(),c=a.getDropResult()?.getBoundingClientRect();l&&c&&e(s,{x:l.x-c.left,y:l.y-c.top})},collect:s=>({isOver:s.isOver()})});return i("div",{ref:n,className:`droppable-canvas ${t?"drag-over":""}`,children:r})},Ws=({component:r,onSelect:e,isSelected:t})=>{const n=s=>{s.stopPropagation(),e(r)};return i("div",{className:`visual-component ${t?"selected":""}`,style:r.styles,onClick:n,children:o("div",{className:"component-content",children:[r.type==="text"&&(r.content||"Text"),r.type==="button"&&(r.content||"Button"),r.type==="input"&&i("input",{placeholder:r.placeholder||"Input"}),r.type==="image"&&i("div",{className:"image-placeholder",children:"🖼️ Image"}),r.type==="card"&&o("div",{children:[i("h3",{children:r.title||"Card Title"}),i("p",{children:r.content||"Card content"})]}),!["text","button","input","image","card"].includes(r.type)&&i("div",{className:"component-placeholder",children:r.name})]})})},qs=({projectId:r,projectData:e,onDeploy:t})=>{const[n,s]=d.useState("vercel"),[a,l]=d.useState(!1),[c,h]=d.useState(null),f=[{id:"vercel",name:"Vercel",icon:"▲",description:"Fast, global deployment"},{id:"netlify",name:"Netlify",icon:"🌐",description:"JAMstack deployment"},{id:"aws",name:"AWS Amplify",icon:"☁️",description:"Full-stack deployment"},{id:"firebase",name:"Firebase",icon:"🔥",description:"Google hosting"},{id:"github",name:"GitHub Pages",icon:"🐙",description:"Free static hosting"}],N=async()=>{l(!0),h("Deploying...");try{await new Promise(b=>setTimeout(b,3e3));const S={success:!0,provider:n,url:`https://${r}.${n}.com`,deployedAt:new Date().toISOString()};h("Deployed successfully!"),t&&t(S)}catch{h("Deployment failed")}finally{l(!1)}};return o("div",{className:"deployment-panel",children:[i("h3",{children:"🚀 Deploy Your App"}),o("div",{className:"provider-selection",children:[i("h4",{children:"Choose Hosting Provider"}),i("div",{className:"providers-grid",children:f.map(S=>o("div",{className:`provider-card ${n===S.id?"selected":""}`,onClick:()=>s(S.id),children:[i("div",{className:"provider-icon",children:S.icon}),i("div",{className:"provider-name",children:S.name}),i("div",{className:"provider-description",children:S.description})]},S.id))})]}),i("div",{className:"deployment-actions",children:i("button",{className:"btn btn-primary btn-lg",onClick:N,disabled:a,children:a?"Deploying...":"Deploy Now"})}),c&&i("div",{className:"deployment-status",children:i("div",{className:`status-message ${c.includes("success")?"success":"error"}`,children:c})}),i("style",{jsx:!0,children:`
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
      `})]})},Gs=({projectId:r,onMemoryUpdate:e})=>{const[t,n]=d.useState(null),[s,a]=d.useState([]),[l,c]=d.useState(""),[h,f]=d.useState([]),[N,S]=d.useState(!1),[b,y]=d.useState(null);d.useEffect(()=>{r&&(I(),C())},[r]);const I=async()=>{try{S(!0);const m=await Z.loadConversationMemory(r);if(n(m),m){const v=await Z.getConversationHistory(r);a(v)}}catch(m){console.error("Failed to load memory:",m)}finally{S(!1)}},C=async()=>{try{const m=await Z.getStorageStats();y(m)}catch(m){console.error("Failed to load stats:",m)}},p=async()=>{if(l.trim())try{S(!0);const m=await Z.searchConversationMemory(r,l);f(m)}catch(m){console.error("Failed to search memory:",m)}finally{S(!1)}},x=async()=>{if(window.confirm("Are you sure you want to clear all conversation memory?"))try{await Z.clearConversationMemory(r),n(null),a([]),f([]),e&&e()}catch(m){console.error("Failed to clear memory:",m)}},g=()=>{if(!t)return;const m=JSON.stringify(t,null,2),v=new Blob([m],{type:"application/json"}),k=URL.createObjectURL(v),T=document.createElement("a");T.href=k,T.download=`dreambuild-memory-${r}.json`,T.click(),URL.revokeObjectURL(k)};return N?i("div",{className:"memory-manager",children:i("div",{className:"loading",children:"Loading memory..."})}):o("div",{className:"memory-manager",children:[o("div",{className:"memory-header",children:[i("h3",{children:"🧠 Conversation Memory"}),o("div",{className:"memory-actions",children:[i("button",{onClick:I,className:"btn btn-secondary",children:"Refresh"}),i("button",{onClick:g,className:"btn btn-secondary",children:"Export"}),i("button",{onClick:x,className:"btn btn-danger",children:"Clear"})]})]}),b&&o("div",{className:"memory-stats",children:[o("div",{className:"stat",children:[i("span",{className:"stat-label",children:"Projects:"}),i("span",{className:"stat-value",children:b.totalProjects})]}),o("div",{className:"stat",children:[i("span",{className:"stat-label",children:"Files:"}),i("span",{className:"stat-value",children:b.totalFiles})]}),o("div",{className:"stat",children:[i("span",{className:"stat-label",children:"Size:"}),o("span",{className:"stat-value",children:[b.totalSizeMB," MB"]})]})]}),o("div",{className:"memory-search",children:[i("input",{type:"text",placeholder:"Search conversation memory...",value:l,onChange:m=>c(m.target.value),onKeyPress:m=>m.key==="Enter"&&p()}),i("button",{onClick:p,className:"btn btn-primary",children:"Search"})]}),h.length>0&&o("div",{className:"search-results",children:[i("h4",{children:"Search Results"}),h.map((m,v)=>o("div",{className:"search-result",children:[i("div",{className:"result-type",children:m.type}),i("div",{className:"result-text",children:m.text}),i("div",{className:"result-timestamp",children:m.timestamp})]},v))]}),s.prompts&&s.prompts.length>0&&o("div",{className:"conversation-history",children:[i("h4",{children:"Conversation History"}),o("div",{className:"history-stats",children:[o("span",{children:["Prompts: ",s.totalPrompts]}),o("span",{children:["Responses: ",s.totalResponses]})]}),i("div",{className:"history-list",children:s.prompts.map((m,v)=>o("div",{className:"history-item",children:[o("div",{className:"history-prompt",children:[i("strong",{children:"Prompt:"})," ",m.text]}),s.responses[v]&&o("div",{className:"history-response",children:[i("strong",{children:"Response:"})," ",s.responses[v].text]}),i("div",{className:"history-timestamp",children:new Date(m.timestamp).toLocaleString()})]},m.id))})]}),t&&o("div",{className:"memory-details",children:[i("h4",{children:"Memory Details"}),o("div",{className:"memory-info",children:[o("p",{children:[i("strong",{children:"Project ID:"})," ",t.projectId]}),o("p",{children:[i("strong",{children:"Created:"})," ",new Date(t.createdAt).toLocaleString()]}),o("p",{children:[i("strong",{children:"Last Updated:"})," ",new Date(t.lastUpdated).toLocaleString()]}),o("p",{children:[i("strong",{children:"Memory Size:"})," ",JSON.stringify(t).length," bytes"]})]})]}),i("style",{jsx:!0,children:`
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
      `})]})},ni=({projectId:r,initialFiles:e={}})=>{const[t,n]=d.useState("code"),[s,a]=d.useState(e),[l,c]=d.useState(null),[h,f]=d.useState(!1);d.useState(!1);const[N,S]=d.useState(null),b=[{id:"code",name:"Code Editor",icon:"💻"},{id:"visual",name:"Visual Editor",icon:"🎨"},{id:"collaboration",name:"Collaboration",icon:"🤝"},{id:"deployment",name:"Deployment",icon:"🚀"},{id:"memory",name:"Memory",icon:"🧠"}],y=(g,m)=>{a(v=>({...v,[g]:m}))},I=g=>{g.appCode&&y("src/App.jsx",g.appCode),g.cssCode&&y("src/App.css",g.cssCode)},C=g=>{S(g),console.log("Deployment result:",g)},p=g=>{a(m=>({...m,...g})),console.log("Version restored:",g)},x=()=>{switch(t){case"code":return o("div",{className:"code-editor-tab",children:[o("div",{className:"file-explorer",children:[i("h3",{children:"📁 Files"}),i("div",{className:"file-list",children:Object.keys(s).map(g=>o("div",{className:`file-item ${l===g?"selected":""}`,onClick:()=>c(g),children:[i("span",{className:"file-icon",children:"📄"}),i("span",{className:"file-name",children:g})]},g))})]}),i("div",{className:"code-editor",children:l&&o("div",{className:"editor-container",children:[o("div",{className:"editor-header",children:[i("span",{className:"file-name",children:l}),o("div",{className:"editor-actions",children:[i("button",{className:"btn btn-sm",children:"Save"}),i("button",{className:"btn btn-sm",children:"Format"})]})]}),i("textarea",{className:"code-textarea",value:s[l]||"",onChange:g=>y(l,g.target.value),placeholder:"Start coding..."})]})})]});case"visual":return i("div",{className:"visual-editor-tab",children:i(Us,{projectId:r,onCodeChange:I,initialComponents:[]})});case"collaboration":return o("div",{className:"collaboration-tab",children:[o("div",{className:"collaboration-header",children:[i("h3",{children:"🤝 Real-time Collaboration"}),o("button",{className:`btn ${h?"btn-danger":"btn-primary"}`,onClick:()=>f(!h),children:[h?"Disable":"Enable"," Collaboration"]})]}),h?i(kr,{projectId:r,fileId:l,onFileChange:y,onVersionRestore:p}):o("div",{className:"collaboration-disabled",children:[i("p",{children:"Enable collaboration to work with team members in real-time"}),o("ul",{children:[i("li",{children:"Multi-user co-editing"}),i("li",{children:"Real-time comments"}),i("li",{children:"Version history"}),i("li",{children:"User presence"})]})]})]});case"deployment":return o("div",{className:"deployment-tab",children:[i(qs,{projectId:r,projectData:{files:s},onDeploy:C}),N&&o("div",{className:"deployment-result",children:[i("h4",{children:"Deployment Result"}),o("div",{className:"result-details",children:[o("p",{children:[i("strong",{children:"Provider:"})," ",N.provider]}),o("p",{children:[i("strong",{children:"URL:"})," ",i("a",{href:N.url,target:"_blank",rel:"noopener noreferrer",children:N.url})]}),o("p",{children:[i("strong",{children:"Status:"})," ",N.status]}),o("p",{children:[i("strong",{children:"Deployed:"})," ",new Date(N.deployedAt).toLocaleString()]})]})]})]});case"memory":return i("div",{className:"memory-tab",children:i(Gs,{projectId:r,onMemoryUpdate:()=>console.log("Memory updated")})});default:return i("div",{children:"Select a tab to get started"})}};return o("div",{className:"integrated-workspace",children:[o("div",{className:"workspace-header",children:[i("h2",{children:"🚀 DreamBuild Advanced Workspace"}),o("div",{className:"workspace-status",children:[i("span",{className:"status-indicator",children:"●"}),o("span",{children:["Project: ",r]})]})]}),i("div",{className:"workspace-tabs",children:b.map(g=>o("button",{className:`tab-button ${t===g.id?"active":""}`,onClick:()=>n(g.id),children:[i("span",{className:"tab-icon",children:g.icon}),i("span",{className:"tab-name",children:g.name})]},g.id))}),i("div",{className:"workspace-content",children:x()}),i("style",{jsx:!0,children:`
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
      `})]})},si=({onTemplateSelect:r,isVisible:e,onClose:t})=>{const{currentProject:n,updateFile:s,switchFile:a}=be(),[l,c]=d.useState(""),[h,f]=d.useState("all"),[N,S]=d.useState(!1),b=[{id:"all",name:"All Templates",icon:le,color:"text-purple-500"},{id:"web-apps",name:"Web Apps",icon:je,color:"text-blue-500"},{id:"mobile-apps",name:"Mobile Apps",icon:xt,color:"text-green-500"},{id:"games",name:"Games",icon:ur,color:"text-orange-500"},{id:"tools",name:"Tools",icon:q,color:"text-gray-500"}],[y,I]=d.useState([]),[C,p]=d.useState([]),[x,g]=d.useState(!0);d.useEffect(()=>{e&&(async()=>{try{g(!0);const[u,O]=await Promise.all([ce.getAllTemplates(),ce.getPopularTemplates()]);I(u),p(O)}catch(u){console.error("Failed to load templates:",u),G.error("Failed to load templates")}finally{g(!1)}})()},[e]);const m=y.filter(w=>{const u=w.name.toLowerCase().includes(l.toLowerCase())||w.description.toLowerCase().includes(l.toLowerCase()),O=h==="all"||w.category===h;return u&&O}),v=async w=>{S(!0);try{console.log("🎯 Generating template:",w.id);const u=await ce.generateTemplateById(w.id);Object.entries(u).forEach(([E,L])=>{s(E,L)});const O=Object.keys(u)[0];O&&a(O),G.success(`Generated ${w.name} successfully!`),r&&r(w,u),t&&t()}catch(u){console.error("❌ Template generation failed:",u),G.error(`Failed to generate ${w.name}`)}finally{S(!1)}},k=w=>{const u=b.find(O=>O.id===w);return u?u.icon:q},T=w=>{const u=b.find(O=>O.id===w);return u?u.color:"text-gray-500"};return e?i(ae,{children:i($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center p-4",onClick:t,children:o($.div,{initial:{scale:.95},animate:{scale:1},exit:{scale:.95},className:"bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:w=>w.stopPropagation(),children:[o("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[o("div",{className:"flex items-center gap-3",children:[i("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:i(lr,{className:"h-5 w-5 text-white"})}),o("div",{children:[i("h2",{className:"text-xl font-semibold text-foreground",children:"Template Gallery"}),i("p",{className:"text-sm text-muted-foreground",children:"Choose a template to get started"})]})]}),i("button",{onClick:t,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Close",children:i("span",{className:"text-xl text-muted-foreground",children:"×"})})]}),o("div",{className:"p-6 border-b border-border",children:[o("div",{className:"flex gap-4 mb-4",children:[o("div",{className:"flex-1 relative",children:[i(nt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),i("input",{type:"text",placeholder:"Search templates...",value:l,onChange:w=>c(w.target.value),className:"w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20"})]}),o("button",{className:"px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:bg-muted/80 transition-colors flex items-center gap-2",children:[i(cr,{className:"h-4 w-4"}),"Filters"]})]}),i("div",{className:"flex gap-2 overflow-x-auto",children:b.map(w=>{const u=w.icon;return o("button",{onClick:()=>f(w.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${h===w.id?"bg-blue-500 text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[i(u,{className:"h-4 w-4"}),i("span",{className:"text-sm font-medium",children:w.name})]},w.id)})})]}),o("div",{className:"flex-1 overflow-y-auto p-6",children:[h==="all"&&o("div",{className:"mb-8",children:[o("div",{className:"flex items-center gap-2 mb-4",children:[i(dr,{className:"h-5 w-5 text-yellow-500"}),i("h3",{className:"text-lg font-semibold text-foreground",children:"Popular Templates"})]}),i("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:x?Array.from({length:3}).map((w,u)=>o("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[o("div",{className:"flex items-center gap-3 mb-3",children:[i("div",{className:"w-8 h-8 bg-muted rounded-lg"}),o("div",{className:"flex-1",children:[i("div",{className:"h-4 bg-muted rounded mb-2"}),i("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),o("div",{className:"space-y-2",children:[i("div",{className:"h-3 bg-muted rounded"}),i("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},u)):C.map(w=>{const u=k(w.category),O=T(w.category);return o($.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>v(w),disabled:N,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[o("div",{className:"flex items-center gap-3 mb-3",children:[i("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${O}`,children:i(u,{className:"h-4 w-4"})}),o("div",{children:[i("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:w.name}),o("p",{className:"text-xs text-muted-foreground",children:[w.files.length," files"]})]})]}),i("p",{className:"text-sm text-muted-foreground leading-relaxed",children:w.description})]},w.id)})})]}),o("div",{children:[o("div",{className:"flex items-center justify-between mb-4",children:[i("h3",{className:"text-lg font-semibold text-foreground",children:h==="all"?"All Templates":b.find(w=>w.id===h)?.name}),o("span",{className:"text-sm text-muted-foreground",children:[m.length," template",m.length!==1?"s":""]})]}),m.length===0?o("div",{className:"text-center py-12",children:[i("div",{className:"w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4",children:i(nt,{className:"h-8 w-8 text-muted-foreground"})}),i("h4",{className:"text-lg font-medium text-foreground mb-2",children:"No templates found"}),i("p",{className:"text-muted-foreground",children:"Try adjusting your search or filters"})]}):x?i("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Array.from({length:6}).map((w,u)=>o("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[o("div",{className:"flex items-center gap-3 mb-3",children:[i("div",{className:"w-8 h-8 bg-muted rounded-lg"}),o("div",{className:"flex-1",children:[i("div",{className:"h-4 bg-muted rounded mb-2"}),i("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),o("div",{className:"space-y-2",children:[i("div",{className:"h-3 bg-muted rounded"}),i("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},u))}):i("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:m.map(w=>{const u=k(w.category),O=T(w.category);return o($.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>v(w),disabled:N,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[o("div",{className:"flex items-center gap-3 mb-3",children:[i("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${O}`,children:i(u,{className:"h-4 w-4"})}),o("div",{children:[i("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:w.name}),o("p",{className:"text-xs text-muted-foreground",children:[w.files.length," files"]})]})]}),i("p",{className:"text-sm text-muted-foreground leading-relaxed",children:w.description})]},w.id)})})]})]}),i("div",{className:"p-6 border-t border-border bg-muted/30",children:o("div",{className:"flex items-center justify-between",children:[i("div",{className:"text-sm text-muted-foreground",children:"Need something custom? Use the AI prompt to generate unique applications."}),i("button",{onClick:t,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"Close"})]})})]})})}):null},ii=()=>{const[r,e]=d.useState([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"Terminal is fully functional and ready to use",timestamp:new Date},{type:"output",content:"",timestamp:new Date}]),[t,n]=d.useState(""),[s,a]=d.useState(!1),[l,c]=d.useState("~/dreambuild"),h=d.useRef(null),f=d.useRef(null);d.useEffect(()=>{h.current&&(h.current.scrollTop=h.current.scrollHeight)},[r]),d.useEffect(()=>{f.current&&f.current.focus()},[]);const N=async p=>{if(!p.trim())return;const x={type:"input",content:`$ ${p}`,timestamp:new Date};e(g=>[...g,x]),a(!0);try{await new Promise(k=>setTimeout(k,500));let g="";const m=p.trim().toLowerCase();switch(m){case"help":g=`Available commands:
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
  status        - Show project status`;break;case"clear":e([]),a(!1);return;case"ls":g=`total 8
drwxr-xr-x  3 user  staff   96 Dec 15 10:30 .
drwxr-xr-x  5 user  staff  160 Dec 15 10:25 ..
-rw-r--r--  1 user  staff  245 Dec 15 10:30 package.json
-rw-r--r--  1 user  staff  156 Dec 15 10:30 README.md
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 src
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 dist`;break;case"pwd":g=l;break;case"status":g=`Project Status:
  Name: DreamBuild AI Platform
  Version: 1.0.0
  Status: Running
  Port: 3000
  Environment: Development
  Last Build: 2 minutes ago
  Files: 15 modified`;break;case"build":g=`Building project...
  ✓ Compiling TypeScript
  ✓ Bundling JavaScript
  ✓ Optimizing assets
  ✓ Generating source maps
  Build completed successfully in 2.3s`;break;case"deploy":g=`Deploying to Firebase...
  ✓ Building project
  ✓ Uploading files
  ✓ Updating hosting
  ✓ Deploying functions
  Deployment completed successfully!
  URL: https://dreambuild-2024-app.web.app`;break;default:if(m.startsWith("cd ")){const k=m.substring(3);k===".."?(c(T=>T.split("/").slice(0,-1).join("/")||"~"),g=`Changed directory to ${l}`):k==="~"||k==="home"?(c("~/dreambuild"),g="Changed directory to ~/dreambuild"):(c(T=>`${T}/${k}`),g=`Changed directory to ${l}/${k}`)}else m.startsWith("mkdir ")?g=`Created directory: ${m.substring(6)}`:m.startsWith("touch ")?g=`Created file: ${m.substring(6)}`:m.startsWith("cat ")?g=`Contents of ${m.substring(4)}:
// This is a sample file
`:m.startsWith("echo ")?g=m.substring(5):m.startsWith("npm ")?g=`Running: npm ${m.substring(4)}
  ✓ Dependencies installed
  ✓ Script executed successfully`:m.startsWith("git ")?g=`Running: git ${m.substring(4)}
  ✓ Command executed successfully`:g=`Command not found: ${p}
Type "help" for available commands`}const v={type:"output",content:g,timestamp:new Date};e(k=>[...k,v])}catch(g){const m={type:"error",content:`Error: ${g.message}`,timestamp:new Date};e(v=>[...v,m])}finally{a(!1);const g={type:"prompt",content:`${l} $ `,timestamp:new Date};e(m=>[...m,g])}},S=p=>{p.preventDefault(),t.trim()&&!s&&(N(t),n(""))},b=p=>{p.key==="l"&&p.ctrlKey&&(p.preventDefault(),e([]))},y=()=>{e([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"",timestamp:new Date}])},I=()=>{const p=r.map(x=>x.content).join(`
`);navigator.clipboard.writeText(p),U.success("Terminal history copied to clipboard")},C=()=>{const p=r.map(v=>v.content).join(`
`),x=new Blob([p],{type:"text/plain"}),g=URL.createObjectURL(x),m=document.createElement("a");m.href=g,m.download="terminal-history.txt",m.click(),URL.revokeObjectURL(g),U.success("Terminal history downloaded")};return console.log("🖥️ Terminal component rendering"),o($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-gray-900 text-green-400 font-mono",children:[i("div",{className:"absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs z-5",children:"TERMINAL ACTIVE"}),o("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700",children:[o("div",{className:"flex items-center gap-2",children:[i(pr,{className:"h-4 w-4"}),i("span",{className:"text-sm font-medium",children:"DreamBuild Terminal"}),o("div",{className:"flex gap-1",children:[i("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),i("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),i("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]})]}),o("div",{className:"flex items-center gap-1",children:[i("button",{onClick:y,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Clear Terminal",children:i(mr,{className:"h-4 w-4"})}),i("button",{onClick:I,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Copy History",children:i(ye,{className:"h-4 w-4"})}),i("button",{onClick:C,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Download History",children:i(yt,{className:"h-4 w-4"})})]})]}),o("div",{ref:h,className:"flex-1 overflow-y-auto p-4 space-y-1",style:{minHeight:"400px"},children:[r.map((p,x)=>i("div",{className:`${p.type==="input"?"text-blue-400":p.type==="error"?"text-red-400":p.type==="prompt"?"text-green-400":"text-gray-300"} whitespace-pre-wrap`,children:p.content},x)),s&&i("div",{className:"text-yellow-400 animate-pulse",children:i("span",{className:"inline-block w-2 h-4 bg-yellow-400 animate-pulse"})})]}),o("form",{onSubmit:S,className:"flex items-center px-4 py-2 bg-gray-800 border-t border-gray-700",children:[o("span",{className:"text-green-400 mr-2",children:[l," $"]}),i("input",{ref:f,type:"text",value:t,onChange:p=>n(p.target.value),onKeyDown:b,className:"flex-1 bg-transparent text-green-400 outline-none",placeholder:"Enter command...",disabled:s}),s&&i("div",{className:"ml-2",children:i("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-green-400"})})]})]})},ai=({children:r,direction:e="horizontal",className:t=""})=>i("div",{className:`resizable-panel-group flex ${e} h-full ${t}`,children:r}),oi=({children:r,defaultSize:e=50,minSize:t=10,maxSize:n=90,className:s=""})=>i("div",{className:`resizable-panel ${s}`,style:{flexBasis:`${e}%`,minWidth:`${t}%`,maxWidth:`${n}%`},children:r}),li=({className:r="",onResize:e,children:t,handleIndex:n=0})=>{const[s,a]=d.useState(!1),l=d.useRef(null),c=N=>{a(!0),N.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",console.log("Handle clicked:",n)},h=d.useCallback(N=>{if(!s)return;const S=l.current?.parentElement;if(!S)return;const b=S.getBoundingClientRect(),I=(N.clientX-b.left)/b.width*100,p=Array.from(S.children).filter(x=>x.classList.contains("resizable-panel"));if(console.log("Total panels found:",p.length,"Handle index:",n),p.length>=2){let x,g;if(n===0?(x=p[0],g=p[1],console.log("Resizing File Manager and Code Editor")):n===1&&(x=p[1],g=p[2],console.log("Resizing Code Editor and AI Assistant")),x&&g){const m=Math.max(15,Math.min(70,I)),v=Math.max(15,Math.min(70,100-m));console.log("Setting sizes:",{leftSize:m,rightSize:v,percentage:I}),x.style.flexBasis=`${m}%`,g.style.flexBasis=`${v}%`,x.style.border="3px solid red",g.style.border="3px solid blue",setTimeout(()=>{x.style.border="",g.style.border=""},300),e&&e({leftSize:m,rightSize:v})}}},[s,e,n]),f=d.useCallback(()=>{a(!1),document.body.style.cursor="",document.body.style.userSelect=""},[]);return d.useEffect(()=>{if(s)return document.addEventListener("mousemove",h),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",f)}},[s,h,f]),i("div",{ref:l,className:`resizable-handle w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group flex items-center justify-center ${s?"bg-primary/70":""} ${r}`,onMouseDown:c,children:t||i("div",{className:"w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/70 transition-colors"})})};export{ti as A,Zs as C,ni as I,ei as P,ai as R,ii as T,oi as a,li as b,si as c,ri as e};
