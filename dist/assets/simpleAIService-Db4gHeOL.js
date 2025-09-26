import{a as C}from"./utils-vendor-ngrFHoWO.js";import{i as I,g as F,f as j,e as L,o as E,A as $,j as l,l as m,h as v,p as w,v as x,q as g,w as f,x as k,t as P}from"./firebase-HQh6JyMG.js";import{e as z,r as B,c as M,g as N}from"./index-DGbq-XMg.js";class U{constructor(){this.baseURL="https://api.github.com",this.trendingRepos=[],this.templateCache=new Map,this.cacheExpiry=30*60*1e3,this.isLoading=!1,console.log("🔗 GitHub Template Service initialized")}async getTrendingTemplates(e="javascript",a="stars",t="desc"){if(this.isLoading)return this.trendingRepos;this.isLoading=!0;try{console.log("📡 Fetching trending GitHub templates...");const r=["stars:>100 topic:todo-app","stars:>100 topic:calculator","stars:>100 topic:weather-app","stars:>100 topic:game","stars:>100 topic:portfolio","stars:>100 topic:blog","stars:>100 topic:landing-page","stars:>50 topic:react-tutorial","stars:>50 topic:javascript-project","stars:>50 topic:html-css"],n=[];for(const o of r)try{console.log(`📈 Fetching trending repositories: ${o}`);const c=await fetch(`${this.baseURL}/search/repositories?q=${encodeURIComponent(o)}&sort=stars&order=desc&per_page=20`,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"DreamBuild-Template-Service"}});if(!c.ok)if(console.error(`GitHub API error for query "${o}": ${c.status}`),c.status===403||c.status===429){console.log("⚠️ Rate limit hit, returning cached/fallback templates");const h=this.getFallbackTemplates();return this.trendingRepos=h,h}else if(c.status===422){console.log(`⚠️ Invalid query "${o}", skipping...`);continue}else{console.log(`⚠️ API error ${c.status} for query "${o}", skipping...`);continue}const d=await c.json();if(d.items&&d.items.length>0){console.log(`📈 Found ${d.items.length} trending template repositories for: ${o}`);const h=d.items.filter(T=>this.isTemplateRepository(T));n.push(...h)}await new Promise(h=>setTimeout(h,500))}catch(c){console.error(`Error fetching templates for ${o}:`,c);continue}const s=this.deduplicateRepos(n),i=this.filterTemplateRepos(s);if(i.length<10){console.log("📦 Adding fallback templates due to limited API results");const o=this.getFallbackTemplates();i.push(...o)}return this.trendingRepos=i.slice(0,25),console.log(`✅ Found ${this.trendingRepos.length} template repositories`),this.trendingRepos}catch(r){return console.error("❌ Failed to fetch trending templates:",r),this.getFallbackTemplates()}finally{this.isLoading=!1}}async getRepositoryTemplate(e){const a=`repo_${e.id}`;if(this.templateCache.has(a)){const t=this.templateCache.get(a);if(Date.now()-t.timestamp<this.cacheExpiry)return t.data}try{console.log(`📦 Processing template: ${e.full_name}`);const t=await this.getRepositoryContents(e.full_name),r=await this.parseRepositoryTemplate(e,t);return this.templateCache.set(a,{data:r,timestamp:Date.now()}),r}catch(t){return console.error(`❌ Failed to process template ${e.full_name}:`,t),null}}async getRepositoryContents(e,a=""){try{const t=await fetch(`${this.baseURL}/repos/${e}/contents/${a}`);if(!t.ok)throw new Error(`GitHub API error: ${t.status}`);return await t.json()}catch(t){return console.error(`Failed to fetch contents for ${e}:`,t),[]}}async parseRepositoryTemplate(e,a){const t=this.transformRepositoryToTemplate(e),r=this.extractKeyFiles(a);return t.files=r,t.fileCount=r.length,t.preview=e.owner?.avatar_url||"/api/placeholder/400/300",t}detectTemplateType(e,a){const t=e.name.toLowerCase(),r=(e.description||"").toLowerCase(),n=(e.topics||[]).join(" ").toLowerCase(),s=`${t} ${r} ${n}`;return s.includes("react-native")||s.includes("expo")||s.includes("flutter")||s.includes("mobile")?"mobile":s.includes("react")||s.includes("nextjs")||s.includes("next.js")||s.includes("gatsby")?"react":s.includes("vue")||s.includes("nuxt")||s.includes("quasar")?"vue":s.includes("angular")||s.includes("ionic")?"angular":s.includes("svelte")||s.includes("sveltekit")?"svelte":s.includes("node")||s.includes("express")||s.includes("koa")||s.includes("fastify")?"nodejs":s.includes("python")||s.includes("django")||s.includes("flask")||s.includes("fastapi")?"python":s.includes("php")||s.includes("laravel")||s.includes("symfony")||s.includes("codeigniter")?"php":s.includes("go")||s.includes("golang")||s.includes("gin")?"go":s.includes("rust")||s.includes("actix")||s.includes("rocket")?"rust":s.includes("java")||s.includes("spring")||s.includes("maven")?"java":s.includes("api")||s.includes("rest")||s.includes("graphql")||s.includes("microservice")?"api":s.includes("dashboard")||s.includes("admin")||s.includes("panel")?"dashboard":s.includes("ecommerce")||s.includes("e-commerce")||s.includes("shop")||s.includes("store")?"ecommerce":s.includes("blog")||s.includes("cms")||s.includes("content")?"blog":s.includes("portfolio")||s.includes("personal")||s.includes("resume")?"portfolio":s.includes("landing")||s.includes("marketing")||s.includes("promo")?"landing":s.includes("cms")||s.includes("content-management")||s.includes("headless")?"cms":s.includes("ui")||s.includes("ux")||s.includes("design-system")||s.includes("component-library")?"ui":s.includes("test")||s.includes("testing")||s.includes("e2e")||s.includes("unit-test")?"testing":s.includes("devops")||s.includes("ci-cd")||s.includes("docker")||s.includes("kubernetes")?"devops":s.includes("database")||s.includes("sql")||s.includes("nosql")||s.includes("mongodb")||s.includes("postgresql")?"database":s.includes("auth")||s.includes("authentication")||s.includes("jwt")||s.includes("oauth")?"auth":s.includes("payment")||s.includes("stripe")||s.includes("paypal")||s.includes("billing")?"payment":s.includes("analytics")||s.includes("tracking")||s.includes("metrics")||s.includes("monitoring")?"analytics":s.includes("documentation")||s.includes("docs")||s.includes("readme")||s.includes("guide")?"documentation":"web"}extractKeyFiles(e){const a=[],t=["package.json","package-lock.json","yarn.lock","index.html","index.js","index.jsx","index.ts","index.tsx","App.js","App.jsx","App.ts","App.tsx","main.js","main.ts","main.jsx","main.tsx","src/","components/","pages/","views/","README.md","readme.md","docker-compose.yml","Dockerfile","tsconfig.json","webpack.config.js","vite.config.js","tailwind.config.js","postcss.config.js"];return e.forEach(r=>{t.some(n=>r.name.toLowerCase()===n.toLowerCase()||r.name.toLowerCase().startsWith(n.toLowerCase()))&&a.push({name:r.name,path:r.path,type:r.type,size:r.size,downloadUrl:r.download_url})}),a.slice(0,20)}generateTemplateName(e){return e.split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ").replace(/template|starter|boilerplate|example|demo/gi,"").trim()}categorizeTemplate(e,a){return{react:"web-apps",vue:"web-apps",angular:"web-apps",svelte:"web-apps",nodejs:"web-apps",python:"web-apps",php:"web-apps",go:"web-apps",rust:"web-apps",java:"web-apps",mobile:"mobile-apps",api:"apis",dashboard:"dashboards",ecommerce:"e-commerce",blog:"portfolios",portfolio:"portfolios",landing:"landing-pages",cms:"web-apps",ui:"web-apps",testing:"web-apps",devops:"apis",database:"apis",auth:"apis",payment:"apis",analytics:"dashboards",documentation:"portfolios",web:"web-apps"}[e]||"web-apps"}generateTags(e,a){const t=[a];e.language&&t.push(e.language.toLowerCase()),e.topics&&t.push(...e.topics.slice(0,3));const r={react:["react","javascript"],vue:["vue","javascript"],angular:["angular","typescript"],nodejs:["nodejs","express"],python:["python","django"],mobile:["react-native","mobile"]};return r[a]&&t.push(...r[a]),[...new Set(t)].slice(0,5)}deduplicateRepos(e){const a=new Set;return e.filter(t=>a.has(t.id)?!1:(a.add(t.id),!0))}isTemplateRepository(e){const a=e.name.toLowerCase(),t=(e.description||"").toLowerCase(),r=(e.topics||[]).join(" ").toLowerCase(),s=["todo-app","calculator","weather-app","recipe-app","expense-tracker","note-taking","bookmark-manager","task-manager","habit-tracker","budget-planner","calendar-app","contact-book","photo-gallery","music-player","video-player","chat-app","forum","blog","portfolio","landing-page","online-store","restaurant-menu","event-planner","booking-system","survey-form","quiz-app","game","puzzle","memory-game","tic-tac-toe","snake-game","pong","breakout","maze","word-search","sudoku","hangman","trivia","flashcards","timer","stopwatch","pomodoro","countdown","random-generator","password-generator","color-picker","unit-converter","currency-converter","tip-calculator","bmi-calculator","age-calculator","date-calculator","percentage-calculator","loan-calculator","mortgage-calculator","investment-calculator","tax-calculator","grade-calculator","gpa-calculator","starter","template","example","demo","sample","tutorial","beginner","simple","basic"].some(d=>a.includes(d)||t.includes(d)||r.includes(d)),i=e.stargazers_count>=10,o=new Date(e.updated_at)>new Date("2019-01-01"),c=e.description&&e.description.length>10;return s&&i&&o&&c}filterTemplateRepos(e){return e.filter(a=>this.isTemplateRepository(a))}async searchTemplates(e,a="all"){return(await this.getTrendingTemplates()).filter(r=>{const n=r.name.toLowerCase().includes(e.toLowerCase())||r.description.toLowerCase().includes(e.toLowerCase())||r.tags.some(i=>i.toLowerCase().includes(e.toLowerCase())),s=a==="all"||r.category===a;return n&&s})}async getTemplateById(e){const t=(await this.getTrendingTemplates()).find(r=>r.id===e);return t?await this.getRepositoryTemplate(t):null}async getTemplatesByCategory(e){return(await this.getTrendingTemplates()).filter(t=>t.category===e)}async getPopularTemplates(e=10){return(await this.getTrendingTemplates()).sort((t,r)=>r.popularity-t.popularity).slice(0,e)}getFallbackTemplates(){return[{id:"fallback-todo-1",name:"Simple Todo App",description:"A clean and simple todo application with add, edit, and delete functionality.",category:"todo-app",templateType:"web",difficulty:"beginner",estimatedTime:"2-4 hours",tags:["javascript","html","css","todo","task-management"],popularity:85,stars:150,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/simple-todo-app",features:["Add tasks","Mark complete","Delete tasks","Local storage"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999001,fullName:"example/simple-todo-app",htmlUrl:"https://github.com/example/simple-todo-app",cloneUrl:"https://github.com/example/simple-todo-app.git",language:"JavaScript",stargazersCount:150,forksCount:25,topics:["todo","javascript","html","css"],owner:"example"}},{id:"fallback-calculator-1",name:"Basic Calculator",description:"A functional calculator with basic arithmetic operations.",category:"calculator",templateType:"web",difficulty:"beginner",estimatedTime:"1-2 hours",tags:["javascript","html","css","calculator","math"],popularity:90,stars:200,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/basic-calculator",features:["Basic operations","Clear function","Responsive design"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999002,fullName:"example/basic-calculator",htmlUrl:"https://github.com/example/basic-calculator",cloneUrl:"https://github.com/example/basic-calculator.git",language:"JavaScript",stargazersCount:200,forksCount:30,topics:["calculator","javascript","math"],owner:"example"}},{id:"fallback-weather-1",name:"Weather Dashboard",description:"A weather app that displays current conditions and forecast.",category:"weather-app",templateType:"web",difficulty:"intermediate",estimatedTime:"3-5 hours",tags:["javascript","api","weather","dashboard"],popularity:75,stars:120,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/weather-dashboard",features:["Current weather","5-day forecast","Location search"],techStack:["HTML","CSS","JavaScript","Weather API"],isFallback:!0,githubData:{id:999003,fullName:"example/weather-dashboard",htmlUrl:"https://github.com/example/weather-dashboard",cloneUrl:"https://github.com/example/weather-dashboard.git",language:"JavaScript",stargazersCount:120,forksCount:20,topics:["weather","api","dashboard"],owner:"example"}},{id:"fallback-portfolio-1",name:"Personal Portfolio",description:"A modern, responsive portfolio website template.",category:"portfolio",templateType:"web",difficulty:"intermediate",estimatedTime:"4-6 hours",tags:["html","css","javascript","portfolio","responsive"],popularity:95,stars:300,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/personal-portfolio",features:["Responsive design","Project showcase","Contact form"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999004,fullName:"example/personal-portfolio",htmlUrl:"https://github.com/example/personal-portfolio",cloneUrl:"https://github.com/example/personal-portfolio.git",language:"HTML",stargazersCount:300,forksCount:50,topics:["portfolio","responsive","html","css"],owner:"example"}},{id:"fallback-game-1",name:"Snake Game",description:"Classic Snake game built with vanilla JavaScript.",category:"game",templateType:"web",difficulty:"intermediate",estimatedTime:"3-4 hours",tags:["javascript","game","canvas","snake"],popularity:80,stars:180,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/snake-game",features:["Keyboard controls","Score tracking","Game over screen"],techStack:["HTML","CSS","JavaScript","Canvas"],isFallback:!0,githubData:{id:999005,fullName:"example/snake-game",htmlUrl:"https://github.com/example/snake-game",cloneUrl:"https://github.com/example/snake-game.git",language:"JavaScript",stargazersCount:180,forksCount:35,topics:["game","snake","canvas","javascript"],owner:"example"}}]}transformRepositoryToTemplate(e,a="web"){return{id:`github_${e.id}`,name:this.generateTemplateName(e.name),description:e.description||`Template based on ${e.full_name}`,category:this.categorizeTemplate(this.detectTemplateType(e,[]),e),templateType:this.detectTemplateType(e,[]),difficulty:this.estimateDifficulty(e),estimatedTime:this.estimateTime(e),tags:this.generateTags(e,this.detectTemplateType(e,[])),popularity:Math.min(Math.floor(e.stargazers_count/100),100),stars:e.stargazers_count,lastUpdated:e.updated_at,createdAt:e.created_at,source:"github",repositoryUrl:e.html_url,features:this.extractFeatures(e),techStack:this.extractTechStack(e),githubData:{id:e.id,fullName:e.full_name,htmlUrl:e.html_url,cloneUrl:e.clone_url,language:e.language,stargazersCount:e.stargazers_count,forksCount:e.forks_count,topics:e.topics||[],owner:e.owner?.login}}}estimateDifficulty(e){return e.stargazers_count>500?"advanced":e.stargazers_count>100?"intermediate":"beginner"}estimateTime(e){const a=e.stargazers_count;return a>500?"6-8 hours":a>100?"3-5 hours":"1-3 hours"}extractFeatures(e){const a=[],t=e.name.toLowerCase(),r=(e.description||"").toLowerCase();return(t.includes("todo")||r.includes("todo"))&&a.push("Task management","Add/Edit tasks","Mark complete"),(t.includes("calculator")||r.includes("calculator"))&&a.push("Basic operations","Clear function"),(t.includes("weather")||r.includes("weather"))&&a.push("Current weather","Forecast","Location search"),(t.includes("portfolio")||r.includes("portfolio"))&&a.push("Project showcase","Responsive design","Contact form"),(t.includes("game")||r.includes("game"))&&a.push("Interactive gameplay","Score tracking"),a.length>0?a:["Modern design","Responsive layout"]}extractTechStack(e){const a=[];e.language&&a.push(e.language);const t=e.topics||[];return t.includes("react")&&a.push("React"),t.includes("vue")&&a.push("Vue"),t.includes("angular")&&a.push("Angular"),t.includes("html")&&a.push("HTML"),t.includes("css")&&a.push("CSS"),t.includes("javascript")&&a.push("JavaScript"),t.includes("typescript")&&a.push("TypeScript"),a.length>0?a:["HTML","CSS","JavaScript"]}clearCache(){this.templateCache.clear(),this.trendingRepos=[],console.log("🗑️ GitHub template cache cleared")}}const y=new U,R={"codellama-7b":{name:"CodeLlama 7B",type:"Code Generation",baseURL:"http://localhost:11434/api",model:"codellama:7b",description:"Fast and efficient code generation (7B parameters)",languages:["python","javascript","java","cpp","go","rust","php","ruby"],strengths:["speed","efficiency","general-purpose"],ram_required:"8GB"},auto:{name:"Auto Select",type:"Auto Selection",baseURL:"http://localhost:11434/api",model:"auto",description:"Automatically selects the best available model",languages:["all"],strengths:["smart-selection","availability"],ram_required:"variable"}},S={"web-apps":{name:"Web Applications",description:"Full-stack web applications",templates:[{id:"react-dashboard",name:"React Dashboard",description:"Modern React dashboard with charts and analytics",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"ecommerce-store",name:"E-commerce Store",description:"Complete online store with cart and checkout",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]}]},"mobile-apps":{name:"Mobile Applications",description:"React Native mobile applications",templates:[{id:"todo-app",name:"Todo App",description:"Simple todo application with React Native",category:"mobile-apps",files:["App.js","components/TodoItem.js","styles.js"]}]}};class H{constructor(){if(this.isHealthy=!1,this.modelHealth={},this.availableModels=Object.keys(R),this.baseURL="http://localhost:11434/api",this.isProduction=window.location.protocol==="https:",this.isLocalhost=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",this.isProduction&&!this.isLocalhost){console.log("🌐 Production environment detected - skipping local AI detection"),this.isHealthy=!1;return}console.log("🔍 Initializing local AI health monitoring..."),this.checkHealth(),setInterval(()=>{this.checkHealthQuiet()},3e4)}async checkHealth(){if(!(this.isProduction&&!this.isLocalhost))try{const e=await C.get(`${this.baseURL}/tags`,{timeout:3e3});if(e.status===200){const a=this.isHealthy;this.isHealthy=!0,a||console.log("✅ Local AI service is healthy");const t=e.data.models||[];this.modelHealth={},t.forEach(r=>{this.modelHealth[r.name]={isHealthy:!0,size:r.size,modified_at:r.modified_at}})}else{const a=this.isHealthy;this.isHealthy=!1,a&&console.log("⚠️ Local AI service is not responding")}}catch(e){const a=this.isHealthy;this.isHealthy=!1,e.code==="ERR_NETWORK"||e.message.includes("CORS")?a||console.log("🔒 Local AI not accessible (CORS/Network) - using cloud AI"):e.code==="ECONNREFUSED"?a||console.log("💻 Ollama not running locally - using cloud AI"):a||console.log("⚠️ Local AI service not available:",e.message)}}async checkHealthQuiet(){if(!(this.isProduction&&!this.isLocalhost))try{const e=await C.get(`${this.baseURL}/tags`,{timeout:3e3});if(e.status===200){const a=this.isHealthy;this.isHealthy=!0;const t=e.data.models||[];this.modelHealth={},t.forEach(r=>{this.modelHealth[r.name]={isHealthy:!0,size:r.size,modified_at:r.modified_at}})}else this.isHealthy=!1}catch{this.isHealthy=!1}}getAvailableModels(){return Object.values(R)}getHealthyModels(){return Object.keys(this.modelHealth).filter(e=>this.modelHealth[e].isHealthy)}getTemplateCategories(){return S}getTemplatesByCategory(e){return S[e]?.templates||[]}async getAllTemplates(){const e=[];Object.values(S).forEach(r=>{e.push(...r.templates)});const t=(await y.getTrendingTemplates()).map(r=>y.transformRepositoryToTemplate(r));return[...e,...t]}async searchTemplates(e){const a=[];Object.values(S).forEach(s=>{a.push(...s.templates)});const r=(await y.searchTemplates(e)).map(s=>y.transformRepositoryToTemplate(s));return[...a,...r].filter(s=>s.name.toLowerCase().includes(e.toLowerCase())||(s.description||"").toLowerCase().includes(e.toLowerCase()))}async getPopularTemplates(){const e=[];Object.values(S).forEach(n=>{e.push(...n.templates)});const t=(await y.getPopularTemplates(5)).map(n=>y.transformRepositoryToTemplate(n));return[...e,...t].sort((n,s)=>(s.popularity||0)-(n.popularity||0)).slice(0,10)}async generateTemplateById(e,a={}){if(e.startsWith("github_"))return await this.generateGitHubTemplate(e,a);const t=[];Object.values(S).forEach(n=>{t.push(...n.templates)});const r=t.find(n=>n.id===e);if(!r)throw new Error(`Template ${e} not found`);return this.createTemplateFiles(r,a)}async generateGitHubTemplate(e,a={}){try{console.log(`🚀 Generating GitHub template: ${e}`);const t=await y.getTemplateById(e);if(!t)throw new Error(`GitHub template ${e} not found`);const r=await this.createGitHubTemplateFiles(t,a);return console.log(`✅ Generated ${Object.keys(r).length} files from GitHub template`),r}catch(t){throw console.error(`❌ Failed to generate GitHub template ${e}:`,t),t}}async createGitHubTemplateFiles(e,a={}){const t={};try{const{githubData:r}=e;return t["README.md"]=`# ${e.name}

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
`,t["package.json"]=this.createPackageJson(e,a),t[this.getMainFileName(e)]=this.createMainFile(e,a),(e.templateType==="react"||e.templateType==="vue"||e.templateType==="web")&&(t["index.html"]=this.createIndexHtml(e,a)),Object.entries(a).forEach(([n,s])=>{typeof s=="string"&&(t[n]=s)}),t}catch(r){throw console.error("Failed to create GitHub template files:",r),r}}createPackageJson(e,a={}){const t={name:e.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:e.description,main:this.getMainFileName(e),scripts:{start:"npm run dev",dev:this.getDevScript(e),build:this.getBuildScript(e),test:'echo "No tests specified" && exit 0'},keywords:e.tags,author:a.author||"DreamBuild User",license:"MIT",repository:{type:"git",url:e.githubData.cloneUrl}};return t.dependencies=this.getTemplateDependencies(e),t.devDependencies=this.getTemplateDevDependencies(e),JSON.stringify(t,null,2)}getMainFileName(e){return{react:"src/App.jsx",vue:"src/main.js",angular:"src/main.ts",nodejs:"index.js",python:"main.py",mobile:"App.js",web:"index.js"}[e.templateType]||"index.js"}getDevScript(e){return{react:"react-scripts start",vue:"vue-cli-service serve",angular:"ng serve",nodejs:"nodemon index.js",python:"python main.py",mobile:"expo start",web:"live-server"}[e.templateType]||"node index.js"}getBuildScript(e){return{react:"react-scripts build",vue:"vue-cli-service build",angular:"ng build",nodejs:'echo "No build step needed"',python:'echo "No build step needed"',mobile:"expo build",web:'echo "No build step needed"'}[e.templateType]||'echo "No build step needed"'}getTemplateDependencies(e){return{react:{react:"^18.0.0","react-dom":"^18.0.0"},vue:{vue:"^3.0.0"},angular:{"@angular/core":"^15.0.0","@angular/common":"^15.0.0"},svelte:{svelte:"^3.0.0"},nodejs:{express:"^4.18.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{"react-native":"^0.70.0",expo:"~47.0.0"},api:{express:"^4.18.0"},dashboard:{react:"^18.0.0","react-dom":"^18.0.0"},ecommerce:{react:"^18.0.0","react-dom":"^18.0.0"},blog:{next:"^13.0.0",react:"^18.0.0"},portfolio:{react:"^18.0.0","react-dom":"^18.0.0"},landing:{react:"^18.0.0","react-dom":"^18.0.0"},web:{}}[e.templateType]||{}}getTemplateDevDependencies(e){return{react:{"react-scripts":"5.0.1"},vue:{"@vue/cli-service":"^5.0.0"},angular:{"@angular/cli":"^15.0.0"},svelte:{vite:"^4.0.0"},nodejs:{nodemon:"^2.0.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{},api:{nodemon:"^2.0.0"},dashboard:{"react-scripts":"5.0.1"},ecommerce:{"react-scripts":"5.0.1"},blog:{next:"^13.0.0"},portfolio:{"react-scripts":"5.0.1"},landing:{"react-scripts":"5.0.1"},web:{"live-server":"^1.2.0"}}[e.templateType]||{}}createMainFile(e,a={}){const t={react:`import React from 'react';
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
// PORT removed - not needed in browser code

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
// PORT removed - not needed in browser code

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
// Repository: ${e.githubData.htmlUrl}`};return t[e.templateType]||t.web}createIndexHtml(e,a={}){return`<!DOCTYPE html>
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
</html>`}createTemplateFiles(e,a={}){const t={};switch(e.id){case"react-dashboard":t["index.html"]=`<!DOCTYPE html>
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
</html>`,t["App.jsx"]=`import React, { useState } from 'react';

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

ReactDOM.render(<Dashboard />, document.getElementById('root'));`,t["styles.css"]=`* {
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
}`,t["package.json"]=`{
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
}`;break;case"todo-app":t["App.js"]=`import React, { useState } from 'react';
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
}`,t["styles.js"]=`import { StyleSheet } from 'react-native';

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
});`;break;default:t["index.html"]=`<!DOCTYPE html>
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
</html>`}return t}async generateCode(e,a={}){console.log("🚀 Starting code generation for prompt:",e);try{return this.isProduction&&!this.isLocalhost?(console.log("🌐 Production environment - using template fallback"),this.createFallbackResponse(e,a)):this.isHealthy?await this.generateWithLocalAI(e,a):(console.log("⚠️ Local AI not available, using template fallback"),this.createFallbackResponse(e,a))}catch(t){return console.error("❌ Code generation failed:",t),this.createFallbackResponse(e,a)}}async generateWithLocalAI(e,a={}){const t=this.getBestAvailableModel(),r=this.createSystemPrompt(a),n={model:t,messages:[{role:"system",content:r},{role:"user",content:e}],stream:!1,options:{temperature:.7,top_p:.9,max_tokens:4e3}};try{const s=await C.post(`${this.baseURL}/chat`,n,{timeout:3e4,headers:{"Content-Type":"application/json"}});if(s.data&&s.data.message&&s.data.message.content){const i=s.data.message.content;return this.parseAIResponse(i,e)}else throw new Error("Invalid response from local AI")}catch(s){throw console.error("❌ Local AI generation failed:",s),s}}getBestAvailableModel(){const e=this.getHealthyModels();return e.includes("codellama:7b")?"codellama:7b":e.includes("codellama:13b")?"codellama:13b":e.includes("codellama:34b")?"codellama:34b":e[0]||"codellama:7b"}createSystemPrompt(e={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

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

Generate practical, working applications that users can immediately use.`}parseAIResponse(e,a){try{const t=e.match(/\{[\s\S]*\}/);if(t){const r=JSON.parse(t[0]);if(r.files)return r.files}return this.createFallbackResponse(a,{})}catch(t){return console.error("❌ Failed to parse AI response:",t),this.createFallbackResponse(a,{})}}createFallbackResponse(e,a={}){console.log("🔄 Creating fallback response for prompt:",e);const t=e.toLowerCase();return t.includes("dashboard")||t.includes("analytics")?this.generateTemplateById("react-dashboard",a):t.includes("todo")||t.includes("task")?this.generateTemplateById("todo-app",a):t.includes("ecommerce")||t.includes("store")||t.includes("shop")?this.generateTemplateById("ecommerce-store",a):{"index.html":`<!DOCTYPE html>
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
}`}}}const u=new H;class O{constructor(){this.app=null,this.db=null,this.storage=null,this.auth=null,this.user=null,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const e={apiKey:"your-api-key",authDomain:"your-project.firebaseapp.com",projectId:"your-project-id",storageBucket:"your-project.appspot.com",messagingSenderId:"123456789",appId:"your-app-id"};try{this.app=I(e)}catch(a){if(a.code==="app/duplicate-app")this.app=F();else if(a.code==="app/no-options")try{this.app=F()}catch{this.app=I({apiKey:"demo-key",authDomain:"demo.firebaseapp.com",projectId:"demo-project"})}else throw a}this.db=j(this.app),this.storage=z(this.app),this.auth=L(this.app),E(this.auth,a=>{this.user=a,console.log("Firebase auth state changed:",a?"authenticated":"not authenticated")});try{await $(this.auth),console.log("✅ Firebase anonymous auth successful")}catch(a){console.log("⚠️ Firebase auth not available, continuing without authentication:",a.message),this.user=null}this.isInitialized=!0,console.log("🔥 Firebase initialized successfully")}catch(e){console.error("❌ Failed to initialize Firebase:",e),this.isInitialized=!1,this.user=null,console.log("⚠️ Continuing without Firebase services")}}async storeProjectContext(e,a){try{await this.initialize();const t=l(this.db,"projectContexts",e);await m(t,{...a,userId:this.user?.uid||"anonymous",storedAt:new Date().toISOString(),dataSize:JSON.stringify(a).length}),console.log("✅ Project context stored successfully")}catch(t){throw console.error("❌ Failed to store project context:",t),t}}async loadProjectContext(e){try{await this.initialize();const a=l(this.db,"projectContexts",e),t=await v(a);return t.exists()?(console.log("✅ Project context loaded successfully"),t.data()):(console.log("❌ Project context not found"),null)}catch(a){return console.error("❌ Failed to load project context:",a),null}}async storeProjectFiles(e,a){try{await this.initialize();const t=l(this.db,"projectFiles",e);await m(t,{projectId:e,files:a,fileCount:Object.keys(a).length,totalSize:JSON.stringify(a).length,userId:this.user?.uid||"anonymous",storedAt:new Date().toISOString()}),console.log("✅ Project files stored successfully")}catch(t){throw console.error("❌ Failed to store project files:",t),t}}async loadProjectFiles(e){try{await this.initialize();const a=l(this.db,"projectFiles",e),t=await v(a);return t.exists()?(console.log("✅ Project files loaded successfully"),t.data().files):(console.log("❌ Project files not found"),null)}catch(a){return console.error("❌ Failed to load project files:",a),null}}async storeTemplate(e){try{await this.initialize();const a=l(this.db,"templates",e.id);await m(a,{...e,userId:this.user?.uid||"anonymous",updatedAt:new Date().toISOString()}),console.log("✅ Template stored successfully")}catch(a){throw console.error("❌ Failed to store template:",a),a}}async loadTemplates(){try{await this.initialize();const e=w(this.db,"templates"),a=await x(e),t=[];return a.forEach(r=>{t.push(r.data())}),console.log("✅ Templates loaded successfully"),t}catch(e){return console.error("❌ Failed to load templates:",e),[]}}async searchTemplates(e,a,t){try{await this.initialize();const r=w(this.db,"templates");let n=g(r);e&&e.length>0&&(n=g(n,f("keywords","array-contains-any",e))),a&&a.length>0&&(n=g(n,f("technologies","array-contains-any",a))),t&&t.length>0&&(n=g(n,f("patterns","array-contains-any",t)));const s=await x(n),i=[];return s.forEach(o=>{i.push(o.data())}),console.log("✅ Templates searched successfully"),i}catch(r){return console.error("❌ Failed to search templates:",r),[]}}async storeLargeFile(e,a,t){try{await this.initialize();const r=B(this.storage,`projects/${e}/${a}`),n=new Blob([t],{type:"text/plain"});await M(r,n);const s=await N(r);return console.log("✅ Large file stored successfully"),s}catch(r){throw console.error("❌ Failed to store large file:",r),r}}async loadLargeFile(e){try{const t=await(await fetch(e)).text();return console.log("✅ Large file loaded successfully"),t}catch(a){return console.error("❌ Failed to load large file:",a),null}}async getUserProjects(){try{await this.initialize();const e=w(this.db,"projectContexts"),a=g(e,f("userId","==",this.user?.uid||"anonymous")),t=await x(a),r=[];return t.forEach(n=>{r.push({id:n.id,...n.data()})}),console.log("✅ User projects loaded successfully"),r}catch(e){return console.error("❌ Failed to load user projects:",e),[]}}async deleteProject(e){try{await this.initialize();const a=l(this.db,"projectContexts",e);await k(a);const t=l(this.db,"projectFiles",e);await k(t),console.log("✅ Project deleted successfully")}catch(a){throw console.error("❌ Failed to delete project:",a),a}}async getStorageStats(){try{await this.initialize();const e=await this.getUserProjects();let a=0,t=0;for(const r of e)a+=r.dataSize||0,t+=r.fileCount||0;return{totalProjects:e.length,totalFiles:t,totalSize:a,totalSizeMB:Math.round(a/(1024*1024)*100)/100}}catch(e){return console.error("❌ Failed to get storage stats:",e),{totalProjects:0,totalFiles:0,totalSize:0,totalSizeMB:0}}}async storeConversationMemory(e,a){try{await this.initialize();const t=JSON.stringify(a),r=8e5;if(t.length>r){console.log("⚠️ Conversation data too large, storing in chunks");const n=this.chunkData(a,r);for(let s=0;s<n.length;s++){const i=l(this.db,"conversationMemory",`${e}_chunk_${s}`);await m(i,{projectId:e,chunkIndex:s,totalChunks:n.length,conversation:n[s],userId:this.user?.uid||"anonymous",lastUpdated:new Date().toISOString()})}console.log(`🧠 Conversation memory stored in ${n.length} chunks`)}else{const n=l(this.db,"conversationMemory",e);await m(n,{projectId:e,conversation:a,userId:this.user?.uid||"anonymous",lastUpdated:new Date().toISOString(),memorySize:t.length}),console.log("🧠 Conversation memory stored successfully")}}catch(t){throw console.error("❌ Failed to store conversation memory:",t),t}}chunkData(e,a){const t=[],r=JSON.stringify(e);let n=0;for(;n<r.length;){let s=Math.min(n+a,r.length);if(s<r.length){let i=r.lastIndexOf("}",s),o=r.lastIndexOf("]",s),c=r.lastIndexOf(",",s);const d=Math.max(i,o,c);d>n+a*.8&&(s=d+1)}try{t.push(JSON.parse(r.slice(n,s)))}catch{t.push(r.slice(n,s))}n=s}return t}async loadConversationMemory(e){try{await this.initialize();const a=l(this.db,"conversationMemory",e),t=await v(a);if(t.exists())return console.log("🧠 Conversation memory loaded successfully"),t.data().conversation;const r=w(this.db,"conversationMemory"),n=g(r,f("projectId","==",e)),s=await x(n);if(!s.empty){const i=[];s.forEach(c=>{i.push({index:c.data().chunkIndex,data:c.data().conversation})}),i.sort((c,d)=>c.index-d.index);const o=i.map(c=>c.data);return console.log(`🧠 Conversation memory loaded from ${i.length} chunks`),o}return console.log("❌ Conversation memory not found"),null}catch(a){return console.error("❌ Failed to load conversation memory:",a),null}}async addPromptToMemory(e,a,t,r){try{await this.initialize();let n=await this.loadConversationMemory(e)||{projectId:e,prompts:[],responses:[],context:{},createdAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return n.prompts.push({id:`prompt-${Date.now()}`,text:a,timestamp:new Date().toISOString(),context:r}),n.responses.push({id:`response-${Date.now()}`,promptId:n.prompts[n.prompts.length-1].id,text:t,timestamp:new Date().toISOString(),context:r}),n.context={...n.context,...r},n.lastUpdated=new Date().toISOString(),await this.storeConversationMemory(e,n),console.log("🧠 Prompt added to memory successfully"),n}catch(n){throw console.error("❌ Failed to add prompt to memory:",n),n}}async getConversationHistory(e,a=50){try{await this.initialize();const t=await this.loadConversationMemory(e);if(!t)return[];const r=t.prompts.slice(-a),n=t.responses.slice(-a);return{prompts:r,responses:n,context:t.context,totalPrompts:t.prompts.length,totalResponses:t.responses.length}}catch(t){return console.error("❌ Failed to get conversation history:",t),[]}}async searchConversationMemory(e,a){try{await this.initialize();const t=await this.loadConversationMemory(e);if(!t)return[];const r=[],n=a.toLowerCase();return t.prompts.forEach(s=>{s.text.toLowerCase().includes(n)&&r.push({type:"prompt",id:s.id,text:s.text,timestamp:s.timestamp,context:s.context})}),t.responses.forEach(s=>{s.text.toLowerCase().includes(n)&&r.push({type:"response",id:s.id,text:s.text,timestamp:s.timestamp,context:s.context})}),console.log("🔍 Conversation memory searched successfully"),r}catch(t){return console.error("❌ Failed to search conversation memory:",t),[]}}async getConversationContext(e,a){try{await this.initialize();const t=await this.loadConversationMemory(e);if(!t)return null;const r={projectId:e,currentPrompt:a,previousPrompts:t.prompts.slice(-10),previousResponses:t.responses.slice(-10),projectContext:t.context,conversationSummary:this.generateConversationSummary(t),relevantHistory:this.findRelevantHistory(t,a)};return console.log("🧠 Conversation context generated successfully"),r}catch(t){return console.error("❌ Failed to get conversation context:",t),null}}generateConversationSummary(e){const a=e.prompts,t=e.responses;return a.length===0?"No previous conversation":{totalPrompts:a.length,totalResponses:t.length,firstPrompt:a[0]?.text||"",lastPrompt:a[a.length-1]?.text||"",keyTopics:this.extractKeyTopics(a),projectEvolution:this.trackProjectEvolution(e)}}extractKeyTopics(e){const a=new Set;return e.forEach(t=>{t.text.toLowerCase().split(" ").forEach(n=>{n.length>4&&!this.isCommonWord(n)&&a.add(n)})}),Array.from(a).slice(0,10)}isCommonWord(e){return["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","two","way","who","boy","did","man","men","put","say","she","too","use"].includes(e)}trackProjectEvolution(e){const a=[],t=e.prompts,r=e.responses;for(let n=0;n<t.length;n++){const s=t[n],i=r[n];a.push({phase:n+1,prompt:s.text,response:i.text,timestamp:s.timestamp,context:s.context})}return a}findRelevantHistory(e,a){const t=[],r=a.toLowerCase().split(" ");return e.prompts.forEach((n,s)=>{const i=n.text.toLowerCase().split(" "),o=r.filter(c=>i.includes(c));o.length>2&&t.push({prompt:n.text,response:e.responses[s]?.text||"",relevance:o.length,timestamp:n.timestamp})}),t.sort((n,s)=>s.relevance-n.relevance).slice(0,5)}async storeAILearningPattern(e,a){try{await this.initialize();const t=l(this.db,"aiLearningPatterns",`${e}-${Date.now()}`);await m(t,{projectId:e,pattern:a,userId:this.user?.uid||"anonymous",createdAt:new Date().toISOString()}),console.log("🧠 AI learning pattern stored successfully")}catch(t){throw console.error("❌ Failed to store AI learning pattern:",t),t}}async getAILearningPatterns(e){try{await this.initialize();const a=w(this.db,"aiLearningPatterns"),t=g(a,f("projectId","==",e)),r=await x(t),n=[];return r.forEach(s=>{n.push(s.data())}),console.log("🧠 AI learning patterns loaded successfully"),n}catch(a){return console.error("❌ Failed to load AI learning patterns:",a),[]}}async clearConversationMemory(e){try{await this.initialize();const a=l(this.db,"conversationMemory",e);await k(a),console.log("🧠 Conversation memory cleared successfully")}catch(a){throw console.error("❌ Failed to clear conversation memory:",a),a}}async saveConversation(e){try{await this.initialize();const a=l(this.db,"conversations",e.id);await m(a,{...e,userId:this.user?.uid||"anonymous",updatedAt:new Date().toISOString()}),console.log("💬 Conversation saved successfully")}catch(a){throw console.error("❌ Failed to save conversation:",a),a}}async getConversation(e){try{await this.initialize();const a=l(this.db,"conversations",e),t=await v(a);return t.exists()?(console.log("💬 Conversation loaded successfully"),t.data()):null}catch(a){return console.error("❌ Failed to load conversation:",a),null}}async getUserConversations(){try{await this.initialize();const e=w(this.db,"conversations"),a=g(e,f("userId","==",this.user?.uid||"anonymous"),P("lastModified","desc")),t=await x(a),r=[];return t.forEach(n=>{r.push({id:n.id,...n.data()})}),console.log("💬 User conversations loaded successfully"),r}catch(e){return console.error("❌ Failed to load user conversations:",e),[]}}async saveFeatureRecommendations(e,a){try{await this.initialize();const t=l(this.db,"featureRecommendations",e);await m(t,{conversationId:e,recommendations:a,userId:this.user?.uid||"anonymous",createdAt:new Date().toISOString()}),console.log("🎯 Feature recommendations saved successfully")}catch(t){throw console.error("❌ Failed to save feature recommendations:",t),t}}async getFeatureRecommendations(e){try{await this.initialize();const a=l(this.db,"featureRecommendations",e),t=await v(a);return t.exists()?(console.log("🎯 Feature recommendations loaded successfully"),t.data().recommendations):[]}catch(a){return console.error("❌ Failed to load feature recommendations:",a),[]}}async saveIndustryStandardsCheck(e,a){try{await this.initialize();const t=l(this.db,"industryStandards",e);await m(t,{conversationId:e,standardsCheck:a,userId:this.user?.uid||"anonymous",checkedAt:new Date().toISOString()}),console.log("📊 Industry standards check saved successfully")}catch(t){throw console.error("❌ Failed to save industry standards check:",t),t}}async getIndustryStandardsCheck(e){try{await this.initialize();const a=l(this.db,"industryStandards",e),t=await v(a);return t.exists()?(console.log("📊 Industry standards check loaded successfully"),t.data().standardsCheck):null}catch(a){return console.error("❌ Failed to load industry standards check:",a),null}}}const D=new O;class q{constructor(){this.currentConversation=null,this.conversationHistory=[],this.projectContext={},this.featureRecommendations=[],this.industryStandards=this.getIndustryStandards()}async initializeConversation(e,a={}){try{return this.currentConversation={id:e||`conv_${Date.now()}`,projectData:a,messages:[],context:{currentFeatures:a.features||[],techStack:a.techStack||[],appType:a.appType||"web",complexity:a.complexity||"basic",industry:a.industry||"general"},createdAt:new Date,lastModified:new Date},await this.loadConversationHistory(e),console.log("🔄 Conversation initialized for project:",e),this.currentConversation}catch(t){throw console.error("Failed to initialize conversation:",t),t}}async addMessage(e,a=null,t="user"){if(!this.currentConversation)throw new Error("No active conversation. Initialize conversation first.");const r={id:`msg_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,type:t,content:e,aiResponse:a,timestamp:new Date,context:{projectState:{...this.currentConversation.context},features:[...this.currentConversation.context.currentFeatures]}};return this.currentConversation.messages.push(r),this.currentConversation.lastModified=new Date,await this.saveConversation(),r}getConversationContext(){if(!this.currentConversation)return null;const e=this.currentConversation.messages.slice(-10);return{project:this.currentConversation.projectData,currentFeatures:this.currentConversation.context.currentFeatures,techStack:this.currentConversation.context.techStack,appType:this.currentConversation.context.appType,complexity:this.currentConversation.context.complexity,industry:this.currentConversation.context.industry,recentMessages:e.map(t=>({type:t.type,content:t.content,timestamp:t.timestamp})),conversationId:this.currentConversation.id}}async generateFeatureRecommendations(){if(!this.currentConversation)return[];const e=this.getConversationContext(),a=e.currentFeatures||[],t=e.appType||"web",r=e.industry||"general",n=e.complexity||"basic",s=this.getIndustrySpecificRecommendations(r,t),i=this.getComplexityBasedRecommendations(n,t),o=this.getEssentialFeatureRecommendations(a,t),c=this.getAdvancedFeatureRecommendations(a,t,r),d=[...o,...s,...i,...c],h=this.deduplicateRecommendations(d,a),T=this.prioritizeRecommendations(h,e);return this.featureRecommendations=T.slice(0,10),this.featureRecommendations}getIndustrySpecificRecommendations(e,a){const t={ecommerce:[{name:"Shopping Cart",description:"Add shopping cart functionality with add/remove items",priority:"high",category:"core"},{name:"Payment Integration",description:"Integrate payment processing (Stripe, PayPal)",priority:"high",category:"payment"},{name:"Product Search",description:"Add search and filter functionality for products",priority:"medium",category:"search"},{name:"User Reviews",description:"Allow customers to review and rate products",priority:"medium",category:"social"},{name:"Inventory Management",description:"Track product stock and availability",priority:"high",category:"management"}],healthcare:[{name:"Patient Records",description:"Secure patient data management system",priority:"high",category:"data"},{name:"Appointment Scheduling",description:"Calendar system for booking appointments",priority:"high",category:"scheduling"},{name:"HIPAA Compliance",description:"Ensure healthcare data privacy compliance",priority:"critical",category:"security"},{name:"Prescription Management",description:"Digital prescription tracking and management",priority:"medium",category:"management"},{name:"Telemedicine",description:"Video consultation capabilities",priority:"medium",category:"communication"}],education:[{name:"Course Management",description:"Create and manage educational courses",priority:"high",category:"content"},{name:"Progress Tracking",description:"Track student learning progress and analytics",priority:"high",category:"analytics"},{name:"Quiz System",description:"Interactive quizzes and assessments",priority:"medium",category:"assessment"},{name:"Discussion Forums",description:"Student and teacher discussion boards",priority:"medium",category:"social"},{name:"Certificate Generation",description:"Automated certificate creation and delivery",priority:"low",category:"certification"}],finance:[{name:"Transaction History",description:"Detailed financial transaction tracking",priority:"high",category:"data"},{name:"Budget Planning",description:"Personal or business budget management tools",priority:"high",category:"planning"},{name:"Security Features",description:"Two-factor authentication and encryption",priority:"critical",category:"security"},{name:"Reporting Dashboard",description:"Financial reports and analytics dashboard",priority:"medium",category:"analytics"},{name:"Investment Tracking",description:"Portfolio and investment performance tracking",priority:"medium",category:"investment"}],general:[{name:"User Authentication",description:"Secure user login and registration system",priority:"high",category:"auth"},{name:"Data Validation",description:"Input validation and error handling",priority:"high",category:"validation"},{name:"Responsive Design",description:"Mobile-friendly responsive layout",priority:"high",category:"ui"},{name:"Search Functionality",description:"Search and filter capabilities",priority:"medium",category:"search"},{name:"Analytics Integration",description:"User behavior and performance analytics",priority:"medium",category:"analytics"}]};return t[e]||t.general}getComplexityBasedRecommendations(e,a){const t={basic:[{name:"Basic CRUD Operations",description:"Create, Read, Update, Delete functionality",priority:"high",category:"core"},{name:"Form Validation",description:"Client-side and server-side form validation",priority:"high",category:"validation"},{name:"Error Handling",description:"Comprehensive error handling and user feedback",priority:"medium",category:"ux"}],intermediate:[{name:"API Integration",description:"Connect to external APIs and services",priority:"high",category:"integration"},{name:"State Management",description:"Advanced state management (Redux, Context)",priority:"medium",category:"architecture"},{name:"Caching Strategy",description:"Implement caching for better performance",priority:"medium",category:"performance"},{name:"Testing Suite",description:"Unit and integration tests",priority:"medium",category:"testing"}],advanced:[{name:"Microservices Architecture",description:"Break down into microservices",priority:"high",category:"architecture"},{name:"Real-time Features",description:"WebSocket or Server-Sent Events",priority:"high",category:"realtime"},{name:"Advanced Security",description:"OAuth, JWT, rate limiting, security headers",priority:"high",category:"security"},{name:"Performance Optimization",description:"Code splitting, lazy loading, CDN",priority:"high",category:"performance"},{name:"Monitoring & Logging",description:"Application monitoring and logging system",priority:"medium",category:"monitoring"}]};return t[e]||t.basic}getEssentialFeatureRecommendations(e,a){return[{name:"Error Boundaries",description:"React error boundaries for graceful error handling",priority:"high",category:"reliability"},{name:"Loading States",description:"Loading indicators and skeleton screens",priority:"high",category:"ux"},{name:"Accessibility (a11y)",description:"WCAG compliance and screen reader support",priority:"high",category:"accessibility"},{name:"SEO Optimization",description:"Meta tags, structured data, sitemap",priority:"medium",category:"seo"},{name:"Performance Monitoring",description:"Core Web Vitals and performance tracking",priority:"medium",category:"performance"}].filter(r=>!e.some(n=>n.toLowerCase().includes(r.name.toLowerCase())||r.name.toLowerCase().includes(n.toLowerCase())))}getAdvancedFeatureRecommendations(e,a,t){return[{name:"PWA Support",description:"Progressive Web App capabilities",priority:"medium",category:"mobile"},{name:"Offline Support",description:"Service worker for offline functionality",priority:"medium",category:"offline"},{name:"Internationalization",description:"Multi-language support (i18n)",priority:"low",category:"localization"},{name:"Dark Mode",description:"Theme switching and dark mode support",priority:"low",category:"ui"},{name:"Advanced Analytics",description:"User behavior tracking and heatmaps",priority:"low",category:"analytics"}]}deduplicateRecommendations(e,a){const t=new Set;return e.filter(r=>{const n=r.name.toLowerCase();return t.has(n)||a.some(s=>s.toLowerCase().includes(n)||n.includes(s.toLowerCase()))?!1:(t.add(n),!0)})}prioritizeRecommendations(e,a){return e.sort((t,r)=>{const n={critical:4,high:3,medium:2,low:1},s=n[t.priority]||0,i=n[r.priority]||0;if(s!==i)return i-s;const o={core:4,security:4,auth:3,validation:3,ux:2,performance:2},c=o[t.category]||1;return(o[r.category]||1)-c})}getIndustryStandards(){return{security:["Input validation and sanitization","HTTPS enforcement","Authentication and authorization","Rate limiting and DDoS protection","Security headers (CSP, HSTS, etc.)","Regular security audits"],performance:["Core Web Vitals optimization","Image optimization and lazy loading","Code splitting and tree shaking","CDN implementation","Caching strategies","Database query optimization"],accessibility:["WCAG 2.1 AA compliance","Keyboard navigation support","Screen reader compatibility","Color contrast ratios","Alt text for images","Focus management"],code_quality:["TypeScript implementation","ESLint and Prettier configuration","Unit and integration tests","Code documentation","Error handling and logging","Code review process"],deployment:["CI/CD pipeline setup","Environment configuration","Monitoring and alerting","Backup and recovery","Scalability planning","Documentation and runbooks"]}}async checkIndustryStandards(e){const a=this.getIndustryStandards(),t=e.features||[],r={};return Object.keys(a).forEach(n=>{r[n]={total:a[n].length,implemented:0,missing:[],score:0},a[n].forEach(s=>{t.some(o=>o.toLowerCase().includes(s.toLowerCase())||s.toLowerCase().includes(o.toLowerCase()))?r[n].implemented++:r[n].missing.push(s)}),r[n].score=Math.round(r[n].implemented/r[n].total*100)}),r}generateConversationSummary(){if(!this.currentConversation)return null;const e=this.currentConversation.messages,a=this.currentConversation.context.currentFeatures,t=this.featureRecommendations;return{conversationId:this.currentConversation.id,messageCount:e.length,currentFeatures:a,recommendations:t.slice(0,5),lastActivity:this.currentConversation.lastModified,projectType:this.currentConversation.context.appType,industry:this.currentConversation.context.industry}}async saveConversation(){if(this.currentConversation)try{await D.saveConversation(this.currentConversation),console.log("💾 Conversation saved to Firebase")}catch(e){console.error("Failed to save conversation:",e)}}async loadConversationHistory(e){try{const a=await D.getConversation(e);a&&(this.currentConversation=a,this.conversationHistory=a.messages||[],console.log("📚 Conversation history loaded"))}catch(a){console.error("Failed to load conversation history:",a)}}getConversationHistory(){return this.currentConversation?this.currentConversation.messages:[]}clearConversation(){this.currentConversation=null,this.conversationHistory=[],this.projectContext={},this.featureRecommendations=[]}}const Q=new q;class G{constructor(){this.currentProject=null,this.existingFeatures=[],this.featureHistory=[]}async initializeProject(e){this.currentProject=e,this.existingFeatures=this.extractExistingFeatures(e),this.featureHistory=[],console.log("🔄 Incremental development initialized"),console.log("📋 Existing features:",this.existingFeatures)}extractExistingFeatures(e){const a=[],t=e.files||{};return Object.entries(t).forEach(([r,n])=>{if(typeof n=="string"){const s=this.analyzeFileForFeatures(r,n);a.push(...s)}}),[...new Set(a)]}analyzeFileForFeatures(e,a){const t=[],r=a.toLowerCase();return(r.includes("login")||r.includes("auth")||r.includes("signin"))&&t.push("Authentication"),(r.includes("database")||r.includes("firebase")||r.includes("mongodb"))&&t.push("Database"),(r.includes("responsive")||r.includes("mobile")||r.includes("@media"))&&t.push("Responsive Design"),(r.includes("fetch")||r.includes("axios")||r.includes("api"))&&t.push("API Integration"),(r.includes("form")||r.includes("input")||r.includes("submit"))&&t.push("Form Handling"),(r.includes("router")||r.includes("route")||r.includes("navigate"))&&t.push("Routing"),(r.includes("useState")||r.includes("useContext")||r.includes("redux"))&&t.push("State Management"),(r.includes("test")||r.includes("jest")||r.includes("spec"))&&t.push("Testing"),(r.includes("todo")||r.includes("task"))&&t.push("Todo Management"),(r.includes("shopping")||r.includes("cart")||r.includes("product"))&&t.push("E-commerce"),(r.includes("calendar")||r.includes("schedule")||r.includes("appointment"))&&t.push("Scheduling"),(r.includes("chat")||r.includes("message")||r.includes("conversation"))&&t.push("Messaging"),t}async processFeatureRequest(e,a){console.log("🔄 Processing feature request:",e);const t=this.analyzeRequestedFeatures(e);console.log("🎯 Requested features:",t);const r=this.filterNewFeatures(t);if(console.log("✨ New features to add:",r),r.length===0)return{type:"no_new_features",message:"These features already exist in your app. Would you like to enhance or modify them instead?",existingFeatures:this.existingFeatures};const n=await this.generateIncrementalCode(r,e,a);return this.existingFeatures.push(...r),this.featureHistory.push({timestamp:new Date,features:r,prompt:e}),{type:"incremental_update",newFeatures:r,code:n,updatedFiles:this.getUpdatedFiles(n),message:`Added ${r.length} new feature(s): ${r.join(", ")}`}}analyzeRequestedFeatures(e){const a=e.toLowerCase(),t=[];return(a.includes("login")||a.includes("auth")||a.includes("sign in")||a.includes("register"))&&t.push("Authentication"),(a.includes("database")||a.includes("store data")||a.includes("save data"))&&t.push("Database"),(a.includes("responsive")||a.includes("mobile")||a.includes("mobile-friendly"))&&t.push("Responsive Design"),(a.includes("api")||a.includes("fetch data")||a.includes("external data"))&&t.push("API Integration"),(a.includes("form")||a.includes("input")||a.includes("submit"))&&t.push("Form Handling"),(a.includes("navigation")||a.includes("pages")||a.includes("routing"))&&t.push("Routing"),(a.includes("state")||a.includes("manage data")||a.includes("global state"))&&t.push("State Management"),(a.includes("test")||a.includes("testing")||a.includes("unit test"))&&t.push("Testing"),(a.includes("todo")||a.includes("task")||a.includes("checklist"))&&t.push("Todo Management"),(a.includes("shopping")||a.includes("cart")||a.includes("ecommerce")||a.includes("store"))&&t.push("E-commerce"),(a.includes("calendar")||a.includes("schedule")||a.includes("booking"))&&t.push("Scheduling"),(a.includes("chat")||a.includes("message")||a.includes("communication"))&&t.push("Messaging"),(a.includes("search")||a.includes("filter")||a.includes("find"))&&t.push("Search Functionality"),(a.includes("notification")||a.includes("alert")||a.includes("reminder"))&&t.push("Notifications"),(a.includes("upload")||a.includes("file")||a.includes("image"))&&t.push("File Upload"),(a.includes("payment")||a.includes("stripe")||a.includes("paypal")||a.includes("billing"))&&t.push("Payment Processing"),t}filterNewFeatures(e){return e.filter(a=>!this.existingFeatures.some(t=>t.toLowerCase().includes(a.toLowerCase())||a.toLowerCase().includes(t.toLowerCase())))}async generateIncrementalCode(e,a,t){const r={};for(const n of e){const s=await this.generateFeatureCode(n,a,t);Object.assign(r,s)}return r}async generateFeatureCode(e,a,t){const n={Authentication:()=>this.generateAuthCode(),Database:()=>this.generateDatabaseCode(),"Responsive Design":()=>this.generateResponsiveCode(),"API Integration":()=>this.generateAPICode(),"Form Handling":()=>this.generateFormCode(),Routing:()=>this.generateRoutingCode(),"State Management":()=>this.generateStateCode(),Testing:()=>this.generateTestingCode(),"Todo Management":()=>this.generateTodoCode(),"E-commerce":()=>this.generateEcommerceCode(),Scheduling:()=>this.generateSchedulingCode(),Messaging:()=>this.generateMessagingCode(),"Search Functionality":()=>this.generateSearchCode(),Notifications:()=>this.generateNotificationCode(),"File Upload":()=>this.generateFileUploadCode(),"Payment Processing":()=>this.generatePaymentCode()}[e];return n?await n():this.generateGenericFeatureCode(e,a)}generateAuthCode(){return{"auth.js":`// Authentication Service
class AuthService {
  constructor() {
    this.isAuthenticated = false
    this.user = null
  }

  async login(email, password) {
    try {
      // Simulate API call
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      
      if (response.ok) {
        const userData = await response.json()
        this.isAuthenticated = true
        this.user = userData.user
        localStorage.setItem('authToken', userData.token)
        return { success: true, user: userData.user }
      } else {
        throw new Error('Login failed')
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: error.message }
    }
  }

  async register(userData) {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })
      
      if (response.ok) {
        return { success: true }
      } else {
        throw new Error('Registration failed')
      }
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, error: error.message }
    }
  }

  logout() {
    this.isAuthenticated = false
    this.user = null
    localStorage.removeItem('authToken')
  }

  getCurrentUser() {
    return this.user
  }

  isLoggedIn() {
    return this.isAuthenticated
  }
}

