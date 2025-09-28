import{_ as Q}from"./monaco-editor-bb996daf.js";import{u as Y,b as K,j as t,a as e,z as A}from"./index-6fbd3beb.js";import{r as c}from"./react-vendor-84e09ada.js";import{m as h,v as y,n as q,Q as X,G as Z,W as ee,S as te,a9 as j,b as T,a0 as P,q as M,X as ae,aa as E,ab as re,ac as le,ad as se,ae as ie}from"./ui-vendor-4e0271b3.js";import"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";import"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";import"./router-vendor-e414a864.js";import"./firebase-24a1fa17.js";const be=()=>{const{addFilesToProject:m}=Y();K();const[o,N]=c.useState(""),[b,v]=c.useState("all"),[r,s]=c.useState("grid"),[p,z]=c.useState("popularity"),[W,F]=c.useState([]),[I,k]=c.useState(!0),[d,u]=c.useState(0),[G,g]=c.useState("Loading templates..."),[w,R]=c.useState(!1),[i,D]=c.useState(null),B=[{id:"web-apps",name:"Web Applications",icon:E,description:"Full-stack web applications",color:"from-blue-500 to-cyan-500"},{id:"mobile-apps",name:"Mobile Apps",icon:re,description:"React Native and mobile applications",color:"from-purple-500 to-pink-500"},{id:"landing-pages",name:"Landing Pages",icon:y,description:"Marketing and landing pages",color:"from-green-500 to-emerald-500"},{id:"dashboards",name:"Dashboards",icon:le,description:"Analytics and admin dashboards",color:"from-orange-500 to-red-500"},{id:"ecommerce",name:"E-commerce",icon:se,description:"Online stores and marketplaces",color:"from-yellow-500 to-orange-500"},{id:"portfolio",name:"Portfolio",icon:ie,description:"Personal and creative portfolios",color:"from-indigo-500 to-purple-500"}],V=[{id:"todo-app",name:"Todo Application",description:"A modern todo app with React, Node.js, and MongoDB",category:"web-apps",tags:["React","Node.js","MongoDB","Express"],preview:"/api/placeholder/400/300",popularity:95,createdAt:"2024-01-15",files:{"package.json":'{"name": "todo-app", "version": "1.0.0", "dependencies": {"react": "^18.0.0"}}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Todo App</div>; }'}},{id:"blog-platform",name:"Blog Platform",description:"Full-featured blog with CMS, comments, and SEO",category:"web-apps",tags:["React","Next.js","Prisma","PostgreSQL"],preview:"/api/placeholder/400/300",popularity:88,createdAt:"2024-01-10",files:{"package.json":'{"name": "blog-platform", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Blog Platform</div>; }'}},{id:"weather-app",name:"Weather App",description:"Beautiful weather app with location services",category:"mobile-apps",tags:["React Native","Expo","API"],preview:"/api/placeholder/400/300",popularity:82,createdAt:"2024-01-12",files:{"package.json":'{"name": "weather-app", "version": "1.0.0"}',"App.js":'import React from "react"; export default function App() { return <div>Weather App</div>; }'}},{id:"saas-landing",name:"SaaS Landing Page",description:"Modern SaaS landing page with pricing and features",category:"landing-pages",tags:["React","Tailwind CSS","Framer Motion"],preview:"/api/placeholder/400/300",popularity:90,createdAt:"2024-01-08",files:{"package.json":'{"name": "saas-landing", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>SaaS Landing</div>; }'}},{id:"analytics-dashboard",name:"Analytics Dashboard",description:"Real-time analytics dashboard with charts and metrics",category:"dashboards",tags:["React","Chart.js","D3.js","WebSocket"],preview:"/api/placeholder/400/300",popularity:85,createdAt:"2024-01-05",files:{"package.json":'{"name": "analytics-dashboard", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Analytics Dashboard</div>; }'}},{id:"online-store",name:"Online Store",description:"Complete e-commerce solution with cart and payments",category:"ecommerce",tags:["React","Stripe","Firebase","Redux"],preview:"/api/placeholder/400/300",popularity:92,createdAt:"2024-01-03",files:{"package.json":'{"name": "online-store", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Online Store</div>; }'}},{id:"creative-portfolio",name:"Creative Portfolio",description:"Stunning portfolio for designers and developers",category:"portfolio",tags:["React","Three.js","GSAP","Framer Motion"],preview:"/api/placeholder/400/300",popularity:87,createdAt:"2024-01-01",files:{"package.json":'{"name": "creative-portfolio", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Creative Portfolio</div>; }'}}];c.useEffect(()=>{(async()=>{try{k(!0),u(0),g("Loading templates..."),u(20),g("Loading local templates..."),u(40),g("Initializing template service...");const{default:l}=await Q(()=>import("./simpleAIService-9155dbd7.js").then(L=>L.d),["assets/simpleAIService-9155dbd7.js","assets/utils-vendor-edfcd65b.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/firebase-24a1fa17.js","assets/index-6fbd3beb.js","assets/react-vendor-84e09ada.js","assets/router-vendor-e414a864.js","assets/ui-vendor-4e0271b3.js","assets/index-fc5f85aa.css"]);u(60),g("Fetching trending templates from GitHub...");const n=l.getAllTemplates(),f=new Promise((L,J)=>setTimeout(()=>J(new Error("Template loading timeout")),3e4)),U=await Promise.race([n,f]);u(80),g("Processing templates..."),F([...V,...U]),u(100),g("Templates loaded successfully!"),setTimeout(()=>{k(!1)},500)}catch(l){console.error("Failed to load GitHub templates:",l),l.message==="Template loading timeout"?g("Loading fallback templates (GitHub API timeout)..."):g("Loading fallback templates..."),u(80),await new Promise(n=>setTimeout(n,200)),u(100),F(V),setTimeout(()=>{k(!1)},500)}})()},[]);const C=W.filter(a=>{const l=b==="all"||a.category===b,n=o===""||a.name.toLowerCase().includes(o.toLowerCase())||(a.description||"").toLowerCase().includes(o.toLowerCase())||(a.tags||[]).some(f=>f.toLowerCase().includes(o.toLowerCase()));return l&&n}).sort((a,l)=>{switch(p){case"popularity":return l.popularity-a.popularity;case"newest":return new Date(l.createdAt)-new Date(a.createdAt);case"name":return a.name.localeCompare(l.name);default:return 0}}),S=async a=>{try{let l={};a.id.startsWith("github_")?l=H(a):l=a.files||{},m(l),A.success(`Template "${a.name}" added to your project!`)}catch(l){console.error("Failed to use template:",l),A.error("Failed to load template. Please try again.")}},H=a=>{const l={},n={name:a.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:a.description||"Generated from GitHub template",main:"index.js",scripts:{start:"npm run dev",dev:"vite",build:"vite build"},dependencies:{react:"^18.2.0","react-dom":"^18.2.0"},devDependencies:{vite:"^4.0.0","@vitejs/plugin-react":"^3.0.0"}};l["package.json"]=JSON.stringify(n,null,2),l["index.html"]=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${a.name}</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"><\/script>
</body>
</html>`,l["src/main.jsx"]=`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`;const f=_(a);return l["src/App.jsx"]=f,l["src/App.css"]=`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.header p {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.btn:hover {
  background: #2980b9;
}`,l},_=a=>{const l=a.name;switch(a.category||"web"){case"todo-app":return`import React, { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">
      <div className="header">
        <h1>${l}</h1>
        <p>Simple todo application</p>
      </div>
      
      <div className="content">
        <div className="todo-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo..."
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button className="btn" onClick={addTodo}>Add Todo</button>
        </div>
        
        <div className="todo-list">
          {todos.map(todo => (
            <div key={todo.id} className={\`todo-item \${todo.completed ? 'completed' : ''}\`}>
              <span onClick={() => toggleTodo(todo.id)}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App`;case"calculator":return`import React, { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+': return firstValue + secondValue
      case '-': return firstValue - secondValue
      case '*': return firstValue * secondValue
      case '/': return firstValue / secondValue
      case '=': return secondValue
      default: return secondValue
    }
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  return (
    <div className="app">
      <div className="header">
        <h1>${l}</h1>
        <p>Simple calculator application</p>
      </div>
      
      <div className="content">
        <div className="calculator">
          <div className="display">{display}</div>
          <div className="buttons">
            <button className="btn" onClick={clear}>C</button>
            <button className="btn" onClick={() => inputOperation('/')}>/</button>
            <button className="btn" onClick={() => inputOperation('*')}>*</button>
            <button className="btn" onClick={() => inputOperation('-')}>-</button>
            
            <button className="btn" onClick={() => inputNumber(7)}>7</button>
            <button className="btn" onClick={() => inputNumber(8)}>8</button>
            <button className="btn" onClick={() => inputNumber(9)}>9</button>
            <button className="btn" onClick={() => inputOperation('+')}>+</button>
            
            <button className="btn" onClick={() => inputNumber(4)}>4</button>
            <button className="btn" onClick={() => inputNumber(5)}>5</button>
            <button className="btn" onClick={() => inputNumber(6)}>6</button>
            <button className="btn" onClick={performCalculation}>=</button>
            
            <button className="btn" onClick={() => inputNumber(1)}>1</button>
            <button className="btn" onClick={() => inputNumber(2)}>2</button>
            <button className="btn" onClick={() => inputNumber(3)}>3</button>
            
            <button className="btn zero" onClick={() => inputNumber(0)}>0</button>
            <button className="btn" onClick={() => setDisplay(display + '.')}>.</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App`;default:return`import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>${l}</h1>
        <p>${a.description||"A new project created with DreamBuild"}</p>
      </div>
      
      <div className="content">
        <h2>Welcome to your new ${l}!</h2>
        <p>This project was generated from a template. You can start editing and customizing it to fit your needs.</p>
        
        <div className="features">
          <h3>Features:</h3>
          <ul>
            {(template.features || ['Modern design', 'Responsive layout', 'Easy to customize']).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <button className="btn">Get Started</button>
      </div>
    </div>
  )
}

export default App`}},$=a=>{console.log("🔍 Opening preview for template:",a.name),D(a),R(!0),console.log("✅ Preview state set to true")},x=()=>{console.log("❌ Closing preview modal"),R(!1),D(null),console.log("✅ Preview state set to false")};c.useEffect(()=>{const a=l=>{l.key==="Escape"&&w&&x()};if(w)return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[w]);const O=a=>{const l=JSON.stringify(a,null,2);navigator.clipboard.writeText(l),A.success(`Template "${a.name}" copied to clipboard!`)};return t("div",{className:"min-h-screen bg-background",children:[e("div",{className:"bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-border/50",children:e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:t("div",{className:"text-center",children:[t(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"flex items-center justify-center gap-3 mb-8",children:[e("div",{className:"w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:e(y,{className:"h-6 w-6 text-primary-foreground"})}),e("h1",{className:"text-4xl font-bold text-high-contrast",children:"Template Library"})]}),t("div",{className:"flex flex-col items-center space-y-6",children:[e(h.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-xl text-muted-foreground max-w-2xl mx-auto text-center",children:"Choose from our collection of professionally designed templates to jumpstart your next project"}),e(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"max-w-md w-full mx-auto relative",children:t("div",{className:"relative",children:[e("input",{type:"text",placeholder:"Search templates...",value:o,onChange:a=>N(a.target.value),className:"w-full pl-4 pr-12 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground"}),e(q,{className:"absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10"})]})})]})]})})}),t("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[t("div",{className:"flex items-center gap-2",children:[e(X,{className:"h-5 w-5 text-muted-foreground"}),t("select",{value:b,onChange:a=>v(a.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[e("option",{value:"all",children:"All Categories"}),B.map(a=>e("option",{value:a.id,children:a.name},a.id))]})]}),e("div",{className:"flex items-center gap-2",children:t("select",{value:p,onChange:a=>z(a.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[e("option",{value:"popularity",children:"Most Popular"}),e("option",{value:"newest",children:"Newest First"}),e("option",{value:"name",children:"Alphabetical"})]})}),t("div",{className:"flex items-center gap-2 ml-auto",children:[e("button",{onClick:()=>s("grid"),className:`p-2 rounded-lg transition-colors ${r==="grid"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:e(Z,{className:"h-4 w-4"})}),e("button",{onClick:()=>s("list"),className:`p-2 rounded-lg transition-colors ${r==="list"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:e(ee,{className:"h-4 w-4"})})]})]}),I?e("div",{className:"flex flex-col items-center justify-center py-20",children:t(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"w-full max-w-md",children:[e("div",{className:"flex justify-center mb-6",children:e("div",{className:"w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center animate-spin",children:e(te,{className:"h-8 w-8 text-primary-foreground"})})}),t("div",{className:"text-center mb-6",children:[e("h3",{className:"text-xl font-semibold text-foreground mb-2",children:G}),e("p",{className:"text-muted-foreground",children:"Fetching the latest templates for you..."})]}),e("div",{className:"w-full bg-muted rounded-full h-3 mb-4",children:e(h.div,{className:"bg-gradient-to-r from-primary to-primary-light h-3 rounded-full",initial:{width:0},animate:{width:`${d}%`},transition:{duration:.5,ease:"easeOut"}})}),t("div",{className:"flex justify-between items-center text-sm text-muted-foreground",children:[e("span",{children:"Progress"}),t("span",{children:[d,"%"]})]}),t("div",{className:"mt-6 space-y-2",children:[t("div",{className:`flex items-center gap-2 text-sm ${d>=20?"text-primary":"text-muted-foreground"}`,children:[e("div",{className:`w-2 h-2 rounded-full ${d>=20?"bg-primary":"bg-muted"}`}),e("span",{children:"Loading local templates"})]}),t("div",{className:`flex items-center gap-2 text-sm ${d>=40?"text-primary":"text-muted-foreground"}`,children:[e("div",{className:`w-2 h-2 rounded-full ${d>=40?"bg-primary":"bg-muted"}`}),e("span",{children:"Initializing template service"})]}),t("div",{className:`flex items-center gap-2 text-sm ${d>=60?"text-primary":"text-muted-foreground"}`,children:[e("div",{className:`w-2 h-2 rounded-full ${d>=60?"bg-primary":"bg-muted"}`}),e("span",{children:"Fetching GitHub templates"})]}),t("div",{className:`flex items-center gap-2 text-sm ${d>=80?"text-primary":"text-muted-foreground"}`,children:[e("div",{className:`w-2 h-2 rounded-full ${d>=80?"bg-primary":"bg-muted"}`}),e("span",{children:"Processing templates"})]}),t("div",{className:`flex items-center gap-2 text-sm ${d>=100?"text-primary":"text-muted-foreground"}`,children:[e("div",{className:`w-2 h-2 rounded-full ${d>=100?"bg-primary":"bg-muted"}`}),e("span",{children:"Ready to use!"})]})]})]})}):r==="grid"?e("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:C.map((a,l)=>t(h.div,{"data-template-id":a.id,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:l*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:[t("div",{className:"aspect-video bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden",children:[e("div",{className:"absolute inset-0 flex items-center justify-center",children:t("div",{className:"text-center",children:[e(y,{className:"h-12 w-12 text-muted-foreground mx-auto mb-2"}),e("p",{className:"text-sm text-muted-foreground",children:a.name})]})}),e("div",{className:"absolute top-3 right-3",children:t("div",{className:"flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs",children:[e(j,{className:"h-3 w-3 text-warning fill-current"}),t("span",{children:[a.popularity,"%"]})]})})]}),t("div",{className:"p-6",children:[e("h3",{className:"font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors",children:a.name}),e("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:a.description||"No description available"}),t("div",{className:"flex flex-wrap gap-2 mb-4",children:[(a.tags||[]).slice(0,3).map(n=>e("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:n},n)),(a.tags||[]).length>3&&t("span",{className:"px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md",children:["+",(a.tags||[]).length-3," more"]})]}),t("div",{className:"flex gap-2",children:[t("button",{onClick:()=>S(a),className:"flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[e(T,{className:"h-4 w-4"}),"Use Template"]}),e("button",{onClick:()=>$(a),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:e(P,{className:"h-4 w-4"})}),e("button",{onClick:()=>O(a),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:e(M,{className:"h-4 w-4"})})]})]})]},`${a.id}-${l}`))}):e("div",{className:"space-y-4",children:C.map((a,l)=>e(h.div,{"data-template-id":a.id,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:l*.05},className:"bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:t("div",{className:"flex items-center gap-6",children:[e("div",{className:"w-24 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center flex-shrink-0",children:e(y,{className:"h-6 w-6 text-muted-foreground"})}),t("div",{className:"flex-1 min-w-0",children:[t("div",{className:"flex items-center gap-3 mb-2",children:[e("h3",{className:"font-semibold text-lg text-foreground group-hover:text-primary transition-colors",children:a.name}),t("div",{className:"flex items-center gap-1 bg-warning/10 text-warning px-2 py-1 rounded-full text-xs",children:[e(j,{className:"h-3 w-3 fill-current"}),t("span",{children:[a.popularity||0,"%"]})]})]}),e("p",{className:"text-sm text-muted-foreground mb-3",children:a.description||"No description available"}),e("div",{className:"flex flex-wrap gap-2",children:(a.tags||[]).map(n=>e("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:n},n))})]}),t("div",{className:"flex gap-2 flex-shrink-0",children:[t("button",{onClick:()=>S(a),className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[e(T,{className:"h-4 w-4"}),"Use Template"]}),e("button",{onClick:()=>$(a),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:e(P,{className:"h-4 w-4"})}),e("button",{onClick:()=>O(a),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:e(M,{className:"h-4 w-4"})})]})]})},`${a.id}-list-${l}`))}),C.length===0&&t("div",{className:"text-center py-16",children:[e(y,{className:"h-16 w-16 text-muted-foreground mx-auto mb-4"}),e("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No templates found"}),e("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search criteria or browse all categories"}),e("button",{onClick:()=>{N(""),v("all")},className:"px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]})]}),w&&i&&e("div",{className:"modal-backdrop",style:{position:"fixed",top:0,left:0,right:0,bottom:0,width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",backgroundColor:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(4px)",zIndex:10,visibility:"visible",opacity:1,pointerEvents:"auto"},onClick:a=>{a.target===a.currentTarget&&x()},children:t(h.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"modal-content bg-white border border-gray-300 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col",style:{zIndex:1e4,backgroundColor:"white",border:"2px solid #e5e7eb",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)",visibility:"visible",opacity:1,display:"flex",position:"relative"},onClick:a=>{a.stopPropagation()},children:[t("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50 flex-shrink-0",children:[t("div",{className:"flex items-center gap-3",children:[e("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e(P,{className:"h-5 w-5 text-white"})}),t("div",{children:[t("h2",{className:"text-xl font-semibold text-gray-900",children:["Preview: ",i.name]}),e("p",{className:"text-sm text-gray-600",children:"See how this template looks when completed"})]})]}),e("button",{onClick:x,className:"flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg",title:"Close Preview",children:e(ae,{className:"h-5 w-5"})})]}),t("div",{className:"flex-1 overflow-y-auto p-6 bg-white",children:[t("div",{className:"max-w-full",children:[t("div",{className:"mb-6",children:[e("p",{className:"text-gray-600 mb-4",children:i.description||"A professional template for your next project."}),e("div",{className:"flex flex-wrap gap-2 mb-4",children:(i.tags||[]).slice(0,5).map(a=>e("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:a},a))}),t("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",children:[t("div",{children:[e("span",{className:"text-gray-600",children:"Difficulty:"}),e("span",{className:"ml-2 font-medium text-gray-900",children:i.difficulty||"Beginner"})]}),t("div",{children:[e("span",{className:"text-gray-600",children:"Time:"}),e("span",{className:"ml-2 font-medium text-gray-900",children:i.estimatedTime||"2-4 hours"})]}),t("div",{children:[e("span",{className:"text-gray-600",children:"Stars:"}),e("span",{className:"ml-2 font-medium text-gray-900",children:i.stars||"N/A"})]}),t("div",{children:[e("span",{className:"text-gray-600",children:"Source:"}),e("span",{className:"ml-2 font-medium text-gray-900 capitalize",children:i.source||"Local"})]})]})]}),t("div",{className:"bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200",children:[t("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900",children:[e(E,{className:"h-5 w-5"}),"Live Preview"]}),t("div",{className:"bg-white rounded-lg border-2 border-gray-300 overflow-hidden shadow-lg",style:{backgroundColor:"white"},children:[t("div",{className:"bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200",children:[t("div",{className:"flex gap-2",children:[e("div",{className:"w-3 h-3 bg-red-400 rounded-full"}),e("div",{className:"w-3 h-3 bg-yellow-400 rounded-full"}),e("div",{className:"w-3 h-3 bg-green-400 rounded-full"})]}),e("div",{className:"flex-1 text-center",children:e("span",{className:"text-sm text-gray-600 font-medium",children:i.name})})]}),e("div",{className:"p-8 min-h-[400px]",children:oe(i)})]})]}),i.features&&i.features.length>0&&t("div",{className:"mb-6",children:[e("h3",{className:"text-lg font-semibold mb-3 text-gray-900",children:"Features"}),e("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:i.features.map((a,l)=>t("div",{className:"flex items-center gap-2",children:[e("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e("span",{className:"text-sm text-gray-600",children:a})]},l))})]}),i.techStack&&i.techStack.length>0&&t("div",{className:"mb-6",children:[e("h3",{className:"text-lg font-semibold mb-3 text-gray-900",children:"Tech Stack"}),e("div",{className:"flex flex-wrap gap-2",children:i.techStack.map((a,l)=>e("span",{className:"px-3 py-1 bg-gray-100 border border-gray-300 text-sm rounded-lg text-gray-800",children:a},l))})]})]}),t("div",{className:"flex items-center justify-between p-6 border-t border-gray-200",children:[t("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[e(j,{className:"h-4 w-4"}),t("span",{children:["Popularity: ",i.popularity||0,"%"]})]}),t("div",{className:"flex gap-3",children:[e("button",{onClick:x,className:"px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors",children:"Close"}),t("button",{onClick:()=>{S(i),x()},className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2",children:[e(T,{className:"h-4 w-4"}),"Use Template"]})]})]})]})]})})]})},oe=m=>{const o=m.category||"web",N=m.name.toLowerCase(),b=(m.description||"").toLowerCase(),v=(m.tags||[]).join(" ").toLowerCase(),r=`${N} ${b} ${v}`.toLowerCase();return r.includes("todo")||o==="todo-app"||r.includes("task")?t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"✅ Todo Application"}),e("p",{className:"text-gray-600",children:"Simple todo application"})]}),t("div",{className:"max-w-md mx-auto space-y-4",children:[t("div",{className:"flex gap-2",children:[e("input",{type:"text",placeholder:"Add a new todo...",className:"flex-1 px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none",readOnly:!0}),e("button",{className:"px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg",children:"➕ Add"})]}),t("div",{className:"space-y-3",children:[t("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl",children:[e("input",{type:"checkbox",className:"w-5 h-5 text-blue-500 rounded"}),e("span",{className:"flex-1 text-gray-800 font-medium",children:"📝 Complete project documentation"}),e("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]}),t("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl",children:[e("input",{type:"checkbox",checked:!0,className:"w-5 h-5 text-green-500 rounded"}),e("span",{className:"flex-1 line-through text-gray-500",children:"✅ Review code changes"}),e("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]}),t("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl",children:[e("input",{type:"checkbox",className:"w-5 h-5 text-blue-500 rounded"}),e("span",{className:"flex-1 text-gray-800 font-medium",children:"📦 Update dependencies"}),e("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]})]})]})]}):r.includes("calculator")||o==="calculator"||r.includes("math")||r.includes("arithmetic")?t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"🧮 Calculator"}),e("p",{className:"text-gray-600",children:"Simple calculator application"})]}),t("div",{className:"max-w-xs mx-auto",children:[e("div",{className:"bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl mb-4 shadow-lg",children:e("div",{className:"text-right text-3xl font-mono text-green-400",children:"42"})}),t("div",{className:"grid grid-cols-4 gap-3",children:[["C","/","*","-"].map((s,p)=>e("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${p===0?"bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700":"bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"}`,children:s},s)),[7,8,9,"+"].map((s,p)=>e("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${p===3?"bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700":"bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500"}`,children:s},s)),[4,5,6,"="].map((s,p)=>e("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${p===3?"bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 row-span-2":"bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500"}`,children:s},s)),[1,2,3].map(s=>e("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all",children:s},s)),e("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all col-span-2",children:"0"}),e("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all",children:"."})]})]})]}):r.includes("store")||r.includes("ecommerce")||r.includes("shop")||r.includes("marketplace")||r.includes("retail")||o==="ecommerce"?t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Online Store"}),e("p",{className:"text-gray-600",children:"Modern e-commerce platform"})]}),t("div",{className:"space-y-4",children:[t("div",{className:"flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg",children:[e("h2",{className:"text-xl font-bold",children:"🛍️ TechStore"}),t("div",{className:"flex items-center gap-4",children:[e("span",{className:"bg-white bg-opacity-20 px-3 py-1 rounded-full",children:"🛒 Cart (2)"}),e("span",{className:"bg-white bg-opacity-20 px-3 py-1 rounded-full",children:"👤 Account"})]})]}),t("div",{className:"grid grid-cols-2 gap-4",children:[t("div",{className:"border-2 border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors shadow-lg",children:[e("div",{className:"w-full h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-2 flex items-center justify-center",children:e("span",{className:"text-white text-2xl",children:"🎧"})}),e("h3",{className:"font-semibold text-sm text-gray-800",children:"Wireless Headphones"}),e("p",{className:"text-green-600 font-bold text-lg",children:"$99.99"}),e("button",{className:"w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"Add to Cart"})]}),t("div",{className:"border-2 border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors shadow-lg",children:[e("div",{className:"w-full h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-2 flex items-center justify-center",children:e("span",{className:"text-white text-2xl",children:"⌚"})}),e("h3",{className:"font-semibold text-sm text-gray-800",children:"Smart Watch"}),e("p",{className:"text-green-600 font-bold text-lg",children:"$199.99"}),e("button",{className:"w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"Add to Cart"})]})]}),t("div",{className:"flex justify-center gap-2",children:[e("button",{className:"px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"🏠 Home"}),e("button",{className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",children:"📦 Products"}),e("button",{className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",children:"ℹ️ About"})]})]})]}):r.includes("portfolio")||r.includes("personal")||r.includes("developer")||r.includes("profile")||o==="portfolio"?t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Personal Portfolio"}),e("p",{className:"text-gray-600",children:"Modern, responsive portfolio website"})]}),t("div",{className:"space-y-4",children:[t("div",{className:"text-center",children:[e("div",{className:"w-20 h-20 bg-blue-500 rounded-full mx-auto mb-2"}),e("h2",{className:"text-xl font-semibold",children:"John Doe"}),e("p",{className:"text-gray-600",children:"Full Stack Developer"})]}),t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e("h3",{className:"font-semibold mb-2",children:"Project 1"}),e("p",{className:"text-sm text-gray-600",children:"E-commerce platform built with React"})]}),t("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e("h3",{className:"font-semibold mb-2",children:"Project 2"}),e("p",{className:"text-sm text-gray-600",children:"Mobile app using React Native"})]})]}),e("div",{className:"text-center",children:e("button",{className:"px-6 py-2 bg-blue-500 text-white rounded-lg",children:"Get In Touch"})})]})]}):r.includes("blog")||r.includes("cms")||r.includes("article")||r.includes("post")||o==="blog"?t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Blog Platform"}),e("p",{className:"text-gray-600",children:"Full-featured blog with CMS"})]}),t("div",{className:"space-y-4",children:[t("div",{className:"p-4 bg-gray-100 rounded-lg",children:[e("h2",{className:"text-xl font-bold",children:"My Blog"}),e("p",{className:"text-gray-600",children:"Thoughts on technology and design"})]}),t("div",{className:"space-y-3",children:[t("div",{className:"border-l-4 border-blue-500 pl-4",children:[e("h3",{className:"font-semibold",children:"Getting Started with React"}),e("p",{className:"text-sm text-gray-600",children:"Learn the basics of React development..."}),e("span",{className:"text-xs text-gray-500",children:"Dec 15, 2024 • 5 min read"})]}),t("div",{className:"border-l-4 border-green-500 pl-4",children:[e("h3",{className:"font-semibold",children:"CSS Grid vs Flexbox"}),e("p",{className:"text-sm text-gray-600",children:"A comprehensive comparison..."}),e("span",{className:"text-xs text-gray-500",children:"Dec 12, 2024 • 8 min read"})]})]}),t("div",{className:"flex justify-center gap-2",children:[e("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"Home"}),e("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"About"}),e("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"Contact"})]})]})]}):r.includes("weather")||r.includes("forecast")||r.includes("climate")||o==="weather-app"?t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"🌤️ Weather App"}),e("p",{className:"text-gray-600",children:"Beautiful weather application"})]}),t("div",{className:"space-y-4",children:[t("div",{className:"bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white p-6 rounded-xl text-center shadow-xl",children:[t("div",{className:"flex items-center justify-center mb-2",children:[e("span",{className:"text-4xl mr-2",children:"☀️"}),e("h2",{className:"text-2xl font-bold",children:"New York"})]}),e("div",{className:"text-5xl font-bold my-3",children:"72°F"}),e("p",{className:"text-xl",children:"Partly Cloudy"}),e("p",{className:"text-sm opacity-90 mt-1",children:"Feels like 75°F"})]}),t("div",{className:"grid grid-cols-3 gap-3 text-center",children:[t("div",{className:"p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl",children:[e("div",{className:"text-2xl mb-1",children:"💧"}),e("div",{className:"text-sm text-blue-600 font-medium",children:"Humidity"}),e("div",{className:"font-bold text-blue-800",children:"65%"})]}),t("div",{className:"p-4 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl",children:[e("div",{className:"text-2xl mb-1",children:"💨"}),e("div",{className:"text-sm text-green-600 font-medium",children:"Wind"}),e("div",{className:"font-bold text-green-800",children:"8 mph"})]}),t("div",{className:"p-4 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl",children:[e("div",{className:"text-2xl mb-1",children:"📊"}),e("div",{className:"text-sm text-purple-600 font-medium",children:"Pressure"}),e("div",{className:"font-bold text-purple-800",children:"30.1 in"})]})]}),t("div",{className:"space-y-3",children:[e("h3",{className:"font-semibold text-gray-800 text-lg",children:"📅 5-Day Forecast"}),e("div",{className:"space-y-2",children:[{day:"Mon",icon:"☀️",temp:75},{day:"Tue",icon:"⛅",temp:77},{day:"Wed",icon:"🌧️",temp:72},{day:"Thu",icon:"☀️",temp:80},{day:"Fri",icon:"⛅",temp:78}].map((s,p)=>t("div",{className:"flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow",children:[e("span",{className:"font-medium text-gray-800",children:s.day}),e("span",{className:"text-2xl",children:s.icon}),t("span",{className:"font-bold text-blue-600",children:[s.temp,"°F"]})]},s.day))})]})]})]}):r.includes("dashboard")||r.includes("analytics")||r.includes("admin")||r.includes("stats")||r.includes("metrics")||o==="dashboards"?t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"📊 Analytics Dashboard"}),e("p",{className:"text-gray-600",children:"Data visualization and analytics"})]}),t("div",{className:"space-y-4",children:[t("div",{className:"grid grid-cols-2 gap-4",children:[e("div",{className:"p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-lg",children:t("div",{className:"flex items-center justify-between",children:[t("div",{children:[e("div",{className:"text-3xl font-bold",children:"1,234"}),e("div",{className:"text-blue-100 text-sm",children:"👥 Total Users"})]}),e("div",{className:"text-3xl opacity-80",children:"👤"})]})}),e("div",{className:"p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white shadow-lg",children:t("div",{className:"flex items-center justify-between",children:[t("div",{children:[e("div",{className:"text-3xl font-bold",children:"$12,345"}),e("div",{className:"text-green-100 text-sm",children:"💰 Revenue"})]}),e("div",{className:"text-3xl opacity-80",children:"💵"})]})})]}),e("div",{className:"h-40 bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200 rounded-xl flex items-center justify-center shadow-lg",children:t("div",{className:"text-center",children:[e("div",{className:"text-4xl mb-2",children:"📈"}),e("span",{className:"text-purple-600 font-semibold",children:"📊 Interactive Chart"}),e("div",{className:"text-sm text-purple-500 mt-1",children:"Revenue over time"})]})}),t("div",{children:[e("h3",{className:"font-semibold mb-3 text-gray-800 text-lg",children:"🔔 Recent Activity"}),t("div",{className:"space-y-3",children:[t("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg",children:[e("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),e("span",{className:"text-sm text-gray-800",children:"✅ New user registration"}),e("span",{className:"text-xs text-gray-500 ml-auto bg-green-100 px-2 py-1 rounded-full",children:"2 min ago"})]}),t("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg",children:[e("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),e("span",{className:"text-sm text-gray-800",children:"🛒 Order #1234 completed"}),e("span",{className:"text-xs text-gray-500 ml-auto bg-blue-100 px-2 py-1 rounded-full",children:"5 min ago"})]}),t("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg",children:[e("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),e("span",{className:"text-sm text-gray-800",children:"📧 Newsletter sent"}),e("span",{className:"text-xs text-gray-500 ml-auto bg-yellow-100 px-2 py-1 rounded-full",children:"10 min ago"})]})]})]})]})]}):r.includes("landing")||r.includes("saas")||r.includes("marketing")||r.includes("homepage")||r.includes("pricing")||o==="landing-pages"?t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"SaaS Landing Page"}),e("p",{className:"text-gray-600",children:"Modern marketing page"})]}),t("div",{className:"space-y-4",children:[t("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center",children:[e("h2",{className:"text-2xl font-bold mb-2",children:"Build Amazing Apps"}),e("p",{className:"mb-4",children:"The best platform for developers"}),e("button",{className:"px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold",children:"Get Started"})]}),t("div",{className:"grid grid-cols-2 gap-3",children:[t("div",{className:"text-center p-3 border border-gray-200 rounded",children:[e("div",{className:"text-2xl mb-1",children:"⚡"}),e("div",{className:"text-sm font-semibold",children:"Fast"})]}),t("div",{className:"text-center p-3 border border-gray-200 rounded",children:[e("div",{className:"text-2xl mb-1",children:"🔒"}),e("div",{className:"text-sm font-semibold",children:"Secure"})]})]}),t("div",{className:"text-center",children:[e("h3",{className:"font-semibold mb-2",children:"Simple Pricing"}),t("div",{className:"bg-gray-100 p-4 rounded-lg",children:[e("div",{className:"text-3xl font-bold",children:"$29"}),e("div",{className:"text-sm text-gray-600",children:"per month"})]})]})]})]}):r.includes("mobile")||r.includes("app")||r.includes("ios")||r.includes("android")||r.includes("native")||o==="mobile-apps"?t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Mobile App"}),e("p",{className:"text-gray-600",children:"Native mobile application"})]}),e("div",{className:"space-y-4",children:e("div",{className:"mx-auto w-48 h-80 bg-gray-800 rounded-3xl p-2",children:t("div",{className:"w-full h-full bg-white rounded-2xl p-4 space-y-3",children:[t("div",{className:"flex justify-between items-center text-xs",children:[e("span",{children:"9:41"}),e("span",{children:"📶 📶 📶 🔋"})]}),t("div",{className:"space-y-3",children:[e("div",{className:"w-full h-16 bg-blue-500 rounded-lg flex items-center justify-center",children:e("span",{className:"text-white font-semibold",children:"My App"})}),t("div",{className:"space-y-2",children:[e("div",{className:"h-8 bg-gray-200 rounded"}),e("div",{className:"h-8 bg-gray-200 rounded"}),e("div",{className:"h-8 bg-gray-200 rounded"})]})]})]})})})]}):r.includes("game")||r.includes("snake")||r.includes("puzzle")||r.includes("arcade")?t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Game Application"}),e("p",{className:"text-gray-600",children:"Interactive game experience"})]}),t("div",{className:"space-y-4",children:[e("div",{className:"mx-auto w-64 h-64 bg-gray-900 rounded-lg p-4",children:t("div",{className:"w-full h-full bg-gray-800 rounded border-2 border-gray-600 relative",children:[e("div",{className:"absolute top-4 left-4 w-4 h-4 bg-green-400 rounded"}),e("div",{className:"absolute top-8 left-8 w-4 h-4 bg-green-400 rounded"}),e("div",{className:"absolute top-12 left-12 w-4 h-4 bg-green-400 rounded"}),e("div",{className:"absolute top-16 left-16 w-4 h-4 bg-red-500 rounded"})]})}),t("div",{className:"text-center",children:[e("div",{className:"flex justify-center gap-2 mb-4",children:e("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"↑"})}),t("div",{className:"flex justify-center gap-2",children:[e("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"←"}),e("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"↓"}),e("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"→"})]})]}),t("div",{className:"text-center",children:[e("div",{className:"text-2xl font-bold",children:"Score: 150"}),e("div",{className:"text-sm text-gray-600",children:"High Score: 300"})]})]})]}):r.includes("chat")||r.includes("messaging")||r.includes("message")||r.includes("communication")?t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Chat Application"}),e("p",{className:"text-gray-600",children:"Real-time messaging platform"})]}),t("div",{className:"space-y-4",children:[e("div",{className:"p-4 bg-blue-600 text-white rounded-lg",children:t("div",{className:"flex items-center gap-3",children:[e("div",{className:"w-8 h-8 bg-white rounded-full"}),t("div",{children:[e("div",{className:"font-semibold",children:"John Doe"}),e("div",{className:"text-sm opacity-90",children:"Online"})]})]})}),t("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:[e("div",{className:"flex justify-end",children:e("div",{className:"bg-blue-500 text-white p-3 rounded-lg max-w-xs",children:"Hey, how are you doing?"})}),e("div",{className:"flex justify-start",children:e("div",{className:"bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs",children:"I'm doing great! Working on a new project."})}),e("div",{className:"flex justify-end",children:e("div",{className:"bg-blue-500 text-white p-3 rounded-lg max-w-xs",children:"That's awesome! What kind of project?"})})]}),t("div",{className:"flex gap-2",children:[e("input",{type:"text",placeholder:"Type a message...",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg",readOnly:!0}),e("button",{className:"px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Send"})]})]})]}):t("div",{className:"space-y-6",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:m.name}),e("p",{className:"text-gray-600",children:m.description||"A new project created with DreamBuild"})]}),t("div",{className:"space-y-4",children:[t("div",{className:"text-center",children:[t("h2",{className:"text-xl font-semibold mb-2",children:["Welcome to your new ",m.name,"!"]}),e("p",{className:"text-gray-600",children:"This project was generated from a template. You can start editing and customizing it to fit your needs."})]}),m.features&&t("div",{children:[e("h3",{className:"font-semibold mb-2",children:"Features:"}),e("ul",{className:"space-y-1",children:m.features.slice(0,3).map((s,p)=>t("li",{className:"text-sm text-gray-600",children:["• ",s]},p))})]}),e("div",{className:"text-center",children:e("button",{className:"px-6 py-2 bg-blue-500 text-white rounded-lg",children:"Get Started"})})]})]})};export{be as default};
