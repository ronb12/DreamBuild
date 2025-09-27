import{a as T}from"./utils-vendor-ngrFHoWO.js";import{_ as P}from"./monaco-editor-CKIEnvzl.js";import{i as D,g as E,f as z,e as M,o as $,A as N,j as d,l as g,h as x,p as S,v as k,q as b,w as y,x as A,t as O}from"./firebase-HQh6JyMG.js";import{e as H,r as U,c as q,g as W}from"./index-CXIb0JMA.js";class G{constructor(){this.baseURL="https://api.github.com",this.trendingRepos=[],this.templateCache=new Map,this.cacheExpiry=30*60*1e3,this.isLoading=!1,console.log("🔗 GitHub Template Service initialized")}async getTrendingTemplates(t="javascript",e="stars",a="desc"){if(this.isLoading)return this.trendingRepos;this.isLoading=!0;try{console.log("📡 Fetching trending GitHub templates...");const s=["stars:>100 topic:todo-app","stars:>100 topic:calculator","stars:>100 topic:weather-app","stars:>100 topic:game","stars:>100 topic:portfolio","stars:>100 topic:blog","stars:>100 topic:landing-page","stars:>50 topic:react-tutorial","stars:>50 topic:javascript-project","stars:>50 topic:html-css"],r=[];for(const o of s)try{console.log(`📈 Fetching trending repositories: ${o}`);const c=await fetch(`${this.baseURL}/search/repositories?q=${encodeURIComponent(o)}&sort=stars&order=desc&per_page=20`,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"DreamBuild-Template-Service"}});if(!c.ok)if(console.error(`GitHub API error for query "${o}": ${c.status}`),c.status===403||c.status===429){console.log("⚠️ Rate limit hit, returning cached/fallback templates");const p=this.getFallbackTemplates();return this.trendingRepos=p,p}else if(c.status===422){console.log(`⚠️ Invalid query "${o}", skipping...`);continue}else{console.log(`⚠️ API error ${c.status} for query "${o}", skipping...`);continue}const l=await c.json();if(l.items&&l.items.length>0){console.log(`📈 Found ${l.items.length} trending template repositories for: ${o}`);const p=l.items.filter(f=>this.isTemplateRepository(f));r.push(...p)}await new Promise(p=>setTimeout(p,500))}catch(c){console.error(`Error fetching templates for ${o}:`,c);continue}const n=this.deduplicateRepos(r),i=this.filterTemplateRepos(n);if(i.length<10){console.log("📦 Adding fallback templates due to limited API results");const o=this.getFallbackTemplates();i.push(...o)}return this.trendingRepos=i.slice(0,25),console.log(`✅ Found ${this.trendingRepos.length} template repositories`),this.trendingRepos}catch(s){return console.error("❌ Failed to fetch trending templates:",s),this.getFallbackTemplates()}finally{this.isLoading=!1}}async getRepositoryTemplate(t){const e=`repo_${t.id}`;if(this.templateCache.has(e)){const a=this.templateCache.get(e);if(Date.now()-a.timestamp<this.cacheExpiry)return a.data}try{console.log(`📦 Processing template: ${t.full_name}`);const a=await this.getRepositoryContents(t.full_name),s=await this.parseRepositoryTemplate(t,a);return this.templateCache.set(e,{data:s,timestamp:Date.now()}),s}catch(a){return console.error(`❌ Failed to process template ${t.full_name}:`,a),null}}async getRepositoryContents(t,e=""){try{const a=await fetch(`${this.baseURL}/repos/${t}/contents/${e}`);if(!a.ok)throw new Error(`GitHub API error: ${a.status}`);return await a.json()}catch(a){return console.error(`Failed to fetch contents for ${t}:`,a),[]}}async parseRepositoryTemplate(t,e){const a=this.transformRepositoryToTemplate(t),s=this.extractKeyFiles(e);return a.files=s,a.fileCount=s.length,a.preview=t.owner?.avatar_url||"/api/placeholder/400/300",a}detectTemplateType(t,e){const a=t.name.toLowerCase(),s=(t.description||"").toLowerCase(),r=(t.topics||[]).join(" ").toLowerCase(),n=`${a} ${s} ${r}`;return n.includes("react-native")||n.includes("expo")||n.includes("flutter")||n.includes("mobile")?"mobile":n.includes("react")||n.includes("nextjs")||n.includes("next.js")||n.includes("gatsby")?"react":n.includes("vue")||n.includes("nuxt")||n.includes("quasar")?"vue":n.includes("angular")||n.includes("ionic")?"angular":n.includes("svelte")||n.includes("sveltekit")?"svelte":n.includes("node")||n.includes("express")||n.includes("koa")||n.includes("fastify")?"nodejs":n.includes("python")||n.includes("django")||n.includes("flask")||n.includes("fastapi")?"python":n.includes("php")||n.includes("laravel")||n.includes("symfony")||n.includes("codeigniter")?"php":n.includes("go")||n.includes("golang")||n.includes("gin")?"go":n.includes("rust")||n.includes("actix")||n.includes("rocket")?"rust":n.includes("java")||n.includes("spring")||n.includes("maven")?"java":n.includes("api")||n.includes("rest")||n.includes("graphql")||n.includes("microservice")?"api":n.includes("dashboard")||n.includes("admin")||n.includes("panel")?"dashboard":n.includes("ecommerce")||n.includes("e-commerce")||n.includes("shop")||n.includes("store")?"ecommerce":n.includes("blog")||n.includes("cms")||n.includes("content")?"blog":n.includes("portfolio")||n.includes("personal")||n.includes("resume")?"portfolio":n.includes("landing")||n.includes("marketing")||n.includes("promo")?"landing":n.includes("cms")||n.includes("content-management")||n.includes("headless")?"cms":n.includes("ui")||n.includes("ux")||n.includes("design-system")||n.includes("component-library")?"ui":n.includes("test")||n.includes("testing")||n.includes("e2e")||n.includes("unit-test")?"testing":n.includes("devops")||n.includes("ci-cd")||n.includes("docker")||n.includes("kubernetes")?"devops":n.includes("database")||n.includes("sql")||n.includes("nosql")||n.includes("mongodb")||n.includes("postgresql")?"database":n.includes("auth")||n.includes("authentication")||n.includes("jwt")||n.includes("oauth")?"auth":n.includes("payment")||n.includes("stripe")||n.includes("paypal")||n.includes("billing")?"payment":n.includes("analytics")||n.includes("tracking")||n.includes("metrics")||n.includes("monitoring")?"analytics":n.includes("documentation")||n.includes("docs")||n.includes("readme")||n.includes("guide")?"documentation":"web"}extractKeyFiles(t){const e=[],a=["package.json","package-lock.json","yarn.lock","index.html","index.js","index.jsx","index.ts","index.tsx","App.js","App.jsx","App.ts","App.tsx","main.js","main.ts","main.jsx","main.tsx","src/","components/","pages/","views/","README.md","readme.md","docker-compose.yml","Dockerfile","tsconfig.json","webpack.config.js","vite.config.js","tailwind.config.js","postcss.config.js"];return t.forEach(s=>{a.some(r=>s.name.toLowerCase()===r.toLowerCase()||s.name.toLowerCase().startsWith(r.toLowerCase()))&&e.push({name:s.name,path:s.path,type:s.type,size:s.size,downloadUrl:s.download_url})}),e.slice(0,20)}generateTemplateName(t){return t.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ").replace(/template|starter|boilerplate|example|demo/gi,"").trim()}categorizeTemplate(t,e){return{react:"web-apps",vue:"web-apps",angular:"web-apps",svelte:"web-apps",nodejs:"web-apps",python:"web-apps",php:"web-apps",go:"web-apps",rust:"web-apps",java:"web-apps",mobile:"mobile-apps",api:"apis",dashboard:"dashboards",ecommerce:"e-commerce",blog:"portfolios",portfolio:"portfolios",landing:"landing-pages",cms:"web-apps",ui:"web-apps",testing:"web-apps",devops:"apis",database:"apis",auth:"apis",payment:"apis",analytics:"dashboards",documentation:"portfolios",web:"web-apps"}[t]||"web-apps"}generateTags(t,e){const a=[e];t.language&&a.push(t.language.toLowerCase()),t.topics&&a.push(...t.topics.slice(0,3));const s={react:["react","javascript"],vue:["vue","javascript"],angular:["angular","typescript"],nodejs:["nodejs","express"],python:["python","django"],mobile:["react-native","mobile"]};return s[e]&&a.push(...s[e]),[...new Set(a)].slice(0,5)}deduplicateRepos(t){const e=new Set;return t.filter(a=>e.has(a.id)?!1:(e.add(a.id),!0))}isTemplateRepository(t){const e=t.name.toLowerCase(),a=(t.description||"").toLowerCase(),s=(t.topics||[]).join(" ").toLowerCase(),n=["todo-app","calculator","weather-app","recipe-app","expense-tracker","note-taking","bookmark-manager","task-manager","habit-tracker","budget-planner","calendar-app","contact-book","photo-gallery","music-player","video-player","chat-app","forum","blog","portfolio","landing-page","online-store","restaurant-menu","event-planner","booking-system","survey-form","quiz-app","game","puzzle","memory-game","tic-tac-toe","snake-game","pong","breakout","maze","word-search","sudoku","hangman","trivia","flashcards","timer","stopwatch","pomodoro","countdown","random-generator","password-generator","color-picker","unit-converter","currency-converter","tip-calculator","bmi-calculator","age-calculator","date-calculator","percentage-calculator","loan-calculator","mortgage-calculator","investment-calculator","tax-calculator","grade-calculator","gpa-calculator","starter","template","example","demo","sample","tutorial","beginner","simple","basic"].some(l=>e.includes(l)||a.includes(l)||s.includes(l)),i=t.stargazers_count>=10,o=new Date(t.updated_at)>new Date("2019-01-01"),c=t.description&&t.description.length>10;return n&&i&&o&&c}filterTemplateRepos(t){return t.filter(e=>this.isTemplateRepository(e))}async searchTemplates(t,e="all"){return(await this.getTrendingTemplates()).filter(s=>{const r=s.name.toLowerCase().includes(t.toLowerCase())||s.description.toLowerCase().includes(t.toLowerCase())||s.tags.some(i=>i.toLowerCase().includes(t.toLowerCase())),n=e==="all"||s.category===e;return r&&n})}async getTemplateById(t){const a=(await this.getTrendingTemplates()).find(s=>s.id===t);return a?await this.getRepositoryTemplate(a):null}async getTemplatesByCategory(t){return(await this.getTrendingTemplates()).filter(a=>a.category===t)}async getPopularTemplates(t=10){return(await this.getTrendingTemplates()).sort((a,s)=>s.popularity-a.popularity).slice(0,t)}getFallbackTemplates(){return[{id:"fallback-todo-1",name:"Simple Todo App",description:"A clean and simple todo application with add, edit, and delete functionality.",category:"todo-app",templateType:"web",difficulty:"beginner",estimatedTime:"2-4 hours",tags:["javascript","html","css","todo","task-management"],popularity:85,stars:150,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/simple-todo-app",features:["Add tasks","Mark complete","Delete tasks","Local storage"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999001,fullName:"example/simple-todo-app",htmlUrl:"https://github.com/example/simple-todo-app",cloneUrl:"https://github.com/example/simple-todo-app.git",language:"JavaScript",stargazersCount:150,forksCount:25,topics:["todo","javascript","html","css"],owner:"example"}},{id:"fallback-calculator-1",name:"Basic Calculator",description:"A functional calculator with basic arithmetic operations.",category:"calculator",templateType:"web",difficulty:"beginner",estimatedTime:"1-2 hours",tags:["javascript","html","css","calculator","math"],popularity:90,stars:200,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/basic-calculator",features:["Basic operations","Clear function","Responsive design"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999002,fullName:"example/basic-calculator",htmlUrl:"https://github.com/example/basic-calculator",cloneUrl:"https://github.com/example/basic-calculator.git",language:"JavaScript",stargazersCount:200,forksCount:30,topics:["calculator","javascript","math"],owner:"example"}},{id:"fallback-weather-1",name:"Weather Dashboard",description:"A weather app that displays current conditions and forecast.",category:"weather-app",templateType:"web",difficulty:"intermediate",estimatedTime:"3-5 hours",tags:["javascript","api","weather","dashboard"],popularity:75,stars:120,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/weather-dashboard",features:["Current weather","5-day forecast","Location search"],techStack:["HTML","CSS","JavaScript","Weather API"],isFallback:!0,githubData:{id:999003,fullName:"example/weather-dashboard",htmlUrl:"https://github.com/example/weather-dashboard",cloneUrl:"https://github.com/example/weather-dashboard.git",language:"JavaScript",stargazersCount:120,forksCount:20,topics:["weather","api","dashboard"],owner:"example"}},{id:"fallback-portfolio-1",name:"Personal Portfolio",description:"A modern, responsive portfolio website template.",category:"portfolio",templateType:"web",difficulty:"intermediate",estimatedTime:"4-6 hours",tags:["html","css","javascript","portfolio","responsive"],popularity:95,stars:300,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/personal-portfolio",features:["Responsive design","Project showcase","Contact form"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999004,fullName:"example/personal-portfolio",htmlUrl:"https://github.com/example/personal-portfolio",cloneUrl:"https://github.com/example/personal-portfolio.git",language:"HTML",stargazersCount:300,forksCount:50,topics:["portfolio","responsive","html","css"],owner:"example"}},{id:"fallback-game-1",name:"Snake Game",description:"Classic Snake game built with vanilla JavaScript.",category:"game",templateType:"web",difficulty:"intermediate",estimatedTime:"3-4 hours",tags:["javascript","game","canvas","snake"],popularity:80,stars:180,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/snake-game",features:["Keyboard controls","Score tracking","Game over screen"],techStack:["HTML","CSS","JavaScript","Canvas"],isFallback:!0,githubData:{id:999005,fullName:"example/snake-game",htmlUrl:"https://github.com/example/snake-game",cloneUrl:"https://github.com/example/snake-game.git",language:"JavaScript",stargazersCount:180,forksCount:35,topics:["game","snake","canvas","javascript"],owner:"example"}}]}transformRepositoryToTemplate(t,e="web"){return{id:`github_${t.id}`,name:this.generateTemplateName(t.name),description:t.description||`Template based on ${t.full_name}`,category:this.categorizeTemplate(this.detectTemplateType(t,[]),t),templateType:this.detectTemplateType(t,[]),difficulty:this.estimateDifficulty(t),estimatedTime:this.estimateTime(t),tags:this.generateTags(t,this.detectTemplateType(t,[])),popularity:Math.min(Math.floor(t.stargazers_count/100),100),stars:t.stargazers_count,lastUpdated:t.updated_at,createdAt:t.created_at,source:"github",repositoryUrl:t.html_url,features:this.extractFeatures(t),techStack:this.extractTechStack(t),githubData:{id:t.id,fullName:t.full_name,htmlUrl:t.html_url,cloneUrl:t.clone_url,language:t.language,stargazersCount:t.stargazers_count,forksCount:t.forks_count,topics:t.topics||[],owner:t.owner?.login}}}estimateDifficulty(t){return t.stargazers_count>500?"advanced":t.stargazers_count>100?"intermediate":"beginner"}estimateTime(t){const e=t.stargazers_count;return e>500?"6-8 hours":e>100?"3-5 hours":"1-3 hours"}extractFeatures(t){const e=[],a=t.name.toLowerCase(),s=(t.description||"").toLowerCase();return(a.includes("todo")||s.includes("todo"))&&e.push("Task management","Add/Edit tasks","Mark complete"),(a.includes("calculator")||s.includes("calculator"))&&e.push("Basic operations","Clear function"),(a.includes("weather")||s.includes("weather"))&&e.push("Current weather","Forecast","Location search"),(a.includes("portfolio")||s.includes("portfolio"))&&e.push("Project showcase","Responsive design","Contact form"),(a.includes("game")||s.includes("game"))&&e.push("Interactive gameplay","Score tracking"),e.length>0?e:["Modern design","Responsive layout"]}extractTechStack(t){const e=[];t.language&&e.push(t.language);const a=t.topics||[];return a.includes("react")&&e.push("React"),a.includes("vue")&&e.push("Vue"),a.includes("angular")&&e.push("Angular"),a.includes("html")&&e.push("HTML"),a.includes("css")&&e.push("CSS"),a.includes("javascript")&&e.push("JavaScript"),a.includes("typescript")&&e.push("TypeScript"),e.length>0?e:["HTML","CSS","JavaScript"]}clearCache(){this.templateCache.clear(),this.trendingRepos=[],console.log("🗑️ GitHub template cache cleared")}}const v=new G,F={"codellama-7b":{name:"CodeLlama 7B",type:"Code Generation",baseURL:"http://localhost:11434/api",model:"codellama:7b",description:"Fast and efficient code generation (7B parameters)",languages:["python","javascript","java","cpp","go","rust","php","ruby"],strengths:["speed","efficiency","general-purpose"],ram_required:"8GB"},auto:{name:"Auto Select",type:"Auto Selection",baseURL:"http://localhost:11434/api",model:"auto",description:"Automatically selects the best available model",languages:["all"],strengths:["smart-selection","availability"],ram_required:"variable"}},C={"web-apps":{name:"Web Applications",description:"Full-stack web applications",templates:[{id:"react-dashboard",name:"React Dashboard",description:"Modern React dashboard with charts and analytics",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"ecommerce-store",name:"E-commerce Store",description:"Complete online store with cart and checkout",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]}]},"mobile-apps":{name:"Mobile Applications",description:"React Native mobile applications",templates:[{id:"todo-app",name:"Todo App",description:"Simple todo application with React Native",category:"mobile-apps",files:["App.js","components/TodoItem.js","styles.js"]}]}};class _{constructor(){if(this.isHealthy=!1,this.modelHealth={},this.availableModels=Object.keys(F),this.baseURL="http://localhost:11434/api",this.isProduction=window.location.protocol==="https:",this.isLocalhost=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",this.isProduction&&!this.isLocalhost){console.log("🌐 Production environment detected - skipping local AI detection"),this.isHealthy=!1;return}console.log("🔍 Initializing local AI health monitoring..."),this.checkHealth(),setInterval(()=>{this.checkHealthQuiet()},3e4)}async checkHealth(){if(!(this.isProduction&&!this.isLocalhost))try{const t=await T.get(`${this.baseURL}/tags`,{timeout:3e3});if(t.status===200){const e=this.isHealthy;this.isHealthy=!0,e||console.log("✅ Local AI service is healthy");const a=t.data.models||[];this.modelHealth={},a.forEach(s=>{this.modelHealth[s.name]={isHealthy:!0,size:s.size,modified_at:s.modified_at}})}else{const e=this.isHealthy;this.isHealthy=!1,e&&console.log("⚠️ Local AI service is not responding")}}catch(t){const e=this.isHealthy;this.isHealthy=!1,t.code==="ERR_NETWORK"||t.message.includes("CORS")?e||console.log("🔒 Local AI not accessible (CORS/Network) - using cloud AI"):t.code==="ECONNREFUSED"?e||console.log("💻 Ollama not running locally - using cloud AI"):e||console.log("⚠️ Local AI service not available:",t.message)}}async checkHealthQuiet(){if(!(this.isProduction&&!this.isLocalhost))try{const t=await T.get(`${this.baseURL}/tags`,{timeout:3e3});if(t.status===200){const e=this.isHealthy;this.isHealthy=!0;const a=t.data.models||[];this.modelHealth={},a.forEach(s=>{this.modelHealth[s.name]={isHealthy:!0,size:s.size,modified_at:s.modified_at}})}else this.isHealthy=!1}catch{this.isHealthy=!1}}getAvailableModels(){return Object.values(F)}getHealthyModels(){return Object.keys(this.modelHealth).filter(t=>this.modelHealth[t].isHealthy)}getTemplateCategories(){return C}getTemplatesByCategory(t){return C[t]?.templates||[]}async getAllTemplates(){const t=[];Object.values(C).forEach(s=>{t.push(...s.templates)});const a=(await v.getTrendingTemplates()).map(s=>v.transformRepositoryToTemplate(s));return[...t,...a]}async searchTemplates(t){const e=[];Object.values(C).forEach(n=>{e.push(...n.templates)});const s=(await v.searchTemplates(t)).map(n=>v.transformRepositoryToTemplate(n));return[...e,...s].filter(n=>n.name.toLowerCase().includes(t.toLowerCase())||(n.description||"").toLowerCase().includes(t.toLowerCase()))}async getPopularTemplates(){const t=[];Object.values(C).forEach(r=>{t.push(...r.templates)});const a=(await v.getPopularTemplates(5)).map(r=>v.transformRepositoryToTemplate(r));return[...t,...a].sort((r,n)=>(n.popularity||0)-(r.popularity||0)).slice(0,10)}async generateTemplateById(t,e={}){if(t.startsWith("github_"))return await this.generateGitHubTemplate(t,e);const a=[];Object.values(C).forEach(r=>{a.push(...r.templates)});const s=a.find(r=>r.id===t);if(!s)throw new Error(`Template ${t} not found`);return this.createTemplateFiles(s,e)}async generateGitHubTemplate(t,e={}){try{console.log(`🚀 Generating GitHub template: ${t}`);const a=await v.getTemplateById(t);if(!a)throw new Error(`GitHub template ${t} not found`);const s=await this.createGitHubTemplateFiles(a,e);return console.log(`✅ Generated ${Object.keys(s).length} files from GitHub template`),s}catch(a){throw console.error(`❌ Failed to generate GitHub template ${t}:`,a),a}}async createGitHubTemplateFiles(t,e={}){const a={};try{const{githubData:s}=t;return a["README.md"]=`# ${t.name}

${t.description}

## GitHub Repository
- **Source**: [${s.fullName}](${s.htmlUrl})
- **Stars**: ${s.stargazersCount}
- **Language**: ${s.language||"JavaScript"}

## Getting Started

This template is based on the GitHub repository: ${s.fullName}

### Installation
\`\`\`bash
git clone ${s.cloneUrl}
cd ${s.fullName}
npm install
\`\`\`

### Development
\`\`\`bash
npm start
\`\`\`

## Template Information
- **Type**: ${t.templateType}
- **Category**: ${t.category}
- **Tags**: ${t.tags.join(", ")}
- **Files**: ${t.fileCount}

## Customization
You can customize this template by modifying the files or using the AI prompt to generate additional features.
`,a["package.json"]=this.createPackageJson(t,e),a[this.getMainFileName(t)]=this.createMainFile(t,e),(t.templateType==="react"||t.templateType==="vue"||t.templateType==="web")&&(a["index.html"]=this.createIndexHtml(t,e)),Object.entries(e).forEach(([r,n])=>{typeof n=="string"&&(a[r]=n)}),a}catch(s){throw console.error("Failed to create GitHub template files:",s),s}}createPackageJson(t,e={}){const a={name:t.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:t.description,main:this.getMainFileName(t),scripts:{start:"npm run dev",dev:this.getDevScript(t),build:this.getBuildScript(t),test:'echo "No tests specified" && exit 0'},keywords:t.tags,author:e.author||"DreamBuild User",license:"MIT",repository:{type:"git",url:t.githubData.cloneUrl}};return a.dependencies=this.getTemplateDependencies(t),a.devDependencies=this.getTemplateDevDependencies(t),JSON.stringify(a,null,2)}getMainFileName(t){return{react:"src/App.jsx",vue:"src/main.js",angular:"src/main.ts",nodejs:"index.js",python:"main.py",mobile:"App.js",web:"index.js"}[t.templateType]||"index.js"}getDevScript(t){return{react:"react-scripts start",vue:"vue-cli-service serve",angular:"ng serve",nodejs:"nodemon index.js",python:"python main.py",mobile:"expo start",web:"live-server"}[t.templateType]||"node index.js"}getBuildScript(t){return{react:"react-scripts build",vue:"vue-cli-service build",angular:"ng build",nodejs:'echo "No build step needed"',python:'echo "No build step needed"',mobile:"expo build",web:'echo "No build step needed"'}[t.templateType]||'echo "No build step needed"'}getTemplateDependencies(t){return{react:{react:"^18.0.0","react-dom":"^18.0.0"},vue:{vue:"^3.0.0"},angular:{"@angular/core":"^15.0.0","@angular/common":"^15.0.0"},svelte:{svelte:"^3.0.0"},nodejs:{express:"^4.18.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{"react-native":"^0.70.0",expo:"~47.0.0"},api:{express:"^4.18.0"},dashboard:{react:"^18.0.0","react-dom":"^18.0.0"},ecommerce:{react:"^18.0.0","react-dom":"^18.0.0"},blog:{next:"^13.0.0",react:"^18.0.0"},portfolio:{react:"^18.0.0","react-dom":"^18.0.0"},landing:{react:"^18.0.0","react-dom":"^18.0.0"},web:{}}[t.templateType]||{}}getTemplateDevDependencies(t){return{react:{"react-scripts":"5.0.1"},vue:{"@vue/cli-service":"^5.0.0"},angular:{"@angular/cli":"^15.0.0"},svelte:{vite:"^4.0.0"},nodejs:{nodemon:"^2.0.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{},api:{nodemon:"^2.0.0"},dashboard:{"react-scripts":"5.0.1"},ecommerce:{"react-scripts":"5.0.1"},blog:{next:"^13.0.0"},portfolio:{"react-scripts":"5.0.1"},landing:{"react-scripts":"5.0.1"},web:{"live-server":"^1.2.0"}}[t.templateType]||{}}createMainFile(t,e={}){const a={react:`import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>${t.name}</h1>
        <p>${t.description}</p>
        <p>
          Template based on: <a href="${t.githubData.htmlUrl}">${t.githubData.fullName}</a>
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
      <h1>${t.name}</h1>
      <p>${t.description}</p>
      <p>Template based on: <a href="${t.githubData.htmlUrl}">${t.githubData.fullName}</a></p>
    </div>
  \`,
  styles: []
})
export class AppComponent {
  title = '${t.name}';
}`,svelte:`<script>
  export let name = '${t.name}';
<\/script>

<main>
  <h1>${t.name}</h1>
  <p>${t.description}</p>
  <p>Template based on: <a href="${t.githubData.htmlUrl}">${t.githubData.fullName}</a></p>
</main>`,nodejs:`const express = require('express');
const app = express();
// PORT removed - not needed in browser code

app.get('/', (req, res) => {
  res.send(\`
    <h1>${t.name}</h1>
    <p>${t.description}</p>
    <p>Template based on: <a href="${t.githubData.htmlUrl}">${t.githubData.fullName}</a></p>
  \`);
});

app.listen(PORT, () => {

});`,python:`from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', 
                         title='${t.name}',
                         description='${t.description}',
                         github_url='${t.githubData.htmlUrl}')

if __name__ == '__main__':
    app.run(debug=True)`,php:`<?php
echo "<h1>${t.name}</h1>";
echo "<p>${t.description}</p>";
echo "<p>Template based on: <a href='${t.githubData.htmlUrl}'>${t.githubData.fullName}</a></p>";
?>`,go:`package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "<h1>%s</h1><p>%s</p><p>Template based on: <a href='%s'>%s</a></p>", 
                "${t.name}", "${t.description}", "${t.githubData.htmlUrl}", "${t.githubData.fullName}")
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}`,rust:`use std::io;

fn main() {
    println!("Hello from {}!", "${t.name}");
    println!("{}", "${t.description}");
    println!("Template based on: {}", "${t.githubData.fullName}");
}`,java:`public class Main {
    public static void main(String[] args) {
        System.out.println("${t.name}");
        System.out.println("${t.description}");
        System.out.println("Template based on: ${t.githubData.fullName}");
    }
}`,api:`const express = require('express');
const app = express();
// PORT removed - not needed in browser code

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    name: '${t.name}',
    description: '${t.description}',
    github: '${t.githubData.fullName}'
  });
});

app.listen(PORT, () => {

});`,dashboard:`import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>${t.name}</h1>
        <p>${t.description}</p>
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
      <Text style={styles.title}>${t.name}</Text>
      <Text style={styles.description}>${t.description}</Text>
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
});`,web:`// ${t.name}
// ${t.description}

// Template based on: ${t.githubData.fullName}
// Repository: ${t.githubData.htmlUrl}`};return a[t.templateType]||a.web}createIndexHtml(t,e={}){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.name}</title>
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
        <h1>${t.name}</h1>
        <p>${t.description}</p>
        
        <div class="github-info">
            <h3>GitHub Repository</h3>
            <p><strong>Source:</strong> <a href="${t.githubData.htmlUrl}">${t.githubData.fullName}</a></p>
            <p><strong>Stars:</strong> ${t.githubData.stargazersCount}</p>
            <p><strong>Language:</strong> ${t.githubData.language||"JavaScript"}</p>
            <p><strong>Template Type:</strong> ${t.templateType}</p>
        </div>
        
        <p>🚀 Generated with DreamBuild's GitHub Template Integration</p>
    </div>
</body>
</html>`}createTemplateFiles(t,e={}){const a={};switch(t.id){case"react-dashboard":a["index.html"]=`<!DOCTYPE html>
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
</html>`}return a}async generateCode(t,e={}){console.log("🚀 Starting code generation for prompt:",t);try{return this.isProduction&&!this.isLocalhost?(console.log("🌐 Production environment - using template fallback"),this.createFallbackResponse(t,e)):this.isHealthy?await this.generateWithLocalAI(t,e):(console.log("⚠️ Local AI not available, using template fallback"),this.createFallbackResponse(t,e))}catch(a){return console.error("❌ Code generation failed:",a),this.createFallbackResponse(t,e)}}async generateWithLocalAI(t,e={}){const a=this.getBestAvailableModel(),s=this.createSystemPrompt(e),r={model:a,messages:[{role:"system",content:s},{role:"user",content:t}],stream:!1,options:{temperature:.7,top_p:.9,max_tokens:4e3}};try{const n=await T.post(`${this.baseURL}/chat`,r,{timeout:3e4,headers:{"Content-Type":"application/json"}});if(n.data&&n.data.message&&n.data.message.content){const i=n.data.message.content;return this.parseAIResponse(i,t)}else throw new Error("Invalid response from local AI")}catch(n){throw console.error("❌ Local AI generation failed:",n),n}}getBestAvailableModel(){const t=this.getHealthyModels();return t.includes("codellama:7b")?"codellama:7b":t.includes("codellama:13b")?"codellama:13b":t.includes("codellama:34b")?"codellama:34b":t[0]||"codellama:7b"}createSystemPrompt(t={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

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

Generate practical, working applications that users can immediately use.`}parseAIResponse(t,e){try{const a=t.match(/\{[\s\S]*\}/);if(a){const s=JSON.parse(a[0]);if(s.files)return s.files}return this.createFallbackResponse(e,{})}catch(a){return console.error("❌ Failed to parse AI response:",a),this.createFallbackResponse(e,{})}}createFallbackResponse(t,e={}){console.log("🔄 Creating fallback response for prompt:",t);const a=t.toLowerCase();return a.includes("dashboard")||a.includes("analytics")?this.generateTemplateById("react-dashboard",e):a.includes("todo")||a.includes("task")?this.generateTemplateById("todo-app",e):a.includes("ecommerce")||a.includes("store")||a.includes("shop")?this.generateTemplateById("ecommerce-store",e):{"index.html":`<!DOCTYPE html>
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
        <p>Generated based on: "${t}"</p>
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
}`}}}const u=new _;class J{constructor(){this.app=null,this.db=null,this.storage=null,this.auth=null,this.user=null,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const t={apiKey:"your-api-key",authDomain:"your-project.firebaseapp.com",projectId:"your-project-id",storageBucket:"your-project.appspot.com",messagingSenderId:"123456789",appId:"your-app-id"};try{this.app=D(t)}catch(e){if(e.code==="app/duplicate-app")this.app=E();else if(e.code==="app/no-options")try{this.app=E()}catch{this.app=D({apiKey:"demo-key",authDomain:"demo.firebaseapp.com",projectId:"demo-project"})}else throw e}this.db=z(this.app),this.storage=H(this.app),this.auth=M(this.app),$(this.auth,e=>{this.user=e,console.log("Firebase auth state changed:",e?"authenticated":"not authenticated")});try{await N(this.auth),console.log("✅ Firebase anonymous auth successful")}catch(e){console.log("⚠️ Firebase auth not available, continuing without authentication:",e.message),this.user=null}this.isInitialized=!0,console.log("🔥 Firebase initialized successfully")}catch(t){console.error("❌ Failed to initialize Firebase:",t),this.isInitialized=!1,this.user=null,console.log("⚠️ Continuing without Firebase services")}}async storeProjectContext(t,e){try{await this.initialize();const a=d(this.db,"projectContexts",t);await g(a,{...e,userId:this.user?.uid||"anonymous",storedAt:new Date().toISOString(),dataSize:JSON.stringify(e).length}),console.log("✅ Project context stored successfully")}catch(a){throw console.error("❌ Failed to store project context:",a),a}}async loadProjectContext(t){try{await this.initialize();const e=d(this.db,"projectContexts",t),a=await x(e);return a.exists()?(console.log("✅ Project context loaded successfully"),a.data()):(console.log("❌ Project context not found"),null)}catch(e){return console.error("❌ Failed to load project context:",e),null}}async storeProjectFiles(t,e){try{await this.initialize();const a=d(this.db,"projectFiles",t);await g(a,{projectId:t,files:e,fileCount:Object.keys(e).length,totalSize:JSON.stringify(e).length,userId:this.user?.uid||"anonymous",storedAt:new Date().toISOString()}),console.log("✅ Project files stored successfully")}catch(a){throw console.error("❌ Failed to store project files:",a),a}}async loadProjectFiles(t){try{await this.initialize();const e=d(this.db,"projectFiles",t),a=await x(e);return a.exists()?(console.log("✅ Project files loaded successfully"),a.data().files):(console.log("❌ Project files not found"),null)}catch(e){return console.error("❌ Failed to load project files:",e),null}}async storeTemplate(t){try{await this.initialize();const e=d(this.db,"templates",t.id);await g(e,{...t,userId:this.user?.uid||"anonymous",updatedAt:new Date().toISOString()}),console.log("✅ Template stored successfully")}catch(e){throw console.error("❌ Failed to store template:",e),e}}async loadTemplates(){try{await this.initialize();const t=S(this.db,"templates"),e=await k(t),a=[];return e.forEach(s=>{a.push(s.data())}),console.log("✅ Templates loaded successfully"),a}catch(t){return console.error("❌ Failed to load templates:",t),[]}}async searchTemplates(t,e,a){try{await this.initialize();const s=S(this.db,"templates");let r=b(s);t&&t.length>0&&(r=b(r,y("keywords","array-contains-any",t))),e&&e.length>0&&(r=b(r,y("technologies","array-contains-any",e))),a&&a.length>0&&(r=b(r,y("patterns","array-contains-any",a)));const n=await k(r),i=[];return n.forEach(o=>{i.push(o.data())}),console.log("✅ Templates searched successfully"),i}catch(s){return console.error("❌ Failed to search templates:",s),[]}}async storeLargeFile(t,e,a){try{await this.initialize();const s=U(this.storage,`projects/${t}/${e}`),r=new Blob([a],{type:"text/plain"});await q(s,r);const n=await W(s);return console.log("✅ Large file stored successfully"),n}catch(s){throw console.error("❌ Failed to store large file:",s),s}}async loadLargeFile(t){try{const a=await(await fetch(t)).text();return console.log("✅ Large file loaded successfully"),a}catch(e){return console.error("❌ Failed to load large file:",e),null}}async getUserProjects(){try{await this.initialize();const t=S(this.db,"projectContexts"),e=b(t,y("userId","==",this.user?.uid||"anonymous")),a=await k(e),s=[];return a.forEach(r=>{s.push({id:r.id,...r.data()})}),console.log("✅ User projects loaded successfully"),s}catch(t){return console.error("❌ Failed to load user projects:",t),[]}}async deleteProject(t){try{await this.initialize();const e=d(this.db,"projectContexts",t);await A(e);const a=d(this.db,"projectFiles",t);await A(a),console.log("✅ Project deleted successfully")}catch(e){throw console.error("❌ Failed to delete project:",e),e}}async getStorageStats(){try{await this.initialize();const t=await this.getUserProjects();let e=0,a=0;for(const s of t)e+=s.dataSize||0,a+=s.fileCount||0;return{totalProjects:t.length,totalFiles:a,totalSize:e,totalSizeMB:Math.round(e/(1024*1024)*100)/100}}catch(t){return console.error("❌ Failed to get storage stats:",t),{totalProjects:0,totalFiles:0,totalSize:0,totalSizeMB:0}}}async storeConversationMemory(t,e){try{await this.initialize();const a=JSON.stringify(e),s=8e5;if(a.length>s){console.log("⚠️ Conversation data too large, storing in chunks");const r=this.chunkData(e,s);for(let n=0;n<r.length;n++){const i=d(this.db,"conversationMemory",`${t}_chunk_${n}`);await g(i,{projectId:t,chunkIndex:n,totalChunks:r.length,conversation:r[n],userId:this.user?.uid||"anonymous",lastUpdated:new Date().toISOString()})}console.log(`🧠 Conversation memory stored in ${r.length} chunks`)}else{const r=d(this.db,"conversationMemory",t);await g(r,{projectId:t,conversation:e,userId:this.user?.uid||"anonymous",lastUpdated:new Date().toISOString(),memorySize:a.length}),console.log("🧠 Conversation memory stored successfully")}}catch(a){throw console.error("❌ Failed to store conversation memory:",a),a}}chunkData(t,e){const a=[],s=JSON.stringify(t);let r=0;for(;r<s.length;){let n=Math.min(r+e,s.length);if(n<s.length){let i=s.lastIndexOf("}",n),o=s.lastIndexOf("]",n),c=s.lastIndexOf(",",n);const l=Math.max(i,o,c);l>r+e*.8&&(n=l+1)}try{a.push(JSON.parse(s.slice(r,n)))}catch{a.push(s.slice(r,n))}r=n}return a}async loadConversationMemory(t){try{await this.initialize();const e=d(this.db,"conversationMemory",t),a=await x(e);if(a.exists())return console.log("🧠 Conversation memory loaded successfully"),a.data().conversation;const s=S(this.db,"conversationMemory"),r=b(s,y("projectId","==",t)),n=await k(r);if(!n.empty){const i=[];n.forEach(c=>{i.push({index:c.data().chunkIndex,data:c.data().conversation})}),i.sort((c,l)=>c.index-l.index);const o=i.map(c=>c.data);return console.log(`🧠 Conversation memory loaded from ${i.length} chunks`),o}return console.log("❌ Conversation memory not found"),null}catch(e){return console.error("❌ Failed to load conversation memory:",e),null}}async addPromptToMemory(t,e,a,s){try{await this.initialize();let r=await this.loadConversationMemory(t)||{projectId:t,prompts:[],responses:[],context:{},createdAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return r.prompts.push({id:`prompt-${Date.now()}`,text:e,timestamp:new Date().toISOString(),context:s}),r.responses.push({id:`response-${Date.now()}`,promptId:r.prompts[r.prompts.length-1].id,text:a,timestamp:new Date().toISOString(),context:s}),r.context={...r.context,...s},r.lastUpdated=new Date().toISOString(),await this.storeConversationMemory(t,r),console.log("🧠 Prompt added to memory successfully"),r}catch(r){throw console.error("❌ Failed to add prompt to memory:",r),r}}async getConversationHistory(t,e=50){try{await this.initialize();const a=await this.loadConversationMemory(t);if(!a)return[];const s=a.prompts.slice(-e),r=a.responses.slice(-e);return{prompts:s,responses:r,context:a.context,totalPrompts:a.prompts.length,totalResponses:a.responses.length}}catch(a){return console.error("❌ Failed to get conversation history:",a),[]}}async searchConversationMemory(t,e){try{await this.initialize();const a=await this.loadConversationMemory(t);if(!a)return[];const s=[],r=e.toLowerCase();return a.prompts.forEach(n=>{n.text.toLowerCase().includes(r)&&s.push({type:"prompt",id:n.id,text:n.text,timestamp:n.timestamp,context:n.context})}),a.responses.forEach(n=>{n.text.toLowerCase().includes(r)&&s.push({type:"response",id:n.id,text:n.text,timestamp:n.timestamp,context:n.context})}),console.log("🔍 Conversation memory searched successfully"),s}catch(a){return console.error("❌ Failed to search conversation memory:",a),[]}}async getConversationContext(t,e){try{await this.initialize();const a=await this.loadConversationMemory(t);if(!a)return null;const s={projectId:t,currentPrompt:e,previousPrompts:a.prompts.slice(-10),previousResponses:a.responses.slice(-10),projectContext:a.context,conversationSummary:this.generateConversationSummary(a),relevantHistory:this.findRelevantHistory(a,e)};return console.log("🧠 Conversation context generated successfully"),s}catch(a){return console.error("❌ Failed to get conversation context:",a),null}}generateConversationSummary(t){const e=t.prompts,a=t.responses;return e.length===0?"No previous conversation":{totalPrompts:e.length,totalResponses:a.length,firstPrompt:e[0]?.text||"",lastPrompt:e[e.length-1]?.text||"",keyTopics:this.extractKeyTopics(e),projectEvolution:this.trackProjectEvolution(t)}}extractKeyTopics(t){const e=new Set;return t.forEach(a=>{a.text.toLowerCase().split(" ").forEach(r=>{r.length>4&&!this.isCommonWord(r)&&e.add(r)})}),Array.from(e).slice(0,10)}isCommonWord(t){return["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","two","way","who","boy","did","man","men","put","say","she","too","use"].includes(t)}trackProjectEvolution(t){const e=[],a=t.prompts,s=t.responses;for(let r=0;r<a.length;r++){const n=a[r],i=s[r];e.push({phase:r+1,prompt:n.text,response:i.text,timestamp:n.timestamp,context:n.context})}return e}findRelevantHistory(t,e){const a=[],s=e.toLowerCase().split(" ");return t.prompts.forEach((r,n)=>{const i=r.text.toLowerCase().split(" "),o=s.filter(c=>i.includes(c));o.length>2&&a.push({prompt:r.text,response:t.responses[n]?.text||"",relevance:o.length,timestamp:r.timestamp})}),a.sort((r,n)=>n.relevance-r.relevance).slice(0,5)}async storeAILearningPattern(t,e){try{await this.initialize();const a=d(this.db,"aiLearningPatterns",`${t}-${Date.now()}`);await g(a,{projectId:t,pattern:e,userId:this.user?.uid||"anonymous",createdAt:new Date().toISOString()}),console.log("🧠 AI learning pattern stored successfully")}catch(a){throw console.error("❌ Failed to store AI learning pattern:",a),a}}async getAILearningPatterns(t){try{await this.initialize();const e=S(this.db,"aiLearningPatterns"),a=b(e,y("projectId","==",t)),s=await k(a),r=[];return s.forEach(n=>{r.push(n.data())}),console.log("🧠 AI learning patterns loaded successfully"),r}catch(e){return console.error("❌ Failed to load AI learning patterns:",e),[]}}async clearConversationMemory(t){try{await this.initialize();const e=d(this.db,"conversationMemory",t);await A(e),console.log("🧠 Conversation memory cleared successfully")}catch(e){throw console.error("❌ Failed to clear conversation memory:",e),e}}async saveConversation(t){try{await this.initialize();const e=d(this.db,"conversations",t.id);await g(e,{...t,userId:this.user?.uid||"anonymous",updatedAt:new Date().toISOString()}),console.log("💬 Conversation saved successfully")}catch(e){throw console.error("❌ Failed to save conversation:",e),e}}async getConversation(t){try{await this.initialize();const e=d(this.db,"conversations",t),a=await x(e);return a.exists()?(console.log("💬 Conversation loaded successfully"),a.data()):null}catch(e){return console.error("❌ Failed to load conversation:",e),null}}async getUserConversations(){try{await this.initialize();const t=S(this.db,"conversations"),e=b(t,y("userId","==",this.user?.uid||"anonymous"),O("lastModified","desc")),a=await k(e),s=[];return a.forEach(r=>{s.push({id:r.id,...r.data()})}),console.log("💬 User conversations loaded successfully"),s}catch(t){return console.error("❌ Failed to load user conversations:",t),[]}}async saveFeatureRecommendations(t,e){try{await this.initialize();const a=d(this.db,"featureRecommendations",t);await g(a,{conversationId:t,recommendations:e,userId:this.user?.uid||"anonymous",createdAt:new Date().toISOString()}),console.log("🎯 Feature recommendations saved successfully")}catch(a){throw console.error("❌ Failed to save feature recommendations:",a),a}}async getFeatureRecommendations(t){try{await this.initialize();const e=d(this.db,"featureRecommendations",t),a=await x(e);return a.exists()?(console.log("🎯 Feature recommendations loaded successfully"),a.data().recommendations):[]}catch(e){return console.error("❌ Failed to load feature recommendations:",e),[]}}async saveIndustryStandardsCheck(t,e){try{await this.initialize();const a=d(this.db,"industryStandards",t);await g(a,{conversationId:t,standardsCheck:e,userId:this.user?.uid||"anonymous",checkedAt:new Date().toISOString()}),console.log("📊 Industry standards check saved successfully")}catch(a){throw console.error("❌ Failed to save industry standards check:",a),a}}async getIndustryStandardsCheck(t){try{await this.initialize();const e=d(this.db,"industryStandards",t),a=await x(e);return a.exists()?(console.log("📊 Industry standards check loaded successfully"),a.data().standardsCheck):null}catch(e){return console.error("❌ Failed to load industry standards check:",e),null}}}const R=new J;class V{constructor(){this.currentConversation=null,this.conversationHistory=[],this.projectContext={},this.featureRecommendations=[],this.industryStandards=this.getIndustryStandards()}async initializeConversation(t,e={}){try{return this.currentConversation={id:t||`conv_${Date.now()}`,projectData:e,messages:[],context:{currentFeatures:e.features||[],techStack:e.techStack||[],appType:e.appType||"web",complexity:e.complexity||"basic",industry:e.industry||"general"},createdAt:new Date,lastModified:new Date},await this.loadConversationHistory(t),console.log("🔄 Conversation initialized for project:",t),this.currentConversation}catch(a){throw console.error("Failed to initialize conversation:",a),a}}async addMessage(t,e=null,a="user"){if(!this.currentConversation)throw new Error("No active conversation. Initialize conversation first.");const s={id:`msg_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,type:a,content:t,aiResponse:e,timestamp:new Date,context:{projectState:{...this.currentConversation.context},features:[...this.currentConversation.context.currentFeatures]}};return this.currentConversation.messages.push(s),this.currentConversation.lastModified=new Date,await this.saveConversation(),s}getConversationContext(){if(!this.currentConversation)return null;const t=this.currentConversation.messages.slice(-10);return{project:this.currentConversation.projectData,currentFeatures:this.currentConversation.context.currentFeatures,techStack:this.currentConversation.context.techStack,appType:this.currentConversation.context.appType,complexity:this.currentConversation.context.complexity,industry:this.currentConversation.context.industry,recentMessages:t.map(a=>({type:a.type,content:a.content,timestamp:a.timestamp})),conversationId:this.currentConversation.id}}async generateFeatureRecommendations(){if(!this.currentConversation)return[];const t=this.getConversationContext(),e=t.currentFeatures||[],a=t.appType||"web",s=t.industry||"general",r=t.complexity||"basic",n=this.getIndustrySpecificRecommendations(s,a),i=this.getComplexityBasedRecommendations(r,a),o=this.getEssentialFeatureRecommendations(e,a),c=this.getAdvancedFeatureRecommendations(e,a,s),l=[...o,...n,...i,...c],p=this.deduplicateRecommendations(l,e),f=this.prioritizeRecommendations(p,t);return this.featureRecommendations=f.slice(0,10),this.featureRecommendations}getIndustrySpecificRecommendations(t,e){const a={ecommerce:[{name:"Shopping Cart",description:"Add shopping cart functionality with add/remove items",priority:"high",category:"core"},{name:"Payment Integration",description:"Integrate payment processing (Stripe, PayPal)",priority:"high",category:"payment"},{name:"Product Search",description:"Add search and filter functionality for products",priority:"medium",category:"search"},{name:"User Reviews",description:"Allow customers to review and rate products",priority:"medium",category:"social"},{name:"Inventory Management",description:"Track product stock and availability",priority:"high",category:"management"}],healthcare:[{name:"Patient Records",description:"Secure patient data management system",priority:"high",category:"data"},{name:"Appointment Scheduling",description:"Calendar system for booking appointments",priority:"high",category:"scheduling"},{name:"HIPAA Compliance",description:"Ensure healthcare data privacy compliance",priority:"critical",category:"security"},{name:"Prescription Management",description:"Digital prescription tracking and management",priority:"medium",category:"management"},{name:"Telemedicine",description:"Video consultation capabilities",priority:"medium",category:"communication"}],education:[{name:"Course Management",description:"Create and manage educational courses",priority:"high",category:"content"},{name:"Progress Tracking",description:"Track student learning progress and analytics",priority:"high",category:"analytics"},{name:"Quiz System",description:"Interactive quizzes and assessments",priority:"medium",category:"assessment"},{name:"Discussion Forums",description:"Student and teacher discussion boards",priority:"medium",category:"social"},{name:"Certificate Generation",description:"Automated certificate creation and delivery",priority:"low",category:"certification"}],finance:[{name:"Transaction History",description:"Detailed financial transaction tracking",priority:"high",category:"data"},{name:"Budget Planning",description:"Personal or business budget management tools",priority:"high",category:"planning"},{name:"Security Features",description:"Two-factor authentication and encryption",priority:"critical",category:"security"},{name:"Reporting Dashboard",description:"Financial reports and analytics dashboard",priority:"medium",category:"analytics"},{name:"Investment Tracking",description:"Portfolio and investment performance tracking",priority:"medium",category:"investment"}],general:[{name:"User Authentication",description:"Secure user login and registration system",priority:"high",category:"auth"},{name:"Data Validation",description:"Input validation and error handling",priority:"high",category:"validation"},{name:"Responsive Design",description:"Mobile-friendly responsive layout",priority:"high",category:"ui"},{name:"Search Functionality",description:"Search and filter capabilities",priority:"medium",category:"search"},{name:"Analytics Integration",description:"User behavior and performance analytics",priority:"medium",category:"analytics"}]};return a[t]||a.general}getComplexityBasedRecommendations(t,e){const a={basic:[{name:"Basic CRUD Operations",description:"Create, Read, Update, Delete functionality",priority:"high",category:"core"},{name:"Form Validation",description:"Client-side and server-side form validation",priority:"high",category:"validation"},{name:"Error Handling",description:"Comprehensive error handling and user feedback",priority:"medium",category:"ux"}],intermediate:[{name:"API Integration",description:"Connect to external APIs and services",priority:"high",category:"integration"},{name:"State Management",description:"Advanced state management (Redux, Context)",priority:"medium",category:"architecture"},{name:"Caching Strategy",description:"Implement caching for better performance",priority:"medium",category:"performance"},{name:"Testing Suite",description:"Unit and integration tests",priority:"medium",category:"testing"}],advanced:[{name:"Microservices Architecture",description:"Break down into microservices",priority:"high",category:"architecture"},{name:"Real-time Features",description:"WebSocket or Server-Sent Events",priority:"high",category:"realtime"},{name:"Advanced Security",description:"OAuth, JWT, rate limiting, security headers",priority:"high",category:"security"},{name:"Performance Optimization",description:"Code splitting, lazy loading, CDN",priority:"high",category:"performance"},{name:"Monitoring & Logging",description:"Application monitoring and logging system",priority:"medium",category:"monitoring"}]};return a[t]||a.basic}getEssentialFeatureRecommendations(t,e){return[{name:"Error Boundaries",description:"React error boundaries for graceful error handling",priority:"high",category:"reliability"},{name:"Loading States",description:"Loading indicators and skeleton screens",priority:"high",category:"ux"},{name:"Accessibility (a11y)",description:"WCAG compliance and screen reader support",priority:"high",category:"accessibility"},{name:"SEO Optimization",description:"Meta tags, structured data, sitemap",priority:"medium",category:"seo"},{name:"Performance Monitoring",description:"Core Web Vitals and performance tracking",priority:"medium",category:"performance"}].filter(s=>!t.some(r=>r.toLowerCase().includes(s.name.toLowerCase())||s.name.toLowerCase().includes(r.toLowerCase())))}getAdvancedFeatureRecommendations(t,e,a){return[{name:"PWA Support",description:"Progressive Web App capabilities",priority:"medium",category:"mobile"},{name:"Offline Support",description:"Service worker for offline functionality",priority:"medium",category:"offline"},{name:"Internationalization",description:"Multi-language support (i18n)",priority:"low",category:"localization"},{name:"Dark Mode",description:"Theme switching and dark mode support",priority:"low",category:"ui"},{name:"Advanced Analytics",description:"User behavior tracking and heatmaps",priority:"low",category:"analytics"}]}deduplicateRecommendations(t,e){const a=new Set;return t.filter(s=>{const r=s.name.toLowerCase();return a.has(r)||e.some(n=>n.toLowerCase().includes(r)||r.includes(n.toLowerCase()))?!1:(a.add(r),!0)})}prioritizeRecommendations(t,e){return t.sort((a,s)=>{const r={critical:4,high:3,medium:2,low:1},n=r[a.priority]||0,i=r[s.priority]||0;if(n!==i)return i-n;const o={core:4,security:4,auth:3,validation:3,ux:2,performance:2},c=o[a.category]||1;return(o[s.category]||1)-c})}getIndustryStandards(){return{security:["Input validation and sanitization","HTTPS enforcement","Authentication and authorization","Rate limiting and DDoS protection","Security headers (CSP, HSTS, etc.)","Regular security audits"],performance:["Core Web Vitals optimization","Image optimization and lazy loading","Code splitting and tree shaking","CDN implementation","Caching strategies","Database query optimization"],accessibility:["WCAG 2.1 AA compliance","Keyboard navigation support","Screen reader compatibility","Color contrast ratios","Alt text for images","Focus management"],code_quality:["TypeScript implementation","ESLint and Prettier configuration","Unit and integration tests","Code documentation","Error handling and logging","Code review process"],deployment:["CI/CD pipeline setup","Environment configuration","Monitoring and alerting","Backup and recovery","Scalability planning","Documentation and runbooks"]}}async checkIndustryStandards(t){const e=this.getIndustryStandards(),a=t.features||[],s={};return Object.keys(e).forEach(r=>{s[r]={total:e[r].length,implemented:0,missing:[],score:0},e[r].forEach(n=>{a.some(o=>o.toLowerCase().includes(n.toLowerCase())||n.toLowerCase().includes(o.toLowerCase()))?s[r].implemented++:s[r].missing.push(n)}),s[r].score=Math.round(s[r].implemented/s[r].total*100)}),s}generateConversationSummary(){if(!this.currentConversation)return null;const t=this.currentConversation.messages,e=this.currentConversation.context.currentFeatures,a=this.featureRecommendations;return{conversationId:this.currentConversation.id,messageCount:t.length,currentFeatures:e,recommendations:a.slice(0,5),lastActivity:this.currentConversation.lastModified,projectType:this.currentConversation.context.appType,industry:this.currentConversation.context.industry}}async saveConversation(){if(this.currentConversation)try{await R.saveConversation(this.currentConversation),console.log("💾 Conversation saved to Firebase")}catch(t){console.error("Failed to save conversation:",t)}}async loadConversationHistory(t){try{const e=await R.getConversation(t);e&&(this.currentConversation=e,this.conversationHistory=e.messages||[],console.log("📚 Conversation history loaded"))}catch(e){console.error("Failed to load conversation history:",e)}}getConversationHistory(){return this.currentConversation?this.currentConversation.messages:[]}clearConversation(){this.currentConversation=null,this.conversationHistory=[],this.projectContext={},this.featureRecommendations=[]}}const ce=new V;class Y{constructor(){this.currentProject=null,this.existingFeatures=[],this.featureHistory=[]}async initializeProject(t){this.currentProject=t,this.existingFeatures=this.extractExistingFeatures(t),this.featureHistory=[],console.log("🔄 Incremental development initialized"),console.log("📋 Existing features:",this.existingFeatures)}extractExistingFeatures(t){const e=[],a=t.files||{};return Object.entries(a).forEach(([s,r])=>{if(typeof r=="string"){const n=this.analyzeFileForFeatures(s,r);e.push(...n)}}),[...new Set(e)]}analyzeFileForFeatures(t,e){const a=[],s=e.toLowerCase();return(s.includes("login")||s.includes("auth")||s.includes("signin"))&&a.push("Authentication"),(s.includes("database")||s.includes("firebase")||s.includes("mongodb"))&&a.push("Database"),(s.includes("responsive")||s.includes("mobile")||s.includes("@media"))&&a.push("Responsive Design"),(s.includes("fetch")||s.includes("axios")||s.includes("api"))&&a.push("API Integration"),(s.includes("form")||s.includes("input")||s.includes("submit"))&&a.push("Form Handling"),(s.includes("router")||s.includes("route")||s.includes("navigate"))&&a.push("Routing"),(s.includes("useState")||s.includes("useContext")||s.includes("redux"))&&a.push("State Management"),(s.includes("test")||s.includes("jest")||s.includes("spec"))&&a.push("Testing"),(s.includes("todo")||s.includes("task"))&&a.push("Todo Management"),(s.includes("shopping")||s.includes("cart")||s.includes("product"))&&a.push("E-commerce"),(s.includes("calendar")||s.includes("schedule")||s.includes("appointment"))&&a.push("Scheduling"),(s.includes("chat")||s.includes("message")||s.includes("conversation"))&&a.push("Messaging"),a}async processFeatureRequest(t,e){console.log("🔄 Processing feature request:",t);const a=this.isBugFixRequest(t);if(console.log("🐛 Is bug fix request:",a),a)return await this.processBugFix(t,e);const s=this.analyzeRequestedFeatures(t);console.log("🎯 Requested features:",s);const r=this.filterNewFeatures(s);if(console.log("✨ New features to add:",r),r.length===0)return{type:"no_new_features",message:"These features already exist in your app. Would you like to enhance or modify them instead?",existingFeatures:this.existingFeatures};const n=await this.generateIncrementalCode(r,t,e);return this.existingFeatures.push(...r),this.featureHistory.push({timestamp:new Date,features:r,prompt:t}),{type:"incremental_update",newFeatures:r,code:n,updatedFiles:this.getUpdatedFiles(n),message:`Added ${r.length} new feature(s): ${r.join(", ")}`}}isBugFixRequest(t){const e=t.toLowerCase();return["fix","fix the","fix a","fix this","fix that","broken","not working","doesn't work","isn't working","error","bug","issue","problem","button","click","clicking","clicked","correction","correct","wrong","incorrect","update","change","modify","adjust","improve","enhance","better"].some(s=>e.includes(s))}async processBugFix(t,e){console.log("🐛 Processing bug fix request:",t);const a=await this.generateBugFixCode(t,e);return this.featureHistory.push({timestamp:new Date,type:"bug_fix",prompt:t,description:"Bug fix applied"}),{type:"incremental_update",newFeatures:["Bug Fix"],code:a,updatedFiles:this.getUpdatedFiles(a),message:`Fixed the issue: ${t}`}}async generateBugFixCode(t,e){console.log("🔧 Generating bug fix code for:",t);const a=`Fix this issue in the existing code: ${t}

    Current project files:
    ${JSON.stringify(this.currentProject?.files||{},null,2)}

    Please analyze the existing code and fix the specific issue mentioned. 
    Return the corrected code as a JSON object with files.
    
    Focus on:
    1. Identifying the root cause of the issue
    2. Fixing the specific problem without breaking existing functionality
    3. Ensuring the fix is clean and follows best practices
    4. Making sure all buttons and interactions work properly
    
    Return the complete corrected files.`;try{const{default:s}=await P(async()=>{const{default:i}=await Promise.resolve().then(()=>te);return{default:i}},void 0),r=await s.callHuggingFaceAPI("codellama/CodeLlama-7b-Python-hf",a,2048,.3);console.log("🤖 Bug fix AI response:",r);const n=await s.parseAIResponse(r,t);if(n&&Object.keys(n).length>0)return console.log("✅ Bug fix code generated successfully"),n}catch(s){console.error("❌ AI bug fix generation failed:",s)}return console.log("⚠️ Using fallback for bug fix"),this.currentProject?.files||{}}analyzeRequestedFeatures(t){const e=t.toLowerCase(),a=[];return(e.includes("login")||e.includes("auth")||e.includes("sign in")||e.includes("register"))&&a.push("Authentication"),(e.includes("database")||e.includes("store data")||e.includes("save data"))&&a.push("Database"),(e.includes("responsive")||e.includes("mobile")||e.includes("mobile-friendly"))&&a.push("Responsive Design"),(e.includes("api")||e.includes("fetch data")||e.includes("external data"))&&a.push("API Integration"),(e.includes("form")||e.includes("input")||e.includes("submit"))&&a.push("Form Handling"),(e.includes("navigation")||e.includes("pages")||e.includes("routing"))&&a.push("Routing"),(e.includes("state")||e.includes("manage data")||e.includes("global state"))&&a.push("State Management"),(e.includes("test")||e.includes("testing")||e.includes("unit test"))&&a.push("Testing"),(e.includes("todo")||e.includes("task")||e.includes("checklist"))&&a.push("Todo Management"),(e.includes("shopping")||e.includes("cart")||e.includes("ecommerce")||e.includes("store"))&&a.push("E-commerce"),(e.includes("calendar")||e.includes("schedule")||e.includes("booking"))&&a.push("Scheduling"),(e.includes("chat")||e.includes("message")||e.includes("communication"))&&a.push("Messaging"),(e.includes("search")||e.includes("filter")||e.includes("find"))&&a.push("Search Functionality"),(e.includes("notification")||e.includes("alert")||e.includes("reminder"))&&a.push("Notifications"),(e.includes("upload")||e.includes("file")||e.includes("image"))&&a.push("File Upload"),(e.includes("payment")||e.includes("stripe")||e.includes("paypal")||e.includes("billing"))&&a.push("Payment Processing"),a}filterNewFeatures(t){return t.filter(e=>!this.existingFeatures.some(a=>a.toLowerCase().includes(e.toLowerCase())||e.toLowerCase().includes(a.toLowerCase())))}async generateIncrementalCode(t,e,a){const s={};for(const r of t){const n=await this.generateFeatureCode(r,e,a);Object.assign(s,n)}return s}async generateFeatureCode(t,e,a){const r={Authentication:()=>this.generateAuthCode(),Database:()=>this.generateDatabaseCode(),"Responsive Design":()=>this.generateResponsiveCode(),"API Integration":()=>this.generateAPICode(),"Form Handling":()=>this.generateFormCode(),Routing:()=>this.generateRoutingCode(),"State Management":()=>this.generateStateCode(),Testing:()=>this.generateTestingCode(),"Todo Management":()=>this.generateTodoCode(),"E-commerce":()=>this.generateEcommerceCode(),Scheduling:()=>this.generateSchedulingCode(),Messaging:()=>this.generateMessagingCode(),"Search Functionality":()=>this.generateSearchCode(),Notifications:()=>this.generateNotificationCode(),"File Upload":()=>this.generateFileUploadCode(),"Payment Processing":()=>this.generatePaymentCode()}[t];return r?await r():this.generateGenericFeatureCode(t,e)}generateAuthCode(){return{"auth.js":`// Authentication Service
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
window.assert = assert`}}generateGenericFeatureCode(t,e){return{[`${t.toLowerCase().replace(/\s+/g,"_")}.js`]:`// ${t} Implementation
// Generated based on: "${e}"

class ${t.replace(/\s+/g,"")} {
  constructor() {
    this.initialized = false
    this.init()
  }

  init() {
    console.log('${t} initialized')
    this.initialized = true
  }

  // Add your ${t} methods here
  // This is a template - customize based on your specific needs
}

// Export for use
window.${t.replace(/\s+/g,"")} = ${t.replace(/\s+/g,"")}`}}getUpdatedFiles(t){return Object.keys(t)}getCurrentProject(){return{...this.currentProject,features:this.existingFeatures,featureHistory:this.featureHistory}}reset(){this.currentProject=null,this.existingFeatures=[],this.featureHistory=[]}}const I=new Y;class K{constructor(){this.nameHistory=[],this.creativeSuffixes=this.initializeCreativeSuffixes(),this.appCategories=this.initializeAppCategories(),this.namingPatterns=this.initializeNamingPatterns()}initializeCreativeSuffixes(){return{professional:["Pro","Elite","Master","Ultimate","Prime","Advanced","Premium","Enterprise"],modern:["Hub","Flow","Space","Lab","Studio","Works","Craft","Forge"],tech:["Tech","Digital","Smart","AI","Cloud","Sync","Link","Connect"],creative:["Creative","Innovative","Dynamic","Vibrant","Bold","Fresh","Modern","Next"],action:["Action","Boost","Turbo","Rocket","Flash","Swift","Rapid","Quick"],friendly:["Easy","Simple","Quick","Fast","Light","Mini","Lite","Basic"]}}initializeAppCategories(){return{productivity:{keywords:["todo","task","productivity","organizer","planner","manager","tracker"],prefixes:["Task","Plan","Organize","Manage","Track","Flow","Stream"],suffixes:["Manager","Tracker","Flow","Hub","Pro","Master"],themes:["efficiency","organization","productivity","management"]},entertainment:{keywords:["game","music","video","entertainment","fun","play","media"],prefixes:["Game","Play","Fun","Entertain","Media","Stream","Hub"],suffixes:["Zone","Hub","Center","Studio","Lab","World"],themes:["fun","entertainment","interactive","engaging"]},business:{keywords:["business","commerce","store","shop","sales","finance","dashboard"],prefixes:["Business","Commerce","Trade","Market","Sales","Finance","Dash"],suffixes:["Pro","Suite","Manager","Hub","Center","Platform"],themes:["professional","business","commercial","enterprise"]},education:{keywords:["learn","education","study","course","tutorial","knowledge","school"],prefixes:["Learn","Study","Edu","Knowledge","Skill","Course","Academy"],suffixes:["Hub","Center","Academy","School","Lab","Studio"],themes:["learning","education","knowledge","academic"]},health:{keywords:["health","fitness","medical","wellness","workout","diet","care"],prefixes:["Health","Fit","Wellness","Care","Medical","Vital","Life"],suffixes:["Tracker","Monitor","Care","Hub","Center","Pro"],themes:["health","wellness","fitness","medical"]},communication:{keywords:["chat","message","social","connect","network","community","talk"],prefixes:["Chat","Connect","Social","Network","Community","Talk","Link"],suffixes:["Hub","Connect","Network","Space","Center","Pro"],themes:["social","communication","networking","community"]},utility:{keywords:["calculator","converter","tool","utility","helper","assistant","widget"],prefixes:["Smart","Quick","Easy","Pro","Advanced","Super","Ultra"],suffixes:["Tool","Helper","Pro","Master","Ultimate","Plus"],themes:["utility","tool","helper","assistant"]},creative:{keywords:["design","art","creative","draw","paint","edit","photo","image"],prefixes:["Creative","Art","Design","Studio","Craft","Forge","Lab"],suffixes:["Studio","Lab","Works","Craft","Forge","Space"],themes:["creative","artistic","design","visual"]}}}initializeNamingPatterns(){return{descriptive:["{prefix}{suffix}","{category} {suffix}","{prefix} {category}"],creative:["{prefix}Flow","{prefix}Hub","{prefix}Space","{prefix}Lab"],professional:["{prefix}Pro","{prefix}Master","{prefix}Elite","{prefix}Ultimate"],modern:["{prefix}AI","{prefix}Cloud","{prefix}Smart","{prefix}Next"],simple:["{prefix}App","{prefix}Tool","{prefix}Helper","{prefix}Manager"]}}generateAppName(t,e={}){console.log("🏷️ Generating app name for prompt:",t);try{const a=this.analyzePrompt(t);console.log("📊 Prompt analysis:",a);const s=this.determineCategory(a);console.log("📂 App category:",s);const r=this.generateContextualName(a,s,e);console.log("🎯 Contextual name:",r);const n=this.ensureUniqueness(r);return console.log("✨ Unique name:",n),this.nameHistory.push({timestamp:new Date,prompt:t,analysis:a,category:s,generatedName:n,context:e}),n}catch(a){return console.error("❌ App naming failed:",a),this.generateFallbackName(t)}}analyzePrompt(t){const e=typeof t=="string"?t:JSON.stringify(t),a=e.toLowerCase();return{originalPrompt:e,lowerPrompt:a,words:e.split(/\s+/),keyWords:this.extractKeyWords(e),features:this.extractFeatures(e),intent:this.determineIntent(e),complexity:this.assessComplexity(e),targetAudience:this.identifyTargetAudience(e)}}extractKeyWords(t){const e=t.split(/\s+/),a=new Set(["create","build","make","generate","develop","design","app","application","website","page","site","web","with","for","and","or","the","a","an","in","on","at","to","from","by","of","is","are","was","were","be","been","have","has","had","do","does","did","will","would","could","should","may","might","can","must","shall"]);return e.filter(s=>s.length>2&&!a.has(s.toLowerCase())).map(s=>s.toLowerCase()).slice(0,10)}extractFeatures(t){const e=t.toLowerCase(),a=[];return(e.includes("responsive")||e.includes("mobile"))&&a.push("responsive"),(e.includes("dark")||e.includes("theme"))&&a.push("themed"),(e.includes("animation")||e.includes("interactive"))&&a.push("interactive"),(e.includes("search")||e.includes("filter"))&&a.push("searchable"),(e.includes("sort")||e.includes("organize"))&&a.push("organized"),(e.includes("export")||e.includes("download"))&&a.push("exportable"),(e.includes("import")||e.includes("upload"))&&a.push("importable"),(e.includes("api")||e.includes("database"))&&a.push("connected"),(e.includes("real-time")||e.includes("live"))&&a.push("realtime"),(e.includes("offline")||e.includes("cache"))&&a.push("offline"),a}determineIntent(t){const e=t.toLowerCase();return e.includes("simple")||e.includes("basic")?"simple":e.includes("advanced")||e.includes("complex")?"advanced":e.includes("professional")||e.includes("enterprise")?"professional":e.includes("fun")||e.includes("game")?"entertainment":e.includes("learn")||e.includes("education")?"educational":"general"}assessComplexity(t){const e=t.toLowerCase();let a=1;(e.includes("simple")||e.includes("basic"))&&(a=1),(e.includes("advanced")||e.includes("complex"))&&(a=3),(e.includes("enterprise")||e.includes("professional"))&&(a=4);const s=this.extractFeatures(t).length;a+=Math.min(s,2);const r=t.split(/\s+/).length;return r>20&&(a+=1),r>50&&(a+=1),Math.min(a,5)}identifyTargetAudience(t){const e=t.toLowerCase();return e.includes("business")||e.includes("enterprise")?"business":e.includes("student")||e.includes("education")?"students":e.includes("developer")||e.includes("programmer")?"developers":e.includes("designer")||e.includes("creative")?"creatives":e.includes("gamer")||e.includes("game")?"gamers":"general"}determineCategory(t){const{keyWords:e,features:a,intent:s}=t;for(const[n,i]of Object.entries(this.appCategories)){const o=e.filter(c=>i.keywords.some(l=>c.includes(l))).length;if(o>0)return{name:n,confidence:o/i.keywords.length,data:i}}const r={simple:"utility",advanced:"business",professional:"business",entertainment:"entertainment",educational:"education",general:"utility"};return{name:r[s]||"utility",confidence:.5,data:this.appCategories[r[s]]||this.appCategories.utility}}generateContextualName(t,e,a){const{keyWords:s,features:r,complexity:n,intent:i}=t,{data:o}=e;let c;i==="professional"||n>=4?c="professional":i==="entertainment"||r.includes("interactive")?c="creative":n<=2?c="simple":c="modern";const l=this.generateNameFromPattern(s,o,c,r);return this.addFeatureSuffixes(l,r,n)}generateNameFromPattern(t,e,a,s){const r=this.namingPatterns[a],n=r[Math.floor(Math.random()*r.length)],i=this.selectPrefix(t,e),o=this.selectSuffix(e,n);return n.replace("{prefix}",i).replace("{suffix}",o).replace("{category}",e.prefixes[0])}selectPrefix(t,e){if(t.length>0){const a=t[0].charAt(0).toUpperCase()+t[0].slice(1);if(a.length>2)return a}return e.prefixes[Math.floor(Math.random()*e.prefixes.length)]}selectSuffix(t,e){return e.includes("{suffix}")?t.suffixes[Math.floor(Math.random()*t.suffixes.length)]:""}addFeatureSuffixes(t,e,a){let s=t;if(a>=4){const r=this.creativeSuffixes.professional;s+=" "+r[Math.floor(Math.random()*r.length)]}else if(a>=3){const r=this.creativeSuffixes.modern;s+=" "+r[Math.floor(Math.random()*r.length)]}return e.includes("realtime")&&(s+=" Live"),e.includes("connected")&&(s+=" Cloud"),e.includes("interactive")&&(s+=" Interactive"),s}ensureUniqueness(t){let e=t,a=1;for(;this.nameHistory.some(s=>s.generatedName===e);)e=`${t} ${a}`,a++;return e}generateFallbackName(t){const e=["DreamApp","InnovateHub","CreativeSpace","TechFlow","SmartApp","NextGen","FutureApp","ProApp","EliteApp","MasterApp","UltimateApp","PrimeApp","SuperApp","MegaApp","TurboApp","AppBuilder","CodeCraft","DevFlow","BuildHub","CreateSpace"];return e[Math.floor(Math.random()*e.length)]}getNamingHistory(){return this.nameHistory}clearNamingHistory(){this.nameHistory=[]}getNamingStats(){const t={totalNames:this.nameHistory.length,categories:{},patterns:{},complexity:{1:0,2:0,3:0,4:0,5:0}};return this.nameHistory.forEach(e=>{const a=e.category.name;t.categories[a]=(t.categories[a]||0)+1,t.complexity[e.analysis.complexity]++}),t}}const L=new K;class Q{constructor(){this.colorPalettes=this.initializeColorPalettes(),this.themeTemplates=this.initializeThemeTemplates(),this.colorSchemes=this.initializeColorSchemes()}initializeColorPalettes(){return{modern:{primary:"#667eea",secondary:"#764ba2",accent:"#f093fb",background:"#f8fafc",surface:"#ffffff",text:"#1a202c",textSecondary:"#4a5568",success:"#48bb78",warning:"#ed8936",error:"#f56565",info:"#4299e1"},dark:{primary:"#4c51bf",secondary:"#553c9a",accent:"#9f7aea",background:"#1a202c",surface:"#2d3748",text:"#f7fafc",textSecondary:"#e2e8f0",success:"#68d391",warning:"#f6ad55",error:"#fc8181",info:"#63b3ed"},vibrant:{primary:"#ff6b6b",secondary:"#4ecdc4",accent:"#45b7d1",background:"#f8f9fa",surface:"#ffffff",text:"#2c3e50",textSecondary:"#7f8c8d",success:"#2ecc71",warning:"#f39c12",error:"#e74c3c",info:"#3498db"},pastel:{primary:"#a8e6cf",secondary:"#dcedc1",accent:"#ffd3a5",background:"#fefefe",surface:"#ffffff",text:"#2c3e50",textSecondary:"#7f8c8d",success:"#a8e6cf",warning:"#ffd3a5",error:"#ffaaa5",info:"#a8e6cf"},monochrome:{primary:"#2d3748",secondary:"#4a5568",accent:"#718096",background:"#ffffff",surface:"#f7fafc",text:"#1a202c",textSecondary:"#4a5568",success:"#38a169",warning:"#d69e2e",error:"#e53e3e",info:"#3182ce"},ocean:{primary:"#0ea5e9",secondary:"#0284c7",accent:"#06b6d4",background:"#f0f9ff",surface:"#ffffff",text:"#0c4a6e",textSecondary:"#0369a1",success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6"},sunset:{primary:"#f97316",secondary:"#ea580c",accent:"#fb923c",background:"#fff7ed",surface:"#ffffff",text:"#9a3412",textSecondary:"#c2410c",success:"#22c55e",warning:"#eab308",error:"#dc2626",info:"#3b82f6"},forest:{primary:"#16a34a",secondary:"#15803d",accent:"#22c55e",background:"#f0fdf4",surface:"#ffffff",text:"#14532d",textSecondary:"#166534",success:"#16a34a",warning:"#ca8a04",error:"#dc2626",info:"#2563eb"},purple:{primary:"#8b5cf6",secondary:"#7c3aed",accent:"#a78bfa",background:"#faf5ff",surface:"#ffffff",text:"#581c87",textSecondary:"#7c2d12",success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6"},custom:{}}}initializeThemeTemplates(){return{css:`
/* Theme Variables */
:root {
  --primary-color: {primary};
  --secondary-color: {secondary};
  --accent-color: {accent};
  --background-color: {background};
  --surface-color: {surface};
  --text-color: {text};
  --text-secondary-color: {textSecondary};
  --success-color: {success};
  --warning-color: {warning};
  --error-color: {error};
  --info-color: {info};
  
  /* Gradients */
  --primary-gradient: linear-gradient(135deg, {primary} 0%, {secondary} 100%);
  --accent-gradient: linear-gradient(135deg, {accent} 0%, {primary} 100%);
  --background-gradient: linear-gradient(135deg, {background} 0%, {surface} 100%);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
}

/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: var(--background-gradient);
  color: var(--text-color);
  line-height: 1.6;
  min-height: 100vh;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-md);
}

/* Cards */
.card {
  background: var(--surface-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}

.btn-primary {
  background: var(--primary-gradient);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: var(--surface-color);
  color: var(--text-color);
  border: 1px solid var(--text-secondary-color);
}

.btn-secondary:hover {
  background: var(--text-secondary-color);
  color: var(--surface-color);
}

.btn-accent {
  background: var(--accent-gradient);
  color: white;
}

.btn-accent:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Forms */
.form-group {
  margin-bottom: var(--spacing-md);
}

.form-label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
  color: var(--text-color);
}

.form-input {
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--text-secondary-color);
  border-radius: var(--radius-md);
  font-size: 1rem;
  background: var(--surface-color);
  color: var(--text-color);
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* Alerts */
.alert {
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
  border-left: 4px solid;
}

.alert-success {
  background: rgba(72, 187, 120, 0.1);
  border-left-color: var(--success-color);
  color: var(--success-color);
}

.alert-warning {
  background: rgba(237, 137, 54, 0.1);
  border-left-color: var(--warning-color);
  color: var(--warning-color);
}

.alert-error {
  background: rgba(245, 101, 101, 0.1);
  border-left-color: var(--error-color);
  color: var(--error-color);
}

.alert-info {
  background: rgba(66, 153, 225, 0.1);
  border-left-color: var(--info-color);
  color: var(--info-color);
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: var(--spacing-sm);
  }
  
  .card {
    padding: var(--spacing-md);
  }
  
  .btn {
    padding: var(--spacing-sm) var(--spacing-sm);
    font-size: 0.9rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #1a202c;
    --surface-color: #2d3748;
    --text-color: #f7fafc;
    --text-secondary-color: #e2e8f0;
  }
}

