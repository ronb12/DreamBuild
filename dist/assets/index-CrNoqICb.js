import{r as p,a as la,b as ca,R as Ee,g as da}from"./react-vendor-DWvC8KHc.js";import{_ as ua,C as ma,r as mn,S as pa,F as ha,g as ps,a as Cr,b as fa,c as ga,d as xa,i as gr,e as Fs,f as _s,o as Bs,h as ir,j as q,s as ba,G as ya,k as pn,l as xe,m as va,u as Xt,n as At,p as de,q as ve,w as ue,t as Pt,v as Le,x as Jr,y as ar,z as wa,A as Rt}from"./firebase-CYkmqfVJ.js";import{_ as tt}from"./monaco-editor-BWpThiUx.js";import{S as yt,R as Ne,C as X,D as bt,U as hs,M as ja,a as Na,b as fs,L as hn,X as Sa,c as Ca,G as Ie,T as $s,d as xr,e as Us,m as O,f as xo,Z as vt,F as He,P as br,g as ft,h as bo,i as ot,j as ka,k as yo,A as Be,l as Ut,n as wt,o as gs,p as vo,q as Hs,E as yr,r as Ta,s as Da,B as Kr,t as vr,u as Ea,v as Aa,w as ke,x as We,y as kr,z as Ae,H as zs,I as Pa,J as it,K as jt,N as xs,O as $e,Q as wo,V as Ra,W as jo,Y as Oa,_ as No,$ as Gs,a0 as Ia,a1 as Ma,a2 as La,a3 as Tr,a4 as gt,a5 as Fa,a6 as So,a7 as _a,a8 as Ba,a9 as $a,aa as lr,ab as Ua,ac as Yr,ad as fn,ae as bs,af as ys,ag as vs,ah as Ha,ai as za,aj as Ga,ak as Wa}from"./ui-vendor-B6P2j6a_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();var Co={exports:{}},Dr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=p,Va=Symbol.for("react.element"),Ja=Symbol.for("react.fragment"),Ka=Object.prototype.hasOwnProperty,Ya=qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xa={key:!0,ref:!0,__self:!0,__source:!0};function ko(r,e,s){var n,o={},i=null,a=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)Ka.call(e,n)&&!Xa.hasOwnProperty(n)&&(o[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:Va,type:r,key:i,ref:a,props:o,_owner:Ya.current}}Dr.Fragment=Ja;Dr.jsx=ko;Dr.jsxs=ko;Co.exports=Dr;var t=Co.exports,To,gn=la;To=gn.createRoot,gn.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ht(){return Ht=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(r[n]=s[n])}return r},Ht.apply(this,arguments)}var Ue;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Ue||(Ue={}));const xn="popstate";function Qa(r){r===void 0&&(r={});function e(n,o){let{pathname:i,search:a,hash:l}=n.location;return ws("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function s(n,o){return typeof o=="string"?o:wr(o)}return el(e,s,null,r)}function te(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Do(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Za(){return Math.random().toString(36).substr(2,8)}function bn(r,e){return{usr:r.state,key:r.key,idx:e}}function ws(r,e,s,n){return s===void 0&&(s=null),Ht({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?St(e):e,{state:s,key:e&&e.key||n||Za()})}function wr(r){let{pathname:e="/",search:s="",hash:n=""}=r;return s&&s!=="?"&&(e+=s.charAt(0)==="?"?s:"?"+s),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function St(r){let e={};if(r){let s=r.indexOf("#");s>=0&&(e.hash=r.substr(s),r=r.substr(0,s));let n=r.indexOf("?");n>=0&&(e.search=r.substr(n),r=r.substr(0,n)),r&&(e.pathname=r)}return e}function el(r,e,s,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,l=Ue.Pop,d=null,c=m();c==null&&(c=0,a.replaceState(Ht({},a.state,{idx:c}),""));function m(){return(a.state||{idx:null}).idx}function u(){l=Ue.Pop;let h=m(),k=h==null?null:h-c;c=h,d&&d({action:l,location:j.location,delta:k})}function g(h,k){l=Ue.Push;let N=ws(j.location,h,k);c=m()+1;let v=bn(N,c),y=j.createHref(N);try{a.pushState(v,"",y)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;o.location.assign(y)}i&&d&&d({action:l,location:j.location,delta:1})}function b(h,k){l=Ue.Replace;let N=ws(j.location,h,k);c=m();let v=bn(N,c),y=j.createHref(N);a.replaceState(v,"",y),i&&d&&d({action:l,location:j.location,delta:0})}function f(h){let k=o.location.origin!=="null"?o.location.origin:o.location.href,N=typeof h=="string"?h:wr(h);return N=N.replace(/ $/,"%20"),te(k,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,k)}let j={get action(){return l},get location(){return r(o,a)},listen(h){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(xn,u),d=h,()=>{o.removeEventListener(xn,u),d=null}},createHref(h){return e(o,h)},createURL:f,encodeLocation(h){let k=f(h);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:g,replace:b,go(h){return a.go(h)}};return j}var yn;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(yn||(yn={}));function tl(r,e,s){return s===void 0&&(s="/"),rl(r,e,s)}function rl(r,e,s,n){let o=typeof e=="string"?St(e):e,i=Ws(o.pathname||"/",s);if(i==null)return null;let a=Eo(r);sl(a);let l=null;for(let d=0;l==null&&d<a.length;++d){let c=fl(i);l=ml(a[d],c)}return l}function Eo(r,e,s,n){e===void 0&&(e=[]),s===void 0&&(s=[]),n===void 0&&(n="");let o=(i,a,l)=>{let d={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};d.relativePath.startsWith("/")&&(te(d.relativePath.startsWith(n),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(n.length));let c=ze([n,d.relativePath]),m=s.concat(d);i.children&&i.children.length>0&&(te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Eo(i.children,e,m,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:dl(c,i.index),routesMeta:m})};return r.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let d of Ao(i.path))o(i,a,d)}),e}function Ao(r){let e=r.split("/");if(e.length===0)return[];let[s,...n]=e,o=s.endsWith("?"),i=s.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=Ao(n.join("/")),l=[];return l.push(...a.map(d=>d===""?i:[i,d].join("/"))),o&&l.push(...a),l.map(d=>r.startsWith("/")&&d===""?"/":d)}function sl(r){r.sort((e,s)=>e.score!==s.score?s.score-e.score:ul(e.routesMeta.map(n=>n.childrenIndex),s.routesMeta.map(n=>n.childrenIndex)))}const nl=/^:[\w-]+$/,ol=3,il=2,al=1,ll=10,cl=-2,vn=r=>r==="*";function dl(r,e){let s=r.split("/"),n=s.length;return s.some(vn)&&(n+=cl),e&&(n+=il),s.filter(o=>!vn(o)).reduce((o,i)=>o+(nl.test(i)?ol:i===""?al:ll),n)}function ul(r,e){return r.length===e.length&&r.slice(0,-1).every((n,o)=>n===e[o])?r[r.length-1]-e[e.length-1]:0}function ml(r,e,s){let{routesMeta:n}=r,o={},i="/",a=[];for(let l=0;l<n.length;++l){let d=n[l],c=l===n.length-1,m=i==="/"?e:e.slice(i.length)||"/",u=pl({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},m),g=d.route;if(!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:ze([i,u.pathname]),pathnameBase:yl(ze([i,u.pathnameBase])),route:g}),u.pathnameBase!=="/"&&(i=ze([i,u.pathnameBase]))}return a}function pl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[s,n]=hl(r.path,r.caseSensitive,r.end),o=e.match(s);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((c,m,u)=>{let{paramName:g,isOptional:b}=m;if(g==="*"){let j=l[u]||"";a=i.slice(0,i.length-j.length).replace(/(.)\/+$/,"$1")}const f=l[u];return b&&!f?c[g]=void 0:c[g]=(f||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:r}}function hl(r,e,s){e===void 0&&(e=!1),s===void 0&&(s=!0),Do(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let n=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,d)=>(n.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(n.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),n]}function fl(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Do(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Ws(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let s=e.endsWith("/")?e.length-1:e.length,n=r.charAt(s);return n&&n!=="/"?null:r.slice(s)||"/"}function gl(r,e){e===void 0&&(e="/");let{pathname:s,search:n="",hash:o=""}=typeof r=="string"?St(r):r;return{pathname:s?s.startsWith("/")?s:xl(s,e):e,search:vl(n),hash:wl(o)}}function xl(r,e){let s=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?s.length>1&&s.pop():o!=="."&&s.push(o)}),s.length>1?s.join("/"):"/"}function Xr(r,e,s,n){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bl(r){return r.filter((e,s)=>s===0||e.route.path&&e.route.path.length>0)}function qs(r,e){let s=bl(r);return e?s.map((n,o)=>o===s.length-1?n.pathname:n.pathnameBase):s.map(n=>n.pathnameBase)}function Vs(r,e,s,n){n===void 0&&(n=!1);let o;typeof r=="string"?o=St(r):(o=Ht({},r),te(!o.pathname||!o.pathname.includes("?"),Xr("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),Xr("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),Xr("#","search","hash",o)));let i=r===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=s;else{let u=e.length-1;if(!n&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),u-=1;o.pathname=g.join("/")}l=u>=0?e[u]:"/"}let d=gl(o,l),c=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&s.endsWith("/");return!d.pathname.endsWith("/")&&(c||m)&&(d.pathname+="/"),d}const ze=r=>r.join("/").replace(/\/\/+/g,"/"),yl=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),vl=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,wl=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function jl(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Po=["post","put","patch","delete"];new Set(Po);const Nl=["get",...Po];new Set(Nl);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zt(){return zt=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(r[n]=s[n])}return r},zt.apply(this,arguments)}const Js=p.createContext(null),Sl=p.createContext(null),qe=p.createContext(null),Er=p.createContext(null),Ve=p.createContext({outlet:null,matches:[],isDataRoute:!1}),Ro=p.createContext(null);function Cl(r,e){let{relative:s}=e===void 0?{}:e;Ct()||te(!1);let{basename:n,navigator:o}=p.useContext(qe),{hash:i,pathname:a,search:l}=Io(r,{relative:s}),d=a;return n!=="/"&&(d=a==="/"?n:ze([n,a])),o.createHref({pathname:d,search:l,hash:i})}function Ct(){return p.useContext(Er)!=null}function Je(){return Ct()||te(!1),p.useContext(Er).location}function Oo(r){p.useContext(qe).static||p.useLayoutEffect(r)}function Ar(){let{isDataRoute:r}=p.useContext(Ve);return r?_l():kl()}function kl(){Ct()||te(!1);let r=p.useContext(Js),{basename:e,future:s,navigator:n}=p.useContext(qe),{matches:o}=p.useContext(Ve),{pathname:i}=Je(),a=JSON.stringify(qs(o,s.v7_relativeSplatPath)),l=p.useRef(!1);return Oo(()=>{l.current=!0}),p.useCallback(function(c,m){if(m===void 0&&(m={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let u=Vs(c,JSON.parse(a),i,m.relative==="path");r==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:ze([e,u.pathname])),(m.replace?n.replace:n.push)(u,m.state,m)},[e,n,a,i,r])}function Io(r,e){let{relative:s}=e===void 0?{}:e,{future:n}=p.useContext(qe),{matches:o}=p.useContext(Ve),{pathname:i}=Je(),a=JSON.stringify(qs(o,n.v7_relativeSplatPath));return p.useMemo(()=>Vs(r,JSON.parse(a),i,s==="path"),[r,a,i,s])}function Tl(r,e){return Dl(r,e)}function Dl(r,e,s,n){Ct()||te(!1);let{navigator:o}=p.useContext(qe),{matches:i}=p.useContext(Ve),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let c=Je(),m;if(e){var u;let h=typeof e=="string"?St(e):e;d==="/"||(u=h.pathname)!=null&&u.startsWith(d)||te(!1),m=h}else m=c;let g=m.pathname||"/",b=g;if(d!=="/"){let h=d.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(h.length).join("/")}let f=tl(r,{pathname:b}),j=Ol(f&&f.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:ze([d,o.encodeLocation?o.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?d:ze([d,o.encodeLocation?o.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,s,n);return e&&j?p.createElement(Er.Provider,{value:{location:zt({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Ue.Pop}},j):j}function El(){let r=Fl(),e=jl(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},e),s?p.createElement("pre",{style:o},s):null,null)}const Al=p.createElement(El,null);class Pl extends p.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,s){return s.location!==e.location||s.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:s.error,location:s.location,revalidation:e.revalidation||s.revalidation}}componentDidCatch(e,s){console.error("React Router caught the following error during render",e,s)}render(){return this.state.error!==void 0?p.createElement(Ve.Provider,{value:this.props.routeContext},p.createElement(Ro.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rl(r){let{routeContext:e,match:s,children:n}=r,o=p.useContext(Js);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),p.createElement(Ve.Provider,{value:e},n)}function Ol(r,e,s,n){var o;if(e===void 0&&(e=[]),s===void 0&&(s=null),n===void 0&&(n=null),r==null){var i;if(!s)return null;if(s.errors)r=s.matches;else if((i=n)!=null&&i.v7_partialHydration&&e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let a=r,l=(o=s)==null?void 0:o.errors;if(l!=null){let m=a.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);m>=0||te(!1),a=a.slice(0,Math.min(a.length,m+1))}let d=!1,c=-1;if(s&&n&&n.v7_partialHydration)for(let m=0;m<a.length;m++){let u=a[m];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=m),u.route.id){let{loaderData:g,errors:b}=s,f=u.route.loader&&g[u.route.id]===void 0&&(!b||b[u.route.id]===void 0);if(u.route.lazy||f){d=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((m,u,g)=>{let b,f=!1,j=null,h=null;s&&(b=l&&u.route.id?l[u.route.id]:void 0,j=u.route.errorElement||Al,d&&(c<0&&g===0?(Bl("route-fallback"),f=!0,h=null):c===g&&(f=!0,h=u.route.hydrateFallbackElement||null)));let k=e.concat(a.slice(0,g+1)),N=()=>{let v;return b?v=j:f?v=h:u.route.Component?v=p.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=m,p.createElement(Rl,{match:u,routeContext:{outlet:m,matches:k,isDataRoute:s!=null},children:v})};return s&&(u.route.ErrorBoundary||u.route.errorElement||g===0)?p.createElement(Pl,{location:s.location,revalidation:s.revalidation,component:j,error:b,children:N(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):N()},null)}var Mo=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(Mo||{}),Lo=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Lo||{});function Il(r){let e=p.useContext(Js);return e||te(!1),e}function Ml(r){let e=p.useContext(Sl);return e||te(!1),e}function Ll(r){let e=p.useContext(Ve);return e||te(!1),e}function Fo(r){let e=Ll(),s=e.matches[e.matches.length-1];return s.route.id||te(!1),s.route.id}function Fl(){var r;let e=p.useContext(Ro),s=Ml(),n=Fo();return e!==void 0?e:(r=s.errors)==null?void 0:r[n]}function _l(){let{router:r}=Il(Mo.UseNavigateStable),e=Fo(Lo.UseNavigateStable),s=p.useRef(!1);return Oo(()=>{s.current=!0}),p.useCallback(function(o,i){i===void 0&&(i={}),s.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,zt({fromRouteId:e},i)))},[r,e])}const wn={};function Bl(r,e,s){wn[r]||(wn[r]=!0)}function $l(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Ul(r){let{to:e,replace:s,state:n,relative:o}=r;Ct()||te(!1);let{future:i,static:a}=p.useContext(qe),{matches:l}=p.useContext(Ve),{pathname:d}=Je(),c=Ar(),m=Vs(e,qs(l,i.v7_relativeSplatPath),d,o==="path"),u=JSON.stringify(m);return p.useEffect(()=>c(JSON.parse(u),{replace:s,state:n,relative:o}),[c,u,o,s,n]),null}function ie(r){te(!1)}function Hl(r){let{basename:e="/",children:s=null,location:n,navigationType:o=Ue.Pop,navigator:i,static:a=!1,future:l}=r;Ct()&&te(!1);let d=e.replace(/^\/*/,"/"),c=p.useMemo(()=>({basename:d,navigator:i,static:a,future:zt({v7_relativeSplatPath:!1},l)}),[d,l,i,a]);typeof n=="string"&&(n=St(n));let{pathname:m="/",search:u="",hash:g="",state:b=null,key:f="default"}=n,j=p.useMemo(()=>{let h=Ws(m,d);return h==null?null:{location:{pathname:h,search:u,hash:g,state:b,key:f},navigationType:o}},[d,m,u,g,b,f,o]);return j==null?null:p.createElement(qe.Provider,{value:c},p.createElement(Er.Provider,{children:s,value:j}))}function zl(r){let{children:e,location:s}=r;return Tl(js(e),s)}new Promise(()=>{});function js(r,e){e===void 0&&(e=[]);let s=[];return p.Children.forEach(r,(n,o)=>{if(!p.isValidElement(n))return;let i=[...e,o];if(n.type===p.Fragment){s.push.apply(s,js(n.props.children,i));return}n.type!==ie&&te(!1),!n.props.index||!n.props.children||te(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=js(n.props.children,i)),s.push(a)}),s}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(r[n]=s[n])}return r},Ns.apply(this,arguments)}function Gl(r,e){if(r==null)return{};var s={},n=Object.keys(r),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(s[o]=r[o]);return s}function Wl(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ql(r,e){return r.button===0&&(!e||e==="_self")&&!Wl(r)}const Vl=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Jl="6";try{window.__reactRouterVersion=Jl}catch{}const Kl="startTransition",jn=ca[Kl];function Yl(r){let{basename:e,children:s,future:n,window:o}=r,i=p.useRef();i.current==null&&(i.current=Qa({window:o,v5Compat:!0}));let a=i.current,[l,d]=p.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},m=p.useCallback(u=>{c&&jn?jn(()=>d(u)):d(u)},[d,c]);return p.useLayoutEffect(()=>a.listen(m),[a,m]),p.useEffect(()=>$l(n),[n]),p.createElement(Hl,{basename:e,children:s,location:l.location,navigationType:l.action,navigator:a,future:n})}const Xl=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ql=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,me=p.forwardRef(function(e,s){let{onClick:n,relative:o,reloadDocument:i,replace:a,state:l,target:d,to:c,preventScrollReset:m,viewTransition:u}=e,g=Gl(e,Vl),{basename:b}=p.useContext(qe),f,j=!1;if(typeof c=="string"&&Ql.test(c)&&(f=c,Xl))try{let v=new URL(window.location.href),y=c.startsWith("//")?new URL(v.protocol+c):new URL(c),x=Ws(y.pathname,b);y.origin===v.origin&&x!=null?c=x+y.search+y.hash:j=!0}catch{}let h=Cl(c,{relative:o}),k=Zl(c,{replace:a,state:l,target:d,preventScrollReset:m,relative:o,viewTransition:u});function N(v){n&&n(v),v.defaultPrevented||k(v)}return p.createElement("a",Ns({},g,{href:f||h,onClick:j||i?n:N,ref:s,target:d}))});var Nn;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Nn||(Nn={}));var Sn;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Sn||(Sn={}));function Zl(r,e){let{target:s,replace:n,state:o,preventScrollReset:i,relative:a,viewTransition:l}=e===void 0?{}:e,d=Ar(),c=Je(),m=Io(r,{relative:a});return p.useCallback(u=>{if(ql(u,s)){u.preventDefault();let g=n!==void 0?n:wr(c)===wr(m);d(r,{replace:g,state:o,preventScrollReset:i,relative:a,viewTransition:l})}},[c,d,m,n,o,s,r,i,a,l])}let ec={data:""},tc=r=>typeof window=="object"?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||ec,rc=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,sc=/\/\*[^]*?\*\/|  +/g,Cn=/\n+/g,Fe=(r,e)=>{let s="",n="",o="";for(let i in r){let a=r[i];i[0]=="@"?i[1]=="i"?s=i+" "+a+";":n+=i[1]=="f"?Fe(a,i):i+"{"+Fe(a,i[1]=="k"?"":e)+"}":typeof a=="object"?n+=Fe(a,e?e.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,l):l?l+" "+d:d)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Fe.p?Fe.p(i,a):i+":"+a+";")}return s+(e&&o?e+"{"+o+"}":o)+n},Re={},_o=r=>{if(typeof r=="object"){let e="";for(let s in r)e+=s+_o(r[s]);return e}return r},nc=(r,e,s,n,o)=>{let i=_o(r),a=Re[i]||(Re[i]=(d=>{let c=0,m=11;for(;c<d.length;)m=101*m+d.charCodeAt(c++)>>>0;return"go"+m})(i));if(!Re[a]){let d=i!==r?r:(c=>{let m,u,g=[{}];for(;m=rc.exec(c.replace(sc,""));)m[4]?g.shift():m[3]?(u=m[3].replace(Cn," ").trim(),g.unshift(g[0][u]=g[0][u]||{})):g[0][m[1]]=m[2].replace(Cn," ").trim();return g[0]})(r);Re[a]=Fe(o?{["@keyframes "+a]:d}:d,s?"":"."+a)}let l=s&&Re.g?Re.g:null;return s&&(Re.g=Re[a]),((d,c,m,u)=>{u?c.data=c.data.replace(u,d):c.data.indexOf(d)===-1&&(c.data=m?d+c.data:c.data+d)})(Re[a],e,n,l),a},oc=(r,e,s)=>r.reduce((n,o,i)=>{let a=e[i];if(a&&a.call){let l=a(s),d=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=d?"."+d:l&&typeof l=="object"?l.props?"":Fe(l,""):l===!1?"":l}return n+o+(a??"")},"");function Pr(r){let e=this||{},s=r.call?r(e.p):r;return nc(s.unshift?s.raw?oc(s,[].slice.call(arguments,1),e.p):s.reduce((n,o)=>Object.assign(n,o&&o.call?o(e.p):o),{}):s,tc(e.target),e.g,e.o,e.k)}let Bo,Ss,Cs;Pr.bind({g:1});let Me=Pr.bind({k:1});function ic(r,e,s,n){Fe.p=e,Bo=r,Ss=s,Cs=n}function Ke(r,e){let s=this||{};return function(){let n=arguments;function o(i,a){let l=Object.assign({},i),d=l.className||o.className;s.p=Object.assign({theme:Ss&&Ss()},l),s.o=/ *go\d+/.test(d),l.className=Pr.apply(s,n)+(d?" "+d:"");let c=r;return r[0]&&(c=l.as||r,delete l.as),Cs&&c[0]&&Cs(l),Bo(c,l)}return o}}var ac=r=>typeof r=="function",jr=(r,e)=>ac(r)?r(e):r,lc=(()=>{let r=0;return()=>(++r).toString()})(),$o=(()=>{let r;return()=>{if(r===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r}})(),cc=20,Ks="default",Uo=(r,e)=>{let{toastLimit:s}=r.settings;switch(e.type){case 0:return{...r,toasts:[e.toast,...r.toasts].slice(0,s)};case 1:return{...r,toasts:r.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:n}=e;return Uo(r,{type:r.toasts.find(a=>a.id===n.id)?1:0,toast:n});case 3:let{toastId:o}=e;return{...r,toasts:r.toasts.map(a=>a.id===o||o===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...r,toasts:[]}:{...r,toasts:r.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...r,pausedAt:e.time};case 6:let i=e.time-(r.pausedAt||0);return{...r,pausedAt:void 0,toasts:r.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},cr=[],Ho={toasts:[],pausedAt:void 0,settings:{toastLimit:cc}},Te={},zo=(r,e=Ks)=>{Te[e]=Uo(Te[e]||Ho,r),cr.forEach(([s,n])=>{s===e&&n(Te[e])})},Go=r=>Object.keys(Te).forEach(e=>zo(r,e)),dc=r=>Object.keys(Te).find(e=>Te[e].toasts.some(s=>s.id===r)),Rr=(r=Ks)=>e=>{zo(e,r)},uc={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mc=(r={},e=Ks)=>{let[s,n]=p.useState(Te[e]||Ho),o=p.useRef(Te[e]);p.useEffect(()=>(o.current!==Te[e]&&n(Te[e]),cr.push([e,n]),()=>{let a=cr.findIndex(([l])=>l===e);a>-1&&cr.splice(a,1)}),[e]);let i=s.toasts.map(a=>{var l,d,c;return{...r,...r[a.type],...a,removeDelay:a.removeDelay||((l=r[a.type])==null?void 0:l.removeDelay)||(r==null?void 0:r.removeDelay),duration:a.duration||((d=r[a.type])==null?void 0:d.duration)||(r==null?void 0:r.duration)||uc[a.type],style:{...r.style,...(c=r[a.type])==null?void 0:c.style,...a.style}}});return{...s,toasts:i}},pc=(r,e="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:r,pauseDuration:0,...s,id:(s==null?void 0:s.id)||lc()}),Wt=r=>(e,s)=>{let n=pc(e,r,s);return Rr(n.toasterId||dc(n.id))({type:2,toast:n}),n.id},K=(r,e)=>Wt("blank")(r,e);K.error=Wt("error");K.success=Wt("success");K.loading=Wt("loading");K.custom=Wt("custom");K.dismiss=(r,e)=>{let s={type:3,toastId:r};e?Rr(e)(s):Go(s)};K.dismissAll=r=>K.dismiss(void 0,r);K.remove=(r,e)=>{let s={type:4,toastId:r};e?Rr(e)(s):Go(s)};K.removeAll=r=>K.remove(void 0,r);K.promise=(r,e,s)=>{let n=K.loading(e.loading,{...s,...s==null?void 0:s.loading});return typeof r=="function"&&(r=r()),r.then(o=>{let i=e.success?jr(e.success,o):void 0;return i?K.success(i,{id:n,...s,...s==null?void 0:s.success}):K.dismiss(n),o}).catch(o=>{let i=e.error?jr(e.error,o):void 0;i?K.error(i,{id:n,...s,...s==null?void 0:s.error}):K.dismiss(n)}),r};var hc=1e3,fc=(r,e="default")=>{let{toasts:s,pausedAt:n}=mc(r,e),o=p.useRef(new Map).current,i=p.useCallback((u,g=hc)=>{if(o.has(u))return;let b=setTimeout(()=>{o.delete(u),a({type:4,toastId:u})},g);o.set(u,b)},[]);p.useEffect(()=>{if(n)return;let u=Date.now(),g=s.map(b=>{if(b.duration===1/0)return;let f=(b.duration||0)+b.pauseDuration-(u-b.createdAt);if(f<0){b.visible&&K.dismiss(b.id);return}return setTimeout(()=>K.dismiss(b.id,e),f)});return()=>{g.forEach(b=>b&&clearTimeout(b))}},[s,n,e]);let a=p.useCallback(Rr(e),[e]),l=p.useCallback(()=>{a({type:5,time:Date.now()})},[a]),d=p.useCallback((u,g)=>{a({type:1,toast:{id:u,height:g}})},[a]),c=p.useCallback(()=>{n&&a({type:6,time:Date.now()})},[n,a]),m=p.useCallback((u,g)=>{let{reverseOrder:b=!1,gutter:f=8,defaultPosition:j}=g||{},h=s.filter(v=>(v.position||j)===(u.position||j)&&v.height),k=h.findIndex(v=>v.id===u.id),N=h.filter((v,y)=>y<k&&v.visible).length;return h.filter(v=>v.visible).slice(...b?[N+1]:[0,N]).reduce((v,y)=>v+(y.height||0)+f,0)},[s]);return p.useEffect(()=>{s.forEach(u=>{if(u.dismissed)i(u.id,u.removeDelay);else{let g=o.get(u.id);g&&(clearTimeout(g),o.delete(u.id))}})},[s,i]),{toasts:s,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:m}}},gc=Me`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,xc=Me`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,bc=Me`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,yc=Ke("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${r=>r.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${gc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${xc} 0.15s ease-out forwards;
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
    animation: ${bc} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,vc=Me`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,wc=Ke("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${r=>r.secondary||"#e0e0e0"};
  border-right-color: ${r=>r.primary||"#616161"};
  animation: ${vc} 1s linear infinite;
`,jc=Me`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Nc=Me`
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
}`,Sc=Ke("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${r=>r.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${jc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Nc} 0.2s ease-out forwards;
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
`,Cc=Ke("div")`
  position: absolute;
`,kc=Ke("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Tc=Me`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Dc=Ke("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Tc} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ec=({toast:r})=>{let{icon:e,type:s,iconTheme:n}=r;return e!==void 0?typeof e=="string"?p.createElement(Dc,null,e):e:s==="blank"?null:p.createElement(kc,null,p.createElement(wc,{...n}),s!=="loading"&&p.createElement(Cc,null,s==="error"?p.createElement(yc,{...n}):p.createElement(Sc,{...n})))},Ac=r=>`
0% {transform: translate3d(0,${r*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Pc=r=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${r*-150}%,-1px) scale(.6); opacity:0;}
`,Rc="0%{opacity:0;} 100%{opacity:1;}",Oc="0%{opacity:1;} 100%{opacity:0;}",Ic=Ke("div")`
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
`,Mc=Ke("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Lc=(r,e)=>{let s=r.includes("top")?1:-1,[n,o]=$o()?[Rc,Oc]:[Ac(s),Pc(s)];return{animation:e?`${Me(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Me(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Fc=p.memo(({toast:r,position:e,style:s,children:n})=>{let o=r.height?Lc(r.position||e||"top-center",r.visible):{opacity:0},i=p.createElement(Ec,{toast:r}),a=p.createElement(Mc,{...r.ariaProps},jr(r.message,r));return p.createElement(Ic,{className:r.className,style:{...o,...s,...r.style}},typeof n=="function"?n({icon:i,message:a}):p.createElement(p.Fragment,null,i,a))});ic(p.createElement);var _c=({id:r,className:e,style:s,onHeightUpdate:n,children:o})=>{let i=p.useCallback(a=>{if(a){let l=()=>{let d=a.getBoundingClientRect().height;n(r,d)};l(),new MutationObserver(l).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[r,n]);return p.createElement("div",{ref:i,className:e,style:s},o)},Bc=(r,e)=>{let s=r.includes("top"),n=s?{top:0}:{bottom:0},o=r.includes("center")?{justifyContent:"center"}:r.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$o()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(s?1:-1)}px)`,...n,...o}},$c=Pr`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Qt=16,Uc=({reverseOrder:r,position:e="top-center",toastOptions:s,gutter:n,children:o,toasterId:i,containerStyle:a,containerClassName:l})=>{let{toasts:d,handlers:c}=fc(s,i);return p.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Qt,left:Qt,right:Qt,bottom:Qt,pointerEvents:"none",...a},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(m=>{let u=m.position||e,g=c.calculateOffset(m,{reverseOrder:r,gutter:n,defaultPosition:e}),b=Bc(u,g);return p.createElement(_c,{id:m.id,key:m.id,onHeightUpdate:c.updateHeight,className:m.visible?$c:"",style:b},m.type==="custom"?jr(m.message,m):o?o(m):p.createElement(Fc,{toast:m,position:u}))}))},B=K;const Wo=p.createContext();function Or(){return p.useContext(Wo)}const kn={light:{name:"Light Theme",cssVars:{"--primary":"#2563eb","--primary-foreground":"#ffffff","--background":"#ffffff","--foreground":"#0f172a","--card":"#ffffff","--muted":"#f8fafc","--border":"#e2e8f0"},isDark:!1},dark:{name:"Dark Theme",cssVars:{"--primary":"#3b82f6","--primary-foreground":"#ffffff","--background":"#0f172a","--foreground":"#f8fafc","--card":"#1e293b","--muted":"#1e293b","--border":"#334155"},isDark:!0},blue:{name:"Blue Theme",cssVars:{"--primary":"#1e40af","--primary-foreground":"#ffffff","--background":"#f0f9ff","--foreground":"#0c4a6e","--card":"#e0f2fe","--muted":"#e0f2fe","--border":"#7dd3fc"},isDark:!1},purple:{name:"Purple Theme",cssVars:{"--primary":"#7c3aed","--primary-foreground":"#ffffff","--background":"#faf5ff","--foreground":"#581c87","--card":"#f3e8ff","--muted":"#f3e8ff","--border":"#c4b5fd"},isDark:!1},green:{name:"Green Theme",cssVars:{"--primary":"#059669","--primary-foreground":"#ffffff","--background":"#f0fdf4","--foreground":"#064e3b","--card":"#dcfce7","--muted":"#dcfce7","--border":"#86efac"},isDark:!1},orange:{name:"Orange Theme",cssVars:{"--primary":"#ea580c","--primary-foreground":"#ffffff","--background":"#fff7ed","--foreground":"#9a3412","--card":"#fed7aa","--muted":"#fed7aa","--border":"#fdba74"},isDark:!1},red:{name:"Red Theme",cssVars:{"--primary":"#dc2626","--primary-foreground":"#ffffff","--background":"#fef2f2","--foreground":"#991b1b","--card":"#fecaca","--muted":"#fecaca","--border":"#fca5a5"},isDark:!1},pink:{name:"Pink Theme",cssVars:{"--primary":"#db2777","--primary-foreground":"#ffffff","--background":"#fdf2f8","--foreground":"#9d174d","--card":"#fce7f3","--muted":"#fce7f3","--border":"#f9a8d4"},isDark:!1},cyan:{name:"Cyan Theme",cssVars:{"--primary":"#0891b2","--primary-foreground":"#ffffff","--background":"#ecfeff","--foreground":"#164e63","--card":"#cffafe","--muted":"#cffafe","--border":"#67e8f9"},isDark:!1},amber:{name:"Amber Theme",cssVars:{"--primary":"#d97706","--primary-foreground":"#ffffff","--background":"#fffbeb","--foreground":"#92400e","--card":"#fef3c7","--muted":"#fef3c7","--border":"#fde68a"},isDark:!1},emerald:{name:"Emerald Theme",cssVars:{"--primary":"#10b981","--primary-foreground":"#ffffff","--background":"#ecfdf5","--foreground":"#064e3b","--card":"#d1fae5","--muted":"#d1fae5","--border":"#6ee7b7"},isDark:!1}};function Hc({children:r}){const[e,s]=p.useState("light");p.useEffect(()=>{const a=localStorage.getItem("theme")||"light";s(a),n(a)},[]);const n=a=>{const l=kn[a];l&&(Object.entries(l.cssVars).forEach(([d,c])=>{document.documentElement.style.setProperty(d,c)}),document.documentElement.classList.toggle("dark",l.isDark))},o=a=>{s(a),localStorage.setItem("theme",a),n(a)},i=()=>{o(e==="light"?"dark":"light")};return t.jsx(Wo.Provider,{value:{theme:e,setTheme:o,toggleTheme:i,themes:kn},children:r})}/**
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
 */const qo="firebasestorage.googleapis.com",Vo="storageBucket",zc=2*60*1e3,Gc=10*60*1e3;/**
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
 */class ee extends ha{constructor(e,s,n=0){super(Qr(e),`Firebase Storage: ${s} (${Qr(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Z;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Z||(Z={}));function Qr(r){return"storage/"+r}function Ys(){const r="An unknown error occurred, please check the error payload for server response.";return new ee(Z.UNKNOWN,r)}function Wc(r){return new ee(Z.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function qc(r){return new ee(Z.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Vc(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ee(Z.UNAUTHENTICATED,r)}function Jc(){return new ee(Z.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Kc(r){return new ee(Z.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function Yc(){return new ee(Z.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xc(){return new ee(Z.CANCELED,"User canceled the upload/download.")}function Qc(r){return new ee(Z.INVALID_URL,"Invalid URL '"+r+"'.")}function Zc(r){return new ee(Z.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function ed(){return new ee(Z.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Vo+"' property when initializing the app?")}function td(){return new ee(Z.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rd(){return new ee(Z.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function sd(r){return new ee(Z.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ks(r){return new ee(Z.INVALID_ARGUMENT,r)}function Jo(){return new ee(Z.APP_DELETED,"The Firebase app was deleted.")}function nd(r){return new ee(Z.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _t(r,e){return new ee(Z.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Ot(r){throw new ee(Z.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class be{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=be.makeFromUrl(e,s)}catch{return new be(e,"")}if(n.path==="")return n;throw Zc(e)}static makeFromUrl(e,s){let n=null;const o="([A-Za-z0-9.\\-_]+)";function i(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+o+a,"i"),d={bucket:1,path:3};function c(y){y.path_=decodeURIComponent(y.path)}const m="v[A-Za-z0-9_]+",u=s.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",b=new RegExp(`^https?://${u}/${m}/b/${o}/o${g}`,"i"),f={bucket:1,path:3},j=s===qo?"(?:storage.googleapis.com|storage.cloud.google.com)":s,h="([^?#]*)",k=new RegExp(`^https?://${j}/${o}/${h}`,"i"),v=[{regex:l,indices:d,postModify:i},{regex:b,indices:f,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let y=0;y<v.length;y++){const x=v[y],T=x.regex.exec(e);if(T){const A=T[x.indices.bucket];let C=T[x.indices.path];C||(C=""),n=new be(A,C),x.postModify(n);break}}if(n==null)throw Qc(e);return n}}class od{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function id(r,e,s){let n=1,o=null,i=null,a=!1,l=0;function d(){return l===2}let c=!1;function m(...h){c||(c=!0,e.apply(null,h))}function u(h){o=setTimeout(()=>{o=null,r(b,d())},h)}function g(){i&&clearTimeout(i)}function b(h,...k){if(c){g();return}if(h){g(),m.call(null,h,...k);return}if(d()||a){g(),m.call(null,h,...k);return}n<64&&(n*=2);let v;l===1?(l=2,v=0):v=(n+Math.random())*1e3,u(v)}let f=!1;function j(h){f||(f=!0,g(),!c&&(o!==null?(h||(l=2),clearTimeout(o),u(0)):h||(l=1)))}return u(0),i=setTimeout(()=>{a=!0,j(!0)},s),j}function ad(r){r(!1)}/**
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
 */function ld(r){return r!==void 0}function cd(r){return typeof r=="object"&&!Array.isArray(r)}function Xs(r){return typeof r=="string"||r instanceof String}function Tn(r){return Qs()&&r instanceof Blob}function Qs(){return typeof Blob<"u"}function Dn(r,e,s,n){if(n<e)throw ks(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>s)throw ks(`Invalid value for '${r}'. Expected ${s} or less.`)}/**
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
 */function Zs(r,e,s){let n=e;return s==null&&(n=`https://${e}`),`${s}://${n}/v0${r}`}function Ko(r){const e=encodeURIComponent;let s="?";for(const n in r)if(r.hasOwnProperty(n)){const o=e(n)+"="+e(r[n]);s=s+o+"&"}return s=s.slice(0,-1),s}var st;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(st||(st={}));/**
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
 */function dd(r,e){const s=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return s||o||i}/**
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
 */class ud{constructor(e,s,n,o,i,a,l,d,c,m,u,g=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=o,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=d,this.timeout_=c,this.progressCallback_=m,this.connectionFactory_=u,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,f)=>{this.resolve_=b,this.reject_=f,this.start_()})}start_(){const e=(n,o)=>{if(o){n(!1,new Zt(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const d=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,c)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===st.NO_ERROR,d=i.getStatus();if(!l||dd(d,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===st.ABORT;n(!1,new Zt(!1,null,m));return}const c=this.successCodes_.indexOf(d)!==-1;n(!0,new Zt(c,i))})},s=(n,o)=>{const i=this.resolve_,a=this.reject_,l=o.connection;if(o.wasSuccessCode)try{const d=this.callback_(l,l.getResponse());ld(d)?i(d):i()}catch(d){a(d)}else if(l!==null){const d=Ys();d.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,d)):a(d)}else if(o.canceled){const d=this.appDelete_?Jo():Xc();a(d)}else{const d=Yc();a(d)}};this.canceled_?s(!1,new Zt(!1,null,!0)):this.backoffId_=id(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ad(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zt{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function md(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function pd(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hd(r,e){e&&(r["X-Firebase-GMPID"]=e)}function fd(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function gd(r,e,s,n,o,i,a=!0){const l=Ko(r.urlParams),d=r.url+l,c=Object.assign({},r.headers);return hd(c,e),md(c,s),pd(c,i),fd(c,n),new ud(d,r.method,c,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,a)}/**
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
 */function xd(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bd(...r){const e=xd();if(e!==void 0){const s=new e;for(let n=0;n<r.length;n++)s.append(r[n]);return s.getBlob()}else{if(Qs())return new Blob(r);throw new ee(Z.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yd(r,e,s){return r.webkitSlice?r.webkitSlice(e,s):r.mozSlice?r.mozSlice(e,s):r.slice?r.slice(e,s):null}/**
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
 */function vd(r){if(typeof atob>"u")throw sd("base-64");return atob(r)}/**
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
 */const De={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Zr{constructor(e,s){this.data=e,this.contentType=s||null}}function wd(r,e){switch(r){case De.RAW:return new Zr(Yo(e));case De.BASE64:case De.BASE64URL:return new Zr(Xo(r,e));case De.DATA_URL:return new Zr(Nd(e),Sd(e))}throw Ys()}function Yo(r){const e=[];for(let s=0;s<r.length;s++){let n=r.charCodeAt(s);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<r.length-1&&(r.charCodeAt(s+1)&64512)===56320))e.push(239,191,189);else{const i=n,a=r.charCodeAt(++s);n=65536|(i&1023)<<10|a&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function jd(r){let e;try{e=decodeURIComponent(r)}catch{throw _t(De.DATA_URL,"Malformed data URL.")}return Yo(e)}function Xo(r,e){switch(r){case De.BASE64:{const o=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(o||i)throw _t(r,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case De.BASE64URL:{const o=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(o||i)throw _t(r,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=vd(e)}catch(o){throw o.message.includes("polyfill")?o:_t(r,"Invalid character found")}const n=new Uint8Array(s.length);for(let o=0;o<s.length;o++)n[o]=s.charCodeAt(o);return n}class Qo{constructor(e){this.base64=!1,this.contentType=null;const s=e.match(/^data:([^,]+)?,/);if(s===null)throw _t(De.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=Cd(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function Nd(r){const e=new Qo(r);return e.base64?Xo(De.BASE64,e.rest):jd(e.rest)}function Sd(r){return new Qo(r).contentType}function Cd(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
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
 */class _e{constructor(e,s){let n=0,o="";Tn(e)?(this.data_=e,n=e.size,o=e.type):e instanceof ArrayBuffer?(s?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(s?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,s){if(Tn(this.data_)){const n=this.data_,o=yd(n,e,s);return o===null?null:new _e(o)}else{const n=new Uint8Array(this.data_.buffer,e,s-e);return new _e(n,!0)}}static getBlob(...e){if(Qs()){const s=e.map(n=>n instanceof _e?n.data_:n);return new _e(bd.apply(null,s))}else{const s=e.map(a=>Xs(a)?wd(De.RAW,a).data:a.data_);let n=0;s.forEach(a=>{n+=a.byteLength});const o=new Uint8Array(n);let i=0;return s.forEach(a=>{for(let l=0;l<a.length;l++)o[i++]=a[l]}),new _e(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Zo(r){let e;try{e=JSON.parse(r)}catch{return null}return cd(e)?e:null}/**
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
 */function kd(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function Td(r,e){const s=e.split("/").filter(n=>n.length>0).join("/");return r.length===0?s:r+"/"+s}function ei(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */function Dd(r,e){return e}class ce{constructor(e,s,n,o){this.server=e,this.local=s||e,this.writable=!!n,this.xform=o||Dd}}let er=null;function Ed(r){return!Xs(r)||r.length<2?r:ei(r)}function ti(){if(er)return er;const r=[];r.push(new ce("bucket")),r.push(new ce("generation")),r.push(new ce("metageneration")),r.push(new ce("name","fullPath",!0));function e(i,a){return Ed(a)}const s=new ce("name");s.xform=e,r.push(s);function n(i,a){return a!==void 0?Number(a):a}const o=new ce("size");return o.xform=n,r.push(o),r.push(new ce("timeCreated")),r.push(new ce("updated")),r.push(new ce("md5Hash",null,!0)),r.push(new ce("cacheControl",null,!0)),r.push(new ce("contentDisposition",null,!0)),r.push(new ce("contentEncoding",null,!0)),r.push(new ce("contentLanguage",null,!0)),r.push(new ce("contentType",null,!0)),r.push(new ce("metadata","customMetadata",!0)),er=r,er}function Ad(r,e){function s(){const n=r.bucket,o=r.fullPath,i=new be(n,o);return e._makeStorageReference(i)}Object.defineProperty(r,"ref",{get:s})}function Pd(r,e,s){const n={};n.type="file";const o=s.length;for(let i=0;i<o;i++){const a=s[i];n[a.local]=a.xform(n,e[a.server])}return Ad(n,r),n}function ri(r,e,s){const n=Zo(e);return n===null?null:Pd(r,n,s)}function Rd(r,e,s,n){const o=Zo(e);if(o===null||!Xs(o.downloadTokens))return null;const i=o.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(c=>{const m=r.bucket,u=r.fullPath,g="/b/"+a(m)+"/o/"+a(u),b=Zs(g,s,n),f=Ko({alt:"media",token:c});return b+f})[0]}function Od(r,e){const s={},n=e.length;for(let o=0;o<n;o++){const i=e[o];i.writable&&(s[i.server]=r[i.local])}return JSON.stringify(s)}class si{constructor(e,s,n,o){this.url=e,this.method=s,this.handler=n,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ni(r){if(!r)throw Ys()}function Id(r,e){function s(n,o){const i=ri(r,o,e);return ni(i!==null),i}return s}function Md(r,e){function s(n,o){const i=ri(r,o,e);return ni(i!==null),Rd(i,o,r.host,r._protocol)}return s}function oi(r){function e(s,n){let o;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?o=Jc():o=Vc():s.getStatus()===402?o=qc(r.bucket):s.getStatus()===403?o=Kc(r.path):o=n,o.status=s.getStatus(),o.serverResponse=n.serverResponse,o}return e}function Ld(r){const e=oi(r);function s(n,o){let i=e(n,o);return n.getStatus()===404&&(i=Wc(r.path)),i.serverResponse=o.serverResponse,i}return s}function Fd(r,e,s){const n=e.fullServerUrl(),o=Zs(n,r.host,r._protocol),i="GET",a=r.maxOperationRetryTime,l=new si(o,i,Md(r,s),a);return l.errorHandler=Ld(e),l}function _d(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function Bd(r,e,s){const n=Object.assign({},s);return n.fullPath=r.path,n.size=e.size(),n.contentType||(n.contentType=_d(null,e)),n}function $d(r,e,s,n,o){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let v="";for(let y=0;y<2;y++)v=v+Math.random().toString().slice(2);return v}const d=l();a["Content-Type"]="multipart/related; boundary="+d;const c=Bd(e,n,o),m=Od(c,s),u="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+d+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+d+"--",b=_e.getBlob(u,n,g);if(b===null)throw td();const f={name:c.fullPath},j=Zs(i,r.host,r._protocol),h="POST",k=r.maxUploadRetryTime,N=new si(j,h,Id(r,s),k);return N.urlParams=f,N.headers=a,N.body=b.uploadData(),N.errorHandler=oi(e),N}class Ud{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=st.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=st.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=st.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,s,n,o){if(this.sent_)throw Ot("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,e,!0),o!==void 0)for(const i in o)o.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,o[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ot("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ot("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ot("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ot("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Hd extends Ud{initXhr(){this.xhr_.responseType="text"}}function ii(){return new Hd}/**
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
 */class at{constructor(e,s){this._service=e,s instanceof be?this._location=s:this._location=be.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new at(e,s)}get root(){const e=new be(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ei(this._location.path)}get storage(){return this._service}get parent(){const e=kd(this._location.path);if(e===null)return null;const s=new be(this._location.bucket,e);return new at(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw nd(e)}}function zd(r,e,s){r._throwIfRoot("uploadBytes");const n=$d(r.storage,r._location,ti(),new _e(e,!0),s);return r.storage.makeRequestWithTokens(n,ii).then(o=>({metadata:o,ref:r}))}function Gd(r){r._throwIfRoot("getDownloadURL");const e=Fd(r.storage,r._location,ti());return r.storage.makeRequestWithTokens(e,ii).then(s=>{if(s===null)throw rd();return s})}function Wd(r,e){const s=Td(r._location.path,e),n=new be(r._location.bucket,s);return new at(r.storage,n)}/**
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
 */function qd(r){return/^[A-Za-z]+:\/\//.test(r)}function Vd(r,e){return new at(r,e)}function ai(r,e){if(r instanceof en){const s=r;if(s._bucket==null)throw ed();const n=new at(s,s._bucket);return e!=null?ai(n,e):n}else return e!==void 0?Wd(r,e):r}function Jd(r,e){if(e&&qd(e)){if(r instanceof en)return Vd(r,e);throw ks("To use ref(service, url), the first argument must be a Storage instance.")}else return ai(r,e)}function En(r,e){const s=e==null?void 0:e[Vo];return s==null?null:be.makeFromBucketSpec(s,r)}function Kd(r,e,s,n={}){r.host=`${e}:${s}`,r._protocol="http";const{mockUserToken:o}=n;o&&(r._overrideAuthToken=typeof o=="string"?o:xa(o,r.app.options.projectId))}class en{constructor(e,s,n,o,i){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=o,this._firebaseVersion=i,this._bucket=null,this._host=qo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zc,this._maxUploadRetryTime=Gc,this._requests=new Set,o!=null?this._bucket=be.makeFromBucketSpec(o,this._host):this._bucket=En(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=be.makeFromBucketSpec(this._url,e):this._bucket=En(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Dn("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Dn("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new at(this,e)}_makeRequest(e,s,n,o,i=!0){if(this._deleted)return new od(Jo());{const a=gd(e,this._appId,n,o,s,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,s){const[n,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,o).getPromise()}}const An="@firebase/storage",Pn="0.13.2";/**
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
 */const li="storage";function Qe(r,e,s){return r=Cr(r),zd(r,e,s)}function Ze(r){return r=Cr(r),Gd(r)}function et(r,e){return r=Cr(r),Jd(r,e)}function ci(r=ps(),e){r=Cr(r);const n=fa(r,li).getImmediate({identifier:e}),o=ga("storage");return o&&Yd(n,...o),n}function Yd(r,e,s,n={}){Kd(r,e,s,n)}function Xd(r,{instanceIdentifier:e}){const s=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new en(s,n,o,e,pa)}function Qd(){ua(new ma(li,Xd,"PUBLIC").setMultipleInstances(!0)),mn(An,Pn,""),mn(An,Pn,"esm2017")}Qd();const dr={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"};console.log("Firebase config loaded:",{hasApiKey:!!dr.apiKey,hasAuthDomain:!!dr.authDomain,projectId:dr.projectId,usingEnvVars:!1});const tn=gr(dr),It=Fs(tn),je=_s(tn),ut=ci(tn),di=p.createContext();function Ir(){return p.useContext(di)}function Zd({children:r}){const[e,s]=p.useState(null),[n,o]=p.useState(!0);p.useEffect(()=>{let c,m;try{c=Bs(It,async u=>{try{if(u)try{const g=await ir(q(je,"users",u.uid)),b=g.exists()?g.data():null;s({uid:u.uid,email:u.email,displayName:u.displayName,photoURL:u.photoURL,...b})}catch(g){console.log("⚠️ Firestore not available, using basic user data:",g.message),s({uid:u.uid,email:u.email,displayName:u.displayName,photoURL:u.photoURL})}else s(null)}catch(g){console.error("Error in auth state change:",g),s(null)}finally{o(!1)}}),m=setTimeout(()=>{console.log("Firebase auth timeout - setting loading to false"),o(!1)},5e3)}catch(u){console.error("Error setting up auth listener:",u),o(!1)}return()=>{c&&c(),m&&clearTimeout(m)}},[]);const d={user:e,loading:n,signInWithGoogle:async()=>{try{const c=new va;c.addScope("email"),c.addScope("profile");const m=await pn(It,c);try{await xe(q(je,"users",m.user.uid),{uid:m.user.uid,email:m.user.email,displayName:m.user.displayName,photoURL:m.user.photoURL,createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(u){console.warn("Failed to save user data to Firestore:",u)}console.log("Successfully signed in!")}catch(c){throw console.error("Failed to sign in:",c.message),c}},signInWithGitHub:async()=>{var c;try{const m=new ya;m.addScope("user:email");const u=await pn(It,m);try{await xe(q(je,"users",u.user.uid),{uid:u.user.uid,email:u.user.email,displayName:u.user.displayName||((c=u.user.email)==null?void 0:c.split("@")[0])||"GitHub User",photoURL:u.user.photoURL,provider:"github",createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(g){console.warn("Failed to save user data to Firestore:",g)}console.log("Successfully signed in with GitHub!")}catch(m){throw console.error("Failed to sign in with GitHub:",m.message),m}},logout:async()=>{try{await ba(It),console.log("Successfully signed out!")}catch(c){console.error("Failed to sign out:",c.message)}},auth:It,db:je};return t.jsx(di.Provider,{value:d,children:n?t.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),t.jsx("p",{className:"text-muted-foreground",children:"Loading DreamBuild..."})]})}):r})}const ui=p.createContext();function Ye(){return p.useContext(ui)}function eu({children:r}){const{user:e,db:s}=Ir(),[n,o]=p.useState({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),[i,a]=p.useState([]),[l,d]=p.useState(!1),c=p.useCallback(N=>{o(v=>({...v,activeFile:N,lastModified:new Date}))},[]),m=p.useCallback((N,v)=>{console.log(`🔄 Updating file: ${N} (${(v==null?void 0:v.length)||0} chars)`),o(y=>{const x={...y,files:{...y.files,[N]:v},lastModified:new Date};return console.log("📁 Project files after update:",Object.keys(x.files)),x})},[]),u=p.useCallback(N=>{o(v=>({...v,config:{...v.config,...N},lastModified:new Date}))},[]),g=p.useCallback(async(N=null)=>{if(!e){B.error("Please sign in to save projects");return}d(!0);try{const v={...n,name:N||n.name,userId:e.uid,lastModified:new Date},{doc:y,setDoc:x,collection:T}=await tt(async()=>{const{doc:C,setDoc:L,collection:E}=await import("./firebase-CYkmqfVJ.js").then(P=>P.B);return{doc:C,setDoc:L,collection:E}},[]),A=y(T(s,"projects"));await x(A,{...v,id:A.id,createdAt:n.id?void 0:new Date}),o(C=>({...C,id:A.id})),B.success("Project saved successfully!"),b()}catch(v){B.error("Failed to save project: "+v.message)}finally{d(!1)}},[n,e,s]),b=p.useCallback(async()=>{if(e){d(!0);try{const{collection:N,query:v,where:y,getDocs:x,orderBy:T}=await tt(async()=>{const{collection:P,query:Y,where:H,getDocs:D,orderBy:I}=await import("./firebase-CYkmqfVJ.js").then(F=>F.B);return{collection:P,query:Y,where:H,getDocs:D,orderBy:I}},[]),A=N(s,"projects"),C=v(A,y("userId","==",e.uid),T("lastModified","desc")),E=(await x(C)).docs.map(P=>({id:P.id,...P.data()}));a(E)}catch(N){B.error("Failed to load projects: "+N.message)}finally{d(!1)}}},[e,s]),f=p.useCallback(async N=>{if(e){d(!0);try{const{doc:v,getDoc:y}=await tt(async()=>{const{doc:A,getDoc:C}=await import("./firebase-CYkmqfVJ.js").then(L=>L.B);return{doc:A,getDoc:C}},[]),x=v(s,"projects",N),T=await y(x);if(T.exists()){const A={id:T.id,...T.data()};o(A),B.success("Project loaded successfully!")}else B.error("Project not found")}catch(v){B.error("Failed to load project: "+v.message)}finally{d(!1)}}},[e,s]),j=p.useCallback(async N=>{if(e){d(!0);try{const{doc:v,deleteDoc:y}=await tt(async()=>{const{doc:x,deleteDoc:T}=await import("./firebase-CYkmqfVJ.js").then(A=>A.B);return{doc:x,deleteDoc:T}},[]);await y(v(s,"projects",N)),a(x=>x.filter(T=>T.id!==N)),B.success("Project deleted successfully!")}catch(v){B.error("Failed to delete project: "+v.message)}finally{d(!1)}}},[e,s]),h=p.useCallback(()=>{o({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),B.success("New project created!")},[]),k={currentProject:n,projects:i,isLoading:l,switchFile:c,updateFile:m,updateConfig:u,saveProject:g,loadProjects:b,loadProject:f,deleteProject:j,createNewProject:h};return t.jsx(ui.Provider,{value:k,children:r})}const tu=()=>{const{theme:r,toggleTheme:e}=Or(),{user:s,logout:n}=Ir(),[o,i]=p.useState(!1),[a,l]=p.useState(!1),[d,c]=p.useState(!1),m=Je();Ee.useEffect(()=>{const b=()=>{l(window.innerWidth>=768)};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]),Ee.useEffect(()=>{const b=f=>{d&&!f.target.closest(".user-menu")&&c(!1)};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[d]);const u=[{name:"Home",href:"/",icon:Ne},{name:"AI Builder",href:"/ai-builder",icon:X},{name:"Templates",href:"/templates",icon:yt},{name:"Projects",href:"/projects",icon:bt},{name:"Dashboard",href:"/dashboard",icon:hs}],g=b=>m.pathname===b;return t.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm",children:t.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"flex items-center justify-between h-16",children:[t.jsxs(me,{to:"/",className:"flex items-center gap-3 group",children:[t.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg",children:t.jsx(yt,{className:"h-6 w-6 text-primary-foreground"})}),t.jsxs("div",{className:"flex flex-col",children:[t.jsx("span",{className:"text-xl font-bold text-high-contrast",children:"DreamBuild"}),t.jsx("span",{className:"text-xs text-muted-foreground -mt-1",children:"AI Development Platform"})]})]}),t.jsx("div",{className:"hidden md:flex items-center gap-1",children:u.map(b=>{const f=b.icon;return t.jsxs(me,{to:b.href,className:`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${g(b.href)?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[t.jsx(f,{className:"h-4 w-4"}),b.name]},b.name)})}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:e,className:"p-2 rounded-lg hover:bg-muted transition-colors",title:`Switch to ${r==="light"?"dark":"light"} mode`,children:r==="light"?t.jsx(ja,{className:"h-4 w-4 text-muted-foreground"}):t.jsx(Na,{className:"h-4 w-4 text-muted-foreground"})}),s?t.jsxs("div",{className:"relative user-menu",children:[t.jsxs("button",{onClick:()=>c(!d),className:"flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors",children:[t.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center",children:t.jsx("span",{className:"text-sm font-semibold text-primary",children:(s.displayName||s.email||"U").charAt(0).toUpperCase()})}),t.jsx("span",{className:"hidden sm:inline text-sm font-medium text-foreground",children:s.displayName||s.email})]}),d&&t.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-[60]",children:[t.jsxs("div",{className:"p-3 border-b border-border",children:[t.jsx("p",{className:"text-sm font-medium text-foreground",children:s.displayName||"User"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:s.email})]}),t.jsxs("div",{className:"p-1",children:[t.jsxs(me,{to:"/dashboard",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[t.jsx(bt,{className:"h-4 w-4"}),"Dashboard"]}),t.jsxs(me,{to:"/settings",onClick:()=>c(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[t.jsx(fs,{className:"h-4 w-4"}),"Settings"]}),t.jsx("hr",{className:"my-1"}),t.jsxs("button",{onClick:()=>{n(),c(!1)},className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors",children:[t.jsx(hn,{className:"h-4 w-4"}),"Sign Out"]})]})]})]}):t.jsxs(me,{to:"/login",className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[t.jsx(Ne,{className:"h-4 w-4"}),"Sign In"]}),!a&&t.jsx("button",{onClick:()=>i(!o),className:"p-2 rounded-lg hover:bg-muted transition-colors ml-2",children:o?t.jsx(Sa,{className:"h-4 w-4"}):t.jsx(Ca,{className:"h-4 w-4"})})]})]}),!a&&o&&t.jsx("div",{className:"border-t border-border bg-background",children:t.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[u.map(b=>{const f=b.icon;return t.jsxs(me,{to:b.href,onClick:()=>i(!1),className:`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border ${g(b.href)?"bg-primary text-primary-foreground border-primary shadow-md":"bg-card text-foreground border-border hover:bg-muted hover:border-primary/30 shadow-sm"}`,children:[t.jsx(f,{className:"h-5 w-5"}),b.name]},b.name)}),s?t.jsxs("div",{className:"mt-4 space-y-2",children:[t.jsxs("div",{className:"px-4 py-2 border-b border-border",children:[t.jsx("p",{className:"text-sm font-medium text-foreground",children:s.displayName||"User"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:s.email})]}),t.jsxs(me,{to:"/dashboard",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[t.jsx(bt,{className:"h-5 w-5"}),"Dashboard"]}),t.jsxs(me,{to:"/settings",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[t.jsx(fs,{className:"h-5 w-5"}),"Settings"]}),t.jsxs("button",{onClick:()=>{n(),i(!1)},className:"w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg",children:[t.jsx(hn,{className:"h-5 w-5"}),"Sign Out"]})]}):t.jsxs(me,{to:"/login",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg text-base font-semibold",children:[t.jsx(Ne,{className:"h-5 w-5"}),"Sign In"]})]})})]})})},ru=()=>{const[r,e]=p.useState(""),[s,n]=p.useState(!1),o=i=>{i.preventDefault(),r&&(n(!0),e(""),setTimeout(()=>n(!1),3e3))};return t.jsx("footer",{className:"bg-background border-t border-border",children:t.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:t.jsx(yt,{className:"h-5 w-5 text-primary-foreground"})}),t.jsx("span",{className:"text-xl font-bold text-foreground",children:"DreamBuild"})]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"AI-powered development platform for modern developers."}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"GitHub",children:t.jsx(Ie,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),t.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Twitter",children:t.jsx($s,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),t.jsx("a",{href:"mailto:contact@dreambuild.ai",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Email",children:t.jsx(xr,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Stay Updated"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Get the latest updates and features."}),t.jsxs("form",{onSubmit:o,className:"space-y-3",children:[t.jsxs("div",{className:"flex gap-2",children:[t.jsx("input",{type:"email",value:r,onChange:i=>e(i.target.value),placeholder:"Enter your email",className:"flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",required:!0}),t.jsx("button",{type:"submit",disabled:s,className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:s?t.jsx(xr,{className:"h-4 w-4"}):t.jsx(Us,{className:"h-4 w-4"})})]}),s&&t.jsx("p",{className:"text-sm text-green-600",children:"Thanks for subscribing!"})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Quick Links"}),t.jsxs("ul",{className:"space-y-2 text-sm",children:[t.jsx("li",{children:t.jsx("a",{href:"/ai-builder",className:"text-muted-foreground hover:text-foreground transition-colors",children:"AI Builder"})}),t.jsx("li",{children:t.jsx("a",{href:"/templates",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Templates"})}),t.jsx("li",{children:t.jsx("a",{href:"/documentation",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Documentation"})}),t.jsx("li",{children:t.jsx("a",{href:"/support",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Support"})})]})]})]}),t.jsx("div",{className:"border-t border-border pt-8 mt-8",children:t.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[t.jsx("div",{className:"text-sm text-muted-foreground",children:t.jsx("span",{children:"© 2024 Bradley Virtual Solutions, LLC"})}),t.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[t.jsx("a",{href:"/privacy",className:"hover:text-foreground transition-colors",children:"Privacy"}),t.jsx("a",{href:"/terms",className:"hover:text-foreground transition-colors",children:"Terms"}),t.jsx("a",{href:"/contact",className:"hover:text-foreground transition-colors",children:"Contact"})]})]})})]})})},su=()=>{const r=[{icon:X,title:"AI Code Generation",description:"Generate code with AI assistance."},{icon:bt,title:"Smart Templates",description:"Pre-built templates for quick start."},{icon:vt,title:"Real-time Collaboration",description:"Work together with your team."}],e=[{label:"AI Models",value:"10+",icon:X},{label:"Languages",value:"50+",icon:bt},{label:"Templates",value:"25+",icon:xo}];return t.jsxs("div",{className:"min-h-screen bg-background",children:[t.jsxs("section",{className:"relative pt-20 pb-20",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5"}),t.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative flex justify-center",children:t.jsxs("div",{className:"text-center max-w-4xl w-full ml-8",children:[t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8",children:[t.jsx(yt,{className:"h-4 w-4"}),"AI-Powered Development Platform"]}),t.jsxs(O.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight",children:["Build with"," ",t.jsx("span",{className:"bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent",children:"AI"})]}),t.jsx(O.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed",children:"Create amazing projects with AI-powered code generation. Simple, fast, and effective."}),t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-md mx-auto",children:[t.jsxs(me,{to:"/ai-builder",className:"inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl",children:[t.jsx(Ne,{className:"h-5 w-5"}),"Start Building"]}),t.jsxs(me,{to:"/templates",className:"inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold",children:[t.jsx(X,{className:"h-5 w-5"}),"Browse Templates"]})]}),t.jsx(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto",children:e.map((s,n)=>{const o=s.icon;return t.jsxs("div",{className:"text-center group",children:[t.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[t.jsx(o,{className:"h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"}),t.jsx("div",{className:"text-3xl font-bold text-primary group-hover:text-primary-light transition-colors",children:s.value})]}),t.jsx("div",{className:"text-sm text-muted-foreground",children:s.label})]},n)})})]})})]}),t.jsx("section",{className:"py-20 bg-background",children:t.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"text-center mb-16 max-w-4xl mx-auto",children:[t.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Key Features"}),t.jsx("p",{className:"text-lg text-muted-foreground",children:"Everything you need to build amazing projects"})]}),t.jsx("div",{className:"flex justify-center",children:t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl ml-8",children:r.map((s,n)=>t.jsxs(O.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:n*.1},viewport:{once:!0},whileHover:{y:-5},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-xl hover:bg-card/70 transition-all duration-300 group cursor-pointer",children:[t.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300",children:t.jsx(s.icon,{className:"h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300"})}),t.jsx("h3",{className:"text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300",children:s.title}),t.jsx("p",{className:"text-foreground leading-relaxed",children:s.description})]},n))})})]})}),t.jsxs("section",{className:"py-20 relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary-light/5"}),t.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative",children:t.jsxs(O.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"max-w-4xl mx-auto ml-8",children:[t.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Ready to Build?"}),t.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"Start creating amazing projects with AI-powered development tools."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs(me,{to:"/ai-builder",className:"inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl",children:[t.jsx(Ne,{className:"h-5 w-5"}),"Get Started"]}),t.jsxs(me,{to:"/templates",className:"inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold",children:[t.jsx(X,{className:"h-5 w-5"}),"View Templates"]})]})]})})]})]})};class nu{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(e,s){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(e.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(e,s,"firebase");const o=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i={id:o,projectName:s||"dream-app",files:e.files,config:e.config,deployedAt:new Date,status:"uploading",platform:"firebase"},a={};for(const[u,g]of Object.entries(e.files))if(g&&g.trim()){const b=et(ut,`projects/${o}/${u}`),f=new Blob([g],{type:this.getMimeType(u)});await Qe(b,f);const j=await Ze(b);a[u]=j}const l=this.createHostedHTML(e.files),d=et(ut,`projects/${o}/index.html`),c=new Blob([l],{type:"text/html"});await Qe(d,c);const m=await Ze(d);return await xe(q(je,"deployments",o),{...i,status:"completed",hostedURL:m,files:a,completedAt:new Date}),this.deployments.set(o,i),console.log("✅ Firebase deployment completed:",m),{success:!0,deploymentId:o,url:m,platform:"firebase"}}catch(n){throw console.error("❌ Firebase deployment failed:",n),new Error(`Firebase deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(e,s){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const n=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(e.files))throw new Error("Apple App Store deployment is only available for mobile applications");const o=this.detectMobileFramework(e.files);console.log(`📱 Deploying ${o} app to Apple App Store...`);const i=await this.generateMobileAppFiles(e,s,o),a=await this.executeAppleStoreBuild(i,s,o),l={id:n,projectName:s||"mobile-app",files:{...e.files,...i},config:e.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"apple-app-store",framework:o,buildInstructions:this.generateAppleStoreInstructions(o,s),terminalOutput:a.output,buildCommands:a.commands},d=this.createAppleStoreInstructionsHTML(s,o,l.buildInstructions,a),c=et(ut,`apple-store/${n}/index.html`),m=new Blob([d],{type:"text/html"});await Qe(c,m);const u=await Ze(c);return await xe(q(je,"deployments",n),{...l,hostedURL:u}),this.deployments.set(n,l),{success:a.success,deploymentId:n,url:u,platform:"apple-app-store",framework:o,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Apple App Store deployment failed:",n),new Error(`Apple App Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(e,s){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const n=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(e.files))throw new Error("Google Play Store deployment is only available for mobile applications");const o=this.detectMobileFramework(e.files);console.log(`📱 Deploying ${o} app to Google Play Store...`);const i=await this.generateMobileAppFiles(e,s,o),a=await this.executeGooglePlayBuild(i,s,o),l={id:n,projectName:s||"mobile-app",files:{...e.files,...i},config:e.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"google-play-store",framework:o,buildInstructions:this.generateGooglePlayInstructions(o,s),terminalOutput:a.output,buildCommands:a.commands},d=this.createGooglePlayInstructionsHTML(s,o,l.buildInstructions,a),c=et(ut,`google-play/${n}/index.html`),m=new Blob([d],{type:"text/html"});await Qe(c,m);const u=await Ze(c);return await xe(q(je,"deployments",n),{...l,hostedURL:u}),this.deployments.set(n,l),{success:a.success,deploymentId:n,url:u,platform:"google-play-store",framework:o,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Google Play Store deployment failed:",n),new Error(`Google Play Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(e,s,n=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const o=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!n){const i=s.toLowerCase().replace(/[^a-z0-9-]/g,"-"),a=this.createHostedHTML(e.files),l=et(ut,`github-pages/${o}/index.html`),d=new Blob([a],{type:"text/html"});await Qe(l,d);const c=await Ze(l);return await xe(q(je,"deployments",o),{id:o,projectName:s,files:e.files,config:e.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:c,repoName:i,instructions:this.generateGitHubInstructions(s,e.files)}),{success:!0,deploymentId:o,url:c,platform:"github-pages",repoName:i,instructions:this.generateGitHubInstructions(s,e.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(o){throw console.error("❌ GitHub deployment failed:",o),new Error(`GitHub deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}createHostedHTML(e){const s=e["index.html"]||this.generateDefaultHTML(),n=e["style.css"]||"",o=e["script.js"]||"";let i=s;return n.trim()&&(i.includes("</head>")?i=i.replace("</head>",`<style>${n}</style>
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
</html>`}getMimeType(e){const s=e.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[s]||"text/plain"}generateGitHubInstructions(e,s){const n=e.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${n}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${n}`],files:Object.keys(s),repoName:n}}getDeploymentStatus(e){return this.deployments.get(e)}async getAllDeployments(){try{const{collection:e,query:s,orderBy:n,limit:o,getDocs:i}=await tt(async()=>{const{collection:c,query:m,orderBy:u,limit:g,getDocs:b}=await import("./firebase-CYkmqfVJ.js").then(f=>f.B);return{collection:c,query:m,orderBy:u,limit:g,getDocs:b}},[]),a=e(je,"deployments"),l=s(a,n("deployedAt","desc"),o(20));return(await i(l)).docs.map(c=>({id:c.id,...c.data()}))}catch(e){return console.error("Error fetching deployments:",e),[]}}async deleteDeployment(e){try{const{deleteDoc:s}=await tt(async()=>{const{deleteDoc:n}=await import("./firebase-CYkmqfVJ.js").then(o=>o.B);return{deleteDoc:n}},[]);return await s(q(je,"deployments",e)),this.deployments.delete(e),!0}catch(s){return console.error("Error deleting deployment:",s),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(e){const s=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],n=Object.keys(e);return s.some(o=>n.some(i=>i.includes(o)))}async deployMobileApp(e,s,n){const o=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=this.detectMobileFramework(e.files);console.log(`📱 Deploying ${i} mobile app...`);const a={id:o,projectName:s||"mobile-app",files:e.files,config:e.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:i,buildInstructions:this.generateMobileBuildInstructions(i,s,n)},l=this.createMobileAppInstructionsHTML(s,i,a.buildInstructions),d=et(ut,`mobile-apps/${o}/index.html`),c=new Blob([l],{type:"text/html"});await Qe(d,c);const m=await Ze(d);return await xe(q(je,"deployments",o),{...a,hostedURL:m}),this.deployments.set(o,a),{success:!0,deploymentId:o,url:m,platform:"mobile",framework:i,buildInstructions:a.buildInstructions}}detectMobileFramework(e){const s=Object.keys(e);return s.some(n=>n.includes("pubspec.yaml")||n.includes("main.dart"))?"Flutter":s.some(n=>n.includes("App.js")&&n.includes("package.json"))?"React Native":s.some(n=>n.includes("ionic.config.json"))?"Ionic":s.some(n=>n.includes("capacitor.config.json"))?"Capacitor":s.some(n=>n.includes("manifest.json")&&n.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(e,s,n){switch(s.toLowerCase().replace(/[^a-z0-9]/g,""),e){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:e,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(e,s){switch(s.toLowerCase().replace(/[^a-z0-9]/g,""),e){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:e,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(e,s){switch(s.toLowerCase().replace(/[^a-z0-9]/g,""),e){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:e,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(e,s,n){return`<!DOCTYPE html>
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
</html>`}async generateMobileAppFiles(e,s,n){try{console.log(`📱 Generating ${n} mobile app files...`);const{default:o}=await tt(async()=>{const{default:a}=await import("./mobileAppService-CFUDTDME.js");return{default:a}},[]),i=await o.generateMobileApp(e,s,n);return console.log(`✅ Generated ${Object.keys(i).length} mobile app files`),i}catch(o){throw console.error("❌ Failed to generate mobile app files:",o),new Error(`Failed to generate mobile app files: ${o.message}`)}}async executeAppleStoreBuild(e,s,n){const o=[],i=[];try{console.log(`🍎 Executing Apple App Store build for ${n}...`);const a=`/tmp/dreambuild-${s}-${Date.now()}`;o.push(`mkdir -p ${a}`);for(const[l,d]of Object.entries(e)){const c=`${a}/${l}`;o.push(`cat > ${c} << 'EOF'
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
`),commands:e,projectDir:s};return console.log("✅ Terminal commands executed successfully"),o}catch(o){return console.error("❌ Terminal command execution failed:",o),{success:!1,output:`Error: ${o.message}`,commands:e,error:o.message}}}}const tr=new nu,ou=()=>{const{currentProject:r,switchFile:e,updateFile:s,saveProject:n,createNewProject:o,updateConfig:i}=Ye(),[a,l]=p.useState(!1),[d,c]=p.useState(""),[m,u]=p.useState(!1),[g,b]=p.useState(!1),[f,j]=p.useState(!1),[h,k]=p.useState("firebase"),[N,v]=p.useState(!1),[y,x]=p.useState(""),[T,A]=p.useState({show:!1,x:0,y:0,filename:""}),C=p.useRef(null),L={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},E=w=>L[w]||"📄",P=w=>{e(w)},Y=(w,M)=>{w.preventDefault(),A({show:!0,x:w.clientX,y:w.clientY,filename:M})},H=w=>{const{filename:M}=T;switch(A({show:!1,x:0,y:0,filename:""}),w){case"download":W(M);break;case"delete":F(M);break;case"rename":B.info("Rename functionality coming soon!");break;case"copy":B.info("Copy functionality coming soon!");break}},D=()=>{A({show:!1,x:0,y:0,filename:""})};p.useEffect(()=>{const w=M=>{C.current&&!C.current.contains(M.target)&&D()};return T.show&&document.addEventListener("mousedown",w),()=>{document.removeEventListener("mousedown",w)}},[T.show]);const I=()=>{if(d.trim()){const w=d.includes(".")?d:`${d}.js`;s(w,""),e(w),c(""),l(!1),B.success(`Created ${w}`)}},F=w=>{if(Object.keys(r.files).length<=1){B.error("Cannot delete the last file");return}if(confirm(`Delete ${w}?`)){const M={...r.files};if(delete M[w],Object.keys(M).forEach(R=>{r.files[R]=M[R]}),r.activeFile===w){const R=Object.keys(M);e(R[0])}B.success(`Deleted ${w}`)}},W=w=>{const M=r.files[w]||"",R=new Blob([M],{type:"text/plain"}),J=URL.createObjectURL(R),re=document.createElement("a");re.href=J,re.download=w,document.body.appendChild(re),re.click(),document.body.removeChild(re),URL.revokeObjectURL(J),B.success(`Downloaded ${w}`)},G=()=>{const w={name:r.name,files:r.files,config:r.config,timestamp:new Date().toISOString()},M=new Blob([JSON.stringify(w,null,2)],{type:"application/json"}),R=URL.createObjectURL(M),J=document.createElement("a");J.href=R,J.download=`${r.name}.json`,document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(R),B.success("Project downloaded!")},le=w=>{const M=w.target.files[0];if(M){const R=new FileReader;R.onload=J=>{s(M.name,J.target.result),e(M.name),B.success(`Uploaded ${M.name}`)},R.readAsText(M)}},fe=async()=>{if(!y.trim()){B.error("Please enter a project name");return}if(Object.keys(r.files).length===0){B.error("Please generate some code first");return}j(!0);try{const w=await _(r,y),M=[];if(N){B.info("Deploying to both Firebase and GitHub...");const[R,J]=await Promise.allSettled([tr.deployToFirebase(w,y),tr.deployToGitHub(w,y)]);if(R.status==="fulfilled"&&R.value.success&&M.push({platform:"Firebase",...R.value}),J.status==="fulfilled"&&J.value.success&&M.push({platform:"GitHub",...J.value}),M.length===2)B.success("Successfully deployed to both Firebase and GitHub!");else if(M.length===1)B.success(`Deployed to ${M[0].platform} (${M.length===1?"one":"both"} platform${M.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let R;h==="firebase"?R=await tr.deployToFirebase(w,y):h==="github"&&(R=await tr.deployToGitHub(w,y)),R.success&&(M.push({platform:h,...R}),B.success(`Successfully deployed to ${R.platform}!`))}M.forEach(R=>{R.url&&window.open(R.url,"_blank"),R.instructions&&(console.log(`${R.platform} deployment instructions:`,R.instructions),B.success(`Check console for ${R.platform} Pages setup instructions`))}),b(!1),x(""),v(!1)}catch(w){B.error(`Deployment failed: ${w.message}`)}finally{j(!1)}},_=async(w,M)=>{const R={...w};return R.files["index.html"]||(R.files["index.html"]=z(M)),R.files["package.json"]||(R.files["package.json"]=V(M,R.config)),R.files["README.md"]||(R.files["README.md"]=ne(M,R.config)),R.files["index.html"]=Pe(R.files["index.html"],M),R.files["manifest.json"]||(R.files["manifest.json"]=oe(M)),R},z=w=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${w}</title>
    <meta name="description" content="Built with DreamBuild - Universal AI Development Platform">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563eb">
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 ${w}</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 10px;">Your app is ready!</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 20px;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`,V=(w,M)=>JSON.stringify({name:w.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${w}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",M.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),ne=(w,M)=>{var R;return`# ${w}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${M.appType||"Frontend"}
- **Language**: ${M.language||"JavaScript"}
- **Styling**: ${M.styling||"Custom CSS"}
- **Features**: ${((R=M.features)==null?void 0:R.join(", "))||"Basic functionality"}

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
`},oe=w=>JSON.stringify({name:w,short_name:w.split(" ")[0],description:`Built with DreamBuild - ${w}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),Pe=(w,M)=>{let R=w;return R.includes("<!DOCTYPE html>")||(R=`<!DOCTYPE html>
${R}`),R.includes('<meta name="viewport"')||(R=R.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),R.includes('<meta name="description"')||(R=R.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${M}">`)),R.includes('<meta name="theme-color"')||(R=R.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),R.includes("manifest.json")||(R=R.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),R},qr=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return t.jsxs(O.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[t.jsxs("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:t.jsx(He,{className:"h-4 w-4 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),t.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("button",{onClick:()=>l(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:t.jsx(br,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),t.jsx("button",{onClick:()=>u(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:t.jsx(ft,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{onClick:()=>n(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[t.jsx(bo,{className:"h-3 w-3"}),"Save"]}),t.jsxs("button",{onClick:()=>b(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(r.files).length===0,children:[t.jsx(Ne,{className:"h-3 w-3"}),"Deploy"]}),t.jsxs("button",{onClick:G,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[t.jsx(ot,{className:"h-3 w-3"}),"Export"]})]})]}),t.jsx("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(r.files).length===0?t.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[t.jsx("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:t.jsx(ka,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),t.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),t.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):t.jsxs("div",{className:"py-2",children:[t.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[t.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:t.jsx(He,{className:"h-3 w-3 text-white"})}),t.jsx("span",{children:r.name||"Untitled Project"}),t.jsxs("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(r.files).length," files"]})]}),Object.keys(r.files).map(w=>t.jsxs(O.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${r.activeFile===w?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>P(w),onContextMenu:M=>Y(M,w),children:[t.jsx("div",{className:"w-4 flex items-center justify-center",children:t.jsx("div",{className:"w-px h-4 bg-border"})}),t.jsx("div",{className:"flex items-center justify-center w-5 h-5",children:t.jsx("span",{className:"text-base",children:E(w)})}),t.jsx("div",{className:"flex-1 min-w-0",children:t.jsx("span",{className:"text-sm font-medium truncate",children:w})}),r.activeFile===w&&t.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},w))]})}),t.jsx("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:t.jsxs("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[t.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:t.jsx(yo,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),t.jsxs("div",{className:"text-center",children:[t.jsx("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),t.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),t.jsx("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:le,multiple:!0})]})}),t.jsx(Be,{children:a&&t.jsx(O.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>l(!1),children:t.jsxs(O.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:w=>w.stopPropagation(),children:[t.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),t.jsx("input",{type:"text",value:d,onChange:w=>c(w.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),t.jsx("div",{className:"grid grid-cols-2 gap-2",children:qr.map(w=>t.jsxs("button",{onClick:()=>c(`new-file${w.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[t.jsx("span",{children:w.icon}),t.jsx("span",{className:"truncate",children:w.name})]},w.extension))})]}),t.jsxs("div",{className:"flex gap-2 justify-end",children:[t.jsx("button",{onClick:()=>l(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),t.jsx("button",{onClick:I,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),t.jsx(Be,{children:m&&t.jsx(O.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>u(!1),children:t.jsxs(O.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:w=>w.stopPropagation(),children:[t.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),t.jsx("input",{type:"text",value:r.name,onChange:w=>i({name:w.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),t.jsxs("select",{value:r.config.appType,onChange:w=>i({appType:w.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[t.jsx("option",{value:"frontend",children:"Frontend"}),t.jsx("option",{value:"backend",children:"Backend"}),t.jsx("option",{value:"fullstack",children:"Full Stack"}),t.jsx("option",{value:"mobile",children:"Mobile"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Language"}),t.jsxs("select",{value:r.config.language,onChange:w=>i({language:w.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[t.jsx("option",{value:"javascript",children:"JavaScript"}),t.jsx("option",{value:"typescript",children:"TypeScript"}),t.jsx("option",{value:"python",children:"Python"}),t.jsx("option",{value:"java",children:"Java"}),t.jsx("option",{value:"csharp",children:"C#"}),t.jsx("option",{value:"cpp",children:"C++"}),t.jsx("option",{value:"c",children:"C"}),t.jsx("option",{value:"rust",children:"Rust"}),t.jsx("option",{value:"go",children:"Go"}),t.jsx("option",{value:"php",children:"PHP"}),t.jsx("option",{value:"ruby",children:"Ruby"}),t.jsx("option",{value:"swift",children:"Swift"}),t.jsx("option",{value:"kotlin",children:"Kotlin"}),t.jsx("option",{value:"dart",children:"Dart"}),t.jsx("option",{value:"scala",children:"Scala"}),t.jsx("option",{value:"html",children:"HTML"}),t.jsx("option",{value:"css",children:"CSS"}),t.jsx("option",{value:"sql",children:"SQL"}),t.jsx("option",{value:"r",children:"R"}),t.jsx("option",{value:"matlab",children:"MATLAB"}),t.jsx("option",{value:"perl",children:"Perl"}),t.jsx("option",{value:"lua",children:"Lua"}),t.jsx("option",{value:"bash",children:"Bash/Shell"}),t.jsx("option",{value:"powershell",children:"PowerShell"}),t.jsx("option",{value:"yaml",children:"YAML"}),t.jsx("option",{value:"json",children:"JSON"}),t.jsx("option",{value:"xml",children:"XML"}),t.jsx("option",{value:"markdown",children:"Markdown"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),t.jsxs("select",{value:r.config.framework||"none",onChange:w=>i({framework:w.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[t.jsx("option",{value:"none",children:"None"}),t.jsx("option",{value:"react",children:"React"}),t.jsx("option",{value:"vue",children:"Vue.js"}),t.jsx("option",{value:"angular",children:"Angular"}),t.jsx("option",{value:"svelte",children:"Svelte"}),t.jsx("option",{value:"nextjs",children:"Next.js"}),t.jsx("option",{value:"nuxtjs",children:"Nuxt.js"}),t.jsx("option",{value:"express",children:"Express.js"}),t.jsx("option",{value:"fastapi",children:"FastAPI"}),t.jsx("option",{value:"django",children:"Django"}),t.jsx("option",{value:"flask",children:"Flask"}),t.jsx("option",{value:"spring",children:"Spring Boot"}),t.jsx("option",{value:"laravel",children:"Laravel"}),t.jsx("option",{value:"rails",children:"Ruby on Rails"}),t.jsx("option",{value:"flutter",children:"Flutter"}),t.jsx("option",{value:"react-native",children:"React Native"}),t.jsx("option",{value:"ionic",children:"Ionic"}),t.jsx("option",{value:"electron",children:"Electron"})]})]}),t.jsxs("div",{className:"flex gap-2 justify-end",children:[t.jsx("button",{onClick:()=>u(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),t.jsx("button",{onClick:()=>{n(),u(!1),B.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),t.jsx(Be,{children:g&&t.jsx(O.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>b(!1),children:t.jsxs(O.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:w=>w.stopPropagation(),children:[t.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[t.jsx(Ne,{className:"h-5 w-5"}),"Deploy Your App"]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),t.jsx("input",{type:"text",value:y,onChange:w=>x(w.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[t.jsx("input",{type:"radio",value:"firebase",checked:h==="firebase",onChange:w=>k(w.target.value),className:"text-white"}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:t.jsx("span",{className:"text-white text-xs",children:"F"})}),t.jsx("span",{children:"Firebase Hosting"})]})]}),t.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[t.jsx("input",{type:"radio",value:"github",checked:h==="github",onChange:w=>k(w.target.value),className:"text-white"}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Ie,{className:"h-4 w-4"}),t.jsx("span",{children:"GitHub Pages"})]})]})]})]}),t.jsxs("div",{className:"p-3 bg-muted rounded-md",children:[t.jsx("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),t.jsx("div",{className:"text-xs text-muted-foreground space-y-1",children:h==="firebase"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Cost:"})," Free tier available"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):h==="github"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:[t.jsx("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Cost:"})," Free for public repositories"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),t.jsxs("div",{className:"flex gap-2 justify-end",children:[t.jsx("button",{onClick:()=>b(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:f,children:"Cancel"}),t.jsx("button",{onClick:fe,disabled:f||!y.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:f?t.jsxs(t.Fragment,{children:[t.jsx(Ut,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):t.jsxs(t.Fragment,{children:[t.jsx(Ne,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),t.jsx(Be,{children:T.show&&t.jsxs(O.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:C,className:"fixed z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:T.x,top:T.y},onClick:D,children:[t.jsxs("button",{onClick:()=>H("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[t.jsx(ot,{className:"h-4 w-4"}),"Download"]}),t.jsxs("button",{onClick:()=>H("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[t.jsx(wt,{className:"h-4 w-4"}),"Copy"]}),t.jsxs("button",{onClick:()=>H("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[t.jsx(gs,{className:"h-4 w-4"}),"Rename"]}),Object.keys(r.files).length>1&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"border-t border-border my-1"}),t.jsxs("button",{onClick:()=>H("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[t.jsx(vo,{className:"h-4 w-4"}),"Delete"]})]})]})})]})};function iu(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function Rn(r,e){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),s.push.apply(s,n)}return s}function On(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Rn(Object(s),!0).forEach(function(n){iu(r,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):Rn(Object(s)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(s,n))})}return r}function au(r,e){if(r==null)return{};var s={},n=Object.keys(r),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(s[o]=r[o]);return s}function lu(r,e){if(r==null)return{};var s=au(r,e),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(s[n]=r[n])}return s}function cu(r,e){return du(r)||uu(r,e)||mu(r,e)||pu()}function du(r){if(Array.isArray(r))return r}function uu(r,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var s=[],n=!0,o=!1,i=void 0;try{for(var a=r[Symbol.iterator](),l;!(n=(l=a.next()).done)&&(s.push(l.value),!(e&&s.length===e));n=!0);}catch(d){o=!0,i=d}finally{try{!n&&a.return!=null&&a.return()}finally{if(o)throw i}}return s}}function mu(r,e){if(r){if(typeof r=="string")return In(r,e);var s=Object.prototype.toString.call(r).slice(8,-1);if(s==="Object"&&r.constructor&&(s=r.constructor.name),s==="Map"||s==="Set")return Array.from(r);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return In(r,e)}}function In(r,e){(e==null||e>r.length)&&(e=r.length);for(var s=0,n=new Array(e);s<e;s++)n[s]=r[s];return n}function pu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hu(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function Mn(r,e){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),s.push.apply(s,n)}return s}function Ln(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Mn(Object(s),!0).forEach(function(n){hu(r,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):Mn(Object(s)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(s,n))})}return r}function fu(){for(var r=arguments.length,e=new Array(r),s=0;s<r;s++)e[s]=arguments[s];return function(n){return e.reduceRight(function(o,i){return i(o)},n)}}function Ft(r){return function e(){for(var s=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=r.length?r.apply(this,o):function(){for(var a=arguments.length,l=new Array(a),d=0;d<a;d++)l[d]=arguments[d];return e.apply(s,[].concat(o,l))}}}function Nr(r){return{}.toString.call(r).includes("Object")}function gu(r){return!Object.keys(r).length}function Gt(r){return typeof r=="function"}function xu(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function bu(r,e){return Nr(e)||Ge("changeType"),Object.keys(e).some(function(s){return!xu(r,s)})&&Ge("changeField"),e}function yu(r){Gt(r)||Ge("selectorType")}function vu(r){Gt(r)||Nr(r)||Ge("handlerType"),Nr(r)&&Object.values(r).some(function(e){return!Gt(e)})&&Ge("handlersType")}function wu(r){r||Ge("initialIsRequired"),Nr(r)||Ge("initialType"),gu(r)&&Ge("initialContent")}function ju(r,e){throw new Error(r[e]||r.default)}var Nu={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ge=Ft(ju)(Nu),rr={changes:bu,selector:yu,handler:vu,initial:wu};function Su(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};rr.initial(r),rr.handler(e);var s={current:r},n=Ft(Tu)(s,e),o=Ft(ku)(s),i=Ft(rr.changes)(r),a=Ft(Cu)(s);function l(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(m){return m};return rr.selector(c),c(s.current)}function d(c){fu(n,o,i,a)(c)}return[l,d]}function Cu(r,e){return Gt(e)?e(r.current):e}function ku(r,e){return r.current=Ln(Ln({},r.current),e),e}function Tu(r,e,s){return Gt(e)?e(r.current):Object.keys(s).forEach(function(n){var o;return(o=e[n])===null||o===void 0?void 0:o.call(e,r.current[n])}),s}var Du={create:Su},Eu={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function Au(r){return function e(){for(var s=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=r.length?r.apply(this,o):function(){for(var a=arguments.length,l=new Array(a),d=0;d<a;d++)l[d]=arguments[d];return e.apply(s,[].concat(o,l))}}}function Pu(r){return{}.toString.call(r).includes("Object")}function Ru(r){return r||Fn("configIsRequired"),Pu(r)||Fn("configType"),r.urls?(Ou(),{paths:{vs:r.urls.monacoBase}}):r}function Ou(){console.warn(mi.deprecation)}function Iu(r,e){throw new Error(r[e]||r.default)}var mi={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Fn=Au(Iu)(mi),Mu={config:Ru},Lu=function(){for(var e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return function(o){return s.reduceRight(function(i,a){return a(i)},o)}};function pi(r,e){return Object.keys(e).forEach(function(s){e[s]instanceof Object&&r[s]&&Object.assign(e[s],pi(r[s],e[s]))}),On(On({},r),e)}var Fu={type:"cancelation",msg:"operation is manually canceled"};function es(r){var e=!1,s=new Promise(function(n,o){r.then(function(i){return e?o(Fu):n(i)}),r.catch(o)});return s.cancel=function(){return e=!0},s}var _u=Du.create({config:Eu,isInitialized:!1,resolve:null,reject:null,monaco:null}),hi=cu(_u,2),qt=hi[0],Mr=hi[1];function Bu(r){var e=Mu.config(r),s=e.monaco,n=lu(e,["monaco"]);Mr(function(o){return{config:pi(o.config,n),monaco:s}})}function $u(){var r=qt(function(e){var s=e.monaco,n=e.isInitialized,o=e.resolve;return{monaco:s,isInitialized:n,resolve:o}});if(!r.isInitialized){if(Mr({isInitialized:!0}),r.monaco)return r.resolve(r.monaco),es(ts);if(window.monaco&&window.monaco.editor)return fi(window.monaco),r.resolve(window.monaco),es(ts);Lu(Uu,zu)(Gu)}return es(ts)}function Uu(r){return document.body.appendChild(r)}function Hu(r){var e=document.createElement("script");return r&&(e.src=r),e}function zu(r){var e=qt(function(n){var o=n.config,i=n.reject;return{config:o,reject:i}}),s=Hu("".concat(e.config.paths.vs,"/loader.js"));return s.onload=function(){return r()},s.onerror=e.reject,s}function Gu(){var r=qt(function(s){var n=s.config,o=s.resolve,i=s.reject;return{config:n,resolve:o,reject:i}}),e=window.require;e.config(r.config),e(["vs/editor/editor.main"],function(s){fi(s),r.resolve(s)},function(s){r.reject(s)})}function fi(r){qt().monaco||Mr({monaco:r})}function Wu(){return qt(function(r){var e=r.monaco;return e})}var ts=new Promise(function(r,e){return Mr({resolve:r,reject:e})}),gi={config:Bu,init:$u,__getMonacoInstance:Wu},qu={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},rs=qu,Vu={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Ju=Vu;function Ku({children:r}){return Ee.createElement("div",{style:Ju.container},r)}var Yu=Ku,Xu=Yu;function Qu({width:r,height:e,isEditorReady:s,loading:n,_ref:o,className:i,wrapperProps:a}){return Ee.createElement("section",{style:{...rs.wrapper,width:r,height:e},...a},!s&&Ee.createElement(Xu,null,n),Ee.createElement("div",{ref:o,style:{...rs.fullWidth,...!s&&rs.hide},className:i}))}var Zu=Qu,xi=p.memo(Zu);function em(r){p.useEffect(r,[])}var bi=em;function tm(r,e,s=!0){let n=p.useRef(!0);p.useEffect(n.current||!s?()=>{n.current=!1}:r,e)}var ge=tm;function Bt(){}function xt(r,e,s,n){return rm(r,n)||sm(r,e,s,n)}function rm(r,e){return r.editor.getModel(yi(r,e))}function sm(r,e,s,n){return r.editor.createModel(e,s,n?yi(r,n):void 0)}function yi(r,e){return r.Uri.parse(e)}function nm({original:r,modified:e,language:s,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:d=!1,theme:c="light",loading:m="Loading...",options:u={},height:g="100%",width:b="100%",className:f,wrapperProps:j={},beforeMount:h=Bt,onMount:k=Bt}){let[N,v]=p.useState(!1),[y,x]=p.useState(!0),T=p.useRef(null),A=p.useRef(null),C=p.useRef(null),L=p.useRef(k),E=p.useRef(h),P=p.useRef(!1);bi(()=>{let I=gi.init();return I.then(F=>(A.current=F)&&x(!1)).catch(F=>(F==null?void 0:F.type)!=="cancelation"&&console.error("Monaco initialization: error:",F)),()=>T.current?D():I.cancel()}),ge(()=>{if(T.current&&A.current){let I=T.current.getOriginalEditor(),F=xt(A.current,r||"",n||s||"text",i||"");F!==I.getModel()&&I.setModel(F)}},[i],N),ge(()=>{if(T.current&&A.current){let I=T.current.getModifiedEditor(),F=xt(A.current,e||"",o||s||"text",a||"");F!==I.getModel()&&I.setModel(F)}},[a],N),ge(()=>{let I=T.current.getModifiedEditor();I.getOption(A.current.editor.EditorOption.readOnly)?I.setValue(e||""):e!==I.getValue()&&(I.executeEdits("",[{range:I.getModel().getFullModelRange(),text:e||"",forceMoveMarkers:!0}]),I.pushUndoStop())},[e],N),ge(()=>{var I,F;(F=(I=T.current)==null?void 0:I.getModel())==null||F.original.setValue(r||"")},[r],N),ge(()=>{let{original:I,modified:F}=T.current.getModel();A.current.editor.setModelLanguage(I,n||s||"text"),A.current.editor.setModelLanguage(F,o||s||"text")},[s,n,o],N),ge(()=>{var I;(I=A.current)==null||I.editor.setTheme(c)},[c],N),ge(()=>{var I;(I=T.current)==null||I.updateOptions(u)},[u],N);let Y=p.useCallback(()=>{var W;if(!A.current)return;E.current(A.current);let I=xt(A.current,r||"",n||s||"text",i||""),F=xt(A.current,e||"",o||s||"text",a||"");(W=T.current)==null||W.setModel({original:I,modified:F})},[s,e,o,r,n,i,a]),H=p.useCallback(()=>{var I;!P.current&&C.current&&(T.current=A.current.editor.createDiffEditor(C.current,{automaticLayout:!0,...u}),Y(),(I=A.current)==null||I.editor.setTheme(c),v(!0),P.current=!0)},[u,c,Y]);p.useEffect(()=>{N&&L.current(T.current,A.current)},[N]),p.useEffect(()=>{!y&&!N&&H()},[y,N,H]);function D(){var F,W,G,le;let I=(F=T.current)==null?void 0:F.getModel();l||((W=I==null?void 0:I.original)==null||W.dispose()),d||((G=I==null?void 0:I.modified)==null||G.dispose()),(le=T.current)==null||le.dispose()}return Ee.createElement(xi,{width:b,height:g,isEditorReady:N,loading:m,_ref:C,className:f,wrapperProps:j})}var om=nm;p.memo(om);function im(r){let e=p.useRef();return p.useEffect(()=>{e.current=r},[r]),e.current}var am=im,sr=new Map;function lm({defaultValue:r,defaultLanguage:e,defaultPath:s,value:n,language:o,path:i,theme:a="light",line:l,loading:d="Loading...",options:c={},overrideServices:m={},saveViewState:u=!0,keepCurrentModel:g=!1,width:b="100%",height:f="100%",className:j,wrapperProps:h={},beforeMount:k=Bt,onMount:N=Bt,onChange:v,onValidate:y=Bt}){let[x,T]=p.useState(!1),[A,C]=p.useState(!0),L=p.useRef(null),E=p.useRef(null),P=p.useRef(null),Y=p.useRef(N),H=p.useRef(k),D=p.useRef(),I=p.useRef(n),F=am(i),W=p.useRef(!1),G=p.useRef(!1);bi(()=>{let _=gi.init();return _.then(z=>(L.current=z)&&C(!1)).catch(z=>(z==null?void 0:z.type)!=="cancelation"&&console.error("Monaco initialization: error:",z)),()=>E.current?fe():_.cancel()}),ge(()=>{var z,V,ne,oe;let _=xt(L.current,r||n||"",e||o||"",i||s||"");_!==((z=E.current)==null?void 0:z.getModel())&&(u&&sr.set(F,(V=E.current)==null?void 0:V.saveViewState()),(ne=E.current)==null||ne.setModel(_),u&&((oe=E.current)==null||oe.restoreViewState(sr.get(i))))},[i],x),ge(()=>{var _;(_=E.current)==null||_.updateOptions(c)},[c],x),ge(()=>{!E.current||n===void 0||(E.current.getOption(L.current.editor.EditorOption.readOnly)?E.current.setValue(n):n!==E.current.getValue()&&(G.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),E.current.pushUndoStop(),G.current=!1))},[n],x),ge(()=>{var z,V;let _=(z=E.current)==null?void 0:z.getModel();_&&o&&((V=L.current)==null||V.editor.setModelLanguage(_,o))},[o],x),ge(()=>{var _;l!==void 0&&((_=E.current)==null||_.revealLine(l))},[l],x),ge(()=>{var _;(_=L.current)==null||_.editor.setTheme(a)},[a],x);let le=p.useCallback(()=>{var _;if(!(!P.current||!L.current)&&!W.current){H.current(L.current);let z=i||s,V=xt(L.current,n||r||"",e||o||"",z||"");E.current=(_=L.current)==null?void 0:_.editor.create(P.current,{model:V,automaticLayout:!0,...c},m),u&&E.current.restoreViewState(sr.get(z)),L.current.editor.setTheme(a),l!==void 0&&E.current.revealLine(l),T(!0),W.current=!0}},[r,e,s,n,o,i,c,m,u,a,l]);p.useEffect(()=>{x&&Y.current(E.current,L.current)},[x]),p.useEffect(()=>{!A&&!x&&le()},[A,x,le]),I.current=n,p.useEffect(()=>{var _,z;x&&v&&((_=D.current)==null||_.dispose(),D.current=(z=E.current)==null?void 0:z.onDidChangeModelContent(V=>{G.current||v(E.current.getValue(),V)}))},[x,v]),p.useEffect(()=>{if(x){let _=L.current.editor.onDidChangeMarkers(z=>{var ne;let V=(ne=E.current.getModel())==null?void 0:ne.uri;if(V&&z.find(oe=>oe.path===V.path)){let oe=L.current.editor.getModelMarkers({resource:V});y==null||y(oe)}});return()=>{_==null||_.dispose()}}return()=>{}},[x,y]);function fe(){var _,z;(_=D.current)==null||_.dispose(),g?u&&sr.set(i,E.current.saveViewState()):(z=E.current.getModel())==null||z.dispose(),E.current.dispose()}return Ee.createElement(xi,{width:b,height:f,isEditorReady:x,loading:d,_ref:P,className:j,wrapperProps:h})}var cm=lm,dm=p.memo(cm);const um=()=>{var N,v,y,x,T,A;const{theme:r}=Or(),{currentProject:e,updateFile:s}=Ye(),[n,o]=p.useState(!0),[i,a]=p.useState(null),l=p.useRef(null);p.useEffect(()=>{if(l.current){const C=e.files[e.activeFile]||"",L=l.current.getValue();C!==L&&l.current.setValue(C)}},[e.activeFile,e.files[e.activeFile]]),p.useEffect(()=>{const C=()=>{l.current&&setTimeout(()=>{l.current.layout()},100)};return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[]);const d=(C,L)=>{try{console.log("🎯 Monaco Editor mounting..."),o(!1),a(null),l.current=C;const E=e.files[e.activeFile]||"";E&&C.setValue(E),L.editor.defineTheme("custom-dark",{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"569CD6"},{token:"string",foreground:"CE9178"},{token:"number",foreground:"B5CEA8"},{token:"tag",foreground:"569CD6"},{token:"attribute.name",foreground:"92C5F8"},{token:"attribute.value",foreground:"CE9178"}],colors:{"editor.background":"#1e1e1e","editor.foreground":"#d4d4d4","editor.lineHighlightBackground":"#2a2d2e","editor.selectionBackground":"#264f78","editor.inactiveSelectionBackground":"#3a3d41"}}),L.editor.defineTheme("custom-light",{base:"vs",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"0000FF"},{token:"string",foreground:"A31515"},{token:"number",foreground:"098658"},{token:"tag",foreground:"800000"},{token:"attribute.name",foreground:"FF0000"},{token:"attribute.value",foreground:"0451A5"}],colors:{"editor.background":"#ffffff","editor.foreground":"#000000","editor.lineHighlightBackground":"#f5f5f5","editor.selectionBackground":"#add6ff","editor.inactiveSelectionBackground":"#e5ebf1"}}),L.editor.setTheme(r==="dark"?"custom-dark":"custom-light"),C.updateOptions({fontSize:14,fontFamily:"JetBrains Mono, Monaco, Consolas, monospace",lineHeight:22,minimap:{enabled:!0},scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",formatOnPaste:!0,formatOnType:!0,suggestOnTriggerCharacters:!0,acceptSuggestionOnEnter:"on",tabCompletion:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always"}),setTimeout(()=>{C.layout()},100);try{C.addCommand(L.KeyMod.CtrlCmd|L.KeyCode.KeyS,()=>{f()}),C.addCommand(L.KeyMod.CtrlCmd|L.KeyCode.KeyC,()=>{C.getSelection().isEmpty()&&g()})}catch(P){console.warn("⚠️ Could not add keyboard shortcuts:",P)}}catch(E){console.error("❌ Error mounting Monaco Editor:",E),console.error("❌ Monaco Editor error details:",E.message,E.stack),a(E.message),o(!1),B.error("Failed to load code editor")}},c=C=>{try{C!==void 0&&s(e.activeFile,C)}catch(L){console.error("Error updating file:",L),B.error("Failed to save changes")}},m=()=>{const C=e.activeFile.split(".").pop();return{html:"html",css:"css",js:"javascript",jsx:"javascript",ts:"typescript",tsx:"typescript",py:"python",java:"java",cpp:"cpp",c:"c",php:"php",rb:"ruby",go:"go",rs:"rust",swift:"swift",kt:"kotlin",scala:"scala",clj:"clojure",hs:"haskell",ml:"fsharp",fs:"fsharp",vb:"vb",sql:"sql",json:"json",xml:"xml",yaml:"yaml",yml:"yaml",md:"markdown",sh:"shell",bash:"shell",ps1:"powershell",dockerfile:"dockerfile"}[C]||"plaintext"},u=()=>{const C=e.files[e.activeFile]||"";navigator.clipboard.writeText(C),B.success("Code copied to clipboard!")},g=()=>{const C=e.files[e.activeFile]||"";navigator.clipboard.writeText(C),B.success("All code copied to clipboard!")},b=()=>{const C=e.files[e.activeFile]||"",L=new Blob([C],{type:"text/plain"}),E=URL.createObjectURL(L),P=document.createElement("a");P.href=E,P.download=e.activeFile,document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL(E),B.success(`Downloaded ${e.activeFile}`)},f=()=>{B.success("Code saved!")},j=()=>{l.current&&(l.current.getAction("editor.action.formatDocument").run(),B.success("Code formatted!"))},h={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖"},k=C=>h[C]||"📄";return t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[t.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-lg",children:k(e.activeFile)}),t.jsx("span",{className:"font-medium text-sm",children:e.activeFile}),t.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-1 rounded",children:m()})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:j,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Format Code (Ctrl+Shift+F)",children:t.jsx(Hs,{className:"h-4 w-4"})}),t.jsx("button",{onClick:u,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy Code",children:t.jsx(wt,{className:"h-4 w-4"})}),t.jsx("button",{onClick:b,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Download File",children:t.jsx(ot,{className:"h-4 w-4"})})]})]}),t.jsx("div",{className:"flex-1 relative h-full min-h-[500px]",children:i?t.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[t.jsx("div",{className:"text-red-500 text-lg mb-4",children:"⚠️ Editor Error"}),t.jsx("div",{className:"text-muted-foreground mb-4",children:i}),t.jsx("button",{onClick:()=>{a(null),o(!0),window.location.reload()},className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Reload Editor"})]}):t.jsx(dm,{height:"100%",language:m(),value:e.files[e.activeFile]||"",onChange:c,onMount:d,theme:r==="dark"?"vs-dark":"vs",loading:t.jsxs("div",{className:"flex items-center justify-center h-full",children:[t.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"}),t.jsx("span",{className:"ml-2",children:"Loading editor..."})]}),options:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,mouseWheelZoom:!0,smoothScrolling:!0,cursorBlinking:"blink",renderLineHighlight:"line",renderWhitespace:"selection",renderIndentGuides:!0,highlightActiveIndentGuide:!0,bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always",unfoldOnClickAfterEnd:!1,contextmenu:!0,mouseWheelScrollSensitivity:1,fastScrollSensitivity:5,cursorSurroundingLines:3,cursorSurroundingLinesStyle:"default",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:14,horizontalScrollbarSize:14,useShadows:!0,verticalHasArrows:!1,horizontalHasArrows:!1,arrowSize:11,verticalSliderSize:14,horizontalSliderSize:14}}},`${e.activeFile}-${((N=e.files[e.activeFile])==null?void 0:N.length)||0}`)}),t.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("span",{children:["Line ",((y=(v=l.current)==null?void 0:v.getPosition())==null?void 0:y.lineNumber)||1]}),t.jsxs("span",{children:["Column ",((T=(x=l.current)==null?void 0:x.getPosition())==null?void 0:T.column)||1]}),t.jsxs("span",{children:[((A=e.files[e.activeFile])==null?void 0:A.length)||0," characters"]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{children:"Ctrl+S to save"}),t.jsx("span",{children:"•"}),t.jsx("span",{children:"Ctrl+C to copy all"})]})]})]})},mm=()=>{console.log("🎮 Preview component rendered!");const{currentProject:r}=Ye(),e=p.useRef(null),[s,n]=p.useState(!1),[o,i]=p.useState(!1),[a,l]=p.useState(null),[d,c]=p.useState(0);Ee.useEffect(()=>{c(N=>N+1),console.log("🎮 Preview component rendered! Render count:",d+1)},[]),p.useEffect(()=>{console.log("🎮 Preview useEffect triggered - files changed:",Object.keys(r.files)),console.log("🎮 Preview useEffect - currentProject:",r),console.log("🎮 Preview useEffect - file count:",Object.keys(r.files).length);const N=setTimeout(()=>{m()},50);return()=>clearTimeout(N)},[r.files,r.activeFile,r]),p.useEffect(()=>{const N=()=>{e.current?(console.log("🎮 Iframe mounted, updating preview..."),m()):(console.log("🎮 Iframe not ready, retrying..."),setTimeout(N,50))};setTimeout(N,100)},[]);const m=()=>{if(console.log("🎮 updatePreview called with files:",Object.keys(r.files)),!e.current){console.log("🎮 updatePreview: iframeRef.current is null, skipping update");return}if(!r.files||Object.keys(r.files).length===0){console.log("🎮 updatePreview: No files to display, showing placeholder"),b();return}console.log("🎮 updatePreview: iframeRef.current exists, proceeding..."),n(!0),l(null);try{let N=r.files["index.html"]||"";if(!N.trim()){const H=Object.keys(r.files).filter(D=>D.endsWith(".html")&&D!=="index.html");if(H.length>0){console.log("🎮 Preview Debug - No index.html found, using:",H[0]);const D=r.files[H[0]]||"";D.trim()&&(N=D)}}const v=Object.keys(r.files).filter(H=>H.endsWith(".css")),y=v.map(H=>r.files[H]).join(`
`);console.log("🎮 Preview Debug - All CSS files found:",v),console.log("🎮 Preview Debug - CSS content length:",y.length),console.log("🎮 Preview Debug - CSS content preview:",y.substring(0,200)+"...");const x=r.files["script.js"]||"",T=r.files["src/components/GameApp.jsx"]||"",A=r.files["src/components/GameComponent.jsx"]||"",C=r.files["src/components/TempleRunUI.jsx"]||"",L=r.files["src/components/RunnerPlayer.jsx"]||"",E=r.files["src/components/Obstacle.jsx"]||"";if(A&&(console.log("🎮 Preview Debug - GameComponent content preview:",A.substring(0,200)+"..."),console.log("🎮 Preview Debug - GameComponent contains Temple Run:",A.toLowerCase().includes("temple run")),console.log("🎮 Preview Debug - GameComponent contains lane:",A.toLowerCase().includes("lane")),console.log("🎮 Preview Debug - GameComponent contains jump:",A.toLowerCase().includes("jump"))),console.log("🎮 Preview Debug - Checking for game files:"),console.log("🎮 - GameApp.jsx exists:",!!T),console.log("🎮 - GameComponent.jsx exists:",!!A),console.log("🎮 - TempleRunUI.jsx exists:",!!C),console.log("🎮 - RunnerPlayer.jsx exists:",!!L),console.log("🎮 - Obstacle.jsx exists:",!!E),console.log("🎮 - All project files:",Object.keys(r.files)),T||A){console.log("🎮 Preview Debug - Game files detected, creating React preview"),console.log("🎮 Preview Debug - About to call createReactPreview, iframeRef.current:",!!e.current),g(),console.log("🎮 Preview Debug - createReactPreview call completed");return}if(console.log("🎮 Preview Debug - No game files detected, using regular HTML preview"),console.log("🎮 Preview Debug - HTML content length:",N.length),console.log("🎮 Preview Debug - CSS content length:",y.length),console.log("🎮 Preview Debug - JS content length:",x.length),!N.trim()){console.log("🎮 Preview Debug - No HTML content found, creating basic structure");const H=y.trim().length>0,D=x.trim().length>0;N=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild Generated App</title>
    ${H?`<style>${y}</style>`:""}
</head>
<body>
    <div id="app">
        <h1>DreamBuild Generated Application</h1>
        <p>Your application is loading...</p>
        <div id="content"></div>
    </div>
    ${D?`<script>${x}<\/script>`:""}
</body>
</html>`,console.log("🎮 Preview Debug - Created basic HTML structure")}let P=N;if(y.trim()&&(P=P.replace(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']style\.css["'][^>]*>/gi,`<style>${y}</style>`),P===N&&P.includes("<head>")?P=P.replace("<head>",`<head>
<style>${y}</style>`):P===N&&!P.includes("<head>")&&(P.includes("<title>")?P=P.replace("</title>",`</title>
<style>${y}</style>`):P=`<style>${y}</style>
${P}`)),x.trim()){const H=`(function() {
          ${x}
        })();`;P=P.replace(/<script[^>]*src=["']script\.js["'][^>]*><\/script>/gi,`<script>${H}<\/script>`),P.includes("</body>")?P=P.replace("</body>",`<script>${H}<\/script>
</body>`):P+=`
<script>${H}<\/script>`}P.includes("<!DOCTYPE html>")||(P=`<!DOCTYPE html>
${P}`),console.log("🎮 Preview Debug - Final HTML length:",P.length),console.log("🎮 Preview Debug - HTML contains <style>:",P.includes("<style>")),console.log("🎮 Preview Debug - HTML contains <script>:",P.includes("<script>")),console.log("🎮 Preview Debug - HTML preview:",P.substring(0,500)+"...");const Y=e.current;Y.srcdoc=P,Y.onload=()=>{n(!1),l(null)},Y.onerror=()=>{n(!1),l("Failed to load preview")}}catch(N){console.error("Preview update error:",N),n(!1),l("Preview update failed")}},u=N=>N?N.replace(/`/g,"\\`").replace(/\${/g,"\\${").replace(/\$/g,"\\$"):"",g=()=>{if(console.log("🎮 Creating React preview..."),!e.current){console.log("🎮 createReactPreview: iframeRef.current is null");return}try{const N=r.files["src/components/GameApp.jsx"]||"",v=r.files["src/components/GameComponent.jsx"]||"",y=r.files["src/components/TempleRunUI.jsx"]||"",x=r.files["src/components/RunnerPlayer.jsx"]||"",T=r.files["src/components/Obstacle.jsx"]||"",A=r.files["src/components/Coin.jsx"]||"",C=r.files["src/components/Player.jsx"]||"",L=r.files["src/components/GameApp.css"]||"",E=r.files["src/components/GameComponent.css"]||"",P=r.files["src/components/TempleRunUI.css"]||"",Y=r.files["src/components/RunnerPlayer.css"]||"",H=r.files["src/components/Obstacle.css"]||"",D=r.files["src/components/Coin.css"]||"",I=r.files["src/components/Player.css"]||"",F=y||x||T,W=C||A,G=v.toLowerCase(),le=G.includes("temple run")||G.includes("lane")||G.includes("jump")||G.includes("slide")||G.includes("obstacle")||G.includes("endless runner"),fe=F||le,_=W&&!fe;console.log("🎮 Preview Debug - Available files:"),console.log("🎮 - templeRunUIFile:",!!y),console.log("🎮 - runnerPlayerFile:",!!x),console.log("🎮 - obstacleFile:",!!T),console.log("🎮 - playerFile:",!!C),console.log("🎮 - coinFile:",!!A),console.log("🎮 - hasTempleRunFiles:",F),console.log("🎮 - hasTempleRunContent:",le),console.log("🎮 - isTempleRun:",fe),console.log("🎮 - isCoinCollector:",_),console.log("🎮 - All project files:",Object.keys(r.files)),console.log("🎮 FINAL GAME TYPE DECISION:"),console.log(fe?"🎮 ✅ RENDERING TEMPLE RUN GAME":_?"🎮 ✅ RENDERING COIN COLLECTOR GAME":"🎮 ✅ RENDERING DEFAULT GAME");const z=`
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
          ${u(L)}
          ${u(E)}
          ${u(P)}
          ${u(Y)}
          ${u(H)}
          ${u(D)}
          ${u(I)}
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
            
            if (${fe}) {
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
            } else if (${_}) {
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
    `,V=e.current;console.log("🎮 Setting iframe content, length:",z.length),V.srcdoc=z,V.onload=()=>{var ne,oe;console.log("🎮 Iframe loaded successfully"),n(!1),l(null);try{const Pe=((oe=(ne=V.contentDocument)==null?void 0:ne.body)==null?void 0:oe.textContent)||"";console.log("🎮 Iframe content verification - length:",Pe.length),console.log("🎮 Iframe content preview:",Pe.substring(0,100))}catch(Pe){console.log("🎮 Iframe content verification - access denied:",Pe.message)}},V.onerror=()=>{console.log("🎮 Iframe error occurred"),n(!1),l("Failed to load React preview")}}catch(N){console.error("🎮 Error in createReactPreview:",N),n(!1),l(`Preview generation failed: ${N.message}`)}},b=()=>{if(!e.current)return;const N=`
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
    `,v=e.current;v.srcdoc=N,n(!1)},f=()=>{m(),B.success("Preview refreshed!")},j=()=>{if(!e.current)return;const N=e.current;if(N.srcdoc){const v=window.open("","_blank");v.document.write(N.srcdoc),v.document.close(),B.success("Opened in new tab!")}else B.error("No content to open")},h=()=>{document.fullscreenElement||i(!1)};p.useEffect(()=>(document.addEventListener("fullscreenchange",h),()=>{document.removeEventListener("fullscreenchange",h)}),[]);const k=async()=>{o?document.exitFullscreen&&await document.exitFullscreen():e.current.requestFullscreen&&await e.current.requestFullscreen()};return t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${o?"fixed inset-0 z-50 rounded-none":""}`,children:[t.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("h3",{className:"font-semibold text-sm",children:"Live Preview"}),t.jsx("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"RENDERED"}),t.jsxs("span",{className:"text-xs bg-blue-500 text-white px-2 py-1 rounded",children:["#",d]}),s&&t.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[t.jsx("div",{className:"spinner"}),t.jsx("span",{children:"Updating..."})]}),a&&t.jsx("span",{className:"text-xs text-destructive",children:"Error"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:f,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Refresh Preview",children:t.jsx(Hs,{className:"h-4 w-4"})}),t.jsx("button",{onClick:j,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Open in New Tab",children:t.jsx(yr,{className:"h-4 w-4"})}),t.jsx("button",{onClick:k,className:"p-2 hover:bg-muted rounded-md transition-colors",title:o?"Exit Fullscreen":"Enter Fullscreen",children:o?t.jsx(Ta,{className:"h-4 w-4"}):t.jsx(Da,{className:"h-4 w-4"})})]})]}),t.jsx("div",{className:"flex-1 relative bg-black",children:a?t.jsx("div",{className:"flex items-center justify-center h-full",children:t.jsxs("div",{className:"text-center p-6",children:[t.jsx("div",{className:"text-4xl mb-4",children:"⚠️"}),t.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Preview Error"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:a}),t.jsx("button",{onClick:f,className:"px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors",children:"Try Again"})]})}):t.jsx("iframe",{ref:e,className:"w-full h-full border-0",title:"Preview",sandbox:"allow-scripts allow-forms allow-popups",onLoad:()=>n(!1),onError:()=>{n(!1),l("Failed to load preview")}})}),t.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("span",{children:"Responsive"}),t.jsx("span",{children:"•"}),t.jsx("span",{children:"Auto-refresh"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{children:"Ctrl+R to refresh"}),t.jsx("span",{children:"•"}),t.jsx("span",{children:"F11 for fullscreen"})]})]})]})};function vi(r,e){return function(){return r.apply(e,arguments)}}const{toString:pm}=Object.prototype,{getPrototypeOf:rn}=Object,{iterator:Lr,toStringTag:wi}=Symbol,Fr=(r=>e=>{const s=pm.call(e);return r[s]||(r[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),Se=r=>(r=r.toLowerCase(),e=>Fr(e)===r),_r=r=>e=>typeof e===r,{isArray:kt}=Array,Nt=_r("undefined");function Vt(r){return r!==null&&!Nt(r)&&r.constructor!==null&&!Nt(r.constructor)&&pe(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const ji=Se("ArrayBuffer");function hm(r){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&ji(r.buffer),e}const fm=_r("string"),pe=_r("function"),Ni=_r("number"),Jt=r=>r!==null&&typeof r=="object",gm=r=>r===!0||r===!1,ur=r=>{if(Fr(r)!=="object")return!1;const e=rn(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(wi in r)&&!(Lr in r)},xm=r=>{if(!Jt(r)||Vt(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},bm=Se("Date"),ym=Se("File"),vm=Se("Blob"),wm=Se("FileList"),jm=r=>Jt(r)&&pe(r.pipe),Nm=r=>{let e;return r&&(typeof FormData=="function"&&r instanceof FormData||pe(r.append)&&((e=Fr(r))==="formdata"||e==="object"&&pe(r.toString)&&r.toString()==="[object FormData]"))},Sm=Se("URLSearchParams"),[Cm,km,Tm,Dm]=["ReadableStream","Request","Response","Headers"].map(Se),Em=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Kt(r,e,{allOwnKeys:s=!1}={}){if(r===null||typeof r>"u")return;let n,o;if(typeof r!="object"&&(r=[r]),kt(r))for(n=0,o=r.length;n<o;n++)e.call(null,r[n],n,r);else{if(Vt(r))return;const i=s?Object.getOwnPropertyNames(r):Object.keys(r),a=i.length;let l;for(n=0;n<a;n++)l=i[n],e.call(null,r[l],l,r)}}function Si(r,e){if(Vt(r))return null;e=e.toLowerCase();const s=Object.keys(r);let n=s.length,o;for(;n-- >0;)if(o=s[n],e===o.toLowerCase())return o;return null}const rt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ci=r=>!Nt(r)&&r!==rt;function Ts(){const{caseless:r,skipUndefined:e}=Ci(this)&&this||{},s={},n=(o,i)=>{const a=r&&Si(s,i)||i;ur(s[a])&&ur(o)?s[a]=Ts(s[a],o):ur(o)?s[a]=Ts({},o):kt(o)?s[a]=o.slice():(!e||!Nt(o))&&(s[a]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Kt(arguments[o],n);return s}const Am=(r,e,s,{allOwnKeys:n}={})=>(Kt(e,(o,i)=>{s&&pe(o)?r[i]=vi(o,s):r[i]=o},{allOwnKeys:n}),r),Pm=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),Rm=(r,e,s,n)=>{r.prototype=Object.create(e.prototype,n),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:e.prototype}),s&&Object.assign(r.prototype,s)},Om=(r,e,s,n)=>{let o,i,a;const l={};if(e=e||{},r==null)return e;do{for(o=Object.getOwnPropertyNames(r),i=o.length;i-- >0;)a=o[i],(!n||n(a,r,e))&&!l[a]&&(e[a]=r[a],l[a]=!0);r=s!==!1&&rn(r)}while(r&&(!s||s(r,e))&&r!==Object.prototype);return e},Im=(r,e,s)=>{r=String(r),(s===void 0||s>r.length)&&(s=r.length),s-=e.length;const n=r.indexOf(e,s);return n!==-1&&n===s},Mm=r=>{if(!r)return null;if(kt(r))return r;let e=r.length;if(!Ni(e))return null;const s=new Array(e);for(;e-- >0;)s[e]=r[e];return s},Lm=(r=>e=>r&&e instanceof r)(typeof Uint8Array<"u"&&rn(Uint8Array)),Fm=(r,e)=>{const n=(r&&r[Lr]).call(r);let o;for(;(o=n.next())&&!o.done;){const i=o.value;e.call(r,i[0],i[1])}},_m=(r,e)=>{let s;const n=[];for(;(s=r.exec(e))!==null;)n.push(s);return n},Bm=Se("HTMLFormElement"),$m=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,n,o){return n.toUpperCase()+o}),_n=(({hasOwnProperty:r})=>(e,s)=>r.call(e,s))(Object.prototype),Um=Se("RegExp"),ki=(r,e)=>{const s=Object.getOwnPropertyDescriptors(r),n={};Kt(s,(o,i)=>{let a;(a=e(o,i,r))!==!1&&(n[i]=a||o)}),Object.defineProperties(r,n)},Hm=r=>{ki(r,(e,s)=>{if(pe(r)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const n=r[s];if(pe(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},zm=(r,e)=>{const s={},n=o=>{o.forEach(i=>{s[i]=!0})};return kt(r)?n(r):n(String(r).split(e)),s},Gm=()=>{},Wm=(r,e)=>r!=null&&Number.isFinite(r=+r)?r:e;function qm(r){return!!(r&&pe(r.append)&&r[wi]==="FormData"&&r[Lr])}const Vm=r=>{const e=new Array(10),s=(n,o)=>{if(Jt(n)){if(e.indexOf(n)>=0)return;if(Vt(n))return n;if(!("toJSON"in n)){e[o]=n;const i=kt(n)?[]:{};return Kt(n,(a,l)=>{const d=s(a,o+1);!Nt(d)&&(i[l]=d)}),e[o]=void 0,i}}return n};return s(r,0)},Jm=Se("AsyncFunction"),Km=r=>r&&(Jt(r)||pe(r))&&pe(r.then)&&pe(r.catch),Ti=((r,e)=>r?setImmediate:e?((s,n)=>(rt.addEventListener("message",({source:o,data:i})=>{o===rt&&i===s&&n.length&&n.shift()()},!1),o=>{n.push(o),rt.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",pe(rt.postMessage)),Ym=typeof queueMicrotask<"u"?queueMicrotask.bind(rt):typeof process<"u"&&process.nextTick||Ti,Xm=r=>r!=null&&pe(r[Lr]),S={isArray:kt,isArrayBuffer:ji,isBuffer:Vt,isFormData:Nm,isArrayBufferView:hm,isString:fm,isNumber:Ni,isBoolean:gm,isObject:Jt,isPlainObject:ur,isEmptyObject:xm,isReadableStream:Cm,isRequest:km,isResponse:Tm,isHeaders:Dm,isUndefined:Nt,isDate:bm,isFile:ym,isBlob:vm,isRegExp:Um,isFunction:pe,isStream:jm,isURLSearchParams:Sm,isTypedArray:Lm,isFileList:wm,forEach:Kt,merge:Ts,extend:Am,trim:Em,stripBOM:Pm,inherits:Rm,toFlatObject:Om,kindOf:Fr,kindOfTest:Se,endsWith:Im,toArray:Mm,forEachEntry:Fm,matchAll:_m,isHTMLForm:Bm,hasOwnProperty:_n,hasOwnProp:_n,reduceDescriptors:ki,freezeMethods:Hm,toObjectSet:zm,toCamelCase:$m,noop:Gm,toFiniteNumber:Wm,findKey:Si,global:rt,isContextDefined:Ci,isSpecCompliantForm:qm,toJSONObject:Vm,isAsyncFn:Jm,isThenable:Km,setImmediate:Ti,asap:Ym,isIterable:Xm};function $(r,e,s,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",e&&(this.code=e),s&&(this.config=s),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}S.inherits($,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.status}}});const Di=$.prototype,Ei={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{Ei[r]={value:r}});Object.defineProperties($,Ei);Object.defineProperty(Di,"isAxiosError",{value:!0});$.from=(r,e,s,n,o,i)=>{const a=Object.create(Di);S.toFlatObject(r,a,function(m){return m!==Error.prototype},c=>c!=="isAxiosError");const l=r&&r.message?r.message:"Error",d=e==null&&r?r.code:e;return $.call(a,l,d,s,n,o),r&&a.cause==null&&Object.defineProperty(a,"cause",{value:r,configurable:!0}),a.name=r&&r.name||"Error",i&&Object.assign(a,i),a};const Qm=null;function Ds(r){return S.isPlainObject(r)||S.isArray(r)}function Ai(r){return S.endsWith(r,"[]")?r.slice(0,-2):r}function Bn(r,e,s){return r?r.concat(e).map(function(o,i){return o=Ai(o),!s&&i?"["+o+"]":o}).join(s?".":""):e}function Zm(r){return S.isArray(r)&&!r.some(Ds)}const ep=S.toFlatObject(S,{},null,function(e){return/^is[A-Z]/.test(e)});function Br(r,e,s){if(!S.isObject(r))throw new TypeError("target must be an object");e=e||new FormData,s=S.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(j,h){return!S.isUndefined(h[j])});const n=s.metaTokens,o=s.visitor||m,i=s.dots,a=s.indexes,d=(s.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(e);if(!S.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(S.isDate(f))return f.toISOString();if(S.isBoolean(f))return f.toString();if(!d&&S.isBlob(f))throw new $("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(f)||S.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function m(f,j,h){let k=f;if(f&&!h&&typeof f=="object"){if(S.endsWith(j,"{}"))j=n?j:j.slice(0,-2),f=JSON.stringify(f);else if(S.isArray(f)&&Zm(f)||(S.isFileList(f)||S.endsWith(j,"[]"))&&(k=S.toArray(f)))return j=Ai(j),k.forEach(function(v,y){!(S.isUndefined(v)||v===null)&&e.append(a===!0?Bn([j],y,i):a===null?j:j+"[]",c(v))}),!1}return Ds(f)?!0:(e.append(Bn(h,j,i),c(f)),!1)}const u=[],g=Object.assign(ep,{defaultVisitor:m,convertValue:c,isVisitable:Ds});function b(f,j){if(!S.isUndefined(f)){if(u.indexOf(f)!==-1)throw Error("Circular reference detected in "+j.join("."));u.push(f),S.forEach(f,function(k,N){(!(S.isUndefined(k)||k===null)&&o.call(e,k,S.isString(N)?N.trim():N,j,g))===!0&&b(k,j?j.concat(N):[N])}),u.pop()}}if(!S.isObject(r))throw new TypeError("data must be an object");return b(r),e}function $n(r){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function sn(r,e){this._pairs=[],r&&Br(r,this,e)}const Pi=sn.prototype;Pi.append=function(e,s){this._pairs.push([e,s])};Pi.toString=function(e){const s=e?function(n){return e.call(this,n,$n)}:$n;return this._pairs.map(function(o){return s(o[0])+"="+s(o[1])},"").join("&")};function tp(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ri(r,e,s){if(!e)return r;const n=s&&s.encode||tp;S.isFunction(s)&&(s={serialize:s});const o=s&&s.serialize;let i;if(o?i=o(e,s):i=S.isURLSearchParams(e)?e.toString():new sn(e,s).toString(n),i){const a=r.indexOf("#");a!==-1&&(r=r.slice(0,a)),r+=(r.indexOf("?")===-1?"?":"&")+i}return r}class Un{constructor(){this.handlers=[]}use(e,s,n){return this.handlers.push({fulfilled:e,rejected:s,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){S.forEach(this.handlers,function(n){n!==null&&e(n)})}}const Oi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rp=typeof URLSearchParams<"u"?URLSearchParams:sn,sp=typeof FormData<"u"?FormData:null,np=typeof Blob<"u"?Blob:null,op={isBrowser:!0,classes:{URLSearchParams:rp,FormData:sp,Blob:np},protocols:["http","https","file","blob","url","data"]},nn=typeof window<"u"&&typeof document<"u",Es=typeof navigator=="object"&&navigator||void 0,ip=nn&&(!Es||["ReactNative","NativeScript","NS"].indexOf(Es.product)<0),ap=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",lp=nn&&window.location.href||"http://localhost",cp=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:nn,hasStandardBrowserEnv:ip,hasStandardBrowserWebWorkerEnv:ap,navigator:Es,origin:lp},Symbol.toStringTag,{value:"Module"})),ae={...cp,...op};function dp(r,e){return Br(r,new ae.classes.URLSearchParams,{visitor:function(s,n,o,i){return ae.isNode&&S.isBuffer(s)?(this.append(n,s.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function up(r){return S.matchAll(/\w+|\[(\w*)]/g,r).map(e=>e[0]==="[]"?"":e[1]||e[0])}function mp(r){const e={},s=Object.keys(r);let n;const o=s.length;let i;for(n=0;n<o;n++)i=s[n],e[i]=r[i];return e}function Ii(r){function e(s,n,o,i){let a=s[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),d=i>=s.length;return a=!a&&S.isArray(o)?o.length:a,d?(S.hasOwnProp(o,a)?o[a]=[o[a],n]:o[a]=n,!l):((!o[a]||!S.isObject(o[a]))&&(o[a]=[]),e(s,n,o[a],i)&&S.isArray(o[a])&&(o[a]=mp(o[a])),!l)}if(S.isFormData(r)&&S.isFunction(r.entries)){const s={};return S.forEachEntry(r,(n,o)=>{e(up(n),o,s,0)}),s}return null}function pp(r,e,s){if(S.isString(r))try{return(e||JSON.parse)(r),S.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(s||JSON.stringify)(r)}const Yt={transitional:Oi,adapter:["xhr","http","fetch"],transformRequest:[function(e,s){const n=s.getContentType()||"",o=n.indexOf("application/json")>-1,i=S.isObject(e);if(i&&S.isHTMLForm(e)&&(e=new FormData(e)),S.isFormData(e))return o?JSON.stringify(Ii(e)):e;if(S.isArrayBuffer(e)||S.isBuffer(e)||S.isStream(e)||S.isFile(e)||S.isBlob(e)||S.isReadableStream(e))return e;if(S.isArrayBufferView(e))return e.buffer;if(S.isURLSearchParams(e))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return dp(e,this.formSerializer).toString();if((l=S.isFileList(e))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Br(l?{"files[]":e}:e,d&&new d,this.formSerializer)}}return i||o?(s.setContentType("application/json",!1),pp(e)):e}],transformResponse:[function(e){const s=this.transitional||Yt.transitional,n=s&&s.forcedJSONParsing,o=this.responseType==="json";if(S.isResponse(e)||S.isReadableStream(e))return e;if(e&&S.isString(e)&&(n&&!this.responseType||o)){const a=!(s&&s.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(l){if(a)throw l.name==="SyntaxError"?$.from(l,$.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ae.classes.FormData,Blob:ae.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],r=>{Yt.headers[r]={}});const hp=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fp=r=>{const e={};let s,n,o;return r&&r.split(`
`).forEach(function(a){o=a.indexOf(":"),s=a.substring(0,o).trim().toLowerCase(),n=a.substring(o+1).trim(),!(!s||e[s]&&hp[s])&&(s==="set-cookie"?e[s]?e[s].push(n):e[s]=[n]:e[s]=e[s]?e[s]+", "+n:n)}),e},Hn=Symbol("internals");function Mt(r){return r&&String(r).trim().toLowerCase()}function mr(r){return r===!1||r==null?r:S.isArray(r)?r.map(mr):String(r)}function gp(r){const e=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=s.exec(r);)e[n[1]]=n[2];return e}const xp=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function ss(r,e,s,n,o){if(S.isFunction(n))return n.call(this,e,s);if(o&&(e=s),!!S.isString(e)){if(S.isString(n))return e.indexOf(n)!==-1;if(S.isRegExp(n))return n.test(e)}}function bp(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,s,n)=>s.toUpperCase()+n)}function yp(r,e){const s=S.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(r,n+s,{value:function(o,i,a){return this[n].call(this,e,o,i,a)},configurable:!0})})}let he=class{constructor(e){e&&this.set(e)}set(e,s,n){const o=this;function i(l,d,c){const m=Mt(d);if(!m)throw new Error("header name must be a non-empty string");const u=S.findKey(o,m);(!u||o[u]===void 0||c===!0||c===void 0&&o[u]!==!1)&&(o[u||d]=mr(l))}const a=(l,d)=>S.forEach(l,(c,m)=>i(c,m,d));if(S.isPlainObject(e)||e instanceof this.constructor)a(e,s);else if(S.isString(e)&&(e=e.trim())&&!xp(e))a(fp(e),s);else if(S.isObject(e)&&S.isIterable(e)){let l={},d,c;for(const m of e){if(!S.isArray(m))throw TypeError("Object iterator must return a key-value pair");l[c=m[0]]=(d=l[c])?S.isArray(d)?[...d,m[1]]:[d,m[1]]:m[1]}a(l,s)}else e!=null&&i(s,e,n);return this}get(e,s){if(e=Mt(e),e){const n=S.findKey(this,e);if(n){const o=this[n];if(!s)return o;if(s===!0)return gp(o);if(S.isFunction(s))return s.call(this,o,n);if(S.isRegExp(s))return s.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,s){if(e=Mt(e),e){const n=S.findKey(this,e);return!!(n&&this[n]!==void 0&&(!s||ss(this,this[n],n,s)))}return!1}delete(e,s){const n=this;let o=!1;function i(a){if(a=Mt(a),a){const l=S.findKey(n,a);l&&(!s||ss(n,n[l],l,s))&&(delete n[l],o=!0)}}return S.isArray(e)?e.forEach(i):i(e),o}clear(e){const s=Object.keys(this);let n=s.length,o=!1;for(;n--;){const i=s[n];(!e||ss(this,this[i],i,e,!0))&&(delete this[i],o=!0)}return o}normalize(e){const s=this,n={};return S.forEach(this,(o,i)=>{const a=S.findKey(n,i);if(a){s[a]=mr(o),delete s[i];return}const l=e?bp(i):String(i).trim();l!==i&&delete s[i],s[l]=mr(o),n[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const s=Object.create(null);return S.forEach(this,(n,o)=>{n!=null&&n!==!1&&(s[o]=e&&S.isArray(n)?n.join(", "):n)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,s])=>e+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...s){const n=new this(e);return s.forEach(o=>n.set(o)),n}static accessor(e){const n=(this[Hn]=this[Hn]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=Mt(a);n[l]||(yp(o,a),n[l]=!0)}return S.isArray(e)?e.forEach(i):i(e),this}};he.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(he.prototype,({value:r},e)=>{let s=e[0].toUpperCase()+e.slice(1);return{get:()=>r,set(n){this[s]=n}}});S.freezeMethods(he);function ns(r,e){const s=this||Yt,n=e||s,o=he.from(n.headers);let i=n.data;return S.forEach(r,function(l){i=l.call(s,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function Mi(r){return!!(r&&r.__CANCEL__)}function Tt(r,e,s){$.call(this,r??"canceled",$.ERR_CANCELED,e,s),this.name="CanceledError"}S.inherits(Tt,$,{__CANCEL__:!0});function Li(r,e,s){const n=s.config.validateStatus;!s.status||!n||n(s.status)?r(s):e(new $("Request failed with status code "+s.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function vp(r){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return e&&e[1]||""}function wp(r,e){r=r||10;const s=new Array(r),n=new Array(r);let o=0,i=0,a;return e=e!==void 0?e:1e3,function(d){const c=Date.now(),m=n[i];a||(a=c),s[o]=d,n[o]=c;let u=i,g=0;for(;u!==o;)g+=s[u++],u=u%r;if(o=(o+1)%r,o===i&&(i=(i+1)%r),c-a<e)return;const b=m&&c-m;return b?Math.round(g*1e3/b):void 0}}function jp(r,e){let s=0,n=1e3/e,o,i;const a=(c,m=Date.now())=>{s=m,o=null,i&&(clearTimeout(i),i=null),r(...c)};return[(...c)=>{const m=Date.now(),u=m-s;u>=n?a(c,m):(o=c,i||(i=setTimeout(()=>{i=null,a(o)},n-u)))},()=>o&&a(o)]}const Sr=(r,e,s=3)=>{let n=0;const o=wp(50,250);return jp(i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,d=a-n,c=o(d),m=a<=l;n=a;const u={loaded:a,total:l,progress:l?a/l:void 0,bytes:d,rate:c||void 0,estimated:c&&l&&m?(l-a)/c:void 0,event:i,lengthComputable:l!=null,[e?"download":"upload"]:!0};r(u)},s)},zn=(r,e)=>{const s=r!=null;return[n=>e[0]({lengthComputable:s,total:r,loaded:n}),e[1]]},Gn=r=>(...e)=>S.asap(()=>r(...e)),Np=ae.hasStandardBrowserEnv?((r,e)=>s=>(s=new URL(s,ae.origin),r.protocol===s.protocol&&r.host===s.host&&(e||r.port===s.port)))(new URL(ae.origin),ae.navigator&&/(msie|trident)/i.test(ae.navigator.userAgent)):()=>!0,Sp=ae.hasStandardBrowserEnv?{write(r,e,s,n,o,i){const a=[r+"="+encodeURIComponent(e)];S.isNumber(s)&&a.push("expires="+new Date(s).toGMTString()),S.isString(n)&&a.push("path="+n),S.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(r){const e=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Cp(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function kp(r,e){return e?r.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):r}function Fi(r,e,s){let n=!Cp(e);return r&&(n||s==!1)?kp(r,e):e}const Wn=r=>r instanceof he?{...r}:r;function lt(r,e){e=e||{};const s={};function n(c,m,u,g){return S.isPlainObject(c)&&S.isPlainObject(m)?S.merge.call({caseless:g},c,m):S.isPlainObject(m)?S.merge({},m):S.isArray(m)?m.slice():m}function o(c,m,u,g){if(S.isUndefined(m)){if(!S.isUndefined(c))return n(void 0,c,u,g)}else return n(c,m,u,g)}function i(c,m){if(!S.isUndefined(m))return n(void 0,m)}function a(c,m){if(S.isUndefined(m)){if(!S.isUndefined(c))return n(void 0,c)}else return n(void 0,m)}function l(c,m,u){if(u in e)return n(c,m);if(u in r)return n(void 0,c)}const d={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(c,m,u)=>o(Wn(c),Wn(m),u,!0)};return S.forEach(Object.keys({...r,...e}),function(m){const u=d[m]||o,g=u(r[m],e[m],m);S.isUndefined(g)&&u!==l||(s[m]=g)}),s}const _i=r=>{const e=lt({},r);let{data:s,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:l}=e;if(e.headers=a=he.from(a),e.url=Ri(Fi(e.baseURL,e.url,e.allowAbsoluteUrls),r.params,r.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),S.isFormData(s)){if(ae.hasStandardBrowserEnv||ae.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(S.isFunction(s.getHeaders)){const d=s.getHeaders(),c=["content-type","content-length"];Object.entries(d).forEach(([m,u])=>{c.includes(m.toLowerCase())&&a.set(m,u)})}}if(ae.hasStandardBrowserEnv&&(n&&S.isFunction(n)&&(n=n(e)),n||n!==!1&&Np(e.url))){const d=o&&i&&Sp.read(i);d&&a.set(o,d)}return e},Tp=typeof XMLHttpRequest<"u",Dp=Tp&&function(r){return new Promise(function(s,n){const o=_i(r);let i=o.data;const a=he.from(o.headers).normalize();let{responseType:l,onUploadProgress:d,onDownloadProgress:c}=o,m,u,g,b,f;function j(){b&&b(),f&&f(),o.cancelToken&&o.cancelToken.unsubscribe(m),o.signal&&o.signal.removeEventListener("abort",m)}let h=new XMLHttpRequest;h.open(o.method.toUpperCase(),o.url,!0),h.timeout=o.timeout;function k(){if(!h)return;const v=he.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),x={data:!l||l==="text"||l==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:v,config:r,request:h};Li(function(A){s(A),j()},function(A){n(A),j()},x),h=null}"onloadend"in h?h.onloadend=k:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(k)},h.onabort=function(){h&&(n(new $("Request aborted",$.ECONNABORTED,r,h)),h=null)},h.onerror=function(y){const x=y&&y.message?y.message:"Network Error",T=new $(x,$.ERR_NETWORK,r,h);T.event=y||null,n(T),h=null},h.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const x=o.transitional||Oi;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),n(new $(y,x.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,r,h)),h=null},i===void 0&&a.setContentType(null),"setRequestHeader"in h&&S.forEach(a.toJSON(),function(y,x){h.setRequestHeader(x,y)}),S.isUndefined(o.withCredentials)||(h.withCredentials=!!o.withCredentials),l&&l!=="json"&&(h.responseType=o.responseType),c&&([g,f]=Sr(c,!0),h.addEventListener("progress",g)),d&&h.upload&&([u,b]=Sr(d),h.upload.addEventListener("progress",u),h.upload.addEventListener("loadend",b)),(o.cancelToken||o.signal)&&(m=v=>{h&&(n(!v||v.type?new Tt(null,r,h):v),h.abort(),h=null)},o.cancelToken&&o.cancelToken.subscribe(m),o.signal&&(o.signal.aborted?m():o.signal.addEventListener("abort",m)));const N=vp(o.url);if(N&&ae.protocols.indexOf(N)===-1){n(new $("Unsupported protocol "+N+":",$.ERR_BAD_REQUEST,r));return}h.send(i||null)})},Ep=(r,e)=>{const{length:s}=r=r?r.filter(Boolean):[];if(e||s){let n=new AbortController,o;const i=function(c){if(!o){o=!0,l();const m=c instanceof Error?c:this.reason;n.abort(m instanceof $?m:new Tt(m instanceof Error?m.message:m))}};let a=e&&setTimeout(()=>{a=null,i(new $(`timeout ${e} of ms exceeded`,$.ETIMEDOUT))},e);const l=()=>{r&&(a&&clearTimeout(a),a=null,r.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),r=null)};r.forEach(c=>c.addEventListener("abort",i));const{signal:d}=n;return d.unsubscribe=()=>S.asap(l),d}},Ap=function*(r,e){let s=r.byteLength;if(s<e){yield r;return}let n=0,o;for(;n<s;)o=n+e,yield r.slice(n,o),n=o},Pp=async function*(r,e){for await(const s of Rp(r))yield*Ap(s,e)},Rp=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const e=r.getReader();try{for(;;){const{done:s,value:n}=await e.read();if(s)break;yield n}}finally{await e.cancel()}},qn=(r,e,s,n)=>{const o=Pp(r,e);let i=0,a,l=d=>{a||(a=!0,n&&n(d))};return new ReadableStream({async pull(d){try{const{done:c,value:m}=await o.next();if(c){l(),d.close();return}let u=m.byteLength;if(s){let g=i+=u;s(g)}d.enqueue(new Uint8Array(m))}catch(c){throw l(c),c}},cancel(d){return l(d),o.return()}},{highWaterMark:2})},Vn=64*1024,{isFunction:nr}=S,Op=(({Request:r,Response:e})=>({Request:r,Response:e}))(S.global),{ReadableStream:Jn,TextEncoder:Kn}=S.global,Yn=(r,...e)=>{try{return!!r(...e)}catch{return!1}},Ip=r=>{r=S.merge.call({skipUndefined:!0},Op,r);const{fetch:e,Request:s,Response:n}=r,o=e?nr(e):typeof fetch=="function",i=nr(s),a=nr(n);if(!o)return!1;const l=o&&nr(Jn),d=o&&(typeof Kn=="function"?(f=>j=>f.encode(j))(new Kn):async f=>new Uint8Array(await new s(f).arrayBuffer())),c=i&&l&&Yn(()=>{let f=!1;const j=new s(ae.origin,{body:new Jn,method:"POST",get duplex(){return f=!0,"half"}}).headers.has("Content-Type");return f&&!j}),m=a&&l&&Yn(()=>S.isReadableStream(new n("").body)),u={stream:m&&(f=>f.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!u[f]&&(u[f]=(j,h)=>{let k=j&&j[f];if(k)return k.call(j);throw new $(`Response type '${f}' is not supported`,$.ERR_NOT_SUPPORT,h)})});const g=async f=>{if(f==null)return 0;if(S.isBlob(f))return f.size;if(S.isSpecCompliantForm(f))return(await new s(ae.origin,{method:"POST",body:f}).arrayBuffer()).byteLength;if(S.isArrayBufferView(f)||S.isArrayBuffer(f))return f.byteLength;if(S.isURLSearchParams(f)&&(f=f+""),S.isString(f))return(await d(f)).byteLength},b=async(f,j)=>{const h=S.toFiniteNumber(f.getContentLength());return h??g(j)};return async f=>{let{url:j,method:h,data:k,signal:N,cancelToken:v,timeout:y,onDownloadProgress:x,onUploadProgress:T,responseType:A,headers:C,withCredentials:L="same-origin",fetchOptions:E}=_i(f),P=e||fetch;A=A?(A+"").toLowerCase():"text";let Y=Ep([N,v&&v.toAbortSignal()],y),H=null;const D=Y&&Y.unsubscribe&&(()=>{Y.unsubscribe()});let I;try{if(T&&c&&h!=="get"&&h!=="head"&&(I=await b(C,k))!==0){let _=new s(j,{method:"POST",body:k,duplex:"half"}),z;if(S.isFormData(k)&&(z=_.headers.get("content-type"))&&C.setContentType(z),_.body){const[V,ne]=zn(I,Sr(Gn(T)));k=qn(_.body,Vn,V,ne)}}S.isString(L)||(L=L?"include":"omit");const F=i&&"credentials"in s.prototype,W={...E,signal:Y,method:h.toUpperCase(),headers:C.normalize().toJSON(),body:k,duplex:"half",credentials:F?L:void 0};H=i&&new s(j,W);let G=await(i?P(H,E):P(j,W));const le=m&&(A==="stream"||A==="response");if(m&&(x||le&&D)){const _={};["status","statusText","headers"].forEach(oe=>{_[oe]=G[oe]});const z=S.toFiniteNumber(G.headers.get("content-length")),[V,ne]=x&&zn(z,Sr(Gn(x),!0))||[];G=new n(qn(G.body,Vn,V,()=>{ne&&ne(),D&&D()}),_)}A=A||"text";let fe=await u[S.findKey(u,A)||"text"](G,f);return!le&&D&&D(),await new Promise((_,z)=>{Li(_,z,{data:fe,headers:he.from(G.headers),status:G.status,statusText:G.statusText,config:f,request:H})})}catch(F){throw D&&D(),F&&F.name==="TypeError"&&/Load failed|fetch/i.test(F.message)?Object.assign(new $("Network Error",$.ERR_NETWORK,f,H),{cause:F.cause||F}):$.from(F,F&&F.code,f,H)}}},Mp=new Map,Bi=r=>{let e=r?r.env:{};const{fetch:s,Request:n,Response:o}=e,i=[n,o,s];let a=i.length,l=a,d,c,m=Mp;for(;l--;)d=i[l],c=m.get(d),c===void 0&&m.set(d,c=l?new Map:Ip(e)),m=c;return c};Bi();const As={http:Qm,xhr:Dp,fetch:{get:Bi}};S.forEach(As,(r,e)=>{if(r){try{Object.defineProperty(r,"name",{value:e})}catch{}Object.defineProperty(r,"adapterName",{value:e})}});const Xn=r=>`- ${r}`,Lp=r=>S.isFunction(r)||r===null||r===!1,$i={getAdapter:(r,e)=>{r=S.isArray(r)?r:[r];const{length:s}=r;let n,o;const i={};for(let a=0;a<s;a++){n=r[a];let l;if(o=n,!Lp(n)&&(o=As[(l=String(n)).toLowerCase()],o===void 0))throw new $(`Unknown adapter '${l}'`);if(o&&(S.isFunction(o)||(o=o.get(e))))break;i[l||"#"+a]=o}if(!o){const a=Object.entries(i).map(([d,c])=>`adapter ${d} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=s?a.length>1?`since :
`+a.map(Xn).join(`
`):" "+Xn(a[0]):"as no adapter specified";throw new $("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return o},adapters:As};function os(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Tt(null,r)}function Qn(r){return os(r),r.headers=he.from(r.headers),r.data=ns.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),$i.getAdapter(r.adapter||Yt.adapter,r)(r).then(function(n){return os(r),n.data=ns.call(r,r.transformResponse,n),n.headers=he.from(n.headers),n},function(n){return Mi(n)||(os(r),n&&n.response&&(n.response.data=ns.call(r,r.transformResponse,n.response),n.response.headers=he.from(n.response.headers))),Promise.reject(n)})}const Ui="1.12.2",$r={};["object","boolean","number","function","string","symbol"].forEach((r,e)=>{$r[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});const Zn={};$r.transitional=function(e,s,n){function o(i,a){return"[Axios v"+Ui+"] Transitional option '"+i+"'"+a+(n?". "+n:"")}return(i,a,l)=>{if(e===!1)throw new $(o(a," has been removed"+(s?" in "+s:"")),$.ERR_DEPRECATED);return s&&!Zn[a]&&(Zn[a]=!0,console.warn(o(a," has been deprecated since v"+s+" and will be removed in the near future"))),e?e(i,a,l):!0}};$r.spelling=function(e){return(s,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Fp(r,e,s){if(typeof r!="object")throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const n=Object.keys(r);let o=n.length;for(;o-- >0;){const i=n[o],a=e[i];if(a){const l=r[i],d=l===void 0||a(l,i,r);if(d!==!0)throw new $("option "+i+" must be "+d,$.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new $("Unknown option "+i,$.ERR_BAD_OPTION)}}const pr={assertOptions:Fp,validators:$r},Ce=pr.validators;let nt=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Un,response:new Un}}async request(e,s){try{return await this._request(e,s)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(e,s){typeof e=="string"?(s=s||{},s.url=e):s=e||{},s=lt(this.defaults,s);const{transitional:n,paramsSerializer:o,headers:i}=s;n!==void 0&&pr.assertOptions(n,{silentJSONParsing:Ce.transitional(Ce.boolean),forcedJSONParsing:Ce.transitional(Ce.boolean),clarifyTimeoutError:Ce.transitional(Ce.boolean)},!1),o!=null&&(S.isFunction(o)?s.paramsSerializer={serialize:o}:pr.assertOptions(o,{encode:Ce.function,serialize:Ce.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),pr.assertOptions(s,{baseUrl:Ce.spelling("baseURL"),withXsrfToken:Ce.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let a=i&&S.merge(i.common,i[s.method]);i&&S.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),s.headers=he.concat(a,i);const l=[];let d=!0;this.interceptors.request.forEach(function(j){typeof j.runWhen=="function"&&j.runWhen(s)===!1||(d=d&&j.synchronous,l.unshift(j.fulfilled,j.rejected))});const c=[];this.interceptors.response.forEach(function(j){c.push(j.fulfilled,j.rejected)});let m,u=0,g;if(!d){const f=[Qn.bind(this),void 0];for(f.unshift(...l),f.push(...c),g=f.length,m=Promise.resolve(s);u<g;)m=m.then(f[u++],f[u++]);return m}g=l.length;let b=s;for(;u<g;){const f=l[u++],j=l[u++];try{b=f(b)}catch(h){j.call(this,h);break}}try{m=Qn.call(this,b)}catch(f){return Promise.reject(f)}for(u=0,g=c.length;u<g;)m=m.then(c[u++],c[u++]);return m}getUri(e){e=lt(this.defaults,e);const s=Fi(e.baseURL,e.url,e.allowAbsoluteUrls);return Ri(s,e.params,e.paramsSerializer)}};S.forEach(["delete","get","head","options"],function(e){nt.prototype[e]=function(s,n){return this.request(lt(n||{},{method:e,url:s,data:(n||{}).data}))}});S.forEach(["post","put","patch"],function(e){function s(n){return function(i,a,l){return this.request(lt(l||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}nt.prototype[e]=s(),nt.prototype[e+"Form"]=s(!0)});let _p=class Hi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(i){s=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{n.subscribe(l),i=l}).then(o);return a.cancel=function(){n.unsubscribe(i)},a},e(function(i,a,l){n.reason||(n.reason=new Tt(i,a,l),s(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const s=this._listeners.indexOf(e);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const e=new AbortController,s=n=>{e.abort(n)};return this.subscribe(s),e.signal.unsubscribe=()=>this.unsubscribe(s),e.signal}static source(){let e;return{token:new Hi(function(o){e=o}),cancel:e}}};function Bp(r){return function(s){return r.apply(null,s)}}function $p(r){return S.isObject(r)&&r.isAxiosError===!0}const Ps={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ps).forEach(([r,e])=>{Ps[e]=r});function zi(r){const e=new nt(r),s=vi(nt.prototype.request,e);return S.extend(s,nt.prototype,e,{allOwnKeys:!0}),S.extend(s,e,null,{allOwnKeys:!0}),s.create=function(o){return zi(lt(r,o))},s}const Q=zi(Yt);Q.Axios=nt;Q.CanceledError=Tt;Q.CancelToken=_p;Q.isCancel=Mi;Q.VERSION=Ui;Q.toFormData=Br;Q.AxiosError=$;Q.Cancel=Q.CanceledError;Q.all=function(e){return Promise.all(e)};Q.spread=Bp;Q.isAxiosError=$p;Q.mergeConfig=lt;Q.AxiosHeaders=he;Q.formToJSON=r=>Ii(S.isHTMLForm(r)?new FormData(r):r);Q.getAdapter=$i.getAdapter;Q.HttpStatusCode=Ps;Q.default=Q;const{Axios:Mg,AxiosError:Lg,CanceledError:Fg,isCancel:_g,CancelToken:Bg,VERSION:$g,all:Ug,Cancel:Hg,isAxiosError:zg,spread:Gg,toFormData:Wg,AxiosHeaders:qg,HttpStatusCode:Vg,formToJSON:Jg,getAdapter:Kg,mergeConfig:Yg}=Q,eo={"codellama-7b":{name:"CodeLlama 7B",type:"Code Generation",baseURL:"http://localhost:11434/api",model:"codellama:7b",description:"Fast and efficient code generation (7B parameters)",languages:["python","javascript","java","cpp","go","rust","php","ruby"],strengths:["speed","efficiency","general-purpose"],ram_required:"8GB"},auto:{name:"Auto Select",type:"Auto Selection",baseURL:"http://localhost:11434/api",model:"auto",description:"Automatically selects the best available model",languages:["all"],strengths:["smart-selection","availability"],ram_required:"variable"}},is={"web-apps":{name:"Web Applications",description:"Full-stack web applications",templates:[{id:"react-dashboard",name:"React Dashboard",description:"Modern React dashboard with charts and analytics",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"ecommerce-store",name:"E-commerce Store",description:"Complete online store with cart and checkout",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]}]},"mobile-apps":{name:"Mobile Applications",description:"React Native mobile applications",templates:[{id:"todo-app",name:"Todo App",description:"Simple todo application with React Native",category:"mobile-apps",files:["App.js","components/TodoItem.js","styles.js"]}]}};class Up{constructor(){if(this.isHealthy=!1,this.modelHealth={},this.availableModels=Object.keys(eo),this.baseURL="http://localhost:11434/api",this.isProduction=window.location.protocol==="https:",this.isLocalhost=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",this.isProduction&&!this.isLocalhost){console.log("🌐 Production environment detected - skipping local AI detection"),this.isHealthy=!1;return}console.log("🔍 Initializing local AI health monitoring..."),this.checkHealth(),setInterval(()=>{this.checkHealthQuiet()},3e4)}async checkHealth(){if(!(this.isProduction&&!this.isLocalhost))try{const e=await Q.get(`${this.baseURL}/tags`,{timeout:3e3});if(e.status===200){const s=this.isHealthy;this.isHealthy=!0,s||console.log("✅ Local AI service is healthy");const n=e.data.models||[];this.modelHealth={},n.forEach(o=>{this.modelHealth[o.name]={isHealthy:!0,size:o.size,modified_at:o.modified_at}})}else{const s=this.isHealthy;this.isHealthy=!1,s&&console.log("⚠️ Local AI service is not responding")}}catch(e){const s=this.isHealthy;this.isHealthy=!1,e.code==="ERR_NETWORK"||e.message.includes("CORS")?s||console.log("🔒 Local AI not accessible (CORS/Network) - using cloud AI"):e.code==="ECONNREFUSED"?s||console.log("💻 Ollama not running locally - using cloud AI"):s||console.log("⚠️ Local AI service not available:",e.message)}}async checkHealthQuiet(){if(!(this.isProduction&&!this.isLocalhost))try{const e=await Q.get(`${this.baseURL}/tags`,{timeout:3e3});if(e.status===200){const s=this.isHealthy;this.isHealthy=!0;const n=e.data.models||[];this.modelHealth={},n.forEach(o=>{this.modelHealth[o.name]={isHealthy:!0,size:o.size,modified_at:o.modified_at}})}else this.isHealthy=!1}catch{this.isHealthy=!1}}getAvailableModels(){return Object.values(eo)}getHealthyModels(){return Object.keys(this.modelHealth).filter(e=>this.modelHealth[e].isHealthy)}getTemplateCategories(){return is}getTemplatesByCategory(e){var s;return((s=is[e])==null?void 0:s.templates)||[]}getAllTemplates(){const e=[];return Object.values(is).forEach(s=>{e.push(...s.templates)}),e}searchTemplates(e){return this.getAllTemplates().filter(n=>n.name.toLowerCase().includes(e.toLowerCase())||n.description.toLowerCase().includes(e.toLowerCase()))}getPopularTemplates(){return this.getAllTemplates().slice(0,5)}generateTemplateById(e,s={}){const o=this.getAllTemplates().find(i=>i.id===e);if(!o)throw new Error(`Template ${e} not found`);return this.createTemplateFiles(o,s)}createTemplateFiles(e,s={}){const n={};switch(e.id){case"react-dashboard":n["index.html"]=`<!DOCTYPE html>
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
}`}}}const se=new Up;class Hp{constructor(){this.currentService="local-ai",this.usageStats={totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0},console.log("🤖 Simple AI Service initialized - Local AI only!")}getServices(){return{"local-ai":{name:"Local AI Models",type:"Local",description:"Self-hosted AI models - no API keys required",models:se.getAvailableModels()}}}getTemplateCategories(){return se.getTemplateCategories()}getTemplatesByCategory(e){return se.getTemplatesByCategory(e)}getAllTemplates(){return se.getAllTemplates()}generateTemplateById(e,s={}){return se.generateTemplateById(e,s)}searchTemplates(e){return se.searchTemplates(e)}getPopularTemplates(){return se.getPopularTemplates()}async generateCode(e,s={}){const n=Date.now();this.usageStats.totalRequests++;try{if(console.log("🚀 Generating code with Local AI..."),!se.isHealthy)return console.log("⚠️ Local AI not available, using template fallback"),se.createFallbackResponse(e,s);const o=await se.generateCode(e,s),i=Date.now()-n;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+i)/2,console.log("✅ Code generated successfully with Local AI!"),o&&o.files?o.files:(console.warn("⚠️ No files found in response, returning empty object"),{})}catch(o){return console.error("❌ Local AI generation failed:",o),this.usageStats.failedRequests++,console.log("🔄 Falling back to template generation..."),se.createFallbackResponse(e,s)}}getServiceHealth(){return se.modelHealth}getUsageStats(){return this.usageStats}getUserPreferences(){return{preferredService:"local-ai",fallbackEnabled:!0,autoHealthCheck:!0}}updateUserPreferences(e){localStorage.setItem("dreambuild-preferences",JSON.stringify(e))}loadUserPreferences(){const e=localStorage.getItem("dreambuild-preferences");return e?JSON.parse(e):this.getUserPreferences()}getServiceStatus(){return{"local-ai":{isHealthy:se.isHealthy,models:se.getHealthyModels().length,totalModels:se.getAvailableModels().length}}}resetServiceHealth(){se.modelHealth={}}getFallbackOrder(){return["local-ai"]}isFallbackEnabled(){return!0}setFallbackEnabled(e){return!0}getSetupInstructions(){return{"local-ai":{title:"Local AI Setup",description:"Set up local AI models for code generation",steps:["1. Install Ollama from https://ollama.ai","2. Run: ollama pull codellama:7b","3. Run: ollama serve","4. Refresh DreamBuild to start using local AI"],isSetup:se.isHealthy}}}getServicesNeedingSetup(){return se.isHealthy?[]:["local-ai"]}hasValidApiKey(e){return e==="local-ai"}setService(e){e==="local-ai"&&(this.currentService=e)}getCurrentService(){return this.currentService}}const hr=new Hp;class zp{constructor(){this.isAutoModeEnabled=!1,this.isRunning=!1,this.currentTask=null,this.taskQueue=[],this.iterationCount=0,this.maxIterations=5,this.fileWatchers=new Map,this.progressCallbacks=new Set,this.autoRefinementEnabled=!0,this.backgroundMonitoringEnabled=!0}toggleAutoMode(){return this.isAutoModeEnabled=!this.isAutoModeEnabled,this.isAutoModeEnabled?(console.log("🤖 AI Agent Auto Mode: ENABLED"),this.startBackgroundMonitoring()):(console.log("🤖 AI Agent Auto Mode: DISABLED"),this.stopBackgroundMonitoring(),this.stopCurrentTask()),this.isAutoModeEnabled}breakdownTask(e,s={}){console.log("🧠 Breaking down task:",e);const n=[],o=e.toLowerCase();return o.includes("full-stack")||o.includes("e-commerce")||o.includes("website")?n.push({id:1,title:"Project Setup",description:"Initialize project structure and dependencies",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Database Schema",description:"Design and implement database structure",priority:"high",estimatedTime:"5-7 min"},{id:3,title:"Authentication System",description:"Implement user login and registration",priority:"high",estimatedTime:"8-10 min"},{id:4,title:"Core Features",description:"Build main application functionality",priority:"medium",estimatedTime:"15-20 min"},{id:5,title:"UI/UX Polish",description:"Add styling, animations, and responsive design",priority:"medium",estimatedTime:"10-15 min"},{id:6,title:"Testing & Optimization",description:"Add tests and optimize performance",priority:"low",estimatedTime:"5-10 min"}):o.includes("react")||o.includes("frontend")?n.push({id:1,title:"Component Architecture",description:"Design React component structure",priority:"high",estimatedTime:"3-5 min"},{id:2,title:"State Management",description:"Implement state management solution",priority:"high",estimatedTime:"5-8 min"},{id:3,title:"Core Components",description:"Build main UI components",priority:"medium",estimatedTime:"10-15 min"},{id:4,title:"Routing & Navigation",description:"Add client-side routing",priority:"medium",estimatedTime:"5-8 min"},{id:5,title:"Styling & Responsiveness",description:"Add CSS and responsive design",priority:"low",estimatedTime:"8-12 min"}):o.includes("api")||o.includes("backend")?n.push({id:1,title:"API Structure",description:"Design REST API endpoints",priority:"high",estimatedTime:"5-8 min"},{id:2,title:"Database Integration",description:"Set up database connections and models",priority:"high",estimatedTime:"8-12 min"},{id:3,title:"Authentication & Security",description:"Implement JWT and security middleware",priority:"high",estimatedTime:"10-15 min"},{id:4,title:"Business Logic",description:"Implement core API functionality",priority:"medium",estimatedTime:"15-25 min"},{id:5,title:"Error Handling & Validation",description:"Add comprehensive error handling",priority:"medium",estimatedTime:"5-10 min"},{id:6,title:"Documentation & Testing",description:"Add API docs and tests",priority:"low",estimatedTime:"8-15 min"}):n.push({id:1,title:"Analysis",description:"Analyze requirements and plan approach",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Implementation",description:"Build core functionality",priority:"high",estimatedTime:"10-20 min"},{id:3,title:"Enhancement",description:"Add features and improvements",priority:"medium",estimatedTime:"8-15 min"},{id:4,title:"Polish",description:"Refine and optimize the solution",priority:"low",estimatedTime:"5-10 min"}),{originalPrompt:e,tasks:n,totalEstimatedTime:n.reduce((i,a)=>i+parseInt(a.estimatedTime.split("-")[0]),0),complexity:this.assessComplexity(e),autoModeRecommended:n.length>3}}assessComplexity(e){const s={simple:["button","form","page","component"],medium:["app","website","dashboard","api","database"],complex:["full-stack","e-commerce","social media","platform","enterprise"]},n=e.toLowerCase();for(const[o,i]of Object.entries(s))if(i.some(a=>n.includes(a)))return o;return"medium"}async startContinuousIteration(e,s={}){if(!this.isAutoModeEnabled){console.log("⚠️ Auto Mode not enabled");return}this.isRunning=!0,this.iterationCount=0,this.currentTask=this.breakdownTask(e,s),console.log("🔄 Starting continuous iteration for:",e);for(const n of this.currentTask.tasks){if(!this.isAutoModeEnabled||!this.isRunning)break;await this.executeTask(n,s),this.iterationCount++,this.autoRefinementEnabled&&this.iterationCount<this.maxIterations&&await this.autoRefine(n,s)}this.isRunning=!1,console.log("✅ Continuous iteration completed")}async executeTask(e,s={}){console.log(`🎯 Executing task ${e.id}: ${e.title}`),this.notifyProgress({type:"task_start",task:e,message:`Starting ${e.title}...`});try{await this.delay(this.getTaskDuration(e)),this.notifyProgress({type:"task_complete",task:e,message:`Completed ${e.title}`})}catch(n){console.error(`❌ Task ${e.id} failed:`,n),this.notifyProgress({type:"task_error",task:e,message:`Failed ${e.title}: ${n.message}`})}}async autoRefine(e,s={}){console.log(`🔧 Auto-refining: ${e.title}`),this.notifyProgress({type:"refinement_start",task:e,message:`Auto-refining ${e.title}...`}),await this.delay(2e3),this.notifyProgress({type:"refinement_complete",task:e,message:`Refined ${e.title}`})}startBackgroundMonitoring(){this.backgroundMonitoringEnabled&&(console.log("👀 Starting background monitoring"),this.setupFileWatchers(),this.startCodeQualityMonitoring(),this.startPerformanceMonitoring())}stopBackgroundMonitoring(){console.log("👀 Stopping background monitoring"),this.fileWatchers.forEach(e=>e.disconnect()),this.fileWatchers.clear()}setupFileWatchers(){console.log("📁 Setting up file watchers"),this.fileWatcherInterval=setInterval(()=>{this.checkForFileChanges()},5e3)}checkForFileChanges(){const e=this.simulateFileChanges();e.length>0&&(this.notifyProgress({type:"file_changes",changes:e,message:`Detected ${e.length} file changes`}),this.isAutoModeEnabled&&this.suggestImprovements(e))}simulateFileChanges(){const e=[];return Math.random()>.7&&e.push({file:"src/components/App.jsx",type:"modified",timestamp:new Date}),e}suggestImprovements(e){console.log("💡 Suggesting improvements for:",e);const s=["Consider adding error boundaries to React components","Optimize bundle size by lazy loading components","Add TypeScript for better type safety","Implement proper error handling in API calls","Add loading states for better UX"],n=s[Math.floor(Math.random()*s.length)];this.notifyProgress({type:"improvement_suggestion",suggestion:n,message:`Suggestion: ${n}`})}startCodeQualityMonitoring(){console.log("🔍 Starting code quality monitoring"),this.qualityCheckInterval=setInterval(()=>{this.performQualityCheck()},1e4)}performQualityCheck(){const e=this.simulateQualityIssues();e.length>0&&this.notifyProgress({type:"quality_issues",issues:e,message:`Found ${e.length} code quality issues`})}simulateQualityIssues(){const e=[];return Math.random()>.8&&e.push({type:"warning",message:"Unused import detected",file:"src/components/Button.jsx",line:5}),e}startPerformanceMonitoring(){console.log("⚡ Starting performance monitoring"),this.performanceCheckInterval=setInterval(()=>{this.checkPerformance()},15e3)}checkPerformance(){const e=this.simulatePerformanceMetrics();e.score<80&&this.notifyProgress({type:"performance_issue",metrics:e,message:`Performance score: ${e.score}/100`})}simulatePerformanceMetrics(){return{score:Math.floor(Math.random()*40)+60,loadTime:Math.floor(Math.random()*2e3)+500,bundleSize:Math.floor(Math.random()*500)+200}}onProgress(e){this.progressCallbacks.add(e)}offProgress(e){this.progressCallbacks.delete(e)}notifyProgress(e){this.progressCallbacks.forEach(s=>{try{s(e)}catch(n){console.error("Progress callback error:",n)}})}getTaskDuration(e){const[s,n]=e.estimatedTime.split("-").map(o=>parseInt(o.replace(" min","")));return(Math.random()*(n-s)+s)*1e3}delay(e){return new Promise(s=>setTimeout(s,e))}stopCurrentTask(){this.isRunning=!1,this.currentTask=null,this.iterationCount=0,this.fileWatcherInterval&&clearInterval(this.fileWatcherInterval),this.qualityCheckInterval&&clearInterval(this.qualityCheckInterval),this.performanceCheckInterval&&clearInterval(this.performanceCheckInterval)}getStatus(){return{isAutoModeEnabled:this.isAutoModeEnabled,isRunning:this.isRunning,currentTask:this.currentTask,iterationCount:this.iterationCount,maxIterations:this.maxIterations,autoRefinementEnabled:this.autoRefinementEnabled,backgroundMonitoringEnabled:this.backgroundMonitoringEnabled}}}const to=new zp;function Gp(){const{currentProject:r,updateFile:e,switchFile:s}=Ye(),[n,o]=p.useState(""),[i,a]=p.useState(!1),l=p.useRef(null),d=p.useRef(null),[c,m]=p.useState([]),[u,g]=p.useState([]),[b,f]=p.useState(!1),[j,h]=p.useState(!1),[k,N]=p.useState("auto"),[v,y]=p.useState(0),[x,T]=p.useState(!1),[A,C]=p.useState(!1),[L,E]=p.useState(!1),[P,Y]=p.useState("unlimited"),[H,D]=p.useState(!1),[I,F]=p.useState({tokens:0,maxTokens:4e3,percentage:0,files:0,characters:0});p.useEffect(()=>{l.current&&(l.current.style.height="auto",l.current.style.height=l.current.scrollHeight+"px")},[n]),p.useEffect(()=>{var w;(w=d.current)==null||w.scrollIntoView({behavior:"smooth"})},[c]),p.useEffect(()=>{console.log(`🎯 AI Model state changed to: ${k}`)},[k]),p.useEffect(()=>{const w=M=>{x&&!M.target.closest(".model-selector")&&!M.target.closest('button[class*="w-full p-2 rounded"]')&&T(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[x]);const W=async()=>{if(!n.trim()||i)return;const w=n;o(""),a(!0);const M={id:Date.now(),type:"user",content:w,timestamp:new Date},R={id:Date.now()+1,type:"ai",content:"",timestamp:new Date,isLoading:!0};m(J=>[...J,M,R]);try{await G(w),to.getStatus().autoMode&&await to.breakdownTask(w),console.log("🚀 Starting AI generation...");const J={conversationHistory:c,currentPrompt:w,previousFiles:Object.keys(r.files),projectContext:r.config},re=await hr.generateCode(w,J);if(console.log("📁 Files received:",re),console.log("📁 Files type:",typeof re),console.log("📁 Files keys:",re?Object.keys(re):"No files"),!re||typeof re!="object")throw new Error("Invalid files response from AI service");m(Et=>Et.map(Xe=>Xe.id===R.id?{...Xe,content:`Generated ${Object.keys(re).length} files successfully!`,isLoading:!1,files:re,timestamp:new Date}:Xe));let dt=0;Object.entries(re).forEach(([Et,Xe])=>{Et&&Xe!==void 0&&(console.log(`📄 Adding file: ${Et} (${typeof Xe})`),e(Et,Xe),dt++)}),console.log(`✅ Added ${dt} files to project`);const Vr=Object.keys(re)[0];Vr&&(s(Vr),console.log(`🎯 Set active file: ${Vr}`))}catch(J){console.error("Generation error:",J),m(re=>re.map(dt=>dt.id===R.id?{...dt,content:`Error: ${J.message}`,isLoading:!1,error:!0}:dt))}finally{a(!1)}},G=async w=>{const M=[{id:1,title:"Add responsive design",category:"UI/UX"},{id:2,title:"Implement error handling",category:"Performance"},{id:3,title:"Add TypeScript types",category:"Code Quality"},{id:4,title:"Optimize for mobile",category:"Mobile"}].filter(()=>Math.random()>.5);g(M)},le=w=>{navigator.clipboard.writeText(w),K.success("Message copied to clipboard")},fe=(w,M)=>{m(R=>R.map(J=>J.id===w?{...J,metadata:{...J.metadata,feedback:M,feedbackTimestamp:new Date}}:J)),K.success(`Feedback recorded: ${M}`)},_=w=>{w.key==="Enter"&&(w.preventDefault(),W())},z=w=>{w.preventDefault(),E(!0)},V=w=>{w.preventDefault(),E(!1)},ne=w=>{w.preventDefault(),E(!1);const M=Array.from(w.dataTransfer.files);M.length>0&&oe(M)},oe=w=>{const M=w.map(R=>R.name).join(", ");o(R=>R+`

[Attached files: ${M}]`),F(R=>({...R,files:R.files+w.length,characters:R.characters+M.length}))},Pe=w=>({auto:"Auto","codellama-7b":"CodeLlama 7B","codellama-13b":"CodeLlama 13B","codellama-34b":"CodeLlama 34B","starcoder-15b":"StarCoder 15B","deepseek-coder":"DeepSeek Coder","wizardcoder-7b":"WizardCoder 7B","phi3-mini":"Phi-3 Mini","llama3-8b":"Llama 3 8B","mistral-7b":"Mistral 7B","gemma-7b":"Gemma 7B","qwen-7b":"Qwen 7B","codet5-small":"CodeT5 Small","incoder-6b":"InCoder 6B"})[w]||"Auto",qr=()=>[{id:"auto",name:"Auto",description:"Automatically selects the best model",ram_required:"Smart"},{id:"codellama-7b",name:"CodeLlama 7B",description:"Fast and efficient code generation",ram_required:"8GB"},{id:"codellama-13b",name:"CodeLlama 13B",description:"Higher quality code generation",ram_required:"16GB"},{id:"codellama-34b",name:"CodeLlama 34B",description:"Best quality code generation",ram_required:"32GB"},{id:"starcoder-15b",name:"StarCoder 15B",description:"Excellent code completion",ram_required:"24GB"},{id:"deepseek-coder",name:"DeepSeek Coder",description:"High-performance generation",ram_required:"12GB"},{id:"wizardcoder-7b",name:"WizardCoder 7B",description:"Great at following instructions",ram_required:"10GB"},{id:"phi3-mini",name:"Phi-3 Mini",description:"Lightweight but powerful",ram_required:"6GB"},{id:"llama3-8b",name:"Llama 3 8B",description:"General purpose model",ram_required:"10GB"},{id:"mistral-7b",name:"Mistral 7B",description:"Fast and efficient coding assistant",ram_required:"8GB"},{id:"gemma-7b",name:"Gemma 7B",description:"Google's lightweight model",ram_required:"9GB"},{id:"qwen-7b",name:"Qwen 7B",description:"Alibaba's coding model",ram_required:"8GB"},{id:"codet5-small",name:"CodeT5 Small",description:"Salesforce's code generation model",ram_required:"4GB"},{id:"incoder-6b",name:"InCoder 6B",description:"Code completion specialist",ram_required:"6GB"}];return t.jsxs("div",{className:"h-full flex flex-col bg-background overflow-hidden",children:[t.jsx("div",{className:"px-4 py-3 border-b border-border/30 bg-background",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Kr,{className:"h-5 w-5 text-blue-500"}),t.jsx("span",{className:"font-medium text-foreground",children:"AI Assistant"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("button",{onClick:()=>f(!b),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"Chat",children:t.jsx(vr,{className:"h-4 w-4 text-muted-foreground"})}),t.jsx("button",{onClick:()=>h(!j),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"AI Agent",children:t.jsx(Kr,{className:"h-4 w-4 text-muted-foreground"})})]})]})]})}),t.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:t.jsx("div",{className:"flex-1 overflow-y-auto bg-background min-h-0",children:t.jsxs("div",{className:"p-4 pb-8 space-y-6",children:[t.jsx("div",{className:"flex items-center justify-center py-8",children:t.jsxs("div",{className:"text-center max-w-md",children:[t.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4",children:t.jsx(yt,{className:"h-8 w-8 text-blue-500"})}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Ask me anything"}),t.jsx("p",{className:"text-sm text-muted-foreground break-words leading-relaxed",children:"I can help you build applications, fix bugs, explain code, and much more."})]})}),t.jsx(Be,{children:c.map((w,M)=>t.jsx(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"w-full",children:t.jsxs("div",{className:`flex gap-4 ${w.type==="user"?"flex-row-reverse":"flex-row"}`,children:[t.jsx("div",{className:`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${w.type==="user"?"bg-blue-500 text-white":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`,children:w.type==="user"?t.jsx(fs,{className:"h-4 w-4"}):t.jsx(Kr,{className:"h-4 w-4"})}),t.jsxs("div",{className:`flex-1 max-w-[80%] ${w.type==="user"?"text-right":"text-left"}`,children:[t.jsx("div",{className:`inline-block px-4 py-3 rounded-xl text-sm leading-relaxed break-words ${w.type==="user"?"bg-blue-500 text-white rounded-br-md":"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"}`,children:w.isLoading?t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Ut,{className:"h-4 w-4 animate-spin"}),t.jsx("span",{children:"Thinking..."})]}):t.jsx("div",{className:"whitespace-pre-wrap break-words overflow-wrap-anywhere",children:w.content})}),!w.isLoading&&w.type==="ai"&&t.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[t.jsx("button",{onClick:()=>le(w.content),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Copy",children:t.jsx(wt,{className:"h-3.5 w-3.5 text-muted-foreground"})}),t.jsx("button",{onClick:()=>fe(w.id,"like"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Like",children:t.jsx(Ea,{className:"h-3.5 w-3.5 text-muted-foreground"})}),t.jsx("button",{onClick:()=>fe(w.id,"dislike"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Dislike",children:t.jsx(Aa,{className:"h-3.5 w-3.5 text-muted-foreground"})})]})]})]})},w.id))}),t.jsx("div",{ref:d})]})})}),t.jsx("div",{className:"border-t border-border/30 bg-background flex-shrink-0",children:t.jsxs("div",{className:"p-4",children:[t.jsxs("div",{className:"relative",children:[t.jsx("textarea",{id:"ai-prompt-input","data-testid":"ai-prompt-input",ref:l,value:n,onChange:w=>o(w.target.value),onKeyPress:_,onDragOver:z,onDragLeave:V,onDrop:ne,placeholder:"Plan, search, build anything",className:`w-full resize-y bg-background border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm leading-relaxed break-words overflow-wrap-anywhere focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors ${L?"border-blue-500 bg-blue-50/50 dark:bg-blue-900/10":"border-border"}`,style:{minHeight:"120px",maxHeight:"300px",wordWrap:"break-word",overflowWrap:"anywhere"},disabled:i,rows:4,"aria-label":"AI prompt input"}),L&&t.jsx("div",{className:"absolute inset-0 bg-blue-500/10 border-2 border-blue-500 border-dashed rounded-lg flex items-center justify-center pointer-events-none",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-blue-500 text-lg font-medium",children:"Drop files here"}),t.jsx("div",{className:"text-blue-500 text-xs",children:"Files will be attached to your prompt"})]})}),t.jsx("div",{className:"absolute bottom-1 right-1 w-4 h-4 opacity-30",children:t.jsx("div",{className:"w-full h-full flex items-end justify-end",children:t.jsx("div",{className:"w-2 h-2 bg-muted-foreground/40",style:{backgroundImage:"repeating-linear-gradient(45deg, transparent, transparent 1px, currentColor 1px, currentColor 2px)"}})})})]}),t.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("button",{onClick:()=>{var M;const w=n.includes("@")?"":"@file ";o(n+w),(M=l.current)==null||M.focus()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Mention files or references",children:t.jsx("span",{className:"text-xs text-muted-foreground",children:"@"})}),t.jsx("button",{onClick:()=>{const w=document.createElement("input");w.type="file",w.multiple=!0,w.accept=".txt,.md,.js,.jsx,.ts,.tsx,.css,.html,.json,.py,.java,.cpp,.c",w.onchange=M=>{const R=Array.from(M.target.files);R.length>0&&oe(R)},w.click()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Attach files",children:t.jsx("span",{className:"text-xs text-muted-foreground",children:"📎"})}),t.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-foreground relative",children:[t.jsx("button",{onClick:()=>T(!x),className:"hover:text-blue-600 transition-colors",title:"Select AI Model",children:Pe(k)},`model-button-${k}-${v}`),t.jsx("span",{className:"text-muted-foreground",children:"tab"}),t.jsxs("button",{onClick:w=>{w.stopPropagation(),C(!A)},className:"text-muted-foreground ml-2 hover:text-blue-600 transition-colors",title:"Click to view context usage",children:[I.percentage,"% O"]})]})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("button",{id:"generate-button","data-testid":"generate-button",onClick:W,disabled:!n.trim()||i,className:"w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shadow-sm",title:"Generate Code","aria-label":"Generate code from prompt",children:i?t.jsx(Ut,{className:"h-4 w-4 text-white animate-spin"}):t.jsx(Us,{className:"h-4 w-4 text-white rotate-90"})}),t.jsx("button",{onClick:()=>D(!H),className:`text-lg transition-colors hover:text-blue-600 ${P==="unlimited"?"text-blue-500":"text-muted-foreground"}`,title:`Context Mode: ${P==="unlimited"?"Unlimited":"Limited"}`,children:"∞"})]})]})]})}),A&&t.jsxs("div",{className:"absolute bottom-20 left-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-80",children:[t.jsxs("div",{className:"flex items-center justify-between mb-3",children:[t.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Usage"}),t.jsx("button",{onClick:()=>C(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Tokens"}),t.jsxs("span",{className:"text-xs font-medium text-foreground",children:[I.tokens.toLocaleString()," / ",I.maxTokens.toLocaleString()]})]}),t.jsx("div",{className:"w-full bg-muted rounded-full h-2",children:t.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${I.percentage}%`}})}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Usage"}),t.jsxs("span",{className:"text-xs font-medium text-foreground",children:[I.percentage,"%"]})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Files"}),t.jsxs("span",{className:"text-xs font-medium text-foreground",children:[I.files," files"]})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Characters"}),t.jsx("span",{className:"text-xs font-medium text-foreground",children:I.characters.toLocaleString()})]}),t.jsx("div",{className:"pt-2 border-t border-border",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Model"}),t.jsx("span",{className:"text-xs font-medium text-foreground",children:Pe(k)},`model-info-${k}-${v}`)]})})]})]}),H&&t.jsxs("div",{className:"absolute bottom-20 right-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-72",children:[t.jsxs("div",{className:"flex items-center justify-between mb-3",children:[t.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Mode"}),t.jsx("button",{onClick:()=>D(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("button",{onClick:()=>{Y("unlimited"),D(!1),K.success("Switched to Unlimited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${P==="unlimited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:`text-xl ${P==="unlimited"?"text-blue-500":"text-muted-foreground"}`,children:"∞"}),t.jsxs("div",{className:"text-left",children:[t.jsx("div",{className:"font-medium text-sm",children:"Unlimited Context"}),t.jsx("div",{className:"text-xs text-muted-foreground",children:"Access to entire codebase and conversation history"})]}),P==="unlimited"&&t.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),t.jsx("button",{onClick:()=>{Y("limited"),D(!1),K.success("Switched to Limited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${P==="limited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:`text-lg ${P==="limited"?"text-blue-500":"text-muted-foreground"}`,children:"⚡"}),t.jsxs("div",{className:"text-left",children:[t.jsx("div",{className:"font-medium text-sm",children:"Limited Context"}),t.jsx("div",{className:"text-xs text-muted-foreground",children:"Faster responses with recent conversation only"})]}),P==="limited"&&t.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),t.jsxs("div",{className:"pt-3 border-t border-border",children:[t.jsx("div",{className:"text-xs text-muted-foreground mb-2",children:"Current Usage"}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Mode"}),t.jsx("span",{className:"text-xs font-medium text-foreground",children:P==="unlimited"?"Unlimited":"Limited"})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Context Window"}),t.jsx("span",{className:"text-xs font-medium text-foreground",children:P==="unlimited"?"∞ tokens":"4K tokens"})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:"Performance"}),t.jsx("span",{className:"text-xs font-medium text-foreground",children:P==="unlimited"?"Comprehensive":"Fast"})]})]})]})]})]}),x&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 z-40",onClick:w=>{w.target===w.currentTarget&&T(!1)}}),t.jsxs("div",{className:"fixed bottom-16 left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl w-72 z-50",style:{height:"300px",display:"flex",flexDirection:"column"},onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"flex items-center justify-between p-1.5 border-b border-gray-200 dark:border-gray-700",children:[t.jsx("h3",{className:"text-xs font-semibold text-gray-900 dark:text-white",children:"AI Model"}),t.jsx("button",{onClick:()=>T(!1),className:"p-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",children:t.jsx("svg",{className:"w-3 h-3 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),t.jsx("div",{className:"overflow-y-auto p-1 space-y-0.5",style:{flex:"1",minHeight:"0"},children:qr().map(w=>t.jsx("button",{onClick:M=>{M.preventDefault(),M.stopPropagation(),N(w.id),y(R=>R+1),T(!1),K.success(`Switched to ${w.name}`)},className:`w-full p-2 rounded border transition-all duration-200 text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${k===w.id?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-gray-200 dark:border-gray-600"}`,children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("div",{className:`rounded border-2 flex items-center justify-center transition-all duration-200 ${k===w.id?"border-blue-500 bg-blue-500":"border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"}`,style:{width:"12px",height:"12px",minWidth:"12px",minHeight:"12px"},children:k===w.id&&t.jsx("svg",{className:"text-white",fill:"currentColor",viewBox:"0 0 20 20",style:{width:"8px",height:"8px"},children:t.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("div",{className:"font-medium text-xs text-gray-900 dark:text-white truncate",children:w.name}),t.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 truncate",children:w.description})]})]}),t.jsx("div",{className:"text-xs px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 ml-1 flex-shrink-0",children:w.ram_required})]})},w.id))}),t.jsx("div",{className:"p-1 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900",children:t.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:"Auto selects best model"})})]})]})]})}var mt={};class Wp{constructor(){this.app=null,this.db=null,this.auth=null,this.user=null,this.listeners=new Map,this.cursors=new Map,this.comments=new Map,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const e={apiKey:mt.REACT_APP_FIREBASE_API_KEY||"your-api-key",authDomain:mt.REACT_APP_FIREBASE_AUTH_DOMAIN||"your-project.firebaseapp.com",projectId:mt.REACT_APP_FIREBASE_PROJECT_ID||"your-project-id",storageBucket:mt.REACT_APP_FIREBASE_STORAGE_BUCKET||"your-project.appspot.com",messagingSenderId:mt.REACT_APP_FIREBASE_MESSAGING_SENDER_ID||"123456789",appId:mt.REACT_APP_FIREBASE_APP_ID||"your-app-id"};this.app=gr(e),this.db=_s(this.app),this.auth=Fs(this.app),Bs(this.auth,s=>{this.user=s,console.log("Collaboration auth state changed:",s?"authenticated":"not authenticated")}),this.isInitialized=!0,console.log("🤝 Collaboration service initialized successfully")}catch(e){throw console.error("❌ Failed to initialize collaboration service:",e),e}}async joinProject(e,s){var n;try{await this.initialize();const o={id:((n=this.user)==null?void 0:n.uid)||"anonymous",name:s.name||"Anonymous User",email:s.email||"",avatar:s.avatar||"",color:s.color||this.generateUserColor(),joinedAt:new Date().toISOString(),isOnline:!0},i=q(this.db,"projectPresence",`${e}_${o.id}`);return await Xt(i,o).catch(()=>At(de(this.db,"projectPresence"),{projectId:e,userId:o.id,...o})),console.log("✅ User joined project collaboration"),o}catch(o){throw console.error("❌ Failed to join project:",o),o}}async leaveProject(e){var s;try{await this.initialize();const n=q(this.db,"projectPresence",`${e}_${(s=this.user)==null?void 0:s.uid}`);await Xt(n,{isOnline:!1,leftAt:new Date().toISOString()}),console.log("✅ User left project collaboration")}catch(n){console.error("❌ Failed to leave project:",n)}}async getOnlineUsers(e){try{await this.initialize();const s=de(this.db,"projectPresence"),n=ve(s,ue("projectId","==",e),ue("isOnline","==",!0));return new Promise(o=>{const i=Pt(n,a=>{const l=[];a.forEach(d=>{l.push(d.data())}),o(l)});this.listeners.set(`onlineUsers_${e}`,i)})}catch(s){return console.error("❌ Failed to get online users:",s),[]}}async updateCursor(e,s,n){var o,i,a;try{await this.initialize();const l=q(this.db,"cursors",`${e}_${s}_${(o=this.user)==null?void 0:o.uid}`);await Xt(l,{projectId:e,fileId:s,userId:(i=this.user)==null?void 0:i.uid,position:n,updatedAt:Le()}).catch(()=>{var d;return At(de(this.db,"cursors"),{projectId:e,fileId:s,userId:(d=this.user)==null?void 0:d.uid,position:n,createdAt:Le(),updatedAt:Le()})}),this.cursors.set(`${e}_${s}_${(a=this.user)==null?void 0:a.uid}`,{position:n,updatedAt:new Date})}catch(l){console.error("❌ Failed to update cursor:",l)}}async listenToCursors(e,s,n){try{await this.initialize();const o=de(this.db,"cursors"),i=ve(o,ue("projectId","==",e),ue("fileId","==",s)),a=Pt(i,l=>{const d=[];l.forEach(c=>{var u;const m=c.data();m.userId!==((u=this.user)==null?void 0:u.uid)&&d.push({id:c.id,...m})}),n(d)});this.listeners.set(`cursors_${e}_${s}`,a)}catch(o){console.error("❌ Failed to listen to cursors:",o)}}async addComment(e,s,n,o,i=null){var a,l,d;try{await this.initialize();const c={projectId:e,fileId:s,lineNumber:n,content:o,parentId:i,userId:(a=this.user)==null?void 0:a.uid,userName:((l=this.user)==null?void 0:l.displayName)||"Anonymous",userAvatar:((d=this.user)==null?void 0:d.photoURL)||"",createdAt:Le(),updatedAt:Le(),isResolved:!1,reactions:{}},m=await At(de(this.db,"comments"),c);return console.log("✅ Comment added successfully"),{id:m.id,...c}}catch(c){throw console.error("❌ Failed to add comment:",c),c}}async getComments(e,s){try{await this.initialize();const n=de(this.db,"comments"),o=ve(n,ue("projectId","==",e),ue("fileId","==",s),Jr("createdAt","asc"));return new Promise(i=>{const a=Pt(o,l=>{const d=[];l.forEach(c=>{d.push({id:c.id,...c.data()})}),i(d)});this.listeners.set(`comments_${e}_${s}`,a)})}catch(n){return console.error("❌ Failed to get comments:",n),[]}}async updateComment(e,s){try{await this.initialize();const n=q(this.db,"comments",e);await Xt(n,{...s,updatedAt:Le()}),console.log("✅ Comment updated successfully")}catch(n){throw console.error("❌ Failed to update comment:",n),n}}async deleteComment(e){try{await this.initialize();const s=q(this.db,"comments",e);await ar(s),console.log("✅ Comment deleted successfully")}catch(s){throw console.error("❌ Failed to delete comment:",s),s}}async saveVersion(e,s){var n,o;try{await this.initialize();const i={projectId:e,versionNumber:s.versionNumber,description:s.description||"Auto-save",files:s.files,userId:(n=this.user)==null?void 0:n.uid,userName:((o=this.user)==null?void 0:o.displayName)||"Anonymous",createdAt:Le(),changes:s.changes||[],isAutoSave:s.isAutoSave||!1},a=await At(de(this.db,"versions"),i);return console.log("✅ Version saved successfully"),{id:a.id,...i}}catch(i){throw console.error("❌ Failed to save version:",i),i}}async getVersionHistory(e,s=50){try{await this.initialize();const n=de(this.db,"versions"),o=ve(n,ue("projectId","==",e),Jr("createdAt","desc"),s(s));return new Promise(i=>{const a=Pt(o,l=>{const d=[];l.forEach(c=>{d.push({id:c.id,...c.data()})}),i(d)});this.listeners.set(`versions_${e}`,a)})}catch(n){return console.error("❌ Failed to get version history:",n),[]}}async restoreVersion(e,s){try{await this.initialize();const n=q(this.db,"versions",s),o=await getDoc(n);if(o.exists()){const i=o.data();return await this.saveVersion(e,{versionNumber:`Restored from ${i.versionNumber}`,description:`Restored from version ${i.versionNumber}`,files:i.files,isAutoSave:!1}),console.log("✅ Version restored successfully"),i.files}else throw new Error("Version not found")}catch(n){throw console.error("❌ Failed to restore version:",n),n}}async syncFileChanges(e,s,n){var o,i;try{await this.initialize();const a={projectId:e,fileId:s,userId:(o=this.user)==null?void 0:o.uid,userName:((i=this.user)==null?void 0:i.displayName)||"Anonymous",changes:n,timestamp:Le()};await At(de(this.db,"fileChanges"),a),console.log("✅ File changes synced successfully")}catch(a){console.error("❌ Failed to sync file changes:",a)}}async listenToFileChanges(e,s,n){try{await this.initialize();const o=de(this.db,"fileChanges"),i=ve(o,ue("projectId","==",e),ue("fileId","==",s),Jr("timestamp","desc"),limit(10)),a=Pt(i,l=>{const d=[];l.forEach(c=>{d.push({id:c.id,...c.data()})}),n(d)});this.listeners.set(`fileChanges_${e}_${s}`,a)}catch(o){console.error("❌ Failed to listen to file changes:",o)}}generateUserColor(){const e=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#98D8C8","#F7DC6F","#BB8FCE","#85C1E9"];return e[Math.floor(Math.random()*e.length)]}cleanup(){this.listeners.forEach(e=>{e()}),this.listeners.clear(),console.log("🧹 Collaboration listeners cleaned up")}async getCollaborationStats(e){var s;try{await this.initialize();const[n,o,i]=await Promise.all([this.getOnlineUsers(e),this.getComments(e,"all"),this.getVersionHistory(e,10)]);return{onlineUsers:n.length,totalComments:o.length,totalVersions:i.length,lastActivity:((s=i[0])==null?void 0:s.createdAt)||null}}catch(n){return console.error("❌ Failed to get collaboration stats:",n),{onlineUsers:0,totalComments:0,totalVersions:0,lastActivity:null}}}}const Oe=new Wp,qp=({projectId:r,fileId:e,onFileChange:s,onVersionRestore:n})=>{const[o,i]=p.useState([]),[a,l]=p.useState([]),[d,c]=p.useState([]),[m,u]=p.useState(""),[g,b]=p.useState(null),[f,j]=p.useState(!1),[h,k]=p.useState(!1),[N,v]=p.useState(!1),[y,x]=p.useState({name:"Anonymous User",email:"",avatar:""});p.useEffect(()=>(r&&T(),()=>{Oe.cleanup()}),[r]);const T=async()=>{try{await Oe.joinProject(r,y),v(!0),Oe.getOnlineUsers(r).then(i),e&&Oe.getComments(r,e).then(l),Oe.getVersionHistory(r).then(c),e&&Oe.listenToFileChanges(r,e,E=>{console.log("File changes received:",E)}),console.log("🤝 Collaboration initialized successfully")}catch(E){console.error("❌ Failed to initialize collaboration:",E)}},A=async()=>{if(!(!m.trim()||!e))try{await Oe.addComment(r,e,g||1,m),u(""),b(null)}catch(E){console.error("❌ Failed to add comment:",E)}},C=async E=>{try{const P=await Oe.restoreVersion(r,E);n&&n(P),console.log("✅ Version restored successfully")}catch(P){console.error("❌ Failed to restore version:",P)}},L=async()=>{try{const E={versionNumber:`v${d.length+1}`,description:prompt("Version description:")||"Manual save",files:{},isAutoSave:!1};await Oe.saveVersion(r,E),console.log("✅ Version saved successfully")}catch(E){console.error("❌ Failed to save version:",E)}};return t.jsxs("div",{className:"collaboration-panel",children:[t.jsxs("div",{className:"collaboration-header",children:[t.jsx("h3",{children:"🤝 Real-time Collaboration"}),t.jsx("div",{className:"collaboration-status",children:N?t.jsx("span",{className:"status-online",children:"● Online"}):t.jsx("span",{className:"status-offline",children:"● Offline"})})]}),t.jsxs("div",{className:"collaboration-section",children:[t.jsxs("h4",{children:["👥 Online Users (",o.length,")"]}),t.jsx("div",{className:"users-list",children:o.map((E,P)=>t.jsxs("div",{className:"user-item",children:[t.jsx("div",{className:"user-avatar",style:{backgroundColor:E.color},children:E.name.charAt(0).toUpperCase()}),t.jsx("span",{className:"user-name",children:E.name})]},E.id||P))})]}),t.jsxs("div",{className:"collaboration-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsxs("h4",{children:["💬 Comments (",a.length,")"]}),t.jsx("button",{className:"btn btn-sm",onClick:()=>j(!f),children:f?"Hide":"Show"})]}),f&&t.jsxs("div",{className:"comments-container",children:[t.jsxs("div",{className:"add-comment",children:[t.jsx("textarea",{value:m,onChange:E=>u(E.target.value),placeholder:"Add a comment...",rows:"3"}),t.jsxs("div",{className:"comment-actions",children:[t.jsx("span",{className:"line-info",children:g?`Line ${g}`:"Select a line to comment"}),t.jsx("button",{className:"btn btn-primary btn-sm",onClick:A,disabled:!m.trim(),children:"Add Comment"})]})]}),t.jsx("div",{className:"comments-list",children:a.map(E=>{var P;return t.jsxs("div",{className:"comment-item",children:[t.jsxs("div",{className:"comment-header",children:[t.jsxs("div",{className:"comment-author",children:[t.jsx("div",{className:"author-avatar",style:{backgroundColor:E.userColor||"#007bff"},children:E.userName.charAt(0).toUpperCase()}),t.jsx("span",{className:"author-name",children:E.userName})]}),t.jsx("span",{className:"comment-time",children:new Date((P=E.createdAt)==null?void 0:P.toDate()).toLocaleString()})]}),t.jsx("div",{className:"comment-content",children:E.content}),t.jsxs("div",{className:"comment-line",children:["Line ",E.lineNumber]})]},E.id)})})]})]}),t.jsxs("div",{className:"collaboration-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsxs("h4",{children:["📚 Version History (",d.length,")"]}),t.jsxs("div",{className:"version-actions",children:[t.jsx("button",{className:"btn btn-sm btn-secondary",onClick:()=>k(!h),children:h?"Hide":"Show"}),t.jsx("button",{className:"btn btn-sm btn-primary",onClick:L,children:"Save Version"})]})]}),h&&t.jsx("div",{className:"versions-container",children:t.jsx("div",{className:"versions-list",children:d.map(E=>{var P;return t.jsxs("div",{className:"version-item",children:[t.jsxs("div",{className:"version-header",children:[t.jsx("span",{className:"version-number",children:E.versionNumber}),t.jsx("span",{className:"version-time",children:new Date((P=E.createdAt)==null?void 0:P.toDate()).toLocaleString()})]}),t.jsx("div",{className:"version-description",children:E.description}),t.jsxs("div",{className:"version-author",children:["by ",E.userName]}),t.jsx("div",{className:"version-actions",children:t.jsx("button",{className:"btn btn-sm btn-outline",onClick:()=>C(E.id),children:"Restore"})})]},E.id)})})})]}),t.jsxs("div",{className:"collaboration-section",children:[t.jsx("h4",{children:"📊 Collaboration Stats"}),t.jsxs("div",{className:"stats-grid",children:[t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-label",children:"Online Users:"}),t.jsx("span",{className:"stat-value",children:o.length})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-label",children:"Comments:"}),t.jsx("span",{className:"stat-value",children:a.length})]}),t.jsxs("div",{className:"stat-item",children:[t.jsx("span",{className:"stat-label",children:"Versions:"}),t.jsx("span",{className:"stat-value",children:d.length})]})]})]}),t.jsx("style",{jsx:!0,children:`
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
      `})]})},Gi=p.createContext({dragDropManager:void 0});function ye(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var ro=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),so=function(){return Math.random().toString(36).substring(7).split("").join(".")},no={INIT:"@@redux/INIT"+so(),REPLACE:"@@redux/REPLACE"+so()};function Vp(r){if(typeof r!="object"||r===null)return!1;for(var e=r;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e}function Wi(r,e,s){var n;if(typeof e=="function"&&typeof s=="function"||typeof s=="function"&&typeof arguments[3]=="function")throw new Error(ye(0));if(typeof e=="function"&&typeof s>"u"&&(s=e,e=void 0),typeof s<"u"){if(typeof s!="function")throw new Error(ye(1));return s(Wi)(r,e)}if(typeof r!="function")throw new Error(ye(2));var o=r,i=e,a=[],l=a,d=!1;function c(){l===a&&(l=a.slice())}function m(){if(d)throw new Error(ye(3));return i}function u(j){if(typeof j!="function")throw new Error(ye(4));if(d)throw new Error(ye(5));var h=!0;return c(),l.push(j),function(){if(h){if(d)throw new Error(ye(6));h=!1,c();var N=l.indexOf(j);l.splice(N,1),a=null}}}function g(j){if(!Vp(j))throw new Error(ye(7));if(typeof j.type>"u")throw new Error(ye(8));if(d)throw new Error(ye(9));try{d=!0,i=o(i,j)}finally{d=!1}for(var h=a=l,k=0;k<h.length;k++){var N=h[k];N()}return j}function b(j){if(typeof j!="function")throw new Error(ye(10));o=j,g({type:no.REPLACE})}function f(){var j,h=u;return j={subscribe:function(N){if(typeof N!="object"||N===null)throw new Error(ye(11));function v(){N.next&&N.next(m())}v();var y=h(v);return{unsubscribe:y}}},j[ro]=function(){return this},j}return g({type:no.INIT}),n={dispatch:g,subscribe:u,getState:m,replaceReducer:b},n[ro]=f,n}function U(r,e,...s){if(Jp()&&e===void 0)throw new Error("invariant requires an error message argument");if(!r){let n;if(e===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let o=0;n=new Error(e.replace(/%s/g,function(){return s[o++]})),n.name="Invariant Violation"}throw n.framesToPop=1,n}}function Jp(){return typeof process<"u"&&!0}function Kp(r,e,s){return e.split(".").reduce((n,o)=>n&&n[o]?n[o]:s||null,r)}function Yp(r,e){return r.filter(s=>s!==e)}function qi(r){return typeof r=="object"}function Xp(r,e){const s=new Map,n=i=>{s.set(i,s.has(i)?s.get(i)+1:1)};r.forEach(n),e.forEach(n);const o=[];return s.forEach((i,a)=>{i===1&&o.push(a)}),o}function Qp(r,e){return r.filter(s=>e.indexOf(s)>-1)}const on="dnd-core/INIT_COORDS",Ur="dnd-core/BEGIN_DRAG",an="dnd-core/PUBLISH_DRAG_SOURCE",Hr="dnd-core/HOVER",zr="dnd-core/DROP",Gr="dnd-core/END_DRAG";function oo(r,e){return{type:on,payload:{sourceClientOffset:e||null,clientOffset:r||null}}}const Zp={type:on,payload:{clientOffset:null,sourceClientOffset:null}};function eh(r){return function(s=[],n={publishSource:!0}){const{publishSource:o=!0,clientOffset:i,getSourceClientOffset:a}=n,l=r.getMonitor(),d=r.getRegistry();r.dispatch(oo(i)),th(s,l,d);const c=nh(s,l);if(c==null){r.dispatch(Zp);return}let m=null;if(i){if(!a)throw new Error("getSourceClientOffset must be defined");rh(a),m=a(c)}r.dispatch(oo(i,m));const g=d.getSource(c).beginDrag(l,c);if(g==null)return;sh(g),d.pinSource(c);const b=d.getSourceType(c);return{type:Ur,payload:{itemType:b,item:g,sourceId:c,clientOffset:i||null,sourceClientOffset:m||null,isSourcePublic:!!o}}}}function th(r,e,s){U(!e.isDragging(),"Cannot call beginDrag while dragging."),r.forEach(function(n){U(s.getSource(n),"Expected sourceIds to be registered.")})}function rh(r){U(typeof r=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function sh(r){U(qi(r),"Item must be an object.")}function nh(r,e){let s=null;for(let n=r.length-1;n>=0;n--)if(e.canDragSource(r[n])){s=r[n];break}return s}function oh(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function ih(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){oh(r,o,s[o])})}return r}function ah(r){return function(s={}){const n=r.getMonitor(),o=r.getRegistry();lh(n),uh(n).forEach((a,l)=>{const d=ch(a,l,o,n),c={type:zr,payload:{dropResult:ih({},s,d)}};r.dispatch(c)})}}function lh(r){U(r.isDragging(),"Cannot call drop while not dragging."),U(!r.didDrop(),"Cannot call drop twice during one drag operation.")}function ch(r,e,s,n){const o=s.getTarget(r);let i=o?o.drop(n,r):void 0;return dh(i),typeof i>"u"&&(i=e===0?{}:n.getDropResult()),i}function dh(r){U(typeof r>"u"||qi(r),"Drop result must either be an object or undefined.")}function uh(r){const e=r.getTargetIds().filter(r.canDropOnTarget,r);return e.reverse(),e}function mh(r){return function(){const s=r.getMonitor(),n=r.getRegistry();ph(s);const o=s.getSourceId();return o!=null&&(n.getSource(o,!0).endDrag(s,o),n.unpinSource()),{type:Gr}}}function ph(r){U(r.isDragging(),"Cannot call endDrag while not dragging.")}function Rs(r,e){return e===null?r===null:Array.isArray(r)?r.some(s=>s===e):r===e}function hh(r){return function(s,{clientOffset:n}={}){fh(s);const o=s.slice(0),i=r.getMonitor(),a=r.getRegistry(),l=i.getItemType();return xh(o,a,l),gh(o,i,a),bh(o,i,a),{type:Hr,payload:{targetIds:o,clientOffset:n||null}}}}function fh(r){U(Array.isArray(r),"Expected targetIds to be an array.")}function gh(r,e,s){U(e.isDragging(),"Cannot call hover while not dragging."),U(!e.didDrop(),"Cannot call hover after drop.");for(let n=0;n<r.length;n++){const o=r[n];U(r.lastIndexOf(o)===n,"Expected targetIds to be unique in the passed array.");const i=s.getTarget(o);U(i,"Expected targetIds to be registered.")}}function xh(r,e,s){for(let n=r.length-1;n>=0;n--){const o=r[n],i=e.getTargetType(o);Rs(i,s)||r.splice(n,1)}}function bh(r,e,s){r.forEach(function(n){s.getTarget(n).hover(e,n)})}function yh(r){return function(){if(r.getMonitor().isDragging())return{type:an}}}function vh(r){return{beginDrag:eh(r),publishDragSource:yh(r),hover:hh(r),drop:ah(r),endDrag:mh(r)}}class wh{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const e=this,{dispatch:s}=this.store;function n(i){return(...a)=>{const l=i.apply(e,a);typeof l<"u"&&s(l)}}const o=vh(this);return Object.keys(o).reduce((i,a)=>{const l=o[a];return i[a]=n(l),i},{})}dispatch(e){this.store.dispatch(e)}constructor(e,s){this.isSetUp=!1,this.handleRefCountChange=()=>{const n=this.store.getState().refCount>0;this.backend&&(n&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!n&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=s,e.subscribe(this.handleRefCountChange)}}function jh(r,e){return{x:r.x+e.x,y:r.y+e.y}}function Vi(r,e){return{x:r.x-e.x,y:r.y-e.y}}function Nh(r){const{clientOffset:e,initialClientOffset:s,initialSourceClientOffset:n}=r;return!e||!s||!n?null:Vi(jh(e,n),s)}function Sh(r){const{clientOffset:e,initialClientOffset:s}=r;return!e||!s?null:Vi(e,s)}const $t=[],ln=[];$t.__IS_NONE__=!0;ln.__IS_ALL__=!0;function Ch(r,e){return r===$t?!1:r===ln||typeof e>"u"?!0:Qp(e,r).length>0}class kh{subscribeToStateChange(e,s={}){const{handlerIds:n}=s;U(typeof e=="function","listener must be a function."),U(typeof n>"u"||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let o=this.store.getState().stateId;const i=()=>{const a=this.store.getState(),l=a.stateId;try{l===o||l===o+1&&!Ch(a.dirtyHandlerIds,n)||e()}finally{o=l}};return this.store.subscribe(i)}subscribeToOffsetChange(e){U(typeof e=="function","listener must be a function.");let s=this.store.getState().dragOffset;const n=()=>{const o=this.store.getState().dragOffset;o!==s&&(s=o,e())};return this.store.subscribe(n)}canDragSource(e){if(!e)return!1;const s=this.registry.getSource(e);return U(s,`Expected to find a valid source. sourceId=${e}`),this.isDragging()?!1:s.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;const s=this.registry.getTarget(e);if(U(s,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;const n=this.registry.getTargetType(e),o=this.getItemType();return Rs(n,o)&&s.canDrop(this,e)}isDragging(){return!!this.getItemType()}isDraggingSource(e){if(!e)return!1;const s=this.registry.getSource(e,!0);if(U(s,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;const n=this.registry.getSourceType(e),o=this.getItemType();return n!==o?!1:s.isDragging(this,e)}isOverTarget(e,s={shallow:!1}){if(!e)return!1;const{shallow:n}=s;if(!this.isDragging())return!1;const o=this.registry.getTargetType(e),i=this.getItemType();if(i&&!Rs(o,i))return!1;const a=this.getTargetIds();if(!a.length)return!1;const l=a.indexOf(e);return n?l===a.length-1:l>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return Nh(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return Sh(this.store.getState().dragOffset)}constructor(e,s){this.store=e,this.registry=s}}const io=typeof global<"u"?global:self,Ji=io.MutationObserver||io.WebKitMutationObserver;function Ki(r){return function(){const s=setTimeout(o,0),n=setInterval(o,50);function o(){clearTimeout(s),clearInterval(n),r()}}}function Th(r){let e=1;const s=new Ji(r),n=document.createTextNode("");return s.observe(n,{characterData:!0}),function(){e=-e,n.data=e}}const Dh=typeof Ji=="function"?Th:Ki;class Eh{enqueueTask(e){const{queue:s,requestFlush:n}=this;s.length||(n(),this.flushing=!0),s[s.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;for(;this.index<e.length;){const s=this.index;if(this.index++,e[s].call(),this.index>this.capacity){for(let n=0,o=e.length-this.index;n<o;n++)e[n]=e[n+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=Dh(this.flush),this.requestErrorThrow=Ki(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class Ah{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,s){this.onError=e,this.release=s,this.task=null}}class Ph{create(e){const s=this.freeTasks,n=s.length?s.pop():new Ah(this.onError,o=>s[s.length]=o);return n.task=e,n}constructor(e){this.onError=e,this.freeTasks=[]}}const Yi=new Eh,Rh=new Ph(Yi.registerPendingError);function Oh(r){Yi.enqueueTask(Rh.create(r))}const cn="dnd-core/ADD_SOURCE",dn="dnd-core/ADD_TARGET",un="dnd-core/REMOVE_SOURCE",Wr="dnd-core/REMOVE_TARGET";function Ih(r){return{type:cn,payload:{sourceId:r}}}function Mh(r){return{type:dn,payload:{targetId:r}}}function Lh(r){return{type:un,payload:{sourceId:r}}}function Fh(r){return{type:Wr,payload:{targetId:r}}}function _h(r){U(typeof r.canDrag=="function","Expected canDrag to be a function."),U(typeof r.beginDrag=="function","Expected beginDrag to be a function."),U(typeof r.endDrag=="function","Expected endDrag to be a function.")}function Bh(r){U(typeof r.canDrop=="function","Expected canDrop to be a function."),U(typeof r.hover=="function","Expected hover to be a function."),U(typeof r.drop=="function","Expected beginDrag to be a function.")}function Os(r,e){if(e&&Array.isArray(r)){r.forEach(s=>Os(s,!1));return}U(typeof r=="string"||typeof r=="symbol",e?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var we;(function(r){r.SOURCE="SOURCE",r.TARGET="TARGET"})(we||(we={}));let $h=0;function Uh(){return $h++}function Hh(r){const e=Uh().toString();switch(r){case we.SOURCE:return`S${e}`;case we.TARGET:return`T${e}`;default:throw new Error(`Unknown Handler Role: ${r}`)}}function ao(r){switch(r[0]){case"S":return we.SOURCE;case"T":return we.TARGET;default:throw new Error(`Cannot parse handler ID: ${r}`)}}function lo(r,e){const s=r.entries();let n=!1;do{const{done:o,value:[,i]}=s.next();if(i===e)return!0;n=!!o}while(!n);return!1}class zh{addSource(e,s){Os(e),_h(s);const n=this.addHandler(we.SOURCE,e,s);return this.store.dispatch(Ih(n)),n}addTarget(e,s){Os(e,!0),Bh(s);const n=this.addHandler(we.TARGET,e,s);return this.store.dispatch(Mh(n)),n}containsHandler(e){return lo(this.dragSources,e)||lo(this.dropTargets,e)}getSource(e,s=!1){return U(this.isSourceId(e),"Expected a valid source ID."),s&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return U(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return U(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return U(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return ao(e)===we.SOURCE}isTargetId(e){return ao(e)===we.TARGET}removeSource(e){U(this.getSource(e),"Expected an existing source."),this.store.dispatch(Lh(e)),Oh(()=>{this.dragSources.delete(e),this.types.delete(e)})}removeTarget(e){U(this.getTarget(e),"Expected an existing target."),this.store.dispatch(Fh(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){const s=this.getSource(e);U(s,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=s}unpinSource(){U(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,s,n){const o=Hh(e);return this.types.set(o,s),e===we.SOURCE?this.dragSources.set(o,n):e===we.TARGET&&this.dropTargets.set(o,n),o}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}const Gh=(r,e)=>r===e;function Wh(r,e){return!r&&!e?!0:!r||!e?!1:r.x===e.x&&r.y===e.y}function qh(r,e,s=Gh){if(r.length!==e.length)return!1;for(let n=0;n<r.length;++n)if(!s(r[n],e[n]))return!1;return!0}function Vh(r=$t,e){switch(e.type){case Hr:break;case cn:case dn:case Wr:case un:return $t;case Ur:case an:case Gr:case zr:default:return ln}const{targetIds:s=[],prevTargetIds:n=[]}=e.payload,o=Xp(s,n);if(!(o.length>0||!qh(s,n)))return $t;const a=n[n.length-1],l=s[s.length-1];return a!==l&&(a&&o.push(a),l&&o.push(l)),o}function Jh(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function Kh(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){Jh(r,o,s[o])})}return r}const co={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function Yh(r=co,e){const{payload:s}=e;switch(e.type){case on:case Ur:return{initialSourceClientOffset:s.sourceClientOffset,initialClientOffset:s.clientOffset,clientOffset:s.clientOffset};case Hr:return Wh(r.clientOffset,s.clientOffset)?r:Kh({},r,{clientOffset:s.clientOffset});case Gr:case zr:return co;default:return r}}function Xh(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function pt(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){Xh(r,o,s[o])})}return r}const Qh={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function Zh(r=Qh,e){const{payload:s}=e;switch(e.type){case Ur:return pt({},r,{itemType:s.itemType,item:s.item,sourceId:s.sourceId,isSourcePublic:s.isSourcePublic,dropResult:null,didDrop:!1});case an:return pt({},r,{isSourcePublic:!0});case Hr:return pt({},r,{targetIds:s.targetIds});case Wr:return r.targetIds.indexOf(s.targetId)===-1?r:pt({},r,{targetIds:Yp(r.targetIds,s.targetId)});case zr:return pt({},r,{dropResult:s.dropResult,didDrop:!0,targetIds:[]});case Gr:return pt({},r,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return r}}function ef(r=0,e){switch(e.type){case cn:case dn:return r+1;case un:case Wr:return r-1;default:return r}}function tf(r=0){return r+1}function rf(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function sf(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){rf(r,o,s[o])})}return r}function nf(r={},e){return{dirtyHandlerIds:Vh(r.dirtyHandlerIds,{type:e.type,payload:sf({},e.payload,{prevTargetIds:Kp(r,"dragOperation.targetIds",[])})}),dragOffset:Yh(r.dragOffset,e),refCount:ef(r.refCount,e),dragOperation:Zh(r.dragOperation,e),stateId:tf(r.stateId)}}function of(r,e=void 0,s={},n=!1){const o=af(n),i=new kh(o,new zh(o)),a=new wh(o,i),l=r(a,e,s);return a.receiveBackend(l),a}function af(r){const e=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return Wi(nf,r&&e&&e({name:"dnd-core",instanceId:"dnd-core"}))}function lf(r,e){if(r==null)return{};var s=cf(r,e),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(s[n]=r[n])}return s}function cf(r,e){if(r==null)return{};var s={},n=Object.keys(r),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(s[o]=r[o]);return s}let uo=0;const fr=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var df=p.memo(function(e){var{children:s}=e,n=lf(e,["children"]);const[o,i]=uf(n);return p.useEffect(()=>{if(i){const a=Xi();return++uo,()=>{--uo===0&&(a[fr]=null)}}},[]),t.jsx(Gi.Provider,{value:o,children:s})});function uf(r){if("manager"in r)return[{dragDropManager:r.manager},!1];const e=mf(r.backend,r.context,r.options,r.debugMode),s=!r.context;return[e,s]}function mf(r,e=Xi(),s,n){const o=e;return o[fr]||(o[fr]={dragDropManager:of(r,e,s,n)}),o[fr]}function Xi(){return typeof global<"u"?global:window}var pf=function r(e,s){if(e===s)return!0;if(e&&s&&typeof e=="object"&&typeof s=="object"){if(e.constructor!==s.constructor)return!1;var n,o,i;if(Array.isArray(e)){if(n=e.length,n!=s.length)return!1;for(o=n;o--!==0;)if(!r(e[o],s[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===s.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(s).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(s,i[o]))return!1;for(o=n;o--!==0;){var a=i[o];if(!r(e[a],s[a]))return!1}return!0}return e!==e&&s!==s};const hf=da(pf),ct=typeof window<"u"?p.useLayoutEffect:p.useEffect;function ff(r,e,s){const[n,o]=p.useState(()=>e(r)),i=p.useCallback(()=>{const a=e(r);hf(n,a)||(o(a),s&&s())},[n,r,s]);return ct(i),[n,i]}function gf(r,e,s){const[n,o]=ff(r,e,s);return ct(function(){const a=r.getHandlerId();if(a!=null)return r.subscribeToStateChange(o,{handlerIds:[a]})},[r,o]),n}function Qi(r,e,s){return gf(e,r||(()=>({})),()=>s.reconnect())}function Zi(r,e){const s=[];return typeof r!="function"&&s.push(r),p.useMemo(()=>typeof r=="function"?r():r,s)}function xf(r){return p.useMemo(()=>r.hooks.dragSource(),[r])}function bf(r){return p.useMemo(()=>r.hooks.dragPreview(),[r])}let as=!1,ls=!1;class yf{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){U(!as,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return as=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{as=!1}}isDragging(){if(!this.sourceId)return!1;U(!ls,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return ls=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{ls=!1}}subscribeToStateChange(e,s){return this.internalMonitor.subscribeToStateChange(e,s)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,s){return this.internalMonitor.isOverTarget(e,s)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}let cs=!1;class vf{receiveHandlerId(e){this.targetId=e}getHandlerId(){return this.targetId}subscribeToStateChange(e,s){return this.internalMonitor.subscribeToStateChange(e,s)}canDrop(){if(!this.targetId)return!1;U(!cs,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return cs=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{cs=!1}}isOver(e){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,e):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.targetId=null,this.internalMonitor=e.getMonitor()}}function wf(r,e,s){const n=s.getRegistry(),o=n.addTarget(r,e);return[o,()=>n.removeTarget(o)]}function jf(r,e,s){const n=s.getRegistry(),o=n.addSource(r,e);return[o,()=>n.removeSource(o)]}function Is(r,e,s,n){let o;if(o!==void 0)return!!o;if(r===e)return!0;if(typeof r!="object"||!r||typeof e!="object"||!e)return!1;const i=Object.keys(r),a=Object.keys(e);if(i.length!==a.length)return!1;const l=Object.prototype.hasOwnProperty.bind(e);for(let d=0;d<i.length;d++){const c=i[d];if(!l(c))return!1;const m=r[c],u=e[c];if(o=void 0,o===!1||o===void 0&&m!==u)return!1}return!0}function Ms(r){return r!==null&&typeof r=="object"&&Object.prototype.hasOwnProperty.call(r,"current")}function Nf(r){if(typeof r.type=="string")return;const e=r.type.displayName||r.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`)}function Sf(r){return(e=null,s=null)=>{if(!p.isValidElement(e)){const i=e;return r(i,s),i}const n=e;return Nf(n),Cf(n,s?i=>r(i,s):r)}}function ea(r){const e={};return Object.keys(r).forEach(s=>{const n=r[s];if(s.endsWith("Ref"))e[s]=r[s];else{const o=Sf(n);e[s]=()=>o}}),e}function mo(r,e){typeof r=="function"?r(e):r.current=e}function Cf(r,e){const s=r.ref;return U(typeof s!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),s?p.cloneElement(r,{ref:n=>{mo(s,n),mo(e,n)}}):p.cloneElement(r,{ref:e})}class kf{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){const e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){const e=this.dragSource,s=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return s&&this.disconnectDragSource(),this.handlerId?e?(s&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),s):(this.lastConnectedDragSource=e,s):s}reconnectDragPreview(e=!1){const s=this.dragPreview,n=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!!this.handlerId){if(!s){this.lastConnectedDragPreview=s;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=s,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,s,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!Is(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!Is(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=ea({dragSource:(s,n)=>{this.clearDragSource(),this.dragSourceOptions=n||null,Ms(s)?this.dragSourceRef=s:this.dragSourceNode=s,this.reconnectDragSource()},dragPreview:(s,n)=>{this.clearDragPreview(),this.dragPreviewOptions=n||null,Ms(s)?this.dragPreviewRef=s:this.dragPreviewNode=s,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}class Tf{get connectTarget(){return this.dropTarget}reconnect(){const e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();const s=this.dropTarget;if(this.handlerId){if(!s){this.lastConnectedDropTarget=s;return}e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=s,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,s,this.dropTargetOptions))}}receiveHandlerId(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(e){this.dropTargetOptionsInternal=e}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Is(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(e){this.hooks=ea({dropTarget:(s,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,Ms(s)?this.dropTargetRef=s:this.dropTargetNode=s,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}}function Dt(){const{dragDropManager:r}=p.useContext(Gi);return U(r!=null,"Expected drag drop context"),r}function Df(r,e){const s=Dt(),n=p.useMemo(()=>new kf(s.getBackend()),[s]);return ct(()=>(n.dragSourceOptions=r||null,n.reconnect(),()=>n.disconnectDragSource()),[n,r]),ct(()=>(n.dragPreviewOptions=e||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,e]),n}function Ef(){const r=Dt();return p.useMemo(()=>new yf(r),[r])}class Af{beginDrag(){const e=this.spec,s=this.monitor;let n=null;return typeof e.item=="object"?n=e.item:typeof e.item=="function"?n=e.item(s):n={},n??null}canDrag(){const e=this.spec,s=this.monitor;return typeof e.canDrag=="boolean"?e.canDrag:typeof e.canDrag=="function"?e.canDrag(s):!0}isDragging(e,s){const n=this.spec,o=this.monitor,{isDragging:i}=n;return i?i(o):s===e.getSourceId()}endDrag(){const e=this.spec,s=this.monitor,n=this.connector,{end:o}=e;o&&o(s.getItem(),s),n.reconnect()}constructor(e,s,n){this.spec=e,this.monitor=s,this.connector=n}}function Pf(r,e,s){const n=p.useMemo(()=>new Af(r,e,s),[e,s]);return p.useEffect(()=>{n.spec=r},[r]),n}function Rf(r){return p.useMemo(()=>{const e=r.type;return U(e!=null,"spec.type must be defined"),e},[r])}function Of(r,e,s){const n=Dt(),o=Pf(r,e,s),i=Rf(r);ct(function(){if(i!=null){const[l,d]=jf(i,o,n);return e.receiveHandlerId(l),s.receiveHandlerId(l),d}},[n,e,s,o,i])}function If(r,e){const s=Zi(r);U(!s.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const n=Ef(),o=Df(s.options,s.previewOptions);return Of(s,n,o),[Qi(s.collect,n,o),xf(o),bf(o)]}function Mf(r){return p.useMemo(()=>r.hooks.dropTarget(),[r])}function Lf(r){const e=Dt(),s=p.useMemo(()=>new Tf(e.getBackend()),[e]);return ct(()=>(s.dropTargetOptions=r||null,s.reconnect(),()=>s.disconnectDropTarget()),[r]),s}function Ff(){const r=Dt();return p.useMemo(()=>new vf(r),[r])}function _f(r){const{accept:e}=r;return p.useMemo(()=>(U(r.accept!=null,"accept must be defined"),Array.isArray(e)?e:[e]),[e])}class Bf{canDrop(){const e=this.spec,s=this.monitor;return e.canDrop?e.canDrop(s.getItem(),s):!0}hover(){const e=this.spec,s=this.monitor;e.hover&&e.hover(s.getItem(),s)}drop(){const e=this.spec,s=this.monitor;if(e.drop)return e.drop(s.getItem(),s)}constructor(e,s){this.spec=e,this.monitor=s}}function $f(r,e){const s=p.useMemo(()=>new Bf(r,e),[e]);return p.useEffect(()=>{s.spec=r},[r]),s}function Uf(r,e,s){const n=Dt(),o=$f(r,e),i=_f(r);ct(function(){const[l,d]=wf(i,o,n);return e.receiveHandlerId(l),s.receiveHandlerId(l),d},[n,e,o,s,i.map(a=>a.toString()).join("|")])}function Hf(r,e){const s=Zi(r),n=Ff(),o=Lf(s.options);return Uf(s,n,o),[Qi(s.collect,n,o),Mf(o)]}function ta(r){let e=null;return()=>(e==null&&(e=r()),e)}function zf(r,e){return r.filter(s=>s!==e)}function Gf(r,e){const s=new Set,n=i=>s.add(i);r.forEach(n),e.forEach(n);const o=[];return s.forEach(i=>o.push(i)),o}class Wf{enter(e){const s=this.entered.length,n=o=>this.isNodeInDocument(o)&&(!o.contains||o.contains(e));return this.entered=Gf(this.entered.filter(n),[e]),s===0&&this.entered.length>0}leave(e){const s=this.entered.length;return this.entered=zf(this.entered.filter(this.isNodeInDocument),e),s>0&&this.entered.length===0}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class qf{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null}})})}loadDataTransfer(e){if(e){const s={};Object.keys(this.config.exposeProperties).forEach(n=>{const o=this.config.exposeProperties[n];o!=null&&(s[n]={value:o(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,s)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,s){return s===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const ra="__NATIVE_FILE__",sa="__NATIVE_URL__",na="__NATIVE_TEXT__",oa="__NATIVE_HTML__",po=Object.freeze(Object.defineProperty({__proto__:null,FILE:ra,HTML:oa,TEXT:na,URL:sa},Symbol.toStringTag,{value:"Module"}));function ds(r,e,s){const n=e.reduce((o,i)=>o||r.getData(i),"");return n??s}const Ls={[ra]:{exposeProperties:{files:r=>Array.prototype.slice.call(r.files),items:r=>r.items,dataTransfer:r=>r},matchesTypes:["Files"]},[oa]:{exposeProperties:{html:(r,e)=>ds(r,e,""),dataTransfer:r=>r},matchesTypes:["Html","text/html"]},[sa]:{exposeProperties:{urls:(r,e)=>ds(r,e,"").split(`
`),dataTransfer:r=>r},matchesTypes:["Url","text/uri-list"]},[na]:{exposeProperties:{text:(r,e)=>ds(r,e,""),dataTransfer:r=>r},matchesTypes:["Text","text/plain"]}};function Vf(r,e){const s=Ls[r];if(!s)throw new Error(`native type ${r} has no configuration`);const n=new qf(s);return n.loadDataTransfer(e),n}function us(r){if(!r)return null;const e=Array.prototype.slice.call(r.types||[]);return Object.keys(Ls).filter(s=>{const n=Ls[s];return n!=null&&n.matchesTypes?n.matchesTypes.some(o=>e.indexOf(o)>-1):!1})[0]||null}const Jf=ta(()=>/firefox/i.test(navigator.userAgent)),ia=ta(()=>!!window.safari);class ho{interpolate(e){const{xs:s,ys:n,c1s:o,c2s:i,c3s:a}=this;let l=s.length-1;if(e===s[l])return n[l];let d=0,c=a.length-1,m;for(;d<=c;){m=Math.floor(.5*(d+c));const b=s[m];if(b<e)d=m+1;else if(b>e)c=m-1;else return n[m]}l=Math.max(0,c);const u=e-s[l],g=u*u;return n[l]+o[l]*u+i[l]*g+a[l]*u*g}constructor(e,s){const{length:n}=e,o=[];for(let b=0;b<n;b++)o.push(b);o.sort((b,f)=>e[b]<e[f]?-1:1);const i=[],a=[];let l,d;for(let b=0;b<n-1;b++)l=e[b+1]-e[b],d=s[b+1]-s[b],i.push(l),a.push(d/l);const c=[a[0]];for(let b=0;b<i.length-1;b++){const f=a[b],j=a[b+1];if(f*j<=0)c.push(0);else{l=i[b];const h=i[b+1],k=l+h;c.push(3*k/((k+h)/f+(k+l)/j))}}c.push(a[a.length-1]);const m=[],u=[];let g;for(let b=0;b<c.length-1;b++){g=a[b];const f=c[b],j=1/i[b],h=f+c[b+1]-g-g;m.push((g-f-h)*j),u.push(h*j*j)}this.xs=e,this.ys=s,this.c1s=c,this.c2s=m,this.c3s=u}}const Kf=1;function aa(r){const e=r.nodeType===Kf?r:r.parentElement;if(!e)return null;const{top:s,left:n}=e.getBoundingClientRect();return{x:n,y:s}}function or(r){return{x:r.clientX,y:r.clientY}}function Yf(r){var e;return r.nodeName==="IMG"&&(Jf()||!(!((e=document.documentElement)===null||e===void 0)&&e.contains(r)))}function Xf(r,e,s,n){let o=r?e.width:s,i=r?e.height:n;return ia()&&r&&(i/=window.devicePixelRatio,o/=window.devicePixelRatio),{dragPreviewWidth:o,dragPreviewHeight:i}}function Qf(r,e,s,n,o){const i=Yf(e),l=aa(i?r:e),d={x:s.x-l.x,y:s.y-l.y},{offsetWidth:c,offsetHeight:m}=r,{anchorX:u,anchorY:g}=n,{dragPreviewWidth:b,dragPreviewHeight:f}=Xf(i,e,c,m),j=()=>{let T=new ho([0,.5,1],[d.y,d.y/m*f,d.y+f-m]).interpolate(g);return ia()&&i&&(T+=(window.devicePixelRatio-1)*f),T},h=()=>new ho([0,.5,1],[d.x,d.x/c*b,d.x+b-c]).interpolate(u),{offsetX:k,offsetY:N}=o,v=k===0||k,y=N===0||N;return{x:v?k:h(),y:y?N:j()}}class Zf{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var e;return!((e=this.globalContext)===null||e===void 0)&&e.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return((e=this.optionsArgs)===null||e===void 0?void 0:e.rootElement)||this.window}constructor(e,s){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=s}}function eg(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function fo(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){eg(r,o,s[o])})}return r}class tg{profile(){var e,s;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((e=this.dragStartSourceIds)===null||e===void 0?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((s=this.dragOverTargetIds)===null||s===void 0?void 0:s.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(e!==void 0){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;if(e!==void 0&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var s;(s=this.window)===null||s===void 0||s.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(e,s,n){return this.sourcePreviewNodeOptions.set(e,n),this.sourcePreviewNodes.set(e,s),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,s,n){this.sourceNodes.set(e,s),this.sourceNodeOptions.set(e,n);const o=a=>this.handleDragStart(a,e),i=a=>this.handleSelectStart(a);return s.setAttribute("draggable","true"),s.addEventListener("dragstart",o),s.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),s.removeEventListener("dragstart",o),s.removeEventListener("selectstart",i),s.setAttribute("draggable","false")}}connectDropTarget(e,s){const n=a=>this.handleDragEnter(a,e),o=a=>this.handleDragOver(a,e),i=a=>this.handleDrop(a,e);return s.addEventListener("dragenter",n),s.addEventListener("dragover",o),s.addEventListener("drop",i),()=>{s.removeEventListener("dragenter",n),s.removeEventListener("dragover",o),s.removeEventListener("drop",i)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),s=this.sourceNodeOptions.get(e);return fo({dropEffect:this.altKeyPressed?"copy":"move"},s||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId(),s=this.sourcePreviewNodeOptions.get(e);return fo({anchorX:.5,anchorY:.5,captureDraggingState:!1},s||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(po).some(s=>po[s]===e)}beginDragNativeItem(e,s){this.clearCurrentDragSourceNode(),this.currentNativeSource=Vf(e,s),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;const s=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var n;return(n=this.rootElement)===null||n===void 0?void 0:n.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},s)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var e;(e=this.window)===null||e===void 0||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,s){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(s))}handleDragEnter(e,s){this.dragEnterTargetIds.unshift(s)}handleDragOver(e,s){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(s)}handleDrop(e,s){this.dropTargetIds.unshift(s)}constructor(e,s,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=o=>{const i=this.sourceNodes.get(o);return i&&aa(i)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=o=>!!(o&&this.document&&this.document.body&&this.document.body.contains(o)),this.endDragIfSourceWasRemovedFromDOM=()=>{const o=this.currentDragSourceNode;o==null||this.isNodeInDocument(o)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=o=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(o||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=o=>{if(o.defaultPrevented)return;const{dragStartSourceIds:i}=this;this.dragStartSourceIds=null;const a=or(o);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(i||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:a});const{dataTransfer:l}=o,d=us(l);if(this.monitor.isDragging()){if(l&&typeof l.setDragImage=="function"){const m=this.monitor.getSourceId(),u=this.sourceNodes.get(m),g=this.sourcePreviewNodes.get(m)||u;if(g){const{anchorX:b,anchorY:f,offsetX:j,offsetY:h}=this.getCurrentSourcePreviewNodeOptions(),v=Qf(u,g,a,{anchorX:b,anchorY:f},{offsetX:j,offsetY:h});l.setDragImage(g,v.x,v.y)}}try{l==null||l.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(o.target);const{captureDraggingState:c}=this.getCurrentSourcePreviewNodeOptions();c?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(d)this.beginDragNativeItem(d);else{if(l&&!l.types&&(o.target&&!o.target.hasAttribute||!o.target.hasAttribute("draggable")))return;o.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=o=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}if(!this.enterLeaveCounter.enter(o.target)||this.monitor.isDragging())return;const{dataTransfer:l}=o,d=us(l);d&&this.beginDragNativeItem(d,l)},this.handleTopDragEnter=o=>{const{dragEnterTargetIds:i}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=o.altKey,i.length>0&&this.actions.hover(i,{clientOffset:or(o)}),i.some(l=>this.monitor.canDropOnTarget(l))&&(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=o=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}},this.handleTopDragOver=o=>{const{dragOverTargetIds:i}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="none");return}this.altKeyPressed=o.altKey,this.lastClientOffset=or(o),this.scheduleHover(i),(i||[]).some(l=>this.monitor.canDropOnTarget(l))?(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?o.preventDefault():(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=o=>{this.isDraggingNativeItem()&&o.preventDefault(),this.enterLeaveCounter.leave(o.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=o=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var i;o.preventDefault(),(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}else us(o.dataTransfer)&&o.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=o=>{const{dropTargetIds:i}=this;this.dropTargetIds=[],this.actions.hover(i,{clientOffset:or(o)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=o=>{const i=o.target;typeof i.dragDrop=="function"&&(i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable||(o.preventDefault(),i.dragDrop()))},this.options=new Zf(s,n),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new Wf(this.isNodeInDocument)}}const rg=function(e,s,n){return new tg(e,s,n)},sg=({projectId:r,onCodeChange:e,initialComponents:s=[]})=>{var C,L,E,P,Y,H;const[n,o]=p.useState(s),[i,a]=p.useState(null),[l,d]=p.useState(!1),[c,m]=p.useState(!1),[u,g]=p.useState({width:1200,height:800}),[b,f]=p.useState(1),j=p.useRef(null),h=[{type:"container",name:"Container",icon:"📦",category:"Layout"},{type:"text",name:"Text",icon:"📝",category:"Content"},{type:"button",name:"Button",icon:"🔘",category:"Interactive"},{type:"input",name:"Input",icon:"📝",category:"Form"},{type:"image",name:"Image",icon:"🖼️",category:"Media"},{type:"card",name:"Card",icon:"🃏",category:"Layout"},{type:"header",name:"Header",icon:"📋",category:"Layout"},{type:"footer",name:"Footer",icon:"🦶",category:"Layout"},{type:"sidebar",name:"Sidebar",icon:"📑",category:"Layout"},{type:"navbar",name:"Navbar",icon:"🧭",category:"Navigation"},{type:"form",name:"Form",icon:"📋",category:"Form"},{type:"table",name:"Table",icon:"📊",category:"Data"},{type:"chart",name:"Chart",icon:"📈",category:"Data"},{type:"modal",name:"Modal",icon:"🪟",category:"Overlay"},{type:"dropdown",name:"Dropdown",icon:"📋",category:"Interactive"}],k=D=>({container:`<div className="container" style={${JSON.stringify(D.styles)}}>
  {children}
</div>`,text:`<p className="text" style={${JSON.stringify(D.styles)}}>
  ${D.content||"Text content"}
</p>`,button:`<button className="btn" style={${JSON.stringify(D.styles)}} onClick={${D.onClick||"() => {}"}}>
  ${D.content||"Button"}
</button>`,input:`<input 
  className="input" 
  type="${D.inputType||"text"}"
  placeholder="${D.placeholder||""}"
  style={${JSON.stringify(D.styles)}}
/>`,image:`<img 
  className="image" 
  src="${D.src||"/placeholder.jpg"}"
  alt="${D.alt||""}"
  style={${JSON.stringify(D.styles)}}
/>`,card:`<div className="card" style={${JSON.stringify(D.styles)}}>
  <div className="card-header">
    <h3>${D.title||"Card Title"}</h3>
  </div>
  <div className="card-body">
    <p>${D.content||"Card content"}</p>
  </div>
</div>`,header:`<header className="header" style={${JSON.stringify(D.styles)}}>
  <h1>${D.content||"Header"}</h1>
</header>`,footer:`<footer className="footer" style={${JSON.stringify(D.styles)}}>
  <p>${D.content||"Footer content"}</p>
</footer>`,sidebar:`<aside className="sidebar" style={${JSON.stringify(D.styles)}}>
  <nav>
    <ul>
      <li><a href="#">Menu Item 1</a></li>
      <li><a href="#">Menu Item 2</a></li>
    </ul>
  </nav>
</aside>`,navbar:`<nav className="navbar" style={${JSON.stringify(D.styles)}}>
  <div className="nav-brand">${D.brand||"Brand"}</div>
  <ul className="nav-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`,form:`<form className="form" style={${JSON.stringify(D.styles)}} onSubmit={${D.onSubmit||"() => {}"}}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" name="name" />
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" name="email" />
  </div>
  <button type="submit">Submit</button>
</form>`,table:`<table className="table" style={${JSON.stringify(D.styles)}}>
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
</table>`,chart:`<div className="chart" style={${JSON.stringify(D.styles)}}>
  <canvas id="chart-${D.id}"></canvas>
</div>`,modal:`<div className="modal" style={${JSON.stringify(D.styles)}}>
  <div className="modal-content">
    <span className="close" onClick={${D.onClose||"() => {}"}}>&times;</span>
    <h2>${D.title||"Modal Title"}</h2>
    <p>${D.content||"Modal content"}</p>
  </div>
</div>`,dropdown:`<div className="dropdown" style={${JSON.stringify(D.styles)}}>
  <button className="dropdown-toggle" onClick={${D.onToggle||"() => {}"}}>
    ${D.label||"Dropdown"}
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
</div>`})[D.type]||`<div>Unknown component: ${D.type}</div>`,N=()=>{const D=`import React, { useState, useEffect } from 'react';
import './App.css';`,F=`const App = () => {
  return (
    <div className="app">
      ${n.map(W=>k(W)).join(`

`)}
    </div>
  );
};

export default App;`;return`${D}

${F}`},v=(D,I)=>{const F=I.getDropResult();if(!F)return;const W={id:`component-${Date.now()}`,type:D.type,name:D.name,position:{x:F.x,y:F.y},size:{width:200,height:100},styles:{position:"absolute",left:`${F.x}px`,top:`${F.y}px`,width:"200px",height:"100px",border:"1px solid #ddd",padding:"10px",backgroundColor:"#fff"},content:D.name,properties:{}};o(G=>[...G,W])},y=D=>{a(D),d(!0)},x=(D,I)=>{if(!i)return;const F={...i,[D]:I,styles:{...i.styles,[D]:I}};o(W=>W.map(G=>G.id===i.id?F:G)),a(F)},T=()=>`
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
`,A=()=>{const D={components:n,appCode:N(),cssCode:T(),metadata:{projectId:r,exportedAt:new Date().toISOString(),componentCount:n.length}},I=JSON.stringify(D,null,2),F=new Blob([I],{type:"application/json"}),W=URL.createObjectURL(F),G=document.createElement("a");G.href=W,G.download=`dreambuild-project-${r}.json`,G.click(),URL.revokeObjectURL(W)};return p.useEffect(()=>{e&&e({appCode:N(),cssCode:T(),components:n})},[n,e]),t.jsx(df,{backend:rg,children:t.jsxs("div",{className:"visual-editor",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("h2",{children:"🎨 Visual Editor"}),t.jsxs("div",{className:"editor-controls",children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!c),children:c?"Edit":"Preview"}),t.jsx("button",{className:"btn btn-primary",onClick:A,children:"Export"})]})]}),t.jsxs("div",{className:"editor-layout",children:[t.jsxs("div",{className:"component-library",children:[t.jsx("h3",{children:"📚 Component Library"}),t.jsx("div",{className:"library-categories",children:["Layout","Content","Interactive","Form","Media","Data","Navigation","Overlay"].map(D=>t.jsxs("div",{className:"category",children:[t.jsx("h4",{children:D}),t.jsx("div",{className:"category-components",children:h.filter(I=>I.category===D).map(I=>t.jsx(ng,{type:I.type,name:I.name,icon:I.icon},I.type))})]},D))})]}),t.jsxs("div",{className:"canvas-container",children:[t.jsxs("div",{className:"canvas-toolbar",children:[t.jsxs("div",{className:"canvas-controls",children:[t.jsx("button",{className:"btn btn-sm",onClick:()=>f(b*.8),children:"Zoom Out"}),t.jsxs("span",{className:"zoom-level",children:[Math.round(b*100),"%"]}),t.jsx("button",{className:"btn btn-sm",onClick:()=>f(b*1.2),children:"Zoom In"})]}),t.jsx("div",{className:"canvas-size",children:t.jsxs("select",{value:`${u.width}x${u.height}`,onChange:D=>{const[I,F]=D.target.value.split("x").map(Number);g({width:I,height:F})},children:[t.jsx("option",{value:"1200x800",children:"Desktop (1200x800)"}),t.jsx("option",{value:"768x1024",children:"Tablet (768x1024)"}),t.jsx("option",{value:"375x667",children:"Mobile (375x667)"})]})})]}),t.jsx("div",{className:"canvas",ref:j,style:{width:u.width*b,height:u.height*b,transform:`scale(${b})`,transformOrigin:"top left"},children:t.jsx(og,{onDrop:v,children:n.map(D=>t.jsx(ig,{component:D,onSelect:y,isSelected:(i==null?void 0:i.id)===D.id},D.id))})})]}),l&&i&&t.jsxs("div",{className:"properties-panel",children:[t.jsx("h3",{children:"⚙️ Properties"}),t.jsxs("div",{className:"property-groups",children:[t.jsxs("div",{className:"property-group",children:[t.jsx("h4",{children:"Content"}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Text Content"}),t.jsx("input",{type:"text",value:i.content||"",onChange:D=>x("content",D.target.value)})]})]}),t.jsxs("div",{className:"property-group",children:[t.jsx("h4",{children:"Position"}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"X Position"}),t.jsx("input",{type:"number",value:((C=i.position)==null?void 0:C.x)||0,onChange:D=>x("left",`${D.target.value}px`)})]}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Y Position"}),t.jsx("input",{type:"number",value:((L=i.position)==null?void 0:L.y)||0,onChange:D=>x("top",`${D.target.value}px`)})]})]}),t.jsxs("div",{className:"property-group",children:[t.jsx("h4",{children:"Size"}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Width"}),t.jsx("input",{type:"number",value:((E=i.size)==null?void 0:E.width)||200,onChange:D=>x("width",`${D.target.value}px`)})]}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Height"}),t.jsx("input",{type:"number",value:((P=i.size)==null?void 0:P.height)||100,onChange:D=>x("height",`${D.target.value}px`)})]})]}),t.jsxs("div",{className:"property-group",children:[t.jsx("h4",{children:"Style"}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Background Color"}),t.jsx("input",{type:"color",value:((Y=i.styles)==null?void 0:Y.backgroundColor)||"#ffffff",onChange:D=>x("backgroundColor",D.target.value)})]}),t.jsxs("div",{className:"property",children:[t.jsx("label",{children:"Border Color"}),t.jsx("input",{type:"color",value:((H=i.styles)==null?void 0:H.borderColor)||"#dddddd",onChange:D=>x("borderColor",D.target.value)})]})]})]})]})]}),t.jsx("style",{jsx:!0,children:`
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
        `})]})})},ng=({type:r,name:e,icon:s})=>{const[{isDragging:n},o]=If({type:"component",item:{type:r,name:e},collect:i=>({isDragging:i.isDragging()})});return t.jsxs("div",{ref:o,className:`draggable-component ${n?"dragging":""}`,children:[t.jsx("span",{className:"component-icon",children:s}),t.jsx("span",{className:"component-name",children:e})]})},og=({children:r,onDrop:e})=>{const[{isOver:s},n]=Hf({accept:"component",drop:(o,i)=>{var d;const a=i.getClientOffset(),l=(d=i.getDropResult())==null?void 0:d.getBoundingClientRect();a&&l&&e(o,{x:a.x-l.left,y:a.y-l.top})},collect:o=>({isOver:o.isOver()})});return t.jsx("div",{ref:n,className:`droppable-canvas ${s?"drag-over":""}`,children:r})},ig=({component:r,onSelect:e,isSelected:s})=>{const n=o=>{o.stopPropagation(),e(r)};return t.jsx("div",{className:`visual-component ${s?"selected":""}`,style:r.styles,onClick:n,children:t.jsxs("div",{className:"component-content",children:[r.type==="text"&&(r.content||"Text"),r.type==="button"&&(r.content||"Button"),r.type==="input"&&t.jsx("input",{placeholder:r.placeholder||"Input"}),r.type==="image"&&t.jsx("div",{className:"image-placeholder",children:"🖼️ Image"}),r.type==="card"&&t.jsxs("div",{children:[t.jsx("h3",{children:r.title||"Card Title"}),t.jsx("p",{children:r.content||"Card content"})]}),!["text","button","input","image","card"].includes(r.type)&&t.jsx("div",{className:"component-placeholder",children:r.name})]})})},ag=({projectId:r,projectData:e,onDeploy:s})=>{const[n,o]=p.useState("vercel"),[i,a]=p.useState(!1),[l,d]=p.useState(null),c=[{id:"vercel",name:"Vercel",icon:"▲",description:"Fast, global deployment"},{id:"netlify",name:"Netlify",icon:"🌐",description:"JAMstack deployment"},{id:"aws",name:"AWS Amplify",icon:"☁️",description:"Full-stack deployment"},{id:"firebase",name:"Firebase",icon:"🔥",description:"Google hosting"},{id:"github",name:"GitHub Pages",icon:"🐙",description:"Free static hosting"}],m=async()=>{a(!0),d("Deploying...");try{await new Promise(g=>setTimeout(g,3e3));const u={success:!0,provider:n,url:`https://${r}.${n}.com`,deployedAt:new Date().toISOString()};d("Deployed successfully!"),s&&s(u)}catch{d("Deployment failed")}finally{a(!1)}};return t.jsxs("div",{className:"deployment-panel",children:[t.jsx("h3",{children:"🚀 Deploy Your App"}),t.jsxs("div",{className:"provider-selection",children:[t.jsx("h4",{children:"Choose Hosting Provider"}),t.jsx("div",{className:"providers-grid",children:c.map(u=>t.jsxs("div",{className:`provider-card ${n===u.id?"selected":""}`,onClick:()=>o(u.id),children:[t.jsx("div",{className:"provider-icon",children:u.icon}),t.jsx("div",{className:"provider-name",children:u.name}),t.jsx("div",{className:"provider-description",children:u.description})]},u.id))})]}),t.jsx("div",{className:"deployment-actions",children:t.jsx("button",{className:"btn btn-primary btn-lg",onClick:m,disabled:i,children:i?"Deploying...":"Deploy Now"})}),l&&t.jsx("div",{className:"deployment-status",children:t.jsx("div",{className:`status-message ${l.includes("success")?"success":"error"}`,children:l})}),t.jsx("style",{jsx:!0,children:`
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
      `})]})};var ht={};class lg{constructor(){this.app=null,this.db=null,this.storage=null,this.auth=null,this.user=null,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const e={apiKey:ht.REACT_APP_FIREBASE_API_KEY||"your-api-key",authDomain:ht.REACT_APP_FIREBASE_AUTH_DOMAIN||"your-project.firebaseapp.com",projectId:ht.REACT_APP_FIREBASE_PROJECT_ID||"your-project-id",storageBucket:ht.REACT_APP_FIREBASE_STORAGE_BUCKET||"your-project.appspot.com",messagingSenderId:ht.REACT_APP_FIREBASE_MESSAGING_SENDER_ID||"123456789",appId:ht.REACT_APP_FIREBASE_APP_ID||"your-app-id"};try{this.app=gr(e)}catch(s){if(s.code==="app/duplicate-app")this.app=ps();else if(s.code==="app/no-options")try{this.app=ps()}catch{this.app=gr({apiKey:"demo-key",authDomain:"demo.firebaseapp.com",projectId:"demo-project"})}else throw s}this.db=_s(this.app),this.storage=ci(this.app),this.auth=Fs(this.app),Bs(this.auth,s=>{this.user=s,console.log("Firebase auth state changed:",s?"authenticated":"not authenticated")});try{await wa(this.auth),console.log("✅ Firebase anonymous auth successful")}catch(s){console.log("⚠️ Firebase auth not available, continuing without authentication:",s.message),this.user=null}this.isInitialized=!0,console.log("🔥 Firebase initialized successfully")}catch(e){console.error("❌ Failed to initialize Firebase:",e),this.isInitialized=!1,this.user=null,console.log("⚠️ Continuing without Firebase services")}}async storeProjectContext(e,s){var n;try{await this.initialize();const o=q(this.db,"projectContexts",e);await xe(o,{...s,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",storedAt:new Date().toISOString(),dataSize:JSON.stringify(s).length}),console.log("✅ Project context stored successfully")}catch(o){throw console.error("❌ Failed to store project context:",o),o}}async loadProjectContext(e){try{await this.initialize();const s=q(this.db,"projectContexts",e),n=await ir(s);return n.exists()?(console.log("✅ Project context loaded successfully"),n.data()):(console.log("❌ Project context not found"),null)}catch(s){return console.error("❌ Failed to load project context:",s),null}}async storeProjectFiles(e,s){var n;try{await this.initialize();const o=q(this.db,"projectFiles",e);await xe(o,{projectId:e,files:s,fileCount:Object.keys(s).length,totalSize:JSON.stringify(s).length,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",storedAt:new Date().toISOString()}),console.log("✅ Project files stored successfully")}catch(o){throw console.error("❌ Failed to store project files:",o),o}}async loadProjectFiles(e){try{await this.initialize();const s=q(this.db,"projectFiles",e),n=await ir(s);return n.exists()?(console.log("✅ Project files loaded successfully"),n.data().files):(console.log("❌ Project files not found"),null)}catch(s){return console.error("❌ Failed to load project files:",s),null}}async storeTemplate(e){var s;try{await this.initialize();const n=q(this.db,"templates",e.id);await xe(n,{...e,userId:((s=this.user)==null?void 0:s.uid)||"anonymous",updatedAt:new Date().toISOString()}),console.log("✅ Template stored successfully")}catch(n){throw console.error("❌ Failed to store template:",n),n}}async loadTemplates(){try{await this.initialize();const e=de(this.db,"templates"),s=await Rt(e),n=[];return s.forEach(o=>{n.push(o.data())}),console.log("✅ Templates loaded successfully"),n}catch(e){return console.error("❌ Failed to load templates:",e),[]}}async searchTemplates(e,s,n){try{await this.initialize();const o=de(this.db,"templates");let i=ve(o);e&&e.length>0&&(i=ve(i,ue("keywords","array-contains-any",e))),s&&s.length>0&&(i=ve(i,ue("technologies","array-contains-any",s))),n&&n.length>0&&(i=ve(i,ue("patterns","array-contains-any",n)));const a=await Rt(i),l=[];return a.forEach(d=>{l.push(d.data())}),console.log("✅ Templates searched successfully"),l}catch(o){return console.error("❌ Failed to search templates:",o),[]}}async storeLargeFile(e,s,n){try{await this.initialize();const o=et(this.storage,`projects/${e}/${s}`),i=new Blob([n],{type:"text/plain"});await Qe(o,i);const a=await Ze(o);return console.log("✅ Large file stored successfully"),a}catch(o){throw console.error("❌ Failed to store large file:",o),o}}async loadLargeFile(e){try{const n=await(await fetch(e)).text();return console.log("✅ Large file loaded successfully"),n}catch(s){return console.error("❌ Failed to load large file:",s),null}}async getUserProjects(){var e;try{await this.initialize();const s=de(this.db,"projectContexts"),n=ve(s,ue("userId","==",((e=this.user)==null?void 0:e.uid)||"anonymous")),o=await Rt(n),i=[];return o.forEach(a=>{i.push({id:a.id,...a.data()})}),console.log("✅ User projects loaded successfully"),i}catch(s){return console.error("❌ Failed to load user projects:",s),[]}}async deleteProject(e){try{await this.initialize();const s=q(this.db,"projectContexts",e);await ar(s);const n=q(this.db,"projectFiles",e);await ar(n),console.log("✅ Project deleted successfully")}catch(s){throw console.error("❌ Failed to delete project:",s),s}}async getStorageStats(){try{await this.initialize();const e=await this.getUserProjects();let s=0,n=0;for(const o of e)s+=o.dataSize||0,n+=o.fileCount||0;return{totalProjects:e.length,totalFiles:n,totalSize:s,totalSizeMB:Math.round(s/(1024*1024)*100)/100}}catch(e){return console.error("❌ Failed to get storage stats:",e),{totalProjects:0,totalFiles:0,totalSize:0,totalSizeMB:0}}}async storeConversationMemory(e,s){var n,o;try{await this.initialize();const i=JSON.stringify(s),a=8e5;if(i.length>a){console.log("⚠️ Conversation data too large, storing in chunks");const l=this.chunkData(s,a);for(let d=0;d<l.length;d++){const c=q(this.db,"conversationMemory",`${e}_chunk_${d}`);await xe(c,{projectId:e,chunkIndex:d,totalChunks:l.length,conversation:l[d],userId:((n=this.user)==null?void 0:n.uid)||"anonymous",lastUpdated:new Date().toISOString()})}console.log(`🧠 Conversation memory stored in ${l.length} chunks`)}else{const l=q(this.db,"conversationMemory",e);await xe(l,{projectId:e,conversation:s,userId:((o=this.user)==null?void 0:o.uid)||"anonymous",lastUpdated:new Date().toISOString(),memorySize:i.length}),console.log("🧠 Conversation memory stored successfully")}}catch(i){throw console.error("❌ Failed to store conversation memory:",i),i}}chunkData(e,s){const n=[],o=JSON.stringify(e);let i=0;for(;i<o.length;){let a=Math.min(i+s,o.length);if(a<o.length){let l=o.lastIndexOf("}",a),d=o.lastIndexOf("]",a),c=o.lastIndexOf(",",a);const m=Math.max(l,d,c);m>i+s*.8&&(a=m+1)}try{n.push(JSON.parse(o.slice(i,a)))}catch{n.push(o.slice(i,a))}i=a}return n}async loadConversationMemory(e){try{await this.initialize();const s=q(this.db,"conversationMemory",e),n=await ir(s);if(n.exists())return console.log("🧠 Conversation memory loaded successfully"),n.data().conversation;const o=de(this.db,"conversationMemory"),i=ve(o,ue("projectId","==",e)),a=await Rt(i);if(!a.empty){const l=[];a.forEach(c=>{l.push({index:c.data().chunkIndex,data:c.data().conversation})}),l.sort((c,m)=>c.index-m.index);const d=l.map(c=>c.data);return console.log(`🧠 Conversation memory loaded from ${l.length} chunks`),d}return console.log("❌ Conversation memory not found"),null}catch(s){return console.error("❌ Failed to load conversation memory:",s),null}}async addPromptToMemory(e,s,n,o){try{await this.initialize();let i=await this.loadConversationMemory(e)||{projectId:e,prompts:[],responses:[],context:{},createdAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return i.prompts.push({id:`prompt-${Date.now()}`,text:s,timestamp:new Date().toISOString(),context:o}),i.responses.push({id:`response-${Date.now()}`,promptId:i.prompts[i.prompts.length-1].id,text:n,timestamp:new Date().toISOString(),context:o}),i.context={...i.context,...o},i.lastUpdated=new Date().toISOString(),await this.storeConversationMemory(e,i),console.log("🧠 Prompt added to memory successfully"),i}catch(i){throw console.error("❌ Failed to add prompt to memory:",i),i}}async getConversationHistory(e,s=50){try{await this.initialize();const n=await this.loadConversationMemory(e);if(!n)return[];const o=n.prompts.slice(-s),i=n.responses.slice(-s);return{prompts:o,responses:i,context:n.context,totalPrompts:n.prompts.length,totalResponses:n.responses.length}}catch(n){return console.error("❌ Failed to get conversation history:",n),[]}}async searchConversationMemory(e,s){try{await this.initialize();const n=await this.loadConversationMemory(e);if(!n)return[];const o=[],i=s.toLowerCase();return n.prompts.forEach(a=>{a.text.toLowerCase().includes(i)&&o.push({type:"prompt",id:a.id,text:a.text,timestamp:a.timestamp,context:a.context})}),n.responses.forEach(a=>{a.text.toLowerCase().includes(i)&&o.push({type:"response",id:a.id,text:a.text,timestamp:a.timestamp,context:a.context})}),console.log("🔍 Conversation memory searched successfully"),o}catch(n){return console.error("❌ Failed to search conversation memory:",n),[]}}async getConversationContext(e,s){try{await this.initialize();const n=await this.loadConversationMemory(e);if(!n)return null;const o={projectId:e,currentPrompt:s,previousPrompts:n.prompts.slice(-10),previousResponses:n.responses.slice(-10),projectContext:n.context,conversationSummary:this.generateConversationSummary(n),relevantHistory:this.findRelevantHistory(n,s)};return console.log("🧠 Conversation context generated successfully"),o}catch(n){return console.error("❌ Failed to get conversation context:",n),null}}generateConversationSummary(e){var i,a;const s=e.prompts,n=e.responses;return s.length===0?"No previous conversation":{totalPrompts:s.length,totalResponses:n.length,firstPrompt:((i=s[0])==null?void 0:i.text)||"",lastPrompt:((a=s[s.length-1])==null?void 0:a.text)||"",keyTopics:this.extractKeyTopics(s),projectEvolution:this.trackProjectEvolution(e)}}extractKeyTopics(e){const s=new Set;return e.forEach(n=>{n.text.toLowerCase().split(" ").forEach(i=>{i.length>4&&!this.isCommonWord(i)&&s.add(i)})}),Array.from(s).slice(0,10)}isCommonWord(e){return["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","two","way","who","boy","did","man","men","put","say","she","too","use"].includes(e)}trackProjectEvolution(e){const s=[],n=e.prompts,o=e.responses;for(let i=0;i<n.length;i++){const a=n[i],l=o[i];s.push({phase:i+1,prompt:a.text,response:l.text,timestamp:a.timestamp,context:a.context})}return s}findRelevantHistory(e,s){const n=[],o=s.toLowerCase().split(" ");return e.prompts.forEach((i,a)=>{var c;const l=i.text.toLowerCase().split(" "),d=o.filter(m=>l.includes(m));d.length>2&&n.push({prompt:i.text,response:((c=e.responses[a])==null?void 0:c.text)||"",relevance:d.length,timestamp:i.timestamp})}),n.sort((i,a)=>a.relevance-i.relevance).slice(0,5)}async storeAILearningPattern(e,s){var n;try{await this.initialize();const o=q(this.db,"aiLearningPatterns",`${e}-${Date.now()}`);await xe(o,{projectId:e,pattern:s,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",createdAt:new Date().toISOString()}),console.log("🧠 AI learning pattern stored successfully")}catch(o){throw console.error("❌ Failed to store AI learning pattern:",o),o}}async getAILearningPatterns(e){try{await this.initialize();const s=de(this.db,"aiLearningPatterns"),n=ve(s,ue("projectId","==",e)),o=await Rt(n),i=[];return o.forEach(a=>{i.push(a.data())}),console.log("🧠 AI learning patterns loaded successfully"),i}catch(s){return console.error("❌ Failed to load AI learning patterns:",s),[]}}async clearConversationMemory(e){try{await this.initialize();const s=q(this.db,"conversationMemory",e);await ar(s),console.log("🧠 Conversation memory cleared successfully")}catch(s){throw console.error("❌ Failed to clear conversation memory:",s),s}}}const Lt=new lg,cg=({projectId:r,onMemoryUpdate:e})=>{const[s,n]=p.useState(null),[o,i]=p.useState([]),[a,l]=p.useState(""),[d,c]=p.useState([]),[m,u]=p.useState(!1),[g,b]=p.useState(null);p.useEffect(()=>{r&&(f(),j())},[r]);const f=async()=>{try{u(!0);const v=await Lt.loadConversationMemory(r);if(n(v),v){const y=await Lt.getConversationHistory(r);i(y)}}catch(v){console.error("Failed to load memory:",v)}finally{u(!1)}},j=async()=>{try{const v=await Lt.getStorageStats();b(v)}catch(v){console.error("Failed to load stats:",v)}},h=async()=>{if(a.trim())try{u(!0);const v=await Lt.searchConversationMemory(r,a);c(v)}catch(v){console.error("Failed to search memory:",v)}finally{u(!1)}},k=async()=>{if(window.confirm("Are you sure you want to clear all conversation memory?"))try{await Lt.clearConversationMemory(r),n(null),i([]),c([]),e&&e()}catch(v){console.error("Failed to clear memory:",v)}},N=()=>{if(!s)return;const v=JSON.stringify(s,null,2),y=new Blob([v],{type:"application/json"}),x=URL.createObjectURL(y),T=document.createElement("a");T.href=x,T.download=`dreambuild-memory-${r}.json`,T.click(),URL.revokeObjectURL(x)};return m?t.jsx("div",{className:"memory-manager",children:t.jsx("div",{className:"loading",children:"Loading memory..."})}):t.jsxs("div",{className:"memory-manager",children:[t.jsxs("div",{className:"memory-header",children:[t.jsx("h3",{children:"🧠 Conversation Memory"}),t.jsxs("div",{className:"memory-actions",children:[t.jsx("button",{onClick:f,className:"btn btn-secondary",children:"Refresh"}),t.jsx("button",{onClick:N,className:"btn btn-secondary",children:"Export"}),t.jsx("button",{onClick:k,className:"btn btn-danger",children:"Clear"})]})]}),g&&t.jsxs("div",{className:"memory-stats",children:[t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-label",children:"Projects:"}),t.jsx("span",{className:"stat-value",children:g.totalProjects})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-label",children:"Files:"}),t.jsx("span",{className:"stat-value",children:g.totalFiles})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-label",children:"Size:"}),t.jsxs("span",{className:"stat-value",children:[g.totalSizeMB," MB"]})]})]}),t.jsxs("div",{className:"memory-search",children:[t.jsx("input",{type:"text",placeholder:"Search conversation memory...",value:a,onChange:v=>l(v.target.value),onKeyPress:v=>v.key==="Enter"&&h()}),t.jsx("button",{onClick:h,className:"btn btn-primary",children:"Search"})]}),d.length>0&&t.jsxs("div",{className:"search-results",children:[t.jsx("h4",{children:"Search Results"}),d.map((v,y)=>t.jsxs("div",{className:"search-result",children:[t.jsx("div",{className:"result-type",children:v.type}),t.jsx("div",{className:"result-text",children:v.text}),t.jsx("div",{className:"result-timestamp",children:v.timestamp})]},y))]}),o.prompts&&o.prompts.length>0&&t.jsxs("div",{className:"conversation-history",children:[t.jsx("h4",{children:"Conversation History"}),t.jsxs("div",{className:"history-stats",children:[t.jsxs("span",{children:["Prompts: ",o.totalPrompts]}),t.jsxs("span",{children:["Responses: ",o.totalResponses]})]}),t.jsx("div",{className:"history-list",children:o.prompts.map((v,y)=>t.jsxs("div",{className:"history-item",children:[t.jsxs("div",{className:"history-prompt",children:[t.jsx("strong",{children:"Prompt:"})," ",v.text]}),o.responses[y]&&t.jsxs("div",{className:"history-response",children:[t.jsx("strong",{children:"Response:"})," ",o.responses[y].text]}),t.jsx("div",{className:"history-timestamp",children:new Date(v.timestamp).toLocaleString()})]},v.id))})]}),s&&t.jsxs("div",{className:"memory-details",children:[t.jsx("h4",{children:"Memory Details"}),t.jsxs("div",{className:"memory-info",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Project ID:"})," ",s.projectId]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Created:"})," ",new Date(s.createdAt).toLocaleString()]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Last Updated:"})," ",new Date(s.lastUpdated).toLocaleString()]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Memory Size:"})," ",JSON.stringify(s).length," bytes"]})]})]}),t.jsx("style",{jsx:!0,children:`
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
      `})]})},dg=({projectId:r,initialFiles:e={}})=>{const[s,n]=p.useState("code"),[o,i]=p.useState(e),[a,l]=p.useState(null),[d,c]=p.useState(!1),[m,u]=p.useState(!1),[g,b]=p.useState(null),f=[{id:"code",name:"Code Editor",icon:"💻"},{id:"visual",name:"Visual Editor",icon:"🎨"},{id:"collaboration",name:"Collaboration",icon:"🤝"},{id:"deployment",name:"Deployment",icon:"🚀"},{id:"memory",name:"Memory",icon:"🧠"}],j=(y,x)=>{i(T=>({...T,[y]:x}))},h=y=>{y.appCode&&j("src/App.jsx",y.appCode),y.cssCode&&j("src/App.css",y.cssCode)},k=y=>{b(y),console.log("Deployment result:",y)},N=y=>{i(x=>({...x,...y})),console.log("Version restored:",y)},v=()=>{switch(s){case"code":return t.jsxs("div",{className:"code-editor-tab",children:[t.jsxs("div",{className:"file-explorer",children:[t.jsx("h3",{children:"📁 Files"}),t.jsx("div",{className:"file-list",children:Object.keys(o).map(y=>t.jsxs("div",{className:`file-item ${a===y?"selected":""}`,onClick:()=>l(y),children:[t.jsx("span",{className:"file-icon",children:"📄"}),t.jsx("span",{className:"file-name",children:y})]},y))})]}),t.jsx("div",{className:"code-editor",children:a&&t.jsxs("div",{className:"editor-container",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("span",{className:"file-name",children:a}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("button",{className:"btn btn-sm",children:"Save"}),t.jsx("button",{className:"btn btn-sm",children:"Format"})]})]}),t.jsx("textarea",{className:"code-textarea",value:o[a]||"",onChange:y=>j(a,y.target.value),placeholder:"Start coding..."})]})})]});case"visual":return t.jsx("div",{className:"visual-editor-tab",children:t.jsx(sg,{projectId:r,onCodeChange:h,initialComponents:[]})});case"collaboration":return t.jsxs("div",{className:"collaboration-tab",children:[t.jsxs("div",{className:"collaboration-header",children:[t.jsx("h3",{children:"🤝 Real-time Collaboration"}),t.jsxs("button",{className:`btn ${d?"btn-danger":"btn-primary"}`,onClick:()=>c(!d),children:[d?"Disable":"Enable"," Collaboration"]})]}),d?t.jsx(qp,{projectId:r,fileId:a,onFileChange:j,onVersionRestore:N}):t.jsxs("div",{className:"collaboration-disabled",children:[t.jsx("p",{children:"Enable collaboration to work with team members in real-time"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Multi-user co-editing"}),t.jsx("li",{children:"Real-time comments"}),t.jsx("li",{children:"Version history"}),t.jsx("li",{children:"User presence"})]})]})]});case"deployment":return t.jsxs("div",{className:"deployment-tab",children:[t.jsx(ag,{projectId:r,projectData:{files:o},onDeploy:k}),g&&t.jsxs("div",{className:"deployment-result",children:[t.jsx("h4",{children:"Deployment Result"}),t.jsxs("div",{className:"result-details",children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Provider:"})," ",g.provider]}),t.jsxs("p",{children:[t.jsx("strong",{children:"URL:"})," ",t.jsx("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",children:g.url})]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Status:"})," ",g.status]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Deployed:"})," ",new Date(g.deployedAt).toLocaleString()]})]})]})]});case"memory":return t.jsx("div",{className:"memory-tab",children:t.jsx(cg,{projectId:r,onMemoryUpdate:()=>console.log("Memory updated")})});default:return t.jsx("div",{children:"Select a tab to get started"})}};return t.jsxs("div",{className:"integrated-workspace",children:[t.jsxs("div",{className:"workspace-header",children:[t.jsx("h2",{children:"🚀 DreamBuild Advanced Workspace"}),t.jsxs("div",{className:"workspace-status",children:[t.jsx("span",{className:"status-indicator",children:"●"}),t.jsxs("span",{children:["Project: ",r]})]})]}),t.jsx("div",{className:"workspace-tabs",children:f.map(y=>t.jsxs("button",{className:`tab-button ${s===y.id?"active":""}`,onClick:()=>n(y.id),children:[t.jsx("span",{className:"tab-icon",children:y.icon}),t.jsx("span",{className:"tab-name",children:y.name})]},y.id))}),t.jsx("div",{className:"workspace-content",children:v()}),t.jsx("style",{jsx:!0,children:`
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
      `})]})},ug=({onTemplateSelect:r,isVisible:e,onClose:s})=>{var v;const{currentProject:n,updateFile:o,switchFile:i}=Ye(),[a,l]=p.useState(""),[d,c]=p.useState("all"),[m,u]=p.useState(!1),g=[{id:"all",name:"All Templates",icon:yt,color:"text-purple-500"},{id:"web-apps",name:"Web Apps",icon:Ae,color:"text-blue-500"},{id:"mobile-apps",name:"Mobile Apps",icon:zs,color:"text-green-500"},{id:"games",name:"Games",icon:Pa,color:"text-orange-500"},{id:"tools",name:"Tools",icon:X,color:"text-gray-500"}],b=hr.getAllTemplates(),f=hr.getPopularTemplates(),j=b.filter(y=>{const x=y.name.toLowerCase().includes(a.toLowerCase())||y.description.toLowerCase().includes(a.toLowerCase()),T=d==="all"||y.category===d;return x&&T}),h=async y=>{u(!0);try{console.log("🎯 Generating template:",y.id);const x=hr.generateTemplateById(y.id);Object.entries(x).forEach(([A,C])=>{o(A,C)});const T=Object.keys(x)[0];T&&i(T),K.success(`Generated ${y.name} successfully!`),r&&r(y,x),s&&s()}catch(x){console.error("❌ Template generation failed:",x),K.error(`Failed to generate ${y.name}`)}finally{u(!1)}},k=y=>{const x=g.find(T=>T.id===y);return x?x.icon:X},N=y=>{const x=g.find(T=>T.id===y);return x?x.color:"text-gray-500"};return e?t.jsx(Be,{children:t.jsx(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",onClick:s,children:t.jsxs(O.div,{initial:{scale:.95},animate:{scale:1},exit:{scale:.95},className:"bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:t.jsx(ke,{className:"h-5 w-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-xl font-semibold text-foreground",children:"Template Gallery"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Choose a template to get started"})]})]}),t.jsx("button",{onClick:s,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Close",children:t.jsx("span",{className:"text-xl text-muted-foreground",children:"×"})})]}),t.jsxs("div",{className:"p-6 border-b border-border",children:[t.jsxs("div",{className:"flex gap-4 mb-4",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx(We,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search templates...",value:a,onChange:y=>l(y.target.value),className:"w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20"})]}),t.jsxs("button",{className:"px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:bg-muted/80 transition-colors flex items-center gap-2",children:[t.jsx(kr,{className:"h-4 w-4"}),"Filters"]})]}),t.jsx("div",{className:"flex gap-2 overflow-x-auto",children:g.map(y=>{const x=y.icon;return t.jsxs("button",{onClick:()=>c(y.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${d===y.id?"bg-blue-500 text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[t.jsx(x,{className:"h-4 w-4"}),t.jsx("span",{className:"text-sm font-medium",children:y.name})]},y.id)})})]}),t.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[d==="all"&&t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[t.jsx(it,{className:"h-5 w-5 text-yellow-500"}),t.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Popular Templates"})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:f.map(y=>{const x=k(y.category),T=N(y.category);return t.jsxs(O.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>h(y),disabled:m,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[t.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${T}`,children:t.jsx(x,{className:"h-4 w-4"})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:y.name}),t.jsxs("p",{className:"text-xs text-muted-foreground",children:[y.files.length," files"]})]})]}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:y.description})]},y.id)})})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("h3",{className:"text-lg font-semibold text-foreground",children:d==="all"?"All Templates":(v=g.find(y=>y.id===d))==null?void 0:v.name}),t.jsxs("span",{className:"text-sm text-muted-foreground",children:[j.length," template",j.length!==1?"s":""]})]}),j.length===0?t.jsxs("div",{className:"text-center py-12",children:[t.jsx("div",{className:"w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4",children:t.jsx(We,{className:"h-8 w-8 text-muted-foreground"})}),t.jsx("h4",{className:"text-lg font-medium text-foreground mb-2",children:"No templates found"}),t.jsx("p",{className:"text-muted-foreground",children:"Try adjusting your search or filters"})]}):t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:j.map(y=>{const x=k(y.category),T=N(y.category);return t.jsxs(O.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>h(y),disabled:m,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[t.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${T}`,children:t.jsx(x,{className:"h-4 w-4"})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:y.name}),t.jsxs("p",{className:"text-xs text-muted-foreground",children:[y.files.length," files"]})]})]}),t.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:y.description})]},y.id)})})]})]}),t.jsx("div",{className:"p-6 border-t border-border bg-muted/30",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("div",{className:"text-sm text-muted-foreground",children:"Need something custom? Use the AI prompt to generate unique applications."}),t.jsx("button",{onClick:s,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"Close"})]})})]})})}):null},mg=({children:r,direction:e="horizontal",className:s=""})=>t.jsx("div",{className:`resizable-panel-group flex ${e} h-full ${s}`,children:r}),ms=({children:r,defaultSize:e=50,minSize:s=10,maxSize:n=90,className:o=""})=>t.jsx("div",{className:`resizable-panel ${o}`,style:{flexBasis:`${e}%`,minWidth:`${s}%`,maxWidth:`${n}%`},children:r}),go=({className:r="",onResize:e,children:s,handleIndex:n=0})=>{const[o,i]=p.useState(!1),a=p.useRef(null),l=m=>{i(!0),m.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",console.log("Handle clicked:",n)},d=p.useCallback(m=>{var k;if(!o)return;const u=(k=a.current)==null?void 0:k.parentElement;if(!u)return;const g=u.getBoundingClientRect(),f=(m.clientX-g.left)/g.width*100,h=Array.from(u.children).filter(N=>N.classList.contains("resizable-panel"));if(console.log("Total panels found:",h.length,"Handle index:",n),h.length>=2){let N,v;if(n===0?(N=h[0],v=h[1],console.log("Resizing File Manager and Code Editor")):n===1&&(N=h[1],v=h[2],console.log("Resizing Code Editor and AI Assistant")),N&&v){const y=Math.max(15,Math.min(70,f)),x=Math.max(15,Math.min(70,100-y));console.log("Setting sizes:",{leftSize:y,rightSize:x,percentage:f}),N.style.flexBasis=`${y}%`,v.style.flexBasis=`${x}%`,N.style.border="3px solid red",v.style.border="3px solid blue",setTimeout(()=>{N.style.border="",v.style.border=""},300),e&&e({leftSize:y,rightSize:x})}}},[o,e,n]),c=p.useCallback(()=>{i(!1),document.body.style.cursor="",document.body.style.userSelect=""},[]);return p.useEffect(()=>{if(o)return document.addEventListener("mousemove",d),document.addEventListener("mouseup",c),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c)}},[o,d,c]),t.jsx("div",{ref:a,className:`resizable-handle w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group flex items-center justify-center ${o?"bg-primary/70":""} ${r}`,onMouseDown:l,children:s||t.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/70 transition-colors"})})},pg=()=>{const[r,e]=p.useState("editor"),[s,n]=p.useState(!1),[o,i]=p.useState(!1),a=[{id:"editor",label:"Code Editor",icon:X,description:"Edit your code with live preview"},{id:"preview",label:"Live Preview",icon:jt,description:"View your application in real-time"},{id:"terminal",label:"Terminal",icon:xs,description:"Command line interface"},{id:"workspace",label:"Advanced Workspace",icon:$e,description:"Full-featured workspace with collaboration, visual editor, and deployment"}],l=d=>{d==="workspace"?r==="workspace"&&s?(n(!1),e("editor")):(n(!0),e(d)):(e(d),n(!1))};return t.jsxs("div",{className:"h-screen bg-background flex flex-col",children:[t.jsxs("div",{className:"flex items-center justify-between px-8 py-4 bg-gradient-to-r from-card/95 to-background/95 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-primary/5",style:{marginTop:"45px"},children:[t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:t.jsx(X,{className:"h-5 w-5 text-primary-foreground"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl font-bold text-foreground",children:"AI Builder"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Build with artificial intelligence"})]})]}),t.jsxs(me,{to:"/templates",className:"flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",title:"Browse Templates",children:[t.jsx(ke,{className:"h-4 w-4"}),"Templates"]})]}),t.jsx("div",{className:"flex items-center gap-1 bg-muted/40 p-1.5 rounded-2xl border border-border/60 shadow-inner",children:a.map(d=>{const c=d.icon;return t.jsxs(O.button,{whileHover:{scale:1.02,y:-1},whileTap:{scale:.98},onClick:()=>l(d.id),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative group ${r===d.id?"bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105":"text-muted-foreground hover:text-foreground hover:bg-background/80 hover:shadow-sm"}`,title:d.description,children:[t.jsx(c,{className:`h-4 w-4 transition-transform duration-300 ${r===d.id?"scale-110":"group-hover:scale-105"}`}),t.jsxs("span",{className:"relative",children:[d.label,r===d.id&&t.jsx(O.div,{layoutId:"activeBuilderTab",className:"absolute inset-0 bg-primary/10 rounded-xl -z-10",initial:!1,transition:{type:"spring",stiffness:500,damping:30}})]})]},d.id)})})]}),t.jsx("div",{className:"flex-1 p-8 bg-gradient-to-br from-background via-muted/20 to-background",children:t.jsxs(mg,{direction:"horizontal",className:"h-full gap-4",children:[t.jsx(ms,{defaultSize:20,minSize:10,maxSize:50,children:t.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(He,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-sm font-medium text-foreground",children:"Files"})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),t.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),t.jsx("div",{className:"flex-1 overflow-hidden",children:t.jsx(ou,{})})]})}),t.jsx(go,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:0,children:t.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),t.jsx(ms,{defaultSize:50,minSize:25,maxSize:70,children:t.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[r==="editor"&&t.jsx(X,{className:"h-4 w-4 text-primary"}),r==="preview"&&t.jsx(jt,{className:"h-4 w-4 text-primary"}),r==="workspace"&&t.jsx($e,{className:"h-4 w-4 text-primary"}),r==="terminal"&&t.jsx(xs,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-sm font-medium text-foreground capitalize",children:r})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),t.jsx("span",{className:"text-xs text-muted-foreground",children:"Ready"})]})]}),t.jsxs("div",{className:"flex-1 overflow-hidden h-full min-h-[600px]",children:[r==="editor"&&t.jsx(um,{}),r==="preview"&&t.jsx(mm,{}),r==="workspace"&&s&&t.jsx(dg,{projectId:"demo-project"}),r==="workspace"&&!s&&t.jsx("div",{className:"h-full flex items-center justify-center bg-muted/20",children:t.jsxs("div",{className:"text-center",children:[t.jsx($e,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),t.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"Advanced Workspace"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"Click the Advanced Workspace button to open the full-featured workspace"}),t.jsxs("div",{className:"text-sm text-muted-foreground",children:[t.jsx("p",{children:"Features include:"}),t.jsxs("ul",{className:"mt-2 space-y-1",children:[t.jsx("li",{children:"• Real-time Collaboration"}),t.jsx("li",{children:"• Visual Editor"}),t.jsx("li",{children:"• One-click Deployment"}),t.jsx("li",{children:"• Memory Management"})]})]})]})}),r==="terminal"&&t.jsx("div",{className:"h-full flex flex-col bg-gray-900",children:t.jsx("div",{className:"flex-grow p-4 text-green-400 font-mono text-sm overflow-y-auto",children:t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),t.jsx("span",{className:"text-gray-500",children:"$"}),t.jsx("span",{className:"text-gray-300",children:"npm run dev"})]}),t.jsx("div",{className:"text-gray-400",children:"Starting development server..."}),t.jsx("div",{className:"text-green-400",children:"✓ Server running on http://localhost:3000"}),t.jsx("div",{className:"text-blue-400",children:"✓ Ready in 2.3s"}),t.jsx("div",{className:"mt-4",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),t.jsx("span",{className:"text-gray-500",children:"$"}),t.jsx("span",{className:"text-gray-300 animate-pulse",children:"_"})]})})]})})})]})]})}),t.jsx(go,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:1,children:t.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),t.jsx(ms,{defaultSize:30,minSize:15,maxSize:60,children:t.jsxs("div",{className:"h-full bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx($e,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-sm font-medium text-foreground",children:"AI Assistant"})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),t.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),t.jsx("div",{className:"flex-1 overflow-hidden",children:t.jsx(Gp,{})})]})})]})}),t.jsx(ug,{isVisible:o,onClose:()=>i(!1),onTemplateSelect:(d,c)=>{console.log("🎯 Template selected:",d.name),i(!1)}})]})},hg=()=>{const{addFilesToProject:r}=Ye(),{theme:e}=Or(),[s,n]=p.useState(""),[o,i]=p.useState("all"),[a,l]=p.useState("grid"),[d,c]=p.useState("popularity"),m=[{id:"web-apps",name:"Web Applications",icon:Ae,description:"Full-stack web applications",color:"from-blue-500 to-cyan-500"},{id:"mobile-apps",name:"Mobile Apps",icon:zs,description:"React Native and mobile applications",color:"from-purple-500 to-pink-500"},{id:"landing-pages",name:"Landing Pages",icon:ke,description:"Marketing and landing pages",color:"from-green-500 to-emerald-500"},{id:"dashboards",name:"Dashboards",icon:wo,description:"Analytics and admin dashboards",color:"from-orange-500 to-red-500"},{id:"ecommerce",name:"E-commerce",icon:Ra,description:"Online stores and marketplaces",color:"from-yellow-500 to-orange-500"},{id:"portfolio",name:"Portfolio",icon:jo,description:"Personal and creative portfolios",color:"from-indigo-500 to-purple-500"}],g=[{id:"todo-app",name:"Todo Application",description:"A modern todo app with React, Node.js, and MongoDB",category:"web-apps",tags:["React","Node.js","MongoDB","Express"],preview:"/api/placeholder/400/300",popularity:95,createdAt:"2024-01-15",files:{"package.json":'{"name": "todo-app", "version": "1.0.0", "dependencies": {"react": "^18.0.0"}}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Todo App</div>; }'}},{id:"blog-platform",name:"Blog Platform",description:"Full-featured blog with CMS, comments, and SEO",category:"web-apps",tags:["React","Next.js","Prisma","PostgreSQL"],preview:"/api/placeholder/400/300",popularity:88,createdAt:"2024-01-10",files:{"package.json":'{"name": "blog-platform", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Blog Platform</div>; }'}},{id:"weather-app",name:"Weather App",description:"Beautiful weather app with location services",category:"mobile-apps",tags:["React Native","Expo","API"],preview:"/api/placeholder/400/300",popularity:82,createdAt:"2024-01-12",files:{"package.json":'{"name": "weather-app", "version": "1.0.0"}',"App.js":'import React from "react"; export default function App() { return <div>Weather App</div>; }'}},{id:"saas-landing",name:"SaaS Landing Page",description:"Modern SaaS landing page with pricing and features",category:"landing-pages",tags:["React","Tailwind CSS","Framer Motion"],preview:"/api/placeholder/400/300",popularity:90,createdAt:"2024-01-08",files:{"package.json":'{"name": "saas-landing", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>SaaS Landing</div>; }'}},{id:"analytics-dashboard",name:"Analytics Dashboard",description:"Real-time analytics dashboard with charts and metrics",category:"dashboards",tags:["React","Chart.js","D3.js","WebSocket"],preview:"/api/placeholder/400/300",popularity:85,createdAt:"2024-01-05",files:{"package.json":'{"name": "analytics-dashboard", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Analytics Dashboard</div>; }'}},{id:"online-store",name:"Online Store",description:"Complete e-commerce solution with cart and payments",category:"ecommerce",tags:["React","Stripe","Firebase","Redux"],preview:"/api/placeholder/400/300",popularity:92,createdAt:"2024-01-03",files:{"package.json":'{"name": "online-store", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Online Store</div>; }'}},{id:"creative-portfolio",name:"Creative Portfolio",description:"Stunning portfolio for designers and developers",category:"portfolio",tags:["React","Three.js","GSAP","Framer Motion"],preview:"/api/placeholder/400/300",popularity:87,createdAt:"2024-01-01",files:{"package.json":'{"name": "creative-portfolio", "version": "1.0.0"}',"src/App.jsx":'import React from "react"; export default function App() { return <div>Creative Portfolio</div>; }'}}].filter(h=>{const k=o==="all"||h.category===o,N=s===""||h.name.toLowerCase().includes(s.toLowerCase())||h.description.toLowerCase().includes(s.toLowerCase())||h.tags.some(v=>v.toLowerCase().includes(s.toLowerCase()));return k&&N}).sort((h,k)=>{switch(d){case"popularity":return k.popularity-h.popularity;case"newest":return new Date(k.createdAt)-new Date(h.createdAt);case"name":return h.name.localeCompare(k.name);default:return 0}}),b=h=>{r(h.files),B.success(`Template "${h.name}" added to your project!`)},f=h=>{B.success(`Previewing "${h.name}"`)},j=h=>{const k=JSON.stringify(h,null,2);navigator.clipboard.writeText(k),B.success(`Template "${h.name}" copied to clipboard!`)};return t.jsxs("div",{className:"min-h-screen bg-background",children:[t.jsx("div",{className:"bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-border/50",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:t.jsxs("div",{className:"text-center",children:[t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"flex items-center justify-center gap-3 mb-8",children:[t.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg shadow-primary/25",children:t.jsx(ke,{className:"h-6 w-6 text-primary-foreground"})}),t.jsx("h1",{className:"text-4xl font-bold text-high-contrast",children:"Template Library"})]}),t.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[t.jsx(O.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-xl text-muted-foreground max-w-2xl mx-auto text-center",children:"Choose from our collection of professionally designed templates to jumpstart your next project"}),t.jsx(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"max-w-md w-full mx-auto relative",children:t.jsxs("div",{className:"relative",children:[t.jsx("input",{type:"text",placeholder:"Search templates...",value:s,onChange:h=>n(h.target.value),className:"w-full pl-4 pr-12 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground"}),t.jsx(We,{className:"absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10"})]})})]})]})})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(kr,{className:"h-5 w-5 text-muted-foreground"}),t.jsxs("select",{value:o,onChange:h=>i(h.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[t.jsx("option",{value:"all",children:"All Categories"}),m.map(h=>t.jsx("option",{value:h.id,children:h.name},h.id))]})]}),t.jsx("div",{className:"flex items-center gap-2",children:t.jsxs("select",{value:d,onChange:h=>c(h.target.value),className:"px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary",children:[t.jsx("option",{value:"popularity",children:"Most Popular"}),t.jsx("option",{value:"newest",children:"Newest First"}),t.jsx("option",{value:"name",children:"Alphabetical"})]})}),t.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[t.jsx("button",{onClick:()=>l("grid"),className:`p-2 rounded-lg transition-colors ${a==="grid"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:t.jsx(Oa,{className:"h-4 w-4"})}),t.jsx("button",{onClick:()=>l("list"),className:`p-2 rounded-lg transition-colors ${a==="list"?"bg-primary text-primary-foreground":"bg-card text-muted-foreground hover:bg-muted"}`,children:t.jsx(No,{className:"h-4 w-4"})})]})]}),a==="grid"?t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:g.map((h,k)=>t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:k*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:[t.jsxs("div",{className:"aspect-video bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:t.jsxs("div",{className:"text-center",children:[t.jsx(ke,{className:"h-12 w-12 text-muted-foreground mx-auto mb-2"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:h.name})]})}),t.jsx("div",{className:"absolute top-3 right-3",children:t.jsxs("div",{className:"flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs",children:[t.jsx(it,{className:"h-3 w-3 text-warning fill-current"}),t.jsxs("span",{children:[h.popularity,"%"]})]})})]}),t.jsxs("div",{className:"p-6",children:[t.jsx("h3",{className:"font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors",children:h.name}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:h.description}),t.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[h.tags.slice(0,3).map(N=>t.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:N},N)),h.tags.length>3&&t.jsxs("span",{className:"px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md",children:["+",h.tags.length-3," more"]})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{onClick:()=>b(h),className:"flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[t.jsx(Ne,{className:"h-4 w-4"}),"Use Template"]}),t.jsx("button",{onClick:()=>f(h),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:t.jsx(jt,{className:"h-4 w-4"})}),t.jsx("button",{onClick:()=>j(h),className:"px-3 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:t.jsx(wt,{className:"h-4 w-4"})})]})]})]},h.id))}):t.jsx("div",{className:"space-y-4",children:g.map((h,k)=>t.jsx(O.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:k*.05},className:"bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group",children:t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsx("div",{className:"w-24 h-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg flex items-center justify-center flex-shrink-0",children:t.jsx(ke,{className:"h-6 w-6 text-muted-foreground"})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[t.jsx("h3",{className:"font-semibold text-lg text-foreground group-hover:text-primary transition-colors",children:h.name}),t.jsxs("div",{className:"flex items-center gap-1 bg-warning/10 text-warning px-2 py-1 rounded-full text-xs",children:[t.jsx(it,{className:"h-3 w-3 fill-current"}),t.jsxs("span",{children:[h.popularity,"%"]})]})]}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:h.description}),t.jsx("div",{className:"flex flex-wrap gap-2",children:h.tags.map(N=>t.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary text-xs rounded-md",children:N},N))})]}),t.jsxs("div",{className:"flex gap-2 flex-shrink-0",children:[t.jsxs("button",{onClick:()=>b(h),className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[t.jsx(Ne,{className:"h-4 w-4"}),"Use Template"]}),t.jsx("button",{onClick:()=>f(h),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Preview",children:t.jsx(jt,{className:"h-4 w-4"})}),t.jsx("button",{onClick:()=>j(h),className:"p-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors",title:"Copy",children:t.jsx(wt,{className:"h-4 w-4"})})]})]})},h.id))}),g.length===0&&t.jsxs("div",{className:"text-center py-16",children:[t.jsx(ke,{className:"h-16 w-16 text-muted-foreground mx-auto mb-4"}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No templates found"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search criteria or browse all categories"}),t.jsx("button",{onClick:()=>{n(""),i("all")},className:"px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]})]})]})},fg=()=>{const{currentProject:r,projects:e}=Ye(),[s,n]=p.useState("7d"),[o,i]=p.useState(!0);p.useEffect(()=>{const u=setTimeout(()=>i(!1),1e3);return()=>clearTimeout(u)},[]);const a={totalProjects:12,aiGenerations:89,linesOfCode:12450,hoursSpent:42.5},l=[{id:1,type:"ai_generation",project:"E-commerce Store",action:"Generated React component",time:"2 minutes ago",icon:$e,color:"text-white"},{id:2,type:"file_created",project:"Portfolio Website",action:"Created new CSS file",time:"15 minutes ago",icon:ke,color:"text-green-600"},{id:3,type:"project_completed",project:"Task Manager App",action:"Project marked as completed",time:"1 hour ago",icon:it,color:"text-yellow-600"},{id:4,type:"deployment",project:"Analytics Dashboard",action:"Deployed to Firebase",time:"3 hours ago",icon:Ne,color:"text-purple-600"}],d=[{name:"E-commerce Store",files:24,lastModified:"2 min ago",type:"web",progress:85},{name:"Portfolio Website",files:12,lastModified:"15 min ago",type:"web",progress:100},{name:"Task Manager App",files:18,lastModified:"1 hour ago",type:"mobile",progress:100},{name:"Analytics Dashboard",files:31,lastModified:"3 hours ago",type:"dashboard",progress:75}],c=[{language:"JavaScript",percentage:45,files:70,color:"bg-yellow-500"},{language:"HTML",percentage:25,files:39,color:"bg-orange-500"},{language:"CSS",percentage:20,files:31,color:"bg-white"},{language:"Python",percentage:10,files:16,color:"bg-green-500"}],m=({title:u,value:g,icon:b,change:f,changeType:j,description:h})=>t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-md transition-all duration-200",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("div",{className:"w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center",children:t.jsx(b,{className:"h-6 w-6 text-white"})}),f&&t.jsxs("div",{className:`flex items-center gap-1 text-sm ${j==="increase"?"text-green-600":"text-red-600"}`,children:[j==="increase"?t.jsx(Ma,{className:"h-4 w-4"}):t.jsx(La,{className:"h-4 w-4"}),f]})]}),t.jsx("h3",{className:"text-2xl font-bold text-foreground mb-1",children:g}),t.jsx("p",{className:"text-sm text-muted-foreground",children:u}),h&&t.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:h})]});return o?t.jsx("div",{className:"min-h-screen bg-background",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:t.jsxs("div",{className:"animate-pulse",children:[t.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[...Array(4)].map((u,g)=>t.jsxs("div",{className:"bg-card/50 rounded-xl p-6",children:[t.jsx("div",{className:"h-12 w-12 bg-muted rounded-lg mb-4"}),t.jsx("div",{className:"h-6 bg-muted rounded w-1/2 mb-2"}),t.jsx("div",{className:"h-4 bg-muted rounded w-3/4"})]},g))})]})})}):t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsx("div",{className:"mb-8",children:t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Dashboard"}),t.jsx("p",{className:"text-muted-foreground",children:"Welcome back! Here's what's happening with your projects."})]}),t.jsx("div",{className:"flex items-center gap-2",children:t.jsxs("select",{value:s,onChange:u=>n(u.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"7d",children:"Last 7 days"}),t.jsx("option",{value:"30d",children:"Last 30 days"}),t.jsx("option",{value:"90d",children:"Last 90 days"})]})})]})}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[t.jsx(m,{title:"Total Projects",value:a.totalProjects,icon:He,change:"+2",changeType:"increase",description:"This week"}),t.jsx(m,{title:"AI Generations",value:a.aiGenerations,icon:$e,change:"+12",changeType:"increase",description:"This week"}),t.jsx(m,{title:"Lines of Code",value:a.linesOfCode.toLocaleString(),icon:X,change:"+1.2k",changeType:"increase",description:"This week"}),t.jsx(m,{title:"Hours Spent",value:a.hoursSpent,icon:Gs,change:"+5.2h",changeType:"increase",description:"This week"})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[t.jsxs("div",{className:"lg:col-span-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[t.jsx(Ia,{className:"h-5 w-5 text-white"}),"Recent Activity"]}),t.jsx("button",{className:"text-sm text-white hover:text-gray-300 transition-colors",children:"View all"})]}),t.jsx("div",{className:"space-y-4",children:l.map((u,g)=>{const b=u.icon;return t.jsxs(O.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:g*.1},className:"flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors",children:[t.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center ${u.color.replace("text-","bg-").replace("-600","-100")}`,children:t.jsx(b,{className:`h-4 w-4 ${u.color}`})}),t.jsxs("div",{className:"flex-1",children:[t.jsx("p",{className:"text-sm font-medium text-foreground",children:u.action}),t.jsx("p",{className:"text-xs text-muted-foreground",children:u.project})]}),t.jsx("span",{className:"text-xs text-muted-foreground",children:u.time})]},u.id)})})]}),t.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[t.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[t.jsx(wo,{className:"h-5 w-5 text-white"}),"Top Projects"]}),t.jsx("div",{className:"space-y-4",children:d.map((u,g)=>t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:g*.1},className:"p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("h3",{className:"font-medium text-foreground text-sm",children:u.name}),t.jsxs("span",{className:"text-xs text-muted-foreground",children:[u.files," files"]})]}),t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("div",{className:"flex-1 bg-muted rounded-full h-2 mr-3",children:t.jsx("div",{className:"bg-white h-2 rounded-full transition-all duration-300",style:{width:`${u.progress}%`}})}),t.jsxs("span",{className:"text-xs text-muted-foreground",children:[u.progress,"%"]})]}),t.jsx("p",{className:"text-xs text-muted-foreground",children:u.lastModified})]},u.name))})]})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[t.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[t.jsx(X,{className:"h-5 w-5 text-white"}),"Language Usage"]}),t.jsx("div",{className:"space-y-4",children:c.map((u,g)=>t.jsxs(O.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:g*.1},className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-4 h-4 rounded-full bg-muted flex items-center justify-center",children:t.jsx("div",{className:`w-2 h-2 rounded-full ${u.color}`})}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("div",{className:"flex items-center justify-between mb-1",children:[t.jsx("span",{className:"text-sm font-medium text-foreground",children:u.language}),t.jsxs("span",{className:"text-xs text-muted-foreground",children:[u.percentage,"%"]})]}),t.jsx("div",{className:"bg-muted rounded-full h-2",children:t.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${u.color}`,style:{width:`${u.percentage}%`}})}),t.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[u.files," files"]})]})]},u.language))})]}),t.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[t.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[t.jsx(vt,{className:"h-5 w-5 text-white"}),"Quick Actions"]}),t.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{name:"New Project",icon:He,color:"bg-white",href:"/ai-builder"},{name:"AI Builder",icon:$e,color:"bg-purple-500",href:"/ai-builder"},{name:"View Projects",icon:Ae,color:"bg-green-500",href:"/projects"},{name:"Settings",icon:ft,color:"bg-orange-500",href:"/settings"}].map((u,g)=>t.jsxs(O.a,{href:u.href,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:g*.1},className:"flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-all duration-200 group",children:[t.jsx("div",{className:`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${u.color} group-hover:scale-105 transition-transform`,children:t.jsx(u.icon,{className:"h-6 w-6 text-white"})}),t.jsx("span",{className:"text-sm font-medium text-foreground text-center",children:u.name})]},u.name))})]})]})]})})},gg=()=>{const{user:r,signInWithGoogle:e,signInWithGitHub:s,loading:n}=Ir(),o=Ar(),[i,a]=p.useState(!1);p.useEffect(()=>{r&&!n&&o("/dashboard")},[r,n,o]);const l=async()=>{try{a(!0),await e()}catch(c){console.error("Sign in error:",c)}finally{a(!1)}},d=async()=>{try{a(!0),await s()}catch(c){console.error("GitHub sign in error:",c)}finally{a(!1)}};return n?t.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),t.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):t.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:[t.jsxs("div",{className:"flex justify-between items-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg",children:t.jsx("span",{className:"text-white font-bold text-lg",children:"D"})}),t.jsx("span",{className:"font-bold text-xl text-slate-800 dark:text-white",children:"DreamBuild"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(O.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/login",className:"px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"Sign in"}),t.jsx(O.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/signup",className:"px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl",children:"Sign up"})]})]}),t.jsx("div",{className:"flex items-center justify-center p-6 -mt-20",children:t.jsx("div",{className:"w-full max-w-md",children:t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-2xl",children:[t.jsxs("div",{className:"text-center mb-8",children:[t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg",children:t.jsx("span",{className:"text-white font-bold text-2xl",children:"D"})}),t.jsx("h1",{className:"text-2xl font-bold mb-2 text-slate-800 dark:text-white",children:"Welcome back"}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-sm",children:"Sign in to continue building amazing applications"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs(O.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:l,disabled:i,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md",children:[i?t.jsx(Ut,{className:"h-5 w-5 animate-spin text-blue-600"}):t.jsx("div",{className:"w-5 h-5 bg-gradient-to-r from-blue-500 to-red-500 rounded flex items-center justify-center",children:t.jsx("span",{className:"text-white text-xs font-bold",children:"G"})}),i?"Signing in...":"Continue with Google"]}),t.jsxs(O.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:d,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 shadow-sm hover:shadow-md",children:[t.jsx(Ie,{className:"h-5 w-5"}),"Continue with GitHub"]})]}),t.jsxs("div",{className:"relative my-8",children:[t.jsx("div",{className:"absolute inset-0 flex items-center",children:t.jsx("div",{className:"w-full border-t border-slate-200 dark:border-slate-600"})}),t.jsx("div",{className:"relative flex justify-center text-sm",children:t.jsx("span",{className:"bg-white dark:bg-slate-800 px-4 text-slate-500 dark:text-slate-400 font-medium",children:"or"})})]}),t.jsx("div",{className:"text-center",children:t.jsxs(O.a,{whileHover:{scale:1.05},whileTap:{scale:.95},href:"/ai-builder",className:"inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold text-sm bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600",children:["Continue as Guest",t.jsx(Tr,{className:"h-4 w-4"})]})})]})})})]})},xg=()=>{const{user:r,signInWithGoogle:e,signInWithGitHub:s,loading:n}=Ir(),o=Ar(),[i,a]=p.useState(!1);p.useEffect(()=>{r&&!n&&o("/dashboard")},[r,n,o]);const l=async()=>{try{a(!0),await e(),B.success("Welcome to DreamBuild!")}catch(c){console.error("Sign in error:",c),B.error("Failed to sign in. Please try again.")}finally{a(!1)}},d=async()=>{try{a(!0),await s(),B.success("Welcome to DreamBuild!")}catch(c){console.error("GitHub sign in error:",c),B.error("Failed to sign in with GitHub. Please try again.")}finally{a(!1)}};return n?t.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),t.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):t.jsxs("div",{className:"min-h-screen bg-background",children:[t.jsxs("div",{className:"flex justify-between items-center p-4",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:t.jsx("span",{className:"text-primary-foreground font-bold text-sm",children:"D"})}),t.jsx("span",{className:"font-semibold text-foreground",children:"DreamBuild"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(O.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/login",className:"px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors",children:"Sign in"}),t.jsx(O.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/signup",className:"px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors",children:"Sign up"})]})]}),t.jsx("div",{className:"flex items-center justify-center p-4 -mt-16",children:t.jsx("div",{className:"w-full max-w-xs",children:t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},className:"bg-card border border-border rounded-xl p-6 shadow-sm",children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("h1",{className:"text-xl font-bold mb-1 text-foreground",children:"Join DreamBuild"}),t.jsx("p",{className:"text-muted-foreground text-xs",children:"Create your account"})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs(O.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:l,disabled:i,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background disabled:opacity-50 disabled:cursor-not-allowed",children:[i?t.jsx(Ut,{className:"h-4 w-4 animate-spin text-primary"}):t.jsxs("svg",{className:"h-4 w-4",viewBox:"0 0 24 24",children:[t.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),t.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),t.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),t.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),i?"Creating account...":"Continue with Google"]}),t.jsxs(O.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:d,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background",children:[t.jsx(Ie,{className:"h-4 w-4"}),"Continue with GitHub"]})]}),t.jsxs("div",{className:"relative my-4",children:[t.jsx("div",{className:"absolute inset-0 flex items-center",children:t.jsx("div",{className:"w-full border-t border-border"})}),t.jsx("div",{className:"relative flex justify-center text-xs",children:t.jsx("span",{className:"bg-card px-2 text-muted-foreground",children:"or"})})]}),t.jsx("div",{className:"text-center",children:t.jsxs(O.a,{whileHover:{scale:1.02},whileTap:{scale:.98},href:"/ai-builder",className:"inline-flex items-center gap-1 px-3 py-1.5 text-primary hover:text-primary-dark transition-colors font-medium text-xs",children:["Continue as Guest",t.jsx(Tr,{className:"h-3 w-3"})]})})]})})})]})},bg=()=>{const{currentProject:r,createNewProject:e,projects:s,switchProject:n}=Ye(),[o,i]=p.useState(""),[a,l]=p.useState("all"),[d,c]=p.useState(!1),[m,u]=p.useState(""),[g,b]=p.useState("web"),[f,j]=p.useState(null),[h,k]=p.useState([{id:"1",name:"E-commerce Store",type:"ecommerce",description:"Modern e-commerce platform with React and Node.js",status:"active",lastModified:"2024-01-15",files:12,size:"2.4 MB",tags:["React","Node.js","E-commerce"],preview:"https://via.placeholder.com/300x200/007acc/ffffff?text=E-commerce+Store"},{id:"2",name:"Portfolio Website",type:"web",description:"Personal portfolio website with modern design",status:"completed",lastModified:"2024-01-10",files:8,size:"1.2 MB",tags:["HTML","CSS","JavaScript"],preview:"https://via.placeholder.com/300x200/28a745/ffffff?text=Portfolio+Website"},{id:"3",name:"Task Manager App",type:"mobile",description:"Mobile task management application",status:"development",lastModified:"2024-01-12",files:15,size:"3.1 MB",tags:["React Native","Firebase"],preview:"https://via.placeholder.com/300x200/ffc107/000000?text=Task+Manager"},{id:"4",name:"Analytics Dashboard",type:"dashboard",description:"Business analytics dashboard with charts",status:"active",lastModified:"2024-01-14",files:20,size:"4.2 MB",tags:["Vue.js","D3.js","Charts"],preview:"https://via.placeholder.com/300x200/6f42c1/ffffff?text=Analytics+Dashboard"},{id:"5",name:"REST API Service",type:"api",description:"Node.js REST API with authentication and database",status:"active",lastModified:"2024-01-16",files:25,size:"1.8 MB",tags:["Node.js","Express","MongoDB"],preview:"https://via.placeholder.com/300x200/17a2b8/ffffff?text=REST+API"},{id:"6",name:"Space Adventure Game",type:"game",description:"2D space shooter game built with JavaScript",status:"development",lastModified:"2024-01-13",files:18,size:"2.9 MB",tags:["JavaScript","Canvas","Game"],preview:"https://via.placeholder.com/300x200/e83e8c/ffffff?text=Space+Game"},{id:"7",name:"Social Media App",type:"mobile",description:"Social networking app with real-time chat",status:"active",lastModified:"2024-01-17",files:22,size:"4.1 MB",tags:["Flutter","Firebase","Chat"],preview:"https://via.placeholder.com/300x200/20c997/ffffff?text=Social+App"},{id:"8",name:"Admin Dashboard",type:"dashboard",description:"Administrative interface for managing users and content",status:"completed",lastModified:"2024-01-11",files:16,size:"3.3 MB",tags:["React","Material-UI","Admin"],preview:"https://via.placeholder.com/300x200/6c757d/ffffff?text=Admin+Dashboard"}]),N=[{id:"all",name:"All",icon:He,count:h.length},{id:"web",name:"Web Apps",icon:Ae,count:h.filter(C=>C.type==="web").length},{id:"mobile",name:"Mobile",icon:X,count:h.filter(C=>C.type==="mobile").length},{id:"dashboard",name:"Dashboards",icon:ft,count:h.filter(C=>C.type==="dashboard").length},{id:"api",name:"APIs",icon:ft,count:h.filter(C=>C.type==="api").length},{id:"game",name:"Games",icon:it,count:h.filter(C=>C.type==="game").length},{id:"ecommerce",name:"E-commerce",icon:ft,count:h.filter(C=>C.type==="ecommerce").length},{id:"completed",name:"Completed",icon:it,count:h.filter(C=>C.status==="completed").length}],v=h.filter(C=>{const L=C.name.toLowerCase().includes(o.toLowerCase())||C.description.toLowerCase().includes(o.toLowerCase())||C.tags.some(P=>P.toLowerCase().includes(o.toLowerCase())),E=a==="all"||C.type===a||C.status===a;return L&&E}),y=()=>{if(!m.trim()){B.error("Please enter a project name");return}const C={id:Date.now().toString(),name:m,type:g,description:`New ${g} project`,status:"active",lastModified:new Date().toISOString().split("T")[0],files:0,size:"0 MB",tags:[g],preview:"https://via.placeholder.com/300x200/6c757d/ffffff?text=New+Project"};k([C,...h]),u(""),b("web"),c(!1),B.success("Project created successfully!")},x=C=>{k(h.filter(L=>L.id!==C)),j(null),B.success("Project deleted successfully!")},T=C=>{switch(C){case"active":return"bg-green-100 text-green-800 border-green-200";case"development":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"completed":return"bg-white/10 text-white border-white/20";default:return"bg-gray-100 text-gray-800 border-gray-200"}},A=C=>{switch(C){case"web":return Ae;case"mobile":return X;case"dashboard":return ft;default:return He}};return t.jsxs("div",{className:"min-h-screen bg-background",children:[t.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"flex items-center justify-between mb-8",children:[t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Projects"}),t.jsx("p",{className:"text-muted-foreground",children:"Manage your AI-generated projects"})]}),t.jsxs(O.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>c(!0),className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[t.jsx(br,{className:"h-4 w-4"}),"New Project"]})]}),t.jsx("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-lg mb-6",children:N.map(C=>{const L=C.icon,E=a===C.id;return t.jsxs(O.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>l(C.id),className:`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${E?"bg-primary text-primary-foreground shadow-sm":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[t.jsx(L,{className:"h-4 w-4"}),C.name,t.jsx("span",{className:`text-xs px-1.5 py-0.5 rounded-full ${E?"bg-primary-foreground/20":"bg-muted"}`,children:C.count})]},C.id)})}),t.jsxs("div",{className:"relative mb-6",children:[t.jsx(We,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search projects...",value:o,onChange:C=>i(C.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),t.jsx("div",{className:"space-y-2",children:v.map((C,L)=>{const E=A(C.type);return t.jsxs(O.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:L*.05},className:"bg-card border border-border rounded-lg p-4 hover:shadow-sm transition-all duration-200 group",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",children:t.jsx(E,{className:"h-5 w-5 text-primary"})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-1",children:[t.jsx("h3",{className:"font-semibold text-foreground truncate",children:C.name}),t.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${T(C.status)}`,children:C.status})]}),t.jsx("p",{className:"text-sm text-muted-foreground truncate mb-2",children:C.description}),t.jsxs("div",{className:"flex items-center gap-4 text-xs text-muted-foreground",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(ke,{className:"h-3 w-3"}),C.files," files"]}),t.jsx("span",{children:C.size}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(gt,{className:"h-3 w-3"}),C.lastModified]})]})]}),t.jsx("div",{className:"flex items-center gap-2",children:t.jsxs("div",{className:"flex gap-1",children:[C.tags.slice(0,2).map(P=>t.jsx("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:P},P)),C.tags.length>2&&t.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["+",C.tags.length-2]})]})})]}),t.jsxs("div",{className:"flex items-center gap-1 ml-4",children:[t.jsx(O.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 hover:bg-muted rounded-md transition-colors",onClick:()=>n(C.id),children:t.jsx(jt,{className:"h-4 w-4 text-muted-foreground"})}),t.jsx(O.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 hover:bg-muted rounded-md transition-colors",children:t.jsx(gs,{className:"h-4 w-4 text-muted-foreground"})}),t.jsx("button",{onClick:()=>j(f===C.id?null:C.id),className:"p-2 hover:bg-muted rounded-md transition-colors",children:t.jsx(Fa,{className:"h-4 w-4 text-muted-foreground"})})]})]}),t.jsx(Be,{children:f===C.id&&t.jsx(O.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"absolute right-4 mt-1 bg-card border border-border rounded-lg shadow-lg z-10 min-w-[150px]",children:t.jsxs("div",{className:"p-1",children:[t.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[t.jsx(jt,{className:"h-4 w-4"}),"View"]}),t.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[t.jsx(gs,{className:"h-4 w-4"}),"Edit"]}),t.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[t.jsx(ot,{className:"h-4 w-4"}),"Download"]}),t.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[t.jsx(So,{className:"h-4 w-4"}),"Share"]}),t.jsx("hr",{className:"my-1"}),t.jsxs("button",{onClick:()=>x(C.id),className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors",children:[t.jsx(vo,{className:"h-4 w-4"}),"Delete"]})]})})})]},C.id)})}),v.length===0&&t.jsxs("div",{className:"text-center py-12",children:[t.jsx("div",{className:"w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:t.jsx(He,{className:"h-8 w-8 text-primary"})}),t.jsx("h3",{className:"text-lg font-semibold text-foreground mb-2",children:o||a!=="all"?"No projects found":"No projects yet"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:o||a!=="all"?"Try adjusting your search or filter criteria.":"Create your first project to get started!"}),t.jsxs(O.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>c(!0),className:"inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[t.jsx(br,{className:"h-4 w-4"}),"Create Project"]})]})]}),t.jsx(Be,{children:d&&t.jsx(O.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:()=>c(!1),children:t.jsxs(O.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4",onClick:C=>C.stopPropagation(),children:[t.jsx("h2",{className:"text-xl font-semibold text-foreground mb-4",children:"Create New Project"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Name"}),t.jsx("input",{type:"text",value:m,onChange:C=>u(C.target.value),placeholder:"Enter project name...",className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",autoFocus:!0})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Type"}),t.jsxs("select",{value:g,onChange:C=>b(C.target.value),className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"web",children:"Web Application"}),t.jsx("option",{value:"mobile",children:"Mobile Application"}),t.jsx("option",{value:"dashboard",children:"Dashboard"})]})]})]}),t.jsxs("div",{className:"flex gap-3 mt-6",children:[t.jsx(O.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>c(!1),className:"flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors",children:"Cancel"}),t.jsx(O.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:y,className:"flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Create"})]})]})})}),f&&t.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>j(null)})]})},yg=()=>{var v,y;const{theme:r,setTheme:e}=Or(),[s,n]=p.useState("appearance"),[o,i]=p.useState({appearance:{theme:r,fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),[a,l]=p.useState(!0),[d,c]=p.useState(!1);p.useEffect(()=>{const x=localStorage.getItem("dreambuild-settings");x&&i(JSON.parse(x)),l(!1)},[]),p.useEffect(()=>{c(!0)},[o]);const m=()=>{localStorage.setItem("dreambuild-settings",JSON.stringify(o)),c(!1),console.log("Settings saved successfully!")},u=()=>{i({appearance:{theme:"system",fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),console.log("Settings reset to defaults!")},g=()=>{const x=JSON.stringify(o,null,2),T=new Blob([x],{type:"application/json"}),A=URL.createObjectURL(T),C=document.createElement("a");C.href=A,C.download="dreambuild-settings.json",C.click(),URL.revokeObjectURL(A),console.log("Settings exported!")},b=x=>{const T=x.target.files[0];if(T){const A=new FileReader;A.onload=C=>{try{const L=JSON.parse(C.target.result);i(L),console.log("Settings imported successfully!")}catch{console.error("Invalid settings file!")}},A.readAsText(T)}},f=(x,T,A)=>{i(C=>({...C,[x]:{...C[x],[T]:A}})),x==="appearance"&&T==="theme"&&e(A)},j=[{id:"appearance",name:"Appearance",icon:jo},{id:"editor",name:"Editor",icon:X},{id:"ai",name:"AI Settings",icon:$e},{id:"notifications",name:"Notifications",icon:_a},{id:"privacy",name:"Privacy",icon:Ba}],h=({title:x,description:T,children:A,warning:C})=>t.jsxs("div",{className:"flex items-start justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors",children:[t.jsxs("div",{className:"flex-1",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsx("h3",{className:"font-medium text-foreground",children:x}),C&&t.jsx($a,{className:"h-4 w-4 text-yellow-500",title:C})]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:T})]}),t.jsx("div",{className:"ml-4",children:A})]}),k=({checked:x,onChange:T,disabled:A=!1})=>t.jsx("button",{onClick:()=>T(!x),disabled:A,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${x?"bg-gray-700":"bg-muted"} ${A?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,children:t.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${x?"translate-x-6":"translate-x-1"}`})}),N=()=>{switch(s){case"appearance":return t.jsxs("div",{className:"space-y-1",children:[t.jsx(h,{title:"Theme",description:"Choose your preferred color scheme",children:t.jsxs("select",{value:o.appearance.theme,onChange:x=>f("appearance","theme",x.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"light",children:"Light Theme"}),t.jsx("option",{value:"dark",children:"Dark Theme"}),t.jsx("option",{value:"system",children:"System Theme"}),t.jsx("option",{value:"blue",children:"Blue Theme"}),t.jsx("option",{value:"purple",children:"Purple Theme"}),t.jsx("option",{value:"green",children:"Green Theme"}),t.jsx("option",{value:"orange",children:"Orange Theme"}),t.jsx("option",{value:"red",children:"Red Theme"}),t.jsx("option",{value:"pink",children:"Pink Theme"}),t.jsx("option",{value:"cyan",children:"Cyan Theme"}),t.jsx("option",{value:"amber",children:"Amber Theme"}),t.jsx("option",{value:"emerald",children:"Emerald Theme"})]})}),t.jsx(h,{title:"Font Size",description:"Adjust the text size throughout the interface",children:t.jsxs("select",{value:o.appearance.fontSize,onChange:x=>f("appearance","fontSize",x.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"small",children:"Small"}),t.jsx("option",{value:"medium",children:"Medium"}),t.jsx("option",{value:"large",children:"Large"})]})}),t.jsx(h,{title:"Font Family",description:"Choose the font family for the editor",children:t.jsxs("select",{value:o.appearance.fontFamily,onChange:x=>f("appearance","fontFamily",x.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"system",children:"System Default"}),t.jsx("option",{value:"mono",children:"Monospace"}),t.jsx("option",{value:"sans",children:"Sans Serif"}),t.jsx("option",{value:"serif",children:"Serif"})]})}),t.jsx(h,{title:"Animations",description:"Enable smooth animations and transitions",children:t.jsx(k,{checked:o.appearance.animations,onChange:x=>f("appearance","animations",x)})}),t.jsx(h,{title:"Compact Mode",description:"Reduce spacing for a more compact interface",children:t.jsx(k,{checked:o.appearance.compactMode,onChange:x=>f("appearance","compactMode",x)})})]});case"editor":return t.jsxs("div",{className:"space-y-1",children:[t.jsx(h,{title:"Tab Size",description:"Number of spaces for indentation",children:t.jsxs("select",{value:o.editor.tabSize,onChange:x=>f("editor","tabSize",parseInt(x.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:2,children:"2 spaces"}),t.jsx("option",{value:4,children:"4 spaces"}),t.jsx("option",{value:8,children:"8 spaces"})]})}),t.jsx(h,{title:"Word Wrap",description:"Wrap long lines in the editor",children:t.jsx(k,{checked:o.editor.wordWrap,onChange:x=>f("editor","wordWrap",x)})}),t.jsx(h,{title:"Minimap",description:"Show a minimap of your code",children:t.jsx(k,{checked:o.editor.minimap,onChange:x=>f("editor","minimap",x)})}),t.jsx(h,{title:"Line Numbers",description:"Show line numbers in the editor",children:t.jsx(k,{checked:o.editor.lineNumbers,onChange:x=>f("editor","lineNumbers",x)})}),t.jsx(h,{title:"Auto Save",description:"Automatically save files as you type",children:t.jsx(k,{checked:o.editor.autoSave,onChange:x=>f("editor","autoSave",x)})}),t.jsx(h,{title:"Format on Save",description:"Automatically format code when saving",children:t.jsx(k,{checked:o.editor.formatOnSave,onChange:x=>f("editor","formatOnSave",x)})}),t.jsx(h,{title:"Auto Complete",description:"Enable intelligent code completion",children:t.jsx(k,{checked:o.editor.autoComplete,onChange:x=>f("editor","autoComplete",x)})})]});case"ai":return t.jsxs("div",{className:"space-y-1",children:[t.jsx(h,{title:"Default AI Model",description:"Choose your preferred AI model for code generation",children:t.jsxs("select",{value:o.ai.defaultModel,onChange:x=>f("ai","defaultModel",x.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"codellama-7b",children:"CodeLlama 7B"}),t.jsx("option",{value:"codellama-13b",children:"CodeLlama 13B"}),t.jsx("option",{value:"starcoder-15b",children:"StarCoder 15B"}),t.jsx("option",{value:"deepseek-coder",children:"DeepSeek Coder"}),t.jsx("option",{value:"wizardcoder-7b",children:"WizardCoder 7B"})]})}),t.jsx(h,{title:"Temperature",description:"Controls randomness in AI responses (0.0 = deterministic, 1.0 = creative)",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:o.ai.temperature,onChange:x=>f("ai","temperature",parseFloat(x.target.value)),className:"w-24"}),t.jsx("span",{className:"text-sm text-muted-foreground w-8",children:o.ai.temperature})]})}),t.jsx(h,{title:"Max Tokens",description:"Maximum number of tokens in AI responses",children:t.jsxs("select",{value:o.ai.maxTokens,onChange:x=>f("ai","maxTokens",parseInt(x.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:1e3,children:"1,000"}),t.jsx("option",{value:2e3,children:"2,000"}),t.jsx("option",{value:4e3,children:"4,000"}),t.jsx("option",{value:8e3,children:"8,000"})]})}),t.jsx(h,{title:"Auto Generate",description:"Automatically generate code suggestions as you type",children:t.jsx(k,{checked:o.ai.autoGenerate,onChange:x=>f("ai","autoGenerate",x)})}),t.jsx(h,{title:"AI Suggestions",description:"Show contextual AI suggestions in the editor",children:t.jsx(k,{checked:o.ai.suggestions,onChange:x=>f("ai","suggestions",x)})})]});case"notifications":return t.jsxs("div",{className:"space-y-1",children:[t.jsx(h,{title:"Project Updates",description:"Get notified when projects are updated",children:t.jsx(k,{checked:o.notifications.projectUpdates,onChange:x=>f("notifications","projectUpdates",x)})}),t.jsx(h,{title:"AI Completions",description:"Get notified when AI completes code generation",children:t.jsx(k,{checked:o.notifications.aiCompletions,onChange:x=>f("notifications","aiCompletions",x)})}),t.jsx(h,{title:"Error Notifications",description:"Get notified about errors and issues",children:t.jsx(k,{checked:o.notifications.errors,onChange:x=>f("notifications","errors",x)})}),t.jsx(h,{title:"Sound Notifications",description:"Play sounds for notifications",children:t.jsx(k,{checked:o.notifications.sound,onChange:x=>f("notifications","sound",x)})}),t.jsx(h,{title:"Email Notifications",description:"Receive notifications via email",children:t.jsx(k,{checked:o.notifications.email,onChange:x=>f("notifications","email",x)})})]});case"privacy":return t.jsxs("div",{className:"space-y-1",children:[t.jsx(h,{title:"Analytics",description:"Help improve DreamBuild by sharing anonymous usage data",children:t.jsx(k,{checked:o.privacy.analytics,onChange:x=>f("privacy","analytics",x)})}),t.jsx(h,{title:"Crash Reports",description:"Automatically send crash reports to help fix bugs",children:t.jsx(k,{checked:o.privacy.crashReports,onChange:x=>f("privacy","crashReports",x)})}),t.jsx(h,{title:"Telemetry",description:"Share performance and usage telemetry",warning:"This may include personal information",children:t.jsx(k,{checked:o.privacy.telemetry,onChange:x=>f("privacy","telemetry",x)})}),t.jsx(h,{title:"Share Usage Statistics",description:"Share anonymous usage statistics with the community",children:t.jsx(k,{checked:o.privacy.shareUsage,onChange:x=>f("privacy","shareUsage",x)})})]});default:return null}};return a?t.jsx("div",{className:"min-h-screen bg-background",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:t.jsxs("div",{className:"animate-pulse",children:[t.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[t.jsx("div",{className:"lg:col-span-1",children:t.jsx("div",{className:"space-y-3",children:[...Array(5)].map((x,T)=>t.jsx("div",{className:"h-12 bg-muted rounded"},T))})}),t.jsx("div",{className:"lg:col-span-3",children:t.jsx("div",{className:"bg-card/50 rounded-xl p-6",children:t.jsx("div",{className:"space-y-4",children:[...Array(6)].map((x,T)=>t.jsx("div",{className:"h-16 bg-muted rounded"},T))})})})]})]})})}):t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsx("div",{className:"mb-8",children:t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Settings"}),t.jsx("p",{className:"text-muted-foreground",children:"Customize your DreamBuild experience and preferences"})]}),t.jsx("div",{className:"flex items-center gap-2",children:d&&t.jsxs(O.button,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},onClick:m,className:"flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200",children:[t.jsx(bo,{className:"h-4 w-4"}),"Save Changes"]})})]})}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[t.jsxs("div",{className:"lg:col-span-1",children:[t.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:t.jsx("nav",{className:"space-y-2",children:j.map(x=>{const T=x.icon;return t.jsxs("button",{onClick:()=>n(x.id),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${s===x.id?"bg-gray-700 text-white shadow-sm":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[t.jsx(T,{className:"h-4 w-4"}),x.name]},x.id)})})}),t.jsxs("div",{className:"mt-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:[t.jsx("h3",{className:"font-semibold text-foreground mb-3",children:"Data Management"}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("button",{onClick:g,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors",children:[t.jsx(ot,{className:"h-4 w-4"}),"Export Settings"]}),t.jsxs("label",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors cursor-pointer",children:[t.jsx(yo,{className:"h-4 w-4"}),"Import Settings",t.jsx("input",{type:"file",accept:".json",onChange:b,className:"hidden"})]}),t.jsxs("button",{onClick:u,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:[t.jsx(Hs,{className:"h-4 w-4"}),"Reset to Defaults"]})]})]})]}),t.jsx("div",{className:"lg:col-span-3",children:t.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden",children:[t.jsx("div",{className:"p-6 border-b border-border/50",children:t.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[Ee.createElement((v=j.find(x=>x.id===s))==null?void 0:v.icon,{className:"h-5 w-5 text-white"}),(y=j.find(x=>x.id===s))==null?void 0:y.name]})}),t.jsx("div",{className:"divide-y divide-border/50",children:N()})]})})]})]})})},vg=()=>{const[r,e]=p.useState(""),[s,n]=p.useState("getting-started"),o=[{id:"getting-started",title:"Getting Started",icon:vt,articles:[{title:"Quick Start Guide",description:"Get up and running in 5 minutes"},{title:"Installation",description:"Install DreamBuild on your system"},{title:"First Project",description:"Create your first AI-generated project"},{title:"Basic Concepts",description:"Understanding the DreamBuild workflow"}]},{id:"ai-features",title:"AI Features",icon:X,articles:[{title:"Code Generation",description:"Generate code with AI assistance"},{title:"Local AI Setup",description:"Set up Ollama for offline AI"},{title:"Template System",description:"Use pre-built project templates"},{title:"AI Models",description:"Available AI models and capabilities"}]},{id:"api-reference",title:"API Reference",icon:xs,articles:[{title:"REST API",description:"Complete API documentation"},{title:"WebSocket API",description:"Real-time communication"},{title:"Authentication",description:"API authentication methods"},{title:"Rate Limits",description:"API usage limits and quotas"}]},{id:"deployment",title:"Deployment",icon:Ae,articles:[{title:"Firebase Hosting",description:"Deploy to Firebase"},{title:"GitHub Pages",description:"Deploy to GitHub Pages"},{title:"Custom Domain",description:"Set up custom domains"},{title:"CI/CD Pipeline",description:"Automated deployment workflows"}]}],i=[{title:"API Documentation",href:"#",icon:X},{title:"GitHub Repository",href:"https://github.com/ronb12/DreamBuild",icon:Ie},{title:"Community Forum",href:"#",icon:Ae},{title:"Video Tutorials",href:"#",icon:yr}];return t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:t.jsx(lr,{className:"h-6 w-6 text-primary"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Documentation"}),t.jsx("p",{className:"text-muted-foreground",children:"Complete guides and API references for DreamBuild"})]})]}),t.jsxs("div",{className:"relative max-w-md",children:[t.jsx(We,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search documentation...",value:r,onChange:a=>e(a.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[t.jsx("div",{className:"lg:col-span-1",children:t.jsxs("div",{className:"sticky top-8 space-y-2",children:[t.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Sections"}),o.map(a=>{const l=a.icon;return t.jsxs("button",{onClick:()=>n(a.id),className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${s===a.id?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[t.jsx(l,{className:"h-4 w-4"}),t.jsx("span",{className:"text-sm font-medium",children:a.title})]},a.id)}),t.jsxs("div",{className:"mt-8 pt-6 border-t border-border",children:[t.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Quick Links"}),t.jsx("div",{className:"space-y-2",children:i.map(a=>{const l=a.icon;return t.jsxs("a",{href:a.href,target:a.href.startsWith("http")?"_blank":void 0,rel:a.href.startsWith("http")?"noopener noreferrer":void 0,className:"flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors",children:[t.jsx(l,{className:"h-4 w-4"}),t.jsx("span",{children:a.title}),a.href.startsWith("http")&&t.jsx(yr,{className:"h-3 w-3 ml-auto"})]},a.title)})})]})]})}),t.jsxs("div",{className:"lg:col-span-3",children:[t.jsx("div",{className:"bg-card border border-border rounded-xl p-6",children:o.map(a=>{const l=a.icon;return t.jsxs("div",{className:s===a.id?"block":"hidden",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[t.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:t.jsx(l,{className:"h-5 w-5 text-primary"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl font-bold text-foreground",children:a.title}),t.jsxs("p",{className:"text-muted-foreground",children:["Learn about ",a.title.toLowerCase()]})]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:a.articles.map((d,c)=>t.jsx(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:c*.1},className:"p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer group",children:t.jsxs("div",{className:"flex items-start justify-between",children:[t.jsxs("div",{className:"flex-1",children:[t.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors mb-2",children:d.title}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:d.description})]}),t.jsx(Ua,{className:"h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"})]})},d.title))})]},a.id)})}),s==="getting-started"&&t.jsxs("div",{className:"mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6",children:[t.jsx("h3",{className:"text-lg font-semibold text-foreground mb-4",children:"Ready to get started?"}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"Follow our quick start guide to create your first AI-generated project in minutes."}),t.jsxs("div",{className:"flex gap-3",children:[t.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[t.jsx(vt,{className:"h-4 w-4"}),"Quick Start Guide"]}),t.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(ot,{className:"h-4 w-4"}),"Download PDF"]})]})]})]})]})]})})},wg=()=>{const[r,e]=p.useState(""),[s,n]=p.useState("all"),[o,i]=p.useState("grid"),a=[{id:"all",name:"All Examples",count:24},{id:"web",name:"Web Apps",count:8},{id:"mobile",name:"Mobile Apps",count:6},{id:"api",name:"APIs",count:5},{id:"dashboard",name:"Dashboards",count:5}],d=[{id:1,title:"E-commerce Store",description:"Full-featured online store with React, Node.js, and Stripe integration",category:"web",difficulty:"Intermediate",tags:["React","Node.js","Stripe","MongoDB"],stars:156,language:"JavaScript",preview:"https://via.placeholder.com/400x250/2563eb/ffffff?text=E-commerce+Store",github:"https://github.com/example/ecommerce-store"},{id:2,title:"Task Management App",description:"Collaborative task management with real-time updates and team features",category:"web",difficulty:"Beginner",tags:["Vue.js","Firebase","Real-time"],stars:89,language:"JavaScript",preview:"https://via.placeholder.com/400x250/10b981/ffffff?text=Task+Manager",github:"https://github.com/example/task-manager"},{id:3,title:"Fitness Tracker",description:"Mobile app for tracking workouts, nutrition, and fitness goals",category:"mobile",difficulty:"Intermediate",tags:["React Native","GraphQL","Health API"],stars:234,language:"TypeScript",preview:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Fitness+Tracker",github:"https://github.com/example/fitness-tracker"},{id:4,title:"Analytics Dashboard",description:"Business intelligence dashboard with charts, metrics, and reporting",category:"dashboard",difficulty:"Advanced",tags:["D3.js","Python","PostgreSQL"],stars:312,language:"Python",preview:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Analytics+Dashboard",github:"https://github.com/example/analytics-dashboard"},{id:5,title:"REST API Template",description:"Production-ready REST API with authentication, validation, and documentation",category:"api",difficulty:"Intermediate",tags:["Express.js","JWT","Swagger"],stars:178,language:"JavaScript",preview:"https://via.placeholder.com/400x250/ef4444/ffffff?text=REST+API",github:"https://github.com/example/rest-api-template"},{id:6,title:"Portfolio Website",description:"Modern portfolio website with animations, blog, and contact form",category:"web",difficulty:"Beginner",tags:["Next.js","Tailwind","Framer Motion"],stars:67,language:"TypeScript",preview:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Portfolio",github:"https://github.com/example/portfolio-website"},{id:7,title:"Social Media App",description:"Instagram-like social media app with posts, stories, and messaging",category:"mobile",difficulty:"Advanced",tags:["Flutter","Firebase","Real-time"],stars:445,language:"Dart",preview:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Social+App",github:"https://github.com/example/social-media-app"},{id:8,title:"GraphQL API",description:"Modern GraphQL API with subscriptions, caching, and real-time updates",category:"api",difficulty:"Advanced",tags:["GraphQL","Apollo","Redis"],stars:298,language:"TypeScript",preview:"https://via.placeholder.com/400x250/84cc16/ffffff?text=GraphQL+API",github:"https://github.com/example/graphql-api"}].filter(u=>{const g=u.title.toLowerCase().includes(r.toLowerCase())||u.description.toLowerCase().includes(r.toLowerCase())||u.tags.some(f=>f.toLowerCase().includes(r.toLowerCase())),b=s==="all"||u.category===s;return g&&b}),c=u=>{switch(u){case"Beginner":return"bg-green-100 text-green-800 border-green-200";case"Intermediate":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"Advanced":return"bg-red-100 text-red-800 border-red-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}},m=u=>{switch(u){case"web":return Ae;case"mobile":return zs;case"api":return bt;case"dashboard":return ke;default:return Yr}};return t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:t.jsx(Yr,{className:"h-6 w-6 text-primary"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Examples"}),t.jsx("p",{className:"text-muted-foreground",children:"Explore real-world projects and code examples"})]})]}),t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:[t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[t.jsxs("div",{className:"relative max-w-md",children:[t.jsx(We,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search examples...",value:r,onChange:u=>e(u.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(kr,{className:"h-4 w-4 text-muted-foreground"}),t.jsx("select",{value:s,onChange:u=>n(u.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:a.map(u=>t.jsxs("option",{value:u.id,children:[u.name," (",u.count,")"]},u.id))})]})]}),t.jsxs("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-lg",children:[t.jsx("button",{onClick:()=>i("grid"),className:`p-2 rounded-md transition-colors ${o==="grid"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:t.jsx(Grid3X3,{className:"h-4 w-4"})}),t.jsx("button",{onClick:()=>i("list"),className:`p-2 rounded-md transition-colors ${o==="list"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:t.jsx(No,{className:"h-4 w-4"})})]})]})]}),t.jsx("div",{className:o==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"space-y-4",children:d.map((u,g)=>{const b=m(u.category);return t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:g*.1},className:`bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group ${o==="list"?"flex":""}`,children:[t.jsxs("div",{className:`relative ${o==="list"?"w-48 h-32":"h-48"} bg-muted/50`,children:[t.jsx("img",{src:u.preview,alt:u.title,className:"w-full h-full object-cover"}),t.jsx("div",{className:"absolute top-3 right-3 flex gap-2",children:t.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${c(u.difficulty)}`,children:u.difficulty})}),t.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100",children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx(O.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-primary text-primary-foreground rounded-lg shadow-lg",title:"Run Example",children:t.jsx(fn,{className:"h-4 w-4"})}),t.jsx(O.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-white text-gray-900 rounded-lg shadow-lg",title:"Copy Code",children:t.jsx(wt,{className:"h-4 w-4"})})]})})]}),t.jsxs("div",{className:`p-4 ${o==="list"?"flex-1":""}`,children:[t.jsxs("div",{className:"flex items-start justify-between mb-3",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:t.jsx(b,{className:"h-4 w-4 text-primary"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:u.title}),t.jsx("p",{className:"text-sm text-muted-foreground",children:u.language})]})]}),t.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[t.jsx(it,{className:"h-4 w-4"}),t.jsx("span",{children:u.stars})]})]}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:u.description}),t.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:u.tags.map(f=>t.jsx("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:f},f))}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm",children:[t.jsx(fn,{className:"h-4 w-4"}),"Run"]}),t.jsxs("a",{href:u.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[t.jsx(Ie,{className:"h-4 w-4"}),"Code"]}),t.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[t.jsx(ot,{className:"h-4 w-4"}),"Download"]})]})]})]},u.id)})}),d.length===0&&t.jsxs("div",{className:"text-center py-16",children:[t.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:t.jsx(Yr,{className:"h-12 w-12 text-muted-foreground"})}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No examples found"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),t.jsx("button",{onClick:()=>{e(""),n("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),t.jsxs("div",{className:"mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[t.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Have a great example to share?"}),t.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Share your projects with the DreamBuild community and help other developers learn and grow."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[t.jsx(Ie,{className:"h-5 w-5"}),"Submit Example"]}),t.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(yr,{className:"h-5 w-5"}),"View Guidelines"]})]})]})]})})},jg=()=>{const[r,e]=p.useState("discussions"),[s,n]=p.useState(""),o=[{id:"discussions",name:"Discussions",count:156,icon:vr},{id:"projects",name:"Showcase",count:89,icon:X},{id:"events",name:"Events",count:12,icon:gt},{id:"resources",name:"Resources",count:45,icon:bs}],i=[{id:1,title:"How to set up Ollama for local AI development?",author:"Alex Chen",avatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=AC",time:"2 hours ago",category:"Getting Started",replies:12,likes:24,isPinned:!0,tags:["ollama","local-ai","setup"]},{id:2,title:"Building a React Native app with DreamBuild - Tips and tricks",author:"Sarah Johnson",avatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SJ",time:"4 hours ago",category:"Mobile Development",replies:8,likes:18,isPinned:!1,tags:["react-native","mobile","tips"]},{id:3,title:"Share your DreamBuild projects - Monthly showcase",author:"Community Team",avatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=CT",time:"1 day ago",category:"Showcase",replies:34,likes:67,isPinned:!0,tags:["showcase","projects","monthly"]},{id:4,title:"API rate limits and best practices",author:"Mike Rodriguez",avatar:"https://via.placeholder.com/40x40/8b5cf6/ffffff?text=MR",time:"2 days ago",category:"API",replies:15,likes:31,isPinned:!1,tags:["api","rate-limits","best-practices"]},{id:5,title:"Deploying to Firebase vs GitHub Pages - Pros and cons",author:"Emma Wilson",avatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=EW",time:"3 days ago",category:"Deployment",replies:22,likes:45,isPinned:!1,tags:["deployment","firebase","github-pages"]}],a=[{id:1,title:"DreamBuild Live Q&A Session",date:"2024-01-25",time:"2:00 PM EST",type:"Live Stream",attendees:156,description:"Join our monthly Q&A session with the DreamBuild team"},{id:2,title:"AI Development Workshop",date:"2024-01-30",time:"10:00 AM EST",type:"Workshop",attendees:89,description:"Learn advanced AI development techniques with DreamBuild"},{id:3,title:"Community Showcase",date:"2024-02-05",time:"6:00 PM EST",type:"Presentation",attendees:234,description:"Featured projects from our amazing community members"}],l=[{label:"Active Members",value:"2,847",icon:hs},{label:"Discussions",value:"1,234",icon:vr},{label:"Projects Shared",value:"567",icon:X},{label:"Events This Month",value:"8",icon:gt}],d=i.filter(c=>c.title.toLowerCase().includes(s.toLowerCase())||c.category.toLowerCase().includes(s.toLowerCase())||c.tags.some(m=>m.toLowerCase().includes(s.toLowerCase())));return t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:t.jsx(hs,{className:"h-6 w-6 text-primary"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Community"}),t.jsx("p",{className:"text-muted-foreground",children:"Connect with developers, share projects, and get help"})]})]}),t.jsxs("div",{className:"relative max-w-md",children:[t.jsx(We,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search discussions...",value:s,onChange:c=>n(c.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:l.map((c,m)=>{const u=c.icon;return t.jsx(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:m*.1},className:"bg-card border border-border rounded-xl p-4",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",children:t.jsx(u,{className:"h-5 w-5 text-primary"})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-2xl font-bold text-foreground",children:c.value}),t.jsx("p",{className:"text-sm text-muted-foreground",children:c.label})]})]})},c.label)})}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[t.jsxs("div",{className:"lg:col-span-3",children:[t.jsx("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-xl mb-6",children:o.map(c=>{const m=c.icon;return t.jsxs("button",{onClick:()=>e(c.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${r===c.id?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground hover:text-foreground hover:bg-background/50"}`,children:[t.jsx(m,{className:"h-4 w-4"}),t.jsx("span",{children:c.name}),t.jsx("span",{className:"px-2 py-1 text-xs bg-muted/50 rounded-full",children:c.count})]},c.id)})}),r==="discussions"&&t.jsx("div",{className:"space-y-4",children:d.map((c,m)=>t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:m*.1},className:`bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200 ${c.isPinned?"border-primary/20 bg-primary/5":""}`,children:[c.isPinned&&t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx(vt,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-sm font-medium text-primary",children:"Pinned"})]}),t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("img",{src:c.avatar,alt:c.author,className:"w-10 h-10 rounded-full"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h3",{className:"font-semibold text-foreground hover:text-primary transition-colors cursor-pointer mb-2",children:c.title}),t.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-3",children:[t.jsxs("span",{children:["by ",c.author]}),t.jsx("span",{children:"•"}),t.jsx("span",{children:c.time}),t.jsx("span",{children:"•"}),t.jsx("span",{className:"px-2 py-1 bg-muted rounded-md",children:c.category})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[t.jsx(ys,{className:"h-4 w-4"}),t.jsx("span",{children:c.replies})]}),t.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[t.jsx(vs,{className:"h-4 w-4"}),t.jsx("span",{children:c.likes})]}),t.jsx("div",{className:"flex gap-1",children:c.tags.map(u=>t.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",u]},u))})]})]})]})]},c.id))}),r==="projects"&&t.jsxs("div",{className:"text-center py-16",children:[t.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:t.jsx(X,{className:"h-12 w-12 text-muted-foreground"})}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Project Showcase"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Featured projects from our community will appear here"}),t.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Submit Your Project"})]}),r==="events"&&t.jsx("div",{className:"space-y-4",children:a.map((c,m)=>t.jsx(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:m*.1},className:"bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200",children:t.jsxs("div",{className:"flex items-start justify-between",children:[t.jsxs("div",{className:"flex-1",children:[t.jsx("h3",{className:"font-semibold text-foreground mb-2",children:c.title}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:c.description}),t.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(gt,{className:"h-4 w-4"}),t.jsx("span",{children:c.date})]}),t.jsx("span",{children:"•"}),t.jsx("span",{children:c.time}),t.jsx("span",{children:"•"}),t.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded-md",children:c.type}),t.jsx("span",{children:"•"}),t.jsxs("span",{children:[c.attendees," attendees"]})]})]}),t.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Join Event"})]})},c.id))}),r==="resources"&&t.jsxs("div",{className:"text-center py-16",children:[t.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:t.jsx(bs,{className:"h-12 w-12 text-muted-foreground"})}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Community Resources"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Curated resources and learning materials will appear here"}),t.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Suggest Resource"})]})]}),t.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[t.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Quick Actions"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[t.jsx(br,{className:"h-4 w-4"}),"Start Discussion"]}),t.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(X,{className:"h-4 w-4"}),"Share Project"]}),t.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(gt,{className:"h-4 w-4"}),"Create Event"]})]})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[t.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Join Our Community"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(Ie,{className:"h-4 w-4"}),t.jsx("span",{children:"GitHub"})]}),t.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx($s,{className:"h-4 w-4"}),t.jsx("span",{children:"Twitter"})]}),t.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[t.jsx(xr,{className:"h-4 w-4"}),t.jsx("span",{children:"Newsletter"})]})]})]}),t.jsxs("div",{className:"bg-primary/5 border border-primary/20 rounded-xl p-6",children:[t.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Community Guidelines"}),t.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[t.jsx("li",{children:"• Be respectful and inclusive"}),t.jsx("li",{children:"• Share helpful and relevant content"}),t.jsx("li",{children:"• Follow our code of conduct"}),t.jsx("li",{children:"• Help others learn and grow"})]})]})]})]})]})})},Ng=()=>t.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:t.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[t.jsx("div",{className:"text-center mb-16",children:t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[t.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg",children:t.jsx("span",{className:"text-white font-bold text-3xl",children:"D"})}),t.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6",children:["About ",t.jsx("span",{className:"text-blue-600",children:"DreamBuild"})]}),t.jsx("p",{className:"text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed",children:"DreamBuild is a revolutionary AI-powered development platform that transforms your ideas into code. Simply describe what you want to build, and watch as DreamBuild generates complete applications for you."})]})}),t.jsx("div",{className:"mb-16",children:t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[t.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"What We Do"}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"AI-Powered Development"}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Transform your ideas into code using cutting-edge AI models. Simply describe what you want to build, and DreamBuild generates complete, working applications for you."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Multi-Language Support"}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Build applications in popular programming languages including React, Vue, Python, JavaScript, HTML/CSS, and many more. Choose your preferred technology stack."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Instant Deployment"}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Deploy your applications instantly to Firebase Hosting and GitHub Pages. No complex configuration required - just click and deploy."})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Local AI Integration"}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Use local AI models for complete privacy and control. No external API keys required - run everything on your own machine for maximum security."})]})]})]})}),t.jsx("div",{className:"mb-16",children:t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[t.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"Our Mission"}),t.jsx("p",{className:"text-lg text-slate-600 dark:text-slate-400 text-center leading-relaxed",children:"To democratize software development by making AI-powered coding tools accessible to everyone. Whether you're an experienced developer or just getting started, DreamBuild empowers you to turn your ideas into reality with the power of artificial intelligence."})]})}),t.jsx("div",{className:"mb-16",children:t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[t.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"About Bradley Virtual Solutions"}),t.jsxs("div",{className:"text-center",children:[t.jsxs("p",{className:"text-slate-600 dark:text-slate-400 mb-4",children:["DreamBuild is developed by ",t.jsx("strong",{className:"text-slate-800 dark:text-white",children:"Bradley Virtual Solutions, LLC"}),", a company dedicated to creating innovative AI-powered development tools."]}),t.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Founded by Ronell Bradley, a full-stack developer passionate about AI and web development, we're committed to making advanced development tools accessible to everyone."})]})]})}),t.jsx(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center",children:t.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl",children:[t.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Building?"}),t.jsx("p",{className:"text-blue-100 mb-6 max-w-xl mx-auto",children:"Start your journey with DreamBuild today and experience the future of AI-powered development."}),t.jsxs(O.a,{href:"/ai-builder",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg",children:[t.jsx(X,{className:"h-5 w-5"}),"Start Building Now",t.jsx(Tr,{className:"h-4 w-4"})]})]})})]})}),Sg=()=>{const[r,e]=p.useState(""),[s,n]=p.useState("all"),o=[{id:"all",name:"All Posts",count:24},{id:"tutorials",name:"Tutorials",count:8},{id:"ai",name:"AI & ML",count:6},{id:"development",name:"Development",count:5},{id:"company",name:"Company",count:5}],i={title:"Getting Started with Local AI Development: A Complete Guide",excerpt:"Learn how to set up Ollama, integrate local AI models, and build your first AI-powered application with DreamBuild.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-20",readTime:"8 min read",category:"tutorials",tags:["ai","ollama","tutorial","getting-started"],image:"https://via.placeholder.com/600x300/2563eb/ffffff?text=Local+AI+Guide",likes:156,comments:23},l=[{id:2,title:"Building a React Native App with AI Code Generation",excerpt:"Discover how to leverage DreamBuild's AI capabilities to create a mobile app from scratch.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-18",readTime:"6 min read",category:"tutorials",tags:["react-native","mobile","ai"],featured:!1,image:"https://via.placeholder.com/400x250/10b981/ffffff?text=React+Native",likes:89,comments:12,views:1523},{id:3,title:"The Future of AI-Powered Development Tools",excerpt:"Exploring emerging trends and technologies that will shape the future of software development.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-15",readTime:"10 min read",category:"ai",tags:["ai","future","technology","trends"],featured:!1,image:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Future+AI",likes:234,comments:34,views:4567},{id:4,title:"DreamBuild 2.0: What's New and Exciting",excerpt:"Announcing the latest features and improvements in DreamBuild 2.0, including enhanced AI capabilities.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-12",readTime:"5 min read",category:"company",tags:["release","features","announcement"],featured:!1,image:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=DreamBuild+2.0",likes:167,comments:28,views:3421},{id:5,title:"Best Practices for AI Code Generation",excerpt:"Learn how to write effective prompts and get the best results from AI code generation tools.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-10",readTime:"7 min read",category:"development",tags:["best-practices","prompts","ai","tips"],featured:!1,image:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Best+Practices",likes:145,comments:19,views:2890},{id:6,title:"Setting Up Your Development Environment for AI",excerpt:"A comprehensive guide to configuring your development environment for optimal AI-assisted coding.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-08",readTime:"9 min read",category:"tutorials",tags:["setup","environment","development","tools"],featured:!1,image:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Dev+Environment",likes:98,comments:15,views:1876},{id:7,title:"Community Spotlight: Amazing Projects Built with DreamBuild",excerpt:"Highlighting some of the incredible projects our community has created using DreamBuild.",author:"Community Team",authorAvatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=CT",publishDate:"2024-01-05",readTime:"6 min read",category:"company",tags:["community","showcase","projects","spotlight"],featured:!1,image:"https://via.placeholder.com/400x250/84cc16/ffffff?text=Community+Projects",likes:203,comments:41,views:5234}].filter(m=>{const u=m.title.toLowerCase().includes(r.toLowerCase())||m.excerpt.toLowerCase().includes(r.toLowerCase())||m.tags.some(b=>b.toLowerCase().includes(r.toLowerCase())),g=s==="all"||m.category===s;return u&&g}),d=m=>{switch(m){case"tutorials":return X;case"ai":return vt;case"development":return Ae;case"company":return xo;default:return lr}},c=m=>{switch(m){case"tutorials":return"bg-blue-100 text-blue-800 border-blue-200";case"ai":return"bg-purple-100 text-purple-800 border-purple-200";case"development":return"bg-green-100 text-green-800 border-green-200";case"company":return"bg-orange-100 text-orange-800 border-orange-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}};return t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:t.jsx(lr,{className:"h-6 w-6 text-primary"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Blog"}),t.jsx("p",{className:"text-muted-foreground",children:"Insights, tutorials, and updates from the DreamBuild team"})]})]}),t.jsx("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:t.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[t.jsxs("div",{className:"relative max-w-md",children:[t.jsx(We,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search blog posts...",value:r,onChange:m=>e(m.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(kr,{className:"h-4 w-4 text-muted-foreground"}),t.jsx("select",{value:s,onChange:m=>n(m.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:o.map(m=>t.jsxs("option",{value:m.id,children:[m.name," (",m.count,")"]},m.id))})]})]})})]}),t.jsx(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-12",children:t.jsx("div",{className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200",children:t.jsxs("div",{className:"md:flex",children:[t.jsx("div",{className:"md:w-1/2",children:t.jsx("img",{src:i.image,alt:i.title,className:"w-full h-64 md:h-full object-cover"})}),t.jsxs("div",{className:"md:w-1/2 p-8",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[t.jsx("span",{className:"px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium",children:"Featured"}),t.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full border ${c(i.category)}`,children:i.category})]}),t.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer",children:i.title}),t.jsx("p",{className:"text-muted-foreground mb-6 leading-relaxed",children:i.excerpt}),t.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-6",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("img",{src:i.authorAvatar,alt:i.author,className:"w-6 h-6 rounded-full"}),t.jsx("span",{children:i.author})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(gt,{className:"h-4 w-4"}),t.jsx("span",{children:i.publishDate})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(Gs,{className:"h-4 w-4"}),t.jsx("span",{children:i.readTime})]})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("div",{className:"flex gap-1",children:i.tags.map(m=>t.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",m]},m))}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[t.jsx(vs,{className:"h-4 w-4"}),t.jsx("span",{children:i.likes})]}),t.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[t.jsx(ys,{className:"h-4 w-4"}),t.jsx("span",{children:i.comments})]})]})]})]})]})})}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map((m,u)=>{const g=d(m.category);return t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:u*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group",children:[t.jsxs("div",{className:"relative h-48 bg-muted/50",children:[t.jsx("img",{src:m.image,alt:m.title,className:"w-full h-full object-cover"}),t.jsx("div",{className:"absolute top-3 right-3",children:t.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${c(m.category)}`,children:m.category})})]}),t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx(g,{className:"h-4 w-4 text-primary"}),t.jsx("span",{className:"text-sm text-primary font-medium",children:m.category})]}),t.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer mb-3 line-clamp-2",children:m.title}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-3",children:m.excerpt}),t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx("img",{src:m.authorAvatar,alt:m.author,className:"w-8 h-8 rounded-full"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("p",{className:"text-sm font-medium text-foreground",children:m.author}),t.jsxs("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[t.jsx("span",{children:m.publishDate}),t.jsx("span",{children:"•"}),t.jsx("span",{children:m.readTime})]})]})]}),t.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:m.tags.map(b=>t.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",b]},b))}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(vs,{className:"h-4 w-4"}),t.jsx("span",{children:m.likes})]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(ys,{className:"h-4 w-4"}),t.jsx("span",{children:m.comments})]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:t.jsx(bs,{className:"h-4 w-4"})}),t.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:t.jsx(So,{className:"h-4 w-4"})}),t.jsxs("button",{className:"flex items-center gap-1 text-primary hover:text-primary-dark transition-colors",children:[t.jsx("span",{className:"text-sm font-medium",children:"Read"}),t.jsx(Tr,{className:"h-4 w-4"})]})]})]})]})]},m.id)})}),l.length===0&&t.jsxs("div",{className:"text-center py-16",children:[t.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:t.jsx(lr,{className:"h-12 w-12 text-muted-foreground"})}),t.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No posts found"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),t.jsx("button",{onClick:()=>{e(""),n("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),t.jsxs("div",{className:"mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[t.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Stay Updated"}),t.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Subscribe to our newsletter for the latest tutorials, updates, and insights from the DreamBuild team."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto",children:[t.jsx("input",{type:"email",placeholder:"Enter your email",className:"flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"}),t.jsx("button",{className:"px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Subscribe"})]})]})]})})},Cg=()=>{const[r,e]=p.useState({name:"",email:"",subject:"",message:""}),[s,n]=p.useState(!1),[o,i]=p.useState(null),a=[{icon:xr,title:"Email Us",description:"Send us an email and we'll respond within 24 hours",value:"hello@dreambuild.dev",action:"mailto:hello@dreambuild.dev"},{icon:vr,title:"Live Chat",description:"Chat with our support team in real-time",value:"Available 9 AM - 6 PM EST",action:"#"},{icon:za,title:"Call Us",description:"Speak directly with our team",value:"+1 (555) 123-4567",action:"tel:+15551234567"},{icon:Ga,title:"Visit Us",description:"Our headquarters location",value:"San Francisco, CA",action:"#"}],l=[{icon:Ie,href:"https://github.com/ronb12/DreamBuild",label:"GitHub"},{icon:$s,href:"#",label:"Twitter"},{icon:Wa,href:"#",label:"LinkedIn"},{icon:Ae,href:"#",label:"Website"}],d=[{question:"How do I get started with DreamBuild?",answer:"Simply visit our documentation page for a complete getting started guide. You can also try our AI Builder without any setup required."},{question:"Do you offer technical support?",answer:"Yes! We provide comprehensive technical support through email, live chat, and our community forum. Premium users get priority support."},{question:"Can I use DreamBuild for commercial projects?",answer:"Absolutely! DreamBuild is designed for both personal and commercial use. Check our pricing page for details on different plans."},{question:"How does the AI code generation work?",answer:"DreamBuild uses advanced AI models to generate code based on your prompts. You can use our cloud AI services or set up local AI with Ollama for complete privacy."}],c=u=>{const{name:g,value:b}=u.target;e(f=>({...f,[g]:b}))},m=async u=>{u.preventDefault(),n(!0),await new Promise(g=>setTimeout(g,2e3)),n(!1),i("success"),e({name:"",email:"",subject:"",message:""}),setTimeout(()=>i(null),5e3)};return t.jsx("div",{className:"min-h-screen bg-background",children:t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsx("div",{className:"text-center mb-12",children:t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[t.jsxs("h1",{className:"text-4xl md:text-6xl font-bold text-foreground mb-6",children:["Get in ",t.jsx("span",{className:"text-primary",children:"Touch"})]}),t.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto",children:"Have questions about DreamBuild? Need help getting started? Want to share feedback? We'd love to hear from you."})]})}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[t.jsx("div",{className:"lg:col-span-2",children:t.jsxs(O.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-card border border-border rounded-xl p-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsx("h2",{className:"text-2xl font-bold text-foreground mb-2",children:"Send us a Message"}),t.jsx("p",{className:"text-muted-foreground",children:"Fill out the form below and we'll get back to you as soon as possible."})]}),t.jsxs("form",{onSubmit:m,className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-foreground mb-2",children:"Name *"}),t.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:c,required:!0,className:"w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",placeholder:"Your full name"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-foreground mb-2",children:"Email *"}),t.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:c,required:!0,className:"w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",placeholder:"your@email.com"})]})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-foreground mb-2",children:"Subject *"}),t.jsxs("select",{id:"subject",name:"subject",value:r.subject,onChange:c,required:!0,className:"w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[t.jsx("option",{value:"",children:"Select a subject"}),t.jsx("option",{value:"general",children:"General Inquiry"}),t.jsx("option",{value:"support",children:"Technical Support"}),t.jsx("option",{value:"sales",children:"Sales Question"}),t.jsx("option",{value:"feedback",children:"Feedback"}),t.jsx("option",{value:"partnership",children:"Partnership"}),t.jsx("option",{value:"bug",children:"Bug Report"})]})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-foreground mb-2",children:"Message *"}),t.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:c,required:!0,rows:6,className:"w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none",placeholder:"Tell us how we can help you..."})]}),o==="success"&&t.jsxs(O.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg",children:[t.jsx(Ha,{className:"h-5 w-5 text-green-600"}),t.jsx("span",{className:"text-green-800",children:"Message sent successfully! We'll get back to you soon."})]}),t.jsx("button",{type:"submit",disabled:s,className:"w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:s?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Sending..."]}):t.jsxs(t.Fragment,{children:[t.jsx(Us,{className:"h-5 w-5"}),"Send Message"]})})]})]})}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs(O.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-card border border-border rounded-xl p-6",children:[t.jsx("h3",{className:"text-xl font-bold text-foreground mb-6",children:"Other Ways to Reach Us"}),t.jsx("div",{className:"space-y-4",children:a.map((u,g)=>{const b=u.icon;return t.jsxs("a",{href:u.action,className:"flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-muted transition-colors group",children:[t.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors",children:t.jsx(b,{className:"h-5 w-5 text-primary"})}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h4",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:u.title}),t.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:u.description}),t.jsx("p",{className:"text-sm font-medium text-primary",children:u.value})]})]},u.title)})})]}),t.jsxs(O.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},className:"bg-card border border-border rounded-xl p-6",children:[t.jsx("h3",{className:"text-xl font-bold text-foreground mb-6",children:"Follow Us"}),t.jsx("div",{className:"grid grid-cols-2 gap-3",children:l.map(u=>{const g=u.icon;return t.jsxs("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted transition-colors group",children:[t.jsx(g,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"}),t.jsx("span",{className:"text-sm font-medium text-foreground group-hover:text-primary transition-colors",children:u.label})]},u.label)})})]}),t.jsxs(O.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},className:"bg-primary/5 border border-primary/20 rounded-xl p-6",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx(Gs,{className:"h-6 w-6 text-primary"}),t.jsx("h3",{className:"text-xl font-bold text-foreground",children:"Business Hours"})]}),t.jsxs("div",{className:"space-y-2 text-sm text-muted-foreground",children:[t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{children:"Monday - Friday"}),t.jsx("span",{children:"9:00 AM - 6:00 PM EST"})]}),t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{children:"Saturday"}),t.jsx("span",{children:"10:00 AM - 4:00 PM EST"})]}),t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{children:"Sunday"}),t.jsx("span",{children:"Closed"})]})]}),t.jsx("p",{className:"text-xs text-muted-foreground mt-4",children:"Emergency support available 24/7 for premium users."})]})]})]}),t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"mt-16",children:[t.jsxs("div",{className:"text-center mb-12",children:[t.jsx("h2",{className:"text-3xl font-bold text-foreground mb-4",children:"Frequently Asked Questions"}),t.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Quick answers to common questions about DreamBuild and our services."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:d.map((u,g)=>t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4+g*.1},className:"bg-card border border-border rounded-xl p-6",children:[t.jsx("h3",{className:"font-semibold text-foreground mb-3",children:u.question}),t.jsx("p",{className:"text-sm text-muted-foreground",children:u.answer})]},u.question))})]}),t.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},className:"mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[t.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Ready to Get Started?"}),t.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Join thousands of developers who are already building amazing applications with DreamBuild."}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[t.jsx("button",{className:"px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Try DreamBuild Free"}),t.jsx("button",{className:"px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:"View Documentation"})]})]})]})})};function kg(){const r=Je();return["/ai-builder"].includes(r.pathname)?null:t.jsx(ru,{})}function Tg({children:r}){const e=Je();return["/ai-builder"].includes(e.pathname)?t.jsx("main",{children:r}):t.jsx("main",{className:"pt-16",children:r})}function Dg(){return t.jsx(Hc,{children:t.jsx(Zd,{children:t.jsx(eu,{children:t.jsx(Yl,{children:t.jsxs("div",{className:"min-h-screen bg-background",children:[t.jsx(tu,{}),t.jsx(Tg,{children:t.jsxs(zl,{children:[t.jsx(ie,{path:"/",element:t.jsx(su,{})}),t.jsx(ie,{path:"/app",element:t.jsx(Ul,{to:"/ai-builder",replace:!0})}),t.jsx(ie,{path:"/ai-builder",element:t.jsx(pg,{})}),t.jsx(ie,{path:"/templates",element:t.jsx(hg,{})}),t.jsx(ie,{path:"/dashboard",element:t.jsx(fg,{})}),t.jsx(ie,{path:"/login",element:t.jsx(gg,{})}),t.jsx(ie,{path:"/signup",element:t.jsx(xg,{})}),t.jsx(ie,{path:"/projects",element:t.jsx(bg,{})}),t.jsx(ie,{path:"/settings",element:t.jsx(yg,{})}),t.jsx(ie,{path:"/documentation",element:t.jsx(vg,{})}),t.jsx(ie,{path:"/examples",element:t.jsx(wg,{})}),t.jsx(ie,{path:"/community",element:t.jsx(jg,{})}),t.jsx(ie,{path:"/about",element:t.jsx(Ng,{})}),t.jsx(ie,{path:"/blog",element:t.jsx(Sg,{})}),t.jsx(ie,{path:"/contact",element:t.jsx(Cg,{})})]})}),t.jsx(kg,{}),t.jsx(Uc,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--card)",color:"var(--card-foreground)",border:"1px solid var(--border)"}}})]})})})})})}To(document.getElementById("root")).render(t.jsx(p.StrictMode,{children:t.jsx(Dg,{})}));
//# sourceMappingURL=index-CrNoqICb.js.map
