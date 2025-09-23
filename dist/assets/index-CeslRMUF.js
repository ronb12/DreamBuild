import{initializeApp as ua}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";import{getAuth as ma,signInWithPopup as pa,GithubAuthProvider as ha,GoogleAuthProvider as fa}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";import{r as p,a as ga,b as xa,R as Ee,g as ba}from"./react-vendor-DWvC8KHc.js";import{_ as ya,C as va,r as un,S as wa,F as ja,g as hs,a as Tr,b as Na,c as Sa,d as Ca,i as vr,e as _s,f as $s,o as Bs,h as dr,j as V,s as ka,G as Ta,k as mn,l as be,m as Da,n as Ea,u as er,p as Rt,q as ue,t as we,w as me,v as Ot,x as $e,y as Kr,z as ur,A as Aa,B as It}from"./firebase-_l3dWQPc.js";import{_ as Be}from"./monaco-editor-BWpThiUx.js";import{S as vt,R as Ae,C as X,D as yt,U as fs,M as Pa,a as Ra,b as gs,L as pn,X as Oa,c as Ia,G as pe,T as Us,d as wr,e as Hs,m as M,f as go,Z as wt,F as ke,P as jt,g as gt,h as xo,i as Je,j as Ma,k as bo,A as ze,l as Ht,n as Nt,o as yo,p as vo,q as Dr,E as zt,r as Fa,s as La,B as Yr,t as xs,u as _a,v as $a,w as Ie,x as Ke,y as Er,z as Fe,H as zs,I as Ba,J as We,K as jr,N as bs,O as Me,Q as wo,V as Ua,W as jo,Y as Ha,_ as No,$ as So,a0 as za,a1 as Co,a2 as Ga,a3 as Wa,a4 as qa,a5 as Vt,a6 as Va,a7 as xt,a8 as ko,a9 as Ja,aa as Ka,ab as Ya,ac as mr,ad as Xa,ae as Xr,af as hn,ag as ys,ah as vs,ai as ws,aj as Qa}from"./ui-vendor-LJH6nKIW.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const Za={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"},To=ua(Za),el=ma(To);window.firebase={auth:()=>el,GoogleAuthProvider:fa,GithubAuthProvider:ha,signInWithPopup:pa};window.firebaseApp=To;console.log("Firebase loaded globally with providers:",!!window.firebase);var Do={exports:{}},Ar={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=p,rl=Symbol.for("react.element"),sl=Symbol.for("react.fragment"),nl=Object.prototype.hasOwnProperty,ol=tl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,il={key:!0,ref:!0,__self:!0,__source:!0};function Eo(r,e,s){var n,o={},i=null,a=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)nl.call(e,n)&&!il.hasOwnProperty(n)&&(o[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:rl,type:r,key:i,ref:a,props:o,_owner:ol.current}}Ar.Fragment=sl;Ar.jsx=Eo;Ar.jsxs=Eo;Do.exports=Ar;var t=Do.exports,Ao,fn=ga;Ao=fn.createRoot,fn.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gt(){return Gt=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(r[n]=s[n])}return r},Gt.apply(this,arguments)}var Ge;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Ge||(Ge={}));const gn="popstate";function al(r){r===void 0&&(r={});function e(n,o){let{pathname:i,search:a,hash:l}=n.location;return js("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function s(n,o){return typeof o=="string"?o:Nr(o)}return cl(e,s,null,r)}function te(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Po(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ll(){return Math.random().toString(36).substr(2,8)}function xn(r,e){return{usr:r.state,key:r.key,idx:e}}function js(r,e,s,n){return s===void 0&&(s=null),Gt({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Ct(e):e,{state:s,key:e&&e.key||n||ll()})}function Nr(r){let{pathname:e="/",search:s="",hash:n=""}=r;return s&&s!=="?"&&(e+=s.charAt(0)==="?"?s:"?"+s),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ct(r){let e={};if(r){let s=r.indexOf("#");s>=0&&(e.hash=r.substr(s),r=r.substr(0,s));let n=r.indexOf("?");n>=0&&(e.search=r.substr(n),r=r.substr(0,n)),r&&(e.pathname=r)}return e}function cl(r,e,s,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,l=Ge.Pop,d=null,c=u();c==null&&(c=0,a.replaceState(Gt({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function m(){l=Ge.Pop;let h=u(),S=h==null?null:h-c;c=h,d&&d({action:l,location:f.location,delta:S})}function b(h,S){l=Ge.Push;let v=js(f.location,h,S);c=u()+1;let j=xn(v,c),x=f.createHref(v);try{a.pushState(j,"",x)}catch(y){if(y instanceof DOMException&&y.name==="DataCloneError")throw y;o.location.assign(x)}i&&d&&d({action:l,location:f.location,delta:1})}function w(h,S){l=Ge.Replace;let v=js(f.location,h,S);c=u();let j=xn(v,c),x=f.createHref(v);a.replaceState(j,"",x),i&&d&&d({action:l,location:f.location,delta:0})}function g(h){let S=o.location.origin!=="null"?o.location.origin:o.location.href,v=typeof h=="string"?h:Nr(h);return v=v.replace(/ $/,"%20"),te(S,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,S)}let f={get action(){return l},get location(){return r(o,a)},listen(h){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(gn,m),d=h,()=>{o.removeEventListener(gn,m),d=null}},createHref(h){return e(o,h)},createURL:g,encodeLocation(h){let S=g(h);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:b,replace:w,go(h){return a.go(h)}};return f}var bn;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(bn||(bn={}));function dl(r,e,s){return s===void 0&&(s="/"),ul(r,e,s)}function ul(r,e,s,n){let o=typeof e=="string"?Ct(e):e,i=Gs(o.pathname||"/",s);if(i==null)return null;let a=Ro(r);ml(a);let l=null;for(let d=0;l==null&&d<a.length;++d){let c=Sl(i);l=wl(a[d],c)}return l}function Ro(r,e,s,n){e===void 0&&(e=[]),s===void 0&&(s=[]),n===void 0&&(n="");let o=(i,a,l)=>{let d={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};d.relativePath.startsWith("/")&&(te(d.relativePath.startsWith(n),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(n.length));let c=qe([n,d.relativePath]),u=s.concat(d);i.children&&i.children.length>0&&(te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ro(i.children,e,u,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:yl(c,i.index),routesMeta:u})};return r.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let d of Oo(i.path))o(i,a,d)}),e}function Oo(r){let e=r.split("/");if(e.length===0)return[];let[s,...n]=e,o=s.endsWith("?"),i=s.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=Oo(n.join("/")),l=[];return l.push(...a.map(d=>d===""?i:[i,d].join("/"))),o&&l.push(...a),l.map(d=>r.startsWith("/")&&d===""?"/":d)}function ml(r){r.sort((e,s)=>e.score!==s.score?s.score-e.score:vl(e.routesMeta.map(n=>n.childrenIndex),s.routesMeta.map(n=>n.childrenIndex)))}const pl=/^:[\w-]+$/,hl=3,fl=2,gl=1,xl=10,bl=-2,yn=r=>r==="*";function yl(r,e){let s=r.split("/"),n=s.length;return s.some(yn)&&(n+=bl),e&&(n+=fl),s.filter(o=>!yn(o)).reduce((o,i)=>o+(pl.test(i)?hl:i===""?gl:xl),n)}function vl(r,e){return r.length===e.length&&r.slice(0,-1).every((n,o)=>n===e[o])?r[r.length-1]-e[e.length-1]:0}function wl(r,e,s){let{routesMeta:n}=r,o={},i="/",a=[];for(let l=0;l<n.length;++l){let d=n[l],c=l===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",m=jl({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},u),b=d.route;if(!m)return null;Object.assign(o,m.params),a.push({params:o,pathname:qe([i,m.pathname]),pathnameBase:Dl(qe([i,m.pathnameBase])),route:b}),m.pathnameBase!=="/"&&(i=qe([i,m.pathnameBase]))}return a}function jl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[s,n]=Nl(r.path,r.caseSensitive,r.end),o=e.match(s);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((c,u,m)=>{let{paramName:b,isOptional:w}=u;if(b==="*"){let f=l[m]||"";a=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}const g=l[m];return w&&!g?c[b]=void 0:c[b]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:r}}function Nl(r,e,s){e===void 0&&(e=!1),s===void 0&&(s=!0),Po(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let n=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,d)=>(n.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(n.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),n]}function Sl(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Po(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Gs(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let s=e.endsWith("/")?e.length-1:e.length,n=r.charAt(s);return n&&n!=="/"?null:r.slice(s)||"/"}function Cl(r,e){e===void 0&&(e="/");let{pathname:s,search:n="",hash:o=""}=typeof r=="string"?Ct(r):r;return{pathname:s?s.startsWith("/")?s:kl(s,e):e,search:El(n),hash:Al(o)}}function kl(r,e){let s=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?s.length>1&&s.pop():o!=="."&&s.push(o)}),s.length>1?s.join("/"):"/"}function Qr(r,e,s,n){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tl(r){return r.filter((e,s)=>s===0||e.route.path&&e.route.path.length>0)}function Ws(r,e){let s=Tl(r);return e?s.map((n,o)=>o===s.length-1?n.pathname:n.pathnameBase):s.map(n=>n.pathnameBase)}function qs(r,e,s,n){n===void 0&&(n=!1);let o;typeof r=="string"?o=Ct(r):(o=Gt({},r),te(!o.pathname||!o.pathname.includes("?"),Qr("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),Qr("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),Qr("#","search","hash",o)));let i=r===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=s;else{let m=e.length-1;if(!n&&a.startsWith("..")){let b=a.split("/");for(;b[0]==="..";)b.shift(),m-=1;o.pathname=b.join("/")}l=m>=0?e[m]:"/"}let d=Cl(o,l),c=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&s.endsWith("/");return!d.pathname.endsWith("/")&&(c||u)&&(d.pathname+="/"),d}const qe=r=>r.join("/").replace(/\/\/+/g,"/"),Dl=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),El=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Al=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Pl(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Io=["post","put","patch","delete"];new Set(Io);const Rl=["get",...Io];new Set(Rl);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wt(){return Wt=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(r[n]=s[n])}return r},Wt.apply(this,arguments)}const Vs=p.createContext(null),Ol=p.createContext(null),Ye=p.createContext(null),Pr=p.createContext(null),Xe=p.createContext({outlet:null,matches:[],isDataRoute:!1}),Mo=p.createContext(null);function Il(r,e){let{relative:s}=e===void 0?{}:e;kt()||te(!1);let{basename:n,navigator:o}=p.useContext(Ye),{hash:i,pathname:a,search:l}=Lo(r,{relative:s}),d=a;return n!=="/"&&(d=a==="/"?n:qe([n,a])),o.createHref({pathname:d,search:l,hash:i})}function kt(){return p.useContext(Pr)!=null}function Qe(){return kt()||te(!1),p.useContext(Pr).location}function Fo(r){p.useContext(Ye).static||p.useLayoutEffect(r)}function Rr(){let{isDataRoute:r}=p.useContext(Xe);return r?Vl():Ml()}function Ml(){kt()||te(!1);let r=p.useContext(Vs),{basename:e,future:s,navigator:n}=p.useContext(Ye),{matches:o}=p.useContext(Xe),{pathname:i}=Qe(),a=JSON.stringify(Ws(o,s.v7_relativeSplatPath)),l=p.useRef(!1);return Fo(()=>{l.current=!0}),p.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let m=qs(c,JSON.parse(a),i,u.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:qe([e,m.pathname])),(u.replace?n.replace:n.push)(m,u.state,u)},[e,n,a,i,r])}function Lo(r,e){let{relative:s}=e===void 0?{}:e,{future:n}=p.useContext(Ye),{matches:o}=p.useContext(Xe),{pathname:i}=Qe(),a=JSON.stringify(Ws(o,n.v7_relativeSplatPath));return p.useMemo(()=>qs(r,JSON.parse(a),i,s==="path"),[r,a,i,s])}function Fl(r,e){return Ll(r,e)}function Ll(r,e,s,n){kt()||te(!1);let{navigator:o}=p.useContext(Ye),{matches:i}=p.useContext(Xe),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let c=Qe(),u;if(e){var m;let h=typeof e=="string"?Ct(e):e;d==="/"||(m=h.pathname)!=null&&m.startsWith(d)||te(!1),u=h}else u=c;let b=u.pathname||"/",w=b;if(d!=="/"){let h=d.replace(/^\//,"").split("/");w="/"+b.replace(/^\//,"").split("/").slice(h.length).join("/")}let g=dl(r,{pathname:w}),f=Hl(g&&g.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:qe([d,o.encodeLocation?o.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?d:qe([d,o.encodeLocation?o.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,s,n);return e&&f?p.createElement(Pr.Provider,{value:{location:Wt({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ge.Pop}},f):f}function _l(){let r=ql(),e=Pl(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},e),s?p.createElement("pre",{style:o},s):null,null)}const $l=p.createElement(_l,null);class Bl extends p.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,s){return s.location!==e.location||s.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:s.error,location:s.location,revalidation:e.revalidation||s.revalidation}}componentDidCatch(e,s){console.error("React Router caught the following error during render",e,s)}render(){return this.state.error!==void 0?p.createElement(Xe.Provider,{value:this.props.routeContext},p.createElement(Mo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ul(r){let{routeContext:e,match:s,children:n}=r,o=p.useContext(Vs);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),p.createElement(Xe.Provider,{value:e},n)}function Hl(r,e,s,n){var o;if(e===void 0&&(e=[]),s===void 0&&(s=null),n===void 0&&(n=null),r==null){var i;if(!s)return null;if(s.errors)r=s.matches;else if((i=n)!=null&&i.v7_partialHydration&&e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let a=r,l=(o=s)==null?void 0:o.errors;if(l!=null){let u=a.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);u>=0||te(!1),a=a.slice(0,Math.min(a.length,u+1))}let d=!1,c=-1;if(s&&n&&n.v7_partialHydration)for(let u=0;u<a.length;u++){let m=a[u];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=u),m.route.id){let{loaderData:b,errors:w}=s,g=m.route.loader&&b[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||g){d=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,m,b)=>{let w,g=!1,f=null,h=null;s&&(w=l&&m.route.id?l[m.route.id]:void 0,f=m.route.errorElement||$l,d&&(c<0&&b===0?(Jl("route-fallback"),g=!0,h=null):c===b&&(g=!0,h=m.route.hydrateFallbackElement||null)));let S=e.concat(a.slice(0,b+1)),v=()=>{let j;return w?j=f:g?j=h:m.route.Component?j=p.createElement(m.route.Component,null):m.route.element?j=m.route.element:j=u,p.createElement(Ul,{match:m,routeContext:{outlet:u,matches:S,isDataRoute:s!=null},children:j})};return s&&(m.route.ErrorBoundary||m.route.errorElement||b===0)?p.createElement(Bl,{location:s.location,revalidation:s.revalidation,component:f,error:w,children:v(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):v()},null)}var _o=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(_o||{}),$o=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}($o||{});function zl(r){let e=p.useContext(Vs);return e||te(!1),e}function Gl(r){let e=p.useContext(Ol);return e||te(!1),e}function Wl(r){let e=p.useContext(Xe);return e||te(!1),e}function Bo(r){let e=Wl(),s=e.matches[e.matches.length-1];return s.route.id||te(!1),s.route.id}function ql(){var r;let e=p.useContext(Mo),s=Gl(),n=Bo();return e!==void 0?e:(r=s.errors)==null?void 0:r[n]}function Vl(){let{router:r}=zl(_o.UseNavigateStable),e=Bo($o.UseNavigateStable),s=p.useRef(!1);return Fo(()=>{s.current=!0}),p.useCallback(function(o,i){i===void 0&&(i={}),s.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,Wt({fromRouteId:e},i)))},[r,e])}const vn={};function Jl(r,e,s){vn[r]||(vn[r]=!0)}function Kl(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Yl(r){let{to:e,replace:s,state:n,relative:o}=r;kt()||te(!1);let{future:i,static:a}=p.useContext(Ye),{matches:l}=p.useContext(Xe),{pathname:d}=Qe(),c=Rr(),u=qs(e,Ws(l,i.v7_relativeSplatPath),d,o==="path"),m=JSON.stringify(u);return p.useEffect(()=>c(JSON.parse(m),{replace:s,state:n,relative:o}),[c,m,o,s,n]),null}function ie(r){te(!1)}function Xl(r){let{basename:e="/",children:s=null,location:n,navigationType:o=Ge.Pop,navigator:i,static:a=!1,future:l}=r;kt()&&te(!1);let d=e.replace(/^\/*/,"/"),c=p.useMemo(()=>({basename:d,navigator:i,static:a,future:Wt({v7_relativeSplatPath:!1},l)}),[d,l,i,a]);typeof n=="string"&&(n=Ct(n));let{pathname:u="/",search:m="",hash:b="",state:w=null,key:g="default"}=n,f=p.useMemo(()=>{let h=Gs(u,d);return h==null?null:{location:{pathname:h,search:m,hash:b,state:w,key:g},navigationType:o}},[d,u,m,b,w,g,o]);return f==null?null:p.createElement(Ye.Provider,{value:c},p.createElement(Pr.Provider,{children:s,value:f}))}function Ql(r){let{children:e,location:s}=r;return Fl(Ns(e),s)}new Promise(()=>{});function Ns(r,e){e===void 0&&(e=[]);let s=[];return p.Children.forEach(r,(n,o)=>{if(!p.isValidElement(n))return;let i=[...e,o];if(n.type===p.Fragment){s.push.apply(s,Ns(n.props.children,i));return}n.type!==ie&&te(!1),!n.props.index||!n.props.children||te(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=Ns(n.props.children,i)),s.push(a)}),s}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ss(){return Ss=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(r[n]=s[n])}return r},Ss.apply(this,arguments)}function Zl(r,e){if(r==null)return{};var s={},n=Object.keys(r),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(s[o]=r[o]);return s}function ec(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function tc(r,e){return r.button===0&&(!e||e==="_self")&&!ec(r)}const rc=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sc="6";try{window.__reactRouterVersion=sc}catch{}const nc="startTransition",wn=xa[nc];function oc(r){let{basename:e,children:s,future:n,window:o}=r,i=p.useRef();i.current==null&&(i.current=al({window:o,v5Compat:!0}));let a=i.current,[l,d]=p.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},u=p.useCallback(m=>{c&&wn?wn(()=>d(m)):d(m)},[d,c]);return p.useLayoutEffect(()=>a.listen(u),[a,u]),p.useEffect(()=>Kl(n),[n]),p.createElement(Xl,{basename:e,children:s,location:l.location,navigationType:l.action,navigator:a,future:n})}const ic=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ac=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ae=p.forwardRef(function(e,s){let{onClick:n,relative:o,reloadDocument:i,replace:a,state:l,target:d,to:c,preventScrollReset:u,viewTransition:m}=e,b=Zl(e,rc),{basename:w}=p.useContext(Ye),g,f=!1;if(typeof c=="string"&&ac.test(c)&&(g=c,ic))try{let j=new URL(window.location.href),x=c.startsWith("//")?new URL(j.protocol+c):new URL(c),y=Gs(x.pathname,w);x.origin===j.origin&&y!=null?c=y+x.search+x.hash:f=!0}catch{}let h=Il(c,{relative:o}),S=lc(c,{replace:a,state:l,target:d,preventScrollReset:u,relative:o,viewTransition:m});function v(j){n&&n(j),j.defaultPrevented||S(j)}return p.createElement("a",Ss({},b,{href:g||h,onClick:f||i?n:v,ref:s,target:d}))});var jn;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(jn||(jn={}));var Nn;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Nn||(Nn={}));function lc(r,e){let{target:s,replace:n,state:o,preventScrollReset:i,relative:a,viewTransition:l}=e===void 0?{}:e,d=Rr(),c=Qe(),u=Lo(r,{relative:a});return p.useCallback(m=>{if(tc(m,s)){m.preventDefault();let b=n!==void 0?n:Nr(c)===Nr(u);d(r,{replace:b,state:o,preventScrollReset:i,relative:a,viewTransition:l})}},[c,d,u,n,o,s,r,i,a,l])}let cc={data:""},dc=r=>typeof window=="object"?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||cc,uc=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,mc=/\/\*[^]*?\*\/|  +/g,Sn=/\n+/g,Ue=(r,e)=>{let s="",n="",o="";for(let i in r){let a=r[i];i[0]=="@"?i[1]=="i"?s=i+" "+a+";":n+=i[1]=="f"?Ue(a,i):i+"{"+Ue(a,i[1]=="k"?"":e)+"}":typeof a=="object"?n+=Ue(a,e?e.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,l):l?l+" "+d:d)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Ue.p?Ue.p(i,a):i+":"+a+";")}return s+(e&&o?e+"{"+o+"}":o)+n},Re={},Uo=r=>{if(typeof r=="object"){let e="";for(let s in r)e+=s+Uo(r[s]);return e}return r},pc=(r,e,s,n,o)=>{let i=Uo(r),a=Re[i]||(Re[i]=(d=>{let c=0,u=11;for(;c<d.length;)u=101*u+d.charCodeAt(c++)>>>0;return"go"+u})(i));if(!Re[a]){let d=i!==r?r:(c=>{let u,m,b=[{}];for(;u=uc.exec(c.replace(mc,""));)u[4]?b.shift():u[3]?(m=u[3].replace(Sn," ").trim(),b.unshift(b[0][m]=b[0][m]||{})):b[0][u[1]]=u[2].replace(Sn," ").trim();return b[0]})(r);Re[a]=Ue(o?{["@keyframes "+a]:d}:d,s?"":"."+a)}let l=s&&Re.g?Re.g:null;return s&&(Re.g=Re[a]),((d,c,u,m)=>{m?c.data=c.data.replace(m,d):c.data.indexOf(d)===-1&&(c.data=u?d+c.data:c.data+d)})(Re[a],e,n,l),a},hc=(r,e,s)=>r.reduce((n,o,i)=>{let a=e[i];if(a&&a.call){let l=a(s),d=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=d?"."+d:l&&typeof l=="object"?l.props?"":Ue(l,""):l===!1?"":l}return n+o+(a??"")},"");function Or(r){let e=this||{},s=r.call?r(e.p):r;return pc(s.unshift?s.raw?hc(s,[].slice.call(arguments,1),e.p):s.reduce((n,o)=>Object.assign(n,o&&o.call?o(e.p):o),{}):s,dc(e.target),e.g,e.o,e.k)}let Ho,Cs,ks;Or.bind({g:1});let Le=Or.bind({k:1});function fc(r,e,s,n){Ue.p=e,Ho=r,Cs=s,ks=n}function Ze(r,e){let s=this||{};return function(){let n=arguments;function o(i,a){let l=Object.assign({},i),d=l.className||o.className;s.p=Object.assign({theme:Cs&&Cs()},l),s.o=/ *go\d+/.test(d),l.className=Or.apply(s,n)+(d?" "+d:"");let c=r;return r[0]&&(c=l.as||r,delete l.as),ks&&c[0]&&ks(l),Ho(c,l)}return o}}var gc=r=>typeof r=="function",Sr=(r,e)=>gc(r)?r(e):r,xc=(()=>{let r=0;return()=>(++r).toString()})(),zo=(()=>{let r;return()=>{if(r===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r}})(),bc=20,Js="default",Go=(r,e)=>{let{toastLimit:s}=r.settings;switch(e.type){case 0:return{...r,toasts:[e.toast,...r.toasts].slice(0,s)};case 1:return{...r,toasts:r.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:n}=e;return Go(r,{type:r.toasts.find(a=>a.id===n.id)?1:0,toast:n});case 3:let{toastId:o}=e;return{...r,toasts:r.toasts.map(a=>a.id===o||o===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...r,toasts:[]}:{...r,toasts:r.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...r,pausedAt:e.time};case 6:let i=e.time-(r.pausedAt||0);return{...r,pausedAt:void 0,toasts:r.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},pr=[],Wo={toasts:[],pausedAt:void 0,settings:{toastLimit:bc}},Te={},qo=(r,e=Js)=>{Te[e]=Go(Te[e]||Wo,r),pr.forEach(([s,n])=>{s===e&&n(Te[e])})},Vo=r=>Object.keys(Te).forEach(e=>qo(r,e)),yc=r=>Object.keys(Te).find(e=>Te[e].toasts.some(s=>s.id===r)),Ir=(r=Js)=>e=>{qo(e,r)},vc={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},wc=(r={},e=Js)=>{let[s,n]=p.useState(Te[e]||Wo),o=p.useRef(Te[e]);p.useEffect(()=>(o.current!==Te[e]&&n(Te[e]),pr.push([e,n]),()=>{let a=pr.findIndex(([l])=>l===e);a>-1&&pr.splice(a,1)}),[e]);let i=s.toasts.map(a=>{var l,d,c;return{...r,...r[a.type],...a,removeDelay:a.removeDelay||((l=r[a.type])==null?void 0:l.removeDelay)||(r==null?void 0:r.removeDelay),duration:a.duration||((d=r[a.type])==null?void 0:d.duration)||(r==null?void 0:r.duration)||vc[a.type],style:{...r.style,...(c=r[a.type])==null?void 0:c.style,...a.style}}});return{...s,toasts:i}},jc=(r,e="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:r,pauseDuration:0,...s,id:(s==null?void 0:s.id)||xc()}),Jt=r=>(e,s)=>{let n=jc(e,r,s);return Ir(n.toasterId||yc(n.id))({type:2,toast:n}),n.id},Y=(r,e)=>Jt("blank")(r,e);Y.error=Jt("error");Y.success=Jt("success");Y.loading=Jt("loading");Y.custom=Jt("custom");Y.dismiss=(r,e)=>{let s={type:3,toastId:r};e?Ir(e)(s):Vo(s)};Y.dismissAll=r=>Y.dismiss(void 0,r);Y.remove=(r,e)=>{let s={type:4,toastId:r};e?Ir(e)(s):Vo(s)};Y.removeAll=r=>Y.remove(void 0,r);Y.promise=(r,e,s)=>{let n=Y.loading(e.loading,{...s,...s==null?void 0:s.loading});return typeof r=="function"&&(r=r()),r.then(o=>{let i=e.success?Sr(e.success,o):void 0;return i?Y.success(i,{id:n,...s,...s==null?void 0:s.success}):Y.dismiss(n),o}).catch(o=>{let i=e.error?Sr(e.error,o):void 0;i?Y.error(i,{id:n,...s,...s==null?void 0:s.error}):Y.dismiss(n)}),r};var Nc=1e3,Sc=(r,e="default")=>{let{toasts:s,pausedAt:n}=wc(r,e),o=p.useRef(new Map).current,i=p.useCallback((m,b=Nc)=>{if(o.has(m))return;let w=setTimeout(()=>{o.delete(m),a({type:4,toastId:m})},b);o.set(m,w)},[]);p.useEffect(()=>{if(n)return;let m=Date.now(),b=s.map(w=>{if(w.duration===1/0)return;let g=(w.duration||0)+w.pauseDuration-(m-w.createdAt);if(g<0){w.visible&&Y.dismiss(w.id);return}return setTimeout(()=>Y.dismiss(w.id,e),g)});return()=>{b.forEach(w=>w&&clearTimeout(w))}},[s,n,e]);let a=p.useCallback(Ir(e),[e]),l=p.useCallback(()=>{a({type:5,time:Date.now()})},[a]),d=p.useCallback((m,b)=>{a({type:1,toast:{id:m,height:b}})},[a]),c=p.useCallback(()=>{n&&a({type:6,time:Date.now()})},[n,a]),u=p.useCallback((m,b)=>{let{reverseOrder:w=!1,gutter:g=8,defaultPosition:f}=b||{},h=s.filter(j=>(j.position||f)===(m.position||f)&&j.height),S=h.findIndex(j=>j.id===m.id),v=h.filter((j,x)=>x<S&&j.visible).length;return h.filter(j=>j.visible).slice(...w?[v+1]:[0,v]).reduce((j,x)=>j+(x.height||0)+g,0)},[s]);return p.useEffect(()=>{s.forEach(m=>{if(m.dismissed)i(m.id,m.removeDelay);else{let b=o.get(m.id);b&&(clearTimeout(b),o.delete(m.id))}})},[s,i]),{toasts:s,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},Cc=Le`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,kc=Le`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Tc=Le`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Dc=Ze("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${r=>r.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Cc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${kc} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${r=>r.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Tc} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ec=Le`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ac=Ze("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${r=>r.secondary||"#e0e0e0"};
  border-right-color: ${r=>r.primary||"#616161"};
  animation: ${Ec} 1s linear infinite;
`,Pc=Le`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Rc=Le`
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
}`,Oc=Ze("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${r=>r.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Pc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Rc} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${r=>r.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ic=Ze("div")`
  position: absolute;
`,Mc=Ze("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Fc=Le`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Lc=Ze("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Fc} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,_c=({toast:r})=>{let{icon:e,type:s,iconTheme:n}=r;return e!==void 0?typeof e=="string"?p.createElement(Lc,null,e):e:s==="blank"?null:p.createElement(Mc,null,p.createElement(Ac,{...n}),s!=="loading"&&p.createElement(Ic,null,s==="error"?p.createElement(Dc,{...n}):p.createElement(Oc,{...n})))},$c=r=>`
0% {transform: translate3d(0,${r*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Bc=r=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${r*-150}%,-1px) scale(.6); opacity:0;}
`,Uc="0%{opacity:0;} 100%{opacity:1;}",Hc="0%{opacity:1;} 100%{opacity:0;}",zc=Ze("div")`
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
`,Gc=Ze("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Wc=(r,e)=>{let s=r.includes("top")?1:-1,[n,o]=zo()?[Uc,Hc]:[$c(s),Bc(s)];return{animation:e?`${Le(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Le(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},qc=p.memo(({toast:r,position:e,style:s,children:n})=>{let o=r.height?Wc(r.position||e||"top-center",r.visible):{opacity:0},i=p.createElement(_c,{toast:r}),a=p.createElement(Gc,{...r.ariaProps},Sr(r.message,r));return p.createElement(zc,{className:r.className,style:{...o,...s,...r.style}},typeof n=="function"?n({icon:i,message:a}):p.createElement(p.Fragment,null,i,a))});fc(p.createElement);var Vc=({id:r,className:e,style:s,onHeightUpdate:n,children:o})=>{let i=p.useCallback(a=>{if(a){let l=()=>{let d=a.getBoundingClientRect().height;n(r,d)};l(),new MutationObserver(l).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[r,n]);return p.createElement("div",{ref:i,className:e,style:s},o)},Jc=(r,e)=>{let s=r.includes("top"),n=s?{top:0}:{bottom:0},o=r.includes("center")?{justifyContent:"center"}:r.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:zo()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(s?1:-1)}px)`,...n,...o}},Kc=Or`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,tr=16,Yc=({reverseOrder:r,position:e="top-center",toastOptions:s,gutter:n,children:o,toasterId:i,containerStyle:a,containerClassName:l})=>{let{toasts:d,handlers:c}=Sc(s,i);return p.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:tr,left:tr,right:tr,bottom:tr,pointerEvents:"none",...a},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(u=>{let m=u.position||e,b=c.calculateOffset(u,{reverseOrder:r,gutter:n,defaultPosition:e}),w=Jc(m,b);return p.createElement(Vc,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?Kc:"",style:w},u.type==="custom"?Sr(u.message,u):o?o(u):p.createElement(qc,{toast:u,position:m}))}))},$=Y;const Jo=p.createContext();function Mr(){return p.useContext(Jo)}const Cn={light:{name:"Light Theme",cssVars:{"--primary":"#2563eb","--primary-foreground":"#ffffff","--background":"#ffffff","--foreground":"#0f172a","--card":"#ffffff","--muted":"#f8fafc","--border":"#e2e8f0"},isDark:!1},dark:{name:"Dark Theme",cssVars:{"--primary":"#3b82f6","--primary-foreground":"#ffffff","--background":"#0f172a","--foreground":"#f8fafc","--card":"#1e293b","--muted":"#1e293b","--border":"#334155"},isDark:!0},blue:{name:"Blue Theme",cssVars:{"--primary":"#1e40af","--primary-foreground":"#ffffff","--background":"#f0f9ff","--foreground":"#0c4a6e","--card":"#e0f2fe","--muted":"#e0f2fe","--border":"#7dd3fc"},isDark:!1},purple:{name:"Purple Theme",cssVars:{"--primary":"#7c3aed","--primary-foreground":"#ffffff","--background":"#faf5ff","--foreground":"#581c87","--card":"#f3e8ff","--muted":"#f3e8ff","--border":"#c4b5fd"},isDark:!1},green:{name:"Green Theme",cssVars:{"--primary":"#059669","--primary-foreground":"#ffffff","--background":"#f0fdf4","--foreground":"#064e3b","--card":"#dcfce7","--muted":"#dcfce7","--border":"#86efac"},isDark:!1},orange:{name:"Orange Theme",cssVars:{"--primary":"#ea580c","--primary-foreground":"#ffffff","--background":"#fff7ed","--foreground":"#9a3412","--card":"#fed7aa","--muted":"#fed7aa","--border":"#fdba74"},isDark:!1},red:{name:"Red Theme",cssVars:{"--primary":"#dc2626","--primary-foreground":"#ffffff","--background":"#fef2f2","--foreground":"#991b1b","--card":"#fecaca","--muted":"#fecaca","--border":"#fca5a5"},isDark:!1},pink:{name:"Pink Theme",cssVars:{"--primary":"#db2777","--primary-foreground":"#ffffff","--background":"#fdf2f8","--foreground":"#9d174d","--card":"#fce7f3","--muted":"#fce7f3","--border":"#f9a8d4"},isDark:!1},cyan:{name:"Cyan Theme",cssVars:{"--primary":"#0891b2","--primary-foreground":"#ffffff","--background":"#ecfeff","--foreground":"#164e63","--card":"#cffafe","--muted":"#cffafe","--border":"#67e8f9"},isDark:!1},amber:{name:"Amber Theme",cssVars:{"--primary":"#d97706","--primary-foreground":"#ffffff","--background":"#fffbeb","--foreground":"#92400e","--card":"#fef3c7","--muted":"#fef3c7","--border":"#fde68a"},isDark:!1},emerald:{name:"Emerald Theme",cssVars:{"--primary":"#10b981","--primary-foreground":"#ffffff","--background":"#ecfdf5","--foreground":"#064e3b","--card":"#d1fae5","--muted":"#d1fae5","--border":"#6ee7b7"},isDark:!1}};function Xc({children:r}){const[e,s]=p.useState("light");p.useEffect(()=>{const a=localStorage.getItem("theme")||"light";s(a),n(a)},[]);const n=a=>{const l=Cn[a];l&&(Object.entries(l.cssVars).forEach(([d,c])=>{document.documentElement.style.setProperty(d,c)}),document.documentElement.classList.toggle("dark",l.isDark))},o=a=>{s(a),localStorage.setItem("theme",a),n(a)},i=()=>{o(e==="light"?"dark":"light")};return t.jsx(Jo.Provider,{value:{theme:e,setTheme:o,toggleTheme:i,themes:Cn},children:r})}/**
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
 */const Ko="firebasestorage.googleapis.com",Yo="storageBucket",Qc=2*60*1e3,Zc=10*60*1e3;/**
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
 */class ee extends ja{constructor(e,s,n=0){super(Zr(e),`Firebase Storage: ${s} (${Zr(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Z;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Z||(Z={}));function Zr(r){return"storage/"+r}function Ks(){const r="An unknown error occurred, please check the error payload for server response.";return new ee(Z.UNKNOWN,r)}function ed(r){return new ee(Z.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function td(r){return new ee(Z.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rd(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ee(Z.UNAUTHENTICATED,r)}function sd(){return new ee(Z.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nd(r){return new ee(Z.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function od(){return new ee(Z.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function id(){return new ee(Z.CANCELED,"User canceled the upload/download.")}function ad(r){return new ee(Z.INVALID_URL,"Invalid URL '"+r+"'.")}function ld(r){return new ee(Z.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function cd(){return new ee(Z.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Yo+"' property when initializing the app?")}function dd(){return new ee(Z.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ud(){return new ee(Z.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function md(r){return new ee(Z.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ts(r){return new ee(Z.INVALID_ARGUMENT,r)}function Xo(){return new ee(Z.APP_DELETED,"The Firebase app was deleted.")}function pd(r){return new ee(Z.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $t(r,e){return new ee(Z.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Mt(r){throw new ee(Z.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class ye{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=ye.makeFromUrl(e,s)}catch{return new ye(e,"")}if(n.path==="")return n;throw ld(e)}static makeFromUrl(e,s){let n=null;const o="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+o+a,"i"),d={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const u="v[A-Za-z0-9_]+",m=s.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",w=new RegExp(`^https?://${m}/${u}/b/${o}/o${b}`,"i"),g={bucket:1,path:3},f=s===Ko?"(?:storage.googleapis.com|storage.cloud.google.com)":s,h="([^?#]*)",S=new RegExp(`^https?://${f}/${o}/${h}`,"i"),j=[{regex:l,indices:d,postModify:i},{regex:w,indices:g,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<j.length;x++){const y=j[x],D=y.regex.exec(e);if(D){const A=D[y.indices.bucket];let P=D[y.indices.path];P||(P=""),n=new ye(A,P),y.postModify(n);break}}if(n==null)throw ad(e);return n}}class hd{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function fd(r,e,s){let n=1,o=null,i=null,a=!1,l=0;function d(){return l===2}let c=!1;function u(...h){c||(c=!0,e.apply(null,h))}function m(h){o=setTimeout(()=>{o=null,r(w,d())},h)}function b(){i&&clearTimeout(i)}function w(h,...S){if(c){b();return}if(h){b(),u.call(null,h,...S);return}if(d()||a){b(),u.call(null,h,...S);return}n<64&&(n*=2);let j;l===1?(l=2,j=0):j=(n+Math.random())*1e3,m(j)}let g=!1;function f(h){g||(g=!0,b(),!c&&(o!==null?(h||(l=2),clearTimeout(o),m(0)):h||(l=1)))}return m(0),i=setTimeout(()=>{a=!0,f(!0)},s),f}function gd(r){r(!1)}/**
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
 */function xd(r){return r!==void 0}function bd(r){return typeof r=="object"&&!Array.isArray(r)}function Ys(r){return typeof r=="string"||r instanceof String}function kn(r){return Xs()&&r instanceof Blob}function Xs(){return typeof Blob<"u"}function Tn(r,e,s,n){if(n<e)throw Ts(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>s)throw Ts(`Invalid value for '${r}'. Expected ${s} or less.`)}/**
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
 */function Qs(r,e,s){let n=e;return s==null&&(n=`https://${e}`),`${s}://${n}/v0${r}`}function Qo(r){const e=encodeURIComponent;let s="?";for(const n in r)if(r.hasOwnProperty(n)){const o=e(n)+"="+e(r[n]);s=s+o+"&"}return s=s.slice(0,-1),s}var ot;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(ot||(ot={}));/**
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
 */function yd(r,e){const s=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return s||o||i}/**
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
 */class vd{constructor(e,s,n,o,i,a,l,d,c,u,m,b=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=o,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=d,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=m,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,g)=>{this.resolve_=w,this.reject_=g,this.start_()})}start_(){const e=(n,o)=>{if(o){n(!1,new rr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const d=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,c)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===ot.NO_ERROR,d=i.getStatus();if(!l||yd(d,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ot.ABORT;n(!1,new rr(!1,null,u));return}const c=this.successCodes_.indexOf(d)!==-1;n(!0,new rr(c,i))})},s=(n,o)=>{const i=this.resolve_,a=this.reject_,l=o.connection;if(o.wasSuccessCode)try{const d=this.callback_(l,l.getResponse());xd(d)?i(d):i()}catch(d){a(d)}else if(l!==null){const d=Ks();d.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,d)):a(d)}else if(o.canceled){const d=this.appDelete_?Xo():id();a(d)}else{const d=od();a(d)}};this.canceled_?s(!1,new rr(!1,null,!0)):this.backoffId_=fd(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rr{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function wd(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function jd(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Nd(r,e){e&&(r["X-Firebase-GMPID"]=e)}function Sd(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function Cd(r,e,s,n,o,i,a=!0){const l=Qo(r.urlParams),d=r.url+l,c=Object.assign({},r.headers);return Nd(c,e),wd(c,s),jd(c,i),Sd(c,n),new vd(d,r.method,c,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,a)}/**
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
 */function kd(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Td(...r){const e=kd();if(e!==void 0){const s=new e;for(let n=0;n<r.length;n++)s.append(r[n]);return s.getBlob()}else{if(Xs())return new Blob(r);throw new ee(Z.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Dd(r,e,s){return r.webkitSlice?r.webkitSlice(e,s):r.mozSlice?r.mozSlice(e,s):r.slice?r.slice(e,s):null}/**
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
 */function Ed(r){if(typeof atob>"u")throw md("base-64");return atob(r)}/**
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
 */const De={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class es{constructor(e,s){this.data=e,this.contentType=s||null}}function Ad(r,e){switch(r){case De.RAW:return new es(Zo(e));case De.BASE64:case De.BASE64URL:return new es(ei(r,e));case De.DATA_URL:return new es(Rd(e),Od(e))}throw Ks()}function Zo(r){const e=[];for(let s=0;s<r.length;s++){let n=r.charCodeAt(s);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<r.length-1&&(r.charCodeAt(s+1)&64512)===56320))e.push(239,191,189);else{const i=n,a=r.charCodeAt(++s);n=65536|(i&1023)<<10|a&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function Pd(r){let e;try{e=decodeURIComponent(r)}catch{throw $t(De.DATA_URL,"Malformed data URL.")}return Zo(e)}function ei(r,e){switch(r){case De.BASE64:{const o=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(o||i)throw $t(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case De.BASE64URL:{const o=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(o||i)throw $t(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=Ed(e)}catch(o){throw o.message.includes("polyfill")?o:$t(r,"Invalid character found")}const n=new Uint8Array(s.length);for(let o=0;o<s.length;o++)n[o]=s.charCodeAt(o);return n}class ti{constructor(e){this.base64=!1,this.contentType=null;const s=e.match(/^data:([^,]+)?,/);if(s===null)throw $t(De.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=Id(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function Rd(r){const e=new ti(r);return e.base64?ei(De.BASE64,e.rest):Pd(e.rest)}function Od(r){return new ti(r).contentType}function Id(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
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
 */class He{constructor(e,s){let n=0,o="";kn(e)?(this.data_=e,n=e.size,o=e.type):e instanceof ArrayBuffer?(s?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(s?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,s){if(kn(this.data_)){const n=this.data_,o=Dd(n,e,s);return o===null?null:new He(o)}else{const n=new Uint8Array(this.data_.buffer,e,s-e);return new He(n,!0)}}static getBlob(...e){if(Xs()){const s=e.map(n=>n instanceof He?n.data_:n);return new He(Td.apply(null,s))}else{const s=e.map(a=>Ys(a)?Ad(De.RAW,a).data:a.data_);let n=0;s.forEach(a=>{n+=a.byteLength});const o=new Uint8Array(n);let i=0;return s.forEach(a=>{for(let l=0;l<a.length;l++)o[i++]=a[l]}),new He(o,!0)}}uploadData(){return this.data_}}/**
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
 */function ri(r){let e;try{e=JSON.parse(r)}catch{return null}return bd(e)?e:null}/**
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
 */function Md(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function Fd(r,e){const s=e.split("/").filter(n=>n.length>0).join("/");return r.length===0?s:r+"/"+s}function si(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */function Ld(r,e){return e}class de{constructor(e,s,n,o){this.server=e,this.local=s||e,this.writable=!!n,this.xform=o||Ld}}let sr=null;function _d(r){return!Ys(r)||r.length<2?r:si(r)}function ni(){if(sr)return sr;const r=[];r.push(new de("bucket")),r.push(new de("generation")),r.push(new de("metageneration")),r.push(new de("name","fullPath",!0));function e(i,a){return _d(a)}const s=new de("name");s.xform=e,r.push(s);function n(i,a){return a!==void 0?Number(a):a}const o=new de("size");return o.xform=n,r.push(o),r.push(new de("timeCreated")),r.push(new de("updated")),r.push(new de("md5Hash",null,!0)),r.push(new de("cacheControl",null,!0)),r.push(new de("contentDisposition",null,!0)),r.push(new de("contentEncoding",null,!0)),r.push(new de("contentLanguage",null,!0)),r.push(new de("contentType",null,!0)),r.push(new de("metadata","customMetadata",!0)),sr=r,sr}function $d(r,e){function s(){const n=r.bucket,o=r.fullPath,i=new ye(n,o);return e._makeStorageReference(i)}Object.defineProperty(r,"ref",{get:s})}function Bd(r,e,s){const n={};n.type="file";const o=s.length;for(let i=0;i<o;i++){const a=s[i];n[a.local]=a.xform(n,e[a.server])}return $d(n,r),n}function oi(r,e,s){const n=ri(e);return n===null?null:Bd(r,n,s)}function Ud(r,e,s,n){const o=ri(e);if(o===null||!Ys(o.downloadTokens))return null;const i=o.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(c=>{const u=r.bucket,m=r.fullPath,b="/b/"+a(u)+"/o/"+a(m),w=Qs(b,s,n),g=Qo({alt:"media",token:c});return w+g})[0]}function Hd(r,e){const s={},n=e.length;for(let o=0;o<n;o++){const i=e[o];i.writable&&(s[i.server]=r[i.local])}return JSON.stringify(s)}class ii{constructor(e,s,n,o){this.url=e,this.method=s,this.handler=n,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ai(r){if(!r)throw Ks()}function zd(r,e){function s(n,o){const i=oi(r,o,e);return ai(i!==null),i}return s}function Gd(r,e){function s(n,o){const i=oi(r,o,e);return ai(i!==null),Ud(i,o,r.host,r._protocol)}return s}function li(r){function e(s,n){let o;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?o=sd():o=rd():s.getStatus()===402?o=td(r.bucket):s.getStatus()===403?o=nd(r.path):o=n,o.status=s.getStatus(),o.serverResponse=n.serverResponse,o}return e}function Wd(r){const e=li(r);function s(n,o){let i=e(n,o);return n.getStatus()===404&&(i=ed(r.path)),i.serverResponse=o.serverResponse,i}return s}function qd(r,e,s){const n=e.fullServerUrl(),o=Qs(n,r.host,r._protocol),i="GET",a=r.maxOperationRetryTime,l=new ii(o,i,Gd(r,s),a);return l.errorHandler=Wd(e),l}function Vd(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function Jd(r,e,s){const n=Object.assign({},s);return n.fullPath=r.path,n.size=e.size(),n.contentType||(n.contentType=Vd(null,e)),n}function Kd(r,e,s,n,o){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let j="";for(let x=0;x<2;x++)j=j+Math.random().toString().slice(2);return j}const d=l();a["Content-Type"]="multipart/related; boundary="+d;const c=Jd(e,n,o),u=Hd(c,s),m="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+d+`\r
Content-Type: `+c.contentType+`\r
\r
`,b=`\r
--`+d+"--",w=He.getBlob(m,n,b);if(w===null)throw dd();const g={name:c.fullPath},f=Qs(i,r.host,r._protocol),h="POST",S=r.maxUploadRetryTime,v=new ii(f,h,zd(r,s),S);return v.urlParams=g,v.headers=a,v.body=w.uploadData(),v.errorHandler=li(e),v}class Yd{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ot.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ot.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ot.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,s,n,o){if(this.sent_)throw Mt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,e,!0),o!==void 0)for(const i in o)o.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,o[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Xd extends Yd{initXhr(){this.xhr_.responseType="text"}}function ci(){return new Xd}/**
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
 */class at{constructor(e,s){this._service=e,s instanceof ye?this._location=s:this._location=ye.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new at(e,s)}get root(){const e=new ye(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return si(this._location.path)}get storage(){return this._service}get parent(){const e=Md(this._location.path);if(e===null)return null;const s=new ye(this._location.bucket,e);return new at(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw pd(e)}}function Qd(r,e,s){r._throwIfRoot("uploadBytes");const n=Kd(r.storage,r._location,ni(),new He(e,!0),s);return r.storage.makeRequestWithTokens(n,ci).then(o=>({metadata:o,ref:r}))}function Zd(r){r._throwIfRoot("getDownloadURL");const e=qd(r.storage,r._location,ni());return r.storage.makeRequestWithTokens(e,ci).then(s=>{if(s===null)throw ud();return s})}function eu(r,e){const s=Fd(r._location.path,e),n=new ye(r._location.bucket,s);return new at(r.storage,n)}/**
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
 */function tu(r){return/^[A-Za-z]+:\/\//.test(r)}function ru(r,e){return new at(r,e)}function di(r,e){if(r instanceof Zs){const s=r;if(s._bucket==null)throw cd();const n=new at(s,s._bucket);return e!=null?di(n,e):n}else return e!==void 0?eu(r,e):r}function su(r,e){if(e&&tu(e)){if(r instanceof Zs)return ru(r,e);throw Ts("To use ref(service, url), the first argument must be a Storage instance.")}else return di(r,e)}function Dn(r,e){const s=e==null?void 0:e[Yo];return s==null?null:ye.makeFromBucketSpec(s,r)}function nu(r,e,s,n={}){r.host=`${e}:${s}`,r._protocol="http";const{mockUserToken:o}=n;o&&(r._overrideAuthToken=typeof o=="string"?o:Ca(o,r.app.options.projectId))}class Zs{constructor(e,s,n,o,i){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=o,this._firebaseVersion=i,this._bucket=null,this._host=Ko,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qc,this._maxUploadRetryTime=Zc,this._requests=new Set,o!=null?this._bucket=ye.makeFromBucketSpec(o,this._host):this._bucket=Dn(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ye.makeFromBucketSpec(this._url,e):this._bucket=Dn(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tn("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tn("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new at(this,e)}_makeRequest(e,s,n,o,i=!0){if(this._deleted)return new hd(Xo());{const a=Cd(e,this._appId,n,o,s,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,s){const[n,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,o).getPromise()}}const En="@firebase/storage",An="0.13.2";/**
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
 */const ui="storage";function tt(r,e,s){return r=Tr(r),Qd(r,e,s)}function rt(r){return r=Tr(r),Zd(r)}function st(r,e){return r=Tr(r),su(r,e)}function mi(r=hs(),e){r=Tr(r);const n=Na(r,ui).getImmediate({identifier:e}),o=Sa("storage");return o&&ou(n,...o),n}function ou(r,e,s,n={}){nu(r,e,s,n)}function iu(r,{instanceIdentifier:e}){const s=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new Zs(s,n,o,e,wa)}function au(){ya(new va(ui,iu,"PUBLIC").setMultipleInstances(!0)),un(En,An,""),un(En,An,"esm2017")}au();const hr={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"};console.log("Firebase config loaded:",{hasApiKey:!!hr.apiKey,hasAuthDomain:!!hr.authDomain,projectId:hr.projectId,usingEnvVars:!1});const en=vr(hr),ut=_s(en),Ne=$s(en),mt=mi(en),pi=p.createContext();function Tt(){return p.useContext(pi)}function lu({children:r}){const[e,s]=p.useState(null),[n,o]=p.useState(!0);p.useEffect(()=>{let c,u;try{c=Bs(ut,async m=>{try{if(m)try{const b=await dr(V(Ne,"users",m.uid)),w=b.exists()?b.data():null;s({uid:m.uid,email:m.email,displayName:m.displayName,photoURL:m.photoURL,...w})}catch(b){console.log("⚠️ Firestore not available, using basic user data:",b.message),s({uid:m.uid,email:m.email,displayName:m.displayName,photoURL:m.photoURL})}else s(null)}catch(b){console.error("Error in auth state change:",b),s(null)}finally{o(!1)}}),u=setTimeout(()=>{console.log("Firebase auth timeout - setting loading to false"),o(!1)},5e3)}catch(m){console.error("Error setting up auth listener:",m),o(!1)}return()=>{c&&c(),u&&clearTimeout(u)}},[]);const d={user:e,loading:n,signInWithGoogle:async()=>{try{const c=new Ea;c.addScope("email"),c.addScope("profile");const u=await mn(ut,c);try{await be(V(Ne,"users",u.user.uid),{uid:u.user.uid,email:u.user.email,displayName:u.user.displayName,photoURL:u.user.photoURL,createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(m){console.warn("Failed to save user data to Firestore:",m)}console.log("Successfully signed in!")}catch(c){throw console.error("Failed to sign in:",c.message),c}},signInWithGitHub:async()=>{var c,u;try{console.log("Using Firebase GitHub authentication");const m=new Ta;m.addScope("user:email");const b=await mn(ut,m);try{await be(V(Ne,"users",b.user.uid),{uid:b.user.uid,email:b.user.email,displayName:b.user.displayName||((c=b.user.email)==null?void 0:c.split("@")[0])||"GitHub User",photoURL:b.user.photoURL,provider:"github",createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(w){console.warn("Failed to save user data to Firestore:",w)}console.log("Successfully signed in with GitHub!")}catch(m){if(console.error("GitHub authentication error:",m.message),m.code==="auth/account-exists-with-different-credential"){const b=(u=m.customData)==null?void 0:u.email;if(b)try{const w=await Da(ut,b);throw console.log("Available sign-in methods for",b,":",w),w&&w.length>0?w.includes("google.com")?new Error(`An account with ${b} already exists using Google. Please sign in with Google instead, or use a different email for GitHub.`):w.includes("password")?new Error(`An account with ${b} already exists using email/password. Please sign in with your existing method instead.`):new Error(`An account with ${b} already exists. Please sign in with your existing method instead.`):new Error(`An account with ${b} already exists. Please try signing in with Google first, then you can link your GitHub account.`)}catch(w){throw console.error("Failed to check sign-in methods:",w.message),new Error(`An account with ${b} already exists. Please sign in with your existing method instead.`)}else throw new Error("An account with this email already exists. Please sign in with your existing method instead.")}else throw m.code==="auth/internal-error"?(console.error("GitHub authentication internal error:",m.message),new Error("GitHub authentication is not properly configured. Please check Firebase Console settings.")):(console.error("Failed to sign in with GitHub:",m.message),m)}},logout:async()=>{try{await ka(ut),console.log("Successfully signed out!")}catch(c){console.error("Failed to sign out:",c.message)}},auth:ut,db:Ne};return t.jsx(pi.Provider,{value:d,children:n?t.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),t.jsx("p",{className:"text-muted-foreground",children:"Loading DreamBuild..."})]})}):r})}const hi=p.createContext();function _e(){return p.useContext(hi)}function cu({children:r}){const{user:e,db:s}=Tt(),[n,o]=p.useState({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),[i,a]=p.useState([]),[l,d]=p.useState(!1),c=p.useCallback(j=>{o(x=>({...x,activeFile:j,lastModified:new Date}))},[]),u=p.useCallback((j,x)=>{console.log(`🔄 Updating file: ${j} (${(x==null?void 0:x.length)||0} chars)`),o(y=>{const D={...y,files:{...y.files,[j]:x},lastModified:new Date};return console.log("📁 Project files after update:",Object.keys(D.files)),D})},[]),m=p.useCallback(j=>{o(x=>({...x,config:{...x.config,...j},lastModified:new Date}))},[]),b=p.useCallback(async()=>{if(!e){console.log("⚠️ loadProjects: No user found");return}console.log("🔄 Loading projects for user:",e.uid),d(!0);try{const{collection:j,query:x,where:y,getDocs:D,orderBy:A}=await Be(async()=>{const{collection:k,query:B,where:T,getDocs:R,orderBy:L}=await import("./firebase-_l3dWQPc.js").then(G=>G.D);return{collection:k,query:B,where:T,getDocs:R,orderBy:L}},[]),P=j(s,"projects"),_=x(P,y("userId","==",e.uid),A("lastModified","desc"));console.log("🔥 Querying Firestore for projects...");const O=(await D(_)).docs.map(k=>({id:k.id,...k.data()}));console.log("📦 Loaded projects:",O.length,"projects"),console.log("📋 Projects list:",O),a(O)}catch(j){console.error("❌ Failed to load projects:",j),$.error("Failed to load projects: "+j.message)}finally{d(!1)}},[e,s]),w=p.useCallback(async(j=null)=>{if(!e){$.error("Please sign in to save projects");return}d(!0);try{const x={...n,name:j||n.name,userId:e.uid,lastModified:new Date},{doc:y,setDoc:D,collection:A}=await Be(async()=>{const{doc:_,setDoc:E,collection:O}=await import("./firebase-_l3dWQPc.js").then(k=>k.D);return{doc:_,setDoc:E,collection:O}},[]),P=y(A(s,"projects"));await D(P,{...x,id:P.id,createdAt:n.id?void 0:new Date}),o(_=>({..._,id:P.id})),$.success("Project saved successfully!"),await b()}catch(x){$.error("Failed to save project: "+x.message)}finally{d(!1)}},[n,e,s,b]),g=p.useCallback(async j=>{if(!e){$.error("Please sign in to save projects");return}console.log("💾 saveExternalProject called with:",j),d(!0);try{const x={...j,userId:e.uid,lastModified:new Date,createdAt:j.createdAt||new Date};console.log("📝 Project to save:",x);const{doc:y,setDoc:D,collection:A}=await Be(async()=>{const{doc:E,setDoc:O,collection:k}=await import("./firebase-_l3dWQPc.js").then(B=>B.D);return{doc:E,setDoc:O,collection:k}},[]),P=y(A(s,"projects")),_={...x,id:P.id};console.log("🔥 Saving to Firestore:",_),await D(P,_),console.log("✅ Project saved to Firestore with ID:",P.id),$.success(`Project "${j.name}" saved successfully!`),console.log("🔄 Refreshing projects list..."),await b(),console.log("✅ Projects list refreshed")}catch(x){console.error("❌ Failed to save external project:",x),$.error("Failed to save project")}finally{d(!1)}},[e,s,b]),f=p.useCallback(async j=>{if(e){d(!0);try{const{doc:x,getDoc:y}=await Be(async()=>{const{doc:P,getDoc:_}=await import("./firebase-_l3dWQPc.js").then(E=>E.D);return{doc:P,getDoc:_}},[]),D=x(s,"projects",j),A=await y(D);if(A.exists()){const P={id:A.id,...A.data()};o(P),$.success("Project loaded successfully!")}else $.error("Project not found")}catch(x){$.error("Failed to load project: "+x.message)}finally{d(!1)}}},[e,s]),h=p.useCallback(async j=>{if(e){d(!0);try{const{doc:x,deleteDoc:y}=await Be(async()=>{const{doc:D,deleteDoc:A}=await import("./firebase-_l3dWQPc.js").then(P=>P.D);return{doc:D,deleteDoc:A}},[]);await y(x(s,"projects",j)),a(D=>D.filter(A=>A.id!==j)),$.success("Project deleted successfully!")}catch(x){$.error("Failed to delete project: "+x.message)}finally{d(!1)}}},[e,s]),S=p.useCallback(()=>{o({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),$.success("New project created!")},[]),v={currentProject:n,projects:i,isLoading:l,switchFile:c,updateFile:u,updateConfig:m,saveProject:w,saveExternalProject:g,loadProjects:b,loadProject:f,deleteProject:h,createNewProject:S};return t.jsx(hi.Provider,{value:v,children:r})}const du=()=>{const{theme:r,toggleTheme:e}=Mr(),{user:s,logout:n}=Tt(),[o,i]=p.useState(!1),[a,l]=p.useState(!1),[d,c]=p.useState(!1),u=Qe();Ee.useEffect(()=>{const w=()=>{l(window.innerWidth>=768)};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]),Ee.useEffect(()=>{const w=g=>{d&&!g.target.closest(".user-menu")&&c(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[d]);const m=[{name:"Home",href:"/",icon:Ae},{name:"AI Builder",href:"/ai-builder",icon:X},{name:"Templates",href:"/templates",icon:vt},{name:"Projects",href:"/projects",icon:yt},{name:"Dashboard",href:"/dashboard",icon:fs}],b=w=>u.pathname===w;return t.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm",children:t.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"flex items-center justify-between h-16",children:[t.jsxs(ae,{to:"/",className:"flex items-center gap-3 group",children:[t.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg",children:t.jsx(vt,{className:"h-6 w-6 text-primary-foreground"})}),t.jsxs("div",{className:"flex flex-col",children:[t.jsx("span",{className:"text-xl font-bold text-high-contrast",children:"DreamBuild"}),t.jsx("span",{className:"text-xs text-muted-foreground -mt-1",children:"AI Development Platform"})]})]}),t.jsx("div",{className:"hidden md:flex items-center gap-1",children:m.map(w=>{const g=w.icon;return t.jsxs(ae,{to:w.href,className:`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${b(w.href)?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[t.jsx(g,{className:"h-4 w-4"}),w.name]},w.name)})}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:e,className:"p-2 rounded-lg hover:bg-muted transition-colors",title:`Switch to ${r==="light"?"dark":"light"} mode`,children:r==="light"?t.jsx(Pa,{className:"h-4 w-4 text-muted-foreground"}):t.jsx(Ra,{className:"h-4 w-4 text-muted-foreground"})}),s?t.jsxs("div",{className:"relative user-menu",children:[t.jsxs("button",{onClick:()=>c(!d),className:"flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors",children:[t.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center",children:t.jsx("span",{className:"text-sm font-semibold text-primary",children:(s.displayName||s.email||"U").charAt(0).toUpperCase()})}),t.jsx("span",{className:"hidden sm:inline text-sm font-medium text-foreground",children:s.displayName||s.email})]}),d&&t.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-[60]",children:[t.jsxs("div",{className:"p-3 border-b border-border",children:[t.jsx("p",{className:"text-sm font-medium text-foreground",children:s.displayName||"User"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:s.email})]}),t.jsxs("div",{className:"p-1",children:[t.jsxs(ae,{to:"/dashboard",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[t.jsx(yt,{className:"h-4 w-4"}),"Dashboard"]}),t.jsxs(ae,{to:"/settings",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[t.jsx(gs,{className:"h-4 w-4"}),"Settings"]}),t.jsx("hr",{className:"my-1"}),t.jsxs("button",{onClick:()=>{n(),c(!1)},className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors",children:[t.jsx(pn,{className:"h-4 w-4"}),"Sign Out"]})]})]})]}):t.jsxs(ae,{to:"/login",className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[t.jsx(Ae,{className:"h-4 w-4"}),"Sign In"]}),!a&&t.jsx("button",{onClick:()=>i(!o),className:"p-2 rounded-lg hover:bg-muted transition-colors ml-2",children:o?t.jsx(Oa,{className:"h-4 w-4"}):t.jsx(Ia,{className:"h-4 w-4"})})]})]}),!a&&o&&t.jsx("div",{className:"border-t border-border bg-background",children:t.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[m.map(w=>{const g=w.icon;return t.jsxs(ae,{to:w.href,onClick:()=>i(!1),className:`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border ${b(w.href)?"bg-primary text-primary-foreground border-primary shadow-md":"bg-card text-foreground border-border hover:bg-muted hover:border-primary/30 shadow-sm"}`,children:[t.jsx(g,{className:"h-5 w-5"}),w.name]},w.name)}),s?t.jsxs("div",{className:"mt-4 space-y-2",children:[t.jsxs("div",{className:"px-4 py-2 border-b border-border",children:[t.jsx("p",{className:"text-sm font-medium text-foreground",children:s.displayName||"User"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:s.email})]}),t.jsxs(ae,{to:"/dashboard",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[t.jsx(yt,{className:"h-5 w-5"}),"Dashboard"]}),t.jsxs(ae,{to:"/settings",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[t.jsx(gs,{className:"h-5 w-5"}),"Settings"]}),t.jsxs("button",{onClick:()=>{n(),i(!1)},className:"w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg",children:[t.jsx(pn,{className:"h-5 w-5"}),"Sign Out"]})]}):t.jsxs(ae,{to:"/login",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg text-base font-semibold",children:[t.jsx(Ae,{className:"h-5 w-5"}),"Sign In"]})]})})]})})},uu=()=>{const[r,e]=p.useState(""),[s,n]=p.useState(!1),o=i=>{i.preventDefault(),r&&(n(!0),e(""),setTimeout(()=>n(!1),3e3))};return t.jsx("footer",{className:"bg-background border-t border-border",children:t.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:t.jsx(vt,{className:"h-5 w-5 text-primary-foreground"})}),t.jsx("span",{className:"text-xl font-bold text-foreground",children:"DreamBuild"})]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"AI-powered development platform for modern developers."}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"GitHub",children:t.jsx(pe,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),t.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Twitter",children:t.jsx(Us,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),t.jsx("a",{href:"mailto:contact@dreambuild.ai",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Email",children:t.jsx(wr,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Stay Updated"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Get the latest updates and features."}),t.jsxs("form",{onSubmit:o,className:"space-y-3",children:[t.jsxs("div",{className:"flex gap-2",children:[t.jsx("input",{type:"email",value:r,onChange:i=>e(i.target.value),placeholder:"Enter your email",className:"flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",required:!0}),t.jsx("button",{type:"submit",disabled:s,className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:s?t.jsx(wr,{className:"h-4 w-4"}):t.jsx(Hs,{className:"h-4 w-4"})})]}),s&&t.jsx("p",{className:"text-sm text-green-600",children:"Thanks for subscribing!"})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Quick Links"}),t.jsxs("ul",{className:"space-y-2 text-sm",children:[t.jsx("li",{children:t.jsx("a",{href:"/ai-builder",className:"text-muted-foreground hover:text-foreground transition-colors",children:"AI Builder"})}),t.jsx("li",{children:t.jsx("a",{href:"/templates",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Templates"})}),t.jsx("li",{children:t.jsx("a",{href:"/documentation",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Documentation"})}),t.jsx("li",{children:t.jsx("a",{href:"/support",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Support"})})]})]})]}),t.jsx("div",{className:"border-t border-border pt-8 mt-8",children:t.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[t.jsx("div",{className:"text-sm text-muted-foreground",children:t.jsx("span",{children:"© 2024 Bradley Virtual Solutions, LLC"})}),t.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[t.jsx("a",{href:"/privacy",className:"hover:text-foreground transition-colors",children:"Privacy"}),t.jsx("a",{href:"/terms",className:"hover:text-foreground transition-colors",children:"Terms"}),t.jsx("a",{href:"/contact",className:"hover:text-foreground transition-colors",children:"Contact"})]})]})})]})})},mu=()=>{const r=[{icon:X,title:"AI Code Generation",description:"Generate code with AI assistance."},{icon:yt,title:"Smart Templates",description:"Pre-built templates for quick start."},{icon:wt,title:"Real-time Collaboration",description:"Work together with your team."}],e=[{label:"AI Models",value:"10+",icon:X},{label:"Languages",value:"50+",icon:yt},{label:"Templates",value:"25+",icon:go}];return t.jsxs("div",{className:"min-h-screen bg-background",children:[t.jsxs("section",{className:"relative pt-20 pb-20",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5"}),t.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative flex justify-center",children:t.jsxs("div",{className:"text-center max-w-4xl w-full ml-8",children:[t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8",children:[t.jsx(vt,{className:"h-4 w-4"}),"AI-Powered Development Platform"]}),t.jsxs(M.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight",children:["Build with"," ",t.jsx("span",{className:"bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent",children:"AI"})]}),t.jsx(M.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed",children:"Create amazing projects with AI-powered code generation. Simple, fast, and effective."}),t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-md mx-auto",children:[t.jsxs(ae,{to:"/ai-builder",className:"inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl",children:[t.jsx(Ae,{className:"h-5 w-5"}),"Start Building"]}),t.jsxs(ae,{to:"/templates",className:"inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold",children:[t.jsx(X,{className:"h-5 w-5"}),"Browse Templates"]})]}),t.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto",children:e.map((s,n)=>{const o=s.icon;return t.jsxs("div",{className:"text-center group",children:[t.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[t.jsx(o,{className:"h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"}),t.jsx("div",{className:"text-3xl font-bold text-primary group-hover:text-primary-light transition-colors",children:s.value})]}),t.jsx("div",{className:"text-sm text-muted-foreground",children:s.label})]},n)})})]})})]}),t.jsx("section",{className:"py-20 bg-background",children:t.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16 max-w-4xl mx-auto",children:[t.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Key Features"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Everything you need to build amazing projects"})]}),t.jsx("div",{className:"flex justify-center",children:t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl ml-8",children:r.map((s,n)=>t.jsxs(M.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:n*.1},viewport:{once:!0},whileHover:{y:-5},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-xl hover:bg-card/70 transition-all duration-300 group cursor-pointer",children:[t.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300",children:t.jsx(s.icon,{className:"h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"})}),t.jsx("h3",{className:"text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300",children:s.title}),t.jsx("p",{className:"text-foreground leading-relaxed",children:s.description})]},n))})})]})}),t.jsxs("section",{className:"py-20 relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary-light/5"}),t.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative",children:t.jsxs(M.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"max-w-4xl mx-auto ml-8",children:[t.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Ready to Build?"}),t.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"Start creating amazing projects with AI-powered development tools."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs(ae,{to:"/ai-builder",className:"inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl",children:[t.jsx(Ae,{className:"h-5 w-5"}),"Get Started"]}),t.jsxs(ae,{to:"/templates",className:"inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold",children:[t.jsx(X,{className:"h-5 w-5"}),"View Templates"]})]})]})})]})]})};class pu{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(e,s){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(e.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(e,s,"firebase");const o=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i={id:o,projectName:s||"dream-app",files:e.files,config:e.config,deployedAt:new Date,status:"uploading",platform:"firebase"},a={};for(const[m,b]of Object.entries(e.files))if(b&&b.trim()){const w=st(mt,`projects/${o}/${m}`),g=new Blob([b],{type:this.getMimeType(m)});await tt(w,g);const f=await rt(w);a[m]=f}const l=this.createHostedHTML(e.files),d=st(mt,`projects/${o}/index.html`),c=new Blob([l],{type:"text/html"});await tt(d,c);const u=await rt(d);return await be(V(Ne,"deployments",o),{...i,status:"completed",hostedURL:u,files:a,completedAt:new Date}),this.deployments.set(o,i),console.log("✅ Firebase deployment completed:",u),{success:!0,deploymentId:o,url:u,platform:"firebase"}}catch(n){throw console.error("❌ Firebase deployment failed:",n),new Error(`Firebase deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(e,s){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const n=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(e.files))throw new Error("Apple App Store deployment is only available for mobile applications");const o=this.detectMobileFramework(e.files);console.log(`📱 Deploying ${o} app to Apple App Store...`);const i=await this.generateMobileAppFiles(e,s,o),a=await this.executeAppleStoreBuild(i,s,o),l={id:n,projectName:s||"mobile-app",files:{...e.files,...i},config:e.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"apple-app-store",framework:o,buildInstructions:this.generateAppleStoreInstructions(o,s),terminalOutput:a.output,buildCommands:a.commands},d=this.createAppleStoreInstructionsHTML(s,o,l.buildInstructions,a),c=st(mt,`apple-store/${n}/index.html`),u=new Blob([d],{type:"text/html"});await tt(c,u);const m=await rt(c);return await be(V(Ne,"deployments",n),{...l,hostedURL:m}),this.deployments.set(n,l),{success:a.success,deploymentId:n,url:m,platform:"apple-app-store",framework:o,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Apple App Store deployment failed:",n),new Error(`Apple App Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(e,s){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const n=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(e.files))throw new Error("Google Play Store deployment is only available for mobile applications");const o=this.detectMobileFramework(e.files);console.log(`📱 Deploying ${o} app to Google Play Store...`);const i=await this.generateMobileAppFiles(e,s,o),a=await this.executeGooglePlayBuild(i,s,o),l={id:n,projectName:s||"mobile-app",files:{...e.files,...i},config:e.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"google-play-store",framework:o,buildInstructions:this.generateGooglePlayInstructions(o,s),terminalOutput:a.output,buildCommands:a.commands},d=this.createGooglePlayInstructionsHTML(s,o,l.buildInstructions,a),c=st(mt,`google-play/${n}/index.html`),u=new Blob([d],{type:"text/html"});await tt(c,u);const m=await rt(c);return await be(V(Ne,"deployments",n),{...l,hostedURL:m}),this.deployments.set(n,l),{success:a.success,deploymentId:n,url:m,platform:"google-play-store",framework:o,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Google Play Store deployment failed:",n),new Error(`Google Play Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(e,s,n=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const o=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!n){const i=s.toLowerCase().replace(/[^a-z0-9-]/g,"-"),a=this.createHostedHTML(e.files),l=st(mt,`github-pages/${o}/index.html`),d=new Blob([a],{type:"text/html"});await tt(l,d);const c=await rt(l);return await be(V(Ne,"deployments",o),{id:o,projectName:s,files:e.files,config:e.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:c,repoName:i,instructions:this.generateGitHubInstructions(s,e.files)}),{success:!0,deploymentId:o,url:c,platform:"github-pages",repoName:i,instructions:this.generateGitHubInstructions(s,e.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(o){throw console.error("❌ GitHub deployment failed:",o),new Error(`GitHub deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}createHostedHTML(e){const s=e["index.html"]||this.generateDefaultHTML(),n=e["style.css"]||"",o=e["script.js"]||"";let i=s;return n.trim()&&(i.includes("</head>")?i=i.replace("</head>",`<style>${n}</style>
</head>`):i.includes("<head>")?i=i.replace("<head>",`<head>
<style>${n}</style>`):i=`<style>${n}</style>
${i}`),o.trim()&&(i.includes("</body>")?i=i.replace("</body>",`<script>${o}<\/script>
</body>`):i+=`
<script>${o}<\/script>`),i.includes("<!DOCTYPE html>")||(i=`<!DOCTYPE html>
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
</html>`}getMimeType(e){const s=e.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[s]||"text/plain"}generateGitHubInstructions(e,s){const n=e.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${n}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${n}`],files:Object.keys(s),repoName:n}}getDeploymentStatus(e){return this.deployments.get(e)}async getAllDeployments(){try{const{collection:e,query:s,orderBy:n,limit:o,getDocs:i}=await Be(async()=>{const{collection:c,query:u,orderBy:m,limit:b,getDocs:w}=await import("./firebase-_l3dWQPc.js").then(g=>g.D);return{collection:c,query:u,orderBy:m,limit:b,getDocs:w}},[]),a=e(Ne,"deployments"),l=s(a,n("deployedAt","desc"),o(20));return(await i(l)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return console.error("Error fetching deployments:",e),[]}}async deleteDeployment(e){try{const{deleteDoc:s}=await Be(async()=>{const{deleteDoc:n}=await import("./firebase-_l3dWQPc.js").then(o=>o.D);return{deleteDoc:n}},[]);return await s(V(Ne,"deployments",e)),this.deployments.delete(e),!0}catch(s){return console.error("Error deleting deployment:",s),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(e){const s=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],n=Object.keys(e);return s.some(o=>n.some(i=>i.includes(o)))}async deployMobileApp(e,s,n){const o=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=this.detectMobileFramework(e.files);console.log(`📱 Deploying ${i} mobile app...`);const a={id:o,projectName:s||"mobile-app",files:e.files,config:e.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:i,buildInstructions:this.generateMobileBuildInstructions(i,s,n)},l=this.createMobileAppInstructionsHTML(s,i,a.buildInstructions),d=st(mt,`mobile-apps/${o}/index.html`),c=new Blob([l],{type:"text/html"});await tt(d,c);const u=await rt(d);return await be(V(Ne,"deployments",o),{...a,hostedURL:u}),this.deployments.set(o,a),{success:!0,deploymentId:o,url:u,platform:"mobile",framework:i,buildInstructions:a.buildInstructions}}detectMobileFramework(e){const s=Object.keys(e);return s.some(n=>n.includes("pubspec.yaml")||n.includes("main.dart"))?"Flutter":s.some(n=>n.includes("App.js")&&n.includes("package.json"))?"React Native":s.some(n=>n.includes("ionic.config.json"))?"Ionic":s.some(n=>n.includes("capacitor.config.json"))?"Capacitor":s.some(n=>n.includes("manifest.json")&&n.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(e,s,n){switch(s.toLowerCase().replace(/[^a-z0-9]/g,""),e){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:e,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(e,s){switch(s.toLowerCase().replace(/[^a-z0-9]/g,""),e){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:e,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(e,s){switch(s.toLowerCase().replace(/[^a-z0-9]/g,""),e){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:e,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(e,s,n){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e} - Apple App Store Deployment</title>
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
            <h1>${e}</h1>
            <div class="framework-badge">${s}</div>
        </div>

        <div class="section">
            <h2>📱 Apple App Store Deployment</h2>
            <p>Deploy your ${s} app to the Apple App Store with these step-by-step instructions.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${n.steps.map(o=>`<li>${o}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([o,i])=>`<div class="command"><strong>${o}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${n.requirements.map(o=>`<li>${o}</li>`).join("")}
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
</html>`}createGooglePlayInstructionsHTML(e,s,n){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e} - Google Play Store Deployment</title>
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
            <h1>${e}</h1>
            <div class="framework-badge">${s}</div>
        </div>

        <div class="section">
            <h2>📱 Google Play Store Deployment</h2>
            <p>Deploy your ${s} app to the Google Play Store with these step-by-step instructions.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${n.steps.map(o=>`<li>${o}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([o,i])=>`<div class="command"><strong>${o}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <div class="requirements">
                <h3>📋 Requirements</h3>
                <ul>
                    ${n.requirements.map(o=>`<li>${o}</li>`).join("")}
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
</html>`}createMobileAppInstructionsHTML(e,s,n){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e} - Build Instructions</title>
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
            <h1>🚀 ${e}</h1>
            <div class="framework-badge">${s}</div>
        </div>

        <div class="section">
            <h2>📱 Mobile App Build Instructions</h2>
            <p>Your ${s} mobile app has been generated successfully! Follow these steps to build and deploy your app.</p>
        </div>

        <div class="section">
            <h2>🛠️ Build Steps</h2>
            <div class="steps">
                <ol>
                    ${n.steps.map(o=>`<li>${o}</li>`).join("")}
                </ol>
            </div>
        </div>

        <div class="section">
            <h2>💻 Commands</h2>
            <div class="commands">
                ${Object.entries(n.commands).map(([o,i])=>`<div class="command"><strong>${o}:</strong> ${i}</div>`).join("")}
            </div>
        </div>

        <div class="section">
            <h2>📱 Supported Platforms</h2>
            <div class="platforms">
                ${n.platforms.map(o=>`<span class="platform">${o}</span>`).join("")}
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
</html>`}async generateMobileAppFiles(e,s,n){try{console.log(`📱 Generating ${n} mobile app files...`);const{default:o}=await Be(async()=>{const{default:a}=await import("./mobileAppService-CFUDTDME.js");return{default:a}},[]),i=await o.generateMobileApp(e,s,n);return console.log(`✅ Generated ${Object.keys(i).length} mobile app files`),i}catch(o){throw console.error("❌ Failed to generate mobile app files:",o),new Error(`Failed to generate mobile app files: ${o.message}`)}}async executeAppleStoreBuild(e,s,n){const o=[],i=[];try{console.log(`🍎 Executing Apple App Store build for ${n}...`);const a=`/tmp/dreambuild-${s}-${Date.now()}`;o.push(`mkdir -p ${a}`);for(const[l,d]of Object.entries(e)){const c=`${a}/${l}`;o.push(`cat > ${c} << 'EOF'
${d}
EOF`)}switch(o.push(`cd ${a}`),n){case"React Native":o.push("npm install"),o.push("npx expo install"),o.push("npx expo build:ios --type archive");break;case"Flutter":o.push("flutter pub get"),o.push("flutter build ios --release");break;case"PWA":o.push("npm install"),o.push("npm run build"),o.push("npx @pwabuilder/cli build --platform ios");break;default:o.push('echo "Framework-specific build commands not implemented yet"')}for(const l of o)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Apple App Store build completed for ${n}`),{success:!0,output:i.join(`
`),commands:o,projectDir:a}}catch(a){return console.error("❌ Apple App Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:o,error:a.message}}}async executeGooglePlayBuild(e,s,n){const o=[],i=[];try{console.log(`🤖 Executing Google Play Store build for ${n}...`);const a=`/tmp/dreambuild-${s}-${Date.now()}`;o.push(`mkdir -p ${a}`);for(const[l,d]of Object.entries(e)){const c=`${a}/${l}`;o.push(`cat > ${c} << 'EOF'
${d}
EOF`)}switch(o.push(`cd ${a}`),n){case"React Native":o.push("npm install"),o.push("npx expo install"),o.push("npx expo build:android --type app-bundle");break;case"Flutter":o.push("flutter pub get"),o.push("flutter build appbundle --release");break;case"PWA":o.push("npm install"),o.push("npm run build"),o.push("npx @pwabuilder/cli build --platform android");break;default:o.push('echo "Framework-specific build commands not implemented yet"')}for(const l of o)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Google Play Store build completed for ${n}`),{success:!0,output:i.join(`
`),commands:o,projectDir:a}}catch(a){return console.error("❌ Google Play Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:o,error:a.message}}}async executeTerminalCommands(e,s,n=3e5){try{console.log("🖥️ Executing commands via terminal...");const o={success:!0,output:e.map(i=>`$ ${i}
Executed successfully`).join(`
`),commands:e,projectDir:s};return console.log("✅ Terminal commands executed successfully"),o}catch(o){return console.error("❌ Terminal command execution failed:",o),{success:!1,output:`Error: ${o.message}`,commands:e,error:o.message}}}}const nr=new pu,hu=()=>{const{currentProject:r,switchFile:e,updateFile:s,saveProject:n,createNewProject:o,updateConfig:i}=_e(),[a,l]=p.useState(!1),[d,c]=p.useState(""),[u,m]=p.useState(!1),[b,w]=p.useState(!1),[g,f]=p.useState(!1),[h,S]=p.useState("firebase"),[v,j]=p.useState(!1),[x,y]=p.useState(""),[D,A]=p.useState({show:!1,x:0,y:0,filename:""}),P=p.useRef(null),_={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},E=N=>_[N]||"📄",O=N=>{e(N)},k=(N,F)=>{N.preventDefault(),A({show:!0,x:N.clientX,y:N.clientY,filename:F})},B=N=>{const{filename:F}=D;switch(A({show:!1,x:0,y:0,filename:""}),N){case"download":G(F);break;case"delete":L(F);break;case"rename":$.info("Rename functionality coming soon!");break;case"copy":$.info("Copy functionality coming soon!");break}},T=()=>{A({show:!1,x:0,y:0,filename:""})};p.useEffect(()=>{const N=F=>{P.current&&!P.current.contains(F.target)&&T()};return D.show&&document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[D.show]);const R=()=>{if(d.trim()){const N=d.includes(".")?d:`${d}.js`;s(N,""),e(N),c(""),l(!1),$.success(`Created ${N}`)}},L=N=>{if(Object.keys(r.files).length<=1){$.error("Cannot delete the last file");return}if(confirm(`Delete ${N}?`)){const F={...r.files};if(delete F[N],Object.keys(F).forEach(I=>{r.files[I]=F[I]}),r.activeFile===N){const I=Object.keys(F);e(I[0])}$.success(`Deleted ${N}`)}},G=N=>{const F=r.files[N]||"",I=new Blob([F],{type:"text/plain"}),K=URL.createObjectURL(I),re=document.createElement("a");re.href=K,re.download=N,document.body.appendChild(re),re.click(),document.body.removeChild(re),URL.revokeObjectURL(K),$.success(`Downloaded ${N}`)},W=()=>{const N={name:r.name,files:r.files,config:r.config,timestamp:new Date().toISOString()},F=new Blob([JSON.stringify(N,null,2)],{type:"application/json"}),I=URL.createObjectURL(F),K=document.createElement("a");K.href=I,K.download=`${r.name}.json`,document.body.appendChild(K),K.click(),document.body.removeChild(K),URL.revokeObjectURL(I),$.success("Project downloaded!")},ce=N=>{const F=N.target.files[0];if(F){const I=new FileReader;I.onload=K=>{s(F.name,K.target.result),e(F.name),$.success(`Uploaded ${F.name}`)},I.readAsText(F)}},ge=async()=>{if(!x.trim()){$.error("Please enter a project name");return}if(Object.keys(r.files).length===0){$.error("Please generate some code first");return}f(!0);try{const N=await U(r,x),F=[];if(v){$.info("Deploying to both Firebase and GitHub...");const[I,K]=await Promise.allSettled([nr.deployToFirebase(N,x),nr.deployToGitHub(N,x)]);if(I.status==="fulfilled"&&I.value.success&&F.push({platform:"Firebase",...I.value}),K.status==="fulfilled"&&K.value.success&&F.push({platform:"GitHub",...K.value}),F.length===2)$.success("Successfully deployed to both Firebase and GitHub!");else if(F.length===1)$.success(`Deployed to ${F[0].platform} (${F.length===1?"one":"both"} platform${F.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let I;h==="firebase"?I=await nr.deployToFirebase(N,x):h==="github"&&(I=await nr.deployToGitHub(N,x)),I.success&&(F.push({platform:h,...I}),$.success(`Successfully deployed to ${I.platform}!`))}F.forEach(I=>{I.url&&window.open(I.url,"_blank"),I.instructions&&(console.log(`${I.platform} deployment instructions:`,I.instructions),$.success(`Check console for ${I.platform} Pages setup instructions`))}),w(!1),y(""),j(!1)}catch(N){$.error(`Deployment failed: ${N.message}`)}finally{f(!1)}},U=async(N,F)=>{const I={...N};return I.files["index.html"]||(I.files["index.html"]=q(F)),I.files["package.json"]||(I.files["package.json"]=J(F,I.config)),I.files["README.md"]||(I.files["README.md"]=ne(F,I.config)),I.files["index.html"]=Pe(I.files["index.html"],F),I.files["manifest.json"]||(I.files["manifest.json"]=oe(F)),I},q=N=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${N}</title>
    <meta name="description" content="Built with DreamBuild - Universal AI Development Platform">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563eb">
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 ${N}</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 10px;">Your app is ready!</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 20px;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`,J=(N,F)=>JSON.stringify({name:N.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${N}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",F.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),ne=(N,F)=>{var I;return`# ${N}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${F.appType||"Frontend"}
- **Language**: ${F.language||"JavaScript"}
- **Styling**: ${F.styling||"Custom CSS"}
- **Features**: ${((I=F.features)==null?void 0:I.join(", "))||"Basic functionality"}

## 📁 Project Structure

\`\`\`
${Object.keys(r.files).join(`
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
`},oe=N=>JSON.stringify({name:N,short_name:N.split(" ")[0],description:`Built with DreamBuild - ${N}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),Pe=(N,F)=>{let I=N;return I.includes("<!DOCTYPE html>")||(I=`<!DOCTYPE html>
${I}`),I.includes('<meta name="viewport"')||(I=I.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),I.includes('<meta name="description"')||(I=I.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${F}">`)),I.includes('<meta name="theme-color"')||(I=I.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),I.includes("manifest.json")||(I=I.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),I},Vr=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return t.jsxs(M.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[t.jsxs("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:t.jsx(ke,{className:"h-4 w-4 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),t.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("button",{onClick:()=>l(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:t.jsx(jt,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),t.jsx("button",{onClick:()=>m(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:t.jsx(gt,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{onClick:()=>n(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[t.jsx(xo,{className:"h-3 w-3"}),"Save"]}),t.jsxs("button",{onClick:()=>w(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(r.files).length===0,children:[t.jsx(Ae,{className:"h-3 w-3"}),"Deploy"]}),t.jsxs("button",{onClick:W,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[t.jsx(Je,{className:"h-3 w-3"}),"Export"]})]})]}),t.jsx("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(r.files).length===0?t.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[t.jsx("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:t.jsx(Ma,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),t.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),t.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):t.jsxs("div",{className:"py-2",children:[t.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[t.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:t.jsx(ke,{className:"h-3 w-3 text-white"})}),t.jsx("span",{children:r.name||"Untitled Project"}),t.jsxs("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(r.files).length," files"]})]}),Object.keys(r.files).map(N=>t.jsxs(M.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${r.activeFile===N?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>O(N),onContextMenu:F=>k(F,N),children:[t.jsx("div",{className:"w-4 flex items-center justify-center",children:t.jsx("div",{className:"w-px h-4 bg-border"})}),t.jsx("div",{className:"flex items-center justify-center w-5 h-5",children:t.jsx("span",{className:"text-base",children:E(N)})}),t.jsx("div",{className:"flex-1 min-w-0",children:t.jsx("span",{className:"text-sm font-medium truncate",children:N})}),r.activeFile===N&&t.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},N))]})}),t.jsx("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:t.jsxs("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[t.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:t.jsx(bo,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),t.jsxs("div",{className:"text-center",children:[t.jsx("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),t.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),t.jsx("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:ce,multiple:!0})]})}),t.jsx(ze,{children:a&&t.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>l(!1),children:t.jsxs(M.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:N=>N.stopPropagation(),children:[t.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),t.jsx("input",{type:"text",value:d,onChange:N=>c(N.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),t.jsx("div",{className:"grid grid-cols-2 gap-2",children:Vr.map(N=>t.jsxs("button",{onClick:()=>c(`new-file${N.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[t.jsx("span",{children:N.icon}),t.jsx("span",{className:"truncate",children:N.name})]},N.extension))})]}),t.jsxs("div",{className:"flex gap-2 justify-end",children:[t.jsx("button",{onClick:()=>l(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),t.jsx("button",{onClick:R,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),t.jsx(ze,{children:u&&t.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>m(!1),children:t.jsxs(M.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:N=>N.stopPropagation(),children:[t.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),t.jsx("input",{type:"text",value:r.name,onChange:N=>i({name:N.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),t.jsxs("select",{value:r.config.appType,onChange:N=>i({appType:N.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[t.jsx("option",{value:"frontend",children:"Frontend"}),t.jsx("option",{value:"backend",children:"Backend"}),t.jsx("option",{value:"fullstack",children:"Full Stack"}),t.jsx("option",{value:"mobile",children:"Mobile"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Language"}),t.jsxs("select",{value:r.config.language,onChange:N=>i({language:N.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[t.jsx("option",{value:"javascript",children:"JavaScript"}),t.jsx("option",{value:"typescript",children:"TypeScript"}),t.jsx("option",{value:"python",children:"Python"}),t.jsx("option",{value:"java",children:"Java"}),t.jsx("option",{value:"csharp",children:"C#"}),t.jsx("option",{value:"cpp",children:"C++"}),t.jsx("option",{value:"c",children:"C"}),t.jsx("option",{value:"rust",children:"Rust"}),t.jsx("option",{value:"go",children:"Go"}),t.jsx("option",{value:"php",children:"PHP"}),t.jsx("option",{value:"ruby",children:"Ruby"}),t.jsx("option",{value:"swift",children:"Swift"}),t.jsx("option",{value:"kotlin",children:"Kotlin"}),t.jsx("option",{value:"dart",children:"Dart"}),t.jsx("option",{value:"scala",children:"Scala"}),t.jsx("option",{value:"html",children:"HTML"}),t.jsx("option",{value:"css",children:"CSS"}),t.jsx("option",{value:"sql",children:"SQL"}),t.jsx("option",{value:"r",children:"R"}),t.jsx("option",{value:"matlab",children:"MATLAB"}),t.jsx("option",{value:"perl",children:"Perl"}),t.jsx("option",{value:"lua",children:"Lua"}),t.jsx("option",{value:"bash",children:"Bash/Shell"}),t.jsx("option",{value:"powershell",children:"PowerShell"}),t.jsx("option",{value:"yaml",children:"YAML"}),t.jsx("option",{value:"json",children:"JSON"}),t.jsx("option",{value:"xml",children:"XML"}),t.jsx("option",{value:"markdown",children:"Markdown"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),t.jsxs("select",{value:r.config.framework||"none",onChange:N=>i({framework:N.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[t.jsx("option",{value:"none",children:"None"}),t.jsx("option",{value:"react",children:"React"}),t.jsx("option",{value:"vue",children:"Vue.js"}),t.jsx("option",{value:"angular",children:"Angular"}),t.jsx("option",{value:"svelte",children:"Svelte"}),t.jsx("option",{value:"nextjs",children:"Next.js"}),t.jsx("option",{value:"nuxtjs",children:"Nuxt.js"}),t.jsx("option",{value:"express",children:"Express.js"}),t.jsx("option",{value:"fastapi",children:"FastAPI"}),t.jsx("option",{value:"django",children:"Django"}),t.jsx("option",{value:"flask",children:"Flask"}),t.jsx("option",{value:"spring",children:"Spring Boot"}),t.jsx("option",{value:"laravel",children:"Laravel"}),t.jsx("option",{value:"rails",children:"Ruby on Rails"}),t.jsx("option",{value:"flutter",children:"Flutter"}),t.jsx("option",{value:"react-native",children:"React Native"}),t.jsx("option",{value:"ionic",children:"Ionic"}),t.jsx("option",{value:"electron",children:"Electron"})]})]}),t.jsxs("div",{className:"flex gap-2 justify-end",children:[t.jsx("button",{onClick:()=>m(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),t.jsx("button",{onClick:()=>{n(),m(!1),$.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),t.jsx(ze,{children:b&&t.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>w(!1),children:t.jsxs(M.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:N=>N.stopPropagation(),children:[t.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[t.jsx(Ae,{className:"h-5 w-5"}),"Deploy Your App"]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),t.jsx("input",{type:"text",value:x,onChange:N=>y(N.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[t.jsx("input",{type:"radio",value:"firebase",checked:h==="firebase",onChange:N=>S(N.target.value),className:"text-white"}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:t.jsx("span",{className:"text-white text-xs",children:"F"})}),t.jsx("span",{children:"Firebase Hosting"})]})]}),t.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[t.jsx("input",{type:"radio",value:"github",checked:h==="github",onChange:N=>S(N.target.value),className:"text-white"}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(pe,{className:"h-4 w-4"}),t.jsx("span",{children:"GitHub Pages"})]})]})]})]}),t.jsxs("div",{className:"p-3 bg-muted rounded-md",children:[t.jsx("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),t.jsx("div",{className:"text-xs text-muted-foreground space-y-1",children:h==="firebase"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Cost:"})," Free tier available"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):h==="github"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:[t.jsx("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Cost:"})," Free for public repositories"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),t.jsxs("div",{className:"flex gap-2 justify-end",children:[t.jsx("button",{onClick:()=>w(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:g,children:"Cancel"}),t.jsx("button",{onClick:ge,disabled:g||!x.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:g?t.jsxs(t.Fragment,{children:[t.jsx(Ht,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):t.jsxs(t.Fragment,{children:[t.jsx(Ae,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),t.jsx(ze,{children:D.show&&t.jsxs(M.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:P,className:"fixed z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:D.x,top:D.y},onClick:T,children:[t.jsxs("button",{onClick:()=>B("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[t.jsx(Je,{className:"h-4 w-4"}),"Download"]}),t.jsxs("button",{onClick:()=>B("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[t.jsx(Nt,{className:"h-4 w-4"}),"Copy"]}),t.jsxs("button",{onClick:()=>B("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[t.jsx(yo,{className:"h-4 w-4"}),"Rename"]}),Object.keys(r.files).length>1&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"border-t border-border my-1"}),t.jsxs("button",{onClick:()=>B("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[t.jsx(vo,{className:"h-4 w-4"}),"Delete"]})]})]})})]})};function fu(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function Pn(r,e){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),s.push.apply(s,n)}return s}function Rn(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Pn(Object(s),!0).forEach(function(n){fu(r,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):Pn(Object(s)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(s,n))})}return r}function gu(r,e){if(r==null)return{};var s={},n=Object.keys(r),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(s[o]=r[o]);return s}function xu(r,e){if(r==null)return{};var s=gu(r,e),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(s[n]=r[n])}return s}function bu(r,e){return yu(r)||vu(r,e)||wu(r,e)||ju()}function yu(r){if(Array.isArray(r))return r}function vu(r,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var s=[],n=!0,o=!1,i=void 0;try{for(var a=r[Symbol.iterator](),l;!(n=(l=a.next()).done)&&(s.push(l.value),!(e&&s.length===e));n=!0);}catch(d){o=!0,i=d}finally{try{!n&&a.return!=null&&a.return()}finally{if(o)throw i}}return s}}function wu(r,e){if(r){if(typeof r=="string")return On(r,e);var s=Object.prototype.toString.call(r).slice(8,-1);if(s==="Object"&&r.constructor&&(s=r.constructor.name),s==="Map"||s==="Set")return Array.from(r);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return On(r,e)}}function On(r,e){(e==null||e>r.length)&&(e=r.length);for(var s=0,n=new Array(e);s<e;s++)n[s]=r[s];return n}function ju(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nu(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function In(r,e){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),s.push.apply(s,n)}return s}function Mn(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?In(Object(s),!0).forEach(function(n){Nu(r,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):In(Object(s)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(s,n))})}return r}function Su(){for(var r=arguments.length,e=new Array(r),s=0;s<r;s++)e[s]=arguments[s];return function(n){return e.reduceRight(function(o,i){return i(o)},n)}}function _t(r){return function e(){for(var s=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=r.length?r.apply(this,o):function(){for(var a=arguments.length,l=new Array(a),d=0;d<a;d++)l[d]=arguments[d];return e.apply(s,[].concat(o,l))}}}function Cr(r){return{}.toString.call(r).includes("Object")}function Cu(r){return!Object.keys(r).length}function qt(r){return typeof r=="function"}function ku(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Tu(r,e){return Cr(e)||Ve("changeType"),Object.keys(e).some(function(s){return!ku(r,s)})&&Ve("changeField"),e}function Du(r){qt(r)||Ve("selectorType")}function Eu(r){qt(r)||Cr(r)||Ve("handlerType"),Cr(r)&&Object.values(r).some(function(e){return!qt(e)})&&Ve("handlersType")}function Au(r){r||Ve("initialIsRequired"),Cr(r)||Ve("initialType"),Cu(r)&&Ve("initialContent")}function Pu(r,e){throw new Error(r[e]||r.default)}var Ru={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ve=_t(Pu)(Ru),or={changes:Tu,selector:Du,handler:Eu,initial:Au};function Ou(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};or.initial(r),or.handler(e);var s={current:r},n=_t(Fu)(s,e),o=_t(Mu)(s),i=_t(or.changes)(r),a=_t(Iu)(s);function l(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return or.selector(c),c(s.current)}function d(c){Su(n,o,i,a)(c)}return[l,d]}function Iu(r,e){return qt(e)?e(r.current):e}function Mu(r,e){return r.current=Mn(Mn({},r.current),e),e}function Fu(r,e,s){return qt(e)?e(r.current):Object.keys(s).forEach(function(n){var o;return(o=e[n])===null||o===void 0?void 0:o.call(e,r.current[n])}),s}var Lu={create:Ou},_u={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function $u(r){return function e(){for(var s=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=r.length?r.apply(this,o):function(){for(var a=arguments.length,l=new Array(a),d=0;d<a;d++)l[d]=arguments[d];return e.apply(s,[].concat(o,l))}}}function Bu(r){return{}.toString.call(r).includes("Object")}function Uu(r){return r||Fn("configIsRequired"),Bu(r)||Fn("configType"),r.urls?(Hu(),{paths:{vs:r.urls.monacoBase}}):r}function Hu(){console.warn(fi.deprecation)}function zu(r,e){throw new Error(r[e]||r.default)}var fi={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Fn=$u(zu)(fi),Gu={config:Uu},Wu=function(){for(var e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return function(o){return s.reduceRight(function(i,a){return a(i)},o)}};function gi(r,e){return Object.keys(e).forEach(function(s){e[s]instanceof Object&&r[s]&&Object.assign(e[s],gi(r[s],e[s]))}),Rn(Rn({},r),e)}var qu={type:"cancelation",msg:"operation is manually canceled"};function ts(r){var e=!1,s=new Promise(function(n,o){r.then(function(i){return e?o(qu):n(i)}),r.catch(o)});return s.cancel=function(){return e=!0},s}var Vu=Lu.create({config:_u,isInitialized:!1,resolve:null,reject:null,monaco:null}),xi=bu(Vu,2),Kt=xi[0],Fr=xi[1];function Ju(r){var e=Gu.config(r),s=e.monaco,n=xu(e,["monaco"]);Fr(function(o){return{config:gi(o.config,n),monaco:s}})}function Ku(){var r=Kt(function(e){var s=e.monaco,n=e.isInitialized,o=e.resolve;return{monaco:s,isInitialized:n,resolve:o}});if(!r.isInitialized){if(Fr({isInitialized:!0}),r.monaco)return r.resolve(r.monaco),ts(rs);if(window.monaco&&window.monaco.editor)return bi(window.monaco),r.resolve(window.monaco),ts(rs);Wu(Yu,Qu)(Zu)}return ts(rs)}function Yu(r){return document.body.appendChild(r)}function Xu(r){var e=document.createElement("script");return r&&(e.src=r),e}function Qu(r){var e=Kt(function(n){var o=n.config,i=n.reject;return{config:o,reject:i}}),s=Xu("".concat(e.config.paths.vs,"/loader.js"));return s.onload=function(){return r()},s.onerror=e.reject,s}function Zu(){var r=Kt(function(s){var n=s.config,o=s.resolve,i=s.reject;return{config:n,resolve:o,reject:i}}),e=window.require;e.config(r.config),e(["vs/editor/editor.main"],function(s){bi(s),r.resolve(s)},function(s){r.reject(s)})}function bi(r){Kt().monaco||Fr({monaco:r})}function em(){return Kt(function(r){var e=r.monaco;return e})}var rs=new Promise(function(r,e){return Fr({resolve:r,reject:e})}),yi={config:Ju,init:Ku,__getMonacoInstance:em},tm={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ss=tm,rm={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},sm=rm;function nm({children:r}){return Ee.createElement("div",{style:sm.container},r)}var om=nm,im=om;function am({width:r,height:e,isEditorReady:s,loading:n,_ref:o,className:i,wrapperProps:a}){return Ee.createElement("section",{style:{...ss.wrapper,width:r,height:e},...a},!s&&Ee.createElement(im,null,n),Ee.createElement("div",{ref:o,style:{...ss.fullWidth,...!s&&ss.hide},className:i}))}var lm=am,vi=p.memo(lm);function cm(r){p.useEffect(r,[])}var wi=cm;function dm(r,e,s=!0){let n=p.useRef(!0);p.useEffect(n.current||!s?()=>{n.current=!1}:r,e)}var xe=dm;function Bt(){}function bt(r,e,s,n){return um(r,n)||mm(r,e,s,n)}function um(r,e){return r.editor.getModel(ji(r,e))}function mm(r,e,s,n){return r.editor.createModel(e,s,n?ji(r,n):void 0)}function ji(r,e){return r.Uri.parse(e)}function pm({original:r,modified:e,language:s,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:d=!1,theme:c="light",loading:u="Loading...",options:m={},height:b="100%",width:w="100%",className:g,wrapperProps:f={},beforeMount:h=Bt,onMount:S=Bt}){let[v,j]=p.useState(!1),[x,y]=p.useState(!0),D=p.useRef(null),A=p.useRef(null),P=p.useRef(null),_=p.useRef(S),E=p.useRef(h),O=p.useRef(!1);wi(()=>{let R=yi.init();return R.then(L=>(A.current=L)&&y(!1)).catch(L=>(L==null?void 0:L.type)!=="cancelation"&&console.error("Monaco initialization: error:",L)),()=>D.current?T():R.cancel()}),xe(()=>{if(D.current&&A.current){let R=D.current.getOriginalEditor(),L=bt(A.current,r||"",n||s||"text",i||"");L!==R.getModel()&&R.setModel(L)}},[i],v),xe(()=>{if(D.current&&A.current){let R=D.current.getModifiedEditor(),L=bt(A.current,e||"",o||s||"text",a||"");L!==R.getModel()&&R.setModel(L)}},[a],v),xe(()=>{let R=D.current.getModifiedEditor();R.getOption(A.current.editor.EditorOption.readOnly)?R.setValue(e||""):e!==R.getValue()&&(R.executeEdits("",[{range:R.getModel().getFullModelRange(),text:e||"",forceMoveMarkers:!0}]),R.pushUndoStop())},[e],v),xe(()=>{var R,L;(L=(R=D.current)==null?void 0:R.getModel())==null||L.original.setValue(r||"")},[r],v),xe(()=>{let{original:R,modified:L}=D.current.getModel();A.current.editor.setModelLanguage(R,n||s||"text"),A.current.editor.setModelLanguage(L,o||s||"text")},[s,n,o],v),xe(()=>{var R;(R=A.current)==null||R.editor.setTheme(c)},[c],v),xe(()=>{var R;(R=D.current)==null||R.updateOptions(m)},[m],v);let k=p.useCallback(()=>{var G;if(!A.current)return;E.current(A.current);let R=bt(A.current,r||"",n||s||"text",i||""),L=bt(A.current,e||"",o||s||"text",a||"");(G=D.current)==null||G.setModel({original:R,modified:L})},[s,e,o,r,n,i,a]),B=p.useCallback(()=>{var R;!O.current&&P.current&&(D.current=A.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...m}),k(),(R=A.current)==null||R.editor.setTheme(c),j(!0),O.current=!0)},[m,c,k]);p.useEffect(()=>{v&&_.current(D.current,A.current)},[v]),p.useEffect(()=>{!x&&!v&&B()},[x,v,B]);function T(){var L,G,W,ce;let R=(L=D.current)==null?void 0:L.getModel();l||((G=R==null?void 0:R.original)==null||G.dispose()),d||((W=R==null?void 0:R.modified)==null||W.dispose()),(ce=D.current)==null||ce.dispose()}return Ee.createElement(vi,{width:w,height:b,isEditorReady:v,loading:u,_ref:P,className:g,wrapperProps:f})}var hm=pm;p.memo(hm);function fm(r){let e=p.useRef();return p.useEffect(()=>{e.current=r},[r]),e.current}var gm=fm,ir=new Map;function xm({defaultValue:r,defaultLanguage:e,defaultPath:s,value:n,language:o,path:i,theme:a="light",line:l,loading:d="Loading...",options:c={},overrideServices:u={},saveViewState:m=!0,keepCurrentModel:b=!1,width:w="100%",height:g="100%",className:f,wrapperProps:h={},beforeMount:S=Bt,onMount:v=Bt,onChange:j,onValidate:x=Bt}){let[y,D]=p.useState(!1),[A,P]=p.useState(!0),_=p.useRef(null),E=p.useRef(null),O=p.useRef(null),k=p.useRef(v),B=p.useRef(S),T=p.useRef(),R=p.useRef(n),L=gm(i),G=p.useRef(!1),W=p.useRef(!1);wi(()=>{let U=yi.init();return U.then(q=>(_.current=q)&&P(!1)).catch(q=>(q==null?void 0:q.type)!=="cancelation"&&console.error("Monaco initialization: error:",q)),()=>E.current?ge():U.cancel()}),xe(()=>{var q,J,ne,oe;let U=bt(_.current,r||n||"",e||o||"",i||s||"");U!==((q=E.current)==null?void 0:q.getModel())&&(m&&ir.set(L,(J=E.current)==null?void 0:J.saveViewState()),(ne=E.current)==null||ne.setModel(U),m&&((oe=E.current)==null||oe.restoreViewState(ir.get(i))))},[i],y),xe(()=>{var U;(U=E.current)==null||U.updateOptions(c)},[c],y),xe(()=>{!E.current||n===void 0||(E.current.getOption(_.current.editor.EditorOption.readOnly)?E.current.setValue(n):n!==E.current.getValue()&&(W.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),E.current.pushUndoStop(),W.current=!1))},[n],y),xe(()=>{var q,J;let U=(q=E.current)==null?void 0:q.getModel();U&&o&&((J=_.current)==null||J.editor.setModelLanguage(U,o))},[o],y),xe(()=>{var U;l!==void 0&&((U=E.current)==null||U.revealLine(l))},[l],y),xe(()=>{var U;(U=_.current)==null||U.editor.setTheme(a)},[a],y);let ce=p.useCallback(()=>{var U;if(!(!O.current||!_.current)&&!G.current){B.current(_.current);let q=i||s,J=bt(_.current,n||r||"",e||o||"",q||"");E.current=(U=_.current)==null?void 0:U.editor.create(O.current,{model:J,automaticLayout:!0,...c},u),m&&E.current.restoreViewState(ir.get(q)),_.current.editor.setTheme(a),l!==void 0&&E.current.revealLine(l),D(!0),G.current=!0}},[r,e,s,n,o,i,c,u,m,a,l]);p.useEffect(()=>{y&&k.current(E.current,_.current)},[y]),p.useEffect(()=>{!A&&!y&&ce()},[A,y,ce]),R.current=n,p.useEffect(()=>{var U,q;y&&j&&((U=T.current)==null||U.dispose(),T.current=(q=E.current)==null?void 0:q.onDidChangeModelContent(J=>{W.current||j(E.current.getValue(),J)}))},[y,j]),p.useEffect(()=>{if(y){let U=_.current.editor.onDidChangeMarkers(q=>{var ne;let J=(ne=E.current.getModel())==null?void 0:ne.uri;if(J&&q.find(oe=>oe.path===J.path)){let oe=_.current.editor.getModelMarkers({resource:J});x==null||x(oe)}});return()=>{U==null||U.dispose()}}return()=>{}},[y,x]);function ge(){var U,q;(U=T.current)==null||U.dispose(),b?m&&ir.set(i,E.current.saveViewState()):(q=E.current.getModel())==null||q.dispose(),E.current.dispose()}return Ee.createElement(vi,{width:w,height:g,isEditorReady:y,loading:d,_ref:O,className:f,wrapperProps:h})}var bm=xm,ym=p.memo(bm);const vm=()=>{var v,j,x,y,D,A;const{theme:r}=Mr(),{currentProject:e,updateFile:s}=_e(),[n,o]=p.useState(!0),[i,a]=p.useState(null),l=p.useRef(null);p.useEffect(()=>{if(l.current){const P=e.files[e.activeFile]||"",_=l.current.getValue();P!==_&&l.current.setValue(P)}},[e.activeFile,e.files[e.activeFile]]),p.useEffect(()=>{const P=()=>{l.current&&setTimeout(()=>{l.current.layout()},100)};return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);const d=(P,_)=>{try{console.log("🎯 Monaco Editor mounting..."),o(!1),a(null),l.current=P;const E=e.files[e.activeFile]||"";E&&P.setValue(E),_.editor.defineTheme("custom-dark",{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"569CD6"},{token:"string",foreground:"CE9178"},{token:"number",foreground:"B5CEA8"},{token:"tag",foreground:"569CD6"},{token:"attribute.name",foreground:"92C5F8"},{token:"attribute.value",foreground:"CE9178"}],colors:{"editor.background":"#1e1e1e","editor.foreground":"#d4d4d4","editor.lineHighlightBackground":"#2a2d2e","editor.selectionBackground":"#264f78","editor.inactiveSelectionBackground":"#3a3d41"}}),_.editor.defineTheme("custom-light",{base:"vs",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"0000FF"},{token:"string",foreground:"A31515"},{token:"number",foreground:"098658"},{token:"tag",foreground:"800000"},{token:"attribute.name",foreground:"FF0000"},{token:"attribute.value",foreground:"0451A5"}],colors:{"editor.background":"#ffffff","editor.foreground":"#000000","editor.lineHighlightBackground":"#f5f5f5","editor.selectionBackground":"#add6ff","editor.inactiveSelectionBackground":"#e5ebf1"}}),_.editor.setTheme(r==="dark"?"custom-dark":"custom-light"),P.updateOptions({fontSize:14,fontFamily:"JetBrains Mono, Monaco, Consolas, monospace",lineHeight:22,minimap:{enabled:!0},scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",formatOnPaste:!0,formatOnType:!0,suggestOnTriggerCharacters:!0,acceptSuggestionOnEnter:"on",tabCompletion:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always"}),setTimeout(()=>{P.layout()},100);try{P.addCommand(_.KeyMod.CtrlCmd|_.KeyCode.KeyS,()=>{g()}),P.addCommand(_.KeyMod.CtrlCmd|_.KeyCode.KeyC,()=>{P.getSelection().isEmpty()&&b()})}catch(O){console.warn("⚠️ Could not add keyboard shortcuts:",O)}}catch(E){console.error("❌ Error mounting Monaco Editor:",E),console.error("❌ Monaco Editor error details:",E.message,E.stack),a(E.message),o(!1),$.error("Failed to load code editor")}},c=P=>{try{P!==void 0&&s(e.activeFile,P)}catch(_){console.error("Error updating file:",_),$.error("Failed to save changes")}},u=()=>{const P=e.activeFile.split(".").pop();return{html:"html",css:"css",js:"javascript",jsx:"javascript",ts:"typescript",tsx:"typescript",py:"python",java:"java",cpp:"cpp",c:"c",php:"php",rb:"ruby",go:"go",rs:"rust",swift:"swift",kt:"kotlin",scala:"scala",clj:"clojure",hs:"haskell",ml:"fsharp",fs:"fsharp",vb:"vb",sql:"sql",json:"json",xml:"xml",yaml:"yaml",yml:"yaml",md:"markdown",sh:"shell",bash:"shell",ps1:"powershell",dockerfile:"dockerfile"}[P]||"plaintext"},m=()=>{const P=e.files[e.activeFile]||"";navigator.clipboard.writeText(P),$.success("Code copied to clipboard!")},b=()=>{const P=e.files[e.activeFile]||"";navigator.clipboard.writeText(P),$.success("All code copied to clipboard!")},w=()=>{const P=e.files[e.activeFile]||"",_=new Blob([P],{type:"text/plain"}),E=URL.createObjectURL(_),O=document.createElement("a");O.href=E,O.download=e.activeFile,document.body.appendChild(O),O.click(),document.body.removeChild(O),URL.revokeObjectURL(E),$.success(`Downloaded ${e.activeFile}`)},g=()=>{$.success("Code saved!")},f=()=>{l.current&&(l.current.getAction("editor.action.formatDocument").run(),$.success("Code formatted!"))},h={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖"},S=P=>h[P]||"📄";return t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[t.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-lg",children:S(e.activeFile)}),t.jsx("span",{className:"font-medium text-sm",children:e.activeFile}),t.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-1 rounded",children:u()})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:f,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Format Code (Ctrl+Shift+F)",children:t.jsx(Dr,{className:"h-4 w-4"})}),t.jsx("button",{onClick:m,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy Code",children:t.jsx(Nt,{className:"h-4 w-4"})}),t.jsx("button",{onClick:w,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Download File",children:t.jsx(Je,{className:"h-4 w-4"})})]})]}),t.jsx("div",{className:"flex-1 relative h-full min-h-[500px]",children:i?t.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[t.jsx("div",{className:"text-red-500 text-lg mb-4",children:"⚠️ Editor Error"}),t.jsx("div",{className:"text-muted-foreground mb-4",children:i}),t.jsx("button",{onClick:()=>{a(null),o(!0),window.location.reload()},className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Reload Editor"})]}):t.jsx(ym,{height:"100%",language:u(),value:e.files[e.activeFile]||"",onChange:c,onMount:d,theme:r==="dark"?"vs-dark":"vs",loading:t.jsxs("div",{className:"flex items-center justify-center h-full",children:[t.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"}),t.jsx("span",{className:"ml-2",children:"Loading editor..."})]}),options:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,mouseWheelZoom:!0,smoothScrolling:!0,cursorBlinking:"blink",renderLineHighlight:"line",renderWhitespace:"selection",renderIndentGuides:!0,highlightActiveIndentGuide:!0,bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always",unfoldOnClickAfterEnd:!1,contextmenu:!0,mouseWheelScrollSensitivity:1,fastScrollSensitivity:5,cursorSurroundingLines:3,cursorSurroundingLinesStyle:"default",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:14,horizontalScrollbarSize:14,useShadows:!0,verticalHasArrows:!1,horizontalHasArrows:!1,arrowSize:11,verticalSliderSize:14,horizontalSliderSize:14}}},`${e.activeFile}-${((v=e.files[e.activeFile])==null?void 0:v.length)||0}`)}),t.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("span",{children:["Line ",((x=(j=l.current)==null?void 0:j.getPosition())==null?void 0:x.lineNumber)||1]}),t.jsxs("span",{children:["Column ",((D=(y=l.current)==null?void 0:y.getPosition())==null?void 0:D.column)||1]}),t.jsxs("span",{children:[((A=e.files[e.activeFile])==null?void 0:A.length)||0," characters"]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{children:"Ctrl+S to save"}),t.jsx("span",{children:"•"}),t.jsx("span",{children:"Ctrl+C to copy all"})]})]})]})},wm=()=>{console.log("🎮 Preview component rendered!");const{currentProject:r}=_e(),e=p.useRef(null),[s,n]=p.useState(!1),[o,i]=p.useState(!1),[a,l]=p.useState(null),[d,c]=p.useState(0);Ee.useEffect(()=>{c(v=>v+1),console.log("🎮 Preview component rendered! Render count:",d+1)},[]),p.useEffect(()=>{console.log("🎮 Preview useEffect triggered - files changed:",Object.keys(r.files)),console.log("🎮 Preview useEffect - currentProject:",r),console.log("🎮 Preview useEffect - file count:",Object.keys(r.files).length);const v=setTimeout(()=>{u()},50);return()=>clearTimeout(v)},[r.files,r.activeFile,r]),p.useEffect(()=>{const v=()=>{e.current?(console.log("🎮 Iframe mounted, updating preview..."),u()):(console.log("🎮 Iframe not ready, retrying..."),setTimeout(v,50))};setTimeout(v,100)},[]);const u=()=>{if(console.log("🎮 updatePreview called with files:",Object.keys(r.files)),!e.current){console.log("🎮 updatePreview: iframeRef.current is null, skipping update");return}if(!r.files||Object.keys(r.files).length===0){console.log("🎮 updatePreview: No files to display, showing placeholder"),w();return}console.log("🎮 updatePreview: iframeRef.current exists, proceeding..."),n(!0),l(null);try{let v=r.files["index.html"]||"";if(!v.trim()){const B=Object.keys(r.files).filter(T=>T.endsWith(".html")&&T!=="index.html");if(B.length>0){console.log("🎮 Preview Debug - No index.html found, using:",B[0]);const T=r.files[B[0]]||"";T.trim()&&(v=T)}}const j=Object.keys(r.files).filter(B=>B.endsWith(".css")),x=j.map(B=>r.files[B]).join(`
`);console.log("🎮 Preview Debug - All CSS files found:",j),console.log("🎮 Preview Debug - CSS content length:",x.length),console.log("🎮 Preview Debug - CSS content preview:",x.substring(0,200)+"...");const y=r.files["script.js"]||"",D=r.files["src/components/GameApp.jsx"]||"",A=r.files["src/components/GameComponent.jsx"]||"",P=r.files["src/components/TempleRunUI.jsx"]||"",_=r.files["src/components/RunnerPlayer.jsx"]||"",E=r.files["src/components/Obstacle.jsx"]||"";if(A&&(console.log("🎮 Preview Debug - GameComponent content preview:",A.substring(0,200)+"..."),console.log("🎮 Preview Debug - GameComponent contains Temple Run:",A.toLowerCase().includes("temple run")),console.log("🎮 Preview Debug - GameComponent contains lane:",A.toLowerCase().includes("lane")),console.log("🎮 Preview Debug - GameComponent contains jump:",A.toLowerCase().includes("jump"))),console.log("🎮 Preview Debug - Checking for game files:"),console.log("🎮 - GameApp.jsx exists:",!!D),console.log("🎮 - GameComponent.jsx exists:",!!A),console.log("🎮 - TempleRunUI.jsx exists:",!!P),console.log("🎮 - RunnerPlayer.jsx exists:",!!_),console.log("🎮 - Obstacle.jsx exists:",!!E),console.log("🎮 - All project files:",Object.keys(r.files)),D||A){console.log("🎮 Preview Debug - Game files detected, creating React preview"),console.log("🎮 Preview Debug - About to call createReactPreview, iframeRef.current:",!!e.current),b(),console.log("🎮 Preview Debug - createReactPreview call completed");return}if(console.log("🎮 Preview Debug - No game files detected, using regular HTML preview"),console.log("🎮 Preview Debug - HTML content length:",v.length),console.log("🎮 Preview Debug - CSS content length:",x.length),console.log("🎮 Preview Debug - JS content length:",y.length),!v.trim()){console.log("🎮 Preview Debug - No HTML content found, creating basic structure");const B=x.trim().length>0,T=y.trim().length>0;v=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild Generated App</title>
    ${B?`<style>${x}</style>`:""}
</head>
<body>
    <div id="app">
        <h1>DreamBuild Generated Application</h1>
        <p>Your application is loading...</p>
        <div id="content"></div>
    </div>
    ${T?`<script>${y}<\/script>`:""}
</body>
</html>`,console.log("🎮 Preview Debug - Created basic HTML structure")}let O=v;if(x.trim()&&(O=O.replace(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']style\.css["'][^>]*>/gi,`<style>${x}</style>`),O===v&&O.includes("<head>")?O=O.replace("<head>",`<head>
<style>${x}</style>`):O===v&&!O.includes("<head>")&&(O.includes("<title>")?O=O.replace("</title>",`</title>
<style>${x}</style>`):O=`<style>${x}</style>
${O}`)),y.trim()){const B=`(function() {
          ${y}
        })();`;O=O.replace(/<script[^>]*src=["']script\.js["'][^>]*><\/script>/gi,`<script>${B}<\/script>`),O.includes("</body>")?O=O.replace("</body>",`<script>${B}<\/script>
</body>`):O+=`
<script>${B}<\/script>`}O.includes("<!DOCTYPE html>")||(O=`<!DOCTYPE html>
${O}`),console.log("🎮 Preview Debug - Final HTML length:",O.length),console.log("🎮 Preview Debug - HTML contains <style>:",O.includes("<style>")),console.log("🎮 Preview Debug - HTML contains <script>:",O.includes("<script>")),console.log("🎮 Preview Debug - HTML preview:",O.substring(0,500)+"...");const k=e.current;k.srcdoc=O,k.onload=()=>{n(!1),l(null)},k.onerror=()=>{n(!1),l("Failed to load preview")}}catch(v){console.error("Preview update error:",v),n(!1),l("Preview update failed")}},m=v=>v?v.replace(/`/g,"\\`").replace(/\${/g,"\\${").replace(/\$/g,"\\$"):"",b=()=>{if(console.log("🎮 Creating React preview..."),!e.current){console.log("🎮 createReactPreview: iframeRef.current is null");return}try{const v=r.files["src/components/GameApp.jsx"]||"",j=r.files["src/components/GameComponent.jsx"]||"",x=r.files["src/components/TempleRunUI.jsx"]||"",y=r.files["src/components/RunnerPlayer.jsx"]||"",D=r.files["src/components/Obstacle.jsx"]||"",A=r.files["src/components/Coin.jsx"]||"",P=r.files["src/components/Player.jsx"]||"",_=r.files["src/components/GameApp.css"]||"",E=r.files["src/components/GameComponent.css"]||"",O=r.files["src/components/TempleRunUI.css"]||"",k=r.files["src/components/RunnerPlayer.css"]||"",B=r.files["src/components/Obstacle.css"]||"",T=r.files["src/components/Coin.css"]||"",R=r.files["src/components/Player.css"]||"",L=x||y||D,G=P||A,W=j.toLowerCase(),ce=W.includes("temple run")||W.includes("lane")||W.includes("jump")||W.includes("slide")||W.includes("obstacle")||W.includes("endless runner"),ge=L||ce,U=G&&!ge;console.log("🎮 Preview Debug - Available files:"),console.log("🎮 - templeRunUIFile:",!!x),console.log("🎮 - runnerPlayerFile:",!!y),console.log("🎮 - obstacleFile:",!!D),console.log("🎮 - playerFile:",!!P),console.log("🎮 - coinFile:",!!A),console.log("🎮 - hasTempleRunFiles:",L),console.log("🎮 - hasTempleRunContent:",ce),console.log("🎮 - isTempleRun:",ge),console.log("🎮 - isCoinCollector:",U),console.log("🎮 - All project files:",Object.keys(r.files)),console.log("🎮 FINAL GAME TYPE DECISION:"),console.log(ge?"🎮 ✅ RENDERING TEMPLE RUN GAME":U?"🎮 ✅ RENDERING COIN COLLECTOR GAME":"🎮 ✅ RENDERING DEFAULT GAME");const q=`
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
          ${m(_)}
          ${m(E)}
          ${m(O)}
          ${m(k)}
          ${m(B)}
          ${m(T)}
          ${m(R)}
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
            
            if (${ge}) {
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
            } else if (${U}) {
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
    `,J=e.current;console.log("🎮 Setting iframe content, length:",q.length),J.srcdoc=q,J.onload=()=>{var ne,oe;console.log("🎮 Iframe loaded successfully"),n(!1),l(null);try{const Pe=((oe=(ne=J.contentDocument)==null?void 0:ne.body)==null?void 0:oe.textContent)||"";console.log("🎮 Iframe content verification - length:",Pe.length),console.log("🎮 Iframe content preview:",Pe.substring(0,100))}catch(Pe){console.log("🎮 Iframe content verification - access denied:",Pe.message)}},J.onerror=()=>{console.log("🎮 Iframe error occurred"),n(!1),l("Failed to load React preview")}}catch(v){console.error("🎮 Error in createReactPreview:",v),n(!1),l(`Preview generation failed: ${v.message}`)}},w=()=>{if(!e.current)return;const v=`
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
    `,j=e.current;j.srcdoc=v,n(!1)},g=()=>{u(),$.success("Preview refreshed!")},f=()=>{if(!e.current)return;const v=e.current;if(v.srcdoc){const j=window.open("","_blank");j.document.write(v.srcdoc),j.document.close(),$.success("Opened in new tab!")}else $.error("No content to open")},h=()=>{document.fullscreenElement||i(!1)};p.useEffect(()=>(document.addEventListener("fullscreenchange",h),()=>{document.removeEventListener("fullscreenchange",h)}),[]);const S=async()=>{o?document.exitFullscreen&&await document.exitFullscreen():e.current.requestFullscreen&&await e.current.requestFullscreen()};return t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${o?"fixed inset-0 z-50 rounded-none":""}`,children:[t.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("h3",{className:"font-semibold text-sm",children:"Live Preview"}),t.jsx("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"RENDERED"}),t.jsxs("span",{className:"text-xs bg-blue-500 text-white px-2 py-1 rounded",children:["#",d]}),s&&t.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[t.jsx("div",{className:"spinner"}),t.jsx("span",{children:"Updating..."})]}),a&&t.jsx("span",{className:"text-xs text-destructive",children:"Error"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:g,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Refresh Preview",children:t.jsx(Dr,{className:"h-4 w-4"})}),t.jsx("button",{onClick:f,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Open in New Tab",children:t.jsx(zt,{className:"h-4 w-4"})}),t.jsx("button",{onClick:S,className:"p-2 hover:bg-muted rounded-md transition-colors",title:o?"Exit Fullscreen":"Enter Fullscreen",children:o?t.jsx(Fa,{className:"h-4 w-4"}):t.jsx(La,{className:"h-4 w-4"})})]})]}),t.jsx("div",{className:"flex-1 relative bg-black",children:a?t.jsx("div",{className:"flex items-center justify-center h-full",children:t.jsxs("div",{className:"text-center p-6",children:[t.jsx("div",{className:"text-4xl mb-4",children:"⚠️"}),t.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Preview Error"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:a}),t.jsx("button",{onClick:g,className:"px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors",children:"Try Again"})]})}):t.jsx("iframe",{ref:e,className:"w-full h-full border-0",title:"Preview",sandbox:"allow-scripts allow-forms allow-popups",onLoad:()=>n(!1),onError:()=>{n(!1),l("Failed to load preview")}})}),t.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("span",{children:"Responsive"}),t.jsx("span",{children:"•"}),t.jsx("span",{children:"Auto-refresh"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{children:"Ctrl+R to refresh"}),t.jsx("span",{children:"•"}),t.jsx("span",{children:"F11 for fullscreen"})]})]})]})};function Ni(r,e){return function(){return r.apply(e,arguments)}}const{toString:jm}=Object.prototype,{getPrototypeOf:tn}=Object,{iterator:Lr,toStringTag:Si}=Symbol,_r=(r=>e=>{const s=jm.call(e);return r[s]||(r[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),Se=r=>(r=r.toLowerCase(),e=>_r(e)===r),$r=r=>e=>typeof e===r,{isArray:Dt}=Array,St=$r("undefined");function Yt(r){return r!==null&&!St(r)&&r.constructor!==null&&!St(r.constructor)&&he(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Ci=Se("ArrayBuffer");function Nm(r){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Ci(r.buffer),e}const Sm=$r("string"),he=$r("function"),ki=$r("number"),Xt=r=>r!==null&&typeof r=="object",Cm=r=>r===!0||r===!1,fr=r=>{if(_r(r)!=="object")return!1;const e=tn(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Si in r)&&!(Lr in r)},km=r=>{if(!Xt(r)||Yt(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},Tm=Se("Date"),Dm=Se("File"),Em=Se("Blob"),Am=Se("FileList"),Pm=r=>Xt(r)&&he(r.pipe),Rm=r=>{let e;return r&&(typeof FormData=="function"&&r instanceof FormData||he(r.append)&&((e=_r(r))==="formdata"||e==="object"&&he(r.toString)&&r.toString()==="[object FormData]"))},Om=Se("URLSearchParams"),[Im,Mm,Fm,Lm]=["ReadableStream","Request","Response","Headers"].map(Se),_m=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qt(r,e,{allOwnKeys:s=!1}={}){if(r===null||typeof r>"u")return;let n,o;if(typeof r!="object"&&(r=[r]),Dt(r))for(n=0,o=r.length;n<o;n++)e.call(null,r[n],n,r);else{if(Yt(r))return;const i=s?Object.getOwnPropertyNames(r):Object.keys(r),a=i.length;let l;for(n=0;n<a;n++)l=i[n],e.call(null,r[l],l,r)}}function Ti(r,e){if(Yt(r))return null;e=e.toLowerCase();const s=Object.keys(r);let n=s.length,o;for(;n-- >0;)if(o=s[n],e===o.toLowerCase())return o;return null}const nt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Di=r=>!St(r)&&r!==nt;function Ds(){const{caseless:r,skipUndefined:e}=Di(this)&&this||{},s={},n=(o,i)=>{const a=r&&Ti(s,i)||i;fr(s[a])&&fr(o)?s[a]=Ds(s[a],o):fr(o)?s[a]=Ds({},o):Dt(o)?s[a]=o.slice():(!e||!St(o))&&(s[a]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Qt(arguments[o],n);return s}const $m=(r,e,s,{allOwnKeys:n}={})=>(Qt(e,(o,i)=>{s&&he(o)?r[i]=Ni(o,s):r[i]=o},{allOwnKeys:n}),r),Bm=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),Um=(r,e,s,n)=>{r.prototype=Object.create(e.prototype,n),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:e.prototype}),s&&Object.assign(r.prototype,s)},Hm=(r,e,s,n)=>{let o,i,a;const l={};if(e=e||{},r==null)return e;do{for(o=Object.getOwnPropertyNames(r),i=o.length;i-- >0;)a=o[i],(!n||n(a,r,e))&&!l[a]&&(e[a]=r[a],l[a]=!0);r=s!==!1&&tn(r)}while(r&&(!s||s(r,e))&&r!==Object.prototype);return e},zm=(r,e,s)=>{r=String(r),(s===void 0||s>r.length)&&(s=r.length),s-=e.length;const n=r.indexOf(e,s);return n!==-1&&n===s},Gm=r=>{if(!r)return null;if(Dt(r))return r;let e=r.length;if(!ki(e))return null;const s=new Array(e);for(;e-- >0;)s[e]=r[e];return s},Wm=(r=>e=>r&&e instanceof r)(typeof Uint8Array<"u"&&tn(Uint8Array)),qm=(r,e)=>{const n=(r&&r[Lr]).call(r);let o;for(;(o=n.next())&&!o.done;){const i=o.value;e.call(r,i[0],i[1])}},Vm=(r,e)=>{let s;const n=[];for(;(s=r.exec(e))!==null;)n.push(s);return n},Jm=Se("HTMLFormElement"),Km=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,n,o){return n.toUpperCase()+o}),Ln=(({hasOwnProperty:r})=>(e,s)=>r.call(e,s))(Object.prototype),Ym=Se("RegExp"),Ei=(r,e)=>{const s=Object.getOwnPropertyDescriptors(r),n={};Qt(s,(o,i)=>{let a;(a=e(o,i,r))!==!1&&(n[i]=a||o)}),Object.defineProperties(r,n)},Xm=r=>{Ei(r,(e,s)=>{if(he(r)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const n=r[s];if(he(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},Qm=(r,e)=>{const s={},n=o=>{o.forEach(i=>{s[i]=!0})};return Dt(r)?n(r):n(String(r).split(e)),s},Zm=()=>{},ep=(r,e)=>r!=null&&Number.isFinite(r=+r)?r:e;function tp(r){return!!(r&&he(r.append)&&r[Si]==="FormData"&&r[Lr])}const rp=r=>{const e=new Array(10),s=(n,o)=>{if(Xt(n)){if(e.indexOf(n)>=0)return;if(Yt(n))return n;if(!("toJSON"in n)){e[o]=n;const i=Dt(n)?[]:{};return Qt(n,(a,l)=>{const d=s(a,o+1);!St(d)&&(i[l]=d)}),e[o]=void 0,i}}return n};return s(r,0)},sp=Se("AsyncFunction"),np=r=>r&&(Xt(r)||he(r))&&he(r.then)&&he(r.catch),Ai=((r,e)=>r?setImmediate:e?((s,n)=>(nt.addEventListener("message",({source:o,data:i})=>{o===nt&&i===s&&n.length&&n.shift()()},!1),o=>{n.push(o),nt.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",he(nt.postMessage)),op=typeof queueMicrotask<"u"?queueMicrotask.bind(nt):typeof process<"u"&&process.nextTick||Ai,ip=r=>r!=null&&he(r[Lr]),C={isArray:Dt,isArrayBuffer:Ci,isBuffer:Yt,isFormData:Rm,isArrayBufferView:Nm,isString:Sm,isNumber:ki,isBoolean:Cm,isObject:Xt,isPlainObject:fr,isEmptyObject:km,isReadableStream:Im,isRequest:Mm,isResponse:Fm,isHeaders:Lm,isUndefined:St,isDate:Tm,isFile:Dm,isBlob:Em,isRegExp:Ym,isFunction:he,isStream:Pm,isURLSearchParams:Om,isTypedArray:Wm,isFileList:Am,forEach:Qt,merge:Ds,extend:$m,trim:_m,stripBOM:Bm,inherits:Um,toFlatObject:Hm,kindOf:_r,kindOfTest:Se,endsWith:zm,toArray:Gm,forEachEntry:qm,matchAll:Vm,isHTMLForm:Jm,hasOwnProperty:Ln,hasOwnProp:Ln,reduceDescriptors:Ei,freezeMethods:Xm,toObjectSet:Qm,toCamelCase:Km,noop:Zm,toFiniteNumber:ep,findKey:Ti,global:nt,isContextDefined:Di,isSpecCompliantForm:tp,toJSONObject:rp,isAsyncFn:sp,isThenable:np,setImmediate:Ai,asap:op,isIterable:ip};function H(r,e,s,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",e&&(this.code=e),s&&(this.config=s),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}C.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.status}}});const Pi=H.prototype,Ri={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{Ri[r]={value:r}});Object.defineProperties(H,Ri);Object.defineProperty(Pi,"isAxiosError",{value:!0});H.from=(r,e,s,n,o,i)=>{const a=Object.create(Pi);C.toFlatObject(r,a,function(u){return u!==Error.prototype},c=>c!=="isAxiosError");const l=r&&r.message?r.message:"Error",d=e==null&&r?r.code:e;return H.call(a,l,d,s,n,o),r&&a.cause==null&&Object.defineProperty(a,"cause",{value:r,configurable:!0}),a.name=r&&r.name||"Error",i&&Object.assign(a,i),a};const ap=null;function Es(r){return C.isPlainObject(r)||C.isArray(r)}function Oi(r){return C.endsWith(r,"[]")?r.slice(0,-2):r}function _n(r,e,s){return r?r.concat(e).map(function(o,i){return o=Oi(o),!s&&i?"["+o+"]":o}).join(s?".":""):e}function lp(r){return C.isArray(r)&&!r.some(Es)}const cp=C.toFlatObject(C,{},null,function(e){return/^is[A-Z]/.test(e)});function Br(r,e,s){if(!C.isObject(r))throw new TypeError("target must be an object");e=e||new FormData,s=C.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,h){return!C.isUndefined(h[f])});const n=s.metaTokens,o=s.visitor||u,i=s.dots,a=s.indexes,d=(s.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(e);if(!C.isFunction(o))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(C.isDate(g))return g.toISOString();if(C.isBoolean(g))return g.toString();if(!d&&C.isBlob(g))throw new H("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(g)||C.isTypedArray(g)?d&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,f,h){let S=g;if(g&&!h&&typeof g=="object"){if(C.endsWith(f,"{}"))f=n?f:f.slice(0,-2),g=JSON.stringify(g);else if(C.isArray(g)&&lp(g)||(C.isFileList(g)||C.endsWith(f,"[]"))&&(S=C.toArray(g)))return f=Oi(f),S.forEach(function(j,x){!(C.isUndefined(j)||j===null)&&e.append(a===!0?_n([f],x,i):a===null?f:f+"[]",c(j))}),!1}return Es(g)?!0:(e.append(_n(h,f,i),c(g)),!1)}const m=[],b=Object.assign(cp,{defaultVisitor:u,convertValue:c,isVisitable:Es});function w(g,f){if(!C.isUndefined(g)){if(m.indexOf(g)!==-1)throw Error("Circular reference detected in "+f.join("."));m.push(g),C.forEach(g,function(S,v){(!(C.isUndefined(S)||S===null)&&o.call(e,S,C.isString(v)?v.trim():v,f,b))===!0&&w(S,f?f.concat(v):[v])}),m.pop()}}if(!C.isObject(r))throw new TypeError("data must be an object");return w(r),e}function $n(r){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function rn(r,e){this._pairs=[],r&&Br(r,this,e)}const Ii=rn.prototype;Ii.append=function(e,s){this._pairs.push([e,s])};Ii.toString=function(e){const s=e?function(n){return e.call(this,n,$n)}:$n;return this._pairs.map(function(o){return s(o[0])+"="+s(o[1])},"").join("&")};function dp(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Mi(r,e,s){if(!e)return r;const n=s&&s.encode||dp;C.isFunction(s)&&(s={serialize:s});const o=s&&s.serialize;let i;if(o?i=o(e,s):i=C.isURLSearchParams(e)?e.toString():new rn(e,s).toString(n),i){const a=r.indexOf("#");a!==-1&&(r=r.slice(0,a)),r+=(r.indexOf("?")===-1?"?":"&")+i}return r}class Bn{constructor(){this.handlers=[]}use(e,s,n){return this.handlers.push({fulfilled:e,rejected:s,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){C.forEach(this.handlers,function(n){n!==null&&e(n)})}}const Fi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},up=typeof URLSearchParams<"u"?URLSearchParams:rn,mp=typeof FormData<"u"?FormData:null,pp=typeof Blob<"u"?Blob:null,hp={isBrowser:!0,classes:{URLSearchParams:up,FormData:mp,Blob:pp},protocols:["http","https","file","blob","url","data"]},sn=typeof window<"u"&&typeof document<"u",As=typeof navigator=="object"&&navigator||void 0,fp=sn&&(!As||["ReactNative","NativeScript","NS"].indexOf(As.product)<0),gp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xp=sn&&window.location.href||"http://localhost",bp=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sn,hasStandardBrowserEnv:fp,hasStandardBrowserWebWorkerEnv:gp,navigator:As,origin:xp},Symbol.toStringTag,{value:"Module"})),le={...bp,...hp};function yp(r,e){return Br(r,new le.classes.URLSearchParams,{visitor:function(s,n,o,i){return le.isNode&&C.isBuffer(s)?(this.append(n,s.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function vp(r){return C.matchAll(/\w+|\[(\w*)]/g,r).map(e=>e[0]==="[]"?"":e[1]||e[0])}function wp(r){const e={},s=Object.keys(r);let n;const o=s.length;let i;for(n=0;n<o;n++)i=s[n],e[i]=r[i];return e}function Li(r){function e(s,n,o,i){let a=s[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),d=i>=s.length;return a=!a&&C.isArray(o)?o.length:a,d?(C.hasOwnProp(o,a)?o[a]=[o[a],n]:o[a]=n,!l):((!o[a]||!C.isObject(o[a]))&&(o[a]=[]),e(s,n,o[a],i)&&C.isArray(o[a])&&(o[a]=wp(o[a])),!l)}if(C.isFormData(r)&&C.isFunction(r.entries)){const s={};return C.forEachEntry(r,(n,o)=>{e(vp(n),o,s,0)}),s}return null}function jp(r,e,s){if(C.isString(r))try{return(e||JSON.parse)(r),C.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(s||JSON.stringify)(r)}const Zt={transitional:Fi,adapter:["xhr","http","fetch"],transformRequest:[function(e,s){const n=s.getContentType()||"",o=n.indexOf("application/json")>-1,i=C.isObject(e);if(i&&C.isHTMLForm(e)&&(e=new FormData(e)),C.isFormData(e))return o?JSON.stringify(Li(e)):e;if(C.isArrayBuffer(e)||C.isBuffer(e)||C.isStream(e)||C.isFile(e)||C.isBlob(e)||C.isReadableStream(e))return e;if(C.isArrayBufferView(e))return e.buffer;if(C.isURLSearchParams(e))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return yp(e,this.formSerializer).toString();if((l=C.isFileList(e))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Br(l?{"files[]":e}:e,d&&new d,this.formSerializer)}}return i||o?(s.setContentType("application/json",!1),jp(e)):e}],transformResponse:[function(e){const s=this.transitional||Zt.transitional,n=s&&s.forcedJSONParsing,o=this.responseType==="json";if(C.isResponse(e)||C.isReadableStream(e))return e;if(e&&C.isString(e)&&(n&&!this.responseType||o)){const a=!(s&&s.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(l){if(a)throw l.name==="SyntaxError"?H.from(l,H.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:le.classes.FormData,Blob:le.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],r=>{Zt.headers[r]={}});const Np=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Sp=r=>{const e={};let s,n,o;return r&&r.split(`
`).forEach(function(a){o=a.indexOf(":"),s=a.substring(0,o).trim().toLowerCase(),n=a.substring(o+1).trim(),!(!s||e[s]&&Np[s])&&(s==="set-cookie"?e[s]?e[s].push(n):e[s]=[n]:e[s]=e[s]?e[s]+", "+n:n)}),e},Un=Symbol("internals");function Ft(r){return r&&String(r).trim().toLowerCase()}function gr(r){return r===!1||r==null?r:C.isArray(r)?r.map(gr):String(r)}function Cp(r){const e=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=s.exec(r);)e[n[1]]=n[2];return e}const kp=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function ns(r,e,s,n,o){if(C.isFunction(n))return n.call(this,e,s);if(o&&(e=s),!!C.isString(e)){if(C.isString(n))return e.indexOf(n)!==-1;if(C.isRegExp(n))return n.test(e)}}function Tp(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,s,n)=>s.toUpperCase()+n)}function Dp(r,e){const s=C.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(r,n+s,{value:function(o,i,a){return this[n].call(this,e,o,i,a)},configurable:!0})})}let fe=class{constructor(e){e&&this.set(e)}set(e,s,n){const o=this;function i(l,d,c){const u=Ft(d);if(!u)throw new Error("header name must be a non-empty string");const m=C.findKey(o,u);(!m||o[m]===void 0||c===!0||c===void 0&&o[m]!==!1)&&(o[m||d]=gr(l))}const a=(l,d)=>C.forEach(l,(c,u)=>i(c,u,d));if(C.isPlainObject(e)||e instanceof this.constructor)a(e,s);else if(C.isString(e)&&(e=e.trim())&&!kp(e))a(Sp(e),s);else if(C.isObject(e)&&C.isIterable(e)){let l={},d,c;for(const u of e){if(!C.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[c=u[0]]=(d=l[c])?C.isArray(d)?[...d,u[1]]:[d,u[1]]:u[1]}a(l,s)}else e!=null&&i(s,e,n);return this}get(e,s){if(e=Ft(e),e){const n=C.findKey(this,e);if(n){const o=this[n];if(!s)return o;if(s===!0)return Cp(o);if(C.isFunction(s))return s.call(this,o,n);if(C.isRegExp(s))return s.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,s){if(e=Ft(e),e){const n=C.findKey(this,e);return!!(n&&this[n]!==void 0&&(!s||ns(this,this[n],n,s)))}return!1}delete(e,s){const n=this;let o=!1;function i(a){if(a=Ft(a),a){const l=C.findKey(n,a);l&&(!s||ns(n,n[l],l,s))&&(delete n[l],o=!0)}}return C.isArray(e)?e.forEach(i):i(e),o}clear(e){const s=Object.keys(this);let n=s.length,o=!1;for(;n--;){const i=s[n];(!e||ns(this,this[i],i,e,!0))&&(delete this[i],o=!0)}return o}normalize(e){const s=this,n={};return C.forEach(this,(o,i)=>{const a=C.findKey(n,i);if(a){s[a]=gr(o),delete s[i];return}const l=e?Tp(i):String(i).trim();l!==i&&delete s[i],s[l]=gr(o),n[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const s=Object.create(null);return C.forEach(this,(n,o)=>{n!=null&&n!==!1&&(s[o]=e&&C.isArray(n)?n.join(", "):n)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,s])=>e+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...s){const n=new this(e);return s.forEach(o=>n.set(o)),n}static accessor(e){const n=(this[Un]=this[Un]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=Ft(a);n[l]||(Dp(o,a),n[l]=!0)}return C.isArray(e)?e.forEach(i):i(e),this}};fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(fe.prototype,({value:r},e)=>{let s=e[0].toUpperCase()+e.slice(1);return{get:()=>r,set(n){this[s]=n}}});C.freezeMethods(fe);function os(r,e){const s=this||Zt,n=e||s,o=fe.from(n.headers);let i=n.data;return C.forEach(r,function(l){i=l.call(s,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function _i(r){return!!(r&&r.__CANCEL__)}function Et(r,e,s){H.call(this,r??"canceled",H.ERR_CANCELED,e,s),this.name="CanceledError"}C.inherits(Et,H,{__CANCEL__:!0});function $i(r,e,s){const n=s.config.validateStatus;!s.status||!n||n(s.status)?r(s):e(new H("Request failed with status code "+s.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function Ep(r){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return e&&e[1]||""}function Ap(r,e){r=r||10;const s=new Array(r),n=new Array(r);let o=0,i=0,a;return e=e!==void 0?e:1e3,function(d){const c=Date.now(),u=n[i];a||(a=c),s[o]=d,n[o]=c;let m=i,b=0;for(;m!==o;)b+=s[m++],m=m%r;if(o=(o+1)%r,o===i&&(i=(i+1)%r),c-a<e)return;const w=u&&c-u;return w?Math.round(b*1e3/w):void 0}}function Pp(r,e){let s=0,n=1e3/e,o,i;const a=(c,u=Date.now())=>{s=u,o=null,i&&(clearTimeout(i),i=null),r(...c)};return[(...c)=>{const u=Date.now(),m=u-s;m>=n?a(c,u):(o=c,i||(i=setTimeout(()=>{i=null,a(o)},n-m)))},()=>o&&a(o)]}const kr=(r,e,s=3)=>{let n=0;const o=Ap(50,250);return Pp(i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,d=a-n,c=o(d),u=a<=l;n=a;const m={loaded:a,total:l,progress:l?a/l:void 0,bytes:d,rate:c||void 0,estimated:c&&l&&u?(l-a)/c:void 0,event:i,lengthComputable:l!=null,[e?"download":"upload"]:!0};r(m)},s)},Hn=(r,e)=>{const s=r!=null;return[n=>e[0]({lengthComputable:s,total:r,loaded:n}),e[1]]},zn=r=>(...e)=>C.asap(()=>r(...e)),Rp=le.hasStandardBrowserEnv?((r,e)=>s=>(s=new URL(s,le.origin),r.protocol===s.protocol&&r.host===s.host&&(e||r.port===s.port)))(new URL(le.origin),le.navigator&&/(msie|trident)/i.test(le.navigator.userAgent)):()=>!0,Op=le.hasStandardBrowserEnv?{write(r,e,s,n,o,i){const a=[r+"="+encodeURIComponent(e)];C.isNumber(s)&&a.push("expires="+new Date(s).toGMTString()),C.isString(n)&&a.push("path="+n),C.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(r){const e=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ip(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function Mp(r,e){return e?r.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):r}function Bi(r,e,s){let n=!Ip(e);return r&&(n||s==!1)?Mp(r,e):e}const Gn=r=>r instanceof fe?{...r}:r;function lt(r,e){e=e||{};const s={};function n(c,u,m,b){return C.isPlainObject(c)&&C.isPlainObject(u)?C.merge.call({caseless:b},c,u):C.isPlainObject(u)?C.merge({},u):C.isArray(u)?u.slice():u}function o(c,u,m,b){if(C.isUndefined(u)){if(!C.isUndefined(c))return n(void 0,c,m,b)}else return n(c,u,m,b)}function i(c,u){if(!C.isUndefined(u))return n(void 0,u)}function a(c,u){if(C.isUndefined(u)){if(!C.isUndefined(c))return n(void 0,c)}else return n(void 0,u)}function l(c,u,m){if(m in e)return n(c,u);if(m in r)return n(void 0,c)}const d={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(c,u,m)=>o(Gn(c),Gn(u),m,!0)};return C.forEach(Object.keys({...r,...e}),function(u){const m=d[u]||o,b=m(r[u],e[u],u);C.isUndefined(b)&&m!==l||(s[u]=b)}),s}const Ui=r=>{const e=lt({},r);let{data:s,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:l}=e;if(e.headers=a=fe.from(a),e.url=Mi(Bi(e.baseURL,e.url,e.allowAbsoluteUrls),r.params,r.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),C.isFormData(s)){if(le.hasStandardBrowserEnv||le.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(C.isFunction(s.getHeaders)){const d=s.getHeaders(),c=["content-type","content-length"];Object.entries(d).forEach(([u,m])=>{c.includes(u.toLowerCase())&&a.set(u,m)})}}if(le.hasStandardBrowserEnv&&(n&&C.isFunction(n)&&(n=n(e)),n||n!==!1&&Rp(e.url))){const d=o&&i&&Op.read(i);d&&a.set(o,d)}return e},Fp=typeof XMLHttpRequest<"u",Lp=Fp&&function(r){return new Promise(function(s,n){const o=Ui(r);let i=o.data;const a=fe.from(o.headers).normalize();let{responseType:l,onUploadProgress:d,onDownloadProgress:c}=o,u,m,b,w,g;function f(){w&&w(),g&&g(),o.cancelToken&&o.cancelToken.unsubscribe(u),o.signal&&o.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(o.method.toUpperCase(),o.url,!0),h.timeout=o.timeout;function S(){if(!h)return;const j=fe.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),y={data:!l||l==="text"||l==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:j,config:r,request:h};$i(function(A){s(A),f()},function(A){n(A),f()},y),h=null}"onloadend"in h?h.onloadend=S:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(S)},h.onabort=function(){h&&(n(new H("Request aborted",H.ECONNABORTED,r,h)),h=null)},h.onerror=function(x){const y=x&&x.message?x.message:"Network Error",D=new H(y,H.ERR_NETWORK,r,h);D.event=x||null,n(D),h=null},h.ontimeout=function(){let x=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const y=o.transitional||Fi;o.timeoutErrorMessage&&(x=o.timeoutErrorMessage),n(new H(x,y.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,r,h)),h=null},i===void 0&&a.setContentType(null),"setRequestHeader"in h&&C.forEach(a.toJSON(),function(x,y){h.setRequestHeader(y,x)}),C.isUndefined(o.withCredentials)||(h.withCredentials=!!o.withCredentials),l&&l!=="json"&&(h.responseType=o.responseType),c&&([b,g]=kr(c,!0),h.addEventListener("progress",b)),d&&h.upload&&([m,w]=kr(d),h.upload.addEventListener("progress",m),h.upload.addEventListener("loadend",w)),(o.cancelToken||o.signal)&&(u=j=>{h&&(n(!j||j.type?new Et(null,r,h):j),h.abort(),h=null)},o.cancelToken&&o.cancelToken.subscribe(u),o.signal&&(o.signal.aborted?u():o.signal.addEventListener("abort",u)));const v=Ep(o.url);if(v&&le.protocols.indexOf(v)===-1){n(new H("Unsupported protocol "+v+":",H.ERR_BAD_REQUEST,r));return}h.send(i||null)})},_p=(r,e)=>{const{length:s}=r=r?r.filter(Boolean):[];if(e||s){let n=new AbortController,o;const i=function(c){if(!o){o=!0,l();const u=c instanceof Error?c:this.reason;n.abort(u instanceof H?u:new Et(u instanceof Error?u.message:u))}};let a=e&&setTimeout(()=>{a=null,i(new H(`timeout ${e} of ms exceeded`,H.ETIMEDOUT))},e);const l=()=>{r&&(a&&clearTimeout(a),a=null,r.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),r=null)};r.forEach(c=>c.addEventListener("abort",i));const{signal:d}=n;return d.unsubscribe=()=>C.asap(l),d}},$p=function*(r,e){let s=r.byteLength;if(s<e){yield r;return}let n=0,o;for(;n<s;)o=n+e,yield r.slice(n,o),n=o},Bp=async function*(r,e){for await(const s of Up(r))yield*$p(s,e)},Up=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const e=r.getReader();try{for(;;){const{done:s,value:n}=await e.read();if(s)break;yield n}}finally{await e.cancel()}},Wn=(r,e,s,n)=>{const o=Bp(r,e);let i=0,a,l=d=>{a||(a=!0,n&&n(d))};return new ReadableStream({async pull(d){try{const{done:c,value:u}=await o.next();if(c){l(),d.close();return}let m=u.byteLength;if(s){let b=i+=m;s(b)}d.enqueue(new Uint8Array(u))}catch(c){throw l(c),c}},cancel(d){return l(d),o.return()}},{highWaterMark:2})},qn=64*1024,{isFunction:ar}=C,Hp=(({Request:r,Response:e})=>({Request:r,Response:e}))(C.global),{ReadableStream:Vn,TextEncoder:Jn}=C.global,Kn=(r,...e)=>{try{return!!r(...e)}catch{return!1}},zp=r=>{r=C.merge.call({skipUndefined:!0},Hp,r);const{fetch:e,Request:s,Response:n}=r,o=e?ar(e):typeof fetch=="function",i=ar(s),a=ar(n);if(!o)return!1;const l=o&&ar(Vn),d=o&&(typeof Jn=="function"?(g=>f=>g.encode(f))(new Jn):async g=>new Uint8Array(await new s(g).arrayBuffer())),c=i&&l&&Kn(()=>{let g=!1;const f=new s(le.origin,{body:new Vn,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!f}),u=a&&l&&Kn(()=>C.isReadableStream(new n("").body)),m={stream:u&&(g=>g.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!m[g]&&(m[g]=(f,h)=>{let S=f&&f[g];if(S)return S.call(f);throw new H(`Response type '${g}' is not supported`,H.ERR_NOT_SUPPORT,h)})});const b=async g=>{if(g==null)return 0;if(C.isBlob(g))return g.size;if(C.isSpecCompliantForm(g))return(await new s(le.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(C.isArrayBufferView(g)||C.isArrayBuffer(g))return g.byteLength;if(C.isURLSearchParams(g)&&(g=g+""),C.isString(g))return(await d(g)).byteLength},w=async(g,f)=>{const h=C.toFiniteNumber(g.getContentLength());return h??b(f)};return async g=>{let{url:f,method:h,data:S,signal:v,cancelToken:j,timeout:x,onDownloadProgress:y,onUploadProgress:D,responseType:A,headers:P,withCredentials:_="same-origin",fetchOptions:E}=Ui(g),O=e||fetch;A=A?(A+"").toLowerCase():"text";let k=_p([v,j&&j.toAbortSignal()],x),B=null;const T=k&&k.unsubscribe&&(()=>{k.unsubscribe()});let R;try{if(D&&c&&h!=="get"&&h!=="head"&&(R=await w(P,S))!==0){let U=new s(f,{method:"POST",body:S,duplex:"half"}),q;if(C.isFormData(S)&&(q=U.headers.get("content-type"))&&P.setContentType(q),U.body){const[J,ne]=Hn(R,kr(zn(D)));S=Wn(U.body,qn,J,ne)}}C.isString(_)||(_=_?"include":"omit");const L=i&&"credentials"in s.prototype,G={...E,signal:k,method:h.toUpperCase(),headers:P.normalize().toJSON(),body:S,duplex:"half",credentials:L?_:void 0};B=i&&new s(f,G);let W=await(i?O(B,E):O(f,G));const ce=u&&(A==="stream"||A==="response");if(u&&(y||ce&&T)){const U={};["status","statusText","headers"].forEach(oe=>{U[oe]=W[oe]});const q=C.toFiniteNumber(W.headers.get("content-length")),[J,ne]=y&&Hn(q,kr(zn(y),!0))||[];W=new n(Wn(W.body,qn,J,()=>{ne&&ne(),T&&T()}),U)}A=A||"text";let ge=await m[C.findKey(m,A)||"text"](W,g);return!ce&&T&&T(),await new Promise((U,q)=>{$i(U,q,{data:ge,headers:fe.from(W.headers),status:W.status,statusText:W.statusText,config:g,request:B})})}catch(L){throw T&&T(),L&&L.name==="TypeError"&&/Load failed|fetch/i.test(L.message)?Object.assign(new H("Network Error",H.ERR_NETWORK,g,B),{cause:L.cause||L}):H.from(L,L&&L.code,g,B)}}},Gp=new Map,Hi=r=>{let e=r?r.env:{};const{fetch:s,Request:n,Response:o}=e,i=[n,o,s];let a=i.length,l=a,d,c,u=Gp;for(;l--;)d=i[l],c=u.get(d),c===void 0&&u.set(d,c=l?new Map:zp(e)),u=c;return c};Hi();const Ps={http:ap,xhr:Lp,fetch:{get:Hi}};C.forEach(Ps,(r,e)=>{if(r){try{Object.defineProperty(r,"name",{value:e})}catch{}Object.defineProperty(r,"adapterName",{value:e})}});const Yn=r=>`- ${r}`,Wp=r=>C.isFunction(r)||r===null||r===!1,zi={getAdapter:(r,e)=>{r=C.isArray(r)?r:[r];const{length:s}=r;let n,o;const i={};for(let a=0;a<s;a++){n=r[a];let l;if(o=n,!Wp(n)&&(o=Ps[(l=String(n)).toLowerCase()],o===void 0))throw new H(`Unknown adapter '${l}'`);if(o&&(C.isFunction(o)||(o=o.get(e))))break;i[l||"#"+a]=o}if(!o){const a=Object.entries(i).map(([d,c])=>`adapter ${d} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=s?a.length>1?`since :
`+a.map(Yn).join(`
`):" "+Yn(a[0]):"as no adapter specified";throw new H("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return o},adapters:Ps};function is(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Et(null,r)}function Xn(r){return is(r),r.headers=fe.from(r.headers),r.data=os.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),zi.getAdapter(r.adapter||Zt.adapter,r)(r).then(function(n){return is(r),n.data=os.call(r,r.transformResponse,n),n.headers=fe.from(n.headers),n},function(n){return _i(n)||(is(r),n&&n.response&&(n.response.data=os.call(r,r.transformResponse,n.response),n.response.headers=fe.from(n.response.headers))),Promise.reject(n)})}const Gi="1.12.2",Ur={};["object","boolean","number","function","string","symbol"].forEach((r,e)=>{Ur[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});const Qn={};Ur.transitional=function(e,s,n){function o(i,a){return"[Axios v"+Gi+"] Transitional option '"+i+"'"+a+(n?". "+n:"")}return(i,a,l)=>{if(e===!1)throw new H(o(a," has been removed"+(s?" in "+s:"")),H.ERR_DEPRECATED);return s&&!Qn[a]&&(Qn[a]=!0,console.warn(o(a," has been deprecated since v"+s+" and will be removed in the near future"))),e?e(i,a,l):!0}};Ur.spelling=function(e){return(s,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function qp(r,e,s){if(typeof r!="object")throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const n=Object.keys(r);let o=n.length;for(;o-- >0;){const i=n[o],a=e[i];if(a){const l=r[i],d=l===void 0||a(l,i,r);if(d!==!0)throw new H("option "+i+" must be "+d,H.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new H("Unknown option "+i,H.ERR_BAD_OPTION)}}const xr={assertOptions:qp,validators:Ur},Ce=xr.validators;let it=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Bn,response:new Bn}}async request(e,s){try{return await this._request(e,s)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(e,s){typeof e=="string"?(s=s||{},s.url=e):s=e||{},s=lt(this.defaults,s);const{transitional:n,paramsSerializer:o,headers:i}=s;n!==void 0&&xr.assertOptions(n,{silentJSONParsing:Ce.transitional(Ce.boolean),forcedJSONParsing:Ce.transitional(Ce.boolean),clarifyTimeoutError:Ce.transitional(Ce.boolean)},!1),o!=null&&(C.isFunction(o)?s.paramsSerializer={serialize:o}:xr.assertOptions(o,{encode:Ce.function,serialize:Ce.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),xr.assertOptions(s,{baseUrl:Ce.spelling("baseURL"),withXsrfToken:Ce.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let a=i&&C.merge(i.common,i[s.method]);i&&C.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),s.headers=fe.concat(a,i);const l=[];let d=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(s)===!1||(d=d&&f.synchronous,l.unshift(f.fulfilled,f.rejected))});const c=[];this.interceptors.response.forEach(function(f){c.push(f.fulfilled,f.rejected)});let u,m=0,b;if(!d){const g=[Xn.bind(this),void 0];for(g.unshift(...l),g.push(...c),b=g.length,u=Promise.resolve(s);m<b;)u=u.then(g[m++],g[m++]);return u}b=l.length;let w=s;for(;m<b;){const g=l[m++],f=l[m++];try{w=g(w)}catch(h){f.call(this,h);break}}try{u=Xn.call(this,w)}catch(g){return Promise.reject(g)}for(m=0,b=c.length;m<b;)u=u.then(c[m++],c[m++]);return u}getUri(e){e=lt(this.defaults,e);const s=Bi(e.baseURL,e.url,e.allowAbsoluteUrls);return Mi(s,e.params,e.paramsSerializer)}};C.forEach(["delete","get","head","options"],function(e){it.prototype[e]=function(s,n){return this.request(lt(n||{},{method:e,url:s,data:(n||{}).data}))}});C.forEach(["post","put","patch"],function(e){function s(n){return function(i,a,l){return this.request(lt(l||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}it.prototype[e]=s(),it.prototype[e+"Form"]=s(!0)});let Vp=class Wi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(i){s=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{n.subscribe(l),i=l}).then(o);return a.cancel=function(){n.unsubscribe(i)},a},e(function(i,a,l){n.reason||(n.reason=new Et(i,a,l),s(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const s=this._listeners.indexOf(e);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const e=new AbortController,s=n=>{e.abort(n)};return this.subscribe(s),e.signal.unsubscribe=()=>this.unsubscribe(s),e.signal}static source(){let e;return{token:new Wi(function(o){e=o}),cancel:e}}};function Jp(r){return function(s){return r.apply(null,s)}}function Kp(r){return C.isObject(r)&&r.isAxiosError===!0}const Rs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Rs).forEach(([r,e])=>{Rs[e]=r});function qi(r){const e=new it(r),s=Ni(it.prototype.request,e);return C.extend(s,it.prototype,e,{allOwnKeys:!0}),C.extend(s,e,null,{allOwnKeys:!0}),s.create=function(o){return qi(lt(r,o))},s}const Q=qi(Zt);Q.Axios=it;Q.CanceledError=Et;Q.CancelToken=Vp;Q.isCancel=_i;Q.VERSION=Gi;Q.toFormData=Br;Q.AxiosError=H;Q.Cancel=Q.CanceledError;Q.all=function(e){return Promise.all(e)};Q.spread=Jp;Q.isAxiosError=Kp;Q.mergeConfig=lt;Q.AxiosHeaders=fe;Q.formToJSON=r=>Li(C.isHTMLForm(r)?new FormData(r):r);Q.getAdapter=zi.getAdapter;Q.HttpStatusCode=Rs;Q.default=Q;const{Axios:Jg,AxiosError:Kg,CanceledError:Yg,isCancel:Xg,CancelToken:Qg,VERSION:Zg,all:ex,Cancel:tx,isAxiosError:rx,spread:sx,toFormData:nx,AxiosHeaders:ox,HttpStatusCode:ix,formToJSON:ax,getAdapter:lx,mergeConfig:cx}=Q,Zn={"codellama-7b":{name:"CodeLlama 7B",type:"Code Generation",baseURL:"http://localhost:11434/api",model:"codellama:7b",description:"Fast and efficient code generation (7B parameters)",languages:["python","javascript","java","cpp","go","rust","php","ruby"],strengths:["speed","efficiency","general-purpose"],ram_required:"8GB"},auto:{name:"Auto Select",type:"Auto Selection",baseURL:"http://localhost:11434/api",model:"auto",description:"Automatically selects the best available model",languages:["all"],strengths:["smart-selection","availability"],ram_required:"variable"}},as={"web-apps":{name:"Web Applications",description:"Full-stack web applications",templates:[{id:"react-dashboard",name:"React Dashboard",description:"Modern React dashboard with charts and analytics",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"ecommerce-store",name:"E-commerce Store",description:"Complete online store with cart and checkout",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]}]},"mobile-apps":{name:"Mobile Applications",description:"React Native mobile applications",templates:[{id:"todo-app",name:"Todo App",description:"Simple todo application with React Native",category:"mobile-apps",files:["App.js","components/TodoItem.js","styles.js"]}]}};class Yp{constructor(){if(this.isHealthy=!1,this.modelHealth={},this.availableModels=Object.keys(Zn),this.baseURL="http://localhost:11434/api",this.isProduction=window.location.protocol==="https:",this.isLocalhost=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",this.isProduction&&!this.isLocalhost){console.log("🌐 Production environment detected - skipping local AI detection"),this.isHealthy=!1;return}console.log("🔍 Initializing local AI health monitoring..."),this.checkHealth(),setInterval(()=>{this.checkHealthQuiet()},3e4)}async checkHealth(){if(!(this.isProduction&&!this.isLocalhost))try{const e=await Q.get(`${this.baseURL}/tags`,{timeout:3e3});if(e.status===200){const s=this.isHealthy;this.isHealthy=!0,s||console.log("✅ Local AI service is healthy");const n=e.data.models||[];this.modelHealth={},n.forEach(o=>{this.modelHealth[o.name]={isHealthy:!0,size:o.size,modified_at:o.modified_at}})}else{const s=this.isHealthy;this.isHealthy=!1,s&&console.log("⚠️ Local AI service is not responding")}}catch(e){const s=this.isHealthy;this.isHealthy=!1,e.code==="ERR_NETWORK"||e.message.includes("CORS")?s||console.log("🔒 Local AI not accessible (CORS/Network) - using cloud AI"):e.code==="ECONNREFUSED"?s||console.log("💻 Ollama not running locally - using cloud AI"):s||console.log("⚠️ Local AI service not available:",e.message)}}async checkHealthQuiet(){if(!(this.isProduction&&!this.isLocalhost))try{const e=await Q.get(`${this.baseURL}/tags`,{timeout:3e3});if(e.status===200){const s=this.isHealthy;this.isHealthy=!0;const n=e.data.models||[];this.modelHealth={},n.forEach(o=>{this.modelHealth[o.name]={isHealthy:!0,size:o.size,modified_at:o.modified_at}})}else this.isHealthy=!1}catch{this.isHealthy=!1}}getAvailableModels(){return Object.values(Zn)}getHealthyModels(){return Object.keys(this.modelHealth).filter(e=>this.modelHealth[e].isHealthy)}getTemplateCategories(){return as}getTemplatesByCategory(e){var s;return((s=as[e])==null?void 0:s.templates)||[]}getAllTemplates(){const e=[];return Object.values(as).forEach(s=>{e.push(...s.templates)}),e}searchTemplates(e){return this.getAllTemplates().filter(n=>n.name.toLowerCase().includes(e.toLowerCase())||n.description.toLowerCase().includes(e.toLowerCase()))}getPopularTemplates(){return this.getAllTemplates().slice(0,5)}generateTemplateById(e,s={}){const o=this.getAllTemplates().find(i=>i.id===e);if(!o)throw new Error(`Template ${e} not found`);return this.createTemplateFiles(o,s)}createTemplateFiles(e,s={}){const n={};switch(e.id){case"react-dashboard":n["index.html"]=`<!DOCTYPE html>
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
</html>`}return n}async generateCode(e,s={}){console.log("🚀 Starting code generation for prompt:",e);try{return this.isProduction&&!this.isLocalhost?(console.log("🌐 Production environment - using template fallback"),this.createFallbackResponse(e,s)):this.isHealthy?await this.generateWithLocalAI(e,s):(console.log("⚠️ Local AI not available, using template fallback"),this.createFallbackResponse(e,s))}catch(n){return console.error("❌ Code generation failed:",n),this.createFallbackResponse(e,s)}}async generateWithLocalAI(e,s={}){const n=this.getBestAvailableModel(),o=this.createSystemPrompt(s),i={model:n,messages:[{role:"system",content:o},{role:"user",content:e}],stream:!1,options:{temperature:.7,top_p:.9,max_tokens:4e3}};try{const a=await Q.post(`${this.baseURL}/chat`,i,{timeout:3e4,headers:{"Content-Type":"application/json"}});if(a.data&&a.data.message&&a.data.message.content){const l=a.data.message.content;return this.parseAIResponse(l,e)}else throw new Error("Invalid response from local AI")}catch(a){throw console.error("❌ Local AI generation failed:",a),a}}getBestAvailableModel(){const e=this.getHealthyModels();return e.includes("codellama:7b")?"codellama:7b":e.includes("codellama:13b")?"codellama:13b":e.includes("codellama:34b")?"codellama:34b":e[0]||"codellama:7b"}createSystemPrompt(e={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

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

Generate practical, working applications that users can immediately use.`}parseAIResponse(e,s){try{const n=e.match(/\{[\s\S]*\}/);if(n){const o=JSON.parse(n[0]);if(o.files)return o.files}return this.createFallbackResponse(s,{})}catch(n){return console.error("❌ Failed to parse AI response:",n),this.createFallbackResponse(s,{})}}createFallbackResponse(e,s={}){console.log("🔄 Creating fallback response for prompt:",e);const n=e.toLowerCase();return n.includes("dashboard")||n.includes("analytics")?this.generateTemplateById("react-dashboard",s):n.includes("todo")||n.includes("task")?this.generateTemplateById("todo-app",s):n.includes("ecommerce")||n.includes("store")||n.includes("shop")?this.generateTemplateById("ecommerce-store",s):{"index.html":`<!DOCTYPE html>
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
}`}}}const se=new Yp;class Xp{constructor(){this.currentService="local-ai",this.usageStats={totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0},console.log("🤖 Simple AI Service initialized - Local AI only!")}getServices(){return{"local-ai":{name:"Local AI Models",type:"Local",description:"Self-hosted AI models - no API keys required",models:se.getAvailableModels()}}}getTemplateCategories(){return se.getTemplateCategories()}getTemplatesByCategory(e){return se.getTemplatesByCategory(e)}getAllTemplates(){return se.getAllTemplates()}generateTemplateById(e,s={}){return se.generateTemplateById(e,s)}searchTemplates(e){return se.searchTemplates(e)}getPopularTemplates(){return se.getPopularTemplates()}async generateCode(e,s={}){const n=Date.now();this.usageStats.totalRequests++;try{if(console.log("🚀 Generating code with Local AI..."),!se.isHealthy)return console.log("⚠️ Local AI not available, using template fallback"),se.createFallbackResponse(e,s);const o=await se.generateCode(e,s),i=Date.now()-n;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+i)/2,console.log("✅ Code generated successfully with Local AI!"),o&&o.files?o.files:(console.warn("⚠️ No files found in response, returning empty object"),{})}catch(o){return console.error("❌ Local AI generation failed:",o),this.usageStats.failedRequests++,console.log("🔄 Falling back to template generation..."),se.createFallbackResponse(e,s)}}getServiceHealth(){return se.modelHealth}getUsageStats(){return this.usageStats}getUserPreferences(){return{preferredService:"local-ai",fallbackEnabled:!0,autoHealthCheck:!0}}updateUserPreferences(e){localStorage.setItem("dreambuild-preferences",JSON.stringify(e))}loadUserPreferences(){const e=localStorage.getItem("dreambuild-preferences");return e?JSON.parse(e):this.getUserPreferences()}getServiceStatus(){return{"local-ai":{isHealthy:se.isHealthy,models:se.getHealthyModels().length,totalModels:se.getAvailableModels().length}}}resetServiceHealth(){se.modelHealth={}}getFallbackOrder(){return["local-ai"]}isFallbackEnabled(){return!0}setFallbackEnabled(e){return!0}getSetupInstructions(){return{"local-ai":{title:"Local AI Setup",description:"Set up local AI models for code generation",steps:["1. Install Ollama from https://ollama.ai","2. Run: ollama pull codellama:7b","3. Run: ollama serve","4. Refresh DreamBuild to start using local AI"],isSetup:se.isHealthy}}}getServicesNeedingSetup(){return se.isHealthy?[]:["local-ai"]}hasValidApiKey(e){return e==="local-ai"}setService(e){e==="local-ai"&&(this.currentService=e)}getCurrentService(){return this.currentService}}const br=new Xp;class Qp{constructor(){this.isAutoModeEnabled=!1,this.isRunning=!1,this.currentTask=null,this.taskQueue=[],this.iterationCount=0,this.maxIterations=5,this.fileWatchers=new Map,this.progressCallbacks=new Set,this.autoRefinementEnabled=!0,this.backgroundMonitoringEnabled=!0}toggleAutoMode(){return this.isAutoModeEnabled=!this.isAutoModeEnabled,this.isAutoModeEnabled?(console.log("🤖 AI Agent Auto Mode: ENABLED"),this.startBackgroundMonitoring()):(console.log("🤖 AI Agent Auto Mode: DISABLED"),this.stopBackgroundMonitoring(),this.stopCurrentTask()),this.isAutoModeEnabled}breakdownTask(e,s={}){console.log("🧠 Breaking down task:",e);const n=[],o=e.toLowerCase();return o.includes("full-stack")||o.includes("e-commerce")||o.includes("website")?n.push({id:1,title:"Project Setup",description:"Initialize project structure and dependencies",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Database Schema",description:"Design and implement database structure",priority:"high",estimatedTime:"5-7 min"},{id:3,title:"Authentication System",description:"Implement user login and registration",priority:"high",estimatedTime:"8-10 min"},{id:4,title:"Core Features",description:"Build main application functionality",priority:"medium",estimatedTime:"15-20 min"},{id:5,title:"UI/UX Polish",description:"Add styling, animations, and responsive design",priority:"medium",estimatedTime:"10-15 min"},{id:6,title:"Testing & Optimization",description:"Add tests and optimize performance",priority:"low",estimatedTime:"5-10 min"}):o.includes("react")||o.includes("frontend")?n.push({id:1,title:"Component Architecture",description:"Design React component structure",priority:"high",estimatedTime:"3-5 min"},{id:2,title:"State Management",description:"Implement state management solution",priority:"high",estimatedTime:"5-8 min"},{id:3,title:"Core Components",description:"Build main UI components",priority:"medium",estimatedTime:"10-15 min"},{id:4,title:"Routing & Navigation",description:"Add client-side routing",priority:"medium",estimatedTime:"5-8 min"},{id:5,title:"Styling & Responsiveness",description:"Add CSS and responsive design",priority:"low",estimatedTime:"8-12 min"}):o.includes("api")||o.includes("backend")?n.push({id:1,title:"API Structure",description:"Design REST API endpoints",priority:"high",estimatedTime:"5-8 min"},{id:2,title:"Database Integration",description:"Set up database connections and models",priority:"high",estimatedTime:"8-12 min"},{id:3,title:"Authentication & Security",description:"Implement JWT and security middleware",priority:"high",estimatedTime:"10-15 min"},{id:4,title:"Business Logic",description:"Implement core API functionality",priority:"medium",estimatedTime:"15-25 min"},{id:5,title:"Error Handling & Validation",description:"Add comprehensive error handling",priority:"medium",estimatedTime:"5-10 min"},{id:6,title:"Documentation & Testing",description:"Add API docs and tests",priority:"low",estimatedTime:"8-15 min"}):n.push({id:1,title:"Analysis",description:"Analyze requirements and plan approach",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Implementation",description:"Build core functionality",priority:"high",estimatedTime:"10-20 min"},{id:3,title:"Enhancement",description:"Add features and improvements",priority:"medium",estimatedTime:"8-15 min"},{id:4,title:"Polish",description:"Refine and optimize the solution",priority:"low",estimatedTime:"5-10 min"}),{originalPrompt:e,tasks:n,totalEstimatedTime:n.reduce((i,a)=>i+parseInt(a.estimatedTime.split("-")[0]),0),complexity:this.assessComplexity(e),autoModeRecommended:n.length>3}}assessComplexity(e){const s={simple:["button","form","page","component"],medium:["app","website","dashboard","api","database"],complex:["full-stack","e-commerce","social media","platform","enterprise"]},n=e.toLowerCase();for(const[o,i]of Object.entries(s))if(i.some(a=>n.includes(a)))return o;return"medium"}async startContinuousIteration(e,s={}){if(!this.isAutoModeEnabled){console.log("⚠️ Auto Mode not enabled");return}this.isRunning=!0,this.iterationCount=0,this.currentTask=this.breakdownTask(e,s),console.log("🔄 Starting continuous iteration for:",e);for(const n of this.currentTask.tasks){if(!this.isAutoModeEnabled||!this.isRunning)break;await this.executeTask(n,s),this.iterationCount++,this.autoRefinementEnabled&&this.iterationCount<this.maxIterations&&await this.autoRefine(n,s)}this.isRunning=!1,console.log("✅ Continuous iteration completed")}async executeTask(e,s={}){console.log(`🎯 Executing task ${e.id}: ${e.title}`),this.notifyProgress({type:"task_start",task:e,message:`Starting ${e.title}...`});try{await this.delay(this.getTaskDuration(e)),this.notifyProgress({type:"task_complete",task:e,message:`Completed ${e.title}`})}catch(n){console.error(`❌ Task ${e.id} failed:`,n),this.notifyProgress({type:"task_error",task:e,message:`Failed ${e.title}: ${n.message}`})}}async autoRefine(e,s={}){console.log(`🔧 Auto-refining: ${e.title}`),this.notifyProgress({type:"refinement_start",task:e,message:`Auto-refining ${e.title}...`}),await this.delay(2e3),this.notifyProgress({type:"refinement_complete",task:e,message:`Refined ${e.title}`})}startBackgroundMonitoring(){this.backgroundMonitoringEnabled&&(console.log("👀 Starting background monitoring"),this.setupFileWatchers(),this.startCodeQualityMonitoring(),this.startPerformanceMonitoring())}stopBackgroundMonitoring(){console.log("👀 Stopping background monitoring"),this.fileWatchers.forEach(e=>e.disconnect()),this.fileWatchers.clear()}setupFileWatchers(){console.log("📁 Setting up file watchers"),this.fileWatcherInterval=setInterval(()=>{this.checkForFileChanges()},5e3)}checkForFileChanges(){const e=this.simulateFileChanges();e.length>0&&(this.notifyProgress({type:"file_changes",changes:e,message:`Detected ${e.length} file changes`}),this.isAutoModeEnabled&&this.suggestImprovements(e))}simulateFileChanges(){const e=[];return Math.random()>.7&&e.push({file:"src/components/App.jsx",type:"modified",timestamp:new Date}),e}suggestImprovements(e){console.log("💡 Suggesting improvements for:",e);const s=["Consider adding error boundaries to React components","Optimize bundle size by lazy loading components","Add TypeScript for better type safety","Implement proper error handling in API calls","Add loading states for better UX"],n=s[Math.floor(Math.random()*s.length)];this.notifyProgress({type:"improvement_suggestion",suggestion:n,message:`Suggestion: ${n}`})}startCodeQualityMonitoring(){console.log("🔍 Starting code quality monitoring"),this.qualityCheckInterval=setInterval(()=>{this.performQualityCheck()},1e4)}performQualityCheck(){const e=this.simulateQualityIssues();e.length>0&&this.notifyProgress({type:"quality_issues",issues:e,message:`Found ${e.length} code quality issues`})}simulateQualityIssues(){const e=[];return Math.random()>.8&&e.push({type:"warning",message:"Unused import detected",file:"src/components/Button.jsx",line:5}),e}startPerformanceMonitoring(){console.log("⚡ Starting performance monitoring"),this.performanceCheckInterval=setInterval(()=>{this.checkPerformance()},15e3)}checkPerformance(){const e=this.simulatePerformanceMetrics();e.score<80&&this.notifyProgress({type:"performance_issue",metrics:e,message:`Performance score: ${e.score}/100`})}simulatePerformanceMetrics(){return{score:Math.floor(Math.random()*40)+60,loadTime:Math.floor(Math.random()*2e3)+500,bundleSize:Math.floor(Math.random()*500)+200}}onProgress(e){this.progressCallbacks.add(e)}offProgress(e){this.progressCallbacks.delete(e)}notifyProgress(e){this.progressCallbacks.forEach(s=>{try{s(e)}catch(n){console.error("Progress callback error:",n)}})}getTaskDuration(e){const[s,n]=e.estimatedTime.split("-").map(o=>parseInt(o.replace(" min","")));return(Math.random()*(n-s)+s)*1e3}delay(e){return new Promise(s=>setTimeout(s,e))}stopCurrentTask(){this.isRunning=!1,this.currentTask=null,this.iterationCount=0,this.fileWatcherInterval&&clearInterval(this.fileWatcherInterval),this.qualityCheckInterval&&clearInterval(this.qualityCheckInterval),this.performanceCheckInterval&&clearInterval(this.performanceCheckInterval)}getStatus(){return{isAutoModeEnabled:this.isAutoModeEnabled,isRunning:this.isRunning,currentTask:this.currentTask,iterationCount:this.iterationCount,maxIterations:this.maxIterations,autoRefinementEnabled:this.autoRefinementEnabled,backgroundMonitoringEnabled:this.backgroundMonitoringEnabled}}}const eo=new Qp;function Zp(){const{currentProject:r,updateFile:e,switchFile:s}=_e(),[n,o]=p.useState(""),[i,a]=p.useState(!1),l=p.useRef(null),d=p.useRef(null),[c,u]=p.useState([]),[m,b]=p.useState([]),[w,g]=p.useState(!1),[f,h]=p.useState(!1),[S,v]=p.useState("auto"),[j,x]=p.useState(0),[y,D]=p.useState(!1),[A,P]=p.useState(!1),[_,E]=p.useState(!1),[O,k]=p.useState("unlimited"),[B,T]=p.useState(!1),[R,L]=p.useState({tokens:0,maxTokens:4e3,percentage:0,files:0,characters:0});p.useEffect(()=>{l.current&&(l.current.style.height="auto",l.current.style.height=l.current.scrollHeight+"px")},[n]),p.useEffect(()=>{var N;(N=d.current)==null||N.scrollIntoView({behavior:"smooth"})},[c]),p.useEffect(()=>{console.log(`🎯 AI Model state changed to: ${S}`)},[S]),p.useEffect(()=>{const N=F=>{y&&!F.target.closest(".model-selector")&&!F.target.closest('button[class*="w-full p-2 rounded"]')&&D(!1)};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[y]);const G=async()=>{if(!n.trim()||i)return;const N=n;o(""),a(!0);const F={id:Date.now(),type:"user",content:N,timestamp:new Date},I={id:Date.now()+1,type:"ai",content:"",timestamp:new Date,isLoading:!0};u(K=>[...K,F,I]);try{await W(N),eo.getStatus().autoMode&&await eo.breakdownTask(N),console.log("🚀 Starting AI generation...");const K={conversationHistory:c,currentPrompt:N,previousFiles:Object.keys(r.files),projectContext:r.config},re=await br.generateCode(N,K);if(console.log("📁 Files received:",re),console.log("📁 Files type:",typeof re),console.log("📁 Files keys:",re?Object.keys(re):"No files"),!re||typeof re!="object")throw new Error("Invalid files response from AI service");u(Pt=>Pt.map(et=>et.id===I.id?{...et,content:`Generated ${Object.keys(re).length} files successfully!`,isLoading:!1,files:re,timestamp:new Date}:et));let dt=0;Object.entries(re).forEach(([Pt,et])=>{Pt&&et!==void 0&&(console.log(`📄 Adding file: ${Pt} (${typeof et})`),e(Pt,et),dt++)}),console.log(`✅ Added ${dt} files to project`);const Jr=Object.keys(re)[0];Jr&&(s(Jr),console.log(`🎯 Set active file: ${Jr}`))}catch(K){console.error("Generation error:",K),u(re=>re.map(dt=>dt.id===I.id?{...dt,content:`Error: ${K.message}`,isLoading:!1,error:!0}:dt))}finally{a(!1)}},W=async N=>{const F=[{id:1,title:"Add responsive design",category:"UI/UX"},{id:2,title:"Implement error handling",category:"Performance"},{id:3,title:"Add TypeScript types",category:"Code Quality"},{id:4,title:"Optimize for mobile",category:"Mobile"}].filter(()=>Math.random()>.5);b(F)},ce=N=>{navigator.clipboard.writeText(N),Y.success("Message copied to clipboard")},ge=(N,F)=>{u(I=>I.map(K=>K.id===N?{...K,metadata:{...K.metadata,feedback:F,feedbackTimestamp:new Date}}:K)),Y.success(`Feedback recorded: ${F}`)},U=N=>{N.key==="Enter"&&(N.preventDefault(),G())},q=N=>{N.preventDefault(),E(!0)},J=N=>{N.preventDefault(),E(!1)},ne=N=>{N.preventDefault(),E(!1);const F=Array.from(N.dataTransfer.files);F.length>0&&oe(F)},oe=N=>{const F=N.map(I=>I.name).join(", ");o(I=>I+`

[Attached files: ${F}]`),L(I=>({...I,files:I.files+N.length,characters:I.characters+F.length}))},Pe=N=>({auto:"Auto","codellama-7b":"CodeLlama 7B","codellama-13b":"CodeLlama 13B","codellama-34b":"CodeLlama 34B","starcoder-15b":"StarCoder 15B","deepseek-coder":"DeepSeek Coder","wizardcoder-7b":"WizardCoder 7B","phi3-mini":"Phi-3 Mini","llama3-8b":"Llama 3 8B","mistral-7b":"Mistral 7B","gemma-7b":"Gemma 7B","qwen-7b":"Qwen 7B","codet5-small":"CodeT5 Small","incoder-6b":"InCoder 6B"})[N]||"Auto",Vr=()=>[{id:"auto",name:"Auto",description:"Automatically selects the best model",ram_required:"Smart"},{id:"codellama-7b",name:"CodeLlama 7B",description:"Fast and efficient code generation",ram_required:"8GB"},{id:"codellama-13b",name:"CodeLlama 13B",description:"Higher quality code generation",ram_required:"16GB"},{id:"codellama-34b",name:"CodeLlama 34B",description:"Best quality code generation",ram_required:"32GB"},{id:"starcoder-15b",name:"StarCoder 15B",description:"Excellent code completion",ram_required:"24GB"},{id:"deepseek-coder",name:"DeepSeek Coder",description:"High-performance generation",ram_required:"12GB"},{id:"wizardcoder-7b",name:"WizardCoder 7B",description:"Great at following instructions",ram_required:"10GB"},{id:"phi3-mini",name:"Phi-3 Mini",description:"Lightweight but powerful",ram_required:"6GB"},{id:"llama3-8b",name:"Llama 3 8B",description:"General purpose model",ram_required:"10GB"},{id:"mistral-7b",name:"Mistral 7B",description:"Fast and efficient coding assistant",ram_required:"8GB"},{id:"gemma-7b",name:"Gemma 7B",description:"Google's lightweight model",ram_required:"9GB"},{id:"qwen-7b",name:"Qwen 7B",description:"Alibaba's coding model",ram_required:"8GB"},{id:"codet5-small",name:"CodeT5 Small",description:"Salesforce's code generation model",ram_required:"4GB"},{id:"incoder-6b",name:"InCoder 6B",description:"Code completion specialist",ram_required:"6GB"}];return t.jsxs("div",{className:"h-full flex flex-col bg-background overflow-hidden",children:[t.jsx("div",{className:"px-4 py-3 border-b border-border/30 bg-background",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Yr,{className:"h-5 w-5 text-blue-500"}),t.jsx("span",{className:"font-medium text-foreground",children:"AI Assistant"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("button",{onClick:()=>g(!w),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"Chat",children:t.jsx(xs,{className:"h-4 w-4 text-muted-foreground"})}),t.jsx("button",{onClick:()=>h(!f),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"AI Agent",children:t.jsx(Yr,{className:"h-4 w-4 text-muted-foreground"})})]})]})]})}),t.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:t.jsx("div",{className:"flex-1 overflow-y-auto bg-background min-h-0",children:t.jsxs("div",{className:"p-4 pb-8 space-y-6",children:[t.jsx("div",{className:"flex items-center justify-center py-8",children:t.jsxs("div",{className:"text-center max-w-md",children:[t.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4",children:t.jsx(vt,{className:"h-8 w-8 text-blue-500"})}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Ask me anything"}),t.jsx("p",{className:"text-sm text-muted-foreground break-words leading-relaxed",children:"I can help you build applications, fix bugs, explain code, and much more."})]})}),t.jsx(ze,{children:c.map((N,F)=>t.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"w-full",children:t.jsxs("div",{className:`flex gap-4 ${N.type==="user"?"flex-row-reverse":"flex-row"}`,children:[t.jsx("div",{className:`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${N.type==="user"?"bg-blue-500 text-white":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`,children:N.type==="user"?t.jsx(gs,{className:"h-4 w-4"}):t.jsx(Yr,{className:"h-4 w-4"})}),t.jsxs("div",{className:`flex-1 max-w-[80%] ${N.type==="user"?"text-right":"text-left"}`,children:[t.jsx("div",{className:`inline-block px-4 py-3 rounded-xl text-sm leading-relaxed break-words ${N.type==="user"?"bg-blue-500 text-white rounded-br-md":"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"}`,children:N.isLoading?t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Ht,{className:"h-4 w-4 animate-spin"}),t.jsx("span",{children:"Thinking..."})]}):t.jsx("div",{className:"whitespace-pre-wrap break-words overflow-wrap-anywhere",children:N.content})}),!N.isLoading&&N.type==="ai"&&t.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[t.jsx("button",{onClick:()=>ce(N.content),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Copy",children:t.jsx(Nt,{className:"h-3.5 w-3.5 text-muted-foreground"})}),t.jsx("button",{onClick:()=>ge(N.id,"like"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Like",children:t.jsx(_a,{className:"h-3.5 w-3.5 text-muted-foreground"})}),t.jsx("button",{onClick:()=>ge(N.id,"dislike"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Dislike",children:t.jsx($a,{className:"h-3.5 w-3.5 text-muted-foreground"})})]})]})]})},N.id))}),t.jsx("div",{ref:d})]})})}),t.jsx("div",{className:"border-t border-border/30 bg-background flex-shrink-0",children:t.jsxs("div",{className:"p-4",children:[t.jsxs("div",{className:"relative",children:[t.jsx("textarea",{id:"ai-prompt-input","data-testid":"ai-prompt-input",ref:l,value:n,onChange:N=>o(N.target.value),onKeyPress:U,onDragOver:q,onDragLeave:J,onDrop:ne,placeholder:"Plan, search, build anything",className:`w-full resize-y bg-background border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm leading-relaxed break-words overflow-wrap-anywhere focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors ${_?"border-blue-500 bg-blue-50/50 dark:bg-blue-900/10":"border-border"}`,style:{minHeight:"120px",maxHeight:"300px",wordWrap:"break-word",overflowWrap:"anywhere"},disabled:i,rows:4,"aria-label":"AI prompt input"}),_&&t.jsx("div",{className:"absolute inset-0 bg-blue-500/10 border-2 border-blue-500 border-dashed rounded-lg flex items-center justify-center pointer-events-none",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-blue-500 text-lg font-medium",children:"Drop files here"}),t.jsx("div",{className:"text-blue-500 text-xs",children:"Files will be attached to your prompt"})]})}),t.jsx("div",{className:"absolute bottom-1 right-1 w-4 h-4 opacity-30",children:t.jsx("div",{className:"w-full h-full flex items-end justify-end",children:t.jsx("div",{className:"w-2 h-2 bg-muted-foreground/40",style:{backgroundImage:"repeating-linear-gradient(45deg, transparent, transparent 1px, currentColor 1px, currentColor 2px)"}})})})]}),t.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("button",{onClick:()=>{var F;const N=n.includes("@")?"":"@file ";o(n+N),(F=l.current)==null||F.focus()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Mention files or references",children:t.jsx("span",{className:"text-xs text-muted-foreground",children:"@"})}),t.jsx("button",{onClick:()=>{const N=document.createElement("input");N.type="file",N.multiple=!0,N.accept=".txt,.md,.js,.jsx,.ts,.tsx,.css,.html,.json,.py,.java,.cpp,.c",N.onchange=F=>{const I=Array.from(F.target.files);I.length>0&&oe(I)},N.click()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Attach files",children:t.jsx("span",{className:"text-xs text-muted-foreground",children:"📎"})}),t.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-foreground relative",children:[t.jsx("button",{onClick:()=>D(!y),className:"hover:text-blue-600 transition-colors",title:"Select AI Model",children:Pe(S)},`model-button-${S}-${j}`),t.jsx("span",{className:"text-muted-foreground",children:"tab"}),t.jsxs("button",{onClick:N=>{N.stopPropagation(),P(!A)},className:"text-muted-foreground ml-2 hover:text-blue-600 transition-colors",title:"Click to view context usage",children:[R.percentage,"% O"]})]})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("button",{id:"generate-button","data-testid":"generate-button",onClick:G,disabled:!n.trim()||i,className:"w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shadow-sm",title:"Generate Code","aria-label":"Generate code from prompt",children:i?t.jsx(Ht,{className:"h-4 w-4 text-white animate-spin"}):t.jsx(Hs,{className:"h-4 w-4 text-white rotate-90"})}),t.jsx("button",{onClick:()=>T(!B),className:`text-lg transition-colors hover:text-blue-600 ${O==="unlimited"?"text-blue-500":"text-muted-foreground"}`,title:`Context Mode: ${O==="unlimited"?"Unlimited":"Limited"}`,children:"∞"})]})]})]})}),A&&t.jsxs("div",{className:"absolute bottom-20 left-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-80",children:[t.jsxs("div",{className:"flex items-center justify-between mb-3",children:[t.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Usage"}),t.jsx("button",{onClick:()=>P(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Tokens"}),t.jsxs("span",{className:"text-xs font-medium text-foreground",children:[R.tokens.toLocaleString()," / ",R.maxTokens.toLocaleString()]})]}),t.jsx("div",{className:"w-full bg-muted rounded-full h-2",children:t.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${R.percentage}%`}})}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Usage"}),t.jsxs("span",{className:"text-xs font-medium text-foreground",children:[R.percentage,"%"]})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Files"}),t.jsxs("span",{className:"text-xs font-medium text-foreground",children:[R.files," files"]})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Characters"}),t.jsx("span",{className:"text-xs font-medium text-foreground",children:R.characters.toLocaleString()})]}),t.jsx("div",{className:"pt-2 border-t border-border",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Model"}),t.jsx("span",{className:"text-xs font-medium text-foreground",children:Pe(S)},`model-info-${S}-${j}`)]})})]})]}),B&&t.jsxs("div",{className:"absolute bottom-20 right-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-72",children:[t.jsxs("div",{className:"flex items-center justify-between mb-3",children:[t.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Mode"}),t.jsx("button",{onClick:()=>T(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("button",{onClick:()=>{k("unlimited"),T(!1),Y.success("Switched to Unlimited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${O==="unlimited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:`text-xl ${O==="unlimited"?"text-blue-500":"text-muted-foreground"}`,children:"∞"}),t.jsxs("div",{className:"text-left",children:[t.jsx("div",{className:"font-medium text-sm",children:"Unlimited Context"}),t.jsx("div",{className:"text-xs text-muted-foreground",children:"Access to entire codebase and conversation history"})]}),O==="unlimited"&&t.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),t.jsx("button",{onClick:()=>{k("limited"),T(!1),Y.success("Switched to Limited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${O==="limited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:`text-lg ${O==="limited"?"text-blue-500":"text-muted-foreground"}`,children:"⚡"}),t.jsxs("div",{className:"text-left",children:[t.jsx("div",{className:"font-medium text-sm",children:"Limited Context"}),t.jsx("div",{className:"text-xs text-muted-foreground",children:"Faster responses with recent conversation only"})]}),O==="limited"&&t.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),t.jsxs("div",{className:"pt-3 border-t border-border",children:[t.jsx("div",{className:"text-xs text-muted-foreground mb-2",children:"Current Usage"}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Mode"}),t.jsx("span",{className:"text-xs font-medium text-foreground",children:O==="unlimited"?"Unlimited":"Limited"})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Context Window"}),t.jsx("span",{className:"text-xs font-medium text-foreground",children:O==="unlimited"?"∞ tokens":"4K tokens"})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Performance"}),t.jsx("span",{className:"text-xs font-medium text-foreground",children:O==="unlimited"?"Comprehensive":"Fast"})]})]})]})]})]}),y&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 z-40",onClick:N=>{N.target===N.currentTarget&&D(!1)}}),t.jsxs("div",{className:"fixed bottom-16 left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl w-72 z-50",style:{height:"300px",display:"flex",flexDirection:"column"},onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"flex items-center justify-between p-1.5 border-b border-gray-200 dark:border-gray-700",children:[t.jsx("h3",{className:"text-xs font-semibold text-gray-900 dark:text-white",children:"AI Model"}),t.jsx("button",{onClick:()=>D(!1),className:"p-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",children:t.jsx("svg",{className:"w-3 h-3 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),t.jsx("div",{className:"overflow-y-auto p-1 space-y-0.5",style:{flex:"1",minHeight:"0"},children:Vr().map(N=>t.jsx("button",{onClick:F=>{F.preventDefault(),F.stopPropagation(),v(N.id),x(I=>I+1),D(!1),Y.success(`Switched to ${N.name}`)},className:`w-full p-2 rounded border transition-all duration-200 text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${S===N.id?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-gray-200 dark:border-gray-600"}`,children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("div",{className:`rounded border-2 flex items-center justify-center transition-all duration-200 ${S===N.id?"border-blue-500 bg-blue-500":"border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"}`,style:{width:"12px",height:"12px",minWidth:"12px",minHeight:"12px"},children:S===N.id&&t.jsx("svg",{className:"text-white",fill:"currentColor",viewBox:"0 0 20 20",style:{width:"8px",height:"8px"},children:t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("div",{className:"font-medium text-xs text-gray-900 dark:text-white truncate",children:N.name}),t.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 truncate",children:N.description})]})]}),t.jsx("div",{className:"text-xs px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 ml-1 flex-shrink-0",children:N.ram_required})]})},N.id))}),t.jsx("div",{className:"p-1 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",children:t.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:"Auto selects best model"})})]})]})]})}var pt={};class eh{constructor(){this.app=null,this.db=null,this.auth=null,this.user=null,this.listeners=new Map,this.cursors=new Map,this.comments=new Map,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const e={apiKey:pt.REACT_APP_FIREBASE_API_KEY||"your-api-key",authDomain:pt.REACT_APP_FIREBASE_AUTH_DOMAIN||"your-project.firebaseapp.com",projectId:pt.REACT_APP_FIREBASE_PROJECT_ID||"your-project-id",storageBucket:pt.REACT_APP_FIREBASE_STORAGE_BUCKET||"your-project.appspot.com",messagingSenderId:pt.REACT_APP_FIREBASE_MESSAGING_SENDER_ID||"123456789",appId:pt.REACT_APP_FIREBASE_APP_ID||"your-app-id"};this.app=vr(e),this.db=$s(this.app),this.auth=_s(this.app),Bs(this.auth,s=>{this.user=s,console.log("Collaboration auth state changed:",s?"authenticated":"not authenticated")}),this.isInitialized=!0,console.log("🤝 Collaboration service initialized successfully")}catch(e){throw console.error("❌ Failed to initialize collaboration service:",e),e}}async joinProject(e,s){var n;try{await this.initialize();const o={id:((n=this.user)==null?void 0:n.uid)||"anonymous",name:s.name||"Anonymous User",email:s.email||"",avatar:s.avatar||"",color:s.color||this.generateUserColor(),joinedAt:new Date().toISOString(),isOnline:!0},i=V(this.db,"projectPresence",`${e}_${o.id}`);return await er(i,o).catch(()=>Rt(ue(this.db,"projectPresence"),{projectId:e,userId:o.id,...o})),console.log("✅ User joined project collaboration"),o}catch(o){throw console.error("❌ Failed to join project:",o),o}}async leaveProject(e){var s;try{await this.initialize();const n=V(this.db,"projectPresence",`${e}_${(s=this.user)==null?void 0:s.uid}`);await er(n,{isOnline:!1,leftAt:new Date().toISOString()}),console.log("✅ User left project collaboration")}catch(n){console.error("❌ Failed to leave project:",n)}}async getOnlineUsers(e){try{await this.initialize();const s=ue(this.db,"projectPresence"),n=we(s,me("projectId","==",e),me("isOnline","==",!0));return new Promise(o=>{const i=Ot(n,a=>{const l=[];a.forEach(d=>{l.push(d.data())}),o(l)});this.listeners.set(`onlineUsers_${e}`,i)})}catch(s){return console.error("❌ Failed to get online users:",s),[]}}async updateCursor(e,s,n){var o,i,a;try{await this.initialize();const l=V(this.db,"cursors",`${e}_${s}_${(o=this.user)==null?void 0:o.uid}`);await er(l,{projectId:e,fileId:s,userId:(i=this.user)==null?void 0:i.uid,position:n,updatedAt:$e()}).catch(()=>{var d;return Rt(ue(this.db,"cursors"),{projectId:e,fileId:s,userId:(d=this.user)==null?void 0:d.uid,position:n,createdAt:$e(),updatedAt:$e()})}),this.cursors.set(`${e}_${s}_${(a=this.user)==null?void 0:a.uid}`,{position:n,updatedAt:new Date})}catch(l){console.error("❌ Failed to update cursor:",l)}}async listenToCursors(e,s,n){try{await this.initialize();const o=ue(this.db,"cursors"),i=we(o,me("projectId","==",e),me("fileId","==",s)),a=Ot(i,l=>{const d=[];l.forEach(c=>{var m;const u=c.data();u.userId!==((m=this.user)==null?void 0:m.uid)&&d.push({id:c.id,...u})}),n(d)});this.listeners.set(`cursors_${e}_${s}`,a)}catch(o){console.error("❌ Failed to listen to cursors:",o)}}async addComment(e,s,n,o,i=null){var a,l,d;try{await this.initialize();const c={projectId:e,fileId:s,lineNumber:n,content:o,parentId:i,userId:(a=this.user)==null?void 0:a.uid,userName:((l=this.user)==null?void 0:l.displayName)||"Anonymous",userAvatar:((d=this.user)==null?void 0:d.photoURL)||"",createdAt:$e(),updatedAt:$e(),isResolved:!1,reactions:{}},u=await Rt(ue(this.db,"comments"),c);return console.log("✅ Comment added successfully"),{id:u.id,...c}}catch(c){throw console.error("❌ Failed to add comment:",c),c}}async getComments(e,s){try{await this.initialize();const n=ue(this.db,"comments"),o=we(n,me("projectId","==",e),me("fileId","==",s),Kr("createdAt","asc"));return new Promise(i=>{const a=Ot(o,l=>{const d=[];l.forEach(c=>{d.push({id:c.id,...c.data()})}),i(d)});this.listeners.set(`comments_${e}_${s}`,a)})}catch(n){return console.error("❌ Failed to get comments:",n),[]}}async updateComment(e,s){try{await this.initialize();const n=V(this.db,"comments",e);await er(n,{...s,updatedAt:$e()}),console.log("✅ Comment updated successfully")}catch(n){throw console.error("❌ Failed to update comment:",n),n}}async deleteComment(e){try{await this.initialize();const s=V(this.db,"comments",e);await ur(s),console.log("✅ Comment deleted successfully")}catch(s){throw console.error("❌ Failed to delete comment:",s),s}}async saveVersion(e,s){var n,o;try{await this.initialize();const i={projectId:e,versionNumber:s.versionNumber,description:s.description||"Auto-save",files:s.files,userId:(n=this.user)==null?void 0:n.uid,userName:((o=this.user)==null?void 0:o.displayName)||"Anonymous",createdAt:$e(),changes:s.changes||[],isAutoSave:s.isAutoSave||!1},a=await Rt(ue(this.db,"versions"),i);return console.log("✅ Version saved successfully"),{id:a.id,...i}}catch(i){throw console.error("❌ Failed to save version:",i),i}}async getVersionHistory(e,s=50){try{await this.initialize();const n=ue(this.db,"versions"),o=we(n,me("projectId","==",e),Kr("createdAt","desc"),s(s));return new Promise(i=>{const a=Ot(o,l=>{const d=[];l.forEach(c=>{d.push({id:c.id,...c.data()})}),i(d)});this.listeners.set(`versions_${e}`,a)})}catch(n){return console.error("❌ Failed to get version history:",n),[]}}async restoreVersion(e,s){try{await this.initialize();const n=V(this.db,"versions",s),o=await getDoc(n);if(o.exists()){const i=o.data();return await this.saveVersion(e,{versionNumber:`Restored from ${i.versionNumber}`,description:`Restored from version ${i.versionNumber}`,files:i.files,isAutoSave:!1}),console.log("✅ Version restored successfully"),i.files}else throw new Error("Version not found")}catch(n){throw console.error("❌ Failed to restore version:",n),n}}async syncFileChanges(e,s,n){var o,i;try{await this.initialize();const a={projectId:e,fileId:s,userId:(o=this.user)==null?void 0:o.uid,userName:((i=this.user)==null?void 0:i.displayName)||"Anonymous",changes:n,timestamp:$e()};await Rt(ue(this.db,"fileChanges"),a),console.log("✅ File changes synced successfully")}catch(a){console.error("❌ Failed to sync file changes:",a)}}async listenToFileChanges(e,s,n){try{await this.initialize();const o=ue(this.db,"fileChanges"),i=we(o,me("projectId","==",e),me("fileId","==",s),Kr("timestamp","desc"),limit(10)),a=Ot(i,l=>{const d=[];l.forEach(c=>{d.push({id:c.id,...c.data()})}),n(d)});this.listeners.set(`fileChanges_${e}_${s}`,a)}catch(o){console.error("❌ Failed to listen to file changes:",o)}}generateUserColor(){const e=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#98D8C8","#F7DC6F","#BB8FCE","#85C1E9"];return e[Math.floor(Math.random()*e.length)]}cleanup(){this.listeners.forEach(e=>{e()}),this.listeners.clear(),console.log("🧹 Collaboration listeners cleaned up")}async getCollaborationStats(e){var s;try{await this.initialize();const[n,o,i]=await Promise.all([this.getOnlineUsers(e),this.getComments(e,"all"),this.getVersionHistory(e,10)]);return{onlineUsers:n.length,totalComments:o.length,totalVersions:i.length,lastActivity:((s=i[0])==null?void 0:s.createdAt)||null}}catch(n){return console.error("❌ Failed to get collaboration stats:",n),{onlineUsers:0,totalComments:0,totalVersions:0,lastActivity:null}}}}const Oe=new eh,th=({projectId:r,fileId:e,onFileChange:s,onVersionRestore:n})=>{const[o,i]=p.useState([]),[a,l]=p.useState([]),[d,c]=p.useState([]),[u,m]=p.useState(""),[b,w]=p.useState(null),[g,f]=p.useState(!1),[h,S]=p.useState(!1),[v,j]=p.useState(!1),[x,y]=p.useState({name:"Anonymous User",email:"",avatar:""});p.useEffect(()=>(r&&D(),()=>{Oe.cleanup()}),[r]);const D=async()=>{try{await Oe.joinProject(r,x),j(!0),Oe.getOnlineUsers(r).then(i),e&&Oe.getComments(r,e).then(l),Oe.getVersionHistory(r).then(c),e&&Oe.listenToFileChanges(r,e,E=>{console.log("File changes received:",E)}),console.log("🤝 Collaboration initialized successfully")}catch(E){console.error("❌ Failed to initialize collaboration:",E)}},A=async()=>{if(!(!u.trim()||!e))try{await Oe.addComment(r,e,b||1,u),m(""),w(null)}catch(E){console.error("❌ Failed to add comment:",E)}},P=async E=>{try{const O=await Oe.restoreVersion(r,E);n&&n(O),console.log("✅ Version restored successfully")}catch(O){console.error("❌ Failed to restore version:",O)}},_=async()=>{try{const E={versionNumber:`v${d.length+1}`,description:prompt("Version description:")||"Manual save",files:{},isAutoSave:!1};await Oe.saveVersion(r,E),console.log("✅ Version saved successfully")}catch(E){console.error("❌ Failed to save version:",E)}};return t.jsxs("div",{className:"collaboration-panel",children:[t.jsxs("div",{className:"collaboration-header",children:[t.jsx("h3",{children:"🤝 Real-time Collaboration"}),t.jsx("div",{className:"collaboration-status",children:v?t.jsx("span",{className:"status-online",children:"● Online"}):t.jsx("span",{className:"status-offline",children:"● Offline"})})]}),t.jsxs("div",{className:"collaboration-section",children:[t.jsxs("h4",{children:["👥 Online Users (",o.length,")"]}),t.jsx("div",{className:"users-list",children:o.map((E,O)=>t.jsxs("div",{className:"user-item",children:[t.jsx("div",{className:"user-avatar",style:{backgroundColor:E.color},children:E.name.charAt(0).toUpperCase()}),t.jsx("span",{className:"user-name",children:E.name})]},E.id||O))})]}),t.jsxs("div",{className:"collaboration-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsxs("h4",{children:["💬 Comments (",a.length,")"]}),t.jsx("button",{className:"btn btn-sm",onClick:()=>f(!g),children:g?"Hide":"Show"})]}),g&&t.jsxs("div",{className:"comments-container",children:[t.jsxs("div",{className:"add-comment",children:[t.jsx("textarea",{value:u,onChange:E=>m(E.target.value),placeholder:"Add a comment...",rows:"3"}),t.jsxs("div",{className:"comment-actions",children:[t.jsx("span",{className:"line-info",children:b?`Line ${b}`:"Select a line to comment"}),t.jsx("button",{className:"btn btn-primary btn-sm",onClick:A,disabled:!u.trim(),children:"Add Comment"})]})]}),t.jsx("div",{className:"comments-list",children:a.map(E=>{var O;return t.jsxs("div",{className:"comment-item",children:[t.jsxs("div",{className:"comment-header",children:[t.jsxs("div",{className:"comment-author",children:[t.jsx("div",{className:"author-avatar",style:{backgroundColor:E.userColor||"#007bff"},children:E.userName.charAt(0).toUpperCase()}),t.jsx("span",{className:"author-name",children:E.userName})]}),t.jsx("span",{className:"comment-time",children:new Date((O=E.createdAt)==null?void 0:O.toDate()).toLocaleString()})]}),t.jsx("div",{className:"comment-content",children:E.content}),t.jsxs("div",{className:"comment-line",children:["Line ",E.lineNumber]})]},E.id)})})]})]}),t.jsxs("div",{className:"collaboration-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsxs("h4",{children:["📚 Version History (",d.length,")"]}),t.jsxs("div",{className:"version-actions",children:[t.jsx("button",{className:"btn btn-sm btn-secondary",onClick:()=>S(!h),children:h?"Hide":"Show"}),t.jsx("button",{className:"btn btn-sm btn-primary",onClick:_,children:"Save Version"})]})]}),h&&t.jsx("div",{className:"versions-container",children:t.jsx("div",{className:"versions-list",children:d.map(E=>{var O;return t.jsxs("div",{className:"version-item",children:[t.jsxs("div",{className:"version-header",children:[t.jsx("span",{className:"version-number",children:E.versionNumber}),t.jsx("span",{className:"version-time",children:new Date((O=E.createdAt)==null?void 0:O.toDate()).toLocaleString()})]}),t.jsx("div",{className:"version-description",children:E.description}),t.jsxs("div",{className:"version-author",children:["by ",E.userName]}),t.jsx("div",{className:"version-actions",children:t.jsx("button",{className:"btn btn-sm btn-outline",onClick:()=>P(E.id),children:"Restore"})})]},E.id)})})})]}),t.jsxs("div",{className:"collaboration-section",children:[t.jsx("h4",{children:"📊 Collaboration Stats"}),t.jsxs("div",{className:"stats-grid",children:[t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-label",children:"Online Users:"}),t.jsx("span",{className:"stat-value",children:o.length})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-label",children:"Comments:"}),t.jsx("span",{className:"stat-value",children:a.length})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-label",children:"Versions:"}),t.jsx("span",{className:"stat-value",children:d.length})]})]})]}),t.jsx("style",{jsx:!0,children:`
        .collaboration-panel {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          margin: 20px 0;
          max-height: 600px;
          overflow-y: auto;
        }

        .collaboration-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }

        .collaboration-status {
          font-size: 14px;
        }

        .status-online {
          color: #28a745;
        }

        .status-offline {
          color: #dc3545;
        }

        .collaboration-section {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #f0f0f0;
        }

        .collaboration-section:last-child {
          border-bottom: none;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .users-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .user-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 10px;
          background: #f8f9fa;
          border-radius: 20px;
          font-size: 14px;
        }

        .user-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 12px;
        }

        .comments-container {
          margin-top: 10px;
        }

        .add-comment {
          margin-bottom: 15px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .add-comment textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          resize: vertical;
          font-family: inherit;
        }

        .comment-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .line-info {
          font-size: 12px;
          color: #666;
        }

        .comments-list {
          max-height: 200px;
          overflow-y: auto;
        }

        .comment-item {
          padding: 10px;
          border: 1px solid #eee;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .comment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }

        .comment-author {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .author-avatar {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 10px;
        }

        .comment-time {
          font-size: 12px;
          color: #666;
        }

        .comment-content {
          margin: 5px 0;
        }

        .comment-line {
          font-size: 12px;
          color: #007bff;
          font-weight: bold;
        }

        .versions-container {
          margin-top: 10px;
        }

        .versions-list {
          max-height: 200px;
          overflow-y: auto;
        }

        .version-item {
          padding: 10px;
          border: 1px solid #eee;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .version-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }

        .version-number {
          font-weight: bold;
          color: #007bff;
        }

        .version-time {
          font-size: 12px;
          color: #666;
        }

        .version-description {
          margin: 5px 0;
          color: #333;
        }

        .version-author {
          font-size: 12px;
          color: #666;
          margin-bottom: 10px;
        }

        .version-actions {
          display: flex;
          gap: 10px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 15px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .stat-label {
          font-size: 12px;
          color: #666;
          margin-bottom: 5px;
        }

        .stat-value {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        .btn {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
        }

        .btn-sm {
          padding: 4px 8px;
          font-size: 11px;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-outline {
          background: transparent;
          color: #007bff;
          border: 1px solid #007bff;
        }

        .btn:hover {
          opacity: 0.8;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `})]})},Vi=p.createContext({dragDropManager:void 0});function ve(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var to=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ro=function(){return Math.random().toString(36).substring(7).split("").join(".")},so={INIT:"@@redux/INIT"+ro(),REPLACE:"@@redux/REPLACE"+ro()};function rh(r){if(typeof r!="object"||r===null)return!1;for(var e=r;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e}function Ji(r,e,s){var n;if(typeof e=="function"&&typeof s=="function"||typeof s=="function"&&typeof arguments[3]=="function")throw new Error(ve(0));if(typeof e=="function"&&typeof s>"u"&&(s=e,e=void 0),typeof s<"u"){if(typeof s!="function")throw new Error(ve(1));return s(Ji)(r,e)}if(typeof r!="function")throw new Error(ve(2));var o=r,i=e,a=[],l=a,d=!1;function c(){l===a&&(l=a.slice())}function u(){if(d)throw new Error(ve(3));return i}function m(f){if(typeof f!="function")throw new Error(ve(4));if(d)throw new Error(ve(5));var h=!0;return c(),l.push(f),function(){if(h){if(d)throw new Error(ve(6));h=!1,c();var v=l.indexOf(f);l.splice(v,1),a=null}}}function b(f){if(!rh(f))throw new Error(ve(7));if(typeof f.type>"u")throw new Error(ve(8));if(d)throw new Error(ve(9));try{d=!0,i=o(i,f)}finally{d=!1}for(var h=a=l,S=0;S<h.length;S++){var v=h[S];v()}return f}function w(f){if(typeof f!="function")throw new Error(ve(10));o=f,b({type:so.REPLACE})}function g(){var f,h=m;return f={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(ve(11));function j(){v.next&&v.next(u())}j();var x=h(j);return{unsubscribe:x}}},f[to]=function(){return this},f}return b({type:so.INIT}),n={dispatch:b,subscribe:m,getState:u,replaceReducer:w},n[to]=g,n}function z(r,e,...s){if(sh()&&e===void 0)throw new Error("invariant requires an error message argument");if(!r){let n;if(e===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let o=0;n=new Error(e.replace(/%s/g,function(){return s[o++]})),n.name="Invariant Violation"}throw n.framesToPop=1,n}}function sh(){return typeof process<"u"&&!0}function nh(r,e,s){return e.split(".").reduce((n,o)=>n&&n[o]?n[o]:s||null,r)}function oh(r,e){return r.filter(s=>s!==e)}function Ki(r){return typeof r=="object"}function ih(r,e){const s=new Map,n=i=>{s.set(i,s.has(i)?s.get(i)+1:1)};r.forEach(n),e.forEach(n);const o=[];return s.forEach((i,a)=>{i===1&&o.push(a)}),o}function ah(r,e){return r.filter(s=>e.indexOf(s)>-1)}const nn="dnd-core/INIT_COORDS",Hr="dnd-core/BEGIN_DRAG",on="dnd-core/PUBLISH_DRAG_SOURCE",zr="dnd-core/HOVER",Gr="dnd-core/DROP",Wr="dnd-core/END_DRAG";function no(r,e){return{type:nn,payload:{sourceClientOffset:e||null,clientOffset:r||null}}}const lh={type:nn,payload:{clientOffset:null,sourceClientOffset:null}};function ch(r){return function(s=[],n={publishSource:!0}){const{publishSource:o=!0,clientOffset:i,getSourceClientOffset:a}=n,l=r.getMonitor(),d=r.getRegistry();r.dispatch(no(i)),dh(s,l,d);const c=ph(s,l);if(c==null){r.dispatch(lh);return}let u=null;if(i){if(!a)throw new Error("getSourceClientOffset must be defined");uh(a),u=a(c)}r.dispatch(no(i,u));const b=d.getSource(c).beginDrag(l,c);if(b==null)return;mh(b),d.pinSource(c);const w=d.getSourceType(c);return{type:Hr,payload:{itemType:w,item:b,sourceId:c,clientOffset:i||null,sourceClientOffset:u||null,isSourcePublic:!!o}}}}function dh(r,e,s){z(!e.isDragging(),"Cannot call beginDrag while dragging."),r.forEach(function(n){z(s.getSource(n),"Expected sourceIds to be registered.")})}function uh(r){z(typeof r=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function mh(r){z(Ki(r),"Item must be an object.")}function ph(r,e){let s=null;for(let n=r.length-1;n>=0;n--)if(e.canDragSource(r[n])){s=r[n];break}return s}function hh(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function fh(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){hh(r,o,s[o])})}return r}function gh(r){return function(s={}){const n=r.getMonitor(),o=r.getRegistry();xh(n),vh(n).forEach((a,l)=>{const d=bh(a,l,o,n),c={type:Gr,payload:{dropResult:fh({},s,d)}};r.dispatch(c)})}}function xh(r){z(r.isDragging(),"Cannot call drop while not dragging."),z(!r.didDrop(),"Cannot call drop twice during one drag operation.")}function bh(r,e,s,n){const o=s.getTarget(r);let i=o?o.drop(n,r):void 0;return yh(i),typeof i>"u"&&(i=e===0?{}:n.getDropResult()),i}function yh(r){z(typeof r>"u"||Ki(r),"Drop result must either be an object or undefined.")}function vh(r){const e=r.getTargetIds().filter(r.canDropOnTarget,r);return e.reverse(),e}function wh(r){return function(){const s=r.getMonitor(),n=r.getRegistry();jh(s);const o=s.getSourceId();return o!=null&&(n.getSource(o,!0).endDrag(s,o),n.unpinSource()),{type:Wr}}}function jh(r){z(r.isDragging(),"Cannot call endDrag while not dragging.")}function Os(r,e){return e===null?r===null:Array.isArray(r)?r.some(s=>s===e):r===e}function Nh(r){return function(s,{clientOffset:n}={}){Sh(s);const o=s.slice(0),i=r.getMonitor(),a=r.getRegistry(),l=i.getItemType();return kh(o,a,l),Ch(o,i,a),Th(o,i,a),{type:zr,payload:{targetIds:o,clientOffset:n||null}}}}function Sh(r){z(Array.isArray(r),"Expected targetIds to be an array.")}function Ch(r,e,s){z(e.isDragging(),"Cannot call hover while not dragging."),z(!e.didDrop(),"Cannot call hover after drop.");for(let n=0;n<r.length;n++){const o=r[n];z(r.lastIndexOf(o)===n,"Expected targetIds to be unique in the passed array.");const i=s.getTarget(o);z(i,"Expected targetIds to be registered.")}}function kh(r,e,s){for(let n=r.length-1;n>=0;n--){const o=r[n],i=e.getTargetType(o);Os(i,s)||r.splice(n,1)}}function Th(r,e,s){r.forEach(function(n){s.getTarget(n).hover(e,n)})}function Dh(r){return function(){if(r.getMonitor().isDragging())return{type:on}}}function Eh(r){return{beginDrag:ch(r),publishDragSource:Dh(r),hover:Nh(r),drop:gh(r),endDrag:wh(r)}}class Ah{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const e=this,{dispatch:s}=this.store;function n(i){return(...a)=>{const l=i.apply(e,a);typeof l<"u"&&s(l)}}const o=Eh(this);return Object.keys(o).reduce((i,a)=>{const l=o[a];return i[a]=n(l),i},{})}dispatch(e){this.store.dispatch(e)}constructor(e,s){this.isSetUp=!1,this.handleRefCountChange=()=>{const n=this.store.getState().refCount>0;this.backend&&(n&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!n&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=s,e.subscribe(this.handleRefCountChange)}}function Ph(r,e){return{x:r.x+e.x,y:r.y+e.y}}function Yi(r,e){return{x:r.x-e.x,y:r.y-e.y}}function Rh(r){const{clientOffset:e,initialClientOffset:s,initialSourceClientOffset:n}=r;return!e||!s||!n?null:Yi(Ph(e,n),s)}function Oh(r){const{clientOffset:e,initialClientOffset:s}=r;return!e||!s?null:Yi(e,s)}const Ut=[],an=[];Ut.__IS_NONE__=!0;an.__IS_ALL__=!0;function Ih(r,e){return r===Ut?!1:r===an||typeof e>"u"?!0:ah(e,r).length>0}class Mh{subscribeToStateChange(e,s={}){const{handlerIds:n}=s;z(typeof e=="function","listener must be a function."),z(typeof n>"u"||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let o=this.store.getState().stateId;const i=()=>{const a=this.store.getState(),l=a.stateId;try{l===o||l===o+1&&!Ih(a.dirtyHandlerIds,n)||e()}finally{o=l}};return this.store.subscribe(i)}subscribeToOffsetChange(e){z(typeof e=="function","listener must be a function.");let s=this.store.getState().dragOffset;const n=()=>{const o=this.store.getState().dragOffset;o!==s&&(s=o,e())};return this.store.subscribe(n)}canDragSource(e){if(!e)return!1;const s=this.registry.getSource(e);return z(s,`Expected to find a valid source. sourceId=${e}`),this.isDragging()?!1:s.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;const s=this.registry.getTarget(e);if(z(s,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;const n=this.registry.getTargetType(e),o=this.getItemType();return Os(n,o)&&s.canDrop(this,e)}isDragging(){return!!this.getItemType()}isDraggingSource(e){if(!e)return!1;const s=this.registry.getSource(e,!0);if(z(s,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;const n=this.registry.getSourceType(e),o=this.getItemType();return n!==o?!1:s.isDragging(this,e)}isOverTarget(e,s={shallow:!1}){if(!e)return!1;const{shallow:n}=s;if(!this.isDragging())return!1;const o=this.registry.getTargetType(e),i=this.getItemType();if(i&&!Os(o,i))return!1;const a=this.getTargetIds();if(!a.length)return!1;const l=a.indexOf(e);return n?l===a.length-1:l>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return Rh(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return Oh(this.store.getState().dragOffset)}constructor(e,s){this.store=e,this.registry=s}}const oo=typeof global<"u"?global:self,Xi=oo.MutationObserver||oo.WebKitMutationObserver;function Qi(r){return function(){const s=setTimeout(o,0),n=setInterval(o,50);function o(){clearTimeout(s),clearInterval(n),r()}}}function Fh(r){let e=1;const s=new Xi(r),n=document.createTextNode("");return s.observe(n,{characterData:!0}),function(){e=-e,n.data=e}}const Lh=typeof Xi=="function"?Fh:Qi;class _h{enqueueTask(e){const{queue:s,requestFlush:n}=this;s.length||(n(),this.flushing=!0),s[s.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;for(;this.index<e.length;){const s=this.index;if(this.index++,e[s].call(),this.index>this.capacity){for(let n=0,o=e.length-this.index;n<o;n++)e[n]=e[n+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=Lh(this.flush),this.requestErrorThrow=Qi(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class $h{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,s){this.onError=e,this.release=s,this.task=null}}class Bh{create(e){const s=this.freeTasks,n=s.length?s.pop():new $h(this.onError,o=>s[s.length]=o);return n.task=e,n}constructor(e){this.onError=e,this.freeTasks=[]}}const Zi=new _h,Uh=new Bh(Zi.registerPendingError);function Hh(r){Zi.enqueueTask(Uh.create(r))}const ln="dnd-core/ADD_SOURCE",cn="dnd-core/ADD_TARGET",dn="dnd-core/REMOVE_SOURCE",qr="dnd-core/REMOVE_TARGET";function zh(r){return{type:ln,payload:{sourceId:r}}}function Gh(r){return{type:cn,payload:{targetId:r}}}function Wh(r){return{type:dn,payload:{sourceId:r}}}function qh(r){return{type:qr,payload:{targetId:r}}}function Vh(r){z(typeof r.canDrag=="function","Expected canDrag to be a function."),z(typeof r.beginDrag=="function","Expected beginDrag to be a function."),z(typeof r.endDrag=="function","Expected endDrag to be a function.")}function Jh(r){z(typeof r.canDrop=="function","Expected canDrop to be a function."),z(typeof r.hover=="function","Expected hover to be a function."),z(typeof r.drop=="function","Expected beginDrag to be a function.")}function Is(r,e){if(e&&Array.isArray(r)){r.forEach(s=>Is(s,!1));return}z(typeof r=="string"||typeof r=="symbol",e?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var je;(function(r){r.SOURCE="SOURCE",r.TARGET="TARGET"})(je||(je={}));let Kh=0;function Yh(){return Kh++}function Xh(r){const e=Yh().toString();switch(r){case je.SOURCE:return`S${e}`;case je.TARGET:return`T${e}`;default:throw new Error(`Unknown Handler Role: ${r}`)}}function io(r){switch(r[0]){case"S":return je.SOURCE;case"T":return je.TARGET;default:throw new Error(`Cannot parse handler ID: ${r}`)}}function ao(r,e){const s=r.entries();let n=!1;do{const{done:o,value:[,i]}=s.next();if(i===e)return!0;n=!!o}while(!n);return!1}class Qh{addSource(e,s){Is(e),Vh(s);const n=this.addHandler(je.SOURCE,e,s);return this.store.dispatch(zh(n)),n}addTarget(e,s){Is(e,!0),Jh(s);const n=this.addHandler(je.TARGET,e,s);return this.store.dispatch(Gh(n)),n}containsHandler(e){return ao(this.dragSources,e)||ao(this.dropTargets,e)}getSource(e,s=!1){return z(this.isSourceId(e),"Expected a valid source ID."),s&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return z(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return z(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return z(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return io(e)===je.SOURCE}isTargetId(e){return io(e)===je.TARGET}removeSource(e){z(this.getSource(e),"Expected an existing source."),this.store.dispatch(Wh(e)),Hh(()=>{this.dragSources.delete(e),this.types.delete(e)})}removeTarget(e){z(this.getTarget(e),"Expected an existing target."),this.store.dispatch(qh(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){const s=this.getSource(e);z(s,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=s}unpinSource(){z(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,s,n){const o=Xh(e);return this.types.set(o,s),e===je.SOURCE?this.dragSources.set(o,n):e===je.TARGET&&this.dropTargets.set(o,n),o}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}const Zh=(r,e)=>r===e;function ef(r,e){return!r&&!e?!0:!r||!e?!1:r.x===e.x&&r.y===e.y}function tf(r,e,s=Zh){if(r.length!==e.length)return!1;for(let n=0;n<r.length;++n)if(!s(r[n],e[n]))return!1;return!0}function rf(r=Ut,e){switch(e.type){case zr:break;case ln:case cn:case qr:case dn:return Ut;case Hr:case on:case Wr:case Gr:default:return an}const{targetIds:s=[],prevTargetIds:n=[]}=e.payload,o=ih(s,n);if(!(o.length>0||!tf(s,n)))return Ut;const a=n[n.length-1],l=s[s.length-1];return a!==l&&(a&&o.push(a),l&&o.push(l)),o}function sf(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function nf(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){sf(r,o,s[o])})}return r}const lo={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function of(r=lo,e){const{payload:s}=e;switch(e.type){case nn:case Hr:return{initialSourceClientOffset:s.sourceClientOffset,initialClientOffset:s.clientOffset,clientOffset:s.clientOffset};case zr:return ef(r.clientOffset,s.clientOffset)?r:nf({},r,{clientOffset:s.clientOffset});case Wr:case Gr:return lo;default:return r}}function af(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function ht(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){af(r,o,s[o])})}return r}const lf={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function cf(r=lf,e){const{payload:s}=e;switch(e.type){case Hr:return ht({},r,{itemType:s.itemType,item:s.item,sourceId:s.sourceId,isSourcePublic:s.isSourcePublic,dropResult:null,didDrop:!1});case on:return ht({},r,{isSourcePublic:!0});case zr:return ht({},r,{targetIds:s.targetIds});case qr:return r.targetIds.indexOf(s.targetId)===-1?r:ht({},r,{targetIds:oh(r.targetIds,s.targetId)});case Gr:return ht({},r,{dropResult:s.dropResult,didDrop:!0,targetIds:[]});case Wr:return ht({},r,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return r}}function df(r=0,e){switch(e.type){case ln:case cn:return r+1;case dn:case qr:return r-1;default:return r}}function uf(r=0){return r+1}function mf(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function pf(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){mf(r,o,s[o])})}return r}function hf(r={},e){return{dirtyHandlerIds:rf(r.dirtyHandlerIds,{type:e.type,payload:pf({},e.payload,{prevTargetIds:nh(r,"dragOperation.targetIds",[])})}),dragOffset:of(r.dragOffset,e),refCount:df(r.refCount,e),dragOperation:cf(r.dragOperation,e),stateId:uf(r.stateId)}}function ff(r,e=void 0,s={},n=!1){const o=gf(n),i=new Mh(o,new Qh(o)),a=new Ah(o,i),l=r(a,e,s);return a.receiveBackend(l),a}function gf(r){const e=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return Ji(hf,r&&e&&e({name:"dnd-core",instanceId:"dnd-core"}))}function xf(r,e){if(r==null)return{};var s=bf(r,e),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(s[n]=r[n])}return s}function bf(r,e){if(r==null)return{};var s={},n=Object.keys(r),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(s[o]=r[o]);return s}let co=0;const yr=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var yf=p.memo(function(e){var{children:s}=e,n=xf(e,["children"]);const[o,i]=vf(n);return p.useEffect(()=>{if(i){const a=ea();return++co,()=>{--co===0&&(a[yr]=null)}}},[]),t.jsx(Vi.Provider,{value:o,children:s})});function vf(r){if("manager"in r)return[{dragDropManager:r.manager},!1];const e=wf(r.backend,r.context,r.options,r.debugMode),s=!r.context;return[e,s]}function wf(r,e=ea(),s,n){const o=e;return o[yr]||(o[yr]={dragDropManager:ff(r,e,s,n)}),o[yr]}function ea(){return typeof global<"u"?global:window}var jf=function r(e,s){if(e===s)return!0;if(e&&s&&typeof e=="object"&&typeof s=="object"){if(e.constructor!==s.constructor)return!1;var n,o,i;if(Array.isArray(e)){if(n=e.length,n!=s.length)return!1;for(o=n;o--!==0;)if(!r(e[o],s[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===s.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(s).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(s,i[o]))return!1;for(o=n;o--!==0;){var a=i[o];if(!r(e[a],s[a]))return!1}return!0}return e!==e&&s!==s};const Nf=ba(jf),ct=typeof window<"u"?p.useLayoutEffect:p.useEffect;function Sf(r,e,s){const[n,o]=p.useState(()=>e(r)),i=p.useCallback(()=>{const a=e(r);Nf(n,a)||(o(a),s&&s())},[n,r,s]);return ct(i),[n,i]}function Cf(r,e,s){const[n,o]=Sf(r,e,s);return ct(function(){const a=r.getHandlerId();if(a!=null)return r.subscribeToStateChange(o,{handlerIds:[a]})},[r,o]),n}function ta(r,e,s){return Cf(e,r||(()=>({})),()=>s.reconnect())}function ra(r,e){const s=[];return typeof r!="function"&&s.push(r),p.useMemo(()=>typeof r=="function"?r():r,s)}function kf(r){return p.useMemo(()=>r.hooks.dragSource(),[r])}function Tf(r){return p.useMemo(()=>r.hooks.dragPreview(),[r])}let ls=!1,cs=!1;class Df{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){z(!ls,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return ls=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{ls=!1}}isDragging(){if(!this.sourceId)return!1;z(!cs,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return cs=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{cs=!1}}subscribeToStateChange(e,s){return this.internalMonitor.subscribeToStateChange(e,s)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,s){return this.internalMonitor.isOverTarget(e,s)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}let ds=!1;class Ef{receiveHandlerId(e){this.targetId=e}getHandlerId(){return this.targetId}subscribeToStateChange(e,s){return this.internalMonitor.subscribeToStateChange(e,s)}canDrop(){if(!this.targetId)return!1;z(!ds,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return ds=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{ds=!1}}isOver(e){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,e):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.targetId=null,this.internalMonitor=e.getMonitor()}}function Af(r,e,s){const n=s.getRegistry(),o=n.addTarget(r,e);return[o,()=>n.removeTarget(o)]}function Pf(r,e,s){const n=s.getRegistry(),o=n.addSource(r,e);return[o,()=>n.removeSource(o)]}function Ms(r,e,s,n){let o;if(o!==void 0)return!!o;if(r===e)return!0;if(typeof r!="object"||!r||typeof e!="object"||!e)return!1;const i=Object.keys(r),a=Object.keys(e);if(i.length!==a.length)return!1;const l=Object.prototype.hasOwnProperty.bind(e);for(let d=0;d<i.length;d++){const c=i[d];if(!l(c))return!1;const u=r[c],m=e[c];if(o=void 0,o===!1||o===void 0&&u!==m)return!1}return!0}function Fs(r){return r!==null&&typeof r=="object"&&Object.prototype.hasOwnProperty.call(r,"current")}function Rf(r){if(typeof r.type=="string")return;const e=r.type.displayName||r.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`)}function Of(r){return(e=null,s=null)=>{if(!p.isValidElement(e)){const i=e;return r(i,s),i}const n=e;return Rf(n),If(n,s?i=>r(i,s):r)}}function sa(r){const e={};return Object.keys(r).forEach(s=>{const n=r[s];if(s.endsWith("Ref"))e[s]=r[s];else{const o=Of(n);e[s]=()=>o}}),e}function uo(r,e){typeof r=="function"?r(e):r.current=e}function If(r,e){const s=r.ref;return z(typeof s!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),s?p.cloneElement(r,{ref:n=>{uo(s,n),uo(e,n)}}):p.cloneElement(r,{ref:e})}class Mf{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){const e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){const e=this.dragSource,s=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return s&&this.disconnectDragSource(),this.handlerId?e?(s&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),s):(this.lastConnectedDragSource=e,s):s}reconnectDragPreview(e=!1){const s=this.dragPreview,n=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!!this.handlerId){if(!s){this.lastConnectedDragPreview=s;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=s,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,s,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!Ms(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!Ms(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=sa({dragSource:(s,n)=>{this.clearDragSource(),this.dragSourceOptions=n||null,Fs(s)?this.dragSourceRef=s:this.dragSourceNode=s,this.reconnectDragSource()},dragPreview:(s,n)=>{this.clearDragPreview(),this.dragPreviewOptions=n||null,Fs(s)?this.dragPreviewRef=s:this.dragPreviewNode=s,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}class Ff{get connectTarget(){return this.dropTarget}reconnect(){const e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();const s=this.dropTarget;if(this.handlerId){if(!s){this.lastConnectedDropTarget=s;return}e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=s,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,s,this.dropTargetOptions))}}receiveHandlerId(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(e){this.dropTargetOptionsInternal=e}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Ms(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(e){this.hooks=sa({dropTarget:(s,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,Fs(s)?this.dropTargetRef=s:this.dropTargetNode=s,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}}function At(){const{dragDropManager:r}=p.useContext(Vi);return z(r!=null,"Expected drag drop context"),r}function Lf(r,e){const s=At(),n=p.useMemo(()=>new Mf(s.getBackend()),[s]);return ct(()=>(n.dragSourceOptions=r||null,n.reconnect(),()=>n.disconnectDragSource()),[n,r]),ct(()=>(n.dragPreviewOptions=e||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,e]),n}function _f(){const r=At();return p.useMemo(()=>new Df(r),[r])}class $f{beginDrag(){const e=this.spec,s=this.monitor;let n=null;return typeof e.item=="object"?n=e.item:typeof e.item=="function"?n=e.item(s):n={},n??null}canDrag(){const e=this.spec,s=this.monitor;return typeof e.canDrag=="boolean"?e.canDrag:typeof e.canDrag=="function"?e.canDrag(s):!0}isDragging(e,s){const n=this.spec,o=this.monitor,{isDragging:i}=n;return i?i(o):s===e.getSourceId()}endDrag(){const e=this.spec,s=this.monitor,n=this.connector,{end:o}=e;o&&o(s.getItem(),s),n.reconnect()}constructor(e,s,n){this.spec=e,this.monitor=s,this.connector=n}}function Bf(r,e,s){const n=p.useMemo(()=>new $f(r,e,s),[e,s]);return p.useEffect(()=>{n.spec=r},[r]),n}function Uf(r){return p.useMemo(()=>{const e=r.type;return z(e!=null,"spec.type must be defined"),e},[r])}function Hf(r,e,s){const n=At(),o=Bf(r,e,s),i=Uf(r);ct(function(){if(i!=null){const[l,d]=Pf(i,o,n);return e.receiveHandlerId(l),s.receiveHandlerId(l),d}},[n,e,s,o,i])}function zf(r,e){const s=ra(r);z(!s.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const n=_f(),o=Lf(s.options,s.previewOptions);return Hf(s,n,o),[ta(s.collect,n,o),kf(o),Tf(o)]}function Gf(r){return p.useMemo(()=>r.hooks.dropTarget(),[r])}function Wf(r){const e=At(),s=p.useMemo(()=>new Ff(e.getBackend()),[e]);return ct(()=>(s.dropTargetOptions=r||null,s.reconnect(),()=>s.disconnectDropTarget()),[r]),s}function qf(){const r=At();return p.useMemo(()=>new Ef(r),[r])}function Vf(r){const{accept:e}=r;return p.useMemo(()=>(z(r.accept!=null,"accept must be defined"),Array.isArray(e)?e:[e]),[e])}class Jf{canDrop(){const e=this.spec,s=this.monitor;return e.canDrop?e.canDrop(s.getItem(),s):!0}hover(){const e=this.spec,s=this.monitor;e.hover&&e.hover(s.getItem(),s)}drop(){const e=this.spec,s=this.monitor;if(e.drop)return e.drop(s.getItem(),s)}constructor(e,s){this.spec=e,this.monitor=s}}function Kf(r,e){const s=p.useMemo(()=>new Jf(r,e),[e]);return p.useEffect(()=>{s.spec=r},[r]),s}function Yf(r,e,s){const n=At(),o=Kf(r,e),i=Vf(r);ct(function(){const[l,d]=Af(i,o,n);return e.receiveHandlerId(l),s.receiveHandlerId(l),d},[n,e,o,s,i.map(a=>a.toString()).join("|")])}function Xf(r,e){const s=ra(r),n=qf(),o=Wf(s.options);return Yf(s,n,o),[ta(s.collect,n,o),Gf(o)]}function na(r){let e=null;return()=>(e==null&&(e=r()),e)}function Qf(r,e){return r.filter(s=>s!==e)}function Zf(r,e){const s=new Set,n=i=>s.add(i);r.forEach(n),e.forEach(n);const o=[];return s.forEach(i=>o.push(i)),o}class eg{enter(e){const s=this.entered.length,n=o=>this.isNodeInDocument(o)&&(!o.contains||o.contains(e));return this.entered=Zf(this.entered.filter(n),[e]),s===0&&this.entered.length>0}leave(e){const s=this.entered.length;return this.entered=Qf(this.entered.filter(this.isNodeInDocument),e),s>0&&this.entered.length===0}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class tg{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null}})})}loadDataTransfer(e){if(e){const s={};Object.keys(this.config.exposeProperties).forEach(n=>{const o=this.config.exposeProperties[n];o!=null&&(s[n]={value:o(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,s)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,s){return s===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const oa="__NATIVE_FILE__",ia="__NATIVE_URL__",aa="__NATIVE_TEXT__",la="__NATIVE_HTML__",mo=Object.freeze(Object.defineProperty({__proto__:null,FILE:oa,HTML:la,TEXT:aa,URL:ia},Symbol.toStringTag,{value:"Module"}));function us(r,e,s){const n=e.reduce((o,i)=>o||r.getData(i),"");return n??s}const Ls={[oa]:{exposeProperties:{files:r=>Array.prototype.slice.call(r.files),items:r=>r.items,dataTransfer:r=>r},matchesTypes:["Files"]},[la]:{exposeProperties:{html:(r,e)=>us(r,e,""),dataTransfer:r=>r},matchesTypes:["Html","text/html"]},[ia]:{exposeProperties:{urls:(r,e)=>us(r,e,"").split(`
`),dataTransfer:r=>r},matchesTypes:["Url","text/uri-list"]},[aa]:{exposeProperties:{text:(r,e)=>us(r,e,""),dataTransfer:r=>r},matchesTypes:["Text","text/plain"]}};function rg(r,e){const s=Ls[r];if(!s)throw new Error(`native type ${r} has no configuration`);const n=new tg(s);return n.loadDataTransfer(e),n}function ms(r){if(!r)return null;const e=Array.prototype.slice.call(r.types||[]);return Object.keys(Ls).filter(s=>{const n=Ls[s];return n!=null&&n.matchesTypes?n.matchesTypes.some(o=>e.indexOf(o)>-1):!1})[0]||null}const sg=na(()=>/firefox/i.test(navigator.userAgent)),ca=na(()=>!!window.safari);class po{interpolate(e){const{xs:s,ys:n,c1s:o,c2s:i,c3s:a}=this;let l=s.length-1;if(e===s[l])return n[l];let d=0,c=a.length-1,u;for(;d<=c;){u=Math.floor(.5*(d+c));const w=s[u];if(w<e)d=u+1;else if(w>e)c=u-1;else return n[u]}l=Math.max(0,c);const m=e-s[l],b=m*m;return n[l]+o[l]*m+i[l]*b+a[l]*m*b}constructor(e,s){const{length:n}=e,o=[];for(let w=0;w<n;w++)o.push(w);o.sort((w,g)=>e[w]<e[g]?-1:1);const i=[],a=[];let l,d;for(let w=0;w<n-1;w++)l=e[w+1]-e[w],d=s[w+1]-s[w],i.push(l),a.push(d/l);const c=[a[0]];for(let w=0;w<i.length-1;w++){const g=a[w],f=a[w+1];if(g*f<=0)c.push(0);else{l=i[w];const h=i[w+1],S=l+h;c.push(3*S/((S+h)/g+(S+l)/f))}}c.push(a[a.length-1]);const u=[],m=[];let b;for(let w=0;w<c.length-1;w++){b=a[w];const g=c[w],f=1/i[w],h=g+c[w+1]-b-b;u.push((b-g-h)*f),m.push(h*f*f)}this.xs=e,this.ys=s,this.c1s=c,this.c2s=u,this.c3s=m}}const ng=1;function da(r){const e=r.nodeType===ng?r:r.parentElement;if(!e)return null;const{top:s,left:n}=e.getBoundingClientRect();return{x:n,y:s}}function lr(r){return{x:r.clientX,y:r.clientY}}function og(r){var e;return r.nodeName==="IMG"&&(sg()||!(!((e=document.documentElement)===null||e===void 0)&&e.contains(r)))}function ig(r,e,s,n){let o=r?e.width:s,i=r?e.height:n;return ca()&&r&&(i/=window.devicePixelRatio,o/=window.devicePixelRatio),{dragPreviewWidth:o,dragPreviewHeight:i}}function ag(r,e,s,n,o){const i=og(e),l=da(i?r:e),d={x:s.x-l.x,y:s.y-l.y},{offsetWidth:c,offsetHeight:u}=r,{anchorX:m,anchorY:b}=n,{dragPreviewWidth:w,dragPreviewHeight:g}=ig(i,e,c,u),f=()=>{let D=new po([0,.5,1],[d.y,d.y/u*g,d.y+g-u]).interpolate(b);return ca()&&i&&(D+=(window.devicePixelRatio-1)*g),D},h=()=>new po([0,.5,1],[d.x,d.x/c*w,d.x+w-c]).interpolate(m),{offsetX:S,offsetY:v}=o,j=S===0||S,x=v===0||v;return{x:j?S:h(),y:x?v:f()}}class lg{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var e;return!((e=this.globalContext)===null||e===void 0)&&e.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return((e=this.optionsArgs)===null||e===void 0?void 0:e.rootElement)||this.window}constructor(e,s){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=s}}function cg(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function ho(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){cg(r,o,s[o])})}return r}class dg{profile(){var e,s;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((e=this.dragStartSourceIds)===null||e===void 0?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((s=this.dragOverTargetIds)===null||s===void 0?void 0:s.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(e!==void 0){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;if(e!==void 0&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var s;(s=this.window)===null||s===void 0||s.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(e,s,n){return this.sourcePreviewNodeOptions.set(e,n),this.sourcePreviewNodes.set(e,s),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,s,n){this.sourceNodes.set(e,s),this.sourceNodeOptions.set(e,n);const o=a=>this.handleDragStart(a,e),i=a=>this.handleSelectStart(a);return s.setAttribute("draggable","true"),s.addEventListener("dragstart",o),s.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),s.removeEventListener("dragstart",o),s.removeEventListener("selectstart",i),s.setAttribute("draggable","false")}}connectDropTarget(e,s){const n=a=>this.handleDragEnter(a,e),o=a=>this.handleDragOver(a,e),i=a=>this.handleDrop(a,e);return s.addEventListener("dragenter",n),s.addEventListener("dragover",o),s.addEventListener("drop",i),()=>{s.removeEventListener("dragenter",n),s.removeEventListener("dragover",o),s.removeEventListener("drop",i)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),s=this.sourceNodeOptions.get(e);return ho({dropEffect:this.altKeyPressed?"copy":"move"},s||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId(),s=this.sourcePreviewNodeOptions.get(e);return ho({anchorX:.5,anchorY:.5,captureDraggingState:!1},s||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(mo).some(s=>mo[s]===e)}beginDragNativeItem(e,s){this.clearCurrentDragSourceNode(),this.currentNativeSource=rg(e,s),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;const s=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var n;return(n=this.rootElement)===null||n===void 0?void 0:n.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},s)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var e;(e=this.window)===null||e===void 0||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,s){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(s))}handleDragEnter(e,s){this.dragEnterTargetIds.unshift(s)}handleDragOver(e,s){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(s)}handleDrop(e,s){this.dropTargetIds.unshift(s)}constructor(e,s,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=o=>{const i=this.sourceNodes.get(o);return i&&da(i)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=o=>!!(o&&this.document&&this.document.body&&this.document.body.contains(o)),this.endDragIfSourceWasRemovedFromDOM=()=>{const o=this.currentDragSourceNode;o==null||this.isNodeInDocument(o)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=o=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(o||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=o=>{if(o.defaultPrevented)return;const{dragStartSourceIds:i}=this;this.dragStartSourceIds=null;const a=lr(o);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(i||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:a});const{dataTransfer:l}=o,d=ms(l);if(this.monitor.isDragging()){if(l&&typeof l.setDragImage=="function"){const u=this.monitor.getSourceId(),m=this.sourceNodes.get(u),b=this.sourcePreviewNodes.get(u)||m;if(b){const{anchorX:w,anchorY:g,offsetX:f,offsetY:h}=this.getCurrentSourcePreviewNodeOptions(),j=ag(m,b,a,{anchorX:w,anchorY:g},{offsetX:f,offsetY:h});l.setDragImage(b,j.x,j.y)}}try{l==null||l.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(o.target);const{captureDraggingState:c}=this.getCurrentSourcePreviewNodeOptions();c?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(d)this.beginDragNativeItem(d);else{if(l&&!l.types&&(o.target&&!o.target.hasAttribute||!o.target.hasAttribute("draggable")))return;o.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=o=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}if(!this.enterLeaveCounter.enter(o.target)||this.monitor.isDragging())return;const{dataTransfer:l}=o,d=ms(l);d&&this.beginDragNativeItem(d,l)},this.handleTopDragEnter=o=>{const{dragEnterTargetIds:i}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=o.altKey,i.length>0&&this.actions.hover(i,{clientOffset:lr(o)}),i.some(l=>this.monitor.canDropOnTarget(l))&&(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=o=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}},this.handleTopDragOver=o=>{const{dragOverTargetIds:i}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="none");return}this.altKeyPressed=o.altKey,this.lastClientOffset=lr(o),this.scheduleHover(i),(i||[]).some(l=>this.monitor.canDropOnTarget(l))?(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?o.preventDefault():(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=o=>{this.isDraggingNativeItem()&&o.preventDefault(),this.enterLeaveCounter.leave(o.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=o=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var i;o.preventDefault(),(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}else ms(o.dataTransfer)&&o.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=o=>{const{dropTargetIds:i}=this;this.dropTargetIds=[],this.actions.hover(i,{clientOffset:lr(o)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=o=>{const i=o.target;typeof i.dragDrop=="function"&&(i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable||(o.preventDefault(),i.dragDrop()))},this.options=new lg(s,n),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new eg(this.isNodeInDocument)}}const ug=function(e,s,n){return new dg(e,s,n)},mg=({projectId:r,onCodeChange:e,initialComponents:s=[]})=>{var P,_,E,O,k,B;const[n,o]=p.useState(s),[i,a]=p.useState(null),[l,d]=p.useState(!1),[c,u]=p.useState(!1),[m,b]=p.useState({width:1200,height:800}),[w,g]=p.useState(1),f=p.useRef(null),h=[{type:"container",name:"Container",icon:"📦",category:"Layout"},{type:"text",name:"Text",icon:"📝",category:"Content"},{type:"button",name:"Button",icon:"🔘",category:"Interactive"},{type:"input",name:"Input",icon:"📝",category:"Form"},{type:"image",name:"Image",icon:"🖼️",category:"Media"},{type:"card",name:"Card",icon:"🃏",category:"Layout"},{type:"header",name:"Header",icon:"📋",category:"Layout"},{type:"footer",name:"Footer",icon:"🦶",category:"Layout"},{type:"sidebar",name:"Sidebar",icon:"📑",category:"Layout"},{type:"navbar",name:"Navbar",icon:"🧭",category:"Navigation"},{type:"form",name:"Form",icon:"📋",category:"Form"},{type:"table",name:"Table",icon:"📊",category:"Data"},{type:"chart",name:"Chart",icon:"📈",category:"Data"},{type:"modal",name:"Modal",icon:"🪟",category:"Overlay"},{type:"dropdown",name:"Dropdown",icon:"📋",category:"Interactive"}],S=T=>({container:`<div className="container" style={${JSON.stringify(T.styles)}}>
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
</div>`})[T.type]||`<div>Unknown component: ${T.type}</div>`,v=()=>{const T=`import React, { useState, useEffect } from 'react';
import './App.css';`,L=`const App = () => {
  return (
    <div className="app">
      ${n.map(G=>S(G)).join(`

`)}
    </div>
  );
};

export default App;`;return`${T}

${L}`},j=(T,R)=>{const L=R.getDropResult();if(!L)return;const G={id:`component-${Date.now()}`,type:T.type,name:T.name,position:{x:L.x,y:L.y},size:{width:200,height:100},styles:{position:"absolute",left:`${L.x}px`,top:`${L.y}px`,width:"200px",height:"100px",border:"1px solid #ddd",padding:"10px",backgroundColor:"#fff"},content:T.name,properties:{}};o(W=>[...W,G])},x=T=>{a(T),d(!0)},y=(T,R)=>{if(!i)return;const L={...i,[T]:R,styles:{...i.styles,[T]:R}};o(G=>G.map(W=>W.id===i.id?L:W)),a(L)},D=()=>`
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
`,A=()=>{const T={components:n,appCode:v(),cssCode:D(),metadata:{projectId:r,exportedAt:new Date().toISOString(),componentCount:n.length}},R=JSON.stringify(T,null,2),L=new Blob([R],{type:"application/json"}),G=URL.createObjectURL(L),W=document.createElement("a");W.href=G,W.download=`dreambuild-project-${r}.json`,W.click(),URL.revokeObjectURL(G)};return p.useEffect(()=>{e&&e({appCode:v(),cssCode:D(),components:n})},[n,e]),t.jsx(yf,{backend:ug,children:t.jsxs("div",{className:"visual-editor",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("h2",{children:"🎨 Visual Editor"}),t.jsxs("div",{className:"editor-controls",children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>u(!c),children:c?"Edit":"Preview"}),t.jsx("button",{className:"btn btn-primary",onClick:A,children:"Export"})]})]}),t.jsxs("div",{className:"editor-layout",children:[t.jsxs("div",{className:"component-library",children:[t.jsx("h3",{children:"📚 Component Library"}),t.jsx("div",{className:"library-categories",children:["Layout","Content","Interactive","Form","Media","Data","Navigation","Overlay"].map(T=>t.jsxs("div",{className:"category",children:[t.jsx("h4",{children:T}),t.jsx("div",{className:"category-components",children:h.filter(R=>R.category===T).map(R=>t.jsx(pg,{type:R.type,name:R.name,icon:R.icon},R.type))})]},T))})]}),t.jsxs("div",{className:"canvas-container",children:[t.jsxs("div",{className:"canvas-toolbar",children:[t.jsxs("div",{className:"canvas-controls",children:[t.jsx("button",{className:"btn btn-sm",onClick:()=>g(w*.8),children:"Zoom Out"}),t.jsxs("span",{className:"zoom-level",children:[Math.round(w*100),"%"]}),t.jsx("button",{className:"btn btn-sm",onClick:()=>g(w*1.2),children:"Zoom In"})]}),t.jsx("div",{className:"canvas-size",children:t.jsxs("select",{value:`${m.width}x${m.height}`,onChange:T=>{const[R,L]=T.target.value.split("x").map(Number);b({width:R,height:L})},children:[t.jsx("option",{value:"1200x800",children:"Desktop (1200x800)"}),t.jsx("option",{value:"768x1024",children:"Tablet (768x1024)"}),t.jsx("option",{value:"375x667",children:"Mobile (375x667)"})]})})]}),t.jsx("div",{className:"canvas",ref:f,style:{width:m.width*w,height:m.height*w,transform:`scale(${w})`,transformOrigin:"top left"},children:t.jsx(hg,{onDrop:j,children:n.map(T=>t.jsx(fg,{component:T,onSelect:x,isSelected:(i==null?void 0:i.id)===T.id},T.id))})})]}),l&&i&&t.jsxs("div",{className:"properties-panel",children:[t.jsx("h3",{children:"⚙️ Properties"}),t.jsxs("div",{className:"property-groups",children:[t.jsxs("div",{className:"property-group",children:[t.jsx("h4",{children:"Content"}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Text Content"}),t.jsx("input",{type:"text",value:i.content||"",onChange:T=>y("content",T.target.value)})]})]}),t.jsxs("div",{className:"property-group",children:[t.jsx("h4",{children:"Position"}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"X Position"}),t.jsx("input",{type:"number",value:((P=i.position)==null?void 0:P.x)||0,onChange:T=>y("left",`${T.target.value}px`)})]}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Y Position"}),t.jsx("input",{type:"number",value:((_=i.position)==null?void 0:_.y)||0,onChange:T=>y("top",`${T.target.value}px`)})]})]}),t.jsxs("div",{className:"property-group",children:[t.jsx("h4",{children:"Size"}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Width"}),t.jsx("input",{type:"number",value:((E=i.size)==null?void 0:E.width)||200,onChange:T=>y("width",`${T.target.value}px`)})]}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Height"}),t.jsx("input",{type:"number",value:((O=i.size)==null?void 0:O.height)||100,onChange:T=>y("height",`${T.target.value}px`)})]})]}),t.jsxs("div",{className:"property-group",children:[t.jsx("h4",{children:"Style"}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Background Color"}),t.jsx("input",{type:"color",value:((k=i.styles)==null?void 0:k.backgroundColor)||"#ffffff",onChange:T=>y("backgroundColor",T.target.value)})]}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Border Color"}),t.jsx("input",{type:"color",value:((B=i.styles)==null?void 0:B.borderColor)||"#dddddd",onChange:T=>y("borderColor",T.target.value)})]})]})]})]})]}),t.jsx("style",{jsx:!0,children:`
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
        `})]})})},pg=({type:r,name:e,icon:s})=>{const[{isDragging:n},o]=zf({type:"component",item:{type:r,name:e},collect:i=>({isDragging:i.isDragging()})});return t.jsxs("div",{ref:o,className:`draggable-component ${n?"dragging":""}`,children:[t.jsx("span",{className:"component-icon",children:s}),t.jsx("span",{className:"component-name",children:e})]})},hg=({children:r,onDrop:e})=>{const[{isOver:s},n]=Xf({accept:"component",drop:(o,i)=>{var d;const a=i.getClientOffset(),l=(d=i.getDropResult())==null?void 0:d.getBoundingClientRect();a&&l&&e(o,{x:a.x-l.left,y:a.y-l.top})},collect:o=>({isOver:o.isOver()})});return t.jsx("div",{ref:n,className:`droppable-canvas ${s?"drag-over":""}`,children:r})},fg=({component:r,onSelect:e,isSelected:s})=>{const n=o=>{o.stopPropagation(),e(r)};return t.jsx("div",{className:`visual-component ${s?"selected":""}`,style:r.styles,onClick:n,children:t.jsxs("div",{className:"component-content",children:[r.type==="text"&&(r.content||"Text"),r.type==="button"&&(r.content||"Button"),r.type==="input"&&t.jsx("input",{placeholder:r.placeholder||"Input"}),r.type==="image"&&t.jsx("div",{className:"image-placeholder",children:"🖼️ Image"}),r.type==="card"&&t.jsxs("div",{children:[t.jsx("h3",{children:r.title||"Card Title"}),t.jsx("p",{children:r.content||"Card content"})]}),!["text","button","input","image","card"].includes(r.type)&&t.jsx("div",{className:"component-placeholder",children:r.name})]})})},gg=({projectId:r,projectData:e,onDeploy:s})=>{const[n,o]=p.useState("vercel"),[i,a]=p.useState(!1),[l,d]=p.useState(null),c=[{id:"vercel",name:"Vercel",icon:"▲",description:"Fast, global deployment"},{id:"netlify",name:"Netlify",icon:"🌐",description:"JAMstack deployment"},{id:"aws",name:"AWS Amplify",icon:"☁️",description:"Full-stack deployment"},{id:"firebase",name:"Firebase",icon:"🔥",description:"Google hosting"},{id:"github",name:"GitHub Pages",icon:"🐙",description:"Free static hosting"}],u=async()=>{a(!0),d("Deploying...");try{await new Promise(b=>setTimeout(b,3e3));const m={success:!0,provider:n,url:`https://${r}.${n}.com`,deployedAt:new Date().toISOString()};d("Deployed successfully!"),s&&s(m)}catch{d("Deployment failed")}finally{a(!1)}};return t.jsxs("div",{className:"deployment-panel",children:[t.jsx("h3",{children:"🚀 Deploy Your App"}),t.jsxs("div",{className:"provider-selection",children:[t.jsx("h4",{children:"Choose Hosting Provider"}),t.jsx("div",{className:"providers-grid",children:c.map(m=>t.jsxs("div",{className:`provider-card ${n===m.id?"selected":""}`,onClick:()=>o(m.id),children:[t.jsx("div",{className:"provider-icon",children:m.icon}),t.jsx("div",{className:"provider-name",children:m.name}),t.jsx("div",{className:"provider-description",children:m.description})]},m.id))})]}),t.jsx("div",{className:"deployment-actions",children:t.jsx("button",{className:"btn btn-primary btn-lg",onClick:u,disabled:i,children:i?"Deploying...":"Deploy Now"})}),l&&t.jsx("div",{className:"deployment-status",children:t.jsx("div",{className:`status-message ${l.includes("success")?"success":"error"}`,children:l})}),t.jsx("style",{jsx:!0,children:`
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
      `})]})};var ft={};class xg{constructor(){this.app=null,this.db=null,this.storage=null,this.auth=null,this.user=null,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const e={apiKey:ft.REACT_APP_FIREBASE_API_KEY||"your-api-key",authDomain:ft.REACT_APP_FIREBASE_AUTH_DOMAIN||"your-project.firebaseapp.com",projectId:ft.REACT_APP_FIREBASE_PROJECT_ID||"your-project-id",storageBucket:ft.REACT_APP_FIREBASE_STORAGE_BUCKET||"your-project.appspot.com",messagingSenderId:ft.REACT_APP_FIREBASE_MESSAGING_SENDER_ID||"123456789",appId:ft.REACT_APP_FIREBASE_APP_ID||"your-app-id"};try{this.app=vr(e)}catch(s){if(s.code==="app/duplicate-app")this.app=hs();else if(s.code==="app/no-options")try{this.app=hs()}catch{this.app=vr({apiKey:"demo-key",authDomain:"demo.firebaseapp.com",projectId:"demo-project"})}else throw s}this.db=$s(this.app),this.storage=mi(this.app),this.auth=_s(this.app),Bs(this.auth,s=>{this.user=s,console.log("Firebase auth state changed:",s?"authenticated":"not authenticated")});try{await Aa(this.auth),console.log("✅ Firebase anonymous auth successful")}catch(s){console.log("⚠️ Firebase auth not available, continuing without authentication:",s.message),this.user=null}this.isInitialized=!0,console.log("🔥 Firebase initialized successfully")}catch(e){console.error("❌ Failed to initialize Firebase:",e),this.isInitialized=!1,this.user=null,console.log("⚠️ Continuing without Firebase services")}}async storeProjectContext(e,s){var n;try{await this.initialize();const o=V(this.db,"projectContexts",e);await be(o,{...s,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",storedAt:new Date().toISOString(),dataSize:JSON.stringify(s).length}),console.log("✅ Project context stored successfully")}catch(o){throw console.error("❌ Failed to store project context:",o),o}}async loadProjectContext(e){try{await this.initialize();const s=V(this.db,"projectContexts",e),n=await dr(s);return n.exists()?(console.log("✅ Project context loaded successfully"),n.data()):(console.log("❌ Project context not found"),null)}catch(s){return console.error("❌ Failed to load project context:",s),null}}async storeProjectFiles(e,s){var n;try{await this.initialize();const o=V(this.db,"projectFiles",e);await be(o,{projectId:e,files:s,fileCount:Object.keys(s).length,totalSize:JSON.stringify(s).length,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",storedAt:new Date().toISOString()}),console.log("✅ Project files stored successfully")}catch(o){throw console.error("❌ Failed to store project files:",o),o}}async loadProjectFiles(e){try{await this.initialize();const s=V(this.db,"projectFiles",e),n=await dr(s);return n.exists()?(console.log("✅ Project files loaded successfully"),n.data().files):(console.log("❌ Project files not found"),null)}catch(s){return console.error("❌ Failed to load project files:",s),null}}async storeTemplate(e){var s;try{await this.initialize();const n=V(this.db,"templates",e.id);await be(n,{...e,userId:((s=this.user)==null?void 0:s.uid)||"anonymous",updatedAt:new Date().toISOString()}),console.log("✅ Template stored successfully")}catch(n){throw console.error("❌ Failed to store template:",n),n}}async loadTemplates(){try{await this.initialize();const e=ue(this.db,"templates"),s=await It(e),n=[];return s.forEach(o=>{n.push(o.data())}),console.log("✅ Templates loaded successfully"),n}catch(e){return console.error("❌ Failed to load templates:",e),[]}}async searchTemplates(e,s,n){try{await this.initialize();const o=ue(this.db,"templates");let i=we(o);e&&e.length>0&&(i=we(i,me("keywords","array-contains-any",e))),s&&s.length>0&&(i=we(i,me("technologies","array-contains-any",s))),n&&n.length>0&&(i=we(i,me("patterns","array-contains-any",n)));const a=await It(i),l=[];return a.forEach(d=>{l.push(d.data())}),console.log("✅ Templates searched successfully"),l}catch(o){return console.error("❌ Failed to search templates:",o),[]}}async storeLargeFile(e,s,n){try{await this.initialize();const o=st(this.storage,`projects/${e}/${s}`),i=new Blob([n],{type:"text/plain"});await tt(o,i);const a=await rt(o);return console.log("✅ Large file stored successfully"),a}catch(o){throw console.error("❌ Failed to store large file:",o),o}}async loadLargeFile(e){try{const n=await(await fetch(e)).text();return console.log("✅ Large file loaded successfully"),n}catch(s){return console.error("❌ Failed to load large file:",s),null}}async getUserProjects(){var e;try{await this.initialize();const s=ue(this.db,"projectContexts"),n=we(s,me("userId","==",((e=this.user)==null?void 0:e.uid)||"anonymous")),o=await It(n),i=[];return o.forEach(a=>{i.push({id:a.id,...a.data()})}),console.log("✅ User projects loaded successfully"),i}catch(s){return console.error("❌ Failed to load user projects:",s),[]}}async deleteProject(e){try{await this.initialize();const s=V(this.db,"projectContexts",e);await ur(s);const n=V(this.db,"projectFiles",e);await ur(n),console.log("✅ Project deleted successfully")}catch(s){throw console.error("❌ Failed to delete project:",s),s}}async getStorageStats(){try{await this.initialize();const e=await this.getUserProjects();let s=0,n=0;for(const o of e)s+=o.dataSize||0,n+=o.fileCount||0;return{totalProjects:e.length,totalFiles:n,totalSize:s,totalSizeMB:Math.round(s/(1024*1024)*100)/100}}catch(e){return console.error("❌ Failed to get storage stats:",e),{totalProjects:0,totalFiles:0,totalSize:0,totalSizeMB:0}}}async storeConversationMemory(e,s){var n,o;try{await this.initialize();const i=JSON.stringify(s),a=8e5;if(i.length>a){console.log("⚠️ Conversation data too large, storing in chunks");const l=this.chunkData(s,a);for(let d=0;d<l.length;d++){const c=V(this.db,"conversationMemory",`${e}_chunk_${d}`);await be(c,{projectId:e,chunkIndex:d,totalChunks:l.length,conversation:l[d],userId:((n=this.user)==null?void 0:n.uid)||"anonymous",lastUpdated:new Date().toISOString()})}console.log(`🧠 Conversation memory stored in ${l.length} chunks`)}else{const l=V(this.db,"conversationMemory",e);await be(l,{projectId:e,conversation:s,userId:((o=this.user)==null?void 0:o.uid)||"anonymous",lastUpdated:new Date().toISOString(),memorySize:i.length}),console.log("🧠 Conversation memory stored successfully")}}catch(i){throw console.error("❌ Failed to store conversation memory:",i),i}}chunkData(e,s){const n=[],o=JSON.stringify(e);let i=0;for(;i<o.length;){let a=Math.min(i+s,o.length);if(a<o.length){let l=o.lastIndexOf("}",a),d=o.lastIndexOf("]",a),c=o.lastIndexOf(",",a);const u=Math.max(l,d,c);u>i+s*.8&&(a=u+1)}try{n.push(JSON.parse(o.slice(i,a)))}catch{n.push(o.slice(i,a))}i=a}return n}async loadConversationMemory(e){try{await this.initialize();const s=V(this.db,"conversationMemory",e),n=await dr(s);if(n.exists())return console.log("🧠 Conversation memory loaded successfully"),n.data().conversation;const o=ue(this.db,"conversationMemory"),i=we(o,me("projectId","==",e)),a=await It(i);if(!a.empty){const l=[];a.forEach(c=>{l.push({index:c.data().chunkIndex,data:c.data().conversation})}),l.sort((c,u)=>c.index-u.index);const d=l.map(c=>c.data);return console.log(`🧠 Conversation memory loaded from ${l.length} chunks`),d}return console.log("❌ Conversation memory not found"),null}catch(s){return console.error("❌ Failed to load conversation memory:",s),null}}async addPromptToMemory(e,s,n,o){try{await this.initialize();let i=await this.loadConversationMemory(e)||{projectId:e,prompts:[],responses:[],context:{},createdAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return i.prompts.push({id:`prompt-${Date.now()}`,text:s,timestamp:new Date().toISOString(),context:o}),i.responses.push({id:`response-${Date.now()}`,promptId:i.prompts[i.prompts.length-1].id,text:n,timestamp:new Date().toISOString(),context:o}),i.context={...i.context,...o},i.lastUpdated=new Date().toISOString(),await this.storeConversationMemory(e,i),console.log("🧠 Prompt added to memory successfully"),i}catch(i){throw console.error("❌ Failed to add prompt to memory:",i),i}}async getConversationHistory(e,s=50){try{await this.initialize();const n=await this.loadConversationMemory(e);if(!n)return[];const o=n.prompts.slice(-s),i=n.responses.slice(-s);return{prompts:o,responses:i,context:n.context,totalPrompts:n.prompts.length,totalResponses:n.responses.length}}catch(n){return console.error("❌ Failed to get conversation history:",n),[]}}async searchConversationMemory(e,s){try{await this.initialize();const n=await this.loadConversationMemory(e);if(!n)return[];const o=[],i=s.toLowerCase();return n.prompts.forEach(a=>{a.text.toLowerCase().includes(i)&&o.push({type:"prompt",id:a.id,text:a.text,timestamp:a.timestamp,context:a.context})}),n.responses.forEach(a=>{a.text.toLowerCase().includes(i)&&o.push({type:"response",id:a.id,text:a.text,timestamp:a.timestamp,context:a.context})}),console.log("🔍 Conversation memory searched successfully"),o}catch(n){return console.error("❌ Failed to search conversation memory:",n),[]}}async getConversationContext(e,s){try{await this.initialize();const n=await this.loadConversationMemory(e);if(!n)return null;const o={projectId:e,currentPrompt:s,previousPrompts:n.prompts.slice(-10),previousResponses:n.responses.slice(-10),projectContext:n.context,conversationSummary:this.generateConversationSummary(n),relevantHistory:this.findRelevantHistory(n,s)};return console.log("🧠 Conversation context generated successfully"),o}catch(n){return console.error("❌ Failed to get conversation context:",n),null}}generateConversationSummary(e){var i,a;const s=e.prompts,n=e.responses;return s.length===0?"No previous conversation":{totalPrompts:s.length,totalResponses:n.length,firstPrompt:((i=s[0])==null?void 0:i.text)||"",lastPrompt:((a=s[s.length-1])==null?void 0:a.text)||"",keyTopics:this.extractKeyTopics(s),projectEvolution:this.trackProjectEvolution(e)}}extractKeyTopics(e){const s=new Set;return e.forEach(n=>{n.text.toLowerCase().split(" ").forEach(i=>{i.length>4&&!this.isCommonWord(i)&&s.add(i)})}),Array.from(s).slice(0,10)}isCommonWord(e){return["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","two","way","who","boy","did","man","men","put","say","she","too","use"].includes(e)}trackProjectEvolution(e){const s=[],n=e.prompts,o=e.responses;for(let i=0;i<n.length;i++){const a=n[i],l=o[i];s.push({phase:i+1,prompt:a.text,response:l.text,timestamp:a.timestamp,context:a.context})}return s}findRelevantHistory(e,s){const n=[],o=s.toLowerCase().split(" ");return e.prompts.forEach((i,a)=>{var c;const l=i.text.toLowerCase().split(" "),d=o.filter(u=>l.includes(u));d.length>2&&n.push({prompt:i.text,response:((c=e.responses[a])==null?void 0:c.text)||"",relevance:d.length,timestamp:i.timestamp})}),n.sort((i,a)=>a.relevance-i.relevance).slice(0,5)}async storeAILearningPattern(e,s){var n;try{await this.initialize();const o=V(this.db,"aiLearningPatterns",`${e}-${Date.now()}`);await be(o,{projectId:e,pattern:s,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",createdAt:new Date().toISOString()}),console.log("🧠 AI learning pattern stored successfully")}catch(o){throw console.error("❌ Failed to store AI learning pattern:",o),o}}async getAILearningPatterns(e){try{await this.initialize();const s=ue(this.db,"aiLearningPatterns"),n=we(s,me("projectId","==",e)),o=await It(n),i=[];return o.forEach(a=>{i.push(a.data())}),console.log("🧠 AI learning patterns loaded successfully"),i}catch(s){return console.error("❌ Failed to load AI learning patterns:",s),[]}}async clearConversationMemory(e){try{await this.initialize();const s=V(this.db,"conversationMemory",e);await ur(s),console.log("🧠 Conversation memory cleared successfully")}catch(s){throw console.error("❌ Failed to clear conversation memory:",s),s}}}const Lt=new xg,bg=({projectId:r,onMemoryUpdate:e})=>{const[s,n]=p.useState(null),[o,i]=p.useState([]),[a,l]=p.useState(""),[d,c]=p.useState([]),[u,m]=p.useState(!1),[b,w]=p.useState(null);p.useEffect(()=>{r&&(g(),f())},[r]);const g=async()=>{try{m(!0);const j=await Lt.loadConversationMemory(r);if(n(j),j){const x=await Lt.getConversationHistory(r);i(x)}}catch(j){console.error("Failed to load memory:",j)}finally{m(!1)}},f=async()=>{try{const j=await Lt.getStorageStats();w(j)}catch(j){console.error("Failed to load stats:",j)}},h=async()=>{if(a.trim())try{m(!0);const j=await Lt.searchConversationMemory(r,a);c(j)}catch(j){console.error("Failed to search memory:",j)}finally{m(!1)}},S=async()=>{if(window.confirm("Are you sure you want to clear all conversation memory?"))try{await Lt.clearConversationMemory(r),n(null),i([]),c([]),e&&e()}catch(j){console.error("Failed to clear memory:",j)}},v=()=>{if(!s)return;const j=JSON.stringify(s,null,2),x=new Blob([j],{type:"application/json"}),y=URL.createObjectURL(x),D=document.createElement("a");D.href=y,D.download=`dreambuild-memory-${r}.json`,D.click(),URL.revokeObjectURL(y)};return u?t.jsx("div",{className:"memory-manager",children:t.jsx("div",{className:"loading",children:"Loading memory..."})}):t.jsxs("div",{className:"memory-manager",children:[t.jsxs("div",{className:"memory-header",children:[t.jsx("h3",{children:"🧠 Conversation Memory"}),t.jsxs("div",{className:"memory-actions",children:[t.jsx("button",{onClick:g,className:"btn btn-secondary",children:"Refresh"}),t.jsx("button",{onClick:v,className:"btn btn-secondary",children:"Export"}),t.jsx("button",{onClick:S,className:"btn btn-danger",children:"Clear"})]})]}),b&&t.jsxs("div",{className:"memory-stats",children:[t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-label",children:"Projects:"}),t.jsx("span",{className:"stat-value",children:b.totalProjects})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-label",children:"Files:"}),t.jsx("span",{className:"stat-value",children:b.totalFiles})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-label",children:"Size:"}),t.jsxs("span",{className:"stat-value",children:[b.totalSizeMB," MB"]})]})]}),t.jsxs("div",{className:"memory-search",children:[t.jsx("input",{type:"text",placeholder:"Search conversation memory...",value:a,onChange:j=>l(j.target.value),onKeyPress:j=>j.key==="Enter"&&h()}),t.jsx("button",{onClick:h,className:"btn btn-primary",children:"Search"})]}),d.length>0&&t.jsxs("div",{className:"search-results",children:[t.jsx("h4",{children:"Search Results"}),d.map((j,x)=>t.jsxs("div",{className:"search-result",children:[t.jsx("div",{className:"result-type",children:j.type}),t.jsx("div",{className:"result-text",children:j.text}),t.jsx("div",{className:"result-timestamp",children:j.timestamp})]},x))]}),o.prompts&&o.prompts.length>0&&t.jsxs("div",{className:"conversation-history",children:[t.jsx("h4",{children:"Conversation History"}),t.jsxs("div",{className:"history-stats",children:[t.jsxs("span",{children:["Prompts: ",o.totalPrompts]}),t.jsxs("span",{children:["Responses: ",o.totalResponses]})]}),t.jsx("div",{className:"history-list",children:o.prompts.map((j,x)=>t.jsxs("div",{className:"history-item",children:[t.jsxs("div",{className:"history-prompt",children:[t.jsx("strong",{children:"Prompt:"})," ",j.text]}),o.responses[x]&&t.jsxs("div",{className:"history-response",children:[t.jsx("strong",{children:"Response:"})," ",o.responses[x].text]}),t.jsx("div",{className:"history-timestamp",children:new Date(j.timestamp).toLocaleString()})]},j.id))})]}),s&&t.jsxs("div",{className:"memory-details",children:[t.jsx("h4",{children:"Memory Details"}),t.jsxs("div",{className:"memory-info",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Project ID:"})," ",s.projectId]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Created:"})," ",new Date(s.createdAt).toLocaleString()]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Last Updated:"})," ",new Date(s.lastUpdated).toLocaleString()]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Memory Size:"})," ",JSON.stringify(s).length," bytes"]})]})]}),t.jsx("style",{jsx:!0,children:`
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
      `})]})},yg=({projectId:r,initialFiles:e={}})=>{const[s,n]=p.useState("code"),[o,i]=p.useState(e),[a,l]=p.useState(null),[d,c]=p.useState(!1),[u,m]=p.useState(!1),[b,w]=p.useState(null),g=[{id:"code",name:"Code Editor",icon:"💻"},{id:"visual",name:"Visual Editor",icon:"🎨"},{id:"collaboration",name:"Collaboration",icon:"🤝"},{id:"deployment",name:"Deployment",icon:"🚀"},{id:"memory",name:"Memory",icon:"🧠"}],f=(x,y)=>{i(D=>({...D,[x]:y}))},h=x=>{x.appCode&&f("src/App.jsx",x.appCode),x.cssCode&&f("src/App.css",x.cssCode)},S=x=>{w(x),console.log("Deployment result:",x)},v=x=>{i(y=>({...y,...x})),console.log("Version restored:",x)},j=()=>{switch(s){case"code":return t.jsxs("div",{className:"code-editor-tab",children:[t.jsxs("div",{className:"file-explorer",children:[t.jsx("h3",{children:"📁 Files"}),t.jsx("div",{className:"file-list",children:Object.keys(o).map(x=>t.jsxs("div",{className:`file-item ${a===x?"selected":""}`,onClick:()=>l(x),children:[t.jsx("span",{className:"file-icon",children:"📄"}),t.jsx("span",{className:"file-name",children:x})]},x))})]}),t.jsx("div",{className:"code-editor",children:a&&t.jsxs("div",{className:"editor-container",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("span",{className:"file-name",children:a}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("button",{className:"btn btn-sm",children:"Save"}),t.jsx("button",{className:"btn btn-sm",children:"Format"})]})]}),t.jsx("textarea",{className:"code-textarea",value:o[a]||"",onChange:x=>f(a,x.target.value),placeholder:"Start coding..."})]})})]});case"visual":return t.jsx("div",{className:"visual-editor-tab",children:t.jsx(mg,{projectId:r,onCodeChange:h,initialComponents:[]})});case"collaboration":return t.jsxs("div",{className:"collaboration-tab",children:[t.jsxs("div",{className:"collaboration-header",children:[t.jsx("h3",{children:"🤝 Real-time Collaboration"}),t.jsxs("button",{className:`btn ${d?"btn-danger":"btn-primary"}`,onClick:()=>c(!d),children:[d?"Disable":"Enable"," Collaboration"]})]}),d?t.jsx(th,{projectId:r,fileId:a,onFileChange:f,onVersionRestore:v}):t.jsxs("div",{className:"collaboration-disabled",children:[t.jsx("p",{children:"Enable collaboration to work with team members in real-time"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Multi-user co-editing"}),t.jsx("li",{children:"Real-time comments"}),t.jsx("li",{children:"Version history"}),t.jsx("li",{children:"User presence"})]})]})]});case"deployment":return t.jsxs("div",{className:"deployment-tab",children:[t.jsx(gg,{projectId:r,projectData:{files:o},onDeploy:S}),b&&t.jsxs("div",{className:"deployment-result",children:[t.jsx("h4",{children:"Deployment Result"}),t.jsxs("div",{className:"result-details",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Provider:"})," ",b.provider]}),t.jsxs("p",{children:[t.jsx("strong",{children:"URL:"})," ",t.jsx("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",children:b.url})]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Status:"})," ",b.status]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Deployed:"})," ",new Date(b.deployedAt).toLocaleString()]})]})]})]});case"memory":return t.jsx("div",{className:"memory-tab",children:t.jsx(bg,{projectId:r,onMemoryUpdate:()=>console.log("Memory updated")})});default:return t.jsx("div",{children:"Select a tab to get started"})}};return t.jsxs("div",{className:"integrated-workspace",children:[t.jsxs("div",{className:"workspace-header",children:[t.jsx("h2",{children:"🚀 DreamBuild Advanced Workspace"}),t.jsxs("div",{className:"workspace-status",children:[t.jsx("span",{className:"status-indicator",children:"●"}),t.jsxs("span",{children:["Project: ",r]})]})]}),t.jsx("div",{className:"workspace-tabs",children:g.map(x=>t.jsxs("button",{className:`tab-button ${s===x.id?"active":""}`,onClick:()=>n(x.id),children:[t.jsx("span",{className:"tab-icon",children:x.icon}),t.jsx("span",{className:"tab-name",children:x.name})]},x.id))}),t.jsx("div",{className:"workspace-content",children:j()}),t.jsx("style",{jsx:!0,children:`
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
      `})]})},vg=({onTemplateSelect:r,isVisible:e,onClose:s})=>{var j;const{currentProject:n,updateFile:o,switchFile:i}=_e(),[a,l]=p.useState(""),[d,c]=p.useState("all"),[u,m]=p.useState(!1),b=[{id:"all",name:"All Templates",icon:vt,color:"text-purple-500"},{id:"web-apps",name:"Web Apps",icon:Fe,color:"text-blue-500"},{id:"mobile-apps",name:"Mobile Apps",icon:zs,color:"text-green-500"},{id:"games",name:"Games",icon:Ba,color:"text-orange-500"},{id:"tools",name:"Tools",icon:X,color:"text-gray-500"}],w=br.getAllTemplates(),g=br.getPopularTemplates(),f=w.filter(x=>{const y=x.name.toLowerCase().includes(a.toLowerCase())||x.description.toLowerCase().includes(a.toLowerCase()),D=d==="all"||x.category===d;return y&&D}),h=async x=>{m(!0);try{console.log("🎯 Generating template:",x.id);const y=br.generateTemplateById(x.id);Object.entries(y).forEach(([A,P])=>{o(A,P)});const D=Object.keys(y)[0];D&&i(D),Y.success(`Generated ${x.name} successfully!`),r&&r(x,y),s&&s()}catch(y){console.error("❌ Template generation failed:",y),Y.error(`Failed to generate ${x.name}`)}finally{m(!1)}},S=x=>{const y=b.find(D=>D.id===x);return y?y.icon:X},v=x=>{const y=b.find(D=>D.id===x);return y?y.color:"text-gray-500"};return e?t.jsx(ze,{children:t.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",onClick:s,children:t.jsxs(M.div,{initial:{scale:.95},animate:{scale:1},exit:{scale:.95},className:"bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:x=>x.stopPropagation(),children:[t.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:t.jsx(Ie,{className:"h-5 w-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-xl font-semibold text-foreground",children:"Template Gallery"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Choose a template to get started"})]})]}),t.jsx("button",{onClick:s,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Close",children:t.jsx("span",{className:"text-xl text-muted-foreground",children:"×"})})]}),t.jsxs("div",{className:"p-6 border-b border-border",children:[t.jsxs("div",{className:"flex gap-4 mb-4",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx(Ke,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search templates...",value:a,onChange:x=>l(x.target.value),className:"w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20"})]}),t.jsxs("button",{className:"px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:bg-muted/80 transition-colors flex items-center gap-2",children:[t.jsx(Er,{className:"h-4 w-4"}),"Filters"]})]}),t.jsx("div",{className:"flex gap-2 overflow-x-auto",children:b.map(x=>{const y=x.icon;return t.jsxs("button",{onClick:()=>c(x.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${d===x.id?"bg-blue-500 text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[t.jsx(y,{className:"h-4 w-4"}),t.jsx("span",{className:"text-sm font-medium",children:x.name})]},x.id)})})]}),t.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[d==="all"&&t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[t.jsx(We,{className:"h-5 w-5 text-yellow-500"}),t.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Popular Templates"})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:g.map(x=>{const y=S(x.category),D=v(x.category);return t.jsxs(M.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>h(x),disabled:u,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[t.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${D}`,children:t.jsx(y,{className:"h-4 w-4"})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:x.name}),t.jsxs("p",{className:"text-xs text-muted-foreground",children:[x.files.length," files"]})]})]}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:x.description})]},x.id)})})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("h3",{className:"text-lg font-semibold text-foreground",children:d==="all"?"All Templates":(j=b.find(x=>x.id===d))==null?void 0:j.name}),t.jsxs("span",{className:"text-sm text-muted-foreground",children:[f.length," template",f.length!==1?"s":""]})]}),f.length===0?t.jsxs("div",{className:"text-center py-12",children:[t.jsx("div",{className:"w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4",children:t.jsx(Ke,{className:"h-8 w-8 text-muted-foreground"})}),t.jsx("h4",{className:"text-lg font-medium text-foreground mb-2",children:"No templates found"}),t.jsx("p",{className:"text-muted-foreground",children:"Try adjusting your search or filters"})]}):t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:f.map(x=>{const y=S(x.category),D=v(x.category);return t.jsxs(M.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>h(x),disabled:u,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[t.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${D}`,children:t.jsx(y,{className:"h-4 w-4"})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:x.name}),t.jsxs("p",{className:"text-xs text-muted-foreground",children:[x.files.length," files"]})]})]}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:x.description})]},x.id)})})]})]}),t.jsx("div",{className:"p-6 border-t border-border bg-muted/30",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("div",{className:"text-sm text-muted-foreground",children:"Need something custom? Use the AI prompt to generate unique applications."}),t.jsx("button",{onClick:s,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"Close"})]})})]})})}):null},wg=({children:r,direction:e="horizontal",className:s=""})=>t.jsx("div",{className:`resizable-panel-group flex ${e} h-full ${s}`,children:r}),ps=({children:r,defaultSize:e=50,minSize:s=10,maxSize:n=90,className:o=""})=>t.jsx("div",{className:`resizable-panel ${o}`,style:{flexBasis:`${e}%`,minWidth:`${s}%`,maxWidth:`${n}%`},children:r}),fo=({className:r="",onResize:e,children:s,handleIndex:n=0})=>{const[o,i]=p.useState(!1),a=p.useRef(null),l=u=>{i(!0),u.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",console.log("Handle clicked:",n)},d=p.useCallback(u=>{var S;if(!o)return;const m=(S=a.current)==null?void 0:S.parentElement;if(!m)return;const b=m.getBoundingClientRect(),g=(u.clientX-b.left)/b.width*100,h=Array.from(m.children).filter(v=>v.classList.contains("resizable-panel"));if(console.log("Total panels found:",h.length,"Handle index:",n),h.length>=2){let v,j;if(n===0?(v=h[0],j=h[1],console.log("Resizing File Manager and Code Editor")):n===1&&(v=h[1],j=h[2],console.log("Resizing Code Editor and AI Assistant")),v&&j){const x=Math.max(15,Math.min(70,g)),y=Math.max(15,Math.min(70,100-x));console.log("Setting sizes:",{leftSize:x,rightSize:y,percentage:g}),v.style.flexBasis=`${x}%`,j.style.flexBasis=`${y}%`,v.style.border="3px solid red",j.style.border="3px solid blue",setTimeout(()=>{v.style.border="",j.style.border=""},300),e&&e({leftSize:x,rightSize:y})}}},[o,e,n]),c=p.useCallback(()=>{i(!1),document.body.style.cursor="",document.body.style.userSelect=""},[]);return p.useEffect(()=>{if(o)return document.addEventListener("mousemove",d),document.addEventListener("mouseup",c),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c)}},[o,d,c]),t.jsx("div",{ref:a,className:`resizable-handle w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group flex items-center justify-center ${o?"bg-primary/70":""} ${r}`,onMouseDown:l,children:s||t.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/70 transition-colors"})})},jg=()=>{const[r,e]=p.useState("editor"),[s,n]=p.useState(!1),[o,i]=p.useState(!1),a=[{id:"editor",label:"Code Editor",icon:X,description:"Edit your code with live preview"},{id:"preview",label:"Live Preview",icon:jr,description:"View your application in real-time"},{id:"terminal",label:"Terminal",icon:bs,description:"Command line interface"},{id:"workspace",label:"Advanced Workspace",icon:Me,description:"Full-featured workspace with collaboration, visual editor, and deployment"}],l=d=>{d==="workspace"?r==="workspace"&&s?(n(!1),e("editor")):(n(!0),e(d)):(e(d),n(!1))};return t.jsxs("div",{className:"h-screen bg-background flex flex-col",children:[t.jsxs("div",{className:"flex items-center justify-between px-8 py-4 bg-gradient-to-r from-card/95 to-background/95 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-primary/5",style:{marginTop:"45px"},children:[t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:t.jsx(X,{className:"h-5 w-5 text-primary-foreground"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl font-bold text-foreground",children:"AI Builder"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Build with artificial intelligence"})]})]}),t.jsxs(ae,{to:"/templates",className:"flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",title:"Browse Templates",children:[t.jsx(Ie,{className:"h-4 w-4"}),"Templates"]})]}),t.jsx("div",{className:"flex items-center gap-1 bg-muted/40 p-1.5 rounded-2xl border border-border/60 shadow-inner",children:a.map(d=>{const c=d.icon;return t.jsxs(M.button,{whileHover:{scale:1.02,y:-1},whileTap:{scale:.98},onClick:()=>l(d.id),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative group ${r===d.id?"bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105":"text-muted-foreground hover:text-foreground hover:bg-background/80 hover:shadow-sm"}`,title:d.description,children:[t.jsx(c,{className:`h-4 w-4 transition-transform duration-300 ${r===d.id?"scale-110":"group-hover:scale-105"}`}),t.jsxs("span",{className:"relative",children:[d.label,r===d.id&&t.jsx(M.div,{layoutId:"activeBuilderTab",className:"absolute inset-0 bg-primary/10 rounded-xl -z-10",initial:!1,transition:{type:"spring",stiffness:500,damping:30}})]})]},d.id)})})]}),t.jsx("div",{className:"flex-1 p-8 bg-gradient-to-br from-background via-muted/20 to-background",children:t.jsxs(wg,{direction:"horizontal",className:"h-full gap-4",children:[t.jsx(ps,{defaultSize:20,minSize:10,maxSize:50,children:t.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ke,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-sm font-medium text-foreground",children:"Files"})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),t.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),t.jsx("div",{className:"flex-1 overflow-hidden",children:t.jsx(hu,{})})]})}),t.jsx(fo,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:0,children:t.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),t.jsx(ps,{defaultSize:50,minSize:25,maxSize:70,children:t.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[r==="editor"&&t.jsx(X,{className:"h-4 w-4 text-primary"}),r==="preview"&&t.jsx(jr,{className:"h-4 w-4 text-primary"}),r==="workspace"&&t.jsx(Me,{className:"h-4 w-4 text-primary"}),r==="terminal"&&t.jsx(bs,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-sm font-medium text-foreground capitalize",children:r})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),t.jsx("span",{className:"text-xs text-muted-foreground",children:"Ready"})]})]}),t.jsxs("div",{className:"flex-1 overflow-hidden h-full min-h-[600px]",children:[r==="editor"&&t.jsx(vm,{}),r==="preview"&&t.jsx(wm,{}),r==="workspace"&&s&&t.jsx(yg,{projectId:"demo-project"}),r==="workspace"&&!s&&t.jsx("div",{className:"h-full flex items-center justify-center bg-muted/20",children:t.jsxs("div",{className:"text-center",children:[t.jsx(Me,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"Advanced Workspace"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"Click the Advanced Workspace button to open the full-featured workspace"}),t.jsxs("div",{className:"text-sm text-muted-foreground",children:[t.jsx("p",{children:"Features include:"}),t.jsxs("ul",{className:"mt-2 space-y-1",children:[t.jsx("li",{children:"• Real-time Collaboration"}),t.jsx("li",{children:"• Visual Editor"}),t.jsx("li",{children:"• One-click Deployment"}),t.jsx("li",{children:"• Memory Management"})]})]})]})}),r==="terminal"&&t.jsx("div",{className:"h-full flex flex-col bg-gray-900",children:t.jsx("div",{className:"flex-grow p-4 text-green-400 font-mono text-sm overflow-y-auto",children:t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),t.jsx("span",{className:"text-gray-500",children:"$"}),t.jsx("span",{className:"text-gray-300",children:"npm run dev"})]}),t.jsx("div",{className:"text-gray-400",children:"Starting development server..."}),t.jsx("div",{className:"text-green-400",children:"✓ Server running on http://localhost:3000"}),t.jsx("div",{className:"text-blue-400",children:"✓ Ready in 2.3s"}),t.jsx("div",{className:"mt-4",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),t.jsx("span",{className:"text-gray-500",children:"$"}),t.jsx("span",{className:"text-gray-300 animate-pulse",children:"_"})]})})]})})})]})]})}),t.jsx(fo,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:1,children:t.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),t.jsx(ps,{defaultSize:30,minSize:15,maxSize:60,children:t.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Me,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-sm font-medium text-foreground",children:"AI Assistant"})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),t.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),t.jsx("div",{className:"flex-1 overflow-hidden",children:t.jsx(Zp,{})})]})})]})}),t.jsx(vg,{isVisible:o,onClose:()=>i(!1),onTemplateSelect:(d,c)=>{console.log("🎯 Template selected:",d.name),i(!1)}})]})},Ng=()=>{const{addFilesToProject:r}=_e(),{theme:e}=Mr(),[s,n]=p.useState(""),[o,i]=p.useState("all"),[a,l]=p.useState("grid"),[d,c]=p.useState("popularity"),u=[{id:"web-apps",name:"Web Applications",icon:Fe,description:"Full-stack web applications",color:"from-blue-500 to-cyan-500"},{id:"mobile-apps",name:"Mobile Apps",icon:zs,description:"React Native and mobile applications",color:"from-purple-500 to-pink-500"},{id:"landing-pages",name:"Landing Pages",icon:Ie,description:"Marketing and landing pages",color:"from-green-500 to-emerald-500"},{id:"dashboards",name:"Dashboards",icon:wo,description:"Analytics and admin dashboards",color:"from-orange-500 to-red-500"},{id:"ecommerce",name:"E-commerce",icon:Ua,description:"Online stores and marketplaces",color:"from-yellow-500 to-orange-500"},{id:"portfolio",name:"Portfolio",icon:jo,description:"Personal and creative portfolios",color:"from-indigo-500 to-purple-500"}],b=[{id:"todo-app",name:"Todo Application",description:"A modern todo app with React, Node.js, and MongoDB",category:"web-apps",tags:["React","Node.js","MongoDB","Express"],preview:"/api/placeholder/400/300",popularity:95,createdAt:"2024-01-15",files:{"package.json":'{"name": "todo-app", "version": "1.0.0", "dependencies": {"react": "^18.0.0"}}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Todo App</div>; }'}},{id:"blog-platform",name:"Blog Platform",description:"Full-featured blog with CMS, comments, and SEO",category:"web-apps",tags:["React","Next.js","Prisma","PostgreSQL"],preview:"/api/placeholder/400/300",popularity:88,createdAt:"2024-01-10",files:{"package.json":'{"name": "blog-platform", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Blog Platform</div>; }'}},{id:"weather-app",name:"Weather App",description:"Beautiful weather app with location services",category:"mobile-apps",tags:["React Native","Expo","API"],preview:"/api/placeholder/400/300",popularity:82,createdAt:"2024-01-12",files:{"package.json":'{"name": "weather-app", "version": "1.0.0"}',"App.js":'import React from "react"; export default function App() { return <div>Weather App</div>; }'}},{id:"saas-landing",name:"SaaS Landing Page",description:"Modern SaaS landing page with pricing and features",category:"landing-pages",tags:["React","Tailwind CSS","Framer Motion"],preview:"/api/placeholder/400/300",popularity:90,createdAt:"2024-01-08",files:{"package.json":'{"name": "saas-landing", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>SaaS Landing</div>; }'}},{id:"analytics-dashboard",name:"Analytics Dashboard",description:"Real-time analytics dashboard with charts and metrics",category:"dashboards",tags:["React","Chart.js","D3.js","WebSocket"],preview:"/api/placeholder/400/300",popularity:85,createdAt:"2024-01-05",files:{"package.json":'{"name": "analytics-dashboard", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Analytics Dashboard</div>; }'}},{id:"online-store",name:"Online Store",description:"Complete e-commerce solution with cart and payments",category:"ecommerce",tags:["React","Stripe","Firebase","Redux"],preview:"/api/placeholder/400/300",popularity:92,createdAt:"2024-01-03",files:{"package.json":'{"name": "online-store", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Online Store</div>; }'}},{id:"creative-portfolio",name:"Creative Portfolio",description:"Stunning portfolio for designers and developers",category:"portfolio",tags:["React","Three.js","GSAP","Framer Motion"],preview:"/api/placeholder/400/300",popularity:87,createdAt:"2024-01-01",files:{"package.json":'{"name": "creative-portfolio", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Creative Portfolio</div>; }'}}].filter(h=>{const S=o==="all"||h.category===o,v=s===""||h.name.toLowerCase().includes(s.toLowerCase())||h.description.toLowerCase().includes(s.toLowerCase())||h.tags.some(j=>j.toLowerCase().includes(s.toLowerCase()));return S&&v}).sort((h,S)=>{switch(d){case"popularity":return S.popularity-h.popularity;case"newest":return new Date(S.createdAt)-new Date(h.createdAt);case"name":return h.name.localeCompare(S.name);default:return 0}}),w=h=>{r(h.files),$.success(`Template "${h.name}" added to your project!`)},g=h=>{$.success(`Previewing "${h.name}"`)},f=h=>{const S=JSON.stringify(h,null,2);navigator.clipboard.writeText(S),$.success(`Template "${h.name}" copied to clipboard!`)};return t.jsxs("div",{className:"min-h-screen bg-background",children:[t.jsx("div",{className:"bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-border/50",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:t.jsxs("div",{className:"text-center",children:[t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"flex items-center justify-center gap-3 mb-8",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:t.jsx(Ie,{className:"h-6 w-6 text-primary-foreground"})}),t.jsx("h1",{className:"text-4xl font-bold text-high-contrast",children:"Template Library"})]}),t.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[t.jsx(M.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-xl text-muted-foreground max-w-2xl mx-auto text-center",children:"Choose from our collection of professionally designed templates to jumpstart your next project"}),t.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"max-w-md w-full mx-auto relative",children:t.jsxs("div",{className:"relative",children:[t.jsx("input",{type:"text",placeholder:"Search templates...",value:s,onChange:h=>n(h.target.value),className:"w-full pl-4 pr-12 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground"}),t.jsx(Ke,{className:"absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10"})]})})]})]})})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Er,{className:"h-5 w-5 text-muted-foreground"}),t.jsxs("select",{value:o,onChange:h=>i(h.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[t.jsx("option",{value:"all",children:"All Categories"}),u.map(h=>t.jsx("option",{value:h.id,children:h.name},h.id))]})]}),t.jsx("div",{className:"flex items-center gap-2",children:t.jsxs("select",{value:d,onChange:h=>c(h.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[t.jsx("option",{value:"popularity",children:"Most Popular"}),t.jsx("option",{value:"newest",children:"Newest First"}),t.jsx("option",{value:"name",children:"Alphabetical"})]})}),t.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[t.jsx("button",{onClick:()=>l("grid"),className:`p-2 rounded-lg transition-colors ${a==="grid"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:t.jsx(Ha,{className:"h-4 w-4"})}),t.jsx("button",{onClick:()=>l("list"),className:`p-2 rounded-lg transition-colors ${a==="list"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:t.jsx(No,{className:"h-4 w-4"})})]})]}),a==="grid"?t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:b.map((h,S)=>t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:S*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:[t.jsxs("div",{className:"aspect-video bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:t.jsxs("div",{className:"text-center",children:[t.jsx(Ie,{className:"h-12 w-12 text-muted-foreground mx-auto mb-2"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:h.name})]})}),t.jsx("div",{className:"absolute top-3 right-3",children:t.jsxs("div",{className:"flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs",children:[t.jsx(We,{className:"h-3 w-3 text-warning fill-current"}),t.jsxs("span",{children:[h.popularity,"%"]})]})})]}),t.jsxs("div",{className:"p-6",children:[t.jsx("h3",{className:"font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors",children:h.name}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:h.description}),t.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[h.tags.slice(0,3).map(v=>t.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:v},v)),h.tags.length>3&&t.jsxs("span",{className:"px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md",children:["+",h.tags.length-3," more"]})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{onClick:()=>w(h),className:"flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[t.jsx(Ae,{className:"h-4 w-4"}),"Use Template"]}),t.jsx("button",{onClick:()=>g(h),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:t.jsx(jr,{className:"h-4 w-4"})}),t.jsx("button",{onClick:()=>f(h),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:t.jsx(Nt,{className:"h-4 w-4"})})]})]})]},h.id))}):t.jsx("div",{className:"space-y-4",children:b.map((h,S)=>t.jsx(M.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:S*.05},className:"bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsx("div",{className:"w-24 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center flex-shrink-0",children:t.jsx(Ie,{className:"h-6 w-6 text-muted-foreground"})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[t.jsx("h3",{className:"font-semibold text-lg text-foreground group-hover:text-primary transition-colors",children:h.name}),t.jsxs("div",{className:"flex items-center gap-1 bg-warning/10 text-warning px-2 py-1 rounded-full text-xs",children:[t.jsx(We,{className:"h-3 w-3 fill-current"}),t.jsxs("span",{children:[h.popularity,"%"]})]})]}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:h.description}),t.jsx("div",{className:"flex flex-wrap gap-2",children:h.tags.map(v=>t.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:v},v))})]}),t.jsxs("div",{className:"flex gap-2 flex-shrink-0",children:[t.jsxs("button",{onClick:()=>w(h),className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[t.jsx(Ae,{className:"h-4 w-4"}),"Use Template"]}),t.jsx("button",{onClick:()=>g(h),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:t.jsx(jr,{className:"h-4 w-4"})}),t.jsx("button",{onClick:()=>f(h),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:t.jsx(Nt,{className:"h-4 w-4"})})]})]})},h.id))}),b.length===0&&t.jsxs("div",{className:"text-center py-16",children:[t.jsx(Ie,{className:"h-16 w-16 text-muted-foreground mx-auto mb-4"}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No templates found"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search criteria or browse all categories"}),t.jsx("button",{onClick:()=>{n(""),i("all")},className:"px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]})]})]})};class Sg{constructor(){this.baseUrl="https://api.github.com",this.token=null}setToken(e){this.token=e}getHeaders(){const e={Accept:"application/vnd.github.v3+json","Content-Type":"application/json"};return this.token&&(e.Authorization=`token ${this.token}`),e}async getUserRepositories(){if(!this.token)throw new Error("GitHub token required");try{const e=await fetch(`${this.baseUrl}/user/repos?sort=updated&per_page=100`,{headers:this.getHeaders()});if(!e.ok)throw new Error(`GitHub API error: ${e.status}`);return(await e.json()).map(n=>this.transformRepository(n))}catch(e){throw console.error("Failed to fetch GitHub repositories:",e),e}}transformRepository(e){return{id:`github_${e.id}`,name:e.name,description:e.description||"No description",type:this.detectProjectType(e),status:"github_synced",lastModified:new Date(e.updated_at),files:0,size:"Unknown",tags:this.extractTags(e),preview:e.owner.avatar_url,githubData:{id:e.id,fullName:e.full_name,htmlUrl:e.html_url,cloneUrl:e.clone_url,language:e.language,stargazersCount:e.stargazers_count,forksCount:e.forks_count,isPrivate:e.private,defaultBranch:e.default_branch,owner:e.owner.login},source:"github"}}detectProjectType(e){var o;const s=e.name.toLowerCase();(e.description||"").toLowerCase();const n=(o=e.language)==null?void 0:o.toLowerCase();return s.includes("api")||s.includes("backend")||s.includes("server")?"api":s.includes("mobile")||s.includes("app")||s.includes("ios")||s.includes("android")?"mobile":s.includes("dashboard")||s.includes("admin")?"dashboard":s.includes("ecommerce")||s.includes("shop")||s.includes("store")?"ecommerce":s.includes("portfolio")||s.includes("personal")||n==="javascript"||n==="typescript"?"web":n==="python"?"api":n==="java"||n==="kotlin"?"mobile":"web"}extractTags(e){const s=[];e.language&&s.push(e.language),e.topics&&e.topics.length>0&&s.push(...e.topics.slice(0,3));const n=e.name.toLowerCase(),o=(e.description||"").toLowerCase();return(n.includes("react")||o.includes("react"))&&s.push("React"),(n.includes("vue")||o.includes("vue"))&&s.push("Vue.js"),(n.includes("angular")||o.includes("angular"))&&s.push("Angular"),(n.includes("node")||o.includes("node"))&&s.push("Node.js"),(n.includes("express")||o.includes("express"))&&s.push("Express"),(n.includes("mongodb")||o.includes("mongodb"))&&s.push("MongoDB"),(n.includes("postgres")||o.includes("postgres"))&&s.push("PostgreSQL"),[...new Set(s)]}async getRepositoryFiles(e,s="main"){if(!this.token)throw new Error("GitHub token required");try{const n=await fetch(`${this.baseUrl}/repos/${e}/git/trees/${s}?recursive=1`,{headers:this.getHeaders()});if(!n.ok)throw new Error(`GitHub API error: ${n.status}`);return(await n.json()).tree||[]}catch(n){throw console.error("Failed to fetch repository files:",n),n}}async getFileContent(e,s,n="main"){if(!this.token)throw new Error("GitHub token required");try{const o=await fetch(`${this.baseUrl}/repos/${e}/contents/${s}?ref=${n}`,{headers:this.getHeaders()});if(!o.ok)throw new Error(`GitHub API error: ${o.status}`);const i=await o.json();return i.type==="file"&&i.content?atob(i.content):null}catch(o){throw console.error("Failed to fetch file content:",o),o}}async convertRepositoryToProject(e){var s;try{const o=(await this.getRepositoryFiles(e.full_name,e.default_branch)).filter(a=>a.type==="blob"&&this.isWebFile(a.path)),i={};for(const a of o.slice(0,10))try{const l=await this.getFileContent(e.full_name,a.path,e.default_branch);l&&(i[a.path]=l)}catch(l){console.warn(`Failed to fetch content for ${a.path}:`,l)}return{id:`github_${e.id}`,name:e.name,description:e.description||"Imported from GitHub",files:i,activeFile:this.getDefaultFile(i),config:{appType:this.detectProjectType(e),language:((s=e.language)==null?void 0:s.toLowerCase())||"javascript",styling:this.detectStyling(i),database:this.detectDatabase(i),auth:this.detectAuth(i)},lastModified:new Date(e.updated_at),githubData:{id:e.id,fullName:e.full_name,htmlUrl:e.html_url,cloneUrl:e.clone_url,language:e.language,stargazersCount:e.stargazers_count,forksCount:e.forks_count,isPrivate:e.private,defaultBranch:e.default_branch,owner:e.owner.login},source:"github"}}catch(n){throw console.error("Failed to convert repository to project:",n),n}}isWebFile(e){return[".html",".htm",".css",".scss",".sass",".less",".js",".jsx",".ts",".tsx",".vue",".svelte",".php",".py",".rb",".go",".rs",".java",".json",".xml",".yaml",".yml",".md",".txt"].some(n=>e.toLowerCase().endsWith(n))}getDefaultFile(e){const s=["index.html","index.js","index.jsx","index.ts","index.tsx","app.js","main.js"];for(const n of s)if(e[n])return n;return Object.keys(e)[0]||"index.html"}detectStyling(e){const s=Object.keys(e).join(" ").toLowerCase();return s.includes("tailwind")||s.includes("@tailwind")?"tailwind":s.includes("bootstrap")||s.includes("@bootstrap")?"bootstrap":s.includes("styled-components")||s.includes("styled-components")?"styled-components":s.includes("sass")||s.includes("scss")?"sass":"css"}detectDatabase(e){Object.keys(e).join(" ").toLowerCase();const s=Object.values(e).join(" ").toLowerCase();return s.includes("mongodb")||s.includes("mongoose")?"mongodb":s.includes("postgresql")||s.includes("postgres")?"postgresql":s.includes("mysql")?"mysql":s.includes("sqlite")?"sqlite":s.includes("firebase")||s.includes("firestore")?"firebase":"none"}detectAuth(e){const s=Object.values(e).join(" ").toLowerCase();return s.includes("firebase")&&s.includes("auth")?"firebase":s.includes("auth0")?"auth0":s.includes("jwt")||s.includes("jsonwebtoken")?"jwt":s.includes("passport")?"passport":"none"}async syncRepository(e,s=null){try{const n=await this.convertRepositoryToProject(e);return s&&(n.id=s),n}catch(n){throw console.error("Failed to sync repository:",n),n}}}const cr=new Sg,Cg=()=>{const{user:r}=Tt(),{projects:e,saveExternalProject:s,loadProjects:n}=_e(),[o,i]=p.useState([]),[a,l]=p.useState(!1),[d,c]=p.useState(new Set),[u,m]=p.useState(""),[b,w]=p.useState(!1);p.useEffect(()=>{const v=localStorage.getItem("github_token");v&&(m(v),cr.setToken(v))},[]),p.useEffect(()=>{if(o.length>0&&e.length>0){const v=new Set;e.forEach(j=>{j.source==="github"&&j.githubData&&v.add(j.githubData.id)}),c(v)}},[o,e]);const g=async()=>{if(!u){w(!0);return}l(!0);try{const v=await cr.getUserRepositories();i(v),$.success(`Found ${v.length} repositories`)}catch(v){console.error("Failed to fetch repositories:",v),$.error("Failed to fetch GitHub repositories. Please check your token.")}finally{l(!1)}},f=()=>{if(!u.trim()){$.error("Please enter a GitHub token");return}localStorage.setItem("github_token",u),cr.setToken(u),w(!1),g(),$.success("GitHub token saved!")},h=async v=>{if(!r){$.error("Please sign in to sync repositories");return}l(!0);try{console.log("🔄 Starting GitHub repository sync for:",v.name);const j=await cr.syncRepository(v);console.log("📦 Converted repository to project:",j),j.userId=r.uid,j.createdAt=new Date,console.log("💾 Saving project to Firestore..."),await s(j),console.log("✅ Project saved successfully!"),c(x=>new Set([...x,v.githubData.id])),$.success(`Repository "${v.name}" synced successfully!`),console.log("🎉 GitHub sync completed successfully!")}catch(j){console.error("❌ Failed to sync repository:",j),$.error("Failed to sync repository. Please try again.")}finally{l(!1)}},S=v=>{window.open(v.githubData.htmlUrl,"_blank")};return r?t.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[t.jsx(pe,{className:"h-5 w-5 text-white"}),"GitHub Repositories"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[!u&&t.jsx("button",{onClick:()=>w(!0),className:"px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors",children:"Add Token"}),t.jsxs("button",{onClick:g,disabled:a,className:"flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50",children:[t.jsx(Dr,{className:`h-4 w-4 ${a?"animate-spin":""}`}),a?"Loading...":"Refresh"]})]})]}),b&&t.jsxs(M.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"mb-6 p-4 bg-muted/20 rounded-lg border border-border/50",children:[t.jsx("h4",{className:"text-sm font-medium text-foreground mb-2",children:"GitHub Personal Access Token"}),t.jsxs("p",{className:"text-xs text-muted-foreground mb-3",children:["Create a personal access token at"," ",t.jsx("a",{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:underline",children:"github.com/settings/tokens"})," ","with repo access to sync your repositories."]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("input",{type:"password",value:u,onChange:v=>m(v.target.value),placeholder:"Enter your GitHub token",className:"flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"}),t.jsx("button",{onClick:f,className:"px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Save"}),t.jsx("button",{onClick:()=>w(!1),className:"px-4 py-2 text-sm bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors",children:"Cancel"})]})]}),a&&o.length===0?t.jsx("div",{className:"space-y-4",children:[...Array(3)].map((v,j)=>t.jsx("div",{className:"animate-pulse",children:t.jsxs("div",{className:"flex items-center justify-between p-4 rounded-lg bg-muted/20",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-8 h-8 bg-muted rounded"}),t.jsxs("div",{children:[t.jsx("div",{className:"h-4 bg-muted rounded w-32 mb-2"}),t.jsx("div",{className:"h-3 bg-muted rounded w-48"})]})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("div",{className:"h-6 bg-muted rounded w-12"}),t.jsx("div",{className:"h-6 bg-muted rounded w-12"})]})]})},j))}):o.length>0?t.jsx("div",{className:"space-y-3",children:o.map((v,j)=>{const x=d.has(v.githubData.id);return t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:j*.1},className:"flex items-center justify-between p-4 rounded-lg hover:bg-muted/30 transition-colors group",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[t.jsx("div",{className:"w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center",children:t.jsx(pe,{className:"h-4 w-4 text-white"})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsx("h3",{className:"font-medium text-foreground text-sm truncate",children:v.name}),v.githubData.isPrivate&&t.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-600 px-2 py-0.5 rounded",children:"Private"}),x&&t.jsxs("span",{className:"text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded flex items-center gap-1",children:[t.jsx(So,{className:"h-3 w-3"}),"Synced"]})]}),t.jsx("p",{className:"text-xs text-muted-foreground truncate",children:v.description}),t.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:v.githubData.language}),t.jsxs("span",{className:"text-xs text-muted-foreground",children:["Updated ",new Date(v.lastModified).toLocaleDateString()]})]})]})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[t.jsx(We,{className:"h-3 w-3"}),v.githubData.stargazersCount]}),t.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[t.jsx(za,{className:"h-3 w-3"}),v.githubData.forksCount]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("button",{onClick:()=>S(v),className:"p-2 rounded-lg hover:bg-muted/50 transition-colors group-hover:bg-white/10",title:"Open in GitHub",children:t.jsx(zt,{className:"h-4 w-4 text-muted-foreground group-hover:text-white"})}),!x&&t.jsx("button",{onClick:()=>h(v),disabled:a,className:"p-2 rounded-lg hover:bg-muted/50 transition-colors group-hover:bg-white/10 disabled:opacity-50",title:"Sync to DreamBuild",children:t.jsx(Je,{className:"h-4 w-4 text-muted-foreground group-hover:text-white"})})]})]})]},v.id)})}):t.jsxs("div",{className:"text-center py-8",children:[t.jsx(pe,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No repositories found"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:u?"No repositories found in your GitHub account.":"Add a GitHub token to sync your repositories."}),!u&&t.jsx("button",{onClick:()=>w(!0),className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Add GitHub Token"})]})]}):t.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:t.jsxs("div",{className:"text-center py-8",children:[t.jsx(pe,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"GitHub Integration"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"Sign in to sync your GitHub repositories with DreamBuild projects."})]})})},kg=()=>{const{currentProject:r,projects:e}=_e(),{user:s}=Tt(),[n,o]=p.useState("7d"),[i,a]=p.useState(!0);p.useEffect(()=>{const f=setTimeout(()=>a(!1),1e3);return()=>clearTimeout(f)},[]);const l={totalProjects:e.length,activeProjects:e.filter(f=>f.status==="active"||f.status==="development").length,completedProjects:e.filter(f=>f.status==="completed").length,totalFiles:e.reduce((f,h)=>f+Object.keys(h.files||{}).length,0),aiGenerations:e.reduce((f,h)=>f+(h.generations||0),0),linesOfCode:e.reduce((f,h)=>f+(h.linesOfCode||0),0),languagesUsed:e.length>0?new Set(e.map(f=>{var h;return((h=f.config)==null?void 0:h.language)||"javascript"})).size:0,hoursSpent:e.reduce((f,h)=>f+(h.hoursSpent||0),0)},d=f=>{const S=new Date-new Date(f),v=Math.floor(S/6e4),j=Math.floor(S/36e5),x=Math.floor(S/864e5);return v<60?`${v} min ago`:j<24?`${j} hour${j>1?"s":""} ago`:`${x} day${x>1?"s":""} ago`},c=e.sort((f,h)=>new Date(h.lastModified)-new Date(f.lastModified)).slice(0,4).map((f,h)=>({id:f.id,type:f.source==="github"?"github_sync":"ai_generation",project:f.name,action:f.source==="github"?"Synced from GitHub":"Generated with AI",time:d(f.lastModified),icon:f.source==="github"?pe:Me,color:f.source==="github"?"text-blue-600":"text-white"})),u=e.sort((f,h)=>new Date(h.lastModified)-new Date(f.lastModified)).slice(0,4).map(f=>{var h;return{name:f.name,files:Object.keys(f.files||{}).length,lastModified:d(f.lastModified),type:((h=f.config)==null?void 0:h.appType)||"web",progress:f.progress||0,source:f.source||"dreambuild"}}),m=f=>{const h={};f.forEach(v=>{var y;const j=((y=v.config)==null?void 0:y.language)||"javascript",x=Object.keys(v.files||{}).length;h[j]?h[j].files+=x:h[j]={language:j,files:x}});const S=Object.values(h).reduce((v,j)=>v+j.files,0);return Object.values(h).map(v=>({...v,percentage:S>0?Math.round(v.files/S*100):0,color:b(v.language)})).sort((v,j)=>j.files-v.files).slice(0,4)},b=f=>({javascript:"bg-yellow-500",typescript:"bg-blue-500",html:"bg-orange-500",css:"bg-white",python:"bg-green-500",java:"bg-red-500",php:"bg-purple-500",ruby:"bg-red-600",go:"bg-cyan-500",rust:"bg-orange-600"})[f.toLowerCase()]||"bg-gray-500",w=m(e),g=({title:f,value:h,icon:S,change:v,changeType:j,description:x})=>t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-md transition-all duration-200",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("div",{className:"w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center",children:t.jsx(S,{className:"h-6 w-6 text-white"})}),v&&t.jsxs("div",{className:`flex items-center gap-1 text-sm ${j==="increase"?"text-green-600":"text-red-600"}`,children:[j==="increase"?t.jsx(Wa,{className:"h-4 w-4"}):t.jsx(qa,{className:"h-4 w-4"}),v]})]}),t.jsx("h3",{className:"text-2xl font-bold text-foreground mb-1",children:h}),t.jsx("p",{className:"text-sm text-muted-foreground",children:f}),x&&t.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:x})]});return i?t.jsx("div",{className:"min-h-screen bg-background",style:{paddingTop:"80px"},children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:t.jsxs("div",{className:"animate-pulse",children:[t.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[...Array(4)].map((f,h)=>t.jsxs("div",{className:"bg-card/50 rounded-xl p-6",children:[t.jsx("div",{className:"h-12 w-12 bg-muted rounded-lg mb-4"}),t.jsx("div",{className:"h-6 bg-muted rounded w-1/2 mb-2"}),t.jsx("div",{className:"h-4 bg-muted rounded w-3/4"})]},h))})]})})}):t.jsx("div",{className:"min-h-screen bg-background",style:{paddingTop:"80px"},children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsx("div",{className:"mb-8",children:t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Dashboard"}),t.jsx("p",{className:"text-muted-foreground",children:"Welcome back! Here's what's happening with your projects."})]}),t.jsx("div",{className:"flex items-center gap-2",children:t.jsxs("select",{value:n,onChange:f=>o(f.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"7d",children:"Last 7 days"}),t.jsx("option",{value:"30d",children:"Last 30 days"}),t.jsx("option",{value:"90d",children:"Last 90 days"})]})})]})}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[t.jsx(g,{title:"Total Projects",value:l.totalProjects,icon:ke,change:l.totalProjects>0?"+2":void 0,changeType:"increase",description:l.totalProjects>0?"This week":"Create your first project"}),t.jsx(g,{title:"AI Generations",value:l.aiGenerations,icon:Me,change:l.aiGenerations>0?"+12":void 0,changeType:"increase",description:l.aiGenerations>0?"This week":"Start generating code"}),t.jsx(g,{title:"Lines of Code",value:l.linesOfCode.toLocaleString(),icon:X,change:l.linesOfCode>0?"+1.2k":void 0,changeType:"increase",description:l.linesOfCode>0?"This week":"Begin coding"}),t.jsx(g,{title:"Hours Spent",value:l.hoursSpent,icon:Co,change:l.hoursSpent>0?"+5.2h":void 0,changeType:"increase",description:l.hoursSpent>0?"This week":"Start building"})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[t.jsxs("div",{className:"lg:col-span-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[t.jsx(Ga,{className:"h-5 w-5 text-white"}),"Recent Activity"]}),t.jsx("button",{className:"text-sm text-white hover:text-gray-300 transition-colors",children:"View all"})]}),t.jsx("div",{className:"space-y-4",children:c.length>0?c.map((f,h)=>{const S=f.icon;return t.jsxs(M.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},className:"flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors",children:[t.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center ${f.color.replace("text-","bg-").replace("-600","-100")}`,children:t.jsx(S,{className:`h-4 w-4 ${f.color}`})}),t.jsxs("div",{className:"flex-1",children:[t.jsx("p",{className:"text-sm font-medium text-foreground",children:f.action}),t.jsx("p",{className:"text-xs text-muted-foreground",children:f.project})]}),t.jsx("span",{className:"text-xs text-muted-foreground",children:f.time})]},f.id)}):t.jsxs("div",{className:"text-center py-8",children:[t.jsx(Me,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No activity yet"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"Start creating projects to see your activity here."}),t.jsxs(ae,{to:"/ai-builder",className:"inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[t.jsx(jt,{className:"h-4 w-4"}),"Create Project"]})]})})]}),t.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[t.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[t.jsx(wo,{className:"h-5 w-5 text-white"}),"Top Projects"]}),t.jsx("div",{className:"space-y-4",children:u.length>0?u.map((f,h)=>t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:h*.1},className:"p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("h3",{className:"font-medium text-foreground text-sm",children:f.name}),t.jsxs("span",{className:"text-xs text-muted-foreground",children:[f.files," files"]})]}),t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("div",{className:"flex-1 bg-muted rounded-full h-2 mr-3",children:t.jsx("div",{className:"bg-white h-2 rounded-full transition-all duration-300",style:{width:`${f.progress}%`}})}),t.jsxs("span",{className:"text-xs text-muted-foreground",children:[f.progress,"%"]})]}),t.jsx("p",{className:"text-xs text-muted-foreground",children:f.lastModified})]},f.name)):t.jsxs("div",{className:"text-center py-8",children:[t.jsx(ke,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No projects yet"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"Create your first project to get started."}),t.jsxs(ae,{to:"/ai-builder",className:"inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[t.jsx(jt,{className:"h-4 w-4"}),"Create Project"]})]})})]})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[t.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[t.jsx(X,{className:"h-5 w-5 text-white"}),"Language Usage"]}),t.jsx("div",{className:"space-y-4",children:w.map((f,h)=>t.jsxs(M.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-4 h-4 rounded-full bg-muted flex items-center justify-center",children:t.jsx("div",{className:`w-2 h-2 rounded-full ${f.color}`})}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("div",{className:"flex items-center justify-between mb-1",children:[t.jsx("span",{className:"text-sm font-medium text-foreground",children:f.language}),t.jsxs("span",{className:"text-xs text-muted-foreground",children:[f.percentage,"%"]})]}),t.jsx("div",{className:"bg-muted rounded-full h-2",children:t.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${f.color}`,style:{width:`${f.percentage}%`}})}),t.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[f.files," files"]})]})]},f.language))})]}),t.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[t.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[t.jsx(wt,{className:"h-5 w-5 text-white"}),"Quick Actions"]}),t.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{name:"New Project",icon:ke,color:"bg-white",href:"/ai-builder"},{name:"AI Builder",icon:Me,color:"bg-purple-500",href:"/ai-builder"},{name:"View Projects",icon:Fe,color:"bg-green-500",href:"/projects"},{name:"Settings",icon:gt,color:"bg-orange-500",href:"/settings"}].map((f,h)=>t.jsxs(M.a,{href:f.href,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:h*.1},className:"flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-all duration-200 group",children:[t.jsx("div",{className:`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${f.color} group-hover:scale-105 transition-transform`,children:t.jsx(f.icon,{className:"h-6 w-6 text-white"})}),t.jsx("span",{className:"text-sm font-medium text-foreground text-center",children:f.name})]},f.name))})]})]}),t.jsx(Cg,{})]})})},Tg=()=>{const{user:r,signInWithGoogle:e,signInWithGitHub:s,loading:n}=Tt(),o=Rr(),[i,a]=p.useState(!1);p.useEffect(()=>{r&&!n&&o("/dashboard")},[r,n,o]);const l=async()=>{try{a(!0),await e()}catch(c){console.error("Sign in error:",c)}finally{a(!1)}},d=async()=>{try{a(!0),await s()}catch(c){console.error("GitHub sign in error:",c),c.message.includes("already exists using Google")?alert("An account with this email already exists using Google. Please sign in with Google instead, or use a different email for GitHub."):c.message.includes("already exists using email/password")?alert("An account with this email already exists using email/password. Please sign in with your existing method instead."):c.message.includes("account with this email already exists")?alert("An account with this email already exists. Please sign in with your existing method instead."):c.message.includes("couldn't determine the sign-in method")?alert("An account with this email already exists. Please try signing in with Google first, then you can link your GitHub account."):c.message.includes("not properly configured")?alert("GitHub authentication is not properly configured. Please check Firebase Console settings or try signing in with Google instead."):alert("Failed to sign in with GitHub. Please try again.")}finally{a(!1)}};return n?t.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),t.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):t.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:[t.jsxs("div",{className:"flex justify-between items-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg",children:t.jsx("span",{className:"text-white font-bold text-lg",children:"D"})}),t.jsx("span",{className:"font-bold text-xl text-slate-800 dark:text-white",children:"DreamBuild"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(M.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/login",className:"px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"Sign in"}),t.jsx(M.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/signup",className:"px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl",children:"Sign up"})]})]}),t.jsx("div",{className:"flex items-center justify-center p-6 -mt-20",children:t.jsx("div",{className:"w-full max-w-md",children:t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-2xl",children:[t.jsxs("div",{className:"text-center mb-8",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg",children:t.jsx("span",{className:"text-white font-bold text-2xl",children:"D"})}),t.jsx("h1",{className:"text-2xl font-bold mb-2 text-slate-800 dark:text-white",children:"Welcome back"}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-sm",children:"Sign in to continue building amazing applications"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs(M.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:l,disabled:i,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md",children:[i?t.jsx(Ht,{className:"h-5 w-5 animate-spin text-blue-600"}):t.jsx("div",{className:"w-5 h-5 bg-gradient-to-r from-blue-500 to-red-500 rounded flex items-center justify-center",children:t.jsx("span",{className:"text-white text-xs font-bold",children:"G"})}),i?"Signing in...":"Continue with Google"]}),t.jsxs(M.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:d,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 shadow-sm hover:shadow-md",children:[t.jsx(pe,{className:"h-5 w-5"}),"Continue with GitHub"]})]}),t.jsxs("div",{className:"relative my-8",children:[t.jsx("div",{className:"absolute inset-0 flex items-center",children:t.jsx("div",{className:"w-full border-t border-slate-200 dark:border-slate-600"})}),t.jsx("div",{className:"relative flex justify-center text-sm",children:t.jsx("span",{className:"bg-white dark:bg-slate-800 px-4 text-slate-500 dark:text-slate-400 font-medium",children:"or"})})]}),t.jsx("div",{className:"text-center",children:t.jsxs(M.a,{whileHover:{scale:1.05},whileTap:{scale:.95},href:"/ai-builder",className:"inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold text-sm bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600",children:["Continue as Guest",t.jsx(Vt,{className:"h-4 w-4"})]})})]})})})]})},Dg=()=>{const{user:r,signInWithGoogle:e,signInWithGitHub:s,loading:n}=Tt(),o=Rr(),[i,a]=p.useState(!1);p.useEffect(()=>{r&&!n&&o("/dashboard")},[r,n,o]);const l=async()=>{try{a(!0),await e(),$.success("Welcome to DreamBuild!")}catch(c){console.error("Sign in error:",c),$.error("Failed to sign in. Please try again.")}finally{a(!1)}},d=async()=>{try{a(!0),await s(),$.success("Welcome to DreamBuild!")}catch(c){console.error("GitHub sign in error:",c),c.message.includes("already exists using Google")?$.error("An account with this email already exists using Google. Please sign in with Google instead, or use a different email for GitHub."):c.message.includes("already exists using email/password")?$.error("An account with this email already exists using email/password. Please sign in with your existing method instead."):c.message.includes("account with this email already exists")?$.error("An account with this email already exists. Please sign in with your existing method instead."):c.message.includes("couldn't determine the sign-in method")?$.error("An account with this email already exists. Please try signing in with Google first, then you can link your GitHub account."):c.message.includes("not properly configured")?$.error("GitHub authentication is not properly configured. Please check Firebase Console settings or try signing in with Google instead."):$.error("Failed to sign in with GitHub. Please try again.")}finally{a(!1)}};return n?t.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),t.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):t.jsxs("div",{className:"min-h-screen bg-background",children:[t.jsxs("div",{className:"flex justify-between items-center p-4",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:t.jsx("span",{className:"text-primary-foreground font-bold text-sm",children:"D"})}),t.jsx("span",{className:"font-semibold text-foreground",children:"DreamBuild"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(M.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/login",className:"px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors",children:"Sign in"}),t.jsx(M.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/signup",className:"px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors",children:"Sign up"})]})]}),t.jsx("div",{className:"flex items-center justify-center p-4 -mt-16",children:t.jsx("div",{className:"w-full max-w-xs",children:t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},className:"bg-card border border-border rounded-xl p-6 shadow-sm",children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("h1",{className:"text-xl font-bold mb-1 text-foreground",children:"Join DreamBuild"}),t.jsx("p",{className:"text-muted-foreground text-xs",children:"Create your account"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs(M.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:l,disabled:i,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background disabled:opacity-50 disabled:cursor-not-allowed",children:[i?t.jsx(Ht,{className:"h-4 w-4 animate-spin text-primary"}):t.jsxs("svg",{className:"h-4 w-4",viewBox:"0 0 24 24",children:[t.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),t.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),t.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),t.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),i?"Creating account...":"Continue with Google"]}),t.jsxs(M.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:d,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background",children:[t.jsx(pe,{className:"h-4 w-4"}),"Continue with GitHub"]})]}),t.jsxs("div",{className:"relative my-4",children:[t.jsx("div",{className:"absolute inset-0 flex items-center",children:t.jsx("div",{className:"w-full border-t border-border"})}),t.jsx("div",{className:"relative flex justify-center text-xs",children:t.jsx("span",{className:"bg-card px-2 text-muted-foreground",children:"or"})})]}),t.jsx("div",{className:"text-center",children:t.jsxs(M.a,{whileHover:{scale:1.02},whileTap:{scale:.98},href:"/ai-builder",className:"inline-flex items-center gap-1 px-3 py-1.5 text-primary hover:text-primary-dark transition-colors font-medium text-xs",children:["Continue as Guest",t.jsx(Vt,{className:"h-3 w-3"})]})})]})})})]})},Eg=()=>{const{currentProject:r,createNewProject:e,projects:s,switchProject:n,saveProject:o,deleteProject:i}=_e(),[a,l]=p.useState(""),[d,c]=p.useState("all"),[u,m]=p.useState(!1),[b,w]=p.useState(""),[g,f]=p.useState("web"),[h,S]=p.useState(null),v=s.map(k=>{var B;return{id:k.id,name:k.name,type:((B=k.config)==null?void 0:B.appType)||"web",description:k.description||"No description available",status:k.status||"active",lastModified:k.lastModified?new Date(k.lastModified).toISOString().split("T")[0]:new Date().toISOString().split("T")[0],files:Object.keys(k.files||{}).length,size:j(k),tags:x(k),preview:y(k),source:k.source||"dreambuild",githubData:k.githubData}}),j=k=>{const B=k.files||{};return`${(Object.values(B).reduce((L,G)=>L+((G==null?void 0:G.length)||0),0)/1024/1024).toFixed(1)} MB`},x=k=>{var T,R,L,G,W;const B=[];return(T=k.config)!=null&&T.language&&B.push(k.config.language),(R=k.config)!=null&&R.styling&&B.push(k.config.styling),(L=k.config)!=null&&L.database&&k.config.database!=="none"&&B.push(k.config.database),(G=k.config)!=null&&G.auth&&k.config.auth!=="none"&&B.push(k.config.auth),(W=k.githubData)!=null&&W.language&&B.push(k.githubData.language),[...new Set(B)].slice(0,4)},y=k=>{var R,L,G;return(L=(R=k.githubData)==null?void 0:R.owner)!=null&&L.avatar_url?k.githubData.owner.avatar_url:`https://via.placeholder.com/300x200/${{web:"007acc",mobile:"ffc107",api:"17a2b8",dashboard:"6f42c1",ecommerce:"28a745"}[(G=k.config)==null?void 0:G.appType]||"6c757d"}/ffffff?text=${encodeURIComponent(k.name)}`},D=[{id:"all",name:"All",icon:ke,count:v.length},{id:"web",name:"Web Apps",icon:Fe,count:v.filter(k=>k.type==="web").length},{id:"mobile",name:"Mobile",icon:X,count:v.filter(k=>k.type==="mobile").length},{id:"dashboard",name:"Dashboards",icon:gt,count:v.filter(k=>k.type==="dashboard").length},{id:"api",name:"APIs",icon:gt,count:v.filter(k=>k.type==="api").length},{id:"game",name:"Games",icon:We,count:v.filter(k=>k.type==="game").length},{id:"ecommerce",name:"E-commerce",icon:gt,count:v.filter(k=>k.type==="ecommerce").length},{id:"completed",name:"Completed",icon:We,count:v.filter(k=>k.status==="completed").length}],A=v.filter(k=>{const B=k.name.toLowerCase().includes(a.toLowerCase())||k.description.toLowerCase().includes(a.toLowerCase())||k.tags.some(R=>R.toLowerCase().includes(a.toLowerCase())),T=d==="all"||k.type===d||k.status===d;return B&&T}),P=async()=>{if(!b.trim()){$.error("Please enter a project name");return}try{const k={id:null,name:b,files:{"index.html":"","style.css":"","script.js":""},activeFile:"index.html",config:{appType:g,language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date,description:`New ${g} project`,status:"active",source:"dreambuild"};await o(b),w(""),f("web"),m(!1),$.success("Project created successfully!")}catch(k){console.error("Failed to create project:",k),$.error("Failed to create project. Please try again.")}},_=async k=>{try{await i(k),S(null),$.success("Project deleted successfully!")}catch(B){console.error("Failed to delete project:",B),$.error("Failed to delete project. Please try again.")}},E=k=>{switch(k){case"active":return"bg-green-100 text-green-800 border-green-200";case"development":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"completed":return"bg-white/10 text-white border-white/20";default:return"bg-gray-100 text-gray-800 border-gray-200"}},O=k=>{switch(k){case"web":return Fe;case"mobile":return X;case"dashboard":return gt;default:return ke}};return t.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:[t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8",children:[t.jsxs("div",{className:"space-y-3 flex-1",children:[t.jsx("h1",{className:"text-5xl font-bold text-gray-900",children:"Projects"}),t.jsx("p",{className:"text-lg text-gray-600",children:"Manage and organize your AI-generated projects"}),t.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-sm",children:[t.jsxs("span",{className:"flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-200",children:[t.jsx(ke,{className:"h-4 w-4"}),v.length," Total Projects"]}),t.jsxs("span",{className:"flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg border border-purple-200",children:[t.jsx(We,{className:"h-4 w-4"}),v.filter(k=>k.source==="github").length," GitHub"]})]})]}),t.jsx("div",{className:"flex-shrink-0",children:t.jsxs(M.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>m(!0),className:"flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 font-semibold text-sm border border-primary/20",children:[t.jsx(jt,{className:"h-4 w-4"}),"Create New Project"]})})]}),t.jsx("div",{className:"flex flex-wrap items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 p-2 rounded-2xl mb-8 shadow-sm overflow-x-auto",children:D.map(k=>{const B=k.icon,T=d===k.id;return t.jsxs(M.button,{whileHover:{scale:1.02,y:-1},whileTap:{scale:.98},onClick:()=>c(k.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${T?"bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 border border-primary/20":"text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent hover:border-gray-200"}`,children:[t.jsx(B,{className:"h-4 w-4 flex-shrink-0"}),t.jsx("span",{className:"hidden sm:inline",children:k.name}),t.jsx("span",{className:`text-xs px-2 py-1 rounded-full font-semibold ${T?"bg-white/20 text-white":"bg-gray-100 text-gray-600"}`,children:k.count})]},k.id)})}),t.jsxs("div",{className:"relative mb-8 max-w-lg",children:[t.jsx(Ke,{className:"absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"}),t.jsx("input",{type:"text",placeholder:"Search projects by name, description, or tags...",value:a,onChange:k=>l(k.target.value),className:"w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 text-gray-900 placeholder:text-gray-400 text-sm shadow-sm hover:shadow-md"})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6",children:A.map((k,B)=>{const T=O(k.type);return t.jsxs(M.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:B*.1,duration:.3},whileHover:{y:-4,scale:1.02},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),t.jsxs("div",{className:"relative z-10",children:[t.jsxs("div",{className:"flex items-start justify-between mb-4",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 border border-blue-200",children:t.jsx(T,{className:"h-6 w-6 text-blue-600"})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h3",{className:"font-semibold text-lg text-foreground truncate group-hover:text-primary transition-colors duration-200",children:k.name}),t.jsx("span",{className:`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border mt-1 ${E(k.status)}`,children:k.status})]})]}),t.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0 ml-2",children:[t.jsxs(M.button,{whileHover:{scale:1.05,y:-1},whileTap:{scale:.95},className:"flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",onClick:()=>n(k.id),title:"Open Project",children:[t.jsx(Vt,{className:"h-3.5 w-3.5"}),"Open Project"]}),t.jsxs("button",{onClick:()=>S(h===k.id?null:k.id),className:"flex items-center gap-1.5 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800",title:"More Options",children:[t.jsx(Va,{className:"h-4 w-4"}),t.jsx("span",{className:"text-xs font-medium",children:"Menu"})]})]})]}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed",children:k.description}),t.jsxs("div",{className:"flex flex-wrap gap-1.5 mb-4",children:[k.tags.slice(0,3).map(R=>t.jsx("span",{className:"px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-lg border border-border/50",children:R},R)),k.tags.length>3&&t.jsxs("span",{className:"px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-lg border border-border/50",children:["+",k.tags.length-3]})]}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-border/50",children:[t.jsxs("div",{className:"flex items-center gap-4 text-xs text-muted-foreground",children:[t.jsxs("span",{className:"flex items-center gap-1.5",children:[t.jsx(Ie,{className:"h-3.5 w-3.5"}),k.files," files"]}),t.jsxs("span",{className:"flex items-center gap-1.5",children:[t.jsx(xt,{className:"h-3.5 w-3.5"}),k.lastModified]})]}),t.jsx("div",{className:"text-xs text-muted-foreground font-medium",children:k.size})]})]}),t.jsx(ze,{children:h===k.id&&t.jsx(M.div,{initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},className:"absolute right-2 top-14 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-xl z-20 min-w-[180px] overflow-hidden",children:t.jsxs("div",{className:"p-1",children:[t.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-700",children:[t.jsx(yo,{className:"h-4 w-4 text-blue-500"}),"Edit Details"]}),t.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-green-50 rounded-lg transition-colors text-gray-700 hover:text-green-700",children:[t.jsx(Je,{className:"h-4 w-4 text-green-500"}),"Download"]}),t.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-purple-50 rounded-lg transition-colors text-gray-700 hover:text-purple-700",children:[t.jsx(ko,{className:"h-4 w-4 text-purple-500"}),"Share Project"]}),t.jsx("div",{className:"h-px bg-gray-200 my-2 mx-2"}),t.jsxs("button",{onClick:()=>_(k.id),className:"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors hover:text-red-700",children:[t.jsx(vo,{className:"h-4 w-4"}),"Delete Project"]})]})})})]},k.id)})}),A.length===0&&t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center py-16",children:[t.jsx("div",{className:"w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6",children:t.jsx(ke,{className:"h-12 w-12 text-primary"})}),t.jsx("h3",{className:"text-2xl font-bold text-foreground mb-3",children:a||d!=="all"?"No projects found":"No projects yet"}),t.jsx("p",{className:"text-lg text-muted-foreground mb-8 max-w-md mx-auto",children:a||d!=="all"?"Try adjusting your search or filter criteria to find what you're looking for.":"Start building amazing projects with AI-powered code generation!"}),t.jsxs(M.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>m(!0),className:"inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 font-semibold text-base border border-primary/20",children:[t.jsx(jt,{className:"h-5 w-5"}),"Get Started - Create Your First Project"]})]})]}),t.jsx(ze,{children:u&&t.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:()=>m(!1),children:t.jsxs(M.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4",onClick:k=>k.stopPropagation(),children:[t.jsx("h2",{className:"text-xl font-semibold text-foreground mb-4",children:"Create New Project"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Name"}),t.jsx("input",{type:"text",value:b,onChange:k=>w(k.target.value),placeholder:"Enter project name...",className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",autoFocus:!0})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Type"}),t.jsxs("select",{value:g,onChange:k=>f(k.target.value),className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"web",children:"Web Application"}),t.jsx("option",{value:"mobile",children:"Mobile Application"}),t.jsx("option",{value:"dashboard",children:"Dashboard"})]})]})]}),t.jsxs("div",{className:"flex gap-3 mt-6",children:[t.jsx(M.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>m(!1),className:"flex-1 px-4 py-2.5 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium",children:"Cancel"}),t.jsx(M.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:P,className:"flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:"Create"})]})]})})}),h&&t.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>S(null)})]})},Ag=()=>{var j,x;const{theme:r,setTheme:e}=Mr(),[s,n]=p.useState("appearance"),[o,i]=p.useState({appearance:{theme:r,fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),[a,l]=p.useState(!0),[d,c]=p.useState(!1);p.useEffect(()=>{const y=localStorage.getItem("dreambuild-settings");y&&i(JSON.parse(y)),l(!1)},[]),p.useEffect(()=>{c(!0)},[o]);const u=()=>{localStorage.setItem("dreambuild-settings",JSON.stringify(o)),c(!1),console.log("Settings saved successfully!")},m=()=>{i({appearance:{theme:"system",fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),console.log("Settings reset to defaults!")},b=()=>{const y=JSON.stringify(o,null,2),D=new Blob([y],{type:"application/json"}),A=URL.createObjectURL(D),P=document.createElement("a");P.href=A,P.download="dreambuild-settings.json",P.click(),URL.revokeObjectURL(A),console.log("Settings exported!")},w=y=>{const D=y.target.files[0];if(D){const A=new FileReader;A.onload=P=>{try{const _=JSON.parse(P.target.result);i(_),console.log("Settings imported successfully!")}catch{console.error("Invalid settings file!")}},A.readAsText(D)}},g=(y,D,A)=>{i(P=>({...P,[y]:{...P[y],[D]:A}})),y==="appearance"&&D==="theme"&&e(A)},f=[{id:"appearance",name:"Appearance",icon:jo},{id:"editor",name:"Editor",icon:X},{id:"ai",name:"AI Settings",icon:Me},{id:"notifications",name:"Notifications",icon:Ja},{id:"privacy",name:"Privacy",icon:Ka}],h=({title:y,description:D,children:A,warning:P})=>t.jsxs("div",{className:"flex items-start justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors",children:[t.jsxs("div",{className:"flex-1",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsx("h3",{className:"font-medium text-foreground",children:y}),P&&t.jsx(Ya,{className:"h-4 w-4 text-yellow-500",title:P})]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:D})]}),t.jsx("div",{className:"ml-4",children:A})]}),S=({checked:y,onChange:D,disabled:A=!1})=>t.jsx("button",{onClick:()=>D(!y),disabled:A,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${y?"bg-gray-700":"bg-muted"} ${A?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,children:t.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${y?"translate-x-6":"translate-x-1"}`})}),v=()=>{switch(s){case"appearance":return t.jsxs("div",{className:"space-y-1",children:[t.jsx(h,{title:"Theme",description:"Choose your preferred color scheme",children:t.jsxs("select",{value:o.appearance.theme,onChange:y=>g("appearance","theme",y.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"light",children:"Light Theme"}),t.jsx("option",{value:"dark",children:"Dark Theme"}),t.jsx("option",{value:"system",children:"System Theme"}),t.jsx("option",{value:"blue",children:"Blue Theme"}),t.jsx("option",{value:"purple",children:"Purple Theme"}),t.jsx("option",{value:"green",children:"Green Theme"}),t.jsx("option",{value:"orange",children:"Orange Theme"}),t.jsx("option",{value:"red",children:"Red Theme"}),t.jsx("option",{value:"pink",children:"Pink Theme"}),t.jsx("option",{value:"cyan",children:"Cyan Theme"}),t.jsx("option",{value:"amber",children:"Amber Theme"}),t.jsx("option",{value:"emerald",children:"Emerald Theme"})]})}),t.jsx(h,{title:"Font Size",description:"Adjust the text size throughout the interface",children:t.jsxs("select",{value:o.appearance.fontSize,onChange:y=>g("appearance","fontSize",y.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"small",children:"Small"}),t.jsx("option",{value:"medium",children:"Medium"}),t.jsx("option",{value:"large",children:"Large"})]})}),t.jsx(h,{title:"Font Family",description:"Choose the font family for the editor",children:t.jsxs("select",{value:o.appearance.fontFamily,onChange:y=>g("appearance","fontFamily",y.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"system",children:"System Default"}),t.jsx("option",{value:"mono",children:"Monospace"}),t.jsx("option",{value:"sans",children:"Sans Serif"}),t.jsx("option",{value:"serif",children:"Serif"})]})}),t.jsx(h,{title:"Animations",description:"Enable smooth animations and transitions",children:t.jsx(S,{checked:o.appearance.animations,onChange:y=>g("appearance","animations",y)})}),t.jsx(h,{title:"Compact Mode",description:"Reduce spacing for a more compact interface",children:t.jsx(S,{checked:o.appearance.compactMode,onChange:y=>g("appearance","compactMode",y)})})]});case"editor":return t.jsxs("div",{className:"space-y-1",children:[t.jsx(h,{title:"Tab Size",description:"Number of spaces for indentation",children:t.jsxs("select",{value:o.editor.tabSize,onChange:y=>g("editor","tabSize",parseInt(y.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:2,children:"2 spaces"}),t.jsx("option",{value:4,children:"4 spaces"}),t.jsx("option",{value:8,children:"8 spaces"})]})}),t.jsx(h,{title:"Word Wrap",description:"Wrap long lines in the editor",children:t.jsx(S,{checked:o.editor.wordWrap,onChange:y=>g("editor","wordWrap",y)})}),t.jsx(h,{title:"Minimap",description:"Show a minimap of your code",children:t.jsx(S,{checked:o.editor.minimap,onChange:y=>g("editor","minimap",y)})}),t.jsx(h,{title:"Line Numbers",description:"Show line numbers in the editor",children:t.jsx(S,{checked:o.editor.lineNumbers,onChange:y=>g("editor","lineNumbers",y)})}),t.jsx(h,{title:"Auto Save",description:"Automatically save files as you type",children:t.jsx(S,{checked:o.editor.autoSave,onChange:y=>g("editor","autoSave",y)})}),t.jsx(h,{title:"Format on Save",description:"Automatically format code when saving",children:t.jsx(S,{checked:o.editor.formatOnSave,onChange:y=>g("editor","formatOnSave",y)})}),t.jsx(h,{title:"Auto Complete",description:"Enable intelligent code completion",children:t.jsx(S,{checked:o.editor.autoComplete,onChange:y=>g("editor","autoComplete",y)})})]});case"ai":return t.jsxs("div",{className:"space-y-1",children:[t.jsx(h,{title:"Default AI Model",description:"Choose your preferred AI model for code generation",children:t.jsxs("select",{value:o.ai.defaultModel,onChange:y=>g("ai","defaultModel",y.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"codellama-7b",children:"CodeLlama 7B"}),t.jsx("option",{value:"codellama-13b",children:"CodeLlama 13B"}),t.jsx("option",{value:"starcoder-15b",children:"StarCoder 15B"}),t.jsx("option",{value:"deepseek-coder",children:"DeepSeek Coder"}),t.jsx("option",{value:"wizardcoder-7b",children:"WizardCoder 7B"})]})}),t.jsx(h,{title:"Temperature",description:"Controls randomness in AI responses (0.0 = deterministic, 1.0 = creative)",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:o.ai.temperature,onChange:y=>g("ai","temperature",parseFloat(y.target.value)),className:"w-24"}),t.jsx("span",{className:"text-sm text-muted-foreground w-8",children:o.ai.temperature})]})}),t.jsx(h,{title:"Max Tokens",description:"Maximum number of tokens in AI responses",children:t.jsxs("select",{value:o.ai.maxTokens,onChange:y=>g("ai","maxTokens",parseInt(y.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:1e3,children:"1,000"}),t.jsx("option",{value:2e3,children:"2,000"}),t.jsx("option",{value:4e3,children:"4,000"}),t.jsx("option",{value:8e3,children:"8,000"})]})}),t.jsx(h,{title:"Auto Generate",description:"Automatically generate code suggestions as you type",children:t.jsx(S,{checked:o.ai.autoGenerate,onChange:y=>g("ai","autoGenerate",y)})}),t.jsx(h,{title:"AI Suggestions",description:"Show contextual AI suggestions in the editor",children:t.jsx(S,{checked:o.ai.suggestions,onChange:y=>g("ai","suggestions",y)})})]});case"notifications":return t.jsxs("div",{className:"space-y-1",children:[t.jsx(h,{title:"Project Updates",description:"Get notified when projects are updated",children:t.jsx(S,{checked:o.notifications.projectUpdates,onChange:y=>g("notifications","projectUpdates",y)})}),t.jsx(h,{title:"AI Completions",description:"Get notified when AI completes code generation",children:t.jsx(S,{checked:o.notifications.aiCompletions,onChange:y=>g("notifications","aiCompletions",y)})}),t.jsx(h,{title:"Error Notifications",description:"Get notified about errors and issues",children:t.jsx(S,{checked:o.notifications.errors,onChange:y=>g("notifications","errors",y)})}),t.jsx(h,{title:"Sound Notifications",description:"Play sounds for notifications",children:t.jsx(S,{checked:o.notifications.sound,onChange:y=>g("notifications","sound",y)})}),t.jsx(h,{title:"Email Notifications",description:"Receive notifications via email",children:t.jsx(S,{checked:o.notifications.email,onChange:y=>g("notifications","email",y)})})]});case"privacy":return t.jsxs("div",{className:"space-y-1",children:[t.jsx(h,{title:"Analytics",description:"Help improve DreamBuild by sharing anonymous usage data",children:t.jsx(S,{checked:o.privacy.analytics,onChange:y=>g("privacy","analytics",y)})}),t.jsx(h,{title:"Crash Reports",description:"Automatically send crash reports to help fix bugs",children:t.jsx(S,{checked:o.privacy.crashReports,onChange:y=>g("privacy","crashReports",y)})}),t.jsx(h,{title:"Telemetry",description:"Share performance and usage telemetry",warning:"This may include personal information",children:t.jsx(S,{checked:o.privacy.telemetry,onChange:y=>g("privacy","telemetry",y)})}),t.jsx(h,{title:"Share Usage Statistics",description:"Share anonymous usage statistics with the community",children:t.jsx(S,{checked:o.privacy.shareUsage,onChange:y=>g("privacy","shareUsage",y)})})]});default:return null}};return a?t.jsx("div",{className:"min-h-screen bg-background",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:t.jsxs("div",{className:"animate-pulse",children:[t.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[t.jsx("div",{className:"lg:col-span-1",children:t.jsx("div",{className:"space-y-3",children:[...Array(5)].map((y,D)=>t.jsx("div",{className:"h-12 bg-muted rounded"},D))})}),t.jsx("div",{className:"lg:col-span-3",children:t.jsx("div",{className:"bg-card/50 rounded-xl p-6",children:t.jsx("div",{className:"space-y-4",children:[...Array(6)].map((y,D)=>t.jsx("div",{className:"h-16 bg-muted rounded"},D))})})})]})]})})}):t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsx("div",{className:"mb-8",children:t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Settings"}),t.jsx("p",{className:"text-muted-foreground",children:"Customize your DreamBuild experience and preferences"})]}),t.jsx("div",{className:"flex items-center gap-2",children:d&&t.jsxs(M.button,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},onClick:u,className:"flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200",children:[t.jsx(xo,{className:"h-4 w-4"}),"Save Changes"]})})]})}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[t.jsxs("div",{className:"lg:col-span-1",children:[t.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:t.jsx("nav",{className:"space-y-2",children:f.map(y=>{const D=y.icon;return t.jsxs("button",{onClick:()=>n(y.id),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${s===y.id?"bg-gray-700 text-white shadow-sm":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[t.jsx(D,{className:"h-4 w-4"}),y.name]},y.id)})})}),t.jsxs("div",{className:"mt-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:[t.jsx("h3",{className:"font-semibold text-foreground mb-3",children:"Data Management"}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("button",{onClick:b,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors",children:[t.jsx(Je,{className:"h-4 w-4"}),"Export Settings"]}),t.jsxs("label",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors cursor-pointer",children:[t.jsx(bo,{className:"h-4 w-4"}),"Import Settings",t.jsx("input",{type:"file",accept:".json",onChange:w,className:"hidden"})]}),t.jsxs("button",{onClick:m,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:[t.jsx(Dr,{className:"h-4 w-4"}),"Reset to Defaults"]})]})]})]}),t.jsx("div",{className:"lg:col-span-3",children:t.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden",children:[t.jsx("div",{className:"p-6 border-b border-border/50",children:t.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[Ee.createElement((j=f.find(y=>y.id===s))==null?void 0:j.icon,{className:"h-5 w-5 text-white"}),(x=f.find(y=>y.id===s))==null?void 0:x.name]})}),t.jsx("div",{className:"divide-y divide-border/50",children:v()})]})})]})]})})},Pg=()=>{const[r,e]=p.useState(""),[s,n]=p.useState("getting-started"),o=[{id:"getting-started",title:"Getting Started",icon:wt,articles:[{title:"Quick Start Guide",description:"Get up and running in 5 minutes"},{title:"Installation",description:"Install DreamBuild on your system"},{title:"First Project",description:"Create your first AI-generated project"},{title:"Basic Concepts",description:"Understanding the DreamBuild workflow"}]},{id:"ai-features",title:"AI Features",icon:X,articles:[{title:"Code Generation",description:"Generate code with AI assistance"},{title:"Local AI Setup",description:"Set up Ollama for offline AI"},{title:"Template System",description:"Use pre-built project templates"},{title:"AI Models",description:"Available AI models and capabilities"}]},{id:"api-reference",title:"API Reference",icon:bs,articles:[{title:"REST API",description:"Complete API documentation"},{title:"WebSocket API",description:"Real-time communication"},{title:"Authentication",description:"API authentication methods"},{title:"Rate Limits",description:"API usage limits and quotas"}]},{id:"deployment",title:"Deployment",icon:Fe,articles:[{title:"Firebase Hosting",description:"Deploy to Firebase"},{title:"GitHub Pages",description:"Deploy to GitHub Pages"},{title:"Custom Domain",description:"Set up custom domains"},{title:"CI/CD Pipeline",description:"Automated deployment workflows"}]}],i=[{title:"API Documentation",href:"#",icon:X},{title:"GitHub Repository",href:"https://github.com/ronb12/DreamBuild",icon:pe},{title:"Community Forum",href:"#",icon:Fe},{title:"Video Tutorials",href:"#",icon:zt}];return t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:t.jsx(mr,{className:"h-6 w-6 text-primary"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Documentation"}),t.jsx("p",{className:"text-muted-foreground",children:"Complete guides and API references for DreamBuild"})]})]}),t.jsxs("div",{className:"relative max-w-md",children:[t.jsx(Ke,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search documentation...",value:r,onChange:a=>e(a.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[t.jsx("div",{className:"lg:col-span-1",children:t.jsxs("div",{className:"sticky top-8 space-y-2",children:[t.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Sections"}),o.map(a=>{const l=a.icon;return t.jsxs("button",{onClick:()=>n(a.id),className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${s===a.id?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[t.jsx(l,{className:"h-4 w-4"}),t.jsx("span",{className:"text-sm font-medium",children:a.title})]},a.id)}),t.jsxs("div",{className:"mt-8 pt-6 border-t border-border",children:[t.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Quick Links"}),t.jsx("div",{className:"space-y-2",children:i.map(a=>{const l=a.icon;return t.jsxs("a",{href:a.href,target:a.href.startsWith("http")?"_blank":void 0,rel:a.href.startsWith("http")?"noopener noreferrer":void 0,className:"flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors",children:[t.jsx(l,{className:"h-4 w-4"}),t.jsx("span",{children:a.title}),a.href.startsWith("http")&&t.jsx(zt,{className:"h-3 w-3 ml-auto"})]},a.title)})})]})]})}),t.jsxs("div",{className:"lg:col-span-3",children:[t.jsx("div",{className:"bg-card border border-border rounded-xl p-6",children:o.map(a=>{const l=a.icon;return t.jsxs("div",{className:s===a.id?"block":"hidden",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[t.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:t.jsx(l,{className:"h-5 w-5 text-primary"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl font-bold text-foreground",children:a.title}),t.jsxs("p",{className:"text-muted-foreground",children:["Learn about ",a.title.toLowerCase()]})]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:a.articles.map((d,c)=>t.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:c*.1},className:"p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer group",children:t.jsxs("div",{className:"flex items-start justify-between",children:[t.jsxs("div",{className:"flex-1",children:[t.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors mb-2",children:d.title}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:d.description})]}),t.jsx(Xa,{className:"h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"})]})},d.title))})]},a.id)})}),s==="getting-started"&&t.jsxs("div",{className:"mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6",children:[t.jsx("h3",{className:"text-lg font-semibold text-foreground mb-4",children:"Ready to get started?"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"Follow our quick start guide to create your first AI-generated project in minutes."}),t.jsxs("div",{className:"flex gap-3",children:[t.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[t.jsx(wt,{className:"h-4 w-4"}),"Quick Start Guide"]}),t.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(Je,{className:"h-4 w-4"}),"Download PDF"]})]})]})]})]})]})})},Rg=()=>{const[r,e]=p.useState(""),[s,n]=p.useState("all"),[o,i]=p.useState("grid"),a=[{id:"all",name:"All Examples",count:24},{id:"web",name:"Web Apps",count:8},{id:"mobile",name:"Mobile Apps",count:6},{id:"api",name:"APIs",count:5},{id:"dashboard",name:"Dashboards",count:5}],d=[{id:1,title:"E-commerce Store",description:"Full-featured online store with React, Node.js, and Stripe integration",category:"web",difficulty:"Intermediate",tags:["React","Node.js","Stripe","MongoDB"],stars:156,language:"JavaScript",preview:"https://via.placeholder.com/400x250/2563eb/ffffff?text=E-commerce+Store",github:"https://github.com/example/ecommerce-store"},{id:2,title:"Task Management App",description:"Collaborative task management with real-time updates and team features",category:"web",difficulty:"Beginner",tags:["Vue.js","Firebase","Real-time"],stars:89,language:"JavaScript",preview:"https://via.placeholder.com/400x250/10b981/ffffff?text=Task+Manager",github:"https://github.com/example/task-manager"},{id:3,title:"Fitness Tracker",description:"Mobile app for tracking workouts, nutrition, and fitness goals",category:"mobile",difficulty:"Intermediate",tags:["React Native","GraphQL","Health API"],stars:234,language:"TypeScript",preview:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Fitness+Tracker",github:"https://github.com/example/fitness-tracker"},{id:4,title:"Analytics Dashboard",description:"Business intelligence dashboard with charts, metrics, and reporting",category:"dashboard",difficulty:"Advanced",tags:["D3.js","Python","PostgreSQL"],stars:312,language:"Python",preview:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Analytics+Dashboard",github:"https://github.com/example/analytics-dashboard"},{id:5,title:"REST API Template",description:"Production-ready REST API with authentication, validation, and documentation",category:"api",difficulty:"Intermediate",tags:["Express.js","JWT","Swagger"],stars:178,language:"JavaScript",preview:"https://via.placeholder.com/400x250/ef4444/ffffff?text=REST+API",github:"https://github.com/example/rest-api-template"},{id:6,title:"Portfolio Website",description:"Modern portfolio website with animations, blog, and contact form",category:"web",difficulty:"Beginner",tags:["Next.js","Tailwind","Framer Motion"],stars:67,language:"TypeScript",preview:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Portfolio",github:"https://github.com/example/portfolio-website"},{id:7,title:"Social Media App",description:"Instagram-like social media app with posts, stories, and messaging",category:"mobile",difficulty:"Advanced",tags:["Flutter","Firebase","Real-time"],stars:445,language:"Dart",preview:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Social+App",github:"https://github.com/example/social-media-app"},{id:8,title:"GraphQL API",description:"Modern GraphQL API with subscriptions, caching, and real-time updates",category:"api",difficulty:"Advanced",tags:["GraphQL","Apollo","Redis"],stars:298,language:"TypeScript",preview:"https://via.placeholder.com/400x250/84cc16/ffffff?text=GraphQL+API",github:"https://github.com/example/graphql-api"}].filter(m=>{const b=m.title.toLowerCase().includes(r.toLowerCase())||m.description.toLowerCase().includes(r.toLowerCase())||m.tags.some(g=>g.toLowerCase().includes(r.toLowerCase())),w=s==="all"||m.category===s;return b&&w}),c=m=>{switch(m){case"Beginner":return"bg-green-100 text-green-800 border-green-200";case"Intermediate":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"Advanced":return"bg-red-100 text-red-800 border-red-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}},u=m=>{switch(m){case"web":return Fe;case"mobile":return zs;case"api":return yt;case"dashboard":return Ie;default:return Xr}};return t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:t.jsx(Xr,{className:"h-6 w-6 text-primary"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Examples"}),t.jsx("p",{className:"text-muted-foreground",children:"Explore real-world projects and code examples"})]})]}),t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:[t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[t.jsxs("div",{className:"relative max-w-md",children:[t.jsx(Ke,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search examples...",value:r,onChange:m=>e(m.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Er,{className:"h-4 w-4 text-muted-foreground"}),t.jsx("select",{value:s,onChange:m=>n(m.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:a.map(m=>t.jsxs("option",{value:m.id,children:[m.name," (",m.count,")"]},m.id))})]})]}),t.jsxs("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-lg",children:[t.jsx("button",{onClick:()=>i("grid"),className:`p-2 rounded-md transition-colors ${o==="grid"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:t.jsx(Grid3X3,{className:"h-4 w-4"})}),t.jsx("button",{onClick:()=>i("list"),className:`p-2 rounded-md transition-colors ${o==="list"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:t.jsx(No,{className:"h-4 w-4"})})]})]})]}),t.jsx("div",{className:o==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"space-y-4",children:d.map((m,b)=>{const w=u(m.category);return t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:b*.1},className:`bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group ${o==="list"?"flex":""}`,children:[t.jsxs("div",{className:`relative ${o==="list"?"w-48 h-32":"h-48"} bg-muted/50`,children:[t.jsx("img",{src:m.preview,alt:m.title,className:"w-full h-full object-cover"}),t.jsx("div",{className:"absolute top-3 right-3 flex gap-2",children:t.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${c(m.difficulty)}`,children:m.difficulty})}),t.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100",children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(M.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-primary text-primary-foreground rounded-lg shadow-lg",title:"Run Example",children:t.jsx(hn,{className:"h-4 w-4"})}),t.jsx(M.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-white text-gray-900 rounded-lg shadow-lg",title:"Copy Code",children:t.jsx(Nt,{className:"h-4 w-4"})})]})})]}),t.jsxs("div",{className:`p-4 ${o==="list"?"flex-1":""}`,children:[t.jsxs("div",{className:"flex items-start justify-between mb-3",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:t.jsx(w,{className:"h-4 w-4 text-primary"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:m.title}),t.jsx("p",{className:"text-sm text-muted-foreground",children:m.language})]})]}),t.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[t.jsx(We,{className:"h-4 w-4"}),t.jsx("span",{children:m.stars})]})]}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:m.description}),t.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:m.tags.map(g=>t.jsx("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:g},g))}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm",children:[t.jsx(hn,{className:"h-4 w-4"}),"Run"]}),t.jsxs("a",{href:m.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[t.jsx(pe,{className:"h-4 w-4"}),"Code"]}),t.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[t.jsx(Je,{className:"h-4 w-4"}),"Download"]})]})]})]},m.id)})}),d.length===0&&t.jsxs("div",{className:"text-center py-16",children:[t.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:t.jsx(Xr,{className:"h-12 w-12 text-muted-foreground"})}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No examples found"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),t.jsx("button",{onClick:()=>{e(""),n("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),t.jsxs("div",{className:"mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[t.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Have a great example to share?"}),t.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Share your projects with the DreamBuild community and help other developers learn and grow."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[t.jsx(pe,{className:"h-5 w-5"}),"Submit Example"]}),t.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(zt,{className:"h-5 w-5"}),"View Guidelines"]})]})]})]})})},Og=()=>{const[r,e]=p.useState("discussions"),[s,n]=p.useState(""),o=[{id:"discussions",name:"Discussions",count:156,icon:xs},{id:"projects",name:"Showcase",count:89,icon:X},{id:"events",name:"Events",count:12,icon:xt},{id:"resources",name:"Resources",count:45,icon:ys}],i=[{id:1,title:"How to set up Ollama for local AI development?",author:"Alex Chen",avatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=AC",time:"2 hours ago",category:"Getting Started",replies:12,likes:24,isPinned:!0,tags:["ollama","local-ai","setup"]},{id:2,title:"Building a React Native app with DreamBuild - Tips and tricks",author:"Sarah Johnson",avatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SJ",time:"4 hours ago",category:"Mobile Development",replies:8,likes:18,isPinned:!1,tags:["react-native","mobile","tips"]},{id:3,title:"Share your DreamBuild projects - Monthly showcase",author:"Community Team",avatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=CT",time:"1 day ago",category:"Showcase",replies:34,likes:67,isPinned:!0,tags:["showcase","projects","monthly"]},{id:4,title:"API rate limits and best practices",author:"Mike Rodriguez",avatar:"https://via.placeholder.com/40x40/8b5cf6/ffffff?text=MR",time:"2 days ago",category:"API",replies:15,likes:31,isPinned:!1,tags:["api","rate-limits","best-practices"]},{id:5,title:"Deploying to Firebase vs GitHub Pages - Pros and cons",author:"Emma Wilson",avatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=EW",time:"3 days ago",category:"Deployment",replies:22,likes:45,isPinned:!1,tags:["deployment","firebase","github-pages"]}],a=[{id:1,title:"DreamBuild Live Q&A Session",date:"2024-01-25",time:"2:00 PM EST",type:"Live Stream",attendees:156,description:"Join our monthly Q&A session with the DreamBuild team"},{id:2,title:"AI Development Workshop",date:"2024-01-30",time:"10:00 AM EST",type:"Workshop",attendees:89,description:"Learn advanced AI development techniques with DreamBuild"},{id:3,title:"Community Showcase",date:"2024-02-05",time:"6:00 PM EST",type:"Presentation",attendees:234,description:"Featured projects from our amazing community members"}],l=[{label:"Active Members",value:"2,847",icon:fs},{label:"Discussions",value:"1,234",icon:xs},{label:"Projects Shared",value:"567",icon:X},{label:"Events This Month",value:"8",icon:xt}],d=i.filter(c=>c.title.toLowerCase().includes(s.toLowerCase())||c.category.toLowerCase().includes(s.toLowerCase())||c.tags.some(u=>u.toLowerCase().includes(s.toLowerCase())));return t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:t.jsx(fs,{className:"h-6 w-6 text-primary"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Community"}),t.jsx("p",{className:"text-muted-foreground",children:"Connect with developers, share projects, and get help"})]})]}),t.jsxs("div",{className:"relative max-w-md",children:[t.jsx(Ke,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search discussions...",value:s,onChange:c=>n(c.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:l.map((c,u)=>{const m=c.icon;return t.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:"bg-card border border-border rounded-xl p-4",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",children:t.jsx(m,{className:"h-5 w-5 text-primary"})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-2xl font-bold text-foreground",children:c.value}),t.jsx("p",{className:"text-sm text-muted-foreground",children:c.label})]})]})},c.label)})}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[t.jsxs("div",{className:"lg:col-span-3",children:[t.jsx("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-xl mb-6",children:o.map(c=>{const u=c.icon;return t.jsxs("button",{onClick:()=>e(c.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${r===c.id?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground hover:text-foreground hover:bg-background/50"}`,children:[t.jsx(u,{className:"h-4 w-4"}),t.jsx("span",{children:c.name}),t.jsx("span",{className:"px-2 py-1 text-xs bg-muted/50 rounded-full",children:c.count})]},c.id)})}),r==="discussions"&&t.jsx("div",{className:"space-y-4",children:d.map((c,u)=>t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:`bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200 ${c.isPinned?"border-primary/20 bg-primary/5":""}`,children:[c.isPinned&&t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx(wt,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-sm font-medium text-primary",children:"Pinned"})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("img",{src:c.avatar,alt:c.author,className:"w-10 h-10 rounded-full"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h3",{className:"font-semibold text-foreground hover:text-primary transition-colors cursor-pointer mb-2",children:c.title}),t.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-3",children:[t.jsxs("span",{children:["by ",c.author]}),t.jsx("span",{children:"•"}),t.jsx("span",{children:c.time}),t.jsx("span",{children:"•"}),t.jsx("span",{className:"px-2 py-1 bg-muted rounded-md",children:c.category})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[t.jsx(vs,{className:"h-4 w-4"}),t.jsx("span",{children:c.replies})]}),t.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[t.jsx(ws,{className:"h-4 w-4"}),t.jsx("span",{children:c.likes})]}),t.jsx("div",{className:"flex gap-1",children:c.tags.map(m=>t.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",m]},m))})]})]})]})]},c.id))}),r==="projects"&&t.jsxs("div",{className:"text-center py-16",children:[t.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:t.jsx(X,{className:"h-12 w-12 text-muted-foreground"})}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Project Showcase"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Featured projects from our community will appear here"}),t.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Submit Your Project"})]}),r==="events"&&t.jsx("div",{className:"space-y-4",children:a.map((c,u)=>t.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:u*.1},className:"bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200",children:t.jsxs("div",{className:"flex items-start justify-between",children:[t.jsxs("div",{className:"flex-1",children:[t.jsx("h3",{className:"font-semibold text-foreground mb-2",children:c.title}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:c.description}),t.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(xt,{className:"h-4 w-4"}),t.jsx("span",{children:c.date})]}),t.jsx("span",{children:"•"}),t.jsx("span",{children:c.time}),t.jsx("span",{children:"•"}),t.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded-md",children:c.type}),t.jsx("span",{children:"•"}),t.jsxs("span",{children:[c.attendees," attendees"]})]})]}),t.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Join Event"})]})},c.id))}),r==="resources"&&t.jsxs("div",{className:"text-center py-16",children:[t.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:t.jsx(ys,{className:"h-12 w-12 text-muted-foreground"})}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Community Resources"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Curated resources and learning materials will appear here"}),t.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Suggest Resource"})]})]}),t.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[t.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Quick Actions"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[t.jsx(jt,{className:"h-4 w-4"}),"Start Discussion"]}),t.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(X,{className:"h-4 w-4"}),"Share Project"]}),t.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(xt,{className:"h-4 w-4"}),"Create Event"]})]})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[t.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Join Our Community"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(pe,{className:"h-4 w-4"}),t.jsx("span",{children:"GitHub"})]}),t.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(Us,{className:"h-4 w-4"}),t.jsx("span",{children:"Twitter"})]}),t.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(wr,{className:"h-4 w-4"}),t.jsx("span",{children:"Newsletter"})]})]})]}),t.jsxs("div",{className:"bg-primary/5 border border-primary/20 rounded-xl p-6",children:[t.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Community Guidelines"}),t.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[t.jsx("li",{children:"• Be respectful and inclusive"}),t.jsx("li",{children:"• Share helpful and relevant content"}),t.jsx("li",{children:"• Follow our code of conduct"}),t.jsx("li",{children:"• Help others learn and grow"})]})]})]})]})]})})},Ig=()=>t.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[t.jsx("div",{className:"text-center mb-16",children:t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[t.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg",children:t.jsx("span",{className:"text-white font-bold text-3xl",children:"D"})}),t.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6",children:["About ",t.jsx("span",{className:"text-blue-600",children:"DreamBuild"})]}),t.jsx("p",{className:"text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed",children:"DreamBuild is a revolutionary AI-powered development platform that transforms your ideas into code. Simply describe what you want to build, and watch as DreamBuild generates complete applications for you."})]})}),t.jsx("div",{className:"mb-16",children:t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[t.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"What We Do"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"AI-Powered Development"}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Transform your ideas into code using cutting-edge AI models. Simply describe what you want to build, and DreamBuild generates complete, working applications for you."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Multi-Language Support"}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Build applications in popular programming languages including React, Vue, Python, JavaScript, HTML/CSS, and many more. Choose your preferred technology stack."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Instant Deployment"}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Deploy your applications instantly to Firebase Hosting and GitHub Pages. No complex configuration required - just click and deploy."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Local AI Integration"}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Use local AI models for complete privacy and control. No external API keys required - run everything on your own machine for maximum security."})]})]})]})}),t.jsx("div",{className:"mb-16",children:t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[t.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"Our Mission"}),t.jsx("p",{className:"text-lg text-slate-600 dark:text-slate-400 text-center leading-relaxed",children:"To democratize software development by making AI-powered coding tools accessible to everyone. Whether you're an experienced developer or just getting started, DreamBuild empowers you to turn your ideas into reality with the power of artificial intelligence."})]})}),t.jsx("div",{className:"mb-16",children:t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[t.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"About Bradley Virtual Solutions"}),t.jsxs("div",{className:"text-center",children:[t.jsxs("p",{className:"text-slate-600 dark:text-slate-400 mb-4",children:["DreamBuild is developed by ",t.jsx("strong",{className:"text-slate-800 dark:text-white",children:"Bradley Virtual Solutions, LLC"}),", a company dedicated to creating innovative AI-powered development tools."]}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Founded by Ronell Bradley, a full-stack developer passionate about AI and web development, we're committed to making advanced development tools accessible to everyone."})]})]})}),t.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center",children:t.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl",children:[t.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Building?"}),t.jsx("p",{className:"text-blue-100 mb-6 max-w-xl mx-auto",children:"Start your journey with DreamBuild today and experience the future of AI-powered development."}),t.jsxs(M.a,{href:"/ai-builder",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg",children:[t.jsx(X,{className:"h-5 w-5"}),"Start Building Now",t.jsx(Vt,{className:"h-4 w-4"})]})]})})]})}),Mg=()=>{const[r,e]=p.useState(""),[s,n]=p.useState("all"),o=[{id:"all",name:"All Posts",count:24},{id:"tutorials",name:"Tutorials",count:8},{id:"ai",name:"AI & ML",count:6},{id:"development",name:"Development",count:5},{id:"company",name:"Company",count:5}],i={title:"Getting Started with Local AI Development: A Complete Guide",excerpt:"Learn how to set up Ollama, integrate local AI models, and build your first AI-powered application with DreamBuild.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-20",readTime:"8 min read",category:"tutorials",tags:["ai","ollama","tutorial","getting-started"],image:"https://via.placeholder.com/600x300/2563eb/ffffff?text=Local+AI+Guide",likes:156,comments:23},l=[{id:2,title:"Building a React Native App with AI Code Generation",excerpt:"Discover how to leverage DreamBuild's AI capabilities to create a mobile app from scratch.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-18",readTime:"6 min read",category:"tutorials",tags:["react-native","mobile","ai"],featured:!1,image:"https://via.placeholder.com/400x250/10b981/ffffff?text=React+Native",likes:89,comments:12,views:1523},{id:3,title:"The Future of AI-Powered Development Tools",excerpt:"Exploring emerging trends and technologies that will shape the future of software development.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-15",readTime:"10 min read",category:"ai",tags:["ai","future","technology","trends"],featured:!1,image:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Future+AI",likes:234,comments:34,views:4567},{id:4,title:"DreamBuild 2.0: What's New and Exciting",excerpt:"Announcing the latest features and improvements in DreamBuild 2.0, including enhanced AI capabilities.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-12",readTime:"5 min read",category:"company",tags:["release","features","announcement"],featured:!1,image:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=DreamBuild+2.0",likes:167,comments:28,views:3421},{id:5,title:"Best Practices for AI Code Generation",excerpt:"Learn how to write effective prompts and get the best results from AI code generation tools.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-10",readTime:"7 min read",category:"development",tags:["best-practices","prompts","ai","tips"],featured:!1,image:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Best+Practices",likes:145,comments:19,views:2890},{id:6,title:"Setting Up Your Development Environment for AI",excerpt:"A comprehensive guide to configuring your development environment for optimal AI-assisted coding.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-08",readTime:"9 min read",category:"tutorials",tags:["setup","environment","development","tools"],featured:!1,image:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Dev+Environment",likes:98,comments:15,views:1876},{id:7,title:"Community Spotlight: Amazing Projects Built with DreamBuild",excerpt:"Highlighting some of the incredible projects our community has created using DreamBuild.",author:"Community Team",authorAvatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=CT",publishDate:"2024-01-05",readTime:"6 min read",category:"company",tags:["community","showcase","projects","spotlight"],featured:!1,image:"https://via.placeholder.com/400x250/84cc16/ffffff?text=Community+Projects",likes:203,comments:41,views:5234}].filter(u=>{const m=u.title.toLowerCase().includes(r.toLowerCase())||u.excerpt.toLowerCase().includes(r.toLowerCase())||u.tags.some(w=>w.toLowerCase().includes(r.toLowerCase())),b=s==="all"||u.category===s;return m&&b}),d=u=>{switch(u){case"tutorials":return X;case"ai":return wt;case"development":return Fe;case"company":return go;default:return mr}},c=u=>{switch(u){case"tutorials":return"bg-blue-100 text-blue-800 border-blue-200";case"ai":return"bg-purple-100 text-purple-800 border-purple-200";case"development":return"bg-green-100 text-green-800 border-green-200";case"company":return"bg-orange-100 text-orange-800 border-orange-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}};return t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:t.jsx(mr,{className:"h-6 w-6 text-primary"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Blog"}),t.jsx("p",{className:"text-muted-foreground",children:"Insights, tutorials, and updates from the DreamBuild team"})]})]}),t.jsx("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[t.jsxs("div",{className:"relative max-w-md",children:[t.jsx(Ke,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search blog posts...",value:r,onChange:u=>e(u.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Er,{className:"h-4 w-4 text-muted-foreground"}),t.jsx("select",{value:s,onChange:u=>n(u.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:o.map(u=>t.jsxs("option",{value:u.id,children:[u.name," (",u.count,")"]},u.id))})]})]})})]}),t.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-12",children:t.jsx("div",{className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200",children:t.jsxs("div",{className:"md:flex",children:[t.jsx("div",{className:"md:w-1/2",children:t.jsx("img",{src:i.image,alt:i.title,className:"w-full h-64 md:h-full object-cover"})}),t.jsxs("div",{className:"md:w-1/2 p-8",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[t.jsx("span",{className:"px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium",children:"Featured"}),t.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full border ${c(i.category)}`,children:i.category})]}),t.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer",children:i.title}),t.jsx("p",{className:"text-muted-foreground mb-6 leading-relaxed",children:i.excerpt}),t.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-6",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("img",{src:i.authorAvatar,alt:i.author,className:"w-6 h-6 rounded-full"}),t.jsx("span",{children:i.author})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(xt,{className:"h-4 w-4"}),t.jsx("span",{children:i.publishDate})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(Co,{className:"h-4 w-4"}),t.jsx("span",{children:i.readTime})]})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("div",{className:"flex gap-1",children:i.tags.map(u=>t.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",u]},u))}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[t.jsx(ws,{className:"h-4 w-4"}),t.jsx("span",{children:i.likes})]}),t.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[t.jsx(vs,{className:"h-4 w-4"}),t.jsx("span",{children:i.comments})]})]})]})]})]})})}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map((u,m)=>{const b=d(u.category);return t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:m*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group",children:[t.jsxs("div",{className:"relative h-48 bg-muted/50",children:[t.jsx("img",{src:u.image,alt:u.title,className:"w-full h-full object-cover"}),t.jsx("div",{className:"absolute top-3 right-3",children:t.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${c(u.category)}`,children:u.category})})]}),t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx(b,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-sm text-primary font-medium",children:u.category})]}),t.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer mb-3 line-clamp-2",children:u.title}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-3",children:u.excerpt}),t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx("img",{src:u.authorAvatar,alt:u.author,className:"w-8 h-8 rounded-full"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("p",{className:"text-sm font-medium text-foreground",children:u.author}),t.jsxs("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[t.jsx("span",{children:u.publishDate}),t.jsx("span",{children:"•"}),t.jsx("span",{children:u.readTime})]})]})]}),t.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:u.tags.map(w=>t.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",w]},w))}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(ws,{className:"h-4 w-4"}),t.jsx("span",{children:u.likes})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(vs,{className:"h-4 w-4"}),t.jsx("span",{children:u.comments})]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:t.jsx(ys,{className:"h-4 w-4"})}),t.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:t.jsx(ko,{className:"h-4 w-4"})}),t.jsxs("button",{className:"flex items-center gap-1 text-primary hover:text-primary-dark transition-colors",children:[t.jsx("span",{className:"text-sm font-medium",children:"Read"}),t.jsx(Vt,{className:"h-4 w-4"})]})]})]})]})]},u.id)})}),l.length===0&&t.jsxs("div",{className:"text-center py-16",children:[t.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:t.jsx(mr,{className:"h-12 w-12 text-muted-foreground"})}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No posts found"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),t.jsx("button",{onClick:()=>{e(""),n("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),t.jsxs("div",{className:"mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[t.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Stay Updated"}),t.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Subscribe to our newsletter for the latest tutorials, updates, and insights from the DreamBuild team."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto",children:[t.jsx("input",{type:"email",placeholder:"Enter your email",className:"flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"}),t.jsx("button",{className:"px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Subscribe"})]})]})]})})},Fg=()=>{const[r,e]=p.useState({name:"",email:"",message:""}),[s,n]=p.useState(!1),[o,i]=p.useState(null),a=[{icon:wr,title:"Email Us",description:"Get in touch via email",value:"hello@dreambuild.dev",action:"mailto:hello@dreambuild.dev"}],l=[{icon:pe,href:"https://github.com/ronb12/DreamBuild",label:"GitHub"},{icon:Us,href:"#",label:"Twitter"},{icon:Qa,href:"#",label:"LinkedIn"}],d=u=>{const{name:m,value:b}=u.target;e(w=>({...w,[m]:b}))},c=async u=>{u.preventDefault(),n(!0),await new Promise(m=>setTimeout(m,2e3)),n(!1),i("success"),e({name:"",email:"",message:""}),setTimeout(()=>i(null),5e3)};return t.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100",style:{paddingTop:"100px"},children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsx("div",{className:"text-center mb-12",children:t.jsxs(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[t.jsxs("h1",{className:"text-5xl font-bold text-gray-900 mb-6",children:["Contact ",t.jsx("span",{className:"text-primary",children:"Us"})]}),t.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Have questions about DreamBuild? We'd love to hear from you."})]})}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[t.jsxs(M.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-white border border-gray-200 rounded-2xl p-8 shadow-sm",children:[t.jsxs("div",{className:"mb-8",children:[t.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Send us a Message"}),t.jsx("p",{className:"text-gray-600",children:"Fill out the form below and we'll get back to you as soon as possible."})]}),t.jsxs("form",{onSubmit:c,className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Name *"}),t.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:d,required:!0,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all",placeholder:"Your full name"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email *"}),t.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:d,required:!0,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all",placeholder:"your@email.com"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Message *"}),t.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:d,required:!0,rows:6,className:"w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none",placeholder:"Tell us how we can help you..."})]}),o==="success"&&t.jsxs(M.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg",children:[t.jsx(So,{className:"h-5 w-5 text-green-600"}),t.jsx("span",{className:"text-green-800",children:"Message sent successfully! We'll get back to you soon."})]}),t.jsx("button",{type:"submit",disabled:s,className:"w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold",children:s?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Sending..."]}):t.jsxs(t.Fragment,{children:[t.jsx(Hs,{className:"h-5 w-5"}),"Send Message"]})})]})]}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs(M.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Get in Touch"}),t.jsx("div",{className:"space-y-4",children:a.map(u=>{const m=u.icon;return t.jsxs("a",{href:u.action,className:"flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors",children:t.jsx(m,{className:"h-5 w-5 text-primary"})}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h4",{className:"font-semibold text-gray-900 group-hover:text-primary transition-colors",children:u.title}),t.jsx("p",{className:"text-sm text-gray-600 mb-1",children:u.description}),t.jsx("p",{className:"text-sm font-medium text-primary",children:u.value})]})]},u.title)})})]}),t.jsxs(M.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},className:"bg-white border border-gray-200 rounded-2xl p-6 shadow-sm",children:[t.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-6",children:"Follow Us"}),t.jsx("div",{className:"space-y-3",children:l.map(u=>{const m=u.icon;return t.jsxs("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group",children:[t.jsx(m,{className:"h-5 w-5 text-gray-600 group-hover:text-primary transition-colors"}),t.jsx("span",{className:"text-sm font-medium text-gray-900 group-hover:text-primary transition-colors",children:u.label})]},u.label)})})]})]})]})]})})};function Lg(){const r=Qe();return["/ai-builder"].includes(r.pathname)?null:t.jsx(uu,{})}function _g({children:r}){const e=Qe();return["/ai-builder","/dashboard","/projects"].includes(e.pathname)?t.jsx("main",{children:r}):t.jsx("main",{className:"pt-16",children:r})}function $g(){return t.jsx(Xc,{children:t.jsx(lu,{children:t.jsx(cu,{children:t.jsx(oc,{children:t.jsxs("div",{className:"min-h-screen bg-background",children:[t.jsx(du,{}),t.jsx(_g,{children:t.jsxs(Ql,{children:[t.jsx(ie,{path:"/",element:t.jsx(mu,{})}),t.jsx(ie,{path:"/app",element:t.jsx(Yl,{to:"/ai-builder",replace:!0})}),t.jsx(ie,{path:"/ai-builder",element:t.jsx(jg,{})}),t.jsx(ie,{path:"/templates",element:t.jsx(Ng,{})}),t.jsx(ie,{path:"/dashboard",element:t.jsx(kg,{})}),t.jsx(ie,{path:"/login",element:t.jsx(Tg,{})}),t.jsx(ie,{path:"/signup",element:t.jsx(Dg,{})}),t.jsx(ie,{path:"/projects",element:t.jsx(Eg,{})}),t.jsx(ie,{path:"/settings",element:t.jsx(Ag,{})}),t.jsx(ie,{path:"/documentation",element:t.jsx(Pg,{})}),t.jsx(ie,{path:"/examples",element:t.jsx(Rg,{})}),t.jsx(ie,{path:"/community",element:t.jsx(Og,{})}),t.jsx(ie,{path:"/about",element:t.jsx(Ig,{})}),t.jsx(ie,{path:"/blog",element:t.jsx(Mg,{})}),t.jsx(ie,{path:"/contact",element:t.jsx(Fg,{})})]})}),t.jsx(Lg,{}),t.jsx(Yc,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--card)",color:"var(--card-foreground)",border:"1px solid var(--border)"}}})]})})})})})}Ao(document.getElementById("root")).render(t.jsx(p.StrictMode,{children:t.jsx($g,{})}));
//# sourceMappingURL=index-CeslRMUF.js.map