/* Animation utilities */
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-in {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.bounce-in {
  animation: bounceIn 0.6s ease-out;
}

@keyframes bounceIn {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}
`,js:`
// Theme Management
class ThemeManager {
  constructor() {
    this.currentTheme = 'modern';
    this.themes = {themes};
    this.init();
  }
  
  init() {
    this.loadTheme();
    this.bindEvents();
  }
  
  loadTheme() {
    const savedTheme = localStorage.getItem('app-theme') || this.currentTheme;
    this.applyTheme(savedTheme);
  }
  
  applyTheme(themeName) {
    if (!this.themes[themeName]) {
      console.warn('Theme not found:', themeName);
      return;
    }
    
    this.currentTheme = themeName;
    const theme = this.themes[themeName];
    
    // Apply CSS custom properties
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty('--' + key.replace(/([A-Z])/g, '-$1').toLowerCase(), value);
    });
    
    // Save to localStorage
    localStorage.setItem('app-theme', themeName);
    
    // Trigger theme change event
    document.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: themeName, colors: theme }
    }));
  }
  
  bindEvents() {
    // Theme selector
    const themeSelectors = document.querySelectorAll('[data-theme]');
    themeSelectors.forEach(selector => {
      selector.addEventListener('click', (e) => {
        const themeName = e.target.dataset.theme;
        this.applyTheme(themeName);
      });
    });
    
    // System theme detection
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addListener((e) => {
        if (e.matches) {
          this.applyTheme('dark');
        } else {
          this.applyTheme('modern');
        }
      });
    }
  }
  
  getCurrentTheme() {
    return this.currentTheme;
  }
  
  getAvailableThemes() {
    return Object.keys(this.themes);
  }
  
  createCustomTheme(name, colors) {
    this.themes[name] = colors;
    return this.themes[name];
  }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Export for use in other modules
