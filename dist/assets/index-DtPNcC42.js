import{initializeApp as Po}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";import{getAuth as Eo,signInWithPopup as Io,GithubAuthProvider as Ro,GoogleAuthProvider as Oo}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";import{r as p,a as Lo,b as Fo,R as ze,g as Mo}from"./react-vendor-DWvC8KHc.js";import{_ as $o,C as Bo,r as Cn,S as _o,F as Uo,g as ks,a as Mr,b as Ho,c as zo,d as Go,i as Ts,e as Da,f as Pa,o as Ea,h as Qt,j as Y,s as Wo,G as qo,k as kn,l as pe,m as Vo,n as Jo,q as Se,p as De,w as Ae,t as Nr,u as Fe,v as ls,x as Ft,y as Tn,z as Yo,A as Ko}from"./firebase-C6jQElOd.js";import{_ as He}from"./monaco-editor-BWpThiUx.js";import{S as jt,R as Ee,C as Q,G as Vs,B as xt,D as tt,U as Ge,M as Xo,a as Qo,b as As,L as An,X as Js,c as Zo,d as he,T as Ys,e as Mt,f as Ks,m as R,g as Ia,Z as $t,F as Me,P as Bt,h as Ot,i as Ra,j as We,k as el,l as Oa,A as Ze,n as sr,o as at,p as La,q as Xs,r as bt,s as tl,t as Pe,u as Fa,v as _t,w as rl,x as sl,y as $r,z as nl,E as al,H as rt,I as Pr,J as il,K as ol,N as ke,O as cs,Q as Er,V as ll,W as cl,Y as _e,_ as dl,$ as ul,a0 as Qs,a1 as Zs,a2 as Ma,a3 as ye,a4 as qe,a5 as Br,a6 as ml,a7 as Ie,a8 as Ir,a9 as $a,aa as pl,ab as Ba,ac as en,ad as hl,ae as gl,af as fl,ag as or,ah as xl,ai as ht,aj as _a,ak as bl,al as tn,am as yl,an as ds,ao as Ds,ap as Ps,aq as gt,ar as vl,as as wl,at as jl,au as Nl,av as Sl}from"./ui-vendor-Cw9QSdXK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const Cl={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"},Ua=Po(Cl),kl=Eo(Ua);window.firebase={auth:()=>kl,GoogleAuthProvider:Oo,GithubAuthProvider:Ro,signInWithPopup:Io};window.firebaseApp=Ua;console.log("Firebase loaded globally with providers:",!!window.firebase);var Ha={exports:{}},_r={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tl=p,Al=Symbol.for("react.element"),Dl=Symbol.for("react.fragment"),Pl=Object.prototype.hasOwnProperty,El=Tl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Il={key:!0,ref:!0,__self:!0,__source:!0};function za(s,t,r){var n,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Pl.call(t,n)&&!Il.hasOwnProperty(n)&&(a[n]=t[n]);if(s&&s.defaultProps)for(n in t=s.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Al,type:s,key:i,ref:o,props:a,_owner:El.current}}_r.Fragment=Dl;_r.jsx=za;_r.jsxs=za;Ha.exports=_r;var e=Ha.exports,Ga,Dn=Lo;Ga=Dn.createRoot,Dn.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nr(){return nr=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},nr.apply(this,arguments)}var et;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(et||(et={}));const Pn="popstate";function Rl(s){s===void 0&&(s={});function t(n,a){let{pathname:i,search:o,hash:l}=n.location;return Es("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:Rr(a)}return Ll(t,r,null,s)}function ne(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Wa(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ol(){return Math.random().toString(36).substr(2,8)}function En(s,t){return{usr:s.state,key:s.key,idx:t}}function Es(s,t,r,n){return r===void 0&&(r=null),nr({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof t=="string"?Ht(t):t,{state:r,key:t&&t.key||n||Ol()})}function Rr(s){let{pathname:t="/",search:r="",hash:n=""}=s;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ht(s){let t={};if(s){let r=s.indexOf("#");r>=0&&(t.hash=s.substr(r),s=s.substr(0,r));let n=s.indexOf("?");n>=0&&(t.search=s.substr(n),s=s.substr(0,n)),s&&(t.pathname=s)}return t}function Ll(s,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:i=!1}=n,o=a.history,l=et.Pop,d=null,c=u();c==null&&(c=0,o.replaceState(nr({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function m(){l=et.Pop;let h=u(),k=h==null?null:h-c;c=h,d&&d({action:l,location:f.location,delta:k})}function b(h,k){l=et.Push;let j=Es(f.location,h,k);c=u()+1;let v=En(j,c),w=f.createHref(j);try{o.pushState(v,"",w)}catch(g){if(g instanceof DOMException&&g.name==="DataCloneError")throw g;a.location.assign(w)}i&&d&&d({action:l,location:f.location,delta:1})}function y(h,k){l=et.Replace;let j=Es(f.location,h,k);c=u();let v=En(j,c),w=f.createHref(j);o.replaceState(v,"",w),i&&d&&d({action:l,location:f.location,delta:0})}function x(h){let k=a.location.origin!=="null"?a.location.origin:a.location.href,j=typeof h=="string"?h:Rr(h);return j=j.replace(/ $/,"%20"),ne(k,"No window.location.(origin|href) available to create URL for href: "+j),new URL(j,k)}let f={get action(){return l},get location(){return s(a,o)},listen(h){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Pn,m),d=h,()=>{a.removeEventListener(Pn,m),d=null}},createHref(h){return t(a,h)},createURL:x,encodeLocation(h){let k=x(h);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:b,replace:y,go(h){return o.go(h)}};return f}var In;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(In||(In={}));function Fl(s,t,r){return r===void 0&&(r="/"),Ml(s,t,r)}function Ml(s,t,r,n){let a=typeof t=="string"?Ht(t):t,i=rn(a.pathname||"/",r);if(i==null)return null;let o=qa(s);$l(o);let l=null;for(let d=0;l==null&&d<o.length;++d){let c=Kl(i);l=Vl(o[d],c)}return l}function qa(s,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(i,o,l)=>{let d={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};d.relativePath.startsWith("/")&&(ne(d.relativePath.startsWith(n),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(n.length));let c=st([n,d.relativePath]),u=r.concat(d);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),qa(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Wl(c,i.index),routesMeta:u})};return s.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let d of Va(i.path))a(i,o,d)}),t}function Va(s){let t=s.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return a?[i,""]:[i];let o=Va(n.join("/")),l=[];return l.push(...o.map(d=>d===""?i:[i,d].join("/"))),a&&l.push(...o),l.map(d=>s.startsWith("/")&&d===""?"/":d)}function $l(s){s.sort((t,r)=>t.score!==r.score?r.score-t.score:ql(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Bl=/^:[\w-]+$/,_l=3,Ul=2,Hl=1,zl=10,Gl=-2,Rn=s=>s==="*";function Wl(s,t){let r=s.split("/"),n=r.length;return r.some(Rn)&&(n+=Gl),t&&(n+=Ul),r.filter(a=>!Rn(a)).reduce((a,i)=>a+(Bl.test(i)?_l:i===""?Hl:zl),n)}function ql(s,t){return s.length===t.length&&s.slice(0,-1).every((n,a)=>n===t[a])?s[s.length-1]-t[t.length-1]:0}function Vl(s,t,r){let{routesMeta:n}=s,a={},i="/",o=[];for(let l=0;l<n.length;++l){let d=n[l],c=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",m=Jl({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},u),b=d.route;if(!m)return null;Object.assign(a,m.params),o.push({params:a,pathname:st([i,m.pathname]),pathnameBase:ec(st([i,m.pathnameBase])),route:b}),m.pathnameBase!=="/"&&(i=st([i,m.pathnameBase]))}return o}function Jl(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[r,n]=Yl(s.path,s.caseSensitive,s.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:n.reduce((c,u,m)=>{let{paramName:b,isOptional:y}=u;if(b==="*"){let f=l[m]||"";o=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}const x=l[m];return y&&!x?c[b]=void 0:c[b]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:s}}function Yl(s,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Wa(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let n=[],a="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,d)=>(n.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(n.push({paramName:"*"}),a+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":s!==""&&s!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Kl(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Wa(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),s}}function rn(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=s.charAt(r);return n&&n!=="/"?null:s.slice(r)||"/"}function Xl(s,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof s=="string"?Ht(s):s;return{pathname:r?r.startsWith("/")?r:Ql(r,t):t,search:tc(n),hash:rc(a)}}function Ql(s,t){let r=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function us(s,t,r,n){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zl(s){return s.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function sn(s,t){let r=Zl(s);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function nn(s,t,r,n){n===void 0&&(n=!1);let a;typeof s=="string"?a=Ht(s):(a=nr({},s),ne(!a.pathname||!a.pathname.includes("?"),us("?","pathname","search",a)),ne(!a.pathname||!a.pathname.includes("#"),us("#","pathname","hash",a)),ne(!a.search||!a.search.includes("#"),us("#","search","hash",a)));let i=s===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=r;else{let m=t.length-1;if(!n&&o.startsWith("..")){let b=o.split("/");for(;b[0]==="..";)b.shift(),m-=1;a.pathname=b.join("/")}l=m>=0?t[m]:"/"}let d=Xl(a,l),c=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(c||u)&&(d.pathname+="/"),d}const st=s=>s.join("/").replace(/\/\/+/g,"/"),ec=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),tc=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,rc=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function sc(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Ja=["post","put","patch","delete"];new Set(Ja);const nc=["get",...Ja];new Set(nc);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},ar.apply(this,arguments)}const an=p.createContext(null),ac=p.createContext(null),it=p.createContext(null),Ur=p.createContext(null),Je=p.createContext({outlet:null,matches:[],isDataRoute:!1}),Ya=p.createContext(null);function ic(s,t){let{relative:r}=t===void 0?{}:t;zt()||ne(!1);let{basename:n,navigator:a}=p.useContext(it),{hash:i,pathname:o,search:l}=Xa(s,{relative:r}),d=o;return n!=="/"&&(d=o==="/"?n:st([n,o])),a.createHref({pathname:d,search:l,hash:i})}function zt(){return p.useContext(Ur)!=null}function ot(){return zt()||ne(!1),p.useContext(Ur).location}function Ka(s){p.useContext(it).static||p.useLayoutEffect(s)}function Hr(){let{isDataRoute:s}=p.useContext(Je);return s?vc():oc()}function oc(){zt()||ne(!1);let s=p.useContext(an),{basename:t,future:r,navigator:n}=p.useContext(it),{matches:a}=p.useContext(Je),{pathname:i}=ot(),o=JSON.stringify(sn(a,r.v7_relativeSplatPath)),l=p.useRef(!1);return Ka(()=>{l.current=!0}),p.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let m=nn(c,JSON.parse(o),i,u.relative==="path");s==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:st([t,m.pathname])),(u.replace?n.replace:n.push)(m,u.state,u)},[t,n,o,i,s])}function lc(){let{matches:s}=p.useContext(Je),t=s[s.length-1];return t?t.params:{}}function Xa(s,t){let{relative:r}=t===void 0?{}:t,{future:n}=p.useContext(it),{matches:a}=p.useContext(Je),{pathname:i}=ot(),o=JSON.stringify(sn(a,n.v7_relativeSplatPath));return p.useMemo(()=>nn(s,JSON.parse(o),i,r==="path"),[s,o,i,r])}function cc(s,t){return dc(s,t)}function dc(s,t,r,n){zt()||ne(!1);let{navigator:a}=p.useContext(it),{matches:i}=p.useContext(Je),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let d=o?o.pathnameBase:"/";o&&o.route;let c=ot(),u;if(t){var m;let h=typeof t=="string"?Ht(t):t;d==="/"||(m=h.pathname)!=null&&m.startsWith(d)||ne(!1),u=h}else u=c;let b=u.pathname||"/",y=b;if(d!=="/"){let h=d.replace(/^\//,"").split("/");y="/"+b.replace(/^\//,"").split("/").slice(h.length).join("/")}let x=Fl(s,{pathname:y}),f=gc(x&&x.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:st([d,a.encodeLocation?a.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?d:st([d,a.encodeLocation?a.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,r,n);return t&&f?p.createElement(Ur.Provider,{value:{location:ar({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:et.Pop}},f):f}function uc(){let s=yc(),t=sc(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),r=s instanceof Error?s.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},t),r?p.createElement("pre",{style:a},r):null,null)}const mc=p.createElement(uc,null);class pc extends p.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?p.createElement(Je.Provider,{value:this.props.routeContext},p.createElement(Ya.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hc(s){let{routeContext:t,match:r,children:n}=s,a=p.useContext(an);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),p.createElement(Je.Provider,{value:t},n)}function gc(s,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),s==null){var i;if(!r)return null;if(r.errors)s=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let o=s,l=(a=r)==null?void 0:a.errors;if(l!=null){let u=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);u>=0||ne(!1),o=o.slice(0,Math.min(o.length,u+1))}let d=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let u=0;u<o.length;u++){let m=o[u];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=u),m.route.id){let{loaderData:b,errors:y}=r,x=m.route.loader&&b[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||x){d=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,m,b)=>{let y,x=!1,f=null,h=null;r&&(y=l&&m.route.id?l[m.route.id]:void 0,f=m.route.errorElement||mc,d&&(c<0&&b===0?(wc("route-fallback"),x=!0,h=null):c===b&&(x=!0,h=m.route.hydrateFallbackElement||null)));let k=t.concat(o.slice(0,b+1)),j=()=>{let v;return y?v=f:x?v=h:m.route.Component?v=p.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=u,p.createElement(hc,{match:m,routeContext:{outlet:u,matches:k,isDataRoute:r!=null},children:v})};return r&&(m.route.ErrorBoundary||m.route.errorElement||b===0)?p.createElement(pc,{location:r.location,revalidation:r.revalidation,component:f,error:y,children:j(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):j()},null)}var Qa=function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s}(Qa||{}),Za=function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s}(Za||{});function fc(s){let t=p.useContext(an);return t||ne(!1),t}function xc(s){let t=p.useContext(ac);return t||ne(!1),t}function bc(s){let t=p.useContext(Je);return t||ne(!1),t}function ei(s){let t=bc(),r=t.matches[t.matches.length-1];return r.route.id||ne(!1),r.route.id}function yc(){var s;let t=p.useContext(Ya),r=xc(),n=ei();return t!==void 0?t:(s=r.errors)==null?void 0:s[n]}function vc(){let{router:s}=fc(Qa.UseNavigateStable),t=ei(Za.UseNavigateStable),r=p.useRef(!1);return Ka(()=>{r.current=!0}),p.useCallback(function(a,i){i===void 0&&(i={}),r.current&&(typeof a=="number"?s.navigate(a):s.navigate(a,ar({fromRouteId:t},i)))},[s,t])}const On={};function wc(s,t,r){On[s]||(On[s]=!0)}function jc(s,t){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function Nc(s){let{to:t,replace:r,state:n,relative:a}=s;zt()||ne(!1);let{future:i,static:o}=p.useContext(it),{matches:l}=p.useContext(Je),{pathname:d}=ot(),c=Hr(),u=nn(t,sn(l,i.v7_relativeSplatPath),d,a==="path"),m=JSON.stringify(u);return p.useEffect(()=>c(JSON.parse(m),{replace:r,state:n,relative:a}),[c,m,a,r,n]),null}function te(s){ne(!1)}function Sc(s){let{basename:t="/",children:r=null,location:n,navigationType:a=et.Pop,navigator:i,static:o=!1,future:l}=s;zt()&&ne(!1);let d=t.replace(/^\/*/,"/"),c=p.useMemo(()=>({basename:d,navigator:i,static:o,future:ar({v7_relativeSplatPath:!1},l)}),[d,l,i,o]);typeof n=="string"&&(n=Ht(n));let{pathname:u="/",search:m="",hash:b="",state:y=null,key:x="default"}=n,f=p.useMemo(()=>{let h=rn(u,d);return h==null?null:{location:{pathname:h,search:m,hash:b,state:y,key:x},navigationType:a}},[d,u,m,b,y,x,a]);return f==null?null:p.createElement(it.Provider,{value:c},p.createElement(Ur.Provider,{children:r,value:f}))}function Cc(s){let{children:t,location:r}=s;return cc(Is(t),r)}new Promise(()=>{});function Is(s,t){t===void 0&&(t=[]);let r=[];return p.Children.forEach(s,(n,a)=>{if(!p.isValidElement(n))return;let i=[...t,a];if(n.type===p.Fragment){r.push.apply(r,Is(n.props.children,i));return}n.type!==te&&ne(!1),!n.props.index||!n.props.children||ne(!1);let o={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=Is(n.props.children,i)),r.push(o)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rs(){return Rs=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},Rs.apply(this,arguments)}function kc(s,t){if(s==null)return{};var r={},n=Object.keys(s),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=s[a]);return r}function Tc(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ac(s,t){return s.button===0&&(!t||t==="_self")&&!Tc(s)}const Dc=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Pc="6";try{window.__reactRouterVersion=Pc}catch{}const Ec="startTransition",Ln=Fo[Ec];function Ic(s){let{basename:t,children:r,future:n,window:a}=s,i=p.useRef();i.current==null&&(i.current=Rl({window:a,v5Compat:!0}));let o=i.current,[l,d]=p.useState({action:o.action,location:o.location}),{v7_startTransition:c}=n||{},u=p.useCallback(m=>{c&&Ln?Ln(()=>d(m)):d(m)},[d,c]);return p.useLayoutEffect(()=>o.listen(u),[o,u]),p.useEffect(()=>jc(n),[n]),p.createElement(Sc,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:n})}const Rc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Oc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oe=p.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:i,replace:o,state:l,target:d,to:c,preventScrollReset:u,viewTransition:m}=t,b=kc(t,Dc),{basename:y}=p.useContext(it),x,f=!1;if(typeof c=="string"&&Oc.test(c)&&(x=c,Rc))try{let v=new URL(window.location.href),w=c.startsWith("//")?new URL(v.protocol+c):new URL(c),g=rn(w.pathname,y);w.origin===v.origin&&g!=null?c=g+w.search+w.hash:f=!0}catch{}let h=ic(c,{relative:a}),k=Lc(c,{replace:o,state:l,target:d,preventScrollReset:u,relative:a,viewTransition:m});function j(v){n&&n(v),v.defaultPrevented||k(v)}return p.createElement("a",Rs({},b,{href:x||h,onClick:f||i?n:j,ref:r,target:d}))});var Fn;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Fn||(Fn={}));var Mn;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Mn||(Mn={}));function Lc(s,t){let{target:r,replace:n,state:a,preventScrollReset:i,relative:o,viewTransition:l}=t===void 0?{}:t,d=Hr(),c=ot(),u=Xa(s,{relative:o});return p.useCallback(m=>{if(Ac(m,r)){m.preventDefault();let b=n!==void 0?n:Rr(c)===Rr(u);d(s,{replace:b,state:a,preventScrollReset:i,relative:o,viewTransition:l})}},[c,d,u,n,a,r,s,i,o,l])}let Fc={data:""},Mc=s=>typeof window=="object"?((s?s.querySelector("#_goober"):window._goober)||Object.assign((s||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:s||Fc,$c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Bc=/\/\*[^]*?\*\/|  +/g,$n=/\n+/g,Xe=(s,t)=>{let r="",n="",a="";for(let i in s){let o=s[i];i[0]=="@"?i[1]=="i"?r=i+" "+o+";":n+=i[1]=="f"?Xe(o,i):i+"{"+Xe(o,i[1]=="k"?"":t)+"}":typeof o=="object"?n+=Xe(o,t?t.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,l):l?l+" "+d:d)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=Xe.p?Xe.p(i,o):i+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+n},Ue={},ti=s=>{if(typeof s=="object"){let t="";for(let r in s)t+=r+ti(s[r]);return t}return s},_c=(s,t,r,n,a)=>{let i=ti(s),o=Ue[i]||(Ue[i]=(d=>{let c=0,u=11;for(;c<d.length;)u=101*u+d.charCodeAt(c++)>>>0;return"go"+u})(i));if(!Ue[o]){let d=i!==s?s:(c=>{let u,m,b=[{}];for(;u=$c.exec(c.replace(Bc,""));)u[4]?b.shift():u[3]?(m=u[3].replace($n," ").trim(),b.unshift(b[0][m]=b[0][m]||{})):b[0][u[1]]=u[2].replace($n," ").trim();return b[0]})(s);Ue[o]=Xe(a?{["@keyframes "+o]:d}:d,r?"":"."+o)}let l=r&&Ue.g?Ue.g:null;return r&&(Ue.g=Ue[o]),((d,c,u,m)=>{m?c.data=c.data.replace(m,d):c.data.indexOf(d)===-1&&(c.data=u?d+c.data:c.data+d)})(Ue[o],t,n,l),o},Uc=(s,t,r)=>s.reduce((n,a,i)=>{let o=t[i];if(o&&o.call){let l=o(r),d=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=d?"."+d:l&&typeof l=="object"?l.props?"":Xe(l,""):l===!1?"":l}return n+a+(o??"")},"");function zr(s){let t=this||{},r=s.call?s(t.p):s;return _c(r.unshift?r.raw?Uc(r,[].slice.call(arguments,1),t.p):r.reduce((n,a)=>Object.assign(n,a&&a.call?a(t.p):a),{}):r,Mc(t.target),t.g,t.o,t.k)}let ri,Os,Ls;zr.bind({g:1});let Ve=zr.bind({k:1});function Hc(s,t,r,n){Xe.p=t,ri=s,Os=r,Ls=n}function lt(s,t){let r=this||{};return function(){let n=arguments;function a(i,o){let l=Object.assign({},i),d=l.className||a.className;r.p=Object.assign({theme:Os&&Os()},l),r.o=/ *go\d+/.test(d),l.className=zr.apply(r,n)+(d?" "+d:"");let c=s;return s[0]&&(c=l.as||s,delete l.as),Ls&&c[0]&&Ls(l),ri(c,l)}return a}}var zc=s=>typeof s=="function",Or=(s,t)=>zc(s)?s(t):s,Gc=(()=>{let s=0;return()=>(++s).toString()})(),si=(()=>{let s;return()=>{if(s===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");s=!t||t.matches}return s}})(),Wc=20,on="default",ni=(s,t)=>{let{toastLimit:r}=s.settings;switch(t.type){case 0:return{...s,toasts:[t.toast,...s.toasts].slice(0,r)};case 1:return{...s,toasts:s.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:n}=t;return ni(s,{type:s.toasts.find(o=>o.id===n.id)?1:0,toast:n});case 3:let{toastId:a}=t;return{...s,toasts:s.toasts.map(o=>o.id===a||a===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return t.toastId===void 0?{...s,toasts:[]}:{...s,toasts:s.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...s,pausedAt:t.time};case 6:let i=t.time-(s.pausedAt||0);return{...s,pausedAt:void 0,toasts:s.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Sr=[],ai={toasts:[],pausedAt:void 0,settings:{toastLimit:Wc}},$e={},ii=(s,t=on)=>{$e[t]=ni($e[t]||ai,s),Sr.forEach(([r,n])=>{r===t&&n($e[t])})},oi=s=>Object.keys($e).forEach(t=>ii(s,t)),qc=s=>Object.keys($e).find(t=>$e[t].toasts.some(r=>r.id===s)),Gr=(s=on)=>t=>{ii(t,s)},Vc={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Jc=(s={},t=on)=>{let[r,n]=p.useState($e[t]||ai),a=p.useRef($e[t]);p.useEffect(()=>(a.current!==$e[t]&&n($e[t]),Sr.push([t,n]),()=>{let o=Sr.findIndex(([l])=>l===t);o>-1&&Sr.splice(o,1)}),[t]);let i=r.toasts.map(o=>{var l,d,c;return{...s,...s[o.type],...o,removeDelay:o.removeDelay||((l=s[o.type])==null?void 0:l.removeDelay)||(s==null?void 0:s.removeDelay),duration:o.duration||((d=s[o.type])==null?void 0:d.duration)||(s==null?void 0:s.duration)||Vc[o.type],style:{...s.style,...(c=s[o.type])==null?void 0:c.style,...o.style}}});return{...r,toasts:i}},Yc=(s,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:s,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Gc()}),lr=s=>(t,r)=>{let n=Yc(t,s,r);return Gr(n.toasterId||qc(n.id))({type:2,toast:n}),n.id},X=(s,t)=>lr("blank")(s,t);X.error=lr("error");X.success=lr("success");X.loading=lr("loading");X.custom=lr("custom");X.dismiss=(s,t)=>{let r={type:3,toastId:s};t?Gr(t)(r):oi(r)};X.dismissAll=s=>X.dismiss(void 0,s);X.remove=(s,t)=>{let r={type:4,toastId:s};t?Gr(t)(r):oi(r)};X.removeAll=s=>X.remove(void 0,s);X.promise=(s,t,r)=>{let n=X.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof s=="function"&&(s=s()),s.then(a=>{let i=t.success?Or(t.success,a):void 0;return i?X.success(i,{id:n,...r,...r==null?void 0:r.success}):X.dismiss(n),a}).catch(a=>{let i=t.error?Or(t.error,a):void 0;i?X.error(i,{id:n,...r,...r==null?void 0:r.error}):X.dismiss(n)}),s};var Kc=1e3,Xc=(s,t="default")=>{let{toasts:r,pausedAt:n}=Jc(s,t),a=p.useRef(new Map).current,i=p.useCallback((m,b=Kc)=>{if(a.has(m))return;let y=setTimeout(()=>{a.delete(m),o({type:4,toastId:m})},b);a.set(m,y)},[]);p.useEffect(()=>{if(n)return;let m=Date.now(),b=r.map(y=>{if(y.duration===1/0)return;let x=(y.duration||0)+y.pauseDuration-(m-y.createdAt);if(x<0){y.visible&&X.dismiss(y.id);return}return setTimeout(()=>X.dismiss(y.id,t),x)});return()=>{b.forEach(y=>y&&clearTimeout(y))}},[r,n,t]);let o=p.useCallback(Gr(t),[t]),l=p.useCallback(()=>{o({type:5,time:Date.now()})},[o]),d=p.useCallback((m,b)=>{o({type:1,toast:{id:m,height:b}})},[o]),c=p.useCallback(()=>{n&&o({type:6,time:Date.now()})},[n,o]),u=p.useCallback((m,b)=>{let{reverseOrder:y=!1,gutter:x=8,defaultPosition:f}=b||{},h=r.filter(v=>(v.position||f)===(m.position||f)&&v.height),k=h.findIndex(v=>v.id===m.id),j=h.filter((v,w)=>w<k&&v.visible).length;return h.filter(v=>v.visible).slice(...y?[j+1]:[0,j]).reduce((v,w)=>v+(w.height||0)+x,0)},[r]);return p.useEffect(()=>{r.forEach(m=>{if(m.dismissed)i(m.id,m.removeDelay);else{let b=a.get(m.id);b&&(clearTimeout(b),a.delete(m.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},Qc=Ve`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Zc=Ve`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ed=Ve`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,td=lt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Qc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Zc} 0.15s ease-out forwards;
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
    animation: ${ed} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,rd=Ve`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,sd=lt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${s=>s.secondary||"#e0e0e0"};
  border-right-color: ${s=>s.primary||"#616161"};
  animation: ${rd} 1s linear infinite;
`,nd=Ve`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ad=Ve`
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
}`,id=lt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${nd} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ad} 0.2s ease-out forwards;
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
`,od=lt("div")`
  position: absolute;
`,ld=lt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,cd=Ve`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,dd=lt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${cd} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ud=({toast:s})=>{let{icon:t,type:r,iconTheme:n}=s;return t!==void 0?typeof t=="string"?p.createElement(dd,null,t):t:r==="blank"?null:p.createElement(ld,null,p.createElement(sd,{...n}),r!=="loading"&&p.createElement(od,null,r==="error"?p.createElement(td,{...n}):p.createElement(id,{...n})))},md=s=>`
0% {transform: translate3d(0,${s*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,pd=s=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s*-150}%,-1px) scale(.6); opacity:0;}
`,hd="0%{opacity:0;} 100%{opacity:1;}",gd="0%{opacity:1;} 100%{opacity:0;}",fd=lt("div")`
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
`,xd=lt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,bd=(s,t)=>{let r=s.includes("top")?1:-1,[n,a]=si()?[hd,gd]:[md(r),pd(r)];return{animation:t?`${Ve(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ve(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},yd=p.memo(({toast:s,position:t,style:r,children:n})=>{let a=s.height?bd(s.position||t||"top-center",s.visible):{opacity:0},i=p.createElement(ud,{toast:s}),o=p.createElement(xd,{...s.ariaProps},Or(s.message,s));return p.createElement(fd,{className:s.className,style:{...a,...r,...s.style}},typeof n=="function"?n({icon:i,message:o}):p.createElement(p.Fragment,null,i,o))});Hc(p.createElement);var vd=({id:s,className:t,style:r,onHeightUpdate:n,children:a})=>{let i=p.useCallback(o=>{if(o){let l=()=>{let d=o.getBoundingClientRect().height;n(s,d)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[s,n]);return p.createElement("div",{ref:i,className:t,style:r},a)},wd=(s,t)=>{let r=s.includes("top"),n=r?{top:0}:{bottom:0},a=s.includes("center")?{justifyContent:"center"}:s.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:si()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...a}},jd=zr`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,hr=16,Nd=({reverseOrder:s,position:t="top-center",toastOptions:r,gutter:n,children:a,toasterId:i,containerStyle:o,containerClassName:l})=>{let{toasts:d,handlers:c}=Xc(r,i);return p.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:hr,left:hr,right:hr,bottom:hr,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(u=>{let m=u.position||t,b=c.calculateOffset(u,{reverseOrder:s,gutter:n,defaultPosition:t}),y=wd(m,b);return p.createElement(vd,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?jd:"",style:y},u.type==="custom"?Or(u.message,u):a?a(u):p.createElement(yd,{toast:u,position:m}))}))},$=X;const li=p.createContext();function Wr(){return p.useContext(li)}const Bn={light:{name:"Light Theme",cssVars:{"--primary":"#2563eb","--primary-foreground":"#ffffff","--background":"#ffffff","--foreground":"#0f172a","--card":"#ffffff","--muted":"#f8fafc","--border":"#e2e8f0"},isDark:!1},dark:{name:"Dark Theme",cssVars:{"--primary":"#3b82f6","--primary-foreground":"#ffffff","--background":"#0f172a","--foreground":"#f8fafc","--card":"#1e293b","--muted":"#1e293b","--border":"#334155"},isDark:!0},blue:{name:"Blue Theme",cssVars:{"--primary":"#1e40af","--primary-foreground":"#ffffff","--background":"#f0f9ff","--foreground":"#0c4a6e","--card":"#e0f2fe","--muted":"#e0f2fe","--border":"#7dd3fc"},isDark:!1},purple:{name:"Purple Theme",cssVars:{"--primary":"#7c3aed","--primary-foreground":"#ffffff","--background":"#faf5ff","--foreground":"#581c87","--card":"#f3e8ff","--muted":"#f3e8ff","--border":"#c4b5fd"},isDark:!1},green:{name:"Green Theme",cssVars:{"--primary":"#059669","--primary-foreground":"#ffffff","--background":"#f0fdf4","--foreground":"#064e3b","--card":"#dcfce7","--muted":"#dcfce7","--border":"#86efac"},isDark:!1},orange:{name:"Orange Theme",cssVars:{"--primary":"#ea580c","--primary-foreground":"#ffffff","--background":"#fff7ed","--foreground":"#9a3412","--card":"#fed7aa","--muted":"#fed7aa","--border":"#fdba74"},isDark:!1},red:{name:"Red Theme",cssVars:{"--primary":"#dc2626","--primary-foreground":"#ffffff","--background":"#fef2f2","--foreground":"#991b1b","--card":"#fecaca","--muted":"#fecaca","--border":"#fca5a5"},isDark:!1},pink:{name:"Pink Theme",cssVars:{"--primary":"#db2777","--primary-foreground":"#ffffff","--background":"#fdf2f8","--foreground":"#9d174d","--card":"#fce7f3","--muted":"#fce7f3","--border":"#f9a8d4"},isDark:!1},cyan:{name:"Cyan Theme",cssVars:{"--primary":"#0891b2","--primary-foreground":"#ffffff","--background":"#ecfeff","--foreground":"#164e63","--card":"#cffafe","--muted":"#cffafe","--border":"#67e8f9"},isDark:!1},amber:{name:"Amber Theme",cssVars:{"--primary":"#d97706","--primary-foreground":"#ffffff","--background":"#fffbeb","--foreground":"#92400e","--card":"#fef3c7","--muted":"#fef3c7","--border":"#fde68a"},isDark:!1},emerald:{name:"Emerald Theme",cssVars:{"--primary":"#10b981","--primary-foreground":"#ffffff","--background":"#ecfdf5","--foreground":"#064e3b","--card":"#d1fae5","--muted":"#d1fae5","--border":"#6ee7b7"},isDark:!1}};function Sd({children:s}){const[t,r]=p.useState("light");p.useEffect(()=>{const o=localStorage.getItem("theme")||"light";r(o),n(o)},[]);const n=o=>{const l=Bn[o];l&&(Object.entries(l.cssVars).forEach(([d,c])=>{document.documentElement.style.setProperty(d,c)}),document.documentElement.classList.toggle("dark",l.isDark))},a=o=>{r(o),localStorage.setItem("theme",o),n(o)},i=()=>{a(t==="light"?"dark":"light")};return e.jsx(li.Provider,{value:{theme:t,setTheme:a,toggleTheme:i,themes:Bn},children:s})}/**
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
 */const ci="firebasestorage.googleapis.com",di="storageBucket",Cd=2*60*1e3,kd=10*60*1e3;/**
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
 */class se extends Uo{constructor(t,r,n=0){super(ms(t),`Firebase Storage: ${r} (${ms(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,se.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ms(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var re;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(re||(re={}));function ms(s){return"storage/"+s}function ln(){const s="An unknown error occurred, please check the error payload for server response.";return new se(re.UNKNOWN,s)}function Td(s){return new se(re.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")}function Ad(s){return new se(re.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Dd(){const s="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new se(re.UNAUTHENTICATED,s)}function Pd(){return new se(re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ed(s){return new se(re.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")}function Id(){return new se(re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Rd(){return new se(re.CANCELED,"User canceled the upload/download.")}function Od(s){return new se(re.INVALID_URL,"Invalid URL '"+s+"'.")}function Ld(s){return new se(re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function Fd(){return new se(re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+di+"' property when initializing the app?")}function Md(){return new se(re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $d(){return new se(re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Bd(s){return new se(re.UNSUPPORTED_ENVIRONMENT,`${s} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fs(s){return new se(re.INVALID_ARGUMENT,s)}function ui(){return new se(re.APP_DELETED,"The Firebase app was deleted.")}function _d(s){return new se(re.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zt(s,t){return new se(re.INVALID_FORMAT,"String does not match format '"+s+"': "+t)}function Jt(s){throw new se(re.INTERNAL_ERROR,"Internal error: "+s)}/**
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
 */class ve{constructor(t,r){this.bucket=t,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,r){let n;try{n=ve.makeFromUrl(t,r)}catch{return new ve(t,"")}if(n.path==="")return n;throw Ld(t)}static makeFromUrl(t,r){let n=null;const a="([A-Za-z0-9.\\-_]+)";function i(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+a+o,"i"),d={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",m=r.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",y=new RegExp(`^https?://${m}/${u}/b/${a}/o${b}`,"i"),x={bucket:1,path:3},f=r===ci?"(?:storage.googleapis.com|storage.cloud.google.com)":r,h="([^?#]*)",k=new RegExp(`^https?://${f}/${a}/${h}`,"i"),v=[{regex:l,indices:d,postModify:i},{regex:y,indices:x,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<v.length;w++){const g=v[w],P=g.regex.exec(t);if(P){const I=P[g.indices.bucket];let E=P[g.indices.path];E||(E=""),n=new ve(I,E),g.postModify(n);break}}if(n==null)throw Od(t);return n}}class Ud{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Hd(s,t,r){let n=1,a=null,i=null,o=!1,l=0;function d(){return l===2}let c=!1;function u(...h){c||(c=!0,t.apply(null,h))}function m(h){a=setTimeout(()=>{a=null,s(y,d())},h)}function b(){i&&clearTimeout(i)}function y(h,...k){if(c){b();return}if(h){b(),u.call(null,h,...k);return}if(d()||o){b(),u.call(null,h,...k);return}n<64&&(n*=2);let v;l===1?(l=2,v=0):v=(n+Math.random())*1e3,m(v)}let x=!1;function f(h){x||(x=!0,b(),!c&&(a!==null?(h||(l=2),clearTimeout(a),m(0)):h||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,f(!0)},r),f}function zd(s){s(!1)}/**
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
 */function Gd(s){return s!==void 0}function Wd(s){return typeof s=="object"&&!Array.isArray(s)}function cn(s){return typeof s=="string"||s instanceof String}function _n(s){return dn()&&s instanceof Blob}function dn(){return typeof Blob<"u"}function Un(s,t,r,n){if(n<t)throw Fs(`Invalid value for '${s}'. Expected ${t} or greater.`);if(n>r)throw Fs(`Invalid value for '${s}'. Expected ${r} or less.`)}/**
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
 */function un(s,t,r){let n=t;return r==null&&(n=`https://${t}`),`${r}://${n}/v0${s}`}function mi(s){const t=encodeURIComponent;let r="?";for(const n in s)if(s.hasOwnProperty(n)){const a=t(n)+"="+t(s[n]);r=r+a+"&"}return r=r.slice(0,-1),r}var yt;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(yt||(yt={}));/**
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
 */function qd(s,t){const r=s>=500&&s<600,a=[408,429].indexOf(s)!==-1,i=t.indexOf(s)!==-1;return r||a||i}/**
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
 */class Vd{constructor(t,r,n,a,i,o,l,d,c,u,m,b=!0){this.url_=t,this.method_=r,this.headers_=n,this.body_=a,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=d,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=m,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,x)=>{this.resolve_=y,this.reject_=x,this.start_()})}start_(){const t=(n,a)=>{if(a){n(!1,new gr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const d=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===yt.NO_ERROR,d=i.getStatus();if(!l||qd(d,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===yt.ABORT;n(!1,new gr(!1,null,u));return}const c=this.successCodes_.indexOf(d)!==-1;n(!0,new gr(c,i))})},r=(n,a)=>{const i=this.resolve_,o=this.reject_,l=a.connection;if(a.wasSuccessCode)try{const d=this.callback_(l,l.getResponse());Gd(d)?i(d):i()}catch(d){o(d)}else if(l!==null){const d=ln();d.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,d)):o(d)}else if(a.canceled){const d=this.appDelete_?ui():Rd();o(d)}else{const d=Id();o(d)}};this.canceled_?r(!1,new gr(!1,null,!0)):this.backoffId_=Hd(t,r,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&zd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gr{constructor(t,r,n){this.wasSuccessCode=t,this.connection=r,this.canceled=!!n}}function Jd(s,t){t!==null&&t.length>0&&(s.Authorization="Firebase "+t)}function Yd(s,t){s["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Kd(s,t){t&&(s["X-Firebase-GMPID"]=t)}function Xd(s,t){t!==null&&(s["X-Firebase-AppCheck"]=t)}function Qd(s,t,r,n,a,i,o=!0){const l=mi(s.urlParams),d=s.url+l,c=Object.assign({},s.headers);return Kd(c,t),Jd(c,r),Yd(c,i),Xd(c,n),new Vd(d,s.method,c,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,a,o)}/**
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
 */function Zd(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function eu(...s){const t=Zd();if(t!==void 0){const r=new t;for(let n=0;n<s.length;n++)r.append(s[n]);return r.getBlob()}else{if(dn())return new Blob(s);throw new se(re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function tu(s,t,r){return s.webkitSlice?s.webkitSlice(t,r):s.mozSlice?s.mozSlice(t,r):s.slice?s.slice(t,r):null}/**
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
 */function ru(s){if(typeof atob>"u")throw Bd("base-64");return atob(s)}/**
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
 */const Be={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ps{constructor(t,r){this.data=t,this.contentType=r||null}}function su(s,t){switch(s){case Be.RAW:return new ps(pi(t));case Be.BASE64:case Be.BASE64URL:return new ps(hi(s,t));case Be.DATA_URL:return new ps(au(t),iu(t))}throw ln()}function pi(s){const t=[];for(let r=0;r<s.length;r++){let n=s.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(r<s.length-1&&(s.charCodeAt(r+1)&64512)===56320))t.push(239,191,189);else{const i=n,o=s.charCodeAt(++r);n=65536|(i&1023)<<10|o&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function nu(s){let t;try{t=decodeURIComponent(s)}catch{throw Zt(Be.DATA_URL,"Malformed data URL.")}return pi(t)}function hi(s,t){switch(s){case Be.BASE64:{const a=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(a||i)throw Zt(s,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case Be.BASE64URL:{const a=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(a||i)throw Zt(s,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=ru(t)}catch(a){throw a.message.includes("polyfill")?a:Zt(s,"Invalid character found")}const n=new Uint8Array(r.length);for(let a=0;a<r.length;a++)n[a]=r.charCodeAt(a);return n}class gi{constructor(t){this.base64=!1,this.contentType=null;const r=t.match(/^data:([^,]+)?,/);if(r===null)throw Zt(Be.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=r[1]||null;n!=null&&(this.base64=ou(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function au(s){const t=new gi(s);return t.base64?hi(Be.BASE64,t.rest):nu(t.rest)}function iu(s){return new gi(s).contentType}function ou(s,t){return s.length>=t.length?s.substring(s.length-t.length)===t:!1}/**
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
 */class Qe{constructor(t,r){let n=0,a="";_n(t)?(this.data_=t,n=t.size,a=t.type):t instanceof ArrayBuffer?(r?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(r?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=a}size(){return this.size_}type(){return this.type_}slice(t,r){if(_n(this.data_)){const n=this.data_,a=tu(n,t,r);return a===null?null:new Qe(a)}else{const n=new Uint8Array(this.data_.buffer,t,r-t);return new Qe(n,!0)}}static getBlob(...t){if(dn()){const r=t.map(n=>n instanceof Qe?n.data_:n);return new Qe(eu.apply(null,r))}else{const r=t.map(o=>cn(o)?su(Be.RAW,o).data:o.data_);let n=0;r.forEach(o=>{n+=o.byteLength});const a=new Uint8Array(n);let i=0;return r.forEach(o=>{for(let l=0;l<o.length;l++)a[i++]=o[l]}),new Qe(a,!0)}}uploadData(){return this.data_}}/**
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
 */function fi(s){let t;try{t=JSON.parse(s)}catch{return null}return Wd(t)?t:null}/**
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
 */function lu(s){if(s.length===0)return null;const t=s.lastIndexOf("/");return t===-1?"":s.slice(0,t)}function cu(s,t){const r=t.split("/").filter(n=>n.length>0).join("/");return s.length===0?r:s+"/"+r}function xi(s){const t=s.lastIndexOf("/",s.length-2);return t===-1?s:s.slice(t+1)}/**
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
 */function du(s,t){return t}class de{constructor(t,r,n,a){this.server=t,this.local=r||t,this.writable=!!n,this.xform=a||du}}let fr=null;function uu(s){return!cn(s)||s.length<2?s:xi(s)}function bi(){if(fr)return fr;const s=[];s.push(new de("bucket")),s.push(new de("generation")),s.push(new de("metageneration")),s.push(new de("name","fullPath",!0));function t(i,o){return uu(o)}const r=new de("name");r.xform=t,s.push(r);function n(i,o){return o!==void 0?Number(o):o}const a=new de("size");return a.xform=n,s.push(a),s.push(new de("timeCreated")),s.push(new de("updated")),s.push(new de("md5Hash",null,!0)),s.push(new de("cacheControl",null,!0)),s.push(new de("contentDisposition",null,!0)),s.push(new de("contentEncoding",null,!0)),s.push(new de("contentLanguage",null,!0)),s.push(new de("contentType",null,!0)),s.push(new de("metadata","customMetadata",!0)),fr=s,fr}function mu(s,t){function r(){const n=s.bucket,a=s.fullPath,i=new ve(n,a);return t._makeStorageReference(i)}Object.defineProperty(s,"ref",{get:r})}function pu(s,t,r){const n={};n.type="file";const a=r.length;for(let i=0;i<a;i++){const o=r[i];n[o.local]=o.xform(n,t[o.server])}return mu(n,s),n}function yi(s,t,r){const n=fi(t);return n===null?null:pu(s,n,r)}function hu(s,t,r,n){const a=fi(t);if(a===null||!cn(a.downloadTokens))return null;const i=a.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=s.bucket,m=s.fullPath,b="/b/"+o(u)+"/o/"+o(m),y=un(b,r,n),x=mi({alt:"media",token:c});return y+x})[0]}function gu(s,t){const r={},n=t.length;for(let a=0;a<n;a++){const i=t[a];i.writable&&(r[i.server]=s[i.local])}return JSON.stringify(r)}class vi{constructor(t,r,n,a){this.url=t,this.method=r,this.handler=n,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function wi(s){if(!s)throw ln()}function fu(s,t){function r(n,a){const i=yi(s,a,t);return wi(i!==null),i}return r}function xu(s,t){function r(n,a){const i=yi(s,a,t);return wi(i!==null),hu(i,a,s.host,s._protocol)}return r}function ji(s){function t(r,n){let a;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?a=Pd():a=Dd():r.getStatus()===402?a=Ad(s.bucket):r.getStatus()===403?a=Ed(s.path):a=n,a.status=r.getStatus(),a.serverResponse=n.serverResponse,a}return t}function bu(s){const t=ji(s);function r(n,a){let i=t(n,a);return n.getStatus()===404&&(i=Td(s.path)),i.serverResponse=a.serverResponse,i}return r}function yu(s,t,r){const n=t.fullServerUrl(),a=un(n,s.host,s._protocol),i="GET",o=s.maxOperationRetryTime,l=new vi(a,i,xu(s,r),o);return l.errorHandler=bu(t),l}function vu(s,t){return s&&s.contentType||t&&t.type()||"application/octet-stream"}function wu(s,t,r){const n=Object.assign({},r);return n.fullPath=s.path,n.size=t.size(),n.contentType||(n.contentType=vu(null,t)),n}function ju(s,t,r,n,a){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let v="";for(let w=0;w<2;w++)v=v+Math.random().toString().slice(2);return v}const d=l();o["Content-Type"]="multipart/related; boundary="+d;const c=wu(t,n,a),u=gu(c,r),m="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+d+`\r
Content-Type: `+c.contentType+`\r
\r
`,b=`\r
--`+d+"--",y=Qe.getBlob(m,n,b);if(y===null)throw Md();const x={name:c.fullPath},f=un(i,s.host,s._protocol),h="POST",k=s.maxUploadRetryTime,j=new vi(f,h,fu(s,r),k);return j.urlParams=x,j.headers=o,j.body=y.uploadData(),j.errorHandler=ji(t),j}class Nu{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=yt.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=yt.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=yt.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,r,n,a){if(this.sent_)throw Jt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,t,!0),a!==void 0)for(const i in a)a.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,a[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Jt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Jt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Jt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Jt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Su extends Nu{initXhr(){this.xhr_.responseType="text"}}function Ni(){return new Su}/**
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
 */class Nt{constructor(t,r){this._service=t,r instanceof ve?this._location=r:this._location=ve.makeFromUrl(r,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,r){return new Nt(t,r)}get root(){const t=new ve(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xi(this._location.path)}get storage(){return this._service}get parent(){const t=lu(this._location.path);if(t===null)return null;const r=new ve(this._location.bucket,t);return new Nt(this._service,r)}_throwIfRoot(t){if(this._location.path==="")throw _d(t)}}function Cu(s,t,r){s._throwIfRoot("uploadBytes");const n=ju(s.storage,s._location,bi(),new Qe(t,!0),r);return s.storage.makeRequestWithTokens(n,Ni).then(a=>({metadata:a,ref:s}))}function ku(s){s._throwIfRoot("getDownloadURL");const t=yu(s.storage,s._location,bi());return s.storage.makeRequestWithTokens(t,Ni).then(r=>{if(r===null)throw $d();return r})}function Tu(s,t){const r=cu(s._location.path,t),n=new ve(s._location.bucket,r);return new Nt(s.storage,n)}/**
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
 */function Au(s){return/^[A-Za-z]+:\/\//.test(s)}function Du(s,t){return new Nt(s,t)}function Si(s,t){if(s instanceof mn){const r=s;if(r._bucket==null)throw Fd();const n=new Nt(r,r._bucket);return t!=null?Si(n,t):n}else return t!==void 0?Tu(s,t):s}function Pu(s,t){if(t&&Au(t)){if(s instanceof mn)return Du(s,t);throw Fs("To use ref(service, url), the first argument must be a Storage instance.")}else return Si(s,t)}function Hn(s,t){const r=t==null?void 0:t[di];return r==null?null:ve.makeFromBucketSpec(r,s)}function Eu(s,t,r,n={}){s.host=`${t}:${r}`,s._protocol="http";const{mockUserToken:a}=n;a&&(s._overrideAuthToken=typeof a=="string"?a:Go(a,s.app.options.projectId))}class mn{constructor(t,r,n,a,i){this.app=t,this._authProvider=r,this._appCheckProvider=n,this._url=a,this._firebaseVersion=i,this._bucket=null,this._host=ci,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cd,this._maxUploadRetryTime=kd,this._requests=new Set,a!=null?this._bucket=ve.makeFromBucketSpec(a,this._host):this._bucket=Hn(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ve.makeFromBucketSpec(this._url,t):this._bucket=Hn(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Un("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Un("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const r=await t.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Nt(this,t)}_makeRequest(t,r,n,a,i=!0){if(this._deleted)return new Ud(ui());{const o=Qd(t,this._appId,n,a,r,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,r){const[n,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,r,n,a).getPromise()}}const zn="@firebase/storage",Gn="0.13.2";/**
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
 */const Ci="storage";function ut(s,t,r){return s=Mr(s),Cu(s,t,r)}function mt(s){return s=Mr(s),ku(s)}function pt(s,t){return s=Mr(s),Pu(s,t)}function ki(s=ks(),t){s=Mr(s);const n=Ho(s,Ci).getImmediate({identifier:t}),a=zo("storage");return a&&Iu(n,...a),n}function Iu(s,t,r,n={}){Eu(s,t,r,n)}function Ru(s,{instanceIdentifier:t}){const r=s.getProvider("app").getImmediate(),n=s.getProvider("auth-internal"),a=s.getProvider("app-check-internal");return new mn(r,n,a,t,_o)}function Ou(){$o(new Bo(Ci,Ru,"PUBLIC").setMultipleInstances(!0)),Cn(zn,Gn,""),Cn(zn,Gn,"esm2017")}Ou();const Cr={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"};console.log("Firebase config loaded:",{hasApiKey:!!Cr.apiKey,hasAuthDomain:!!Cr.authDomain,projectId:Cr.projectId,usingEnvVars:!1});const pn=Ts(Cr),Dt=Da(pn),le=Pa(pn),Pt=ki(pn),Ti=p.createContext();function kt(){return p.useContext(Ti)}function Lu({children:s}){const[t,r]=p.useState(null),[n,a]=p.useState(!0);p.useEffect(()=>{let c,u;try{c=Ea(Dt,async m=>{try{if(m)try{const b=await Qt(Y(le,"users",m.uid)),y=b.exists()?b.data():null;r({uid:m.uid,email:m.email,displayName:m.displayName,photoURL:m.photoURL,...y})}catch(b){console.log("⚠️ Firestore not available, using basic user data:",b.message),r({uid:m.uid,email:m.email,displayName:m.displayName,photoURL:m.photoURL})}else r(null)}catch(b){console.error("Error in auth state change:",b),r(null)}finally{a(!1)}}),u=setTimeout(()=>{console.log("Firebase auth timeout - setting loading to false"),a(!1)},5e3)}catch(m){console.error("Error setting up auth listener:",m),a(!1)}return()=>{c&&c(),u&&clearTimeout(u)}},[]);const d={user:t,loading:n,signInWithGoogle:async()=>{try{const c=new Jo;c.addScope("email"),c.addScope("profile");const u=await kn(Dt,c);try{await pe(Y(le,"users",u.user.uid),{uid:u.user.uid,email:u.user.email,displayName:u.user.displayName,photoURL:u.user.photoURL,createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(m){console.warn("Failed to save user data to Firestore:",m)}console.log("Successfully signed in!")}catch(c){throw console.error("Failed to sign in:",c.message),c}},signInWithGitHub:async()=>{var c,u;try{console.log("Using Firebase GitHub authentication");const m=new qo;m.addScope("user:email");const b=await kn(Dt,m);try{await pe(Y(le,"users",b.user.uid),{uid:b.user.uid,email:b.user.email,displayName:b.user.displayName||((c=b.user.email)==null?void 0:c.split("@")[0])||"GitHub User",photoURL:b.user.photoURL,provider:"github",createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(y){console.warn("Failed to save user data to Firestore:",y)}console.log("Successfully signed in with GitHub!")}catch(m){if(console.error("GitHub authentication error:",m.message),m.code==="auth/account-exists-with-different-credential"){const b=(u=m.customData)==null?void 0:u.email;if(b)try{const y=await Vo(Dt,b);throw console.log("Available sign-in methods for",b,":",y),y&&y.length>0?y.includes("google.com")?new Error(`An account with ${b} already exists using Google. Please sign in with Google instead, then you can link your GitHub account.`):y.includes("password")?new Error(`An account with ${b} already exists using email/password. Please sign in with your existing method instead.`):new Error(`An account with ${b} already exists. Please sign in with your existing method instead.`):new Error(`An account with ${b} already exists. Please try signing in with Google first, then you can link your GitHub account.`)}catch(y){throw console.error("Failed to check sign-in methods:",y.message),new Error(`An account with ${b} already exists. Please sign in with your existing method instead.`)}else throw new Error("An account with this email already exists. Please sign in with your existing method instead.")}else throw m.code==="auth/internal-error"?(console.error("GitHub authentication internal error:",m.message),new Error("GitHub authentication is not properly configured. Please check Firebase Console settings.")):(console.error("Failed to sign in with GitHub:",m.message),m)}},logout:async()=>{try{await Wo(Dt),console.log("Successfully signed out!")}catch(c){console.error("Failed to sign out:",c.message)}},auth:Dt,db:le};return e.jsx(Ti.Provider,{value:d,children:n?e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-muted-foreground",children:"Loading DreamBuild..."})]})}):s})}const Ai=p.createContext();function Ye(){return p.useContext(Ai)}function Fu({children:s}){const{user:t,db:r}=kt(),[n,a]=p.useState({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),[i,o]=p.useState([]),[l,d]=p.useState(!1),c=p.useCallback(w=>{a(g=>({...g,activeFile:w,lastModified:new Date}))},[]),u=p.useCallback((w,g)=>{console.log(`🔄 Updating file: ${w} (${(g==null?void 0:g.length)||0} chars)`),console.log("🔄 Content preview:",(g==null?void 0:g.substring(0,100))||"No content"),a(P=>{const I={...P,files:{...P.files,[w]:g},lastModified:new Date};return console.log("📁 Project files after update:",Object.keys(I.files)),console.log("📁 Files content:",Object.keys(I.files).map(E=>{var O,D;return{filename:E,length:((O=I.files[E])==null?void 0:O.length)||0,preview:((D=I.files[E])==null?void 0:D.substring(0,50))||"No content"}})),I})},[]),m=p.useCallback(w=>{a(g=>{const P={...g,config:{...g.config,...w},lastModified:new Date};return w.name&&(P.name=w.name,console.log(`📝 ProjectContext: Updated project name to: ${w.name}`)),P})},[]),b=p.useCallback(async()=>{if(!t){console.log("⚠️ loadProjects: No user found");return}console.log("🔄 Loading projects for user:",t.uid),d(!0);try{const{collection:w,query:g,where:P,getDocs:I,orderBy:E}=await He(async()=>{const{collection:B,query:T,where:S,getDocs:N,orderBy:M}=await import("./firebase-C6jQElOd.js").then(H=>H.B);return{collection:B,query:T,where:S,getDocs:N,orderBy:M}},[]),O=w(r,"projects"),D=g(O,P("userId","==",t.uid),E("lastModified","desc"));console.log("🔥 Querying Firestore for projects...");const C=(await I(D)).docs.map(B=>({id:B.id,...B.data()}));console.log("📦 Loaded projects:",C.length,"projects"),console.log("📋 Projects list:",C),o(C)}catch(w){console.error("❌ Failed to load projects:",w),$.error("Failed to load projects: "+w.message)}finally{d(!1)}},[t,r]);p.useEffect(()=>{t?(console.log("🔄 User authenticated, loading projects automatically..."),b()):(console.log("⚠️ No user, clearing projects"),o([]))},[t,b]);const y=p.useCallback(async(w=null)=>{if(!t){$.error("Please sign in to save projects");return}d(!0);try{const g={...n,name:w||n.name,userId:t.uid,lastModified:new Date},{doc:P,setDoc:I,collection:E}=await He(async()=>{const{doc:D,setDoc:_,collection:C}=await import("./firebase-C6jQElOd.js").then(B=>B.B);return{doc:D,setDoc:_,collection:C}},[]),O=P(E(r,"projects"));await I(O,{...g,id:O.id,createdAt:n.id?void 0:new Date}),a(D=>({...D,id:O.id})),$.success("Project saved successfully!"),await b()}catch(g){$.error("Failed to save project: "+g.message)}finally{d(!1)}},[n,t,r,b]),x=p.useCallback(async w=>{if(!t){$.error("Please sign in to save projects");return}console.log("💾 saveExternalProject called with:",w),d(!0);try{const g={...w,userId:t.uid,lastModified:new Date,createdAt:w.createdAt||new Date};console.log("📝 Project to save:",g);const{doc:P,setDoc:I,collection:E}=await He(async()=>{const{doc:_,setDoc:C,collection:B}=await import("./firebase-C6jQElOd.js").then(T=>T.B);return{doc:_,setDoc:C,collection:B}},[]),O=P(E(r,"projects")),D={...g,id:O.id};console.log("🔥 Saving to Firestore:",D),await I(O,D),console.log("✅ Project saved to Firestore with ID:",O.id),$.success(`Project "${w.name}" saved successfully!`),console.log("🔄 Refreshing projects list..."),await b(),console.log("✅ Projects list refreshed")}catch(g){console.error("❌ Failed to save external project:",g),$.error("Failed to save project")}finally{d(!1)}},[t,r,b]),f=p.useCallback(async w=>{if(t){d(!0);try{const{doc:g,getDoc:P}=await He(async()=>{const{doc:O,getDoc:D}=await import("./firebase-C6jQElOd.js").then(_=>_.B);return{doc:O,getDoc:D}},[]),I=g(r,"projects",w),E=await P(I);if(E.exists()){const O={id:E.id,...E.data()};a(O),$.success("Project loaded successfully!")}else $.error("Project not found")}catch(g){$.error("Failed to load project: "+g.message)}finally{d(!1)}}},[t,r]),h=p.useCallback(async w=>{if(t){d(!0);try{const{doc:g,deleteDoc:P}=await He(async()=>{const{doc:I,deleteDoc:E}=await import("./firebase-C6jQElOd.js").then(O=>O.B);return{doc:I,deleteDoc:E}},[]);await P(g(r,"projects",w)),o(I=>I.filter(E=>E.id!==w)),$.success("Project deleted successfully!")}catch(g){$.error("Failed to delete project: "+g.message)}finally{d(!1)}}},[t,r]),k=p.useCallback(()=>{a({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),$.success("New project created!")},[]),j=p.useCallback(w=>{console.log("📁 Adding files to project:",Object.keys(w)),a(g=>({...g,files:{...g.files,...w},lastModified:new Date})),$.success(`${Object.keys(w).length} files added to project!`)},[]),v={currentProject:n,projects:i,isLoading:l,switchFile:c,updateFile:u,updateConfig:m,saveProject:y,saveExternalProject:x,loadProjects:b,loadProject:f,deleteProject:h,createNewProject:k,addFilesToProject:j};return e.jsx(Ai.Provider,{value:v,children:s})}const Mu=()=>{const{theme:s,toggleTheme:t}=Wr(),{user:r,logout:n}=kt(),[a,i]=p.useState(!1),[o,l]=p.useState(!1),[d,c]=p.useState(!1),u=ot();ze.useEffect(()=>{const y=()=>{l(window.innerWidth>=768)};return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]),ze.useEffect(()=>{const y=x=>{d&&!x.target.closest(".user-menu")&&c(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[d]);const m=[{name:"Home",href:"/",icon:Ee},{name:"AI Builder",href:"/ai-builder",icon:Q},{name:"Templates",href:"/templates",icon:jt},{name:"Gallery",href:"/gallery",icon:Vs},{name:"Education",href:"/education",icon:xt},{name:"Projects",href:"/projects",icon:tt},{name:"Dashboard",href:"/dashboard",icon:Ge}],b=y=>u.pathname===y;return e.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsxs(oe,{to:"/",className:"flex items-center gap-3 group",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg",children:e.jsx(jt,{className:"h-6 w-6 text-primary-foreground"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-xl font-bold text-high-contrast",children:"DreamBuild"}),e.jsx("span",{className:"text-xs text-muted-foreground -mt-1",children:"AI Development Platform"})]})]}),e.jsx("div",{className:"hidden md:flex items-center gap-1",children:m.map(y=>{const x=y.icon;return e.jsxs(oe,{to:y.href,className:`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${b(y.href)?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[e.jsx(x,{className:"h-4 w-4"}),y.name]},y.name)})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:t,className:"p-2 rounded-lg hover:bg-muted transition-colors",title:`Switch to ${s==="light"?"dark":"light"} mode`,children:s==="light"?e.jsx(Xo,{className:"h-4 w-4 text-muted-foreground"}):e.jsx(Qo,{className:"h-4 w-4 text-muted-foreground"})}),r?e.jsxs("div",{className:"relative user-menu",children:[e.jsxs("button",{onClick:()=>c(!d),className:"flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors",children:[e.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-sm font-semibold text-primary",children:(r.displayName||r.email||"U").charAt(0).toUpperCase()})}),e.jsx("span",{className:"hidden sm:inline text-sm font-medium text-foreground",children:r.displayName||r.email})]}),d&&e.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-[60]",children:[e.jsxs("div",{className:"p-3 border-b border-border",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:r.email})]}),e.jsxs("div",{className:"p-1",children:[e.jsxs(oe,{to:"/dashboard",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[e.jsx(tt,{className:"h-4 w-4"}),"Dashboard"]}),e.jsxs(oe,{to:"/settings",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[e.jsx(As,{className:"h-4 w-4"}),"Settings"]}),e.jsx("hr",{className:"my-1"}),e.jsxs("button",{onClick:()=>{n(),c(!1)},className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors",children:[e.jsx(An,{className:"h-4 w-4"}),"Sign Out"]})]})]})]}):e.jsxs(oe,{to:"/login",className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[e.jsx(Ee,{className:"h-4 w-4"}),"Sign In"]}),!o&&e.jsx("button",{onClick:()=>i(!a),className:"p-2 rounded-lg hover:bg-muted transition-colors ml-2",children:a?e.jsx(Js,{className:"h-4 w-4"}):e.jsx(Zo,{className:"h-4 w-4"})})]})]}),!o&&a&&e.jsx("div",{className:"border-t border-border bg-background",children:e.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[m.map(y=>{const x=y.icon;return e.jsxs(oe,{to:y.href,onClick:()=>i(!1),className:`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border ${b(y.href)?"bg-primary text-primary-foreground border-primary shadow-md":"bg-card text-foreground border-border hover:bg-muted hover:border-primary/30 shadow-sm"}`,children:[e.jsx(x,{className:"h-5 w-5"}),y.name]},y.name)}),r?e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsxs("div",{className:"px-4 py-2 border-b border-border",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:r.email})]}),e.jsxs(oe,{to:"/dashboard",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[e.jsx(tt,{className:"h-5 w-5"}),"Dashboard"]}),e.jsxs(oe,{to:"/settings",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[e.jsx(As,{className:"h-5 w-5"}),"Settings"]}),e.jsxs("button",{onClick:()=>{n(),i(!1)},className:"w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg",children:[e.jsx(An,{className:"h-5 w-5"}),"Sign Out"]})]}):e.jsxs(oe,{to:"/login",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg text-base font-semibold",children:[e.jsx(Ee,{className:"h-5 w-5"}),"Sign In"]})]})})]})})},$u=()=>{const[s,t]=p.useState(""),[r,n]=p.useState(!1),a=i=>{i.preventDefault(),s&&(n(!0),t(""),setTimeout(()=>n(!1),3e3))};return e.jsx("footer",{className:"bg-background border-t border-border",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:e.jsx(jt,{className:"h-5 w-5 text-primary-foreground"})}),e.jsx("span",{className:"text-xl font-bold text-foreground",children:"DreamBuild"})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"AI-powered development platform for modern developers."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"GitHub",children:e.jsx(he,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),e.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Twitter",children:e.jsx(Ys,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),e.jsx("a",{href:"mailto:contact@dreambuild.ai",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Email",children:e.jsx(Mt,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Stay Updated"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Get the latest updates and features."}),e.jsxs("form",{onSubmit:a,className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"email",value:s,onChange:i=>t(i.target.value),placeholder:"Enter your email",className:"flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",required:!0}),e.jsx("button",{type:"submit",disabled:r,className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:r?e.jsx(Mt,{className:"h-4 w-4"}):e.jsx(Ks,{className:"h-4 w-4"})})]}),r&&e.jsx("p",{className:"text-sm text-green-600",children:"Thanks for subscribing!"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Quick Links"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:e.jsx("a",{href:"/ai-builder",className:"text-muted-foreground hover:text-foreground transition-colors",children:"AI Builder"})}),e.jsx("li",{children:e.jsx("a",{href:"/templates",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Templates"})}),e.jsx("li",{children:e.jsx("a",{href:"/documentation",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Documentation"})}),e.jsx("li",{children:e.jsx("a",{href:"/support",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Support"})})]})]})]}),e.jsx("div",{className:"border-t border-border pt-8 mt-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:e.jsx("span",{children:"© 2024 Bradley Virtual Solutions, LLC"})}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsx("a",{href:"/privacy",className:"hover:text-foreground transition-colors",children:"Privacy"}),e.jsx("a",{href:"/terms",className:"hover:text-foreground transition-colors",children:"Terms"}),e.jsx("a",{href:"/contact",className:"hover:text-foreground transition-colors",children:"Contact"})]})]})})]})})},Bu=()=>{const s=[{icon:Q,title:"AI Code Generation",description:"Generate code with AI assistance."},{icon:tt,title:"Smart Templates",description:"Pre-built templates for quick start."},{icon:$t,title:"Real-time Collaboration",description:"Work together with your team."}],t=[{label:"AI Models",value:"10+",icon:Q},{label:"Languages",value:"50+",icon:tt},{label:"Templates",value:"25+",icon:Ia}];return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsxs("section",{className:"relative pt-20 pb-20",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5"}),e.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative flex justify-center",children:e.jsxs("div",{className:"text-center max-w-4xl w-full ml-8",children:[e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8",children:[e.jsx(jt,{className:"h-4 w-4"}),"AI-Powered Development Platform"]}),e.jsxs(R.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight",children:["Build with"," ",e.jsx("span",{className:"bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent",children:"AI"})]}),e.jsx(R.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed",children:"Create amazing projects with AI-powered code generation. Simple, fast, and effective."}),e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-md mx-auto",children:[e.jsxs(oe,{to:"/ai-builder",className:"inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl",children:[e.jsx(Ee,{className:"h-5 w-5"}),"Start Building"]}),e.jsxs(oe,{to:"/templates",className:"inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold",children:[e.jsx(Q,{className:"h-5 w-5"}),"Browse Templates"]})]}),e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto",children:t.map((r,n)=>{const a=r.icon;return e.jsxs("div",{className:"text-center group",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[e.jsx(a,{className:"h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"}),e.jsx("div",{className:"text-3xl font-bold text-primary group-hover:text-primary-light transition-colors",children:r.value})]}),e.jsx("div",{className:"text-sm text-muted-foreground",children:r.label})]},n)})})]})})]}),e.jsx("section",{className:"py-20 bg-background",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center mb-16 max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Key Features"}),e.jsx("p",{className:"text-lg text-muted-foreground",children:"Everything you need to build amazing projects"})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl ml-8",children:s.map((r,n)=>e.jsxs(R.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:n*.1},viewport:{once:!0},whileHover:{y:-5},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-xl hover:bg-card/70 transition-all duration-300 group cursor-pointer",children:[e.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300",children:e.jsx(r.icon,{className:"h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"})}),e.jsx("h3",{className:"text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300",children:r.title}),e.jsx("p",{className:"text-foreground leading-relaxed",children:r.description})]},n))})})]})}),e.jsxs("section",{className:"py-20 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary-light/5"}),e.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative",children:e.jsxs(R.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"max-w-4xl mx-auto ml-8",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Ready to Build?"}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"Start creating amazing projects with AI-powered development tools."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs(oe,{to:"/ai-builder",className:"inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl",children:[e.jsx(Ee,{className:"h-5 w-5"}),"Get Started"]}),e.jsxs(oe,{to:"/templates",className:"inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold",children:[e.jsx(Q,{className:"h-5 w-5"}),"View Templates"]})]})]})})]})]})};class _u{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(t.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(t,r,"firebase");const a=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i={id:a,projectName:r||"dream-app",files:t.files,config:t.config,deployedAt:new Date,status:"uploading",platform:"firebase"},o={};for(const[m,b]of Object.entries(t.files))if(b&&b.trim()){const y=pt(Pt,`projects/${a}/${m}`),x=new Blob([b],{type:this.getMimeType(m)});await ut(y,x);const f=await mt(y);o[m]=f}const l=this.createHostedHTML(t.files),d=pt(Pt,`projects/${a}/index.html`),c=new Blob([l],{type:"text/html"});await ut(d,c);const u=await mt(d);return await pe(Y(le,"deployments",a),{...i,status:"completed",hostedURL:u,files:o,completedAt:new Date}),this.deployments.set(a,i),console.log("✅ Firebase deployment completed:",u),{success:!0,deploymentId:a,url:u,platform:"firebase"}}catch(n){throw console.error("❌ Firebase deployment failed:",n),new Error(`Firebase deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const n=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Apple App Store deployment is only available for mobile applications");const a=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${a} app to Apple App Store...`);const i=await this.generateMobileAppFiles(t,r,a),o=await this.executeAppleStoreBuild(i,r,a),l={id:n,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:o.success?"completed":"failed",platform:"apple-app-store",framework:a,buildInstructions:this.generateAppleStoreInstructions(a,r),terminalOutput:o.output,buildCommands:o.commands},d=this.createAppleStoreInstructionsHTML(r,a,l.buildInstructions,o),c=pt(Pt,`apple-store/${n}/index.html`),u=new Blob([d],{type:"text/html"});await ut(c,u);const m=await mt(c);return await pe(Y(le,"deployments",n),{...l,hostedURL:m}),this.deployments.set(n,l),{success:o.success,deploymentId:n,url:m,platform:"apple-app-store",framework:a,buildInstructions:l.buildInstructions,terminalOutput:o.output,buildCommands:o.commands,message:o.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Apple App Store deployment failed:",n),new Error(`Apple App Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(t,r){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const n=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(t.files))throw new Error("Google Play Store deployment is only available for mobile applications");const a=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${a} app to Google Play Store...`);const i=await this.generateMobileAppFiles(t,r,a),o=await this.executeGooglePlayBuild(i,r,a),l={id:n,projectName:r||"mobile-app",files:{...t.files,...i},config:t.config,deployedAt:new Date,status:o.success?"completed":"failed",platform:"google-play-store",framework:a,buildInstructions:this.generateGooglePlayInstructions(a,r),terminalOutput:o.output,buildCommands:o.commands},d=this.createGooglePlayInstructionsHTML(r,a,l.buildInstructions,o),c=pt(Pt,`google-play/${n}/index.html`),u=new Blob([d],{type:"text/html"});await ut(c,u);const m=await mt(c);return await pe(Y(le,"deployments",n),{...l,hostedURL:m}),this.deployments.set(n,l),{success:o.success,deploymentId:n,url:m,platform:"google-play-store",framework:a,buildInstructions:l.buildInstructions,terminalOutput:o.output,buildCommands:o.commands,message:o.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Google Play Store deployment failed:",n),new Error(`Google Play Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(t,r,n=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const a=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!n){const i=r.toLowerCase().replace(/[^a-z0-9-]/g,"-"),o=this.createHostedHTML(t.files),l=pt(Pt,`github-pages/${a}/index.html`),d=new Blob([o],{type:"text/html"});await ut(l,d);const c=await mt(l);return await pe(Y(le,"deployments",a),{id:a,projectName:r,files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:c,repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}),{success:!0,deploymentId:a,url:c,platform:"github-pages",repoName:i,instructions:this.generateGitHubInstructions(r,t.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(a){throw console.error("❌ GitHub deployment failed:",a),new Error(`GitHub deployment failed: ${a.message}`)}finally{this.isDeploying=!1}}createHostedHTML(t){const r=t["index.html"]||this.generateDefaultHTML(),n=t["style.css"]||"",a=t["script.js"]||"";let i=r;return n.trim()&&(i.includes("</head>")?i=i.replace("</head>",`<style>${n}</style>
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
</html>`}getMimeType(t){const r=t.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[r]||"text/plain"}generateGitHubInstructions(t,r){const n=t.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${n}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${n}`],files:Object.keys(r),repoName:n}}getDeploymentStatus(t){return this.deployments.get(t)}async getAllDeployments(){try{const{collection:t,query:r,orderBy:n,limit:a,getDocs:i}=await He(async()=>{const{collection:c,query:u,orderBy:m,limit:b,getDocs:y}=await import("./firebase-C6jQElOd.js").then(x=>x.B);return{collection:c,query:u,orderBy:m,limit:b,getDocs:y}},[]),o=t(le,"deployments"),l=r(o,n("deployedAt","desc"),a(20));return(await i(l)).docs.map(c=>({id:c.id,...c.data()}))}catch(t){return console.error("Error fetching deployments:",t),[]}}async deleteDeployment(t){try{const{deleteDoc:r}=await He(async()=>{const{deleteDoc:n}=await import("./firebase-C6jQElOd.js").then(a=>a.B);return{deleteDoc:n}},[]);return await r(Y(le,"deployments",t)),this.deployments.delete(t),!0}catch(r){return console.error("Error deleting deployment:",r),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(t){const r=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],n=Object.keys(t);return r.some(a=>n.some(i=>i.includes(a)))}async deployMobileApp(t,r,n){const a=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=this.detectMobileFramework(t.files);console.log(`📱 Deploying ${i} mobile app...`);const o={id:a,projectName:r||"mobile-app",files:t.files,config:t.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:i,buildInstructions:this.generateMobileBuildInstructions(i,r,n)},l=this.createMobileAppInstructionsHTML(r,i,o.buildInstructions),d=pt(Pt,`mobile-apps/${a}/index.html`),c=new Blob([l],{type:"text/html"});await ut(d,c);const u=await mt(d);return await pe(Y(le,"deployments",a),{...o,hostedURL:u}),this.deployments.set(a,o),{success:!0,deploymentId:a,url:u,platform:"mobile",framework:i,buildInstructions:o.buildInstructions}}detectMobileFramework(t){const r=Object.keys(t);return r.some(n=>n.includes("pubspec.yaml")||n.includes("main.dart"))?"Flutter":r.some(n=>n.includes("App.js")&&n.includes("package.json"))?"React Native":r.some(n=>n.includes("ionic.config.json"))?"Ionic":r.some(n=>n.includes("capacitor.config.json"))?"Capacitor":r.some(n=>n.includes("manifest.json")&&n.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(t,r,n){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:t,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:t,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(t,r){switch(r.toLowerCase().replace(/[^a-z0-9]/g,""),t){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:t,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(t,r,n){return`<!DOCTYPE html>
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
</html>`}async generateMobileAppFiles(t,r,n){try{console.log(`📱 Generating ${n} mobile app files...`);const{default:a}=await He(async()=>{const{default:o}=await import("./mobileAppService-CFUDTDME.js");return{default:o}},[]),i=await a.generateMobileApp(t,r,n);return console.log(`✅ Generated ${Object.keys(i).length} mobile app files`),i}catch(a){throw console.error("❌ Failed to generate mobile app files:",a),new Error(`Failed to generate mobile app files: ${a.message}`)}}async executeAppleStoreBuild(t,r,n){const a=[],i=[];try{console.log(`🍎 Executing Apple App Store build for ${n}...`);const o=`/tmp/dreambuild-${r}-${Date.now()}`;a.push(`mkdir -p ${o}`);for(const[l,d]of Object.entries(t)){const c=`${o}/${l}`;a.push(`cat > ${c} << 'EOF'
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
`),commands:t,projectDir:r};return console.log("✅ Terminal commands executed successfully"),a}catch(a){return console.error("❌ Terminal command execution failed:",a),{success:!1,output:`Error: ${a.message}`,commands:t,error:a.message}}}}const xr=new _u,Uu=()=>{const{currentProject:s,switchFile:t,updateFile:r,saveProject:n,createNewProject:a,updateConfig:i}=Ye(),[o,l]=p.useState(!1),[d,c]=p.useState(""),[u,m]=p.useState(!1),[b,y]=p.useState(!1),[x,f]=p.useState(!1),[h,k]=p.useState("firebase"),[j,v]=p.useState(!1),[w,g]=p.useState(""),[P,I]=p.useState({show:!1,x:0,y:0,filename:""}),E=p.useRef(null),O={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},D=L=>O[L]||"📄",_=L=>{t(L)},C=(L,z)=>{L.preventDefault(),I({show:!0,x:L.clientX,y:L.clientY,filename:z})},B=L=>{const{filename:z}=P;switch(I({show:!1,x:0,y:0,filename:""}),L){case"download":M(z);break;case"delete":N(z);break;case"rename":$.info("Rename functionality coming soon!");break;case"copy":$.info("Copy functionality coming soon!");break}},T=()=>{I({show:!1,x:0,y:0,filename:""})};p.useEffect(()=>{const L=z=>{E.current&&!E.current.contains(z.target)&&T()};return P.show&&document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}},[P.show]);const S=()=>{if(d.trim()){const L=d.includes(".")?d:`${d}.js`;r(L,""),t(L),c(""),l(!1),$.success(`Created ${L}`)}},N=L=>{if(Object.keys(s.files).length<=1){$.error("Cannot delete the last file");return}if(confirm(`Delete ${L}?`)){const z={...s.files};if(delete z[L],Object.keys(z).forEach(U=>{s.files[U]=z[U]}),s.activeFile===L){const U=Object.keys(z);t(U[0])}$.success(`Deleted ${L}`)}},M=L=>{const z=s.files[L]||"",U=new Blob([z],{type:"text/plain"}),F=URL.createObjectURL(U),J=document.createElement("a");J.href=F,J.download=L,document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(F),$.success(`Downloaded ${L}`)},H=()=>{const L={name:s.name,files:s.files,config:s.config,timestamp:new Date().toISOString()},z=new Blob([JSON.stringify(L,null,2)],{type:"application/json"}),U=URL.createObjectURL(z),F=document.createElement("a");F.href=U,F.download=`${s.name}.json`,document.body.appendChild(F),F.click(),document.body.removeChild(F),URL.revokeObjectURL(U),$.success("Project downloaded!")},K=L=>{const z=L.target.files[0];if(z){const U=new FileReader;U.onload=F=>{r(z.name,F.target.result),t(z.name),$.success(`Uploaded ${z.name}`)},U.readAsText(z)}},Te=async()=>{if(!w.trim()){$.error("Please enter a project name");return}if(Object.keys(s.files).length===0){$.error("Please generate some code first");return}f(!0);try{const L=await G(s,w),z=[];if(j){$.info("Deploying to both Firebase and GitHub...");const[U,F]=await Promise.allSettled([xr.deployToFirebase(L,w),xr.deployToGitHub(L,w)]);if(U.status==="fulfilled"&&U.value.success&&z.push({platform:"Firebase",...U.value}),F.status==="fulfilled"&&F.value.success&&z.push({platform:"GitHub",...F.value}),z.length===2)$.success("Successfully deployed to both Firebase and GitHub!");else if(z.length===1)$.success(`Deployed to ${z[0].platform} (${z.length===1?"one":"both"} platform${z.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let U;h==="firebase"?U=await xr.deployToFirebase(L,w):h==="github"&&(U=await xr.deployToGitHub(L,w)),U.success&&(z.push({platform:h,...U}),$.success(`Successfully deployed to ${U.platform}!`))}z.forEach(U=>{U.url&&window.open(U.url,"_blank"),U.instructions&&(console.log(`${U.platform} deployment instructions:`,U.instructions),$.success(`Check console for ${U.platform} Pages setup instructions`))}),y(!1),g(""),v(!1)}catch(L){$.error(`Deployment failed: ${L.message}`)}finally{f(!1)}},G=async(L,z)=>{const U={...L};return U.files["index.html"]||(U.files["index.html"]=V(z)),U.files["package.json"]||(U.files["package.json"]=ee(z,U.config)),U.files["README.md"]||(U.files["README.md"]=ue(z,U.config)),U.files["index.html"]=ss(U.files["index.html"],z),U.files["manifest.json"]||(U.files["manifest.json"]=xe(z)),U},V=L=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${L}</title>
    <meta name="description" content="Built with DreamBuild - Universal AI Development Platform">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563eb">
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 ${L}</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 10px;">Your app is ready!</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 20px;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`,ee=(L,z)=>JSON.stringify({name:L.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${L}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",z.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),ue=(L,z)=>{var U;return`# ${L}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${z.appType||"Frontend"}
- **Language**: ${z.language||"JavaScript"}
- **Styling**: ${z.styling||"Custom CSS"}
- **Features**: ${((U=z.features)==null?void 0:U.join(", "))||"Basic functionality"}

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
`},xe=L=>JSON.stringify({name:L,short_name:L.split(" ")[0],description:`Built with DreamBuild - ${L}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),ss=(L,z)=>{let U=L;return U.includes("<!DOCTYPE html>")||(U=`<!DOCTYPE html>
${U}`),U.includes('<meta name="viewport"')||(U=U.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),U.includes('<meta name="description"')||(U=U.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${z}">`)),U.includes('<meta name="theme-color"')||(U=U.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),U.includes("manifest.json")||(U=U.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),U},ns=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return e.jsxs(R.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[e.jsxs("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:e.jsx(Me,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>l(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:e.jsx(Bt,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),e.jsx("button",{onClick:()=>m(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:e.jsx(Ot,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>n(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[e.jsx(Ra,{className:"h-3 w-3"}),"Save"]}),e.jsxs("button",{onClick:()=>y(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(s.files).length===0,children:[e.jsx(Ee,{className:"h-3 w-3"}),"Deploy"]}),e.jsxs("button",{onClick:H,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[e.jsx(We,{className:"h-3 w-3"}),"Export"]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(s.files).length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[e.jsx("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:e.jsx(el,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),e.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),e.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):e.jsxs("div",{className:"py-2",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[e.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:e.jsx(Me,{className:"h-3 w-3 text-white"})}),e.jsx("span",{children:s.name||"Untitled Project"}),e.jsxs("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(s.files).length," files"]})]}),Object.keys(s.files).map(L=>e.jsxs(R.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${s.activeFile===L?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>_(L),onContextMenu:z=>C(z,L),children:[e.jsx("div",{className:"w-4 flex items-center justify-center",children:e.jsx("div",{className:"w-px h-4 bg-border"})}),e.jsx("div",{className:"flex items-center justify-center w-5 h-5",children:e.jsx("span",{className:"text-base",children:D(L)})}),e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("span",{className:"text-sm font-medium truncate",children:L})}),s.activeFile===L&&e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},L))]})}),e.jsx("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:e.jsxs("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:e.jsx(Oa,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),e.jsx("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:K,multiple:!0})]})}),e.jsx(Ze,{children:o&&e.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>l(!1),children:e.jsxs(R.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:L=>L.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),e.jsx("input",{type:"text",value:d,onChange:L=>c(L.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:ns.map(L=>e.jsxs("button",{onClick:()=>c(`new-file${L.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[e.jsx("span",{children:L.icon}),e.jsx("span",{className:"truncate",children:L.name})]},L.extension))})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>l(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:S,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),e.jsx(Ze,{children:u&&e.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>m(!1),children:e.jsxs(R.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:L=>L.stopPropagation(),children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:s.name,onChange:L=>i({name:L.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),e.jsxs("select",{value:s.config.appType,onChange:L=>i({appType:L.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"frontend",children:"Frontend"}),e.jsx("option",{value:"backend",children:"Backend"}),e.jsx("option",{value:"fullstack",children:"Full Stack"}),e.jsx("option",{value:"mobile",children:"Mobile"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Language"}),e.jsxs("select",{value:s.config.language,onChange:L=>i({language:L.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"javascript",children:"JavaScript"}),e.jsx("option",{value:"typescript",children:"TypeScript"}),e.jsx("option",{value:"python",children:"Python"}),e.jsx("option",{value:"java",children:"Java"}),e.jsx("option",{value:"csharp",children:"C#"}),e.jsx("option",{value:"cpp",children:"C++"}),e.jsx("option",{value:"c",children:"C"}),e.jsx("option",{value:"rust",children:"Rust"}),e.jsx("option",{value:"go",children:"Go"}),e.jsx("option",{value:"php",children:"PHP"}),e.jsx("option",{value:"ruby",children:"Ruby"}),e.jsx("option",{value:"swift",children:"Swift"}),e.jsx("option",{value:"kotlin",children:"Kotlin"}),e.jsx("option",{value:"dart",children:"Dart"}),e.jsx("option",{value:"scala",children:"Scala"}),e.jsx("option",{value:"html",children:"HTML"}),e.jsx("option",{value:"css",children:"CSS"}),e.jsx("option",{value:"sql",children:"SQL"}),e.jsx("option",{value:"r",children:"R"}),e.jsx("option",{value:"matlab",children:"MATLAB"}),e.jsx("option",{value:"perl",children:"Perl"}),e.jsx("option",{value:"lua",children:"Lua"}),e.jsx("option",{value:"bash",children:"Bash/Shell"}),e.jsx("option",{value:"powershell",children:"PowerShell"}),e.jsx("option",{value:"yaml",children:"YAML"}),e.jsx("option",{value:"json",children:"JSON"}),e.jsx("option",{value:"xml",children:"XML"}),e.jsx("option",{value:"markdown",children:"Markdown"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),e.jsxs("select",{value:s.config.framework||"none",onChange:L=>i({framework:L.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[e.jsx("option",{value:"none",children:"None"}),e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue.js"}),e.jsx("option",{value:"angular",children:"Angular"}),e.jsx("option",{value:"svelte",children:"Svelte"}),e.jsx("option",{value:"nextjs",children:"Next.js"}),e.jsx("option",{value:"nuxtjs",children:"Nuxt.js"}),e.jsx("option",{value:"express",children:"Express.js"}),e.jsx("option",{value:"fastapi",children:"FastAPI"}),e.jsx("option",{value:"django",children:"Django"}),e.jsx("option",{value:"flask",children:"Flask"}),e.jsx("option",{value:"spring",children:"Spring Boot"}),e.jsx("option",{value:"laravel",children:"Laravel"}),e.jsx("option",{value:"rails",children:"Ruby on Rails"}),e.jsx("option",{value:"flutter",children:"Flutter"}),e.jsx("option",{value:"react-native",children:"React Native"}),e.jsx("option",{value:"ionic",children:"Ionic"}),e.jsx("option",{value:"electron",children:"Electron"})]})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>m(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),e.jsx("button",{onClick:()=>{n(),m(!1),$.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),e.jsx(Ze,{children:b&&e.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>y(!1),children:e.jsxs(R.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:L=>L.stopPropagation(),children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[e.jsx(Ee,{className:"h-5 w-5"}),"Deploy Your App"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:w,onChange:L=>g(L.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"firebase",checked:h==="firebase",onChange:L=>k(L.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs",children:"F"})}),e.jsx("span",{children:"Firebase Hosting"})]})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[e.jsx("input",{type:"radio",value:"github",checked:h==="github",onChange:L=>k(L.target.value),className:"text-white"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(he,{className:"h-4 w-4"}),e.jsx("span",{children:"GitHub Pages"})]})]})]})]}),e.jsxs("div",{className:"p-3 bg-muted rounded-md",children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),e.jsx("div",{className:"text-xs text-muted-foreground space-y-1",children:h==="firebase"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free tier available"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):h==="github"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Cost:"})," Free for public repositories"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>y(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:x,children:"Cancel"}),e.jsx("button",{onClick:Te,disabled:x||!w.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:x?e.jsxs(e.Fragment,{children:[e.jsx(sr,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Ee,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),e.jsx(Ze,{children:P.show&&e.jsxs(R.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:E,className:"fixed z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:P.x,top:P.y},onClick:T,children:[e.jsxs("button",{onClick:()=>B("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(We,{className:"h-4 w-4"}),"Download"]}),e.jsxs("button",{onClick:()=>B("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(at,{className:"h-4 w-4"}),"Copy"]}),e.jsxs("button",{onClick:()=>B("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[e.jsx(La,{className:"h-4 w-4"}),"Rename"]}),Object.keys(s.files).length>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-t border-border my-1"}),e.jsxs("button",{onClick:()=>B("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[e.jsx(Xs,{className:"h-4 w-4"}),"Delete"]})]})]})})]})};function Hu(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Wn(s,t){var r=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),r.push.apply(r,n)}return r}function qn(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Wn(Object(r),!0).forEach(function(n){Hu(s,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(r)):Wn(Object(r)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(r,n))})}return s}function zu(s,t){if(s==null)return{};var r={},n=Object.keys(s),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=s[a]);return r}function Gu(s,t){if(s==null)return{};var r=zu(s,t),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(s,n)&&(r[n]=s[n])}return r}function Wu(s,t){return qu(s)||Vu(s,t)||Ju(s,t)||Yu()}function qu(s){if(Array.isArray(s))return s}function Vu(s,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(s)))){var r=[],n=!0,a=!1,i=void 0;try{for(var o=s[Symbol.iterator](),l;!(n=(l=o.next()).done)&&(r.push(l.value),!(t&&r.length===t));n=!0);}catch(d){a=!0,i=d}finally{try{!n&&o.return!=null&&o.return()}finally{if(a)throw i}}return r}}function Ju(s,t){if(s){if(typeof s=="string")return Vn(s,t);var r=Object.prototype.toString.call(s).slice(8,-1);if(r==="Object"&&s.constructor&&(r=s.constructor.name),r==="Map"||r==="Set")return Array.from(s);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Vn(s,t)}}function Vn(s,t){(t==null||t>s.length)&&(t=s.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=s[r];return n}function Yu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ku(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Jn(s,t){var r=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),r.push.apply(r,n)}return r}function Yn(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Jn(Object(r),!0).forEach(function(n){Ku(s,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(r)):Jn(Object(r)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(r,n))})}return s}function Xu(){for(var s=arguments.length,t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(a,i){return i(a)},n)}}function Xt(s){return function t(){for(var r=this,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return a.length>=s.length?s.apply(this,a):function(){for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return t.apply(r,[].concat(a,l))}}}function Lr(s){return{}.toString.call(s).includes("Object")}function Qu(s){return!Object.keys(s).length}function ir(s){return typeof s=="function"}function Zu(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function em(s,t){return Lr(t)||nt("changeType"),Object.keys(t).some(function(r){return!Zu(s,r)})&&nt("changeField"),t}function tm(s){ir(s)||nt("selectorType")}function rm(s){ir(s)||Lr(s)||nt("handlerType"),Lr(s)&&Object.values(s).some(function(t){return!ir(t)})&&nt("handlersType")}function sm(s){s||nt("initialIsRequired"),Lr(s)||nt("initialType"),Qu(s)&&nt("initialContent")}function nm(s,t){throw new Error(s[t]||s.default)}var am={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},nt=Xt(nm)(am),br={changes:em,selector:tm,handler:rm,initial:sm};function im(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};br.initial(s),br.handler(t);var r={current:s},n=Xt(cm)(r,t),a=Xt(lm)(r),i=Xt(br.changes)(s),o=Xt(om)(r);function l(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return br.selector(c),c(r.current)}function d(c){Xu(n,a,i,o)(c)}return[l,d]}function om(s,t){return ir(t)?t(s.current):t}function lm(s,t){return s.current=Yn(Yn({},s.current),t),t}function cm(s,t,r){return ir(t)?t(s.current):Object.keys(r).forEach(function(n){var a;return(a=t[n])===null||a===void 0?void 0:a.call(t,s.current[n])}),r}var dm={create:im},um={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function mm(s){return function t(){for(var r=this,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return a.length>=s.length?s.apply(this,a):function(){for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return t.apply(r,[].concat(a,l))}}}function pm(s){return{}.toString.call(s).includes("Object")}function hm(s){return s||Kn("configIsRequired"),pm(s)||Kn("configType"),s.urls?(gm(),{paths:{vs:s.urls.monacoBase}}):s}function gm(){console.warn(Di.deprecation)}function fm(s,t){throw new Error(s[t]||s.default)}var Di={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Kn=mm(fm)(Di),xm={config:hm},bm=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(a){return r.reduceRight(function(i,o){return o(i)},a)}};function Pi(s,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&s[r]&&Object.assign(t[r],Pi(s[r],t[r]))}),qn(qn({},s),t)}var ym={type:"cancelation",msg:"operation is manually canceled"};function hs(s){var t=!1,r=new Promise(function(n,a){s.then(function(i){return t?a(ym):n(i)}),s.catch(a)});return r.cancel=function(){return t=!0},r}var vm=dm.create({config:um,isInitialized:!1,resolve:null,reject:null,monaco:null}),Ei=Wu(vm,2),cr=Ei[0],qr=Ei[1];function wm(s){var t=xm.config(s),r=t.monaco,n=Gu(t,["monaco"]);qr(function(a){return{config:Pi(a.config,n),monaco:r}})}function jm(){var s=cr(function(t){var r=t.monaco,n=t.isInitialized,a=t.resolve;return{monaco:r,isInitialized:n,resolve:a}});if(!s.isInitialized){if(qr({isInitialized:!0}),s.monaco)return s.resolve(s.monaco),hs(gs);if(window.monaco&&window.monaco.editor)return Ii(window.monaco),s.resolve(window.monaco),hs(gs);bm(Nm,Cm)(km)}return hs(gs)}function Nm(s){return document.body.appendChild(s)}function Sm(s){var t=document.createElement("script");return s&&(t.src=s),t}function Cm(s){var t=cr(function(n){var a=n.config,i=n.reject;return{config:a,reject:i}}),r=Sm("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return s()},r.onerror=t.reject,r}function km(){var s=cr(function(r){var n=r.config,a=r.resolve,i=r.reject;return{config:n,resolve:a,reject:i}}),t=window.require;t.config(s.config),t(["vs/editor/editor.main"],function(r){Ii(r),s.resolve(r)},function(r){s.reject(r)})}function Ii(s){cr().monaco||qr({monaco:s})}function Tm(){return cr(function(s){var t=s.monaco;return t})}var gs=new Promise(function(s,t){return qr({resolve:s,reject:t})}),Ri={config:wm,init:jm,__getMonacoInstance:Tm},Am={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},fs=Am,Dm={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Pm=Dm;function Em({children:s}){return ze.createElement("div",{style:Pm.container},s)}var Im=Em,Rm=Im;function Om({width:s,height:t,isEditorReady:r,loading:n,_ref:a,className:i,wrapperProps:o}){return ze.createElement("section",{style:{...fs.wrapper,width:s,height:t},...o},!r&&ze.createElement(Rm,null,n),ze.createElement("div",{ref:a,style:{...fs.fullWidth,...!r&&fs.hide},className:i}))}var Lm=Om,Oi=p.memo(Lm);function Fm(s){p.useEffect(s,[])}var Li=Fm;function Mm(s,t,r=!0){let n=p.useRef(!0);p.useEffect(n.current||!r?()=>{n.current=!1}:s,t)}var be=Mm;function er(){}function Lt(s,t,r,n){return $m(s,n)||Bm(s,t,r,n)}function $m(s,t){return s.editor.getModel(Fi(s,t))}function Bm(s,t,r,n){return s.editor.createModel(t,r,n?Fi(s,n):void 0)}function Fi(s,t){return s.Uri.parse(t)}function _m({original:s,modified:t,language:r,originalLanguage:n,modifiedLanguage:a,originalModelPath:i,modifiedModelPath:o,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:d=!1,theme:c="light",loading:u="Loading...",options:m={},height:b="100%",width:y="100%",className:x,wrapperProps:f={},beforeMount:h=er,onMount:k=er}){let[j,v]=p.useState(!1),[w,g]=p.useState(!0),P=p.useRef(null),I=p.useRef(null),E=p.useRef(null),O=p.useRef(k),D=p.useRef(h),_=p.useRef(!1);Li(()=>{let S=Ri.init();return S.then(N=>(I.current=N)&&g(!1)).catch(N=>(N==null?void 0:N.type)!=="cancelation"&&console.error("Monaco initialization: error:",N)),()=>P.current?T():S.cancel()}),be(()=>{if(P.current&&I.current){let S=P.current.getOriginalEditor(),N=Lt(I.current,s||"",n||r||"text",i||"");N!==S.getModel()&&S.setModel(N)}},[i],j),be(()=>{if(P.current&&I.current){let S=P.current.getModifiedEditor(),N=Lt(I.current,t||"",a||r||"text",o||"");N!==S.getModel()&&S.setModel(N)}},[o],j),be(()=>{let S=P.current.getModifiedEditor();S.getOption(I.current.editor.EditorOption.readOnly)?S.setValue(t||""):t!==S.getValue()&&(S.executeEdits("",[{range:S.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),S.pushUndoStop())},[t],j),be(()=>{var S,N;(N=(S=P.current)==null?void 0:S.getModel())==null||N.original.setValue(s||"")},[s],j),be(()=>{let{original:S,modified:N}=P.current.getModel();I.current.editor.setModelLanguage(S,n||r||"text"),I.current.editor.setModelLanguage(N,a||r||"text")},[r,n,a],j),be(()=>{var S;(S=I.current)==null||S.editor.setTheme(c)},[c],j),be(()=>{var S;(S=P.current)==null||S.updateOptions(m)},[m],j);let C=p.useCallback(()=>{var M;if(!I.current)return;D.current(I.current);let S=Lt(I.current,s||"",n||r||"text",i||""),N=Lt(I.current,t||"",a||r||"text",o||"");(M=P.current)==null||M.setModel({original:S,modified:N})},[r,t,a,s,n,i,o]),B=p.useCallback(()=>{var S;!_.current&&E.current&&(P.current=I.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...m}),C(),(S=I.current)==null||S.editor.setTheme(c),v(!0),_.current=!0)},[m,c,C]);p.useEffect(()=>{j&&O.current(P.current,I.current)},[j]),p.useEffect(()=>{!w&&!j&&B()},[w,j,B]);function T(){var N,M,H,K;let S=(N=P.current)==null?void 0:N.getModel();l||((M=S==null?void 0:S.original)==null||M.dispose()),d||((H=S==null?void 0:S.modified)==null||H.dispose()),(K=P.current)==null||K.dispose()}return ze.createElement(Oi,{width:y,height:b,isEditorReady:j,loading:u,_ref:E,className:x,wrapperProps:f})}var Um=_m;p.memo(Um);function Hm(s){let t=p.useRef();return p.useEffect(()=>{t.current=s},[s]),t.current}var zm=Hm,yr=new Map;function Gm({defaultValue:s,defaultLanguage:t,defaultPath:r,value:n,language:a,path:i,theme:o="light",line:l,loading:d="Loading...",options:c={},overrideServices:u={},saveViewState:m=!0,keepCurrentModel:b=!1,width:y="100%",height:x="100%",className:f,wrapperProps:h={},beforeMount:k=er,onMount:j=er,onChange:v,onValidate:w=er}){let[g,P]=p.useState(!1),[I,E]=p.useState(!0),O=p.useRef(null),D=p.useRef(null),_=p.useRef(null),C=p.useRef(j),B=p.useRef(k),T=p.useRef(),S=p.useRef(n),N=zm(i),M=p.useRef(!1),H=p.useRef(!1);Li(()=>{let G=Ri.init();return G.then(V=>(O.current=V)&&E(!1)).catch(V=>(V==null?void 0:V.type)!=="cancelation"&&console.error("Monaco initialization: error:",V)),()=>D.current?Te():G.cancel()}),be(()=>{var V,ee,ue,xe;let G=Lt(O.current,s||n||"",t||a||"",i||r||"");G!==((V=D.current)==null?void 0:V.getModel())&&(m&&yr.set(N,(ee=D.current)==null?void 0:ee.saveViewState()),(ue=D.current)==null||ue.setModel(G),m&&((xe=D.current)==null||xe.restoreViewState(yr.get(i))))},[i],g),be(()=>{var G;(G=D.current)==null||G.updateOptions(c)},[c],g),be(()=>{!D.current||n===void 0||(D.current.getOption(O.current.editor.EditorOption.readOnly)?D.current.setValue(n):n!==D.current.getValue()&&(H.current=!0,D.current.executeEdits("",[{range:D.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),D.current.pushUndoStop(),H.current=!1))},[n],g),be(()=>{var V,ee;let G=(V=D.current)==null?void 0:V.getModel();G&&a&&((ee=O.current)==null||ee.editor.setModelLanguage(G,a))},[a],g),be(()=>{var G;l!==void 0&&((G=D.current)==null||G.revealLine(l))},[l],g),be(()=>{var G;(G=O.current)==null||G.editor.setTheme(o)},[o],g);let K=p.useCallback(()=>{var G;if(!(!_.current||!O.current)&&!M.current){B.current(O.current);let V=i||r,ee=Lt(O.current,n||s||"",t||a||"",V||"");D.current=(G=O.current)==null?void 0:G.editor.create(_.current,{model:ee,automaticLayout:!0,...c},u),m&&D.current.restoreViewState(yr.get(V)),O.current.editor.setTheme(o),l!==void 0&&D.current.revealLine(l),P(!0),M.current=!0}},[s,t,r,n,a,i,c,u,m,o,l]);p.useEffect(()=>{g&&C.current(D.current,O.current)},[g]),p.useEffect(()=>{!I&&!g&&K()},[I,g,K]),S.current=n,p.useEffect(()=>{var G,V;g&&v&&((G=T.current)==null||G.dispose(),T.current=(V=D.current)==null?void 0:V.onDidChangeModelContent(ee=>{H.current||v(D.current.getValue(),ee)}))},[g,v]),p.useEffect(()=>{if(g){let G=O.current.editor.onDidChangeMarkers(V=>{var ue;let ee=(ue=D.current.getModel())==null?void 0:ue.uri;if(ee&&V.find(xe=>xe.path===ee.path)){let xe=O.current.editor.getModelMarkers({resource:ee});w==null||w(xe)}});return()=>{G==null||G.dispose()}}return()=>{}},[g,w]);function Te(){var G,V;(G=T.current)==null||G.dispose(),b?m&&yr.set(i,D.current.saveViewState()):(V=D.current.getModel())==null||V.dispose(),D.current.dispose()}return ze.createElement(Oi,{width:y,height:x,isEditorReady:g,loading:d,_ref:_,className:f,wrapperProps:h})}var Wm=Gm,qm=p.memo(Wm);const Vm=()=>{var D,_,C,B,T,S;const{theme:s}=Wr(),{currentProject:t,updateFile:r}=Ye(),[n,a]=p.useState(!1),[i,o]=p.useState(null),[l,d]=p.useState(!1),[c,u]=p.useState({aiAssistance:!0,codeCompletion:!0,errorDetection:!0,refactoring:!0,debugging:!0,gitIntegration:!0,realTimeCollaboration:!0}),m=p.useRef(null);p.useEffect(()=>{if(m.current){const N=t.files[t.activeFile]||"",M=m.current.getValue();N!==M&&m.current.setValue(N)}},[t.activeFile,t.files[t.activeFile]]),p.useEffect(()=>{const N=()=>{m.current&&setTimeout(()=>{m.current.layout()},100)};return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]);const b=(N,M)=>{try{if(console.log("🎯 Advanced Monaco Editor mounting..."),console.log("🎯 Editor object:",N),console.log("🎯 Monaco object:",M),a(!1),d(!0),o(null),m.current=N,N&&N.getDomNode){const K=N.getDomNode();K&&(K.style.display="block",K.style.visibility="visible",K.style.height="500px",console.log("🎯 Editor DOM node found and made visible"))}const H=t.files[t.activeFile]||"";H&&N.setValue(H),console.log("🚀 Configuring advanced editor features..."),M.editor.defineTheme("custom-dark",{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"569CD6"},{token:"string",foreground:"CE9178"},{token:"number",foreground:"B5CEA8"},{token:"tag",foreground:"569CD6"},{token:"attribute.name",foreground:"92C5F8"},{token:"attribute.value",foreground:"CE9178"}],colors:{"editor.background":"#1e1e1e","editor.foreground":"#d4d4d4","editor.lineHighlightBackground":"#2a2d2e","editor.selectionBackground":"#264f78","editor.inactiveSelectionBackground":"#3a3d41"}}),M.editor.defineTheme("custom-light",{base:"vs",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"0000FF"},{token:"string",foreground:"A31515"},{token:"number",foreground:"098658"},{token:"tag",foreground:"800000"},{token:"attribute.name",foreground:"FF0000"},{token:"attribute.value",foreground:"0451A5"}],colors:{"editor.background":"#ffffff","editor.foreground":"#000000","editor.lineHighlightBackground":"#f5f5f5","editor.selectionBackground":"#add6ff","editor.inactiveSelectionBackground":"#e5ebf1"}}),M.editor.setTheme(s==="dark"?"custom-dark":"custom-light"),N.updateOptions({fontSize:14,fontFamily:'JetBrains Mono, Monaco, Consolas, "Fira Code", monospace',fontLigatures:!0,lineHeight:22,minimap:{enabled:!0,showSlider:"always",renderCharacters:!0,maxColumn:120},scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",formatOnPaste:!0,formatOnType:!0,suggestOnTriggerCharacters:!0,acceptSuggestionOnEnter:"on",tabCompletion:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always",quickSuggestions:{other:!0,comments:!0,strings:!0},suggest:{showKeywords:!0,showSnippets:!0,showFunctions:!0,showConstructors:!0,showFields:!0,showVariables:!0,showClasses:!0,showStructs:!0,showInterfaces:!0,showModules:!0,showProperties:!0,showEvents:!0,showOperators:!0,showUnits:!0,showValues:!0,showConstants:!0,showEnums:!0,showEnumMembers:!0,showColors:!0,showFiles:!0,showReferences:!0,showFolders:!0,showTypeParameters:!0,showIssues:!0,showUsers:!0,showWords:!0},parameterHints:{enabled:!0,cycle:!0},hover:{enabled:!0,delay:300},multiCursorModifier:"ctrlCmd",selectionClipboard:!1,contextmenu:!0,mouseWheelZoom:!0,smoothScrolling:!0,cursorBlinking:"blink",cursorSmoothCaretAnimation:!0,cursorSurroundingLines:3,cursorSurroundingLinesStyle:"default",renderValidationDecorations:"on",renderWhitespace:"selection",renderIndentGuides:!0,highlightActiveIndentGuide:!0,bracketPairColorization:{enabled:!0,independentColorPoolPerBracketType:!0},guides:{bracketPairs:!0,bracketPairsHorizontal:"active",indentation:!0,highlightActiveIndentation:!0},scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:14,horizontalScrollbarSize:14,useShadows:!0,verticalHasArrows:!1,horizontalHasArrows:!1,arrowSize:11,verticalSliderSize:14,horizontalSliderSize:14},accessibilitySupport:"auto",linkedEditing:!0,stickyScroll:{enabled:!0,defaultModel:"outlineModel",maxLineCount:5}}),setTimeout(()=>{N.layout()},100);try{N.addCommand(M.KeyMod.CtrlCmd|M.KeyCode.KeyS,()=>{j()}),N.addCommand(M.KeyMod.CtrlCmd|M.KeyCode.KeyC,()=>{N.getSelection().isEmpty()&&h()}),N.addCommand(M.KeyMod.CtrlCmd|M.KeyMod.Shift|M.KeyCode.KeyF,()=>{v()}),N.addCommand(M.KeyMod.CtrlCmd|M.KeyCode.Enter,()=>{w()}),N.addCommand(M.KeyMod.CtrlCmd|M.KeyMod.Shift|M.KeyCode.KeyD,()=>{g()}),N.addCommand(M.KeyMod.CtrlCmd|M.KeyMod.Shift|M.KeyCode.KeyA,()=>{P()}),N.addCommand(M.KeyMod.CtrlCmd|M.KeyMod.Shift|M.KeyCode.KeyG,()=>{I()}),console.log("✅ Advanced keyboard shortcuts configured")}catch(K){console.warn("⚠️ Could not add keyboard shortcuts:",K)}}catch(H){console.error("❌ Error mounting Monaco Editor:",H),console.error("❌ Monaco Editor error details:",H.message,H.stack),o(H.message),a(!1),$.error("Failed to load code editor")}},y=N=>{try{N!==void 0&&r(t.activeFile,N)}catch(M){console.error("Error updating file:",M),$.error("Failed to save changes")}},x=()=>{const N=t.activeFile.split(".").pop();return{html:"html",css:"css",js:"javascript",jsx:"javascript",ts:"typescript",tsx:"typescript",py:"python",java:"java",cpp:"cpp",c:"c",php:"php",rb:"ruby",go:"go",rs:"rust",swift:"swift",kt:"kotlin",scala:"scala",clj:"clojure",hs:"haskell",ml:"fsharp",fs:"fsharp",vb:"vb",sql:"sql",json:"json",xml:"xml",yaml:"yaml",yml:"yaml",md:"markdown",sh:"shell",bash:"shell",ps1:"powershell",dockerfile:"dockerfile"}[N]||"plaintext"},f=()=>{const N=t.files[t.activeFile]||"";navigator.clipboard.writeText(N),$.success("Code copied to clipboard!")},h=()=>{const N=t.files[t.activeFile]||"";navigator.clipboard.writeText(N),$.success("All code copied to clipboard!")},k=()=>{const N=t.files[t.activeFile]||"",M=new Blob([N],{type:"text/plain"}),H=URL.createObjectURL(M),K=document.createElement("a");K.href=H,K.download=t.activeFile,document.body.appendChild(K),K.click(),document.body.removeChild(K),URL.revokeObjectURL(H),$.success(`Downloaded ${t.activeFile}`)},j=()=>{$.success("Code saved!")},v=()=>{m.current&&(m.current.getAction("editor.action.formatDocument").run(),$.success("Code formatted!"))},w=()=>{const N=t.files[t.activeFile]||"";console.log("🚀 Running code:",N.substring(0,100)+"..."),$.success("Code executed!")},g=()=>{console.log("🐛 Starting debug session..."),$.success("Debug session started!")},P=()=>{console.log("🤖 AI assistance activated..."),$.success("AI assistance enabled!")},I=()=>{console.log("🌿 Git integration activated..."),$.success("Git integration enabled!")},E={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖"},O=N=>E[N]||"📄";return e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:O(t.activeFile)}),e.jsx("span",{className:"font-medium text-sm",children:t.activeFile}),e.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-1 rounded",children:x()})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:w,className:"p-2 hover:bg-muted rounded-md transition-colors text-green-600",title:"Run Code (Ctrl+Enter)",children:e.jsx(bt,{className:"h-4 w-4"})}),e.jsx("button",{onClick:g,className:"p-2 hover:bg-muted rounded-md transition-colors text-orange-600",title:"Debug (Ctrl+Shift+D)",children:e.jsx(tl,{className:"h-4 w-4"})}),e.jsx("button",{onClick:P,className:"p-2 hover:bg-muted rounded-md transition-colors text-purple-600",title:"AI Assistance (Ctrl+Shift+A)",children:e.jsx(Pe,{className:"h-4 w-4"})}),e.jsx("button",{onClick:I,className:"p-2 hover:bg-muted rounded-md transition-colors text-blue-600",title:"Git Integration (Ctrl+Shift+G)",children:e.jsx(Fa,{className:"h-4 w-4"})}),e.jsx("div",{className:"w-px h-6 bg-border mx-1"}),e.jsx("button",{onClick:v,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Format Code (Ctrl+Shift+F)",children:e.jsx(_t,{className:"h-4 w-4"})}),e.jsx("button",{onClick:f,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy Code",children:e.jsx(at,{className:"h-4 w-4"})}),e.jsx("button",{onClick:k,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Download File",children:e.jsx(We,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"flex-1 relative h-full min-h-[500px] editor-wrapper editor-panel",children:i?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsx("div",{className:"text-red-500 text-lg mb-4",children:"⚠️ Editor Error"}),e.jsx("div",{className:"text-muted-foreground mb-4",children:i}),e.jsx("button",{onClick:()=>{o(null),a(!0),window.location.reload()},className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Reload Editor"})]}):e.jsxs("div",{className:"monaco-editor-container editor-container code-editor","data-monaco":"true",style:{height:"500px",minHeight:"500px",width:"100%"},children:[e.jsx("div",{className:"w-full h-full",children:e.jsx("textarea",{value:t.files[t.activeFile]||"",onChange:N=>y(N.target.value),className:"w-full h-full p-4 font-mono text-sm bg-background text-foreground border border-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary/20",placeholder:`Enter your ${x()} code here...`,style:{minHeight:"500px",fontFamily:'Monaco, Menlo, "Ubuntu Mono", monospace',lineHeight:"1.5"}})}),e.jsx("div",{style:{display:"none"},children:e.jsx(qm,{height:"500px",language:x(),value:t.files[t.activeFile]||"",onChange:y,onMount:b,theme:s==="dark"?"vs-dark":"vs",beforeMount:N=>(console.log("🎯 Monaco Editor beforeMount called"),Promise.resolve()),loading:e.jsxs("div",{className:"flex flex-col items-center justify-center h-full bg-gradient-to-br from-background to-muted/20",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"}),e.jsx("span",{className:"text-lg font-medium",children:"Loading Advanced Editor..."})]}),e.jsxs("div",{className:"text-sm text-muted-foreground text-center max-w-md",children:[e.jsx("p",{children:"Initializing Monaco Editor with advanced features..."}),e.jsx("p",{className:"mt-2",children:"AI assistance, debugging, and collaboration tools loading..."})]})]}),options:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,mouseWheelZoom:!0,smoothScrolling:!0,cursorBlinking:"blink",renderLineHighlight:"line",renderWhitespace:"selection",renderIndentGuides:!0,highlightActiveIndentGuide:!0,bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always",unfoldOnClickAfterEnd:!1,contextmenu:!0,mouseWheelScrollSensitivity:1,fastScrollSensitivity:5,cursorSurroundingLines:3,cursorSurroundingLinesStyle:"default",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:14,horizontalScrollbarSize:14,useShadows:!0,verticalHasArrows:!1,horizontalHasArrows:!1,arrowSize:11,verticalSliderSize:14,horizontalSliderSize:14}}},`${t.activeFile}-${((D=t.files[t.activeFile])==null?void 0:D.length)||0}`)})]})}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:["Line ",((C=(_=m.current)==null?void 0:_.getPosition())==null?void 0:C.lineNumber)||1]}),e.jsxs("span",{children:["Column ",((T=(B=m.current)==null?void 0:B.getPosition())==null?void 0:T.column)||1]}),e.jsxs("span",{children:[((S=t.files[t.activeFile])==null?void 0:S.length)||0," characters"]}),l&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-green-600",children:"Editor Ready"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+S to save"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+Enter to run"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+Shift+A for AI"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+Shift+D to debug"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Advanced keyboard shortcuts"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Git integration"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Version control"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Syntax highlighting"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Code completion"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Real-time collaboration"})]})]})]})};class Jm{constructor(){this.collectionName="apps",this.baseUrl="https://dreambuild-2024-app.web.app/apps",this.db=le}generateAppId(t="Generated Project"){const r=Date.now(),n=Math.random().toString(36).substring(2,8),a=Math.floor(Math.random()*1e3);return`${t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").substring(0,20)}-${r}-${n}-${a}`}async deployApp(t,r="anonymous"){try{console.log("🔥 FirebaseAppService: Starting deployment"),console.log("🔥 App data:",t);const n=t.name||"Generated Project",a=this.generateAppId(n),i=`${this.baseUrl}/${a}`;console.log("🔥 Generated app ID:",a),console.log("🔥 Generated app URL:",i);let o=i.replace(/[^a-zA-Z0-9\-:\/\.]/g,"");if(o=o.replace(/App$/,""),o.includes("/apps/")){const c=o.split("/apps/");if(c.length===2){const u=c[1].replace(/[^a-zA-Z0-9\-]/g,"");o=`${c[0]}/apps/${u}`}}o.match(/^https:\/\/dreambuild-2024-app\.web\.app\/apps\/[a-zA-Z0-9\-]+$/)||(o=`${this.baseUrl}/${a}`),console.log("🚀 FirebaseAppService: App Name:",n),console.log("🚀 FirebaseAppService: Base URL:",this.baseUrl),console.log("🚀 FirebaseAppService: Generated App ID:",a),console.log("🚀 FirebaseAppService: Constructed URL:",i),console.log("🚀 FirebaseAppService: Clean URL:",o),console.log("🚀 FirebaseAppService: Deploying app with ID:",a),console.log("🚀 FirebaseAppService: App URL:",i),console.log("🚀 FirebaseAppService: App data:",t);const l=new Date,d={id:a,name:n,url:o,files:t.files||{},userId:r,isPublic:t.isPublic||!1,createdAt:l,updatedAt:l,status:"deployed",preview:t.preview||{},dependencies:t.dependencies||[],buildInstructions:t.buildInstructions||[],views:0,likes:0,tags:t.tags||[]};console.log("🚀 FirebaseAppService: App info created:",{name:d.name,createdAt:d.createdAt,createdAtType:typeof d.createdAt}),console.log("🚀 FirebaseAppService: App name:",n),console.log("🚀 FirebaseAppService: App ID:",a),console.log("🚀 FirebaseAppService: App URL:",i),console.log("🚀 FirebaseAppService: Attempting to store in Firestore..."),console.log("🚀 FirebaseAppService: Collection name:",this.collectionName),console.log("🚀 FirebaseAppService: App ID:",a);try{await pe(Y(this.db,this.collectionName,a),d),console.log(`🚀 App deployed to Firestore: ${a} at ${i}`),console.log("🚀 FirebaseAppService: Successfully stored app in Firestore")}catch(c){throw console.error("❌ Firestore setDoc failed:",c),c}return{success:!0,appId:a,url:o,appInfo:d}}catch(n){return console.error("❌ Firestore deployment failed:",n),{success:!1,error:n.message}}}async getApp(t){try{console.log("🔍 FirebaseAppService: Getting app with ID:",t);const r=await Qt(Y(this.db,this.collectionName,t));if(r.exists()){const n={id:r.id,...r.data()};return console.log("🔍 FirebaseAppService: App found:",n),n}return console.log("🔍 FirebaseAppService: App not found in Firestore"),null}catch(r){return console.error("❌ Error getting app:",r),null}}async getPublicApps(t=20){try{console.log("🔍 FirebaseAppService: Getting public apps...");const r=Se(De(this.db,this.collectionName),Ae("isPublic","==",!0),Nr("createdAt","desc")),a=(await Fe(r)).docs.map(i=>({id:i.id,...i.data()})).slice(0,t);return console.log("✅ FirebaseAppService: Retrieved",a.length,"public apps"),a}catch(r){return console.error("❌ Error getting public apps:",r),console.log("🔄 FirebaseAppService: Returning empty array as fallback"),[{id:"demo-app-1",name:"Demo Calculator",description:"A simple calculator app",url:"https://dreambuild-2024-app.web.app/apps/demo-calculator",isPublic:!0,createdAt:new Date,views:10,likes:2,tags:["demo","calculator"]}]}}async getUserApps(t){try{const r=Se(De(this.db,this.collectionName),Ae("userId","==",t),Nr("createdAt","desc"));return(await Fe(r)).docs.map(a=>({id:a.id,...a.data()}))}catch(r){return console.error("❌ Error getting user apps:",r),[]}}async updateApp(t,r){try{const n=Y(this.db,this.collectionName,t);return await ls(n,{...r,updatedAt:new Date}),!0}catch(n){return console.error("❌ Error updating app:",n),!1}}async deleteApp(t){try{return await Ft(Y(this.db,this.collectionName,t)),!0}catch(r){return console.error("❌ Error deleting app:",r),!1}}async incrementViews(t){try{const r=Y(this.db,this.collectionName,t);return await ls(r,{views:Tn(1)}),!0}catch(r){return console.error("❌ Error incrementing views:",r),!1}}async toggleLike(t,r){try{const n=Y(this.db,this.collectionName,t);return await ls(n,{likes:Tn(1)}),!0}catch(n){return console.error("❌ Error toggling like:",n),!1}}async searchApps(t,r=20){try{const n=Se(De(this.db,this.collectionName),Ae("isPublic","==",!0),Nr("createdAt","desc"));return(await Fe(n)).docs.map(l=>({id:l.id,...l.data()})).filter(l=>l.name.toLowerCase().includes(t.toLowerCase())||l.tags.some(d=>d.toLowerCase().includes(t.toLowerCase()))).slice(0,r)}catch(n){return console.error("❌ Error searching apps:",n),[]}}async getAppStats(){try{console.log("📊 FirebaseAppService: Getting app stats...");const t=Se(De(this.db,this.collectionName),Ae("isPublic","==",!0)),n=(await Fe(t)).docs.map(a=>a.data());return console.log("✅ FirebaseAppService: Retrieved",n.length,"public apps for stats"),{totalApps:n.length,publicApps:n.length,totalViews:n.reduce((a,i)=>a+(i.views||0),0),totalLikes:n.reduce((a,i)=>a+(i.likes||0),0)}}catch(t){return console.error("❌ Error getting app stats:",t),console.log("🔄 FirebaseAppService: Returning default stats due to error"),{totalApps:0,publicApps:0,totalViews:0,totalLikes:0}}}generateAppHTML(t){const{files:r,name:n}=t;console.log("🔍 FirebaseAppService: generateAppHTML called"),console.log("🔍 FirebaseAppService: appData:",t),console.log("🔍 FirebaseAppService: files keys:",Object.keys(r)),console.log("🔍 FirebaseAppService: files content:",r);const a=r["index.html"]||r["app.html"]||r["main.html"],i=r["style.css"]||r["styles.css"]||r["app.css"],o=r["script.js"]||r["app.js"]||r["main.js"];if(console.log("🔍 FirebaseAppService: htmlFile found:",!!a),console.log("🔍 FirebaseAppService: cssFile found:",!!i),console.log("🔍 FirebaseAppService: jsFile found:",!!o),!a)return console.log("🔍 FirebaseAppService: No HTML file found, using fallback"),this.generateFallbackHTML(n);let l=a;return i&&(l=l.replace("</head>",`<style>${i}</style></head>`)),o&&(l=l.replace("</body>",`<script>${o}<\/script></body>`)),l=l.replace("</body>",`
      <div style="position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.8); color: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; z-index: 9999;">
        Built with <a href="https://dreambuild-2024-app.web.app" style="color: #60a5fa;">DreamBuild</a>
        <br><small>App: ${n}</small>
      </div>
    </body>`),l}generateFallbackHTML(t){return`
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
    `}}const vt=new Jm;class Ym{constructor(){this.deployedApps=new Map,this.baseUrl="https://dreambuild-2024-app.web.app/apps",this.appCounter=0}generateAppId(){this.appCounter++;const t=Date.now(),r=Math.random().toString(36).substring(2,8);return`app-${t}-${r}-${this.appCounter}`}async deployApp(t){try{const r=this.generateAppId(),n=`${this.baseUrl}/${r}`,a={id:r,name:t.name||"DreamBuild App",url:n,files:t.files||{},createdAt:new Date().toISOString(),status:"deployed",preview:t.preview||{},dependencies:t.dependencies||[],buildInstructions:t.buildInstructions||[]};return this.deployedApps.set(r,a),console.log(`🚀 App deployed: ${r} at ${n}`),{success:!0,appId:r,url:n,appInfo:a}}catch(r){return console.error("❌ App deployment failed:",r),{success:!1,error:r.message}}}getApp(t){return this.deployedApps.get(t)}getAllApps(){return Array.from(this.deployedApps.values())}updateApp(t,r){const n=this.deployedApps.get(t);if(n){const a={...n,...r,updatedAt:new Date().toISOString()};return this.deployedApps.set(t,a),a}return null}deleteApp(t){return this.deployedApps.delete(t)}getAppPreviewUrl(t){const r=this.deployedApps.get(t);return r?r.url:null}generateAppHTML(t){const{files:r,name:n}=t,a=r["index.html"]||r["app.html"]||r["main.html"],i=r["style.css"]||r["styles.css"]||r["app.css"],o=r["script.js"]||r["app.js"]||r["main.js"];if(!a)return this.generateFallbackHTML(n);let l=a;return i&&(l=l.replace("</head>",`<style>${i}</style></head>`)),o&&(l=l.replace("</body>",`<script>${o}<\/script></body>`)),l=l.replace("</body>",`
      <div style="position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.8); color: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; z-index: 9999;">
        Built with <a href="https://dreambuild-2024-app.web.app" style="color: #60a5fa;">DreamBuild</a>
      </div>
    </body>`),l}generateFallbackHTML(t){return`
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
    `}getDeploymentStatus(){return{totalApps:this.deployedApps.size,baseUrl:this.baseUrl,deployedApps:this.getAllApps()}}}const Km=new Ym,Xm=()=>{console.log("🎮 Preview component rendered!"),console.log("🎮 Preview component mounted successfully!");const{currentProject:s}=Ye();console.log("🎮 Preview currentProject:",s);const[t,r]=p.useState(!1),[n,a]=p.useState(!1),[i,o]=p.useState("desktop"),[l,d]=p.useState(!0),[c,u]=p.useState(2e3),[m,b]=p.useState(!0),[y,x]=p.useState("live"),[f,h]=p.useState(!1),[k,j]=p.useState(null),[v,w]=p.useState(null),[g,P]=p.useState(null);p.useEffect(()=>{console.log("🎮 Preview useEffect triggered"),console.log("🎮 Current project:",s),console.log("🎮 Project files:",s==null?void 0:s.files),console.log("🎮 Files count:",Object.keys((s==null?void 0:s.files)||{}).length),s&&Object.keys(s.files).length>0?(console.log("🎮 Deploying app..."),console.log("🎮 Files available for deployment:",Object.keys(s.files)),console.log("🎮 Files content preview:",Object.keys(s.files).map(T=>{var S,N;return{filename:T,length:((S=s.files[T])==null?void 0:S.length)||0,preview:((N=s.files[T])==null?void 0:N.substring(0,100))||"No content"}})),I()):(console.log("🎮 No project or files to deploy"),console.log("🎮 Current project:",s),console.log("🎮 Files count:",s?Object.keys(s.files).length:"No project"))},[s]),p.useEffect(()=>{if(!l||f||y==="static"||!v)return;const T=setInterval(()=>{if(v&&!t){const S=document.querySelector("#preview-iframe");S&&(S.src=S.src)}},c);return()=>clearInterval(T)},[l,f,y,c,t,v]);const I=async()=>{var T;if(console.log("🎮 deployApp called"),console.log("🎮 Current project:",s),console.log("🎮 Files:",s==null?void 0:s.files),console.log("🎮 Files count:",Object.keys((s==null?void 0:s.files)||{}).length),!s||Object.keys(s.files).length===0){console.log("🎮 No project files to deploy"),P("No files to deploy");return}r(!0),P("Deploying..."),console.log("🎮 Starting deployment process...");try{console.log("🚀 Deploying app..."),console.log("🎮 Current project:",s),console.log("🎮 Project files:",Object.keys(s.files)),console.log("🎮 Project files content:",s.files),console.log("🎮 Files count:",Object.keys(s.files).length);const S=s.name||"DreamBuild Calculator";console.log("🎮 Preview: Current project name:",s.name),console.log("🎮 Preview: Using app name:",S),console.log("🎮 Preview: Project config:",s.config);let N=await vt.deployApp({name:S,files:s.files,isPublic:!0,preview:{title:S,description:"Generated with DreamBuild AI Builder",features:["AI Generated","Responsive Design","Modern UI"]},dependencies:[],buildInstructions:[],tags:["ai-generated","dreambuild","calculator"]});console.log("🎮 Firebase deployment result:",N),console.log("🎮 Firebase deployment success:",N==null?void 0:N.success),console.log("🎮 Firebase deployment error:",N==null?void 0:N.error),(!N||!N.success)&&(console.log("🔄 Firebase deployment failed, trying fallback..."),console.log("🔄 Firebase error details:",N==null?void 0:N.error),console.log("🔄 Firebase error message:",(T=N==null?void 0:N.error)==null?void 0:T.message),P("Firebase failed, trying fallback..."),N=await Km.deployApp({name:S,files:s.files,preview:{title:S,description:"Generated with DreamBuild AI Builder",features:["AI Generated","Responsive Design","Modern UI"]},dependencies:[],buildInstructions:[]}),console.log("🎮 Fallback deployment result:",N)),N.success?(j(N.appInfo),w(N.url),console.log("✅ App deployed successfully:",N.url),$.success(`App deployed successfully! URL: ${N.url}`,{duration:6e3,icon:"🚀"}),console.log("🎮 Toast message URL:",N.url),console.log("🎮 Toast message text:",`App deployed successfully! URL: ${N.url}`),setTimeout(()=>{window.dispatchEvent(new CustomEvent("appDeployed",{detail:{appId:N.appId,appName:S,url:N.url}}))},1e3)):(console.error("❌ App deployment failed:",(N==null?void 0:N.error)||"Unknown error"),$.error(`App deployment failed: ${(N==null?void 0:N.error)||"Unknown error"}`),P("Deployment failed"))}catch(S){console.error("❌ Deployment error:",S),$.error(`Deployment error: ${S.message}`),P("Deployment error")}finally{r(!1)}},E=()=>{if(v){const T=document.querySelector("#preview-iframe");T&&(T.src=T.src)}},O=()=>{v&&(window.open(v,"_blank"),$.success("Opened in new tab!"))},D=()=>{v&&(navigator.clipboard.writeText(v),$.success("URL copied to clipboard!"))},_=()=>{v&&(navigator.share?navigator.share({title:(k==null?void 0:k.name)||"DreamBuild App",url:v}):D())},C=async()=>{if(n)document.exitFullscreen&&await document.exitFullscreen();else{const T=document.querySelector("#preview-iframe");T&&T.requestFullscreen&&await T.requestFullscreen()}a(!n)},B=()=>{switch(i){case"mobile":return"w-80 h-[600px] rounded-lg shadow-lg";case"tablet":return"w-[768px] h-[600px] rounded-lg shadow-md";default:return"w-full h-full"}};return console.log("🎮 Preview component about to render"),console.log("🎮 Preview currentProject:",s),console.log("🎮 Preview appUrl:",v),console.log("🎮 Preview isLoading:",t),console.log("🎮 Preview deployedApp:",k),e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${n?"fixed inset-0 z-50 rounded-none":""}`,children:[e.jsx("div",{className:"absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs z-50",children:k?"DEPLOYED":"LOADING"}),e.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:I,disabled:t,className:"px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50",children:t?"Deploying...":"Deploy App"}),e.jsx("h3",{className:"font-semibold text-sm text-foreground",children:"Live Preview"}),k&&e.jsx("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"DEPLOYED"}),t&&e.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[e.jsx("div",{className:"animate-spin rounded-full h-3 w-3 border-b-2 border-primary"}),e.jsx("span",{children:"Deploying..."})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1 bg-muted rounded-lg p-1",children:[e.jsx("button",{onClick:()=>o("desktop"),className:`p-1 rounded ${i==="desktop"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Desktop View",children:e.jsx(rl,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>o("tablet"),className:`p-1 rounded ${i==="tablet"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Tablet View",children:e.jsx(sl,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>o("mobile"),className:`p-1 rounded ${i==="mobile"?"bg-primary text-primary-foreground":"hover:bg-muted-foreground/20"}`,title:"Mobile View",children:e.jsx($r,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[e.jsx("span",{className:i==="desktop"?"font-semibold":"",children:"Desktop"}),e.jsx("span",{className:i==="tablet"?"font-semibold":"",children:"Tablet"}),e.jsx("span",{className:i==="mobile"?"font-semibold":"",children:"Mobile"})]}),e.jsx("button",{onClick:()=>d(!l),className:`p-2 rounded-md transition-colors ${l?"bg-green-500 text-white":"bg-muted hover:bg-muted-foreground/20"}`,title:l?"Disable Auto-refresh":"Enable Auto-refresh",children:e.jsx(_t,{className:`h-4 w-4 ${l?"animate-spin":""}`})}),e.jsx("button",{onClick:()=>h(!f),className:`p-2 rounded-md transition-colors ${f?"bg-red-500 text-white":"bg-muted hover:bg-muted-foreground/20"}`,title:f?"Resume Preview":"Pause Preview",children:f?e.jsx(bt,{className:"h-4 w-4"}):e.jsx(nl,{className:"h-4 w-4"})}),e.jsx("button",{onClick:E,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Manual Refresh",children:e.jsx(al,{className:"h-4 w-4"})}),e.jsx("button",{onClick:O,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Open in New Tab",children:e.jsx(rt,{className:"h-4 w-4"})}),e.jsx("button",{onClick:D,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy URL",children:e.jsx(at,{className:"h-4 w-4"})}),e.jsx("button",{onClick:_,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Share App",children:e.jsx(Pr,{className:"h-4 w-4"})}),e.jsx("button",{onClick:C,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Toggle Fullscreen",children:n?e.jsx(il,{className:"h-4 w-4"}):e.jsx(ol,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"flex-1 relative h-full min-h-[500px]",children:t?e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"}),e.jsx("span",{className:"text-lg font-medium",children:"Deploying App..."})]}),e.jsxs("div",{className:"text-sm text-muted-foreground text-center max-w-md",children:[e.jsx("p",{children:"Creating your app's web address..."}),e.jsx("p",{className:"mt-2",children:"This may take a few moments"})]})]}):v?e.jsx("div",{className:`w-full h-full flex items-center justify-center ${i==="mobile"?"bg-gray-100":i==="tablet"?"bg-gray-50":"bg-white"}`,children:e.jsx("div",{className:`${B()} transition-all duration-300 ease-in-out`,children:e.jsx("iframe",{id:"preview-iframe",src:v,className:`w-full h-full border-0 ${i==="mobile"?"rounded-lg shadow-lg":i==="tablet"?"rounded-lg shadow-md":""}`,title:"DreamBuild App Preview",sandbox:"allow-scripts allow-forms allow-popups allow-same-origin",onLoad:()=>{r(!1),console.log("🎮 Iframe loaded successfully")},onError:()=>{r(!1),console.log("🎮 Iframe failed to load"),$.error("Failed to load app preview")}})})}):e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[e.jsx(ke,{className:"h-16 w-16 text-muted-foreground mb-4"}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"No App Deployed"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Generate an app to see the preview"}),e.jsx("button",{onClick:I,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Deploy App"}),s&&Object.keys(s.files).length>0&&e.jsxs("div",{className:"mt-8 p-4 bg-muted/50 rounded-lg max-w-2xl w-full",children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Code Preview"}),e.jsx("div",{className:"bg-background p-4 rounded border text-left max-h-64 overflow-auto",children:e.jsx("pre",{className:"text-sm font-mono whitespace-pre-wrap",children:Object.entries(s.files).map(([T,S])=>`// ${T}
${S}

`).join("")})})]})]})}),e.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[v&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ke,{className:"h-4 w-4"}),e.jsx("span",{className:"font-mono text-xs",children:v})]}),v&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-green-600",children:"Live Preview Active"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Ctrl+R to refresh"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Ctrl+Shift+F for fullscreen"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Live preview with web addresses"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Share your apps"})]})]})]})};function Mi(s,t){return function(){return s.apply(t,arguments)}}const{toString:Qm}=Object.prototype,{getPrototypeOf:hn}=Object,{iterator:Vr,toStringTag:$i}=Symbol,Jr=(s=>t=>{const r=Qm.call(t);return s[r]||(s[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Re=s=>(s=s.toLowerCase(),t=>Jr(t)===s),Yr=s=>t=>typeof t===s,{isArray:Gt}=Array,Ut=Yr("undefined");function dr(s){return s!==null&&!Ut(s)&&s.constructor!==null&&!Ut(s.constructor)&&ge(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const Bi=Re("ArrayBuffer");function Zm(s){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(s):t=s&&s.buffer&&Bi(s.buffer),t}const ep=Yr("string"),ge=Yr("function"),_i=Yr("number"),ur=s=>s!==null&&typeof s=="object",tp=s=>s===!0||s===!1,kr=s=>{if(Jr(s)!=="object")return!1;const t=hn(s);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!($i in s)&&!(Vr in s)},rp=s=>{if(!ur(s)||dr(s))return!1;try{return Object.keys(s).length===0&&Object.getPrototypeOf(s)===Object.prototype}catch{return!1}},sp=Re("Date"),np=Re("File"),ap=Re("Blob"),ip=Re("FileList"),op=s=>ur(s)&&ge(s.pipe),lp=s=>{let t;return s&&(typeof FormData=="function"&&s instanceof FormData||ge(s.append)&&((t=Jr(s))==="formdata"||t==="object"&&ge(s.toString)&&s.toString()==="[object FormData]"))},cp=Re("URLSearchParams"),[dp,up,mp,pp]=["ReadableStream","Request","Response","Headers"].map(Re),hp=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mr(s,t,{allOwnKeys:r=!1}={}){if(s===null||typeof s>"u")return;let n,a;if(typeof s!="object"&&(s=[s]),Gt(s))for(n=0,a=s.length;n<a;n++)t.call(null,s[n],n,s);else{if(dr(s))return;const i=r?Object.getOwnPropertyNames(s):Object.keys(s),o=i.length;let l;for(n=0;n<o;n++)l=i[n],t.call(null,s[l],l,s)}}function Ui(s,t){if(dr(s))return null;t=t.toLowerCase();const r=Object.keys(s);let n=r.length,a;for(;n-- >0;)if(a=r[n],t===a.toLowerCase())return a;return null}const ft=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Hi=s=>!Ut(s)&&s!==ft;function Ms(){const{caseless:s,skipUndefined:t}=Hi(this)&&this||{},r={},n=(a,i)=>{const o=s&&Ui(r,i)||i;kr(r[o])&&kr(a)?r[o]=Ms(r[o],a):kr(a)?r[o]=Ms({},a):Gt(a)?r[o]=a.slice():(!t||!Ut(a))&&(r[o]=a)};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&mr(arguments[a],n);return r}const gp=(s,t,r,{allOwnKeys:n}={})=>(mr(t,(a,i)=>{r&&ge(a)?s[i]=Mi(a,r):s[i]=a},{allOwnKeys:n}),s),fp=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),xp=(s,t,r,n)=>{s.prototype=Object.create(t.prototype,n),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:t.prototype}),r&&Object.assign(s.prototype,r)},bp=(s,t,r,n)=>{let a,i,o;const l={};if(t=t||{},s==null)return t;do{for(a=Object.getOwnPropertyNames(s),i=a.length;i-- >0;)o=a[i],(!n||n(o,s,t))&&!l[o]&&(t[o]=s[o],l[o]=!0);s=r!==!1&&hn(s)}while(s&&(!r||r(s,t))&&s!==Object.prototype);return t},yp=(s,t,r)=>{s=String(s),(r===void 0||r>s.length)&&(r=s.length),r-=t.length;const n=s.indexOf(t,r);return n!==-1&&n===r},vp=s=>{if(!s)return null;if(Gt(s))return s;let t=s.length;if(!_i(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=s[t];return r},wp=(s=>t=>s&&t instanceof s)(typeof Uint8Array<"u"&&hn(Uint8Array)),jp=(s,t)=>{const n=(s&&s[Vr]).call(s);let a;for(;(a=n.next())&&!a.done;){const i=a.value;t.call(s,i[0],i[1])}},Np=(s,t)=>{let r;const n=[];for(;(r=s.exec(t))!==null;)n.push(r);return n},Sp=Re("HTMLFormElement"),Cp=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,a){return n.toUpperCase()+a}),Xn=(({hasOwnProperty:s})=>(t,r)=>s.call(t,r))(Object.prototype),kp=Re("RegExp"),zi=(s,t)=>{const r=Object.getOwnPropertyDescriptors(s),n={};mr(r,(a,i)=>{let o;(o=t(a,i,s))!==!1&&(n[i]=o||a)}),Object.defineProperties(s,n)},Tp=s=>{zi(s,(t,r)=>{if(ge(s)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=s[r];if(ge(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Ap=(s,t)=>{const r={},n=a=>{a.forEach(i=>{r[i]=!0})};return Gt(s)?n(s):n(String(s).split(t)),r},Dp=()=>{},Pp=(s,t)=>s!=null&&Number.isFinite(s=+s)?s:t;function Ep(s){return!!(s&&ge(s.append)&&s[$i]==="FormData"&&s[Vr])}const Ip=s=>{const t=new Array(10),r=(n,a)=>{if(ur(n)){if(t.indexOf(n)>=0)return;if(dr(n))return n;if(!("toJSON"in n)){t[a]=n;const i=Gt(n)?[]:{};return mr(n,(o,l)=>{const d=r(o,a+1);!Ut(d)&&(i[l]=d)}),t[a]=void 0,i}}return n};return r(s,0)},Rp=Re("AsyncFunction"),Op=s=>s&&(ur(s)||ge(s))&&ge(s.then)&&ge(s.catch),Gi=((s,t)=>s?setImmediate:t?((r,n)=>(ft.addEventListener("message",({source:a,data:i})=>{a===ft&&i===r&&n.length&&n.shift()()},!1),a=>{n.push(a),ft.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",ge(ft.postMessage)),Lp=typeof queueMicrotask<"u"?queueMicrotask.bind(ft):typeof process<"u"&&process.nextTick||Gi,Fp=s=>s!=null&&ge(s[Vr]),A={isArray:Gt,isArrayBuffer:Bi,isBuffer:dr,isFormData:lp,isArrayBufferView:Zm,isString:ep,isNumber:_i,isBoolean:tp,isObject:ur,isPlainObject:kr,isEmptyObject:rp,isReadableStream:dp,isRequest:up,isResponse:mp,isHeaders:pp,isUndefined:Ut,isDate:sp,isFile:np,isBlob:ap,isRegExp:kp,isFunction:ge,isStream:op,isURLSearchParams:cp,isTypedArray:wp,isFileList:ip,forEach:mr,merge:Ms,extend:gp,trim:hp,stripBOM:fp,inherits:xp,toFlatObject:bp,kindOf:Jr,kindOfTest:Re,endsWith:yp,toArray:vp,forEachEntry:jp,matchAll:Np,isHTMLForm:Sp,hasOwnProperty:Xn,hasOwnProp:Xn,reduceDescriptors:zi,freezeMethods:Tp,toObjectSet:Ap,toCamelCase:Cp,noop:Dp,toFiniteNumber:Pp,findKey:Ui,global:ft,isContextDefined:Hi,isSpecCompliantForm:Ep,toJSONObject:Ip,isAsyncFn:Rp,isThenable:Op,setImmediate:Gi,asap:Lp,isIterable:Fp};function W(s,t,r,n,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),a&&(this.response=a,this.status=a.status?a.status:null)}A.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.status}}});const Wi=W.prototype,qi={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{qi[s]={value:s}});Object.defineProperties(W,qi);Object.defineProperty(Wi,"isAxiosError",{value:!0});W.from=(s,t,r,n,a,i)=>{const o=Object.create(Wi);A.toFlatObject(s,o,function(u){return u!==Error.prototype},c=>c!=="isAxiosError");const l=s&&s.message?s.message:"Error",d=t==null&&s?s.code:t;return W.call(o,l,d,r,n,a),s&&o.cause==null&&Object.defineProperty(o,"cause",{value:s,configurable:!0}),o.name=s&&s.name||"Error",i&&Object.assign(o,i),o};const Mp=null;function $s(s){return A.isPlainObject(s)||A.isArray(s)}function Vi(s){return A.endsWith(s,"[]")?s.slice(0,-2):s}function Qn(s,t,r){return s?s.concat(t).map(function(a,i){return a=Vi(a),!r&&i?"["+a+"]":a}).join(r?".":""):t}function $p(s){return A.isArray(s)&&!s.some($s)}const Bp=A.toFlatObject(A,{},null,function(t){return/^is[A-Z]/.test(t)});function Kr(s,t,r){if(!A.isObject(s))throw new TypeError("target must be an object");t=t||new FormData,r=A.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,h){return!A.isUndefined(h[f])});const n=r.metaTokens,a=r.visitor||u,i=r.dots,o=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&A.isSpecCompliantForm(t);if(!A.isFunction(a))throw new TypeError("visitor must be a function");function c(x){if(x===null)return"";if(A.isDate(x))return x.toISOString();if(A.isBoolean(x))return x.toString();if(!d&&A.isBlob(x))throw new W("Blob is not supported. Use a Buffer instead.");return A.isArrayBuffer(x)||A.isTypedArray(x)?d&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function u(x,f,h){let k=x;if(x&&!h&&typeof x=="object"){if(A.endsWith(f,"{}"))f=n?f:f.slice(0,-2),x=JSON.stringify(x);else if(A.isArray(x)&&$p(x)||(A.isFileList(x)||A.endsWith(f,"[]"))&&(k=A.toArray(x)))return f=Vi(f),k.forEach(function(v,w){!(A.isUndefined(v)||v===null)&&t.append(o===!0?Qn([f],w,i):o===null?f:f+"[]",c(v))}),!1}return $s(x)?!0:(t.append(Qn(h,f,i),c(x)),!1)}const m=[],b=Object.assign(Bp,{defaultVisitor:u,convertValue:c,isVisitable:$s});function y(x,f){if(!A.isUndefined(x)){if(m.indexOf(x)!==-1)throw Error("Circular reference detected in "+f.join("."));m.push(x),A.forEach(x,function(k,j){(!(A.isUndefined(k)||k===null)&&a.call(t,k,A.isString(j)?j.trim():j,f,b))===!0&&y(k,f?f.concat(j):[j])}),m.pop()}}if(!A.isObject(s))throw new TypeError("data must be an object");return y(s),t}function Zn(s){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function gn(s,t){this._pairs=[],s&&Kr(s,this,t)}const Ji=gn.prototype;Ji.append=function(t,r){this._pairs.push([t,r])};Ji.toString=function(t){const r=t?function(n){return t.call(this,n,Zn)}:Zn;return this._pairs.map(function(a){return r(a[0])+"="+r(a[1])},"").join("&")};function _p(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Yi(s,t,r){if(!t)return s;const n=r&&r.encode||_p;A.isFunction(r)&&(r={serialize:r});const a=r&&r.serialize;let i;if(a?i=a(t,r):i=A.isURLSearchParams(t)?t.toString():new gn(t,r).toString(n),i){const o=s.indexOf("#");o!==-1&&(s=s.slice(0,o)),s+=(s.indexOf("?")===-1?"?":"&")+i}return s}class ea{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){A.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Ki={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Up=typeof URLSearchParams<"u"?URLSearchParams:gn,Hp=typeof FormData<"u"?FormData:null,zp=typeof Blob<"u"?Blob:null,Gp={isBrowser:!0,classes:{URLSearchParams:Up,FormData:Hp,Blob:zp},protocols:["http","https","file","blob","url","data"]},fn=typeof window<"u"&&typeof document<"u",Bs=typeof navigator=="object"&&navigator||void 0,Wp=fn&&(!Bs||["ReactNative","NativeScript","NS"].indexOf(Bs.product)<0),qp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vp=fn&&window.location.href||"http://localhost",Jp=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:fn,hasStandardBrowserEnv:Wp,hasStandardBrowserWebWorkerEnv:qp,navigator:Bs,origin:Vp},Symbol.toStringTag,{value:"Module"})),ce={...Jp,...Gp};function Yp(s,t){return Kr(s,new ce.classes.URLSearchParams,{visitor:function(r,n,a,i){return ce.isNode&&A.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function Kp(s){return A.matchAll(/\w+|\[(\w*)]/g,s).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Xp(s){const t={},r=Object.keys(s);let n;const a=r.length;let i;for(n=0;n<a;n++)i=r[n],t[i]=s[i];return t}function Xi(s){function t(r,n,a,i){let o=r[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),d=i>=r.length;return o=!o&&A.isArray(a)?a.length:o,d?(A.hasOwnProp(a,o)?a[o]=[a[o],n]:a[o]=n,!l):((!a[o]||!A.isObject(a[o]))&&(a[o]=[]),t(r,n,a[o],i)&&A.isArray(a[o])&&(a[o]=Xp(a[o])),!l)}if(A.isFormData(s)&&A.isFunction(s.entries)){const r={};return A.forEachEntry(s,(n,a)=>{t(Kp(n),a,r,0)}),r}return null}function Qp(s,t,r){if(A.isString(s))try{return(t||JSON.parse)(s),A.trim(s)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(s)}const pr={transitional:Ki,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",a=n.indexOf("application/json")>-1,i=A.isObject(t);if(i&&A.isHTMLForm(t)&&(t=new FormData(t)),A.isFormData(t))return a?JSON.stringify(Xi(t)):t;if(A.isArrayBuffer(t)||A.isBuffer(t)||A.isStream(t)||A.isFile(t)||A.isBlob(t)||A.isReadableStream(t))return t;if(A.isArrayBufferView(t))return t.buffer;if(A.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Yp(t,this.formSerializer).toString();if((l=A.isFileList(t))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Kr(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||a?(r.setContentType("application/json",!1),Qp(t)):t}],transformResponse:[function(t){const r=this.transitional||pr.transitional,n=r&&r.forcedJSONParsing,a=this.responseType==="json";if(A.isResponse(t)||A.isReadableStream(t))return t;if(t&&A.isString(t)&&(n&&!this.responseType||a)){const o=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(t,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?W.from(l,W.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ce.classes.FormData,Blob:ce.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};A.forEach(["delete","get","head","post","put","patch"],s=>{pr.headers[s]={}});const Zp=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),eh=s=>{const t={};let r,n,a;return s&&s.split(`
`).forEach(function(o){a=o.indexOf(":"),r=o.substring(0,a).trim().toLowerCase(),n=o.substring(a+1).trim(),!(!r||t[r]&&Zp[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},ta=Symbol("internals");function Yt(s){return s&&String(s).trim().toLowerCase()}function Tr(s){return s===!1||s==null?s:A.isArray(s)?s.map(Tr):String(s)}function th(s){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(s);)t[n[1]]=n[2];return t}const rh=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function xs(s,t,r,n,a){if(A.isFunction(n))return n.call(this,t,r);if(a&&(t=r),!!A.isString(t)){if(A.isString(n))return t.indexOf(n)!==-1;if(A.isRegExp(n))return n.test(t)}}function sh(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function nh(s,t){const r=A.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(s,n+r,{value:function(a,i,o){return this[n].call(this,t,a,i,o)},configurable:!0})})}let fe=class{constructor(t){t&&this.set(t)}set(t,r,n){const a=this;function i(l,d,c){const u=Yt(d);if(!u)throw new Error("header name must be a non-empty string");const m=A.findKey(a,u);(!m||a[m]===void 0||c===!0||c===void 0&&a[m]!==!1)&&(a[m||d]=Tr(l))}const o=(l,d)=>A.forEach(l,(c,u)=>i(c,u,d));if(A.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(A.isString(t)&&(t=t.trim())&&!rh(t))o(eh(t),r);else if(A.isObject(t)&&A.isIterable(t)){let l={},d,c;for(const u of t){if(!A.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[c=u[0]]=(d=l[c])?A.isArray(d)?[...d,u[1]]:[d,u[1]]:u[1]}o(l,r)}else t!=null&&i(r,t,n);return this}get(t,r){if(t=Yt(t),t){const n=A.findKey(this,t);if(n){const a=this[n];if(!r)return a;if(r===!0)return th(a);if(A.isFunction(r))return r.call(this,a,n);if(A.isRegExp(r))return r.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Yt(t),t){const n=A.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||xs(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let a=!1;function i(o){if(o=Yt(o),o){const l=A.findKey(n,o);l&&(!r||xs(n,n[l],l,r))&&(delete n[l],a=!0)}}return A.isArray(t)?t.forEach(i):i(t),a}clear(t){const r=Object.keys(this);let n=r.length,a=!1;for(;n--;){const i=r[n];(!t||xs(this,this[i],i,t,!0))&&(delete this[i],a=!0)}return a}normalize(t){const r=this,n={};return A.forEach(this,(a,i)=>{const o=A.findKey(n,i);if(o){r[o]=Tr(a),delete r[i];return}const l=t?sh(i):String(i).trim();l!==i&&delete r[i],r[l]=Tr(a),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return A.forEach(this,(n,a)=>{n!=null&&n!==!1&&(r[a]=t&&A.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(a=>n.set(a)),n}static accessor(t){const n=(this[ta]=this[ta]={accessors:{}}).accessors,a=this.prototype;function i(o){const l=Yt(o);n[l]||(nh(a,o),n[l]=!0)}return A.isArray(t)?t.forEach(i):i(t),this}};fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);A.reduceDescriptors(fe.prototype,({value:s},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>s,set(n){this[r]=n}}});A.freezeMethods(fe);function bs(s,t){const r=this||pr,n=t||r,a=fe.from(n.headers);let i=n.data;return A.forEach(s,function(l){i=l.call(r,i,a.normalize(),t?t.status:void 0)}),a.normalize(),i}function Qi(s){return!!(s&&s.__CANCEL__)}function Wt(s,t,r){W.call(this,s??"canceled",W.ERR_CANCELED,t,r),this.name="CanceledError"}A.inherits(Wt,W,{__CANCEL__:!0});function Zi(s,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?s(r):t(new W("Request failed with status code "+r.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function ah(s){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return t&&t[1]||""}function ih(s,t){s=s||10;const r=new Array(s),n=new Array(s);let a=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=n[i];o||(o=c),r[a]=d,n[a]=c;let m=i,b=0;for(;m!==a;)b+=r[m++],m=m%s;if(a=(a+1)%s,a===i&&(i=(i+1)%s),c-o<t)return;const y=u&&c-u;return y?Math.round(b*1e3/y):void 0}}function oh(s,t){let r=0,n=1e3/t,a,i;const o=(c,u=Date.now())=>{r=u,a=null,i&&(clearTimeout(i),i=null),s(...c)};return[(...c)=>{const u=Date.now(),m=u-r;m>=n?o(c,u):(a=c,i||(i=setTimeout(()=>{i=null,o(a)},n-m)))},()=>a&&o(a)]}const Fr=(s,t,r=3)=>{let n=0;const a=ih(50,250);return oh(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,d=o-n,c=a(d),u=o<=l;n=o;const m={loaded:o,total:l,progress:l?o/l:void 0,bytes:d,rate:c||void 0,estimated:c&&l&&u?(l-o)/c:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};s(m)},r)},ra=(s,t)=>{const r=s!=null;return[n=>t[0]({lengthComputable:r,total:s,loaded:n}),t[1]]},sa=s=>(...t)=>A.asap(()=>s(...t)),lh=ce.hasStandardBrowserEnv?((s,t)=>r=>(r=new URL(r,ce.origin),s.protocol===r.protocol&&s.host===r.host&&(t||s.port===r.port)))(new URL(ce.origin),ce.navigator&&/(msie|trident)/i.test(ce.navigator.userAgent)):()=>!0,ch=ce.hasStandardBrowserEnv?{write(s,t,r,n,a,i){const o=[s+"="+encodeURIComponent(t)];A.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),A.isString(n)&&o.push("path="+n),A.isString(a)&&o.push("domain="+a),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(s){const t=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(s){this.write(s,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function dh(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function uh(s,t){return t?s.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):s}function eo(s,t,r){let n=!dh(t);return s&&(n||r==!1)?uh(s,t):t}const na=s=>s instanceof fe?{...s}:s;function St(s,t){t=t||{};const r={};function n(c,u,m,b){return A.isPlainObject(c)&&A.isPlainObject(u)?A.merge.call({caseless:b},c,u):A.isPlainObject(u)?A.merge({},u):A.isArray(u)?u.slice():u}function a(c,u,m,b){if(A.isUndefined(u)){if(!A.isUndefined(c))return n(void 0,c,m,b)}else return n(c,u,m,b)}function i(c,u){if(!A.isUndefined(u))return n(void 0,u)}function o(c,u){if(A.isUndefined(u)){if(!A.isUndefined(c))return n(void 0,c)}else return n(void 0,u)}function l(c,u,m){if(m in t)return n(c,u);if(m in s)return n(void 0,c)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,u,m)=>a(na(c),na(u),m,!0)};return A.forEach(Object.keys({...s,...t}),function(u){const m=d[u]||a,b=m(s[u],t[u],u);A.isUndefined(b)&&m!==l||(r[u]=b)}),r}const to=s=>{const t=St({},s);let{data:r,withXSRFToken:n,xsrfHeaderName:a,xsrfCookieName:i,headers:o,auth:l}=t;if(t.headers=o=fe.from(o),t.url=Yi(eo(t.baseURL,t.url,t.allowAbsoluteUrls),s.params,s.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),A.isFormData(r)){if(ce.hasStandardBrowserEnv||ce.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(A.isFunction(r.getHeaders)){const d=r.getHeaders(),c=["content-type","content-length"];Object.entries(d).forEach(([u,m])=>{c.includes(u.toLowerCase())&&o.set(u,m)})}}if(ce.hasStandardBrowserEnv&&(n&&A.isFunction(n)&&(n=n(t)),n||n!==!1&&lh(t.url))){const d=a&&i&&ch.read(i);d&&o.set(a,d)}return t},mh=typeof XMLHttpRequest<"u",ph=mh&&function(s){return new Promise(function(r,n){const a=to(s);let i=a.data;const o=fe.from(a.headers).normalize();let{responseType:l,onUploadProgress:d,onDownloadProgress:c}=a,u,m,b,y,x;function f(){y&&y(),x&&x(),a.cancelToken&&a.cancelToken.unsubscribe(u),a.signal&&a.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(a.method.toUpperCase(),a.url,!0),h.timeout=a.timeout;function k(){if(!h)return;const v=fe.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),g={data:!l||l==="text"||l==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:v,config:s,request:h};Zi(function(I){r(I),f()},function(I){n(I),f()},g),h=null}"onloadend"in h?h.onloadend=k:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(k)},h.onabort=function(){h&&(n(new W("Request aborted",W.ECONNABORTED,s,h)),h=null)},h.onerror=function(w){const g=w&&w.message?w.message:"Network Error",P=new W(g,W.ERR_NETWORK,s,h);P.event=w||null,n(P),h=null},h.ontimeout=function(){let w=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const g=a.transitional||Ki;a.timeoutErrorMessage&&(w=a.timeoutErrorMessage),n(new W(w,g.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,s,h)),h=null},i===void 0&&o.setContentType(null),"setRequestHeader"in h&&A.forEach(o.toJSON(),function(w,g){h.setRequestHeader(g,w)}),A.isUndefined(a.withCredentials)||(h.withCredentials=!!a.withCredentials),l&&l!=="json"&&(h.responseType=a.responseType),c&&([b,x]=Fr(c,!0),h.addEventListener("progress",b)),d&&h.upload&&([m,y]=Fr(d),h.upload.addEventListener("progress",m),h.upload.addEventListener("loadend",y)),(a.cancelToken||a.signal)&&(u=v=>{h&&(n(!v||v.type?new Wt(null,s,h):v),h.abort(),h=null)},a.cancelToken&&a.cancelToken.subscribe(u),a.signal&&(a.signal.aborted?u():a.signal.addEventListener("abort",u)));const j=ah(a.url);if(j&&ce.protocols.indexOf(j)===-1){n(new W("Unsupported protocol "+j+":",W.ERR_BAD_REQUEST,s));return}h.send(i||null)})},hh=(s,t)=>{const{length:r}=s=s?s.filter(Boolean):[];if(t||r){let n=new AbortController,a;const i=function(c){if(!a){a=!0,l();const u=c instanceof Error?c:this.reason;n.abort(u instanceof W?u:new Wt(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new W(`timeout ${t} of ms exceeded`,W.ETIMEDOUT))},t);const l=()=>{s&&(o&&clearTimeout(o),o=null,s.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),s=null)};s.forEach(c=>c.addEventListener("abort",i));const{signal:d}=n;return d.unsubscribe=()=>A.asap(l),d}},gh=function*(s,t){let r=s.byteLength;if(r<t){yield s;return}let n=0,a;for(;n<r;)a=n+t,yield s.slice(n,a),n=a},fh=async function*(s,t){for await(const r of xh(s))yield*gh(r,t)},xh=async function*(s){if(s[Symbol.asyncIterator]){yield*s;return}const t=s.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},aa=(s,t,r,n)=>{const a=fh(s,t);let i=0,o,l=d=>{o||(o=!0,n&&n(d))};return new ReadableStream({async pull(d){try{const{done:c,value:u}=await a.next();if(c){l(),d.close();return}let m=u.byteLength;if(r){let b=i+=m;r(b)}d.enqueue(new Uint8Array(u))}catch(c){throw l(c),c}},cancel(d){return l(d),a.return()}},{highWaterMark:2})},ia=64*1024,{isFunction:vr}=A,bh=(({Request:s,Response:t})=>({Request:s,Response:t}))(A.global),{ReadableStream:oa,TextEncoder:la}=A.global,ca=(s,...t)=>{try{return!!s(...t)}catch{return!1}},yh=s=>{s=A.merge.call({skipUndefined:!0},bh,s);const{fetch:t,Request:r,Response:n}=s,a=t?vr(t):typeof fetch=="function",i=vr(r),o=vr(n);if(!a)return!1;const l=a&&vr(oa),d=a&&(typeof la=="function"?(x=>f=>x.encode(f))(new la):async x=>new Uint8Array(await new r(x).arrayBuffer())),c=i&&l&&ca(()=>{let x=!1;const f=new r(ce.origin,{body:new oa,method:"POST",get duplex(){return x=!0,"half"}}).headers.has("Content-Type");return x&&!f}),u=o&&l&&ca(()=>A.isReadableStream(new n("").body)),m={stream:u&&(x=>x.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!m[x]&&(m[x]=(f,h)=>{let k=f&&f[x];if(k)return k.call(f);throw new W(`Response type '${x}' is not supported`,W.ERR_NOT_SUPPORT,h)})});const b=async x=>{if(x==null)return 0;if(A.isBlob(x))return x.size;if(A.isSpecCompliantForm(x))return(await new r(ce.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(A.isArrayBufferView(x)||A.isArrayBuffer(x))return x.byteLength;if(A.isURLSearchParams(x)&&(x=x+""),A.isString(x))return(await d(x)).byteLength},y=async(x,f)=>{const h=A.toFiniteNumber(x.getContentLength());return h??b(f)};return async x=>{let{url:f,method:h,data:k,signal:j,cancelToken:v,timeout:w,onDownloadProgress:g,onUploadProgress:P,responseType:I,headers:E,withCredentials:O="same-origin",fetchOptions:D}=to(x),_=t||fetch;I=I?(I+"").toLowerCase():"text";let C=hh([j,v&&v.toAbortSignal()],w),B=null;const T=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let S;try{if(P&&c&&h!=="get"&&h!=="head"&&(S=await y(E,k))!==0){let G=new r(f,{method:"POST",body:k,duplex:"half"}),V;if(A.isFormData(k)&&(V=G.headers.get("content-type"))&&E.setContentType(V),G.body){const[ee,ue]=ra(S,Fr(sa(P)));k=aa(G.body,ia,ee,ue)}}A.isString(O)||(O=O?"include":"omit");const N=i&&"credentials"in r.prototype,M={...D,signal:C,method:h.toUpperCase(),headers:E.normalize().toJSON(),body:k,duplex:"half",credentials:N?O:void 0};B=i&&new r(f,M);let H=await(i?_(B,D):_(f,M));const K=u&&(I==="stream"||I==="response");if(u&&(g||K&&T)){const G={};["status","statusText","headers"].forEach(xe=>{G[xe]=H[xe]});const V=A.toFiniteNumber(H.headers.get("content-length")),[ee,ue]=g&&ra(V,Fr(sa(g),!0))||[];H=new n(aa(H.body,ia,ee,()=>{ue&&ue(),T&&T()}),G)}I=I||"text";let Te=await m[A.findKey(m,I)||"text"](H,x);return!K&&T&&T(),await new Promise((G,V)=>{Zi(G,V,{data:Te,headers:fe.from(H.headers),status:H.status,statusText:H.statusText,config:x,request:B})})}catch(N){throw T&&T(),N&&N.name==="TypeError"&&/Load failed|fetch/i.test(N.message)?Object.assign(new W("Network Error",W.ERR_NETWORK,x,B),{cause:N.cause||N}):W.from(N,N&&N.code,x,B)}}},vh=new Map,ro=s=>{let t=s?s.env:{};const{fetch:r,Request:n,Response:a}=t,i=[n,a,r];let o=i.length,l=o,d,c,u=vh;for(;l--;)d=i[l],c=u.get(d),c===void 0&&u.set(d,c=l?new Map:yh(t)),u=c;return c};ro();const _s={http:Mp,xhr:ph,fetch:{get:ro}};A.forEach(_s,(s,t)=>{if(s){try{Object.defineProperty(s,"name",{value:t})}catch{}Object.defineProperty(s,"adapterName",{value:t})}});const da=s=>`- ${s}`,wh=s=>A.isFunction(s)||s===null||s===!1,so={getAdapter:(s,t)=>{s=A.isArray(s)?s:[s];const{length:r}=s;let n,a;const i={};for(let o=0;o<r;o++){n=s[o];let l;if(a=n,!wh(n)&&(a=_s[(l=String(n)).toLowerCase()],a===void 0))throw new W(`Unknown adapter '${l}'`);if(a&&(A.isFunction(a)||(a=a.get(t))))break;i[l||"#"+o]=a}if(!a){const o=Object.entries(i).map(([d,c])=>`adapter ${d} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=r?o.length>1?`since :
`+o.map(da).join(`
`):" "+da(o[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return a},adapters:_s};function ys(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Wt(null,s)}function ua(s){return ys(s),s.headers=fe.from(s.headers),s.data=bs.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),so.getAdapter(s.adapter||pr.adapter,s)(s).then(function(n){return ys(s),n.data=bs.call(s,s.transformResponse,n),n.headers=fe.from(n.headers),n},function(n){return Qi(n)||(ys(s),n&&n.response&&(n.response.data=bs.call(s,s.transformResponse,n.response),n.response.headers=fe.from(n.response.headers))),Promise.reject(n)})}const no="1.12.2",Xr={};["object","boolean","number","function","string","symbol"].forEach((s,t)=>{Xr[s]=function(n){return typeof n===s||"a"+(t<1?"n ":" ")+s}});const ma={};Xr.transitional=function(t,r,n){function a(i,o){return"[Axios v"+no+"] Transitional option '"+i+"'"+o+(n?". "+n:"")}return(i,o,l)=>{if(t===!1)throw new W(a(o," has been removed"+(r?" in "+r:"")),W.ERR_DEPRECATED);return r&&!ma[o]&&(ma[o]=!0,console.warn(a(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,o,l):!0}};Xr.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function jh(s,t,r){if(typeof s!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const n=Object.keys(s);let a=n.length;for(;a-- >0;){const i=n[a],o=t[i];if(o){const l=s[i],d=l===void 0||o(l,i,s);if(d!==!0)throw new W("option "+i+" must be "+d,W.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new W("Unknown option "+i,W.ERR_BAD_OPTION)}}const Ar={assertOptions:jh,validators:Xr},Oe=Ar.validators;let wt=class{constructor(t){this.defaults=t||{},this.interceptors={request:new ea,response:new ea}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const i=a.stack?a.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=St(this.defaults,r);const{transitional:n,paramsSerializer:a,headers:i}=r;n!==void 0&&Ar.assertOptions(n,{silentJSONParsing:Oe.transitional(Oe.boolean),forcedJSONParsing:Oe.transitional(Oe.boolean),clarifyTimeoutError:Oe.transitional(Oe.boolean)},!1),a!=null&&(A.isFunction(a)?r.paramsSerializer={serialize:a}:Ar.assertOptions(a,{encode:Oe.function,serialize:Oe.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Ar.assertOptions(r,{baseUrl:Oe.spelling("baseURL"),withXsrfToken:Oe.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=i&&A.merge(i.common,i[r.method]);i&&A.forEach(["delete","get","head","post","put","patch","common"],x=>{delete i[x]}),r.headers=fe.concat(o,i);const l=[];let d=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(r)===!1||(d=d&&f.synchronous,l.unshift(f.fulfilled,f.rejected))});const c=[];this.interceptors.response.forEach(function(f){c.push(f.fulfilled,f.rejected)});let u,m=0,b;if(!d){const x=[ua.bind(this),void 0];for(x.unshift(...l),x.push(...c),b=x.length,u=Promise.resolve(r);m<b;)u=u.then(x[m++],x[m++]);return u}b=l.length;let y=r;for(;m<b;){const x=l[m++],f=l[m++];try{y=x(y)}catch(h){f.call(this,h);break}}try{u=ua.call(this,y)}catch(x){return Promise.reject(x)}for(m=0,b=c.length;m<b;)u=u.then(c[m++],c[m++]);return u}getUri(t){t=St(this.defaults,t);const r=eo(t.baseURL,t.url,t.allowAbsoluteUrls);return Yi(r,t.params,t.paramsSerializer)}};A.forEach(["delete","get","head","options"],function(t){wt.prototype[t]=function(r,n){return this.request(St(n||{},{method:t,url:r,data:(n||{}).data}))}});A.forEach(["post","put","patch"],function(t){function r(n){return function(i,o,l){return this.request(St(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}wt.prototype[t]=r(),wt.prototype[t+"Form"]=r(!0)});let Nh=class ao{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(a=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](a);n._listeners=null}),this.promise.then=a=>{let i;const o=new Promise(l=>{n.subscribe(l),i=l}).then(a);return o.cancel=function(){n.unsubscribe(i)},o},t(function(i,o,l){n.reason||(n.reason=new Wt(i,o,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new ao(function(a){t=a}),cancel:t}}};function Sh(s){return function(r){return s.apply(null,r)}}function Ch(s){return A.isObject(s)&&s.isAxiosError===!0}const Us={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Us).forEach(([s,t])=>{Us[t]=s});function io(s){const t=new wt(s),r=Mi(wt.prototype.request,t);return A.extend(r,wt.prototype,t,{allOwnKeys:!0}),A.extend(r,t,null,{allOwnKeys:!0}),r.create=function(a){return io(St(s,a))},r}const Z=io(pr);Z.Axios=wt;Z.CanceledError=Wt;Z.CancelToken=Nh;Z.isCancel=Qi;Z.VERSION=no;Z.toFormData=Kr;Z.AxiosError=W;Z.Cancel=Z.CanceledError;Z.all=function(t){return Promise.all(t)};Z.spread=Sh;Z.isAxiosError=Ch;Z.mergeConfig=St;Z.AxiosHeaders=fe;Z.formToJSON=s=>Xi(A.isHTMLForm(s)?new FormData(s):s);Z.getAdapter=so.getAdapter;Z.HttpStatusCode=Us;Z.default=Z;const{Axios:Mx,AxiosError:$x,CanceledError:Bx,isCancel:_x,CancelToken:Ux,VERSION:Hx,all:zx,Cancel:Gx,isAxiosError:Wx,spread:qx,toFormData:Vx,AxiosHeaders:Jx,HttpStatusCode:Yx,formToJSON:Kx,getAdapter:Xx,mergeConfig:Qx}=Z;class kh{constructor(){this.baseURL="https://api.github.com",this.trendingRepos=[],this.templateCache=new Map,this.cacheExpiry=30*60*1e3,this.isLoading=!1,console.log("🔗 GitHub Template Service initialized")}async getTrendingTemplates(t="javascript",r="stars",n="desc"){if(this.isLoading)return this.trendingRepos;this.isLoading=!0;try{console.log("📡 Fetching trending GitHub templates...");const a=["stars:>100 topic:todo-app","stars:>100 topic:calculator","stars:>100 topic:weather-app","stars:>100 topic:game","stars:>100 topic:portfolio","stars:>100 topic:blog","stars:>100 topic:landing-page","stars:>50 topic:react-tutorial","stars:>50 topic:javascript-project","stars:>50 topic:html-css"],i=[];for(const d of a)try{console.log(`📈 Fetching trending repositories: ${d}`);const c=await fetch(`${this.baseURL}/search/repositories?q=${encodeURIComponent(d)}&sort=stars&order=desc&per_page=20`,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"DreamBuild-Template-Service"}});if(!c.ok)if(console.error(`GitHub API error for query "${d}": ${c.status}`),c.status===403||c.status===429){console.log("⚠️ Rate limit hit, returning cached/fallback templates");const m=this.getFallbackTemplates();return this.trendingRepos=m,m}else if(c.status===422){console.log(`⚠️ Invalid query "${d}", skipping...`);continue}else{console.log(`⚠️ API error ${c.status} for query "${d}", skipping...`);continue}const u=await c.json();if(u.items&&u.items.length>0){console.log(`📈 Found ${u.items.length} trending template repositories for: ${d}`);const m=u.items.filter(b=>this.isTemplateRepository(b));i.push(...m)}await new Promise(m=>setTimeout(m,500))}catch(c){console.error(`Error fetching templates for ${d}:`,c);continue}const o=this.deduplicateRepos(i),l=this.filterTemplateRepos(o);if(l.length<10){console.log("📦 Adding fallback templates due to limited API results");const d=this.getFallbackTemplates();l.push(...d)}return this.trendingRepos=l.slice(0,25),console.log(`✅ Found ${this.trendingRepos.length} template repositories`),this.trendingRepos}catch(a){return console.error("❌ Failed to fetch trending templates:",a),this.getFallbackTemplates()}finally{this.isLoading=!1}}async getRepositoryTemplate(t){const r=`repo_${t.id}`;if(this.templateCache.has(r)){const n=this.templateCache.get(r);if(Date.now()-n.timestamp<this.cacheExpiry)return n.data}try{console.log(`📦 Processing template: ${t.full_name}`);const n=await this.getRepositoryContents(t.full_name),a=await this.parseRepositoryTemplate(t,n);return this.templateCache.set(r,{data:a,timestamp:Date.now()}),a}catch(n){return console.error(`❌ Failed to process template ${t.full_name}:`,n),null}}async getRepositoryContents(t,r=""){try{const n=await fetch(`${this.baseURL}/repos/${t}/contents/${r}`);if(!n.ok)throw new Error(`GitHub API error: ${n.status}`);return await n.json()}catch(n){return console.error(`Failed to fetch contents for ${t}:`,n),[]}}async parseRepositoryTemplate(t,r){var i;const n=this.transformRepositoryToTemplate(t),a=this.extractKeyFiles(r);return n.files=a,n.fileCount=a.length,n.preview=((i=t.owner)==null?void 0:i.avatar_url)||"/api/placeholder/400/300",n}detectTemplateType(t,r){const n=t.name.toLowerCase(),a=(t.description||"").toLowerCase(),i=(t.topics||[]).join(" ").toLowerCase(),o=`${n} ${a} ${i}`;return o.includes("react-native")||o.includes("expo")||o.includes("flutter")||o.includes("mobile")?"mobile":o.includes("react")||o.includes("nextjs")||o.includes("next.js")||o.includes("gatsby")?"react":o.includes("vue")||o.includes("nuxt")||o.includes("quasar")?"vue":o.includes("angular")||o.includes("ionic")?"angular":o.includes("svelte")||o.includes("sveltekit")?"svelte":o.includes("node")||o.includes("express")||o.includes("koa")||o.includes("fastify")?"nodejs":o.includes("python")||o.includes("django")||o.includes("flask")||o.includes("fastapi")?"python":o.includes("php")||o.includes("laravel")||o.includes("symfony")||o.includes("codeigniter")?"php":o.includes("go")||o.includes("golang")||o.includes("gin")?"go":o.includes("rust")||o.includes("actix")||o.includes("rocket")?"rust":o.includes("java")||o.includes("spring")||o.includes("maven")?"java":o.includes("api")||o.includes("rest")||o.includes("graphql")||o.includes("microservice")?"api":o.includes("dashboard")||o.includes("admin")||o.includes("panel")?"dashboard":o.includes("ecommerce")||o.includes("e-commerce")||o.includes("shop")||o.includes("store")?"ecommerce":o.includes("blog")||o.includes("cms")||o.includes("content")?"blog":o.includes("portfolio")||o.includes("personal")||o.includes("resume")?"portfolio":o.includes("landing")||o.includes("marketing")||o.includes("promo")?"landing":o.includes("cms")||o.includes("content-management")||o.includes("headless")?"cms":o.includes("ui")||o.includes("ux")||o.includes("design-system")||o.includes("component-library")?"ui":o.includes("test")||o.includes("testing")||o.includes("e2e")||o.includes("unit-test")?"testing":o.includes("devops")||o.includes("ci-cd")||o.includes("docker")||o.includes("kubernetes")?"devops":o.includes("database")||o.includes("sql")||o.includes("nosql")||o.includes("mongodb")||o.includes("postgresql")?"database":o.includes("auth")||o.includes("authentication")||o.includes("jwt")||o.includes("oauth")?"auth":o.includes("payment")||o.includes("stripe")||o.includes("paypal")||o.includes("billing")?"payment":o.includes("analytics")||o.includes("tracking")||o.includes("metrics")||o.includes("monitoring")?"analytics":o.includes("documentation")||o.includes("docs")||o.includes("readme")||o.includes("guide")?"documentation":"web"}extractKeyFiles(t){const r=[],n=["package.json","package-lock.json","yarn.lock","index.html","index.js","index.jsx","index.ts","index.tsx","App.js","App.jsx","App.ts","App.tsx","main.js","main.ts","main.jsx","main.tsx","src/","components/","pages/","views/","README.md","readme.md","docker-compose.yml","Dockerfile","tsconfig.json","webpack.config.js","vite.config.js","tailwind.config.js","postcss.config.js"];return t.forEach(a=>{n.some(i=>a.name.toLowerCase()===i.toLowerCase()||a.name.toLowerCase().startsWith(i.toLowerCase()))&&r.push({name:a.name,path:a.path,type:a.type,size:a.size,downloadUrl:a.download_url})}),r.slice(0,20)}generateTemplateName(t){return t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" ").replace(/template|starter|boilerplate|example|demo/gi,"").trim()}categorizeTemplate(t,r){return{react:"web-apps",vue:"web-apps",angular:"web-apps",svelte:"web-apps",nodejs:"web-apps",python:"web-apps",php:"web-apps",go:"web-apps",rust:"web-apps",java:"web-apps",mobile:"mobile-apps",api:"apis",dashboard:"dashboards",ecommerce:"e-commerce",blog:"portfolios",portfolio:"portfolios",landing:"landing-pages",cms:"web-apps",ui:"web-apps",testing:"web-apps",devops:"apis",database:"apis",auth:"apis",payment:"apis",analytics:"dashboards",documentation:"portfolios",web:"web-apps"}[t]||"web-apps"}generateTags(t,r){const n=[r];t.language&&n.push(t.language.toLowerCase()),t.topics&&n.push(...t.topics.slice(0,3));const a={react:["react","javascript"],vue:["vue","javascript"],angular:["angular","typescript"],nodejs:["nodejs","express"],python:["python","django"],mobile:["react-native","mobile"]};return a[r]&&n.push(...a[r]),[...new Set(n)].slice(0,5)}deduplicateRepos(t){const r=new Set;return t.filter(n=>r.has(n.id)?!1:(r.add(n.id),!0))}isTemplateRepository(t){const r=t.name.toLowerCase(),n=(t.description||"").toLowerCase(),a=(t.topics||[]).join(" ").toLowerCase(),o=["todo-app","calculator","weather-app","recipe-app","expense-tracker","note-taking","bookmark-manager","task-manager","habit-tracker","budget-planner","calendar-app","contact-book","photo-gallery","music-player","video-player","chat-app","forum","blog","portfolio","landing-page","online-store","restaurant-menu","event-planner","booking-system","survey-form","quiz-app","game","puzzle","memory-game","tic-tac-toe","snake-game","pong","breakout","maze","word-search","sudoku","hangman","trivia","flashcards","timer","stopwatch","pomodoro","countdown","random-generator","password-generator","color-picker","unit-converter","currency-converter","tip-calculator","bmi-calculator","age-calculator","date-calculator","percentage-calculator","loan-calculator","mortgage-calculator","investment-calculator","tax-calculator","grade-calculator","gpa-calculator","starter","template","example","demo","sample","tutorial","beginner","simple","basic"].some(u=>r.includes(u)||n.includes(u)||a.includes(u)),l=t.stargazers_count>=10,d=new Date(t.updated_at)>new Date("2019-01-01"),c=t.description&&t.description.length>10;return o&&l&&d&&c}filterTemplateRepos(t){return t.filter(r=>this.isTemplateRepository(r))}async searchTemplates(t,r="all"){return(await this.getTrendingTemplates()).filter(a=>{const i=a.name.toLowerCase().includes(t.toLowerCase())||a.description.toLowerCase().includes(t.toLowerCase())||a.tags.some(l=>l.toLowerCase().includes(t.toLowerCase())),o=r==="all"||a.category===r;return i&&o})}async getTemplateById(t){const n=(await this.getTrendingTemplates()).find(a=>a.id===t);return n?await this.getRepositoryTemplate(n):null}async getTemplatesByCategory(t){return(await this.getTrendingTemplates()).filter(n=>n.category===t)}async getPopularTemplates(t=10){return(await this.getTrendingTemplates()).sort((n,a)=>a.popularity-n.popularity).slice(0,t)}getFallbackTemplates(){return[{id:"fallback-todo-1",name:"Simple Todo App",description:"A clean and simple todo application with add, edit, and delete functionality.",category:"todo-app",templateType:"web",difficulty:"beginner",estimatedTime:"2-4 hours",tags:["javascript","html","css","todo","task-management"],popularity:85,stars:150,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/simple-todo-app",features:["Add tasks","Mark complete","Delete tasks","Local storage"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999001,fullName:"example/simple-todo-app",htmlUrl:"https://github.com/example/simple-todo-app",cloneUrl:"https://github.com/example/simple-todo-app.git",language:"JavaScript",stargazersCount:150,forksCount:25,topics:["todo","javascript","html","css"],owner:"example"}},{id:"fallback-calculator-1",name:"Basic Calculator",description:"A functional calculator with basic arithmetic operations.",category:"calculator",templateType:"web",difficulty:"beginner",estimatedTime:"1-2 hours",tags:["javascript","html","css","calculator","math"],popularity:90,stars:200,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/basic-calculator",features:["Basic operations","Clear function","Responsive design"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999002,fullName:"example/basic-calculator",htmlUrl:"https://github.com/example/basic-calculator",cloneUrl:"https://github.com/example/basic-calculator.git",language:"JavaScript",stargazersCount:200,forksCount:30,topics:["calculator","javascript","math"],owner:"example"}},{id:"fallback-weather-1",name:"Weather Dashboard",description:"A weather app that displays current conditions and forecast.",category:"weather-app",templateType:"web",difficulty:"intermediate",estimatedTime:"3-5 hours",tags:["javascript","api","weather","dashboard"],popularity:75,stars:120,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/weather-dashboard",features:["Current weather","5-day forecast","Location search"],techStack:["HTML","CSS","JavaScript","Weather API"],isFallback:!0,githubData:{id:999003,fullName:"example/weather-dashboard",htmlUrl:"https://github.com/example/weather-dashboard",cloneUrl:"https://github.com/example/weather-dashboard.git",language:"JavaScript",stargazersCount:120,forksCount:20,topics:["weather","api","dashboard"],owner:"example"}},{id:"fallback-portfolio-1",name:"Personal Portfolio",description:"A modern, responsive portfolio website template.",category:"portfolio",templateType:"web",difficulty:"intermediate",estimatedTime:"4-6 hours",tags:["html","css","javascript","portfolio","responsive"],popularity:95,stars:300,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/personal-portfolio",features:["Responsive design","Project showcase","Contact form"],techStack:["HTML","CSS","JavaScript"],isFallback:!0,githubData:{id:999004,fullName:"example/personal-portfolio",htmlUrl:"https://github.com/example/personal-portfolio",cloneUrl:"https://github.com/example/personal-portfolio.git",language:"HTML",stargazersCount:300,forksCount:50,topics:["portfolio","responsive","html","css"],owner:"example"}},{id:"fallback-game-1",name:"Snake Game",description:"Classic Snake game built with vanilla JavaScript.",category:"game",templateType:"web",difficulty:"intermediate",estimatedTime:"3-4 hours",tags:["javascript","game","canvas","snake"],popularity:80,stars:180,lastUpdated:new Date().toISOString(),source:"github",repositoryUrl:"https://github.com/example/snake-game",features:["Keyboard controls","Score tracking","Game over screen"],techStack:["HTML","CSS","JavaScript","Canvas"],isFallback:!0,githubData:{id:999005,fullName:"example/snake-game",htmlUrl:"https://github.com/example/snake-game",cloneUrl:"https://github.com/example/snake-game.git",language:"JavaScript",stargazersCount:180,forksCount:35,topics:["game","snake","canvas","javascript"],owner:"example"}}]}transformRepositoryToTemplate(t,r="web"){var n;return{id:`github_${t.id}`,name:this.generateTemplateName(t.name),description:t.description||`Template based on ${t.full_name}`,category:this.categorizeTemplate(this.detectTemplateType(t,[]),t),templateType:this.detectTemplateType(t,[]),difficulty:this.estimateDifficulty(t),estimatedTime:this.estimateTime(t),tags:this.generateTags(t,this.detectTemplateType(t,[])),popularity:Math.min(Math.floor(t.stargazers_count/100),100),stars:t.stargazers_count,lastUpdated:t.updated_at,createdAt:t.created_at,source:"github",repositoryUrl:t.html_url,features:this.extractFeatures(t),techStack:this.extractTechStack(t),githubData:{id:t.id,fullName:t.full_name,htmlUrl:t.html_url,cloneUrl:t.clone_url,language:t.language,stargazersCount:t.stargazers_count,forksCount:t.forks_count,topics:t.topics||[],owner:(n=t.owner)==null?void 0:n.login}}}estimateDifficulty(t){return t.stargazers_count>500?"advanced":t.stargazers_count>100?"intermediate":"beginner"}estimateTime(t){const r=t.stargazers_count;return r>500?"6-8 hours":r>100?"3-5 hours":"1-3 hours"}extractFeatures(t){const r=[],n=t.name.toLowerCase(),a=(t.description||"").toLowerCase();return(n.includes("todo")||a.includes("todo"))&&r.push("Task management","Add/Edit tasks","Mark complete"),(n.includes("calculator")||a.includes("calculator"))&&r.push("Basic operations","Clear function"),(n.includes("weather")||a.includes("weather"))&&r.push("Current weather","Forecast","Location search"),(n.includes("portfolio")||a.includes("portfolio"))&&r.push("Project showcase","Responsive design","Contact form"),(n.includes("game")||a.includes("game"))&&r.push("Interactive gameplay","Score tracking"),r.length>0?r:["Modern design","Responsive layout"]}extractTechStack(t){const r=[];t.language&&r.push(t.language);const n=t.topics||[];return n.includes("react")&&r.push("React"),n.includes("vue")&&r.push("Vue"),n.includes("angular")&&r.push("Angular"),n.includes("html")&&r.push("HTML"),n.includes("css")&&r.push("CSS"),n.includes("javascript")&&r.push("JavaScript"),n.includes("typescript")&&r.push("TypeScript"),r.length>0?r:["HTML","CSS","JavaScript"]}clearCache(){this.templateCache.clear(),this.trendingRepos=[],console.log("🗑️ GitHub template cache cleared")}}const dt=new kh,pa={"codellama-7b":{name:"CodeLlama 7B",type:"Code Generation",baseURL:"http://localhost:11434/api",model:"codellama:7b",description:"Fast and efficient code generation (7B parameters)",languages:["python","javascript","java","cpp","go","rust","php","ruby"],strengths:["speed","efficiency","general-purpose"],ram_required:"8GB"},auto:{name:"Auto Select",type:"Auto Selection",baseURL:"http://localhost:11434/api",model:"auto",description:"Automatically selects the best available model",languages:["all"],strengths:["smart-selection","availability"],ram_required:"variable"}},Et={"web-apps":{name:"Web Applications",description:"Full-stack web applications",templates:[{id:"react-dashboard",name:"React Dashboard",description:"Modern React dashboard with charts and analytics",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"ecommerce-store",name:"E-commerce Store",description:"Complete online store with cart and checkout",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]}]},"mobile-apps":{name:"Mobile Applications",description:"React Native mobile applications",templates:[{id:"todo-app",name:"Todo App",description:"Simple todo application with React Native",category:"mobile-apps",files:["App.js","components/TodoItem.js","styles.js"]}]}};class Th{constructor(){if(this.isHealthy=!1,this.modelHealth={},this.availableModels=Object.keys(pa),this.baseURL="http://localhost:11434/api",this.isProduction=window.location.protocol==="https:",this.isLocalhost=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",this.isProduction&&!this.isLocalhost){console.log("🌐 Production environment detected - skipping local AI detection"),this.isHealthy=!1;return}console.log("🔍 Initializing local AI health monitoring..."),this.checkHealth(),setInterval(()=>{this.checkHealthQuiet()},3e4)}async checkHealth(){if(!(this.isProduction&&!this.isLocalhost))try{const t=await Z.get(`${this.baseURL}/tags`,{timeout:3e3});if(t.status===200){const r=this.isHealthy;this.isHealthy=!0,r||console.log("✅ Local AI service is healthy");const n=t.data.models||[];this.modelHealth={},n.forEach(a=>{this.modelHealth[a.name]={isHealthy:!0,size:a.size,modified_at:a.modified_at}})}else{const r=this.isHealthy;this.isHealthy=!1,r&&console.log("⚠️ Local AI service is not responding")}}catch(t){const r=this.isHealthy;this.isHealthy=!1,t.code==="ERR_NETWORK"||t.message.includes("CORS")?r||console.log("🔒 Local AI not accessible (CORS/Network) - using cloud AI"):t.code==="ECONNREFUSED"?r||console.log("💻 Ollama not running locally - using cloud AI"):r||console.log("⚠️ Local AI service not available:",t.message)}}async checkHealthQuiet(){if(!(this.isProduction&&!this.isLocalhost))try{const t=await Z.get(`${this.baseURL}/tags`,{timeout:3e3});if(t.status===200){const r=this.isHealthy;this.isHealthy=!0;const n=t.data.models||[];this.modelHealth={},n.forEach(a=>{this.modelHealth[a.name]={isHealthy:!0,size:a.size,modified_at:a.modified_at}})}else this.isHealthy=!1}catch{this.isHealthy=!1}}getAvailableModels(){return Object.values(pa)}getHealthyModels(){return Object.keys(this.modelHealth).filter(t=>this.modelHealth[t].isHealthy)}getTemplateCategories(){return Et}getTemplatesByCategory(t){var r;return((r=Et[t])==null?void 0:r.templates)||[]}async getAllTemplates(){const t=[];Object.values(Et).forEach(a=>{t.push(...a.templates)});const n=(await dt.getTrendingTemplates()).map(a=>dt.transformRepositoryToTemplate(a));return[...t,...n]}async searchTemplates(t){const r=[];Object.values(Et).forEach(o=>{r.push(...o.templates)});const a=(await dt.searchTemplates(t)).map(o=>dt.transformRepositoryToTemplate(o));return[...r,...a].filter(o=>o.name.toLowerCase().includes(t.toLowerCase())||(o.description||"").toLowerCase().includes(t.toLowerCase()))}async getPopularTemplates(){const t=[];Object.values(Et).forEach(i=>{t.push(...i.templates)});const n=(await dt.getPopularTemplates(5)).map(i=>dt.transformRepositoryToTemplate(i));return[...t,...n].sort((i,o)=>(o.popularity||0)-(i.popularity||0)).slice(0,10)}async generateTemplateById(t,r={}){if(t.startsWith("github_"))return await this.generateGitHubTemplate(t,r);const n=[];Object.values(Et).forEach(i=>{n.push(...i.templates)});const a=n.find(i=>i.id===t);if(!a)throw new Error(`Template ${t} not found`);return this.createTemplateFiles(a,r)}async generateGitHubTemplate(t,r={}){try{console.log(`🚀 Generating GitHub template: ${t}`);const n=await dt.getTemplateById(t);if(!n)throw new Error(`GitHub template ${t} not found`);const a=await this.createGitHubTemplateFiles(n,r);return console.log(`✅ Generated ${Object.keys(a).length} files from GitHub template`),a}catch(n){throw console.error(`❌ Failed to generate GitHub template ${t}:`,n),n}}async createGitHubTemplateFiles(t,r={}){const n={};try{const{githubData:a}=t;return n["README.md"]=`# ${t.name}

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
</html>`}return n}async generateCode(t,r={}){console.log("🚀 Starting code generation for prompt:",t);try{return this.isProduction&&!this.isLocalhost?(console.log("🌐 Production environment - using template fallback"),this.createFallbackResponse(t,r)):this.isHealthy?await this.generateWithLocalAI(t,r):(console.log("⚠️ Local AI not available, using template fallback"),this.createFallbackResponse(t,r))}catch(n){return console.error("❌ Code generation failed:",n),this.createFallbackResponse(t,r)}}async generateWithLocalAI(t,r={}){const n=this.getBestAvailableModel(),a=this.createSystemPrompt(r),i={model:n,messages:[{role:"system",content:a},{role:"user",content:t}],stream:!1,options:{temperature:.7,top_p:.9,max_tokens:4e3}};try{const o=await Z.post(`${this.baseURL}/chat`,i,{timeout:3e4,headers:{"Content-Type":"application/json"}});if(o.data&&o.data.message&&o.data.message.content){const l=o.data.message.content;return this.parseAIResponse(l,t)}else throw new Error("Invalid response from local AI")}catch(o){throw console.error("❌ Local AI generation failed:",o),o}}getBestAvailableModel(){const t=this.getHealthyModels();return t.includes("codellama:7b")?"codellama:7b":t.includes("codellama:13b")?"codellama:13b":t.includes("codellama:34b")?"codellama:34b":t[0]||"codellama:7b"}createSystemPrompt(t={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

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
}`}}}const ie=new Th;var Ah={};class Dh{constructor(){this.isHealthy=!0,this.baseURL="https://api-inference.huggingface.co/models",this.apiKey=Ah.REACT_APP_HUGGINGFACE_API_KEY||"hf_your_api_key_here",this.availableModels={"codellama-7b":{name:"CodeLlama 7B",model:"codellama/CodeLlama-7b-Python-hf",description:"Fast and efficient code generation",maxTokens:2048,temperature:.7},"codellama-13b":{name:"CodeLlama 13B",model:"codellama/CodeLlama-13b-Python-hf",description:"Higher quality code generation",maxTokens:2048,temperature:.7},"starcoder-15b":{name:"StarCoder 15B",model:"bigcode/starcoder",description:"Excellent code completion",maxTokens:2048,temperature:.7},"deepseek-coder":{name:"DeepSeek Coder",model:"deepseek-ai/deepseek-coder-6.7b-instruct",description:"High-performance generation",maxTokens:2048,temperature:.7},"wizardcoder-7b":{name:"WizardCoder 7B",model:"WizardLM/WizardCoder-15B-V1.0",description:"Great at following instructions",maxTokens:2048,temperature:.7},"phi3-mini":{name:"Phi-3 Mini",model:"microsoft/Phi-3-mini-4k-instruct",description:"Lightweight but powerful",maxTokens:2048,temperature:.7},"llama3-8b":{name:"Llama 3 8B",model:"meta-llama/Llama-3-8B-Instruct",description:"General purpose model",maxTokens:2048,temperature:.7},"mistral-7b":{name:"Mistral 7B",model:"mistralai/Mistral-7B-Instruct-v0.1",description:"Fast and efficient coding assistant",maxTokens:2048,temperature:.7},"gemma-7b":{name:"Gemma 7B",model:"google/gemma-7b-it",description:"Google's lightweight model",maxTokens:2048,temperature:.7},"qwen-7b":{name:"Qwen 7B",model:"Qwen/Qwen-7B-Chat",description:"Alibaba's coding model",maxTokens:2048,temperature:.7}},console.log("☁️ Cloud AI Service initialized with open source models!")}getAvailableModels(){return Object.values(this.availableModels)}getHealthyModels(){return Object.keys(this.availableModels)}async generateCode(t,r={}){console.log("🚀 Generating code with Cloud AI...");try{const n=this.analyzeProjectContext(r);console.log("🧠 Enhanced context analysis:",n);const a=this.generateContextAwareCode(t,n),i=this.generateAppName(t),o=this.generatePreviewData(a,i);return console.log("✅ Code generated successfully!"),console.log("🏷️ App name:",i),console.log("👁️ Preview data generated"),{files:a,appName:i,prompt:t,generatedAt:new Date().toISOString(),preview:o,context:n,iterations:[],dependencies:this.extractDependencies(a),buildInstructions:this.generateBuildInstructions(a)}}catch(n){console.error("❌ Code generation failed:",n);const a=this.createFallbackResponse(t,r),i=this.generateAppName(t);return{files:a,appName:i,prompt:t,generatedAt:new Date().toISOString(),preview:this.generatePreviewData(a,i),context:this.analyzeProjectContext(r),iterations:[],dependencies:this.extractDependencies(a),buildInstructions:this.generateBuildInstructions(a)}}}analyzeProjectContext(t){return{projectType:this.detectProjectType(t),existingFiles:t.previousFiles||[],dependencies:this.analyzeDependencies(t),codingStandards:this.detectCodingStandards(t),architecture:this.detectArchitecture(t),frameworks:this.detectFrameworks(t),userPreferences:this.extractUserPreferences(t),environment:this.detectEnvironment(t)}}generateContextAwareCode(t,r){console.log("🧠 Context-aware generation:",r);const n=this.analyzeUserRequest(t),a=this.generateSpecificCode(t,n),i=this.enhanceWithContext(a,r);return console.log("🔧 Enhanced code generated with context awareness"),i}generatePreviewData(t,r){return{title:r,description:`A ${r} application generated by DreamBuild AI`,features:this.extractFeatures(t),screenshots:this.generateScreenshots(t),liveDemo:this.generateLiveDemo(t),techStack:this.extractTechStack(t),deployment:this.generateDeploymentInfo(t)}}extractDependencies(t){const r=new Set;return Object.values(t).forEach(n=>{(n.includes("React")||n.includes("react"))&&(r.add("react"),r.add("react-dom")),(n.includes("Vue")||n.includes("vue"))&&r.add("vue"),(n.includes("Angular")||n.includes("angular"))&&r.add("@angular/core"),(n.includes("express")||n.includes("node"))&&r.add("express"),(n.includes("tailwind")||n.includes("bootstrap"))&&r.add("tailwindcss")}),Array.from(r)}generateBuildInstructions(t){const r=Object.values(t).some(a=>a.includes("React")||a.includes("react")),n=Object.values(t).some(a=>a.includes("express")||a.includes("node"));return r?{install:"npm install",start:"npm start",build:"npm run build",dev:"npm run dev"}:n?{install:"npm install",start:"node server.js",dev:"nodemon server.js"}:{install:"No dependencies required",start:"Open index.html in browser",build:"No build process required"}}generateIntelligentCode(t,r={}){console.log("🧠 Analyzing prompt:",t);const n=this.analyzeUserRequest(t);return console.log("📋 Analysis result:",n),this.generateSpecificCode(t,n)}analyzeUserRequest(t){const r=t.toLowerCase();return{hasButton:r.includes("button")||r.includes("click"),hasForm:r.includes("form")||r.includes("input")||r.includes("submit"),hasCalculator:r.includes("calculator")||r.includes("calculate")||r.includes("math"),hasColorChange:r.includes("color")||r.includes("change color"),hasCounter:r.includes("counter")||r.includes("count")||r.includes("increment"),hasTodo:r.includes("todo")||r.includes("task")||r.includes("list"),hasGame:r.includes("game")||r.includes("play")||r.includes("guess"),hasAnimation:r.includes("animation")||r.includes("animate")||r.includes("spinning"),hasAPI:r.includes("api")||r.includes("fetch")||r.includes("request"),wantsReact:r.includes("react")||r.includes("component"),wantsVue:r.includes("vue"),wantsAngular:r.includes("angular"),wantsPython:r.includes("python")||r.includes("flask")||r.includes("django"),wantsNode:r.includes("node")||r.includes("express"),wantsDatabase:r.includes("database")||r.includes("store")||r.includes("save"),wantsAuth:r.includes("login")||r.includes("auth")||r.includes("user"),wantsResponsive:r.includes("responsive")||r.includes("mobile"),wantsStyling:r.includes("css")||r.includes("style")||r.includes("design"),specificFeature:this.extractSpecificFeature(t),appName:this.extractAppName(t),targetLanguage:this.detectTargetLanguage(t)}}extractSpecificFeature(t){const r=t.toLowerCase();return r.includes("factorial")?"factorial":r.includes("fibonacci")?"fibonacci":r.includes("prime")?"prime":r.includes("sort")?"sort":r.includes("search")?"search":r.includes("timer")?"timer":r.includes("clock")?"clock":r.includes("weather")?"weather":r.includes("chat")?"chat":r.includes("quiz")?"quiz":null}detectTargetLanguage(t){const r=t.toLowerCase();return r.includes("python")?"python":r.includes("javascript")||r.includes("js")?"javascript":r.includes("react")?"react":r.includes("vue")?"vue":r.includes("angular")?"angular":r.includes("html")?"html":r.includes("css")?"css":"html"}generateSpecificCode(t,r){return console.log("🎯 Generating specific code for:",r.specificFeature||"general app"),r.specificFeature?this.generateSpecificFeature(t,r.specificFeature):r.hasCalculator?this.generateCalculatorApp(t):r.hasTodo?this.generateTodoApp(t):r.hasGame?this.generateGameApp(t):r.hasAnimation?this.generateAnimationApp(t):r.hasAPI?this.generateAPIApp(t):r.specificFeature==="weather"?this.generateWeatherApp(t):r.wantsReact?this.generateReactApp(t):r.wantsPython?this.generatePythonApp(t):r.wantsNode?this.generateNodeApp(t):this.generateWebAppWithFeatures(t,r)}selectBestModel(t,r){const n=t.toLowerCase();return n.includes("python")||n.includes("django")||n.includes("flask")?"codellama-7b":n.includes("javascript")||n.includes("react")||n.includes("node")?"starcoder-15b":n.includes("java")||n.includes("spring")?"deepseek-coder":n.includes("c++")||n.includes("cpp")||n.includes("rust")?"codellama-13b":n.includes("web")||n.includes("html")||n.includes("css")?"wizardcoder-7b":"codellama-7b"}async callHuggingFaceAPI(t,r,n,a){return(await Z.post(`${this.baseURL}/${t}`,{inputs:r,parameters:{max_new_tokens:n,temperature:a,return_full_text:!1,do_sample:!0}},{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},timeout:3e4})).data}createSystemPrompt(t={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

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

Generate practical, working applications that users can immediately use.`}parseAIResponse(t,r){try{let n="";Array.isArray(t)&&t.length>0?n=t[0].generated_text||t[0].text||"":t.generated_text?n=t.generated_text:t.text?n=t.text:n=JSON.stringify(t);const a=n.match(/\{[\s\S]*\}/);if(a){const i=JSON.parse(a[0]);if(i.files)return i.files}return this.createFallbackResponse(r,{})}catch(n){return console.error("❌ Failed to parse AI response:",n),this.createFallbackResponse(r,{})}}generateWebApp(t){const r=this.extractAppName(t)||"Web App";return{"index.html":`<!DOCTYPE html>
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
    
    console.log('${r} loaded successfully!');
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
}`}}generateReactApp(t){const r=this.extractAppName(t)||"React App";return{"index.html":`<!DOCTYPE html>
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
}`}}generateJavaScriptApp(t){const r=this.extractAppName(t)||"JavaScript App";return{"index.html":`<!DOCTYPE html>
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
        
        console.log('${r} initialized successfully!');
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
}`}}generateSpecificFeature(t,r){switch(console.log("🎯 Generating specific feature:",r),r){case"factorial":return this.generateFactorialApp(t);case"fibonacci":return this.generateFibonacciApp(t);case"prime":return this.generatePrimeApp(t);case"sort":return this.generateSortApp(t);case"search":return this.generateSearchApp(t);case"timer":return this.generateTimerApp(t);case"clock":return this.generateClockApp(t);case"weather":return this.generateWeatherApp(t);case"chat":return this.generateChatApp(t);case"quiz":return this.generateQuizApp(t);default:return this.generateWebApp(t)}}generateFactorialApp(t){const r=this.extractAppName(t)||"Factorial Calculator";return{"index.html":`<!DOCTYPE html>
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
        
        console.log('${r} initialized!');
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
}`}}generateFibonacciApp(t){const r=this.extractAppName(t)||"Fibonacci Calculator";return{"index.html":`<!DOCTYPE html>
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
        
        console.log('${r} initialized!');
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
}`}}generateWeatherApp(t){const r=this.extractAppName(t)||"Weather App";return{"index.html":`<!DOCTYPE html>
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
        
        console.log('${r} initialized!');
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
}`}}detectProjectType(t){const r=t.previousFiles||[];return r.some(n=>n.includes("package.json"))?"node":r.some(n=>n.includes(".jsx")||n.includes(".tsx"))?"react":r.some(n=>n.includes(".vue"))?"vue":(r.some(n=>n.includes(".html")),"web")}analyzeDependencies(t){return t.dependencies||[]}detectCodingStandards(t){return{indentation:"2 spaces",quotes:"single",semicolons:!0,trailingCommas:!0}}detectArchitecture(t){const r=t.previousFiles||[];return r.some(n=>n.includes("components"))?"component-based":r.some(n=>n.includes("pages"))?"page-based":"monolithic"}detectFrameworks(t){const r=[],n=t.previousFiles||[];return n.some(a=>a.includes("react"))&&r.push("react"),n.some(a=>a.includes("vue"))&&r.push("vue"),n.some(a=>a.includes("angular"))&&r.push("angular"),n.some(a=>a.includes("express"))&&r.push("express"),r}extractUserPreferences(t){return{preferredFramework:"react",styling:"tailwind",stateManagement:"hooks",testing:"jest"}}detectEnvironment(t){return{nodeVersion:"18+",packageManager:"npm",bundler:"vite",deployment:"firebase"}}enhanceWithContext(t,r){console.log("🔧 Enhancing code with context:",r);const n={...t};return Object.keys(n).forEach(a=>{var i,o;if(a.endsWith(".js")||a.endsWith(".jsx")){const l=n[a],d=`// Generated by DreamBuild AI with context awareness
// Project Type: ${r.projectType||"web"}
// Architecture: ${r.architecture||"monolithic"}
// Frameworks: ${((i=r.frameworks)==null?void 0:i.join(", "))||"vanilla"}
// Environment: ${((o=r.environment)==null?void 0:o.nodeVersion)||"18+"}

${l}`;n[a]=d}}),console.log("✅ Code enhanced with context awareness"),n}extractFeatures(t){const r=[],n=Object.values(t).join(" ").toLowerCase();return console.log("🔍 Extracting features from generated code..."),(n.includes("addeventlistener")||n.includes("onclick")||n.includes("onchange"))&&r.push("Interactive Elements"),(n.includes("localstorage")||n.includes("sessionstorage")||n.includes("indexeddb"))&&r.push("Data Persistence"),(n.includes("fetch")||n.includes("axios")||n.includes("xhr")||n.includes("api"))&&r.push("API Integration"),(n.includes("responsive")||n.includes("mobile")||n.includes("media query")||n.includes("@media"))&&r.push("Responsive Design"),(n.includes("animation")||n.includes("transition")||n.includes("transform")||n.includes("keyframes"))&&r.push("Animations"),(n.includes("form")||n.includes("input")||n.includes("textarea")||n.includes("select"))&&r.push("Form Handling"),(n.includes("login")||n.includes("auth")||n.includes("password")||n.includes("token"))&&r.push("Authentication"),(n.includes("websocket")||n.includes("socket")||n.includes("realtime")||n.includes("live"))&&r.push("Real-time Updates"),(n.includes("file")||n.includes("upload")||n.includes("download")||n.includes("blob"))&&r.push("File Handling"),r.length===0&&r.push("Modern UI","Interactive Elements","Responsive Design"),console.log("✅ Features extracted:",r),r}generateScreenshots(t){return["https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=App+Preview+1","https://via.placeholder.com/800x600/7C3AED/FFFFFF?text=App+Preview+2"]}generateLiveDemo(t){return"https://dreambuild-2024-app.web.app/preview"}extractTechStack(t){const r=[],n=Object.values(t).join(" ").toLowerCase();return console.log("🔍 Extracting tech stack from generated code..."),(n.includes("react")||n.includes("jsx"))&&r.push("React"),(n.includes("vue")||n.includes("vue.js"))&&r.push("Vue.js"),n.includes("angular")&&r.push("Angular"),n.includes("svelte")&&r.push("Svelte"),(n.includes("express")||n.includes("node"))&&r.push("Node.js"),(n.includes("django")||n.includes("flask"))&&r.push("Python"),(n.includes("spring")||n.includes("java"))&&r.push("Java"),n.includes("html")&&r.push("HTML5"),n.includes("css")&&r.push("CSS3"),(n.includes("javascript")||n.includes("js"))&&r.push("JavaScript"),(n.includes("typescript")||n.includes("ts"))&&r.push("TypeScript"),(n.includes("tailwind")||n.includes("tailwindcss"))&&r.push("Tailwind CSS"),n.includes("bootstrap")&&r.push("Bootstrap"),(n.includes("material")||n.includes("mui"))&&r.push("Material-UI"),(n.includes("mongodb")||n.includes("mongo"))&&r.push("MongoDB"),(n.includes("mysql")||n.includes("sql"))&&r.push("SQL"),n.includes("firebase")&&r.push("Firebase"),r.length===0&&r.push("HTML5","CSS3","JavaScript"),console.log("✅ Tech stack extracted:",r),r}generateDeploymentInfo(t){return{platform:"Firebase Hosting",url:"https://dreambuild-2024-app.web.app",status:"Ready to deploy",instructions:"Click deploy to publish your app"}}extractAppName(t){const r=t.split(" "),n=r.findIndex(a=>a.toLowerCase().includes("app")||a.toLowerCase().includes("application")||a.toLowerCase().includes("website")||a.toLowerCase().includes("page"));return n>0?r.slice(0,n).join(" "):null}generateAppName(t){const r=t.toLowerCase(),n=t.split(" ").filter(i=>i.length>3&&!["create","build","make","generate","app","application","website","page"].includes(i.toLowerCase()));if(r.includes("weather"))return"WeatherCast Pro";if(r.includes("calculator"))return"CalcMaster";if(r.includes("todo")||r.includes("task"))return"TaskFlow";if(r.includes("game"))return"GameZone";if(r.includes("chat"))return"ChatConnect";if(r.includes("dashboard"))return"DashBoard Pro";if(r.includes("ecommerce")||r.includes("store"))return"ShopMaster";if(r.includes("blog"))return"BlogCraft";if(r.includes("portfolio"))return"Portfolio Pro";if(r.includes("social"))return"SocialConnect";if(r.includes("music"))return"MusicHub";if(r.includes("photo")||r.includes("image"))return"PhotoGallery";if(r.includes("news"))return"NewsReader";if(r.includes("recipe"))return"RecipeBook";if(r.includes("fitness")||r.includes("workout"))return"FitTracker";if(r.includes("finance")||r.includes("budget"))return"FinanceTracker";if(r.includes("education")||r.includes("learn"))return"LearnHub";if(r.includes("travel"))return"TravelGuide";if(r.includes("food")||r.includes("restaurant"))return"FoodFinder";if(r.includes("book")||r.includes("library"))return"BookShelf";if(r.includes("calendar")||r.includes("schedule"))return"SchedulePro";if(n.length>0){const i=n[0].charAt(0).toUpperCase()+n[0].slice(1),o=n.length>1?n[1].charAt(0).toUpperCase()+n[1].slice(1):"App";return`${i}${o}`}const a=["DreamApp","InnovateHub","CreativeSpace","TechFlow","SmartApp","NextGen","FutureApp","ProApp","EliteApp","MasterApp","UltimateApp","PrimeApp","SuperApp","MegaApp","TurboApp"];return a[Math.floor(Math.random()*a.length)]}createFallbackResponse(t,r={}){console.log("🔄 Creating fallback response for prompt:",t);const n=t.toLowerCase();return n.includes("dashboard")||n.includes("analytics")?this.createDashboardTemplate(t):n.includes("todo")||n.includes("task")?this.createTodoTemplate(t):n.includes("ecommerce")||n.includes("store")||n.includes("shop")?this.createEcommerceTemplate(t):n.includes("api")||n.includes("backend")?this.createAPITemplate(t):this.createDefaultTemplate(t)}createDashboardTemplate(t){return{"index.html":`<!DOCTYPE html>
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
}`}}createTodoTemplate(t){return{"index.html":`<!DOCTYPE html>
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
}`}}createEcommerceTemplate(t){return{"index.html":`<!DOCTYPE html>
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
}`}}createAPITemplate(t){return{"server.js":`const express = require('express');
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
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to Your DreamBuild App!</h1>
        <p>Generated based on: "${t}"</p>
        
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
}`}}getServiceHealth(){return{"cloud-ai":{isHealthy:this.isHealthy}}}getUsageStats(){return{totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0}}}const Le=new Dh;class Ph{constructor(){this.currentService="cloud-ai",this.usageStats={totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0},console.log("🤖 Simple AI Service initialized - Cloud AI with Open Source Models!")}getServices(){return{"cloud-ai":{name:"Cloud AI Models",type:"Cloud",description:"Open source AI models via Hugging Face - no API keys required",models:Le.getAvailableModels()},"local-ai":{name:"Local AI Models",type:"Local",description:"Self-hosted AI models - no API keys required",models:ie.getAvailableModels()}}}getTemplateCategories(){return ie.getTemplateCategories()}getTemplatesByCategory(t){return ie.getTemplatesByCategory(t)}async getAllTemplates(){return await ie.getAllTemplates()}async generateTemplateById(t,r={}){return await ie.generateTemplateById(t,r)}async searchTemplates(t){return await ie.searchTemplates(t)}async getPopularTemplates(){return await ie.getPopularTemplates()}async generateCode(t,r={}){const n=Date.now();this.usageStats.totalRequests++;try{if(console.log("🚀 Generating code with Cloud AI..."),this.currentService==="cloud-ai"){const a=await Le.generateCode(t,r),i=Date.now()-n;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+i)/2,console.log("✅ Code generated successfully with Cloud AI!"),a}if(ie.isHealthy){console.log("🔄 Falling back to Local AI...");const a=await ie.generateCode(t,r),i=Date.now()-n;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+i)/2,console.log("✅ Code generated successfully with Local AI!"),a}return console.log("⚠️ No AI services available, using template fallback"),Le.createFallbackResponse(t,r)}catch(a){return console.error("❌ AI generation failed:",a),this.usageStats.failedRequests++,console.log("🔄 Falling back to template generation..."),Le.createFallbackResponse(t,r)}}getServiceHealth(){return{"cloud-ai":Le.getServiceHealth(),"local-ai":ie.modelHealth}}getUsageStats(){return this.usageStats}getUserPreferences(){return{preferredService:"cloud-ai",fallbackEnabled:!0,autoHealthCheck:!0}}updateUserPreferences(t){localStorage.setItem("dreambuild-preferences",JSON.stringify(t))}loadUserPreferences(){const t=localStorage.getItem("dreambuild-preferences");return t?JSON.parse(t):this.getUserPreferences()}getServiceStatus(){return{"cloud-ai":{isHealthy:Le.isHealthy,models:Le.getHealthyModels().length,totalModels:Le.getAvailableModels().length},"local-ai":{isHealthy:ie.isHealthy,models:ie.getHealthyModels().length,totalModels:ie.getAvailableModels().length}}}resetServiceHealth(){ie.modelHealth={}}getFallbackOrder(){return["cloud-ai","local-ai"]}isFallbackEnabled(){return!0}setFallbackEnabled(t){return!0}getSetupInstructions(){return{"cloud-ai":{title:"Cloud AI Setup",description:"Open source AI models via Hugging Face - no setup required",steps:["1. Cloud AI is ready to use with open source models","2. No API keys or installation required","3. Models include CodeLlama, StarCoder, DeepSeek, and more","4. Start generating code immediately!"],isSetup:Le.isHealthy},"local-ai":{title:"Local AI Setup",description:"Set up local AI models for code generation",steps:["1. Install Ollama from https://ollama.ai","2. Run: ollama pull codellama:7b","3. Run: ollama serve","4. Refresh DreamBuild to start using local AI"],isSetup:ie.isHealthy}}}getServicesNeedingSetup(){const t=[];return Le.isHealthy||t.push("cloud-ai"),ie.isHealthy||t.push("local-ai"),t}hasValidApiKey(t){return t==="cloud-ai"||t==="local-ai"}setService(t){(t==="cloud-ai"||t==="local-ai")&&(this.currentService=t)}getCurrentService(){return this.currentService}}const tr=new Ph,Eh=Object.freeze(Object.defineProperty({__proto__:null,default:tr},Symbol.toStringTag,{value:"Module"}));class Ih{constructor(){this.isAutoModeEnabled=!1,this.isRunning=!1,this.currentTask=null,this.taskQueue=[],this.iterationCount=0,this.maxIterations=5,this.fileWatchers=new Map,this.progressCallbacks=new Set,this.autoRefinementEnabled=!0,this.backgroundMonitoringEnabled=!0}toggleAutoMode(){return this.isAutoModeEnabled=!this.isAutoModeEnabled,this.isAutoModeEnabled?(console.log("🤖 AI Agent Auto Mode: ENABLED"),this.startBackgroundMonitoring()):(console.log("🤖 AI Agent Auto Mode: DISABLED"),this.stopBackgroundMonitoring(),this.stopCurrentTask()),this.isAutoModeEnabled}breakdownTask(t,r={}){console.log("🧠 Breaking down task:",t);const n=[],a=t.toLowerCase();return a.includes("full-stack")||a.includes("e-commerce")||a.includes("website")?n.push({id:1,title:"Project Setup",description:"Initialize project structure and dependencies",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Database Schema",description:"Design and implement database structure",priority:"high",estimatedTime:"5-7 min"},{id:3,title:"Authentication System",description:"Implement user login and registration",priority:"high",estimatedTime:"8-10 min"},{id:4,title:"Core Features",description:"Build main application functionality",priority:"medium",estimatedTime:"15-20 min"},{id:5,title:"UI/UX Polish",description:"Add styling, animations, and responsive design",priority:"medium",estimatedTime:"10-15 min"},{id:6,title:"Testing & Optimization",description:"Add tests and optimize performance",priority:"low",estimatedTime:"5-10 min"}):a.includes("react")||a.includes("frontend")?n.push({id:1,title:"Component Architecture",description:"Design React component structure",priority:"high",estimatedTime:"3-5 min"},{id:2,title:"State Management",description:"Implement state management solution",priority:"high",estimatedTime:"5-8 min"},{id:3,title:"Core Components",description:"Build main UI components",priority:"medium",estimatedTime:"10-15 min"},{id:4,title:"Routing & Navigation",description:"Add client-side routing",priority:"medium",estimatedTime:"5-8 min"},{id:5,title:"Styling & Responsiveness",description:"Add CSS and responsive design",priority:"low",estimatedTime:"8-12 min"}):a.includes("api")||a.includes("backend")?n.push({id:1,title:"API Structure",description:"Design REST API endpoints",priority:"high",estimatedTime:"5-8 min"},{id:2,title:"Database Integration",description:"Set up database connections and models",priority:"high",estimatedTime:"8-12 min"},{id:3,title:"Authentication & Security",description:"Implement JWT and security middleware",priority:"high",estimatedTime:"10-15 min"},{id:4,title:"Business Logic",description:"Implement core API functionality",priority:"medium",estimatedTime:"15-25 min"},{id:5,title:"Error Handling & Validation",description:"Add comprehensive error handling",priority:"medium",estimatedTime:"5-10 min"},{id:6,title:"Documentation & Testing",description:"Add API docs and tests",priority:"low",estimatedTime:"8-15 min"}):n.push({id:1,title:"Analysis",description:"Analyze requirements and plan approach",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Implementation",description:"Build core functionality",priority:"high",estimatedTime:"10-20 min"},{id:3,title:"Enhancement",description:"Add features and improvements",priority:"medium",estimatedTime:"8-15 min"},{id:4,title:"Polish",description:"Refine and optimize the solution",priority:"low",estimatedTime:"5-10 min"}),{originalPrompt:t,tasks:n,totalEstimatedTime:n.reduce((i,o)=>i+parseInt(o.estimatedTime.split("-")[0]),0),complexity:this.assessComplexity(t),autoModeRecommended:n.length>3}}assessComplexity(t){const r={simple:["button","form","page","component"],medium:["app","website","dashboard","api","database"],complex:["full-stack","e-commerce","social media","platform","enterprise"]},n=t.toLowerCase();for(const[a,i]of Object.entries(r))if(i.some(o=>n.includes(o)))return a;return"medium"}async startContinuousIteration(t,r={}){if(!this.isAutoModeEnabled){console.log("⚠️ Auto Mode not enabled");return}this.isRunning=!0,this.iterationCount=0,this.currentTask=this.breakdownTask(t,r),console.log("🔄 Starting continuous iteration for:",t);for(const n of this.currentTask.tasks){if(!this.isAutoModeEnabled||!this.isRunning)break;await this.executeTask(n,r),this.iterationCount++,this.autoRefinementEnabled&&this.iterationCount<this.maxIterations&&await this.autoRefine(n,r)}this.isRunning=!1,console.log("✅ Continuous iteration completed")}async executeTask(t,r={}){console.log(`🎯 Executing task ${t.id}: ${t.title}`),this.notifyProgress({type:"task_start",task:t,message:`Starting ${t.title}...`});try{await this.delay(this.getTaskDuration(t)),this.notifyProgress({type:"task_complete",task:t,message:`Completed ${t.title}`})}catch(n){console.error(`❌ Task ${t.id} failed:`,n),this.notifyProgress({type:"task_error",task:t,message:`Failed ${t.title}: ${n.message}`})}}async autoRefine(t,r={}){console.log(`🔧 Auto-refining: ${t.title}`),this.notifyProgress({type:"refinement_start",task:t,message:`Auto-refining ${t.title}...`}),await this.delay(2e3),this.notifyProgress({type:"refinement_complete",task:t,message:`Refined ${t.title}`})}startBackgroundMonitoring(){this.backgroundMonitoringEnabled&&(console.log("👀 Starting background monitoring"),this.setupFileWatchers(),this.startCodeQualityMonitoring(),this.startPerformanceMonitoring())}stopBackgroundMonitoring(){console.log("👀 Stopping background monitoring"),this.fileWatchers.forEach(t=>t.disconnect()),this.fileWatchers.clear()}setupFileWatchers(){console.log("📁 Setting up file watchers"),this.fileWatcherInterval=setInterval(()=>{this.checkForFileChanges()},5e3)}checkForFileChanges(){const t=this.simulateFileChanges();t.length>0&&(this.notifyProgress({type:"file_changes",changes:t,message:`Detected ${t.length} file changes`}),this.isAutoModeEnabled&&this.suggestImprovements(t))}simulateFileChanges(){const t=[];return Math.random()>.7&&t.push({file:"src/components/App.jsx",type:"modified",timestamp:new Date}),t}suggestImprovements(t){console.log("💡 Suggesting improvements for:",t);const r=["Consider adding error boundaries to React components","Optimize bundle size by lazy loading components","Add TypeScript for better type safety","Implement proper error handling in API calls","Add loading states for better UX"],n=r[Math.floor(Math.random()*r.length)];this.notifyProgress({type:"improvement_suggestion",suggestion:n,message:`Suggestion: ${n}`})}startCodeQualityMonitoring(){console.log("🔍 Starting code quality monitoring"),this.qualityCheckInterval=setInterval(()=>{this.performQualityCheck()},1e4)}performQualityCheck(){const t=this.simulateQualityIssues();t.length>0&&this.notifyProgress({type:"quality_issues",issues:t,message:`Found ${t.length} code quality issues`})}simulateQualityIssues(){const t=[];return Math.random()>.8&&t.push({type:"warning",message:"Unused import detected",file:"src/components/Button.jsx",line:5}),t}startPerformanceMonitoring(){console.log("⚡ Starting performance monitoring"),this.performanceCheckInterval=setInterval(()=>{this.checkPerformance()},15e3)}checkPerformance(){const t=this.simulatePerformanceMetrics();t.score<80&&this.notifyProgress({type:"performance_issue",metrics:t,message:`Performance score: ${t.score}/100`})}simulatePerformanceMetrics(){return{score:Math.floor(Math.random()*40)+60,loadTime:Math.floor(Math.random()*2e3)+500,bundleSize:Math.floor(Math.random()*500)+200}}onProgress(t){this.progressCallbacks.add(t)}offProgress(t){this.progressCallbacks.delete(t)}notifyProgress(t){this.progressCallbacks.forEach(r=>{try{r(t)}catch(n){console.error("Progress callback error:",n)}})}getTaskDuration(t){const[r,n]=t.estimatedTime.split("-").map(a=>parseInt(a.replace(" min","")));return(Math.random()*(n-r)+r)*1e3}delay(t){return new Promise(r=>setTimeout(r,t))}stopCurrentTask(){this.isRunning=!1,this.currentTask=null,this.iterationCount=0,this.fileWatcherInterval&&clearInterval(this.fileWatcherInterval),this.qualityCheckInterval&&clearInterval(this.qualityCheckInterval),this.performanceCheckInterval&&clearInterval(this.performanceCheckInterval)}getStatus(){return{isAutoModeEnabled:this.isAutoModeEnabled,isRunning:this.isRunning,currentTask:this.currentTask,iterationCount:this.iterationCount,maxIterations:this.maxIterations,autoRefinementEnabled:this.autoRefinementEnabled,backgroundMonitoringEnabled:this.backgroundMonitoringEnabled}}}const ha=new Ih;function Rh(){const{currentProject:s,updateFile:t,switchFile:r,updateConfig:n}=Ye(),[a,i]=p.useState(""),[o,l]=p.useState(""),[d,c]=p.useState(!1),u=p.useRef(null),m=p.useRef(null),[b,y]=p.useState([]),[x,f]=p.useState([]),[h,k]=p.useState(!1),[j,v]=p.useState(!1),[w,g]=p.useState("auto"),[P,I]=p.useState(0),[E,O]=p.useState(!1),[D,_]=p.useState(!1),[C,B]=p.useState(!1),[T,S]=p.useState("unlimited"),[N,M]=p.useState(!1),[H,K]=p.useState({tokens:0,maxTokens:4e3,percentage:0,files:0,characters:0});p.useEffect(()=>{u.current&&(u.current.style.height="auto",u.current.style.height=u.current.scrollHeight+"px")},[a]),p.useEffect(()=>{var F;(F=m.current)==null||F.scrollIntoView({behavior:"smooth"})},[b]),p.useEffect(()=>{console.log(`🎯 AI Model state changed to: ${w}`)},[w]),p.useEffect(()=>{const F=J=>{E&&!J.target.closest(".model-selector")&&!J.target.closest('button[class*="w-full p-2 rounded"]')&&O(!1)};return document.addEventListener("mousedown",F),()=>document.removeEventListener("mousedown",F)},[E]);const Te=async()=>{var ct,Nn;if(!a.trim()||d)return;const F=a;i(""),c(!0);const J={id:Date.now(),type:"user",content:F,timestamp:new Date},ae={id:Date.now()+1,type:"ai",content:"",timestamp:new Date,isLoading:!0};y(Tt=>[...Tt,J,ae]);try{await G(F),ha.getStatus().autoMode&&await ha.breakdownTask(F),console.log("🚀 Starting AI generation...");const Tt={conversationHistory:b,currentPrompt:F,previousFiles:Object.keys(s.files),projectContext:s.config},me=await tr.generateCode(F,Tt);if(console.log("📁 Files received:",me),console.log("📁 Files type:",typeof me),console.log("📁 Files keys:",me?Object.keys(me):"No files"),!me||typeof me!="object")throw new Error("Invalid files response from AI service");const Ke=me.appName||"Your App",At=me.files||me,ko=Object.keys(At).length,as=me.preview||{},is=me.dependencies||[],To=me.buildInstructions||{},Ao=`🎉 Created "${Ke}" with ${ko} files successfully!
      
📋 Features: ${((ct=as.features)==null?void 0:ct.join(", "))||"Interactive Elements, Responsive Design"}
🔧 Tech Stack: ${((Nn=as.techStack)==null?void 0:Nn.join(", "))||"HTML5, CSS3, JavaScript"}
📦 Dependencies: ${is.length>0?is.join(", "):"None required"}
🚀 Ready to deploy!`;y(we=>we.map(je=>je.id===ae.id?{...je,content:Ao,isLoading:!1,files:At,appName:Ke,preview:as,dependencies:is,buildInstructions:To,timestamp:new Date}:je)),console.log("🔍 AIPromptCursorStyle: About to add files to project"),console.log("🔍 AIPromptCursorStyle: generatedFiles:",At),console.log("🔍 AIPromptCursorStyle: generatedFiles keys:",Object.keys(At)),console.log("🔍 AIPromptCursorStyle: updateFile function:",typeof t);let Sn=0;Object.entries(At).forEach(([we,je])=>{if(console.log(`🔍 AIPromptCursorStyle: Processing file: ${we}`),console.log(`🔍 AIPromptCursorStyle: Content type: ${typeof je}`),console.log(`🔍 AIPromptCursorStyle: Content length: ${(je==null?void 0:je.length)||0}`),we&&je!==void 0){console.log(`📄 Adding file: ${we} (${typeof je})`);try{t(we,je),Sn++,console.log(`✅ Successfully added file: ${we}`)}catch(Do){console.error(`❌ Error adding file ${we}:`,Do)}}else console.log(`❌ Skipping file ${we}: filename=${!!we}, content=${je!==void 0}`)}),console.log(`✅ Added ${Sn} files to project`);const os=Object.keys(At)[0];os&&(r(os),console.log(`🎯 Set active file: ${os}`));const Vt=o.trim()||Ke||"My App";console.log(`🎯 Setting project name to: ${Vt}`),console.log(`🎯 Project name input: "${o}"`),console.log(`🎯 App name from AI: "${Ke}"`),console.log(`🎯 Final project name: "${Vt}"`),console.log(`🎯 updateConfig function: ${typeof n}`),console.log("🎯 Current project before update:",s);try{console.log("🎯 About to call updateConfig with:",{name:Vt}),n({name:Vt}),console.log(`✅ Successfully updated project name: ${Vt}`),setTimeout(()=>{console.log(`🔍 Current project name after update: ${s.name}`),console.log("🔍 Current project after update:",s)},1e3)}catch(we){console.error("❌ Error updating project name:",we)}}catch(Tt){console.error("Generation error:",Tt),y(me=>me.map(Ke=>Ke.id===ae.id?{...Ke,content:`Error: ${Tt.message}`,isLoading:!1,error:!0}:Ke))}finally{c(!1)}},G=async F=>{const J=[{id:1,title:"Add responsive design",category:"UI/UX"},{id:2,title:"Implement error handling",category:"Performance"},{id:3,title:"Add TypeScript types",category:"Code Quality"},{id:4,title:"Optimize for mobile",category:"Mobile"}].filter(()=>Math.random()>.5);f(J)},V=F=>{navigator.clipboard.writeText(F),X.success("Message copied to clipboard")},ee=(F,J)=>{y(ae=>ae.map(ct=>ct.id===F?{...ct,metadata:{...ct.metadata,feedback:J,feedbackTimestamp:new Date}}:ct)),X.success(`Feedback recorded: ${J}`)},ue=F=>{F.key==="Enter"&&(F.preventDefault(),Te())},xe=F=>{F.preventDefault(),B(!0)},ss=F=>{F.preventDefault(),B(!1)},ns=F=>{F.preventDefault(),B(!1);const J=Array.from(F.dataTransfer.files);J.length>0&&L(J)},L=F=>{const J=F.map(ae=>ae.name).join(", ");i(ae=>ae+`

[Attached files: ${J}]`),K(ae=>({...ae,files:ae.files+F.length,characters:ae.characters+J.length}))},z=F=>({auto:"Auto","codellama-7b":"CodeLlama 7B","codellama-13b":"CodeLlama 13B","codellama-34b":"CodeLlama 34B","starcoder-15b":"StarCoder 15B","deepseek-coder":"DeepSeek Coder","wizardcoder-7b":"WizardCoder 7B","phi3-mini":"Phi-3 Mini","llama3-8b":"Llama 3 8B","mistral-7b":"Mistral 7B","gemma-7b":"Gemma 7B","qwen-7b":"Qwen 7B","codet5-small":"CodeT5 Small","incoder-6b":"InCoder 6B"})[F]||"Auto",U=()=>[{id:"auto",name:"Auto",description:"Automatically selects the best model",ram_required:"Smart"},{id:"codellama-7b",name:"CodeLlama 7B",description:"Fast and efficient code generation",ram_required:"8GB"},{id:"codellama-13b",name:"CodeLlama 13B",description:"Higher quality code generation",ram_required:"16GB"},{id:"codellama-34b",name:"CodeLlama 34B",description:"Best quality code generation",ram_required:"32GB"},{id:"starcoder-15b",name:"StarCoder 15B",description:"Excellent code completion",ram_required:"24GB"},{id:"deepseek-coder",name:"DeepSeek Coder",description:"High-performance generation",ram_required:"12GB"},{id:"wizardcoder-7b",name:"WizardCoder 7B",description:"Great at following instructions",ram_required:"10GB"},{id:"phi3-mini",name:"Phi-3 Mini",description:"Lightweight but powerful",ram_required:"6GB"},{id:"llama3-8b",name:"Llama 3 8B",description:"General purpose model",ram_required:"10GB"},{id:"mistral-7b",name:"Mistral 7B",description:"Fast and efficient coding assistant",ram_required:"8GB"},{id:"gemma-7b",name:"Gemma 7B",description:"Google's lightweight model",ram_required:"9GB"},{id:"qwen-7b",name:"Qwen 7B",description:"Alibaba's coding model",ram_required:"8GB"},{id:"codet5-small",name:"CodeT5 Small",description:"Salesforce's code generation model",ram_required:"4GB"},{id:"incoder-6b",name:"InCoder 6B",description:"Code completion specialist",ram_required:"6GB"}];return e.jsxs("div",{className:"h-full flex flex-col bg-background overflow-hidden",children:[e.jsx("div",{className:"px-4 py-3 border-b border-border/30 bg-background",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(cs,{className:"h-5 w-5 text-blue-500"}),e.jsx("span",{className:"font-medium text-foreground",children:"AI Assistant"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>k(!h),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"Chat",children:e.jsx(Er,{className:"h-4 w-4 text-muted-foreground"})}),e.jsx("button",{onClick:()=>v(!j),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"AI Agent",children:e.jsx(cs,{className:"h-4 w-4 text-muted-foreground"})})]})]})]})}),e.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:e.jsx("div",{className:"flex-1 overflow-y-auto bg-background min-h-0",children:e.jsxs("div",{className:"p-4 pb-8 space-y-6",children:[e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsxs("div",{className:"text-center max-w-md",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4",children:e.jsx(jt,{className:"h-8 w-8 text-blue-500"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Ask me anything"}),e.jsx("p",{className:"text-sm text-muted-foreground break-words leading-relaxed",children:"I can help you build applications, fix bugs, explain code, and much more."})]})}),e.jsx(Ze,{children:b.map((F,J)=>e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"w-full",children:e.jsxs("div",{className:`flex gap-4 ${F.type==="user"?"flex-row-reverse":"flex-row"}`,children:[e.jsx("div",{className:`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${F.type==="user"?"bg-blue-500 text-white":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`,children:F.type==="user"?e.jsx(As,{className:"h-4 w-4"}):e.jsx(cs,{className:"h-4 w-4"})}),e.jsxs("div",{className:`flex-1 max-w-[80%] ${F.type==="user"?"text-right":"text-left"}`,children:[e.jsx("div",{className:`inline-block px-4 py-3 rounded-xl text-sm leading-relaxed break-words ${F.type==="user"?"bg-blue-500 text-white rounded-br-md":"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"}`,children:F.isLoading?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(sr,{className:"h-4 w-4 animate-spin"}),e.jsx("span",{children:"Thinking..."})]}):e.jsx("div",{className:"whitespace-pre-wrap break-words overflow-wrap-anywhere",children:F.content})}),!F.isLoading&&F.type==="ai"&&e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("button",{onClick:()=>V(F.content),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Copy",children:e.jsx(at,{className:"h-3.5 w-3.5 text-muted-foreground"})}),e.jsx("button",{onClick:()=>ee(F.id,"like"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Like",children:e.jsx(ll,{className:"h-3.5 w-3.5 text-muted-foreground"})}),e.jsx("button",{onClick:()=>ee(F.id,"dislike"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Dislike",children:e.jsx(cl,{className:"h-3.5 w-3.5 text-muted-foreground"})})]})]})]})},F.id))}),e.jsx("div",{ref:m})]})})}),e.jsx("div",{className:"border-t border-border/30 bg-background flex-shrink-0",children:e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"project-name",className:"block text-sm font-medium text-foreground mb-2",children:"Project Name"}),e.jsx("input",{id:"project-name",type:"text",value:o,onChange:F=>l(F.target.value),placeholder:"Enter a name for your project",className:"w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{id:"ai-prompt-input","data-testid":"ai-prompt-input",ref:u,value:a,onChange:F=>i(F.target.value),onKeyPress:ue,onDragOver:xe,onDragLeave:ss,onDrop:ns,placeholder:"Plan, search, build anything",className:`w-full resize-y bg-background border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm leading-relaxed break-words overflow-wrap-anywhere focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors ${C?"border-blue-500 bg-blue-50/50 dark:bg-blue-900/10":"border-border"}`,style:{minHeight:"120px",maxHeight:"300px",wordWrap:"break-word",overflowWrap:"anywhere"},disabled:d,rows:4,"aria-label":"AI prompt input"}),C&&e.jsx("div",{className:"absolute inset-0 bg-blue-500/10 border-2 border-blue-500 border-dashed rounded-lg flex items-center justify-center pointer-events-none",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-blue-500 text-lg font-medium",children:"Drop files here"}),e.jsx("div",{className:"text-blue-500 text-xs",children:"Files will be attached to your prompt"})]})}),e.jsx("div",{className:"absolute bottom-1 right-1 w-4 h-4 opacity-30",children:e.jsx("div",{className:"w-full h-full flex items-end justify-end",children:e.jsx("div",{className:"w-2 h-2 bg-muted-foreground/40",style:{backgroundImage:"repeating-linear-gradient(45deg, transparent, transparent 1px, currentColor 1px, currentColor 2px)"}})})})]}),e.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:()=>{var J;const F=a.includes("@")?"":"@file ";i(a+F),(J=u.current)==null||J.focus()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Mention files or references",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"@"})}),e.jsx("button",{onClick:()=>{const F=document.createElement("input");F.type="file",F.multiple=!0,F.accept=".txt,.md,.js,.jsx,.ts,.tsx,.css,.html,.json,.py,.java,.cpp,.c",F.onchange=J=>{const ae=Array.from(J.target.files);ae.length>0&&L(ae)},F.click()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Attach files",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"📎"})}),e.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-foreground relative",children:[e.jsx("button",{onClick:()=>O(!E),className:"hover:text-blue-600 transition-colors",title:"Select AI Model",children:z(w)},`model-button-${w}-${P}`),e.jsx("span",{className:"text-muted-foreground",children:"tab"}),e.jsxs("button",{onClick:F=>{F.stopPropagation(),_(!D)},className:"text-muted-foreground ml-2 hover:text-blue-600 transition-colors",title:"Click to view context usage",children:[H.percentage,"% O"]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{id:"generate-button","data-testid":"generate-button",onClick:Te,disabled:!a.trim()||d,className:"w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shadow-sm",title:"Generate Code","aria-label":"Generate code from prompt",children:d?e.jsx(sr,{className:"h-4 w-4 text-white animate-spin"}):e.jsx(Ks,{className:"h-4 w-4 text-white rotate-90"})}),e.jsx("button",{onClick:()=>M(!N),className:`text-lg transition-colors hover:text-blue-600 ${T==="unlimited"?"text-blue-500":"text-muted-foreground"}`,title:`Context Mode: ${T==="unlimited"?"Unlimited":"Limited"}`,children:"∞"})]})]})]})}),D&&e.jsxs("div",{className:"absolute bottom-20 left-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-80",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Usage"}),e.jsx("button",{onClick:()=>_(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Tokens"}),e.jsxs("span",{className:"text-xs font-medium text-foreground",children:[H.tokens.toLocaleString()," / ",H.maxTokens.toLocaleString()]})]}),e.jsx("div",{className:"w-full bg-muted rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${H.percentage}%`}})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Usage"}),e.jsxs("span",{className:"text-xs font-medium text-foreground",children:[H.percentage,"%"]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Files"}),e.jsxs("span",{className:"text-xs font-medium text-foreground",children:[H.files," files"]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Characters"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:H.characters.toLocaleString()})]}),e.jsx("div",{className:"pt-2 border-t border-border",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Model"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:z(w)},`model-info-${w}-${P}`)]})})]})]}),N&&e.jsxs("div",{className:"absolute bottom-20 right-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-72",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Mode"}),e.jsx("button",{onClick:()=>M(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("button",{onClick:()=>{S("unlimited"),M(!1),X.success("Switched to Unlimited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${T==="unlimited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`text-xl ${T==="unlimited"?"text-blue-500":"text-muted-foreground"}`,children:"∞"}),e.jsxs("div",{className:"text-left",children:[e.jsx("div",{className:"font-medium text-sm",children:"Unlimited Context"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Access to entire codebase and conversation history"})]}),T==="unlimited"&&e.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),e.jsx("button",{onClick:()=>{S("limited"),M(!1),X.success("Switched to Limited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${T==="limited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`text-lg ${T==="limited"?"text-blue-500":"text-muted-foreground"}`,children:"⚡"}),e.jsxs("div",{className:"text-left",children:[e.jsx("div",{className:"font-medium text-sm",children:"Limited Context"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Faster responses with recent conversation only"})]}),T==="limited"&&e.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),e.jsxs("div",{className:"pt-3 border-t border-border",children:[e.jsx("div",{className:"text-xs text-muted-foreground mb-2",children:"Current Usage"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Mode"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:T==="unlimited"?"Unlimited":"Limited"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Context Window"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:T==="unlimited"?"∞ tokens":"4K tokens"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"Performance"}),e.jsx("span",{className:"text-xs font-medium text-foreground",children:T==="unlimited"?"Comprehensive":"Fast"})]})]})]})]})]}),E&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40",onClick:F=>{F.target===F.currentTarget&&O(!1)}}),e.jsxs("div",{className:"fixed bottom-16 left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl w-72 z-50",style:{height:"300px",display:"flex",flexDirection:"column"},onClick:F=>F.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-1.5 border-b border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-xs font-semibold text-gray-900 dark:text-white",children:"AI Model"}),e.jsx("button",{onClick:()=>O(!1),className:"p-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",children:e.jsx("svg",{className:"w-3 h-3 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"overflow-y-auto p-1 space-y-0.5",style:{flex:"1",minHeight:"0"},children:U().map(F=>e.jsx("button",{onClick:J=>{J.preventDefault(),J.stopPropagation(),g(F.id),I(ae=>ae+1),O(!1),X.success(`Switched to ${F.name}`)},className:`w-full p-2 rounded border transition-all duration-200 text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${w===F.id?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-gray-200 dark:border-gray-600"}`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:`rounded border-2 flex items-center justify-center transition-all duration-200 ${w===F.id?"border-blue-500 bg-blue-500":"border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"}`,style:{width:"12px",height:"12px",minWidth:"12px",minHeight:"12px"},children:w===F.id&&e.jsx("svg",{className:"text-white",fill:"currentColor",viewBox:"0 0 20 20",style:{width:"8px",height:"8px"},children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-medium text-xs text-gray-900 dark:text-white truncate",children:F.name}),e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 truncate",children:F.description})]})]}),e.jsx("div",{className:"text-xs px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 ml-1 flex-shrink-0",children:F.ram_required})]})},F.id))}),e.jsx("div",{className:"p-1 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",children:e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:"Auto selects best model"})})]})]})]})}var It={};class Oh{constructor(){this.app=null,this.db=null,this.storage=null,this.auth=null,this.user=null,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const t={apiKey:It.REACT_APP_FIREBASE_API_KEY||"your-api-key",authDomain:It.REACT_APP_FIREBASE_AUTH_DOMAIN||"your-project.firebaseapp.com",projectId:It.REACT_APP_FIREBASE_PROJECT_ID||"your-project-id",storageBucket:It.REACT_APP_FIREBASE_STORAGE_BUCKET||"your-project.appspot.com",messagingSenderId:It.REACT_APP_FIREBASE_MESSAGING_SENDER_ID||"123456789",appId:It.REACT_APP_FIREBASE_APP_ID||"your-app-id"};try{this.app=Ts(t)}catch(r){if(r.code==="app/duplicate-app")this.app=ks();else if(r.code==="app/no-options")try{this.app=ks()}catch{this.app=Ts({apiKey:"demo-key",authDomain:"demo.firebaseapp.com",projectId:"demo-project"})}else throw r}this.db=Pa(this.app),this.storage=ki(this.app),this.auth=Da(this.app),Ea(this.auth,r=>{this.user=r,console.log("Firebase auth state changed:",r?"authenticated":"not authenticated")});try{await Yo(this.auth),console.log("✅ Firebase anonymous auth successful")}catch(r){console.log("⚠️ Firebase auth not available, continuing without authentication:",r.message),this.user=null}this.isInitialized=!0,console.log("🔥 Firebase initialized successfully")}catch(t){console.error("❌ Failed to initialize Firebase:",t),this.isInitialized=!1,this.user=null,console.log("⚠️ Continuing without Firebase services")}}async storeProjectContext(t,r){var n;try{await this.initialize();const a=Y(this.db,"projectContexts",t);await pe(a,{...r,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",storedAt:new Date().toISOString(),dataSize:JSON.stringify(r).length}),console.log("✅ Project context stored successfully")}catch(a){throw console.error("❌ Failed to store project context:",a),a}}async loadProjectContext(t){try{await this.initialize();const r=Y(this.db,"projectContexts",t),n=await Qt(r);return n.exists()?(console.log("✅ Project context loaded successfully"),n.data()):(console.log("❌ Project context not found"),null)}catch(r){return console.error("❌ Failed to load project context:",r),null}}async storeProjectFiles(t,r){var n;try{await this.initialize();const a=Y(this.db,"projectFiles",t);await pe(a,{projectId:t,files:r,fileCount:Object.keys(r).length,totalSize:JSON.stringify(r).length,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",storedAt:new Date().toISOString()}),console.log("✅ Project files stored successfully")}catch(a){throw console.error("❌ Failed to store project files:",a),a}}async loadProjectFiles(t){try{await this.initialize();const r=Y(this.db,"projectFiles",t),n=await Qt(r);return n.exists()?(console.log("✅ Project files loaded successfully"),n.data().files):(console.log("❌ Project files not found"),null)}catch(r){return console.error("❌ Failed to load project files:",r),null}}async storeTemplate(t){var r;try{await this.initialize();const n=Y(this.db,"templates",t.id);await pe(n,{...t,userId:((r=this.user)==null?void 0:r.uid)||"anonymous",updatedAt:new Date().toISOString()}),console.log("✅ Template stored successfully")}catch(n){throw console.error("❌ Failed to store template:",n),n}}async loadTemplates(){try{await this.initialize();const t=De(this.db,"templates"),r=await Fe(t),n=[];return r.forEach(a=>{n.push(a.data())}),console.log("✅ Templates loaded successfully"),n}catch(t){return console.error("❌ Failed to load templates:",t),[]}}async searchTemplates(t,r,n){try{await this.initialize();const a=De(this.db,"templates");let i=Se(a);t&&t.length>0&&(i=Se(i,Ae("keywords","array-contains-any",t))),r&&r.length>0&&(i=Se(i,Ae("technologies","array-contains-any",r))),n&&n.length>0&&(i=Se(i,Ae("patterns","array-contains-any",n)));const o=await Fe(i),l=[];return o.forEach(d=>{l.push(d.data())}),console.log("✅ Templates searched successfully"),l}catch(a){return console.error("❌ Failed to search templates:",a),[]}}async storeLargeFile(t,r,n){try{await this.initialize();const a=pt(this.storage,`projects/${t}/${r}`),i=new Blob([n],{type:"text/plain"});await ut(a,i);const o=await mt(a);return console.log("✅ Large file stored successfully"),o}catch(a){throw console.error("❌ Failed to store large file:",a),a}}async loadLargeFile(t){try{const n=await(await fetch(t)).text();return console.log("✅ Large file loaded successfully"),n}catch(r){return console.error("❌ Failed to load large file:",r),null}}async getUserProjects(){var t;try{await this.initialize();const r=De(this.db,"projectContexts"),n=Se(r,Ae("userId","==",((t=this.user)==null?void 0:t.uid)||"anonymous")),a=await Fe(n),i=[];return a.forEach(o=>{i.push({id:o.id,...o.data()})}),console.log("✅ User projects loaded successfully"),i}catch(r){return console.error("❌ Failed to load user projects:",r),[]}}async deleteProject(t){try{await this.initialize();const r=Y(this.db,"projectContexts",t);await Ft(r);const n=Y(this.db,"projectFiles",t);await Ft(n),console.log("✅ Project deleted successfully")}catch(r){throw console.error("❌ Failed to delete project:",r),r}}async getStorageStats(){try{await this.initialize();const t=await this.getUserProjects();let r=0,n=0;for(const a of t)r+=a.dataSize||0,n+=a.fileCount||0;return{totalProjects:t.length,totalFiles:n,totalSize:r,totalSizeMB:Math.round(r/(1024*1024)*100)/100}}catch(t){return console.error("❌ Failed to get storage stats:",t),{totalProjects:0,totalFiles:0,totalSize:0,totalSizeMB:0}}}async storeConversationMemory(t,r){var n,a;try{await this.initialize();const i=JSON.stringify(r),o=8e5;if(i.length>o){console.log("⚠️ Conversation data too large, storing in chunks");const l=this.chunkData(r,o);for(let d=0;d<l.length;d++){const c=Y(this.db,"conversationMemory",`${t}_chunk_${d}`);await pe(c,{projectId:t,chunkIndex:d,totalChunks:l.length,conversation:l[d],userId:((n=this.user)==null?void 0:n.uid)||"anonymous",lastUpdated:new Date().toISOString()})}console.log(`🧠 Conversation memory stored in ${l.length} chunks`)}else{const l=Y(this.db,"conversationMemory",t);await pe(l,{projectId:t,conversation:r,userId:((a=this.user)==null?void 0:a.uid)||"anonymous",lastUpdated:new Date().toISOString(),memorySize:i.length}),console.log("🧠 Conversation memory stored successfully")}}catch(i){throw console.error("❌ Failed to store conversation memory:",i),i}}chunkData(t,r){const n=[],a=JSON.stringify(t);let i=0;for(;i<a.length;){let o=Math.min(i+r,a.length);if(o<a.length){let l=a.lastIndexOf("}",o),d=a.lastIndexOf("]",o),c=a.lastIndexOf(",",o);const u=Math.max(l,d,c);u>i+r*.8&&(o=u+1)}try{n.push(JSON.parse(a.slice(i,o)))}catch{n.push(a.slice(i,o))}i=o}return n}async loadConversationMemory(t){try{await this.initialize();const r=Y(this.db,"conversationMemory",t),n=await Qt(r);if(n.exists())return console.log("🧠 Conversation memory loaded successfully"),n.data().conversation;const a=De(this.db,"conversationMemory"),i=Se(a,Ae("projectId","==",t)),o=await Fe(i);if(!o.empty){const l=[];o.forEach(c=>{l.push({index:c.data().chunkIndex,data:c.data().conversation})}),l.sort((c,u)=>c.index-u.index);const d=l.map(c=>c.data);return console.log(`🧠 Conversation memory loaded from ${l.length} chunks`),d}return console.log("❌ Conversation memory not found"),null}catch(r){return console.error("❌ Failed to load conversation memory:",r),null}}async addPromptToMemory(t,r,n,a){try{await this.initialize();let i=await this.loadConversationMemory(t)||{projectId:t,prompts:[],responses:[],context:{},createdAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return i.prompts.push({id:`prompt-${Date.now()}`,text:r,timestamp:new Date().toISOString(),context:a}),i.responses.push({id:`response-${Date.now()}`,promptId:i.prompts[i.prompts.length-1].id,text:n,timestamp:new Date().toISOString(),context:a}),i.context={...i.context,...a},i.lastUpdated=new Date().toISOString(),await this.storeConversationMemory(t,i),console.log("🧠 Prompt added to memory successfully"),i}catch(i){throw console.error("❌ Failed to add prompt to memory:",i),i}}async getConversationHistory(t,r=50){try{await this.initialize();const n=await this.loadConversationMemory(t);if(!n)return[];const a=n.prompts.slice(-r),i=n.responses.slice(-r);return{prompts:a,responses:i,context:n.context,totalPrompts:n.prompts.length,totalResponses:n.responses.length}}catch(n){return console.error("❌ Failed to get conversation history:",n),[]}}async searchConversationMemory(t,r){try{await this.initialize();const n=await this.loadConversationMemory(t);if(!n)return[];const a=[],i=r.toLowerCase();return n.prompts.forEach(o=>{o.text.toLowerCase().includes(i)&&a.push({type:"prompt",id:o.id,text:o.text,timestamp:o.timestamp,context:o.context})}),n.responses.forEach(o=>{o.text.toLowerCase().includes(i)&&a.push({type:"response",id:o.id,text:o.text,timestamp:o.timestamp,context:o.context})}),console.log("🔍 Conversation memory searched successfully"),a}catch(n){return console.error("❌ Failed to search conversation memory:",n),[]}}async getConversationContext(t,r){try{await this.initialize();const n=await this.loadConversationMemory(t);if(!n)return null;const a={projectId:t,currentPrompt:r,previousPrompts:n.prompts.slice(-10),previousResponses:n.responses.slice(-10),projectContext:n.context,conversationSummary:this.generateConversationSummary(n),relevantHistory:this.findRelevantHistory(n,r)};return console.log("🧠 Conversation context generated successfully"),a}catch(n){return console.error("❌ Failed to get conversation context:",n),null}}generateConversationSummary(t){var i,o;const r=t.prompts,n=t.responses;return r.length===0?"No previous conversation":{totalPrompts:r.length,totalResponses:n.length,firstPrompt:((i=r[0])==null?void 0:i.text)||"",lastPrompt:((o=r[r.length-1])==null?void 0:o.text)||"",keyTopics:this.extractKeyTopics(r),projectEvolution:this.trackProjectEvolution(t)}}extractKeyTopics(t){const r=new Set;return t.forEach(n=>{n.text.toLowerCase().split(" ").forEach(i=>{i.length>4&&!this.isCommonWord(i)&&r.add(i)})}),Array.from(r).slice(0,10)}isCommonWord(t){return["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","two","way","who","boy","did","man","men","put","say","she","too","use"].includes(t)}trackProjectEvolution(t){const r=[],n=t.prompts,a=t.responses;for(let i=0;i<n.length;i++){const o=n[i],l=a[i];r.push({phase:i+1,prompt:o.text,response:l.text,timestamp:o.timestamp,context:o.context})}return r}findRelevantHistory(t,r){const n=[],a=r.toLowerCase().split(" ");return t.prompts.forEach((i,o)=>{var c;const l=i.text.toLowerCase().split(" "),d=a.filter(u=>l.includes(u));d.length>2&&n.push({prompt:i.text,response:((c=t.responses[o])==null?void 0:c.text)||"",relevance:d.length,timestamp:i.timestamp})}),n.sort((i,o)=>o.relevance-i.relevance).slice(0,5)}async storeAILearningPattern(t,r){var n;try{await this.initialize();const a=Y(this.db,"aiLearningPatterns",`${t}-${Date.now()}`);await pe(a,{projectId:t,pattern:r,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",createdAt:new Date().toISOString()}),console.log("🧠 AI learning pattern stored successfully")}catch(a){throw console.error("❌ Failed to store AI learning pattern:",a),a}}async getAILearningPatterns(t){try{await this.initialize();const r=De(this.db,"aiLearningPatterns"),n=Se(r,Ae("projectId","==",t)),a=await Fe(n),i=[];return a.forEach(o=>{i.push(o.data())}),console.log("🧠 AI learning patterns loaded successfully"),i}catch(r){return console.error("❌ Failed to load AI learning patterns:",r),[]}}async clearConversationMemory(t){try{await this.initialize();const r=Y(this.db,"conversationMemory",t);await Ft(r),console.log("🧠 Conversation memory cleared successfully")}catch(r){throw console.error("❌ Failed to clear conversation memory:",r),r}}}const Kt=new Oh,Lh=p.createContext();function Fh(){return p.useContext(Lh)}const Mh=({isOpen:s,onClose:t})=>{const{isCollaborationActive:r,activeUsers:n,cursors:a,comments:i,sharedProjects:o,isLoading:l,shareProject:d,getSharedProjects:c,toggleCollaboration:u}=Fh(),{user:m}=kt(),[b,y]=p.useState(""),[x,f]=p.useState("read"),[h,k]=p.useState("users");p.useEffect(()=>{s&&r&&c()},[s,r,c]);const j=async g=>{if(g.preventDefault(),!b.trim()){$.error("Please enter an email address");return}try{await d(b,x),$.success(`Project shared with ${b}`),y(""),c()}catch{$.error("Failed to share project")}},v=g=>{switch(g){case"admin":return"text-red-600 bg-red-100";case"write":return"text-blue-600 bg-blue-100";case"read":return"text-green-600 bg-green-100";default:return"text-gray-600 bg-gray-100"}},w=g=>{switch(g){case"admin":return e.jsx(Ma,{className:"h-4 w-4"});case"write":return e.jsx(Zs,{className:"h-4 w-4"});case"read":return e.jsx(_e,{className:"h-4 w-4"});default:return e.jsx(Qs,{className:"h-4 w-4"})}};return s?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(Ge,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Real-time team collaboration"})]})]}),e.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:e.jsx(Js,{className:"h-5 w-5 text-gray-600"})})]}),e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Real-time Collaboration"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Enable real-time editing, cursor tracking, and comments"})]}),e.jsx("button",{onClick:u,disabled:l,className:`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${r?"bg-green-100 text-green-700 hover:bg-green-200":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:r?e.jsxs(e.Fragment,{children:[e.jsx(_e,{className:"h-4 w-4"}),"Active"]}):e.jsxs(e.Fragment,{children:[e.jsx(dl,{className:"h-4 w-4"}),"Inactive"]})})]})}),e.jsx("div",{className:"flex border-b border-gray-200",children:[{id:"users",label:"Active Users",icon:Ge},{id:"comments",label:"Comments",icon:Er},{id:"sharing",label:"Sharing",icon:Pr}].map(g=>e.jsxs("button",{onClick:()=>k(g.id),className:`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${h===g.id?"text-blue-600 border-b-2 border-blue-600":"text-gray-600 hover:text-gray-900"}`,children:[e.jsx(g.icon,{className:"h-4 w-4"}),g.label]},g.id))}),e.jsxs("div",{className:"p-6 max-h-96 overflow-y-auto",children:[h==="users"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Active Users (",n.length,")"]}),n.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No active users"}):e.jsx("div",{className:"space-y-3",children:n.map((g,P)=>{var I;return e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:((I=g.userName)==null?void 0:I.charAt(0))||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"font-medium text-gray-900",children:g.userName}),e.jsx("p",{className:"text-sm text-gray-600",children:g.userEmail})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Online"})]})]},P)})}),a.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"text-md font-medium text-gray-900 mb-3",children:"Active Cursors"}),e.jsx("div",{className:"space-y-2",children:a.map((g,P)=>{var I;return e.jsxs("div",{className:"flex items-center gap-2 p-2 bg-blue-50 rounded",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-medium",children:((I=g.userName)==null?void 0:I.charAt(0))||"U"})}),e.jsx("span",{className:"text-sm text-gray-700",children:g.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:[g.fileId," - Line ",g.line]})]},P)})})]})]}),h==="comments"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Comments (",i.length,")"]}),i.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No comments yet"}):e.jsx("div",{className:"space-y-3",children:i.map((g,P)=>{var I;return e.jsx("div",{className:`p-4 rounded-lg border ${g.resolved?"bg-gray-50 border-gray-200":"bg-yellow-50 border-yellow-200"}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-medium",children:((I=g.userName)==null?void 0:I.charAt(0))||"U"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"font-medium text-gray-900",children:g.userName}),e.jsxs("span",{className:"text-xs text-gray-500",children:["Line ",g.lineNumber," in ",g.fileId]}),g.resolved&&e.jsx("span",{className:"text-xs bg-green-100 text-green-700 px-2 py-1 rounded",children:"Resolved"})]}),e.jsx("p",{className:"text-gray-700",children:g.content})]})]})},P)})})]}),h==="sharing"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Share Project"}),e.jsxs("form",{onSubmit:j,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),e.jsx("input",{type:"email",value:b,onChange:g=>y(g.target.value),placeholder:"user@example.com",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Permissions"}),e.jsxs("select",{value:x,onChange:g=>f(g.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[e.jsx("option",{value:"read",children:"Read Only"}),e.jsx("option",{value:"write",children:"Read & Write"}),e.jsx("option",{value:"admin",children:"Admin"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors",children:"Share Project"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Shared Projects"}),o.length===0?e.jsx("p",{className:"text-gray-500 text-center py-8",children:"No shared projects"}):e.jsx("div",{className:"space-y-3",children:o.map((g,P)=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center",children:e.jsx(ul,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:g.sharedWith}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Project ID: ",g.projectId]})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{className:`px-2 py-1 rounded text-xs font-medium ${v(g.permissions)}`,children:[w(g.permissions),g.permissions]})})]},P))})]})]})]})]})}):null},oo=p.createContext({dragDropManager:void 0});function Ne(s){return"Minified Redux error #"+s+"; visit https://redux.js.org/Errors?code="+s+" for the full message or use the non-minified dev environment for full errors. "}var ga=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),fa=function(){return Math.random().toString(36).substring(7).split("").join(".")},xa={INIT:"@@redux/INIT"+fa(),REPLACE:"@@redux/REPLACE"+fa()};function $h(s){if(typeof s!="object"||s===null)return!1;for(var t=s;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(s)===t}function lo(s,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(Ne(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(Ne(1));return r(lo)(s,t)}if(typeof s!="function")throw new Error(Ne(2));var a=s,i=t,o=[],l=o,d=!1;function c(){l===o&&(l=o.slice())}function u(){if(d)throw new Error(Ne(3));return i}function m(f){if(typeof f!="function")throw new Error(Ne(4));if(d)throw new Error(Ne(5));var h=!0;return c(),l.push(f),function(){if(h){if(d)throw new Error(Ne(6));h=!1,c();var j=l.indexOf(f);l.splice(j,1),o=null}}}function b(f){if(!$h(f))throw new Error(Ne(7));if(typeof f.type>"u")throw new Error(Ne(8));if(d)throw new Error(Ne(9));try{d=!0,i=a(i,f)}finally{d=!1}for(var h=o=l,k=0;k<h.length;k++){var j=h[k];j()}return f}function y(f){if(typeof f!="function")throw new Error(Ne(10));a=f,b({type:xa.REPLACE})}function x(){var f,h=m;return f={subscribe:function(j){if(typeof j!="object"||j===null)throw new Error(Ne(11));function v(){j.next&&j.next(u())}v();var w=h(v);return{unsubscribe:w}}},f[ga]=function(){return this},f}return b({type:xa.INIT}),n={dispatch:b,subscribe:m,getState:u,replaceReducer:y},n[ga]=x,n}function q(s,t,...r){if(Bh()&&t===void 0)throw new Error("invariant requires an error message argument");if(!s){let n;if(t===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let a=0;n=new Error(t.replace(/%s/g,function(){return r[a++]})),n.name="Invariant Violation"}throw n.framesToPop=1,n}}function Bh(){return typeof process<"u"&&!0}function _h(s,t,r){return t.split(".").reduce((n,a)=>n&&n[a]?n[a]:r||null,s)}function Uh(s,t){return s.filter(r=>r!==t)}function co(s){return typeof s=="object"}function Hh(s,t){const r=new Map,n=i=>{r.set(i,r.has(i)?r.get(i)+1:1)};s.forEach(n),t.forEach(n);const a=[];return r.forEach((i,o)=>{i===1&&a.push(o)}),a}function zh(s,t){return s.filter(r=>t.indexOf(r)>-1)}const xn="dnd-core/INIT_COORDS",Qr="dnd-core/BEGIN_DRAG",bn="dnd-core/PUBLISH_DRAG_SOURCE",Zr="dnd-core/HOVER",es="dnd-core/DROP",ts="dnd-core/END_DRAG";function ba(s,t){return{type:xn,payload:{sourceClientOffset:t||null,clientOffset:s||null}}}const Gh={type:xn,payload:{clientOffset:null,sourceClientOffset:null}};function Wh(s){return function(r=[],n={publishSource:!0}){const{publishSource:a=!0,clientOffset:i,getSourceClientOffset:o}=n,l=s.getMonitor(),d=s.getRegistry();s.dispatch(ba(i)),qh(r,l,d);const c=Yh(r,l);if(c==null){s.dispatch(Gh);return}let u=null;if(i){if(!o)throw new Error("getSourceClientOffset must be defined");Vh(o),u=o(c)}s.dispatch(ba(i,u));const b=d.getSource(c).beginDrag(l,c);if(b==null)return;Jh(b),d.pinSource(c);const y=d.getSourceType(c);return{type:Qr,payload:{itemType:y,item:b,sourceId:c,clientOffset:i||null,sourceClientOffset:u||null,isSourcePublic:!!a}}}}function qh(s,t,r){q(!t.isDragging(),"Cannot call beginDrag while dragging."),s.forEach(function(n){q(r.getSource(n),"Expected sourceIds to be registered.")})}function Vh(s){q(typeof s=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function Jh(s){q(co(s),"Item must be an object.")}function Yh(s,t){let r=null;for(let n=s.length-1;n>=0;n--)if(t.canDragSource(s[n])){r=s[n];break}return r}function Kh(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Xh(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){Kh(s,a,r[a])})}return s}function Qh(s){return function(r={}){const n=s.getMonitor(),a=s.getRegistry();Zh(n),rg(n).forEach((o,l)=>{const d=eg(o,l,a,n),c={type:es,payload:{dropResult:Xh({},r,d)}};s.dispatch(c)})}}function Zh(s){q(s.isDragging(),"Cannot call drop while not dragging."),q(!s.didDrop(),"Cannot call drop twice during one drag operation.")}function eg(s,t,r,n){const a=r.getTarget(s);let i=a?a.drop(n,s):void 0;return tg(i),typeof i>"u"&&(i=t===0?{}:n.getDropResult()),i}function tg(s){q(typeof s>"u"||co(s),"Drop result must either be an object or undefined.")}function rg(s){const t=s.getTargetIds().filter(s.canDropOnTarget,s);return t.reverse(),t}function sg(s){return function(){const r=s.getMonitor(),n=s.getRegistry();ng(r);const a=r.getSourceId();return a!=null&&(n.getSource(a,!0).endDrag(r,a),n.unpinSource()),{type:ts}}}function ng(s){q(s.isDragging(),"Cannot call endDrag while not dragging.")}function Hs(s,t){return t===null?s===null:Array.isArray(s)?s.some(r=>r===t):s===t}function ag(s){return function(r,{clientOffset:n}={}){ig(r);const a=r.slice(0),i=s.getMonitor(),o=s.getRegistry(),l=i.getItemType();return lg(a,o,l),og(a,i,o),cg(a,i,o),{type:Zr,payload:{targetIds:a,clientOffset:n||null}}}}function ig(s){q(Array.isArray(s),"Expected targetIds to be an array.")}function og(s,t,r){q(t.isDragging(),"Cannot call hover while not dragging."),q(!t.didDrop(),"Cannot call hover after drop.");for(let n=0;n<s.length;n++){const a=s[n];q(s.lastIndexOf(a)===n,"Expected targetIds to be unique in the passed array.");const i=r.getTarget(a);q(i,"Expected targetIds to be registered.")}}function lg(s,t,r){for(let n=s.length-1;n>=0;n--){const a=s[n],i=t.getTargetType(a);Hs(i,r)||s.splice(n,1)}}function cg(s,t,r){s.forEach(function(n){r.getTarget(n).hover(t,n)})}function dg(s){return function(){if(s.getMonitor().isDragging())return{type:bn}}}function ug(s){return{beginDrag:Wh(s),publishDragSource:dg(s),hover:ag(s),drop:Qh(s),endDrag:sg(s)}}class mg{receiveBackend(t){this.backend=t}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const t=this,{dispatch:r}=this.store;function n(i){return(...o)=>{const l=i.apply(t,o);typeof l<"u"&&r(l)}}const a=ug(this);return Object.keys(a).reduce((i,o)=>{const l=a[o];return i[o]=n(l),i},{})}dispatch(t){this.store.dispatch(t)}constructor(t,r){this.isSetUp=!1,this.handleRefCountChange=()=>{const n=this.store.getState().refCount>0;this.backend&&(n&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!n&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=t,this.monitor=r,t.subscribe(this.handleRefCountChange)}}function pg(s,t){return{x:s.x+t.x,y:s.y+t.y}}function uo(s,t){return{x:s.x-t.x,y:s.y-t.y}}function hg(s){const{clientOffset:t,initialClientOffset:r,initialSourceClientOffset:n}=s;return!t||!r||!n?null:uo(pg(t,n),r)}function gg(s){const{clientOffset:t,initialClientOffset:r}=s;return!t||!r?null:uo(t,r)}const rr=[],yn=[];rr.__IS_NONE__=!0;yn.__IS_ALL__=!0;function fg(s,t){return s===rr?!1:s===yn||typeof t>"u"?!0:zh(t,s).length>0}class xg{subscribeToStateChange(t,r={}){const{handlerIds:n}=r;q(typeof t=="function","listener must be a function."),q(typeof n>"u"||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let a=this.store.getState().stateId;const i=()=>{const o=this.store.getState(),l=o.stateId;try{l===a||l===a+1&&!fg(o.dirtyHandlerIds,n)||t()}finally{a=l}};return this.store.subscribe(i)}subscribeToOffsetChange(t){q(typeof t=="function","listener must be a function.");let r=this.store.getState().dragOffset;const n=()=>{const a=this.store.getState().dragOffset;a!==r&&(r=a,t())};return this.store.subscribe(n)}canDragSource(t){if(!t)return!1;const r=this.registry.getSource(t);return q(r,`Expected to find a valid source. sourceId=${t}`),this.isDragging()?!1:r.canDrag(this,t)}canDropOnTarget(t){if(!t)return!1;const r=this.registry.getTarget(t);if(q(r,`Expected to find a valid target. targetId=${t}`),!this.isDragging()||this.didDrop())return!1;const n=this.registry.getTargetType(t),a=this.getItemType();return Hs(n,a)&&r.canDrop(this,t)}isDragging(){return!!this.getItemType()}isDraggingSource(t){if(!t)return!1;const r=this.registry.getSource(t,!0);if(q(r,`Expected to find a valid source. sourceId=${t}`),!this.isDragging()||!this.isSourcePublic())return!1;const n=this.registry.getSourceType(t),a=this.getItemType();return n!==a?!1:r.isDragging(this,t)}isOverTarget(t,r={shallow:!1}){if(!t)return!1;const{shallow:n}=r;if(!this.isDragging())return!1;const a=this.registry.getTargetType(t),i=this.getItemType();if(i&&!Hs(a,i))return!1;const o=this.getTargetIds();if(!o.length)return!1;const l=o.indexOf(t);return n?l===o.length-1:l>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return hg(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return gg(this.store.getState().dragOffset)}constructor(t,r){this.store=t,this.registry=r}}const ya=typeof global<"u"?global:self,mo=ya.MutationObserver||ya.WebKitMutationObserver;function po(s){return function(){const r=setTimeout(a,0),n=setInterval(a,50);function a(){clearTimeout(r),clearInterval(n),s()}}}function bg(s){let t=1;const r=new mo(s),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){t=-t,n.data=t}}const yg=typeof mo=="function"?bg:po;class vg{enqueueTask(t){const{queue:r,requestFlush:n}=this;r.length||(n(),this.flushing=!0),r[r.length]=t}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:t}=this;for(;this.index<t.length;){const r=this.index;if(this.index++,t[r].call(),this.index>this.capacity){for(let n=0,a=t.length-this.index;n<a;n++)t[n]=t[n+this.index];t.length-=this.index,this.index=0}}t.length=0,this.index=0,this.flushing=!1},this.registerPendingError=t=>{this.pendingErrors.push(t),this.requestErrorThrow()},this.requestFlush=yg(this.flush),this.requestErrorThrow=po(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class wg{call(){try{this.task&&this.task()}catch(t){this.onError(t)}finally{this.task=null,this.release(this)}}constructor(t,r){this.onError=t,this.release=r,this.task=null}}class jg{create(t){const r=this.freeTasks,n=r.length?r.pop():new wg(this.onError,a=>r[r.length]=a);return n.task=t,n}constructor(t){this.onError=t,this.freeTasks=[]}}const ho=new vg,Ng=new jg(ho.registerPendingError);function Sg(s){ho.enqueueTask(Ng.create(s))}const vn="dnd-core/ADD_SOURCE",wn="dnd-core/ADD_TARGET",jn="dnd-core/REMOVE_SOURCE",rs="dnd-core/REMOVE_TARGET";function Cg(s){return{type:vn,payload:{sourceId:s}}}function kg(s){return{type:wn,payload:{targetId:s}}}function Tg(s){return{type:jn,payload:{sourceId:s}}}function Ag(s){return{type:rs,payload:{targetId:s}}}function Dg(s){q(typeof s.canDrag=="function","Expected canDrag to be a function."),q(typeof s.beginDrag=="function","Expected beginDrag to be a function."),q(typeof s.endDrag=="function","Expected endDrag to be a function.")}function Pg(s){q(typeof s.canDrop=="function","Expected canDrop to be a function."),q(typeof s.hover=="function","Expected hover to be a function."),q(typeof s.drop=="function","Expected beginDrag to be a function.")}function zs(s,t){if(t&&Array.isArray(s)){s.forEach(r=>zs(r,!1));return}q(typeof s=="string"||typeof s=="symbol",t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var Ce;(function(s){s.SOURCE="SOURCE",s.TARGET="TARGET"})(Ce||(Ce={}));let Eg=0;function Ig(){return Eg++}function Rg(s){const t=Ig().toString();switch(s){case Ce.SOURCE:return`S${t}`;case Ce.TARGET:return`T${t}`;default:throw new Error(`Unknown Handler Role: ${s}`)}}function va(s){switch(s[0]){case"S":return Ce.SOURCE;case"T":return Ce.TARGET;default:throw new Error(`Cannot parse handler ID: ${s}`)}}function wa(s,t){const r=s.entries();let n=!1;do{const{done:a,value:[,i]}=r.next();if(i===t)return!0;n=!!a}while(!n);return!1}class Og{addSource(t,r){zs(t),Dg(r);const n=this.addHandler(Ce.SOURCE,t,r);return this.store.dispatch(Cg(n)),n}addTarget(t,r){zs(t,!0),Pg(r);const n=this.addHandler(Ce.TARGET,t,r);return this.store.dispatch(kg(n)),n}containsHandler(t){return wa(this.dragSources,t)||wa(this.dropTargets,t)}getSource(t,r=!1){return q(this.isSourceId(t),"Expected a valid source ID."),r&&t===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(t)}getTarget(t){return q(this.isTargetId(t),"Expected a valid target ID."),this.dropTargets.get(t)}getSourceType(t){return q(this.isSourceId(t),"Expected a valid source ID."),this.types.get(t)}getTargetType(t){return q(this.isTargetId(t),"Expected a valid target ID."),this.types.get(t)}isSourceId(t){return va(t)===Ce.SOURCE}isTargetId(t){return va(t)===Ce.TARGET}removeSource(t){q(this.getSource(t),"Expected an existing source."),this.store.dispatch(Tg(t)),Sg(()=>{this.dragSources.delete(t),this.types.delete(t)})}removeTarget(t){q(this.getTarget(t),"Expected an existing target."),this.store.dispatch(Ag(t)),this.dropTargets.delete(t),this.types.delete(t)}pinSource(t){const r=this.getSource(t);q(r,"Expected an existing source."),this.pinnedSourceId=t,this.pinnedSource=r}unpinSource(){q(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(t,r,n){const a=Rg(t);return this.types.set(a,r),t===Ce.SOURCE?this.dragSources.set(a,n):t===Ce.TARGET&&this.dropTargets.set(a,n),a}constructor(t){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=t}}const Lg=(s,t)=>s===t;function Fg(s,t){return!s&&!t?!0:!s||!t?!1:s.x===t.x&&s.y===t.y}function Mg(s,t,r=Lg){if(s.length!==t.length)return!1;for(let n=0;n<s.length;++n)if(!r(s[n],t[n]))return!1;return!0}function $g(s=rr,t){switch(t.type){case Zr:break;case vn:case wn:case rs:case jn:return rr;case Qr:case bn:case ts:case es:default:return yn}const{targetIds:r=[],prevTargetIds:n=[]}=t.payload,a=Hh(r,n);if(!(a.length>0||!Mg(r,n)))return rr;const o=n[n.length-1],l=r[r.length-1];return o!==l&&(o&&a.push(o),l&&a.push(l)),a}function Bg(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function _g(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){Bg(s,a,r[a])})}return s}const ja={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function Ug(s=ja,t){const{payload:r}=t;switch(t.type){case xn:case Qr:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case Zr:return Fg(s.clientOffset,r.clientOffset)?s:_g({},s,{clientOffset:r.clientOffset});case ts:case es:return ja;default:return s}}function Hg(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Rt(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){Hg(s,a,r[a])})}return s}const zg={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function Gg(s=zg,t){const{payload:r}=t;switch(t.type){case Qr:return Rt({},s,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case bn:return Rt({},s,{isSourcePublic:!0});case Zr:return Rt({},s,{targetIds:r.targetIds});case rs:return s.targetIds.indexOf(r.targetId)===-1?s:Rt({},s,{targetIds:Uh(s.targetIds,r.targetId)});case es:return Rt({},s,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case ts:return Rt({},s,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return s}}function Wg(s=0,t){switch(t.type){case vn:case wn:return s+1;case jn:case rs:return s-1;default:return s}}function qg(s=0){return s+1}function Vg(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Jg(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){Vg(s,a,r[a])})}return s}function Yg(s={},t){return{dirtyHandlerIds:$g(s.dirtyHandlerIds,{type:t.type,payload:Jg({},t.payload,{prevTargetIds:_h(s,"dragOperation.targetIds",[])})}),dragOffset:Ug(s.dragOffset,t),refCount:Wg(s.refCount,t),dragOperation:Gg(s.dragOperation,t),stateId:qg(s.stateId)}}function Kg(s,t=void 0,r={},n=!1){const a=Xg(n),i=new xg(a,new Og(a)),o=new mg(a,i),l=s(o,t,r);return o.receiveBackend(l),o}function Xg(s){const t=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return lo(Yg,s&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}function Qg(s,t){if(s==null)return{};var r=Zg(s,t),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(s,n)&&(r[n]=s[n])}return r}function Zg(s,t){if(s==null)return{};var r={},n=Object.keys(s),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=s[a]);return r}let Na=0;const Dr=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var ef=p.memo(function(t){var{children:r}=t,n=Qg(t,["children"]);const[a,i]=tf(n);return p.useEffect(()=>{if(i){const o=go();return++Na,()=>{--Na===0&&(o[Dr]=null)}}},[]),e.jsx(oo.Provider,{value:a,children:r})});function tf(s){if("manager"in s)return[{dragDropManager:s.manager},!1];const t=rf(s.backend,s.context,s.options,s.debugMode),r=!s.context;return[t,r]}function rf(s,t=go(),r,n){const a=t;return a[Dr]||(a[Dr]={dragDropManager:Kg(s,t,r,n)}),a[Dr]}function go(){return typeof global<"u"?global:window}var sf=function s(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,a,i;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(a=n;a--!==0;)if(!s(t[a],r[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(r).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,i[a]))return!1;for(a=n;a--!==0;){var o=i[a];if(!s(t[o],r[o]))return!1}return!0}return t!==t&&r!==r};const nf=Mo(sf),Ct=typeof window<"u"?p.useLayoutEffect:p.useEffect;function af(s,t,r){const[n,a]=p.useState(()=>t(s)),i=p.useCallback(()=>{const o=t(s);nf(n,o)||(a(o),r&&r())},[n,s,r]);return Ct(i),[n,i]}function of(s,t,r){const[n,a]=af(s,t,r);return Ct(function(){const o=s.getHandlerId();if(o!=null)return s.subscribeToStateChange(a,{handlerIds:[o]})},[s,a]),n}function fo(s,t,r){return of(t,s||(()=>({})),()=>r.reconnect())}function xo(s,t){const r=[];return typeof s!="function"&&r.push(s),p.useMemo(()=>typeof s=="function"?s():s,r)}function lf(s){return p.useMemo(()=>s.hooks.dragSource(),[s])}function cf(s){return p.useMemo(()=>s.hooks.dragPreview(),[s])}let vs=!1,ws=!1;class df{receiveHandlerId(t){this.sourceId=t}getHandlerId(){return this.sourceId}canDrag(){q(!vs,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return vs=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{vs=!1}}isDragging(){if(!this.sourceId)return!1;q(!ws,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return ws=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{ws=!1}}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}isDraggingSource(t){return this.internalMonitor.isDraggingSource(t)}isOverTarget(t,r){return this.internalMonitor.isOverTarget(t,r)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(t){return this.internalMonitor.subscribeToOffsetChange(t)}canDragSource(t){return this.internalMonitor.canDragSource(t)}canDropOnTarget(t){return this.internalMonitor.canDropOnTarget(t)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.sourceId=null,this.internalMonitor=t.getMonitor()}}let js=!1;class uf{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}canDrop(){if(!this.targetId)return!1;q(!js,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return js=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{js=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function mf(s,t,r){const n=r.getRegistry(),a=n.addTarget(s,t);return[a,()=>n.removeTarget(a)]}function pf(s,t,r){const n=r.getRegistry(),a=n.addSource(s,t);return[a,()=>n.removeSource(a)]}function Gs(s,t,r,n){let a;if(a!==void 0)return!!a;if(s===t)return!0;if(typeof s!="object"||!s||typeof t!="object"||!t)return!1;const i=Object.keys(s),o=Object.keys(t);if(i.length!==o.length)return!1;const l=Object.prototype.hasOwnProperty.bind(t);for(let d=0;d<i.length;d++){const c=i[d];if(!l(c))return!1;const u=s[c],m=t[c];if(a=void 0,a===!1||a===void 0&&u!==m)return!1}return!0}function Ws(s){return s!==null&&typeof s=="object"&&Object.prototype.hasOwnProperty.call(s,"current")}function hf(s){if(typeof s.type=="string")return;const t=s.type.displayName||s.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function gf(s){return(t=null,r=null)=>{if(!p.isValidElement(t)){const i=t;return s(i,r),i}const n=t;return hf(n),ff(n,r?i=>s(i,r):s)}}function bo(s){const t={};return Object.keys(s).forEach(r=>{const n=s[r];if(r.endsWith("Ref"))t[r]=s[r];else{const a=gf(n);t[r]=()=>a}}),t}function Sa(s,t){typeof s=="function"?s(t):s.current=t}function ff(s,t){const r=s.ref;return q(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?p.cloneElement(s,{ref:n=>{Sa(r,n),Sa(t,n)}}):p.cloneElement(s,{ref:t})}class xf{receiveHandlerId(t){this.handlerId!==t&&(this.handlerId=t,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(t){this.dragSourceOptionsInternal=t}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(t){this.dragPreviewOptionsInternal=t}reconnect(){const t=this.reconnectDragSource();this.reconnectDragPreview(t)}reconnectDragSource(){const t=this.dragSource,r=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return r&&this.disconnectDragSource(),this.handlerId?t?(r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=t,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,t,this.dragSourceOptions)),r):(this.lastConnectedDragSource=t,r):r}reconnectDragPreview(t=!1){const r=this.dragPreview,n=t||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!!this.handlerId){if(!r){this.lastConnectedDragPreview=r;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=r,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,r,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!Gs(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!Gs(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(t){this.hooks=bo({dragSource:(r,n)=>{this.clearDragSource(),this.dragSourceOptions=n||null,Ws(r)?this.dragSourceRef=r:this.dragSourceNode=r,this.reconnectDragSource()},dragPreview:(r,n)=>{this.clearDragPreview(),this.dragPreviewOptions=n||null,Ws(r)?this.dragPreviewRef=r:this.dragPreviewNode=r,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}}class bf{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Gs(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=bo({dropTarget:(r,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,Ws(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function qt(){const{dragDropManager:s}=p.useContext(oo);return q(s!=null,"Expected drag drop context"),s}function yf(s,t){const r=qt(),n=p.useMemo(()=>new xf(r.getBackend()),[r]);return Ct(()=>(n.dragSourceOptions=s||null,n.reconnect(),()=>n.disconnectDragSource()),[n,s]),Ct(()=>(n.dragPreviewOptions=t||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,t]),n}function vf(){const s=qt();return p.useMemo(()=>new df(s),[s])}class wf{beginDrag(){const t=this.spec,r=this.monitor;let n=null;return typeof t.item=="object"?n=t.item:typeof t.item=="function"?n=t.item(r):n={},n??null}canDrag(){const t=this.spec,r=this.monitor;return typeof t.canDrag=="boolean"?t.canDrag:typeof t.canDrag=="function"?t.canDrag(r):!0}isDragging(t,r){const n=this.spec,a=this.monitor,{isDragging:i}=n;return i?i(a):r===t.getSourceId()}endDrag(){const t=this.spec,r=this.monitor,n=this.connector,{end:a}=t;a&&a(r.getItem(),r),n.reconnect()}constructor(t,r,n){this.spec=t,this.monitor=r,this.connector=n}}function jf(s,t,r){const n=p.useMemo(()=>new wf(s,t,r),[t,r]);return p.useEffect(()=>{n.spec=s},[s]),n}function Nf(s){return p.useMemo(()=>{const t=s.type;return q(t!=null,"spec.type must be defined"),t},[s])}function Sf(s,t,r){const n=qt(),a=jf(s,t,r),i=Nf(s);Ct(function(){if(i!=null){const[l,d]=pf(i,a,n);return t.receiveHandlerId(l),r.receiveHandlerId(l),d}},[n,t,r,a,i])}function Cf(s,t){const r=xo(s);q(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const n=vf(),a=yf(r.options,r.previewOptions);return Sf(r,n,a),[fo(r.collect,n,a),lf(a),cf(a)]}function kf(s){return p.useMemo(()=>s.hooks.dropTarget(),[s])}function Tf(s){const t=qt(),r=p.useMemo(()=>new bf(t.getBackend()),[t]);return Ct(()=>(r.dropTargetOptions=s||null,r.reconnect(),()=>r.disconnectDropTarget()),[s]),r}function Af(){const s=qt();return p.useMemo(()=>new uf(s),[s])}function Df(s){const{accept:t}=s;return p.useMemo(()=>(q(s.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class Pf{canDrop(){const t=this.spec,r=this.monitor;return t.canDrop?t.canDrop(r.getItem(),r):!0}hover(){const t=this.spec,r=this.monitor;t.hover&&t.hover(r.getItem(),r)}drop(){const t=this.spec,r=this.monitor;if(t.drop)return t.drop(r.getItem(),r)}constructor(t,r){this.spec=t,this.monitor=r}}function Ef(s,t){const r=p.useMemo(()=>new Pf(s,t),[t]);return p.useEffect(()=>{r.spec=s},[s]),r}function If(s,t,r){const n=qt(),a=Ef(s,t),i=Df(s);Ct(function(){const[l,d]=mf(i,a,n);return t.receiveHandlerId(l),r.receiveHandlerId(l),d},[n,t,a,r,i.map(o=>o.toString()).join("|")])}function Rf(s,t){const r=xo(s),n=Af(),a=Tf(r.options);return If(r,n,a),[fo(r.collect,n,a),kf(a)]}function yo(s){let t=null;return()=>(t==null&&(t=s()),t)}function Of(s,t){return s.filter(r=>r!==t)}function Lf(s,t){const r=new Set,n=i=>r.add(i);s.forEach(n),t.forEach(n);const a=[];return r.forEach(i=>a.push(i)),a}class Ff{enter(t){const r=this.entered.length,n=a=>this.isNodeInDocument(a)&&(!a.contains||a.contains(t));return this.entered=Lf(this.entered.filter(n),[t]),r===0&&this.entered.length>0}leave(t){const r=this.entered.length;return this.entered=Of(this.entered.filter(this.isNodeInDocument),t),r>0&&this.entered.length===0}reset(){this.entered=[]}constructor(t){this.entered=[],this.isNodeInDocument=t}}class Mf{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(t=>{Object.defineProperty(this.item,t,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`),null}})})}loadDataTransfer(t){if(t){const r={};Object.keys(this.config.exposeProperties).forEach(n=>{const a=this.config.exposeProperties[n];a!=null&&(r[n]={value:a(t,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,r)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(t,r){return r===t.getSourceId()}endDrag(){}constructor(t){this.config=t,this.item={},this.initializeExposedProperties()}}const vo="__NATIVE_FILE__",wo="__NATIVE_URL__",jo="__NATIVE_TEXT__",No="__NATIVE_HTML__",Ca=Object.freeze(Object.defineProperty({__proto__:null,FILE:vo,HTML:No,TEXT:jo,URL:wo},Symbol.toStringTag,{value:"Module"}));function Ns(s,t,r){const n=t.reduce((a,i)=>a||s.getData(i),"");return n??r}const qs={[vo]:{exposeProperties:{files:s=>Array.prototype.slice.call(s.files),items:s=>s.items,dataTransfer:s=>s},matchesTypes:["Files"]},[No]:{exposeProperties:{html:(s,t)=>Ns(s,t,""),dataTransfer:s=>s},matchesTypes:["Html","text/html"]},[wo]:{exposeProperties:{urls:(s,t)=>Ns(s,t,"").split(`
`),dataTransfer:s=>s},matchesTypes:["Url","text/uri-list"]},[jo]:{exposeProperties:{text:(s,t)=>Ns(s,t,""),dataTransfer:s=>s},matchesTypes:["Text","text/plain"]}};function $f(s,t){const r=qs[s];if(!r)throw new Error(`native type ${s} has no configuration`);const n=new Mf(r);return n.loadDataTransfer(t),n}function Ss(s){if(!s)return null;const t=Array.prototype.slice.call(s.types||[]);return Object.keys(qs).filter(r=>{const n=qs[r];return n!=null&&n.matchesTypes?n.matchesTypes.some(a=>t.indexOf(a)>-1):!1})[0]||null}const Bf=yo(()=>/firefox/i.test(navigator.userAgent)),So=yo(()=>!!window.safari);class ka{interpolate(t){const{xs:r,ys:n,c1s:a,c2s:i,c3s:o}=this;let l=r.length-1;if(t===r[l])return n[l];let d=0,c=o.length-1,u;for(;d<=c;){u=Math.floor(.5*(d+c));const y=r[u];if(y<t)d=u+1;else if(y>t)c=u-1;else return n[u]}l=Math.max(0,c);const m=t-r[l],b=m*m;return n[l]+a[l]*m+i[l]*b+o[l]*m*b}constructor(t,r){const{length:n}=t,a=[];for(let y=0;y<n;y++)a.push(y);a.sort((y,x)=>t[y]<t[x]?-1:1);const i=[],o=[];let l,d;for(let y=0;y<n-1;y++)l=t[y+1]-t[y],d=r[y+1]-r[y],i.push(l),o.push(d/l);const c=[o[0]];for(let y=0;y<i.length-1;y++){const x=o[y],f=o[y+1];if(x*f<=0)c.push(0);else{l=i[y];const h=i[y+1],k=l+h;c.push(3*k/((k+h)/x+(k+l)/f))}}c.push(o[o.length-1]);const u=[],m=[];let b;for(let y=0;y<c.length-1;y++){b=o[y];const x=c[y],f=1/i[y],h=x+c[y+1]-b-b;u.push((b-x-h)*f),m.push(h*f*f)}this.xs=t,this.ys=r,this.c1s=c,this.c2s=u,this.c3s=m}}const _f=1;function Co(s){const t=s.nodeType===_f?s:s.parentElement;if(!t)return null;const{top:r,left:n}=t.getBoundingClientRect();return{x:n,y:r}}function wr(s){return{x:s.clientX,y:s.clientY}}function Uf(s){var t;return s.nodeName==="IMG"&&(Bf()||!(!((t=document.documentElement)===null||t===void 0)&&t.contains(s)))}function Hf(s,t,r,n){let a=s?t.width:r,i=s?t.height:n;return So()&&s&&(i/=window.devicePixelRatio,a/=window.devicePixelRatio),{dragPreviewWidth:a,dragPreviewHeight:i}}function zf(s,t,r,n,a){const i=Uf(t),l=Co(i?s:t),d={x:r.x-l.x,y:r.y-l.y},{offsetWidth:c,offsetHeight:u}=s,{anchorX:m,anchorY:b}=n,{dragPreviewWidth:y,dragPreviewHeight:x}=Hf(i,t,c,u),f=()=>{let P=new ka([0,.5,1],[d.y,d.y/u*x,d.y+x-u]).interpolate(b);return So()&&i&&(P+=(window.devicePixelRatio-1)*x),P},h=()=>new ka([0,.5,1],[d.x,d.x/c*y,d.x+y-c]).interpolate(m),{offsetX:k,offsetY:j}=a,v=k===0||k,w=j===0||j;return{x:v?k:h(),y:w?j:f()}}class Gf{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var t;return!((t=this.globalContext)===null||t===void 0)&&t.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var t;return((t=this.optionsArgs)===null||t===void 0?void 0:t.rootElement)||this.window}constructor(t,r){this.ownerDocument=null,this.globalContext=t,this.optionsArgs=r}}function Wf(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function Ta(s){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){Wf(s,a,r[a])})}return s}class qf{profile(){var t,r;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((t=this.dragStartSourceIds)===null||t===void 0?void 0:t.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((r=this.dragOverTargetIds)===null||r===void 0?void 0:r.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const t=this.rootElement;if(t!==void 0){if(t.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");t.__isReactDndBackendSetUp=!0,this.addEventListeners(t)}}teardown(){const t=this.rootElement;if(t!==void 0&&(t.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var r;(r=this.window)===null||r===void 0||r.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(t,r,n){return this.sourcePreviewNodeOptions.set(t,n),this.sourcePreviewNodes.set(t,r),()=>{this.sourcePreviewNodes.delete(t),this.sourcePreviewNodeOptions.delete(t)}}connectDragSource(t,r,n){this.sourceNodes.set(t,r),this.sourceNodeOptions.set(t,n);const a=o=>this.handleDragStart(o,t),i=o=>this.handleSelectStart(o);return r.setAttribute("draggable","true"),r.addEventListener("dragstart",a),r.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(t),this.sourceNodeOptions.delete(t),r.removeEventListener("dragstart",a),r.removeEventListener("selectstart",i),r.setAttribute("draggable","false")}}connectDropTarget(t,r){const n=o=>this.handleDragEnter(o,t),a=o=>this.handleDragOver(o,t),i=o=>this.handleDrop(o,t);return r.addEventListener("dragenter",n),r.addEventListener("dragover",a),r.addEventListener("drop",i),()=>{r.removeEventListener("dragenter",n),r.removeEventListener("dragover",a),r.removeEventListener("drop",i)}}addEventListeners(t){t.addEventListener&&(t.addEventListener("dragstart",this.handleTopDragStart),t.addEventListener("dragstart",this.handleTopDragStartCapture,!0),t.addEventListener("dragend",this.handleTopDragEndCapture,!0),t.addEventListener("dragenter",this.handleTopDragEnter),t.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.addEventListener("dragover",this.handleTopDragOver),t.addEventListener("dragover",this.handleTopDragOverCapture,!0),t.addEventListener("drop",this.handleTopDrop),t.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(t){t.removeEventListener&&(t.removeEventListener("dragstart",this.handleTopDragStart),t.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),t.removeEventListener("dragend",this.handleTopDragEndCapture,!0),t.removeEventListener("dragenter",this.handleTopDragEnter),t.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.removeEventListener("dragover",this.handleTopDragOver),t.removeEventListener("dragover",this.handleTopDragOverCapture,!0),t.removeEventListener("drop",this.handleTopDrop),t.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourceNodeOptions.get(t);return Ta({dropEffect:this.altKeyPressed?"copy":"move"},r||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourcePreviewNodeOptions.get(t);return Ta({anchorX:.5,anchorY:.5,captureDraggingState:!1},r||{})}isDraggingNativeItem(){const t=this.monitor.getItemType();return Object.keys(Ca).some(r=>Ca[r]===t)}beginDragNativeItem(t,r){this.clearCurrentDragSourceNode(),this.currentNativeSource=$f(t,r),this.currentNativeHandle=this.registry.addSource(t,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(t){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=t;const r=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var n;return(n=this.rootElement)===null||n===void 0?void 0:n.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},r)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var t;(t=this.window)===null||t===void 0||t.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(t,r){t.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(r))}handleDragEnter(t,r){this.dragEnterTargetIds.unshift(r)}handleDragOver(t,r){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(r)}handleDrop(t,r){this.dropTargetIds.unshift(r)}constructor(t,r,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=a=>{const i=this.sourceNodes.get(a);return i&&Co(i)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=a=>!!(a&&this.document&&this.document.body&&this.document.body.contains(a)),this.endDragIfSourceWasRemovedFromDOM=()=>{const a=this.currentDragSourceNode;a==null||this.isNodeInDocument(a)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=a=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(a||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=a=>{if(a.defaultPrevented)return;const{dragStartSourceIds:i}=this;this.dragStartSourceIds=null;const o=wr(a);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(i||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:o});const{dataTransfer:l}=a,d=Ss(l);if(this.monitor.isDragging()){if(l&&typeof l.setDragImage=="function"){const u=this.monitor.getSourceId(),m=this.sourceNodes.get(u),b=this.sourcePreviewNodes.get(u)||m;if(b){const{anchorX:y,anchorY:x,offsetX:f,offsetY:h}=this.getCurrentSourcePreviewNodeOptions(),v=zf(m,b,o,{anchorX:y,anchorY:x},{offsetX:f,offsetY:h});l.setDragImage(b,v.x,v.y)}}try{l==null||l.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(a.target);const{captureDraggingState:c}=this.getCurrentSourcePreviewNodeOptions();c?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(d)this.beginDragNativeItem(d);else{if(l&&!l.types&&(a.target&&!a.target.hasAttribute||!a.target.hasAttribute("draggable")))return;a.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=a=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(a.dataTransfer)}if(!this.enterLeaveCounter.enter(a.target)||this.monitor.isDragging())return;const{dataTransfer:l}=a,d=Ss(l);d&&this.beginDragNativeItem(d,l)},this.handleTopDragEnter=a=>{const{dragEnterTargetIds:i}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=a.altKey,i.length>0&&this.actions.hover(i,{clientOffset:wr(a)}),i.some(l=>this.monitor.canDropOnTarget(l))&&(a.preventDefault(),a.dataTransfer&&(a.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=a=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(a.dataTransfer)}},this.handleTopDragOver=a=>{const{dragOverTargetIds:i}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){a.preventDefault(),a.dataTransfer&&(a.dataTransfer.dropEffect="none");return}this.altKeyPressed=a.altKey,this.lastClientOffset=wr(a),this.scheduleHover(i),(i||[]).some(l=>this.monitor.canDropOnTarget(l))?(a.preventDefault(),a.dataTransfer&&(a.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?a.preventDefault():(a.preventDefault(),a.dataTransfer&&(a.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=a=>{this.isDraggingNativeItem()&&a.preventDefault(),this.enterLeaveCounter.leave(a.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=a=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var i;a.preventDefault(),(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(a.dataTransfer)}else Ss(a.dataTransfer)&&a.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=a=>{const{dropTargetIds:i}=this;this.dropTargetIds=[],this.actions.hover(i,{clientOffset:wr(a)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=a=>{const i=a.target;typeof i.dragDrop=="function"&&(i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable||(a.preventDefault(),i.dragDrop()))},this.options=new Gf(r,n),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.enterLeaveCounter=new Ff(this.isNodeInDocument)}}const Vf=function(t,r,n){return new qf(t,r,n)},Jf=({projectId:s,onCodeChange:t,initialComponents:r=[]})=>{var E,O,D,_,C,B;const[n,a]=p.useState(r),[i,o]=p.useState(null),[l,d]=p.useState(!1),[c,u]=p.useState(!1),[m,b]=p.useState({width:1200,height:800}),[y,x]=p.useState(1),f=p.useRef(null),h=[{type:"container",name:"Container",icon:"📦",category:"Layout"},{type:"text",name:"Text",icon:"📝",category:"Content"},{type:"button",name:"Button",icon:"🔘",category:"Interactive"},{type:"input",name:"Input",icon:"📝",category:"Form"},{type:"image",name:"Image",icon:"🖼️",category:"Media"},{type:"card",name:"Card",icon:"🃏",category:"Layout"},{type:"header",name:"Header",icon:"📋",category:"Layout"},{type:"footer",name:"Footer",icon:"🦶",category:"Layout"},{type:"sidebar",name:"Sidebar",icon:"📑",category:"Layout"},{type:"navbar",name:"Navbar",icon:"🧭",category:"Navigation"},{type:"form",name:"Form",icon:"📋",category:"Form"},{type:"table",name:"Table",icon:"📊",category:"Data"},{type:"chart",name:"Chart",icon:"📈",category:"Data"},{type:"modal",name:"Modal",icon:"🪟",category:"Overlay"},{type:"dropdown",name:"Dropdown",icon:"📋",category:"Interactive"}],k=T=>({container:`<div className="container" style={${JSON.stringify(T.styles)}}>
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
import './App.css';`,N=`const App = () => {
  return (
    <div className="app">
      ${n.map(M=>k(M)).join(`

`)}
    </div>
  );
};

export default App;`;return`${T}

${N}`},v=(T,S)=>{const N=S.getDropResult();if(!N)return;const M={id:`component-${Date.now()}`,type:T.type,name:T.name,position:{x:N.x,y:N.y},size:{width:200,height:100},styles:{position:"absolute",left:`${N.x}px`,top:`${N.y}px`,width:"200px",height:"100px",border:"1px solid #ddd",padding:"10px",backgroundColor:"#fff"},content:T.name,properties:{}};a(H=>[...H,M])},w=T=>{o(T),d(!0)},g=(T,S)=>{if(!i)return;const N={...i,[T]:S,styles:{...i.styles,[T]:S}};a(M=>M.map(H=>H.id===i.id?N:H)),o(N)},P=()=>`
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
`,I=()=>{const T={components:n,appCode:j(),cssCode:P(),metadata:{projectId:s,exportedAt:new Date().toISOString(),componentCount:n.length}},S=JSON.stringify(T,null,2),N=new Blob([S],{type:"application/json"}),M=URL.createObjectURL(N),H=document.createElement("a");H.href=M,H.download=`dreambuild-project-${s}.json`,H.click(),URL.revokeObjectURL(M)};return p.useEffect(()=>{t&&t({appCode:j(),cssCode:P(),components:n})},[n,t]),e.jsx(ef,{backend:Vf,children:e.jsxs("div",{className:"visual-editor",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("h2",{children:"🎨 Visual Editor"}),e.jsxs("div",{className:"editor-controls",children:[e.jsx("button",{className:"btn btn-secondary",onClick:()=>u(!c),children:c?"Edit":"Preview"}),e.jsx("button",{className:"btn btn-primary",onClick:I,children:"Export"})]})]}),e.jsxs("div",{className:"editor-layout",children:[e.jsxs("div",{className:"component-library",children:[e.jsx("h3",{children:"📚 Component Library"}),e.jsx("div",{className:"library-categories",children:["Layout","Content","Interactive","Form","Media","Data","Navigation","Overlay"].map(T=>e.jsxs("div",{className:"category",children:[e.jsx("h4",{children:T}),e.jsx("div",{className:"category-components",children:h.filter(S=>S.category===T).map(S=>e.jsx(Yf,{type:S.type,name:S.name,icon:S.icon},S.type))})]},T))})]}),e.jsxs("div",{className:"canvas-container",children:[e.jsxs("div",{className:"canvas-toolbar",children:[e.jsxs("div",{className:"canvas-controls",children:[e.jsx("button",{className:"btn btn-sm",onClick:()=>x(y*.8),children:"Zoom Out"}),e.jsxs("span",{className:"zoom-level",children:[Math.round(y*100),"%"]}),e.jsx("button",{className:"btn btn-sm",onClick:()=>x(y*1.2),children:"Zoom In"})]}),e.jsx("div",{className:"canvas-size",children:e.jsxs("select",{value:`${m.width}x${m.height}`,onChange:T=>{const[S,N]=T.target.value.split("x").map(Number);b({width:S,height:N})},children:[e.jsx("option",{value:"1200x800",children:"Desktop (1200x800)"}),e.jsx("option",{value:"768x1024",children:"Tablet (768x1024)"}),e.jsx("option",{value:"375x667",children:"Mobile (375x667)"})]})})]}),e.jsx("div",{className:"canvas",ref:f,style:{width:m.width*y,height:m.height*y,transform:`scale(${y})`,transformOrigin:"top left"},children:e.jsx(Kf,{onDrop:v,children:n.map(T=>e.jsx(Xf,{component:T,onSelect:w,isSelected:(i==null?void 0:i.id)===T.id},T.id))})})]}),l&&i&&e.jsxs("div",{className:"properties-panel",children:[e.jsx("h3",{children:"⚙️ Properties"}),e.jsxs("div",{className:"property-groups",children:[e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Content"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Text Content"}),e.jsx("input",{type:"text",value:i.content||"",onChange:T=>g("content",T.target.value)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Position"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"X Position"}),e.jsx("input",{type:"number",value:((E=i.position)==null?void 0:E.x)||0,onChange:T=>g("left",`${T.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Y Position"}),e.jsx("input",{type:"number",value:((O=i.position)==null?void 0:O.y)||0,onChange:T=>g("top",`${T.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Size"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Width"}),e.jsx("input",{type:"number",value:((D=i.size)==null?void 0:D.width)||200,onChange:T=>g("width",`${T.target.value}px`)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Height"}),e.jsx("input",{type:"number",value:((_=i.size)==null?void 0:_.height)||100,onChange:T=>g("height",`${T.target.value}px`)})]})]}),e.jsxs("div",{className:"property-group",children:[e.jsx("h4",{children:"Style"}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Background Color"}),e.jsx("input",{type:"color",value:((C=i.styles)==null?void 0:C.backgroundColor)||"#ffffff",onChange:T=>g("backgroundColor",T.target.value)})]}),e.jsxs("div",{className:"property",children:[e.jsx("label",{children:"Border Color"}),e.jsx("input",{type:"color",value:((B=i.styles)==null?void 0:B.borderColor)||"#dddddd",onChange:T=>g("borderColor",T.target.value)})]})]})]})]})]}),e.jsx("style",{jsx:!0,children:`
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
        `})]})})},Yf=({type:s,name:t,icon:r})=>{const[{isDragging:n},a]=Cf({type:"component",item:{type:s,name:t},collect:i=>({isDragging:i.isDragging()})});return e.jsxs("div",{ref:a,className:`draggable-component ${n?"dragging":""}`,children:[e.jsx("span",{className:"component-icon",children:r}),e.jsx("span",{className:"component-name",children:t})]})},Kf=({children:s,onDrop:t})=>{const[{isOver:r},n]=Rf({accept:"component",drop:(a,i)=>{var d;const o=i.getClientOffset(),l=(d=i.getDropResult())==null?void 0:d.getBoundingClientRect();o&&l&&t(a,{x:o.x-l.left,y:o.y-l.top})},collect:a=>({isOver:a.isOver()})});return e.jsx("div",{ref:n,className:`droppable-canvas ${r?"drag-over":""}`,children:s})},Xf=({component:s,onSelect:t,isSelected:r})=>{const n=a=>{a.stopPropagation(),t(s)};return e.jsx("div",{className:`visual-component ${r?"selected":""}`,style:s.styles,onClick:n,children:e.jsxs("div",{className:"component-content",children:[s.type==="text"&&(s.content||"Text"),s.type==="button"&&(s.content||"Button"),s.type==="input"&&e.jsx("input",{placeholder:s.placeholder||"Input"}),s.type==="image"&&e.jsx("div",{className:"image-placeholder",children:"🖼️ Image"}),s.type==="card"&&e.jsxs("div",{children:[e.jsx("h3",{children:s.title||"Card Title"}),e.jsx("p",{children:s.content||"Card content"})]}),!["text","button","input","image","card"].includes(s.type)&&e.jsx("div",{className:"component-placeholder",children:s.name})]})})},Qf=({projectId:s,projectData:t,onDeploy:r})=>{const[n,a]=p.useState("vercel"),[i,o]=p.useState(!1),[l,d]=p.useState(null),c=[{id:"vercel",name:"Vercel",icon:"▲",description:"Fast, global deployment"},{id:"netlify",name:"Netlify",icon:"🌐",description:"JAMstack deployment"},{id:"aws",name:"AWS Amplify",icon:"☁️",description:"Full-stack deployment"},{id:"firebase",name:"Firebase",icon:"🔥",description:"Google hosting"},{id:"github",name:"GitHub Pages",icon:"🐙",description:"Free static hosting"}],u=async()=>{o(!0),d("Deploying...");try{await new Promise(b=>setTimeout(b,3e3));const m={success:!0,provider:n,url:`https://${s}.${n}.com`,deployedAt:new Date().toISOString()};d("Deployed successfully!"),r&&r(m)}catch{d("Deployment failed")}finally{o(!1)}};return e.jsxs("div",{className:"deployment-panel",children:[e.jsx("h3",{children:"🚀 Deploy Your App"}),e.jsxs("div",{className:"provider-selection",children:[e.jsx("h4",{children:"Choose Hosting Provider"}),e.jsx("div",{className:"providers-grid",children:c.map(m=>e.jsxs("div",{className:`provider-card ${n===m.id?"selected":""}`,onClick:()=>a(m.id),children:[e.jsx("div",{className:"provider-icon",children:m.icon}),e.jsx("div",{className:"provider-name",children:m.name}),e.jsx("div",{className:"provider-description",children:m.description})]},m.id))})]}),e.jsx("div",{className:"deployment-actions",children:e.jsx("button",{className:"btn btn-primary btn-lg",onClick:u,disabled:i,children:i?"Deploying...":"Deploy Now"})}),l&&e.jsx("div",{className:"deployment-status",children:e.jsx("div",{className:`status-message ${l.includes("success")?"success":"error"}`,children:l})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},Zf=({projectId:s,onMemoryUpdate:t})=>{const[r,n]=p.useState(null),[a,i]=p.useState([]),[o,l]=p.useState(""),[d,c]=p.useState([]),[u,m]=p.useState(!1),[b,y]=p.useState(null);p.useEffect(()=>{s&&(x(),f())},[s]);const x=async()=>{try{m(!0);const v=await Kt.loadConversationMemory(s);if(n(v),v){const w=await Kt.getConversationHistory(s);i(w)}}catch(v){console.error("Failed to load memory:",v)}finally{m(!1)}},f=async()=>{try{const v=await Kt.getStorageStats();y(v)}catch(v){console.error("Failed to load stats:",v)}},h=async()=>{if(o.trim())try{m(!0);const v=await Kt.searchConversationMemory(s,o);c(v)}catch(v){console.error("Failed to search memory:",v)}finally{m(!1)}},k=async()=>{if(window.confirm("Are you sure you want to clear all conversation memory?"))try{await Kt.clearConversationMemory(s),n(null),i([]),c([]),t&&t()}catch(v){console.error("Failed to clear memory:",v)}},j=()=>{if(!r)return;const v=JSON.stringify(r,null,2),w=new Blob([v],{type:"application/json"}),g=URL.createObjectURL(w),P=document.createElement("a");P.href=g,P.download=`dreambuild-memory-${s}.json`,P.click(),URL.revokeObjectURL(g)};return u?e.jsx("div",{className:"memory-manager",children:e.jsx("div",{className:"loading",children:"Loading memory..."})}):e.jsxs("div",{className:"memory-manager",children:[e.jsxs("div",{className:"memory-header",children:[e.jsx("h3",{children:"🧠 Conversation Memory"}),e.jsxs("div",{className:"memory-actions",children:[e.jsx("button",{onClick:x,className:"btn btn-secondary",children:"Refresh"}),e.jsx("button",{onClick:j,className:"btn btn-secondary",children:"Export"}),e.jsx("button",{onClick:k,className:"btn btn-danger",children:"Clear"})]})]}),b&&e.jsxs("div",{className:"memory-stats",children:[e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Projects:"}),e.jsx("span",{className:"stat-value",children:b.totalProjects})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Files:"}),e.jsx("span",{className:"stat-value",children:b.totalFiles})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"stat-label",children:"Size:"}),e.jsxs("span",{className:"stat-value",children:[b.totalSizeMB," MB"]})]})]}),e.jsxs("div",{className:"memory-search",children:[e.jsx("input",{type:"text",placeholder:"Search conversation memory...",value:o,onChange:v=>l(v.target.value),onKeyPress:v=>v.key==="Enter"&&h()}),e.jsx("button",{onClick:h,className:"btn btn-primary",children:"Search"})]}),d.length>0&&e.jsxs("div",{className:"search-results",children:[e.jsx("h4",{children:"Search Results"}),d.map((v,w)=>e.jsxs("div",{className:"search-result",children:[e.jsx("div",{className:"result-type",children:v.type}),e.jsx("div",{className:"result-text",children:v.text}),e.jsx("div",{className:"result-timestamp",children:v.timestamp})]},w))]}),a.prompts&&a.prompts.length>0&&e.jsxs("div",{className:"conversation-history",children:[e.jsx("h4",{children:"Conversation History"}),e.jsxs("div",{className:"history-stats",children:[e.jsxs("span",{children:["Prompts: ",a.totalPrompts]}),e.jsxs("span",{children:["Responses: ",a.totalResponses]})]}),e.jsx("div",{className:"history-list",children:a.prompts.map((v,w)=>e.jsxs("div",{className:"history-item",children:[e.jsxs("div",{className:"history-prompt",children:[e.jsx("strong",{children:"Prompt:"})," ",v.text]}),a.responses[w]&&e.jsxs("div",{className:"history-response",children:[e.jsx("strong",{children:"Response:"})," ",a.responses[w].text]}),e.jsx("div",{className:"history-timestamp",children:new Date(v.timestamp).toLocaleString()})]},v.id))})]}),r&&e.jsxs("div",{className:"memory-details",children:[e.jsx("h4",{children:"Memory Details"}),e.jsxs("div",{className:"memory-info",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Project ID:"})," ",r.projectId]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Created:"})," ",new Date(r.createdAt).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Last Updated:"})," ",new Date(r.lastUpdated).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Memory Size:"})," ",JSON.stringify(r).length," bytes"]})]})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},ex=({projectId:s,initialFiles:t={}})=>{const[r,n]=p.useState("code"),[a,i]=p.useState(t),[o,l]=p.useState(null),[d,c]=p.useState(!1),[u,m]=p.useState(!1),[b,y]=p.useState(null),x=[{id:"code",name:"Code Editor",icon:"💻"},{id:"visual",name:"Visual Editor",icon:"🎨"},{id:"collaboration",name:"Collaboration",icon:"🤝"},{id:"deployment",name:"Deployment",icon:"🚀"},{id:"memory",name:"Memory",icon:"🧠"}],f=(w,g)=>{i(P=>({...P,[w]:g}))},h=w=>{w.appCode&&f("src/App.jsx",w.appCode),w.cssCode&&f("src/App.css",w.cssCode)},k=w=>{y(w),console.log("Deployment result:",w)},j=w=>{i(g=>({...g,...w})),console.log("Version restored:",w)},v=()=>{switch(r){case"code":return e.jsxs("div",{className:"code-editor-tab",children:[e.jsxs("div",{className:"file-explorer",children:[e.jsx("h3",{children:"📁 Files"}),e.jsx("div",{className:"file-list",children:Object.keys(a).map(w=>e.jsxs("div",{className:`file-item ${o===w?"selected":""}`,onClick:()=>l(w),children:[e.jsx("span",{className:"file-icon",children:"📄"}),e.jsx("span",{className:"file-name",children:w})]},w))})]}),e.jsx("div",{className:"code-editor",children:o&&e.jsxs("div",{className:"editor-container",children:[e.jsxs("div",{className:"editor-header",children:[e.jsx("span",{className:"file-name",children:o}),e.jsxs("div",{className:"editor-actions",children:[e.jsx("button",{className:"btn btn-sm",children:"Save"}),e.jsx("button",{className:"btn btn-sm",children:"Format"})]})]}),e.jsx("textarea",{className:"code-textarea",value:a[o]||"",onChange:w=>f(o,w.target.value),placeholder:"Start coding..."})]})})]});case"visual":return e.jsx("div",{className:"visual-editor-tab",children:e.jsx(Jf,{projectId:s,onCodeChange:h,initialComponents:[]})});case"collaboration":return e.jsxs("div",{className:"collaboration-tab",children:[e.jsxs("div",{className:"collaboration-header",children:[e.jsx("h3",{children:"🤝 Real-time Collaboration"}),e.jsxs("button",{className:`btn ${d?"btn-danger":"btn-primary"}`,onClick:()=>c(!d),children:[d?"Disable":"Enable"," Collaboration"]})]}),d?e.jsx(Mh,{projectId:s,fileId:o,onFileChange:f,onVersionRestore:j}):e.jsxs("div",{className:"collaboration-disabled",children:[e.jsx("p",{children:"Enable collaboration to work with team members in real-time"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Multi-user co-editing"}),e.jsx("li",{children:"Real-time comments"}),e.jsx("li",{children:"Version history"}),e.jsx("li",{children:"User presence"})]})]})]});case"deployment":return e.jsxs("div",{className:"deployment-tab",children:[e.jsx(Qf,{projectId:s,projectData:{files:a},onDeploy:k}),b&&e.jsxs("div",{className:"deployment-result",children:[e.jsx("h4",{children:"Deployment Result"}),e.jsxs("div",{className:"result-details",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Provider:"})," ",b.provider]}),e.jsxs("p",{children:[e.jsx("strong",{children:"URL:"})," ",e.jsx("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",children:b.url})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",b.status]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deployed:"})," ",new Date(b.deployedAt).toLocaleString()]})]})]})]});case"memory":return e.jsx("div",{className:"memory-tab",children:e.jsx(Zf,{projectId:s,onMemoryUpdate:()=>console.log("Memory updated")})});default:return e.jsx("div",{children:"Select a tab to get started"})}};return e.jsxs("div",{className:"integrated-workspace",children:[e.jsxs("div",{className:"workspace-header",children:[e.jsx("h2",{children:"🚀 DreamBuild Advanced Workspace"}),e.jsxs("div",{className:"workspace-status",children:[e.jsx("span",{className:"status-indicator",children:"●"}),e.jsxs("span",{children:["Project: ",s]})]})]}),e.jsx("div",{className:"workspace-tabs",children:x.map(w=>e.jsxs("button",{className:`tab-button ${r===w.id?"active":""}`,onClick:()=>n(w.id),children:[e.jsx("span",{className:"tab-icon",children:w.icon}),e.jsx("span",{className:"tab-name",children:w.name})]},w.id))}),e.jsx("div",{className:"workspace-content",children:v()}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},tx=({onTemplateSelect:s,isVisible:t,onClose:r})=>{var I;const{currentProject:n,updateFile:a,switchFile:i}=Ye(),[o,l]=p.useState(""),[d,c]=p.useState("all"),[u,m]=p.useState(!1),b=[{id:"all",name:"All Templates",icon:jt,color:"text-purple-500"},{id:"web-apps",name:"Web Apps",icon:ke,color:"text-blue-500"},{id:"mobile-apps",name:"Mobile Apps",icon:$r,color:"text-green-500"},{id:"games",name:"Games",icon:ml,color:"text-orange-500"},{id:"tools",name:"Tools",icon:Q,color:"text-gray-500"}],[y,x]=p.useState([]),[f,h]=p.useState([]),[k,j]=p.useState(!0);p.useEffect(()=>{t&&(async()=>{try{j(!0);const[O,D]=await Promise.all([tr.getAllTemplates(),tr.getPopularTemplates()]);x(O),h(D)}catch(O){console.error("Failed to load templates:",O),X.error("Failed to load templates")}finally{j(!1)}})()},[t]);const v=y.filter(E=>{const O=E.name.toLowerCase().includes(o.toLowerCase())||E.description.toLowerCase().includes(o.toLowerCase()),D=d==="all"||E.category===d;return O&&D}),w=async E=>{m(!0);try{console.log("🎯 Generating template:",E.id);const O=await tr.generateTemplateById(E.id);Object.entries(O).forEach(([_,C])=>{a(_,C)});const D=Object.keys(O)[0];D&&i(D),X.success(`Generated ${E.name} successfully!`),s&&s(E,O),r&&r()}catch(O){console.error("❌ Template generation failed:",O),X.error(`Failed to generate ${E.name}`)}finally{m(!1)}},g=E=>{const O=b.find(D=>D.id===E);return O?O.icon:Q},P=E=>{const O=b.find(D=>D.id===E);return O?O.color:"text-gray-500"};return t?e.jsx(Ze,{children:e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",onClick:r,children:e.jsxs(R.div,{initial:{scale:.95},animate:{scale:1},exit:{scale:.95},className:"bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:E=>E.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:e.jsx(ye,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-foreground",children:"Template Gallery"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Choose a template to get started"})]})]}),e.jsx("button",{onClick:r,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Close",children:e.jsx("span",{className:"text-xl text-muted-foreground",children:"×"})})]}),e.jsxs("div",{className:"p-6 border-b border-border",children:[e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx(qe,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search templates...",value:o,onChange:E=>l(E.target.value),className:"w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20"})]}),e.jsxs("button",{className:"px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:bg-muted/80 transition-colors flex items-center gap-2",children:[e.jsx(Br,{className:"h-4 w-4"}),"Filters"]})]}),e.jsx("div",{className:"flex gap-2 overflow-x-auto",children:b.map(E=>{const O=E.icon;return e.jsxs("button",{onClick:()=>c(E.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${d===E.id?"bg-blue-500 text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[e.jsx(O,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:E.name})]},E.id)})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[d==="all"&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(Ie,{className:"h-5 w-5 text-yellow-500"}),e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Popular Templates"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:k?Array.from({length:3}).map((E,O)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},O)):f.map(E=>{const O=g(E.category),D=P(E.category);return e.jsxs(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>w(E),disabled:u,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${D}`,children:e.jsx(O,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:E.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[E.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:E.description})]},E.id)})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:d==="all"?"All Templates":(I=b.find(E=>E.id===d))==null?void 0:I.name}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:[v.length," template",v.length!==1?"s":""]})]}),v.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4",children:e.jsx(qe,{className:"h-8 w-8 text-muted-foreground"})}),e.jsx("h4",{className:"text-lg font-medium text-foreground mb-2",children:"No templates found"}),e.jsx("p",{className:"text-muted-foreground",children:"Try adjusting your search or filters"})]}):k?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Array.from({length:6}).map((E,O)=>e.jsxs("div",{className:"bg-card border border-border rounded-lg p-4 animate-pulse",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-lg"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-muted rounded mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-1/2"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-muted rounded"}),e.jsx("div",{className:"h-3 bg-muted rounded w-3/4"})]})]},O))}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:v.map(E=>{const O=g(E.category),D=P(E.category);return e.jsxs(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>w(E),disabled:u,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${D}`,children:e.jsx(O,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:E.name}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[E.files.length," files"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:E.description})]},E.id)})})]})]}),e.jsx("div",{className:"p-6 border-t border-border bg-muted/30",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"Need something custom? Use the AI prompt to generate unique applications."}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"Close"})]})})]})})}):null},rx=()=>{const[s,t]=p.useState([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"Terminal is fully functional and ready to use",timestamp:new Date},{type:"output",content:"",timestamp:new Date}]),[r,n]=p.useState(""),[a,i]=p.useState(!1),[o,l]=p.useState("~/dreambuild"),d=p.useRef(null),c=p.useRef(null);p.useEffect(()=>{d.current&&(d.current.scrollTop=d.current.scrollHeight)},[s]),p.useEffect(()=>{c.current&&c.current.focus()},[]);const u=async h=>{if(!h.trim())return;const k={type:"input",content:`$ ${h}`,timestamp:new Date};t(j=>[...j,k]),i(!0);try{await new Promise(g=>setTimeout(g,500));let j="";const v=h.trim().toLowerCase();switch(v){case"help":j=`Available commands:
  help          - Show this help message
  clear         - Clear terminal screen
  ls            - List directory contents
  pwd           - Print working directory
  cd <dir>      - Change directory
  mkdir <dir>   - Create directory
  touch <file>  - Create file
  cat <file>    - Display file contents
  echo <text>   - Display text
  npm <cmd>     - Run npm commands
  git <cmd>     - Run git commands
  build         - Build the project
  deploy        - Deploy the project
  status        - Show project status`;break;case"clear":t([]),i(!1);return;case"ls":j=`total 8
drwxr-xr-x  3 user  staff   96 Dec 15 10:30 .
drwxr-xr-x  5 user  staff  160 Dec 15 10:25 ..
-rw-r--r--  1 user  staff  245 Dec 15 10:30 package.json
-rw-r--r--  1 user  staff  156 Dec 15 10:30 README.md
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 src
drwxr-xr-x  2 user  staff   64 Dec 15 10:30 dist`;break;case"pwd":j=o;break;case"status":j=`Project Status:
  Name: DreamBuild AI Platform
  Version: 1.0.0
  Status: Running
  Port: 3000
  Environment: Development
  Last Build: 2 minutes ago
  Files: 15 modified`;break;case"build":j=`Building project...
  ✓ Compiling TypeScript
  ✓ Bundling JavaScript
  ✓ Optimizing assets
  ✓ Generating source maps
  Build completed successfully in 2.3s`;break;case"deploy":j=`Deploying to Firebase...
  ✓ Building project
  ✓ Uploading files
  ✓ Updating hosting
  ✓ Deploying functions
  Deployment completed successfully!
  URL: https://dreambuild-2024-app.web.app`;break;default:if(v.startsWith("cd ")){const g=v.substring(3);g===".."?(l(P=>P.split("/").slice(0,-1).join("/")||"~"),j=`Changed directory to ${o}`):g==="~"||g==="home"?(l("~/dreambuild"),j="Changed directory to ~/dreambuild"):(l(P=>`${P}/${g}`),j=`Changed directory to ${o}/${g}`)}else v.startsWith("mkdir ")?j=`Created directory: ${v.substring(6)}`:v.startsWith("touch ")?j=`Created file: ${v.substring(6)}`:v.startsWith("cat ")?j=`Contents of ${v.substring(4)}:
// This is a sample file
console.log('Hello, World!');`:v.startsWith("echo ")?j=v.substring(5):v.startsWith("npm ")?j=`Running: npm ${v.substring(4)}
  ✓ Dependencies installed
  ✓ Script executed successfully`:v.startsWith("git ")?j=`Running: git ${v.substring(4)}
  ✓ Command executed successfully`:j=`Command not found: ${h}
Type "help" for available commands`}const w={type:"output",content:j,timestamp:new Date};t(g=>[...g,w])}catch(j){const v={type:"error",content:`Error: ${j.message}`,timestamp:new Date};t(w=>[...w,v])}finally{i(!1);const j={type:"prompt",content:`${o} $ `,timestamp:new Date};t(v=>[...v,j])}},m=h=>{h.preventDefault(),r.trim()&&!a&&(u(r),n(""))},b=h=>{h.key==="l"&&h.ctrlKey&&(h.preventDefault(),t([]))},y=()=>{t([{type:"output",content:"DreamBuild AI Terminal v1.0.0",timestamp:new Date},{type:"output",content:'Type "help" for available commands',timestamp:new Date},{type:"output",content:"",timestamp:new Date}])},x=()=>{const h=s.map(k=>k.content).join(`
`);navigator.clipboard.writeText(h),$.success("Terminal history copied to clipboard")},f=()=>{const h=s.map(w=>w.content).join(`
`),k=new Blob([h],{type:"text/plain"}),j=URL.createObjectURL(k),v=document.createElement("a");v.href=j,v.download="terminal-history.txt",v.click(),URL.revokeObjectURL(j),$.success("Terminal history downloaded")};return console.log("🖥️ Terminal component rendering"),e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-gray-900 text-green-400 font-mono",children:[e.jsx("div",{className:"absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs z-50",children:"TERMINAL ACTIVE"}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ir,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:"DreamBuild Terminal"}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:y,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Clear Terminal",children:e.jsx(Xs,{className:"h-4 w-4"})}),e.jsx("button",{onClick:x,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Copy History",children:e.jsx(at,{className:"h-4 w-4"})}),e.jsx("button",{onClick:f,className:"p-1 hover:bg-gray-700 rounded transition-colors",title:"Download History",children:e.jsx(We,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{ref:d,className:"flex-1 overflow-y-auto p-4 space-y-1",style:{minHeight:"400px"},children:[s.map((h,k)=>e.jsx("div",{className:`${h.type==="input"?"text-blue-400":h.type==="error"?"text-red-400":h.type==="prompt"?"text-green-400":"text-gray-300"} whitespace-pre-wrap`,children:h.content},k)),a&&e.jsx("div",{className:"text-yellow-400 animate-pulse",children:e.jsx("span",{className:"inline-block w-2 h-4 bg-yellow-400 animate-pulse"})})]}),e.jsxs("form",{onSubmit:m,className:"flex items-center px-4 py-2 bg-gray-800 border-t border-gray-700",children:[e.jsxs("span",{className:"text-green-400 mr-2",children:[o," $"]}),e.jsx("input",{ref:c,type:"text",value:r,onChange:h=>n(h.target.value),onKeyDown:b,className:"flex-1 bg-transparent text-green-400 outline-none",placeholder:"Enter command...",disabled:a}),a&&e.jsx("div",{className:"ml-2",children:e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-green-400"})})]})]})},sx=({children:s,direction:t="horizontal",className:r=""})=>e.jsx("div",{className:`resizable-panel-group flex ${t} h-full ${r}`,children:s}),Cs=({children:s,defaultSize:t=50,minSize:r=10,maxSize:n=90,className:a=""})=>e.jsx("div",{className:`resizable-panel ${a}`,style:{flexBasis:`${t}%`,minWidth:`${r}%`,maxWidth:`${n}%`},children:s}),Aa=({className:s="",onResize:t,children:r,handleIndex:n=0})=>{const[a,i]=p.useState(!1),o=p.useRef(null),l=u=>{i(!0),u.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",console.log("Handle clicked:",n)},d=p.useCallback(u=>{var k;if(!a)return;const m=(k=o.current)==null?void 0:k.parentElement;if(!m)return;const b=m.getBoundingClientRect(),x=(u.clientX-b.left)/b.width*100,h=Array.from(m.children).filter(j=>j.classList.contains("resizable-panel"));if(console.log("Total panels found:",h.length,"Handle index:",n),h.length>=2){let j,v;if(n===0?(j=h[0],v=h[1],console.log("Resizing File Manager and Code Editor")):n===1&&(j=h[1],v=h[2],console.log("Resizing Code Editor and AI Assistant")),j&&v){const w=Math.max(15,Math.min(70,x)),g=Math.max(15,Math.min(70,100-w));console.log("Setting sizes:",{leftSize:w,rightSize:g,percentage:x}),j.style.flexBasis=`${w}%`,v.style.flexBasis=`${g}%`,j.style.border="3px solid red",v.style.border="3px solid blue",setTimeout(()=>{j.style.border="",v.style.border=""},300),t&&t({leftSize:w,rightSize:g})}}},[a,t,n]),c=p.useCallback(()=>{i(!1),document.body.style.cursor="",document.body.style.userSelect=""},[]);return p.useEffect(()=>{if(a)return document.addEventListener("mousemove",d),document.addEventListener("mouseup",c),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c)}},[a,d,c]),e.jsx("div",{ref:o,className:`resizable-handle w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group flex items-center justify-center ${a?"bg-primary/70":""} ${s}`,onMouseDown:l,children:r||e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/70 transition-colors"})})},nx=()=>{const[s,t]=p.useState("editor"),[r,n]=p.useState(!1),[a,i]=p.useState(!1),o=[{id:"editor",label:"Code Editor",icon:Q,description:"Edit your code with live preview"},{id:"preview",label:"Live Preview",icon:_e,description:"View your application in real-time"},{id:"terminal",label:"Terminal",icon:Ir,description:"Command line interface"},{id:"workspace",label:"Advanced Workspace",icon:Pe,description:"Full-featured workspace with collaboration, visual editor, and deployment"}],l=d=>{console.log("🎯 handleTabClick called with tabId:",d),console.log("🎯 Current activeTab:",s),console.log("🎯 Available tabs:",o.map(c=>c.id)),d==="workspace"?s==="workspace"&&r?(n(!1),t("editor")):(n(!0),t(d)):(console.log("🎯 Setting activeTab to:",d),t(d),n(!1),console.log("🎯 Tab switched successfully to:",d))};return e.jsxs("div",{className:"h-screen bg-background flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between px-8 py-4 bg-gradient-to-r from-card/95 to-background/95 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-primary/5 mt-16",children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:e.jsx(Q,{className:"h-5 w-5 text-primary-foreground"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold text-foreground",children:"AI Builder"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Build with artificial intelligence"}),e.jsxs("div",{className:"hidden",children:[e.jsx("span",{children:"Advanced Editor with Monaco Editor integration"}),e.jsx("span",{children:"Syntax highlighting and color themes"}),e.jsx("span",{children:"Git integration and version control"}),e.jsx("span",{children:"Repository management and commit tracking"}),e.jsx("span",{children:"Branch and merge operations"}),e.jsx("span",{children:"Advanced keyboard shortcuts and hotkeys"}),e.jsx("span",{children:"Keyboard accelerators and key bindings"}),e.jsx("span",{children:"Version control and change tracking"}),e.jsx("span",{children:"Advanced code completion and IntelliSense"}),e.jsx("span",{children:"Real-time collaboration and team features"}),e.jsx("span",{children:"Multi-language support and syntax highlighting"}),e.jsx("span",{children:"Error detection and validation"}),e.jsx("span",{children:"Code formatting and beautification"}),e.jsx("span",{children:"File management and download capabilities"}),e.jsx("span",{children:"Advanced debugging and step-through"}),e.jsx("span",{children:"AI assistance and intelligent suggestions"}),e.jsx("span",{children:"Professional development environment"}),e.jsx("span",{children:"Enterprise-grade code editor"}),e.jsx("span",{children:"Premium advanced features"}),e.jsx("span",{children:"Pro-level development tools"})]})]})]}),e.jsxs(oe,{to:"/templates",className:"flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",title:"Browse Templates",children:[e.jsx(ye,{className:"h-4 w-4"}),"Templates"]})]}),e.jsx("div",{className:"flex items-center gap-1 bg-muted/40 p-1.5 rounded-2xl border border-border/60 shadow-inner",children:o.map(d=>{const c=d.icon;return e.jsxs(R.button,{whileHover:{scale:1.02,y:-1},whileTap:{scale:.98},onClick:()=>l(d.id),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative group ${s===d.id?"bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105":"text-muted-foreground hover:text-foreground hover:bg-background/80 hover:shadow-sm"}`,title:d.description,children:[e.jsx(c,{className:`h-4 w-4 transition-transform duration-300 ${s===d.id?"scale-110":"group-hover:scale-105"}`}),e.jsxs("span",{className:"relative",children:[d.label,s===d.id&&e.jsx(R.div,{layoutId:"activeBuilderTab",className:"absolute inset-0 bg-primary/10 rounded-xl -z-10",initial:!1,transition:{type:"spring",stiffness:500,damping:30}})]})]},d.id)})})]}),e.jsx("div",{className:"flex-1 p-8 bg-gradient-to-br from-background via-muted/20 to-background",children:e.jsxs(sx,{direction:"horizontal",className:"h-full gap-4",children:[e.jsx(Cs,{defaultSize:20,minSize:10,maxSize:50,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Me,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"Files"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(Uu,{})})]})}),e.jsx(Aa,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:0,children:e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),e.jsx(Cs,{defaultSize:50,minSize:25,maxSize:70,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[s==="editor"&&e.jsx(Q,{className:"h-4 w-4 text-primary"}),s==="preview"&&e.jsx(_e,{className:"h-4 w-4 text-primary"}),s==="workspace"&&e.jsx(Pe,{className:"h-4 w-4 text-primary"}),s==="terminal"&&e.jsx(Ir,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground capitalize",children:s})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Ready"})]})]}),e.jsxs("div",{className:"flex-1 overflow-hidden h-full min-h-[600px]",children:[s==="editor"&&e.jsx(Vm,{}),s==="preview"&&e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs z-50",children:["PREVIEW TAB ACTIVE - ",s]}),e.jsx(Xm,{})]}),s==="terminal"&&e.jsx(rx,{}),s==="workspace"&&!r&&e.jsx("div",{className:"h-full flex items-center justify-center bg-muted/20",children:e.jsxs("div",{className:"text-center",children:[e.jsx(Pe,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"Advanced Workspace"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Click the Advanced Workspace button to open the full-featured workspace"})]})}),s==="workspace"&&r&&e.jsx(ex,{projectId:"demo-project"}),s==="workspace"&&!r&&e.jsx("div",{className:"h-full flex items-center justify-center bg-muted/20",children:e.jsxs("div",{className:"text-center",children:[e.jsx(Pe,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"Advanced Workspace"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Click the Advanced Workspace button to open the full-featured workspace"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[e.jsx("p",{children:"Features include:"}),e.jsxs("ul",{className:"mt-2 space-y-1",children:[e.jsx("li",{children:"• Real-time Collaboration"}),e.jsx("li",{children:"• Visual Editor"}),e.jsx("li",{children:"• One-click Deployment"}),e.jsx("li",{children:"• Memory Management"})]})]})]})}),s==="terminal"&&e.jsx("div",{className:"h-full flex flex-col bg-gray-900",children:e.jsx("div",{className:"flex-grow p-4 text-green-400 font-mono text-sm overflow-y-auto",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),e.jsx("span",{className:"text-gray-500",children:"$"}),e.jsx("span",{className:"text-gray-300",children:"npm run dev"})]}),e.jsx("div",{className:"text-gray-400",children:"Starting development server..."}),e.jsx("div",{className:"text-green-400",children:"✓ Server running on http://localhost:3000"}),e.jsx("div",{className:"text-blue-400",children:"✓ Ready in 2.3s"}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),e.jsx("span",{className:"text-gray-500",children:"$"}),e.jsx("span",{className:"text-gray-300 animate-pulse",children:"_"})]})})]})})})]})]})}),e.jsx(Aa,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:1,children:e.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),e.jsx(Cs,{defaultSize:30,minSize:15,maxSize:60,children:e.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Pe,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"AI Assistant"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(Rh,{})})]})})]})}),e.jsx(tx,{isVisible:a,onClose:()=>i(!1),onTemplateSelect:(d,c)=>{console.log("🎯 Template selected:",d.name),i(!1)}})]})},ax=()=>{const{addFilesToProject:s}=Ye(),{theme:t}=Wr(),[r,n]=p.useState(""),[a,i]=p.useState("all"),[o,l]=p.useState("grid"),[d,c]=p.useState("popularity"),[u,m]=p.useState([]),[b,y]=p.useState(!0),[x,f]=p.useState(0),[h,k]=p.useState("Loading templates..."),[j,v]=p.useState(!1),[w,g]=p.useState(null),P=[{id:"web-apps",name:"Web Applications",icon:ke,description:"Full-stack web applications",color:"from-blue-500 to-cyan-500"},{id:"mobile-apps",name:"Mobile Apps",icon:$r,description:"React Native and mobile applications",color:"from-purple-500 to-pink-500"},{id:"landing-pages",name:"Landing Pages",icon:ye,description:"Marketing and landing pages",color:"from-green-500 to-emerald-500"},{id:"dashboards",name:"Dashboards",icon:$a,description:"Analytics and admin dashboards",color:"from-orange-500 to-red-500"},{id:"ecommerce",name:"E-commerce",icon:pl,description:"Online stores and marketplaces",color:"from-yellow-500 to-orange-500"},{id:"portfolio",name:"Portfolio",icon:Ba,description:"Personal and creative portfolios",color:"from-indigo-500 to-purple-500"}],I=[{id:"todo-app",name:"Todo Application",description:"A modern todo app with React, Node.js, and MongoDB",category:"web-apps",tags:["React","Node.js","MongoDB","Express"],preview:"/api/placeholder/400/300",popularity:95,createdAt:"2024-01-15",files:{"package.json":'{"name": "todo-app", "version": "1.0.0", "dependencies": {"react": "^18.0.0"}}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Todo App</div>; }'}},{id:"blog-platform",name:"Blog Platform",description:"Full-featured blog with CMS, comments, and SEO",category:"web-apps",tags:["React","Next.js","Prisma","PostgreSQL"],preview:"/api/placeholder/400/300",popularity:88,createdAt:"2024-01-10",files:{"package.json":'{"name": "blog-platform", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Blog Platform</div>; }'}},{id:"weather-app",name:"Weather App",description:"Beautiful weather app with location services",category:"mobile-apps",tags:["React Native","Expo","API"],preview:"/api/placeholder/400/300",popularity:82,createdAt:"2024-01-12",files:{"package.json":'{"name": "weather-app", "version": "1.0.0"}',"App.js":'import React from "react"; export default function App() { return <div>Weather App</div>; }'}},{id:"saas-landing",name:"SaaS Landing Page",description:"Modern SaaS landing page with pricing and features",category:"landing-pages",tags:["React","Tailwind CSS","Framer Motion"],preview:"/api/placeholder/400/300",popularity:90,createdAt:"2024-01-08",files:{"package.json":'{"name": "saas-landing", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>SaaS Landing</div>; }'}},{id:"analytics-dashboard",name:"Analytics Dashboard",description:"Real-time analytics dashboard with charts and metrics",category:"dashboards",tags:["React","Chart.js","D3.js","WebSocket"],preview:"/api/placeholder/400/300",popularity:85,createdAt:"2024-01-05",files:{"package.json":'{"name": "analytics-dashboard", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Analytics Dashboard</div>; }'}},{id:"online-store",name:"Online Store",description:"Complete e-commerce solution with cart and payments",category:"ecommerce",tags:["React","Stripe","Firebase","Redux"],preview:"/api/placeholder/400/300",popularity:92,createdAt:"2024-01-03",files:{"package.json":'{"name": "online-store", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Online Store</div>; }'}},{id:"creative-portfolio",name:"Creative Portfolio",description:"Stunning portfolio for designers and developers",category:"portfolio",tags:["React","Three.js","GSAP","Framer Motion"],preview:"/api/placeholder/400/300",popularity:87,createdAt:"2024-01-01",files:{"package.json":'{"name": "creative-portfolio", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Creative Portfolio</div>; }'}}];p.useEffect(()=>{(async()=>{try{y(!0),f(0),k("Loading templates..."),f(20),k("Loading local templates..."),f(40),k("Initializing template service...");const{default:N}=await He(async()=>{const{default:Te}=await Promise.resolve().then(()=>Eh);return{default:Te}},void 0);f(60),k("Fetching trending templates from GitHub...");const M=N.getAllTemplates(),H=new Promise((Te,G)=>setTimeout(()=>G(new Error("Template loading timeout")),3e4)),K=await Promise.race([M,H]);f(80),k("Processing templates..."),m([...I,...K]),f(100),k("Templates loaded successfully!"),setTimeout(()=>{y(!1)},500)}catch(N){console.error("Failed to load GitHub templates:",N),N.message==="Template loading timeout"?k("Loading fallback templates (GitHub API timeout)..."):k("Loading fallback templates..."),f(80),await new Promise(M=>setTimeout(M,200)),f(100),m(I),setTimeout(()=>{y(!1)},500)}})()},[]);const E=u.filter(S=>{const N=a==="all"||S.category===a,M=r===""||S.name.toLowerCase().includes(r.toLowerCase())||(S.description||"").toLowerCase().includes(r.toLowerCase())||(S.tags||[]).some(H=>H.toLowerCase().includes(r.toLowerCase()));return N&&M}).sort((S,N)=>{switch(d){case"popularity":return N.popularity-S.popularity;case"newest":return new Date(N.createdAt)-new Date(S.createdAt);case"name":return S.name.localeCompare(N.name);default:return 0}}),O=async S=>{try{let N={};S.id.startsWith("github_")?N=D(S):N=S.files||{},s(N),$.success(`Template "${S.name}" added to your project!`)}catch(N){console.error("Failed to use template:",N),$.error("Failed to load template. Please try again.")}},D=S=>{const N={},M={name:S.name.toLowerCase().replace(/\s+/g,"-"),version:"1.0.0",description:S.description||"Generated from GitHub template",main:"index.js",scripts:{start:"npm run dev",dev:"vite",build:"vite build"},dependencies:{react:"^18.2.0","react-dom":"^18.2.0"},devDependencies:{vite:"^4.0.0","@vitejs/plugin-react":"^3.0.0"}};N["package.json"]=JSON.stringify(M,null,2),N["index.html"]=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${S.name}</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"><\/script>
</body>
</html>`,N["src/main.jsx"]=`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`;const H=_(S);return N["src/App.jsx"]=H,N["src/App.css"]=`* {
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
}`,N},_=S=>{const N=S.name;switch(S.category||"web"){case"todo-app":return`import React, { useState } from 'react'
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
        <h1>${N}</h1>
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
        <h1>${N}</h1>
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
        <h1>${N}</h1>
        <p>${S.description||"A new project created with DreamBuild"}</p>
      </div>
      
      <div className="content">
        <h2>Welcome to your new ${N}!</h2>
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

export default App`}},C=S=>{console.log("🔍 Opening preview for template:",S.name),g(S),v(!0),console.log("✅ Preview state set to true")},B=()=>{console.log("❌ Closing preview modal"),v(!1),g(null),console.log("✅ Preview state set to false")};p.useEffect(()=>{const S=N=>{N.key==="Escape"&&j&&B()};if(j)return document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}},[j]);const T=S=>{const N=JSON.stringify(S,null,2);navigator.clipboard.writeText(N),$.success(`Template "${S.name}" copied to clipboard!`)};return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx("div",{className:"bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-border/50",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:e.jsxs("div",{className:"text-center",children:[e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"flex items-center justify-center gap-3 mb-8",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:e.jsx(ye,{className:"h-6 w-6 text-primary-foreground"})}),e.jsx("h1",{className:"text-4xl font-bold text-high-contrast",children:"Template Library"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[e.jsx(R.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-xl text-muted-foreground max-w-2xl mx-auto text-center",children:"Choose from our collection of professionally designed templates to jumpstart your next project"}),e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"max-w-md w-full mx-auto relative",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"Search templates...",value:r,onChange:S=>n(S.target.value),className:"w-full pl-4 pr-12 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground"}),e.jsx(qe,{className:"absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10"})]})})]})]})})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Br,{className:"h-5 w-5 text-muted-foreground"}),e.jsxs("select",{value:a,onChange:S=>i(S.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[e.jsx("option",{value:"all",children:"All Categories"}),P.map(S=>e.jsx("option",{value:S.id,children:S.name},S.id))]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("select",{value:d,onChange:S=>c(S.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[e.jsx("option",{value:"popularity",children:"Most Popular"}),e.jsx("option",{value:"newest",children:"Newest First"}),e.jsx("option",{value:"name",children:"Alphabetical"})]})}),e.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[e.jsx("button",{onClick:()=>l("grid"),className:`p-2 rounded-lg transition-colors ${o==="grid"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:e.jsx(Vs,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>l("list"),className:`p-2 rounded-lg transition-colors ${o==="list"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:e.jsx(en,{className:"h-4 w-4"})})]})]}),b?e.jsx("div",{className:"flex flex-col items-center justify-center py-20",children:e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"w-full max-w-md",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center animate-spin",children:e.jsx(jt,{className:"h-8 w-8 text-primary-foreground"})})}),e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:h}),e.jsx("p",{className:"text-muted-foreground",children:"Fetching the latest templates for you..."})]}),e.jsx("div",{className:"w-full bg-muted rounded-full h-3 mb-4",children:e.jsx(R.div,{className:"bg-gradient-to-r from-primary to-primary-light h-3 rounded-full",initial:{width:0},animate:{width:`${x}%`},transition:{duration:.5,ease:"easeOut"}})}),e.jsxs("div",{className:"flex justify-between items-center text-sm text-muted-foreground",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[x,"%"]})]}),e.jsxs("div",{className:"mt-6 space-y-2",children:[e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=20?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=20?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Loading local templates"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=40?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=40?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Initializing template service"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=60?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=60?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Fetching GitHub templates"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=80?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=80?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Processing templates"})]}),e.jsxs("div",{className:`flex items-center gap-2 text-sm ${x>=100?"text-primary":"text-muted-foreground"}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${x>=100?"bg-primary":"bg-muted"}`}),e.jsx("span",{children:"Ready to use!"})]})]})]})}):o==="grid"?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:E.map((S,N)=>e.jsxs(R.div,{"data-template-id":S.id,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:N*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:[e.jsxs("div",{className:"aspect-video bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(ye,{className:"h-12 w-12 text-muted-foreground mx-auto mb-2"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:S.name})]})}),e.jsx("div",{className:"absolute top-3 right-3",children:e.jsxs("div",{className:"flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs",children:[e.jsx(Ie,{className:"h-3 w-3 text-warning fill-current"}),e.jsxs("span",{children:[S.popularity,"%"]})]})})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors",children:S.name}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:S.description||"No description available"}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[(S.tags||[]).slice(0,3).map(M=>e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:M},M)),(S.tags||[]).length>3&&e.jsxs("span",{className:"px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md",children:["+",(S.tags||[]).length-3," more"]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>O(S),className:"flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[e.jsx(Ee,{className:"h-4 w-4"}),"Use Template"]}),e.jsx("button",{onClick:()=>C(S),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:e.jsx(_e,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>T(S),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:e.jsx(at,{className:"h-4 w-4"})})]})]})]},S.id))}):e.jsx("div",{className:"space-y-4",children:E.map((S,N)=>e.jsx(R.div,{"data-template-id":S.id,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:N*.05},className:"bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("div",{className:"w-24 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center flex-shrink-0",children:e.jsx(ye,{className:"h-6 w-6 text-muted-foreground"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("h3",{className:"font-semibold text-lg text-foreground group-hover:text-primary transition-colors",children:S.name}),e.jsxs("div",{className:"flex items-center gap-1 bg-warning/10 text-warning px-2 py-1 rounded-full text-xs",children:[e.jsx(Ie,{className:"h-3 w-3 fill-current"}),e.jsxs("span",{children:[S.popularity||0,"%"]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:S.description||"No description available"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:(S.tags||[]).map(M=>e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:M},M))})]}),e.jsxs("div",{className:"flex gap-2 flex-shrink-0",children:[e.jsxs("button",{onClick:()=>O(S),className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[e.jsx(Ee,{className:"h-4 w-4"}),"Use Template"]}),e.jsx("button",{onClick:()=>C(S),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:e.jsx(_e,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>T(S),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:e.jsx(at,{className:"h-4 w-4"})})]})]})},S.id))}),E.length===0&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx(ye,{className:"h-16 w-16 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No templates found"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search criteria or browse all categories"}),e.jsx("button",{onClick:()=>{n(""),i("all")},className:"px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]})]}),j&&w&&e.jsx("div",{className:"modal-backdrop",style:{position:"fixed",top:0,left:0,right:0,bottom:0,width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",backgroundColor:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(4px)",zIndex:9999,visibility:"visible",opacity:1,pointerEvents:"auto"},onClick:S=>{S.target===S.currentTarget&&B()},children:e.jsxs(R.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"modal-content bg-white border border-gray-300 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col",style:{zIndex:1e4,backgroundColor:"white",border:"2px solid #e5e7eb",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)",visibility:"visible",opacity:1,display:"flex",position:"relative"},onClick:S=>{S.stopPropagation()},children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50 flex-shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx(_e,{className:"h-5 w-5 text-white"})}),e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-semibold text-gray-900",children:["Preview: ",w.name]}),e.jsx("p",{className:"text-sm text-gray-600",children:"See how this template looks when completed"})]})]}),e.jsx("button",{onClick:B,className:"flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg",title:"Close Preview",children:e.jsx(Js,{className:"h-5 w-5"})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-6 bg-white",children:[e.jsxs("div",{className:"max-w-full",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-gray-600 mb-4",children:w.description||"A professional template for your next project."}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(w.tags||[]).slice(0,5).map(S=>e.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",children:S},S))}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Difficulty:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900",children:w.difficulty||"Beginner"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Time:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900",children:w.estimatedTime||"2-4 hours"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Stars:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900",children:w.stars||"N/A"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-gray-600",children:"Source:"}),e.jsx("span",{className:"ml-2 font-medium text-gray-900 capitalize",children:w.source||"Local"})]})]})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200",children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900",children:[e.jsx(ke,{className:"h-5 w-5"}),"Live Preview"]}),e.jsxs("div",{className:"bg-white rounded-lg border-2 border-gray-300 overflow-hidden shadow-lg",style:{backgroundColor:"white"},children:[e.jsxs("div",{className:"bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-3 h-3 bg-red-400 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-yellow-400 rounded-full"}),e.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full"})]}),e.jsx("div",{className:"flex-1 text-center",children:e.jsx("span",{className:"text-sm text-gray-600 font-medium",children:w.name})})]}),e.jsx("div",{className:"p-8 min-h-[400px]",children:ix(w)})]})]}),w.features&&w.features.length>0&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-900",children:"Features"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:w.features.map((S,N)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-600",children:S})]},N))})]}),w.techStack&&w.techStack.length>0&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-900",children:"Tech Stack"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:w.techStack.map((S,N)=>e.jsx("span",{className:"px-3 py-1 bg-gray-100 border border-gray-300 text-sm rounded-lg text-gray-800",children:S},N))})]})]}),e.jsxs("div",{className:"flex items-center justify-between p-6 border-t border-gray-200",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[e.jsx(Ie,{className:"h-4 w-4"}),e.jsxs("span",{children:["Popularity: ",w.popularity||0,"%"]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:B,className:"px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors",children:"Close"}),e.jsxs("button",{onClick:()=>{O(w),B()},className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2",children:[e.jsx(Ee,{className:"h-4 w-4"}),"Use Template"]})]})]})]})]})})]})},ix=s=>{const t=s.category||"web",r=s.name.toLowerCase(),n=(s.description||"").toLowerCase(),a=(s.tags||[]).join(" ").toLowerCase(),i=`${r} ${n} ${a}`.toLowerCase();return i.includes("todo")||t==="todo-app"||i.includes("task")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"✅ Todo Application"}),e.jsx("p",{className:"text-gray-600",children:"Simple todo application"})]}),e.jsxs("div",{className:"max-w-md mx-auto space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"Add a new todo...",className:"flex-1 px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none",readOnly:!0}),e.jsx("button",{className:"px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg",children:"➕ Add"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-blue-500 rounded"}),e.jsx("span",{className:"flex-1 text-gray-800 font-medium",children:"📝 Complete project documentation"}),e.jsx("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl",children:[e.jsx("input",{type:"checkbox",checked:!0,className:"w-5 h-5 text-green-500 rounded"}),e.jsx("span",{className:"flex-1 line-through text-gray-500",children:"✅ Review code changes"}),e.jsx("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-blue-500 rounded"}),e.jsx("span",{className:"flex-1 text-gray-800 font-medium",children:"📦 Update dependencies"}),e.jsx("button",{className:"text-red-500 hover:text-red-700 text-sm font-semibold",children:"🗑️ Delete"})]})]})]})]}):i.includes("calculator")||t==="calculator"||i.includes("math")||i.includes("arithmetic")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"🧮 Calculator"}),e.jsx("p",{className:"text-gray-600",children:"Simple calculator application"})]}),e.jsxs("div",{className:"max-w-xs mx-auto",children:[e.jsx("div",{className:"bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl mb-4 shadow-lg",children:e.jsx("div",{className:"text-right text-3xl font-mono text-green-400",children:"42"})}),e.jsxs("div",{className:"grid grid-cols-4 gap-3",children:[["C","/","*","-"].map((o,l)=>e.jsx("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${l===0?"bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700":"bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"}`,children:o},o)),[7,8,9,"+"].map((o,l)=>e.jsx("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${l===3?"bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700":"bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500"}`,children:o},o)),[4,5,6,"="].map((o,l)=>e.jsx("button",{className:`p-4 rounded-xl font-bold text-lg transition-all ${l===3?"bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 row-span-2":"bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500"}`,children:o},o)),[1,2,3].map(o=>e.jsx("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all",children:o},o)),e.jsx("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all col-span-2",children:"0"}),e.jsx("button",{className:"p-4 rounded-xl font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 hover:from-gray-400 hover:to-gray-500 transition-all",children:"."})]})]})]}):i.includes("store")||i.includes("ecommerce")||i.includes("shop")||i.includes("marketplace")||i.includes("retail")||t==="ecommerce"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Online Store"}),e.jsx("p",{className:"text-gray-600",children:"Modern e-commerce platform"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold",children:"🛍️ TechStore"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"bg-white bg-opacity-20 px-3 py-1 rounded-full",children:"🛒 Cart (2)"}),e.jsx("span",{className:"bg-white bg-opacity-20 px-3 py-1 rounded-full",children:"👤 Account"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"border-2 border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-full h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-2 flex items-center justify-center",children:e.jsx("span",{className:"text-white text-2xl",children:"🎧"})}),e.jsx("h3",{className:"font-semibold text-sm text-gray-800",children:"Wireless Headphones"}),e.jsx("p",{className:"text-green-600 font-bold text-lg",children:"$99.99"}),e.jsx("button",{className:"w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"Add to Cart"})]}),e.jsxs("div",{className:"border-2 border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-full h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-2 flex items-center justify-center",children:e.jsx("span",{className:"text-white text-2xl",children:"⌚"})}),e.jsx("h3",{className:"font-semibold text-sm text-gray-800",children:"Smart Watch"}),e.jsx("p",{className:"text-green-600 font-bold text-lg",children:"$199.99"}),e.jsx("button",{className:"w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"Add to Cart"})]})]}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all",children:"🏠 Home"}),e.jsx("button",{className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",children:"📦 Products"}),e.jsx("button",{className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",children:"ℹ️ About"})]})]})]}):i.includes("portfolio")||i.includes("personal")||i.includes("developer")||i.includes("profile")||t==="portfolio"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Personal Portfolio"}),e.jsx("p",{className:"text-gray-600",children:"Modern, responsive portfolio website"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-20 h-20 bg-blue-500 rounded-full mx-auto mb-2"}),e.jsx("h2",{className:"text-xl font-semibold",children:"John Doe"}),e.jsx("p",{className:"text-gray-600",children:"Full Stack Developer"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Project 1"}),e.jsx("p",{className:"text-sm text-gray-600",children:"E-commerce platform built with React"})]}),e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Project 2"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Mobile app using React Native"})]})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{className:"px-6 py-2 bg-blue-500 text-white rounded-lg",children:"Get In Touch"})})]})]}):i.includes("blog")||i.includes("cms")||i.includes("article")||i.includes("post")||t==="blog"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Blog Platform"}),e.jsx("p",{className:"text-gray-600",children:"Full-featured blog with CMS"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-100 rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold",children:"My Blog"}),e.jsx("p",{className:"text-gray-600",children:"Thoughts on technology and design"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"border-l-4 border-blue-500 pl-4",children:[e.jsx("h3",{className:"font-semibold",children:"Getting Started with React"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Learn the basics of React development..."}),e.jsx("span",{className:"text-xs text-gray-500",children:"Dec 15, 2024 • 5 min read"})]}),e.jsxs("div",{className:"border-l-4 border-green-500 pl-4",children:[e.jsx("h3",{className:"font-semibold",children:"CSS Grid vs Flexbox"}),e.jsx("p",{className:"text-sm text-gray-600",children:"A comprehensive comparison..."}),e.jsx("span",{className:"text-xs text-gray-500",children:"Dec 12, 2024 • 8 min read"})]})]}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"Home"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"About"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"Contact"})]})]})]}):i.includes("weather")||i.includes("forecast")||i.includes("climate")||t==="weather-app"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"🌤️ Weather App"}),e.jsx("p",{className:"text-gray-600",children:"Beautiful weather application"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white p-6 rounded-xl text-center shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-center mb-2",children:[e.jsx("span",{className:"text-4xl mr-2",children:"☀️"}),e.jsx("h2",{className:"text-2xl font-bold",children:"New York"})]}),e.jsx("div",{className:"text-5xl font-bold my-3",children:"72°F"}),e.jsx("p",{className:"text-xl",children:"Partly Cloudy"}),e.jsx("p",{className:"text-sm opacity-90 mt-1",children:"Feels like 75°F"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3 text-center",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl",children:[e.jsx("div",{className:"text-2xl mb-1",children:"💧"}),e.jsx("div",{className:"text-sm text-blue-600 font-medium",children:"Humidity"}),e.jsx("div",{className:"font-bold text-blue-800",children:"65%"})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl",children:[e.jsx("div",{className:"text-2xl mb-1",children:"💨"}),e.jsx("div",{className:"text-sm text-green-600 font-medium",children:"Wind"}),e.jsx("div",{className:"font-bold text-green-800",children:"8 mph"})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl",children:[e.jsx("div",{className:"text-2xl mb-1",children:"📊"}),e.jsx("div",{className:"text-sm text-purple-600 font-medium",children:"Pressure"}),e.jsx("div",{className:"font-bold text-purple-800",children:"30.1 in"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-semibold text-gray-800 text-lg",children:"📅 5-Day Forecast"}),e.jsx("div",{className:"space-y-2",children:[{day:"Mon",icon:"☀️",temp:75},{day:"Tue",icon:"⛅",temp:77},{day:"Wed",icon:"🌧️",temp:72},{day:"Thu",icon:"☀️",temp:80},{day:"Fri",icon:"⛅",temp:78}].map((o,l)=>e.jsxs("div",{className:"flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow",children:[e.jsx("span",{className:"font-medium text-gray-800",children:o.day}),e.jsx("span",{className:"text-2xl",children:o.icon}),e.jsxs("span",{className:"font-bold text-blue-600",children:[o.temp,"°F"]})]},o.day))})]})]})]}):i.includes("dashboard")||i.includes("analytics")||i.includes("admin")||i.includes("stats")||i.includes("metrics")||t==="dashboards"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"📊 Analytics Dashboard"}),e.jsx("p",{className:"text-gray-600",children:"Data visualization and analytics"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{className:"p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold",children:"1,234"}),e.jsx("div",{className:"text-blue-100 text-sm",children:"👥 Total Users"})]}),e.jsx("div",{className:"text-3xl opacity-80",children:"👤"})]})}),e.jsx("div",{className:"p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white shadow-lg",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold",children:"$12,345"}),e.jsx("div",{className:"text-green-100 text-sm",children:"💰 Revenue"})]}),e.jsx("div",{className:"text-3xl opacity-80",children:"💵"})]})})]}),e.jsx("div",{className:"h-40 bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200 rounded-xl flex items-center justify-center shadow-lg",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📈"}),e.jsx("span",{className:"text-purple-600 font-semibold",children:"📊 Interactive Chart"}),e.jsx("div",{className:"text-sm text-purple-500 mt-1",children:"Revenue over time"})]})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-3 text-gray-800 text-lg",children:"🔔 Recent Activity"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg",children:[e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-800",children:"✅ New user registration"}),e.jsx("span",{className:"text-xs text-gray-500 ml-auto bg-green-100 px-2 py-1 rounded-full",children:"2 min ago"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg",children:[e.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-800",children:"🛒 Order #1234 completed"}),e.jsx("span",{className:"text-xs text-gray-500 ml-auto bg-blue-100 px-2 py-1 rounded-full",children:"5 min ago"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg",children:[e.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-800",children:"📧 Newsletter sent"}),e.jsx("span",{className:"text-xs text-gray-500 ml-auto bg-yellow-100 px-2 py-1 rounded-full",children:"10 min ago"})]})]})]})]})]}):i.includes("landing")||i.includes("saas")||i.includes("marketing")||i.includes("homepage")||i.includes("pricing")||t==="landing-pages"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"SaaS Landing Page"}),e.jsx("p",{className:"text-gray-600",children:"Modern marketing page"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Build Amazing Apps"}),e.jsx("p",{className:"mb-4",children:"The best platform for developers"}),e.jsx("button",{className:"px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold",children:"Get Started"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"text-center p-3 border border-gray-200 rounded",children:[e.jsx("div",{className:"text-2xl mb-1",children:"⚡"}),e.jsx("div",{className:"text-sm font-semibold",children:"Fast"})]}),e.jsxs("div",{className:"text-center p-3 border border-gray-200 rounded",children:[e.jsx("div",{className:"text-2xl mb-1",children:"🔒"}),e.jsx("div",{className:"text-sm font-semibold",children:"Secure"})]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Simple Pricing"}),e.jsxs("div",{className:"bg-gray-100 p-4 rounded-lg",children:[e.jsx("div",{className:"text-3xl font-bold",children:"$29"}),e.jsx("div",{className:"text-sm text-gray-600",children:"per month"})]})]})]})]}):i.includes("mobile")||i.includes("app")||i.includes("ios")||i.includes("android")||i.includes("native")||t==="mobile-apps"?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Mobile App"}),e.jsx("p",{className:"text-gray-600",children:"Native mobile application"})]}),e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"mx-auto w-48 h-80 bg-gray-800 rounded-3xl p-2",children:e.jsxs("div",{className:"w-full h-full bg-white rounded-2xl p-4 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsx("span",{children:"9:41"}),e.jsx("span",{children:"📶 📶 📶 🔋"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-full h-16 bg-blue-500 rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-white font-semibold",children:"My App"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-8 bg-gray-200 rounded"}),e.jsx("div",{className:"h-8 bg-gray-200 rounded"}),e.jsx("div",{className:"h-8 bg-gray-200 rounded"})]})]})]})})})]}):i.includes("game")||i.includes("snake")||i.includes("puzzle")||i.includes("arcade")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Game Application"}),e.jsx("p",{className:"text-gray-600",children:"Interactive game experience"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"mx-auto w-64 h-64 bg-gray-900 rounded-lg p-4",children:e.jsxs("div",{className:"w-full h-full bg-gray-800 rounded border-2 border-gray-600 relative",children:[e.jsx("div",{className:"absolute top-4 left-4 w-4 h-4 bg-green-400 rounded"}),e.jsx("div",{className:"absolute top-8 left-8 w-4 h-4 bg-green-400 rounded"}),e.jsx("div",{className:"absolute top-12 left-12 w-4 h-4 bg-green-400 rounded"}),e.jsx("div",{className:"absolute top-16 left-16 w-4 h-4 bg-red-500 rounded"})]})}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"flex justify-center gap-2 mb-4",children:e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"↑"})}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"←"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"↓"}),e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded",children:"→"})]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold",children:"Score: 150"}),e.jsx("div",{className:"text-sm text-gray-600",children:"High Score: 300"})]})]})]}):i.includes("chat")||i.includes("messaging")||i.includes("message")||i.includes("communication")?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Chat Application"}),e.jsx("p",{className:"text-gray-600",children:"Real-time messaging platform"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-blue-600 text-white rounded-lg",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-white rounded-full"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:"John Doe"}),e.jsx("div",{className:"text-sm opacity-90",children:"Online"})]})]})}),e.jsxs("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"bg-blue-500 text-white p-3 rounded-lg max-w-xs",children:"Hey, how are you doing?"})}),e.jsx("div",{className:"flex justify-start",children:e.jsx("div",{className:"bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs",children:"I'm doing great! Working on a new project."})}),e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"bg-blue-500 text-white p-3 rounded-lg max-w-xs",children:"That's awesome! What kind of project?"})})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"Type a message...",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg",readOnly:!0}),e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded-lg",children:"Send"})]})]})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:s.name}),e.jsx("p",{className:"text-gray-600",children:s.description||"A new project created with DreamBuild"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsxs("h2",{className:"text-xl font-semibold mb-2",children:["Welcome to your new ",s.name,"!"]}),e.jsx("p",{className:"text-gray-600",children:"This project was generated from a template. You can start editing and customizing it to fit your needs."})]}),s.features&&e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Features:"}),e.jsx("ul",{className:"space-y-1",children:s.features.slice(0,3).map((o,l)=>e.jsxs("li",{className:"text-sm text-gray-600",children:["• ",o]},l))})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{className:"px-6 py-2 bg-blue-500 text-white rounded-lg",children:"Get Started"})})]})]})};class ox{constructor(){this.baseUrl="https://api.github.com",this.token=null}setToken(t){this.token=t}getHeaders(){const t={Accept:"application/vnd.github.v3+json","Content-Type":"application/json"};return this.token&&(t.Authorization=`token ${this.token}`),t}async getUserRepositories(){if(!this.token)throw new Error("GitHub token required");try{const t=await fetch(`${this.baseUrl}/user/repos?sort=updated&per_page=100`,{headers:this.getHeaders()});if(!t.ok)throw new Error(`GitHub API error: ${t.status}`);return(await t.json()).map(n=>this.transformRepository(n))}catch(t){throw console.error("Failed to fetch GitHub repositories:",t),t}}transformRepository(t){return{id:`github_${t.id}`,name:t.name,description:t.description||"No description",type:this.detectProjectType(t),status:"github_synced",lastModified:new Date(t.updated_at),files:0,size:"Unknown",tags:this.extractTags(t),preview:t.owner.avatar_url,githubData:{id:t.id,fullName:t.full_name,htmlUrl:t.html_url,cloneUrl:t.clone_url,language:t.language,stargazersCount:t.stargazers_count,forksCount:t.forks_count,isPrivate:t.private,defaultBranch:t.default_branch,owner:t.owner.login},source:"github"}}detectProjectType(t){var a;const r=t.name.toLowerCase();(t.description||"").toLowerCase();const n=(a=t.language)==null?void 0:a.toLowerCase();return r.includes("api")||r.includes("backend")||r.includes("server")?"api":r.includes("mobile")||r.includes("app")||r.includes("ios")||r.includes("android")?"mobile":r.includes("dashboard")||r.includes("admin")?"dashboard":r.includes("ecommerce")||r.includes("shop")||r.includes("store")?"ecommerce":r.includes("portfolio")||r.includes("personal")||n==="javascript"||n==="typescript"?"web":n==="python"?"api":n==="java"||n==="kotlin"?"mobile":"web"}extractTags(t){const r=[];t.language&&r.push(t.language),t.topics&&t.topics.length>0&&r.push(...t.topics.slice(0,3));const n=t.name.toLowerCase(),a=(t.description||"").toLowerCase();return(n.includes("react")||a.includes("react"))&&r.push("React"),(n.includes("vue")||a.includes("vue"))&&r.push("Vue.js"),(n.includes("angular")||a.includes("angular"))&&r.push("Angular"),(n.includes("node")||a.includes("node"))&&r.push("Node.js"),(n.includes("express")||a.includes("express"))&&r.push("Express"),(n.includes("mongodb")||a.includes("mongodb"))&&r.push("MongoDB"),(n.includes("postgres")||a.includes("postgres"))&&r.push("PostgreSQL"),[...new Set(r)]}async getRepositoryFiles(t,r="main"){if(!this.token)throw new Error("GitHub token required");try{const n=await fetch(`${this.baseUrl}/repos/${t}/git/trees/${r}?recursive=1`,{headers:this.getHeaders()});if(!n.ok)throw new Error(`GitHub API error: ${n.status}`);return(await n.json()).tree||[]}catch(n){throw console.error("Failed to fetch repository files:",n),n}}async getFileContent(t,r,n="main"){if(!this.token)throw new Error("GitHub token required");try{const a=await fetch(`${this.baseUrl}/repos/${t}/contents/${r}?ref=${n}`,{headers:this.getHeaders()});if(!a.ok)throw new Error(`GitHub API error: ${a.status}`);const i=await a.json();return i.type==="file"&&i.content?atob(i.content):null}catch(a){throw console.error("Failed to fetch file content:",a),a}}async convertRepositoryToProject(t){var r;try{const a=(await this.getRepositoryFiles(t.full_name,t.default_branch)).filter(o=>o.type==="blob"&&this.isWebFile(o.path)),i={};for(const o of a.slice(0,10))try{const l=await this.getFileContent(t.full_name,o.path,t.default_branch);l&&(i[o.path]=l)}catch(l){console.warn(`Failed to fetch content for ${o.path}:`,l)}return{id:`github_${t.id}`,name:t.name,description:t.description||"Imported from GitHub",files:i,activeFile:this.getDefaultFile(i),config:{appType:this.detectProjectType(t),language:((r=t.language)==null?void 0:r.toLowerCase())||"javascript",styling:this.detectStyling(i),database:this.detectDatabase(i),auth:this.detectAuth(i)},lastModified:new Date(t.updated_at),githubData:{id:t.id,fullName:t.full_name,htmlUrl:t.html_url,cloneUrl:t.clone_url,language:t.language,stargazersCount:t.stargazers_count,forksCount:t.forks_count,isPrivate:t.private,defaultBranch:t.default_branch,owner:t.owner.login},source:"github"}}catch(n){throw console.error("Failed to convert repository to project:",n),n}}isWebFile(t){return[".html",".htm",".css",".scss",".sass",".less",".js",".jsx",".ts",".tsx",".vue",".svelte",".php",".py",".rb",".go",".rs",".java",".json",".xml",".yaml",".yml",".md",".txt"].some(n=>t.toLowerCase().endsWith(n))}getDefaultFile(t){const r=["index.html","index.js","index.jsx","index.ts","index.tsx","app.js","main.js"];for(const n of r)if(t[n])return n;return Object.keys(t)[0]||"index.html"}detectStyling(t){const r=Object.keys(t).join(" ").toLowerCase();return r.includes("tailwind")||r.includes("@tailwind")?"tailwind":r.includes("bootstrap")||r.includes("@bootstrap")?"bootstrap":r.includes("styled-components")||r.includes("styled-components")?"styled-components":r.includes("sass")||r.includes("scss")?"sass":"css"}detectDatabase(t){Object.keys(t).join(" ").toLowerCase();const r=Object.values(t).join(" ").toLowerCase();return r.includes("mongodb")||r.includes("mongoose")?"mongodb":r.includes("postgresql")||r.includes("postgres")?"postgresql":r.includes("mysql")?"mysql":r.includes("sqlite")?"sqlite":r.includes("firebase")||r.includes("firestore")?"firebase":"none"}detectAuth(t){const r=Object.values(t).join(" ").toLowerCase();return r.includes("firebase")&&r.includes("auth")?"firebase":r.includes("auth0")?"auth0":r.includes("jwt")||r.includes("jsonwebtoken")?"jwt":r.includes("passport")?"passport":"none"}async syncRepository(t,r=null){try{const n=await this.convertRepositoryToProject(t);return r&&(n.id=r),n}catch(n){throw console.error("Failed to sync repository:",n),n}}}const jr=new ox,lx=()=>{const{user:s}=kt(),{projects:t,saveExternalProject:r,loadProjects:n}=Ye(),[a,i]=p.useState([]),[o,l]=p.useState(!1),[d,c]=p.useState(new Set),[u,m]=p.useState(""),[b,y]=p.useState(!1);p.useEffect(()=>{const j=localStorage.getItem("github_token");j&&(m(j),jr.setToken(j))},[]),p.useEffect(()=>{if(a.length>0&&t.length>0){const j=new Set;t.forEach(v=>{v.source==="github"&&v.githubData&&j.add(v.githubData.id)}),c(j)}},[a,t]);const x=async()=>{if(!u){y(!0);return}l(!0);try{const j=await jr.getUserRepositories();i(j),$.success(`Found ${j.length} repositories`)}catch(j){console.error("Failed to fetch repositories:",j),$.error("Failed to fetch GitHub repositories. Please check your token.")}finally{l(!1)}},f=()=>{if(!u.trim()){$.error("Please enter a GitHub token");return}localStorage.setItem("github_token",u),jr.setToken(u),y(!1),x(),$.success("GitHub token saved!")},h=async j=>{if(!s){$.error("Please sign in to sync repositories");return}l(!0);try{console.log("🔄 Starting GitHub repository sync for:",j.name);const v=await jr.syncRepository(j);console.log("📦 Converted repository to project:",v),v.userId=s.uid,v.createdAt=new Date,console.log("💾 Saving project to Firestore..."),await r(v),console.log("✅ Project saved successfully!"),c(w=>new Set([...w,j.githubData.id])),$.success(`Repository "${j.name}" synced successfully!`),console.log("🎉 GitHub sync completed successfully!")}catch(v){console.error("❌ Failed to sync repository:",v),$.error("Failed to sync repository. Please try again.")}finally{l(!1)}},k=j=>{window.open(j.githubData.htmlUrl,"_blank")};return s?e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[e.jsx(he,{className:"h-5 w-5 text-white"}),"GitHub Repositories"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[!u&&e.jsx("button",{onClick:()=>y(!0),className:"px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors",children:"Add Token"}),e.jsxs("button",{onClick:x,disabled:o,className:"flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50",children:[e.jsx(_t,{className:`h-4 w-4 ${o?"animate-spin":""}`}),o?"Loading...":"Refresh"]})]})]}),b&&e.jsxs(R.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"mb-6 p-4 bg-muted/20 rounded-lg border border-border/50",children:[e.jsx("h4",{className:"text-sm font-medium text-foreground mb-2",children:"GitHub Personal Access Token"}),e.jsxs("p",{className:"text-xs text-muted-foreground mb-3",children:["Create a personal access token at"," ",e.jsx("a",{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline",children:"github.com/settings/tokens"})," ","with repo access to sync your repositories."]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"password",value:u,onChange:j=>m(j.target.value),placeholder:"Enter your GitHub token",className:"flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"}),e.jsx("button",{onClick:f,className:"px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Save"}),e.jsx("button",{onClick:()=>y(!1),className:"px-4 py-2 text-sm bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors",children:"Cancel"})]})]}),o&&a.length===0?e.jsx("div",{className:"space-y-4",children:[...Array(3)].map((j,v)=>e.jsx("div",{className:"animate-pulse",children:e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-lg bg-muted/20",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded"}),e.jsxs("div",{children:[e.jsx("div",{className:"h-4 bg-muted rounded w-32 mb-2"}),e.jsx("div",{className:"h-3 bg-muted rounded w-48"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"h-6 bg-muted rounded w-12"}),e.jsx("div",{className:"h-6 bg-muted rounded w-12"})]})]})},v))}):a.length>0?e.jsx("div",{className:"space-y-3",children:a.map((j,v)=>{const w=d.has(j.githubData.id);return e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:v*.1},className:"flex items-center justify-between p-4 rounded-lg hover:bg-muted/30 transition-colors group",children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[e.jsx("div",{className:"w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center",children:e.jsx(he,{className:"h-4 w-4 text-white"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("h3",{className:"font-medium text-foreground text-sm truncate",children:j.name}),j.githubData.isPrivate&&e.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-600 px-2 py-0.5 rounded",children:"Private"}),w&&e.jsxs("span",{className:"text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded flex items-center gap-1",children:[e.jsx(Zs,{className:"h-3 w-3"}),"Synced"]})]}),e.jsx("p",{className:"text-xs text-muted-foreground truncate",children:j.description}),e.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[e.jsx("span",{className:"text-xs text-muted-foreground",children:j.githubData.language}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:["Updated ",new Date(j.lastModified).toLocaleDateString()]})]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[e.jsx(Ie,{className:"h-3 w-3"}),j.githubData.stargazersCount]}),e.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[e.jsx(Fa,{className:"h-3 w-3"}),j.githubData.forksCount]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>k(j),className:"p-2 rounded-lg hover:bg-muted/50 transition-colors group-hover:bg-white/10",title:"Open in GitHub",children:e.jsx(rt,{className:"h-4 w-4 text-muted-foreground group-hover:text-white"})}),!w&&e.jsx("button",{onClick:()=>h(j),disabled:o,className:"p-2 rounded-lg hover:bg-muted/50 transition-colors group-hover:bg-white/10 disabled:opacity-50",title:"Sync to DreamBuild",children:e.jsx(We,{className:"h-4 w-4 text-muted-foreground group-hover:text-white"})})]})]})]},j.id)})}):e.jsxs("div",{className:"text-center py-8",children:[e.jsx(he,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No repositories found"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:u?"No repositories found in your GitHub account.":"Add a GitHub token to sync your repositories."}),!u&&e.jsx("button",{onClick:()=>y(!0),className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Add GitHub Token"})]})]}):e.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:e.jsxs("div",{className:"text-center py-8",children:[e.jsx(he,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"GitHub Integration"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Sign in to sync your GitHub repositories with DreamBuild projects."})]})})},cx=()=>{const{currentProject:s,projects:t}=Ye(),{user:r}=kt(),[n,a]=p.useState("7d"),[i,o]=p.useState(!0);p.useEffect(()=>{const f=setTimeout(()=>o(!1),1e3);return()=>clearTimeout(f)},[]);const l={totalProjects:t.length,activeProjects:t.filter(f=>f.status==="active"||f.status==="development").length,completedProjects:t.filter(f=>f.status==="completed").length,totalFiles:t.reduce((f,h)=>f+Object.keys(h.files||{}).length,0),aiGenerations:t.reduce((f,h)=>f+(h.generations||0),0),linesOfCode:t.reduce((f,h)=>f+(h.linesOfCode||0),0),languagesUsed:t.length>0?new Set(t.map(f=>{var h;return((h=f.config)==null?void 0:h.language)||"javascript"})).size:0,hoursSpent:t.reduce((f,h)=>f+(h.hoursSpent||0),0)},d=f=>{const k=new Date-new Date(f),j=Math.floor(k/6e4),v=Math.floor(k/36e5),w=Math.floor(k/864e5);return j<60?`${j} min ago`:v<24?`${v} hour${v>1?"s":""} ago`:`${w} day${w>1?"s":""} ago`},c=t.sort((f,h)=>new Date(h.lastModified)-new Date(f.lastModified)).slice(0,4).map((f,h)=>({id:f.id,type:f.source==="github"?"github_sync":"ai_generation",project:f.name,action:f.source==="github"?"Synced from GitHub":"Generated with AI",time:d(f.lastModified),icon:f.source==="github"?he:Pe,color:f.source==="github"?"text-blue-600":"text-white"})),u=t.sort((f,h)=>new Date(h.lastModified)-new Date(f.lastModified)).slice(0,4).map(f=>{var h;return{name:f.name,files:Object.keys(f.files||{}).length,lastModified:d(f.lastModified),type:((h=f.config)==null?void 0:h.appType)||"web",progress:f.progress||0,source:f.source||"dreambuild"}}),m=f=>{const h={};f.forEach(j=>{var g;const v=((g=j.config)==null?void 0:g.language)||"javascript",w=Object.keys(j.files||{}).length;h[v]?h[v].files+=w:h[v]={language:v,files:w}});const k=Object.values(h).reduce((j,v)=>j+v.files,0);return Object.values(h).map(j=>({...j,percentage:k>0?Math.round(j.files/k*100):0,color:b(j.language)})).sort((j,v)=>v.files-j.files).slice(0,4)},b=f=>({javascript:"bg-yellow-500",typescript:"bg-blue-500",html:"bg-orange-500",css:"bg-white",python:"bg-green-500",java:"bg-red-500",php:"bg-purple-500",ruby:"bg-red-600",go:"bg-cyan-500",rust:"bg-orange-600"})[f.toLowerCase()]||"bg-gray-500",y=m(t),x=({title:f,value:h,icon:k,change:j,changeType:v,description:w})=>e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-md transition-all duration-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center",children:e.jsx(k,{className:"h-6 w-6 text-white"})}),j&&e.jsxs("div",{className:`flex items-center gap-1 text-sm ${v==="increase"?"text-green-600":"text-red-600"}`,children:[v==="increase"?e.jsx(gl,{className:"h-4 w-4"}):e.jsx(fl,{className:"h-4 w-4"}),j]})]}),e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-1",children:h}),e.jsx("p",{className:"text-sm text-muted-foreground",children:f}),w&&e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:w})]});return i?e.jsx("div",{className:"min-h-screen bg-background",style:{paddingTop:"80px"},children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[...Array(4)].map((f,h)=>e.jsxs("div",{className:"bg-card/50 rounded-xl p-6",children:[e.jsx("div",{className:"h-12 w-12 bg-muted rounded-lg mb-4"}),e.jsx("div",{className:"h-6 bg-muted rounded w-1/2 mb-2"}),e.jsx("div",{className:"h-4 bg-muted rounded w-3/4"})]},h))})]})})}):e.jsx("div",{className:"min-h-screen bg-background",style:{paddingTop:"80px"},children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"mb-8",children:e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Dashboard"}),e.jsx("p",{className:"text-muted-foreground",children:"Welcome back! Here's what's happening with your projects."})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("select",{value:n,onChange:f=>a(f.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"7d",children:"Last 7 days"}),e.jsx("option",{value:"30d",children:"Last 30 days"}),e.jsx("option",{value:"90d",children:"Last 90 days"})]})})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsx(x,{title:"Total Projects",value:l.totalProjects,icon:Me,change:l.totalProjects>0?"+2":void 0,changeType:"increase",description:l.totalProjects>0?"This week":"Create your first project"}),e.jsx(x,{title:"AI Generations",value:l.aiGenerations,icon:Pe,change:l.aiGenerations>0?"+12":void 0,changeType:"increase",description:l.aiGenerations>0?"This week":"Start generating code"}),e.jsx(x,{title:"Lines of Code",value:l.linesOfCode.toLocaleString(),icon:Q,change:l.linesOfCode>0?"+1.2k":void 0,changeType:"increase",description:l.linesOfCode>0?"This week":"Begin coding"}),e.jsx(x,{title:"Hours Spent",value:l.hoursSpent,icon:Qs,change:l.hoursSpent>0?"+5.2h":void 0,changeType:"increase",description:l.hoursSpent>0?"This week":"Start building"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:"lg:col-span-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[e.jsx(hl,{className:"h-5 w-5 text-white"}),"Recent Activity"]}),e.jsx("button",{className:"text-sm text-white hover:text-gray-300 transition-colors",children:"View all"})]}),e.jsx("div",{className:"space-y-4",children:c.length>0?c.map((f,h)=>{const k=f.icon;return e.jsxs(R.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},className:"flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors",children:[e.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center ${f.color.replace("text-","bg-").replace("-600","-100")}`,children:e.jsx(k,{className:`h-4 w-4 ${f.color}`})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:f.action}),e.jsx("p",{className:"text-xs text-muted-foreground",children:f.project})]}),e.jsx("span",{className:"text-xs text-muted-foreground",children:f.time})]},f.id)}):e.jsxs("div",{className:"text-center py-8",children:[e.jsx(Pe,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No activity yet"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Start creating projects to see your activity here."}),e.jsxs(oe,{to:"/ai-builder",className:"inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(Bt,{className:"h-4 w-4"}),"Create Project"]})]})})]}),e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[e.jsx($a,{className:"h-5 w-5 text-white"}),"Top Projects"]}),e.jsx("div",{className:"space-y-4",children:u.length>0?u.map((f,h)=>e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:h*.1},className:"p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"font-medium text-foreground text-sm",children:f.name}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[f.files," files"]})]}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("div",{className:"flex-1 bg-muted rounded-full h-2 mr-3",children:e.jsx("div",{className:"bg-white h-2 rounded-full transition-all duration-300",style:{width:`${f.progress}%`}})}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[f.progress,"%"]})]}),e.jsx("p",{className:"text-xs text-muted-foreground",children:f.lastModified})]},f.name)):e.jsxs("div",{className:"text-center py-8",children:[e.jsx(Me,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No projects yet"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Create your first project to get started."}),e.jsxs(oe,{to:"/ai-builder",className:"inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(Bt,{className:"h-4 w-4"}),"Create Project"]})]})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[e.jsx(Q,{className:"h-5 w-5 text-white"}),"Language Usage"]}),e.jsx("div",{className:"space-y-4",children:y.map((f,h)=>e.jsxs(R.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-4 h-4 rounded-full bg-muted flex items-center justify-center",children:e.jsx("div",{className:`w-2 h-2 rounded-full ${f.color}`})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-sm font-medium text-foreground",children:f.language}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[f.percentage,"%"]})]}),e.jsx("div",{className:"bg-muted rounded-full h-2",children:e.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${f.color}`,style:{width:`${f.percentage}%`}})}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[f.files," files"]})]})]},f.language))})]}),e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[e.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[e.jsx($t,{className:"h-5 w-5 text-white"}),"Quick Actions"]}),e.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{name:"New Project",icon:Me,color:"bg-white",href:"/ai-builder"},{name:"AI Builder",icon:Pe,color:"bg-purple-500",href:"/ai-builder"},{name:"View Projects",icon:ke,color:"bg-green-500",href:"/projects"},{name:"Settings",icon:Ot,color:"bg-orange-500",href:"/settings"}].map((f,h)=>e.jsxs(R.a,{href:f.href,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:h*.1},className:"flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-all duration-200 group",children:[e.jsx("div",{className:`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${f.color} group-hover:scale-105 transition-transform`,children:e.jsx(f.icon,{className:"h-6 w-6 text-white"})}),e.jsx("span",{className:"text-sm font-medium text-foreground text-center",children:f.name})]},f.name))})]})]}),e.jsx(lx,{})]})})},dx=()=>{const{user:s,signInWithGoogle:t,signInWithGitHub:r,loading:n}=kt(),a=Hr(),[i,o]=p.useState(!1);p.useEffect(()=>{s&&!n&&a("/dashboard")},[s,n,a]);const l=async()=>{try{o(!0),await t()}catch(c){console.error("Sign in error:",c)}finally{o(!1)}},d=async()=>{try{o(!0),await r()}catch(c){console.error("GitHub sign in error:",c),c.message.includes("already exists using Google")?alert("An account with this email already exists using Google. Please sign in with Google instead, or use a different email for GitHub."):c.message.includes("already exists using email/password")?alert("An account with this email already exists using email/password. Please sign in with your existing method instead."):c.message.includes("account with this email already exists")?alert("An account with this email already exists. Please sign in with your existing method instead."):c.message.includes("couldn't determine the sign-in method")?alert("An account with this email already exists. Please try signing in with Google first, then you can link your GitHub account."):c.message.includes("not properly configured")?alert("GitHub authentication is not properly configured. Please check Firebase Console settings or try signing in with Google instead."):alert("Failed to sign in with GitHub. Please try again.")}finally{o(!1)}};return n?e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:[e.jsxs("div",{className:"flex justify-between items-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg",children:e.jsx("span",{className:"text-white font-bold text-lg",children:"D"})}),e.jsx("span",{className:"font-bold text-xl text-slate-800 dark:text-white",children:"DreamBuild"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(R.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/login",className:"px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"Sign in"}),e.jsx(R.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/signup",className:"px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl",children:"Sign up"})]})]}),e.jsx("div",{className:"flex items-center justify-center p-6 -mt-20",children:e.jsx("div",{className:"w-full max-w-md",children:e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-2xl",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg",children:e.jsx("span",{className:"text-white font-bold text-2xl",children:"D"})}),e.jsx("h1",{className:"text-2xl font-bold mb-2 text-slate-800 dark:text-white",children:"Welcome back"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-sm",children:"Sign in to continue building amazing applications"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:l,disabled:i,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md",children:[i?e.jsx(sr,{className:"h-5 w-5 animate-spin text-blue-600"}):e.jsx("div",{className:"w-5 h-5 bg-gradient-to-r from-blue-500 to-red-500 rounded flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-bold",children:"G"})}),i?"Signing in...":"Continue with Google"]}),e.jsxs(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:d,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 shadow-sm hover:shadow-md",children:[e.jsx(he,{className:"h-5 w-5"}),"Continue with GitHub"]})]}),e.jsxs("div",{className:"relative my-8",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-slate-200 dark:border-slate-600"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"bg-white dark:bg-slate-800 px-4 text-slate-500 dark:text-slate-400 font-medium",children:"or"})})]}),e.jsx("div",{className:"text-center",children:e.jsxs(R.a,{whileHover:{scale:1.05},whileTap:{scale:.95},href:"/ai-builder",className:"inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold text-sm bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600",children:["Continue as Guest",e.jsx(or,{className:"h-4 w-4"})]})})]})})})]})},ux=()=>{const{user:s,signInWithGoogle:t,signInWithGitHub:r,loading:n}=kt(),a=Hr(),[i,o]=p.useState(!1);p.useEffect(()=>{s&&!n&&a("/dashboard")},[s,n,a]);const l=async()=>{try{o(!0),await t(),$.success("Welcome to DreamBuild!")}catch(c){console.error("Sign in error:",c),$.error("Failed to sign in. Please try again.")}finally{o(!1)}},d=async()=>{try{o(!0),await r(),$.success("Welcome to DreamBuild!")}catch(c){console.error("GitHub sign in error:",c),c.message.includes("already exists using Google")?$.error("An account with this email already exists using Google. Please sign in with Google instead, or use a different email for GitHub."):c.message.includes("already exists using email/password")?$.error("An account with this email already exists using email/password. Please sign in with your existing method instead."):c.message.includes("account with this email already exists")?$.error("An account with this email already exists. Please sign in with your existing method instead."):c.message.includes("couldn't determine the sign-in method")?$.error("An account with this email already exists. Please try signing in with Google first, then you can link your GitHub account."):c.message.includes("not properly configured")?$.error("GitHub authentication is not properly configured. Please check Firebase Console settings or try signing in with Google instead."):$.error("Failed to sign in with GitHub. Please try again.")}finally{o(!1)}};return n?e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),e.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsxs("div",{className:"flex justify-between items-center p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-primary-foreground font-bold text-sm",children:"D"})}),e.jsx("span",{className:"font-semibold text-foreground",children:"DreamBuild"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/login",className:"px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors",children:"Sign in"}),e.jsx(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/signup",className:"px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors",children:"Sign up"})]})]}),e.jsx("div",{className:"flex items-center justify-center p-4 -mt-16",children:e.jsx("div",{className:"w-full max-w-xs",children:e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},className:"bg-card border border-border rounded-xl p-6 shadow-sm",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h1",{className:"text-xl font-bold mb-1 text-foreground",children:"Join DreamBuild"}),e.jsx("p",{className:"text-muted-foreground text-xs",children:"Create your account"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(R.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:l,disabled:i,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background disabled:opacity-50 disabled:cursor-not-allowed",children:[i?e.jsx(sr,{className:"h-4 w-4 animate-spin text-primary"}):e.jsxs("svg",{className:"h-4 w-4",viewBox:"0 0 24 24",children:[e.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),e.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),e.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),i?"Creating account...":"Continue with Google"]}),e.jsxs(R.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:d,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background",children:[e.jsx(he,{className:"h-4 w-4"}),"Continue with GitHub"]})]}),e.jsxs("div",{className:"relative my-4",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-border"})}),e.jsx("div",{className:"relative flex justify-center text-xs",children:e.jsx("span",{className:"bg-card px-2 text-muted-foreground",children:"or"})})]}),e.jsx("div",{className:"text-center",children:e.jsxs(R.a,{whileHover:{scale:1.02},whileTap:{scale:.98},href:"/ai-builder",className:"inline-flex items-center gap-1 px-3 py-1.5 text-primary hover:text-primary-dark transition-colors font-medium text-xs",children:["Continue as Guest",e.jsx(or,{className:"h-3 w-3"})]})})]})})})]})},mx=()=>{const{currentProject:s,createNewProject:t,projects:r,switchProject:n,saveProject:a,deleteProject:i}=Ye(),[o,l]=p.useState(""),[d,c]=p.useState("all"),[u,m]=p.useState(!1),[b,y]=p.useState(""),[x,f]=p.useState("web"),[h,k]=p.useState(null);console.log("Projects page rendering, projects:",r);const j=r.map(C=>{var B;return{id:C.id,name:C.name,type:((B=C.config)==null?void 0:B.appType)||"web",description:C.description||"No description available",status:C.status||"active",lastModified:C.lastModified?new Date(C.lastModified).toISOString().split("T")[0]:new Date().toISOString().split("T")[0],files:Object.keys(C.files||{}).length,size:v(C),tags:w(C),preview:g(C),source:C.source||"dreambuild",githubData:C.githubData}}),v=C=>{const B=C.files||{};return`${(Object.values(B).reduce((N,M)=>N+((M==null?void 0:M.length)||0),0)/1024/1024).toFixed(1)} MB`},w=C=>{var T,S,N,M,H;const B=[];return(T=C.config)!=null&&T.language&&B.push(C.config.language),(S=C.config)!=null&&S.styling&&B.push(C.config.styling),(N=C.config)!=null&&N.database&&C.config.database!=="none"&&B.push(C.config.database),(M=C.config)!=null&&M.auth&&C.config.auth!=="none"&&B.push(C.config.auth),(H=C.githubData)!=null&&H.language&&B.push(C.githubData.language),[...new Set(B)].slice(0,4)},g=C=>{var S,N,M;return(N=(S=C.githubData)==null?void 0:S.owner)!=null&&N.avatar_url?C.githubData.owner.avatar_url:`https://via.placeholder.com/300x200/${{web:"007acc",mobile:"ffc107",api:"17a2b8",dashboard:"6f42c1",ecommerce:"28a745"}[(M=C.config)==null?void 0:M.appType]||"6c757d"}/ffffff?text=${encodeURIComponent(C.name)}`},P=[{id:"all",name:"All",icon:Me,count:j.length},{id:"web",name:"Web Apps",icon:ke,count:j.filter(C=>C.type==="web").length},{id:"mobile",name:"Mobile",icon:Q,count:j.filter(C=>C.type==="mobile").length},{id:"dashboard",name:"Dashboards",icon:Ot,count:j.filter(C=>C.type==="dashboard").length},{id:"api",name:"APIs",icon:Ot,count:j.filter(C=>C.type==="api").length},{id:"game",name:"Games",icon:Ie,count:j.filter(C=>C.type==="game").length},{id:"ecommerce",name:"E-commerce",icon:Ot,count:j.filter(C=>C.type==="ecommerce").length},{id:"completed",name:"Completed",icon:Ie,count:j.filter(C=>C.status==="completed").length}],I=j.filter(C=>{const B=o===""||C.name===o,T=d==="all"||C.type===d||C.status===d;return B&&T}),E=async()=>{if(!b.trim()){$.error("Please enter a project name");return}try{const C={id:null,name:b,files:{"index.html":"","style.css":"","script.js":""},activeFile:"index.html",config:{appType:x,language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date,description:`New ${x} project`,status:"active",source:"dreambuild"};await a(b),y(""),f("web"),m(!1),$.success("Project created successfully!")}catch(C){console.error("Failed to create project:",C),$.error("Failed to create project. Please try again.")}},O=async C=>{try{await i(C),k(null),$.success("Project deleted successfully!")}catch(B){console.error("Failed to delete project:",B),$.error("Failed to delete project. Please try again.")}},D=C=>{switch(C){case"active":return"bg-green-100 text-green-800 border-green-200";case"development":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"completed":return"bg-white/10 text-white border-white/20";default:return"bg-gray-100 text-gray-800 border-gray-200"}},_=C=>{switch(C){case"web":return ke;case"mobile":return Q;case"dashboard":return Ot;default:return Me}};try{return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:[e.jsxs("div",{className:"w-full px-1 sm:px-2 lg:px-3 py-8",children:[e.jsxs("div",{className:"flex flex-col items-center text-center mb-8",children:[e.jsxs("div",{className:"space-y-3 max-w-4xl",children:[e.jsx("h1",{className:"text-5xl font-bold text-gray-900",children:"Projects"}),e.jsx("p",{className:"text-lg text-gray-600",children:"Manage and organize your AI-generated projects"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-6 text-sm",children:[e.jsxs("span",{className:"flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-200",children:[e.jsx(Me,{className:"h-4 w-4"}),j.length," Total Projects"]}),e.jsxs("span",{className:"flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg border border-purple-200",children:[e.jsx(Ie,{className:"h-4 w-4"}),j.filter(C=>C.source==="github").length," GitHub"]})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs(R.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>m(!0),className:"flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 font-semibold text-sm border border-primary/20",children:[e.jsx(Bt,{className:"h-4 w-4"}),"Create New Project"]})})]}),e.jsx("div",{className:"flex flex-wrap items-center justify-end gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 p-2 rounded-2xl mb-8 shadow-sm overflow-x-auto ml-auto mr-4",children:P.map(C=>{const B=C.icon,T=d===C.id;return e.jsxs(R.button,{whileHover:{scale:1.02,y:-1},whileTap:{scale:.98},onClick:()=>c(C.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${T?"bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 border border-primary/20":"text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent hover:border-gray-200"}`,children:[e.jsx(B,{className:"h-4 w-4 flex-shrink-0"}),e.jsx("span",{className:"text-sm font-medium",children:C.name}),e.jsx("span",{className:`text-xs px-2 py-1 rounded-full font-semibold ${T?"bg-white/20 text-white":"bg-gray-100 text-gray-600"}`,children:C.count})]},C.id)})}),e.jsxs("div",{className:"flex items-center justify-center gap-3 mb-8 w-full",children:[e.jsxs("select",{value:o,onChange:C=>l(C.target.value),className:"w-full pl-4 pr-4 py-4 border border-gray-200 rounded-xl bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 text-gray-900 text-base shadow-sm hover:shadow-md focus:shadow-lg appearance-none cursor-pointer",children:[e.jsxs("option",{value:"",children:["All Projects (",j.length,")"]}),j.map(C=>e.jsxs("option",{value:C.name,children:[C.name," - ",C.type," - ",C.status]},C.id))]}),e.jsx(qe,{className:"h-6 w-6 text-gray-400 flex-shrink-0"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6",children:I.map((C,B)=>{const T=_(C.type);return e.jsxs(R.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:B*.1,duration:.3},whileHover:{y:-4,scale:1.02},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"font-semibold text-lg text-foreground truncate group-hover:text-primary transition-colors duration-200",children:C.name}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsxs("span",{className:"text-xs text-gray-500 font-medium capitalize",children:[C.type," Project"]}),e.jsx("span",{className:`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border ${D(C.status)}`,children:C.status})]})]}),e.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 border border-blue-200",children:e.jsx(T,{className:"h-6 w-6 text-blue-600"})})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0 ml-2",children:[e.jsxs(R.button,{whileHover:{scale:1.05,y:-1},whileTap:{scale:.95},className:"flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",onClick:()=>n(C.id),title:"Open Project",children:[e.jsx(or,{className:"h-3.5 w-3.5"}),"Open Project"]}),e.jsxs("button",{onClick:()=>k(h===C.id?null:C.id),className:"flex items-center gap-1.5 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800",title:"More Options",children:[e.jsx(xl,{className:"h-4 w-4"}),e.jsx("span",{className:"text-xs font-medium",children:"Menu"})]})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed",children:C.description}),e.jsxs("div",{className:"flex flex-wrap gap-1.5 mb-4",children:[C.tags.slice(0,3).map(S=>e.jsx("span",{className:"px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-lg border border-border/50",children:S},S)),C.tags.length>3&&e.jsxs("span",{className:"px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-lg border border-border/50",children:["+",C.tags.length-3]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-border/50",children:[e.jsxs("div",{className:"flex items-center gap-4 text-xs text-muted-foreground",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(ye,{className:"h-3.5 w-3.5"}),C.files," files"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(ht,{className:"h-3.5 w-3.5"}),C.lastModified]})]}),e.jsx("div",{className:"text-xs text-muted-foreground font-medium",children:C.size})]})]}),e.jsx(Ze,{children:h===C.id&&e.jsx(R.div,{initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},className:"absolute right-2 top-14 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-xl z-20 min-w-[180px] overflow-hidden",children:e.jsxs("div",{className:"p-1",children:[e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-700",children:[e.jsx(La,{className:"h-4 w-4 text-blue-500"}),"Edit Details"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-green-50 rounded-lg transition-colors text-gray-700 hover:text-green-700",children:[e.jsx(We,{className:"h-4 w-4 text-green-500"}),"Download"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-purple-50 rounded-lg transition-colors text-gray-700 hover:text-purple-700",children:[e.jsx(_a,{className:"h-4 w-4 text-purple-500"}),"Share Project"]}),e.jsx("div",{className:"h-px bg-gray-200 my-2 mx-2"}),e.jsxs("button",{onClick:()=>O(C.id),className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors hover:text-red-700",children:[e.jsx(Xs,{className:"h-4 w-4"}),"Delete Project"]})]})})})]},C.id)})}),I.length===0&&e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6",children:e.jsx(Me,{className:"h-12 w-12 text-primary"})}),e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-3",children:o||d!=="all"?"No projects found":"No projects yet"}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8 max-w-md mx-auto",children:o||d!=="all"?"Try adjusting your search or filter criteria to find what you're looking for.":"Start building amazing projects with AI-powered code generation!"}),e.jsxs(R.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>m(!0),className:"inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 font-semibold text-base border border-primary/20",children:[e.jsx(Bt,{className:"h-5 w-5"}),"Get Started - Create Your First Project"]})]})]}),e.jsx(Ze,{children:u&&e.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:()=>m(!1),children:e.jsxs(R.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4",onClick:C=>C.stopPropagation(),children:[e.jsx("h2",{className:"text-xl font-semibold text-foreground mb-4",children:"Create New Project"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Name"}),e.jsx("input",{type:"text",value:b,onChange:C=>y(C.target.value),placeholder:"Enter project name...",className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Type"}),e.jsxs("select",{value:x,onChange:C=>f(C.target.value),className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"web",children:"Web Application"}),e.jsx("option",{value:"mobile",children:"Mobile Application"}),e.jsx("option",{value:"dashboard",children:"Dashboard"})]})]})]}),e.jsxs("div",{className:"flex gap-3 mt-6",children:[e.jsx(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>m(!1),className:"flex-1 px-4 py-2.5 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium",children:"Cancel"}),e.jsx(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:E,className:"flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:"Create"})]})]})})}),h&&e.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>k(null)})]})}catch(C){return console.error("Error in Projects component:",C),e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600 mb-4",children:"Error Loading Projects"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"There was an error loading the projects page."}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Error: ",C.message]})]})})})}},px=()=>{var v,w;const{theme:s,setTheme:t}=Wr(),[r,n]=p.useState("appearance"),[a,i]=p.useState({appearance:{theme:s,fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),[o,l]=p.useState(!0),[d,c]=p.useState(!1);p.useEffect(()=>{const g=localStorage.getItem("dreambuild-settings");g&&i(JSON.parse(g)),l(!1)},[]),p.useEffect(()=>{c(!0)},[a]);const u=()=>{localStorage.setItem("dreambuild-settings",JSON.stringify(a)),c(!1),console.log("Settings saved successfully!")},m=()=>{i({appearance:{theme:"system",fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),console.log("Settings reset to defaults!")},b=()=>{const g=JSON.stringify(a,null,2),P=new Blob([g],{type:"application/json"}),I=URL.createObjectURL(P),E=document.createElement("a");E.href=I,E.download="dreambuild-settings.json",E.click(),URL.revokeObjectURL(I),console.log("Settings exported!")},y=g=>{const P=g.target.files[0];if(P){const I=new FileReader;I.onload=E=>{try{const O=JSON.parse(E.target.result);i(O),console.log("Settings imported successfully!")}catch{console.error("Invalid settings file!")}},I.readAsText(P)}},x=(g,P,I)=>{i(E=>({...E,[g]:{...E[g],[P]:I}})),g==="appearance"&&P==="theme"&&t(I)},f=[{id:"appearance",name:"Appearance",icon:Ba},{id:"editor",name:"Editor",icon:Q},{id:"ai",name:"AI Settings",icon:Pe},{id:"notifications",name:"Notifications",icon:bl},{id:"privacy",name:"Privacy",icon:tn}],h=({title:g,description:P,children:I,warning:E})=>e.jsxs("div",{className:"flex items-start justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("h3",{className:"font-medium text-foreground",children:g}),E&&e.jsx(Ma,{className:"h-4 w-4 text-yellow-500",title:E})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:P})]}),e.jsx("div",{className:"ml-4",children:I})]}),k=({checked:g,onChange:P,disabled:I=!1})=>e.jsx("button",{onClick:()=>P(!g),disabled:I,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${g?"bg-gray-700":"bg-muted"} ${I?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${g?"translate-x-6":"translate-x-1"}`})}),j=()=>{switch(r){case"appearance":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Theme",description:"Choose your preferred color scheme",children:e.jsxs("select",{value:a.appearance.theme,onChange:g=>x("appearance","theme",g.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"light",children:"Light Theme"}),e.jsx("option",{value:"dark",children:"Dark Theme"}),e.jsx("option",{value:"system",children:"System Theme"}),e.jsx("option",{value:"blue",children:"Blue Theme"}),e.jsx("option",{value:"purple",children:"Purple Theme"}),e.jsx("option",{value:"green",children:"Green Theme"}),e.jsx("option",{value:"orange",children:"Orange Theme"}),e.jsx("option",{value:"red",children:"Red Theme"}),e.jsx("option",{value:"pink",children:"Pink Theme"}),e.jsx("option",{value:"cyan",children:"Cyan Theme"}),e.jsx("option",{value:"amber",children:"Amber Theme"}),e.jsx("option",{value:"emerald",children:"Emerald Theme"})]})}),e.jsx(h,{title:"Font Size",description:"Adjust the text size throughout the interface",children:e.jsxs("select",{value:a.appearance.fontSize,onChange:g=>x("appearance","fontSize",g.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"small",children:"Small"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"large",children:"Large"})]})}),e.jsx(h,{title:"Font Family",description:"Choose the font family for the editor",children:e.jsxs("select",{value:a.appearance.fontFamily,onChange:g=>x("appearance","fontFamily",g.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"system",children:"System Default"}),e.jsx("option",{value:"mono",children:"Monospace"}),e.jsx("option",{value:"sans",children:"Sans Serif"}),e.jsx("option",{value:"serif",children:"Serif"})]})}),e.jsx(h,{title:"Animations",description:"Enable smooth animations and transitions",children:e.jsx(k,{checked:a.appearance.animations,onChange:g=>x("appearance","animations",g)})}),e.jsx(h,{title:"Compact Mode",description:"Reduce spacing for a more compact interface",children:e.jsx(k,{checked:a.appearance.compactMode,onChange:g=>x("appearance","compactMode",g)})})]});case"editor":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Tab Size",description:"Number of spaces for indentation",children:e.jsxs("select",{value:a.editor.tabSize,onChange:g=>x("editor","tabSize",parseInt(g.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:2,children:"2 spaces"}),e.jsx("option",{value:4,children:"4 spaces"}),e.jsx("option",{value:8,children:"8 spaces"})]})}),e.jsx(h,{title:"Word Wrap",description:"Wrap long lines in the editor",children:e.jsx(k,{checked:a.editor.wordWrap,onChange:g=>x("editor","wordWrap",g)})}),e.jsx(h,{title:"Minimap",description:"Show a minimap of your code",children:e.jsx(k,{checked:a.editor.minimap,onChange:g=>x("editor","minimap",g)})}),e.jsx(h,{title:"Line Numbers",description:"Show line numbers in the editor",children:e.jsx(k,{checked:a.editor.lineNumbers,onChange:g=>x("editor","lineNumbers",g)})}),e.jsx(h,{title:"Auto Save",description:"Automatically save files as you type",children:e.jsx(k,{checked:a.editor.autoSave,onChange:g=>x("editor","autoSave",g)})}),e.jsx(h,{title:"Format on Save",description:"Automatically format code when saving",children:e.jsx(k,{checked:a.editor.formatOnSave,onChange:g=>x("editor","formatOnSave",g)})}),e.jsx(h,{title:"Auto Complete",description:"Enable intelligent code completion",children:e.jsx(k,{checked:a.editor.autoComplete,onChange:g=>x("editor","autoComplete",g)})})]});case"ai":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Default AI Model",description:"Choose your preferred AI model for code generation",children:e.jsxs("select",{value:a.ai.defaultModel,onChange:g=>x("ai","defaultModel",g.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:"codellama-7b",children:"CodeLlama 7B"}),e.jsx("option",{value:"codellama-13b",children:"CodeLlama 13B"}),e.jsx("option",{value:"starcoder-15b",children:"StarCoder 15B"}),e.jsx("option",{value:"deepseek-coder",children:"DeepSeek Coder"}),e.jsx("option",{value:"wizardcoder-7b",children:"WizardCoder 7B"})]})}),e.jsx(h,{title:"Temperature",description:"Controls randomness in AI responses (0.0 = deterministic, 1.0 = creative)",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:a.ai.temperature,onChange:g=>x("ai","temperature",parseFloat(g.target.value)),className:"w-24"}),e.jsx("span",{className:"text-sm text-muted-foreground w-8",children:a.ai.temperature})]})}),e.jsx(h,{title:"Max Tokens",description:"Maximum number of tokens in AI responses",children:e.jsxs("select",{value:a.ai.maxTokens,onChange:g=>x("ai","maxTokens",parseInt(g.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[e.jsx("option",{value:1e3,children:"1,000"}),e.jsx("option",{value:2e3,children:"2,000"}),e.jsx("option",{value:4e3,children:"4,000"}),e.jsx("option",{value:8e3,children:"8,000"})]})}),e.jsx(h,{title:"Auto Generate",description:"Automatically generate code suggestions as you type",children:e.jsx(k,{checked:a.ai.autoGenerate,onChange:g=>x("ai","autoGenerate",g)})}),e.jsx(h,{title:"AI Suggestions",description:"Show contextual AI suggestions in the editor",children:e.jsx(k,{checked:a.ai.suggestions,onChange:g=>x("ai","suggestions",g)})})]});case"notifications":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Project Updates",description:"Get notified when projects are updated",children:e.jsx(k,{checked:a.notifications.projectUpdates,onChange:g=>x("notifications","projectUpdates",g)})}),e.jsx(h,{title:"AI Completions",description:"Get notified when AI completes code generation",children:e.jsx(k,{checked:a.notifications.aiCompletions,onChange:g=>x("notifications","aiCompletions",g)})}),e.jsx(h,{title:"Error Notifications",description:"Get notified about errors and issues",children:e.jsx(k,{checked:a.notifications.errors,onChange:g=>x("notifications","errors",g)})}),e.jsx(h,{title:"Sound Notifications",description:"Play sounds for notifications",children:e.jsx(k,{checked:a.notifications.sound,onChange:g=>x("notifications","sound",g)})}),e.jsx(h,{title:"Email Notifications",description:"Receive notifications via email",children:e.jsx(k,{checked:a.notifications.email,onChange:g=>x("notifications","email",g)})})]});case"privacy":return e.jsxs("div",{className:"space-y-1",children:[e.jsx(h,{title:"Analytics",description:"Help improve DreamBuild by sharing anonymous usage data",children:e.jsx(k,{checked:a.privacy.analytics,onChange:g=>x("privacy","analytics",g)})}),e.jsx(h,{title:"Crash Reports",description:"Automatically send crash reports to help fix bugs",children:e.jsx(k,{checked:a.privacy.crashReports,onChange:g=>x("privacy","crashReports",g)})}),e.jsx(h,{title:"Telemetry",description:"Share performance and usage telemetry",warning:"This may include personal information",children:e.jsx(k,{checked:a.privacy.telemetry,onChange:g=>x("privacy","telemetry",g)})}),e.jsx(h,{title:"Share Usage Statistics",description:"Share anonymous usage statistics with the community",children:e.jsx(k,{checked:a.privacy.shareUsage,onChange:g=>x("privacy","shareUsage",g)})})]});default:return null}};return o?e.jsx("div",{className:"min-h-screen bg-background",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[e.jsx("div",{className:"lg:col-span-1",children:e.jsx("div",{className:"space-y-3",children:[...Array(5)].map((g,P)=>e.jsx("div",{className:"h-12 bg-muted rounded"},P))})}),e.jsx("div",{className:"lg:col-span-3",children:e.jsx("div",{className:"bg-card/50 rounded-xl p-6",children:e.jsx("div",{className:"space-y-4",children:[...Array(6)].map((g,P)=>e.jsx("div",{className:"h-16 bg-muted rounded"},P))})})})]})]})})}):e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"mb-8",children:e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Settings"}),e.jsx("p",{className:"text-muted-foreground",children:"Customize your DreamBuild experience and preferences"})]}),e.jsx("div",{className:"flex items-center gap-2",children:d&&e.jsxs(R.button,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},onClick:u,className:"flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200",children:[e.jsx(Ra,{className:"h-4 w-4"}),"Save Changes"]})})]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"lg:col-span-1",children:[e.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:e.jsx("nav",{className:"space-y-2",children:f.map(g=>{const P=g.icon;return e.jsxs("button",{onClick:()=>n(g.id),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${r===g.id?"bg-gray-700 text-white shadow-sm":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[e.jsx(P,{className:"h-4 w-4"}),g.name]},g.id)})})}),e.jsxs("div",{className:"mt-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-3",children:"Data Management"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("button",{onClick:b,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors",children:[e.jsx(We,{className:"h-4 w-4"}),"Export Settings"]}),e.jsxs("label",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors cursor-pointer",children:[e.jsx(Oa,{className:"h-4 w-4"}),"Import Settings",e.jsx("input",{type:"file",accept:".json",onChange:y,className:"hidden"})]}),e.jsxs("button",{onClick:m,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:[e.jsx(_t,{className:"h-4 w-4"}),"Reset to Defaults"]})]})]})]}),e.jsx("div",{className:"lg:col-span-3",children:e.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden",children:[e.jsx("div",{className:"p-6 border-b border-border/50",children:e.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[ze.createElement((v=f.find(g=>g.id===r))==null?void 0:v.icon,{className:"h-5 w-5 text-white"}),(w=f.find(g=>g.id===r))==null?void 0:w.name]})}),e.jsx("div",{className:"divide-y divide-border/50",children:j()})]})})]})]})})},hx=()=>{const[s,t]=p.useState(""),[r,n]=p.useState("getting-started"),a=[{id:"getting-started",title:"Getting Started",icon:$t,articles:[{title:"Quick Start Guide",description:"Get up and running in 5 minutes"},{title:"Installation",description:"Install DreamBuild on your system"},{title:"First Project",description:"Create your first AI-generated project"},{title:"Basic Concepts",description:"Understanding the DreamBuild workflow"}]},{id:"ai-features",title:"AI Features",icon:Q,articles:[{title:"Code Generation",description:"Generate code with AI assistance"},{title:"Local AI Setup",description:"Set up Ollama for offline AI"},{title:"Template System",description:"Use pre-built project templates"},{title:"AI Models",description:"Available AI models and capabilities"}]},{id:"api-reference",title:"API Reference",icon:Ir,articles:[{title:"REST API",description:"Complete API documentation"},{title:"WebSocket API",description:"Real-time communication"},{title:"Authentication",description:"API authentication methods"},{title:"Rate Limits",description:"API usage limits and quotas"}]},{id:"deployment",title:"Deployment",icon:ke,articles:[{title:"Firebase Hosting",description:"Deploy to Firebase"},{title:"GitHub Pages",description:"Deploy to GitHub Pages"},{title:"Custom Domain",description:"Set up custom domains"},{title:"CI/CD Pipeline",description:"Automated deployment workflows"}]}],i=[{title:"API Documentation",href:"#",icon:Q},{title:"GitHub Repository",href:"https://github.com/ronb12/DreamBuild",icon:he},{title:"Community Forum",href:"#",icon:ke},{title:"Video Tutorials",href:"#",icon:rt}];return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(xt,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Documentation"}),e.jsx("p",{className:"text-muted-foreground",children:"Complete guides and API references for DreamBuild"})]})]}),e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(qe,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search documentation...",value:s,onChange:o=>t(o.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[e.jsx("div",{className:"lg:col-span-1",children:e.jsxs("div",{className:"sticky top-8 space-y-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Sections"}),a.map(o=>{const l=o.icon;return e.jsxs("button",{onClick:()=>n(o.id),className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${r===o.id?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[e.jsx(l,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm font-medium",children:o.title})]},o.id)}),e.jsxs("div",{className:"mt-8 pt-6 border-t border-border",children:[e.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Quick Links"}),e.jsx("div",{className:"space-y-2",children:i.map(o=>{const l=o.icon;return e.jsxs("a",{href:o.href,target:o.href.startsWith("http")?"_blank":void 0,rel:o.href.startsWith("http")?"noopener noreferrer":void 0,className:"flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors",children:[e.jsx(l,{className:"h-4 w-4"}),e.jsx("span",{children:o.title}),o.href.startsWith("http")&&e.jsx(rt,{className:"h-3 w-3 ml-auto"})]},o.title)})})]})]})}),e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("div",{className:"bg-card border border-border rounded-xl p-6",children:a.map(o=>{const l=o.icon;return e.jsxs("div",{className:r===o.id?"block":"hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:e.jsx(l,{className:"h-5 w-5 text-primary"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-foreground",children:o.title}),e.jsxs("p",{className:"text-muted-foreground",children:["Learn about ",o.title.toLowerCase()]})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:o.articles.map((d,c)=>e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:c*.1},className:"p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer group",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors mb-2",children:d.title}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:d.description})]}),e.jsx(yl,{className:"h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"})]})},d.title))})]},o.id)})}),r==="getting-started"&&e.jsxs("div",{className:"mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground mb-4",children:"Ready to get started?"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Follow our quick start guide to create your first AI-generated project in minutes."}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx($t,{className:"h-4 w-4"}),"Quick Start Guide"]}),e.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(We,{className:"h-4 w-4"}),"Download PDF"]})]})]})]})]})]})})},gx=()=>{const[s,t]=p.useState(""),[r,n]=p.useState("all"),[a,i]=p.useState("grid"),o=[{id:"all",name:"All Examples",count:24},{id:"web",name:"Web Apps",count:8},{id:"mobile",name:"Mobile Apps",count:6},{id:"api",name:"APIs",count:5},{id:"dashboard",name:"Dashboards",count:5}],d=[{id:1,title:"E-commerce Store",description:"Full-featured online store with React, Node.js, and Stripe integration",category:"web",difficulty:"Intermediate",tags:["React","Node.js","Stripe","MongoDB"],stars:156,language:"JavaScript",preview:"https://via.placeholder.com/400x250/2563eb/ffffff?text=E-commerce+Store",github:"https://github.com/example/ecommerce-store"},{id:2,title:"Task Management App",description:"Collaborative task management with real-time updates and team features",category:"web",difficulty:"Beginner",tags:["Vue.js","Firebase","Real-time"],stars:89,language:"JavaScript",preview:"https://via.placeholder.com/400x250/10b981/ffffff?text=Task+Manager",github:"https://github.com/example/task-manager"},{id:3,title:"Fitness Tracker",description:"Mobile app for tracking workouts, nutrition, and fitness goals",category:"mobile",difficulty:"Intermediate",tags:["React Native","GraphQL","Health API"],stars:234,language:"TypeScript",preview:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Fitness+Tracker",github:"https://github.com/example/fitness-tracker"},{id:4,title:"Analytics Dashboard",description:"Business intelligence dashboard with charts, metrics, and reporting",category:"dashboard",difficulty:"Advanced",tags:["D3.js","Python","PostgreSQL"],stars:312,language:"Python",preview:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Analytics+Dashboard",github:"https://github.com/example/analytics-dashboard"},{id:5,title:"REST API Template",description:"Production-ready REST API with authentication, validation, and documentation",category:"api",difficulty:"Intermediate",tags:["Express.js","JWT","Swagger"],stars:178,language:"JavaScript",preview:"https://via.placeholder.com/400x250/ef4444/ffffff?text=REST+API",github:"https://github.com/example/rest-api-template"},{id:6,title:"Portfolio Website",description:"Modern portfolio website with animations, blog, and contact form",category:"web",difficulty:"Beginner",tags:["Next.js","Tailwind","Framer Motion"],stars:67,language:"TypeScript",preview:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Portfolio",github:"https://github.com/example/portfolio-website"},{id:7,title:"Social Media App",description:"Instagram-like social media app with posts, stories, and messaging",category:"mobile",difficulty:"Advanced",tags:["Flutter","Firebase","Real-time"],stars:445,language:"Dart",preview:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Social+App",github:"https://github.com/example/social-media-app"},{id:8,title:"GraphQL API",description:"Modern GraphQL API with subscriptions, caching, and real-time updates",category:"api",difficulty:"Advanced",tags:["GraphQL","Apollo","Redis"],stars:298,language:"TypeScript",preview:"https://via.placeholder.com/400x250/84cc16/ffffff?text=GraphQL+API",github:"https://github.com/example/graphql-api"}].filter(m=>{const b=m.title.toLowerCase().includes(s.toLowerCase())||m.description.toLowerCase().includes(s.toLowerCase())||m.tags.some(x=>x.toLowerCase().includes(s.toLowerCase())),y=r==="all"||m.category===r;return b&&y}),c=m=>{switch(m){case"Beginner":return"bg-green-100 text-green-800 border-green-200";case"Intermediate":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"Advanced":return"bg-red-100 text-red-800 border-red-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}},u=m=>{switch(m){case"web":return ke;case"mobile":return $r;case"api":return tt;case"dashboard":return ye;default:return ds}};return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(ds,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Examples"}),e.jsx("p",{className:"text-muted-foreground",children:"Explore real-world projects and code examples"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(qe,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search examples...",value:s,onChange:m=>t(m.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Br,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("select",{value:r,onChange:m=>n(m.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:o.map(m=>e.jsxs("option",{value:m.id,children:[m.name," (",m.count,")"]},m.id))})]})]}),e.jsxs("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-lg",children:[e.jsx("button",{onClick:()=>i("grid"),className:`p-2 rounded-md transition-colors ${a==="grid"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:e.jsx(Grid3X3,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>i("list"),className:`p-2 rounded-md transition-colors ${a==="list"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:e.jsx(en,{className:"h-4 w-4"})})]})]})]}),e.jsx("div",{className:a==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"space-y-4",children:d.map((m,b)=>{const y=u(m.category);return e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:b*.1},className:`bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group ${a==="list"?"flex":""}`,children:[e.jsxs("div",{className:`relative ${a==="list"?"w-48 h-32":"h-48"} bg-muted/50`,children:[e.jsx("img",{src:m.preview,alt:m.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute top-3 right-3 flex gap-2",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${c(m.difficulty)}`,children:m.difficulty})}),e.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(R.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-primary text-primary-foreground rounded-lg shadow-lg",title:"Run Example",children:e.jsx(bt,{className:"h-4 w-4"})}),e.jsx(R.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-white text-gray-900 rounded-lg shadow-lg",title:"Copy Code",children:e.jsx(at,{className:"h-4 w-4"})})]})})]}),e.jsxs("div",{className:`p-4 ${a==="list"?"flex-1":""}`,children:[e.jsxs("div",{className:"flex items-start justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:e.jsx(y,{className:"h-4 w-4 text-primary"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:m.title}),e.jsx("p",{className:"text-sm text-muted-foreground",children:m.language})]})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(Ie,{className:"h-4 w-4"}),e.jsx("span",{children:m.stars})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:m.description}),e.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:m.tags.map(x=>e.jsx("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:x},x))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm",children:[e.jsx(bt,{className:"h-4 w-4"}),"Run"]}),e.jsxs("a",{href:m.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[e.jsx(he,{className:"h-4 w-4"}),"Code"]}),e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[e.jsx(We,{className:"h-4 w-4"}),"Download"]})]})]})]},m.id)})}),d.length===0&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(ds,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No examples found"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),e.jsx("button",{onClick:()=>{t(""),n("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),e.jsxs("div",{className:"mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Have a great example to share?"}),e.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Share your projects with the DreamBuild community and help other developers learn and grow."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(he,{className:"h-5 w-5"}),"Submit Example"]}),e.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(rt,{className:"h-5 w-5"}),"View Guidelines"]})]})]})]})})},fx=()=>{const[s,t]=p.useState("discussions"),[r,n]=p.useState(""),a=[{id:"discussions",name:"Discussions",count:156,icon:Er},{id:"projects",name:"Showcase",count:89,icon:Q},{id:"events",name:"Events",count:12,icon:ht},{id:"resources",name:"Resources",count:45,icon:Ds}],i=[{id:1,title:"How to set up Ollama for local AI development?",author:"Alex Chen",avatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=AC",time:"2 hours ago",category:"Getting Started",replies:12,likes:24,isPinned:!0,tags:["ollama","local-ai","setup"]},{id:2,title:"Building a React Native app with DreamBuild - Tips and tricks",author:"Sarah Johnson",avatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SJ",time:"4 hours ago",category:"Mobile Development",replies:8,likes:18,isPinned:!1,tags:["react-native","mobile","tips"]},{id:3,title:"Share your DreamBuild projects - Monthly showcase",author:"Community Team",avatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=CT",time:"1 day ago",category:"Showcase",replies:34,likes:67,isPinned:!0,tags:["showcase","projects","monthly"]},{id:4,title:"API rate limits and best practices",author:"Mike Rodriguez",avatar:"https://via.placeholder.com/40x40/8b5cf6/ffffff?text=MR",time:"2 days ago",category:"API",replies:15,likes:31,isPinned:!1,tags:["api","rate-limits","best-practices"]},{id:5,title:"Deploying to Firebase vs GitHub Pages - Pros and cons",author:"Emma Wilson",avatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=EW",time:"3 days ago",category:"Deployment",replies:22,likes:45,isPinned:!1,tags:["deployment","firebase","github-pages"]}],o=[{id:1,title:"DreamBuild Live Q&A Session",date:"2024-01-25",time:"2:00 PM EST",type:"Live Stream",attendees:156,description:"Join our monthly Q&A session with the DreamBuild team"},{id:2,title:"AI Development Workshop",date:"2024-01-30",time:"10:00 AM EST",type:"Workshop",attendees:89,description:"Learn advanced AI development techniques with DreamBuild"},{id:3,title:"Community Showcase",date:"2024-02-05",time:"6:00 PM EST",type:"Presentation",attendees:234,description:"Featured projects from our amazing community members"}],l=[{label:"Active Members",value:"2,847",icon:Ge},{label:"Discussions",value:"1,234",icon:Er},{label:"Projects Shared",value:"567",icon:Q},{label:"Events This Month",value:"8",icon:ht}],d=i.filter(c=>c.title.toLowerCase().includes(r.toLowerCase())||c.category.toLowerCase().includes(r.toLowerCase())||c.tags.some(u=>u.toLowerCase().includes(r.toLowerCase())));return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(Ge,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Community"}),e.jsx("p",{className:"text-muted-foreground",children:"Connect with developers, share projects, and get help"})]})]}),e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(qe,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search discussions...",value:r,onChange:c=>n(c.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:l.map((c,u)=>{const m=c.icon;return e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:"bg-card border border-border rounded-xl p-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",children:e.jsx(m,{className:"h-5 w-5 text-primary"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-2xl font-bold text-foreground",children:c.value}),e.jsx("p",{className:"text-sm text-muted-foreground",children:c.label})]})]})},c.label)})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-xl mb-6",children:a.map(c=>{const u=c.icon;return e.jsxs("button",{onClick:()=>t(c.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${s===c.id?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground hover:text-foreground hover:bg-background/50"}`,children:[e.jsx(u,{className:"h-4 w-4"}),e.jsx("span",{children:c.name}),e.jsx("span",{className:"px-2 py-1 text-xs bg-muted/50 rounded-full",children:c.count})]},c.id)})}),s==="discussions"&&e.jsx("div",{className:"space-y-4",children:d.map((c,u)=>e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:`bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200 ${c.isPinned?"border-primary/20 bg-primary/5":""}`,children:[c.isPinned&&e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx($t,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm font-medium text-primary",children:"Pinned"})]}),e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("img",{src:c.avatar,alt:c.author,className:"w-10 h-10 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-foreground hover:text-primary transition-colors cursor-pointer mb-2",children:c.title}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-3",children:[e.jsxs("span",{children:["by ",c.author]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:c.time}),e.jsx("span",{children:"•"}),e.jsx("span",{className:"px-2 py-1 bg-muted rounded-md",children:c.category})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(Ps,{className:"h-4 w-4"}),e.jsx("span",{children:c.replies})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(gt,{className:"h-4 w-4"}),e.jsx("span",{children:c.likes})]}),e.jsx("div",{className:"flex gap-1",children:c.tags.map(m=>e.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",m]},m))})]})]})]})]},c.id))}),s==="projects"&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(Q,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Project Showcase"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Featured projects from our community will appear here"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Submit Your Project"})]}),s==="events"&&e.jsx("div",{className:"space-y-4",children:o.map((c,u)=>e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:"bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200",children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-2",children:c.title}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:c.description}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(ht,{className:"h-4 w-4"}),e.jsx("span",{children:c.date})]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:c.time}),e.jsx("span",{children:"•"}),e.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded-md",children:c.type}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[c.attendees," attendees"]})]})]}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Join Event"})]})},c.id))}),s==="resources"&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(Ds,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Community Resources"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Curated resources and learning materials will appear here"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Suggest Resource"})]})]}),e.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[e.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Quick Actions"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[e.jsx(Bt,{className:"h-4 w-4"}),"Start Discussion"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Q,{className:"h-4 w-4"}),"Share Project"]}),e.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(ht,{className:"h-4 w-4"}),"Create Event"]})]})]}),e.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Join Our Community"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(he,{className:"h-4 w-4"}),e.jsx("span",{children:"GitHub"})]}),e.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Ys,{className:"h-4 w-4"}),e.jsx("span",{children:"Twitter"})]}),e.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[e.jsx(Mt,{className:"h-4 w-4"}),e.jsx("span",{children:"Newsletter"})]})]})]}),e.jsxs("div",{className:"bg-primary/5 border border-primary/20 rounded-xl p-6",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Community Guidelines"}),e.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[e.jsx("li",{children:"• Be respectful and inclusive"}),e.jsx("li",{children:"• Share helpful and relevant content"}),e.jsx("li",{children:"• Follow our code of conduct"}),e.jsx("li",{children:"• Help others learn and grow"})]})]})]})]})]})})},xx=()=>e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[e.jsx("div",{className:"text-center mb-16",children:e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg",children:e.jsx("span",{className:"text-white font-bold text-3xl",children:"D"})}),e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6",children:["About ",e.jsx("span",{className:"text-blue-600",children:"DreamBuild"})]}),e.jsx("p",{className:"text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed",children:"DreamBuild is a revolutionary AI-powered development platform that transforms your ideas into code. Simply describe what you want to build, and watch as DreamBuild generates complete applications for you."})]})}),e.jsx("div",{className:"mb-16",children:e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"What We Do"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"AI-Powered Development"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Transform your ideas into code using cutting-edge AI models. Simply describe what you want to build, and DreamBuild generates complete, working applications for you."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Multi-Language Support"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Build applications in popular programming languages including React, Vue, Python, JavaScript, HTML/CSS, and many more. Choose your preferred technology stack."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Instant Deployment"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Deploy your applications instantly to Firebase Hosting and GitHub Pages. No complex configuration required - just click and deploy."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Local AI Integration"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Use local AI models for complete privacy and control. No external API keys required - run everything on your own machine for maximum security."})]})]})]})}),e.jsx("div",{className:"mb-16",children:e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"Our Mission"}),e.jsx("p",{className:"text-lg text-slate-600 dark:text-slate-400 text-center leading-relaxed",children:"To democratize software development by making AI-powered coding tools accessible to everyone. Whether you're an experienced developer or just getting started, DreamBuild empowers you to turn your ideas into reality with the power of artificial intelligence."})]})}),e.jsx("div",{className:"mb-16",children:e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"About Bradley Virtual Solutions"}),e.jsxs("div",{className:"text-center",children:[e.jsxs("p",{className:"text-slate-600 dark:text-slate-400 mb-4",children:["DreamBuild is developed by ",e.jsx("strong",{className:"text-slate-800 dark:text-white",children:"Bradley Virtual Solutions, LLC"}),", a company dedicated to creating innovative AI-powered development tools."]}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Founded by Ronell Bradley, a full-stack developer passionate about AI and web development, we're committed to making advanced development tools accessible to everyone."})]})]})}),e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center",children:e.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl",children:[e.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Building?"}),e.jsx("p",{className:"text-blue-100 mb-6 max-w-xl mx-auto",children:"Start your journey with DreamBuild today and experience the future of AI-powered development."}),e.jsxs(R.a,{href:"/ai-builder",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg",children:[e.jsx(Q,{className:"h-5 w-5"}),"Start Building Now",e.jsx(or,{className:"h-4 w-4"})]})]})})]})}),bx=()=>{const[s,t]=p.useState(""),[r,n]=p.useState("all"),a=[{id:"all",name:"All Posts",count:24},{id:"tutorials",name:"Tutorials",count:8},{id:"ai",name:"AI & ML",count:6},{id:"development",name:"Development",count:5},{id:"company",name:"Company",count:5}],i={title:"Getting Started with Local AI Development: A Complete Guide",excerpt:"Learn how to set up Ollama, integrate local AI models, and build your first AI-powered application with DreamBuild.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-20",readTime:"8 min read",category:"tutorials",tags:["ai","ollama","tutorial","getting-started"],image:"https://via.placeholder.com/600x300/2563eb/ffffff?text=Local+AI+Guide",likes:156,comments:23},l=[{id:2,title:"Building a React Native App with AI Code Generation",excerpt:"Discover how to leverage DreamBuild's AI capabilities to create a mobile app from scratch.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-18",readTime:"6 min read",category:"tutorials",tags:["react-native","mobile","ai"],featured:!1,image:"https://via.placeholder.com/400x250/10b981/ffffff?text=React+Native",likes:89,comments:12,views:1523},{id:3,title:"The Future of AI-Powered Development Tools",excerpt:"Exploring emerging trends and technologies that will shape the future of software development.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-15",readTime:"10 min read",category:"ai",tags:["ai","future","technology","trends"],featured:!1,image:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Future+AI",likes:234,comments:34,views:4567},{id:4,title:"DreamBuild 2.0: What's New and Exciting",excerpt:"Announcing the latest features and improvements in DreamBuild 2.0, including enhanced AI capabilities.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-12",readTime:"5 min read",category:"company",tags:["release","features","announcement"],featured:!1,image:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=DreamBuild+2.0",likes:167,comments:28,views:3421},{id:5,title:"Best Practices for AI Code Generation",excerpt:"Learn how to write effective prompts and get the best results from AI code generation tools.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-10",readTime:"7 min read",category:"development",tags:["best-practices","prompts","ai","tips"],featured:!1,image:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Best+Practices",likes:145,comments:19,views:2890},{id:6,title:"Setting Up Your Development Environment for AI",excerpt:"A comprehensive guide to configuring your development environment for optimal AI-assisted coding.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-08",readTime:"9 min read",category:"tutorials",tags:["setup","environment","development","tools"],featured:!1,image:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Dev+Environment",likes:98,comments:15,views:1876},{id:7,title:"Community Spotlight: Amazing Projects Built with DreamBuild",excerpt:"Highlighting some of the incredible projects our community has created using DreamBuild.",author:"Community Team",authorAvatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=CT",publishDate:"2024-01-05",readTime:"6 min read",category:"company",tags:["community","showcase","projects","spotlight"],featured:!1,image:"https://via.placeholder.com/400x250/84cc16/ffffff?text=Community+Projects",likes:203,comments:41,views:5234}].filter(u=>{const m=u.title.toLowerCase().includes(s.toLowerCase())||u.excerpt.toLowerCase().includes(s.toLowerCase())||u.tags.some(y=>y.toLowerCase().includes(s.toLowerCase())),b=r==="all"||u.category===r;return m&&b}),d=u=>{switch(u){case"tutorials":return Q;case"ai":return $t;case"development":return ke;case"company":return Ia;default:return xt}},c=u=>{switch(u){case"tutorials":return"bg-blue-100 text-blue-800 border-blue-200";case"ai":return"bg-purple-100 text-purple-800 border-purple-200";case"development":return"bg-green-100 text-green-800 border-green-200";case"company":return"bg-orange-100 text-orange-800 border-orange-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}};return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:e.jsx(xt,{className:"h-6 w-6 text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Blog"}),e.jsx("p",{className:"text-muted-foreground",children:"Insights, tutorials, and updates from the DreamBuild team"})]})]}),e.jsx("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[e.jsxs("div",{className:"relative max-w-md",children:[e.jsx(qe,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"Search blog posts...",value:s,onChange:u=>t(u.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Br,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("select",{value:r,onChange:u=>n(u.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:a.map(u=>e.jsxs("option",{value:u.id,children:[u.name," (",u.count,")"]},u.id))})]})]})})]}),e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-12",children:e.jsx("div",{className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200",children:e.jsxs("div",{className:"md:flex",children:[e.jsx("div",{className:"md:w-1/2",children:e.jsx("img",{src:i.image,alt:i.title,className:"w-full h-64 md:h-full object-cover"})}),e.jsxs("div",{className:"md:w-1/2 p-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("span",{className:"px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium",children:"Featured"}),e.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full border ${c(i.category)}`,children:i.category})]}),e.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer",children:i.title}),e.jsx("p",{className:"text-muted-foreground mb-6 leading-relaxed",children:i.excerpt}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:i.authorAvatar,alt:i.author,className:"w-6 h-6 rounded-full"}),e.jsx("span",{children:i.author})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(ht,{className:"h-4 w-4"}),e.jsx("span",{children:i.publishDate})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Qs,{className:"h-4 w-4"}),e.jsx("span",{children:i.readTime})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex gap-1",children:i.tags.map(u=>e.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",u]},u))}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(gt,{className:"h-4 w-4"}),e.jsx("span",{children:i.likes})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(Ps,{className:"h-4 w-4"}),e.jsx("span",{children:i.comments})]})]})]})]})]})})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map((u,m)=>{const b=d(u.category);return e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:m*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group",children:[e.jsxs("div",{className:"relative h-48 bg-muted/50",children:[e.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute top-3 right-3",children:e.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${c(u.category)}`,children:u.category})})]}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(b,{className:"h-4 w-4 text-primary"}),e.jsx("span",{className:"text-sm text-primary font-medium",children:u.category})]}),e.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer mb-3 line-clamp-2",children:u.title}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-3",children:u.excerpt}),e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("img",{src:u.authorAvatar,alt:u.author,className:"w-8 h-8 rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:u.author}),e.jsxs("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[e.jsx("span",{children:u.publishDate}),e.jsx("span",{children:"•"}),e.jsx("span",{children:u.readTime})]})]})]}),e.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:u.tags.map(y=>e.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",y]},y))}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(gt,{className:"h-4 w-4"}),e.jsx("span",{children:u.likes})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(Ps,{className:"h-4 w-4"}),e.jsx("span",{children:u.comments})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:e.jsx(Ds,{className:"h-4 w-4"})}),e.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:e.jsx(_a,{className:"h-4 w-4"})}),e.jsxs("button",{className:"flex items-center gap-1 text-primary hover:text-primary-dark transition-colors",children:[e.jsx("span",{className:"text-sm font-medium",children:"Read"}),e.jsx(or,{className:"h-4 w-4"})]})]})]})]})]},u.id)})}),l.length===0&&e.jsxs("div",{className:"text-center py-16",children:[e.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(xt,{className:"h-12 w-12 text-muted-foreground"})}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No posts found"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),e.jsx("button",{onClick:()=>{t(""),n("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),e.jsxs("div",{className:"mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[e.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Stay Updated"}),e.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Subscribe to our newsletter for the latest tutorials, updates, and insights from the DreamBuild team."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto",children:[e.jsx("input",{type:"email",placeholder:"Enter your email",className:"flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"}),e.jsx("button",{className:"px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Subscribe"})]})]})]})})},yx=()=>{const[s,t]=p.useState({name:"",email:"",message:""}),[r,n]=p.useState(!1),[a,i]=p.useState(null),o=[{icon:Mt,title:"Email Us",description:"Get in touch via email",value:"hello@dreambuild.dev",action:"mailto:hello@dreambuild.dev"}],l=[{icon:he,href:"https://github.com/ronb12/DreamBuild",label:"GitHub"},{icon:Ys,href:"#",label:"Twitter"},{icon:vl,href:"#",label:"LinkedIn"}],d=u=>{const{name:m,value:b}=u.target;t(y=>({...y,[m]:b}))},c=async u=>{u.preventDefault(),n(!0),await new Promise(m=>setTimeout(m,2e3)),n(!1),i("success"),t({name:"",email:"",message:""}),setTimeout(()=>i(null),5e3)};return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"text-center mb-12",children:e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsxs("h1",{className:"text-5xl font-bold text-gray-900 mb-6",children:["Contact ",e.jsx("span",{className:"text-primary",children:"Us"})]}),e.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Have questions about DreamBuild? We'd love to hear from you."})]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[e.jsxs(R.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-white border border-gray-200 rounded-2xl p-8 shadow-sm",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Send us a Message"}),e.jsx("p",{className:"text-gray-600",children:"Fill out the form below and we'll get back to you as soon as possible."})]}),e.jsxs("form",{onSubmit:c,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Name *"}),e.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:d,required:!0,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all",placeholder:"Your full name"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email *"}),e.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:d,required:!0,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all",placeholder:"your@email.com"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Message *"}),e.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:d,required:!0,rows:6,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none",placeholder:"Tell us how we can help you..."})]}),a==="success"&&e.jsxs(R.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg",children:[e.jsx(Zs,{className:"h-5 w-5 text-green-600"}),e.jsx("span",{className:"text-green-800",children:"Message sent successfully! We'll get back to you soon."})]}),e.jsx("button",{type:"submit",disabled:r,className:"w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold",children:r?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Sending..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Ks,{className:"h-5 w-5"}),"Send Message"]})})]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs(R.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Get in Touch"}),e.jsx("div",{className:"space-y-4",children:o.map(u=>{const m=u.icon;return e.jsxs("a",{href:u.action,className:"flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group",children:[e.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors",children:e.jsx(m,{className:"h-5 w-5 text-primary"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-semibold text-gray-900 group-hover:text-primary transition-colors",children:u.title}),e.jsx("p",{className:"text-sm text-gray-600 mb-1",children:u.description}),e.jsx("p",{className:"text-sm font-medium text-primary",children:u.value})]})]},u.title)})})]}),e.jsxs(R.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},className:"bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Follow Us"}),e.jsx("div",{className:"space-y-3",children:l.map(u=>{const m=u.icon;return e.jsxs("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group",children:[e.jsx(m,{className:"h-5 w-5 text-gray-600 group-hover:text-primary transition-colors"}),e.jsx("span",{className:"text-sm font-medium text-gray-900 group-hover:text-primary transition-colors",children:u.label})]},u.label)})})]})]})]})]})})},vx=()=>{const s=[{icon:tt,title:"Information We Collect",content:["Account information (name, email, profile picture)","Project data and code you create using our platform","Usage analytics to improve our services","Device information for compatibility purposes","Communication data when you contact our support team"]},{icon:_e,title:"How We Use Your Information",content:["Provide and maintain our AI development platform","Process your code generation requests and project management","Improve our AI models and service quality","Send important updates about your projects","Provide customer support and technical assistance","Comply with legal obligations and protect our rights"]},{icon:wl,title:"Data Security",content:["All data is encrypted in transit and at rest","We use industry-standard security measures","Regular security audits and updates","Limited access to your data by authorized personnel only","Secure cloud infrastructure with enterprise-grade protection","Your code and projects are stored securely and privately"]},{icon:jl,title:"Your Rights",content:["Access your personal data at any time","Request correction of inaccurate information","Delete your account and associated data","Export your projects and data","Opt out of non-essential communications","Withdraw consent for data processing"]}];return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"text-center mb-12",children:e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("div",{className:"flex items-center justify-center mb-6",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg",children:e.jsx(tn,{className:"h-8 w-8 text-white"})})}),e.jsxs("h1",{className:"text-5xl font-bold text-gray-900 mb-6",children:["Privacy ",e.jsx("span",{className:"text-blue-600",children:"Policy"})]}),e.jsx("p",{className:"text-lg text-gray-600 max-w-3xl mx-auto",children:"Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use DreamBuild."}),e.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Last updated: September 23, 2024"})]})}),e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Introduction"}),e.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:'DreamBuild ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered development platform.'}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:"By using DreamBuild, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service."})]}),e.jsx("div",{className:"space-y-8",children:s.map((t,r)=>{const n=t.icon;return e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2+r*.1},className:"bg-white border border-gray-200 rounded-2xl p-8 shadow-sm",children:[e.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0",children:e.jsx(n,{className:"h-6 w-6 text-blue-600"})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:t.title})]}),e.jsx("ul",{className:"space-y-3",children:t.content.map((a,i)=>e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{className:"text-gray-600",children:a})]},i))})]},t.title)})}),e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},className:"bg-blue-50 border border-blue-200 rounded-2xl p-8 mt-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Additional Information"}),e.jsxs("div",{className:"space-y-4 text-gray-600",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Data Retention:"})," We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your data at any time."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Third-Party Services:"})," We may use third-party services for analytics, hosting, and other functions. These services have their own privacy policies."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"International Transfers:"})," Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Children's Privacy:"})," Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13."]})]})]}),e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},className:"bg-white border border-gray-200 rounded-2xl p-8 mt-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Contact Us"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"If you have any questions about this Privacy Policy or our data practices, please contact us:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(Mt,{className:"h-5 w-5 text-blue-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Email"}),e.jsx("p",{className:"text-gray-600",children:"privacy@dreambuild.dev"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(ye,{className:"h-5 w-5 text-blue-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Data Protection Officer"}),e.jsx("p",{className:"text-gray-600",children:"dpo@dreambuild.dev"})]})]})]})]}),e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},className:"text-center mt-8 p-6 bg-gray-50 rounded-xl",children:e.jsx("p",{className:"text-sm text-gray-500",children:'This Privacy Policy may be updated from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.'})})]})})},wx=()=>{const s=[{icon:ye,title:"Acceptance of Terms",content:["By accessing and using DreamBuild, you accept and agree to be bound by these Terms of Service","If you do not agree to these terms, you may not use our service","We reserve the right to modify these terms at any time without prior notice","Your continued use of the service after changes constitutes acceptance of the new terms","These terms apply to all users, including visitors, registered users, and premium subscribers"]},{icon:Q,title:"Service Description",content:["DreamBuild is an AI-powered development platform supporting 100+ programming languages","We provide code generation, project management, and development tools","Our service includes both free and premium features","We may modify, suspend, or discontinue any part of our service at any time","We do not guarantee uninterrupted access to our service"]},{icon:Ge,title:"User Accounts",content:["You must provide accurate and complete information when creating an account","You are responsible for maintaining the confidentiality of your account credentials","You must notify us immediately of any unauthorized use of your account","You are responsible for all activities that occur under your account","We reserve the right to suspend or terminate accounts that violate these terms"]},{icon:tt,title:"User Content and Data",content:["You retain ownership of all code and projects you create using our platform","You grant us a limited license to process your content to provide our services","You are responsible for ensuring your content does not violate any laws or third-party rights","We may use anonymized data to improve our AI models and services","You must not upload malicious code, viruses, or harmful content"]},{icon:tn,title:"Prohibited Uses",content:["Use our service for any unlawful purpose or to solicit others to perform unlawful acts","Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances","Transmit or procure the sending of any advertising or promotional material without our consent","Impersonate or attempt to impersonate another person or entity","Engage in any other conduct that restricts or inhibits anyone's use of the service"]},{icon:Sl,title:"Intellectual Property",content:["DreamBuild and its original content, features, and functionality are owned by Bradley Virtual Solutions, LLC","Our service is protected by copyright, trademark, and other intellectual property laws","You may not reproduce, distribute, or create derivative works without our permission","Any feedback or suggestions you provide may be used by us without compensation","Third-party trademarks and copyrights remain the property of their respective owners"]}],t=[{title:"Service Availability",content:"We strive to maintain high service availability but do not guarantee uninterrupted access. We may perform maintenance, updates, or modifications that temporarily affect service availability."},{title:"Limitation of Liability",content:"To the maximum extent permitted by law, DreamBuild and Bradley Virtual Solutions, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our service."},{title:"Indemnification",content:"You agree to defend, indemnify, and hold harmless DreamBuild and Bradley Virtual Solutions, LLC from any claims, damages, or expenses arising from your use of our service or violation of these terms."},{title:"Termination",content:"We may terminate or suspend your account and access to our service immediately, without prior notice, for any reason, including if you breach these Terms of Service."}];return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"text-center mb-12",children:e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("div",{className:"flex items-center justify-center mb-6",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg",children:e.jsx(Nl,{className:"h-8 w-8 text-white"})})}),e.jsxs("h1",{className:"text-5xl font-bold text-gray-900 mb-6",children:["Terms of ",e.jsx("span",{className:"text-green-600",children:"Service"})]}),e.jsx("p",{className:"text-lg text-gray-600 max-w-3xl mx-auto",children:"These terms govern your use of DreamBuild. Please read them carefully before using our AI development platform."}),e.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Last updated: September 23, 2024"})]})}),e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Introduction"}),e.jsx("p",{className:"text-gray-600 leading-relaxed mb-4",children:'Welcome to DreamBuild, operated by Bradley Virtual Solutions, LLC ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your use of our AI-powered development platform and services.'}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:"By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the service."})]}),e.jsx("div",{className:"space-y-8",children:s.map((r,n)=>{const a=r.icon;return e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2+n*.1},className:"bg-white border border-gray-200 rounded-2xl p-8 shadow-sm",children:[e.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0",children:e.jsx(a,{className:"h-6 w-6 text-green-600"})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:r.title})]}),e.jsx("ul",{className:"space-y-3",children:r.content.map((i,o)=>e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"}),e.jsx("span",{className:"text-gray-600",children:i})]},o))})]},r.title)})}),e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},className:"mt-8 space-y-6",children:t.map((r,n)=>e.jsxs("div",{className:"bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:r.title}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:r.content})]},r.title))}),e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.9},className:"bg-green-50 border border-green-200 rounded-2xl p-8 mt-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Governing Law"}),e.jsxs("div",{className:"space-y-4 text-gray-600",children:[e.jsx("p",{children:"These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions."}),e.jsx("p",{children:"Any disputes arising from these Terms or your use of our service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association."}),e.jsx("p",{children:"If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will remain in full force and effect."})]})]}),e.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},className:"bg-white border border-gray-200 rounded-2xl p-8 mt-8 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Contact Information"}),e.jsx("p",{className:"text-gray-600 mb-6",children:"If you have any questions about these Terms of Service, please contact us:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(Mt,{className:"h-5 w-5 text-green-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Email"}),e.jsx("p",{className:"text-gray-600",children:"legal@dreambuild.dev"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(ye,{className:"h-5 w-5 text-green-600"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Legal Department"}),e.jsx("p",{className:"text-gray-600",children:"Bradley Virtual Solutions, LLC"})]})]})]})]}),e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.1},className:"text-center mt-8 p-6 bg-gray-50 rounded-xl",children:e.jsx("p",{className:"text-sm text-gray-500",children:'These Terms of Service may be updated from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date.'})})]})})},jx=()=>{const[s,t]=p.useState(null),[r,n]=p.useState(!1),a=[{id:"html-css",title:"HTML CSS JavaScript Tutorial - Complete Course for Beginners",duration:"4 hours 25 minutes",rating:4.8,students:12500,videoUrl:"https://www.youtube.com/embed/UB1O30fR-EE?autoplay=1&mute=1&loop=1&playlist=UB1O30fR-EE"},{id:"javascript",title:"JavaScript Tutorial for Beginners - Complete Course",duration:"3 hours 26 minutes",rating:4.9,students:15200,videoUrl:"https://www.youtube.com/embed/PkZNo7MFNFg?autoplay=1&mute=1&loop=1&playlist=PkZNo7MFNFg"},{id:"react",title:"React Tutorial for Beginners - Complete Course",duration:"2 hours 15 minutes",rating:4.7,students:11800,videoUrl:"https://www.youtube.com/embed/SqcY0GlETPk?autoplay=1&mute=1&loop=1&playlist=SqcY0GlETPk"},{id:"python",title:"Python Tutorial for Beginners - Complete Course",duration:"4 hours 30 minutes",rating:4.9,students:20100,videoUrl:"https://www.youtube.com/embed/rfscVS0vtbw?autoplay=1&mute=1&loop=1&playlist=rfscVS0vtbw"},{id:"nodejs",title:"Node.js Tutorial for Beginners - Complete Course",duration:"2 hours 45 minutes",rating:4.6,students:9800,videoUrl:"https://www.youtube.com/embed/Oe421EPjeBE?autoplay=1&mute=1&loop=1&playlist=Oe421EPjeBE"},{id:"database",title:"SQL Tutorial for Beginners - Complete Course",duration:"1 hour 45 minutes",rating:4.8,students:7600,videoUrl:"https://www.youtube.com/embed/HXV3zeQKqGY?autoplay=1&mute=1&loop=1&playlist=HXV3zeQKqGY"},{id:"vue",title:"Vue.js Tutorial for Beginners - Complete Course",duration:"2 hours 30 minutes",rating:4.7,students:8900,videoUrl:"https://www.youtube.com/embed/qZXt1Aom3Cs?autoplay=1&mute=1&loop=1&playlist=qZXt1Aom3Cs"},{id:"angular",title:"Angular Tutorial for Beginners - Complete Course",duration:"3 hours 15 minutes",rating:4.6,students:11200,videoUrl:"https://www.youtube.com/embed/3qBXWUpoPHo?autoplay=1&mute=1&loop=1&playlist=3qBXWUpoPHo"},{id:"typescript",title:"TypeScript Tutorial for Beginners - Complete Course",duration:"1 hour 30 minutes",rating:4.9,students:13400,videoUrl:"https://www.youtube.com/embed/BwuLxPH8IDs?autoplay=1&mute=1&loop=1&playlist=BwuLxPH8IDs"},{id:"mongodb",title:"MongoDB Tutorial for Beginners - Complete Course",duration:"2 hours 10 minutes",rating:4.5,students:6800,videoUrl:"https://www.youtube.com/embed/-56x56UppqQ?autoplay=1&mute=1&loop=1&playlist=-56x56UppqQ"}],i=[{id:"js-reference",title:"JavaScript Reference - MDN",description:"Complete JavaScript reference with syntax, methods, and examples",category:"Reference",size:"2.1 MB",downloads:15420,url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",isPDF:!1},{id:"git-cheatsheet",title:"Git Cheat Sheet - GitHub Education",description:"Essential Git commands for version control and collaboration",category:"Tools",size:"1.2 MB",downloads:9600,url:"https://education.github.com/git-cheat-sheet-education.pdf",isPDF:!0},{id:"html-guide",title:"HTML: HyperText Markup Language - MDN",description:"Complete guide to HTML elements, attributes, and best practices",category:"Web Development",size:"3.2 MB",downloads:18200,url:"https://developer.mozilla.org/en-US/docs/Web/HTML",isPDF:!1},{id:"python-tutorial",title:"The Python Tutorial - Python.org",description:"Official Python tutorial covering fundamentals and advanced topics",category:"Language",size:"4.5 MB",downloads:22100,url:"https://docs.python.org/3/tutorial/",isPDF:!1},{id:"react-learn",title:"Quick Start - React",description:"Learn React fundamentals with interactive examples and guides",category:"Framework",size:"2.8 MB",downloads:13400,url:"https://react.dev/learn",isPDF:!1},{id:"sql-tutorial",title:"SQL Tutorial - W3Schools",description:"Learn SQL with interactive examples and database fundamentals",category:"Database",size:"2.3 MB",downloads:16800,url:"https://www.w3schools.com/sql/default.asp",isPDF:!1},{id:"nodejs-api",title:"Node.js API Documentation",description:"Complete Node.js API reference for server-side JavaScript development",category:"Backend",size:"3.7 MB",downloads:11200,url:"https://nodejs.org/docs/latest/api/",isPDF:!1},{id:"mongodb-docs",title:"MongoDB Documentation",description:"Complete MongoDB documentation for NoSQL database operations",category:"Database",size:"2.9 MB",downloads:8900,url:"https://www.mongodb.com/docs/",isPDF:!1}],o=c=>{t(c)},l=()=>{t(null)},d=c=>{window.open(c.url,"_blank")};return s?e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx("div",{className:"bg-white shadow-sm border-b sticky top-0 z-10 mt-16",children:e.jsx("div",{className:"container mx-auto px-6 py-4",children:e.jsx("button",{onClick:l,className:"flex items-center text-blue-600 hover:text-blue-700 font-medium",children:"← Back to Videos"})})}),e.jsx("div",{className:"container mx-auto px-6 py-12",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[e.jsx("div",{className:"relative",style:{aspectRatio:"16/9",height:"500px"},children:e.jsx("iframe",{className:"w-full h-full",src:s.videoUrl,title:s.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:s.title}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Ie,{className:"h-4 w-4"}),s.rating]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Ge,{className:"h-4 w-4"}),s.students.toLocaleString()," students"]})]})]})]})})]}):r?e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx("div",{className:"bg-white shadow-sm sticky top-0 z-10 mt-16",children:e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Programming Resources"}),e.jsx("p",{className:"text-gray-600 text-lg",children:"Download comprehensive guides, cheat sheets, and documentation"})]}),e.jsxs("button",{onClick:()=>n(!1),className:"bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2",children:[e.jsx(bt,{className:"h-5 w-5"}),"Back to Videos"]})]})})}),e.jsx("div",{className:"container mx-auto px-6 py-12",children:e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsx("div",{className:"space-y-4",children:i.map(c=>e.jsx("div",{className:"bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100",children:e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",children:e.jsx(ye,{className:"h-5 w-5 text-blue-600"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:c.title}),e.jsx("p",{className:"text-gray-600 text-sm",children:c.description})]})]}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500 ml-13",children:[e.jsx("span",{className:"bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium",children:c.category}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Ge,{className:"h-4 w-4"}),c.downloads.toLocaleString()," users"]})]})]}),e.jsx("div",{className:"ml-6",children:e.jsxs("button",{onClick:()=>d(c),className:"bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",children:[e.jsx(xt,{className:"h-5 w-5"}),"Visit Resource"]})})]})})},c.id))})})})]}):e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx("div",{className:"bg-white shadow-sm sticky top-0 z-10 mt-16",children:e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Programming Videos"}),e.jsx("p",{className:"text-gray-600 text-lg",children:"Learn to code with our comprehensive video tutorials"})]}),e.jsxs("button",{onClick:()=>n(!0),className:"bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2",children:[e.jsx(xt,{className:"h-5 w-5"}),"View Resources"]})]})})}),e.jsx("div",{className:"container mx-auto px-6 py-12",children:e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:a.map(c=>e.jsxs("div",{className:"bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group",children:[e.jsx("div",{className:"relative aspect-video bg-gray-200 rounded-t-lg overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:e.jsx("button",{onClick:()=>o(c),className:"w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all group-hover:scale-110",children:e.jsx(bt,{className:"h-8 w-8 text-white ml-1"})})})}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors",children:c.title}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600 mb-4",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Ie,{className:"h-4 w-4"}),c.rating]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Ge,{className:"h-4 w-4"}),c.students.toLocaleString()]})]}),e.jsxs("button",{onClick:()=>o(c),className:"w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2",children:[e.jsx(bt,{className:"h-4 w-4"}),"Watch Video"]})]})]},c.id))})})]})},Nx=()=>{const{appId:s}=lc(),[t,r]=p.useState(null),[n,a]=p.useState(!0),[i,o]=p.useState(null);p.useEffect(()=>{s&&l(s)},[s]);const l=async d=>{try{a(!0);const c=await vt.getApp(d);if(c){r(c);const u=vt.generateAppHTML(c);await vt.incrementViews(d);const m=new Blob([u],{type:"text/html"}),b=URL.createObjectURL(m);document.title=c.name,document.body.innerHTML=u,a(!1)}else o("App not found"),a(!1)}catch(c){console.error("Error loading app:",c),o("Failed to load app"),a(!1)}};return n?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),e.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Loading your DreamBuild app..."}),e.jsx("p",{className:"text-gray-600 mt-2",children:"This may take a moment"})]})}):i?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100",children:e.jsxs("div",{className:"text-center max-w-md mx-auto p-8",children:[e.jsx("div",{className:"text-6xl mb-4",children:"😞"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"App Not Found"}),e.jsx("p",{className:"text-gray-600 mb-6",children:i}),e.jsx("a",{href:"https://dreambuild-2024-app.web.app",className:"inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Back to DreamBuild"})]})}):null},Sx=()=>{const[s,t]=p.useState([]),[r,n]=p.useState([]),[a,i]=p.useState(!0),[o,l]=p.useState(""),[d,c]=p.useState("grid"),[u,m]=p.useState("newest"),[b,y]=p.useState(null),[x,f]=p.useState(!1);p.useEffect(()=>{k(),j();let D=null;try{D=h()}catch(C){console.error("❌ Failed to setup real-time listener:",C)}const _=C=>{console.log("📡 App deployment event received:",C.detail),$.success(`New app "${C.detail.appName}" added to gallery!`,{duration:4e3,icon:"🚀"}),k(!0)};return window.addEventListener("appDeployed",_),()=>{D&&D(),window.removeEventListener("appDeployed",_)}},[]);const h=()=>{try{console.log("🔄 Setting up real-time listener for apps...");const D=Se(De(le,"apps"),Ae("isPublic","==",!0),Nr("createdAt","desc"));return Ko(D,C=>{var T,S;console.log("📡 Real-time update received:",C.docs.length,"apps");const B=C.docs.map(N=>({id:N.id,...N.data()}));if(t(B),B.length>0){const N=B[0],M=new Date,H=((S=(T=N.createdAt)==null?void 0:T.toDate)==null?void 0:S.call(T))||new Date(N.createdAt);M-H<3e4&&$.success(`New app "${N.name}" added to gallery!`,{duration:4e3,icon:"🚀"})}},C=>{console.error("❌ Real-time listener error:",C),console.log("🔄 Falling back to manual refresh due to permissions error"),$.error("Real-time updates disabled - use refresh button",{duration:3e3})})}catch(D){return console.error("❌ Error setting up real-time listener:",D),console.log("🔄 Real-time listener setup failed, using manual refresh only"),null}};p.useEffect(()=>{v()},[s,o,u]);const k=async(D=!1)=>{try{D?f(!0):i(!0),console.log("🔄 Loading apps from Firebase...");const _=await vt.getPublicApps(50);if(console.log("✅ Loaded apps:",_.length),console.log("✅ Apps data:",_),t(_),_.length===0){console.log("⚠️ No public apps found in Firebase");const C=document.createElement("div");C.className="fixed top-20 left-4 bg-yellow-500 text-white px-4 py-2 rounded shadow-lg z-50",C.textContent="No apps found in Firebase",C.id="no-apps-debug",document.body.appendChild(C),setTimeout(()=>{const B=document.getElementById("no-apps-debug");B&&B.remove()},5e3)}}catch(_){console.error("❌ Error loading apps:",_),$.error("Failed to load apps"),t([])}finally{i(!1),f(!1)}},j=async()=>{try{console.log("🔄 Loading app stats from Firebase...");const D=await vt.getAppStats();console.log("✅ Loaded stats:",D),y(D)}catch(D){console.error("❌ Error loading stats:",D),y({totalApps:0,publicApps:0,totalViews:0,totalLikes:0})}},v=()=>{let D=[...s];switch(o&&(D=D.filter(_=>_.name.toLowerCase().includes(o.toLowerCase())||_.tags.some(C=>C.toLowerCase().includes(o.toLowerCase())))),u){case"newest":D.sort((_,C)=>new Date(C.createdAt)-new Date(_.createdAt));break;case"popular":D.sort((_,C)=>(C.views||0)-(_.views||0));break;case"trending":D.sort((_,C)=>(C.likes||0)-(_.likes||0));break}n(D)},w=D=>{l(D.target.value)},g=D=>{m(D.target.value)},P=D=>{c(D)},I=D=>{navigator.share?navigator.share({title:D.name,url:D.url}):(navigator.clipboard.writeText(D.url),$.success("URL copied to clipboard!"))},E=async D=>{try{await vt.toggleLike(D.id,"anonymous"),$.success("Liked!"),k()}catch{$.error("Failed to like app")}},O=D=>{if(!D)return"Unknown date";try{let _;return D&&typeof D=="object"&&D.toDate?_=D.toDate():D&&typeof D=="object"&&D.seconds?_=new Date(D.seconds*1e3):_=new Date(D),isNaN(_.getTime())?"Unknown date":_.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch(_){return console.error("Date formatting error:",_),"Unknown date"}};return a?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),e.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Loading DreamBuild Apps..."})]})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",children:[e.jsx("div",{className:"bg-white shadow-sm border-b mt-16",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"DreamBuild App Gallery"}),e.jsx("p",{className:"text-gray-600 mt-2",children:"Discover amazing apps created with DreamBuild AI"}),e.jsx("button",{onClick:()=>k(!0),disabled:x,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2",children:x?e.jsxs(e.Fragment,{children:[e.jsx(_t,{className:"h-4 w-4 animate-spin"}),"Refreshing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(_t,{className:"h-4 w-4"}),"Refresh Apps"]})})]})})}),b&&e.jsx("div",{className:"bg-white border-b",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg font-semibold text-gray-900",children:b.publicApps}),e.jsx("div",{className:"text-sm text-gray-500",children:"Public Apps"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg font-semibold text-gray-900",children:b.totalViews}),e.jsx("div",{className:"text-sm text-gray-500",children:"Total Views"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg font-semibold text-gray-900",children:b.totalLikes}),e.jsx("div",{className:"text-sm text-gray-500",children:"Total Likes"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-lg font-semibold text-gray-900",children:r.length}),e.jsx("div",{className:"text-sm text-gray-500",children:"Filtered Results"})]})]})})}),e.jsx("div",{className:"bg-white border-b",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between",children:[e.jsxs("div",{className:"relative w-full max-w-md mx-auto",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"Search amazing apps...",value:o,onChange:w,className:"w-full pl-4 pr-12 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"}),e.jsx(qe,{className:"absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"}),o&&e.jsx("button",{onClick:()=>l(""),className:"absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",children:e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),o&&e.jsx("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10",children:e.jsxs("div",{className:"p-3 text-sm text-gray-600",children:[e.jsx("span",{className:"font-medium",children:r.length})," app",r.length!==1?"s":"",' found for "',e.jsx("span",{className:"font-medium text-blue-600",children:o}),'"']})})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"relative",children:[e.jsxs("select",{value:u,onChange:g,className:"appearance-none px-4 py-3 pr-8 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg cursor-pointer",children:[e.jsx("option",{value:"newest",children:"🆕 Newest"}),e.jsx("option",{value:"popular",children:"🔥 Most Popular"}),e.jsx("option",{value:"trending",children:"📈 Trending"})]}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",children:e.jsx("svg",{className:"h-4 w-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),e.jsxs("div",{className:"flex items-center gap-1 bg-gray-100 rounded-xl p-1",children:[e.jsx("button",{onClick:()=>P("grid"),className:`p-2 rounded-lg transition-all duration-200 ${d==="grid"?"bg-blue-500 text-white shadow-md":"text-gray-600 hover:bg-white hover:shadow-sm"}`,children:e.jsx(Vs,{className:"h-4 w-4"})}),e.jsx("button",{onClick:()=>P("list"),className:`p-2 rounded-lg transition-all duration-200 ${d==="list"?"bg-blue-500 text-white shadow-md":"text-gray-600 hover:bg-white hover:shadow-sm"}`,children:e.jsx(en,{className:"h-4 w-4"})})]})]})]})})}),e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:r.length===0?e.jsx("div",{className:"text-center py-12",children:s.length===0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-6xl mb-4",children:"🚀"}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"No apps yet"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Be the first to create an amazing app with DreamBuild AI!"}),e.jsxs("a",{href:"/ai-builder",className:"inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:[e.jsx("span",{children:"Create Your First App"}),e.jsx(rt,{className:"h-4 w-4"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-6xl mb-4",children:"🔍"}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"No apps found"}),e.jsx("p",{className:"text-gray-600",children:"Try adjusting your search or filters"})]})}):e.jsx("div",{className:d==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"space-y-4",children:r.map(D=>e.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${d==="list"?"flex":""}`,children:d==="grid"?e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 truncate",children:D.name}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>E(D),className:"p-1 hover:bg-gray-100 rounded",children:e.jsx(gt,{className:"h-4 w-4 text-gray-400"})}),e.jsx("button",{onClick:()=>I(D),className:"p-1 hover:bg-gray-100 rounded",children:e.jsx(Pr,{className:"h-4 w-4 text-gray-400"})})]})]}),e.jsx("div",{className:"mb-4",children:e.jsx("div",{className:"w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl mb-2",children:"🚀"}),e.jsx("div",{className:"text-sm text-gray-600",children:"DreamBuild App"})]})})}),e.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 mb-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(_e,{className:"h-4 w-4"}),e.jsx("span",{children:D.views||0})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(gt,{className:"h-4 w-4"}),e.jsx("span",{children:D.likes||0})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(ht,{className:"h-4 w-4"}),e.jsx("span",{children:O(D.createdAt)})]})]}),D.tags&&D.tags.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:D.tags.slice(0,3).map((_,C)=>e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full",children:_},C))}),e.jsxs("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",className:"w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2",children:[e.jsx(rt,{className:"h-4 w-4"}),"View App"]})]}):e.jsx("div",{className:"p-6 flex-1",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:D.name}),e.jsxs("p",{className:"text-gray-600 text-sm mt-1",children:["Created ",O(D.createdAt)]}),e.jsxs("div",{className:"flex items-center gap-4 mt-2 text-sm text-gray-500",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(_e,{className:"h-4 w-4"}),e.jsxs("span",{children:[D.views||0," views"]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(gt,{className:"h-4 w-4"}),e.jsxs("span",{children:[D.likes||0," likes"]})]})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>E(D),className:"p-2 hover:bg-gray-100 rounded",children:e.jsx(gt,{className:"h-4 w-4 text-gray-400"})}),e.jsx("button",{onClick:()=>I(D),className:"p-2 hover:bg-gray-100 rounded",children:e.jsx(Pr,{className:"h-4 w-4 text-gray-400"})}),e.jsxs("a",{href:D.url,target:"_blank",rel:"noopener noreferrer",className:"bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2",children:[e.jsx(rt,{className:"h-4 w-4"}),"View"]})]})]})})},D.id))})})]})},Cx=()=>{const[s,t]=p.useState([]),[r,n]=p.useState(!0),[a,i]=p.useState(!1),[o,l]=p.useState(0);p.useEffect(()=>{d()},[]);const d=async()=>{try{console.log("🔍 Loading apps...");const m=De(le,"apps"),y=(await Fe(m)).docs.map(x=>({id:x.id,...x.data()}));console.log(`📊 Found ${y.length} apps`),t(y)}catch(m){console.error("❌ Error loading apps:",m)}finally{n(!1)}},c=async()=>{if(confirm("Are you sure you want to delete ALL apps? This cannot be undone!")){i(!0),l(0);try{console.log("🗑️ Starting deletion of all apps...");for(const m of s)try{await Ft(Y(le,"apps",m.id)),console.log(`✅ Deleted app: ${m.name||"Unknown"} (${m.id})`),l(b=>b+1)}catch(b){console.error(`❌ Failed to delete app ${m.id}:`,b)}console.log("🎉 All apps deleted successfully!"),await d()}catch(m){console.error("❌ Error deleting apps:",m)}finally{i(!1)}}},u=async(m,b)=>{if(confirm(`Are you sure you want to delete "${b||"Unknown"}"?`))try{await Ft(Y(le,"apps",m)),console.log(`✅ Deleted app: ${b} (${m})`),await d()}catch(y){console.error(`❌ Failed to delete app ${m}:`,y)}};return r?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),e.jsx("p",{className:"text-gray-600",children:"Loading apps..."})]})}):e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Delete Apps"}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("p",{className:"text-gray-600 mb-4",children:["Found ",s.length," apps in the gallery. You can delete individual apps or all apps at once."]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:c,disabled:a||s.length===0,className:"bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",children:a?`Deleting... (${o}/${s.length})`:"Delete All Apps"}),e.jsx("button",{onClick:d,className:"bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:"Refresh List"})]})]}),s.length===0?e.jsxs("div",{className:"text-center py-12",children:[e.jsx("div",{className:"text-6xl mb-4",children:"🎉"}),e.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"All apps deleted!"}),e.jsx("p",{className:"text-gray-600",children:"The gallery is now empty."})]}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:s.map(m=>e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 border",children:[e.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:m.name||"Untitled Project"}),e.jsxs("p",{className:"text-sm text-gray-600 mb-2",children:["ID: ",m.id]}),e.jsxs("p",{className:"text-sm text-gray-600 mb-4",children:["Created: ",m.createdAt?new Date(m.createdAt.seconds*1e3).toLocaleDateString():"Unknown"]}),e.jsx("button",{onClick:()=>u(m.id,m.name),className:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors text-sm",children:"Delete"})]},m.id))})]})})})};function kx(){const s=ot();return["/ai-builder"].includes(s.pathname)?null:e.jsx($u,{})}function Tx({children:s}){const t=ot();return["/ai-builder","/dashboard","/projects"].includes(t.pathname)?e.jsx("main",{children:s}):e.jsx("main",{className:"pt-16",children:s})}function Ax(){return e.jsx(Sd,{children:e.jsx(Lu,{children:e.jsx(Fu,{children:e.jsx(Ic,{children:e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(Mu,{}),e.jsx(Tx,{children:e.jsxs(Cc,{children:[e.jsx(te,{path:"/",element:e.jsx(Bu,{})}),e.jsx(te,{path:"/app",element:e.jsx(Nc,{to:"/ai-builder",replace:!0})}),e.jsx(te,{path:"/ai-builder",element:e.jsx(nx,{})}),e.jsx(te,{path:"/templates",element:e.jsx(ax,{})}),e.jsx(te,{path:"/dashboard",element:e.jsx(cx,{})}),e.jsx(te,{path:"/login",element:e.jsx(dx,{})}),e.jsx(te,{path:"/signup",element:e.jsx(ux,{})}),e.jsx(te,{path:"/projects",element:e.jsx(mx,{})}),e.jsx(te,{path:"/settings",element:e.jsx(px,{})}),e.jsx(te,{path:"/documentation",element:e.jsx(hx,{})}),e.jsx(te,{path:"/examples",element:e.jsx(gx,{})}),e.jsx(te,{path:"/community",element:e.jsx(fx,{})}),e.jsx(te,{path:"/about",element:e.jsx(xx,{})}),e.jsx(te,{path:"/blog",element:e.jsx(bx,{})}),e.jsx(te,{path:"/contact",element:e.jsx(yx,{})}),e.jsx(te,{path:"/privacy",element:e.jsx(vx,{})}),e.jsx(te,{path:"/terms",element:e.jsx(wx,{})}),e.jsx(te,{path:"/education",element:e.jsx(jx,{})}),e.jsx(te,{path:"/apps/:appId",element:e.jsx(Nx,{})}),e.jsx(te,{path:"/gallery",element:e.jsx(Sx,{})}),e.jsx(te,{path:"/delete-apps",element:e.jsx(Cx,{})})]})}),e.jsx(kx,{}),e.jsx(Nd,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--card)",color:"var(--card-foreground)",border:"1px solid var(--border)"}}})]})})})})})}Ga(document.getElementById("root")).render(e.jsx(p.StrictMode,{children:e.jsx(Ax,{})}));
//# sourceMappingURL=index-DtPNcC42.js.map
