import{a as k}from"./utils-vendor-ngrFHoWO.js";import{i as A,g as D,f as R,e as B,o as L,A as j,j as l,l as m,h as v,p as w,v as x,q as g,w as f,x as T,t as P}from"./firebase-HQh6JyMG.js";import{e as z,r as $,c as M,g as N}from"./index-By2zDFl_.js";class U{constructor(){this.baseURL="https://api.github.com",this.trendingRepos=[],this.templateCache=new Map,this.cacheExpiry=30*60*1e3,this.isLoading=!1,console.log("🔗 GitHub Template Service initialized")}async getTrendingTemplates(e="javascript",r="stars",t="desc"){if(this.isLoading)return this.trendingRepos;this.isLoading=!0;try{console.log("📡 Fetching trending GitHub templates...");const a=["stars:>100 topic:todo-app","stars:>100 topic:calculator","stars:>100 topic:weather-app","stars:>100 topic:game","stars:>100 topic:portfolio","stars:>100 topic:blog","stars:>100 topic:landing-page","stars:>50 topic:react-tutorial","stars:>50 topic:javascript-project","stars:>50 topic:html-css"],n=[];for(const i of a)try{console.log(`📈 Fetching trending repositories: ${i}`);const c=await fetch(`${this.baseURL}/search/repositories?q=${encodeURIComponent(i)}&sort=stars&order=desc&per_page=20`,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"DreamBuild-Template-Service"}});if(!c.ok)if(console.error(`GitHub API error for query "${i}": ${c.status}`),c.status===403||c.status===429){console.log("⚠️ Rate limit hit, returning cached/fallback templates");const h=this.getFallbackTemplates();return this.trendingRepos=h,h}else if(c.status===422){console.log(`⚠️ Invalid query "${i}", skipping...`);continue}else{console.log(`⚠️ API error ${c.status} for query "${i}", skipping...`);continue}const d=await c.json();if(d.items&&d.items.length>0){console.log(`📈 Found ${d.items.length} trending template repositories for: ${i}`);const h=d.items.filter(S=>this.isTemplateRepository(S));n.push(...h)}await new Promise(h=>setTimeout(h,500))}catch(c){console.error(`Error fetching templates for ${i}:`,c);continue}const o=this.deduplicateRepos(n),s=this.filterTemplateRepos(o);if(s.length<10){console.log("📦 Adding fallback templates due to limited API results");const i=this.getFallbackTemplates();s.push(...i)}return this.trendingRepos=s.slice(0,25),console.log(`✅ Found ${this.trendingRepos.length} template repositories`),this.trendingRepos}catch(a){return console.error("❌ Failed to fetch trending templates:",a),this.getFallbackTemplates()}finally{this.isLoading=!1}}async getRepositoryTemplate(e){const r=`repo_${e.id}`;if(this.templateCache.has(r)){const t=this.templateCache.get(r);if(Date.now()-t.timestamp<this.cacheExpiry)return t.data}try{console.log(`📦 Processing template: ${e.full_name}`);const t=await this.getRepositoryContents(e.full_name),a=await this.parseRepositoryTemplate(e,t);return this.templateCache.set(r,{data:a,timestamp:Date.now()}),a}catch(t){return console.error(`❌ Failed to process template ${e.full_name}:`,t),null}}async getRepositoryContents(e,r=""){try{const t=await fetch(`${this.baseURL}/repos/${e}/contents/${r}`);if(!t.ok)throw new Error(`GitHub API error: ${t.status}`);return await t.json()}catch(t){return console.error(`Failed to fetch contents for ${e}:`,t),[]}}async parseRepositoryTemplate(e,r){const t=this.transformRepositoryToTemplate(e),a=this.extractKeyFiles(r);return t.files=a,t.fileCount=a.length,t.preview=e.owner?.avatar_url||"/api/placeholder/400/300",t}detectTemplateType(e,r){const t=e.name.toLowerCase(),a=(e.description||"").toLowerCase(),n=(e.topics||[]).join(" ").toLowerCase(),o=`${t} ${a} ${n}`;return o.includes("react-native")||o.includes("expo")||o.includes("flutter")||o.includes("mobile")?"mobile":o.includes("react")||o.includes("nextjs")||o.includes("next.js")||o.includes("gatsby")?"react":o.includes("vue")||o.includes("nuxt")||o.includes("quasar")?"vue":o.includes("angular")||o.includes("ionic")?"angular":o.includes("svelte")||o.includes("sveltekit")?"svelte":o.includes("node")||o.includes("express")||o.includes("koa")||o.includes("fastify")?"nodejs":o.includes("python")||o.includes("django")||o.includes("flask")||o.includes("fastapi")?"python":o.includes("php")||o.includes("laravel")||o.includes("symfony")||o.includes("codeigniter")?"php":o.includes("go")||o.includes("golang")||o.includes("gin")?"go":o.includes("rust")||o.includes("actix")||o.includes("rocket")?"rust":o.includes("java")||o.includes("spring")||o.includes("maven")?"java":o.includes("api")||o.includes("rest")||o.includes("graphql")||o.includes("microservice")?"api":o.includes("dashboard")||o.includes("admin")||o.includes("panel")?"dashboard":o.includes("ecommerce")||o.includes("e-commerce")||o.includes("shop")||o.includes("store")?"ecommerce":o.includes("blog")||o.includes("cms")||o.includes("content")?"blog":o.includes("portfolio")||o.includes("personal")||o.includes("resume")?"portfolio":o.includes("landing")||o.includes("marketing")||o.includes("promo")?"landing":o.includes("cms")||o.includes("content-management")||o.includes("headless")?"cms":o.includes("ui")||o.includes("ux")||o.includes("design-system")||o.includes("component-library")?"ui":o.includes("test")||o.includes("testing")||o.includes("e2e")||o.includes("unit-test")?"testing":o.includes("devops")||o.includes("ci-cd")||o.includes("docker")||o.includes("kubernetes")?"devops":o.includes("database")||o.includes("sql")||o.includes("nosql")||o.includes("mongodb")||o.includes("postgresql")?"database":o.includes("auth")||o.includes("authentication")||o.includes("jwt")||o.includes("oauth")?"auth":o.includes("payment")||o.includes("stripe")||o.includes("paypal")||o.includes("billing")?"payment":o.includes("analytics")||o.includes("tracking")||o.includes("metrics")||o.includes("monitoring")?"analytics":o.includes("documentation")||o.includes("docs")||o.includes("readme")||o.includes("guide")?"documentation":"web"}extractKeyFiles(e){const r=[],t=["package.json","package-lock.json","yarn.lock","index.html","index.js","index.jsx","index.ts","index.tsx","App.js","App.jsx","App.ts","App.tsx","main.js","main.ts","main.jsx","main.tsx","src/","components/","pages/","views/","README.md","readme.md","docker-compose.yml","Dockerfile","tsconfig.json","webpack.config.js","vite.config.js","tailwind.config.js","postcss.config.js"];return e.forEach(a=>{t.some(n=>a.name.toLowerCase()===n.toLowerCase()||a.name.toLowerCase().startsWith(n.toLowerCase()))&&r.push({name:a.name,path:a.path,type:a.type,size:a.size,downloadUrl:a.download_url})}),r.slice(0,20)}generateTemplateName(e){return e.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" ").replace(/template|starter|boilerplate|example|demo/gi,"").trim()}categorizeTemplate(e,r){return{react:"web-apps",vue:"web-apps",angular:"web-apps",svelte:"web-apps",nodejs:"web-apps",python:"web-apps",php:"web-apps",go:"web-apps",rust:"web-apps",java:"web-apps",mobile:"mobile-apps",api:"apis",dashboard:"dashboards",ecommerce:"e-commerce",blog:"portfolios",portfolio:"portfolios",landing:"landing-pages",cms:"web-apps",ui:"web-apps",testing:"web-apps",devops:"apis",database:"apis",auth:"apis",payment:"apis",analytics:"dashboards",documentation:"portfolios",web:"web-apps"}[e]||"web-apps"}generateTags(e,r){const t=[r];e.language&&t.push(e.language.toLowerCase()),e.topics&&t.push(...e.topics.slice(0,3));const a={react:["react","javascript"],vue:["vue","javascript"],angular:["angular","typescript"],nodejs:["nodejs","express"],python:["python","django"],mobile:["react-native","mobile"]};return a[r]&&t.push(...a[r]),[...new Set(t)].slice(0,5)}deduplicateRepos(e){const r=new Set;return e.filter(t=>r.has(t.id)?!1:(r.add(t.id),!0))}isTemplateRepository(e){const r=e.name.toLowerCase(),t=(e.description||"").toLowerCase(),a=(e.topics||[]).join(" ").toLowerCase(),o=["todo-app","calculator","weather-app","recipe-app","expense-tracker","note-taking","bookmark-manager","task-manager","habit-tracker","budget-planner","calendar-app","contact-book","photo-gallery","music-player","video-player","chat-app","forum","blog","portfolio","landing-page","online-store","restaurant-menu","event-planner","booking-system","survey-form","quiz-app","game","puzzle","memory-game","tic-tac-toe","snake-game","pong","breakout","maze","word-search","sudoku","hangman","trivia","flashcards","timer","stopwatch","pomodoro","countdown","random-generator","password-generator","color-picker","unit-converter","currency-converter","tip-calculator","bmi-calculator","age-calculator","date-calculator","percentage-calculator","loan-calculator","mortgage-calculator","investment-calculator","tax-calculator","grade-calculator","gpa-calculator","starter","template","example","demo","sample","tutorial","beginner","simple","basic"].some(d=>r.includes(d)||t.includes(d)||a.includes(d)),s=e.stargazers_count>=10,i=new Date(e.updated_at)>new Date("2019-01-01"),c=e.description&&e.description.length>10;return o&&s&&i&&c}filterTemplateRepos(e){return e.filter(r=>this.isTemplateRepository(r))}async searchTemplates(e,r="all"){return(await this.getTrendingTemplates()).filter(a=>{const n=a.name.toLowerCase().includes(e.toLowerCase())||a.description.toLowerCase().includes(e.toLowerCase())||a.tags.some(s=>s.toLowerCase().includes(e.toLowerCase())),o=r==="all"||a.category===r;return n&&o})}async getTemplateById(e){const t=(await this.getTrendingTemplates()).find(a=>a.id===e);return t?await this.getRepositoryTemplate(t):null}async getTemplatesByCategory(e){return(await this.getTrendingTemplates()).filter(t=>t.category===e)}async getPopularTemplates(e=10){return(await this.getTrendingTemplates()).sort((t,a)=>a.popularity-t.popularity).slice(0,e)}getFallbackTemplates(){return[{id:"fallback-todo-1",name:"Simple Todo App",description:"A clean and simple todo application with add, edit, and delete functionality.",category:"todo-app",templateType:"web",difficulty:"beginner",estimatedTime:"2-4 hours",tags:["javascript","html","css","todo","task-management"],popularity:85,stars:150,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/simple-todo-app",features:["Add tasks","Mark complete","Delete tasks","Local storage"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999001,fullName:"example/simple-todo-app",htmlUrl:"https://github.com/example/simple-todo-app",cloneUrl:"https://github.com/example/simple-todo-app.git",language:"JavaScript",stargazersCount:150,forksCount:25,topics:["todo","javascript","html","css"],owner:"example"}},{id:"fallback-calculator-1",name:"Basic Calculator",description:"A functional calculator with basic arithmetic operations.",category:"calculator",templateType:"web",difficulty:"beginner",estimatedTime:"1-2 hours",tags:["javascript","html","css","calculator","math"],popularity:90,stars:200,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/basic-calculator",features:["Basic operations","Clear function","Responsive design"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999002,fullName:"example/basic-calculator",htmlUrl:"https://github.com/example/basic-calculator",cloneUrl:"https://github.com/example/basic-calculator.git",language:"JavaScript",stargazersCount:200,forksCount:30,topics:["calculator","javascript","math"],owner:"example"}},{id:"fallback-weather-1",name:"Weather Dashboard",description:"A weather app that displays current conditions and forecast.",category:"weather-app",templateType:"web",difficulty:"intermediate",estimatedTime:"3-5 hours",tags:["javascript","api","weather","dashboard"],popularity:75,stars:120,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/weather-dashboard",features:["Current weather","5-day forecast","Location search"],techStack:["HTML","CSS","JavaScript","Weather API"],isFallback:!0,githubData:{id:999003,fullName:"example/weather-dashboard",htmlUrl:"https://github.com/example/weather-dashboard",cloneUrl:"https://github.com/example/weather-dashboard.git",language:"JavaScript",stargazersCount:120,forksCount:20,topics:["weather","api","dashboard"],owner:"example"}},{id:"fallback-portfolio-1",name:"Personal Portfolio",description:"A modern, responsive portfolio website template.",category:"portfolio",templateType:"web",difficulty:"intermediate",estimatedTime:"4-6 hours",tags:["html","css","javascript","portfolio","responsive"],popularity:95,stars:300,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/personal-portfolio",features:["Responsive design","Project showcase","Contact form"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999004,fullName:"example/personal-portfolio",htmlUrl:"https://github.com/example/personal-portfolio",cloneUrl:"https://github.com/example/personal-portfolio.git",language:"HTML",stargazersCount:300,forksCount:50,topics:["portfolio","responsive","html","css"],owner:"example"}},{id:"fallback-game-1",name:"Snake Game",description:"Classic Snake game built with vanilla JavaScript.",category:"game",templateType:"web",difficulty:"intermediate",estimatedTime:"3-4 hours",tags:["javascript","game","canvas","snake"],popularity:80,stars:180,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/snake-game",features:["Keyboard controls","Score tracking","Game over screen"],techStack:["HTML","CSS","JavaScript","Canvas"],isFallback:!0,githubData:{id:999005,fullName:"example/snake-game",htmlUrl:"https://github.com/example/snake-game",cloneUrl:"https://github.com/example/snake-game.git",language:"JavaScript",stargazersCount:180,forksCount:35,topics:["game","snake","canvas","javascript"],owner:"example"}}]}transformRepositoryToTemplate(e,r="web"){return{id:`github_${e.id}`,name:this.generateTemplateName(e.name),description:e.description||`Template based on ${e.full_name}`,category:this.categorizeTemplate(this.detectTemplateType(e,[]),e),templateType:this.detectTemplateType(e,[]),difficulty:this.estimateDifficulty(e),estimatedTime:this.estimateTime(e),tags:this.generateTags(e,this.detectTemplateType(e,[])),popularity:Math.min(Math.floor(e.stargazers_count/100),100),stars:e.stargazers_count,lastUpdated:e.updated_at,createdAt:e.created_at,source:"github",repositoryUrl:e.html_url,features:this.extractFeatures(e),techStack:this.extractTechStack(e),githubData:{id:e.id,fullName:e.full_name,htmlUrl:e.html_url,cloneUrl:e.clone_url,language:e.language,stargazersCount:e.stargazers_count,forksCount:e.forks_count,topics:e.topics||[],owner:e.owner?.login}}}estimateDifficulty(e){return e.stargazers_count>500?"advanced":e.stargazers_count>100?"intermediate":"beginner"}estimateTime(e){const r=e.stargazers_count;return r>500?"6-8 hours":r>100?"3-5 hours":"1-3 hours"}extractFeatures(e){const r=[],t=e.name.toLowerCase(),a=(e.description||"").toLowerCase();return(t.includes("todo")||a.includes("todo"))&&r.push("Task management","Add/Edit tasks","Mark complete"),(t.includes("calculator")||a.includes("calculator"))&&r.push("Basic operations","Clear function"),(t.includes("weather")||a.includes("weather"))&&r.push("Current weather","Forecast","Location search"),(t.includes("portfolio")||a.includes("portfolio"))&&r.push("Project showcase","Responsive design","Contact form"),(t.includes("game")||a.includes("game"))&&r.push("Interactive gameplay","Score tracking"),r.length>0?r:["Modern design","Responsive layout"]}extractTechStack(e){const r=[];e.language&&r.push(e.language);const t=e.topics||[];return t.includes("react")&&r.push("React"),t.includes("vue")&&r.push("Vue"),t.includes("angular")&&r.push("Angular"),t.includes("html")&&r.push("HTML"),t.includes("css")&&r.push("CSS"),t.includes("javascript")&&r.push("JavaScript"),t.includes("typescript")&&r.push("TypeScript"),r.length>0?r:["HTML","CSS","JavaScript"]}clearCache(){this.templateCache.clear(),this.trendingRepos=[],console.log("🗑️ GitHub template cache cleared")}}const b=new U,E={"codellama-7b":{name:"CodeLlama 7B",type:"Code Generation",baseURL:"http://localhost:11434/api",model:"codellama:7b",description:"Fast and efficient code generation (7B parameters)",languages:["python","javascript","java","cpp","go","rust","php","ruby"],strengths:["speed","efficiency","general-purpose"],ram_required:"8GB"},auto:{name:"Auto Select",type:"Auto Selection",baseURL:"http://localhost:11434/api",model:"auto",description:"Automatically selects the best available model",languages:["all"],strengths:["smart-selection","availability"],ram_required:"variable"}},C={"web-apps":{name:"Web Applications",description:"Full-stack web applications",templates:[{id:"react-dashboard",name:"React Dashboard",description:"Modern React dashboard with charts and analytics",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"ecommerce-store",name:"E-commerce Store",description:"Complete online store with cart and checkout",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]}]},"mobile-apps":{name:"Mobile Applications",description:"React Native mobile applications",templates:[{id:"todo-app",name:"Todo App",description:"Simple todo application with React Native",category:"mobile-apps",files:["App.js","components/TodoItem.js","styles.js"]}]}};class O{constructor(){if(this.isHealthy=!1,this.modelHealth={},this.availableModels=Object.keys(E),this.baseURL="http://localhost:11434/api",this.isProduction=window.location.protocol==="https:",this.isLocalhost=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",this.isProduction&&!this.isLocalhost){console.log("🌐 Production environment detected - skipping local AI detection"),this.isHealthy=!1;return}console.log("🔍 Initializing local AI health monitoring..."),this.checkHealth(),setInterval(()=>{this.checkHealthQuiet()},3e4)}async checkHealth(){if(!(this.isProduction&&!this.isLocalhost))try{const e=await k.get(`${this.baseURL}/tags`,{timeout:3e3});if(e.status===200){const r=this.isHealthy;this.isHealthy=!0,r||console.log("✅ Local AI service is healthy");const t=e.data.models||[];this.modelHealth={},t.forEach(a=>{this.modelHealth[a.name]={isHealthy:!0,size:a.size,modified_at:a.modified_at}})}else{const r=this.isHealthy;this.isHealthy=!1,r&&console.log("⚠️ Local AI service is not responding")}}catch(e){const r=this.isHealthy;this.isHealthy=!1,e.code==="ERR_NETWORK"||e.message.includes("CORS")?r||console.log("🔒 Local AI not accessible (CORS/Network) - using cloud AI"):e.code==="ECONNREFUSED"?r||console.log("💻 Ollama not running locally - using cloud AI"):r||console.log("⚠️ Local AI service not available:",e.message)}}async checkHealthQuiet(){if(!(this.isProduction&&!this.isLocalhost))try{const e=await k.get(`${this.baseURL}/tags`,{timeout:3e3});if(e.status===200){const r=this.isHealthy;this.isHealthy=!0;const t=e.data.models||[];this.modelHealth={},t.forEach(a=>{this.modelHealth[a.name]={isHealthy:!0,size:a.size,modified_at:a.modified_at}})}else this.isHealthy=!1}catch{this.isHealthy=!1}}getAvailableModels(){return Object.values(E)}getHealthyModels(){return Object.keys(this.modelHealth).filter(e=>this.modelHealth[e].isHealthy)}getTemplateCategories(){return C}getTemplatesByCategory(e){return C[e]?.templates||[]}async getAllTemplates(){const e=[];Object.values(C).forEach(a=>{e.push(...a.templates)});const t=(await b.getTrendingTemplates()).map(a=>b.transformRepositoryToTemplate(a));return[...e,...t]}async searchTemplates(e){const r=[];Object.values(C).forEach(o=>{r.push(...o.templates)});const a=(await b.searchTemplates(e)).map(o=>b.transformRepositoryToTemplate(o));return[...r,...a].filter(o=>o.name.toLowerCase().includes(e.toLowerCase())||(o.description||"").toLowerCase().includes(e.toLowerCase()))}async getPopularTemplates(){const e=[];Object.values(C).forEach(n=>{e.push(...n.templates)});const t=(await b.getPopularTemplates(5)).map(n=>b.transformRepositoryToTemplate(n));return[...e,...t].sort((n,o)=>(o.popularity||0)-(n.popularity||0)).slice(0,10)}async generateTemplateById(e,r={}){if(e.startsWith("github_"))return await this.generateGitHubTemplate(e,r);const t=[];Object.values(C).forEach(n=>{t.push(...n.templates)});const a=t.find(n=>n.id===e);if(!a)throw new Error(`Template ${e} not found`);return this.createTemplateFiles(a,r)}async generateGitHubTemplate(e,r={}){try{console.log(`🚀 Generating GitHub template: ${e}`);const t=await b.getTemplateById(e);if(!t)throw new Error(`GitHub template ${e} not found`);const a=await this.createGitHubTemplateFiles(t,r);return console.log(`✅ Generated ${Object.keys(a).length} files from GitHub template`),a}catch(t){throw console.error(`❌ Failed to generate GitHub template ${e}:`,t),t}}async createGitHubTemplateFiles(e,r={}){const t={};try{const{githubData:a}=e;return t["README.md"]=`# ${e.name}

${e.description}

## GitHub Repository
- **Source**: [${a.fullName}](${a.htmlUrl})
- **Stars**: ${a.stargazersCount}
- **Language**: ${a.language||"JavaScript"}

## Getting Started

This template is based on the GitHub repository: ${a.fullName}

### Installation
\`\`\`bash
git clone ${a.cloneUrl}
cd ${a.fullName}
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
`,t["package.json"]=this.createPackageJson(e,r),t[this.getMainFileName(e)]=this.createMainFile(e,r),(e.templateType==="react"||e.templateType==="vue"||e.templateType==="web")&&(t["index.html"]=this.createIndexHtml(e,r)),Object.entries(r).forEach(([n,o])=>{typeof o=="string"&&(t[n]=o)}),t}catch(a){throw console.error("Failed to create GitHub template files:",a),a}}createPackageJson(e,r={}){const t={name:e.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:e.description,main:this.getMainFileName(e),scripts:{start:"npm run dev",dev:this.getDevScript(e),build:this.getBuildScript(e),test:'echo "No tests specified" && exit 0'},keywords:e.tags,author:r.author||"DreamBuild User",license:"MIT",repository:{type:"git",url:e.githubData.cloneUrl}};return t.dependencies=this.getTemplateDependencies(e),t.devDependencies=this.getTemplateDevDependencies(e),JSON.stringify(t,null,2)}getMainFileName(e){return{react:"src/App.jsx",vue:"src/main.js",angular:"src/main.ts",nodejs:"index.js",python:"main.py",mobile:"App.js",web:"index.js"}[e.templateType]||"index.js"}getDevScript(e){return{react:"react-scripts start",vue:"vue-cli-service serve",angular:"ng serve",nodejs:"nodemon index.js",python:"python main.py",mobile:"expo start",web:"live-server"}[e.templateType]||"node index.js"}getBuildScript(e){return{react:"react-scripts build",vue:"vue-cli-service build",angular:"ng build",nodejs:'echo "No build step needed"',python:'echo "No build step needed"',mobile:"expo build",web:'echo "No build step needed"'}[e.templateType]||'echo "No build step needed"'}getTemplateDependencies(e){return{react:{react:"^18.0.0","react-dom":"^18.0.0"},vue:{vue:"^3.0.0"},angular:{"@angular/core":"^15.0.0","@angular/common":"^15.0.0"},svelte:{svelte:"^3.0.0"},nodejs:{express:"^4.18.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{"react-native":"^0.70.0",expo:"~47.0.0"},api:{express:"^4.18.0"},dashboard:{react:"^18.0.0","react-dom":"^18.0.0"},ecommerce:{react:"^18.0.0","react-dom":"^18.0.0"},blog:{next:"^13.0.0",react:"^18.0.0"},portfolio:{react:"^18.0.0","react-dom":"^18.0.0"},landing:{react:"^18.0.0","react-dom":"^18.0.0"},web:{}}[e.templateType]||{}}getTemplateDevDependencies(e){return{react:{"react-scripts":"5.0.1"},vue:{"@vue/cli-service":"^5.0.0"},angular:{"@angular/cli":"^15.0.0"},svelte:{vite:"^4.0.0"},nodejs:{nodemon:"^2.0.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{},api:{nodemon:"^2.0.0"},dashboard:{"react-scripts":"5.0.1"},ecommerce:{"react-scripts":"5.0.1"},blog:{next:"^13.0.0"},portfolio:{"react-scripts":"5.0.1"},landing:{"react-scripts":"5.0.1"},web:{"live-server":"^1.2.0"}}[e.templateType]||{}}createMainFile(e,r={}){const t={react:`import React from 'react';
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
// Repository: ${e.githubData.htmlUrl}`};return t[e.templateType]||t.web}createIndexHtml(e,r={}){return`<!DOCTYPE html>
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
</html>`}createTemplateFiles(e,r={}){const t={};switch(e.id){case"react-dashboard":t["index.html"]=`<!DOCTYPE html>
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
</html>`}return t}async generateCode(e,r={}){console.log("🚀 Starting code generation for prompt:",e);try{return this.isProduction&&!this.isLocalhost?(console.log("🌐 Production environment - using template fallback"),this.createFallbackResponse(e,r)):this.isHealthy?await this.generateWithLocalAI(e,r):(console.log("⚠️ Local AI not available, using template fallback"),this.createFallbackResponse(e,r))}catch(t){return console.error("❌ Code generation failed:",t),this.createFallbackResponse(e,r)}}async generateWithLocalAI(e,r={}){const t=this.getBestAvailableModel(),a=this.createSystemPrompt(r),n={model:t,messages:[{role:"system",content:a},{role:"user",content:e}],stream:!1,options:{temperature:.7,top_p:.9,max_tokens:4e3}};try{const o=await k.post(`${this.baseURL}/chat`,n,{timeout:3e4,headers:{"Content-Type":"application/json"}});if(o.data&&o.data.message&&o.data.message.content){const s=o.data.message.content;return this.parseAIResponse(s,e)}else throw new Error("Invalid response from local AI")}catch(o){throw console.error("❌ Local AI generation failed:",o),o}}getBestAvailableModel(){const e=this.getHealthyModels();return e.includes("codellama:7b")?"codellama:7b":e.includes("codellama:13b")?"codellama:13b":e.includes("codellama:34b")?"codellama:34b":e[0]||"codellama:7b"}createSystemPrompt(e={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

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

Generate practical, working applications that users can immediately use.`}parseAIResponse(e,r){try{const t=e.match(/\{[\s\S]*\}/);if(t){const a=JSON.parse(t[0]);if(a.files)return a.files}return this.createFallbackResponse(r,{})}catch(t){return console.error("❌ Failed to parse AI response:",t),this.createFallbackResponse(r,{})}}createFallbackResponse(e,r={}){console.log("🔄 Creating fallback response for prompt:",e);const t=e.toLowerCase();return t.includes("dashboard")||t.includes("analytics")?this.generateTemplateById("react-dashboard",r):t.includes("todo")||t.includes("task")?this.generateTemplateById("todo-app",r):t.includes("ecommerce")||t.includes("store")||t.includes("shop")?this.generateTemplateById("ecommerce-store",r):{"index.html":`<!DOCTYPE html>
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
}`}}}const u=new O;class H{constructor(){this.app=null,this.db=null,this.storage=null,this.auth=null,this.user=null,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const e={apiKey:"your-api-key",authDomain:"your-project.firebaseapp.com",projectId:"your-project-id",storageBucket:"your-project.appspot.com",messagingSenderId:"123456789",appId:"your-app-id"};try{this.app=A(e)}catch(r){if(r.code==="app/duplicate-app")this.app=D();else if(r.code==="app/no-options")try{this.app=D()}catch{this.app=A({apiKey:"demo-key",authDomain:"demo.firebaseapp.com",projectId:"demo-project"})}else throw r}this.db=R(this.app),this.storage=z(this.app),this.auth=B(this.app),L(this.auth,r=>{this.user=r,console.log("Firebase auth state changed:",r?"authenticated":"not authenticated")});try{await j(this.auth),console.log("✅ Firebase anonymous auth successful")}catch(r){console.log("⚠️ Firebase auth not available, continuing without authentication:",r.message),this.user=null}this.isInitialized=!0,console.log("🔥 Firebase initialized successfully")}catch(e){console.error("❌ Failed to initialize Firebase:",e),this.isInitialized=!1,this.user=null,console.log("⚠️ Continuing without Firebase services")}}async storeProjectContext(e,r){try{await this.initialize();const t=l(this.db,"projectContexts",e);await m(t,{...r,userId:this.user?.uid||"anonymous",storedAt:new Date().toISOString(),dataSize:JSON.stringify(r).length}),console.log("✅ Project context stored successfully")}catch(t){throw console.error("❌ Failed to store project context:",t),t}}async loadProjectContext(e){try{await this.initialize();const r=l(this.db,"projectContexts",e),t=await v(r);return t.exists()?(console.log("✅ Project context loaded successfully"),t.data()):(console.log("❌ Project context not found"),null)}catch(r){return console.error("❌ Failed to load project context:",r),null}}async storeProjectFiles(e,r){try{await this.initialize();const t=l(this.db,"projectFiles",e);await m(t,{projectId:e,files:r,fileCount:Object.keys(r).length,totalSize:JSON.stringify(r).length,userId:this.user?.uid||"anonymous",storedAt:new Date().toISOString()}),console.log("✅ Project files stored successfully")}catch(t){throw console.error("❌ Failed to store project files:",t),t}}async loadProjectFiles(e){try{await this.initialize();const r=l(this.db,"projectFiles",e),t=await v(r);return t.exists()?(console.log("✅ Project files loaded successfully"),t.data().files):(console.log("❌ Project files not found"),null)}catch(r){return console.error("❌ Failed to load project files:",r),null}}async storeTemplate(e){try{await this.initialize();const r=l(this.db,"templates",e.id);await m(r,{...e,userId:this.user?.uid||"anonymous",updatedAt:new Date().toISOString()}),console.log("✅ Template stored successfully")}catch(r){throw console.error("❌ Failed to store template:",r),r}}async loadTemplates(){try{await this.initialize();const e=w(this.db,"templates"),r=await x(e),t=[];return r.forEach(a=>{t.push(a.data())}),console.log("✅ Templates loaded successfully"),t}catch(e){return console.error("❌ Failed to load templates:",e),[]}}async searchTemplates(e,r,t){try{await this.initialize();const a=w(this.db,"templates");let n=g(a);e&&e.length>0&&(n=g(n,f("keywords","array-contains-any",e))),r&&r.length>0&&(n=g(n,f("technologies","array-contains-any",r))),t&&t.length>0&&(n=g(n,f("patterns","array-contains-any",t)));const o=await x(n),s=[];return o.forEach(i=>{s.push(i.data())}),console.log("✅ Templates searched successfully"),s}catch(a){return console.error("❌ Failed to search templates:",a),[]}}async storeLargeFile(e,r,t){try{await this.initialize();const a=$(this.storage,`projects/${e}/${r}`),n=new Blob([t],{type:"text/plain"});await M(a,n);const o=await N(a);return console.log("✅ Large file stored successfully"),o}catch(a){throw console.error("❌ Failed to store large file:",a),a}}async loadLargeFile(e){try{const t=await(await fetch(e)).text();return console.log("✅ Large file loaded successfully"),t}catch(r){return console.error("❌ Failed to load large file:",r),null}}async getUserProjects(){try{await this.initialize();const e=w(this.db,"projectContexts"),r=g(e,f("userId","==",this.user?.uid||"anonymous")),t=await x(r),a=[];return t.forEach(n=>{a.push({id:n.id,...n.data()})}),console.log("✅ User projects loaded successfully"),a}catch(e){return console.error("❌ Failed to load user projects:",e),[]}}async deleteProject(e){try{await this.initialize();const r=l(this.db,"projectContexts",e);await T(r);const t=l(this.db,"projectFiles",e);await T(t),console.log("✅ Project deleted successfully")}catch(r){throw console.error("❌ Failed to delete project:",r),r}}async getStorageStats(){try{await this.initialize();const e=await this.getUserProjects();let r=0,t=0;for(const a of e)r+=a.dataSize||0,t+=a.fileCount||0;return{totalProjects:e.length,totalFiles:t,totalSize:r,totalSizeMB:Math.round(r/(1024*1024)*100)/100}}catch(e){return console.error("❌ Failed to get storage stats:",e),{totalProjects:0,totalFiles:0,totalSize:0,totalSizeMB:0}}}async storeConversationMemory(e,r){try{await this.initialize();const t=JSON.stringify(r),a=8e5;if(t.length>a){console.log("⚠️ Conversation data too large, storing in chunks");const n=this.chunkData(r,a);for(let o=0;o<n.length;o++){const s=l(this.db,"conversationMemory",`${e}_chunk_${o}`);await m(s,{projectId:e,chunkIndex:o,totalChunks:n.length,conversation:n[o],userId:this.user?.uid||"anonymous",lastUpdated:new Date().toISOString()})}console.log(`🧠 Conversation memory stored in ${n.length} chunks`)}else{const n=l(this.db,"conversationMemory",e);await m(n,{projectId:e,conversation:r,userId:this.user?.uid||"anonymous",lastUpdated:new Date().toISOString(),memorySize:t.length}),console.log("🧠 Conversation memory stored successfully")}}catch(t){throw console.error("❌ Failed to store conversation memory:",t),t}}chunkData(e,r){const t=[],a=JSON.stringify(e);let n=0;for(;n<a.length;){let o=Math.min(n+r,a.length);if(o<a.length){let s=a.lastIndexOf("}",o),i=a.lastIndexOf("]",o),c=a.lastIndexOf(",",o);const d=Math.max(s,i,c);d>n+r*.8&&(o=d+1)}try{t.push(JSON.parse(a.slice(n,o)))}catch{t.push(a.slice(n,o))}n=o}return t}async loadConversationMemory(e){try{await this.initialize();const r=l(this.db,"conversationMemory",e),t=await v(r);if(t.exists())return console.log("🧠 Conversation memory loaded successfully"),t.data().conversation;const a=w(this.db,"conversationMemory"),n=g(a,f("projectId","==",e)),o=await x(n);if(!o.empty){const s=[];o.forEach(c=>{s.push({index:c.data().chunkIndex,data:c.data().conversation})}),s.sort((c,d)=>c.index-d.index);const i=s.map(c=>c.data);return console.log(`🧠 Conversation memory loaded from ${s.length} chunks`),i}return console.log("❌ Conversation memory not found"),null}catch(r){return console.error("❌ Failed to load conversation memory:",r),null}}async addPromptToMemory(e,r,t,a){try{await this.initialize();let n=await this.loadConversationMemory(e)||{projectId:e,prompts:[],responses:[],context:{},createdAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return n.prompts.push({id:`prompt-${Date.now()}`,text:r,timestamp:new Date().toISOString(),context:a}),n.responses.push({id:`response-${Date.now()}`,promptId:n.prompts[n.prompts.length-1].id,text:t,timestamp:new Date().toISOString(),context:a}),n.context={...n.context,...a},n.lastUpdated=new Date().toISOString(),await this.storeConversationMemory(e,n),console.log("🧠 Prompt added to memory successfully"),n}catch(n){throw console.error("❌ Failed to add prompt to memory:",n),n}}async getConversationHistory(e,r=50){try{await this.initialize();const t=await this.loadConversationMemory(e);if(!t)return[];const a=t.prompts.slice(-r),n=t.responses.slice(-r);return{prompts:a,responses:n,context:t.context,totalPrompts:t.prompts.length,totalResponses:t.responses.length}}catch(t){return console.error("❌ Failed to get conversation history:",t),[]}}async searchConversationMemory(e,r){try{await this.initialize();const t=await this.loadConversationMemory(e);if(!t)return[];const a=[],n=r.toLowerCase();return t.prompts.forEach(o=>{o.text.toLowerCase().includes(n)&&a.push({type:"prompt",id:o.id,text:o.text,timestamp:o.timestamp,context:o.context})}),t.responses.forEach(o=>{o.text.toLowerCase().includes(n)&&a.push({type:"response",id:o.id,text:o.text,timestamp:o.timestamp,context:o.context})}),console.log("🔍 Conversation memory searched successfully"),a}catch(t){return console.error("❌ Failed to search conversation memory:",t),[]}}async getConversationContext(e,r){try{await this.initialize();const t=await this.loadConversationMemory(e);if(!t)return null;const a={projectId:e,currentPrompt:r,previousPrompts:t.prompts.slice(-10),previousResponses:t.responses.slice(-10),projectContext:t.context,conversationSummary:this.generateConversationSummary(t),relevantHistory:this.findRelevantHistory(t,r)};return console.log("🧠 Conversation context generated successfully"),a}catch(t){return console.error("❌ Failed to get conversation context:",t),null}}generateConversationSummary(e){const r=e.prompts,t=e.responses;return r.length===0?"No previous conversation":{totalPrompts:r.length,totalResponses:t.length,firstPrompt:r[0]?.text||"",lastPrompt:r[r.length-1]?.text||"",keyTopics:this.extractKeyTopics(r),projectEvolution:this.trackProjectEvolution(e)}}extractKeyTopics(e){const r=new Set;return e.forEach(t=>{t.text.toLowerCase().split(" ").forEach(n=>{n.length>4&&!this.isCommonWord(n)&&r.add(n)})}),Array.from(r).slice(0,10)}isCommonWord(e){return["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","two","way","who","boy","did","man","men","put","say","she","too","use"].includes(e)}trackProjectEvolution(e){const r=[],t=e.prompts,a=e.responses;for(let n=0;n<t.length;n++){const o=t[n],s=a[n];r.push({phase:n+1,prompt:o.text,response:s.text,timestamp:o.timestamp,context:o.context})}return r}findRelevantHistory(e,r){const t=[],a=r.toLowerCase().split(" ");return e.prompts.forEach((n,o)=>{const s=n.text.toLowerCase().split(" "),i=a.filter(c=>s.includes(c));i.length>2&&t.push({prompt:n.text,response:e.responses[o]?.text||"",relevance:i.length,timestamp:n.timestamp})}),t.sort((n,o)=>o.relevance-n.relevance).slice(0,5)}async storeAILearningPattern(e,r){try{await this.initialize();const t=l(this.db,"aiLearningPatterns",`${e}-${Date.now()}`);await m(t,{projectId:e,pattern:r,userId:this.user?.uid||"anonymous",createdAt:new Date().toISOString()}),console.log("🧠 AI learning pattern stored successfully")}catch(t){throw console.error("❌ Failed to store AI learning pattern:",t),t}}async getAILearningPatterns(e){try{await this.initialize();const r=w(this.db,"aiLearningPatterns"),t=g(r,f("projectId","==",e)),a=await x(t),n=[];return a.forEach(o=>{n.push(o.data())}),console.log("🧠 AI learning patterns loaded successfully"),n}catch(r){return console.error("❌ Failed to load AI learning patterns:",r),[]}}async clearConversationMemory(e){try{await this.initialize();const r=l(this.db,"conversationMemory",e);await T(r),console.log("🧠 Conversation memory cleared successfully")}catch(r){throw console.error("❌ Failed to clear conversation memory:",r),r}}async saveConversation(e){try{await this.initialize();const r=l(this.db,"conversations",e.id);await m(r,{...e,userId:this.user?.uid||"anonymous",updatedAt:new Date().toISOString()}),console.log("💬 Conversation saved successfully")}catch(r){throw console.error("❌ Failed to save conversation:",r),r}}async getConversation(e){try{await this.initialize();const r=l(this.db,"conversations",e),t=await v(r);return t.exists()?(console.log("💬 Conversation loaded successfully"),t.data()):null}catch(r){return console.error("❌ Failed to load conversation:",r),null}}async getUserConversations(){try{await this.initialize();const e=w(this.db,"conversations"),r=g(e,f("userId","==",this.user?.uid||"anonymous"),P("lastModified","desc")),t=await x(r),a=[];return t.forEach(n=>{a.push({id:n.id,...n.data()})}),console.log("💬 User conversations loaded successfully"),a}catch(e){return console.error("❌ Failed to load user conversations:",e),[]}}async saveFeatureRecommendations(e,r){try{await this.initialize();const t=l(this.db,"featureRecommendations",e);await m(t,{conversationId:e,recommendations:r,userId:this.user?.uid||"anonymous",createdAt:new Date().toISOString()}),console.log("🎯 Feature recommendations saved successfully")}catch(t){throw console.error("❌ Failed to save feature recommendations:",t),t}}async getFeatureRecommendations(e){try{await this.initialize();const r=l(this.db,"featureRecommendations",e),t=await v(r);return t.exists()?(console.log("🎯 Feature recommendations loaded successfully"),t.data().recommendations):[]}catch(r){return console.error("❌ Failed to load feature recommendations:",r),[]}}async saveIndustryStandardsCheck(e,r){try{await this.initialize();const t=l(this.db,"industryStandards",e);await m(t,{conversationId:e,standardsCheck:r,userId:this.user?.uid||"anonymous",checkedAt:new Date().toISOString()}),console.log("📊 Industry standards check saved successfully")}catch(t){throw console.error("❌ Failed to save industry standards check:",t),t}}async getIndustryStandardsCheck(e){try{await this.initialize();const r=l(this.db,"industryStandards",e),t=await v(r);return t.exists()?(console.log("📊 Industry standards check loaded successfully"),t.data().standardsCheck):null}catch(r){return console.error("❌ Failed to load industry standards check:",r),null}}}const F=new H;class q{constructor(){this.currentConversation=null,this.conversationHistory=[],this.projectContext={},this.featureRecommendations=[],this.industryStandards=this.getIndustryStandards()}async initializeConversation(e,r={}){try{return this.currentConversation={id:e||`conv_${Date.now()}`,projectData:r,messages:[],context:{currentFeatures:r.features||[],techStack:r.techStack||[],appType:r.appType||"web",complexity:r.complexity||"basic",industry:r.industry||"general"},createdAt:new Date,lastModified:new Date},await this.loadConversationHistory(e),console.log("🔄 Conversation initialized for project:",e),this.currentConversation}catch(t){throw console.error("Failed to initialize conversation:",t),t}}async addMessage(e,r=null,t="user"){if(!this.currentConversation)throw new Error("No active conversation. Initialize conversation first.");const a={id:`msg_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,type:t,content:e,aiResponse:r,timestamp:new Date,context:{projectState:{...this.currentConversation.context},features:[...this.currentConversation.context.currentFeatures]}};return this.currentConversation.messages.push(a),this.currentConversation.lastModified=new Date,await this.saveConversation(),a}getConversationContext(){if(!this.currentConversation)return null;const e=this.currentConversation.messages.slice(-10);return{project:this.currentConversation.projectData,currentFeatures:this.currentConversation.context.currentFeatures,techStack:this.currentConversation.context.techStack,appType:this.currentConversation.context.appType,complexity:this.currentConversation.context.complexity,industry:this.currentConversation.context.industry,recentMessages:e.map(t=>({type:t.type,content:t.content,timestamp:t.timestamp})),conversationId:this.currentConversation.id}}async generateFeatureRecommendations(){if(!this.currentConversation)return[];const e=this.getConversationContext(),r=e.currentFeatures||[],t=e.appType||"web",a=e.industry||"general",n=e.complexity||"basic",o=this.getIndustrySpecificRecommendations(a,t),s=this.getComplexityBasedRecommendations(n,t),i=this.getEssentialFeatureRecommendations(r,t),c=this.getAdvancedFeatureRecommendations(r,t,a),d=[...i,...o,...s,...c],h=this.deduplicateRecommendations(d,r),S=this.prioritizeRecommendations(h,e);return this.featureRecommendations=S.slice(0,10),this.featureRecommendations}getIndustrySpecificRecommendations(e,r){const t={ecommerce:[{name:"Shopping Cart",description:"Add shopping cart functionality with add/remove items",priority:"high",category:"core"},{name:"Payment Integration",description:"Integrate payment processing (Stripe, PayPal)",priority:"high",category:"payment"},{name:"Product Search",description:"Add search and filter functionality for products",priority:"medium",category:"search"},{name:"User Reviews",description:"Allow customers to review and rate products",priority:"medium",category:"social"},{name:"Inventory Management",description:"Track product stock and availability",priority:"high",category:"management"}],healthcare:[{name:"Patient Records",description:"Secure patient data management system",priority:"high",category:"data"},{name:"Appointment Scheduling",description:"Calendar system for booking appointments",priority:"high",category:"scheduling"},{name:"HIPAA Compliance",description:"Ensure healthcare data privacy compliance",priority:"critical",category:"security"},{name:"Prescription Management",description:"Digital prescription tracking and management",priority:"medium",category:"management"},{name:"Telemedicine",description:"Video consultation capabilities",priority:"medium",category:"communication"}],education:[{name:"Course Management",description:"Create and manage educational courses",priority:"high",category:"content"},{name:"Progress Tracking",description:"Track student learning progress and analytics",priority:"high",category:"analytics"},{name:"Quiz System",description:"Interactive quizzes and assessments",priority:"medium",category:"assessment"},{name:"Discussion Forums",description:"Student and teacher discussion boards",priority:"medium",category:"social"},{name:"Certificate Generation",description:"Automated certificate creation and delivery",priority:"low",category:"certification"}],finance:[{name:"Transaction History",description:"Detailed financial transaction tracking",priority:"high",category:"data"},{name:"Budget Planning",description:"Personal or business budget management tools",priority:"high",category:"planning"},{name:"Security Features",description:"Two-factor authentication and encryption",priority:"critical",category:"security"},{name:"Reporting Dashboard",description:"Financial reports and analytics dashboard",priority:"medium",category:"analytics"},{name:"Investment Tracking",description:"Portfolio and investment performance tracking",priority:"medium",category:"investment"}],general:[{name:"User Authentication",description:"Secure user login and registration system",priority:"high",category:"auth"},{name:"Data Validation",description:"Input validation and error handling",priority:"high",category:"validation"},{name:"Responsive Design",description:"Mobile-friendly responsive layout",priority:"high",category:"ui"},{name:"Search Functionality",description:"Search and filter capabilities",priority:"medium",category:"search"},{name:"Analytics Integration",description:"User behavior and performance analytics",priority:"medium",category:"analytics"}]};return t[e]||t.general}getComplexityBasedRecommendations(e,r){const t={basic:[{name:"Basic CRUD Operations",description:"Create, Read, Update, Delete functionality",priority:"high",category:"core"},{name:"Form Validation",description:"Client-side and server-side form validation",priority:"high",category:"validation"},{name:"Error Handling",description:"Comprehensive error handling and user feedback",priority:"medium",category:"ux"}],intermediate:[{name:"API Integration",description:"Connect to external APIs and services",priority:"high",category:"integration"},{name:"State Management",description:"Advanced state management (Redux, Context)",priority:"medium",category:"architecture"},{name:"Caching Strategy",description:"Implement caching for better performance",priority:"medium",category:"performance"},{name:"Testing Suite",description:"Unit and integration tests",priority:"medium",category:"testing"}],advanced:[{name:"Microservices Architecture",description:"Break down into microservices",priority:"high",category:"architecture"},{name:"Real-time Features",description:"WebSocket or Server-Sent Events",priority:"high",category:"realtime"},{name:"Advanced Security",description:"OAuth, JWT, rate limiting, security headers",priority:"high",category:"security"},{name:"Performance Optimization",description:"Code splitting, lazy loading, CDN",priority:"high",category:"performance"},{name:"Monitoring & Logging",description:"Application monitoring and logging system",priority:"medium",category:"monitoring"}]};return t[e]||t.basic}getEssentialFeatureRecommendations(e,r){return[{name:"Error Boundaries",description:"React error boundaries for graceful error handling",priority:"high",category:"reliability"},{name:"Loading States",description:"Loading indicators and skeleton screens",priority:"high",category:"ux"},{name:"Accessibility (a11y)",description:"WCAG compliance and screen reader support",priority:"high",category:"accessibility"},{name:"SEO Optimization",description:"Meta tags, structured data, sitemap",priority:"medium",category:"seo"},{name:"Performance Monitoring",description:"Core Web Vitals and performance tracking",priority:"medium",category:"performance"}].filter(a=>!e.some(n=>n.toLowerCase().includes(a.name.toLowerCase())||a.name.toLowerCase().includes(n.toLowerCase())))}getAdvancedFeatureRecommendations(e,r,t){return[{name:"PWA Support",description:"Progressive Web App capabilities",priority:"medium",category:"mobile"},{name:"Offline Support",description:"Service worker for offline functionality",priority:"medium",category:"offline"},{name:"Internationalization",description:"Multi-language support (i18n)",priority:"low",category:"localization"},{name:"Dark Mode",description:"Theme switching and dark mode support",priority:"low",category:"ui"},{name:"Advanced Analytics",description:"User behavior tracking and heatmaps",priority:"low",category:"analytics"}]}deduplicateRecommendations(e,r){const t=new Set;return e.filter(a=>{const n=a.name.toLowerCase();return t.has(n)||r.some(o=>o.toLowerCase().includes(n)||n.includes(o.toLowerCase()))?!1:(t.add(n),!0)})}prioritizeRecommendations(e,r){return e.sort((t,a)=>{const n={critical:4,high:3,medium:2,low:1},o=n[t.priority]||0,s=n[a.priority]||0;if(o!==s)return s-o;const i={core:4,security:4,auth:3,validation:3,ux:2,performance:2},c=i[t.category]||1;return(i[a.category]||1)-c})}getIndustryStandards(){return{security:["Input validation and sanitization","HTTPS enforcement","Authentication and authorization","Rate limiting and DDoS protection","Security headers (CSP, HSTS, etc.)","Regular security audits"],performance:["Core Web Vitals optimization","Image optimization and lazy loading","Code splitting and tree shaking","CDN implementation","Caching strategies","Database query optimization"],accessibility:["WCAG 2.1 AA compliance","Keyboard navigation support","Screen reader compatibility","Color contrast ratios","Alt text for images","Focus management"],code_quality:["TypeScript implementation","ESLint and Prettier configuration","Unit and integration tests","Code documentation","Error handling and logging","Code review process"],deployment:["CI/CD pipeline setup","Environment configuration","Monitoring and alerting","Backup and recovery","Scalability planning","Documentation and runbooks"]}}async checkIndustryStandards(e){const r=this.getIndustryStandards(),t=e.features||[],a={};return Object.keys(r).forEach(n=>{a[n]={total:r[n].length,implemented:0,missing:[],score:0},r[n].forEach(o=>{t.some(i=>i.toLowerCase().includes(o.toLowerCase())||o.toLowerCase().includes(i.toLowerCase()))?a[n].implemented++:a[n].missing.push(o)}),a[n].score=Math.round(a[n].implemented/a[n].total*100)}),a}generateConversationSummary(){if(!this.currentConversation)return null;const e=this.currentConversation.messages,r=this.currentConversation.context.currentFeatures,t=this.featureRecommendations;return{conversationId:this.currentConversation.id,messageCount:e.length,currentFeatures:r,recommendations:t.slice(0,5),lastActivity:this.currentConversation.lastModified,projectType:this.currentConversation.context.appType,industry:this.currentConversation.context.industry}}async saveConversation(){if(this.currentConversation)try{await F.saveConversation(this.currentConversation),console.log("💾 Conversation saved to Firebase")}catch(e){console.error("Failed to save conversation:",e)}}async loadConversationHistory(e){try{const r=await F.getConversation(e);r&&(this.currentConversation=r,this.conversationHistory=r.messages||[],console.log("📚 Conversation history loaded"))}catch(r){console.error("Failed to load conversation history:",r)}}getConversationHistory(){return this.currentConversation?this.currentConversation.messages:[]}clearConversation(){this.currentConversation=null,this.conversationHistory=[],this.projectContext={},this.featureRecommendations=[]}}const Q=new q;class G{constructor(){this.currentProject=null,this.existingFeatures=[],this.featureHistory=[]}async initializeProject(e){this.currentProject=e,this.existingFeatures=this.extractExistingFeatures(e),this.featureHistory=[],console.log("🔄 Incremental development initialized"),console.log("📋 Existing features:",this.existingFeatures)}extractExistingFeatures(e){const r=[],t=e.files||{};return Object.entries(t).forEach(([a,n])=>{if(typeof n=="string"){const o=this.analyzeFileForFeatures(a,n);r.push(...o)}}),[...new Set(r)]}analyzeFileForFeatures(e,r){const t=[],a=r.toLowerCase();return(a.includes("login")||a.includes("auth")||a.includes("signin"))&&t.push("Authentication"),(a.includes("database")||a.includes("firebase")||a.includes("mongodb"))&&t.push("Database"),(a.includes("responsive")||a.includes("mobile")||a.includes("@media"))&&t.push("Responsive Design"),(a.includes("fetch")||a.includes("axios")||a.includes("api"))&&t.push("API Integration"),(a.includes("form")||a.includes("input")||a.includes("submit"))&&t.push("Form Handling"),(a.includes("router")||a.includes("route")||a.includes("navigate"))&&t.push("Routing"),(a.includes("useState")||a.includes("useContext")||a.includes("redux"))&&t.push("State Management"),(a.includes("test")||a.includes("jest")||a.includes("spec"))&&t.push("Testing"),(a.includes("todo")||a.includes("task"))&&t.push("Todo Management"),(a.includes("shopping")||a.includes("cart")||a.includes("product"))&&t.push("E-commerce"),(a.includes("calendar")||a.includes("schedule")||a.includes("appointment"))&&t.push("Scheduling"),(a.includes("chat")||a.includes("message")||a.includes("conversation"))&&t.push("Messaging"),t}async processFeatureRequest(e,r){console.log("🔄 Processing feature request:",e);const t=this.analyzeRequestedFeatures(e);console.log("🎯 Requested features:",t);const a=this.filterNewFeatures(t);if(console.log("✨ New features to add:",a),a.length===0)return{type:"no_new_features",message:"These features already exist in your app. Would you like to enhance or modify them instead?",existingFeatures:this.existingFeatures};const n=await this.generateIncrementalCode(a,e,r);return this.existingFeatures.push(...a),this.featureHistory.push({timestamp:new Date,features:a,prompt:e}),{type:"incremental_update",newFeatures:a,code:n,updatedFiles:this.getUpdatedFiles(n),message:`Added ${a.length} new feature(s): ${a.join(", ")}`}}analyzeRequestedFeatures(e){const r=e.toLowerCase(),t=[];return(r.includes("login")||r.includes("auth")||r.includes("sign in")||r.includes("register"))&&t.push("Authentication"),(r.includes("database")||r.includes("store data")||r.includes("save data"))&&t.push("Database"),(r.includes("responsive")||r.includes("mobile")||r.includes("mobile-friendly"))&&t.push("Responsive Design"),(r.includes("api")||r.includes("fetch data")||r.includes("external data"))&&t.push("API Integration"),(r.includes("form")||r.includes("input")||r.includes("submit"))&&t.push("Form Handling"),(r.includes("navigation")||r.includes("pages")||r.includes("routing"))&&t.push("Routing"),(r.includes("state")||r.includes("manage data")||r.includes("global state"))&&t.push("State Management"),(r.includes("test")||r.includes("testing")||r.includes("unit test"))&&t.push("Testing"),(r.includes("todo")||r.includes("task")||r.includes("checklist"))&&t.push("Todo Management"),(r.includes("shopping")||r.includes("cart")||r.includes("ecommerce")||r.includes("store"))&&t.push("E-commerce"),(r.includes("calendar")||r.includes("schedule")||r.includes("booking"))&&t.push("Scheduling"),(r.includes("chat")||r.includes("message")||r.includes("communication"))&&t.push("Messaging"),(r.includes("search")||r.includes("filter")||r.includes("find"))&&t.push("Search Functionality"),(r.includes("notification")||r.includes("alert")||r.includes("reminder"))&&t.push("Notifications"),(r.includes("upload")||r.includes("file")||r.includes("image"))&&t.push("File Upload"),(r.includes("payment")||r.includes("stripe")||r.includes("paypal")||r.includes("billing"))&&t.push("Payment Processing"),t}filterNewFeatures(e){return e.filter(r=>!this.existingFeatures.some(t=>t.toLowerCase().includes(r.toLowerCase())||r.toLowerCase().includes(t.toLowerCase())))}async generateIncrementalCode(e,r,t){const a={};for(const n of e){const o=await this.generateFeatureCode(n,r,t);Object.assign(a,o)}return a}async generateFeatureCode(e,r,t){const n={Authentication:()=>this.generateAuthCode(),Database:()=>this.generateDatabaseCode(),"Responsive Design":()=>this.generateResponsiveCode(),"API Integration":()=>this.generateAPICode(),"Form Handling":()=>this.generateFormCode(),Routing:()=>this.generateRoutingCode(),"State Management":()=>this.generateStateCode(),Testing:()=>this.generateTestingCode(),"Todo Management":()=>this.generateTodoCode(),"E-commerce":()=>this.generateEcommerceCode(),Scheduling:()=>this.generateSchedulingCode(),Messaging:()=>this.generateMessagingCode(),"Search Functionality":()=>this.generateSearchCode(),Notifications:()=>this.generateNotificationCode(),"File Upload":()=>this.generateFileUploadCode(),"Payment Processing":()=>this.generatePaymentCode()}[e];return n?await n():this.generateGenericFeatureCode(e,r)}generateAuthCode(){return{"auth.js":`// Authentication Service
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
window.assert = assert`}}generateGenericFeatureCode(e,r){return{[`${e.toLowerCase().replace(/\s+/g,"_")}.js`]:`// ${e} Implementation
// Generated based on: "${r}"

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
window.${e.replace(/\s+/g,"")} = ${e.replace(/\s+/g,"")}`}}getUpdatedFiles(e){return Object.keys(e)}getCurrentProject(){return{...this.currentProject,features:this.existingFeatures,featureHistory:this.featureHistory}}reset(){this.currentProject=null,this.existingFeatures=[],this.featureHistory=[]}}const I=new G;class W{constructor(){this.isHealthy=!0,this.baseURL="https://api-inference.huggingface.co/models",this.apiKey="hf_your_api_key_here",this.availableModels={"codellama-7b":{name:"CodeLlama 7B",model:"codellama/CodeLlama-7b-Python-hf",description:"Fast and efficient code generation",maxTokens:2048,temperature:.7},"codellama-13b":{name:"CodeLlama 13B",model:"codellama/CodeLlama-13b-Python-hf",description:"Higher quality code generation",maxTokens:2048,temperature:.7},"starcoder-15b":{name:"StarCoder 15B",model:"bigcode/starcoder",description:"Excellent code completion",maxTokens:2048,temperature:.7},"deepseek-coder":{name:"DeepSeek Coder",model:"deepseek-ai/deepseek-coder-6.7b-instruct",description:"High-performance generation",maxTokens:2048,temperature:.7},"wizardcoder-7b":{name:"WizardCoder 7B",model:"WizardLM/WizardCoder-15B-V1.0",description:"Great at following instructions",maxTokens:2048,temperature:.7},"phi3-mini":{name:"Phi-3 Mini",model:"microsoft/Phi-3-mini-4k-instruct",description:"Lightweight but powerful",maxTokens:2048,temperature:.7},"llama3-8b":{name:"Llama 3 8B",model:"meta-llama/Llama-3-8B-Instruct",description:"General purpose model",maxTokens:2048,temperature:.7},"mistral-7b":{name:"Mistral 7B",model:"mistralai/Mistral-7B-Instruct-v0.1",description:"Fast and efficient coding assistant",maxTokens:2048,temperature:.7},"gemma-7b":{name:"Gemma 7B",model:"google/gemma-7b-it",description:"Google's lightweight model",maxTokens:2048,temperature:.7},"qwen-7b":{name:"Qwen 7B",model:"Qwen/Qwen-7B-Chat",description:"Alibaba's coding model",maxTokens:2048,temperature:.7}},console.log("☁️ Cloud AI Service initialized with open source models!")}getAvailableModels(){return Object.values(this.availableModels)}getHealthyModels(){return Object.keys(this.availableModels)}async generateCode(e,r={}){console.log("🚀 Generating code with Cloud AI...");try{if(r.isIncremental&&r.existingProject)return await this.generateIncrementalCode(e,r);const t=this.analyzeProjectContext(r);r.conversationContext&&(t.conversationHistory=r.conversationHistory||[],t.recentMessages=r.conversationContext.recentMessages||[],t.projectContext=r.conversationContext),console.log("🧠 Enhanced context analysis:",t);const a=await this.generateContextAwareCode(e,t),n=this.generateAppName(e),o=this.generatePreviewData(a,n);return console.log("✅ Code generated successfully!"),console.log("🏷️ App name:",n),console.log("👁️ Preview data generated"),console.log("📁 Generated files:",Object.keys(a)),console.log("📄 File contents preview:",Object.entries(a).map(([s,i])=>({name:s,length:i.length,preview:i.substring(0,100)}))),{files:a,appName:n,prompt:e,generatedAt:new Date().toISOString(),preview:o,context:t,iterations:[],dependencies:this.extractDependencies(a),buildInstructions:this.generateBuildInstructions(a)}}catch(t){console.error("❌ Code generation failed:",t);const a=await this.createFallbackResponse(e,r),n=this.generateAppName(e);return{files:a,appName:n,prompt:e,generatedAt:new Date().toISOString(),preview:this.generatePreviewData(a,n),context:this.analyzeProjectContext(r),iterations:[],dependencies:this.extractDependencies(a),buildInstructions:this.generateBuildInstructions(a)}}}async generateIncrementalCode(e,r){console.log("🔄 Generating incremental code...");try{await I.initializeProject(r.existingProject);const t=await I.processFeatureRequest(e,r);if(t.type==="no_new_features")return{type:"no_changes",message:t.message,existingFeatures:t.existingFeatures,files:r.existingProject.files||{}};if(t.type==="incremental_update"){const a={...r.existingProject.files,...t.code};return{type:"incremental_update",files:a,newFeatures:t.newFeatures,updatedFiles:t.updatedFiles,message:t.message,appName:r.existingProject.name||"Updated App",prompt:e,generatedAt:new Date().toISOString(),preview:this.generatePreviewData(a,r.existingProject.name),context:this.analyzeProjectContext(r),iterations:I.featureHistory,dependencies:this.extractDependencies(a),buildInstructions:this.generateBuildInstructions(a)}}}catch(t){throw console.error("❌ Incremental code generation failed:",t),t}}analyzeProjectContext(e){return{projectType:this.detectProjectType(e),existingFiles:e.previousFiles||[],dependencies:this.analyzeDependencies(e),codingStandards:this.detectCodingStandards(e),architecture:this.detectArchitecture(e),frameworks:this.detectFrameworks(e),userPreferences:this.extractUserPreferences(e),environment:this.detectEnvironment(e)}}async generateContextAwareCode(e,r){console.log("🧠 Context-aware generation:",r);const t=this.analyzeUserRequest(e),a=await this.generateSpecificCode(e,t),n=this.enhanceWithContext(a,r);return console.log("🔧 Enhanced code generated with context awareness"),n}generatePreviewData(e,r){return{title:r,description:`A ${r} application generated by DreamBuild AI`,features:this.extractFeatures(e),screenshots:this.generateScreenshots(e),liveDemo:this.generateLiveDemo(e),techStack:this.extractTechStack(e),deployment:this.generateDeploymentInfo(e)}}extractDependencies(e){const r=new Set;return Object.values(e).forEach(t=>{(t.includes("React")||t.includes("react"))&&(r.add("react"),r.add("react-dom")),(t.includes("Vue")||t.includes("vue"))&&r.add("vue"),(t.includes("Angular")||t.includes("angular"))&&r.add("@angular/core"),(t.includes("express")||t.includes("node"))&&r.add("express"),(t.includes("tailwind")||t.includes("bootstrap"))&&r.add("tailwindcss")}),Array.from(r)}generateBuildInstructions(e){const r=Object.values(e).some(a=>a.includes("React")||a.includes("react")),t=Object.values(e).some(a=>a.includes("express")||a.includes("node"));return r?{install:"npm install",start:"npm start",build:"npm run build",dev:"npm run dev"}:t?{install:"npm install",start:"node server.js",dev:"nodemon server.js"}:{install:"No dependencies required",start:"Open index.html in browser",build:"No build process required"}}generateIntelligentCode(e,r={}){console.log("🧠 Analyzing prompt:",e);const t=this.analyzeUserRequest(e);return console.log("📋 Analysis result:",t),this.generateSpecificCode(e,t)}analyzeUserRequest(e){const t=(typeof e=="string"?e:JSON.stringify(e)).toLowerCase();return{hasButton:t.includes("button")||t.includes("click"),hasForm:t.includes("form")||t.includes("input")||t.includes("submit"),hasCalculator:t.includes("calculator")||t.includes("calculate")||t.includes("math"),hasColorChange:t.includes("color")||t.includes("change color"),hasCounter:t.includes("counter")||t.includes("count")||t.includes("increment"),hasTodo:t.includes("todo")||t.includes("task")||t.includes("list"),hasGame:t.includes("game")||t.includes("play")||t.includes("guess"),hasAnimation:t.includes("animation")||t.includes("animate")||t.includes("spinning"),hasAPI:t.includes("api")||t.includes("fetch")||t.includes("request"),wantsReact:t.includes("react")||t.includes("component"),wantsVue:t.includes("vue"),wantsAngular:t.includes("angular"),wantsPython:t.includes("python")||t.includes("flask")||t.includes("django"),wantsNode:t.includes("node")||t.includes("express"),wantsDatabase:t.includes("database")||t.includes("store")||t.includes("save"),wantsAuth:t.includes("login")||t.includes("auth")||t.includes("user"),wantsResponsive:t.includes("responsive")||t.includes("mobile"),wantsStyling:t.includes("css")||t.includes("style")||t.includes("design"),specificFeature:this.extractSpecificFeature(e),appName:this.extractAppName(e),targetLanguage:this.detectTargetLanguage(e)}}extractSpecificFeature(e){const t=(typeof e=="string"?e:JSON.stringify(e)).toLowerCase();return t.includes("factorial")?"factorial":t.includes("fibonacci")?"fibonacci":t.includes("prime")?"prime":t.includes("sort")?"sort":t.includes("search")?"search":t.includes("timer")?"timer":t.includes("clock")?"clock":t.includes("weather")?"weather":t.includes("chat")?"chat":t.includes("quiz")?"quiz":null}detectTargetLanguage(e){const t=(typeof e=="string"?e:JSON.stringify(e)).toLowerCase();return t.includes("python")?"python":t.includes("javascript")||t.includes("js")?"javascript":t.includes("react")?"react":t.includes("vue")?"vue":t.includes("angular")?"angular":t.includes("html")?"html":t.includes("css")?"css":"html"}async generateSpecificCode(e,r){console.log("🎯 Generating specific code for:",r.specificFeature||"general app");try{const a=`${this.createSystemPrompt({projectType:"web",existingFiles:[],dependencies:[],architecture:"monolithic",frameworks:["html","css","javascript"]})}

User Request: ${e}

Generate a complete, working application with all the features requested. Return the code as a JSON object with files.`,n=this.selectBestModel(e,{}),o=this.availableModels[n]?.model||"codellama/CodeLlama-7b-Python-hf";console.log("🤖 Using AI model:",o),console.log("📝 Full prompt:",a);const s=await this.callHuggingFaceAPI(o,a,2048,.7);console.log("🤖 AI Response received:",s);const i=await this.parseAIResponse(s,e);return i&&Object.keys(i).length>0?(console.log("✅ AI generated code successfully"),i):(console.log("⚠️ AI response was empty, using fallback"),await this.createFallbackResponse(e,{}))}catch(t){return console.error("❌ AI code generation failed:",t),console.log("🔄 Falling back to template generation..."),r.hasTodo?this.createTodoTemplate(e):r.hasAPI?this.createAPITemplate(e):r.specificFeature==="weather"?this.generateWeatherApp(e):this.createDefaultTemplate(e)}}selectBestModel(e,r){const a=(typeof e=="string"?e:JSON.stringify(e)).toLowerCase();return a.includes("python")||a.includes("django")||a.includes("flask")?"codellama-7b":a.includes("javascript")||a.includes("react")||a.includes("node")?"starcoder-15b":a.includes("java")||a.includes("spring")?"deepseek-coder":a.includes("c++")||a.includes("cpp")||a.includes("rust")?"codellama-13b":a.includes("web")||a.includes("html")||a.includes("css")?"wizardcoder-7b":"codellama-7b"}async callHuggingFaceAPI(e,r,t,a){return(await k.post(`${this.baseURL}/${e}`,{inputs:r,parameters:{max_new_tokens:t,temperature:a,return_full_text:!1,do_sample:!0}},{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},timeout:3e4})).data}createSystemPrompt(e={}){const r=e.conversationHistory?.length>0?`

Conversation Context:
- Previous messages: ${e.conversationHistory.length} messages
- Recent conversation: ${e.recentMessages?.slice(-3).map(t=>`${t.type}: ${t.content}`).join(`
`)||"none"}
- Project context: ${JSON.stringify(e.projectContext||{})}`:"";return`You are an expert software developer and code generator with advanced conversation capabilities. Generate complete, working applications based on user requests and maintain context across conversations.

Guidelines:
1. Always generate complete, runnable code
2. Include all necessary files (HTML, CSS, JS, etc.)
3. Use modern best practices
4. Make the code clean and well-commented
5. Ensure the application is functional and user-friendly
6. Maintain conversation context and remember previous requests
7. Handle corrections and improvements intelligently
8. Provide incremental updates when requested
9. Suggest additional features based on context

Context:
- Project Type: ${e.projectType||"web"}
- Existing Files: ${e.existingFiles?.length||0} files
- Dependencies: ${e.dependencies?.join(", ")||"none"}
- Architecture: ${e.architecture||"monolithic"}
- Frameworks: ${e.frameworks?.join(", ")||"vanilla"}${r}

Return your response as a JSON object with this structure:
{
  "files": {
    "filename1.ext": "file content here",
    "filename2.ext": "file content here"
  },
  "description": "Brief description of what was generated",
  "instructions": "How to run or use the generated code",
  "message": "Conversational response to the user",
  "suggestions": ["Additional feature suggestions based on context"]
}

Generate practical, working applications that users can immediately use. If this is a correction or improvement request, modify the existing code appropriately while maintaining functionality.`}async parseAIResponse(e,r){try{let t="";Array.isArray(e)&&e.length>0?t=e[0].generated_text||e[0].text||"":e.generated_text?t=e.generated_text:e.text?t=e.text:t=JSON.stringify(e);const a=t.match(/\{[\s\S]*\}/);if(a){const n=JSON.parse(a[0]);if(n.files)return n.files}return await this.createFallbackResponse(r,{})}catch(t){return console.error("❌ Failed to parse AI response:",t),await this.createFallbackResponse(r,{})}}generateWebApp(e){const r=this.extractAppName(e)||"Web App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${r}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${r}</h1>
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
}`,"script.js":`// ${r} - Generated by DreamBuild AI
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
  "name": "${r.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateReactApp(e){const r=this.extractAppName(e)||"React App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${r}</title>
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

