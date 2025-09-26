import{a as g}from"./utils-vendor-ngrFHoWO.js";class v{constructor(){this.baseURL="https://api.github.com",this.trendingRepos=[],this.templateCache=new Map,this.cacheExpiry=30*60*1e3,this.isLoading=!1,console.log("🔗 GitHub Template Service initialized")}async getTrendingTemplates(e="javascript",t="stars",a="desc"){if(this.isLoading)return this.trendingRepos;this.isLoading=!0;try{console.log("📡 Fetching trending GitHub templates...");const r=["stars:>100 topic:todo-app","stars:>100 topic:calculator","stars:>100 topic:weather-app","stars:>100 topic:game","stars:>100 topic:portfolio","stars:>100 topic:blog","stars:>100 topic:landing-page","stars:>50 topic:react-tutorial","stars:>50 topic:javascript-project","stars:>50 topic:html-css"],i=[];for(const o of r)try{console.log(`📈 Fetching trending repositories: ${o}`);const c=await fetch(`${this.baseURL}/search/repositories?q=${encodeURIComponent(o)}&sort=stars&order=desc&per_page=20`,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"DreamBuild-Template-Service"}});if(!c.ok)if(console.error(`GitHub API error for query "${o}": ${c.status}`),c.status===403||c.status===429){console.log("⚠️ Rate limit hit, returning cached/fallback templates");const m=this.getFallbackTemplates();return this.trendingRepos=m,m}else if(c.status===422){console.log(`⚠️ Invalid query "${o}", skipping...`);continue}else{console.log(`⚠️ API error ${c.status} for query "${o}", skipping...`);continue}const u=await c.json();if(u.items&&u.items.length>0){console.log(`📈 Found ${u.items.length} trending template repositories for: ${o}`);const m=u.items.filter(y=>this.isTemplateRepository(y));i.push(...m)}await new Promise(m=>setTimeout(m,500))}catch(c){console.error(`Error fetching templates for ${o}:`,c);continue}const s=this.deduplicateRepos(i),d=this.filterTemplateRepos(s);if(d.length<10){console.log("📦 Adding fallback templates due to limited API results");const o=this.getFallbackTemplates();d.push(...o)}return this.trendingRepos=d.slice(0,25),console.log(`✅ Found ${this.trendingRepos.length} template repositories`),this.trendingRepos}catch(r){return console.error("❌ Failed to fetch trending templates:",r),this.getFallbackTemplates()}finally{this.isLoading=!1}}async getRepositoryTemplate(e){const t=`repo_${e.id}`;if(this.templateCache.has(t)){const a=this.templateCache.get(t);if(Date.now()-a.timestamp<this.cacheExpiry)return a.data}try{console.log(`📦 Processing template: ${e.full_name}`);const a=await this.getRepositoryContents(e.full_name),r=await this.parseRepositoryTemplate(e,a);return this.templateCache.set(t,{data:r,timestamp:Date.now()}),r}catch(a){return console.error(`❌ Failed to process template ${e.full_name}:`,a),null}}async getRepositoryContents(e,t=""){try{const a=await fetch(`${this.baseURL}/repos/${e}/contents/${t}`);if(!a.ok)throw new Error(`GitHub API error: ${a.status}`);return await a.json()}catch(a){return console.error(`Failed to fetch contents for ${e}:`,a),[]}}async parseRepositoryTemplate(e,t){const a=this.transformRepositoryToTemplate(e),r=this.extractKeyFiles(t);return a.files=r,a.fileCount=r.length,a.preview=e.owner?.avatar_url||"/api/placeholder/400/300",a}detectTemplateType(e,t){const a=e.name.toLowerCase(),r=(e.description||"").toLowerCase(),i=(e.topics||[]).join(" ").toLowerCase(),s=`${a} ${r} ${i}`;return s.includes("react-native")||s.includes("expo")||s.includes("flutter")||s.includes("mobile")?"mobile":s.includes("react")||s.includes("nextjs")||s.includes("next.js")||s.includes("gatsby")?"react":s.includes("vue")||s.includes("nuxt")||s.includes("quasar")?"vue":s.includes("angular")||s.includes("ionic")?"angular":s.includes("svelte")||s.includes("sveltekit")?"svelte":s.includes("node")||s.includes("express")||s.includes("koa")||s.includes("fastify")?"nodejs":s.includes("python")||s.includes("django")||s.includes("flask")||s.includes("fastapi")?"python":s.includes("php")||s.includes("laravel")||s.includes("symfony")||s.includes("codeigniter")?"php":s.includes("go")||s.includes("golang")||s.includes("gin")?"go":s.includes("rust")||s.includes("actix")||s.includes("rocket")?"rust":s.includes("java")||s.includes("spring")||s.includes("maven")?"java":s.includes("api")||s.includes("rest")||s.includes("graphql")||s.includes("microservice")?"api":s.includes("dashboard")||s.includes("admin")||s.includes("panel")?"dashboard":s.includes("ecommerce")||s.includes("e-commerce")||s.includes("shop")||s.includes("store")?"ecommerce":s.includes("blog")||s.includes("cms")||s.includes("content")?"blog":s.includes("portfolio")||s.includes("personal")||s.includes("resume")?"portfolio":s.includes("landing")||s.includes("marketing")||s.includes("promo")?"landing":s.includes("cms")||s.includes("content-management")||s.includes("headless")?"cms":s.includes("ui")||s.includes("ux")||s.includes("design-system")||s.includes("component-library")?"ui":s.includes("test")||s.includes("testing")||s.includes("e2e")||s.includes("unit-test")?"testing":s.includes("devops")||s.includes("ci-cd")||s.includes("docker")||s.includes("kubernetes")?"devops":s.includes("database")||s.includes("sql")||s.includes("nosql")||s.includes("mongodb")||s.includes("postgresql")?"database":s.includes("auth")||s.includes("authentication")||s.includes("jwt")||s.includes("oauth")?"auth":s.includes("payment")||s.includes("stripe")||s.includes("paypal")||s.includes("billing")?"payment":s.includes("analytics")||s.includes("tracking")||s.includes("metrics")||s.includes("monitoring")?"analytics":s.includes("documentation")||s.includes("docs")||s.includes("readme")||s.includes("guide")?"documentation":"web"}extractKeyFiles(e){const t=[],a=["package.json","package-lock.json","yarn.lock","index.html","index.js","index.jsx","index.ts","index.tsx","App.js","App.jsx","App.ts","App.tsx","main.js","main.ts","main.jsx","main.tsx","src/","components/","pages/","views/","README.md","readme.md","docker-compose.yml","Dockerfile","tsconfig.json","webpack.config.js","vite.config.js","tailwind.config.js","postcss.config.js"];return e.forEach(r=>{a.some(i=>r.name.toLowerCase()===i.toLowerCase()||r.name.toLowerCase().startsWith(i.toLowerCase()))&&t.push({name:r.name,path:r.path,type:r.type,size:r.size,downloadUrl:r.download_url})}),t.slice(0,20)}generateTemplateName(e){return e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ").replace(/template|starter|boilerplate|example|demo/gi,"").trim()}categorizeTemplate(e,t){return{react:"web-apps",vue:"web-apps",angular:"web-apps",svelte:"web-apps",nodejs:"web-apps",python:"web-apps",php:"web-apps",go:"web-apps",rust:"web-apps",java:"web-apps",mobile:"mobile-apps",api:"apis",dashboard:"dashboards",ecommerce:"e-commerce",blog:"portfolios",portfolio:"portfolios",landing:"landing-pages",cms:"web-apps",ui:"web-apps",testing:"web-apps",devops:"apis",database:"apis",auth:"apis",payment:"apis",analytics:"dashboards",documentation:"portfolios",web:"web-apps"}[e]||"web-apps"}generateTags(e,t){const a=[t];e.language&&a.push(e.language.toLowerCase()),e.topics&&a.push(...e.topics.slice(0,3));const r={react:["react","javascript"],vue:["vue","javascript"],angular:["angular","typescript"],nodejs:["nodejs","express"],python:["python","django"],mobile:["react-native","mobile"]};return r[t]&&a.push(...r[t]),[...new Set(a)].slice(0,5)}deduplicateRepos(e){const t=new Set;return e.filter(a=>t.has(a.id)?!1:(t.add(a.id),!0))}isTemplateRepository(e){const t=e.name.toLowerCase(),a=(e.description||"").toLowerCase(),r=(e.topics||[]).join(" ").toLowerCase(),s=["todo-app","calculator","weather-app","recipe-app","expense-tracker","note-taking","bookmark-manager","task-manager","habit-tracker","budget-planner","calendar-app","contact-book","photo-gallery","music-player","video-player","chat-app","forum","blog","portfolio","landing-page","online-store","restaurant-menu","event-planner","booking-system","survey-form","quiz-app","game","puzzle","memory-game","tic-tac-toe","snake-game","pong","breakout","maze","word-search","sudoku","hangman","trivia","flashcards","timer","stopwatch","pomodoro","countdown","random-generator","password-generator","color-picker","unit-converter","currency-converter","tip-calculator","bmi-calculator","age-calculator","date-calculator","percentage-calculator","loan-calculator","mortgage-calculator","investment-calculator","tax-calculator","grade-calculator","gpa-calculator","starter","template","example","demo","sample","tutorial","beginner","simple","basic"].some(u=>t.includes(u)||a.includes(u)||r.includes(u)),d=e.stargazers_count>=10,o=new Date(e.updated_at)>new Date("2019-01-01"),c=e.description&&e.description.length>10;return s&&d&&o&&c}filterTemplateRepos(e){return e.filter(t=>this.isTemplateRepository(t))}async searchTemplates(e,t="all"){return(await this.getTrendingTemplates()).filter(r=>{const i=r.name.toLowerCase().includes(e.toLowerCase())||r.description.toLowerCase().includes(e.toLowerCase())||r.tags.some(d=>d.toLowerCase().includes(e.toLowerCase())),s=t==="all"||r.category===t;return i&&s})}async getTemplateById(e){const a=(await this.getTrendingTemplates()).find(r=>r.id===e);return a?await this.getRepositoryTemplate(a):null}async getTemplatesByCategory(e){return(await this.getTrendingTemplates()).filter(a=>a.category===e)}async getPopularTemplates(e=10){return(await this.getTrendingTemplates()).sort((a,r)=>r.popularity-a.popularity).slice(0,e)}getFallbackTemplates(){return[{id:"fallback-todo-1",name:"Simple Todo App",description:"A clean and simple todo application with add, edit, and delete functionality.",category:"todo-app",templateType:"web",difficulty:"beginner",estimatedTime:"2-4 hours",tags:["javascript","html","css","todo","task-management"],popularity:85,stars:150,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/simple-todo-app",features:["Add tasks","Mark complete","Delete tasks","Local storage"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999001,fullName:"example/simple-todo-app",htmlUrl:"https://github.com/example/simple-todo-app",cloneUrl:"https://github.com/example/simple-todo-app.git",language:"JavaScript",stargazersCount:150,forksCount:25,topics:["todo","javascript","html","css"],owner:"example"}},{id:"fallback-calculator-1",name:"Basic Calculator",description:"A functional calculator with basic arithmetic operations.",category:"calculator",templateType:"web",difficulty:"beginner",estimatedTime:"1-2 hours",tags:["javascript","html","css","calculator","math"],popularity:90,stars:200,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/basic-calculator",features:["Basic operations","Clear function","Responsive design"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999002,fullName:"example/basic-calculator",htmlUrl:"https://github.com/example/basic-calculator",cloneUrl:"https://github.com/example/basic-calculator.git",language:"JavaScript",stargazersCount:200,forksCount:30,topics:["calculator","javascript","math"],owner:"example"}},{id:"fallback-weather-1",name:"Weather Dashboard",description:"A weather app that displays current conditions and forecast.",category:"weather-app",templateType:"web",difficulty:"intermediate",estimatedTime:"3-5 hours",tags:["javascript","api","weather","dashboard"],popularity:75,stars:120,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/weather-dashboard",features:["Current weather","5-day forecast","Location search"],techStack:["HTML","CSS","JavaScript","Weather API"],isFallback:!0,githubData:{id:999003,fullName:"example/weather-dashboard",htmlUrl:"https://github.com/example/weather-dashboard",cloneUrl:"https://github.com/example/weather-dashboard.git",language:"JavaScript",stargazersCount:120,forksCount:20,topics:["weather","api","dashboard"],owner:"example"}},{id:"fallback-portfolio-1",name:"Personal Portfolio",description:"A modern, responsive portfolio website template.",category:"portfolio",templateType:"web",difficulty:"intermediate",estimatedTime:"4-6 hours",tags:["html","css","javascript","portfolio","responsive"],popularity:95,stars:300,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/personal-portfolio",features:["Responsive design","Project showcase","Contact form"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999004,fullName:"example/personal-portfolio",htmlUrl:"https://github.com/example/personal-portfolio",cloneUrl:"https://github.com/example/personal-portfolio.git",language:"HTML",stargazersCount:300,forksCount:50,topics:["portfolio","responsive","html","css"],owner:"example"}},{id:"fallback-game-1",name:"Snake Game",description:"Classic Snake game built with vanilla JavaScript.",category:"game",templateType:"web",difficulty:"intermediate",estimatedTime:"3-4 hours",tags:["javascript","game","canvas","snake"],popularity:80,stars:180,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/snake-game",features:["Keyboard controls","Score tracking","Game over screen"],techStack:["HTML","CSS","JavaScript","Canvas"],isFallback:!0,githubData:{id:999005,fullName:"example/snake-game",htmlUrl:"https://github.com/example/snake-game",cloneUrl:"https://github.com/example/snake-game.git",language:"JavaScript",stargazersCount:180,forksCount:35,topics:["game","snake","canvas","javascript"],owner:"example"}}]}transformRepositoryToTemplate(e,t="web"){return{id:`github_${e.id}`,name:this.generateTemplateName(e.name),description:e.description||`Template based on ${e.full_name}`,category:this.categorizeTemplate(this.detectTemplateType(e,[]),e),templateType:this.detectTemplateType(e,[]),difficulty:this.estimateDifficulty(e),estimatedTime:this.estimateTime(e),tags:this.generateTags(e,this.detectTemplateType(e,[])),popularity:Math.min(Math.floor(e.stargazers_count/100),100),stars:e.stargazers_count,lastUpdated:e.updated_at,createdAt:e.created_at,source:"github",repositoryUrl:e.html_url,features:this.extractFeatures(e),techStack:this.extractTechStack(e),githubData:{id:e.id,fullName:e.full_name,htmlUrl:e.html_url,cloneUrl:e.clone_url,language:e.language,stargazersCount:e.stargazers_count,forksCount:e.forks_count,topics:e.topics||[],owner:e.owner?.login}}}estimateDifficulty(e){return e.stargazers_count>500?"advanced":e.stargazers_count>100?"intermediate":"beginner"}estimateTime(e){const t=e.stargazers_count;return t>500?"6-8 hours":t>100?"3-5 hours":"1-3 hours"}extractFeatures(e){const t=[],a=e.name.toLowerCase(),r=(e.description||"").toLowerCase();return(a.includes("todo")||r.includes("todo"))&&t.push("Task management","Add/Edit tasks","Mark complete"),(a.includes("calculator")||r.includes("calculator"))&&t.push("Basic operations","Clear function"),(a.includes("weather")||r.includes("weather"))&&t.push("Current weather","Forecast","Location search"),(a.includes("portfolio")||r.includes("portfolio"))&&t.push("Project showcase","Responsive design","Contact form"),(a.includes("game")||r.includes("game"))&&t.push("Interactive gameplay","Score tracking"),t.length>0?t:["Modern design","Responsive layout"]}extractTechStack(e){const t=[];e.language&&t.push(e.language);const a=e.topics||[];return a.includes("react")&&t.push("React"),a.includes("vue")&&t.push("Vue"),a.includes("angular")&&t.push("Angular"),a.includes("html")&&t.push("HTML"),a.includes("css")&&t.push("CSS"),a.includes("javascript")&&t.push("JavaScript"),a.includes("typescript")&&t.push("TypeScript"),t.length>0?t:["HTML","CSS","JavaScript"]}clearCache(){this.templateCache.clear(),this.trendingRepos=[],console.log("🗑️ GitHub template cache cleared")}}const p=new v,f={"codellama-7b":{name:"CodeLlama 7B",type:"Code Generation",baseURL:"http://localhost:11434/api",model:"codellama:7b",description:"Fast and efficient code generation (7B parameters)",languages:["python","javascript","java","cpp","go","rust","php","ruby"],strengths:["speed","efficiency","general-purpose"],ram_required:"8GB"},auto:{name:"Auto Select",type:"Auto Selection",baseURL:"http://localhost:11434/api",model:"auto",description:"Automatically selects the best available model",languages:["all"],strengths:["smart-selection","availability"],ram_required:"variable"}},h={"web-apps":{name:"Web Applications",description:"Full-stack web applications",templates:[{id:"react-dashboard",name:"React Dashboard",description:"Modern React dashboard with charts and analytics",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"ecommerce-store",name:"E-commerce Store",description:"Complete online store with cart and checkout",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]}]},"mobile-apps":{name:"Mobile Applications",description:"React Native mobile applications",templates:[{id:"todo-app",name:"Todo App",description:"Simple todo application with React Native",category:"mobile-apps",files:["App.js","components/TodoItem.js","styles.js"]}]}};class w{constructor(){if(this.isHealthy=!1,this.modelHealth={},this.availableModels=Object.keys(f),this.baseURL="http://localhost:11434/api",this.isProduction=window.location.protocol==="https:",this.isLocalhost=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",this.isProduction&&!this.isLocalhost){console.log("🌐 Production environment detected - skipping local AI detection"),this.isHealthy=!1;return}console.log("🔍 Initializing local AI health monitoring..."),this.checkHealth(),setInterval(()=>{this.checkHealthQuiet()},3e4)}async checkHealth(){if(!(this.isProduction&&!this.isLocalhost))try{const e=await g.get(`${this.baseURL}/tags`,{timeout:3e3});if(e.status===200){const t=this.isHealthy;this.isHealthy=!0,t||console.log("✅ Local AI service is healthy");const a=e.data.models||[];this.modelHealth={},a.forEach(r=>{this.modelHealth[r.name]={isHealthy:!0,size:r.size,modified_at:r.modified_at}})}else{const t=this.isHealthy;this.isHealthy=!1,t&&console.log("⚠️ Local AI service is not responding")}}catch(e){const t=this.isHealthy;this.isHealthy=!1,e.code==="ERR_NETWORK"||e.message.includes("CORS")?t||console.log("🔒 Local AI not accessible (CORS/Network) - using cloud AI"):e.code==="ECONNREFUSED"?t||console.log("💻 Ollama not running locally - using cloud AI"):t||console.log("⚠️ Local AI service not available:",e.message)}}async checkHealthQuiet(){if(!(this.isProduction&&!this.isLocalhost))try{const e=await g.get(`${this.baseURL}/tags`,{timeout:3e3});if(e.status===200){const t=this.isHealthy;this.isHealthy=!0;const a=e.data.models||[];this.modelHealth={},a.forEach(r=>{this.modelHealth[r.name]={isHealthy:!0,size:r.size,modified_at:r.modified_at}})}else this.isHealthy=!1}catch{this.isHealthy=!1}}getAvailableModels(){return Object.values(f)}getHealthyModels(){return Object.keys(this.modelHealth).filter(e=>this.modelHealth[e].isHealthy)}getTemplateCategories(){return h}getTemplatesByCategory(e){return h[e]?.templates||[]}async getAllTemplates(){const e=[];Object.values(h).forEach(r=>{e.push(...r.templates)});const a=(await p.getTrendingTemplates()).map(r=>p.transformRepositoryToTemplate(r));return[...e,...a]}async searchTemplates(e){const t=[];Object.values(h).forEach(s=>{t.push(...s.templates)});const r=(await p.searchTemplates(e)).map(s=>p.transformRepositoryToTemplate(s));return[...t,...r].filter(s=>s.name.toLowerCase().includes(e.toLowerCase())||(s.description||"").toLowerCase().includes(e.toLowerCase()))}async getPopularTemplates(){const e=[];Object.values(h).forEach(i=>{e.push(...i.templates)});const a=(await p.getPopularTemplates(5)).map(i=>p.transformRepositoryToTemplate(i));return[...e,...a].sort((i,s)=>(s.popularity||0)-(i.popularity||0)).slice(0,10)}async generateTemplateById(e,t={}){if(e.startsWith("github_"))return await this.generateGitHubTemplate(e,t);const a=[];Object.values(h).forEach(i=>{a.push(...i.templates)});const r=a.find(i=>i.id===e);if(!r)throw new Error(`Template ${e} not found`);return this.createTemplateFiles(r,t)}async generateGitHubTemplate(e,t={}){try{console.log(`🚀 Generating GitHub template: ${e}`);const a=await p.getTemplateById(e);if(!a)throw new Error(`GitHub template ${e} not found`);const r=await this.createGitHubTemplateFiles(a,t);return console.log(`✅ Generated ${Object.keys(r).length} files from GitHub template`),r}catch(a){throw console.error(`❌ Failed to generate GitHub template ${e}:`,a),a}}async createGitHubTemplateFiles(e,t={}){const a={};try{const{githubData:r}=e;return a["README.md"]=`# ${e.name}

${e.description}

## GitHub Repository
- **Source**: [${r.fullName}](${r.htmlUrl})
- **Stars**: ${r.stargazersCount}
- **Language**: ${r.language||"JavaScript"}

## Getting Started

This template is based on the GitHub repository: ${r.fullName}

### Installation
\`\`\`bash
git clone ${r.cloneUrl}
cd ${r.fullName}
npm install
\`\`\`

### Development
\`\`\`bash
npm start
\`\`\`

## Template Information
- **Type**: ${e.templateType}
- **Category**: ${e.category}
- **Tags**: ${e.tags.join(", ")}
- **Files**: ${e.fileCount}

## Customization
You can customize this template by modifying the files or using the AI prompt to generate additional features.
`,a["package.json"]=this.createPackageJson(e,t),a[this.getMainFileName(e)]=this.createMainFile(e,t),(e.templateType==="react"||e.templateType==="vue"||e.templateType==="web")&&(a["index.html"]=this.createIndexHtml(e,t)),Object.entries(t).forEach(([i,s])=>{typeof s=="string"&&(a[i]=s)}),a}catch(r){throw console.error("Failed to create GitHub template files:",r),r}}createPackageJson(e,t={}){const a={name:e.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:e.description,main:this.getMainFileName(e),scripts:{start:"npm run dev",dev:this.getDevScript(e),build:this.getBuildScript(e),test:'echo "No tests specified" && exit 0'},keywords:e.tags,author:t.author||"DreamBuild User",license:"MIT",repository:{type:"git",url:e.githubData.cloneUrl}};return a.dependencies=this.getTemplateDependencies(e),a.devDependencies=this.getTemplateDevDependencies(e),JSON.stringify(a,null,2)}getMainFileName(e){return{react:"src/App.jsx",vue:"src/main.js",angular:"src/main.ts",nodejs:"index.js",python:"main.py",mobile:"App.js",web:"index.js"}[e.templateType]||"index.js"}getDevScript(e){return{react:"react-scripts start",vue:"vue-cli-service serve",angular:"ng serve",nodejs:"nodemon index.js",python:"python main.py",mobile:"expo start",web:"live-server"}[e.templateType]||"node index.js"}getBuildScript(e){return{react:"react-scripts build",vue:"vue-cli-service build",angular:"ng build",nodejs:'echo "No build step needed"',python:'echo "No build step needed"',mobile:"expo build",web:'echo "No build step needed"'}[e.templateType]||'echo "No build step needed"'}getTemplateDependencies(e){return{react:{react:"^18.0.0","react-dom":"^18.0.0"},vue:{vue:"^3.0.0"},angular:{"@angular/core":"^15.0.0","@angular/common":"^15.0.0"},svelte:{svelte:"^3.0.0"},nodejs:{express:"^4.18.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{"react-native":"^0.70.0",expo:"~47.0.0"},api:{express:"^4.18.0"},dashboard:{react:"^18.0.0","react-dom":"^18.0.0"},ecommerce:{react:"^18.0.0","react-dom":"^18.0.0"},blog:{next:"^13.0.0",react:"^18.0.0"},portfolio:{react:"^18.0.0","react-dom":"^18.0.0"},landing:{react:"^18.0.0","react-dom":"^18.0.0"},web:{}}[e.templateType]||{}}getTemplateDevDependencies(e){return{react:{"react-scripts":"5.0.1"},vue:{"@vue/cli-service":"^5.0.0"},angular:{"@angular/cli":"^15.0.0"},svelte:{vite:"^4.0.0"},nodejs:{nodemon:"^2.0.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{},api:{nodemon:"^2.0.0"},dashboard:{"react-scripts":"5.0.1"},ecommerce:{"react-scripts":"5.0.1"},blog:{next:"^13.0.0"},portfolio:{"react-scripts":"5.0.1"},landing:{"react-scripts":"5.0.1"},web:{"live-server":"^1.2.0"}}[e.templateType]||{}}createMainFile(e,t={}){const a={react:`import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>${e.name}</h1>
        <p>${e.description}</p>
        <p>
          Template based on: <a href="${e.githubData.htmlUrl}">${e.githubData.fullName}</a>
        </p>
      </header>
    </div>
  );
}

export default App;`,vue:`import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');`,angular:`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="app">
      <h1>${e.name}</h1>
      <p>${e.description}</p>
      <p>Template based on: <a href="${e.githubData.htmlUrl}">${e.githubData.fullName}</a></p>
    </div>
  \`,
  styles: []
})
export class AppComponent {
  title = '${e.name}';
}`,svelte:`<script>
  export let name = '${e.name}';
<\/script>

<main>
  <h1>${e.name}</h1>
  <p>${e.description}</p>
  <p>Template based on: <a href="${e.githubData.htmlUrl}">${e.githubData.fullName}</a></p>
</main>`,nodejs:`const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(\`
    <h1>${e.name}</h1>
    <p>${e.description}</p>
    <p>Template based on: <a href="${e.githubData.htmlUrl}">${e.githubData.fullName}</a></p>
  \`);
});

app.listen(PORT, () => {

});`,python:`from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', 
                         title='${e.name}',
                         description='${e.description}',
                         github_url='${e.githubData.htmlUrl}')

if __name__ == '__main__':
    app.run(debug=True)`,php:`<?php
echo "<h1>${e.name}</h1>";
echo "<p>${e.description}</p>";
echo "<p>Template based on: <a href='${e.githubData.htmlUrl}'>${e.githubData.fullName}</a></p>";
?>`,go:`package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "<h1>%s</h1><p>%s</p><p>Template based on: <a href='%s'>%s</a></p>", 
                "${e.name}", "${e.description}", "${e.githubData.htmlUrl}", "${e.githubData.fullName}")
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}`,rust:`use std::io;

fn main() {
    println!("Hello from {}!", "${e.name}");
    println!("{}", "${e.description}");
    println!("Template based on: {}", "${e.githubData.fullName}");
}`,java:`public class Main {
    public static void main(String[] args) {
        System.out.println("${e.name}");
        System.out.println("${e.description}");
        System.out.println("Template based on: ${e.githubData.fullName}");
    }
}`,api:`const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    name: '${e.name}',
    description: '${e.description}',
    github: '${e.githubData.fullName}'
  });
});

app.listen(PORT, () => {

});`,dashboard:`import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>${e.name}</h1>
        <p>${e.description}</p>
      </header>
      <main className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">Users</div>
          <div className="stat-card">Revenue</div>
          <div className="stat-card">Orders</div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;`,mobile:`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>${e.name}</Text>
      <Text style={styles.description}>${e.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});`,web:`// ${e.name}
// ${e.description}

// Template based on: ${e.githubData.fullName}
// Repository: ${e.githubData.htmlUrl}`};return a[e.templateType]||a.web}createIndexHtml(e,t={}){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e.name}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }
        a {
            color: #fff;
            text-decoration: underline;
        }
        .github-info {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${e.name}</h1>
        <p>${e.description}</p>
        
        <div class="github-info">
            <h3>GitHub Repository</h3>
            <p><strong>Source:</strong> <a href="${e.githubData.htmlUrl}">${e.githubData.fullName}</a></p>
            <p><strong>Stars:</strong> ${e.githubData.stargazersCount}</p>
            <p><strong>Language:</strong> ${e.githubData.language||"JavaScript"}</p>
            <p><strong>Template Type:</strong> ${e.templateType}</p>
        </div>
        
        <p>🚀 Generated with DreamBuild's GitHub Template Integration</p>
    </div>
</body>
</html>`}createTemplateFiles(e,t={}){const a={};switch(e.id){case"react-dashboard":a["index.html"]=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
    <script src="App.jsx"><\/script>
</body>
</html>`,a["App.jsx"]=`import React, { useState } from 'react';

function Dashboard() {
  const [stats, setStats] = useState({
    users: 1250,
    revenue: 45230,
    orders: 89,
    growth: 12.5
  });

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Analytics Dashboard</h1>
        <p>Welcome to your business dashboard</p>
      </header>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{stats.users.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-number">$${stats.revenue.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Orders</h3>
          <p className="stat-number">{stats.orders}</p>
        </div>
        <div className="stat-card">
          <h3>Growth</h3>
          <p className="stat-number">+{stats.growth}%</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));`,a["styles.css"]=`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.dashboard {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.dashboard-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.dashboard-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h3 {
  color: #666;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
}`,a["package.json"]=`{
  "name": "react-dashboard",
  "version": "1.0.0",
  "description": "Modern React Dashboard",
  "main": "App.jsx",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "keywords": ["react", "dashboard", "analytics"],
  "author": "DreamBuild",
  "license": "MIT"
}`;break;case"todo-app":a["App.js"]=`import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text: text.trim(), completed: false }]);
      setText('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Add a new todo..."
          onSubmitEditing={addTodo}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.todoItem, item.completed && styles.completedTodo]}>
            <TouchableOpacity
              style={styles.todoText}
              onPress={() => toggleTodo(item.id)}
            >
              <Text style={[styles.todoText, item.completed && styles.completedText]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTodo(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}`,a["styles.js"]=`import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: 'white',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  completedTodo: {
    backgroundColor: '#f0f0f0',
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});`;break;default:a["index.html"]=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild App</title>
</head>
<body>
    <h1>Welcome to DreamBuild!</h1>
    <p>Your application has been generated successfully.</p>
</body>
</html>`}return a}async generateCode(e,t={}){console.log("🚀 Starting code generation for prompt:",e);try{return this.isProduction&&!this.isLocalhost?(console.log("🌐 Production environment - using template fallback"),this.createFallbackResponse(e,t)):this.isHealthy?await this.generateWithLocalAI(e,t):(console.log("⚠️ Local AI not available, using template fallback"),this.createFallbackResponse(e,t))}catch(a){return console.error("❌ Code generation failed:",a),this.createFallbackResponse(e,t)}}async generateWithLocalAI(e,t={}){const a=this.getBestAvailableModel(),r=this.createSystemPrompt(t),i={model:a,messages:[{role:"system",content:r},{role:"user",content:e}],stream:!1,options:{temperature:.7,top_p:.9,max_tokens:4e3}};try{const s=await g.post(`${this.baseURL}/chat`,i,{timeout:3e4,headers:{"Content-Type":"application/json"}});if(s.data&&s.data.message&&s.data.message.content){const d=s.data.message.content;return this.parseAIResponse(d,e)}else throw new Error("Invalid response from local AI")}catch(s){throw console.error("❌ Local AI generation failed:",s),s}}getBestAvailableModel(){const e=this.getHealthyModels();return e.includes("codellama:7b")?"codellama:7b":e.includes("codellama:13b")?"codellama:13b":e.includes("codellama:34b")?"codellama:34b":e[0]||"codellama:7b"}createSystemPrompt(e={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

Guidelines:
1. Always generate complete, runnable code
2. Include all necessary files (HTML, CSS, JS, etc.)
3. Use modern best practices
4. Make the code clean and well-commented
5. Ensure the application is functional and user-friendly

Return your response as a JSON object with this structure:
{
  "files": {
    "filename1.ext": "file content here",
    "filename2.ext": "file content here"
  },
  "description": "Brief description of what was generated",
  "instructions": "How to run or use the generated code"
}

Generate practical, working applications that users can immediately use.`}parseAIResponse(e,t){try{const a=e.match(/\{[\s\S]*\}/);if(a){const r=JSON.parse(a[0]);if(r.files)return r.files}return this.createFallbackResponse(t,{})}catch(a){return console.error("❌ Failed to parse AI response:",a),this.createFallbackResponse(t,{})}}createFallbackResponse(e,t={}){console.log("🔄 Creating fallback response for prompt:",e);const a=e.toLowerCase();return a.includes("dashboard")||a.includes("analytics")?this.generateTemplateById("react-dashboard",t):a.includes("todo")||a.includes("task")?this.generateTemplateById("todo-app",t):a.includes("ecommerce")||a.includes("store")||a.includes("shop")?this.generateTemplateById("ecommerce-store",t):{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild App</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            line-height: 1.6;
        }
        .header {
            text-align: center;
            margin-bottom: 2rem;
        }
        .content {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 8px;
            border: 1px solid #e9ecef;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Welcome to Your DreamBuild App!</h1>
        <p>Generated based on: "${e}"</p>
    </div>
    
    <div class="content">
        <h2>Your Application</h2>
        <p>This is a starter application generated by DreamBuild. You can customize it further by editing the files in your project.</p>
        
        <h3>Features:</h3>
        <ul>
            <li>Responsive design</li>
            <li>Modern styling</li>
            <li>Clean code structure</li>
        </ul>
        
        <p>To run this application, simply open the index.html file in your web browser.</p>
    </div>
</body>
</html>`,"styles.css":`/* Additional styles for your DreamBuild app */

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.button {
    background: #007bff;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.button:hover {
    background: #0056b3;
}

.card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 1rem;
}`,"package.json":`{
  "name": "dreambuild-app",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["dreambuild", "generated", "web-app"],
  "author": "DreamBuild",
  "license": "MIT"
}`}}}const n=new w;var x={};class k{constructor(){this.isHealthy=!0,this.baseURL="https://api-inference.huggingface.co/models",this.apiKey=x.REACT_APP_HUGGINGFACE_API_KEY||"hf_your_api_key_here",this.availableModels={"codellama-7b":{name:"CodeLlama 7B",model:"codellama/CodeLlama-7b-Python-hf",description:"Fast and efficient code generation",maxTokens:2048,temperature:.7},"codellama-13b":{name:"CodeLlama 13B",model:"codellama/CodeLlama-13b-Python-hf",description:"Higher quality code generation",maxTokens:2048,temperature:.7},"starcoder-15b":{name:"StarCoder 15B",model:"bigcode/starcoder",description:"Excellent code completion",maxTokens:2048,temperature:.7},"deepseek-coder":{name:"DeepSeek Coder",model:"deepseek-ai/deepseek-coder-6.7b-instruct",description:"High-performance generation",maxTokens:2048,temperature:.7},"wizardcoder-7b":{name:"WizardCoder 7B",model:"WizardLM/WizardCoder-15B-V1.0",description:"Great at following instructions",maxTokens:2048,temperature:.7},"phi3-mini":{name:"Phi-3 Mini",model:"microsoft/Phi-3-mini-4k-instruct",description:"Lightweight but powerful",maxTokens:2048,temperature:.7},"llama3-8b":{name:"Llama 3 8B",model:"meta-llama/Llama-3-8B-Instruct",description:"General purpose model",maxTokens:2048,temperature:.7},"mistral-7b":{name:"Mistral 7B",model:"mistralai/Mistral-7B-Instruct-v0.1",description:"Fast and efficient coding assistant",maxTokens:2048,temperature:.7},"gemma-7b":{name:"Gemma 7B",model:"google/gemma-7b-it",description:"Google's lightweight model",maxTokens:2048,temperature:.7},"qwen-7b":{name:"Qwen 7B",model:"Qwen/Qwen-7B-Chat",description:"Alibaba's coding model",maxTokens:2048,temperature:.7}},console.log("☁️ Cloud AI Service initialized with open source models!")}getAvailableModels(){return Object.values(this.availableModels)}getHealthyModels(){return Object.keys(this.availableModels)}async generateCode(e,t={}){console.log("🚀 Generating code with Cloud AI...");try{const a=this.analyzeProjectContext(t);console.log("🧠 Enhanced context analysis:",a);const r=this.generateContextAwareCode(e,a),i=this.generateAppName(e),s=this.generatePreviewData(r,i);return console.log("✅ Code generated successfully!"),console.log("🏷️ App name:",i),console.log("👁️ Preview data generated"),{files:r,appName:i,prompt:e,generatedAt:new Date().toISOString(),preview:s,context:a,iterations:[],dependencies:this.extractDependencies(r),buildInstructions:this.generateBuildInstructions(r)}}catch(a){console.error("❌ Code generation failed:",a);const r=this.createFallbackResponse(e,t),i=this.generateAppName(e);return{files:r,appName:i,prompt:e,generatedAt:new Date().toISOString(),preview:this.generatePreviewData(r,i),context:this.analyzeProjectContext(t),iterations:[],dependencies:this.extractDependencies(r),buildInstructions:this.generateBuildInstructions(r)}}}analyzeProjectContext(e){return{projectType:this.detectProjectType(e),existingFiles:e.previousFiles||[],dependencies:this.analyzeDependencies(e),codingStandards:this.detectCodingStandards(e),architecture:this.detectArchitecture(e),frameworks:this.detectFrameworks(e),userPreferences:this.extractUserPreferences(e),environment:this.detectEnvironment(e)}}generateContextAwareCode(e,t){console.log("🧠 Context-aware generation:",t);const a=this.analyzeUserRequest(e),r=this.generateSpecificCode(e,a),i=this.enhanceWithContext(r,t);return console.log("🔧 Enhanced code generated with context awareness"),i}generatePreviewData(e,t){return{title:t,description:`A ${t} application generated by DreamBuild AI`,features:this.extractFeatures(e),screenshots:this.generateScreenshots(e),liveDemo:this.generateLiveDemo(e),techStack:this.extractTechStack(e),deployment:this.generateDeploymentInfo(e)}}extractDependencies(e){const t=new Set;return Object.values(e).forEach(a=>{(a.includes("React")||a.includes("react"))&&(t.add("react"),t.add("react-dom")),(a.includes("Vue")||a.includes("vue"))&&t.add("vue"),(a.includes("Angular")||a.includes("angular"))&&t.add("@angular/core"),(a.includes("express")||a.includes("node"))&&t.add("express"),(a.includes("tailwind")||a.includes("bootstrap"))&&t.add("tailwindcss")}),Array.from(t)}generateBuildInstructions(e){const t=Object.values(e).some(r=>r.includes("React")||r.includes("react")),a=Object.values(e).some(r=>r.includes("express")||r.includes("node"));return t?{install:"npm install",start:"npm start",build:"npm run build",dev:"npm run dev"}:a?{install:"npm install",start:"node server.js",dev:"nodemon server.js"}:{install:"No dependencies required",start:"Open index.html in browser",build:"No build process required"}}generateIntelligentCode(e,t={}){console.log("🧠 Analyzing prompt:",e);const a=this.analyzeUserRequest(e);return console.log("📋 Analysis result:",a),this.generateSpecificCode(e,a)}analyzeUserRequest(e){const t=e.toLowerCase();return{hasButton:t.includes("button")||t.includes("click"),hasForm:t.includes("form")||t.includes("input")||t.includes("submit"),hasCalculator:t.includes("calculator")||t.includes("calculate")||t.includes("math"),hasColorChange:t.includes("color")||t.includes("change color"),hasCounter:t.includes("counter")||t.includes("count")||t.includes("increment"),hasTodo:t.includes("todo")||t.includes("task")||t.includes("list"),hasGame:t.includes("game")||t.includes("play")||t.includes("guess"),hasAnimation:t.includes("animation")||t.includes("animate")||t.includes("spinning"),hasAPI:t.includes("api")||t.includes("fetch")||t.includes("request"),wantsReact:t.includes("react")||t.includes("component"),wantsVue:t.includes("vue"),wantsAngular:t.includes("angular"),wantsPython:t.includes("python")||t.includes("flask")||t.includes("django"),wantsNode:t.includes("node")||t.includes("express"),wantsDatabase:t.includes("database")||t.includes("store")||t.includes("save"),wantsAuth:t.includes("login")||t.includes("auth")||t.includes("user"),wantsResponsive:t.includes("responsive")||t.includes("mobile"),wantsStyling:t.includes("css")||t.includes("style")||t.includes("design"),specificFeature:this.extractSpecificFeature(e),appName:this.extractAppName(e),targetLanguage:this.detectTargetLanguage(e)}}extractSpecificFeature(e){const t=e.toLowerCase();return t.includes("factorial")?"factorial":t.includes("fibonacci")?"fibonacci":t.includes("prime")?"prime":t.includes("sort")?"sort":t.includes("search")?"search":t.includes("timer")?"timer":t.includes("clock")?"clock":t.includes("weather")?"weather":t.includes("chat")?"chat":t.includes("quiz")?"quiz":null}detectTargetLanguage(e){const t=e.toLowerCase();return t.includes("python")?"python":t.includes("javascript")||t.includes("js")?"javascript":t.includes("react")?"react":t.includes("vue")?"vue":t.includes("angular")?"angular":t.includes("html")?"html":t.includes("css")?"css":"html"}generateSpecificCode(e,t){return console.log("🎯 Generating specific code for:",t.specificFeature||"general app"),t.specificFeature?this.generateSpecificFeature(e,t.specificFeature):t.hasCalculator?this.generateCalculatorApp(e):t.hasTodo?this.generateTodoApp(e):t.hasGame?this.generateGameApp(e):t.hasAnimation?this.generateAnimationApp(e):t.hasAPI?this.generateAPIApp(e):t.specificFeature==="weather"?this.generateWeatherApp(e):t.wantsReact?this.generateReactApp(e):t.wantsPython?this.generatePythonApp(e):t.wantsNode?this.generateNodeApp(e):this.generateWebAppWithFeatures(e,t)}selectBestModel(e,t){const a=e.toLowerCase();return a.includes("python")||a.includes("django")||a.includes("flask")?"codellama-7b":a.includes("javascript")||a.includes("react")||a.includes("node")?"starcoder-15b":a.includes("java")||a.includes("spring")?"deepseek-coder":a.includes("c++")||a.includes("cpp")||a.includes("rust")?"codellama-13b":a.includes("web")||a.includes("html")||a.includes("css")?"wizardcoder-7b":"codellama-7b"}async callHuggingFaceAPI(e,t,a,r){return(await g.post(`${this.baseURL}/${e}`,{inputs:t,parameters:{max_new_tokens:a,temperature:r,return_full_text:!1,do_sample:!0}},{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},timeout:3e4})).data}createSystemPrompt(e={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

Guidelines:
1. Always generate complete, runnable code
2. Include all necessary files (HTML, CSS, JS, etc.)
3. Use modern best practices
4. Make the code clean and well-commented
5. Ensure the application is functional and user-friendly

Return your response as a JSON object with this structure:
{
  "files": {
    "filename1.ext": "file content here",
    "filename2.ext": "file content here"
  },
  "description": "Brief description of what was generated",
  "instructions": "How to run or use the generated code"
}

Generate practical, working applications that users can immediately use.`}parseAIResponse(e,t){try{let a="";Array.isArray(e)&&e.length>0?a=e[0].generated_text||e[0].text||"":e.generated_text?a=e.generated_text:e.text?a=e.text:a=JSON.stringify(e);const r=a.match(/\{[\s\S]*\}/);if(r){const i=JSON.parse(r[0]);if(i.files)return i.files}return this.createFallbackResponse(t,{})}catch(a){return console.error("❌ Failed to parse AI response:",a),this.createFallbackResponse(t,{})}}generateWebApp(e){const t=this.extractAppName(e)||"Web App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${t}</h1>
        <p>Generated based on: "${e}"</p>
        
        <div class="content">
            <button id="colorButton" class="btn">Click me to change color!</button>
            <div id="output" class="output"></div>
        </div>
    </div>
    
    <script src="script.js"><\/script>
</body>
</html>`,"styles.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.content {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.output {
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  min-height: 100px;
}`,"script.js":`// ${t} - Generated by DreamBuild AI
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');
    const output = document.getElementById('output');
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    let currentColorIndex = 0;
    
    button.addEventListener('click', function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        button.style.backgroundColor = randomColor;
        
        output.innerHTML = \`
            <h3>Button clicked!</h3>
            <p>Color changed to: <span style="color: \${randomColor}">\${randomColor}</span></p>
            <p>Timestamp: \${new Date().toLocaleTimeString()}</p>
        \`;
        
        // Add some animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });

});`,"package.json":`{
  "name": "${t.toLowerCase().replace(/\s+/g,"-")}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["web", "html", "javascript"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`}}generateReactApp(e){const t=this.extractAppName(e)||"React App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
    <script type="text/babel" src="App.jsx"><\/script>
</body>
</html>`,"App.jsx":`import React, { useState } from 'react';

function ${t.replace(/\s+/g,"")}() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello from React!');

  const handleClick = () => {
    setCount(count + 1);
    setMessage(\`Button clicked \${count + 1} times!\`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>${t}</h1>
        <p>Generated based on: "${e}"</p>
      </header>
      
      <main className="app-content">
        <div className="card">
          <h2>Interactive Counter</h2>
          <p className="message">{message}</p>
          <button onClick={handleClick} className="btn">
            Count: {count}
          </button>
        </div>
        
        <div className="card">
          <h2>Features</h2>
          <ul>
            <li>React Hooks (useState)</li>
            <li>Event Handling</li>
            <li>Dynamic Content</li>
            <li>Modern Styling</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

ReactDOM.render(<${t.replace(/\s+/g,"")} />, document.getElementById('root'));`,"styles.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
}

.app-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.app-content {
  flex: 1;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card h2 {
  margin-bottom: 1rem;
  color: #fff;
}

.message {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #4ecdc4;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

li:before {
  content: "✓ ";
  color: #4ecdc4;
  font-weight: bold;
}`,"package.json":`{
  "name": "${t.toLowerCase().replace(/\s+/g,"-")}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["react", "javascript", "frontend"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`}}generateJavaScriptApp(e){const t=this.extractAppName(e)||"JavaScript App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${t}</h1>
        <p>Generated based on: "${e}"</p>
        
        <div class="content">
            <div class="input-group">
                <input type="text" id="userInput" placeholder="Enter something...">
                <button id="processBtn" class="btn">Process</button>
            </div>
            <div id="result" class="result"></div>
        </div>
    </div>
    
    <script src="script.js"><\/script>
</body>
</html>`,"script.js":`// ${t} - Generated by DreamBuild AI
class ${t.replace(/\s+/g,"")} {
    constructor() {
        this.input = document.getElementById('userInput');
        this.button = document.getElementById('processBtn');
        this.result = document.getElementById('result');
        
        this.init();
    }
    
    init() {
        this.button.addEventListener('click', () => this.processInput());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.processInput();
        });

    }
    
    processInput() {
        const value = this.input.value.trim();
        if (!value) {
            this.showResult('Please enter something!', 'error');
            return;
        }
        
        // Process the input
        const processed = this.processValue(value);
        this.showResult(processed, 'success');
    }
    
    processValue(value) {
        // Example processing functions
        const functions = {
            reverse: () => value.split('').reverse().join(''),
            uppercase: () => value.toUpperCase(),
            lowercase: () => value.toLowerCase(),
            length: () => \`Length: \${value.length} characters\`,
            words: () => \`Words: \${value.split(' ').length}\`,
            palindrome: () => {
                const reversed = value.split('').reverse().join('');
                return \`Is palindrome: \${value === reversed}\`;
            }
        };
        
        const results = Object.entries(functions).map(([name, fn]) => 
            \`<strong>\${name}:</strong> \${fn()}\`
        ).join('<br>');
        
        return \`
            <h3>Processing Results:</h3>
            <p><strong>Original:</strong> \${value}</p>
            <div class="results">\${results}</div>
        \`;
    }
    
    showResult(message, type) {
        this.result.innerHTML = message;
        this.result.className = \`result \${type}\`;
        
        // Clear input
        this.input.value = '';
        this.input.focus();
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new ${t.replace(/\s+/g,"")}();
});`,"styles.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.content {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.result {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: left;
  min-height: 100px;
}

.result.success {
  border-left: 4px solid #4ecdc4;
}

.result.error {
  border-left: 4px solid #ff6b6b;
}

.results {
  margin-top: 1rem;
  line-height: 1.6;
}`,"package.json":`{
  "name": "${t.toLowerCase().replace(/\s+/g,"-")}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["javascript", "web", "interactive"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`}}generateSpecificFeature(e,t){switch(console.log("🎯 Generating specific feature:",t),t){case"factorial":return this.generateFactorialApp(e);case"fibonacci":return this.generateFibonacciApp(e);case"prime":return this.generatePrimeApp(e);case"sort":return this.generateSortApp(e);case"search":return this.generateSearchApp(e);case"timer":return this.generateTimerApp(e);case"clock":return this.generateClockApp(e);case"weather":return this.generateWeatherApp(e);case"chat":return this.generateChatApp(e);case"quiz":return this.generateQuizApp(e);default:return this.generateWebApp(e)}}generateFactorialApp(e){const t=this.extractAppName(e)||"Factorial Calculator";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${t}</h1>
        <p>Calculate the factorial of any number</p>
        
        <div class="calculator">
            <div class="input-group">
                <label for="numberInput">Enter a number:</label>
                <input type="number" id="numberInput" placeholder="Enter a number" min="0" max="170">
                <button id="calculateBtn" class="btn">Calculate Factorial</button>
            </div>
            
            <div id="result" class="result"></div>
            
            <div class="examples">
                <h3>Examples:</h3>
                <ul>
                    <li>5! = 120</li>
                    <li>10! = 3,628,800</li>
                    <li>0! = 1</li>
                </ul>
            </div>
        </div>
    </div>
    
    <script src="script.js"><\/script>
</body>
</html>`,"script.js":`// ${t} - Generated by DreamBuild AI
class FactorialCalculator {
    constructor() {
        this.input = document.getElementById('numberInput');
        this.button = document.getElementById('calculateBtn');
        this.result = document.getElementById('result');
        
        this.init();
    }
    
    init() {
        this.button.addEventListener('click', () => this.calculateFactorial());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.calculateFactorial();
        });

    }
    
    calculateFactorial() {
        const number = parseInt(this.input.value);
        
        if (isNaN(number) || number < 0) {
            this.showResult('Please enter a valid non-negative number!', 'error');
            return;
        }
        
        if (number > 170) {
            this.showResult('Number too large! Please enter a number ≤ 170', 'error');
            return;
        }
        
        const startTime = performance.now();
        const factorial = this.computeFactorial(number);
        const endTime = performance.now();
        const timeTaken = (endTime - startTime).toFixed(2);
        
        this.showResult(\`
            <h3>Result: \${number}!</h3>
            <p class="factorial-result">\${this.formatNumber(factorial)}</p>
            <p class="time-taken">Calculated in \${timeTaken}ms</p>
            <p class="explanation">\${this.getExplanation(number, factorial)}</p>
        \`, 'success');
    }
    
    computeFactorial(n) {
        if (n === 0 || n === 1) return 1;
        
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    formatNumber(num) {
        return num.toLocaleString();
    }
    
    getExplanation(n, result) {
        if (n === 0) return "0! = 1 (by definition)";
        if (n === 1) return "1! = 1";
        return \`\${n}! = \${Array.from({length: n}, (_, i) => i + 1).join(' × ')} = \${this.formatNumber(result)}\`;
    }
    
    showResult(message, type) {
        this.result.innerHTML = message;
        this.result.className = \`result \${type}\`;
    }
}

// Initialize the calculator
document.addEventListener('DOMContentLoaded', () => {
    new FactorialCalculator();
});`,"styles.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.calculator {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
}

.input-group {
  margin-bottom: 2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  margin-bottom: 1rem;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.result {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  text-align: left;
}

.result.success {
  border-left: 4px solid #4ecdc4;
}

.result.error {
  border-left: 4px solid #ff6b6b;
}

.factorial-result {
  font-size: 2rem;
  font-weight: bold;
  color: #4ecdc4;
  margin: 1rem 0;
}

.time-taken {
  color: #ffd700;
  font-style: italic;
}

.explanation {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  font-family: monospace;
}

.examples {
  text-align: left;
}

.examples h3 {
  margin-bottom: 1rem;
  color: #4ecdc4;
}

.examples ul {
  list-style: none;
  padding: 0;
}

.examples li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: monospace;
}`,"package.json":`{
  "name": "${t.toLowerCase().replace(/\s+/g,"-")}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["factorial", "calculator", "math"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`}}generateFibonacciApp(e){const t=this.extractAppName(e)||"Fibonacci Calculator";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${t}</h1>
        <p>Generate Fibonacci sequence up to any number</p>
        
        <div class="calculator">
            <div class="input-group">
                <label for="numberInput">Enter number of terms:</label>
                <input type="number" id="numberInput" placeholder="Enter number of terms" min="1" max="50">
                <button id="calculateBtn" class="btn">Generate Fibonacci</button>
            </div>
            
            <div id="result" class="result"></div>
            
            <div class="examples">
                <h3>Fibonacci Sequence:</h3>
                <p>Each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...</p>
            </div>
        </div>
    </div>
    
    <script src="script.js"><\/script>
</body>
</html>`,"script.js":`// ${t} - Generated by DreamBuild AI
class FibonacciCalculator {
    constructor() {
        this.input = document.getElementById('numberInput');
        this.button = document.getElementById('calculateBtn');
        this.result = document.getElementById('result');
        
        this.init();
    }
    
    init() {
        this.button.addEventListener('click', () => this.generateFibonacci());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.generateFibonacci();
        });

    }
    
    generateFibonacci() {
        const terms = parseInt(this.input.value);
        
        if (isNaN(terms) || terms < 1) {
            this.showResult('Please enter a valid positive number!', 'error');
            return;
        }
        
        if (terms > 50) {
            this.showResult('Please enter a number ≤ 50 for better performance', 'error');
            return;
        }
        
        const startTime = performance.now();
        const sequence = this.computeFibonacci(terms);
        const endTime = performance.now();
        const timeTaken = (endTime - startTime).toFixed(2);
        
        this.showResult(\`
            <h3>Fibonacci Sequence (first \${terms} terms):</h3>
            <div class="sequence">\${this.formatSequence(sequence)}</div>
            <p class="time-taken">Generated in \${timeTaken}ms</p>
            <p class="golden-ratio">Golden Ratio: \${this.calculateGoldenRatio(sequence)}</p>
        \`, 'success');
    }
    
    computeFibonacci(n) {
        if (n === 1) return [0];
        if (n === 2) return [0, 1];
        
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }
    
    formatSequence(sequence) {
        return sequence.map((num, index) => 
            \`<span class="fib-number">F\${index} = \${num.toLocaleString()}</span>\`
        ).join('<br>');
    }
    
    calculateGoldenRatio(sequence) {
        if (sequence.length < 2) return 'N/A';
        const last = sequence[sequence.length - 1];
        const secondLast = sequence[sequence.length - 2];
        if (secondLast === 0) return 'N/A';
        return (last / secondLast).toFixed(6);
    }
    
    showResult(message, type) {
        this.result.innerHTML = message;
        this.result.className = \`result \${type}\`;
    }
}

// Initialize the calculator
document.addEventListener('DOMContentLoaded', () => {
    new FibonacciCalculator();
});`,"styles.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.calculator {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
}

.input-group {
  margin-bottom: 2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  margin-bottom: 1rem;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.result {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  text-align: left;
}

.result.success {
  border-left: 4px solid #4ecdc4;
}

.result.error {
  border-left: 4px solid #ff6b6b;
}

.sequence {
  font-family: monospace;
  line-height: 1.8;
  margin: 1rem 0;
}

.fib-number {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  font-weight: bold;
}

.time-taken {
  color: #ffd700;
  font-style: italic;
  margin: 1rem 0;
}

.golden-ratio {
  color: #4ecdc4;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.examples {
  text-align: left;
}

.examples h3 {
  margin-bottom: 1rem;
  color: #4ecdc4;
}`,"package.json":`{
  "name": "${t.toLowerCase().replace(/\s+/g,"-")}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["fibonacci", "sequence", "math"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`}}generateWeatherApp(e){const t=this.extractAppName(e)||"Weather App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${t}</h1>
        <p>Get current weather and forecast for any city</p>
        
        <div class="weather-app">
            <div class="search-section">
                <div class="input-group">
                    <input type="text" id="cityInput" placeholder="Enter city name" />
                    <button id="searchBtn" class="btn">Get Weather</button>
                </div>
                <div class="location-info">
                    <button id="currentLocationBtn" class="btn-secondary">Use Current Location</button>
                </div>
            </div>
            
            <div id="loading" class="loading hidden">
                <div class="spinner"></div>
                <p>Loading weather data...</p>
            </div>
            
            <div id="error" class="error hidden">
                <p>Unable to fetch weather data. Please try again.</p>
            </div>
            
            <div id="weatherData" class="weather-data hidden">
                <div class="current-weather">
                    <h2 id="cityName"></h2>
                    <div class="weather-main">
                        <div class="temperature">
                            <span id="currentTemp"></span>
                            <span class="unit">°C</span>
                        </div>
                        <div class="weather-icon">
                            <img id="weatherIcon" src="" alt="Weather Icon" />
                        </div>
                    </div>
                    <p id="weatherDescription" class="description"></p>
                    <div class="weather-details">
                        <div class="detail">
                            <span class="label">Feels like:</span>
                            <span id="feelsLike"></span>
                        </div>
                        <div class="detail">
                            <span class="label">Humidity:</span>
                            <span id="humidity"></span>
                        </div>
                        <div class="detail">
                            <span class="label">Wind:</span>
                            <span id="windSpeed"></span>
                        </div>
                        <div class="detail">
                            <span class="label">Pressure:</span>
                            <span id="pressure"></span>
                        </div>
                    </div>
                </div>
                
                <div class="forecast">
                    <h3>5-Day Forecast</h3>
                    <div id="forecastList" class="forecast-list"></div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="script.js"><\/script>
</body>
</html>`,"script.js":`// ${t} - Generated by DreamBuild AI
class WeatherApp {
    constructor() {
        this.apiKey = 'demo'; // In production, use a real API key
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.currentLocationBtn = document.getElementById('currentLocationBtn');
        this.loading = document.getElementById('loading');
        this.error = document.getElementById('error');
        this.weatherData = document.getElementById('weatherData');
        
        this.init();
    }
    
    init() {
        this.searchBtn.addEventListener('click', () => this.searchWeather());
        this.currentLocationBtn.addEventListener('click', () => this.getCurrentLocationWeather());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchWeather();
        });

    }
    
    async searchWeather() {
        const city = this.cityInput.value.trim();
        if (!city) {
            this.showError('Please enter a city name');
            return;
        }
        
        this.showLoading();
        try {
            const weatherData = await this.fetchWeatherData(city);
            this.displayWeather(weatherData);
        } catch (error) {
            this.showError('Unable to fetch weather data. Please try again.');
        }
    }
    
    async getCurrentLocationWeather() {
        if (!navigator.geolocation) {
            this.showError('Geolocation is not supported by this browser.');
            return;
        }
        
        this.showLoading();
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;
                    const weatherData = await this.fetchWeatherByCoords(latitude, longitude);
                    this.displayWeather(weatherData);
                } catch (error) {
                    this.showError('Unable to fetch weather data for your location.');
                }
            },
            (error) => {
                this.showError('Unable to get your location. Please enter a city name.');
            }
        );
    }
    
    async fetchWeatherData(city) {
        // Simulate API call with demo data
        return new Promise((resolve) => {
            setTimeout(() => {
                const demoData = this.getDemoWeatherData(city);
                resolve(demoData);
            }, 1000);
        });
    }
    
    async fetchWeatherByCoords(lat, lon) {
        // Simulate API call with demo data
        return new Promise((resolve) => {
            setTimeout(() => {
                const demoData = this.getDemoWeatherData('Current Location');
                resolve(demoData);
            }, 1000);
        });
    }
    
    getDemoWeatherData(city) {
        const cities = {
            'london': { name: 'London', temp: 15, description: 'Cloudy', humidity: 75, wind: 12, pressure: 1013 },
            'new york': { name: 'New York', temp: 22, description: 'Sunny', humidity: 60, wind: 8, pressure: 1015 },
            'tokyo': { name: 'Tokyo', temp: 18, description: 'Rainy', humidity: 85, wind: 15, pressure: 1008 },
            'paris': { name: 'Paris', temp: 16, description: 'Partly Cloudy', humidity: 70, wind: 10, pressure: 1012 },
            'sydney': { name: 'Sydney', temp: 25, description: 'Clear', humidity: 55, wind: 6, pressure: 1020 }
        };
        
        const cityKey = city.toLowerCase();
        const cityData = cities[cityKey] || {
            name: city,
            temp: Math.floor(Math.random() * 30) + 5,
            description: ['Sunny', 'Cloudy', 'Rainy', 'Clear', 'Partly Cloudy'][Math.floor(Math.random() * 5)],
            humidity: Math.floor(Math.random() * 40) + 40,
            wind: Math.floor(Math.random() * 20) + 5,
            pressure: Math.floor(Math.random() * 20) + 1000
        };
        
        return {
            current: {
                name: cityData.name,
                temp: cityData.temp,
                description: cityData.description,
                feels_like: cityData.temp + Math.floor(Math.random() * 4) - 2,
                humidity: cityData.humidity,
                wind_speed: cityData.wind,
                pressure: cityData.pressure,
                icon: this.getWeatherIcon(cityData.description)
            },
            forecast: this.generateForecast(cityData.temp, cityData.description)
        };
    }
    
    getWeatherIcon(description) {
        const icons = {
            'sunny': '☀️',
            'clear': '☀️',
            'cloudy': '☁️',
            'rainy': '🌧️',
            'partly cloudy': '⛅'
        };
        return icons[description.toLowerCase()] || '🌤️';
    }
    
    generateForecast(baseTemp, baseDescription) {
        const forecast = [];
        for (let i = 1; i <= 5; i++) {
            const temp = baseTemp + Math.floor(Math.random() * 10) - 5;
            const description = ['Sunny', 'Cloudy', 'Rainy', 'Clear', 'Partly Cloudy'][Math.floor(Math.random() * 5)];
            forecast.push({
                day: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
                temp: temp,
                description: description,
                icon: this.getWeatherIcon(description)
            });
        }
        return forecast;
    }
    
    displayWeather(data) {
        this.hideLoading();
        this.hideError();
        
        // Current weather
        document.getElementById('cityName').textContent = data.current.name;
        document.getElementById('currentTemp').textContent = data.current.temp;
        document.getElementById('weatherDescription').textContent = data.current.description;
        document.getElementById('feelsLike').textContent = \`\${data.current.feels_like}°C\`;
        document.getElementById('humidity').textContent = \`\${data.current.humidity}%\`;
        document.getElementById('windSpeed').textContent = \`\${data.current.wind_speed} km/h\`;
        document.getElementById('pressure').textContent = \`\${data.current.pressure} hPa\`;
        document.getElementById('weatherIcon').src = \`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="50">\${data.current.icon}</text></svg>\`;
        
        // Forecast
        const forecastList = document.getElementById('forecastList');
        forecastList.innerHTML = data.forecast.map(day => \`
            <div class="forecast-item">
                <div class="day">\${day.day}</div>
                <div class="icon">\${day.icon}</div>
                <div class="temp">\${day.temp}°C</div>
                <div class="desc">\${day.description}</div>
            </div>
        \`).join('');
        
        this.weatherData.classList.remove('hidden');
    }
    
    showLoading() {
        this.loading.classList.remove('hidden');
        this.error.classList.add('hidden');
        this.weatherData.classList.add('hidden');
    }
    
    hideLoading() {
        this.loading.classList.add('hidden');
    }
    
    showError(message) {
        this.hideLoading();
        this.error.querySelector('p').textContent = message;
        this.error.classList.remove('hidden');
        this.weatherData.classList.add('hidden');
    }
    
    hideError() {
        this.error.classList.add('hidden');
    }
}

// Initialize the weather app
document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});`,"styles.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.weather-app {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
}

.search-section {
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
}

.weather-data {
  text-align: left;
}

.current-weather {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.weather-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.temperature {
  font-size: 4rem;
  font-weight: bold;
  color: #ffd700;
}

.unit {
  font-size: 2rem;
  color: #ffd700;
}

.weather-icon {
  font-size: 4rem;
}

.description {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
}

.weather-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.detail {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.label {
  font-weight: bold;
  color: #ffd700;
}

.forecast {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
}

.forecast h3 {
  margin-bottom: 1rem;
  color: #ffd700;
}

.forecast-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.forecast-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
}

.day {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.icon {
  font-size: 2rem;
  margin: 0.5rem 0;
}

.temp {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffd700;
}

.desc {
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: capitalize;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.hidden {
  display: none;
}

.error {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
}

@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
  }
  
  .weather-main {
    flex-direction: column;
    text-align: center;
  }
  
  .temperature {
    font-size: 3rem;
  }
  
  .weather-details {
    grid-template-columns: 1fr;
  }
}`,"package.json":`{
  "name": "${t.toLowerCase().replace(/\s+/g,"-")}",
  "version": "1.0.0",
  "description": "Generated by DreamBuild AI",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["weather", "forecast", "api"],
  "author": "DreamBuild AI",
  "license": "MIT"
}`}}detectProjectType(e){const t=e.previousFiles||[];return t.some(a=>a.includes("package.json"))?"node":t.some(a=>a.includes(".jsx")||a.includes(".tsx"))?"react":t.some(a=>a.includes(".vue"))?"vue":(t.some(a=>a.includes(".html")),"web")}analyzeDependencies(e){return e.dependencies||[]}detectCodingStandards(e){return{indentation:"2 spaces",quotes:"single",semicolons:!0,trailingCommas:!0}}detectArchitecture(e){const t=e.previousFiles||[];return t.some(a=>a.includes("components"))?"component-based":t.some(a=>a.includes("pages"))?"page-based":"monolithic"}detectFrameworks(e){const t=[],a=e.previousFiles||[];return a.some(r=>r.includes("react"))&&t.push("react"),a.some(r=>r.includes("vue"))&&t.push("vue"),a.some(r=>r.includes("angular"))&&t.push("angular"),a.some(r=>r.includes("express"))&&t.push("express"),t}extractUserPreferences(e){return{preferredFramework:"react",styling:"tailwind",stateManagement:"hooks",testing:"jest"}}detectEnvironment(e){return{nodeVersion:"18+",packageManager:"npm",bundler:"vite",deployment:"firebase"}}enhanceWithContext(e,t){console.log("🔧 Enhancing code with context:",t);const a={...e};return Object.keys(a).forEach(r=>{if(r.endsWith(".js")||r.endsWith(".jsx")){const i=a[r],s=`// Generated by DreamBuild AI with context awareness
// Project Type: ${t.projectType||"web"}
// Architecture: ${t.architecture||"monolithic"}
// Frameworks: ${t.frameworks?.join(", ")||"vanilla"}
// Environment: ${t.environment?.nodeVersion||"18+"}

${i}`;a[r]=s}}),console.log("✅ Code enhanced with context awareness"),a}extractFeatures(e){const t=[],a=Object.values(e).join(" ").toLowerCase();return console.log("🔍 Extracting features from generated code..."),(a.includes("addeventlistener")||a.includes("onclick")||a.includes("onchange"))&&t.push("Interactive Elements"),(a.includes("localstorage")||a.includes("sessionstorage")||a.includes("indexeddb"))&&t.push("Data Persistence"),(a.includes("fetch")||a.includes("axios")||a.includes("xhr")||a.includes("api"))&&t.push("API Integration"),(a.includes("responsive")||a.includes("mobile")||a.includes("media query")||a.includes("@media"))&&t.push("Responsive Design"),(a.includes("animation")||a.includes("transition")||a.includes("transform")||a.includes("keyframes"))&&t.push("Animations"),(a.includes("form")||a.includes("input")||a.includes("textarea")||a.includes("select"))&&t.push("Form Handling"),(a.includes("login")||a.includes("auth")||a.includes("password")||a.includes("token"))&&t.push("Authentication"),(a.includes("websocket")||a.includes("socket")||a.includes("realtime")||a.includes("live"))&&t.push("Real-time Updates"),(a.includes("file")||a.includes("upload")||a.includes("download")||a.includes("blob"))&&t.push("File Handling"),t.length===0&&t.push("Modern UI","Interactive Elements","Responsive Design"),console.log("✅ Features extracted:",t),t}generateScreenshots(e){return["https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=App+Preview+1","https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=App+Preview+2"]}generateLiveDemo(e){return"https://dreambuild-2024-app.web.app/preview"}extractTechStack(e){const t=[],a=Object.values(e).join(" ").toLowerCase();return console.log("🔍 Extracting tech stack from generated code..."),(a.includes("react")||a.includes("jsx"))&&t.push("React"),(a.includes("vue")||a.includes("vue.js"))&&t.push("Vue.js"),a.includes("angular")&&t.push("Angular"),a.includes("svelte")&&t.push("Svelte"),(a.includes("express")||a.includes("node"))&&t.push("Node.js"),(a.includes("django")||a.includes("flask"))&&t.push("Python"),(a.includes("spring")||a.includes("java"))&&t.push("Java"),a.includes("html")&&t.push("HTML5"),a.includes("css")&&t.push("CSS3"),(a.includes("javascript")||a.includes("js"))&&t.push("JavaScript"),(a.includes("typescript")||a.includes("ts"))&&t.push("TypeScript"),(a.includes("tailwind")||a.includes("tailwindcss"))&&t.push("Tailwind CSS"),a.includes("bootstrap")&&t.push("Bootstrap"),(a.includes("material")||a.includes("mui"))&&t.push("Material-UI"),(a.includes("mongodb")||a.includes("mongo"))&&t.push("MongoDB"),(a.includes("mysql")||a.includes("sql"))&&t.push("SQL"),a.includes("firebase")&&t.push("Firebase"),t.length===0&&t.push("HTML5","CSS3","JavaScript"),console.log("✅ Tech stack extracted:",t),t}generateDeploymentInfo(e){return{platform:"Firebase Hosting",url:"https://dreambuild-2024-app.web.app",status:"Ready to deploy",instructions:"Click deploy to publish your app"}}extractAppName(e){const t=e.split(" "),a=t.findIndex(r=>r.toLowerCase().includes("app")||r.toLowerCase().includes("application")||r.toLowerCase().includes("website")||r.toLowerCase().includes("page"));return a>0?t.slice(0,a).join(" "):null}generateAppName(e){const t=e.toLowerCase(),a=e.split(" ").filter(i=>i.length>3&&!["create","build","make","generate","app","application","website","page"].includes(i.toLowerCase()));if(t.includes("weather"))return"WeatherCast Pro";if(t.includes("calculator"))return"CalcMaster";if(t.includes("todo")||t.includes("task"))return"TaskFlow";if(t.includes("game"))return"GameZone";if(t.includes("chat"))return"ChatConnect";if(t.includes("dashboard"))return"DashBoard Pro";if(t.includes("ecommerce")||t.includes("store"))return"ShopMaster";if(t.includes("blog"))return"BlogCraft";if(t.includes("portfolio"))return"Portfolio Pro";if(t.includes("social"))return"SocialConnect";if(t.includes("music"))return"MusicHub";if(t.includes("photo")||t.includes("image"))return"PhotoGallery";if(t.includes("news"))return"NewsReader";if(t.includes("recipe"))return"RecipeBook";if(t.includes("fitness")||t.includes("workout"))return"FitTracker";if(t.includes("finance")||t.includes("budget"))return"FinanceTracker";if(t.includes("education")||t.includes("learn"))return"LearnHub";if(t.includes("travel"))return"TravelGuide";if(t.includes("food")||t.includes("restaurant"))return"FoodFinder";if(t.includes("book")||t.includes("library"))return"BookShelf";if(t.includes("calendar")||t.includes("schedule"))return"SchedulePro";if(a.length>0){const i=a[0].charAt(0).toUpperCase()+a[0].slice(1),s=a.length>1?a[1].charAt(0).toUpperCase()+a[1].slice(1):"App";return`${i}${s}`}const r=["DreamApp","InnovateHub","CreativeSpace","TechFlow","SmartApp","NextGen","FutureApp","ProApp","EliteApp","MasterApp","UltimateApp","PrimeApp","SuperApp","MegaApp","TurboApp"];return r[Math.floor(Math.random()*r.length)]}createFallbackResponse(e,t={}){console.log("🔄 Creating fallback response for prompt:",e);const a=e.toLowerCase();return a.includes("dashboard")||a.includes("analytics")?this.createDashboardTemplate(e):a.includes("todo")||a.includes("task")?this.createTodoTemplate(e):a.includes("ecommerce")||a.includes("store")||a.includes("shop")?this.createEcommerceTemplate(e):a.includes("api")||a.includes("backend")?this.createAPITemplate(e):this.createDefaultTemplate(e)}createDashboardTemplate(e){return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
    <script src="App.jsx"><\/script>
</body>
</html>`,"App.jsx":`import React, { useState } from 'react';

function Dashboard() {
  const [stats, setStats] = useState({
    users: 1250,
    revenue: 45230,
    orders: 89,
    growth: 12.5
  });

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Analytics Dashboard</h1>
        <p>Welcome to your business dashboard</p>
      </header>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{stats.users.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-number">$${stats.revenue.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Orders</h3>
          <p className="stat-number">{stats.orders}</p>
        </div>
        <div className="stat-card">
          <h3>Growth</h3>
          <p className="stat-number">+{stats.growth}%</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));`,"styles.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.dashboard {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.dashboard-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.dashboard-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h3 {
  color: #666;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
}`,"package.json":`{
  "name": "dashboard-app",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["dashboard", "analytics", "react"],
  "author": "DreamBuild",
  "license": "MIT"
}`}}createTodoTemplate(e){return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
    <script src="App.jsx"><\/script>
</body>
</html>`,"App.jsx":`import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text: text.trim(), completed: false }]);
      setText('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="todos">
        {todos.map(todo => (
          <div key={todo.id} className={\`todo-item \${todo.completed ? 'completed' : ''}\`}>
            <span onClick={() => toggleTodo(todo.id)} className="todo-text">
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));`,"styles.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
}

.todo-app {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.todo-app h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.input-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.input-container input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.input-container button {
  padding: 0.75rem 1.5rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
}

.input-container button:hover {
  background: #0056b3;
}

.todos {
  space-y: 1rem;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #666;
}

.todo-text {
  cursor: pointer;
  flex: 1;
}

.delete-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.delete-btn:hover {
  background: #c82333;
}`,"package.json":`{
  "name": "todo-app",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["todo", "react", "app"],
  "author": "DreamBuild",
  "license": "MIT"
}`}}createEcommerceTemplate(e){return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Store</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
    <script src="App.jsx"><\/script>
</body>
</html>`,"App.jsx":`import React, { useState } from 'react';

function EcommerceStore() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Phone', price: 699, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Tablet', price: 399, image: 'https://via.placeholder.com/200' }
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="ecommerce-store">
      <header>
        <h1>E-commerce Store</h1>
        <div className="cart">
          <span>Cart ({cart.length})</span>
          <span>Total: $${getTotalPrice()}</span>
        </div>
      </header>

      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>$${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-items">
          <h2>Cart Items</h2>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} - $${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<EcommerceStore />, document.getElementById('root'));`,"styles.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f8f9fa;
  min-height: 100vh;
}

.ecommerce-store {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

header h1 {
  color: #333;
}

.cart {
  display: flex;
  gap: 1rem;
  font-weight: bold;
  color: #007bff;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.product-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.product-card h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.product-card p {
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1rem;
}

.product-card button {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
}

.product-card button:hover {
  background: #0056b3;
}

.cart-items {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.cart-items h2 {
  margin-bottom: 1rem;
  color: #333;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.cart-item button {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}`,"package.json":`{
  "name": "ecommerce-store",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["ecommerce", "store", "react"],
  "author": "DreamBuild",
  "license": "MIT"
}`}}createAPITemplate(e){return{"server.js":`const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Date.now(), name, email };
  res.json(newUser);
});

app.listen(PORT, () => {

});`,"package.json":`{
  "name": "api-server",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  },
  "keywords": ["api", "express", "nodejs"],
  "author": "DreamBuild",
  "license": "MIT"
}`}}createDefaultTemplate(e){return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to Your DreamBuild App!</h1>
        <p>Generated based on: "${e}"</p>
        
        <div class="content">
            <h2>Your Application</h2>
            <p>This is a starter application generated by DreamBuild. You can customize it further by editing the files in your project.</p>
            
            <h3>Features:</h3>
            <ul>
                <li>Responsive design</li>
                <li>Modern styling</li>
                <li>Clean code structure</li>
            </ul>
            
            <p>To run this application, simply open the index.html file in your web browser.</p>
        </div>
    </div>
</body>
</html>`,"styles.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.content {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
  text-align: left;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

li:before {
  content: "✓ ";
  color: #4CAF50;
  font-weight: bold;
}`,"package.json":`{
  "name": "dreambuild-app",
  "version": "1.0.0",
  "description": "Generated by DreamBuild",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "dev": "python -m http.server 8000"
  },
  "keywords": ["dreambuild", "generated", "web-app"],
  "author": "DreamBuild",
  "license": "MIT"
}`}}getServiceHealth(){return{"cloud-ai":{isHealthy:this.isHealthy}}}getUsageStats(){return{totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0}}}const l=new k;class T{constructor(){this.currentService="cloud-ai",this.usageStats={totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0},console.log("🤖 Simple AI Service initialized - Cloud AI with Open Source Models!")}getServices(){return{"cloud-ai":{name:"Cloud AI Models",type:"Cloud",description:"Open source AI models via Hugging Face - no API keys required",models:l.getAvailableModels()},"local-ai":{name:"Local AI Models",type:"Local",description:"Self-hosted AI models - no API keys required",models:n.getAvailableModels()}}}getTemplateCategories(){return n.getTemplateCategories()}getTemplatesByCategory(e){return n.getTemplatesByCategory(e)}async getAllTemplates(){return await n.getAllTemplates()}async generateTemplateById(e,t={}){return await n.generateTemplateById(e,t)}async searchTemplates(e){return await n.searchTemplates(e)}async getPopularTemplates(){return await n.getPopularTemplates()}async generateCode(e,t={}){const a=Date.now();this.usageStats.totalRequests++;try{if(console.log("🚀 Generating code with Cloud AI..."),this.currentService==="cloud-ai"){const r=await l.generateCode(e,t),i=Date.now()-a;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+i)/2,console.log("✅ Code generated successfully with Cloud AI!"),r}if(n.isHealthy){console.log("🔄 Falling back to Local AI...");const r=await n.generateCode(e,t),i=Date.now()-a;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+i)/2,console.log("✅ Code generated successfully with Local AI!"),r}return console.log("⚠️ No AI services available, using template fallback"),l.createFallbackResponse(e,t)}catch(r){return console.error("❌ AI generation failed:",r),this.usageStats.failedRequests++,console.log("🔄 Falling back to template generation..."),l.createFallbackResponse(e,t)}}getServiceHealth(){return{"cloud-ai":l.getServiceHealth(),"local-ai":n.modelHealth}}getUsageStats(){return this.usageStats}getUserPreferences(){return{preferredService:"cloud-ai",fallbackEnabled:!0,autoHealthCheck:!0}}updateUserPreferences(e){localStorage.setItem("dreambuild-preferences",JSON.stringify(e))}loadUserPreferences(){const e=localStorage.getItem("dreambuild-preferences");return e?JSON.parse(e):this.getUserPreferences()}getServiceStatus(){return{"cloud-ai":{isHealthy:l.isHealthy,models:l.getHealthyModels().length,totalModels:l.getAvailableModels().length},"local-ai":{isHealthy:n.isHealthy,models:n.getHealthyModels().length,totalModels:n.getAvailableModels().length}}}resetServiceHealth(){n.modelHealth={}}getFallbackOrder(){return["cloud-ai","local-ai"]}isFallbackEnabled(){return!0}setFallbackEnabled(e){return!0}getSetupInstructions(){return{"cloud-ai":{title:"Cloud AI Setup",description:"Open source AI models via Hugging Face - no setup required",steps:["1. Cloud AI is ready to use with open source models","2. No API keys or installation required","3. Models include CodeLlama, StarCoder, DeepSeek, and more","4. Start generating code immediately!"],isSetup:l.isHealthy},"local-ai":{title:"Local AI Setup",description:"Set up local AI models for code generation",steps:["1. Install Ollama from https://ollama.ai","2. Run: ollama pull codellama:7b","3. Run: ollama serve","4. Refresh DreamBuild to start using local AI"],isSetup:n.isHealthy}}}getServicesNeedingSetup(){const e=[];return l.isHealthy||e.push("cloud-ai"),n.isHealthy||e.push("local-ai"),e}hasValidApiKey(e){return e==="cloud-ai"||e==="local-ai"}setService(e){(e==="cloud-ai"||e==="local-ai")&&(this.currentService=e)}getCurrentService(){return this.currentService}}const S=new T;export{S as default};