// Export for use in other files
window.AuthService = AuthService`,"auth.css":`/* Authentication Styles */
.auth-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.auth-input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.auth-button {
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.auth-button:hover {
  background: #0056b3;
}

.auth-error {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.auth-success {
  color: #28a745;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}`}}generateDatabaseCode(){return{"database.js":`// Database Service
class DatabaseService {
  constructor() {
    this.baseURL = '/api'
  }

  async create(collection, data) {
    try {
      const response = await fetch(\`\${this.baseURL}/\${collection}\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      return await response.json()
    } catch (error) {
      console.error('Create error:', error)
      throw error
    }
  }

  async read(collection, id = null) {
    try {
      const url = id ? \`\${this.baseURL}/\${collection}/\${id}\` : \`\${this.baseURL}/\${collection}\`
      const response = await fetch(url)
      return await response.json()
    } catch (error) {
      console.error('Read error:', error)
      throw error
    }
  }

  async update(collection, id, data) {
    try {
      const response = await fetch(\`\${this.baseURL}/\${collection}/\${id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      return await response.json()
    } catch (error) {
      console.error('Update error:', error)
      throw error
    }
  }

  async delete(collection, id) {
    try {
      const response = await fetch(\`\${this.baseURL}/\${collection}/\${id}\`, {
        method: 'DELETE'
      })
      return await response.json()
    } catch (error) {
      console.error('Delete error:', error)
      throw error
    }
  }
}

window.DatabaseService = DatabaseService`}}generateResponsiveCode(){return{"responsive.css":`/* Responsive Design Utilities */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  .grid {
    grid-template-columns: 1fr;
  }
  
  .flex-mobile {
    flex-direction: column;
  }
  
  .text-mobile {
    font-size: 0.875rem;
  }
  
  .button-mobile {
    width: 100%;
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0.5rem;
  }
  
  .text-small {
    font-size: 0.75rem;
  }
  
  .button-small {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
}

/* Mobile-first approach */
.mobile-first {
  display: block;
}

@media (min-width: 768px) {
  .mobile-first {
    display: flex;
  }
}`}}generateAPICode(){return{"api.js":`// API Service
class APIService {
  constructor(baseURL = 'https://api.example.com') {
    this.baseURL = baseURL
    this.headers = {
      'Content-Type': 'application/json'
    }
  }

  setAuthToken(token) {
    this.headers['Authorization'] = \`Bearer \${token}\`
  }

  async get(endpoint) {
    try {
      const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
        method: 'GET',
        headers: this.headers
      })
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('GET request failed:', error)
      throw error
    }
  }

  async post(endpoint, data) {
    try {
      const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data)
      })
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('POST request failed:', error)
      throw error
    }
  }

  async put(endpoint, data) {
    try {
      const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify(data)
      })
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('PUT request failed:', error)
      throw error
    }
  }

  async delete(endpoint) {
    try {
      const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
        method: 'DELETE',
        headers: this.headers
      })
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('DELETE request failed:', error)
      throw error
    }
  }
}

window.APIService = APIService`}}generateFormCode(){return{"forms.js":`// Form Handling Utilities
class FormHandler {
  constructor(formId) {
    this.form = document.getElementById(formId)
    this.validators = {}
    this.init()
  }

  init() {
    if (this.form) {
      this.form.addEventListener('submit', this.handleSubmit.bind(this))
      this.setupValidation()
    }
  }

  setupValidation() {
    const inputs = this.form.querySelectorAll('input, textarea, select')
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input))
      input.addEventListener('input', () => this.clearFieldError(input))
    })
  }

  addValidator(fieldName, validator) {
    this.validators[fieldName] = validator
  }

  validateField(field) {
    const fieldName = field.name
    const value = field.value
    const validator = this.validators[fieldName]

    if (validator) {
      const result = validator(value)
      if (!result.valid) {
        this.showFieldError(field, result.message)
        return false
      }
    }

    this.clearFieldError(field)
    return true
  }

  showFieldError(field, message) {
    this.clearFieldError(field)
    field.classList.add('error')
    
    const errorDiv = document.createElement('div')
    errorDiv.className = 'field-error'
    errorDiv.textContent = message
    field.parentNode.appendChild(errorDiv)
  }

  clearFieldError(field) {
    field.classList.remove('error')
    const errorDiv = field.parentNode.querySelector('.field-error')
    if (errorDiv) {
      errorDiv.remove()
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    
    const formData = new FormData(this.form)
    const data = Object.fromEntries(formData.entries())
    
    // Validate all fields
    let isValid = true
    const inputs = this.form.querySelectorAll('input, textarea, select')
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false
      }
    })

    if (isValid) {
      this.onSubmit(data)
    }
  }

  onSubmit(data) {
    console.log('Form submitted:', data)
    // Override this method in your implementation
  }
}

// Common validators
const validators = {
  required: (value) => ({
    valid: value.trim().length > 0,
    message: 'This field is required'
  }),
  
  email: (value) => ({
    valid: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value),
    message: 'Please enter a valid email address'
  }),
  
  minLength: (min) => (value) => ({
    valid: value.length >= min,
    message: \`Must be at least \${min} characters long\`
  }),
  
  maxLength: (max) => (value) => ({
    valid: value.length <= max,
    message: \`Must be no more than \${max} characters long\`
  })
}

window.FormHandler = FormHandler
window.validators = validators`}}generateRoutingCode(){return{"router.js":`// Simple Router
class Router {
  constructor() {
    this.routes = {}
    this.currentRoute = null
    this.init()
  }

  init() {
    window.addEventListener('popstate', () => this.handleRoute())
    this.handleRoute()
  }

  addRoute(path, handler) {
    this.routes[path] = handler
  }

  navigate(path) {
    window.history.pushState({}, '', path)
    this.handleRoute()
  }

  handleRoute() {
    const path = window.location.pathname
    const handler = this.routes[path] || this.routes['*']
    
    if (handler) {
      this.currentRoute = path
      handler()
    }
  }
}

window.Router = Router`}}generateStateCode(){return{"state.js":`// Simple State Management
class StateManager {
  constructor(initialState = {}) {
    this.state = initialState
    this.listeners = []
  }

  getState() {
    return { ...this.state }
  }

  setState(newState) {
    this.state = { ...this.state, ...newState }
    this.notifyListeners()
  }

  subscribe(listener) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.state))
  }
}

window.StateManager = StateManager`}}generateTestingCode(){return{"tests.js":`// Simple Testing Framework
class TestRunner {
  constructor() {
    this.tests = []
    this.results = []
  }

  test(name, fn) {
    this.tests.push({ name, fn })
  }

  async run() {
    console.log('Running tests...')
    
    for (const test of this.tests) {
      try {
        await test.fn()
        this.results.push({ name: test.name, status: 'PASS' })
        console.log(\`✅ \${test.name}\`)
      } catch (error) {
        this.results.push({ name: test.name, status: 'FAIL', error })
        console.log(\`❌ \${test.name}: \${error.message}\`)
      }
    }
    
    this.printSummary()
  }

  printSummary() {
    const passed = this.results.filter(r => r.status === 'PASS').length
    const failed = this.results.filter(r => r.status === 'FAIL').length
    
    console.log(\`\\nTest Summary: \${passed} passed, \${failed} failed\`)
  }
}

// Assertion helpers
const assert = {
  equal: (actual, expected) => {
    if (actual !== expected) {
      throw new Error(\`Expected \${expected}, but got \${actual}\`)
    }
  },
  
  true: (value) => {
    if (value !== true) {
      throw new Error(\`Expected true, but got \${value}\`)
    }
  },
  
  false: (value) => {
    if (value !== false) {
      throw new Error(\`Expected false, but got \${value}\`)
    }
  }
}

window.TestRunner = TestRunner
window.assert = assert`}}generateGenericFeatureCode(e,a){return{[`${e.toLowerCase().replace(/\s+/g,"_")}.js`]:`// ${e} Implementation
// Generated based on: "${a}"

class ${e.replace(/\s+/g,"")} {
  constructor() {
    this.initialized = false
    this.init()
  }

  init() {
    console.log('${e} initialized')
    this.initialized = true
  }

  // Add your ${e} methods here
  // This is a template - customize based on your specific needs
}

// Export for use
window.${e.replace(/\s+/g,"")} = ${e.replace(/\s+/g,"")}`}}getUpdatedFiles(e){return Object.keys(e)}getCurrentProject(){return{...this.currentProject,features:this.existingFeatures,featureHistory:this.featureHistory}}reset(){this.currentProject=null,this.existingFeatures=[],this.featureHistory=[]}}const A=new G;class _{constructor(){this.isHealthy=!0,this.baseURL="https://api-inference.huggingface.co/models",this.apiKey="hf_your_api_key_here",this.availableModels={"codellama-7b":{name:"CodeLlama 7B",model:"codellama/CodeLlama-7b-Python-hf",description:"Fast and efficient code generation",maxTokens:2048,temperature:.7},"codellama-13b":{name:"CodeLlama 13B",model:"codellama/CodeLlama-13b-Python-hf",description:"Higher quality code generation",maxTokens:2048,temperature:.7},"starcoder-15b":{name:"StarCoder 15B",model:"bigcode/starcoder",description:"Excellent code completion",maxTokens:2048,temperature:.7},"deepseek-coder":{name:"DeepSeek Coder",model:"deepseek-ai/deepseek-coder-6.7b-instruct",description:"High-performance generation",maxTokens:2048,temperature:.7},"wizardcoder-7b":{name:"WizardCoder 7B",model:"WizardLM/WizardCoder-15B-V1.0",description:"Great at following instructions",maxTokens:2048,temperature:.7},"phi3-mini":{name:"Phi-3 Mini",model:"microsoft/Phi-3-mini-4k-instruct",description:"Lightweight but powerful",maxTokens:2048,temperature:.7},"llama3-8b":{name:"Llama 3 8B",model:"meta-llama/Llama-3-8B-Instruct",description:"General purpose model",maxTokens:2048,temperature:.7},"mistral-7b":{name:"Mistral 7B",model:"mistralai/Mistral-7B-Instruct-v0.1",description:"Fast and efficient coding assistant",maxTokens:2048,temperature:.7},"gemma-7b":{name:"Gemma 7B",model:"google/gemma-7b-it",description:"Google's lightweight model",maxTokens:2048,temperature:.7},"qwen-7b":{name:"Qwen 7B",model:"Qwen/Qwen-7B-Chat",description:"Alibaba's coding model",maxTokens:2048,temperature:.7}},console.log("☁️ Cloud AI Service initialized with open source models!")}getAvailableModels(){return Object.values(this.availableModels)}getHealthyModels(){return Object.keys(this.availableModels)}async generateCode(e,a={}){console.log("🚀 Generating code with Cloud AI...");try{if(a.isIncremental&&a.existingProject)return await this.generateIncrementalCode(e,a);const t=this.analyzeProjectContext(a);console.log("🧠 Enhanced context analysis:",t);const r=this.generateContextAwareCode(e,t),n=this.generateAppName(e),s=this.generatePreviewData(r,n);return console.log("✅ Code generated successfully!"),console.log("🏷️ App name:",n),console.log("👁️ Preview data generated"),console.log("📁 Generated files:",Object.keys(r)),console.log("📄 File contents preview:",Object.entries(r).map(([i,o])=>({name:i,length:o.length,preview:o.substring(0,100)}))),{files:r,appName:n,prompt:e,generatedAt:new Date().toISOString(),preview:s,context:t,iterations:[],dependencies:this.extractDependencies(r),buildInstructions:this.generateBuildInstructions(r)}}catch(t){console.error("❌ Code generation failed:",t);const r=this.createFallbackResponse(e,a),n=this.generateAppName(e);return{files:r,appName:n,prompt:e,generatedAt:new Date().toISOString(),preview:this.generatePreviewData(r,n),context:this.analyzeProjectContext(a),iterations:[],dependencies:this.extractDependencies(r),buildInstructions:this.generateBuildInstructions(r)}}}async generateIncrementalCode(e,a){console.log("🔄 Generating incremental code...");try{await A.initializeProject(a.existingProject);const t=await A.processFeatureRequest(e,a);if(t.type==="no_new_features")return{type:"no_changes",message:t.message,existingFeatures:t.existingFeatures,files:a.existingProject.files||{}};if(t.type==="incremental_update"){const r={...a.existingProject.files,...t.code};return{type:"incremental_update",files:r,newFeatures:t.newFeatures,updatedFiles:t.updatedFiles,message:t.message,appName:a.existingProject.name||"Updated App",prompt:e,generatedAt:new Date().toISOString(),preview:this.generatePreviewData(r,a.existingProject.name),context:this.analyzeProjectContext(a),iterations:A.featureHistory,dependencies:this.extractDependencies(r),buildInstructions:this.generateBuildInstructions(r)}}}catch(t){throw console.error("❌ Incremental code generation failed:",t),t}}analyzeProjectContext(e){return{projectType:this.detectProjectType(e),existingFiles:e.previousFiles||[],dependencies:this.analyzeDependencies(e),codingStandards:this.detectCodingStandards(e),architecture:this.detectArchitecture(e),frameworks:this.detectFrameworks(e),userPreferences:this.extractUserPreferences(e),environment:this.detectEnvironment(e)}}generateContextAwareCode(e,a){console.log("🧠 Context-aware generation:",a);const t=this.analyzeUserRequest(e),r=this.generateSpecificCode(e,t),n=this.enhanceWithContext(r,a);return console.log("🔧 Enhanced code generated with context awareness"),n}generatePreviewData(e,a){return{title:a,description:`A ${a} application generated by DreamBuild AI`,features:this.extractFeatures(e),screenshots:this.generateScreenshots(e),liveDemo:this.generateLiveDemo(e),techStack:this.extractTechStack(e),deployment:this.generateDeploymentInfo(e)}}extractDependencies(e){const a=new Set;return Object.values(e).forEach(t=>{(t.includes("React")||t.includes("react"))&&(a.add("react"),a.add("react-dom")),(t.includes("Vue")||t.includes("vue"))&&a.add("vue"),(t.includes("Angular")||t.includes("angular"))&&a.add("@angular/core"),(t.includes("express")||t.includes("node"))&&a.add("express"),(t.includes("tailwind")||t.includes("bootstrap"))&&a.add("tailwindcss")}),Array.from(a)}generateBuildInstructions(e){const a=Object.values(e).some(r=>r.includes("React")||r.includes("react")),t=Object.values(e).some(r=>r.includes("express")||r.includes("node"));return a?{install:"npm install",start:"npm start",build:"npm run build",dev:"npm run dev"}:t?{install:"npm install",start:"node server.js",dev:"nodemon server.js"}:{install:"No dependencies required",start:"Open index.html in browser",build:"No build process required"}}generateIntelligentCode(e,a={}){console.log("🧠 Analyzing prompt:",e);const t=this.analyzeUserRequest(e);return console.log("📋 Analysis result:",t),this.generateSpecificCode(e,t)}analyzeUserRequest(e){const t=(typeof e=="string"?e:JSON.stringify(e)).toLowerCase();return{hasButton:t.includes("button")||t.includes("click"),hasForm:t.includes("form")||t.includes("input")||t.includes("submit"),hasCalculator:t.includes("calculator")||t.includes("calculate")||t.includes("math"),hasColorChange:t.includes("color")||t.includes("change color"),hasCounter:t.includes("counter")||t.includes("count")||t.includes("increment"),hasTodo:t.includes("todo")||t.includes("task")||t.includes("list"),hasGame:t.includes("game")||t.includes("play")||t.includes("guess"),hasAnimation:t.includes("animation")||t.includes("animate")||t.includes("spinning"),hasAPI:t.includes("api")||t.includes("fetch")||t.includes("request"),wantsReact:t.includes("react")||t.includes("component"),wantsVue:t.includes("vue"),wantsAngular:t.includes("angular"),wantsPython:t.includes("python")||t.includes("flask")||t.includes("django"),wantsNode:t.includes("node")||t.includes("express"),wantsDatabase:t.includes("database")||t.includes("store")||t.includes("save"),wantsAuth:t.includes("login")||t.includes("auth")||t.includes("user"),wantsResponsive:t.includes("responsive")||t.includes("mobile"),wantsStyling:t.includes("css")||t.includes("style")||t.includes("design"),specificFeature:this.extractSpecificFeature(e),appName:this.extractAppName(e),targetLanguage:this.detectTargetLanguage(e)}}extractSpecificFeature(e){const t=(typeof e=="string"?e:JSON.stringify(e)).toLowerCase();return t.includes("factorial")?"factorial":t.includes("fibonacci")?"fibonacci":t.includes("prime")?"prime":t.includes("sort")?"sort":t.includes("search")?"search":t.includes("timer")?"timer":t.includes("clock")?"clock":t.includes("weather")?"weather":t.includes("chat")?"chat":t.includes("quiz")?"quiz":null}detectTargetLanguage(e){const t=(typeof e=="string"?e:JSON.stringify(e)).toLowerCase();return t.includes("python")?"python":t.includes("javascript")||t.includes("js")?"javascript":t.includes("react")?"react":t.includes("vue")?"vue":t.includes("angular")?"angular":t.includes("html")?"html":t.includes("css")?"css":"html"}generateSpecificCode(e,a){return console.log("🎯 Generating specific code for:",a.specificFeature||"general app"),a.specificFeature?this.generateSpecificFeature(e,a.specificFeature):a.hasCalculator?this.createDefaultTemplate(e):a.hasTodo?this.createTodoTemplate(e):a.hasGame?this.createDefaultTemplate(e):a.hasAnimation?this.createDefaultTemplate(e):a.hasAPI?this.createAPITemplate(e):a.specificFeature==="weather"?this.generateWeatherApp(e):a.wantsReact?this.generateReactApp(e):a.wantsPython?this.generatePythonApp(e):a.wantsNode?this.generateNodeApp(e):this.generateWebAppWithFeatures(e,a)}selectBestModel(e,a){const r=(typeof e=="string"?e:JSON.stringify(e)).toLowerCase();return r.includes("python")||r.includes("django")||r.includes("flask")?"codellama-7b":r.includes("javascript")||r.includes("react")||r.includes("node")?"starcoder-15b":r.includes("java")||r.includes("spring")?"deepseek-coder":r.includes("c++")||r.includes("cpp")||r.includes("rust")?"codellama-13b":r.includes("web")||r.includes("html")||r.includes("css")?"wizardcoder-7b":"codellama-7b"}async callHuggingFaceAPI(e,a,t,r){return(await C.post(`${this.baseURL}/${e}`,{inputs:a,parameters:{max_new_tokens:t,temperature:r,return_full_text:!1,do_sample:!0}},{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},timeout:3e4})).data}createSystemPrompt(e={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

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

Generate practical, working applications that users can immediately use.`}parseAIResponse(e,a){try{let t="";Array.isArray(e)&&e.length>0?t=e[0].generated_text||e[0].text||"":e.generated_text?t=e.generated_text:e.text?t=e.text:t=JSON.stringify(e);const r=t.match(/\{[\s\S]*\}/);if(r){const n=JSON.parse(r[0]);if(n.files)return n.files}return this.createFallbackResponse(a,{})}catch(t){return console.error("❌ Failed to parse AI response:",t),this.createFallbackResponse(a,{})}}generateWebApp(e){const a=this.extractAppName(e)||"Web App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${a}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${a}</h1>
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
}`,"script.js":`// ${a} - Generated by DreamBuild AI
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
  "name": "${a.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateReactApp(e){const a=this.extractAppName(e)||"React App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${a}</title>
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

function ${a.replace(/\s+/g,"")}() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello from React!');

  const handleClick = () => {
    setCount(count + 1);
    setMessage(\`Button clicked \${count + 1} times!\`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>${a}</h1>
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

ReactDOM.render(<${a.replace(/\s+/g,"")} />, document.getElementById('root'));`,"styles.css":`* {
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
  "name": "${a.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateJavaScriptApp(e){const a=this.extractAppName(e)||"JavaScript App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${a}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${a}</h1>
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
</html>`,"script.js":`// ${a} - Generated by DreamBuild AI
class ${a.replace(/\s+/g,"")} {
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
    new ${a.replace(/\s+/g,"")}();
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
  "name": "${a.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateSpecificFeature(e,a){switch(console.log("🎯 Generating specific feature:",a),a){case"factorial":return this.generateFactorialApp(e);case"fibonacci":return this.generateFibonacciApp(e);case"prime":return this.generatePrimeApp(e);case"sort":return this.generateSortApp(e);case"search":return this.generateSearchApp(e);case"timer":return this.generateTimerApp(e);case"clock":return this.generateClockApp(e);case"weather":return this.generateWeatherApp(e);case"chat":return this.generateChatApp(e);case"quiz":return this.generateQuizApp(e);default:return this.generateWebApp(e)}}generateFactorialApp(e){const a=this.extractAppName(e)||"Factorial Calculator";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${a}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${a}</h1>
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
</html>`,"script.js":`// ${a} - Generated by DreamBuild AI
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
  "name": "${a.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateFibonacciApp(e){const a=this.extractAppName(e)||"Fibonacci Calculator";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${a}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${a}</h1>
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
</html>`,"script.js":`// ${a} - Generated by DreamBuild AI
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
  "name": "${a.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateWeatherApp(e){const a=this.extractAppName(e)||"Weather App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${a}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${a}</h1>
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
</html>`,"script.js":`// ${a} - Generated by DreamBuild AI
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
  "name": "${a.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}detectProjectType(e){const a=e.previousFiles||[];return a.some(t=>t.includes("package.json"))?"node":a.some(t=>t.includes(".jsx")||t.includes(".tsx"))?"react":a.some(t=>t.includes(".vue"))?"vue":(a.some(t=>t.includes(".html")),"web")}analyzeDependencies(e){return e.dependencies||[]}detectCodingStandards(e){return{indentation:"2 spaces",quotes:"single",semicolons:!0,trailingCommas:!0}}detectArchitecture(e){const a=e.previousFiles||[];return a.some(t=>t.includes("components"))?"component-based":a.some(t=>t.includes("pages"))?"page-based":"monolithic"}detectFrameworks(e){const a=[],t=e.previousFiles||[];return t.some(r=>r.includes("react"))&&a.push("react"),t.some(r=>r.includes("vue"))&&a.push("vue"),t.some(r=>r.includes("angular"))&&a.push("angular"),t.some(r=>r.includes("express"))&&a.push("express"),a}extractUserPreferences(e){return{preferredFramework:"react",styling:"tailwind",stateManagement:"hooks",testing:"jest"}}detectEnvironment(e){return{nodeVersion:"18+",packageManager:"npm",bundler:"vite",deployment:"firebase"}}enhanceWithContext(e,a){console.log("🔧 Enhancing code with context:",a);const t={...e};return Object.keys(t).forEach(r=>{if(r.endsWith(".js")||r.endsWith(".jsx")){const n=t[r],s=`// Generated by DreamBuild AI with context awareness
// Project Type: ${a.projectType||"web"}
// Architecture: ${a.architecture||"monolithic"}
// Frameworks: ${a.frameworks?.join(", ")||"vanilla"}
// Environment: ${a.environment?.nodeVersion||"18+"}

${n}`;t[r]=s}}),console.log("✅ Code enhanced with context awareness"),t}extractFeatures(e){const a=[],t=Object.values(e).join(" ").toLowerCase();return console.log("🔍 Extracting features from generated code..."),(t.includes("addeventlistener")||t.includes("onclick")||t.includes("onchange"))&&a.push("Interactive Elements"),(t.includes("localstorage")||t.includes("sessionstorage")||t.includes("indexeddb"))&&a.push("Data Persistence"),(t.includes("fetch")||t.includes("axios")||t.includes("xhr")||t.includes("api"))&&a.push("API Integration"),(t.includes("responsive")||t.includes("mobile")||t.includes("media query")||t.includes("@media"))&&a.push("Responsive Design"),(t.includes("animation")||t.includes("transition")||t.includes("transform")||t.includes("keyframes"))&&a.push("Animations"),(t.includes("form")||t.includes("input")||t.includes("textarea")||t.includes("select"))&&a.push("Form Handling"),(t.includes("login")||t.includes("auth")||t.includes("password")||t.includes("token"))&&a.push("Authentication"),(t.includes("websocket")||t.includes("socket")||t.includes("realtime")||t.includes("live"))&&a.push("Real-time Updates"),(t.includes("file")||t.includes("upload")||t.includes("download")||t.includes("blob"))&&a.push("File Handling"),a.length===0&&a.push("Modern UI","Interactive Elements","Responsive Design"),console.log("✅ Features extracted:",a),a}generateScreenshots(e){return["https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=App+Preview+1","https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=App+Preview+2"]}generateLiveDemo(e){return"https://dreambuild-2024-app.web.app/preview"}extractTechStack(e){const a=[],t=Object.values(e).join(" ").toLowerCase();return console.log("🔍 Extracting tech stack from generated code..."),(t.includes("react")||t.includes("jsx"))&&a.push("React"),(t.includes("vue")||t.includes("vue.js"))&&a.push("Vue.js"),t.includes("angular")&&a.push("Angular"),t.includes("svelte")&&a.push("Svelte"),(t.includes("express")||t.includes("node"))&&a.push("Node.js"),(t.includes("django")||t.includes("flask"))&&a.push("Python"),(t.includes("spring")||t.includes("java"))&&a.push("Java"),t.includes("html")&&a.push("HTML5"),t.includes("css")&&a.push("CSS3"),(t.includes("javascript")||t.includes("js"))&&a.push("JavaScript"),(t.includes("typescript")||t.includes("ts"))&&a.push("TypeScript"),(t.includes("tailwind")||t.includes("tailwindcss"))&&a.push("Tailwind CSS"),t.includes("bootstrap")&&a.push("Bootstrap"),(t.includes("material")||t.includes("mui"))&&a.push("Material-UI"),(t.includes("mongodb")||t.includes("mongo"))&&a.push("MongoDB"),(t.includes("mysql")||t.includes("sql"))&&a.push("SQL"),t.includes("firebase")&&a.push("Firebase"),a.length===0&&a.push("HTML5","CSS3","JavaScript"),console.log("✅ Tech stack extracted:",a),a}generateDeploymentInfo(e){return{platform:"Firebase Hosting",url:"https://dreambuild-2024-app.web.app",status:"Ready to deploy",instructions:"Click deploy to publish your app"}}extractAppName(e){const t=(typeof e=="string"?e:JSON.stringify(e)).split(" "),r=t.findIndex(n=>n.toLowerCase().includes("app")||n.toLowerCase().includes("application")||n.toLowerCase().includes("website")||n.toLowerCase().includes("page"));return r>0?t.slice(0,r).join(" "):null}generateAppName(e){const a=typeof e=="string"?e:JSON.stringify(e),t=a.toLowerCase(),r=a.split(" ").filter(s=>s.length>3&&!["create","build","make","generate","app","application","website","page"].includes(s.toLowerCase()));if(t.includes("weather"))return"WeatherCast Pro";if(t.includes("calculator"))return"CalcMaster";if(t.includes("todo")||t.includes("task"))return"TaskFlow";if(t.includes("game"))return"GameZone";if(t.includes("chat"))return"ChatConnect";if(t.includes("dashboard"))return"DashBoard Pro";if(t.includes("ecommerce")||t.includes("store"))return"ShopMaster";if(t.includes("blog"))return"BlogCraft";if(t.includes("portfolio"))return"Portfolio Pro";if(t.includes("social"))return"SocialConnect";if(t.includes("music"))return"MusicHub";if(t.includes("photo")||t.includes("image"))return"PhotoGallery";if(t.includes("news"))return"NewsReader";if(t.includes("recipe"))return"RecipeBook";if(t.includes("fitness")||t.includes("workout"))return"FitTracker";if(t.includes("finance")||t.includes("budget"))return"FinanceTracker";if(t.includes("education")||t.includes("learn"))return"LearnHub";if(t.includes("travel"))return"TravelGuide";if(t.includes("food")||t.includes("restaurant"))return"FoodFinder";if(t.includes("book")||t.includes("library"))return"BookShelf";if(t.includes("calendar")||t.includes("schedule"))return"SchedulePro";if(r.length>0){const s=r[0].charAt(0).toUpperCase()+r[0].slice(1),i=r.length>1?r[1].charAt(0).toUpperCase()+r[1].slice(1):"App";return`${s}${i}`}const n=["DreamApp","InnovateHub","CreativeSpace","TechFlow","SmartApp","NextGen","FutureApp","ProApp","EliteApp","MasterApp","UltimateApp","PrimeApp","SuperApp","MegaApp","TurboApp"];return n[Math.floor(Math.random()*n.length)]}createFallbackResponse(e,a={}){console.log("🔄 Creating fallback response for prompt:",e);const r=(typeof e=="string"?e:JSON.stringify(e)).toLowerCase();return r.includes("dashboard")||r.includes("analytics")?this.createDashboardTemplate(e):r.includes("todo")||r.includes("task")?this.createTodoTemplate(e):r.includes("ecommerce")||r.includes("store")||r.includes("shop")?this.createEcommerceTemplate(e):r.includes("api")||r.includes("backend")?this.createAPITemplate(e):this.createDefaultTemplate(e)}createDashboardTemplate(e){return{"index.html":`<!DOCTYPE html>
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
    <style>
      * {
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
        border-radius: 12px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }

      h1 {
        text-align: center;
        color: #333;
        margin-bottom: 2rem;
        font-size: 2.5rem;
      }

      .input-container {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      input[type="text"] {
        flex: 1;
        padding: 1rem;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.3s;
      }

      input[type="text"]:focus {
        border-color: #667eea;
      }

       button {
         padding: 1rem 2rem;
         background: #667eea;
         color: white;
         border: none;
         border-radius: 8px;
         font-size: 1rem;
         cursor: pointer;
         transition: all 0.3s;
         font-weight: 500;
       }

       button:hover {
         background: #5a6fd8;
         transform: translateY(-1px);
         box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
       }

       button:active {
         transform: translateY(0);
         box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
       }

      .todos {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .todo-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 8px;
        transition: all 0.3s;
      }

      .todo-item:hover {
        background: #e9ecef;
      }

      .todo-item.completed .todo-text {
        text-decoration: line-through;
        color: #6c757d;
      }

      .todo-text {
        flex: 1;
        cursor: pointer;
        font-size: 1.1rem;
      }

       .delete-btn {
         background: #dc3545;
         padding: 0.5rem 1rem;
         font-size: 0.9rem;
         cursor: pointer;
         border: none;
         border-radius: 4px;
         transition: background 0.3s;
       }

       .delete-btn:hover {
         background: #c82333;
       }

       .delete-btn:active {
         background: #bd2130;
         transform: translateY(1px);
       }

      .no-todos {
        text-align: center;
        color: #6c757d;
        font-style: italic;
        margin-top: 2rem;
      }
    </style>
</head>
<body>
    <div class="todo-app">
        <h1>Todo App</h1>
        
        <div class="input-container">
            <input type="text" id="todoInput" placeholder="Add a new todo..." />
            <button id="addBtn">Add Todo</button>
        </div>
        
        <div class="todos" id="todos"></div>
        
        <p class="no-todos" id="noTodos" style="display: none;">No todos yet. Add one above!</p>
    </div>

    <script>
        // Global variables
        let todos = [];
        let nextId = 1;

        // Initialize the app
        function initApp() {
            console.log('Todo app initializing...');
            
            // Wait for elements to be available
            const checkElements = () => {
                const input = document.getElementById('todoInput');
                const addBtn = document.getElementById('addBtn');
                const container = document.getElementById('todos');
                
                if (input && addBtn && container) {
                    console.log('All elements found, setting up app');
                    setupEventListeners();
                    renderTodos();
                    return true;
                }
                return false;
            };

            // Try immediately, then with intervals
            if (!checkElements()) {
                const interval = setInterval(() => {
                    if (checkElements()) {
                        clearInterval(interval);
                    }
                }, 100);
                
                // Fallback timeout
                setTimeout(() => {
                    clearInterval(interval);
                    console.log('App initialization timeout');
                }, 3000);
            }
        }

        function setupEventListeners() {
            const input = document.getElementById('todoInput');
            const addBtn = document.getElementById('addBtn');
            
            if (input) {
                input.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        addTodo();
                    }
                });
                console.log('Input event listener added');
            }
            
            if (addBtn) {
                addBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    addTodo();
                });
                console.log('Add button event listener added');
            }
        }

        function addTodo() {
            console.log('addTodo called');
            const input = document.getElementById('todoInput');
            if (!input) {
                console.error('Input element not found');
                return;
            }
            
            const text = input.value.trim();
            console.log('Input text:', text);
            
            if (text) {
                const newTodo = {
                    id: nextId++,
                    text: text,
                    completed: false
                };
                todos.push(newTodo);
                
                input.value = '';
                renderTodos();
                console.log('Todo added:', newTodo);
                console.log('Total todos:', todos.length);
            }
        }

        function toggleTodo(id) {
            console.log('toggleTodo called with id:', id);
            const todo = todos.find(t => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                renderTodos();
                console.log('Todo toggled:', todo);
            }
        }

        function deleteTodo(id) {
            console.log('deleteTodo called with id:', id);
            const initialLength = todos.length;
            todos = todos.filter(t => t.id !== id);
            if (todos.length < initialLength) {
                renderTodos();
                console.log('Todo deleted, remaining:', todos.length);
            }
        }

        function renderTodos() {
            console.log('renderTodos called');
            const container = document.getElementById('todos');
            const noTodos = document.getElementById('noTodos');
            
            if (!container) {
                console.error('Container element not found');
                return;
            }
            
            container.innerHTML = '';
            
            if (todos.length === 0) {
                if (noTodos) noTodos.style.display = 'block';
                console.log('No todos to display');
                return;
            }
            
            if (noTodos) noTodos.style.display = 'none';
            
            todos.forEach(todo => {
                const todoElement = document.createElement('div');
                todoElement.className = 'todo-item' + (todo.completed ? ' completed' : '');
                
                const textSpan = document.createElement('span');
                textSpan.className = 'todo-text';
                textSpan.textContent = todo.text;
                textSpan.style.cursor = 'pointer';
                textSpan.addEventListener('click', function() {
                    toggleTodo(todo.id);
                });
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', function() {
                    deleteTodo(todo.id);
                });
                
                todoElement.appendChild(textSpan);
                todoElement.appendChild(deleteBtn);
                container.appendChild(todoElement);
            });
            
            console.log('Rendered', todos.length, 'todos');
        }

        // Multiple initialization methods for maximum compatibility
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initApp);
        } else {
            initApp();
        }
        
        // Also try on window load as fallback
        window.addEventListener('load', initApp);
        
        // Make functions globally available for debugging
        window.todoApp = {
            addTodo,
            toggleTodo,
            deleteTodo,
            renderTodos,
            todos: () => todos
        };
    <\/script>
