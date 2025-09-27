import{l as f,j as n,h as y,q as l,p as d,w as g,t as b,v as u,y as h,x as v,z as m}from"./firebase-HQh6JyMG.js";import{d as w}from"./index-Dzu1tn1s.js";class F{constructor(){this.collectionName="apps",this.baseUrl="https://dreambuild-2024-app.web.app/apps",this.db=w}generateAppId(t="Generated Project"){const e=Date.now(),r=Math.random().toString(36).substring(2,8),s=Math.floor(Math.random()*1e3);return`${t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").substring(0,20)}-${e}-${r}-${s}`}async deployApp(t,e="anonymous"){try{console.log("🔥 FirebaseAppService: Starting deployment"),console.log("🔥 App data:",t);const r=t.name||"Generated Project",s=this.generateAppId(r),o=`${this.baseUrl}/${s}`;console.log("🔥 Generated app ID:",s),console.log("🔥 Generated app URL:",o);let i=o.replace(/[^a-zA-Z0-9\-:\/\.]/g,"");if(i=i.replace(/App$/,""),i.includes("/apps/")){const c=i.split("/apps/");if(c.length===2){const A=c[1].replace(/[^a-zA-Z0-9\-]/g,"");i=`${c[0]}/apps/${A}`}}i.match(/^https:\/\/dreambuild-2024-app\.web\.app\/apps\/[a-zA-Z0-9\-]+$/)||(i=`${this.baseUrl}/${s}`),console.log("🚀 FirebaseAppService: App Name:",r),console.log("🚀 FirebaseAppService: Base URL:",this.baseUrl),console.log("🚀 FirebaseAppService: Generated App ID:",s),console.log("🚀 FirebaseAppService: Constructed URL:",o),console.log("🚀 FirebaseAppService: Clean URL:",i),console.log("🚀 FirebaseAppService: Deploying app with ID:",s),console.log("🚀 FirebaseAppService: App URL:",o),console.log("🚀 FirebaseAppService: App data:",t);const a=new Date,p={id:s,name:r,url:i,files:t.files||{},userId:e,isPublic:t.isPublic||!1,createdAt:a,updatedAt:a,status:"deployed",preview:t.preview||{},dependencies:t.dependencies||[],buildInstructions:t.buildInstructions||[],views:0,likes:0,tags:t.tags||[]};console.log("🚀 FirebaseAppService: App info created:",{name:p.name,createdAt:p.createdAt,createdAtType:typeof p.createdAt}),console.log("🚀 FirebaseAppService: App name:",r),console.log("🚀 FirebaseAppService: App ID:",s),console.log("🚀 FirebaseAppService: App URL:",o),console.log("🚀 FirebaseAppService: Attempting to store in Firestore..."),console.log("🚀 FirebaseAppService: Collection name:",this.collectionName),console.log("🚀 FirebaseAppService: App ID:",s);try{await f(n(this.db,this.collectionName,s),p),console.log(`🚀 App deployed to Firestore: ${s} at ${o}`),console.log("🚀 FirebaseAppService: Successfully stored app in Firestore")}catch(c){throw console.error("❌ Firestore setDoc failed:",c),c}return{success:!0,appId:s,url:i,appInfo:p}}catch(r){return console.error("❌ Firestore deployment failed:",r),{success:!1,error:r.message}}}async getApp(t){try{console.log("🔍 FirebaseAppService: Getting app with ID:",t);const e=await y(n(this.db,this.collectionName,t));if(e.exists()){const r={id:e.id,...e.data()};return console.log("🔍 FirebaseAppService: App found:",r),r}return console.log("🔍 FirebaseAppService: App not found in Firestore"),null}catch(e){return console.error("❌ Error getting app:",e),null}}async getPublicApps(t=20){try{console.log("🔍 FirebaseAppService: Getting public apps...");const e=l(d(this.db,this.collectionName),g("isPublic","==",!0),b("createdAt","desc")),s=(await u(e)).docs.map(o=>({id:o.id,...o.data()})).slice(0,t);return console.log("✅ FirebaseAppService: Retrieved",s.length,"public apps"),s}catch(e){return console.error("❌ Error getting public apps:",e),console.log("🔄 FirebaseAppService: Returning empty array as fallback"),[{id:"demo-app-1",name:"Demo Calculator",description:"A simple calculator app",url:"https://dreambuild-2024-app.web.app/apps/demo-calculator",isPublic:!0,createdAt:new Date,views:10,likes:2,tags:["demo","calculator"]}]}}async getUserApps(t){try{const e=l(d(this.db,this.collectionName),g("userId","==",t),b("createdAt","desc"));return(await u(e)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("❌ Error getting user apps:",e),[]}}async updateApp(t,e){try{const r=n(this.db,this.collectionName,t);return await h(r,{...e,updatedAt:new Date}),!0}catch(r){return console.error("❌ Error updating app:",r),!1}}async deleteApp(t){try{return await v(n(this.db,this.collectionName,t)),!0}catch(e){return console.error("❌ Error deleting app:",e),!1}}async incrementViews(t){try{const e=n(this.db,this.collectionName,t);return await h(e,{views:m(1)}),!0}catch(e){return console.error("❌ Error incrementing views:",e),!1}}async toggleLike(t,e){try{const r=n(this.db,this.collectionName,t);return await h(r,{likes:m(1)}),!0}catch(r){return console.error("❌ Error toggling like:",r),!1}}async searchApps(t,e=20){try{const r=l(d(this.db,this.collectionName),g("isPublic","==",!0),b("createdAt","desc"));return(await u(r)).docs.map(a=>({id:a.id,...a.data()})).filter(a=>a.name.toLowerCase().includes(t.toLowerCase())||a.tags.some(p=>p.toLowerCase().includes(t.toLowerCase()))).slice(0,e)}catch(r){return console.error("❌ Error searching apps:",r),[]}}async getAppStats(){try{console.log("📊 FirebaseAppService: Getting app stats...");const t=l(d(this.db,this.collectionName),g("isPublic","==",!0)),r=(await u(t)).docs.map(s=>s.data());return console.log("✅ FirebaseAppService: Retrieved",r.length,"public apps for stats"),{totalApps:r.length,publicApps:r.length,totalViews:r.reduce((s,o)=>s+(o.views||0),0),totalLikes:r.reduce((s,o)=>s+(o.likes||0),0)}}catch(t){return console.error("❌ Error getting app stats:",t),console.log("🔄 FirebaseAppService: Returning default stats due to error"),{totalApps:0,publicApps:0,totalViews:0,totalLikes:0}}}generateAppHTML(t){const{files:e,name:r}=t;console.log("🔍 FirebaseAppService: generateAppHTML called"),console.log("🔍 FirebaseAppService: appData:",t),console.log("🔍 FirebaseAppService: files keys:",Object.keys(e)),console.log("🔍 FirebaseAppService: files content:",e);const s=e["index.html"]||e["app.html"]||e["main.html"],o=e["style.css"]||e["styles.css"]||e["app.css"],i=e["script.js"]||e["app.js"]||e["main.js"];if(console.log("🔍 FirebaseAppService: htmlFile found:",!!s),console.log("🔍 FirebaseAppService: cssFile found:",!!o),console.log("🔍 FirebaseAppService: jsFile found:",!!i),!s)return console.log("🔍 FirebaseAppService: No HTML file found, using fallback"),this.generateFallbackHTML(r);let a=s;return o&&(a=a.replace("</head>",`<style>${o}</style></head>`)),i&&(a=a.replace("</body>",`<script>${i}<\/script></body>`)),a=a.replace("</body>",`
      <div style="position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.8); color: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; z-index: 10;">
        Built with <a href="https://dreambuild-2024-app.web.app" style="color: #60a5fa;">DreamBuild</a>
        <br><small>App: ${r}</small>
      </div>
    </body>`),a}generateFallbackHTML(t){return`
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
    `}}const L=new F;export{L as f};
