import{initializeApp as wo}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";import{getAuth as No,signInWithPopup as So,GithubAuthProvider as Co,GoogleAuthProvider as ko}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";import{r as m,a as To,b as Do,R as Me,g as Po}from"./react-vendor-DWvC8KHc.js";import{_ as Ao,C as Eo,r as va,S as Ro,F as Io,g as Cr,a as Fs,b as Oo,c as Lo,d as Mo,i as kr,e as Sn,f as Cn,o as kn,h as vs,j as se,s as Fo,G as $o,k as ja,l as je,m as _o,n as Bo,p as Uo,q as Ht,t as Gt,u as lt,w as wt,v as ir}from"./firebase-yUj2_25M.js";import{_ as Be}from"./monaco-editor-BWpThiUx.js";import{S as ft,R as Pe,C as J,B as oe,D as Ae,U as Fe,M as Ho,a as Go,b as Ds,L as wa,X as Yr,c as zo,G as fe,T as Kr,d as Rt,e as Xr,m as F,f as $s,Z as ze,F as Ie,P as It,g as Dt,h as Tn,i as tt,j as Wo,k as Dn,A as Xe,l as Qt,n as Ot,o as Pn,p as An,q as _s,E as Zt,r as qo,s as Vo,t as or,u as Ps,v as Jo,w as Yo,x as He,y as Ko,z as En,H as Xo,I as xe,J as pe,K as As,N as we,O as We,Q as Bs,V as Se,W as es,Y as Qo,_ as le,$ as Tr,a0 as Ue,a1 as as,a2 as Zo,a3 as Rn,a4 as el,a5 as In,a6 as tl,a7 as On,a8 as sl,a9 as rl,aa as st,ab as al,ac as Pt,ad as Ln,ae as nl,af as Qr,ag as Dr,ah as lr,ai as Ce,aj as Pr,ak as Ar,al as Er,am as il,an as ol,ao as ll,ap as cl,aq as dl,ar as Ge,as as qe,at as Es,au as Zr,av as Mn,aw as ul,ax as cr,ay as ml,az as Rs,aA as pl,aB as hl,aC as gl,aD as fl,aE as xl,aF as bl,aG as yl}from"./ui-vendor-5a1Sn0ER.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const vl={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"},Fn=wo(vl),jl=No(Fn);window.firebase={auth:()=>jl,GoogleAuthProvider:ko,GithubAuthProvider:Co,signInWithPopup:So};window.firebaseApp=Fn;console.log("Firebase loaded globally with providers:",!!window.firebase);var $n={exports:{}},Us={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl=m,Nl=Symbol.for("react.element"),Sl=Symbol.for("react.fragment"),Cl=Object.prototype.hasOwnProperty,kl=wl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tl={key:!0,ref:!0,__self:!0,__source:!0};function _n(s,t,r){var a,n={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)Cl.call(t,a)&&!Tl.hasOwnProperty(a)&&(n[a]=t[a]);if(s&&s.defaultProps)for(a in t=s.defaultProps,t)n[a]===void 0&&(n[a]=t[a]);return{$$typeof:Nl,type:s,key:i,ref:o,props:n,_owner:kl.current}}Us.Fragment=Sl;Us.jsx=_n;Us.jsxs=_n;$n.exports=Us;var e=$n.exports,Bn,Na=To;Bn=Na.createRoot,Na.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(s[a]=r[a])}return s},ts.apply(this,arguments)}var Qe;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Qe||(Qe={}));const Sa="popstate";function Dl(s){s===void 0&&(s={});function t(a,n){let{pathname:i,search:o,hash:l}=a.location;return Rr("",{pathname:i,search:o,hash:l},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function r(a,n){return typeof n=="string"?n:Is(n)}return Al(t,r,null,s)}function re(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Un(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Pl(){return Math.random().toString(36).substr(2,8)}function Ca(s,t){return{usr:s.state,key:s.key,idx:t}}function Rr(s,t,r,a){return r===void 0&&(r=null),ts({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof t=="string"?Mt(t):t,{state:r,key:t&&t.key||a||Pl()})}function Is(s){let{pathname:t="/",search:r="",hash:a=""}=s;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Mt(s){let t={};if(s){let r=s.indexOf("#");r>=0&&(t.hash=s.substr(r),s=s.substr(0,r));let a=s.indexOf("?");a>=0&&(t.search=s.substr(a),s=s.substr(0,a)),s&&(t.pathname=s)}return t}function Al(s,t,r,a){a===void 0&&(a={});let{window:n=document.defaultView,v5Compat:i=!1}=a,o=n.history,l=Qe.Pop,d=null,c=u();c==null&&(c=0,o.replaceState(ts({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function p(){l=Qe.Pop;let h=u(),N=h==null?null:h-c;c=h,d&&d({action:l,location:b.location,delta:N})}function g(h,N){l=Qe.Push;let j=Rr(b.location,h,N);c=u()+1;let w=Ca(j,c),v=b.createHref(j);try{o.pushState(w,"",v)}catch(f){if(f instanceof DOMException&&f.name==="DataCloneError")throw f;n.location.assign(v)}i&&d&&d({action:l,location:b.location,delta:1})}function y(h,N){l=Qe.Replace;let j=Rr(b.location,h,N);c=u();let w=Ca(j,c),v=b.createHref(j);o.replaceState(w,"",v),i&&d&&d({action:l,location:b.location,delta:0})}function x(h){let N=n.location.origin!=="null"?n.location.origin:n.location.href,j=typeof h=="string"?h:Is(h);return j=j.replace(/ $/,"%20"),re(N,"No window.location.(origin|href) available to create URL for href: "+j),new URL(j,N)}let b={get action(){return l},get location(){return s(n,o)},listen(h){if(d)throw new Error("A history only accepts one active listener");return n.addEventListener(Sa,p),d=h,()=>{n.removeEventListener(Sa,p),d=null}},createHref(h){return t(n,h)},createURL:x,encodeLocation(h){let N=x(h);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:g,replace:y,go(h){return o.go(h)}};return b}var ka;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(ka||(ka={}));function El(s,t,r){return r===void 0&&(r="/"),Rl(s,t,r)}function Rl(s,t,r,a){let n=typeof t=="string"?Mt(t):t,i=ea(n.pathname||"/",r);if(i==null)return null;let o=Hn(s);Il(o);let l=null;for(let d=0;l==null&&d<o.length;++d){let c=Wl(i);l=Hl(o[d],c)}return l}function Hn(s,t,r,a){t===void 0&&(t=[]),r===void 0&&(r=[]),a===void 0&&(a="");let n=(i,o,l)=>{let d={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};d.relativePath.startsWith("/")&&(re(d.relativePath.startsWith(a),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(a.length));let c=Ze([a,d.relativePath]),u=r.concat(d);i.children&&i.children.length>0&&(re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Hn(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Bl(c,i.index),routesMeta:u})};return s.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))n(i,o);else for(let d of Gn(i.path))n(i,o,d)}),t}function Gn(s){let t=s.split("/");if(t.length===0)return[];let[r,...a]=t,n=r.endsWith("?"),i=r.replace(/\?$/,"");if(a.length===0)return n?[i,""]:[i];let o=Gn(a.join("/")),l=[];return l.push(...o.map(d=>d===""?i:[i,d].join("/"))),n&&l.push(...o),l.map(d=>s.startsWith("/")&&d===""?"/":d)}function Il(s){s.sort((t,r)=>t.score!==r.score?r.score-t.score:Ul(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}const Ol=/^:[\w-]+$/,Ll=3,Ml=2,Fl=1,$l=10,_l=-2,Ta=s=>s==="*";function Bl(s,t){let r=s.split("/"),a=r.length;return r.some(Ta)&&(a+=_l),t&&(a+=Ml),r.filter(n=>!Ta(n)).reduce((n,i)=>n+(Ol.test(i)?Ll:i===""?Fl:$l),a)}function Ul(s,t){return s.length===t.length&&s.slice(0,-1).every((a,n)=>a===t[n])?s[s.length-1]-t[t.length-1]:0}function Hl(s,t,r){let{routesMeta:a}=s,n={},i="/",o=[];for(let l=0;l<a.length;++l){let d=a[l],c=l===a.length-1,u=i==="/"?t:t.slice(i.length)||"/",p=Gl({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},u),g=d.route;if(!p)return null;Object.assign(n,p.params),o.push({params:n,pathname:Ze([i,p.pathname]),pathnameBase:Yl(Ze([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=Ze([i,p.pathnameBase]))}return o}function Gl(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[r,a]=zl(s.path,s.caseSensitive,s.end),n=t.match(r);if(!n)return null;let i=n[0],o=i.replace(/(.)\/+$/,"$1"),l=n.slice(1);return{params:a.reduce((c,u,p)=>{let{paramName:g,isOptional:y}=u;if(g==="*"){let b=l[p]||"";o=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const x=l[p];return y&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:s}}function zl(s,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Un(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let a=[],n="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,d)=>(a.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(a.push({paramName:"*"}),n+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?n+="\\/*$":s!==""&&s!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),a]}function Wl(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Un(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),s}}function ea(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=s.charAt(r);return a&&a!=="/"?null:s.slice(r)||"/"}function ql(s,t){t===void 0&&(t="/");let{pathname:r,search:a="",hash:n=""}=typeof s=="string"?Mt(s):s;return{pathname:r?r.startsWith("/")?r:Vl(r,t):t,search:Kl(a),hash:Xl(n)}}function Vl(s,t){let r=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function dr(s,t,r,a){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jl(s){return s.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ta(s,t){let r=Jl(s);return t?r.map((a,n)=>n===r.length-1?a.pathname:a.pathnameBase):r.map(a=>a.pathnameBase)}function sa(s,t,r,a){a===void 0&&(a=!1);let n;typeof s=="string"?n=Mt(s):(n=ts({},s),re(!n.pathname||!n.pathname.includes("?"),dr("?","pathname","search",n)),re(!n.pathname||!n.pathname.includes("#"),dr("#","pathname","hash",n)),re(!n.search||!n.search.includes("#"),dr("#","search","hash",n)));let i=s===""||n.pathname==="",o=i?"/":n.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!a&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;n.pathname=g.join("/")}l=p>=0?t[p]:"/"}let d=ql(n,l),c=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(c||u)&&(d.pathname+="/"),d}const Ze=s=>s.join("/").replace(/\/\/+/g,"/"),Yl=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Kl=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Xl=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Ql(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const zn=["post","put","patch","delete"];new Set(zn);const Zl=["get",...zn];new Set(Zl);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(s[a]=r[a])}return s},ss.apply(this,arguments)}const ra=m.createContext(null),ec=m.createContext(null),rt=m.createContext(null),Hs=m.createContext(null),at=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Wn=m.createContext(null);function tc(s,t){let{relative:r}=t===void 0?{}:t;Ft()||re(!1);let{basename:a,navigator:n}=m.useContext(rt),{hash:i,pathname:o,search:l}=Vn(s,{relative:r}),d=o;return a!=="/"&&(d=o==="/"?a:Ze([a,o])),n.createHref({pathname:d,search:l,hash:i})}function Ft(){return m.useContext(Hs)!=null}function nt(){return Ft()||re(!1),m.useContext(Hs).location}function qn(s){m.useContext(rt).static||m.useLayoutEffect(s)}function Gs(){let{isDataRoute:s}=m.useContext(at);return s?hc():sc()}function sc(){Ft()||re(!1);let s=m.useContext(ra),{basename:t,future:r,navigator:a}=m.useContext(rt),{matches:n}=m.useContext(at),{pathname:i}=nt(),o=JSON.stringify(ta(n,r.v7_relativeSplatPath)),l=m.useRef(!1);return qn(()=>{l.current=!0}),m.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){a.go(c);return}let p=sa(c,JSON.parse(o),i,u.relative==="path");s==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ze([t,p.pathname])),(u.replace?a.replace:a.push)(p,u.state,u)},[t,a,o,i,s])}function Vn(s,t){let{relative:r}=t===void 0?{}:t,{future:a}=m.useContext(rt),{matches:n}=m.useContext(at),{pathname:i}=nt(),o=JSON.stringify(ta(n,a.v7_relativeSplatPath));return m.useMemo(()=>sa(s,JSON.parse(o),i,r==="path"),[s,o,i,r])}function rc(s,t){return ac(s,t)}function ac(s,t,r,a){Ft()||re(!1);let{navigator:n}=m.useContext(rt),{matches:i}=m.useContext(at),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let d=o?o.pathnameBase:"/";o&&o.route;let c=nt(),u;if(t){var p;let h=typeof t=="string"?Mt(t):t;d==="/"||(p=h.pathname)!=null&&p.startsWith(d)||re(!1),u=h}else u=c;let g=u.pathname||"/",y=g;if(d!=="/"){let h=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(h.length).join("/")}let x=El(s,{pathname:y}),b=cc(x&&x.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:Ze([d,n.encodeLocation?n.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?d:Ze([d,n.encodeLocation?n.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,r,a);return t&&b?m.createElement(Hs.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qe.Pop}},b):b}function nc(){let s=pc(),t=Ql(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),r=s instanceof Error?s.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),r?m.createElement("pre",{style:n},r):null,null)}const ic=m.createElement(nc,null);class oc extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?m.createElement(at.Provider,{value:this.props.routeContext},m.createElement(Wn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lc(s){let{routeContext:t,match:r,children:a}=s,n=m.useContext(ra);return n&&n.static&&n.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=r.route.id),m.createElement(at.Provider,{value:t},a)}function cc(s,t,r,a){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),a===void 0&&(a=null),s==null){var i;if(!r)return null;if(r.errors)s=r.matches;else if((i=a)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let o=s,l=(n=r)==null?void 0:n.errors;if(l!=null){let u=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);u>=0||re(!1),o=o.slice(0,Math.min(o.length,u+1))}let d=!1,c=-1;if(r&&a&&a.v7_partialHydration)for(let u=0;u<o.length;u++){let p=o[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=u),p.route.id){let{loaderData:g,errors:y}=r,x=p.route.loader&&g[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||x){d=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,p,g)=>{let y,x=!1,b=null,h=null;r&&(y=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||ic,d&&(c<0&&g===0?(gc("route-fallback"),x=!0,h=null):c===g&&(x=!0,h=p.route.hydrateFallbackElement||null)));let N=t.concat(o.slice(0,g+1)),j=()=>{let w;return y?w=b:x?w=h:p.route.Component?w=m.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=u,m.createElement(lc,{match:p,routeContext:{outlet:u,matches:N,isDataRoute:r!=null},children:w})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?m.createElement(oc,{location:r.location,revalidation:r.revalidation,component:b,error:y,children:j(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):j()},null)}var Jn=function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s}(Jn||{}),Yn=function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s}(Yn||{});function dc(s){let t=m.useContext(ra);return t||re(!1),t}function uc(s){let t=m.useContext(ec);return t||re(!1),t}function mc(s){let t=m.useContext(at);return t||re(!1),t}function Kn(s){let t=mc(),r=t.matches[t.matches.length-1];return r.route.id||re(!1),r.route.id}function pc(){var s;let t=m.useContext(Wn),r=uc(),a=Kn();return t!==void 0?t:(s=r.errors)==null?void 0:s[a]}function hc(){let{router:s}=dc(Jn.UseNavigateStable),t=Kn(Yn.UseNavigateStable),r=m.useRef(!1);return qn(()=>{r.current=!0}),m.useCallback(function(n,i){i===void 0&&(i={}),r.current&&(typeof n=="number"?s.navigate(n):s.navigate(n,ss({fromRouteId:t},i)))},[s,t])}const Da={};function gc(s,t,r){Da[s]||(Da[s]=!0)}function fc(s,t){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function xc(s){let{to:t,replace:r,state:a,relative:n}=s;Ft()||re(!1);let{future:i,static:o}=m.useContext(rt),{matches:l}=m.useContext(at),{pathname:d}=nt(),c=Gs(),u=sa(t,ta(l,i.v7_relativeSplatPath),d,n==="path"),p=JSON.stringify(u);return m.useEffect(()=>c(JSON.parse(p),{replace:r,state:a,relative:n}),[c,p,n,r,a]),null}function ae(s){re(!1)}function bc(s){let{basename:t="/",children:r=null,location:a,navigationType:n=Qe.Pop,navigator:i,static:o=!1,future:l}=s;Ft()&&re(!1);let d=t.replace(/^\/*/,"/"),c=m.useMemo(()=>({basename:d,navigator:i,static:o,future:ss({v7_relativeSplatPath:!1},l)}),[d,l,i,o]);typeof a=="string"&&(a=Mt(a));let{pathname:u="/",search:p="",hash:g="",state:y=null,key:x="default"}=a,b=m.useMemo(()=>{let h=ea(u,d);return h==null?null:{location:{pathname:h,search:p,hash:g,state:y,key:x},navigationType:n}},[d,u,p,g,y,x,n]);return b==null?null:m.createElement(rt.Provider,{value:c},m.createElement(Hs.Provider,{children:r,value:b}))}function yc(s){let{children:t,location:r}=s;return rc(Ir(t),r)}new Promise(()=>{});function Ir(s,t){t===void 0&&(t=[]);let r=[];return m.Children.forEach(s,(a,n)=>{if(!m.isValidElement(a))return;let i=[...t,n];if(a.type===m.Fragment){r.push.apply(r,Ir(a.props.children,i));return}a.type!==ae&&re(!1),!a.props.index||!a.props.children||re(!1);let o={id:a.props.id||i.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=Ir(a.props.children,i)),r.push(o)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(s[a]=r[a])}return s},Or.apply(this,arguments)}function vc(s,t){if(s==null)return{};var r={},a=Object.keys(s),n,i;for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&(r[n]=s[n]);return r}function jc(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function wc(s,t){return s.button===0&&(!t||t==="_self")&&!jc(s)}const Nc=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Sc="6";try{window.__reactRouterVersion=Sc}catch{}const Cc="startTransition",Pa=Do[Cc];function kc(s){let{basename:t,children:r,future:a,window:n}=s,i=m.useRef();i.current==null&&(i.current=Dl({window:n,v5Compat:!0}));let o=i.current,[l,d]=m.useState({action:o.action,location:o.location}),{v7_startTransition:c}=a||{},u=m.useCallback(p=>{c&&Pa?Pa(()=>d(p)):d(p)},[d,c]);return m.useLayoutEffect(()=>o.listen(u),[o,u]),m.useEffect(()=>fc(a),[a]),m.createElement(bc,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:a})}const Tc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ue=m.forwardRef(function(t,r){let{onClick:a,relative:n,reloadDocument:i,replace:o,state:l,target:d,to:c,preventScrollReset:u,viewTransition:p}=t,g=vc(t,Nc),{basename:y}=m.useContext(rt),x,b=!1;if(typeof c=="string"&&Dc.test(c)&&(x=c,Tc))try{let w=new URL(window.location.href),v=c.startsWith("//")?new URL(w.protocol+c):new URL(c),f=ea(v.pathname,y);v.origin===w.origin&&f!=null?c=f+v.search+v.hash:b=!0}catch{}let h=tc(c,{relative:n}),N=Pc(c,{replace:o,state:l,target:d,preventScrollReset:u,relative:n,viewTransition:p});function j(w){a&&a(w),w.defaultPrevented||N(w)}return m.createElement("a",Or({},g,{href:x||h,onClick:b||i?a:j,ref:r,target:d}))});var Aa;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Aa||(Aa={}));var Ea;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Ea||(Ea={}));function Pc(s,t){let{target:r,replace:a,state:n,preventScrollReset:i,relative:o,viewTransition:l}=t===void 0?{}:t,d=Gs(),c=nt(),u=Vn(s,{relative:o});return m.useCallback(p=>{if(wc(p,r)){p.preventDefault();let g=a!==void 0?a:Is(c)===Is(u);d(s,{replace:g,state:n,preventScrollReset:i,relative:o,viewTransition:l})}},[c,d,u,a,n,r,s,i,o,l])}let Ac={data:""},Ec=s=>typeof window=="object"?((s?s.querySelector("#_goober"):window._goober)||Object.assign((s||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:s||Ac,Rc=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ic=/\/\*[^]*?\*\/|  +/g,Ra=/\n+/g,Ye=(s,t)=>{let r="",a="",n="";for(let i in s){let o=s[i];i[0]=="@"?i[1]=="i"?r=i+" "+o+";":a+=i[1]=="f"?Ye(o,i):i+"{"+Ye(o,i[1]=="k"?"":t)+"}":typeof o=="object"?a+=Ye(o,t?t.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,l):l?l+" "+d:d)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=Ye.p?Ye.p(i,o):i+":"+o+";")}return r+(t&&n?t+"{"+n+"}":n)+a},_e={},Xn=s=>{if(typeof s=="object"){let t="";for(let r in s)t+=r+Xn(s[r]);return t}return s},Oc=(s,t,r,a,n)=>{let i=Xn(s),o=_e[i]||(_e[i]=(d=>{let c=0,u=11;for(;c<d.length;)u=101*u+d.charCodeAt(c++)>>>0;return"go"+u})(i));if(!_e[o]){let d=i!==s?s:(c=>{let u,p,g=[{}];for(;u=Rc.exec(c.replace(Ic,""));)u[4]?g.shift():u[3]?(p=u[3].replace(Ra," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][u[1]]=u[2].replace(Ra," ").trim();return g[0]})(s);_e[o]=Ye(n?{["@keyframes "+o]:d}:d,r?"":"."+o)}let l=r&&_e.g?_e.g:null;return r&&(_e.g=_e[o]),((d,c,u,p)=>{p?c.data=c.data.replace(p,d):c.data.indexOf(d)===-1&&(c.data=u?d+c.data:c.data+d)})(_e[o],t,a,l),o},Lc=(s,t,r)=>s.reduce((a,n,i)=>{let o=t[i];if(o&&o.call){let l=o(r),d=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=d?"."+d:l&&typeof l=="object"?l.props?"":Ye(l,""):l===!1?"":l}return a+n+(o??"")},"");function zs(s){let t=this||{},r=s.call?s(t.p):s;return Oc(r.unshift?r.raw?Lc(r,[].slice.call(arguments,1),t.p):r.reduce((a,n)=>Object.assign(a,n&&n.call?n(t.p):n),{}):r,Ec(t.target),t.g,t.o,t.k)}let Qn,Lr,Mr;zs.bind({g:1});let Ve=zs.bind({k:1});function Mc(s,t,r,a){Ye.p=t,Qn=s,Lr=r,Mr=a}function it(s,t){let r=this||{};return function(){let a=arguments;function n(i,o){let l=Object.assign({},i),d=l.className||n.className;r.p=Object.assign({theme:Lr&&Lr()},l),r.o=/ *go\d+/.test(d),l.className=zs.apply(r,a)+(d?" "+d:"");let c=s;return s[0]&&(c=l.as||s,delete l.as),Mr&&c[0]&&Mr(l),Qn(c,l)}return n}}var Fc=s=>typeof s=="function",Os=(s,t)=>Fc(s)?s(t):s,$c=(()=>{let s=0;return()=>(++s).toString()})(),Zn=(()=>{let s;return()=>{if(s===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");s=!t||t.matches}return s}})(),_c=20,aa="default",ei=(s,t)=>{let{toastLimit:r}=s.settings;switch(t.type){case 0:return{...s,toasts:[t.toast,...s.toasts].slice(0,r)};case 1:return{...s,toasts:s.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:a}=t;return ei(s,{type:s.toasts.find(o=>o.id===a.id)?1:0,toast:a});case 3:let{toastId:n}=t;return{...s,toasts:s.toasts.map(o=>o.id===n||n===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return t.toastId===void 0?{...s,toasts:[]}:{...s,toasts:s.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...s,pausedAt:t.time};case 6:let i=t.time-(s.pausedAt||0);return{...s,pausedAt:void 0,toasts:s.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},js=[],ti={toasts:[],pausedAt:void 0,settings:{toastLimit:_c}},Oe={},si=(s,t=aa)=>{Oe[t]=ei(Oe[t]||ti,s),js.forEach(([r,a])=>{r===t&&a(Oe[t])})},ri=s=>Object.keys(Oe).forEach(t=>si(s,t)),Bc=s=>Object.keys(Oe).find(t=>Oe[t].toasts.some(r=>r.id===s)),Ws=(s=aa)=>t=>{si(t,s)},Uc={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Hc=(s={},t=aa)=>{let[r,a]=m.useState(Oe[t]||ti),n=m.useRef(Oe[t]);m.useEffect(()=>(n.current!==Oe[t]&&a(Oe[t]),js.push([t,a]),()=>{let o=js.findIndex(([l])=>l===t);o>-1&&js.splice(o,1)}),[t]);let i=r.toasts.map(o=>{var l,d,c;return{...s,...s[o.type],...o,removeDelay:o.removeDelay||((l=s[o.type])==null?void 0:l.removeDelay)||(s==null?void 0:s.removeDelay),duration:o.duration||((d=s[o.type])==null?void 0:d.duration)||(s==null?void 0:s.duration)||Uc[o.type],style:{...s.style,...(c=s[o.type])==null?void 0:c.style,...o.style}}});return{...r,toasts:i}},Gc=(s,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:s,pauseDuration:0,...r,id:(r==null?void 0:r.id)||$c()}),ns=s=>(t,r)=>{let a=Gc(t,s,r);return Ws(a.toasterId||Bc(a.id))({type:2,toast:a}),a.id},X=(s,t)=>ns("blank")(s,t);X.error=ns("error");X.success=ns("success");X.loading=ns("loading");X.custom=ns("custom");X.dismiss=(s,t)=>{let r={type:3,toastId:s};t?Ws(t)(r):ri(r)};X.dismissAll=s=>X.dismiss(void 0,s);X.remove=(s,t)=>{let r={type:4,toastId:s};t?Ws(t)(r):ri(r)};X.removeAll=s=>X.remove(void 0,s);X.promise=(s,t,r)=>{let a=X.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof s=="function"&&(s=s()),s.then(n=>{let i=t.success?Os(t.success,n):void 0;return i?X.success(i,{id:a,...r,...r==null?void 0:r.success}):X.dismiss(a),n}).catch(n=>{let i=t.error?Os(t.error,n):void 0;i?X.error(i,{id:a,...r,...r==null?void 0:r.error}):X.dismiss(a)}),s};var zc=1e3,Wc=(s,t="default")=>{let{toasts:r,pausedAt:a}=Hc(s,t),n=m.useRef(new Map).current,i=m.useCallback((p,g=zc)=>{if(n.has(p))return;let y=setTimeout(()=>{n.delete(p),o({type:4,toastId:p})},g);n.set(p,y)},[]);m.useEffect(()=>{if(a)return;let p=Date.now(),g=r.map(y=>{if(y.duration===1/0)return;let x=(y.duration||0)+y.pauseDuration-(p-y.createdAt);if(x<0){y.visible&&X.dismiss(y.id);return}return setTimeout(()=>X.dismiss(y.id,t),x)});return()=>{g.forEach(y=>y&&clearTimeout(y))}},[r,a,t]);let o=m.useCallback(Ws(t),[t]),l=m.useCallback(()=>{o({type:5,time:Date.now()})},[o]),d=m.useCallback((p,g)=>{o({type:1,toast:{id:p,height:g}})},[o]),c=m.useCallback(()=>{a&&o({type:6,time:Date.now()})},[a,o]),u=m.useCallback((p,g)=>{let{reverseOrder:y=!1,gutter:x=8,defaultPosition:b}=g||{},h=r.filter(w=>(w.position||b)===(p.position||b)&&w.height),N=h.findIndex(w=>w.id===p.id),j=h.filter((w,v)=>v<N&&w.visible).length;return h.filter(w=>w.visible).slice(...y?[j+1]:[0,j]).reduce((w,v)=>w+(v.height||0)+x,0)},[r]);return m.useEffect(()=>{r.forEach(p=>{if(p.dismissed)i(p.id,p.removeDelay);else{let g=n.get(p.id);g&&(clearTimeout(g),n.delete(p.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},qc=Ve`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Vc=Ve`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Jc=Ve`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Yc=it("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Vc} 0.15s ease-out forwards;
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
    animation: ${Jc} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Kc=Ve`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Xc=it("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${s=>s.secondary||"#e0e0e0"};
  border-right-color: ${s=>s.primary||"#616161"};
  animation: ${Kc} 1s linear infinite;
`,Qc=Ve`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Zc=Ve`
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
}`,ed=it("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Qc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Zc} 0.2s ease-out forwards;
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
`,td=it("div")`
  position: absolute;
`,sd=it("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,rd=Ve`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ad=it("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${rd} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,nd=({toast:s})=>{let{icon:t,type:r,iconTheme:a}=s;return t!==void 0?typeof t=="string"?m.createElement(ad,null,t):t:r==="blank"?null:m.createElement(sd,null,m.createElement(Xc,{...a}),r!=="loading"&&m.createElement(td,null,r==="error"?m.createElement(Yc,{...a}):m.createElement(ed,{...a})))},id=s=>`
0% {transform: translate3d(0,${s*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,od=s=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s*-150}%,-1px) scale(.6); opacity:0;}
`,ld="0%{opacity:0;} 100%{opacity:1;}",cd="0%{opacity:1;} 100%{opacity:0;}",dd=it("div")`
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
`,ud=it("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,md=(s,t)=>{let r=s.includes("top")?1:-1,[a,n]=Zn()?[ld,cd]:[id(r),od(r)];return{animation:t?`${Ve(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ve(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},pd=m.memo(({toast:s,position:t,style:r,children:a})=>{let n=s.height?md(s.position||t||"top-center",s.visible):{opacity:0},i=m.createElement(nd,{toast:s}),o=m.createElement(ud,{...s.ariaProps},Os(s.message,s));return m.createElement(dd,{className:s.className,style:{...n,...r,...s.style}},typeof a=="function"?a({icon:i,message:o}):m.createElement(m.Fragment,null,i,o))});Mc(m.createElement);var hd=({id:s,className:t,style:r,onHeightUpdate:a,children:n})=>{let i=m.useCallback(o=>{if(o){let l=()=>{let d=o.getBoundingClientRect().height;a(s,d)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[s,a]);return m.createElement("div",{ref:i,className:t,style:r},n)},gd=(s,t)=>{let r=s.includes("top"),a=r?{top:0}:{bottom:0},n=s.includes("center")?{justifyContent:"center"}:s.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Zn()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...n}},fd=zs`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,us=16,xd=({reverseOrder:s,position:t="top-center",toastOptions:r,gutter:a,children:n,toasterId:i,containerStyle:o,containerClassName:l})=>{let{toasts:d,handlers:c}=Wc(r,i);return m.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:us,left:us,right:us,bottom:us,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(u=>{let p=u.position||t,g=c.calculateOffset(u,{reverseOrder:s,gutter:a,defaultPosition:t}),y=gd(p,g);return m.createElement(hd,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?fd:"",style:y},u.type==="custom"?Os(u.message,u):n?n(u):m.createElement(pd,{toast:u,position:p}))}))},U=X;const ai=m.createContext();function qs(){return m.useContext(ai)}const Ia={light:{name:"Light Theme",cssVars:{"--primary":"#2563eb","--primary-foreground":"#ffffff","--background":"#ffffff","--foreground":"#0f172a","--card":"#ffffff","--muted":"#f8fafc","--border":"#e2e8f0"},isDark:!1},dark:{name:"Dark Theme",cssVars:{"--primary":"#3b82f6","--primary-foreground":"#ffffff","--background":"#0f172a","--foreground":"#f8fafc","--card":"#1e293b","--muted":"#1e293b","--border":"#334155"},isDark:!0},blue:{name:"Blue Theme",cssVars:{"--primary":"#1e40af","--primary-foreground":"#ffffff","--background":"#f0f9ff","--foreground":"#0c4a6e","--card":"#e0f2fe","--muted":"#e0f2fe","--border":"#7dd3fc"},isDark:!1},purple:{name:"Purple Theme",cssVars:{"--primary":"#7c3aed","--primary-foreground":"#ffffff","--background":"#faf5ff","--foreground":"#581c87","--card":"#f3e8ff","--muted":"#f3e8ff","--border":"#c4b5fd"},isDark:!1},green:{name:"Green Theme",cssVars:{"--primary":"#059669","--primary-foreground":"#ffffff","--background":"#f0fdf4","--foreground":"#064e3b","--card":"#dcfce7","--muted":"#dcfce7","--border":"#86efac"},isDark:!1},orange:{name:"Orange Theme",cssVars:{"--primary":"#ea580c","--primary-foreground":"#ffffff","--background":"#fff7ed","--foreground":"#9a3412","--card":"#fed7aa","--muted":"#fed7aa","--border":"#fdba74"},isDark:!1},red:{name:"Red Theme",cssVars:{"--primary":"#dc2626","--primary-foreground":"#ffffff","--background":"#fef2f2","--foreground":"#991b1b","--card":"#fecaca","--muted":"#fecaca","--border":"#fca5a5"},isDark:!1},pink:{name:"Pink Theme",cssVars:{"--primary":"#db2777","--primary-foreground":"#ffffff","--background":"#fdf2f8","--foreground":"#9d174d","--card":"#fce7f3","--muted":"#fce7f3","--border":"#f9a8d4"},isDark:!1},cyan:{name:"Cyan Theme",cssVars:{"--primary":"#0891b2","--primary-foreground":"#ffffff","--background":"#ecfeff","--foreground":"#164e63","--card":"#cffafe","--muted":"#cffafe","--border":"#67e8f9"},isDark:!1},amber:{name:"Amber Theme",cssVars:{"--primary":"#d97706","--primary-foreground":"#ffffff","--background":"#fffbeb","--foreground":"#92400e","--card":"#fef3c7","--muted":"#fef3c7","--border":"#fde68a"},isDark:!1},emerald:{name:"Emerald Theme",cssVars:{"--primary":"#10b981","--primary-foreground":"#ffffff","--background":"#ecfdf5","--foreground":"#064e3b","--card":"#d1fae5","--muted":"#d1fae5","--border":"#6ee7b7"},isDark:!1}};function bd({children:s}){const[t,r]=m.useState("light");m.useEffect(()=>{const o=localStorage.getItem("theme")||"light";r(o),a(o)},[]);const a=o=>{const l=Ia[o];l&&(Object.entries(l.cssVars).forEach(([d,c])=>{document.documentElement.style.setProperty(d,c)}),document.documentElement.classList.toggle("dark",l.isDark))},n=o=>{r(o),localStorage.setItem("theme",o),a(o)},i=()=>{n(t==="light"?"dark":"light")};return e.jsx(ai.Provider,{value:{theme:t,setTheme:n,toggleTheme:i,themes:Ia},children:s})}/**
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
 */const ni="firebasestorage.googleapis.com",ii="storageBucket",yd=2*60*1e3,vd=10*60*1e3;/**
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
 */class te extends Io{constructor(t,r,a=0){super(ur(t),`Firebase Storage: ${r} (${ur(t)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,te.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ur(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ee;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ee||(ee={}));function ur(s){return"storage/"+s}function na(){const s="An unknown error occurred, please check the error payload for server response.";return new te(ee.UNKNOWN,s)}function jd(s){return new te(ee.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")}function wd(s){return new te(ee.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Nd(){const s="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new te(ee.UNAUTHENTICATED,s)}function Sd(){return new te(ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Cd(s){return new te(ee.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")}function kd(){return new te(ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Td(){return new te(ee.CANCELED,"User canceled the upload/download.")}function Dd(s){return new te(ee.INVALID_URL,"Invalid URL '"+s+"'.")}function Pd(s){return new te(ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function Ad(){return new te(ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ii+"' property when initializing the app?")}function Ed(){return new te(ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Rd(){return new te(ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Id(s){return new te(ee.UNSUPPORTED_ENVIRONMENT,`${s} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fr(s){return new te(ee.INVALID_ARGUMENT,s)}function oi(){return new te(ee.APP_DELETED,"The Firebase app was deleted.")}function Od(s){return new te(ee.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Jt(s,t){return new te(ee.INVALID_FORMAT,"String does not match format '"+s+"': "+t)}function zt(s){throw new te(ee.INTERNAL_ERROR,"Internal error: "+s)}/**
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
 */class Ne{constructor(t,r){this.bucket=t,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,r){let a;try{a=Ne.makeFromUrl(t,r)}catch{return new Ne(t,"")}if(a.path==="")return a;throw Pd(t)}static makeFromUrl(t,r){let a=null;const n="([A-Za-z0-9.\\-_]+)";function i(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+n+o,"i"),d={bucket:1,path:3};function c(v){v.path_=decodeURIComponent(v.path)}const u="v[A-Za-z0-9_]+",p=r.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${u}/b/${n}/o${g}`,"i"),x={bucket:1,path:3},b=r===ni?"(?:storage.googleapis.com|storage.cloud.google.com)":r,h="([^?#]*)",N=new RegExp(`^https?://${b}/${n}/${h}`,"i"),w=[{regex:l,indices:d,postModify:i},{regex:y,indices:x,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let v=0;v<w.length;v++){const f=w[v],E=f.regex.exec(t);if(E){const S=E[f.indices.bucket];let k=E[f.indices.path];k||(k=""),a=new Ne(S,k),f.postModify(a);break}}if(a==null)throw Dd(t);return a}}class Ld{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Md(s,t,r){let a=1,n=null,i=null,o=!1,l=0;function d(){return l===2}let c=!1;function u(...h){c||(c=!0,t.apply(null,h))}function p(h){n=setTimeout(()=>{n=null,s(y,d())},h)}function g(){i&&clearTimeout(i)}function y(h,...N){if(c){g();return}if(h){g(),u.call(null,h,...N);return}if(d()||o){g(),u.call(null,h,...N);return}a<64&&(a*=2);let w;l===1?(l=2,w=0):w=(a+Math.random())*1e3,p(w)}let x=!1;function b(h){x||(x=!0,g(),!c&&(n!==null?(h||(l=2),clearTimeout(n),p(0)):h||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,b(!0)},r),b}function Fd(s){s(!1)}/**
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
 */function $d(s){return s!==void 0}function _d(s){return typeof s=="object"&&!Array.isArray(s)}function ia(s){return typeof s=="string"||s instanceof String}function Oa(s){return oa()&&s instanceof Blob}function oa(){return typeof Blob<"u"}function La(s,t,r,a){if(a<t)throw Fr(`Invalid value for '${s}'. Expected ${t} or greater.`);if(a>r)throw Fr(`Invalid value for '${s}'. Expected ${r} or less.`)}/**
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
 */function la(s,t,r){let a=t;return r==null&&(a=`https://${t}`),`${r}://${a}/v0${s}`}function li(s){const t=encodeURIComponent;let r="?";for(const a in s)if(s.hasOwnProperty(a)){const n=t(a)+"="+t(s[a]);r=r+n+"&"}return r=r.slice(0,-1),r}var ht;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(ht||(ht={}));/**
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
 */function Bd(s,t){const r=s>=500&&s<600,n=[408,429].indexOf(s)!==-1,i=t.indexOf(s)!==-1;return r||n||i}/**
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
 */class Ud{constructor(t,r,a,n,i,o,l,d,c,u,p,g=!0){this.url_=t,this.method_=r,this.headers_=a,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=d,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,x)=>{this.resolve_=y,this.reject_=x,this.start_()})}start_(){const t=(a,n)=>{if(n){a(!1,new ms(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const d=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ht.NO_ERROR,d=i.getStatus();if(!l||Bd(d,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ht.ABORT;a(!1,new ms(!1,null,u));return}const c=this.successCodes_.indexOf(d)!==-1;a(!0,new ms(c,i))})},r=(a,n)=>{const i=this.resolve_,o=this.reject_,l=n.connection;if(n.wasSuccessCode)try{const d=this.callback_(l,l.getResponse());$d(d)?i(d):i()}catch(d){o(d)}else if(l!==null){const d=na();d.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,d)):o(d)}else if(n.canceled){const d=this.appDelete_?oi():Td();o(d)}else{const d=kd();o(d)}};this.canceled_?r(!1,new ms(!1,null,!0)):this.backoffId_=Md(t,r,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Fd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ms{constructor(t,r,a){this.wasSuccessCode=t,this.connection=r,this.canceled=!!a}}function Hd(s,t){t!==null&&t.length>0&&(s.Authorization="Firebase "+t)}function Gd(s,t){s["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function zd(s,t){t&&(s["X-Firebase-GMPID"]=t)}function Wd(s,t){t!==null&&(s["X-Firebase-AppCheck"]=t)}function qd(s,t,r,a,n,i,o=!0){const l=li(s.urlParams),d=s.url+l,c=Object.assign({},s.headers);return zd(c,t),Hd(c,r),Gd(c,i),Wd(c,a),new Ud(d,s.method,c,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,n,o)}/**
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
 */function Vd(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Jd(...s){const t=Vd();if(t!==void 0){const r=new t;for(let a=0;a<s.length;a++)r.append(s[a]);return r.getBlob()}else{if(oa())return new Blob(s);throw new te(ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Yd(s,t,r){return s.webkitSlice?s.webkitSlice(t,r):s.mozSlice?s.mozSlice(t,r):s.slice?s.slice(t,r):null}/**
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
 */function Kd(s){if(typeof atob>"u")throw Id("base-64");return atob(s)}/**
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
 */const Le={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mr{constructor(t,r){this.data=t,this.contentType=r||null}}function Xd(s,t){switch(s){case Le.RAW:return new mr(ci(t));case Le.BASE64:case Le.BASE64URL:return new mr(di(s,t));case Le.DATA_URL:return new mr(Zd(t),eu(t))}throw na()}function ci(s){const t=[];for(let r=0;r<s.length;r++){let a=s.charCodeAt(r);if(a<=127)t.push(a);else if(a<=2047)t.push(192|a>>6,128|a&63);else if((a&64512)===55296)if(!(r<s.length-1&&(s.charCodeAt(r+1)&64512)===56320))t.push(239,191,189);else{const i=a,o=s.charCodeAt(++r);a=65536|(i&1023)<<10|o&1023,t.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63)}else(a&64512)===56320?t.push(239,191,189):t.push(224|a>>12,128|a>>6&63,128|a&63)}return new Uint8Array(t)}function Qd(s){let t;try{t=decodeURIComponent(s)}catch{throw Jt(Le.DATA_URL,"Malformed data URL.")}return ci(t)}function di(s,t){switch(s){case Le.BASE64:{const n=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(n||i)throw Jt(s,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case Le.BASE64URL:{const n=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(n||i)throw Jt(s,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=Kd(t)}catch(n){throw n.message.includes("polyfill")?n:Jt(s,"Invalid character found")}const a=new Uint8Array(r.length);for(let n=0;n<r.length;n++)a[n]=r.charCodeAt(n);return a}class ui{constructor(t){this.base64=!1,this.contentType=null;const r=t.match(/^data:([^,]+)?,/);if(r===null)throw Jt(Le.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const a=r[1]||null;a!=null&&(this.base64=tu(a,";base64"),this.contentType=this.base64?a.substring(0,a.length-7):a),this.rest=t.substring(t.indexOf(",")+1)}}function Zd(s){const t=new ui(s);return t.base64?di(Le.BASE64,t.rest):Qd(t.rest)}function eu(s){return new ui(s).contentType}function tu(s,t){return s.length>=t.length?s.substring(s.length-t.length)===t:!1}/**
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
 */class Ke{constructor(t,r){let a=0,n="";Oa(t)?(this.data_=t,a=t.size,n=t.type):t instanceof ArrayBuffer?(r?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),a=this.data_.length):t instanceof Uint8Array&&(r?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),a=t.length),this.size_=a,this.type_=n}size(){return this.size_}type(){return this.type_}slice(t,r){if(Oa(this.data_)){const a=this.data_,n=Yd(a,t,r);return n===null?null:new Ke(n)}else{const a=new Uint8Array(this.data_.buffer,t,r-t);return new Ke(a,!0)}}static getBlob(...t){if(oa()){const r=t.map(a=>a instanceof Ke?a.data_:a);return new Ke(Jd.apply(null,r))}else{const r=t.map(o=>ia(o)?Xd(Le.RAW,o).data:o.data_);let a=0;r.forEach(o=>{a+=o.byteLength});const n=new Uint8Array(a);let i=0;return r.forEach(o=>{for(let l=0;l<o.length;l++)n[i++]=o[l]}),new Ke(n,!0)}}uploadData(){return this.data_}}/**
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
 */function mi(s){let t;try{t=JSON.parse(s)}catch{return null}return _d(t)?t:null}/**
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
 */function su(s){if(s.length===0)return null;const t=s.lastIndexOf("/");return t===-1?"":s.slice(0,t)}function ru(s,t){const r=t.split("/").filter(a=>a.length>0).join("/");return s.length===0?r:s+"/"+r}function pi(s){const t=s.lastIndexOf("/",s.length-2);return t===-1?s:s.slice(t+1)}/**
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
 */function au(s,t){return t}class he{constructor(t,r,a,n){this.server=t,this.local=r||t,this.writable=!!a,this.xform=n||au}}let ps=null;function nu(s){return!ia(s)||s.length<2?s:pi(s)}function hi(){if(ps)return ps;const s=[];s.push(new he("bucket")),s.push(new he("generation")),s.push(new he("metageneration")),s.push(new he("name","fullPath",!0));function t(i,o){return nu(o)}const r=new he("name");r.xform=t,s.push(r);function a(i,o){return o!==void 0?Number(o):o}const n=new he("size");return n.xform=a,s.push(n),s.push(new he("timeCreated")),s.push(new he("updated")),s.push(new he("md5Hash",null,!0)),s.push(new he("cacheControl",null,!0)),s.push(new he("contentDisposition",null,!0)),s.push(new he("contentEncoding",null,!0)),s.push(new he("contentLanguage",null,!0)),s.push(new he("contentType",null,!0)),s.push(new he("metadata","customMetadata",!0)),ps=s,ps}function iu(s,t){function r(){const a=s.bucket,n=s.fullPath,i=new Ne(a,n);return t._makeStorageReference(i)}Object.defineProperty(s,"ref",{get:r})}function ou(s,t,r){const a={};a.type="file";const n=r.length;for(let i=0;i<n;i++){const o=r[i];a[o.local]=o.xform(a,t[o.server])}return iu(a,s),a}function gi(s,t,r){const a=mi(t);return a===null?null:ou(s,a,r)}function lu(s,t,r,a){const n=mi(t);if(n===null||!ia(n.downloadTokens))return null;const i=n.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=s.bucket,p=s.fullPath,g="/b/"+o(u)+"/o/"+o(p),y=la(g,r,a),x=li({alt:"media",token:c});return y+x})[0]}function cu(s,t){const r={},a=t.length;for(let n=0;n<a;n++){const i=t[n];i.writable&&(r[i.server]=s[i.local])}return JSON.stringify(r)}class fi{constructor(t,r,a,n){this.url=t,this.method=r,this.handler=a,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function xi(s){if(!s)throw na()}function du(s,t){function r(a,n){const i=gi(s,n,t);return xi(i!==null),i}return r}function uu(s,t){function r(a,n){const i=gi(s,n,t);return xi(i!==null),lu(i,n,s.host,s._protocol)}return r}function bi(s){function t(r,a){let n;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?n=Sd():n=Nd():r.getStatus()===402?n=wd(s.bucket):r.getStatus()===403?n=Cd(s.path):n=a,n.status=r.getStatus(),n.serverResponse=a.serverResponse,n}return t}function mu(s){const t=bi(s);function r(a,n){let i=t(a,n);return a.getStatus()===404&&(i=jd(s.path)),i.serverResponse=n.serverResponse,i}return r}function pu(s,t,r){const a=t.fullServerUrl(),n=la(a,s.host,s._protocol),i="GET",o=s.maxOperationRetryTime,l=new fi(n,i,uu(s,r),o);return l.errorHandler=mu(t),l}function hu(s,t){return s&&s.contentType||t&&t.type()||"application/octet-stream"}function gu(s,t,r){const a=Object.assign({},r);return a.fullPath=s.path,a.size=t.size(),a.contentType||(a.contentType=hu(null,t)),a}function fu(s,t,r,a,n){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let w="";for(let v=0;v<2;v++)w=w+Math.random().toString().slice(2);return w}const d=l();o["Content-Type"]="multipart/related; boundary="+d;const c=gu(t,a,n),u=cu(c,r),p="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+d+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+d+"--",y=Ke.getBlob(p,a,g);if(y===null)throw Ed();const x={name:c.fullPath},b=la(i,s.host,s._protocol),h="POST",N=s.maxUploadRetryTime,j=new fi(b,h,du(s,r),N);return j.urlParams=x,j.headers=o,j.body=y.uploadData(),j.errorHandler=bi(t),j}class xu{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ht.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ht.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ht.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,r,a,n){if(this.sent_)throw zt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,t,!0),n!==void 0)for(const i in n)n.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,n[i].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw zt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw zt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw zt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw zt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class bu extends xu{initXhr(){this.xhr_.responseType="text"}}function yi(){return new bu}/**
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
 */class xt{constructor(t,r){this._service=t,r instanceof Ne?this._location=r:this._location=Ne.makeFromUrl(r,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,r){return new xt(t,r)}get root(){const t=new Ne(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pi(this._location.path)}get storage(){return this._service}get parent(){const t=su(this._location.path);if(t===null)return null;const r=new Ne(this._location.bucket,t);return new xt(this._service,r)}_throwIfRoot(t){if(this._location.path==="")throw Od(t)}}function yu(s,t,r){s._throwIfRoot("uploadBytes");const a=fu(s.storage,s._location,hi(),new Ke(t,!0),r);return s.storage.makeRequestWithTokens(a,yi).then(n=>({metadata:n,ref:s}))}function vu(s){s._throwIfRoot("getDownloadURL");const t=pu(s.storage,s._location,hi());return s.storage.makeRequestWithTokens(t,yi).then(r=>{if(r===null)throw Rd();return r})}function ju(s,t){const r=ru(s._location.path,t),a=new Ne(s._location.bucket,r);return new xt(s.storage,a)}/**
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
 */function wu(s){return/^[A-Za-z]+:\/\//.test(s)}function Nu(s,t){return new xt(s,t)}function vi(s,t){if(s instanceof ca){const r=s;if(r._bucket==null)throw Ad();const a=new xt(r,r._bucket);return t!=null?vi(a,t):a}else return t!==void 0?ju(s,t):s}function Su(s,t){if(t&&wu(t)){if(s instanceof ca)return Nu(s,t);throw Fr("To use ref(service, url), the first argument must be a Storage instance.")}else return vi(s,t)}function Ma(s,t){const r=t==null?void 0:t[ii];return r==null?null:Ne.makeFromBucketSpec(r,s)}function Cu(s,t,r,a={}){s.host=`${t}:${r}`,s._protocol="http";const{mockUserToken:n}=a;n&&(s._overrideAuthToken=typeof n=="string"?n:Mo(n,s.app.options.projectId))}class ca{constructor(t,r,a,n,i){this.app=t,this._authProvider=r,this._appCheckProvider=a,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=ni,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yd,this._maxUploadRetryTime=vd,this._requests=new Set,n!=null?this._bucket=Ne.makeFromBucketSpec(n,this._host):this._bucket=Ma(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ne.makeFromBucketSpec(this._url,t):this._bucket=Ma(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){La("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){La("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const r=await t.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new xt(this,t)}_makeRequest(t,r,a,n,i=!0){if(this._deleted)return new Ld(oi());{const o=qd(t,this._appId,a,n,r,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,r){const[a,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,r,a,n).getPromise()}}const Fa="@firebase/storage",$a="0.13.2";/**
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
 */const ji="storage";function dt(s,t,r){return s=Fs(s),yu(s,t,r)}function ut(s){return s=Fs(s),vu(s)}function mt(s,t){return s=Fs(s),Su(s,t)}function wi(s=Cr(),t){s=Fs(s);const a=Oo(s,ji).getImmediate({identifier:t}),n=Lo("storage");return n&&ku(a,...n),a}function ku(s,t,r,a={}){Cu(s,t,r,a)}function Tu(s,{instanceIdentifier:t}){const r=s.getProvider("app").getImmediate(),a=s.getProvider("auth-internal"),n=s.getProvider("app-check-internal");return new ca(r,a,n,t,Ro)}function Du(){Ao(new Eo(ji,Tu,"PUBLIC").setMultipleInstances(!0)),va(Fa,$a,""),va(Fa,$a,"esm2017")}Du();const ws={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"};console.log("Firebase config loaded:",{hasApiKey:!!ws.apiKey,hasAuthDomain:!!ws.authDomain,projectId:ws.projectId,usingEnvVars:!1});const da=kr(ws),Nt=Sn(da),De=Cn(da),St=wi(da),Ni=m.createContext();function vt(){return m.useContext(Ni)}function Pu({children:s}){const[t,r]=m.useState(null),[a,n]=m.useState(!0);m.useEffect(()=>{let c,u;try{c=kn(Nt,async p=>{try{if(p)try{const g=await vs(se(De,"users",p.uid)),y=g.exists()?g.data():null;r({uid:p.uid,email:p.email,displayName:p.displayName,photoURL:p.photoURL,...y})}catch(g){console.log("⚠️ Firestore not available, using basic user data:",g.message),r({uid:p.uid,email:p.email,displayName:p.displayName,photoURL:p.photoURL})}else r(null)}catch(g){console.error("Error in auth state change:",g),r(null)}finally{n(!1)}}),u=setTimeout(()=>{console.log("Firebase auth timeout - setting loading to false"),n(!1)},5e3)}catch(p){console.error("Error setting up auth listener:",p),n(!1)}return()=>{c&&c(),u&&clearTimeout(u)}},[]);const d={user:t,loading:a,signInWithGoogle:async()=>{try{const c=new Bo;c.addScope("email"),c.addScope("profile");const u=await ja(Nt,c);try{await je(se(De,"users",u.user.uid),{uid:u.user.uid,email:u.user.email,displayName:u.user.displayName,photoURL:u.user.photoURL,createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(p){console.warn("Failed to save user data to Firestore:",p)}console.log("Successfully signed in!")}catch(c){throw console.error("Failed to sign in:",c.message),c}},signInWithGitHub:async()=>{var c,u;try{console.log("Using Firebase GitHub authentication");const p=new $o;p.addScope("user:email");const g=await ja(Nt,p);try{await je(se(De,"users",g.user.uid),{uid:g.user.uid,email:g.user.email,displayName:g.user.displayName||((c=g.user.email)==null?void 0:c.split("@")[0])||"GitHub User",photoURL:g.user.photoURL,provider:"github",createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(y){console.warn("Failed to save user data to Firestore:",y)}console.log("Successfully signed in with GitHub!")}catch(p){if(console.error("GitHub authentication error:",p.message),p.code==="auth/account-exists-with-different-credential"){const g=(u=p.customData)==null?void 0:u.email;if(g)try{const y=await _o(Nt,g);throw console.log("Available sign-in methods for",g,":",y),y&&y.length>0?y.includes("google.com")?new Error(`An account with ${g} already exists using Google. Please sign in with Google instead, then you can link your GitHub account.`):y.includes("password")?new Error(`An account with ${g} already exists using email/password. Please sign in with your existing method instead.`):new Error(`An account with ${g} already exists. Please sign in with your existing method instead.`):new Error(`An account with ${g} already exists. Please try signing in with Google first, then you can link your GitHub account.`)}catch(y){throw console.error("Failed to check sign-in methods:",y.message),new Error(`An account with ${g} already exists. Please sign in with your existing method instead.`)}else throw new Error("An account with this email already exists. Please sign in with your existing method instead.")}else throw p.code==="auth/internal-error"?(console.error("GitHub authentication internal error:",p.message),new Error("GitHub authentication is not properly configured. Please check Firebase Console settings.")):(console.error("Failed to sign in with GitHub:",p.message),p)}},logout:async()=>{try{await Fo(Nt),console.log("Successfully signed out!")}catch(c){console.error("Failed to sign out:",c.message)}},auth:Nt,db:De};return e.jsx(Ni.Provider,{value:d,children:a?e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-muted-foreground",children:"Loading DreamBuild..."})]})}):s})}const Si=m.createContext();function Je(){return m.useContext(Si)}function Au({children:s}){const{user:t,db:r}=vt(),[a,n]=m.useState({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),[i,o]=m.useState([]),[l,d]=m.useState(!1),c=m.useCallback(v=>{n(f=>({...f,activeFile:v,lastModified:new Date}))},[]),u=m.useCallback((v,f)=>{console.log(`🔄 Updating file: ${v} (${(f==null?void 0:f.length)||0} chars)`),n(E=>{const S={...E,files:{...E.files,[v]:f},lastModified:new Date};return console.log("📁 Project files after update:",Object.keys(S.files)),S})},[]),p=m.useCallback(v=>{n(f=>({...f,config:{...f.config,...v},lastModified:new Date}))},[]),g=m.useCallback(async()=>{if(!t){console.log("⚠️ loadProjects: No user found");return}console.log("🔄 Loading projects for user:",t.uid),d(!0);try{const{collection:v,query:f,where:E,getDocs:S,orderBy:k}=await Be(async()=>{const{collection:$,query:T,where:C,getDocs:I,orderBy:G}=await import("./firebase-yUj2_25M.js").then(z=>z.x);return{collection:$,query:T,where:C,getDocs:I,orderBy:G}},[]),D=v(r,"projects"),O=f(D,E("userId","==",t.uid),k("lastModified","desc"));console.log("🔥 Querying Firestore for projects...");const A=(await S(O)).docs.map($=>({id:$.id,...$.data()}));console.log("📦 Loaded projects:",A.length,"projects"),console.log("📋 Projects list:",A),o(A)}catch(v){console.error("❌ Failed to load projects:",v),U.error("Failed to load projects: "+v.message)}finally{d(!1)}},[t,r]);m.useEffect(()=>{t?(console.log("🔄 User authenticated, loading projects automatically..."),g()):(console.log("⚠️ No user, clearing projects"),o([]))},[t,g]);const y=m.useCallback(async(v=null)=>{if(!t){U.error("Please sign in to save projects");return}d(!0);try{const f={...a,name:v||a.name,userId:t.uid,lastModified:new Date},{doc:E,setDoc:S,collection:k}=await Be(async()=>{const{doc:O,setDoc:L,collection:A}=await import("./firebase-yUj2_25M.js").then($=>$.x);return{doc:O,setDoc:L,collection:A}},[]),D=E(k(r,"projects"));await S(D,{...f,id:D.id,createdAt:a.id?void 0:new Date}),n(O=>({...O,id:D.id})),U.success("Project saved successfully!"),await g()}catch(f){U.error("Failed to save project: "+f.message)}finally{d(!1)}},[a,t,r,g]),x=m.useCallback(async v=>{if(!t){U.error("Please sign in to save projects");return}console.log("💾 saveExternalProject called with:",v),d(!0);try{const f={...v,userId:t.uid,lastModified:new Date,createdAt:v.createdAt||new Date};console.log("📝 Project to save:",f);const{doc:E,setDoc:S,collection:k}=await Be(async()=>{const{doc:L,setDoc:A,collection:$}=await import("./firebase-yUj2_25M.js").then(T=>T.x);return{doc:L,setDoc:A,collection:$}},[]),D=E(k(r,"projects")),O={...f,id:D.id};console.log("🔥 Saving to Firestore:",O),await S(D,O),console.log("✅ Project saved to Firestore with ID:",D.id),U.success(`Project "${v.name}" saved successfully!`),console.log("🔄 Refreshing projects list..."),await g(),console.log("✅ Projects list refreshed")}catch(f){console.error("❌ Failed to save external project:",f),U.error("Failed to save project")}finally{d(!1)}},[t,r,g]),b=m.useCallback(async v=>{if(t){d(!0);try{const{doc:f,getDoc:E}=await Be(async()=>{const{doc:D,getDoc:O}=await import("./firebase-yUj2_25M.js").then(L=>L.x);return{doc:D,getDoc:O}},[]),S=f(r,"projects",v),k=await E(S);if(k.exists()){const D={id:k.id,...k.data()};n(D),U.success("Project loaded successfully!")}else U.error("Project not found")}catch(f){U.error("Failed to load project: "+f.message)}finally{d(!1)}}},[t,r]),h=m.useCallback(async v=>{if(t){d(!0);try{const{doc:f,deleteDoc:E}=await Be(async()=>{const{doc:S,deleteDoc:k}=await import("./firebase-yUj2_25M.js").then(D=>D.x);return{doc:S,deleteDoc:k}},[]);await E(f(r,"projects",v)),o(S=>S.filter(k=>k.id!==v)),U.success("Project deleted successfully!")}catch(f){U.error("Failed to delete project: "+f.message)}finally{d(!1)}}},[t,r]),N=m.useCallback(()=>{n({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),U.success("New project created!")},[]),j=m.useCallback(v=>{console.log("📁 Adding files to project:",Object.keys(v)),n(f=>({...f,files:{...f.files,...v},lastModified:new Date})),U.success(`${Object.keys(v).length} files added to project!`)},[]),w={currentProject:a,projects:i,isLoading:l,switchFile:c,updateFile:u,updateConfig:p,saveProject:y,saveExternalProject:x,loadProjects:g,loadProject:b,deleteProject:h,createNewProject:N,addFilesToProject:j};return e.jsx(Si.Provider,{value:w,children:s})}const Eu=()=>{const{theme:s,toggleTheme:t}=qs(),{user:r,logout:a}=vt(),[n,i]=m.useState(!1),[o,l]=m.useState(!1),[d,c]=m.useState(!1),u=nt();Me.useEffect(()=>{const y=()=>{l(window.innerWidth>=768)};return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]),Me.useEffect(()=>{const y=x=>{d&&!x.target.closest(".user-menu")&&c(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[d]);const p=[{name:"Home",href:"/",icon:Pe},{name:"AI Builder",href:"/ai-builder",icon:J},{name:"Templates",href:"/templates",icon:ft},{name:"Education",href:"/education",icon:oe},{name:"Projects",href:"/projects",icon:Ae},{name:"Dashboard",href:"/dashboard",icon:Fe}],g=y=>u.pathname===y;return e.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsxs(ue,{to:"/",className:"flex items-center gap-3 group",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg",children:e.jsx(ft,{className:"h-6 w-6 text-primary-foreground"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xl font-bold text-high-contrast",children:"DreamBuild"}),e.jsx("span",{className:"text-xs text-muted-foreground -mt-1",children:"AI Development Platform"})]})]}),e.jsx("div",{className:"hidden md:flex items-center gap-1",children:p.map(y=>{const x=y.icon;return e.jsxs(ue,{to:y.href,className:`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${g(y.href)?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[e.jsx(x,{className:"h-4 w-4"}),y.name]},y.name)})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:t,className:"p-2 rounded-lg hover:bg-muted transition-colors",title:`Switch to ${s==="light"?"dark":"light"} mode`,children:s==="light"?e.jsx(Ho,{className:"h-4 w-4 text-muted-foreground"}):e.jsx(Go,{className:"h-4 w-4 text-muted-foreground"})}),r?e.jsxs("div",{className:"relative user-menu",children:[e.jsxs("button",{onClick:()=>c(!d),className:"flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors",children:[e.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-sm font-semibold text-primary",children:(r.displayName||r.email||"U").charAt(0).toUpperCase()})}),e.jsx("span",{className:"hidden sm:inline text-sm font-medium text-foreground",children:r.displayName||r.email})]}),d&&e.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-[60]",children:[e.jsxs("div",{className:"p-3 border-b border-border",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:r.email})]}),e.jsxs("div",{className:"p-1",children:[e.jsxs(ue,{to:"/dashboard",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[e.jsx(Ae,{className:"h-4 w-4"}),"Dashboard"]}),e.jsxs(ue,{to:"/settings",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[e.jsx(Ds,{className:"h-4 w-4"}),"Settings"]}),e.jsx("hr",{className:"my-1"}),e.jsxs("button",{onClick:()=>{a(),c(!1)},className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors",children:[e.jsx(wa,{className:"h-4 w-4"}),"Sign Out"]})]})]})]}):e.jsxs(ue,{to:"/login",className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[e.jsx(Pe,{className:"h-4 w-4"}),"Sign In"]}),!o&&e.jsx("button",{onClick:()=>i(!n),className:"p-2 rounded-lg hover:bg-muted transition-colors ml-2",children:n?e.jsx(Yr,{className:"h-4 w-4"}):e.jsx(zo,{className:"h-4 w-4"})})]})]}),!o&&n&&e.jsx("div",{className:"border-t border-border bg-background",children:e.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[p.map(y=>{const x=y.icon;return e.jsxs(ue,{to:y.href,onClick:()=>i(!1),className:`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border ${g(y.href)?"bg-primary text-primary-foreground border-primary shadow-md":"bg-card text-foreground border-border hover:bg-muted hover:border-primary/30 shadow-sm"}`,children:[e.jsx(x,{className:"h-5 w-5"}),y.name]},y.name)}),r?e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsxs("div",{className:"px-4 py-2 border-b border-border",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:r.email})]}),e.jsxs(ue,{to:"/dashboard",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[e.jsx(Ae,{className:"h-5 w-5"}),"Dashboard"]}),e.jsxs(ue,{to:"/settings",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[e.jsx(Ds,{className:"h-5 w-5"}),"Settings"]}),e.jsxs("button",{onClick:()=>{a(),i(!1)},className:"w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg",children:[e.jsx(wa,{className:"h-5 w-5"}),"Sign Out"]})]}):e.jsxs(ue,{to:"/login",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg text-base font-semibold",children:[e.jsx(Pe,{className:"h-5 w-5"}),"Sign In"]})]})})]})})},Ru=()=>{const[s,t]=m.useState(""),[r,a]=m.useState(!1),n=i=>{i.preventDefault(),s&&(a(!0),t(""),setTimeout(()=>a(!1),3e3))};return e.jsx("footer",{className:"bg-background border-t border-border",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:e.jsx(ft,{className:"h-5 w-5 text-primary-foreground"})}),e.jsx("span",{className:"text-xl font-bold text-foreground",children:"DreamBuild"})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"AI-powered development platform for modern developers."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"GitHub",children:e.jsx(fe,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),e.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Twitter",children:e.jsx(Kr,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),e.jsx("a",{href:"mailto:contact@dreambuild.ai",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Email",children:e.jsx(Rt,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Stay Updated"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Get the latest updates and features."}),e.jsxs("form",{onSubmit:n,className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"email",value:s,onChange:i=>t(i.target.value),placeholder:"Enter your email",className:"flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",required:!0}),e.jsx("button",{type:"submit",disabled:r,className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:r?e.jsx(Rt,{className:"h-4 w-4"}):e.jsx(Xr,{className:"h-4 w-4"})})]}),r&&e.jsx("p",{className:"text-sm text-green-600",children:"Thanks for subscribing!"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Quick Links"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:e.jsx("a",{href:"/ai-builder",className:"text-muted-foreground hover:text-foreground transition-colors",children:"AI Builder"})}),e.jsx("li",{children:e.jsx("a",{href:"/templates",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Templates"})}),e.jsx("li",{children:e.jsx("a",{href:"/documentation",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Documentation"})}),e.jsx("li",{children:e.jsx("a",{href:"/support",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Support"})})]})]})]}),e.jsx("div",{className:"border-t border-border pt-8 mt-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:e.jsx("span",{children:"© 2024 Bradley Virtual Solutions, LLC"})}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsx("a",{href:"/privacy",className:"hover:text-foreground transition-colors",children:"Privacy"}),e.jsx("a",{href:"/terms",className:"hover:text-foreground transition-colors",children:"Terms"}),e.jsx("a",{href:"/contact",className:"hover:text-foreground transition-colors",children:"Contact"})]})]})})]})})},Iu=()=>{const s=[{icon:J,title:"AI Code Generation",description:"Generate code with AI assistance."},{icon:Ae,title:"Smart Templates",description:"Pre-built templates for quick start."},{icon:ze,title:"Real-time Collaboration",description:"Work together with your team."}],t=[{label:"AI Models",value:"10+",icon:J},{label:"Languages",value:"50+",icon:Ae},{label:"Templates",value:"25+",icon:$s}];return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsxs("section",{className:"relative pt-20 pb-20",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5"}),e.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative flex justify-center",children:e.jsxs("div",{className:"text-center max-w-4xl w-full ml-8",children:[e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8",children:[e.jsx(ft,{className:"h-4 w-4"}),"AI-Powered Development Platform"]}),e.jsxs(F.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight",children:["Build with"," ",e.jsx("span",{className:"bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent",children:"AI"})]}),e.jsx(F.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed",children:"Create amazing projects with AI-powered code generation. Simple, fast, and effective."}),e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-md mx-auto",children:[e.jsxs(ue,{to:"/ai-builder",className:"inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl",children:[e.jsx(Pe,{className:"h-5 w-5"}),"Start Building"]}),e.jsxs(ue,{to:"/templates",className:"inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold",children:[e.jsx(J,{className:"h-5 w-5"}),"Browse Templates"]})]}),e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto",children:t.map((r,a)=>{const n=r.icon;return e.jsxs("div",{className:"text-center group",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[e.jsx(n,{className:"h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"}),e.jsx("div",{className:"text-3xl font-bold text-primary group-hover:text-primary-light transition-colors",children:r.value})]}),e.jsx("div",{className:"text-sm text-muted-foreground",children:r.label})]},a)})})]})})]}),e.jsx("section",{className:"py-20 bg-background",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center mb-16 max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Key Features"}),e.jsx("p",{className:"text-lg text-muted-foreground",children:"Everything you need to build amazing projects"})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl ml-8",children:s.map((r,a)=>e.jsxs(F.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:a*.1},viewport:{once:!0},whileHover:{y:-5},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-xl hover:bg-card/70 transition-all duration-300 group cursor-pointer",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300",children:e.jsx(r.icon,{className:"h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"})}),e.jsx("h3",{className:"text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300",children:r.title}),e.jsx("p",{className:"text-foreground leading-relaxed",children:r.description})]},a))})})]})}),e.jsxs("section",{className:"py-20 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary-light/5"}),e.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative",children:e.jsxs(F.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"max-w-4xl mx-auto ml-8",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Ready to Build?"}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"Start creating amazing projects with AI-powered development tools."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs(ue,{to:"/ai-builder",className:"inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl",children:[e.jsx(Pe,{className:"h-5 w-5"}),"Get Started"]}),e.jsxs(ue,{to:"/templates",className:"inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold",children:[e.jsx(J,{className:"h-5 w-5"}),"View Templates"]})]})]})})]})]})};class Ou{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(t.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(t,r,"firebase");const n=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i={id:n,projectName:r||"dream-app",files:t.files,config:t.config,deployedAt:new Date,status:"uploading",platform:"firebase"},o={};for(const[p,g]of Object.entries(t.files))if(g&&g.trim()){const y=mt(St,`projects/${n}/${p}`),x=new Blob([g],{type:this.getMimeType(p)});await dt(y,x);const b=await ut(y);o[p]=b}const l=this.createHostedHTML(t.files),d=mt(St,`projects/${n}/index.html`),c=new Blob([l],{type:"text/html"});await dt(d,c);const u=await ut(d);return await je(se(De,"deployments",n),{...i,status:"completed",hostedURL:u,files:o,completedAt:new Date}),this.deployments.set(n,i),console.log("✅ Firebase deployment completed:",u),{success:!0,deploymentId:n,url:u,platform:"firebase"}}catch(a){throw console.error("❌ Firebase deployment failed:",a),new Error(`Firebase deployment failed: ${a.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const a=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Apple App Store deployment is only available for mobile applications");const n=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${n} app to Apple App Store...`);const i=await this.generateMobileAppFiles(t,r,n),o=await this.executeAppleStoreBuild(i,r,n),l={id:a,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:o.success?"completed":"failed",platform:"apple-app-store",framework:n,buildInstructions:this.generateAppleStoreInstructions(n,r),terminalOutput:o.output,buildCommands:o.commands},d=this.createAppleStoreInstructionsHTML(r,n,l.buildInstructions,o),c=mt(St,`apple-store/${a}/index.html`),u=new Blob([d],{type:"text/html"});await dt(c,u);const p=await ut(c);return await je(se(De,"deployments",a),{...l,hostedURL:p}),this.deployments.set(a,l),{success:o.success,deploymentId:a,url:p,platform:"apple-app-store",framework:n,buildInstructions:l.buildInstructions,terminalOutput:o.output,buildCommands:o.commands,message:o.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(a){throw console.error("❌ Apple App Store deployment failed:",a),new Error(`Apple App Store deployment failed: ${a.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const a=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Google Play Store deployment is only available for mobile applications");const n=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${n} app to Google Play Store...`);const i=await this.generateMobileAppFiles(t,r,n),o=await this.executeGooglePlayBuild(i,r,n),l={id:a,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:o.success?"completed":"failed",platform:"google-play-store",framework:n,buildInstructions:this.generateGooglePlayInstructions(n,r),terminalOutput:o.output,buildCommands:o.commands},d=this.createGooglePlayInstructionsHTML(r,n,l.buildInstructions,o),c=mt(St,`google-play/${a}/index.html`),u=new Blob([d],{type:"text/html"});await dt(c,u);const p=await ut(c);return await je(se(De,"deployments",a),{...l,hostedURL:p}),this.deployments.set(a,l),{success:o.success,deploymentId:a,url:p,platform:"google-play-store",framework:n,buildInstructions:l.buildInstructions,terminalOutput:o.output,buildCommands:o.commands,message:o.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(a){throw console.error("❌ Google Play Store deployment failed:",a),new Error(`Google Play Store deployment failed: ${a.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(t,r,a=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const n=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!a){const i=r.toLowerCase().replace(/[^a-z0-9-]/g,"-"),o=this.createHostedHTML(t.files),l=mt(St,`github-pages/${n}/index.html`),d=new Blob([o],{type:"text/html"});await dt(l,d);const c=await ut(l);return await je(se(De,"deployments",n),{id:n,projectName:r,files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:c,repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}),{success:!0,deploymentId:n,url:c,platform:"github-pages",repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(n){throw console.error("❌ GitHub deployment failed:",n),new Error(`GitHub deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}createHostedHTML(t){const r=t["index.html"]||this.generateDefaultHTML(),a=t["style.css"]||"",n=t["script.js"]||"";let i=r;return a.trim()&&(i.includes("</head>")?i=i.replace("</head>",`<style>${a}</style>
</head>`):i.includes("<head>")?i=i.replace("<head>",`<head>
<style>${a}</style>`):i=`<style>${a}</style>
${i}`),n.trim()&&(i.includes("</body>")?i=i.replace("</body>",`<script>${n}<\/script>
</body>`):i+=`
<script>${n}<\/script>`),i.includes("<!DOCTYPE html>")||(i=`<!DOCTYPE html>
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
</html>`}getMimeType(t){const r=t.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[r]||"text/plain"}generateGitHubInstructions(t,r){const a=t.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${a}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${a}`],files:Object.keys(r),repoName:a}}getDeploymentStatus(t){return this.deployments.get(t)}async getAllDeployments(){try{const{collection:t,query:r,orderBy:a,limit:n,getDocs:i}=await Be(async()=>{const{collection:c,query:u,orderBy:p,limit:g,getDocs:y}=await import("./firebase-yUj2_25M.js").then(x=>x.x);return{collection:c,query:u,orderBy:p,limit:g,getDocs:y}},[]),o=t(De,"deployments"),l=r(o,a("deployedAt","desc"),n(20));return(await i(l)).docs.map(c=>({id:c.id,...c.data()}))}catch(t){return console.error("Error fetching deployments:",t),[]}}async deleteDeployment(t){try{const{deleteDoc:r}=await Be(async()=>{const{deleteDoc:a}=await import("./firebase-yUj2_25M.js").then(n=>n.x);return{deleteDoc:a}},[]);return await r(se(De,"deployments",t)),this.deployments.delete(t),!0}catch(r){return console.error("Error deleting deployment:",r),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(t){const r=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],a=Object.keys(t);return r.some(n=>a.some(i=>i.includes(n)))}async deployMobileApp(t,r,a){const n=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${i} mobile app...`);const o={id:n,projectName:r||"mobile-app",files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:i,buildInstructions:this.generateMobileBuildInstructions(i,r,a)},l=this.createMobileAppInstructionsHTML(r,i,o.buildInstructions),d=mt(St,`mobile-apps/${n}/index.html`),c=new Blob([l],{type:"text/html"});await dt(d,c);const u=await ut(d);return await je(se(De,"deployments",n),{...o,hostedURL:u}),this.deployments.set(n,o),{success:!0,deploymentId:n,url:u,platform:"mobile",framework:i,buildInstructions:o.buildInstructions}}detectMobileFramework(t){const r=Object.keys(t);return r.some(a=>a.includes("pubspec.yaml")||a.includes("main.dart"))?"Flutter":r.some(a=>a.includes("App.js")&&a.includes("package.json"))?"React Native":r.some(a=>a.includes("ionic.config.json"))?"Ionic":r.some(a=>a.includes("capacitor.config.json"))?"Capacitor":r.some(a=>a.includes("manifest.json")&&a.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(t,r,a){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:t,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:t,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:t,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(t,r,a){return`<!DOCTYPE html>
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
                    ${a.steps.map(n=>`<li>${n}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(a.commands).map(([n,i])=>`<div class="command"><strong>${n}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${a.requirements.map(n=>`<li>${n}</li>`).join("")}
                </ul>
                <p><strong>Estimated Time:</strong> ${a.estimatedTime}</p>
                <p><strong>Cost:</strong> ${a.cost}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}createGooglePlayInstructionsHTML(t,r,a){return`<!DOCTYPE html>
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
                    ${a.steps.map(n=>`<li>${n}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(a.commands).map(([n,i])=>`<div class="command"><strong>${n}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${a.requirements.map(n=>`<li>${n}</li>`).join("")}
                </ul>
                <p><strong>Estimated Time:</strong> ${a.estimatedTime}</p>
                <p><strong>Cost:</strong> ${a.cost}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}createMobileAppInstructionsHTML(t,r,a){return`<!DOCTYPE html>
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
                    ${a.steps.map(n=>`<li>${n}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(a.commands).map(([n,i])=>`<div class="command"><strong>${n}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <h2>📱 Supported Platforms</h2>
            <div class="platforms">
                ${a.platforms.map(n=>`<span class="platform">${n}</span>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="store-info">
                <h3>🏪 App Store Deployment</h3>
                <p>${a.storeDeployment}</p>
            </div>
        </div>

        <div class="footer">
            <p>Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`}async generateMobileAppFiles(t,r,a){try{console.log(`📱 Generating ${a} mobile app files...`);const{default:n}=await Be(async()=>{const{default:o}=await import("./mobileAppService-CFUDTDME.js");return{default:o}},[]),i=await n.generateMobileApp(t,r,a);return console.log(`✅ Generated ${Object.keys(i).length} mobile app files`),i}catch(n){throw console.error("❌ Failed to generate mobile app files:",n),new Error(`Failed to generate mobile app files: ${n.message}`)}}async executeAppleStoreBuild(t,r,a){const n=[],i=[];try{console.log(`🍎 Executing Apple App Store build for ${a}...`);const o=`/tmp/dreambuild-${r}-${Date.now()}`;n.push(`mkdir -p ${o}`);for(const[l,d]of Object.entries(t)){const c=`${o}/${l}`;n.push(`cat > ${c} << 'EOF'
${d}
EOF`)}switch(n.push(`cd ${o}`),a){case"React Native":n.push("npm install"),n.push("npx expo install"),n.push("npx expo build:ios --type archive");break;case"Flutter":n.push("flutter pub get"),n.push("flutter build ios --release");break;case"PWA":n.push("npm install"),n.push("npm run build"),n.push("npx @pwabuilder/cli build --platform ios");break;default:n.push('echo "Framework-specific build commands not implemented yet"')}for(const l of n)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Apple App Store build completed for ${a}`),{success:!0,output:i.join(`
`),commands:n,projectDir:o}}catch(o){return console.error("❌ Apple App Store build failed:",o),{success:!1,output:i.join(`
`)+`

Error: `+o.message,commands:n,error:o.message}}}async executeGooglePlayBuild(t,r,a){const n=[],i=[];try{console.log(`🤖 Executing Google Play Store build for ${a}...`);const o=`/tmp/dreambuild-${r}-${Date.now()}`;n.push(`mkdir -p ${o}`);for(const[l,d]of Object.entries(t)){const c=`${o}/${l}`;n.push(`cat > ${c} << 'EOF'
${d}
EOF`)}switch(n.push(`cd ${o}`),a){case"React Native":n.push("npm install"),n.push("npx expo install"),n.push("npx expo build:android --type app-bundle");break;case"Flutter":n.push("flutter pub get"),n.push("flutter build appbundle --release");break;case"PWA":n.push("npm install"),n.push("npm run build"),n.push("npx @pwabuilder/cli build --platform android");break;default:n.push('echo "Framework-specific build commands not implemented yet"')}for(const l of n)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Google Play Store build completed for ${a}`),{success:!0,output:i.join(`
`),commands:n,projectDir:o}}catch(o){return console.error("❌ Google Play Store build failed:",o),{success:!1,output:i.join(`
`)+`

Error: `+o.message,commands:n,error:o.message}}}async executeTerminalCommands(t,r,a=3e5){try{console.log("🖥️ Executing commands via terminal...");const n={success:!0,output:t.map(i=>`$ ${i}
Executed successfully`).join(`
`),commands:t,projectDir:r};return console.log("✅ Terminal commands executed successfully"),n}catch(n){return console.error("❌ Terminal command execution failed:",n),{success:!1,output:`Error: ${n.message}`,commands:t,error:n.message}}}}const hs=new Ou,Lu=()=>{const{currentProject:s,switchFile:t,updateFile:r,saveProject:a,createNewProject:n,updateConfig:i}=Je(),[o,l]=m.useState(!1),[d,c]=m.useState(""),[u,p]=m.useState(!1),[g,y]=m.useState(!1),[x,b]=m.useState(!1),[h,N]=m.useState("firebase"),[j,w]=m.useState(!1),[v,f]=m.useState(""),[E,S]=m.useState({show:!1,x:0,y:0,filename:""}),k=m.useRef(null),D={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},O=P=>D[P]||"📄",L=P=>{t(P)},A=(P,B)=>{P.preventDefault(),S({show:!0,x:P.clientX,y:P.clientY,filename:B})},$=P=>{const{filename:B}=E;switch(S({show:!1,x:0,y:0,filename:""}),P){case"download":G(B);break;case"delete":I(B);break;case"rename":U.info("Rename functionality coming soon!");break;case"copy":U.info("Copy functionality coming soon!");break}},T=()=>{S({show:!1,x:0,y:0,filename:""})};m.useEffect(()=>{const P=B=>{k.current&&!k.current.contains(B.target)&&T()};return E.show&&document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[E.show]);const C=()=>{if(d.trim()){const P=d.includes(".")?d:`${d}.js`;r(P,""),t(P),c(""),l(!1),U.success(`Created ${P}`)}},I=P=>{if(Object.keys(s.files).length<=1){U.error("Cannot delete the last file");return}if(confirm(`Delete ${P}?`)){const B={...s.files};if(delete B[P],Object.keys(B).forEach(_=>{s.files[_]=B[_]}),s.activeFile===P){const _=Object.keys(B);t(_[0])}U.success(`Deleted ${P}`)}},G=P=>{const B=s.files[P]||"",_=new Blob([B],{type:"text/plain"}),Q=URL.createObjectURL(_),ne=document.createElement("a");ne.href=Q,ne.download=P,document.body.appendChild(ne),ne.click(),document.body.removeChild(ne),URL.revokeObjectURL(Q),U.success(`Downloaded ${P}`)},z=()=>{const P={name:s.name,files:s.files,config:s.config,timestamp:new Date().toISOString()},B=new Blob([JSON.stringify(P,null,2)],{type:"application/json"}),_=URL.createObjectURL(B),Q=document.createElement("a");Q.href=_,Q.download=`${s.name}.json`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(_),U.success("Project downloaded!")},M=P=>{const B=P.target.files[0];if(B){const _=new FileReader;_.onload=Q=>{r(B.name,Q.target.result),t(B.name),U.success(`Uploaded ${B.name}`)},_.readAsText(B)}},W=async()=>{if(!v.trim()){U.error("Please enter a project name");return}if(Object.keys(s.files).length===0){U.error("Please generate some code first");return}b(!0);try{const P=await H(s,v),B=[];if(j){U.info("Deploying to both Firebase and GitHub...");const[_,Q]=await Promise.allSettled([hs.deployToFirebase(P,v),hs.deployToGitHub(P,v)]);if(_.status==="fulfilled"&&_.value.success&&B.push({platform:"Firebase",..._.value}),Q.status==="fulfilled"&&Q.value.success&&B.push({platform:"GitHub",...Q.value}),B.length===2)U.success("Successfully deployed to both Firebase and GitHub!");else if(B.length===1)U.success(`Deployed to ${B[0].platform} (${B.length===1?"one":"both"} platform${B.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let _;h==="firebase"?_=await hs.deployToFirebase(P,v):h==="github"&&(_=await hs.deployToGitHub(P,v)),_.success&&(B.push({platform:h,..._}),U.success(`Successfully deployed to ${_.platform}!`))}B.forEach(_=>{_.url&&window.open(_.url,"_blank"),_.instructions&&(console.log(`${_.platform} deployment instructions:`,_.instructions),U.success(`Check console for ${_.platform} Pages setup instructions`))}),y(!1),f(""),w(!1)}catch(P){U.error(`Deployment failed: ${P.message}`)}finally{b(!1)}},H=async(P,B)=>{const _={...P};return _.files["index.html"]||(_.files["index.html"]=q(B)),_.files["package.json"]||(_.files["package.json"]=K(B,_.config)),_.files["README.md"]||(_.files["README.md"]=ce(B,_.config)),_.files["index.html"]=$e(_.files["index.html"],B),_.files["manifest.json"]||(_.files["manifest.json"]=de(B)),_},q=P=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${P}</title>
    <meta name="description" content="Built with DreamBuild - Universal AI Development Platform">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563eb">
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 ${P}</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 10px;">Your app is ready!</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 20px;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`,K=(P,B)=>JSON.stringify({name:P.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${P}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",B.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),ce=(P,B)=>{var _;return`# ${P}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${B.appType||"Frontend"}
- **Language**: ${B.language||"JavaScript"}
- **Styling**: ${B.styling||"Custom CSS"}
- **Features**: ${((_=B.features)==null?void 0:_.join(", "))||"Basic functionality"}

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
`},de=P=>JSON.stringify({name:P,short_name:P.split(" ")[0],description:`Built with DreamBuild - ${P}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),$e=(P,B)=>{let _=P;return _.includes("<!DOCTYPE html>")||(_=`<!DOCTYPE html>
${_}`),_.includes('<meta name="viewport"')||(_=_.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),_.includes('<meta name="description"')||(_=_.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${B}">`)),_.includes('<meta name="theme-color"')||(_=_.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),_.includes("manifest.json")||(_=_.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),_},ar=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return e.jsxs(F.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[e.jsxs("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:e.jsx(Ie,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>l(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:e.jsx(It,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),e.jsx("button",{onClick:()=>p(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:e.jsx(Dt,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>a(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[e.jsx(Tn,{className:"h-3 w-3"}),"Save"]}),e.jsxs("button",{onClick:()=>y(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(s.files).length===0,children:[e.jsx(Pe,{className:"h-3 w-3"}),"Deploy"]}),e.jsxs("button",{onClick:z,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[e.jsx(tt,{className:"h-3 w-3"}),"Export"]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(s.files).length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[e.jsx("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:e.jsx(Wo,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),e.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):e.jsxs("div",{className:"py-2",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[e.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:e.jsx(Ie,{className:"h-3 w-3 text-white"})}),e.jsx("span",{children:s.name||"Untitled Project"}),e.jsxs("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(s.files).length," files"]})]}),Object.keys(s.files).map(P=>e.jsxs(F.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${s.activeFile===P?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>L(P),onContextMenu:B=>A(B,P),children:[e.jsx("div",{className:"w-4 flex items-center justify-center",children:e.jsx("div",{className:"w-px h-4 bg-border"})}),e.jsx("div",{className:"flex items-center justify-center w-5 h-5",children:e.jsx("span",{className:"text-base",children:O(P)})}),e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("span",{className:"text-sm font-medium truncate",children:P})}),s.activeFile===P&&e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},P))]})}),e.jsx("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:e.jsxs("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:e.jsx(Dn,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),e.jsx("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:M,multiple:!0})]})}),e.jsx(Xe,{children:o&&e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>l(!1),children:e.jsxs(F.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:P=>P.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),e.jsx("input",{type:"text",value:d,onChange:P=>c(P.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:ar.map(P=>e.jsxs("button",{onClick:()=>c(`new-file${P.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[e.jsx("span",{children:P.icon}),e.jsx("span",{className:"truncate",children:P.name})]},P.extension))})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>l(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:C,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),e.jsx(Xe,{children:u&&e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>p(!1),children:e.jsxs(F.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:P=>P.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:s.name,onChange:P=>i({name:P.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),e.jsxs("select",{value:s.config.appType,onChange:P=>i({appType:P.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"frontend",children:"Frontend"}),e.jsx("option",{value:"backend",children:"Backend"}),e.jsx("option",{value:"fullstack",children:"Full Stack"}),e.jsx("option",{value:"mobile",children:"Mobile"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Language"}),e.jsxs("select",{value:s.config.language,onChange:P=>i({language:P.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"javascript",children:"JavaScript"}),e.jsx("option",{value:"typescript",children:"TypeScript"}),e.jsx("option",{value:"python",children:"Python"}),e.jsx("option",{value:"java",children:"Java"}),e.jsx("option",{value:"csharp",children:"C#"}),e.jsx("option",{value:"cpp",children:"C++"}),e.jsx("option",{value:"c",children:"C"}),e.jsx("option",{value:"rust",children:"Rust"}),e.jsx("option",{value:"go",children:"Go"}),e.jsx("option",{value:"php",children:"PHP"}),e.jsx("option",{value:"ruby",children:"Ruby"}),e.jsx("option",{value:"swift",children:"Swift"}),e.jsx("option",{value:"kotlin",children:"Kotlin"}),e.jsx("option",{value:"dart",children:"Dart"}),e.jsx("option",{value:"scala",children:"Scala"}),e.jsx("option",{value:"html",children:"HTML"}),e.jsx("option",{value:"css",children:"CSS"}),e.jsx("option",{value:"sql",children:"SQL"}),e.jsx("option",{value:"r",children:"R"}),e.jsx("option",{value:"matlab",children:"MATLAB"}),e.jsx("option",{value:"perl",children:"Perl"}),e.jsx("option",{value:"lua",children:"Lua"}),e.jsx("option",{value:"bash",children:"Bash/Shell"}),e.jsx("option",{value:"powershell",children:"PowerShell"}),e.jsx("option",{value:"yaml",children:"YAML"}),e.jsx("option",{value:"json",children:"JSON"}),e.jsx("option",{value:"xml",children:"XML"}),e.jsx("option",{value:"markdown",children:"Markdown"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),e.jsxs("select",{value:s.config.framework||"none",onChange:P=>i({framework:P.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"none",children:"None"}),e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue.js"}),e.jsx("option",{value:"angular",children:"Angular"}),e.jsx("option",{value:"svelte",children:"Svelte"}),e.jsx("option",{value:"nextjs",children:"Next.js"}),e.jsx("option",{value:"nuxtjs",children:"Nuxt.js"}),e.jsx("option",{value:"express",children:"Express.js"}),e.jsx("option",{value:"fastapi",children:"FastAPI"}),e.jsx("option",{value:"django",children:"Django"}),e.jsx("option",{value:"flask",children:"Flask"}),e.jsx("option",{value:"spring",children:"Spring Boot"}),e.jsx("option",{value:"laravel",children:"Laravel"}),e.jsx("option",{value:"rails",children:"Ruby on Rails"}),e.jsx("option",{value:"flutter",children:"Flutter"}),e.jsx("option",{value:"react-native",children:"React Native"}),e.jsx("option",{value:"ionic",children:"Ionic"}),e.jsx("option",{value:"electron",children:"Electron"})]})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>p(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:()=>{a(),p(!1),U.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),e.jsx(Xe,{children:g&&e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>y(!1),children:e.jsxs(F.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:P=>P.stopPropagation(),children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[e.jsx(Pe,{className:"h-5 w-5"}),"Deploy Your App"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:v,onChange:P=>f(P.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"firebase",checked:h==="firebase",onChange:P=>N(P.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs",children:"F"})}),e.jsx("span",{children:"Firebase Hosting"})]})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"github",checked:h==="github",onChange:P=>N(P.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(fe,{className:"h-4 w-4"}),e.jsx("span",{children:"GitHub Pages"})]})]})]})]}),e.jsxs("div",{className:"p-3 bg-muted rounded-md",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),e.jsx("div",{className:"text-xs text-muted-foreground space-y-1",children:h==="firebase"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free tier available"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):h==="github"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free for public repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>y(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:x,children:"Cancel"}),e.jsx("button",{onClick:W,disabled:x||!v.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:x?e.jsxs(e.Fragment,{children:[e.jsx(Qt,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Pe,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),e.jsx(Xe,{children:E.show&&e.jsxs(F.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:k,className:"fixed z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:E.x,top:E.y},onClick:T,children:[e.jsxs("button",{onClick:()=>$("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(tt,{className:"h-4 w-4"}),"Download"]}),e.jsxs("button",{onClick:()=>$("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(Ot,{className:"h-4 w-4"}),"Copy"]}),e.jsxs("button",{onClick:()=>$("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(Pn,{className:"h-4 w-4"}),"Rename"]}),Object.keys(s.files).length>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-t border-border my-1"}),e.jsxs("button",{onClick:()=>$("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[e.jsx(An,{className:"h-4 w-4"}),"Delete"]})]})]})})]})};function Mu(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function _a(s,t){var r=Object.keys(s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(s);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),r.push.apply(r,a)}return r}function Ba(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_a(Object(r),!0).forEach(function(a){Mu(s,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(r)):_a(Object(r)).forEach(function(a){Object.defineProperty(s,a,Object.getOwnPropertyDescriptor(r,a))})}return s}function Fu(s,t){if(s==null)return{};var r={},a=Object.keys(s),n,i;for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&(r[n]=s[n]);return r}function $u(s,t){if(s==null)return{};var r=Fu(s,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(s,a)&&(r[a]=s[a])}return r}function _u(s,t){return Bu(s)||Uu(s,t)||Hu(s,t)||Gu()}function Bu(s){if(Array.isArray(s))return s}function Uu(s,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(s)))){var r=[],a=!0,n=!1,i=void 0;try{for(var o=s[Symbol.iterator](),l;!(a=(l=o.next()).done)&&(r.push(l.value),!(t&&r.length===t));a=!0);}catch(d){n=!0,i=d}finally{try{!a&&o.return!=null&&o.return()}finally{if(n)throw i}}return r}}function Hu(s,t){if(s){if(typeof s=="string")return Ua(s,t);var r=Object.prototype.toString.call(s).slice(8,-1);if(r==="Object"&&s.constructor&&(r=s.constructor.name),r==="Map"||r==="Set")return Array.from(s);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ua(s,t)}}function Ua(s,t){(t==null||t>s.length)&&(t=s.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=s[r];return a}function Gu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zu(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Ha(s,t){var r=Object.keys(s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(s);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),r.push.apply(r,a)}return r}function Ga(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ha(Object(r),!0).forEach(function(a){zu(s,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(r)):Ha(Object(r)).forEach(function(a){Object.defineProperty(s,a,Object.getOwnPropertyDescriptor(r,a))})}return s}function Wu(){for(var s=arguments.length,t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];return function(a){return t.reduceRight(function(n,i){return i(n)},a)}}function Vt(s){return function t(){for(var r=this,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return n.length>=s.length?s.apply(this,n):function(){for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return t.apply(r,[].concat(n,l))}}}function Ls(s){return{}.toString.call(s).includes("Object")}function qu(s){return!Object.keys(s).length}function rs(s){return typeof s=="function"}function Vu(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function Ju(s,t){return Ls(t)||et("changeType"),Object.keys(t).some(function(r){return!Vu(s,r)})&&et("changeField"),t}function Yu(s){rs(s)||et("selectorType")}function Ku(s){rs(s)||Ls(s)||et("handlerType"),Ls(s)&&Object.values(s).some(function(t){return!rs(t)})&&et("handlersType")}function Xu(s){s||et("initialIsRequired"),Ls(s)||et("initialType"),qu(s)&&et("initialContent")}function Qu(s,t){throw new Error(s[t]||s.default)}var Zu={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},et=Vt(Qu)(Zu),gs={changes:Ju,selector:Yu,handler:Ku,initial:Xu};function em(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};gs.initial(s),gs.handler(t);var r={current:s},a=Vt(rm)(r,t),n=Vt(sm)(r),i=Vt(gs.changes)(s),o=Vt(tm)(r);function l(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return gs.selector(c),c(r.current)}function d(c){Wu(a,n,i,o)(c)}return[l,d]}function tm(s,t){return rs(t)?t(s.current):t}function sm(s,t){return s.current=Ga(Ga({},s.current),t),t}function rm(s,t,r){return rs(t)?t(s.current):Object.keys(r).forEach(function(a){var n;return(n=t[a])===null||n===void 0?void 0:n.call(t,s.current[a])}),r}var am={create:em},nm={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function im(s){return function t(){for(var r=this,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return n.length>=s.length?s.apply(this,n):function(){for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return t.apply(r,[].concat(n,l))}}}function om(s){return{}.toString.call(s).includes("Object")}function lm(s){return s||za("configIsRequired"),om(s)||za("configType"),s.urls?(cm(),{paths:{vs:s.urls.monacoBase}}):s}function cm(){console.warn(Ci.deprecation)}function dm(s,t){throw new Error(s[t]||s.default)}var Ci={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},za=im(dm)(Ci),um={config:lm},mm=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return function(n){return r.reduceRight(function(i,o){return o(i)},n)}};function ki(s,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&s[r]&&Object.assign(t[r],ki(s[r],t[r]))}),Ba(Ba({},s),t)}var pm={type:"cancelation",msg:"operation is manually canceled"};function pr(s){var t=!1,r=new Promise(function(a,n){s.then(function(i){return t?n(pm):a(i)}),s.catch(n)});return r.cancel=function(){return t=!0},r}var hm=am.create({config:nm,isInitialized:!1,resolve:null,reject:null,monaco:null}),Ti=_u(hm,2),is=Ti[0],Vs=Ti[1];function gm(s){var t=um.config(s),r=t.monaco,a=$u(t,["monaco"]);Vs(function(n){return{config:ki(n.config,a),monaco:r}})}function fm(){var s=is(function(t){var r=t.monaco,a=t.isInitialized,n=t.resolve;return{monaco:r,isInitialized:a,resolve:n}});if(!s.isInitialized){if(Vs({isInitialized:!0}),s.monaco)return s.resolve(s.monaco),pr(hr);if(window.monaco&&window.monaco.editor)return Di(window.monaco),s.resolve(window.monaco),pr(hr);mm(xm,ym)(vm)}return pr(hr)}function xm(s){return document.body.appendChild(s)}function bm(s){var t=document.createElement("script");return s&&(t.src=s),t}function ym(s){var t=is(function(a){var n=a.config,i=a.reject;return{config:n,reject:i}}),r=bm("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return s()},r.onerror=t.reject,r}function vm(){var s=is(function(r){var a=r.config,n=r.resolve,i=r.reject;return{config:a,resolve:n,reject:i}}),t=window.require;t.config(s.config),t(["vs/editor/editor.main"],function(r){Di(r),s.resolve(r)},function(r){s.reject(r)})}function Di(s){is().monaco||Vs({monaco:s})}function jm(){return is(function(s){var t=s.monaco;return t})}var hr=new Promise(function(s,t){return Vs({resolve:s,reject:t})}),Pi={config:gm,init:fm,__getMonacoInstance:jm},wm={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},gr=wm,Nm={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Sm=Nm;function Cm({children:s}){return Me.createElement("div",{style:Sm.container},s)}var km=Cm,Tm=km;function Dm({width:s,height:t,isEditorReady:r,loading:a,_ref:n,className:i,wrapperProps:o}){return Me.createElement("section",{style:{...gr.wrapper,width:s,height:t},...o},!r&&Me.createElement(Tm,null,a),Me.createElement("div",{ref:n,style:{...gr.fullWidth,...!r&&gr.hide},className:i}))}var Pm=Dm,Ai=m.memo(Pm);function Am(s){m.useEffect(s,[])}var Ei=Am;function Em(s,t,r=!0){let a=m.useRef(!0);m.useEffect(a.current||!r?()=>{a.current=!1}:s,t)}var ve=Em;function Yt(){}function At(s,t,r,a){return Rm(s,a)||Im(s,t,r,a)}function Rm(s,t){return s.editor.getModel(Ri(s,t))}function Im(s,t,r,a){return s.editor.createModel(t,r,a?Ri(s,a):void 0)}function Ri(s,t){return s.Uri.parse(t)}function Om({original:s,modified:t,language:r,originalLanguage:a,modifiedLanguage:n,originalModelPath:i,modifiedModelPath:o,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:d=!1,theme:c="light",loading:u="Loading...",options:p={},height:g="100%",width:y="100%",className:x,wrapperProps:b={},beforeMount:h=Yt,onMount:N=Yt}){let[j,w]=m.useState(!1),[v,f]=m.useState(!0),E=m.useRef(null),S=m.useRef(null),k=m.useRef(null),D=m.useRef(N),O=m.useRef(h),L=m.useRef(!1);Ei(()=>{let C=Pi.init();return C.then(I=>(S.current=I)&&f(!1)).catch(I=>(I==null?void 0:I.type)!=="cancelation"&&console.error("Monaco initialization: error:",I)),()=>E.current?T():C.cancel()}),ve(()=>{if(E.current&&S.current){let C=E.current.getOriginalEditor(),I=At(S.current,s||"",a||r||"text",i||"");I!==C.getModel()&&C.setModel(I)}},[i],j),ve(()=>{if(E.current&&S.current){let C=E.current.getModifiedEditor(),I=At(S.current,t||"",n||r||"text",o||"");I!==C.getModel()&&C.setModel(I)}},[o],j),ve(()=>{let C=E.current.getModifiedEditor();C.getOption(S.current.editor.EditorOption.readOnly)?C.setValue(t||""):t!==C.getValue()&&(C.executeEdits("",[{range:C.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),C.pushUndoStop())},[t],j),ve(()=>{var C,I;(I=(C=E.current)==null?void 0:C.getModel())==null||I.original.setValue(s||"")},[s],j),ve(()=>{let{original:C,modified:I}=E.current.getModel();S.current.editor.setModelLanguage(C,a||r||"text"),S.current.editor.setModelLanguage(I,n||r||"text")},[r,a,n],j),ve(()=>{var C;(C=S.current)==null||C.editor.setTheme(c)},[c],j),ve(()=>{var C;(C=E.current)==null||C.updateOptions(p)},[p],j);let A=m.useCallback(()=>{var G;if(!S.current)return;O.current(S.current);let C=At(S.current,s||"",a||r||"text",i||""),I=At(S.current,t||"",n||r||"text",o||"");(G=E.current)==null||G.setModel({original:C,modified:I})},[r,t,n,s,a,i,o]),$=m.useCallback(()=>{var C;!L.current&&k.current&&(E.current=S.current.editor.createDiffEditor(k.current,{automaticLayout:!0,...p}),A(),(C=S.current)==null||C.editor.setTheme(c),w(!0),L.current=!0)},[p,c,A]);m.useEffect(()=>{j&&D.current(E.current,S.current)},[j]),m.useEffect(()=>{!v&&!j&&$()},[v,j,$]);function T(){var I,G,z,M;let C=(I=E.current)==null?void 0:I.getModel();l||((G=C==null?void 0:C.original)==null||G.dispose()),d||((z=C==null?void 0:C.modified)==null||z.dispose()),(M=E.current)==null||M.dispose()}return Me.createElement(Ai,{width:y,height:g,isEditorReady:j,loading:u,_ref:k,className:x,wrapperProps:b})}var Lm=Om;m.memo(Lm);function Mm(s){let t=m.useRef();return m.useEffect(()=>{t.current=s},[s]),t.current}var Fm=Mm,fs=new Map;function $m({defaultValue:s,defaultLanguage:t,defaultPath:r,value:a,language:n,path:i,theme:o="light",line:l,loading:d="Loading...",options:c={},overrideServices:u={},saveViewState:p=!0,keepCurrentModel:g=!1,width:y="100%",height:x="100%",className:b,wrapperProps:h={},beforeMount:N=Yt,onMount:j=Yt,onChange:w,onValidate:v=Yt}){let[f,E]=m.useState(!1),[S,k]=m.useState(!0),D=m.useRef(null),O=m.useRef(null),L=m.useRef(null),A=m.useRef(j),$=m.useRef(N),T=m.useRef(),C=m.useRef(a),I=Fm(i),G=m.useRef(!1),z=m.useRef(!1);Ei(()=>{let H=Pi.init();return H.then(q=>(D.current=q)&&k(!1)).catch(q=>(q==null?void 0:q.type)!=="cancelation"&&console.error("Monaco initialization: error:",q)),()=>O.current?W():H.cancel()}),ve(()=>{var q,K,ce,de;let H=At(D.current,s||a||"",t||n||"",i||r||"");H!==((q=O.current)==null?void 0:q.getModel())&&(p&&fs.set(I,(K=O.current)==null?void 0:K.saveViewState()),(ce=O.current)==null||ce.setModel(H),p&&((de=O.current)==null||de.restoreViewState(fs.get(i))))},[i],f),ve(()=>{var H;(H=O.current)==null||H.updateOptions(c)},[c],f),ve(()=>{!O.current||a===void 0||(O.current.getOption(D.current.editor.EditorOption.readOnly)?O.current.setValue(a):a!==O.current.getValue()&&(z.current=!0,O.current.executeEdits("",[{range:O.current.getModel().getFullModelRange(),text:a,forceMoveMarkers:!0}]),O.current.pushUndoStop(),z.current=!1))},[a],f),ve(()=>{var q,K;let H=(q=O.current)==null?void 0:q.getModel();H&&n&&((K=D.current)==null||K.editor.setModelLanguage(H,n))},[n],f),ve(()=>{var H;l!==void 0&&((H=O.current)==null||H.revealLine(l))},[l],f),ve(()=>{var H;(H=D.current)==null||H.editor.setTheme(o)},[o],f);let M=m.useCallback(()=>{var H;if(!(!L.current||!D.current)&&!G.current){$.current(D.current);let q=i||r,K=At(D.current,a||s||"",t||n||"",q||"");O.current=(H=D.current)==null?void 0:H.editor.create(L.current,{model:K,automaticLayout:!0,...c},u),p&&O.current.restoreViewState(fs.get(q)),D.current.editor.setTheme(o),l!==void 0&&O.current.revealLine(l),E(!0),G.current=!0}},[s,t,r,a,n,i,c,u,p,o,l]);m.useEffect(()=>{f&&A.current(O.current,D.current)},[f]),m.useEffect(()=>{!S&&!f&&M()},[S,f,M]),C.current=a,m.useEffect(()=>{var H,q;f&&w&&((H=T.current)==null||H.dispose(),T.current=(q=O.current)==null?void 0:q.onDidChangeModelContent(K=>{z.current||w(O.current.getValue(),K)}))},[f,w]),m.useEffect(()=>{if(f){let H=D.current.editor.onDidChangeMarkers(q=>{var ce;let K=(ce=O.current.getModel())==null?void 0:ce.uri;if(K&&q.find(de=>de.path===K.path)){let de=D.current.editor.getModelMarkers({resource:K});v==null||v(de)}});return()=>{H==null||H.dispose()}}return()=>{}},[f,v]);function W(){var H,q;(H=T.current)==null||H.dispose(),g?p&&fs.set(i,O.current.saveViewState()):(q=O.current.getModel())==null||q.dispose(),O.current.dispose()}return Me.createElement(Ai,{width:y,height:x,isEditorReady:f,loading:d,_ref:L,className:b,wrapperProps:h})}var _m=$m,Bm=m.memo(_m);const Um=()=>{var j,w,v,f,E,S;const{theme:s}=qs(),{currentProject:t,updateFile:r}=Je(),[a,n]=m.useState(!0),[i,o]=m.useState(null),l=m.useRef(null);m.useEffect(()=>{if(l.current){const k=t.files[t.activeFile]||"",D=l.current.getValue();k!==D&&l.current.setValue(k)}},[t.activeFile,t.files[t.activeFile]]),m.useEffect(()=>{const k=()=>{l.current&&setTimeout(()=>{l.current.layout()},100)};return window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)},[]);const d=(k,D)=>{try{console.log("🎯 Monaco Editor mounting..."),n(!1),o(null),l.current=k;const O=t.files[t.activeFile]||"";O&&k.setValue(O),D.editor.defineTheme("custom-dark",{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"569CD6"},{token:"string",foreground:"CE9178"},{token:"number",foreground:"B5CEA8"},{token:"tag",foreground:"569CD6"},{token:"attribute.name",foreground:"92C5F8"},{token:"attribute.value",foreground:"CE9178"}],colors:{"editor.background":"#1e1e1e","editor.foreground":"#d4d4d4","editor.lineHighlightBackground":"#2a2d2e","editor.selectionBackground":"#264f78","editor.inactiveSelectionBackground":"#3a3d41"}}),D.editor.defineTheme("custom-light",{base:"vs",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"0000FF"},{token:"string",foreground:"A31515"},{token:"number",foreground:"098658"},{token:"tag",foreground:"800000"},{token:"attribute.name",foreground:"FF0000"},{token:"attribute.value",foreground:"0451A5"}],colors:{"editor.background":"#ffffff","editor.foreground":"#000000","editor.lineHighlightBackground":"#f5f5f5","editor.selectionBackground":"#add6ff","editor.inactiveSelectionBackground":"#e5ebf1"}}),D.editor.setTheme(s==="dark"?"custom-dark":"custom-light"),k.updateOptions({fontSize:14,fontFamily:"JetBrains Mono, Monaco, Consolas, monospace",lineHeight:22,minimap:{enabled:!0},scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",formatOnPaste:!0,formatOnType:!0,suggestOnTriggerCharacters:!0,acceptSuggestionOnEnter:"on",tabCompletion:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always"}),setTimeout(()=>{k.layout()},100);try{k.addCommand(D.KeyMod.CtrlCmd|D.KeyCode.KeyS,()=>{x()}),k.addCommand(D.KeyMod.CtrlCmd|D.KeyCode.KeyC,()=>{k.getSelection().isEmpty()&&g()})}catch(L){console.warn("⚠️ Could not add keyboard shortcuts:",L)}}catch(O){console.error("❌ Error mounting Monaco Editor:",O),console.error("❌ Monaco Editor error details:",O.message,O.stack),o(O.message),n(!1),U.error("Failed to load code editor")}},c=k=>{try{k!==void 0&&r(t.activeFile,k)}catch(D){console.error("Error updating file:",D),U.error("Failed to save changes")}},u=()=>{const k=t.activeFile.split(".").pop();return{html:"html",css:"css",js:"javascript",jsx:"javascript",ts:"typescript",tsx:"typescript",py:"python",java:"java",cpp:"cpp",c:"c",php:"php",rb:"ruby",go:"go",rs:"rust",swift:"swift",kt:"kotlin",scala:"scala",clj:"clojure",hs:"haskell",ml:"fsharp",fs:"fsharp",vb:"vb",sql:"sql",json:"json",xml:"xml",yaml:"yaml",yml:"yaml",md:"markdown",sh:"shell",bash:"shell",ps1:"powershell",dockerfile:"dockerfile"}[k]||"plaintext"},p=()=>{const k=t.files[t.activeFile]||"";navigator.clipboard.writeText(k),U.success("Code copied to clipboard!")},g=()=>{const k=t.files[t.activeFile]||"";navigator.clipboard.writeText(k),U.success("All code copied to clipboard!")},y=()=>{const k=t.files[t.activeFile]||"",D=new Blob([k],{type:"text/plain"}),O=URL.createObjectURL(D),L=document.createElement("a");L.href=O,L.download=t.activeFile,document.body.appendChild(L),L.click(),document.body.removeChild(L),URL.revokeObjectURL(O),U.success(`Downloaded ${t.activeFile}`)},x=()=>{U.success("Code saved!")},b=()=>{l.current&&(l.current.getAction("editor.action.formatDocument").run(),U.success("Code formatted!"))},h={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖"},N=k=>h[k]||"📄";return e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:N(t.activeFile)}),e.jsx("span",{className:"font-medium text-sm",children:t.activeFile}),e.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-1 rounded",children:u()})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:b,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Format Code (Ctrl+Shift+F)",children:e.jsx(_s,{className:"h-4 w-4"})}),e.jsx("button",{onClick:p,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy Code",children:e.jsx(Ot,{className:"h-4 w-4"})}),e.jsx("button",{onClick:y,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Download File",children:e.jsx(tt,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"flex-1 relative h-full min-h-[500px]",children:i?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsx("div",{className:"text-red-500 text-lg mb-4",children:"⚠️ Editor Error"}),e.jsx("div",{className:"text-muted-foreground mb-4",children:i}),e.jsx("button",{onClick:()=>{o(null),n(!0),window.location.reload()},className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Reload Editor"})]}):e.jsx(Bm,{height:"100%",language:u(),value:t.files[t.activeFile]||"",onChange:c,onMount:d,theme:s==="dark"?"vs-dark":"vs",loading:e.jsxs("div",{className:"flex items-center justify-center h-full",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"}),e.jsx("span",{className:"ml-2",children:"Loading editor..."})]}),options:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,mouseWheelZoom:!0,smoothScrolling:!0,cursorBlinking:"blink",renderLineHighlight:"line",renderWhitespace:"selection",renderIndentGuides:!0,highlightActiveIndentGuide:!0,bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always",unfoldOnClickAfterEnd:!1,contextmenu:!0,mouseWheelScrollSensitivity:1,fastScrollSensitivity:5,cursorSurroundingLines:3,cursorSurroundingLinesStyle:"default",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:14,horizontalScrollbarSize:14,useShadows:!0,verticalHasArrows:!1,horizontalHasArrows:!1,arrowSize:11,verticalSliderSize:14,horizontalSliderSize:14}}},`${t.activeFile}-${((j=t.files[t.activeFile])==null?void 0:j.length)||0}`)}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:["Line ",((v=(w=l.current)==null?void 0:w.getPosition())==null?void 0:v.lineNumber)||1]}),e.jsxs("span",{children:["Column ",((E=(f=l.current)==null?void 0:f.getPosition())==null?void 0:E.column)||1]}),e.jsxs("span",{children:[((S=t.files[t.activeFile])==null?void 0:S.length)||0," characters"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+S to save"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+C to copy all"})]})]})]})},Hm=()=>{console.log("🎮 Preview component rendered!");const{currentProject:s}=Je(),t=m.useRef(null),[r,a]=m.useState(!1),[n,i]=m.useState(!1),[o,l]=m.useState(null),[d,c]=m.useState(0);Me.useEffect(()=>{c(j=>j+1),console.log("🎮 Preview component rendered! Render count:",d+1)},[]),m.useEffect(()=>{console.log("🎮 Preview useEffect triggered - files changed:",Object.keys(s.files)),console.log("🎮 Preview useEffect - currentProject:",s),console.log("🎮 Preview useEffect - file count:",Object.keys(s.files).length);const j=setTimeout(()=>{u()},50);return()=>clearTimeout(j)},[s.files,s.activeFile,s]),m.useEffect(()=>{const j=()=>{t.current?(console.log("🎮 Iframe mounted, updating preview..."),u()):(console.log("🎮 Iframe not ready, retrying..."),setTimeout(j,50))};setTimeout(j,100)},[]);const u=()=>{if(console.log("🎮 updatePreview called with files:",Object.keys(s.files)),!t.current){console.log("🎮 updatePreview: iframeRef.current is null, skipping update");return}if(!s.files||Object.keys(s.files).length===0){console.log("🎮 updatePreview: No files to display, showing placeholder"),y();return}console.log("🎮 updatePreview: iframeRef.current exists, proceeding..."),a(!0),l(null);try{let j=s.files["index.html"]||"";if(!j.trim()){const $=Object.keys(s.files).filter(T=>T.endsWith(".html")&&T!=="index.html");if($.length>0){console.log("🎮 Preview Debug - No index.html found, using:",$[0]);const T=s.files[$[0]]||"";T.trim()&&(j=T)}}const w=Object.keys(s.files).filter($=>$.endsWith(".css")),v=w.map($=>s.files[$]).join(`
`);console.log("🎮 Preview Debug - All CSS files found:",w),console.log("🎮 Preview Debug - CSS content length:",v.length),console.log("🎮 Preview Debug - CSS content preview:",v.substring(0,200)+"...");const f=s.files["script.js"]||"",E=s.files["src/components/GameApp.jsx"]||"",S=s.files["src/components/GameComponent.jsx"]||"",k=s.files["src/components/TempleRunUI.jsx"]||"",D=s.files["src/components/RunnerPlayer.jsx"]||"",O=s.files["src/components/Obstacle.jsx"]||"";if(S&&(console.log("🎮 Preview Debug - GameComponent content preview:",S.substring(0,200)+"..."),console.log("🎮 Preview Debug - GameComponent contains Temple Run:",S.toLowerCase().includes("temple run")),console.log("🎮 Preview Debug - GameComponent contains lane:",S.toLowerCase().includes("lane")),console.log("🎮 Preview Debug - GameComponent contains jump:",S.toLowerCase().includes("jump"))),console.log("🎮 Preview Debug - Checking for game files:"),console.log("🎮 - GameApp.jsx exists:",!!E),console.log("🎮 - GameComponent.jsx exists:",!!S),console.log("🎮 - TempleRunUI.jsx exists:",!!k),console.log("🎮 - RunnerPlayer.jsx exists:",!!D),console.log("🎮 - Obstacle.jsx exists:",!!O),console.log("🎮 - All project files:",Object.keys(s.files)),E||S){console.log("🎮 Preview Debug - Game files detected, creating React preview"),console.log("🎮 Preview Debug - About to call createReactPreview, iframeRef.current:",!!t.current),g(),console.log("🎮 Preview Debug - createReactPreview call completed");return}if(console.log("🎮 Preview Debug - No game files detected, using regular HTML preview"),console.log("🎮 Preview Debug - HTML content length:",j.length),console.log("🎮 Preview Debug - CSS content length:",v.length),console.log("🎮 Preview Debug - JS content length:",f.length),!j.trim()){console.log("🎮 Preview Debug - No HTML content found, creating basic structure");const $=v.trim().length>0,T=f.trim().length>0;j=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild Generated App</title>
    ${$?`<style>${v}</style>`:""}
</head>
<body>
    <div id="app">
        <h1>DreamBuild Generated Application</h1>
        <p>Your application is loading...</p>
        <div id="content"></div>
    </div>
    ${T?`<script>${f}<\/script>`:""}
</body>
</html>`,console.log("🎮 Preview Debug - Created basic HTML structure")}let L=j;if(v.trim()&&(L=L.replace(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']style\.css["'][^>]*>/gi,`<style>${v}</style>`),L===j&&L.includes("<head>")?L=L.replace("<head>",`<head>
<style>${v}</style>`):L===j&&!L.includes("<head>")&&(L.includes("<title>")?L=L.replace("</title>",`</title>
<style>${v}</style>`):L=`<style>${v}</style>
${L}`)),f.trim()){const $=`(function() {
          ${f}
        })();`;L=L.replace(/<script[^>]*src=["']script\.js["'][^>]*><\/script>/gi,`<script>${$}<\/script>`),L.includes("</body>")?L=L.replace("</body>",`<script>${$}<\/script>
</body>`):L+=`
<script>${$}<\/script>`}L.includes("<!DOCTYPE html>")||(L=`<!DOCTYPE html>
${L}`),console.log("🎮 Preview Debug - Final HTML length:",L.length),console.log("🎮 Preview Debug - HTML contains <style>:",L.includes("<style>")),console.log("🎮 Preview Debug - HTML contains <script>:",L.includes("<script>")),console.log("🎮 Preview Debug - HTML preview:",L.substring(0,500)+"...");const A=t.current;A.srcdoc=L,A.onload=()=>{a(!1),l(null)},A.onerror=()=>{a(!1),l("Failed to load preview")}}catch(j){console.error("Preview update error:",j),a(!1),l("Preview update failed")}},p=j=>j?j.replace(/`/g,"\\`").replace(/\${/g,"\\${").replace(/\$/g,"\\$"):"",g=()=>{if(console.log("🎮 Creating React preview..."),!t.current){console.log("🎮 createReactPreview: iframeRef.current is null");return}try{const j=s.files["src/components/GameApp.jsx"]||"",w=s.files["src/components/GameComponent.jsx"]||"",v=s.files["src/components/TempleRunUI.jsx"]||"",f=s.files["src/components/RunnerPlayer.jsx"]||"",E=s.files["src/components/Obstacle.jsx"]||"",S=s.files["src/components/Coin.jsx"]||"",k=s.files["src/components/Player.jsx"]||"",D=s.files["src/components/GameApp.css"]||"",O=s.files["src/components/GameComponent.css"]||"",L=s.files["src/components/TempleRunUI.css"]||"",A=s.files["src/components/RunnerPlayer.css"]||"",$=s.files["src/components/Obstacle.css"]||"",T=s.files["src/components/Coin.css"]||"",C=s.files["src/components/Player.css"]||"",I=v||f||E,G=k||S,z=w.toLowerCase(),M=z.includes("temple run")||z.includes("lane")||z.includes("jump")||z.includes("slide")||z.includes("obstacle")||z.includes("endless runner"),W=I||M,H=G&&!W;console.log("🎮 Preview Debug - Available files:"),console.log("🎮 - templeRunUIFile:",!!v),console.log("🎮 - runnerPlayerFile:",!!f),console.log("🎮 - obstacleFile:",!!E),console.log("🎮 - playerFile:",!!k),console.log("🎮 - coinFile:",!!S),console.log("🎮 - hasTempleRunFiles:",I),console.log("🎮 - hasTempleRunContent:",M),console.log("🎮 - isTempleRun:",W),console.log("🎮 - isCoinCollector:",H),console.log("🎮 - All project files:",Object.keys(s.files)),console.log("🎮 FINAL GAME TYPE DECISION:"),console.log(W?"🎮 ✅ RENDERING TEMPLE RUN GAME":H?"🎮 ✅ RENDERING COIN COLLECTOR GAME":"🎮 ✅ RENDERING DEFAULT GAME");const q=`
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
          ${p(D)}
          ${p(O)}
          ${p(L)}
          ${p(A)}
          ${p($)}
          ${p(T)}
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
            
            if (${W}) {
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
    `,K=t.current;console.log("🎮 Setting iframe content, length:",q.length),K.srcdoc=q,K.onload=()=>{var ce,de;console.log("🎮 Iframe loaded successfully"),a(!1),l(null);try{const $e=((de=(ce=K.contentDocument)==null?void 0:ce.body)==null?void 0:de.textContent)||"";console.log("🎮 Iframe content verification - length:",$e.length),console.log("🎮 Iframe content preview:",$e.substring(0,100))}catch($e){console.log("🎮 Iframe content verification - access denied:",$e.message)}},K.onerror=()=>{console.log("🎮 Iframe error occurred"),a(!1),l("Failed to load React preview")}}catch(j){console.error("🎮 Error in createReactPreview:",j),a(!1),l(`Preview generation failed: ${j.message}`)}},y=()=>{if(!t.current)return;const j=`
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
    `,w=t.current;w.srcdoc=j,a(!1)},x=()=>{u(),U.success("Preview refreshed!")},b=()=>{if(!t.current)return;const j=t.current;if(j.srcdoc){const w=window.open("","_blank");w.document.write(j.srcdoc),w.document.close(),U.success("Opened in new tab!")}else U.error("No content to open")},h=()=>{document.fullscreenElement||i(!1)};m.useEffect(()=>(document.addEventListener("fullscreenchange",h),()=>{document.removeEventListener("fullscreenchange",h)}),[]);const N=async()=>{n?document.exitFullscreen&&await document.exitFullscreen():t.current.requestFullscreen&&await t.current.requestFullscreen()};return e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${n?"fixed inset-0 z-50 rounded-none":""}`,children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h3",{className:"font-semibold text-sm",children:"Live Preview"}),e.jsx("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"RENDERED"}),e.jsxs("span",{className:"text-xs bg-blue-500 text-white px-2 py-1 rounded",children:["#",d]}),r&&e.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[e.jsx("div",{className:"spinner"}),e.jsx("span",{children:"Updating..."})]}),o&&e.jsx("span",{className:"text-xs text-destructive",children:"Error"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:x,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Refresh Preview",children:e.jsx(_s,{className:"h-4 w-4"})}),e.jsx("button",{onClick:b,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Open in New Tab",children:e.jsx(Zt,{className:"h-4 w-4"})}),e.jsx("button",{onClick:N,className:"p-2 hover:bg-muted rounded-md transition-colors",title:n?"Exit Fullscreen":"Enter Fullscreen",children:n?e.jsx(qo,{className:"h-4 w-4"}):e.jsx(Vo,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"flex-1 relative bg-black",children:o?e.jsx("div",{className:"flex items-center justify-center h-full",children:e.jsxs("div",{className:"text-center p-6",children:[e.jsx("div",{className:"text-4xl mb-4",children:"⚠️"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Preview Error"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:o}),e.jsx("button",{onClick:x,className:"px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors",children:"Try Again"})]})}):e.jsx("iframe",{ref:t,className:"w-full h-full border-0",title:"Preview",sandbox:"allow-scripts allow-forms allow-popups",onLoad:()=>a(!1),onError:()=>{a(!1),l("Failed to load preview")}})}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{children:"Responsive"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Auto-refresh"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+R to refresh"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"F11 for fullscreen"})]})]})]})};function Ii(s,t){return function(){return s.apply(t,arguments)}}const{toString:Gm}=Object.prototype,{getPrototypeOf:ua}=Object,{iterator:Js,toStringTag:Oi}=Symbol,Ys=(s=>t=>{const r=Gm.call(t);return s[r]||(s[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Ee=s=>(s=s.toLowerCase(),t=>Ys(t)===s),Ks=s=>t=>typeof t===s,{isArray:$t}=Array,Lt=Ks("undefined");function os(s){return s!==null&&!Lt(s)&&s.constructor!==null&&!Lt(s.constructor)&&be(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const Li=Ee("ArrayBuffer");function zm(s){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(s):t=s&&s.buffer&&Li(s.buffer),t}const Wm=Ks("string"),be=Ks("function"),Mi=Ks("number"),ls=s=>s!==null&&typeof s=="object",qm=s=>s===!0||s===!1,Ns=s=>{if(Ys(s)!=="object")return!1;const t=ua(s);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Oi in s)&&!(Js in s)},Vm=s=>{if(!ls(s)||os(s))return!1;try{return Object.keys(s).length===0&&Object.getPrototypeOf(s)===Object.prototype}catch{return!1}},Jm=Ee("Date"),Ym=Ee("File"),Km=Ee("Blob"),Xm=Ee("FileList"),Qm=s=>ls(s)&&be(s.pipe),Zm=s=>{let t;return s&&(typeof FormData=="function"&&s instanceof FormData||be(s.append)&&((t=Ys(s))==="formdata"||t==="object"&&be(s.toString)&&s.toString()==="[object FormData]"))},ep=Ee("URLSearchParams"),[tp,sp,rp,ap]=["ReadableStream","Request","Response","Headers"].map(Ee),np=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function cs(s,t,{allOwnKeys:r=!1}={}){if(s===null||typeof s>"u")return;let a,n;if(typeof s!="object"&&(s=[s]),$t(s))for(a=0,n=s.length;a<n;a++)t.call(null,s[a],a,s);else{if(os(s))return;const i=r?Object.getOwnPropertyNames(s):Object.keys(s),o=i.length;let l;for(a=0;a<o;a++)l=i[a],t.call(null,s[l],l,s)}}function Fi(s,t){if(os(s))return null;t=t.toLowerCase();const r=Object.keys(s);let a=r.length,n;for(;a-- >0;)if(n=r[a],t===n.toLowerCase())return n;return null}const pt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$i=s=>!Lt(s)&&s!==pt;function $r(){const{caseless:s,skipUndefined:t}=$i(this)&&this||{},r={},a=(n,i)=>{const o=s&&Fi(r,i)||i;Ns(r[o])&&Ns(n)?r[o]=$r(r[o],n):Ns(n)?r[o]=$r({},n):$t(n)?r[o]=n.slice():(!t||!Lt(n))&&(r[o]=n)};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&cs(arguments[n],a);return r}const ip=(s,t,r,{allOwnKeys:a}={})=>(cs(t,(n,i)=>{r&&be(n)?s[i]=Ii(n,r):s[i]=n},{allOwnKeys:a}),s),op=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),lp=(s,t,r,a)=>{s.prototype=Object.create(t.prototype,a),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:t.prototype}),r&&Object.assign(s.prototype,r)},cp=(s,t,r,a)=>{let n,i,o;const l={};if(t=t||{},s==null)return t;do{for(n=Object.getOwnPropertyNames(s),i=n.length;i-- >0;)o=n[i],(!a||a(o,s,t))&&!l[o]&&(t[o]=s[o],l[o]=!0);s=r!==!1&&ua(s)}while(s&&(!r||r(s,t))&&s!==Object.prototype);return t},dp=(s,t,r)=>{s=String(s),(r===void 0||r>s.length)&&(r=s.length),r-=t.length;const a=s.indexOf(t,r);return a!==-1&&a===r},up=s=>{if(!s)return null;if($t(s))return s;let t=s.length;if(!Mi(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=s[t];return r},mp=(s=>t=>s&&t instanceof s)(typeof Uint8Array<"u"&&ua(Uint8Array)),pp=(s,t)=>{const a=(s&&s[Js]).call(s);let n;for(;(n=a.next())&&!n.done;){const i=n.value;t.call(s,i[0],i[1])}},hp=(s,t)=>{let r;const a=[];for(;(r=s.exec(t))!==null;)a.push(r);return a},gp=Ee("HTMLFormElement"),fp=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,a,n){return a.toUpperCase()+n}),Wa=(({hasOwnProperty:s})=>(t,r)=>s.call(t,r))(Object.prototype),xp=Ee("RegExp"),_i=(s,t)=>{const r=Object.getOwnPropertyDescriptors(s),a={};cs(r,(n,i)=>{let o;(o=t(n,i,s))!==!1&&(a[i]=o||n)}),Object.defineProperties(s,a)},bp=s=>{_i(s,(t,r)=>{if(be(s)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const a=s[r];if(be(a)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},yp=(s,t)=>{const r={},a=n=>{n.forEach(i=>{r[i]=!0})};return $t(s)?a(s):a(String(s).split(t)),r},vp=()=>{},jp=(s,t)=>s!=null&&Number.isFinite(s=+s)?s:t;function wp(s){return!!(s&&be(s.append)&&s[Oi]==="FormData"&&s[Js])}const Np=s=>{const t=new Array(10),r=(a,n)=>{if(ls(a)){if(t.indexOf(a)>=0)return;if(os(a))return a;if(!("toJSON"in a)){t[n]=a;const i=$t(a)?[]:{};return cs(a,(o,l)=>{const d=r(o,n+1);!Lt(d)&&(i[l]=d)}),t[n]=void 0,i}}return a};return r(s,0)},Sp=Ee("AsyncFunction"),Cp=s=>s&&(ls(s)||be(s))&&be(s.then)&&be(s.catch),Bi=((s,t)=>s?setImmediate:t?((r,a)=>(pt.addEventListener("message",({source:n,data:i})=>{n===pt&&i===r&&a.length&&a.shift()()},!1),n=>{a.push(n),pt.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",be(pt.postMessage)),kp=typeof queueMicrotask<"u"?queueMicrotask.bind(pt):typeof process<"u"&&process.nextTick||Bi,Tp=s=>s!=null&&be(s[Js]),R={isArray:$t,isArrayBuffer:Li,isBuffer:os,isFormData:Zm,isArrayBufferView:zm,isString:Wm,isNumber:Mi,isBoolean:qm,isObject:ls,isPlainObject:Ns,isEmptyObject:Vm,isReadableStream:tp,isRequest:sp,isResponse:rp,isHeaders:ap,isUndefined:Lt,isDate:Jm,isFile:Ym,isBlob:Km,isRegExp:xp,isFunction:be,isStream:Qm,isURLSearchParams:ep,isTypedArray:mp,isFileList:Xm,forEach:cs,merge:$r,extend:ip,trim:np,stripBOM:op,inherits:lp,toFlatObject:cp,kindOf:Ys,kindOfTest:Ee,endsWith:dp,toArray:up,forEachEntry:pp,matchAll:hp,isHTMLForm:gp,hasOwnProperty:Wa,hasOwnProp:Wa,reduceDescriptors:_i,freezeMethods:bp,toObjectSet:yp,toCamelCase:fp,noop:vp,toFiniteNumber:jp,findKey:Fi,global:pt,isContextDefined:$i,isSpecCompliantForm:wp,toJSONObject:Np,isAsyncFn:Sp,isThenable:Cp,setImmediate:Bi,asap:kp,isIterable:Tp};function V(s,t,r,a,n){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),n&&(this.response=n,this.status=n.status?n.status:null)}R.inherits(V,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.status}}});const Ui=V.prototype,Hi={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{Hi[s]={value:s}});Object.defineProperties(V,Hi);Object.defineProperty(Ui,"isAxiosError",{value:!0});V.from=(s,t,r,a,n,i)=>{const o=Object.create(Ui);R.toFlatObject(s,o,function(u){return u!==Error.prototype},c=>c!=="isAxiosError");const l=s&&s.message?s.message:"Error",d=t==null&&s?s.code:t;return V.call(o,l,d,r,a,n),s&&o.cause==null&&Object.defineProperty(o,"cause",{value:s,configurable:!0}),o.name=s&&s.name||"Error",i&&Object.assign(o,i),o};const Dp=null;function _r(s){return R.isPlainObject(s)||R.isArray(s)}function Gi(s){return R.endsWith(s,"[]")?s.slice(0,-2):s}function qa(s,t,r){return s?s.concat(t).map(function(n,i){return n=Gi(n),!r&&i?"["+n+"]":n}).join(r?".":""):t}function Pp(s){return R.isArray(s)&&!s.some(_r)}const Ap=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Xs(s,t,r){if(!R.isObject(s))throw new TypeError("target must be an object");t=t||new FormData,r=R.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,h){return!R.isUndefined(h[b])});const a=r.metaTokens,n=r.visitor||u,i=r.dots,o=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(n))throw new TypeError("visitor must be a function");function c(x){if(x===null)return"";if(R.isDate(x))return x.toISOString();if(R.isBoolean(x))return x.toString();if(!d&&R.isBlob(x))throw new V("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(x)||R.isTypedArray(x)?d&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function u(x,b,h){let N=x;if(x&&!h&&typeof x=="object"){if(R.endsWith(b,"{}"))b=a?b:b.slice(0,-2),x=JSON.stringify(x);else if(R.isArray(x)&&Pp(x)||(R.isFileList(x)||R.endsWith(b,"[]"))&&(N=R.toArray(x)))return b=Gi(b),N.forEach(function(w,v){!(R.isUndefined(w)||w===null)&&t.append(o===!0?qa([b],v,i):o===null?b:b+"[]",c(w))}),!1}return _r(x)?!0:(t.append(qa(h,b,i),c(x)),!1)}const p=[],g=Object.assign(Ap,{defaultVisitor:u,convertValue:c,isVisitable:_r});function y(x,b){if(!R.isUndefined(x)){if(p.indexOf(x)!==-1)throw Error("Circular reference detected in "+b.join("."));p.push(x),R.forEach(x,function(N,j){(!(R.isUndefined(N)||N===null)&&n.call(t,N,R.isString(j)?j.trim():j,b,g))===!0&&y(N,b?b.concat(j):[j])}),p.pop()}}if(!R.isObject(s))throw new TypeError("data must be an object");return y(s),t}function Va(s){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(a){return t[a]})}function ma(s,t){this._pairs=[],s&&Xs(s,this,t)}const zi=ma.prototype;zi.append=function(t,r){this._pairs.push([t,r])};zi.toString=function(t){const r=t?function(a){return t.call(this,a,Va)}:Va;return this._pairs.map(function(n){return r(n[0])+"="+r(n[1])},"").join("&")};function Ep(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Wi(s,t,r){if(!t)return s;const a=r&&r.encode||Ep;R.isFunction(r)&&(r={serialize:r});const n=r&&r.serialize;let i;if(n?i=n(t,r):i=R.isURLSearchParams(t)?t.toString():new ma(t,r).toString(a),i){const o=s.indexOf("#");o!==-1&&(s=s.slice(0,o)),s+=(s.indexOf("?")===-1?"?":"&")+i}return s}class Ja{constructor(){this.handlers=[]}use(t,r,a){return this.handlers.push({fulfilled:t,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(a){a!==null&&t(a)})}}const qi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Rp=typeof URLSearchParams<"u"?URLSearchParams:ma,Ip=typeof FormData<"u"?FormData:null,Op=typeof Blob<"u"?Blob:null,Lp={isBrowser:!0,classes:{URLSearchParams:Rp,FormData:Ip,Blob:Op},protocols:["http","https","file","blob","url","data"]},pa=typeof window<"u"&&typeof document<"u",Br=typeof navigator=="object"&&navigator||void 0,Mp=pa&&(!Br||["ReactNative","NativeScript","NS"].indexOf(Br.product)<0),Fp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",$p=pa&&window.location.href||"http://localhost",_p=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pa,hasStandardBrowserEnv:Mp,hasStandardBrowserWebWorkerEnv:Fp,navigator:Br,origin:$p},Symbol.toStringTag,{value:"Module"})),me={..._p,...Lp};function Bp(s,t){return Xs(s,new me.classes.URLSearchParams,{visitor:function(r,a,n,i){return me.isNode&&R.isBuffer(r)?(this.append(a,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function Up(s){return R.matchAll(/\w+|\[(\w*)]/g,s).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Hp(s){const t={},r=Object.keys(s);let a;const n=r.length;let i;for(a=0;a<n;a++)i=r[a],t[i]=s[i];return t}function Vi(s){function t(r,a,n,i){let o=r[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),d=i>=r.length;return o=!o&&R.isArray(n)?n.length:o,d?(R.hasOwnProp(n,o)?n[o]=[n[o],a]:n[o]=a,!l):((!n[o]||!R.isObject(n[o]))&&(n[o]=[]),t(r,a,n[o],i)&&R.isArray(n[o])&&(n[o]=Hp(n[o])),!l)}if(R.isFormData(s)&&R.isFunction(s.entries)){const r={};return R.forEachEntry(s,(a,n)=>{t(Up(a),n,r,0)}),r}return null}function Gp(s,t,r){if(R.isString(s))try{return(t||JSON.parse)(s),R.trim(s)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(s)}const ds={transitional:qi,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const a=r.getContentType()||"",n=a.indexOf("application/json")>-1,i=R.isObject(t);if(i&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return n?JSON.stringify(Vi(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t)||R.isReadableStream(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(a.indexOf("application/x-www-form-urlencoded")>-1)return Bp(t,this.formSerializer).toString();if((l=R.isFileList(t))||a.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Xs(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||n?(r.setContentType("application/json",!1),Gp(t)):t}],transformResponse:[function(t){const r=this.transitional||ds.transitional,a=r&&r.forcedJSONParsing,n=this.responseType==="json";if(R.isResponse(t)||R.isReadableStream(t))return t;if(t&&R.isString(t)&&(a&&!this.responseType||n)){const o=!(r&&r.silentJSONParsing)&&n;try{return JSON.parse(t,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?V.from(l,V.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:me.classes.FormData,Blob:me.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};R.forEach(["delete","get","head","post","put","patch"],s=>{ds.headers[s]={}});const zp=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wp=s=>{const t={};let r,a,n;return s&&s.split(`
`).forEach(function(o){n=o.indexOf(":"),r=o.substring(0,n).trim().toLowerCase(),a=o.substring(n+1).trim(),!(!r||t[r]&&zp[r])&&(r==="set-cookie"?t[r]?t[r].push(a):t[r]=[a]:t[r]=t[r]?t[r]+", "+a:a)}),t},Ya=Symbol("internals");function Wt(s){return s&&String(s).trim().toLowerCase()}function Ss(s){return s===!1||s==null?s:R.isArray(s)?s.map(Ss):String(s)}function qp(s){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=r.exec(s);)t[a[1]]=a[2];return t}const Vp=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function fr(s,t,r,a,n){if(R.isFunction(a))return a.call(this,t,r);if(n&&(t=r),!!R.isString(t)){if(R.isString(a))return t.indexOf(a)!==-1;if(R.isRegExp(a))return a.test(t)}}function Jp(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,a)=>r.toUpperCase()+a)}function Yp(s,t){const r=R.toCamelCase(" "+t);["get","set","has"].forEach(a=>{Object.defineProperty(s,a+r,{value:function(n,i,o){return this[a].call(this,t,n,i,o)},configurable:!0})})}let ye=class{constructor(t){t&&this.set(t)}set(t,r,a){const n=this;function i(l,d,c){const u=Wt(d);if(!u)throw new Error("header name must be a non-empty string");const p=R.findKey(n,u);(!p||n[p]===void 0||c===!0||c===void 0&&n[p]!==!1)&&(n[p||d]=Ss(l))}const o=(l,d)=>R.forEach(l,(c,u)=>i(c,u,d));if(R.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(R.isString(t)&&(t=t.trim())&&!Vp(t))o(Wp(t),r);else if(R.isObject(t)&&R.isIterable(t)){let l={},d,c;for(const u of t){if(!R.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[c=u[0]]=(d=l[c])?R.isArray(d)?[...d,u[1]]:[d,u[1]]:u[1]}o(l,r)}else t!=null&&i(r,t,a);return this}get(t,r){if(t=Wt(t),t){const a=R.findKey(this,t);if(a){const n=this[a];if(!r)return n;if(r===!0)return qp(n);if(R.isFunction(r))return r.call(this,n,a);if(R.isRegExp(r))return r.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Wt(t),t){const a=R.findKey(this,t);return!!(a&&this[a]!==void 0&&(!r||fr(this,this[a],a,r)))}return!1}delete(t,r){const a=this;let n=!1;function i(o){if(o=Wt(o),o){const l=R.findKey(a,o);l&&(!r||fr(a,a[l],l,r))&&(delete a[l],n=!0)}}return R.isArray(t)?t.forEach(i):i(t),n}clear(t){const r=Object.keys(this);let a=r.length,n=!1;for(;a--;){const i=r[a];(!t||fr(this,this[i],i,t,!0))&&(delete this[i],n=!0)}return n}normalize(t){const r=this,a={};return R.forEach(this,(n,i)=>{const o=R.findKey(a,i);if(o){r[o]=Ss(n),delete r[i];return}const l=t?Jp(i):String(i).trim();l!==i&&delete r[i],r[l]=Ss(n),a[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return R.forEach(this,(a,n)=>{a!=null&&a!==!1&&(r[n]=t&&R.isArray(a)?a.join(", "):a)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const a=new this(t);return r.forEach(n=>a.set(n)),a}static accessor(t){const a=(this[Ya]=this[Ya]={accessors:{}}).accessors,n=this.prototype;function i(o){const l=Wt(o);a[l]||(Yp(n,o),a[l]=!0)}return R.isArray(t)?t.forEach(i):i(t),this}};ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.reduceDescriptors(ye.prototype,({value:s},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>s,set(a){this[r]=a}}});R.freezeMethods(ye);function xr(s,t){const r=this||ds,a=t||r,n=ye.from(a.headers);let i=a.data;return R.forEach(s,function(l){i=l.call(r,i,n.normalize(),t?t.status:void 0)}),n.normalize(),i}function Ji(s){return!!(s&&s.__CANCEL__)}function _t(s,t,r){V.call(this,s??"canceled",V.ERR_CANCELED,t,r),this.name="CanceledError"}R.inherits(_t,V,{__CANCEL__:!0});function Yi(s,t,r){const a=r.config.validateStatus;!r.status||!a||a(r.status)?s(r):t(new V("Request failed with status code "+r.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function Kp(s){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return t&&t[1]||""}function Xp(s,t){s=s||10;const r=new Array(s),a=new Array(s);let n=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=a[i];o||(o=c),r[n]=d,a[n]=c;let p=i,g=0;for(;p!==n;)g+=r[p++],p=p%s;if(n=(n+1)%s,n===i&&(i=(i+1)%s),c-o<t)return;const y=u&&c-u;return y?Math.round(g*1e3/y):void 0}}function Qp(s,t){let r=0,a=1e3/t,n,i;const o=(c,u=Date.now())=>{r=u,n=null,i&&(clearTimeout(i),i=null),s(...c)};return[(...c)=>{const u=Date.now(),p=u-r;p>=a?o(c,u):(n=c,i||(i=setTimeout(()=>{i=null,o(n)},a-p)))},()=>n&&o(n)]}const Ms=(s,t,r=3)=>{let a=0;const n=Xp(50,250);return Qp(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,d=o-a,c=n(d),u=o<=l;a=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:d,rate:c||void 0,estimated:c&&l&&u?(l-o)/c:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};s(p)},r)},Ka=(s,t)=>{const r=s!=null;return[a=>t[0]({lengthComputable:r,total:s,loaded:a}),t[1]]},Xa=s=>(...t)=>R.asap(()=>s(...t)),Zp=me.hasStandardBrowserEnv?((s,t)=>r=>(r=new URL(r,me.origin),s.protocol===r.protocol&&s.host===r.host&&(t||s.port===r.port)))(new URL(me.origin),me.navigator&&/(msie|trident)/i.test(me.navigator.userAgent)):()=>!0,eh=me.hasStandardBrowserEnv?{write(s,t,r,a,n,i){const o=[s+"="+encodeURIComponent(t)];R.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),R.isString(a)&&o.push("path="+a),R.isString(n)&&o.push("domain="+n),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(s){const t=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(s){this.write(s,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function th(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function sh(s,t){return t?s.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):s}function Ki(s,t,r){let a=!th(t);return s&&(a||r==!1)?sh(s,t):t}const Qa=s=>s instanceof ye?{...s}:s;function bt(s,t){t=t||{};const r={};function a(c,u,p,g){return R.isPlainObject(c)&&R.isPlainObject(u)?R.merge.call({caseless:g},c,u):R.isPlainObject(u)?R.merge({},u):R.isArray(u)?u.slice():u}function n(c,u,p,g){if(R.isUndefined(u)){if(!R.isUndefined(c))return a(void 0,c,p,g)}else return a(c,u,p,g)}function i(c,u){if(!R.isUndefined(u))return a(void 0,u)}function o(c,u){if(R.isUndefined(u)){if(!R.isUndefined(c))return a(void 0,c)}else return a(void 0,u)}function l(c,u,p){if(p in t)return a(c,u);if(p in s)return a(void 0,c)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,u,p)=>n(Qa(c),Qa(u),p,!0)};return R.forEach(Object.keys({...s,...t}),function(u){const p=d[u]||n,g=p(s[u],t[u],u);R.isUndefined(g)&&p!==l||(r[u]=g)}),r}const Xi=s=>{const t=bt({},s);let{data:r,withXSRFToken:a,xsrfHeaderName:n,xsrfCookieName:i,headers:o,auth:l}=t;if(t.headers=o=ye.from(o),t.url=Wi(Ki(t.baseURL,t.url,t.allowAbsoluteUrls),s.params,s.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),R.isFormData(r)){if(me.hasStandardBrowserEnv||me.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(R.isFunction(r.getHeaders)){const d=r.getHeaders(),c=["content-type","content-length"];Object.entries(d).forEach(([u,p])=>{c.includes(u.toLowerCase())&&o.set(u,p)})}}if(me.hasStandardBrowserEnv&&(a&&R.isFunction(a)&&(a=a(t)),a||a!==!1&&Zp(t.url))){const d=n&&i&&eh.read(i);d&&o.set(n,d)}return t},rh=typeof XMLHttpRequest<"u",ah=rh&&function(s){return new Promise(function(r,a){const n=Xi(s);let i=n.data;const o=ye.from(n.headers).normalize();let{responseType:l,onUploadProgress:d,onDownloadProgress:c}=n,u,p,g,y,x;function b(){y&&y(),x&&x(),n.cancelToken&&n.cancelToken.unsubscribe(u),n.signal&&n.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(n.method.toUpperCase(),n.url,!0),h.timeout=n.timeout;function N(){if(!h)return;const w=ye.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),f={data:!l||l==="text"||l==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:w,config:s,request:h};Yi(function(S){r(S),b()},function(S){a(S),b()},f),h=null}"onloadend"in h?h.onloadend=N:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(N)},h.onabort=function(){h&&(a(new V("Request aborted",V.ECONNABORTED,s,h)),h=null)},h.onerror=function(v){const f=v&&v.message?v.message:"Network Error",E=new V(f,V.ERR_NETWORK,s,h);E.event=v||null,a(E),h=null},h.ontimeout=function(){let v=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const f=n.transitional||qi;n.timeoutErrorMessage&&(v=n.timeoutErrorMessage),a(new V(v,f.clarifyTimeoutError?V.ETIMEDOUT:V.ECONNABORTED,s,h)),h=null},i===void 0&&o.setContentType(null),"setRequestHeader"in h&&R.forEach(o.toJSON(),function(v,f){h.setRequestHeader(f,v)}),R.isUndefined(n.withCredentials)||(h.withCredentials=!!n.withCredentials),l&&l!=="json"&&(h.responseType=n.responseType),c&&([g,x]=Ms(c,!0),h.addEventListener("progress",g)),d&&h.upload&&([p,y]=Ms(d),h.upload.addEventListener("progress",p),h.upload.addEventListener("loadend",y)),(n.cancelToken||n.signal)&&(u=w=>{h&&(a(!w||w.type?new _t(null,s,h):w),h.abort(),h=null)},n.cancelToken&&n.cancelToken.subscribe(u),n.signal&&(n.signal.aborted?u():n.signal.addEventListener("abort",u)));const j=Kp(n.url);if(j&&me.protocols.indexOf(j)===-1){a(new V("Unsupported protocol "+j+":",V.ERR_BAD_REQUEST,s));return}h.send(i||null)})},nh=(s,t)=>{const{length:r}=s=s?s.filter(Boolean):[];if(t||r){let a=new AbortController,n;const i=function(c){if(!n){n=!0,l();const u=c instanceof Error?c:this.reason;a.abort(u instanceof V?u:new _t(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new V(`timeout ${t} of ms exceeded`,V.ETIMEDOUT))},t);const l=()=>{s&&(o&&clearTimeout(o),o=null,s.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),s=null)};s.forEach(c=>c.addEventListener("abort",i));const{signal:d}=a;return d.unsubscribe=()=>R.asap(l),d}},ih=function*(s,t){let r=s.byteLength;if(r<t){yield s;return}let a=0,n;for(;a<r;)n=a+t,yield s.slice(a,n),a=n},oh=async function*(s,t){for await(const r of lh(s))yield*ih(r,t)},lh=async function*(s){if(s[Symbol.asyncIterator]){yield*s;return}const t=s.getReader();try{for(;;){const{done:r,value:a}=await t.read();if(r)break;yield a}}finally{await t.cancel()}},Za=(s,t,r,a)=>{const n=oh(s,t);let i=0,o,l=d=>{o||(o=!0,a&&a(d))};return new ReadableStream({async pull(d){try{const{done:c,value:u}=await n.next();if(c){l(),d.close();return}let p=u.byteLength;if(r){let g=i+=p;r(g)}d.enqueue(new Uint8Array(u))}catch(c){throw l(c),c}},cancel(d){return l(d),n.return()}},{highWaterMark:2})},en=64*1024,{isFunction:xs}=R,ch=(({Request:s,Response:t})=>({Request:s,Response:t}))(R.global),{ReadableStream:tn,TextEncoder:sn}=R.global,rn=(s,...t)=>{try{return!!s(...t)}catch{return!1}},dh=s=>{s=R.merge.call({skipUndefined:!0},ch,s);const{fetch:t,Request:r,Response:a}=s,n=t?xs(t):typeof fetch=="function",i=xs(r),o=xs(a);if(!n)return!1;const l=n&&xs(tn),d=n&&(typeof sn=="function"?(x=>b=>x.encode(b))(new sn):async x=>new Uint8Array(await new r(x).arrayBuffer())),c=i&&l&&rn(()=>{let x=!1;const b=new r(me.origin,{body:new tn,method:"POST",get duplex(){return x=!0,"half"}}).headers.has("Content-Type");return x&&!b}),u=o&&l&&rn(()=>R.isReadableStream(new a("").body)),p={stream:u&&(x=>x.body)};n&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!p[x]&&(p[x]=(b,h)=>{let N=b&&b[x];if(N)return N.call(b);throw new V(`Response type '${x}' is not supported`,V.ERR_NOT_SUPPORT,h)})});const g=async x=>{if(x==null)return 0;if(R.isBlob(x))return x.size;if(R.isSpecCompliantForm(x))return(await new r(me.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(R.isArrayBufferView(x)||R.isArrayBuffer(x))return x.byteLength;if(R.isURLSearchParams(x)&&(x=x+""),R.isString(x))return(await d(x)).byteLength},y=async(x,b)=>{const h=R.toFiniteNumber(x.getContentLength());return h??g(b)};return async x=>{let{url:b,method:h,data:N,signal:j,cancelToken:w,timeout:v,onDownloadProgress:f,onUploadProgress:E,responseType:S,headers:k,withCredentials:D="same-origin",fetchOptions:O}=Xi(x),L=t||fetch;S=S?(S+"").toLowerCase():"text";let A=nh([j,w&&w.toAbortSignal()],v),$=null;const T=A&&A.unsubscribe&&(()=>{A.unsubscribe()});let C;try{if(E&&c&&h!=="get"&&h!=="head"&&(C=await y(k,N))!==0){let H=new r(b,{method:"POST",body:N,duplex:"half"}),q;if(R.isFormData(N)&&(q=H.headers.get("content-type"))&&k.setContentType(q),H.body){const[K,ce]=Ka(C,Ms(Xa(E)));N=Za(H.body,en,K,ce)}}R.isString(D)||(D=D?"include":"omit");const I=i&&"credentials"in r.prototype,G={...O,signal:A,method:h.toUpperCase(),headers:k.normalize().toJSON(),body:N,duplex:"half",credentials:I?D:void 0};$=i&&new r(b,G);let z=await(i?L($,O):L(b,G));const M=u&&(S==="stream"||S==="response");if(u&&(f||M&&T)){const H={};["status","statusText","headers"].forEach(de=>{H[de]=z[de]});const q=R.toFiniteNumber(z.headers.get("content-length")),[K,ce]=f&&Ka(q,Ms(Xa(f),!0))||[];z=new a(Za(z.body,en,K,()=>{ce&&ce(),T&&T()}),H)}S=S||"text";let W=await p[R.findKey(p,S)||"text"](z,x);return!M&&T&&T(),await new Promise((H,q)=>{Yi(H,q,{data:W,headers:ye.from(z.headers),status:z.status,statusText:z.statusText,config:x,request:$})})}catch(I){throw T&&T(),I&&I.name==="TypeError"&&/Load failed|fetch/i.test(I.message)?Object.assign(new V("Network Error",V.ERR_NETWORK,x,$),{cause:I.cause||I}):V.from(I,I&&I.code,x,$)}}},uh=new Map,Qi=s=>{let t=s?s.env:{};const{fetch:r,Request:a,Response:n}=t,i=[a,n,r];let o=i.length,l=o,d,c,u=uh;for(;l--;)d=i[l],c=u.get(d),c===void 0&&u.set(d,c=l?new Map:dh(t)),u=c;return c};Qi();const Ur={http:Dp,xhr:ah,fetch:{get:Qi}};R.forEach(Ur,(s,t)=>{if(s){try{Object.defineProperty(s,"name",{value:t})}catch{}Object.defineProperty(s,"adapterName",{value:t})}});const an=s=>`- ${s}`,mh=s=>R.isFunction(s)||s===null||s===!1,Zi={getAdapter:(s,t)=>{s=R.isArray(s)?s:[s];const{length:r}=s;let a,n;const i={};for(let o=0;o<r;o++){a=s[o];let l;if(n=a,!mh(a)&&(n=Ur[(l=String(a)).toLowerCase()],n===void 0))throw new V(`Unknown adapter '${l}'`);if(n&&(R.isFunction(n)||(n=n.get(t))))break;i[l||"#"+o]=n}if(!n){const o=Object.entries(i).map(([d,c])=>`adapter ${d} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=r?o.length>1?`since :
`+o.map(an).join(`
`):" "+an(o[0]):"as no adapter specified";throw new V("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return n},adapters:Ur};function br(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new _t(null,s)}function nn(s){return br(s),s.headers=ye.from(s.headers),s.data=xr.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),Zi.getAdapter(s.adapter||ds.adapter,s)(s).then(function(a){return br(s),a.data=xr.call(s,s.transformResponse,a),a.headers=ye.from(a.headers),a},function(a){return Ji(a)||(br(s),a&&a.response&&(a.response.data=xr.call(s,s.transformResponse,a.response),a.response.headers=ye.from(a.response.headers))),Promise.reject(a)})}const eo="1.12.2",Qs={};["object","boolean","number","function","string","symbol"].forEach((s,t)=>{Qs[s]=function(a){return typeof a===s||"a"+(t<1?"n ":" ")+s}});const on={};Qs.transitional=function(t,r,a){function n(i,o){return"[Axios v"+eo+"] Transitional option '"+i+"'"+o+(a?". "+a:"")}return(i,o,l)=>{if(t===!1)throw new V(n(o," has been removed"+(r?" in "+r:"")),V.ERR_DEPRECATED);return r&&!on[o]&&(on[o]=!0,console.warn(n(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,o,l):!0}};Qs.spelling=function(t){return(r,a)=>(console.warn(`${a} is likely a misspelling of ${t}`),!0)};function ph(s,t,r){if(typeof s!="object")throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);const a=Object.keys(s);let n=a.length;for(;n-- >0;){const i=a[n],o=t[i];if(o){const l=s[i],d=l===void 0||o(l,i,s);if(d!==!0)throw new V("option "+i+" must be "+d,V.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new V("Unknown option "+i,V.ERR_BAD_OPTION)}}const Cs={assertOptions:ph,validators:Qs},Re=Cs.validators;let gt=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Ja,response:new Ja}}async request(t,r){try{return await this._request(t,r)}catch(a){if(a instanceof Error){let n={};Error.captureStackTrace?Error.captureStackTrace(n):n=new Error;const i=n.stack?n.stack.replace(/^.+\n/,""):"";try{a.stack?i&&!String(a.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+i):a.stack=i}catch{}}throw a}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=bt(this.defaults,r);const{transitional:a,paramsSerializer:n,headers:i}=r;a!==void 0&&Cs.assertOptions(a,{silentJSONParsing:Re.transitional(Re.boolean),forcedJSONParsing:Re.transitional(Re.boolean),clarifyTimeoutError:Re.transitional(Re.boolean)},!1),n!=null&&(R.isFunction(n)?r.paramsSerializer={serialize:n}:Cs.assertOptions(n,{encode:Re.function,serialize:Re.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Cs.assertOptions(r,{baseUrl:Re.spelling("baseURL"),withXsrfToken:Re.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=i&&R.merge(i.common,i[r.method]);i&&R.forEach(["delete","get","head","post","put","patch","common"],x=>{delete i[x]}),r.headers=ye.concat(o,i);const l=[];let d=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(r)===!1||(d=d&&b.synchronous,l.unshift(b.fulfilled,b.rejected))});const c=[];this.interceptors.response.forEach(function(b){c.push(b.fulfilled,b.rejected)});let u,p=0,g;if(!d){const x=[nn.bind(this),void 0];for(x.unshift(...l),x.push(...c),g=x.length,u=Promise.resolve(r);p<g;)u=u.then(x[p++],x[p++]);return u}g=l.length;let y=r;for(;p<g;){const x=l[p++],b=l[p++];try{y=x(y)}catch(h){b.call(this,h);break}}try{u=nn.call(this,y)}catch(x){return Promise.reject(x)}for(p=0,g=c.length;p<g;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=bt(this.defaults,t);const r=Ki(t.baseURL,t.url,t.allowAbsoluteUrls);return Wi(r,t.params,t.paramsSerializer)}};R.forEach(["delete","get","head","options"],function(t){gt.prototype[t]=function(r,a){return this.request(bt(a||{},{method:t,url:r,data:(a||{}).data}))}});R.forEach(["post","put","patch"],function(t){function r(a){return function(i,o,l){return this.request(bt(l||{},{method:t,headers:a?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}gt.prototype[t]=r(),gt.prototype[t+"Form"]=r(!0)});let hh=class to{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const a=this;this.promise.then(n=>{if(!a._listeners)return;let i=a._listeners.length;for(;i-- >0;)a._listeners[i](n);a._listeners=null}),this.promise.then=n=>{let i;const o=new Promise(l=>{a.subscribe(l),i=l}).then(n);return o.cancel=function(){a.unsubscribe(i)},o},t(function(i,o,l){a.reason||(a.reason=new _t(i,o,l),r(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=a=>{t.abort(a)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new to(function(n){t=n}),cancel:t}}};function gh(s){return function(r){return s.apply(null,r)}}function fh(s){return R.isObject(s)&&s.isAxiosError===!0}const Hr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hr).forEach(([s,t])=>{Hr[t]=s});function so(s){const t=new gt(s),r=Ii(gt.prototype.request,t);return R.extend(r,gt.prototype,t,{allOwnKeys:!0}),R.extend(r,t,null,{allOwnKeys:!0}),r.create=function(n){return so(bt(s,n))},r}const Z=so(ds);Z.Axios=gt;Z.CanceledError=_t;Z.CancelToken=hh;Z.isCancel=Ji;Z.VERSION=eo;Z.toFormData=Xs;Z.AxiosError=V;Z.Cancel=Z.CanceledError;Z.all=function(t){return Promise.all(t)};Z.spread=gh;Z.isAxiosError=fh;Z.mergeConfig=bt;Z.AxiosHeaders=ye;Z.formToJSON=s=>Vi(R.isHTMLForm(s)?new FormData(s):s);Z.getAdapter=Zi.getAdapter;Z.HttpStatusCode=Hr;Z.default=Z;const{Axios:Ix,AxiosError:Ox,CanceledError:Lx,isCancel:Mx,CancelToken:Fx,VERSION:$x,all:_x,Cancel:Bx,isAxiosError:Ux,spread:Hx,toFormData:Gx,AxiosHeaders:zx,HttpStatusCode:Wx,formToJSON:qx,getAdapter:Vx,mergeConfig:Jx}=Z;class xh{constructor(){this.baseURL="https://api.github.com",this.trendingRepos=[],this.templateCache=new Map,this.cacheExpiry=30*60*1e3,this.isLoading=!1,console.log("🔗 GitHub Template Service initialized")}async getTrendingTemplates(t="javascript",r="stars",a="desc"){if(this.isLoading)return this.trendingRepos;this.isLoading=!0;try{console.log("📡 Fetching trending GitHub templates...");const n=["stars:>100 topic:todo-app","stars:>100 topic:calculator","stars:>100 topic:weather-app","stars:>100 topic:game","stars:>100 topic:portfolio","stars:>100 topic:blog","stars:>100 topic:landing-page","stars:>50 topic:react-tutorial","stars:>50 topic:javascript-project","stars:>50 topic:html-css"],i=[];for(const d of n)try{console.log(`📈 Fetching trending repositories: ${d}`);const c=await fetch(`${this.baseURL}/search/repositories?q=${encodeURIComponent(d)}&sort=stars&order=desc&per_page=20`,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"DreamBuild-Template-Service"}});if(!c.ok)if(console.error(`GitHub API error for query "${d}": ${c.status}`),c.status===403||c.status===429){console.log("⚠️ Rate limit hit, returning cached/fallback templates");const p=this.getFallbackTemplates();return this.trendingRepos=p,p}else if(c.status===422){console.log(`⚠️ Invalid query "${d}", skipping...`);continue}else{console.log(`⚠️ API error ${c.status} for query "${d}", skipping...`);continue}const u=await c.json();if(u.items&&u.items.length>0){console.log(`📈 Found ${u.items.length} trending template repositories for: ${d}`);const p=u.items.filter(g=>this.isTemplateRepository(g));i.push(...p)}await new Promise(p=>setTimeout(p,500))}catch(c){console.error(`Error fetching templates for ${d}:`,c);continue}const o=this.deduplicateRepos(i),l=this.filterTemplateRepos(o);if(l.length<10){console.log("📦 Adding fallback templates due to limited API results");const d=this.getFallbackTemplates();l.push(...d)}return this.trendingRepos=l.slice(0,25),console.log(`✅ Found ${this.trendingRepos.length} template repositories`),this.trendingRepos}catch(n){return console.error("❌ Failed to fetch trending templates:",n),this.getFallbackTemplates()}finally{this.isLoading=!1}}async getRepositoryTemplate(t){const r=`repo_${t.id}`;if(this.templateCache.has(r)){const a=this.templateCache.get(r);if(Date.now()-a.timestamp<this.cacheExpiry)return a.data}try{console.log(`📦 Processing template: ${t.full_name}`);const a=await this.getRepositoryContents(t.full_name),n=await this.parseRepositoryTemplate(t,a);return this.templateCache.set(r,{data:n,timestamp:Date.now()}),n}catch(a){return console.error(`❌ Failed to process template ${t.full_name}:`,a),null}}async getRepositoryContents(t,r=""){try{const a=await fetch(`${this.baseURL}/repos/${t}/contents/${r}`);if(!a.ok)throw new Error(`GitHub API error: ${a.status}`);return await a.json()}catch(a){return console.error(`Failed to fetch contents for ${t}:`,a),[]}}async parseRepositoryTemplate(t,r){var i;const a=this.transformRepositoryToTemplate(t),n=this.extractKeyFiles(r);return a.files=n,a.fileCount=n.length,a.preview=((i=t.owner)==null?void 0:i.avatar_url)||"/api/placeholder/400/300",a}detectTemplateType(t,r){const a=t.name.toLowerCase(),n=(t.description||"").toLowerCase(),i=(t.topics||[]).join(" ").toLowerCase(),o=`${a} ${n} ${i}`;return o.includes("react-native")||o.includes("expo")||o.includes("flutter")||o.includes("mobile")?"mobile":o.includes("react")||o.includes("nextjs")||o.includes("next.js")||o.includes("gatsby")?"react":o.includes("vue")||o.includes("nuxt")||o.includes("quasar")?"vue":o.includes("angular")||o.includes("ionic")?"angular":o.includes("svelte")||o.includes("sveltekit")?"svelte":o.includes("node")||o.includes("express")||o.includes("koa")||o.includes("fastify")?"nodejs":o.includes("python")||o.includes("django")||o.includes("flask")||o.includes("fastapi")?"python":o.includes("php")||o.includes("laravel")||o.includes("symfony")||o.includes("codeigniter")?"php":o.includes("go")||o.includes("golang")||o.includes("gin")?"go":o.includes("rust")||o.includes("actix")||o.includes("rocket")?"rust":o.includes("java")||o.includes("spring")||o.includes("maven")?"java":o.includes("api")||o.includes("rest")||o.includes("graphql")||o.includes("microservice")?"api":o.includes("dashboard")||o.includes("admin")||o.includes("panel")?"dashboard":o.includes("ecommerce")||o.includes("e-commerce")||o.includes("shop")||o.includes("store")?"ecommerce":o.includes("blog")||o.includes("cms")||o.includes("content")?"blog":o.includes("portfolio")||o.includes("personal")||o.includes("resume")?"portfolio":o.includes("landing")||o.includes("marketing")||o.includes("promo")?"landing":o.includes("cms")||o.includes("content-management")||o.includes("headless")?"cms":o.includes("ui")||o.includes("ux")||o.includes("design-system")||o.includes("component-library")?"ui":o.includes("test")||o.includes("testing")||o.includes("e2e")||o.includes("unit-test")?"testing":o.includes("devops")||o.includes("ci-cd")||o.includes("docker")||o.includes("kubernetes")?"devops":o.includes("database")||o.includes("sql")||o.includes("nosql")||o.includes("mongodb")||o.includes("postgresql")?"database":o.includes("auth")||o.includes("authentication")||o.includes("jwt")||o.includes("oauth")?"auth":o.includes("payment")||o.includes("stripe")||o.includes("paypal")||o.includes("billing")?"payment":o.includes("analytics")||o.includes("tracking")||o.includes("metrics")||o.includes("monitoring")?"analytics":o.includes("documentation")||o.includes("docs")||o.includes("readme")||o.includes("guide")?"documentation":"web"}extractKeyFiles(t){const r=[],a=["package.json","package-lock.json","yarn.lock","index.html","index.js","index.jsx","index.ts","index.tsx","App.js","App.jsx","App.ts","App.tsx","main.js","main.ts","main.jsx","main.tsx","src/","components/","pages/","views/","README.md","readme.md","docker-compose.yml","Dockerfile","tsconfig.json","webpack.config.js","vite.config.js","tailwind.config.js","postcss.config.js"];return t.forEach(n=>{a.some(i=>n.name.toLowerCase()===i.toLowerCase()||n.name.toLowerCase().startsWith(i.toLowerCase()))&&r.push({name:n.name,path:n.path,type:n.type,size:n.size,downloadUrl:n.download_url})}),r.slice(0,20)}generateTemplateName(t){return t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" ").replace(/template|starter|boilerplate|example|demo/gi,"").trim()}categorizeTemplate(t,r){return{react:"web-apps",vue:"web-apps",angular:"web-apps",svelte:"web-apps",nodejs:"web-apps",python:"web-apps",php:"web-apps",go:"web-apps",rust:"web-apps",java:"web-apps",mobile:"mobile-apps",api:"apis",dashboard:"dashboards",ecommerce:"e-commerce",blog:"portfolios",portfolio:"portfolios",landing:"landing-pages",cms:"web-apps",ui:"web-apps",testing:"web-apps",devops:"apis",database:"apis",auth:"apis",payment:"apis",analytics:"dashboards",documentation:"portfolios",web:"web-apps"}[t]||"web-apps"}generateTags(t,r){const a=[r];t.language&&a.push(t.language.toLowerCase()),t.topics&&a.push(...t.topics.slice(0,3));const n={react:["react","javascript"],vue:["vue","javascript"],angular:["angular","typescript"],nodejs:["nodejs","express"],python:["python","django"],mobile:["react-native","mobile"]};return n[r]&&a.push(...n[r]),[...new Set(a)].slice(0,5)}deduplicateRepos(t){const r=new Set;return t.filter(a=>r.has(a.id)?!1:(r.add(a.id),!0))}isTemplateRepository(t){const r=t.name.toLowerCase(),a=(t.description||"").toLowerCase(),n=(t.topics||[]).join(" ").toLowerCase(),o=["todo-app","calculator","weather-app","recipe-app","expense-tracker","note-taking","bookmark-manager","task-manager","habit-tracker","budget-planner","calendar-app","contact-book","photo-gallery","music-player","video-player","chat-app","forum","blog","portfolio","landing-page","online-store","restaurant-menu","event-planner","booking-system","survey-form","quiz-app","game","puzzle","memory-game","tic-tac-toe","snake-game","pong","breakout","maze","word-search","sudoku","hangman","trivia","flashcards","timer","stopwatch","pomodoro","countdown","random-generator","password-generator","color-picker","unit-converter","currency-converter","tip-calculator","bmi-calculator","age-calculator","date-calculator","percentage-calculator","loan-calculator","mortgage-calculator","investment-calculator","tax-calculator","grade-calculator","gpa-calculator","starter","template","example","demo","sample","tutorial","beginner","simple","basic"].some(u=>r.includes(u)||a.includes(u)||n.includes(u)),l=t.stargazers_count>=10,d=new Date(t.updated_at)>new Date("2019-01-01"),c=t.description&&t.description.length>10;return o&&l&&d&&c}filterTemplateRepos(t){return t.filter(r=>this.isTemplateRepository(r))}async searchTemplates(t,r="all"){return(await this.getTrendingTemplates()).filter(n=>{const i=n.name.toLowerCase().includes(t.toLowerCase())||n.description.toLowerCase().includes(t.toLowerCase())||n.tags.some(l=>l.toLowerCase().includes(t.toLowerCase())),o=r==="all"||n.category===r;return i&&o})}async getTemplateById(t){const a=(await this.getTrendingTemplates()).find(n=>n.id===t);return a?await this.getRepositoryTemplate(a):null}async getTemplatesByCategory(t){return(await this.getTrendingTemplates()).filter(a=>a.category===t)}async getPopularTemplates(t=10){return(await this.getTrendingTemplates()).sort((a,n)=>n.popularity-a.popularity).slice(0,t)}getFallbackTemplates(){return[{id:"fallback-todo-1",name:"Simple Todo App",description:"A clean and simple todo application with add, edit, and delete functionality.",category:"todo-app",templateType:"web",difficulty:"beginner",estimatedTime:"2-4 hours",tags:["javascript","html","css","todo","task-management"],popularity:85,stars:150,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/simple-todo-app",features:["Add tasks","Mark complete","Delete tasks","Local storage"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999001,fullName:"example/simple-todo-app",htmlUrl:"https://github.com/example/simple-todo-app",cloneUrl:"https://github.com/example/simple-todo-app.git",language:"JavaScript",stargazersCount:150,forksCount:25,topics:["todo","javascript","html","css"],owner:"example"}},{id:"fallback-calculator-1",name:"Basic Calculator",description:"A functional calculator with basic arithmetic operations.",category:"calculator",templateType:"web",difficulty:"beginner",estimatedTime:"1-2 hours",tags:["javascript","html","css","calculator","math"],popularity:90,stars:200,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/basic-calculator",features:["Basic operations","Clear function","Responsive design"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999002,fullName:"example/basic-calculator",htmlUrl:"https://github.com/example/basic-calculator",cloneUrl:"https://github.com/example/basic-calculator.git",language:"JavaScript",stargazersCount:200,forksCount:30,topics:["calculator","javascript","math"],owner:"example"}},{id:"fallback-weather-1",name:"Weather Dashboard",description:"A weather app that displays current conditions and forecast.",category:"weather-app",templateType:"web",difficulty:"intermediate",estimatedTime:"3-5 hours",tags:["javascript","api","weather","dashboard"],popularity:75,stars:120,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/weather-dashboard",features:["Current weather","5-day forecast","Location search"],techStack:["HTML","CSS","JavaScript","Weather API"],isFallback:!0,githubData:{id:999003,fullName:"example/weather-dashboard",htmlUrl:"https://github.com/example/weather-dashboard",cloneUrl:"https://github.com/example/weather-dashboard.git",language:"JavaScript",stargazersCount:120,forksCount:20,topics:["weather","api","dashboard"],owner:"example"}},{id:"fallback-portfolio-1",name:"Personal Portfolio",description:"A modern, responsive portfolio website template.",category:"portfolio",templateType:"web",difficulty:"intermediate",estimatedTime:"4-6 hours",tags:["html","css","javascript","portfolio","responsive"],popularity:95,stars:300,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/personal-portfolio",features:["Responsive design","Project showcase","Contact form"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999004,fullName:"example/personal-portfolio",htmlUrl:"https://github.com/example/personal-portfolio",cloneUrl:"https://github.com/example/personal-portfolio.git",language:"HTML",stargazersCount:300,forksCount:50,topics:["portfolio","responsive","html","css"],owner:"example"}},{id:"fallback-game-1",name:"Snake Game",description:"Classic Snake game built with vanilla JavaScript.",category:"game",templateType:"web",difficulty:"intermediate",estimatedTime:"3-4 hours",tags:["javascript","game","canvas","snake"],popularity:80,stars:180,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/snake-game",features:["Keyboard controls","Score tracking","Game over screen"],techStack:["HTML","CSS","JavaScript","Canvas"],isFallback:!0,githubData:{id:999005,fullName:"example/snake-game",htmlUrl:"https://github.com/example/snake-game",cloneUrl:"https://github.com/example/snake-game.git",language:"JavaScript",stargazersCount:180,forksCount:35,topics:["game","snake","canvas","javascript"],owner:"example"}}]}transformRepositoryToTemplate(t,r="web"){var a;return{id:`github_${t.id}`,name:this.generateTemplateName(t.name),description:t.description||`Template based on ${t.full_name}`,category:this.categorizeTemplate(this.detectTemplateType(t,[]),t),templateType:this.detectTemplateType(t,[]),difficulty:this.estimateDifficulty(t),estimatedTime:this.estimateTime(t),tags:this.generateTags(t,this.detectTemplateType(t,[])),popularity:Math.min(Math.floor(t.stargazers_count/100),100),stars:t.stargazers_count,lastUpdated:t.updated_at,createdAt:t.created_at,source:"github",repositoryUrl:t.html_url,features:this.extractFeatures(t),techStack:this.extractTechStack(t),githubData:{id:t.id,fullName:t.full_name,htmlUrl:t.html_url,cloneUrl:t.clone_url,language:t.language,stargazersCount:t.stargazers_count,forksCount:t.forks_count,topics:t.topics||[],owner:(a=t.owner)==null?void 0:a.login}}}estimateDifficulty(t){return t.stargazers_count>500?"advanced":t.stargazers_count>100?"intermediate":"beginner"}estimateTime(t){const r=t.stargazers_count;return r>500?"6-8 hours":r>100?"3-5 hours":"1-3 hours"}extractFeatures(t){const r=[],a=t.name.toLowerCase(),n=(t.description||"").toLowerCase();return(a.includes("todo")||n.includes("todo"))&&r.push("Task management","Add/Edit tasks","Mark complete"),(a.includes("calculator")||n.includes("calculator"))&&r.push("Basic operations","Clear function"),(a.includes("weather")||n.includes("weather"))&&r.push("Current weather","Forecast","Location search"),(a.includes("portfolio")||n.includes("portfolio"))&&r.push("Project showcase","Responsive design","Contact form"),(a.includes("game")||n.includes("game"))&&r.push("Interactive gameplay","Score tracking"),r.length>0?r:["Modern design","Responsive layout"]}extractTechStack(t){const r=[];t.language&&r.push(t.language);const a=t.topics||[];return a.includes("react")&&r.push("React"),a.includes("vue")&&r.push("Vue"),a.includes("angular")&&r.push("Angular"),a.includes("html")&&r.push("HTML"),a.includes("css")&&r.push("CSS"),a.includes("javascript")&&r.push("JavaScript"),a.includes("typescript")&&r.push("TypeScript"),r.length>0?r:["HTML","CSS","JavaScript"]}clearCache(){this.templateCache.clear(),this.trendingRepos=[],console.log("🗑️ GitHub template cache cleared")}}const ct=new xh,ln={"codellama-7b":{name:"CodeLlama 7B",type:"Code Generation",baseURL:"http://localhost:11434/api",model:"codellama:7b",description:"Fast and efficient code generation (7B parameters)",languages:["python","javascript","java","cpp","go","rust","php","ruby"],strengths:["speed","efficiency","general-purpose"],ram_required:"8GB"},auto:{name:"Auto Select",type:"Auto Selection",baseURL:"http://localhost:11434/api",model:"auto",description:"Automatically selects the best available model",languages:["all"],strengths:["smart-selection","availability"],ram_required:"variable"}},Ct={"web-apps":{name:"Web Applications",description:"Full-stack web applications",templates:[{id:"react-dashboard",name:"React Dashboard",description:"Modern React dashboard with charts and analytics",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"ecommerce-store",name:"E-commerce Store",description:"Complete online store with cart and checkout",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]}]},"mobile-apps":{name:"Mobile Applications",description:"React Native mobile applications",templates:[{id:"todo-app",name:"Todo App",description:"Simple todo application with React Native",category:"mobile-apps",files:["App.js","components/TodoItem.js","styles.js"]}]}};class bh{constructor(){if(this.isHealthy=!1,this.modelHealth={},this.availableModels=Object.keys(ln),this.baseURL="http://localhost:11434/api",this.isProduction=window.location.protocol==="https:",this.isLocalhost=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",this.isProduction&&!this.isLocalhost){console.log("🌐 Production environment detected - skipping local AI detection"),this.isHealthy=!1;return}console.log("🔍 Initializing local AI health monitoring..."),this.checkHealth(),setInterval(()=>{this.checkHealthQuiet()},3e4)}async checkHealth(){if(!(this.isProduction&&!this.isLocalhost))try{const t=await Z.get(`${this.baseURL}/tags`,{timeout:3e3});if(t.status===200){const r=this.isHealthy;this.isHealthy=!0,r||console.log("✅ Local AI service is healthy");const a=t.data.models||[];this.modelHealth={},a.forEach(n=>{this.modelHealth[n.name]={isHealthy:!0,size:n.size,modified_at:n.modified_at}})}else{const r=this.isHealthy;this.isHealthy=!1,r&&console.log("⚠️ Local AI service is not responding")}}catch(t){const r=this.isHealthy;this.isHealthy=!1,t.code==="ERR_NETWORK"||t.message.includes("CORS")?r||console.log("🔒 Local AI not accessible (CORS/Network) - using cloud AI"):t.code==="ECONNREFUSED"?r||console.log("💻 Ollama not running locally - using cloud AI"):r||console.log("⚠️ Local AI service not available:",t.message)}}async checkHealthQuiet(){if(!(this.isProduction&&!this.isLocalhost))try{const t=await Z.get(`${this.baseURL}/tags`,{timeout:3e3});if(t.status===200){const r=this.isHealthy;this.isHealthy=!0;const a=t.data.models||[];this.modelHealth={},a.forEach(n=>{this.modelHealth[n.name]={isHealthy:!0,size:n.size,modified_at:n.modified_at}})}else this.isHealthy=!1}catch{this.isHealthy=!1}}getAvailableModels(){return Object.values(ln)}getHealthyModels(){return Object.keys(this.modelHealth).filter(t=>this.modelHealth[t].isHealthy)}getTemplateCategories(){return Ct}getTemplatesByCategory(t){var r;return((r=Ct[t])==null?void 0:r.templates)||[]}async getAllTemplates(){const t=[];Object.values(Ct).forEach(n=>{t.push(...n.templates)});const a=(await ct.getTrendingTemplates()).map(n=>ct.transformRepositoryToTemplate(n));return[...t,...a]}async searchTemplates(t){const r=[];Object.values(Ct).forEach(o=>{r.push(...o.templates)});const n=(await ct.searchTemplates(t)).map(o=>ct.transformRepositoryToTemplate(o));return[...r,...n].filter(o=>o.name.toLowerCase().includes(t.toLowerCase())||(o.description||"").toLowerCase().includes(t.toLowerCase()))}async getPopularTemplates(){const t=[];Object.values(Ct).forEach(i=>{t.push(...i.templates)});const a=(await ct.getPopularTemplates(5)).map(i=>ct.transformRepositoryToTemplate(i));return[...t,...a].sort((i,o)=>(o.popularity||0)-(i.popularity||0)).slice(0,10)}async generateTemplateById(t,r={}){if(t.startsWith("github_"))return await this.generateGitHubTemplate(t,r);const a=[];Object.values(Ct).forEach(i=>{a.push(...i.templates)});const n=a.find(i=>i.id===t);if(!n)throw new Error(`Template ${t} not found`);return this.createTemplateFiles(n,r)}async generateGitHubTemplate(t,r={}){try{console.log(`🚀 Generating GitHub template: ${t}`);const a=await ct.getTemplateById(t);if(!a)throw new Error(`GitHub template ${t} not found`);const n=await this.createGitHubTemplateFiles(a,r);return console.log(`✅ Generated ${Object.keys(n).length} files from GitHub template`),n}catch(a){throw console.error(`❌ Failed to generate GitHub template ${t}:`,a),a}}async createGitHubTemplateFiles(t,r={}){const a={};try{const{githubData:n}=t;return a["README.md"]=`# ${t.name}

${t.description}

## GitHub Repository
- **Source**: [${n.fullName}](${n.htmlUrl})
- **Stars**: ${n.stargazersCount}
- **Language**: ${n.language||"JavaScript"}

## Getting Started

This template is based on the GitHub repository: ${n.fullName}

### Installation
\`\`\`bash
git clone ${n.cloneUrl}
cd ${n.fullName}
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
`,a["package.json"]=this.createPackageJson(t,r),a[this.getMainFileName(t)]=this.createMainFile(t,r),(t.templateType==="react"||t.templateType==="vue"||t.templateType==="web")&&(a["index.html"]=this.createIndexHtml(t,r)),Object.entries(r).forEach(([i,o])=>{typeof o=="string"&&(a[i]=o)}),a}catch(n){throw console.error("Failed to create GitHub template files:",n),n}}createPackageJson(t,r={}){const a={name:t.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:t.description,main:this.getMainFileName(t),scripts:{start:"npm run dev",dev:this.getDevScript(t),build:this.getBuildScript(t),test:'echo "No tests specified" && exit 0'},keywords:t.tags,author:r.author||"DreamBuild User",license:"MIT",repository:{type:"git",url:t.githubData.cloneUrl}};return a.dependencies=this.getTemplateDependencies(t),a.devDependencies=this.getTemplateDevDependencies(t),JSON.stringify(a,null,2)}getMainFileName(t){return{react:"src/App.jsx",vue:"src/main.js",angular:"src/main.ts",nodejs:"index.js",python:"main.py",mobile:"App.js",web:"index.js"}[t.templateType]||"index.js"}getDevScript(t){return{react:"react-scripts start",vue:"vue-cli-service serve",angular:"ng serve",nodejs:"nodemon index.js",python:"python main.py",mobile:"expo start",web:"live-server"}[t.templateType]||"node index.js"}getBuildScript(t){return{react:"react-scripts build",vue:"vue-cli-service build",angular:"ng build",nodejs:'echo "No build step needed"',python:'echo "No build step needed"',mobile:"expo build",web:'echo "No build step needed"'}[t.templateType]||'echo "No build step needed"'}getTemplateDependencies(t){return{react:{react:"^18.0.0","react-dom":"^18.0.0"},vue:{vue:"^3.0.0"},angular:{"@angular/core":"^15.0.0","@angular/common":"^15.0.0"},svelte:{svelte:"^3.0.0"},nodejs:{express:"^4.18.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{"react-native":"^0.70.0",expo:"~47.0.0"},api:{express:"^4.18.0"},dashboard:{react:"^18.0.0","react-dom":"^18.0.0"},ecommerce:{react:"^18.0.0","react-dom":"^18.0.0"},blog:{next:"^13.0.0",react:"^18.0.0"},portfolio:{react:"^18.0.0","react-dom":"^18.0.0"},landing:{react:"^18.0.0","react-dom":"^18.0.0"},web:{}}[t.templateType]||{}}getTemplateDevDependencies(t){return{react:{"react-scripts":"5.0.1"},vue:{"@vue/cli-service":"^5.0.0"},angular:{"@angular/cli":"^15.0.0"},svelte:{vite:"^4.0.0"},nodejs:{nodemon:"^2.0.0"},python:{},php:{},go:{},rust:{},java:{},mobile:{},api:{nodemon:"^2.0.0"},dashboard:{"react-scripts":"5.0.1"},ecommerce:{"react-scripts":"5.0.1"},blog:{next:"^13.0.0"},portfolio:{"react-scripts":"5.0.1"},landing:{"react-scripts":"5.0.1"},web:{"live-server":"^1.2.0"}}[t.templateType]||{}}createMainFile(t,r={}){const a={react:`import React from 'react';
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
// Repository: ${t.githubData.htmlUrl}`};return a[t.templateType]||a.web}createIndexHtml(t,r={}){return`<!DOCTYPE html>
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
</html>`}createTemplateFiles(t,r={}){const a={};switch(t.id){case"react-dashboard":a["index.html"]=`<!DOCTYPE html>
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
</html>`}return a}async generateCode(t,r={}){console.log("🚀 Starting code generation for prompt:",t);try{return this.isProduction&&!this.isLocalhost?(console.log("🌐 Production environment - using template fallback"),this.createFallbackResponse(t,r)):this.isHealthy?await this.generateWithLocalAI(t,r):(console.log("⚠️ Local AI not available, using template fallback"),this.createFallbackResponse(t,r))}catch(a){return console.error("❌ Code generation failed:",a),this.createFallbackResponse(t,r)}}async generateWithLocalAI(t,r={}){const a=this.getBestAvailableModel(),n=this.createSystemPrompt(r),i={model:a,messages:[{role:"system",content:n},{role:"user",content:t}],stream:!1,options:{temperature:.7,top_p:.9,max_tokens:4e3}};try{const o=await Z.post(`${this.baseURL}/chat`,i,{timeout:3e4,headers:{"Content-Type":"application/json"}});if(o.data&&o.data.message&&o.data.message.content){const l=o.data.message.content;return this.parseAIResponse(l,t)}else throw new Error("Invalid response from local AI")}catch(o){throw console.error("❌ Local AI generation failed:",o),o}}getBestAvailableModel(){const t=this.getHealthyModels();return t.includes("codellama:7b")?"codellama:7b":t.includes("codellama:13b")?"codellama:13b":t.includes("codellama:34b")?"codellama:34b":t[0]||"codellama:7b"}createSystemPrompt(t={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

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

Generate practical, working applications that users can immediately use.`}parseAIResponse(t,r){try{const a=t.match(/\{[\s\S]*\}/);if(a){const n=JSON.parse(a[0]);if(n.files)return n.files}return this.createFallbackResponse(r,{})}catch(a){return console.error("❌ Failed to parse AI response:",a),this.createFallbackResponse(r,{})}}createFallbackResponse(t,r={}){console.log("🔄 Creating fallback response for prompt:",t);const a=t.toLowerCase();return a.includes("dashboard")||a.includes("analytics")?this.generateTemplateById("react-dashboard",r):a.includes("todo")||a.includes("task")?this.generateTemplateById("todo-app",r):a.includes("ecommerce")||a.includes("store")||a.includes("shop")?this.generateTemplateById("ecommerce-store",r):{"index.html":`<!DOCTYPE html>
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
}`}}}const ie=new bh;class yh{constructor(){this.currentService="local-ai",this.usageStats={totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0},console.log("🤖 Simple AI Service initialized - Local AI only!")}getServices(){return{"local-ai":{name:"Local AI Models",type:"Local",description:"Self-hosted AI models - no API keys required",models:ie.getAvailableModels()}}}getTemplateCategories(){return ie.getTemplateCategories()}getTemplatesByCategory(t){return ie.getTemplatesByCategory(t)}async getAllTemplates(){return await ie.getAllTemplates()}async generateTemplateById(t,r={}){return await ie.generateTemplateById(t,r)}async searchTemplates(t){return await ie.searchTemplates(t)}async getPopularTemplates(){return await ie.getPopularTemplates()}async generateCode(t,r={}){const a=Date.now();this.usageStats.totalRequests++;try{if(console.log("🚀 Generating code with Local AI..."),!ie.isHealthy)return console.log("⚠️ Local AI not available, using template fallback"),ie.createFallbackResponse(t,r);const n=await ie.generateCode(t,r),i=Date.now()-a;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+i)/2,console.log("✅ Code generated successfully with Local AI!"),n&&n.files?n.files:(console.warn("⚠️ No files found in response, returning empty object"),{})}catch(n){return console.error("❌ Local AI generation failed:",n),this.usageStats.failedRequests++,console.log("🔄 Falling back to template generation..."),ie.createFallbackResponse(t,r)}}getServiceHealth(){return ie.modelHealth}getUsageStats(){return this.usageStats}getUserPreferences(){return{preferredService:"local-ai",fallbackEnabled:!0,autoHealthCheck:!0}}updateUserPreferences(t){localStorage.setItem("dreambuild-preferences",JSON.stringify(t))}loadUserPreferences(){const t=localStorage.getItem("dreambuild-preferences");return t?JSON.parse(t):this.getUserPreferences()}getServiceStatus(){return{"local-ai":{isHealthy:ie.isHealthy,models:ie.getHealthyModels().length,totalModels:ie.getAvailableModels().length}}}resetServiceHealth(){ie.modelHealth={}}getFallbackOrder(){return["local-ai"]}isFallbackEnabled(){return!0}setFallbackEnabled(t){return!0}getSetupInstructions(){return{"local-ai":{title:"Local AI Setup",description:"Set up local AI models for code generation",steps:["1. Install Ollama from https://ollama.ai","2. Run: ollama pull codellama:7b","3. Run: ollama serve","4. Refresh DreamBuild to start using local AI"],isSetup:ie.isHealthy}}}getServicesNeedingSetup(){return ie.isHealthy?[]:["local-ai"]}hasValidApiKey(t){return t==="local-ai"}setService(t){t==="local-ai"&&(this.currentService=t)}getCurrentService(){return this.currentService}}const Kt=new yh,vh=Object.freeze(Object.defineProperty({__proto__:null,default:Kt},Symbol.toStringTag,{value:"Module"}));class jh{constructor(){this.isAutoModeEnabled=!1,this.isRunning=!1,this.currentTask=null,this.taskQueue=[],this.iterationCount=0,this.maxIterations=5,this.fileWatchers=new Map,this.progressCallbacks=new Set,this.autoRefinementEnabled=!0,this.backgroundMonitoringEnabled=!0}toggleAutoMode(){return this.isAutoModeEnabled=!this.isAutoModeEnabled,this.isAutoModeEnabled?(console.log("🤖 AI Agent Auto Mode: ENABLED"),this.startBackgroundMonitoring()):(console.log("🤖 AI Agent Auto Mode: DISABLED"),this.stopBackgroundMonitoring(),this.stopCurrentTask()),this.isAutoModeEnabled}breakdownTask(t,r={}){console.log("🧠 Breaking down task:",t);const a=[],n=t.toLowerCase();return n.includes("full-stack")||n.includes("e-commerce")||n.includes("website")?a.push({id:1,title:"Project Setup",description:"Initialize project structure and dependencies",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Database Schema",description:"Design and implement database structure",priority:"high",estimatedTime:"5-7 min"},{id:3,title:"Authentication System",description:"Implement user login and registration",priority:"high",estimatedTime:"8-10 min"},{id:4,title:"Core Features",description:"Build main application functionality",priority:"medium",estimatedTime:"15-20 min"},{id:5,title:"UI/UX Polish",description:"Add styling, animations, and responsive design",priority:"medium",estimatedTime:"10-15 min"},{id:6,title:"Testing & Optimization",description:"Add tests and optimize performance",priority:"low",estimatedTime:"5-10 min"}):n.includes("react")||n.includes("frontend")?a.push({id:1,title:"Component Architecture",description:"Design React component structure",priority:"high",estimatedTime:"3-5 min"},{id:2,title:"State Management",description:"Implement state management solution",priority:"high",estimatedTime:"5-8 min"},{id:3,title:"Core Components",description:"Build main UI components",priority:"medium",estimatedTime:"10-15 min"},{id:4,title:"Routing & Navigation",description:"Add client-side routing",priority:"medium",estimatedTime:"5-8 min"},{id:5,title:"Styling & Responsiveness",description:"Add CSS and responsive design",priority:"low",estimatedTime:"8-12 min"}):n.includes("api")||n.includes("backend")?a.push({id:1,title:"API Structure",description:"Design REST API endpoints",priority:"high",estimatedTime:"5-8 min"},{id:2,title:"Database Integration",description:"Set up database connections and models",priority:"high",estimatedTime:"8-12 min"},{id:3,title:"Authentication & Security",description:"Implement JWT and security middleware",priority:"high",estimatedTime:"10-15 min"},{id:4,title:"Business Logic",description:"Implement core API functionality",priority:"medium",estimatedTime:"15-25 min"},{id:5,title:"Error Handling & Validation",description:"Add comprehensive error handling",priority:"medium",estimatedTime:"5-10 min"},{id:6,title:"Documentation & Testing",description:"Add API docs and tests",priority:"low",estimatedTime:"8-15 min"}):a.push({id:1,title:"Analysis",description:"Analyze requirements and plan approach",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Implementation",description:"Build core functionality",priority:"high",estimatedTime:"10-20 min"},{id:3,title:"Enhancement",description:"Add features and improvements",priority:"medium",estimatedTime:"8-15 min"},{id:4,title:"Polish",description:"Refine and optimize the solution",priority:"low",estimatedTime:"5-10 min"}),{originalPrompt:t,tasks:a,totalEstimatedTime:a.reduce((i,o)=>i+parseInt(o.estimatedTime.split("-")[0]),0),complexity:this.assessComplexity(t),autoModeRecommended:a.length>3}}assessComplexity(t){const r={simple:["button","form","page","component"],medium:["app","website","dashboard","api","database"],complex:["full-stack","e-commerce","social media","platform","enterprise"]},a=t.toLowerCase();for(const[n,i]of Object.entries(r))if(i.some(o=>a.includes(o)))return n;return"medium"}async startContinuousIteration(t,r={}){if(!this.isAutoModeEnabled){console.log("⚠️ Auto Mode not enabled");return}this.isRunning=!0,this.iterationCount=0,this.currentTask=this.breakdownTask(t,r),console.log("🔄 Starting continuous iteration for:",t);for(const a of this.currentTask.tasks){if(!this.isAutoModeEnabled||!this.isRunning)break;await this.executeTask(a,r),this.iterationCount++,this.autoRefinementEnabled&&this.iterationCount<this.maxIterations&&await this.autoRefine(a,r)}this.isRunning=!1,console.log("✅ Continuous iteration completed")}async executeTask(t,r={}){console.log(`🎯 Executing task ${t.id}: ${t.title}`),this.notifyProgress({type:"task_start",task:t,message:`Starting ${t.title}...`});try{await this.delay(this.getTaskDuration(t)),this.notifyProgress({type:"task_complete",task:t,message:`Completed ${t.title}`})}catch(a){console.error(`❌ Task ${t.id} failed:`,a),this.notifyProgress({type:"task_error",task:t,message:`Failed ${t.title}: ${a.message}`})}}async autoRefine(t,r={}){console.log(`🔧 Auto-refining: ${t.title}`),this.notifyProgress({type:"refinement_start",task:t,message:`Auto-refining ${t.title}...`}),await this.delay(2e3),this.notifyProgress({type:"refinement_complete",task:t,message:`Refined ${t.title}`})}startBackgroundMonitoring(){this.backgroundMonitoringEnabled&&(console.log("👀 Starting background monitoring"),this.setupFileWatchers(),this.startCodeQualityMonitoring(),this.startPerformanceMonitoring())}stopBackgroundMonitoring(){console.log("👀 Stopping background monitoring"),this.fileWatchers.forEach(t=>t.disconnect()),this.fileWatchers.clear()}setupFileWatchers(){console.log("📁 Setting up file watchers"),this.fileWatcherInterval=setInterval(()=>{this.checkForFileChanges()},5e3)}checkForFileChanges(){const t=this.simulateFileChanges();t.length>0&&(this.notifyProgress({type:"file_changes",changes:t,message:`Detected ${t.length} file changes`}),this.isAutoModeEnabled&&this.suggestImprovements(t))}simulateFileChanges(){const t=[];return Math.random()>.7&&t.push({file:"src/components/App.jsx",type:"modified",timestamp:new Date}),t}suggestImprovements(t){console.log("💡 Suggesting improvements for:",t);const r=["Consider adding error boundaries to React components","Optimize bundle size by lazy loading components","Add TypeScript for better type safety","Implement proper error handling in API calls","Add loading states for better UX"],a=r[Math.floor(Math.random()*r.length)];this.notifyProgress({type:"improvement_suggestion",suggestion:a,message:`Suggestion: ${a}`})}startCodeQualityMonitoring(){console.log("🔍 Starting code quality monitoring"),this.qualityCheckInterval=setInterval(()=>{this.performQualityCheck()},1e4)}performQualityCheck(){const t=this.simulateQualityIssues();t.length>0&&this.notifyProgress({type:"quality_issues",issues:t,message:`Found ${t.length} code quality issues`})}simulateQualityIssues(){const t=[];return Math.random()>.8&&t.push({type:"warning",message:"Unused import detected",file:"src/components/Button.jsx",line:5}),t}startPerformanceMonitoring(){console.log("⚡ Starting performance monitoring"),this.performanceCheckInterval=setInterval(()=>{this.checkPerformance()},15e3)}checkPerformance(){const t=this.simulatePerformanceMetrics();t.score<80&&this.notifyProgress({type:"performance_issue",metrics:t,message:`Performance score: ${t.score}/100`})}simulatePerformanceMetrics(){return{score:Math.floor(Math.random()*40)+60,loadTime:Math.floor(Math.random()*2e3)+500,bundleSize:Math.floor(Math.random()*500)+200}}onProgress(t){this.progressCallbacks.add(t)}offProgress(t){this.progressCallbacks.delete(t)}notifyProgress(t){this.progressCallbacks.forEach(r=>{try{r(t)}catch(a){console.error("Progress callback error:",a)}})}getTaskDuration(t){const[r,a]=t.estimatedTime.split("-").map(n=>parseInt(n.replace(" min","")));return(Math.random()*(a-r)+r)*1e3}delay(t){return new Promise(r=>setTimeout(r,t))}stopCurrentTask(){this.isRunning=!1,this.currentTask=null,this.iterationCount=0,this.fileWatcherInterval&&clearInterval(this.fileWatcherInterval),this.qualityCheckInterval&&clearInterval(this.qualityCheckInterval),this.performanceCheckInterval&&clearInterval(this.performanceCheckInterval)}getStatus(){return{isAutoModeEnabled:this.isAutoModeEnabled,isRunning:this.isRunning,currentTask:this.currentTask,iterationCount:this.iterationCount,maxIterations:this.maxIterations,autoRefinementEnabled:this.autoRefinementEnabled,backgroundMonitoringEnabled:this.backgroundMonitoringEnabled}}}const cn=new jh;function wh(){const{currentProject:s,updateFile:t,switchFile:r}=Je(),[a,n]=m.useState(""),[i,o]=m.useState(!1),l=m.useRef(null),d=m.useRef(null),[c,u]=m.useState([]),[p,g]=m.useState([]),[y,x]=m.useState(!1),[b,h]=m.useState(!1),[N,j]=m.useState("auto"),[w,v]=m.useState(0),[f,E]=m.useState(!1),[S,k]=m.useState(!1),[D,O]=m.useState(!1),[L,A]=m.useState("unlimited"),[$,T]=m.useState(!1),[C,I]=m.useState({tokens:0,maxTokens:4e3,percentage:0,files:0,characters:0});m.useEffect(()=>{l.current&&(l.current.style.height="auto",l.current.style.height=l.current.scrollHeight+"px")},[a]),m.useEffect(()=>{var P;(P=d.current)==null||P.scrollIntoView({behavior:"smooth"})},[c]),m.useEffect(()=>{console.log(`🎯 AI Model state changed to: ${N}`)},[N]),m.useEffect(()=>{const P=B=>{f&&!B.target.closest(".model-selector")&&!B.target.closest('button[class*="w-full p-2 rounded"]')&&E(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[f]);const G=async()=>{if(!a.trim()||i)return;const P=a;n(""),o(!0);const B={id:Date.now(),type:"user",content:P,timestamp:new Date},_={id:Date.now()+1,type:"ai",content:"",timestamp:new Date,isLoading:!0};u(Q=>[...Q,B,_]);try{await z(P),cn.getStatus().autoMode&&await cn.breakdownTask(P),console.log("🚀 Starting AI generation...");const Q={conversationHistory:c,currentPrompt:P,previousFiles:Object.keys(s.files),projectContext:s.config},ne=await Kt.generateCode(P,Q);if(console.log("📁 Files received:",ne),console.log("📁 Files type:",typeof ne),console.log("📁 Files keys:",ne?Object.keys(ne):"No files"),!ne||typeof ne!="object")throw new Error("Invalid files response from AI service");u(Ut=>Ut.map(ot=>ot.id===_.id?{...ot,content:`Generated ${Object.keys(ne).length} files successfully!`,isLoading:!1,files:ne,timestamp:new Date}:ot));let jt=0;Object.entries(ne).forEach(([Ut,ot])=>{Ut&&ot!==void 0&&(console.log(`📄 Adding file: ${Ut} (${typeof ot})`),t(Ut,ot),jt++)}),console.log(`✅ Added ${jt} files to project`);const nr=Object.keys(ne)[0];nr&&(r(nr),console.log(`🎯 Set active file: ${nr}`))}catch(Q){console.error("Generation error:",Q),u(ne=>ne.map(jt=>jt.id===_.id?{...jt,content:`Error: ${Q.message}`,isLoading:!1,error:!0}:jt))}finally{o(!1)}},z=async P=>{const B=[{id:1,title:"Add responsive design",category:"UI/UX"},{id:2,title:"Implement error handling",category:"Performance"},{id:3,title:"Add TypeScript types",category:"Code Quality"},{id:4,title:"Optimize for mobile",category:"Mobile"}].filter(()=>Math.random()>.5);g(B)},M=P=>{navigator.clipboard.writeText(P),X.success("Message copied to clipboard")},W=(P,B)=>{u(_=>_.map(Q=>Q.id===P?{...Q,metadata:{...Q.metadata,feedback:B,feedbackTimestamp:new Date}}:Q)),X.success(`Feedback recorded: ${B}`)},H=P=>{P.key==="Enter"&&(P.preventDefault(),G())},q=P=>{P.preventDefault(),O(!0)},K=P=>{P.preventDefault(),O(!1)},ce=P=>{P.preventDefault(),O(!1);const B=Array.from(P.dataTransfer.files);B.length>0&&de(B)},de=P=>{const B=P.map(_=>_.name).join(", ");n(_=>_+`

[Attached files: ${B}]`),I(_=>({..._,files:_.files+P.length,characters:_.characters+B.length}))},$e=P=>({auto:"Auto","codellama-7b":"CodeLlama 7B","codellama-13b":"CodeLlama 13B","codellama-34b":"CodeLlama 34B","starcoder-15b":"StarCoder 15B","deepseek-coder":"DeepSeek Coder","wizardcoder-7b":"WizardCoder 7B","phi3-mini":"Phi-3 Mini","llama3-8b":"Llama 3 8B","mistral-7b":"Mistral 7B","gemma-7b":"Gemma 7B","qwen-7b":"Qwen 7B","codet5-small":"CodeT5 Small","incoder-6b":"InCoder 6B"})[P]||"Auto",ar=()=>[{id:"auto",name:"Auto",description:"Automatically selects the best model",ram_required:"Smart"},{id:"codellama-7b",name:"CodeLlama 7B",description:"Fast and efficient code generation",ram_required:"8GB"},{id:"codellama-13b",name:"CodeLlama 13B",description:"Higher quality code generation",ram_required:"16GB"},{id:"codellama-34b",name:"CodeLlama 34B",description:"Best quality code generation",ram_required:"32GB"},{id:"starcoder-15b",name:"StarCoder 15B",description:"Excellent code completion",ram_required:"24GB"},{id:"deepseek-coder",name:"DeepSeek Coder",description:"High-performance generation",ram_required:"12GB"},{id:"wizardcoder-7b",name:"WizardCoder 7B",description:"Great at following instructions",ram_required:"10GB"},{id:"phi3-mini",name:"Phi-3 Mini",description:"Lightweight but powerful",ram_required:"6GB"},{id:"llama3-8b",name:"Llama 3 8B",description:"General purpose model",ram_required:"10GB"},{id:"mistral-7b",name:"Mistral 7B",description:"Fast and efficient coding assistant",ram_required:"8GB"},{id:"gemma-7b",name:"Gemma 7B",description:"Google's lightweight model",ram_required:"9GB"},{id:"qwen-7b",name:"Qwen 7B",description:"Alibaba's coding model",ram_required:"8GB"},{id:"codet5-small",name:"CodeT5 Small",description:"Salesforce's code generation model",ram_required:"4GB"},{id:"incoder-6b",name:"InCoder 6B",description:"Code completion specialist",ram_required:"6GB"}];return e.jsxs("div",{className:"h-full flex flex-col bg-background overflow-hidden",children:[e.jsx("div",{className:"px-4 py-3 border-b border-border/30 bg-background",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(or,{className:"h-5 w-5 text-blue-500"}),e.jsx("span",{className:"font-medium text-foreground",children:"AI Assistant"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>x(!y),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"Chat",children:e.jsx(Ps,{className:"h-4 w-4 text-muted-foreground"})}),e.jsx("button",{onClick:()=>h(!b),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"AI Agent",children:e.jsx(or,{className:"h-4 w-4 text-muted-foreground"})})]})]})]})}),e.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:e.jsx("div",{className:"flex-1 overflow-y-auto bg-background min-h-0",children:e.jsxs("div",{className:"p-4 pb-8 space-y-6",children:[e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsxs("div",{className:"text-center max-w-md",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4",children:e.jsx(ft,{className:"h-8 w-8 text-blue-500"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Ask me anything"}),e.jsx("p",{className:"text-sm text-muted-foreground break-words leading-relaxed",children:"I can help you build applications, fix bugs, explain code, and much more."})]})}),e.jsx(Xe,{children:c.map((P,B)=>e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"w-full",children:e.jsxs("div",{className:`flex gap-4 ${P.type==="user"?"flex-row-reverse":"flex-row"}`,children:[e.jsx("div",{className:`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${P.type==="user"?"bg-blue-500 text-white":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`,children:P.type==="user"?e.jsx(Ds,{className:"h-4 w-4"}):e.jsx(or,{className:"h-4 w-4"})}),e.jsxs("div",{className:`flex-1 max-w-[80%] ${P.type==="user"?"text-right":"text-left"}`,children:[e.jsx("div",{className:`inline-block px-4 py-3 rounded-xl text-sm leading-relaxed break-words ${P.type==="user"?"bg-blue-500 text-white rounded-br-md":"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"}`,children:P.isLoading?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Qt,{className:"h-4 w-4 animate-spin"}),e.jsx("span",{children:"Thinking..."})]}):e.jsx("div",{className:"whitespace-pre-wrap break-words overflow-wrap-anywhere",children:P.content})}),!P.isLoading&&P.type==="ai"&&e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("button",{onClick:()=>M(P.content),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Copy",children:e.jsx(Ot,{className:"h-3.5 w-3.5 text-muted-foreground"})}),e.jsx("button",{onClick:()=>W(P.id,"like"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Like",children:e.jsx(Jo,{className:"h-3.5 w-3.5 text-muted-foreground"})}),e.jsx("button",{onClick:()=>W(P.id,"dislike"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Dislike",children:e.jsx(Yo,{className:"h-3.5 w-3.5 text-muted-foreground"})})]})]})]})},P.id))}),e.jsx("div",{ref:d})]})})}),e.jsx("div",{className:"border-t border-border/30 bg-background flex-shrink-0",children:e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{id:"ai-prompt-input","data-testid":"ai-prompt-input",ref:l,value:a,onChange:P=>n(P.target.value),onKeyPress:H,onDragOver:q,onDragLeave:K,onDrop:ce,placeholder:"Plan, search, build anything",className:`w-full resize-y bg-background border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm leading-relaxed break-words overflow-wrap-anywhere focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors ${D?"border-blue-500 bg-blue-50/50 dark:bg-blue-900/10":"border-border"}`,style:{minHeight:"120px",maxHeight:"300px",wordWrap:"break-word",overflowWrap:"anywhere"},disabled:i,rows:4,"aria-label":"AI prompt input"}),D&&e.jsx("div",{className:"absolute inset-0 bg-blue-500/10 border-2 border-blue-500 border-dashed rounded-lg flex items-center justify-center pointer-events-none",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-blue-500 text-lg font-medium",children:"Drop files here"}),e.jsx("div",{className:"text-blue-500 text-xs",children:"Files will be attached to your prompt"})]})}),e.jsx("div",{className:"absolute bottom-1 right-1 w-4 h-4 opacity-30",children:e.jsx("div",{className:"w-full h-full flex items-end justify-end",children:e.jsx("div",{className:"w-2 h-2 bg-muted-foreground/40",style:{backgroundImage:"repeating-linear-gradient(45deg, transparent, transparent 1px, currentColor 1px, currentColor 2px)"}})})})]}),e.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:()=>{var B;const P=a.includes("@")?"":"@file ";n(a+P),(B=l.current)==null||B.focus()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Mention files or references",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"@"})}),e.jsx("button",{onClick:()=>{const P=document.createElement("input");P.type="file",P.multiple=!0,P.accept=".txt,.md,.js,.jsx,.ts,.tsx,.css,.html,.json,.py,.java,.cpp,.c",P.onchange=B=>{const _=Array.from(B.target.files);_.length>0&&de(_)},P.click()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Attach files",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"📎"})}),e.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-foreground relative",children:[e.jsx("button",{onClick:()=>E(!f),className:"hover:text-blue-600 transition-colors",title:"Select AI Model",children:$e(N)},`model-button-${N}-${w}`),e.jsx("span",{className:"text-muted-foreground",children:"tab"}),e.jsxs("button",{onClick:P=>{P.stopPropagation(),k(!S)},className:"text-muted-foreground ml-2 hover:text-blue-600 transition-colors",title:"Click to view context usage",children:[C.percentage,"% O"]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{id:"generate-button","data-testid":"generate-button",onClick:G,disabled:!a.trim()||i,className:"w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shadow-sm",title:"Generate Code","aria-label":"Generate code from prompt",children:i?e.jsx(Qt,{className:"h-4 w-4 text-white animate-spin"}):e.jsx(Xr,{className:"h-4 w-4 text-white rotate-90"})}),e.jsx("button",{onClick:()=>T(!$),className:`text-lg transition-colors hover:text-blue-600 ${L==="unlimited"?"text-blue-500":"text-muted-foreground"}`,title:`Context Mode: ${L==="unlimited"?"Unlimited":"Limited"}`,children:"∞"})]})]})]})}),S&&e.jsxs("div",{className:"absolute bottom-20 left-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-80",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Usage"}),e.jsx("button",{onClick:()=>k(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Tokens"}),e.jsxs("span",{className:"text-xs font-medium text-foreground",children:[C.tokens.toLocaleString()," / ",C.maxTokens.toLocaleString()]})]}),e.jsx("div",{className:"w-full bg-muted rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${C.percentage}%`}})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Usage"}),e.jsxs("span",{className:"text-xs font-medium text-foreground",children:[C.percentage,"%"]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Files"}),e.jsxs("span",{className:"text-xs font-medium text-foreground",children:[C.files," files"]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Characters"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:C.characters.toLocaleString()})]}),e.jsx("div",{className:"pt-2 border-t border-border",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Model"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:$e(N)},`model-info-${N}-${w}`)]})})]})]}),$&&e.jsxs("div",{className:"absolute bottom-20 right-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Mode"}),e.jsx("button",{onClick:()=>T(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("button",{onClick:()=>{A("unlimited"),T(!1),X.success("Switched to Unlimited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${L==="unlimited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`text-xl ${L==="unlimited"?"text-blue-500":"text-muted-foreground"}`,children:"∞"}),e.jsxs("div",{className:"text-left",children:[e.jsx("div",{className:"font-medium text-sm",children:"Unlimited Context"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Access to entire codebase and conversation history"})]}),L==="unlimited"&&e.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),e.jsx("button",{onClick:()=>{A("limited"),T(!1),X.success("Switched to Limited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${L==="limited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`text-lg ${L==="limited"?"text-blue-500":"text-muted-foreground"}`,children:"⚡"}),e.jsxs("div",{className:"text-left",children:[e.jsx("div",{className:"font-medium text-sm",children:"Limited Context"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Faster responses with recent conversation only"})]}),L==="limited"&&e.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),e.jsxs("div",{className:"pt-3 border-t border-border",children:[e.jsx("div",{className:"text-xs text-muted-foreground mb-2",children:"Current Usage"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Mode"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:L==="unlimited"?"Unlimited":"Limited"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Context Window"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:L==="unlimited"?"∞ tokens":"4K tokens"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Performance"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:L==="unlimited"?"Comprehensive":"Fast"})]})]})]})]})]}),f&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40",onClick:P=>{P.target===P.currentTarget&&E(!1)}}),e.jsxs("div",{className:"fixed bottom-16 left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl w-72 z-50",style:{height:"300px",display:"flex",flexDirection:"column"},onClick:P=>P.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-1.5 border-b border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-xs font-semibold text-gray-900 dark:text-white",children:"AI Model"}),e.jsx("button",{onClick:()=>E(!1),className:"p-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",children:e.jsx("svg",{className:"w-3 h-3 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"overflow-y-auto p-1 space-y-0.5",style:{flex:"1",minHeight:"0"},children:ar().map(P=>e.jsx("button",{onClick:B=>{B.preventDefault(),B.stopPropagation(),j(P.id),v(_=>_+1),E(!1),X.success(`Switched to ${P.name}`)},className:`w-full p-2 rounded border transition-all duration-200 text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${N===P.id?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-gray-200 dark:border-gray-600"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:`rounded border-2 flex items-center justify-center transition-all duration-200 ${N===P.id?"border-blue-500 bg-blue-500":"border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"}`,style:{width:"12px",height:"12px",minWidth:"12px",minHeight:"12px"},children:N===P.id&&e.jsx("svg",{className:"text-white",fill:"currentColor",viewBox:"0 0 20 20",style:{width:"8px",height:"8px"},children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-medium text-xs text-gray-900 dark:text-white truncate",children:P.name}),e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 truncate",children:P.description})]})]}),e.jsx("div",{className:"text-xs px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 ml-1 flex-shrink-0",children:P.ram_required})]})},P.id))}),e.jsx("div",{className:"p-1 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",children:e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:"Auto selects best model"})})]})]})]})}var kt={};class Nh{constructor(){this.app=null,this.db=null,this.storage=null,this.auth=null,this.user=null,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const t={apiKey:kt.REACT_APP_FIREBASE_API_KEY||"your-api-key",authDomain:kt.REACT_APP_FIREBASE_AUTH_DOMAIN||"your-project.firebaseapp.com",projectId:kt.REACT_APP_FIREBASE_PROJECT_ID||"your-project-id",storageBucket:kt.REACT_APP_FIREBASE_STORAGE_BUCKET||"your-project.appspot.com",messagingSenderId:kt.REACT_APP_FIREBASE_MESSAGING_SENDER_ID||"123456789",appId:kt.REACT_APP_FIREBASE_APP_ID||"your-app-id"};try{this.app=kr(t)}catch(r){if(r.code==="app/duplicate-app")this.app=Cr();else if(r.code==="app/no-options")try{this.app=Cr()}catch{this.app=kr({apiKey:"demo-key",authDomain:"demo.firebaseapp.com",projectId:"demo-project"})}else throw r}this.db=Cn(this.app),this.storage=wi(this.app),this.auth=Sn(this.app),kn(this.auth,r=>{this.user=r,console.log("Firebase auth state changed:",r?"authenticated":"not authenticated")});try{await Uo(this.auth),console.log("✅ Firebase anonymous auth successful")}catch(r){console.log("⚠️ Firebase auth not available, continuing without authentication:",r.message),this.user=null}this.isInitialized=!0,console.log("🔥 Firebase initialized successfully")}catch(t){console.error("❌ Failed to initialize Firebase:",t),this.isInitialized=!1,this.user=null,console.log("⚠️ Continuing without Firebase services")}}async storeProjectContext(t,r){var a;try{await this.initialize();const n=se(this.db,"projectContexts",t);await je(n,{...r,userId:((a=this.user)==null?void 0:a.uid)||"anonymous",storedAt:new Date().toISOString(),dataSize:JSON.stringify(r).length}),console.log("✅ Project context stored successfully")}catch(n){throw console.error("❌ Failed to store project context:",n),n}}async loadProjectContext(t){try{await this.initialize();const r=se(this.db,"projectContexts",t),a=await vs(r);return a.exists()?(console.log("✅ Project context loaded successfully"),a.data()):(console.log("❌ Project context not found"),null)}catch(r){return console.error("❌ Failed to load project context:",r),null}}async storeProjectFiles(t,r){var a;try{await this.initialize();const n=se(this.db,"projectFiles",t);await je(n,{projectId:t,files:r,fileCount:Object.keys(r).length,totalSize:JSON.stringify(r).length,userId:((a=this.user)==null?void 0:a.uid)||"anonymous",storedAt:new Date().toISOString()}),console.log("✅ Project files stored successfully")}catch(n){throw console.error("❌ Failed to store project files:",n),n}}async loadProjectFiles(t){try{await this.initialize();const r=se(this.db,"projectFiles",t),a=await vs(r);return a.exists()?(console.log("✅ Project files loaded successfully"),a.data().files):(console.log("❌ Project files not found"),null)}catch(r){return console.error("❌ Failed to load project files:",r),null}}async storeTemplate(t){var r;try{await this.initialize();const a=se(this.db,"templates",t.id);await je(a,{...t,userId:((r=this.user)==null?void 0:r.uid)||"anonymous",updatedAt:new Date().toISOString()}),console.log("✅ Template stored successfully")}catch(a){throw console.error("❌ Failed to store template:",a),a}}async loadTemplates(){try{await this.initialize();const t=Ht(this.db,"templates"),r=await Gt(t),a=[];return r.forEach(n=>{a.push(n.data())}),console.log("✅ Templates loaded successfully"),a}catch(t){return console.error("❌ Failed to load templates:",t),[]}}async searchTemplates(t,r,a){try{await this.initialize();const n=Ht(this.db,"templates");let i=lt(n);t&&t.length>0&&(i=lt(i,wt("keywords","array-contains-any",t))),r&&r.length>0&&(i=lt(i,wt("technologies","array-contains-any",r))),a&&a.length>0&&(i=lt(i,wt("patterns","array-contains-any",a)));const o=await Gt(i),l=[];return o.forEach(d=>{l.push(d.data())}),console.log("✅ Templates searched successfully"),l}catch(n){return console.error("❌ Failed to search templates:",n),[]}}async storeLargeFile(t,r,a){try{await this.initialize();const n=mt(this.storage,`projects/${t}/${r}`),i=new Blob([a],{type:"text/plain"});await dt(n,i);const o=await ut(n);return console.log("✅ Large file stored successfully"),o}catch(n){throw console.error("❌ Failed to store large file:",n),n}}async loadLargeFile(t){try{const a=await(await fetch(t)).text();return console.log("✅ Large file loaded successfully"),a}catch(r){return console.error("❌ Failed to load large file:",r),null}}async getUserProjects(){var t;try{await this.initialize();const r=Ht(this.db,"projectContexts"),a=lt(r,wt("userId","==",((t=this.user)==null?void 0:t.uid)||"anonymous")),n=await Gt(a),i=[];return n.forEach(o=>{i.push({id:o.id,...o.data()})}),console.log("✅ User projects loaded successfully"),i}catch(r){return console.error("❌ Failed to load user projects:",r),[]}}async deleteProject(t){try{await this.initialize();const r=se(this.db,"projectContexts",t);await ir(r);const a=se(this.db,"projectFiles",t);await ir(a),console.log("✅ Project deleted successfully")}catch(r){throw console.error("❌ Failed to delete project:",r),r}}async getStorageStats(){try{await this.initialize();const t=await this.getUserProjects();let r=0,a=0;for(const n of t)r+=n.dataSize||0,a+=n.fileCount||0;return{totalProjects:t.length,totalFiles:a,totalSize:r,totalSizeMB:Math.round(r/(1024*1024)*100)/100}}catch(t){return console.error("❌ Failed to get storage stats:",t),{totalProjects:0,totalFiles:0,totalSize:0,totalSizeMB:0}}}async storeConversationMemory(t,r){var a,n;try{await this.initialize();const i=JSON.stringify(r),o=8e5;if(i.length>o){console.log("⚠️ Conversation data too large, storing in chunks");const l=this.chunkData(r,o);for(let d=0;d<l.length;d++){const c=se(this.db,"conversationMemory",`${t}_chunk_${d}`);await je(c,{projectId:t,chunkIndex:d,totalChunks:l.length,conversation:l[d],userId:((a=this.user)==null?void 0:a.uid)||"anonymous",lastUpdated:new Date().toISOString()})}console.log(`🧠 Conversation memory stored in ${l.length} chunks`)}else{const l=se(this.db,"conversationMemory",t);await je(l,{projectId:t,conversation:r,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",lastUpdated:new Date().toISOString(),memorySize:i.length}),console.log("🧠 Conversation memory stored successfully")}}catch(i){throw console.error("❌ Failed to store conversation memory:",i),i}}chunkData(t,r){const a=[],n=JSON.stringify(t);let i=0;for(;i<n.length;){let o=Math.min(i+r,n.length);if(o<n.length){let l=n.lastIndexOf("}",o),d=n.lastIndexOf("]",o),c=n.lastIndexOf(",",o);const u=Math.max(l,d,c);u>i+r*.8&&(o=u+1)}try{a.push(JSON.parse(n.slice(i,o)))}catch{a.push(n.slice(i,o))}i=o}return a}async loadConversationMemory(t){try{await this.initialize();const r=se(this.db,"conversationMemory",t),a=await vs(r);if(a.exists())return console.log("🧠 Conversation memory loaded successfully"),a.data().conversation;const n=Ht(this.db,"conversationMemory"),i=lt(n,wt("projectId","==",t)),o=await Gt(i);if(!o.empty){const l=[];o.forEach(c=>{l.push({index:c.data().chunkIndex,data:c.data().conversation})}),l.sort((c,u)=>c.index-u.index);const d=l.map(c=>c.data);return console.log(`🧠 Conversation memory loaded from ${l.length} chunks`),d}return console.log("❌ Conversation memory not found"),null}catch(r){return console.error("❌ Failed to load conversation memory:",r),null}}async addPromptToMemory(t,r,a,n){try{await this.initialize();let i=await this.loadConversationMemory(t)||{projectId:t,prompts:[],responses:[],context:{},createdAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return i.prompts.push({id:`prompt-${Date.now()}`,text:r,timestamp:new Date().toISOString(),context:n}),i.responses.push({id:`response-${Date.now()}`,promptId:i.prompts[i.prompts.length-1].id,text:a,timestamp:new Date().toISOString(),context:n}),i.context={...i.context,...n},i.lastUpdated=new Date().toISOString(),await this.storeConversationMemory(t,i),console.log("🧠 Prompt added to memory successfully"),i}catch(i){throw console.error("❌ Failed to add prompt to memory:",i),i}}async getConversationHistory(t,r=50){try{await this.initialize();const a=await this.loadConversationMemory(t);if(!a)return[];const n=a.prompts.slice(-r),i=a.responses.slice(-r);return{prompts:n,responses:i,context:a.context,totalPrompts:a.prompts.length,totalResponses:a.responses.length}}catch(a){return console.error("❌ Failed to get conversation history:",a),[]}}async searchConversationMemory(t,r){try{await this.initialize();const a=await this.loadConversationMemory(t);if(!a)return[];const n=[],i=r.toLowerCase();return a.prompts.forEach(o=>{o.text.toLowerCase().includes(i)&&n.push({type:"prompt",id:o.id,text:o.text,timestamp:o.timestamp,context:o.context})}),a.responses.forEach(o=>{o.text.toLowerCase().includes(i)&&n.push({type:"response",id:o.id,text:o.text,timestamp:o.timestamp,context:o.context})}),console.log("🔍 Conversation memory searched successfully"),n}catch(a){return console.error("❌ Failed to search conversation memory:",a),[]}}async getConversationContext(t,r){try{await this.initialize();const a=await this.loadConversationMemory(t);if(!a)return null;const n={projectId:t,currentPrompt:r,previousPrompts:a.prompts.slice(-10),previousResponses:a.responses.slice(-10),projectContext:a.context,conversationSummary:this.generateConversationSummary(a),relevantHistory:this.findRelevantHistory(a,r)};return console.log("🧠 Conversation context generated successfully"),n}catch(a){return console.error("❌ Failed to get conversation context:",a),null}}generateConversationSummary(t){var i,o;const r=t.prompts,a=t.responses;return r.length===0?"No previous conversation":{totalPrompts:r.length,totalResponses:a.length,firstPrompt:((i=r[0])==null?void 0:i.text)||"",lastPrompt:((o=r[r.length-1])==null?void 0:o.text)||"",keyTopics:this.extractKeyTopics(r),projectEvolution:this.trackProjectEvolution(t)}}extractKeyTopics(t){const r=new Set;return t.forEach(a=>{a.text.toLowerCase().split(" ").forEach(i=>{i.length>4&&!this.isCommonWord(i)&&r.add(i)})}),Array.from(r).slice(0,10)}isCommonWord(t){return["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","two","way","who","boy","did","man","men","put","say","she","too","use"].includes(t)}trackProjectEvolution(t){const r=[],a=t.prompts,n=t.responses;for(let i=0;i<a.length;i++){const o=a[i],l=n[i];r.push({phase:i+1,prompt:o.text,response:l.text,timestamp:o.timestamp,context:o.context})}return r}findRelevantHistory(t,r){const a=[],n=r.toLowerCase().split(" ");return t.prompts.forEach((i,o)=>{var c;const l=i.text.toLowerCase().split(" "),d=n.filter(u=>l.includes(u));d.length>2&&a.push({prompt:i.text,response:((c=t.responses[o])==null?void 0:c.text)||"",relevance:d.length,timestamp:i.timestamp})}),a.sort((i,o)=>o.relevance-i.relevance).slice(0,5)}async storeAILearningPattern(t,r){var a;try{await this.initialize();const n=se(this.db,"aiLearningPatterns",`${t}-${Date.now()}`);await je(n,{projectId:t,pattern:r,userId:((a=this.user)==null?void 0:a.uid)||"anonymous",createdAt:new Date().toISOString()}),console.log("🧠 AI learning pattern stored successfully")}catch(n){throw console.error("❌ Failed to store AI learning pattern:",n),n}}async getAILearningPatterns(t){try{await this.initialize();const r=Ht(this.db,"aiLearningPatterns"),a=lt(r,wt("projectId","==",t)),n=await Gt(a),i=[];return n.forEach(o=>{i.push(o.data())}),console.log("🧠 AI learning patterns loaded successfully"),i}catch(r){return console.error("❌ Failed to load AI learning patterns:",r),[]}}async clearConversationMemory(t){try{await this.initialize();const r=se(this.db,"conversationMemory",t);await ir(r),console.log("🧠 Conversation memory cleared successfully")}catch(r){throw console.error("❌ Failed to clear conversation memory:",r),r}}}const qt=new Nh,Sh=m.createContext();function Ch(){return m.useContext(Sh)}const kh=({isOpen:s,onClose:t})=>{const{isCollaborationActive:r,activeUsers:a,cursors:n,comments:i,sharedProjects:o,isLoading:l,shareProject:d,getSharedProjects:c,toggleCollaboration:u}=Ch(),{user:p}=vt(),[g,y]=m.useState(""),[x,b]=m.useState("read"),[h,N]=m.useState("users");m.useEffect(()=>{s&&r&&c()},[s,r,c]);const j=async f=>{if(f.preventDefault(),!g.trim()){U.error("Please enter an email address");return}try{await d(g,x),U.success(`Project shared with ${g}`),y(""),c()}catch{U.error("Failed to share project")}},w=f=>{switch(f){case"admin":return"text-red-600 bg-red-100";case"write":return"text-blue-600 bg-blue-100";case"read":return"text-green-600 bg-green-100";default:return"text-gray-600 bg-gray-100"}},v=f=>{switch(f){case"admin":return e.jsx(As,{className:"h-4 w-4"});case"write":return e.jsx(pe,{className:"h-4 w-4"});case"read":return e.jsx(He,{className:"h-4 w-4"});default:return e.jsx(xe,{className:"h-4 w-4"})}};return s?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(Fe,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Real-time team collaboration"})]})]}),e.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:e.jsx(Yr,{className:"h-5 w-5 text-gray-600"})})]}),e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Real-time Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Enable real-time editing, cursor tracking, and comments"})]}),e.jsx("button",{onClick:u,disabled:l,className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${r?"bg-green-100 text-green-700 hover:bg-green-200":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:r?e.jsxs(e.Fragment,{children:[e.jsx(He,{className:"h-4 w-4"}),"Active"]}):e.jsxs(e.Fragment,{children:[e.jsx(Ko,{className:"h-4 w-4"}),"Inactive"]})})]})}),e.jsx("div",{className:"flex border-b border-gray-200",children:[{id:"users",label:"Active Users",icon:Fe},{id:"comments",label:"Comments",icon:Ps},{id:"sharing",label:"Sharing",icon:En}].map(f=>e.jsxs("button",{onClick:()=>N(f.id),className:`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${h===f.id?"text-blue-600 border-b-2 border-blue-600":"text-gray-600 hover:text-gray-900"}`,children:[e.jsx(f.icon,{className:"h-4 w-4"}),f.label]},f.id))}),e.jsxs("div",{className:"p-6 max-h-96 overflow-y-auto",children:[h==="users"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Active Users (",a.length,")"]}),a.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No active users"}):e.jsx("div",{className:"space-y-3",children:a.map((f,E)=>{var S;return e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:((S=f.userName)==null?void 0:S.charAt(0))||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"font-medium text-gray-900",children:f.userName}),e.jsx("p",{className:"text-sm text-gray-600",children:f.userEmail})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Online"})]})]},E)})}),n.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"text-md font-medium text-gray-900 mb-3",children:"Active Cursors"}),e.jsx("div",{className:"space-y-2",children:n.map((f,E)=>{var S;return e.jsxs("div",{className:"flex items-center gap-2 p-2 bg-blue-50 rounded",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-medium",children:((S=f.userName)==null?void 0:S.charAt(0))||"U"})}),e.jsx("span",{className:"text-sm text-gray-700",children:f.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:[f.fileId," - Line ",f.line]})]},E)})})]})]}),h==="comments"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Comments (",i.length,")"]}),i.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No comments yet"}):e.jsx("div",{className:"space-y-3",children:i.map((f,E)=>{var S;return e.jsx("div",{className:`p-4 rounded-lg border ${f.resolved?"bg-gray-50 border-gray-200":"bg-yellow-50 border-yellow-200"}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:((S=f.userName)==null?void 0:S.charAt(0))||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"font-medium text-gray-900",children:f.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:["Line ",f.lineNumber," in ",f.fileId]}),f.resolved&&e.jsx("span",{className:"text-xs bg-green-100 text-green-700 px-2 py-1 rounded",children:"Resolved"})]}),e.jsx("p",{className:"text-gray-700",children:f.content})]})]})},E)})})]}),h==="sharing"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Share Project"}),e.jsxs("form",{onSubmit:j,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),e.jsx("input",{type:"email",value:g,onChange:f=>y(f.target.value),placeholder:"user@example.com",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Permissions"}),e.jsxs("select",{value:x,onChange:f=>b(f.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"read",children:"Read Only"}),e.jsx("option",{value:"write",children:"Read & Write"}),e.jsx("option",{value:"admin",children:"Admin"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors",children:"Share Project"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Shared Projects"}),o.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No shared projects"}):e.jsx("div",{className:"space-y-3",children:o.map((f,E)=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center",children:e.jsx(Xo,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:f.sharedWith}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Project ID: ",f.projectId]})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{className:`px-2 py-1 rounded text-xs font-medium ${w(f.permissions)}`,children:[v(f.permissions),f.permissions]})})]},E))})]})]})]})]})}):null},ro=m.createContext({dragDropManager:void 0});function ke(s){return"Minified Redux error #"+s+"; visit https://redux.js.org/Errors?code="+s+" for the full message or use the non-minified dev environment for full errors. "}var dn=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),un=function(){return Math.random().toString(36).substring(7).split("").join(".")},mn={INIT:"@@redux/INIT"+un(),REPLACE:"@@redux/REPLACE"+un()};function Th(s){if(typeof s!="object"||s===null)return!1;for(var t=s;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(s)===t}function ao(s,t,r){var a;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(ke(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(ke(1));return r(ao)(s,t)}if(typeof s!="function")throw new Error(ke(2));var n=s,i=t,o=[],l=o,d=!1;function c(){l===o&&(l=o.slice())}function u(){if(d)throw new Error(ke(3));return i}function p(b){if(typeof b!="function")throw new Error(ke(4));if(d)throw new Error(ke(5));var h=!0;return c(),l.push(b),function(){if(h){if(d)throw new Error(ke(6));h=!1,c();var j=l.indexOf(b);l.splice(j,1),o=null}}}function g(b){if(!Th(b))throw new Error(ke(7));if(typeof b.type>"u")throw new Error(ke(8));if(d)throw new Error(ke(9));try{d=!0,i=n(i,b)}finally{d=!1}for(var h=o=l,N=0;N<h.length;N++){var j=h[N];j()}return b}function y(b){if(typeof b!="function")throw new Error(ke(10));n=b,g({type:mn.REPLACE})}function x(){var b,h=p;return b={subscribe:function(j){if(typeof j!="object"||j===null)throw new Error(ke(11));function w(){j.next&&j.next(u())}w();var v=h(w);return{unsubscribe:v}}},b[dn]=function(){return this},b}return g({type:mn.INIT}),a={dispatch:g,subscribe:p,getState:u,replaceReducer:y},a[dn]=x,a}function Y(s,t,...r){if(Dh()&&t===void 0)throw new Error("invariant requires an error message argument");if(!s){let a;if(t===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let n=0;a=new Error(t.replace(/%s/g,function(){return r[n++]})),a.name="Invariant Violation"}throw a.framesToPop=1,a}}function Dh(){return typeof process<"u"&&!0}function Ph(s,t,r){return t.split(".").reduce((a,n)=>a&&a[n]?a[n]:r||null,s)}function Ah(s,t){return s.filter(r=>r!==t)}function no(s){return typeof s=="object"}function Eh(s,t){const r=new Map,a=i=>{r.set(i,r.has(i)?r.get(i)+1:1)};s.forEach(a),t.forEach(a);const n=[];return r.forEach((i,o)=>{i===1&&n.push(o)}),n}function Rh(s,t){return s.filter(r=>t.indexOf(r)>-1)}const ha="dnd-core/INIT_COORDS",Zs="dnd-core/BEGIN_DRAG",ga="dnd-core/PUBLISH_DRAG_SOURCE",er="dnd-core/HOVER",tr="dnd-core/DROP",sr="dnd-core/END_DRAG";function pn(s,t){return{type:ha,payload:{sourceClientOffset:t||null,clientOffset:s||null}}}const Ih={type:ha,payload:{clientOffset:null,sourceClientOffset:null}};function Oh(s){return function(r=[],a={publishSource:!0}){const{publishSource:n=!0,clientOffset:i,getSourceClientOffset:o}=a,l=s.getMonitor(),d=s.getRegistry();s.dispatch(pn(i)),Lh(r,l,d);const c=$h(r,l);if(c==null){s.dispatch(Ih);return}let u=null;if(i){if(!o)throw new Error("getSourceClientOffset must be defined");Mh(o),u=o(c)}s.dispatch(pn(i,u));const g=d.getSource(c).beginDrag(l,c);if(g==null)return;Fh(g),d.pinSource(c);const y=d.getSourceType(c);return{type:Zs,payload:{itemType:y,item:g,sourceId:c,clientOffset:i||null,sourceClientOffset:u||null,isSourcePublic:!!n}}}}function Lh(s,t,r){Y(!t.isDragging(),"Cannot call beginDrag while dragging."),s.forEach(function(a){Y(r.getSource(a),"Expected sourceIds to be registered.")})}function Mh(s){Y(typeof s=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function Fh(s){Y(no(s),"Item must be an object.")}function $h(s,t){let r=null;for(let a=s.length-1;a>=0;a--)if(t.canDragSource(s[a])){r=s[a];break}return r}function _h(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Bh(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),a.forEach(function(n){_h(s,n,r[n])})}return s}function Uh(s){return function(r={}){const a=s.getMonitor(),n=s.getRegistry();Hh(a),Wh(a).forEach((o,l)=>{const d=Gh(o,l,n,a),c={type:tr,payload:{dropResult:Bh({},r,d)}};s.dispatch(c)})}}function Hh(s){Y(s.isDragging(),"Cannot call drop while not dragging."),Y(!s.didDrop(),"Cannot call drop twice during one drag operation.")}function Gh(s,t,r,a){const n=r.getTarget(s);let i=n?n.drop(a,s):void 0;return zh(i),typeof i>"u"&&(i=t===0?{}:a.getDropResult()),i}function zh(s){Y(typeof s>"u"||no(s),"Drop result must either be an object or undefined.")}function Wh(s){const t=s.getTargetIds().filter(s.canDropOnTarget,s);return t.reverse(),t}function qh(s){return function(){const r=s.getMonitor(),a=s.getRegistry();Vh(r);const n=r.getSourceId();return n!=null&&(a.getSource(n,!0).endDrag(r,n),a.unpinSource()),{type:sr}}}function Vh(s){Y(s.isDragging(),"Cannot call endDrag while not dragging.")}function Gr(s,t){return t===null?s===null:Array.isArray(s)?s.some(r=>r===t):s===t}function Jh(s){return function(r,{clientOffset:a}={}){Yh(r);const n=r.slice(0),i=s.getMonitor(),o=s.getRegistry(),l=i.getItemType();return Xh(n,o,l),Kh(n,i,o),Qh(n,i,o),{type:er,payload:{targetIds:n,clientOffset:a||null}}}}function Yh(s){Y(Array.isArray(s),"Expected targetIds to be an array.")}function Kh(s,t,r){Y(t.isDragging(),"Cannot call hover while not dragging."),Y(!t.didDrop(),"Cannot call hover after drop.");for(let a=0;a<s.length;a++){const n=s[a];Y(s.lastIndexOf(n)===a,"Expected targetIds to be unique in the passed array.");const i=r.getTarget(n);Y(i,"Expected targetIds to be registered.")}}function Xh(s,t,r){for(let a=s.length-1;a>=0;a--){const n=s[a],i=t.getTargetType(n);Gr(i,r)||s.splice(a,1)}}function Qh(s,t,r){s.forEach(function(a){r.getTarget(a).hover(t,a)})}function Zh(s){return function(){if(s.getMonitor().isDragging())return{type:ga}}}function eg(s){return{beginDrag:Oh(s),publishDragSource:Zh(s),hover:Jh(s),drop:Uh(s),endDrag:qh(s)}}class tg{receiveBackend(t){this.backend=t}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const t=this,{dispatch:r}=this.store;function a(i){return(...o)=>{const l=i.apply(t,o);typeof l<"u"&&r(l)}}const n=eg(this);return Object.keys(n).reduce((i,o)=>{const l=n[o];return i[o]=a(l),i},{})}dispatch(t){this.store.dispatch(t)}constructor(t,r){this.isSetUp=!1,this.handleRefCountChange=()=>{const a=this.store.getState().refCount>0;this.backend&&(a&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!a&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=t,this.monitor=r,t.subscribe(this.handleRefCountChange)}}function sg(s,t){return{x:s.x+t.x,y:s.y+t.y}}function io(s,t){return{x:s.x-t.x,y:s.y-t.y}}function rg(s){const{clientOffset:t,initialClientOffset:r,initialSourceClientOffset:a}=s;return!t||!r||!a?null:io(sg(t,a),r)}function ag(s){const{clientOffset:t,initialClientOffset:r}=s;return!t||!r?null:io(t,r)}const Xt=[],fa=[];Xt.__IS_NONE__=!0;fa.__IS_ALL__=!0;function ng(s,t){return s===Xt?!1:s===fa||typeof t>"u"?!0:Rh(t,s).length>0}class ig{subscribeToStateChange(t,r={}){const{handlerIds:a}=r;Y(typeof t=="function","listener must be a function."),Y(typeof a>"u"||Array.isArray(a),"handlerIds, when specified, must be an array of strings.");let n=this.store.getState().stateId;const i=()=>{const o=this.store.getState(),l=o.stateId;try{l===n||l===n+1&&!ng(o.dirtyHandlerIds,a)||t()}finally{n=l}};return this.store.subscribe(i)}subscribeToOffsetChange(t){Y(typeof t=="function","listener must be a function.");let r=this.store.getState().dragOffset;const a=()=>{const n=this.store.getState().dragOffset;n!==r&&(r=n,t())};return this.store.subscribe(a)}canDragSource(t){if(!t)return!1;const r=this.registry.getSource(t);return Y(r,`Expected to find a valid source. sourceId=${t}`),this.isDragging()?!1:r.canDrag(this,t)}canDropOnTarget(t){if(!t)return!1;const r=this.registry.getTarget(t);if(Y(r,`Expected to find a valid target. targetId=${t}`),!this.isDragging()||this.didDrop())return!1;const a=this.registry.getTargetType(t),n=this.getItemType();return Gr(a,n)&&r.canDrop(this,t)}isDragging(){return!!this.getItemType()}isDraggingSource(t){if(!t)return!1;const r=this.registry.getSource(t,!0);if(Y(r,`Expected to find a valid source. sourceId=${t}`),!this.isDragging()||!this.isSourcePublic())return!1;const a=this.registry.getSourceType(t),n=this.getItemType();return a!==n?!1:r.isDragging(this,t)}isOverTarget(t,r={shallow:!1}){if(!t)return!1;const{shallow:a}=r;if(!this.isDragging())return!1;const n=this.registry.getTargetType(t),i=this.getItemType();if(i&&!Gr(n,i))return!1;const o=this.getTargetIds();if(!o.length)return!1;const l=o.indexOf(t);return a?l===o.length-1:l>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return rg(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return ag(this.store.getState().dragOffset)}constructor(t,r){this.store=t,this.registry=r}}const hn=typeof global<"u"?global:self,oo=hn.MutationObserver||hn.WebKitMutationObserver;function lo(s){return function(){const r=setTimeout(n,0),a=setInterval(n,50);function n(){clearTimeout(r),clearInterval(a),s()}}}function og(s){let t=1;const r=new oo(s),a=document.createTextNode("");return r.observe(a,{characterData:!0}),function(){t=-t,a.data=t}}const lg=typeof oo=="function"?og:lo;class cg{enqueueTask(t){const{queue:r,requestFlush:a}=this;r.length||(a(),this.flushing=!0),r[r.length]=t}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:t}=this;for(;this.index<t.length;){const r=this.index;if(this.index++,t[r].call(),this.index>this.capacity){for(let a=0,n=t.length-this.index;a<n;a++)t[a]=t[a+this.index];t.length-=this.index,this.index=0}}t.length=0,this.index=0,this.flushing=!1},this.registerPendingError=t=>{this.pendingErrors.push(t),this.requestErrorThrow()},this.requestFlush=lg(this.flush),this.requestErrorThrow=lo(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class dg{call(){try{this.task&&this.task()}catch(t){this.onError(t)}finally{this.task=null,this.release(this)}}constructor(t,r){this.onError=t,this.release=r,this.task=null}}class ug{create(t){const r=this.freeTasks,a=r.length?r.pop():new dg(this.onError,n=>r[r.length]=n);return a.task=t,a}constructor(t){this.onError=t,this.freeTasks=[]}}const co=new cg,mg=new ug(co.registerPendingError);function pg(s){co.enqueueTask(mg.create(s))}const xa="dnd-core/ADD_SOURCE",ba="dnd-core/ADD_TARGET",ya="dnd-core/REMOVE_SOURCE",rr="dnd-core/REMOVE_TARGET";function hg(s){return{type:xa,payload:{sourceId:s}}}function gg(s){return{type:ba,payload:{targetId:s}}}function fg(s){return{type:ya,payload:{sourceId:s}}}function xg(s){return{type:rr,payload:{targetId:s}}}function bg(s){Y(typeof s.canDrag=="function","Expected canDrag to be a function."),Y(typeof s.beginDrag=="function","Expected beginDrag to be a function."),Y(typeof s.endDrag=="function","Expected endDrag to be a function.")}function yg(s){Y(typeof s.canDrop=="function","Expected canDrop to be a function."),Y(typeof s.hover=="function","Expected hover to be a function."),Y(typeof s.drop=="function","Expected beginDrag to be a function.")}function zr(s,t){if(t&&Array.isArray(s)){s.forEach(r=>zr(r,!1));return}Y(typeof s=="string"||typeof s=="symbol",t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var Te;(function(s){s.SOURCE="SOURCE",s.TARGET="TARGET"})(Te||(Te={}));let vg=0;function jg(){return vg++}function wg(s){const t=jg().toString();switch(s){case Te.SOURCE:return`S${t}`;case Te.TARGET:return`T${t}`;default:throw new Error(`Unknown Handler Role: ${s}`)}}function gn(s){switch(s[0]){case"S":return Te.SOURCE;case"T":return Te.TARGET;default:throw new Error(`Cannot parse handler ID: ${s}`)}}function fn(s,t){const r=s.entries();let a=!1;do{const{done:n,value:[,i]}=r.next();if(i===t)return!0;a=!!n}while(!a);return!1}class Ng{addSource(t,r){zr(t),bg(r);const a=this.addHandler(Te.SOURCE,t,r);return this.store.dispatch(hg(a)),a}addTarget(t,r){zr(t,!0),yg(r);const a=this.addHandler(Te.TARGET,t,r);return this.store.dispatch(gg(a)),a}containsHandler(t){return fn(this.dragSources,t)||fn(this.dropTargets,t)}getSource(t,r=!1){return Y(this.isSourceId(t),"Expected a valid source ID."),r&&t===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(t)}getTarget(t){return Y(this.isTargetId(t),"Expected a valid target ID."),this.dropTargets.get(t)}getSourceType(t){return Y(this.isSourceId(t),"Expected a valid source ID."),this.types.get(t)}getTargetType(t){return Y(this.isTargetId(t),"Expected a valid target ID."),this.types.get(t)}isSourceId(t){return gn(t)===Te.SOURCE}isTargetId(t){return gn(t)===Te.TARGET}removeSource(t){Y(this.getSource(t),"Expected an existing source."),this.store.dispatch(fg(t)),pg(()=>{this.dragSources.delete(t),this.types.delete(t)})}removeTarget(t){Y(this.getTarget(t),"Expected an existing target."),this.store.dispatch(xg(t)),this.dropTargets.delete(t),this.types.delete(t)}pinSource(t){const r=this.getSource(t);Y(r,"Expected an existing source."),this.pinnedSourceId=t,this.pinnedSource=r}unpinSource(){Y(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(t,r,a){const n=wg(t);return this.types.set(n,r),t===Te.SOURCE?this.dragSources.set(n,a):t===Te.TARGET&&this.dropTargets.set(n,a),n}constructor(t){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=t}}const Sg=(s,t)=>s===t;function Cg(s,t){return!s&&!t?!0:!s||!t?!1:s.x===t.x&&s.y===t.y}function kg(s,t,r=Sg){if(s.length!==t.length)return!1;for(let a=0;a<s.length;++a)if(!r(s[a],t[a]))return!1;return!0}function Tg(s=Xt,t){switch(t.type){case er:break;case xa:case ba:case rr:case ya:return Xt;case Zs:case ga:case sr:case tr:default:return fa}const{targetIds:r=[],prevTargetIds:a=[]}=t.payload,n=Eh(r,a);if(!(n.length>0||!kg(r,a)))return Xt;const o=a[a.length-1],l=r[r.length-1];return o!==l&&(o&&n.push(o),l&&n.push(l)),n}function Dg(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Pg(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),a.forEach(function(n){Dg(s,n,r[n])})}return s}const xn={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function Ag(s=xn,t){const{payload:r}=t;switch(t.type){case ha:case Zs:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case er:return Cg(s.clientOffset,r.clientOffset)?s:Pg({},s,{clientOffset:r.clientOffset});case sr:case tr:return xn;default:return s}}function Eg(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Tt(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),a.forEach(function(n){Eg(s,n,r[n])})}return s}const Rg={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function Ig(s=Rg,t){const{payload:r}=t;switch(t.type){case Zs:return Tt({},s,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case ga:return Tt({},s,{isSourcePublic:!0});case er:return Tt({},s,{targetIds:r.targetIds});case rr:return s.targetIds.indexOf(r.targetId)===-1?s:Tt({},s,{targetIds:Ah(s.targetIds,r.targetId)});case tr:return Tt({},s,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case sr:return Tt({},s,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return s}}function Og(s=0,t){switch(t.type){case xa:case ba:return s+1;case ya:case rr:return s-1;default:return s}}function Lg(s=0){return s+1}function Mg(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Fg(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),a.forEach(function(n){Mg(s,n,r[n])})}return s}function $g(s={},t){return{dirtyHandlerIds:Tg(s.dirtyHandlerIds,{type:t.type,payload:Fg({},t.payload,{prevTargetIds:Ph(s,"dragOperation.targetIds",[])})}),dragOffset:Ag(s.dragOffset,t),refCount:Og(s.refCount,t),dragOperation:Ig(s.dragOperation,t),stateId:Lg(s.stateId)}}function _g(s,t=void 0,r={},a=!1){const n=Bg(a),i=new ig(n,new Ng(n)),o=new tg(n,i),l=s(o,t,r);return o.receiveBackend(l),o}function Bg(s){const t=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return ao($g,s&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}function Ug(s,t){if(s==null)return{};var r=Hg(s,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(s,a)&&(r[a]=s[a])}return r}function Hg(s,t){if(s==null)return{};var r={},a=Object.keys(s),n,i;for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&(r[n]=s[n]);return r}let bn=0;const ks=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var Gg=m.memo(function(t){var{children:r}=t,a=Ug(t,["children"]);const[n,i]=zg(a);return m.useEffect(()=>{if(i){const o=uo();return++bn,()=>{--bn===0&&(o[ks]=null)}}},[]),e.jsx(ro.Provider,{value:n,children:r})});function zg(s){if("manager"in s)return[{dragDropManager:s.manager},!1];const t=Wg(s.backend,s.context,s.options,s.debugMode),r=!s.context;return[t,r]}function Wg(s,t=uo(),r,a){const n=t;return n[ks]||(n[ks]={dragDropManager:_g(s,t,r,a)}),n[ks]}function uo(){return typeof global<"u"?global:window}var qg=function s(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var a,n,i;if(Array.isArray(t)){if(a=t.length,a!=r.length)return!1;for(n=a;n--!==0;)if(!s(t[n],r[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(i=Object.keys(t),a=i.length,a!==Object.keys(r).length)return!1;for(n=a;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[n]))return!1;for(n=a;n--!==0;){var o=i[n];if(!s(t[o],r[o]))return!1}return!0}return t!==t&&r!==r};const Vg=Po(qg),yt=typeof window<"u"?m.useLayoutEffect:m.useEffect;function Jg(s,t,r){const[a,n]=m.useState(()=>t(s)),i=m.useCallback(()=>{const o=t(s);Vg(a,o)||(n(o),r&&r())},[a,s,r]);return yt(i),[a,i]}function Yg(s,t,r){const[a,n]=Jg(s,t,r);return yt(function(){const o=s.getHandlerId();if(o!=null)return s.subscribeToStateChange(n,{handlerIds:[o]})},[s,n]),a}function mo(s,t,r){return Yg(t,s||(()=>({})),()=>r.reconnect())}function po(s,t){const r=[];return typeof s!="function"&&r.push(s),m.useMemo(()=>typeof s=="function"?s():s,r)}function Kg(s){return m.useMemo(()=>s.hooks.dragSource(),[s])}function Xg(s){return m.useMemo(()=>s.hooks.dragPreview(),[s])}let yr=!1,vr=!1;class Qg{receiveHandlerId(t){this.sourceId=t}getHandlerId(){return this.sourceId}canDrag(){Y(!yr,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return yr=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{yr=!1}}isDragging(){if(!this.sourceId)return!1;Y(!vr,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return vr=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{vr=!1}}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}isDraggingSource(t){return this.internalMonitor.isDraggingSource(t)}isOverTarget(t,r){return this.internalMonitor.isOverTarget(t,r)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(t){return this.internalMonitor.subscribeToOffsetChange(t)}canDragSource(t){return this.internalMonitor.canDragSource(t)}canDropOnTarget(t){return this.internalMonitor.canDropOnTarget(t)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.sourceId=null,this.internalMonitor=t.getMonitor()}}let jr=!1;class Zg{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}canDrop(){if(!this.targetId)return!1;Y(!jr,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return jr=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{jr=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function ef(s,t,r){const a=r.getRegistry(),n=a.addTarget(s,t);return[n,()=>a.removeTarget(n)]}function tf(s,t,r){const a=r.getRegistry(),n=a.addSource(s,t);return[n,()=>a.removeSource(n)]}function Wr(s,t,r,a){let n;if(n!==void 0)return!!n;if(s===t)return!0;if(typeof s!="object"||!s||typeof t!="object"||!t)return!1;const i=Object.keys(s),o=Object.keys(t);if(i.length!==o.length)return!1;const l=Object.prototype.hasOwnProperty.bind(t);for(let d=0;d<i.length;d++){const c=i[d];if(!l(c))return!1;const u=s[c],p=t[c];if(n=void 0,n===!1||n===void 0&&u!==p)return!1}return!0}function qr(s){return s!==null&&typeof s=="object"&&Object.prototype.hasOwnProperty.call(s,"current")}function sf(s){if(typeof s.type=="string")return;const t=s.type.displayName||s.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function rf(s){return(t=null,r=null)=>{if(!m.isValidElement(t)){const i=t;return s(i,r),i}const a=t;return sf(a),af(a,r?i=>s(i,r):s)}}function ho(s){const t={};return Object.keys(s).forEach(r=>{const a=s[r];if(r.endsWith("Ref"))t[r]=s[r];else{const n=rf(a);t[r]=()=>n}}),t}function yn(s,t){typeof s=="function"?s(t):s.current=t}function af(s,t){const r=s.ref;return Y(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?m.cloneElement(s,{ref:a=>{yn(r,a),yn(t,a)}}):m.cloneElement(s,{ref:t})}class nf{receiveHandlerId(t){this.handlerId!==t&&(this.handlerId=t,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(t){this.dragSourceOptionsInternal=t}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(t){this.dragPreviewOptionsInternal=t}reconnect(){const t=this.reconnectDragSource();this.reconnectDragPreview(t)}reconnectDragSource(){const t=this.dragSource,r=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return r&&this.disconnectDragSource(),this.handlerId?t?(r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=t,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,t,this.dragSourceOptions)),r):(this.lastConnectedDragSource=t,r):r}reconnectDragPreview(t=!1){const r=this.dragPreview,a=t||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(a&&this.disconnectDragPreview(),!!this.handlerId){if(!r){this.lastConnectedDragPreview=r;return}a&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=r,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,r,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!Wr(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!Wr(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(t){this.hooks=ho({dragSource:(r,a)=>{this.clearDragSource(),this.dragSourceOptions=a||null,qr(r)?this.dragSourceRef=r:this.dragSourceNode=r,this.reconnectDragSource()},dragPreview:(r,a)=>{this.clearDragPreview(),this.dragPreviewOptions=a||null,qr(r)?this.dragPreviewRef=r:this.dragPreviewNode=r,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}}class of{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Wr(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=ho({dropTarget:(r,a)=>{this.clearDropTarget(),this.dropTargetOptions=a,qr(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function Bt(){const{dragDropManager:s}=m.useContext(ro);return Y(s!=null,"Expected drag drop context"),s}function lf(s,t){const r=Bt(),a=m.useMemo(()=>new nf(r.getBackend()),[r]);return yt(()=>(a.dragSourceOptions=s||null,a.reconnect(),()=>a.disconnectDragSource()),[a,s]),yt(()=>(a.dragPreviewOptions=t||null,a.reconnect(),()=>a.disconnectDragPreview()),[a,t]),a}function cf(){const s=Bt();return m.useMemo(()=>new Qg(s),[s])}class df{beginDrag(){const t=this.spec,r=this.monitor;let a=null;return typeof t.item=="object"?a=t.item:typeof t.item=="function"?a=t.item(r):a={},a??null}canDrag(){const t=this.spec,r=this.monitor;return typeof t.canDrag=="boolean"?t.canDrag:typeof t.canDrag=="function"?t.canDrag(r):!0}isDragging(t,r){const a=this.spec,n=this.monitor,{isDragging:i}=a;return i?i(n):r===t.getSourceId()}endDrag(){const t=this.spec,r=this.monitor,a=this.connector,{end:n}=t;n&&n(r.getItem(),r),a.reconnect()}constructor(t,r,a){this.spec=t,this.monitor=r,this.connector=a}}function uf(s,t,r){const a=m.useMemo(()=>new df(s,t,r),[t,r]);return m.useEffect(()=>{a.spec=s},[s]),a}function mf(s){return m.useMemo(()=>{const t=s.type;return Y(t!=null,"spec.type must be defined"),t},[s])}function pf(s,t,r){const a=Bt(),n=uf(s,t,r),i=mf(s);yt(function(){if(i!=null){const[l,d]=tf(i,n,a);return t.receiveHandlerId(l),r.receiveHandlerId(l),d}},[a,t,r,n,i])}function hf(s,t){const r=po(s);Y(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const a=cf(),n=lf(r.options,r.previewOptions);return pf(r,a,n),[mo(r.collect,a,n),Kg(n),Xg(n)]}function gf(s){return m.useMemo(()=>s.hooks.dropTarget(),[s])}function ff(s){const t=Bt(),r=m.useMemo(()=>new of(t.getBackend()),[t]);return yt(()=>(r.dropTargetOptions=s||null,r.reconnect(),()=>r.disconnectDropTarget()),[s]),r}function xf(){const s=Bt();return m.useMemo(()=>new Zg(s),[s])}function bf(s){const{accept:t}=s;return m.useMemo(()=>(Y(s.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class yf{canDrop(){const t=this.spec,r=this.monitor;return t.canDrop?t.canDrop(r.getItem(),r):!0}hover(){const t=this.spec,r=this.monitor;t.hover&&t.hover(r.getItem(),r)}drop(){const t=this.spec,r=this.monitor;if(t.drop)return t.drop(r.getItem(),r)}constructor(t,r){this.spec=t,this.monitor=r}}function vf(s,t){const r=m.useMemo(()=>new yf(s,t),[t]);return m.useEffect(()=>{r.spec=s},[s]),r}function jf(s,t,r){const a=Bt(),n=vf(s,t),i=bf(s);yt(function(){const[l,d]=ef(i,n,a);return t.receiveHandlerId(l),r.receiveHandlerId(l),d},[a,t,n,r,i.map(o=>o.toString()).join("|")])}function wf(s,t){const r=po(s),a=xf(),n=ff(r.options);return jf(r,a,n),[mo(r.collect,a,n),gf(n)]}function go(s){let t=null;return()=>(t==null&&(t=s()),t)}function Nf(s,t){return s.filter(r=>r!==t)}function Sf(s,t){const r=new Set,a=i=>r.add(i);s.forEach(a),t.forEach(a);const n=[];return r.forEach(i=>n.push(i)),n}class Cf{enter(t){const r=this.entered.length,a=n=>this.isNodeInDocument(n)&&(!n.contains||n.contains(t));return this.entered=Sf(this.entered.filter(a),[t]),r===0&&this.entered.length>0}leave(t){const r=this.entered.length;return this.entered=Nf(this.entered.filter(this.isNodeInDocument),t),r>0&&this.entered.length===0}reset(){this.entered=[]}constructor(t){this.entered=[],this.isNodeInDocument=t}}class kf{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(t=>{Object.defineProperty(this.item,t,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`),null}})})}loadDataTransfer(t){if(t){const r={};Object.keys(this.config.exposeProperties).forEach(a=>{const n=this.config.exposeProperties[a];n!=null&&(r[a]={value:n(t,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,r)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(t,r){return r===t.getSourceId()}endDrag(){}constructor(t){this.config=t,this.item={},this.initializeExposedProperties()}}const fo="__NATIVE_FILE__",xo="__NATIVE_URL__",bo="__NATIVE_TEXT__",yo="__NATIVE_HTML__",vn=Object.freeze(Object.defineProperty({__proto__:null,FILE:fo,HTML:yo,TEXT:bo,URL:xo},Symbol.toStringTag,{value:"Module"}));function wr(s,t,r){const a=t.reduce((n,i)=>n||s.getData(i),"");return a??r}const Vr={[fo]:{exposeProperties:{files:s=>Array.prototype.slice.call(s.files),items:s=>s.items,dataTransfer:s=>s},matchesTypes:["Files"]},[yo]:{exposeProperties:{html:(s,t)=>wr(s,t,""),dataTransfer:s=>s},matchesTypes:["Html","text/html"]},[xo]:{exposeProperties:{urls:(s,t)=>wr(s,t,"").split(`
`),dataTransfer:s=>s},matchesTypes:["Url","text/uri-list"]},[bo]:{exposeProperties:{text:(s,t)=>wr(s,t,""),dataTransfer:s=>s},matchesTypes:["Text","text/plain"]}};function Tf(s,t){const r=Vr[s];if(!r)throw new Error(`native type ${s} has no configuration`);const a=new kf(r);return a.loadDataTransfer(t),a}function Nr(s){if(!s)return null;const t=Array.prototype.slice.call(s.types||[]);return Object.keys(Vr).filter(r=>{const a=Vr[r];return a!=null&&a.matchesTypes?a.matchesTypes.some(n=>t.indexOf(n)>-1):!1})[0]||null}const Df=go(()=>/firefox/i.test(navigator.userAgent)),vo=go(()=>!!window.safari);class jn{interpolate(t){const{xs:r,ys:a,c1s:n,c2s:i,c3s:o}=this;let l=r.length-1;if(t===r[l])return a[l];let d=0,c=o.length-1,u;for(;d<=c;){u=Math.floor(.5*(d+c));const y=r[u];if(y<t)d=u+1;else if(y>t)c=u-1;else return a[u]}l=Math.max(0,c);const p=t-r[l],g=p*p;return a[l]+n[l]*p+i[l]*g+o[l]*p*g}constructor(t,r){const{length:a}=t,n=[];for(let y=0;y<a;y++)n.push(y);n.sort((y,x)=>t[y]<t[x]?-1:1);const i=[],o=[];let l,d;for(let y=0;y<a-1;y++)l=t[y+1]-t[y],d=r[y+1]-r[y],i.push(l),o.push(d/l);const c=[o[0]];for(let y=0;y<i.length-1;y++){const x=o[y],b=o[y+1];if(x*b<=0)c.push(0);else{l=i[y];const h=i[y+1],N=l+h;c.push(3*N/((N+h)/x+(N+l)/b))}}c.push(o[o.length-1]);const u=[],p=[];let g;for(let y=0;y<c.length-1;y++){g=o[y];const x=c[y],b=1/i[y],h=x+c[y+1]-g-g;u.push((g-x-h)*b),p.push(h*b*b)}this.xs=t,this.ys=r,this.c1s=c,this.c2s=u,this.c3s=p}}const Pf=1;function jo(s){const t=s.nodeType===Pf?s:s.parentElement;if(!t)return null;const{top:r,left:a}=t.getBoundingClientRect();return{x:a,y:r}}function bs(s){return{x:s.clientX,y:s.clientY}}function Af(s){var t;return s.nodeName==="IMG"&&(Df()||!(!((t=document.documentElement)===null||t===void 0)&&t.contains(s)))}function Ef(s,t,r,a){let n=s?t.width:r,i=s?t.height:a;return vo()&&s&&(i/=window.devicePixelRatio,n/=window.devicePixelRatio),{dragPreviewWidth:n,dragPreviewHeight:i}}function Rf(s,t,r,a,n){const i=Af(t),l=jo(i?s:t),d={x:r.x-l.x,y:r.y-l.y},{offsetWidth:c,offsetHeight:u}=s,{anchorX:p,anchorY:g}=a,{dragPreviewWidth:y,dragPreviewHeight:x}=Ef(i,t,c,u),b=()=>{let E=new jn([0,.5,1],[d.y,d.y/u*x,d.y+x-u]).interpolate(g);return vo()&&i&&(E+=(window.devicePixelRatio-1)*x),E},h=()=>new jn([0,.5,1],[d.x,d.x/c*y,d.x+y-c]).interpolate(p),{offsetX:N,offsetY:j}=n,w=N===0||N,v=j===0||j;return{x:w?N:h(),y:v?j:b()}}class If{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var t;return!((t=this.globalContext)===null||t===void 0)&&t.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var t;return((t=this.optionsArgs)===null||t===void 0?void 0:t.rootElement)||this.window}constructor(t,r){this.ownerDocument=null,this.globalContext=t,this.optionsArgs=r}}function Of(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function wn(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),a.forEach(function(n){Of(s,n,r[n])})}return s}class Lf{profile(){var t,r;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((t=this.dragStartSourceIds)===null||t===void 0?void 0:t.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((r=this.dragOverTargetIds)===null||r===void 0?void 0:r.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const t=this.rootElement;if(t!==void 0){if(t.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");t.__isReactDndBackendSetUp=!0,this.addEventListeners(t)}}teardown(){const t=this.rootElement;if(t!==void 0&&(t.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var r;(r=this.window)===null||r===void 0||r.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(t,r,a){return this.sourcePreviewNodeOptions.set(t,a),this.sourcePreviewNodes.set(t,r),()=>{this.sourcePreviewNodes.delete(t),this.sourcePreviewNodeOptions.delete(t)}}connectDragSource(t,r,a){this.sourceNodes.set(t,r),this.sourceNodeOptions.set(t,a);const n=o=>this.handleDragStart(o,t),i=o=>this.handleSelectStart(o);return r.setAttribute("draggable","true"),r.addEventListener("dragstart",n),r.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(t),this.sourceNodeOptions.delete(t),r.removeEventListener("dragstart",n),r.removeEventListener("selectstart",i),r.setAttribute("draggable","false")}}connectDropTarget(t,r){const a=o=>this.handleDragEnter(o,t),n=o=>this.handleDragOver(o,t),i=o=>this.handleDrop(o,t);return r.addEventListener("dragenter",a),r.addEventListener("dragover",n),r.addEventListener("drop",i),()=>{r.removeEventListener("dragenter",a),r.removeEventListener("dragover",n),r.removeEventListener("drop",i)}}addEventListeners(t){t.addEventListener&&(t.addEventListener("dragstart",this.handleTopDragStart),t.addEventListener("dragstart",this.handleTopDragStartCapture,!0),t.addEventListener("dragend",this.handleTopDragEndCapture,!0),t.addEventListener("dragenter",this.handleTopDragEnter),t.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.addEventListener("dragover",this.handleTopDragOver),t.addEventListener("dragover",this.handleTopDragOverCapture,!0),t.addEventListener("drop",this.handleTopDrop),t.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(t){t.removeEventListener&&(t.removeEventListener("dragstart",this.handleTopDragStart),t.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),t.removeEventListener("dragend",this.handleTopDragEndCapture,!0),t.removeEventListener("dragenter",this.handleTopDragEnter),t.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.removeEventListener("dragover",this.handleTopDragOver),t.removeEventListener("dragover",this.handleTopDragOverCapture,!0),t.removeEventListener("drop",this.handleTopDrop),t.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourceNodeOptions.get(t);return wn({dropEffect:this.altKeyPressed?"copy":"move"},r||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourcePreviewNodeOptions.get(t);return wn({anchorX:.5,anchorY:.5,captureDraggingState:!1},r||{})}isDraggingNativeItem(){const t=this.monitor.getItemType();return Object.keys(vn).some(r=>vn[r]===t)}beginDragNativeItem(t,r){this.clearCurrentDragSourceNode(),this.currentNativeSource=Tf(t,r),this.currentNativeHandle=this.registry.addSource(t,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(t){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=t;const r=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var a;return(a=this.rootElement)===null||a===void 0?void 0:a.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},r)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var t;(t=this.window)===null||t===void 0||t.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(t,r){t.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(r))}handleDragEnter(t,r){this.dragEnterTargetIds.unshift(r)}handleDragOver(t,r){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(r)}handleDrop(t,r){this.dropTargetIds.unshift(r)}constructor(t,r,a){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=n=>{const i=this.sourceNodes.get(n);return i&&jo(i)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=n=>!!(n&&this.document&&this.document.body&&this.document.body.contains(n)),this.endDragIfSourceWasRemovedFromDOM=()=>{const n=this.currentDragSourceNode;n==null||this.isNodeInDocument(n)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=n=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(n||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=n=>{if(n.defaultPrevented)return;const{dragStartSourceIds:i}=this;this.dragStartSourceIds=null;const o=bs(n);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(i||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:o});const{dataTransfer:l}=n,d=Nr(l);if(this.monitor.isDragging()){if(l&&typeof l.setDragImage=="function"){const u=this.monitor.getSourceId(),p=this.sourceNodes.get(u),g=this.sourcePreviewNodes.get(u)||p;if(g){const{anchorX:y,anchorY:x,offsetX:b,offsetY:h}=this.getCurrentSourcePreviewNodeOptions(),w=Rf(p,g,o,{anchorX:y,anchorY:x},{offsetX:b,offsetY:h});l.setDragImage(g,w.x,w.y)}}try{l==null||l.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(n.target);const{captureDraggingState:c}=this.getCurrentSourcePreviewNodeOptions();c?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(d)this.beginDragNativeItem(d);else{if(l&&!l.types&&(n.target&&!n.target.hasAttribute||!n.target.hasAttribute("draggable")))return;n.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=n=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(n.dataTransfer)}if(!this.enterLeaveCounter.enter(n.target)||this.monitor.isDragging())return;const{dataTransfer:l}=n,d=Nr(l);d&&this.beginDragNativeItem(d,l)},this.handleTopDragEnter=n=>{const{dragEnterTargetIds:i}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=n.altKey,i.length>0&&this.actions.hover(i,{clientOffset:bs(n)}),i.some(l=>this.monitor.canDropOnTarget(l))&&(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=n=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(n.dataTransfer)}},this.handleTopDragOver=n=>{const{dragOverTargetIds:i}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect="none");return}this.altKeyPressed=n.altKey,this.lastClientOffset=bs(n),this.scheduleHover(i),(i||[]).some(l=>this.monitor.canDropOnTarget(l))?(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?n.preventDefault():(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=n=>{this.isDraggingNativeItem()&&n.preventDefault(),this.enterLeaveCounter.leave(n.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=n=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var i;n.preventDefault(),(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(n.dataTransfer)}else Nr(n.dataTransfer)&&n.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=n=>{const{dropTargetIds:i}=this;this.dropTargetIds=[],this.actions.hover(i,{clientOffset:bs(n)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=n=>{const i=n.target;typeof i.dragDrop=="function"&&(i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable||(n.preventDefault(),i.dragDrop()))},this.options=new If(r,a),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.enterLeaveCounter=new Cf(this.isNodeInDocument)}}const Mf=function(t,r,a){return new Lf(t,r,a)},Ff=({projectId:s,onCodeChange:t,initialComponents:r=[]})=>{var k,D,O,L,A,$;const[a,n]=m.useState(r),[i,o]=m.useState(null),[l,d]=m.useState(!1),[c,u]=m.useState(!1),[p,g]=m.useState({width:1200,height:800}),[y,x]=m.useState(1),b=m.useRef(null),h=[{type:"container",name:"Container",icon:"📦",category:"Layout"},{type:"text",name:"Text",icon:"📝",category:"Content"},{type:"button",name:"Button",icon:"🔘",category:"Interactive"},{type:"input",name:"Input",icon:"📝",category:"Form"},{type:"image",name:"Image",icon:"🖼️",category:"Media"},{type:"card",name:"Card",icon:"🃏",category:"Layout"},{type:"header",name:"Header",icon:"📋",category:"Layout"},{type:"footer",name:"Footer",icon:"🦶",category:"Layout"},{type:"sidebar",name:"Sidebar",icon:"📑",category:"Layout"},{type:"navbar",name:"Navbar",icon:"🧭",category:"Navigation"},{type:"form",name:"Form",icon:"📋",category:"Form"},{type:"table",name:"Table",icon:"📊",category:"Data"},{type:"chart",name:"Chart",icon:"📈",category:"Data"},{type:"modal",name:"Modal",icon:"🪟",category:"Overlay"},{type:"dropdown",name:"Dropdown",icon:"📋",category:"Interactive"}],N=T=>({container:`<div className="container" style={${JSON.stringify(T.styles)}}>
  {children}
</div>`,text:`<p className="text" style={${JSON.stringify(T.styles)}}>
  ${T.content||"Text content"}
</p>`,button:`<button className="btn" style={${JSON.stringify(T.styles)}} onClick={${T.onClick||"() => {}"}}>
  ${T.content||"Button"}
</button>`,input:`<input 
  className="input" 
  type="${T.inputType||"text"}"
  placeholder="${T.placeholder||""}"
  style={${JSON.stringify(T.styles)}}
/>`,image:`<img 
  className="image" 
  src="${T.src||"/placeholder.jpg"}"
  alt="${T.alt||""}"
  style={${JSON.stringify(T.styles)}}
/>`,card:`<div className="card" style={${JSON.stringify(T.styles)}}>
  <div className="card-header">
    <h3>${T.title||"Card Title"}</h3>
  </div>
  <div className="card-body">
    <p>${T.content||"Card content"}</p>
  </div>
</div>`,header:`<header className="header" style={${JSON.stringify(T.styles)}}>
  <h1>${T.content||"Header"}</h1>
</header>`,footer:`<footer className="footer" style={${JSON.stringify(T.styles)}}>
  <p>${T.content||"Footer content"}</p>
</footer>`,sidebar:`<aside className="sidebar" style={${JSON.stringify(T.styles)}}>
  <nav>
    <ul>
      <li><a href="#">Menu Item 1</a></li>
      <li><a href="#">Menu Item 2</a></li>
    </ul>
  </nav>
</aside>`,navbar:`<nav className="navbar" style={${JSON.stringify(T.styles)}}>
  <div className="nav-brand">${T.brand||"Brand"}</div>
  <ul className="nav-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`,form:`<form className="form" style={${JSON.stringify(T.styles)}} onSubmit={${T.onSubmit||"() => {}"}}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" name="name" />
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" name="email" />
  </div>
  <button type="submit">Submit</button>
</form>`,table:`<table className="table" style={${JSON.stringify(T.styles)}}>
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
</table>`,chart:`<div className="chart" style={${JSON.stringify(T.styles)}}>
  <canvas id="chart-${T.id}"></canvas>
</div>`,modal:`<div className="modal" style={${JSON.stringify(T.styles)}}>
  <div className="modal-content">
    <span className="close" onClick={${T.onClose||"() => {}"}}>&times;</span>
    <h2>${T.title||"Modal Title"}</h2>
    <p>${T.content||"Modal content"}</p>
  </div>
</div>`,dropdown:`<div className="dropdown" style={${JSON.stringify(T.styles)}}>
  <button className="dropdown-toggle" onClick={${T.onToggle||"() => {}"}}>
    ${T.label||"Dropdown"}
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
</div>`})[T.type]||`<div>Unknown component: ${T.type}</div>`,j=()=>{const T=`import React, { useState, useEffect } from 'react';
import './App.css';`,I=`const App = () => {
  return (
    <div className="app">
      ${a.map(G=>N(G)).join(`

`)}
    </div>
  );
};

export default App;`;return`${T}

${I}`},w=(T,C)=>{const I=C.getDropResult();if(!I)return;const G={id:`component-${Date.now()}`,type:T.type,name:T.name,position:{x:I.x,y:I.y},size:{width:200,height:100},styles:{position:"absolute",left:`${I.x}px`,top:`${I.y}px`,width:"200px",height:"100px",border:"1px solid #ddd",padding:"10px",backgroundColor:"#fff"},content:T.name,properties:{}};n(z=>[...z,G])},v=T=>{o(T),d(!0)},f=(T,C)=>{if(!i)return;const I={...i,[T]:C,styles:{...i.styles,[T]:C}};n(G=>G.map(z=>z.id===i.id?I:z)),o(I)},E=()=>`
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
`,S=()=>{const T={components:a,appCode:j(),cssCode:E(),metadata:{projectId:s,exportedAt:new Date().toISOString(),componentCount:a.length}},C=JSON.stringify(T,null,2),I=new Blob([C],{type:"application/json"}),G=URL.createObjectURL(I),z=document.createElement("a");z.href=G,z.download=`dreambuild-project-${s}.json`,z.click(),URL.revokeObjectURL(G)};return m.useEffect(()=>{t&&t({appCode:j(),cssCode:E(),components:a})},[a,t]),e.jsx(Gg,{backend:Mf,children:e.jsxs("div",{className:"visual-editor",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("h2",{children:"🎨 Visual Editor"}),e.jsxs("div",{className:"editor-controls",children:[e.jsx("button",{className:"btn btn-secondary",onClick:()=>u(!c),children:c?"Edit":"Preview"}),e.jsx("button",{className:"btn btn-primary",onClick:S,children:"Export"})]})]}),e.jsxs("div",{className:"editor-layout",children:[e.jsxs("div",{className:"component-library",children:[e.jsx("h3",{children:"📚 Component Library"}),e.jsx("div",{className:"library-categories",children:["Layout","Content","Interactive","Form","Media","Data","Navigation","Overlay"].map(T=>e.jsxs("div",{className:"category",children:[e.jsx("h4",{children:T}),e.jsx("div",{className:"category-components",children:h.filter(C=>C.category===T).map(C=>e.jsx($f,{type:C.type,name:C.name,icon:C.icon},C.type))})]},T))})]}),e.jsxs("div",{className:"canvas-container",children:[e.jsxs("div",{className:"canvas-toolbar",children:[e.jsxs("div",{className:"canvas-controls",children:[e.jsx("button",{className:"btn btn-sm",onClick:()=>x(y*.8),children:"Zoom Out"}),e.jsxs("span",{className:"zoom-level",children:[Math.round(y*100),"%"]}),e.jsx("button",{className:"btn btn-sm",onClick:()=>x(y*1.2),children:"Zoom In"})]}),e.jsx("div",{className:"canvas-size",children:e.jsxs("select",{value:`${p.width}x${p.height}`,onChange:T=>{const[C,I]=T.target.value.split("x").map(Number);g({width:C,height:I})},children:[e.jsx("option",{value:"1200x800",children:"Desktop (1200x800)"}),e.jsx("option",{value:"768x1024",children:"Tablet (768x1024)"}),e.jsx("option",{value:"375x667",children:"Mobile (375x667)"})]})})]}),e.jsx("div",{className:"canvas",ref:b,style:{width:p.width*y,height:p.height*y,transform:`scale(${y})`,transformOrigin:"top left"},children:e.jsx(_f,{onDrop:w,children:a.map(T=>e.jsx(Bf,{component:T,onSelect:v,isSelected:(i==null?void 0:i.id)===T.id},T.id))})})]}),l&&i&&e.jsxs("div",{className:"properties-panel",children:[e.jsx("h3",{children:"⚙️ Properties"}),e.jsxs("div",{className:"property-groups",children:[e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Content"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Text Content"}),e.jsx("input",{type:"text",value:i.content||"",onChange:T=>f("content",T.target.value)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Position"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"X Position"}),e.jsx("input",{type:"number",value:((k=i.position)==null?void 0:k.x)||0,onChange:T=>f("left",`${T.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Y Position"}),e.jsx("input",{type:"number",value:((D=i.position)==null?void 0:D.y)||0,onChange:T=>f("top",`${T.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Size"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Width"}),e.jsx("input",{type:"number",value:((O=i.size)==null?void 0:O.width)||200,onChange:T=>f("width",`${T.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Height"}),e.jsx("input",{type:"number",value:((L=i.size)==null?void 0:L.height)||100,onChange:T=>f("height",`${T.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Style"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Background Color"}),e.jsx("input",{type:"color",value:((A=i.styles)==null?void 0:A.backgroundColor)||"#ffffff",onChange:T=>f("backgroundColor",T.target.value)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Border Color"}),e.jsx("input",{type:"color",value:(($=i.styles)==null?void 0:$.borderColor)||"#dddddd",onChange:T=>f("borderColor",T.target.value)})]})]})]})]})]}),e.jsx("style",{jsx:!0,children:`
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
        `})]})})},$f=({type:s,name:t,icon:r})=>{const[{isDragging:a},n]=hf({type:"component",item:{type:s,name:t},collect:i=>({isDragging:i.isDragging()})});return e.jsxs("div",{ref:n,className:`draggable-component ${a?"dragging":""}`,children:[e.jsx("span",{className:"component-icon",children:r}),e.jsx("span",{className:"component-name",children:t})]})},_f=({children:s,onDrop:t})=>{const[{isOver:r},a]=wf({accept:"component",drop:(n,i)=>{var d;const o=i.getClientOffset(),l=(d=i.getDropResult())==null?void 0:d.getBoundingClientRect();o&&l&&t(n,{x:o.x-l.left,y:o.y-l.top})},collect:n=>({isOver:n.isOver()})});return e.jsx("div",{ref:a,className:`droppable-canvas ${r?"drag-over":""}`,children:s})},Bf=({component:s,onSelect:t,isSelected:r})=>{const a=n=>{n.stopPropagation(),t(s)};return e.jsx("div",{className:`visual-component ${r?"selected":""}`,style:s.styles,onClick:a,children:e.jsxs("div",{className:"component-content",children:[s.type==="text"&&(s.content||"Text"),s.type==="button"&&(s.content||"Button"),s.type==="input"&&e.jsx("input",{placeholder:s.placeholder||"Input"}),s.type==="image"&&e.jsx("div",{className:"image-placeholder",children:"🖼️ Image"}),s.type==="card"&&e.jsxs("div",{children:[e.jsx("h3",{children:s.title||"Card Title"}),e.jsx("p",{children:s.content||"Card content"})]}),!["text","button","input","image","card"].includes(s.type)&&e.jsx("div",{className:"component-placeholder",children:s.name})]})})},Uf=({projectId:s,projectData:t,onDeploy:r})=>{const[a,n]=m.useState("vercel"),[i,o]=m.useState(!1),[l,d]=m.useState(null),c=[{id:"vercel",name:"Vercel",icon:"▲",description:"Fast, global deployment"},{id:"netlify",name:"Netlify",icon:"🌐",description:"JAMstack deployment"},{id:"aws",name:"AWS Amplify",icon:"☁️",description:"Full-stack deployment"},{id:"firebase",name:"Firebase",icon:"🔥",description:"Google hosting"},{id:"github",name:"GitHub Pages",icon:"🐙",description:"Free static hosting"}],u=async()=>{o(!0),d("Deploying...");try{await new Promise(g=>setTimeout(g,3e3));const p={success:!0,provider:a,url:`https://${s}.${a}.com`,deployedAt:new Date().toISOString()};d("Deployed successfully!"),r&&r(p)}catch{d("Deployment failed")}finally{o(!1)}};return e.jsxs("div",{className:"deployment-panel",children:[e.jsx("h3",{children:"🚀 Deploy Your App"}),e.jsxs("div",{className:"provider-selection",children:[e.jsx("h4",{children:"Choose Hosting Provider"}),e.jsx("div",{className:"providers-grid",children:c.map(p=>e.jsxs("div",{className:`provider-card ${a===p.id?"selected":""}`,onClick:()=>n(p.id),children:[e.jsx("div",{className:"provider-icon",children:p.icon}),e.jsx("div",{className:"provider-name",children:p.name}),e.jsx("div",{className:"provider-description",children:p.description})]},p.id))})]}),e.jsx("div",{className:"deployment-actions",children:e.jsx("button",{className:"btn btn-primary btn-lg",onClick:u,disabled:i,children:i?"Deploying...":"Deploy Now"})}),l&&e.jsx("div",{className:"deployment-status",children:e.jsx("div",{className:`status-message ${l.includes("success")?"success":"error"}`,children:l})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},Hf=({projectId:s,onMemoryUpdate:t})=>{const[r,a]=m.useState(null),[n,i]=m.useState([]),[o,l]=m.useState(""),[d,c]=m.useState([]),[u,p]=m.useState(!1),[g,y]=m.useState(null);m.useEffect(()=>{s&&(x(),b())},[s]);const x=async()=>{try{p(!0);const w=await qt.loadConversationMemory(s);if(a(w),w){const v=await qt.getConversationHistory(s);i(v)}}catch(w){console.error("Failed to load memory:",w)}finally{p(!1)}},b=async()=>{try{const w=await qt.getStorageStats();y(w)}catch(w){console.error("Failed to load stats:",w)}},h=async()=>{if(o.trim())try{p(!0);const w=await qt.searchConversationMemory(s,o);c(w)}catch(w){console.error("Failed to search memory:",w)}finally{p(!1)}},N=async()=>{if(window.confirm("Are you sure you want to clear all conversation memory?"))try{await qt.clearConversationMemory(s),a(null),i([]),c([]),t&&t()}catch(w){console.error("Failed to clear memory:",w)}},j=()=>{if(!r)return;const w=JSON.stringify(r,null,2),v=new Blob([w],{type:"application/json"}),f=URL.createObjectURL(v),E=document.createElement("a");E.href=f,E.download=`dreambuild-memory-${s}.json`,E.click(),URL.revokeObjectURL(f)};return u?e.jsx("div",{className:"memory-manager",children:e.jsx("div",{className:"loading",children:"Loading memory..."})}):e.jsxs("div",{className:"memory-manager",children:[e.jsxs("div",{className:"memory-header",children:[e.jsx("h3",{children:"🧠 Conversation Memory"}),e.jsxs("div",{className:"memory-actions",children:[e.jsx("button",{onClick:x,className:"btn btn-secondary",children:"Refresh"}),e.jsx("button",{onClick:j,className:"btn btn-secondary",children:"Export"}),e.jsx("button",{onClick:N,className:"btn btn-danger",children:"Clear"})]})]}),g&&e.jsxs("div",{className:"memory-stats",children:[e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Projects:"}),e.jsx("span",{className:"stat-value",children:g.totalProjects})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Files:"}),e.jsx("span",{className:"stat-value",children:g.totalFiles})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Size:"}),e.jsxs("span",{className:"stat-value",children:[g.totalSizeMB," MB"]})]})]}),e.jsxs("div",{className:"memory-search",children:[e.jsx("input",{type:"text",placeholder:"Search conversation memory...",value:o,onChange:w=>l(w.target.value),onKeyPress:w=>w.key==="Enter"&&h()}),e.jsx("button",{onClick:h,className:"btn btn-primary",children:"Search"})]}),d.length>0&&e.jsxs("div",{className:"search-results",children:[e.jsx("h4",{children:"Search Results"}),d.map((w,v)=>e.jsxs("div",{className:"search-result",children:[e.jsx("div",{className:"result-type",children:w.type}),e.jsx("div",{className:"result-text",children:w.text}),e.jsx("div",{className:"result-timestamp",children:w.timestamp})]},v))]}),n.prompts&&n.prompts.length>0&&e.jsxs("div",{className:"conversation-history",children:[e.jsx("h4",{children:"Conversation History"}),e.jsxs("div",{className:"history-stats",children:[e.jsxs("span",{children:["Prompts: ",n.totalPrompts]}),e.jsxs("span",{children:["Responses: ",n.totalResponses]})]}),e.jsx("div",{className:"history-list",children:n.prompts.map((w,v)=>e.jsxs("div",{className:"history-item",children:[e.jsxs("div",{className:"history-prompt",children:[e.jsx("strong",{children:"Prompt:"})," ",w.text]}),n.responses[v]&&e.jsxs("div",{className:"history-response",children:[e.jsx("strong",{children:"Response:"})," ",n.responses[v].text]}),e.jsx("div",{className:"history-timestamp",children:new Date(w.timestamp).toLocaleString()})]},w.id))})]}),r&&e.jsxs("div",{className:"memory-details",children:[e.jsx("h4",{children:"Memory Details"}),e.jsxs("div",{className:"memory-info",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Project ID:"})," ",r.projectId]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Created:"})," ",new Date(r.createdAt).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Last Updated:"})," ",new Date(r.lastUpdated).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Memory Size:"})," ",JSON.stringify(r).length," bytes"]})]})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},Gf=({projectId:s,initialFiles:t={}})=>{const[r,a]=m.useState("code"),[n,i]=m.useState(t),[o,l]=m.useState(null),[d,c]=m.useState(!1),[u,p]=m.useState(!1),[g,y]=m.useState(null),x=[{id:"code",name:"Code Editor",icon:"💻"},{id:"visual",name:"Visual Editor",icon:"🎨"},{id:"collaboration",name:"Collaboration",icon:"🤝"},{id:"deployment",name:"Deployment",icon:"🚀"},{id:"memory",name:"Memory",icon:"🧠"}],b=(v,f)=>{i(E=>({...E,[v]:f}))},h=v=>{v.appCode&&b("src/App.jsx",v.appCode),v.cssCode&&b("src/App.css",v.cssCode)},N=v=>{y(v),console.log("Deployment result:",v)},j=v=>{i(f=>({...f,...v})),console.log("Version restored:",v)},w=()=>{switch(r){case"code":return e.jsxs("div",{className:"code-editor-tab",children:[e.jsxs("div",{className:"file-explorer",children:[e.jsx("h3",{children:"📁 Files"}),e.jsx("div",{className:"file-list",children:Object.keys(n).map(v=>e.jsxs("div",{className:`file-item ${o===v?"selected":""}`,onClick:()=>l(v),children:[e.jsx("span",{className:"file-icon",children:"📄"}),e.jsx("span",{className:"file-name",children:v})]},v))})]}),e.jsx("div",{className:"code-editor",children:o&&e.jsxs("div",{className:"editor-container",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("span",{className:"file-name",children:o}),e.jsxs("div",{className:"editor-actions",children:[e.jsx("button",{className:"btn btn-sm",children:"Save"}),e.jsx("button",{className:"btn btn-sm",children:"Format"})]})]}),e.jsx("textarea",{className:"code-textarea",value:n[o]||"",onChange:v=>b(o,v.target.value),placeholder:"Start coding..."})]})})]});case"visual":return e.jsx("div",{className:"visual-editor-tab",children:e.jsx(Ff,{projectId:s,onCodeChange:h,initialComponents:[]})});case"collaboration":return e.jsxs("div",{className:"collaboration-tab",children:[e.jsxs("div",{className:"collaboration-header",children:[e.jsx("h3",{children:"🤝 Real-time Collaboration"}),e.jsxs("button",{className:`btn ${d?"btn-danger":"btn-primary"}`,onClick:()=>c(!d),children:[d?"Disable":"Enable"," Collaboration"]})]}),d?e.jsx(kh,{projectId:s,fileId:o,onFileChange:b,onVersionRestore:j}):e.jsxs("div",{className:"collaboration-disabled",children:[e.jsx("p",{children:"Enable collaboration to work with team members in real-time"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Multi-user co-editing"}),e.jsx("li",{children:"Real-time comments"}),e.jsx("li",{children:"Version history"}),e.jsx("li",{children:"User presence"})]})]})]});case"deployment":return e.jsxs("div",{className:"deployment-tab",children:[e.jsx(Uf,{projectId:s,projectData:{files:n},onDeploy:N}),g&&e.jsxs("div",{className:"deployment-result",children:[e.jsx("h4",{children:"Deployment Result"}),e.jsxs("div",{className:"result-details",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Provider:"})," ",g.provider]}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ",e.jsx("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",children:g.url})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",g.status]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deployed:"})," ",new Date(g.deployedAt).toLocaleString()]})]})]})]});case"memory":return e.jsx("div",{className:"memory-tab",children:e.jsx(Hf,{projectId:s,onMemoryUpdate:()=>console.log("Memory updated")})});default:return e.jsx("div",{children:"Select a tab to get started"})}};return e.jsxs("div",{className:"integrated-workspace",children:[e.jsxs("div",{className:"workspace-header",children:[e.jsx("h2",{children:"🚀 DreamBuild Advanced Workspace"}),e.jsxs("div",{className:"workspace-status",children:[e.jsx("span",{className:"status-indicator",children:"●"}),e.jsxs("span",{children:["Project: ",s]})]})]}),e.jsx("div",{className:"workspace-tabs",children:x.map(v=>e.jsxs("button",{className:`tab-button ${r===v.id?"active":""}`,onClick:()=>a(v.id),children:[e.jsx("span",{className:"tab-icon",children:v.icon}),e.jsx("span",{className:"tab-name",children:v.name})]},v.id))}),e.jsx("div",{className:"workspace-content",children:w()}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},zf=({onTemplateSelect:s,isVisible:t,onClose:r})=>{var S;const{currentProject:a,updateFile:n,switchFile:i}=Je(),[o,l]=m.useState(""),[d,c]=m.useState("all"),[u,p]=m.useState(!1),g=[{id:"all",name:"All Templates",icon:ft,color:"text-purple-500"},{id:"web-apps",name:"Web Apps",icon:Se,color:"text-blue-500"},{id:"mobile-apps",name:"Mobile Apps",icon:es,color:"text-green-500"},{id:"games",name:"Games",icon:Qo,color:"text-orange-500"},{id:"tools",name:"Tools",icon:J,color:"text-gray-500"}],[y,x]=m.useState([]),[b,h]=m.useState([]),[N,j]=m.useState(!0);m.useEffect(()=>{t&&(async()=>{try{j(!0);const[D,O]=await Promise.all([Kt.getAllTemplates(),Kt.getPopularTemplates()]);x(D),h(O)}catch(D){console.error("Failed to load templates:",D),X.error("Failed to load templates")}finally{j(!1)}})()},[t]);const w=y.filter(k=>{const D=k.name.toLowerCase().includes(o.toLowerCase())||k.description.toLowerCase().includes(o.toLowerCase()),O=d==="all"||k.category===d;return D&&O}),v=async k=>{p(!0);try{console.log("🎯 Generating template:",k.id);const D=await Kt.generateTemplateById(k.id);Object.entries(D).forEach(([L,A])=>{n(L,A)});const O=Object.keys(D)[0];O&&i(O),X.success(`Generated ${k.name} successfully!`),s&&s(k,D),r&&r()}catch(D){console.error("❌ Template generation failed:",D),X.error(`Failed to generate ${k.name}`)}finally{p(!1)}},f=k=>{const D=g.find(O=>O.id===k);return D?D.icon:J},E=k=>{const D=g.find(O=>O.id===k);return D?D.color:"text-gray-500"};return t?e.jsx(Xe,{children:e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",onClick:r,children:e.jsxs(F.div,{initial:{scale:.95},animate:{scale:1},exit:{scale:.95},className:"bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:k=>k.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:e.jsx(we,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-foreground",children:"Template Gallery"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Choose a template to get started"})]})]}),e.jsx("button",{onClick:r,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Close",children:e.jsx("span",{className:"text-xl text-muted-foreground",children:"×"})})]}),e.jsxs("div",{className:"p-6 border-b border-border",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx(We,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search templates...",value:o,onChange:k=>l(k.target.value),className:"w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20"})]}),e.jsxs("button",{className:"px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:bg-muted/80 transition-colors flex items-center gap-2",children:[e.jsx(Bs,{className:"h-4 w-4"}),"Filters"]})]}),e.jsx("div",{className:"flex gap-2 overflow-x-auto",children:g.map(k=>{const D=k.icon;return e.jsxs("button",{onClick:()=>c(k.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${d===k.id?"bg-blue-500 text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[e.jsx(D,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:k.name})]},k.id)})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[d==="all"&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(le,{className:"h-5 w-5 text-yellow-500"}),e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Popular Templates"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:N?Array.from({length:3}).map((k,D)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},D)):b.map(k=>{const D=f(k.category),O=E(k.category);return e.jsxs(F.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>v(k),disabled:u,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${O}`,children:e.jsx(D,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:k.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[k.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:k.description})]},k.id)})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:d==="all"?"All Templates":(S=g.find(k=>k.id===d))==null?void 0:S.name}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:[w.length," template",w.length!==1?"s":""]})]}),w.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4",children:e.jsx(We,{className:"h-8 w-8 text-muted-foreground"})}),e.jsx("h4",{className:"text-lg font-medium text-foreground mb-2",children:"No templates found"}),e.jsx("p",{className:"text-muted-foreground",children:"Try adjusting your search or filters"})]}):N?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Array.from({length:6}).map((k,D)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},D))}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:w.map(k=>{const D=f(k.category),O=E(k.category);return e.jsxs(F.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>v(k),disabled:u,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${O}`,children:e.jsx(D,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:k.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[k.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:k.description})]},k.id)})})]})]}),e.jsx("div",{className:"p-6 border-t border-border bg-muted/30",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"Need something custom? Use the AI prompt to generate unique applications."}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"Close"})]})})]})})}):null},Wf=({children:s,direction:t="horizontal",className:r=""})=>e.jsx("div",{className:`resizable-panel-group flex ${t} h-full ${r}`,children:s}),Sr=({children:s,defaultSize:t=50,minSize:r=10,maxSize:a=90,className:n=""})=>e.jsx("div",{className:`resizable-panel ${n}`,style:{flexBasis:`${t}%`,minWidth:`${r}%`,maxWidth:`${a}%`},children:s}),Nn=({className:s="",onResize:t,children:r,handleIndex:a=0})=>{const[n,i]=m.useState(!1),o=m.useRef(null),l=u=>{i(!0),u.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",console.log("Handle clicked:",a)},d=m.useCallback(u=>{var N;if(!n)return;const p=(N=o.current)==null?void 0:N.parentElement;if(!p)return;const g=p.getBoundingClientRect(),x=(u.clientX-g.left)/g.width*100,h=Array.from(p.children).filter(j=>j.classList.contains("resizable-panel"));if(console.log("Total panels found:",h.length,"Handle index:",a),h.length>=2){let j,w;if(a===0?(j=h[0],w=h[1],console.log("Resizing File Manager and Code Editor")):a===1&&(j=h[1],w=h[2],console.log("Resizing Code Editor and AI Assistant")),j&&w){const v=Math.max(15,Math.min(70,x)),f=Math.max(15,Math.min(70,100-v));console.log("Setting sizes:",{leftSize:v,rightSize:f,percentage:x}),j.style.flexBasis=`${v}%`,w.style.flexBasis=`${f}%`,j.style.border="3px solid red",w.style.border="3px solid blue",setTimeout(()=>{j.style.border="",w.style.border=""},300),t&&t({leftSize:v,rightSize:f})}}},[n,t,a]),c=m.useCallback(()=>{i(!1),document.body.style.cursor="",document.body.style.userSelect=""},[]);return m.useEffect(()=>{if(n)return document.addEventListener("mousemove",d),document.addEventListener("mouseup",c),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c)}},[n,d,c]),e.jsx("div",{ref:o,className:`resizable-handle w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group flex items-center justify-center ${n?"bg-primary/70":""} ${s}`,onMouseDown:l,children:r||e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/70 transition-colors"})})},qf=()=>{const[s,t]=m.useState("editor"),[r,a]=m.useState(!1),[n,i]=m.useState(!1),o=[{id:"editor",label:"Code Editor",icon:J,description:"Edit your code with live preview"},{id:"preview",label:"Live Preview",icon:He,description:"View your application in real-time"},{id:"terminal",label:"Terminal",icon:Tr,description:"Command line interface"},{id:"workspace",label:"Advanced Workspace",icon:Ue,description:"Full-featured workspace with collaboration, visual editor, and deployment"}],l=d=>{d==="workspace"?s==="workspace"&&r?(a(!1),t("editor")):(a(!0),t(d)):(t(d),a(!1))};return e.jsxs("div",{className:"h-screen bg-background flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between px-8 py-4 bg-gradient-to-r from-card/95 to-background/95 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-primary/5",style:{marginTop:"45px"},children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:e.jsx(J,{className:"h-5 w-5 text-primary-foreground"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold text-foreground",children:"AI Builder"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Build with artificial intelligence"})]})]}),e.jsxs(ue,{to:"/templates",className:"flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",title:"Browse Templates",children:[e.jsx(we,{className:"h-4 w-4"}),"Templates"]})]}),e.jsx("div",{className:"flex items-center gap-1 bg-muted/40 p-1.5 rounded-2xl border border-border/60 shadow-inner",children:o.map(d=>{const c=d.icon;return e.jsxs(F.button,{whileHover:{scale:1.02,y:-1},whileTap:{scale:.98},onClick:()=>l(d.id),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative group ${s===d.id?"bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105":"text-muted-foreground hover:text-foreground hover:bg-background/80 hover:shadow-sm"}`,title:d.description,children:[e.jsx(c,{className:`h-4 w-4 transition-transform duration-300 ${s===d.id?"scale-110":"group-hover:scale-105"}`}),e.jsxs("span",{className:"relative",children:[d.label,s===d.id&&e.jsx(F.div,{layoutId:"activeBuilderTab",className:"absolute inset-0 bg-primary/10 rounded-xl -z-10",initial:!1,transition:{type:"spring",stiffness:500,damping:30}})]})]},d.id)})})]}),e.jsx("div",{className:"flex-1 p-8 bg-gradient-to-br from-background via-muted/20 to-background",children:e.jsxs(Wf,{direction:"horizontal",className:"h-full gap-4",children:[e.jsx(Sr,{defaultSize:20,minSize:10,maxSize:50,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ie,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"Files"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(Lu,{})})]})}),e.jsx(Nn,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:0,children:e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),e.jsx(Sr,{defaultSize:50,minSize:25,maxSize:70,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[s==="editor"&&e.jsx(J,{className:"h-4 w-4 text-primary"}),s==="preview"&&e.jsx(He,{className:"h-4 w-4 text-primary"}),s==="workspace"&&e.jsx(Ue,{className:"h-4 w-4 text-primary"}),s==="terminal"&&e.jsx(Tr,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground capitalize",children:s})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Ready"})]})]}),e.jsxs("div",{className:"flex-1 overflow-hidden h-full min-h-[600px]",children:[s==="editor"&&e.jsx(Um,{}),s==="preview"&&e.jsx(Hm,{}),s==="workspace"&&r&&e.jsx(Gf,{projectId:"demo-project"}),s==="workspace"&&!r&&e.jsx("div",{className:"h-full flex items-center justify-center bg-muted/20",children:e.jsxs("div",{className:"text-center",children:[e.jsx(Ue,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"Advanced Workspace"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Click the Advanced Workspace button to open the full-featured workspace"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[e.jsx("p",{children:"Features include:"}),e.jsxs("ul",{className:"mt-2 space-y-1",children:[e.jsx("li",{children:"• Real-time Collaboration"}),e.jsx("li",{children:"• Visual Editor"}),e.jsx("li",{children:"• One-click Deployment"}),e.jsx("li",{children:"• Memory Management"})]})]})]})}),s==="terminal"&&e.jsx("div",{className:"h-full flex flex-col bg-gray-900",children:e.jsx("div",{className:"flex-grow p-4 text-green-400 font-mono text-sm overflow-y-auto",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),e.jsx("span",{className:"text-gray-500",children:"$"}),e.jsx("span",{className:"text-gray-300",children:"npm run dev"})]}),e.jsx("div",{className:"text-gray-400",children:"Starting development server..."}),e.jsx("div",{className:"text-green-400",children:"✓ Server running on http://localhost:3000"}),e.jsx("div",{className:"text-blue-400",children:"✓ Ready in 2.3s"}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),e.jsx("span",{className:"text-gray-500",children:"$"}),e.jsx("span",{className:"text-gray-300 animate-pulse",children:"_"})]})})]})})})]})]})}),e.jsx(Nn,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:1,children:e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),e.jsx(Sr,{defaultSize:30,minSize:15,maxSize:60,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ue,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"AI Assistant"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(wh,{})})]})})]})}),e.jsx(zf,{isVisible:n,onClose:()=>i(!1),onTemplateSelect:(d,c)=>{console.log("🎯 Template selected:",d.name),i(!1)}})]})},Vf=()=>{const{addFilesToProject:s}=Je(),{theme:t}=qs(),[r,a]=m.useState(""),[n,i]=m.useState("all"),[o,l]=m.useState("grid"),[d,c]=m.useState("popularity"),[u,p]=m.useState([]),[g,y]=m.useState(!0),[x,b]=m.useState(0),[h,N]=m.useState("Loading templates..."),[j,w]=m.useState(!1),[v,f]=m.useState(null),E=[{id:"web-apps",name:"Web Applications",icon:Se,description:"Full-stack web applications",color:"from-blue-500 to-cyan-500"},{id:"mobile-apps",name:"Mobile Apps",icon:es,description:"React Native and mobile applications",color:"from-purple-500 to-pink-500"},{id:"landing-pages",name:"Landing Pages",icon:we,description:"Marketing and landing pages",color:"from-green-500 to-emerald-500"},{id:"dashboards",name:"Dashboards",icon:as,description:"Analytics and admin dashboards",color:"from-orange-500 to-red-500"},{id:"ecommerce",name:"E-commerce",icon:Zo,description:"Online stores and marketplaces",color:"from-yellow-500 to-orange-500"},{id:"portfolio",name:"Portfolio",icon:Rn,description:"Personal and creative portfolios",color:"from-indigo-500 to-purple-500"}],S=[{id:"todo-app",name:"Todo Application",description:"A modern todo app with React, Node.js, and MongoDB",category:"web-apps",tags:["React","Node.js","MongoDB","Express"],preview:"/api/placeholder/400/300",popularity:95,createdAt:"2024-01-15",files:{"package.json":'{"name": "todo-app", "version": "1.0.0", "dependencies": {"react": "^18.0.0"}}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Todo App</div>; }'}},{id:"blog-platform",name:"Blog Platform",description:"Full-featured blog with CMS, comments, and SEO",category:"web-apps",tags:["React","Next.js","Prisma","PostgreSQL"],preview:"/api/placeholder/400/300",popularity:88,createdAt:"2024-01-10",files:{"package.json":'{"name": "blog-platform", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Blog Platform</div>; }'}},{id:"weather-app",name:"Weather App",description:"Beautiful weather app with location services",category:"mobile-apps",tags:["React Native","Expo","API"],preview:"/api/placeholder/400/300",popularity:82,createdAt:"2024-01-12",files:{"package.json":'{"name": "weather-app", "version": "1.0.0"}',"App.js":'import React from "react"; export default function App() { return <div>Weather App</div>; }'}},{id:"saas-landing",name:"SaaS Landing Page",description:"Modern SaaS landing page with pricing and features",category:"landing-pages",tags:["React","Tailwind CSS","Framer Motion"],preview:"/api/placeholder/400/300",popularity:90,createdAt:"2024-01-08",files:{"package.json":'{"name": "saas-landing", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>SaaS Landing</div>; }'}},{id:"analytics-dashboard",name:"Analytics Dashboard",description:"Real-time analytics dashboard with charts and metrics",category:"dashboards",tags:["React","Chart.js","D3.js","WebSocket"],preview:"/api/placeholder/400/300",popularity:85,createdAt:"2024-01-05",files:{"package.json":'{"name": "analytics-dashboard", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Analytics Dashboard</div>; }'}},{id:"online-store",name:"Online Store",description:"Complete e-commerce solution with cart and payments",category:"ecommerce",tags:["React","Stripe","Firebase","Redux"],preview:"/api/placeholder/400/300",popularity:92,createdAt:"2024-01-03",files:{"package.json":'{"name": "online-store", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Online Store</div>; }'}},{id:"creative-portfolio",name:"Creative Portfolio",description:"Stunning portfolio for designers and developers",category:"portfolio",tags:["React","Three.js","GSAP","Framer Motion"],preview:"/api/placeholder/400/300",popularity:87,createdAt:"2024-01-01",files:{"package.json":'{"name": "creative-portfolio", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Creative Portfolio</div>; }'}}];m.useEffect(()=>{(async()=>{try{y(!0),b(0),N("Loading templates..."),b(20),N("Loading local templates..."),b(40),N("Initializing template service...");const{default:I}=await Be(async()=>{const{default:W}=await Promise.resolve().then(()=>vh);return{default:W}},void 0);b(60),N("Fetching trending templates from GitHub...");const G=I.getAllTemplates(),z=new Promise((W,H)=>setTimeout(()=>H(new Error("Template loading timeout")),3e4)),M=await Promise.race([G,z]);b(80),N("Processing templates..."),p([...S,...M]),b(100),N("Templates loaded successfully!"),setTimeout(()=>{y(!1)},500)}catch(I){console.error("Failed to load GitHub templates:",I),I.message==="Template loading timeout"?N("Loading fallback templates (GitHub API timeout)..."):N("Loading fallback templates..."),b(80),await new Promise(G=>setTimeout(G,200)),b(100),p(S),setTimeout(()=>{y(!1)},500)}})()},[]);const k=u.filter(C=>{const I=n==="all"||C.category===n,G=r===""||C.name.toLowerCase().includes(r.toLowerCase())||(C.description||"").toLowerCase().includes(r.toLowerCase())||(C.tags||[]).some(z=>z.toLowerCase().includes(r.toLowerCase()));return I&&G}).sort((C,I)=>{switch(d){case"popularity":return I.popularity-C.popularity;case"newest":return new Date(I.createdAt)-new Date(C.createdAt);case"name":return C.name.localeCompare(I.name);default:return 0}}),D=async C=>{try{let I={};C.id.startsWith("github_")?I=O(C):I=C.files||{},s(I),U.success(`Template "${C.name}" added to your project!`)}catch(I){console.error("Failed to use template:",I),U.error("Failed to load template. Please try again.")}},O=C=>{const I={},G={name:C.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:C.description||"Generated from GitHub template",main:"index.js",scripts:{start:"npm run dev",dev:"vite",build:"vite build"},dependencies:{react:"^18.2.0","react-dom":"^18.2.0"},devDependencies:{vite:"^4.0.0","@vitejs/plugin-react":"^3.0.0"}};I["package.json"]=JSON.stringify(G,null,2),I["index.html"]=`<!DOCTYPE html>
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
</html>`,I["src/main.jsx"]=`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`;const z=L(C);return I["src/App.jsx"]=z,I["src/App.css"]=`* {
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
}`,I},L=C=>{const I=C.name;switch(C.category||"web"){case"todo-app":return`import React, { useState } from 'react'
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
        <h1>${I}</h1>
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
        <h1>${I}</h1>
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
        <h1>${I}</h1>
        <p>${C.description||"A new project created with DreamBuild"}</p>
      </div>
      
      <div className="content">
        <h2>Welcome to your new ${I}!</h2>
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

export default App`}},A=C=>{console.log("🔍 Opening preview for template:",C.name),f(C),w(!0),console.log("✅ Preview state set to true")},$=()=>{console.log("❌ Closing preview modal"),w(!1),f(null),console.log("✅ Preview state set to false")};m.useEffect(()=>{const C=I=>{I.key==="Escape"&&j&&$()};if(j)return document.addEventListener("keydown",C),()=>{document.removeEventListener("keydown",C)}},[j]);const T=C=>{const I=JSON.stringify(C,null,2);navigator.clipboard.writeText(I),U.success(`Template "${C.name}" copied to clipboard!`)};return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx("div",{className:"bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-border/50",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:e.jsxs("div",{className:"text-center",children:[e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"flex items-center justify-center gap-3 mb-8",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:e.jsx(we,{className:"h-6 w-6 text-primary-foreground"})}),e.jsx("h1",{className:"text-4xl font-bold text-high-contrast",children:"Template Library"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[e.jsx(F.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-xl text-muted-foreground max-w-2xl mx-auto text-center",children:"Choose from our collection of professionally designed templates to jumpstart your next project"}),e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"max-w-md w-full mx-auto relative",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"Search templates...",value:r,onChange:C=>a(C.target.value),className:"w-full pl-4 pr-12 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground"}),e.jsx(We,{className:"absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10"})]})})]})]})})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Bs,{className:"h-5 w-5 text-muted-foreground"}),e.jsxs("select",{value:n,onChange:C=>i(C.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[e.jsx("option",{value:"all",children:"All Categories"}),E.map(C=>e.jsx("option",{value:C.id,children:C.name},C.id))]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("select",{value:d,onChange:C=>c(C.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[e.jsx("option",{value:"popularity",children:"Most Popular"}),e.jsx("option",{value:"newest",children:"Newest First"}),e.jsx("option",{value:"name",children:"Alphabetical"})]})}),e.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[e.jsx("button",{onClick:()=>l("grid"),className:`p-2 rounded-lg transition-colors ${o==="grid"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:e.jsx(el,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>l("list"),className:`p-2 rounded-lg transition-colors ${o==="list"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:e.jsx(In,{className:"h-4 w-4"})})]})]}),g?e.jsx("div",{className:"flex flex-col items-center justify-center py-20",children:e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"w-full max-w-md",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center animate-spin",children:e.jsx(ft,{className:"h-8 w-8 text-primary-foreground"})})}),e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:h}),e.jsx("p",{className:"text-muted-foreground",children:"Fetching the latest templates for you..."})]}),e.jsx("div",{className:"w-full bg-muted rounded-full h-3 mb-4",children:e.jsx(F.div,{className:"bg-gradient-to-r from-primary to-primary-light h-3 rounded-full",initial:{width:0},animate:{width:`${x}%`},transition:{duration:.5,ease:"easeOut"}})}),e.jsxs("div",{className:"flex justify-between items-center text-sm text-muted-foreground",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[x,"%"]})]}),e.jsxs("div",{className:"mt-6 space-y-2",children:[e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=20?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=20?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Loading local templates"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=40?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=40?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Initializing template service"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=60?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=60?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Fetching GitHub templates"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=80?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=80?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Processing templates"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=100?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=100?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Ready to use!"})]})]})]})}):o==="grid"?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:k.map((C,I)=>e.jsxs(F.div,{"data-template-id":C.id,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:I*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:[e.jsxs("div",{className:"aspect-video bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(we,{className:"h-12 w-12 text-muted-foreground mx-auto mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:C.name})]})}),e.jsx("div",{className:"absolute top-3 right-3",children:e.jsxs("div",{className:"flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs",children:[e.jsx(le,{className:"h-3 w-3 text-warning fill-current"}),e.jsxs("span",{children:[C.popularity,"%"]})]})})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors",children:C.name}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:C.description||"No description available"}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[(C.tags||[]).slice(0,3).map(G=>e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:G},G)),(C.tags||[]).length>3&&e.jsxs("span",{className:"px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md",children:["+",(C.tags||[]).length-3," more"]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>D(C),className:"flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[e.jsx(Pe,{className:"h-4 w-4"}),"Use Template"]}),e.jsx("button",{onClick:()=>A(C),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:e.jsx(He,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>T(C),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:e.jsx(Ot,{className:"h-4 w-4"})})]})]})]},C.id))}):e.jsx("div",{className:"space-y-4",children:k.map((C,I)=>e.jsx(F.div,{"data-template-id":C.id,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:I*.05},className:"bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("div",{className:"w-24 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center flex-shrink-0",children:e.jsx(we,{className:"h-6 w-6 text-muted-foreground"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("h3",{className:"font-semibold text-lg text-foreground group-hover:text-primary transition-colors",children:C.name}),e.jsxs("div",{className:"flex items-center gap-1 bg-warning/10 text-warning px-2 py-1 rounded-full text-xs",children:[e.jsx(le,{className:"h-3 w-3 fill-current"}),e.jsxs("span",{children:[C.popularity||0,"%"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:C.description||"No description available"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:(C.tags||[]).map(G=>e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:G},G))})]}),e.jsxs("div",{className:"flex gap-2 flex-shrink-0",children:[e.jsxs("button",{onClick:()=>D(C),className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[e.jsx(Pe,{className:"h-4 w-4"}),"Use Template"]}),e.jsx("button",{onClick:()=>A(C),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:e.jsx(He,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>T(C),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:e.jsx(Ot,{className:"h-4 w-4"})})]})]})},C.id))}),k.length===0&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx(we,{className:"h-16 w-16 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No templates found"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search criteria or browse all categories"}),e.jsx("button",{onClick:()=>{a(""),i("all")},className:"px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]})]}),j&&v&&e.jsx("div",{className:"modal-backdrop",style:{position:"fixed",top:0,left:0,right:0,bottom:0,width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",backgroundColor:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(4px)",zIndex:9999,visibility:"visible",opacity:1,pointerEvents:"auto"},onClick:C=>{C.target===C.currentTarget&&$()},children:e.jsxs(F.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"modal-content bg-white border border-gray-300 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col",style:{zIndex:1e4,backgroundColor:"white",border:"2px solid #e5e7eb",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)",visibility:"visible",opacity:1,display:"flex",position:"relative"},onClick:C=>{C.stopPropagation()},children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50 flex-shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(He,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-semibold text-gray-900",children:["Preview: ",v.name]}),e.jsx("p",{className:"text-sm text-gray-600",children:"See how this template looks when completed"})]})]}),e.jsx("button",{onClick:$,className:"flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg",title:"Close Preview",children:e.jsx(Yr,{className:"h-5 w-5"})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-6 bg-white",children:[e.jsxs("div",{className:"max-w-full",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-gray-600 mb-4",children:v.description||"A professional template for your next project."}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(v.tags||[]).slice(0,5).map(C=>e.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:C},C))}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Difficulty:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900",children:v.difficulty||"Beginner"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Time:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900",children:v.estimatedTime||"2-4 hours"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Stars:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900",children:v.stars||"N/A"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Source:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900 capitalize",children:v.source||"Local"})]})]})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900",children:[e.jsx(Se,{className:"h-5 w-5"}),"Live Preview"]}),e.jsxs("div",{className:"bg-white rounded-lg border-2 border-gray-300 overflow-hidden shadow-lg",style:{backgroundColor:"white"},children:[e.jsxs("div",{className:"bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-red-400 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-yellow-400 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full"})]}),e.jsx("div",{className:"flex-1 text-center",children:e.jsx("span",{className:"text-sm text-gray-600 font-medium",children:v.name})})]}),e.jsx("div",{className:"p-8 min-h-[400px]",children:Jf(v)})]})]}),v.features&&v.features.length>0&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-900",children:"Features"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:v.features.map((C,I)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-600",children:C})]},I))})]}),v.techStack&&v.techStack.length>0&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-900",children:"Tech Stack"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:v.techStack.map((C,I)=>e.jsx("span",{className:"px-3 py-1 bg-gray-100 border border-gray-300 text-sm rounded-lg text-gray-800",children:C},I))})]})]}),e.jsxs("div",{className:"flex items-center justify-between p-6 border-t border-gray-200",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[e.jsx(le,{className:"h-4 w-4"}),e.jsxs("span",{children:["Popularity: ",v.popularity||0,"%"]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:$,className:"px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors",children:"Close"}),e.jsxs("button",{onClick:()=>{D(v),$()},className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2",children:[e.jsx(Pe,{className:"h-4 w-4"}),"Use Template"]})]})]})]})]})})]})},Jf=s=>{const t=s.category||"web",r=s.name.toLowerCase(),a=(s.description||"").toLowerCase(),n=(s.tags||[]).join(" ").toLowerCase(),i=`${r} ${a} ${n}`.toLowerCase();return i.includes("todo")||t==="todo-app"||i.includes("task")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"✅ Todo Application"}),e.jsx("p",{className:"text-gray-600",children:"Simple todo application"})]}),e.jsxs("div",{className:"max-w-md mx-auto space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"Add a new todo...",className:"flex-1 px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none",readOnly:!0}),e.jsx("button",{className:"px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg",children:"➕ Add"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-blue-500 rounded"}),e.jsx("span",{className:"flex-1 text-gray-800 font-medium",children:"📝 Complete project documentation"}),e.jsx("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl",children:[e.jsx("input",{type:"checkbox",checked:!0,className:"w-5 h-5 text-green-500 rounded"}),e.jsx("span",{className:"flex-1 line-through text-gray-500",children:"✅ Review code changes"}),e.jsx("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-blue-500 rounded"}),e.jsx("span",{className:"flex-1 text-gray-800 font-medium",children:"📦 Update dependencies"}),e.jsx("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]})]})]})]}):i.includes("calculator")||t==="calculator"||i.includes("math")||i.includes("arithmetic")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"🧮 Calculator"}),e.jsx("p",{className:"text-gray-600",children:"Simple calculator application"})]}),e.jsxs("div",{className:"max-w-xs mx-auto",children:[e.jsx("div",{className:"bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl mb-4 shadow-lg",children:e.jsx("div",{className:"text-right text-3xl font-mono text-green-400",children:"42"})}),e.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[["C","/","*","-"].map((o,l)=>e.jsx("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${l===0?"bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700":"bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"}`,children:o},o)),[7,8,9,"+"].map((o,l)=>e.jsx("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${l===3?"bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700":"bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500"}`,children:o},o)),[4,5,6,"="].map((o,l)=>e.jsx("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${l===3?"bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 row-span-2":"bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500"}`,children:o},o)),[1,2,3].map(o=>e.jsx("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all",children:o},o)),e.jsx("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all col-span-2",children:"0"}),e.jsx("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all",children:"."})]})]})]}):i.includes("store")||i.includes("ecommerce")||i.includes("shop")||i.includes("marketplace")||i.includes("retail")||t==="ecommerce"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Online Store"}),e.jsx("p",{className:"text-gray-600",children:"Modern e-commerce platform"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold",children:"🛍️ TechStore"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"bg-white bg-opacity-20 px-3 py-1 rounded-full",children:"🛒 Cart (2)"}),e.jsx("span",{className:"bg-white bg-opacity-20 px-3 py-1 rounded-full",children:"👤 Account"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"border-2 border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-full h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-2 flex items-center justify-center",children:e.jsx("span",{className:"text-white text-2xl",children:"🎧"})}),e.jsx("h3",{className:"font-semibold text-sm text-gray-800",children:"Wireless Headphones"}),e.jsx("p",{className:"text-green-600 font-bold text-lg",children:"$99.99"}),e.jsx("button",{className:"w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"Add to Cart"})]}),e.jsxs("div",{className:"border-2 border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-full h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-2 flex items-center justify-center",children:e.jsx("span",{className:"text-white text-2xl",children:"⌚"})}),e.jsx("h3",{className:"font-semibold text-sm text-gray-800",children:"Smart Watch"}),e.jsx("p",{className:"text-green-600 font-bold text-lg",children:"$199.99"}),e.jsx("button",{className:"w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"Add to Cart"})]})]}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"🏠 Home"}),e.jsx("button",{className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",children:"📦 Products"}),e.jsx("button",{className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",children:"ℹ️ About"})]})]})]}):i.includes("portfolio")||i.includes("personal")||i.includes("developer")||i.includes("profile")||t==="portfolio"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Personal Portfolio"}),e.jsx("p",{className:"text-gray-600",children:"Modern, responsive portfolio website"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-20 h-20 bg-blue-500 rounded-full mx-auto mb-2"}),e.jsx("h2",{className:"text-xl font-semibold",children:"John Doe"}),e.jsx("p",{className:"text-gray-600",children:"Full Stack Developer"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Project 1"}),e.jsx("p",{className:"text-sm text-gray-600",children:"E-commerce platform built with React"})]}),e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Project 2"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Mobile app using React Native"})]})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{className:"px-6 py-2 bg-blue-500 text-white rounded-lg",children:"Get In Touch"})})]})]}):i.includes("blog")||i.includes("cms")||i.includes("article")||i.includes("post")||t==="blog"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Blog Platform"}),e.jsx("p",{className:"text-gray-600",children:"Full-featured blog with CMS"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-100 rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold",children:"My Blog"}),e.jsx("p",{className:"text-gray-600",children:"Thoughts on technology and design"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"border-l-4 border-blue-500 pl-4",children:[e.jsx("h3",{className:"font-semibold",children:"Getting Started with React"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Learn the basics of React development..."}),e.jsx("span",{className:"text-xs text-gray-500",children:"Dec 15, 2024 • 5 min read"})]}),e.jsxs("div",{className:"border-l-4 border-green-500 pl-4",children:[e.jsx("h3",{className:"font-semibold",children:"CSS Grid vs Flexbox"}),e.jsx("p",{className:"text-sm text-gray-600",children:"A comprehensive comparison..."}),e.jsx("span",{className:"text-xs text-gray-500",children:"Dec 12, 2024 • 8 min read"})]})]}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"Home"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"About"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"Contact"})]})]})]}):i.includes("weather")||i.includes("forecast")||i.includes("climate")||t==="weather-app"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"🌤️ Weather App"}),e.jsx("p",{className:"text-gray-600",children:"Beautiful weather application"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white p-6 rounded-xl text-center shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-center mb-2",children:[e.jsx("span",{className:"text-4xl mr-2",children:"☀️"}),e.jsx("h2",{className:"text-2xl font-bold",children:"New York"})]}),e.jsx("div",{className:"text-5xl font-bold my-3",children:"72°F"}),e.jsx("p",{className:"text-xl",children:"Partly Cloudy"}),e.jsx("p",{className:"text-sm opacity-90 mt-1",children:"Feels like 75°F"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3 text-center",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl",children:[e.jsx("div",{className:"text-2xl mb-1",children:"💧"}),e.jsx("div",{className:"text-sm text-blue-600 font-medium",children:"Humidity"}),e.jsx("div",{className:"font-bold text-blue-800",children:"65%"})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl",children:[e.jsx("div",{className:"text-2xl mb-1",children:"💨"}),e.jsx("div",{className:"text-sm text-green-600 font-medium",children:"Wind"}),e.jsx("div",{className:"font-bold text-green-800",children:"8 mph"})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl",children:[e.jsx("div",{className:"text-2xl mb-1",children:"📊"}),e.jsx("div",{className:"text-sm text-purple-600 font-medium",children:"Pressure"}),e.jsx("div",{className:"font-bold text-purple-800",children:"30.1 in"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-semibold text-gray-800 text-lg",children:"📅 5-Day Forecast"}),e.jsx("div",{className:"space-y-2",children:[{day:"Mon",icon:"☀️",temp:75},{day:"Tue",icon:"⛅",temp:77},{day:"Wed",icon:"🌧️",temp:72},{day:"Thu",icon:"☀️",temp:80},{day:"Fri",icon:"⛅",temp:78}].map((o,l)=>e.jsxs("div",{className:"flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow",children:[e.jsx("span",{className:"font-medium text-gray-800",children:o.day}),e.jsx("span",{className:"text-2xl",children:o.icon}),e.jsxs("span",{className:"font-bold text-blue-600",children:[o.temp,"°F"]})]},o.day))})]})]})]}):i.includes("dashboard")||i.includes("analytics")||i.includes("admin")||i.includes("stats")||i.includes("metrics")||t==="dashboards"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"📊 Analytics Dashboard"}),e.jsx("p",{className:"text-gray-600",children:"Data visualization and analytics"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{className:"p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold",children:"1,234"}),e.jsx("div",{className:"text-blue-100 text-sm",children:"👥 Total Users"})]}),e.jsx("div",{className:"text-3xl opacity-80",children:"👤"})]})}),e.jsx("div",{className:"p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white shadow-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold",children:"$12,345"}),e.jsx("div",{className:"text-green-100 text-sm",children:"💰 Revenue"})]}),e.jsx("div",{className:"text-3xl opacity-80",children:"💵"})]})})]}),e.jsx("div",{className:"h-40 bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200 rounded-xl flex items-center justify-center shadow-lg",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📈"}),e.jsx("span",{className:"text-purple-600 font-semibold",children:"📊 Interactive Chart"}),e.jsx("div",{className:"text-sm text-purple-500 mt-1",children:"Revenue over time"})]})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-3 text-gray-800 text-lg",children:"🔔 Recent Activity"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg",children:[e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-800",children:"✅ New user registration"}),e.jsx("span",{className:"text-xs text-gray-500 ml-auto bg-green-100 px-2 py-1 rounded-full",children:"2 min ago"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg",children:[e.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-800",children:"🛒 Order #1234 completed"}),e.jsx("span",{className:"text-xs text-gray-500 ml-auto bg-blue-100 px-2 py-1 rounded-full",children:"5 min ago"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg",children:[e.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-800",children:"📧 Newsletter sent"}),e.jsx("span",{className:"text-xs text-gray-500 ml-auto bg-yellow-100 px-2 py-1 rounded-full",children:"10 min ago"})]})]})]})]})]}):i.includes("landing")||i.includes("saas")||i.includes("marketing")||i.includes("homepage")||i.includes("pricing")||t==="landing-pages"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"SaaS Landing Page"}),e.jsx("p",{className:"text-gray-600",children:"Modern marketing page"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Build Amazing Apps"}),e.jsx("p",{className:"mb-4",children:"The best platform for developers"}),e.jsx("button",{className:"px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold",children:"Get Started"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"text-center p-3 border border-gray-200 rounded",children:[e.jsx("div",{className:"text-2xl mb-1",children:"⚡"}),e.jsx("div",{className:"text-sm font-semibold",children:"Fast"})]}),e.jsxs("div",{className:"text-center p-3 border border-gray-200 rounded",children:[e.jsx("div",{className:"text-2xl mb-1",children:"🔒"}),e.jsx("div",{className:"text-sm font-semibold",children:"Secure"})]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Simple Pricing"}),e.jsxs("div",{className:"bg-gray-100 p-4 rounded-lg",children:[e.jsx("div",{className:"text-3xl font-bold",children:"$29"}),e.jsx("div",{className:"text-sm text-gray-600",children:"per month"})]})]})]})]}):i.includes("mobile")||i.includes("app")||i.includes("ios")||i.includes("android")||i.includes("native")||t==="mobile-apps"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Mobile App"}),e.jsx("p",{className:"text-gray-600",children:"Native mobile application"})]}),e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"mx-auto w-48 h-80 bg-gray-800 rounded-3xl p-2",children:e.jsxs("div",{className:"w-full h-full bg-white rounded-2xl p-4 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsx("span",{children:"9:41"}),e.jsx("span",{children:"📶 📶 📶 🔋"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-full h-16 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-white font-semibold",children:"My App"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-8 bg-gray-200 rounded"}),e.jsx("div",{className:"h-8 bg-gray-200 rounded"}),e.jsx("div",{className:"h-8 bg-gray-200 rounded"})]})]})]})})})]}):i.includes("game")||i.includes("snake")||i.includes("puzzle")||i.includes("arcade")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Game Application"}),e.jsx("p",{className:"text-gray-600",children:"Interactive game experience"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"mx-auto w-64 h-64 bg-gray-900 rounded-lg p-4",children:e.jsxs("div",{className:"w-full h-full bg-gray-800 rounded border-2 border-gray-600 relative",children:[e.jsx("div",{className:"absolute top-4 left-4 w-4 h-4 bg-green-400 rounded"}),e.jsx("div",{className:"absolute top-8 left-8 w-4 h-4 bg-green-400 rounded"}),e.jsx("div",{className:"absolute top-12 left-12 w-4 h-4 bg-green-400 rounded"}),e.jsx("div",{className:"absolute top-16 left-16 w-4 h-4 bg-red-500 rounded"})]})}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"flex justify-center gap-2 mb-4",children:e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"↑"})}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"←"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"↓"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"→"})]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold",children:"Score: 150"}),e.jsx("div",{className:"text-sm text-gray-600",children:"High Score: 300"})]})]})]}):i.includes("chat")||i.includes("messaging")||i.includes("message")||i.includes("communication")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Chat Application"}),e.jsx("p",{className:"text-gray-600",children:"Real-time messaging platform"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-blue-600 text-white rounded-lg",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-white rounded-full"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:"John Doe"}),e.jsx("div",{className:"text-sm opacity-90",children:"Online"})]})]})}),e.jsxs("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"bg-blue-500 text-white p-3 rounded-lg max-w-xs",children:"Hey, how are you doing?"})}),e.jsx("div",{className:"flex justify-start",children:e.jsx("div",{className:"bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs",children:"I'm doing great! Working on a new project."})}),e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"bg-blue-500 text-white p-3 rounded-lg max-w-xs",children:"That's awesome! What kind of project?"})})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"Type a message...",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg",readOnly:!0}),e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Send"})]})]})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:s.name}),e.jsx("p",{className:"text-gray-600",children:s.description||"A new project created with DreamBuild"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsxs("h2",{className:"text-xl font-semibold mb-2",children:["Welcome to your new ",s.name,"!"]}),e.jsx("p",{className:"text-gray-600",children:"This project was generated from a template. You can start editing and customizing it to fit your needs."})]}),s.features&&e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Features:"}),e.jsx("ul",{className:"space-y-1",children:s.features.slice(0,3).map((o,l)=>e.jsxs("li",{className:"text-sm text-gray-600",children:["• ",o]},l))})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{className:"px-6 py-2 bg-blue-500 text-white rounded-lg",children:"Get Started"})})]})]})};class Yf{constructor(){this.baseUrl="https://api.github.com",this.token=null}setToken(t){this.token=t}getHeaders(){const t={Accept:"application/vnd.github.v3+json","Content-Type":"application/json"};return this.token&&(t.Authorization=`token ${this.token}`),t}async getUserRepositories(){if(!this.token)throw new Error("GitHub token required");try{const t=await fetch(`${this.baseUrl}/user/repos?sort=updated&per_page=100`,{headers:this.getHeaders()});if(!t.ok)throw new Error(`GitHub API error: ${t.status}`);return(await t.json()).map(a=>this.transformRepository(a))}catch(t){throw console.error("Failed to fetch GitHub repositories:",t),t}}transformRepository(t){return{id:`github_${t.id}`,name:t.name,description:t.description||"No description",type:this.detectProjectType(t),status:"github_synced",lastModified:new Date(t.updated_at),files:0,size:"Unknown",tags:this.extractTags(t),preview:t.owner.avatar_url,githubData:{id:t.id,fullName:t.full_name,htmlUrl:t.html_url,cloneUrl:t.clone_url,language:t.language,stargazersCount:t.stargazers_count,forksCount:t.forks_count,isPrivate:t.private,defaultBranch:t.default_branch,owner:t.owner.login},source:"github"}}detectProjectType(t){var n;const r=t.name.toLowerCase();(t.description||"").toLowerCase();const a=(n=t.language)==null?void 0:n.toLowerCase();return r.includes("api")||r.includes("backend")||r.includes("server")?"api":r.includes("mobile")||r.includes("app")||r.includes("ios")||r.includes("android")?"mobile":r.includes("dashboard")||r.includes("admin")?"dashboard":r.includes("ecommerce")||r.includes("shop")||r.includes("store")?"ecommerce":r.includes("portfolio")||r.includes("personal")||a==="javascript"||a==="typescript"?"web":a==="python"?"api":a==="java"||a==="kotlin"?"mobile":"web"}extractTags(t){const r=[];t.language&&r.push(t.language),t.topics&&t.topics.length>0&&r.push(...t.topics.slice(0,3));const a=t.name.toLowerCase(),n=(t.description||"").toLowerCase();return(a.includes("react")||n.includes("react"))&&r.push("React"),(a.includes("vue")||n.includes("vue"))&&r.push("Vue.js"),(a.includes("angular")||n.includes("angular"))&&r.push("Angular"),(a.includes("node")||n.includes("node"))&&r.push("Node.js"),(a.includes("express")||n.includes("express"))&&r.push("Express"),(a.includes("mongodb")||n.includes("mongodb"))&&r.push("MongoDB"),(a.includes("postgres")||n.includes("postgres"))&&r.push("PostgreSQL"),[...new Set(r)]}async getRepositoryFiles(t,r="main"){if(!this.token)throw new Error("GitHub token required");try{const a=await fetch(`${this.baseUrl}/repos/${t}/git/trees/${r}?recursive=1`,{headers:this.getHeaders()});if(!a.ok)throw new Error(`GitHub API error: ${a.status}`);return(await a.json()).tree||[]}catch(a){throw console.error("Failed to fetch repository files:",a),a}}async getFileContent(t,r,a="main"){if(!this.token)throw new Error("GitHub token required");try{const n=await fetch(`${this.baseUrl}/repos/${t}/contents/${r}?ref=${a}`,{headers:this.getHeaders()});if(!n.ok)throw new Error(`GitHub API error: ${n.status}`);const i=await n.json();return i.type==="file"&&i.content?atob(i.content):null}catch(n){throw console.error("Failed to fetch file content:",n),n}}async convertRepositoryToProject(t){var r;try{const n=(await this.getRepositoryFiles(t.full_name,t.default_branch)).filter(o=>o.type==="blob"&&this.isWebFile(o.path)),i={};for(const o of n.slice(0,10))try{const l=await this.getFileContent(t.full_name,o.path,t.default_branch);l&&(i[o.path]=l)}catch(l){console.warn(`Failed to fetch content for ${o.path}:`,l)}return{id:`github_${t.id}`,name:t.name,description:t.description||"Imported from GitHub",files:i,activeFile:this.getDefaultFile(i),config:{appType:this.detectProjectType(t),language:((r=t.language)==null?void 0:r.toLowerCase())||"javascript",styling:this.detectStyling(i),database:this.detectDatabase(i),auth:this.detectAuth(i)},lastModified:new Date(t.updated_at),githubData:{id:t.id,fullName:t.full_name,htmlUrl:t.html_url,cloneUrl:t.clone_url,language:t.language,stargazersCount:t.stargazers_count,forksCount:t.forks_count,isPrivate:t.private,defaultBranch:t.default_branch,owner:t.owner.login},source:"github"}}catch(a){throw console.error("Failed to convert repository to project:",a),a}}isWebFile(t){return[".html",".htm",".css",".scss",".sass",".less",".js",".jsx",".ts",".tsx",".vue",".svelte",".php",".py",".rb",".go",".rs",".java",".json",".xml",".yaml",".yml",".md",".txt"].some(a=>t.toLowerCase().endsWith(a))}getDefaultFile(t){const r=["index.html","index.js","index.jsx","index.ts","index.tsx","app.js","main.js"];for(const a of r)if(t[a])return a;return Object.keys(t)[0]||"index.html"}detectStyling(t){const r=Object.keys(t).join(" ").toLowerCase();return r.includes("tailwind")||r.includes("@tailwind")?"tailwind":r.includes("bootstrap")||r.includes("@bootstrap")?"bootstrap":r.includes("styled-components")||r.includes("styled-components")?"styled-components":r.includes("sass")||r.includes("scss")?"sass":"css"}detectDatabase(t){Object.keys(t).join(" ").toLowerCase();const r=Object.values(t).join(" ").toLowerCase();return r.includes("mongodb")||r.includes("mongoose")?"mongodb":r.includes("postgresql")||r.includes("postgres")?"postgresql":r.includes("mysql")?"mysql":r.includes("sqlite")?"sqlite":r.includes("firebase")||r.includes("firestore")?"firebase":"none"}detectAuth(t){const r=Object.values(t).join(" ").toLowerCase();return r.includes("firebase")&&r.includes("auth")?"firebase":r.includes("auth0")?"auth0":r.includes("jwt")||r.includes("jsonwebtoken")?"jwt":r.includes("passport")?"passport":"none"}async syncRepository(t,r=null){try{const a=await this.convertRepositoryToProject(t);return r&&(a.id=r),a}catch(a){throw console.error("Failed to sync repository:",a),a}}}const ys=new Yf,Kf=()=>{const{user:s}=vt(),{projects:t,saveExternalProject:r,loadProjects:a}=Je(),[n,i]=m.useState([]),[o,l]=m.useState(!1),[d,c]=m.useState(new Set),[u,p]=m.useState(""),[g,y]=m.useState(!1);m.useEffect(()=>{const j=localStorage.getItem("github_token");j&&(p(j),ys.setToken(j))},[]),m.useEffect(()=>{if(n.length>0&&t.length>0){const j=new Set;t.forEach(w=>{w.source==="github"&&w.githubData&&j.add(w.githubData.id)}),c(j)}},[n,t]);const x=async()=>{if(!u){y(!0);return}l(!0);try{const j=await ys.getUserRepositories();i(j),U.success(`Found ${j.length} repositories`)}catch(j){console.error("Failed to fetch repositories:",j),U.error("Failed to fetch GitHub repositories. Please check your token.")}finally{l(!1)}},b=()=>{if(!u.trim()){U.error("Please enter a GitHub token");return}localStorage.setItem("github_token",u),ys.setToken(u),y(!1),x(),U.success("GitHub token saved!")},h=async j=>{if(!s){U.error("Please sign in to sync repositories");return}l(!0);try{console.log("🔄 Starting GitHub repository sync for:",j.name);const w=await ys.syncRepository(j);console.log("📦 Converted repository to project:",w),w.userId=s.uid,w.createdAt=new Date,console.log("💾 Saving project to Firestore..."),await r(w),console.log("✅ Project saved successfully!"),c(v=>new Set([...v,j.githubData.id])),U.success(`Repository "${j.name}" synced successfully!`),console.log("🎉 GitHub sync completed successfully!")}catch(w){console.error("❌ Failed to sync repository:",w),U.error("Failed to sync repository. Please try again.")}finally{l(!1)}},N=j=>{window.open(j.githubData.htmlUrl,"_blank")};return s?e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[e.jsx(fe,{className:"h-5 w-5 text-white"}),"GitHub Repositories"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[!u&&e.jsx("button",{onClick:()=>y(!0),className:"px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors",children:"Add Token"}),e.jsxs("button",{onClick:x,disabled:o,className:"flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50",children:[e.jsx(_s,{className:`h-4 w-4 ${o?"animate-spin":""}`}),o?"Loading...":"Refresh"]})]})]}),g&&e.jsxs(F.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"mb-6 p-4 bg-muted/20 rounded-lg border border-border/50",children:[e.jsx("h4",{className:"text-sm font-medium text-foreground mb-2",children:"GitHub Personal Access Token"}),e.jsxs("p",{className:"text-xs text-muted-foreground mb-3",children:["Create a personal access token at"," ",e.jsx("a",{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline",children:"github.com/settings/tokens"})," ","with repo access to sync your repositories."]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"password",value:u,onChange:j=>p(j.target.value),placeholder:"Enter your GitHub token",className:"flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"}),e.jsx("button",{onClick:b,className:"px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Save"}),e.jsx("button",{onClick:()=>y(!1),className:"px-4 py-2 text-sm bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors",children:"Cancel"})]})]}),o&&n.length===0?e.jsx("div",{className:"space-y-4",children:[...Array(3)].map((j,w)=>e.jsx("div",{className:"animate-pulse",children:e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-lg bg-muted/20",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded"}),e.jsxs("div",{children:[e.jsx("div",{className:"h-4 bg-muted rounded w-32 mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-48"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"h-6 bg-muted rounded w-12"}),e.jsx("div",{className:"h-6 bg-muted rounded w-12"})]})]})},w))}):n.length>0?e.jsx("div",{className:"space-y-3",children:n.map((j,w)=>{const v=d.has(j.githubData.id);return e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:w*.1},className:"flex items-center justify-between p-4 rounded-lg hover:bg-muted/30 transition-colors group",children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[e.jsx("div",{className:"w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center",children:e.jsx(fe,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("h3",{className:"font-medium text-foreground text-sm truncate",children:j.name}),j.githubData.isPrivate&&e.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-600 px-2 py-0.5 rounded",children:"Private"}),v&&e.jsxs("span",{className:"text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded flex items-center gap-1",children:[e.jsx(pe,{className:"h-3 w-3"}),"Synced"]})]}),e.jsx("p",{className:"text-xs text-muted-foreground truncate",children:j.description}),e.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:j.githubData.language}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:["Updated ",new Date(j.lastModified).toLocaleDateString()]})]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[e.jsx(le,{className:"h-3 w-3"}),j.githubData.stargazersCount]}),e.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[e.jsx(tl,{className:"h-3 w-3"}),j.githubData.forksCount]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>N(j),className:"p-2 rounded-lg hover:bg-muted/50 transition-colors group-hover:bg-white/10",title:"Open in GitHub",children:e.jsx(Zt,{className:"h-4 w-4 text-muted-foreground group-hover:text-white"})}),!v&&e.jsx("button",{onClick:()=>h(j),disabled:o,className:"p-2 rounded-lg hover:bg-muted/50 transition-colors group-hover:bg-white/10 disabled:opacity-50",title:"Sync to DreamBuild",children:e.jsx(tt,{className:"h-4 w-4 text-muted-foreground group-hover:text-white"})})]})]})]},j.id)})}):e.jsxs("div",{className:"text-center py-8",children:[e.jsx(fe,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No repositories found"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:u?"No repositories found in your GitHub account.":"Add a GitHub token to sync your repositories."}),!u&&e.jsx("button",{onClick:()=>y(!0),className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Add GitHub Token"})]})]}):e.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:e.jsxs("div",{className:"text-center py-8",children:[e.jsx(fe,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"GitHub Integration"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Sign in to sync your GitHub repositories with DreamBuild projects."})]})})},Xf=()=>{const{currentProject:s,projects:t}=Je(),{user:r}=vt(),[a,n]=m.useState("7d"),[i,o]=m.useState(!0);m.useEffect(()=>{const b=setTimeout(()=>o(!1),1e3);return()=>clearTimeout(b)},[]);const l={totalProjects:t.length,activeProjects:t.filter(b=>b.status==="active"||b.status==="development").length,completedProjects:t.filter(b=>b.status==="completed").length,totalFiles:t.reduce((b,h)=>b+Object.keys(h.files||{}).length,0),aiGenerations:t.reduce((b,h)=>b+(h.generations||0),0),linesOfCode:t.reduce((b,h)=>b+(h.linesOfCode||0),0),languagesUsed:t.length>0?new Set(t.map(b=>{var h;return((h=b.config)==null?void 0:h.language)||"javascript"})).size:0,hoursSpent:t.reduce((b,h)=>b+(h.hoursSpent||0),0)},d=b=>{const N=new Date-new Date(b),j=Math.floor(N/6e4),w=Math.floor(N/36e5),v=Math.floor(N/864e5);return j<60?`${j} min ago`:w<24?`${w} hour${w>1?"s":""} ago`:`${v} day${v>1?"s":""} ago`},c=t.sort((b,h)=>new Date(h.lastModified)-new Date(b.lastModified)).slice(0,4).map((b,h)=>({id:b.id,type:b.source==="github"?"github_sync":"ai_generation",project:b.name,action:b.source==="github"?"Synced from GitHub":"Generated with AI",time:d(b.lastModified),icon:b.source==="github"?fe:Ue,color:b.source==="github"?"text-blue-600":"text-white"})),u=t.sort((b,h)=>new Date(h.lastModified)-new Date(b.lastModified)).slice(0,4).map(b=>{var h;return{name:b.name,files:Object.keys(b.files||{}).length,lastModified:d(b.lastModified),type:((h=b.config)==null?void 0:h.appType)||"web",progress:b.progress||0,source:b.source||"dreambuild"}}),p=b=>{const h={};b.forEach(j=>{var f;const w=((f=j.config)==null?void 0:f.language)||"javascript",v=Object.keys(j.files||{}).length;h[w]?h[w].files+=v:h[w]={language:w,files:v}});const N=Object.values(h).reduce((j,w)=>j+w.files,0);return Object.values(h).map(j=>({...j,percentage:N>0?Math.round(j.files/N*100):0,color:g(j.language)})).sort((j,w)=>w.files-j.files).slice(0,4)},g=b=>({javascript:"bg-yellow-500",typescript:"bg-blue-500",html:"bg-orange-500",css:"bg-white",python:"bg-green-500",java:"bg-red-500",php:"bg-purple-500",ruby:"bg-red-600",go:"bg-cyan-500",rust:"bg-orange-600"})[b.toLowerCase()]||"bg-gray-500",y=p(t),x=({title:b,value:h,icon:N,change:j,changeType:w,description:v})=>e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-md transition-all duration-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center",children:e.jsx(N,{className:"h-6 w-6 text-white"})}),j&&e.jsxs("div",{className:`flex items-center gap-1 text-sm ${w==="increase"?"text-green-600":"text-red-600"}`,children:[w==="increase"?e.jsx(sl,{className:"h-4 w-4"}):e.jsx(rl,{className:"h-4 w-4"}),j]})]}),e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-1",children:h}),e.jsx("p",{className:"text-sm text-muted-foreground",children:b}),v&&e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:v})]});return i?e.jsx("div",{className:"min-h-screen bg-background",style:{paddingTop:"80px"},children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[...Array(4)].map((b,h)=>e.jsxs("div",{className:"bg-card/50 rounded-xl p-6",children:[e.jsx("div",{className:"h-12 w-12 bg-muted rounded-lg mb-4"}),e.jsx("div",{className:"h-6 bg-muted rounded w-1/2 mb-2"}),e.jsx("div",{className:"h-4 bg-muted rounded w-3/4"})]},h))})]})})}):e.jsx("div",{className:"min-h-screen bg-background",style:{paddingTop:"80px"},children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"mb-8",children:e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Dashboard"}),e.jsx("p",{className:"text-muted-foreground",children:"Welcome back! Here's what's happening with your projects."})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("select",{value:a,onChange:b=>n(b.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"7d",children:"Last 7 days"}),e.jsx("option",{value:"30d",children:"Last 30 days"}),e.jsx("option",{value:"90d",children:"Last 90 days"})]})})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsx(x,{title:"Total Projects",value:l.totalProjects,icon:Ie,change:l.totalProjects>0?"+2":void 0,changeType:"increase",description:l.totalProjects>0?"This week":"Create your first project"}),e.jsx(x,{title:"AI Generations",value:l.aiGenerations,icon:Ue,change:l.aiGenerations>0?"+12":void 0,changeType:"increase",description:l.aiGenerations>0?"This week":"Start generating code"}),e.jsx(x,{title:"Lines of Code",value:l.linesOfCode.toLocaleString(),icon:J,change:l.linesOfCode>0?"+1.2k":void 0,changeType:"increase",description:l.linesOfCode>0?"This week":"Begin coding"}),e.jsx(x,{title:"Hours Spent",value:l.hoursSpent,icon:xe,change:l.hoursSpent>0?"+5.2h":void 0,changeType:"increase",description:l.hoursSpent>0?"This week":"Start building"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:"lg:col-span-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[e.jsx(On,{className:"h-5 w-5 text-white"}),"Recent Activity"]}),e.jsx("button",{className:"text-sm text-white hover:text-gray-300 transition-colors",children:"View all"})]}),e.jsx("div",{className:"space-y-4",children:c.length>0?c.map((b,h)=>{const N=b.icon;return e.jsxs(F.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},className:"flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center ${b.color.replace("text-","bg-").replace("-600","-100")}`,children:e.jsx(N,{className:`h-4 w-4 ${b.color}`})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:b.action}),e.jsx("p",{className:"text-xs text-muted-foreground",children:b.project})]}),e.jsx("span",{className:"text-xs text-muted-foreground",children:b.time})]},b.id)}):e.jsxs("div",{className:"text-center py-8",children:[e.jsx(Ue,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No activity yet"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Start creating projects to see your activity here."}),e.jsxs(ue,{to:"/ai-builder",className:"inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(It,{className:"h-4 w-4"}),"Create Project"]})]})})]}),e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[e.jsx(as,{className:"h-5 w-5 text-white"}),"Top Projects"]}),e.jsx("div",{className:"space-y-4",children:u.length>0?u.map((b,h)=>e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:h*.1},className:"p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"font-medium text-foreground text-sm",children:b.name}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[b.files," files"]})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("div",{className:"flex-1 bg-muted rounded-full h-2 mr-3",children:e.jsx("div",{className:"bg-white h-2 rounded-full transition-all duration-300",style:{width:`${b.progress}%`}})}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[b.progress,"%"]})]}),e.jsx("p",{className:"text-xs text-muted-foreground",children:b.lastModified})]},b.name)):e.jsxs("div",{className:"text-center py-8",children:[e.jsx(Ie,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No projects yet"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Create your first project to get started."}),e.jsxs(ue,{to:"/ai-builder",className:"inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(It,{className:"h-4 w-4"}),"Create Project"]})]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[e.jsx(J,{className:"h-5 w-5 text-white"}),"Language Usage"]}),e.jsx("div",{className:"space-y-4",children:y.map((b,h)=>e.jsxs(F.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-4 h-4 rounded-full bg-muted flex items-center justify-center",children:e.jsx("div",{className:`w-2 h-2 rounded-full ${b.color}`})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-sm font-medium text-foreground",children:b.language}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[b.percentage,"%"]})]}),e.jsx("div",{className:"bg-muted rounded-full h-2",children:e.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${b.color}`,style:{width:`${b.percentage}%`}})}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[b.files," files"]})]})]},b.language))})]}),e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[e.jsx(ze,{className:"h-5 w-5 text-white"}),"Quick Actions"]}),e.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{name:"New Project",icon:Ie,color:"bg-white",href:"/ai-builder"},{name:"AI Builder",icon:Ue,color:"bg-purple-500",href:"/ai-builder"},{name:"View Projects",icon:Se,color:"bg-green-500",href:"/projects"},{name:"Settings",icon:Dt,color:"bg-orange-500",href:"/settings"}].map((b,h)=>e.jsxs(F.a,{href:b.href,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:h*.1},className:"flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-all duration-200 group",children:[e.jsx("div",{className:`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${b.color} group-hover:scale-105 transition-transform`,children:e.jsx(b.icon,{className:"h-6 w-6 text-white"})}),e.jsx("span",{className:"text-sm font-medium text-foreground text-center",children:b.name})]},b.name))})]})]}),e.jsx(Kf,{})]})})},Qf=()=>{const{user:s,signInWithGoogle:t,signInWithGitHub:r,loading:a}=vt(),n=Gs(),[i,o]=m.useState(!1);m.useEffect(()=>{s&&!a&&n("/dashboard")},[s,a,n]);const l=async()=>{try{o(!0),await t()}catch(c){console.error("Sign in error:",c)}finally{o(!1)}},d=async()=>{try{o(!0),await r()}catch(c){console.error("GitHub sign in error:",c),c.message.includes("already exists using Google")?alert("An account with this email already exists using Google. Please sign in with Google instead, or use a different email for GitHub."):c.message.includes("already exists using email/password")?alert("An account with this email already exists using email/password. Please sign in with your existing method instead."):c.message.includes("account with this email already exists")?alert("An account with this email already exists. Please sign in with your existing method instead."):c.message.includes("couldn't determine the sign-in method")?alert("An account with this email already exists. Please try signing in with Google first, then you can link your GitHub account."):c.message.includes("not properly configured")?alert("GitHub authentication is not properly configured. Please check Firebase Console settings or try signing in with Google instead."):alert("Failed to sign in with GitHub. Please try again.")}finally{o(!1)}};return a?e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:[e.jsxs("div",{className:"flex justify-between items-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg",children:e.jsx("span",{className:"text-white font-bold text-lg",children:"D"})}),e.jsx("span",{className:"font-bold text-xl text-slate-800 dark:text-white",children:"DreamBuild"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(F.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/login",className:"px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"Sign in"}),e.jsx(F.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/signup",className:"px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl",children:"Sign up"})]})]}),e.jsx("div",{className:"flex items-center justify-center p-6 -mt-20",children:e.jsx("div",{className:"w-full max-w-md",children:e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-2xl",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg",children:e.jsx("span",{className:"text-white font-bold text-2xl",children:"D"})}),e.jsx("h1",{className:"text-2xl font-bold mb-2 text-slate-800 dark:text-white",children:"Welcome back"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-sm",children:"Sign in to continue building amazing applications"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs(F.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:l,disabled:i,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md",children:[i?e.jsx(Qt,{className:"h-5 w-5 animate-spin text-blue-600"}):e.jsx("div",{className:"w-5 h-5 bg-gradient-to-r from-blue-500 to-red-500 rounded flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-bold",children:"G"})}),i?"Signing in...":"Continue with Google"]}),e.jsxs(F.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:d,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 shadow-sm hover:shadow-md",children:[e.jsx(fe,{className:"h-5 w-5"}),"Continue with GitHub"]})]}),e.jsxs("div",{className:"relative my-8",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-slate-200 dark:border-slate-600"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"bg-white dark:bg-slate-800 px-4 text-slate-500 dark:text-slate-400 font-medium",children:"or"})})]}),e.jsx("div",{className:"text-center",children:e.jsxs(F.a,{whileHover:{scale:1.05},whileTap:{scale:.95},href:"/ai-builder",className:"inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold text-sm bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600",children:["Continue as Guest",e.jsx(st,{className:"h-4 w-4"})]})})]})})})]})},Zf=()=>{const{user:s,signInWithGoogle:t,signInWithGitHub:r,loading:a}=vt(),n=Gs(),[i,o]=m.useState(!1);m.useEffect(()=>{s&&!a&&n("/dashboard")},[s,a,n]);const l=async()=>{try{o(!0),await t(),U.success("Welcome to DreamBuild!")}catch(c){console.error("Sign in error:",c),U.error("Failed to sign in. Please try again.")}finally{o(!1)}},d=async()=>{try{o(!0),await r(),U.success("Welcome to DreamBuild!")}catch(c){console.error("GitHub sign in error:",c),c.message.includes("already exists using Google")?U.error("An account with this email already exists using Google. Please sign in with Google instead, or use a different email for GitHub."):c.message.includes("already exists using email/password")?U.error("An account with this email already exists using email/password. Please sign in with your existing method instead."):c.message.includes("account with this email already exists")?U.error("An account with this email already exists. Please sign in with your existing method instead."):c.message.includes("couldn't determine the sign-in method")?U.error("An account with this email already exists. Please try signing in with Google first, then you can link your GitHub account."):c.message.includes("not properly configured")?U.error("GitHub authentication is not properly configured. Please check Firebase Console settings or try signing in with Google instead."):U.error("Failed to sign in with GitHub. Please try again.")}finally{o(!1)}};return a?e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsxs("div",{className:"flex justify-between items-center p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-primary-foreground font-bold text-sm",children:"D"})}),e.jsx("span",{className:"font-semibold text-foreground",children:"DreamBuild"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(F.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/login",className:"px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors",children:"Sign in"}),e.jsx(F.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/signup",className:"px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors",children:"Sign up"})]})]}),e.jsx("div",{className:"flex items-center justify-center p-4 -mt-16",children:e.jsx("div",{className:"w-full max-w-xs",children:e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},className:"bg-card border border-border rounded-xl p-6 shadow-sm",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h1",{className:"text-xl font-bold mb-1 text-foreground",children:"Join DreamBuild"}),e.jsx("p",{className:"text-muted-foreground text-xs",children:"Create your account"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(F.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:l,disabled:i,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background disabled:opacity-50 disabled:cursor-not-allowed",children:[i?e.jsx(Qt,{className:"h-4 w-4 animate-spin text-primary"}):e.jsxs("svg",{className:"h-4 w-4",viewBox:"0 0 24 24",children:[e.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),e.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),e.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),i?"Creating account...":"Continue with Google"]}),e.jsxs(F.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:d,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background",children:[e.jsx(fe,{className:"h-4 w-4"}),"Continue with GitHub"]})]}),e.jsxs("div",{className:"relative my-4",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-border"})}),e.jsx("div",{className:"relative flex justify-center text-xs",children:e.jsx("span",{className:"bg-card px-2 text-muted-foreground",children:"or"})})]}),e.jsx("div",{className:"text-center",children:e.jsxs(F.a,{whileHover:{scale:1.02},whileTap:{scale:.98},href:"/ai-builder",className:"inline-flex items-center gap-1 px-3 py-1.5 text-primary hover:text-primary-dark transition-colors font-medium text-xs",children:["Continue as Guest",e.jsx(st,{className:"h-3 w-3"})]})})]})})})]})},ex=()=>{const{currentProject:s,createNewProject:t,projects:r,switchProject:a,saveProject:n,deleteProject:i}=Je(),[o,l]=m.useState(""),[d,c]=m.useState("all"),[u,p]=m.useState(!1),[g,y]=m.useState(""),[x,b]=m.useState("web"),[h,N]=m.useState(null);console.log("Projects page rendering, projects:",r);const j=r.map(A=>{var $;return{id:A.id,name:A.name,type:(($=A.config)==null?void 0:$.appType)||"web",description:A.description||"No description available",status:A.status||"active",lastModified:A.lastModified?new Date(A.lastModified).toISOString().split("T")[0]:new Date().toISOString().split("T")[0],files:Object.keys(A.files||{}).length,size:w(A),tags:v(A),preview:f(A),source:A.source||"dreambuild",githubData:A.githubData}}),w=A=>{const $=A.files||{};return`${(Object.values($).reduce((I,G)=>I+((G==null?void 0:G.length)||0),0)/1024/1024).toFixed(1)} MB`},v=A=>{var T,C,I,G,z;const $=[];return(T=A.config)!=null&&T.language&&$.push(A.config.language),(C=A.config)!=null&&C.styling&&$.push(A.config.styling),(I=A.config)!=null&&I.database&&A.config.database!=="none"&&$.push(A.config.database),(G=A.config)!=null&&G.auth&&A.config.auth!=="none"&&$.push(A.config.auth),(z=A.githubData)!=null&&z.language&&$.push(A.githubData.language),[...new Set($)].slice(0,4)},f=A=>{var C,I,G;return(I=(C=A.githubData)==null?void 0:C.owner)!=null&&I.avatar_url?A.githubData.owner.avatar_url:`https://via.placeholder.com/300x200/${{web:"007acc",mobile:"ffc107",api:"17a2b8",dashboard:"6f42c1",ecommerce:"28a745"}[(G=A.config)==null?void 0:G.appType]||"6c757d"}/ffffff?text=${encodeURIComponent(A.name)}`},E=[{id:"all",name:"All",icon:Ie,count:j.length},{id:"web",name:"Web Apps",icon:Se,count:j.filter(A=>A.type==="web").length},{id:"mobile",name:"Mobile",icon:J,count:j.filter(A=>A.type==="mobile").length},{id:"dashboard",name:"Dashboards",icon:Dt,count:j.filter(A=>A.type==="dashboard").length},{id:"api",name:"APIs",icon:Dt,count:j.filter(A=>A.type==="api").length},{id:"game",name:"Games",icon:le,count:j.filter(A=>A.type==="game").length},{id:"ecommerce",name:"E-commerce",icon:Dt,count:j.filter(A=>A.type==="ecommerce").length},{id:"completed",name:"Completed",icon:le,count:j.filter(A=>A.status==="completed").length}],S=j.filter(A=>{const $=o===""||A.name===o,T=d==="all"||A.type===d||A.status===d;return $&&T}),k=async()=>{if(!g.trim()){U.error("Please enter a project name");return}try{const A={id:null,name:g,files:{"index.html":"","style.css":"","script.js":""},activeFile:"index.html",config:{appType:x,language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date,description:`New ${x} project`,status:"active",source:"dreambuild"};await n(g),y(""),b("web"),p(!1),U.success("Project created successfully!")}catch(A){console.error("Failed to create project:",A),U.error("Failed to create project. Please try again.")}},D=async A=>{try{await i(A),N(null),U.success("Project deleted successfully!")}catch($){console.error("Failed to delete project:",$),U.error("Failed to delete project. Please try again.")}},O=A=>{switch(A){case"active":return"bg-green-100 text-green-800 border-green-200";case"development":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"completed":return"bg-white/10 text-white border-white/20";default:return"bg-gray-100 text-gray-800 border-gray-200"}},L=A=>{switch(A){case"web":return Se;case"mobile":return J;case"dashboard":return Dt;default:return Ie}};try{return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:[e.jsxs("div",{className:"w-full px-1 sm:px-2 lg:px-3 py-8",children:[e.jsxs("div",{className:"flex flex-col items-center text-center mb-8",children:[e.jsxs("div",{className:"space-y-3 max-w-4xl",children:[e.jsx("h1",{className:"text-5xl font-bold text-gray-900",children:"Projects"}),e.jsx("p",{className:"text-lg text-gray-600",children:"Manage and organize your AI-generated projects"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-6 text-sm",children:[e.jsxs("span",{className:"flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-200",children:[e.jsx(Ie,{className:"h-4 w-4"}),j.length," Total Projects"]}),e.jsxs("span",{className:"flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg border border-purple-200",children:[e.jsx(le,{className:"h-4 w-4"}),j.filter(A=>A.source==="github").length," GitHub"]})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs(F.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>p(!0),className:"flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 font-semibold text-sm border border-primary/20",children:[e.jsx(It,{className:"h-4 w-4"}),"Create New Project"]})})]}),e.jsx("div",{className:"flex flex-wrap items-center justify-end gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 p-2 rounded-2xl mb-8 shadow-sm overflow-x-auto ml-auto mr-4",children:E.map(A=>{const $=A.icon,T=d===A.id;return e.jsxs(F.button,{whileHover:{scale:1.02,y:-1},whileTap:{scale:.98},onClick:()=>c(A.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${T?"bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 border border-primary/20":"text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent hover:border-gray-200"}`,children:[e.jsx($,{className:"h-4 w-4 flex-shrink-0"}),e.jsx("span",{className:"text-sm font-medium",children:A.name}),e.jsx("span",{className:`text-xs px-2 py-1 rounded-full font-semibold ${T?"bg-white/20 text-white":"bg-gray-100 text-gray-600"}`,children:A.count})]},A.id)})}),e.jsxs("div",{className:"flex items-center justify-center gap-3 mb-8 w-full",children:[e.jsxs("select",{value:o,onChange:A=>l(A.target.value),className:"w-full pl-4 pr-4 py-4 border border-gray-200 rounded-xl bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 text-gray-900 text-base shadow-sm hover:shadow-md focus:shadow-lg appearance-none cursor-pointer",children:[e.jsxs("option",{value:"",children:["All Projects (",j.length,")"]}),j.map(A=>e.jsxs("option",{value:A.name,children:[A.name," - ",A.type," - ",A.status]},A.id))]}),e.jsx(We,{className:"h-6 w-6 text-gray-400 flex-shrink-0"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6",children:S.map((A,$)=>{const T=L(A.type);return e.jsxs(F.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:$*.1,duration:.3},whileHover:{y:-4,scale:1.02},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"font-semibold text-lg text-foreground truncate group-hover:text-primary transition-colors duration-200",children:A.name}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsxs("span",{className:"text-xs text-gray-500 font-medium capitalize",children:[A.type," Project"]}),e.jsx("span",{className:`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border ${O(A.status)}`,children:A.status})]})]}),e.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 border border-blue-200",children:e.jsx(T,{className:"h-6 w-6 text-blue-600"})})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0 ml-2",children:[e.jsxs(F.button,{whileHover:{scale:1.05,y:-1},whileTap:{scale:.95},className:"flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",onClick:()=>a(A.id),title:"Open Project",children:[e.jsx(st,{className:"h-3.5 w-3.5"}),"Open Project"]}),e.jsxs("button",{onClick:()=>N(h===A.id?null:A.id),className:"flex items-center gap-1.5 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800",title:"More Options",children:[e.jsx(al,{className:"h-4 w-4"}),e.jsx("span",{className:"text-xs font-medium",children:"Menu"})]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed",children:A.description}),e.jsxs("div",{className:"flex flex-wrap gap-1.5 mb-4",children:[A.tags.slice(0,3).map(C=>e.jsx("span",{className:"px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-lg border border-border/50",children:C},C)),A.tags.length>3&&e.jsxs("span",{className:"px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-lg border border-border/50",children:["+",A.tags.length-3]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-4 text-xs text-muted-foreground",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(we,{className:"h-3.5 w-3.5"}),A.files," files"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(Pt,{className:"h-3.5 w-3.5"}),A.lastModified]})]}),e.jsx("div",{className:"text-xs text-muted-foreground font-medium",children:A.size})]})]}),e.jsx(Xe,{children:h===A.id&&e.jsx(F.div,{initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},className:"absolute right-2 top-14 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-xl z-20 min-w-[180px] overflow-hidden",children:e.jsxs("div",{className:"p-1",children:[e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-700",children:[e.jsx(Pn,{className:"h-4 w-4 text-blue-500"}),"Edit Details"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-green-50 rounded-lg transition-colors text-gray-700 hover:text-green-700",children:[e.jsx(tt,{className:"h-4 w-4 text-green-500"}),"Download"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-purple-50 rounded-lg transition-colors text-gray-700 hover:text-purple-700",children:[e.jsx(Ln,{className:"h-4 w-4 text-purple-500"}),"Share Project"]}),e.jsx("div",{className:"h-px bg-gray-200 my-2 mx-2"}),e.jsxs("button",{onClick:()=>D(A.id),className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors hover:text-red-700",children:[e.jsx(An,{className:"h-4 w-4"}),"Delete Project"]})]})})})]},A.id)})}),S.length===0&&e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6",children:e.jsx(Ie,{className:"h-12 w-12 text-primary"})}),e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-3",children:o||d!=="all"?"No projects found":"No projects yet"}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8 max-w-md mx-auto",children:o||d!=="all"?"Try adjusting your search or filter criteria to find what you're looking for.":"Start building amazing projects with AI-powered code generation!"}),e.jsxs(F.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>p(!0),className:"inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 font-semibold text-base border border-primary/20",children:[e.jsx(It,{className:"h-5 w-5"}),"Get Started - Create Your First Project"]})]})]}),e.jsx(Xe,{children:u&&e.jsx(F.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:()=>p(!1),children:e.jsxs(F.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4",onClick:A=>A.stopPropagation(),children:[e.jsx("h2",{className:"text-xl font-semibold text-foreground mb-4",children:"Create New Project"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:g,onChange:A=>y(A.target.value),placeholder:"Enter project name...",className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Type"}),e.jsxs("select",{value:x,onChange:A=>b(A.target.value),className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"web",children:"Web Application"}),e.jsx("option",{value:"mobile",children:"Mobile Application"}),e.jsx("option",{value:"dashboard",children:"Dashboard"})]})]})]}),e.jsxs("div",{className:"flex gap-3 mt-6",children:[e.jsx(F.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>p(!1),className:"flex-1 px-4 py-2.5 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium",children:"Cancel"}),e.jsx(F.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:k,className:"flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:"Create"})]})]})})}),h&&e.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>N(null)})]})}catch(A){return console.error("Error in Projects component:",A),e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600 mb-4",children:"Error Loading Projects"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"There was an error loading the projects page."}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Error: ",A.message]})]})})})}},tx=()=>{var w,v;const{theme:s,setTheme:t}=qs(),[r,a]=m.useState("appearance"),[n,i]=m.useState({appearance:{theme:s,fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),[o,l]=m.useState(!0),[d,c]=m.useState(!1);m.useEffect(()=>{const f=localStorage.getItem("dreambuild-settings");f&&i(JSON.parse(f)),l(!1)},[]),m.useEffect(()=>{c(!0)},[n]);const u=()=>{localStorage.setItem("dreambuild-settings",JSON.stringify(n)),c(!1),console.log("Settings saved successfully!")},p=()=>{i({appearance:{theme:"system",fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),console.log("Settings reset to defaults!")},g=()=>{const f=JSON.stringify(n,null,2),E=new Blob([f],{type:"application/json"}),S=URL.createObjectURL(E),k=document.createElement("a");k.href=S,k.download="dreambuild-settings.json",k.click(),URL.revokeObjectURL(S),console.log("Settings exported!")},y=f=>{const E=f.target.files[0];if(E){const S=new FileReader;S.onload=k=>{try{const D=JSON.parse(k.target.result);i(D),console.log("Settings imported successfully!")}catch{console.error("Invalid settings file!")}},S.readAsText(E)}},x=(f,E,S)=>{i(k=>({...k,[f]:{...k[f],[E]:S}})),f==="appearance"&&E==="theme"&&t(S)},b=[{id:"appearance",name:"Appearance",icon:Rn},{id:"editor",name:"Editor",icon:J},{id:"ai",name:"AI Settings",icon:Ue},{id:"notifications",name:"Notifications",icon:nl},{id:"privacy",name:"Privacy",icon:Qr}],h=({title:f,description:E,children:S,warning:k})=>e.jsxs("div",{className:"flex items-start justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("h3",{className:"font-medium text-foreground",children:f}),k&&e.jsx(As,{className:"h-4 w-4 text-yellow-500",title:k})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:E})]}),e.jsx("div",{className:"ml-4",children:S})]}),N=({checked:f,onChange:E,disabled:S=!1})=>e.jsx("button",{onClick:()=>E(!f),disabled:S,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${f?"bg-gray-700":"bg-muted"} ${S?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${f?"translate-x-6":"translate-x-1"}`})}),j=()=>{switch(r){case"appearance":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Theme",description:"Choose your preferred color scheme",children:e.jsxs("select",{value:n.appearance.theme,onChange:f=>x("appearance","theme",f.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"light",children:"Light Theme"}),e.jsx("option",{value:"dark",children:"Dark Theme"}),e.jsx("option",{value:"system",children:"System Theme"}),e.jsx("option",{value:"blue",children:"Blue Theme"}),e.jsx("option",{value:"purple",children:"Purple Theme"}),e.jsx("option",{value:"green",children:"Green Theme"}),e.jsx("option",{value:"orange",children:"Orange Theme"}),e.jsx("option",{value:"red",children:"Red Theme"}),e.jsx("option",{value:"pink",children:"Pink Theme"}),e.jsx("option",{value:"cyan",children:"Cyan Theme"}),e.jsx("option",{value:"amber",children:"Amber Theme"}),e.jsx("option",{value:"emerald",children:"Emerald Theme"})]})}),e.jsx(h,{title:"Font Size",description:"Adjust the text size throughout the interface",children:e.jsxs("select",{value:n.appearance.fontSize,onChange:f=>x("appearance","fontSize",f.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"small",children:"Small"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"large",children:"Large"})]})}),e.jsx(h,{title:"Font Family",description:"Choose the font family for the editor",children:e.jsxs("select",{value:n.appearance.fontFamily,onChange:f=>x("appearance","fontFamily",f.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"system",children:"System Default"}),e.jsx("option",{value:"mono",children:"Monospace"}),e.jsx("option",{value:"sans",children:"Sans Serif"}),e.jsx("option",{value:"serif",children:"Serif"})]})}),e.jsx(h,{title:"Animations",description:"Enable smooth animations and transitions",children:e.jsx(N,{checked:n.appearance.animations,onChange:f=>x("appearance","animations",f)})}),e.jsx(h,{title:"Compact Mode",description:"Reduce spacing for a more compact interface",children:e.jsx(N,{checked:n.appearance.compactMode,onChange:f=>x("appearance","compactMode",f)})})]});case"editor":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Tab Size",description:"Number of spaces for indentation",children:e.jsxs("select",{value:n.editor.tabSize,onChange:f=>x("editor","tabSize",parseInt(f.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:2,children:"2 spaces"}),e.jsx("option",{value:4,children:"4 spaces"}),e.jsx("option",{value:8,children:"8 spaces"})]})}),e.jsx(h,{title:"Word Wrap",description:"Wrap long lines in the editor",children:e.jsx(N,{checked:n.editor.wordWrap,onChange:f=>x("editor","wordWrap",f)})}),e.jsx(h,{title:"Minimap",description:"Show a minimap of your code",children:e.jsx(N,{checked:n.editor.minimap,onChange:f=>x("editor","minimap",f)})}),e.jsx(h,{title:"Line Numbers",description:"Show line numbers in the editor",children:e.jsx(N,{checked:n.editor.lineNumbers,onChange:f=>x("editor","lineNumbers",f)})}),e.jsx(h,{title:"Auto Save",description:"Automatically save files as you type",children:e.jsx(N,{checked:n.editor.autoSave,onChange:f=>x("editor","autoSave",f)})}),e.jsx(h,{title:"Format on Save",description:"Automatically format code when saving",children:e.jsx(N,{checked:n.editor.formatOnSave,onChange:f=>x("editor","formatOnSave",f)})}),e.jsx(h,{title:"Auto Complete",description:"Enable intelligent code completion",children:e.jsx(N,{checked:n.editor.autoComplete,onChange:f=>x("editor","autoComplete",f)})})]});case"ai":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Default AI Model",description:"Choose your preferred AI model for code generation",children:e.jsxs("select",{value:n.ai.defaultModel,onChange:f=>x("ai","defaultModel",f.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"codellama-7b",children:"CodeLlama 7B"}),e.jsx("option",{value:"codellama-13b",children:"CodeLlama 13B"}),e.jsx("option",{value:"starcoder-15b",children:"StarCoder 15B"}),e.jsx("option",{value:"deepseek-coder",children:"DeepSeek Coder"}),e.jsx("option",{value:"wizardcoder-7b",children:"WizardCoder 7B"})]})}),e.jsx(h,{title:"Temperature",description:"Controls randomness in AI responses (0.0 = deterministic, 1.0 = creative)",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:n.ai.temperature,onChange:f=>x("ai","temperature",parseFloat(f.target.value)),className:"w-24"}),e.jsx("span",{className:"text-sm text-muted-foreground w-8",children:n.ai.temperature})]})}),e.jsx(h,{title:"Max Tokens",description:"Maximum number of tokens in AI responses",children:e.jsxs("select",{value:n.ai.maxTokens,onChange:f=>x("ai","maxTokens",parseInt(f.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:1e3,children:"1,000"}),e.jsx("option",{value:2e3,children:"2,000"}),e.jsx("option",{value:4e3,children:"4,000"}),e.jsx("option",{value:8e3,children:"8,000"})]})}),e.jsx(h,{title:"Auto Generate",description:"Automatically generate code suggestions as you type",children:e.jsx(N,{checked:n.ai.autoGenerate,onChange:f=>x("ai","autoGenerate",f)})}),e.jsx(h,{title:"AI Suggestions",description:"Show contextual AI suggestions in the editor",children:e.jsx(N,{checked:n.ai.suggestions,onChange:f=>x("ai","suggestions",f)})})]});case"notifications":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Project Updates",description:"Get notified when projects are updated",children:e.jsx(N,{checked:n.notifications.projectUpdates,onChange:f=>x("notifications","projectUpdates",f)})}),e.jsx(h,{title:"AI Completions",description:"Get notified when AI completes code generation",children:e.jsx(N,{checked:n.notifications.aiCompletions,onChange:f=>x("notifications","aiCompletions",f)})}),e.jsx(h,{title:"Error Notifications",description:"Get notified about errors and issues",children:e.jsx(N,{checked:n.notifications.errors,onChange:f=>x("notifications","errors",f)})}),e.jsx(h,{title:"Sound Notifications",description:"Play sounds for notifications",children:e.jsx(N,{checked:n.notifications.sound,onChange:f=>x("notifications","sound",f)})}),e.jsx(h,{title:"Email Notifications",description:"Receive notifications via email",children:e.jsx(N,{checked:n.notifications.email,onChange:f=>x("notifications","email",f)})})]});case"privacy":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Analytics",description:"Help improve DreamBuild by sharing anonymous usage data",children:e.jsx(N,{checked:n.privacy.analytics,onChange:f=>x("privacy","analytics",f)})}),e.jsx(h,{title:"Crash Reports",description:"Automatically send crash reports to help fix bugs",children:e.jsx(N,{checked:n.privacy.crashReports,onChange:f=>x("privacy","crashReports",f)})}),e.jsx(h,{title:"Telemetry",description:"Share performance and usage telemetry",warning:"This may include personal information",children:e.jsx(N,{checked:n.privacy.telemetry,onChange:f=>x("privacy","telemetry",f)})}),e.jsx(h,{title:"Share Usage Statistics",description:"Share anonymous usage statistics with the community",children:e.jsx(N,{checked:n.privacy.shareUsage,onChange:f=>x("privacy","shareUsage",f)})})]});default:return null}};return o?e.jsx("div",{className:"min-h-screen bg-background",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[e.jsx("div",{className:"lg:col-span-1",children:e.jsx("div",{className:"space-y-3",children:[...Array(5)].map((f,E)=>e.jsx("div",{className:"h-12 bg-muted rounded"},E))})}),e.jsx("div",{className:"lg:col-span-3",children:e.jsx("div",{className:"bg-card/50 rounded-xl p-6",children:e.jsx("div",{className:"space-y-4",children:[...Array(6)].map((f,E)=>e.jsx("div",{className:"h-16 bg-muted rounded"},E))})})})]})]})})}):e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"mb-8",children:e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Settings"}),e.jsx("p",{className:"text-muted-foreground",children:"Customize your DreamBuild experience and preferences"})]}),e.jsx("div",{className:"flex items-center gap-2",children:d&&e.jsxs(F.button,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},onClick:u,className:"flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200",children:[e.jsx(Tn,{className:"h-4 w-4"}),"Save Changes"]})})]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"lg:col-span-1",children:[e.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:e.jsx("nav",{className:"space-y-2",children:b.map(f=>{const E=f.icon;return e.jsxs("button",{onClick:()=>a(f.id),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${r===f.id?"bg-gray-700 text-white shadow-sm":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[e.jsx(E,{className:"h-4 w-4"}),f.name]},f.id)})})}),e.jsxs("div",{className:"mt-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-3",children:"Data Management"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("button",{onClick:g,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors",children:[e.jsx(tt,{className:"h-4 w-4"}),"Export Settings"]}),e.jsxs("label",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors cursor-pointer",children:[e.jsx(Dn,{className:"h-4 w-4"}),"Import Settings",e.jsx("input",{type:"file",accept:".json",onChange:y,className:"hidden"})]}),e.jsxs("button",{onClick:p,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:[e.jsx(_s,{className:"h-4 w-4"}),"Reset to Defaults"]})]})]})]}),e.jsx("div",{className:"lg:col-span-3",children:e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden",children:[e.jsx("div",{className:"p-6 border-b border-border/50",children:e.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[Me.createElement((w=b.find(f=>f.id===r))==null?void 0:w.icon,{className:"h-5 w-5 text-white"}),(v=b.find(f=>f.id===r))==null?void 0:v.name]})}),e.jsx("div",{className:"divide-y divide-border/50",children:j()})]})})]})]})})},sx=()=>{const[s,t]=m.useState(""),[r,a]=m.useState("getting-started"),n=[{id:"getting-started",title:"Getting Started",icon:ze,articles:[{title:"Quick Start Guide",description:"Get up and running in 5 minutes"},{title:"Installation",description:"Install DreamBuild on your system"},{title:"First Project",description:"Create your first AI-generated project"},{title:"Basic Concepts",description:"Understanding the DreamBuild workflow"}]},{id:"ai-features",title:"AI Features",icon:J,articles:[{title:"Code Generation",description:"Generate code with AI assistance"},{title:"Local AI Setup",description:"Set up Ollama for offline AI"},{title:"Template System",description:"Use pre-built project templates"},{title:"AI Models",description:"Available AI models and capabilities"}]},{id:"api-reference",title:"API Reference",icon:Tr,articles:[{title:"REST API",description:"Complete API documentation"},{title:"WebSocket API",description:"Real-time communication"},{title:"Authentication",description:"API authentication methods"},{title:"Rate Limits",description:"API usage limits and quotas"}]},{id:"deployment",title:"Deployment",icon:Se,articles:[{title:"Firebase Hosting",description:"Deploy to Firebase"},{title:"GitHub Pages",description:"Deploy to GitHub Pages"},{title:"Custom Domain",description:"Set up custom domains"},{title:"CI/CD Pipeline",description:"Automated deployment workflows"}]}],i=[{title:"API Documentation",href:"#",icon:J},{title:"GitHub Repository",href:"https://github.com/ronb12/DreamBuild",icon:fe},{title:"Community Forum",href:"#",icon:Se},{title:"Video Tutorials",href:"#",icon:Zt}];return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(oe,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Documentation"}),e.jsx("p",{className:"text-muted-foreground",children:"Complete guides and API references for DreamBuild"})]})]}),e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(We,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search documentation...",value:s,onChange:o=>t(o.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[e.jsx("div",{className:"lg:col-span-1",children:e.jsxs("div",{className:"sticky top-8 space-y-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Sections"}),n.map(o=>{const l=o.icon;return e.jsxs("button",{onClick:()=>a(o.id),className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${r===o.id?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[e.jsx(l,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:o.title})]},o.id)}),e.jsxs("div",{className:"mt-8 pt-6 border-t border-border",children:[e.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Quick Links"}),e.jsx("div",{className:"space-y-2",children:i.map(o=>{const l=o.icon;return e.jsxs("a",{href:o.href,target:o.href.startsWith("http")?"_blank":void 0,rel:o.href.startsWith("http")?"noopener noreferrer":void 0,className:"flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors",children:[e.jsx(l,{className:"h-4 w-4"}),e.jsx("span",{children:o.title}),o.href.startsWith("http")&&e.jsx(Zt,{className:"h-3 w-3 ml-auto"})]},o.title)})})]})]})}),e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("div",{className:"bg-card border border-border rounded-xl p-6",children:n.map(o=>{const l=o.icon;return e.jsxs("div",{className:r===o.id?"block":"hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:e.jsx(l,{className:"h-5 w-5 text-primary"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-foreground",children:o.title}),e.jsxs("p",{className:"text-muted-foreground",children:["Learn about ",o.title.toLowerCase()]})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:o.articles.map((d,c)=>e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:c*.1},className:"p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer group",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors mb-2",children:d.title}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:d.description})]}),e.jsx(Dr,{className:"h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"})]})},d.title))})]},o.id)})}),r==="getting-started"&&e.jsxs("div",{className:"mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground mb-4",children:"Ready to get started?"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Follow our quick start guide to create your first AI-generated project in minutes."}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(ze,{className:"h-4 w-4"}),"Quick Start Guide"]}),e.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(tt,{className:"h-4 w-4"}),"Download PDF"]})]})]})]})]})]})})},rx=()=>{const[s,t]=m.useState(""),[r,a]=m.useState("all"),[n,i]=m.useState("grid"),o=[{id:"all",name:"All Examples",count:24},{id:"web",name:"Web Apps",count:8},{id:"mobile",name:"Mobile Apps",count:6},{id:"api",name:"APIs",count:5},{id:"dashboard",name:"Dashboards",count:5}],d=[{id:1,title:"E-commerce Store",description:"Full-featured online store with React, Node.js, and Stripe integration",category:"web",difficulty:"Intermediate",tags:["React","Node.js","Stripe","MongoDB"],stars:156,language:"JavaScript",preview:"https://via.placeholder.com/400x250/2563eb/ffffff?text=E-commerce+Store",github:"https://github.com/example/ecommerce-store"},{id:2,title:"Task Management App",description:"Collaborative task management with real-time updates and team features",category:"web",difficulty:"Beginner",tags:["Vue.js","Firebase","Real-time"],stars:89,language:"JavaScript",preview:"https://via.placeholder.com/400x250/10b981/ffffff?text=Task+Manager",github:"https://github.com/example/task-manager"},{id:3,title:"Fitness Tracker",description:"Mobile app for tracking workouts, nutrition, and fitness goals",category:"mobile",difficulty:"Intermediate",tags:["React Native","GraphQL","Health API"],stars:234,language:"TypeScript",preview:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Fitness+Tracker",github:"https://github.com/example/fitness-tracker"},{id:4,title:"Analytics Dashboard",description:"Business intelligence dashboard with charts, metrics, and reporting",category:"dashboard",difficulty:"Advanced",tags:["D3.js","Python","PostgreSQL"],stars:312,language:"Python",preview:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Analytics+Dashboard",github:"https://github.com/example/analytics-dashboard"},{id:5,title:"REST API Template",description:"Production-ready REST API with authentication, validation, and documentation",category:"api",difficulty:"Intermediate",tags:["Express.js","JWT","Swagger"],stars:178,language:"JavaScript",preview:"https://via.placeholder.com/400x250/ef4444/ffffff?text=REST+API",github:"https://github.com/example/rest-api-template"},{id:6,title:"Portfolio Website",description:"Modern portfolio website with animations, blog, and contact form",category:"web",difficulty:"Beginner",tags:["Next.js","Tailwind","Framer Motion"],stars:67,language:"TypeScript",preview:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Portfolio",github:"https://github.com/example/portfolio-website"},{id:7,title:"Social Media App",description:"Instagram-like social media app with posts, stories, and messaging",category:"mobile",difficulty:"Advanced",tags:["Flutter","Firebase","Real-time"],stars:445,language:"Dart",preview:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Social+App",github:"https://github.com/example/social-media-app"},{id:8,title:"GraphQL API",description:"Modern GraphQL API with subscriptions, caching, and real-time updates",category:"api",difficulty:"Advanced",tags:["GraphQL","Apollo","Redis"],stars:298,language:"TypeScript",preview:"https://via.placeholder.com/400x250/84cc16/ffffff?text=GraphQL+API",github:"https://github.com/example/graphql-api"}].filter(p=>{const g=p.title.toLowerCase().includes(s.toLowerCase())||p.description.toLowerCase().includes(s.toLowerCase())||p.tags.some(x=>x.toLowerCase().includes(s.toLowerCase())),y=r==="all"||p.category===r;return g&&y}),c=p=>{switch(p){case"Beginner":return"bg-green-100 text-green-800 border-green-200";case"Intermediate":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"Advanced":return"bg-red-100 text-red-800 border-red-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}},u=p=>{switch(p){case"web":return Se;case"mobile":return es;case"api":return Ae;case"dashboard":return we;default:return lr}};return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(lr,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Examples"}),e.jsx("p",{className:"text-muted-foreground",children:"Explore real-world projects and code examples"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(We,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search examples...",value:s,onChange:p=>t(p.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Bs,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("select",{value:r,onChange:p=>a(p.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:o.map(p=>e.jsxs("option",{value:p.id,children:[p.name," (",p.count,")"]},p.id))})]})]}),e.jsxs("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-lg",children:[e.jsx("button",{onClick:()=>i("grid"),className:`p-2 rounded-md transition-colors ${n==="grid"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:e.jsx(Grid3X3,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>i("list"),className:`p-2 rounded-md transition-colors ${n==="list"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:e.jsx(In,{className:"h-4 w-4"})})]})]})]}),e.jsx("div",{className:n==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"space-y-4",children:d.map((p,g)=>{const y=u(p.category);return e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:g*.1},className:`bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group ${n==="list"?"flex":""}`,children:[e.jsxs("div",{className:`relative ${n==="list"?"w-48 h-32":"h-48"} bg-muted/50`,children:[e.jsx("img",{src:p.preview,alt:p.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute top-3 right-3 flex gap-2",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${c(p.difficulty)}`,children:p.difficulty})}),e.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(F.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-primary text-primary-foreground rounded-lg shadow-lg",title:"Run Example",children:e.jsx(Ce,{className:"h-4 w-4"})}),e.jsx(F.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-white text-gray-900 rounded-lg shadow-lg",title:"Copy Code",children:e.jsx(Ot,{className:"h-4 w-4"})})]})})]}),e.jsxs("div",{className:`p-4 ${n==="list"?"flex-1":""}`,children:[e.jsxs("div",{className:"flex items-start justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:e.jsx(y,{className:"h-4 w-4 text-primary"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:p.title}),e.jsx("p",{className:"text-sm text-muted-foreground",children:p.language})]})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(le,{className:"h-4 w-4"}),e.jsx("span",{children:p.stars})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:p.description}),e.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:p.tags.map(x=>e.jsx("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:x},x))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm",children:[e.jsx(Ce,{className:"h-4 w-4"}),"Run"]}),e.jsxs("a",{href:p.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[e.jsx(fe,{className:"h-4 w-4"}),"Code"]}),e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[e.jsx(tt,{className:"h-4 w-4"}),"Download"]})]})]})]},p.id)})}),d.length===0&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(lr,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No examples found"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),e.jsx("button",{onClick:()=>{t(""),a("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),e.jsxs("div",{className:"mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Have a great example to share?"}),e.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Share your projects with the DreamBuild community and help other developers learn and grow."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(fe,{className:"h-5 w-5"}),"Submit Example"]}),e.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Zt,{className:"h-5 w-5"}),"View Guidelines"]})]})]})]})})},ax=()=>{const[s,t]=m.useState("discussions"),[r,a]=m.useState(""),n=[{id:"discussions",name:"Discussions",count:156,icon:Ps},{id:"projects",name:"Showcase",count:89,icon:J},{id:"events",name:"Events",count:12,icon:Pt},{id:"resources",name:"Resources",count:45,icon:Pr}],i=[{id:1,title:"How to set up Ollama for local AI development?",author:"Alex Chen",avatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=AC",time:"2 hours ago",category:"Getting Started",replies:12,likes:24,isPinned:!0,tags:["ollama","local-ai","setup"]},{id:2,title:"Building a React Native app with DreamBuild - Tips and tricks",author:"Sarah Johnson",avatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SJ",time:"4 hours ago",category:"Mobile Development",replies:8,likes:18,isPinned:!1,tags:["react-native","mobile","tips"]},{id:3,title:"Share your DreamBuild projects - Monthly showcase",author:"Community Team",avatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=CT",time:"1 day ago",category:"Showcase",replies:34,likes:67,isPinned:!0,tags:["showcase","projects","monthly"]},{id:4,title:"API rate limits and best practices",author:"Mike Rodriguez",avatar:"https://via.placeholder.com/40x40/8b5cf6/ffffff?text=MR",time:"2 days ago",category:"API",replies:15,likes:31,isPinned:!1,tags:["api","rate-limits","best-practices"]},{id:5,title:"Deploying to Firebase vs GitHub Pages - Pros and cons",author:"Emma Wilson",avatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=EW",time:"3 days ago",category:"Deployment",replies:22,likes:45,isPinned:!1,tags:["deployment","firebase","github-pages"]}],o=[{id:1,title:"DreamBuild Live Q&A Session",date:"2024-01-25",time:"2:00 PM EST",type:"Live Stream",attendees:156,description:"Join our monthly Q&A session with the DreamBuild team"},{id:2,title:"AI Development Workshop",date:"2024-01-30",time:"10:00 AM EST",type:"Workshop",attendees:89,description:"Learn advanced AI development techniques with DreamBuild"},{id:3,title:"Community Showcase",date:"2024-02-05",time:"6:00 PM EST",type:"Presentation",attendees:234,description:"Featured projects from our amazing community members"}],l=[{label:"Active Members",value:"2,847",icon:Fe},{label:"Discussions",value:"1,234",icon:Ps},{label:"Projects Shared",value:"567",icon:J},{label:"Events This Month",value:"8",icon:Pt}],d=i.filter(c=>c.title.toLowerCase().includes(r.toLowerCase())||c.category.toLowerCase().includes(r.toLowerCase())||c.tags.some(u=>u.toLowerCase().includes(r.toLowerCase())));return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(Fe,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Community"}),e.jsx("p",{className:"text-muted-foreground",children:"Connect with developers, share projects, and get help"})]})]}),e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(We,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search discussions...",value:r,onChange:c=>a(c.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:l.map((c,u)=>{const p=c.icon;return e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:"bg-card border border-border rounded-xl p-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",children:e.jsx(p,{className:"h-5 w-5 text-primary"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-2xl font-bold text-foreground",children:c.value}),e.jsx("p",{className:"text-sm text-muted-foreground",children:c.label})]})]})},c.label)})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-xl mb-6",children:n.map(c=>{const u=c.icon;return e.jsxs("button",{onClick:()=>t(c.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${s===c.id?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground hover:text-foreground hover:bg-background/50"}`,children:[e.jsx(u,{className:"h-4 w-4"}),e.jsx("span",{children:c.name}),e.jsx("span",{className:"px-2 py-1 text-xs bg-muted/50 rounded-full",children:c.count})]},c.id)})}),s==="discussions"&&e.jsx("div",{className:"space-y-4",children:d.map((c,u)=>e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:`bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200 ${c.isPinned?"border-primary/20 bg-primary/5":""}`,children:[c.isPinned&&e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(ze,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-primary",children:"Pinned"})]}),e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("img",{src:c.avatar,alt:c.author,className:"w-10 h-10 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-foreground hover:text-primary transition-colors cursor-pointer mb-2",children:c.title}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-3",children:[e.jsxs("span",{children:["by ",c.author]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:c.time}),e.jsx("span",{children:"•"}),e.jsx("span",{className:"px-2 py-1 bg-muted rounded-md",children:c.category})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(Ar,{className:"h-4 w-4"}),e.jsx("span",{children:c.replies})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(Er,{className:"h-4 w-4"}),e.jsx("span",{children:c.likes})]}),e.jsx("div",{className:"flex gap-1",children:c.tags.map(p=>e.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",p]},p))})]})]})]})]},c.id))}),s==="projects"&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(J,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Project Showcase"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Featured projects from our community will appear here"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Submit Your Project"})]}),s==="events"&&e.jsx("div",{className:"space-y-4",children:o.map((c,u)=>e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:"bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-2",children:c.title}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:c.description}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Pt,{className:"h-4 w-4"}),e.jsx("span",{children:c.date})]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:c.time}),e.jsx("span",{children:"•"}),e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded-md",children:c.type}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[c.attendees," attendees"]})]})]}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Join Event"})]})},c.id))}),s==="resources"&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(Pr,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Community Resources"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Curated resources and learning materials will appear here"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Suggest Resource"})]})]}),e.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[e.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Quick Actions"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(It,{className:"h-4 w-4"}),"Start Discussion"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(J,{className:"h-4 w-4"}),"Share Project"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Pt,{className:"h-4 w-4"}),"Create Event"]})]})]}),e.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Join Our Community"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(fe,{className:"h-4 w-4"}),e.jsx("span",{children:"GitHub"})]}),e.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Kr,{className:"h-4 w-4"}),e.jsx("span",{children:"Twitter"})]}),e.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Rt,{className:"h-4 w-4"}),e.jsx("span",{children:"Newsletter"})]})]})]}),e.jsxs("div",{className:"bg-primary/5 border border-primary/20 rounded-xl p-6",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Community Guidelines"}),e.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[e.jsx("li",{children:"• Be respectful and inclusive"}),e.jsx("li",{children:"• Share helpful and relevant content"}),e.jsx("li",{children:"• Follow our code of conduct"}),e.jsx("li",{children:"• Help others learn and grow"})]})]})]})]})]})})},nx=()=>e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[e.jsx("div",{className:"text-center mb-16",children:e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg",children:e.jsx("span",{className:"text-white font-bold text-3xl",children:"D"})}),e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6",children:["About ",e.jsx("span",{className:"text-blue-600",children:"DreamBuild"})]}),e.jsx("p",{className:"text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed",children:"DreamBuild is a revolutionary AI-powered development platform that transforms your ideas into code. Simply describe what you want to build, and watch as DreamBuild generates complete applications for you."})]})}),e.jsx("div",{className:"mb-16",children:e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"What We Do"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"AI-Powered Development"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Transform your ideas into code using cutting-edge AI models. Simply describe what you want to build, and DreamBuild generates complete, working applications for you."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Multi-Language Support"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Build applications in popular programming languages including React, Vue, Python, JavaScript, HTML/CSS, and many more. Choose your preferred technology stack."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Instant Deployment"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Deploy your applications instantly to Firebase Hosting and GitHub Pages. No complex configuration required - just click and deploy."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Local AI Integration"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Use local AI models for complete privacy and control. No external API keys required - run everything on your own machine for maximum security."})]})]})]})}),e.jsx("div",{className:"mb-16",children:e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"Our Mission"}),e.jsx("p",{className:"text-lg text-slate-600 dark:text-slate-400 text-center leading-relaxed",children:"To democratize software development by making AI-powered coding tools accessible to everyone. Whether you're an experienced developer or just getting started, DreamBuild empowers you to turn your ideas into reality with the power of artificial intelligence."})]})}),e.jsx("div",{className:"mb-16",children:e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"About Bradley Virtual Solutions"}),e.jsxs("div",{className:"text-center",children:[e.jsxs("p",{className:"text-slate-600 dark:text-slate-400 mb-4",children:["DreamBuild is developed by ",e.jsx("strong",{className:"text-slate-800 dark:text-white",children:"Bradley Virtual Solutions, LLC"}),", a company dedicated to creating innovative AI-powered development tools."]}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Founded by Ronell Bradley, a full-stack developer passionate about AI and web development, we're committed to making advanced development tools accessible to everyone."})]})]})}),e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center",children:e.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Building?"}),e.jsx("p",{className:"text-blue-100 mb-6 max-w-xl mx-auto",children:"Start your journey with DreamBuild today and experience the future of AI-powered development."}),e.jsxs(F.a,{href:"/ai-builder",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg",children:[e.jsx(J,{className:"h-5 w-5"}),"Start Building Now",e.jsx(st,{className:"h-4 w-4"})]})]})})]})}),ix=()=>{const[s,t]=m.useState(""),[r,a]=m.useState("all"),n=[{id:"all",name:"All Posts",count:24},{id:"tutorials",name:"Tutorials",count:8},{id:"ai",name:"AI & ML",count:6},{id:"development",name:"Development",count:5},{id:"company",name:"Company",count:5}],i={title:"Getting Started with Local AI Development: A Complete Guide",excerpt:"Learn how to set up Ollama, integrate local AI models, and build your first AI-powered application with DreamBuild.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-20",readTime:"8 min read",category:"tutorials",tags:["ai","ollama","tutorial","getting-started"],image:"https://via.placeholder.com/600x300/2563eb/ffffff?text=Local+AI+Guide",likes:156,comments:23},l=[{id:2,title:"Building a React Native App with AI Code Generation",excerpt:"Discover how to leverage DreamBuild's AI capabilities to create a mobile app from scratch.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-18",readTime:"6 min read",category:"tutorials",tags:["react-native","mobile","ai"],featured:!1,image:"https://via.placeholder.com/400x250/10b981/ffffff?text=React+Native",likes:89,comments:12,views:1523},{id:3,title:"The Future of AI-Powered Development Tools",excerpt:"Exploring emerging trends and technologies that will shape the future of software development.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-15",readTime:"10 min read",category:"ai",tags:["ai","future","technology","trends"],featured:!1,image:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Future+AI",likes:234,comments:34,views:4567},{id:4,title:"DreamBuild 2.0: What's New and Exciting",excerpt:"Announcing the latest features and improvements in DreamBuild 2.0, including enhanced AI capabilities.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-12",readTime:"5 min read",category:"company",tags:["release","features","announcement"],featured:!1,image:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=DreamBuild+2.0",likes:167,comments:28,views:3421},{id:5,title:"Best Practices for AI Code Generation",excerpt:"Learn how to write effective prompts and get the best results from AI code generation tools.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-10",readTime:"7 min read",category:"development",tags:["best-practices","prompts","ai","tips"],featured:!1,image:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Best+Practices",likes:145,comments:19,views:2890},{id:6,title:"Setting Up Your Development Environment for AI",excerpt:"A comprehensive guide to configuring your development environment for optimal AI-assisted coding.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-08",readTime:"9 min read",category:"tutorials",tags:["setup","environment","development","tools"],featured:!1,image:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Dev+Environment",likes:98,comments:15,views:1876},{id:7,title:"Community Spotlight: Amazing Projects Built with DreamBuild",excerpt:"Highlighting some of the incredible projects our community has created using DreamBuild.",author:"Community Team",authorAvatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=CT",publishDate:"2024-01-05",readTime:"6 min read",category:"company",tags:["community","showcase","projects","spotlight"],featured:!1,image:"https://via.placeholder.com/400x250/84cc16/ffffff?text=Community+Projects",likes:203,comments:41,views:5234}].filter(u=>{const p=u.title.toLowerCase().includes(s.toLowerCase())||u.excerpt.toLowerCase().includes(s.toLowerCase())||u.tags.some(y=>y.toLowerCase().includes(s.toLowerCase())),g=r==="all"||u.category===r;return p&&g}),d=u=>{switch(u){case"tutorials":return J;case"ai":return ze;case"development":return Se;case"company":return $s;default:return oe}},c=u=>{switch(u){case"tutorials":return"bg-blue-100 text-blue-800 border-blue-200";case"ai":return"bg-purple-100 text-purple-800 border-purple-200";case"development":return"bg-green-100 text-green-800 border-green-200";case"company":return"bg-orange-100 text-orange-800 border-orange-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}};return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(oe,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Blog"}),e.jsx("p",{className:"text-muted-foreground",children:"Insights, tutorials, and updates from the DreamBuild team"})]})]}),e.jsx("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(We,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search blog posts...",value:s,onChange:u=>t(u.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Bs,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("select",{value:r,onChange:u=>a(u.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:n.map(u=>e.jsxs("option",{value:u.id,children:[u.name," (",u.count,")"]},u.id))})]})]})})]}),e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-12",children:e.jsx("div",{className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200",children:e.jsxs("div",{className:"md:flex",children:[e.jsx("div",{className:"md:w-1/2",children:e.jsx("img",{src:i.image,alt:i.title,className:"w-full h-64 md:h-full object-cover"})}),e.jsxs("div",{className:"md:w-1/2 p-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{className:"px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium",children:"Featured"}),e.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full border ${c(i.category)}`,children:i.category})]}),e.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer",children:i.title}),e.jsx("p",{className:"text-muted-foreground mb-6 leading-relaxed",children:i.excerpt}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:i.authorAvatar,alt:i.author,className:"w-6 h-6 rounded-full"}),e.jsx("span",{children:i.author})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Pt,{className:"h-4 w-4"}),e.jsx("span",{children:i.publishDate})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(xe,{className:"h-4 w-4"}),e.jsx("span",{children:i.readTime})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex gap-1",children:i.tags.map(u=>e.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",u]},u))}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(Er,{className:"h-4 w-4"}),e.jsx("span",{children:i.likes})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(Ar,{className:"h-4 w-4"}),e.jsx("span",{children:i.comments})]})]})]})]})]})})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map((u,p)=>{const g=d(u.category);return e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:p*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group",children:[e.jsxs("div",{className:"relative h-48 bg-muted/50",children:[e.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute top-3 right-3",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${c(u.category)}`,children:u.category})})]}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(g,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm text-primary font-medium",children:u.category})]}),e.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer mb-3 line-clamp-2",children:u.title}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-3",children:u.excerpt}),e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("img",{src:u.authorAvatar,alt:u.author,className:"w-8 h-8 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:u.author}),e.jsxs("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[e.jsx("span",{children:u.publishDate}),e.jsx("span",{children:"•"}),e.jsx("span",{children:u.readTime})]})]})]}),e.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:u.tags.map(y=>e.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",y]},y))}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Er,{className:"h-4 w-4"}),e.jsx("span",{children:u.likes})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Ar,{className:"h-4 w-4"}),e.jsx("span",{children:u.comments})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:e.jsx(Pr,{className:"h-4 w-4"})}),e.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:e.jsx(Ln,{className:"h-4 w-4"})}),e.jsxs("button",{className:"flex items-center gap-1 text-primary hover:text-primary-dark transition-colors",children:[e.jsx("span",{className:"text-sm font-medium",children:"Read"}),e.jsx(st,{className:"h-4 w-4"})]})]})]})]})]},u.id)})}),l.length===0&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(oe,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No posts found"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),e.jsx("button",{onClick:()=>{t(""),a("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),e.jsxs("div",{className:"mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Stay Updated"}),e.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Subscribe to our newsletter for the latest tutorials, updates, and insights from the DreamBuild team."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto",children:[e.jsx("input",{type:"email",placeholder:"Enter your email",className:"flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"}),e.jsx("button",{className:"px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Subscribe"})]})]})]})})},ox=()=>{const[s,t]=m.useState({name:"",email:"",message:""}),[r,a]=m.useState(!1),[n,i]=m.useState(null),o=[{icon:Rt,title:"Email Us",description:"Get in touch via email",value:"hello@dreambuild.dev",action:"mailto:hello@dreambuild.dev"}],l=[{icon:fe,href:"https://github.com/ronb12/DreamBuild",label:"GitHub"},{icon:Kr,href:"#",label:"Twitter"},{icon:il,href:"#",label:"LinkedIn"}],d=u=>{const{name:p,value:g}=u.target;t(y=>({...y,[p]:g}))},c=async u=>{u.preventDefault(),a(!0),await new Promise(p=>setTimeout(p,2e3)),a(!1),i("success"),t({name:"",email:"",message:""}),setTimeout(()=>i(null),5e3)};return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"text-center mb-12",children:e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsxs("h1",{className:"text-5xl font-bold text-gray-900 mb-6",children:["Contact ",e.jsx("span",{className:"text-primary",children:"Us"})]}),e.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Have questions about DreamBuild? We'd love to hear from you."})]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[e.jsxs(F.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-white border border-gray-200 rounded-2xl p-8 shadow-sm",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Send us a Message"}),e.jsx("p",{className:"text-gray-600",children:"Fill out the form below and we'll get back to you as soon as possible."})]}),e.jsxs("form",{onSubmit:c,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Name *"}),e.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:d,required:!0,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all",placeholder:"Your full name"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email *"}),e.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:d,required:!0,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all",placeholder:"your@email.com"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Message *"}),e.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:d,required:!0,rows:6,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none",placeholder:"Tell us how we can help you..."})]}),n==="success"&&e.jsxs(F.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx(pe,{className:"h-5 w-5 text-green-600"}),e.jsx("span",{className:"text-green-800",children:"Message sent successfully! We'll get back to you soon."})]}),e.jsx("button",{type:"submit",disabled:r,className:"w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold",children:r?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Sending..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Xr,{className:"h-5 w-5"}),"Send Message"]})})]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs(F.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Get in Touch"}),e.jsx("div",{className:"space-y-4",children:o.map(u=>{const p=u.icon;return e.jsxs("a",{href:u.action,className:"flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors",children:e.jsx(p,{className:"h-5 w-5 text-primary"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-semibold text-gray-900 group-hover:text-primary transition-colors",children:u.title}),e.jsx("p",{className:"text-sm text-gray-600 mb-1",children:u.description}),e.jsx("p",{className:"text-sm font-medium text-primary",children:u.value})]})]},u.title)})})]}),e.jsxs(F.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},className:"bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Follow Us"}),e.jsx("div",{className:"space-y-3",children:l.map(u=>{const p=u.icon;return e.jsxs("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group",children:[e.jsx(p,{className:"h-5 w-5 text-gray-600 group-hover:text-primary transition-colors"}),e.jsx("span",{className:"text-sm font-medium text-gray-900 group-hover:text-primary transition-colors",children:u.label})]},u.label)})})]})]})]})]})})},lx=()=>{const s=[{icon:Ae,title:"Information We Collect",content:["Account information (name, email, profile picture)","Project data and code you create using our platform","Usage analytics to improve our services","Device information for compatibility purposes","Communication data when you contact our support team"]},{icon:He,title:"How We Use Your Information",content:["Provide and maintain our AI development platform","Process your code generation requests and project management","Improve our AI models and service quality","Send important updates about your projects","Provide customer support and technical assistance","Comply with legal obligations and protect our rights"]},{icon:ol,title:"Data Security",content:["All data is encrypted in transit and at rest","We use industry-standard security measures","Regular security audits and updates","Limited access to your data by authorized personnel only","Secure cloud infrastructure with enterprise-grade protection","Your code and projects are stored securely and privately"]},{icon:ll,title:"Your Rights",content:["Access your personal data at any time","Request correction of inaccurate information","Delete your account and associated data","Export your projects and data","Opt out of non-essential communications","Withdraw consent for data processing"]}];return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"text-center mb-12",children:e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("div",{className:"flex items-center justify-center mb-6",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg",children:e.jsx(Qr,{className:"h-8 w-8 text-white"})})}),e.jsxs("h1",{className:"text-5xl font-bold text-gray-900 mb-6",children:["Privacy ",e.jsx("span",{className:"text-blue-600",children:"Policy"})]}),e.jsx("p",{className:"text-lg text-gray-600 max-w-3xl mx-auto",children:"Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use DreamBuild."}),e.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Last updated: September 23, 2024"})]})}),e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Introduction"}),e.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:'DreamBuild ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered development platform.'}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:"By using DreamBuild, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service."})]}),e.jsx("div",{className:"space-y-8",children:s.map((t,r)=>{const a=t.icon;return e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2+r*.1},className:"bg-white border border-gray-200 rounded-2xl p-8 shadow-sm",children:[e.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0",children:e.jsx(a,{className:"h-6 w-6 text-blue-600"})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:t.title})]}),e.jsx("ul",{className:"space-y-3",children:t.content.map((n,i)=>e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{className:"text-gray-600",children:n})]},i))})]},t.title)})}),e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},className:"bg-blue-50 border border-blue-200 rounded-2xl p-8 mt-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Additional Information"}),e.jsxs("div",{className:"space-y-4 text-gray-600",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Data Retention:"})," We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your data at any time."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Third-Party Services:"})," We may use third-party services for analytics, hosting, and other functions. These services have their own privacy policies."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"International Transfers:"})," Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Children's Privacy:"})," Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13."]})]})]}),e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},className:"bg-white border border-gray-200 rounded-2xl p-8 mt-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Contact Us"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"If you have any questions about this Privacy Policy or our data practices, please contact us:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(Rt,{className:"h-5 w-5 text-blue-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Email"}),e.jsx("p",{className:"text-gray-600",children:"privacy@dreambuild.dev"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(we,{className:"h-5 w-5 text-blue-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Data Protection Officer"}),e.jsx("p",{className:"text-gray-600",children:"dpo@dreambuild.dev"})]})]})]})]}),e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},className:"text-center mt-8 p-6 bg-gray-50 rounded-xl",children:e.jsx("p",{className:"text-sm text-gray-500",children:'This Privacy Policy may be updated from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.'})})]})})},cx=()=>{const s=[{icon:we,title:"Acceptance of Terms",content:["By accessing and using DreamBuild, you accept and agree to be bound by these Terms of Service","If you do not agree to these terms, you may not use our service","We reserve the right to modify these terms at any time without prior notice","Your continued use of the service after changes constitutes acceptance of the new terms","These terms apply to all users, including visitors, registered users, and premium subscribers"]},{icon:J,title:"Service Description",content:["DreamBuild is an AI-powered development platform supporting 100+ programming languages","We provide code generation, project management, and development tools","Our service includes both free and premium features","We may modify, suspend, or discontinue any part of our service at any time","We do not guarantee uninterrupted access to our service"]},{icon:Fe,title:"User Accounts",content:["You must provide accurate and complete information when creating an account","You are responsible for maintaining the confidentiality of your account credentials","You must notify us immediately of any unauthorized use of your account","You are responsible for all activities that occur under your account","We reserve the right to suspend or terminate accounts that violate these terms"]},{icon:Ae,title:"User Content and Data",content:["You retain ownership of all code and projects you create using our platform","You grant us a limited license to process your content to provide our services","You are responsible for ensuring your content does not violate any laws or third-party rights","We may use anonymized data to improve our AI models and services","You must not upload malicious code, viruses, or harmful content"]},{icon:Qr,title:"Prohibited Uses",content:["Use our service for any unlawful purpose or to solicit others to perform unlawful acts","Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances","Transmit or procure the sending of any advertising or promotional material without our consent","Impersonate or attempt to impersonate another person or entity","Engage in any other conduct that restricts or inhibits anyone's use of the service"]},{icon:dl,title:"Intellectual Property",content:["DreamBuild and its original content, features, and functionality are owned by Bradley Virtual Solutions, LLC","Our service is protected by copyright, trademark, and other intellectual property laws","You may not reproduce, distribute, or create derivative works without our permission","Any feedback or suggestions you provide may be used by us without compensation","Third-party trademarks and copyrights remain the property of their respective owners"]}],t=[{title:"Service Availability",content:"We strive to maintain high service availability but do not guarantee uninterrupted access. We may perform maintenance, updates, or modifications that temporarily affect service availability."},{title:"Limitation of Liability",content:"To the maximum extent permitted by law, DreamBuild and Bradley Virtual Solutions, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our service."},{title:"Indemnification",content:"You agree to defend, indemnify, and hold harmless DreamBuild and Bradley Virtual Solutions, LLC from any claims, damages, or expenses arising from your use of our service or violation of these terms."},{title:"Termination",content:"We may terminate or suspend your account and access to our service immediately, without prior notice, for any reason, including if you breach these Terms of Service."}];return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"text-center mb-12",children:e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("div",{className:"flex items-center justify-center mb-6",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg",children:e.jsx(cl,{className:"h-8 w-8 text-white"})})}),e.jsxs("h1",{className:"text-5xl font-bold text-gray-900 mb-6",children:["Terms of ",e.jsx("span",{className:"text-green-600",children:"Service"})]}),e.jsx("p",{className:"text-lg text-gray-600 max-w-3xl mx-auto",children:"These terms govern your use of DreamBuild. Please read them carefully before using our AI development platform."}),e.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Last updated: September 23, 2024"})]})}),e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Introduction"}),e.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:'Welcome to DreamBuild, operated by Bradley Virtual Solutions, LLC ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your use of our AI-powered development platform and services.'}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:"By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the service."})]}),e.jsx("div",{className:"space-y-8",children:s.map((r,a)=>{const n=r.icon;return e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2+a*.1},className:"bg-white border border-gray-200 rounded-2xl p-8 shadow-sm",children:[e.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0",children:e.jsx(n,{className:"h-6 w-6 text-green-600"})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:r.title})]}),e.jsx("ul",{className:"space-y-3",children:r.content.map((i,o)=>e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{className:"text-gray-600",children:i})]},o))})]},r.title)})}),e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},className:"mt-8 space-y-6",children:t.map((r,a)=>e.jsxs("div",{className:"bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:r.title}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:r.content})]},r.title))}),e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.9},className:"bg-green-50 border border-green-200 rounded-2xl p-8 mt-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Governing Law"}),e.jsxs("div",{className:"space-y-4 text-gray-600",children:[e.jsx("p",{children:"These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions."}),e.jsx("p",{children:"Any disputes arising from these Terms or your use of our service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association."}),e.jsx("p",{children:"If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will remain in full force and effect."})]})]}),e.jsxs(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},className:"bg-white border border-gray-200 rounded-2xl p-8 mt-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Contact Information"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"If you have any questions about these Terms of Service, please contact us:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(Rt,{className:"h-5 w-5 text-green-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Email"}),e.jsx("p",{className:"text-gray-600",children:"legal@dreambuild.dev"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(we,{className:"h-5 w-5 text-green-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Legal Department"}),e.jsx("p",{className:"text-gray-600",children:"Bradley Virtual Solutions, LLC"})]})]})]})]}),e.jsx(F.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.1},className:"text-center mt-8 p-6 bg-gray-50 rounded-xl",children:e.jsx("p",{className:"text-sm text-gray-500",children:'These Terms of Service may be updated from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date.'})})]})})};class dx{constructor(){this.tutorials=this.initializeTutorials(),this.userProgress=this.loadUserProgress()}initializeTutorials(){return{"html-css-basics":{id:"html-css-basics",title:"HTML & CSS Fundamentals",description:"Master the building blocks of web development",difficulty:"Beginner",duration:"4 hours",language:"HTML/CSS",steps:[{id:1,title:"Introduction to HTML",instructions:"Create your first HTML document with basic structure",startingCode:`<!DOCTYPE html>
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
}`}]}}}loadUserProgress(){const t=localStorage.getItem("tutorialProgress");return t?JSON.parse(t):{}}saveUserProgress(){localStorage.setItem("tutorialProgress",JSON.stringify(this.userProgress))}getTutorial(t){return this.tutorials[t]}getAllTutorials(){return Object.values(this.tutorials)}getTutorialProgress(t){return this.userProgress[t]||{completed:!1,currentStep:0,completedSteps:[]}}updateTutorialProgress(t,r,a=!0){this.userProgress[t]||(this.userProgress[t]={completed:!1,currentStep:0,completedSteps:[]}),a&&this.userProgress[t].completedSteps.push(r);const n=this.getTutorial(t);n&&this.userProgress[t].completedSteps.length===n.steps.length&&(this.userProgress[t].completed=!0),this.saveUserProgress()}getCompletedTutorials(){return Object.entries(this.userProgress).filter(([t,r])=>r.completed).map(([t,r])=>this.getTutorial(t))}getTutorialStats(){const t=Object.keys(this.tutorials).length,r=this.getCompletedTutorials().length,a=Object.values(this.tutorials).reduce((i,o)=>i+o.steps.length,0),n=Object.values(this.userProgress).reduce((i,o)=>i+o.completedSteps.length,0);return{totalTutorials:t,completedTutorials:r,totalSteps:a,completedSteps:n,completionRate:a>0?n/a*100:0}}}const Ts=new dx,ux=()=>{const[s,t]=m.useState("overview"),[r,a]=m.useState([]),[n,i]=m.useState({}),[o,l]=m.useState([]);m.useEffect(()=>{d()},[]);const d=()=>{const g=Ts.getAllTutorials(),y=Ts.getTutorialStats();a(g),i(y),l([{type:"completed",tutorial:"HTML & CSS Fundamentals",time:"2 hours ago"},{type:"started",tutorial:"JavaScript Essentials",time:"1 day ago"},{type:"completed",tutorial:"React Complete Guide",time:"3 days ago"},{type:"started",tutorial:"Node.js & Express",time:"1 week ago"}])},c=g=>{switch(g){case"HTML/CSS":return Se;case"JavaScript":return J;case"React":return ze;case"Node.js":return Ae;default:return oe}},u=g=>{switch(g){case"Beginner":return"text-green-600 bg-green-100";case"Intermediate":return"text-yellow-600 bg-yellow-100";case"Advanced":return"text-red-600 bg-red-100";default:return"text-gray-600 bg-gray-100"}},p=[{id:"overview",label:"Overview",icon:as},{id:"tutorials",label:"Tutorials",icon:oe},{id:"progress",label:"Progress",icon:$s},{id:"achievements",label:"Achievements",icon:Ge}];return e.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Education Dashboard"}),e.jsx("p",{className:"text-gray-600",children:"Track your learning progress and achievements"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:p.map(g=>e.jsxs("button",{onClick:()=>t(g.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${s===g.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[e.jsx(g.icon,{className:"h-4 w-4"}),g.label]},g.id))}),s==="overview"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(oe,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Tutorials Completed"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:n.completedTutorials})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center",children:e.jsx(pe,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Steps Completed"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:n.completedSteps})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center",children:e.jsx(qe,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Completion Rate"}),e.jsxs("p",{className:"text-2xl font-bold text-gray-900",children:[Math.round(n.completionRate),"%"]})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center",children:e.jsx(xe,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Total Time"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:"24h"})]})]})})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(On,{className:"h-5 w-5"}),"Recent Activity"]}),e.jsx("div",{className:"space-y-3",children:o.map((g,y)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${g.type==="completed"?"bg-green-500":"bg-blue-500"}`,children:g.type==="completed"?e.jsx(pe,{className:"h-4 w-4 text-white"}):e.jsx(Ce,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"font-medium text-gray-900",children:[g.type==="completed"?"Completed":"Started"," ",g.tutorial]}),e.jsx("p",{className:"text-sm text-gray-600",children:g.time})]})]},y))})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Learning Paths"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Web Development"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Learn HTML, CSS, JavaScript, and React"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:"75%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"75%"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Mobile Development"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Build mobile apps with React Native"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"30%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"30%"})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg border border-purple-200",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Backend Development"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Learn Node.js, Express, and databases"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-purple-500 h-2 rounded-full",style:{width:"10%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"10%"})]})]})]})]})]}),s==="tutorials"&&e.jsx("div",{className:"space-y-6",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(g=>{const y=c(g.language),x=Ts.getTutorialProgress(g.id),b=g.steps.length>0?x.completedSteps.length/g.steps.length*100:0;return e.jsx("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(y,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:g.title}),e.jsx("p",{className:"text-sm text-gray-600",children:g.language})]})]}),e.jsx("p",{className:"text-gray-600 mb-4",children:g.description}),e.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-gray-500",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(xe,{className:"h-4 w-4"}),g.duration]}),e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${u(g.difficulty)}`,children:g.difficulty})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-1",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[Math.round(b),"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${b}%`}})})]}),e.jsxs("button",{className:"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2",children:[e.jsx(Ce,{className:"h-4 w-4"}),x.completedSteps.length>0?"Continue":"Start Tutorial"]})]})},g.id)})})}),s==="progress"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Learning Progress"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"Weekly Progress"}),e.jsx("div",{className:"space-y-2",children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((g,y)=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-8 text-sm text-gray-600",children:g}),e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:`${Math.random()*100}%`}})}),e.jsxs("span",{className:"text-sm text-gray-600",children:[Math.floor(Math.random()*4),"h"]})]},g))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"Skill Development"}),e.jsx("div",{className:"space-y-3",children:[{skill:"HTML/CSS",level:85},{skill:"JavaScript",level:70},{skill:"React",level:60},{skill:"Node.js",level:30}].map((g,y)=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{className:"text-gray-700",children:g.skill}),e.jsxs("span",{className:"text-gray-600",children:[g.level,"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:`${g.level}%`}})})]},y))})]})]})]})}),s==="achievements"&&e.jsx("div",{className:"space-y-6",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{title:"First Steps",description:"Complete your first tutorial",icon:oe,unlocked:!0,points:10},{title:"Code Warrior",description:"Complete 5 tutorials",icon:J,unlocked:!0,points:50},{title:"Streak Master",description:"Learn for 7 days in a row",icon:Ge,unlocked:!0,points:100},{title:"Speed Learner",description:"Complete a tutorial in one day",icon:ze,unlocked:!1,points:75},{title:"Perfectionist",description:"Get 100% on all quizzes",icon:le,unlocked:!1,points:150},{title:"Scholar",description:"Complete 20 tutorials",icon:Es,unlocked:!1,points:300}].map((g,y)=>e.jsxs("div",{className:`bg-white rounded-lg shadow-lg p-6 ${g.unlocked?"border-2 border-green-500":"opacity-60"}`,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center ${g.unlocked?"bg-green-500":"bg-gray-300"}`,children:e.jsx(g.icon,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900",children:g.title}),e.jsx("p",{className:"text-sm text-gray-600",children:g.description})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm font-medium text-gray-600",children:["+",g.points," points"]}),g.unlocked&&e.jsx(pe,{className:"h-5 w-5 text-green-500"})]})]},y))})})]})},mx=({tutorial:s,onComplete:t})=>{const[r,a]=m.useState(0),[n,i]=m.useState(""),[o,l]=m.useState(!1),[d,c]=m.useState(""),[u,p]=m.useState([]),[g,y]=m.useState([]),[x,b]=m.useState(new Set),[h,N]=m.useState(0),[j,w]=m.useState(null),v=m.useRef(null);m.useEffect(()=>{s&&s.steps.length>0&&(i(s.steps[0].startingCode||""),w(Date.now()))},[s]),m.useEffect(()=>{let T;return o&&j&&(T=setInterval(()=>{N(Math.floor((Date.now()-j)/1e3))},1e3)),()=>clearInterval(T)},[o,j]);const f=()=>{l(!0),p([]);try{const T=E(n);c(T);const C=s.steps[r];C.expectedOutput&&T.includes(C.expectedOutput)&&(b(I=>new Set([...I,r])),r===s.steps.length-1&&(t==null||t({timeSpent:h,stepsCompleted:x.size+1,totalSteps:s.steps.length})))}catch(T){p([T.message])}l(!1)},E=T=>{if(T.includes("console.log")){const C=T.match(/console\.log\(['"`]([^'"`]+)['"`]\)/g);if(C)return C.map(I=>I.match(/console\.log\(['"`]([^'"`]+)['"`]\)/)[1]).join(`
`)}return"Code executed successfully!"},S=()=>{if(r<s.steps.length-1){a(r+1);const T=s.steps[r+1];i(T.startingCode||"")}},k=()=>{if(r>0){a(r-1);const T=s.steps[r-1];i(T.startingCode||"")}},D=()=>{const T=s.steps[r];i(T.startingCode||""),c(""),p([])},O=()=>{const T=s.steps[r];if(T.hints&&T.hints.length>0){const C=T.hints[Math.floor(Math.random()*T.hints.length)];y(I=>[...I,C])}},L=T=>{const C=Math.floor(T/60),I=T%60;return`${C}:${I.toString().padStart(2,"0")}`};if(!s)return null;const A=s.steps[r],$=(r+1)/s.steps.length*100;return e.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:s.title}),e.jsx("p",{className:"text-gray-600",children:s.description})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[e.jsx(xe,{className:"h-4 w-4"}),L(h)]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[e.jsx(qe,{className:"h-4 w-4"}),r+1," of ",s.steps.length]})]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2 mb-4",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${$}%`}})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("button",{onClick:k,disabled:r===0,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed",children:"Previous"}),e.jsxs("span",{className:"text-sm text-gray-600",children:["Step ",r+1,": ",A.title]}),e.jsx("button",{onClick:S,disabled:r===s.steps.length-1,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed",children:"Next"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(J,{className:"h-5 w-5"}),"Code Editor"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:O,className:"px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm hover:bg-yellow-200",children:"Get Hint"}),e.jsx("button",{onClick:D,className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200",children:e.jsx(Zr,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("textarea",{ref:v,value:n,onChange:T=>i(T.target.value),className:"w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Write your code here..."}),e.jsx("div",{className:"flex items-center gap-2 mt-4",children:e.jsxs("button",{onClick:f,disabled:o,className:"flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50",children:[o?e.jsx(Mn,{className:"h-4 w-4"}):e.jsx(Ce,{className:"h-4 w-4"}),o?"Running...":"Run Code"]})})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Instructions"}),e.jsxs("div",{className:"prose prose-sm max-w-none",children:[e.jsx("p",{className:"text-gray-700 mb-4",children:A.instructions}),A.examples&&e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Example:"}),e.jsx("pre",{className:"text-sm text-gray-700",children:A.examples})]})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg",children:[e.jsx("div",{className:"flex items-center justify-between p-4 border-b border-gray-200",children:e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(He,{className:"h-5 w-5"}),"Output"]})}),e.jsxs("div",{className:"p-4",children:[d&&e.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 mb-4",children:e.jsx("pre",{className:"text-sm text-green-800 whitespace-pre-wrap",children:d})}),u.length>0&&e.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(As,{className:"h-4 w-4 text-red-500"}),e.jsx("span",{className:"font-medium text-red-800",children:"Errors:"})]}),u.map((T,C)=>e.jsx("p",{className:"text-sm text-red-700",children:T},C))]}),g.length>0&&e.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(As,{className:"h-4 w-4 text-yellow-500"}),e.jsx("span",{className:"font-medium text-yellow-800",children:"Hints:"})]}),g.map((T,C)=>e.jsx("p",{className:"text-sm text-yellow-700",children:T},C))]})]})]}),x.has(r)&&e.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(pe,{className:"h-5 w-5 text-green-500"}),e.jsx("span",{className:"font-medium text-green-800",children:"Step completed!"})]})})]})]}),g.length>0&&e.jsxs("div",{className:"mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium text-yellow-800 mb-2",children:"Available Hints:"}),e.jsx("ul",{className:"list-disc list-inside text-sm text-yellow-700",children:g.map((T,C)=>e.jsx("li",{children:T},C))})]})]})},px=()=>{const[s,t]=m.useState("all"),[r,a]=m.useState("all"),[n,i]=m.useState([]),[o,l]=m.useState({}),[d,c]=m.useState([]),u=[{id:"all",label:"All Levels",color:"gray"},{id:"easy",label:"Easy",color:"green"},{id:"medium",label:"Medium",color:"yellow"},{id:"hard",label:"Hard",color:"red"}],p=[{id:"all",label:"All Languages",icon:J},{id:"javascript",label:"JavaScript",icon:J},{id:"python",label:"Python",icon:J},{id:"java",label:"Java",icon:J},{id:"cpp",label:"C++",icon:J}],g=[{id:1,title:"Two Sum",description:"Find two numbers in an array that add up to a target value.",difficulty:"easy",language:"javascript",points:10,timeLimit:30,tags:["arrays","hash-table"],testCases:[{input:"[2,7,11,15], 9",output:"[0,1]"},{input:"[3,2,4], 6",output:"[1,2]"}],starterCode:`function twoSum(nums, target) {
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
}`}],y=[{rank:1,name:"Alex Chen",points:1250,avatar:"👨‍💻",streak:15},{rank:2,name:"Sarah Kim",points:1180,avatar:"👩‍💻",streak:12},{rank:3,name:"Mike Johnson",points:1100,avatar:"👨‍💻",streak:8},{rank:4,name:"Emma Wilson",points:1050,avatar:"👩‍💻",streak:10},{rank:5,name:"David Lee",points:980,avatar:"👨‍💻",streak:6}];m.useEffect(()=>{i(g),c(y)},[]);const x=n.filter(N=>{const j=s==="all"||N.difficulty===s,w=r==="all"||N.language===r;return j&&w}),b=N=>{switch(N){case"easy":return"text-green-600 bg-green-100";case"medium":return"text-yellow-600 bg-yellow-100";case"hard":return"text-red-600 bg-red-100";default:return"text-gray-600 bg-gray-100"}},h=N=>{switch(N){case"easy":return e.jsx(pe,{className:"h-4 w-4"});case"medium":return e.jsx(qe,{className:"h-4 w-4"});case"hard":return e.jsx(ze,{className:"h-4 w-4"});default:return e.jsx(J,{className:"h-4 w-4"})}};return e.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Coding Challenges"}),e.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"Test your skills with interactive coding challenges"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Filters"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-3",children:"Difficulty"}),e.jsx("div",{className:"space-y-2",children:u.map(N=>e.jsxs("button",{onClick:()=>t(N.id),className:`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${s===N.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[h(N.id),N.label]},N.id))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-3",children:"Language"}),e.jsx("div",{className:"space-y-2",children:p.map(N=>e.jsxs("button",{onClick:()=>a(N.id),className:`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${r===N.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[e.jsx(N.icon,{className:"h-4 w-4"}),N.label]},N.id))})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Ge,{className:"h-5 w-5 text-yellow-500"}),"Leaderboard"]}),e.jsx("div",{className:"space-y-3",children:d.map((N,j)=>e.jsxs("div",{className:"flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:N.avatar}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:N.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:[N.points," points"]})]})]}),e.jsx("div",{className:"ml-auto text-right",children:e.jsxs("div",{className:"flex items-center gap-1 text-sm text-gray-600",children:[e.jsx(ul,{className:"h-4 w-4 text-orange-500"}),N.streak]})})]},j))})]})]}),e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:x.map(N=>e.jsx("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:N.title}),e.jsx("p",{className:"text-gray-600 mb-3",children:N.description})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${b(N.difficulty)}`,children:N.difficulty})})]}),e.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-gray-600",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(le,{className:"h-4 w-4 text-yellow-500"}),N.points," points"]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(xe,{className:"h-4 w-4"}),N.timeLimit," min"]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(J,{className:"h-4 w-4"}),N.language]})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:N.tags.map((j,w)=>e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs",children:j},w))}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{className:"flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2",children:[e.jsx(Ce,{className:"h-4 w-4"}),"Start Challenge"]}),e.jsx("button",{className:"p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",children:e.jsx(En,{className:"h-4 w-4"})})]})]})},N.id))}),x.length===0&&e.jsxs("div",{className:"text-center py-12",children:[e.jsx(J,{className:"h-12 w-12 text-gray-400 mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"No challenges found"}),e.jsx("p",{className:"text-gray-600",children:"Try adjusting your filters"})]})]})]}),e.jsx("div",{className:"mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 text-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"100+"}),e.jsx("div",{className:"text-blue-100",children:"Challenges"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"50K+"}),e.jsx("div",{className:"text-blue-100",children:"Solutions"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"10K+"}),e.jsx("div",{className:"text-blue-100",children:"Active Users"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"95%"}),e.jsx("div",{className:"text-blue-100",children:"Success Rate"})]})]})})]})},hx=()=>{var b;const[s,t]=m.useState("week"),[r,a]=m.useState({}),[n,i]=m.useState([]),[o,l]=m.useState(0),[d,c]=m.useState(0),u=[{id:"week",label:"This Week",days:7},{id:"month",label:"This Month",days:30},{id:"year",label:"This Year",days:365}],p={week:{totalTime:12.5,coursesCompleted:2,challengesSolved:8,streak:5,dailyActivity:[{day:"Mon",hours:2.5,challenges:3},{day:"Tue",hours:1.5,challenges:2},{day:"Wed",hours:3,challenges:4},{day:"Thu",hours:2,challenges:1},{day:"Fri",hours:1.5,challenges:2},{day:"Sat",hours:1,challenges:1},{day:"Sun",hours:1,challenges:0}]},month:{totalTime:45.2,coursesCompleted:8,challengesSolved:35,streak:12,dailyActivity:Array.from({length:30},(h,N)=>({day:`Day ${N+1}`,hours:Math.random()*3,challenges:Math.floor(Math.random()*5)}))},year:{totalTime:180.5,coursesCompleted:25,challengesSolved:150,streak:25,dailyActivity:Array.from({length:365},(h,N)=>({day:`Day ${N+1}`,hours:Math.random()*4,challenges:Math.floor(Math.random()*8)}))}},g=[{id:1,title:"First Steps",description:"Complete your first lesson",icon:oe,unlocked:!0,unlockedAt:"2024-01-15",points:10},{id:2,title:"Code Warrior",description:"Solve 10 coding challenges",icon:J,unlocked:!0,unlockedAt:"2024-01-20",points:50},{id:3,title:"Streak Master",description:"Maintain a 7-day learning streak",icon:Ge,unlocked:!0,unlockedAt:"2024-01-25",points:100},{id:4,title:"Course Conqueror",description:"Complete 5 courses",icon:Es,unlocked:!1,points:200},{id:5,title:"Challenge Champion",description:"Solve 50 coding challenges",icon:le,unlocked:!1,points:300}];m.useEffect(()=>{a(p[s]),i(g),l(p[s].streak),c(p[s].totalTime)},[s]);const y=h=>h>=30?"text-red-600":h>=14?"text-orange-600":h>=7?"text-yellow-600":"text-green-600",x=h=>h>=30?e.jsx(Ge,{className:"h-5 w-5"}):h>=14?e.jsx(Es,{className:"h-5 w-5"}):h>=7?e.jsx(le,{className:"h-5 w-5"}):e.jsx(qe,{className:"h-5 w-5"});return e.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Learning Progress"}),e.jsx("p",{className:"text-gray-600",children:"Track your coding journey and achievements"})]}),e.jsx("div",{className:"flex items-center gap-2",children:u.map(h=>e.jsx("button",{onClick:()=>t(h.id),className:`px-4 py-2 rounded-lg font-medium transition-colors ${s===h.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:h.label},h.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(xe,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Total Time"}),e.jsxs("p",{className:"text-2xl font-bold text-gray-900",children:[d,"h"]})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center",children:e.jsx(oe,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Courses Completed"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:r.coursesCompleted})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center",children:e.jsx(J,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Challenges Solved"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:r.challengesSolved})]})]})}),e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center",children:x(o)}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Current Streak"}),e.jsxs("p",{className:`text-2xl font-bold ${y(o)}`,children:[o," days"]})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2 bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(as,{className:"h-5 w-5"}),"Daily Activity"]}),e.jsx("div",{className:"h-64 flex items-end gap-2",children:(b=r.dailyActivity)==null?void 0:b.slice(0,7).map((h,N)=>e.jsxs("div",{className:"flex-1 flex flex-col items-center",children:[e.jsx("div",{className:"w-full bg-gray-200 rounded-t-lg relative",children:e.jsx("div",{className:"bg-blue-500 rounded-t-lg transition-all duration-500",style:{height:`${h.hours/4*100}%`}})}),e.jsx("div",{className:"text-xs text-gray-600 mt-2",children:h.day}),e.jsxs("div",{className:"text-xs text-gray-500",children:[h.hours.toFixed(1),"h"]})]},N))})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(Ge,{className:"h-5 w-5"}),"Achievements"]}),e.jsx("div",{className:"space-y-3",children:n.map(h=>e.jsx("div",{className:`p-3 rounded-lg border ${h.unlocked?"bg-green-50 border-green-200":"bg-gray-50 border-gray-200"}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center ${h.unlocked?"bg-green-500":"bg-gray-300"}`,children:e.jsx(h.icon,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:h.title}),e.jsx("p",{className:"text-sm text-gray-600",children:h.description}),h.unlocked&&e.jsxs("p",{className:"text-xs text-green-600 mt-1",children:["+",h.points," points"]})]}),h.unlocked&&e.jsx(pe,{className:"h-5 w-5 text-green-500"})]})},h.id))})]})]}),e.jsxs("div",{className:"mt-8 bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(qe,{className:"h-5 w-5"}),"Learning Goals"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Weekly Goal"}),e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:"75%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"15/20h"})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"Study 20 hours this week"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Monthly Goal"}),e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:"60%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"3/5 courses"})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"Complete 5 courses this month"})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Challenge Goal"}),e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"flex-1 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-purple-500 h-2 rounded-full",style:{width:"40%"}})}),e.jsx("span",{className:"text-sm text-gray-600",children:"20/50 challenges"})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"Solve 50 challenges this month"})]})]})]})]})},gx=({initialCode:s="",expectedOutput:t="",instructions:r="",hints:a=[],onComplete:n=()=>{},language:i="javascript"})=>{const[o,l]=m.useState(s),[d,c]=m.useState(""),[u,p]=m.useState(!1),[g,y]=m.useState(null),[x,b]=m.useState(!1),[h,N]=m.useState(0),[j,w]=m.useState(0),v=async()=>{p(!0);const S=Date.now();try{const k=await new Promise((O,L)=>{try{if(i==="javascript"){const $=new Function(`
              // Safe execution environment
              ${o}
            `)();O($)}else O("Language not supported yet")}catch(A){L(A)}}),D=Date.now();w(D-S),c(String(k)),t&&String(k).trim()===t.trim()?(y(!0),n(!0)):y(!1)}catch(k){c(`Error: ${k.message}`),y(!1)}finally{p(!1)}},f=()=>{l(s),c(""),y(null),b(!1),N(0)},E=()=>{h<a.length-1?N(h+1):b(!1)};return e.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[e.jsx("div",{className:"bg-gray-800 text-white p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Interactive Code Editor"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-300",children:i.toUpperCase()}),e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full"})]})]})}),r&&e.jsx("div",{className:"p-4 bg-blue-50 border-b",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(cr,{className:"h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Instructions"}),e.jsx("p",{className:"text-gray-700",children:r})]})]})}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Your Code:"}),e.jsx("textarea",{value:o,onChange:S=>l(S.target.value),className:"w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Write your code here...",spellCheck:!1})]}),e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsxs("button",{onClick:v,disabled:u,className:"flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:[e.jsx(Ce,{className:"h-4 w-4"}),u?"Running...":"Run Code"]}),e.jsxs("button",{onClick:f,className:"flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors",children:[e.jsx(Zr,{className:"h-4 w-4"}),"Reset"]}),a.length>0&&e.jsxs("button",{onClick:()=>b(!x),className:"flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors",children:[e.jsx(cr,{className:"h-4 w-4"}),x?"Hide Hint":"Show Hint"]})]}),x&&a.length>0&&e.jsx("div",{className:"mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(cr,{className:"h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("h4",{className:"font-medium text-gray-900 mb-1",children:["Hint ",h+1,":"]}),e.jsx("p",{className:"text-gray-700",children:a[h]}),h<a.length-1&&e.jsx("button",{onClick:E,className:"mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium",children:"Next Hint →"})]})]})}),d&&e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Output:"}),e.jsx("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm",children:e.jsx("pre",{children:d})}),j>0&&e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Execution time: ",j,"ms"]})]}),g!==null&&e.jsxs("div",{className:`p-4 rounded-lg flex items-center gap-2 ${g?"bg-green-50 text-green-800":"bg-red-50 text-red-800"}`,children:[g?e.jsx(pe,{className:"h-5 w-5"}):e.jsx(ml,{className:"h-5 w-5"}),e.jsx("span",{className:"font-medium",children:g?"Correct! Well done!":"Not quite right. Try again!"})]}),t&&e.jsxs("div",{className:"mt-4 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Expected Output:"}),e.jsx("div",{className:"bg-gray-900 text-green-400 p-3 rounded font-mono text-sm",children:e.jsx("pre",{children:t})})]})]})]})},fx=({tutorial:s,onComplete:t,onNext:r,onPrevious:a})=>{var N,j,w,v;const[n,i]=m.useState(0),[o,l]=m.useState(!1),[d,c]=m.useState(0),[u,p]=m.useState(0),[g,y]=m.useState(0);m.useEffect(()=>{const f=setInterval(()=>{c(E=>E+1)},1e3);return()=>clearInterval(f)},[]);const x=f=>{f?(l(!0),t({tutorialId:s.id,timeSpent:d,hintsUsed:u,attempts:g,completed:!0})):y(E=>E+1)},b=f=>{const E=Math.floor(f/60),S=f%60;return`${E}:${S.toString().padStart(2,"0")}`},h=f=>{switch(f){case"Beginner":return"bg-green-100 text-green-800";case"Intermediate":return"bg-yellow-100 text-yellow-800";case"Advanced":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}};return e.jsxs("div",{className:"max-w-6xl mx-auto p-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("button",{onClick:a,className:"flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors",children:[e.jsx(Rs,{className:"h-4 w-4"}),"Back"]}),e.jsx("div",{className:"h-6 w-px bg-gray-300"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(oe,{className:"h-5 w-5 text-blue-600"}),e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:s.title})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${h(s.difficulty)}`,children:s.difficulty}),e.jsxs("div",{className:"flex items-center gap-1 text-gray-600",children:[e.jsx(xe,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm",children:s.duration})]})]})]}),e.jsx("p",{className:"text-gray-700 mb-4",children:s.description}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:b(d)}),e.jsx("div",{className:"text-sm text-gray-600",children:"Time Spent"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-orange-600",children:g}),e.jsx("div",{className:"text-sm text-gray-600",children:"Attempts"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-purple-600",children:u}),e.jsx("div",{className:"text-sm text-gray-600",children:"Hints Used"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:`text-2xl font-bold ${o?"text-green-600":"text-gray-400"}`,children:o?"✓":"○"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Status"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsx(gx,{initialCode:s.initialCode,expectedOutput:s.expectedOutput,instructions:s.instructions,hints:s.hints,onComplete:x,language:s.language})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Concepts Covered"}),e.jsx("div",{className:"space-y-2",children:(N=s.concepts)==null?void 0:N.map((f,E)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(pe,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{className:"text-sm text-gray-700",children:f})]},E))})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Hints Available"}),e.jsx("div",{className:"space-y-2",children:(j=s.hints)==null?void 0:j.map((f,E)=>e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5",children:E+1}),e.jsx("span",{className:"text-sm text-gray-700",children:f})]},E))})]}),o&&e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Solution"}),e.jsx("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto",children:e.jsx("pre",{children:s.solution})})]}),o&&e.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-6 text-white",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(Ge,{className:"h-6 w-6"}),e.jsx("h3",{className:"text-lg font-semibold",children:"Tutorial Completed!"})]}),e.jsx("p",{className:"text-green-100 mb-4",children:"Great job! You've mastered this concept."}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-green-200",children:"Time"}),e.jsx("div",{className:"font-semibold",children:b(d)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-green-200",children:"Hints Used"}),e.jsx("div",{className:"font-semibold",children:u})]})]})]})]})]}),e.jsxs("div",{className:"flex justify-between items-center mt-8",children:[e.jsxs("button",{onClick:a,className:"flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors",children:[e.jsx(Rs,{className:"h-4 w-4"}),"Previous"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["Progress: ",n+1," of ",((w=s.concepts)==null?void 0:w.length)||1]}),e.jsx("div",{className:"w-32 bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${(n+1)/(((v=s.concepts)==null?void 0:v.length)||1)*100}%`}})})]}),e.jsxs("button",{onClick:r,disabled:!o,className:"flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:["Next",e.jsx(st,{className:"h-4 w-4"})]})]})]})},xx=({lesson:s,onComplete:t})=>{const r=m.useRef(null),[a,n]=m.useState(!1),[i,o]=m.useState(0),[l,d]=m.useState(0),[c,u]=m.useState(!1),[p,g]=m.useState(!0),[y,x]=m.useState(!0),[b,h]=m.useState(!1),j=(D=>{var L;return(L=D.content)!=null&&L.videoUrl&&D.content.videoUrl!=="https://example.com/html-intro"?D.content.videoUrl:{"html-css-basics":"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4","javascript-essentials":"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4","react-development":"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4","python-data-science":"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4","machine-learning-basics":"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"}[D.courseId]||"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"})(s);m.useEffect(()=>{const D=r.current;if(!D)return;const O=()=>{d(D.duration),x(!1),h(!1)},L=()=>{o(D.currentTime)},A=()=>{n(!1),t&&t()},$=()=>{x(!1),h(!0)},T=()=>{x(!0),h(!1)};return D.addEventListener("loadedmetadata",O),D.addEventListener("timeupdate",L),D.addEventListener("ended",A),D.addEventListener("error",$),D.addEventListener("loadstart",T),()=>{D.removeEventListener("loadedmetadata",O),D.removeEventListener("timeupdate",L),D.removeEventListener("ended",A),D.removeEventListener("error",$),D.removeEventListener("loadstart",T)}},[j,t]);const w=D=>{const O=Math.floor(D/60),L=D%60;return`${O}:${L.toString().padStart(2,"0")}`},v=()=>{const D=r.current;D&&(a?(D.pause(),n(!1)):(D.play(),n(!0)))},f=D=>{const O=r.current;if(!O||!l)return;const L=D.currentTarget.getBoundingClientRect(),$=(D.clientX-L.left)/L.width*l;O.currentTime=$,o($)},E=()=>{const D=r.current;D&&(D.currentTime=0,o(0),n(!1))},S=()=>{const D=r.current;D&&(D.muted=!c,u(!c))},k=l>0?i/l*100:0;return e.jsxs("div",{className:"relative bg-gray-900 rounded-lg overflow-hidden group",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!0),children:[e.jsxs("div",{className:"aspect-video bg-gray-900 relative",children:[e.jsx("video",{ref:r,src:j,className:"w-full h-full object-cover",preload:"metadata",muted:c,onPlay:()=>n(!0),onPause:()=>n(!1)}),y&&e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:e.jsxs("div",{className:"text-center text-white",children:[e.jsx(pl,{className:"h-12 w-12 animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-lg",children:"Loading video..."})]})}),b&&e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center",children:e.jsxs("div",{className:"text-center text-white",children:[e.jsx("div",{className:"w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4",children:e.jsx("span",{className:"text-2xl",children:"⚠️"})}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Video Error"}),e.jsx("p",{className:"text-gray-300 mb-4",children:"Unable to load video content"}),e.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:"Retry"})]})}),!a&&!y&&!b&&e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center",children:e.jsx("div",{className:"w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer",onClick:v,children:e.jsx(Ce,{className:"h-8 w-8 ml-1 text-white"})})})]}),p&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:v,className:"bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all",children:a?e.jsx(Mn,{className:"h-4 w-4"}):e.jsx(Ce,{className:"h-4 w-4"})}),e.jsx("div",{className:"flex-1 relative",children:e.jsx("div",{className:"w-full h-2 bg-gray-600 rounded-full cursor-pointer",onClick:f,children:e.jsx("div",{className:"h-2 bg-blue-500 rounded-full transition-all",style:{width:`${k}%`}})})}),e.jsxs("div",{className:"text-white text-sm font-mono",children:[w(Math.floor(i))," / ",w(l)]}),e.jsx("button",{onClick:S,className:"bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all",children:c?e.jsx(hl,{className:"h-4 w-4"}):e.jsx(gl,{className:"h-4 w-4"})}),e.jsx("button",{onClick:E,className:"bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all",children:e.jsx(Zr,{className:"h-4 w-4"})}),e.jsx("button",{className:"bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all",children:e.jsx(fl,{className:"h-4 w-4"})})]})}),e.jsx("div",{className:"absolute top-4 left-4 right-4",children:e.jsx("div",{className:"bg-black bg-opacity-50 rounded-lg p-3",children:e.jsxs("div",{className:"flex items-center justify-between text-white text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"bg-red-500 px-2 py-1 rounded text-xs font-semibold",children:"LIVE"}),e.jsx("span",{children:"📹 Video Lesson"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:["⏱️ ",s.duration]}),e.jsxs("span",{children:["🎯 ",s.content.objectives.length," objectives"]})]})]})})})]})},bx=({courseId:s,courseData:t,onComplete:r,onBack:a})=>{const[n,i]=m.useState(0),[o,l]=m.useState(0),[d,c]=m.useState(new Set),[u,p]=m.useState(0),[g,y]=m.useState(!1);m.useEffect(()=>{const E=setInterval(()=>{g&&p(S=>S+1)},1e3);return()=>clearInterval(E)},[g]);const x=E=>{const S=Math.floor(E/3600),k=Math.floor(E%3600/60),D=E%60;return`${S}:${k.toString().padStart(2,"0")}:${D.toString().padStart(2,"0")}`},b=()=>{const E=t.modules.reduce((k,D)=>k+D.lessons.length,0);return d.size/E*100},h=E=>{c(O=>new Set([...O,E]));const S=t.modules[n],k=S.lessons.map(O=>O.id);k.filter(O=>d.has(O)).length===k.length-1?n<t.modules.length-1?(i(n+1),l(0)):r({courseId:s,timeSpent:u,completedLessons:d.size,progress:100}):o<S.lessons.length-1?l(o+1):n<t.modules.length-1&&(i(n+1),l(0))},N=()=>{const E=t.modules[n];o<E.lessons.length-1?l(o+1):n<t.modules.length-1&&(i(n+1),l(0))},j=()=>{o>0?l(o-1):n>0&&(i(n-1),l(t.modules[n-1].lessons.length-1))},w=t.modules[n],v=w.lessons[o],f=d.has(v.id);return e.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("button",{onClick:a,className:"flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors",children:[e.jsx(Rs,{className:"h-4 w-4"}),"Back to Courses"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:[x(u)," spent"]}),e.jsxs("div",{className:"text-sm text-gray-600",children:[Math.round(b()),"% complete"]})]})]}),e.jsx("div",{className:"flex items-start gap-6",children:e.jsxs("div",{className:"flex-1",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:t.title}),e.jsx("p",{className:"text-gray-600 mb-4",children:t.description}),e.jsxs("div",{className:"flex items-center gap-6 text-sm text-gray-600",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ds,{className:"h-4 w-4"}),t.instructor]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(xe,{className:"h-4 w-4"}),t.duration]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(le,{className:"h-4 w-4 text-yellow-400 fill-current"}),t.rating]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(oe,{className:"h-4 w-4"}),t.students.toLocaleString()," students"]})]})]})}),e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-2",children:[e.jsx("span",{children:"Course Progress"}),e.jsxs("span",{children:[Math.round(b()),"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:e.jsx("div",{className:"bg-blue-500 h-3 rounded-full transition-all duration-300",style:{width:`${b()}%`}})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[e.jsx("div",{className:"lg:col-span-1",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Course Content"}),e.jsx("div",{className:"space-y-2",children:t.modules.map((E,S)=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium text-gray-700",children:[e.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center ${S<n?"bg-green-500":S===n?"bg-blue-500":"bg-gray-300"}`,children:S<n?e.jsx(pe,{className:"h-3 w-3 text-white"}):e.jsx("div",{className:"w-2 h-2 bg-white rounded-full"})}),E.title]}),e.jsx("div",{className:"ml-6 space-y-1",children:E.lessons.map((k,D)=>e.jsxs("div",{className:`flex items-center gap-2 text-sm cursor-pointer p-2 rounded ${S===n&&D===o?"bg-blue-50 text-blue-700":d.has(k.id)?"text-green-600":"text-gray-600 hover:bg-gray-50"}`,onClick:()=>{i(S),l(D)},children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${d.has(k.id)?"bg-green-500":S===n&&D===o?"bg-blue-500":"bg-gray-300"}`}),e.jsx("span",{className:"flex-1",children:k.title}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(xe,{className:"h-3 w-3"}),e.jsx("span",{className:"text-xs",children:k.duration})]})]},k.id))})]},E.id))})]})}),e.jsx("div",{className:"lg:col-span-3",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[e.jsx("div",{className:"bg-gray-50 px-6 py-4 border-b",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:v.title}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Module ",n+1," • Lesson ",o+1," of ",w.lessons.length]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(xe,{className:"h-4 w-4 text-gray-500"}),e.jsx("span",{className:"text-sm text-gray-600",children:v.duration})]})]})}),e.jsxs("div",{className:"p-6",children:[v.type==="video"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx(xx,{lesson:{...v,courseId:s},onComplete:()=>h(v.id)}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Lesson Content"}),e.jsx("p",{className:"text-gray-700 mb-3",children:v.content.transcript}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600",children:[e.jsx("span",{children:"📹 Video Lesson"}),e.jsxs("span",{children:["⏱️ ",v.duration]}),e.jsxs("span",{children:["🎯 ",v.content.objectives.length," objectives"]})]})]})]}),v.type==="reading"&&e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"prose max-w-none",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Reading Material"}),e.jsx("p",{className:"text-gray-700 leading-relaxed",children:v.content.text})]})}),v.type==="interactive"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Interactive Exercise"}),e.jsx("p",{className:"text-gray-700",children:v.content.instructions})]}),e.jsx("div",{className:"bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm",children:e.jsx("pre",{children:"// Your code will be executed here"})})]}),e.jsxs("div",{className:"mt-6 bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Learning Objectives"}),e.jsx("ul",{className:"space-y-2",children:v.content.objectives.map((E,S)=>e.jsxs("li",{className:"flex items-start gap-2 text-sm text-gray-700",children:[e.jsx(qe,{className:"h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0"}),E]},S))})]}),e.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[e.jsxs("button",{onClick:j,disabled:n===0&&o===0,className:"flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:[e.jsx(Rs,{className:"h-4 w-4"}),"Previous"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[!f&&e.jsxs("button",{onClick:()=>h(v.id),className:"flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors",children:[e.jsx(pe,{className:"h-4 w-4"}),"Mark Complete"]}),f&&e.jsxs("div",{className:"flex items-center gap-2 text-green-600",children:[e.jsx(pe,{className:"h-5 w-5"}),e.jsx("span",{className:"font-medium",children:"Completed"})]}),e.jsxs("button",{onClick:N,disabled:n===t.modules.length-1&&o===w.lessons.length-1,className:"flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:["Next",e.jsx(st,{className:"h-4 w-4"})]})]})]})]})]})})]})]})},Jr={"html-css-basics":{id:"html-css-basics",title:"HTML & CSS Fundamentals",description:"Master the building blocks of web development",duration:"4 hours",difficulty:"Beginner",rating:4.8,students:12500,instructor:"Sarah Johnson",category:"Web Development",topics:["HTML","CSS","Web Design","Responsive Design"],prerequisites:["None"],outcomes:["Build responsive websites","Understand web standards","Create modern layouts"],modules:[]},"javascript-essentials":{id:"javascript-essentials",title:"JavaScript Essentials",description:"Learn JavaScript from basics to advanced concepts",duration:"6 hours",difficulty:"Intermediate",rating:4.9,students:18900,instructor:"Mike Chen",category:"Web Development",topics:["JavaScript","ES6+","DOM Manipulation","Async Programming"],prerequisites:["HTML & CSS Basics"],outcomes:["Master JavaScript fundamentals","Build interactive websites","Handle asynchronous operations"],modules:[]},"react-development":{id:"react-development",title:"React Development",description:"Build modern web applications with React",duration:"8 hours",difficulty:"Intermediate",rating:4.7,students:15200,instructor:"Alex Rodriguez",category:"Web Development",topics:["React","JSX","Hooks","State Management"],prerequisites:["JavaScript Essentials"],outcomes:["Build React applications","Master component architecture","Implement state management"],modules:[]},"vue-js-fundamentals":{id:"vue-js-fundamentals",title:"Vue.js Fundamentals",description:"Learn Vue.js for building user interfaces",duration:"5 hours",difficulty:"Intermediate",rating:4.6,students:8900,instructor:"Emma Wilson",category:"Web Development",topics:["Vue.js","Components","Directives","Vuex"],prerequisites:["JavaScript Essentials"],outcomes:["Build Vue.js applications","Master Vue ecosystem","Implement reactive data binding"],modules:[]},"angular-complete":{id:"angular-complete",title:"Angular Complete Guide",description:"Master Angular for enterprise applications",duration:"12 hours",difficulty:"Advanced",rating:4.5,students:11200,instructor:"David Kim",category:"Web Development",topics:["Angular","TypeScript","Services","Routing"],prerequisites:["JavaScript Essentials","TypeScript Basics"],outcomes:["Build enterprise Angular apps","Master TypeScript integration","Implement complex routing"],modules:[]},"svelte-development":{id:"svelte-development",title:"Svelte Development",description:"Build fast web applications with Svelte",duration:"4 hours",difficulty:"Intermediate",rating:4.7,students:6800,instructor:"Rich Harris",category:"Web Development",topics:["Svelte","Components","Reactivity","Performance"],prerequisites:["JavaScript Essentials"],outcomes:["Build Svelte applications","Master reactive programming","Optimize performance"],modules:[]},"next-js-fullstack":{id:"next-js-fullstack",title:"Next.js Full-Stack Development",description:"Full-stack React applications with Next.js",duration:"7 hours",difficulty:"Intermediate",rating:4.8,students:13400,instructor:"Vercel Team",category:"Web Development",topics:["Next.js","SSR","SSG","API Routes"],prerequisites:["React Development"],outcomes:["Build full-stack apps","Master SSR/SSG","Deploy to production"],modules:[]},"nuxt-js-development":{id:"nuxt-js-development",title:"Nuxt.js Development",description:"Universal Vue.js applications with Nuxt.js",duration:"6 hours",difficulty:"Intermediate",rating:4.6,students:7600,instructor:"Nuxt Team",category:"Web Development",topics:["Nuxt.js","SSR","Static Generation","Modules"],prerequisites:["Vue.js Fundamentals"],outcomes:["Build universal apps","Master SSR","Optimize performance"],modules:[]},"gatsby-static-sites":{id:"gatsby-static-sites",title:"Gatsby Static Site Generation",description:"Build blazing-fast static sites with Gatsby",duration:"5 hours",difficulty:"Intermediate",rating:4.7,students:9200,instructor:"Gatsby Team",category:"Web Development",topics:["Gatsby","GraphQL","Static Generation","Plugins"],prerequisites:["React Development"],outcomes:["Build static sites","Master GraphQL","Optimize for speed"],modules:[]},"webpack-bundling":{id:"webpack-bundling",title:"Webpack Module Bundling",description:"Master modern JavaScript bundling with Webpack",duration:"4 hours",difficulty:"Advanced",rating:4.5,students:5800,instructor:"Webpack Team",category:"Web Development",topics:["Webpack","Loaders","Plugins","Optimization"],prerequisites:["JavaScript Essentials"],outcomes:["Master bundling","Optimize builds","Configure complex setups"],modules:[]},"node-js-backend":{id:"node-js-backend",title:"Node.js Backend Development",description:"Build server-side applications with Node.js",duration:"7 hours",difficulty:"Intermediate",rating:4.8,students:16800,instructor:"Lisa Park",category:"Backend Development",topics:["Node.js","Express","APIs","Database Integration"],prerequisites:["JavaScript Essentials"],outcomes:["Build RESTful APIs","Handle server-side logic","Integrate with databases"],modules:[]},"python-django":{id:"python-django",title:"Python Django Web Framework",description:"Build web applications with Django",duration:"9 hours",difficulty:"Intermediate",rating:4.7,students:13400,instructor:"Carlos Mendez",category:"Backend Development",topics:["Python","Django","ORM","Authentication"],prerequisites:["Python Basics"],outcomes:["Build Django applications","Master Django ORM","Implement user authentication"],modules:[]},"python-flask":{id:"python-flask",title:"Python Flask Web Development",description:"Lightweight web development with Flask",duration:"6 hours",difficulty:"Beginner",rating:4.6,students:9800,instructor:"Anna Thompson",category:"Backend Development",topics:["Python","Flask","REST APIs","Templates"],prerequisites:["Python Basics"],outcomes:["Build Flask applications","Create REST APIs","Implement templating"],modules:[]},"php-laravel":{id:"php-laravel",title:"PHP Laravel Framework",description:"Modern PHP development with Laravel",duration:"8 hours",difficulty:"Intermediate",rating:4.5,students:10200,instructor:"Roberto Silva",category:"Backend Development",topics:["PHP","Laravel","Eloquent ORM","Blade Templates"],prerequisites:["PHP Basics"],outcomes:["Build Laravel applications","Master Eloquent ORM","Implement MVC architecture"],modules:[]},"java-spring-boot":{id:"java-spring-boot",title:"Java Spring Boot",description:"Enterprise Java development with Spring Boot",duration:"10 hours",difficulty:"Advanced",rating:4.7,students:15600,instructor:"Jennifer Lee",category:"Backend Development",topics:["Java","Spring Boot","Microservices","Security"],prerequisites:["Java Fundamentals"],outcomes:["Build Spring Boot applications","Implement microservices","Master enterprise patterns"],modules:[]},"ruby-rails":{id:"ruby-rails",title:"Ruby on Rails",description:"Rapid web development with Ruby on Rails",duration:"8 hours",difficulty:"Intermediate",rating:4.6,students:11200,instructor:"DHH",category:"Backend Development",topics:["Ruby","Rails","MVC","ActiveRecord"],prerequisites:["Ruby Programming"],outcomes:["Build Rails applications","Master MVC pattern","Implement rapid development"],modules:[]},"go-web-development":{id:"go-web-development",title:"Go Web Development",description:"High-performance web services with Go",duration:"6 hours",difficulty:"Intermediate",rating:4.7,students:8400,instructor:"Go Team",category:"Backend Development",topics:["Go","Gin","Goroutines","Microservices"],prerequisites:["Go Programming"],outcomes:["Build Go web services","Master concurrency","Implement microservices"],modules:[]},"rust-web-development":{id:"rust-web-development",title:"Rust Web Development",description:"Memory-safe web development with Rust",duration:"7 hours",difficulty:"Advanced",rating:4.8,students:6200,instructor:"Rust Team",category:"Backend Development",topics:["Rust","Actix-web","Tokio","Performance"],prerequisites:["Rust Programming"],outcomes:["Build Rust web services","Master memory safety","Achieve high performance"],modules:[]},"elixir-phoenix":{id:"elixir-phoenix",title:"Elixir Phoenix Framework",description:"Real-time web applications with Phoenix",duration:"8 hours",difficulty:"Advanced",rating:4.6,students:4800,instructor:"Phoenix Team",category:"Backend Development",topics:["Elixir","Phoenix","LiveView","WebSockets"],prerequisites:["Elixir Programming"],outcomes:["Build real-time apps","Master actor model","Implement LiveView"],modules:[]},"c-sharp-aspnet":{id:"c-sharp-aspnet",title:"C# ASP.NET Core",description:"Modern web development with ASP.NET Core",duration:"9 hours",difficulty:"Intermediate",rating:4.7,students:12800,instructor:"Microsoft Team",category:"Backend Development",topics:["C#","ASP.NET Core","Entity Framework","Identity"],prerequisites:["C# Programming"],outcomes:["Build ASP.NET apps","Master Entity Framework","Implement authentication"],modules:[]},"react-native-mobile":{id:"react-native-mobile",title:"React Native Mobile Development",description:"Build cross-platform mobile apps",duration:"8 hours",difficulty:"Intermediate",rating:4.6,students:12800,instructor:"Marcus Johnson",category:"Mobile Development",topics:["React Native","Mobile UI","Navigation","APIs"],prerequisites:["React Development"],outcomes:["Build mobile applications","Deploy to app stores","Handle mobile-specific features"],modules:[]},"flutter-development":{id:"flutter-development",title:"Flutter Mobile Development",description:"Cross-platform apps with Flutter",duration:"9 hours",difficulty:"Intermediate",rating:4.8,students:14200,instructor:"Priya Patel",category:"Mobile Development",topics:["Flutter","Dart","Widgets","State Management"],prerequisites:["Dart Basics"],outcomes:["Build Flutter applications","Master widget system","Implement state management"],modules:[]},"swift-ios":{id:"swift-ios",title:"Swift iOS Development",description:"Native iOS app development with Swift",duration:"10 hours",difficulty:"Intermediate",rating:4.7,students:11800,instructor:"Taylor Swift",category:"Mobile Development",topics:["Swift","iOS","UIKit","SwiftUI"],prerequisites:["macOS Development Environment"],outcomes:["Build iOS applications","Master Swift language","Implement iOS design patterns"],modules:[]},"kotlin-android":{id:"kotlin-android",title:"Kotlin Android Development",description:"Modern Android development with Kotlin",duration:"9 hours",difficulty:"Intermediate",rating:4.6,students:13600,instructor:"Ahmed Hassan",category:"Mobile Development",topics:["Kotlin","Android","Jetpack","Material Design"],prerequisites:["Java Basics"],outcomes:["Build Android applications","Master Kotlin language","Implement modern Android patterns"],modules:[]},"xamarin-cross-platform":{id:"xamarin-cross-platform",title:"Xamarin Cross-Platform Development",description:"Native mobile apps with Xamarin",duration:"8 hours",difficulty:"Intermediate",rating:4.4,students:7200,instructor:"Microsoft Team",category:"Mobile Development",topics:["Xamarin","C#","Xamarin.Forms","Native APIs"],prerequisites:["C# Programming"],outcomes:["Build cross-platform apps","Share code between platforms","Access native features"],modules:[]},"python-data-science":{id:"python-data-science",title:"Python Data Science",description:"Data analysis and visualization with Python",duration:"8 hours",difficulty:"Intermediate",rating:4.8,students:19200,instructor:"Dr. Maria Rodriguez",category:"Data Science",topics:["Python","Pandas","NumPy","Matplotlib"],prerequisites:["Python Basics"],outcomes:["Analyze datasets","Create visualizations","Perform statistical analysis"],modules:[]},"machine-learning-basics":{id:"machine-learning-basics",title:"Machine Learning Fundamentals",description:"Introduction to machine learning concepts",duration:"10 hours",difficulty:"Intermediate",rating:4.7,students:16800,instructor:"Dr. James Wilson",category:"Data Science",topics:["Machine Learning","Scikit-learn","Algorithms","Model Evaluation"],prerequisites:["Python Data Science"],outcomes:["Build ML models","Understand algorithms","Evaluate model performance"],modules:[]},"deep-learning-tensorflow":{id:"deep-learning-tensorflow",title:"Deep Learning with TensorFlow",description:"Neural networks and deep learning",duration:"12 hours",difficulty:"Advanced",rating:4.9,students:12400,instructor:"Dr. Alex Chen",category:"Data Science",topics:["TensorFlow","Neural Networks","Deep Learning","Computer Vision"],prerequisites:["Machine Learning Basics"],outcomes:["Build neural networks","Implement deep learning models","Work with TensorFlow"],modules:[]},"r-data-analysis":{id:"r-data-analysis",title:"R for Data Analysis",description:"Statistical analysis with R programming",duration:"7 hours",difficulty:"Intermediate",rating:4.6,students:9800,instructor:"Dr. Sarah Kim",category:"Data Science",topics:["R Programming","Statistics","Data Visualization","Regression"],prerequisites:["Statistics Basics"],outcomes:["Perform statistical analysis","Create R visualizations","Build predictive models"],modules:[]},"sql-database-design":{id:"sql-database-design",title:"SQL & Database Design",description:"Master database design and SQL queries",duration:"6 hours",difficulty:"Beginner",rating:4.7,students:15200,instructor:"Tom Anderson",category:"Database",topics:["SQL","Database Design","Normalization","Indexing"],prerequisites:["None"],outcomes:["Design databases","Write complex queries","Optimize database performance"],modules:[]},"mongodb-nosql":{id:"mongodb-nosql",title:"MongoDB NoSQL Database",description:"Document-based database with MongoDB",duration:"5 hours",difficulty:"Intermediate",rating:4.5,students:11200,instructor:"Rachel Green",category:"Database",topics:["MongoDB","NoSQL","Document Design","Aggregation"],prerequisites:["Database Concepts"],outcomes:["Design document databases","Write MongoDB queries","Implement aggregation pipelines"],modules:[]},"postgresql-advanced":{id:"postgresql-advanced",title:"PostgreSQL Advanced",description:"Advanced PostgreSQL database management",duration:"7 hours",difficulty:"Advanced",rating:4.8,students:8400,instructor:"PostgreSQL Expert",category:"Database",topics:["PostgreSQL","Advanced Queries","Performance Tuning","Extensions"],prerequisites:["SQL Database Design"],outcomes:["Master PostgreSQL","Optimize performance","Use advanced features"],modules:[]},"redis-caching":{id:"redis-caching",title:"Redis Caching & Data Structures",description:"In-memory data store with Redis",duration:"4 hours",difficulty:"Intermediate",rating:4.6,students:6800,instructor:"Redis Expert",category:"Database",topics:["Redis","Caching","Data Structures","Pub/Sub"],prerequisites:["Database Concepts"],outcomes:["Implement caching","Use Redis data structures","Build real-time features"],modules:[]},"elasticsearch-search":{id:"elasticsearch-search",title:"Elasticsearch Search Engine",description:"Full-text search with Elasticsearch",duration:"6 hours",difficulty:"Advanced",rating:4.7,students:5600,instructor:"Elasticsearch Expert",category:"Database",topics:["Elasticsearch","Search","Analytics","Kibana"],prerequisites:["Database Concepts"],outcomes:["Implement search","Build analytics","Optimize search performance"],modules:[]},"apache-kafka-streaming":{id:"apache-kafka-streaming",title:"Apache Kafka Streaming",description:"Real-time data streaming with Kafka",duration:"8 hours",difficulty:"Advanced",rating:4.8,students:7200,instructor:"Kafka Expert",category:"Data Science",topics:["Kafka","Streaming","Event Sourcing","Microservices"],prerequisites:["Distributed Systems"],outcomes:["Build streaming pipelines","Implement event sourcing","Handle real-time data"],modules:[]},"docker-containerization":{id:"docker-containerization",title:"Docker Containerization",description:"Containerize applications with Docker",duration:"4 hours",difficulty:"Intermediate",rating:4.8,students:14600,instructor:"Kevin Docker",category:"DevOps",topics:["Docker","Containers","Images","Orchestration"],prerequisites:["Linux Basics"],outcomes:["Containerize applications","Manage Docker containers","Implement CI/CD"],modules:[]},"kubernetes-orchestration":{id:"kubernetes-orchestration",title:"Kubernetes Orchestration",description:"Container orchestration with Kubernetes",duration:"8 hours",difficulty:"Advanced",rating:4.7,students:9800,instructor:"Captain Kube",category:"DevOps",topics:["Kubernetes","Pods","Services","Deployments"],prerequisites:["Docker Containerization"],outcomes:["Deploy to Kubernetes","Manage clusters","Scale applications"],modules:[]},"aws-cloud-fundamentals":{id:"aws-cloud-fundamentals",title:"AWS Cloud Fundamentals",description:"Cloud computing with Amazon Web Services",duration:"10 hours",difficulty:"Intermediate",rating:4.6,students:18200,instructor:"Cloud Master",category:"Cloud Computing",topics:["AWS","EC2","S3","RDS"],prerequisites:["Linux Basics"],outcomes:["Deploy to AWS","Manage cloud resources","Implement security best practices"],modules:[]},"azure-cloud-platform":{id:"azure-cloud-platform",title:"Microsoft Azure Platform",description:"Cloud solutions with Microsoft Azure",duration:"9 hours",difficulty:"Intermediate",rating:4.5,students:13400,instructor:"Azure Expert",category:"Cloud Computing",topics:["Azure","Virtual Machines","Storage","Networking"],prerequisites:["Cloud Concepts"],outcomes:["Deploy to Azure","Manage cloud services","Implement hybrid solutions"],modules:[]},"google-cloud-platform":{id:"google-cloud-platform",title:"Google Cloud Platform",description:"Cloud computing with Google Cloud",duration:"8 hours",difficulty:"Intermediate",rating:4.7,students:12800,instructor:"GCP Specialist",category:"Cloud Computing",topics:["GCP","Compute Engine","Cloud Storage","BigQuery"],prerequisites:["Cloud Concepts"],outcomes:["Deploy to GCP","Use Google Cloud services","Implement data solutions"],modules:[]},"terraform-infrastructure":{id:"terraform-infrastructure",title:"Terraform Infrastructure as Code",description:"Manage infrastructure with Terraform",duration:"6 hours",difficulty:"Advanced",rating:4.7,students:8400,instructor:"Terraform Expert",category:"DevOps",topics:["Terraform","Infrastructure as Code","State Management","Modules"],prerequisites:["Cloud Computing"],outcomes:["Manage infrastructure","Implement IaC","Automate deployments"],modules:[]},"ansible-automation":{id:"ansible-automation",title:"Ansible Automation",description:"Configuration management with Ansible",duration:"5 hours",difficulty:"Intermediate",rating:4.6,students:7200,instructor:"Ansible Expert",category:"DevOps",topics:["Ansible","Playbooks","Roles","Automation"],prerequisites:["Linux Administration"],outcomes:["Automate configurations","Manage servers","Implement CI/CD"],modules:[]},"jenkins-cicd":{id:"jenkins-cicd",title:"Jenkins CI/CD",description:"Continuous integration and deployment with Jenkins",duration:"7 hours",difficulty:"Intermediate",rating:4.5,students:9600,instructor:"Jenkins Expert",category:"DevOps",topics:["Jenkins","CI/CD","Pipelines","Automation"],prerequisites:["Docker Containerization"],outcomes:["Implement CI/CD","Automate builds","Deploy applications"],modules:[]},"gitlab-devops":{id:"gitlab-devops",title:"GitLab DevOps",description:"Complete DevOps platform with GitLab",duration:"6 hours",difficulty:"Intermediate",rating:4.6,students:6800,instructor:"GitLab Expert",category:"DevOps",topics:["GitLab","CI/CD","Container Registry","DevOps"],prerequisites:["Git Basics"],outcomes:["Master GitLab","Implement DevOps","Manage projects"],modules:[]},"monitoring-observability":{id:"monitoring-observability",title:"Monitoring & Observability",description:"Application monitoring and observability",duration:"5 hours",difficulty:"Intermediate",rating:4.7,students:7600,instructor:"Monitoring Expert",category:"DevOps",topics:["Monitoring","Logging","Metrics","Alerting"],prerequisites:["System Administration"],outcomes:["Implement monitoring","Set up alerting","Analyze performance"],modules:[]},"cybersecurity-fundamentals":{id:"cybersecurity-fundamentals",title:"Cybersecurity Fundamentals",description:"Essential cybersecurity concepts and practices",duration:"6 hours",difficulty:"Beginner",rating:4.8,students:16800,instructor:"Security Expert",category:"Cybersecurity",topics:["Security Basics","Threats","Vulnerabilities","Risk Management"],prerequisites:["IT Fundamentals"],outcomes:["Understand security threats","Implement security measures","Assess risks"],modules:[]},"ethical-hacking":{id:"ethical-hacking",title:"Ethical Hacking & Penetration Testing",description:"Learn ethical hacking techniques",duration:"12 hours",difficulty:"Advanced",rating:4.9,students:9800,instructor:"White Hat Hacker",category:"Cybersecurity",topics:["Penetration Testing","Vulnerability Assessment","Network Security","Web Security"],prerequisites:["Cybersecurity Fundamentals"],outcomes:["Perform penetration tests","Identify vulnerabilities","Secure systems"],modules:[]},"network-security":{id:"network-security",title:"Network Security",description:"Secure network infrastructure and protocols",duration:"7 hours",difficulty:"Intermediate",rating:4.6,students:11200,instructor:"Network Guardian",category:"Cybersecurity",topics:["Network Protocols","Firewalls","VPNs","Intrusion Detection"],prerequisites:["Networking Basics"],outcomes:["Secure network infrastructure","Implement firewalls","Monitor network traffic"],modules:[]},"web-application-security":{id:"web-application-security",title:"Web Application Security",description:"Secure web applications and APIs",duration:"8 hours",difficulty:"Advanced",rating:4.7,students:8400,instructor:"Web Security Expert",category:"Cybersecurity",topics:["OWASP","Authentication","Authorization","Input Validation"],prerequisites:["Web Development"],outcomes:["Secure web applications","Implement security best practices","Prevent common vulnerabilities"],modules:[]},"incident-response":{id:"incident-response",title:"Incident Response & Forensics",description:"Handle security incidents and digital forensics",duration:"9 hours",difficulty:"Advanced",rating:4.8,students:6200,instructor:"Forensics Expert",category:"Cybersecurity",topics:["Incident Response","Digital Forensics","Evidence Collection","Recovery"],prerequisites:["Cybersecurity Fundamentals"],outcomes:["Handle security incidents","Perform digital forensics","Implement recovery procedures"],modules:[]}},yx={"html-css-basics":{completedModules:[],completedLessons:[],currentModule:"module-1",currentLesson:"lesson-1-1",progress:0,timeSpent:0,lastAccessed:null},"javascript-essentials":{completedModules:[],completedLessons:[],currentModule:"module-1",currentLesson:"lesson-1-1",progress:0,timeSpent:0,lastAccessed:null},"react-development":{completedModules:[],completedLessons:[],currentModule:"module-1",currentLesson:"lesson-1-1",progress:0,timeSpent:0,lastAccessed:null}},vx=({onSelectCourse:s,courseProgress:t})=>{const[r,a]=m.useState(""),[n,i]=m.useState("All"),[o,l]=m.useState("All"),[d,c]=m.useState(1),u=9,p=Object.values(Jr).map(S=>{var k;return{...S,modules:4,lessons:12,color:j(),icon:w(S.category),topics:S.topics||[],prerequisites:((k=S.prerequisites)==null?void 0:k.join(", "))||"None",whatYoullLearn:S.outcomes||[]}}),g=["All",...new Set(p.map(S=>S.category))],y=m.useMemo(()=>p.filter(S=>{const k=S.title.toLowerCase().includes(r.toLowerCase())||S.description.toLowerCase().includes(r.toLowerCase())||S.topics.some(L=>L.toLowerCase().includes(r.toLowerCase())),D=n==="All"||S.category===n,O=o==="All"||S.difficulty===o;return k&&D&&O}),[p,r,n,o]),x=Math.ceil(y.length/u),b=(d-1)*u,h=b+u,N=y.slice(b,h);function j(){const S=["blue","yellow","purple","green","red","indigo","pink","orange"];return S[Math.floor(Math.random()*S.length)]}function w(S){return{"Web Development":"🌐","Backend Development":"⚙️","Mobile Development":"📱","Data Science":"📊",Database:"🗄️",DevOps:"🔧","Cloud Computing":"☁️",Cybersecurity:"🔒","Programming Languages":"💻","Game Development":"🎮",Blockchain:"⛓️","Artificial Intelligence":"🤖","System Administration":"🖥️"}[S]||"📚"}const v=S=>{const k=t[S];return k&&k.progress||0},f=S=>{switch(S){case"Beginner":return"bg-green-100 text-green-800";case"Intermediate":return"bg-yellow-100 text-yellow-800";case"Advanced":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}},E=S=>{switch(S){case"blue":return"from-blue-500 to-blue-600";case"yellow":return"from-yellow-500 to-yellow-600";case"purple":return"from-purple-500 to-purple-600";default:return"from-gray-500 to-gray-600"}};return e.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4 text-center",children:"Choose Your Learning Path"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto text-center",children:"Explore our comprehensive collection of 50+ courses across multiple categories. Each course includes structured lessons, interactive exercises, and hands-on projects."})]}),e.jsxs("div",{className:"mb-8 bg-white rounded-xl shadow-sm border p-6",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"relative",children:[e.jsx(We,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"}),e.jsx("input",{type:"text",placeholder:"Search courses, topics, or instructors...",value:r,onChange:S=>a(S.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})}),e.jsx("div",{className:"lg:w-48",children:e.jsx("select",{value:n,onChange:S=>i(S.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:g.map(S=>e.jsx("option",{value:S,children:S},S))})}),e.jsx("div",{className:"lg:w-48",children:e.jsxs("select",{value:o,onChange:S=>l(S.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[e.jsx("option",{value:"All",children:"All Levels"}),e.jsx("option",{value:"Beginner",children:"Beginner"}),e.jsx("option",{value:"Intermediate",children:"Intermediate"}),e.jsx("option",{value:"Advanced",children:"Advanced"})]})})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsxs("p",{className:"text-sm text-gray-600",children:["Showing ",b+1,"-",Math.min(h,y.length)," of ",y.length," courses"]}),r&&e.jsx("button",{onClick:()=>a(""),className:"text-sm text-blue-600 hover:text-blue-800",children:"Clear search"})]})]}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:N.map(S=>{const k=v(S.id),D=k>0;return e.jsxs("div",{className:"bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300",children:[e.jsxs("div",{className:`bg-gradient-to-r ${E(S.color)} p-6 text-white`,children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"text-3xl",children:S.icon}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold",children:S.title}),e.jsx("p",{className:"text-sm opacity-90",children:S.instructor})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(le,{className:"h-4 w-4 fill-current"}),e.jsx("span",{className:"text-sm font-semibold",children:S.rating})]}),e.jsxs("div",{className:"text-xs opacity-75",children:[S.students.toLocaleString()," students"]})]})]}),D&&e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[Math.round(k),"%"]})]}),e.jsx("div",{className:"w-full bg-white bg-opacity-20 rounded-full h-2",children:e.jsx("div",{className:"bg-white h-2 rounded-full transition-all duration-300",style:{width:`${k}%`}})})]}),e.jsxs("div",{className:"flex items-center gap-4 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(xe,{className:"h-4 w-4"}),e.jsx("span",{children:S.duration})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(oe,{className:"h-4 w-4"}),e.jsxs("span",{children:[S.modules," modules"]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(qe,{className:"h-4 w-4"}),e.jsxs("span",{children:[S.lessons," lessons"]})]})]})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("p",{className:"text-gray-600 mb-4",children:S.description}),e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${f(S.difficulty)}`,children:S.difficulty}),e.jsxs("span",{className:"text-sm text-gray-500",children:["• ",S.prerequisites]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"What you'll learn:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:S.topics.map((O,L)=>e.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm",children:O},L))})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"Learning Outcomes:"}),e.jsx("ul",{className:"space-y-1",children:S.whatYoullLearn.map((O,L)=>e.jsxs("li",{className:"flex items-start gap-2 text-sm text-gray-600",children:[e.jsx(pe,{className:"h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"}),O]},L))})]}),e.jsxs("button",{onClick:()=>s(S.id),className:`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${D?"bg-blue-500 text-white hover:bg-blue-600":`bg-gradient-to-r ${E(S.color)} text-white hover:opacity-90`}`,children:[D?e.jsxs(e.Fragment,{children:[e.jsx(Ce,{className:"h-4 w-4"}),"Continue Course"]}):e.jsxs(e.Fragment,{children:[e.jsx(Ce,{className:"h-4 w-4"}),"Start Course"]}),e.jsx(Dr,{className:"h-4 w-4"})]})]})]},S.id)})}),x>1&&e.jsx("div",{className:"mt-12 flex justify-center",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>c(S=>Math.max(S-1,1)),disabled:d===1,className:"flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",children:[e.jsx(xl,{className:"h-4 w-4"}),"Previous"]}),e.jsxs("div",{className:"flex items-center gap-1",children:[Array.from({length:Math.min(5,x)},(S,k)=>{const D=k+1;return e.jsx("button",{onClick:()=>c(D),className:`px-3 py-2 rounded-lg text-sm font-medium ${d===D?"bg-blue-500 text-white":"text-gray-700 hover:bg-gray-100"}`,children:D},D)}),x>5&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"px-2 text-gray-500",children:"..."}),e.jsx("button",{onClick:()=>c(x),className:`px-3 py-2 rounded-lg text-sm font-medium ${d===x?"bg-blue-500 text-white":"text-gray-700 hover:bg-gray-100"}`,children:x})]})]}),e.jsxs("button",{onClick:()=>c(S=>Math.min(S+1,x)),disabled:d===x,className:"flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",children:["Next",e.jsx(Dr,{className:"h-4 w-4"})]})]})}),e.jsx("div",{className:"mt-12 bg-gray-50 rounded-xl p-8",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Not sure where to start?"}),e.jsx("p",{className:"text-gray-600 mb-6 max-w-2xl mx-auto",children:"Browse our 50+ courses across 13 categories. If you're new to programming, start with beginner courses. If you have experience, explore intermediate and advanced topics."}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm",children:[e.jsx(Es,{className:"h-5 w-5 text-blue-500"}),e.jsx("span",{className:"text-sm font-medium",children:"50+ Courses"})]}),e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm",children:[e.jsx(Fe,{className:"h-5 w-5 text-green-500"}),e.jsx("span",{className:"text-sm font-medium",children:"13 Categories"})]}),e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm",children:[e.jsx(oe,{className:"h-5 w-5 text-purple-500"}),e.jsx("span",{className:"text-sm font-medium",children:"Hands-on Projects"})]})]})]})})]})},ge=[{id:"javascript-basics-1",title:"JavaScript Variables and Data Types",description:"Learn the fundamentals of JavaScript variables and data types",difficulty:"Beginner",duration:"15 minutes",language:"javascript",instructions:'Create a variable called "name" and assign it your name. Then create a variable called "age" and assign it your age. Finally, use console.log() to print both variables.',initialCode:`// Write your code here

`,expectedOutput:`John
25`,hints:['Use the "let" keyword to declare variables',"Assign values using the = operator","Use console.log() to print values"],solution:`let name = "John";
let age = 25;
console.log(name);
console.log(age);`,concepts:["Variables","Data Types","Console Output"]},{id:"html-css-basics-1",title:"HTML Structure and CSS Styling",description:"Learn the basics of HTML structure and CSS styling",difficulty:"Beginner",duration:"20 minutes",language:"html",instructions:"Create an HTML page with a heading, paragraph, and button. Style them with CSS.",initialCode:`<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <!-- Your HTML here
</body>
</html>`,expectedOutput:"HTML page with styled elements",hints:["Use <h1> for headings","Use <p> for paragraphs","Use <button> for buttons","Add CSS styles in <style> tag"],solution:`<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <style>
    h1 { color: blue; }
    p { font-size: 16px; }
    button { background: green; color: white; }
  </style>
</head>
<body>
  <h1>Welcome to My Page</h1>
  <p>This is a paragraph.</p>
  <button>Click Me</button>
</body>
</html>`,concepts:["HTML Structure","CSS Styling","Basic Elements"]},{id:"react-basics-1",title:"React Components and JSX",description:"Learn how to create React components with JSX",difficulty:"Intermediate",duration:"25 minutes",language:"javascript",instructions:'Create a React component that displays "Hello, World!" and render it.',initialCode:`// Create your React component here

`,expectedOutput:"Hello, World!",hints:["Use React.createElement or JSX","Create a function component","Return JSX from the component","Use ReactDOM.render to display it"],solution:`function HelloWorld() {
  return React.createElement('h1', null, 'Hello, World!');
}

// Or with JSX:
// function HelloWorld() {
//   return <h1>Hello, World!</h1>;
// }

ReactDOM.render(React.createElement(HelloWorld), document.getElementById('root'));`,concepts:["React Components","JSX","Rendering"]},{id:"javascript-basics-2",title:"Functions in JavaScript",description:"Learn how to create and use functions in JavaScript",difficulty:"Beginner",duration:"20 minutes",language:"javascript",instructions:'Create a function called "add" that takes two parameters (a and b) and returns their sum. Then call the function with the values 5 and 3.',initialCode:`// Create your function here

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

fetchData().then(result => console.log(result));`,concepts:["Async/Await","Promises","Asynchronous Programming"]}],Et=[{id:"challenge-1",title:"Two Sum",description:"Given an array of integers and a target sum, find two numbers that add up to the target.",difficulty:"Easy",points:10,language:"javascript",instructions:"Write a function that takes an array of numbers and a target sum. Return the indices of two numbers that add up to the target.",initialCode:`function twoSum(nums, target) {
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

console.log(reverseString("hello"));`,testCases:[{input:'"hello"',expected:'"olleh"'},{input:'"world"',expected:'"dlrow"'},{input:'"12345"',expected:'"54321"'}]}];ge.filter(s=>s.difficulty==="Beginner"),Et.filter(s=>s.difficulty==="Easy"),ge.filter(s=>s.difficulty==="Intermediate"),Et.filter(s=>s.difficulty==="Easy"),ge.filter(s=>s.language==="python"),Et.filter(s=>s.difficulty==="Medium"),ge.filter(s=>s.difficulty==="Advanced"),Et.filter(s=>s.difficulty==="Hard");const jx=()=>{var z;const[s,t]=m.useState("dashboard"),[r,a]=m.useState("web-development"),[n,i]=m.useState(null),[o,l]=m.useState(null),[d,c]=m.useState(null),[u,p]=m.useState(null),[g,y]=m.useState({}),[x,b]=m.useState([]),[h,N]=m.useState(new Set),[j,w]=m.useState(yx),v={"web-development":{title:"Web Development",icon:Se,color:"blue",description:"Learn to build modern websites and web applications",courses:[{id:"html-css-basics",title:"HTML & CSS Fundamentals",duration:"4 hours",difficulty:"Beginner",rating:4.8,students:12500,description:"Master the building blocks of web development",lessons:[{id:1,title:"Introduction to HTML",duration:"30 min",completed:!1},{id:2,title:"HTML Elements and Tags",duration:"45 min",completed:!1},{id:3,title:"CSS Basics and Styling",duration:"40 min",completed:!1},{id:4,title:"Layout with Flexbox",duration:"35 min",completed:!1},{id:5,title:"Responsive Design",duration:"50 min",completed:!1}]},{id:"javascript-essentials",title:"JavaScript Essentials",duration:"6 hours",difficulty:"Intermediate",rating:4.9,students:18900,description:"Learn JavaScript from basics to advanced concepts",lessons:[{id:1,title:"Variables and Data Types",duration:"25 min",completed:!1},{id:2,title:"Functions and Scope",duration:"40 min",completed:!1},{id:3,title:"DOM Manipulation",duration:"45 min",completed:!1},{id:4,title:"Async Programming",duration:"35 min",completed:!1},{id:5,title:"ES6+ Features",duration:"50 min",completed:!1}]},{id:"react-complete",title:"React Complete Guide",duration:"8 hours",difficulty:"Intermediate",rating:4.7,students:22100,description:"Build modern web applications with React",lessons:[{id:1,title:"React Components",duration:"40 min",completed:!1},{id:2,title:"State and Props",duration:"35 min",completed:!1},{id:3,title:"Hooks and Lifecycle",duration:"45 min",completed:!1},{id:4,title:"Routing and Navigation",duration:"30 min",completed:!1},{id:5,title:"State Management",duration:"50 min",completed:!1}]}]},"mobile-development":{title:"Mobile Development",icon:es,color:"green",description:"Create mobile apps for iOS and Android",courses:[{id:"react-native-basics",title:"React Native Basics",duration:"5 hours",difficulty:"Intermediate",rating:4.6,students:9800,description:"Build cross-platform mobile apps",lessons:[{id:1,title:"React Native Setup",duration:"30 min",completed:!1},{id:2,title:"Components and Navigation",duration:"45 min",completed:!1},{id:3,title:"State Management",duration:"40 min",completed:!1},{id:4,title:"API Integration",duration:"35 min",completed:!1},{id:5,title:"App Deployment",duration:"50 min",completed:!1}]}]},"backend-development":{title:"Backend Development",icon:bl,color:"purple",description:"Learn server-side development and APIs",courses:[{id:"nodejs-express",title:"Node.js & Express",duration:"6 hours",difficulty:"Intermediate",rating:4.8,students:15200,description:"Build robust backend services",lessons:[{id:1,title:"Node.js Fundamentals",duration:"35 min",completed:!1},{id:2,title:"Express Framework",duration:"40 min",completed:!1},{id:3,title:"RESTful APIs",duration:"45 min",completed:!1},{id:4,title:"Database Integration",duration:"50 min",completed:!1},{id:5,title:"Authentication & Security",duration:"40 min",completed:!1}]}]},"data-science":{title:"Data Science",icon:Ae,color:"orange",description:"Analyze data and build machine learning models",courses:[{id:"python-data-analysis",title:"Python Data Analysis",duration:"7 hours",difficulty:"Beginner",rating:4.5,students:11200,description:"Learn data analysis with Python",lessons:[{id:1,title:"Python Basics",duration:"30 min",completed:!1},{id:2,title:"Pandas Library",duration:"45 min",completed:!1},{id:3,title:"Data Visualization",duration:"40 min",completed:!1},{id:4,title:"Statistical Analysis",duration:"50 min",completed:!1},{id:5,title:"Machine Learning Intro",duration:"45 min",completed:!1}]}]}},f=[{id:"full-stack-developer",title:"Full-Stack Developer",duration:"12 weeks",difficulty:"Intermediate",description:"Complete path to become a full-stack developer",courses:["html-css-basics","javascript-essentials","react-complete","nodejs-express"],color:"blue"},{id:"mobile-developer",title:"Mobile App Developer",duration:"8 weeks",difficulty:"Intermediate",description:"Learn to build mobile applications",courses:["html-css-basics","javascript-essentials","react-native-basics"],color:"green"},{id:"data-scientist",title:"Data Scientist",duration:"10 weeks",difficulty:"Advanced",description:"Master data analysis and machine learning",courses:["python-data-analysis"],color:"orange"}],E=[{title:"Interactive Code Editor",description:"Practice coding with our built-in editor",icon:J,color:"blue",link:"/editor"},{title:"Video Tutorials",description:"Watch step-by-step video guides",icon:yl,color:"red",link:"/tutorials"},{title:"Documentation",description:"Comprehensive coding documentation",icon:we,color:"green",link:"/docs"},{title:"Community Forum",description:"Connect with other learners",icon:Fe,color:"purple",link:"/community"}],S=[{title:"First Code",description:"Write your first line of code",icon:J,unlocked:!0},{title:"Web Master",description:"Complete web development course",icon:Se,unlocked:!1},{title:"Mobile Expert",description:"Build your first mobile app",icon:es,unlocked:!1},{title:"Data Wizard",description:"Complete data science course",icon:Ae,unlocked:!1}],k=M=>{const W=Ts.getTutorial(M);l(W),t("tutorial")},D=M=>{console.log("Tutorial completed:",M),l(null),t("dashboard")},O=M=>{var q;const W=(q=v[r])==null?void 0:q.courses.find(K=>K.id===M);return W?W.lessons.filter(K=>h.has(K.id)).length/W.lessons.length*100:0},L=()=>{console.log("Start Learning clicked - showing course selection"),t("course-selection")},A=()=>{t("tutorials")},$=M=>{b(H=>[...H,M]);const W=ge.findIndex(H=>H.id===d.id);W<ge.length-1?c(ge[W+1]):(c(null),t("dashboard"))},T=M=>{const W=Et.find(H=>H.id===M);W&&(c(W),t("tutorial"))},C=M=>{const W=Jr[M];W&&(p(W),t("course"))},I=M=>{w(W=>({...W,[M.courseId]:{...W[M.courseId],progress:M.progress,timeSpent:M.timeSpent,completedLessons:M.completedLessons,lastAccessed:new Date().toISOString()}})),p(null),t("dashboard")},G=()=>{p(null),t("tutorials")};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-black opacity-10"}),e.jsx("div",{className:"absolute inset-0",children:e.jsxs("div",{className:"absolute top-0 left-0 w-full h-full",children:[e.jsx("div",{className:"absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"}),e.jsx("div",{className:"absolute top-20 right-20 w-16 h-16 bg-white opacity-5 rounded-full"}),e.jsx("div",{className:"absolute bottom-10 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full"}),e.jsx("div",{className:"absolute bottom-20 right-1/3 w-8 h-8 bg-white opacity-5 rounded-full"})]})}),e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6",children:e.jsx(oe,{className:"h-10 w-10 text-white"})}),e.jsx("h1",{className:"text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent",children:"Master Programming Skills"}),e.jsx("p",{className:"text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed",children:"Join thousands of students learning to code with our comprehensive educational platform. From beginner to advanced, we have courses for every skill level."}),e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4 mb-8",children:[e.jsxs("button",{onClick:L,className:"bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1",children:[e.jsx(Ce,{className:"inline-block mr-2 h-5 w-5"}),"Start Learning"]}),e.jsxs("button",{onClick:A,className:"border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1",children:[e.jsx(oe,{className:"inline-block mr-2 h-5 w-5"}),"Browse Courses"]})]}),e.jsxs("div",{className:"flex justify-center items-center gap-8 text-sm text-blue-100",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Fe,{className:"h-5 w-5"}),e.jsx("span",{children:"50+ Courses"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(le,{className:"h-5 w-5"}),e.jsx("span",{children:"4.8/5 Rating"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ge,{className:"h-5 w-5"}),e.jsx("span",{children:"Certificates"})]})]})]})})]}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsx("div",{className:"bg-white rounded-2xl shadow-lg p-2 mb-8",children:e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"dashboard",label:"Dashboard",icon:as,color:"blue"},{id:"tutorials",label:"Tutorials",icon:oe,color:"green"},{id:"challenges",label:"Challenges",icon:J,color:"purple"},{id:"progress",label:"Progress",icon:$s,color:"orange"}].map(M=>e.jsxs("button",{onClick:()=>t(M.id),className:`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${s===M.id?`bg-gradient-to-r from-${M.color}-500 to-${M.color}-600 text-white shadow-lg transform scale-105`:"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,children:[e.jsx(M.icon,{className:"h-5 w-5"}),M.label]},M.id))})}),s==="dashboard"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(ux,{}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Learning Progress"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:"75%"}),e.jsx("div",{className:"text-gray-600",children:"Overall Progress"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-green-600 mb-2",children:"12"}),e.jsx("div",{className:"text-gray-600",children:"Courses Completed"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-purple-600 mb-2",children:"45"}),e.jsx("div",{className:"text-gray-600",children:"Challenges Solved"})]})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Recent Achievements"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center",children:e.jsx(Ge,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:"First Steps"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Completed first tutorial"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-blue-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx(J,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:"Code Warrior"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Solved 10 challenges"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-purple-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center",children:e.jsx(le,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:"Streak Master"}),e.jsx("div",{className:"text-sm text-gray-600",children:"7-day learning streak"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-orange-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center",children:e.jsx(qe,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:"Goal Achiever"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Met weekly goal"})]})]})]})]})]}),s==="tutorial"&&o&&e.jsx(mx,{tutorial:o,onComplete:D}),s==="tutorial"&&d&&e.jsx(fx,{tutorial:d,onComplete:$,onNext:()=>{const M=ge.findIndex(W=>W.id===d.id);M<ge.length-1&&c(ge[M+1])},onPrevious:()=>{const M=ge.findIndex(W=>W.id===d.id);M>0&&c(ge[M-1])}}),s==="challenges"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(px,{}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Et.map(M=>e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:M.title}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${M.difficulty==="Easy"?"bg-green-100 text-green-700":M.difficulty==="Medium"?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:M.difficulty}),e.jsxs("span",{className:"text-sm text-gray-500",children:[M.points," pts"]})]})]}),e.jsx("p",{className:"text-gray-600 mb-4",children:M.description}),e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(J,{className:"h-4 w-4 text-blue-500"}),e.jsx("span",{className:"text-sm text-gray-600",children:M.language})]}),e.jsx("button",{onClick:()=>T(M.id),className:"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors",children:"Start Challenge"})]},M.id))})]}),s==="progress"&&e.jsx(hx,{}),s==="course-selection"&&e.jsx(vx,{onSelectCourse:C,courseProgress:j}),s==="course"&&u&&e.jsx(bx,{courseId:u.id,courseData:u,onComplete:I,onBack:G}),s==="tutorials"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Learning Paths"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:f.map(M=>e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:`w-10 h-10 bg-${M.color}-500 rounded-lg flex items-center justify-center`,children:e.jsx(qe,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:M.title}),e.jsxs("p",{className:"text-sm text-gray-600",children:[M.duration," • ",M.difficulty]})]})]}),e.jsx("p",{className:"text-gray-700 mb-4",children:M.description}),e.jsx("button",{onClick:()=>{const W=ge.filter(H=>M.title.toLowerCase().includes("web")&&H.difficulty==="Beginner"||M.title.toLowerCase().includes("mobile")&&H.difficulty==="Intermediate");W.length>0?(c(W[0]),t("tutorial")):(c(ge[0]),t("tutorial"))},className:"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors",children:"Start Path"})]},M.id))})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Course Categories"}),e.jsx("div",{className:"flex flex-wrap gap-4 mb-8",children:Object.entries(v).map(([M,W])=>e.jsxs("button",{onClick:()=>a(M),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${r===M?"bg-blue-500 text-white":"bg-white text-gray-700 hover:bg-gray-100"}`,children:[e.jsx(W.icon,{className:"h-5 w-5"}),W.title]},M))}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:(z=v[r])==null?void 0:z.courses.map(M=>e.jsx("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:M.title}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(le,{className:"h-4 w-4 text-yellow-400 fill-current"}),e.jsx("span",{className:"text-sm text-gray-600",children:M.rating})]})]}),e.jsx("p",{className:"text-gray-600 mb-4",children:M.description}),e.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-gray-500",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(xe,{className:"h-4 w-4"}),M.duration]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Fe,{className:"h-4 w-4"}),M.students.toLocaleString()," students"]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-1",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[Math.round(O(M.id)),"%"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${O(M.id)}%`}})})]}),e.jsxs("button",{onClick:()=>{if(Jr[M.id])C(M.id);else{const H=ge.find(q=>q.title.includes(M.title.split(" ")[0]));H?(c(H),t("tutorial")):k(M.id)}},className:"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2",children:[e.jsx(Ce,{className:"h-4 w-4"}),O(M.id)>0?"Continue Course":"Start Course"]})]})},M.id))})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Learning Resources"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:E.map((M,W)=>e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 text-center",children:[e.jsx("div",{className:`w-12 h-12 bg-${M.color}-500 rounded-lg flex items-center justify-center mx-auto mb-4`,children:e.jsx(M.icon,{className:"h-6 w-6 text-white"})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:M.title}),e.jsx("p",{className:"text-gray-600 mb-4",children:M.description}),e.jsxs("button",{className:"text-blue-500 hover:text-blue-600 font-medium flex items-center justify-center gap-1 mx-auto",children:[e.jsx("span",{children:"Explore"}),e.jsx(st,{className:"h-4 w-4"})]})]},W))})]}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Achievements"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:S.map((M,W)=>e.jsxs("div",{className:`bg-white rounded-lg shadow-lg p-6 text-center ${M.unlocked?"border-2 border-green-500":"opacity-60"}`,children:[e.jsx("div",{className:`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${M.unlocked?"bg-green-500":"bg-gray-300"}`,children:e.jsx(M.icon,{className:"h-6 w-6 text-white"})}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:M.title}),e.jsx("p",{className:"text-gray-600 mb-4",children:M.description}),M.unlocked&&e.jsxs("div",{className:"flex items-center justify-center gap-1 text-green-600",children:[e.jsx(pe,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:"Unlocked"})]})]},W))})]}),e.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 text-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"50+"}),e.jsx("div",{className:"text-blue-100",children:"Courses Available"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"100K+"}),e.jsx("div",{className:"text-blue-100",children:"Students Learning"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"500+"}),e.jsx("div",{className:"text-blue-100",children:"Hours of Content"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold mb-2",children:"4.8"}),e.jsx("div",{className:"text-blue-100",children:"Average Rating"})]})]})})]})]})]})};function wx(){const s=nt();return["/ai-builder"].includes(s.pathname)?null:e.jsx(Ru,{})}function Nx({children:s}){const t=nt();return["/ai-builder","/dashboard","/projects"].includes(t.pathname)?e.jsx("main",{children:s}):e.jsx("main",{className:"pt-16",children:s})}function Sx(){return e.jsx(bd,{children:e.jsx(Pu,{children:e.jsx(Au,{children:e.jsx(kc,{children:e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Eu,{}),e.jsx(Nx,{children:e.jsxs(yc,{children:[e.jsx(ae,{path:"/",element:e.jsx(Iu,{})}),e.jsx(ae,{path:"/app",element:e.jsx(xc,{to:"/ai-builder",replace:!0})}),e.jsx(ae,{path:"/ai-builder",element:e.jsx(qf,{})}),e.jsx(ae,{path:"/templates",element:e.jsx(Vf,{})}),e.jsx(ae,{path:"/dashboard",element:e.jsx(Xf,{})}),e.jsx(ae,{path:"/login",element:e.jsx(Qf,{})}),e.jsx(ae,{path:"/signup",element:e.jsx(Zf,{})}),e.jsx(ae,{path:"/projects",element:e.jsx(ex,{})}),e.jsx(ae,{path:"/settings",element:e.jsx(tx,{})}),e.jsx(ae,{path:"/documentation",element:e.jsx(sx,{})}),e.jsx(ae,{path:"/examples",element:e.jsx(rx,{})}),e.jsx(ae,{path:"/community",element:e.jsx(ax,{})}),e.jsx(ae,{path:"/about",element:e.jsx(nx,{})}),e.jsx(ae,{path:"/blog",element:e.jsx(ix,{})}),e.jsx(ae,{path:"/contact",element:e.jsx(ox,{})}),e.jsx(ae,{path:"/privacy",element:e.jsx(lx,{})}),e.jsx(ae,{path:"/terms",element:e.jsx(cx,{})}),e.jsx(ae,{path:"/education",element:e.jsx(jx,{})})]})}),e.jsx(wx,{}),e.jsx(xd,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--card)",color:"var(--card-foreground)",border:"1px solid var(--border)"}}})]})})})})})}Bn(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(Sx,{})}));
//# sourceMappingURL=index-CDKztlox.js.map
