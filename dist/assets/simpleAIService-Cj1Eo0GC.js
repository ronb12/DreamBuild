import{a as T}from"./utils-vendor-ngrFHoWO.js";import{_ as z}from"./monaco-editor-CKIEnvzl.js";import{i as D,g as F,f as M,e as $,o as N,A as O,j as d,l as h,h as w,p as x,v as k,q as f,w as b,x as I,t as H}from"./firebase-HQh6JyMG.js";import{e as U,r as q,c as W,g as G}from"./index-DtR55YXN.js";class _{constructor(){this.baseURL="https://api.github.com",this.trendingRepos=[],this.templateCache=new Map,this.cacheExpiry=30*60*1e3,this.isLoading=!1,console.log("🔗 GitHub Template Service initialized")}async getTrendingTemplates(a="javascript",e="stars",t="desc"){if(this.isLoading)return this.trendingRepos;this.isLoading=!0;try{console.log("📡 Fetching trending GitHub templates...");const r=["stars:>100 topic:todo-app","stars:>100 topic:calculator","stars:>100 topic:weather-app","stars:>100 topic:game","stars:>100 topic:portfolio","stars:>100 topic:blog","stars:>100 topic:landing-page","stars:>50 topic:react-tutorial","stars:>50 topic:javascript-project","stars:>50 topic:html-css"],s=[];for(const o of r)try{console.log(`📈 Fetching trending repositories: ${o}`);const c=await fetch(`${this.baseURL}/search/repositories?q=${encodeURIComponent(o)}&sort=stars&order=desc&per_page=20`,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"DreamBuild-Template-Service"}});if(!c.ok)if(console.error(`GitHub API error for query "${o}": ${c.status}`),c.status===403||c.status===429){console.log("⚠️ Rate limit hit, returning cached/fallback templates");const p=this.getFallbackTemplates();return this.trendingRepos=p,p}else if(c.status===422){console.log(`⚠️ Invalid query "${o}", skipping...`);continue}else{console.log(`⚠️ API error ${c.status} for query "${o}", skipping...`);continue}const l=await c.json();if(l.items&&l.items.length>0){console.log(`📈 Found ${l.items.length} trending template repositories for: ${o}`);const p=l.items.filter(g=>this.isTemplateRepository(g));s.push(...p)}await new Promise(p=>setTimeout(p,500))}catch(c){console.error(`Error fetching templates for ${o}:`,c);continue}const n=this.deduplicateRepos(s),i=this.filterTemplateRepos(n);if(i.length<10){console.log("📦 Adding fallback templates due to limited API results");const o=this.getFallbackTemplates();i.push(...o)}return this.trendingRepos=i.slice(0,25),console.log(`✅ Found ${this.trendingRepos.length} template repositories`),this.trendingRepos}catch(r){return console.error("❌ Failed to fetch trending templates:",r),this.getFallbackTemplates()}finally{this.isLoading=!1}}async getRepositoryTemplate(a){const e=`repo_${a.id}`;if(this.templateCache.has(e)){const t=this.templateCache.get(e);if(Date.now()-t.timestamp<this.cacheExpiry)return t.data}try{console.log(`📦 Processing template: ${a.full_name}`);const t=await this.getRepositoryContents(a.full_name),r=await this.parseRepositoryTemplate(a,t);return this.templateCache.set(e,{data:r,timestamp:Date.now()}),r}catch(t){return console.error(`❌ Failed to process template ${a.full_name}:`,t),null}}async getRepositoryContents(a,e=""){try{const t=await fetch(`${this.baseURL}/repos/${a}/contents/${e}`);if(!t.ok)throw new Error(`GitHub API error: ${t.status}`);return await t.json()}catch(t){return console.error(`Failed to fetch contents for ${a}:`,t),[]}}async parseRepositoryTemplate(a,e){const t=this.transformRepositoryToTemplate(a),r=this.extractKeyFiles(e);return t.files=r,t.fileCount=r.length,t.preview=a.owner?.avatar_url||"/api/placeholder/400/300",t}detectTemplateType(a,e){const t=a.name.toLowerCase(),r=(a.description||"").toLowerCase(),s=(a.topics||[]).join(" ").toLowerCase(),n=`${t} ${r} ${s}`;return n.includes("react-native")||n.includes("expo")||n.includes("flutter")||n.includes("mobile")?"mobile":n.includes("react")||n.includes("nextjs")||n.includes("next.js")||n.includes("gatsby")?"react":n.includes("vue")||n.includes("nuxt")||n.includes("quasar")?"vue":n.includes("angular")||n.includes("ionic")?"angular":n.includes("svelte")||n.includes("sveltekit")?"svelte":n.includes("node")||n.includes("express")||n.includes("koa")||n.includes("fastify")?"nodejs":n.includes("python")||n.includes("django")||n.includes("flask")||n.includes("fastapi")?"python":n.includes("php")||n.includes("laravel")||n.includes("symfony")||n.includes("codeigniter")?"php":n.includes("go")||n.includes("golang")||n.includes("gin")?"go":n.includes("rust")||n.includes("actix")||n.includes("rocket")?"rust":n.includes("java")||n.includes("spring")||n.includes("maven")?"java":n.includes("api")||n.includes("rest")||n.includes("graphql")||n.includes("microservice")?"api":n.includes("dashboard")||n.includes("admin")||n.includes("panel")?"dashboard":n.includes("ecommerce")||n.includes("e-commerce")||n.includes("shop")||n.includes("store")?"ecommerce":n.includes("blog")||n.includes("cms")||n.includes("content")?"blog":n.includes("portfolio")||n.includes("personal")||n.includes("resume")?"portfolio":n.includes("landing")||n.includes("marketing")||n.includes("promo")?"landing":n.includes("cms")||n.includes("content-management")||n.includes("headless")?"cms":n.includes("ui")||n.includes("ux")||n.includes("design-system")||n.includes("component-library")?"ui":n.includes("test")||n.includes("testing")||n.includes("e2e")||n.includes("unit-test")?"testing":n.includes("devops")||n.includes("ci-cd")||n.includes("docker")||n.includes("kubernetes")?"devops":n.includes("database")||n.includes("sql")||n.includes("nosql")||n.includes("mongodb")||n.includes("postgresql")?"database":n.includes("auth")||n.includes("authentication")||n.includes("jwt")||n.includes("oauth")?"auth":n.includes("payment")||n.includes("stripe")||n.includes("paypal")||n.includes("billing")?"payment":n.includes("analytics")||n.includes("tracking")||n.includes("metrics")||n.includes("monitoring")?"analytics":n.includes("documentation")||n.includes("docs")||n.includes("readme")||n.includes("guide")?"documentation":"web"}extractKeyFiles(a){const e=[],t=["package.json","package-lock.json","yarn.lock","index.html","index.js","index.jsx","index.ts","index.tsx","App.js","App.jsx","App.ts","App.tsx","main.js","main.ts","main.jsx","main.tsx","src/","components/","pages/","views/","README.md","readme.md","docker-compose.yml","Dockerfile","tsconfig.json","webpack.config.js","vite.config.js","tailwind.config.js","postcss.config.js"];return a.forEach(r=>{t.some(s=>r.name.toLowerCase()===s.toLowerCase()||r.name.toLowerCase().startsWith(s.toLowerCase()))&&e.push({name:r.name,path:r.path,type:r.type,size:r.size,downloadUrl:r.download_url})}),e.slice(0,20)}generateTemplateName(a){return a.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ").replace(/template|starter|boilerplate|example|demo/gi,"").trim()}categorizeTemplate(a,e){return{react:"web-apps",vue:"web-apps",angular:"web-apps",svelte:"web-apps",nodejs:"web-apps",python:"web-apps",php:"web-apps",go:"web-apps",rust:"web-apps",java:"web-apps",mobile:"mobile-apps",api:"apis",dashboard:"dashboards",ecommerce:"e-commerce",blog:"portfolios",portfolio:"portfolios",landing:"landing-pages",cms:"web-apps",ui:"web-apps",testing:"web-apps",devops:"apis",database:"apis",auth:"apis",payment:"apis",analytics:"dashboards",documentation:"portfolios",web:"web-apps"}[a]||"web-apps"}generateTags(a,e){const t=[e];a.language&&t.push(a.language.toLowerCase()),a.topics&&t.push(...a.topics.slice(0,3));const r={react:["react","javascript"],vue:["vue","javascript"],angular:["angular","typescript"],nodejs:["nodejs","express"],python:["python","django"],mobile:["react-native","mobile"]};return r[e]&&t.push(...r[e]),[...new Set(t)].slice(0,5)}deduplicateRepos(a){const e=new Set;return a.filter(t=>e.has(t.id)?!1:(e.add(t.id),!0))}isTemplateRepository(a){const e=a.name.toLowerCase(),t=(a.description||"").toLowerCase(),r=(a.topics||[]).join(" ").toLowerCase(),n=["todo-app","calculator","weather-app","recipe-app","expense-tracker","note-taking","bookmark-manager","task-manager","habit-tracker","budget-planner","calendar-app","contact-book","photo-gallery","music-player","video-player","chat-app","forum","blog","portfolio","landing-page","online-store","restaurant-menu","event-planner","booking-system","survey-form","quiz-app","game","puzzle","memory-game","tic-tac-toe","snake-game","pong","breakout","maze","word-search","sudoku","hangman","trivia","flashcards","timer","stopwatch","pomodoro","countdown","random-generator","password-generator","color-picker","unit-converter","currency-converter","tip-calculator","bmi-calculator","age-calculator","date-calculator","percentage-calculator","loan-calculator","mortgage-calculator","investment-calculator","tax-calculator","grade-calculator","gpa-calculator","starter","template","example","demo","sample","tutorial","beginner","simple","basic"].some(l=>e.includes(l)||t.includes(l)||r.includes(l)),i=a.stargazers_count>=10,o=new Date(a.updated_at)>new Date("2019-01-01"),c=a.description&&a.description.length>10;return n&&i&&o&&c}filterTemplateRepos(a){return a.filter(e=>this.isTemplateRepository(e))}async searchTemplates(a,e="all"){return(await this.getTrendingTemplates()).filter(r=>{const s=r.name.toLowerCase().includes(a.toLowerCase())||r.description.toLowerCase().includes(a.toLowerCase())||r.tags.some(i=>i.toLowerCase().includes(a.toLowerCase())),n=e==="all"||r.category===e;return s&&n})}async getTemplateById(a){const t=(await this.getTrendingTemplates()).find(r=>r.id===a);return t?await this.getRepositoryTemplate(t):null}async getTemplatesByCategory(a){return(await this.getTrendingTemplates()).filter(t=>t.category===a)}async getPopularTemplates(a=10){return(await this.getTrendingTemplates()).sort((t,r)=>r.popularity-t.popularity).slice(0,a)}getFallbackTemplates(){return[{id:"fallback-todo-1",name:"Simple Todo App",description:"A clean and simple todo application with add, edit, and delete functionality.",category:"todo-app",templateType:"web",difficulty:"beginner",estimatedTime:"2-4 hours",tags:["javascript","html","css","todo","task-management"],popularity:85,stars:150,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/simple-todo-app",features:["Add tasks","Mark complete","Delete tasks","Local storage"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999001,fullName:"example/simple-todo-app",htmlUrl:"https://github.com/example/simple-todo-app",cloneUrl:"https://github.com/example/simple-todo-app.git",language:"JavaScript",stargazersCount:150,forksCount:25,topics:["todo","javascript","html","css"],owner:"example"}},{id:"fallback-calculator-1",name:"Basic Calculator",description:"A functional calculator with basic arithmetic operations.",category:"calculator",templateType:"web",difficulty:"beginner",estimatedTime:"1-2 hours",tags:["javascript","html","css","calculator","math"],popularity:90,stars:200,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/basic-calculator",features:["Basic operations","Clear function","Responsive design"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999002,fullName:"example/basic-calculator",htmlUrl:"https://github.com/example/basic-calculator",cloneUrl:"https://github.com/example/basic-calculator.git",language:"JavaScript",stargazersCount:200,forksCount:30,topics:["calculator","javascript","math"],owner:"example"}},{id:"fallback-weather-1",name:"Weather Dashboard",description:"A weather app that displays current conditions and forecast.",category:"weather-app",templateType:"web",difficulty:"intermediate",estimatedTime:"3-5 hours",tags:["javascript","api","weather","dashboard"],popularity:75,stars:120,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/weather-dashboard",features:["Current weather","5-day forecast","Location search"],techStack:["HTML","CSS","JavaScript","Weather API"],isFallback:!0,githubData:{id:999003,fullName:"example/weather-dashboard",htmlUrl:"https://github.com/example/weather-dashboard",cloneUrl:"https://github.com/example/weather-dashboard.git",language:"JavaScript",stargazersCount:120,forksCount:20,topics:["weather","api","dashboard"],owner:"example"}},{id:"fallback-portfolio-1",name:"Personal Portfolio",description:"A modern, responsive portfolio website template.",category:"portfolio",templateType:"web",difficulty:"intermediate",estimatedTime:"4-6 hours",tags:["html","css","javascript","portfolio","responsive"],popularity:95,stars:300,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/personal-portfolio",features:["Responsive design","Project showcase","Contact form"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999004,fullName:"example/personal-portfolio",htmlUrl:"https://github.com/example/personal-portfolio",cloneUrl:"https://github.com/example/personal-portfolio.git",language:"HTML",stargazersCount:300,forksCount:50,topics:["portfolio","responsive","html","css"],owner:"example"}},{id:"fallback-game-1",name:"Snake Game",description:"Classic Snake game built with vanilla JavaScript.",category:"game",templateType:"web",difficulty:"intermediate",estimatedTime:"3-4 hours",tags:["javascript","game","canvas","snake"],popularity:80,stars:180,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/snake-game",features:["Keyboard controls","Score tracking","Game over screen"],techStack:["HTML","CSS","JavaScript","Canvas"],isFallback:!0,githubData:{id:999005,fullName:"example/snake-game",htmlUrl:"https://github.com/example/snake-game",cloneUrl:"https://github.com/example/snake-game.git",language:"JavaScript",stargazersCount:180,forksCount:35,topics:["game","snake","canvas","javascript"],owner:"example"}}]}transformRepositoryToTemplate(a,e="web"){return{id:`github_${a.id}`,name:this.generateTemplateName(a.name),description:a.description||`Template based on ${a.full_name}`,category:this.categorizeTemplate(this.detectTemplateType(a,[]),a),templateType:this.detectTemplateType(a,[]),difficulty:this.estimateDifficulty(a),estimatedTime:this.estimateTime(a),tags:this.generateTags(a,this.detectTemplateType(a,[])),popularity:Math.min(Math.floor(a.stargazers_count/100),100),stars:a.stargazers_count,lastUpdated:a.updated_at,createdAt:a.created_at,source:"github",repositoryUrl:a.html_url,features:this.extractFeatures(a),techStack:this.extractTechStack(a),githubData:{id:a.id,fullName:a.full_name,htmlUrl:a.html_url,cloneUrl:a.clone_url,language:a.language,stargazersCount:a.stargazers_count,forksCount:a.forks_count,topics:a.topics||[],owner:a.owner?.login}}}estimateDifficulty(a){return a.stargazers_count>500?"advanced":a.stargazers_count>100?"intermediate":"beginner"}estimateTime(a){const e=a.stargazers_count;return e>500?"6-8 hours":e>100?"3-5 hours":"1-3 hours"}extractFeatures(a){const e=[],t=a.name.toLowerCase(),r=(a.description||"").toLowerCase();return(t.includes("todo")||r.includes("todo"))&&e.push("Task management","Add/Edit tasks","Mark complete"),(t.includes("calculator")||r.includes("calculator"))&&e.push("Basic operations","Clear function"),(t.includes("weather")||r.includes("weather"))&&e.push("Current weather","Forecast","Location search"),(t.includes("portfolio")||r.includes("portfolio"))&&e.push("Project showcase","Responsive design","Contact form"),(t.includes("game")||r.includes("game"))&&e.push("Interactive gameplay","Score tracking"),e.length>0?e:["Modern design","Responsive layout"]}extractTechStack(a){const e=[];a.language&&e.push(a.language);const t=a.topics||[];return t.includes("react")&&e.push("React"),t.includes("vue")&&e.push("Vue"),t.includes("angular")&&e.push("Angular"),t.includes("html")&&e.push("HTML"),t.includes("css")&&e.push("CSS"),t.includes("javascript")&&e.push("JavaScript"),t.includes("typescript")&&e.push("TypeScript"),e.length>0?e:["HTML","CSS","JavaScript"]}clearCache(){this.templateCache.clear(),this.trendingRepos=[],console.log("🗑️ GitHub template cache cleared")}}const y=new _;class J{constructor(){this.nameHistory=[],this.creativeSuffixes=this.initializeCreativeSuffixes(),this.appCategories=this.initializeAppCategories(),this.namingPatterns=this.initializeNamingPatterns()}initializeCreativeSuffixes(){return{professional:["Pro","Elite","Master","Ultimate","Prime","Advanced","Premium","Enterprise"],modern:["Hub","Flow","Space","Lab","Studio","Works","Craft","Forge"],tech:["Tech","Digital","Smart","AI","Cloud","Sync","Link","Connect"],creative:["Creative","Innovative","Dynamic","Vibrant","Bold","Fresh","Modern","Next"],action:["Action","Boost","Turbo","Rocket","Flash","Swift","Rapid","Quick"],friendly:["Easy","Simple","Quick","Fast","Light","Mini","Lite","Basic"]}}initializeAppCategories(){return{productivity:{keywords:["todo","task","productivity","organizer","planner","manager","tracker"],prefixes:["Task","Plan","Organize","Manage","Track","Flow","Stream"],suffixes:["Manager","Tracker","Flow","Hub","Pro","Master"],themes:["efficiency","organization","productivity","management"]},entertainment:{keywords:["game","music","video","entertainment","fun","play","media"],prefixes:["Game","Play","Fun","Entertain","Media","Stream","Hub"],suffixes:["Zone","Hub","Center","Studio","Lab","World"],themes:["fun","entertainment","interactive","engaging"]},business:{keywords:["business","commerce","store","shop","sales","finance","dashboard"],prefixes:["Business","Commerce","Trade","Market","Sales","Finance","Dash"],suffixes:["Pro","Suite","Manager","Hub","Center","Platform"],themes:["professional","business","commercial","enterprise"]},education:{keywords:["learn","education","study","course","tutorial","knowledge","school"],prefixes:["Learn","Study","Edu","Knowledge","Skill","Course","Academy"],suffixes:["Hub","Center","Academy","School","Lab","Studio"],themes:["learning","education","knowledge","academic"]},health:{keywords:["health","fitness","medical","wellness","workout","diet","care"],prefixes:["Health","Fit","Wellness","Care","Medical","Vital","Life"],suffixes:["Tracker","Monitor","Care","Hub","Center","Pro"],themes:["health","wellness","fitness","medical"]},communication:{keywords:["chat","message","social","connect","network","community","talk"],prefixes:["Chat","Connect","Social","Network","Community","Talk","Link"],suffixes:["Hub","Connect","Network","Space","Center","Pro"],themes:["social","communication","networking","community"]},utility:{keywords:["calculator","converter","tool","utility","helper","assistant","widget"],prefixes:["Smart","Quick","Easy","Pro","Advanced","Super","Ultra"],suffixes:["Tool","Helper","Pro","Master","Ultimate","Plus"],themes:["utility","tool","helper","assistant"]},creative:{keywords:["design","art","creative","draw","paint","edit","photo","image"],prefixes:["Creative","Art","Design","Studio","Craft","Forge","Lab"],suffixes:["Studio","Lab","Works","Craft","Forge","Space"],themes:["creative","artistic","design","visual"]}}}initializeNamingPatterns(){return{descriptive:["{prefix}{suffix}","{category} {suffix}","{prefix} {category}"],creative:["{prefix}Flow","{prefix}Hub","{prefix}Space","{prefix}Lab"],professional:["{prefix}Pro","{prefix}Master","{prefix}Elite","{prefix}Ultimate"],modern:["{prefix}AI","{prefix}Cloud","{prefix}Smart","{prefix}Next"],simple:["{prefix}App","{prefix}Tool","{prefix}Helper","{prefix}Manager"]}}generateAppName(a,e={}){console.log("🏷️ Generating app name for prompt:",a);try{const t=this.analyzePrompt(a);console.log("📊 Prompt analysis:",t);const r=this.determineCategory(t);console.log("📂 App category:",r);const s=this.generateContextualName(t,r,e);console.log("🎯 Contextual name:",s);const n=this.ensureUniqueness(s);return console.log("✨ Unique name:",n),this.nameHistory.push({timestamp:new Date,prompt:a,analysis:t,category:r,generatedName:n,context:e}),n}catch(t){return console.error("❌ App naming failed:",t),this.generateFallbackName(a)}}analyzePrompt(a){const e=typeof a=="string"?a:JSON.stringify(a),t=e.toLowerCase();return{originalPrompt:e,lowerPrompt:t,words:e.split(/\s+/),keyWords:this.extractKeyWords(e),features:this.extractFeatures(e),intent:this.determineIntent(e),complexity:this.assessComplexity(e),targetAudience:this.identifyTargetAudience(e)}}extractKeyWords(a){const e=a.split(/\s+/),t=new Set(["create","build","make","generate","develop","design","app","application","website","page","site","web","with","for","and","or","the","a","an","in","on","at","to","from","by","of","is","are","was","were","be","been","have","has","had","do","does","did","will","would","could","should","may","might","can","must","shall"]);return e.filter(r=>r.length>2&&!t.has(r.toLowerCase())).map(r=>r.toLowerCase()).slice(0,10)}extractFeatures(a){const e=a.toLowerCase(),t=[];return(e.includes("responsive")||e.includes("mobile"))&&t.push("responsive"),(e.includes("dark")||e.includes("theme"))&&t.push("themed"),(e.includes("animation")||e.includes("interactive"))&&t.push("interactive"),(e.includes("search")||e.includes("filter"))&&t.push("searchable"),(e.includes("sort")||e.includes("organize"))&&t.push("organized"),(e.includes("export")||e.includes("download"))&&t.push("exportable"),(e.includes("import")||e.includes("upload"))&&t.push("importable"),(e.includes("api")||e.includes("database"))&&t.push("connected"),(e.includes("real-time")||e.includes("live"))&&t.push("realtime"),(e.includes("offline")||e.includes("cache"))&&t.push("offline"),t}determineIntent(a){const e=a.toLowerCase();return e.includes("simple")||e.includes("basic")?"simple":e.includes("advanced")||e.includes("complex")?"advanced":e.includes("professional")||e.includes("enterprise")?"professional":e.includes("fun")||e.includes("game")?"entertainment":e.includes("learn")||e.includes("education")?"educational":"general"}assessComplexity(a){const e=a.toLowerCase();let t=1;(e.includes("simple")||e.includes("basic"))&&(t=1),(e.includes("advanced")||e.includes("complex"))&&(t=3),(e.includes("enterprise")||e.includes("professional"))&&(t=4);const r=this.extractFeatures(a).length;t+=Math.min(r,2);const s=a.split(/\s+/).length;return s>20&&(t+=1),s>50&&(t+=1),Math.min(t,5)}identifyTargetAudience(a){const e=a.toLowerCase();return e.includes("business")||e.includes("enterprise")?"business":e.includes("student")||e.includes("education")?"students":e.includes("developer")||e.includes("programmer")?"developers":e.includes("designer")||e.includes("creative")?"creatives":e.includes("gamer")||e.includes("game")?"gamers":"general"}determineCategory(a){const{keyWords:e,features:t,intent:r}=a;for(const[n,i]of Object.entries(this.appCategories)){const o=e.filter(c=>i.keywords.some(l=>c.includes(l))).length;if(o>0)return{name:n,confidence:o/i.keywords.length,data:i}}const s={simple:"utility",advanced:"business",professional:"business",entertainment:"entertainment",educational:"education",general:"utility"};return{name:s[r]||"utility",confidence:.5,data:this.appCategories[s[r]]||this.appCategories.utility}}generateContextualName(a,e,t){const{keyWords:r,features:s,complexity:n,intent:i}=a,{data:o}=e;let c;i==="professional"||n>=4?c="professional":i==="entertainment"||s.includes("interactive")?c="creative":n<=2?c="simple":c="modern";const l=this.generateNameFromPattern(r,o,c,s);return this.addFeatureSuffixes(l,s,n)}generateNameFromPattern(a,e,t,r){const s=this.namingPatterns[t],n=s[Math.floor(Math.random()*s.length)],i=this.selectPrefix(a,e),o=this.selectSuffix(e,n);return n.replace("{prefix}",i).replace("{suffix}",o).replace("{category}",e.prefixes[0])}selectPrefix(a,e){if(a.length>0){const t=a[0].charAt(0).toUpperCase()+a[0].slice(1);if(t.length>2)return t}return e.prefixes[Math.floor(Math.random()*e.prefixes.length)]}selectSuffix(a,e){return e.includes("{suffix}")?a.suffixes[Math.floor(Math.random()*a.suffixes.length)]:""}addFeatureSuffixes(a,e,t){let r=a;if(t>=4){const s=this.creativeSuffixes.professional;r+=" "+s[Math.floor(Math.random()*s.length)]}else if(t>=3){const s=this.creativeSuffixes.modern;r+=" "+s[Math.floor(Math.random()*s.length)]}return e.includes("realtime")&&(r+=" Live"),e.includes("connected")&&(r+=" Cloud"),e.includes("interactive")&&(r+=" Interactive"),r}ensureUniqueness(a){let e=a,t=1;for(;this.nameHistory.some(r=>r.generatedName===e);)e=`${a} ${t}`,t++;return e}generateFallbackName(a){const e=["DreamApp","InnovateHub","CreativeSpace","TechFlow","SmartApp","NextGen","FutureApp","ProApp","EliteApp","MasterApp","UltimateApp","PrimeApp","SuperApp","MegaApp","TurboApp","AppBuilder","CodeCraft","DevFlow","BuildHub","CreateSpace"];return e[Math.floor(Math.random()*e.length)]}getNamingHistory(){return this.nameHistory}clearNamingHistory(){this.nameHistory=[]}getNamingStats(){const a={totalNames:this.nameHistory.length,categories:{},patterns:{},complexity:{1:0,2:0,3:0,4:0,5:0}};return this.nameHistory.forEach(e=>{const t=e.category.name;a.categories[t]=(a.categories[t]||0)+1,a.complexity[e.analysis.complexity]++}),a}}const A=new J,B={"codellama-7b":{name:"CodeLlama 7B",type:"Code Generation",baseURL:"http://localhost:11434/api",model:"codellama:7b",description:"Fast and efficient code generation (7B parameters)",languages:["python","javascript","java","cpp","go","rust","php","ruby"],strengths:["speed","efficiency","general-purpose"],ram_required:"8GB"},auto:{name:"Auto Select",type:"Auto Selection",baseURL:"http://localhost:11434/api",model:"auto",description:"Automatically selects the best available model",languages:["all"],strengths:["smart-selection","availability"],ram_required:"variable"}},S={"web-apps":{name:"Web Applications",description:"Full-stack web applications",templates:[{id:"react-dashboard",name:"React Dashboard",description:"Modern React dashboard with charts and analytics",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"ecommerce-store",name:"E-commerce Store",description:"Complete online store with cart and checkout",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"calculator-app",name:"Calculator App",description:"Modern calculator with basic arithmetic operations",category:"web-apps",files:["index.html","styles.css","script.js"]},{id:"weather-app",name:"Weather App",description:"Weather application with current conditions and forecast",category:"web-apps",files:["index.html","styles.css","script.js"]}]},"mobile-apps":{name:"Mobile Applications",description:"React Native mobile applications",templates:[{id:"todo-app",name:"Todo App",description:"Simple todo application with React Native",category:"mobile-apps",files:["App.js","components/TodoItem.js","styles.js"]}]}};class V{constructor(){if(this.isHealthy=!1,this.modelHealth={},this.availableModels=Object.keys(B),this.baseURL="http://localhost:11434/api",this.isProduction=window.location.protocol==="https:",this.isLocalhost=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",this.isProduction&&!this.isLocalhost){console.log("🌐 Production environment detected - skipping local AI detection"),this.isHealthy=!1;return}console.log("🔍 Initializing local AI health monitoring..."),this.checkHealth(),setInterval(()=>{this.checkHealthQuiet()},3e4)}async checkHealth(){if(!(this.isProduction&&!this.isLocalhost))try{const a=await T.get(`${this.baseURL}/tags`,{timeout:3e3});if(a.status===200){const e=this.isHealthy;this.isHealthy=!0,e||console.log("✅ Local AI service is healthy");const t=a.data.models||[];this.modelHealth={},t.forEach(r=>{this.modelHealth[r.name]={isHealthy:!0,size:r.size,modified_at:r.modified_at}})}else{const e=this.isHealthy;this.isHealthy=!1,e&&console.log("⚠️ Local AI service is not responding")}}catch(a){const e=this.isHealthy;this.isHealthy=!1,a.code==="ERR_NETWORK"||a.message.includes("CORS")?e||console.log("🔒 Local AI not accessible (CORS/Network) - using cloud AI"):a.code==="ECONNREFUSED"?e||console.log("💻 Ollama not running locally - using cloud AI"):e||console.log("⚠️ Local AI service not available:",a.message)}}async checkHealthQuiet(){if(!(this.isProduction&&!this.isLocalhost))try{const a=await T.get(`${this.baseURL}/tags`,{timeout:3e3});if(a.status===200){const e=this.isHealthy;this.isHealthy=!0;const t=a.data.models||[];this.modelHealth={},t.forEach(r=>{this.modelHealth[r.name]={isHealthy:!0,size:r.size,modified_at:r.modified_at}})}else this.isHealthy=!1}catch{this.isHealthy=!1}}getAvailableModels(){return Object.values(B)}getHealthyModels(){return Object.keys(this.modelHealth).filter(a=>this.modelHealth[a].isHealthy)}getTemplateCategories(){return S}getTemplatesByCategory(a){return S[a]?.templates||[]}async getAllTemplates(){const a=[];Object.values(S).forEach(r=>{a.push(...r.templates)});const t=(await y.getTrendingTemplates()).map(r=>y.transformRepositoryToTemplate(r));return[...a,...t]}async searchTemplates(a){const e=[];Object.values(S).forEach(n=>{e.push(...n.templates)});const r=(await y.searchTemplates(a)).map(n=>y.transformRepositoryToTemplate(n));return[...e,...r].filter(n=>n.name.toLowerCase().includes(a.toLowerCase())||(n.description||"").toLowerCase().includes(a.toLowerCase()))}async getPopularTemplates(){const a=[];Object.values(S).forEach(s=>{a.push(...s.templates)});const t=(await y.getPopularTemplates(5)).map(s=>y.transformRepositoryToTemplate(s));return[...a,...t].sort((s,n)=>(n.popularity||0)-(s.popularity||0)).slice(0,10)}async generateTemplateById(a,e={}){if(console.log(`🔍 Looking for template: ${a}`),a.startsWith("github_"))return await this.generateGitHubTemplate(a,e);const t=[];Object.values(S).forEach(n=>{t.push(...n.templates)}),console.log(`📋 Available templates: ${t.map(n=>n.id).join(", ")}`);const r=t.find(n=>n.id===a);if(!r)throw console.error(`❌ Template ${a} not found`),new Error(`Template ${a} not found`);console.log(`✅ Found template: ${r.name}`);const s=this.createTemplateFiles(r,e);return console.log(`📁 Generated files: ${Object.keys(s).join(", ")}`),s}async generateGitHubTemplate(a,e={}){try{console.log(`🚀 Generating GitHub template: ${a}`);const t=await y.getTemplateById(a);if(!t)throw new Error(`GitHub template ${a} not found`);const r=await this.createGitHubTemplateFiles(t,e);return console.log(`✅ Generated ${Object.keys(r).length} files from GitHub template`),r}catch(t){throw console.error(`❌ Failed to generate GitHub template ${a}:`,t),t}}async createGitHubTemplateFiles(a,e={}){const t={};try{const{githubData:r}=a;return t["README.md"]=`# ${a.name}

${a.description}

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
- **Type**: ${a.templateType}
- **Category**: ${a.category}
- **Tags**: ${a.tags.join(", ")}
- **Files**: ${a.fileCount}

## Customization
You can customize this template by modifying the files or using the AI prompt to generate additional features.
`,t["package.json"]=this.createPackageJson(a,e),t[this.getMainFileName(a)]=this.createMainFile(a,e),(a.templateType==="react"||a.templateType==="vue"||a.templateType==="web")&&(t["index.html"]=this.createIndexHtml(a,e)),Object.entries(e).forEach(([s,n])=>{typeof n=="string"&&(t[s]=n)}),t}catch(r){throw console.error("Failed to create GitHub template files:",r),r}}createPackageJson(a,e={}){const t={name:a.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:a.description,main:this.getMainFileName(a),scripts:{start:"npm run dev",dev:this.getDevScript(a),build:this.getBuildScript(a),test:'echo "No tests specified" && exit 0'},keywords:a.tags,author:e.author||"DreamBuild User",license:"MIT",repository:{type:"git",url:a.githubData.cloneUrl}};return t.dependencies=this.getTemplateDependencies(a),t.devDependencies=this.getTemplateDevDependencies(a),JSON.stringify(t,null,2)}getMainFileName(a){return{react:"src/App.jsx",vue:"src/main.js",angular:"src/main.ts",nodejs:"index.js",python:"main.py",mobile:"App.js",web:"index.js"}[a.templateType]||"index.js"}getDevScript(a){return{react:"react-scripts start",vue:"vue-cli-service serve",angular:"ng serve",nodejs:"nodemon index.js",python:"python main.py",mobile:"expo start",web:"live-server"}[a.templateType]||"node index.js"}getBuildScript(a){return{react:"react-scripts build",vue:"vue-cli-service build",angular:"ng build",nodejs:'echo "No build step needed"',python:'echo "No build step needed"',mobile:"expo build",web:'echo "No build step needed"'}[a.templateType]||'echo "No build step needed"'}getTemplateDependencies(a){return{react:{react:"^18.0.0","react-dom":"^18.0.0"},vue:{vue:"^3.0.0"},angular:{"@angular/core":"^15.0.0","@angular/common":"^15.0.0"},svelte:{svelte:"^3.0.0"},nodejs:{express:"^4.18.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{"react-native":"^0.70.0",expo:"~47.0.0"},api:{express:"^4.18.0"},dashboard:{react:"^18.0.0","react-dom":"^18.0.0"},ecommerce:{react:"^18.0.0","react-dom":"^18.0.0"},blog:{next:"^13.0.0",react:"^18.0.0"},portfolio:{react:"^18.0.0","react-dom":"^18.0.0"},landing:{react:"^18.0.0","react-dom":"^18.0.0"},web:{}}[a.templateType]||{}}getTemplateDevDependencies(a){return{react:{"react-scripts":"5.0.1"},vue:{"@vue/cli-service":"^5.0.0"},angular:{"@angular/cli":"^15.0.0"},svelte:{vite:"^4.0.0"},nodejs:{nodemon:"^2.0.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{},api:{nodemon:"^2.0.0"},dashboard:{"react-scripts":"5.0.1"},ecommerce:{"react-scripts":"5.0.1"},blog:{next:"^13.0.0"},portfolio:{"react-scripts":"5.0.1"},landing:{"react-scripts":"5.0.1"},web:{"live-server":"^1.2.0"}}[a.templateType]||{}}createMainFile(a,e={}){const t={react:`import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>${a.name}</h1>
        <p>${a.description}</p>
        <p>
          Template based on: <a href="${a.githubData.htmlUrl}">${a.githubData.fullName}</a>
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
      <h1>${a.name}</h1>
      <p>${a.description}</p>
      <p>Template based on: <a href="${a.githubData.htmlUrl}">${a.githubData.fullName}</a></p>
    </div>
  \`,
  styles: []
})
export class AppComponent {
  title = '${a.name}';
}`,svelte:`<script>
  export let name = '${a.name}';
<\/script>

<main>
  <h1>${a.name}</h1>
  <p>${a.description}</p>
  <p>Template based on: <a href="${a.githubData.htmlUrl}">${a.githubData.fullName}</a></p>
</main>`,nodejs:`const express = require('express');
const app = express();
// PORT removed - not needed in browser code

app.get('/', (req, res) => {
  res.send(\`
    <h1>${a.name}</h1>
    <p>${a.description}</p>
    <p>Template based on: <a href="${a.githubData.htmlUrl}">${a.githubData.fullName}</a></p>
  \`);
});

app.listen(PORT, () => {

});`,python:`from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', 
                         title='${a.name}',
                         description='${a.description}',
                         github_url='${a.githubData.htmlUrl}')

if __name__ == '__main__':
    app.run(debug=True)`,php:`<?php
echo "<h1>${a.name}</h1>";
echo "<p>${a.description}</p>";
echo "<p>Template based on: <a href='${a.githubData.htmlUrl}'>${a.githubData.fullName}</a></p>";
?>`,go:`package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "<h1>%s</h1><p>%s</p><p>Template based on: <a href='%s'>%s</a></p>", 
                "${a.name}", "${a.description}", "${a.githubData.htmlUrl}", "${a.githubData.fullName}")
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}`,rust:`use std::io;

fn main() {
    println!("Hello from {}!", "${a.name}");
    println!("{}", "${a.description}");
    println!("Template based on: {}", "${a.githubData.fullName}");
}`,java:`public class Main {
    public static void main(String[] args) {
        System.out.println("${a.name}");
        System.out.println("${a.description}");
        System.out.println("Template based on: ${a.githubData.fullName}");
    }
}`,api:`const express = require('express');
const app = express();
// PORT removed - not needed in browser code

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    name: '${a.name}',
    description: '${a.description}',
    github: '${a.githubData.fullName}'
  });
});

app.listen(PORT, () => {

});`,dashboard:`import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>${a.name}</h1>
        <p>${a.description}</p>
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
      <Text style={styles.title}>${a.name}</Text>
      <Text style={styles.description}>${a.description}</Text>
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
});`,web:`// ${a.name}
// ${a.description}

// Template based on: ${a.githubData.fullName}
// Repository: ${a.githubData.htmlUrl}`};return t[a.templateType]||t.web}createIndexHtml(a,e={}){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${a.name}</title>
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
        <h1>${a.name}</h1>
        <p>${a.description}</p>
        
        <div class="github-info">
            <h3>GitHub Repository</h3>
            <p><strong>Source:</strong> <a href="${a.githubData.htmlUrl}">${a.githubData.fullName}</a></p>
            <p><strong>Stars:</strong> ${a.githubData.stargazersCount}</p>
            <p><strong>Language:</strong> ${a.githubData.language||"JavaScript"}</p>
            <p><strong>Template Type:</strong> ${a.templateType}</p>
        </div>
        
        <p>🚀 Generated with DreamBuild's GitHub Template Integration</p>
    </div>
</body>
</html>`}createTemplateFiles(a,e={}){const t={};switch(a.id){case"react-dashboard":t["index.html"]=`<!DOCTYPE html>
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
}`;break;case"todo-app":t["index.html"]=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Todo App</h1>
        
        <div class="input-container">
            <input type="text" id="todoInput" placeholder="Add a new todo..." />
            <button id="addButton">Add</button>
        </div>
        
        <div class="filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="active">Active</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
        </div>
        
        <ul id="todoList"></ul>
        
        <div class="stats">
            <span id="totalCount">0</span> total, <span id="activeCount">0</span> active, <span id="completedCount">0</span> completed
        </div>
    </div>
    
    <script src="script.js"><\/script>
</body>
</html>`,t["styles.css"]=`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 2.5em;
    font-weight: 300;
}

.input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#todoInput {
    flex: 1;
    padding: 15px;
    border: 2px solid #e1e5e9;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
}

#todoInput:focus {
    border-color: #667eea;
}

#addButton {
    padding: 15px 25px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
}

#addButton:hover {
    background: #5a6fd8;
}

.filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center;
}

.filter-btn {
    padding: 8px 16px;
    border: 2px solid #e1e5e9;
    background: white;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
}

.filter-btn.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.filter-btn:hover {
    border-color: #667eea;
}

#todoList {
    list-style: none;
    margin-bottom: 20px;
}

.todo-item {
    display: flex;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    background: #f8f9fa;
    border-radius: 10px;
    transition: all 0.3s;
}

.todo-item:hover {
    background: #e9ecef;
}

.todo-item.completed {
    opacity: 0.6;
}

.todo-item.completed .todo-text {
    text-decoration: line-through;
    color: #6c757d;
}

.todo-checkbox {
    margin-right: 15px;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.todo-text {
    flex: 1;
    font-size: 16px;
    color: #333;
    cursor: pointer;
}

.delete-btn {
    background: #dc3545;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    transition: background 0.3s;
}

.delete-btn:hover {
    background: #c82333;
}

.stats {
    text-align: center;
    color: #6c757d;
    font-size: 14px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 10px;
}`,t["script.js"]=`class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.currentFilter = 'all';
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.render();
        this.updateStats();
    }
    
    bindEvents() {
        console.log('🔍 Binding events...');
        const addButton = document.getElementById('addButton');
        if (addButton) {
            console.log('✅ Add button found for event binding');
            addButton.addEventListener('click', () => {
                console.log('🔘 Add button clicked!');
                this.addTodo();
            });
        } else {
            console.log('❌ Add button not found for event binding');
        }
        
        const todoInput = document.getElementById('todoInput');
        if (todoInput) {
            console.log('✅ Todo input found for event binding');
            todoInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    console.log('🔘 Enter key pressed!');
                    this.addTodo();
                }
            });
        } else {
            console.log('❌ Todo input not found for event binding');
        }
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });
    }
    
    addTodo() {
        console.log('🔍 addTodo() called');
        const input = document.getElementById('todoInput');
        const text = input.value.trim();
        console.log('🔍 Input value:', text);
        
        // Validation
        if (!text) {
            console.log('❌ No text entered');
            this.showError('Please enter a todo item');
            return;
        }
        
        if (text.length < 2) {
            this.showError('Todo must be at least 2 characters long');
            return;
        }
        
        if (text.length > 100) {
            this.showError('Todo must be less than 100 characters');
            return;
        }
        
        // Check for duplicates
        if (this.todos.some(todo => todo.text.toLowerCase() === text.toLowerCase())) {
            this.showError('This todo already exists');
            return;
        }
        
        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date()
        };
        
        console.log('🔍 Adding todo to array:', todo);
        this.todos.unshift(todo);
        input.value = '';
        this.clearError();
        this.saveTodos();
        console.log('🔍 Calling render()');
        this.render();
        this.updateStats();
        this.showSuccess('Todo added successfully!');
        console.log('✅ Todo added successfully');
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
            this.updateStats();
        }
    }
    
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveTodos();
        this.render();
        this.updateStats();
    }
    
    setFilter(filter) {
        this.currentFilter = filter;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(\`[data-filter="\${filter}"]\`).classList.add('active');
        this.render();
    }
    
    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }
    
    render() {
        const todoList = document.getElementById('todoList');
        const filteredTodos = this.getFilteredTodos();
        
        todoList.innerHTML = filteredTodos.map(todo => \`
            <li class="todo-item \${todo.completed ? 'completed' : ''}">
                <input type="checkbox" class="todo-checkbox" \${todo.completed ? 'checked' : ''} 
                       onchange="todoApp.toggleTodo(\${todo.id})">
                <span class="todo-text" onclick="todoApp.toggleTodo(\${todo.id})">\${todo.text}</span>
                <button class="delete-btn" onclick="todoApp.deleteTodo(\${todo.id})">Delete</button>
            </li>
        \`).join('');
    }
    
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const active = total - completed;
        
        document.getElementById('totalCount').textContent = total;
        document.getElementById('activeCount').textContent = active;
        document.getElementById('completedCount').textContent = completed;
    }
    
    showError(message) {
        // Remove existing error
        this.clearError();
        
        // Create error element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = 'background: #f8d7da; color: #721c24; padding: 10px; border-radius: 5px; margin: 10px 0; border: 1px solid #f5c6cb;';
        
        // Insert after input container
        const inputContainer = document.querySelector('.input-container');
        inputContainer.parentNode.insertBefore(errorDiv, inputContainer.nextSibling);
    }
    
    clearError() {
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }
    
    showSuccess(message) {
        // Create success notification
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #d4edda; color: #155724; padding: 15px 20px; border-radius: 8px; border: 1px solid #c3e6cb; z-index: 1000; animation: slideIn 0.3s ease;';
        
        document.body.appendChild(successDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
    
    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}

// Add CSS animation
const style = document.createElement('style')
style.textContent = \`
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
\`
document.head.appendChild(style)

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const todoApp = new TodoApp();
});`;break;case"ecommerce-store":t["index.html"]=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Store</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>DreamStore</h1>
            <div class="cart">
                <span id="cartCount">0</span>
                <button id="cartButton">Cart</button>
            </div>
        </header>
        
        <div class="products" id="products">
            <!-- Products will be loaded here -->
        </div>
        
        <div class="cart-modal" id="cartModal">
            <div class="cart-content">
                <h2>Shopping Cart</h2>
                <div id="cartItems"></div>
                <div class="cart-total">
                    Total: $<span id="cartTotal">0.00</span>
                </div>
                <button id="checkoutButton">Checkout</button>
                <button id="closeCart">Close</button>
            </div>
        </div>
    </div>
    
    <script src="script.js"><\/script>