</body>
</html>`,"App.jsx":`const { useState } = React;

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

  return React.createElement('div', { className: 'todo-app' },
    React.createElement('h1', null, 'Todo App'),
    React.createElement('div', { className: 'input-container' },
      React.createElement('input', {
        type: 'text',
        value: text,
        onChange: (e) => setText(e.target.value),
        placeholder: 'Add a new todo...',
        onKeyPress: (e) => e.key === 'Enter' && addTodo()
      }),
      React.createElement('button', { onClick: addTodo }, 'Add Todo')
    ),
    React.createElement('div', { className: 'todos' },
      todos.map(todo => 
        React.createElement('div', { 
          key: todo.id, 
          className: \`todo-item \${todo.completed ? 'completed' : ''}\` 
        },
          React.createElement('span', { 
            onClick: () => toggleTodo(todo.id), 
            className: 'todo-text' 
          }, todo.text),
          React.createElement('button', { 
            onClick: () => deleteTodo(todo.id),
            className: 'delete-btn'
          }, 'Delete')
        )
      )
    ),
    todos.length === 0 && React.createElement('p', { className: 'no-todos' }, 'No todos yet. Add one above!')
  );
}

ReactDOM.render(React.createElement(TodoApp), document.getElementById('root'));`,"styles.css":`* {
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
// PORT removed - not needed in browser code

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
}`}}getServiceHealth(){return{"cloud-ai":{isHealthy:this.isHealthy}}}getUsageStats(){return{totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0}}}const p=new _;class W{constructor(){this.currentService="cloud-ai",this.usageStats={totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0},console.log("🤖 Simple AI Service initialized - Cloud AI with Open Source Models!")}getServices(){return{"cloud-ai":{name:"Cloud AI Models",type:"Cloud",description:"Open source AI models via Hugging Face - no API keys required",models:p.getAvailableModels()},"local-ai":{name:"Local AI Models",type:"Local",description:"Self-hosted AI models - no API keys required",models:u.getAvailableModels()}}}getTemplateCategories(){return u.getTemplateCategories()}getTemplatesByCategory(e){return u.getTemplatesByCategory(e)}async getAllTemplates(){return await u.getAllTemplates()}async generateTemplateById(e,a={}){return await u.generateTemplateById(e,a)}async searchTemplates(e){return await u.searchTemplates(e)}async getPopularTemplates(){return await u.getPopularTemplates()}async generateCode(e,a={}){const t=Date.now();this.usageStats.totalRequests++;try{if(console.log("🚀 Generating code with Cloud AI..."),this.currentService==="cloud-ai"){const r=await p.generateCode(e,a),n=Date.now()-t;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+n)/2,console.log("✅ Code generated successfully with Cloud AI!"),r}if(u.isHealthy){console.log("🔄 Falling back to Local AI...");const r=await u.generateCode(e,a),n=Date.now()-t;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+n)/2,console.log("✅ Code generated successfully with Local AI!"),r}return console.log("⚠️ No AI services available, using template fallback"),p.createFallbackResponse(e,a)}catch(r){return console.error("❌ AI generation failed:",r),this.usageStats.failedRequests++,console.log("🔄 Falling back to template generation..."),p.createFallbackResponse(e,a)}}getServiceHealth(){return{"cloud-ai":p.getServiceHealth(),"local-ai":u.modelHealth}}getUsageStats(){return this.usageStats}getUserPreferences(){return{preferredService:"cloud-ai",fallbackEnabled:!0,autoHealthCheck:!0}}updateUserPreferences(e){localStorage.setItem("dreambuild-preferences",JSON.stringify(e))}loadUserPreferences(){const e=localStorage.getItem("dreambuild-preferences");return e?JSON.parse(e):this.getUserPreferences()}getServiceStatus(){return{"cloud-ai":{isHealthy:p.isHealthy,models:p.getHealthyModels().length,totalModels:p.getAvailableModels().length},"local-ai":{isHealthy:u.isHealthy,models:u.getHealthyModels().length,totalModels:u.getAvailableModels().length}}}resetServiceHealth(){u.modelHealth={}}getFallbackOrder(){return["cloud-ai","local-ai"]}isFallbackEnabled(){return!0}setFallbackEnabled(e){return!0}getSetupInstructions(){return{"cloud-ai":{title:"Cloud AI Setup",description:"Open source AI models via Hugging Face - no setup required",steps:["1. Cloud AI is ready to use with open source models","2. No API keys or installation required","3. Models include CodeLlama, StarCoder, DeepSeek, and more","4. Start generating code immediately!"],isSetup:p.isHealthy},"local-ai":{title:"Local AI Setup",description:"Set up local AI models for code generation",steps:["1. Install Ollama from https://ollama.ai","2. Run: ollama pull codellama:7b","3. Run: ollama serve","4. Refresh DreamBuild to start using local AI"],isSetup:u.isHealthy}}}getServicesNeedingSetup(){const e=[];return p.isHealthy||e.push("cloud-ai"),u.isHealthy||e.push("local-ai"),e}hasValidApiKey(e){return e==="cloud-ai"||e==="local-ai"}setService(e){(e==="cloud-ai"||e==="local-ai")&&(this.currentService=e)}getCurrentService(){return this.currentService}}const J=new W,Z=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{Z as a,Q as c,D as f,J as s};