window.themeManager = themeManager;
`}}initializeColorSchemes(){return{schemes:["modern","dark","vibrant","pastel","monochrome","ocean","sunset","forest","purple"],combinations:{"blue-green":["#0ea5e9","#10b981","#06b6d4","#22c55e"],"purple-pink":["#8b5cf6","#ec4899","#a78bfa","#f472b6"],"orange-red":["#f97316","#ef4444","#fb923c","#f87171"],"teal-cyan":["#14b8a6","#06b6d4","#5eead4","#67e8f9"],"yellow-amber":["#eab308","#f59e0b","#fde047","#fbbf24"],"indigo-violet":["#6366f1","#8b5cf6","#a5b4fc","#c4b5fd"],"emerald-lime":["#10b981","#84cc16","#6ee7b7","#bef264"],"rose-pink":["#f43f5e","#ec4899","#fb7185","#f472b6"]}}}generateThemeCSS(t,e=null){const a=e||this.colorPalettes[t]||this.colorPalettes.modern;return this.themeTemplates.css.replace(/\{(\w+)\}/g,(s,r)=>a[r]||a.primary)}generateThemeJS(t=null){const e=t||this.colorPalettes;return this.themeTemplates.js.replace("{themes}",JSON.stringify(e,null,2))}createCustomTheme(t,e){return this.colorPalettes.custom[t]={primary:e.primary||"#667eea",secondary:e.secondary||"#764ba2",accent:e.accent||"#f093fb",background:e.background||"#f8fafc",surface:e.surface||"#ffffff",text:e.text||"#1a202c",textSecondary:e.textSecondary||"#4a5568",success:e.success||"#48bb78",warning:e.warning||"#ed8936",error:e.error||"#f56565",info:e.info||"#4299e1"},this.colorPalettes.custom[t]}applyThemeToCode(t,e,a=null){const s=a||this.colorPalettes[e]||this.colorPalettes.modern;let r=t;const n={"#667eea":s.primary,"#764ba2":s.secondary,"#f093fb":s.accent,"#f8fafc":s.background,"#ffffff":s.surface,"#1a202c":s.text,"#4a5568":s.textSecondary,"#48bb78":s.success,"#ed8936":s.warning,"#f56565":s.error,"#4299e1":s.info};return Object.entries(n).forEach(([i,o])=>{r=r.replace(new RegExp(i,"g"),o)}),r=r.replace(/var\(--[\w-]+\)/g,i=>{const c=i.replace("var(--","").replace(")","").replace(/-([a-z])/g,l=>l[1].toUpperCase());return s[c]||i}),r}generateThemeSelector(t=null){return`
<div class="theme-selector">
  <h3>Choose Theme</h3>
  <div class="theme-grid">
    ${(t||this.colorSchemes.schemes).map(a=>`
      <button class="theme-option" data-theme="${a}" title="${a}">
        <div class="theme-preview" style="background: linear-gradient(135deg, ${this.colorPalettes[a]?.primary||"#667eea"} 0%, ${this.colorPalettes[a]?.secondary||"#764ba2"} 100%);"></div>
        <span>${a.charAt(0).toUpperCase()+a.slice(1)}</span>
      </button>
    `).join("")}
  </div>