function ${r.replace(/\s+/g,"")}() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello from React!');

  const handleClick = () => {
    setCount(count + 1);
    setMessage(\`Button clicked \${count + 1} times!\`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>${r}</h1>
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

ReactDOM.render(<${r.replace(/\s+/g,"")} />, document.getElementById('root'));`,"styles.css":`* {
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
  "name": "${r.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateJavaScriptApp(e){const r=this.extractAppName(e)||"JavaScript App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${r}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${r}</h1>
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
</html>`,"script.js":`// ${r} - Generated by DreamBuild AI
class ${r.replace(/\s+/g,"")} {
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
        this.result.className = 'result ' + type;
        
        // Clear input
        this.input.value = '';
        this.input.focus();
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new ${r.replace(/\s+/g,"")}();
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
  "name": "${r.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateSpecificFeature(e,r){switch(console.log("🎯 Generating specific feature:",r),r){case"factorial":return this.generateFactorialApp(e);case"fibonacci":return this.generateFibonacciApp(e);case"prime":return this.generatePrimeApp(e);case"sort":return this.generateSortApp(e);case"search":return this.generateSearchApp(e);case"timer":return this.generateTimerApp(e);case"clock":return this.generateClockApp(e);case"weather":return this.generateWeatherApp(e);case"chat":return this.generateChatApp(e);case"quiz":return this.generateQuizApp(e);default:return this.generateWebApp(e)}}generateFactorialApp(e){const r=this.extractAppName(e)||"Factorial Calculator";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${r}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${r}</h1>
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
</html>`,"script.js":`// ${r} - Generated by DreamBuild AI
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
        this.result.className = 'result ' + type;
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
  "name": "${r.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateFibonacciApp(e){const r=this.extractAppName(e)||"Fibonacci Calculator";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${r}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${r}</h1>
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
</html>`,"script.js":`// ${r} - Generated by DreamBuild AI
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
        this.result.className = 'result ' + type;
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
  "name": "${r.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateWeatherApp(e){const r=this.extractAppName(e)||"Weather App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${r}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${r}</h1>
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
</html>`,"script.js":`// ${r} - Generated by DreamBuild AI
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
  "name": "${r.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}detectProjectType(e){const r=e.previousFiles||[];return r.some(t=>t.includes("package.json"))?"node":r.some(t=>t.includes(".jsx")||t.includes(".tsx"))?"react":r.some(t=>t.includes(".vue"))?"vue":(r.some(t=>t.includes(".html")),"web")}analyzeDependencies(e){return e.dependencies||[]}detectCodingStandards(e){return{indentation:"2 spaces",quotes:"single",semicolons:!0,trailingCommas:!0}}detectArchitecture(e){const r=e.previousFiles||[];return r.some(t=>t.includes("components"))?"component-based":r.some(t=>t.includes("pages"))?"page-based":"monolithic"}detectFrameworks(e){const r=[],t=e.previousFiles||[];return t.some(a=>a.includes("react"))&&r.push("react"),t.some(a=>a.includes("vue"))&&r.push("vue"),t.some(a=>a.includes("angular"))&&r.push("angular"),t.some(a=>a.includes("express"))&&r.push("express"),r}extractUserPreferences(e){return{preferredFramework:"react",styling:"tailwind",stateManagement:"hooks",testing:"jest"}}detectEnvironment(e){return{nodeVersion:"18+",packageManager:"npm",bundler:"vite",deployment:"firebase"}}enhanceWithContext(e,r){console.log("🔧 Enhancing code with context:",r);const t={...e};return Object.keys(t).forEach(a=>{if(a.endsWith(".js")||a.endsWith(".jsx")){const n=t[a],o=`// Generated by DreamBuild AI with context awareness
// Project Type: ${r.projectType||"web"}
// Architecture: ${r.architecture||"monolithic"}
// Frameworks: ${r.frameworks?.join(", ")||"vanilla"}
// Environment: ${r.environment?.nodeVersion||"18+"}

${n}`;t[a]=o}}),console.log("✅ Code enhanced with context awareness"),t}extractFeatures(e){const r=[],t=Object.values(e).join(" ").toLowerCase();return console.log("🔍 Extracting features from generated code..."),(t.includes("addeventlistener")||t.includes("onclick")||t.includes("onchange"))&&r.push("Interactive Elements"),(t.includes("localstorage")||t.includes("sessionstorage")||t.includes("indexeddb"))&&r.push("Data Persistence"),(t.includes("fetch")||t.includes("axios")||t.includes("xhr")||t.includes("api"))&&r.push("API Integration"),(t.includes("responsive")||t.includes("mobile")||t.includes("media query")||t.includes("@media"))&&r.push("Responsive Design"),(t.includes("animation")||t.includes("transition")||t.includes("transform")||t.includes("keyframes"))&&r.push("Animations"),(t.includes("form")||t.includes("input")||t.includes("textarea")||t.includes("select"))&&r.push("Form Handling"),(t.includes("login")||t.includes("auth")||t.includes("password")||t.includes("token"))&&r.push("Authentication"),(t.includes("websocket")||t.includes("socket")||t.includes("realtime")||t.includes("live"))&&r.push("Real-time Updates"),(t.includes("file")||t.includes("upload")||t.includes("download")||t.includes("blob"))&&r.push("File Handling"),r.length===0&&r.push("Modern UI","Interactive Elements","Responsive Design"),console.log("✅ Features extracted:",r),r}generateScreenshots(e){return["https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=App+Preview+1","https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=App+Preview+2"]}generateLiveDemo(e){return"https://dreambuild-2024-app.web.app/preview"}extractTechStack(e){const r=[],t=Object.values(e).join(" ").toLowerCase();return console.log("🔍 Extracting tech stack from generated code..."),(t.includes("react")||t.includes("jsx"))&&r.push("React"),(t.includes("vue")||t.includes("vue.js"))&&r.push("Vue.js"),t.includes("angular")&&r.push("Angular"),t.includes("svelte")&&r.push("Svelte"),(t.includes("express")||t.includes("node"))&&r.push("Node.js"),(t.includes("django")||t.includes("flask"))&&r.push("Python"),(t.includes("spring")||t.includes("java"))&&r.push("Java"),t.includes("html")&&r.push("HTML5"),t.includes("css")&&r.push("CSS3"),(t.includes("javascript")||t.includes("js"))&&r.push("JavaScript"),(t.includes("typescript")||t.includes("ts"))&&r.push("TypeScript"),(t.includes("tailwind")||t.includes("tailwindcss"))&&r.push("Tailwind CSS"),t.includes("bootstrap")&&r.push("Bootstrap"),(t.includes("material")||t.includes("mui"))&&r.push("Material-UI"),(t.includes("mongodb")||t.includes("mongo"))&&r.push("MongoDB"),(t.includes("mysql")||t.includes("sql"))&&r.push("SQL"),t.includes("firebase")&&r.push("Firebase"),r.length===0&&r.push("HTML5","CSS3","JavaScript"),console.log("✅ Tech stack extracted:",r),r}generateDeploymentInfo(e){return{platform:"Firebase Hosting",url:"https://dreambuild-2024-app.web.app",status:"Ready to deploy",instructions:"Click deploy to publish your app"}}extractAppName(e){const t=(typeof e=="string"?e:JSON.stringify(e)).split(" "),a=t.findIndex(n=>n.toLowerCase().includes("app")||n.toLowerCase().includes("application")||n.toLowerCase().includes("website")||n.toLowerCase().includes("page"));return a>0?t.slice(0,a).join(" "):null}generateAppName(e){const r=typeof e=="string"?e:JSON.stringify(e),t=r.toLowerCase(),a=r.split(" ").filter(o=>o.length>3&&!["create","build","make","generate","app","application","website","page"].includes(o.toLowerCase()));if(t.includes("weather"))return"WeatherCast Pro";if(t.includes("calculator"))return"CalcMaster";if(t.includes("todo")||t.includes("task"))return"TaskFlow";if(t.includes("game"))return"GameZone";if(t.includes("chat"))return"ChatConnect";if(t.includes("dashboard"))return"DashBoard Pro";if(t.includes("ecommerce")||t.includes("store"))return"ShopMaster";if(t.includes("blog"))return"BlogCraft";if(t.includes("portfolio"))return"Portfolio Pro";if(t.includes("social"))return"SocialConnect";if(t.includes("music"))return"MusicHub";if(t.includes("photo")||t.includes("image"))return"PhotoGallery";if(t.includes("news"))return"NewsReader";if(t.includes("recipe"))return"RecipeBook";if(t.includes("fitness")||t.includes("workout"))return"FitTracker";if(t.includes("finance")||t.includes("budget"))return"FinanceTracker";if(t.includes("education")||t.includes("learn"))return"LearnHub";if(t.includes("travel"))return"TravelGuide";if(t.includes("food")||t.includes("restaurant"))return"FoodFinder";if(t.includes("book")||t.includes("library"))return"BookShelf";if(t.includes("calendar")||t.includes("schedule"))return"SchedulePro";if(a.length>0){const o=a[0].charAt(0).toUpperCase()+a[0].slice(1),s=a.length>1?a[1].charAt(0).toUpperCase()+a[1].slice(1):"App";return`${o}${s}`}const n=["DreamApp","InnovateHub","CreativeSpace","TechFlow","SmartApp","NextGen","FutureApp","ProApp","EliteApp","MasterApp","UltimateApp","PrimeApp","SuperApp","MegaApp","TurboApp"];return n[Math.floor(Math.random()*n.length)]}async createFallbackResponse(e,r={}){console.log("🔄 Creating AI-generated fallback response for prompt:",e);try{const n=`Create a complete web application based on this request: ${e}. 
      
      Generate HTML, CSS, and JavaScript files that implement the requested features. 
      Return the code as a JSON object with this structure:
      {
        "files": {
          "index.html": "HTML content here",
          "styles.css": "CSS content here", 
          "script.js": "JavaScript content here"
        }
      }
      
      Make sure the application is fully functional and includes all requested features.`,o="codellama/CodeLlama-7b-Python-hf";console.log("🤖 Fallback: Using AI model:",o);const s=await this.callHuggingFaceAPI(o,n,1500,.5);console.log("🤖 Fallback AI Response received:",s);const i=await this.parseAIResponse(s,e);if(i&&Object.keys(i).length>0)return console.log("✅ Fallback AI generated code successfully"),i}catch(n){console.error("❌ Fallback AI generation failed:",n)}console.log("⚠️ Using template as absolute last resort");const a=(typeof e=="string"?e:JSON.stringify(e)).toLowerCase();return a.includes("todo")||a.includes("task")?this.createTodoTemplate(e):a.includes("dashboard")||a.includes("analytics")?this.createDashboardTemplate(e):a.includes("ecommerce")||a.includes("store")||a.includes("shop")?this.createEcommerceTemplate(e):a.includes("api")||a.includes("backend")?this.createAPITemplate(e):this.createDefaultTemplate(e)}createDashboardTemplate(e){return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analytics Dashboard</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #f5f7fa;
        color: #333;
      }

      .dashboard {
        min-height: 100vh;
        padding: 2rem;
      }

      .dashboard-header {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
        text-align: center;
      }

      .dashboard-header h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: #2c3e50;
      }

      .dashboard-header p {
        color: #7f8c8d;
        font-size: 1.1rem;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .stat-card {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        transition: transform 0.3s;
      }

      .stat-card:hover {
        transform: translateY(-4px);
      }

      .stat-card h3 {
        color: #7f8c8d;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 0.5rem;
      }

      .stat-number {
        font-size: 2.5rem;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 0.5rem;
      }

      .stat-change {
        font-size: 0.9rem;
        color: #27ae60;
      }

      .controls {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
        text-align: center;
      }

      .controls h2 {
        margin-bottom: 1rem;
        color: #2c3e50;
      }

      .button-group {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      button {
        background: #3498db;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s;
        margin: 0.25rem;
      }

      button:hover {
        background: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
      }

      button:active {
        transform: translateY(0);
      }

      .refresh-btn {
        background: #27ae60;
      }

      .refresh-btn:hover {
        background: #229954;
      }

      .export-btn {
        background: #e74c3c;
      }

      .export-btn:hover {
        background: #c0392b;
      }

      .chart-container {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        text-align: center;
      }

      .chart-placeholder {
        height: 300px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        margin: 1rem 0;
      }

      .alert {
        background: #d4edda;
        color: #155724;
        padding: 1rem;
        border-radius: 4px;
        margin: 1rem 0;
        border: 1px solid #c3e6cb;
      }

      .alert.hidden {
        display: none;
      }
    </style>
</head>
<body>
    <div class="dashboard">
        <div class="dashboard-header">
            <h1>Analytics Dashboard</h1>
            <p>Welcome to your business dashboard</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <h3>Total Users</h3>
                <p class="stat-number" id="users">1,250</p>
                <p class="stat-change">+12.5% from last month</p>
            </div>
            <div class="stat-card">
                <h3>Revenue</h3>
                <p class="stat-number" id="revenue">$45,230</p>
                <p class="stat-change">+8.2% from last month</p>
            </div>
            <div class="stat-card">
                <h3>Orders</h3>
                <p class="stat-number" id="orders">89</p>
                <p class="stat-change">+15.3% from last month</p>
            </div>
            <div class="stat-card">
                <h3>Growth</h3>
                <p class="stat-number" id="growth">+12.5%</p>
                <p class="stat-change">+2.1% from last month</p>
            </div>
        </div>

        <div class="controls">
            <h2>Dashboard Controls</h2>
            <div class="button-group">
                <button id="refreshDataBtn">Refresh Data</button>
                <button class="refresh-btn" id="updateStatsBtn">Update Stats</button>
                <button class="export-btn" id="exportDataBtn">Export Data</button>
                <button id="showAlertBtn">Show Alert</button>
            </div>
            <div class="alert hidden" id="alert">
                Dashboard updated successfully!
            </div>
        </div>

        <div class="chart-container">
            <h2>Analytics Chart</h2>
            <div class="chart-placeholder">
                Interactive Chart Area
            </div>
            <button id="generateChartBtn">Generate New Chart</button>
        </div>
    </div>

    <script>
        let stats = {
            users: 1250,
            revenue: 45230,
            orders: 89,
            growth: 12.5
        };

        function initDashboard() {
            console.log('Dashboard initializing...');
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('users').textContent = stats.users.toLocaleString();
            document.getElementById('revenue').textContent = '$' + stats.revenue.toLocaleString();
            document.getElementById('orders').textContent = stats.orders;
            document.getElementById('growth').textContent = '+' + stats.growth + '%';
        }

        function refreshData() {
            console.log('Refreshing data...');
            // Simulate data refresh
            stats.users += Math.floor(Math.random() * 10);
            stats.revenue += Math.floor(Math.random() * 1000);
            stats.orders += Math.floor(Math.random() * 5);
            stats.growth += (Math.random() - 0.5) * 2;
            
            updateDisplay();
            showAlert('Data refreshed successfully!');
        }

        function updateStats() {
            console.log('Updating stats...');
            // Simulate API call
            setTimeout(() => {
                stats.users = 1250 + Math.floor(Math.random() * 100);
                stats.revenue = 45230 + Math.floor(Math.random() * 5000);
                stats.orders = 89 + Math.floor(Math.random() * 20);
                stats.growth = 12.5 + (Math.random() - 0.5) * 5;
                
                updateDisplay();
                showAlert('Stats updated successfully!');
            }, 1000);
        }

        function exportData() {
            console.log('Exporting data...');
            const data = {
                timestamp: new Date().toISOString(),
                stats: stats
            };
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'dashboard-data.json';
            a.click();
            URL.revokeObjectURL(url);
            
            showAlert('Data exported successfully!');
        }

        function showAlert(message = 'Dashboard updated successfully!') {
            const alert = document.getElementById('alert');
            alert.textContent = message;
            alert.classList.remove('hidden');
            
            setTimeout(() => {
                alert.classList.add('hidden');
            }, 3000);
        }

        function generateChart() {
            console.log('Generating new chart...');
            const chartPlaceholder = document.querySelector('.chart-placeholder');
            chartPlaceholder.innerHTML = 'Chart generated at ' + new Date().toLocaleTimeString();
            showAlert('New chart generated!');
        }

        // Initialize the dashboard with proper event listeners
        function initDashboardWithEvents() {
            console.log('Dashboard initializing with event listeners...');
            
            // Get button elements
            const refreshBtn = document.getElementById('refreshDataBtn');
            const updateBtn = document.getElementById('updateStatsBtn');
            const exportBtn = document.getElementById('exportDataBtn');
            const alertBtn = document.getElementById('showAlertBtn');
            const chartBtn = document.getElementById('generateChartBtn');
            
            // Add event listeners
            if (refreshBtn) {
                refreshBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    refreshData();
                });
                console.log('Refresh button listener added');
            }
            
            if (updateBtn) {
                updateBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    updateStats();
                });
                console.log('Update button listener added');
            }
            
            if (exportBtn) {
                exportBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    exportData();
                });
                console.log('Export button listener added');
            }
            
            if (alertBtn) {
                alertBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    showAlert();
                });
                console.log('Alert button listener added');
            }
            
            if (chartBtn) {
                chartBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    generateChart();
                });
                console.log('Chart button listener added');
            }
            
            // Initialize dashboard
            initDashboard();
            console.log('Dashboard initialized successfully!');
        }

        // Multiple initialization methods for maximum compatibility
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initDashboardWithEvents);
        } else {
            initDashboardWithEvents();
        }
        
        // Also try on window load as fallback
        window.addEventListener('load', initDashboardWithEvents);
    <\/script>
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
    <title>Advanced Todo App - 10 Features</title>
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
        padding: 1rem;
      }

      .todo-app {
        max-width: 800px;
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

      .stats {
        display: flex;
        justify-content: space-around;
        margin-bottom: 2rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 8px;
      }

      .stat {
        text-align: center;
      }

      .stat-number {
        font-size: 1.5rem;
        font-weight: bold;
        color: #667eea;
      }

      .stat-label {
        font-size: 0.9rem;
        color: #6c757d;
      }

      .input-container {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
      }

      input[type="text"] {
        flex: 1;
        min-width: 200px;
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

      input[type="date"] {
        padding: 1rem;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.3s;
      }

      select {
        padding: 1rem;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        background: white;
        cursor: pointer;
      }

      button {
        padding: 1rem 1.5rem;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s;
        font-weight: 500;
        white-space: nowrap;
      }

      button:hover {
        background: #5a6fd8;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
      }

      button:active {
        transform: translateY(0);
      }

      .secondary-btn {
        background: #6c757d;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .secondary-btn:hover {
        background: #5a6268;
      }

      .danger-btn {
        background: #dc3545;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .danger-btn:hover {
        background: #c82333;
      }

      .success-btn {
        background: #28a745;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }

      .success-btn:hover {
        background: #218838;
      }

      .controls {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
        align-items: center;
      }

      .search-container {
        flex: 1;
        min-width: 200px;
      }

      .search-container input {
        width: 100%;
        margin-bottom: 0;
      }

      .todos {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 2rem;
      }

      .todo-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 8px;
        transition: all 0.3s;
        border-left: 4px solid #e9ecef;
      }

      .todo-item:hover {
        background: #e9ecef;
        transform: translateX(4px);
      }

      .todo-item.completed {
        opacity: 0.7;
        border-left-color: #28a745;
      }

      .todo-item.high-priority {
        border-left-color: #dc3545;
      }

      .todo-item.medium-priority {
        border-left-color: #ffc107;
      }

      .todo-item.low-priority {
        border-left-color: #17a2b8;
      }

      .todo-item.completed .todo-text {
        text-decoration: line-through;
        color: #6c757d;
      }

      .todo-text {
        flex: 1;
        cursor: pointer;
        font-size: 1.1rem;
        word-break: break-word;
      }

      .todo-meta {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.8rem;
        color: #6c757d;
        min-width: 120px;
      }

      .todo-actions {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .no-todos {
        text-align: center;
        color: #6c757d;
        font-style: italic;
        margin: 2rem 0;
        padding: 2rem;
        background: #f8f9fa;
        border-radius: 8px;
      }

      .filter-active {
        background: #667eea !important;
        color: white !important;
      }

      .priority-badge {
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
      }

      .priority-high {
        background: #dc3545;
        color: white;
      }

      .priority-medium {
        background: #ffc107;
        color: #212529;
      }

      .priority-low {
        background: #17a2b8;
        color: white;
      }

      .due-date {
        font-size: 0.8rem;
        color: #6c757d;
      }

      .due-date.overdue {
        color: #dc3545;
        font-weight: bold;
      }

      .due-date.due-today {
        color: #ffc107;
        font-weight: bold;
      }

      @media (max-width: 768px) {
        .todo-app {
          padding: 1rem;
        }
        
        .input-container {
          flex-direction: column;
        }
        
        .controls {
          flex-direction: column;
          align-items: stretch;
        }
        
        .todo-item {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
        }
        
        .todo-actions {
          width: 100%;
          justify-content: space-between;
        }
      }
    </style>
</head>
<body>
    <div class="todo-app">
        <h1>🚀 Advanced Todo App</h1>
        <p style="text-align: center; color: #6c757d; margin-bottom: 2rem;">10 Powerful Features for Maximum Productivity</p>
        
        <!-- Stats Dashboard -->
        <div class="stats">
            <div class="stat">
                <div class="stat-number" id="totalTodos">0</div>
                <div class="stat-label">Total</div>
            </div>
            <div class="stat">
                <div class="stat-number" id="activeTodos">0</div>
                <div class="stat-label">Active</div>
            </div>
            <div class="stat">
                <div class="stat-number" id="completedTodos">0</div>
                <div class="stat-label">Completed</div>
            </div>
            <div class="stat">
                <div class="stat-number" id="overdueTodos">0</div>
                <div class="stat-label">Overdue</div>
            </div>
        </div>
        
        <!-- Input Form -->
        <div class="input-container">
            <input type="text" id="todoInput" placeholder="Add a new todo..." />
            <input type="date" id="dueDate" />
            <select id="priority">
                <option value="low">Low Priority</option>
                <option value="medium" selected>Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
            <button id="addBtn">Add Todo</button>
        </div>
        
        <!-- Controls -->
        <div class="controls">
            <div class="search-container">
                <input type="text" id="searchInput" placeholder="Search todos..." />
            </div>
            <button id="filterAll" class="secondary-btn filter-active">All</button>
            <button id="filterActive" class="secondary-btn">Active</button>
            <button id="filterCompleted" class="secondary-btn">Completed</button>
            <button id="sortBtn" class="secondary-btn">Sort by Date</button>
            <button id="clearCompleted" class="danger-btn">Clear Completed</button>
        </div>
        
        <!-- Todos List -->
        <div class="todos" id="todos"></div>
        
        <p class="no-todos" id="noTodos" style="display: none;">No todos yet. Add one above to get started! 🎯</p>
    </div>

    <script>
        // Global variables
        let todos = [];
        let nextId = 1;
        let currentFilter = 'all';
        let sortBy = 'date';

        // Initialize the app
        function initApp() {
            console.log('Advanced Todo app initializing...');
            loadTodos();
            setupEventListeners();
            renderTodos();
            updateStats();
        }

        function setupEventListeners() {
            // Add todo
            const input = document.getElementById('todoInput');
            const addBtn = document.getElementById('addBtn');
            
            if (input) {
                input.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        addTodo();
                    }
                });
            }
            
            if (addBtn) {
                addBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    addTodo();
                });
            }

            // Search
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.addEventListener('input', function() {
                    renderTodos();
                });
            }

            // Filters
            document.getElementById('filterAll').addEventListener('click', () => setFilter('all'));
            document.getElementById('filterActive').addEventListener('click', () => setFilter('active'));
            document.getElementById('filterCompleted').addEventListener('click', () => setFilter('completed'));

            // Sort
            document.getElementById('sortBtn').addEventListener('click', toggleSort);

            // Clear completed
            document.getElementById('clearCompleted').addEventListener('click', clearCompleted);
        }

        function addTodo() {
            const input = document.getElementById('todoInput');
            const dueDate = document.getElementById('dueDate');
            const priority = document.getElementById('priority');
            
            if (!input) return;
            
            const text = input.value.trim();
            if (!text) return;
            
            const newTodo = {
                id: nextId++,
                text: text,
                completed: false,
                priority: priority.value,
                dueDate: dueDate.value || null,
                createdAt: new Date().toISOString(),
                completedAt: null
            };
            
            todos.push(newTodo);
            input.value = '';
            dueDate.value = '';
            priority.value = 'medium';
            
            saveTodos();
            renderTodos();
            updateStats();
            
            console.log('Todo added:', newTodo);
        }

        function toggleTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? new Date().toISOString() : null;
                saveTodos();
                renderTodos();
                updateStats();
                console.log('Todo toggled:', todo);
            }
        }

        function deleteTodo(id) {
            todos = todos.filter(t => t.id !== id);
            saveTodos();
            renderTodos();
            updateStats();
            console.log('Todo deleted');
        }

        function editTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (!todo) return;
            
            const newText = prompt('Edit todo:', todo.text);
            if (newText && newText.trim() !== todo.text) {
                todo.text = newText.trim();
                saveTodos();
                renderTodos();
                console.log('Todo edited:', todo);
            }
        }

        function setFilter(filter) {
            currentFilter = filter;
            
            // Update filter buttons
            document.querySelectorAll('.filter-active').forEach(btn => {
                btn.classList.remove('filter-active');
            });
            document.getElementById('filter' + filter.charAt(0).toUpperCase() + filter.slice(1)).classList.add('filter-active');
            
            renderTodos();
        }

        function toggleSort() {
            sortBy = sortBy === 'date' ? 'priority' : 'date';
            document.getElementById('sortBtn').textContent = sortBy === 'date' ? 'Sort by Priority' : 'Sort by Date';
            renderTodos();
        }

        function clearCompleted() {
            if (confirm('Are you sure you want to clear all completed todos?')) {
                todos = todos.filter(t => !t.completed);
                saveTodos();
                renderTodos();
                updateStats();
                console.log('Completed todos cleared');
            }
        }

        function getFilteredTodos() {
            let filtered = todos;
            
            // Apply search filter
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            if (searchTerm) {
                filtered = filtered.filter(todo => 
                    todo.text.toLowerCase().includes(searchTerm)
                );
            }
            
            // Apply status filter
            switch (currentFilter) {
                case 'active':
                    filtered = filtered.filter(todo => !todo.completed);
                    break;
                case 'completed':
                    filtered = filtered.filter(todo => todo.completed);
                    break;
            }
            
            // Apply sorting
            filtered.sort((a, b) => {
                if (sortBy === 'priority') {
                    const priorityOrder = { high: 3, medium: 2, low: 1 };
                    return priorityOrder[b.priority] - priorityOrder[a.priority];
                } else {
                    return new Date(a.createdAt) - new Date(b.createdAt);
                }
            });
            
            return filtered;
        }

        function renderTodos() {
            const container = document.getElementById('todos');
            const noTodos = document.getElementById('noTodos');
            
            if (!container) return;
            
            const filteredTodos = getFilteredTodos();
            container.innerHTML = '';
            
            if (filteredTodos.length === 0) {
                noTodos.style.display = 'block';
                return;
            }
            
            noTodos.style.display = 'none';
            
            filteredTodos.forEach(todo => {
                const todoElement = document.createElement('div');
                todoElement.className = 'todo-item ' + (todo.completed ? 'completed' : '') + ' ' + todo.priority + '-priority';
                
                const textSpan = document.createElement('span');
                textSpan.className = 'todo-text';
                textSpan.textContent = todo.text;
                textSpan.addEventListener('click', () => toggleTodo(todo.id));
                
                const metaDiv = document.createElement('div');
                metaDiv.className = 'todo-meta';
                
                const prioritySpan = document.createElement('span');
                prioritySpan.className = 'priority-badge priority-' + todo.priority;
                prioritySpan.textContent = todo.priority;
                
                const dueDateSpan = document.createElement('span');
                dueDateSpan.className = 'due-date';
                if (todo.dueDate) {
                    const dueDate = new Date(todo.dueDate);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    dueDate.setHours(0, 0, 0, 0);
                    
                    if (dueDate < today && !todo.completed) {
                        dueDateSpan.classList.add('overdue');
                        dueDateSpan.textContent = 'Overdue: ' + dueDate.toLocaleDateString();
                    } else if (dueDate.getTime() === today.getTime()) {
                        dueDateSpan.classList.add('due-today');
                        dueDateSpan.textContent = 'Due today';
                    } else {
                        dueDateSpan.textContent = 'Due: ' + dueDate.toLocaleDateString();
                    }
                } else {
                    dueDateSpan.textContent = 'No due date';
                }
                
                metaDiv.appendChild(prioritySpan);
                metaDiv.appendChild(dueDateSpan);
                
                const actionsDiv = document.createElement('div');
                actionsDiv.className = 'todo-actions';
                
                const editBtn = document.createElement('button');
                editBtn.className = 'secondary-btn';
                editBtn.textContent = 'Edit';
                editBtn.addEventListener('click', () => editTodo(todo.id));
                
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'danger-btn';
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
                
                actionsDiv.appendChild(editBtn);
                actionsDiv.appendChild(deleteBtn);
                
                todoElement.appendChild(textSpan);
                todoElement.appendChild(metaDiv);
                todoElement.appendChild(actionsDiv);
                container.appendChild(todoElement);
            });
        }

        function updateStats() {
            const total = todos.length;
            const active = todos.filter(t => !t.completed).length;
            const completed = todos.filter(t => t.completed).length;
            const overdue = todos.filter(t => {
                if (!t.dueDate || t.completed) return false;
                const dueDate = new Date(t.dueDate);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                dueDate.setHours(0, 0, 0, 0);
                return dueDate < today;
            }).length;
            
            document.getElementById('totalTodos').textContent = total;
            document.getElementById('activeTodos').textContent = active;
            document.getElementById('completedTodos').textContent = completed;
            document.getElementById('overdueTodos').textContent = overdue;
        }

        function saveTodos() {
            localStorage.setItem('advancedTodos', JSON.stringify(todos));
        }

        function loadTodos() {
            const saved = localStorage.getItem('advancedTodos');
            if (saved) {
                todos = JSON.parse(saved);
                nextId = Math.max(...todos.map(t => t.id), 0) + 1;
            }
        }

        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initApp);
        } else {
            initApp();
        }
    <\/script>
</body>
</html>`,"styles.css":`/* Advanced Todo App Styles */
.todo-app {
  max-width: 800px;
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

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
}

.stat-label {
  font-size: 0.9rem;
  color: #6c757d;
}

.input-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

input[type="text"] {
  flex: 1;
  min-width: 200px;
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

input[type="date"] {
  padding: 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

select {
  padding: 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  background: white;
  cursor: pointer;
}

button {
  padding: 1rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  white-space: nowrap;
}

button:hover {
  background: #5a6fd8;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

button:active {
  transform: translateY(0);
}

.secondary-btn {
  background: #6c757d;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.secondary-btn:hover {
  background: #5a6268;
}

.danger-btn {
  background: #dc3545;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.danger-btn:hover {
  background: #c82333;
}

.success-btn {
  background: #28a745;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.success-btn:hover {
  background: #218838;
}

.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  align-items: center;
}

.search-container {
  flex: 1;
  min-width: 200px;
}

.search-container input {
  width: 100%;
  margin-bottom: 0;
}

.todos {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s;
  border-left: 4px solid #e9ecef;
}

.todo-item:hover {
  background: #e9ecef;
  transform: translateX(4px);
}

.todo-item.completed {
  opacity: 0.7;
  border-left-color: #28a745;
}

.todo-item.high-priority {
  border-left-color: #dc3545;
}

.todo-item.medium-priority {
  border-left-color: #ffc107;
}

.todo-item.low-priority {
  border-left-color: #17a2b8;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #6c757d;
}

.todo-text {
  flex: 1;
  cursor: pointer;
  font-size: 1.1rem;
  word-break: break-word;
}

.todo-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: #6c757d;
  min-width: 120px;
}

.todo-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.no-todos {
  text-align: center;
  color: #6c757d;
  font-style: italic;
  margin: 2rem 0;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.filter-active {
  background: #667eea !important;
  color: white !important;
}

.priority-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
}

.priority-high {
  background: #dc3545;
  color: white;
}

.priority-medium {
  background: #ffc107;
  color: #212529;
}

.priority-low {
  background: #17a2b8;
  color: white;
}

.due-date {
  font-size: 0.8rem;
  color: #6c757d;
}

.due-date.overdue {
  color: #dc3545;
  font-weight: bold;
}

.due-date.due-today {
  color: #ffc107;
  font-weight: bold;
}

@media (max-width: 768px) {
  .todo-app {
    padding: 1rem;
  }
  
  .input-container {
    flex-direction: column;
  }
  
  .controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .todo-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .todo-actions {
    width: 100%;
    justify-content: space-between;
  }
}`,"package.json":`{
  "name": "advanced-todo-app",
  "version": "2.0.0",
  "description": "A comprehensive todo list application with 10+ advanced features",
  "main": "index.html",
  "scripts": {
    "start": "npx serve .",
    "dev": "npx live-server ."
  },
  "keywords": ["todo", "productivity", "task-management", "advanced", "features"],
  "author": "DreamBuild",
  "license": "MIT",
  "features": [
    "Add/Edit/Delete todos",
    "Mark complete/incomplete",
    "Priority levels (High/Medium/Low)",
    "Due dates with overdue detection",
    "Search functionality",
    "Filter by status (All/Active/Completed)",
    "Sort by date or priority",
    "Statistics dashboard",
    "Local storage persistence",
    "Responsive mobile design"
  ]
}`}}createEcommerceTemplate(e){return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Store</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #f5f5f5;
        color: #333;
      }

      .header {
        background: white;
        padding: 1rem 2rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .cart {
        background: #4CAF50;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        transition: background 0.3s;
      }

      .cart:hover {
        background: #45a049;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }

      .products {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }

      .product {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        transition: transform 0.3s;
      }

      .product:hover {
        transform: translateY(-4px);
      }

      .product img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 1rem;
      }

      .product h3 {
        margin-bottom: 0.5rem;
        color: #333;
      }

      .product .price {
        font-size: 1.5rem;
        font-weight: bold;
        color: #4CAF50;
        margin-bottom: 1rem;
      }

      .add-to-cart {
        background: #4CAF50;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
        transition: background 0.3s;
        width: 100%;
      }

      .add-to-cart:hover {
        background: #45a049;
      }

      .add-to-cart:active {
        transform: translateY(1px);
      }

      .cart-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1000;
      }

      .cart-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem;
        border-radius: 8px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
      }

      .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        border-bottom: 1px solid #eee;
      }

      .remove-item {
        background: #dc3545;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
      }

      .remove-item:hover {
        background: #c82333;
      }

      .total {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 1rem;
        text-align: center;
        color: #4CAF50;
      }

      .close-cart {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
      }
    </style>
