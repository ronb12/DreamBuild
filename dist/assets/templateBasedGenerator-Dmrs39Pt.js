const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C4vUrfLj.js","assets/index-nz6tmDhI.css"])))=>i.map(i=>d[i]);
import{_ as h}from"./index-C4vUrfLj.js";class y{constructor(){this.templates=new Map,this.categories=new Map,this.aiEnhancer=new m,this.templateMatcher=null,this.initialize()}async initialize(){console.log("🚀 Initializing Template-Based Generator..."),await this.loadAllTemplates(),this.aiEnhancer=new m,console.log("✅ AI Customization Service initialized"),this.templateMatcher=new g(this.templates),console.log("✅ Template Matcher initialized"),console.log(`✅ Template-Based Generator initialized with ${this.templates.size} templates`)}async loadAllTemplates(){try{const{default:e}=await h(async()=>{const{default:i}=await import("./index-C4vUrfLj.js").then(s=>s.l);return{default:i}},__vite__mapDeps([0,1]));if(typeof e!="function")throw new Error("localAIService is not a constructor");const a=new e().getTemplateCategories();for(const[i,s]of Object.entries(a)){this.categories.set(i,s);const n=s.templates||this.generateTemplatesForCategory(i,s);Array.isArray(n)&&n.forEach(o=>{this.templates.set(o.id,{...o,category:i,categoryName:s.name,icon:s.icon})})}console.log(`📚 Loaded ${this.templates.size} templates across ${this.categories.size} categories`)}catch(e){console.error("Failed to load templates from localAIService, using fallback:",e.message),this.loadFallbackTemplates()}}generateTemplatesForCategory(e,t){const a=[],i=this.getBaseTemplatesForCategory(e),s=["modern","classic","minimal","responsive","dark","light"];return i.forEach((n,o)=>{s.forEach((r,p)=>{a.push({id:`${e}-${o}-${p}`,name:`${n.name} (${r})`,description:`${n.description} with ${r} design`,tags:[...n.tags||[],r],complexity:n.complexity||"medium",relevanceScore:.8+Math.random()*.2})})}),a.slice(0,t.count||500)}getBaseTemplatesForCategory(e){return{web:[{name:"Landing Page",description:"Professional landing page",tags:["marketing","business"]},{name:"Portfolio Website",description:"Personal portfolio showcase",tags:["creative","personal"]},{name:"Business Website",description:"Corporate business site",tags:["business","corporate"]},{name:"Blog Platform",description:"Content management blog",tags:["content","cms"]}],mobile:[{name:"Mobile App",description:"Cross-platform mobile application",tags:["react-native","mobile"]},{name:"PWA",description:"Progressive web application",tags:["pwa","mobile-first"]}],dashboard:[{name:"Analytics Dashboard",description:"Data visualization dashboard",tags:["analytics","charts"]},{name:"Admin Panel",description:"Administrative interface",tags:["admin","management"]}],ecommerce:[{name:"Online Store",description:"E-commerce platform",tags:["shopping","payments"]},{name:"Marketplace",description:"Multi-vendor marketplace",tags:["marketplace","vendors"]}],games:[{name:"Puzzle Game",description:"Interactive puzzle game",tags:["puzzle","casual"]},{name:"Arcade Game",description:"Classic arcade-style game",tags:["arcade","retro"]}]}[e]||[{name:"Generic Template",description:"Basic template",tags:["generic"]}]}loadFallbackTemplates(){const e={web:{name:"Web Applications",icon:"🌐",count:1e3},mobile:{name:"Mobile Apps",icon:"📱",count:800},dashboard:{name:"Dashboards",icon:"📊",count:600},ecommerce:{name:"E-commerce",icon:"🛒",count:500},games:{name:"Games",icon:"🎮",count:400}};for(const[t,a]of Object.entries(e))this.categories.set(t,a),this.generateTemplatesForCategory(t,a).forEach(s=>{this.templates.set(s.id,{...s,category:t,categoryName:a.name,icon:a.icon})});console.log(`📚 Loaded ${this.templates.size} fallback templates across ${this.categories.size} categories`),this.templateMatcher=new g(this.templates),console.log("✅ Template Matcher initialized with fallback templates")}async generateApp(e,t={}){console.log("🎯 Starting Template-First generation...");try{this.templates.size===0&&(console.log("📚 No templates loaded, initializing..."),await this.initialize());const a=await this.selectTemplate(e,t);console.log(`📋 Selected template: ${a.name}`);const i=await this.instantiateTemplate(a);console.log(`⚡ Instantiated template with ${Object.keys(i.files).length} files`);const s=await this.customizeWithAI(i,e,t);return console.log("🎨 AI customization completed"),{success:!0,files:s.files,template:a,metadata:{generationMethod:"template-first",templateId:a.id,customizationLevel:s.customizationLevel,generationTime:Date.now()-(t.startTime||Date.now())}}}catch(a){return console.error("❌ Template generation failed:",a),await this.generateFallback(e,t)}}async selectTemplate(e,t){const a=Date.now();if(!this.templateMatcher){console.log("⚠️ Template matcher not available, using fallback selection");const n=Array.from(this.templates.values());if(n.length===0)throw console.log("⚠️ No templates available, will use fallback generation"),new Error("No templates available");return n[0]}const i=await this.templateMatcher.findBestMatches(e,{category:t.category,complexity:t.complexity,technologies:t.technologies});if(i.length===0){console.log("⚠️ No matches found, using first available template");const n=Array.from(this.templates.values());if(n.length===0)throw new Error("No suitable template found");return n[0]}const s=i[0];return console.log(`🎯 Template selected in ${Date.now()-a}ms: ${s.name}`),s}async instantiateTemplate(e){const t=Date.now(),a={id:`app-${Date.now()}`,name:e.name,category:e.category,files:{},metadata:{templateId:e.id,templateName:e.name,instantiationTime:Date.now()-t}};return e.category==="web"?a.files=await this.generateWebAppFiles(e):e.category==="mobile"?a.files=await this.generateMobileAppFiles(e):e.category==="games"?a.files=await this.generateGameFiles(e):a.files=await this.generateGenericFiles(e),console.log(`⚡ Template instantiated in ${Date.now()-t}ms`),a}async customizeWithAI(e,t,a){const i=Date.now(),s=await this.aiEnhancer.analyzeCustomizations(e,t,a),n={...e,files:{},customizationLevel:s.level};for(const[o,r]of Object.entries(e.files))n.files[o]=await this.aiEnhancer.customizeFile(o,r,s);return console.log(`🎨 AI customization completed in ${Date.now()-i}ms`),n}async generateWebAppFiles(e){const t={};return t["index.html"]=this.generateHTML(e),t["styles.css"]=this.generateCSS(e),t["script.js"]=this.generateJavaScript(e),t["package.json"]=this.generatePackageJson(e),t}async generateMobileAppFiles(e){const t={};return t["App.js"]=this.generateReactNativeApp(e),t["package.json"]=this.generateReactNativePackage(e),t["metro.config.js"]=this.generateMetroConfig(),t}async generateGameFiles(e){const t={};return t["index.html"]=this.generateGameHTML(e),t["game.js"]=this.generateGameJavaScript(e),t["styles.css"]=this.generateGameCSS(e),t}async generateGenericFiles(e){const t={};return t["index.html"]=this.generateHTML(e),t["styles.css"]=this.generateCSS(e),t["script.js"]=this.generateJavaScript(e),t}generateHTML(e){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e.name}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <header>
            <h1>${e.name}</h1>
        </header>
        <main>
            <div class="content">
                <p>Welcome to your ${e.name} application!</p>
                <div class="features">
                    ${this.generateFeatureList(e)}
                </div>
            </div>
        </main>
        <footer>
            <p>Generated by DreamBuild</p>
        </footer>
    </div>
    <script src="script.js"><\/script>
</body>
</html>`}generateCSS(e){return`/* ${e.name} Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

#app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
    color: white;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

main {
    background: white;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.content {
    text-align: center;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.feature {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
}

footer {
    text-align: center;
    margin-top: 40px;
    color: white;
    opacity: 0.8;
}`}generateJavaScript(e){return`// ${e.name} JavaScript
console.log('${e.name} loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    // Initialize app
    initializeApp();
    
    // Add event listeners
    setupEventListeners();
});

function initializeApp() {
    console.log('Initializing ${e.name}...');
    
    // Add any initialization logic here
    const app = document.getElementById('app');
    if (app) {
        app.style.opacity = '1';
        app.style.transition = 'opacity 0.5s ease-in';
    }
}

function setupEventListeners() {
    // Add event listeners here
    console.log('Event listeners setup complete');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeApp, setupEventListeners };
}`}generatePackageJson(e){return JSON.stringify({name:e.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:`Generated ${e.name} application`,main:"script.js",scripts:{start:"python -m http.server 8000",build:"echo 'Build complete'",dev:"python -m http.server 8000"},keywords:e.tags||[],author:"DreamBuild",license:"MIT",dependencies:{react:"^18.0.0","react-dom":"^18.0.0"}},null,2)}generateFeatureList(e){return(e.tags||["Responsive Design","Modern UI","Fast Loading"]).map(a=>`<div class="feature">
        <h3>${a}</h3>
        <p>Built-in ${a.toLowerCase()} functionality</p>
      </div>`).join("")}async generateFallback(e,t){console.log("🔄 Generating fallback application...");const a=this.extractAppName(e),i=this.detectAppType(e),s={"index.html":this.generateFallbackHTML(a,e,i),"styles.css":this.generateFallbackCSS(i),"script.js":this.generateFallbackJS(a,i),"package.json":this.generateFallbackPackageJson(a)};return console.log(`✅ Fallback generation completed: ${Object.keys(s).length} files`),console.log("📁 Generated files:",Object.keys(s)),{success:!0,files:s,metadata:{generationMethod:"fallback",reason:"Template selection failed",appName:a,appType:i}}}extractAppName(e){const t=e.toLowerCase().split(" "),a=["app","application","website","site","dashboard","platform"],i=t.findIndex(s=>a.includes(s));return i>0?t[i-1].charAt(0).toUpperCase()+t[i-1].slice(1)+" "+t[i]:"DreamBuild App"}detectAppType(e){const t=e.toLowerCase();return t.includes("dashboard")||t.includes("admin")?"dashboard":t.includes("ecommerce")||t.includes("store")?"ecommerce":t.includes("portfolio")||t.includes("personal")?"portfolio":t.includes("blog")||t.includes("content")?"blog":"web"}generateFallbackHTML(e,t,a){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>${e}</h1>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        <main>
            <section id="home">
                <h2>Welcome to ${e}</h2>
                <p>Generated from: "${t}"</p>
                <div class="features">
                    <div class="feature">
                        <h3>Responsive Design</h3>
                        <p>Works on all devices</p>
                    </div>
                    <div class="feature">
                        <h3>Modern UI</h3>
                        <p>Clean and professional</p>
                    </div>
                    <div class="feature">
                        <h3>Fast Loading</h3>
                        <p>Optimized performance</p>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <p>&copy; 2024 ${e}. Generated by DreamBuild.</p>
        </footer>
    </div>
    <script src="script.js"><\/script>
</body>
</html>`}generateFallbackCSS(e){const t={dashboard:"#2563eb",ecommerce:"#059669",portfolio:"#7c3aed",blog:"#dc2626",web:"#0891b2"},a=t[e]||t.web;return`/* ${e} Application Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, ${a} 0%, #1e40af 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

header h1 {
    color: ${a};
    font-size: 2.5rem;
    margin-bottom: 10px;
    text-align: center;
}

nav {
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav a {
    color: #666;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

nav a:hover {
    background: ${a};
    color: white;
}

main {
    background: white;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

h2 {
    color: ${a};
    margin-bottom: 20px;
    text-align: center;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.feature {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid ${a};
    text-align: center;
}

.feature h3 {
    color: ${a};
    margin-bottom: 10px;
}

footer {
    text-align: center;
    color: white;
    opacity: 0.8;
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }
    
    nav {
        flex-direction: column;
        align-items: center;
    }
    
    .features {
        grid-template-columns: 1fr;
    }
}`}generateFallbackJS(e,t){return`// ${e} JavaScript
console.log('${e} loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing ${t} app...');
    
    // Initialize app
    initializeApp();
    
    // Add smooth scrolling for navigation
    setupNavigation();
    
    // Add any app-specific functionality
    setupAppFeatures();
});

function initializeApp() {
    console.log('Initializing ${e}...');
    
    // Add loading animation
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transition = 'opacity 0.5s ease-in';
        
        setTimeout(() => {
            container.style.opacity = '1';
        }, 100);
    }
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupAppFeatures() {
    // Add interactive features based on app type
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    console.log('App features initialized');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeApp, setupNavigation, setupAppFeatures };
}`}generateFallbackPackageJson(e){const t=e.toLowerCase().replace(/\s+/g,"-");return JSON.stringify({name:t,version:"1.0.0",description:`Generated ${e} application`,main:"script.js",scripts:{start:"python -m http.server 8000",build:"echo 'Build complete'",dev:"python -m http.server 8000"},keywords:["dreambuild","generated","web","app"],author:"DreamBuild",license:"MIT",dependencies:{react:"^18.0.0","react-dom":"^18.0.0"}},null,2)}getTemplateById(e){return this.templates.get(e)}getTemplatesByCategory(e){return Array.from(this.templates.values()).filter(t=>t.category===e)}searchTemplates(e){var i,s;const t=[],a=e.toLowerCase();for(const n of this.templates.values())(n.name.toLowerCase().includes(a)||(i=n.description)!=null&&i.toLowerCase().includes(a)||(s=n.tags)!=null&&s.some(o=>o.toLowerCase().includes(a)))&&t.push(n);return t}getStats(){return{totalTemplates:this.templates.size,totalCategories:this.categories.size,categories:Array.from(this.categories.values()).map(e=>({name:e.name,count:e.count,icon:e.icon}))}}}class m{constructor(){this.customizationLevels={minimal:.1,light:.3,moderate:.5,heavy:.7,complete:1}}async analyzeCustomizations(e,t,a){const i={level:"moderate",changes:[],colors:null,content:null,features:[]};t.length>100?i.level="heavy":t.length<50&&(i.level="light");const s=t.match(/(blue|red|green|purple|orange|pink|yellow|black|white)/i);s&&(i.colors=s[0].toLowerCase());const n=["auth","payment","database","api","mobile","responsive"];return i.features=n.filter(o=>t.toLowerCase().includes(o)),i}async customizeFile(e,t,a){let i=t;return a.colors&&(i=this.applyColorTheme(i,a.colors)),a.features.length>0&&(i=this.applyFeatureCustomizations(i,a.features)),a.content&&(i=this.applyContentCustomizations(i,a.content)),i}applyColorTheme(e,t){const a={blue:"#3b82f6",red:"#ef4444",green:"#10b981",purple:"#8b5cf6",orange:"#f97316",pink:"#ec4899",yellow:"#f59e0b"},i=a[t]||a.blue;let s=e.replace(/#667eea/g,i).replace(/black/g,i).replace(/#000000/g,i).replace(/#333/g,i);return(e.includes("color:")||e.includes("background"))&&(s+=`
/* AI Applied ${t} theme */`),s}applyFeatureCustomizations(e,t){let a=e;return t.includes("auth")&&(a+=`
/* Authentication styles added */`),t.includes("payment")&&(a+=`
/* Payment integration styles added */`),t.includes("responsive")&&(a=a.replace("grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));","grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));")),a}applyContentCustomizations(e,t){return e}}class g{constructor(e){this.templates=e}async findBestMatches(e,t={}){var s;const a=[],i=e.toLowerCase();for(const n of this.templates.values()){let o=0;if(n.name.toLowerCase().includes(i)&&(o+=10),(s=n.description)!=null&&s.toLowerCase().includes(i)&&(o+=8),n.tags){const l=n.tags.filter(c=>i.includes(c.toLowerCase())).length;o+=l*5}t.category&&n.category===t.category&&(o+=15),t.complexity&&n.complexity===t.complexity&&(o+=10);const r=["dashboard","app","application","website","portal","panel"],p=r.filter(l=>i.includes(l)),u=r.filter(l=>{var c;return n.name.toLowerCase().includes(l)||((c=n.description)==null?void 0:c.toLowerCase().includes(l))});p.length>0&&u.length>0&&(o+=5),o>0&&a.push({...n,score:o})}return a.length===0?Array.from(this.templates.values()).slice(0,3).map(o=>({...o,score:1})):a.sort((n,o)=>o.score-n.score).slice(0,5)}}export{y as default};
//# sourceMappingURL=templateBasedGenerator-Dmrs39Pt.js.map