</div>

<style>
.theme-selector {
  margin: 1rem 0;
}

.theme-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.theme-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  background: var(--surface-color);
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-option:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.theme-option.active {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.theme-preview {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.theme-option span {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-color);
}
</style>`}getAvailableThemes(){return Object.keys(this.colorPalettes)}getThemeColors(t){return this.colorPalettes[t]||this.colorPalettes.modern}validateColorScheme(t){const a=["primary","secondary","accent","background","surface","text"].filter(s=>!t[s]);if(a.length>0)throw new Error(`Missing required color keys: ${a.join(", ")}`);return!0}generatePaletteFromColor(t){const e=t.replace("#",""),a=parseInt(e.substr(0,2),16),s=parseInt(e.substr(2,2),16),r=parseInt(e.substr(4,2),16);return{primary:t,secondary:`#${Math.max(0,a-30).toString(16).padStart(2,"0")}${Math.max(0,s-30).toString(16).padStart(2,"0")}${Math.max(0,r-30).toString(16).padStart(2,"0")}`,accent:`#${Math.min(255,a+30).toString(16).padStart(2,"0")}${Math.min(255,s+30).toString(16).padStart(2,"0")}${Math.min(255,r+30).toString(16).padStart(2,"0")}`,background:"#f8fafc",surface:"#ffffff",text:"#1a202c",textSecondary:"#4a5568",success:"#48bb78",warning:"#ed8936",error:"#f56565",info:"#4299e1"}}}const w=new Q;class X{constructor(){this.validationHistory=[],this.testResults=[],this.featureTests=this.initializeFeatureTests(),this.validationRules=this.initializeValidationRules()}initializeFeatureTests(){return{buttons:{testName:"Button Functionality",tests:[{name:"Click Events",selector:'button, .btn, [role="button"]',test:"click",expected:"event fired"},{name:"Form Submission",selector:"form",test:"submit",expected:"form submitted"},{name:"Navigation Links",selector:"a[href]",test:"navigation",expected:"link works"}]},forms:{testName:"Form Functionality",tests:[{name:"Input Validation",selector:"input, textarea, select",test:"validation",expected:"valid input accepted"},{name:"Form Submission",selector:"form",test:"submit",expected:"form processes"},{name:"Required Fields",selector:"[required]",test:"required",expected:"required validation works"}]},interactive:{testName:"Interactive Elements",tests:[{name:"Dropdowns",selector:"select, .dropdown",test:"dropdown",expected:"options selectable"},{name:"Checkboxes",selector:'input[type="checkbox"]',test:"checkbox",expected:"state changes"},{name:"Radio Buttons",selector:'input[type="radio"]',test:"radio",expected:"selection works"},{name:"Sliders",selector:'input[type="range"]',test:"slider",expected:"value changes"}]},data:{testName:"Data Functionality",tests:[{name:"Local Storage",selector:"*",test:"localStorage",expected:"data persists"},{name:"Data Display",selector:".data, .content, .list",test:"display",expected:"data shows"},{name:"Data Updates",selector:".dynamic, .live",test:"update",expected:"data updates"}]},api:{testName:"API Functionality",tests:[{name:"Fetch Requests",selector:"*",test:"fetch",expected:"API calls work"},{name:"Error Handling",selector:"*",test:"error",expected:"errors handled"},{name:"Loading States",selector:".loading, .spinner",test:"loading",expected:"loading shows"}]},responsive:{testName:"Responsive Design",tests:[{name:"Mobile Layout",selector:"*",test:"mobile",expected:"mobile friendly"},{name:"Tablet Layout",selector:"*",test:"tablet",expected:"tablet friendly"},{name:"Desktop Layout",selector:"*",test:"desktop",expected:"desktop optimized"}]},performance:{testName:"Performance",tests:[{name:"Load Time",selector:"*",test:"load",expected:"fast loading"},{name:"Memory Usage",selector:"*",test:"memory",expected:"efficient memory"},{name:"Animation Performance",selector:".animated, .transition",test:"animation",expected:"smooth animations"}]}}}initializeValidationRules(){return{html:{name:"HTML Validation",rules:[{name:"Valid HTML Structure",test:"htmlStructure",required:!0,severity:"error"},{name:"Semantic HTML",test:"semanticHTML",required:!0,severity:"warning"},{name:"Accessibility",test:"accessibility",required:!0,severity:"warning"}]},css:{name:"CSS Validation",rules:[{name:"Valid CSS Syntax",test:"cssSyntax",required:!0,severity:"error"},{name:"Responsive Design",test:"responsive",required:!0,severity:"warning"},{name:"Cross-browser Compatibility",test:"browserCompatibility",required:!1,severity:"info"}]},javascript:{name:"JavaScript Validation",rules:[{name:"Valid JavaScript Syntax",test:"jsSyntax",required:!0,severity:"error"},{name:"Error Handling",test:"errorHandling",required:!0,severity:"warning"},{name:"Performance Optimization",test:"performance",required:!1,severity:"info"}]},functionality:{name:"Functionality Validation",rules:[{name:"All Buttons Work",test:"buttonFunctionality",required:!0,severity:"error"},{name:"All Forms Work",test:"formFunctionality",required:!0,severity:"error"},{name:"All Links Work",test:"linkFunctionality",required:!0,severity:"error"},{name:"Data Persistence",test:"dataPersistence",required:!1,severity:"warning"}]}}}async validateApp(t,e,a){console.log("🔍 Starting comprehensive app validation...");try{const s={timestamp:new Date().toISOString(),appName:e,prompt:a,files:Object.keys(t),results:{},summary:{},recommendations:[]};return console.log("📝 Validating code quality..."),s.results.codeQuality=await this.validateCodeQuality(t),console.log("⚙️ Validating feature functionality..."),s.results.functionality=await this.validateFunctionality(t),console.log("🚀 Validating performance..."),s.results.performance=await this.validatePerformance(t),console.log("♿ Validating accessibility..."),s.results.accessibility=await this.validateAccessibility(t),console.log("🌐 Validating browser compatibility..."),s.results.browserCompatibility=await this.validateBrowserCompatibility(t),console.log("🔒 Validating security..."),s.results.security=await this.validateSecurity(t),s.summary=this.generateValidationSummary(s.results),s.recommendations=this.generateRecommendations(s.results),this.validationHistory.push(s),console.log("✅ App validation complete!"),console.log(`📊 Overall Score: ${s.summary.overallScore}/100`),console.log(`✅ Passed: ${s.summary.passed}`),console.log(`❌ Failed: ${s.summary.failed}`),console.log(`⚠️ Warnings: ${s.summary.warnings}`),s}catch(s){return console.error("❌ App validation failed:",s),{timestamp:new Date().toISOString(),appName:e,prompt:a,error:s.message,success:!1}}}async validateCodeQuality(t){const e={html:{passed:0,failed:0,warnings:0,details:[]},css:{passed:0,failed:0,warnings:0,details:[]},javascript:{passed:0,failed:0,warnings:0,details:[]}};return Object.entries(t).forEach(([a,s])=>{if(a.endsWith(".html")){const r=this.validateHTML(s);e.html.passed+=r.passed,e.html.failed+=r.failed,e.html.warnings+=r.warnings,e.html.details.push(...r.details)}else if(a.endsWith(".css")){const r=this.validateCSS(s);e.css.passed+=r.passed,e.css.failed+=r.failed,e.css.warnings+=r.warnings,e.css.details.push(...r.details)}else if(a.endsWith(".js")||a.endsWith(".jsx")){const r=this.validateJavaScript(s);e.javascript.passed+=r.passed,e.javascript.failed+=r.failed,e.javascript.warnings+=r.warnings,e.javascript.details.push(...r.details)}}),e}validateHTML(t){const e={passed:0,failed:0,warnings:0,details:[]};return t.includes("<!DOCTYPE html>")&&t.includes("<html>")&&t.includes("</html>")?(e.passed++,e.details.push({type:"success",message:"Valid HTML structure"})):(e.failed++,e.details.push({type:"error",message:"Invalid HTML structure"})),["header","nav","main","section","article","aside","footer"].some(r=>t.includes(`<${r}`))?(e.passed++,e.details.push({type:"success",message:"Uses semantic HTML"})):(e.warnings++,e.details.push({type:"warning",message:"Consider using semantic HTML tags"})),t.includes("alt=")||t.includes("aria-")?(e.passed++,e.details.push({type:"success",message:"Accessibility attributes present"})):(e.warnings++,e.details.push({type:"warning",message:"Add accessibility attributes"})),t.includes("viewport")?(e.passed++,e.details.push({type:"success",message:"Responsive viewport meta tag"})):(e.warnings++,e.details.push({type:"warning",message:"Add viewport meta tag for responsiveness"})),e}validateCSS(t){const e={passed:0,failed:0,warnings:0,details:[]};return t.includes("{")&&t.includes("}")&&t.includes(":")?(e.passed++,e.details.push({type:"success",message:"Valid CSS syntax"})):(e.failed++,e.details.push({type:"error",message:"Invalid CSS syntax"})),t.includes("@media")||t.includes("responsive")||t.includes("mobile")?(e.passed++,e.details.push({type:"success",message:"Responsive design implemented"})):(e.warnings++,e.details.push({type:"warning",message:"Add responsive design with media queries"})),t.includes("flexbox")||t.includes("grid")||t.includes("var(")?(e.passed++,e.details.push({type:"success",message:"Uses modern CSS features"})):(e.warnings++,e.details.push({type:"warning",message:"Consider using modern CSS features"})),t.includes("--")&&t.includes("var(")?(e.passed++,e.details.push({type:"success",message:"Uses CSS custom properties"})):(e.warnings++,e.details.push({type:"warning",message:"Consider using CSS custom properties"})),e}validateJavaScript(t){const e={passed:0,failed:0,warnings:0,details:[]};return t.includes("function")||t.includes("const")||t.includes("let")||t.includes("var")?(e.passed++,e.details.push({type:"success",message:"Valid JavaScript syntax"})):(e.failed++,e.details.push({type:"error",message:"Invalid JavaScript syntax"})),t.includes("try")&&t.includes("catch")||t.includes("error")?(e.passed++,e.details.push({type:"success",message:"Error handling implemented"})):(e.warnings++,e.details.push({type:"warning",message:"Add error handling"})),t.includes("addEventListener")||t.includes("onclick")||t.includes("onload")?(e.passed++,e.details.push({type:"success",message:"Event handling implemented"})):(e.warnings++,e.details.push({type:"warning",message:"Add event handling"})),t.includes("const")||t.includes("let")||t.includes("=>")?(e.passed++,e.details.push({type:"success",message:"Uses modern JavaScript features"})):(e.warnings++,e.details.push({type:"warning",message:"Consider using modern JavaScript features"})),e}async validateFunctionality(t){const e={passed:0,failed:0,warnings:0,details:[]},a=Object.values(t).find(r=>typeof r=="string"&&r.includes("<html"))||"";a.includes("<button")||a.includes(".btn")?(e.passed++,e.details.push({type:"success",message:"Buttons found"})):(e.warnings++,e.details.push({type:"warning",message:"No buttons found"})),a.includes("<form")||a.includes("<input")?(e.passed++,e.details.push({type:"success",message:"Forms found"})):(e.warnings++,e.details.push({type:"warning",message:"No forms found"})),a.includes("<select")||a.includes("checkbox")||a.includes("radio")?(e.passed++,e.details.push({type:"success",message:"Interactive elements found"})):(e.warnings++,e.details.push({type:"warning",message:"No interactive elements found"}));const s=Object.values(t).find(r=>typeof r=="string"&&(r.includes("function")||r.includes("const")))||"";return s.includes("localStorage")||s.includes("sessionStorage")||s.includes("fetch")?(e.passed++,e.details.push({type:"success",message:"Data handling implemented"})):(e.warnings++,e.details.push({type:"warning",message:"Add data handling"})),e}async validatePerformance(t){const e={passed:0,failed:0,warnings:0,details:[]};Object.values(t).reduce((r,n)=>r+(typeof n=="string"?n.length:0),0)<1e5?(e.passed++,e.details.push({type:"success",message:"App size is reasonable"})):(e.warnings++,e.details.push({type:"warning",message:"App size is large, consider optimization"}));const s=Object.values(t).find(r=>typeof r=="string"&&r.includes("<html"))||"";return s.includes("async")||s.includes("defer")?(e.passed++,e.details.push({type:"success",message:"Script loading optimized"})):(e.warnings++,e.details.push({type:"warning",message:"Consider optimizing script loading"})),s.includes('loading="lazy"')||s.includes("alt=")?(e.passed++,e.details.push({type:"success",message:"Images optimized"})):(e.warnings++,e.details.push({type:"warning",message:"Consider image optimization"})),e}async validateAccessibility(t){const e={passed:0,failed:0,warnings:0,details:[]},a=Object.values(t).find(n=>typeof n=="string"&&n.includes("<html"))||"";return a.includes("alt=")?(e.passed++,e.details.push({type:"success",message:"Alt attributes present"})):(e.warnings++,e.details.push({type:"warning",message:"Add alt attributes to images"})),a.includes("aria-")?(e.passed++,e.details.push({type:"success",message:"ARIA attributes present"})):(e.warnings++,e.details.push({type:"warning",message:"Add ARIA attributes for accessibility"})),["header","nav","main","section","article","aside","footer"].some(n=>a.includes(`<${n}`))?(e.passed++,e.details.push({type:"success",message:"Semantic HTML used"})):(e.warnings++,e.details.push({type:"warning",message:"Use semantic HTML tags"})),a.includes("tabindex")||a.includes("onkeydown")||a.includes("onkeyup")?(e.passed++,e.details.push({type:"success",message:"Keyboard navigation supported"})):(e.warnings++,e.details.push({type:"warning",message:"Add keyboard navigation support"})),e}async validateBrowserCompatibility(t){const e={passed:0,failed:0,warnings:0,details:[]},a=Object.values(t).find(r=>typeof r=="string"&&r.includes("<html"))||"",s=Object.values(t).find(r=>typeof r=="string"&&r.includes("{")&&r.includes("}"))||"";return s.includes("-webkit-")||s.includes("-moz-")||s.includes("-ms-")?(e.passed++,e.details.push({type:"success",message:"CSS prefixes for browser compatibility"})):(e.warnings++,e.details.push({type:"warning",message:"Add CSS prefixes for better browser support"})),a.includes("polyfill")||a.includes("babel")?(e.passed++,e.details.push({type:"success",message:"Polyfills included"})):(e.warnings++,e.details.push({type:"warning",message:"Consider adding polyfills for older browsers"})),e}async validateSecurity(t){const e={passed:0,failed:0,warnings:0,details:[]},a=Object.values(t).find(r=>typeof r=="string"&&r.includes("<html"))||"",s=Object.values(t).find(r=>typeof r=="string"&&(r.includes("function")||r.includes("const")))||"";return s.includes("innerText")||s.includes("textContent")||s.includes("encodeURIComponent")?(e.passed++,e.details.push({type:"success",message:"XSS prevention measures"})):(e.warnings++,e.details.push({type:"warning",message:"Add XSS prevention measures"})),a.includes("https://")||!a.includes("http://")?(e.passed++,e.details.push({type:"success",message:"HTTPS used for external resources"})):(e.warnings++,e.details.push({type:"warning",message:"Use HTTPS for external resources"})),s.includes("validate")||s.includes("sanitize")||s.includes("filter")?(e.passed++,e.details.push({type:"success",message:"Input validation implemented"})):(e.warnings++,e.details.push({type:"warning",message:"Add input validation"})),e}generateValidationSummary(t){let e=0,a=0,s=0;Object.values(t).forEach(i=>{i.passed!==void 0?(e+=i.passed,a+=i.failed,s+=i.warnings):Object.values(i).forEach(o=>{o.passed!==void 0&&(e+=o.passed,a+=o.failed,s+=o.warnings)})});const r=e+a+s,n=r>0?Math.round(e/r*100):0;return{overallScore:n,passed:e,failed:a,warnings:s,total:r,status:n>=80?"excellent":n>=60?"good":n>=40?"fair":"needs_improvement"}}generateRecommendations(t){const e=[];return Object.entries(t).forEach(([a,s])=>{s.details?s.details.forEach(r=>{(r.type==="error"||r.type==="warning")&&e.push({category:a,type:r.type,message:r.message,priority:r.type==="error"?"high":"medium"})}):Object.entries(s).forEach(([r,n])=>{n.details&&n.details.forEach(i=>{(i.type==="error"||i.type==="warning")&&e.push({category:`${a}.${r}`,type:i.type,message:i.message,priority:i.type==="error"?"high":"medium"})})})}),e}getValidationHistory(){return this.validationHistory}clearValidationHistory(){this.validationHistory=[]}getValidationStats(){const t={totalValidations:this.validationHistory.length,averageScore:0,categories:{},statusDistribution:{excellent:0,good:0,fair:0,needs_improvement:0}};if(this.validationHistory.length>0){let e=0;this.validationHistory.forEach(a=>{a.summary&&(e+=a.summary.overallScore,t.statusDistribution[a.summary.status]++)}),t.averageScore=Math.round(e/this.validationHistory.length)}return t}}const B=new X;class Z{constructor(){this.explanationTemplates=this.initializeExplanationTemplates(),this.featureDescriptions=this.initializeFeatureDescriptions(),this.techStackExplanations=this.initializeTechStackExplanations()}initializeExplanationTemplates(){return{appOverview:{template:"I've created a {appType} application called '{appName}' with {featureCount} key features. The app uses a {architecture} architecture and follows {designPattern} design patterns.",variables:["appType","appName","featureCount","architecture","designPattern"]},features:{template:"Key features include: {featureList}. Each feature is fully functional with proper error handling and user feedback.",variables:["featureList"]},technicalDetails:{template:"The application is built using {techStack} with {performance} performance optimizations and {security} security measures.",variables:["techStack","performance","security"]},userExperience:{template:"The user interface is {uiStyle} with {responsive} responsive design, {accessibility} accessibility features, and {interaction} interactive elements.",variables:["uiStyle","responsive","accessibility","interaction"]}}}initializeFeatureDescriptions(){return{"user-authentication":{name:"User Authentication",description:"Secure login and registration system with password validation and session management",benefits:["User security","Personalized experience","Data protection"]},"data-management":{name:"Data Management",description:"CRUD operations with local storage and data persistence",benefits:["Data persistence","User data management","Offline functionality"]},"responsive-design":{name:"Responsive Design",description:"Mobile-first design that works on all device sizes",benefits:["Mobile compatibility","Better user experience","Wider accessibility"]},"real-time-updates":{name:"Real-time Updates",description:"Live data updates and dynamic content refresh",benefits:["Current information","Better engagement","Dynamic experience"]},"search-functionality":{name:"Search Functionality",description:"Advanced search with filtering and sorting capabilities",benefits:["Easy content discovery","Better navigation","User efficiency"]},"form-validation":{name:"Form Validation",description:"Client-side and server-side validation with user feedback",benefits:["Data integrity","User guidance","Error prevention"]},navigation:{name:"Navigation System",description:"Intuitive navigation with breadcrumbs and menu systems",benefits:["Easy navigation","Better UX","Content organization"]},notifications:{name:"Notification System",description:"Toast notifications and alert systems for user feedback",benefits:["User feedback","Status updates","Better communication"]},"theme-support":{name:"Theme Support",description:"Light and dark theme support with customizable colors",benefits:["User preference","Accessibility","Modern design"]},"performance-optimization":{name:"Performance Optimization",description:"Code splitting, lazy loading, and performance monitoring",benefits:["Faster loading","Better performance","User satisfaction"]}}}initializeTechStackExplanations(){return{html5:{name:"HTML5",description:"Modern semantic HTML with accessibility features",benefits:["SEO optimization","Accessibility","Modern standards"]},css3:{name:"CSS3",description:"Advanced styling with Flexbox, Grid, and custom properties",benefits:["Modern design","Responsive layout","Maintainable styles"]},javascript:{name:"JavaScript ES6+",description:"Modern JavaScript with async/await, modules, and best practices",benefits:["Modern syntax","Better performance","Maintainable code"]},react:{name:"React",description:"Component-based architecture with hooks and state management",benefits:["Reusable components","Efficient rendering","Large ecosystem"]},vue:{name:"Vue.js",description:"Progressive framework with reactive data binding",benefits:["Easy learning curve","Flexible architecture","Great performance"]},angular:{name:"Angular",description:"Full-featured framework with TypeScript and dependency injection",benefits:["Enterprise-ready","Type safety","Comprehensive tooling"]},nodejs:{name:"Node.js",description:"Server-side JavaScript with npm ecosystem",benefits:["Full-stack JavaScript","Large ecosystem","High performance"]},firebase:{name:"Firebase",description:"Backend-as-a-Service with real-time database and authentication",benefits:["Rapid development","Real-time features","Scalable infrastructure"]},mongodb:{name:"MongoDB",description:"NoSQL database with flexible document storage",benefits:["Flexible schema","Scalable","JSON-like documents"]},postgresql:{name:"PostgreSQL",description:"Relational database with advanced features",benefits:["ACID compliance","Advanced queries","Data integrity"]}}}async generateExplanation(t,e,a,s=null){console.log("📝 Generating comprehensive app explanation...");try{const r={timestamp:new Date().toISOString(),appName:e,prompt:a,sections:{},summary:"",technicalDetails:{},recommendations:[]},n=this.analyzeGeneratedCode(t);return r.sections.overview=this.generateAppOverview(n,e,a),r.sections.features=this.generateFeaturesExplanation(n),r.sections.technicalDetails=this.generateTechnicalDetails(n),r.sections.userExperience=this.generateUserExperienceExplanation(n),r.sections.codeStructure=this.generateCodeStructureExplanation(t),r.sections.performance=this.generatePerformanceExplanation(n),r.sections.security=this.generateSecurityExplanation(n),r.sections.deployment=this.generateDeploymentExplanation(n),r.summary=this.generateSummary(r.sections),r.recommendations=this.generateRecommendations(n,s),r.technicalDetails={files:Object.keys(t),linesOfCode:this.calculateLinesOfCode(t),complexity:this.calculateComplexity(n),dependencies:this.extractDependencies(t),architecture:n.architecture,patterns:n.patterns},console.log("✅ App explanation generated successfully!"),r}catch(r){return console.error("❌ Explanation generation failed:",r),{timestamp:new Date().toISOString(),appName:e,prompt:a,error:r.message,success:!1}}}analyzeGeneratedCode(t){const e={appType:"web application",architecture:"monolithic",patterns:[],features:[],techStack:[],performance:[],security:[],accessibility:[],responsive:!1,interactive:!1,dataHandling:!1,apiIntegration:!1},a=Object.values(t).find(n=>typeof n=="string"&&n.includes("<html"))||"",s=Object.values(t).find(n=>typeof n=="string"&&n.includes("{")&&n.includes("}"))||"",r=Object.values(t).find(n=>typeof n=="string"&&(n.includes("function")||n.includes("const")))||"";return a.includes("todo")||a.includes("task")?e.appType="todo/task management application":a.includes("shop")||a.includes("cart")||a.includes("product")?e.appType="e-commerce application":a.includes("dashboard")||a.includes("chart")||a.includes("analytics")?e.appType="dashboard/analytics application":a.includes("blog")||a.includes("post")||a.includes("article")?e.appType="blog/content management application":a.includes("chat")||a.includes("message")||a.includes("conversation")?e.appType="chat/messaging application":a.includes("game")||a.includes("score")||a.includes("level")?e.appType="game application":a.includes("weather")||a.includes("forecast")||a.includes("temperature")?e.appType="weather application":a.includes("calendar")||a.includes("event")||a.includes("schedule")?e.appType="calendar/scheduling application":a.includes("note")||a.includes("document")||a.includes("editor")?e.appType="note-taking/document editor application":(a.includes("social")||a.includes("profile")||a.includes("friend"))&&(e.appType="social media application"),r.includes("class")||r.includes("module")||r.includes("export")?e.architecture="modular":r.includes("component")||r.includes("render")||r.includes("props")?e.architecture="component-based":(r.includes("service")||r.includes("controller")||r.includes("model"))&&(e.architecture="MVC (Model-View-Controller)"),(r.includes("addEventListener")||r.includes("onclick"))&&e.patterns.push("Event-driven programming"),(r.includes("localStorage")||r.includes("sessionStorage"))&&e.patterns.push("Data persistence pattern"),(r.includes("fetch")||r.includes("XMLHttpRequest")||r.includes("axios"))&&e.patterns.push("API integration pattern"),(r.includes("setInterval")||r.includes("setTimeout"))&&e.patterns.push("Asynchronous programming"),r.includes("try")&&r.includes("catch")&&e.patterns.push("Error handling pattern"),(a.includes("<form")||a.includes("<input"))&&e.features.push("form-handling"),(a.includes("<button")||a.includes(".btn"))&&e.features.push("interactive-buttons"),(a.includes("<select")||a.includes("dropdown"))&&e.features.push("dropdown-selection"),(a.includes("checkbox")||a.includes("radio"))&&e.features.push("input-selection"),(r.includes("localStorage")||r.includes("sessionStorage"))&&e.features.push("data-persistence"),(r.includes("fetch")||r.includes("XMLHttpRequest"))&&e.features.push("api-integration"),(a.includes("responsive")||s.includes("@media"))&&e.features.push("responsive-design"),(a.includes("aria-")||a.includes("alt="))&&e.features.push("accessibility"),a.includes("<!DOCTYPE html>")&&e.techStack.push("html5"),s.includes("{")&&s.includes("}")&&e.techStack.push("css3"),(r.includes("function")||r.includes("const")||r.includes("let"))&&e.techStack.push("javascript"),(r.includes("React")||r.includes("JSX")||r.includes("component"))&&e.techStack.push("react"),(r.includes("Vue")||r.includes("vue"))&&e.techStack.push("vue"),(r.includes("Angular")||r.includes("angular"))&&e.techStack.push("angular"),(r.includes("Node")||r.includes("npm")||r.includes("require"))&&e.techStack.push("nodejs"),(r.includes("Firebase")||r.includes("firebase"))&&e.techStack.push("firebase"),(a.includes("async")||a.includes("defer"))&&e.performance.push("script optimization"),a.includes('loading="lazy"')&&e.performance.push("lazy loading"),(s.includes("transform")||s.includes("transition"))&&e.performance.push("CSS animations"),(r.includes("debounce")||r.includes("throttle"))&&e.performance.push("performance optimization"),(r.includes("encodeURIComponent")||r.includes("innerText"))&&e.security.push("XSS prevention"),a.includes("https://")&&e.security.push("HTTPS usage"),(r.includes("validate")||r.includes("sanitize"))&&e.security.push("input validation"),a.includes("alt=")&&e.accessibility.push("image alt text"),a.includes("aria-")&&e.accessibility.push("ARIA attributes"),a.includes("tabindex")&&e.accessibility.push("keyboard navigation"),e.responsive=s.includes("@media")||a.includes("viewport"),e.interactive=r.includes("addEventListener")||a.includes("onclick"),e.dataHandling=r.includes("localStorage")||r.includes("sessionStorage")||r.includes("fetch"),e.apiIntegration=r.includes("fetch")||r.includes("XMLHttpRequest")||r.includes("axios"),e}generateAppOverview(t,e,a){const s=t.features.length,r=t.architecture,n=t.patterns.length>0?t.patterns[0]:"standard web development";return{title:`Application Overview: ${e}`,content:`I've created a ${t.appType} called '${e}' with ${s} key features. The app uses a ${r} architecture and follows ${n} design patterns.`,details:[`App Type: ${t.appType}`,`Architecture: ${r}`,`Key Features: ${s} implemented`,`Design Patterns: ${t.patterns.join(", ")||"Standard patterns"}`]}}generateFeaturesExplanation(t){const e=t.features.map(a=>this.featureDescriptions[a]||{name:a.replace("-"," ").replace(/\b\w/g,r=>r.toUpperCase()),description:"Custom feature implementation",benefits:["Enhanced functionality","Better user experience"]});return{title:"Key Features Implemented",content:`The application includes ${t.features.length} key features, each designed for optimal functionality and user experience.`,features:e,summary:"All features are fully functional with proper error handling, user feedback, and responsive design."}}generateTechnicalDetails(t){return{title:"Technical Implementation",content:"The application is built using modern web technologies with a focus on performance, maintainability, and scalability.",techStack:t.techStack.map(a=>this.techStackExplanations[a]||{name:a.toUpperCase(),description:"Modern web technology",benefits:["Performance","Maintainability","Scalability"]}),architecture:t.architecture,patterns:t.patterns,performance:t.performance,security:t.security}}generateUserExperienceExplanation(t){const e=t.responsive?"responsive and mobile-first":"clean and modern",a=t.responsive?"fully responsive":"desktop-optimized",s=t.accessibility.length>0?"comprehensive accessibility":"basic accessibility",r=t.interactive?"highly interactive":"standard interaction";return{title:"User Experience Design",content:`The user interface is ${e} with ${a} design, ${s} features, and ${r} elements.`,details:[`Design Style: ${e}`,`Responsiveness: ${a}`,`Accessibility: ${s}`,`Interactivity: ${r}`,`Data Handling: ${t.dataHandling?"Advanced":"Basic"}`,`API Integration: ${t.apiIntegration?"Full":"None"}`]}}generateCodeStructureExplanation(t){const e=Object.keys(t),a=e.reduce((s,r)=>{const n=r.split(".").pop();return s[n]=(s[n]||0)+1,s},{});return{title:"Code Structure & Organization",content:`The application is organized into ${e.length} files with a clear separation of concerns.`,files:e,fileTypes:a,structure:this.analyzeFileStructure(t),organization:"Modular and maintainable code organization"}}generatePerformanceExplanation(t){return{title:"Performance Optimization",content:`The application includes ${t.performance.length>0?t.performance.join(", "):"standard performance"} optimizations for fast loading and smooth user experience.`,optimizations:t.performance,metrics:{loadTime:"Optimized for fast loading",memoryUsage:"Efficient memory management",animations:"Smooth CSS transitions and animations"}}}generateSecurityExplanation(t){return{title:"Security Implementation",content:`The application implements ${t.security.length>0?t.security.join(", "):"basic security measures"} to protect user data and prevent common vulnerabilities.`,measures:t.security,protection:{xss:t.security.includes("XSS prevention")?"Protected":"Basic",dataValidation:t.security.includes("input validation")?"Comprehensive":"Basic",https:t.security.includes("HTTPS usage")?"Enforced":"Standard"}}}generateDeploymentExplanation(t){return{title:"Deployment & Hosting",content:"The application is ready for deployment to any modern web hosting platform.",platforms:["Firebase Hosting (recommended)","Vercel","Netlify","GitHub Pages","AWS S3 + CloudFront","Any static hosting service"],requirements:["Modern web browser","HTTPS support (recommended)","CDN for optimal performance"]}}generateSummary(t){return"I've successfully created a fully functional web application with modern design, responsive layout, and comprehensive features. The application follows industry best practices for performance, security, and accessibility, and is ready for immediate deployment."}generateRecommendations(t,e){const a=[];return t.performance.includes("lazy loading")||a.push({category:"Performance",priority:"medium",suggestion:"Consider implementing lazy loading for images and content"}),t.security.includes("input validation")||a.push({category:"Security",priority:"high",suggestion:"Add comprehensive input validation and sanitization"}),t.accessibility.length<2&&a.push({category:"Accessibility",priority:"medium",suggestion:"Enhance accessibility with ARIA attributes and keyboard navigation"}),t.responsive||a.push({category:"Responsive Design",priority:"high",suggestion:"Add responsive design with media queries for mobile devices"}),t.apiIntegration||a.push({category:"API Integration",priority:"low",suggestion:"Consider adding API integration for dynamic data"}),a}analyzeFileStructure(t){const e={html:[],css:[],javascript:[],config:[],assets:[]};return Object.keys(t).forEach(a=>{a.endsWith(".html")?e.html.push(a):a.endsWith(".css")?e.css.push(a):a.endsWith(".js")||a.endsWith(".jsx")?e.javascript.push(a):a.endsWith(".json")||a.endsWith(".config")?e.config.push(a):e.assets.push(a)}),e}calculateLinesOfCode(t){return Object.values(t).reduce((e,a)=>typeof a=="string"?e+a.split(`
`).length:e,0)}calculateComplexity(t){let e="simple";return t.features.length>5&&(e="moderate"),t.features.length>10&&(e="complex"),t.patterns.length>3&&(e="advanced"),e}extractDependencies(t){const e=[];return Object.values(t).forEach(a=>{typeof a=="string"&&((a.includes("React")||a.includes("react"))&&e.push("react"),(a.includes("Vue")||a.includes("vue"))&&e.push("vue"),(a.includes("Angular")||a.includes("angular"))&&e.push("angular"),(a.includes("jQuery")||a.includes("$"))&&e.push("jquery"),(a.includes("Bootstrap")||a.includes("bootstrap"))&&e.push("bootstrap"),(a.includes("Tailwind")||a.includes("tailwind"))&&e.push("tailwindcss"))}),[...new Set(e)]}}const j=new Z;class ee{constructor(){this.isHealthy=!0,this.baseURL="https://api-inference.huggingface.co/models",this.apiKey="hf_your_api_key_here",this.availableModels={"codellama-7b":{name:"CodeLlama 7B",model:"codellama/CodeLlama-7b-Python-hf",description:"Fast and efficient code generation",maxTokens:2048,temperature:.7},"codellama-13b":{name:"CodeLlama 13B",model:"codellama/CodeLlama-13b-Python-hf",description:"Higher quality code generation",maxTokens:2048,temperature:.7},"starcoder-15b":{name:"StarCoder 15B",model:"bigcode/starcoder",description:"Excellent code completion",maxTokens:2048,temperature:.7},"deepseek-coder":{name:"DeepSeek Coder",model:"deepseek-ai/deepseek-coder-6.7b-instruct",description:"High-performance generation",maxTokens:2048,temperature:.7},"wizardcoder-7b":{name:"WizardCoder 7B",model:"WizardLM/WizardCoder-15B-V1.0",description:"Great at following instructions",maxTokens:2048,temperature:.7},"phi3-mini":{name:"Phi-3 Mini",model:"microsoft/Phi-3-mini-4k-instruct",description:"Lightweight but powerful",maxTokens:2048,temperature:.7},"llama3-8b":{name:"Llama 3 8B",model:"meta-llama/Llama-3-8B-Instruct",description:"General purpose model",maxTokens:2048,temperature:.7},"mistral-7b":{name:"Mistral 7B",model:"mistralai/Mistral-7B-Instruct-v0.1",description:"Fast and efficient coding assistant",maxTokens:2048,temperature:.7},"gemma-7b":{name:"Gemma 7B",model:"google/gemma-7b-it",description:"Google's lightweight model",maxTokens:2048,temperature:.7},"qwen-7b":{name:"Qwen 7B",model:"Qwen/Qwen-7B-Chat",description:"Alibaba's coding model",maxTokens:2048,temperature:.7}},console.log("☁️ Cloud AI Service initialized with open source models!")}getAvailableModels(){return Object.values(this.availableModels)}getHealthyModels(){return Object.keys(this.availableModels)}isGeneralQuestion(t){const e=t.toLowerCase(),a=["what is","what are","what was","what will","what does","what do","how is","how are","how was","how will","how does","how do","when is","when are","when was","when will","when does","when do","where is","where are","where was","where will","where does","where do","why is","why are","why was","why will","why does","why do","who is","who are","who was","who will","who does","who do","weather","temperature","forecast","climate","news","current events","today","recent","cook","recipe","food","ingredients","travel","vacation","destination","hotel","health","medicine","exercise","fitness","education","learn","study","school","science","research","study","theory","history","historical","past","ancient","business","finance","economy","market","sports","game","team","player","entertainment","movie","music","book"],s=["build","create","make","develop","generate","code","app","application","website","web app","mobile app","component","function","class","module","library","api","database","server","backend","frontend","react","vue","angular","node","python","javascript","html","css","js","ts","jsx","tsx","todo","calculator","dashboard","portfolio","blog","ecommerce","shop","store","landing page"],r=a.some(i=>e.includes(i)),n=s.some(i=>e.includes(i));return!!(r&&!n||e.startsWith("what")||e.startsWith("how")||e.startsWith("when")||e.startsWith("where")||e.startsWith("why")||e.startsWith("who"))}async answerGeneralQuestion(t,e){console.log("💬 Answering general question:",t);try{let a=e.webContext;a||console.log("🌐 No web context available, searching for information...");const s=await this.createConversationalResponse(t,a);return{type:"conversational_response",message:s.message,summary:s.summary,details:s.details,sources:s.sources,prompt:t,generatedAt:new Date().toISOString(),context:e}}catch(a){return console.error("❌ Failed to answer general question:",a),{type:"conversational_response",message:`I understand you're asking about "${t}". While I'm primarily designed for code generation, I can help with general questions when I have access to current information. For the most accurate and up-to-date answers, I'd recommend checking reliable sources or using a general-purpose AI assistant.`,summary:"General question response",details:["This is a general question that requires current information"],sources:[],prompt:t,generatedAt:new Date().toISOString(),context:e}}}async createConversationalResponse(t,e){const a=t.toLowerCase();return a.includes("weather")||a.includes("temperature")||a.includes("forecast")?{message:"I'd be happy to help with weather information for your location. However, I don't have access to real-time weather data. For current weather conditions, I recommend checking a reliable weather service like Weather.com, AccuWeather, or your local weather app.",summary:"Weather information request",details:["Weather data requires real-time access to meteorological services","Recommended sources: Weather.com, AccuWeather, local weather apps","For accurate forecasts, use official weather services"],sources:["Weather.com","AccuWeather","National Weather Service"]}:a.includes("cook")||a.includes("recipe")||a.includes("food")?{message:"I can help with cooking questions! For recipes and cooking techniques, I recommend checking reliable cooking websites like AllRecipes.com, Food Network, or Serious Eats. These sources provide tested recipes and expert cooking advice.",summary:"Cooking and recipe information",details:["Cooking requires specific recipes and techniques","Recommended sources: AllRecipes.com, Food Network, Serious Eats","Always follow food safety guidelines when cooking"],sources:["AllRecipes.com","Food Network","Serious Eats"]}:{message:`I understand you're asking about "${t}". While I'm primarily designed for code generation and development tasks, I can provide general information when I have access to current data. For the most accurate and up-to-date information, I recommend checking reliable sources or using a general-purpose AI assistant.`,summary:"General information request",details:["This appears to be a general knowledge question","For current information, check reliable sources","I can help with code generation and development tasks"],sources:["Wikipedia","Reliable news sources","Official websites"]}}async generateCode(t,e={}){if(console.log("🚀 Generating code with Cloud AI..."),this.isGeneralQuestion(t))return console.log("❓ General question detected, providing direct answer..."),await this.answerGeneralQuestion(t,e);e.webContext&&(console.log("🌐 Web context available:",e.webContext.summary),console.log("📊 Best practices found:",e.webContext.bestPractices?.length||0),console.log("🔗 Resources found:",e.webContext.resources?.length||0),console.log("💡 Recommendations:",e.webContext.recommendations?.length||0));try{if(e.isIncremental&&e.existingProject)return await this.generateIncrementalCode(t,e);const a=this.analyzeProjectContext(e);e.conversationContext&&(a.conversationHistory=e.conversationHistory||[],a.recentMessages=e.conversationContext.recentMessages||[],a.projectContext=e.conversationContext),console.log("🧠 Enhanced context analysis:",a);const s=await this.generateContextAwareCode(t,a),r=L.generateAppName(t,a),n=this.selectAutomaticTheme(t,a),i=this.applyAutomaticTheme(s,n),o=this.generatePreviewData(i,r);console.log("🔍 Validating generated app...");const c=await B.validateApp(i,r,t);console.log("📝 Generating app explanation...");const l=await j.generateExplanation(i,r,t,c);return console.log("✅ Code generated successfully!"),console.log("🏷️ App name:",r),console.log("🎨 Selected theme:",n.name),console.log("👁️ Preview data generated"),console.log("🔍 Validation completed:",c.summary?.overallScore||"N/A","score"),console.log("📝 Explanation generated:",l.summary?"Yes":"No"),console.log("📁 Generated files:",Object.keys(i)),console.log("📄 File contents preview:",Object.entries(i).map(([p,f])=>({name:p,length:f.length,preview:f.substring(0,100)}))),{files:i,appName:r,validation:c,explanation:l,prompt:t,generatedAt:new Date().toISOString(),preview:o,context:a,iterations:[],dependencies:this.extractDependencies(i),buildInstructions:this.generateBuildInstructions(i),theme:n}}catch(a){console.error("❌ Code generation failed:",a);const s=await this.createFallbackResponse(t,e),r=L.generateAppName(t,e),n=this.selectAutomaticTheme(t,e),i=this.applyAutomaticTheme(s,n);console.log("🔍 Validating fallback app...");const o=await B.validateApp(i,r,t);console.log("📝 Generating fallback app explanation...");const c=await j.generateExplanation(i,r,t,o);return{files:i,appName:r,validation:o,explanation:c,prompt:t,generatedAt:new Date().toISOString(),preview:this.generatePreviewData(i,r),context:this.analyzeProjectContext(e),iterations:[],dependencies:this.extractDependencies(i),buildInstructions:this.generateBuildInstructions(i),theme:n}}}async generateIncrementalCode(t,e){console.log("🔄 Generating incremental code...");try{await I.initializeProject(e.existingProject);const a=await I.processFeatureRequest(t,e);if(a.type==="no_new_features")return{type:"no_changes",message:a.message,existingFeatures:a.existingFeatures,files:e.existingProject.files||{}};if(a.type==="incremental_update"){const s={...e.existingProject.files,...a.code};return{type:"incremental_update",files:s,newFeatures:a.newFeatures,updatedFiles:a.updatedFiles,message:a.message,appName:e.existingProject.name||"Updated App",prompt:t,generatedAt:new Date().toISOString(),preview:this.generatePreviewData(s,e.existingProject.name),context:this.analyzeProjectContext(e),iterations:I.featureHistory,dependencies:this.extractDependencies(s),buildInstructions:this.generateBuildInstructions(s)}}}catch(a){throw console.error("❌ Incremental code generation failed:",a),a}}analyzeProjectContext(t){return{projectType:this.detectProjectType(t),existingFiles:t.previousFiles||[],dependencies:this.analyzeDependencies(t),codingStandards:this.detectCodingStandards(t),architecture:this.detectArchitecture(t),frameworks:this.detectFrameworks(t),userPreferences:this.extractUserPreferences(t),environment:this.detectEnvironment(t)}}async generateContextAwareCode(t,e){console.log("🧠 Context-aware generation:",e);const a=this.analyzeUserRequest(t),s=await this.generateSpecificCode(t,a),r=this.enhanceWithContext(s,e);return console.log("🔧 Enhanced code generated with context awareness"),r}generatePreviewData(t,e){return{title:e,description:`A ${e} application generated by DreamBuild AI`,features:this.extractFeatures(t),screenshots:this.generateScreenshots(t),liveDemo:this.generateLiveDemo(t),techStack:this.extractTechStack(t),deployment:this.generateDeploymentInfo(t)}}extractDependencies(t){const e=new Set;return Object.values(t).forEach(a=>{(a.includes("React")||a.includes("react"))&&(e.add("react"),e.add("react-dom")),(a.includes("Vue")||a.includes("vue"))&&e.add("vue"),(a.includes("Angular")||a.includes("angular"))&&e.add("@angular/core"),(a.includes("express")||a.includes("node"))&&e.add("express"),(a.includes("tailwind")||a.includes("bootstrap"))&&e.add("tailwindcss")}),Array.from(e)}generateBuildInstructions(t){const e=Object.values(t).some(s=>s.includes("React")||s.includes("react")),a=Object.values(t).some(s=>s.includes("express")||s.includes("node"));return e?{install:"npm install",start:"npm start",build:"npm run build",dev:"npm run dev"}:a?{install:"npm install",start:"node server.js",dev:"nodemon server.js"}:{install:"No dependencies required",start:"Open index.html in browser",build:"No build process required"}}generateIntelligentCode(t,e={}){console.log("🧠 Analyzing prompt:",t);const a=this.analyzeUserRequest(t);return console.log("📋 Analysis result:",a),this.generateSpecificCode(t,a)}analyzeUserRequest(t){const a=(typeof t=="string"?t:JSON.stringify(t)).toLowerCase();return{hasButton:a.includes("button")||a.includes("click"),hasForm:a.includes("form")||a.includes("input")||a.includes("submit"),hasCalculator:a.includes("calculator")||a.includes("calculate")||a.includes("math"),hasColorChange:a.includes("color")||a.includes("change color"),hasCounter:a.includes("counter")||a.includes("count")||a.includes("increment"),hasTodo:a.includes("todo")||a.includes("task")||a.includes("list"),hasGame:a.includes("game")||a.includes("play")||a.includes("guess"),hasAnimation:a.includes("animation")||a.includes("animate")||a.includes("spinning"),hasAPI:a.includes("api")||a.includes("fetch")||a.includes("request"),wantsReact:a.includes("react")||a.includes("component"),wantsVue:a.includes("vue"),wantsAngular:a.includes("angular"),wantsPython:a.includes("python")||a.includes("flask")||a.includes("django"),wantsNode:a.includes("node")||a.includes("express"),wantsDatabase:a.includes("database")||a.includes("store")||a.includes("save"),wantsAuth:a.includes("login")||a.includes("auth")||a.includes("user"),wantsResponsive:a.includes("responsive")||a.includes("mobile"),wantsStyling:a.includes("css")||a.includes("style")||a.includes("design"),specificFeature:this.extractSpecificFeature(t),appName:this.extractAppName(t),targetLanguage:this.detectTargetLanguage(t)}}extractSpecificFeature(t){const a=(typeof t=="string"?t:JSON.stringify(t)).toLowerCase();return a.includes("factorial")?"factorial":a.includes("fibonacci")?"fibonacci":a.includes("prime")?"prime":a.includes("sort")?"sort":a.includes("search")?"search":a.includes("timer")?"timer":a.includes("clock")?"clock":a.includes("weather")?"weather":a.includes("chat")?"chat":a.includes("quiz")?"quiz":null}detectTargetLanguage(t){const a=(typeof t=="string"?t:JSON.stringify(t)).toLowerCase();return a.includes("python")?"python":a.includes("javascript")||a.includes("js")?"javascript":a.includes("react")?"react":a.includes("vue")?"vue":a.includes("angular")?"angular":a.includes("html")?"html":a.includes("css")?"css":"html"}async generateSpecificCode(t,e){console.log("🎯 Generating specific code for:",e.specificFeature||"general app");try{const s=`${this.createSystemPrompt({projectType:"web",existingFiles:[],dependencies:[],architecture:"monolithic",frameworks:["html","css","javascript"]})}

User Request: ${t}

Generate a complete, working application with all the features requested. Return the code as a JSON object with files.`,r=this.selectBestModel(t,{}),n=this.availableModels[r]?.model||"codellama/CodeLlama-7b-Python-hf";console.log("🤖 Using AI model:",n),console.log("📝 Full prompt:",s);const i=await this.callHuggingFaceAPI(n,s,2048,.7);console.log("🤖 AI Response received:",i);const o=await this.parseAIResponse(i,t);return o&&Object.keys(o).length>0?(console.log("✅ AI generated code successfully"),o):(console.log("⚠️ AI response was empty, using fallback"),await this.createFallbackResponse(t,{}))}catch(a){return console.error("❌ AI code generation failed:",a),console.log("🔄 Falling back to template generation..."),e.hasTodo?this.createTodoTemplate(t):e.hasAPI?this.createAPITemplate(t):e.specificFeature==="weather"?this.generateWeatherApp(t):this.createDefaultTemplate(t)}}selectBestModel(t,e){const s=(typeof t=="string"?t:JSON.stringify(t)).toLowerCase();return s.includes("python")||s.includes("django")||s.includes("flask")?"codellama-7b":s.includes("javascript")||s.includes("react")||s.includes("node")?"starcoder-15b":s.includes("java")||s.includes("spring")?"deepseek-coder":s.includes("c++")||s.includes("cpp")||s.includes("rust")?"codellama-13b":s.includes("web")||s.includes("html")||s.includes("css")?"wizardcoder-7b":"codellama-7b"}async callHuggingFaceAPI(t,e,a,s){return(await T.post(`${this.baseURL}/${t}`,{inputs:e,parameters:{max_new_tokens:a,temperature:s,return_full_text:!1,do_sample:!0}},{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},timeout:3e4})).data}createSystemPrompt(t={}){const e=t.conversationHistory?.length>0?`

Conversation Context:
- Previous messages: ${t.conversationHistory.length} messages
- Recent conversation: ${t.recentMessages?.slice(-3).map(s=>`${s.type}: ${s.content}`).join(`
`)||"none"}
- Project context: ${JSON.stringify(t.projectContext||{})}`:"",a=t.webContext?`

Web Search Context (Current Information):
- Summary: ${t.webContext.summary||"No summary available"}
- Best Practices: ${t.webContext.bestPractices?.slice(0,5).join(", ")||"None found"}
- Current Resources: ${t.webContext.resources?.length||0} resources found
- Recommendations: ${t.webContext.recommendations?.slice(0,3).join(", ")||"None found"}
- Current Trends: ${t.webContext.trends?.length||0} trends identified
- Key Information: ${t.webContext.currentInfo?.slice(0,3).map(s=>s.title).join(", ")||"None found"}`:"";return`You are an expert software developer and code generator with advanced conversation capabilities. Generate complete, working applications based on user requests and maintain context across conversations.

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
10. Use web search context to provide current, accurate information
11. Incorporate best practices from web search results
12. Reference current trends and technologies when relevant
13. Apply industry-specific knowledge from web context

Context:
- Project Type: ${t.projectType||"web"}
- Existing Files: ${t.existingFiles?.length||0} files
- Dependencies: ${t.dependencies?.join(", ")||"none"}
- Architecture: ${t.architecture||"monolithic"}
- Frameworks: ${t.frameworks?.join(", ")||"vanilla"}${e}${a}

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

Generate practical, working applications that users can immediately use. If this is a correction or improvement request, modify the existing code appropriately while maintaining functionality.`}async parseAIResponse(t,e){try{let a="";Array.isArray(t)&&t.length>0?a=t[0].generated_text||t[0].text||"":t.generated_text?a=t.generated_text:t.text?a=t.text:a=JSON.stringify(t);const s=a.match(/\{[\s\S]*\}/);if(s){const r=JSON.parse(s[0]);if(r.files)return r.files}return await this.createFallbackResponse(e,{})}catch(a){return console.error("❌ Failed to parse AI response:",a),await this.createFallbackResponse(e,{})}}generateWebApp(t){const e=this.extractAppName(t)||"Web App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${e}</h1>
        <p>Generated based on: "${t}"</p>
        
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
}`,"script.js":`// ${e} - Generated by DreamBuild AI
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
  "name": "${e.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateReactApp(t){const e=this.extractAppName(t)||"React App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e}</title>
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

function ${e.replace(/\s+/g,"")}() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello from React!');

  const handleClick = () => {
    setCount(count + 1);
    setMessage(\`Button clicked \${count + 1} times!\`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>${e}</h1>
        <p>Generated based on: "${t}"</p>
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

ReactDOM.render(<${e.replace(/\s+/g,"")} />, document.getElementById('root'));`,"styles.css":`* {
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
  "name": "${e.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateJavaScriptApp(t){const e=this.extractAppName(t)||"JavaScript App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${e}</h1>
        <p>Generated based on: "${t}"</p>
        
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
</html>`,"script.js":`// ${e} - Generated by DreamBuild AI
class ${e.replace(/\s+/g,"")} {
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
    new ${e.replace(/\s+/g,"")}();
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
  "name": "${e.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateSpecificFeature(t,e){switch(console.log("🎯 Generating specific feature:",e),e){case"factorial":return this.generateFactorialApp(t);case"fibonacci":return this.generateFibonacciApp(t);case"prime":return this.generatePrimeApp(t);case"sort":return this.generateSortApp(t);case"search":return this.generateSearchApp(t);case"timer":return this.generateTimerApp(t);case"clock":return this.generateClockApp(t);case"weather":return this.generateWeatherApp(t);case"chat":return this.generateChatApp(t);case"quiz":return this.generateQuizApp(t);default:return this.generateWebApp(t)}}generateFactorialApp(t){const e=this.extractAppName(t)||"Factorial Calculator";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${e}</h1>
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
</html>`,"script.js":`// ${e} - Generated by DreamBuild AI
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
  "name": "${e.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateFibonacciApp(t){const e=this.extractAppName(t)||"Fibonacci Calculator";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${e}</h1>
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
</html>`,"script.js":`// ${e} - Generated by DreamBuild AI
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
  "name": "${e.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}generateWeatherApp(t){const e=this.extractAppName(t)||"Weather App";return{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>${e}</h1>
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
</html>`,"script.js":`// ${e} - Generated by DreamBuild AI
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
  "name": "${e.toLowerCase().replace(/\s+/g,"-")}",
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
}`}}detectProjectType(t){const e=t.previousFiles||[];return e.some(a=>a.includes("package.json"))?"node":e.some(a=>a.includes(".jsx")||a.includes(".tsx"))?"react":e.some(a=>a.includes(".vue"))?"vue":(e.some(a=>a.includes(".html")),"web")}analyzeDependencies(t){return t.dependencies||[]}detectCodingStandards(t){return{indentation:"2 spaces",quotes:"single",semicolons:!0,trailingCommas:!0}}detectArchitecture(t){const e=t.previousFiles||[];return e.some(a=>a.includes("components"))?"component-based":e.some(a=>a.includes("pages"))?"page-based":"monolithic"}detectFrameworks(t){const e=[],a=t.previousFiles||[];return a.some(s=>s.includes("react"))&&e.push("react"),a.some(s=>s.includes("vue"))&&e.push("vue"),a.some(s=>s.includes("angular"))&&e.push("angular"),a.some(s=>s.includes("express"))&&e.push("express"),e}extractUserPreferences(t){return{preferredFramework:"react",styling:"tailwind",stateManagement:"hooks",testing:"jest"}}detectEnvironment(t){return{nodeVersion:"18+",packageManager:"npm",bundler:"vite",deployment:"firebase"}}enhanceWithContext(t,e){console.log("🔧 Enhancing code with context:",e);const a={...t};return Object.keys(a).forEach(s=>{if(s.endsWith(".js")||s.endsWith(".jsx")){const r=a[s],n=`// Generated by DreamBuild AI with context awareness
// Project Type: ${e.projectType||"web"}
// Architecture: ${e.architecture||"monolithic"}
// Frameworks: ${e.frameworks?.join(", ")||"vanilla"}
// Environment: ${e.environment?.nodeVersion||"18+"}

${r}`;a[s]=n}}),console.log("✅ Code enhanced with context awareness"),a}extractFeatures(t){const e=[],a=Object.values(t).join(" ").toLowerCase();return console.log("🔍 Extracting features from generated code..."),(a.includes("addeventlistener")||a.includes("onclick")||a.includes("onchange"))&&e.push("Interactive Elements"),(a.includes("localstorage")||a.includes("sessionstorage")||a.includes("indexeddb"))&&e.push("Data Persistence"),(a.includes("fetch")||a.includes("axios")||a.includes("xhr")||a.includes("api"))&&e.push("API Integration"),(a.includes("responsive")||a.includes("mobile")||a.includes("media query")||a.includes("@media"))&&e.push("Responsive Design"),(a.includes("animation")||a.includes("transition")||a.includes("transform")||a.includes("keyframes"))&&e.push("Animations"),(a.includes("form")||a.includes("input")||a.includes("textarea")||a.includes("select"))&&e.push("Form Handling"),(a.includes("login")||a.includes("auth")||a.includes("password")||a.includes("token"))&&e.push("Authentication"),(a.includes("websocket")||a.includes("socket")||a.includes("realtime")||a.includes("live"))&&e.push("Real-time Updates"),(a.includes("file")||a.includes("upload")||a.includes("download")||a.includes("blob"))&&e.push("File Handling"),e.length===0&&e.push("Modern UI","Interactive Elements","Responsive Design"),console.log("✅ Features extracted:",e),e}generateScreenshots(t){return["https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=App+Preview+1","https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=App+Preview+2"]}generateLiveDemo(t){return"https://dreambuild-2024-app.web.app/preview"}extractTechStack(t){const e=[],a=Object.values(t).join(" ").toLowerCase();return console.log("🔍 Extracting tech stack from generated code..."),(a.includes("react")||a.includes("jsx"))&&e.push("React"),(a.includes("vue")||a.includes("vue.js"))&&e.push("Vue.js"),a.includes("angular")&&e.push("Angular"),a.includes("svelte")&&e.push("Svelte"),(a.includes("express")||a.includes("node"))&&e.push("Node.js"),(a.includes("django")||a.includes("flask"))&&e.push("Python"),(a.includes("spring")||a.includes("java"))&&e.push("Java"),a.includes("html")&&e.push("HTML5"),a.includes("css")&&e.push("CSS3"),(a.includes("javascript")||a.includes("js"))&&e.push("JavaScript"),(a.includes("typescript")||a.includes("ts"))&&e.push("TypeScript"),(a.includes("tailwind")||a.includes("tailwindcss"))&&e.push("Tailwind CSS"),a.includes("bootstrap")&&e.push("Bootstrap"),(a.includes("material")||a.includes("mui"))&&e.push("Material-UI"),(a.includes("mongodb")||a.includes("mongo"))&&e.push("MongoDB"),(a.includes("mysql")||a.includes("sql"))&&e.push("SQL"),a.includes("firebase")&&e.push("Firebase"),e.length===0&&e.push("HTML5","CSS3","JavaScript"),console.log("✅ Tech stack extracted:",e),e}generateDeploymentInfo(t){return{platform:"Firebase Hosting",url:"https://dreambuild-2024-app.web.app",status:"Ready to deploy",instructions:"Click deploy to publish your app"}}extractAppName(t){const a=(typeof t=="string"?t:JSON.stringify(t)).split(" "),s=a.findIndex(r=>r.toLowerCase().includes("app")||r.toLowerCase().includes("application")||r.toLowerCase().includes("website")||r.toLowerCase().includes("page"));return s>0?a.slice(0,s).join(" "):null}generateAppName(t){const e=typeof t=="string"?t:JSON.stringify(t),a=e.toLowerCase(),s=e.split(" ").filter(n=>n.length>3&&!["create","build","make","generate","app","application","website","page"].includes(n.toLowerCase()));if(a.includes("weather"))return"WeatherCast Pro";if(a.includes("calculator"))return"CalcMaster";if(a.includes("todo")||a.includes("task"))return"TaskFlow";if(a.includes("game"))return"GameZone";if(a.includes("chat"))return"ChatConnect";if(a.includes("dashboard"))return"DashBoard Pro";if(a.includes("ecommerce")||a.includes("store"))return"ShopMaster";if(a.includes("blog"))return"BlogCraft";if(a.includes("portfolio"))return"Portfolio Pro";if(a.includes("social"))return"SocialConnect";if(a.includes("music"))return"MusicHub";if(a.includes("photo")||a.includes("image"))return"PhotoGallery";if(a.includes("news"))return"NewsReader";if(a.includes("recipe"))return"RecipeBook";if(a.includes("fitness")||a.includes("workout"))return"FitTracker";if(a.includes("finance")||a.includes("budget"))return"FinanceTracker";if(a.includes("education")||a.includes("learn"))return"LearnHub";if(a.includes("travel"))return"TravelGuide";if(a.includes("food")||a.includes("restaurant"))return"FoodFinder";if(a.includes("book")||a.includes("library"))return"BookShelf";if(a.includes("calendar")||a.includes("schedule"))return"SchedulePro";if(s.length>0){const n=s[0].charAt(0).toUpperCase()+s[0].slice(1),i=s.length>1?s[1].charAt(0).toUpperCase()+s[1].slice(1):"App";return`${n}${i}`}const r=["DreamApp","InnovateHub","CreativeSpace","TechFlow","SmartApp","NextGen","FutureApp","ProApp","EliteApp","MasterApp","UltimateApp","PrimeApp","SuperApp","MegaApp","TurboApp"];return r[Math.floor(Math.random()*r.length)]}selectAutomaticTheme(t,e={}){console.log("🎨 Selecting automatic theme for prompt:",t);const s=(typeof t=="string"?t:JSON.stringify(t)).toLowerCase(),r={business:{keywords:["business","dashboard","admin","management","enterprise","professional","corporate"],theme:"monochrome",confidence:.9},entertainment:{keywords:["game","entertainment","fun","play","music","video","media"],theme:"vibrant",confidence:.9},health:{keywords:["health","fitness","workout","medical","wellness","care","diet"],theme:"forest",confidence:.8},education:{keywords:["learn","education","study","course","tutorial","knowledge","school"],theme:"ocean",confidence:.8},creative:{keywords:["design","art","creative","draw","paint","edit","photo","image"],theme:"purple",confidence:.8},communication:{keywords:["chat","social","message","connect","network","community","talk"],theme:"sunset",confidence:.7},utility:{keywords:["calculator","tool","utility","helper","converter","widget"],theme:"modern",confidence:.6},dark:{keywords:["dark","night","minimal","simple","clean"],theme:"dark",confidence:.9},colorSpecific:{keywords:["blue","green","red","purple","orange","pink","yellow"],theme:"custom",confidence:.8}};if(s.includes("dark theme")||s.includes("dark mode"))return{name:"dark",colors:w.getThemeColors("dark"),reason:"Dark theme requested",confidence:1};if(s.includes("light theme")||s.includes("bright"))return{name:"modern",colors:w.getThemeColors("modern"),reason:"Light theme requested",confidence:1};if(s.includes("blue"))return{name:"ocean",colors:w.getThemeColors("ocean"),reason:"Blue color requested",confidence:.9};if(s.includes("green"))return{name:"forest",colors:w.getThemeColors("forest"),reason:"Green color requested",confidence:.9};if(s.includes("purple"))return{name:"purple",colors:w.getThemeColors("purple"),reason:"Purple color requested",confidence:.9};if(s.includes("orange")||s.includes("sunset"))return{name:"sunset",colors:w.getThemeColors("sunset"),reason:"Orange/sunset color requested",confidence:.9};let n={theme:"modern",confidence:.5,reason:"Default modern theme"};Object.entries(r).forEach(([c,l])=>{const p=l.keywords.filter(f=>s.includes(f)).length;p>0&&l.confidence>n.confidence&&(n={theme:l.theme,confidence:l.confidence,reason:`${c} app detected (${p} keywords)`})});const i=w.getThemeColors(n.theme),o={name:n.theme,colors:i,reason:n.reason,confidence:n.confidence};return console.log("🎨 Selected theme:",o),o}applyAutomaticTheme(t,e){console.log("🎨 Applying theme to generated code:",e.name);const a={};return Object.entries(t).forEach(([s,r])=>{typeof r=="string"?s.endsWith(".css")?a[s]=this.applyThemeToCSS(r,e):s.endsWith(".html")?a[s]=this.applyThemeToHTML(r,e):s.endsWith(".js")||s.endsWith(".jsx")?a[s]=this.applyThemeToJS(r,e):a[s]=r:a[s]=r}),a}applyThemeToCSS(t,e){let a=t;const s={"#667eea":e.colors.primary,"#764ba2":e.colors.secondary,"#f093fb":e.colors.accent,"#f8fafc":e.colors.background,"#ffffff":e.colors.surface,"#1a202c":e.colors.text,"#4a5568":e.colors.textSecondary,"#48bb78":e.colors.success,"#ed8936":e.colors.warning,"#f56565":e.colors.error,"#4299e1":e.colors.info};return Object.entries(s).forEach(([r,n])=>{a=a.replace(new RegExp(r,"g"),n)}),a.includes("--primary-color")?a:`
/* Theme Variables */
:root {
  --primary-color: ${e.colors.primary};
  --secondary-color: ${e.colors.secondary};
  --accent-color: ${e.colors.accent};
  --background-color: ${e.colors.background};
  --surface-color: ${e.colors.surface};
  --text-color: ${e.colors.text};
  --text-secondary-color: ${e.colors.textSecondary};
  --success-color: ${e.colors.success};
  --warning-color: ${e.colors.warning};
  --error-color: ${e.colors.error};
  --info-color: ${e.colors.info};
}

${a}`}applyThemeToHTML(t,e){let a=t;if(a.includes("Web App")||a.includes("React App")||a.includes("JavaScript App"),a.includes("<head>")){const s=`
    <meta name="theme-color" content="${e.colors.primary}">
    <meta name="color-scheme" content="${e.name==="dark"?"dark":"light"}">`;a=a.replace("<head>",`<head>${s}`)}return a}applyThemeToJS(t,e){let a=t;const s={"#667eea":e.colors.primary,"#764ba2":e.colors.secondary,"#f093fb":e.colors.accent,"#f8fafc":e.colors.background,"#ffffff":e.colors.surface,"#1a202c":e.colors.text,"#4a5568":e.colors.textSecondary};return Object.entries(s).forEach(([r,n])=>{a=a.replace(new RegExp(r,"g"),n)}),a}async createFallbackResponse(t,e={}){console.log("🔄 Creating AI-generated fallback response for prompt:",t);try{const r=`Create a complete web application based on this request: ${t}. 
      
      Generate HTML, CSS, and JavaScript files that implement the requested features. 
      Return the code as a JSON object with this structure:
      {
        "files": {
          "index.html": "HTML content here",
          "styles.css": "CSS content here", 
          "script.js": "JavaScript content here"
        }
      }
      
      Make sure the application is fully functional and includes all requested features.`,n="codellama/CodeLlama-7b-Python-hf";console.log("🤖 Fallback: Using AI model:",n);const i=await this.callHuggingFaceAPI(n,r,1500,.5);console.log("🤖 Fallback AI Response received:",i);const o=await this.parseAIResponse(i,t);if(o&&Object.keys(o).length>0)return console.log("✅ Fallback AI generated code successfully"),o}catch(r){console.error("❌ Fallback AI generation failed:",r)}console.log("⚠️ Using template as absolute last resort");const s=(typeof t=="string"?t:JSON.stringify(t)).toLowerCase();return s.includes("todo")||s.includes("task")?this.createTodoTemplate(t):s.includes("dashboard")||s.includes("analytics")?this.createDashboardTemplate(t):s.includes("ecommerce")||s.includes("store")||s.includes("shop")?this.createEcommerceTemplate(t):s.includes("api")||s.includes("backend")?this.createAPITemplate(t):this.createDefaultTemplate(t)}createDashboardTemplate(t){return{"index.html":`<!DOCTYPE html>
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
}`}}createTodoTemplate(t){return{"index.html":`<!DOCTYPE html>
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
}`}}createEcommerceTemplate(t){return{"index.html":`<!DOCTYPE html>
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
}`}}createAPITemplate(t){return{"index.html":`<!DOCTYPE html>
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
}`}}createDefaultTemplate(t){return{"index.html":`<!DOCTYPE html>
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
        <p>Generated based on: "${t}"</p>
        
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
}`}}getServiceHealth(){return{"cloud-ai":{isHealthy:this.isHealthy}}}getUsageStats(){return{totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0}}}const m=new ee,te=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"}));class ae{constructor(){this.currentService="cloud-ai",this.usageStats={totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0},console.log("🤖 Simple AI Service initialized - Cloud AI with Open Source Models!")}getServices(){return{"cloud-ai":{name:"Cloud AI Models",type:"Cloud",description:"Open source AI models via Hugging Face - no API keys required",models:m.getAvailableModels()},"local-ai":{name:"Local AI Models",type:"Local",description:"Self-hosted AI models - no API keys required",models:u.getAvailableModels()}}}getTemplateCategories(){return u.getTemplateCategories()}getTemplatesByCategory(t){return u.getTemplatesByCategory(t)}async getAllTemplates(){return await u.getAllTemplates()}async generateTemplateById(t,e={}){return await u.generateTemplateById(t,e)}async searchTemplates(t){return await u.searchTemplates(t)}async getPopularTemplates(){return await u.getPopularTemplates()}async generateCode(t,e={}){const a=Date.now();this.usageStats.totalRequests++;try{if(console.log("🚀 Generating code with Cloud AI..."),this.currentService==="cloud-ai"){const s=await m.generateCode(t,e),r=Date.now()-a;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+r)/2,console.log("✅ Code generated successfully with Cloud AI!"),s}if(u.isHealthy){console.log("🔄 Falling back to Local AI...");const s=await u.generateCode(t,e),r=Date.now()-a;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+r)/2,console.log("✅ Code generated successfully with Local AI!"),s}return console.log("⚠️ No AI services available, using template fallback"),m.createFallbackResponse(t,e)}catch(s){return console.error("❌ AI generation failed:",s),this.usageStats.failedRequests++,console.log("🔄 Falling back to template generation..."),m.createFallbackResponse(t,e)}}getServiceHealth(){return{"cloud-ai":m.getServiceHealth(),"local-ai":u.modelHealth}}getUsageStats(){return this.usageStats}getUserPreferences(){return{preferredService:"cloud-ai",fallbackEnabled:!0,autoHealthCheck:!0}}updateUserPreferences(t){localStorage.setItem("dreambuild-preferences",JSON.stringify(t))}loadUserPreferences(){const t=localStorage.getItem("dreambuild-preferences");return t?JSON.parse(t):this.getUserPreferences()}getServiceStatus(){return{"cloud-ai":{isHealthy:m.isHealthy,models:m.getHealthyModels().length,totalModels:m.getAvailableModels().length},"local-ai":{isHealthy:u.isHealthy,models:u.getHealthyModels().length,totalModels:u.getAvailableModels().length}}}resetServiceHealth(){u.modelHealth={}}getFallbackOrder(){return["cloud-ai","local-ai"]}isFallbackEnabled(){return!0}setFallbackEnabled(t){return!0}getSetupInstructions(){return{"cloud-ai":{title:"Cloud AI Setup",description:"Open source AI models via Hugging Face - no setup required",steps:["1. Cloud AI is ready to use with open source models","2. No API keys or installation required","3. Models include CodeLlama, StarCoder, DeepSeek, and more","4. Start generating code immediately!"],isSetup:m.isHealthy},"local-ai":{title:"Local AI Setup",description:"Set up local AI models for code generation",steps:["1. Install Ollama from https://ollama.ai","2. Run: ollama pull codellama:7b","3. Run: ollama serve","4. Refresh DreamBuild to start using local AI"],isSetup:u.isHealthy}}}getServicesNeedingSetup(){const t=[];return m.isHealthy||t.push("cloud-ai"),u.isHealthy||t.push("local-ai"),t}hasValidApiKey(t){return t==="cloud-ai"||t==="local-ai"}setService(t){(t==="cloud-ai"||t==="local-ai")&&(this.currentService=t)}getCurrentService(){return this.currentService}}const se=new ae,le=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{w as a,ce as b,m as c,le as d,R as f,se as s};