</head>
<body>
    <div class="header">
        <h1>E-commerce Store</h1>
        <div class="cart" id="cartToggle">
            Cart (<span id="cartCount">0</span>) - $<span id="cartTotal">0</span>
        </div>
    </div>

    <div class="container">
        <h2>Products</h2>
        <div class="products" id="products">
            <!-- Products will be loaded here -->
        </div>
    </div>

    <!-- Cart Modal -->
    <div class="cart-modal" id="cartModal">
        <div class="cart-content">
            <button class="close-cart" id="closeCartBtn">&times;</button>
            <h2>Shopping Cart</h2>
            <div id="cartItems"></div>
            <div class="total">Total: $<span id="cartTotalModal">0</span></div>
        </div>
    </div>

    <script>
        let cart = [];
        let products = [
            { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/200x200/4CAF50/white?text=Laptop' },
            { id: 2, name: 'Phone', price: 699, image: 'https://via.placeholder.com/200x200/2196F3/white?text=Phone' },
            { id: 3, name: 'Tablet', price: 399, image: 'https://via.placeholder.com/200x200/FF9800/white?text=Tablet' }
        ];

        function initApp() {
            console.log('E-commerce app initializing...');
            renderProducts();
            updateCartDisplay();
        }

        function renderProducts() {
            const container = document.getElementById('products');
            container.innerHTML = '';

            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                // Create product HTML using DOM methods to avoid template literal issues
                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.name;
                
                const h3 = document.createElement('h3');
                h3.textContent = product.name;
                
                const priceDiv = document.createElement('div');
                priceDiv.className = 'price';
                priceDiv.textContent = '$' + product.price;
                
                const button = document.createElement('button');
                button.className = 'add-to-cart';
                button.setAttribute('data-product-id', product.id);
                button.textContent = 'Add to Cart';
                
                productDiv.appendChild(img);
                productDiv.appendChild(h3);
                productDiv.appendChild(priceDiv);
                productDiv.appendChild(button);
                container.appendChild(productDiv);
            });
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCartDisplay();
                console.log('Added to cart:', product.name);
            }
        }

        function removeFromCart(productId) {
            const index = cart.findIndex(item => item.id === productId);
            if (index > -1) {
                cart.splice(index, 1);
                updateCartDisplay();
                renderCartItems();
            }
        }

        function updateCartDisplay() {
            document.getElementById('cartCount').textContent = cart.length;
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            document.getElementById('cartTotal').textContent = total;
            document.getElementById('cartTotalModal').textContent = total;
        }

        function toggleCart() {
            const modal = document.getElementById('cartModal');
            modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
            if (modal.style.display === 'block') {
                renderCartItems();
            }
        }

        function renderCartItems() {
            const container = document.getElementById('cartItems');
            container.innerHTML = '';

            if (cart.length === 0) {
                container.innerHTML = '<p>Your cart is empty</p>';
                return;
            }

            cart.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                // Create cart item HTML using DOM methods
                const itemInfo = document.createElement('div');
                const strong = document.createElement('strong');
                strong.textContent = item.name;
                const br = document.createElement('br');
                const priceText = document.createTextNode('$' + item.price);
                
                itemInfo.appendChild(strong);
                itemInfo.appendChild(br);
                itemInfo.appendChild(priceText);
                
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-item';
                removeBtn.setAttribute('data-item-id', item.id);
                removeBtn.textContent = 'Remove';
                
                itemDiv.appendChild(itemInfo);
                itemDiv.appendChild(removeBtn);
                container.appendChild(itemDiv);
            });
        }

        // Initialize the app with proper event listeners
        function initAppWithEvents() {
            console.log('E-commerce app initializing with event listeners...');
            
            // Get elements
            const cartToggle = document.getElementById('cartToggle');
            const closeCartBtn = document.getElementById('closeCartBtn');
            
            // Add event listeners
            if (cartToggle) {
                cartToggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    toggleCart();
                });
                console.log('Cart toggle listener added');
            }
            
            if (closeCartBtn) {
                closeCartBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    toggleCart();
                });
                console.log('Close cart listener added');
            }
            
            // Add event delegation for dynamic buttons
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('add-to-cart')) {
                    e.preventDefault();
                    const productId = parseInt(e.target.getAttribute('data-product-id'));
                    addToCart(productId);
                    console.log('Add to cart clicked for product:', productId);
                }
                
                if (e.target.classList.contains('remove-item')) {
                    e.preventDefault();
                    const itemId = parseInt(e.target.getAttribute('data-item-id'));
                    removeFromCart(itemId);
                    console.log('Remove from cart clicked for item:', itemId);
                }
            });
            
            // Initialize the app
            initApp();
            console.log('E-commerce app initialized successfully!');
        }

        // Multiple initialization methods for maximum compatibility
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAppWithEvents);
        } else {
            initAppWithEvents();
        }
        
        // Also try on window load as fallback
        window.addEventListener('load', initAppWithEvents);
    <\/script>
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
}`}}createAPITemplate(e){return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Client</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #f5f7fa;
        color: #333;
        padding: 2rem;
      }

      .container {
        max-width: 800px;
        margin: 0 auto;
      }

      .header {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
        text-align: center;
      }

      .header h1 {
        color: #2c3e50;
        margin-bottom: 0.5rem;
      }

      .api-section {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
      }

      .api-section h2 {
        color: #2c3e50;
        margin-bottom: 1rem;
      }

      .button-group {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }

      button {
        background: #3498db;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s;
      }

      button:hover {
        background: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
      }

      button:active {
        transform: translateY(0);
      }

      .get-btn {
        background: #27ae60;
      }

      .get-btn:hover {
        background: #229954;
      }

      .post-btn {
        background: #e74c3c;
      }

      .post-btn:hover {
        background: #c0392b;
      }

      .response-area {
        background: #2c3e50;
        color: #ecf0f1;
        padding: 1rem;
        border-radius: 6px;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        min-height: 100px;
        white-space: pre-wrap;
        margin-top: 1rem;
      }

      .form-group {
        margin-bottom: 1rem;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }

      .form-group input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
      }

      .form-group input:focus {
        outline: none;
        border-color: #3498db;
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
      }

      .status-indicator {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 500;
        margin-left: 1rem;
      }

      .status-success {
        background: #d4edda;
        color: #155724;
      }

      .status-error {
        background: #f8d7da;
        color: #721c24;
      }

      .status-loading {
        background: #d1ecf1;
        color: #0c5460;
      }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>API Client</h1>
            <p>Test your API endpoints with this interactive client</p>
        </div>

        <div class="api-section">
            <h2>API Health Check</h2>
            <div class="button-group">
                <button class="get-btn" id="checkHealthBtn">Check API Health</button>
            </div>
            <div class="response-area" id="healthResponse">Click the button above to check API health...</div>
        </div>

        <div class="api-section">
            <h2>User Management</h2>
            <div class="button-group">
                <button class="get-btn" id="getUsersBtn">Get All Users</button>
                <button class="post-btn" id="createUserBtn">Create User</button>
            </div>
            
            <div class="form-group">
                <label for="userName">Name:</label>
                <input type="text" id="userName" placeholder="Enter user name">
            </div>
            <div class="form-group">
                <label for="userEmail">Email:</label>
                <input type="email" id="userEmail" placeholder="Enter user email">
            </div>
            
            <div class="response-area" id="userResponse">Click a button above to interact with users...</div>
        </div>

        <div class="api-section">
            <h2>Custom API Calls</h2>
            <div class="form-group">
                <label for="customUrl">API Endpoint:</label>
                <input type="text" id="customUrl" placeholder="https://api.example.com/endpoint" value="https://jsonplaceholder.typicode.com/posts/1">
            </div>
            <div class="button-group">
                <button class="get-btn" id="customGetBtn">GET Request</button>
                <button class="post-btn" id="customPostBtn">POST Request</button>
            </div>
            <div class="response-area" id="customResponse">Make a custom API request...</div>
        </div>
    </div>

    <script>
        let isLoading = false;

        function showStatus(elementId, message, type = 'success') {
            const element = document.getElementById(elementId);
            const statusSpan = element.querySelector('.status-indicator');
            if (statusSpan) {
                statusSpan.remove();
            }
            
            const status = document.createElement('span');
            status.className = 'status-indicator status-' + type;
            status.textContent = message;
            element.appendChild(status);
        }

        function setLoading(elementId, loading = true) {
            const element = document.getElementById(elementId);
            if (loading) {
                element.style.opacity = '0.7';
                showStatus(elementId, 'Loading...', 'loading');
            } else {
                element.style.opacity = '1';
                const statusSpan = element.querySelector('.status-indicator');
                if (statusSpan) {
                    statusSpan.remove();
                }
            }
        }

        async function checkHealth() {
            const responseElement = document.getElementById('healthResponse');
            setLoading('healthResponse', true);
            
            try {
                // Simulate API call since we don't have a real server
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const mockResponse = {
                    status: 'OK',
                    message: 'API is running',
                    timestamp: new Date().toISOString(),
                    uptime: '99.9%'
                };
                
                responseElement.textContent = JSON.stringify(mockResponse, null, 2);
                showStatus('healthResponse', '✓ Success', 'success');
            } catch (error) {
                responseElement.textContent = \`Error: \${error.message}\`;
                showStatus('healthResponse', '✗ Error', 'error');
            } finally {
                setLoading('healthResponse', false);
            }
        }

        async function getUsers() {
            const responseElement = document.getElementById('userResponse');
            setLoading('userResponse', true);
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 800));
                
                const mockUsers = [
                    { id: 1, name: 'John Doe', email: 'john@example.com' },
                    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
                    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
                ];
                
                responseElement.textContent = JSON.stringify(mockUsers, null, 2);
                showStatus('userResponse', '✓ Success', 'success');
            } catch (error) {
                responseElement.textContent = \`Error: \${error.message}\`;
                showStatus('userResponse', '✗ Error', 'error');
            } finally {
                setLoading('userResponse', false);
            }
        }

        async function createUser() {
            const responseElement = document.getElementById('userResponse');
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            
            if (!name || !email) {
                responseElement.textContent = 'Error: Please fill in both name and email fields';
                showStatus('userResponse', '✗ Validation Error', 'error');
                return;
            }
            
            setLoading('userResponse', true);
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const newUser = {
                    id: Date.now(),
                    name: name,
                    email: email,
                    createdAt: new Date().toISOString()
                };
                
                responseElement.textContent = JSON.stringify(newUser, null, 2);
                showStatus('userResponse', '✓ User Created', 'success');
                
                // Clear form
                document.getElementById('userName').value = '';
                document.getElementById('userEmail').value = '';
            } catch (error) {
                responseElement.textContent = \`Error: \${error.message}\`;
                showStatus('userResponse', '✗ Error', 'error');
            } finally {
                setLoading('userResponse', false);
            }
        }

        async function makeCustomRequest(method) {
            const responseElement = document.getElementById('customResponse');
            const url = document.getElementById('customUrl').value;
            
            if (!url) {
                responseElement.textContent = 'Error: Please enter a URL';
                showStatus('customResponse', '✗ Validation Error', 'error');
                return;
            }
            
            setLoading('customResponse', true);
            
            try {
                const options = {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                
                if (method === 'POST') {
                    options.body = JSON.stringify({
                        title: 'Test Post',
                        body: 'This is a test post created by the API client',
                        userId: 1
                    });
                }
                
                const response = await fetch(url, options);
                const data = await response.json();
                
                responseElement.textContent = JSON.stringify(data, null, 2);
                showStatus('customResponse', \`✓ \${method} Success\`, 'success');
            } catch (error) {
                responseElement.textContent = \`Error: \${error.message}\`;
                showStatus('customResponse', '✗ Error', 'error');
            } finally {
                setLoading('customResponse', false);
            }
        }

        // Initialize the app with proper event listeners
        function initAPIAppWithEvents() {
            console.log('API Client initializing with event listeners...');
            
            // Get button elements
            const checkHealthBtn = document.getElementById('checkHealthBtn');
            const getUsersBtn = document.getElementById('getUsersBtn');
            const createUserBtn = document.getElementById('createUserBtn');
            const customGetBtn = document.getElementById('customGetBtn');
            const customPostBtn = document.getElementById('customPostBtn');
            
            // Add event listeners
            if (checkHealthBtn) {
                checkHealthBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    checkHealth();
                });
                console.log('Check health button listener added');
            }
            
            if (getUsersBtn) {
                getUsersBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    getUsers();
                });
                console.log('Get users button listener added');
            }
            
            if (createUserBtn) {
                createUserBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    createUser();
                });
                console.log('Create user button listener added');
            }
            
            if (customGetBtn) {
                customGetBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    makeCustomRequest('GET');
                });
                console.log('Custom GET button listener added');
            }
            
            if (customPostBtn) {
                customPostBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    makeCustomRequest('POST');
                });
                console.log('Custom POST button listener added');
            }
            
            console.log('API Client initialized successfully!');
        }

        // Multiple initialization methods for maximum compatibility
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAPIAppWithEvents);
        } else {
            initAPIAppWithEvents();
        }
        
        // Also try on window load as fallback
        window.addEventListener('load', initAPIAppWithEvents);
    <\/script>
</body>
</html>`,"server.js":`const express = require('express');
const cors = require('cors');
const app = express();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
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
        color: white;
        padding: 2rem;
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

      .interactive-section {
        background: rgba(255, 255, 255, 0.1);
        padding: 2rem;
        border-radius: 1rem;
        margin-top: 2rem;
        text-align: center;
      }

      .counter {
        font-size: 2rem;
        margin: 1rem 0;
        color: #4CAF50;
      }

      button {
        background: #4CAF50;
        color: white;
        border: none;
        padding: 1rem 2rem;
        font-size: 1rem;
        border-radius: 8px;
        cursor: pointer;
        margin: 0.5rem;
        transition: all 0.3s;
      }

      button:hover {
        background: #45a049;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }

      button:active {
        transform: translateY(0);
      }

      .feature-list {
        list-style: none;
        padding: 0;
      }

      .feature-list li {
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }

      .feature-list li:before {
        content: "✓ ";
        color: #4CAF50;
        font-weight: bold;
      }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Your DreamBuild App!</h1>
        <p>Generated based on: "${e}"</p>
        
        <div class="content">
            <h2>Your Application</h2>
            <p>This is a starter application generated by DreamBuild. You can customize it further by editing the files in your project.</p>
            
            <h3>Features:</h3>
            <ul class="feature-list">
                <li>Responsive design</li>
                <li>Modern styling</li>
                <li>Clean code structure</li>
                <li>Interactive buttons</li>
                <li>Fully functional</li>
            </ul>
        </div>

        <div class="interactive-section">
            <h2>Interactive Demo</h2>
            <p>Click the buttons below to see the app in action:</p>
            <div class="counter" id="counter">0</div>
            <button id="incrementBtn">Increment</button>
            <button id="decrementBtn">Decrement</button>
            <button id="resetBtn">Reset</button>
            <button id="alertBtn">Show Alert</button>
        </div>
    </div>

    <script>
        let counter = 0;

        function incrementCounter() {
            counter++;
            updateCounter();
            console.log('Counter incremented to:', counter);
        }

        function decrementCounter() {
            counter--;
            updateCounter();
            console.log('Counter decremented to:', counter);
        }

        function resetCounter() {
            counter = 0;
            updateCounter();
            console.log('Counter reset to:', counter);
        }

        function updateCounter() {
            const counterElement = document.getElementById('counter');
            if (counterElement) {
                counterElement.textContent = counter;
            }
        }

        function showAlert() {
            alert('Hello from your DreamBuild app! The buttons are working perfectly!');
            console.log('Alert button clicked!');
        }

        // Initialize the app with proper event listeners
        function initializeApp() {
            console.log('DreamBuild app initializing...');
            
            // Get button elements
            const incrementBtn = document.getElementById('incrementBtn');
            const decrementBtn = document.getElementById('decrementBtn');
            const resetBtn = document.getElementById('resetBtn');
            const alertBtn = document.getElementById('alertBtn');
            
            // Add event listeners
            if (incrementBtn) {
                incrementBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    incrementCounter();
                });
                console.log('Increment button listener added');
            }
            
            if (decrementBtn) {
                decrementBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    decrementCounter();
                });
                console.log('Decrement button listener added');
            }
            
            if (resetBtn) {
                resetBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    resetCounter();
                });
                console.log('Reset button listener added');
            }
            
            if (alertBtn) {
                alertBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    showAlert();
                });
                console.log('Alert button listener added');
            }
            
            // Initialize counter display
            updateCounter();
            console.log('DreamBuild app initialized successfully!');
        }

        // Multiple initialization methods for maximum compatibility
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
        } else {
            initializeApp();
        }
        
        // Also try on window load as fallback
        window.addEventListener('load', initializeApp);
        
        // Make functions globally available for debugging
        window.dreamBuildApp = {
            incrementCounter,
            decrementCounter,
            resetCounter,
            showAlert,
            getCounter: () => counter
        };
    <\/script>
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
}`}}getServiceHealth(){return{"cloud-ai":{isHealthy:this.isHealthy}}}getUsageStats(){return{totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0}}}const p=new W;class _{constructor(){this.currentService="cloud-ai",this.usageStats={totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0},console.log("🤖 Simple AI Service initialized - Cloud AI with Open Source Models!")}getServices(){return{"cloud-ai":{name:"Cloud AI Models",type:"Cloud",description:"Open source AI models via Hugging Face - no API keys required",models:p.getAvailableModels()},"local-ai":{name:"Local AI Models",type:"Local",description:"Self-hosted AI models - no API keys required",models:u.getAvailableModels()}}}getTemplateCategories(){return u.getTemplateCategories()}getTemplatesByCategory(e){return u.getTemplatesByCategory(e)}async getAllTemplates(){return await u.getAllTemplates()}async generateTemplateById(e,r={}){return await u.generateTemplateById(e,r)}async searchTemplates(e){return await u.searchTemplates(e)}async getPopularTemplates(){return await u.getPopularTemplates()}async generateCode(e,r={}){const t=Date.now();this.usageStats.totalRequests++;try{if(console.log("🚀 Generating code with Cloud AI..."),this.currentService==="cloud-ai"){const a=await p.generateCode(e,r),n=Date.now()-t;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+n)/2,console.log("✅ Code generated successfully with Cloud AI!"),a}if(u.isHealthy){console.log("🔄 Falling back to Local AI...");const a=await u.generateCode(e,r),n=Date.now()-t;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+n)/2,console.log("✅ Code generated successfully with Local AI!"),a}return console.log("⚠️ No AI services available, using template fallback"),p.createFallbackResponse(e,r)}catch(a){return console.error("❌ AI generation failed:",a),this.usageStats.failedRequests++,console.log("🔄 Falling back to template generation..."),p.createFallbackResponse(e,r)}}getServiceHealth(){return{"cloud-ai":p.getServiceHealth(),"local-ai":u.modelHealth}}getUsageStats(){return this.usageStats}getUserPreferences(){return{preferredService:"cloud-ai",fallbackEnabled:!0,autoHealthCheck:!0}}updateUserPreferences(e){localStorage.setItem("dreambuild-preferences",JSON.stringify(e))}loadUserPreferences(){const e=localStorage.getItem("dreambuild-preferences");return e?JSON.parse(e):this.getUserPreferences()}getServiceStatus(){return{"cloud-ai":{isHealthy:p.isHealthy,models:p.getHealthyModels().length,totalModels:p.getAvailableModels().length},"local-ai":{isHealthy:u.isHealthy,models:u.getHealthyModels().length,totalModels:u.getAvailableModels().length}}}resetServiceHealth(){u.modelHealth={}}getFallbackOrder(){return["cloud-ai","local-ai"]}isFallbackEnabled(){return!0}setFallbackEnabled(e){return!0}getSetupInstructions(){return{"cloud-ai":{title:"Cloud AI Setup",description:"Open source AI models via Hugging Face - no setup required",steps:["1. Cloud AI is ready to use with open source models","2. No API keys or installation required","3. Models include CodeLlama, StarCoder, DeepSeek, and more","4. Start generating code immediately!"],isSetup:p.isHealthy},"local-ai":{title:"Local AI Setup",description:"Set up local AI models for code generation",steps:["1. Install Ollama from https://ollama.ai","2. Run: ollama pull codellama:7b","3. Run: ollama serve","4. Refresh DreamBuild to start using local AI"],isSetup:u.isHealthy}}}getServicesNeedingSetup(){const e=[];return p.isHealthy||e.push("cloud-ai"),u.isHealthy||e.push("local-ai"),e}hasValidApiKey(e){return e==="cloud-ai"||e==="local-ai"}setService(e){(e==="cloud-ai"||e==="local-ai")&&(this.currentService=e)}getCurrentService(){return this.currentService}}const J=new _,X=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{X as a,Q as c,F as f,J as s};