</body>
</html>`,t["styles.css"]=`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #f5f5f5;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
    color: #2c3e50;
    font-size: 2.5em;
    font-weight: 300;
}

.cart {
    display: flex;
    align-items: center;
    gap: 10px;
}

#cartCount {
    background: #e74c3c;
    color: white;
    padding: 5px 10px;
    border-radius: 50%;
    font-weight: bold;
}

#cartButton {
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
}

#cartButton:hover {
    background: #2980b9;
}

.products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.product {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.product:hover {
    transform: translateY(-5px);
}

.product img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
}

.product h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #2c3e50;
}

.product p {
    color: #7f8c8d;
    margin-bottom: 15px;
    line-height: 1.5;
}

.product-price {
    font-size: 1.5em;
    font-weight: bold;
    color: #27ae60;
    margin-bottom: 15px;
}

.add-to-cart {
    background: #27ae60;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    transition: background 0.3s;
}

.add-to-cart:hover {
    background: #229954;
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
    padding: 30px;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}

.cart-item:last-child {
    border-bottom: none;
}

.cart-total {
    font-size: 1.5em;
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
    color: #27ae60;
}

#checkoutButton, #closeCart {
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 5px;
    transition: background 0.3s;
}

#checkoutButton:hover, #closeCart:hover {
    background: #2980b9;
}

#closeCart {
    background: #95a5a6;
}

