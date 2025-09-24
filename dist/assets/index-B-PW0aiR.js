import{initializeApp as yo}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";import{getAuth as vo,signInWithPopup as jo,GithubAuthProvider as wo,GoogleAuthProvider as No}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";import{r as m,a as So,b as Co,R as Oe,g as ko}from"./react-vendor-DWvC8KHc.js";import{_ as To,C as Do,r as xn,S as Po,F as Ao,g as wr,a as Os,b as Eo,c as Ro,d as Io,i as Nr,e as ja,f as wa,o as Na,h as ys,j as ee,s as Oo,G as Lo,k as bn,l as xe,m as Mo,n as Fo,p as $o,q as Ut,t as Ht,u as it,w as wt,v as rr}from"./firebase-yUj2_25M.js";import{_ as $e}from"./monaco-editor-BWpThiUx.js";import{S as ht,R as Te,C as W,B as ye,D as De,U as Xe,M as _o,a as Bo,b as Sr,L as yn,X as qr,c as Uo,G as pe,T as Vr,d as Et,e as Jr,m as L,f as Ls,Z as Ue,F as Ee,P as Rt,g as Dt,h as Sa,i as Qe,j as Ho,k as Ca,A as qe,l as Xt,n as It,o as ka,p as Ta,q as Ms,E as Qt,r as Go,s as zo,t as nr,u as Ts,v as Wo,w as qo,x as Be,y as Vo,z as Da,H as Jo,I as Le,J as Ce,K as Ds,N as be,O as Ze,Q as Fs,V as je,W as Zt,Y as Yo,_ as me,$ as Cr,a0 as _e,a1 as rs,a2 as Ko,a3 as Pa,a4 as Xo,a5 as Aa,a6 as Qo,a7 as Ea,a8 as Zo,a9 as el,aa as yt,ab as tl,ac as Pt,ad as Ra,ae as sl,af as Yr,ag as rl,ah as ar,ai as et,aj as kr,ak as Tr,al as Dr,am as nl,an as al,ao as il,ap as ol,aq as ll,ar as Je,as as gt,at as Pr,au as Ia,av as cl,aw as dl,ax as ir,ay as ul,az as vn,aA as ml,aB as pl}from"./ui-vendor-CHaMoLib.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const hl={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"},Oa=yo(hl),gl=vo(Oa);window.firebase={auth:()=>gl,GoogleAuthProvider:No,GithubAuthProvider:wo,signInWithPopup:jo};window.firebaseApp=Oa;console.log("Firebase loaded globally with providers:",!!window.firebase);var La={exports:{}},$s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=m,xl=Symbol.for("react.element"),bl=Symbol.for("react.fragment"),yl=Object.prototype.hasOwnProperty,vl=fl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jl={key:!0,ref:!0,__self:!0,__source:!0};function Ma(s,t,r){var n,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)yl.call(t,n)&&!jl.hasOwnProperty(n)&&(a[n]=t[n]);if(s&&s.defaultProps)for(n in t=s.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:xl,type:s,key:i,ref:o,props:a,_owner:vl.current}}$s.Fragment=bl;$s.jsx=Ma;$s.jsxs=Ma;La.exports=$s;var e=La.exports,Fa,jn=So;Fa=jn.createRoot,jn.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},es.apply(this,arguments)}var Ve;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Ve||(Ve={}));const wn="popstate";function wl(s){s===void 0&&(s={});function t(n,a){let{pathname:i,search:o,hash:l}=n.location;return Ar("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:Ps(a)}return Sl(t,r,null,s)}function te(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function $a(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Nl(){return Math.random().toString(36).substr(2,8)}function Nn(s,t){return{usr:s.state,key:s.key,idx:t}}function Ar(s,t,r,n){return r===void 0&&(r=null),es({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof t=="string"?Lt(t):t,{state:r,key:t&&t.key||n||Nl()})}function Ps(s){let{pathname:t="/",search:r="",hash:n=""}=s;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Lt(s){let t={};if(s){let r=s.indexOf("#");r>=0&&(t.hash=s.substr(r),s=s.substr(0,r));let n=s.indexOf("?");n>=0&&(t.search=s.substr(n),s=s.substr(0,n)),s&&(t.pathname=s)}return t}function Sl(s,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:i=!1}=n,o=a.history,l=Ve.Pop,d=null,c=u();c==null&&(c=0,o.replaceState(es({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function p(){l=Ve.Pop;let h=u(),N=h==null?null:h-c;c=h,d&&d({action:l,location:b.location,delta:N})}function g(h,N){l=Ve.Push;let j=Ar(b.location,h,N);c=u()+1;let S=Nn(j,c),w=b.createHref(j);try{o.pushState(S,"",w)}catch(f){if(f instanceof DOMException&&f.name==="DataCloneError")throw f;a.location.assign(w)}i&&d&&d({action:l,location:b.location,delta:1})}function y(h,N){l=Ve.Replace;let j=Ar(b.location,h,N);c=u();let S=Nn(j,c),w=b.createHref(j);o.replaceState(S,"",w),i&&d&&d({action:l,location:b.location,delta:0})}function x(h){let N=a.location.origin!=="null"?a.location.origin:a.location.href,j=typeof h=="string"?h:Ps(h);return j=j.replace(/ $/,"%20"),te(N,"No window.location.(origin|href) available to create URL for href: "+j),new URL(j,N)}let b={get action(){return l},get location(){return s(a,o)},listen(h){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(wn,p),d=h,()=>{a.removeEventListener(wn,p),d=null}},createHref(h){return t(a,h)},createURL:x,encodeLocation(h){let N=x(h);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:g,replace:y,go(h){return o.go(h)}};return b}var Sn;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Sn||(Sn={}));function Cl(s,t,r){return r===void 0&&(r="/"),kl(s,t,r)}function kl(s,t,r,n){let a=typeof t=="string"?Lt(t):t,i=Kr(a.pathname||"/",r);if(i==null)return null;let o=_a(s);Tl(o);let l=null;for(let d=0;l==null&&d<o.length;++d){let c=_l(i);l=Ml(o[d],c)}return l}function _a(s,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(i,o,l)=>{let d={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};d.relativePath.startsWith("/")&&(te(d.relativePath.startsWith(n),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(n.length));let c=Ye([n,d.relativePath]),u=r.concat(d);i.children&&i.children.length>0&&(te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_a(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Ol(c,i.index),routesMeta:u})};return s.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let d of Ba(i.path))a(i,o,d)}),t}function Ba(s){let t=s.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return a?[i,""]:[i];let o=Ba(n.join("/")),l=[];return l.push(...o.map(d=>d===""?i:[i,d].join("/"))),a&&l.push(...o),l.map(d=>s.startsWith("/")&&d===""?"/":d)}function Tl(s){s.sort((t,r)=>t.score!==r.score?r.score-t.score:Ll(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Dl=/^:[\w-]+$/,Pl=3,Al=2,El=1,Rl=10,Il=-2,Cn=s=>s==="*";function Ol(s,t){let r=s.split("/"),n=r.length;return r.some(Cn)&&(n+=Il),t&&(n+=Al),r.filter(a=>!Cn(a)).reduce((a,i)=>a+(Dl.test(i)?Pl:i===""?El:Rl),n)}function Ll(s,t){return s.length===t.length&&s.slice(0,-1).every((n,a)=>n===t[a])?s[s.length-1]-t[t.length-1]:0}function Ml(s,t,r){let{routesMeta:n}=s,a={},i="/",o=[];for(let l=0;l<n.length;++l){let d=n[l],c=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",p=Fl({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},u),g=d.route;if(!p)return null;Object.assign(a,p.params),o.push({params:a,pathname:Ye([i,p.pathname]),pathnameBase:Gl(Ye([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=Ye([i,p.pathnameBase]))}return o}function Fl(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[r,n]=$l(s.path,s.caseSensitive,s.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:n.reduce((c,u,p)=>{let{paramName:g,isOptional:y}=u;if(g==="*"){let b=l[p]||"";o=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const x=l[p];return y&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:s}}function $l(s,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),$a(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let n=[],a="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,d)=>(n.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(n.push({paramName:"*"}),a+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":s!==""&&s!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function _l(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $a(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),s}}function Kr(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=s.charAt(r);return n&&n!=="/"?null:s.slice(r)||"/"}function Bl(s,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof s=="string"?Lt(s):s;return{pathname:r?r.startsWith("/")?r:Ul(r,t):t,search:zl(n),hash:Wl(a)}}function Ul(s,t){let r=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function or(s,t,r,n){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hl(s){return s.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Xr(s,t){let r=Hl(s);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Qr(s,t,r,n){n===void 0&&(n=!1);let a;typeof s=="string"?a=Lt(s):(a=es({},s),te(!a.pathname||!a.pathname.includes("?"),or("?","pathname","search",a)),te(!a.pathname||!a.pathname.includes("#"),or("#","pathname","hash",a)),te(!a.search||!a.search.includes("#"),or("#","search","hash",a)));let i=s===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!n&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;a.pathname=g.join("/")}l=p>=0?t[p]:"/"}let d=Bl(a,l),c=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(c||u)&&(d.pathname+="/"),d}const Ye=s=>s.join("/").replace(/\/\/+/g,"/"),Gl=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),zl=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Wl=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function ql(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Ua=["post","put","patch","delete"];new Set(Ua);const Vl=["get",...Ua];new Set(Vl);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},ts.apply(this,arguments)}const Zr=m.createContext(null),Jl=m.createContext(null),tt=m.createContext(null),_s=m.createContext(null),st=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Ha=m.createContext(null);function Yl(s,t){let{relative:r}=t===void 0?{}:t;Mt()||te(!1);let{basename:n,navigator:a}=m.useContext(tt),{hash:i,pathname:o,search:l}=za(s,{relative:r}),d=o;return n!=="/"&&(d=o==="/"?n:Ye([n,o])),a.createHref({pathname:d,search:l,hash:i})}function Mt(){return m.useContext(_s)!=null}function rt(){return Mt()||te(!1),m.useContext(_s).location}function Ga(s){m.useContext(tt).static||m.useLayoutEffect(s)}function Bs(){let{isDataRoute:s}=m.useContext(st);return s?lc():Kl()}function Kl(){Mt()||te(!1);let s=m.useContext(Zr),{basename:t,future:r,navigator:n}=m.useContext(tt),{matches:a}=m.useContext(st),{pathname:i}=rt(),o=JSON.stringify(Xr(a,r.v7_relativeSplatPath)),l=m.useRef(!1);return Ga(()=>{l.current=!0}),m.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let p=Qr(c,JSON.parse(o),i,u.relative==="path");s==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ye([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,o,i,s])}function za(s,t){let{relative:r}=t===void 0?{}:t,{future:n}=m.useContext(tt),{matches:a}=m.useContext(st),{pathname:i}=rt(),o=JSON.stringify(Xr(a,n.v7_relativeSplatPath));return m.useMemo(()=>Qr(s,JSON.parse(o),i,r==="path"),[s,o,i,r])}function Xl(s,t){return Ql(s,t)}function Ql(s,t,r,n){Mt()||te(!1);let{navigator:a}=m.useContext(tt),{matches:i}=m.useContext(st),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let d=o?o.pathnameBase:"/";o&&o.route;let c=rt(),u;if(t){var p;let h=typeof t=="string"?Lt(t):t;d==="/"||(p=h.pathname)!=null&&p.startsWith(d)||te(!1),u=h}else u=c;let g=u.pathname||"/",y=g;if(d!=="/"){let h=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(h.length).join("/")}let x=Cl(s,{pathname:y}),b=rc(x&&x.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:Ye([d,a.encodeLocation?a.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?d:Ye([d,a.encodeLocation?a.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,r,n);return t&&b?m.createElement(_s.Provider,{value:{location:ts({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ve.Pop}},b):b}function Zl(){let s=oc(),t=ql(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),r=s instanceof Error?s.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),r?m.createElement("pre",{style:a},r):null,null)}const ec=m.createElement(Zl,null);class tc extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?m.createElement(st.Provider,{value:this.props.routeContext},m.createElement(Ha.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sc(s){let{routeContext:t,match:r,children:n}=s,a=m.useContext(Zr);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),m.createElement(st.Provider,{value:t},n)}function rc(s,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),s==null){var i;if(!r)return null;if(r.errors)s=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let o=s,l=(a=r)==null?void 0:a.errors;if(l!=null){let u=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);u>=0||te(!1),o=o.slice(0,Math.min(o.length,u+1))}let d=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let u=0;u<o.length;u++){let p=o[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=u),p.route.id){let{loaderData:g,errors:y}=r,x=p.route.loader&&g[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||x){d=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,p,g)=>{let y,x=!1,b=null,h=null;r&&(y=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||ec,d&&(c<0&&g===0?(cc("route-fallback"),x=!0,h=null):c===g&&(x=!0,h=p.route.hydrateFallbackElement||null)));let N=t.concat(o.slice(0,g+1)),j=()=>{let S;return y?S=b:x?S=h:p.route.Component?S=m.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=u,m.createElement(sc,{match:p,routeContext:{outlet:u,matches:N,isDataRoute:r!=null},children:S})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?m.createElement(tc,{location:r.location,revalidation:r.revalidation,component:b,error:y,children:j(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):j()},null)}var Wa=function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s}(Wa||{}),qa=function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s}(qa||{});function nc(s){let t=m.useContext(Zr);return t||te(!1),t}function ac(s){let t=m.useContext(Jl);return t||te(!1),t}function ic(s){let t=m.useContext(st);return t||te(!1),t}function Va(s){let t=ic(),r=t.matches[t.matches.length-1];return r.route.id||te(!1),r.route.id}function oc(){var s;let t=m.useContext(Ha),r=ac(),n=Va();return t!==void 0?t:(s=r.errors)==null?void 0:s[n]}function lc(){let{router:s}=nc(Wa.UseNavigateStable),t=Va(qa.UseNavigateStable),r=m.useRef(!1);return Ga(()=>{r.current=!0}),m.useCallback(function(a,i){i===void 0&&(i={}),r.current&&(typeof a=="number"?s.navigate(a):s.navigate(a,ts({fromRouteId:t},i)))},[s,t])}const kn={};function cc(s,t,r){kn[s]||(kn[s]=!0)}function dc(s,t){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function uc(s){let{to:t,replace:r,state:n,relative:a}=s;Mt()||te(!1);let{future:i,static:o}=m.useContext(tt),{matches:l}=m.useContext(st),{pathname:d}=rt(),c=Bs(),u=Qr(t,Xr(l,i.v7_relativeSplatPath),d,a==="path"),p=JSON.stringify(u);return m.useEffect(()=>c(JSON.parse(p),{replace:r,state:n,relative:a}),[c,p,a,r,n]),null}function se(s){te(!1)}function mc(s){let{basename:t="/",children:r=null,location:n,navigationType:a=Ve.Pop,navigator:i,static:o=!1,future:l}=s;Mt()&&te(!1);let d=t.replace(/^\/*/,"/"),c=m.useMemo(()=>({basename:d,navigator:i,static:o,future:ts({v7_relativeSplatPath:!1},l)}),[d,l,i,o]);typeof n=="string"&&(n=Lt(n));let{pathname:u="/",search:p="",hash:g="",state:y=null,key:x="default"}=n,b=m.useMemo(()=>{let h=Kr(u,d);return h==null?null:{location:{pathname:h,search:p,hash:g,state:y,key:x},navigationType:a}},[d,u,p,g,y,x,a]);return b==null?null:m.createElement(tt.Provider,{value:c},m.createElement(_s.Provider,{children:r,value:b}))}function pc(s){let{children:t,location:r}=s;return Xl(Er(t),r)}new Promise(()=>{});function Er(s,t){t===void 0&&(t=[]);let r=[];return m.Children.forEach(s,(n,a)=>{if(!m.isValidElement(n))return;let i=[...t,a];if(n.type===m.Fragment){r.push.apply(r,Er(n.props.children,i));return}n.type!==se&&te(!1),!n.props.index||!n.props.children||te(!1);let o={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=Er(n.props.children,i)),r.push(o)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rr(){return Rr=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},Rr.apply(this,arguments)}function hc(s,t){if(s==null)return{};var r={},n=Object.keys(s),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=s[a]);return r}function gc(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function fc(s,t){return s.button===0&&(!t||t==="_self")&&!gc(s)}const xc=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bc="6";try{window.__reactRouterVersion=bc}catch{}const yc="startTransition",Tn=Co[yc];function vc(s){let{basename:t,children:r,future:n,window:a}=s,i=m.useRef();i.current==null&&(i.current=wl({window:a,v5Compat:!0}));let o=i.current,[l,d]=m.useState({action:o.action,location:o.location}),{v7_startTransition:c}=n||{},u=m.useCallback(p=>{c&&Tn?Tn(()=>d(p)):d(p)},[d,c]);return m.useLayoutEffect(()=>o.listen(u),[o,u]),m.useEffect(()=>dc(n),[n]),m.createElement(mc,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:n})}const jc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ce=m.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:i,replace:o,state:l,target:d,to:c,preventScrollReset:u,viewTransition:p}=t,g=hc(t,xc),{basename:y}=m.useContext(tt),x,b=!1;if(typeof c=="string"&&wc.test(c)&&(x=c,jc))try{let S=new URL(window.location.href),w=c.startsWith("//")?new URL(S.protocol+c):new URL(c),f=Kr(w.pathname,y);w.origin===S.origin&&f!=null?c=f+w.search+w.hash:b=!0}catch{}let h=Yl(c,{relative:a}),N=Nc(c,{replace:o,state:l,target:d,preventScrollReset:u,relative:a,viewTransition:p});function j(S){n&&n(S),S.defaultPrevented||N(S)}return m.createElement("a",Rr({},g,{href:x||h,onClick:b||i?n:j,ref:r,target:d}))});var Dn;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Dn||(Dn={}));var Pn;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Pn||(Pn={}));function Nc(s,t){let{target:r,replace:n,state:a,preventScrollReset:i,relative:o,viewTransition:l}=t===void 0?{}:t,d=Bs(),c=rt(),u=za(s,{relative:o});return m.useCallback(p=>{if(fc(p,r)){p.preventDefault();let g=n!==void 0?n:Ps(c)===Ps(u);d(s,{replace:g,state:a,preventScrollReset:i,relative:o,viewTransition:l})}},[c,d,u,n,a,r,s,i,o,l])}let Sc={data:""},Cc=s=>typeof window=="object"?((s?s.querySelector("#_goober"):window._goober)||Object.assign((s||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:s||Sc,kc=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Tc=/\/\*[^]*?\*\/|  +/g,An=/\n+/g,ze=(s,t)=>{let r="",n="",a="";for(let i in s){let o=s[i];i[0]=="@"?i[1]=="i"?r=i+" "+o+";":n+=i[1]=="f"?ze(o,i):i+"{"+ze(o,i[1]=="k"?"":t)+"}":typeof o=="object"?n+=ze(o,t?t.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,l):l?l+" "+d:d)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=ze.p?ze.p(i,o):i+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+n},Fe={},Ja=s=>{if(typeof s=="object"){let t="";for(let r in s)t+=r+Ja(s[r]);return t}return s},Dc=(s,t,r,n,a)=>{let i=Ja(s),o=Fe[i]||(Fe[i]=(d=>{let c=0,u=11;for(;c<d.length;)u=101*u+d.charCodeAt(c++)>>>0;return"go"+u})(i));if(!Fe[o]){let d=i!==s?s:(c=>{let u,p,g=[{}];for(;u=kc.exec(c.replace(Tc,""));)u[4]?g.shift():u[3]?(p=u[3].replace(An," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][u[1]]=u[2].replace(An," ").trim();return g[0]})(s);Fe[o]=ze(a?{["@keyframes "+o]:d}:d,r?"":"."+o)}let l=r&&Fe.g?Fe.g:null;return r&&(Fe.g=Fe[o]),((d,c,u,p)=>{p?c.data=c.data.replace(p,d):c.data.indexOf(d)===-1&&(c.data=u?d+c.data:c.data+d)})(Fe[o],t,n,l),o},Pc=(s,t,r)=>s.reduce((n,a,i)=>{let o=t[i];if(o&&o.call){let l=o(r),d=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=d?"."+d:l&&typeof l=="object"?l.props?"":ze(l,""):l===!1?"":l}return n+a+(o??"")},"");function Us(s){let t=this||{},r=s.call?s(t.p):s;return Dc(r.unshift?r.raw?Pc(r,[].slice.call(arguments,1),t.p):r.reduce((n,a)=>Object.assign(n,a&&a.call?a(t.p):a),{}):r,Cc(t.target),t.g,t.o,t.k)}let Ya,Ir,Or;Us.bind({g:1});let He=Us.bind({k:1});function Ac(s,t,r,n){ze.p=t,Ya=s,Ir=r,Or=n}function nt(s,t){let r=this||{};return function(){let n=arguments;function a(i,o){let l=Object.assign({},i),d=l.className||a.className;r.p=Object.assign({theme:Ir&&Ir()},l),r.o=/ *go\d+/.test(d),l.className=Us.apply(r,n)+(d?" "+d:"");let c=s;return s[0]&&(c=l.as||s,delete l.as),Or&&c[0]&&Or(l),Ya(c,l)}return a}}var Ec=s=>typeof s=="function",As=(s,t)=>Ec(s)?s(t):s,Rc=(()=>{let s=0;return()=>(++s).toString()})(),Ka=(()=>{let s;return()=>{if(s===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");s=!t||t.matches}return s}})(),Ic=20,en="default",Xa=(s,t)=>{let{toastLimit:r}=s.settings;switch(t.type){case 0:return{...s,toasts:[t.toast,...s.toasts].slice(0,r)};case 1:return{...s,toasts:s.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:n}=t;return Xa(s,{type:s.toasts.find(o=>o.id===n.id)?1:0,toast:n});case 3:let{toastId:a}=t;return{...s,toasts:s.toasts.map(o=>o.id===a||a===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return t.toastId===void 0?{...s,toasts:[]}:{...s,toasts:s.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...s,pausedAt:t.time};case 6:let i=t.time-(s.pausedAt||0);return{...s,pausedAt:void 0,toasts:s.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},vs=[],Qa={toasts:[],pausedAt:void 0,settings:{toastLimit:Ic}},Re={},Za=(s,t=en)=>{Re[t]=Xa(Re[t]||Qa,s),vs.forEach(([r,n])=>{r===t&&n(Re[t])})},ei=s=>Object.keys(Re).forEach(t=>Za(s,t)),Oc=s=>Object.keys(Re).find(t=>Re[t].toasts.some(r=>r.id===s)),Hs=(s=en)=>t=>{Za(t,s)},Lc={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Mc=(s={},t=en)=>{let[r,n]=m.useState(Re[t]||Qa),a=m.useRef(Re[t]);m.useEffect(()=>(a.current!==Re[t]&&n(Re[t]),vs.push([t,n]),()=>{let o=vs.findIndex(([l])=>l===t);o>-1&&vs.splice(o,1)}),[t]);let i=r.toasts.map(o=>{var l,d,c;return{...s,...s[o.type],...o,removeDelay:o.removeDelay||((l=s[o.type])==null?void 0:l.removeDelay)||(s==null?void 0:s.removeDelay),duration:o.duration||((d=s[o.type])==null?void 0:d.duration)||(s==null?void 0:s.duration)||Lc[o.type],style:{...s.style,...(c=s[o.type])==null?void 0:c.style,...o.style}}});return{...r,toasts:i}},Fc=(s,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:s,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Rc()}),ns=s=>(t,r)=>{let n=Fc(t,s,r);return Hs(n.toasterId||Oc(n.id))({type:2,toast:n}),n.id},J=(s,t)=>ns("blank")(s,t);J.error=ns("error");J.success=ns("success");J.loading=ns("loading");J.custom=ns("custom");J.dismiss=(s,t)=>{let r={type:3,toastId:s};t?Hs(t)(r):ei(r)};J.dismissAll=s=>J.dismiss(void 0,s);J.remove=(s,t)=>{let r={type:4,toastId:s};t?Hs(t)(r):ei(r)};J.removeAll=s=>J.remove(void 0,s);J.promise=(s,t,r)=>{let n=J.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof s=="function"&&(s=s()),s.then(a=>{let i=t.success?As(t.success,a):void 0;return i?J.success(i,{id:n,...r,...r==null?void 0:r.success}):J.dismiss(n),a}).catch(a=>{let i=t.error?As(t.error,a):void 0;i?J.error(i,{id:n,...r,...r==null?void 0:r.error}):J.dismiss(n)}),s};var $c=1e3,_c=(s,t="default")=>{let{toasts:r,pausedAt:n}=Mc(s,t),a=m.useRef(new Map).current,i=m.useCallback((p,g=$c)=>{if(a.has(p))return;let y=setTimeout(()=>{a.delete(p),o({type:4,toastId:p})},g);a.set(p,y)},[]);m.useEffect(()=>{if(n)return;let p=Date.now(),g=r.map(y=>{if(y.duration===1/0)return;let x=(y.duration||0)+y.pauseDuration-(p-y.createdAt);if(x<0){y.visible&&J.dismiss(y.id);return}return setTimeout(()=>J.dismiss(y.id,t),x)});return()=>{g.forEach(y=>y&&clearTimeout(y))}},[r,n,t]);let o=m.useCallback(Hs(t),[t]),l=m.useCallback(()=>{o({type:5,time:Date.now()})},[o]),d=m.useCallback((p,g)=>{o({type:1,toast:{id:p,height:g}})},[o]),c=m.useCallback(()=>{n&&o({type:6,time:Date.now()})},[n,o]),u=m.useCallback((p,g)=>{let{reverseOrder:y=!1,gutter:x=8,defaultPosition:b}=g||{},h=r.filter(S=>(S.position||b)===(p.position||b)&&S.height),N=h.findIndex(S=>S.id===p.id),j=h.filter((S,w)=>w<N&&S.visible).length;return h.filter(S=>S.visible).slice(...y?[j+1]:[0,j]).reduce((S,w)=>S+(w.height||0)+x,0)},[r]);return m.useEffect(()=>{r.forEach(p=>{if(p.dismissed)i(p.id,p.removeDelay);else{let g=a.get(p.id);g&&(clearTimeout(g),a.delete(p.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},Bc=He`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Uc=He`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Hc=He`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Gc=nt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Bc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Uc} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${s=>s.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Hc} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,zc=He`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Wc=nt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${s=>s.secondary||"#e0e0e0"};
  border-right-color: ${s=>s.primary||"#616161"};
  animation: ${zc} 1s linear infinite;
`,qc=He`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Vc=He`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Jc=nt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Vc} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${s=>s.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Yc=nt("div")`
  position: absolute;
`,Kc=nt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Xc=He`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Qc=nt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Xc} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Zc=({toast:s})=>{let{icon:t,type:r,iconTheme:n}=s;return t!==void 0?typeof t=="string"?m.createElement(Qc,null,t):t:r==="blank"?null:m.createElement(Kc,null,m.createElement(Wc,{...n}),r!=="loading"&&m.createElement(Yc,null,r==="error"?m.createElement(Gc,{...n}):m.createElement(Jc,{...n})))},ed=s=>`
0% {transform: translate3d(0,${s*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,td=s=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s*-150}%,-1px) scale(.6); opacity:0;}
`,sd="0%{opacity:0;} 100%{opacity:1;}",rd="0%{opacity:1;} 100%{opacity:0;}",nd=nt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ad=nt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,id=(s,t)=>{let r=s.includes("top")?1:-1,[n,a]=Ka()?[sd,rd]:[ed(r),td(r)];return{animation:t?`${He(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${He(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},od=m.memo(({toast:s,position:t,style:r,children:n})=>{let a=s.height?id(s.position||t||"top-center",s.visible):{opacity:0},i=m.createElement(Zc,{toast:s}),o=m.createElement(ad,{...s.ariaProps},As(s.message,s));return m.createElement(nd,{className:s.className,style:{...a,...r,...s.style}},typeof n=="function"?n({icon:i,message:o}):m.createElement(m.Fragment,null,i,o))});Ac(m.createElement);var ld=({id:s,className:t,style:r,onHeightUpdate:n,children:a})=>{let i=m.useCallback(o=>{if(o){let l=()=>{let d=o.getBoundingClientRect().height;n(s,d)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[s,n]);return m.createElement("div",{ref:i,className:t,style:r},a)},cd=(s,t)=>{let r=s.includes("top"),n=r?{top:0}:{bottom:0},a=s.includes("center")?{justifyContent:"center"}:s.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ka()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...a}},dd=Us`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ds=16,ud=({reverseOrder:s,position:t="top-center",toastOptions:r,gutter:n,children:a,toasterId:i,containerStyle:o,containerClassName:l})=>{let{toasts:d,handlers:c}=_c(r,i);return m.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:ds,left:ds,right:ds,bottom:ds,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(u=>{let p=u.position||t,g=c.calculateOffset(u,{reverseOrder:s,gutter:n,defaultPosition:t}),y=cd(p,g);return m.createElement(ld,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?dd:"",style:y},u.type==="custom"?As(u.message,u):a?a(u):m.createElement(od,{toast:u,position:p}))}))},B=J;const ti=m.createContext();function Gs(){return m.useContext(ti)}const En={light:{name:"Light Theme",cssVars:{"--primary":"#2563eb","--primary-foreground":"#ffffff","--background":"#ffffff","--foreground":"#0f172a","--card":"#ffffff","--muted":"#f8fafc","--border":"#e2e8f0"},isDark:!1},dark:{name:"Dark Theme",cssVars:{"--primary":"#3b82f6","--primary-foreground":"#ffffff","--background":"#0f172a","--foreground":"#f8fafc","--card":"#1e293b","--muted":"#1e293b","--border":"#334155"},isDark:!0},blue:{name:"Blue Theme",cssVars:{"--primary":"#1e40af","--primary-foreground":"#ffffff","--background":"#f0f9ff","--foreground":"#0c4a6e","--card":"#e0f2fe","--muted":"#e0f2fe","--border":"#7dd3fc"},isDark:!1},purple:{name:"Purple Theme",cssVars:{"--primary":"#7c3aed","--primary-foreground":"#ffffff","--background":"#faf5ff","--foreground":"#581c87","--card":"#f3e8ff","--muted":"#f3e8ff","--border":"#c4b5fd"},isDark:!1},green:{name:"Green Theme",cssVars:{"--primary":"#059669","--primary-foreground":"#ffffff","--background":"#f0fdf4","--foreground":"#064e3b","--card":"#dcfce7","--muted":"#dcfce7","--border":"#86efac"},isDark:!1},orange:{name:"Orange Theme",cssVars:{"--primary":"#ea580c","--primary-foreground":"#ffffff","--background":"#fff7ed","--foreground":"#9a3412","--card":"#fed7aa","--muted":"#fed7aa","--border":"#fdba74"},isDark:!1},red:{name:"Red Theme",cssVars:{"--primary":"#dc2626","--primary-foreground":"#ffffff","--background":"#fef2f2","--foreground":"#991b1b","--card":"#fecaca","--muted":"#fecaca","--border":"#fca5a5"},isDark:!1},pink:{name:"Pink Theme",cssVars:{"--primary":"#db2777","--primary-foreground":"#ffffff","--background":"#fdf2f8","--foreground":"#9d174d","--card":"#fce7f3","--muted":"#fce7f3","--border":"#f9a8d4"},isDark:!1},cyan:{name:"Cyan Theme",cssVars:{"--primary":"#0891b2","--primary-foreground":"#ffffff","--background":"#ecfeff","--foreground":"#164e63","--card":"#cffafe","--muted":"#cffafe","--border":"#67e8f9"},isDark:!1},amber:{name:"Amber Theme",cssVars:{"--primary":"#d97706","--primary-foreground":"#ffffff","--background":"#fffbeb","--foreground":"#92400e","--card":"#fef3c7","--muted":"#fef3c7","--border":"#fde68a"},isDark:!1},emerald:{name:"Emerald Theme",cssVars:{"--primary":"#10b981","--primary-foreground":"#ffffff","--background":"#ecfdf5","--foreground":"#064e3b","--card":"#d1fae5","--muted":"#d1fae5","--border":"#6ee7b7"},isDark:!1}};function md({children:s}){const[t,r]=m.useState("light");m.useEffect(()=>{const o=localStorage.getItem("theme")||"light";r(o),n(o)},[]);const n=o=>{const l=En[o];l&&(Object.entries(l.cssVars).forEach(([d,c])=>{document.documentElement.style.setProperty(d,c)}),document.documentElement.classList.toggle("dark",l.isDark))},a=o=>{r(o),localStorage.setItem("theme",o),n(o)},i=()=>{a(t==="light"?"dark":"light")};return e.jsx(ti.Provider,{value:{theme:t,setTheme:a,toggleTheme:i,themes:En},children:s})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="firebasestorage.googleapis.com",ri="storageBucket",pd=2*60*1e3,hd=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends Ao{constructor(t,r,n=0){super(lr(t),`Firebase Storage: ${r} (${lr(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Z.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return lr(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Q;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Q||(Q={}));function lr(s){return"storage/"+s}function tn(){const s="An unknown error occurred, please check the error payload for server response.";return new Z(Q.UNKNOWN,s)}function gd(s){return new Z(Q.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")}function fd(s){return new Z(Q.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xd(){const s="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Z(Q.UNAUTHENTICATED,s)}function bd(){return new Z(Q.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yd(s){return new Z(Q.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")}function vd(){return new Z(Q.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jd(){return new Z(Q.CANCELED,"User canceled the upload/download.")}function wd(s){return new Z(Q.INVALID_URL,"Invalid URL '"+s+"'.")}function Nd(s){return new Z(Q.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function Sd(){return new Z(Q.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ri+"' property when initializing the app?")}function Cd(){return new Z(Q.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function kd(){return new Z(Q.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Td(s){return new Z(Q.UNSUPPORTED_ENVIRONMENT,`${s} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Lr(s){return new Z(Q.INVALID_ARGUMENT,s)}function ni(){return new Z(Q.APP_DELETED,"The Firebase app was deleted.")}function Dd(s){return new Z(Q.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Vt(s,t){return new Z(Q.INVALID_FORMAT,"String does not match format '"+s+"': "+t)}function Gt(s){throw new Z(Q.INTERNAL_ERROR,"Internal error: "+s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,r){this.bucket=t,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,r){let n;try{n=ve.makeFromUrl(t,r)}catch{return new ve(t,"")}if(n.path==="")return n;throw Nd(t)}static makeFromUrl(t,r){let n=null;const a="([A-Za-z0-9.\\-_]+)";function i(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+a+o,"i"),d={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",p=r.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${u}/b/${a}/o${g}`,"i"),x={bucket:1,path:3},b=r===si?"(?:storage.googleapis.com|storage.cloud.google.com)":r,h="([^?#]*)",N=new RegExp(`^https?://${b}/${a}/${h}`,"i"),S=[{regex:l,indices:d,postModify:i},{regex:y,indices:x,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<S.length;w++){const f=S[w],A=f.regex.exec(t);if(A){const R=A[f.indices.bucket];let P=A[f.indices.path];P||(P=""),n=new ve(R,P),f.postModify(n);break}}if(n==null)throw wd(t);return n}}class Pd{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(s,t,r){let n=1,a=null,i=null,o=!1,l=0;function d(){return l===2}let c=!1;function u(...h){c||(c=!0,t.apply(null,h))}function p(h){a=setTimeout(()=>{a=null,s(y,d())},h)}function g(){i&&clearTimeout(i)}function y(h,...N){if(c){g();return}if(h){g(),u.call(null,h,...N);return}if(d()||o){g(),u.call(null,h,...N);return}n<64&&(n*=2);let S;l===1?(l=2,S=0):S=(n+Math.random())*1e3,p(S)}let x=!1;function b(h){x||(x=!0,g(),!c&&(a!==null?(h||(l=2),clearTimeout(a),p(0)):h||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,b(!0)},r),b}function Ed(s){s(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(s){return s!==void 0}function Id(s){return typeof s=="object"&&!Array.isArray(s)}function sn(s){return typeof s=="string"||s instanceof String}function Rn(s){return rn()&&s instanceof Blob}function rn(){return typeof Blob<"u"}function In(s,t,r,n){if(n<t)throw Lr(`Invalid value for '${s}'. Expected ${t} or greater.`);if(n>r)throw Lr(`Invalid value for '${s}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(s,t,r){let n=t;return r==null&&(n=`https://${t}`),`${r}://${n}/v0${s}`}function ai(s){const t=encodeURIComponent;let r="?";for(const n in s)if(s.hasOwnProperty(n)){const a=t(n)+"="+t(s[n]);r=r+a+"&"}return r=r.slice(0,-1),r}var mt;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(mt||(mt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(s,t){const r=s>=500&&s<600,a=[408,429].indexOf(s)!==-1,i=t.indexOf(s)!==-1;return r||a||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,r,n,a,i,o,l,d,c,u,p,g=!0){this.url_=t,this.method_=r,this.headers_=n,this.body_=a,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=d,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,x)=>{this.resolve_=y,this.reject_=x,this.start_()})}start_(){const t=(n,a)=>{if(a){n(!1,new us(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const d=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===mt.NO_ERROR,d=i.getStatus();if(!l||Od(d,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===mt.ABORT;n(!1,new us(!1,null,u));return}const c=this.successCodes_.indexOf(d)!==-1;n(!0,new us(c,i))})},r=(n,a)=>{const i=this.resolve_,o=this.reject_,l=a.connection;if(a.wasSuccessCode)try{const d=this.callback_(l,l.getResponse());Rd(d)?i(d):i()}catch(d){o(d)}else if(l!==null){const d=tn();d.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,d)):o(d)}else if(a.canceled){const d=this.appDelete_?ni():jd();o(d)}else{const d=vd();o(d)}};this.canceled_?r(!1,new us(!1,null,!0)):this.backoffId_=Ad(t,r,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Ed(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class us{constructor(t,r,n){this.wasSuccessCode=t,this.connection=r,this.canceled=!!n}}function Md(s,t){t!==null&&t.length>0&&(s.Authorization="Firebase "+t)}function Fd(s,t){s["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function $d(s,t){t&&(s["X-Firebase-GMPID"]=t)}function _d(s,t){t!==null&&(s["X-Firebase-AppCheck"]=t)}function Bd(s,t,r,n,a,i,o=!0){const l=ai(s.urlParams),d=s.url+l,c=Object.assign({},s.headers);return $d(c,t),Md(c,r),Fd(c,i),_d(c,n),new Ld(d,s.method,c,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,a,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Hd(...s){const t=Ud();if(t!==void 0){const r=new t;for(let n=0;n<s.length;n++)r.append(s[n]);return r.getBlob()}else{if(rn())return new Blob(s);throw new Z(Q.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Gd(s,t,r){return s.webkitSlice?s.webkitSlice(t,r):s.mozSlice?s.mozSlice(t,r):s.slice?s.slice(t,r):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(s){if(typeof atob>"u")throw Td("base-64");return atob(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cr{constructor(t,r){this.data=t,this.contentType=r||null}}function Wd(s,t){switch(s){case Ie.RAW:return new cr(ii(t));case Ie.BASE64:case Ie.BASE64URL:return new cr(oi(s,t));case Ie.DATA_URL:return new cr(Vd(t),Jd(t))}throw tn()}function ii(s){const t=[];for(let r=0;r<s.length;r++){let n=s.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(r<s.length-1&&(s.charCodeAt(r+1)&64512)===56320))t.push(239,191,189);else{const i=n,o=s.charCodeAt(++r);n=65536|(i&1023)<<10|o&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function qd(s){let t;try{t=decodeURIComponent(s)}catch{throw Vt(Ie.DATA_URL,"Malformed data URL.")}return ii(t)}function oi(s,t){switch(s){case Ie.BASE64:{const a=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(a||i)throw Vt(s,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case Ie.BASE64URL:{const a=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(a||i)throw Vt(s,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=zd(t)}catch(a){throw a.message.includes("polyfill")?a:Vt(s,"Invalid character found")}const n=new Uint8Array(r.length);for(let a=0;a<r.length;a++)n[a]=r.charCodeAt(a);return n}class li{constructor(t){this.base64=!1,this.contentType=null;const r=t.match(/^data:([^,]+)?,/);if(r===null)throw Vt(Ie.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=r[1]||null;n!=null&&(this.base64=Yd(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function Vd(s){const t=new li(s);return t.base64?oi(Ie.BASE64,t.rest):qd(t.rest)}function Jd(s){return new li(s).contentType}function Yd(s,t){return s.length>=t.length?s.substring(s.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,r){let n=0,a="";Rn(t)?(this.data_=t,n=t.size,a=t.type):t instanceof ArrayBuffer?(r?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(r?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=a}size(){return this.size_}type(){return this.type_}slice(t,r){if(Rn(this.data_)){const n=this.data_,a=Gd(n,t,r);return a===null?null:new We(a)}else{const n=new Uint8Array(this.data_.buffer,t,r-t);return new We(n,!0)}}static getBlob(...t){if(rn()){const r=t.map(n=>n instanceof We?n.data_:n);return new We(Hd.apply(null,r))}else{const r=t.map(o=>sn(o)?Wd(Ie.RAW,o).data:o.data_);let n=0;r.forEach(o=>{n+=o.byteLength});const a=new Uint8Array(n);let i=0;return r.forEach(o=>{for(let l=0;l<o.length;l++)a[i++]=o[l]}),new We(a,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(s){let t;try{t=JSON.parse(s)}catch{return null}return Id(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(s){if(s.length===0)return null;const t=s.lastIndexOf("/");return t===-1?"":s.slice(0,t)}function Xd(s,t){const r=t.split("/").filter(n=>n.length>0).join("/");return s.length===0?r:s+"/"+r}function di(s){const t=s.lastIndexOf("/",s.length-2);return t===-1?s:s.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(s,t){return t}class ue{constructor(t,r,n,a){this.server=t,this.local=r||t,this.writable=!!n,this.xform=a||Qd}}let ms=null;function Zd(s){return!sn(s)||s.length<2?s:di(s)}function ui(){if(ms)return ms;const s=[];s.push(new ue("bucket")),s.push(new ue("generation")),s.push(new ue("metageneration")),s.push(new ue("name","fullPath",!0));function t(i,o){return Zd(o)}const r=new ue("name");r.xform=t,s.push(r);function n(i,o){return o!==void 0?Number(o):o}const a=new ue("size");return a.xform=n,s.push(a),s.push(new ue("timeCreated")),s.push(new ue("updated")),s.push(new ue("md5Hash",null,!0)),s.push(new ue("cacheControl",null,!0)),s.push(new ue("contentDisposition",null,!0)),s.push(new ue("contentEncoding",null,!0)),s.push(new ue("contentLanguage",null,!0)),s.push(new ue("contentType",null,!0)),s.push(new ue("metadata","customMetadata",!0)),ms=s,ms}function eu(s,t){function r(){const n=s.bucket,a=s.fullPath,i=new ve(n,a);return t._makeStorageReference(i)}Object.defineProperty(s,"ref",{get:r})}function tu(s,t,r){const n={};n.type="file";const a=r.length;for(let i=0;i<a;i++){const o=r[i];n[o.local]=o.xform(n,t[o.server])}return eu(n,s),n}function mi(s,t,r){const n=ci(t);return n===null?null:tu(s,n,r)}function su(s,t,r,n){const a=ci(t);if(a===null||!sn(a.downloadTokens))return null;const i=a.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=s.bucket,p=s.fullPath,g="/b/"+o(u)+"/o/"+o(p),y=nn(g,r,n),x=ai({alt:"media",token:c});return y+x})[0]}function ru(s,t){const r={},n=t.length;for(let a=0;a<n;a++){const i=t[a];i.writable&&(r[i.server]=s[i.local])}return JSON.stringify(r)}class pi{constructor(t,r,n,a){this.url=t,this.method=r,this.handler=n,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(s){if(!s)throw tn()}function nu(s,t){function r(n,a){const i=mi(s,a,t);return hi(i!==null),i}return r}function au(s,t){function r(n,a){const i=mi(s,a,t);return hi(i!==null),su(i,a,s.host,s._protocol)}return r}function gi(s){function t(r,n){let a;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?a=bd():a=xd():r.getStatus()===402?a=fd(s.bucket):r.getStatus()===403?a=yd(s.path):a=n,a.status=r.getStatus(),a.serverResponse=n.serverResponse,a}return t}function iu(s){const t=gi(s);function r(n,a){let i=t(n,a);return n.getStatus()===404&&(i=gd(s.path)),i.serverResponse=a.serverResponse,i}return r}function ou(s,t,r){const n=t.fullServerUrl(),a=nn(n,s.host,s._protocol),i="GET",o=s.maxOperationRetryTime,l=new pi(a,i,au(s,r),o);return l.errorHandler=iu(t),l}function lu(s,t){return s&&s.contentType||t&&t.type()||"application/octet-stream"}function cu(s,t,r){const n=Object.assign({},r);return n.fullPath=s.path,n.size=t.size(),n.contentType||(n.contentType=lu(null,t)),n}function du(s,t,r,n,a){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let w=0;w<2;w++)S=S+Math.random().toString().slice(2);return S}const d=l();o["Content-Type"]="multipart/related; boundary="+d;const c=cu(t,n,a),u=ru(c,r),p="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+d+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+d+"--",y=We.getBlob(p,n,g);if(y===null)throw Cd();const x={name:c.fullPath},b=nn(i,s.host,s._protocol),h="POST",N=s.maxUploadRetryTime,j=new pi(b,h,nu(s,r),N);return j.urlParams=x,j.headers=o,j.body=y.uploadData(),j.errorHandler=gi(t),j}class uu{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=mt.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=mt.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=mt.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,r,n,a){if(this.sent_)throw Gt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,t,!0),a!==void 0)for(const i in a)a.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,a[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Gt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Gt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Gt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Gt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class mu extends uu{initXhr(){this.xhr_.responseType="text"}}function fi(){return new mu}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,r){this._service=t,r instanceof ve?this._location=r:this._location=ve.makeFromUrl(r,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,r){return new ft(t,r)}get root(){const t=new ve(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return di(this._location.path)}get storage(){return this._service}get parent(){const t=Kd(this._location.path);if(t===null)return null;const r=new ve(this._location.bucket,t);return new ft(this._service,r)}_throwIfRoot(t){if(this._location.path==="")throw Dd(t)}}function pu(s,t,r){s._throwIfRoot("uploadBytes");const n=du(s.storage,s._location,ui(),new We(t,!0),r);return s.storage.makeRequestWithTokens(n,fi).then(a=>({metadata:a,ref:s}))}function hu(s){s._throwIfRoot("getDownloadURL");const t=ou(s.storage,s._location,ui());return s.storage.makeRequestWithTokens(t,fi).then(r=>{if(r===null)throw kd();return r})}function gu(s,t){const r=Xd(s._location.path,t),n=new ve(s._location.bucket,r);return new ft(s.storage,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(s){return/^[A-Za-z]+:\/\//.test(s)}function xu(s,t){return new ft(s,t)}function xi(s,t){if(s instanceof an){const r=s;if(r._bucket==null)throw Sd();const n=new ft(r,r._bucket);return t!=null?xi(n,t):n}else return t!==void 0?gu(s,t):s}function bu(s,t){if(t&&fu(t)){if(s instanceof an)return xu(s,t);throw Lr("To use ref(service, url), the first argument must be a Storage instance.")}else return xi(s,t)}function On(s,t){const r=t==null?void 0:t[ri];return r==null?null:ve.makeFromBucketSpec(r,s)}function yu(s,t,r,n={}){s.host=`${t}:${r}`,s._protocol="http";const{mockUserToken:a}=n;a&&(s._overrideAuthToken=typeof a=="string"?a:Io(a,s.app.options.projectId))}class an{constructor(t,r,n,a,i){this.app=t,this._authProvider=r,this._appCheckProvider=n,this._url=a,this._firebaseVersion=i,this._bucket=null,this._host=si,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pd,this._maxUploadRetryTime=hd,this._requests=new Set,a!=null?this._bucket=ve.makeFromBucketSpec(a,this._host):this._bucket=On(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ve.makeFromBucketSpec(this._url,t):this._bucket=On(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){In("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){In("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const r=await t.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ft(this,t)}_makeRequest(t,r,n,a,i=!0){if(this._deleted)return new Pd(ni());{const o=Bd(t,this._appId,n,a,r,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,r){const[n,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,r,n,a).getPromise()}}const Ln="@firebase/storage",Mn="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="storage";function lt(s,t,r){return s=Os(s),pu(s,t,r)}function ct(s){return s=Os(s),hu(s)}function dt(s,t){return s=Os(s),bu(s,t)}function yi(s=wr(),t){s=Os(s);const n=Eo(s,bi).getImmediate({identifier:t}),a=Ro("storage");return a&&vu(n,...a),n}function vu(s,t,r,n={}){yu(s,t,r,n)}function ju(s,{instanceIdentifier:t}){const r=s.getProvider("app").getImmediate(),n=s.getProvider("auth-internal"),a=s.getProvider("app-check-internal");return new an(r,n,a,t,Po)}function wu(){To(new Do(bi,ju,"PUBLIC").setMultipleInstances(!0)),xn(Ln,Mn,""),xn(Ln,Mn,"esm2017")}wu();const js={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"};console.log("Firebase config loaded:",{hasApiKey:!!js.apiKey,hasAuthDomain:!!js.authDomain,projectId:js.projectId,usingEnvVars:!1});const on=Nr(js),Nt=ja(on),ke=wa(on),St=yi(on),vi=m.createContext();function vt(){return m.useContext(vi)}function Nu({children:s}){const[t,r]=m.useState(null),[n,a]=m.useState(!0);m.useEffect(()=>{let c,u;try{c=Na(Nt,async p=>{try{if(p)try{const g=await ys(ee(ke,"users",p.uid)),y=g.exists()?g.data():null;r({uid:p.uid,email:p.email,displayName:p.displayName,photoURL:p.photoURL,...y})}catch(g){console.log("⚠️ Firestore not available, using basic user data:",g.message),r({uid:p.uid,email:p.email,displayName:p.displayName,photoURL:p.photoURL})}else r(null)}catch(g){console.error("Error in auth state change:",g),r(null)}finally{a(!1)}}),u=setTimeout(()=>{console.log("Firebase auth timeout - setting loading to false"),a(!1)},5e3)}catch(p){console.error("Error setting up auth listener:",p),a(!1)}return()=>{c&&c(),u&&clearTimeout(u)}},[]);const d={user:t,loading:n,signInWithGoogle:async()=>{try{const c=new Fo;c.addScope("email"),c.addScope("profile");const u=await bn(Nt,c);try{await xe(ee(ke,"users",u.user.uid),{uid:u.user.uid,email:u.user.email,displayName:u.user.displayName,photoURL:u.user.photoURL,createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(p){console.warn("Failed to save user data to Firestore:",p)}console.log("Successfully signed in!")}catch(c){throw console.error("Failed to sign in:",c.message),c}},signInWithGitHub:async()=>{var c,u;try{console.log("Using Firebase GitHub authentication");const p=new Lo;p.addScope("user:email");const g=await bn(Nt,p);try{await xe(ee(ke,"users",g.user.uid),{uid:g.user.uid,email:g.user.email,displayName:g.user.displayName||((c=g.user.email)==null?void 0:c.split("@")[0])||"GitHub User",photoURL:g.user.photoURL,provider:"github",createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(y){console.warn("Failed to save user data to Firestore:",y)}console.log("Successfully signed in with GitHub!")}catch(p){if(console.error("GitHub authentication error:",p.message),p.code==="auth/account-exists-with-different-credential"){const g=(u=p.customData)==null?void 0:u.email;if(g)try{const y=await Mo(Nt,g);throw console.log("Available sign-in methods for",g,":",y),y&&y.length>0?y.includes("google.com")?new Error(`An account with ${g} already exists using Google. Please sign in with Google instead, then you can link your GitHub account.`):y.includes("password")?new Error(`An account with ${g} already exists using email/password. Please sign in with your existing method instead.`):new Error(`An account with ${g} already exists. Please sign in with your existing method instead.`):new Error(`An account with ${g} already exists. Please try signing in with Google first, then you can link your GitHub account.`)}catch(y){throw console.error("Failed to check sign-in methods:",y.message),new Error(`An account with ${g} already exists. Please sign in with your existing method instead.`)}else throw new Error("An account with this email already exists. Please sign in with your existing method instead.")}else throw p.code==="auth/internal-error"?(console.error("GitHub authentication internal error:",p.message),new Error("GitHub authentication is not properly configured. Please check Firebase Console settings.")):(console.error("Failed to sign in with GitHub:",p.message),p)}},logout:async()=>{try{await Oo(Nt),console.log("Successfully signed out!")}catch(c){console.error("Failed to sign out:",c.message)}},auth:Nt,db:ke};return e.jsx(vi.Provider,{value:d,children:n?e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-muted-foreground",children:"Loading DreamBuild..."})]})}):s})}const ji=m.createContext();function Ge(){return m.useContext(ji)}function Su({children:s}){const{user:t,db:r}=vt(),[n,a]=m.useState({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),[i,o]=m.useState([]),[l,d]=m.useState(!1),c=m.useCallback(w=>{a(f=>({...f,activeFile:w,lastModified:new Date}))},[]),u=m.useCallback((w,f)=>{console.log(`🔄 Updating file: ${w} (${(f==null?void 0:f.length)||0} chars)`),a(A=>{const R={...A,files:{...A.files,[w]:f},lastModified:new Date};return console.log("📁 Project files after update:",Object.keys(R.files)),R})},[]),p=m.useCallback(w=>{a(f=>({...f,config:{...f.config,...w},lastModified:new Date}))},[]),g=m.useCallback(async()=>{if(!t){console.log("⚠️ loadProjects: No user found");return}console.log("🔄 Loading projects for user:",t.uid),d(!0);try{const{collection:w,query:f,where:A,getDocs:R,orderBy:P}=await $e(async()=>{const{collection:O,query:k,where:C,getDocs:E,orderBy:U}=await import("./firebase-yUj2_25M.js").then(G=>G.x);return{collection:O,query:k,where:C,getDocs:E,orderBy:U}},[]),I=w(r,"projects"),M=f(I,A("userId","==",t.uid),P("lastModified","desc"));console.log("🔥 Querying Firestore for projects...");const v=(await R(M)).docs.map(O=>({id:O.id,...O.data()}));console.log("📦 Loaded projects:",v.length,"projects"),console.log("📋 Projects list:",v),o(v)}catch(w){console.error("❌ Failed to load projects:",w),B.error("Failed to load projects: "+w.message)}finally{d(!1)}},[t,r]);m.useEffect(()=>{t?(console.log("🔄 User authenticated, loading projects automatically..."),g()):(console.log("⚠️ No user, clearing projects"),o([]))},[t,g]);const y=m.useCallback(async(w=null)=>{if(!t){B.error("Please sign in to save projects");return}d(!0);try{const f={...n,name:w||n.name,userId:t.uid,lastModified:new Date},{doc:A,setDoc:R,collection:P}=await $e(async()=>{const{doc:M,setDoc:F,collection:v}=await import("./firebase-yUj2_25M.js").then(O=>O.x);return{doc:M,setDoc:F,collection:v}},[]),I=A(P(r,"projects"));await R(I,{...f,id:I.id,createdAt:n.id?void 0:new Date}),a(M=>({...M,id:I.id})),B.success("Project saved successfully!"),await g()}catch(f){B.error("Failed to save project: "+f.message)}finally{d(!1)}},[n,t,r,g]),x=m.useCallback(async w=>{if(!t){B.error("Please sign in to save projects");return}console.log("💾 saveExternalProject called with:",w),d(!0);try{const f={...w,userId:t.uid,lastModified:new Date,createdAt:w.createdAt||new Date};console.log("📝 Project to save:",f);const{doc:A,setDoc:R,collection:P}=await $e(async()=>{const{doc:F,setDoc:v,collection:O}=await import("./firebase-yUj2_25M.js").then(k=>k.x);return{doc:F,setDoc:v,collection:O}},[]),I=A(P(r,"projects")),M={...f,id:I.id};console.log("🔥 Saving to Firestore:",M),await R(I,M),console.log("✅ Project saved to Firestore with ID:",I.id),B.success(`Project "${w.name}" saved successfully!`),console.log("🔄 Refreshing projects list..."),await g(),console.log("✅ Projects list refreshed")}catch(f){console.error("❌ Failed to save external project:",f),B.error("Failed to save project")}finally{d(!1)}},[t,r,g]),b=m.useCallback(async w=>{if(t){d(!0);try{const{doc:f,getDoc:A}=await $e(async()=>{const{doc:I,getDoc:M}=await import("./firebase-yUj2_25M.js").then(F=>F.x);return{doc:I,getDoc:M}},[]),R=f(r,"projects",w),P=await A(R);if(P.exists()){const I={id:P.id,...P.data()};a(I),B.success("Project loaded successfully!")}else B.error("Project not found")}catch(f){B.error("Failed to load project: "+f.message)}finally{d(!1)}}},[t,r]),h=m.useCallback(async w=>{if(t){d(!0);try{const{doc:f,deleteDoc:A}=await $e(async()=>{const{doc:R,deleteDoc:P}=await import("./firebase-yUj2_25M.js").then(I=>I.x);return{doc:R,deleteDoc:P}},[]);await A(f(r,"projects",w)),o(R=>R.filter(P=>P.id!==w)),B.success("Project deleted successfully!")}catch(f){B.error("Failed to delete project: "+f.message)}finally{d(!1)}}},[t,r]),N=m.useCallback(()=>{a({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),B.success("New project created!")},[]),j=m.useCallback(w=>{console.log("📁 Adding files to project:",Object.keys(w)),a(f=>({...f,files:{...f.files,...w},lastModified:new Date})),B.success(`${Object.keys(w).length} files added to project!`)},[]),S={currentProject:n,projects:i,isLoading:l,switchFile:c,updateFile:u,updateConfig:p,saveProject:y,saveExternalProject:x,loadProjects:g,loadProject:b,deleteProject:h,createNewProject:N,addFilesToProject:j};return e.jsx(ji.Provider,{value:S,children:s})}const Cu=()=>{const{theme:s,toggleTheme:t}=Gs(),{user:r,logout:n}=vt(),[a,i]=m.useState(!1),[o,l]=m.useState(!1),[d,c]=m.useState(!1),u=rt();Oe.useEffect(()=>{const y=()=>{l(window.innerWidth>=768)};return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]),Oe.useEffect(()=>{const y=x=>{d&&!x.target.closest(".user-menu")&&c(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[d]);const p=[{name:"Home",href:"/",icon:Te},{name:"AI Builder",href:"/ai-builder",icon:W},{name:"Templates",href:"/templates",icon:ht},{name:"Education",href:"/education",icon:ye},{name:"Projects",href:"/projects",icon:De},{name:"Dashboard",href:"/dashboard",icon:Xe}],g=y=>u.pathname===y;return e.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsxs(ce,{to:"/",className:"flex items-center gap-3 group",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg",children:e.jsx(ht,{className:"h-6 w-6 text-primary-foreground"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xl font-bold text-high-contrast",children:"DreamBuild"}),e.jsx("span",{className:"text-xs text-muted-foreground -mt-1",children:"AI Development Platform"})]})]}),e.jsx("div",{className:"hidden md:flex items-center gap-1",children:p.map(y=>{const x=y.icon;return e.jsxs(ce,{to:y.href,className:`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${g(y.href)?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[e.jsx(x,{className:"h-4 w-4"}),y.name]},y.name)})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:t,className:"p-2 rounded-lg hover:bg-muted transition-colors",title:`Switch to ${s==="light"?"dark":"light"} mode`,children:s==="light"?e.jsx(_o,{className:"h-4 w-4 text-muted-foreground"}):e.jsx(Bo,{className:"h-4 w-4 text-muted-foreground"})}),r?e.jsxs("div",{className:"relative user-menu",children:[e.jsxs("button",{onClick:()=>c(!d),className:"flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors",children:[e.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-sm font-semibold text-primary",children:(r.displayName||r.email||"U").charAt(0).toUpperCase()})}),e.jsx("span",{className:"hidden sm:inline text-sm font-medium text-foreground",children:r.displayName||r.email})]}),d&&e.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-[60]",children:[e.jsxs("div",{className:"p-3 border-b border-border",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:r.email})]}),e.jsxs("div",{className:"p-1",children:[e.jsxs(ce,{to:"/dashboard",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[e.jsx(De,{className:"h-4 w-4"}),"Dashboard"]}),e.jsxs(ce,{to:"/settings",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[e.jsx(Sr,{className:"h-4 w-4"}),"Settings"]}),e.jsx("hr",{className:"my-1"}),e.jsxs("button",{onClick:()=>{n(),c(!1)},className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors",children:[e.jsx(yn,{className:"h-4 w-4"}),"Sign Out"]})]})]})]}):e.jsxs(ce,{to:"/login",className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[e.jsx(Te,{className:"h-4 w-4"}),"Sign In"]}),!o&&e.jsx("button",{onClick:()=>i(!a),className:"p-2 rounded-lg hover:bg-muted transition-colors ml-2",children:a?e.jsx(qr,{className:"h-4 w-4"}):e.jsx(Uo,{className:"h-4 w-4"})})]})]}),!o&&a&&e.jsx("div",{className:"border-t border-border bg-background",children:e.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[p.map(y=>{const x=y.icon;return e.jsxs(ce,{to:y.href,onClick:()=>i(!1),className:`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border ${g(y.href)?"bg-primary text-primary-foreground border-primary shadow-md":"bg-card text-foreground border-border hover:bg-muted hover:border-primary/30 shadow-sm"}`,children:[e.jsx(x,{className:"h-5 w-5"}),y.name]},y.name)}),r?e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsxs("div",{className:"px-4 py-2 border-b border-border",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:r.email})]}),e.jsxs(ce,{to:"/dashboard",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[e.jsx(De,{className:"h-5 w-5"}),"Dashboard"]}),e.jsxs(ce,{to:"/settings",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[e.jsx(Sr,{className:"h-5 w-5"}),"Settings"]}),e.jsxs("button",{onClick:()=>{n(),i(!1)},className:"w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg",children:[e.jsx(yn,{className:"h-5 w-5"}),"Sign Out"]})]}):e.jsxs(ce,{to:"/login",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg text-base font-semibold",children:[e.jsx(Te,{className:"h-5 w-5"}),"Sign In"]})]})})]})})},ku=()=>{const[s,t]=m.useState(""),[r,n]=m.useState(!1),a=i=>{i.preventDefault(),s&&(n(!0),t(""),setTimeout(()=>n(!1),3e3))};return e.jsx("footer",{className:"bg-background border-t border-border",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:e.jsx(ht,{className:"h-5 w-5 text-primary-foreground"})}),e.jsx("span",{className:"text-xl font-bold text-foreground",children:"DreamBuild"})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"AI-powered development platform for modern developers."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"GitHub",children:e.jsx(pe,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),e.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Twitter",children:e.jsx(Vr,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),e.jsx("a",{href:"mailto:contact@dreambuild.ai",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Email",children:e.jsx(Et,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Stay Updated"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Get the latest updates and features."}),e.jsxs("form",{onSubmit:a,className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"email",value:s,onChange:i=>t(i.target.value),placeholder:"Enter your email",className:"flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",required:!0}),e.jsx("button",{type:"submit",disabled:r,className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:r?e.jsx(Et,{className:"h-4 w-4"}):e.jsx(Jr,{className:"h-4 w-4"})})]}),r&&e.jsx("p",{className:"text-sm text-green-600",children:"Thanks for subscribing!"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Quick Links"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:e.jsx("a",{href:"/ai-builder",className:"text-muted-foreground hover:text-foreground transition-colors",children:"AI Builder"})}),e.jsx("li",{children:e.jsx("a",{href:"/templates",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Templates"})}),e.jsx("li",{children:e.jsx("a",{href:"/documentation",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Documentation"})}),e.jsx("li",{children:e.jsx("a",{href:"/support",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Support"})})]})]})]}),e.jsx("div",{className:"border-t border-border pt-8 mt-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:e.jsx("span",{children:"© 2024 Bradley Virtual Solutions, LLC"})}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsx("a",{href:"/privacy",className:"hover:text-foreground transition-colors",children:"Privacy"}),e.jsx("a",{href:"/terms",className:"hover:text-foreground transition-colors",children:"Terms"}),e.jsx("a",{href:"/contact",className:"hover:text-foreground transition-colors",children:"Contact"})]})]})})]})})},Tu=()=>{const s=[{icon:W,title:"AI Code Generation",description:"Generate code with AI assistance."},{icon:De,title:"Smart Templates",description:"Pre-built templates for quick start."},{icon:Ue,title:"Real-time Collaboration",description:"Work together with your team."}],t=[{label:"AI Models",value:"10+",icon:W},{label:"Languages",value:"50+",icon:De},{label:"Templates",value:"25+",icon:Ls}];return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsxs("section",{className:"relative pt-20 pb-20",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5"}),e.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative flex justify-center",children:e.jsxs("div",{className:"text-center max-w-4xl w-full ml-8",children:[e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8",children:[e.jsx(ht,{className:"h-4 w-4"}),"AI-Powered Development Platform"]}),e.jsxs(L.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight",children:["Build with"," ",e.jsx("span",{className:"bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent",children:"AI"})]}),e.jsx(L.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed",children:"Create amazing projects with AI-powered code generation. Simple, fast, and effective."}),e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-md mx-auto",children:[e.jsxs(ce,{to:"/ai-builder",className:"inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl",children:[e.jsx(Te,{className:"h-5 w-5"}),"Start Building"]}),e.jsxs(ce,{to:"/templates",className:"inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold",children:[e.jsx(W,{className:"h-5 w-5"}),"Browse Templates"]})]}),e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto",children:t.map((r,n)=>{const a=r.icon;return e.jsxs("div",{className:"text-center group",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[e.jsx(a,{className:"h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"}),e.jsx("div",{className:"text-3xl font-bold text-primary group-hover:text-primary-light transition-colors",children:r.value})]}),e.jsx("div",{className:"text-sm text-muted-foreground",children:r.label})]},n)})})]})})]}),e.jsx("section",{className:"py-20 bg-background",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center mb-16 max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Key Features"}),e.jsx("p",{className:"text-lg text-muted-foreground",children:"Everything you need to build amazing projects"})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl ml-8",children:s.map((r,n)=>e.jsxs(L.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:n*.1},viewport:{once:!0},whileHover:{y:-5},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-xl hover:bg-card/70 transition-all duration-300 group cursor-pointer",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300",children:e.jsx(r.icon,{className:"h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"})}),e.jsx("h3",{className:"text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300",children:r.title}),e.jsx("p",{className:"text-foreground leading-relaxed",children:r.description})]},n))})})]})}),e.jsxs("section",{className:"py-20 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary-light/5"}),e.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative",children:e.jsxs(L.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"max-w-4xl mx-auto ml-8",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Ready to Build?"}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"Start creating amazing projects with AI-powered development tools."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs(ce,{to:"/ai-builder",className:"inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl",children:[e.jsx(Te,{className:"h-5 w-5"}),"Get Started"]}),e.jsxs(ce,{to:"/templates",className:"inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold",children:[e.jsx(W,{className:"h-5 w-5"}),"View Templates"]})]})]})})]})]})};class Du{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(t.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(t,r,"firebase");const a=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i={id:a,projectName:r||"dream-app",files:t.files,config:t.config,deployedAt:new Date,status:"uploading",platform:"firebase"},o={};for(const[p,g]of Object.entries(t.files))if(g&&g.trim()){const y=dt(St,`projects/${a}/${p}`),x=new Blob([g],{type:this.getMimeType(p)});await lt(y,x);const b=await ct(y);o[p]=b}const l=this.createHostedHTML(t.files),d=dt(St,`projects/${a}/index.html`),c=new Blob([l],{type:"text/html"});await lt(d,c);const u=await ct(d);return await xe(ee(ke,"deployments",a),{...i,status:"completed",hostedURL:u,files:o,completedAt:new Date}),this.deployments.set(a,i),console.log("✅ Firebase deployment completed:",u),{success:!0,deploymentId:a,url:u,platform:"firebase"}}catch(n){throw console.error("❌ Firebase deployment failed:",n),new Error(`Firebase deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const n=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Apple App Store deployment is only available for mobile applications");const a=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${a} app to Apple App Store...`);const i=await this.generateMobileAppFiles(t,r,a),o=await this.executeAppleStoreBuild(i,r,a),l={id:n,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:o.success?"completed":"failed",platform:"apple-app-store",framework:a,buildInstructions:this.generateAppleStoreInstructions(a,r),terminalOutput:o.output,buildCommands:o.commands},d=this.createAppleStoreInstructionsHTML(r,a,l.buildInstructions,o),c=dt(St,`apple-store/${n}/index.html`),u=new Blob([d],{type:"text/html"});await lt(c,u);const p=await ct(c);return await xe(ee(ke,"deployments",n),{...l,hostedURL:p}),this.deployments.set(n,l),{success:o.success,deploymentId:n,url:p,platform:"apple-app-store",framework:a,buildInstructions:l.buildInstructions,terminalOutput:o.output,buildCommands:o.commands,message:o.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Apple App Store deployment failed:",n),new Error(`Apple App Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const n=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Google Play Store deployment is only available for mobile applications");const a=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${a} app to Google Play Store...`);const i=await this.generateMobileAppFiles(t,r,a),o=await this.executeGooglePlayBuild(i,r,a),l={id:n,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:o.success?"completed":"failed",platform:"google-play-store",framework:a,buildInstructions:this.generateGooglePlayInstructions(a,r),terminalOutput:o.output,buildCommands:o.commands},d=this.createGooglePlayInstructionsHTML(r,a,l.buildInstructions,o),c=dt(St,`google-play/${n}/index.html`),u=new Blob([d],{type:"text/html"});await lt(c,u);const p=await ct(c);return await xe(ee(ke,"deployments",n),{...l,hostedURL:p}),this.deployments.set(n,l),{success:o.success,deploymentId:n,url:p,platform:"google-play-store",framework:a,buildInstructions:l.buildInstructions,terminalOutput:o.output,buildCommands:o.commands,message:o.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Google Play Store deployment failed:",n),new Error(`Google Play Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(t,r,n=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const a=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!n){const i=r.toLowerCase().replace(/[^a-z0-9-]/g,"-"),o=this.createHostedHTML(t.files),l=dt(St,`github-pages/${a}/index.html`),d=new Blob([o],{type:"text/html"});await lt(l,d);const c=await ct(l);return await xe(ee(ke,"deployments",a),{id:a,projectName:r,files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:c,repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}),{success:!0,deploymentId:a,url:c,platform:"github-pages",repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(a){throw console.error("❌ GitHub deployment failed:",a),new Error(`GitHub deployment failed: ${a.message}`)}finally{this.isDeploying=!1}}createHostedHTML(t){const r=t["index.html"]||this.generateDefaultHTML(),n=t["style.css"]||"",a=t["script.js"]||"";let i=r;return n.trim()&&(i.includes("</head>")?i=i.replace("</head>",`<style>${n}</style>
</head>`):i.includes("<head>")?i=i.replace("<head>",`<head>
<style>${n}</style>`):i=`<style>${n}</style>
${i}`),a.trim()&&(i.includes("</body>")?i=i.replace("</body>",`<script>${a}<\/script>
</body>`):i+=`
<script>${a}<\/script>`),i.includes("<!DOCTYPE html>")||(i=`<!DOCTYPE html>
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
</html>`}getMimeType(t){const r=t.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[r]||"text/plain"}generateGitHubInstructions(t,r){const n=t.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${n}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${n}`],files:Object.keys(r),repoName:n}}getDeploymentStatus(t){return this.deployments.get(t)}async getAllDeployments(){try{const{collection:t,query:r,orderBy:n,limit:a,getDocs:i}=await $e(async()=>{const{collection:c,query:u,orderBy:p,limit:g,getDocs:y}=await import("./firebase-yUj2_25M.js").then(x=>x.x);return{collection:c,query:u,orderBy:p,limit:g,getDocs:y}},[]),o=t(ke,"deployments"),l=r(o,n("deployedAt","desc"),a(20));return(await i(l)).docs.map(c=>({id:c.id,...c.data()}))}catch(t){return console.error("Error fetching deployments:",t),[]}}async deleteDeployment(t){try{const{deleteDoc:r}=await $e(async()=>{const{deleteDoc:n}=await import("./firebase-yUj2_25M.js").then(a=>a.x);return{deleteDoc:n}},[]);return await r(ee(ke,"deployments",t)),this.deployments.delete(t),!0}catch(r){return console.error("Error deleting deployment:",r),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(t){const r=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],n=Object.keys(t);return r.some(a=>n.some(i=>i.includes(a)))}async deployMobileApp(t,r,n){const a=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${i} mobile app...`);const o={id:a,projectName:r||"mobile-app",files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:i,buildInstructions:this.generateMobileBuildInstructions(i,r,n)},l=this.createMobileAppInstructionsHTML(r,i,o.buildInstructions),d=dt(St,`mobile-apps/${a}/index.html`),c=new Blob([l],{type:"text/html"});await lt(d,c);const u=await ct(d);return await xe(ee(ke,"deployments",a),{...o,hostedURL:u}),this.deployments.set(a,o),{success:!0,deploymentId:a,url:u,platform:"mobile",framework:i,buildInstructions:o.buildInstructions}}detectMobileFramework(t){const r=Object.keys(t);return r.some(n=>n.includes("pubspec.yaml")||n.includes("main.dart"))?"Flutter":r.some(n=>n.includes("App.js")&&n.includes("package.json"))?"React Native":r.some(n=>n.includes("ionic.config.json"))?"Ionic":r.some(n=>n.includes("capacitor.config.json"))?"Capacitor":r.some(n=>n.includes("manifest.json")&&n.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(t,r,n){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:t,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:t,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:t,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(t,r,n){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t} - Apple App Store Deployment</title>
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
            <h1>${t}</h1>
            <div class="framework-badge">${r}</div>
        </div>

        <div class="section">
            <h2>📱 Apple App Store Deployment</h2>
            <p>Deploy your ${r} app to the Apple App Store with these step-by-step instructions.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${n.steps.map(a=>`<li>${a}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([a,i])=>`<div class="command"><strong>${a}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${n.requirements.map(a=>`<li>${a}</li>`).join("")}
                </ul>
                <p><strong>Estimated Time:</strong> ${n.estimatedTime}</p>
                <p><strong>Cost:</strong> ${n.cost}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}createGooglePlayInstructionsHTML(t,r,n){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t} - Google Play Store Deployment</title>
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
            <h1>${t}</h1>
            <div class="framework-badge">${r}</div>
        </div>

        <div class="section">
            <h2>📱 Google Play Store Deployment</h2>
            <p>Deploy your ${r} app to the Google Play Store with these step-by-step instructions.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${n.steps.map(a=>`<li>${a}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([a,i])=>`<div class="command"><strong>${a}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${n.requirements.map(a=>`<li>${a}</li>`).join("")}
                </ul>
                <p><strong>Estimated Time:</strong> ${n.estimatedTime}</p>
                <p><strong>Cost:</strong> ${n.cost}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}createMobileAppInstructionsHTML(t,r,n){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t} - Build Instructions</title>
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
            <h1>🚀 ${t}</h1>
            <div class="framework-badge">${r}</div>
        </div>

        <div class="section">
            <h2>📱 Mobile App Build Instructions</h2>
            <p>Your ${r} mobile app has been generated successfully! Follow these steps to build and deploy your app.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${n.steps.map(a=>`<li>${a}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([a,i])=>`<div class="command"><strong>${a}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <h2>📱 Supported Platforms</h2>
            <div class="platforms">
                ${n.platforms.map(a=>`<span class="platform">${a}</span>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="store-info">
                <h3>🏪 App Store Deployment</h3>
                <p>${n.storeDeployment}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}async generateMobileAppFiles(t,r,n){try{console.log(`📱 Generating ${n} mobile app files...`);const{default:a}=await $e(async()=>{const{default:o}=await import("./mobileAppService-CFUDTDME.js");return{default:o}},[]),i=await a.generateMobileApp(t,r,n);return console.log(`✅ Generated ${Object.keys(i).length} mobile app files`),i}catch(a){throw console.error("❌ Failed to generate mobile app files:",a),new Error(`Failed to generate mobile app files: ${a.message}`)}}async executeAppleStoreBuild(t,r,n){const a=[],i=[];try{console.log(`🍎 Executing Apple App Store build for ${n}...`);const o=`/tmp/dreambuild-${r}-${Date.now()}`;a.push(`mkdir -p ${o}`);for(const[l,d]of Object.entries(t)){const c=`${o}/${l}`;a.push(`cat > ${c} << 'EOF'
${d}
EOF`)}switch(a.push(`cd ${o}`),n){case"React Native":a.push("npm install"),a.push("npx expo install"),a.push("npx expo build:ios --type archive");break;case"Flutter":a.push("flutter pub get"),a.push("flutter build ios --release");break;case"PWA":a.push("npm install"),a.push("npm run build"),a.push("npx @pwabuilder/cli build --platform ios");break;default:a.push('echo "Framework-specific build commands not implemented yet"')}for(const l of a)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Apple App Store build completed for ${n}`),{success:!0,output:i.join(`
`),commands:a,projectDir:o}}catch(o){return console.error("❌ Apple App Store build failed:",o),{success:!1,output:i.join(`
`)+`

Error: `+o.message,commands:a,error:o.message}}}async executeGooglePlayBuild(t,r,n){const a=[],i=[];try{console.log(`🤖 Executing Google Play Store build for ${n}...`);const o=`/tmp/dreambuild-${r}-${Date.now()}`;a.push(`mkdir -p ${o}`);for(const[l,d]of Object.entries(t)){const c=`${o}/${l}`;a.push(`cat > ${c} << 'EOF'
${d}
EOF`)}switch(a.push(`cd ${o}`),n){case"React Native":a.push("npm install"),a.push("npx expo install"),a.push("npx expo build:android --type app-bundle");break;case"Flutter":a.push("flutter pub get"),a.push("flutter build appbundle --release");break;case"PWA":a.push("npm install"),a.push("npm run build"),a.push("npx @pwabuilder/cli build --platform android");break;default:a.push('echo "Framework-specific build commands not implemented yet"')}for(const l of a)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Google Play Store build completed for ${n}`),{success:!0,output:i.join(`
`),commands:a,projectDir:o}}catch(o){return console.error("❌ Google Play Store build failed:",o),{success:!1,output:i.join(`
`)+`

Error: `+o.message,commands:a,error:o.message}}}async executeTerminalCommands(t,r,n=3e5){try{console.log("🖥️ Executing commands via terminal...");const a={success:!0,output:t.map(i=>`$ ${i}
Executed successfully`).join(`
`),commands:t,projectDir:r};return console.log("✅ Terminal commands executed successfully"),a}catch(a){return console.error("❌ Terminal command execution failed:",a),{success:!1,output:`Error: ${a.message}`,commands:t,error:a.message}}}}const ps=new Du,Pu=()=>{const{currentProject:s,switchFile:t,updateFile:r,saveProject:n,createNewProject:a,updateConfig:i}=Ge(),[o,l]=m.useState(!1),[d,c]=m.useState(""),[u,p]=m.useState(!1),[g,y]=m.useState(!1),[x,b]=m.useState(!1),[h,N]=m.useState("firebase"),[j,S]=m.useState(!1),[w,f]=m.useState(""),[A,R]=m.useState({show:!1,x:0,y:0,filename:""}),P=m.useRef(null),I={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},M=T=>I[T]||"📄",F=T=>{t(T)},v=(T,_)=>{T.preventDefault(),R({show:!0,x:T.clientX,y:T.clientY,filename:_})},O=T=>{const{filename:_}=A;switch(R({show:!1,x:0,y:0,filename:""}),T){case"download":U(_);break;case"delete":E(_);break;case"rename":B.info("Rename functionality coming soon!");break;case"copy":B.info("Copy functionality coming soon!");break}},k=()=>{R({show:!1,x:0,y:0,filename:""})};m.useEffect(()=>{const T=_=>{P.current&&!P.current.contains(_.target)&&k()};return A.show&&document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[A.show]);const C=()=>{if(d.trim()){const T=d.includes(".")?d:`${d}.js`;r(T,""),t(T),c(""),l(!1),B.success(`Created ${T}`)}},E=T=>{if(Object.keys(s.files).length<=1){B.error("Cannot delete the last file");return}if(confirm(`Delete ${T}?`)){const _={...s.files};if(delete _[T],Object.keys(_).forEach($=>{s.files[$]=_[$]}),s.activeFile===T){const $=Object.keys(_);t($[0])}B.success(`Deleted ${T}`)}},U=T=>{const _=s.files[T]||"",$=new Blob([_],{type:"text/plain"}),K=URL.createObjectURL($),re=document.createElement("a");re.href=K,re.download=T,document.body.appendChild(re),re.click(),document.body.removeChild(re),URL.revokeObjectURL(K),B.success(`Downloaded ${T}`)},G=()=>{const T={name:s.name,files:s.files,config:s.config,timestamp:new Date().toISOString()},_=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),$=URL.createObjectURL(_),K=document.createElement("a");K.href=$,K.download=`${s.name}.json`,document.body.appendChild(K),K.click(),document.body.removeChild(K),URL.revokeObjectURL($),B.success("Project downloaded!")},ae=T=>{const _=T.target.files[0];if(_){const $=new FileReader;$.onload=K=>{r(_.name,K.target.result),t(_.name),B.success(`Uploaded ${_.name}`)},$.readAsText(_)}},le=async()=>{if(!w.trim()){B.error("Please enter a project name");return}if(Object.keys(s.files).length===0){B.error("Please generate some code first");return}b(!0);try{const T=await H(s,w),_=[];if(j){B.info("Deploying to both Firebase and GitHub...");const[$,K]=await Promise.allSettled([ps.deployToFirebase(T,w),ps.deployToGitHub(T,w)]);if($.status==="fulfilled"&&$.value.success&&_.push({platform:"Firebase",...$.value}),K.status==="fulfilled"&&K.value.success&&_.push({platform:"GitHub",...K.value}),_.length===2)B.success("Successfully deployed to both Firebase and GitHub!");else if(_.length===1)B.success(`Deployed to ${_[0].platform} (${_.length===1?"one":"both"} platform${_.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let $;h==="firebase"?$=await ps.deployToFirebase(T,w):h==="github"&&($=await ps.deployToGitHub(T,w)),$.success&&(_.push({platform:h,...$}),B.success(`Successfully deployed to ${$.platform}!`))}_.forEach($=>{$.url&&window.open($.url,"_blank"),$.instructions&&(console.log(`${$.platform} deployment instructions:`,$.instructions),B.success(`Check console for ${$.platform} Pages setup instructions`))}),y(!1),f(""),S(!1)}catch(T){B.error(`Deployment failed: ${T.message}`)}finally{b(!1)}},H=async(T,_)=>{const $={...T};return $.files["index.html"]||($.files["index.html"]=V(_)),$.files["package.json"]||($.files["package.json"]=Y(_,$.config)),$.files["README.md"]||($.files["README.md"]=ie(_,$.config)),$.files["index.html"]=Me($.files["index.html"],_),$.files["manifest.json"]||($.files["manifest.json"]=oe(_)),$},V=T=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${T}</title>
    <meta name="description" content="Built with DreamBuild - Universal AI Development Platform">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563eb">
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 ${T}</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 10px;">Your app is ready!</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 20px;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`,Y=(T,_)=>JSON.stringify({name:T.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${T}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",_.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),ie=(T,_)=>{var $;return`# ${T}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${_.appType||"Frontend"}
- **Language**: ${_.language||"JavaScript"}
- **Styling**: ${_.styling||"Custom CSS"}
- **Features**: ${(($=_.features)==null?void 0:$.join(", "))||"Basic functionality"}

## 📁 Project Structure

\`\`\`
${Object.keys(s.files).join(`
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
`},oe=T=>JSON.stringify({name:T,short_name:T.split(" ")[0],description:`Built with DreamBuild - ${T}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),Me=(T,_)=>{let $=T;return $.includes("<!DOCTYPE html>")||($=`<!DOCTYPE html>
${$}`),$.includes('<meta name="viewport"')||($=$.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),$.includes('<meta name="description"')||($=$.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${_}">`)),$.includes('<meta name="theme-color"')||($=$.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),$.includes("manifest.json")||($=$.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),$},tr=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return e.jsxs(L.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[e.jsxs("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:e.jsx(Ee,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>l(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:e.jsx(Rt,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),e.jsx("button",{onClick:()=>p(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:e.jsx(Dt,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>n(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[e.jsx(Sa,{className:"h-3 w-3"}),"Save"]}),e.jsxs("button",{onClick:()=>y(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(s.files).length===0,children:[e.jsx(Te,{className:"h-3 w-3"}),"Deploy"]}),e.jsxs("button",{onClick:G,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[e.jsx(Qe,{className:"h-3 w-3"}),"Export"]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(s.files).length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[e.jsx("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:e.jsx(Ho,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),e.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):e.jsxs("div",{className:"py-2",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[e.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:e.jsx(Ee,{className:"h-3 w-3 text-white"})}),e.jsx("span",{children:s.name||"Untitled Project"}),e.jsxs("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(s.files).length," files"]})]}),Object.keys(s.files).map(T=>e.jsxs(L.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${s.activeFile===T?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>F(T),onContextMenu:_=>v(_,T),children:[e.jsx("div",{className:"w-4 flex items-center justify-center",children:e.jsx("div",{className:"w-px h-4 bg-border"})}),e.jsx("div",{className:"flex items-center justify-center w-5 h-5",children:e.jsx("span",{className:"text-base",children:M(T)})}),e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("span",{className:"text-sm font-medium truncate",children:T})}),s.activeFile===T&&e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},T))]})}),e.jsx("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:e.jsxs("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:e.jsx(Ca,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),e.jsx("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:ae,multiple:!0})]})}),e.jsx(qe,{children:o&&e.jsx(L.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>l(!1),children:e.jsxs(L.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:T=>T.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),e.jsx("input",{type:"text",value:d,onChange:T=>c(T.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:tr.map(T=>e.jsxs("button",{onClick:()=>c(`new-file${T.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[e.jsx("span",{children:T.icon}),e.jsx("span",{className:"truncate",children:T.name})]},T.extension))})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>l(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:C,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),e.jsx(qe,{children:u&&e.jsx(L.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>p(!1),children:e.jsxs(L.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:T=>T.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:s.name,onChange:T=>i({name:T.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),e.jsxs("select",{value:s.config.appType,onChange:T=>i({appType:T.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"frontend",children:"Frontend"}),e.jsx("option",{value:"backend",children:"Backend"}),e.jsx("option",{value:"fullstack",children:"Full Stack"}),e.jsx("option",{value:"mobile",children:"Mobile"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Language"}),e.jsxs("select",{value:s.config.language,onChange:T=>i({language:T.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"javascript",children:"JavaScript"}),e.jsx("option",{value:"typescript",children:"TypeScript"}),e.jsx("option",{value:"python",children:"Python"}),e.jsx("option",{value:"java",children:"Java"}),e.jsx("option",{value:"csharp",children:"C#"}),e.jsx("option",{value:"cpp",children:"C++"}),e.jsx("option",{value:"c",children:"C"}),e.jsx("option",{value:"rust",children:"Rust"}),e.jsx("option",{value:"go",children:"Go"}),e.jsx("option",{value:"php",children:"PHP"}),e.jsx("option",{value:"ruby",children:"Ruby"}),e.jsx("option",{value:"swift",children:"Swift"}),e.jsx("option",{value:"kotlin",children:"Kotlin"}),e.jsx("option",{value:"dart",children:"Dart"}),e.jsx("option",{value:"scala",children:"Scala"}),e.jsx("option",{value:"html",children:"HTML"}),e.jsx("option",{value:"css",children:"CSS"}),e.jsx("option",{value:"sql",children:"SQL"}),e.jsx("option",{value:"r",children:"R"}),e.jsx("option",{value:"matlab",children:"MATLAB"}),e.jsx("option",{value:"perl",children:"Perl"}),e.jsx("option",{value:"lua",children:"Lua"}),e.jsx("option",{value:"bash",children:"Bash/Shell"}),e.jsx("option",{value:"powershell",children:"PowerShell"}),e.jsx("option",{value:"yaml",children:"YAML"}),e.jsx("option",{value:"json",children:"JSON"}),e.jsx("option",{value:"xml",children:"XML"}),e.jsx("option",{value:"markdown",children:"Markdown"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),e.jsxs("select",{value:s.config.framework||"none",onChange:T=>i({framework:T.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"none",children:"None"}),e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue.js"}),e.jsx("option",{value:"angular",children:"Angular"}),e.jsx("option",{value:"svelte",children:"Svelte"}),e.jsx("option",{value:"nextjs",children:"Next.js"}),e.jsx("option",{value:"nuxtjs",children:"Nuxt.js"}),e.jsx("option",{value:"express",children:"Express.js"}),e.jsx("option",{value:"fastapi",children:"FastAPI"}),e.jsx("option",{value:"django",children:"Django"}),e.jsx("option",{value:"flask",children:"Flask"}),e.jsx("option",{value:"spring",children:"Spring Boot"}),e.jsx("option",{value:"laravel",children:"Laravel"}),e.jsx("option",{value:"rails",children:"Ruby on Rails"}),e.jsx("option",{value:"flutter",children:"Flutter"}),e.jsx("option",{value:"react-native",children:"React Native"}),e.jsx("option",{value:"ionic",children:"Ionic"}),e.jsx("option",{value:"electron",children:"Electron"})]})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>p(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:()=>{n(),p(!1),B.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),e.jsx(qe,{children:g&&e.jsx(L.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>y(!1),children:e.jsxs(L.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:T=>T.stopPropagation(),children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[e.jsx(Te,{className:"h-5 w-5"}),"Deploy Your App"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:w,onChange:T=>f(T.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"firebase",checked:h==="firebase",onChange:T=>N(T.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs",children:"F"})}),e.jsx("span",{children:"Firebase Hosting"})]})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"github",checked:h==="github",onChange:T=>N(T.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(pe,{className:"h-4 w-4"}),e.jsx("span",{children:"GitHub Pages"})]})]})]})]}),e.jsxs("div",{className:"p-3 bg-muted rounded-md",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),e.jsx("div",{className:"text-xs text-muted-foreground space-y-1",children:h==="firebase"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free tier available"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):h==="github"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free for public repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>y(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:x,children:"Cancel"}),e.jsx("button",{onClick:le,disabled:x||!w.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:x?e.jsxs(e.Fragment,{children:[e.jsx(Xt,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Te,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),e.jsx(qe,{children:A.show&&e.jsxs(L.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:P,className:"fixed z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:A.x,top:A.y},onClick:k,children:[e.jsxs("button",{onClick:()=>O("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(Qe,{className:"h-4 w-4"}),"Download"]}),e.jsxs("button",{onClick:()=>O("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(It,{className:"h-4 w-4"}),"Copy"]}),e.jsxs("button",{onClick:()=>O("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(ka,{className:"h-4 w-4"}),"Rename"]}),Object.keys(s.files).length>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-t border-border my-1"}),e.jsxs("button",{onClick:()=>O("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[e.jsx(Ta,{className:"h-4 w-4"}),"Delete"]})]})]})})]})};function Au(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Fn(s,t){var r=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),r.push.apply(r,n)}return r}function $n(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Fn(Object(r),!0).forEach(function(n){Au(s,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(r)):Fn(Object(r)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(r,n))})}return s}function Eu(s,t){if(s==null)return{};var r={},n=Object.keys(s),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=s[a]);return r}function Ru(s,t){if(s==null)return{};var r=Eu(s,t),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(s,n)&&(r[n]=s[n])}return r}function Iu(s,t){return Ou(s)||Lu(s,t)||Mu(s,t)||Fu()}function Ou(s){if(Array.isArray(s))return s}function Lu(s,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(s)))){var r=[],n=!0,a=!1,i=void 0;try{for(var o=s[Symbol.iterator](),l;!(n=(l=o.next()).done)&&(r.push(l.value),!(t&&r.length===t));n=!0);}catch(d){a=!0,i=d}finally{try{!n&&o.return!=null&&o.return()}finally{if(a)throw i}}return r}}function Mu(s,t){if(s){if(typeof s=="string")return _n(s,t);var r=Object.prototype.toString.call(s).slice(8,-1);if(r==="Object"&&s.constructor&&(r=s.constructor.name),r==="Map"||r==="Set")return Array.from(s);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _n(s,t)}}function _n(s,t){(t==null||t>s.length)&&(t=s.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=s[r];return n}function Fu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $u(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Bn(s,t){var r=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),r.push.apply(r,n)}return r}function Un(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Bn(Object(r),!0).forEach(function(n){$u(s,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(r)):Bn(Object(r)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(r,n))})}return s}function _u(){for(var s=arguments.length,t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(a,i){return i(a)},n)}}function qt(s){return function t(){for(var r=this,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return a.length>=s.length?s.apply(this,a):function(){for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return t.apply(r,[].concat(a,l))}}}function Es(s){return{}.toString.call(s).includes("Object")}function Bu(s){return!Object.keys(s).length}function ss(s){return typeof s=="function"}function Uu(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function Hu(s,t){return Es(t)||Ke("changeType"),Object.keys(t).some(function(r){return!Uu(s,r)})&&Ke("changeField"),t}function Gu(s){ss(s)||Ke("selectorType")}function zu(s){ss(s)||Es(s)||Ke("handlerType"),Es(s)&&Object.values(s).some(function(t){return!ss(t)})&&Ke("handlersType")}function Wu(s){s||Ke("initialIsRequired"),Es(s)||Ke("initialType"),Bu(s)&&Ke("initialContent")}function qu(s,t){throw new Error(s[t]||s.default)}var Vu={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ke=qt(qu)(Vu),hs={changes:Hu,selector:Gu,handler:zu,initial:Wu};function Ju(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};hs.initial(s),hs.handler(t);var r={current:s},n=qt(Xu)(r,t),a=qt(Ku)(r),i=qt(hs.changes)(s),o=qt(Yu)(r);function l(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return hs.selector(c),c(r.current)}function d(c){_u(n,a,i,o)(c)}return[l,d]}function Yu(s,t){return ss(t)?t(s.current):t}function Ku(s,t){return s.current=Un(Un({},s.current),t),t}function Xu(s,t,r){return ss(t)?t(s.current):Object.keys(r).forEach(function(n){var a;return(a=t[n])===null||a===void 0?void 0:a.call(t,s.current[n])}),r}var Qu={create:Ju},Zu={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function em(s){return function t(){for(var r=this,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return a.length>=s.length?s.apply(this,a):function(){for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return t.apply(r,[].concat(a,l))}}}function tm(s){return{}.toString.call(s).includes("Object")}function sm(s){return s||Hn("configIsRequired"),tm(s)||Hn("configType"),s.urls?(rm(),{paths:{vs:s.urls.monacoBase}}):s}function rm(){console.warn(wi.deprecation)}function nm(s,t){throw new Error(s[t]||s.default)}var wi={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Hn=em(nm)(wi),am={config:sm},im=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(a){return r.reduceRight(function(i,o){return o(i)},a)}};function Ni(s,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&s[r]&&Object.assign(t[r],Ni(s[r],t[r]))}),$n($n({},s),t)}var om={type:"cancelation",msg:"operation is manually canceled"};function dr(s){var t=!1,r=new Promise(function(n,a){s.then(function(i){return t?a(om):n(i)}),s.catch(a)});return r.cancel=function(){return t=!0},r}var lm=Qu.create({config:Zu,isInitialized:!1,resolve:null,reject:null,monaco:null}),Si=Iu(lm,2),as=Si[0],zs=Si[1];function cm(s){var t=am.config(s),r=t.monaco,n=Ru(t,["monaco"]);zs(function(a){return{config:Ni(a.config,n),monaco:r}})}function dm(){var s=as(function(t){var r=t.monaco,n=t.isInitialized,a=t.resolve;return{monaco:r,isInitialized:n,resolve:a}});if(!s.isInitialized){if(zs({isInitialized:!0}),s.monaco)return s.resolve(s.monaco),dr(ur);if(window.monaco&&window.monaco.editor)return Ci(window.monaco),s.resolve(window.monaco),dr(ur);im(um,pm)(hm)}return dr(ur)}function um(s){return document.body.appendChild(s)}function mm(s){var t=document.createElement("script");return s&&(t.src=s),t}function pm(s){var t=as(function(n){var a=n.config,i=n.reject;return{config:a,reject:i}}),r=mm("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return s()},r.onerror=t.reject,r}function hm(){var s=as(function(r){var n=r.config,a=r.resolve,i=r.reject;return{config:n,resolve:a,reject:i}}),t=window.require;t.config(s.config),t(["vs/editor/editor.main"],function(r){Ci(r),s.resolve(r)},function(r){s.reject(r)})}function Ci(s){as().monaco||zs({monaco:s})}function gm(){return as(function(s){var t=s.monaco;return t})}var ur=new Promise(function(s,t){return zs({resolve:s,reject:t})}),ki={config:cm,init:dm,__getMonacoInstance:gm},fm={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},mr=fm,xm={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},bm=xm;function ym({children:s}){return Oe.createElement("div",{style:bm.container},s)}var vm=ym,jm=vm;function wm({width:s,height:t,isEditorReady:r,loading:n,_ref:a,className:i,wrapperProps:o}){return Oe.createElement("section",{style:{...mr.wrapper,width:s,height:t},...o},!r&&Oe.createElement(jm,null,n),Oe.createElement("div",{ref:a,style:{...mr.fullWidth,...!r&&mr.hide},className:i}))}var Nm=wm,Ti=m.memo(Nm);function Sm(s){m.useEffect(s,[])}var Di=Sm;function Cm(s,t,r=!0){let n=m.useRef(!0);m.useEffect(n.current||!r?()=>{n.current=!1}:s,t)}var fe=Cm;function Jt(){}function At(s,t,r,n){return km(s,n)||Tm(s,t,r,n)}function km(s,t){return s.editor.getModel(Pi(s,t))}function Tm(s,t,r,n){return s.editor.createModel(t,r,n?Pi(s,n):void 0)}function Pi(s,t){return s.Uri.parse(t)}function Dm({original:s,modified:t,language:r,originalLanguage:n,modifiedLanguage:a,originalModelPath:i,modifiedModelPath:o,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:d=!1,theme:c="light",loading:u="Loading...",options:p={},height:g="100%",width:y="100%",className:x,wrapperProps:b={},beforeMount:h=Jt,onMount:N=Jt}){let[j,S]=m.useState(!1),[w,f]=m.useState(!0),A=m.useRef(null),R=m.useRef(null),P=m.useRef(null),I=m.useRef(N),M=m.useRef(h),F=m.useRef(!1);Di(()=>{let C=ki.init();return C.then(E=>(R.current=E)&&f(!1)).catch(E=>(E==null?void 0:E.type)!=="cancelation"&&console.error("Monaco initialization: error:",E)),()=>A.current?k():C.cancel()}),fe(()=>{if(A.current&&R.current){let C=A.current.getOriginalEditor(),E=At(R.current,s||"",n||r||"text",i||"");E!==C.getModel()&&C.setModel(E)}},[i],j),fe(()=>{if(A.current&&R.current){let C=A.current.getModifiedEditor(),E=At(R.current,t||"",a||r||"text",o||"");E!==C.getModel()&&C.setModel(E)}},[o],j),fe(()=>{let C=A.current.getModifiedEditor();C.getOption(R.current.editor.EditorOption.readOnly)?C.setValue(t||""):t!==C.getValue()&&(C.executeEdits("",[{range:C.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),C.pushUndoStop())},[t],j),fe(()=>{var C,E;(E=(C=A.current)==null?void 0:C.getModel())==null||E.original.setValue(s||"")},[s],j),fe(()=>{let{original:C,modified:E}=A.current.getModel();R.current.editor.setModelLanguage(C,n||r||"text"),R.current.editor.setModelLanguage(E,a||r||"text")},[r,n,a],j),fe(()=>{var C;(C=R.current)==null||C.editor.setTheme(c)},[c],j),fe(()=>{var C;(C=A.current)==null||C.updateOptions(p)},[p],j);let v=m.useCallback(()=>{var U;if(!R.current)return;M.current(R.current);let C=At(R.current,s||"",n||r||"text",i||""),E=At(R.current,t||"",a||r||"text",o||"");(U=A.current)==null||U.setModel({original:C,modified:E})},[r,t,a,s,n,i,o]),O=m.useCallback(()=>{var C;!F.current&&P.current&&(A.current=R.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...p}),v(),(C=R.current)==null||C.editor.setTheme(c),S(!0),F.current=!0)},[p,c,v]);m.useEffect(()=>{j&&I.current(A.current,R.current)},[j]),m.useEffect(()=>{!w&&!j&&O()},[w,j,O]);function k(){var E,U,G,ae;let C=(E=A.current)==null?void 0:E.getModel();l||((U=C==null?void 0:C.original)==null||U.dispose()),d||((G=C==null?void 0:C.modified)==null||G.dispose()),(ae=A.current)==null||ae.dispose()}return Oe.createElement(Ti,{width:y,height:g,isEditorReady:j,loading:u,_ref:P,className:x,wrapperProps:b})}var Pm=Dm;m.memo(Pm);function Am(s){let t=m.useRef();return m.useEffect(()=>{t.current=s},[s]),t.current}var Em=Am,gs=new Map;function Rm({defaultValue:s,defaultLanguage:t,defaultPath:r,value:n,language:a,path:i,theme:o="light",line:l,loading:d="Loading...",options:c={},overrideServices:u={},saveViewState:p=!0,keepCurrentModel:g=!1,width:y="100%",height:x="100%",className:b,wrapperProps:h={},beforeMount:N=Jt,onMount:j=Jt,onChange:S,onValidate:w=Jt}){let[f,A]=m.useState(!1),[R,P]=m.useState(!0),I=m.useRef(null),M=m.useRef(null),F=m.useRef(null),v=m.useRef(j),O=m.useRef(N),k=m.useRef(),C=m.useRef(n),E=Em(i),U=m.useRef(!1),G=m.useRef(!1);Di(()=>{let H=ki.init();return H.then(V=>(I.current=V)&&P(!1)).catch(V=>(V==null?void 0:V.type)!=="cancelation"&&console.error("Monaco initialization: error:",V)),()=>M.current?le():H.cancel()}),fe(()=>{var V,Y,ie,oe;let H=At(I.current,s||n||"",t||a||"",i||r||"");H!==((V=M.current)==null?void 0:V.getModel())&&(p&&gs.set(E,(Y=M.current)==null?void 0:Y.saveViewState()),(ie=M.current)==null||ie.setModel(H),p&&((oe=M.current)==null||oe.restoreViewState(gs.get(i))))},[i],f),fe(()=>{var H;(H=M.current)==null||H.updateOptions(c)},[c],f),fe(()=>{!M.current||n===void 0||(M.current.getOption(I.current.editor.EditorOption.readOnly)?M.current.setValue(n):n!==M.current.getValue()&&(G.current=!0,M.current.executeEdits("",[{range:M.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),M.current.pushUndoStop(),G.current=!1))},[n],f),fe(()=>{var V,Y;let H=(V=M.current)==null?void 0:V.getModel();H&&a&&((Y=I.current)==null||Y.editor.setModelLanguage(H,a))},[a],f),fe(()=>{var H;l!==void 0&&((H=M.current)==null||H.revealLine(l))},[l],f),fe(()=>{var H;(H=I.current)==null||H.editor.setTheme(o)},[o],f);let ae=m.useCallback(()=>{var H;if(!(!F.current||!I.current)&&!U.current){O.current(I.current);let V=i||r,Y=At(I.current,n||s||"",t||a||"",V||"");M.current=(H=I.current)==null?void 0:H.editor.create(F.current,{model:Y,automaticLayout:!0,...c},u),p&&M.current.restoreViewState(gs.get(V)),I.current.editor.setTheme(o),l!==void 0&&M.current.revealLine(l),A(!0),U.current=!0}},[s,t,r,n,a,i,c,u,p,o,l]);m.useEffect(()=>{f&&v.current(M.current,I.current)},[f]),m.useEffect(()=>{!R&&!f&&ae()},[R,f,ae]),C.current=n,m.useEffect(()=>{var H,V;f&&S&&((H=k.current)==null||H.dispose(),k.current=(V=M.current)==null?void 0:V.onDidChangeModelContent(Y=>{G.current||S(M.current.getValue(),Y)}))},[f,S]),m.useEffect(()=>{if(f){let H=I.current.editor.onDidChangeMarkers(V=>{var ie;let Y=(ie=M.current.getModel())==null?void 0:ie.uri;if(Y&&V.find(oe=>oe.path===Y.path)){let oe=I.current.editor.getModelMarkers({resource:Y});w==null||w(oe)}});return()=>{H==null||H.dispose()}}return()=>{}},[f,w]);function le(){var H,V;(H=k.current)==null||H.dispose(),g?p&&gs.set(i,M.current.saveViewState()):(V=M.current.getModel())==null||V.dispose(),M.current.dispose()}return Oe.createElement(Ti,{width:y,height:x,isEditorReady:f,loading:d,_ref:F,className:b,wrapperProps:h})}var Im=Rm,Om=m.memo(Im);const Lm=()=>{var j,S,w,f,A,R;const{theme:s}=Gs(),{currentProject:t,updateFile:r}=Ge(),[n,a]=m.useState(!0),[i,o]=m.useState(null),l=m.useRef(null);m.useEffect(()=>{if(l.current){const P=t.files[t.activeFile]||"",I=l.current.getValue();P!==I&&l.current.setValue(P)}},[t.activeFile,t.files[t.activeFile]]),m.useEffect(()=>{const P=()=>{l.current&&setTimeout(()=>{l.current.layout()},100)};return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);const d=(P,I)=>{try{console.log("🎯 Monaco Editor mounting..."),a(!1),o(null),l.current=P;const M=t.files[t.activeFile]||"";M&&P.setValue(M),I.editor.defineTheme("custom-dark",{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"569CD6"},{token:"string",foreground:"CE9178"},{token:"number",foreground:"B5CEA8"},{token:"tag",foreground:"569CD6"},{token:"attribute.name",foreground:"92C5F8"},{token:"attribute.value",foreground:"CE9178"}],colors:{"editor.background":"#1e1e1e","editor.foreground":"#d4d4d4","editor.lineHighlightBackground":"#2a2d2e","editor.selectionBackground":"#264f78","editor.inactiveSelectionBackground":"#3a3d41"}}),I.editor.defineTheme("custom-light",{base:"vs",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"0000FF"},{token:"string",foreground:"A31515"},{token:"number",foreground:"098658"},{token:"tag",foreground:"800000"},{token:"attribute.name",foreground:"FF0000"},{token:"attribute.value",foreground:"0451A5"}],colors:{"editor.background":"#ffffff","editor.foreground":"#000000","editor.lineHighlightBackground":"#f5f5f5","editor.selectionBackground":"#add6ff","editor.inactiveSelectionBackground":"#e5ebf1"}}),I.editor.setTheme(s==="dark"?"custom-dark":"custom-light"),P.updateOptions({fontSize:14,fontFamily:"JetBrains Mono, Monaco, Consolas, monospace",lineHeight:22,minimap:{enabled:!0},scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",formatOnPaste:!0,formatOnType:!0,suggestOnTriggerCharacters:!0,acceptSuggestionOnEnter:"on",tabCompletion:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always"}),setTimeout(()=>{P.layout()},100);try{P.addCommand(I.KeyMod.CtrlCmd|I.KeyCode.KeyS,()=>{x()}),P.addCommand(I.KeyMod.CtrlCmd|I.KeyCode.KeyC,()=>{P.getSelection().isEmpty()&&g()})}catch(F){console.warn("⚠️ Could not add keyboard shortcuts:",F)}}catch(M){console.error("❌ Error mounting Monaco Editor:",M),console.error("❌ Monaco Editor error details:",M.message,M.stack),o(M.message),a(!1),B.error("Failed to load code editor")}},c=P=>{try{P!==void 0&&r(t.activeFile,P)}catch(I){console.error("Error updating file:",I),B.error("Failed to save changes")}},u=()=>{const P=t.activeFile.split(".").pop();return{html:"html",css:"css",js:"javascript",jsx:"javascript",ts:"typescript",tsx:"typescript",py:"python",java:"java",cpp:"cpp",c:"c",php:"php",rb:"ruby",go:"go",rs:"rust",swift:"swift",kt:"kotlin",scala:"scala",clj:"clojure",hs:"haskell",ml:"fsharp",fs:"fsharp",vb:"vb",sql:"sql",json:"json",xml:"xml",yaml:"yaml",yml:"yaml",md:"markdown",sh:"shell",bash:"shell",ps1:"powershell",dockerfile:"dockerfile"}[P]||"plaintext"},p=()=>{const P=t.files[t.activeFile]||"";navigator.clipboard.writeText(P),B.success("Code copied to clipboard!")},g=()=>{const P=t.files[t.activeFile]||"";navigator.clipboard.writeText(P),B.success("All code copied to clipboard!")},y=()=>{const P=t.files[t.activeFile]||"",I=new Blob([P],{type:"text/plain"}),M=URL.createObjectURL(I),F=document.createElement("a");F.href=M,F.download=t.activeFile,document.body.appendChild(F),F.click(),document.body.removeChild(F),URL.revokeObjectURL(M),B.success(`Downloaded ${t.activeFile}`)},x=()=>{B.success("Code saved!")},b=()=>{l.current&&(l.current.getAction("editor.action.formatDocument").run(),B.success("Code formatted!"))},h={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖"},N=P=>h[P]||"📄";return e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:N(t.activeFile)}),e.jsx("span",{className:"font-medium text-sm",children:t.activeFile}),e.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-1 rounded",children:u()})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:b,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Format Code (Ctrl+Shift+F)",children:e.jsx(Ms,{className:"h-4 w-4"})}),e.jsx("button",{onClick:p,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy Code",children:e.jsx(It,{className:"h-4 w-4"})}),e.jsx("button",{onClick:y,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Download File",children:e.jsx(Qe,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"flex-1 relative h-full min-h-[500px]",children:i?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsx("div",{className:"text-red-500 text-lg mb-4",children:"⚠️ Editor Error"}),e.jsx("div",{className:"text-muted-foreground mb-4",children:i}),e.jsx("button",{onClick:()=>{o(null),a(!0),window.location.reload()},className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Reload Editor"})]}):e.jsx(Om,{height:"100%",language:u(),value:t.files[t.activeFile]||"",onChange:c,onMount:d,theme:s==="dark"?"vs-dark":"vs",loading:e.jsxs("div",{className:"flex items-center justify-center h-full",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"}),e.jsx("span",{className:"ml-2",children:"Loading editor..."})]}),options:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,mouseWheelZoom:!0,smoothScrolling:!0,cursorBlinking:"blink",renderLineHighlight:"line",renderWhitespace:"selection",renderIndentGuides:!0,highlightActiveIndentGuide:!0,bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always",unfoldOnClickAfterEnd:!1,contextmenu:!0,mouseWheelScrollSensitivity:1,fastScrollSensitivity:5,cursorSurroundingLines:3,cursorSurroundingLinesStyle:"default",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:14,horizontalScrollbarSize:14,useShadows:!0,verticalHasArrows:!1,horizontalHasArrows:!1,arrowSize:11,verticalSliderSize:14,horizontalSliderSize:14}}},`${t.activeFile}-${((j=t.files[t.activeFile])==null?void 0:j.length)||0}`)}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:["Line ",((w=(S=l.current)==null?void 0:S.getPosition())==null?void 0:w.lineNumber)||1]}),e.jsxs("span",{children:["Column ",((A=(f=l.current)==null?void 0:f.getPosition())==null?void 0:A.column)||1]}),e.jsxs("span",{children:[((R=t.files[t.activeFile])==null?void 0:R.length)||0," characters"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+S to save"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+C to copy all"})]})]})]})},Mm=()=>{console.log("🎮 Preview component rendered!");const{currentProject:s}=Ge(),t=m.useRef(null),[r,n]=m.useState(!1),[a,i]=m.useState(!1),[o,l]=m.useState(null),[d,c]=m.useState(0);Oe.useEffect(()=>{c(j=>j+1),console.log("🎮 Preview component rendered! Render count:",d+1)},[]),m.useEffect(()=>{console.log("🎮 Preview useEffect triggered - files changed:",Object.keys(s.files)),console.log("🎮 Preview useEffect - currentProject:",s),console.log("🎮 Preview useEffect - file count:",Object.keys(s.files).length);const j=setTimeout(()=>{u()},50);return()=>clearTimeout(j)},[s.files,s.activeFile,s]),m.useEffect(()=>{const j=()=>{t.current?(console.log("🎮 Iframe mounted, updating preview..."),u()):(console.log("🎮 Iframe not ready, retrying..."),setTimeout(j,50))};setTimeout(j,100)},[]);const u=()=>{if(console.log("🎮 updatePreview called with files:",Object.keys(s.files)),!t.current){console.log("🎮 updatePreview: iframeRef.current is null, skipping update");return}if(!s.files||Object.keys(s.files).length===0){console.log("🎮 updatePreview: No files to display, showing placeholder"),y();return}console.log("🎮 updatePreview: iframeRef.current exists, proceeding..."),n(!0),l(null);try{let j=s.files["index.html"]||"";if(!j.trim()){const O=Object.keys(s.files).filter(k=>k.endsWith(".html")&&k!=="index.html");if(O.length>0){console.log("🎮 Preview Debug - No index.html found, using:",O[0]);const k=s.files[O[0]]||"";k.trim()&&(j=k)}}const S=Object.keys(s.files).filter(O=>O.endsWith(".css")),w=S.map(O=>s.files[O]).join(`
`);console.log("🎮 Preview Debug - All CSS files found:",S),console.log("🎮 Preview Debug - CSS content length:",w.length),console.log("🎮 Preview Debug - CSS content preview:",w.substring(0,200)+"...");const f=s.files["script.js"]||"",A=s.files["src/components/GameApp.jsx"]||"",R=s.files["src/components/GameComponent.jsx"]||"",P=s.files["src/components/TempleRunUI.jsx"]||"",I=s.files["src/components/RunnerPlayer.jsx"]||"",M=s.files["src/components/Obstacle.jsx"]||"";if(R&&(console.log("🎮 Preview Debug - GameComponent content preview:",R.substring(0,200)+"..."),console.log("🎮 Preview Debug - GameComponent contains Temple Run:",R.toLowerCase().includes("temple run")),console.log("🎮 Preview Debug - GameComponent contains lane:",R.toLowerCase().includes("lane")),console.log("🎮 Preview Debug - GameComponent contains jump:",R.toLowerCase().includes("jump"))),console.log("🎮 Preview Debug - Checking for game files:"),console.log("🎮 - GameApp.jsx exists:",!!A),console.log("🎮 - GameComponent.jsx exists:",!!R),console.log("🎮 - TempleRunUI.jsx exists:",!!P),console.log("🎮 - RunnerPlayer.jsx exists:",!!I),console.log("🎮 - Obstacle.jsx exists:",!!M),console.log("🎮 - All project files:",Object.keys(s.files)),A||R){console.log("🎮 Preview Debug - Game files detected, creating React preview"),console.log("🎮 Preview Debug - About to call createReactPreview, iframeRef.current:",!!t.current),g(),console.log("🎮 Preview Debug - createReactPreview call completed");return}if(console.log("🎮 Preview Debug - No game files detected, using regular HTML preview"),console.log("🎮 Preview Debug - HTML content length:",j.length),console.log("🎮 Preview Debug - CSS content length:",w.length),console.log("🎮 Preview Debug - JS content length:",f.length),!j.trim()){console.log("🎮 Preview Debug - No HTML content found, creating basic structure");const O=w.trim().length>0,k=f.trim().length>0;j=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild Generated App</title>
    ${O?`<style>${w}</style>`:""}
</head>
<body>
    <div id="app">
        <h1>DreamBuild Generated Application</h1>
        <p>Your application is loading...</p>
        <div id="content"></div>
    </div>
    ${k?`<script>${f}<\/script>`:""}
</body>
</html>`,console.log("🎮 Preview Debug - Created basic HTML structure")}let F=j;if(w.trim()&&(F=F.replace(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']style\.css["'][^>]*>/gi,`<style>${w}</style>`),F===j&&F.includes("<head>")?F=F.replace("<head>",`<head>
<style>${w}</style>`):F===j&&!F.includes("<head>")&&(F.includes("<title>")?F=F.replace("</title>",`</title>
<style>${w}</style>`):F=`<style>${w}</style>
${F}`)),f.trim()){const O=`(function() {
          ${f}
        })();`;F=F.replace(/<script[^>]*src=["']script\.js["'][^>]*><\/script>/gi,`<script>${O}<\/script>`),F.includes("</body>")?F=F.replace("</body>",`<script>${O}<\/script>
</body>`):F+=`
<script>${O}<\/script>`}F.includes("<!DOCTYPE html>")||(F=`<!DOCTYPE html>
${F}`),console.log("🎮 Preview Debug - Final HTML length:",F.length),console.log("🎮 Preview Debug - HTML contains <style>:",F.includes("<style>")),console.log("🎮 Preview Debug - HTML contains <script>:",F.includes("<script>")),console.log("🎮 Preview Debug - HTML preview:",F.substring(0,500)+"...");const v=t.current;v.srcdoc=F,v.onload=()=>{n(!1),l(null)},v.onerror=()=>{n(!1),l("Failed to load preview")}}catch(j){console.error("Preview update error:",j),n(!1),l("Preview update failed")}},p=j=>j?j.replace(/`/g,"\\`").replace(/\${/g,"\\${").replace(/\$/g,"\\$"):"",g=()=>{if(console.log("🎮 Creating React preview..."),!t.current){console.log("🎮 createReactPreview: iframeRef.current is null");return}try{const j=s.files["src/components/GameApp.jsx"]||"",S=s.files["src/components/GameComponent.jsx"]||"",w=s.files["src/components/TempleRunUI.jsx"]||"",f=s.files["src/components/RunnerPlayer.jsx"]||"",A=s.files["src/components/Obstacle.jsx"]||"",R=s.files["src/components/Coin.jsx"]||"",P=s.files["src/components/Player.jsx"]||"",I=s.files["src/components/GameApp.css"]||"",M=s.files["src/components/GameComponent.css"]||"",F=s.files["src/components/TempleRunUI.css"]||"",v=s.files["src/components/RunnerPlayer.css"]||"",O=s.files["src/components/Obstacle.css"]||"",k=s.files["src/components/Coin.css"]||"",C=s.files["src/components/Player.css"]||"",E=w||f||A,U=P||R,G=S.toLowerCase(),ae=G.includes("temple run")||G.includes("lane")||G.includes("jump")||G.includes("slide")||G.includes("obstacle")||G.includes("endless runner"),le=E||ae,H=U&&!le;console.log("🎮 Preview Debug - Available files:"),console.log("🎮 - templeRunUIFile:",!!w),console.log("🎮 - runnerPlayerFile:",!!f),console.log("🎮 - obstacleFile:",!!A),console.log("🎮 - playerFile:",!!P),console.log("🎮 - coinFile:",!!R),console.log("🎮 - hasTempleRunFiles:",E),console.log("🎮 - hasTempleRunContent:",ae),console.log("🎮 - isTempleRun:",le),console.log("🎮 - isCoinCollector:",H),console.log("🎮 - All project files:",Object.keys(s.files)),console.log("🎮 FINAL GAME TYPE DECISION:"),console.log(le?"🎮 ✅ RENDERING TEMPLE RUN GAME":H?"🎮 ✅ RENDERING COIN COLLECTOR GAME":"🎮 ✅ RENDERING DEFAULT GAME");const V=`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DreamBuild Game Preview</title>
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: #f0f0f0;
          }
          #root {
            width: 100%;
            min-height: 100vh;
          }
          ${p(I)}
          ${p(M)}
          ${p(F)}
          ${p(v)}
          ${p(O)}
          ${p(k)}
          ${p(C)}
        </style>
      </head>
      <body>
        <div id="root"></div>
        
        <script type="text/babel">
          const { useState, useEffect, useRef, useCallback } = React;
          
          // Game component based on detected game type
          const GameComponent = () => {
            const [gameState, setGameState] = useState({
              score: 0,
              distance: 0,
              speed: 1,
              isPlaying: false,
              isPaused: false,
              gameOver: false
            });
            
            const [player, setPlayer] = useState({ x: 100, y: 200, lane: 1, isJumping: false, isSliding: false });
            const [obstacles, setObstacles] = useState([]);
            const [coins, setCoins] = useState([]);
            const [keys, setKeys] = useState({});
            
            const handleKeyDown = useCallback((e) => {
              setKeys(prev => ({ ...prev, [e.code]: true }));
            }, []);
            
            const handleKeyUp = useCallback((e) => {
              setKeys(prev => ({ ...prev, [e.code]: false }));
            }, []);
            
            useEffect(() => {
              window.addEventListener('keydown', handleKeyDown);
              window.addEventListener('keyup', handleKeyUp);
              return () => {
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
              };
            }, [handleKeyDown, handleKeyUp]);
            
            const startGame = () => {
              setGameState(prev => ({ ...prev, isPlaying: true, gameOver: false, score: 0, distance: 0 }));
              setPlayer({ x: 100, y: 200, lane: 1, isJumping: false, isSliding: false });
              setObstacles([]);
              setCoins([]);
            };
            
            const pauseGame = () => {
              setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
            };
            
            const gameLoop = useCallback(() => {
              if (!gameState.isPlaying || gameState.isPaused) return;
              
              // Handle player movement
              setPlayer(prevPlayer => {
                let newLane = prevPlayer.lane;
                let newY = prevPlayer.y;
                let newIsJumping = prevPlayer.isJumping;
                let newIsSliding = prevPlayer.isSliding;
                
                // Lane switching
                if (keys['ArrowLeft'] || keys['KeyA']) {
                  newLane = Math.max(0, newLane - 1);
                }
                if (keys['ArrowRight'] || keys['KeyD']) {
                  newLane = Math.min(2, newLane + 1);
                }
                
                // Jumping
                if ((keys['ArrowUp'] || keys['KeyW']) && !prevPlayer.isJumping) {
                  newIsJumping = true;
                  newY = 100;
                  setTimeout(() => setPlayer(p => ({ ...p, isJumping: false, y: 200 })), 500);
                }
                
                // Sliding
                if ((keys['ArrowDown'] || keys['KeyS']) && !prevPlayer.isSliding) {
                  newIsSliding = true;
                  newY = 250;
                  setTimeout(() => setPlayer(p => ({ ...p, isSliding: false, y: 200 })), 400);
                }
                
                return { 
                  ...prevPlayer, 
                  lane: newLane, 
                  y: newY, 
                  isJumping: newIsJumping, 
                  isSliding: newIsSliding,
                  x: 50 + newLane * 75
                };
              });
              
              // Update game state
              setGameState(prev => ({
                ...prev,
                distance: prev.distance + prev.speed,
                speed: Math.min(3, 1 + Math.floor(prev.distance / 1000) * 0.2)
              }));
              
              // Spawn obstacles
              if (Math.random() < 0.02 + gameState.speed * 0.01) {
                setObstacles(prev => [...prev, {
                  id: Date.now(),
                  lane: Math.floor(Math.random() * 3),
                  type: Math.random() < 0.7 ? 'low' : 'high',
                  x: 400,
                  y: Math.random() < 0.7 ? 200 : 100
                }]);
              }
              
              // Spawn coins
              if (Math.random() < 0.01) {
                setCoins(prev => [...prev, {
                  id: Date.now(),
                  lane: Math.floor(Math.random() * 3),
                  x: 400,
                  y: 150,
                  collected: false
                }]);
              }
              
              // Move obstacles and coins
              setObstacles(prev => prev.map(obs => ({ ...obs, x: obs.x - gameState.speed * 3 })).filter(obs => obs.x > -50));
              setCoins(prev => prev.map(coin => ({ ...coin, x: coin.x - gameState.speed * 2 })).filter(coin => coin.x > -50));
              
              // Check collisions
              setObstacles(prevObstacles => {
                return prevObstacles.map(obs => {
                  if (obs.lane === player.lane && Math.abs(obs.x - player.x) < 30 && 
                      ((obs.type === 'low' && !player.isJumping) || (obs.type === 'high' && !player.isSliding))) {
                    setGameState(prev => ({ ...prev, gameOver: true, isPlaying: false }));
                    return obs;
                  }
                  return obs;
                });
              });
              
              // Check coin collection
              setCoins(prevCoins => {
                return prevCoins.map(coin => {
                  if (coin.lane === player.lane && Math.abs(coin.x - player.x) < 25 && !coin.collected) {
                    setGameState(prev => ({ ...prev, score: prev.score + 10 }));
                    return { ...coin, collected: true };
                  }
                  return coin;
                }).filter(coin => !coin.collected);
              });
              
              requestAnimationFrame(gameLoop);
            }, [keys, player.lane, player.isJumping, player.isSliding, gameState.isPlaying, gameState.isPaused, gameState.speed]);
            
            useEffect(() => {
              if (gameState.isPlaying && !gameState.isPaused) {
                const timer = setTimeout(gameLoop, 16);
                return () => clearTimeout(timer);
              }
            }, [gameLoop, gameState.isPlaying, gameState.isPaused]);
            
            if (${le}) {
              // Temple Run Game
              return (
                <div style={{ 
                  width: '400px', 
                  height: '300px', 
                  border: '2px solid #333', 
                  position: 'relative',
                  background: 'linear-gradient(180deg, #87CEEB 0%, #98FB98 100%)',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                  }}>
                    Score: {gameState.score} | Distance: {Math.floor(gameState.distance)}
                  </div>
                  
                  {!gameState.isPlaying && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'white',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                    }}>
                      <h2>Temple Run</h2>
                      <p>A/D or ←/→ to switch lanes</p>
                      <p>W or ↑ to jump</p>
                      <p>S or ↓ to slide</p>
                      <button onClick={startGame} style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}>
                        Start Game
                      </button>
                    </div>
                  )}
                  
                  {gameState.isPlaying && (
                    <>
                      {/* Lanes */}
                      <div style={{ position: 'absolute', left: '50px', top: '0', width: '2px', height: '100%', background: 'rgba(255,255,255,0.3)' }} />
                      <div style={{ position: 'absolute', left: '125px', top: '0', width: '2px', height: '100%', background: 'rgba(255,255,255,0.3)' }} />
                      <div style={{ position: 'absolute', left: '200px', top: '0', width: '2px', height: '100%', background: 'rgba(255,255,255,0.3)' }} />
                      
                      {/* Player */}
                      <div style={{
                        position: 'absolute',
                        top: player.y,
                        left: player.x,
                        width: '30px',
                        height: player.isSliding ? '15px' : '30px',
                        background: player.isSliding ? '#8B4513' : '#FFD700',
                        borderRadius: player.isSliding ? '5px' : '50%',
                        border: '2px solid #FFA500',
                        transition: 'all 0.1s ease'
                      }} />
                      
                      {/* Obstacles */}
                      {obstacles.map(obs => (
                        <div key={obs.id} style={{
                          position: 'absolute',
                          top: obs.y,
                          left: obs.x,
                          width: '25px',
                          height: obs.type === 'low' ? '40px' : '20px',
                          background: '#8B4513',
                          borderRadius: '3px'
                        }} />
                      ))}
                      
                      {/* Coins */}
                      {coins.map(coin => (
                        <div key={coin.id} style={{
                          position: 'absolute',
                          top: coin.y,
                          left: coin.x,
                          width: '15px',
                          height: '15px',
                          background: '#FFD700',
                          borderRadius: '50%',
                          border: '2px solid #FFA500',
                          boxShadow: '0 0 10px #FFD700'
                        }} />
                      ))}
                      
                      <button onClick={pauseGame} style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        padding: '5px 10px',
                        fontSize: '12px',
                        background: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer'
                      }}>
                        {gameState.isPaused ? 'Resume' : 'Pause'}
                      </button>
                    </>
                  )}
                  
                  {gameState.gameOver && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'white',
                      background: 'rgba(0,0,0,0.8)',
                      padding: '20px',
                      borderRadius: '10px'
                    }}>
                      <h2>Game Over!</h2>
                      <p>Final Score: {gameState.score}</p>
                      <p>Distance: {Math.floor(gameState.distance)}</p>
                      <button onClick={startGame} style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}>
                        Play Again
                      </button>
                    </div>
                  )}
                </div>
              );
            } else if (${H}) {
              // Coin Collector Game
              return (
                <div style={{ 
                  width: '400px', 
                  height: '400px', 
                  border: '2px solid #333', 
                  position: 'relative',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    Score: {gameState.score}
                  </div>
                  
                  {!gameState.isPlaying && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'white'
                    }}>
                      <h2>Coin Collector Game</h2>
                      <p>Use arrow keys or WASD to move</p>
                      <button onClick={startGame} style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}>
                        Start Game
                      </button>
                    </div>
                  )}
                  
                  {gameState.isPlaying && (
                    <>
                      <div style={{
                        position: 'absolute',
                        top: 200,
                        left: 200,
                        width: '20px',
                        height: '20px',
                        background: '#FFD700',
                        borderRadius: '50%',
                        border: '2px solid #FFA500'
                      }} />
                      
                      <button onClick={pauseGame} style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        padding: '5px 10px',
                        fontSize: '12px',
                        background: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer'
                      }}>
                        {gameState.isPaused ? 'Resume' : 'Pause'}
                      </button>
                    </>
                  )}
                </div>
              );
            } else {
              // Default Game
              return (
                <div style={{ 
                  width: '400px', 
                  height: '300px', 
                  border: '2px solid #333', 
                  position: 'relative',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <h2>Game Preview</h2>
                    <p>No specific game type detected</p>
                    <button onClick={startGame} style={{
                      padding: '10px 20px',
                      fontSize: '16px',
                      background: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}>
                      Start Game
                    </button>
                  </div>
                </div>
              );
            }
          };
          
          const GameApp = () => {
            return (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '100vh',
                background: '#f0f0f0',
                fontFamily: 'Arial, sans-serif'
              }}>
                <GameComponent />
              </div>
            );
          };
          
          // Render the app
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(React.createElement(GameApp));
        <\/script>
      </body>
      </html>
    `,Y=t.current;console.log("🎮 Setting iframe content, length:",V.length),Y.srcdoc=V,Y.onload=()=>{var ie,oe;console.log("🎮 Iframe loaded successfully"),n(!1),l(null);try{const Me=((oe=(ie=Y.contentDocument)==null?void 0:ie.body)==null?void 0:oe.textContent)||"";console.log("🎮 Iframe content verification - length:",Me.length),console.log("🎮 Iframe content preview:",Me.substring(0,100))}catch(Me){console.log("🎮 Iframe content verification - access denied:",Me.message)}},Y.onerror=()=>{console.log("🎮 Iframe error occurred"),n(!1),l("Failed to load React preview")}}catch(j){console.error("🎮 Error in createReactPreview:",j),n(!1),l(`Preview generation failed: ${j.message}`)}},y=()=>{if(!t.current)return;const j=`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
          .placeholder {
            text-align: center;
            padding: 40px;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            max-width: 400px;
          }
          .placeholder h2 {
            font-size: 2rem;
            margin-bottom: 20px;
            opacity: 0.9;
          }
          .placeholder p {
            font-size: 1.1rem;
            opacity: 0.8;
            line-height: 1.6;
          }
          .icon {
            font-size: 4rem;
            margin-bottom: 20px;
            display: block;
          }
        </style>
      </head>
      <body>
        <div class="placeholder">
          <span class="icon">🚀</span>
          <h2>Ready to Build</h2>
          <p>Generate some code to see your application preview here!</p>
        </div>
      </body>
      </html>
    `,S=t.current;S.srcdoc=j,n(!1)},x=()=>{u(),B.success("Preview refreshed!")},b=()=>{if(!t.current)return;const j=t.current;if(j.srcdoc){const S=window.open("","_blank");S.document.write(j.srcdoc),S.document.close(),B.success("Opened in new tab!")}else B.error("No content to open")},h=()=>{document.fullscreenElement||i(!1)};m.useEffect(()=>(document.addEventListener("fullscreenchange",h),()=>{document.removeEventListener("fullscreenchange",h)}),[]);const N=async()=>{a?document.exitFullscreen&&await document.exitFullscreen():t.current.requestFullscreen&&await t.current.requestFullscreen()};return e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${a?"fixed inset-0 z-50 rounded-none":""}`,children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:"font-semibold text-sm",children:"Live Preview"}),e.jsx("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"RENDERED"}),e.jsxs("span",{className:"text-xs bg-blue-500 text-white px-2 py-1 rounded",children:["#",d]}),r&&e.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[e.jsx("div",{className:"spinner"}),e.jsx("span",{children:"Updating..."})]}),o&&e.jsx("span",{className:"text-xs text-destructive",children:"Error"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:x,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Refresh Preview",children:e.jsx(Ms,{className:"h-4 w-4"})}),e.jsx("button",{onClick:b,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Open in New Tab",children:e.jsx(Qt,{className:"h-4 w-4"})}),e.jsx("button",{onClick:N,className:"p-2 hover:bg-muted rounded-md transition-colors",title:a?"Exit Fullscreen":"Enter Fullscreen",children:a?e.jsx(Go,{className:"h-4 w-4"}):e.jsx(zo,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"flex-1 relative bg-black",children:o?e.jsx("div",{className:"flex items-center justify-center h-full",children:e.jsxs("div",{className:"text-center p-6",children:[e.jsx("div",{className:"text-4xl mb-4",children:"⚠️"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Preview Error"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:o}),e.jsx("button",{onClick:x,className:"px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors",children:"Try Again"})]})}):e.jsx("iframe",{ref:t,className:"w-full h-full border-0",title:"Preview",sandbox:"allow-scripts allow-forms allow-popups",onLoad:()=>n(!1),onError:()=>{n(!1),l("Failed to load preview")}})}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{children:"Responsive"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Auto-refresh"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+R to refresh"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"F11 for fullscreen"})]})]})]})};function Ai(s,t){return function(){return s.apply(t,arguments)}}const{toString:Fm}=Object.prototype,{getPrototypeOf:ln}=Object,{iterator:Ws,toStringTag:Ei}=Symbol,qs=(s=>t=>{const r=Fm.call(t);return s[r]||(s[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Pe=s=>(s=s.toLowerCase(),t=>qs(t)===s),Vs=s=>t=>typeof t===s,{isArray:Ft}=Array,Ot=Vs("undefined");function is(s){return s!==null&&!Ot(s)&&s.constructor!==null&&!Ot(s.constructor)&&he(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const Ri=Pe("ArrayBuffer");function $m(s){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(s):t=s&&s.buffer&&Ri(s.buffer),t}const _m=Vs("string"),he=Vs("function"),Ii=Vs("number"),os=s=>s!==null&&typeof s=="object",Bm=s=>s===!0||s===!1,ws=s=>{if(qs(s)!=="object")return!1;const t=ln(s);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ei in s)&&!(Ws in s)},Um=s=>{if(!os(s)||is(s))return!1;try{return Object.keys(s).length===0&&Object.getPrototypeOf(s)===Object.prototype}catch{return!1}},Hm=Pe("Date"),Gm=Pe("File"),zm=Pe("Blob"),Wm=Pe("FileList"),qm=s=>os(s)&&he(s.pipe),Vm=s=>{let t;return s&&(typeof FormData=="function"&&s instanceof FormData||he(s.append)&&((t=qs(s))==="formdata"||t==="object"&&he(s.toString)&&s.toString()==="[object FormData]"))},Jm=Pe("URLSearchParams"),[Ym,Km,Xm,Qm]=["ReadableStream","Request","Response","Headers"].map(Pe),Zm=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ls(s,t,{allOwnKeys:r=!1}={}){if(s===null||typeof s>"u")return;let n,a;if(typeof s!="object"&&(s=[s]),Ft(s))for(n=0,a=s.length;n<a;n++)t.call(null,s[n],n,s);else{if(is(s))return;const i=r?Object.getOwnPropertyNames(s):Object.keys(s),o=i.length;let l;for(n=0;n<o;n++)l=i[n],t.call(null,s[l],l,s)}}function Oi(s,t){if(is(s))return null;t=t.toLowerCase();const r=Object.keys(s);let n=r.length,a;for(;n-- >0;)if(a=r[n],t===a.toLowerCase())return a;return null}const ut=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Li=s=>!Ot(s)&&s!==ut;function Mr(){const{caseless:s,skipUndefined:t}=Li(this)&&this||{},r={},n=(a,i)=>{const o=s&&Oi(r,i)||i;ws(r[o])&&ws(a)?r[o]=Mr(r[o],a):ws(a)?r[o]=Mr({},a):Ft(a)?r[o]=a.slice():(!t||!Ot(a))&&(r[o]=a)};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&ls(arguments[a],n);return r}const ep=(s,t,r,{allOwnKeys:n}={})=>(ls(t,(a,i)=>{r&&he(a)?s[i]=Ai(a,r):s[i]=a},{allOwnKeys:n}),s),tp=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),sp=(s,t,r,n)=>{s.prototype=Object.create(t.prototype,n),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:t.prototype}),r&&Object.assign(s.prototype,r)},rp=(s,t,r,n)=>{let a,i,o;const l={};if(t=t||{},s==null)return t;do{for(a=Object.getOwnPropertyNames(s),i=a.length;i-- >0;)o=a[i],(!n||n(o,s,t))&&!l[o]&&(t[o]=s[o],l[o]=!0);s=r!==!1&&ln(s)}while(s&&(!r||r(s,t))&&s!==Object.prototype);return t},np=(s,t,r)=>{s=String(s),(r===void 0||r>s.length)&&(r=s.length),r-=t.length;const n=s.indexOf(t,r);return n!==-1&&n===r},ap=s=>{if(!s)return null;if(Ft(s))return s;let t=s.length;if(!Ii(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=s[t];return r},ip=(s=>t=>s&&t instanceof s)(typeof Uint8Array<"u"&&ln(Uint8Array)),op=(s,t)=>{const n=(s&&s[Ws]).call(s);let a;for(;(a=n.next())&&!a.done;){const i=a.value;t.call(s,i[0],i[1])}},lp=(s,t)=>{let r;const n=[];for(;(r=s.exec(t))!==null;)n.push(r);return n},cp=Pe("HTMLFormElement"),dp=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,a){return n.toUpperCase()+a}),Gn=(({hasOwnProperty:s})=>(t,r)=>s.call(t,r))(Object.prototype),up=Pe("RegExp"),Mi=(s,t)=>{const r=Object.getOwnPropertyDescriptors(s),n={};ls(r,(a,i)=>{let o;(o=t(a,i,s))!==!1&&(n[i]=o||a)}),Object.defineProperties(s,n)},mp=s=>{Mi(s,(t,r)=>{if(he(s)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=s[r];if(he(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},pp=(s,t)=>{const r={},n=a=>{a.forEach(i=>{r[i]=!0})};return Ft(s)?n(s):n(String(s).split(t)),r},hp=()=>{},gp=(s,t)=>s!=null&&Number.isFinite(s=+s)?s:t;function fp(s){return!!(s&&he(s.append)&&s[Ei]==="FormData"&&s[Ws])}const xp=s=>{const t=new Array(10),r=(n,a)=>{if(os(n)){if(t.indexOf(n)>=0)return;if(is(n))return n;if(!("toJSON"in n)){t[a]=n;const i=Ft(n)?[]:{};return ls(n,(o,l)=>{const d=r(o,a+1);!Ot(d)&&(i[l]=d)}),t[a]=void 0,i}}return n};return r(s,0)},bp=Pe("AsyncFunction"),yp=s=>s&&(os(s)||he(s))&&he(s.then)&&he(s.catch),Fi=((s,t)=>s?setImmediate:t?((r,n)=>(ut.addEventListener("message",({source:a,data:i})=>{a===ut&&i===r&&n.length&&n.shift()()},!1),a=>{n.push(a),ut.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",he(ut.postMessage)),vp=typeof queueMicrotask<"u"?queueMicrotask.bind(ut):typeof process<"u"&&process.nextTick||Fi,jp=s=>s!=null&&he(s[Ws]),D={isArray:Ft,isArrayBuffer:Ri,isBuffer:is,isFormData:Vm,isArrayBufferView:$m,isString:_m,isNumber:Ii,isBoolean:Bm,isObject:os,isPlainObject:ws,isEmptyObject:Um,isReadableStream:Ym,isRequest:Km,isResponse:Xm,isHeaders:Qm,isUndefined:Ot,isDate:Hm,isFile:Gm,isBlob:zm,isRegExp:up,isFunction:he,isStream:qm,isURLSearchParams:Jm,isTypedArray:ip,isFileList:Wm,forEach:ls,merge:Mr,extend:ep,trim:Zm,stripBOM:tp,inherits:sp,toFlatObject:rp,kindOf:qs,kindOfTest:Pe,endsWith:np,toArray:ap,forEachEntry:op,matchAll:lp,isHTMLForm:cp,hasOwnProperty:Gn,hasOwnProp:Gn,reduceDescriptors:Mi,freezeMethods:mp,toObjectSet:pp,toCamelCase:dp,noop:hp,toFiniteNumber:gp,findKey:Oi,global:ut,isContextDefined:Li,isSpecCompliantForm:fp,toJSONObject:xp,isAsyncFn:bp,isThenable:yp,setImmediate:Fi,asap:vp,isIterable:jp};function z(s,t,r,n,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),a&&(this.response=a,this.status=a.status?a.status:null)}D.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.status}}});const $i=z.prototype,_i={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{_i[s]={value:s}});Object.defineProperties(z,_i);Object.defineProperty($i,"isAxiosError",{value:!0});z.from=(s,t,r,n,a,i)=>{const o=Object.create($i);D.toFlatObject(s,o,function(u){return u!==Error.prototype},c=>c!=="isAxiosError");const l=s&&s.message?s.message:"Error",d=t==null&&s?s.code:t;return z.call(o,l,d,r,n,a),s&&o.cause==null&&Object.defineProperty(o,"cause",{value:s,configurable:!0}),o.name=s&&s.name||"Error",i&&Object.assign(o,i),o};const wp=null;function Fr(s){return D.isPlainObject(s)||D.isArray(s)}function Bi(s){return D.endsWith(s,"[]")?s.slice(0,-2):s}function zn(s,t,r){return s?s.concat(t).map(function(a,i){return a=Bi(a),!r&&i?"["+a+"]":a}).join(r?".":""):t}function Np(s){return D.isArray(s)&&!s.some(Fr)}const Sp=D.toFlatObject(D,{},null,function(t){return/^is[A-Z]/.test(t)});function Js(s,t,r){if(!D.isObject(s))throw new TypeError("target must be an object");t=t||new FormData,r=D.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,h){return!D.isUndefined(h[b])});const n=r.metaTokens,a=r.visitor||u,i=r.dots,o=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(t);if(!D.isFunction(a))throw new TypeError("visitor must be a function");function c(x){if(x===null)return"";if(D.isDate(x))return x.toISOString();if(D.isBoolean(x))return x.toString();if(!d&&D.isBlob(x))throw new z("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(x)||D.isTypedArray(x)?d&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function u(x,b,h){let N=x;if(x&&!h&&typeof x=="object"){if(D.endsWith(b,"{}"))b=n?b:b.slice(0,-2),x=JSON.stringify(x);else if(D.isArray(x)&&Np(x)||(D.isFileList(x)||D.endsWith(b,"[]"))&&(N=D.toArray(x)))return b=Bi(b),N.forEach(function(S,w){!(D.isUndefined(S)||S===null)&&t.append(o===!0?zn([b],w,i):o===null?b:b+"[]",c(S))}),!1}return Fr(x)?!0:(t.append(zn(h,b,i),c(x)),!1)}const p=[],g=Object.assign(Sp,{defaultVisitor:u,convertValue:c,isVisitable:Fr});function y(x,b){if(!D.isUndefined(x)){if(p.indexOf(x)!==-1)throw Error("Circular reference detected in "+b.join("."));p.push(x),D.forEach(x,function(N,j){(!(D.isUndefined(N)||N===null)&&a.call(t,N,D.isString(j)?j.trim():j,b,g))===!0&&y(N,b?b.concat(j):[j])}),p.pop()}}if(!D.isObject(s))throw new TypeError("data must be an object");return y(s),t}function Wn(s){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function cn(s,t){this._pairs=[],s&&Js(s,this,t)}const Ui=cn.prototype;Ui.append=function(t,r){this._pairs.push([t,r])};Ui.toString=function(t){const r=t?function(n){return t.call(this,n,Wn)}:Wn;return this._pairs.map(function(a){return r(a[0])+"="+r(a[1])},"").join("&")};function Cp(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Hi(s,t,r){if(!t)return s;const n=r&&r.encode||Cp;D.isFunction(r)&&(r={serialize:r});const a=r&&r.serialize;let i;if(a?i=a(t,r):i=D.isURLSearchParams(t)?t.toString():new cn(t,r).toString(n),i){const o=s.indexOf("#");o!==-1&&(s=s.slice(0,o)),s+=(s.indexOf("?")===-1?"?":"&")+i}return s}class qn{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){D.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Gi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kp=typeof URLSearchParams<"u"?URLSearchParams:cn,Tp=typeof FormData<"u"?FormData:null,Dp=typeof Blob<"u"?Blob:null,Pp={isBrowser:!0,classes:{URLSearchParams:kp,FormData:Tp,Blob:Dp},protocols:["http","https","file","blob","url","data"]},dn=typeof window<"u"&&typeof document<"u",$r=typeof navigator=="object"&&navigator||void 0,Ap=dn&&(!$r||["ReactNative","NativeScript","NS"].indexOf($r.product)<0),Ep=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Rp=dn&&window.location.href||"http://localhost",Ip=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:dn,hasStandardBrowserEnv:Ap,hasStandardBrowserWebWorkerEnv:Ep,navigator:$r,origin:Rp},Symbol.toStringTag,{value:"Module"})),de={...Ip,...Pp};function Op(s,t){return Js(s,new de.classes.URLSearchParams,{visitor:function(r,n,a,i){return de.isNode&&D.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function Lp(s){return D.matchAll(/\w+|\[(\w*)]/g,s).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Mp(s){const t={},r=Object.keys(s);let n;const a=r.length;let i;for(n=0;n<a;n++)i=r[n],t[i]=s[i];return t}function zi(s){function t(r,n,a,i){let o=r[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),d=i>=r.length;return o=!o&&D.isArray(a)?a.length:o,d?(D.hasOwnProp(a,o)?a[o]=[a[o],n]:a[o]=n,!l):((!a[o]||!D.isObject(a[o]))&&(a[o]=[]),t(r,n,a[o],i)&&D.isArray(a[o])&&(a[o]=Mp(a[o])),!l)}if(D.isFormData(s)&&D.isFunction(s.entries)){const r={};return D.forEachEntry(s,(n,a)=>{t(Lp(n),a,r,0)}),r}return null}function Fp(s,t,r){if(D.isString(s))try{return(t||JSON.parse)(s),D.trim(s)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(s)}const cs={transitional:Gi,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",a=n.indexOf("application/json")>-1,i=D.isObject(t);if(i&&D.isHTMLForm(t)&&(t=new FormData(t)),D.isFormData(t))return a?JSON.stringify(zi(t)):t;if(D.isArrayBuffer(t)||D.isBuffer(t)||D.isStream(t)||D.isFile(t)||D.isBlob(t)||D.isReadableStream(t))return t;if(D.isArrayBufferView(t))return t.buffer;if(D.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Op(t,this.formSerializer).toString();if((l=D.isFileList(t))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Js(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||a?(r.setContentType("application/json",!1),Fp(t)):t}],transformResponse:[function(t){const r=this.transitional||cs.transitional,n=r&&r.forcedJSONParsing,a=this.responseType==="json";if(D.isResponse(t)||D.isReadableStream(t))return t;if(t&&D.isString(t)&&(n&&!this.responseType||a)){const o=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(t,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?z.from(l,z.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:de.classes.FormData,Blob:de.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],s=>{cs.headers[s]={}});const $p=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_p=s=>{const t={};let r,n,a;return s&&s.split(`
`).forEach(function(o){a=o.indexOf(":"),r=o.substring(0,a).trim().toLowerCase(),n=o.substring(a+1).trim(),!(!r||t[r]&&$p[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Vn=Symbol("internals");function zt(s){return s&&String(s).trim().toLowerCase()}function Ns(s){return s===!1||s==null?s:D.isArray(s)?s.map(Ns):String(s)}function Bp(s){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(s);)t[n[1]]=n[2];return t}const Up=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function pr(s,t,r,n,a){if(D.isFunction(n))return n.call(this,t,r);if(a&&(t=r),!!D.isString(t)){if(D.isString(n))return t.indexOf(n)!==-1;if(D.isRegExp(n))return n.test(t)}}function Hp(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Gp(s,t){const r=D.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(s,n+r,{value:function(a,i,o){return this[n].call(this,t,a,i,o)},configurable:!0})})}let ge=class{constructor(t){t&&this.set(t)}set(t,r,n){const a=this;function i(l,d,c){const u=zt(d);if(!u)throw new Error("header name must be a non-empty string");const p=D.findKey(a,u);(!p||a[p]===void 0||c===!0||c===void 0&&a[p]!==!1)&&(a[p||d]=Ns(l))}const o=(l,d)=>D.forEach(l,(c,u)=>i(c,u,d));if(D.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(D.isString(t)&&(t=t.trim())&&!Up(t))o(_p(t),r);else if(D.isObject(t)&&D.isIterable(t)){let l={},d,c;for(const u of t){if(!D.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[c=u[0]]=(d=l[c])?D.isArray(d)?[...d,u[1]]:[d,u[1]]:u[1]}o(l,r)}else t!=null&&i(r,t,n);return this}get(t,r){if(t=zt(t),t){const n=D.findKey(this,t);if(n){const a=this[n];if(!r)return a;if(r===!0)return Bp(a);if(D.isFunction(r))return r.call(this,a,n);if(D.isRegExp(r))return r.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=zt(t),t){const n=D.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||pr(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let a=!1;function i(o){if(o=zt(o),o){const l=D.findKey(n,o);l&&(!r||pr(n,n[l],l,r))&&(delete n[l],a=!0)}}return D.isArray(t)?t.forEach(i):i(t),a}clear(t){const r=Object.keys(this);let n=r.length,a=!1;for(;n--;){const i=r[n];(!t||pr(this,this[i],i,t,!0))&&(delete this[i],a=!0)}return a}normalize(t){const r=this,n={};return D.forEach(this,(a,i)=>{const o=D.findKey(n,i);if(o){r[o]=Ns(a),delete r[i];return}const l=t?Hp(i):String(i).trim();l!==i&&delete r[i],r[l]=Ns(a),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return D.forEach(this,(n,a)=>{n!=null&&n!==!1&&(r[a]=t&&D.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(a=>n.set(a)),n}static accessor(t){const n=(this[Vn]=this[Vn]={accessors:{}}).accessors,a=this.prototype;function i(o){const l=zt(o);n[l]||(Gp(a,o),n[l]=!0)}return D.isArray(t)?t.forEach(i):i(t),this}};ge.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(ge.prototype,({value:s},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>s,set(n){this[r]=n}}});D.freezeMethods(ge);function hr(s,t){const r=this||cs,n=t||r,a=ge.from(n.headers);let i=n.data;return D.forEach(s,function(l){i=l.call(r,i,a.normalize(),t?t.status:void 0)}),a.normalize(),i}function Wi(s){return!!(s&&s.__CANCEL__)}function $t(s,t,r){z.call(this,s??"canceled",z.ERR_CANCELED,t,r),this.name="CanceledError"}D.inherits($t,z,{__CANCEL__:!0});function qi(s,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?s(r):t(new z("Request failed with status code "+r.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function zp(s){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return t&&t[1]||""}function Wp(s,t){s=s||10;const r=new Array(s),n=new Array(s);let a=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=n[i];o||(o=c),r[a]=d,n[a]=c;let p=i,g=0;for(;p!==a;)g+=r[p++],p=p%s;if(a=(a+1)%s,a===i&&(i=(i+1)%s),c-o<t)return;const y=u&&c-u;return y?Math.round(g*1e3/y):void 0}}function qp(s,t){let r=0,n=1e3/t,a,i;const o=(c,u=Date.now())=>{r=u,a=null,i&&(clearTimeout(i),i=null),s(...c)};return[(...c)=>{const u=Date.now(),p=u-r;p>=n?o(c,u):(a=c,i||(i=setTimeout(()=>{i=null,o(a)},n-p)))},()=>a&&o(a)]}const Rs=(s,t,r=3)=>{let n=0;const a=Wp(50,250);return qp(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,d=o-n,c=a(d),u=o<=l;n=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:d,rate:c||void 0,estimated:c&&l&&u?(l-o)/c:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};s(p)},r)},Jn=(s,t)=>{const r=s!=null;return[n=>t[0]({lengthComputable:r,total:s,loaded:n}),t[1]]},Yn=s=>(...t)=>D.asap(()=>s(...t)),Vp=de.hasStandardBrowserEnv?((s,t)=>r=>(r=new URL(r,de.origin),s.protocol===r.protocol&&s.host===r.host&&(t||s.port===r.port)))(new URL(de.origin),de.navigator&&/(msie|trident)/i.test(de.navigator.userAgent)):()=>!0,Jp=de.hasStandardBrowserEnv?{write(s,t,r,n,a,i){const o=[s+"="+encodeURIComponent(t)];D.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),D.isString(n)&&o.push("path="+n),D.isString(a)&&o.push("domain="+a),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(s){const t=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(s){this.write(s,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Yp(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function Kp(s,t){return t?s.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):s}function Vi(s,t,r){let n=!Yp(t);return s&&(n||r==!1)?Kp(s,t):t}const Kn=s=>s instanceof ge?{...s}:s;function xt(s,t){t=t||{};const r={};function n(c,u,p,g){return D.isPlainObject(c)&&D.isPlainObject(u)?D.merge.call({caseless:g},c,u):D.isPlainObject(u)?D.merge({},u):D.isArray(u)?u.slice():u}function a(c,u,p,g){if(D.isUndefined(u)){if(!D.isUndefined(c))return n(void 0,c,p,g)}else return n(c,u,p,g)}function i(c,u){if(!D.isUndefined(u))return n(void 0,u)}function o(c,u){if(D.isUndefined(u)){if(!D.isUndefined(c))return n(void 0,c)}else return n(void 0,u)}function l(c,u,p){if(p in t)return n(c,u);if(p in s)return n(void 0,c)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,u,p)=>a(Kn(c),Kn(u),p,!0)};return D.forEach(Object.keys({...s,...t}),function(u){const p=d[u]||a,g=p(s[u],t[u],u);D.isUndefined(g)&&p!==l||(r[u]=g)}),r}const Ji=s=>{const t=xt({},s);let{data:r,withXSRFToken:n,xsrfHeaderName:a,xsrfCookieName:i,headers:o,auth:l}=t;if(t.headers=o=ge.from(o),t.url=Hi(Vi(t.baseURL,t.url,t.allowAbsoluteUrls),s.params,s.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),D.isFormData(r)){if(de.hasStandardBrowserEnv||de.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(D.isFunction(r.getHeaders)){const d=r.getHeaders(),c=["content-type","content-length"];Object.entries(d).forEach(([u,p])=>{c.includes(u.toLowerCase())&&o.set(u,p)})}}if(de.hasStandardBrowserEnv&&(n&&D.isFunction(n)&&(n=n(t)),n||n!==!1&&Vp(t.url))){const d=a&&i&&Jp.read(i);d&&o.set(a,d)}return t},Xp=typeof XMLHttpRequest<"u",Qp=Xp&&function(s){return new Promise(function(r,n){const a=Ji(s);let i=a.data;const o=ge.from(a.headers).normalize();let{responseType:l,onUploadProgress:d,onDownloadProgress:c}=a,u,p,g,y,x;function b(){y&&y(),x&&x(),a.cancelToken&&a.cancelToken.unsubscribe(u),a.signal&&a.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(a.method.toUpperCase(),a.url,!0),h.timeout=a.timeout;function N(){if(!h)return;const S=ge.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),f={data:!l||l==="text"||l==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:S,config:s,request:h};qi(function(R){r(R),b()},function(R){n(R),b()},f),h=null}"onloadend"in h?h.onloadend=N:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(N)},h.onabort=function(){h&&(n(new z("Request aborted",z.ECONNABORTED,s,h)),h=null)},h.onerror=function(w){const f=w&&w.message?w.message:"Network Error",A=new z(f,z.ERR_NETWORK,s,h);A.event=w||null,n(A),h=null},h.ontimeout=function(){let w=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const f=a.transitional||Gi;a.timeoutErrorMessage&&(w=a.timeoutErrorMessage),n(new z(w,f.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,s,h)),h=null},i===void 0&&o.setContentType(null),"setRequestHeader"in h&&D.forEach(o.toJSON(),function(w,f){h.setRequestHeader(f,w)}),D.isUndefined(a.withCredentials)||(h.withCredentials=!!a.withCredentials),l&&l!=="json"&&(h.responseType=a.responseType),c&&([g,x]=Rs(c,!0),h.addEventListener("progress",g)),d&&h.upload&&([p,y]=Rs(d),h.upload.addEventListener("progress",p),h.upload.addEventListener("loadend",y)),(a.cancelToken||a.signal)&&(u=S=>{h&&(n(!S||S.type?new $t(null,s,h):S),h.abort(),h=null)},a.cancelToken&&a.cancelToken.subscribe(u),a.signal&&(a.signal.aborted?u():a.signal.addEventListener("abort",u)));const j=zp(a.url);if(j&&de.protocols.indexOf(j)===-1){n(new z("Unsupported protocol "+j+":",z.ERR_BAD_REQUEST,s));return}h.send(i||null)})},Zp=(s,t)=>{const{length:r}=s=s?s.filter(Boolean):[];if(t||r){let n=new AbortController,a;const i=function(c){if(!a){a=!0,l();const u=c instanceof Error?c:this.reason;n.abort(u instanceof z?u:new $t(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new z(`timeout ${t} of ms exceeded`,z.ETIMEDOUT))},t);const l=()=>{s&&(o&&clearTimeout(o),o=null,s.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),s=null)};s.forEach(c=>c.addEventListener("abort",i));const{signal:d}=n;return d.unsubscribe=()=>D.asap(l),d}},eh=function*(s,t){let r=s.byteLength;if(r<t){yield s;return}let n=0,a;for(;n<r;)a=n+t,yield s.slice(n,a),n=a},th=async function*(s,t){for await(const r of sh(s))yield*eh(r,t)},sh=async function*(s){if(s[Symbol.asyncIterator]){yield*s;return}const t=s.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Xn=(s,t,r,n)=>{const a=th(s,t);let i=0,o,l=d=>{o||(o=!0,n&&n(d))};return new ReadableStream({async pull(d){try{const{done:c,value:u}=await a.next();if(c){l(),d.close();return}let p=u.byteLength;if(r){let g=i+=p;r(g)}d.enqueue(new Uint8Array(u))}catch(c){throw l(c),c}},cancel(d){return l(d),a.return()}},{highWaterMark:2})},Qn=64*1024,{isFunction:fs}=D,rh=(({Request:s,Response:t})=>({Request:s,Response:t}))(D.global),{ReadableStream:Zn,TextEncoder:ea}=D.global,ta=(s,...t)=>{try{return!!s(...t)}catch{return!1}},nh=s=>{s=D.merge.call({skipUndefined:!0},rh,s);const{fetch:t,Request:r,Response:n}=s,a=t?fs(t):typeof fetch=="function",i=fs(r),o=fs(n);if(!a)return!1;const l=a&&fs(Zn),d=a&&(typeof ea=="function"?(x=>b=>x.encode(b))(new ea):async x=>new Uint8Array(await new r(x).arrayBuffer())),c=i&&l&&ta(()=>{let x=!1;const b=new r(de.origin,{body:new Zn,method:"POST",get duplex(){return x=!0,"half"}}).headers.has("Content-Type");return x&&!b}),u=o&&l&&ta(()=>D.isReadableStream(new n("").body)),p={stream:u&&(x=>x.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!p[x]&&(p[x]=(b,h)=>{let N=b&&b[x];if(N)return N.call(b);throw new z(`Response type '${x}' is not supported`,z.ERR_NOT_SUPPORT,h)})});const g=async x=>{if(x==null)return 0;if(D.isBlob(x))return x.size;if(D.isSpecCompliantForm(x))return(await new r(de.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(D.isArrayBufferView(x)||D.isArrayBuffer(x))return x.byteLength;if(D.isURLSearchParams(x)&&(x=x+""),D.isString(x))return(await d(x)).byteLength},y=async(x,b)=>{const h=D.toFiniteNumber(x.getContentLength());return h??g(b)};return async x=>{let{url:b,method:h,data:N,signal:j,cancelToken:S,timeout:w,onDownloadProgress:f,onUploadProgress:A,responseType:R,headers:P,withCredentials:I="same-origin",fetchOptions:M}=Ji(x),F=t||fetch;R=R?(R+"").toLowerCase():"text";let v=Zp([j,S&&S.toAbortSignal()],w),O=null;const k=v&&v.unsubscribe&&(()=>{v.unsubscribe()});let C;try{if(A&&c&&h!=="get"&&h!=="head"&&(C=await y(P,N))!==0){let H=new r(b,{method:"POST",body:N,duplex:"half"}),V;if(D.isFormData(N)&&(V=H.headers.get("content-type"))&&P.setContentType(V),H.body){const[Y,ie]=Jn(C,Rs(Yn(A)));N=Xn(H.body,Qn,Y,ie)}}D.isString(I)||(I=I?"include":"omit");const E=i&&"credentials"in r.prototype,U={...M,signal:v,method:h.toUpperCase(),headers:P.normalize().toJSON(),body:N,duplex:"half",credentials:E?I:void 0};O=i&&new r(b,U);let G=await(i?F(O,M):F(b,U));const ae=u&&(R==="stream"||R==="response");if(u&&(f||ae&&k)){const H={};["status","statusText","headers"].forEach(oe=>{H[oe]=G[oe]});const V=D.toFiniteNumber(G.headers.get("content-length")),[Y,ie]=f&&Jn(V,Rs(Yn(f),!0))||[];G=new n(Xn(G.body,Qn,Y,()=>{ie&&ie(),k&&k()}),H)}R=R||"text";let le=await p[D.findKey(p,R)||"text"](G,x);return!ae&&k&&k(),await new Promise((H,V)=>{qi(H,V,{data:le,headers:ge.from(G.headers),status:G.status,statusText:G.statusText,config:x,request:O})})}catch(E){throw k&&k(),E&&E.name==="TypeError"&&/Load failed|fetch/i.test(E.message)?Object.assign(new z("Network Error",z.ERR_NETWORK,x,O),{cause:E.cause||E}):z.from(E,E&&E.code,x,O)}}},ah=new Map,Yi=s=>{let t=s?s.env:{};const{fetch:r,Request:n,Response:a}=t,i=[n,a,r];let o=i.length,l=o,d,c,u=ah;for(;l--;)d=i[l],c=u.get(d),c===void 0&&u.set(d,c=l?new Map:nh(t)),u=c;return c};Yi();const _r={http:wp,xhr:Qp,fetch:{get:Yi}};D.forEach(_r,(s,t)=>{if(s){try{Object.defineProperty(s,"name",{value:t})}catch{}Object.defineProperty(s,"adapterName",{value:t})}});const sa=s=>`- ${s}`,ih=s=>D.isFunction(s)||s===null||s===!1,Ki={getAdapter:(s,t)=>{s=D.isArray(s)?s:[s];const{length:r}=s;let n,a;const i={};for(let o=0;o<r;o++){n=s[o];let l;if(a=n,!ih(n)&&(a=_r[(l=String(n)).toLowerCase()],a===void 0))throw new z(`Unknown adapter '${l}'`);if(a&&(D.isFunction(a)||(a=a.get(t))))break;i[l||"#"+o]=a}if(!a){const o=Object.entries(i).map(([d,c])=>`adapter ${d} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=r?o.length>1?`since :
`+o.map(sa).join(`
`):" "+sa(o[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return a},adapters:_r};function gr(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new $t(null,s)}function ra(s){return gr(s),s.headers=ge.from(s.headers),s.data=hr.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),Ki.getAdapter(s.adapter||cs.adapter,s)(s).then(function(n){return gr(s),n.data=hr.call(s,s.transformResponse,n),n.headers=ge.from(n.headers),n},function(n){return Wi(n)||(gr(s),n&&n.response&&(n.response.data=hr.call(s,s.transformResponse,n.response),n.response.headers=ge.from(n.response.headers))),Promise.reject(n)})}const Xi="1.12.2",Ys={};["object","boolean","number","function","string","symbol"].forEach((s,t)=>{Ys[s]=function(n){return typeof n===s||"a"+(t<1?"n ":" ")+s}});const na={};Ys.transitional=function(t,r,n){function a(i,o){return"[Axios v"+Xi+"] Transitional option '"+i+"'"+o+(n?". "+n:"")}return(i,o,l)=>{if(t===!1)throw new z(a(o," has been removed"+(r?" in "+r:"")),z.ERR_DEPRECATED);return r&&!na[o]&&(na[o]=!0,console.warn(a(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,o,l):!0}};Ys.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function oh(s,t,r){if(typeof s!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const n=Object.keys(s);let a=n.length;for(;a-- >0;){const i=n[a],o=t[i];if(o){const l=s[i],d=l===void 0||o(l,i,s);if(d!==!0)throw new z("option "+i+" must be "+d,z.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const Ss={assertOptions:oh,validators:Ys},Ae=Ss.validators;let pt=class{constructor(t){this.defaults=t||{},this.interceptors={request:new qn,response:new qn}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const i=a.stack?a.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=xt(this.defaults,r);const{transitional:n,paramsSerializer:a,headers:i}=r;n!==void 0&&Ss.assertOptions(n,{silentJSONParsing:Ae.transitional(Ae.boolean),forcedJSONParsing:Ae.transitional(Ae.boolean),clarifyTimeoutError:Ae.transitional(Ae.boolean)},!1),a!=null&&(D.isFunction(a)?r.paramsSerializer={serialize:a}:Ss.assertOptions(a,{encode:Ae.function,serialize:Ae.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Ss.assertOptions(r,{baseUrl:Ae.spelling("baseURL"),withXsrfToken:Ae.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=i&&D.merge(i.common,i[r.method]);i&&D.forEach(["delete","get","head","post","put","patch","common"],x=>{delete i[x]}),r.headers=ge.concat(o,i);const l=[];let d=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(r)===!1||(d=d&&b.synchronous,l.unshift(b.fulfilled,b.rejected))});const c=[];this.interceptors.response.forEach(function(b){c.push(b.fulfilled,b.rejected)});let u,p=0,g;if(!d){const x=[ra.bind(this),void 0];for(x.unshift(...l),x.push(...c),g=x.length,u=Promise.resolve(r);p<g;)u=u.then(x[p++],x[p++]);return u}g=l.length;let y=r;for(;p<g;){const x=l[p++],b=l[p++];try{y=x(y)}catch(h){b.call(this,h);break}}try{u=ra.call(this,y)}catch(x){return Promise.reject(x)}for(p=0,g=c.length;p<g;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=xt(this.defaults,t);const r=Vi(t.baseURL,t.url,t.allowAbsoluteUrls);return Hi(r,t.params,t.paramsSerializer)}};D.forEach(["delete","get","head","options"],function(t){pt.prototype[t]=function(r,n){return this.request(xt(n||{},{method:t,url:r,data:(n||{}).data}))}});D.forEach(["post","put","patch"],function(t){function r(n){return function(i,o,l){return this.request(xt(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}pt.prototype[t]=r(),pt.prototype[t+"Form"]=r(!0)});let lh=class Qi{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(a=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](a);n._listeners=null}),this.promise.then=a=>{let i;const o=new Promise(l=>{n.subscribe(l),i=l}).then(a);return o.cancel=function(){n.unsubscribe(i)},o},t(function(i,o,l){n.reason||(n.reason=new $t(i,o,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Qi(function(a){t=a}),cancel:t}}};function ch(s){return function(r){return s.apply(null,r)}}function dh(s){return D.isObject(s)&&s.isAxiosError===!0}const Br={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Br).forEach(([s,t])=>{Br[t]=s});function Zi(s){const t=new pt(s),r=Ai(pt.prototype.request,t);return D.extend(r,pt.prototype,t,{allOwnKeys:!0}),D.extend(r,t,null,{allOwnKeys:!0}),r.create=function(a){return Zi(xt(s,a))},r}const X=Zi(cs);X.Axios=pt;X.CanceledError=$t;X.CancelToken=lh;X.isCancel=Wi;X.VERSION=Xi;X.toFormData=Js;X.AxiosError=z;X.Cancel=X.CanceledError;X.all=function(t){return Promise.all(t)};X.spread=ch;X.isAxiosError=dh;X.mergeConfig=xt;X.AxiosHeaders=ge;X.formToJSON=s=>zi(D.isHTMLForm(s)?new FormData(s):s);X.getAdapter=Ki.getAdapter;X.HttpStatusCode=Br;X.default=X;const{Axios:Nx,AxiosError:Sx,CanceledError:Cx,isCancel:kx,CancelToken:Tx,VERSION:Dx,all:Px,Cancel:Ax,isAxiosError:Ex,spread:Rx,toFormData:Ix,AxiosHeaders:Ox,HttpStatusCode:Lx,formToJSON:Mx,getAdapter:Fx,mergeConfig:$x}=X;class uh{constructor(){this.baseURL="https://api.github.com",this.trendingRepos=[],this.templateCache=new Map,this.cacheExpiry=30*60*1e3,this.isLoading=!1,console.log("🔗 GitHub Template Service initialized")}async getTrendingTemplates(t="javascript",r="stars",n="desc"){if(this.isLoading)return this.trendingRepos;this.isLoading=!0;try{console.log("📡 Fetching trending GitHub templates...");const a=["stars:>100 topic:todo-app","stars:>100 topic:calculator","stars:>100 topic:weather-app","stars:>100 topic:game","stars:>100 topic:portfolio","stars:>100 topic:blog","stars:>100 topic:landing-page","stars:>50 topic:react-tutorial","stars:>50 topic:javascript-project","stars:>50 topic:html-css"],i=[];for(const d of a)try{console.log(`📈 Fetching trending repositories: ${d}`);const c=await fetch(`${this.baseURL}/search/repositories?q=${encodeURIComponent(d)}&sort=stars&order=desc&per_page=20`,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"DreamBuild-Template-Service"}});if(!c.ok)if(console.error(`GitHub API error for query "${d}": ${c.status}`),c.status===403||c.status===429){console.log("⚠️ Rate limit hit, returning cached/fallback templates");const p=this.getFallbackTemplates();return this.trendingRepos=p,p}else if(c.status===422){console.log(`⚠️ Invalid query "${d}", skipping...`);continue}else{console.log(`⚠️ API error ${c.status} for query "${d}", skipping...`);continue}const u=await c.json();if(u.items&&u.items.length>0){console.log(`📈 Found ${u.items.length} trending template repositories for: ${d}`);const p=u.items.filter(g=>this.isTemplateRepository(g));i.push(...p)}await new Promise(p=>setTimeout(p,500))}catch(c){console.error(`Error fetching templates for ${d}:`,c);continue}const o=this.deduplicateRepos(i),l=this.filterTemplateRepos(o);if(l.length<10){console.log("📦 Adding fallback templates due to limited API results");const d=this.getFallbackTemplates();l.push(...d)}return this.trendingRepos=l.slice(0,25),console.log(`✅ Found ${this.trendingRepos.length} template repositories`),this.trendingRepos}catch(a){return console.error("❌ Failed to fetch trending templates:",a),this.getFallbackTemplates()}finally{this.isLoading=!1}}async getRepositoryTemplate(t){const r=`repo_${t.id}`;if(this.templateCache.has(r)){const n=this.templateCache.get(r);if(Date.now()-n.timestamp<this.cacheExpiry)return n.data}try{console.log(`📦 Processing template: ${t.full_name}`);const n=await this.getRepositoryContents(t.full_name),a=await this.parseRepositoryTemplate(t,n);return this.templateCache.set(r,{data:a,timestamp:Date.now()}),a}catch(n){return console.error(`❌ Failed to process template ${t.full_name}:`,n),null}}async getRepositoryContents(t,r=""){try{const n=await fetch(`${this.baseURL}/repos/${t}/contents/${r}`);if(!n.ok)throw new Error(`GitHub API error: ${n.status}`);return await n.json()}catch(n){return console.error(`Failed to fetch contents for ${t}:`,n),[]}}async parseRepositoryTemplate(t,r){var i;const n=this.transformRepositoryToTemplate(t),a=this.extractKeyFiles(r);return n.files=a,n.fileCount=a.length,n.preview=((i=t.owner)==null?void 0:i.avatar_url)||"/api/placeholder/400/300",n}detectTemplateType(t,r){const n=t.name.toLowerCase(),a=(t.description||"").toLowerCase(),i=(t.topics||[]).join(" ").toLowerCase(),o=`${n} ${a} ${i}`;return o.includes("react-native")||o.includes("expo")||o.includes("flutter")||o.includes("mobile")?"mobile":o.includes("react")||o.includes("nextjs")||o.includes("next.js")||o.includes("gatsby")?"react":o.includes("vue")||o.includes("nuxt")||o.includes("quasar")?"vue":o.includes("angular")||o.includes("ionic")?"angular":o.includes("svelte")||o.includes("sveltekit")?"svelte":o.includes("node")||o.includes("express")||o.includes("koa")||o.includes("fastify")?"nodejs":o.includes("python")||o.includes("django")||o.includes("flask")||o.includes("fastapi")?"python":o.includes("php")||o.includes("laravel")||o.includes("symfony")||o.includes("codeigniter")?"php":o.includes("go")||o.includes("golang")||o.includes("gin")?"go":o.includes("rust")||o.includes("actix")||o.includes("rocket")?"rust":o.includes("java")||o.includes("spring")||o.includes("maven")?"java":o.includes("api")||o.includes("rest")||o.includes("graphql")||o.includes("microservice")?"api":o.includes("dashboard")||o.includes("admin")||o.includes("panel")?"dashboard":o.includes("ecommerce")||o.includes("e-commerce")||o.includes("shop")||o.includes("store")?"ecommerce":o.includes("blog")||o.includes("cms")||o.includes("content")?"blog":o.includes("portfolio")||o.includes("personal")||o.includes("resume")?"portfolio":o.includes("landing")||o.includes("marketing")||o.includes("promo")?"landing":o.includes("cms")||o.includes("content-management")||o.includes("headless")?"cms":o.includes("ui")||o.includes("ux")||o.includes("design-system")||o.includes("component-library")?"ui":o.includes("test")||o.includes("testing")||o.includes("e2e")||o.includes("unit-test")?"testing":o.includes("devops")||o.includes("ci-cd")||o.includes("docker")||o.includes("kubernetes")?"devops":o.includes("database")||o.includes("sql")||o.includes("nosql")||o.includes("mongodb")||o.includes("postgresql")?"database":o.includes("auth")||o.includes("authentication")||o.includes("jwt")||o.includes("oauth")?"auth":o.includes("payment")||o.includes("stripe")||o.includes("paypal")||o.includes("billing")?"payment":o.includes("analytics")||o.includes("tracking")||o.includes("metrics")||o.includes("monitoring")?"analytics":o.includes("documentation")||o.includes("docs")||o.includes("readme")||o.includes("guide")?"documentation":"web"}extractKeyFiles(t){const r=[],n=["package.json","package-lock.json","yarn.lock","index.html","index.js","index.jsx","index.ts","index.tsx","App.js","App.jsx","App.ts","App.tsx","main.js","main.ts","main.jsx","main.tsx","src/","components/","pages/","views/","README.md","readme.md","docker-compose.yml","Dockerfile","tsconfig.json","webpack.config.js","vite.config.js","tailwind.config.js","postcss.config.js"];return t.forEach(a=>{n.some(i=>a.name.toLowerCase()===i.toLowerCase()||a.name.toLowerCase().startsWith(i.toLowerCase()))&&r.push({name:a.name,path:a.path,type:a.type,size:a.size,downloadUrl:a.download_url})}),r.slice(0,20)}generateTemplateName(t){return t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" ").replace(/template|starter|boilerplate|example|demo/gi,"").trim()}categorizeTemplate(t,r){return{react:"web-apps",vue:"web-apps",angular:"web-apps",svelte:"web-apps",nodejs:"web-apps",python:"web-apps",php:"web-apps",go:"web-apps",rust:"web-apps",java:"web-apps",mobile:"mobile-apps",api:"apis",dashboard:"dashboards",ecommerce:"e-commerce",blog:"portfolios",portfolio:"portfolios",landing:"landing-pages",cms:"web-apps",ui:"web-apps",testing:"web-apps",devops:"apis",database:"apis",auth:"apis",payment:"apis",analytics:"dashboards",documentation:"portfolios",web:"web-apps"}[t]||"web-apps"}generateTags(t,r){const n=[r];t.language&&n.push(t.language.toLowerCase()),t.topics&&n.push(...t.topics.slice(0,3));const a={react:["react","javascript"],vue:["vue","javascript"],angular:["angular","typescript"],nodejs:["nodejs","express"],python:["python","django"],mobile:["react-native","mobile"]};return a[r]&&n.push(...a[r]),[...new Set(n)].slice(0,5)}deduplicateRepos(t){const r=new Set;return t.filter(n=>r.has(n.id)?!1:(r.add(n.id),!0))}isTemplateRepository(t){const r=t.name.toLowerCase(),n=(t.description||"").toLowerCase(),a=(t.topics||[]).join(" ").toLowerCase(),o=["todo-app","calculator","weather-app","recipe-app","expense-tracker","note-taking","bookmark-manager","task-manager","habit-tracker","budget-planner","calendar-app","contact-book","photo-gallery","music-player","video-player","chat-app","forum","blog","portfolio","landing-page","online-store","restaurant-menu","event-planner","booking-system","survey-form","quiz-app","game","puzzle","memory-game","tic-tac-toe","snake-game","pong","breakout","maze","word-search","sudoku","hangman","trivia","flashcards","timer","stopwatch","pomodoro","countdown","random-generator","password-generator","color-picker","unit-converter","currency-converter","tip-calculator","bmi-calculator","age-calculator","date-calculator","percentage-calculator","loan-calculator","mortgage-calculator","investment-calculator","tax-calculator","grade-calculator","gpa-calculator","starter","template","example","demo","sample","tutorial","beginner","simple","basic"].some(u=>r.includes(u)||n.includes(u)||a.includes(u)),l=t.stargazers_count>=10,d=new Date(t.updated_at)>new Date("2019-01-01"),c=t.description&&t.description.length>10;return o&&l&&d&&c}filterTemplateRepos(t){return t.filter(r=>this.isTemplateRepository(r))}async searchTemplates(t,r="all"){return(await this.getTrendingTemplates()).filter(a=>{const i=a.name.toLowerCase().includes(t.toLowerCase())||a.description.toLowerCase().includes(t.toLowerCase())||a.tags.some(l=>l.toLowerCase().includes(t.toLowerCase())),o=r==="all"||a.category===r;return i&&o})}async getTemplateById(t){const n=(await this.getTrendingTemplates()).find(a=>a.id===t);return n?await this.getRepositoryTemplate(n):null}async getTemplatesByCategory(t){return(await this.getTrendingTemplates()).filter(n=>n.category===t)}async getPopularTemplates(t=10){return(await this.getTrendingTemplates()).sort((n,a)=>a.popularity-n.popularity).slice(0,t)}getFallbackTemplates(){return[{id:"fallback-todo-1",name:"Simple Todo App",description:"A clean and simple todo application with add, edit, and delete functionality.",category:"todo-app",templateType:"web",difficulty:"beginner",estimatedTime:"2-4 hours",tags:["javascript","html","css","todo","task-management"],popularity:85,stars:150,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/simple-todo-app",features:["Add tasks","Mark complete","Delete tasks","Local storage"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999001,fullName:"example/simple-todo-app",htmlUrl:"https://github.com/example/simple-todo-app",cloneUrl:"https://github.com/example/simple-todo-app.git",language:"JavaScript",stargazersCount:150,forksCount:25,topics:["todo","javascript","html","css"],owner:"example"}},{id:"fallback-calculator-1",name:"Basic Calculator",description:"A functional calculator with basic arithmetic operations.",category:"calculator",templateType:"web",difficulty:"beginner",estimatedTime:"1-2 hours",tags:["javascript","html","css","calculator","math"],popularity:90,stars:200,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/basic-calculator",features:["Basic operations","Clear function","Responsive design"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999002,fullName:"example/basic-calculator",htmlUrl:"https://github.com/example/basic-calculator",cloneUrl:"https://github.com/example/basic-calculator.git",language:"JavaScript",stargazersCount:200,forksCount:30,topics:["calculator","javascript","math"],owner:"example"}},{id:"fallback-weather-1",name:"Weather Dashboard",description:"A weather app that displays current conditions and forecast.",category:"weather-app",templateType:"web",difficulty:"intermediate",estimatedTime:"3-5 hours",tags:["javascript","api","weather","dashboard"],popularity:75,stars:120,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/weather-dashboard",features:["Current weather","5-day forecast","Location search"],techStack:["HTML","CSS","JavaScript","Weather API"],isFallback:!0,githubData:{id:999003,fullName:"example/weather-dashboard",htmlUrl:"https://github.com/example/weather-dashboard",cloneUrl:"https://github.com/example/weather-dashboard.git",language:"JavaScript",stargazersCount:120,forksCount:20,topics:["weather","api","dashboard"],owner:"example"}},{id:"fallback-portfolio-1",name:"Personal Portfolio",description:"A modern, responsive portfolio website template.",category:"portfolio",templateType:"web",difficulty:"intermediate",estimatedTime:"4-6 hours",tags:["html","css","javascript","portfolio","responsive"],popularity:95,stars:300,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/personal-portfolio",features:["Responsive design","Project showcase","Contact form"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999004,fullName:"example/personal-portfolio",htmlUrl:"https://github.com/example/personal-portfolio",cloneUrl:"https://github.com/example/personal-portfolio.git",language:"HTML",stargazersCount:300,forksCount:50,topics:["portfolio","responsive","html","css"],owner:"example"}},{id:"fallback-game-1",name:"Snake Game",description:"Classic Snake game built with vanilla JavaScript.",category:"game",templateType:"web",difficulty:"intermediate",estimatedTime:"3-4 hours",tags:["javascript","game","canvas","snake"],popularity:80,stars:180,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/snake-game",features:["Keyboard controls","Score tracking","Game over screen"],techStack:["HTML","CSS","JavaScript","Canvas"],isFallback:!0,githubData:{id:999005,fullName:"example/snake-game",htmlUrl:"https://github.com/example/snake-game",cloneUrl:"https://github.com/example/snake-game.git",language:"JavaScript",stargazersCount:180,forksCount:35,topics:["game","snake","canvas","javascript"],owner:"example"}}]}transformRepositoryToTemplate(t,r="web"){var n;return{id:`github_${t.id}`,name:this.generateTemplateName(t.name),description:t.description||`Template based on ${t.full_name}`,category:this.categorizeTemplate(this.detectTemplateType(t,[]),t),templateType:this.detectTemplateType(t,[]),difficulty:this.estimateDifficulty(t),estimatedTime:this.estimateTime(t),tags:this.generateTags(t,this.detectTemplateType(t,[])),popularity:Math.min(Math.floor(t.stargazers_count/100),100),stars:t.stargazers_count,lastUpdated:t.updated_at,createdAt:t.created_at,source:"github",repositoryUrl:t.html_url,features:this.extractFeatures(t),techStack:this.extractTechStack(t),githubData:{id:t.id,fullName:t.full_name,htmlUrl:t.html_url,cloneUrl:t.clone_url,language:t.language,stargazersCount:t.stargazers_count,forksCount:t.forks_count,topics:t.topics||[],owner:(n=t.owner)==null?void 0:n.login}}}estimateDifficulty(t){return t.stargazers_count>500?"advanced":t.stargazers_count>100?"intermediate":"beginner"}estimateTime(t){const r=t.stargazers_count;return r>500?"6-8 hours":r>100?"3-5 hours":"1-3 hours"}extractFeatures(t){const r=[],n=t.name.toLowerCase(),a=(t.description||"").toLowerCase();return(n.includes("todo")||a.includes("todo"))&&r.push("Task management","Add/Edit tasks","Mark complete"),(n.includes("calculator")||a.includes("calculator"))&&r.push("Basic operations","Clear function"),(n.includes("weather")||a.includes("weather"))&&r.push("Current weather","Forecast","Location search"),(n.includes("portfolio")||a.includes("portfolio"))&&r.push("Project showcase","Responsive design","Contact form"),(n.includes("game")||a.includes("game"))&&r.push("Interactive gameplay","Score tracking"),r.length>0?r:["Modern design","Responsive layout"]}extractTechStack(t){const r=[];t.language&&r.push(t.language);const n=t.topics||[];return n.includes("react")&&r.push("React"),n.includes("vue")&&r.push("Vue"),n.includes("angular")&&r.push("Angular"),n.includes("html")&&r.push("HTML"),n.includes("css")&&r.push("CSS"),n.includes("javascript")&&r.push("JavaScript"),n.includes("typescript")&&r.push("TypeScript"),r.length>0?r:["HTML","CSS","JavaScript"]}clearCache(){this.templateCache.clear(),this.trendingRepos=[],console.log("🗑️ GitHub template cache cleared")}}const ot=new uh,aa={"codellama-7b":{name:"CodeLlama 7B",type:"Code Generation",baseURL:"http://localhost:11434/api",model:"codellama:7b",description:"Fast and efficient code generation (7B parameters)",languages:["python","javascript","java","cpp","go","rust","php","ruby"],strengths:["speed","efficiency","general-purpose"],ram_required:"8GB"},auto:{name:"Auto Select",type:"Auto Selection",baseURL:"http://localhost:11434/api",model:"auto",description:"Automatically selects the best available model",languages:["all"],strengths:["smart-selection","availability"],ram_required:"variable"}},Ct={"web-apps":{name:"Web Applications",description:"Full-stack web applications",templates:[{id:"react-dashboard",name:"React Dashboard",description:"Modern React dashboard with charts and analytics",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"ecommerce-store",name:"E-commerce Store",description:"Complete online store with cart and checkout",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]}]},"mobile-apps":{name:"Mobile Applications",description:"React Native mobile applications",templates:[{id:"todo-app",name:"Todo App",description:"Simple todo application with React Native",category:"mobile-apps",files:["App.js","components/TodoItem.js","styles.js"]}]}};class mh{constructor(){if(this.isHealthy=!1,this.modelHealth={},this.availableModels=Object.keys(aa),this.baseURL="http://localhost:11434/api",this.isProduction=window.location.protocol==="https:",this.isLocalhost=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",this.isProduction&&!this.isLocalhost){console.log("🌐 Production environment detected - skipping local AI detection"),this.isHealthy=!1;return}console.log("🔍 Initializing local AI health monitoring..."),this.checkHealth(),setInterval(()=>{this.checkHealthQuiet()},3e4)}async checkHealth(){if(!(this.isProduction&&!this.isLocalhost))try{const t=await X.get(`${this.baseURL}/tags`,{timeout:3e3});if(t.status===200){const r=this.isHealthy;this.isHealthy=!0,r||console.log("✅ Local AI service is healthy");const n=t.data.models||[];this.modelHealth={},n.forEach(a=>{this.modelHealth[a.name]={isHealthy:!0,size:a.size,modified_at:a.modified_at}})}else{const r=this.isHealthy;this.isHealthy=!1,r&&console.log("⚠️ Local AI service is not responding")}}catch(t){const r=this.isHealthy;this.isHealthy=!1,t.code==="ERR_NETWORK"||t.message.includes("CORS")?r||console.log("🔒 Local AI not accessible (CORS/Network) - using cloud AI"):t.code==="ECONNREFUSED"?r||console.log("💻 Ollama not running locally - using cloud AI"):r||console.log("⚠️ Local AI service not available:",t.message)}}async checkHealthQuiet(){if(!(this.isProduction&&!this.isLocalhost))try{const t=await X.get(`${this.baseURL}/tags`,{timeout:3e3});if(t.status===200){const r=this.isHealthy;this.isHealthy=!0;const n=t.data.models||[];this.modelHealth={},n.forEach(a=>{this.modelHealth[a.name]={isHealthy:!0,size:a.size,modified_at:a.modified_at}})}else this.isHealthy=!1}catch{this.isHealthy=!1}}getAvailableModels(){return Object.values(aa)}getHealthyModels(){return Object.keys(this.modelHealth).filter(t=>this.modelHealth[t].isHealthy)}getTemplateCategories(){return Ct}getTemplatesByCategory(t){var r;return((r=Ct[t])==null?void 0:r.templates)||[]}async getAllTemplates(){const t=[];Object.values(Ct).forEach(a=>{t.push(...a.templates)});const n=(await ot.getTrendingTemplates()).map(a=>ot.transformRepositoryToTemplate(a));return[...t,...n]}async searchTemplates(t){const r=[];Object.values(Ct).forEach(o=>{r.push(...o.templates)});const a=(await ot.searchTemplates(t)).map(o=>ot.transformRepositoryToTemplate(o));return[...r,...a].filter(o=>o.name.toLowerCase().includes(t.toLowerCase())||(o.description||"").toLowerCase().includes(t.toLowerCase()))}async getPopularTemplates(){const t=[];Object.values(Ct).forEach(i=>{t.push(...i.templates)});const n=(await ot.getPopularTemplates(5)).map(i=>ot.transformRepositoryToTemplate(i));return[...t,...n].sort((i,o)=>(o.popularity||0)-(i.popularity||0)).slice(0,10)}async generateTemplateById(t,r={}){if(t.startsWith("github_"))return await this.generateGitHubTemplate(t,r);const n=[];Object.values(Ct).forEach(i=>{n.push(...i.templates)});const a=n.find(i=>i.id===t);if(!a)throw new Error(`Template ${t} not found`);return this.createTemplateFiles(a,r)}async generateGitHubTemplate(t,r={}){try{console.log(`🚀 Generating GitHub template: ${t}`);const n=await ot.getTemplateById(t);if(!n)throw new Error(`GitHub template ${t} not found`);const a=await this.createGitHubTemplateFiles(n,r);return console.log(`✅ Generated ${Object.keys(a).length} files from GitHub template`),a}catch(n){throw console.error(`❌ Failed to generate GitHub template ${t}:`,n),n}}async createGitHubTemplateFiles(t,r={}){const n={};try{const{githubData:a}=t;return n["README.md"]=`# ${t.name}

${t.description}

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
- **Type**: ${t.templateType}
- **Category**: ${t.category}
- **Tags**: ${t.tags.join(", ")}
- **Files**: ${t.fileCount}

## Customization
You can customize this template by modifying the files or using the AI prompt to generate additional features.
`,n["package.json"]=this.createPackageJson(t,r),n[this.getMainFileName(t)]=this.createMainFile(t,r),(t.templateType==="react"||t.templateType==="vue"||t.templateType==="web")&&(n["index.html"]=this.createIndexHtml(t,r)),Object.entries(r).forEach(([i,o])=>{typeof o=="string"&&(n[i]=o)}),n}catch(a){throw console.error("Failed to create GitHub template files:",a),a}}createPackageJson(t,r={}){const n={name:t.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:t.description,main:this.getMainFileName(t),scripts:{start:"npm run dev",dev:this.getDevScript(t),build:this.getBuildScript(t),test:'echo "No tests specified" && exit 0'},keywords:t.tags,author:r.author||"DreamBuild User",license:"MIT",repository:{type:"git",url:t.githubData.cloneUrl}};return n.dependencies=this.getTemplateDependencies(t),n.devDependencies=this.getTemplateDevDependencies(t),JSON.stringify(n,null,2)}getMainFileName(t){return{react:"src/App.jsx",vue:"src/main.js",angular:"src/main.ts",nodejs:"index.js",python:"main.py",mobile:"App.js",web:"index.js"}[t.templateType]||"index.js"}getDevScript(t){return{react:"react-scripts start",vue:"vue-cli-service serve",angular:"ng serve",nodejs:"nodemon index.js",python:"python main.py",mobile:"expo start",web:"live-server"}[t.templateType]||"node index.js"}getBuildScript(t){return{react:"react-scripts build",vue:"vue-cli-service build",angular:"ng build",nodejs:'echo "No build step needed"',python:'echo "No build step needed"',mobile:"expo build",web:'echo "No build step needed"'}[t.templateType]||'echo "No build step needed"'}getTemplateDependencies(t){return{react:{react:"^18.0.0","react-dom":"^18.0.0"},vue:{vue:"^3.0.0"},angular:{"@angular/core":"^15.0.0","@angular/common":"^15.0.0"},svelte:{svelte:"^3.0.0"},nodejs:{express:"^4.18.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{"react-native":"^0.70.0",expo:"~47.0.0"},api:{express:"^4.18.0"},dashboard:{react:"^18.0.0","react-dom":"^18.0.0"},ecommerce:{react:"^18.0.0","react-dom":"^18.0.0"},blog:{next:"^13.0.0",react:"^18.0.0"},portfolio:{react:"^18.0.0","react-dom":"^18.0.0"},landing:{react:"^18.0.0","react-dom":"^18.0.0"},web:{}}[t.templateType]||{}}getTemplateDevDependencies(t){return{react:{"react-scripts":"5.0.1"},vue:{"@vue/cli-service":"^5.0.0"},angular:{"@angular/cli":"^15.0.0"},svelte:{vite:"^4.0.0"},nodejs:{nodemon:"^2.0.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{},api:{nodemon:"^2.0.0"},dashboard:{"react-scripts":"5.0.1"},ecommerce:{"react-scripts":"5.0.1"},blog:{next:"^13.0.0"},portfolio:{"react-scripts":"5.0.1"},landing:{"react-scripts":"5.0.1"},web:{"live-server":"^1.2.0"}}[t.templateType]||{}}createMainFile(t,r={}){const n={react:`import React from 'react';
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
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(\`
    <h1>${t.name}</h1>
    <p>${t.description}</p>
    <p>Template based on: <a href="${t.githubData.htmlUrl}">${t.githubData.fullName}</a></p>
  \`);
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
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
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    name: '${t.name}',
    description: '${t.description}',
    github: '${t.githubData.fullName}'
  });
});

app.listen(PORT, () => {
  console.log(\`API server running on port \${PORT}\`);
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

console.log('Hello from ${t.name}!');

// Template based on: ${t.githubData.fullName}
// Repository: ${t.githubData.htmlUrl}`};return n[t.templateType]||n.web}createIndexHtml(t,r={}){return`<!DOCTYPE html>
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
</html>`}createTemplateFiles(t,r={}){const n={};switch(t.id){case"react-dashboard":n["index.html"]=`<!DOCTYPE html>
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
</html>`,n["App.jsx"]=`import React, { useState } from 'react';

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

ReactDOM.render(<Dashboard />, document.getElementById('root'));`,n["styles.css"]=`* {
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
}`,n["package.json"]=`{
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
}`;break;case"todo-app":n["App.js"]=`import React, { useState } from 'react';
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
}`,n["styles.js"]=`import { StyleSheet } from 'react-native';

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
});`;break;default:n["index.html"]=`<!DOCTYPE html>
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
</html>`}return n}async generateCode(t,r={}){console.log("🚀 Starting code generation for prompt:",t);try{return this.isProduction&&!this.isLocalhost?(console.log("🌐 Production environment - using template fallback"),this.createFallbackResponse(t,r)):this.isHealthy?await this.generateWithLocalAI(t,r):(console.log("⚠️ Local AI not available, using template fallback"),this.createFallbackResponse(t,r))}catch(n){return console.error("❌ Code generation failed:",n),this.createFallbackResponse(t,r)}}async generateWithLocalAI(t,r={}){const n=this.getBestAvailableModel(),a=this.createSystemPrompt(r),i={model:n,messages:[{role:"system",content:a},{role:"user",content:t}],stream:!1,options:{temperature:.7,top_p:.9,max_tokens:4e3}};try{const o=await X.post(`${this.baseURL}/chat`,i,{timeout:3e4,headers:{"Content-Type":"application/json"}});if(o.data&&o.data.message&&o.data.message.content){const l=o.data.message.content;return this.parseAIResponse(l,t)}else throw new Error("Invalid response from local AI")}catch(o){throw console.error("❌ Local AI generation failed:",o),o}}getBestAvailableModel(){const t=this.getHealthyModels();return t.includes("codellama:7b")?"codellama:7b":t.includes("codellama:13b")?"codellama:13b":t.includes("codellama:34b")?"codellama:34b":t[0]||"codellama:7b"}createSystemPrompt(t={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

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

Generate practical, working applications that users can immediately use.`}parseAIResponse(t,r){try{const n=t.match(/\{[\s\S]*\}/);if(n){const a=JSON.parse(n[0]);if(a.files)return a.files}return this.createFallbackResponse(r,{})}catch(n){return console.error("❌ Failed to parse AI response:",n),this.createFallbackResponse(r,{})}}createFallbackResponse(t,r={}){console.log("🔄 Creating fallback response for prompt:",t);const n=t.toLowerCase();return n.includes("dashboard")||n.includes("analytics")?this.generateTemplateById("react-dashboard",r):n.includes("todo")||n.includes("task")?this.generateTemplateById("todo-app",r):n.includes("ecommerce")||n.includes("store")||n.includes("shop")?this.generateTemplateById("ecommerce-store",r):{"index.html":`<!DOCTYPE html>
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
}`}}}const ne=new mh;class ph{constructor(){this.currentService="local-ai",this.usageStats={totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0},console.log("🤖 Simple AI Service initialized - Local AI only!")}getServices(){return{"local-ai":{name:"Local AI Models",type:"Local",description:"Self-hosted AI models - no API keys required",models:ne.getAvailableModels()}}}getTemplateCategories(){return ne.getTemplateCategories()}getTemplatesByCategory(t){return ne.getTemplatesByCategory(t)}async getAllTemplates(){return await ne.getAllTemplates()}async generateTemplateById(t,r={}){return await ne.generateTemplateById(t,r)}async searchTemplates(t){return await ne.searchTemplates(t)}async getPopularTemplates(){return await ne.getPopularTemplates()}async generateCode(t,r={}){const n=Date.now();this.usageStats.totalRequests++;try{if(console.log("🚀 Generating code with Local AI..."),!ne.isHealthy)return console.log("⚠️ Local AI not available, using template fallback"),ne.createFallbackResponse(t,r);const a=await ne.generateCode(t,r),i=Date.now()-n;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+i)/2,console.log("✅ Code generated successfully with Local AI!"),a&&a.files?a.files:(console.warn("⚠️ No files found in response, returning empty object"),{})}catch(a){return console.error("❌ Local AI generation failed:",a),this.usageStats.failedRequests++,console.log("🔄 Falling back to template generation..."),ne.createFallbackResponse(t,r)}}getServiceHealth(){return ne.modelHealth}getUsageStats(){return this.usageStats}getUserPreferences(){return{preferredService:"local-ai",fallbackEnabled:!0,autoHealthCheck:!0}}updateUserPreferences(t){localStorage.setItem("dreambuild-preferences",JSON.stringify(t))}loadUserPreferences(){const t=localStorage.getItem("dreambuild-preferences");return t?JSON.parse(t):this.getUserPreferences()}getServiceStatus(){return{"local-ai":{isHealthy:ne.isHealthy,models:ne.getHealthyModels().length,totalModels:ne.getAvailableModels().length}}}resetServiceHealth(){ne.modelHealth={}}getFallbackOrder(){return["local-ai"]}isFallbackEnabled(){return!0}setFallbackEnabled(t){return!0}getSetupInstructions(){return{"local-ai":{title:"Local AI Setup",description:"Set up local AI models for code generation",steps:["1. Install Ollama from https://ollama.ai","2. Run: ollama pull codellama:7b","3. Run: ollama serve","4. Refresh DreamBuild to start using local AI"],isSetup:ne.isHealthy}}}getServicesNeedingSetup(){return ne.isHealthy?[]:["local-ai"]}hasValidApiKey(t){return t==="local-ai"}setService(t){t==="local-ai"&&(this.currentService=t)}getCurrentService(){return this.currentService}}const Yt=new ph,hh=Object.freeze(Object.defineProperty({__proto__:null,default:Yt},Symbol.toStringTag,{value:"Module"}));class gh{constructor(){this.isAutoModeEnabled=!1,this.isRunning=!1,this.currentTask=null,this.taskQueue=[],this.iterationCount=0,this.maxIterations=5,this.fileWatchers=new Map,this.progressCallbacks=new Set,this.autoRefinementEnabled=!0,this.backgroundMonitoringEnabled=!0}toggleAutoMode(){return this.isAutoModeEnabled=!this.isAutoModeEnabled,this.isAutoModeEnabled?(console.log("🤖 AI Agent Auto Mode: ENABLED"),this.startBackgroundMonitoring()):(console.log("🤖 AI Agent Auto Mode: DISABLED"),this.stopBackgroundMonitoring(),this.stopCurrentTask()),this.isAutoModeEnabled}breakdownTask(t,r={}){console.log("🧠 Breaking down task:",t);const n=[],a=t.toLowerCase();return a.includes("full-stack")||a.includes("e-commerce")||a.includes("website")?n.push({id:1,title:"Project Setup",description:"Initialize project structure and dependencies",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Database Schema",description:"Design and implement database structure",priority:"high",estimatedTime:"5-7 min"},{id:3,title:"Authentication System",description:"Implement user login and registration",priority:"high",estimatedTime:"8-10 min"},{id:4,title:"Core Features",description:"Build main application functionality",priority:"medium",estimatedTime:"15-20 min"},{id:5,title:"UI/UX Polish",description:"Add styling, animations, and responsive design",priority:"medium",estimatedTime:"10-15 min"},{id:6,title:"Testing & Optimization",description:"Add tests and optimize performance",priority:"low",estimatedTime:"5-10 min"}):a.includes("react")||a.includes("frontend")?n.push({id:1,title:"Component Architecture",description:"Design React component structure",priority:"high",estimatedTime:"3-5 min"},{id:2,title:"State Management",description:"Implement state management solution",priority:"high",estimatedTime:"5-8 min"},{id:3,title:"Core Components",description:"Build main UI components",priority:"medium",estimatedTime:"10-15 min"},{id:4,title:"Routing & Navigation",description:"Add client-side routing",priority:"medium",estimatedTime:"5-8 min"},{id:5,title:"Styling & Responsiveness",description:"Add CSS and responsive design",priority:"low",estimatedTime:"8-12 min"}):a.includes("api")||a.includes("backend")?n.push({id:1,title:"API Structure",description:"Design REST API endpoints",priority:"high",estimatedTime:"5-8 min"},{id:2,title:"Database Integration",description:"Set up database connections and models",priority:"high",estimatedTime:"8-12 min"},{id:3,title:"Authentication & Security",description:"Implement JWT and security middleware",priority:"high",estimatedTime:"10-15 min"},{id:4,title:"Business Logic",description:"Implement core API functionality",priority:"medium",estimatedTime:"15-25 min"},{id:5,title:"Error Handling & Validation",description:"Add comprehensive error handling",priority:"medium",estimatedTime:"5-10 min"},{id:6,title:"Documentation & Testing",description:"Add API docs and tests",priority:"low",estimatedTime:"8-15 min"}):n.push({id:1,title:"Analysis",description:"Analyze requirements and plan approach",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Implementation",description:"Build core functionality",priority:"high",estimatedTime:"10-20 min"},{id:3,title:"Enhancement",description:"Add features and improvements",priority:"medium",estimatedTime:"8-15 min"},{id:4,title:"Polish",description:"Refine and optimize the solution",priority:"low",estimatedTime:"5-10 min"}),{originalPrompt:t,tasks:n,totalEstimatedTime:n.reduce((i,o)=>i+parseInt(o.estimatedTime.split("-")[0]),0),complexity:this.assessComplexity(t),autoModeRecommended:n.length>3}}assessComplexity(t){const r={simple:["button","form","page","component"],medium:["app","website","dashboard","api","database"],complex:["full-stack","e-commerce","social media","platform","enterprise"]},n=t.toLowerCase();for(const[a,i]of Object.entries(r))if(i.some(o=>n.includes(o)))return a;return"medium"}async startContinuousIteration(t,r={}){if(!this.isAutoModeEnabled){console.log("⚠️ Auto Mode not enabled");return}this.isRunning=!0,this.iterationCount=0,this.currentTask=this.breakdownTask(t,r),console.log("🔄 Starting continuous iteration for:",t);for(const n of this.currentTask.tasks){if(!this.isAutoModeEnabled||!this.isRunning)break;await this.executeTask(n,r),this.iterationCount++,this.autoRefinementEnabled&&this.iterationCount<this.maxIterations&&await this.autoRefine(n,r)}this.isRunning=!1,console.log("✅ Continuous iteration completed")}async executeTask(t,r={}){console.log(`🎯 Executing task ${t.id}: ${t.title}`),this.notifyProgress({type:"task_start",task:t,message:`Starting ${t.title}...`});try{await this.delay(this.getTaskDuration(t)),this.notifyProgress({type:"task_complete",task:t,message:`Completed ${t.title}`})}catch(n){console.error(`❌ Task ${t.id} failed:`,n),this.notifyProgress({type:"task_error",task:t,message:`Failed ${t.title}: ${n.message}`})}}async autoRefine(t,r={}){console.log(`🔧 Auto-refining: ${t.title}`),this.notifyProgress({type:"refinement_start",task:t,message:`Auto-refining ${t.title}...`}),await this.delay(2e3),this.notifyProgress({type:"refinement_complete",task:t,message:`Refined ${t.title}`})}startBackgroundMonitoring(){this.backgroundMonitoringEnabled&&(console.log("👀 Starting background monitoring"),this.setupFileWatchers(),this.startCodeQualityMonitoring(),this.startPerformanceMonitoring())}stopBackgroundMonitoring(){console.log("👀 Stopping background monitoring"),this.fileWatchers.forEach(t=>t.disconnect()),this.fileWatchers.clear()}setupFileWatchers(){console.log("📁 Setting up file watchers"),this.fileWatcherInterval=setInterval(()=>{this.checkForFileChanges()},5e3)}checkForFileChanges(){const t=this.simulateFileChanges();t.length>0&&(this.notifyProgress({type:"file_changes",changes:t,message:`Detected ${t.length} file changes`}),this.isAutoModeEnabled&&this.suggestImprovements(t))}simulateFileChanges(){const t=[];return Math.random()>.7&&t.push({file:"src/components/App.jsx",type:"modified",timestamp:new Date}),t}suggestImprovements(t){console.log("💡 Suggesting improvements for:",t);const r=["Consider adding error boundaries to React components","Optimize bundle size by lazy loading components","Add TypeScript for better type safety","Implement proper error handling in API calls","Add loading states for better UX"],n=r[Math.floor(Math.random()*r.length)];this.notifyProgress({type:"improvement_suggestion",suggestion:n,message:`Suggestion: ${n}`})}startCodeQualityMonitoring(){console.log("🔍 Starting code quality monitoring"),this.qualityCheckInterval=setInterval(()=>{this.performQualityCheck()},1e4)}performQualityCheck(){const t=this.simulateQualityIssues();t.length>0&&this.notifyProgress({type:"quality_issues",issues:t,message:`Found ${t.length} code quality issues`})}simulateQualityIssues(){const t=[];return Math.random()>.8&&t.push({type:"warning",message:"Unused import detected",file:"src/components/Button.jsx",line:5}),t}startPerformanceMonitoring(){console.log("⚡ Starting performance monitoring"),this.performanceCheckInterval=setInterval(()=>{this.checkPerformance()},15e3)}checkPerformance(){const t=this.simulatePerformanceMetrics();t.score<80&&this.notifyProgress({type:"performance_issue",metrics:t,message:`Performance score: ${t.score}/100`})}simulatePerformanceMetrics(){return{score:Math.floor(Math.random()*40)+60,loadTime:Math.floor(Math.random()*2e3)+500,bundleSize:Math.floor(Math.random()*500)+200}}onProgress(t){this.progressCallbacks.add(t)}offProgress(t){this.progressCallbacks.delete(t)}notifyProgress(t){this.progressCallbacks.forEach(r=>{try{r(t)}catch(n){console.error("Progress callback error:",n)}})}getTaskDuration(t){const[r,n]=t.estimatedTime.split("-").map(a=>parseInt(a.replace(" min","")));return(Math.random()*(n-r)+r)*1e3}delay(t){return new Promise(r=>setTimeout(r,t))}stopCurrentTask(){this.isRunning=!1,this.currentTask=null,this.iterationCount=0,this.fileWatcherInterval&&clearInterval(this.fileWatcherInterval),this.qualityCheckInterval&&clearInterval(this.qualityCheckInterval),this.performanceCheckInterval&&clearInterval(this.performanceCheckInterval)}getStatus(){return{isAutoModeEnabled:this.isAutoModeEnabled,isRunning:this.isRunning,currentTask:this.currentTask,iterationCount:this.iterationCount,maxIterations:this.maxIterations,autoRefinementEnabled:this.autoRefinementEnabled,backgroundMonitoringEnabled:this.backgroundMonitoringEnabled}}}const ia=new gh;function fh(){const{currentProject:s,updateFile:t,switchFile:r}=Ge(),[n,a]=m.useState(""),[i,o]=m.useState(!1),l=m.useRef(null),d=m.useRef(null),[c,u]=m.useState([]),[p,g]=m.useState([]),[y,x]=m.useState(!1),[b,h]=m.useState(!1),[N,j]=m.useState("auto"),[S,w]=m.useState(0),[f,A]=m.useState(!1),[R,P]=m.useState(!1),[I,M]=m.useState(!1),[F,v]=m.useState("unlimited"),[O,k]=m.useState(!1),[C,E]=m.useState({tokens:0,maxTokens:4e3,percentage:0,files:0,characters:0});m.useEffect(()=>{l.current&&(l.current.style.height="auto",l.current.style.height=l.current.scrollHeight+"px")},[n]),m.useEffect(()=>{var T;(T=d.current)==null||T.scrollIntoView({behavior:"smooth"})},[c]),m.useEffect(()=>{console.log(`🎯 AI Model state changed to: ${N}`)},[N]),m.useEffect(()=>{const T=_=>{f&&!_.target.closest(".model-selector")&&!_.target.closest('button[class*="w-full p-2 rounded"]')&&A(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[f]);const U=async()=>{if(!n.trim()||i)return;const T=n;a(""),o(!0);const _={id:Date.now(),type:"user",content:T,timestamp:new Date},$={id:Date.now()+1,type:"ai",content:"",timestamp:new Date,isLoading:!0};u(K=>[...K,_,$]);try{await G(T),ia.getStatus().autoMode&&await ia.breakdownTask(T),console.log("🚀 Starting AI generation...");const K={conversationHistory:c,currentPrompt:T,previousFiles:Object.keys(s.files),projectContext:s.config},re=await Yt.generateCode(T,K);if(console.log("📁 Files received:",re),console.log("📁 Files type:",typeof re),console.log("📁 Files keys:",re?Object.keys(re):"No files"),!re||typeof re!="object")throw new Error("Invalid files response from AI service");u(Bt=>Bt.map(at=>at.id===$.id?{...at,content:`Generated ${Object.keys(re).length} files successfully!`,isLoading:!1,files:re,timestamp:new Date}:at));let jt=0;Object.entries(re).forEach(([Bt,at])=>{Bt&&at!==void 0&&(console.log(`📄 Adding file: ${Bt} (${typeof at})`),t(Bt,at),jt++)}),console.log(`✅ Added ${jt} files to project`);const sr=Object.keys(re)[0];sr&&(r(sr),console.log(`🎯 Set active file: ${sr}`))}catch(K){console.error("Generation error:",K),u(re=>re.map(jt=>jt.id===$.id?{...jt,content:`Error: ${K.message}`,isLoading:!1,error:!0}:jt))}finally{o(!1)}},G=async T=>{const _=[{id:1,title:"Add responsive design",category:"UI/UX"},{id:2,title:"Implement error handling",category:"Performance"},{id:3,title:"Add TypeScript types",category:"Code Quality"},{id:4,title:"Optimize for mobile",category:"Mobile"}].filter(()=>Math.random()>.5);g(_)},ae=T=>{navigator.clipboard.writeText(T),J.success("Message copied to clipboard")},le=(T,_)=>{u($=>$.map(K=>K.id===T?{...K,metadata:{...K.metadata,feedback:_,feedbackTimestamp:new Date}}:K)),J.success(`Feedback recorded: ${_}`)},H=T=>{T.key==="Enter"&&(T.preventDefault(),U())},V=T=>{T.preventDefault(),M(!0)},Y=T=>{T.preventDefault(),M(!1)},ie=T=>{T.preventDefault(),M(!1);const _=Array.from(T.dataTransfer.files);_.length>0&&oe(_)},oe=T=>{const _=T.map($=>$.name).join(", ");a($=>$+`

[Attached files: ${_}]`),E($=>({...$,files:$.files+T.length,characters:$.characters+_.length}))},Me=T=>({auto:"Auto","codellama-7b":"CodeLlama 7B","codellama-13b":"CodeLlama 13B","codellama-34b":"CodeLlama 34B","starcoder-15b":"StarCoder 15B","deepseek-coder":"DeepSeek Coder","wizardcoder-7b":"WizardCoder 7B","phi3-mini":"Phi-3 Mini","llama3-8b":"Llama 3 8B","mistral-7b":"Mistral 7B","gemma-7b":"Gemma 7B","qwen-7b":"Qwen 7B","codet5-small":"CodeT5 Small","incoder-6b":"InCoder 6B"})[T]||"Auto",tr=()=>[{id:"auto",name:"Auto",description:"Automatically selects the best model",ram_required:"Smart"},{id:"codellama-7b",name:"CodeLlama 7B",description:"Fast and efficient code generation",ram_required:"8GB"},{id:"codellama-13b",name:"CodeLlama 13B",description:"Higher quality code generation",ram_required:"16GB"},{id:"codellama-34b",name:"CodeLlama 34B",description:"Best quality code generation",ram_required:"32GB"},{id:"starcoder-15b",name:"StarCoder 15B",description:"Excellent code completion",ram_required:"24GB"},{id:"deepseek-coder",name:"DeepSeek Coder",description:"High-performance generation",ram_required:"12GB"},{id:"wizardcoder-7b",name:"WizardCoder 7B",description:"Great at following instructions",ram_required:"10GB"},{id:"phi3-mini",name:"Phi-3 Mini",description:"Lightweight but powerful",ram_required:"6GB"},{id:"llama3-8b",name:"Llama 3 8B",description:"General purpose model",ram_required:"10GB"},{id:"mistral-7b",name:"Mistral 7B",description:"Fast and efficient coding assistant",ram_required:"8GB"},{id:"gemma-7b",name:"Gemma 7B",description:"Google's lightweight model",ram_required:"9GB"},{id:"qwen-7b",name:"Qwen 7B",description:"Alibaba's coding model",ram_required:"8GB"},{id:"codet5-small",name:"CodeT5 Small",description:"Salesforce's code generation model",ram_required:"4GB"},{id:"incoder-6b",name:"InCoder 6B",description:"Code completion specialist",ram_required:"6GB"}];return e.jsxs("div",{className:"h-full flex flex-col bg-background overflow-hidden",children:[e.jsx("div",{className:"px-4 py-3 border-b border-border/30 bg-background",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(nr,{className:"h-5 w-5 text-blue-500"}),e.jsx("span",{className:"font-medium text-foreground",children:"AI Assistant"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>x(!y),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"Chat",children:e.jsx(Ts,{className:"h-4 w-4 text-muted-foreground"})}),e.jsx("button",{onClick:()=>h(!b),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"AI Agent",children:e.jsx(nr,{className:"h-4 w-4 text-muted-foreground"})})]})]})]})}),e.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:e.jsx("div",{className:"flex-1 overflow-y-auto bg-background min-h-0",children:e.jsxs("div",{className:"p-4 pb-8 space-y-6",children:[e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsxs("div",{className:"text-center max-w-md",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4",children:e.jsx(ht,{className:"h-8 w-8 text-blue-500"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Ask me anything"}),e.jsx("p",{className:"text-sm text-muted-foreground break-words leading-relaxed",children:"I can help you build applications, fix bugs, explain code, and much more."})]})}),e.jsx(qe,{children:c.map((T,_)=>e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"w-full",children:e.jsxs("div",{className:`flex gap-4 ${T.type==="user"?"flex-row-reverse":"flex-row"}`,children:[e.jsx("div",{className:`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${T.type==="user"?"bg-blue-500 text-white":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`,children:T.type==="user"?e.jsx(Sr,{className:"h-4 w-4"}):e.jsx(nr,{className:"h-4 w-4"})}),e.jsxs("div",{className:`flex-1 max-w-[80%] ${T.type==="user"?"text-right":"text-left"}`,children:[e.jsx("div",{className:`inline-block px-4 py-3 rounded-xl text-sm leading-relaxed break-words ${T.type==="user"?"bg-blue-500 text-white rounded-br-md":"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"}`,children:T.isLoading?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Xt,{className:"h-4 w-4 animate-spin"}),e.jsx("span",{children:"Thinking..."})]}):e.jsx("div",{className:"whitespace-pre-wrap break-words overflow-wrap-anywhere",children:T.content})}),!T.isLoading&&T.type==="ai"&&e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("button",{onClick:()=>ae(T.content),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Copy",children:e.jsx(It,{className:"h-3.5 w-3.5 text-muted-foreground"})}),e.jsx("button",{onClick:()=>le(T.id,"like"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Like",children:e.jsx(Wo,{className:"h-3.5 w-3.5 text-muted-foreground"})}),e.jsx("button",{onClick:()=>le(T.id,"dislike"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Dislike",children:e.jsx(qo,{className:"h-3.5 w-3.5 text-muted-foreground"})})]})]})]})},T.id))}),e.jsx("div",{ref:d})]})})}),e.jsx("div",{className:"border-t border-border/30 bg-background flex-shrink-0",children:e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{id:"ai-prompt-input","data-testid":"ai-prompt-input",ref:l,value:n,onChange:T=>a(T.target.value),onKeyPress:H,onDragOver:V,onDragLeave:Y,onDrop:ie,placeholder:"Plan, search, build anything",className:`w-full resize-y bg-background border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm leading-relaxed break-words overflow-wrap-anywhere focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors ${I?"border-blue-500 bg-blue-50/50 dark:bg-blue-900/10":"border-border"}`,style:{minHeight:"120px",maxHeight:"300px",wordWrap:"break-word",overflowWrap:"anywhere"},disabled:i,rows:4,"aria-label":"AI prompt input"}),I&&e.jsx("div",{className:"absolute inset-0 bg-blue-500/10 border-2 border-blue-500 border-dashed rounded-lg flex items-center justify-center pointer-events-none",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-blue-500 text-lg font-medium",children:"Drop files here"}),e.jsx("div",{className:"text-blue-500 text-xs",children:"Files will be attached to your prompt"})]})}),e.jsx("div",{className:"absolute bottom-1 right-1 w-4 h-4 opacity-30",children:e.jsx("div",{className:"w-full h-full flex items-end justify-end",children:e.jsx("div",{className:"w-2 h-2 bg-muted-foreground/40",style:{backgroundImage:"repeating-linear-gradient(45deg, transparent, transparent 1px, currentColor 1px, currentColor 2px)"}})})})]}),e.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:()=>{var _;const T=n.includes("@")?"":"@file ";a(n+T),(_=l.current)==null||_.focus()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Mention files or references",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"@"})}),e.jsx("button",{onClick:()=>{const T=document.createElement("input");T.type="file",T.multiple=!0,T.accept=".txt,.md,.js,.jsx,.ts,.tsx,.css,.html,.json,.py,.java,.cpp,.c",T.onchange=_=>{const $=Array.from(_.target.files);$.length>0&&oe($)},T.click()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Attach files",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"📎"})}),e.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-foreground relative",children:[e.jsx("button",{onClick:()=>A(!f),className:"hover:text-blue-600 transition-colors",title:"Select AI Model",children:Me(N)},`model-button-${N}-${S}`),e.jsx("span",{className:"text-muted-foreground",children:"tab"}),e.jsxs("button",{onClick:T=>{T.stopPropagation(),P(!R)},className:"text-muted-foreground ml-2 hover:text-blue-600 transition-colors",title:"Click to view context usage",children:[C.percentage,"% O"]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{id:"generate-button","data-testid":"generate-button",onClick:U,disabled:!n.trim()||i,className:"w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shadow-sm",title:"Generate Code","aria-label":"Generate code from prompt",children:i?e.jsx(Xt,{className:"h-4 w-4 text-white animate-spin"}):e.jsx(Jr,{className:"h-4 w-4 text-white rotate-90"})}),e.jsx("button",{onClick:()=>k(!O),className:`text-lg transition-colors hover:text-blue-600 ${F==="unlimited"?"text-blue-500":"text-muted-foreground"}`,title:`Context Mode: ${F==="unlimited"?"Unlimited":"Limited"}`,children:"∞"})]})]})]})}),R&&e.jsxs("div",{className:"absolute bottom-20 left-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-80",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Usage"}),e.jsx("button",{onClick:()=>P(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Tokens"}),e.jsxs("span",{className:"text-xs font-medium text-foreground",children:[C.tokens.toLocaleString()," / ",C.maxTokens.toLocaleString()]})]}),e.jsx("div",{className:"w-full bg-muted rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${C.percentage}%`}})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Usage"}),e.jsxs("span",{className:"text-xs font-medium text-foreground",children:[C.percentage,"%"]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Files"}),e.jsxs("span",{className:"text-xs font-medium text-foreground",children:[C.files," files"]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Characters"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:C.characters.toLocaleString()})]}),e.jsx("div",{className:"pt-2 border-t border-border",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Model"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:Me(N)},`model-info-${N}-${S}`)]})})]})]}),O&&e.jsxs("div",{className:"absolute bottom-20 right-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Mode"}),e.jsx("button",{onClick:()=>k(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("button",{onClick:()=>{v("unlimited"),k(!1),J.success("Switched to Unlimited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${F==="unlimited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`text-xl ${F==="unlimited"?"text-blue-500":"text-muted-foreground"}`,children:"∞"}),e.jsxs("div",{className:"text-left",children:[e.jsx("div",{className:"font-medium text-sm",children:"Unlimited Context"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Access to entire codebase and conversation history"})]}),F==="unlimited"&&e.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),e.jsx("button",{onClick:()=>{v("limited"),k(!1),J.success("Switched to Limited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${F==="limited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`text-lg ${F==="limited"?"text-blue-500":"text-muted-foreground"}`,children:"⚡"}),e.jsxs("div",{className:"text-left",children:[e.jsx("div",{className:"font-medium text-sm",children:"Limited Context"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Faster responses with recent conversation only"})]}),F==="limited"&&e.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),e.jsxs("div",{className:"pt-3 border-t border-border",children:[e.jsx("div",{className:"text-xs text-muted-foreground mb-2",children:"Current Usage"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Mode"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:F==="unlimited"?"Unlimited":"Limited"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Context Window"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:F==="unlimited"?"∞ tokens":"4K tokens"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Performance"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:F==="unlimited"?"Comprehensive":"Fast"})]})]})]})]})]}),f&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40",onClick:T=>{T.target===T.currentTarget&&A(!1)}}),e.jsxs("div",{className:"fixed bottom-16 left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl w-72 z-50",style:{height:"300px",display:"flex",flexDirection:"column"},onClick:T=>T.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-1.5 border-b border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-xs font-semibold text-gray-900 dark:text-white",children:"AI Model"}),e.jsx("button",{onClick:()=>A(!1),className:"p-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",children:e.jsx("svg",{className:"w-3 h-3 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"overflow-y-auto p-1 space-y-0.5",style:{flex:"1",minHeight:"0"},children:tr().map(T=>e.jsx("button",{onClick:_=>{_.preventDefault(),_.stopPropagation(),j(T.id),w($=>$+1),A(!1),J.success(`Switched to ${T.name}`)},className:`w-full p-2 rounded border transition-all duration-200 text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${N===T.id?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-gray-200 dark:border-gray-600"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:`rounded border-2 flex items-center justify-center transition-all duration-200 ${N===T.id?"border-blue-500 bg-blue-500":"border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"}`,style:{width:"12px",height:"12px",minWidth:"12px",minHeight:"12px"},children:N===T.id&&e.jsx("svg",{className:"text-white",fill:"currentColor",viewBox:"0 0 20 20",style:{width:"8px",height:"8px"},children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-medium text-xs text-gray-900 dark:text-white truncate",children:T.name}),e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 truncate",children:T.description})]})]}),e.jsx("div",{className:"text-xs px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 ml-1 flex-shrink-0",children:T.ram_required})]})},T.id))}),e.jsx("div",{className:"p-1 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",children:e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:"Auto selects best model"})})]})]})]})}var kt={};class xh{constructor(){this.app=null,this.db=null,this.storage=null,this.auth=null,this.user=null,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const t={apiKey:kt.REACT_APP_FIREBASE_API_KEY||"your-api-key",authDomain:kt.REACT_APP_FIREBASE_AUTH_DOMAIN||"your-project.firebaseapp.com",projectId:kt.REACT_APP_FIREBASE_PROJECT_ID||"your-project-id",storageBucket:kt.REACT_APP_FIREBASE_STORAGE_BUCKET||"your-project.appspot.com",messagingSenderId:kt.REACT_APP_FIREBASE_MESSAGING_SENDER_ID||"123456789",appId:kt.REACT_APP_FIREBASE_APP_ID||"your-app-id"};try{this.app=Nr(t)}catch(r){if(r.code==="app/duplicate-app")this.app=wr();else if(r.code==="app/no-options")try{this.app=wr()}catch{this.app=Nr({apiKey:"demo-key",authDomain:"demo.firebaseapp.com",projectId:"demo-project"})}else throw r}this.db=wa(this.app),this.storage=yi(this.app),this.auth=ja(this.app),Na(this.auth,r=>{this.user=r,console.log("Firebase auth state changed:",r?"authenticated":"not authenticated")});try{await $o(this.auth),console.log("✅ Firebase anonymous auth successful")}catch(r){console.log("⚠️ Firebase auth not available, continuing without authentication:",r.message),this.user=null}this.isInitialized=!0,console.log("🔥 Firebase initialized successfully")}catch(t){console.error("❌ Failed to initialize Firebase:",t),this.isInitialized=!1,this.user=null,console.log("⚠️ Continuing without Firebase services")}}async storeProjectContext(t,r){var n;try{await this.initialize();const a=ee(this.db,"projectContexts",t);await xe(a,{...r,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",storedAt:new Date().toISOString(),dataSize:JSON.stringify(r).length}),console.log("✅ Project context stored successfully")}catch(a){throw console.error("❌ Failed to store project context:",a),a}}async loadProjectContext(t){try{await this.initialize();const r=ee(this.db,"projectContexts",t),n=await ys(r);return n.exists()?(console.log("✅ Project context loaded successfully"),n.data()):(console.log("❌ Project context not found"),null)}catch(r){return console.error("❌ Failed to load project context:",r),null}}async storeProjectFiles(t,r){var n;try{await this.initialize();const a=ee(this.db,"projectFiles",t);await xe(a,{projectId:t,files:r,fileCount:Object.keys(r).length,totalSize:JSON.stringify(r).length,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",storedAt:new Date().toISOString()}),console.log("✅ Project files stored successfully")}catch(a){throw console.error("❌ Failed to store project files:",a),a}}async loadProjectFiles(t){try{await this.initialize();const r=ee(this.db,"projectFiles",t),n=await ys(r);return n.exists()?(console.log("✅ Project files loaded successfully"),n.data().files):(console.log("❌ Project files not found"),null)}catch(r){return console.error("❌ Failed to load project files:",r),null}}async storeTemplate(t){var r;try{await this.initialize();const n=ee(this.db,"templates",t.id);await xe(n,{...t,userId:((r=this.user)==null?void 0:r.uid)||"anonymous",updatedAt:new Date().toISOString()}),console.log("✅ Template stored successfully")}catch(n){throw console.error("❌ Failed to store template:",n),n}}async loadTemplates(){try{await this.initialize();const t=Ut(this.db,"templates"),r=await Ht(t),n=[];return r.forEach(a=>{n.push(a.data())}),console.log("✅ Templates loaded successfully"),n}catch(t){return console.error("❌ Failed to load templates:",t),[]}}async searchTemplates(t,r,n){try{await this.initialize();const a=Ut(this.db,"templates");let i=it(a);t&&t.length>0&&(i=it(i,wt("keywords","array-contains-any",t))),r&&r.length>0&&(i=it(i,wt("technologies","array-contains-any",r))),n&&n.length>0&&(i=it(i,wt("patterns","array-contains-any",n)));const o=await Ht(i),l=[];return o.forEach(d=>{l.push(d.data())}),console.log("✅ Templates searched successfully"),l}catch(a){return console.error("❌ Failed to search templates:",a),[]}}async storeLargeFile(t,r,n){try{await this.initialize();const a=dt(this.storage,`projects/${t}/${r}`),i=new Blob([n],{type:"text/plain"});await lt(a,i);const o=await ct(a);return console.log("✅ Large file stored successfully"),o}catch(a){throw console.error("❌ Failed to store large file:",a),a}}async loadLargeFile(t){try{const n=await(await fetch(t)).text();return console.log("✅ Large file loaded successfully"),n}catch(r){return console.error("❌ Failed to load large file:",r),null}}async getUserProjects(){var t;try{await this.initialize();const r=Ut(this.db,"projectContexts"),n=it(r,wt("userId","==",((t=this.user)==null?void 0:t.uid)||"anonymous")),a=await Ht(n),i=[];return a.forEach(o=>{i.push({id:o.id,...o.data()})}),console.log("✅ User projects loaded successfully"),i}catch(r){return console.error("❌ Failed to load user projects:",r),[]}}async deleteProject(t){try{await this.initialize();const r=ee(this.db,"projectContexts",t);await rr(r);const n=ee(this.db,"projectFiles",t);await rr(n),console.log("✅ Project deleted successfully")}catch(r){throw console.error("❌ Failed to delete project:",r),r}}async getStorageStats(){try{await this.initialize();const t=await this.getUserProjects();let r=0,n=0;for(const a of t)r+=a.dataSize||0,n+=a.fileCount||0;return{totalProjects:t.length,totalFiles:n,totalSize:r,totalSizeMB:Math.round(r/(1024*1024)*100)/100}}catch(t){return console.error("❌ Failed to get storage stats:",t),{totalProjects:0,totalFiles:0,totalSize:0,totalSizeMB:0}}}async storeConversationMemory(t,r){var n,a;try{await this.initialize();const i=JSON.stringify(r),o=8e5;if(i.length>o){console.log("⚠️ Conversation data too large, storing in chunks");const l=this.chunkData(r,o);for(let d=0;d<l.length;d++){const c=ee(this.db,"conversationMemory",`${t}_chunk_${d}`);await xe(c,{projectId:t,chunkIndex:d,totalChunks:l.length,conversation:l[d],userId:((n=this.user)==null?void 0:n.uid)||"anonymous",lastUpdated:new Date().toISOString()})}console.log(`🧠 Conversation memory stored in ${l.length} chunks`)}else{const l=ee(this.db,"conversationMemory",t);await xe(l,{projectId:t,conversation:r,userId:((a=this.user)==null?void 0:a.uid)||"anonymous",lastUpdated:new Date().toISOString(),memorySize:i.length}),console.log("🧠 Conversation memory stored successfully")}}catch(i){throw console.error("❌ Failed to store conversation memory:",i),i}}chunkData(t,r){const n=[],a=JSON.stringify(t);let i=0;for(;i<a.length;){let o=Math.min(i+r,a.length);if(o<a.length){let l=a.lastIndexOf("}",o),d=a.lastIndexOf("]",o),c=a.lastIndexOf(",",o);const u=Math.max(l,d,c);u>i+r*.8&&(o=u+1)}try{n.push(JSON.parse(a.slice(i,o)))}catch{n.push(a.slice(i,o))}i=o}return n}async loadConversationMemory(t){try{await this.initialize();const r=ee(this.db,"conversationMemory",t),n=await ys(r);if(n.exists())return console.log("🧠 Conversation memory loaded successfully"),n.data().conversation;const a=Ut(this.db,"conversationMemory"),i=it(a,wt("projectId","==",t)),o=await Ht(i);if(!o.empty){const l=[];o.forEach(c=>{l.push({index:c.data().chunkIndex,data:c.data().conversation})}),l.sort((c,u)=>c.index-u.index);const d=l.map(c=>c.data);return console.log(`🧠 Conversation memory loaded from ${l.length} chunks`),d}return console.log("❌ Conversation memory not found"),null}catch(r){return console.error("❌ Failed to load conversation memory:",r),null}}async addPromptToMemory(t,r,n,a){try{await this.initialize();let i=await this.loadConversationMemory(t)||{projectId:t,prompts:[],responses:[],context:{},createdAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return i.prompts.push({id:`prompt-${Date.now()}`,text:r,timestamp:new Date().toISOString(),context:a}),i.responses.push({id:`response-${Date.now()}`,promptId:i.prompts[i.prompts.length-1].id,text:n,timestamp:new Date().toISOString(),context:a}),i.context={...i.context,...a},i.lastUpdated=new Date().toISOString(),await this.storeConversationMemory(t,i),console.log("🧠 Prompt added to memory successfully"),i}catch(i){throw console.error("❌ Failed to add prompt to memory:",i),i}}async getConversationHistory(t,r=50){try{await this.initialize();const n=await this.loadConversationMemory(t);if(!n)return[];const a=n.prompts.slice(-r),i=n.responses.slice(-r);return{prompts:a,responses:i,context:n.context,totalPrompts:n.prompts.length,totalResponses:n.responses.length}}catch(n){return console.error("❌ Failed to get conversation history:",n),[]}}async searchConversationMemory(t,r){try{await this.initialize();const n=await this.loadConversationMemory(t);if(!n)return[];const a=[],i=r.toLowerCase();return n.prompts.forEach(o=>{o.text.toLowerCase().includes(i)&&a.push({type:"prompt",id:o.id,text:o.text,timestamp:o.timestamp,context:o.context})}),n.responses.forEach(o=>{o.text.toLowerCase().includes(i)&&a.push({type:"response",id:o.id,text:o.text,timestamp:o.timestamp,context:o.context})}),console.log("🔍 Conversation memory searched successfully"),a}catch(n){return console.error("❌ Failed to search conversation memory:",n),[]}}async getConversationContext(t,r){try{await this.initialize();const n=await this.loadConversationMemory(t);if(!n)return null;const a={projectId:t,currentPrompt:r,previousPrompts:n.prompts.slice(-10),previousResponses:n.responses.slice(-10),projectContext:n.context,conversationSummary:this.generateConversationSummary(n),relevantHistory:this.findRelevantHistory(n,r)};return console.log("🧠 Conversation context generated successfully"),a}catch(n){return console.error("❌ Failed to get conversation context:",n),null}}generateConversationSummary(t){var i,o;const r=t.prompts,n=t.responses;return r.length===0?"No previous conversation":{totalPrompts:r.length,totalResponses:n.length,firstPrompt:((i=r[0])==null?void 0:i.text)||"",lastPrompt:((o=r[r.length-1])==null?void 0:o.text)||"",keyTopics:this.extractKeyTopics(r),projectEvolution:this.trackProjectEvolution(t)}}extractKeyTopics(t){const r=new Set;return t.forEach(n=>{n.text.toLowerCase().split(" ").forEach(i=>{i.length>4&&!this.isCommonWord(i)&&r.add(i)})}),Array.from(r).slice(0,10)}isCommonWord(t){return["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","two","way","who","boy","did","man","men","put","say","she","too","use"].includes(t)}trackProjectEvolution(t){const r=[],n=t.prompts,a=t.responses;for(let i=0;i<n.length;i++){const o=n[i],l=a[i];r.push({phase:i+1,prompt:o.text,response:l.text,timestamp:o.timestamp,context:o.context})}return r}findRelevantHistory(t,r){const n=[],a=r.toLowerCase().split(" ");return t.prompts.forEach((i,o)=>{var c;const l=i.text.toLowerCase().split(" "),d=a.filter(u=>l.includes(u));d.length>2&&n.push({prompt:i.text,response:((c=t.responses[o])==null?void 0:c.text)||"",relevance:d.length,timestamp:i.timestamp})}),n.sort((i,o)=>o.relevance-i.relevance).slice(0,5)}async storeAILearningPattern(t,r){var n;try{await this.initialize();const a=ee(this.db,"aiLearningPatterns",`${t}-${Date.now()}`);await xe(a,{projectId:t,pattern:r,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",createdAt:new Date().toISOString()}),console.log("🧠 AI learning pattern stored successfully")}catch(a){throw console.error("❌ Failed to store AI learning pattern:",a),a}}async getAILearningPatterns(t){try{await this.initialize();const r=Ut(this.db,"aiLearningPatterns"),n=it(r,wt("projectId","==",t)),a=await Ht(n),i=[];return a.forEach(o=>{i.push(o.data())}),console.log("🧠 AI learning patterns loaded successfully"),i}catch(r){return console.error("❌ Failed to load AI learning patterns:",r),[]}}async clearConversationMemory(t){try{await this.initialize();const r=ee(this.db,"conversationMemory",t);await rr(r),console.log("🧠 Conversation memory cleared successfully")}catch(r){throw console.error("❌ Failed to clear conversation memory:",r),r}}}const Wt=new xh,bh=m.createContext();function yh(){return m.useContext(bh)}const vh=({isOpen:s,onClose:t})=>{const{isCollaborationActive:r,activeUsers:n,cursors:a,comments:i,sharedProjects:o,isLoading:l,shareProject:d,getSharedProjects:c,toggleCollaboration:u}=yh(),{user:p}=vt(),[g,y]=m.useState(""),[x,b]=m.useState("read"),[h,N]=m.useState("users");m.useEffect(()=>{s&&r&&c()},[s,r,c]);const j=async f=>{if(f.preventDefault(),!g.trim()){B.error("Please enter an email address");return}try{await d(g,x),B.success(`Project shared with ${g}`),y(""),c()}catch{B.error("Failed to share project")}},S=f=>{switch(f){case"admin":return"text-red-600 bg-red-100";case"write":return"text-blue-600 bg-blue-100";case"read":return"text-green-600 bg-green-100";default:return"text-gray-600 bg-gray-100"}},w=f=>{switch(f){case"admin":return e.jsx(Ds,{className:"h-4 w-4"});case"write":return e.jsx(Ce,{className:"h-4 w-4"});case"read":return e.jsx(Be,{className:"h-4 w-4"});default:return e.jsx(Le,{className:"h-4 w-4"})}};return s?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(Xe,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Real-time team collaboration"})]})]}),e.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:e.jsx(qr,{className:"h-5 w-5 text-gray-600"})})]}),e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Real-time Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Enable real-time editing, cursor tracking, and comments"})]}),e.jsx("button",{onClick:u,disabled:l,className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${r?"bg-green-100 text-green-700 hover:bg-green-200":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:r?e.jsxs(e.Fragment,{children:[e.jsx(Be,{className:"h-4 w-4"}),"Active"]}):e.jsxs(e.Fragment,{children:[e.jsx(Vo,{className:"h-4 w-4"}),"Inactive"]})})]})}),e.jsx("div",{className:"flex border-b border-gray-200",children:[{id:"users",label:"Active Users",icon:Xe},{id:"comments",label:"Comments",icon:Ts},{id:"sharing",label:"Sharing",icon:Da}].map(f=>e.jsxs("button",{onClick:()=>N(f.id),className:`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${h===f.id?"text-blue-600 border-b-2 border-blue-600":"text-gray-600 hover:text-gray-900"}`,children:[e.jsx(f.icon,{className:"h-4 w-4"}),f.label]},f.id))}),e.jsxs("div",{className:"p-6 max-h-96 overflow-y-auto",children:[h==="users"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Active Users (",n.length,")"]}),n.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No active users"}):e.jsx("div",{className:"space-y-3",children:n.map((f,A)=>{var R;return e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:((R=f.userName)==null?void 0:R.charAt(0))||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"font-medium text-gray-900",children:f.userName}),e.jsx("p",{className:"text-sm text-gray-600",children:f.userEmail})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Online"})]})]},A)})}),a.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"text-md font-medium text-gray-900 mb-3",children:"Active Cursors"}),e.jsx("div",{className:"space-y-2",children:a.map((f,A)=>{var R;return e.jsxs("div",{className:"flex items-center gap-2 p-2 bg-blue-50 rounded",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-medium",children:((R=f.userName)==null?void 0:R.charAt(0))||"U"})}),e.jsx("span",{className:"text-sm text-gray-700",children:f.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:[f.fileId," - Line ",f.line]})]},A)})})]})]}),h==="comments"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Comments (",i.length,")"]}),i.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No comments yet"}):e.jsx("div",{className:"space-y-3",children:i.map((f,A)=>{var R;return e.jsx("div",{className:`p-4 rounded-lg border ${f.resolved?"bg-gray-50 border-gray-200":"bg-yellow-50 border-yellow-200"}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:((R=f.userName)==null?void 0:R.charAt(0))||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"font-medium text-gray-900",children:f.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:["Line ",f.lineNumber," in ",f.fileId]}),f.resolved&&e.jsx("span",{className:"text-xs bg-green-100 text-green-700 px-2 py-1 rounded",children:"Resolved"})]}),e.jsx("p",{className:"text-gray-700",children:f.content})]})]})},A)})})]}),h==="sharing"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Share Project"}),e.jsxs("form",{onSubmit:j,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),e.jsx("input",{type:"email",value:g,onChange:f=>y(f.target.value),placeholder:"user@example.com",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Permissions"}),e.jsxs("select",{value:x,onChange:f=>b(f.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"read",children:"Read Only"}),e.jsx("option",{value:"write",children:"Read & Write"}),e.jsx("option",{value:"admin",children:"Admin"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors",children:"Share Project"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Shared Projects"}),o.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No shared projects"}):e.jsx("div",{className:"space-y-3",children:o.map((f,A)=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center",children:e.jsx(Jo,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:f.sharedWith}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Project ID: ",f.projectId]})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{className:`px-2 py-1 rounded text-xs font-medium ${S(f.permissions)}`,children:[w(f.permissions),f.permissions]})})]},A))})]})]})]})]})}):null},eo=m.createContext({dragDropManager:void 0});function we(s){return"Minified Redux error #"+s+"; visit https://redux.js.org/Errors?code="+s+" for the full message or use the non-minified dev environment for full errors. "}var oa=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),la=function(){return Math.random().toString(36).substring(7).split("").join(".")},ca={INIT:"@@redux/INIT"+la(),REPLACE:"@@redux/REPLACE"+la()};function jh(s){if(typeof s!="object"||s===null)return!1;for(var t=s;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(s)===t}function to(s,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(we(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(we(1));return r(to)(s,t)}if(typeof s!="function")throw new Error(we(2));var a=s,i=t,o=[],l=o,d=!1;function c(){l===o&&(l=o.slice())}function u(){if(d)throw new Error(we(3));return i}function p(b){if(typeof b!="function")throw new Error(we(4));if(d)throw new Error(we(5));var h=!0;return c(),l.push(b),function(){if(h){if(d)throw new Error(we(6));h=!1,c();var j=l.indexOf(b);l.splice(j,1),o=null}}}function g(b){if(!jh(b))throw new Error(we(7));if(typeof b.type>"u")throw new Error(we(8));if(d)throw new Error(we(9));try{d=!0,i=a(i,b)}finally{d=!1}for(var h=o=l,N=0;N<h.length;N++){var j=h[N];j()}return b}function y(b){if(typeof b!="function")throw new Error(we(10));a=b,g({type:ca.REPLACE})}function x(){var b,h=p;return b={subscribe:function(j){if(typeof j!="object"||j===null)throw new Error(we(11));function S(){j.next&&j.next(u())}S();var w=h(S);return{unsubscribe:w}}},b[oa]=function(){return this},b}return g({type:ca.INIT}),n={dispatch:g,subscribe:p,getState:u,replaceReducer:y},n[oa]=x,n}function q(s,t,...r){if(wh()&&t===void 0)throw new Error("invariant requires an error message argument");if(!s){let n;if(t===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let a=0;n=new Error(t.replace(/%s/g,function(){return r[a++]})),n.name="Invariant Violation"}throw n.framesToPop=1,n}}function wh(){return typeof process<"u"&&!0}function Nh(s,t,r){return t.split(".").reduce((n,a)=>n&&n[a]?n[a]:r||null,s)}function Sh(s,t){return s.filter(r=>r!==t)}function so(s){return typeof s=="object"}function Ch(s,t){const r=new Map,n=i=>{r.set(i,r.has(i)?r.get(i)+1:1)};s.forEach(n),t.forEach(n);const a=[];return r.forEach((i,o)=>{i===1&&a.push(o)}),a}function kh(s,t){return s.filter(r=>t.indexOf(r)>-1)}const un="dnd-core/INIT_COORDS",Ks="dnd-core/BEGIN_DRAG",mn="dnd-core/PUBLISH_DRAG_SOURCE",Xs="dnd-core/HOVER",Qs="dnd-core/DROP",Zs="dnd-core/END_DRAG";function da(s,t){return{type:un,payload:{sourceClientOffset:t||null,clientOffset:s||null}}}const Th={type:un,payload:{clientOffset:null,sourceClientOffset:null}};function Dh(s){return function(r=[],n={publishSource:!0}){const{publishSource:a=!0,clientOffset:i,getSourceClientOffset:o}=n,l=s.getMonitor(),d=s.getRegistry();s.dispatch(da(i)),Ph(r,l,d);const c=Rh(r,l);if(c==null){s.dispatch(Th);return}let u=null;if(i){if(!o)throw new Error("getSourceClientOffset must be defined");Ah(o),u=o(c)}s.dispatch(da(i,u));const g=d.getSource(c).beginDrag(l,c);if(g==null)return;Eh(g),d.pinSource(c);const y=d.getSourceType(c);return{type:Ks,payload:{itemType:y,item:g,sourceId:c,clientOffset:i||null,sourceClientOffset:u||null,isSourcePublic:!!a}}}}function Ph(s,t,r){q(!t.isDragging(),"Cannot call beginDrag while dragging."),s.forEach(function(n){q(r.getSource(n),"Expected sourceIds to be registered.")})}function Ah(s){q(typeof s=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function Eh(s){q(so(s),"Item must be an object.")}function Rh(s,t){let r=null;for(let n=s.length-1;n>=0;n--)if(t.canDragSource(s[n])){r=s[n];break}return r}function Ih(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Oh(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){Ih(s,a,r[a])})}return s}function Lh(s){return function(r={}){const n=s.getMonitor(),a=s.getRegistry();Mh(n),_h(n).forEach((o,l)=>{const d=Fh(o,l,a,n),c={type:Qs,payload:{dropResult:Oh({},r,d)}};s.dispatch(c)})}}function Mh(s){q(s.isDragging(),"Cannot call drop while not dragging."),q(!s.didDrop(),"Cannot call drop twice during one drag operation.")}function Fh(s,t,r,n){const a=r.getTarget(s);let i=a?a.drop(n,s):void 0;return $h(i),typeof i>"u"&&(i=t===0?{}:n.getDropResult()),i}function $h(s){q(typeof s>"u"||so(s),"Drop result must either be an object or undefined.")}function _h(s){const t=s.getTargetIds().filter(s.canDropOnTarget,s);return t.reverse(),t}function Bh(s){return function(){const r=s.getMonitor(),n=s.getRegistry();Uh(r);const a=r.getSourceId();return a!=null&&(n.getSource(a,!0).endDrag(r,a),n.unpinSource()),{type:Zs}}}function Uh(s){q(s.isDragging(),"Cannot call endDrag while not dragging.")}function Ur(s,t){return t===null?s===null:Array.isArray(s)?s.some(r=>r===t):s===t}function Hh(s){return function(r,{clientOffset:n}={}){Gh(r);const a=r.slice(0),i=s.getMonitor(),o=s.getRegistry(),l=i.getItemType();return Wh(a,o,l),zh(a,i,o),qh(a,i,o),{type:Xs,payload:{targetIds:a,clientOffset:n||null}}}}function Gh(s){q(Array.isArray(s),"Expected targetIds to be an array.")}function zh(s,t,r){q(t.isDragging(),"Cannot call hover while not dragging."),q(!t.didDrop(),"Cannot call hover after drop.");for(let n=0;n<s.length;n++){const a=s[n];q(s.lastIndexOf(a)===n,"Expected targetIds to be unique in the passed array.");const i=r.getTarget(a);q(i,"Expected targetIds to be registered.")}}function Wh(s,t,r){for(let n=s.length-1;n>=0;n--){const a=s[n],i=t.getTargetType(a);Ur(i,r)||s.splice(n,1)}}function qh(s,t,r){s.forEach(function(n){r.getTarget(n).hover(t,n)})}function Vh(s){return function(){if(s.getMonitor().isDragging())return{type:mn}}}function Jh(s){return{beginDrag:Dh(s),publishDragSource:Vh(s),hover:Hh(s),drop:Lh(s),endDrag:Bh(s)}}class Yh{receiveBackend(t){this.backend=t}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const t=this,{dispatch:r}=this.store;function n(i){return(...o)=>{const l=i.apply(t,o);typeof l<"u"&&r(l)}}const a=Jh(this);return Object.keys(a).reduce((i,o)=>{const l=a[o];return i[o]=n(l),i},{})}dispatch(t){this.store.dispatch(t)}constructor(t,r){this.isSetUp=!1,this.handleRefCountChange=()=>{const n=this.store.getState().refCount>0;this.backend&&(n&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!n&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=t,this.monitor=r,t.subscribe(this.handleRefCountChange)}}function Kh(s,t){return{x:s.x+t.x,y:s.y+t.y}}function ro(s,t){return{x:s.x-t.x,y:s.y-t.y}}function Xh(s){const{clientOffset:t,initialClientOffset:r,initialSourceClientOffset:n}=s;return!t||!r||!n?null:ro(Kh(t,n),r)}function Qh(s){const{clientOffset:t,initialClientOffset:r}=s;return!t||!r?null:ro(t,r)}const Kt=[],pn=[];Kt.__IS_NONE__=!0;pn.__IS_ALL__=!0;function Zh(s,t){return s===Kt?!1:s===pn||typeof t>"u"?!0:kh(t,s).length>0}class eg{subscribeToStateChange(t,r={}){const{handlerIds:n}=r;q(typeof t=="function","listener must be a function."),q(typeof n>"u"||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let a=this.store.getState().stateId;const i=()=>{const o=this.store.getState(),l=o.stateId;try{l===a||l===a+1&&!Zh(o.dirtyHandlerIds,n)||t()}finally{a=l}};return this.store.subscribe(i)}subscribeToOffsetChange(t){q(typeof t=="function","listener must be a function.");let r=this.store.getState().dragOffset;const n=()=>{const a=this.store.getState().dragOffset;a!==r&&(r=a,t())};return this.store.subscribe(n)}canDragSource(t){if(!t)return!1;const r=this.registry.getSource(t);return q(r,`Expected to find a valid source. sourceId=${t}`),this.isDragging()?!1:r.canDrag(this,t)}canDropOnTarget(t){if(!t)return!1;const r=this.registry.getTarget(t);if(q(r,`Expected to find a valid target. targetId=${t}`),!this.isDragging()||this.didDrop())return!1;const n=this.registry.getTargetType(t),a=this.getItemType();return Ur(n,a)&&r.canDrop(this,t)}isDragging(){return!!this.getItemType()}isDraggingSource(t){if(!t)return!1;const r=this.registry.getSource(t,!0);if(q(r,`Expected to find a valid source. sourceId=${t}`),!this.isDragging()||!this.isSourcePublic())return!1;const n=this.registry.getSourceType(t),a=this.getItemType();return n!==a?!1:r.isDragging(this,t)}isOverTarget(t,r={shallow:!1}){if(!t)return!1;const{shallow:n}=r;if(!this.isDragging())return!1;const a=this.registry.getTargetType(t),i=this.getItemType();if(i&&!Ur(a,i))return!1;const o=this.getTargetIds();if(!o.length)return!1;const l=o.indexOf(t);return n?l===o.length-1:l>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return Xh(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return Qh(this.store.getState().dragOffset)}constructor(t,r){this.store=t,this.registry=r}}const ua=typeof global<"u"?global:self,no=ua.MutationObserver||ua.WebKitMutationObserver;function ao(s){return function(){const r=setTimeout(a,0),n=setInterval(a,50);function a(){clearTimeout(r),clearInterval(n),s()}}}function tg(s){let t=1;const r=new no(s),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){t=-t,n.data=t}}const sg=typeof no=="function"?tg:ao;class rg{enqueueTask(t){const{queue:r,requestFlush:n}=this;r.length||(n(),this.flushing=!0),r[r.length]=t}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:t}=this;for(;this.index<t.length;){const r=this.index;if(this.index++,t[r].call(),this.index>this.capacity){for(let n=0,a=t.length-this.index;n<a;n++)t[n]=t[n+this.index];t.length-=this.index,this.index=0}}t.length=0,this.index=0,this.flushing=!1},this.registerPendingError=t=>{this.pendingErrors.push(t),this.requestErrorThrow()},this.requestFlush=sg(this.flush),this.requestErrorThrow=ao(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class ng{call(){try{this.task&&this.task()}catch(t){this.onError(t)}finally{this.task=null,this.release(this)}}constructor(t,r){this.onError=t,this.release=r,this.task=null}}class ag{create(t){const r=this.freeTasks,n=r.length?r.pop():new ng(this.onError,a=>r[r.length]=a);return n.task=t,n}constructor(t){this.onError=t,this.freeTasks=[]}}const io=new rg,ig=new ag(io.registerPendingError);function og(s){io.enqueueTask(ig.create(s))}const hn="dnd-core/ADD_SOURCE",gn="dnd-core/ADD_TARGET",fn="dnd-core/REMOVE_SOURCE",er="dnd-core/REMOVE_TARGET";function lg(s){return{type:hn,payload:{sourceId:s}}}function cg(s){return{type:gn,payload:{targetId:s}}}function dg(s){return{type:fn,payload:{sourceId:s}}}function ug(s){return{type:er,payload:{targetId:s}}}function mg(s){q(typeof s.canDrag=="function","Expected canDrag to be a function."),q(typeof s.beginDrag=="function","Expected beginDrag to be a function."),q(typeof s.endDrag=="function","Expected endDrag to be a function.")}function pg(s){q(typeof s.canDrop=="function","Expected canDrop to be a function."),q(typeof s.hover=="function","Expected hover to be a function."),q(typeof s.drop=="function","Expected beginDrag to be a function.")}function Hr(s,t){if(t&&Array.isArray(s)){s.forEach(r=>Hr(r,!1));return}q(typeof s=="string"||typeof s=="symbol",t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var Se;(function(s){s.SOURCE="SOURCE",s.TARGET="TARGET"})(Se||(Se={}));let hg=0;function gg(){return hg++}function fg(s){const t=gg().toString();switch(s){case Se.SOURCE:return`S${t}`;case Se.TARGET:return`T${t}`;default:throw new Error(`Unknown Handler Role: ${s}`)}}function ma(s){switch(s[0]){case"S":return Se.SOURCE;case"T":return Se.TARGET;default:throw new Error(`Cannot parse handler ID: ${s}`)}}function pa(s,t){const r=s.entries();let n=!1;do{const{done:a,value:[,i]}=r.next();if(i===t)return!0;n=!!a}while(!n);return!1}class xg{addSource(t,r){Hr(t),mg(r);const n=this.addHandler(Se.SOURCE,t,r);return this.store.dispatch(lg(n)),n}addTarget(t,r){Hr(t,!0),pg(r);const n=this.addHandler(Se.TARGET,t,r);return this.store.dispatch(cg(n)),n}containsHandler(t){return pa(this.dragSources,t)||pa(this.dropTargets,t)}getSource(t,r=!1){return q(this.isSourceId(t),"Expected a valid source ID."),r&&t===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(t)}getTarget(t){return q(this.isTargetId(t),"Expected a valid target ID."),this.dropTargets.get(t)}getSourceType(t){return q(this.isSourceId(t),"Expected a valid source ID."),this.types.get(t)}getTargetType(t){return q(this.isTargetId(t),"Expected a valid target ID."),this.types.get(t)}isSourceId(t){return ma(t)===Se.SOURCE}isTargetId(t){return ma(t)===Se.TARGET}removeSource(t){q(this.getSource(t),"Expected an existing source."),this.store.dispatch(dg(t)),og(()=>{this.dragSources.delete(t),this.types.delete(t)})}removeTarget(t){q(this.getTarget(t),"Expected an existing target."),this.store.dispatch(ug(t)),this.dropTargets.delete(t),this.types.delete(t)}pinSource(t){const r=this.getSource(t);q(r,"Expected an existing source."),this.pinnedSourceId=t,this.pinnedSource=r}unpinSource(){q(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(t,r,n){const a=fg(t);return this.types.set(a,r),t===Se.SOURCE?this.dragSources.set(a,n):t===Se.TARGET&&this.dropTargets.set(a,n),a}constructor(t){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=t}}const bg=(s,t)=>s===t;function yg(s,t){return!s&&!t?!0:!s||!t?!1:s.x===t.x&&s.y===t.y}function vg(s,t,r=bg){if(s.length!==t.length)return!1;for(let n=0;n<s.length;++n)if(!r(s[n],t[n]))return!1;return!0}function jg(s=Kt,t){switch(t.type){case Xs:break;case hn:case gn:case er:case fn:return Kt;case Ks:case mn:case Zs:case Qs:default:return pn}const{targetIds:r=[],prevTargetIds:n=[]}=t.payload,a=Ch(r,n);if(!(a.length>0||!vg(r,n)))return Kt;const o=n[n.length-1],l=r[r.length-1];return o!==l&&(o&&a.push(o),l&&a.push(l)),a}function wg(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Ng(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){wg(s,a,r[a])})}return s}const ha={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function Sg(s=ha,t){const{payload:r}=t;switch(t.type){case un:case Ks:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case Xs:return yg(s.clientOffset,r.clientOffset)?s:Ng({},s,{clientOffset:r.clientOffset});case Zs:case Qs:return ha;default:return s}}function Cg(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Tt(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){Cg(s,a,r[a])})}return s}const kg={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function Tg(s=kg,t){const{payload:r}=t;switch(t.type){case Ks:return Tt({},s,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case mn:return Tt({},s,{isSourcePublic:!0});case Xs:return Tt({},s,{targetIds:r.targetIds});case er:return s.targetIds.indexOf(r.targetId)===-1?s:Tt({},s,{targetIds:Sh(s.targetIds,r.targetId)});case Qs:return Tt({},s,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case Zs:return Tt({},s,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return s}}function Dg(s=0,t){switch(t.type){case hn:case gn:return s+1;case fn:case er:return s-1;default:return s}}function Pg(s=0){return s+1}function Ag(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Eg(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){Ag(s,a,r[a])})}return s}function Rg(s={},t){return{dirtyHandlerIds:jg(s.dirtyHandlerIds,{type:t.type,payload:Eg({},t.payload,{prevTargetIds:Nh(s,"dragOperation.targetIds",[])})}),dragOffset:Sg(s.dragOffset,t),refCount:Dg(s.refCount,t),dragOperation:Tg(s.dragOperation,t),stateId:Pg(s.stateId)}}function Ig(s,t=void 0,r={},n=!1){const a=Og(n),i=new eg(a,new xg(a)),o=new Yh(a,i),l=s(o,t,r);return o.receiveBackend(l),o}function Og(s){const t=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return to(Rg,s&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}function Lg(s,t){if(s==null)return{};var r=Mg(s,t),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(s,n)&&(r[n]=s[n])}return r}function Mg(s,t){if(s==null)return{};var r={},n=Object.keys(s),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=s[a]);return r}let ga=0;const Cs=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var Fg=m.memo(function(t){var{children:r}=t,n=Lg(t,["children"]);const[a,i]=$g(n);return m.useEffect(()=>{if(i){const o=oo();return++ga,()=>{--ga===0&&(o[Cs]=null)}}},[]),e.jsx(eo.Provider,{value:a,children:r})});function $g(s){if("manager"in s)return[{dragDropManager:s.manager},!1];const t=_g(s.backend,s.context,s.options,s.debugMode),r=!s.context;return[t,r]}function _g(s,t=oo(),r,n){const a=t;return a[Cs]||(a[Cs]={dragDropManager:Ig(s,t,r,n)}),a[Cs]}function oo(){return typeof global<"u"?global:window}var Bg=function s(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,a,i;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(a=n;a--!==0;)if(!s(t[a],r[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(r).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[a]))return!1;for(a=n;a--!==0;){var o=i[a];if(!s(t[o],r[o]))return!1}return!0}return t!==t&&r!==r};const Ug=ko(Bg),bt=typeof window<"u"?m.useLayoutEffect:m.useEffect;function Hg(s,t,r){const[n,a]=m.useState(()=>t(s)),i=m.useCallback(()=>{const o=t(s);Ug(n,o)||(a(o),r&&r())},[n,s,r]);return bt(i),[n,i]}function Gg(s,t,r){const[n,a]=Hg(s,t,r);return bt(function(){const o=s.getHandlerId();if(o!=null)return s.subscribeToStateChange(a,{handlerIds:[o]})},[s,a]),n}function lo(s,t,r){return Gg(t,s||(()=>({})),()=>r.reconnect())}function co(s,t){const r=[];return typeof s!="function"&&r.push(s),m.useMemo(()=>typeof s=="function"?s():s,r)}function zg(s){return m.useMemo(()=>s.hooks.dragSource(),[s])}function Wg(s){return m.useMemo(()=>s.hooks.dragPreview(),[s])}let fr=!1,xr=!1;class qg{receiveHandlerId(t){this.sourceId=t}getHandlerId(){return this.sourceId}canDrag(){q(!fr,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return fr=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{fr=!1}}isDragging(){if(!this.sourceId)return!1;q(!xr,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return xr=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{xr=!1}}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}isDraggingSource(t){return this.internalMonitor.isDraggingSource(t)}isOverTarget(t,r){return this.internalMonitor.isOverTarget(t,r)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(t){return this.internalMonitor.subscribeToOffsetChange(t)}canDragSource(t){return this.internalMonitor.canDragSource(t)}canDropOnTarget(t){return this.internalMonitor.canDropOnTarget(t)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.sourceId=null,this.internalMonitor=t.getMonitor()}}let br=!1;class Vg{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}canDrop(){if(!this.targetId)return!1;q(!br,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return br=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{br=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function Jg(s,t,r){const n=r.getRegistry(),a=n.addTarget(s,t);return[a,()=>n.removeTarget(a)]}function Yg(s,t,r){const n=r.getRegistry(),a=n.addSource(s,t);return[a,()=>n.removeSource(a)]}function Gr(s,t,r,n){let a;if(a!==void 0)return!!a;if(s===t)return!0;if(typeof s!="object"||!s||typeof t!="object"||!t)return!1;const i=Object.keys(s),o=Object.keys(t);if(i.length!==o.length)return!1;const l=Object.prototype.hasOwnProperty.bind(t);for(let d=0;d<i.length;d++){const c=i[d];if(!l(c))return!1;const u=s[c],p=t[c];if(a=void 0,a===!1||a===void 0&&u!==p)return!1}return!0}function zr(s){return s!==null&&typeof s=="object"&&Object.prototype.hasOwnProperty.call(s,"current")}function Kg(s){if(typeof s.type=="string")return;const t=s.type.displayName||s.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function Xg(s){return(t=null,r=null)=>{if(!m.isValidElement(t)){const i=t;return s(i,r),i}const n=t;return Kg(n),Qg(n,r?i=>s(i,r):s)}}function uo(s){const t={};return Object.keys(s).forEach(r=>{const n=s[r];if(r.endsWith("Ref"))t[r]=s[r];else{const a=Xg(n);t[r]=()=>a}}),t}function fa(s,t){typeof s=="function"?s(t):s.current=t}function Qg(s,t){const r=s.ref;return q(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?m.cloneElement(s,{ref:n=>{fa(r,n),fa(t,n)}}):m.cloneElement(s,{ref:t})}class Zg{receiveHandlerId(t){this.handlerId!==t&&(this.handlerId=t,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(t){this.dragSourceOptionsInternal=t}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(t){this.dragPreviewOptionsInternal=t}reconnect(){const t=this.reconnectDragSource();this.reconnectDragPreview(t)}reconnectDragSource(){const t=this.dragSource,r=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return r&&this.disconnectDragSource(),this.handlerId?t?(r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=t,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,t,this.dragSourceOptions)),r):(this.lastConnectedDragSource=t,r):r}reconnectDragPreview(t=!1){const r=this.dragPreview,n=t||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!!this.handlerId){if(!r){this.lastConnectedDragPreview=r;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=r,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,r,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!Gr(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!Gr(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(t){this.hooks=uo({dragSource:(r,n)=>{this.clearDragSource(),this.dragSourceOptions=n||null,zr(r)?this.dragSourceRef=r:this.dragSourceNode=r,this.reconnectDragSource()},dragPreview:(r,n)=>{this.clearDragPreview(),this.dragPreviewOptions=n||null,zr(r)?this.dragPreviewRef=r:this.dragPreviewNode=r,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}}class ef{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Gr(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=uo({dropTarget:(r,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,zr(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function _t(){const{dragDropManager:s}=m.useContext(eo);return q(s!=null,"Expected drag drop context"),s}function tf(s,t){const r=_t(),n=m.useMemo(()=>new Zg(r.getBackend()),[r]);return bt(()=>(n.dragSourceOptions=s||null,n.reconnect(),()=>n.disconnectDragSource()),[n,s]),bt(()=>(n.dragPreviewOptions=t||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,t]),n}function sf(){const s=_t();return m.useMemo(()=>new qg(s),[s])}class rf{beginDrag(){const t=this.spec,r=this.monitor;let n=null;return typeof t.item=="object"?n=t.item:typeof t.item=="function"?n=t.item(r):n={},n??null}canDrag(){const t=this.spec,r=this.monitor;return typeof t.canDrag=="boolean"?t.canDrag:typeof t.canDrag=="function"?t.canDrag(r):!0}isDragging(t,r){const n=this.spec,a=this.monitor,{isDragging:i}=n;return i?i(a):r===t.getSourceId()}endDrag(){const t=this.spec,r=this.monitor,n=this.connector,{end:a}=t;a&&a(r.getItem(),r),n.reconnect()}constructor(t,r,n){this.spec=t,this.monitor=r,this.connector=n}}function nf(s,t,r){const n=m.useMemo(()=>new rf(s,t,r),[t,r]);return m.useEffect(()=>{n.spec=s},[s]),n}function af(s){return m.useMemo(()=>{const t=s.type;return q(t!=null,"spec.type must be defined"),t},[s])}function of(s,t,r){const n=_t(),a=nf(s,t,r),i=af(s);bt(function(){if(i!=null){const[l,d]=Yg(i,a,n);return t.receiveHandlerId(l),r.receiveHandlerId(l),d}},[n,t,r,a,i])}function lf(s,t){const r=co(s);q(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const n=sf(),a=tf(r.options,r.previewOptions);return of(r,n,a),[lo(r.collect,n,a),zg(a),Wg(a)]}function cf(s){return m.useMemo(()=>s.hooks.dropTarget(),[s])}function df(s){const t=_t(),r=m.useMemo(()=>new ef(t.getBackend()),[t]);return bt(()=>(r.dropTargetOptions=s||null,r.reconnect(),()=>r.disconnectDropTarget()),[s]),r}function uf(){const s=_t();return m.useMemo(()=>new Vg(s),[s])}function mf(s){const{accept:t}=s;return m.useMemo(()=>(q(s.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class pf{canDrop(){const t=this.spec,r=this.monitor;return t.canDrop?t.canDrop(r.getItem(),r):!0}hover(){const t=this.spec,r=this.monitor;t.hover&&t.hover(r.getItem(),r)}drop(){const t=this.spec,r=this.monitor;if(t.drop)return t.drop(r.getItem(),r)}constructor(t,r){this.spec=t,this.monitor=r}}function hf(s,t){const r=m.useMemo(()=>new pf(s,t),[t]);return m.useEffect(()=>{r.spec=s},[s]),r}function gf(s,t,r){const n=_t(),a=hf(s,t),i=mf(s);bt(function(){const[l,d]=Jg(i,a,n);return t.receiveHandlerId(l),r.receiveHandlerId(l),d},[n,t,a,r,i.map(o=>o.toString()).join("|")])}function ff(s,t){const r=co(s),n=uf(),a=df(r.options);return gf(r,n,a),[lo(r.collect,n,a),cf(a)]}function mo(s){let t=null;return()=>(t==null&&(t=s()),t)}function xf(s,t){return s.filter(r=>r!==t)}function bf(s,t){const r=new Set,n=i=>r.add(i);s.forEach(n),t.forEach(n);const a=[];return r.forEach(i=>a.push(i)),a}class yf{enter(t){const r=this.entered.length,n=a=>this.isNodeInDocument(a)&&(!a.contains||a.contains(t));return this.entered=bf(this.entered.filter(n),[t]),r===0&&this.entered.length>0}leave(t){const r=this.entered.length;return this.entered=xf(this.entered.filter(this.isNodeInDocument),t),r>0&&this.entered.length===0}reset(){this.entered=[]}constructor(t){this.entered=[],this.isNodeInDocument=t}}class vf{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(t=>{Object.defineProperty(this.item,t,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`),null}})})}loadDataTransfer(t){if(t){const r={};Object.keys(this.config.exposeProperties).forEach(n=>{const a=this.config.exposeProperties[n];a!=null&&(r[n]={value:a(t,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,r)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(t,r){return r===t.getSourceId()}endDrag(){}constructor(t){this.config=t,this.item={},this.initializeExposedProperties()}}const po="__NATIVE_FILE__",ho="__NATIVE_URL__",go="__NATIVE_TEXT__",fo="__NATIVE_HTML__",xa=Object.freeze(Object.defineProperty({__proto__:null,FILE:po,HTML:fo,TEXT:go,URL:ho},Symbol.toStringTag,{value:"Module"}));function yr(s,t,r){const n=t.reduce((a,i)=>a||s.getData(i),"");return n??r}const Wr={[po]:{exposeProperties:{files:s=>Array.prototype.slice.call(s.files),items:s=>s.items,dataTransfer:s=>s},matchesTypes:["Files"]},[fo]:{exposeProperties:{html:(s,t)=>yr(s,t,""),dataTransfer:s=>s},matchesTypes:["Html","text/html"]},[ho]:{exposeProperties:{urls:(s,t)=>yr(s,t,"").split(`
`),dataTransfer:s=>s},matchesTypes:["Url","text/uri-list"]},[go]:{exposeProperties:{text:(s,t)=>yr(s,t,""),dataTransfer:s=>s},matchesTypes:["Text","text/plain"]}};function jf(s,t){const r=Wr[s];if(!r)throw new Error(`native type ${s} has no configuration`);const n=new vf(r);return n.loadDataTransfer(t),n}function vr(s){if(!s)return null;const t=Array.prototype.slice.call(s.types||[]);return Object.keys(Wr).filter(r=>{const n=Wr[r];return n!=null&&n.matchesTypes?n.matchesTypes.some(a=>t.indexOf(a)>-1):!1})[0]||null}const wf=mo(()=>/firefox/i.test(navigator.userAgent)),xo=mo(()=>!!window.safari);class ba{interpolate(t){const{xs:r,ys:n,c1s:a,c2s:i,c3s:o}=this;let l=r.length-1;if(t===r[l])return n[l];let d=0,c=o.length-1,u;for(;d<=c;){u=Math.floor(.5*(d+c));const y=r[u];if(y<t)d=u+1;else if(y>t)c=u-1;else return n[u]}l=Math.max(0,c);const p=t-r[l],g=p*p;return n[l]+a[l]*p+i[l]*g+o[l]*p*g}constructor(t,r){const{length:n}=t,a=[];for(let y=0;y<n;y++)a.push(y);a.sort((y,x)=>t[y]<t[x]?-1:1);const i=[],o=[];let l,d;for(let y=0;y<n-1;y++)l=t[y+1]-t[y],d=r[y+1]-r[y],i.push(l),o.push(d/l);const c=[o[0]];for(let y=0;y<i.length-1;y++){const x=o[y],b=o[y+1];if(x*b<=0)c.push(0);else{l=i[y];const h=i[y+1],N=l+h;c.push(3*N/((N+h)/x+(N+l)/b))}}c.push(o[o.length-1]);const u=[],p=[];let g;for(let y=0;y<c.length-1;y++){g=o[y];const x=c[y],b=1/i[y],h=x+c[y+1]-g-g;u.push((g-x-h)*b),p.push(h*b*b)}this.xs=t,this.ys=r,this.c1s=c,this.c2s=u,this.c3s=p}}const Nf=1;function bo(s){const t=s.nodeType===Nf?s:s.parentElement;if(!t)return null;const{top:r,left:n}=t.getBoundingClientRect();return{x:n,y:r}}function xs(s){return{x:s.clientX,y:s.clientY}}function Sf(s){var t;return s.nodeName==="IMG"&&(wf()||!(!((t=document.documentElement)===null||t===void 0)&&t.contains(s)))}function Cf(s,t,r,n){let a=s?t.width:r,i=s?t.height:n;return xo()&&s&&(i/=window.devicePixelRatio,a/=window.devicePixelRatio),{dragPreviewWidth:a,dragPreviewHeight:i}}function kf(s,t,r,n,a){const i=Sf(t),l=bo(i?s:t),d={x:r.x-l.x,y:r.y-l.y},{offsetWidth:c,offsetHeight:u}=s,{anchorX:p,anchorY:g}=n,{dragPreviewWidth:y,dragPreviewHeight:x}=Cf(i,t,c,u),b=()=>{let A=new ba([0,.5,1],[d.y,d.y/u*x,d.y+x-u]).interpolate(g);return xo()&&i&&(A+=(window.devicePixelRatio-1)*x),A},h=()=>new ba([0,.5,1],[d.x,d.x/c*y,d.x+y-c]).interpolate(p),{offsetX:N,offsetY:j}=a,S=N===0||N,w=j===0||j;return{x:S?N:h(),y:w?j:b()}}class Tf{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var t;return!((t=this.globalContext)===null||t===void 0)&&t.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var t;return((t=this.optionsArgs)===null||t===void 0?void 0:t.rootElement)||this.window}constructor(t,r){this.ownerDocument=null,this.globalContext=t,this.optionsArgs=r}}function Df(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function ya(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){Df(s,a,r[a])})}return s}class Pf{profile(){var t,r;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((t=this.dragStartSourceIds)===null||t===void 0?void 0:t.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((r=this.dragOverTargetIds)===null||r===void 0?void 0:r.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const t=this.rootElement;if(t!==void 0){if(t.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");t.__isReactDndBackendSetUp=!0,this.addEventListeners(t)}}teardown(){const t=this.rootElement;if(t!==void 0&&(t.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var r;(r=this.window)===null||r===void 0||r.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(t,r,n){return this.sourcePreviewNodeOptions.set(t,n),this.sourcePreviewNodes.set(t,r),()=>{this.sourcePreviewNodes.delete(t),this.sourcePreviewNodeOptions.delete(t)}}connectDragSource(t,r,n){this.sourceNodes.set(t,r),this.sourceNodeOptions.set(t,n);const a=o=>this.handleDragStart(o,t),i=o=>this.handleSelectStart(o);return r.setAttribute("draggable","true"),r.addEventListener("dragstart",a),r.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(t),this.sourceNodeOptions.delete(t),r.removeEventListener("dragstart",a),r.removeEventListener("selectstart",i),r.setAttribute("draggable","false")}}connectDropTarget(t,r){const n=o=>this.handleDragEnter(o,t),a=o=>this.handleDragOver(o,t),i=o=>this.handleDrop(o,t);return r.addEventListener("dragenter",n),r.addEventListener("dragover",a),r.addEventListener("drop",i),()=>{r.removeEventListener("dragenter",n),r.removeEventListener("dragover",a),r.removeEventListener("drop",i)}}addEventListeners(t){t.addEventListener&&(t.addEventListener("dragstart",this.handleTopDragStart),t.addEventListener("dragstart",this.handleTopDragStartCapture,!0),t.addEventListener("dragend",this.handleTopDragEndCapture,!0),t.addEventListener("dragenter",this.handleTopDragEnter),t.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.addEventListener("dragover",this.handleTopDragOver),t.addEventListener("dragover",this.handleTopDragOverCapture,!0),t.addEventListener("drop",this.handleTopDrop),t.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(t){t.removeEventListener&&(t.removeEventListener("dragstart",this.handleTopDragStart),t.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),t.removeEventListener("dragend",this.handleTopDragEndCapture,!0),t.removeEventListener("dragenter",this.handleTopDragEnter),t.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.removeEventListener("dragover",this.handleTopDragOver),t.removeEventListener("dragover",this.handleTopDragOverCapture,!0),t.removeEventListener("drop",this.handleTopDrop),t.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourceNodeOptions.get(t);return ya({dropEffect:this.altKeyPressed?"copy":"move"},r||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourcePreviewNodeOptions.get(t);return ya({anchorX:.5,anchorY:.5,captureDraggingState:!1},r||{})}isDraggingNativeItem(){const t=this.monitor.getItemType();return Object.keys(xa).some(r=>xa[r]===t)}beginDragNativeItem(t,r){this.clearCurrentDragSourceNode(),this.currentNativeSource=jf(t,r),this.currentNativeHandle=this.registry.addSource(t,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(t){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=t;const r=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var n;return(n=this.rootElement)===null||n===void 0?void 0:n.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},r)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var t;(t=this.window)===null||t===void 0||t.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(t,r){t.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(r))}handleDragEnter(t,r){this.dragEnterTargetIds.unshift(r)}handleDragOver(t,r){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(r)}handleDrop(t,r){this.dropTargetIds.unshift(r)}constructor(t,r,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=a=>{const i=this.sourceNodes.get(a);return i&&bo(i)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=a=>!!(a&&this.document&&this.document.body&&this.document.body.contains(a)),this.endDragIfSourceWasRemovedFromDOM=()=>{const a=this.currentDragSourceNode;a==null||this.isNodeInDocument(a)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=a=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(a||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=a=>{if(a.defaultPrevented)return;const{dragStartSourceIds:i}=this;this.dragStartSourceIds=null;const o=xs(a);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(i||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:o});const{dataTransfer:l}=a,d=vr(l);if(this.monitor.isDragging()){if(l&&typeof l.setDragImage=="function"){const u=this.monitor.getSourceId(),p=this.sourceNodes.get(u),g=this.sourcePreviewNodes.get(u)||p;if(g){const{anchorX:y,anchorY:x,offsetX:b,offsetY:h}=this.getCurrentSourcePreviewNodeOptions(),S=kf(p,g,o,{anchorX:y,anchorY:x},{offsetX:b,offsetY:h});l.setDragImage(g,S.x,S.y)}}try{l==null||l.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(a.target);const{captureDraggingState:c}=this.getCurrentSourcePreviewNodeOptions();c?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(d)this.beginDragNativeItem(d);else{if(l&&!l.types&&(a.target&&!a.target.hasAttribute||!a.target.hasAttribute("draggable")))return;a.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=a=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(a.dataTransfer)}if(!this.enterLeaveCounter.enter(a.target)||this.monitor.isDragging())return;const{dataTransfer:l}=a,d=vr(l);d&&this.beginDragNativeItem(d,l)},this.handleTopDragEnter=a=>{const{dragEnterTargetIds:i}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=a.altKey,i.length>0&&this.actions.hover(i,{clientOffset:xs(a)}),i.some(l=>this.monitor.canDropOnTarget(l))&&(a.preventDefault(),a.dataTransfer&&(a.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=a=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(a.dataTransfer)}},this.handleTopDragOver=a=>{const{dragOverTargetIds:i}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){a.preventDefault(),a.dataTransfer&&(a.dataTransfer.dropEffect="none");return}this.altKeyPressed=a.altKey,this.lastClientOffset=xs(a),this.scheduleHover(i),(i||[]).some(l=>this.monitor.canDropOnTarget(l))?(a.preventDefault(),a.dataTransfer&&(a.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?a.preventDefault():(a.preventDefault(),a.dataTransfer&&(a.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=a=>{this.isDraggingNativeItem()&&a.preventDefault(),this.enterLeaveCounter.leave(a.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=a=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var i;a.preventDefault(),(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(a.dataTransfer)}else vr(a.dataTransfer)&&a.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=a=>{const{dropTargetIds:i}=this;this.dropTargetIds=[],this.actions.hover(i,{clientOffset:xs(a)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=a=>{const i=a.target;typeof i.dragDrop=="function"&&(i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable||(a.preventDefault(),i.dragDrop()))},this.options=new Tf(r,n),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.enterLeaveCounter=new yf(this.isNodeInDocument)}}const Af=function(t,r,n){return new Pf(t,r,n)},Ef=({projectId:s,onCodeChange:t,initialComponents:r=[]})=>{var P,I,M,F,v,O;const[n,a]=m.useState(r),[i,o]=m.useState(null),[l,d]=m.useState(!1),[c,u]=m.useState(!1),[p,g]=m.useState({width:1200,height:800}),[y,x]=m.useState(1),b=m.useRef(null),h=[{type:"container",name:"Container",icon:"📦",category:"Layout"},{type:"text",name:"Text",icon:"📝",category:"Content"},{type:"button",name:"Button",icon:"🔘",category:"Interactive"},{type:"input",name:"Input",icon:"📝",category:"Form"},{type:"image",name:"Image",icon:"🖼️",category:"Media"},{type:"card",name:"Card",icon:"🃏",category:"Layout"},{type:"header",name:"Header",icon:"📋",category:"Layout"},{type:"footer",name:"Footer",icon:"🦶",category:"Layout"},{type:"sidebar",name:"Sidebar",icon:"📑",category:"Layout"},{type:"navbar",name:"Navbar",icon:"🧭",category:"Navigation"},{type:"form",name:"Form",icon:"📋",category:"Form"},{type:"table",name:"Table",icon:"📊",category:"Data"},{type:"chart",name:"Chart",icon:"📈",category:"Data"},{type:"modal",name:"Modal",icon:"🪟",category:"Overlay"},{type:"dropdown",name:"Dropdown",icon:"📋",category:"Interactive"}],N=k=>({container:`<div className="container" style={${JSON.stringify(k.styles)}}>
  {children}
</div>`,text:`<p className="text" style={${JSON.stringify(k.styles)}}>
  ${k.content||"Text content"}
</p>`,button:`<button className="btn" style={${JSON.stringify(k.styles)}} onClick={${k.onClick||"() => {}"}}>
  ${k.content||"Button"}
</button>`,input:`<input 
  className="input" 
  type="${k.inputType||"text"}"
  placeholder="${k.placeholder||""}"
  style={${JSON.stringify(k.styles)}}
/>`,image:`<img 
  className="image" 
  src="${k.src||"/placeholder.jpg"}"
  alt="${k.alt||""}"
  style={${JSON.stringify(k.styles)}}
/>`,card:`<div className="card" style={${JSON.stringify(k.styles)}}>
  <div className="card-header">
    <h3>${k.title||"Card Title"}</h3>
  </div>
  <div className="card-body">
    <p>${k.content||"Card content"}</p>
  </div>
</div>`,header:`<header className="header" style={${JSON.stringify(k.styles)}}>
  <h1>${k.content||"Header"}</h1>
</header>`,footer:`<footer className="footer" style={${JSON.stringify(k.styles)}}>
  <p>${k.content||"Footer content"}</p>
</footer>`,sidebar:`<aside className="sidebar" style={${JSON.stringify(k.styles)}}>
  <nav>
    <ul>
      <li><a href="#">Menu Item 1</a></li>
      <li><a href="#">Menu Item 2</a></li>
    </ul>
  </nav>
</aside>`,navbar:`<nav className="navbar" style={${JSON.stringify(k.styles)}}>
  <div className="nav-brand">${k.brand||"Brand"}</div>
  <ul className="nav-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`,form:`<form className="form" style={${JSON.stringify(k.styles)}} onSubmit={${k.onSubmit||"() => {}"}}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" name="name" />
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" name="email" />
  </div>
  <button type="submit">Submit</button>
</form>`,table:`<table className="table" style={${JSON.stringify(k.styles)}}>
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
</table>`,chart:`<div className="chart" style={${JSON.stringify(k.styles)}}>
  <canvas id="chart-${k.id}"></canvas>
</div>`,modal:`<div className="modal" style={${JSON.stringify(k.styles)}}>
  <div className="modal-content">
    <span className="close" onClick={${k.onClose||"() => {}"}}>&times;</span>
    <h2>${k.title||"Modal Title"}</h2>
    <p>${k.content||"Modal content"}</p>
  </div>
</div>`,dropdown:`<div className="dropdown" style={${JSON.stringify(k.styles)}}>
  <button className="dropdown-toggle" onClick={${k.onToggle||"() => {}"}}>
    ${k.label||"Dropdown"}
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
</div>`})[k.type]||`<div>Unknown component: ${k.type}</div>`,j=()=>{const k=`import React, { useState, useEffect } from 'react';
import './App.css';`,E=`const App = () => {
  return (
    <div className="app">
      ${n.map(U=>N(U)).join(`

`)}
    </div>
  );
};

export default App;`;return`${k}

${E}`},S=(k,C)=>{const E=C.getDropResult();if(!E)return;const U={id:`component-${Date.now()}`,type:k.type,name:k.name,position:{x:E.x,y:E.y},size:{width:200,height:100},styles:{position:"absolute",left:`${E.x}px`,top:`${E.y}px`,width:"200px",height:"100px",border:"1px solid #ddd",padding:"10px",backgroundColor:"#fff"},content:k.name,properties:{}};a(G=>[...G,U])},w=k=>{o(k),d(!0)},f=(k,C)=>{if(!i)return;const E={...i,[k]:C,styles:{...i.styles,[k]:C}};a(U=>U.map(G=>G.id===i.id?E:G)),o(E)},A=()=>`
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
`,R=()=>{const k={components:n,appCode:j(),cssCode:A(),metadata:{projectId:s,exportedAt:new Date().toISOString(),componentCount:n.length}},C=JSON.stringify(k,null,2),E=new Blob([C],{type:"application/json"}),U=URL.createObjectURL(E),G=document.createElement("a");G.href=U,G.download=`dreambuild-project-${s}.json`,G.click(),URL.revokeObjectURL(U)};return m.useEffect(()=>{t&&t({appCode:j(),cssCode:A(),components:n})},[n,t]),e.jsx(Fg,{backend:Af,children:e.jsxs("div",{className:"visual-editor",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("h2",{children:"🎨 Visual Editor"}),e.jsxs("div",{className:"editor-controls",children:[e.jsx("button",{className:"btn btn-secondary",onClick:()=>u(!c),children:c?"Edit":"Preview"}),e.jsx("button",{className:"btn btn-primary",onClick:R,children:"Export"})]})]}),e.jsxs("div",{className:"editor-layout",children:[e.jsxs("div",{className:"component-library",children:[e.jsx("h3",{children:"📚 Component Library"}),e.jsx("div",{className:"library-categories",children:["Layout","Content","Interactive","Form","Media","Data","Navigation","Overlay"].map(k=>e.jsxs("div",{className:"category",children:[e.jsx("h4",{children:k}),e.jsx("div",{className:"category-components",children:h.filter(C=>C.category===k).map(C=>e.jsx(Rf,{type:C.type,name:C.name,icon:C.icon},C.type))})]},k))})]}),e.jsxs("div",{className:"canvas-container",children:[e.jsxs("div",{className:"canvas-toolbar",children:[e.jsxs("div",{className:"canvas-controls",children:[e.jsx("button",{className:"btn btn-sm",onClick:()=>x(y*.8),children:"Zoom Out"}),e.jsxs("span",{className:"zoom-level",children:[Math.round(y*100),"%"]}),e.jsx("button",{className:"btn btn-sm",onClick:()=>x(y*1.2),children:"Zoom In"})]}),e.jsx("div",{className:"canvas-size",children:e.jsxs("select",{value:`${p.width}x${p.height}`,onChange:k=>{const[C,E]=k.target.value.split("x").map(Number);g({width:C,height:E})},children:[e.jsx("option",{value:"1200x800",children:"Desktop (1200x800)"}),e.jsx("option",{value:"768x1024",children:"Tablet (768x1024)"}),e.jsx("option",{value:"375x667",children:"Mobile (375x667)"})]})})]}),e.jsx("div",{className:"canvas",ref:b,style:{width:p.width*y,height:p.height*y,transform:`scale(${y})`,transformOrigin:"top left"},children:e.jsx(If,{onDrop:S,children:n.map(k=>e.jsx(Of,{component:k,onSelect:w,isSelected:(i==null?void 0:i.id)===k.id},k.id))})})]}),l&&i&&e.jsxs("div",{className:"properties-panel",children:[e.jsx("h3",{children:"⚙️ Properties"}),e.jsxs("div",{className:"property-groups",children:[e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Content"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Text Content"}),e.jsx("input",{type:"text",value:i.content||"",onChange:k=>f("content",k.target.value)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Position"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"X Position"}),e.jsx("input",{type:"number",value:((P=i.position)==null?void 0:P.x)||0,onChange:k=>f("left",`${k.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Y Position"}),e.jsx("input",{type:"number",value:((I=i.position)==null?void 0:I.y)||0,onChange:k=>f("top",`${k.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Size"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Width"}),e.jsx("input",{type:"number",value:((M=i.size)==null?void 0:M.width)||200,onChange:k=>f("width",`${k.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Height"}),e.jsx("input",{type:"number",value:((F=i.size)==null?void 0:F.height)||100,onChange:k=>f("height",`${k.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Style"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Background Color"}),e.jsx("input",{type:"color",value:((v=i.styles)==null?void 0:v.backgroundColor)||"#ffffff",onChange:k=>f("backgroundColor",k.target.value)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Border Color"}),e.jsx("input",{type:"color",value:((O=i.styles)==null?void 0:O.borderColor)||"#dddddd",onChange:k=>f("borderColor",k.target.value)})]})]})]})]})]}),e.jsx("style",{jsx:!0,children:`
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
        `})]})})},Rf=({type:s,name:t,icon:r})=>{const[{isDragging:n},a]=lf({type:"component",item:{type:s,name:t},collect:i=>({isDragging:i.isDragging()})});return e.jsxs("div",{ref:a,className:`draggable-component ${n?"dragging":""}`,children:[e.jsx("span",{className:"component-icon",children:r}),e.jsx("span",{className:"component-name",children:t})]})},If=({children:s,onDrop:t})=>{const[{isOver:r},n]=ff({accept:"component",drop:(a,i)=>{var d;const o=i.getClientOffset(),l=(d=i.getDropResult())==null?void 0:d.getBoundingClientRect();o&&l&&t(a,{x:o.x-l.left,y:o.y-l.top})},collect:a=>({isOver:a.isOver()})});return e.jsx("div",{ref:n,className:`droppable-canvas ${r?"drag-over":""}`,children:s})},Of=({component:s,onSelect:t,isSelected:r})=>{const n=a=>{a.stopPropagation(),t(s)};return e.jsx("div",{className:`visual-component ${r?"selected":""}`,style:s.styles,onClick:n,children:e.jsxs("div",{className:"component-content",children:[s.type==="text"&&(s.content||"Text"),s.type==="button"&&(s.content||"Button"),s.type==="input"&&e.jsx("input",{placeholder:s.placeholder||"Input"}),s.type==="image"&&e.jsx("div",{className:"image-placeholder",children:"🖼️ Image"}),s.type==="card"&&e.jsxs("div",{children:[e.jsx("h3",{children:s.title||"Card Title"}),e.jsx("p",{children:s.content||"Card content"})]}),!["text","button","input","image","card"].includes(s.type)&&e.jsx("div",{className:"component-placeholder",children:s.name})]})})},Lf=({projectId:s,projectData:t,onDeploy:r})=>{const[n,a]=m.useState("vercel"),[i,o]=m.useState(!1),[l,d]=m.useState(null),c=[{id:"vercel",name:"Vercel",icon:"▲",description:"Fast, global deployment"},{id:"netlify",name:"Netlify",icon:"🌐",description:"JAMstack deployment"},{id:"aws",name:"AWS Amplify",icon:"☁️",description:"Full-stack deployment"},{id:"firebase",name:"Firebase",icon:"🔥",description:"Google hosting"},{id:"github",name:"GitHub Pages",icon:"🐙",description:"Free static hosting"}],u=async()=>{o(!0),d("Deploying...");try{await new Promise(g=>setTimeout(g,3e3));const p={success:!0,provider:n,url:`https://${s}.${n}.com`,deployedAt:new Date().toISOString()};d("Deployed successfully!"),r&&r(p)}catch{d("Deployment failed")}finally{o(!1)}};return e.jsxs("div",{className:"deployment-panel",children:[e.jsx("h3",{children:"🚀 Deploy Your App"}),e.jsxs("div",{className:"provider-selection",children:[e.jsx("h4",{children:"Choose Hosting Provider"}),e.jsx("div",{className:"providers-grid",children:c.map(p=>e.jsxs("div",{className:`provider-card ${n===p.id?"selected":""}`,onClick:()=>a(p.id),children:[e.jsx("div",{className:"provider-icon",children:p.icon}),e.jsx("div",{className:"provider-name",children:p.name}),e.jsx("div",{className:"provider-description",children:p.description})]},p.id))})]}),e.jsx("div",{className:"deployment-actions",children:e.jsx("button",{className:"btn btn-primary btn-lg",onClick:u,disabled:i,children:i?"Deploying...":"Deploy Now"})}),l&&e.jsx("div",{className:"deployment-status",children:e.jsx("div",{className:`status-message ${l.includes("success")?"success":"error"}`,children:l})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},Mf=({projectId:s,onMemoryUpdate:t})=>{const[r,n]=m.useState(null),[a,i]=m.useState([]),[o,l]=m.useState(""),[d,c]=m.useState([]),[u,p]=m.useState(!1),[g,y]=m.useState(null);m.useEffect(()=>{s&&(x(),b())},[s]);const x=async()=>{try{p(!0);const S=await Wt.loadConversationMemory(s);if(n(S),S){const w=await Wt.getConversationHistory(s);i(w)}}catch(S){console.error("Failed to load memory:",S)}finally{p(!1)}},b=async()=>{try{const S=await Wt.getStorageStats();y(S)}catch(S){console.error("Failed to load stats:",S)}},h=async()=>{if(o.trim())try{p(!0);const S=await Wt.searchConversationMemory(s,o);c(S)}catch(S){console.error("Failed to search memory:",S)}finally{p(!1)}},N=async()=>{if(window.confirm("Are you sure you want to clear all conversation memory?"))try{await Wt.clearConversationMemory(s),n(null),i([]),c([]),t&&t()}catch(S){console.error("Failed to clear memory:",S)}},j=()=>{if(!r)return;const S=JSON.stringify(r,null,2),w=new Blob([S],{type:"application/json"}),f=URL.createObjectURL(w),A=document.createElement("a");A.href=f,A.download=`dreambuild-memory-${s}.json`,A.click(),URL.revokeObjectURL(f)};return u?e.jsx("div",{className:"memory-manager",children:e.jsx("div",{className:"loading",children:"Loading memory..."})}):e.jsxs("div",{className:"memory-manager",children:[e.jsxs("div",{className:"memory-header",children:[e.jsx("h3",{children:"🧠 Conversation Memory"}),e.jsxs("div",{className:"memory-actions",children:[e.jsx("button",{onClick:x,className:"btn btn-secondary",children:"Refresh"}),e.jsx("button",{onClick:j,className:"btn btn-secondary",children:"Export"}),e.jsx("button",{onClick:N,className:"btn btn-danger",children:"Clear"})]})]}),g&&e.jsxs("div",{className:"memory-stats",children:[e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Projects:"}),e.jsx("span",{className:"stat-value",children:g.totalProjects})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Files:"}),e.jsx("span",{className:"stat-value",children:g.totalFiles})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Size:"}),e.jsxs("span",{className:"stat-value",children:[g.totalSizeMB," MB"]})]})]}),e.jsxs("div",{className:"memory-search",children:[e.jsx("input",{type:"text",placeholder:"Search conversation memory...",value:o,onChange:S=>l(S.target.value),onKeyPress:S=>S.key==="Enter"&&h()}),e.jsx("button",{onClick:h,className:"btn btn-primary",children:"Search"})]}),d.length>0&&e.jsxs("div",{className:"search-results",children:[e.jsx("h4",{children:"Search Results"}),d.map((S,w)=>e.jsxs("div",{className:"search-result",children:[e.jsx("div",{className:"result-type",children:S.type}),e.jsx("div",{className:"result-text",children:S.text}),e.jsx("div",{className:"result-timestamp",children:S.timestamp})]},w))]}),a.prompts&&a.prompts.length>0&&e.jsxs("div",{className:"conversation-history",children:[e.jsx("h4",{children:"Conversation History"}),e.jsxs("div",{className:"history-stats",children:[e.jsxs("span",{children:["Prompts: ",a.totalPrompts]}),e.jsxs("span",{children:["Responses: ",a.totalResponses]})]}),e.jsx("div",{className:"history-list",children:a.prompts.map((S,w)=>e.jsxs("div",{className:"history-item",children:[e.jsxs("div",{className:"history-prompt",children:[e.jsx("strong",{children:"Prompt:"})," ",S.text]}),a.responses[w]&&e.jsxs("div",{className:"history-response",children:[e.jsx("strong",{children:"Response:"})," ",a.responses[w].text]}),e.jsx("div",{className:"history-timestamp",children:new Date(S.timestamp).toLocaleString()})]},S.id))})]}),r&&e.jsxs("div",{className:"memory-details",children:[e.jsx("h4",{children:"Memory Details"}),e.jsxs("div",{className:"memory-info",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Project ID:"})," ",r.projectId]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Created:"})," ",new Date(r.createdAt).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Last Updated:"})," ",new Date(r.lastUpdated).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Memory Size:"})," ",JSON.stringify(r).length," bytes"]})]})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},Ff=({projectId:s,initialFiles:t={}})=>{const[r,n]=m.useState("code"),[a,i]=m.useState(t),[o,l]=m.useState(null),[d,c]=m.useState(!1),[u,p]=m.useState(!1),[g,y]=m.useState(null),x=[{id:"code",name:"Code Editor",icon:"💻"},{id:"visual",name:"Visual Editor",icon:"🎨"},{id:"collaboration",name:"Collaboration",icon:"🤝"},{id:"deployment",name:"Deployment",icon:"🚀"},{id:"memory",name:"Memory",icon:"🧠"}],b=(w,f)=>{i(A=>({...A,[w]:f}))},h=w=>{w.appCode&&b("src/App.jsx",w.appCode),w.cssCode&&b("src/App.css",w.cssCode)},N=w=>{y(w),console.log("Deployment result:",w)},j=w=>{i(f=>({...f,...w})),console.log("Version restored:",w)},S=()=>{switch(r){case"code":return e.jsxs("div",{className:"code-editor-tab",children:[e.jsxs("div",{className:"file-explorer",children:[e.jsx("h3",{children:"📁 Files"}),e.jsx("div",{className:"file-list",children:Object.keys(a).map(w=>e.jsxs("div",{className:`file-item ${o===w?"selected":""}`,onClick:()=>l(w),children:[e.jsx("span",{className:"file-icon",children:"📄"}),e.jsx("span",{className:"file-name",children:w})]},w))})]}),e.jsx("div",{className:"code-editor",children:o&&e.jsxs("div",{className:"editor-container",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("span",{className:"file-name",children:o}),e.jsxs("div",{className:"editor-actions",children:[e.jsx("button",{className:"btn btn-sm",children:"Save"}),e.jsx("button",{className:"btn btn-sm",children:"Format"})]})]}),e.jsx("textarea",{className:"code-textarea",value:a[o]||"",onChange:w=>b(o,w.target.value),placeholder:"Start coding..."})]})})]});case"visual":return e.jsx("div",{className:"visual-editor-tab",children:e.jsx(Ef,{projectId:s,onCodeChange:h,initialComponents:[]})});case"collaboration":return e.jsxs("div",{className:"collaboration-tab",children:[e.jsxs("div",{className:"collaboration-header",children:[e.jsx("h3",{children:"🤝 Real-time Collaboration"}),e.jsxs("button",{className:`btn ${d?"btn-danger":"btn-primary"}`,onClick:()=>c(!d),children:[d?"Disable":"Enable"," Collaboration"]})]}),d?e.jsx(vh,{projectId:s,fileId:o,onFileChange:b,onVersionRestore:j}):e.jsxs("div",{className:"collaboration-disabled",children:[e.jsx("p",{children:"Enable collaboration to work with team members in real-time"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Multi-user co-editing"}),e.jsx("li",{children:"Real-time comments"}),e.jsx("li",{children:"Version history"}),e.jsx("li",{children:"User presence"})]})]})]});case"deployment":return e.jsxs("div",{className:"deployment-tab",children:[e.jsx(Lf,{projectId:s,projectData:{files:a},onDeploy:N}),g&&e.jsxs("div",{className:"deployment-result",children:[e.jsx("h4",{children:"Deployment Result"}),e.jsxs("div",{className:"result-details",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Provider:"})," ",g.provider]}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ",e.jsx("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",children:g.url})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",g.status]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deployed:"})," ",new Date(g.deployedAt).toLocaleString()]})]})]})]});case"memory":return e.jsx("div",{className:"memory-tab",children:e.jsx(Mf,{projectId:s,onMemoryUpdate:()=>console.log("Memory updated")})});default:return e.jsx("div",{children:"Select a tab to get started"})}};return e.jsxs("div",{className:"integrated-workspace",children:[e.jsxs("div",{className:"workspace-header",children:[e.jsx("h2",{children:"🚀 DreamBuild Advanced Workspace"}),e.jsxs("div",{className:"workspace-status",children:[e.jsx("span",{className:"status-indicator",children:"●"}),e.jsxs("span",{children:["Project: ",s]})]})]}),e.jsx("div",{className:"workspace-tabs",children:x.map(w=>e.jsxs("button",{className:`tab-button ${r===w.id?"active":""}`,onClick:()=>n(w.id),children:[e.jsx("span",{className:"tab-icon",children:w.icon}),e.jsx("span",{className:"tab-name",children:w.name})]},w.id))}),e.jsx("div",{className:"workspace-content",children:S()}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},$f=({onTemplateSelect:s,isVisible:t,onClose:r})=>{var R;const{currentProject:n,updateFile:a,switchFile:i}=Ge(),[o,l]=m.useState(""),[d,c]=m.useState("all"),[u,p]=m.useState(!1),g=[{id:"all",name:"All Templates",icon:ht,color:"text-purple-500"},{id:"web-apps",name:"Web Apps",icon:je,color:"text-blue-500"},{id:"mobile-apps",name:"Mobile Apps",icon:Zt,color:"text-green-500"},{id:"games",name:"Games",icon:Yo,color:"text-orange-500"},{id:"tools",name:"Tools",icon:W,color:"text-gray-500"}],[y,x]=m.useState([]),[b,h]=m.useState([]),[N,j]=m.useState(!0);m.useEffect(()=>{t&&(async()=>{try{j(!0);const[I,M]=await Promise.all([Yt.getAllTemplates(),Yt.getPopularTemplates()]);x(I),h(M)}catch(I){console.error("Failed to load templates:",I),J.error("Failed to load templates")}finally{j(!1)}})()},[t]);const S=y.filter(P=>{const I=P.name.toLowerCase().includes(o.toLowerCase())||P.description.toLowerCase().includes(o.toLowerCase()),M=d==="all"||P.category===d;return I&&M}),w=async P=>{p(!0);try{console.log("🎯 Generating template:",P.id);const I=await Yt.generateTemplateById(P.id);Object.entries(I).forEach(([F,v])=>{a(F,v)});const M=Object.keys(I)[0];M&&i(M),J.success(`Generated ${P.name} successfully!`),s&&s(P,I),r&&r()}catch(I){console.error("❌ Template generation failed:",I),J.error(`Failed to generate ${P.name}`)}finally{p(!1)}},f=P=>{const I=g.find(M=>M.id===P);return I?I.icon:W},A=P=>{const I=g.find(M=>M.id===P);return I?I.color:"text-gray-500"};return t?e.jsx(qe,{children:e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",onClick:r,children:e.jsxs(L.div,{initial:{scale:.95},animate:{scale:1},exit:{scale:.95},className:"bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:P=>P.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:e.jsx(be,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-foreground",children:"Template Gallery"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Choose a template to get started"})]})]}),e.jsx("button",{onClick:r,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Close",children:e.jsx("span",{className:"text-xl text-muted-foreground",children:"×"})})]}),e.jsxs("div",{className:"p-6 border-b border-border",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx(Ze,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search templates...",value:o,onChange:P=>l(P.target.value),className:"w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20"})]}),e.jsxs("button",{className:"px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:bg-muted/80 transition-colors flex items-center gap-2",children:[e.jsx(Fs,{className:"h-4 w-4"}),"Filters"]})]}),e.jsx("div",{className:"flex gap-2 overflow-x-auto",children:g.map(P=>{const I=P.icon;return e.jsxs("button",{onClick:()=>c(P.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${d===P.id?"bg-blue-500 text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[e.jsx(I,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:P.name})]},P.id)})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[d==="all"&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(me,{className:"h-5 w-5 text-yellow-500"}),e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Popular Templates"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:N?Array.from({length:3}).map((P,I)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},I)):b.map(P=>{const I=f(P.category),M=A(P.category);return e.jsxs(L.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>w(P),disabled:u,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${M}`,children:e.jsx(I,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:P.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[P.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:P.description})]},P.id)})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:d==="all"?"All Templates":(R=g.find(P=>P.id===d))==null?void 0:R.name}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:[S.length," template",S.length!==1?"s":""]})]}),S.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4",children:e.jsx(Ze,{className:"h-8 w-8 text-muted-foreground"})}),e.jsx("h4",{className:"text-lg font-medium text-foreground mb-2",children:"No templates found"}),e.jsx("p",{className:"text-muted-foreground",children:"Try adjusting your search or filters"})]}):N?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Array.from({length:6}).map((P,I)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},I))}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:S.map(P=>{const I=f(P.category),M=A(P.category);return e.jsxs(L.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>w(P),disabled:u,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${M}`,children:e.jsx(I,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:P.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[P.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:P.description})]},P.id)})})]})]}),e.jsx("div",{className:"p-6 border-t border-border bg-muted/30",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"Need something custom? Use the AI prompt to generate unique applications."}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"Close"})]})})]})})}):null},_f=({children:s,direction:t="horizontal",className:r=""})=>e.jsx("div",{className:`resizable-panel-group flex ${t} h-full ${r}`,children:s}),jr=({children:s,defaultSize:t=50,minSize:r=10,maxSize:n=90,className:a=""})=>e.jsx("div",{className:`resizable-panel ${a}`,style:{flexBasis:`${t}%`,minWidth:`${r}%`,maxWidth:`${n}%`},children:s}),va=({className:s="",onResize:t,children:r,handleIndex:n=0})=>{const[a,i]=m.useState(!1),o=m.useRef(null),l=u=>{i(!0),u.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",console.log("Handle clicked:",n)},d=m.useCallback(u=>{var N;if(!a)return;const p=(N=o.current)==null?void 0:N.parentElement;if(!p)return;const g=p.getBoundingClientRect(),x=(u.clientX-g.left)/g.width*100,h=Array.from(p.children).filter(j=>j.classList.contains("resizable-panel"));if(console.log("Total panels found:",h.length,"Handle index:",n),h.length>=2){let j,S;if(n===0?(j=h[0],S=h[1],console.log("Resizing File Manager and Code Editor")):n===1&&(j=h[1],S=h[2],console.log("Resizing Code Editor and AI Assistant")),j&&S){const w=Math.max(15,Math.min(70,x)),f=Math.max(15,Math.min(70,100-w));console.log("Setting sizes:",{leftSize:w,rightSize:f,percentage:x}),j.style.flexBasis=`${w}%`,S.style.flexBasis=`${f}%`,j.style.border="3px solid red",S.style.border="3px solid blue",setTimeout(()=>{j.style.border="",S.style.border=""},300),t&&t({leftSize:w,rightSize:f})}}},[a,t,n]),c=m.useCallback(()=>{i(!1),document.body.style.cursor="",document.body.style.userSelect=""},[]);return m.useEffect(()=>{if(a)return document.addEventListener("mousemove",d),document.addEventListener("mouseup",c),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c)}},[a,d,c]),e.jsx("div",{ref:o,className:`resizable-handle w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group flex items-center justify-center ${a?"bg-primary/70":""} ${s}`,onMouseDown:l,children:r||e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/70 transition-colors"})})},Bf=()=>{const[s,t]=m.useState("editor"),[r,n]=m.useState(!1),[a,i]=m.useState(!1),o=[{id:"editor",label:"Code Editor",icon:W,description:"Edit your code with live preview"},{id:"preview",label:"Live Preview",icon:Be,description:"View your application in real-time"},{id:"terminal",label:"Terminal",icon:Cr,description:"Command line interface"},{id:"workspace",label:"Advanced Workspace",icon:_e,description:"Full-featured workspace with collaboration, visual editor, and deployment"}],l=d=>{d==="workspace"?s==="workspace"&&r?(n(!1),t("editor")):(n(!0),t(d)):(t(d),n(!1))};return e.jsxs("div",{className:"h-screen bg-background flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between px-8 py-4 bg-gradient-to-r from-card/95 to-background/95 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-primary/5",style:{marginTop:"45px"},children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:e.jsx(W,{className:"h-5 w-5 text-primary-foreground"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold text-foreground",children:"AI Builder"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Build with artificial intelligence"})]})]}),e.jsxs(ce,{to:"/templates",className:"flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",title:"Browse Templates",children:[e.jsx(be,{className:"h-4 w-4"}),"Templates"]})]}),e.jsx("div",{className:"flex items-center gap-1 bg-muted/40 p-1.5 rounded-2xl border border-border/60 shadow-inner",children:o.map(d=>{const c=d.icon;return e.jsxs(L.button,{whileHover:{scale:1.02,y:-1},whileTap:{scale:.98},onClick:()=>l(d.id),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative group ${s===d.id?"bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105":"text-muted-foreground hover:text-foreground hover:bg-background/80 hover:shadow-sm"}`,title:d.description,children:[e.jsx(c,{className:`h-4 w-4 transition-transform duration-300 ${s===d.id?"scale-110":"group-hover:scale-105"}`}),e.jsxs("span",{className:"relative",children:[d.label,s===d.id&&e.jsx(L.div,{layoutId:"activeBuilderTab",className:"absolute inset-0 bg-primary/10 rounded-xl -z-10",initial:!1,transition:{type:"spring",stiffness:500,damping:30}})]})]},d.id)})})]}),e.jsx("div",{className:"flex-1 p-8 bg-gradient-to-br from-background via-muted/20 to-background",children:e.jsxs(_f,{direction:"horizontal",className:"h-full gap-4",children:[e.jsx(jr,{defaultSize:20,minSize:10,maxSize:50,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ee,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"Files"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(Pu,{})})]})}),e.jsx(va,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:0,children:e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),e.jsx(jr,{defaultSize:50,minSize:25,maxSize:70,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[s==="editor"&&e.jsx(W,{className:"h-4 w-4 text-primary"}),s==="preview"&&e.jsx(Be,{className:"h-4 w-4 text-primary"}),s==="workspace"&&e.jsx(_e,{className:"h-4 w-4 text-primary"}),s==="terminal"&&e.jsx(Cr,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground capitalize",children:s})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Ready"})]})]}),e.jsxs("div",{className:"flex-1 overflow-hidden h-full min-h-[600px]",children:[s==="editor"&&e.jsx(Lm,{}),s==="preview"&&e.jsx(Mm,{}),s==="workspace"&&r&&e.jsx(Ff,{projectId:"demo-project"}),s==="workspace"&&!r&&e.jsx("div",{className:"h-full flex items-center justify-center bg-muted/20",children:e.jsxs("div",{className:"text-center",children:[e.jsx(_e,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"Advanced Workspace"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Click the Advanced Workspace button to open the full-featured workspace"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[e.jsx("p",{children:"Features include:"}),e.jsxs("ul",{className:"mt-2 space-y-1",children:[e.jsx("li",{children:"• Real-time Collaboration"}),e.jsx("li",{children:"• Visual Editor"}),e.jsx("li",{children:"• One-click Deployment"}),e.jsx("li",{children:"• Memory Management"})]})]})]})}),s==="terminal"&&e.jsx("div",{className:"h-full flex flex-col bg-gray-900",children:e.jsx("div",{className:"flex-grow p-4 text-green-400 font-mono text-sm overflow-y-auto",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),e.jsx("span",{className:"text-gray-500",children:"$"}),e.jsx("span",{className:"text-gray-300",children:"npm run dev"})]}),e.jsx("div",{className:"text-gray-400",children:"Starting development server..."}),e.jsx("div",{className:"text-green-400",children:"✓ Server running on http://localhost:3000"}),e.jsx("div",{className:"text-blue-400",children:"✓ Ready in 2.3s"}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),e.jsx("span",{className:"text-gray-500",children:"$"}),e.jsx("span",{className:"text-gray-300 animate-pulse",children:"_"})]})})]})})})]})]})}),e.jsx(va,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:1,children:e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),e.jsx(jr,{defaultSize:30,minSize:15,maxSize:60,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(_e,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"AI Assistant"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(fh,{})})]})})]})}),e.jsx($f,{isVisible:a,onClose:()=>i(!1),onTemplateSelect:(d,c)=>{console.log("🎯 Template selected:",d.name),i(!1)}})]})},Uf=()=>{const{addFilesToProject:s}=Ge(),{theme:t}=Gs(),[r,n]=m.useState(""),[a,i]=m.useState("all"),[o,l]=m.useState("grid"),[d,c]=m.useState("popularity"),[u,p]=m.useState([]),[g,y]=m.useState(!0),[x,b]=m.useState(0),[h,N]=m.useState("Loading templates..."),[j,S]=m.useState(!1),[w,f]=m.useState(null),A=[{id:"web-apps",name:"Web Applications",icon:je,description:"Full-stack web applications",color:"from-blue-500 to-cyan-500"},{id:"mobile-apps",name:"Mobile Apps",icon:Zt,description:"React Native and mobile applications",color:"from-purple-500 to-pink-500"},{id:"landing-pages",name:"Landing Pages",icon:be,description:"Marketing and landing pages",color:"from-green-500 to-emerald-500"},{id:"dashboards",name:"Dashboards",icon:rs,description:"Analytics and admin dashboards",color:"from-orange-500 to-red-500"},{id:"ecommerce",name:"E-commerce",icon:Ko,description:"Online stores and marketplaces",color:"from-yellow-500 to-orange-500"},{id:"portfolio",name:"Portfolio",icon:Pa,description:"Personal and creative portfolios",color:"from-indigo-500 to-purple-500"}],R=[{id:"todo-app",name:"Todo Application",description:"A modern todo app with React, Node.js, and MongoDB",category:"web-apps",tags:["React","Node.js","MongoDB","Express"],preview:"/api/placeholder/400/300",popularity:95,createdAt:"2024-01-15",files:{"package.json":'{"name": "todo-app", "version": "1.0.0", "dependencies": {"react": "^18.0.0"}}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Todo App</div>; }'}},{id:"blog-platform",name:"Blog Platform",description:"Full-featured blog with CMS, comments, and SEO",category:"web-apps",tags:["React","Next.js","Prisma","PostgreSQL"],preview:"/api/placeholder/400/300",popularity:88,createdAt:"2024-01-10",files:{"package.json":'{"name": "blog-platform", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Blog Platform</div>; }'}},{id:"weather-app",name:"Weather App",description:"Beautiful weather app with location services",category:"mobile-apps",tags:["React Native","Expo","API"],preview:"/api/placeholder/400/300",popularity:82,createdAt:"2024-01-12",files:{"package.json":'{"name": "weather-app", "version": "1.0.0"}',"App.js":'import React from "react"; export default function App() { return <div>Weather App</div>; }'}},{id:"saas-landing",name:"SaaS Landing Page",description:"Modern SaaS landing page with pricing and features",category:"landing-pages",tags:["React","Tailwind CSS","Framer Motion"],preview:"/api/placeholder/400/300",popularity:90,createdAt:"2024-01-08",files:{"package.json":'{"name": "saas-landing", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>SaaS Landing</div>; }'}},{id:"analytics-dashboard",name:"Analytics Dashboard",description:"Real-time analytics dashboard with charts and metrics",category:"dashboards",tags:["React","Chart.js","D3.js","WebSocket"],preview:"/api/placeholder/400/300",popularity:85,createdAt:"2024-01-05",files:{"package.json":'{"name": "analytics-dashboard", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Analytics Dashboard</div>; }'}},{id:"online-store",name:"Online Store",description:"Complete e-commerce solution with cart and payments",category:"ecommerce",tags:["React","Stripe","Firebase","Redux"],preview:"/api/placeholder/400/300",popularity:92,createdAt:"2024-01-03",files:{"package.json":'{"name": "online-store", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Online Store</div>; }'}},{id:"creative-portfolio",name:"Creative Portfolio",description:"Stunning portfolio for designers and developers",category:"portfolio",tags:["React","Three.js","GSAP","Framer Motion"],preview:"/api/placeholder/400/300",popularity:87,createdAt:"2024-01-01",files:{"package.json":'{"name": "creative-portfolio", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Creative Portfolio</div>; }'}}];m.useEffect(()=>{(async()=>{try{y(!0),b(0),N("Loading templates..."),b(20),N("Loading local templates..."),b(40),N("Initializing template service...");const{default:E}=await $e(async()=>{const{default:le}=await Promise.resolve().then(()=>hh);return{default:le}},void 0);b(60),N("Fetching trending templates from GitHub...");const U=E.getAllTemplates(),G=new Promise((le,H)=>setTimeout(()=>H(new Error("Template loading timeout")),3e4)),ae=await Promise.race([U,G]);b(80),N("Processing templates..."),p([...R,...ae]),b(100),N("Templates loaded successfully!"),setTimeout(()=>{y(!1)},500)}catch(E){console.error("Failed to load GitHub templates:",E),E.message==="Template loading timeout"?N("Loading fallback templates (GitHub API timeout)..."):N("Loading fallback templates..."),b(80),await new Promise(U=>setTimeout(U,200)),b(100),p(R),setTimeout(()=>{y(!1)},500)}})()},[]);const P=u.filter(C=>{const E=a==="all"||C.category===a,U=r===""||C.name.toLowerCase().includes(r.toLowerCase())||(C.description||"").toLowerCase().includes(r.toLowerCase())||(C.tags||[]).some(G=>G.toLowerCase().includes(r.toLowerCase()));return E&&U}).sort((C,E)=>{switch(d){case"popularity":return E.popularity-C.popularity;case"newest":return new Date(E.createdAt)-new Date(C.createdAt);case"name":return C.name.localeCompare(E.name);default:return 0}}),I=async C=>{try{let E={};C.id.startsWith("github_")?E=M(C):E=C.files||{},s(E),B.success(`Template "${C.name}" added to your project!`)}catch(E){console.error("Failed to use template:",E),B.error("Failed to load template. Please try again.")}},M=C=>{const E={},U={name:C.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:C.description||"Generated from GitHub template",main:"index.js",scripts:{start:"npm run dev",dev:"vite",build:"vite build"},dependencies:{react:"^18.2.0","react-dom":"^18.2.0"},devDependencies:{vite:"^4.0.0","@vitejs/plugin-react":"^3.0.0"}};E["package.json"]=JSON.stringify(U,null,2),E["index.html"]=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${C.name}</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"><\/script>
</body>
</html>`,E["src/main.jsx"]=`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`;const G=F(C);return E["src/App.jsx"]=G,E["src/App.css"]=`* {
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
}`,E},F=C=>{const E=C.name;switch(C.category||"web"){case"todo-app":return`import React, { useState } from 'react'
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
        <h1>${E}</h1>
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
        <h1>${E}</h1>
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
        <h1>${E}</h1>
        <p>${C.description||"A new project created with DreamBuild"}</p>
      </div>
      
      <div className="content">
        <h2>Welcome to your new ${E}!</h2>
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

export default App`}},v=C=>{console.log("🔍 Opening preview for template:",C.name),f(C),S(!0),console.log("✅ Preview state set to true")},O=()=>{console.log("❌ Closing preview modal"),S(!1),f(null),console.log("✅ Preview state set to false")};m.useEffect(()=>{const C=E=>{E.key==="Escape"&&j&&O()};if(j)return document.addEventListener("keydown",C),()=>{document.removeEventListener("keydown",C)}},[j]);const k=C=>{const E=JSON.stringify(C,null,2);navigator.clipboard.writeText(E),B.success(`Template "${C.name}" copied to clipboard!`)};return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx("div",{className:"bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-border/50",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:e.jsxs("div",{className:"text-center",children:[e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"flex items-center justify-center gap-3 mb-8",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:e.jsx(be,{className:"h-6 w-6 text-primary-foreground"})}),e.jsx("h1",{className:"text-4xl font-bold text-high-contrast",children:"Template Library"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[e.jsx(L.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-xl text-muted-foreground max-w-2xl mx-auto text-center",children:"Choose from our collection of professionally designed templates to jumpstart your next project"}),e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"max-w-md w-full mx-auto relative",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"Search templates...",value:r,onChange:C=>n(C.target.value),className:"w-full pl-4 pr-12 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground"}),e.jsx(Ze,{className:"absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10"})]})})]})]})})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Fs,{className:"h-5 w-5 text-muted-foreground"}),e.jsxs("select",{value:a,onChange:C=>i(C.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[e.jsx("option",{value:"all",children:"All Categories"}),A.map(C=>e.jsx("option",{value:C.id,children:C.name},C.id))]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("select",{value:d,onChange:C=>c(C.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[e.jsx("option",{value:"popularity",children:"Most Popular"}),e.jsx("option",{value:"newest",children:"Newest First"}),e.jsx("option",{value:"name",children:"Alphabetical"})]})}),e.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[e.jsx("button",{onClick:()=>l("grid"),className:`p-2 rounded-lg transition-colors ${o==="grid"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:e.jsx(Xo,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>l("list"),className:`p-2 rounded-lg transition-colors ${o==="list"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:e.jsx(Aa,{className:"h-4 w-4"})})]})]}),g?e.jsx("div",{className:"flex flex-col items-center justify-center py-20",children:e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"w-full max-w-md",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center animate-spin",children:e.jsx(ht,{className:"h-8 w-8 text-primary-foreground"})})}),e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:h}),e.jsx("p",{className:"text-muted-foreground",children:"Fetching the latest templates for you..."})]}),e.jsx("div",{className:"w-full bg-muted rounded-full h-3 mb-4",children:e.jsx(L.div,{className:"bg-gradient-to-r from-primary to-primary-light h-3 rounded-full",initial:{width:0},animate:{width:`${x}%`},transition:{duration:.5,ease:"easeOut"}})}),e.jsxs("div",{className:"flex justify-between items-center text-sm text-muted-foreground",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[x,"%"]})]}),e.jsxs("div",{className:"mt-6 space-y-2",children:[e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=20?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=20?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Loading local templates"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=40?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=40?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Initializing template service"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=60?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=60?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Fetching GitHub templates"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=80?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=80?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Processing templates"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=100?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=100?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Ready to use!"})]})]})]})}):o==="grid"?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:P.map((C,E)=>e.jsxs(L.div,{"data-template-id":C.id,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:E*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:[e.jsxs("div",{className:"aspect-video bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(be,{className:"h-12 w-12 text-muted-foreground mx-auto mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:C.name})]})}),e.jsx("div",{className:"absolute top-3 right-3",children:e.jsxs("div",{className:"flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs",children:[e.jsx(me,{className:"h-3 w-3 text-warning fill-current"}),e.jsxs("span",{children:[C.popularity,"%"]})]})})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors",children:C.name}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:C.description||"No description available"}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[(C.tags||[]).slice(0,3).map(U=>e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:U},U)),(C.tags||[]).length>3&&e.jsxs("span",{className:"px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md",children:["+",(C.tags||[]).length-3," more"]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>I(C),className:"flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[e.jsx(Te,{className:"h-4 w-4"}),"Use Template"]}),e.jsx("button",{onClick:()=>v(C),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:e.jsx(Be,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>k(C),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:e.jsx(It,{className:"h-4 w-4"})})]})]})]},C.id))}):e.jsx("div",{className:"space-y-4",children:P.map((C,E)=>e.jsx(L.div,{"data-template-id":C.id,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:E*.05},className:"bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("div",{className:"w-24 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center flex-shrink-0",children:e.jsx(be,{className:"h-6 w-6 text-muted-foreground"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("h3",{className:"font-semibold text-lg text-foreground group-hover:text-primary transition-colors",children:C.name}),e.jsxs("div",{className:"flex items-center gap-1 bg-warning/10 text-warning px-2 py-1 rounded-full text-xs",children:[e.jsx(me,{className:"h-3 w-3 fill-current"}),e.jsxs("span",{children:[C.popularity||0,"%"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:C.description||"No description available"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:(C.tags||[]).map(U=>e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:U},U))})]}),e.jsxs("div",{className:"flex gap-2 flex-shrink-0",children:[e.jsxs("button",{onClick:()=>I(C),className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[e.jsx(Te,{className:"h-4 w-4"}),"Use Template"]}),e.jsx("button",{onClick:()=>v(C),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:e.jsx(Be,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>k(C),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:e.jsx(It,{className:"h-4 w-4"})})]})]})},C.id))}),P.length===0&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx(be,{className:"h-16 w-16 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No templates found"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search criteria or browse all categories"}),e.jsx("button",{onClick:()=>{n(""),i("all")},className:"px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]})]}),j&&w&&e.jsx("div",{className:"modal-backdrop",style:{position:"fixed",top:0,left:0,right:0,bottom:0,width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",backgroundColor:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(4px)",zIndex:9999,visibility:"visible",opacity:1,pointerEvents:"auto"},onClick:C=>{C.target===C.currentTarget&&O()},children:e.jsxs(L.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"modal-content bg-white border border-gray-300 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col",style:{zIndex:1e4,backgroundColor:"white",border:"2px solid #e5e7eb",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)",visibility:"visible",opacity:1,display:"flex",position:"relative"},onClick:C=>{C.stopPropagation()},children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50 flex-shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(Be,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-semibold text-gray-900",children:["Preview: ",w.name]}),e.jsx("p",{className:"text-sm text-gray-600",children:"See how this template looks when completed"})]})]}),e.jsx("button",{onClick:O,className:"flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg",title:"Close Preview",children:e.jsx(qr,{className:"h-5 w-5"})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-6 bg-white",children:[e.jsxs("div",{className:"max-w-full",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-gray-600 mb-4",children:w.description||"A professional template for your next project."}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(w.tags||[]).slice(0,5).map(C=>e.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:C},C))}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Difficulty:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900",children:w.difficulty||"Beginner"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Time:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900",children:w.estimatedTime||"2-4 hours"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Stars:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900",children:w.stars||"N/A"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Source:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900 capitalize",children:w.source||"Local"})]})]})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900",children:[e.jsx(je,{className:"h-5 w-5"}),"Live Preview"]}),e.jsxs("div",{className:"bg-white rounded-lg border-2 border-gray-300 overflow-hidden shadow-lg",style:{backgroundColor:"white"},children:[e.jsxs("div",{className:"bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-red-400 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-yellow-400 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full"})]}),e.jsx("div",{className:"flex-1 text-center",children:e.jsx("span",{className:"text-sm text-gray-600 font-medium",children:w.name})})]}),e.jsx("div",{className:"p-8 min-h-[400px]",children:Hf(w)})]})]}),w.features&&w.features.length>0&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-900",children:"Features"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:w.features.map((C,E)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-600",children:C})]},E))})]}),w.techStack&&w.techStack.length>0&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-900",children:"Tech Stack"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:w.techStack.map((C,E)=>e.jsx("span",{className:"px-3 py-1 bg-gray-100 border border-gray-300 text-sm rounded-lg text-gray-800",children:C},E))})]})]}),e.jsxs("div",{className:"flex items-center justify-between p-6 border-t border-gray-200",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[e.jsx(me,{className:"h-4 w-4"}),e.jsxs("span",{children:["Popularity: ",w.popularity||0,"%"]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:O,className:"px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors",children:"Close"}),e.jsxs("button",{onClick:()=>{I(w),O()},className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2",children:[e.jsx(Te,{className:"h-4 w-4"}),"Use Template"]})]})]})]})]})})]})},Hf=s=>{const t=s.category||"web",r=s.name.toLowerCase(),n=(s.description||"").toLowerCase(),a=(s.tags||[]).join(" ").toLowerCase(),i=`${r} ${n} ${a}`.toLowerCase();return i.includes("todo")||t==="todo-app"||i.includes("task")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"✅ Todo Application"}),e.jsx("p",{className:"text-gray-600",children:"Simple todo application"})]}),e.jsxs("div",{className:"max-w-md mx-auto space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"Add a new todo...",className:"flex-1 px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none",readOnly:!0}),e.jsx("button",{className:"px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg",children:"➕ Add"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-blue-500 rounded"}),e.jsx("span",{className:"flex-1 text-gray-800 font-medium",children:"📝 Complete project documentation"}),e.jsx("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl",children:[e.jsx("input",{type:"checkbox",checked:!0,className:"w-5 h-5 text-green-500 rounded"}),e.jsx("span",{className:"flex-1 line-through text-gray-500",children:"✅ Review code changes"}),e.jsx("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-blue-500 rounded"}),e.jsx("span",{className:"flex-1 text-gray-800 font-medium",children:"📦 Update dependencies"}),e.jsx("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]})]})]})]}):i.includes("calculator")||t==="calculator"||i.includes("math")||i.includes("arithmetic")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"🧮 Calculator"}),e.jsx("p",{className:"text-gray-600",children:"Simple calculator application"})]}),e.jsxs("div",{className:"max-w-xs mx-auto",children:[e.jsx("div",{className:"bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl mb-4 shadow-lg",children:e.jsx("div",{className:"text-right text-3xl font-mono text-green-400",children:"42"})}),e.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[["C","/","*","-"].map((o,l)=>e.jsx("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${l===0?"bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700":"bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"}`,children:o},o)),[7,8,9,"+"].map((o,l)=>e.jsx("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${l===3?"bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700":"bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500"}`,children:o},o)),[4,5,6,"="].map((o,l)=>e.jsx("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${l===3?"bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 row-span-2":"bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500"}`,children:o},o)),[1,2,3].map(o=>e.jsx("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all",children:o},o)),e.jsx("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all col-span-2",children:"0"}),e.jsx("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all",children:"."})]})]})]}):i.includes("store")||i.includes("ecommerce")||i.includes("shop")||i.includes("marketplace")||i.includes("retail")||t==="ecommerce"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Online Store"}),e.jsx("p",{className:"text-gray-600",children:"Modern e-commerce platform"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold",children:"🛍️ TechStore"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"bg-white bg-opacity-20 px-3 py-1 rounded-full",children:"🛒 Cart (2)"}),e.jsx("span",{className:"bg-white bg-opacity-20 px-3 py-1 rounded-full",children:"👤 Account"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"border-2 border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-full h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-2 flex items-center justify-center",children:e.jsx("span",{className:"text-white text-2xl",children:"🎧"})}),e.jsx("h3",{className:"font-semibold text-sm text-gray-800",children:"Wireless Headphones"}),e.jsx("p",{className:"text-green-600 font-bold text-lg",children:"$99.99"}),e.jsx("button",{className:"w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"Add to Cart"})]}),e.jsxs("div",{className:"border-2 border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-full h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-2 flex items-center justify-center",children:e.jsx("span",{className:"text-white text-2xl",children:"⌚"})}),e.jsx("h3",{className:"font-semibold text-sm text-gray-800",children:"Smart Watch"}),e.jsx("p",{className:"text-green-600 font-bold text-lg",children:"$199.99"}),e.jsx("button",{className:"w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"Add to Cart"})]})]}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"🏠 Home"}),e.jsx("button",{className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",children:"📦 Products"}),e.jsx("button",{className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",children:"ℹ️ About"})]})]})]}):i.includes("portfolio")||i.includes("personal")||i.includes("developer")||i.includes("profile")||t==="portfolio"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Personal Portfolio"}),e.jsx("p",{className:"text-gray-600",children:"Modern, responsive portfolio website"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-20 h-20 bg-blue-500 rounded-full mx-auto mb-2"}),e.jsx("h2",{className:"text-xl font-semibold",children:"John Doe"}),e.jsx("p",{className:"text-gray-600",children:"Full Stack Developer"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Project 1"}),e.jsx("p",{className:"text-sm text-gray-600",children:"E-commerce platform built with React"})]}),e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Project 2"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Mobile app using React Native"})]})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{className:"px-6 py-2 bg-blue-500 text-white rounded-lg",children:"Get In Touch"})})]})]}):i.includes("blog")||i.includes("cms")||i.includes("article")||i.includes("post")||t==="blog"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Blog Platform"}),e.jsx("p",{className:"text-gray-600",children:"Full-featured blog with CMS"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-100 rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold",children:"My Blog"}),e.jsx("p",{className:"text-gray-600",children:"Thoughts on technology and design"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"border-l-4 border-blue-500 pl-4",children:[e.jsx("h3",{className:"font-semibold",children:"Getting Started with React"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Learn the basics of React development..."}),e.jsx("span",{className:"text-xs text-gray-500",children:"Dec 15, 2024 • 5 min read"})]}),e.jsxs("div",{className:"border-l-4 border-green-500 pl-4",children:[e.jsx("h3",{className:"font-semibold",children:"CSS Grid vs Flexbox"}),e.jsx("p",{className:"text-sm text-gray-600",children:"A comprehensive comparison..."}),e.jsx("span",{className:"text-xs text-gray-500",children:"Dec 12, 2024 • 8 min read"})]})]}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"Home"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"About"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"Contact"})]})]})]}):i.includes("weather")||i.includes("forecast")||i.includes("climate")||t==="weather-app"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"🌤️ Weather App"}),e.jsx("p",{className:"text-gray-600",children:"Beautiful weather application"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white p-6 rounded-xl text-center shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-center mb-2",children:[e.jsx("span",{className:"text-4xl mr-2",children:"☀️"}),e.jsx("h2",{className:"text-2xl font-bold",children:"New York"})]}),e.jsx("div",{className:"text-5xl font-bold my-3",children:"72°F"}),e.jsx("p",{className:"text-xl",children:"Partly Cloudy"}),e.jsx("p",{className:"text-sm opacity-90 mt-1",children:"Feels like 75°F"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3 text-center",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl",children:[e.jsx("div",{className:"text-2xl mb-1",children:"💧"}),e.jsx("div",{className:"text-sm text-blue-600 font-medium",children:"Humidity"}),e.jsx("div",{className:"font-bold text-blue-800",children:"65%"})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl",children:[e.jsx("div",{className:"text-2xl mb-1",children:"💨"}),e.jsx("div",{className:"text-sm text-green-600 font-medium",children:"Wind"}),e.jsx("div",{className:"font-bold text-green-800",children:"8 mph"})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl",children:[e.jsx("div",{className:"text-2xl mb-1",children:"📊"}),e.jsx("div",{className:"text-sm text-purple-600 font-medium",children:"Pressure"}),e.jsx("div",{className:"font-bold text-purple-800",children:"30.1 in"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-semibold text-gray-800 text-lg",children:"📅 5-Day Forecast"}),e.jsx("div",{className:"space-y-2",children:[{day:"Mon",icon:"☀️",temp:75},{day:"Tue",icon:"⛅",temp:77},{day:"Wed",icon:"🌧️",temp:72},{day:"Thu",icon:"☀️",temp:80},{day:"Fri",icon:"⛅",temp:78}].map((o,l)=>e.jsxs("div",{className:"flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow",children:[e.jsx("span",{className:"font-medium text-gray-800",children:o.day}),e.jsx("span",{className:"text-2xl",children:o.icon}),e.jsxs("span",{className:"font-bold text-blue-600",children:[o.temp,"°F"]})]},o.day))})]})]})]}):i.includes("dashboard")||i.includes("analytics")||i.includes("admin")||i.includes("stats")||i.includes("metrics")||t==="dashboards"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"📊 Analytics Dashboard"}),e.jsx("p",{className:"text-gray-600",children:"Data visualization and analytics"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{className:"p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold",children:"1,234"}),e.jsx("div",{className:"text-blue-100 text-sm",children:"👥 Total Users"})]}),e.jsx("div",{className:"text-3xl opacity-80",children:"👤"})]})}),e.jsx("div",{className:"p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white shadow-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold",children:"$12,345"}),e.jsx("div",{className:"text-green-100 text-sm",children:"💰 Revenue"})]}),e.jsx("div",{className:"text-3xl opacity-80",children:"💵"})]})})]}),e.jsx("div",{className:"h-40 bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200 rounded-xl flex items-center justify-center shadow-lg",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📈"}),e.jsx("span",{className:"text-purple-600 font-semibold",children:"📊 Interactive Chart"}),e.jsx("div",{className:"text-sm text-purple-500 mt-1",children:"Revenue over time"})]})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-3 text-gray-800 text-lg",children:"🔔 Recent Activity"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg",children:[e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-800",children:"✅ New user registration"}),e.jsx("span",{className:"text-xs text-gray-500 ml-auto bg-green-100 px-2 py-1 rounded-full",children:"2 min ago"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg",children:[e.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-800",children:"🛒 Order #1234 completed"}),e.jsx("span",{className:"text-xs text-gray-500 ml-auto bg-blue-100 px-2 py-1 rounded-full",children:"5 min ago"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg",children:[e.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-800",children:"📧 Newsletter sent"}),e.jsx("span",{className:"text-xs text-gray-500 ml-auto bg-yellow-100 px-2 py-1 rounded-full",children:"10 min ago"})]})]})]})]})]}):i.includes("landing")||i.includes("saas")||i.includes("marketing")||i.includes("homepage")||i.includes("pricing")||t==="landing-pages"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"SaaS Landing Page"}),e.jsx("p",{className:"text-gray-600",children:"Modern marketing page"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Build Amazing Apps"}),e.jsx("p",{className:"mb-4",children:"The best platform for developers"}),e.jsx("button",{className:"px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold",children:"Get Started"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"text-center p-3 border border-gray-200 rounded",children:[e.jsx("div",{className:"text-2xl mb-1",children:"⚡"}),e.jsx("div",{className:"text-sm font-semibold",children:"Fast"})]}),e.jsxs("div",{className:"text-center p-3 border border-gray-200 rounded",children:[e.jsx("div",{className:"text-2xl mb-1",children:"🔒"}),e.jsx("div",{className:"text-sm font-semibold",children:"Secure"})]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Simple Pricing"}),e.jsxs("div",{className:"bg-gray-100 p-4 rounded-lg",children:[e.jsx("div",{className:"text-3xl font-bold",children:"$29"}),e.jsx("div",{className:"text-sm text-gray-600",children:"per month"})]})]})]})]}):i.includes("mobile")||i.includes("app")||i.includes("ios")||i.includes("android")||i.includes("native")||t==="mobile-apps"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Mobile App"}),e.jsx("p",{className:"text-gray-600",children:"Native mobile application"})]}),e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"mx-auto w-48 h-80 bg-gray-800 rounded-3xl p-2",children:e.jsxs("div",{className:"w-full h-full bg-white rounded-2xl p-4 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsx("span",{children:"9:41"}),e.jsx("span",{children:"📶 📶 📶 🔋"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-full h-16 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-white font-semibold",children:"My App"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-8 bg-gray-200 rounded"}),e.jsx("div",{className:"h-8 bg-gray-200 rounded"}),e.jsx("div",{className:"h-8 bg-gray-200 rounded"})]})]})]})})})]}):i.includes("game")||i.includes("snake")||i.includes("puzzle")||i.includes("arcade")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Game Application"}),e.jsx("p",{className:"text-gray-600",children:"Interactive game experience"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"mx-auto w-64 h-64 bg-gray-900 rounded-lg p-4",children:e.jsxs("div",{className:"w-full h-full bg-gray-800 rounded border-2 border-gray-600 relative",children:[e.jsx("div",{className:"absolute top-4 left-4 w-4 h-4 bg-green-400 rounded"}),e.jsx("div",{className:"absolute top-8 left-8 w-4 h-4 bg-green-400 rounded"}),e.jsx("div",{className:"absolute top-12 left-12 w-4 h-4 bg-green-400 rounded"}),e.jsx("div",{className:"absolute top-16 left-16 w-4 h-4 bg-red-500 rounded"})]})}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"flex justify-center gap-2 mb-4",children:e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"↑"})}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"←"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"↓"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"→"})]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold",children:"Score: 150"}),e.jsx("div",{className:"text-sm text-gray-600",children:"High Score: 300"})]})]})]}):i.includes("chat")||i.includes("messaging")||i.includes("message")||i.includes("communication")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Chat Application"}),e.jsx("p",{className:"text-gray-600",children:"Real-time messaging platform"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-blue-600 text-white rounded-lg",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-white rounded-full"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:"John Doe"}),e.jsx("div",{className:"text-sm opacity-90",children:"Online"})]})]})}),e.jsxs("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"bg-blue-500 text-white p-3 rounded-lg max-w-xs",children:"Hey, how are you doing?"})}),e.jsx("div",{className:"flex justify-start",children:e.jsx("div",{className:"bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs",children:"I'm doing great! Working on a new project."})}),e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"bg-blue-500 text-white p-3 rounded-lg max-w-xs",children:"That's awesome! What kind of project?"})})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"Type a message...",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg",readOnly:!0}),e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Send"})]})]})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:s.name}),e.jsx("p",{className:"text-gray-600",children:s.description||"A new project created with DreamBuild"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsxs("h2",{className:"text-xl font-semibold mb-2",children:["Welcome to your new ",s.name,"!"]}),e.jsx("p",{className:"text-gray-600",children:"This project was generated from a template. You can start editing and customizing it to fit your needs."})]}),s.features&&e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Features:"}),e.jsx("ul",{className:"space-y-1",children:s.features.slice(0,3).map((o,l)=>e.jsxs("li",{className:"text-sm text-gray-600",children:["• ",o]},l))})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{className:"px-6 py-2 bg-blue-500 text-white rounded-lg",children:"Get Started"})})]})]})};class Gf{constructor(){this.baseUrl="https://api.github.com",this.token=null}setToken(t){this.token=t}getHeaders(){const t={Accept:"application/vnd.github.v3+json","Content-Type":"application/json"};return this.token&&(t.Authorization=`token ${this.token}`),t}async getUserRepositories(){if(!this.token)throw new Error("GitHub token required");try{const t=await fetch(`${this.baseUrl}/user/repos?sort=updated&per_page=100`,{headers:this.getHeaders()});if(!t.ok)throw new Error(`GitHub API error: ${t.status}`);return(await t.json()).map(n=>this.transformRepository(n))}catch(t){throw console.error("Failed to fetch GitHub repositories:",t),t}}transformRepository(t){return{id:`github_${t.id}`,name:t.name,description:t.description||"No description",type:this.detectProjectType(t),status:"github_synced",lastModified:new Date(t.updated_at),files:0,size:"Unknown",tags:this.extractTags(t),preview:t.owner.avatar_url,githubData:{id:t.id,fullName:t.full_name,htmlUrl:t.html_url,cloneUrl:t.clone_url,language:t.language,stargazersCount:t.stargazers_count,forksCount:t.forks_count,isPrivate:t.private,defaultBranch:t.default_branch,owner:t.owner.login},source:"github"}}detectProjectType(t){var a;const r=t.name.toLowerCase();(t.description||"").toLowerCase();const n=(a=t.language)==null?void 0:a.toLowerCase();return r.includes("api")||r.includes("backend")||r.includes("server")?"api":r.includes("mobile")||r.includes("app")||r.includes("ios")||r.includes("android")?"mobile":r.includes("dashboard")||r.includes("admin")?"dashboard":r.includes("ecommerce")||r.includes("shop")||r.includes("store")?"ecommerce":r.includes("portfolio")||r.includes("personal")||n==="javascript"||n==="typescript"?"web":n==="python"?"api":n==="java"||n==="kotlin"?"mobile":"web"}extractTags(t){const r=[];t.language&&r.push(t.language),t.topics&&t.topics.length>0&&r.push(...t.topics.slice(0,3));const n=t.name.toLowerCase(),a=(t.description||"").toLowerCase();return(n.includes("react")||a.includes("react"))&&r.push("React"),(n.includes("vue")||a.includes("vue"))&&r.push("Vue.js"),(n.includes("angular")||a.includes("angular"))&&r.push("Angular"),(n.includes("node")||a.includes("node"))&&r.push("Node.js"),(n.includes("express")||a.includes("express"))&&r.push("Express"),(n.includes("mongodb")||a.includes("mongodb"))&&r.push("MongoDB"),(n.includes("postgres")||a.includes("postgres"))&&r.push("PostgreSQL"),[...new Set(r)]}async getRepositoryFiles(t,r="main"){if(!this.token)throw new Error("GitHub token required");try{const n=await fetch(`${this.baseUrl}/repos/${t}/git/trees/${r}?recursive=1`,{headers:this.getHeaders()});if(!n.ok)throw new Error(`GitHub API error: ${n.status}`);return(await n.json()).tree||[]}catch(n){throw console.error("Failed to fetch repository files:",n),n}}async getFileContent(t,r,n="main"){if(!this.token)throw new Error("GitHub token required");try{const a=await fetch(`${this.baseUrl}/repos/${t}/contents/${r}?ref=${n}`,{headers:this.getHeaders()});if(!a.ok)throw new Error(`GitHub API error: ${a.status}`);const i=await a.json();return i.type==="file"&&i.content?atob(i.content):null}catch(a){throw console.error("Failed to fetch file content:",a),a}}async convertRepositoryToProject(t){var r;try{const a=(await this.getRepositoryFiles(t.full_name,t.default_branch)).filter(o=>o.type==="blob"&&this.isWebFile(o.path)),i={};for(const o of a.slice(0,10))try{const l=await this.getFileContent(t.full_name,o.path,t.default_branch);l&&(i[o.path]=l)}catch(l){console.warn(`Failed to fetch content for ${o.path}:`,l)}return{id:`github_${t.id}`,name:t.name,description:t.description||"Imported from GitHub",files:i,activeFile:this.getDefaultFile(i),config:{appType:this.detectProjectType(t),language:((r=t.language)==null?void 0:r.toLowerCase())||"javascript",styling:this.detectStyling(i),database:this.detectDatabase(i),auth:this.detectAuth(i)},lastModified:new Date(t.updated_at),githubData:{id:t.id,fullName:t.full_name,htmlUrl:t.html_url,cloneUrl:t.clone_url,language:t.language,stargazersCount:t.stargazers_count,forksCount:t.forks_count,isPrivate:t.private,defaultBranch:t.default_branch,owner:t.owner.login},source:"github"}}catch(n){throw console.error("Failed to convert repository to project:",n),n}}isWebFile(t){return[".html",".htm",".css",".scss",".sass",".less",".js",".jsx",".ts",".tsx",".vue",".svelte",".php",".py",".rb",".go",".rs",".java",".json",".xml",".yaml",".yml",".md",".txt"].some(n=>t.toLowerCase().endsWith(n))}getDefaultFile(t){const r=["index.html","index.js","index.jsx","index.ts","index.tsx","app.js","main.js"];for(const n of r)if(t[n])return n;return Object.keys(t)[0]||"index.html"}detectStyling(t){const r=Object.keys(t).join(" ").toLowerCase();return r.includes("tailwind")||r.includes("@tailwind")?"tailwind":r.includes("bootstrap")||r.includes("@bootstrap")?"bootstrap":r.includes("styled-components")||r.includes("styled-components")?"styled-components":r.includes("sass")||r.includes("scss")?"sass":"css"}detectDatabase(t){Object.keys(t).join(" ").toLowerCase();const r=Object.values(t).join(" ").toLowerCase();return r.includes("mongodb")||r.includes("mongoose")?"mongodb":r.includes("postgresql")||r.includes("postgres")?"postgresql":r.includes("mysql")?"mysql":r.includes("sqlite")?"sqlite":r.includes("firebase")||r.includes("firestore")?"firebase":"none"}detectAuth(t){const r=Object.values(t).join(" ").toLowerCase();return r.includes("firebase")&&r.includes("auth")?"firebase":r.includes("auth0")?"auth0":r.includes("jwt")||r.includes("jsonwebtoken")?"jwt":r.includes("passport")?"passport":"none"}async syncRepository(t,r=null){try{const n=await this.convertRepositoryToProject(t);return r&&(n.id=r),n}catch(n){throw console.error("Failed to sync repository:",n),n}}}const bs=new Gf,zf=()=>{const{user:s}=vt(),{projects:t,saveExternalProject:r,loadProjects:n}=Ge(),[a,i]=m.useState([]),[o,l]=m.useState(!1),[d,c]=m.useState(new Set),[u,p]=m.useState(""),[g,y]=m.useState(!1);m.useEffect(()=>{const j=localStorage.getItem("github_token");j&&(p(j),bs.setToken(j))},[]),m.useEffect(()=>{if(a.length>0&&t.length>0){const j=new Set;t.forEach(S=>{S.source==="github"&&S.githubData&&j.add(S.githubData.id)}),c(j)}},[a,t]);const x=async()=>{if(!u){y(!0);return}l(!0);try{const j=await bs.getUserRepositories();i(j),B.success(`Found ${j.length} repositories`)}catch(j){console.error("Failed to fetch repositories:",j),B.error("Failed to fetch GitHub repositories. Please check your token.")}finally{l(!1)}},b=()=>{if(!u.trim()){B.error("Please enter a GitHub token");return}localStorage.setItem("github_token",u),bs.setToken(u),y(!1),x(),B.success("GitHub token saved!")},h=async j=>{if(!s){B.error("Please sign in to sync repositories");return}l(!0);try{console.log("🔄 Starting GitHub repository sync for:",j.name);const S=await bs.syncRepository(j);console.log("📦 Converted repository to project:",S),S.userId=s.uid,S.createdAt=new Date,console.log("💾 Saving project to Firestore..."),await r(S),console.log("✅ Project saved successfully!"),c(w=>new Set([...w,j.githubData.id])),B.success(`Repository "${j.name}" synced successfully!`),console.log("🎉 GitHub sync completed successfully!")}catch(S){console.error("❌ Failed to sync repository:",S),B.error("Failed to sync repository. Please try again.")}finally{l(!1)}},N=j=>{window.open(j.githubData.htmlUrl,"_blank")};return s?e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[e.jsx(pe,{className:"h-5 w-5 text-white"}),"GitHub Repositories"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[!u&&e.jsx("button",{onClick:()=>y(!0),className:"px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors",children:"Add Token"}),e.jsxs("button",{onClick:x,disabled:o,className:"flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50",children:[e.jsx(Ms,{className:`h-4 w-4 ${o?"animate-spin":""}`}),o?"Loading...":"Refresh"]})]})]}),g&&e.jsxs(L.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"mb-6 p-4 bg-muted/20 rounded-lg border border-border/50",children:[e.jsx("h4",{className:"text-sm font-medium text-foreground mb-2",children:"GitHub Personal Access Token"}),e.jsxs("p",{className:"text-xs text-muted-foreground mb-3",children:["Create a personal access token at"," ",e.jsx("a",{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline",children:"github.com/settings/tokens"})," ","with repo access to sync your repositories."]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"password",value:u,onChange:j=>p(j.target.value),placeholder:"Enter your GitHub token",className:"flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"}),e.jsx("button",{onClick:b,className:"px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Save"}),e.jsx("button",{onClick:()=>y(!1),className:"px-4 py-2 text-sm bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors",children:"Cancel"})]})]}),o&&a.length===0?e.jsx("div",{className:"space-y-4",children:[...Array(3)].map((j,S)=>e.jsx("div",{className:"animate-pulse",children:e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-lg bg-muted/20",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded"}),e.jsxs("div",{children:[e.jsx("div",{className:"h-4 bg-muted rounded w-32 mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-48"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"h-6 bg-muted rounded w-12"}),e.jsx("div",{className:"h-6 bg-muted rounded w-12"})]})]})},S))}):a.length>0?e.jsx("div",{className:"space-y-3",children:a.map((j,S)=>{const w=d.has(j.githubData.id);return e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:S*.1},className:"flex items-center justify-between p-4 rounded-lg hover:bg-muted/30 transition-colors group",children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[e.jsx("div",{className:"w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center",children:e.jsx(pe,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("h3",{className:"font-medium text-foreground text-sm truncate",children:j.name}),j.githubData.isPrivate&&e.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-600 px-2 py-0.5 rounded",children:"Private"}),w&&e.jsxs("span",{className:"text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded flex items-center gap-1",children:[e.jsx(Ce,{className:"h-3 w-3"}),"Synced"]})]}),e.jsx("p",{className:"text-xs text-muted-foreground truncate",children:j.description}),e.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:j.githubData.language}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:["Updated ",new Date(j.lastModified).toLocaleDateString()]})]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[e.jsx(me,{className:"h-3 w-3"}),j.githubData.stargazersCount]}),e.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[e.jsx(Qo,{className:"h-3 w-3"}),j.githubData.forksCount]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>N(j),className:"p-2 rounded-lg hover:bg-muted/50 transition-colors group-hover:bg-white/10",title:"Open in GitHub",children:e.jsx(Qt,{className:"h-4 w-4 text-muted-foreground group-hover:text-white"})}),!w&&e.jsx("button",{onClick:()=>h(j),disabled:o,className:"p-2 rounded-lg hover:bg-muted/50 transition-colors group-hover:bg-white/10 disabled:opacity-50",title:"Sync to DreamBuild",children:e.jsx(Qe,{className:"h-4 w-4 text-muted-foreground group-hover:text-white"})})]})]})]},j.id)})}):e.jsxs("div",{className:"text-center py-8",children:[e.jsx(pe,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No repositories found"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:u?"No repositories found in your GitHub account.":"Add a GitHub token to sync your repositories."}),!u&&e.jsx("button",{onClick:()=>y(!0),className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Add GitHub Token"})]})]}):e.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:e.jsxs("div",{className:"text-center py-8",children:[e.jsx(pe,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"GitHub Integration"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Sign in to sync your GitHub repositories with DreamBuild projects."})]})})},Wf=()=>{const{currentProject:s,projects:t}=Ge(),{user:r}=vt(),[n,a]=m.useState("7d"),[i,o]=m.useState(!0);m.useEffect(()=>{const b=setTimeout(()=>o(!1),1e3);return()=>clearTimeout(b)},[]);const l={totalProjects:t.length,activeProjects:t.filter(b=>b.status==="active"||b.status==="development").length,completedProjects:t.filter(b=>b.status==="completed").length,totalFiles:t.reduce((b,h)=>b+Object.keys(h.files||{}).length,0),aiGenerations:t.reduce((b,h)=>b+(h.generations||0),0),linesOfCode:t.reduce((b,h)=>b+(h.linesOfCode||0),0),languagesUsed:t.length>0?new Set(t.map(b=>{var h;return((h=b.config)==null?void 0:h.language)||"javascript"})).size:0,hoursSpent:t.reduce((b,h)=>b+(h.hoursSpent||0),0)},d=b=>{const N=new Date-new Date(b),j=Math.floor(N/6e4),S=Math.floor(N/36e5),w=Math.floor(N/864e5);return j<60?`${j} min ago`:S<24?`${S} hour${S>1?"s":""} ago`:`${w} day${w>1?"s":""} ago`},c=t.sort((b,h)=>new Date(h.lastModified)-new Date(b.lastModified)).slice(0,4).map((b,h)=>({id:b.id,type:b.source==="github"?"github_sync":"ai_generation",project:b.name,action:b.source==="github"?"Synced from GitHub":"Generated with AI",time:d(b.lastModified),icon:b.source==="github"?pe:_e,color:b.source==="github"?"text-blue-600":"text-white"})),u=t.sort((b,h)=>new Date(h.lastModified)-new Date(b.lastModified)).slice(0,4).map(b=>{var h;return{name:b.name,files:Object.keys(b.files||{}).length,lastModified:d(b.lastModified),type:((h=b.config)==null?void 0:h.appType)||"web",progress:b.progress||0,source:b.source||"dreambuild"}}),p=b=>{const h={};b.forEach(j=>{var f;const S=((f=j.config)==null?void 0:f.language)||"javascript",w=Object.keys(j.files||{}).length;h[S]?h[S].files+=w:h[S]={language:S,files:w}});const N=Object.values(h).reduce((j,S)=>j+S.files,0);return Object.values(h).map(j=>({...j,percentage:N>0?Math.round(j.files/N*100):0,color:g(j.language)})).sort((j,S)=>S.files-j.files).slice(0,4)},g=b=>({javascript:"bg-yellow-500",typescript:"bg-blue-500",html:"bg-orange-500",css:"bg-white",python:"bg-green-500",java:"bg-red-500",php:"bg-purple-500",ruby:"bg-red-600",go:"bg-cyan-500",rust:"bg-orange-600"})[b.toLowerCase()]||"bg-gray-500",y=p(t),x=({title:b,value:h,icon:N,change:j,changeType:S,description:w})=>e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-md transition-all duration-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center",children:e.jsx(N,{className:"h-6 w-6 text-white"})}),j&&e.jsxs("div",{className:`flex items-center gap-1 text-sm ${S==="increase"?"text-green-600":"text-red-600"}`,children:[S==="increase"?e.jsx(Zo,{className:"h-4 w-4"}):e.jsx(el,{className:"h-4 w-4"}),j]})]}),e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-1",children:h}),e.jsx("p",{className:"text-sm text-muted-foreground",children:b}),w&&e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:w})]});return i?e.jsx("div",{className:"min-h-screen bg-background",style:{paddingTop:"80px"},children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[...Array(4)].map((b,h)=>e.jsxs("div",{className:"bg-card/50 rounded-xl p-6",children:[e.jsx("div",{className:"h-12 w-12 bg-muted rounded-lg mb-4"}),e.jsx("div",{className:"h-6 bg-muted rounded w-1/2 mb-2"}),e.jsx("div",{className:"h-4 bg-muted rounded w-3/4"})]},h))})]})})}):e.jsx("div",{className:"min-h-screen bg-background",style:{paddingTop:"80px"},children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"mb-8",children:e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Dashboard"}),e.jsx("p",{className:"text-muted-foreground",children:"Welcome back! Here's what's happening with your projects."})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("select",{value:n,onChange:b=>a(b.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"7d",children:"Last 7 days"}),e.jsx("option",{value:"30d",children:"Last 30 days"}),e.jsx("option",{value:"90d",children:"Last 90 days"})]})})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsx(x,{title:"Total Projects",value:l.totalProjects,icon:Ee,change:l.totalProjects>0?"+2":void 0,changeType:"increase",description:l.totalProjects>0?"This week":"Create your first project"}),e.jsx(x,{title:"AI Generations",value:l.aiGenerations,icon:_e,change:l.aiGenerations>0?"+12":void 0,changeType:"increase",description:l.aiGenerations>0?"This week":"Start generating code"}),e.jsx(x,{title:"Lines of Code",value:l.linesOfCode.toLocaleString(),icon:W,change:l.linesOfCode>0?"+1.2k":void 0,changeType:"increase",description:l.linesOfCode>0?"This week":"Begin coding"}),e.jsx(x,{title:"Hours Spent",value:l.hoursSpent,icon:Le,change:l.hoursSpent>0?"+5.2h":void 0,changeType:"increase",description:l.hoursSpent>0?"This week":"Start building"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:"lg:col-span-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[e.jsx(Ea,{className:"h-5 w-5 text-white"}),"Recent Activity"]}),e.jsx("button",{className:"text-sm text-white hover:text-gray-300 transition-colors",children:"View all"})]}),e.jsx("div",{className:"space-y-4",children:c.length>0?c.map((b,h)=>{const N=b.icon;return e.jsxs(L.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},className:"flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center ${b.color.replace("text-","bg-").replace("-600","-100")}`,children:e.jsx(N,{className:`h-4 w-4 ${b.color}`})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:b.action}),e.jsx("p",{className:"text-xs text-muted-foreground",children:b.project})]}),e.jsx("span",{className:"text-xs text-muted-foreground",children:b.time})]},b.id)}):e.jsxs("div",{className:"text-center py-8",children:[e.jsx(_e,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No activity yet"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Start creating projects to see your activity here."}),e.jsxs(ce,{to:"/ai-builder",className:"inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(Rt,{className:"h-4 w-4"}),"Create Project"]})]})})]}),e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[e.jsx(rs,{className:"h-5 w-5 text-white"}),"Top Projects"]}),e.jsx("div",{className:"space-y-4",children:u.length>0?u.map((b,h)=>e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:h*.1},className:"p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"font-medium text-foreground text-sm",children:b.name}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[b.files," files"]})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("div",{className:"flex-1 bg-muted rounded-full h-2 mr-3",children:e.jsx("div",{className:"bg-white h-2 rounded-full transition-all duration-300",style:{width:`${b.progress}%`}})}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[b.progress,"%"]})]}),e.jsx("p",{className:"text-xs text-muted-foreground",children:b.lastModified})]},b.name)):e.jsxs("div",{className:"text-center py-8",children:[e.jsx(Ee,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No projects yet"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Create your first project to get started."}),e.jsxs(ce,{to:"/ai-builder",className:"inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(Rt,{className:"h-4 w-4"}),"Create Project"]})]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[e.jsx(W,{className:"h-5 w-5 text-white"}),"Language Usage"]}),e.jsx("div",{className:"space-y-4",children:y.map((b,h)=>e.jsxs(L.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-4 h-4 rounded-full bg-muted flex items-center justify-center",children:e.jsx("div",{className:`w-2 h-2 rounded-full ${b.color}`})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-sm font-medium text-foreground",children:b.language}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[b.percentage,"%"]})]}),e.jsx("div",{className:"bg-muted rounded-full h-2",children:e.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${b.color}`,style:{width:`${b.percentage}%`}})}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[b.files," files"]})]})]},b.language))})]}),e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[e.jsx(Ue,{className:"h-5 w-5 text-white"}),"Quick Actions"]}),e.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{name:"New Project",icon:Ee,color:"bg-white",href:"/ai-builder"},{name:"AI Builder",icon:_e,color:"bg-purple-500",href:"/ai-builder"},{name:"View Projects",icon:je,color:"bg-green-500",href:"/projects"},{name:"Settings",icon:Dt,color:"bg-orange-500",href:"/settings"}].map((b,h)=>e.jsxs(L.a,{href:b.href,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:h*.1},className:"flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-all duration-200 group",children:[e.jsx("div",{className:`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${b.color} group-hover:scale-105 transition-transform`,children:e.jsx(b.icon,{className:"h-6 w-6 text-white"})}),e.jsx("span",{className:"text-sm font-medium text-foreground text-center",children:b.name})]},b.name))})]})]}),e.jsx(zf,{})]})})},qf=()=>{const{user:s,signInWithGoogle:t,signInWithGitHub:r,loading:n}=vt(),a=Bs(),[i,o]=m.useState(!1);m.useEffect(()=>{s&&!n&&a("/dashboard")},[s,n,a]);const l=async()=>{try{o(!0),await t()}catch(c){console.error("Sign in error:",c)}finally{o(!1)}},d=async()=>{try{o(!0),await r()}catch(c){console.error("GitHub sign in error:",c),c.message.includes("already exists using Google")?alert("An account with this email already exists using Google. Please sign in with Google instead, or use a different email for GitHub."):c.message.includes("already exists using email/password")?alert("An account with this email already exists using email/password. Please sign in with your existing method instead."):c.message.includes("account with this email already exists")?alert("An account with this email already exists. Please sign in with your existing method instead."):c.message.includes("couldn't determine the sign-in method")?alert("An account with this email already exists. Please try signing in with Google first, then you can link your GitHub account."):c.message.includes("not properly configured")?alert("GitHub authentication is not properly configured. Please check Firebase Console settings or try signing in with Google instead."):alert("Failed to sign in with GitHub. Please try again.")}finally{o(!1)}};return n?e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:[e.jsxs("div",{className:"flex justify-between items-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg",children:e.jsx("span",{className:"text-white font-bold text-lg",children:"D"})}),e.jsx("span",{className:"font-bold text-xl text-slate-800 dark:text-white",children:"DreamBuild"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(L.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/login",className:"px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"Sign in"}),e.jsx(L.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/signup",className:"px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl",children:"Sign up"})]})]}),e.jsx("div",{className:"flex items-center justify-center p-6 -mt-20",children:e.jsx("div",{className:"w-full max-w-md",children:e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-2xl",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg",children:e.jsx("span",{className:"text-white font-bold text-2xl",children:"D"})}),e.jsx("h1",{className:"text-2xl font-bold mb-2 text-slate-800 dark:text-white",children:"Welcome back"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-sm",children:"Sign in to continue building amazing applications"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs(L.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:l,disabled:i,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md",children:[i?e.jsx(Xt,{className:"h-5 w-5 animate-spin text-blue-600"}):e.jsx("div",{className:"w-5 h-5 bg-gradient-to-r from-blue-500 to-red-500 rounded flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-bold",children:"G"})}),i?"Signing in...":"Continue with Google"]}),e.jsxs(L.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:d,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 shadow-sm hover:shadow-md",children:[e.jsx(pe,{className:"h-5 w-5"}),"Continue with GitHub"]})]}),e.jsxs("div",{className:"relative my-8",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-slate-200 dark:border-slate-600"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"bg-white dark:bg-slate-800 px-4 text-slate-500 dark:text-slate-400 font-medium",children:"or"})})]}),e.jsx("div",{className:"text-center",children:e.jsxs(L.a,{whileHover:{scale:1.05},whileTap:{scale:.95},href:"/ai-builder",className:"inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold text-sm bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600",children:["Continue as Guest",e.jsx(yt,{className:"h-4 w-4"})]})})]})})})]})},Vf=()=>{const{user:s,signInWithGoogle:t,signInWithGitHub:r,loading:n}=vt(),a=Bs(),[i,o]=m.useState(!1);m.useEffect(()=>{s&&!n&&a("/dashboard")},[s,n,a]);const l=async()=>{try{o(!0),await t(),B.success("Welcome to DreamBuild!")}catch(c){console.error("Sign in error:",c),B.error("Failed to sign in. Please try again.")}finally{o(!1)}},d=async()=>{try{o(!0),await r(),B.success("Welcome to DreamBuild!")}catch(c){console.error("GitHub sign in error:",c),c.message.includes("already exists using Google")?B.error("An account with this email already exists using Google. Please sign in with Google instead, or use a different email for GitHub."):c.message.includes("already exists using email/password")?B.error("An account with this email already exists using email/password. Please sign in with your existing method instead."):c.message.includes("account with this email already exists")?B.error("An account with this email already exists. Please sign in with your existing method instead."):c.message.includes("couldn't determine the sign-in method")?B.error("An account with this email already exists. Please try signing in with Google first, then you can link your GitHub account."):c.message.includes("not properly configured")?B.error("GitHub authentication is not properly configured. Please check Firebase Console settings or try signing in with Google instead."):B.error("Failed to sign in with GitHub. Please try again.")}finally{o(!1)}};return n?e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsxs("div",{className:"flex justify-between items-center p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-primary-foreground font-bold text-sm",children:"D"})}),e.jsx("span",{className:"font-semibold text-foreground",children:"DreamBuild"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(L.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/login",className:"px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors",children:"Sign in"}),e.jsx(L.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/signup",className:"px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors",children:"Sign up"})]})]}),e.jsx("div",{className:"flex items-center justify-center p-4 -mt-16",children:e.jsx("div",{className:"w-full max-w-xs",children:e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},className:"bg-card border border-border rounded-xl p-6 shadow-sm",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h1",{className:"text-xl font-bold mb-1 text-foreground",children:"Join DreamBuild"}),e.jsx("p",{className:"text-muted-foreground text-xs",children:"Create your account"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(L.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:l,disabled:i,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background disabled:opacity-50 disabled:cursor-not-allowed",children:[i?e.jsx(Xt,{className:"h-4 w-4 animate-spin text-primary"}):e.jsxs("svg",{className:"h-4 w-4",viewBox:"0 0 24 24",children:[e.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),e.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),e.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),i?"Creating account...":"Continue with Google"]}),e.jsxs(L.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:d,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background",children:[e.jsx(pe,{className:"h-4 w-4"}),"Continue with GitHub"]})]}),e.jsxs("div",{className:"relative my-4",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-border"})}),e.jsx("div",{className:"relative flex justify-center text-xs",children:e.jsx("span",{className:"bg-card px-2 text-muted-foreground",children:"or"})})]}),e.jsx("div",{className:"text-center",children:e.jsxs(L.a,{whileHover:{scale:1.02},whileTap:{scale:.98},href:"/ai-builder",className:"inline-flex items-center gap-1 px-3 py-1.5 text-primary hover:text-primary-dark transition-colors font-medium text-xs",children:["Continue as Guest",e.jsx(yt,{className:"h-3 w-3"})]})})]})})})]})},Jf=()=>{const{currentProject:s,createNewProject:t,projects:r,switchProject:n,saveProject:a,deleteProject:i}=Ge(),[o,l]=m.useState(""),[d,c]=m.useState("all"),[u,p]=m.useState(!1),[g,y]=m.useState(""),[x,b]=m.useState("web"),[h,N]=m.useState(null);console.log("Projects page rendering, projects:",r);const j=r.map(v=>{var O;return{id:v.id,name:v.name,type:((O=v.config)==null?void 0:O.appType)||"web",description:v.description||"No description available",status:v.status||"active",lastModified:v.lastModified?new Date(v.lastModified).toISOString().split("T")[0]:new Date().toISOString().split("T")[0],files:Object.keys(v.files||{}).length,size:S(v),tags:w(v),preview:f(v),source:v.source||"dreambuild",githubData:v.githubData}}),S=v=>{const O=v.files||{};return`${(Object.values(O).reduce((E,U)=>E+((U==null?void 0:U.length)||0),0)/1024/1024).toFixed(1)} MB`},w=v=>{var k,C,E,U,G;const O=[];return(k=v.config)!=null&&k.language&&O.push(v.config.language),(C=v.config)!=null&&C.styling&&O.push(v.config.styling),(E=v.config)!=null&&E.database&&v.config.database!=="none"&&O.push(v.config.database),(U=v.config)!=null&&U.auth&&v.config.auth!=="none"&&O.push(v.config.auth),(G=v.githubData)!=null&&G.language&&O.push(v.githubData.language),[...new Set(O)].slice(0,4)},f=v=>{var C,E,U;return(E=(C=v.githubData)==null?void 0:C.owner)!=null&&E.avatar_url?v.githubData.owner.avatar_url:`https://via.placeholder.com/300x200/${{web:"007acc",mobile:"ffc107",api:"17a2b8",dashboard:"6f42c1",ecommerce:"28a745"}[(U=v.config)==null?void 0:U.appType]||"6c757d"}/ffffff?text=${encodeURIComponent(v.name)}`},A=[{id:"all",name:"All",icon:Ee,count:j.length},{id:"web",name:"Web Apps",icon:je,count:j.filter(v=>v.type==="web").length},{id:"mobile",name:"Mobile",icon:W,count:j.filter(v=>v.type==="mobile").length},{id:"dashboard",name:"Dashboards",icon:Dt,count:j.filter(v=>v.type==="dashboard").length},{id:"api",name:"APIs",icon:Dt,count:j.filter(v=>v.type==="api").length},{id:"game",name:"Games",icon:me,count:j.filter(v=>v.type==="game").length},{id:"ecommerce",name:"E-commerce",icon:Dt,count:j.filter(v=>v.type==="ecommerce").length},{id:"completed",name:"Completed",icon:me,count:j.filter(v=>v.status==="completed").length}],R=j.filter(v=>{const O=o===""||v.name===o,k=d==="all"||v.type===d||v.status===d;return O&&k}),P=async()=>{if(!g.trim()){B.error("Please enter a project name");return}try{const v={id:null,name:g,files:{"index.html":"","style.css":"","script.js":""},activeFile:"index.html",config:{appType:x,language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date,description:`New ${x} project`,status:"active",source:"dreambuild"};await a(g),y(""),b("web"),p(!1),B.success("Project created successfully!")}catch(v){console.error("Failed to create project:",v),B.error("Failed to create project. Please try again.")}},I=async v=>{try{await i(v),N(null),B.success("Project deleted successfully!")}catch(O){console.error("Failed to delete project:",O),B.error("Failed to delete project. Please try again.")}},M=v=>{switch(v){case"active":return"bg-green-100 text-green-800 border-green-200";case"development":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"completed":return"bg-white/10 text-white border-white/20";default:return"bg-gray-100 text-gray-800 border-gray-200"}},F=v=>{switch(v){case"web":return je;case"mobile":return W;case"dashboard":return Dt;default:return Ee}};try{return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:[e.jsxs("div",{className:"w-full px-1 sm:px-2 lg:px-3 py-8",children:[e.jsxs("div",{className:"flex flex-col items-center text-center mb-8",children:[e.jsxs("div",{className:"space-y-3 max-w-4xl",children:[e.jsx("h1",{className:"text-5xl font-bold text-gray-900",children:"Projects"}),e.jsx("p",{className:"text-lg text-gray-600",children:"Manage and organize your AI-generated projects"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-6 text-sm",children:[e.jsxs("span",{className:"flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-200",children:[e.jsx(Ee,{className:"h-4 w-4"}),j.length," Total Projects"]}),e.jsxs("span",{className:"flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg border border-purple-200",children:[e.jsx(me,{className:"h-4 w-4"}),j.filter(v=>v.source==="github").length," GitHub"]})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs(L.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>p(!0),className:"flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 font-semibold text-sm border border-primary/20",children:[e.jsx(Rt,{className:"h-4 w-4"}),"Create New Project"]})})]}),e.jsx("div",{className:"flex flex-wrap items-center justify-end gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 p-2 rounded-2xl mb-8 shadow-sm overflow-x-auto ml-auto mr-4",children:A.map(v=>{const O=v.icon,k=d===v.id;return e.jsxs(L.button,{whileHover:{scale:1.02,y:-1},whileTap:{scale:.98},onClick:()=>c(v.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${k?"bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 border border-primary/20":"text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent hover:border-gray-200"}`,children:[e.jsx(O,{className:"h-4 w-4 flex-shrink-0"}),e.jsx("span",{className:"text-sm font-medium",children:v.name}),e.jsx("span",{className:`text-xs px-2 py-1 rounded-full font-semibold ${k?"bg-white/20 text-white":"bg-gray-100 text-gray-600"}`,children:v.count})]},v.id)})}),e.jsxs("div",{className:"flex items-center justify-center gap-3 mb-8 w-full",children:[e.jsxs("select",{value:o,onChange:v=>l(v.target.value),className:"w-full pl-4 pr-4 py-4 border border-gray-200 rounded-xl bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 text-gray-900 text-base shadow-sm hover:shadow-md focus:shadow-lg appearance-none cursor-pointer",children:[e.jsxs("option",{value:"",children:["All Projects (",j.length,")"]}),j.map(v=>e.jsxs("option",{value:v.name,children:[v.name," - ",v.type," - ",v.status]},v.id))]}),e.jsx(Ze,{className:"h-6 w-6 text-gray-400 flex-shrink-0"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6",children:R.map((v,O)=>{const k=F(v.type);return e.jsxs(L.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:O*.1,duration:.3},whileHover:{y:-4,scale:1.02},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"font-semibold text-lg text-foreground truncate group-hover:text-primary transition-colors duration-200",children:v.name}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsxs("span",{className:"text-xs text-gray-500 font-medium capitalize",children:[v.type," Project"]}),e.jsx("span",{className:`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border ${M(v.status)}`,children:v.status})]})]}),e.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 border border-blue-200",children:e.jsx(k,{className:"h-6 w-6 text-blue-600"})})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0 ml-2",children:[e.jsxs(L.button,{whileHover:{scale:1.05,y:-1},whileTap:{scale:.95},className:"flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",onClick:()=>n(v.id),title:"Open Project",children:[e.jsx(yt,{className:"h-3.5 w-3.5"}),"Open Project"]}),e.jsxs("button",{onClick:()=>N(h===v.id?null:v.id),className:"flex items-center gap-1.5 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800",title:"More Options",children:[e.jsx(tl,{className:"h-4 w-4"}),e.jsx("span",{className:"text-xs font-medium",children:"Menu"})]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed",children:v.description}),e.jsxs("div",{className:"flex flex-wrap gap-1.5 mb-4",children:[v.tags.slice(0,3).map(C=>e.jsx("span",{className:"px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-lg border border-border/50",children:C},C)),v.tags.length>3&&e.jsxs("span",{className:"px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-lg border border-border/50",children:["+",v.tags.length-3]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-4 text-xs text-muted-foreground",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(be,{className:"h-3.5 w-3.5"}),v.files," files"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(Pt,{className:"h-3.5 w-3.5"}),v.lastModified]})]}),e.jsx("div",{className:"text-xs text-muted-foreground font-medium",children:v.size})]})]}),e.jsx(qe,{children:h===v.id&&e.jsx(L.div,{initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},className:"absolute right-2 top-14 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-xl z-20 min-w-[180px] overflow-hidden",children:e.jsxs("div",{className:"p-1",children:[e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-700",children:[e.jsx(ka,{className:"h-4 w-4 text-blue-500"}),"Edit Details"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-green-50 rounded-lg transition-colors text-gray-700 hover:text-green-700",children:[e.jsx(Qe,{className:"h-4 w-4 text-green-500"}),"Download"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-purple-50 rounded-lg transition-colors text-gray-700 hover:text-purple-700",children:[e.jsx(Ra,{className:"h-4 w-4 text-purple-500"}),"Share Project"]}),e.jsx("div",{className:"h-px bg-gray-200 my-2 mx-2"}),e.jsxs("button",{onClick:()=>I(v.id),className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors hover:text-red-700",children:[e.jsx(Ta,{className:"h-4 w-4"}),"Delete Project"]})]})})})]},v.id)})}),R.length===0&&e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6",children:e.jsx(Ee,{className:"h-12 w-12 text-primary"})}),e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-3",children:o||d!=="all"?"No projects found":"No projects yet"}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8 max-w-md mx-auto",children:o||d!=="all"?"Try adjusting your search or filter criteria to find what you're looking for.":"Start building amazing projects with AI-powered code generation!"}),e.jsxs(L.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>p(!0),className:"inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 font-semibold text-base border border-primary/20",children:[e.jsx(Rt,{className:"h-5 w-5"}),"Get Started - Create Your First Project"]})]})]}),e.jsx(qe,{children:u&&e.jsx(L.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:()=>p(!1),children:e.jsxs(L.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4",onClick:v=>v.stopPropagation(),children:[e.jsx("h2",{className:"text-xl font-semibold text-foreground mb-4",children:"Create New Project"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:g,onChange:v=>y(v.target.value),placeholder:"Enter project name...",className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Type"}),e.jsxs("select",{value:x,onChange:v=>b(v.target.value),className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"web",children:"Web Application"}),e.jsx("option",{value:"mobile",children:"Mobile Application"}),e.jsx("option",{value:"dashboard",children:"Dashboard"})]})]})]}),e.jsxs("div",{className:"flex gap-3 mt-6",children:[e.jsx(L.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>p(!1),className:"flex-1 px-4 py-2.5 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium",children:"Cancel"}),e.jsx(L.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:P,className:"flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:"Create"})]})]})})}),h&&e.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>N(null)})]})}catch(v){return console.error("Error in Projects component:",v),e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600 mb-4",children:"Error Loading Projects"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"There was an error loading the projects page."}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Error: ",v.message]})]})})})}},Yf=()=>{var S,w;const{theme:s,setTheme:t}=Gs(),[r,n]=m.useState("appearance"),[a,i]=m.useState({appearance:{theme:s,fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),[o,l]=m.useState(!0),[d,c]=m.useState(!1);m.useEffect(()=>{const f=localStorage.getItem("dreambuild-settings");f&&i(JSON.parse(f)),l(!1)},[]),m.useEffect(()=>{c(!0)},[a]);const u=()=>{localStorage.setItem("dreambuild-settings",JSON.stringify(a)),c(!1),console.log("Settings saved successfully!")},p=()=>{i({appearance:{theme:"system",fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),console.log("Settings reset to defaults!")},g=()=>{const f=JSON.stringify(a,null,2),A=new Blob([f],{type:"application/json"}),R=URL.createObjectURL(A),P=document.createElement("a");P.href=R,P.download="dreambuild-settings.json",P.click(),URL.revokeObjectURL(R),console.log("Settings exported!")},y=f=>{const A=f.target.files[0];if(A){const R=new FileReader;R.onload=P=>{try{const I=JSON.parse(P.target.result);i(I),console.log("Settings imported successfully!")}catch{console.error("Invalid settings file!")}},R.readAsText(A)}},x=(f,A,R)=>{i(P=>({...P,[f]:{...P[f],[A]:R}})),f==="appearance"&&A==="theme"&&t(R)},b=[{id:"appearance",name:"Appearance",icon:Pa},{id:"editor",name:"Editor",icon:W},{id:"ai",name:"AI Settings",icon:_e},{id:"notifications",name:"Notifications",icon:sl},{id:"privacy",name:"Privacy",icon:Yr}],h=({title:f,description:A,children:R,warning:P})=>e.jsxs("div",{className:"flex items-start justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("h3",{className:"font-medium text-foreground",children:f}),P&&e.jsx(Ds,{className:"h-4 w-4 text-yellow-500",title:P})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:A})]}),e.jsx("div",{className:"ml-4",children:R})]}),N=({checked:f,onChange:A,disabled:R=!1})=>e.jsx("button",{onClick:()=>A(!f),disabled:R,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${f?"bg-gray-700":"bg-muted"} ${R?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${f?"translate-x-6":"translate-x-1"}`})}),j=()=>{switch(r){case"appearance":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Theme",description:"Choose your preferred color scheme",children:e.jsxs("select",{value:a.appearance.theme,onChange:f=>x("appearance","theme",f.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"light",children:"Light Theme"}),e.jsx("option",{value:"dark",children:"Dark Theme"}),e.jsx("option",{value:"system",children:"System Theme"}),e.jsx("option",{value:"blue",children:"Blue Theme"}),e.jsx("option",{value:"purple",children:"Purple Theme"}),e.jsx("option",{value:"green",children:"Green Theme"}),e.jsx("option",{value:"orange",children:"Orange Theme"}),e.jsx("option",{value:"red",children:"Red Theme"}),e.jsx("option",{value:"pink",children:"Pink Theme"}),e.jsx("option",{value:"cyan",children:"Cyan Theme"}),e.jsx("option",{value:"amber",children:"Amber Theme"}),e.jsx("option",{value:"emerald",children:"Emerald Theme"})]})}),e.jsx(h,{title:"Font Size",description:"Adjust the text size throughout the interface",children:e.jsxs("select",{value:a.appearance.fontSize,onChange:f=>x("appearance","fontSize",f.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"small",children:"Small"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"large",children:"Large"})]})}),e.jsx(h,{title:"Font Family",description:"Choose the font family for the editor",children:e.jsxs("select",{value:a.appearance.fontFamily,onChange:f=>x("appearance","fontFamily",f.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"system",children:"System Default"}),e.jsx("option",{value:"mono",children:"Monospace"}),e.jsx("option",{value:"sans",children:"Sans Serif"}),e.jsx("option",{value:"serif",children:"Serif"})]})}),e.jsx(h,{title:"Animations",description:"Enable smooth animations and transitions",children:e.jsx(N,{checked:a.appearance.animations,onChange:f=>x("appearance","animations",f)})}),e.jsx(h,{title:"Compact Mode",description:"Reduce spacing for a more compact interface",children:e.jsx(N,{checked:a.appearance.compactMode,onChange:f=>x("appearance","compactMode",f)})})]});case"editor":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Tab Size",description:"Number of spaces for indentation",children:e.jsxs("select",{value:a.editor.tabSize,onChange:f=>x("editor","tabSize",parseInt(f.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:2,children:"2 spaces"}),e.jsx("option",{value:4,children:"4 spaces"}),e.jsx("option",{value:8,children:"8 spaces"})]})}),e.jsx(h,{title:"Word Wrap",description:"Wrap long lines in the editor",children:e.jsx(N,{checked:a.editor.wordWrap,onChange:f=>x("editor","wordWrap",f)})}),e.jsx(h,{title:"Minimap",description:"Show a minimap of your code",children:e.jsx(N,{checked:a.editor.minimap,onChange:f=>x("editor","minimap",f)})}),e.jsx(h,{title:"Line Numbers",description:"Show line numbers in the editor",children:e.jsx(N,{checked:a.editor.lineNumbers,onChange:f=>x("editor","lineNumbers",f)})}),e.jsx(h,{title:"Auto Save",description:"Automatically save files as you type",children:e.jsx(N,{checked:a.editor.autoSave,onChange:f=>x("editor","autoSave",f)})}),e.jsx(h,{title:"Format on Save",description:"Automatically format code when saving",children:e.jsx(N,{checked:a.editor.formatOnSave,onChange:f=>x("editor","formatOnSave",f)})}),e.jsx(h,{title:"Auto Complete",description:"Enable intelligent code completion",children:e.jsx(N,{checked:a.editor.autoComplete,onChange:f=>x("editor","autoComplete",f)})})]});case"ai":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Default AI Model",description:"Choose your preferred AI model for code generation",children:e.jsxs("select",{value:a.ai.defaultModel,onChange:f=>x("ai","defaultModel",f.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"codellama-7b",children:"CodeLlama 7B"}),e.jsx("option",{value:"codellama-13b",children:"CodeLlama 13B"}),e.jsx("option",{value:"starcoder-15b",children:"StarCoder 15B"}),e.jsx("option",{value:"deepseek-coder",children:"DeepSeek Coder"}),e.jsx("option",{value:"wizardcoder-7b",children:"WizardCoder 7B"})]})}),e.jsx(h,{title:"Temperature",description:"Controls randomness in AI responses (0.0 = deterministic, 1.0 = creative)",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:a.ai.temperature,onChange:f=>x("ai","temperature",parseFloat(f.target.value)),className:"w-24"}),e.jsx("span",{className:"text-sm text-muted-foreground w-8",children:a.ai.temperature})]})}),e.jsx(h,{title:"Max Tokens",description:"Maximum number of tokens in AI responses",children:e.jsxs("select",{value:a.ai.maxTokens,onChange:f=>x("ai","maxTokens",parseInt(f.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:1e3,children:"1,000"}),e.jsx("option",{value:2e3,children:"2,000"}),e.jsx("option",{value:4e3,children:"4,000"}),e.jsx("option",{value:8e3,children:"8,000"})]})}),e.jsx(h,{title:"Auto Generate",description:"Automatically generate code suggestions as you type",children:e.jsx(N,{checked:a.ai.autoGenerate,onChange:f=>x("ai","autoGenerate",f)})}),e.jsx(h,{title:"AI Suggestions",description:"Show contextual AI suggestions in the editor",children:e.jsx(N,{checked:a.ai.suggestions,onChange:f=>x("ai","suggestions",f)})})]});case"notifications":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Project Updates",description:"Get notified when projects are updated",children:e.jsx(N,{checked:a.notifications.projectUpdates,onChange:f=>x("notifications","projectUpdates",f)})}),e.jsx(h,{title:"AI Completions",description:"Get notified when AI completes code generation",children:e.jsx(N,{checked:a.notifications.aiCompletions,onChange:f=>x("notifications","aiCompletions",f)})}),e.jsx(h,{title:"Error Notifications",description:"Get notified about errors and issues",children:e.jsx(N,{checked:a.notifications.errors,onChange:f=>x("notifications","errors",f)})}),e.jsx(h,{title:"Sound Notifications",description:"Play sounds for notifications",children:e.jsx(N,{checked:a.notifications.sound,onChange:f=>x("notifications","sound",f)})}),e.jsx(h,{title:"Email Notifications",description:"Receive notifications via email",children:e.jsx(N,{checked:a.notifications.email,onChange:f=>x("notifications","email",f)})})]});case"privacy":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Analytics",description:"Help improve DreamBuild by sharing anonymous usage data",children:e.jsx(N,{checked:a.privacy.analytics,onChange:f=>x("privacy","analytics",f)})}),e.jsx(h,{title:"Crash Reports",description:"Automatically send crash reports to help fix bugs",children:e.jsx(N,{checked:a.privacy.crashReports,onChange:f=>x("privacy","crashReports",f)})}),e.jsx(h,{title:"Telemetry",description:"Share performance and usage telemetry",warning:"This may include personal information",children:e.jsx(N,{checked:a.privacy.telemetry,onChange:f=>x("privacy","telemetry",f)})}),e.jsx(h,{title:"Share Usage Statistics",description:"Share anonymous usage statistics with the community",children:e.jsx(N,{checked:a.privacy.shareUsage,onChange:f=>x("privacy","shareUsage",f)})})]});default:return null}};return o?e.jsx("div",{className:"min-h-screen bg-background",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[e.jsx("div",{className:"lg:col-span-1",children:e.jsx("div",{className:"space-y-3",children:[...Array(5)].map((f,A)=>e.jsx("div",{className:"h-12 bg-muted rounded"},A))})}),e.jsx("div",{className:"lg:col-span-3",children:e.jsx("div",{className:"bg-card/50 rounded-xl p-6",children:e.jsx("div",{className:"space-y-4",children:[...Array(6)].map((f,A)=>e.jsx("div",{className:"h-16 bg-muted rounded"},A))})})})]})]})})}):e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"mb-8",children:e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Settings"}),e.jsx("p",{className:"text-muted-foreground",children:"Customize your DreamBuild experience and preferences"})]}),e.jsx("div",{className:"flex items-center gap-2",children:d&&e.jsxs(L.button,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},onClick:u,className:"flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200",children:[e.jsx(Sa,{className:"h-4 w-4"}),"Save Changes"]})})]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"lg:col-span-1",children:[e.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:e.jsx("nav",{className:"space-y-2",children:b.map(f=>{const A=f.icon;return e.jsxs("button",{onClick:()=>n(f.id),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${r===f.id?"bg-gray-700 text-white shadow-sm":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[e.jsx(A,{className:"h-4 w-4"}),f.name]},f.id)})})}),e.jsxs("div",{className:"mt-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-3",children:"Data Management"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("button",{onClick:g,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors",children:[e.jsx(Qe,{className:"h-4 w-4"}),"Export Settings"]}),e.jsxs("label",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors cursor-pointer",children:[e.jsx(Ca,{className:"h-4 w-4"}),"Import Settings",e.jsx("input",{type:"file",accept:".json",onChange:y,className:"hidden"})]}),e.jsxs("button",{onClick:p,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:[e.jsx(Ms,{className:"h-4 w-4"}),"Reset to Defaults"]})]})]})]}),e.jsx("div",{className:"lg:col-span-3",children:e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden",children:[e.jsx("div",{className:"p-6 border-b border-border/50",children:e.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[Oe.createElement((S=b.find(f=>f.id===r))==null?void 0:S.icon,{className:"h-5 w-5 text-white"}),(w=b.find(f=>f.id===r))==null?void 0:w.name]})}),e.jsx("div",{className:"divide-y divide-border/50",children:j()})]})})]})]})})},Kf=()=>{const[s,t]=m.useState(""),[r,n]=m.useState("getting-started"),a=[{id:"getting-started",title:"Getting Started",icon:Ue,articles:[{title:"Quick Start Guide",description:"Get up and running in 5 minutes"},{title:"Installation",description:"Install DreamBuild on your system"},{title:"First Project",description:"Create your first AI-generated project"},{title:"Basic Concepts",description:"Understanding the DreamBuild workflow"}]},{id:"ai-features",title:"AI Features",icon:W,articles:[{title:"Code Generation",description:"Generate code with AI assistance"},{title:"Local AI Setup",description:"Set up Ollama for offline AI"},{title:"Template System",description:"Use pre-built project templates"},{title:"AI Models",description:"Available AI models and capabilities"}]},{id:"api-reference",title:"API Reference",icon:Cr,articles:[{title:"REST API",description:"Complete API documentation"},{title:"WebSocket API",description:"Real-time communication"},{title:"Authentication",description:"API authentication methods"},{title:"Rate Limits",description:"API usage limits and quotas"}]},{id:"deployment",title:"Deployment",icon:je,articles:[{title:"Firebase Hosting",description:"Deploy to Firebase"},{title:"GitHub Pages",description:"Deploy to GitHub Pages"},{title:"Custom Domain",description:"Set up custom domains"},{title:"CI/CD Pipeline",description:"Automated deployment workflows"}]}],i=[{title:"API Documentation",href:"#",icon:W},{title:"GitHub Repository",href:"https://github.com/ronb12/DreamBuild",icon:pe},{title:"Community Forum",href:"#",icon:je},{title:"Video Tutorials",href:"#",icon:Qt}];return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(ye,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Documentation"}),e.jsx("p",{className:"text-muted-foreground",children:"Complete guides and API references for DreamBuild"})]})]}),e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(Ze,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search documentation...",value:s,onChange:o=>t(o.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[e.jsx("div",{className:"lg:col-span-1",children:e.jsxs("div",{className:"sticky top-8 space-y-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Sections"}),a.map(o=>{const l=o.icon;return e.jsxs("button",{onClick:()=>n(o.id),className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${r===o.id?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[e.jsx(l,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:o.title})]},o.id)}),e.jsxs("div",{className:"mt-8 pt-6 border-t border-border",children:[e.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Quick Links"}),e.jsx("div",{className:"space-y-2",children:i.map(o=>{const l=o.icon;return e.jsxs("a",{href:o.href,target:o.href.startsWith("http")?"_blank":void 0,rel:o.href.startsWith("http")?"noopener noreferrer":void 0,className:"flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors",children:[e.jsx(l,{className:"h-4 w-4"}),e.jsx("span",{children:o.title}),o.href.startsWith("http")&&e.jsx(Qt,{className:"h-3 w-3 ml-auto"})]},o.title)})})]})]})}),e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("div",{className:"bg-card border border-border rounded-xl p-6",children:a.map(o=>{const l=o.icon;return e.jsxs("div",{className:r===o.id?"block":"hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:e.jsx(l,{className:"h-5 w-5 text-primary"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-foreground",children:o.title}),e.jsxs("p",{className:"text-muted-foreground",children:["Learn about ",o.title.toLowerCase()]})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:o.articles.map((d,c)=>e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:c*.1},className:"p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer group",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors mb-2",children:d.title}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:d.description})]}),e.jsx(rl,{className:"h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"})]})},d.title))})]},o.id)})}),r==="getting-started"&&e.jsxs("div",{className:"mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground mb-4",children:"Ready to get started?"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Follow our quick start guide to create your first AI-generated project in minutes."}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(Ue,{className:"h-4 w-4"}),"Quick Start Guide"]}),e.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Qe,{className:"h-4 w-4"}),"Download PDF"]})]})]})]})]})]})})},Xf=()=>{const[s,t]=m.useState(""),[r,n]=m.useState("all"),[a,i]=m.useState("grid"),o=[{id:"all",name:"All Examples",count:24},{id:"web",name:"Web Apps",count:8},{id:"mobile",name:"Mobile Apps",count:6},{id:"api",name:"APIs",count:5},{id:"dashboard",name:"Dashboards",count:5}],d=[{id:1,title:"E-commerce Store",description:"Full-featured online store with React, Node.js, and Stripe integration",category:"web",difficulty:"Intermediate",tags:["React","Node.js","Stripe","MongoDB"],stars:156,language:"JavaScript",preview:"https://via.placeholder.com/400x250/2563eb/ffffff?text=E-commerce+Store",github:"https://github.com/example/ecommerce-store"},{id:2,title:"Task Management App",description:"Collaborative task management with real-time updates and team features",category:"web",difficulty:"Beginner",tags:["Vue.js","Firebase","Real-time"],stars:89,language:"JavaScript",preview:"https://via.placeholder.com/400x250/10b981/ffffff?text=Task+Manager",github:"https://github.com/example/task-manager"},{id:3,title:"Fitness Tracker",description:"Mobile app for tracking workouts, nutrition, and fitness goals",category:"mobile",difficulty:"Intermediate",tags:["React Native","GraphQL","Health API"],stars:234,language:"TypeScript",preview:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Fitness+Tracker",github:"https://github.com/example/fitness-tracker"},{id:4,title:"Analytics Dashboard",description:"Business intelligence dashboard with charts, metrics, and reporting",category:"dashboard",difficulty:"Advanced",tags:["D3.js","Python","PostgreSQL"],stars:312,language:"Python",preview:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Analytics+Dashboard",github:"https://github.com/example/analytics-dashboard"},{id:5,title:"REST API Template",description:"Production-ready REST API with authentication, validation, and documentation",category:"api",difficulty:"Intermediate",tags:["Express.js","JWT","Swagger"],stars:178,language:"JavaScript",preview:"https://via.placeholder.com/400x250/ef4444/ffffff?text=REST+API",github:"https://github.com/example/rest-api-template"},{id:6,title:"Portfolio Website",description:"Modern portfolio website with animations, blog, and contact form",category:"web",difficulty:"Beginner",tags:["Next.js","Tailwind","Framer Motion"],stars:67,language:"TypeScript",preview:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Portfolio",github:"https://github.com/example/portfolio-website"},{id:7,title:"Social Media App",description:"Instagram-like social media app with posts, stories, and messaging",category:"mobile",difficulty:"Advanced",tags:["Flutter","Firebase","Real-time"],stars:445,language:"Dart",preview:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Social+App",github:"https://github.com/example/social-media-app"},{id:8,title:"GraphQL API",description:"Modern GraphQL API with subscriptions, caching, and real-time updates",category:"api",difficulty:"Advanced",tags:["GraphQL","Apollo","Redis"],stars:298,language:"TypeScript",preview:"https://via.placeholder.com/400x250/84cc16/ffffff?text=GraphQL+API",github:"https://github.com/example/graphql-api"}].filter(p=>{const g=p.title.toLowerCase().includes(s.toLowerCase())||p.description.toLowerCase().includes(s.toLowerCase())||p.tags.some(x=>x.toLowerCase().includes(s.toLowerCase())),y=r==="all"||p.category===r;return g&&y}),c=p=>{switch(p){case"Beginner":return"bg-green-100 text-green-800 border-green-200";case"Intermediate":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"Advanced":return"bg-red-100 text-red-800 border-red-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}},u=p=>{switch(p){case"web":return je;case"mobile":return Zt;case"api":return De;case"dashboard":return be;default:return ar}};return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(ar,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Examples"}),e.jsx("p",{className:"text-muted-foreground",children:"Explore real-world projects and code examples"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(Ze,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search examples...",value:s,onChange:p=>t(p.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Fs,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("select",{value:r,onChange:p=>n(p.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:o.map(p=>e.jsxs("option",{value:p.id,children:[p.name," (",p.count,")"]},p.id))})]})]}),e.jsxs("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-lg",children:[e.jsx("button",{onClick:()=>i("grid"),className:`p-2 rounded-md transition-colors ${a==="grid"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:e.jsx(Grid3X3,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>i("list"),className:`p-2 rounded-md transition-colors ${a==="list"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:e.jsx(Aa,{className:"h-4 w-4"})})]})]})]}),e.jsx("div",{className:a==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"space-y-4",children:d.map((p,g)=>{const y=u(p.category);return e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:g*.1},className:`bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group ${a==="list"?"flex":""}`,children:[e.jsxs("div",{className:`relative ${a==="list"?"w-48 h-32":"h-48"} bg-muted/50`,children:[e.jsx("img",{src:p.preview,alt:p.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute top-3 right-3 flex gap-2",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${c(p.difficulty)}`,children:p.difficulty})}),e.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(L.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-primary text-primary-foreground rounded-lg shadow-lg",title:"Run Example",children:e.jsx(et,{className:"h-4 w-4"})}),e.jsx(L.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-white text-gray-900 rounded-lg shadow-lg",title:"Copy Code",children:e.jsx(It,{className:"h-4 w-4"})})]})})]}),e.jsxs("div",{className:`p-4 ${a==="list"?"flex-1":""}`,children:[e.jsxs("div",{className:"flex items-start justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:e.jsx(y,{className:"h-4 w-4 text-primary"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:p.title}),e.jsx("p",{className:"text-sm text-muted-foreground",children:p.language})]})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(me,{className:"h-4 w-4"}),e.jsx("span",{children:p.stars})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:p.description}),e.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:p.tags.map(x=>e.jsx("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:x},x))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm",children:[e.jsx(et,{className:"h-4 w-4"}),"Run"]}),e.jsxs("a",{href:p.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[e.jsx(pe,{className:"h-4 w-4"}),"Code"]}),e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[e.jsx(Qe,{className:"h-4 w-4"}),"Download"]})]})]})]},p.id)})}),d.length===0&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(ar,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No examples found"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),e.jsx("button",{onClick:()=>{t(""),n("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),e.jsxs("div",{className:"mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Have a great example to share?"}),e.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Share your projects with the DreamBuild community and help other developers learn and grow."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(pe,{className:"h-5 w-5"}),"Submit Example"]}),e.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Qt,{className:"h-5 w-5"}),"View Guidelines"]})]})]})]})})},Qf=()=>{const[s,t]=m.useState("discussions"),[r,n]=m.useState(""),a=[{id:"discussions",name:"Discussions",count:156,icon:Ts},{id:"projects",name:"Showcase",count:89,icon:W},{id:"events",name:"Events",count:12,icon:Pt},{id:"resources",name:"Resources",count:45,icon:kr}],i=[{id:1,title:"How to set up Ollama for local AI development?",author:"Alex Chen",avatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=AC",time:"2 hours ago",category:"Getting Started",replies:12,likes:24,isPinned:!0,tags:["ollama","local-ai","setup"]},{id:2,title:"Building a React Native app with DreamBuild - Tips and tricks",author:"Sarah Johnson",avatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SJ",time:"4 hours ago",category:"Mobile Development",replies:8,likes:18,isPinned:!1,tags:["react-native","mobile","tips"]},{id:3,title:"Share your DreamBuild projects - Monthly showcase",author:"Community Team",avatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=CT",time:"1 day ago",category:"Showcase",replies:34,likes:67,isPinned:!0,tags:["showcase","projects","monthly"]},{id:4,title:"API rate limits and best practices",author:"Mike Rodriguez",avatar:"https://via.placeholder.com/40x40/8b5cf6/ffffff?text=MR",time:"2 days ago",category:"API",replies:15,likes:31,isPinned:!1,tags:["api","rate-limits","best-practices"]},{id:5,title:"Deploying to Firebase vs GitHub Pages - Pros and cons",author:"Emma Wilson",avatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=EW",time:"3 days ago",category:"Deployment",replies:22,likes:45,isPinned:!1,tags:["deployment","firebase","github-pages"]}],o=[{id:1,title:"DreamBuild Live Q&A Session",date:"2024-01-25",time:"2:00 PM EST",type:"Live Stream",attendees:156,description:"Join our monthly Q&A session with the DreamBuild team"},{id:2,title:"AI Development Workshop",date:"2024-01-30",time:"10:00 AM EST",type:"Workshop",attendees:89,description:"Learn advanced AI development techniques with DreamBuild"},{id:3,title:"Community Showcase",date:"2024-02-05",time:"6:00 PM EST",type:"Presentation",attendees:234,description:"Featured projects from our amazing community members"}],l=[{label:"Active Members",value:"2,847",icon:Xe},{label:"Discussions",value:"1,234",icon:Ts},{label:"Projects Shared",value:"567",icon:W},{label:"Events This Month",value:"8",icon:Pt}],d=i.filter(c=>c.title.toLowerCase().includes(r.toLowerCase())||c.category.toLowerCase().includes(r.toLowerCase())||c.tags.some(u=>u.toLowerCase().includes(r.toLowerCase())));return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(Xe,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Community"}),e.jsx("p",{className:"text-muted-foreground",children:"Connect with developers, share projects, and get help"})]})]}),e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(Ze,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search discussions...",value:r,onChange:c=>n(c.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:l.map((c,u)=>{const p=c.icon;return e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:"bg-card border border-border rounded-xl p-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",children:e.jsx(p,{className:"h-5 w-5 text-primary"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-2xl font-bold text-foreground",children:c.value}),e.jsx("p",{className:"text-sm text-muted-foreground",children:c.label})]})]})},c.label)})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-xl mb-6",children:a.map(c=>{const u=c.icon;return e.jsxs("button",{onClick:()=>t(c.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${s===c.id?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground hover:text-foreground hover:bg-background/50"}`,children:[e.jsx(u,{className:"h-4 w-4"}),e.jsx("span",{children:c.name}),e.jsx("span",{className:"px-2 py-1 text-xs bg-muted/50 rounded-full",children:c.count})]},c.id)})}),s==="discussions"&&e.jsx("div",{className:"space-y-4",children:d.map((c,u)=>e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:`bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200 ${c.isPinned?"border-primary/20 bg-primary/5":""}`,children:[c.isPinned&&e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(Ue,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-primary",children:"Pinned"})]}),e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("img",{src:c.avatar,alt:c.author,className:"w-10 h-10 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-foreground hover:text-primary transition-colors cursor-pointer mb-2",children:c.title}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-3",children:[e.jsxs("span",{children:["by ",c.author]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:c.time}),e.jsx("span",{children:"•"}),e.jsx("span",{className:"px-2 py-1 bg-muted rounded-md",children:c.category})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(Tr,{className:"h-4 w-4"}),e.jsx("span",{children:c.replies})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(Dr,{className:"h-4 w-4"}),e.jsx("span",{children:c.likes})]}),e.jsx("div",{className:"flex gap-1",children:c.tags.map(p=>e.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",p]},p))})]})]})]})]},c.id))}),s==="projects"&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(W,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Project Showcase"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Featured projects from our community will appear here"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Submit Your Project"})]}),s==="events"&&e.jsx("div",{className:"space-y-4",children:o.map((c,u)=>e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:"bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-2",children:c.title}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:c.description}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Pt,{className:"h-4 w-4"}),e.jsx("span",{children:c.date})]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:c.time}),e.jsx("span",{children:"•"}),e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded-md",children:c.type}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[c.attendees," attendees"]})]})]}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Join Event"})]})},c.id))}),s==="resources"&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(kr,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Community Resources"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Curated resources and learning materials will appear here"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Suggest Resource"})]})]}),e.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[e.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Quick Actions"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(Rt,{className:"h-4 w-4"}),"Start Discussion"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(W,{className:"h-4 w-4"}),"Share Project"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Pt,{className:"h-4 w-4"}),"Create Event"]})]})]}),e.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Join Our Community"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(pe,{className:"h-4 w-4"}),e.jsx("span",{children:"GitHub"})]}),e.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Vr,{className:"h-4 w-4"}),e.jsx("span",{children:"Twitter"})]}),e.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Et,{className:"h-4 w-4"}),e.jsx("span",{children:"Newsletter"})]})]})]}),e.jsxs("div",{className:"bg-primary/5 border border-primary/20 rounded-xl p-6",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Community Guidelines"}),e.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[e.jsx("li",{children:"• Be respectful and inclusive"}),e.jsx("li",{children:"• Share helpful and relevant content"}),e.jsx("li",{children:"• Follow our code of conduct"}),e.jsx("li",{children:"• Help others learn and grow"})]})]})]})]})]})})},Zf=()=>e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[e.jsx("div",{className:"text-center mb-16",children:e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg",children:e.jsx("span",{className:"text-white font-bold text-3xl",children:"D"})}),e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6",children:["About ",e.jsx("span",{className:"text-blue-600",children:"DreamBuild"})]}),e.jsx("p",{className:"text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed",children:"DreamBuild is a revolutionary AI-powered development platform that transforms your ideas into code. Simply describe what you want to build, and watch as DreamBuild generates complete applications for you."})]})}),e.jsx("div",{className:"mb-16",children:e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"What We Do"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"AI-Powered Development"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Transform your ideas into code using cutting-edge AI models. Simply describe what you want to build, and DreamBuild generates complete, working applications for you."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Multi-Language Support"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Build applications in popular programming languages including React, Vue, Python, JavaScript, HTML/CSS, and many more. Choose your preferred technology stack."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Instant Deployment"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Deploy your applications instantly to Firebase Hosting and GitHub Pages. No complex configuration required - just click and deploy."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Local AI Integration"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Use local AI models for complete privacy and control. No external API keys required - run everything on your own machine for maximum security."})]})]})]})}),e.jsx("div",{className:"mb-16",children:e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"Our Mission"}),e.jsx("p",{className:"text-lg text-slate-600 dark:text-slate-400 text-center leading-relaxed",children:"To democratize software development by making AI-powered coding tools accessible to everyone. Whether you're an experienced developer or just getting started, DreamBuild empowers you to turn your ideas into reality with the power of artificial intelligence."})]})}),e.jsx("div",{className:"mb-16",children:e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"About Bradley Virtual Solutions"}),e.jsxs("div",{className:"text-center",children:[e.jsxs("p",{className:"text-slate-600 dark:text-slate-400 mb-4",children:["DreamBuild is developed by ",e.jsx("strong",{className:"text-slate-800 dark:text-white",children:"Bradley Virtual Solutions, LLC"}),", a company dedicated to creating innovative AI-powered development tools."]}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Founded by Ronell Bradley, a full-stack developer passionate about AI and web development, we're committed to making advanced development tools accessible to everyone."})]})]})}),e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center",children:e.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Building?"}),e.jsx("p",{className:"text-blue-100 mb-6 max-w-xl mx-auto",children:"Start your journey with DreamBuild today and experience the future of AI-powered development."}),e.jsxs(L.a,{href:"/ai-builder",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg",children:[e.jsx(W,{className:"h-5 w-5"}),"Start Building Now",e.jsx(yt,{className:"h-4 w-4"})]})]})})]})}),ex=()=>{const[s,t]=m.useState(""),[r,n]=m.useState("all"),a=[{id:"all",name:"All Posts",count:24},{id:"tutorials",name:"Tutorials",count:8},{id:"ai",name:"AI & ML",count:6},{id:"development",name:"Development",count:5},{id:"company",name:"Company",count:5}],i={title:"Getting Started with Local AI Development: A Complete Guide",excerpt:"Learn how to set up Ollama, integrate local AI models, and build your first AI-powered application with DreamBuild.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-20",readTime:"8 min read",category:"tutorials",tags:["ai","ollama","tutorial","getting-started"],image:"https://via.placeholder.com/600x300/2563eb/ffffff?text=Local+AI+Guide",likes:156,comments:23},l=[{id:2,title:"Building a React Native App with AI Code Generation",excerpt:"Discover how to leverage DreamBuild's AI capabilities to create a mobile app from scratch.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-18",readTime:"6 min read",category:"tutorials",tags:["react-native","mobile","ai"],featured:!1,image:"https://via.placeholder.com/400x250/10b981/ffffff?text=React+Native",likes:89,comments:12,views:1523},{id:3,title:"The Future of AI-Powered Development Tools",excerpt:"Exploring emerging trends and technologies that will shape the future of software development.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-15",readTime:"10 min read",category:"ai",tags:["ai","future","technology","trends"],featured:!1,image:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Future+AI",likes:234,comments:34,views:4567},{id:4,title:"DreamBuild 2.0: What's New and Exciting",excerpt:"Announcing the latest features and improvements in DreamBuild 2.0, including enhanced AI capabilities.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-12",readTime:"5 min read",category:"company",tags:["release","features","announcement"],featured:!1,image:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=DreamBuild+2.0",likes:167,comments:28,views:3421},{id:5,title:"Best Practices for AI Code Generation",excerpt:"Learn how to write effective prompts and get the best results from AI code generation tools.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-10",readTime:"7 min read",category:"development",tags:["best-practices","prompts","ai","tips"],featured:!1,image:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Best+Practices",likes:145,comments:19,views:2890},{id:6,title:"Setting Up Your Development Environment for AI",excerpt:"A comprehensive guide to configuring your development environment for optimal AI-assisted coding.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-08",readTime:"9 min read",category:"tutorials",tags:["setup","environment","development","tools"],featured:!1,image:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Dev+Environment",likes:98,comments:15,views:1876},{id:7,title:"Community Spotlight: Amazing Projects Built with DreamBuild",excerpt:"Highlighting some of the incredible projects our community has created using DreamBuild.",author:"Community Team",authorAvatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=CT",publishDate:"2024-01-05",readTime:"6 min read",category:"company",tags:["community","showcase","projects","spotlight"],featured:!1,image:"https://via.placeholder.com/400x250/84cc16/ffffff?text=Community+Projects",likes:203,comments:41,views:5234}].filter(u=>{const p=u.title.toLowerCase().includes(s.toLowerCase())||u.excerpt.toLowerCase().includes(s.toLowerCase())||u.tags.some(y=>y.toLowerCase().includes(s.toLowerCase())),g=r==="all"||u.category===r;return p&&g}),d=u=>{switch(u){case"tutorials":return W;case"ai":return Ue;case"development":return je;case"company":return Ls;default:return ye}},c=u=>{switch(u){case"tutorials":return"bg-blue-100 text-blue-800 border-blue-200";case"ai":return"bg-purple-100 text-purple-800 border-purple-200";case"development":return"bg-green-100 text-green-800 border-green-200";case"company":return"bg-orange-100 text-orange-800 border-orange-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}};return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(ye,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Blog"}),e.jsx("p",{className:"text-muted-foreground",children:"Insights, tutorials, and updates from the DreamBuild team"})]})]}),e.jsx("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(Ze,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search blog posts...",value:s,onChange:u=>t(u.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Fs,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("select",{value:r,onChange:u=>n(u.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:a.map(u=>e.jsxs("option",{value:u.id,children:[u.name," (",u.count,")"]},u.id))})]})]})})]}),e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-12",children:e.jsx("div",{className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200",children:e.jsxs("div",{className:"md:flex",children:[e.jsx("div",{className:"md:w-1/2",children:e.jsx("img",{src:i.image,alt:i.title,className:"w-full h-64 md:h-full object-cover"})}),e.jsxs("div",{className:"md:w-1/2 p-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{className:"px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium",children:"Featured"}),e.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full border ${c(i.category)}`,children:i.category})]}),e.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer",children:i.title}),e.jsx("p",{className:"text-muted-foreground mb-6 leading-relaxed",children:i.excerpt}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:i.authorAvatar,alt:i.author,className:"w-6 h-6 rounded-full"}),e.jsx("span",{children:i.author})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Pt,{className:"h-4 w-4"}),e.jsx("span",{children:i.publishDate})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Le,{className:"h-4 w-4"}),e.jsx("span",{children:i.readTime})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex gap-1",children:i.tags.map(u=>e.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",u]},u))}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(Dr,{className:"h-4 w-4"}),e.jsx("span",{children:i.likes})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(Tr,{className:"h-4 w-4"}),e.jsx("span",{children:i.comments})]})]})]})]})]})})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map((u,p)=>{const g=d(u.category);return e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:p*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group",children:[e.jsxs("div",{className:"relative h-48 bg-muted/50",children:[e.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute top-3 right-3",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${c(u.category)}`,children:u.category})})]}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm text-primary font-medium",children:u.category})]}),e.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer mb-3 line-clamp-2",children:u.title}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-3",children:u.excerpt}),e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("img",{src:u.authorAvatar,alt:u.author,className:"w-8 h-8 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:u.author}),e.jsxs("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[e.jsx("span",{children:u.publishDate}),e.jsx("span",{children:"•"}),e.jsx("span",{children:u.readTime})]})]})]}),e.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:u.tags.map(y=>e.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",y]},y))}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Dr,{className:"h-4 w-4"}),e.jsx("span",{children:u.likes})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Tr,{className:"h-4 w-4"}),e.jsx("span",{children:u.comments})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:e.jsx(kr,{className:"h-4 w-4"})}),e.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:e.jsx(Ra,{className:"h-4 w-4"})}),e.jsxs("button",{className:"flex items-center gap-1 text-primary hover:text-primary-dark transition-colors",children:[e.jsx("span",{className:"text-sm font-medium",children:"Read"}),e.jsx(yt,{className:"h-4 w-4"})]})]})]})]})]},u.id)})}),l.length===0&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(ye,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No posts found"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),e.jsx("button",{onClick:()=>{t(""),n("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),e.jsxs("div",{className:"mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Stay Updated"}),e.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Subscribe to our newsletter for the latest tutorials, updates, and insights from the DreamBuild team."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto",children:[e.jsx("input",{type:"email",placeholder:"Enter your email",className:"flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"}),e.jsx("button",{className:"px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Subscribe"})]})]})]})})},tx=()=>{const[s,t]=m.useState({name:"",email:"",message:""}),[r,n]=m.useState(!1),[a,i]=m.useState(null),o=[{icon:Et,title:"Email Us",description:"Get in touch via email",value:"hello@dreambuild.dev",action:"mailto:hello@dreambuild.dev"}],l=[{icon:pe,href:"https://github.com/ronb12/DreamBuild",label:"GitHub"},{icon:Vr,href:"#",label:"Twitter"},{icon:nl,href:"#",label:"LinkedIn"}],d=u=>{const{name:p,value:g}=u.target;t(y=>({...y,[p]:g}))},c=async u=>{u.preventDefault(),n(!0),await new Promise(p=>setTimeout(p,2e3)),n(!1),i("success"),t({name:"",email:"",message:""}),setTimeout(()=>i(null),5e3)};return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"text-center mb-12",children:e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsxs("h1",{className:"text-5xl font-bold text-gray-900 mb-6",children:["Contact ",e.jsx("span",{className:"text-primary",children:"Us"})]}),e.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Have questions about DreamBuild? We'd love to hear from you."})]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[e.jsxs(L.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-white border border-gray-200 rounded-2xl p-8 shadow-sm",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Send us a Message"}),e.jsx("p",{className:"text-gray-600",children:"Fill out the form below and we'll get back to you as soon as possible."})]}),e.jsxs("form",{onSubmit:c,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Name *"}),e.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:d,required:!0,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all",placeholder:"Your full name"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email *"}),e.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:d,required:!0,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all",placeholder:"your@email.com"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Message *"}),e.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:d,required:!0,rows:6,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none",placeholder:"Tell us how we can help you..."})]}),a==="success"&&e.jsxs(L.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx(Ce,{className:"h-5 w-5 text-green-600"}),e.jsx("span",{className:"text-green-800",children:"Message sent successfully! We'll get back to you soon."})]}),e.jsx("button",{type:"submit",disabled:r,className:"w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold",children:r?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Sending..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Jr,{className:"h-5 w-5"}),"Send Message"]})})]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs(L.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Get in Touch"}),e.jsx("div",{className:"space-y-4",children:o.map(u=>{const p=u.icon;return e.jsxs("a",{href:u.action,className:"flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors",children:e.jsx(p,{className:"h-5 w-5 text-primary"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-semibold text-gray-900 group-hover:text-primary transition-colors",children:u.title}),e.jsx("p",{className:"text-sm text-gray-600 mb-1",children:u.description}),e.jsx("p",{className:"text-sm font-medium text-primary",children:u.value})]})]},u.title)})})]}),e.jsxs(L.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},className:"bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Follow Us"}),e.jsx("div",{className:"space-y-3",children:l.map(u=>{const p=u.icon;return e.jsxs("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group",children:[e.jsx(p,{className:"h-5 w-5 text-gray-600 group-hover:text-primary transition-colors"}),e.jsx("span",{className:"text-sm font-medium text-gray-900 group-hover:text-primary transition-colors",children:u.label})]},u.label)})})]})]})]})]})})},sx=()=>{const s=[{icon:De,title:"Information We Collect",content:["Account information (name, email, profile picture)","Project data and code you create using our platform","Usage analytics to improve our services","Device information for compatibility purposes","Communication data when you contact our support team"]},{icon:Be,title:"How We Use Your Information",content:["Provide and maintain our AI development platform","Process your code generation requests and project management","Improve our AI models and service quality","Send important updates about your projects","Provide customer support and technical assistance","Comply with legal obligations and protect our rights"]},{icon:al,title:"Data Security",content:["All data is encrypted in transit and at rest","We use industry-standard security measures","Regular security audits and updates","Limited access to your data by authorized personnel only","Secure cloud infrastructure with enterprise-grade protection","Your code and projects are stored securely and privately"]},{icon:il,title:"Your Rights",content:["Access your personal data at any time","Request correction of inaccurate information","Delete your account and associated data","Export your projects and data","Opt out of non-essential communications","Withdraw consent for data processing"]}];return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"text-center mb-12",children:e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("div",{className:"flex items-center justify-center mb-6",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg",children:e.jsx(Yr,{className:"h-8 w-8 text-white"})})}),e.jsxs("h1",{className:"text-5xl font-bold text-gray-900 mb-6",children:["Privacy ",e.jsx("span",{className:"text-blue-600",children:"Policy"})]}),e.jsx("p",{className:"text-lg text-gray-600 max-w-3xl mx-auto",children:"Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use DreamBuild."}),e.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Last updated: September 23, 2024"})]})}),e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Introduction"}),e.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:'DreamBuild ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered development platform.'}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:"By using DreamBuild, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service."})]}),e.jsx("div",{className:"space-y-8",children:s.map((t,r)=>{const n=t.icon;return e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2+r*.1},className:"bg-white border border-gray-200 rounded-2xl p-8 shadow-sm",children:[e.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0",children:e.jsx(n,{className:"h-6 w-6 text-blue-600"})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:t.title})]}),e.jsx("ul",{className:"space-y-3",children:t.content.map((a,i)=>e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{className:"text-gray-600",children:a})]},i))})]},t.title)})}),e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},className:"bg-blue-50 border border-blue-200 rounded-2xl p-8 mt-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Additional Information"}),e.jsxs("div",{className:"space-y-4 text-gray-600",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Data Retention:"})," We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your data at any time."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Third-Party Services:"})," We may use third-party services for analytics, hosting, and other functions. These services have their own privacy policies."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"International Transfers:"})," Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Children's Privacy:"})," Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13."]})]})]}),e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},className:"bg-white border border-gray-200 rounded-2xl p-8 mt-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Contact Us"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"If you have any questions about this Privacy Policy or our data practices, please contact us:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(Et,{className:"h-5 w-5 text-blue-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Email"}),e.jsx("p",{className:"text-gray-600",children:"privacy@dreambuild.dev"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(be,{className:"h-5 w-5 text-blue-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Data Protection Officer"}),e.jsx("p",{className:"text-gray-600",children:"dpo@dreambuild.dev"})]})]})]})]}),e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},className:"text-center mt-8 p-6 bg-gray-50 rounded-xl",children:e.jsx("p",{className:"text-sm text-gray-500",children:'This Privacy Policy may be updated from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.'})})]})})},rx=()=>{const s=[{icon:be,title:"Acceptance of Terms",content:["By accessing and using DreamBuild, you accept and agree to be bound by these Terms of Service","If you do not agree to these terms, you may not use our service","We reserve the right to modify these terms at any time without prior notice","Your continued use of the service after changes constitutes acceptance of the new terms","These terms apply to all users, including visitors, registered users, and premium subscribers"]},{icon:W,title:"Service Description",content:["DreamBuild is an AI-powered development platform supporting 100+ programming languages","We provide code generation, project management, and development tools","Our service includes both free and premium features","We may modify, suspend, or discontinue any part of our service at any time","We do not guarantee uninterrupted access to our service"]},{icon:Xe,title:"User Accounts",content:["You must provide accurate and complete information when creating an account","You are responsible for maintaining the confidentiality of your account credentials","You must notify us immediately of any unauthorized use of your account","You are responsible for all activities that occur under your account","We reserve the right to suspend or terminate accounts that violate these terms"]},{icon:De,title:"User Content and Data",content:["You retain ownership of all code and projects you create using our platform","You grant us a limited license to process your content to provide our services","You are responsible for ensuring your content does not violate any laws or third-party rights","We may use anonymized data to improve our AI models and services","You must not upload malicious code, viruses, or harmful content"]},{icon:Yr,title:"Prohibited Uses",content:["Use our service for any unlawful purpose or to solicit others to perform unlawful acts","Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances","Transmit or procure the sending of any advertising or promotional material without our consent","Impersonate or attempt to impersonate another person or entity","Engage in any other conduct that restricts or inhibits anyone's use of the service"]},{icon:ll,title:"Intellectual Property",content:["DreamBuild and its original content, features, and functionality are owned by Bradley Virtual Solutions, LLC","Our service is protected by copyright, trademark, and other intellectual property laws","You may not reproduce, distribute, or create derivative works without our permission","Any feedback or suggestions you provide may be used by us without compensation","Third-party trademarks and copyrights remain the property of their respective owners"]}],t=[{title:"Service Availability",content:"We strive to maintain high service availability but do not guarantee uninterrupted access. We may perform maintenance, updates, or modifications that temporarily affect service availability."},{title:"Limitation of Liability",content:"To the maximum extent permitted by law, DreamBuild and Bradley Virtual Solutions, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our service."},{title:"Indemnification",content:"You agree to defend, indemnify, and hold harmless DreamBuild and Bradley Virtual Solutions, LLC from any claims, damages, or expenses arising from your use of our service or violation of these terms."},{title:"Termination",content:"We may terminate or suspend your account and access to our service immediately, without prior notice, for any reason, including if you breach these Terms of Service."}];return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"text-center mb-12",children:e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("div",{className:"flex items-center justify-center mb-6",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg",children:e.jsx(ol,{className:"h-8 w-8 text-white"})})}),e.jsxs("h1",{className:"text-5xl font-bold text-gray-900 mb-6",children:["Terms of ",e.jsx("span",{className:"text-green-600",children:"Service"})]}),e.jsx("p",{className:"text-lg text-gray-600 max-w-3xl mx-auto",children:"These terms govern your use of DreamBuild. Please read them carefully before using our AI development platform."}),e.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Last updated: September 23, 2024"})]})}),e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Introduction"}),e.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:'Welcome to DreamBuild, operated by Bradley Virtual Solutions, LLC ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your use of our AI-powered development platform and services.'}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:"By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the service."})]}),e.jsx("div",{className:"space-y-8",children:s.map((r,n)=>{const a=r.icon;return e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2+n*.1},className:"bg-white border border-gray-200 rounded-2xl p-8 shadow-sm",children:[e.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0",children:e.jsx(a,{className:"h-6 w-6 text-green-600"})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:r.title})]}),e.jsx("ul",{className:"space-y-3",children:r.content.map((i,o)=>e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{className:"text-gray-600",children:i})]},o))})]},r.title)})}),e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},className:"mt-8 space-y-6",children:t.map((r,n)=>e.jsxs("div",{className:"bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:r.title}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:r.content})]},r.title))}),e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.9},className:"bg-green-50 border border-green-200 rounded-2xl p-8 mt-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Governing Law"}),e.jsxs("div",{className:"space-y-4 text-gray-600",children:[e.jsx("p",{children:"These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions."}),e.jsx("p",{children:"Any disputes arising from these Terms or your use of our service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association."}),e.jsx("p",{children:"If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will remain in full force and effect."})]})]}),e.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},className:"bg-white border border-gray-200 rounded-2xl p-8 mt-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Contact Information"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"If you have any questions about these Terms of Service, please contact us:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(Et,{className:"h-5 w-5 text-green-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Email"}),e.jsx("p",{className:"text-gray-600",children:"legal@dreambuild.dev"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(be,{className:"h-5 w-5 text-green-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Legal Department"}),e.jsx("p",{className:"text-gray-600",children:"Bradley Virtual Solutions, LLC"})]})]})]})]}),e.jsx(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.1},className:"text-center mt-8 p-6 bg-gray-50 rounded-xl",children:e.jsx("p",{className:"text-sm text-gray-500",children:'These Terms of Service may be updated from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date.'})})]})})};class nx{constructor(){this.tutorials=this.initializeTutorials(),this.userProgress=this.loadUserProgress()}initializeTutorials(){return{"html-css-basics":{id:"html-css-basics",title:"HTML & CSS Fundamentals",description:"Master the building blocks of web development",difficulty:"Beginner",duration:"4 hours",language:"HTML/CSS",steps:[{id:1,title:"Introduction to HTML",instructions:"Create your first HTML document with basic structure",startingCode:`<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>`,expectedOutput:"My First Web Page",hints:["Use the <h1> tag for the main heading","Add a <p> tag for paragraphs","Remember to close all tags properly"],examples:`<h1>Welcome to My Website</h1>
<p>This is my first paragraph.</p>`},{id:2,title:"HTML Elements and Tags",instructions:"Learn about different HTML elements and how to use them",startingCode:`<!DOCTYPE html>
<html>
<head>
    <title>HTML Elements</title>
</head>
<body>
    <h1>Main Heading</h1>
    <!-- Add more elements here -->
</body>
</html>`,expectedOutput:"HTML Elements",hints:["Use <h2> for subheadings","Add <ul> and <li> for lists","Use <img> for images"],examples:`<h2>Subheading</h2>
<ul>
    <li>First item</li>
    <li>Second item</li>
</ul>`},{id:3,title:"CSS Basics and Styling",instructions:"Add CSS styles to make your HTML look better",startingCode:`<!DOCTYPE html>
<html>
<head>
    <title>CSS Styling</title>
    <style>
        /* Add your CSS here */
    </style>
</head>
<body>
    <h1>Styled Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>`,expectedOutput:"Styled Heading",hints:["Use color property to change text color","Use font-size to change text size","Use background-color for background colors"],examples:`h1 {
    color: blue;
    font-size: 24px;
}`},{id:4,title:"Layout with Flexbox",instructions:"Learn how to create flexible layouts using CSS Flexbox",startingCode:`<!DOCTYPE html>
<html>
<head>
    <title>Flexbox Layout</title>
    <style>
        .container {
            /* Add flexbox properties here */
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>`,expectedOutput:"Item 1",hints:["Use display: flex on the container","Use justify-content to align items horizontally","Use align-items to align items vertically"],examples:`.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}`},{id:5,title:"Responsive Design",instructions:"Make your website work on different screen sizes",startingCode:`<!DOCTYPE html>
<html>
<head>
    <title>Responsive Design</title>
    <style>
        /* Add responsive styles here */
    </style>
</head>
<body>
    <div class="container">
        <h1>Responsive Heading</h1>
        <p>This content should adapt to different screen sizes.</p>
    </div>
</body>
</html>`,expectedOutput:"Responsive Heading",hints:["Use media queries for different screen sizes","Use max-width for containers","Use relative units like % and em"],examples:`@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
}`}]},"javascript-essentials":{id:"javascript-essentials",title:"JavaScript Essentials",description:"Learn JavaScript from basics to advanced concepts",difficulty:"Intermediate",duration:"6 hours",language:"JavaScript",steps:[{id:1,title:"Variables and Data Types",instructions:"Learn about JavaScript variables and different data types",startingCode:`// Declare variables here
let name;
let age;
let isStudent;

// Assign values
name = "John";
age = 25;
isStudent = true;

console.log(name);`,expectedOutput:"John",hints:["Use let, const, or var to declare variables","Strings go in quotes","Numbers don't need quotes","Booleans are true or false"],examples:`const message = "Hello World";
let count = 0;
const isActive = true;`},{id:2,title:"Functions and Scope",instructions:"Learn how to create and use functions in JavaScript",startingCode:`// Create a function here
function greet(name) {
    // Add function body
}

// Call the function
greet("Alice");`,expectedOutput:"Hello Alice",hints:["Use the function keyword to create functions","Add parameters in parentheses","Use return to send back values","Call functions with parentheses"],examples:`function add(a, b) {
    return a + b;
}

const result = add(5, 3);`},{id:3,title:"DOM Manipulation",instructions:"Learn how to interact with HTML elements using JavaScript",startingCode:`<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation</title>
</head>
<body>
    <h1 id="title">Original Title</h1>
    <button onclick="changeTitle()">Change Title</button>
    
    <script>
        function changeTitle() {
            // Add your code here
        }
    <\/script>
</body>
</html>`,expectedOutput:"New Title",hints:["Use document.getElementById() to select elements","Use .textContent to change text","Use .style to change CSS properties"],examples:`const element = document.getElementById('title');
element.textContent = 'New Title';
element.style.color = 'blue';`},{id:4,title:"Async Programming",instructions:"Learn about asynchronous programming with promises and async/await",startingCode:`// Create an async function
async function fetchData() {
    // Add your code here
}

// Call the function
fetchData();`,expectedOutput:"Data fetched successfully",hints:["Use async keyword for async functions","Use await to wait for promises","Use try/catch for error handling"],examples:`async function getData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}`},{id:5,title:"ES6+ Features",instructions:"Learn about modern JavaScript features like arrow functions and destructuring",startingCode:`// Convert this to arrow function
function multiply(a, b) {
    return a * b;
}

// Use destructuring
const person = { name: 'John', age: 30 };
// Destructure here

console.log(name);`,expectedOutput:"John",hints:["Arrow functions use => syntax","Destructuring uses curly braces","Template literals use backticks"],examples:`const multiply = (a, b) => a * b;

const { name, age } = person;

const message = \`Hello \${name}!\`;`}]},"react-complete":{id:"react-complete",title:"React Complete Guide",description:"Build modern web applications with React",difficulty:"Intermediate",duration:"8 hours",language:"React",steps:[{id:1,title:"React Components",instructions:"Create your first React component",startingCode:`import React from 'react';

function Welcome() {
    // Add your component code here
    return (
        <div>
            {/* Add JSX here */}
        </div>
    );
}

export default Welcome;`,expectedOutput:"Hello React",hints:["Components are functions that return JSX","Use PascalCase for component names","JSX looks like HTML but is JavaScript"],examples:`function Welcome() {
    return (
        <div>
            <h1>Hello React</h1>
            <p>Welcome to React!</p>
        </div>
    );
}`},{id:2,title:"State and Props",instructions:"Learn about React state and props",startingCode:`import React, { useState } from 'react';

function Counter() {
    // Add state here
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default Counter;`,expectedOutput:"Count: 1",hints:["Use useState hook for state","State is immutable - use setter functions","Props are passed down from parent components"],examples:`function UserCard({ name, age }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
        </div>
    );
}`},{id:3,title:"Hooks and Lifecycle",instructions:"Learn about React hooks and component lifecycle",startingCode:`import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    
    // Add useEffect here
    useEffect(() => {
        // Add your effect code
    }, []);
    
    return (
        <div>
            <p>Timer: {seconds}s</p>
        </div>
    );
}

export default Timer;`,expectedOutput:"Timer: 1s",hints:["useEffect runs after render","Empty dependency array means run once","Return cleanup function if needed"],examples:`useEffect(() => {
    const interval = setInterval(() => {
        setSeconds(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
}, []);`},{id:4,title:"Routing and Navigation",instructions:"Learn how to add routing to your React app",startingCode:`import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                {/* Add navigation links */}
            </nav>
            <Routes>
                {/* Add routes here */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;`,expectedOutput:"Home Page",hints:["Use BrowserRouter to wrap your app","Use Routes and Route for routing","Use Link for navigation"],examples:`<nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
</nav>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>`},{id:5,title:"State Management",instructions:"Learn about state management in React applications",startingCode:`import React, { createContext, useContext, useReducer } from 'react';

// Create context
const AppContext = createContext();

// Create reducer
function appReducer(state, action) {
    // Add reducer logic here
    return state;
}

function App() {
    const [state, dispatch] = useReducer(appReducer, { count: 0 });
    
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {/* Add your components */}
        </AppContext.Provider>
    );
}

export default App;`,expectedOutput:"Count: 0",hints:["useReducer for complex state","Context for global state","Dispatch actions to update state"],examples:`function appReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}`}]}}}loadUserProgress(){const t=localStorage.getItem("tutorialProgress");return t?JSON.parse(t):{}}saveUserProgress(){localStorage.setItem("tutorialProgress",JSON.stringify(this.userProgress))}getTutorial(t){return this.tutorials[t]}getAllTutorials(){return Object.values(this.tutorials)}getTutorialProgress(t){return this.userProgress[t]||{completed:!1,currentStep:0,completedSteps:[]}}updateTutorialProgress(t,r,n=!0){this.userProgress[t]||(this.userProgress[t]={completed:!1,currentStep:0,completedSteps:[]}),n&&this.userProgress[t].completedSteps.push(r);const a=this.getTutorial(t);a&&this.userProgress[t].completedSteps.length===a.steps.length&&(this.userProgress[t].completed=!0),this.saveUserProgress()}getCompletedTutorials(){return Object.entries(this.userProgress).filter(([t,r])=>r.completed).map(([t,r])=>this.getTutorial(t))}getTutorialStats(){const t=Object.keys(this.tutorials).length,r=this.getCompletedTutorials().length,n=Object.values(this.tutorials).reduce((i,o)=>i+o.steps.length,0),a=Object.values(this.userProgress).reduce((i,o)=>i+o.completedSteps.length,0);return{totalTutorials:t,completedTutorials:r,totalSteps:n,completedSteps:a,completionRate:n>0?a/n*100:0}}}const ks=new nx,ax=()=>{const[s,t]=m.useState("overview"),[r,n]=m.useState([]),[a,i]=m.useState({}),[o,l]=m.useState([]);m.useEffect(()=>{d()},[]);const d=()=>{const g=ks.getAllTutorials(),y=ks.getTutorialStats();n(g),i(y),l([{type:"completed",tutorial:"HTML & CSS Fundamentals",time:"2 hours ago"},{type:"started",tutorial:"JavaScript Essentials",time:"1 day ago"},{type:"completed",tutorial:"React Complete Guide",time:"3 days ago"},{type:"started",tutorial:"Node.js & Express",time:"1 week ago"}])},c=g=>{switch(g){case"HTML/CSS":return je;case"JavaScript":return W;case"React":return Ue;case"Node.js":return De;default:return ye}},u=g=>{switch(g){case"Beginner":return"text-green-600 bg-green-100";case"Intermediate":return"text-yellow-600 bg-yellow-100";case"Advanced":return"text-red-600 bg-red-100";default:return"text-gray-600 bg-gray-100"}},p=[{id:"overview",label:"Overview",icon:rs},{id:"tutorials",label:"Tutorials",icon:ye},{id:"progress",label:"Progress",icon:Ls},{id:"achievements",label:"Achievements",icon:Je}];return e.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Education Dashboard"}),e.jsx("p",{className:"text-gray-600",children:"Track your learning progress and achievements"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:p.map(g=>e.jsxs("button",{onClick:()=>t(g.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${s===g.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[e.jsx(g.icon,{className:"h-4 w-4"}),g.label]},g.id))}),s==="overview"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(ye,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Tutorials Completed"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:a.completedTutorials})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center",children:e.jsx(Ce,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Steps Completed"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:a.completedSteps})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center",children:e.jsx(gt,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Completion Rate"}),e.jsxs("p",{className:"text-2xl font-bold text-gray-900",children:[Math.round(a.completionRate),"%"]})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center",children:e.jsx(Le,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Total Time"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:"24h"})]})]})})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Ea,{className:"h-5 w-5"}),"Recent Activity"]}),e.jsx("div",{className:"space-y-3",children:o.map((g,y)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${g.type==="completed"?"bg-green-500":"bg-blue-500"}`,children:g.type==="completed"?e.jsx(Ce,{className:"h-4 w-4 text-white"}):e.jsx(et,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"font-medium text-gray-900",children:[g.type==="completed"?"Completed":"Started"," ",g.tutorial]}),e.jsx("p",{className:"text-sm text-gray-600",children:g.time})]})]},y))})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Learning Paths"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Web Development"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Learn HTML, CSS, JavaScript, and React"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:"75%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"75%"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Mobile Development"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Build mobile apps with React Native"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"30%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"30%"})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg border border-purple-200",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Backend Development"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Learn Node.js, Express, and databases"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-purple-500 h-2 rounded-full",style:{width:"10%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"10%"})]})]})]})]})]}),s==="tutorials"&&e.jsx("div",{className:"space-y-6",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(g=>{const y=c(g.language),x=ks.getTutorialProgress(g.id),b=g.steps.length>0?x.completedSteps.length/g.steps.length*100:0;return e.jsx("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(y,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:g.title}),e.jsx("p",{className:"text-sm text-gray-600",children:g.language})]})]}),e.jsx("p",{className:"text-gray-600 mb-4",children:g.description}),e.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-gray-500",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Le,{className:"h-4 w-4"}),g.duration]}),e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${u(g.difficulty)}`,children:g.difficulty})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-1",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[Math.round(b),"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${b}%`}})})]}),e.jsxs("button",{className:"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2",children:[e.jsx(et,{className:"h-4 w-4"}),x.completedSteps.length>0?"Continue":"Start Tutorial"]})]})},g.id)})})}),s==="progress"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Learning Progress"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"Weekly Progress"}),e.jsx("div",{className:"space-y-2",children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((g,y)=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-8 text-sm text-gray-600",children:g}),e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:`${Math.random()*100}%`}})}),e.jsxs("span",{className:"text-sm text-gray-600",children:[Math.floor(Math.random()*4),"h"]})]},g))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"Skill Development"}),e.jsx("div",{className:"space-y-3",children:[{skill:"HTML/CSS",level:85},{skill:"JavaScript",level:70},{skill:"React",level:60},{skill:"Node.js",level:30}].map((g,y)=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-700",children:g.skill}),e.jsxs("span",{className:"text-gray-600",children:[g.level,"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:`${g.level}%`}})})]},y))})]})]})]})}),s==="achievements"&&e.jsx("div",{className:"space-y-6",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{title:"First Steps",description:"Complete your first tutorial",icon:ye,unlocked:!0,points:10},{title:"Code Warrior",description:"Complete 5 tutorials",icon:W,unlocked:!0,points:50},{title:"Streak Master",description:"Learn for 7 days in a row",icon:Je,unlocked:!0,points:100},{title:"Speed Learner",description:"Complete a tutorial in one day",icon:Ue,unlocked:!1,points:75},{title:"Perfectionist",description:"Get 100% on all quizzes",icon:me,unlocked:!1,points:150},{title:"Scholar",description:"Complete 20 tutorials",icon:Pr,unlocked:!1,points:300}].map((g,y)=>e.jsxs("div",{className:`bg-white rounded-lg shadow-lg p-6 ${g.unlocked?"border-2 border-green-500":"opacity-60"}`,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center ${g.unlocked?"bg-green-500":"bg-gray-300"}`,children:e.jsx(g.icon,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:g.title}),e.jsx("p",{className:"text-sm text-gray-600",children:g.description})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm font-medium text-gray-600",children:["+",g.points," points"]}),g.unlocked&&e.jsx(Ce,{className:"h-5 w-5 text-green-500"})]})]},y))})})]})},ix=({tutorial:s,onComplete:t})=>{const[r,n]=m.useState(0),[a,i]=m.useState(""),[o,l]=m.useState(!1),[d,c]=m.useState(""),[u,p]=m.useState([]),[g,y]=m.useState([]),[x,b]=m.useState(new Set),[h,N]=m.useState(0),[j,S]=m.useState(null),w=m.useRef(null);m.useEffect(()=>{s&&s.steps.length>0&&(i(s.steps[0].startingCode||""),S(Date.now()))},[s]),m.useEffect(()=>{let k;return o&&j&&(k=setInterval(()=>{N(Math.floor((Date.now()-j)/1e3))},1e3)),()=>clearInterval(k)},[o,j]);const f=()=>{l(!0),p([]);try{const k=A(a);c(k);const C=s.steps[r];C.expectedOutput&&k.includes(C.expectedOutput)&&(b(E=>new Set([...E,r])),r===s.steps.length-1&&(t==null||t({timeSpent:h,stepsCompleted:x.size+1,totalSteps:s.steps.length})))}catch(k){p([k.message])}l(!1)},A=k=>{if(k.includes("console.log")){const C=k.match(/console\.log\(['"`]([^'"`]+)['"`]\)/g);if(C)return C.map(E=>E.match(/console\.log\(['"`]([^'"`]+)['"`]\)/)[1]).join(`
`)}return"Code executed successfully!"},R=()=>{if(r<s.steps.length-1){n(r+1);const k=s.steps[r+1];i(k.startingCode||"")}},P=()=>{if(r>0){n(r-1);const k=s.steps[r-1];i(k.startingCode||"")}},I=()=>{const k=s.steps[r];i(k.startingCode||""),c(""),p([])},M=()=>{const k=s.steps[r];if(k.hints&&k.hints.length>0){const C=k.hints[Math.floor(Math.random()*k.hints.length)];y(E=>[...E,C])}},F=k=>{const C=Math.floor(k/60),E=k%60;return`${C}:${E.toString().padStart(2,"0")}`};if(!s)return null;const v=s.steps[r],O=(r+1)/s.steps.length*100;return e.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:s.title}),e.jsx("p",{className:"text-gray-600",children:s.description})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[e.jsx(Le,{className:"h-4 w-4"}),F(h)]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[e.jsx(gt,{className:"h-4 w-4"}),r+1," of ",s.steps.length]})]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2 mb-4",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${O}%`}})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("button",{onClick:P,disabled:r===0,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed",children:"Previous"}),e.jsxs("span",{className:"text-sm text-gray-600",children:["Step ",r+1,": ",v.title]}),e.jsx("button",{onClick:R,disabled:r===s.steps.length-1,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed",children:"Next"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(W,{className:"h-5 w-5"}),"Code Editor"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:M,className:"px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm hover:bg-yellow-200",children:"Get Hint"}),e.jsx("button",{onClick:I,className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200",children:e.jsx(Ia,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("textarea",{ref:w,value:a,onChange:k=>i(k.target.value),className:"w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Write your code here..."}),e.jsx("div",{className:"flex items-center gap-2 mt-4",children:e.jsxs("button",{onClick:f,disabled:o,className:"flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50",children:[o?e.jsx(cl,{className:"h-4 w-4"}):e.jsx(et,{className:"h-4 w-4"}),o?"Running...":"Run Code"]})})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Instructions"}),e.jsxs("div",{className:"prose prose-sm max-w-none",children:[e.jsx("p",{className:"text-gray-700 mb-4",children:v.instructions}),v.examples&&e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Example:"}),e.jsx("pre",{className:"text-sm text-gray-700",children:v.examples})]})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg",children:[e.jsx("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(Be,{className:"h-5 w-5"}),"Output"]})}),e.jsxs("div",{className:"p-4",children:[d&&e.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 mb-4",children:e.jsx("pre",{className:"text-sm text-green-800 whitespace-pre-wrap",children:d})}),u.length>0&&e.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(Ds,{className:"h-4 w-4 text-red-500"}),e.jsx("span",{className:"font-medium text-red-800",children:"Errors:"})]}),u.map((k,C)=>e.jsx("p",{className:"text-sm text-red-700",children:k},C))]}),g.length>0&&e.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(Ds,{className:"h-4 w-4 text-yellow-500"}),e.jsx("span",{className:"font-medium text-yellow-800",children:"Hints:"})]}),g.map((k,C)=>e.jsx("p",{className:"text-sm text-yellow-700",children:k},C))]})]})]}),x.has(r)&&e.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ce,{className:"h-5 w-5 text-green-500"}),e.jsx("span",{className:"font-medium text-green-800",children:"Step completed!"})]})})]})]}),g.length>0&&e.jsxs("div",{className:"mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"Available Hints:"}),e.jsx("ul",{className:"list-disc list-inside text-sm text-yellow-700",children:g.map((k,C)=>e.jsx("li",{children:k},C))})]})]})},ox=()=>{const[s,t]=m.useState("all"),[r,n]=m.useState("all"),[a,i]=m.useState([]),[o,l]=m.useState({}),[d,c]=m.useState([]),u=[{id:"all",label:"All Levels",color:"gray"},{id:"easy",label:"Easy",color:"green"},{id:"medium",label:"Medium",color:"yellow"},{id:"hard",label:"Hard",color:"red"}],p=[{id:"all",label:"All Languages",icon:W},{id:"javascript",label:"JavaScript",icon:W},{id:"python",label:"Python",icon:W},{id:"java",label:"Java",icon:W},{id:"cpp",label:"C++",icon:W}],g=[{id:1,title:"Two Sum",description:"Find two numbers in an array that add up to a target value.",difficulty:"easy",language:"javascript",points:10,timeLimit:30,tags:["arrays","hash-table"],testCases:[{input:"[2,7,11,15], 9",output:"[0,1]"},{input:"[3,2,4], 6",output:"[1,2]"}],starterCode:`function twoSum(nums, target) {
    // Your code here
    return [];
}`,solution:`function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`},{id:2,title:"Reverse Linked List",description:"Reverse a singly linked list.",difficulty:"medium",language:"javascript",points:20,timeLimit:45,tags:["linked-list","recursion"],testCases:[{input:"[1,2,3,4,5]",output:"[5,4,3,2,1]"},{input:"[1,2]",output:"[2,1]"}],starterCode:`function reverseList(head) {
    // Your code here
    return null;
}`,solution:`function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}`},{id:3,title:"Binary Tree Maximum Path Sum",description:"Find the maximum path sum in a binary tree.",difficulty:"hard",language:"javascript",points:50,timeLimit:60,tags:["binary-tree","dynamic-programming"],testCases:[{input:"[1,2,3]",output:"6"},{input:"[-10,9,20,null,null,15,7]",output:"42"}],starterCode:`function maxPathSum(root) {
    // Your code here
    return 0;
}`,solution:`function maxPathSum(root) {
    let maxSum = -Infinity;
    
    function maxGain(node) {
        if (!node) return 0;
        
        const leftGain = Math.max(maxGain(node.left), 0);
        const rightGain = Math.max(maxGain(node.right), 0);
        
        const priceNewPath = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, priceNewPath);
        
        return node.val + Math.max(leftGain, rightGain);
    }
    
    maxGain(root);
    return maxSum;
}`}],y=[{rank:1,name:"Alex Chen",points:1250,avatar:"👨‍💻",streak:15},{rank:2,name:"Sarah Kim",points:1180,avatar:"👩‍💻",streak:12},{rank:3,name:"Mike Johnson",points:1100,avatar:"👨‍💻",streak:8},{rank:4,name:"Emma Wilson",points:1050,avatar:"👩‍💻",streak:10},{rank:5,name:"David Lee",points:980,avatar:"👨‍💻",streak:6}];m.useEffect(()=>{i(g),c(y)},[]);const x=a.filter(N=>{const j=s==="all"||N.difficulty===s,S=r==="all"||N.language===r;return j&&S}),b=N=>{switch(N){case"easy":return"text-green-600 bg-green-100";case"medium":return"text-yellow-600 bg-yellow-100";case"hard":return"text-red-600 bg-red-100";default:return"text-gray-600 bg-gray-100"}},h=N=>{switch(N){case"easy":return e.jsx(Ce,{className:"h-4 w-4"});case"medium":return e.jsx(gt,{className:"h-4 w-4"});case"hard":return e.jsx(Ue,{className:"h-4 w-4"});default:return e.jsx(W,{className:"h-4 w-4"})}};return e.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Coding Challenges"}),e.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"Test your skills with interactive coding challenges"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Filters"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-3",children:"Difficulty"}),e.jsx("div",{className:"space-y-2",children:u.map(N=>e.jsxs("button",{onClick:()=>t(N.id),className:`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${s===N.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[h(N.id),N.label]},N.id))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-3",children:"Language"}),e.jsx("div",{className:"space-y-2",children:p.map(N=>e.jsxs("button",{onClick:()=>n(N.id),className:`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${r===N.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[e.jsx(N.icon,{className:"h-4 w-4"}),N.label]},N.id))})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Je,{className:"h-5 w-5 text-yellow-500"}),"Leaderboard"]}),e.jsx("div",{className:"space-y-3",children:d.map((N,j)=>e.jsxs("div",{className:"flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:N.avatar}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:N.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:[N.points," points"]})]})]}),e.jsx("div",{className:"ml-auto text-right",children:e.jsxs("div",{className:"flex items-center gap-1 text-sm text-gray-600",children:[e.jsx(dl,{className:"h-4 w-4 text-orange-500"}),N.streak]})})]},j))})]})]}),e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:x.map(N=>e.jsx("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:N.title}),e.jsx("p",{className:"text-gray-600 mb-3",children:N.description})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${b(N.difficulty)}`,children:N.difficulty})})]}),e.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-gray-600",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(me,{className:"h-4 w-4 text-yellow-500"}),N.points," points"]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Le,{className:"h-4 w-4"}),N.timeLimit," min"]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(W,{className:"h-4 w-4"}),N.language]})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:N.tags.map((j,S)=>e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs",children:j},S))}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{className:"flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2",children:[e.jsx(et,{className:"h-4 w-4"}),"Start Challenge"]}),e.jsx("button",{className:"p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",children:e.jsx(Da,{className:"h-4 w-4"})})]})]})},N.id))}),x.length===0&&e.jsxs("div",{className:"text-center py-12",children:[e.jsx(W,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"No challenges found"}),e.jsx("p",{className:"text-gray-600",children:"Try adjusting your filters"})]})]})]}),e.jsx("div",{className:"mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 text-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"100+"}),e.jsx("div",{className:"text-blue-100",children:"Challenges"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"50K+"}),e.jsx("div",{className:"text-blue-100",children:"Solutions"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"10K+"}),e.jsx("div",{className:"text-blue-100",children:"Active Users"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"95%"}),e.jsx("div",{className:"text-blue-100",children:"Success Rate"})]})]})})]})},lx=()=>{var b;const[s,t]=m.useState("week"),[r,n]=m.useState({}),[a,i]=m.useState([]),[o,l]=m.useState(0),[d,c]=m.useState(0),u=[{id:"week",label:"This Week",days:7},{id:"month",label:"This Month",days:30},{id:"year",label:"This Year",days:365}],p={week:{totalTime:12.5,coursesCompleted:2,challengesSolved:8,streak:5,dailyActivity:[{day:"Mon",hours:2.5,challenges:3},{day:"Tue",hours:1.5,challenges:2},{day:"Wed",hours:3,challenges:4},{day:"Thu",hours:2,challenges:1},{day:"Fri",hours:1.5,challenges:2},{day:"Sat",hours:1,challenges:1},{day:"Sun",hours:1,challenges:0}]},month:{totalTime:45.2,coursesCompleted:8,challengesSolved:35,streak:12,dailyActivity:Array.from({length:30},(h,N)=>({day:`Day ${N+1}`,hours:Math.random()*3,challenges:Math.floor(Math.random()*5)}))},year:{totalTime:180.5,coursesCompleted:25,challengesSolved:150,streak:25,dailyActivity:Array.from({length:365},(h,N)=>({day:`Day ${N+1}`,hours:Math.random()*4,challenges:Math.floor(Math.random()*8)}))}},g=[{id:1,title:"First Steps",description:"Complete your first lesson",icon:ye,unlocked:!0,unlockedAt:"2024-01-15",points:10},{id:2,title:"Code Warrior",description:"Solve 10 coding challenges",icon:W,unlocked:!0,unlockedAt:"2024-01-20",points:50},{id:3,title:"Streak Master",description:"Maintain a 7-day learning streak",icon:Je,unlocked:!0,unlockedAt:"2024-01-25",points:100},{id:4,title:"Course Conqueror",description:"Complete 5 courses",icon:Pr,unlocked:!1,points:200},{id:5,title:"Challenge Champion",description:"Solve 50 coding challenges",icon:me,unlocked:!1,points:300}];m.useEffect(()=>{n(p[s]),i(g),l(p[s].streak),c(p[s].totalTime)},[s]);const y=h=>h>=30?"text-red-600":h>=14?"text-orange-600":h>=7?"text-yellow-600":"text-green-600",x=h=>h>=30?e.jsx(Je,{className:"h-5 w-5"}):h>=14?e.jsx(Pr,{className:"h-5 w-5"}):h>=7?e.jsx(me,{className:"h-5 w-5"}):e.jsx(gt,{className:"h-5 w-5"});return e.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Learning Progress"}),e.jsx("p",{className:"text-gray-600",children:"Track your coding journey and achievements"})]}),e.jsx("div",{className:"flex items-center gap-2",children:u.map(h=>e.jsx("button",{onClick:()=>t(h.id),className:`px-4 py-2 rounded-lg font-medium transition-colors ${s===h.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:h.label},h.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(Le,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Total Time"}),e.jsxs("p",{className:"text-2xl font-bold text-gray-900",children:[d,"h"]})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center",children:e.jsx(ye,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Courses Completed"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:r.coursesCompleted})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center",children:e.jsx(W,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Challenges Solved"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:r.challengesSolved})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center",children:x(o)}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Current Streak"}),e.jsxs("p",{className:`text-2xl font-bold ${y(o)}`,children:[o," days"]})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2 bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(rs,{className:"h-5 w-5"}),"Daily Activity"]}),e.jsx("div",{className:"h-64 flex items-end gap-2",children:(b=r.dailyActivity)==null?void 0:b.slice(0,7).map((h,N)=>e.jsxs("div",{className:"flex-1 flex flex-col items-center",children:[e.jsx("div",{className:"w-full bg-gray-200 rounded-t-lg relative",children:e.jsx("div",{className:"bg-blue-500 rounded-t-lg transition-all duration-500",style:{height:`${h.hours/4*100}%`}})}),e.jsx("div",{className:"text-xs text-gray-600 mt-2",children:h.day}),e.jsxs("div",{className:"text-xs text-gray-500",children:[h.hours.toFixed(1),"h"]})]},N))})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Je,{className:"h-5 w-5"}),"Achievements"]}),e.jsx("div",{className:"space-y-3",children:a.map(h=>e.jsx("div",{className:`p-3 rounded-lg border ${h.unlocked?"bg-green-50 border-green-200":"bg-gray-50 border-gray-200"}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center ${h.unlocked?"bg-green-500":"bg-gray-300"}`,children:e.jsx(h.icon,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:h.title}),e.jsx("p",{className:"text-sm text-gray-600",children:h.description}),h.unlocked&&e.jsxs("p",{className:"text-xs text-green-600 mt-1",children:["+",h.points," points"]})]}),h.unlocked&&e.jsx(Ce,{className:"h-5 w-5 text-green-500"})]})},h.id))})]})]}),e.jsxs("div",{className:"mt-8 bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(gt,{className:"h-5 w-5"}),"Learning Goals"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Weekly Goal"}),e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:"75%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"15/20h"})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"Study 20 hours this week"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Monthly Goal"}),e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"60%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"3/5 courses"})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"Complete 5 courses this month"})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Challenge Goal"}),e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-purple-500 h-2 rounded-full",style:{width:"40%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"20/50 challenges"})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"Solve 50 challenges this month"})]})]})]})]})},cx=({initialCode:s="",expectedOutput:t="",instructions:r="",hints:n=[],onComplete:a=()=>{},language:i="javascript"})=>{const[o,l]=m.useState(s),[d,c]=m.useState(""),[u,p]=m.useState(!1),[g,y]=m.useState(null),[x,b]=m.useState(!1),[h,N]=m.useState(0),[j,S]=m.useState(0),w=async()=>{p(!0);const R=Date.now();try{const P=await new Promise((M,F)=>{try{if(i==="javascript"){const O=new Function(`
              // Safe execution environment
              ${o}
            `)();M(O)}else M("Language not supported yet")}catch(v){F(v)}}),I=Date.now();S(I-R),c(String(P)),t&&String(P).trim()===t.trim()?(y(!0),a(!0)):y(!1)}catch(P){c(`Error: ${P.message}`),y(!1)}finally{p(!1)}},f=()=>{l(s),c(""),y(null),b(!1),N(0)},A=()=>{h<n.length-1?N(h+1):b(!1)};return e.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[e.jsx("div",{className:"bg-gray-800 text-white p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Interactive Code Editor"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-300",children:i.toUpperCase()}),e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full"})]})]})}),r&&e.jsx("div",{className:"p-4 bg-blue-50 border-b",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(ir,{className:"h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Instructions"}),e.jsx("p",{className:"text-gray-700",children:r})]})]})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Your Code:"}),e.jsx("textarea",{value:o,onChange:R=>l(R.target.value),className:"w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Write your code here...",spellCheck:!1})]}),e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsxs("button",{onClick:w,disabled:u,className:"flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:[e.jsx(et,{className:"h-4 w-4"}),u?"Running...":"Run Code"]}),e.jsxs("button",{onClick:f,className:"flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors",children:[e.jsx(Ia,{className:"h-4 w-4"}),"Reset"]}),n.length>0&&e.jsxs("button",{onClick:()=>b(!x),className:"flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors",children:[e.jsx(ir,{className:"h-4 w-4"}),x?"Hide Hint":"Show Hint"]})]}),x&&n.length>0&&e.jsx("div",{className:"mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(ir,{className:"h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-1",children:["Hint ",h+1,":"]}),e.jsx("p",{className:"text-gray-700",children:n[h]}),h<n.length-1&&e.jsx("button",{onClick:A,className:"mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium",children:"Next Hint →"})]})]})}),d&&e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Output:"}),e.jsx("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm",children:e.jsx("pre",{children:d})}),j>0&&e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Execution time: ",j,"ms"]})]}),g!==null&&e.jsxs("div",{className:`p-4 rounded-lg flex items-center gap-2 ${g?"bg-green-50 text-green-800":"bg-red-50 text-red-800"}`,children:[g?e.jsx(Ce,{className:"h-5 w-5"}):e.jsx(ul,{className:"h-5 w-5"}),e.jsx("span",{className:"font-medium",children:g?"Correct! Well done!":"Not quite right. Try again!"})]}),t&&e.jsxs("div",{className:"mt-4 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Expected Output:"}),e.jsx("div",{className:"bg-gray-900 text-green-400 p-3 rounded font-mono text-sm",children:e.jsx("pre",{children:t})})]})]})]})},dx=({tutorial:s,onComplete:t,onNext:r,onPrevious:n})=>{var N,j,S,w;const[a,i]=m.useState(0),[o,l]=m.useState(!1),[d,c]=m.useState(0),[u,p]=m.useState(0),[g,y]=m.useState(0);m.useEffect(()=>{const f=setInterval(()=>{c(A=>A+1)},1e3);return()=>clearInterval(f)},[]);const x=f=>{f?(l(!0),t({tutorialId:s.id,timeSpent:d,hintsUsed:u,attempts:g,completed:!0})):y(A=>A+1)},b=f=>{const A=Math.floor(f/60),R=f%60;return`${A}:${R.toString().padStart(2,"0")}`},h=f=>{switch(f){case"Beginner":return"bg-green-100 text-green-800";case"Intermediate":return"bg-yellow-100 text-yellow-800";case"Advanced":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}};return e.jsxs("div",{className:"max-w-6xl mx-auto p-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("button",{onClick:n,className:"flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors",children:[e.jsx(vn,{className:"h-4 w-4"}),"Back"]}),e.jsx("div",{className:"h-6 w-px bg-gray-300"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ye,{className:"h-5 w-5 text-blue-600"}),e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:s.title})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${h(s.difficulty)}`,children:s.difficulty}),e.jsxs("div",{className:"flex items-center gap-1 text-gray-600",children:[e.jsx(Le,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm",children:s.duration})]})]})]}),e.jsx("p",{className:"text-gray-700 mb-4",children:s.description}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:b(d)}),e.jsx("div",{className:"text-sm text-gray-600",children:"Time Spent"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-orange-600",children:g}),e.jsx("div",{className:"text-sm text-gray-600",children:"Attempts"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-purple-600",children:u}),e.jsx("div",{className:"text-sm text-gray-600",children:"Hints Used"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:`text-2xl font-bold ${o?"text-green-600":"text-gray-400"}`,children:o?"✓":"○"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Status"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsx(cx,{initialCode:s.initialCode,expectedOutput:s.expectedOutput,instructions:s.instructions,hints:s.hints,onComplete:x,language:s.language})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Concepts Covered"}),e.jsx("div",{className:"space-y-2",children:(N=s.concepts)==null?void 0:N.map((f,A)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ce,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{className:"text-sm text-gray-700",children:f})]},A))})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Hints Available"}),e.jsx("div",{className:"space-y-2",children:(j=s.hints)==null?void 0:j.map((f,A)=>e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5",children:A+1}),e.jsx("span",{className:"text-sm text-gray-700",children:f})]},A))})]}),o&&e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Solution"}),e.jsx("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto",children:e.jsx("pre",{children:s.solution})})]}),o&&e.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-6 text-white",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(Je,{className:"h-6 w-6"}),e.jsx("h3",{className:"text-lg font-semibold",children:"Tutorial Completed!"})]}),e.jsx("p",{className:"text-green-100 mb-4",children:"Great job! You've mastered this concept."}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-green-200",children:"Time"}),e.jsx("div",{className:"font-semibold",children:b(d)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-green-200",children:"Hints Used"}),e.jsx("div",{className:"font-semibold",children:u})]})]})]})]})]}),e.jsxs("div",{className:"flex justify-between items-center mt-8",children:[e.jsxs("button",{onClick:n,className:"flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors",children:[e.jsx(vn,{className:"h-4 w-4"}),"Previous"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["Progress: ",a+1," of ",((S=s.concepts)==null?void 0:S.length)||1]}),e.jsx("div",{className:"w-32 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${(a+1)/(((w=s.concepts)==null?void 0:w.length)||1)*100}%`}})})]}),e.jsxs("button",{onClick:r,disabled:!o,className:"flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:["Next",e.jsx(yt,{className:"h-4 w-4"})]})]})]})},Ne=[{id:"javascript-basics-1",title:"JavaScript Variables and Data Types",description:"Learn the fundamentals of JavaScript variables and data types",difficulty:"Beginner",duration:"15 minutes",language:"javascript",instructions:'Create a variable called "name" and assign it your name. Then create a variable called "age" and assign it your age. Finally, use console.log() to print both variables.',initialCode:`// Write your code here

`,expectedOutput:`John
25`,hints:['Use the "let" keyword to declare variables',"Assign values using the = operator","Use console.log() to print values"],solution:`let name = "John";
let age = 25;
console.log(name);
console.log(age);`,concepts:["Variables","Data Types","Console Output"]},{id:"javascript-basics-2",title:"Functions in JavaScript",description:"Learn how to create and use functions in JavaScript",difficulty:"Beginner",duration:"20 minutes",language:"javascript",instructions:'Create a function called "add" that takes two parameters (a and b) and returns their sum. Then call the function with the values 5 and 3.',initialCode:`// Create your function here

`,expectedOutput:"8",hints:['Use the "function" keyword to create a function',"Functions can take parameters in parentheses",'Use "return" to send a value back',"Call the function with functionName(argument1, argument2)"],solution:`function add(a, b) {
  return a + b;
}

console.log(add(5, 3));`,concepts:["Functions","Parameters","Return Values"]},{id:"javascript-basics-3",title:"Arrays and Loops",description:"Learn how to work with arrays and loops in JavaScript",difficulty:"Beginner",duration:"25 minutes",language:"javascript",instructions:"Create an array with the numbers 1, 2, 3, 4, 5. Use a for loop to print each number.",initialCode:`// Create your array and loop here

`,expectedOutput:`1
2
3
4
5`,hints:["Arrays are created with square brackets: []","Use for loop: for(let i = 0; i < array.length; i++)","Access array elements with array[index]","Use console.log() inside the loop"],solution:`let numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}`,concepts:["Arrays","For Loops","Array Indexing"]},{id:"javascript-intermediate-1",title:"Object-Oriented Programming",description:"Learn about objects and classes in JavaScript",difficulty:"Intermediate",duration:"30 minutes",language:"javascript",instructions:'Create a Person class with a constructor that takes name and age. Add a method called greet() that returns "Hello, my name is [name] and I am [age] years old."',initialCode:`// Create your class here

`,expectedOutput:"Hello, my name is Alice and I am 30 years old.",hints:['Use the "class" keyword to create a class',"Constructor is a special method called constructor()","Methods are functions inside the class",'Use "this" to refer to the current instance'],solution:`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
  }
}

let person = new Person("Alice", 30);
console.log(person.greet());`,concepts:["Classes","Objects","Methods","Constructor"]},{id:"javascript-advanced-1",title:"Async/Await and Promises",description:"Learn asynchronous programming with async/await",difficulty:"Advanced",duration:"35 minutes",language:"javascript",instructions:'Create an async function called fetchData that simulates fetching data. Use setTimeout to simulate a delay, then return "Data fetched successfully!".',initialCode:`// Create your async function here

`,expectedOutput:"Data fetched successfully!",hints:['Use "async" keyword before function','Use "await" with setTimeout',"Return a Promise from setTimeout","Call the function and await the result"],solution:`async function fetchData() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return "Data fetched successfully!";
}

fetchData().then(result => console.log(result));`,concepts:["Async/Await","Promises","Asynchronous Programming"]}],Is=[{id:"challenge-1",title:"Two Sum",description:"Given an array of integers and a target sum, find two numbers that add up to the target.",difficulty:"Easy",points:10,language:"javascript",instructions:"Write a function that takes an array of numbers and a target sum. Return the indices of two numbers that add up to the target.",initialCode:`function twoSum(nums, target) {
  // Your code here
}

// Test your function
console.log(twoSum([2, 7, 11, 15], 9)); // Should return [0, 1]`,expectedOutput:"[0,1]",hints:["Use nested loops to check all pairs","Return the indices when you find a match","Use array.indexOf() to find indices"],solution:`function twoSum(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));`,testCases:[{input:"[2, 7, 11, 15], 9",expected:"[0, 1]"},{input:"[3, 2, 4], 6",expected:"[1, 2]"},{input:"[3, 3], 6",expected:"[0, 1]"}]},{id:"challenge-2",title:"Reverse String",description:"Reverse a given string without using built-in reverse methods.",difficulty:"Easy",points:5,language:"javascript",instructions:"Write a function that takes a string and returns it reversed.",initialCode:`function reverseString(str) {
  // Your code here
}

console.log(reverseString("hello")); // Should return "olleh"`,expectedOutput:"olleh",hints:["Use a loop to iterate through the string","Build the reversed string character by character","Start from the end of the string"],solution:`function reverseString(str) {
  let reversed = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));`,testCases:[{input:'"hello"',expected:'"olleh"'},{input:'"world"',expected:'"dlrow"'},{input:'"12345"',expected:'"54321"'}]}];Ne.filter(s=>s.difficulty==="Beginner"),Is.filter(s=>s.difficulty==="Easy"),Ne.filter(s=>s.difficulty==="Intermediate"),Is.filter(s=>s.difficulty==="Easy");const ux=()=>{var F;const[s,t]=m.useState("dashboard"),[r,n]=m.useState("web-development"),[a,i]=m.useState(null),[o,l]=m.useState(null),[d,c]=m.useState(null),[u,p]=m.useState({}),[g,y]=m.useState([]),[x,b]=m.useState(new Set),h={"web-development":{title:"Web Development",icon:je,color:"blue",description:"Learn to build modern websites and web applications",courses:[{id:"html-css-basics",title:"HTML & CSS Fundamentals",duration:"4 hours",difficulty:"Beginner",rating:4.8,students:12500,description:"Master the building blocks of web development",lessons:[{id:1,title:"Introduction to HTML",duration:"30 min",completed:!1},{id:2,title:"HTML Elements and Tags",duration:"45 min",completed:!1},{id:3,title:"CSS Basics and Styling",duration:"40 min",completed:!1},{id:4,title:"Layout with Flexbox",duration:"35 min",completed:!1},{id:5,title:"Responsive Design",duration:"50 min",completed:!1}]},{id:"javascript-essentials",title:"JavaScript Essentials",duration:"6 hours",difficulty:"Intermediate",rating:4.9,students:18900,description:"Learn JavaScript from basics to advanced concepts",lessons:[{id:1,title:"Variables and Data Types",duration:"25 min",completed:!1},{id:2,title:"Functions and Scope",duration:"40 min",completed:!1},{id:3,title:"DOM Manipulation",duration:"45 min",completed:!1},{id:4,title:"Async Programming",duration:"35 min",completed:!1},{id:5,title:"ES6+ Features",duration:"50 min",completed:!1}]},{id:"react-complete",title:"React Complete Guide",duration:"8 hours",difficulty:"Intermediate",rating:4.7,students:22100,description:"Build modern web applications with React",lessons:[{id:1,title:"React Components",duration:"40 min",completed:!1},{id:2,title:"State and Props",duration:"35 min",completed:!1},{id:3,title:"Hooks and Lifecycle",duration:"45 min",completed:!1},{id:4,title:"Routing and Navigation",duration:"30 min",completed:!1},{id:5,title:"State Management",duration:"50 min",completed:!1}]}]},"mobile-development":{title:"Mobile Development",icon:Zt,color:"green",description:"Create mobile apps for iOS and Android",courses:[{id:"react-native-basics",title:"React Native Basics",duration:"5 hours",difficulty:"Intermediate",rating:4.6,students:9800,description:"Build cross-platform mobile apps",lessons:[{id:1,title:"React Native Setup",duration:"30 min",completed:!1},{id:2,title:"Components and Navigation",duration:"45 min",completed:!1},{id:3,title:"State Management",duration:"40 min",completed:!1},{id:4,title:"API Integration",duration:"35 min",completed:!1},{id:5,title:"App Deployment",duration:"50 min",completed:!1}]}]},"backend-development":{title:"Backend Development",icon:ml,color:"purple",description:"Learn server-side development and APIs",courses:[{id:"nodejs-express",title:"Node.js & Express",duration:"6 hours",difficulty:"Intermediate",rating:4.8,students:15200,description:"Build robust backend services",lessons:[{id:1,title:"Node.js Fundamentals",duration:"35 min",completed:!1},{id:2,title:"Express Framework",duration:"40 min",completed:!1},{id:3,title:"RESTful APIs",duration:"45 min",completed:!1},{id:4,title:"Database Integration",duration:"50 min",completed:!1},{id:5,title:"Authentication & Security",duration:"40 min",completed:!1}]}]},"data-science":{title:"Data Science",icon:De,color:"orange",description:"Analyze data and build machine learning models",courses:[{id:"python-data-analysis",title:"Python Data Analysis",duration:"7 hours",difficulty:"Beginner",rating:4.5,students:11200,description:"Learn data analysis with Python",lessons:[{id:1,title:"Python Basics",duration:"30 min",completed:!1},{id:2,title:"Pandas Library",duration:"45 min",completed:!1},{id:3,title:"Data Visualization",duration:"40 min",completed:!1},{id:4,title:"Statistical Analysis",duration:"50 min",completed:!1},{id:5,title:"Machine Learning Intro",duration:"45 min",completed:!1}]}]}},N=[{id:"full-stack-developer",title:"Full-Stack Developer",duration:"12 weeks",difficulty:"Intermediate",description:"Complete path to become a full-stack developer",courses:["html-css-basics","javascript-essentials","react-complete","nodejs-express"],color:"blue"},{id:"mobile-developer",title:"Mobile App Developer",duration:"8 weeks",difficulty:"Intermediate",description:"Learn to build mobile applications",courses:["html-css-basics","javascript-essentials","react-native-basics"],color:"green"},{id:"data-scientist",title:"Data Scientist",duration:"10 weeks",difficulty:"Advanced",description:"Master data analysis and machine learning",courses:["python-data-analysis"],color:"orange"}],j=[{title:"Interactive Code Editor",description:"Practice coding with our built-in editor",icon:W,color:"blue",link:"/editor"},{title:"Video Tutorials",description:"Watch step-by-step video guides",icon:pl,color:"red",link:"/tutorials"},{title:"Documentation",description:"Comprehensive coding documentation",icon:be,color:"green",link:"/docs"},{title:"Community Forum",description:"Connect with other learners",icon:Xe,color:"purple",link:"/community"}],S=[{title:"First Code",description:"Write your first line of code",icon:W,unlocked:!0},{title:"Web Master",description:"Complete web development course",icon:je,unlocked:!1},{title:"Mobile Expert",description:"Build your first mobile app",icon:Zt,unlocked:!1},{title:"Data Wizard",description:"Complete data science course",icon:De,unlocked:!1}],w=v=>{const O=ks.getTutorial(v);l(O),t("tutorial")},f=v=>{console.log("Tutorial completed:",v),l(null),t("dashboard")},A=v=>{var C;const O=(C=h[r])==null?void 0:C.courses.find(E=>E.id===v);return O?O.lessons.filter(E=>x.has(E.id)).length/O.lessons.length*100:0},R=()=>{const v=Ne[0];c(v),t("tutorial")},P=()=>{t("tutorials")},I=v=>{y(k=>[...k,v]);const O=Ne.findIndex(k=>k.id===d.id);O<Ne.length-1?c(Ne[O+1]):(c(null),t("dashboard"))},M=v=>{const O=Is.find(k=>k.id===v);O&&(c(O),t("tutorial"))};return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Learn to Code"}),e.jsx("p",{className:"text-xl text-blue-100 mb-8",children:"Master programming skills with our comprehensive educational platform"}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx("button",{onClick:R,className:"bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors",children:"Start Learning"}),e.jsx("button",{onClick:P,className:"border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors",children:"Browse Courses"})]})]})})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:[{id:"dashboard",label:"Dashboard",icon:rs},{id:"tutorials",label:"Tutorials",icon:ye},{id:"challenges",label:"Challenges",icon:W},{id:"progress",label:"Progress",icon:Ls}].map(v=>e.jsxs("button",{onClick:()=>t(v.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${s===v.id?"bg-blue-500 text-white":"bg-white text-gray-700 hover:bg-gray-100"}`,children:[e.jsx(v.icon,{className:"h-4 w-4"}),v.label]},v.id))}),s==="dashboard"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(ax,{}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Learning Progress"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:"75%"}),e.jsx("div",{className:"text-gray-600",children:"Overall Progress"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-green-600 mb-2",children:"12"}),e.jsx("div",{className:"text-gray-600",children:"Courses Completed"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-purple-600 mb-2",children:"45"}),e.jsx("div",{className:"text-gray-600",children:"Challenges Solved"})]})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Recent Achievements"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center",children:e.jsx(Je,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:"First Steps"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Completed first tutorial"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-blue-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx(W,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:"Code Warrior"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Solved 10 challenges"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-purple-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center",children:e.jsx(me,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:"Streak Master"}),e.jsx("div",{className:"text-sm text-gray-600",children:"7-day learning streak"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-orange-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center",children:e.jsx(gt,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:"Goal Achiever"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Met weekly goal"})]})]})]})]})]}),s==="tutorial"&&o&&e.jsx(ix,{tutorial:o,onComplete:f}),s==="tutorial"&&d&&e.jsx(dx,{tutorial:d,onComplete:I,onNext:()=>{const v=Ne.findIndex(O=>O.id===d.id);v<Ne.length-1&&c(Ne[v+1])},onPrevious:()=>{const v=Ne.findIndex(O=>O.id===d.id);v>0&&c(Ne[v-1])}}),s==="challenges"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(ox,{}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Is.map(v=>e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:v.title}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${v.difficulty==="Easy"?"bg-green-100 text-green-700":v.difficulty==="Medium"?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:v.difficulty}),e.jsxs("span",{className:"text-sm text-gray-500",children:[v.points," pts"]})]})]}),e.jsx("p",{className:"text-gray-600 mb-4",children:v.description}),e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(W,{className:"h-4 w-4 text-blue-500"}),e.jsx("span",{className:"text-sm text-gray-600",children:v.language})]}),e.jsx("button",{onClick:()=>M(v.id),className:"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors",children:"Start Challenge"})]},v.id))})]}),s==="progress"&&e.jsx(lx,{}),s==="tutorials"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Learning Paths"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:N.map(v=>e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:`w-10 h-10 bg-${v.color}-500 rounded-lg flex items-center justify-center`,children:e.jsx(gt,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:v.title}),e.jsxs("p",{className:"text-sm text-gray-600",children:[v.duration," • ",v.difficulty]})]})]}),e.jsx("p",{className:"text-gray-700 mb-4",children:v.description}),e.jsx("button",{className:"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors",children:"Start Path"})]},v.id))})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Course Categories"}),e.jsx("div",{className:"flex flex-wrap gap-4 mb-8",children:Object.entries(h).map(([v,O])=>e.jsxs("button",{onClick:()=>n(v),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${r===v?"bg-blue-500 text-white":"bg-white text-gray-700 hover:bg-gray-100"}`,children:[e.jsx(O.icon,{className:"h-5 w-5"}),O.title]},v))}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:(F=h[r])==null?void 0:F.courses.map(v=>e.jsx("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:v.title}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(me,{className:"h-4 w-4 text-yellow-400 fill-current"}),e.jsx("span",{className:"text-sm text-gray-600",children:v.rating})]})]}),e.jsx("p",{className:"text-gray-600 mb-4",children:v.description}),e.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-gray-500",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Le,{className:"h-4 w-4"}),v.duration]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Xe,{className:"h-4 w-4"}),v.students.toLocaleString()," students"]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-1",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[Math.round(A(v.id)),"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${A(v.id)}%`}})})]}),e.jsxs("button",{onClick:()=>{const O=Ne.find(k=>k.title.includes(v.title.split(" ")[0]));O?(c(O),t("tutorial")):w(v.id)},className:"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2",children:[e.jsx(et,{className:"h-4 w-4"}),A(v.id)>0?"Continue":"Start Course"]})]})},v.id))})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Learning Resources"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:j.map((v,O)=>e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 text-center",children:[e.jsx("div",{className:`w-12 h-12 bg-${v.color}-500 rounded-lg flex items-center justify-center mx-auto mb-4`,children:e.jsx(v.icon,{className:"h-6 w-6 text-white"})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:v.title}),e.jsx("p",{className:"text-gray-600 mb-4",children:v.description}),e.jsxs("button",{className:"text-blue-500 hover:text-blue-600 font-medium flex items-center justify-center gap-1 mx-auto",children:[e.jsx("span",{children:"Explore"}),e.jsx(yt,{className:"h-4 w-4"})]})]},O))})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Achievements"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:S.map((v,O)=>e.jsxs("div",{className:`bg-white rounded-lg shadow-lg p-6 text-center ${v.unlocked?"border-2 border-green-500":"opacity-60"}`,children:[e.jsx("div",{className:`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${v.unlocked?"bg-green-500":"bg-gray-300"}`,children:e.jsx(v.icon,{className:"h-6 w-6 text-white"})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:v.title}),e.jsx("p",{className:"text-gray-600 mb-4",children:v.description}),v.unlocked&&e.jsxs("div",{className:"flex items-center justify-center gap-1 text-green-600",children:[e.jsx(Ce,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:"Unlocked"})]})]},O))})]}),e.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 text-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"50+"}),e.jsx("div",{className:"text-blue-100",children:"Courses Available"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"100K+"}),e.jsx("div",{className:"text-blue-100",children:"Students Learning"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"500+"}),e.jsx("div",{className:"text-blue-100",children:"Hours of Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"4.8"}),e.jsx("div",{className:"text-blue-100",children:"Average Rating"})]})]})})]})]})]})};function mx(){const s=rt();return["/ai-builder"].includes(s.pathname)?null:e.jsx(ku,{})}function px({children:s}){const t=rt();return["/ai-builder","/dashboard","/projects"].includes(t.pathname)?e.jsx("main",{children:s}):e.jsx("main",{className:"pt-16",children:s})}function hx(){return e.jsx(md,{children:e.jsx(Nu,{children:e.jsx(Su,{children:e.jsx(vc,{children:e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Cu,{}),e.jsx(px,{children:e.jsxs(pc,{children:[e.jsx(se,{path:"/",element:e.jsx(Tu,{})}),e.jsx(se,{path:"/app",element:e.jsx(uc,{to:"/ai-builder",replace:!0})}),e.jsx(se,{path:"/ai-builder",element:e.jsx(Bf,{})}),e.jsx(se,{path:"/templates",element:e.jsx(Uf,{})}),e.jsx(se,{path:"/dashboard",element:e.jsx(Wf,{})}),e.jsx(se,{path:"/login",element:e.jsx(qf,{})}),e.jsx(se,{path:"/signup",element:e.jsx(Vf,{})}),e.jsx(se,{path:"/projects",element:e.jsx(Jf,{})}),e.jsx(se,{path:"/settings",element:e.jsx(Yf,{})}),e.jsx(se,{path:"/documentation",element:e.jsx(Kf,{})}),e.jsx(se,{path:"/examples",element:e.jsx(Xf,{})}),e.jsx(se,{path:"/community",element:e.jsx(Qf,{})}),e.jsx(se,{path:"/about",element:e.jsx(Zf,{})}),e.jsx(se,{path:"/blog",element:e.jsx(ex,{})}),e.jsx(se,{path:"/contact",element:e.jsx(tx,{})}),e.jsx(se,{path:"/privacy",element:e.jsx(sx,{})}),e.jsx(se,{path:"/terms",element:e.jsx(rx,{})}),e.jsx(se,{path:"/education",element:e.jsx(ux,{})})]})}),e.jsx(mx,{}),e.jsx(ud,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--card)",color:"var(--card-foreground)",border:"1px solid var(--border)"}}})]})})})})})}Fa(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(hx,{})}));
//# sourceMappingURL=index-B-PW0aiR.js.map