#closeCart:hover {
    background: #7f8c8d;
}`,t["script.js"]=`class EcommerceStore {
    constructor() {
        this.products = [
            {
                id: 1,
                name: 'Wireless Headphones',
                price: 99.99,
                description: 'High-quality wireless headphones with noise cancellation',
                image: 'https://via.placeholder.com/300x200/3498db/ffffff?text=Headphones'
            },
            {
                id: 2,
                name: 'Smart Watch',
                price: 199.99,
                description: 'Advanced smartwatch with health monitoring features',
                image: 'https://via.placeholder.com/300x200/e74c3c/ffffff?text=Smart+Watch'
            },
            {
                id: 3,
                name: 'Laptop Stand',
                price: 49.99,
                description: 'Adjustable laptop stand for better ergonomics',
                image: 'https://via.placeholder.com/300x200/27ae60/ffffff?text=Laptop+Stand'
            },
            {
                id: 4,
                name: 'Mechanical Keyboard',
                price: 129.99,
                description: 'RGB mechanical keyboard with customizable keys',
                image: 'https://via.placeholder.com/300x200/9b59b6/ffffff?text=Keyboard'
            }
        ];
        
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.init();
    }
    
    init() {
        this.renderProducts();
        this.updateCartCount();
        this.bindEvents();
    }
    
    bindEvents() {
        document.getElementById('cartButton').addEventListener('click', () => this.openCart());
        document.getElementById('closeCart').addEventListener('click', () => this.closeCart());
        document.getElementById('checkoutButton').addEventListener('click', () => this.checkout());
        
        // Close cart when clicking outside
        document.getElementById('cartModal').addEventListener('click', (e) => {
            if (e.target.id === 'cartModal') {
                this.closeCart();
            }
        });
    }
    
    renderProducts() {
        const productsContainer = document.getElementById('products');
        productsContainer.innerHTML = this.products.map(product => \`
            <div class="product">
                <img src="\${product.image}" alt="\${product.name}">
                <h3>\${product.name}</h3>
                <p>\${product.description}</p>
                <div class="product-price">$\${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="store.addToCart(\${product.id})">
                    Add to Cart
                </button>
            </div>
        \`).join('');
    }
    
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            const existingItem = this.cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
            this.saveCart();
            this.updateCartCount();
            this.showNotification('Product added to cart!');
        }
    }
    
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
    }
    
    updateQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartCount();
                this.renderCart();
            }
        }
    }
    
    openCart() {
        this.renderCart();
        document.getElementById('cartModal').style.display = 'block';
    }
    
    closeCart() {
        document.getElementById('cartModal').style.display = 'none';
    }
    
    renderCart() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty</p>';
            cartTotal.textContent = '0.00';
            return;
        }
        
        cartItems.innerHTML = this.cart.map(item => \`
            <div class="cart-item">
                <div>
                    <h4>\${item.name}</h4>
                    <p>$\${item.price.toFixed(2)} each</p>
                </div>
                <div>
                    <input type="number" value="\${item.quantity}" min="1" 
                           onchange="store.updateQuantity(\${item.id}, parseInt(this.value))" 
                           style="width: 60px; margin-right: 10px;">
                    <button onclick="store.removeFromCart(\${item.id})" 
                            style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
                        Remove
                    </button>
                </div>
            </div>
        \`).join('');
        
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);
    }
    
    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cartCount').textContent = count;
    }
    
    checkout() {
        if (this.cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(\`Thank you for your purchase! Total: $\${total.toFixed(2)}\`);
        
        this.cart = [];
        this.saveCart();
        this.updateCartCount();
        this.closeCart();
    }
    
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    
    showNotification(message) {
        // Simple notification
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 1001;
            font-weight: bold;
        \`;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
    }
}

// Initialize the store
const store = new EcommerceStore();`;break;case"calculator-app":t["index.html"]=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="calculator">
            <div class="display">
                <input type="text" id="result" readonly>
            </div>
            <div class="buttons">
                <button class="btn clear" onclick="calculator.clear()">C</button>
                <button class="btn operator" onclick="calculator.delete()">⌫</button>
                <button class="btn operator" onclick="calculator.append('%')">%</button>
                <button class="btn operator" onclick="calculator.append('/')">/</button>
                
                <button class="btn number" onclick="calculator.append('7')">7</button>
                <button class="btn number" onclick="calculator.append('8')">8</button>
                <button class="btn number" onclick="calculator.append('9')">9</button>
                <button class="btn operator" onclick="calculator.append('*')">×</button>
                
                <button class="btn number" onclick="calculator.append('4')">4</button>
                <button class="btn number" onclick="calculator.append('5')">5</button>
                <button class="btn number" onclick="calculator.append('6')">6</button>
                <button class="btn operator" onclick="calculator.append('-')">-</button>
                
                <button class="btn number" onclick="calculator.append('1')">1</button>
                <button class="btn number" onclick="calculator.append('2')">2</button>
                <button class="btn number" onclick="calculator.append('3')">3</button>
                <button class="btn operator" onclick="calculator.append('+')">+</button>
                
                <button class="btn number zero" onclick="calculator.append('0')">0</button>
                <button class="btn number" onclick="calculator.append('.')">.</button>
                <button class="btn equals" onclick="calculator.calculate()">=</button>
            </div>
        </div>
    </div>
    
    <script src="script.js"><\/script>
</body>
</html>`,t["styles.css"]=`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.calculator {
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.display {
    margin-bottom: 20px;
}

#result {
    width: 100%;
    height: 80px;
    font-size: 2.5em;
    text-align: right;
    border: none;
    background: #f8f9fa;
    border-radius: 10px;
    padding: 0 20px;
    color: #333;
    font-weight: 300;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}

.btn {
    height: 70px;
    border: none;
    border-radius: 10px;
    font-size: 1.5em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.number {
    background: #f8f9fa;
    color: #333;
}

.number:hover {
    background: #e9ecef;
}

.operator {
    background: #6c757d;
    color: white;
}

.operator:hover {
    background: #5a6268;
}

.clear {
    background: #dc3545;
    color: white;
}

.clear:hover {
    background: #c82333;
}

.equals {
    background: #28a745;
    color: white;
}

.equals:hover {
    background: #218838;
}

.zero {
    grid-column: span 2;
}

@media (max-width: 480px) {
    .container {
        padding: 15px;
    }
    
    .calculator {
        padding: 15px;
    }
    
    #result {
        height: 60px;
        font-size: 2em;
    }
    
    .btn {
        height: 60px;
        font-size: 1.2em;
    }
}`,t["script.js"]=`class Calculator {
    constructor() {
        this.display = document.getElementById('result');
        this.currentInput = '';
        this.operator = null;
        this.previousInput = '';
        this.shouldResetDisplay = false;
    }
    
    append(value) {
        if (this.shouldResetDisplay) {
            this.display.value = '';
            this.shouldResetDisplay = false;
        }
        
        if (value === '.' && this.display.value.includes('.')) {
            return;
        }
        
        if (this.display.value === '0' && value !== '.') {
            this.display.value = value;
        } else {
            this.display.value += value;
        }
    }
    
    clear() {
        this.display.value = '0';
        this.currentInput = '';
        this.operator = null;
        this.previousInput = '';
        this.shouldResetDisplay = false;
    }
    
    delete() {
        if (this.display.value.length > 1) {
            this.display.value = this.display.value.slice(0, -1);
        } else {
            this.display.value = '0';
        }
    }
    
    setOperator(op) {
        if (this.operator && !this.shouldResetDisplay) {
            this.calculate();
        }
        
        this.previousInput = this.display.value;
        this.operator = op;
        this.shouldResetDisplay = true;
    }
    
    calculate() {
        if (this.operator && this.previousInput) {
            const prev = parseFloat(this.previousInput);
            const current = parseFloat(this.display.value);
            let result;
            
            switch (this.operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        this.display.value = 'Error';
                        return;
                    }
                    result = prev / current;
                    break;
                case '%':
                    result = prev % current;
                    break;
                default:
                    return;
            }
            
            this.display.value = result.toString();
            this.operator = null;
            this.previousInput = '';
            this.shouldResetDisplay = true;
        }
    }
    
    // Handle keyboard input
    handleKeyPress(event) {
        const key = event.key;
        
        if (key >= '0' && key <= '9' || key === '.') {
            this.append(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            this.setOperator(key);
        } else if (key === 'Enter' || key === '=') {
            this.calculate();
        } else if (key === 'Escape' || key === 'c' || key === 'C') {
            this.clear();
        } else if (key === 'Backspace') {
            this.delete();
        }
    }
}

// Initialize calculator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
    
    document.addEventListener('keydown', (event) => {
        calculator.handleKeyPress(event);
    });

    // Prevent form submission on Enter
    document.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });
});`;break;case"crud-app":t["index.html"]=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Data Management App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Data Management System</h1>
            <p>Create, Read, Update, and Delete records with full validation</p>
        </header>
        
        <div class="form-section">
            <h2>Add New Record</h2>
            <form id="dataForm" class="data-form">
                <div class="form-group">
                    <label for="name">Name *</label>
                    <input type="text" id="name" name="name" required>
                    <span class="error" id="nameError"></span>
                </div>
                
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>
                    <span class="error" id="emailError"></span>
                </div>
                
                <div class="form-group">
                    <label for="age">Age *</label>
                    <input type="number" id="age" name="age" min="1" max="120" required>
                    <span class="error" id="ageError"></span>
                </div>
                
                <div class="form-group">
                    <label for="department">Department *</label>
                    <select id="department" name="department" required>
                        <option value="">Select Department</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                    </select>
                    <span class="error" id="departmentError"></span>
                </div>
                
                <div class="form-group">
                    <label for="status">Status</label>
                    <select id="status" name="status">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>
                
                <div class="form-actions">
                    <button type="submit" id="submitBtn">Add Record</button>
                    <button type="button" id="cancelBtn" style="display: none;">Cancel</button>
                </div>
            </form>
        </div>
        
        <div class="data-section">
            <div class="data-header">
                <h2>Records</h2>
                <div class="search-filter">
                    <input type="text" id="searchInput" placeholder="Search records...">
                    <select id="filterSelect">
                        <option value="all">All Departments</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>
            </div>
            
            <div class="data-table-container">
                <table id="dataTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Department</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="dataTableBody">
                        <!-- Data will be populated here -->
                    </tbody>
                </table>
            </div>
            
            <div class="pagination">
                <button id="prevBtn" disabled>Previous</button>
                <span id="pageInfo">Page 1 of 1</span>
                <button id="nextBtn" disabled>Next</button>
            </div>
        </div>
    </div>
    
    <script src="script.js"><\/script>
</body>
</html>`,t["styles.css"]=`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

header {
    text-align: center;
    margin-bottom: 40px;
}

header h1 {
    color: #333;
    font-size: 2.5em;
    margin-bottom: 10px;
    font-weight: 300;
}

header p {
    color: #666;
    font-size: 1.1em;
}

.form-section {
    background: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 30px;
}

.form-section h2 {
    color: #333;
    margin-bottom: 20px;
    font-size: 1.5em;
}

.data-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
}

.form-group input,
.form-group select {
    padding: 12px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus {
    border-color: #667eea;
}

.form-group input.error,
.form-group select.error {
    border-color: #e74c3c;
}

.error {
    color: #e74c3c;
    font-size: 12px;
    margin-top: 5px;
    display: none;
}

.error.show {
    display: block;
}

.form-actions {
    grid-column: 1 / -1;
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.form-actions button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

#submitBtn {
    background: #667eea;
    color: white;
}

#submitBtn:hover {
    background: #5a6fd8;
}

#cancelBtn {
    background: #6c757d;
    color: white;
}

#cancelBtn:hover {
    background: #5a6268;
}

.data-section h2 {
    color: #333;
    margin-bottom: 20px;
    font-size: 1.5em;
}

.data-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 15px;
}

.search-filter {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.search-filter input,
.search-filter select {
    padding: 10px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
}

.search-filter input:focus,
.search-filter select:focus {
    border-color: #667eea;
}

.data-table-container {
    overflow-x: auto;
    margin-bottom: 20px;
}

#dataTable {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

#dataTable th {
    background: #667eea;
    color: white;
    padding: 15px;
    text-align: left;
    font-weight: 600;
}

#dataTable td {
    padding: 15px;
    border-bottom: 1px solid #e1e5e9;
}

#dataTable tr:hover {
    background: #f8f9fa;
}

.action-buttons {
    display: flex;
    gap: 5px;
}

.action-buttons button {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s;
}

.edit-btn {
    background: #28a745;
    color: white;
}

.edit-btn:hover {
    background: #218838;
}

.delete-btn {
    background: #dc3545;
    color: white;
}

.delete-btn:hover {
    background: #c82333;
}

.status-badge {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
}

.status-active {
    background: #d4edda;
    color: #155724;
}

.status-inactive {
    background: #f8d7da;
    color: #721c24;
}

.status-pending {
    background: #fff3cd;
    color: #856404;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
}

.pagination button {
    padding: 8px 16px;
    border: 2px solid #667eea;
    background: white;
    color: #667eea;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
}

.pagination button:hover:not(:disabled) {
    background: #667eea;
    color: white;
}

.pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

#pageInfo {
    font-weight: 600;
    color: #333;
}

@media (max-width: 768px) {
    .container {
        padding: 15px;
    }
    
    .data-form {
        grid-template-columns: 1fr;
    }
    
    .data-header {
        flex-direction: column;
        align-items: stretch;
    }
    
    .search-filter {
        justify-content: stretch;
    }
    
    .search-filter input,
    .search-filter select {
        flex: 1;
    }
    
    #dataTable {
        font-size: 14px;
    }
    
    #dataTable th,
    #dataTable td {
        padding: 10px 8px;
    }
}`,t["script.js"]=`class CRUDApp {
    constructor() {
        this.data = this.loadData()
        this.currentEditId = null
        this.currentPage = 1
        this.itemsPerPage = 10
        this.filteredData = [...this.data]
        this.init()
    }
    
    init() {
        this.bindEvents()
        this.renderTable()
        this.updatePagination()
    }
    
    bindEvents() {
        // Form submission
        document.getElementById('dataForm').addEventListener('submit', (e) => {
            e.preventDefault()
            this.handleSubmit()
        })
        
        // Cancel button
        document.getElementById('cancelBtn').addEventListener('click', () => {
            this.cancelEdit()
        })
        
        // Search and filter
        document.getElementById('searchInput').addEventListener('input', () => {
            this.filterData()
        })
        
        document.getElementById('filterSelect').addEventListener('change', () => {
            this.filterData()
        })
        
        // Pagination
        document.getElementById('prevBtn').addEventListener('click', () => {
            this.previousPage()
        })
        
        document.getElementById('nextBtn').addEventListener('click', () => {
            this.nextPage()
        })
    }
    
    handleSubmit() {
        if (this.validateForm()) {
            const formData = this.getFormData()
            
            if (this.currentEditId) {
                this.updateRecord(this.currentEditId, formData)
            } else {
                this.addRecord(formData)
            }
            
            this.resetForm()
            this.renderTable()
            this.updatePagination()
            this.saveData()
        }
    }
    
    validateForm() {
        let isValid = true
        this.clearErrors()
        
        // Name validation
        const name = document.getElementById('name').value.trim()
        if (!name) {
            this.showError('nameError', 'Name is required')
            isValid = false
        } else if (name.length < 2) {
            this.showError('nameError', 'Name must be at least 2 characters')
            isValid = false
        }
        
        // Email validation
        const email = document.getElementById('email').value.trim()
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
        if (!email) {
            this.showError('emailError', 'Email is required')
            isValid = false
        } else if (!emailRegex.test(email)) {
            this.showError('emailError', 'Please enter a valid email')
            isValid = false
        } else if (this.isEmailDuplicate(email)) {
            this.showError('emailError', 'Email already exists')
            isValid = false
        }
        
        // Age validation
        const age = parseInt(document.getElementById('age').value)
        if (!age || age < 1 || age > 120) {
            this.showError('ageError', 'Age must be between 1 and 120')
            isValid = false
        }
        
        // Department validation
        const department = document.getElementById('department').value
        if (!department) {
            this.showError('departmentError', 'Department is required')
            isValid = false
        }
        
        return isValid
    }
    
    isEmailDuplicate(email) {
        return this.data.some(record => 
            record.email.toLowerCase() === email.toLowerCase() && 
            record.id !== this.currentEditId
        )
    }
    
    showError(elementId, message) {
        const errorElement = document.getElementById(elementId)
        errorElement.textContent = message
        errorElement.classList.add('show')
        
        const inputElement = errorElement.previousElementSibling
        inputElement.classList.add('error')
    }
    
    clearErrors() {
        document.querySelectorAll('.error').forEach(error => {
            error.classList.remove('show')
        })
        
        document.querySelectorAll('input, select').forEach(input => {
            input.classList.remove('error')
        })
    }
    
    getFormData() {
        return {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            age: parseInt(document.getElementById('age').value),
            department: document.getElementById('department').value,
            status: document.getElementById('status').value
        }
    }
    
    addRecord(data) {
        const newRecord = {
            id: Date.now(),
            ...data,
            createdAt: new Date().toISOString()
        }
        
        this.data.unshift(newRecord)
        this.filterData()
        
        // Show success message
        this.showNotification('Record added successfully!', 'success')
    }
    
    updateRecord(id, data) {
        const index = this.data.findIndex(record => record.id === id)
        if (index !== -1) {
            this.data[index] = {
                ...this.data[index],
                ...data,
                updatedAt: new Date().toISOString()
            }
            this.filterData()
            this.showNotification('Record updated successfully!', 'success')
        }
    }
    
    deleteRecord(id) {
        if (confirm('Are you sure you want to delete this record?')) {
            this.data = this.data.filter(record => record.id !== id)
            this.filterData()
            this.renderTable()
            this.updatePagination()
            this.saveData()
            this.showNotification('Record deleted successfully!', 'success')
        }
    }
    
    editRecord(id) {
        const record = this.data.find(r => r.id === id)
        if (record) {
            this.currentEditId = id
            document.getElementById('name').value = record.name
            document.getElementById('email').value = record.email
            document.getElementById('age').value = record.age
            document.getElementById('department').value = record.department
            document.getElementById('status').value = record.status
            
            document.getElementById('submitBtn').textContent = 'Update Record'
            document.getElementById('cancelBtn').style.display = 'inline-block'
            
            // Scroll to form
            document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' })
        }
    }
    
    cancelEdit() {
        this.currentEditId = null
        this.resetForm()
    }
    
    resetForm() {
        document.getElementById('dataForm').reset()
        document.getElementById('submitBtn').textContent = 'Add Record'
        document.getElementById('cancelBtn').style.display = 'none'
        this.clearErrors()
        this.currentEditId = null
    }
    
    filterData() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase()
        const filterDept = document.getElementById('filterSelect').value
        
        this.filteredData = this.data.filter(record => {
            const matchesSearch = !searchTerm || 
                record.name.toLowerCase().includes(searchTerm) ||
                record.email.toLowerCase().includes(searchTerm) ||
                record.department.toLowerCase().includes(searchTerm)
            
            const matchesFilter = filterDept === 'all' || record.department === filterDept
            
            return matchesSearch && matchesFilter
        })
        
        this.currentPage = 1
        this.renderTable()
        this.updatePagination()
    }
    
    renderTable() {
        const tbody = document.getElementById('dataTableBody')
        const startIndex = (this.currentPage - 1) * this.itemsPerPage
        const endIndex = startIndex + this.itemsPerPage
        const pageData = this.filteredData.slice(startIndex, endIndex)
        
        tbody.innerHTML = pageData.map(record => \`
            <tr>
                <td>\${record.id}</td>
                <td>\${record.name}</td>
                <td>\${record.email}</td>
                <td>\${record.age}</td>
                <td>\${record.department}</td>
                <td><span class="status-badge status-\${record.status}">\${record.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="edit-btn" onclick="crudApp.editRecord(\${record.id})">Edit</button>
                        <button class="delete-btn" onclick="crudApp.deleteRecord(\${record.id})">Delete</button>
                    </div>
                </td>
            </tr>
        \`).join('')
        
        if (pageData.length === 0) {
            tbody.innerHTML = \`
                <tr>
                    <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
                        No records found
                    </td>
                </tr>
            \`
        }
    }
    
    updatePagination() {
        const totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage)
        const pageInfo = document.getElementById('pageInfo')
        const prevBtn = document.getElementById('prevBtn')
        const nextBtn = document.getElementById('nextBtn')
        
        pageInfo.textContent = \`Page \${this.currentPage} of \${totalPages}\`
        prevBtn.disabled = this.currentPage === 1
        nextBtn.disabled = this.currentPage === totalPages || totalPages === 0
    }
    
    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--
            this.renderTable()
            this.updatePagination()
        }
    }
    
    nextPage() {
        const totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage)
        if (this.currentPage < totalPages) {
            this.currentPage++
            this.renderTable()
            this.updatePagination()
        }
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div')
        notification.className = \`notification notification-\${type}\`
        notification.textContent = message
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            animation: slideIn 0.3s ease;
            background: \${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        \`
        
        document.body.appendChild(notification)
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.remove()
        }, 3000)
    }
    
    loadData() {
        const saved = localStorage.getItem('crudAppData')
        if (saved) {
            return JSON.parse(saved)
        }
        
        // Return sample data if no saved data
        return [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                age: 30,
                department: 'IT',
                status: 'active',
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                name: 'Jane Smith',
                email: 'jane@example.com',
                age: 25,
                department: 'HR',
                status: 'active',
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                name: 'Bob Johnson',
                email: 'bob@example.com',
                age: 35,
                department: 'Finance',
                status: 'pending',
                createdAt: new Date().toISOString()
            }
        ]
    }
    
    saveData() {
        localStorage.setItem('crudAppData', JSON.stringify(this.data))
    }
}

// Add CSS animation
const style = document.createElement('style')
style.textContent = \`
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
\`
document.head.appendChild(style)

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const crudApp = new CRUDApp();
});`;break;case"weather-app":t["index.html"]=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Weather App</h1>
            <div class="search-container">
                <input type="text" id="cityInput" placeholder="Enter city name..." />
                <button id="searchButton">Search</button>
            </div>
        </header>
        
        <main>
            <div class="weather-card" id="weatherCard">
                <div class="weather-icon" id="weatherIcon">☀️</div>
                <div class="temperature" id="temperature">--°C</div>
                <div class="description" id="description">Enter a city to get weather</div>
                <div class="location" id="location">--</div>
                
                <div class="details">
                    <div class="detail-item">
                        <span class="label">Feels Like</span>
                        <span class="value" id="feelsLike">--°C</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Humidity</span>
                        <span class="value" id="humidity">--%</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Wind Speed</span>
                        <span class="value" id="windSpeed">-- km/h</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Pressure</span>
                        <span class="value" id="pressure">-- hPa</span>
                    </div>
                </div>
            </div>
            
            <div class="forecast" id="forecast">
                <!-- Forecast items will be added here -->
            </div>
        </main>
    </div>
    
    <script src="script.js"><\/script>
</body>
</html>`,t["styles.css"]=`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
    min-height: 100vh;
    color: #333;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

h1 {
    color: white;
    font-size: 2.5em;
    margin-bottom: 20px;
    font-weight: 300;
}

.search-container {
    display: flex;
    gap: 10px;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
}

#cityInput {
    flex: 1;
    padding: 15px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

#searchButton {
    padding: 15px 25px;
    background: #00b894;
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

#searchButton:hover {
    background: #00a085;
}

.weather-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    margin-bottom: 30px;
}

.weather-icon {
    font-size: 4em;
    margin-bottom: 20px;
}

.temperature {
    font-size: 3em;
    font-weight: 300;
    color: #2d3436;
    margin-bottom: 10px;
}

.description {
    font-size: 1.2em;
    color: #636e72;
    margin-bottom: 20px;
    text-transform: capitalize;
}

.location {
    font-size: 1.1em;
    color: #74b9ff;
    font-weight: 600;
    margin-bottom: 30px;
}

.details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.detail-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background: rgba(116, 185, 255, 0.1);
    border-radius: 10px;
}

.detail-item .label {
    font-size: 0.9em;
    color: #636e72;
    margin-bottom: 5px;
}

.detail-item .value {
    font-size: 1.2em;
    font-weight: 600;
    color: #2d3436;
}

.forecast {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
}

.forecast-item {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.forecast-day {
    font-weight: 600;
    color: #2d3436;
    margin-bottom: 10px;
}

.forecast-icon {
    font-size: 2em;
    margin-bottom: 10px;
}

.forecast-temp {
    color: #74b9ff;
    font-weight: 600;
}

.loading {
    opacity: 0.6;
    pointer-events: none;
}

.error {
    color: #e17055;
    background: rgba(225, 112, 85, 0.1);
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
}

@media (max-width: 600px) {
    .container {
        padding: 15px;
    }
    
    h1 {
        font-size: 2em;
    }
    
    .search-container {
        flex-direction: column;
    }
    
    .details {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .forecast {
        grid-template-columns: repeat(2, 1fr);
    }
}`,t["script.js"]=`class WeatherApp {
    constructor() {
        this.apiKey = 'demo'; // In a real app, you'd use a real API key
        this.currentWeather = null;
        this.forecast = [];
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.loadDefaultWeather();
    }
    
    bindEvents() {
        const searchButton = document.getElementById('searchButton');
        const cityInput = document.getElementById('cityInput');
        
        if (!searchButton) {
            console.error('Search button not found!');
            return;
        }
        
        if (!cityInput) {
            console.error('City input not found!');
            return;
        }
        
        console.log('Binding weather app events...');
        searchButton.addEventListener('click', () => {
            console.log('Search button clicked!');
            this.searchWeather();
        });
        
        cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                console.log('Enter key pressed!');
                this.searchWeather();
            }
        });
    }
    
    async searchWeather() {
        console.log('searchWeather called');
        const city = document.getElementById('cityInput').value.trim();
        console.log('City input value:', city);
        
        if (!city) {
            console.log('No city entered');
            this.showError('Please enter a city name');
            return;
        }
        
        console.log('Starting weather search for:', city);
        this.showLoading();
        try {
            // Simulate API call with demo data
            await this.simulateAPICall();
            this.updateWeatherDisplay(city);
            console.log('Weather search completed successfully');
        } catch (error) {
            console.error('Weather search failed:', error);
            this.showError('Failed to fetch weather data');
        } finally {
            this.hideLoading();
        }
    }
    
    async simulateAPICall() {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Generate demo weather data
        const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];
        const conditions = ['sunny', 'cloudy', 'rainy', 'snowy', 'partly cloudy'];
        const temperatures = Array.from({length: 20}, (_, i) => Math.floor(Math.random() * 30) + 5);
        
        this.currentWeather = {
            temperature: temperatures[0],
            condition: conditions[Math.floor(Math.random() * conditions.length)],
            feelsLike: temperatures[0] + Math.floor(Math.random() * 6) - 3,
            humidity: Math.floor(Math.random() * 40) + 40,
            windSpeed: Math.floor(Math.random() * 20) + 5,
            pressure: Math.floor(Math.random() * 50) + 1000
        };
        
        // Generate 5-day forecast
        this.forecast = Array.from({length: 5}, (_, i) => ({
            day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][i],
            icon: ['☀️', '⛅', '🌧️', '❄️', '🌤️'][Math.floor(Math.random() * 5)],
            temp: temperatures[i + 1]
        }));
    }
    
    updateWeatherDisplay(city) {
        const weather = this.currentWeather;
        
        // Update main weather display
        document.getElementById('temperature').textContent = \`\${weather.temperature}°C\`;
        document.getElementById('description').textContent = weather.condition;
        document.getElementById('location').textContent = city;
        document.getElementById('feelsLike').textContent = \`\${weather.feelsLike}°C\`;
        document.getElementById('humidity').textContent = \`\${weather.humidity}%\`;
        document.getElementById('windSpeed').textContent = \`\${weather.windSpeed} km/h\`;
        document.getElementById('pressure').textContent = \`\${weather.pressure} hPa\`;
        
        // Update weather icon
        const iconMap = {
            'sunny': '☀️',
            'cloudy': '☁️',
            'rainy': '🌧️',
            'snowy': '❄️',
            'partly cloudy': '⛅'
        };
        document.getElementById('weatherIcon').textContent = iconMap[weather.condition] || '☀️';
        
        // Update forecast
        this.updateForecast();
        
        // Clear input
        document.getElementById('cityInput').value = '';
    }
    
    updateForecast() {
        const forecastContainer = document.getElementById('forecast');
        forecastContainer.innerHTML = this.forecast.map(day => \`
            <div class="forecast-item">
                <div class="forecast-day">\${day.day}</div>
                <div class="forecast-icon">\${day.icon}</div>
                <div class="forecast-temp">\${day.temp}°C</div>
            </div>
        \`).join('');
    }
    
    loadDefaultWeather() {
        // Load default weather for demo
        this.simulateAPICall().then(() => {
            this.updateWeatherDisplay('New York');
        });
    }
    
    showLoading() {
        document.getElementById('weatherCard').classList.add('loading');
        document.getElementById('searchButton').textContent = 'Searching...';
        document.getElementById('searchButton').disabled = true;
    }
    
    hideLoading() {
        document.getElementById('weatherCard').classList.remove('loading');
        document.getElementById('searchButton').textContent = 'Search';
        document.getElementById('searchButton').disabled = false;
    }
    
    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.textContent = message;
        
        const weatherCard = document.getElementById('weatherCard');
        weatherCard.appendChild(errorDiv);
        
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
    }
}

// Initialize the weather app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const weatherApp = new WeatherApp();
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
</html>`}return t}async generateCode(a,e={}){console.log("🚀 Starting code generation for prompt:",a);try{return this.isProduction&&!this.isLocalhost?(console.log("🌐 Production environment - using template fallback"),await this.createFallbackResponse(a,e)):this.isHealthy?await this.generateWithLocalAI(a,e):(console.log("⚠️ Local AI not available, using template fallback"),await this.createFallbackResponse(a,e))}catch(t){return console.error("❌ Code generation failed:",t),await this.createFallbackResponse(a,e)}}async generateWithLocalAI(a,e={}){if(this.isGeneralQuestion(a))return console.log("❓ General question detected, providing conversational response..."),this.createConversationalResponse(a,e);const t=this.getBestAvailableModel(),r=this.createSystemPrompt(e),s={model:t,messages:[{role:"system",content:r},{role:"user",content:a}],stream:!1,options:{temperature:.7,top_p:.9,max_tokens:4e3}};try{const n=await T.post(`${this.baseURL}/chat`,s,{timeout:3e4,headers:{"Content-Type":"application/json"}});if(n.data&&n.data.message&&n.data.message.content){const i=n.data.message.content;return await this.parseAIResponse(i,a)}else throw new Error("Invalid response from local AI")}catch(n){throw console.error("❌ Local AI generation failed:",n),n}}getBestAvailableModel(){const a=this.getHealthyModels();return a.includes("codellama:7b")?"codellama:7b":a.includes("codellama:13b")?"codellama:13b":a.includes("codellama:34b")?"codellama:34b":a[0]||"codellama:7b"}createSystemPrompt(a={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

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

Generate practical, working applications that users can immediately use.`}async parseAIResponse(a,e){try{const t=a.match(/\{[\s\S]*\}/);if(t){const r=JSON.parse(t[0]);if(r.files)return r.files}return await this.createFallbackResponse(e,{})}catch(t){return console.error("❌ Failed to parse AI response:",t),await this.createFallbackResponse(e,{})}}isGeneralQuestion(a){if(a==null)return!1;let e;typeof a=="object"&&a.prompt?e=a.prompt:typeof a=="string"?e=a:e=String(a);const t=e.toLowerCase(),r=["what is","what are","what was","what will","what does","what do","how is","how are","how was","how will","how does","how do","when is","when are","when was","when will","when does","when do","where is","where are","where was","where will","where does","where do","why is","why are","why was","why will","why does","why do","who is","who are","who was","who will","who does","who do","weather","temperature","forecast","climate","rain","sunny","cloudy","news","current events","today","recent","latest","breaking","cook","recipe","food","ingredients","cooking","bake","fry","boil","travel","vacation","destination","hotel","flight","trip","visit","health","medicine","exercise","fitness","doctor","hospital","sick","education","learn","study","school","university","college","course","science","research","study","theory","experiment","discovery","history","historical","past","ancient","century","war","battle","business","finance","economy","market","stock","investment","money","sports","game","team","player","football","basketball","soccer","entertainment","movie","music","book","film","song","album","explain","tell me about","describe","define","meaning","definition","help me understand","can you explain","what does it mean","how does it work","is it","are you","do you","can you","will you","would you","should i","could i","would i","might i","may i"],s=["build","create","make","develop","generate","code","app","application","website","web app","mobile app","component","function","class","module","library","api","database","server","backend","frontend","react","vue","angular","node","python","javascript","html","css","js","ts","jsx","tsx","todo","calculator","dashboard","portfolio","blog","ecommerce","shop","store","landing page"],n=r.some(o=>t.includes(o));return s.some(o=>t.includes(o))?!1:!!(n||t.startsWith("what")||t.startsWith("how")||t.startsWith("when")||t.startsWith("where")||t.startsWith("why")||t.startsWith("who")||t.startsWith("is")||t.startsWith("are")||t.startsWith("do")||t.startsWith("does")||t.startsWith("can")||t.startsWith("will")||t.startsWith("would")||t.startsWith("should")||t.startsWith("could")||t.startsWith("explain")||t.startsWith("tell")||t.startsWith("describe")||t.startsWith("define")||t.endsWith("?")||t.includes("?")&&(t.includes("what")||t.includes("how")||t.includes("when")||t.includes("where")||t.includes("why")||t.includes("who")||t.includes("is")||t.includes("are")||t.includes("do")||t.includes("does")||t.includes("can")||t.includes("will")||t.includes("would")||t.includes("should")||t.includes("could")||t.includes("explain")||t.includes("tell")||t.includes("describe")||t.includes("define")))}createConversationalResponse(a,e={}){let t;typeof a=="object"&&a.prompt?t=a.prompt:typeof a=="string"?t=a:a==null?t="general question":t=String(a);const r=t.toLowerCase();return r.includes("weather")||r.includes("temperature")||r.includes("forecast")?{type:"conversational_response",message:"I'd be happy to help with weather information for your location. However, I don't have access to real-time weather data. For current weather conditions, I recommend checking a reliable weather service like Weather.com, AccuWeather, or your local weather app.",summary:"Weather information request",details:["Weather data requires real-time access to meteorological services","Recommended sources: Weather.com, AccuWeather, local weather apps","For accurate forecasts, use official weather services"],sources:["Weather.com","AccuWeather","National Weather Service"],prompt:a,generatedAt:new Date().toISOString(),context:e}:r.includes("cook")||r.includes("recipe")||r.includes("food")?{type:"conversational_response",message:"I can help with cooking questions! For recipes and cooking techniques, I recommend checking reliable cooking websites like AllRecipes.com, Food Network, or Serious Eats. These sources provide tested recipes and expert cooking advice.",summary:"Cooking and recipe information",details:["Cooking requires specific recipes and techniques","Recommended sources: AllRecipes.com, Food Network, Serious Eats","Always follow food safety guidelines when cooking"],sources:["AllRecipes.com","Food Network","Serious Eats"],prompt:a,generatedAt:new Date().toISOString(),context:e}:r.includes("capital")||r.includes("country")||r.includes("city")?{type:"conversational_response",message:"I can help with geography questions! For accurate and up-to-date geographical information, I recommend checking reliable sources like National Geographic, World Atlas, or official government websites.",summary:"Geography information",details:["Geographical information changes over time","Recommended sources: National Geographic, World Atlas, government sites","For current data, check official sources"],sources:["National Geographic","World Atlas","Government websites"],prompt:a,generatedAt:new Date().toISOString(),context:e}:{type:"conversational_response",message:`I understand you're asking about "${a}". While I'm primarily designed for code generation and development tasks, I can provide general information when I have access to current data. For the most accurate and up-to-date information, I recommend checking reliable sources or using a general-purpose AI assistant.`,summary:"General information request",details:["This appears to be a general knowledge question","For current information, check reliable sources","I can help with code generation and development tasks"],sources:["Wikipedia","Reliable news sources","Official websites"],prompt:a,generatedAt:new Date().toISOString(),context:e}}async createFallbackResponse(a,e={}){console.log("🔄 Creating fallback response for prompt:",a);let t;if(typeof a=="object"&&a.prompt?t=a.prompt:typeof a=="string"?t=a:a==null?t="web application":t=String(a),this.isGeneralQuestion(t))return console.log("❓ General question detected, providing conversational response..."),this.createConversationalResponse(t,e);const r=await this.generateFallbackCode(t,e),s=A.generateAppName(t,e),n=this.validateAppFeatures(r,t);return{type:"code_generation",files:r,projectName:s,message:`I've generated "${s}" - a ${this.extractAppType(t)} application based on your request. ${n.message}`,prompt:t,generatedAt:new Date().toISOString(),context:e,validation:n}}validateAppFeatures(a,e){const t={isFunctional:!0,features:[],message:"This is a fully functional template with working features:",issues:[]};if(a["index.html"]||(t.issues.push("Missing index.html"),t.isFunctional=!1),a["script.js"]){const r=a["script.js"];r.includes("addEventListener")&&t.features.push("Interactive buttons and inputs"),(r.includes("localStorage")||r.includes("sessionStorage"))&&t.features.push("Data persistence"),(r.includes("fetch")||r.includes("async")||r.includes("await"))&&t.features.push("API integration"),(r.includes("form")||r.includes("submit"))&&t.features.push("Form handling"),(r.includes("innerHTML")||r.includes("textContent"))&&t.features.push("Dynamic content updates")}if(a["styles.css"]){const r=a["styles.css"];r.includes("@media")&&t.features.push("Responsive design"),(r.includes("hover")||r.includes(":hover"))&&t.features.push("Interactive styling"),(r.includes("animation")||r.includes("transition"))&&t.features.push("Smooth animations")}return t.features.length>0?t.message+=" "+t.features.join(", ")+".":t.message+=" All core functionality is implemented and ready to use.",t.issues.length>0&&(t.message+=" Note: "+t.issues.join(", ")+"."),t}async generateFallbackCode(a,e={}){let t;typeof a=="object"&&a.prompt?t=a.prompt:typeof a=="string"?t=a:a==null?t="web application":t=String(a);const r=t.toLowerCase();return r.includes("dashboard")||r.includes("analytics")?await this.generateTemplateById("react-dashboard",e):r.includes("todo")||r.includes("task")?await this.generateTemplateById("todo-app",e):r.includes("crud")||r.includes("data management")||r.includes("admin panel")?await this.generateTemplateById("crud-app",e):r.includes("ecommerce")||r.includes("store")||r.includes("shop")?await this.generateTemplateById("ecommerce-store",e):r.includes("calculator")||r.includes("calc")?await this.generateTemplateById("calculator-app",e):r.includes("weather")?await this.generateTemplateById("weather-app",e):{"index.html":`<!DOCTYPE html>
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
}`}}extractAppType(a){let e;typeof a=="object"&&a.prompt?e=a.prompt:typeof a=="string"?e=a:a==null?e="web application":e=String(a);const t=e.toLowerCase();return t.includes("todo")?"todo list":t.includes("calculator")?"calculator":t.includes("dashboard")?"dashboard":t.includes("ecommerce")?"e-commerce store":t.includes("weather")?"weather app":t.includes("blog")?"blog":"web application"}}const u=new V;class Y{constructor(){this.app=null,this.db=null,this.storage=null,this.auth=null,this.user=null,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const a={apiKey:"your-api-key",authDomain:"your-project.firebaseapp.com",projectId:"your-project-id",storageBucket:"your-project.appspot.com",messagingSenderId:"123456789",appId:"your-app-id"};try{this.app=D(a)}catch(e){if(e.code==="app/duplicate-app")this.app=F();else if(e.code==="app/no-options")try{this.app=F()}catch{this.app=D({apiKey:"demo-key",authDomain:"demo.firebaseapp.com",projectId:"demo-project"})}else throw e}this.db=M(this.app),this.storage=U(this.app),this.auth=$(this.app),N(this.auth,e=>{this.user=e,console.log("Firebase auth state changed:",e?"authenticated":"not authenticated")});try{await O(this.auth),console.log("✅ Firebase anonymous auth successful")}catch(e){console.log("⚠️ Firebase auth not available, continuing without authentication:",e.message),this.user=null}this.isInitialized=!0,console.log("🔥 Firebase initialized successfully")}catch(a){console.error("❌ Failed to initialize Firebase:",a),this.isInitialized=!1,this.user=null,console.log("⚠️ Continuing without Firebase services")}}async storeProjectContext(a,e){try{await this.initialize();const t=d(this.db,"projectContexts",a);await h(t,{...e,userId:this.user?.uid||"anonymous",storedAt:new Date().toISOString(),dataSize:JSON.stringify(e).length}),console.log("✅ Project context stored successfully")}catch(t){throw console.error("❌ Failed to store project context:",t),t}}async loadProjectContext(a){try{await this.initialize();const e=d(this.db,"projectContexts",a),t=await w(e);return t.exists()?(console.log("✅ Project context loaded successfully"),t.data()):(console.log("❌ Project context not found"),null)}catch(e){return console.error("❌ Failed to load project context:",e),null}}async storeProjectFiles(a,e){try{await this.initialize();const t=d(this.db,"projectFiles",a);await h(t,{projectId:a,files:e,fileCount:Object.keys(e).length,totalSize:JSON.stringify(e).length,userId:this.user?.uid||"anonymous",storedAt:new Date().toISOString()}),console.log("✅ Project files stored successfully")}catch(t){throw console.error("❌ Failed to store project files:",t),t}}async loadProjectFiles(a){try{await this.initialize();const e=d(this.db,"projectFiles",a),t=await w(e);return t.exists()?(console.log("✅ Project files loaded successfully"),t.data().files):(console.log("❌ Project files not found"),null)}catch(e){return console.error("❌ Failed to load project files:",e),null}}async storeTemplate(a){try{await this.initialize();const e=d(this.db,"templates",a.id);await h(e,{...a,userId:this.user?.uid||"anonymous",updatedAt:new Date().toISOString()}),console.log("✅ Template stored successfully")}catch(e){throw console.error("❌ Failed to store template:",e),e}}async loadTemplates(){try{await this.initialize();const a=x(this.db,"templates"),e=await k(a),t=[];return e.forEach(r=>{t.push(r.data())}),console.log("✅ Templates loaded successfully"),t}catch(a){return console.error("❌ Failed to load templates:",a),[]}}async searchTemplates(a,e,t){try{await this.initialize();const r=x(this.db,"templates");let s=f(r);a&&a.length>0&&(s=f(s,b("keywords","array-contains-any",a))),e&&e.length>0&&(s=f(s,b("technologies","array-contains-any",e))),t&&t.length>0&&(s=f(s,b("patterns","array-contains-any",t)));const n=await k(s),i=[];return n.forEach(o=>{i.push(o.data())}),console.log("✅ Templates searched successfully"),i}catch(r){return console.error("❌ Failed to search templates:",r),[]}}async storeLargeFile(a,e,t){try{await this.initialize();const r=q(this.storage,`projects/${a}/${e}`),s=new Blob([t],{type:"text/plain"});await W(r,s);const n=await G(r);return console.log("✅ Large file stored successfully"),n}catch(r){throw console.error("❌ Failed to store large file:",r),r}}async loadLargeFile(a){try{const t=await(await fetch(a)).text();return console.log("✅ Large file loaded successfully"),t}catch(e){return console.error("❌ Failed to load large file:",e),null}}async getUserProjects(){try{await this.initialize();const a=x(this.db,"projectContexts"),e=f(a,b("userId","==",this.user?.uid||"anonymous")),t=await k(e),r=[];return t.forEach(s=>{r.push({id:s.id,...s.data()})}),console.log("✅ User projects loaded successfully"),r}catch(a){return console.error("❌ Failed to load user projects:",a),[]}}async deleteProject(a){try{await this.initialize();const e=d(this.db,"projectContexts",a);await I(e);const t=d(this.db,"projectFiles",a);await I(t),console.log("✅ Project deleted successfully")}catch(e){throw console.error("❌ Failed to delete project:",e),e}}async getStorageStats(){try{await this.initialize();const a=await this.getUserProjects();let e=0,t=0;for(const r of a)e+=r.dataSize||0,t+=r.fileCount||0;return{totalProjects:a.length,totalFiles:t,totalSize:e,totalSizeMB:Math.round(e/(1024*1024)*100)/100}}catch(a){return console.error("❌ Failed to get storage stats:",a),{totalProjects:0,totalFiles:0,totalSize:0,totalSizeMB:0}}}async storeConversationMemory(a,e){try{await this.initialize();const t=JSON.stringify(e),r=8e5;if(t.length>r){console.log("⚠️ Conversation data too large, storing in chunks");const s=this.chunkData(e,r);for(let n=0;n<s.length;n++){const i=d(this.db,"conversationMemory",`${a}_chunk_${n}`);await h(i,{projectId:a,chunkIndex:n,totalChunks:s.length,conversation:s[n],userId:this.user?.uid||"anonymous",lastUpdated:new Date().toISOString()})}console.log(`🧠 Conversation memory stored in ${s.length} chunks`)}else{const s=d(this.db,"conversationMemory",a);await h(s,{projectId:a,conversation:e,userId:this.user?.uid||"anonymous",lastUpdated:new Date().toISOString(),memorySize:t.length}),console.log("🧠 Conversation memory stored successfully")}}catch(t){throw console.error("❌ Failed to store conversation memory:",t),t}}chunkData(a,e){const t=[],r=JSON.stringify(a);let s=0;for(;s<r.length;){let n=Math.min(s+e,r.length);if(n<r.length){let i=r.lastIndexOf("}",n),o=r.lastIndexOf("]",n),c=r.lastIndexOf(",",n);const l=Math.max(i,o,c);l>s+e*.8&&(n=l+1)}try{t.push(JSON.parse(r.slice(s,n)))}catch{t.push(r.slice(s,n))}s=n}return t}async loadConversationMemory(a){try{await this.initialize();const e=d(this.db,"conversationMemory",a),t=await w(e);if(t.exists())return console.log("🧠 Conversation memory loaded successfully"),t.data().conversation;const r=x(this.db,"conversationMemory"),s=f(r,b("projectId","==",a)),n=await k(s);if(!n.empty){const i=[];n.forEach(c=>{i.push({index:c.data().chunkIndex,data:c.data().conversation})}),i.sort((c,l)=>c.index-l.index);const o=i.map(c=>c.data);return console.log(`🧠 Conversation memory loaded from ${i.length} chunks`),o}return console.log("❌ Conversation memory not found"),null}catch(e){return console.error("❌ Failed to load conversation memory:",e),null}}async addPromptToMemory(a,e,t,r){try{await this.initialize();let s=await this.loadConversationMemory(a)||{projectId:a,prompts:[],responses:[],context:{},createdAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return s.prompts.push({id:`prompt-${Date.now()}`,text:e,timestamp:new Date().toISOString(),context:r}),s.responses.push({id:`response-${Date.now()}`,promptId:s.prompts[s.prompts.length-1].id,text:t,timestamp:new Date().toISOString(),context:r}),s.context={...s.context,...r},s.lastUpdated=new Date().toISOString(),await this.storeConversationMemory(a,s),console.log("🧠 Prompt added to memory successfully"),s}catch(s){throw console.error("❌ Failed to add prompt to memory:",s),s}}async getConversationHistory(a,e=50){try{await this.initialize();const t=await this.loadConversationMemory(a);if(!t)return[];const r=t.prompts.slice(-e),s=t.responses.slice(-e);return{prompts:r,responses:s,context:t.context,totalPrompts:t.prompts.length,totalResponses:t.responses.length}}catch(t){return console.error("❌ Failed to get conversation history:",t),[]}}async searchConversationMemory(a,e){try{await this.initialize();const t=await this.loadConversationMemory(a);if(!t)return[];const r=[],s=e.toLowerCase();return t.prompts.forEach(n=>{n.text.toLowerCase().includes(s)&&r.push({type:"prompt",id:n.id,text:n.text,timestamp:n.timestamp,context:n.context})}),t.responses.forEach(n=>{n.text.toLowerCase().includes(s)&&r.push({type:"response",id:n.id,text:n.text,timestamp:n.timestamp,context:n.context})}),console.log("🔍 Conversation memory searched successfully"),r}catch(t){return console.error("❌ Failed to search conversation memory:",t),[]}}async getConversationContext(a,e){try{await this.initialize();const t=await this.loadConversationMemory(a);if(!t)return null;const r={projectId:a,currentPrompt:e,previousPrompts:t.prompts.slice(-10),previousResponses:t.responses.slice(-10),projectContext:t.context,conversationSummary:this.generateConversationSummary(t),relevantHistory:this.findRelevantHistory(t,e)};return console.log("🧠 Conversation context generated successfully"),r}catch(t){return console.error("❌ Failed to get conversation context:",t),null}}generateConversationSummary(a){const e=a.prompts,t=a.responses;return e.length===0?"No previous conversation":{totalPrompts:e.length,totalResponses:t.length,firstPrompt:e[0]?.text||"",lastPrompt:e[e.length-1]?.text||"",keyTopics:this.extractKeyTopics(e),projectEvolution:this.trackProjectEvolution(a)}}extractKeyTopics(a){const e=new Set;return a.forEach(t=>{t.text.toLowerCase().split(" ").forEach(s=>{s.length>4&&!this.isCommonWord(s)&&e.add(s)})}),Array.from(e).slice(0,10)}isCommonWord(a){return["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","two","way","who","boy","did","man","men","put","say","she","too","use"].includes(a)}trackProjectEvolution(a){const e=[],t=a.prompts,r=a.responses;for(let s=0;s<t.length;s++){const n=t[s],i=r[s];e.push({phase:s+1,prompt:n.text,response:i.text,timestamp:n.timestamp,context:n.context})}return e}findRelevantHistory(a,e){const t=[],r=e.toLowerCase().split(" ");return a.prompts.forEach((s,n)=>{const i=s.text.toLowerCase().split(" "),o=r.filter(c=>i.includes(c));o.length>2&&t.push({prompt:s.text,response:a.responses[n]?.text||"",relevance:o.length,timestamp:s.timestamp})}),t.sort((s,n)=>n.relevance-s.relevance).slice(0,5)}async storeAILearningPattern(a,e){try{await this.initialize();const t=d(this.db,"aiLearningPatterns",`${a}-${Date.now()}`);await h(t,{projectId:a,pattern:e,userId:this.user?.uid||"anonymous",createdAt:new Date().toISOString()}),console.log("🧠 AI learning pattern stored successfully")}catch(t){throw console.error("❌ Failed to store AI learning pattern:",t),t}}async getAILearningPatterns(a){try{await this.initialize();const e=x(this.db,"aiLearningPatterns"),t=f(e,b("projectId","==",a)),r=await k(t),s=[];return r.forEach(n=>{s.push(n.data())}),console.log("🧠 AI learning patterns loaded successfully"),s}catch(e){return console.error("❌ Failed to load AI learning patterns:",e),[]}}async clearConversationMemory(a){try{await this.initialize();const e=d(this.db,"conversationMemory",a);await I(e),console.log("🧠 Conversation memory cleared successfully")}catch(e){throw console.error("❌ Failed to clear conversation memory:",e),e}}async saveConversation(a){try{await this.initialize();const e=d(this.db,"conversations",a.id);await h(e,{...a,userId:this.user?.uid||"anonymous",updatedAt:new Date().toISOString()}),console.log("💬 Conversation saved successfully")}catch(e){throw console.error("❌ Failed to save conversation:",e),e}}async getConversation(a){try{await this.initialize();const e=d(this.db,"conversations",a),t=await w(e);return t.exists()?(console.log("💬 Conversation loaded successfully"),t.data()):null}catch(e){return console.error("❌ Failed to load conversation:",e),null}}async getUserConversations(){try{await this.initialize();const a=x(this.db,"conversations"),e=f(a,b("userId","==",this.user?.uid||"anonymous"),H("lastModified","desc")),t=await k(e),r=[];return t.forEach(s=>{r.push({id:s.id,...s.data()})}),console.log("💬 User conversations loaded successfully"),r}catch(a){return console.error("❌ Failed to load user conversations:",a),[]}}async saveFeatureRecommendations(a,e){try{await this.initialize();const t=d(this.db,"featureRecommendations",a);await h(t,{conversationId:a,recommendations:e,userId:this.user?.uid||"anonymous",createdAt:new Date().toISOString()}),console.log("🎯 Feature recommendations saved successfully")}catch(t){throw console.error("❌ Failed to save feature recommendations:",t),t}}async getFeatureRecommendations(a){try{await this.initialize();const e=d(this.db,"featureRecommendations",a),t=await w(e);return t.exists()?(console.log("🎯 Feature recommendations loaded successfully"),t.data().recommendations):[]}catch(e){return console.error("❌ Failed to load feature recommendations:",e),[]}}async saveIndustryStandardsCheck(a,e){try{await this.initialize();const t=d(this.db,"industryStandards",a);await h(t,{conversationId:a,standardsCheck:e,userId:this.user?.uid||"anonymous",checkedAt:new Date().toISOString()}),console.log("📊 Industry standards check saved successfully")}catch(t){throw console.error("❌ Failed to save industry standards check:",t),t}}async getIndustryStandardsCheck(a){try{await this.initialize();const e=d(this.db,"industryStandards",a),t=await w(e);return t.exists()?(console.log("📊 Industry standards check loaded successfully"),t.data().standardsCheck):null}catch(e){return console.error("❌ Failed to load industry standards check:",e),null}}}const R=new Y;class K{constructor(){this.currentConversation=null,this.conversationHistory=[],this.projectContext={},this.featureRecommendations=[],this.industryStandards=this.getIndustryStandards()}async initializeConversation(a,e={}){try{return this.currentConversation={id:a||`conv_${Date.now()}`,projectData:e,messages:[],context:{currentFeatures:e.features||[],techStack:e.techStack||[],appType:e.appType||"web",complexity:e.complexity||"basic",industry:e.industry||"general"},createdAt:new Date,lastModified:new Date},await this.loadConversationHistory(a),console.log("🔄 Conversation initialized for project:",a),this.currentConversation}catch(t){throw console.error("Failed to initialize conversation:",t),t}}async addMessage(a,e=null,t="user"){if(!this.currentConversation)throw new Error("No active conversation. Initialize conversation first.");const r={id:`msg_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,type:t,content:a,aiResponse:e,timestamp:new Date,context:{projectState:{...this.currentConversation.context},features:[...this.currentConversation.context.currentFeatures]}};return this.currentConversation.messages.push(r),this.currentConversation.lastModified=new Date,await this.saveConversation(),r}getConversationContext(){if(!this.currentConversation)return null;const a=this.currentConversation.messages.slice(-10);return{project:this.currentConversation.projectData,currentFeatures:this.currentConversation.context.currentFeatures,techStack:this.currentConversation.context.techStack,appType:this.currentConversation.context.appType,complexity:this.currentConversation.context.complexity,industry:this.currentConversation.context.industry,recentMessages:a.map(t=>({type:t.type,content:t.content,timestamp:t.timestamp})),conversationId:this.currentConversation.id}}async generateFeatureRecommendations(){if(!this.currentConversation)return[];const a=this.currentConversation.messages[this.currentConversation.messages.length-1];if(a&&a.aiResponse&&a.aiResponse.type==="conversational_response")return console.log("❓ Last message was conversational, skipping feature recommendations"),[];const e=this.getConversationContext(),t=e.currentFeatures||[],r=e.appType||"web",s=e.industry||"general",n=e.complexity||"basic",i=this.getIndustrySpecificRecommendations(s,r),o=this.getComplexityBasedRecommendations(n,r),c=this.getEssentialFeatureRecommendations(t,r),l=this.getAdvancedFeatureRecommendations(t,r,s),p=[...c,...i,...o,...l],g=this.deduplicateRecommendations(p,t),j=this.prioritizeRecommendations(g,e);return this.featureRecommendations=j.slice(0,10),this.featureRecommendations}getIndustrySpecificRecommendations(a,e){const t={ecommerce:[{name:"Shopping Cart",description:"Add shopping cart functionality with add/remove items",priority:"high",category:"core"},{name:"Payment Integration",description:"Integrate payment processing (Stripe, PayPal)",priority:"high",category:"payment"},{name:"Product Search",description:"Add search and filter functionality for products",priority:"medium",category:"search"},{name:"User Reviews",description:"Allow customers to review and rate products",priority:"medium",category:"social"},{name:"Inventory Management",description:"Track product stock and availability",priority:"high",category:"management"}],healthcare:[{name:"Patient Records",description:"Secure patient data management system",priority:"high",category:"data"},{name:"Appointment Scheduling",description:"Calendar system for booking appointments",priority:"high",category:"scheduling"},{name:"HIPAA Compliance",description:"Ensure healthcare data privacy compliance",priority:"critical",category:"security"},{name:"Prescription Management",description:"Digital prescription tracking and management",priority:"medium",category:"management"},{name:"Telemedicine",description:"Video consultation capabilities",priority:"medium",category:"communication"}],education:[{name:"Course Management",description:"Create and manage educational courses",priority:"high",category:"content"},{name:"Progress Tracking",description:"Track student learning progress and analytics",priority:"high",category:"analytics"},{name:"Quiz System",description:"Interactive quizzes and assessments",priority:"medium",category:"assessment"},{name:"Discussion Forums",description:"Student and teacher discussion boards",priority:"medium",category:"social"},{name:"Certificate Generation",description:"Automated certificate creation and delivery",priority:"low",category:"certification"}],finance:[{name:"Transaction History",description:"Detailed financial transaction tracking",priority:"high",category:"data"},{name:"Budget Planning",description:"Personal or business budget management tools",priority:"high",category:"planning"},{name:"Security Features",description:"Two-factor authentication and encryption",priority:"critical",category:"security"},{name:"Reporting Dashboard",description:"Financial reports and analytics dashboard",priority:"medium",category:"analytics"},{name:"Investment Tracking",description:"Portfolio and investment performance tracking",priority:"medium",category:"investment"}],general:[{name:"User Authentication",description:"Secure user login and registration system",priority:"high",category:"auth"},{name:"Data Validation",description:"Input validation and error handling",priority:"high",category:"validation"},{name:"Responsive Design",description:"Mobile-friendly responsive layout",priority:"high",category:"ui"},{name:"Search Functionality",description:"Search and filter capabilities",priority:"medium",category:"search"},{name:"Analytics Integration",description:"User behavior and performance analytics",priority:"medium",category:"analytics"}]};return t[a]||t.general}getComplexityBasedRecommendations(a,e){const t={basic:[{name:"Basic CRUD Operations",description:"Create, Read, Update, Delete functionality",priority:"high",category:"core"},{name:"Form Validation",description:"Client-side and server-side form validation",priority:"high",category:"validation"},{name:"Error Handling",description:"Comprehensive error handling and user feedback",priority:"medium",category:"ux"}],intermediate:[{name:"API Integration",description:"Connect to external APIs and services",priority:"high",category:"integration"},{name:"State Management",description:"Advanced state management (Redux, Context)",priority:"medium",category:"architecture"},{name:"Caching Strategy",description:"Implement caching for better performance",priority:"medium",category:"performance"},{name:"Testing Suite",description:"Unit and integration tests",priority:"medium",category:"testing"}],advanced:[{name:"Microservices Architecture",description:"Break down into microservices",priority:"high",category:"architecture"},{name:"Real-time Features",description:"WebSocket or Server-Sent Events",priority:"high",category:"realtime"},{name:"Advanced Security",description:"OAuth, JWT, rate limiting, security headers",priority:"high",category:"security"},{name:"Performance Optimization",description:"Code splitting, lazy loading, CDN",priority:"high",category:"performance"},{name:"Monitoring & Logging",description:"Application monitoring and logging system",priority:"medium",category:"monitoring"}]};return t[a]||t.basic}getEssentialFeatureRecommendations(a,e){return[{name:"Error Boundaries",description:"React error boundaries for graceful error handling",priority:"high",category:"reliability"},{name:"Loading States",description:"Loading indicators and skeleton screens",priority:"high",category:"ux"},{name:"Accessibility (a11y)",description:"WCAG compliance and screen reader support",priority:"high",category:"accessibility"},{name:"SEO Optimization",description:"Meta tags, structured data, sitemap",priority:"medium",category:"seo"},{name:"Performance Monitoring",description:"Core Web Vitals and performance tracking",priority:"medium",category:"performance"}].filter(r=>!a.some(s=>s.toLowerCase().includes(r.name.toLowerCase())||r.name.toLowerCase().includes(s.toLowerCase())))}getAdvancedFeatureRecommendations(a,e,t){return[{name:"PWA Support",description:"Progressive Web App capabilities",priority:"medium",category:"mobile"},{name:"Offline Support",description:"Service worker for offline functionality",priority:"medium",category:"offline"},{name:"Internationalization",description:"Multi-language support (i18n)",priority:"low",category:"localization"},{name:"Dark Mode",description:"Theme switching and dark mode support",priority:"low",category:"ui"},{name:"Advanced Analytics",description:"User behavior tracking and heatmaps",priority:"low",category:"analytics"}]}deduplicateRecommendations(a,e){const t=new Set;return a.filter(r=>{const s=r.name.toLowerCase();return t.has(s)||e.some(n=>n.toLowerCase().includes(s)||s.includes(n.toLowerCase()))?!1:(t.add(s),!0)})}prioritizeRecommendations(a,e){return a.sort((t,r)=>{const s={critical:4,high:3,medium:2,low:1},n=s[t.priority]||0,i=s[r.priority]||0;if(n!==i)return i-n;const o={core:4,security:4,auth:3,validation:3,ux:2,performance:2},c=o[t.category]||1;return(o[r.category]||1)-c})}getIndustryStandards(){return{security:["Input validation and sanitization","HTTPS enforcement","Authentication and authorization","Rate limiting and DDoS protection","Security headers (CSP, HSTS, etc.)","Regular security audits"],performance:["Core Web Vitals optimization","Image optimization and lazy loading","Code splitting and tree shaking","CDN implementation","Caching strategies","Database query optimization"],accessibility:["WCAG 2.1 AA compliance","Keyboard navigation support","Screen reader compatibility","Color contrast ratios","Alt text for images","Focus management"],code_quality:["TypeScript implementation","ESLint and Prettier configuration","Unit and integration tests","Code documentation","Error handling and logging","Code review process"],deployment:["CI/CD pipeline setup","Environment configuration","Monitoring and alerting","Backup and recovery","Scalability planning","Documentation and runbooks"]}}async checkIndustryStandards(a){const e=this.getIndustryStandards(),t=a.features||[],r={};return Object.keys(e).forEach(s=>{r[s]={total:e[s].length,implemented:0,missing:[],score:0},e[s].forEach(n=>{t.some(o=>o.toLowerCase().includes(n.toLowerCase())||n.toLowerCase().includes(o.toLowerCase()))?r[s].implemented++:r[s].missing.push(n)}),r[s].score=Math.round(r[s].implemented/r[s].total*100)}),r}generateConversationSummary(){if(!this.currentConversation)return null;const a=this.currentConversation.messages,e=this.currentConversation.context.currentFeatures,t=this.featureRecommendations;return{conversationId:this.currentConversation.id,messageCount:a.length,currentFeatures:e,recommendations:t.slice(0,5),lastActivity:this.currentConversation.lastModified,projectType:this.currentConversation.context.appType,industry:this.currentConversation.context.industry}}async saveConversation(){if(this.currentConversation)try{if(!this.currentConversation.id){console.log("⚠️ No conversation ID, skipping save");return}await R.saveConversation(this.currentConversation),console.log("💾 Conversation saved to Firebase")}catch(a){console.error("Failed to save conversation:",a)}}async loadConversationHistory(a){try{if(!a){console.log("⚠️ No projectId provided, skipping conversation history load");return}const e=await R.getConversation(a);e&&(this.currentConversation=e,this.conversationHistory=e.messages||[],console.log("📚 Conversation history loaded"))}catch(e){console.error("Failed to load conversation history:",e)}}getConversationHistory(){return this.currentConversation?this.currentConversation.messages:[]}clearConversation(){this.currentConversation=null,this.conversationHistory=[],this.projectContext={},this.featureRecommendations=[]}}const le=new K;class Q{constructor(){this.currentProject=null,this.existingFeatures=[],this.featureHistory=[]}async initializeProject(a){this.currentProject=a,this.existingFeatures=this.extractExistingFeatures(a),this.featureHistory=[],console.log("🔄 Incremental development initialized"),console.log("📋 Existing features:",this.existingFeatures)}extractExistingFeatures(a){const e=[],t=a.files||{};return Object.entries(t).forEach(([r,s])=>{if(typeof s=="string"){const n=this.analyzeFileForFeatures(r,s);e.push(...n)}}),[...new Set(e)]}analyzeFileForFeatures(a,e){const t=[],r=e.toLowerCase();return(r.includes("login")||r.includes("auth")||r.includes("signin"))&&t.push("Authentication"),(r.includes("database")||r.includes("firebase")||r.includes("mongodb"))&&t.push("Database"),(r.includes("responsive")||r.includes("mobile")||r.includes("@media"))&&t.push("Responsive Design"),(r.includes("fetch")||r.includes("axios")||r.includes("api"))&&t.push("API Integration"),(r.includes("form")||r.includes("input")||r.includes("submit"))&&t.push("Form Handling"),(r.includes("router")||r.includes("route")||r.includes("navigate"))&&t.push("Routing"),(r.includes("useState")||r.includes("useContext")||r.includes("redux"))&&t.push("State Management"),(r.includes("test")||r.includes("jest")||r.includes("spec"))&&t.push("Testing"),(r.includes("todo")||r.includes("task"))&&t.push("Todo Management"),(r.includes("shopping")||r.includes("cart")||r.includes("product"))&&t.push("E-commerce"),(r.includes("calendar")||r.includes("schedule")||r.includes("appointment"))&&t.push("Scheduling"),(r.includes("chat")||r.includes("message")||r.includes("conversation"))&&t.push("Messaging"),t}async processFeatureRequest(a,e){console.log("🔄 Processing feature request:",a);const t=this.isBugFixRequest(a);if(console.log("🐛 Is bug fix request:",t),t)return await this.processBugFix(a,e);const r=this.analyzeRequestedFeatures(a);console.log("🎯 Requested features:",r);const s=this.filterNewFeatures(r);if(console.log("✨ New features to add:",s),s.length===0)return{type:"no_new_features",message:"These features already exist in your app. Would you like to enhance or modify them instead?",existingFeatures:this.existingFeatures};const n=await this.generateIncrementalCode(s,a,e);return this.existingFeatures.push(...s),this.featureHistory.push({timestamp:new Date,features:s,prompt:a}),{type:"incremental_update",newFeatures:s,code:n,updatedFiles:this.getUpdatedFiles(n),message:`Added ${s.length} new feature(s): ${s.join(", ")}`}}isBugFixRequest(a){const e=a.toLowerCase();return["fix","fix the","fix a","fix this","fix that","broken","not working","doesn't work","isn't working","error","bug","issue","problem","button","click","clicking","clicked","correction","correct","wrong","incorrect","update","change","modify","adjust","improve","enhance","better"].some(r=>e.includes(r))}async processBugFix(a,e){console.log("🐛 Processing bug fix request:",a);const t=await this.generateBugFixCode(a,e);return this.featureHistory.push({timestamp:new Date,type:"bug_fix",prompt:a,description:"Bug fix applied"}),{type:"incremental_update",newFeatures:["Bug Fix"],code:t,updatedFiles:this.getUpdatedFiles(t),message:`Fixed the issue: ${a}`}}async generateBugFixCode(a,e){console.log("🔧 Generating bug fix code for:",a);const t=`Fix this issue in the existing code: ${a}

    Current project files:
    ${JSON.stringify(this.currentProject?.files||{},null,2)}

    Please analyze the existing code and fix the specific issue mentioned. 
    Return the corrected code as a JSON object with files.
    
    Focus on:
    1. Identifying the root cause of the issue
    2. Fixing the specific problem without breaking existing functionality
    3. Ensuring the fix is clean and follows best practices
    4. Making sure all buttons and interactions work properly
    
    Return the complete corrected files.`;try{const{default:r}=await z(async()=>{const{default:i}=await Promise.resolve().then(()=>ae);return{default:i}},void 0),s=await r.callHuggingFaceAPI("codellama/CodeLlama-7b-Python-hf",t,2048,.3);console.log("🤖 Bug fix AI response:",s);const n=await r.parseAIResponse(s,a);if(n&&Object.keys(n).length>0)return console.log("✅ Bug fix code generated successfully"),n}catch(r){console.error("❌ AI bug fix generation failed:",r)}return console.log("⚠️ Using fallback for bug fix"),this.currentProject?.files||{}}analyzeRequestedFeatures(a){const e=a.toLowerCase(),t=[];return(e.includes("login")||e.includes("auth")||e.includes("sign in")||e.includes("register"))&&t.push("Authentication"),(e.includes("database")||e.includes("store data")||e.includes("save data"))&&t.push("Database"),(e.includes("responsive")||e.includes("mobile")||e.includes("mobile-friendly"))&&t.push("Responsive Design"),(e.includes("api")||e.includes("fetch data")||e.includes("external data"))&&t.push("API Integration"),(e.includes("form")||e.includes("input")||e.includes("submit"))&&t.push("Form Handling"),(e.includes("navigation")||e.includes("pages")||e.includes("routing"))&&t.push("Routing"),(e.includes("state")||e.includes("manage data")||e.includes("global state"))&&t.push("State Management"),(e.includes("test")||e.includes("testing")||e.includes("unit test"))&&t.push("Testing"),(e.includes("todo")||e.includes("task")||e.includes("checklist"))&&t.push("Todo Management"),(e.includes("shopping")||e.includes("cart")||e.includes("ecommerce")||e.includes("store"))&&t.push("E-commerce"),(e.includes("calendar")||e.includes("schedule")||e.includes("booking"))&&t.push("Scheduling"),(e.includes("chat")||e.includes("message")||e.includes("communication"))&&t.push("Messaging"),(e.includes("search")||e.includes("filter")||e.includes("find"))&&t.push("Search Functionality"),(e.includes("notification")||e.includes("alert")||e.includes("reminder"))&&t.push("Notifications"),(e.includes("upload")||e.includes("file")||e.includes("image"))&&t.push("File Upload"),(e.includes("payment")||e.includes("stripe")||e.includes("paypal")||e.includes("billing"))&&t.push("Payment Processing"),t}filterNewFeatures(a){return a.filter(e=>!this.existingFeatures.some(t=>t.toLowerCase().includes(e.toLowerCase())||e.toLowerCase().includes(t.toLowerCase())))}async generateIncrementalCode(a,e,t){const r={};for(const s of a){const n=await this.generateFeatureCode(s,e,t);Object.assign(r,n)}return r}async generateFeatureCode(a,e,t){const s={Authentication:()=>this.generateAuthCode(),Database:()=>this.generateDatabaseCode(),"Responsive Design":()=>this.generateResponsiveCode(),"API Integration":()=>this.generateAPICode(),"Form Handling":()=>this.generateFormCode(),Routing:()=>this.generateRoutingCode(),"State Management":()=>this.generateStateCode(),Testing:()=>this.generateTestingCode(),"Todo Management":()=>this.generateTodoCode(),"E-commerce":()=>this.generateEcommerceCode(),Scheduling:()=>this.generateSchedulingCode(),Messaging:()=>this.generateMessagingCode(),"Search Functionality":()=>this.generateSearchCode(),Notifications:()=>this.generateNotificationCode(),"File Upload":()=>this.generateFileUploadCode(),"Payment Processing":()=>this.generatePaymentCode()}[a];return s?await s():this.generateGenericFeatureCode(a,e)}generateAuthCode(){return{"auth.js":`// Authentication Service
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
window.assert = assert`}}generateGenericFeatureCode(a,e){return{[`${a.toLowerCase().replace(/\s+/g,"_")}.js`]:`// ${a} Implementation
// Generated based on: "${e}"

class ${a.replace(/\s+/g,"")} {
  constructor() {
    this.initialized = false
    this.init()
  }

  init() {
    console.log('${a} initialized')
    this.initialized = true
  }

  // Add your ${a} methods here
  // This is a template - customize based on your specific needs
}

// Export for use
window.${a.replace(/\s+/g,"")} = ${a.replace(/\s+/g,"")}`}}getUpdatedFiles(a){return Object.keys(a)}getCurrentProject(){return{...this.currentProject,features:this.existingFeatures,featureHistory:this.featureHistory}}reset(){this.currentProject=null,this.existingFeatures=[],this.featureHistory=[]}}const E=new Q;class X{constructor(){this.colorPalettes=this.initializeColorPalettes(),this.themeTemplates=this.initializeThemeTemplates(),this.colorSchemes=this.initializeColorSchemes()}initializeColorPalettes(){return{modern:{primary:"#667eea",secondary:"#764ba2",accent:"#f093fb",background:"#f8fafc",surface:"#ffffff",text:"#1a202c",textSecondary:"#4a5568",success:"#48bb78",warning:"#ed8936",error:"#f56565",info:"#4299e1"},dark:{primary:"#4c51bf",secondary:"#553c9a",accent:"#9f7aea",background:"#1a202c",surface:"#2d3748",text:"#f7fafc",textSecondary:"#e2e8f0",success:"#68d391",warning:"#f6ad55",error:"#fc8181",info:"#63b3ed"},vibrant:{primary:"#ff6b6b",secondary:"#4ecdc4",accent:"#45b7d1",background:"#f8f9fa",surface:"#ffffff",text:"#2c3e50",textSecondary:"#7f8c8d",success:"#2ecc71",warning:"#f39c12",error:"#e74c3c",info:"#3498db"},pastel:{primary:"#a8e6cf",secondary:"#dcedc1",accent:"#ffd3a5",background:"#fefefe",surface:"#ffffff",text:"#2c3e50",textSecondary:"#7f8c8d",success:"#a8e6cf",warning:"#ffd3a5",error:"#ffaaa5",info:"#a8e6cf"},monochrome:{primary:"#2d3748",secondary:"#4a5568",accent:"#718096",background:"#ffffff",surface:"#f7fafc",text:"#1a202c",textSecondary:"#4a5568",success:"#38a169",warning:"#d69e2e",error:"#e53e3e",info:"#3182ce"},ocean:{primary:"#0ea5e9",secondary:"#0284c7",accent:"#06b6d4",background:"#f0f9ff",surface:"#ffffff",text:"#0c4a6e",textSecondary:"#0369a1",success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6"},sunset:{primary:"#f97316",secondary:"#ea580c",accent:"#fb923c",background:"#fff7ed",surface:"#ffffff",text:"#9a3412",textSecondary:"#c2410c",success:"#22c55e",warning:"#eab308",error:"#dc2626",info:"#3b82f6"},forest:{primary:"#16a34a",secondary:"#15803d",accent:"#22c55e",background:"#f0fdf4",surface:"#ffffff",text:"#14532d",textSecondary:"#166534",success:"#16a34a",warning:"#ca8a04",error:"#dc2626",info:"#2563eb"},purple:{primary:"#8b5cf6",secondary:"#7c3aed",accent:"#a78bfa",background:"#faf5ff",surface:"#ffffff",text:"#581c87",textSecondary:"#7c2d12",success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6"},custom:{}}}initializeThemeTemplates(){return{css:`
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
`}}initializeColorSchemes(){return{schemes:["modern","dark","vibrant","pastel","monochrome","ocean","sunset","forest","purple"],combinations:{"blue-green":["#0ea5e9","#10b981","#06b6d4","#22c55e"],"purple-pink":["#8b5cf6","#ec4899","#a78bfa","#f472b6"],"orange-red":["#f97316","#ef4444","#fb923c","#f87171"],"teal-cyan":["#14b8a6","#06b6d4","#5eead4","#67e8f9"],"yellow-amber":["#eab308","#f59e0b","#fde047","#fbbf24"],"indigo-violet":["#6366f1","#8b5cf6","#a5b4fc","#c4b5fd"],"emerald-lime":["#10b981","#84cc16","#6ee7b7","#bef264"],"rose-pink":["#f43f5e","#ec4899","#fb7185","#f472b6"]}}}generateThemeCSS(a,e=null){const t=e||this.colorPalettes[a]||this.colorPalettes.modern;return this.themeTemplates.css.replace(/\{(\w+)\}/g,(r,s)=>t[s]||t.primary)}generateThemeJS(a=null){const e=a||this.colorPalettes;return this.themeTemplates.js.replace("{themes}",JSON.stringify(e,null,2))}createCustomTheme(a,e){return this.colorPalettes.custom[a]={primary:e.primary||"#667eea",secondary:e.secondary||"#764ba2",accent:e.accent||"#f093fb",background:e.background||"#f8fafc",surface:e.surface||"#ffffff",text:e.text||"#1a202c",textSecondary:e.textSecondary||"#4a5568",success:e.success||"#48bb78",warning:e.warning||"#ed8936",error:e.error||"#f56565",info:e.info||"#4299e1"},this.colorPalettes.custom[a]}applyThemeToCode(a,e,t=null){const r=t||this.colorPalettes[e]||this.colorPalettes.modern;let s=a;const n={"#667eea":r.primary,"#764ba2":r.secondary,"#f093fb":r.accent,"#f8fafc":r.background,"#ffffff":r.surface,"#1a202c":r.text,"#4a5568":r.textSecondary,"#48bb78":r.success,"#ed8936":r.warning,"#f56565":r.error,"#4299e1":r.info};return Object.entries(n).forEach(([i,o])=>{s=s.replace(new RegExp(i,"g"),o)}),s=s.replace(/var\(--[\w-]+\)/g,i=>{const c=i.replace("var(--","").replace(")","").replace(/-([a-z])/g,l=>l[1].toUpperCase());return r[c]||i}),s}generateThemeSelector(a=null){return`
<div class="theme-selector">
  <h3>Choose Theme</h3>
  <div class="theme-grid">
    ${(a||this.colorSchemes.schemes).map(t=>`
      <button class="theme-option" data-theme="${t}" title="${t}">
        <div class="theme-preview" style="background: linear-gradient(135deg, ${this.colorPalettes[t]?.primary||"#667eea"} 0%, ${this.colorPalettes[t]?.secondary||"#764ba2"} 100%);"></div>
        <span>${t.charAt(0).toUpperCase()+t.slice(1)}</span>
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
</style>`}getAvailableThemes(){return Object.keys(this.colorPalettes)}getThemeColors(a){return this.colorPalettes[a]||this.colorPalettes.modern}validateColorScheme(a){const t=["primary","secondary","accent","background","surface","text"].filter(r=>!a[r]);if(t.length>0)throw new Error(`Missing required color keys: ${t.join(", ")}`);return!0}generatePaletteFromColor(a){const e=a.replace("#",""),t=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),s=parseInt(e.substr(4,2),16);return{primary:a,secondary:`#${Math.max(0,t-30).toString(16).padStart(2,"0")}${Math.max(0,r-30).toString(16).padStart(2,"0")}${Math.max(0,s-30).toString(16).padStart(2,"0")}`,accent:`#${Math.min(255,t+30).toString(16).padStart(2,"0")}${Math.min(255,r+30).toString(16).padStart(2,"0")}${Math.min(255,s+30).toString(16).padStart(2,"0")}`,background:"#f8fafc",surface:"#ffffff",text:"#1a202c",textSecondary:"#4a5568",success:"#48bb78",warning:"#ed8936",error:"#f56565",info:"#4299e1"}}}const v=new X;class Z{constructor(){this.validationHistory=[],this.testResults=[],this.featureTests=this.initializeFeatureTests(),this.validationRules=this.initializeValidationRules()}initializeFeatureTests(){return{buttons:{testName:"Button Functionality",tests:[{name:"Click Events",selector:'button, .btn, [role="button"]',test:"click",expected:"event fired"},{name:"Form Submission",selector:"form",test:"submit",expected:"form submitted"},{name:"Navigation Links",selector:"a[href]",test:"navigation",expected:"link works"}]},forms:{testName:"Form Functionality",tests:[{name:"Input Validation",selector:"input, textarea, select",test:"validation",expected:"valid input accepted"},{name:"Form Submission",selector:"form",test:"submit",expected:"form processes"},{name:"Required Fields",selector:"[required]",test:"required",expected:"required validation works"}]},interactive:{testName:"Interactive Elements",tests:[{name:"Dropdowns",selector:"select, .dropdown",test:"dropdown",expected:"options selectable"},{name:"Checkboxes",selector:'input[type="checkbox"]',test:"checkbox",expected:"state changes"},{name:"Radio Buttons",selector:'input[type="radio"]',test:"radio",expected:"selection works"},{name:"Sliders",selector:'input[type="range"]',test:"slider",expected:"value changes"}]},data:{testName:"Data Functionality",tests:[{name:"Local Storage",selector:"*",test:"localStorage",expected:"data persists"},{name:"Data Display",selector:".data, .content, .list",test:"display",expected:"data shows"},{name:"Data Updates",selector:".dynamic, .live",test:"update",expected:"data updates"}]},api:{testName:"API Functionality",tests:[{name:"Fetch Requests",selector:"*",test:"fetch",expected:"API calls work"},{name:"Error Handling",selector:"*",test:"error",expected:"errors handled"},{name:"Loading States",selector:".loading, .spinner",test:"loading",expected:"loading shows"}]},responsive:{testName:"Responsive Design",tests:[{name:"Mobile Layout",selector:"*",test:"mobile",expected:"mobile friendly"},{name:"Tablet Layout",selector:"*",test:"tablet",expected:"tablet friendly"},{name:"Desktop Layout",selector:"*",test:"desktop",expected:"desktop optimized"}]},performance:{testName:"Performance",tests:[{name:"Load Time",selector:"*",test:"load",expected:"fast loading"},{name:"Memory Usage",selector:"*",test:"memory",expected:"efficient memory"},{name:"Animation Performance",selector:".animated, .transition",test:"animation",expected:"smooth animations"}]}}}initializeValidationRules(){return{html:{name:"HTML Validation",rules:[{name:"Valid HTML Structure",test:"htmlStructure",required:!0,severity:"error"},{name:"Semantic HTML",test:"semanticHTML",required:!0,severity:"warning"},{name:"Accessibility",test:"accessibility",required:!0,severity:"warning"}]},css:{name:"CSS Validation",rules:[{name:"Valid CSS Syntax",test:"cssSyntax",required:!0,severity:"error"},{name:"Responsive Design",test:"responsive",required:!0,severity:"warning"},{name:"Cross-browser Compatibility",test:"browserCompatibility",required:!1,severity:"info"}]},javascript:{name:"JavaScript Validation",rules:[{name:"Valid JavaScript Syntax",test:"jsSyntax",required:!0,severity:"error"},{name:"Error Handling",test:"errorHandling",required:!0,severity:"warning"},{name:"Performance Optimization",test:"performance",required:!1,severity:"info"}]},functionality:{name:"Functionality Validation",rules:[{name:"All Buttons Work",test:"buttonFunctionality",required:!0,severity:"error"},{name:"All Forms Work",test:"formFunctionality",required:!0,severity:"error"},{name:"All Links Work",test:"linkFunctionality",required:!0,severity:"error"},{name:"Data Persistence",test:"dataPersistence",required:!1,severity:"warning"}]}}}async validateApp(a,e,t){console.log("🔍 Starting comprehensive app validation...");try{const r={timestamp:new Date().toISOString(),appName:e,prompt:t,files:Object.keys(a),results:{},summary:{},recommendations:[]};return console.log("📝 Validating code quality..."),r.results.codeQuality=await this.validateCodeQuality(a),console.log("⚙️ Validating feature functionality..."),r.results.functionality=await this.validateFunctionality(a),console.log("🚀 Validating performance..."),r.results.performance=await this.validatePerformance(a),console.log("♿ Validating accessibility..."),r.results.accessibility=await this.validateAccessibility(a),console.log("🌐 Validating browser compatibility..."),r.results.browserCompatibility=await this.validateBrowserCompatibility(a),console.log("🔒 Validating security..."),r.results.security=await this.validateSecurity(a),r.summary=this.generateValidationSummary(r.results),r.recommendations=this.generateRecommendations(r.results),this.validationHistory.push(r),console.log("✅ App validation complete!"),console.log(`📊 Overall Score: ${r.summary.overallScore}/100`),console.log(`✅ Passed: ${r.summary.passed}`),console.log(`❌ Failed: ${r.summary.failed}`),console.log(`⚠️ Warnings: ${r.summary.warnings}`),r}catch(r){return console.error("❌ App validation failed:",r),{timestamp:new Date().toISOString(),appName:e,prompt:t,error:r.message,success:!1}}}async validateCodeQuality(a){const e={html:{passed:0,failed:0,warnings:0,details:[]},css:{passed:0,failed:0,warnings:0,details:[]},javascript:{passed:0,failed:0,warnings:0,details:[]}};return Object.entries(a).forEach(([t,r])=>{if(t.endsWith(".html")){const s=this.validateHTML(r);e.html.passed+=s.passed,e.html.failed+=s.failed,e.html.warnings+=s.warnings,e.html.details.push(...s.details)}else if(t.endsWith(".css")){const s=this.validateCSS(r);e.css.passed+=s.passed,e.css.failed+=s.failed,e.css.warnings+=s.warnings,e.css.details.push(...s.details)}else if(t.endsWith(".js")||t.endsWith(".jsx")){const s=this.validateJavaScript(r);e.javascript.passed+=s.passed,e.javascript.failed+=s.failed,e.javascript.warnings+=s.warnings,e.javascript.details.push(...s.details)}}),e}validateHTML(a){const e={passed:0,failed:0,warnings:0,details:[]};return a.includes("<!DOCTYPE html>")&&a.includes("<html>")&&a.includes("</html>")?(e.passed++,e.details.push({type:"success",message:"Valid HTML structure"})):(e.failed++,e.details.push({type:"error",message:"Invalid HTML structure"})),["header","nav","main","section","article","aside","footer"].some(s=>a.includes(`<${s}`))?(e.passed++,e.details.push({type:"success",message:"Uses semantic HTML"})):(e.warnings++,e.details.push({type:"warning",message:"Consider using semantic HTML tags"})),a.includes("alt=")||a.includes("aria-")?(e.passed++,e.details.push({type:"success",message:"Accessibility attributes present"})):(e.warnings++,e.details.push({type:"warning",message:"Add accessibility attributes"})),a.includes("viewport")?(e.passed++,e.details.push({type:"success",message:"Responsive viewport meta tag"})):(e.warnings++,e.details.push({type:"warning",message:"Add viewport meta tag for responsiveness"})),e}validateCSS(a){const e={passed:0,failed:0,warnings:0,details:[]};return a.includes("{")&&a.includes("}")&&a.includes(":")?(e.passed++,e.details.push({type:"success",message:"Valid CSS syntax"})):(e.failed++,e.details.push({type:"error",message:"Invalid CSS syntax"})),a.includes("@media")||a.includes("responsive")||a.includes("mobile")?(e.passed++,e.details.push({type:"success",message:"Responsive design implemented"})):(e.warnings++,e.details.push({type:"warning",message:"Add responsive design with media queries"})),a.includes("flexbox")||a.includes("grid")||a.includes("var(")?(e.passed++,e.details.push({type:"success",message:"Uses modern CSS features"})):(e.warnings++,e.details.push({type:"warning",message:"Consider using modern CSS features"})),a.includes("--")&&a.includes("var(")?(e.passed++,e.details.push({type:"success",message:"Uses CSS custom properties"})):(e.warnings++,e.details.push({type:"warning",message:"Consider using CSS custom properties"})),e}validateJavaScript(a){const e={passed:0,failed:0,warnings:0,details:[]};return a.includes("function")||a.includes("const")||a.includes("let")||a.includes("var")?(e.passed++,e.details.push({type:"success",message:"Valid JavaScript syntax"})):(e.failed++,e.details.push({type:"error",message:"Invalid JavaScript syntax"})),a.includes("try")&&a.includes("catch")||a.includes("error")?(e.passed++,e.details.push({type:"success",message:"Error handling implemented"})):(e.warnings++,e.details.push({type:"warning",message:"Add error handling"})),a.includes("addEventListener")||a.includes("onclick")||a.includes("onload")?(e.passed++,e.details.push({type:"success",message:"Event handling implemented"})):(e.warnings++,e.details.push({type:"warning",message:"Add event handling"})),a.includes("const")||a.includes("let")||a.includes("=>")?(e.passed++,e.details.push({type:"success",message:"Uses modern JavaScript features"})):(e.warnings++,e.details.push({type:"warning",message:"Consider using modern JavaScript features"})),e}async validateFunctionality(a){const e={passed:0,failed:0,warnings:0,details:[]},t=Object.values(a).find(s=>typeof s=="string"&&s.includes("<html"))||"";t.includes("<button")||t.includes(".btn")?(e.passed++,e.details.push({type:"success",message:"Buttons found"})):(e.warnings++,e.details.push({type:"warning",message:"No buttons found"})),t.includes("<form")||t.includes("<input")?(e.passed++,e.details.push({type:"success",message:"Forms found"})):(e.warnings++,e.details.push({type:"warning",message:"No forms found"})),t.includes("<select")||t.includes("checkbox")||t.includes("radio")?(e.passed++,e.details.push({type:"success",message:"Interactive elements found"})):(e.warnings++,e.details.push({type:"warning",message:"No interactive elements found"}));const r=Object.values(a).find(s=>typeof s=="string"&&(s.includes("function")||s.includes("const")))||"";return r.includes("localStorage")||r.includes("sessionStorage")||r.includes("fetch")?(e.passed++,e.details.push({type:"success",message:"Data handling implemented"})):(e.warnings++,e.details.push({type:"warning",message:"Add data handling"})),e}async validatePerformance(a){const e={passed:0,failed:0,warnings:0,details:[]};Object.values(a).reduce((s,n)=>s+(typeof n=="string"?n.length:0),0)<1e5?(e.passed++,e.details.push({type:"success",message:"App size is reasonable"})):(e.warnings++,e.details.push({type:"warning",message:"App size is large, consider optimization"}));const r=Object.values(a).find(s=>typeof s=="string"&&s.includes("<html"))||"";return r.includes("async")||r.includes("defer")?(e.passed++,e.details.push({type:"success",message:"Script loading optimized"})):(e.warnings++,e.details.push({type:"warning",message:"Consider optimizing script loading"})),r.includes('loading="lazy"')||r.includes("alt=")?(e.passed++,e.details.push({type:"success",message:"Images optimized"})):(e.warnings++,e.details.push({type:"warning",message:"Consider image optimization"})),e}async validateAccessibility(a){const e={passed:0,failed:0,warnings:0,details:[]},t=Object.values(a).find(n=>typeof n=="string"&&n.includes("<html"))||"";return t.includes("alt=")?(e.passed++,e.details.push({type:"success",message:"Alt attributes present"})):(e.warnings++,e.details.push({type:"warning",message:"Add alt attributes to images"})),t.includes("aria-")?(e.passed++,e.details.push({type:"success",message:"ARIA attributes present"})):(e.warnings++,e.details.push({type:"warning",message:"Add ARIA attributes for accessibility"})),["header","nav","main","section","article","aside","footer"].some(n=>t.includes(`<${n}`))?(e.passed++,e.details.push({type:"success",message:"Semantic HTML used"})):(e.warnings++,e.details.push({type:"warning",message:"Use semantic HTML tags"})),t.includes("tabindex")||t.includes("onkeydown")||t.includes("onkeyup")?(e.passed++,e.details.push({type:"success",message:"Keyboard navigation supported"})):(e.warnings++,e.details.push({type:"warning",message:"Add keyboard navigation support"})),e}async validateBrowserCompatibility(a){const e={passed:0,failed:0,warnings:0,details:[]},t=Object.values(a).find(s=>typeof s=="string"&&s.includes("<html"))||"",r=Object.values(a).find(s=>typeof s=="string"&&s.includes("{")&&s.includes("}"))||"";return r.includes("-webkit-")||r.includes("-moz-")||r.includes("-ms-")?(e.passed++,e.details.push({type:"success",message:"CSS prefixes for browser compatibility"})):(e.warnings++,e.details.push({type:"warning",message:"Add CSS prefixes for better browser support"})),t.includes("polyfill")||t.includes("babel")?(e.passed++,e.details.push({type:"success",message:"Polyfills included"})):(e.warnings++,e.details.push({type:"warning",message:"Consider adding polyfills for older browsers"})),e}async validateSecurity(a){const e={passed:0,failed:0,warnings:0,details:[]},t=Object.values(a).find(s=>typeof s=="string"&&s.includes("<html"))||"",r=Object.values(a).find(s=>typeof s=="string"&&(s.includes("function")||s.includes("const")))||"";return r.includes("innerText")||r.includes("textContent")||r.includes("encodeURIComponent")?(e.passed++,e.details.push({type:"success",message:"XSS prevention measures"})):(e.warnings++,e.details.push({type:"warning",message:"Add XSS prevention measures"})),t.includes("https://")||!t.includes("http://")?(e.passed++,e.details.push({type:"success",message:"HTTPS used for external resources"})):(e.warnings++,e.details.push({type:"warning",message:"Use HTTPS for external resources"})),r.includes("validate")||r.includes("sanitize")||r.includes("filter")?(e.passed++,e.details.push({type:"success",message:"Input validation implemented"})):(e.warnings++,e.details.push({type:"warning",message:"Add input validation"})),e}generateValidationSummary(a){let e=0,t=0,r=0;Object.values(a).forEach(i=>{i.passed!==void 0?(e+=i.passed,t+=i.failed,r+=i.warnings):Object.values(i).forEach(o=>{o.passed!==void 0&&(e+=o.passed,t+=o.failed,r+=o.warnings)})});const s=e+t+r,n=s>0?Math.round(e/s*100):0;return{overallScore:n,passed:e,failed:t,warnings:r,total:s,status:n>=80?"excellent":n>=60?"good":n>=40?"fair":"needs_improvement"}}generateRecommendations(a){const e=[];return Object.entries(a).forEach(([t,r])=>{r.details?r.details.forEach(s=>{(s.type==="error"||s.type==="warning")&&e.push({category:t,type:s.type,message:s.message,priority:s.type==="error"?"high":"medium"})}):Object.entries(r).forEach(([s,n])=>{n.details&&n.details.forEach(i=>{(i.type==="error"||i.type==="warning")&&e.push({category:`${t}.${s}`,type:i.type,message:i.message,priority:i.type==="error"?"high":"medium"})})})}),e}getValidationHistory(){return this.validationHistory}clearValidationHistory(){this.validationHistory=[]}getValidationStats(){const a={totalValidations:this.validationHistory.length,averageScore:0,categories:{},statusDistribution:{excellent:0,good:0,fair:0,needs_improvement:0}};if(this.validationHistory.length>0){let e=0;this.validationHistory.forEach(t=>{t.summary&&(e+=t.summary.overallScore,a.statusDistribution[t.summary.status]++)}),a.averageScore=Math.round(e/this.validationHistory.length)}return a}}const L=new Z;class ee{constructor(){this.explanationTemplates=this.initializeExplanationTemplates(),this.featureDescriptions=this.initializeFeatureDescriptions(),this.techStackExplanations=this.initializeTechStackExplanations()}initializeExplanationTemplates(){return{appOverview:{template:"I've created a {appType} application called '{appName}' with {featureCount} key features. The app uses a {architecture} architecture and follows {designPattern} design patterns.",variables:["appType","appName","featureCount","architecture","designPattern"]},features:{template:"Key features include: {featureList}. Each feature is fully functional with proper error handling and user feedback.",variables:["featureList"]},technicalDetails:{template:"The application is built using {techStack} with {performance} performance optimizations and {security} security measures.",variables:["techStack","performance","security"]},userExperience:{template:"The user interface is {uiStyle} with {responsive} responsive design, {accessibility} accessibility features, and {interaction} interactive elements.",variables:["uiStyle","responsive","accessibility","interaction"]}}}initializeFeatureDescriptions(){return{"user-authentication":{name:"User Authentication",description:"Secure login and registration system with password validation and session management",benefits:["User security","Personalized experience","Data protection"]},"data-management":{name:"Data Management",description:"CRUD operations with local storage and data persistence",benefits:["Data persistence","User data management","Offline functionality"]},"responsive-design":{name:"Responsive Design",description:"Mobile-first design that works on all device sizes",benefits:["Mobile compatibility","Better user experience","Wider accessibility"]},"real-time-updates":{name:"Real-time Updates",description:"Live data updates and dynamic content refresh",benefits:["Current information","Better engagement","Dynamic experience"]},"search-functionality":{name:"Search Functionality",description:"Advanced search with filtering and sorting capabilities",benefits:["Easy content discovery","Better navigation","User efficiency"]},"form-validation":{name:"Form Validation",description:"Client-side and server-side validation with user feedback",benefits:["Data integrity","User guidance","Error prevention"]},navigation:{name:"Navigation System",description:"Intuitive navigation with breadcrumbs and menu systems",benefits:["Easy navigation","Better UX","Content organization"]},notifications:{name:"Notification System",description:"Toast notifications and alert systems for user feedback",benefits:["User feedback","Status updates","Better communication"]},"theme-support":{name:"Theme Support",description:"Light and dark theme support with customizable colors",benefits:["User preference","Accessibility","Modern design"]},"performance-optimization":{name:"Performance Optimization",description:"Code splitting, lazy loading, and performance monitoring",benefits:["Faster loading","Better performance","User satisfaction"]}}}initializeTechStackExplanations(){return{html5:{name:"HTML5",description:"Modern semantic HTML with accessibility features",benefits:["SEO optimization","Accessibility","Modern standards"]},css3:{name:"CSS3",description:"Advanced styling with Flexbox, Grid, and custom properties",benefits:["Modern design","Responsive layout","Maintainable styles"]},javascript:{name:"JavaScript ES6+",description:"Modern JavaScript with async/await, modules, and best practices",benefits:["Modern syntax","Better performance","Maintainable code"]},react:{name:"React",description:"Component-based architecture with hooks and state management",benefits:["Reusable components","Efficient rendering","Large ecosystem"]},vue:{name:"Vue.js",description:"Progressive framework with reactive data binding",benefits:["Easy learning curve","Flexible architecture","Great performance"]},angular:{name:"Angular",description:"Full-featured framework with TypeScript and dependency injection",benefits:["Enterprise-ready","Type safety","Comprehensive tooling"]},nodejs:{name:"Node.js",description:"Server-side JavaScript with npm ecosystem",benefits:["Full-stack JavaScript","Large ecosystem","High performance"]},firebase:{name:"Firebase",description:"Backend-as-a-Service with real-time database and authentication",benefits:["Rapid development","Real-time features","Scalable infrastructure"]},mongodb:{name:"MongoDB",description:"NoSQL database with flexible document storage",benefits:["Flexible schema","Scalable","JSON-like documents"]},postgresql:{name:"PostgreSQL",description:"Relational database with advanced features",benefits:["ACID compliance","Advanced queries","Data integrity"]}}}async generateExplanation(a,e,t,r=null){console.log("📝 Generating comprehensive app explanation...");try{const s={timestamp:new Date().toISOString(),appName:e,prompt:t,sections:{},summary:"",technicalDetails:{},recommendations:[]},n=this.analyzeGeneratedCode(a);return s.sections.overview=this.generateAppOverview(n,e,t),s.sections.features=this.generateFeaturesExplanation(n),s.sections.technicalDetails=this.generateTechnicalDetails(n),s.sections.userExperience=this.generateUserExperienceExplanation(n),s.sections.codeStructure=this.generateCodeStructureExplanation(a),s.sections.performance=this.generatePerformanceExplanation(n),s.sections.security=this.generateSecurityExplanation(n),s.sections.deployment=this.generateDeploymentExplanation(n),s.summary=this.generateSummary(s.sections),s.recommendations=this.generateRecommendations(n,r),s.technicalDetails={files:Object.keys(a),linesOfCode:this.calculateLinesOfCode(a),complexity:this.calculateComplexity(n),dependencies:this.extractDependencies(a),architecture:n.architecture,patterns:n.patterns},console.log("✅ App explanation generated successfully!"),s}catch(s){return console.error("❌ Explanation generation failed:",s),{timestamp:new Date().toISOString(),appName:e,prompt:t,error:s.message,success:!1}}}analyzeGeneratedCode(a){const e={appType:"web application",architecture:"monolithic",patterns:[],features:[],techStack:[],performance:[],security:[],accessibility:[],responsive:!1,interactive:!1,dataHandling:!1,apiIntegration:!1},t=Object.values(a).find(n=>typeof n=="string"&&n.includes("<html"))||"",r=Object.values(a).find(n=>typeof n=="string"&&n.includes("{")&&n.includes("}"))||"",s=Object.values(a).find(n=>typeof n=="string"&&(n.includes("function")||n.includes("const")))||"";return t.includes("todo")||t.includes("task")?e.appType="todo/task management application":t.includes("shop")||t.includes("cart")||t.includes("product")?e.appType="e-commerce application":t.includes("dashboard")||t.includes("chart")||t.includes("analytics")?e.appType="dashboard/analytics application":t.includes("blog")||t.includes("post")||t.includes("article")?e.appType="blog/content management application":t.includes("chat")||t.includes("message")||t.includes("conversation")?e.appType="chat/messaging application":t.includes("game")||t.includes("score")||t.includes("level")?e.appType="game application":t.includes("weather")||t.includes("forecast")||t.includes("temperature")?e.appType="weather application":t.includes("calendar")||t.includes("event")||t.includes("schedule")?e.appType="calendar/scheduling application":t.includes("note")||t.includes("document")||t.includes("editor")?e.appType="note-taking/document editor application":(t.includes("social")||t.includes("profile")||t.includes("friend"))&&(e.appType="social media application"),s.includes("class")||s.includes("module")||s.includes("export")?e.architecture="modular":s.includes("component")||s.includes("render")||s.includes("props")?e.architecture="component-based":(s.includes("service")||s.includes("controller")||s.includes("model"))&&(e.architecture="MVC (Model-View-Controller)"),(s.includes("addEventListener")||s.includes("onclick"))&&e.patterns.push("Event-driven programming"),(s.includes("localStorage")||s.includes("sessionStorage"))&&e.patterns.push("Data persistence pattern"),(s.includes("fetch")||s.includes("XMLHttpRequest")||s.includes("axios"))&&e.patterns.push("API integration pattern"),(s.includes("setInterval")||s.includes("setTimeout"))&&e.patterns.push("Asynchronous programming"),s.includes("try")&&s.includes("catch")&&e.patterns.push("Error handling pattern"),(t.includes("<form")||t.includes("<input"))&&e.features.push("form-handling"),(t.includes("<button")||t.includes(".btn"))&&e.features.push("interactive-buttons"),(t.includes("<select")||t.includes("dropdown"))&&e.features.push("dropdown-selection"),(t.includes("checkbox")||t.includes("radio"))&&e.features.push("input-selection"),(s.includes("localStorage")||s.includes("sessionStorage"))&&e.features.push("data-persistence"),(s.includes("fetch")||s.includes("XMLHttpRequest"))&&e.features.push("api-integration"),(t.includes("responsive")||r.includes("@media"))&&e.features.push("responsive-design"),(t.includes("aria-")||t.includes("alt="))&&e.features.push("accessibility"),t.includes("<!DOCTYPE html>")&&e.techStack.push("html5"),r.includes("{")&&r.includes("}")&&e.techStack.push("css3"),(s.includes("function")||s.includes("const")||s.includes("let"))&&e.techStack.push("javascript"),(s.includes("React")||s.includes("JSX")||s.includes("component"))&&e.techStack.push("react"),(s.includes("Vue")||s.includes("vue"))&&e.techStack.push("vue"),(s.includes("Angular")||s.includes("angular"))&&e.techStack.push("angular"),(s.includes("Node")||s.includes("npm")||s.includes("require"))&&e.techStack.push("nodejs"),(s.includes("Firebase")||s.includes("firebase"))&&e.techStack.push("firebase"),(t.includes("async")||t.includes("defer"))&&e.performance.push("script optimization"),t.includes('loading="lazy"')&&e.performance.push("lazy loading"),(r.includes("transform")||r.includes("transition"))&&e.performance.push("CSS animations"),(s.includes("debounce")||s.includes("throttle"))&&e.performance.push("performance optimization"),(s.includes("encodeURIComponent")||s.includes("innerText"))&&e.security.push("XSS prevention"),t.includes("https://")&&e.security.push("HTTPS usage"),(s.includes("validate")||s.includes("sanitize"))&&e.security.push("input validation"),t.includes("alt=")&&e.accessibility.push("image alt text"),t.includes("aria-")&&e.accessibility.push("ARIA attributes"),t.includes("tabindex")&&e.accessibility.push("keyboard navigation"),e.responsive=r.includes("@media")||t.includes("viewport"),e.interactive=s.includes("addEventListener")||t.includes("onclick"),e.dataHandling=s.includes("localStorage")||s.includes("sessionStorage")||s.includes("fetch"),e.apiIntegration=s.includes("fetch")||s.includes("XMLHttpRequest")||s.includes("axios"),e}generateAppOverview(a,e,t){const r=a.features.length,s=a.architecture,n=a.patterns.length>0?a.patterns[0]:"standard web development";return{title:`Application Overview: ${e}`,content:`I've created a ${a.appType} called '${e}' with ${r} key features. The app uses a ${s} architecture and follows ${n} design patterns.`,details:[`App Type: ${a.appType}`,`Architecture: ${s}`,`Key Features: ${r} implemented`,`Design Patterns: ${a.patterns.join(", ")||"Standard patterns"}`]}}generateFeaturesExplanation(a){const e=a.features.map(t=>this.featureDescriptions[t]||{name:t.replace("-"," ").replace(/\b\w/g,s=>s.toUpperCase()),description:"Custom feature implementation",benefits:["Enhanced functionality","Better user experience"]});return{title:"Key Features Implemented",content:`The application includes ${a.features.length} key features, each designed for optimal functionality and user experience.`,features:e,summary:"All features are fully functional with proper error handling, user feedback, and responsive design."}}generateTechnicalDetails(a){return{title:"Technical Implementation",content:"The application is built using modern web technologies with a focus on performance, maintainability, and scalability.",techStack:a.techStack.map(t=>this.techStackExplanations[t]||{name:t.toUpperCase(),description:"Modern web technology",benefits:["Performance","Maintainability","Scalability"]}),architecture:a.architecture,patterns:a.patterns,performance:a.performance,security:a.security}}generateUserExperienceExplanation(a){const e=a.responsive?"responsive and mobile-first":"clean and modern",t=a.responsive?"fully responsive":"desktop-optimized",r=a.accessibility.length>0?"comprehensive accessibility":"basic accessibility",s=a.interactive?"highly interactive":"standard interaction";return{title:"User Experience Design",content:`The user interface is ${e} with ${t} design, ${r} features, and ${s} elements.`,details:[`Design Style: ${e}`,`Responsiveness: ${t}`,`Accessibility: ${r}`,`Interactivity: ${s}`,`Data Handling: ${a.dataHandling?"Advanced":"Basic"}`,`API Integration: ${a.apiIntegration?"Full":"None"}`]}}generateCodeStructureExplanation(a){const e=Object.keys(a),t=e.reduce((r,s)=>{const n=s.split(".").pop();return r[n]=(r[n]||0)+1,r},{});return{title:"Code Structure & Organization",content:`The application is organized into ${e.length} files with a clear separation of concerns.`,files:e,fileTypes:t,structure:this.analyzeFileStructure(a),organization:"Modular and maintainable code organization"}}generatePerformanceExplanation(a){return{title:"Performance Optimization",content:`The application includes ${a.performance.length>0?a.performance.join(", "):"standard performance"} optimizations for fast loading and smooth user experience.`,optimizations:a.performance,metrics:{loadTime:"Optimized for fast loading",memoryUsage:"Efficient memory management",animations:"Smooth CSS transitions and animations"}}}generateSecurityExplanation(a){return{title:"Security Implementation",content:`The application implements ${a.security.length>0?a.security.join(", "):"basic security measures"} to protect user data and prevent common vulnerabilities.`,measures:a.security,protection:{xss:a.security.includes("XSS prevention")?"Protected":"Basic",dataValidation:a.security.includes("input validation")?"Comprehensive":"Basic",https:a.security.includes("HTTPS usage")?"Enforced":"Standard"}}}generateDeploymentExplanation(a){return{title:"Deployment & Hosting",content:"The application is ready for deployment to any modern web hosting platform.",platforms:["Firebase Hosting (recommended)","Vercel","Netlify","GitHub Pages","AWS S3 + CloudFront","Any static hosting service"],requirements:["Modern web browser","HTTPS support (recommended)","CDN for optimal performance"]}}generateSummary(a){return"I've successfully created a fully functional web application with modern design, responsive layout, and comprehensive features. The application follows industry best practices for performance, security, and accessibility, and is ready for immediate deployment."}generateRecommendations(a,e){const t=[];return a.performance.includes("lazy loading")||t.push({category:"Performance",priority:"medium",suggestion:"Consider implementing lazy loading for images and content"}),a.security.includes("input validation")||t.push({category:"Security",priority:"high",suggestion:"Add comprehensive input validation and sanitization"}),a.accessibility.length<2&&t.push({category:"Accessibility",priority:"medium",suggestion:"Enhance accessibility with ARIA attributes and keyboard navigation"}),a.responsive||t.push({category:"Responsive Design",priority:"high",suggestion:"Add responsive design with media queries for mobile devices"}),a.apiIntegration||t.push({category:"API Integration",priority:"low",suggestion:"Consider adding API integration for dynamic data"}),t}analyzeFileStructure(a){const e={html:[],css:[],javascript:[],config:[],assets:[]};return Object.keys(a).forEach(t=>{t.endsWith(".html")?e.html.push(t):t.endsWith(".css")?e.css.push(t):t.endsWith(".js")||t.endsWith(".jsx")?e.javascript.push(t):t.endsWith(".json")||t.endsWith(".config")?e.config.push(t):e.assets.push(t)}),e}calculateLinesOfCode(a){return Object.values(a).reduce((e,t)=>typeof t=="string"?e+t.split(`
`).length:e,0)}calculateComplexity(a){let e="simple";return a.features.length>5&&(e="moderate"),a.features.length>10&&(e="complex"),a.patterns.length>3&&(e="advanced"),e}extractDependencies(a){const e=[];return Object.values(a).forEach(t=>{typeof t=="string"&&((t.includes("React")||t.includes("react"))&&e.push("react"),(t.includes("Vue")||t.includes("vue"))&&e.push("vue"),(t.includes("Angular")||t.includes("angular"))&&e.push("angular"),(t.includes("jQuery")||t.includes("$"))&&e.push("jquery"),(t.includes("Bootstrap")||t.includes("bootstrap"))&&e.push("bootstrap"),(t.includes("Tailwind")||t.includes("tailwind"))&&e.push("tailwindcss"))}),[...new Set(e)]}}const P=new ee;class te{constructor(){this.isHealthy=!0,this.baseURL="https://api-inference.huggingface.co/models",this.apiKey="hf_your_api_key_here",this.availableModels={"codellama-7b":{name:"CodeLlama 7B",model:"codellama/CodeLlama-7b-Python-hf",description:"Fast and efficient code generation",maxTokens:2048,temperature:.7},"codellama-13b":{name:"CodeLlama 13B",model:"codellama/CodeLlama-13b-Python-hf",description:"Higher quality code generation",maxTokens:2048,temperature:.7},"starcoder-15b":{name:"StarCoder 15B",model:"bigcode/starcoder",description:"Excellent code completion",maxTokens:2048,temperature:.7},"deepseek-coder":{name:"DeepSeek Coder",model:"deepseek-ai/deepseek-coder-6.7b-instruct",description:"High-performance generation",maxTokens:2048,temperature:.7},"wizardcoder-7b":{name:"WizardCoder 7B",model:"WizardLM/WizardCoder-15B-V1.0",description:"Great at following instructions",maxTokens:2048,temperature:.7},"phi3-mini":{name:"Phi-3 Mini",model:"microsoft/Phi-3-mini-4k-instruct",description:"Lightweight but powerful",maxTokens:2048,temperature:.7},"llama3-8b":{name:"Llama 3 8B",model:"meta-llama/Llama-3-8B-Instruct",description:"General purpose model",maxTokens:2048,temperature:.7},"mistral-7b":{name:"Mistral 7B",model:"mistralai/Mistral-7B-Instruct-v0.1",description:"Fast and efficient coding assistant",maxTokens:2048,temperature:.7},"gemma-7b":{name:"Gemma 7B",model:"google/gemma-7b-it",description:"Google's lightweight model",maxTokens:2048,temperature:.7},"qwen-7b":{name:"Qwen 7B",model:"Qwen/Qwen-7B-Chat",description:"Alibaba's coding model",maxTokens:2048,temperature:.7}},console.log("☁️ Cloud AI Service initialized with open source models!")}getAvailableModels(){return Object.values(this.availableModels)}getHealthyModels(){return Object.keys(this.availableModels)}isGeneralQuestion(a){const e=a.toLowerCase(),t=["what is","what are","what was","what will","what does","what do","how is","how are","how was","how will","how does","how do","when is","when are","when was","when will","when does","when do","where is","where are","where was","where will","where does","where do","why is","why are","why was","why will","why does","why do","who is","who are","who was","who will","who does","who do","weather","temperature","forecast","climate","rain","sunny","cloudy","news","current events","today","recent","latest","breaking","cook","recipe","food","ingredients","cooking","bake","fry","boil","travel","vacation","destination","hotel","flight","trip","visit","health","medicine","exercise","fitness","doctor","hospital","sick","education","learn","study","school","university","college","course","science","research","study","theory","experiment","discovery","history","historical","past","ancient","century","war","battle","business","finance","economy","market","stock","investment","money","sports","game","team","player","football","basketball","soccer","entertainment","movie","music","book","film","song","album","explain","tell me about","describe","define","meaning","definition","help me understand","can you explain","what does it mean","how does it work","is it","are you","do you","can you","will you","would you","should i","could i","would i","might i","may i"],r=["build","create","make","develop","generate","code","app","application","website","web app","mobile app","component","function","class","module","library","api","database","server","backend","frontend","react","vue","angular","node","python","javascript","html","css","js","ts","jsx","tsx","todo","calculator","dashboard","portfolio","blog","ecommerce","shop","store","landing page"],s=t.some(i=>e.includes(i));return r.some(i=>e.includes(i))?!1:!!(s||e.startsWith("what")||e.startsWith("how")||e.startsWith("when")||e.startsWith("where")||e.startsWith("why")||e.startsWith("who")||e.startsWith("is")||e.startsWith("are")||e.startsWith("do")||e.startsWith("does")||e.startsWith("can")||e.startsWith("will")||e.startsWith("would")||e.startsWith("should")||e.startsWith("could")||e.startsWith("explain")||e.startsWith("tell")||e.startsWith("describe")||e.startsWith("define")||e.endsWith("?")||e.includes("?")&&(e.includes("what")||e.includes("how")||e.includes("when")||e.includes("where")||e.includes("why")||e.includes("who")||e.includes("is")||e.includes("are")||e.includes("do")||e.includes("does")||e.includes("can")||e.includes("will")||e.includes("would")||e.includes("should")||e.includes("could")||e.includes("explain")||e.includes("tell")||e.includes("describe")||e.includes("define")))}async answerGeneralQuestion(a,e){console.log("💬 Answering general question:",a);try{let t=e.webContext;t||console.log("🌐 No web context available, searching for information...");const r=await this.createConversationalResponse(a,t);return{type:"conversational_response",message:r.message,summary:r.summary,details:r.details,sources:r.sources,prompt:a,generatedAt:new Date().toISOString(),context:e}}catch(t){return console.error("❌ Failed to answer general question:",t),{type:"conversational_response",message:`I understand you're asking about "${a}". While I'm primarily designed for code generation, I can help with general questions when I have access to current information. For the most accurate and up-to-date answers, I'd recommend checking reliable sources or using a general-purpose AI assistant.`,summary:"General question response",details:["This is a general question that requires current information"],sources:[],prompt:a,generatedAt:new Date().toISOString(),context:e}}}async createConversationalResponse(a,e){const t=a.toLowerCase();return t.includes("weather")||t.includes("temperature")||t.includes("forecast")?{message:"I'd be happy to help with weather information for your location. However, I don't have access to real-time weather data. For current weather conditions, I recommend checking a reliable weather service like Weather.com, AccuWeather, or your local weather app.",summary:"Weather information request",details:["Weather data requires real-time access to meteorological services","Recommended sources: Weather.com, AccuWeather, local weather apps","For accurate forecasts, use official weather services"],sources:["Weather.com","AccuWeather","National Weather Service"]}:t.includes("cook")||t.includes("recipe")||t.includes("food")?{message:"I can help with cooking questions! For recipes and cooking techniques, I recommend checking reliable cooking websites like AllRecipes.com, Food Network, or Serious Eats. These sources provide tested recipes and expert cooking advice.",summary:"Cooking and recipe information",details:["Cooking requires specific recipes and techniques","Recommended sources: AllRecipes.com, Food Network, Serious Eats","Always follow food safety guidelines when cooking"],sources:["AllRecipes.com","Food Network","Serious Eats"]}:{message:`I understand you're asking about "${a}". While I'm primarily designed for code generation and development tasks, I can provide general information when I have access to current data. For the most accurate and up-to-date information, I recommend checking reliable sources or using a general-purpose AI assistant.`,summary:"General information request",details:["This appears to be a general knowledge question","For current information, check reliable sources","I can help with code generation and development tasks"],sources:["Wikipedia","Reliable news sources","Official websites"]}}async generateCode(a,e={}){if(console.log("🚀 Generating code with Cloud AI..."),this.isGeneralQuestion(a))return console.log("❓ General question detected, providing direct answer..."),await this.answerGeneralQuestion(a,e);e.webContext&&(console.log("🌐 Web context available:",e.webContext.summary),console.log("📊 Best practices found:",e.webContext.bestPractices?.length||0),console.log("🔗 Resources found:",e.webContext.resources?.length||0),console.log("💡 Recommendations:",e.webContext.recommendations?.length||0));try{if(e.isIncremental&&e.existingProject)return await this.generateIncrementalCode(a,e);const t=this.analyzeProjectContext(e);e.conversationContext&&(t.conversationHistory=e.conversationHistory||[],t.recentMessages=e.conversationContext.recentMessages||[],t.projectContext=e.conversationContext),console.log("🧠 Enhanced context analysis:",t);const r=await this.generateContextAwareCode(a,t),s=A.generateAppName(a,t),n=this.selectAutomaticTheme(a,t),i=this.applyAutomaticTheme(r,n),o=this.generatePreviewData(i,s);console.log("🔍 Validating generated app...");const c=await L.validateApp(i,s,a);console.log("📝 Generating app explanation...");const l=await P.generateExplanation(i,s,a,c);return console.log("✅ Code generated successfully!"),console.log("🏷️ App name:",s),console.log("🎨 Selected theme:",n.name),console.log("👁️ Preview data generated"),console.log("🔍 Validation completed:",c.summary?.overallScore||"N/A","score"),console.log("📝 Explanation generated:",l.summary?"Yes":"No"),console.log("📁 Generated files:",Object.keys(i)),console.log("📄 File contents preview:",Object.entries(i).map(([p,g])=>({name:p,length:g.length,preview:g.substring(0,100)}))),{files:i,appName:s,validation:c,explanation:l,prompt:a,generatedAt:new Date().toISOString(),preview:o,context:t,iterations:[],dependencies:this.extractDependencies(i),buildInstructions:this.generateBuildInstructions(i),theme:n}}catch(t){console.error("❌ Code generation failed:",t);const r=await this.createFallbackResponse(a,e),s=A.generateAppName(a,e),n=this.selectAutomaticTheme(a,e),i=this.applyAutomaticTheme(r,n);console.log("🔍 Validating fallback app...");const o=await L.validateApp(i,s,a);console.log("📝 Generating fallback app explanation...");const c=await P.generateExplanation(i,s,a,o);return{files:i,appName:s,validation:o,explanation:c,prompt:a,generatedAt:new Date().toISOString(),preview:this.generatePreviewData(i,s),context:this.analyzeProjectContext(e),iterations:[],dependencies:this.extractDependencies(i),buildInstructions:this.generateBuildInstructions(i),theme:n}}}async generateIncrementalCode(a,e){console.log("🔄 Generating incremental code...");try{await E.initializeProject(e.existingProject);const t=await E.processFeatureRequest(a,e);if(t.type==="no_new_features")return{type:"no_changes",message:t.message,existingFeatures:t.existingFeatures,files:e.existingProject.files||{}};if(t.type==="incremental_update"){const r={...e.existingProject.files,...t.code};return{type:"incremental_update",files:r,newFeatures:t.newFeatures,updatedFiles:t.updatedFiles,message:t.message,appName:e.existingProject.name||"Updated App",prompt:a,generatedAt:new Date().toISOString(),preview:this.generatePreviewData(r,e.existingProject.name),context:this.analyzeProjectContext(e),iterations:E.featureHistory,dependencies:this.extractDependencies(r),buildInstructions:this.generateBuildInstructions(r)}}}catch(t){throw console.error("❌ Incremental code generation failed:",t),t}}analyzeProjectContext(a){return{projectType:this.detectProjectType(a),existingFiles:a.previousFiles||[],dependencies:this.analyzeDependencies(a),codingStandards:this.detectCodingStandards(a),architecture:this.detectArchitecture(a),frameworks:this.detectFrameworks(a),userPreferences:this.extractUserPreferences(a),environment:this.detectEnvironment(a)}}async generateContextAwareCode(a,e){console.log("🧠 Context-aware generation:",e);const t=this.analyzeUserRequest(a),r=await this.generateSpecificCode(a,t),s=this.enhanceWithContext(r,e);return console.log("🔧 Enhanced code generated with context awareness"),s}generatePreviewData(a,e){return{title:e,description:`A ${e} application generated by DreamBuild AI`,features:this.extractFeatures(a),screenshots:this.generateScreenshots(a),liveDemo:this.generateLiveDemo(a),techStack:this.extractTechStack(a),deployment:this.generateDeploymentInfo(a)}}extractDependencies(a){const e=new Set;return Object.values(a).forEach(t=>{(t.includes("React")||t.includes("react"))&&(e.add("react"),e.add("react-dom")),(t.includes("Vue")||t.includes("vue"))&&e.add("vue"),(t.includes("Angular")||t.includes("angular"))&&e.add("@angular/core"),(t.includes("express")||t.includes("node"))&&e.add("express"),(t.includes("tailwind")||t.includes("bootstrap"))&&e.add("tailwindcss")}),Array.from(e)}generateBuildInstructions(a){const e=Object.values(a).some(r=>r.includes("React")||r.includes("react")),t=Object.values(a).some(r=>r.includes("express")||r.includes("node"));return e?{install:"npm install",start:"npm start",build:"npm run build",dev:"npm run dev"}:t?{install:"npm install",start:"node server.js",dev:"nodemon server.js"}:{install:"No dependencies required",start:"Open index.html in browser",build:"No build process required"}}generateIntelligentCode(a,e={}){console.log("🧠 Analyzing prompt:",a);const t=this.analyzeUserRequest(a);return console.log("📋 Analysis result:",t),this.generateSpecificCode(a,t)}analyzeUserRequest(a){const t=(typeof a=="string"?a:JSON.stringify(a)).toLowerCase();return{hasButton:t.includes("button")||t.includes("click"),hasForm:t.includes("form")||t.includes("input")||t.includes("submit"),hasCalculator:t.includes("calculator")||t.includes("calculate")||t.includes("math"),hasColorChange:t.includes("color")||t.includes("change color"),hasCounter:t.includes("counter")||t.includes("count")||t.includes("increment"),hasTodo:t.includes("todo")||t.includes("task")||t.includes("list"),hasGame:t.includes("game")||t.includes("play")||t.includes("guess"),hasAnimation:t.includes("animation")||t.includes("animate")||t.includes("spinning"),hasAPI:t.includes("api")||t.includes("fetch")||t.includes("request"),wantsReact:t.includes("react")||t.includes("component"),wantsVue:t.includes("vue"),wantsAngular:t.includes("angular"),wantsPython:t.includes("python")||t.includes("flask")||t.includes("django"),wantsNode:t.includes("node")||t.includes("express"),wantsDatabase:t.includes("database")||t.includes("store")||t.includes("save"),wantsAuth:t.includes("login")||t.includes("auth")||t.includes("user"),wantsResponsive:t.includes("responsive")||t.includes("mobile"),wantsStyling:t.includes("css")||t.includes("style")||t.includes("design"),specificFeature:this.extractSpecificFeature(a),appName:this.extractAppName(a),targetLanguage:this.detectTargetLanguage(a)}}extractSpecificFeature(a){const t=(typeof a=="string"?a:JSON.stringify(a)).toLowerCase();return t.includes("factorial")?"factorial":t.includes("fibonacci")?"fibonacci":t.includes("prime")?"prime":t.includes("sort")?"sort":t.includes("search")?"search":t.includes("timer")?"timer":t.includes("clock")?"clock":t.includes("weather")?"weather":t.includes("chat")?"chat":t.includes("quiz")?"quiz":null}detectTargetLanguage(a){const t=(typeof a=="string"?a:JSON.stringify(a)).toLowerCase();return t.includes("python")?"python":t.includes("javascript")||t.includes("js")?"javascript":t.includes("react")?"react":t.includes("vue")?"vue":t.includes("angular")?"angular":t.includes("html")?"html":t.includes("css")?"css":"html"}async generateSpecificCode(a,e){console.log("🎯 Generating specific code for:",e.specificFeature||"general app");try{const r=`${this.createSystemPrompt({projectType:"web",existingFiles:[],dependencies:[],architecture:"monolithic",frameworks:["html","css","javascript"]})}

User Request: ${a}

Generate a complete, working application with all the features requested. Return the code as a JSON object with files.`,s=this.selectBestModel(a,{}),n=this.availableModels[s]?.model||"codellama/CodeLlama-7b-Python-hf";console.log("🤖 Using AI model:",n),console.log("📝 Full prompt:",r);const i=await this.callHuggingFaceAPI(n,r,2048,.7);console.log("🤖 AI Response received:",i);const o=await this.parseAIResponse(i,a);return o&&Object.keys(o).length>0?(console.log("✅ AI generated code successfully"),o):(console.log("⚠️ AI response was empty, using fallback"),await this.createFallbackResponse(a,{}))}catch(t){return console.error("❌ AI code generation failed:",t),console.log("🔄 Falling back to template generation..."),e.hasTodo?this.createTodoTemplate(a):e.hasAPI?this.createAPITemplate(a):e.specificFeature==="weather"?this.generateWeatherApp(a):this.createDefaultTemplate(a)}}selectBestModel(a,e){const r=(typeof a=="string"?a:JSON.stringify(a)).toLowerCase();return r.includes("python")||r.includes("django")||r.includes("flask")?"codellama-7b":r.includes("javascript")||r.includes("react")||r.includes("node")?"starcoder-15b":r.includes("java")||r.includes("spring")?"deepseek-coder":r.includes("c++")||r.includes("cpp")||r.includes("rust")?"codellama-13b":r.includes("web")||r.includes("html")||r.includes("css")?"wizardcoder-7b":"codellama-7b"}async callHuggingFaceAPI(a,e,t,r){return(await T.post(`${this.baseURL}/${a}`,{inputs:e,parameters:{max_new_tokens:t,temperature:r,return_full_text:!1,do_sample:!0}},{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},timeout:3e4})).data}createSystemPrompt(a={}){const e=a.conversationHistory?.length>0?`

Conversation Context:
- Previous messages: ${a.conversationHistory.length} messages
- Recent conversation: ${a.recentMessages?.slice(-3).map(r=>`${r.type}: ${r.content}`).join(`
`)||"none"}
- Project context: ${JSON.stringify(a.projectContext||{})}`:"",t=a.webContext?`

Web Search Context (Current Information):
- Summary: ${a.webContext.summary||"No summary available"}
- Best Practices: ${a.webContext.bestPractices?.slice(0,5).join(", ")||"None found"}
- Current Resources: ${a.webContext.resources?.length||0} resources found
- Recommendations: ${a.webContext.recommendations?.slice(0,3).join(", ")||"None found"}
- Current Trends: ${a.webContext.trends?.length||0} trends identified
- Key Information: ${a.webContext.currentInfo?.slice(0,3).map(r=>r.title).join(", ")||"None found"}`:"";return`You are an expert software developer and code generator with advanced conversation capabilities. Generate complete, working applications based on user requests and maintain context across conversations.

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
- Project Type: ${a.projectType||"web"}
- Existing Files: ${a.existingFiles?.length||0} files
- Dependencies: ${a.dependencies?.join(", ")||"none"}
- Architecture: ${a.architecture||"monolithic"}
- Frameworks: ${a.frameworks?.join(", ")||"vanilla"}${e}${t}

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

Generate practical, working applications that users can immediately use. If this is a correction or improvement request, modify the existing code appropriately while maintaining functionality.`}async parseAIResponse(a,e){try{let t="";Array.isArray(a)&&a.length>0?t=a[0].generated_text||a[0].text||"":a.generated_text?t=a.generated_text:a.text?t=a.text:t=JSON.stringify(a);const r=t.match(/\{[\s\S]*\}/);if(r){const s=JSON.parse(r[0]);if(s.files)return s.files}return await this.createFallbackResponse(e,{})}catch(t){return console.error("❌ Failed to parse AI response:",t),await this.createFallbackResponse(e,{})}}generateWebApp(a){const e=this.extractAppName(a)||"Web App";return{"index.html":`<!DOCTYPE html>
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
        <p>Generated based on: "${a}"</p>
        
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
}`}}generateReactApp(a){const e=this.extractAppName(a)||"React App";return{"index.html":`<!DOCTYPE html>
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
        <p>Generated based on: "${a}"</p>
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
}`}}generateJavaScriptApp(a){const e=this.extractAppName(a)||"JavaScript App";return{"index.html":`<!DOCTYPE html>
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
        <p>Generated based on: "${a}"</p>
        
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
}`}}generateSpecificFeature(a,e){switch(console.log("🎯 Generating specific feature:",e),e){case"factorial":return this.generateFactorialApp(a);case"fibonacci":return this.generateFibonacciApp(a);case"prime":return this.generatePrimeApp(a);case"sort":return this.generateSortApp(a);case"search":return this.generateSearchApp(a);case"timer":return this.generateTimerApp(a);case"clock":return this.generateClockApp(a);case"weather":return this.generateWeatherApp(a);case"chat":return this.generateChatApp(a);case"quiz":return this.generateQuizApp(a);default:return this.generateWebApp(a)}}generateFactorialApp(a){const e=this.extractAppName(a)||"Factorial Calculator";return{"index.html":`<!DOCTYPE html>
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
}`}}generateFibonacciApp(a){const e=this.extractAppName(a)||"Fibonacci Calculator";return{"index.html":`<!DOCTYPE html>
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
}`}}generateWeatherApp(a){const e=this.extractAppName(a)||"Weather App";return{"index.html":`<!DOCTYPE html>
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
}`}}detectProjectType(a){const e=a.previousFiles||[];return e.some(t=>t.includes("package.json"))?"node":e.some(t=>t.includes(".jsx")||t.includes(".tsx"))?"react":e.some(t=>t.includes(".vue"))?"vue":(e.some(t=>t.includes(".html")),"web")}analyzeDependencies(a){return a.dependencies||[]}detectCodingStandards(a){return{indentation:"2 spaces",quotes:"single",semicolons:!0,trailingCommas:!0}}detectArchitecture(a){const e=a.previousFiles||[];return e.some(t=>t.includes("components"))?"component-based":e.some(t=>t.includes("pages"))?"page-based":"monolithic"}detectFrameworks(a){const e=[],t=a.previousFiles||[];return t.some(r=>r.includes("react"))&&e.push("react"),t.some(r=>r.includes("vue"))&&e.push("vue"),t.some(r=>r.includes("angular"))&&e.push("angular"),t.some(r=>r.includes("express"))&&e.push("express"),e}extractUserPreferences(a){return{preferredFramework:"react",styling:"tailwind",stateManagement:"hooks",testing:"jest"}}detectEnvironment(a){return{nodeVersion:"18+",packageManager:"npm",bundler:"vite",deployment:"firebase"}}enhanceWithContext(a,e){console.log("🔧 Enhancing code with context:",e);const t={...a};return Object.keys(t).forEach(r=>{if(r.endsWith(".js")||r.endsWith(".jsx")){const s=t[r],n=`// Generated by DreamBuild AI with context awareness
// Project Type: ${e.projectType||"web"}
// Architecture: ${e.architecture||"monolithic"}
// Frameworks: ${e.frameworks?.join(", ")||"vanilla"}
// Environment: ${e.environment?.nodeVersion||"18+"}

${s}`;t[r]=n}}),console.log("✅ Code enhanced with context awareness"),t}extractFeatures(a){const e=[],t=Object.values(a).join(" ").toLowerCase();return console.log("🔍 Extracting features from generated code..."),(t.includes("addeventlistener")||t.includes("onclick")||t.includes("onchange"))&&e.push("Interactive Elements"),(t.includes("localstorage")||t.includes("sessionstorage")||t.includes("indexeddb"))&&e.push("Data Persistence"),(t.includes("fetch")||t.includes("axios")||t.includes("xhr")||t.includes("api"))&&e.push("API Integration"),(t.includes("responsive")||t.includes("mobile")||t.includes("media query")||t.includes("@media"))&&e.push("Responsive Design"),(t.includes("animation")||t.includes("transition")||t.includes("transform")||t.includes("keyframes"))&&e.push("Animations"),(t.includes("form")||t.includes("input")||t.includes("textarea")||t.includes("select"))&&e.push("Form Handling"),(t.includes("login")||t.includes("auth")||t.includes("password")||t.includes("token"))&&e.push("Authentication"),(t.includes("websocket")||t.includes("socket")||t.includes("realtime")||t.includes("live"))&&e.push("Real-time Updates"),(t.includes("file")||t.includes("upload")||t.includes("download")||t.includes("blob"))&&e.push("File Handling"),e.length===0&&e.push("Modern UI","Interactive Elements","Responsive Design"),console.log("✅ Features extracted:",e),e}generateScreenshots(a){return["https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=App+Preview+1","https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=App+Preview+2"]}generateLiveDemo(a){return"https://dreambuild-2024-app.web.app/preview"}extractTechStack(a){const e=[],t=Object.values(a).join(" ").toLowerCase();return console.log("🔍 Extracting tech stack from generated code..."),(t.includes("react")||t.includes("jsx"))&&e.push("React"),(t.includes("vue")||t.includes("vue.js"))&&e.push("Vue.js"),t.includes("angular")&&e.push("Angular"),t.includes("svelte")&&e.push("Svelte"),(t.includes("express")||t.includes("node"))&&e.push("Node.js"),(t.includes("django")||t.includes("flask"))&&e.push("Python"),(t.includes("spring")||t.includes("java"))&&e.push("Java"),t.includes("html")&&e.push("HTML5"),t.includes("css")&&e.push("CSS3"),(t.includes("javascript")||t.includes("js"))&&e.push("JavaScript"),(t.includes("typescript")||t.includes("ts"))&&e.push("TypeScript"),(t.includes("tailwind")||t.includes("tailwindcss"))&&e.push("Tailwind CSS"),t.includes("bootstrap")&&e.push("Bootstrap"),(t.includes("material")||t.includes("mui"))&&e.push("Material-UI"),(t.includes("mongodb")||t.includes("mongo"))&&e.push("MongoDB"),(t.includes("mysql")||t.includes("sql"))&&e.push("SQL"),t.includes("firebase")&&e.push("Firebase"),e.length===0&&e.push("HTML5","CSS3","JavaScript"),console.log("✅ Tech stack extracted:",e),e}generateDeploymentInfo(a){return{platform:"Firebase Hosting",url:"https://dreambuild-2024-app.web.app",status:"Ready to deploy",instructions:"Click deploy to publish your app"}}extractAppName(a){const t=(typeof a=="string"?a:JSON.stringify(a)).split(" "),r=t.findIndex(s=>s.toLowerCase().includes("app")||s.toLowerCase().includes("application")||s.toLowerCase().includes("website")||s.toLowerCase().includes("page"));return r>0?t.slice(0,r).join(" "):null}generateAppName(a){const e=typeof a=="string"?a:JSON.stringify(a),t=e.toLowerCase(),r=e.split(" ").filter(n=>n.length>3&&!["create","build","make","generate","app","application","website","page"].includes(n.toLowerCase()));if(t.includes("weather"))return"WeatherCast Pro";if(t.includes("calculator"))return"CalcMaster";if(t.includes("todo")||t.includes("task"))return"TaskFlow";if(t.includes("game"))return"GameZone";if(t.includes("chat"))return"ChatConnect";if(t.includes("dashboard"))return"DashBoard Pro";if(t.includes("ecommerce")||t.includes("store"))return"ShopMaster";if(t.includes("blog"))return"BlogCraft";if(t.includes("portfolio"))return"Portfolio Pro";if(t.includes("social"))return"SocialConnect";if(t.includes("music"))return"MusicHub";if(t.includes("photo")||t.includes("image"))return"PhotoGallery";if(t.includes("news"))return"NewsReader";if(t.includes("recipe"))return"RecipeBook";if(t.includes("fitness")||t.includes("workout"))return"FitTracker";if(t.includes("finance")||t.includes("budget"))return"FinanceTracker";if(t.includes("education")||t.includes("learn"))return"LearnHub";if(t.includes("travel"))return"TravelGuide";if(t.includes("food")||t.includes("restaurant"))return"FoodFinder";if(t.includes("book")||t.includes("library"))return"BookShelf";if(t.includes("calendar")||t.includes("schedule"))return"SchedulePro";if(r.length>0){const n=r[0].charAt(0).toUpperCase()+r[0].slice(1),i=r.length>1?r[1].charAt(0).toUpperCase()+r[1].slice(1):"App";return`${n}${i}`}const s=["DreamApp","InnovateHub","CreativeSpace","TechFlow","SmartApp","NextGen","FutureApp","ProApp","EliteApp","MasterApp","UltimateApp","PrimeApp","SuperApp","MegaApp","TurboApp"];return s[Math.floor(Math.random()*s.length)]}selectAutomaticTheme(a,e={}){console.log("🎨 Selecting automatic theme for prompt:",a);const r=(typeof a=="string"?a:JSON.stringify(a)).toLowerCase(),s={business:{keywords:["business","dashboard","admin","management","enterprise","professional","corporate"],theme:"monochrome",confidence:.9},entertainment:{keywords:["game","entertainment","fun","play","music","video","media"],theme:"vibrant",confidence:.9},health:{keywords:["health","fitness","workout","medical","wellness","care","diet"],theme:"forest",confidence:.8},education:{keywords:["learn","education","study","course","tutorial","knowledge","school"],theme:"ocean",confidence:.8},creative:{keywords:["design","art","creative","draw","paint","edit","photo","image"],theme:"purple",confidence:.8},communication:{keywords:["chat","social","message","connect","network","community","talk"],theme:"sunset",confidence:.7},utility:{keywords:["calculator","tool","utility","helper","converter","widget"],theme:"modern",confidence:.6},dark:{keywords:["dark","night","minimal","simple","clean"],theme:"dark",confidence:.9},colorSpecific:{keywords:["blue","green","red","purple","orange","pink","yellow"],theme:"custom",confidence:.8}};if(r.includes("dark theme")||r.includes("dark mode"))return{name:"dark",colors:v.getThemeColors("dark"),reason:"Dark theme requested",confidence:1};if(r.includes("light theme")||r.includes("bright"))return{name:"modern",colors:v.getThemeColors("modern"),reason:"Light theme requested",confidence:1};if(r.includes("blue"))return{name:"ocean",colors:v.getThemeColors("ocean"),reason:"Blue color requested",confidence:.9};if(r.includes("green"))return{name:"forest",colors:v.getThemeColors("forest"),reason:"Green color requested",confidence:.9};if(r.includes("purple"))return{name:"purple",colors:v.getThemeColors("purple"),reason:"Purple color requested",confidence:.9};if(r.includes("orange")||r.includes("sunset"))return{name:"sunset",colors:v.getThemeColors("sunset"),reason:"Orange/sunset color requested",confidence:.9};let n={theme:"modern",confidence:.5,reason:"Default modern theme"};Object.entries(s).forEach(([c,l])=>{const p=l.keywords.filter(g=>r.includes(g)).length;p>0&&l.confidence>n.confidence&&(n={theme:l.theme,confidence:l.confidence,reason:`${c} app detected (${p} keywords)`})});const i=v.getThemeColors(n.theme),o={name:n.theme,colors:i,reason:n.reason,confidence:n.confidence};return console.log("🎨 Selected theme:",o),o}applyAutomaticTheme(a,e){console.log("🎨 Applying theme to generated code:",e.name);const t={};return Object.entries(a).forEach(([r,s])=>{typeof s=="string"?r.endsWith(".css")?t[r]=this.applyThemeToCSS(s,e):r.endsWith(".html")?t[r]=this.applyThemeToHTML(s,e):r.endsWith(".js")||r.endsWith(".jsx")?t[r]=this.applyThemeToJS(s,e):t[r]=s:t[r]=s}),t}applyThemeToCSS(a,e){let t=a;const r={"#667eea":e.colors.primary,"#764ba2":e.colors.secondary,"#f093fb":e.colors.accent,"#f8fafc":e.colors.background,"#ffffff":e.colors.surface,"#1a202c":e.colors.text,"#4a5568":e.colors.textSecondary,"#48bb78":e.colors.success,"#ed8936":e.colors.warning,"#f56565":e.colors.error,"#4299e1":e.colors.info};return Object.entries(r).forEach(([s,n])=>{t=t.replace(new RegExp(s,"g"),n)}),t.includes("--primary-color")?t:`
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

${t}`}applyThemeToHTML(a,e){let t=a;if(t.includes("Web App")||t.includes("React App")||t.includes("JavaScript App"),t.includes("<head>")){const r=`
    <meta name="theme-color" content="${e.colors.primary}">
    <meta name="color-scheme" content="${e.name==="dark"?"dark":"light"}">`;t=t.replace("<head>",`<head>${r}`)}return t}applyThemeToJS(a,e){let t=a;const r={"#667eea":e.colors.primary,"#764ba2":e.colors.secondary,"#f093fb":e.colors.accent,"#f8fafc":e.colors.background,"#ffffff":e.colors.surface,"#1a202c":e.colors.text,"#4a5568":e.colors.textSecondary};return Object.entries(r).forEach(([s,n])=>{t=t.replace(new RegExp(s,"g"),n)}),t}async createFallbackResponse(a,e={}){if(console.log("🔄 Creating AI-generated fallback response for prompt:",a),this.isGeneralQuestion(a))return console.log("❓ General question detected, providing conversational response..."),this.createConversationalResponse(a,e);try{const s=`Create a complete web application based on this request: ${a}. 
      
      Generate HTML, CSS, and JavaScript files that implement the requested features. 
      Return the code as a JSON object with this structure:
      {
        "files": {
          "index.html": "HTML content here",
          "styles.css": "CSS content here", 
          "script.js": "JavaScript content here"
        }
      }
      
      Make sure the application is fully functional and includes all requested features.`,n="codellama/CodeLlama-7b-Python-hf";console.log("🤖 Fallback: Using AI model:",n);const i=await this.callHuggingFaceAPI(n,s,1500,.5);console.log("🤖 Fallback AI Response received:",i);const o=await this.parseAIResponse(i,a);if(o&&Object.keys(o).length>0)return console.log("✅ Fallback AI generated code successfully"),o}catch(s){console.error("❌ Fallback AI generation failed:",s)}console.log("⚠️ Using template as absolute last resort");const r=(typeof a=="string"?a:JSON.stringify(a)).toLowerCase();return r.includes("todo")||r.includes("task")?this.createTodoTemplate(a):r.includes("dashboard")||r.includes("analytics")?this.createDashboardTemplate(a):r.includes("ecommerce")||r.includes("store")||r.includes("shop")?this.createEcommerceTemplate(a):r.includes("api")||r.includes("backend")?this.createAPITemplate(a):this.createDefaultTemplate(a)}createDashboardTemplate(a){return{"index.html":`<!DOCTYPE html>
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
}`}}createTodoTemplate(a){return{"index.html":`<!DOCTYPE html>
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
}`}}createEcommerceTemplate(a){return{"index.html":`<!DOCTYPE html>
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
}`}}createAPITemplate(a){return{"index.html":`<!DOCTYPE html>
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
}`}}createDefaultTemplate(a){return{"index.html":`<!DOCTYPE html>
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
        <p>Generated based on: "${a}"</p>
        
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
}`}}getServiceHealth(){return{"cloud-ai":{isHealthy:this.isHealthy}}}getUsageStats(){return{totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0}}}const C=new te,ae=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));class re{constructor(){this.currentService="local-ai",this.usageStats={totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0},console.log("🤖 Simple AI Service initialized - Local AI with Open Source Models (No API Keys Required)!")}getServices(){return{"local-ai":{name:"Local AI Models",type:"Local",description:"Self-hosted AI models - no API keys required",models:u.getAvailableModels()}}}getTemplateCategories(){return u.getTemplateCategories()}getTemplatesByCategory(a){return u.getTemplatesByCategory(a)}async getAllTemplates(){return await u.getAllTemplates()}async generateTemplateById(a,e={}){return await u.generateTemplateById(a,e)}async searchTemplates(a){return await u.searchTemplates(a)}async getPopularTemplates(){return await u.getPopularTemplates()}async generateCode(a,e={}){const t=Date.now();this.usageStats.totalRequests++;try{if(u.isGeneralQuestion(a)){console.log("❓ General question detected, using local AI for conversational response...");const n=await u.generateCode(a,e),i=Date.now()-t;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+i)/2,console.log("✅ Conversational response generated successfully!"),n}console.log("🚀 Generating code with Local AI..."),console.log("🚀 Using Local AI only (cloud AI disabled)...");const r=await u.generateCode(a,e),s=Date.now()-t;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+s)/2,console.log("✅ Code generated successfully with Local AI!"),r}catch(r){console.error("❌ AI generation failed:",r),this.usageStats.failedRequests++,console.log("🔄 Falling back to local AI template generation...");try{return await u.createFallbackResponse(a,e)}catch(s){return console.error("❌ Local AI fallback also failed:",s),{type:"code_generation",files:{"index.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild App</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .container { max-width: 800px; margin: 0 auto; }
        h1 { color: #333; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to DreamBuild</h1>
        <p>Your app is being generated. Please try again in a moment.</p>
    </div>
</body>
</html>`},message:"Generated a basic web application. Please try your request again.",prompt:a,generatedAt:new Date().toISOString(),context:e}}}}getServiceHealth(){return{"local-ai":u.modelHealth,"cloud-ai":{isHealthy:!1,reason:"Disabled - using local AI only"}}}getUsageStats(){return this.usageStats}getUserPreferences(){return{preferredService:"cloud-ai",fallbackEnabled:!0,autoHealthCheck:!0}}updateUserPreferences(a){localStorage.setItem("dreambuild-preferences",JSON.stringify(a))}loadUserPreferences(){const a=localStorage.getItem("dreambuild-preferences");return a?JSON.parse(a):this.getUserPreferences()}getServiceStatus(){return{"cloud-ai":{isHealthy:C.isHealthy,models:C.getHealthyModels().length,totalModels:C.getAvailableModels().length},"local-ai":{isHealthy:u.isHealthy,models:u.getHealthyModels().length,totalModels:u.getAvailableModels().length}}}resetServiceHealth(){u.modelHealth={}}getFallbackOrder(){return["cloud-ai","local-ai"]}isFallbackEnabled(){return!0}setFallbackEnabled(a){return!0}getSetupInstructions(){return{"cloud-ai":{title:"Cloud AI Setup",description:"Open source AI models via Hugging Face - no setup required",steps:["1. Cloud AI is ready to use with open source models","2. No API keys or installation required","3. Models include CodeLlama, StarCoder, DeepSeek, and more","4. Start generating code immediately!"],isSetup:C.isHealthy},"local-ai":{title:"Local AI Setup",description:"Set up local AI models for code generation",steps:["1. Install Ollama from https://ollama.ai","2. Run: ollama pull codellama:7b","3. Run: ollama serve","4. Refresh DreamBuild to start using local AI"],isSetup:u.isHealthy}}}getServicesNeedingSetup(){const a=[];return C.isHealthy||a.push("cloud-ai"),u.isHealthy||a.push("local-ai"),a}hasValidApiKey(a){return a==="cloud-ai"||a==="local-ai"}setService(a){(a==="cloud-ai"||a==="local-ai")&&(this.currentService=a)}getCurrentService(){return this.currentService}}const se=new re,de=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{v as a,le as b,C as c,de as d,R as f,se as s};
