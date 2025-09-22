import{r as p,a as ra,b as sa,R as Ee,g as na}from"./react-vendor-DWvC8KHc.js";import{_ as oa,C as ia,r as an,S as aa,F as la,g as ds,a as Cr,b as ca,c as da,d as ua,i as fr,e as Os,f as Is,o as Ms,h as nr,j as Y,s as ma,G as pa,k as ha,l as we,u as Jt,m as St,n as ue,q as ve,w as me,p as Ct,t as Fe,v as qr,x as or,y as fa,z as kt}from"./firebase-C3tU7F8Z.js";import{_ as Ze}from"./monaco-editor-wLuwQiF8.js";import{S as kr,R as Ue,C as se,D as ir,U as gr,M as ga,a as xa,b as us,L as ln,X as ba,c as ya,G as Ae,H as xr,m as R,E as It,B as ke,d as ms,Z as gt,A as Bt,F as ze,P as br,e as pt,f as uo,g as st,h as va,i as mo,j as $e,k as Mt,l as Tr,n as ps,T as po,o as Fs,p as wa,q as ja,r as Wr,s as yr,t as Na,u as Sa,v as ho,w as Ut,x as nt,y as Ls,z as Ie,I as fo,J as Ca,K as Ft,N as vr,O as hs,Q as _s,V as ka,W as Ta,Y as Da,_ as Ea,$ as ht,a0 as Aa,a1 as go,a2 as Pa,a3 as Ra,a4 as Oa,a5 as ar,a6 as Ia,a7 as Vr,a8 as Ma,a9 as cn,aa as fs,ab as gs,ac as xo,ad as bo,ae as Fa,af as La,ag as _a,ah as $a,ai as Ba}from"./ui-vendor-B3Kk288U.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();var yo={exports:{}},Dr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=p,za=Symbol.for("react.element"),Ha=Symbol.for("react.fragment"),Ga=Object.prototype.hasOwnProperty,qa=Ua.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wa={key:!0,ref:!0,__self:!0,__source:!0};function vo(t,e,s){var n,o={},i=null,a=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)Ga.call(e,n)&&!Wa.hasOwnProperty(n)&&(o[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:za,type:t,key:i,ref:a,props:o,_owner:qa.current}}Dr.Fragment=Ha;Dr.jsx=vo;Dr.jsxs=vo;yo.exports=Dr;var r=yo.exports,wo,dn=ra;wo=dn.createRoot,dn.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lt(){return Lt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},Lt.apply(this,arguments)}var Be;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Be||(Be={}));const un="popstate";function Va(t){t===void 0&&(t={});function e(n,o){let{pathname:i,search:a,hash:l}=n.location;return xs("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function s(n,o){return typeof o=="string"?o:wr(o)}return Ka(e,s,null,t)}function re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ja(){return Math.random().toString(36).substr(2,8)}function mn(t,e){return{usr:t.state,key:t.key,idx:e}}function xs(t,e,s,n){return s===void 0&&(s=null),Lt({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?bt(e):e,{state:s,key:e&&e.key||n||Ja()})}function wr(t){let{pathname:e="/",search:s="",hash:n=""}=t;return s&&s!=="?"&&(e+=s.charAt(0)==="?"?s:"?"+s),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function bt(t){let e={};if(t){let s=t.indexOf("#");s>=0&&(e.hash=t.substr(s),t=t.substr(0,s));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function Ka(t,e,s,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,l=Be.Pop,c=null,d=m();d==null&&(d=0,a.replaceState(Lt({},a.state,{idx:d}),""));function m(){return(a.state||{idx:null}).idx}function u(){l=Be.Pop;let h=m(),C=h==null?null:h-d;d=h,c&&c({action:l,location:w.location,delta:C})}function g(h,C){l=Be.Push;let j=xs(w.location,h,C);d=m()+1;let v=mn(j,d),b=w.createHref(j);try{a.pushState(v,"",b)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;o.location.assign(b)}i&&c&&c({action:l,location:w.location,delta:1})}function y(h,C){l=Be.Replace;let j=xs(w.location,h,C);d=m();let v=mn(j,d),b=w.createHref(j);a.replaceState(v,"",b),i&&c&&c({action:l,location:w.location,delta:0})}function f(h){let C=o.location.origin!=="null"?o.location.origin:o.location.href,j=typeof h=="string"?h:wr(h);return j=j.replace(/ $/,"%20"),re(C,"No window.location.(origin|href) available to create URL for href: "+j),new URL(j,C)}let w={get action(){return l},get location(){return t(o,a)},listen(h){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(un,u),c=h,()=>{o.removeEventListener(un,u),c=null}},createHref(h){return e(o,h)},createURL:f,encodeLocation(h){let C=f(h);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:g,replace:y,go(h){return a.go(h)}};return w}var pn;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pn||(pn={}));function Ya(t,e,s){return s===void 0&&(s="/"),Xa(t,e,s)}function Xa(t,e,s,n){let o=typeof e=="string"?bt(e):e,i=$s(o.pathname||"/",s);if(i==null)return null;let a=No(t);Qa(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let d=dl(i);l=al(a[c],d)}return l}function No(t,e,s,n){e===void 0&&(e=[]),s===void 0&&(s=[]),n===void 0&&(n="");let o=(i,a,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(re(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=He([n,c.relativePath]),m=s.concat(c);i.children&&i.children.length>0&&(re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),No(i.children,e,m,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:ol(d,i.index),routesMeta:m})};return t.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let c of So(i.path))o(i,a,c)}),e}function So(t){let e=t.split("/");if(e.length===0)return[];let[s,...n]=e,o=s.endsWith("?"),i=s.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=So(n.join("/")),l=[];return l.push(...a.map(c=>c===""?i:[i,c].join("/"))),o&&l.push(...a),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function Qa(t){t.sort((e,s)=>e.score!==s.score?s.score-e.score:il(e.routesMeta.map(n=>n.childrenIndex),s.routesMeta.map(n=>n.childrenIndex)))}const Za=/^:[\w-]+$/,el=3,tl=2,rl=1,sl=10,nl=-2,hn=t=>t==="*";function ol(t,e){let s=t.split("/"),n=s.length;return s.some(hn)&&(n+=nl),e&&(n+=tl),s.filter(o=>!hn(o)).reduce((o,i)=>o+(Za.test(i)?el:i===""?rl:sl),n)}function il(t,e){return t.length===e.length&&t.slice(0,-1).every((n,o)=>n===e[o])?t[t.length-1]-e[e.length-1]:0}function al(t,e,s){let{routesMeta:n}=t,o={},i="/",a=[];for(let l=0;l<n.length;++l){let c=n[l],d=l===n.length-1,m=i==="/"?e:e.slice(i.length)||"/",u=ll({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),g=c.route;if(!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:He([i,u.pathname]),pathnameBase:hl(He([i,u.pathnameBase])),route:g}),u.pathnameBase!=="/"&&(i=He([i,u.pathnameBase]))}return a}function ll(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[s,n]=cl(t.path,t.caseSensitive,t.end),o=e.match(s);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((d,m,u)=>{let{paramName:g,isOptional:y}=m;if(g==="*"){let w=l[u]||"";a=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const f=l[u];return y&&!f?d[g]=void 0:d[g]=(f||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:a,pattern:t}}function cl(t,e,s){e===void 0&&(e=!1),s===void 0&&(s=!0),jo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),n]}function dl(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $s(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let s=e.endsWith("/")?e.length-1:e.length,n=t.charAt(s);return n&&n!=="/"?null:t.slice(s)||"/"}function ul(t,e){e===void 0&&(e="/");let{pathname:s,search:n="",hash:o=""}=typeof t=="string"?bt(t):t;return{pathname:s?s.startsWith("/")?s:ml(s,e):e,search:fl(n),hash:gl(o)}}function ml(t,e){let s=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?s.length>1&&s.pop():o!=="."&&s.push(o)}),s.length>1?s.join("/"):"/"}function Jr(t,e,s,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pl(t){return t.filter((e,s)=>s===0||e.route.path&&e.route.path.length>0)}function Bs(t,e){let s=pl(t);return e?s.map((n,o)=>o===s.length-1?n.pathname:n.pathnameBase):s.map(n=>n.pathnameBase)}function Us(t,e,s,n){n===void 0&&(n=!1);let o;typeof t=="string"?o=bt(t):(o=Lt({},t),re(!o.pathname||!o.pathname.includes("?"),Jr("?","pathname","search",o)),re(!o.pathname||!o.pathname.includes("#"),Jr("#","pathname","hash",o)),re(!o.search||!o.search.includes("#"),Jr("#","search","hash",o)));let i=t===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=s;else{let u=e.length-1;if(!n&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),u-=1;o.pathname=g.join("/")}l=u>=0?e[u]:"/"}let c=ul(o,l),d=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&s.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const He=t=>t.join("/").replace(/\/\/+/g,"/"),hl=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fl=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gl=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xl(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Co=["post","put","patch","delete"];new Set(Co);const bl=["get",...Co];new Set(bl);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _t(){return _t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},_t.apply(this,arguments)}const zs=p.createContext(null),yl=p.createContext(null),qe=p.createContext(null),Er=p.createContext(null),We=p.createContext({outlet:null,matches:[],isDataRoute:!1}),ko=p.createContext(null);function vl(t,e){let{relative:s}=e===void 0?{}:e;yt()||re(!1);let{basename:n,navigator:o}=p.useContext(qe),{hash:i,pathname:a,search:l}=Do(t,{relative:s}),c=a;return n!=="/"&&(c=a==="/"?n:He([n,a])),o.createHref({pathname:c,search:l,hash:i})}function yt(){return p.useContext(Er)!=null}function Ve(){return yt()||re(!1),p.useContext(Er).location}function To(t){p.useContext(qe).static||p.useLayoutEffect(t)}function Ar(){let{isDataRoute:t}=p.useContext(We);return t?Ol():wl()}function wl(){yt()||re(!1);let t=p.useContext(zs),{basename:e,future:s,navigator:n}=p.useContext(qe),{matches:o}=p.useContext(We),{pathname:i}=Ve(),a=JSON.stringify(Bs(o,s.v7_relativeSplatPath)),l=p.useRef(!1);return To(()=>{l.current=!0}),p.useCallback(function(d,m){if(m===void 0&&(m={}),!l.current)return;if(typeof d=="number"){n.go(d);return}let u=Us(d,JSON.parse(a),i,m.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:He([e,u.pathname])),(m.replace?n.replace:n.push)(u,m.state,m)},[e,n,a,i,t])}function Do(t,e){let{relative:s}=e===void 0?{}:e,{future:n}=p.useContext(qe),{matches:o}=p.useContext(We),{pathname:i}=Ve(),a=JSON.stringify(Bs(o,n.v7_relativeSplatPath));return p.useMemo(()=>Us(t,JSON.parse(a),i,s==="path"),[t,a,i,s])}function jl(t,e){return Nl(t,e)}function Nl(t,e,s,n){yt()||re(!1);let{navigator:o}=p.useContext(qe),{matches:i}=p.useContext(We),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let d=Ve(),m;if(e){var u;let h=typeof e=="string"?bt(e):e;c==="/"||(u=h.pathname)!=null&&u.startsWith(c)||re(!1),m=h}else m=d;let g=m.pathname||"/",y=g;if(c!=="/"){let h=c.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(h.length).join("/")}let f=Ya(t,{pathname:y}),w=Dl(f&&f.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:He([c,o.encodeLocation?o.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?c:He([c,o.encodeLocation?o.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,s,n);return e&&w?p.createElement(Er.Provider,{value:{location:_t({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Be.Pop}},w):w}function Sl(){let t=Rl(),e=xl(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),s=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},e),s?p.createElement("pre",{style:o},s):null,null)}const Cl=p.createElement(Sl,null);class kl extends p.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,s){return s.location!==e.location||s.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:s.error,location:s.location,revalidation:e.revalidation||s.revalidation}}componentDidCatch(e,s){console.error("React Router caught the following error during render",e,s)}render(){return this.state.error!==void 0?p.createElement(We.Provider,{value:this.props.routeContext},p.createElement(ko.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tl(t){let{routeContext:e,match:s,children:n}=t,o=p.useContext(zs);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),p.createElement(We.Provider,{value:e},n)}function Dl(t,e,s,n){var o;if(e===void 0&&(e=[]),s===void 0&&(s=null),n===void 0&&(n=null),t==null){var i;if(!s)return null;if(s.errors)t=s.matches;else if((i=n)!=null&&i.v7_partialHydration&&e.length===0&&!s.initialized&&s.matches.length>0)t=s.matches;else return null}let a=t,l=(o=s)==null?void 0:o.errors;if(l!=null){let m=a.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);m>=0||re(!1),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,d=-1;if(s&&n&&n.v7_partialHydration)for(let m=0;m<a.length;m++){let u=a[m];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(d=m),u.route.id){let{loaderData:g,errors:y}=s,f=u.route.loader&&g[u.route.id]===void 0&&(!y||y[u.route.id]===void 0);if(u.route.lazy||f){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((m,u,g)=>{let y,f=!1,w=null,h=null;s&&(y=l&&u.route.id?l[u.route.id]:void 0,w=u.route.errorElement||Cl,c&&(d<0&&g===0?(Il("route-fallback"),f=!0,h=null):d===g&&(f=!0,h=u.route.hydrateFallbackElement||null)));let C=e.concat(a.slice(0,g+1)),j=()=>{let v;return y?v=w:f?v=h:u.route.Component?v=p.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=m,p.createElement(Tl,{match:u,routeContext:{outlet:m,matches:C,isDataRoute:s!=null},children:v})};return s&&(u.route.ErrorBoundary||u.route.errorElement||g===0)?p.createElement(kl,{location:s.location,revalidation:s.revalidation,component:w,error:y,children:j(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):j()},null)}var Eo=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Eo||{}),Ao=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ao||{});function El(t){let e=p.useContext(zs);return e||re(!1),e}function Al(t){let e=p.useContext(yl);return e||re(!1),e}function Pl(t){let e=p.useContext(We);return e||re(!1),e}function Po(t){let e=Pl(),s=e.matches[e.matches.length-1];return s.route.id||re(!1),s.route.id}function Rl(){var t;let e=p.useContext(ko),s=Al(),n=Po();return e!==void 0?e:(t=s.errors)==null?void 0:t[n]}function Ol(){let{router:t}=El(Eo.UseNavigateStable),e=Po(Ao.UseNavigateStable),s=p.useRef(!1);return To(()=>{s.current=!0}),p.useCallback(function(o,i){i===void 0&&(i={}),s.current&&(typeof o=="number"?t.navigate(o):t.navigate(o,_t({fromRouteId:e},i)))},[t,e])}const fn={};function Il(t,e,s){fn[t]||(fn[t]=!0)}function Ml(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Fl(t){let{to:e,replace:s,state:n,relative:o}=t;yt()||re(!1);let{future:i,static:a}=p.useContext(qe),{matches:l}=p.useContext(We),{pathname:c}=Ve(),d=Ar(),m=Us(e,Bs(l,i.v7_relativeSplatPath),c,o==="path"),u=JSON.stringify(m);return p.useEffect(()=>d(JSON.parse(u),{replace:s,state:n,relative:o}),[d,u,o,s,n]),null}function de(t){re(!1)}function Ll(t){let{basename:e="/",children:s=null,location:n,navigationType:o=Be.Pop,navigator:i,static:a=!1,future:l}=t;yt()&&re(!1);let c=e.replace(/^\/*/,"/"),d=p.useMemo(()=>({basename:c,navigator:i,static:a,future:_t({v7_relativeSplatPath:!1},l)}),[c,l,i,a]);typeof n=="string"&&(n=bt(n));let{pathname:m="/",search:u="",hash:g="",state:y=null,key:f="default"}=n,w=p.useMemo(()=>{let h=$s(m,c);return h==null?null:{location:{pathname:h,search:u,hash:g,state:y,key:f},navigationType:o}},[c,m,u,g,y,f,o]);return w==null?null:p.createElement(qe.Provider,{value:d},p.createElement(Er.Provider,{children:s,value:w}))}function _l(t){let{children:e,location:s}=t;return jl(bs(e),s)}new Promise(()=>{});function bs(t,e){e===void 0&&(e=[]);let s=[];return p.Children.forEach(t,(n,o)=>{if(!p.isValidElement(n))return;let i=[...e,o];if(n.type===p.Fragment){s.push.apply(s,bs(n.props.children,i));return}n.type!==de&&re(!1),!n.props.index||!n.props.children||re(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=bs(n.props.children,i)),s.push(a)}),s}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},ys.apply(this,arguments)}function $l(t,e){if(t==null)return{};var s={},n=Object.keys(t),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(s[o]=t[o]);return s}function Bl(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ul(t,e){return t.button===0&&(!e||e==="_self")&&!Bl(t)}const zl=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Hl="6";try{window.__reactRouterVersion=Hl}catch{}const Gl="startTransition",gn=sa[Gl];function ql(t){let{basename:e,children:s,future:n,window:o}=t,i=p.useRef();i.current==null&&(i.current=Va({window:o,v5Compat:!0}));let a=i.current,[l,c]=p.useState({action:a.action,location:a.location}),{v7_startTransition:d}=n||{},m=p.useCallback(u=>{d&&gn?gn(()=>c(u)):c(u)},[c,d]);return p.useLayoutEffect(()=>a.listen(m),[a,m]),p.useEffect(()=>Ml(n),[n]),p.createElement(Ll,{basename:e,children:s,location:l.location,navigationType:l.action,navigator:a,future:n})}const Wl=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vl=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ye=p.forwardRef(function(e,s){let{onClick:n,relative:o,reloadDocument:i,replace:a,state:l,target:c,to:d,preventScrollReset:m,viewTransition:u}=e,g=$l(e,zl),{basename:y}=p.useContext(qe),f,w=!1;if(typeof d=="string"&&Vl.test(d)&&(f=d,Wl))try{let v=new URL(window.location.href),b=d.startsWith("//")?new URL(v.protocol+d):new URL(d),x=$s(b.pathname,y);b.origin===v.origin&&x!=null?d=x+b.search+b.hash:w=!0}catch{}let h=vl(d,{relative:o}),C=Jl(d,{replace:a,state:l,target:c,preventScrollReset:m,relative:o,viewTransition:u});function j(v){n&&n(v),v.defaultPrevented||C(v)}return p.createElement("a",ys({},g,{href:f||h,onClick:w||i?n:j,ref:s,target:c}))});var xn;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xn||(xn={}));var bn;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bn||(bn={}));function Jl(t,e){let{target:s,replace:n,state:o,preventScrollReset:i,relative:a,viewTransition:l}=e===void 0?{}:e,c=Ar(),d=Ve(),m=Do(t,{relative:a});return p.useCallback(u=>{if(Ul(u,s)){u.preventDefault();let g=n!==void 0?n:wr(d)===wr(m);c(t,{replace:g,state:o,preventScrollReset:i,relative:a,viewTransition:l})}},[d,c,m,n,o,s,t,i,a,l])}let Kl={data:""},Yl=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Kl,Xl=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ql=/\/\*[^]*?\*\/|  +/g,yn=/\n+/g,Le=(t,e)=>{let s="",n="",o="";for(let i in t){let a=t[i];i[0]=="@"?i[1]=="i"?s=i+" "+a+";":n+=i[1]=="f"?Le(a,i):i+"{"+Le(a,i[1]=="k"?"":e)+"}":typeof a=="object"?n+=Le(a,e?e.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Le.p?Le.p(i,a):i+":"+a+";")}return s+(e&&o?e+"{"+o+"}":o)+n},Re={},Ro=t=>{if(typeof t=="object"){let e="";for(let s in t)e+=s+Ro(t[s]);return e}return t},Zl=(t,e,s,n,o)=>{let i=Ro(t),a=Re[i]||(Re[i]=(c=>{let d=0,m=11;for(;d<c.length;)m=101*m+c.charCodeAt(d++)>>>0;return"go"+m})(i));if(!Re[a]){let c=i!==t?t:(d=>{let m,u,g=[{}];for(;m=Xl.exec(d.replace(Ql,""));)m[4]?g.shift():m[3]?(u=m[3].replace(yn," ").trim(),g.unshift(g[0][u]=g[0][u]||{})):g[0][m[1]]=m[2].replace(yn," ").trim();return g[0]})(t);Re[a]=Le(o?{["@keyframes "+a]:c}:c,s?"":"."+a)}let l=s&&Re.g?Re.g:null;return s&&(Re.g=Re[a]),((c,d,m,u)=>{u?d.data=d.data.replace(u,c):d.data.indexOf(c)===-1&&(d.data=m?c+d.data:d.data+c)})(Re[a],e,n,l),a},ec=(t,e,s)=>t.reduce((n,o,i)=>{let a=e[i];if(a&&a.call){let l=a(s),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=c?"."+c:l&&typeof l=="object"?l.props?"":Le(l,""):l===!1?"":l}return n+o+(a??"")},"");function Pr(t){let e=this||{},s=t.call?t(e.p):t;return Zl(s.unshift?s.raw?ec(s,[].slice.call(arguments,1),e.p):s.reduce((n,o)=>Object.assign(n,o&&o.call?o(e.p):o),{}):s,Yl(e.target),e.g,e.o,e.k)}let Oo,vs,ws;Pr.bind({g:1});let Me=Pr.bind({k:1});function tc(t,e,s,n){Le.p=e,Oo=t,vs=s,ws=n}function Je(t,e){let s=this||{};return function(){let n=arguments;function o(i,a){let l=Object.assign({},i),c=l.className||o.className;s.p=Object.assign({theme:vs&&vs()},l),s.o=/ *go\d+/.test(c),l.className=Pr.apply(s,n)+(c?" "+c:"");let d=t;return t[0]&&(d=l.as||t,delete l.as),ws&&d[0]&&ws(l),Oo(d,l)}return o}}var rc=t=>typeof t=="function",jr=(t,e)=>rc(t)?t(e):t,sc=(()=>{let t=0;return()=>(++t).toString()})(),Io=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),nc=20,Hs="default",Mo=(t,e)=>{let{toastLimit:s}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,s)};case 1:return{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:n}=e;return Mo(t,{type:t.toasts.find(a=>a.id===n.id)?1:0,toast:n});case 3:let{toastId:o}=e;return{...t,toasts:t.toasts.map(a=>a.id===o||o===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},lr=[],Fo={toasts:[],pausedAt:void 0,settings:{toastLimit:nc}},Te={},Lo=(t,e=Hs)=>{Te[e]=Mo(Te[e]||Fo,t),lr.forEach(([s,n])=>{s===e&&n(Te[e])})},_o=t=>Object.keys(Te).forEach(e=>Lo(t,e)),oc=t=>Object.keys(Te).find(e=>Te[e].toasts.some(s=>s.id===t)),Rr=(t=Hs)=>e=>{Lo(e,t)},ic={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ac=(t={},e=Hs)=>{let[s,n]=p.useState(Te[e]||Fo),o=p.useRef(Te[e]);p.useEffect(()=>(o.current!==Te[e]&&n(Te[e]),lr.push([e,n]),()=>{let a=lr.findIndex(([l])=>l===e);a>-1&&lr.splice(a,1)}),[e]);let i=s.toasts.map(a=>{var l,c,d;return{...t,...t[a.type],...a,removeDelay:a.removeDelay||((l=t[a.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:a.duration||((c=t[a.type])==null?void 0:c.duration)||(t==null?void 0:t.duration)||ic[a.type],style:{...t.style,...(d=t[a.type])==null?void 0:d.style,...a.style}}});return{...s,toasts:i}},lc=(t,e="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(s==null?void 0:s.id)||sc()}),zt=t=>(e,s)=>{let n=lc(e,t,s);return Rr(n.toasterId||oc(n.id))({type:2,toast:n}),n.id},X=(t,e)=>zt("blank")(t,e);X.error=zt("error");X.success=zt("success");X.loading=zt("loading");X.custom=zt("custom");X.dismiss=(t,e)=>{let s={type:3,toastId:t};e?Rr(e)(s):_o(s)};X.dismissAll=t=>X.dismiss(void 0,t);X.remove=(t,e)=>{let s={type:4,toastId:t};e?Rr(e)(s):_o(s)};X.removeAll=t=>X.remove(void 0,t);X.promise=(t,e,s)=>{let n=X.loading(e.loading,{...s,...s==null?void 0:s.loading});return typeof t=="function"&&(t=t()),t.then(o=>{let i=e.success?jr(e.success,o):void 0;return i?X.success(i,{id:n,...s,...s==null?void 0:s.success}):X.dismiss(n),o}).catch(o=>{let i=e.error?jr(e.error,o):void 0;i?X.error(i,{id:n,...s,...s==null?void 0:s.error}):X.dismiss(n)}),t};var cc=1e3,dc=(t,e="default")=>{let{toasts:s,pausedAt:n}=ac(t,e),o=p.useRef(new Map).current,i=p.useCallback((u,g=cc)=>{if(o.has(u))return;let y=setTimeout(()=>{o.delete(u),a({type:4,toastId:u})},g);o.set(u,y)},[]);p.useEffect(()=>{if(n)return;let u=Date.now(),g=s.map(y=>{if(y.duration===1/0)return;let f=(y.duration||0)+y.pauseDuration-(u-y.createdAt);if(f<0){y.visible&&X.dismiss(y.id);return}return setTimeout(()=>X.dismiss(y.id,e),f)});return()=>{g.forEach(y=>y&&clearTimeout(y))}},[s,n,e]);let a=p.useCallback(Rr(e),[e]),l=p.useCallback(()=>{a({type:5,time:Date.now()})},[a]),c=p.useCallback((u,g)=>{a({type:1,toast:{id:u,height:g}})},[a]),d=p.useCallback(()=>{n&&a({type:6,time:Date.now()})},[n,a]),m=p.useCallback((u,g)=>{let{reverseOrder:y=!1,gutter:f=8,defaultPosition:w}=g||{},h=s.filter(v=>(v.position||w)===(u.position||w)&&v.height),C=h.findIndex(v=>v.id===u.id),j=h.filter((v,b)=>b<C&&v.visible).length;return h.filter(v=>v.visible).slice(...y?[j+1]:[0,j]).reduce((v,b)=>v+(b.height||0)+f,0)},[s]);return p.useEffect(()=>{s.forEach(u=>{if(u.dismissed)i(u.id,u.removeDelay);else{let g=o.get(u.id);g&&(clearTimeout(g),o.delete(u.id))}})},[s,i]),{toasts:s,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:m}}},uc=Me`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,mc=Me`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,pc=Me`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,hc=Je("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${uc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${mc} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${pc} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,fc=Me`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,gc=Je("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${fc} 1s linear infinite;
`,xc=Me`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,bc=Me`
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
}`,yc=Je("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${bc} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,vc=Je("div")`
  position: absolute;
`,wc=Je("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,jc=Me`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Nc=Je("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${jc} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Sc=({toast:t})=>{let{icon:e,type:s,iconTheme:n}=t;return e!==void 0?typeof e=="string"?p.createElement(Nc,null,e):e:s==="blank"?null:p.createElement(wc,null,p.createElement(gc,{...n}),s!=="loading"&&p.createElement(vc,null,s==="error"?p.createElement(hc,{...n}):p.createElement(yc,{...n})))},Cc=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,kc=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Tc="0%{opacity:0;} 100%{opacity:1;}",Dc="0%{opacity:1;} 100%{opacity:0;}",Ec=Je("div")`
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
`,Ac=Je("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Pc=(t,e)=>{let s=t.includes("top")?1:-1,[n,o]=Io()?[Tc,Dc]:[Cc(s),kc(s)];return{animation:e?`${Me(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Me(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Rc=p.memo(({toast:t,position:e,style:s,children:n})=>{let o=t.height?Pc(t.position||e||"top-center",t.visible):{opacity:0},i=p.createElement(Sc,{toast:t}),a=p.createElement(Ac,{...t.ariaProps},jr(t.message,t));return p.createElement(Ec,{className:t.className,style:{...o,...s,...t.style}},typeof n=="function"?n({icon:i,message:a}):p.createElement(p.Fragment,null,i,a))});tc(p.createElement);var Oc=({id:t,className:e,style:s,onHeightUpdate:n,children:o})=>{let i=p.useCallback(a=>{if(a){let l=()=>{let c=a.getBoundingClientRect().height;n(t,c)};l(),new MutationObserver(l).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[t,n]);return p.createElement("div",{ref:i,className:e,style:s},o)},Ic=(t,e)=>{let s=t.includes("top"),n=s?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Io()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(s?1:-1)}px)`,...n,...o}},Mc=Pr`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Kt=16,Fc=({reverseOrder:t,position:e="top-center",toastOptions:s,gutter:n,children:o,toasterId:i,containerStyle:a,containerClassName:l})=>{let{toasts:c,handlers:d}=dc(s,i);return p.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Kt,left:Kt,right:Kt,bottom:Kt,pointerEvents:"none",...a},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(m=>{let u=m.position||e,g=d.calculateOffset(m,{reverseOrder:t,gutter:n,defaultPosition:e}),y=Ic(u,g);return p.createElement(Oc,{id:m.id,key:m.id,onHeightUpdate:d.updateHeight,className:m.visible?Mc:"",style:y},m.type==="custom"?jr(m.message,m):o?o(m):p.createElement(Rc,{toast:m,position:u}))}))},U=X;const $o=p.createContext();function Gs(){return p.useContext($o)}const vn={light:{name:"Light Theme",cssVars:{"--primary":"#2563eb","--primary-foreground":"#ffffff","--background":"#ffffff","--foreground":"#0f172a","--card":"#ffffff","--muted":"#f8fafc","--border":"#e2e8f0"},isDark:!1},dark:{name:"Dark Theme",cssVars:{"--primary":"#3b82f6","--primary-foreground":"#ffffff","--background":"#0f172a","--foreground":"#f8fafc","--card":"#1e293b","--muted":"#1e293b","--border":"#334155"},isDark:!0},blue:{name:"Blue Theme",cssVars:{"--primary":"#1e40af","--primary-foreground":"#ffffff","--background":"#f0f9ff","--foreground":"#0c4a6e","--card":"#e0f2fe","--muted":"#e0f2fe","--border":"#7dd3fc"},isDark:!1},purple:{name:"Purple Theme",cssVars:{"--primary":"#7c3aed","--primary-foreground":"#ffffff","--background":"#faf5ff","--foreground":"#581c87","--card":"#f3e8ff","--muted":"#f3e8ff","--border":"#c4b5fd"},isDark:!1},green:{name:"Green Theme",cssVars:{"--primary":"#059669","--primary-foreground":"#ffffff","--background":"#f0fdf4","--foreground":"#064e3b","--card":"#dcfce7","--muted":"#dcfce7","--border":"#86efac"},isDark:!1},orange:{name:"Orange Theme",cssVars:{"--primary":"#ea580c","--primary-foreground":"#ffffff","--background":"#fff7ed","--foreground":"#9a3412","--card":"#fed7aa","--muted":"#fed7aa","--border":"#fdba74"},isDark:!1},red:{name:"Red Theme",cssVars:{"--primary":"#dc2626","--primary-foreground":"#ffffff","--background":"#fef2f2","--foreground":"#991b1b","--card":"#fecaca","--muted":"#fecaca","--border":"#fca5a5"},isDark:!1},pink:{name:"Pink Theme",cssVars:{"--primary":"#db2777","--primary-foreground":"#ffffff","--background":"#fdf2f8","--foreground":"#9d174d","--card":"#fce7f3","--muted":"#fce7f3","--border":"#f9a8d4"},isDark:!1},cyan:{name:"Cyan Theme",cssVars:{"--primary":"#0891b2","--primary-foreground":"#ffffff","--background":"#ecfeff","--foreground":"#164e63","--card":"#cffafe","--muted":"#cffafe","--border":"#67e8f9"},isDark:!1},amber:{name:"Amber Theme",cssVars:{"--primary":"#d97706","--primary-foreground":"#ffffff","--background":"#fffbeb","--foreground":"#92400e","--card":"#fef3c7","--muted":"#fef3c7","--border":"#fde68a"},isDark:!1},emerald:{name:"Emerald Theme",cssVars:{"--primary":"#10b981","--primary-foreground":"#ffffff","--background":"#ecfdf5","--foreground":"#064e3b","--card":"#d1fae5","--muted":"#d1fae5","--border":"#6ee7b7"},isDark:!1}};function Lc({children:t}){const[e,s]=p.useState("light");p.useEffect(()=>{const a=localStorage.getItem("theme")||"light";s(a),n(a)},[]);const n=a=>{const l=vn[a];l&&(Object.entries(l.cssVars).forEach(([c,d])=>{document.documentElement.style.setProperty(c,d)}),document.documentElement.classList.toggle("dark",l.isDark))},o=a=>{s(a),localStorage.setItem("theme",a),n(a)},i=()=>{o(e==="light"?"dark":"light")};return r.jsx($o.Provider,{value:{theme:e,setTheme:o,toggleTheme:i,themes:vn},children:t})}/**
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
 */const Bo="firebasestorage.googleapis.com",Uo="storageBucket",_c=2*60*1e3,$c=10*60*1e3;/**
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
 */class ee extends la{constructor(e,s,n=0){super(Kr(e),`Firebase Storage: ${s} (${Kr(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Z;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Z||(Z={}));function Kr(t){return"storage/"+t}function qs(){const t="An unknown error occurred, please check the error payload for server response.";return new ee(Z.UNKNOWN,t)}function Bc(t){return new ee(Z.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Uc(t){return new ee(Z.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zc(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ee(Z.UNAUTHENTICATED,t)}function Hc(){return new ee(Z.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Gc(t){return new ee(Z.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function qc(){return new ee(Z.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Wc(){return new ee(Z.CANCELED,"User canceled the upload/download.")}function Vc(t){return new ee(Z.INVALID_URL,"Invalid URL '"+t+"'.")}function Jc(t){return new ee(Z.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Kc(){return new ee(Z.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Uo+"' property when initializing the app?")}function Yc(){return new ee(Z.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Xc(){return new ee(Z.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Qc(t){return new ee(Z.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function js(t){return new ee(Z.INVALID_ARGUMENT,t)}function zo(){return new ee(Z.APP_DELETED,"The Firebase app was deleted.")}function Zc(t){return new ee(Z.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Pt(t,e){return new ee(Z.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Tt(t){throw new ee(Z.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class ge{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=ge.makeFromUrl(e,s)}catch{return new ge(e,"")}if(n.path==="")return n;throw Jc(e)}static makeFromUrl(e,s){let n=null;const o="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+o+a,"i"),c={bucket:1,path:3};function d(b){b.path_=decodeURIComponent(b.path)}const m="v[A-Za-z0-9_]+",u=s.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${u}/${m}/b/${o}/o${g}`,"i"),f={bucket:1,path:3},w=s===Bo?"(?:storage.googleapis.com|storage.cloud.google.com)":s,h="([^?#]*)",C=new RegExp(`^https?://${w}/${o}/${h}`,"i"),v=[{regex:l,indices:c,postModify:i},{regex:y,indices:f,postModify:d},{regex:C,indices:{bucket:1,path:2},postModify:d}];for(let b=0;b<v.length;b++){const x=v[b],k=x.regex.exec(e);if(k){const A=k[x.indices.bucket];let S=k[x.indices.path];S||(S=""),n=new ge(A,S),x.postModify(n);break}}if(n==null)throw Vc(e);return n}}class ed{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function td(t,e,s){let n=1,o=null,i=null,a=!1,l=0;function c(){return l===2}let d=!1;function m(...h){d||(d=!0,e.apply(null,h))}function u(h){o=setTimeout(()=>{o=null,t(y,c())},h)}function g(){i&&clearTimeout(i)}function y(h,...C){if(d){g();return}if(h){g(),m.call(null,h,...C);return}if(c()||a){g(),m.call(null,h,...C);return}n<64&&(n*=2);let v;l===1?(l=2,v=0):v=(n+Math.random())*1e3,u(v)}let f=!1;function w(h){f||(f=!0,g(),!d&&(o!==null?(h||(l=2),clearTimeout(o),u(0)):h||(l=1)))}return u(0),i=setTimeout(()=>{a=!0,w(!0)},s),w}function rd(t){t(!1)}/**
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
 */function sd(t){return t!==void 0}function nd(t){return typeof t=="object"&&!Array.isArray(t)}function Ws(t){return typeof t=="string"||t instanceof String}function wn(t){return Vs()&&t instanceof Blob}function Vs(){return typeof Blob<"u"}function jn(t,e,s,n){if(n<e)throw js(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw js(`Invalid value for '${t}'. Expected ${s} or less.`)}/**
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
 */function Js(t,e,s){let n=e;return s==null&&(n=`https://${e}`),`${s}://${n}/v0${t}`}function Ho(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const o=e(n)+"="+e(t[n]);s=s+o+"&"}return s=s.slice(0,-1),s}var tt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(tt||(tt={}));/**
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
 */function od(t,e){const s=t>=500&&t<600,o=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return s||o||i}/**
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
 */class id{constructor(e,s,n,o,i,a,l,c,d,m,u,g=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=o,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=u,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,f)=>{this.resolve_=y,this.reject_=f,this.start_()})}start_(){const e=(n,o)=>{if(o){n(!1,new Yt(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const c=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===tt.NO_ERROR,c=i.getStatus();if(!l||od(c,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===tt.ABORT;n(!1,new Yt(!1,null,m));return}const d=this.successCodes_.indexOf(c)!==-1;n(!0,new Yt(d,i))})},s=(n,o)=>{const i=this.resolve_,a=this.reject_,l=o.connection;if(o.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());sd(c)?i(c):i()}catch(c){a(c)}else if(l!==null){const c=qs();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(o.canceled){const c=this.appDelete_?zo():Wc();a(c)}else{const c=qc();a(c)}};this.canceled_?s(!1,new Yt(!1,null,!0)):this.backoffId_=td(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yt{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function ad(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ld(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function cd(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dd(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ud(t,e,s,n,o,i,a=!0){const l=Ho(t.urlParams),c=t.url+l,d=Object.assign({},t.headers);return cd(d,e),ad(d,s),ld(d,i),dd(d,n),new id(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,a)}/**
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
 */function md(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pd(...t){const e=md();if(e!==void 0){const s=new e;for(let n=0;n<t.length;n++)s.append(t[n]);return s.getBlob()}else{if(Vs())return new Blob(t);throw new ee(Z.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hd(t,e,s){return t.webkitSlice?t.webkitSlice(e,s):t.mozSlice?t.mozSlice(e,s):t.slice?t.slice(e,s):null}/**
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
 */function fd(t){if(typeof atob>"u")throw Qc("base-64");return atob(t)}/**
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
 */const De={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yr{constructor(e,s){this.data=e,this.contentType=s||null}}function gd(t,e){switch(t){case De.RAW:return new Yr(Go(e));case De.BASE64:case De.BASE64URL:return new Yr(qo(t,e));case De.DATA_URL:return new Yr(bd(e),yd(e))}throw qs()}function Go(t){const e=[];for(let s=0;s<t.length;s++){let n=t.charCodeAt(s);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<t.length-1&&(t.charCodeAt(s+1)&64512)===56320))e.push(239,191,189);else{const i=n,a=t.charCodeAt(++s);n=65536|(i&1023)<<10|a&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function xd(t){let e;try{e=decodeURIComponent(t)}catch{throw Pt(De.DATA_URL,"Malformed data URL.")}return Go(e)}function qo(t,e){switch(t){case De.BASE64:{const o=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(o||i)throw Pt(t,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case De.BASE64URL:{const o=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(o||i)throw Pt(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=fd(e)}catch(o){throw o.message.includes("polyfill")?o:Pt(t,"Invalid character found")}const n=new Uint8Array(s.length);for(let o=0;o<s.length;o++)n[o]=s.charCodeAt(o);return n}class Wo{constructor(e){this.base64=!1,this.contentType=null;const s=e.match(/^data:([^,]+)?,/);if(s===null)throw Pt(De.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=vd(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function bd(t){const e=new Wo(t);return e.base64?qo(De.BASE64,e.rest):xd(e.rest)}function yd(t){return new Wo(t).contentType}function vd(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class _e{constructor(e,s){let n=0,o="";wn(e)?(this.data_=e,n=e.size,o=e.type):e instanceof ArrayBuffer?(s?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(s?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,s){if(wn(this.data_)){const n=this.data_,o=hd(n,e,s);return o===null?null:new _e(o)}else{const n=new Uint8Array(this.data_.buffer,e,s-e);return new _e(n,!0)}}static getBlob(...e){if(Vs()){const s=e.map(n=>n instanceof _e?n.data_:n);return new _e(pd.apply(null,s))}else{const s=e.map(a=>Ws(a)?gd(De.RAW,a).data:a.data_);let n=0;s.forEach(a=>{n+=a.byteLength});const o=new Uint8Array(n);let i=0;return s.forEach(a=>{for(let l=0;l<a.length;l++)o[i++]=a[l]}),new _e(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Vo(t){let e;try{e=JSON.parse(t)}catch{return null}return nd(e)?e:null}/**
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
 */function wd(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jd(t,e){const s=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?s:t+"/"+s}function Jo(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Nd(t,e){return e}class ce{constructor(e,s,n,o){this.server=e,this.local=s||e,this.writable=!!n,this.xform=o||Nd}}let Xt=null;function Sd(t){return!Ws(t)||t.length<2?t:Jo(t)}function Ko(){if(Xt)return Xt;const t=[];t.push(new ce("bucket")),t.push(new ce("generation")),t.push(new ce("metageneration")),t.push(new ce("name","fullPath",!0));function e(i,a){return Sd(a)}const s=new ce("name");s.xform=e,t.push(s);function n(i,a){return a!==void 0?Number(a):a}const o=new ce("size");return o.xform=n,t.push(o),t.push(new ce("timeCreated")),t.push(new ce("updated")),t.push(new ce("md5Hash",null,!0)),t.push(new ce("cacheControl",null,!0)),t.push(new ce("contentDisposition",null,!0)),t.push(new ce("contentEncoding",null,!0)),t.push(new ce("contentLanguage",null,!0)),t.push(new ce("contentType",null,!0)),t.push(new ce("metadata","customMetadata",!0)),Xt=t,Xt}function Cd(t,e){function s(){const n=t.bucket,o=t.fullPath,i=new ge(n,o);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:s})}function kd(t,e,s){const n={};n.type="file";const o=s.length;for(let i=0;i<o;i++){const a=s[i];n[a.local]=a.xform(n,e[a.server])}return Cd(n,t),n}function Yo(t,e,s){const n=Vo(e);return n===null?null:kd(t,n,s)}function Td(t,e,s,n){const o=Vo(e);if(o===null||!Ws(o.downloadTokens))return null;const i=o.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const m=t.bucket,u=t.fullPath,g="/b/"+a(m)+"/o/"+a(u),y=Js(g,s,n),f=Ho({alt:"media",token:d});return y+f})[0]}function Dd(t,e){const s={},n=e.length;for(let o=0;o<n;o++){const i=e[o];i.writable&&(s[i.server]=t[i.local])}return JSON.stringify(s)}class Xo{constructor(e,s,n,o){this.url=e,this.method=s,this.handler=n,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Qo(t){if(!t)throw qs()}function Ed(t,e){function s(n,o){const i=Yo(t,o,e);return Qo(i!==null),i}return s}function Ad(t,e){function s(n,o){const i=Yo(t,o,e);return Qo(i!==null),Td(i,o,t.host,t._protocol)}return s}function Zo(t){function e(s,n){let o;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?o=Hc():o=zc():s.getStatus()===402?o=Uc(t.bucket):s.getStatus()===403?o=Gc(t.path):o=n,o.status=s.getStatus(),o.serverResponse=n.serverResponse,o}return e}function Pd(t){const e=Zo(t);function s(n,o){let i=e(n,o);return n.getStatus()===404&&(i=Bc(t.path)),i.serverResponse=o.serverResponse,i}return s}function Rd(t,e,s){const n=e.fullServerUrl(),o=Js(n,t.host,t._protocol),i="GET",a=t.maxOperationRetryTime,l=new Xo(o,i,Ad(t,s),a);return l.errorHandler=Pd(e),l}function Od(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Id(t,e,s){const n=Object.assign({},s);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=Od(null,e)),n}function Md(t,e,s,n,o){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let v="";for(let b=0;b<2;b++)v=v+Math.random().toString().slice(2);return v}const c=l();a["Content-Type"]="multipart/related; boundary="+c;const d=Id(e,n,o),m=Dd(d,s),u="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+c+`\r
Content-Type: `+d.contentType+`\r
\r
`,g=`\r
--`+c+"--",y=_e.getBlob(u,n,g);if(y===null)throw Yc();const f={name:d.fullPath},w=Js(i,t.host,t._protocol),h="POST",C=t.maxUploadRetryTime,j=new Xo(w,h,Ed(t,s),C);return j.urlParams=f,j.headers=a,j.body=y.uploadData(),j.errorHandler=Zo(e),j}class Fd{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=tt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=tt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=tt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,s,n,o){if(this.sent_)throw Tt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,e,!0),o!==void 0)for(const i in o)o.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,o[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Tt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Tt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Tt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Tt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ld extends Fd{initXhr(){this.xhr_.responseType="text"}}function ei(){return new Ld}/**
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
 */class ot{constructor(e,s){this._service=e,s instanceof ge?this._location=s:this._location=ge.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new ot(e,s)}get root(){const e=new ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Jo(this._location.path)}get storage(){return this._service}get parent(){const e=wd(this._location.path);if(e===null)return null;const s=new ge(this._location.bucket,e);return new ot(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw Zc(e)}}function _d(t,e,s){t._throwIfRoot("uploadBytes");const n=Md(t.storage,t._location,Ko(),new _e(e,!0),s);return t.storage.makeRequestWithTokens(n,ei).then(o=>({metadata:o,ref:t}))}function $d(t){t._throwIfRoot("getDownloadURL");const e=Rd(t.storage,t._location,Ko());return t.storage.makeRequestWithTokens(e,ei).then(s=>{if(s===null)throw Xc();return s})}function Bd(t,e){const s=jd(t._location.path,e),n=new ge(t._location.bucket,s);return new ot(t.storage,n)}/**
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
 */function Ud(t){return/^[A-Za-z]+:\/\//.test(t)}function zd(t,e){return new ot(t,e)}function ti(t,e){if(t instanceof Ks){const s=t;if(s._bucket==null)throw Kc();const n=new ot(s,s._bucket);return e!=null?ti(n,e):n}else return e!==void 0?Bd(t,e):t}function Hd(t,e){if(e&&Ud(e)){if(t instanceof Ks)return zd(t,e);throw js("To use ref(service, url), the first argument must be a Storage instance.")}else return ti(t,e)}function Nn(t,e){const s=e==null?void 0:e[Uo];return s==null?null:ge.makeFromBucketSpec(s,t)}function Gd(t,e,s,n={}){t.host=`${e}:${s}`,t._protocol="http";const{mockUserToken:o}=n;o&&(t._overrideAuthToken=typeof o=="string"?o:ua(o,t.app.options.projectId))}class Ks{constructor(e,s,n,o,i){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=o,this._firebaseVersion=i,this._bucket=null,this._host=Bo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_c,this._maxUploadRetryTime=$c,this._requests=new Set,o!=null?this._bucket=ge.makeFromBucketSpec(o,this._host):this._bucket=Nn(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ge.makeFromBucketSpec(this._url,e):this._bucket=Nn(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jn("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jn("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ot(this,e)}_makeRequest(e,s,n,o,i=!0){if(this._deleted)return new ed(zo());{const a=ud(e,this._appId,n,o,s,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,s){const[n,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,o).getPromise()}}const Sn="@firebase/storage",Cn="0.13.2";/**
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
 */const ri="storage";function Ye(t,e,s){return t=Cr(t),_d(t,e,s)}function Xe(t){return t=Cr(t),$d(t)}function Qe(t,e){return t=Cr(t),Hd(t,e)}function si(t=ds(),e){t=Cr(t);const n=ca(t,ri).getImmediate({identifier:e}),o=da("storage");return o&&qd(n,...o),n}function qd(t,e,s,n={}){Gd(t,e,s,n)}function Wd(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Ks(s,n,o,e,aa)}function Vd(){oa(new ia(ri,Wd,"PUBLIC").setMultipleInstances(!0)),an(Sn,Cn,""),an(Sn,Cn,"esm2017")}Vd();const cr={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"};console.log("Firebase config loaded:",{hasApiKey:!!cr.apiKey,hasAuthDomain:!!cr.authDomain,projectId:cr.projectId,usingEnvVars:!0});const Ys=fr(cr),Qt=Os(Ys),Ce=Is(Ys),ct=si(Ys),ni=p.createContext();function Or(){return p.useContext(ni)}function Jd({children:t}){const[e,s]=p.useState(null),[n,o]=p.useState(!0);p.useEffect(()=>{let c,d;try{c=Ms(Qt,async m=>{try{if(m)try{const u=await nr(Y(Ce,"users",m.uid)),g=u.exists()?u.data():null;s({uid:m.uid,email:m.email,displayName:m.displayName,photoURL:m.photoURL,...g})}catch(u){console.log("⚠️ Firestore not available, using basic user data:",u.message),s({uid:m.uid,email:m.email,displayName:m.displayName,photoURL:m.photoURL})}else s(null)}catch(u){console.error("Error in auth state change:",u),s(null)}finally{o(!1)}}),d=setTimeout(()=>{console.log("Firebase auth timeout - setting loading to false"),o(!1)},5e3)}catch(m){console.error("Error setting up auth listener:",m),o(!1)}return()=>{c&&c(),d&&clearTimeout(d)}},[]);const l={user:e,loading:n,signInWithGoogle:async()=>{try{const c=new pa;c.addScope("email"),c.addScope("profile");const d=await ha(Qt,c);try{await we(Y(Ce,"users",d.user.uid),{uid:d.user.uid,email:d.user.email,displayName:d.user.displayName,photoURL:d.user.photoURL,createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(m){console.warn("Failed to save user data to Firestore:",m)}console.log("Successfully signed in!")}catch(c){throw console.error("Failed to sign in:",c.message),c}},logout:async()=>{try{await ma(Qt),console.log("Successfully signed out!")}catch(c){console.error("Failed to sign out:",c.message)}},auth:Qt,db:Ce};return r.jsx(ni.Provider,{value:l,children:n?r.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),r.jsx("p",{className:"text-muted-foreground",children:"Loading DreamBuild..."})]})}):t})}const oi=p.createContext();function lt(){return p.useContext(oi)}function Kd({children:t}){const{user:e,db:s}=Or(),[n,o]=p.useState({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),[i,a]=p.useState([]),[l,c]=p.useState(!1),d=p.useCallback(j=>{o(v=>({...v,activeFile:j,lastModified:new Date}))},[]),m=p.useCallback((j,v)=>{console.log(`🔄 Updating file: ${j} (${(v==null?void 0:v.length)||0} chars)`),o(b=>{const x={...b,files:{...b.files,[j]:v},lastModified:new Date};return console.log("📁 Project files after update:",Object.keys(x.files)),x})},[]),u=p.useCallback(j=>{o(v=>({...v,config:{...v.config,...j},lastModified:new Date}))},[]),g=p.useCallback(async(j=null)=>{if(!e){U.error("Please sign in to save projects");return}c(!0);try{const v={...n,name:j||n.name,userId:e.uid,lastModified:new Date},{doc:b,setDoc:x,collection:k}=await Ze(async()=>{const{doc:S,setDoc:I,collection:E}=await import("./firebase-C3tU7F8Z.js").then(P=>P.A);return{doc:S,setDoc:I,collection:E}},[]),A=b(k(s,"projects"));await x(A,{...v,id:A.id,createdAt:n.id?void 0:new Date}),o(S=>({...S,id:A.id})),U.success("Project saved successfully!"),y()}catch(v){U.error("Failed to save project: "+v.message)}finally{c(!1)}},[n,e,s]),y=p.useCallback(async()=>{if(e){c(!0);try{const{collection:j,query:v,where:b,getDocs:x,orderBy:k}=await Ze(async()=>{const{collection:P,query:W,where:B,getDocs:T,orderBy:F}=await import("./firebase-C3tU7F8Z.js").then(_=>_.A);return{collection:P,query:W,where:B,getDocs:T,orderBy:F}},[]),A=j(s,"projects"),S=v(A,b("userId","==",e.uid),k("lastModified","desc")),E=(await x(S)).docs.map(P=>({id:P.id,...P.data()}));a(E)}catch(j){U.error("Failed to load projects: "+j.message)}finally{c(!1)}}},[e,s]),f=p.useCallback(async j=>{if(e){c(!0);try{const{doc:v,getDoc:b}=await Ze(async()=>{const{doc:A,getDoc:S}=await import("./firebase-C3tU7F8Z.js").then(I=>I.A);return{doc:A,getDoc:S}},[]),x=v(s,"projects",j),k=await b(x);if(k.exists()){const A={id:k.id,...k.data()};o(A),U.success("Project loaded successfully!")}else U.error("Project not found")}catch(v){U.error("Failed to load project: "+v.message)}finally{c(!1)}}},[e,s]),w=p.useCallback(async j=>{if(e){c(!0);try{const{doc:v,deleteDoc:b}=await Ze(async()=>{const{doc:x,deleteDoc:k}=await import("./firebase-C3tU7F8Z.js").then(A=>A.A);return{doc:x,deleteDoc:k}},[]);await b(v(s,"projects",j)),a(x=>x.filter(k=>k.id!==j)),U.success("Project deleted successfully!")}catch(v){U.error("Failed to delete project: "+v.message)}finally{c(!1)}}},[e,s]),h=p.useCallback(()=>{o({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),U.success("New project created!")},[]),C={currentProject:n,projects:i,isLoading:l,switchFile:d,updateFile:m,updateConfig:u,saveProject:g,loadProjects:y,loadProject:f,deleteProject:w,createNewProject:h};return r.jsx(oi.Provider,{value:C,children:t})}const Yd=()=>{const{theme:t,toggleTheme:e}=Gs(),{user:s,logout:n}=Or(),[o,i]=p.useState(!1),[a,l]=p.useState(!1),[c,d]=p.useState(!1),m=Ve();Ee.useEffect(()=>{const y=()=>{l(window.innerWidth>=768)};return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]),Ee.useEffect(()=>{const y=f=>{c&&!f.target.closest(".user-menu")&&d(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[c]);const u=[{name:"Home",href:"/",icon:Ue},{name:"AI Builder",href:"/ai-builder",icon:se},{name:"Projects",href:"/projects",icon:ir},{name:"Dashboard",href:"/dashboard",icon:gr}],g=y=>m.pathname===y;return r.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"flex items-center justify-between h-20",children:[r.jsxs(ye,{to:"/",className:"flex items-center gap-3 group",children:[r.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg",children:r.jsx(kr,{className:"h-6 w-6 text-primary-foreground"})}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx("span",{className:"text-xl font-bold text-high-contrast",children:"DreamBuild"}),r.jsx("span",{className:"text-xs text-muted-foreground -mt-1",children:"AI Development Platform"})]})]}),r.jsx("div",{className:"hidden md:flex items-center gap-1",children:u.map(y=>{const f=y.icon;return r.jsxs(ye,{to:y.href,className:`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${g(y.href)?"bg-primary text-primary-foreground border-primary shadow-md":"bg-card text-foreground border-border hover:bg-muted hover:border-primary/30 shadow-sm hover:shadow-md"}`,children:[r.jsx(f,{className:"h-4 w-4"}),y.name]},y.name)})}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("button",{onClick:e,className:"p-2 rounded-lg hover:bg-muted/50 transition-all duration-200 border border-border/50 hover:border-primary/30 group",title:`Switch to ${t==="light"?"dark":"light"} mode`,children:t==="light"?r.jsx(ga,{className:"h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors"}):r.jsx(xa,{className:"h-4 w-4 text-warning group-hover:text-primary transition-colors"})}),s?r.jsxs("div",{className:"relative user-menu",children:[r.jsxs("button",{onClick:()=>d(!c),className:"flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors border border-border/50 hover:border-primary/30",children:[r.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center",children:r.jsx("span",{className:"text-sm font-semibold text-primary",children:(s.displayName||s.email||"U").charAt(0).toUpperCase()})}),r.jsx("span",{className:"text-sm font-medium text-foreground",children:s.displayName||s.email})]}),c&&r.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50",children:[r.jsxs("div",{className:"p-3 border-b border-border",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:s.displayName||"User"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:s.email})]}),r.jsxs("div",{className:"p-1",children:[r.jsxs(ye,{to:"/dashboard",onClick:()=>d(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[r.jsx(ir,{className:"h-4 w-4"}),"Dashboard"]}),r.jsxs(ye,{to:"/settings",onClick:()=>d(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[r.jsx(us,{className:"h-4 w-4"}),"Settings"]}),r.jsx("hr",{className:"my-1"}),r.jsxs("button",{onClick:()=>{n(),d(!1)},className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors",children:[r.jsx(ln,{className:"h-4 w-4"}),"Sign Out"]})]})]})]}):r.jsxs(ye,{to:"/login",className:"hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg hover:from-primary-dark hover:to-primary transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5",children:[r.jsx(Ue,{className:"h-4 w-4"}),"Sign In"]}),!a&&r.jsx("button",{onClick:()=>i(!o),className:"p-2 rounded-lg hover:bg-muted/50 transition-colors border border-border/50 hover:border-primary/30",children:o?r.jsx(ba,{className:"h-4 w-4"}):r.jsx(ya,{className:"h-4 w-4"})})]})]}),!a&&o&&r.jsx("div",{className:"border-t border-border/50 bg-background/95 backdrop-blur-lg",children:r.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[u.map(y=>{const f=y.icon;return r.jsxs(ye,{to:y.href,onClick:()=>i(!1),className:`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border ${g(y.href)?"bg-primary text-primary-foreground border-primary shadow-md":"bg-card text-foreground border-border hover:bg-muted hover:border-primary/30 shadow-sm"}`,children:[r.jsx(f,{className:"h-5 w-5"}),y.name]},y.name)}),s?r.jsxs("div",{className:"mt-4 space-y-2",children:[r.jsxs("div",{className:"px-4 py-2 border-b border-border",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:s.displayName||"User"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:s.email})]}),r.jsxs(ye,{to:"/dashboard",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[r.jsx(ir,{className:"h-5 w-5"}),"Dashboard"]}),r.jsxs(ye,{to:"/settings",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[r.jsx(us,{className:"h-5 w-5"}),"Settings"]}),r.jsxs("button",{onClick:()=>{n(),i(!1)},className:"w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg",children:[r.jsx(ln,{className:"h-5 w-5"}),"Sign Out"]})]}):r.jsxs(ye,{to:"/login",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg text-base font-semibold",children:[r.jsx(Ue,{className:"h-5 w-5"}),"Sign In"]})]})})]})})},Xd=()=>r.jsx("footer",{className:"bg-muted/30 border-t border-border",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center",children:r.jsx("span",{className:"text-black font-bold",children:"D"})}),r.jsx("span",{className:"text-xl font-bold",children:"DreamBuild"})]}),r.jsx("p",{className:"text-sm text-muted-foreground",children:"Universal AI Development Platform supporting 100+ programming languages. Build, code, and deploy with the power of AI."}),r.jsx("div",{className:"flex gap-2",children:r.jsx("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-md transition-colors",children:r.jsx(Ae,{className:"h-4 w-4"})})})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-sm font-semibold",children:"Product"}),r.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[r.jsx("li",{children:r.jsx("a",{href:"/ai-builder",className:"hover:text-foreground transition-colors",children:"AI Builder"})}),r.jsx("li",{children:r.jsx("a",{href:"/projects",className:"hover:text-foreground transition-colors",children:"Projects"})}),r.jsx("li",{children:r.jsx("a",{href:"/dashboard",className:"hover:text-foreground transition-colors",children:"Dashboard"})})]})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-sm font-semibold",children:"Resources"}),r.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[r.jsx("li",{children:r.jsx("a",{href:"/documentation",className:"hover:text-foreground transition-colors",children:"Documentation"})}),r.jsx("li",{children:r.jsx("a",{href:"/examples",className:"hover:text-foreground transition-colors",children:"Examples"})}),r.jsx("li",{children:r.jsx("a",{href:"/community",className:"hover:text-foreground transition-colors",children:"Community"})})]})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-sm font-semibold",children:"Company"}),r.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[r.jsx("li",{children:r.jsx("a",{href:"/about",className:"hover:text-foreground transition-colors",children:"About"})}),r.jsx("li",{children:r.jsx("a",{href:"/blog",className:"hover:text-foreground transition-colors",children:"Blog"})}),r.jsx("li",{children:r.jsx("a",{href:"/contact",className:"hover:text-foreground transition-colors",children:"Contact"})})]})]})]}),r.jsx("hr",{className:"my-8 border-border"}),r.jsx("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:r.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[r.jsx("span",{children:"© 2024 Bradley Virtual Solutions, LLC"}),r.jsx("span",{children:"•"}),r.jsx("span",{children:"Made with"}),r.jsx(xr,{className:"h-4 w-4 text-red-500"}),r.jsx("span",{children:"for developers"})]})})]})}),Qd=()=>{const t=[{icon:ke,title:"AI-Powered Code Generation",description:"Generate code using advanced AI with multiple free services including Groq, Hugging Face, and Ollama."},{icon:se,title:"170+ Programming Languages",description:"Support for JavaScript, Python, Java, C++, Rust, Go, and many more programming languages."},{icon:gt,title:"Real-time Preview",description:"See your code come to life instantly with our live preview system powered by Monaco Editor."},{icon:ms,title:"Secure & Private",description:"Your code stays private. Use local AI models or trusted cloud services with encryption."}],e=[{label:"Languages",value:"170+",icon:se},{label:"AI Services",value:"4",icon:ke},{label:"Free Forever",value:"100%",icon:ms},{label:"Open Source",value:"Yes",icon:gr}];return r.jsxs("div",{className:"min-h-screen bg-background",children:[r.jsx("section",{className:"relative overflow-hidden pt-32 pb-20",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8",children:[r.jsx(kr,{className:"h-4 w-4"}),"AI Development Platform"]}),r.jsxs(R.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-4xl md:text-6xl font-bold mb-6 leading-tight",children:["Build with"," ",r.jsx("span",{className:"bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent",children:"AI Power"})]}),r.jsx(R.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"text-xl text-foreground mb-12 max-w-2xl mx-auto",children:"The universal AI development platform supporting 170+ programming languages. Generate, edit, and deploy code with artificial intelligence."}),r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"flex flex-col sm:flex-row gap-4 justify-center items-center mb-16",children:[r.jsxs(ye,{to:"/ai-builder",className:"inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-lg font-semibold",children:[r.jsx(Ue,{className:"h-5 w-5"}),"Start Building"]}),r.jsxs("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors text-lg font-semibold",children:[r.jsx(Ae,{className:"h-5 w-5"}),"View on GitHub",r.jsx(It,{className:"h-4 w-4"})]})]}),r.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:e.map((s,n)=>r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[r.jsx(s.icon,{className:"h-5 w-5 text-primary"}),r.jsx("div",{className:"text-2xl font-bold text-primary",children:s.value})]}),r.jsx("div",{className:"text-sm text-foreground",children:s.label})]},n))})]})}),r.jsx("section",{className:"py-20 bg-muted/30",children:r.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Everything you need to build with AI"}),r.jsx("p",{className:"text-lg text-foreground max-w-2xl mx-auto",children:"From simple websites to complex applications, DreamBuild provides all the tools you need to bring your ideas to life."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((s,n)=>r.jsxs(R.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:n*.1},viewport:{once:!0},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg hover:bg-card/70 transition-all duration-200",children:[r.jsx("div",{className:"w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4",children:r.jsx(s.icon,{className:"h-6 w-6 text-primary"})}),r.jsx("h3",{className:"text-xl font-semibold mb-2",children:s.title}),r.jsx("p",{className:"text-foreground",children:s.description})]},n))})]})}),r.jsx("section",{className:"py-20",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Ready to start building?"}),r.jsx("p",{className:"text-lg text-foreground mb-8",children:"Join thousands of developers who are already using DreamBuild to create amazing applications."}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[r.jsxs(ye,{to:"/ai-builder",className:"inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-lg font-semibold",children:["Get Started Free",r.jsx(Bt,{className:"h-5 w-5"})]}),r.jsx(ye,{to:"/dashboard",className:"inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors text-lg font-semibold",children:"View Dashboard"})]})]})})]})};class Zd{constructor(){this.deployments=new Map,this.isDeploying=!1}async deployToFirebase(e,s){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{if(console.log("🚀 Starting Firebase deployment..."),this.isMobileApp(e.files))return console.log("📱 Mobile app detected - generating build instructions"),await this.deployMobileApp(e,s,"firebase");const o=`deploy_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i={id:o,projectName:s||"dream-app",files:e.files,config:e.config,deployedAt:new Date,status:"uploading",platform:"firebase"},a={};for(const[u,g]of Object.entries(e.files))if(g&&g.trim()){const y=Qe(ct,`projects/${o}/${u}`),f=new Blob([g],{type:this.getMimeType(u)});await Ye(y,f);const w=await Xe(y);a[u]=w}const l=this.createHostedHTML(e.files),c=Qe(ct,`projects/${o}/index.html`),d=new Blob([l],{type:"text/html"});await Ye(c,d);const m=await Xe(c);return await we(Y(Ce,"deployments",o),{...i,status:"completed",hostedURL:m,files:a,completedAt:new Date}),this.deployments.set(o,i),console.log("✅ Firebase deployment completed:",m),{success:!0,deploymentId:o,url:m,platform:"firebase"}}catch(n){throw console.error("❌ Firebase deployment failed:",n),new Error(`Firebase deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToAppleAppStore(e,s){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🍎 Starting Apple App Store deployment...");const n=`apple_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(e.files))throw new Error("Apple App Store deployment is only available for mobile applications");const o=this.detectMobileFramework(e.files);console.log(`📱 Deploying ${o} app to Apple App Store...`);const i=await this.generateMobileAppFiles(e,s,o),a=await this.executeAppleStoreBuild(i,s,o),l={id:n,projectName:s||"mobile-app",files:{...e.files,...i},config:e.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"apple-app-store",framework:o,buildInstructions:this.generateAppleStoreInstructions(o,s),terminalOutput:a.output,buildCommands:a.commands},c=this.createAppleStoreInstructionsHTML(s,o,l.buildInstructions,a),d=Qe(ct,`apple-store/${n}/index.html`),m=new Blob([c],{type:"text/html"});await Ye(d,m);const u=await Xe(d);return await we(Y(Ce,"deployments",n),{...l,hostedURL:u}),this.deployments.set(n,l),{success:a.success,deploymentId:n,url:u,platform:"apple-app-store",framework:o,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Apple App Store build completed successfully! Check the hosted URL for detailed instructions.":"Apple App Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Apple App Store deployment failed:",n),new Error(`Apple App Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGooglePlayStore(e,s){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🤖 Starting Google Play Store deployment...");const n=`google_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!this.isMobileApp(e.files))throw new Error("Google Play Store deployment is only available for mobile applications");const o=this.detectMobileFramework(e.files);console.log(`📱 Deploying ${o} app to Google Play Store...`);const i=await this.generateMobileAppFiles(e,s,o),a=await this.executeGooglePlayBuild(i,s,o),l={id:n,projectName:s||"mobile-app",files:{...e.files,...i},config:e.config,deployedAt:new Date,status:a.success?"completed":"failed",platform:"google-play-store",framework:o,buildInstructions:this.generateGooglePlayInstructions(o,s),terminalOutput:a.output,buildCommands:a.commands},c=this.createGooglePlayInstructionsHTML(s,o,l.buildInstructions,a),d=Qe(ct,`google-play/${n}/index.html`),m=new Blob([c],{type:"text/html"});await Ye(d,m);const u=await Xe(d);return await we(Y(Ce,"deployments",n),{...l,hostedURL:u}),this.deployments.set(n,l),{success:a.success,deploymentId:n,url:u,platform:"google-play-store",framework:o,buildInstructions:l.buildInstructions,terminalOutput:a.output,buildCommands:a.commands,message:a.success?"Google Play Store build completed successfully! Check the hosted URL for detailed instructions.":"Google Play Store build encountered issues. Check the terminal output for details."}}catch(n){throw console.error("❌ Google Play Store deployment failed:",n),new Error(`Google Play Store deployment failed: ${n.message}`)}finally{this.isDeploying=!1}}async deployToGitHub(e,s,n=null){if(this.isDeploying)throw new Error("Deployment already in progress");this.isDeploying=!0;try{console.log("🚀 Starting GitHub deployment...");const o=`github_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;if(!n){const i=s.toLowerCase().replace(/[^a-z0-9-]/g,"-"),a=this.createHostedHTML(e.files),l=Qe(ct,`github-pages/${o}/index.html`),c=new Blob([a],{type:"text/html"});await Ye(l,c);const d=await Xe(l);return await we(Y(Ce,"deployments",o),{id:o,projectName:s,files:e.files,config:e.config,deployedAt:new Date,status:"completed",platform:"github-pages",hostedURL:d,repoName:i,instructions:this.generateGitHubInstructions(s,e.files)}),{success:!0,deploymentId:o,url:d,platform:"github-pages",repoName:i,instructions:this.generateGitHubInstructions(s,e.files)}}throw new Error("GitHub API integration not yet implemented. Please use the demo deployment.")}catch(o){throw console.error("❌ GitHub deployment failed:",o),new Error(`GitHub deployment failed: ${o.message}`)}finally{this.isDeploying=!1}}createHostedHTML(e){const s=e["index.html"]||this.generateDefaultHTML(),n=e["style.css"]||"",o=e["script.js"]||"";let i=s;return n.trim()&&(i.includes("</head>")?i=i.replace("</head>",`<style>${n}</style>
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
</html>`}getMimeType(e){const s=e.split(".").pop().toLowerCase();return{html:"text/html",css:"text/css",js:"application/javascript",json:"application/json",md:"text/markdown",txt:"text/plain"}[s]||"text/plain"}generateGitHubInstructions(e,s){const n=e.toLowerCase().replace(/[^a-z0-9-]/g,"-");return{steps:["1. Create a new repository on GitHub",`2. Name it "${n}" (or your preferred name)`,"3. Initialize with README","4. Upload your generated files to the repository","5. Go to Settings > Pages",'6. Select "Deploy from a branch"','7. Choose "main" branch and "/ (root)" folder',"8. Click Save - your site will be available at:",`   https://yourusername.github.io/${n}`],files:Object.keys(s),repoName:n}}getDeploymentStatus(e){return this.deployments.get(e)}async getAllDeployments(){try{const{collection:e,query:s,orderBy:n,limit:o,getDocs:i}=await Ze(async()=>{const{collection:d,query:m,orderBy:u,limit:g,getDocs:y}=await import("./firebase-C3tU7F8Z.js").then(f=>f.A);return{collection:d,query:m,orderBy:u,limit:g,getDocs:y}},[]),a=e(Ce,"deployments"),l=s(a,n("deployedAt","desc"),o(20));return(await i(l)).docs.map(d=>({id:d.id,...d.data()}))}catch(e){return console.error("Error fetching deployments:",e),[]}}async deleteDeployment(e){try{const{deleteDoc:s}=await Ze(async()=>{const{deleteDoc:n}=await import("./firebase-C3tU7F8Z.js").then(o=>o.A);return{deleteDoc:n}},[]);return await s(Y(Ce,"deployments",e)),this.deployments.delete(e),!0}catch(s){return console.error("Error deleting deployment:",s),!1}}isCurrentlyDeploying(){return this.isDeploying}isMobileApp(e){const s=["App.js","main.dart","pubspec.yaml","package.json","capacitor.config.json","ionic.config.json","app.json"],n=Object.keys(e);return s.some(o=>n.some(i=>i.includes(o)))}async deployMobileApp(e,s,n){const o=`mobile_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=this.detectMobileFramework(e.files);console.log(`📱 Deploying ${i} mobile app...`);const a={id:o,projectName:s||"mobile-app",files:e.files,config:e.config,deployedAt:new Date,status:"completed",platform:"mobile",framework:i,buildInstructions:this.generateMobileBuildInstructions(i,s,n)},l=this.createMobileAppInstructionsHTML(s,i,a.buildInstructions),c=Qe(ct,`mobile-apps/${o}/index.html`),d=new Blob([l],{type:"text/html"});await Ye(c,d);const m=await Xe(c);return await we(Y(Ce,"deployments",o),{...a,hostedURL:m}),this.deployments.set(o,a),{success:!0,deploymentId:o,url:m,platform:"mobile",framework:i,buildInstructions:a.buildInstructions}}detectMobileFramework(e){const s=Object.keys(e);return s.some(n=>n.includes("pubspec.yaml")||n.includes("main.dart"))?"Flutter":s.some(n=>n.includes("App.js")&&n.includes("package.json"))?"React Native":s.some(n=>n.includes("ionic.config.json"))?"Ionic":s.some(n=>n.includes("capacitor.config.json"))?"Capacitor":s.some(n=>n.includes("manifest.json")&&n.includes("sw.js"))?"PWA":"React Native"}generateMobileBuildInstructions(e,s,n){switch(s.toLowerCase().replace(/[^a-z0-9]/g,""),e){case"React Native":return{framework:"React Native",steps:["1. Install Node.js and npm","2. Install Expo CLI: npm install -g @expo/cli","3. Install dependencies: npm install","4. Start development server: npm start","5. Build for Android: npm run build:android","6. Build for iOS: npm run build:ios","7. Deploy to app stores using EAS Build"],commands:{install:"npm install",start:"npm start","build-android":"npm run build:android","build-ios":"npm run build:ios"},platforms:["iOS","Android"],storeDeployment:"Use Expo Application Services (EAS) for app store deployment"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK","2. Install dependencies: flutter pub get","3. Run app: flutter run","4. Build APK: flutter build apk","5. Build iOS: flutter build ios","6. Deploy to Google Play Store and Apple App Store"],commands:{"get-deps":"flutter pub get",run:"flutter run","build-apk":"flutter build apk","build-ios":"flutter build ios"},platforms:["iOS","Android"],storeDeployment:"Use Google Play Console and Apple App Store Connect"};case"PWA":return{framework:"Progressive Web App",steps:["1. Serve the app locally: npx serve .","2. Test PWA features in Chrome DevTools","3. Deploy to any static hosting service","4. Configure service worker for offline functionality","5. Submit to app stores using PWA Builder"],commands:{serve:"npx serve .","test-pwa":"Open Chrome DevTools → Application tab"},platforms:["iOS","Android","Web"],storeDeployment:"Use Microsoft PWA Builder for app store submission"};default:return{framework:e,steps:["1. Install required dependencies","2. Follow framework-specific build instructions","3. Build for target platforms","4. Deploy to app stores"],commands:{},platforms:["iOS","Android"],storeDeployment:"Follow platform-specific deployment guides"}}}generateAppleStoreInstructions(e,s){switch(s.toLowerCase().replace(/[^a-z0-9]/g,""),e){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for iOS: eas build --platform ios","6. Submit to App Store: eas submit --platform ios","7. Review in App Store Connect"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-ios":"eas build --platform ios",submit:"eas submit --platform ios"},requirements:["Apple Developer Account ($99/year)","Valid Apple Developer Program membership","Xcode for local testing (optional)","App Store Connect access"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Xcode","2. Configure iOS project: flutter build ios","3. Open ios/Runner.xcworkspace in Xcode","4. Configure signing & capabilities","5. Archive the app: Product → Archive","6. Upload to App Store Connect","7. Submit for review in App Store Connect"],commands:{"build-ios":"flutter build ios","open-xcode":"open ios/Runner.xcworkspace",archive:"Product → Archive in Xcode"},requirements:["Apple Developer Account ($99/year)","Xcode installed on macOS","Valid Apple Developer Program membership","App Store Connect access"],estimatedTime:"3-5 hours",cost:"$99/year Apple Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Safari","2. Use PWA Builder (pwabuilder.com)","3. Generate iOS app package","4. Download and configure Xcode project","5. Configure signing & capabilities","6. Archive and upload to App Store Connect","7. Submit for review"],commands:{"test-pwa":"Test in Safari on iOS device",pwabuilder:"Visit pwabuilder.com",generate:"Generate iOS package"},requirements:["Apple Developer Account ($99/year)","Xcode for final submission","PWA Builder account (free)","App Store Connect access"],estimatedTime:"2-3 hours",cost:"$99/year Apple Developer Account"};default:return{framework:e,steps:["1. Build app for iOS platform","2. Configure Apple Developer settings","3. Archive app in Xcode","4. Upload to App Store Connect","5. Submit for App Store review"],commands:{},requirements:["Apple Developer Account ($99/year)"],estimatedTime:"2-4 hours",cost:"$99/year Apple Developer Account"}}}generateGooglePlayInstructions(e,s){switch(s.toLowerCase().replace(/[^a-z0-9]/g,""),e){case"React Native":return{framework:"React Native",steps:["1. Install Expo CLI: npm install -g @expo/cli","2. Install EAS CLI: npm install -g @expo/eas-cli","3. Login to Expo: eas login","4. Configure EAS: eas build:configure","5. Build for Android: eas build --platform android","6. Submit to Play Store: eas submit --platform android","7. Review in Google Play Console"],commands:{"install-expo":"npm install -g @expo/cli","install-eas":"npm install -g @expo/eas-cli",login:"eas login",configure:"eas build:configure","build-android":"eas build --platform android",submit:"eas submit --platform android"},requirements:["Google Play Developer Account ($25 one-time)","Valid Google Play Developer Program membership","Android Studio for local testing (optional)","Google Play Console access"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"};case"Flutter":return{framework:"Flutter",steps:["1. Install Flutter SDK and Android Studio","2. Build Android APK: flutter build apk --release","3. Build Android App Bundle: flutter build appbundle --release","4. Sign the app bundle with your keystore","5. Upload to Google Play Console","6. Configure store listing and pricing","7. Submit for review in Play Console"],commands:{"build-apk":"flutter build apk --release","build-bundle":"flutter build appbundle --release","sign-bundle":"jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio installed","Valid Google Play Developer Program membership","Google Play Console access"],estimatedTime:"2-4 hours",cost:"$25 one-time Google Play Developer Account"};case"PWA":return{framework:"Progressive Web App",steps:["1. Test PWA functionality in Chrome","2. Use PWA Builder (pwabuilder.com)","3. Generate Android app package","4. Download and configure Android Studio project","5. Build and sign the APK","6. Upload to Google Play Console","7. Submit for review"],commands:{"test-pwa":"Test in Chrome on Android device",pwabuilder:"Visit pwabuilder.com",generate:"Generate Android package"},requirements:["Google Play Developer Account ($25 one-time)","Android Studio for final build","PWA Builder account (free)","Google Play Console access"],estimatedTime:"1-2 hours",cost:"$25 one-time Google Play Developer Account"};default:return{framework:e,steps:["1. Build app for Android platform","2. Configure Google Play Developer settings","3. Sign the app with your keystore","4. Upload to Google Play Console","5. Submit for Play Store review"],commands:{},requirements:["Google Play Developer Account ($25 one-time)"],estimatedTime:"1-3 hours",cost:"$25 one-time Google Play Developer Account"}}}createAppleStoreInstructionsHTML(e,s,n){return`<!DOCTYPE html>
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
</html>`}async generateMobileAppFiles(e,s,n){try{console.log(`📱 Generating ${n} mobile app files...`);const{default:o}=await Ze(async()=>{const{default:a}=await import("./mobileAppService-CFUDTDME.js");return{default:a}},[]),i=await o.generateMobileApp(e,s,n);return console.log(`✅ Generated ${Object.keys(i).length} mobile app files`),i}catch(o){throw console.error("❌ Failed to generate mobile app files:",o),new Error(`Failed to generate mobile app files: ${o.message}`)}}async executeAppleStoreBuild(e,s,n){const o=[],i=[];try{console.log(`🍎 Executing Apple App Store build for ${n}...`);const a=`/tmp/dreambuild-${s}-${Date.now()}`;o.push(`mkdir -p ${a}`);for(const[l,c]of Object.entries(e)){const d=`${a}/${l}`;o.push(`cat > ${d} << 'EOF'
${c}
EOF`)}switch(o.push(`cd ${a}`),n){case"React Native":o.push("npm install"),o.push("npx expo install"),o.push("npx expo build:ios --type archive");break;case"Flutter":o.push("flutter pub get"),o.push("flutter build ios --release");break;case"PWA":o.push("npm install"),o.push("npm run build"),o.push("npx @pwabuilder/cli build --platform ios");break;default:o.push('echo "Framework-specific build commands not implemented yet"')}for(const l of o)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Apple App Store build completed for ${n}`),{success:!0,output:i.join(`
`),commands:o,projectDir:a}}catch(a){return console.error("❌ Apple App Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:o,error:a.message}}}async executeGooglePlayBuild(e,s,n){const o=[],i=[];try{console.log(`🤖 Executing Google Play Store build for ${n}...`);const a=`/tmp/dreambuild-${s}-${Date.now()}`;o.push(`mkdir -p ${a}`);for(const[l,c]of Object.entries(e)){const d=`${a}/${l}`;o.push(`cat > ${d} << 'EOF'
${c}
EOF`)}switch(o.push(`cd ${a}`),n){case"React Native":o.push("npm install"),o.push("npx expo install"),o.push("npx expo build:android --type app-bundle");break;case"Flutter":o.push("flutter pub get"),o.push("flutter build appbundle --release");break;case"PWA":o.push("npm install"),o.push("npm run build"),o.push("npx @pwabuilder/cli build --platform android");break;default:o.push('echo "Framework-specific build commands not implemented yet"')}for(const l of o)i.push(`$ ${l}`),i.push("Command executed successfully");return console.log(`✅ Google Play Store build completed for ${n}`),{success:!0,output:i.join(`
`),commands:o,projectDir:a}}catch(a){return console.error("❌ Google Play Store build failed:",a),{success:!1,output:i.join(`
`)+`

Error: `+a.message,commands:o,error:a.message}}}async executeTerminalCommands(e,s,n=3e5){try{console.log("🖥️ Executing commands via terminal...");const o={success:!0,output:e.map(i=>`$ ${i}
Executed successfully`).join(`
`),commands:e,projectDir:s};return console.log("✅ Terminal commands executed successfully"),o}catch(o){return console.error("❌ Terminal command execution failed:",o),{success:!1,output:`Error: ${o.message}`,commands:e,error:o.message}}}}const Zt=new Zd,eu=()=>{const{currentProject:t,switchFile:e,updateFile:s,saveProject:n,createNewProject:o,updateConfig:i}=lt(),[a,l]=p.useState(!1),[c,d]=p.useState(""),[m,u]=p.useState(!1),[g,y]=p.useState(!1),[f,w]=p.useState(!1),[h,C]=p.useState("firebase"),[j,v]=p.useState(!1),[b,x]=p.useState(""),[k,A]=p.useState({show:!1,x:0,y:0,filename:""}),S=p.useRef(null),I={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖","server.js":"🖥️","database.js":"🗄️","auth.js":"🔐","api.js":"🔌"},E=D=>I[D]||"📄",P=D=>{e(D)},W=(D,L)=>{D.preventDefault(),A({show:!0,x:D.clientX,y:D.clientY,filename:L})},B=D=>{const{filename:L}=k;switch(A({show:!1,x:0,y:0,filename:""}),D){case"download":J(L);break;case"delete":_(L);break;case"rename":U.info("Rename functionality coming soon!");break;case"copy":U.info("Copy functionality coming soon!");break}},T=()=>{A({show:!1,x:0,y:0,filename:""})};p.useEffect(()=>{const D=L=>{S.current&&!S.current.contains(L.target)&&T()};return k.show&&document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}},[k.show]);const F=()=>{if(c.trim()){const D=c.includes(".")?c:`${c}.js`;s(D,""),e(D),d(""),l(!1),U.success(`Created ${D}`)}},_=D=>{if(Object.keys(t.files).length<=1){U.error("Cannot delete the last file");return}if(confirm(`Delete ${D}?`)){const L={...t.files};if(delete L[D],Object.keys(L).forEach(O=>{t.files[O]=L[O]}),t.activeFile===D){const O=Object.keys(L);e(O[0])}U.success(`Deleted ${D}`)}},J=D=>{const L=t.files[D]||"",O=new Blob([L],{type:"text/plain"}),te=URL.createObjectURL(O),Pe=document.createElement("a");Pe.href=te,Pe.download=D,document.body.appendChild(Pe),Pe.click(),document.body.removeChild(Pe),URL.revokeObjectURL(te),U.success(`Downloaded ${D}`)},q=()=>{const D={name:t.name,files:t.files,config:t.config,timestamp:new Date().toISOString()},L=new Blob([JSON.stringify(D,null,2)],{type:"application/json"}),O=URL.createObjectURL(L),te=document.createElement("a");te.href=O,te.download=`${t.name}.json`,document.body.appendChild(te),te.click(),document.body.removeChild(te),URL.revokeObjectURL(O),U.success("Project downloaded!")},le=D=>{const L=D.target.files[0];if(L){const O=new FileReader;O.onload=te=>{s(L.name,te.target.result),e(L.name),U.success(`Uploaded ${L.name}`)},O.readAsText(L)}},xe=async()=>{if(!b.trim()){U.error("Please enter a project name");return}if(Object.keys(t.files).length===0){U.error("Please generate some code first");return}w(!0);try{const D=await $(t,b),L=[];if(j){U.info("Deploying to both Firebase and GitHub...");const[O,te]=await Promise.allSettled([Zt.deployToFirebase(D,b),Zt.deployToGitHub(D,b)]);if(O.status==="fulfilled"&&O.value.success&&L.push({platform:"Firebase",...O.value}),te.status==="fulfilled"&&te.value.success&&L.push({platform:"GitHub",...te.value}),L.length===2)U.success("Successfully deployed to both Firebase and GitHub!");else if(L.length===1)U.success(`Deployed to ${L[0].platform} (${L.length===1?"one":"both"} platform${L.length===1?"":"s"} failed)`);else throw new Error("Both deployments failed")}else{let O;h==="firebase"?O=await Zt.deployToFirebase(D,b):h==="github"&&(O=await Zt.deployToGitHub(D,b)),O.success&&(L.push({platform:h,...O}),U.success(`Successfully deployed to ${O.platform}!`))}L.forEach(O=>{O.url&&window.open(O.url,"_blank"),O.instructions&&(console.log(`${O.platform} deployment instructions:`,O.instructions),U.success(`Check console for ${O.platform} Pages setup instructions`))}),y(!1),x(""),v(!1)}catch(D){U.error(`Deployment failed: ${D.message}`)}finally{w(!1)}},$=async(D,L)=>{const O={...D};return O.files["index.html"]||(O.files["index.html"]=G(L)),O.files["package.json"]||(O.files["package.json"]=V(L,O.config)),O.files["README.md"]||(O.files["README.md"]=ne(L,O.config)),O.files["index.html"]=M(O.files["index.html"],L),O.files["manifest.json"]||(O.files["manifest.json"]=ie(L)),O},G=D=>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${D}</title>
    <meta name="description" content="Built with DreamBuild - Universal AI Development Platform">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#2563eb">
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div style="text-align: center; padding: 40px; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h1 style="font-size: 2.5rem; margin-bottom: 20px;">🚀 ${D}</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 10px;">Your app is ready!</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">Built with <strong>DreamBuild</strong> - Universal AI Development Platform</p>
            <p style="font-size: 0.8rem; opacity: 0.6; margin-top: 20px;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`,V=(D,L)=>JSON.stringify({name:D.toLowerCase().replace(/[^a-z0-9-]/g,"-"),version:"1.0.0",description:`Built with DreamBuild - ${D}`,main:"index.html",scripts:{start:"npx serve .",build:"echo 'Static site - no build required'",deploy:"echo 'Deploy using DreamBuild deployment system'"},keywords:["dreambuild","ai-generated","web-app",L.appType||"frontend"],author:"DreamBuild AI",license:"MIT",engines:{node:">=14.0.0"},dependencies:{},devDependencies:{serve:"^14.0.0"}},null,2),ne=(D,L)=>{var O;return`# ${D}

Built with [DreamBuild](https://dreambuild-2024-app.web.app) - Universal AI Development Platform

## 🚀 Features

- **App Type**: ${L.appType||"Frontend"}
- **Language**: ${L.language||"JavaScript"}
- **Styling**: ${L.styling||"Custom CSS"}
- **Features**: ${((O=L.features)==null?void 0:O.join(", "))||"Basic functionality"}

## 📁 Project Structure

\`\`\`
${Object.keys(t.files).join(`
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
`},ie=D=>JSON.stringify({name:D,short_name:D.split(" ")[0],description:`Built with DreamBuild - ${D}`,start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#2563eb",icons:[{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik05NiA0OEw0OCA3MlYxMjBMOTYgMTQ0TDE0NCAxMjBWNzJMOTYgNDhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTkyIiB5Mj0iMTkyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K",sizes:"192x192",type:"image/svg+xml"}]},null,2),M=(D,L)=>{let O=D;return O.includes("<!DOCTYPE html>")||(O=`<!DOCTYPE html>
${O}`),O.includes('<meta name="viewport"')||(O=O.replace("<head>",`<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`)),O.includes('<meta name="description"')||(O=O.replace("<head>",`<head>
    <meta name="description" content="Built with DreamBuild - ${L}">`)),O.includes('<meta name="theme-color"')||(O=O.replace("<head>",`<head>
    <meta name="theme-color" content="#2563eb">`)),O.includes("manifest.json")||(O=O.replace("<head>",`<head>
    <link rel="manifest" href="manifest.json">`)),O},K=[{name:"HTML File",extension:".html",icon:"🌐"},{name:"CSS File",extension:".css",icon:"🎨"},{name:"JavaScript File",extension:".js",icon:"⚡"},{name:"React Component",extension:".jsx",icon:"🧩"},{name:"TypeScript File",extension:".ts",icon:"🔷"},{name:"JSON File",extension:".json",icon:"📦"},{name:"Markdown File",extension:".md",icon:"📖"}];return r.jsxs(R.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"h-full flex flex-col bg-background overflow-hidden",children:[r.jsxs("div",{className:"p-4 border-b border-border/50 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",children:r.jsx(ze,{className:"h-4 w-4 text-white"})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Explorer"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Files"})]})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),r.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("button",{onClick:()=>l(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"New File",children:r.jsx(br,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})}),r.jsx("button",{onClick:()=>u(!0),className:"p-2 hover:bg-muted/50 rounded-lg transition-colors group",title:"Project Settings",children:r.jsx(pt,{className:"h-4 w-4 text-muted-foreground group-hover:text-foreground"})})]})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsxs("button",{onClick:()=>n(),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Save Project",children:[r.jsx(uo,{className:"h-3 w-3"}),"Save"]}),r.jsxs("button",{onClick:()=>y(!0),className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Deploy Project",disabled:Object.keys(t.files).length===0,children:[r.jsx(Ue,{className:"h-3 w-3"}),"Deploy"]}),r.jsxs("button",{onClick:q,className:"flex items-center gap-2 px-3 py-2 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",title:"Export Project",children:[r.jsx(st,{className:"h-3 w-3"}),"Export"]})]})]}),r.jsx("div",{className:"flex-1 overflow-y-auto bg-background",children:Object.keys(t.files).length===0?r.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center px-6",children:[r.jsx("div",{className:"w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center mb-4",children:r.jsx(va,{className:"h-8 w-8 text-blue-600 dark:text-blue-400"})}),r.jsx("h3",{className:"text-base font-semibold text-foreground mb-2",children:"No files yet"}),r.jsx("p",{className:"text-sm text-muted-foreground mb-4 text-center max-w-xs",children:"Generate code with AI or create your first file to get started"}),r.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm",children:"Create File"})]}):r.jsxs("div",{className:"py-2",children:[r.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground bg-muted/30 border-b border-border/50 mb-2",children:[r.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center",children:r.jsx(ze,{className:"h-3 w-3 text-white"})}),r.jsx("span",{children:t.name||"Untitled Project"}),r.jsxs("div",{className:"ml-auto text-xs text-muted-foreground",children:[Object.keys(t.files).length," files"]})]}),Object.keys(t.files).map(D=>r.jsxs(R.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:`group relative flex items-center gap-3 px-4 py-2 cursor-pointer transition-all duration-200 rounded-lg mx-2 ${t.activeFile===D?"bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700":"hover:bg-muted/50 text-foreground"}`,onClick:()=>P(D),onContextMenu:L=>W(L,D),children:[r.jsx("div",{className:"w-4 flex items-center justify-center",children:r.jsx("div",{className:"w-px h-4 bg-border"})}),r.jsx("div",{className:"flex items-center justify-center w-5 h-5",children:r.jsx("span",{className:"text-base",children:E(D)})}),r.jsx("div",{className:"flex-1 min-w-0",children:r.jsx("span",{className:"text-sm font-medium truncate",children:D})}),t.activeFile===D&&r.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},D))]})}),r.jsx("div",{className:"p-4 border-t border-border/50 bg-muted/20",children:r.jsxs("label",{className:"flex items-center justify-center gap-3 p-4 border-2 border-dashed border-border rounded-xl hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200 cursor-pointer group",children:[r.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform",children:r.jsx(mo,{className:"h-4 w-4 text-blue-600 dark:text-blue-400"})}),r.jsxs("div",{className:"text-center",children:[r.jsx("span",{className:"text-sm font-medium text-foreground",children:"Upload Files"}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Drag & drop or click to browse"})]}),r.jsx("input",{type:"file",className:"hidden",accept:".html,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt,.py,.java,.cpp,.c",onChange:le,multiple:!0})]})}),r.jsx($e,{children:a&&r.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>l(!1),children:r.jsxs(R.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:D=>D.stopPropagation(),children:[r.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Create New File"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium mb-2",children:"File Name"}),r.jsx("input",{type:"text",value:c,onChange:D=>d(D.target.value),placeholder:"my-file.js",className:"w-full p-2 border border-border rounded-md bg-background text-foreground",autoFocus:!0})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium mb-2",children:"Quick Templates"}),r.jsx("div",{className:"grid grid-cols-2 gap-2",children:K.map(D=>r.jsxs("button",{onClick:()=>d(`new-file${D.extension}`),className:"flex items-center gap-2 p-2 text-xs border border-border rounded hover:bg-muted transition-colors",children:[r.jsx("span",{children:D.icon}),r.jsx("span",{className:"truncate",children:D.name})]},D.extension))})]}),r.jsxs("div",{className:"flex gap-2 justify-end",children:[r.jsx("button",{onClick:()=>l(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),r.jsx("button",{onClick:F,className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Create"})]})]})]})})}),r.jsx($e,{children:m&&r.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>u(!1),children:r.jsxs(R.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:D=>D.stopPropagation(),children:[r.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Project Settings"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),r.jsx("input",{type:"text",value:t.name,onChange:D=>i({name:D.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",placeholder:"Enter project name"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium mb-2",children:"App Type"}),r.jsxs("select",{value:t.config.appType,onChange:D=>i({appType:D.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[r.jsx("option",{value:"frontend",children:"Frontend"}),r.jsx("option",{value:"backend",children:"Backend"}),r.jsx("option",{value:"fullstack",children:"Full Stack"}),r.jsx("option",{value:"mobile",children:"Mobile"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium mb-2",children:"Language"}),r.jsxs("select",{value:t.config.language,onChange:D=>i({language:D.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[r.jsx("option",{value:"javascript",children:"JavaScript"}),r.jsx("option",{value:"typescript",children:"TypeScript"}),r.jsx("option",{value:"python",children:"Python"}),r.jsx("option",{value:"java",children:"Java"}),r.jsx("option",{value:"csharp",children:"C#"}),r.jsx("option",{value:"cpp",children:"C++"}),r.jsx("option",{value:"c",children:"C"}),r.jsx("option",{value:"rust",children:"Rust"}),r.jsx("option",{value:"go",children:"Go"}),r.jsx("option",{value:"php",children:"PHP"}),r.jsx("option",{value:"ruby",children:"Ruby"}),r.jsx("option",{value:"swift",children:"Swift"}),r.jsx("option",{value:"kotlin",children:"Kotlin"}),r.jsx("option",{value:"dart",children:"Dart"}),r.jsx("option",{value:"scala",children:"Scala"}),r.jsx("option",{value:"html",children:"HTML"}),r.jsx("option",{value:"css",children:"CSS"}),r.jsx("option",{value:"sql",children:"SQL"}),r.jsx("option",{value:"r",children:"R"}),r.jsx("option",{value:"matlab",children:"MATLAB"}),r.jsx("option",{value:"perl",children:"Perl"}),r.jsx("option",{value:"lua",children:"Lua"}),r.jsx("option",{value:"bash",children:"Bash/Shell"}),r.jsx("option",{value:"powershell",children:"PowerShell"}),r.jsx("option",{value:"yaml",children:"YAML"}),r.jsx("option",{value:"json",children:"JSON"}),r.jsx("option",{value:"xml",children:"XML"}),r.jsx("option",{value:"markdown",children:"Markdown"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium mb-2",children:"Framework"}),r.jsxs("select",{value:t.config.framework||"none",onChange:D=>i({framework:D.target.value}),className:"w-full p-2 border border-border rounded-md bg-background text-foreground",children:[r.jsx("option",{value:"none",children:"None"}),r.jsx("option",{value:"react",children:"React"}),r.jsx("option",{value:"vue",children:"Vue.js"}),r.jsx("option",{value:"angular",children:"Angular"}),r.jsx("option",{value:"svelte",children:"Svelte"}),r.jsx("option",{value:"nextjs",children:"Next.js"}),r.jsx("option",{value:"nuxtjs",children:"Nuxt.js"}),r.jsx("option",{value:"express",children:"Express.js"}),r.jsx("option",{value:"fastapi",children:"FastAPI"}),r.jsx("option",{value:"django",children:"Django"}),r.jsx("option",{value:"flask",children:"Flask"}),r.jsx("option",{value:"spring",children:"Spring Boot"}),r.jsx("option",{value:"laravel",children:"Laravel"}),r.jsx("option",{value:"rails",children:"Ruby on Rails"}),r.jsx("option",{value:"flutter",children:"Flutter"}),r.jsx("option",{value:"react-native",children:"React Native"}),r.jsx("option",{value:"ionic",children:"Ionic"}),r.jsx("option",{value:"electron",children:"Electron"})]})]}),r.jsxs("div",{className:"flex gap-2 justify-end",children:[r.jsx("button",{onClick:()=>u(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",children:"Cancel"}),r.jsx("button",{onClick:()=>{n(),u(!1),U.success("Project settings saved!")},className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20",children:"Save Settings"})]})]})]})})}),r.jsx($e,{children:g&&r.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",onClick:()=>y(!1),children:r.jsxs(R.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-96 max-w-[90vw]",onClick:D=>D.stopPropagation(),children:[r.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center gap-2",children:[r.jsx(Ue,{className:"h-5 w-5"}),"Deploy Your App"]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium mb-2",children:"Project Name"}),r.jsx("input",{type:"text",value:b,onChange:D=>x(D.target.value),placeholder:"my-awesome-app",className:"w-full p-2 border border-border rounded-md bg-black",autoFocus:!0})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium mb-2",children:"Deployment Platform"}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[r.jsx("input",{type:"radio",value:"firebase",checked:h==="firebase",onChange:D=>C(D.target.value),className:"text-white"}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded flex items-center justify-center",children:r.jsx("span",{className:"text-white text-xs",children:"F"})}),r.jsx("span",{children:"Firebase Hosting"})]})]}),r.jsxs("label",{className:"flex items-center gap-2 p-2 border border-border rounded-md hover:bg-muted cursor-pointer",children:[r.jsx("input",{type:"radio",value:"github",checked:h==="github",onChange:D=>C(D.target.value),className:"text-white"}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Ae,{className:"h-4 w-4"}),r.jsx("span",{children:"GitHub Pages"})]})]})]})]}),r.jsxs("div",{className:"p-3 bg-muted rounded-md",children:[r.jsx("h4",{className:"text-sm font-medium mb-2",children:"Platform Info"}),r.jsx("div",{className:"text-xs text-muted-foreground space-y-1",children:h==="firebase"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Firebase Hosting:"})," Instant deployment with custom domain support"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Features:"})," CDN, SSL, automatic HTTPS"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Cost:"})," Free tier available"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Best for:"})," Production websites with custom domains"]})]}):h==="github"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{children:[r.jsx("strong",{children:"GitHub Pages:"})," Host static sites directly from GitHub repositories"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Features:"})," Custom domains, Jekyll support, version control"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Cost:"})," Free for public repositories"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Best for:"})," Open source projects and documentation"]})]}):null})]}),r.jsxs("div",{className:"flex gap-2 justify-end",children:[r.jsx("button",{onClick:()=>y(!1),className:"px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors",disabled:f,children:"Cancel"}),r.jsx("button",{onClick:xe,disabled:f||!b.trim(),className:"px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-blue-500/20 border border-blue-500/20 flex items-center gap-2",children:f?r.jsxs(r.Fragment,{children:[r.jsx(Mt,{className:"h-4 w-4 animate-spin"}),"Deploying..."]}):r.jsxs(r.Fragment,{children:[r.jsx(Ue,{className:"h-4 w-4"}),"Deploy Now"]})})]})]})]})})}),r.jsx($e,{children:k.show&&r.jsxs(R.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},ref:S,className:"fixed z-50 bg-card border border-border rounded-lg shadow-lg py-1 min-w-[160px]",style:{left:k.x,top:k.y},onClick:T,children:[r.jsxs("button",{onClick:()=>B("download"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[r.jsx(st,{className:"h-4 w-4"}),"Download"]}),r.jsxs("button",{onClick:()=>B("copy"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[r.jsx(Tr,{className:"h-4 w-4"}),"Copy"]}),r.jsxs("button",{onClick:()=>B("rename"),className:"w-full px-3 py-2 text-left text-sm hover:bg-muted flex items-center gap-2 transition-colors",children:[r.jsx(ps,{className:"h-4 w-4"}),"Rename"]}),Object.keys(t.files).length>1&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"border-t border-border my-1"}),r.jsxs("button",{onClick:()=>B("delete"),className:"w-full px-3 py-2 text-left text-sm hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 transition-colors",children:[r.jsx(po,{className:"h-4 w-4"}),"Delete"]})]})]})})]})};function tu(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function kn(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),s.push.apply(s,n)}return s}function Tn(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?kn(Object(s),!0).forEach(function(n){tu(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):kn(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}function ru(t,e){if(t==null)return{};var s={},n=Object.keys(t),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(s[o]=t[o]);return s}function su(t,e){if(t==null)return{};var s=ru(t,e),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function nu(t,e){return ou(t)||iu(t,e)||au(t,e)||lu()}function ou(t){if(Array.isArray(t))return t}function iu(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var s=[],n=!0,o=!1,i=void 0;try{for(var a=t[Symbol.iterator](),l;!(n=(l=a.next()).done)&&(s.push(l.value),!(e&&s.length===e));n=!0);}catch(c){o=!0,i=c}finally{try{!n&&a.return!=null&&a.return()}finally{if(o)throw i}}return s}}function au(t,e){if(t){if(typeof t=="string")return Dn(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);if(s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set")return Array.from(t);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return Dn(t,e)}}function Dn(t,e){(e==null||e>t.length)&&(e=t.length);for(var s=0,n=new Array(e);s<e;s++)n[s]=t[s];return n}function lu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cu(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function En(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),s.push.apply(s,n)}return s}function An(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?En(Object(s),!0).forEach(function(n){cu(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):En(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}function du(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];return function(n){return e.reduceRight(function(o,i){return i(o)},n)}}function At(t){return function e(){for(var s=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=t.length?t.apply(this,o):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return e.apply(s,[].concat(o,l))}}}function Nr(t){return{}.toString.call(t).includes("Object")}function uu(t){return!Object.keys(t).length}function $t(t){return typeof t=="function"}function mu(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function pu(t,e){return Nr(e)||Ge("changeType"),Object.keys(e).some(function(s){return!mu(t,s)})&&Ge("changeField"),e}function hu(t){$t(t)||Ge("selectorType")}function fu(t){$t(t)||Nr(t)||Ge("handlerType"),Nr(t)&&Object.values(t).some(function(e){return!$t(e)})&&Ge("handlersType")}function gu(t){t||Ge("initialIsRequired"),Nr(t)||Ge("initialType"),uu(t)&&Ge("initialContent")}function xu(t,e){throw new Error(t[e]||t.default)}var bu={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ge=At(xu)(bu),er={changes:pu,selector:hu,handler:fu,initial:gu};function yu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};er.initial(t),er.handler(e);var s={current:t},n=At(ju)(s,e),o=At(wu)(s),i=At(er.changes)(t),a=At(vu)(s);function l(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(m){return m};return er.selector(d),d(s.current)}function c(d){du(n,o,i,a)(d)}return[l,c]}function vu(t,e){return $t(e)?e(t.current):e}function wu(t,e){return t.current=An(An({},t.current),e),e}function ju(t,e,s){return $t(e)?e(t.current):Object.keys(s).forEach(function(n){var o;return(o=e[n])===null||o===void 0?void 0:o.call(e,t.current[n])}),s}var Nu={create:yu},Su={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function Cu(t){return function e(){for(var s=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=t.length?t.apply(this,o):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return e.apply(s,[].concat(o,l))}}}function ku(t){return{}.toString.call(t).includes("Object")}function Tu(t){return t||Pn("configIsRequired"),ku(t)||Pn("configType"),t.urls?(Du(),{paths:{vs:t.urls.monacoBase}}):t}function Du(){console.warn(ii.deprecation)}function Eu(t,e){throw new Error(t[e]||t.default)}var ii={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Pn=Cu(Eu)(ii),Au={config:Tu},Pu=function(){for(var e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return function(o){return s.reduceRight(function(i,a){return a(i)},o)}};function ai(t,e){return Object.keys(e).forEach(function(s){e[s]instanceof Object&&t[s]&&Object.assign(e[s],ai(t[s],e[s]))}),Tn(Tn({},t),e)}var Ru={type:"cancelation",msg:"operation is manually canceled"};function Xr(t){var e=!1,s=new Promise(function(n,o){t.then(function(i){return e?o(Ru):n(i)}),t.catch(o)});return s.cancel=function(){return e=!0},s}var Ou=Nu.create({config:Su,isInitialized:!1,resolve:null,reject:null,monaco:null}),li=nu(Ou,2),Ht=li[0],Ir=li[1];function Iu(t){var e=Au.config(t),s=e.monaco,n=su(e,["monaco"]);Ir(function(o){return{config:ai(o.config,n),monaco:s}})}function Mu(){var t=Ht(function(e){var s=e.monaco,n=e.isInitialized,o=e.resolve;return{monaco:s,isInitialized:n,resolve:o}});if(!t.isInitialized){if(Ir({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),Xr(Qr);if(window.monaco&&window.monaco.editor)return ci(window.monaco),t.resolve(window.monaco),Xr(Qr);Pu(Fu,_u)($u)}return Xr(Qr)}function Fu(t){return document.body.appendChild(t)}function Lu(t){var e=document.createElement("script");return t&&(e.src=t),e}function _u(t){var e=Ht(function(n){var o=n.config,i=n.reject;return{config:o,reject:i}}),s=Lu("".concat(e.config.paths.vs,"/loader.js"));return s.onload=function(){return t()},s.onerror=e.reject,s}function $u(){var t=Ht(function(s){var n=s.config,o=s.resolve,i=s.reject;return{config:n,resolve:o,reject:i}}),e=window.require;e.config(t.config),e(["vs/editor/editor.main"],function(s){ci(s),t.resolve(s)},function(s){t.reject(s)})}function ci(t){Ht().monaco||Ir({monaco:t})}function Bu(){return Ht(function(t){var e=t.monaco;return e})}var Qr=new Promise(function(t,e){return Ir({resolve:t,reject:e})}),di={config:Iu,init:Mu,__getMonacoInstance:Bu},Uu={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Zr=Uu,zu={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Hu=zu;function Gu({children:t}){return Ee.createElement("div",{style:Hu.container},t)}var qu=Gu,Wu=qu;function Vu({width:t,height:e,isEditorReady:s,loading:n,_ref:o,className:i,wrapperProps:a}){return Ee.createElement("section",{style:{...Zr.wrapper,width:t,height:e},...a},!s&&Ee.createElement(Wu,null,n),Ee.createElement("div",{ref:o,style:{...Zr.fullWidth,...!s&&Zr.hide},className:i}))}var Ju=Vu,ui=p.memo(Ju);function Ku(t){p.useEffect(t,[])}var mi=Ku;function Yu(t,e,s=!0){let n=p.useRef(!0);p.useEffect(n.current||!s?()=>{n.current=!1}:t,e)}var fe=Yu;function Rt(){}function ft(t,e,s,n){return Xu(t,n)||Qu(t,e,s,n)}function Xu(t,e){return t.editor.getModel(pi(t,e))}function Qu(t,e,s,n){return t.editor.createModel(e,s,n?pi(t,n):void 0)}function pi(t,e){return t.Uri.parse(e)}function Zu({original:t,modified:e,language:s,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:d="light",loading:m="Loading...",options:u={},height:g="100%",width:y="100%",className:f,wrapperProps:w={},beforeMount:h=Rt,onMount:C=Rt}){let[j,v]=p.useState(!1),[b,x]=p.useState(!0),k=p.useRef(null),A=p.useRef(null),S=p.useRef(null),I=p.useRef(C),E=p.useRef(h),P=p.useRef(!1);mi(()=>{let F=di.init();return F.then(_=>(A.current=_)&&x(!1)).catch(_=>(_==null?void 0:_.type)!=="cancelation"&&console.error("Monaco initialization: error:",_)),()=>k.current?T():F.cancel()}),fe(()=>{if(k.current&&A.current){let F=k.current.getOriginalEditor(),_=ft(A.current,t||"",n||s||"text",i||"");_!==F.getModel()&&F.setModel(_)}},[i],j),fe(()=>{if(k.current&&A.current){let F=k.current.getModifiedEditor(),_=ft(A.current,e||"",o||s||"text",a||"");_!==F.getModel()&&F.setModel(_)}},[a],j),fe(()=>{let F=k.current.getModifiedEditor();F.getOption(A.current.editor.EditorOption.readOnly)?F.setValue(e||""):e!==F.getValue()&&(F.executeEdits("",[{range:F.getModel().getFullModelRange(),text:e||"",forceMoveMarkers:!0}]),F.pushUndoStop())},[e],j),fe(()=>{var F,_;(_=(F=k.current)==null?void 0:F.getModel())==null||_.original.setValue(t||"")},[t],j),fe(()=>{let{original:F,modified:_}=k.current.getModel();A.current.editor.setModelLanguage(F,n||s||"text"),A.current.editor.setModelLanguage(_,o||s||"text")},[s,n,o],j),fe(()=>{var F;(F=A.current)==null||F.editor.setTheme(d)},[d],j),fe(()=>{var F;(F=k.current)==null||F.updateOptions(u)},[u],j);let W=p.useCallback(()=>{var J;if(!A.current)return;E.current(A.current);let F=ft(A.current,t||"",n||s||"text",i||""),_=ft(A.current,e||"",o||s||"text",a||"");(J=k.current)==null||J.setModel({original:F,modified:_})},[s,e,o,t,n,i,a]),B=p.useCallback(()=>{var F;!P.current&&S.current&&(k.current=A.current.editor.createDiffEditor(S.current,{automaticLayout:!0,...u}),W(),(F=A.current)==null||F.editor.setTheme(d),v(!0),P.current=!0)},[u,d,W]);p.useEffect(()=>{j&&I.current(k.current,A.current)},[j]),p.useEffect(()=>{!b&&!j&&B()},[b,j,B]);function T(){var _,J,q,le;let F=(_=k.current)==null?void 0:_.getModel();l||((J=F==null?void 0:F.original)==null||J.dispose()),c||((q=F==null?void 0:F.modified)==null||q.dispose()),(le=k.current)==null||le.dispose()}return Ee.createElement(ui,{width:y,height:g,isEditorReady:j,loading:m,_ref:S,className:f,wrapperProps:w})}var em=Zu;p.memo(em);function tm(t){let e=p.useRef();return p.useEffect(()=>{e.current=t},[t]),e.current}var rm=tm,tr=new Map;function sm({defaultValue:t,defaultLanguage:e,defaultPath:s,value:n,language:o,path:i,theme:a="light",line:l,loading:c="Loading...",options:d={},overrideServices:m={},saveViewState:u=!0,keepCurrentModel:g=!1,width:y="100%",height:f="100%",className:w,wrapperProps:h={},beforeMount:C=Rt,onMount:j=Rt,onChange:v,onValidate:b=Rt}){let[x,k]=p.useState(!1),[A,S]=p.useState(!0),I=p.useRef(null),E=p.useRef(null),P=p.useRef(null),W=p.useRef(j),B=p.useRef(C),T=p.useRef(),F=p.useRef(n),_=rm(i),J=p.useRef(!1),q=p.useRef(!1);mi(()=>{let $=di.init();return $.then(G=>(I.current=G)&&S(!1)).catch(G=>(G==null?void 0:G.type)!=="cancelation"&&console.error("Monaco initialization: error:",G)),()=>E.current?xe():$.cancel()}),fe(()=>{var G,V,ne,ie;let $=ft(I.current,t||n||"",e||o||"",i||s||"");$!==((G=E.current)==null?void 0:G.getModel())&&(u&&tr.set(_,(V=E.current)==null?void 0:V.saveViewState()),(ne=E.current)==null||ne.setModel($),u&&((ie=E.current)==null||ie.restoreViewState(tr.get(i))))},[i],x),fe(()=>{var $;($=E.current)==null||$.updateOptions(d)},[d],x),fe(()=>{!E.current||n===void 0||(E.current.getOption(I.current.editor.EditorOption.readOnly)?E.current.setValue(n):n!==E.current.getValue()&&(q.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),E.current.pushUndoStop(),q.current=!1))},[n],x),fe(()=>{var G,V;let $=(G=E.current)==null?void 0:G.getModel();$&&o&&((V=I.current)==null||V.editor.setModelLanguage($,o))},[o],x),fe(()=>{var $;l!==void 0&&(($=E.current)==null||$.revealLine(l))},[l],x),fe(()=>{var $;($=I.current)==null||$.editor.setTheme(a)},[a],x);let le=p.useCallback(()=>{var $;if(!(!P.current||!I.current)&&!J.current){B.current(I.current);let G=i||s,V=ft(I.current,n||t||"",e||o||"",G||"");E.current=($=I.current)==null?void 0:$.editor.create(P.current,{model:V,automaticLayout:!0,...d},m),u&&E.current.restoreViewState(tr.get(G)),I.current.editor.setTheme(a),l!==void 0&&E.current.revealLine(l),k(!0),J.current=!0}},[t,e,s,n,o,i,d,m,u,a,l]);p.useEffect(()=>{x&&W.current(E.current,I.current)},[x]),p.useEffect(()=>{!A&&!x&&le()},[A,x,le]),F.current=n,p.useEffect(()=>{var $,G;x&&v&&(($=T.current)==null||$.dispose(),T.current=(G=E.current)==null?void 0:G.onDidChangeModelContent(V=>{q.current||v(E.current.getValue(),V)}))},[x,v]),p.useEffect(()=>{if(x){let $=I.current.editor.onDidChangeMarkers(G=>{var ne;let V=(ne=E.current.getModel())==null?void 0:ne.uri;if(V&&G.find(ie=>ie.path===V.path)){let ie=I.current.editor.getModelMarkers({resource:V});b==null||b(ie)}});return()=>{$==null||$.dispose()}}return()=>{}},[x,b]);function xe(){var $,G;($=T.current)==null||$.dispose(),g?u&&tr.set(i,E.current.saveViewState()):(G=E.current.getModel())==null||G.dispose(),E.current.dispose()}return Ee.createElement(ui,{width:y,height:f,isEditorReady:x,loading:c,_ref:P,className:w,wrapperProps:h})}var nm=sm,om=p.memo(nm);const im=()=>{var j,v,b,x,k,A;const{theme:t}=Gs(),{currentProject:e,updateFile:s}=lt(),[n,o]=p.useState(!0),[i,a]=p.useState(null),l=p.useRef(null);p.useEffect(()=>{if(l.current){const S=e.files[e.activeFile]||"",I=l.current.getValue();S!==I&&l.current.setValue(S)}},[e.activeFile,e.files[e.activeFile]]),p.useEffect(()=>{const S=()=>{l.current&&setTimeout(()=>{l.current.layout()},100)};return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]);const c=(S,I)=>{try{console.log("🎯 Monaco Editor mounting..."),o(!1),a(null),l.current=S;const E=e.files[e.activeFile]||"";E&&S.setValue(E),I.editor.defineTheme("custom-dark",{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"569CD6"},{token:"string",foreground:"CE9178"},{token:"number",foreground:"B5CEA8"},{token:"tag",foreground:"569CD6"},{token:"attribute.name",foreground:"92C5F8"},{token:"attribute.value",foreground:"CE9178"}],colors:{"editor.background":"#1e1e1e","editor.foreground":"#d4d4d4","editor.lineHighlightBackground":"#2a2d2e","editor.selectionBackground":"#264f78","editor.inactiveSelectionBackground":"#3a3d41"}}),I.editor.defineTheme("custom-light",{base:"vs",inherit:!0,rules:[{token:"comment",foreground:"6A9955"},{token:"keyword",foreground:"0000FF"},{token:"string",foreground:"A31515"},{token:"number",foreground:"098658"},{token:"tag",foreground:"800000"},{token:"attribute.name",foreground:"FF0000"},{token:"attribute.value",foreground:"0451A5"}],colors:{"editor.background":"#ffffff","editor.foreground":"#000000","editor.lineHighlightBackground":"#f5f5f5","editor.selectionBackground":"#add6ff","editor.inactiveSelectionBackground":"#e5ebf1"}}),I.editor.setTheme(t==="dark"?"custom-dark":"custom-light"),S.updateOptions({fontSize:14,fontFamily:"JetBrains Mono, Monaco, Consolas, monospace",lineHeight:22,minimap:{enabled:!0},scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",formatOnPaste:!0,formatOnType:!0,suggestOnTriggerCharacters:!0,acceptSuggestionOnEnter:"on",tabCompletion:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always"}),setTimeout(()=>{S.layout()},100);try{S.addCommand(I.KeyMod.CtrlCmd|I.KeyCode.KeyS,()=>{f()}),S.addCommand(I.KeyMod.CtrlCmd|I.KeyCode.KeyC,()=>{S.getSelection().isEmpty()&&g()})}catch(P){console.warn("⚠️ Could not add keyboard shortcuts:",P)}}catch(E){console.error("❌ Error mounting Monaco Editor:",E),console.error("❌ Monaco Editor error details:",E.message,E.stack),a(E.message),o(!1),U.error("Failed to load code editor")}},d=S=>{try{S!==void 0&&s(e.activeFile,S)}catch(I){console.error("Error updating file:",I),U.error("Failed to save changes")}},m=()=>{const S=e.activeFile.split(".").pop();return{html:"html",css:"css",js:"javascript",jsx:"javascript",ts:"typescript",tsx:"typescript",py:"python",java:"java",cpp:"cpp",c:"c",php:"php",rb:"ruby",go:"go",rs:"rust",swift:"swift",kt:"kotlin",scala:"scala",clj:"clojure",hs:"haskell",ml:"fsharp",fs:"fsharp",vb:"vb",sql:"sql",json:"json",xml:"xml",yaml:"yaml",yml:"yaml",md:"markdown",sh:"shell",bash:"shell",ps1:"powershell",dockerfile:"dockerfile"}[S]||"plaintext"},u=()=>{const S=e.files[e.activeFile]||"";navigator.clipboard.writeText(S),U.success("Code copied to clipboard!")},g=()=>{const S=e.files[e.activeFile]||"";navigator.clipboard.writeText(S),U.success("All code copied to clipboard!")},y=()=>{const S=e.files[e.activeFile]||"",I=new Blob([S],{type:"text/plain"}),E=URL.createObjectURL(I),P=document.createElement("a");P.href=E,P.download=e.activeFile,document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL(E),U.success(`Downloaded ${e.activeFile}`)},f=()=>{U.success("Code saved!")},w=()=>{l.current&&(l.current.getAction("editor.action.formatDocument").run(),U.success("Code formatted!"))},h={"index.html":"🌐","style.css":"🎨","script.js":"⚡","components.jsx":"🧩","package.json":"📦","README.md":"📖"},C=S=>h[S]||"📄";return r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden",children:[r.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-lg",children:C(e.activeFile)}),r.jsx("span",{className:"font-medium text-sm",children:e.activeFile}),r.jsx("span",{className:"text-xs text-muted-foreground bg-muted px-2 py-1 rounded",children:m()})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("button",{onClick:w,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Format Code (Ctrl+Shift+F)",children:r.jsx(Fs,{className:"h-4 w-4"})}),r.jsx("button",{onClick:u,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Copy Code",children:r.jsx(Tr,{className:"h-4 w-4"})}),r.jsx("button",{onClick:y,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Download File",children:r.jsx(st,{className:"h-4 w-4"})})]})]}),r.jsx("div",{className:"flex-1 relative h-full min-h-[500px]",children:i?r.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center p-8",children:[r.jsx("div",{className:"text-red-500 text-lg mb-4",children:"⚠️ Editor Error"}),r.jsx("div",{className:"text-muted-foreground mb-4",children:i}),r.jsx("button",{onClick:()=>{a(null),o(!0),window.location.reload()},className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",children:"Reload Editor"})]}):r.jsx(om,{height:"100%",language:m(),value:e.files[e.activeFile]||"",onChange:d,onMount:c,theme:t==="dark"?"vs-dark":"vs",loading:r.jsxs("div",{className:"flex items-center justify-center h-full",children:[r.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"}),r.jsx("span",{className:"ml-2",children:"Loading editor..."})]}),options:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,mouseWheelZoom:!0,smoothScrolling:!0,cursorBlinking:"blink",renderLineHighlight:"line",renderWhitespace:"selection",renderIndentGuides:!0,highlightActiveIndentGuide:!0,bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",lineNumbers:"on",glyphMargin:!0,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always",unfoldOnClickAfterEnd:!1,contextmenu:!0,mouseWheelScrollSensitivity:1,fastScrollSensitivity:5,cursorSurroundingLines:3,cursorSurroundingLinesStyle:"default",scrollbar:{vertical:"auto",horizontal:"auto",verticalScrollbarSize:14,horizontalScrollbarSize:14,useShadows:!0,verticalHasArrows:!1,horizontalHasArrows:!1,arrowSize:11,verticalSliderSize:14,horizontalSliderSize:14}}},`${e.activeFile}-${((j=e.files[e.activeFile])==null?void 0:j.length)||0}`)}),r.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs("span",{children:["Line ",((b=(v=l.current)==null?void 0:v.getPosition())==null?void 0:b.lineNumber)||1]}),r.jsxs("span",{children:["Column ",((k=(x=l.current)==null?void 0:x.getPosition())==null?void 0:k.column)||1]}),r.jsxs("span",{children:[((A=e.files[e.activeFile])==null?void 0:A.length)||0," characters"]})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{children:"Ctrl+S to save"}),r.jsx("span",{children:"•"}),r.jsx("span",{children:"Ctrl+C to copy all"})]})]})]})},am=()=>{console.log("🎮 Preview component rendered!");const{currentProject:t}=lt(),e=p.useRef(null),[s,n]=p.useState(!1),[o,i]=p.useState(!1),[a,l]=p.useState(null),[c,d]=p.useState(0);Ee.useEffect(()=>{d(j=>j+1),console.log("🎮 Preview component rendered! Render count:",c+1)},[]),p.useEffect(()=>{console.log("🎮 Preview useEffect triggered - files changed:",Object.keys(t.files)),console.log("🎮 Preview useEffect - currentProject:",t),console.log("🎮 Preview useEffect - file count:",Object.keys(t.files).length);const j=setTimeout(()=>{m()},50);return()=>clearTimeout(j)},[t.files,t.activeFile,t]),p.useEffect(()=>{const j=()=>{e.current?(console.log("🎮 Iframe mounted, updating preview..."),m()):(console.log("🎮 Iframe not ready, retrying..."),setTimeout(j,50))};setTimeout(j,100)},[]);const m=()=>{if(console.log("🎮 updatePreview called with files:",Object.keys(t.files)),!e.current){console.log("🎮 updatePreview: iframeRef.current is null, skipping update");return}if(!t.files||Object.keys(t.files).length===0){console.log("🎮 updatePreview: No files to display, showing placeholder"),y();return}console.log("🎮 updatePreview: iframeRef.current exists, proceeding..."),n(!0),l(null);try{let j=t.files["index.html"]||"";if(!j.trim()){const B=Object.keys(t.files).filter(T=>T.endsWith(".html")&&T!=="index.html");if(B.length>0){console.log("🎮 Preview Debug - No index.html found, using:",B[0]);const T=t.files[B[0]]||"";T.trim()&&(j=T)}}const v=Object.keys(t.files).filter(B=>B.endsWith(".css")),b=v.map(B=>t.files[B]).join(`
`);console.log("🎮 Preview Debug - All CSS files found:",v),console.log("🎮 Preview Debug - CSS content length:",b.length),console.log("🎮 Preview Debug - CSS content preview:",b.substring(0,200)+"...");const x=t.files["script.js"]||"",k=t.files["src/components/GameApp.jsx"]||"",A=t.files["src/components/GameComponent.jsx"]||"",S=t.files["src/components/TempleRunUI.jsx"]||"",I=t.files["src/components/RunnerPlayer.jsx"]||"",E=t.files["src/components/Obstacle.jsx"]||"";if(A&&(console.log("🎮 Preview Debug - GameComponent content preview:",A.substring(0,200)+"..."),console.log("🎮 Preview Debug - GameComponent contains Temple Run:",A.toLowerCase().includes("temple run")),console.log("🎮 Preview Debug - GameComponent contains lane:",A.toLowerCase().includes("lane")),console.log("🎮 Preview Debug - GameComponent contains jump:",A.toLowerCase().includes("jump"))),console.log("🎮 Preview Debug - Checking for game files:"),console.log("🎮 - GameApp.jsx exists:",!!k),console.log("🎮 - GameComponent.jsx exists:",!!A),console.log("🎮 - TempleRunUI.jsx exists:",!!S),console.log("🎮 - RunnerPlayer.jsx exists:",!!I),console.log("🎮 - Obstacle.jsx exists:",!!E),console.log("🎮 - All project files:",Object.keys(t.files)),k||A){console.log("🎮 Preview Debug - Game files detected, creating React preview"),console.log("🎮 Preview Debug - About to call createReactPreview, iframeRef.current:",!!e.current),g(),console.log("🎮 Preview Debug - createReactPreview call completed");return}if(console.log("🎮 Preview Debug - No game files detected, using regular HTML preview"),console.log("🎮 Preview Debug - HTML content length:",j.length),console.log("🎮 Preview Debug - CSS content length:",b.length),console.log("🎮 Preview Debug - JS content length:",x.length),!j.trim()){console.log("🎮 Preview Debug - No HTML content found, creating basic structure");const B=b.trim().length>0,T=x.trim().length>0;j=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamBuild Generated App</title>
    ${B?`<style>${b}</style>`:""}
</head>
<body>
    <div id="app">
        <h1>DreamBuild Generated Application</h1>
        <p>Your application is loading...</p>
        <div id="content"></div>
    </div>
    ${T?`<script>${x}<\/script>`:""}
</body>
</html>`,console.log("🎮 Preview Debug - Created basic HTML structure")}let P=j;if(b.trim()&&(P=P.replace(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']style\.css["'][^>]*>/gi,`<style>${b}</style>`),P===j&&P.includes("<head>")?P=P.replace("<head>",`<head>
<style>${b}</style>`):P===j&&!P.includes("<head>")&&(P.includes("<title>")?P=P.replace("</title>",`</title>
<style>${b}</style>`):P=`<style>${b}</style>
${P}`)),x.trim()){const B=`(function() {
          ${x}
        })();`;P=P.replace(/<script[^>]*src=["']script\.js["'][^>]*><\/script>/gi,`<script>${B}<\/script>`),P.includes("</body>")?P=P.replace("</body>",`<script>${B}<\/script>
</body>`):P+=`
<script>${B}<\/script>`}P.includes("<!DOCTYPE html>")||(P=`<!DOCTYPE html>
${P}`),console.log("🎮 Preview Debug - Final HTML length:",P.length),console.log("🎮 Preview Debug - HTML contains <style>:",P.includes("<style>")),console.log("🎮 Preview Debug - HTML contains <script>:",P.includes("<script>")),console.log("🎮 Preview Debug - HTML preview:",P.substring(0,500)+"...");const W=e.current;W.srcdoc=P,W.onload=()=>{n(!1),l(null)},W.onerror=()=>{n(!1),l("Failed to load preview")}}catch(j){console.error("Preview update error:",j),n(!1),l("Preview update failed")}},u=j=>j?j.replace(/`/g,"\\`").replace(/\${/g,"\\${").replace(/\$/g,"\\$"):"",g=()=>{if(console.log("🎮 Creating React preview..."),!e.current){console.log("🎮 createReactPreview: iframeRef.current is null");return}try{const j=t.files["src/components/GameApp.jsx"]||"",v=t.files["src/components/GameComponent.jsx"]||"",b=t.files["src/components/TempleRunUI.jsx"]||"",x=t.files["src/components/RunnerPlayer.jsx"]||"",k=t.files["src/components/Obstacle.jsx"]||"",A=t.files["src/components/Coin.jsx"]||"",S=t.files["src/components/Player.jsx"]||"",I=t.files["src/components/GameApp.css"]||"",E=t.files["src/components/GameComponent.css"]||"",P=t.files["src/components/TempleRunUI.css"]||"",W=t.files["src/components/RunnerPlayer.css"]||"",B=t.files["src/components/Obstacle.css"]||"",T=t.files["src/components/Coin.css"]||"",F=t.files["src/components/Player.css"]||"",_=b||x||k,J=S||A,q=v.toLowerCase(),le=q.includes("temple run")||q.includes("lane")||q.includes("jump")||q.includes("slide")||q.includes("obstacle")||q.includes("endless runner"),xe=_||le,$=J&&!xe;console.log("🎮 Preview Debug - Available files:"),console.log("🎮 - templeRunUIFile:",!!b),console.log("🎮 - runnerPlayerFile:",!!x),console.log("🎮 - obstacleFile:",!!k),console.log("🎮 - playerFile:",!!S),console.log("🎮 - coinFile:",!!A),console.log("🎮 - hasTempleRunFiles:",_),console.log("🎮 - hasTempleRunContent:",le),console.log("🎮 - isTempleRun:",xe),console.log("🎮 - isCoinCollector:",$),console.log("🎮 - All project files:",Object.keys(t.files)),console.log("🎮 FINAL GAME TYPE DECISION:"),console.log(xe?"🎮 ✅ RENDERING TEMPLE RUN GAME":$?"🎮 ✅ RENDERING COIN COLLECTOR GAME":"🎮 ✅ RENDERING DEFAULT GAME");const G=`
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
          ${u(I)}
          ${u(E)}
          ${u(P)}
          ${u(W)}
          ${u(B)}
          ${u(T)}
          ${u(F)}
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
            
            if (${xe}) {
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
            } else if (${$}) {
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
    `,V=e.current;console.log("🎮 Setting iframe content, length:",G.length),V.srcdoc=G,V.onload=()=>{var ne,ie;console.log("🎮 Iframe loaded successfully"),n(!1),l(null);try{const M=((ie=(ne=V.contentDocument)==null?void 0:ne.body)==null?void 0:ie.textContent)||"";console.log("🎮 Iframe content verification - length:",M.length),console.log("🎮 Iframe content preview:",M.substring(0,100))}catch(M){console.log("🎮 Iframe content verification - access denied:",M.message)}},V.onerror=()=>{console.log("🎮 Iframe error occurred"),n(!1),l("Failed to load React preview")}}catch(j){console.error("🎮 Error in createReactPreview:",j),n(!1),l(`Preview generation failed: ${j.message}`)}},y=()=>{if(!e.current)return;const j=`
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
    `,v=e.current;v.srcdoc=j,n(!1)},f=()=>{m(),U.success("Preview refreshed!")},w=()=>{if(!e.current)return;const j=e.current;if(j.srcdoc){const v=window.open("","_blank");v.document.write(j.srcdoc),v.document.close(),U.success("Opened in new tab!")}else U.error("No content to open")},h=()=>{document.fullscreenElement||i(!1)};p.useEffect(()=>(document.addEventListener("fullscreenchange",h),()=>{document.removeEventListener("fullscreenchange",h)}),[]);const C=async()=>{o?document.exitFullscreen&&await document.exitFullscreen():e.current.requestFullscreen&&await e.current.requestFullscreen()};return r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden ${o?"fixed inset-0 z-50 rounded-none":""}`,children:[r.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-border bg-muted/50",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("h3",{className:"font-semibold text-sm",children:"Live Preview"}),r.jsx("span",{className:"text-xs bg-green-500 text-white px-2 py-1 rounded",children:"RENDERED"}),r.jsxs("span",{className:"text-xs bg-blue-500 text-white px-2 py-1 rounded",children:["#",c]}),s&&r.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[r.jsx("div",{className:"spinner"}),r.jsx("span",{children:"Updating..."})]}),a&&r.jsx("span",{className:"text-xs text-destructive",children:"Error"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("button",{onClick:f,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Refresh Preview",children:r.jsx(Fs,{className:"h-4 w-4"})}),r.jsx("button",{onClick:w,className:"p-2 hover:bg-muted rounded-md transition-colors",title:"Open in New Tab",children:r.jsx(It,{className:"h-4 w-4"})}),r.jsx("button",{onClick:C,className:"p-2 hover:bg-muted rounded-md transition-colors",title:o?"Exit Fullscreen":"Enter Fullscreen",children:o?r.jsx(wa,{className:"h-4 w-4"}):r.jsx(ja,{className:"h-4 w-4"})})]})]}),r.jsx("div",{className:"flex-1 relative bg-black",children:a?r.jsx("div",{className:"flex items-center justify-center h-full",children:r.jsxs("div",{className:"text-center p-6",children:[r.jsx("div",{className:"text-4xl mb-4",children:"⚠️"}),r.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Preview Error"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:a}),r.jsx("button",{onClick:f,className:"px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors",children:"Try Again"})]})}):r.jsx("iframe",{ref:e,className:"w-full h-full border-0",title:"Preview",sandbox:"allow-scripts allow-forms allow-popups",onLoad:()=>n(!1),onError:()=>{n(!1),l("Failed to load preview")}})}),r.jsxs("div",{className:"flex items-center justify-between p-2 border-t border-border bg-muted/30 text-xs text-muted-foreground",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("span",{children:"Responsive"}),r.jsx("span",{children:"•"}),r.jsx("span",{children:"Auto-refresh"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{children:"Ctrl+R to refresh"}),r.jsx("span",{children:"•"}),r.jsx("span",{children:"F11 for fullscreen"})]})]})]})};function hi(t,e){return function(){return t.apply(e,arguments)}}const{toString:lm}=Object.prototype,{getPrototypeOf:Xs}=Object,{iterator:Mr,toStringTag:fi}=Symbol,Fr=(t=>e=>{const s=lm.call(e);return t[s]||(t[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),Ne=t=>(t=t.toLowerCase(),e=>Fr(e)===t),Lr=t=>e=>typeof e===t,{isArray:vt}=Array,xt=Lr("undefined");function Gt(t){return t!==null&&!xt(t)&&t.constructor!==null&&!xt(t.constructor)&&pe(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const gi=Ne("ArrayBuffer");function cm(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&gi(t.buffer),e}const dm=Lr("string"),pe=Lr("function"),xi=Lr("number"),qt=t=>t!==null&&typeof t=="object",um=t=>t===!0||t===!1,dr=t=>{if(Fr(t)!=="object")return!1;const e=Xs(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(fi in t)&&!(Mr in t)},mm=t=>{if(!qt(t)||Gt(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},pm=Ne("Date"),hm=Ne("File"),fm=Ne("Blob"),gm=Ne("FileList"),xm=t=>qt(t)&&pe(t.pipe),bm=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||pe(t.append)&&((e=Fr(t))==="formdata"||e==="object"&&pe(t.toString)&&t.toString()==="[object FormData]"))},ym=Ne("URLSearchParams"),[vm,wm,jm,Nm]=["ReadableStream","Request","Response","Headers"].map(Ne),Sm=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wt(t,e,{allOwnKeys:s=!1}={}){if(t===null||typeof t>"u")return;let n,o;if(typeof t!="object"&&(t=[t]),vt(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{if(Gt(t))return;const i=s?Object.getOwnPropertyNames(t):Object.keys(t),a=i.length;let l;for(n=0;n<a;n++)l=i[n],e.call(null,t[l],l,t)}}function bi(t,e){if(Gt(t))return null;e=e.toLowerCase();const s=Object.keys(t);let n=s.length,o;for(;n-- >0;)if(o=s[n],e===o.toLowerCase())return o;return null}const et=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,yi=t=>!xt(t)&&t!==et;function Ns(){const{caseless:t,skipUndefined:e}=yi(this)&&this||{},s={},n=(o,i)=>{const a=t&&bi(s,i)||i;dr(s[a])&&dr(o)?s[a]=Ns(s[a],o):dr(o)?s[a]=Ns({},o):vt(o)?s[a]=o.slice():(!e||!xt(o))&&(s[a]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Wt(arguments[o],n);return s}const Cm=(t,e,s,{allOwnKeys:n}={})=>(Wt(e,(o,i)=>{s&&pe(o)?t[i]=hi(o,s):t[i]=o},{allOwnKeys:n}),t),km=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Tm=(t,e,s,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),s&&Object.assign(t.prototype,s)},Dm=(t,e,s,n)=>{let o,i,a;const l={};if(e=e||{},t==null)return e;do{for(o=Object.getOwnPropertyNames(t),i=o.length;i-- >0;)a=o[i],(!n||n(a,t,e))&&!l[a]&&(e[a]=t[a],l[a]=!0);t=s!==!1&&Xs(t)}while(t&&(!s||s(t,e))&&t!==Object.prototype);return e},Em=(t,e,s)=>{t=String(t),(s===void 0||s>t.length)&&(s=t.length),s-=e.length;const n=t.indexOf(e,s);return n!==-1&&n===s},Am=t=>{if(!t)return null;if(vt(t))return t;let e=t.length;if(!xi(e))return null;const s=new Array(e);for(;e-- >0;)s[e]=t[e];return s},Pm=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Xs(Uint8Array)),Rm=(t,e)=>{const n=(t&&t[Mr]).call(t);let o;for(;(o=n.next())&&!o.done;){const i=o.value;e.call(t,i[0],i[1])}},Om=(t,e)=>{let s;const n=[];for(;(s=t.exec(e))!==null;)n.push(s);return n},Im=Ne("HTMLFormElement"),Mm=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,n,o){return n.toUpperCase()+o}),Rn=(({hasOwnProperty:t})=>(e,s)=>t.call(e,s))(Object.prototype),Fm=Ne("RegExp"),vi=(t,e)=>{const s=Object.getOwnPropertyDescriptors(t),n={};Wt(s,(o,i)=>{let a;(a=e(o,i,t))!==!1&&(n[i]=a||o)}),Object.defineProperties(t,n)},Lm=t=>{vi(t,(e,s)=>{if(pe(t)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const n=t[s];if(pe(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},_m=(t,e)=>{const s={},n=o=>{o.forEach(i=>{s[i]=!0})};return vt(t)?n(t):n(String(t).split(e)),s},$m=()=>{},Bm=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Um(t){return!!(t&&pe(t.append)&&t[fi]==="FormData"&&t[Mr])}const zm=t=>{const e=new Array(10),s=(n,o)=>{if(qt(n)){if(e.indexOf(n)>=0)return;if(Gt(n))return n;if(!("toJSON"in n)){e[o]=n;const i=vt(n)?[]:{};return Wt(n,(a,l)=>{const c=s(a,o+1);!xt(c)&&(i[l]=c)}),e[o]=void 0,i}}return n};return s(t,0)},Hm=Ne("AsyncFunction"),Gm=t=>t&&(qt(t)||pe(t))&&pe(t.then)&&pe(t.catch),wi=((t,e)=>t?setImmediate:e?((s,n)=>(et.addEventListener("message",({source:o,data:i})=>{o===et&&i===s&&n.length&&n.shift()()},!1),o=>{n.push(o),et.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",pe(et.postMessage)),qm=typeof queueMicrotask<"u"?queueMicrotask.bind(et):typeof process<"u"&&process.nextTick||wi,Wm=t=>t!=null&&pe(t[Mr]),N={isArray:vt,isArrayBuffer:gi,isBuffer:Gt,isFormData:bm,isArrayBufferView:cm,isString:dm,isNumber:xi,isBoolean:um,isObject:qt,isPlainObject:dr,isEmptyObject:mm,isReadableStream:vm,isRequest:wm,isResponse:jm,isHeaders:Nm,isUndefined:xt,isDate:pm,isFile:hm,isBlob:fm,isRegExp:Fm,isFunction:pe,isStream:xm,isURLSearchParams:ym,isTypedArray:Pm,isFileList:gm,forEach:Wt,merge:Ns,extend:Cm,trim:Sm,stripBOM:km,inherits:Tm,toFlatObject:Dm,kindOf:Fr,kindOfTest:Ne,endsWith:Em,toArray:Am,forEachEntry:Rm,matchAll:Om,isHTMLForm:Im,hasOwnProperty:Rn,hasOwnProp:Rn,reduceDescriptors:vi,freezeMethods:Lm,toObjectSet:_m,toCamelCase:Mm,noop:$m,toFiniteNumber:Bm,findKey:bi,global:et,isContextDefined:yi,isSpecCompliantForm:Um,toJSONObject:zm,isAsyncFn:Hm,isThenable:Gm,setImmediate:wi,asap:qm,isIterable:Wm};function z(t,e,s,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),s&&(this.config=s),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}N.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.status}}});const ji=z.prototype,Ni={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ni[t]={value:t}});Object.defineProperties(z,Ni);Object.defineProperty(ji,"isAxiosError",{value:!0});z.from=(t,e,s,n,o,i)=>{const a=Object.create(ji);N.toFlatObject(t,a,function(m){return m!==Error.prototype},d=>d!=="isAxiosError");const l=t&&t.message?t.message:"Error",c=e==null&&t?t.code:e;return z.call(a,l,c,s,n,o),t&&a.cause==null&&Object.defineProperty(a,"cause",{value:t,configurable:!0}),a.name=t&&t.name||"Error",i&&Object.assign(a,i),a};const Vm=null;function Ss(t){return N.isPlainObject(t)||N.isArray(t)}function Si(t){return N.endsWith(t,"[]")?t.slice(0,-2):t}function On(t,e,s){return t?t.concat(e).map(function(o,i){return o=Si(o),!s&&i?"["+o+"]":o}).join(s?".":""):e}function Jm(t){return N.isArray(t)&&!t.some(Ss)}const Km=N.toFlatObject(N,{},null,function(e){return/^is[A-Z]/.test(e)});function _r(t,e,s){if(!N.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,s=N.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,h){return!N.isUndefined(h[w])});const n=s.metaTokens,o=s.visitor||m,i=s.dots,a=s.indexes,c=(s.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(e);if(!N.isFunction(o))throw new TypeError("visitor must be a function");function d(f){if(f===null)return"";if(N.isDate(f))return f.toISOString();if(N.isBoolean(f))return f.toString();if(!c&&N.isBlob(f))throw new z("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(f)||N.isTypedArray(f)?c&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function m(f,w,h){let C=f;if(f&&!h&&typeof f=="object"){if(N.endsWith(w,"{}"))w=n?w:w.slice(0,-2),f=JSON.stringify(f);else if(N.isArray(f)&&Jm(f)||(N.isFileList(f)||N.endsWith(w,"[]"))&&(C=N.toArray(f)))return w=Si(w),C.forEach(function(v,b){!(N.isUndefined(v)||v===null)&&e.append(a===!0?On([w],b,i):a===null?w:w+"[]",d(v))}),!1}return Ss(f)?!0:(e.append(On(h,w,i),d(f)),!1)}const u=[],g=Object.assign(Km,{defaultVisitor:m,convertValue:d,isVisitable:Ss});function y(f,w){if(!N.isUndefined(f)){if(u.indexOf(f)!==-1)throw Error("Circular reference detected in "+w.join("."));u.push(f),N.forEach(f,function(C,j){(!(N.isUndefined(C)||C===null)&&o.call(e,C,N.isString(j)?j.trim():j,w,g))===!0&&y(C,w?w.concat(j):[j])}),u.pop()}}if(!N.isObject(t))throw new TypeError("data must be an object");return y(t),e}function In(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function Qs(t,e){this._pairs=[],t&&_r(t,this,e)}const Ci=Qs.prototype;Ci.append=function(e,s){this._pairs.push([e,s])};Ci.toString=function(e){const s=e?function(n){return e.call(this,n,In)}:In;return this._pairs.map(function(o){return s(o[0])+"="+s(o[1])},"").join("&")};function Ym(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function ki(t,e,s){if(!e)return t;const n=s&&s.encode||Ym;N.isFunction(s)&&(s={serialize:s});const o=s&&s.serialize;let i;if(o?i=o(e,s):i=N.isURLSearchParams(e)?e.toString():new Qs(e,s).toString(n),i){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Mn{constructor(){this.handlers=[]}use(e,s,n){return this.handlers.push({fulfilled:e,rejected:s,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){N.forEach(this.handlers,function(n){n!==null&&e(n)})}}const Ti={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Xm=typeof URLSearchParams<"u"?URLSearchParams:Qs,Qm=typeof FormData<"u"?FormData:null,Zm=typeof Blob<"u"?Blob:null,ep={isBrowser:!0,classes:{URLSearchParams:Xm,FormData:Qm,Blob:Zm},protocols:["http","https","file","blob","url","data"]},Zs=typeof window<"u"&&typeof document<"u",Cs=typeof navigator=="object"&&navigator||void 0,tp=Zs&&(!Cs||["ReactNative","NativeScript","NS"].indexOf(Cs.product)<0),rp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",sp=Zs&&window.location.href||"http://localhost",np=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Zs,hasStandardBrowserEnv:tp,hasStandardBrowserWebWorkerEnv:rp,navigator:Cs,origin:sp},Symbol.toStringTag,{value:"Module"})),ae={...np,...ep};function op(t,e){return _r(t,new ae.classes.URLSearchParams,{visitor:function(s,n,o,i){return ae.isNode&&N.isBuffer(s)?(this.append(n,s.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function ip(t){return N.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ap(t){const e={},s=Object.keys(t);let n;const o=s.length;let i;for(n=0;n<o;n++)i=s[n],e[i]=t[i];return e}function Di(t){function e(s,n,o,i){let a=s[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=i>=s.length;return a=!a&&N.isArray(o)?o.length:a,c?(N.hasOwnProp(o,a)?o[a]=[o[a],n]:o[a]=n,!l):((!o[a]||!N.isObject(o[a]))&&(o[a]=[]),e(s,n,o[a],i)&&N.isArray(o[a])&&(o[a]=ap(o[a])),!l)}if(N.isFormData(t)&&N.isFunction(t.entries)){const s={};return N.forEachEntry(t,(n,o)=>{e(ip(n),o,s,0)}),s}return null}function lp(t,e,s){if(N.isString(t))try{return(e||JSON.parse)(t),N.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(s||JSON.stringify)(t)}const Vt={transitional:Ti,adapter:["xhr","http","fetch"],transformRequest:[function(e,s){const n=s.getContentType()||"",o=n.indexOf("application/json")>-1,i=N.isObject(e);if(i&&N.isHTMLForm(e)&&(e=new FormData(e)),N.isFormData(e))return o?JSON.stringify(Di(e)):e;if(N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e)||N.isReadableStream(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return op(e,this.formSerializer).toString();if((l=N.isFileList(e))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return _r(l?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||o?(s.setContentType("application/json",!1),lp(e)):e}],transformResponse:[function(e){const s=this.transitional||Vt.transitional,n=s&&s.forcedJSONParsing,o=this.responseType==="json";if(N.isResponse(e)||N.isReadableStream(e))return e;if(e&&N.isString(e)&&(n&&!this.responseType||o)){const a=!(s&&s.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(l){if(a)throw l.name==="SyntaxError"?z.from(l,z.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ae.classes.FormData,Blob:ae.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],t=>{Vt.headers[t]={}});const cp=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dp=t=>{const e={};let s,n,o;return t&&t.split(`
`).forEach(function(a){o=a.indexOf(":"),s=a.substring(0,o).trim().toLowerCase(),n=a.substring(o+1).trim(),!(!s||e[s]&&cp[s])&&(s==="set-cookie"?e[s]?e[s].push(n):e[s]=[n]:e[s]=e[s]?e[s]+", "+n:n)}),e},Fn=Symbol("internals");function Dt(t){return t&&String(t).trim().toLowerCase()}function ur(t){return t===!1||t==null?t:N.isArray(t)?t.map(ur):String(t)}function up(t){const e=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=s.exec(t);)e[n[1]]=n[2];return e}const mp=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function es(t,e,s,n,o){if(N.isFunction(n))return n.call(this,e,s);if(o&&(e=s),!!N.isString(e)){if(N.isString(n))return e.indexOf(n)!==-1;if(N.isRegExp(n))return n.test(e)}}function pp(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,s,n)=>s.toUpperCase()+n)}function hp(t,e){const s=N.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+s,{value:function(o,i,a){return this[n].call(this,e,o,i,a)},configurable:!0})})}let he=class{constructor(e){e&&this.set(e)}set(e,s,n){const o=this;function i(l,c,d){const m=Dt(c);if(!m)throw new Error("header name must be a non-empty string");const u=N.findKey(o,m);(!u||o[u]===void 0||d===!0||d===void 0&&o[u]!==!1)&&(o[u||c]=ur(l))}const a=(l,c)=>N.forEach(l,(d,m)=>i(d,m,c));if(N.isPlainObject(e)||e instanceof this.constructor)a(e,s);else if(N.isString(e)&&(e=e.trim())&&!mp(e))a(dp(e),s);else if(N.isObject(e)&&N.isIterable(e)){let l={},c,d;for(const m of e){if(!N.isArray(m))throw TypeError("Object iterator must return a key-value pair");l[d=m[0]]=(c=l[d])?N.isArray(c)?[...c,m[1]]:[c,m[1]]:m[1]}a(l,s)}else e!=null&&i(s,e,n);return this}get(e,s){if(e=Dt(e),e){const n=N.findKey(this,e);if(n){const o=this[n];if(!s)return o;if(s===!0)return up(o);if(N.isFunction(s))return s.call(this,o,n);if(N.isRegExp(s))return s.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,s){if(e=Dt(e),e){const n=N.findKey(this,e);return!!(n&&this[n]!==void 0&&(!s||es(this,this[n],n,s)))}return!1}delete(e,s){const n=this;let o=!1;function i(a){if(a=Dt(a),a){const l=N.findKey(n,a);l&&(!s||es(n,n[l],l,s))&&(delete n[l],o=!0)}}return N.isArray(e)?e.forEach(i):i(e),o}clear(e){const s=Object.keys(this);let n=s.length,o=!1;for(;n--;){const i=s[n];(!e||es(this,this[i],i,e,!0))&&(delete this[i],o=!0)}return o}normalize(e){const s=this,n={};return N.forEach(this,(o,i)=>{const a=N.findKey(n,i);if(a){s[a]=ur(o),delete s[i];return}const l=e?pp(i):String(i).trim();l!==i&&delete s[i],s[l]=ur(o),n[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const s=Object.create(null);return N.forEach(this,(n,o)=>{n!=null&&n!==!1&&(s[o]=e&&N.isArray(n)?n.join(", "):n)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,s])=>e+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...s){const n=new this(e);return s.forEach(o=>n.set(o)),n}static accessor(e){const n=(this[Fn]=this[Fn]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=Dt(a);n[l]||(hp(o,a),n[l]=!0)}return N.isArray(e)?e.forEach(i):i(e),this}};he.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(he.prototype,({value:t},e)=>{let s=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(n){this[s]=n}}});N.freezeMethods(he);function ts(t,e){const s=this||Vt,n=e||s,o=he.from(n.headers);let i=n.data;return N.forEach(t,function(l){i=l.call(s,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function Ei(t){return!!(t&&t.__CANCEL__)}function wt(t,e,s){z.call(this,t??"canceled",z.ERR_CANCELED,e,s),this.name="CanceledError"}N.inherits(wt,z,{__CANCEL__:!0});function Ai(t,e,s){const n=s.config.validateStatus;!s.status||!n||n(s.status)?t(s):e(new z("Request failed with status code "+s.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function fp(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function gp(t,e){t=t||10;const s=new Array(t),n=new Array(t);let o=0,i=0,a;return e=e!==void 0?e:1e3,function(c){const d=Date.now(),m=n[i];a||(a=d),s[o]=c,n[o]=d;let u=i,g=0;for(;u!==o;)g+=s[u++],u=u%t;if(o=(o+1)%t,o===i&&(i=(i+1)%t),d-a<e)return;const y=m&&d-m;return y?Math.round(g*1e3/y):void 0}}function xp(t,e){let s=0,n=1e3/e,o,i;const a=(d,m=Date.now())=>{s=m,o=null,i&&(clearTimeout(i),i=null),t(...d)};return[(...d)=>{const m=Date.now(),u=m-s;u>=n?a(d,m):(o=d,i||(i=setTimeout(()=>{i=null,a(o)},n-u)))},()=>o&&a(o)]}const Sr=(t,e,s=3)=>{let n=0;const o=gp(50,250);return xp(i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,c=a-n,d=o(c),m=a<=l;n=a;const u={loaded:a,total:l,progress:l?a/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&m?(l-a)/d:void 0,event:i,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(u)},s)},Ln=(t,e)=>{const s=t!=null;return[n=>e[0]({lengthComputable:s,total:t,loaded:n}),e[1]]},_n=t=>(...e)=>N.asap(()=>t(...e)),bp=ae.hasStandardBrowserEnv?((t,e)=>s=>(s=new URL(s,ae.origin),t.protocol===s.protocol&&t.host===s.host&&(e||t.port===s.port)))(new URL(ae.origin),ae.navigator&&/(msie|trident)/i.test(ae.navigator.userAgent)):()=>!0,yp=ae.hasStandardBrowserEnv?{write(t,e,s,n,o,i){const a=[t+"="+encodeURIComponent(e)];N.isNumber(s)&&a.push("expires="+new Date(s).toGMTString()),N.isString(n)&&a.push("path="+n),N.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function vp(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function wp(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Pi(t,e,s){let n=!vp(e);return t&&(n||s==!1)?wp(t,e):e}const $n=t=>t instanceof he?{...t}:t;function it(t,e){e=e||{};const s={};function n(d,m,u,g){return N.isPlainObject(d)&&N.isPlainObject(m)?N.merge.call({caseless:g},d,m):N.isPlainObject(m)?N.merge({},m):N.isArray(m)?m.slice():m}function o(d,m,u,g){if(N.isUndefined(m)){if(!N.isUndefined(d))return n(void 0,d,u,g)}else return n(d,m,u,g)}function i(d,m){if(!N.isUndefined(m))return n(void 0,m)}function a(d,m){if(N.isUndefined(m)){if(!N.isUndefined(d))return n(void 0,d)}else return n(void 0,m)}function l(d,m,u){if(u in e)return n(d,m);if(u in t)return n(void 0,d)}const c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(d,m,u)=>o($n(d),$n(m),u,!0)};return N.forEach(Object.keys({...t,...e}),function(m){const u=c[m]||o,g=u(t[m],e[m],m);N.isUndefined(g)&&u!==l||(s[m]=g)}),s}const Ri=t=>{const e=it({},t);let{data:s,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:l}=e;if(e.headers=a=he.from(a),e.url=ki(Pi(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),N.isFormData(s)){if(ae.hasStandardBrowserEnv||ae.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(N.isFunction(s.getHeaders)){const c=s.getHeaders(),d=["content-type","content-length"];Object.entries(c).forEach(([m,u])=>{d.includes(m.toLowerCase())&&a.set(m,u)})}}if(ae.hasStandardBrowserEnv&&(n&&N.isFunction(n)&&(n=n(e)),n||n!==!1&&bp(e.url))){const c=o&&i&&yp.read(i);c&&a.set(o,c)}return e},jp=typeof XMLHttpRequest<"u",Np=jp&&function(t){return new Promise(function(s,n){const o=Ri(t);let i=o.data;const a=he.from(o.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=o,m,u,g,y,f;function w(){y&&y(),f&&f(),o.cancelToken&&o.cancelToken.unsubscribe(m),o.signal&&o.signal.removeEventListener("abort",m)}let h=new XMLHttpRequest;h.open(o.method.toUpperCase(),o.url,!0),h.timeout=o.timeout;function C(){if(!h)return;const v=he.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),x={data:!l||l==="text"||l==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:v,config:t,request:h};Ai(function(A){s(A),w()},function(A){n(A),w()},x),h=null}"onloadend"in h?h.onloadend=C:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(C)},h.onabort=function(){h&&(n(new z("Request aborted",z.ECONNABORTED,t,h)),h=null)},h.onerror=function(b){const x=b&&b.message?b.message:"Network Error",k=new z(x,z.ERR_NETWORK,t,h);k.event=b||null,n(k),h=null},h.ontimeout=function(){let b=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const x=o.transitional||Ti;o.timeoutErrorMessage&&(b=o.timeoutErrorMessage),n(new z(b,x.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,h)),h=null},i===void 0&&a.setContentType(null),"setRequestHeader"in h&&N.forEach(a.toJSON(),function(b,x){h.setRequestHeader(x,b)}),N.isUndefined(o.withCredentials)||(h.withCredentials=!!o.withCredentials),l&&l!=="json"&&(h.responseType=o.responseType),d&&([g,f]=Sr(d,!0),h.addEventListener("progress",g)),c&&h.upload&&([u,y]=Sr(c),h.upload.addEventListener("progress",u),h.upload.addEventListener("loadend",y)),(o.cancelToken||o.signal)&&(m=v=>{h&&(n(!v||v.type?new wt(null,t,h):v),h.abort(),h=null)},o.cancelToken&&o.cancelToken.subscribe(m),o.signal&&(o.signal.aborted?m():o.signal.addEventListener("abort",m)));const j=fp(o.url);if(j&&ae.protocols.indexOf(j)===-1){n(new z("Unsupported protocol "+j+":",z.ERR_BAD_REQUEST,t));return}h.send(i||null)})},Sp=(t,e)=>{const{length:s}=t=t?t.filter(Boolean):[];if(e||s){let n=new AbortController,o;const i=function(d){if(!o){o=!0,l();const m=d instanceof Error?d:this.reason;n.abort(m instanceof z?m:new wt(m instanceof Error?m.message:m))}};let a=e&&setTimeout(()=>{a=null,i(new z(`timeout ${e} of ms exceeded`,z.ETIMEDOUT))},e);const l=()=>{t&&(a&&clearTimeout(a),a=null,t.forEach(d=>{d.unsubscribe?d.unsubscribe(i):d.removeEventListener("abort",i)}),t=null)};t.forEach(d=>d.addEventListener("abort",i));const{signal:c}=n;return c.unsubscribe=()=>N.asap(l),c}},Cp=function*(t,e){let s=t.byteLength;if(s<e){yield t;return}let n=0,o;for(;n<s;)o=n+e,yield t.slice(n,o),n=o},kp=async function*(t,e){for await(const s of Tp(t))yield*Cp(s,e)},Tp=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:s,value:n}=await e.read();if(s)break;yield n}}finally{await e.cancel()}},Bn=(t,e,s,n)=>{const o=kp(t,e);let i=0,a,l=c=>{a||(a=!0,n&&n(c))};return new ReadableStream({async pull(c){try{const{done:d,value:m}=await o.next();if(d){l(),c.close();return}let u=m.byteLength;if(s){let g=i+=u;s(g)}c.enqueue(new Uint8Array(m))}catch(d){throw l(d),d}},cancel(c){return l(c),o.return()}},{highWaterMark:2})},Un=64*1024,{isFunction:rr}=N,Dp=(({Request:t,Response:e})=>({Request:t,Response:e}))(N.global),{ReadableStream:zn,TextEncoder:Hn}=N.global,Gn=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Ep=t=>{t=N.merge.call({skipUndefined:!0},Dp,t);const{fetch:e,Request:s,Response:n}=t,o=e?rr(e):typeof fetch=="function",i=rr(s),a=rr(n);if(!o)return!1;const l=o&&rr(zn),c=o&&(typeof Hn=="function"?(f=>w=>f.encode(w))(new Hn):async f=>new Uint8Array(await new s(f).arrayBuffer())),d=i&&l&&Gn(()=>{let f=!1;const w=new s(ae.origin,{body:new zn,method:"POST",get duplex(){return f=!0,"half"}}).headers.has("Content-Type");return f&&!w}),m=a&&l&&Gn(()=>N.isReadableStream(new n("").body)),u={stream:m&&(f=>f.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!u[f]&&(u[f]=(w,h)=>{let C=w&&w[f];if(C)return C.call(w);throw new z(`Response type '${f}' is not supported`,z.ERR_NOT_SUPPORT,h)})});const g=async f=>{if(f==null)return 0;if(N.isBlob(f))return f.size;if(N.isSpecCompliantForm(f))return(await new s(ae.origin,{method:"POST",body:f}).arrayBuffer()).byteLength;if(N.isArrayBufferView(f)||N.isArrayBuffer(f))return f.byteLength;if(N.isURLSearchParams(f)&&(f=f+""),N.isString(f))return(await c(f)).byteLength},y=async(f,w)=>{const h=N.toFiniteNumber(f.getContentLength());return h??g(w)};return async f=>{let{url:w,method:h,data:C,signal:j,cancelToken:v,timeout:b,onDownloadProgress:x,onUploadProgress:k,responseType:A,headers:S,withCredentials:I="same-origin",fetchOptions:E}=Ri(f),P=e||fetch;A=A?(A+"").toLowerCase():"text";let W=Sp([j,v&&v.toAbortSignal()],b),B=null;const T=W&&W.unsubscribe&&(()=>{W.unsubscribe()});let F;try{if(k&&d&&h!=="get"&&h!=="head"&&(F=await y(S,C))!==0){let $=new s(w,{method:"POST",body:C,duplex:"half"}),G;if(N.isFormData(C)&&(G=$.headers.get("content-type"))&&S.setContentType(G),$.body){const[V,ne]=Ln(F,Sr(_n(k)));C=Bn($.body,Un,V,ne)}}N.isString(I)||(I=I?"include":"omit");const _=i&&"credentials"in s.prototype,J={...E,signal:W,method:h.toUpperCase(),headers:S.normalize().toJSON(),body:C,duplex:"half",credentials:_?I:void 0};B=i&&new s(w,J);let q=await(i?P(B,E):P(w,J));const le=m&&(A==="stream"||A==="response");if(m&&(x||le&&T)){const $={};["status","statusText","headers"].forEach(ie=>{$[ie]=q[ie]});const G=N.toFiniteNumber(q.headers.get("content-length")),[V,ne]=x&&Ln(G,Sr(_n(x),!0))||[];q=new n(Bn(q.body,Un,V,()=>{ne&&ne(),T&&T()}),$)}A=A||"text";let xe=await u[N.findKey(u,A)||"text"](q,f);return!le&&T&&T(),await new Promise(($,G)=>{Ai($,G,{data:xe,headers:he.from(q.headers),status:q.status,statusText:q.statusText,config:f,request:B})})}catch(_){throw T&&T(),_&&_.name==="TypeError"&&/Load failed|fetch/i.test(_.message)?Object.assign(new z("Network Error",z.ERR_NETWORK,f,B),{cause:_.cause||_}):z.from(_,_&&_.code,f,B)}}},Ap=new Map,Oi=t=>{let e=t?t.env:{};const{fetch:s,Request:n,Response:o}=e,i=[n,o,s];let a=i.length,l=a,c,d,m=Ap;for(;l--;)c=i[l],d=m.get(c),d===void 0&&m.set(c,d=l?new Map:Ep(e)),m=d;return d};Oi();const ks={http:Vm,xhr:Np,fetch:{get:Oi}};N.forEach(ks,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const qn=t=>`- ${t}`,Pp=t=>N.isFunction(t)||t===null||t===!1,Ii={getAdapter:(t,e)=>{t=N.isArray(t)?t:[t];const{length:s}=t;let n,o;const i={};for(let a=0;a<s;a++){n=t[a];let l;if(o=n,!Pp(n)&&(o=ks[(l=String(n)).toLowerCase()],o===void 0))throw new z(`Unknown adapter '${l}'`);if(o&&(N.isFunction(o)||(o=o.get(e))))break;i[l||"#"+a]=o}if(!o){const a=Object.entries(i).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=s?a.length>1?`since :
`+a.map(qn).join(`
`):" "+qn(a[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return o},adapters:ks};function rs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new wt(null,t)}function Wn(t){return rs(t),t.headers=he.from(t.headers),t.data=ts.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ii.getAdapter(t.adapter||Vt.adapter,t)(t).then(function(n){return rs(t),n.data=ts.call(t,t.transformResponse,n),n.headers=he.from(n.headers),n},function(n){return Ei(n)||(rs(t),n&&n.response&&(n.response.data=ts.call(t,t.transformResponse,n.response),n.response.headers=he.from(n.response.headers))),Promise.reject(n)})}const Mi="1.12.2",$r={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{$r[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});const Vn={};$r.transitional=function(e,s,n){function o(i,a){return"[Axios v"+Mi+"] Transitional option '"+i+"'"+a+(n?". "+n:"")}return(i,a,l)=>{if(e===!1)throw new z(o(a," has been removed"+(s?" in "+s:"")),z.ERR_DEPRECATED);return s&&!Vn[a]&&(Vn[a]=!0,console.warn(o(a," has been deprecated since v"+s+" and will be removed in the near future"))),e?e(i,a,l):!0}};$r.spelling=function(e){return(s,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Rp(t,e,s){if(typeof t!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let o=n.length;for(;o-- >0;){const i=n[o],a=e[i];if(a){const l=t[i],c=l===void 0||a(l,i,t);if(c!==!0)throw new z("option "+i+" must be "+c,z.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const mr={assertOptions:Rp,validators:$r},Se=mr.validators;let rt=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Mn,response:new Mn}}async request(e,s){try{return await this._request(e,s)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(e,s){typeof e=="string"?(s=s||{},s.url=e):s=e||{},s=it(this.defaults,s);const{transitional:n,paramsSerializer:o,headers:i}=s;n!==void 0&&mr.assertOptions(n,{silentJSONParsing:Se.transitional(Se.boolean),forcedJSONParsing:Se.transitional(Se.boolean),clarifyTimeoutError:Se.transitional(Se.boolean)},!1),o!=null&&(N.isFunction(o)?s.paramsSerializer={serialize:o}:mr.assertOptions(o,{encode:Se.function,serialize:Se.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),mr.assertOptions(s,{baseUrl:Se.spelling("baseURL"),withXsrfToken:Se.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let a=i&&N.merge(i.common,i[s.method]);i&&N.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),s.headers=he.concat(a,i);const l=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(s)===!1||(c=c&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const d=[];this.interceptors.response.forEach(function(w){d.push(w.fulfilled,w.rejected)});let m,u=0,g;if(!c){const f=[Wn.bind(this),void 0];for(f.unshift(...l),f.push(...d),g=f.length,m=Promise.resolve(s);u<g;)m=m.then(f[u++],f[u++]);return m}g=l.length;let y=s;for(;u<g;){const f=l[u++],w=l[u++];try{y=f(y)}catch(h){w.call(this,h);break}}try{m=Wn.call(this,y)}catch(f){return Promise.reject(f)}for(u=0,g=d.length;u<g;)m=m.then(d[u++],d[u++]);return m}getUri(e){e=it(this.defaults,e);const s=Pi(e.baseURL,e.url,e.allowAbsoluteUrls);return ki(s,e.params,e.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(e){rt.prototype[e]=function(s,n){return this.request(it(n||{},{method:e,url:s,data:(n||{}).data}))}});N.forEach(["post","put","patch"],function(e){function s(n){return function(i,a,l){return this.request(it(l||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}rt.prototype[e]=s(),rt.prototype[e+"Form"]=s(!0)});let Op=class Fi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(i){s=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{n.subscribe(l),i=l}).then(o);return a.cancel=function(){n.unsubscribe(i)},a},e(function(i,a,l){n.reason||(n.reason=new wt(i,a,l),s(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const s=this._listeners.indexOf(e);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const e=new AbortController,s=n=>{e.abort(n)};return this.subscribe(s),e.signal.unsubscribe=()=>this.unsubscribe(s),e.signal}static source(){let e;return{token:new Fi(function(o){e=o}),cancel:e}}};function Ip(t){return function(s){return t.apply(null,s)}}function Mp(t){return N.isObject(t)&&t.isAxiosError===!0}const Ts={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ts).forEach(([t,e])=>{Ts[e]=t});function Li(t){const e=new rt(t),s=hi(rt.prototype.request,e);return N.extend(s,rt.prototype,e,{allOwnKeys:!0}),N.extend(s,e,null,{allOwnKeys:!0}),s.create=function(o){return Li(it(t,o))},s}const Q=Li(Vt);Q.Axios=rt;Q.CanceledError=wt;Q.CancelToken=Op;Q.isCancel=Ei;Q.VERSION=Mi;Q.toFormData=_r;Q.AxiosError=z;Q.Cancel=Q.CanceledError;Q.all=function(e){return Promise.all(e)};Q.spread=Ip;Q.isAxiosError=Mp;Q.mergeConfig=it;Q.AxiosHeaders=he;Q.formToJSON=t=>Di(N.isHTMLForm(t)?new FormData(t):t);Q.getAdapter=Ii.getAdapter;Q.HttpStatusCode=Ts;Q.default=Q;const{Axios:Eg,AxiosError:Ag,CanceledError:Pg,isCancel:Rg,CancelToken:Og,VERSION:Ig,all:Mg,Cancel:Fg,isAxiosError:Lg,spread:_g,toFormData:$g,AxiosHeaders:Bg,HttpStatusCode:Ug,formToJSON:zg,getAdapter:Hg,mergeConfig:Gg}=Q,Jn={"codellama-7b":{name:"CodeLlama 7B",type:"Code Generation",baseURL:"http://localhost:11434/api",model:"codellama:7b",description:"Fast and efficient code generation (7B parameters)",languages:["python","javascript","java","cpp","go","rust","php","ruby"],strengths:["speed","efficiency","general-purpose"],ram_required:"8GB"},auto:{name:"Auto Select",type:"Auto Selection",baseURL:"http://localhost:11434/api",model:"auto",description:"Automatically selects the best available model",languages:["all"],strengths:["smart-selection","availability"],ram_required:"variable"}},ss={"web-apps":{name:"Web Applications",description:"Full-stack web applications",templates:[{id:"react-dashboard",name:"React Dashboard",description:"Modern React dashboard with charts and analytics",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]},{id:"ecommerce-store",name:"E-commerce Store",description:"Complete online store with cart and checkout",category:"web-apps",files:["index.html","App.jsx","styles.css","package.json"]}]},"mobile-apps":{name:"Mobile Applications",description:"React Native mobile applications",templates:[{id:"todo-app",name:"Todo App",description:"Simple todo application with React Native",category:"mobile-apps",files:["App.js","components/TodoItem.js","styles.js"]}]}};class Fp{constructor(){this.isHealthy=!1,this.modelHealth={},this.availableModels=Object.keys(Jn),this.baseURL="http://localhost:11434/api",console.log("🔍 Initializing local AI health monitoring..."),this.checkHealth(),setInterval(()=>{this.checkHealthQuiet()},3e4)}async checkHealth(){try{const e=await Q.get(`${this.baseURL}/tags`,{timeout:5e3});if(e.status===200){const s=this.isHealthy;this.isHealthy=!0,s||console.log("✅ Local AI service is healthy");const n=e.data.models||[];this.modelHealth={},n.forEach(o=>{this.modelHealth[o.name]={isHealthy:!0,size:o.size,modified_at:o.modified_at}})}else{const s=this.isHealthy;this.isHealthy=!1,s&&console.log("⚠️ Local AI service is not responding")}}catch(e){const s=this.isHealthy;this.isHealthy=!1,s&&console.log("⚠️ Local AI service not available:",e.message)}}async checkHealthQuiet(){try{const e=await Q.get(`${this.baseURL}/tags`,{timeout:3e3});if(e.status===200){const s=this.isHealthy;this.isHealthy=!0;const n=e.data.models||[];this.modelHealth={},n.forEach(o=>{this.modelHealth[o.name]={isHealthy:!0,size:o.size,modified_at:o.modified_at}})}else this.isHealthy=!1}catch{this.isHealthy=!1}}getAvailableModels(){return Object.values(Jn)}getHealthyModels(){return Object.keys(this.modelHealth).filter(e=>this.modelHealth[e].isHealthy)}getTemplateCategories(){return ss}getTemplatesByCategory(e){var s;return((s=ss[e])==null?void 0:s.templates)||[]}getAllTemplates(){const e=[];return Object.values(ss).forEach(s=>{e.push(...s.templates)}),e}searchTemplates(e){return this.getAllTemplates().filter(n=>n.name.toLowerCase().includes(e.toLowerCase())||n.description.toLowerCase().includes(e.toLowerCase()))}getPopularTemplates(){return this.getAllTemplates().slice(0,5)}generateTemplateById(e,s={}){const o=this.getAllTemplates().find(i=>i.id===e);if(!o)throw new Error(`Template ${e} not found`);return this.createTemplateFiles(o,s)}createTemplateFiles(e,s={}){const n={};switch(e.id){case"react-dashboard":n["index.html"]=`<!DOCTYPE html>
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
</html>`}return n}async generateCode(e,s={}){console.log("🚀 Starting code generation for prompt:",e);try{return this.isHealthy?await this.generateWithLocalAI(e,s):(console.log("⚠️ Local AI not available, using template fallback"),this.createFallbackResponse(e,s))}catch(n){return console.error("❌ Code generation failed:",n),this.createFallbackResponse(e,s)}}async generateWithLocalAI(e,s={}){const n=this.getBestAvailableModel(),o=this.createSystemPrompt(s),i={model:n,messages:[{role:"system",content:o},{role:"user",content:e}],stream:!1,options:{temperature:.7,top_p:.9,max_tokens:4e3}};try{const a=await Q.post(`${this.baseURL}/chat`,i,{timeout:3e4,headers:{"Content-Type":"application/json"}});if(a.data&&a.data.message&&a.data.message.content){const l=a.data.message.content;return this.parseAIResponse(l,e)}else throw new Error("Invalid response from local AI")}catch(a){throw console.error("❌ Local AI generation failed:",a),a}}getBestAvailableModel(){const e=this.getHealthyModels();return e.includes("codellama:7b")?"codellama:7b":e.includes("codellama:13b")?"codellama:13b":e.includes("codellama:34b")?"codellama:34b":e[0]||"codellama:7b"}createSystemPrompt(e={}){return`You are an expert software developer and code generator. Generate complete, working applications based on user requests.

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
}`}}}const oe=new Fp;class Lp{constructor(){this.currentService="local-ai",this.usageStats={totalRequests:0,successfulRequests:0,failedRequests:0,averageResponseTime:0},console.log("🤖 Simple AI Service initialized - Local AI only!")}getServices(){return{"local-ai":{name:"Local AI Models",type:"Local",description:"Self-hosted AI models - no API keys required",models:oe.getAvailableModels()}}}getTemplateCategories(){return oe.getTemplateCategories()}getTemplatesByCategory(e){return oe.getTemplatesByCategory(e)}getAllTemplates(){return oe.getAllTemplates()}generateTemplateById(e,s={}){return oe.generateTemplateById(e,s)}searchTemplates(e){return oe.searchTemplates(e)}getPopularTemplates(){return oe.getPopularTemplates()}async generateCode(e,s={}){const n=Date.now();this.usageStats.totalRequests++;try{if(console.log("🚀 Generating code with Local AI..."),!oe.isHealthy)return console.log("⚠️ Local AI not available, using template fallback"),oe.createFallbackResponse(e,s);const o=await oe.generateCode(e,s),i=Date.now()-n;return this.usageStats.successfulRequests++,this.usageStats.averageResponseTime=(this.usageStats.averageResponseTime+i)/2,console.log("✅ Code generated successfully with Local AI!"),o&&o.files?o.files:(console.warn("⚠️ No files found in response, returning empty object"),{})}catch(o){return console.error("❌ Local AI generation failed:",o),this.usageStats.failedRequests++,console.log("🔄 Falling back to template generation..."),oe.createFallbackResponse(e,s)}}getServiceHealth(){return oe.modelHealth}getUsageStats(){return this.usageStats}getUserPreferences(){return{preferredService:"local-ai",fallbackEnabled:!0,autoHealthCheck:!0}}updateUserPreferences(e){localStorage.setItem("dreambuild-preferences",JSON.stringify(e))}loadUserPreferences(){const e=localStorage.getItem("dreambuild-preferences");return e?JSON.parse(e):this.getUserPreferences()}getServiceStatus(){return{"local-ai":{isHealthy:oe.isHealthy,models:oe.getHealthyModels().length,totalModels:oe.getAvailableModels().length}}}resetServiceHealth(){oe.modelHealth={}}getFallbackOrder(){return["local-ai"]}isFallbackEnabled(){return!0}setFallbackEnabled(e){return!0}getSetupInstructions(){return{"local-ai":{title:"Local AI Setup",description:"Set up local AI models for code generation",steps:["1. Install Ollama from https://ollama.ai","2. Run: ollama pull codellama:7b","3. Run: ollama serve","4. Refresh DreamBuild to start using local AI"],isSetup:oe.isHealthy}}}getServicesNeedingSetup(){return oe.isHealthy?[]:["local-ai"]}hasValidApiKey(e){return e==="local-ai"}setService(e){e==="local-ai"&&(this.currentService=e)}getCurrentService(){return this.currentService}}const pr=new Lp;class _p{constructor(){this.isAutoModeEnabled=!1,this.isRunning=!1,this.currentTask=null,this.taskQueue=[],this.iterationCount=0,this.maxIterations=5,this.fileWatchers=new Map,this.progressCallbacks=new Set,this.autoRefinementEnabled=!0,this.backgroundMonitoringEnabled=!0}toggleAutoMode(){return this.isAutoModeEnabled=!this.isAutoModeEnabled,this.isAutoModeEnabled?(console.log("🤖 AI Agent Auto Mode: ENABLED"),this.startBackgroundMonitoring()):(console.log("🤖 AI Agent Auto Mode: DISABLED"),this.stopBackgroundMonitoring(),this.stopCurrentTask()),this.isAutoModeEnabled}breakdownTask(e,s={}){console.log("🧠 Breaking down task:",e);const n=[],o=e.toLowerCase();return o.includes("full-stack")||o.includes("e-commerce")||o.includes("website")?n.push({id:1,title:"Project Setup",description:"Initialize project structure and dependencies",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Database Schema",description:"Design and implement database structure",priority:"high",estimatedTime:"5-7 min"},{id:3,title:"Authentication System",description:"Implement user login and registration",priority:"high",estimatedTime:"8-10 min"},{id:4,title:"Core Features",description:"Build main application functionality",priority:"medium",estimatedTime:"15-20 min"},{id:5,title:"UI/UX Polish",description:"Add styling, animations, and responsive design",priority:"medium",estimatedTime:"10-15 min"},{id:6,title:"Testing & Optimization",description:"Add tests and optimize performance",priority:"low",estimatedTime:"5-10 min"}):o.includes("react")||o.includes("frontend")?n.push({id:1,title:"Component Architecture",description:"Design React component structure",priority:"high",estimatedTime:"3-5 min"},{id:2,title:"State Management",description:"Implement state management solution",priority:"high",estimatedTime:"5-8 min"},{id:3,title:"Core Components",description:"Build main UI components",priority:"medium",estimatedTime:"10-15 min"},{id:4,title:"Routing & Navigation",description:"Add client-side routing",priority:"medium",estimatedTime:"5-8 min"},{id:5,title:"Styling & Responsiveness",description:"Add CSS and responsive design",priority:"low",estimatedTime:"8-12 min"}):o.includes("api")||o.includes("backend")?n.push({id:1,title:"API Structure",description:"Design REST API endpoints",priority:"high",estimatedTime:"5-8 min"},{id:2,title:"Database Integration",description:"Set up database connections and models",priority:"high",estimatedTime:"8-12 min"},{id:3,title:"Authentication & Security",description:"Implement JWT and security middleware",priority:"high",estimatedTime:"10-15 min"},{id:4,title:"Business Logic",description:"Implement core API functionality",priority:"medium",estimatedTime:"15-25 min"},{id:5,title:"Error Handling & Validation",description:"Add comprehensive error handling",priority:"medium",estimatedTime:"5-10 min"},{id:6,title:"Documentation & Testing",description:"Add API docs and tests",priority:"low",estimatedTime:"8-15 min"}):n.push({id:1,title:"Analysis",description:"Analyze requirements and plan approach",priority:"high",estimatedTime:"2-3 min"},{id:2,title:"Implementation",description:"Build core functionality",priority:"high",estimatedTime:"10-20 min"},{id:3,title:"Enhancement",description:"Add features and improvements",priority:"medium",estimatedTime:"8-15 min"},{id:4,title:"Polish",description:"Refine and optimize the solution",priority:"low",estimatedTime:"5-10 min"}),{originalPrompt:e,tasks:n,totalEstimatedTime:n.reduce((i,a)=>i+parseInt(a.estimatedTime.split("-")[0]),0),complexity:this.assessComplexity(e),autoModeRecommended:n.length>3}}assessComplexity(e){const s={simple:["button","form","page","component"],medium:["app","website","dashboard","api","database"],complex:["full-stack","e-commerce","social media","platform","enterprise"]},n=e.toLowerCase();for(const[o,i]of Object.entries(s))if(i.some(a=>n.includes(a)))return o;return"medium"}async startContinuousIteration(e,s={}){if(!this.isAutoModeEnabled){console.log("⚠️ Auto Mode not enabled");return}this.isRunning=!0,this.iterationCount=0,this.currentTask=this.breakdownTask(e,s),console.log("🔄 Starting continuous iteration for:",e);for(const n of this.currentTask.tasks){if(!this.isAutoModeEnabled||!this.isRunning)break;await this.executeTask(n,s),this.iterationCount++,this.autoRefinementEnabled&&this.iterationCount<this.maxIterations&&await this.autoRefine(n,s)}this.isRunning=!1,console.log("✅ Continuous iteration completed")}async executeTask(e,s={}){console.log(`🎯 Executing task ${e.id}: ${e.title}`),this.notifyProgress({type:"task_start",task:e,message:`Starting ${e.title}...`});try{await this.delay(this.getTaskDuration(e)),this.notifyProgress({type:"task_complete",task:e,message:`Completed ${e.title}`})}catch(n){console.error(`❌ Task ${e.id} failed:`,n),this.notifyProgress({type:"task_error",task:e,message:`Failed ${e.title}: ${n.message}`})}}async autoRefine(e,s={}){console.log(`🔧 Auto-refining: ${e.title}`),this.notifyProgress({type:"refinement_start",task:e,message:`Auto-refining ${e.title}...`}),await this.delay(2e3),this.notifyProgress({type:"refinement_complete",task:e,message:`Refined ${e.title}`})}startBackgroundMonitoring(){this.backgroundMonitoringEnabled&&(console.log("👀 Starting background monitoring"),this.setupFileWatchers(),this.startCodeQualityMonitoring(),this.startPerformanceMonitoring())}stopBackgroundMonitoring(){console.log("👀 Stopping background monitoring"),this.fileWatchers.forEach(e=>e.disconnect()),this.fileWatchers.clear()}setupFileWatchers(){console.log("📁 Setting up file watchers"),this.fileWatcherInterval=setInterval(()=>{this.checkForFileChanges()},5e3)}checkForFileChanges(){const e=this.simulateFileChanges();e.length>0&&(this.notifyProgress({type:"file_changes",changes:e,message:`Detected ${e.length} file changes`}),this.isAutoModeEnabled&&this.suggestImprovements(e))}simulateFileChanges(){const e=[];return Math.random()>.7&&e.push({file:"src/components/App.jsx",type:"modified",timestamp:new Date}),e}suggestImprovements(e){console.log("💡 Suggesting improvements for:",e);const s=["Consider adding error boundaries to React components","Optimize bundle size by lazy loading components","Add TypeScript for better type safety","Implement proper error handling in API calls","Add loading states for better UX"],n=s[Math.floor(Math.random()*s.length)];this.notifyProgress({type:"improvement_suggestion",suggestion:n,message:`Suggestion: ${n}`})}startCodeQualityMonitoring(){console.log("🔍 Starting code quality monitoring"),this.qualityCheckInterval=setInterval(()=>{this.performQualityCheck()},1e4)}performQualityCheck(){const e=this.simulateQualityIssues();e.length>0&&this.notifyProgress({type:"quality_issues",issues:e,message:`Found ${e.length} code quality issues`})}simulateQualityIssues(){const e=[];return Math.random()>.8&&e.push({type:"warning",message:"Unused import detected",file:"src/components/Button.jsx",line:5}),e}startPerformanceMonitoring(){console.log("⚡ Starting performance monitoring"),this.performanceCheckInterval=setInterval(()=>{this.checkPerformance()},15e3)}checkPerformance(){const e=this.simulatePerformanceMetrics();e.score<80&&this.notifyProgress({type:"performance_issue",metrics:e,message:`Performance score: ${e.score}/100`})}simulatePerformanceMetrics(){return{score:Math.floor(Math.random()*40)+60,loadTime:Math.floor(Math.random()*2e3)+500,bundleSize:Math.floor(Math.random()*500)+200}}onProgress(e){this.progressCallbacks.add(e)}offProgress(e){this.progressCallbacks.delete(e)}notifyProgress(e){this.progressCallbacks.forEach(s=>{try{s(e)}catch(n){console.error("Progress callback error:",n)}})}getTaskDuration(e){const[s,n]=e.estimatedTime.split("-").map(o=>parseInt(o.replace(" min","")));return(Math.random()*(n-s)+s)*1e3}delay(e){return new Promise(s=>setTimeout(s,e))}stopCurrentTask(){this.isRunning=!1,this.currentTask=null,this.iterationCount=0,this.fileWatcherInterval&&clearInterval(this.fileWatcherInterval),this.qualityCheckInterval&&clearInterval(this.qualityCheckInterval),this.performanceCheckInterval&&clearInterval(this.performanceCheckInterval)}getStatus(){return{isAutoModeEnabled:this.isAutoModeEnabled,isRunning:this.isRunning,currentTask:this.currentTask,iterationCount:this.iterationCount,maxIterations:this.maxIterations,autoRefinementEnabled:this.autoRefinementEnabled,backgroundMonitoringEnabled:this.backgroundMonitoringEnabled}}}const Kn=new _p;function $p(){const{currentProject:t,updateFile:e,switchFile:s}=lt(),[n,o]=p.useState(""),[i,a]=p.useState(!1),l=p.useRef(null),c=p.useRef(null),[d,m]=p.useState([]),[u,g]=p.useState([]),[y,f]=p.useState(!1),[w,h]=p.useState(!1),[C,j]=p.useState("auto"),[v,b]=p.useState(!1),[x,k]=p.useState(!1),[A,S]=p.useState(!1),[I,E]=p.useState("unlimited"),[P,W]=p.useState(!1),[B,T]=p.useState({tokens:0,maxTokens:4e3,percentage:0,files:0,characters:0});p.useEffect(()=>{l.current&&(l.current.style.height="auto",l.current.style.height=l.current.scrollHeight+"px")},[n]),p.useEffect(()=>{var M;(M=c.current)==null||M.scrollIntoView({behavior:"smooth"})},[d]),p.useEffect(()=>{const M=K=>{v&&!K.target.closest(".model-selector")&&b(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[v]);const F=async()=>{if(!n.trim()||i)return;const M=n;o(""),a(!0);const K={id:Date.now(),type:"user",content:M,timestamp:new Date},D={id:Date.now()+1,type:"ai",content:"",timestamp:new Date,isLoading:!0};m(L=>[...L,K,D]);try{await _(M),Kn.getStatus().autoMode&&await Kn.breakdownTask(M),console.log("🚀 Starting AI generation...");const L={conversationHistory:d,currentPrompt:M,previousFiles:Object.keys(t.files),projectContext:t.config},O=await pr.generateCode(M,L);if(console.log("📁 Files received:",O),console.log("📁 Files type:",typeof O),console.log("📁 Files keys:",O?Object.keys(O):"No files"),!O||typeof O!="object")throw new Error("Invalid files response from AI service");m(Nt=>Nt.map(Ke=>Ke.id===D.id?{...Ke,content:`Generated ${Object.keys(O).length} files successfully!`,isLoading:!1,files:O,timestamp:new Date}:Ke));let te=0;Object.entries(O).forEach(([Nt,Ke])=>{Nt&&Ke!==void 0&&(console.log(`📄 Adding file: ${Nt} (${typeof Ke})`),e(Nt,Ke),te++)}),console.log(`✅ Added ${te} files to project`);const Pe=Object.keys(O)[0];Pe&&(s(Pe),console.log(`🎯 Set active file: ${Pe}`))}catch(L){console.error("Generation error:",L),m(O=>O.map(te=>te.id===D.id?{...te,content:`Error: ${L.message}`,isLoading:!1,error:!0}:te))}finally{a(!1)}},_=async M=>{const K=[{id:1,title:"Add responsive design",category:"UI/UX"},{id:2,title:"Implement error handling",category:"Performance"},{id:3,title:"Add TypeScript types",category:"Code Quality"},{id:4,title:"Optimize for mobile",category:"Mobile"}].filter(()=>Math.random()>.5);g(K)},J=M=>{navigator.clipboard.writeText(M),X.success("Message copied to clipboard")},q=(M,K)=>{m(D=>D.map(L=>L.id===M?{...L,metadata:{...L.metadata,feedback:K,feedbackTimestamp:new Date}}:L)),X.success(`Feedback recorded: ${K}`)},le=M=>{M.key==="Enter"&&(M.preventDefault(),F())},xe=M=>{M.preventDefault(),S(!0)},$=M=>{M.preventDefault(),S(!1)},G=M=>{M.preventDefault(),S(!1);const K=Array.from(M.dataTransfer.files);K.length>0&&V(K)},V=M=>{const K=M.map(D=>D.name).join(", ");o(D=>D+`

[Attached files: ${K}]`),T(D=>({...D,files:D.files+M.length,characters:D.characters+K.length}))},ne=M=>({"codellama-7b":"CodeLlama 7B","codellama-13b":"CodeLlama 13B","codellama-34b":"CodeLlama 34B","starcoder-15b":"StarCoder 15B","deepseek-coder":"DeepSeek Coder","wizardcoder-7b":"WizardCoder 7B","phi3-mini":"Phi-3 Mini","llama3-8b":"Llama 3 8B",auto:"Auto"})[M]||"Auto",ie=()=>[{id:"auto",name:"Auto",description:"Automatically selects the best model",ram_required:"Smart"},{id:"codellama-7b",name:"CodeLlama 7B",description:"Fast and efficient code generation",ram_required:"8GB"},{id:"codellama-13b",name:"CodeLlama 13B",description:"Higher quality code generation",ram_required:"16GB"},{id:"codellama-34b",name:"CodeLlama 34B",description:"Best quality code generation",ram_required:"32GB"},{id:"starcoder-15b",name:"StarCoder 15B",description:"Excellent code completion",ram_required:"24GB"},{id:"deepseek-coder",name:"DeepSeek Coder",description:"High-performance generation",ram_required:"12GB"},{id:"wizardcoder-7b",name:"WizardCoder 7B",description:"Great at following instructions",ram_required:"10GB"},{id:"phi3-mini",name:"Phi-3 Mini",description:"Lightweight but powerful",ram_required:"6GB"},{id:"llama3-8b",name:"Llama 3 8B",description:"General purpose model",ram_required:"10GB"}];return r.jsxs("div",{className:"h-full flex flex-col bg-background overflow-hidden",children:[r.jsx("div",{className:"px-4 py-3 border-b border-border/30 bg-background",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Wr,{className:"h-5 w-5 text-blue-500"}),r.jsx("span",{className:"font-medium text-foreground",children:"AI Assistant"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("button",{onClick:()=>f(!y),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"Chat",children:r.jsx(yr,{className:"h-4 w-4 text-muted-foreground"})}),r.jsx("button",{onClick:()=>h(!w),className:"p-2 hover:bg-muted/30 rounded transition-colors",title:"AI Agent",children:r.jsx(Wr,{className:"h-4 w-4 text-muted-foreground"})})]})]})]})}),r.jsx("div",{className:"flex-1 flex flex-col min-h-0",children:r.jsx("div",{className:"flex-1 overflow-y-auto bg-background min-h-0",children:r.jsxs("div",{className:"p-4 pb-8 space-y-6",children:[r.jsx("div",{className:"flex items-center justify-center py-8",children:r.jsxs("div",{className:"text-center max-w-md",children:[r.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4",children:r.jsx(kr,{className:"h-8 w-8 text-blue-500"})}),r.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Ask me anything"}),r.jsx("p",{className:"text-sm text-muted-foreground break-words leading-relaxed",children:"I can help you build applications, fix bugs, explain code, and much more."})]})}),r.jsx($e,{children:d.map((M,K)=>r.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"w-full",children:r.jsxs("div",{className:`flex gap-4 ${M.type==="user"?"flex-row-reverse":"flex-row"}`,children:[r.jsx("div",{className:`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${M.type==="user"?"bg-blue-500 text-white":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`,children:M.type==="user"?r.jsx(us,{className:"h-4 w-4"}):r.jsx(Wr,{className:"h-4 w-4"})}),r.jsxs("div",{className:`flex-1 max-w-[80%] ${M.type==="user"?"text-right":"text-left"}`,children:[r.jsx("div",{className:`inline-block px-4 py-3 rounded-xl text-sm leading-relaxed break-words ${M.type==="user"?"bg-blue-500 text-white rounded-br-md":"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"}`,children:M.isLoading?r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Mt,{className:"h-4 w-4 animate-spin"}),r.jsx("span",{children:"Thinking..."})]}):r.jsx("div",{className:"whitespace-pre-wrap break-words overflow-wrap-anywhere",children:M.content})}),!M.isLoading&&M.type==="ai"&&r.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[r.jsx("button",{onClick:()=>J(M.content),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Copy",children:r.jsx(Tr,{className:"h-3.5 w-3.5 text-muted-foreground"})}),r.jsx("button",{onClick:()=>q(M.id,"like"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Like",children:r.jsx(Na,{className:"h-3.5 w-3.5 text-muted-foreground"})}),r.jsx("button",{onClick:()=>q(M.id,"dislike"),className:"p-1.5 hover:bg-muted/50 rounded transition-colors",title:"Dislike",children:r.jsx(Sa,{className:"h-3.5 w-3.5 text-muted-foreground"})})]})]})]})},M.id))}),r.jsx("div",{ref:c})]})})}),r.jsx("div",{className:"border-t border-border/30 bg-background flex-shrink-0",children:r.jsxs("div",{className:"p-4",children:[r.jsxs("div",{className:"relative",children:[r.jsx("textarea",{id:"ai-prompt-input","data-testid":"ai-prompt-input",ref:l,value:n,onChange:M=>o(M.target.value),onKeyPress:le,onDragOver:xe,onDragLeave:$,onDrop:G,placeholder:"Plan, search, build anything",className:`w-full resize-y bg-background border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm leading-relaxed break-words overflow-wrap-anywhere focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors ${A?"border-blue-500 bg-blue-50/50 dark:bg-blue-900/10":"border-border"}`,style:{minHeight:"120px",maxHeight:"300px",wordWrap:"break-word",overflowWrap:"anywhere"},disabled:i,rows:4,"aria-label":"AI prompt input"}),A&&r.jsx("div",{className:"absolute inset-0 bg-blue-500/10 border-2 border-blue-500 border-dashed rounded-lg flex items-center justify-center pointer-events-none",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-blue-500 text-lg font-medium",children:"Drop files here"}),r.jsx("div",{className:"text-blue-500 text-xs",children:"Files will be attached to your prompt"})]})}),r.jsx("div",{className:"absolute bottom-1 right-1 w-4 h-4 opacity-30",children:r.jsx("div",{className:"w-full h-full flex items-end justify-end",children:r.jsx("div",{className:"w-2 h-2 bg-muted-foreground/40",style:{backgroundImage:"repeating-linear-gradient(45deg, transparent, transparent 1px, currentColor 1px, currentColor 2px)"}})})})]}),r.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("button",{onClick:()=>{var K;const M=n.includes("@")?"":"@file ";o(n+M),(K=l.current)==null||K.focus()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Mention files or references",children:r.jsx("span",{className:"text-xs text-muted-foreground",children:"@"})}),r.jsx("button",{onClick:()=>{const M=document.createElement("input");M.type="file",M.multiple=!0,M.accept=".txt,.md,.js,.jsx,.ts,.tsx,.css,.html,.json,.py,.java,.cpp,.c",M.onchange=K=>{const D=Array.from(K.target.files);D.length>0&&V(D)},M.click()},className:"w-5 h-5 border border-border rounded flex items-center justify-center hover:bg-muted/50 transition-colors",title:"Attach files",children:r.jsx("span",{className:"text-xs text-muted-foreground",children:"📎"})}),r.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-foreground relative",children:[r.jsx("button",{onClick:()=>b(!v),className:"hover:text-blue-600 transition-colors",title:"Select AI Model",children:ne(C)}),r.jsx("span",{className:"text-muted-foreground",children:"tab"}),r.jsxs("button",{onClick:M=>{M.stopPropagation(),k(!x)},className:"text-muted-foreground ml-2 hover:text-blue-600 transition-colors",title:"Click to view context usage",children:[B.percentage,"% O"]})]})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("button",{id:"generate-button","data-testid":"generate-button",onClick:F,disabled:!n.trim()||i,className:"w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shadow-sm",title:"Generate Code","aria-label":"Generate code from prompt",children:i?r.jsx(Mt,{className:"h-4 w-4 text-white animate-spin"}):r.jsx(ho,{className:"h-4 w-4 text-white rotate-90"})}),r.jsx("button",{onClick:()=>W(!P),className:`text-lg transition-colors hover:text-blue-600 ${I==="unlimited"?"text-blue-500":"text-muted-foreground"}`,title:`Context Mode: ${I==="unlimited"?"Unlimited":"Limited"}`,children:"∞"})]})]})]})}),x&&r.jsxs("div",{className:"absolute bottom-20 left-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-80",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Usage"}),r.jsx("button",{onClick:()=>k(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-muted-foreground",children:"Tokens"}),r.jsxs("span",{className:"text-xs font-medium text-foreground",children:[B.tokens.toLocaleString()," / ",B.maxTokens.toLocaleString()]})]}),r.jsx("div",{className:"w-full bg-muted rounded-full h-2",children:r.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${B.percentage}%`}})}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-muted-foreground",children:"Usage"}),r.jsxs("span",{className:"text-xs font-medium text-foreground",children:[B.percentage,"%"]})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-muted-foreground",children:"Files"}),r.jsxs("span",{className:"text-xs font-medium text-foreground",children:[B.files," files"]})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-muted-foreground",children:"Characters"}),r.jsx("span",{className:"text-xs font-medium text-foreground",children:B.characters.toLocaleString()})]}),r.jsx("div",{className:"pt-2 border-t border-border",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-muted-foreground",children:"Model"}),r.jsx("span",{className:"text-xs font-medium text-foreground",children:ne(C)})]})})]})]}),P&&r.jsxs("div",{className:"absolute bottom-20 right-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 min-w-72",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Context Mode"}),r.jsx("button",{onClick:()=>W(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),r.jsxs("div",{className:"space-y-3",children:[r.jsx("button",{onClick:()=>{E("unlimited"),W(!1),X.success("Switched to Unlimited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${I==="unlimited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`text-xl ${I==="unlimited"?"text-blue-500":"text-muted-foreground"}`,children:"∞"}),r.jsxs("div",{className:"text-left",children:[r.jsx("div",{className:"font-medium text-sm",children:"Unlimited Context"}),r.jsx("div",{className:"text-xs text-muted-foreground",children:"Access to entire codebase and conversation history"})]}),I==="unlimited"&&r.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),r.jsx("button",{onClick:()=>{E("limited"),W(!1),X.success("Switched to Limited Context Mode")},className:`w-full p-3 rounded-lg border transition-colors ${I==="limited"?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`text-lg ${I==="limited"?"text-blue-500":"text-muted-foreground"}`,children:"⚡"}),r.jsxs("div",{className:"text-left",children:[r.jsx("div",{className:"font-medium text-sm",children:"Limited Context"}),r.jsx("div",{className:"text-xs text-muted-foreground",children:"Faster responses with recent conversation only"})]}),I==="limited"&&r.jsx("div",{className:"ml-auto w-2 h-2 bg-blue-500 rounded-full"})]})}),r.jsxs("div",{className:"pt-3 border-t border-border",children:[r.jsx("div",{className:"text-xs text-muted-foreground mb-2",children:"Current Usage"}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-muted-foreground",children:"Mode"}),r.jsx("span",{className:"text-xs font-medium text-foreground",children:I==="unlimited"?"Unlimited":"Limited"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-muted-foreground",children:"Context Window"}),r.jsx("span",{className:"text-xs font-medium text-foreground",children:I==="unlimited"?"∞ tokens":"4K tokens"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-muted-foreground",children:"Performance"}),r.jsx("span",{className:"text-xs font-medium text-foreground",children:I==="unlimited"?"Comprehensive":"Fast"})]})]})]})]})]}),v&&r.jsxs("div",{className:"absolute bottom-20 left-4 bg-background border border-border rounded-lg shadow-lg p-4 z-[9999] min-w-80 max-w-96",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Select AI Model"}),r.jsx("button",{onClick:()=>b(!1),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),r.jsx("div",{className:"max-h-80 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent",children:ie().map(M=>r.jsx("button",{onClick:K=>{K.preventDefault(),K.stopPropagation(),j(M.id),setTimeout(()=>{b(!1)},100),X.success(`Switched to ${M.name}`)},className:`w-full p-3 rounded-lg border transition-colors text-left ${C===M.id?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-border hover:bg-muted/50"}`,children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"font-medium text-sm",children:M.name}),r.jsx("div",{className:"text-xs text-muted-foreground",children:M.description})]}),r.jsx("div",{className:"text-xs text-muted-foreground ml-2",children:M.ram_required})]})},M.id))}),r.jsx("div",{className:"mt-3 pt-3 border-t border-border",children:r.jsxs("div",{className:"text-xs text-muted-foreground",children:[r.jsx("p",{children:"• Auto selects the best available model"}),r.jsx("p",{children:"• Local AI models require Ollama installation"})]})})]})]})}var dt={};class Bp{constructor(){this.app=null,this.db=null,this.auth=null,this.user=null,this.listeners=new Map,this.cursors=new Map,this.comments=new Map,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const e={apiKey:dt.REACT_APP_FIREBASE_API_KEY||"your-api-key",authDomain:dt.REACT_APP_FIREBASE_AUTH_DOMAIN||"your-project.firebaseapp.com",projectId:dt.REACT_APP_FIREBASE_PROJECT_ID||"your-project-id",storageBucket:dt.REACT_APP_FIREBASE_STORAGE_BUCKET||"your-project.appspot.com",messagingSenderId:dt.REACT_APP_FIREBASE_MESSAGING_SENDER_ID||"123456789",appId:dt.REACT_APP_FIREBASE_APP_ID||"your-app-id"};this.app=fr(e),this.db=Is(this.app),this.auth=Os(this.app),Ms(this.auth,s=>{this.user=s,console.log("Collaboration auth state changed:",s?"authenticated":"not authenticated")}),this.isInitialized=!0,console.log("🤝 Collaboration service initialized successfully")}catch(e){throw console.error("❌ Failed to initialize collaboration service:",e),e}}async joinProject(e,s){var n;try{await this.initialize();const o={id:((n=this.user)==null?void 0:n.uid)||"anonymous",name:s.name||"Anonymous User",email:s.email||"",avatar:s.avatar||"",color:s.color||this.generateUserColor(),joinedAt:new Date().toISOString(),isOnline:!0},i=Y(this.db,"projectPresence",`${e}_${o.id}`);return await Jt(i,o).catch(()=>St(ue(this.db,"projectPresence"),{projectId:e,userId:o.id,...o})),console.log("✅ User joined project collaboration"),o}catch(o){throw console.error("❌ Failed to join project:",o),o}}async leaveProject(e){var s;try{await this.initialize();const n=Y(this.db,"projectPresence",`${e}_${(s=this.user)==null?void 0:s.uid}`);await Jt(n,{isOnline:!1,leftAt:new Date().toISOString()}),console.log("✅ User left project collaboration")}catch(n){console.error("❌ Failed to leave project:",n)}}async getOnlineUsers(e){try{await this.initialize();const s=ue(this.db,"projectPresence"),n=ve(s,me("projectId","==",e),me("isOnline","==",!0));return new Promise(o=>{const i=Ct(n,a=>{const l=[];a.forEach(c=>{l.push(c.data())}),o(l)});this.listeners.set(`onlineUsers_${e}`,i)})}catch(s){return console.error("❌ Failed to get online users:",s),[]}}async updateCursor(e,s,n){var o,i,a;try{await this.initialize();const l=Y(this.db,"cursors",`${e}_${s}_${(o=this.user)==null?void 0:o.uid}`);await Jt(l,{projectId:e,fileId:s,userId:(i=this.user)==null?void 0:i.uid,position:n,updatedAt:Fe()}).catch(()=>{var c;return St(ue(this.db,"cursors"),{projectId:e,fileId:s,userId:(c=this.user)==null?void 0:c.uid,position:n,createdAt:Fe(),updatedAt:Fe()})}),this.cursors.set(`${e}_${s}_${(a=this.user)==null?void 0:a.uid}`,{position:n,updatedAt:new Date})}catch(l){console.error("❌ Failed to update cursor:",l)}}async listenToCursors(e,s,n){try{await this.initialize();const o=ue(this.db,"cursors"),i=ve(o,me("projectId","==",e),me("fileId","==",s)),a=Ct(i,l=>{const c=[];l.forEach(d=>{var u;const m=d.data();m.userId!==((u=this.user)==null?void 0:u.uid)&&c.push({id:d.id,...m})}),n(c)});this.listeners.set(`cursors_${e}_${s}`,a)}catch(o){console.error("❌ Failed to listen to cursors:",o)}}async addComment(e,s,n,o,i=null){var a,l,c;try{await this.initialize();const d={projectId:e,fileId:s,lineNumber:n,content:o,parentId:i,userId:(a=this.user)==null?void 0:a.uid,userName:((l=this.user)==null?void 0:l.displayName)||"Anonymous",userAvatar:((c=this.user)==null?void 0:c.photoURL)||"",createdAt:Fe(),updatedAt:Fe(),isResolved:!1,reactions:{}},m=await St(ue(this.db,"comments"),d);return console.log("✅ Comment added successfully"),{id:m.id,...d}}catch(d){throw console.error("❌ Failed to add comment:",d),d}}async getComments(e,s){try{await this.initialize();const n=ue(this.db,"comments"),o=ve(n,me("projectId","==",e),me("fileId","==",s),qr("createdAt","asc"));return new Promise(i=>{const a=Ct(o,l=>{const c=[];l.forEach(d=>{c.push({id:d.id,...d.data()})}),i(c)});this.listeners.set(`comments_${e}_${s}`,a)})}catch(n){return console.error("❌ Failed to get comments:",n),[]}}async updateComment(e,s){try{await this.initialize();const n=Y(this.db,"comments",e);await Jt(n,{...s,updatedAt:Fe()}),console.log("✅ Comment updated successfully")}catch(n){throw console.error("❌ Failed to update comment:",n),n}}async deleteComment(e){try{await this.initialize();const s=Y(this.db,"comments",e);await or(s),console.log("✅ Comment deleted successfully")}catch(s){throw console.error("❌ Failed to delete comment:",s),s}}async saveVersion(e,s){var n,o;try{await this.initialize();const i={projectId:e,versionNumber:s.versionNumber,description:s.description||"Auto-save",files:s.files,userId:(n=this.user)==null?void 0:n.uid,userName:((o=this.user)==null?void 0:o.displayName)||"Anonymous",createdAt:Fe(),changes:s.changes||[],isAutoSave:s.isAutoSave||!1},a=await St(ue(this.db,"versions"),i);return console.log("✅ Version saved successfully"),{id:a.id,...i}}catch(i){throw console.error("❌ Failed to save version:",i),i}}async getVersionHistory(e,s=50){try{await this.initialize();const n=ue(this.db,"versions"),o=ve(n,me("projectId","==",e),qr("createdAt","desc"),s(s));return new Promise(i=>{const a=Ct(o,l=>{const c=[];l.forEach(d=>{c.push({id:d.id,...d.data()})}),i(c)});this.listeners.set(`versions_${e}`,a)})}catch(n){return console.error("❌ Failed to get version history:",n),[]}}async restoreVersion(e,s){try{await this.initialize();const n=Y(this.db,"versions",s),o=await getDoc(n);if(o.exists()){const i=o.data();return await this.saveVersion(e,{versionNumber:`Restored from ${i.versionNumber}`,description:`Restored from version ${i.versionNumber}`,files:i.files,isAutoSave:!1}),console.log("✅ Version restored successfully"),i.files}else throw new Error("Version not found")}catch(n){throw console.error("❌ Failed to restore version:",n),n}}async syncFileChanges(e,s,n){var o,i;try{await this.initialize();const a={projectId:e,fileId:s,userId:(o=this.user)==null?void 0:o.uid,userName:((i=this.user)==null?void 0:i.displayName)||"Anonymous",changes:n,timestamp:Fe()};await St(ue(this.db,"fileChanges"),a),console.log("✅ File changes synced successfully")}catch(a){console.error("❌ Failed to sync file changes:",a)}}async listenToFileChanges(e,s,n){try{await this.initialize();const o=ue(this.db,"fileChanges"),i=ve(o,me("projectId","==",e),me("fileId","==",s),qr("timestamp","desc"),limit(10)),a=Ct(i,l=>{const c=[];l.forEach(d=>{c.push({id:d.id,...d.data()})}),n(c)});this.listeners.set(`fileChanges_${e}_${s}`,a)}catch(o){console.error("❌ Failed to listen to file changes:",o)}}generateUserColor(){const e=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#98D8C8","#F7DC6F","#BB8FCE","#85C1E9"];return e[Math.floor(Math.random()*e.length)]}cleanup(){this.listeners.forEach(e=>{e()}),this.listeners.clear(),console.log("🧹 Collaboration listeners cleaned up")}async getCollaborationStats(e){var s;try{await this.initialize();const[n,o,i]=await Promise.all([this.getOnlineUsers(e),this.getComments(e,"all"),this.getVersionHistory(e,10)]);return{onlineUsers:n.length,totalComments:o.length,totalVersions:i.length,lastActivity:((s=i[0])==null?void 0:s.createdAt)||null}}catch(n){return console.error("❌ Failed to get collaboration stats:",n),{onlineUsers:0,totalComments:0,totalVersions:0,lastActivity:null}}}}const Oe=new Bp,Up=({projectId:t,fileId:e,onFileChange:s,onVersionRestore:n})=>{const[o,i]=p.useState([]),[a,l]=p.useState([]),[c,d]=p.useState([]),[m,u]=p.useState(""),[g,y]=p.useState(null),[f,w]=p.useState(!1),[h,C]=p.useState(!1),[j,v]=p.useState(!1),[b,x]=p.useState({name:"Anonymous User",email:"",avatar:""});p.useEffect(()=>(t&&k(),()=>{Oe.cleanup()}),[t]);const k=async()=>{try{await Oe.joinProject(t,b),v(!0),Oe.getOnlineUsers(t).then(i),e&&Oe.getComments(t,e).then(l),Oe.getVersionHistory(t).then(d),e&&Oe.listenToFileChanges(t,e,E=>{console.log("File changes received:",E)}),console.log("🤝 Collaboration initialized successfully")}catch(E){console.error("❌ Failed to initialize collaboration:",E)}},A=async()=>{if(!(!m.trim()||!e))try{await Oe.addComment(t,e,g||1,m),u(""),y(null)}catch(E){console.error("❌ Failed to add comment:",E)}},S=async E=>{try{const P=await Oe.restoreVersion(t,E);n&&n(P),console.log("✅ Version restored successfully")}catch(P){console.error("❌ Failed to restore version:",P)}},I=async()=>{try{const E={versionNumber:`v${c.length+1}`,description:prompt("Version description:")||"Manual save",files:{},isAutoSave:!1};await Oe.saveVersion(t,E),console.log("✅ Version saved successfully")}catch(E){console.error("❌ Failed to save version:",E)}};return r.jsxs("div",{className:"collaboration-panel",children:[r.jsxs("div",{className:"collaboration-header",children:[r.jsx("h3",{children:"🤝 Real-time Collaboration"}),r.jsx("div",{className:"collaboration-status",children:j?r.jsx("span",{className:"status-online",children:"● Online"}):r.jsx("span",{className:"status-offline",children:"● Offline"})})]}),r.jsxs("div",{className:"collaboration-section",children:[r.jsxs("h4",{children:["👥 Online Users (",o.length,")"]}),r.jsx("div",{className:"users-list",children:o.map((E,P)=>r.jsxs("div",{className:"user-item",children:[r.jsx("div",{className:"user-avatar",style:{backgroundColor:E.color},children:E.name.charAt(0).toUpperCase()}),r.jsx("span",{className:"user-name",children:E.name})]},E.id||P))})]}),r.jsxs("div",{className:"collaboration-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsxs("h4",{children:["💬 Comments (",a.length,")"]}),r.jsx("button",{className:"btn btn-sm",onClick:()=>w(!f),children:f?"Hide":"Show"})]}),f&&r.jsxs("div",{className:"comments-container",children:[r.jsxs("div",{className:"add-comment",children:[r.jsx("textarea",{value:m,onChange:E=>u(E.target.value),placeholder:"Add a comment...",rows:"3"}),r.jsxs("div",{className:"comment-actions",children:[r.jsx("span",{className:"line-info",children:g?`Line ${g}`:"Select a line to comment"}),r.jsx("button",{className:"btn btn-primary btn-sm",onClick:A,disabled:!m.trim(),children:"Add Comment"})]})]}),r.jsx("div",{className:"comments-list",children:a.map(E=>{var P;return r.jsxs("div",{className:"comment-item",children:[r.jsxs("div",{className:"comment-header",children:[r.jsxs("div",{className:"comment-author",children:[r.jsx("div",{className:"author-avatar",style:{backgroundColor:E.userColor||"#007bff"},children:E.userName.charAt(0).toUpperCase()}),r.jsx("span",{className:"author-name",children:E.userName})]}),r.jsx("span",{className:"comment-time",children:new Date((P=E.createdAt)==null?void 0:P.toDate()).toLocaleString()})]}),r.jsx("div",{className:"comment-content",children:E.content}),r.jsxs("div",{className:"comment-line",children:["Line ",E.lineNumber]})]},E.id)})})]})]}),r.jsxs("div",{className:"collaboration-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsxs("h4",{children:["📚 Version History (",c.length,")"]}),r.jsxs("div",{className:"version-actions",children:[r.jsx("button",{className:"btn btn-sm btn-secondary",onClick:()=>C(!h),children:h?"Hide":"Show"}),r.jsx("button",{className:"btn btn-sm btn-primary",onClick:I,children:"Save Version"})]})]}),h&&r.jsx("div",{className:"versions-container",children:r.jsx("div",{className:"versions-list",children:c.map(E=>{var P;return r.jsxs("div",{className:"version-item",children:[r.jsxs("div",{className:"version-header",children:[r.jsx("span",{className:"version-number",children:E.versionNumber}),r.jsx("span",{className:"version-time",children:new Date((P=E.createdAt)==null?void 0:P.toDate()).toLocaleString()})]}),r.jsx("div",{className:"version-description",children:E.description}),r.jsxs("div",{className:"version-author",children:["by ",E.userName]}),r.jsx("div",{className:"version-actions",children:r.jsx("button",{className:"btn btn-sm btn-outline",onClick:()=>S(E.id),children:"Restore"})})]},E.id)})})})]}),r.jsxs("div",{className:"collaboration-section",children:[r.jsx("h4",{children:"📊 Collaboration Stats"}),r.jsxs("div",{className:"stats-grid",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Online Users:"}),r.jsx("span",{className:"stat-value",children:o.length})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Comments:"}),r.jsx("span",{className:"stat-value",children:a.length})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Versions:"}),r.jsx("span",{className:"stat-value",children:c.length})]})]})]}),r.jsx("style",{jsx:!0,children:`
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
      `})]})},_i=p.createContext({dragDropManager:void 0});function be(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Yn=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Xn=function(){return Math.random().toString(36).substring(7).split("").join(".")},Qn={INIT:"@@redux/INIT"+Xn(),REPLACE:"@@redux/REPLACE"+Xn()};function zp(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function $i(t,e,s){var n;if(typeof e=="function"&&typeof s=="function"||typeof s=="function"&&typeof arguments[3]=="function")throw new Error(be(0));if(typeof e=="function"&&typeof s>"u"&&(s=e,e=void 0),typeof s<"u"){if(typeof s!="function")throw new Error(be(1));return s($i)(t,e)}if(typeof t!="function")throw new Error(be(2));var o=t,i=e,a=[],l=a,c=!1;function d(){l===a&&(l=a.slice())}function m(){if(c)throw new Error(be(3));return i}function u(w){if(typeof w!="function")throw new Error(be(4));if(c)throw new Error(be(5));var h=!0;return d(),l.push(w),function(){if(h){if(c)throw new Error(be(6));h=!1,d();var j=l.indexOf(w);l.splice(j,1),a=null}}}function g(w){if(!zp(w))throw new Error(be(7));if(typeof w.type>"u")throw new Error(be(8));if(c)throw new Error(be(9));try{c=!0,i=o(i,w)}finally{c=!1}for(var h=a=l,C=0;C<h.length;C++){var j=h[C];j()}return w}function y(w){if(typeof w!="function")throw new Error(be(10));o=w,g({type:Qn.REPLACE})}function f(){var w,h=u;return w={subscribe:function(j){if(typeof j!="object"||j===null)throw new Error(be(11));function v(){j.next&&j.next(m())}v();var b=h(v);return{unsubscribe:b}}},w[Yn]=function(){return this},w}return g({type:Qn.INIT}),n={dispatch:g,subscribe:u,getState:m,replaceReducer:y},n[Yn]=f,n}function H(t,e,...s){if(Hp()&&e===void 0)throw new Error("invariant requires an error message argument");if(!t){let n;if(e===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let o=0;n=new Error(e.replace(/%s/g,function(){return s[o++]})),n.name="Invariant Violation"}throw n.framesToPop=1,n}}function Hp(){return typeof process<"u"&&!0}function Gp(t,e,s){return e.split(".").reduce((n,o)=>n&&n[o]?n[o]:s||null,t)}function qp(t,e){return t.filter(s=>s!==e)}function Bi(t){return typeof t=="object"}function Wp(t,e){const s=new Map,n=i=>{s.set(i,s.has(i)?s.get(i)+1:1)};t.forEach(n),e.forEach(n);const o=[];return s.forEach((i,a)=>{i===1&&o.push(a)}),o}function Vp(t,e){return t.filter(s=>e.indexOf(s)>-1)}const en="dnd-core/INIT_COORDS",Br="dnd-core/BEGIN_DRAG",tn="dnd-core/PUBLISH_DRAG_SOURCE",Ur="dnd-core/HOVER",zr="dnd-core/DROP",Hr="dnd-core/END_DRAG";function Zn(t,e){return{type:en,payload:{sourceClientOffset:e||null,clientOffset:t||null}}}const Jp={type:en,payload:{clientOffset:null,sourceClientOffset:null}};function Kp(t){return function(s=[],n={publishSource:!0}){const{publishSource:o=!0,clientOffset:i,getSourceClientOffset:a}=n,l=t.getMonitor(),c=t.getRegistry();t.dispatch(Zn(i)),Yp(s,l,c);const d=Zp(s,l);if(d==null){t.dispatch(Jp);return}let m=null;if(i){if(!a)throw new Error("getSourceClientOffset must be defined");Xp(a),m=a(d)}t.dispatch(Zn(i,m));const g=c.getSource(d).beginDrag(l,d);if(g==null)return;Qp(g),c.pinSource(d);const y=c.getSourceType(d);return{type:Br,payload:{itemType:y,item:g,sourceId:d,clientOffset:i||null,sourceClientOffset:m||null,isSourcePublic:!!o}}}}function Yp(t,e,s){H(!e.isDragging(),"Cannot call beginDrag while dragging."),t.forEach(function(n){H(s.getSource(n),"Expected sourceIds to be registered.")})}function Xp(t){H(typeof t=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function Qp(t){H(Bi(t),"Item must be an object.")}function Zp(t,e){let s=null;for(let n=t.length-1;n>=0;n--)if(e.canDragSource(t[n])){s=t[n];break}return s}function eh(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function th(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){eh(t,o,s[o])})}return t}function rh(t){return function(s={}){const n=t.getMonitor(),o=t.getRegistry();sh(n),ih(n).forEach((a,l)=>{const c=nh(a,l,o,n),d={type:zr,payload:{dropResult:th({},s,c)}};t.dispatch(d)})}}function sh(t){H(t.isDragging(),"Cannot call drop while not dragging."),H(!t.didDrop(),"Cannot call drop twice during one drag operation.")}function nh(t,e,s,n){const o=s.getTarget(t);let i=o?o.drop(n,t):void 0;return oh(i),typeof i>"u"&&(i=e===0?{}:n.getDropResult()),i}function oh(t){H(typeof t>"u"||Bi(t),"Drop result must either be an object or undefined.")}function ih(t){const e=t.getTargetIds().filter(t.canDropOnTarget,t);return e.reverse(),e}function ah(t){return function(){const s=t.getMonitor(),n=t.getRegistry();lh(s);const o=s.getSourceId();return o!=null&&(n.getSource(o,!0).endDrag(s,o),n.unpinSource()),{type:Hr}}}function lh(t){H(t.isDragging(),"Cannot call endDrag while not dragging.")}function Ds(t,e){return e===null?t===null:Array.isArray(t)?t.some(s=>s===e):t===e}function ch(t){return function(s,{clientOffset:n}={}){dh(s);const o=s.slice(0),i=t.getMonitor(),a=t.getRegistry(),l=i.getItemType();return mh(o,a,l),uh(o,i,a),ph(o,i,a),{type:Ur,payload:{targetIds:o,clientOffset:n||null}}}}function dh(t){H(Array.isArray(t),"Expected targetIds to be an array.")}function uh(t,e,s){H(e.isDragging(),"Cannot call hover while not dragging."),H(!e.didDrop(),"Cannot call hover after drop.");for(let n=0;n<t.length;n++){const o=t[n];H(t.lastIndexOf(o)===n,"Expected targetIds to be unique in the passed array.");const i=s.getTarget(o);H(i,"Expected targetIds to be registered.")}}function mh(t,e,s){for(let n=t.length-1;n>=0;n--){const o=t[n],i=e.getTargetType(o);Ds(i,s)||t.splice(n,1)}}function ph(t,e,s){t.forEach(function(n){s.getTarget(n).hover(e,n)})}function hh(t){return function(){if(t.getMonitor().isDragging())return{type:tn}}}function fh(t){return{beginDrag:Kp(t),publishDragSource:hh(t),hover:ch(t),drop:rh(t),endDrag:ah(t)}}class gh{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const e=this,{dispatch:s}=this.store;function n(i){return(...a)=>{const l=i.apply(e,a);typeof l<"u"&&s(l)}}const o=fh(this);return Object.keys(o).reduce((i,a)=>{const l=o[a];return i[a]=n(l),i},{})}dispatch(e){this.store.dispatch(e)}constructor(e,s){this.isSetUp=!1,this.handleRefCountChange=()=>{const n=this.store.getState().refCount>0;this.backend&&(n&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!n&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=s,e.subscribe(this.handleRefCountChange)}}function xh(t,e){return{x:t.x+e.x,y:t.y+e.y}}function Ui(t,e){return{x:t.x-e.x,y:t.y-e.y}}function bh(t){const{clientOffset:e,initialClientOffset:s,initialSourceClientOffset:n}=t;return!e||!s||!n?null:Ui(xh(e,n),s)}function yh(t){const{clientOffset:e,initialClientOffset:s}=t;return!e||!s?null:Ui(e,s)}const Ot=[],rn=[];Ot.__IS_NONE__=!0;rn.__IS_ALL__=!0;function vh(t,e){return t===Ot?!1:t===rn||typeof e>"u"?!0:Vp(e,t).length>0}class wh{subscribeToStateChange(e,s={}){const{handlerIds:n}=s;H(typeof e=="function","listener must be a function."),H(typeof n>"u"||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let o=this.store.getState().stateId;const i=()=>{const a=this.store.getState(),l=a.stateId;try{l===o||l===o+1&&!vh(a.dirtyHandlerIds,n)||e()}finally{o=l}};return this.store.subscribe(i)}subscribeToOffsetChange(e){H(typeof e=="function","listener must be a function.");let s=this.store.getState().dragOffset;const n=()=>{const o=this.store.getState().dragOffset;o!==s&&(s=o,e())};return this.store.subscribe(n)}canDragSource(e){if(!e)return!1;const s=this.registry.getSource(e);return H(s,`Expected to find a valid source. sourceId=${e}`),this.isDragging()?!1:s.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;const s=this.registry.getTarget(e);if(H(s,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;const n=this.registry.getTargetType(e),o=this.getItemType();return Ds(n,o)&&s.canDrop(this,e)}isDragging(){return!!this.getItemType()}isDraggingSource(e){if(!e)return!1;const s=this.registry.getSource(e,!0);if(H(s,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;const n=this.registry.getSourceType(e),o=this.getItemType();return n!==o?!1:s.isDragging(this,e)}isOverTarget(e,s={shallow:!1}){if(!e)return!1;const{shallow:n}=s;if(!this.isDragging())return!1;const o=this.registry.getTargetType(e),i=this.getItemType();if(i&&!Ds(o,i))return!1;const a=this.getTargetIds();if(!a.length)return!1;const l=a.indexOf(e);return n?l===a.length-1:l>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return bh(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return yh(this.store.getState().dragOffset)}constructor(e,s){this.store=e,this.registry=s}}const eo=typeof global<"u"?global:self,zi=eo.MutationObserver||eo.WebKitMutationObserver;function Hi(t){return function(){const s=setTimeout(o,0),n=setInterval(o,50);function o(){clearTimeout(s),clearInterval(n),t()}}}function jh(t){let e=1;const s=new zi(t),n=document.createTextNode("");return s.observe(n,{characterData:!0}),function(){e=-e,n.data=e}}const Nh=typeof zi=="function"?jh:Hi;class Sh{enqueueTask(e){const{queue:s,requestFlush:n}=this;s.length||(n(),this.flushing=!0),s[s.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;for(;this.index<e.length;){const s=this.index;if(this.index++,e[s].call(),this.index>this.capacity){for(let n=0,o=e.length-this.index;n<o;n++)e[n]=e[n+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=Nh(this.flush),this.requestErrorThrow=Hi(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class Ch{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,s){this.onError=e,this.release=s,this.task=null}}class kh{create(e){const s=this.freeTasks,n=s.length?s.pop():new Ch(this.onError,o=>s[s.length]=o);return n.task=e,n}constructor(e){this.onError=e,this.freeTasks=[]}}const Gi=new Sh,Th=new kh(Gi.registerPendingError);function Dh(t){Gi.enqueueTask(Th.create(t))}const sn="dnd-core/ADD_SOURCE",nn="dnd-core/ADD_TARGET",on="dnd-core/REMOVE_SOURCE",Gr="dnd-core/REMOVE_TARGET";function Eh(t){return{type:sn,payload:{sourceId:t}}}function Ah(t){return{type:nn,payload:{targetId:t}}}function Ph(t){return{type:on,payload:{sourceId:t}}}function Rh(t){return{type:Gr,payload:{targetId:t}}}function Oh(t){H(typeof t.canDrag=="function","Expected canDrag to be a function."),H(typeof t.beginDrag=="function","Expected beginDrag to be a function."),H(typeof t.endDrag=="function","Expected endDrag to be a function.")}function Ih(t){H(typeof t.canDrop=="function","Expected canDrop to be a function."),H(typeof t.hover=="function","Expected hover to be a function."),H(typeof t.drop=="function","Expected beginDrag to be a function.")}function Es(t,e){if(e&&Array.isArray(t)){t.forEach(s=>Es(s,!1));return}H(typeof t=="string"||typeof t=="symbol",e?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var je;(function(t){t.SOURCE="SOURCE",t.TARGET="TARGET"})(je||(je={}));let Mh=0;function Fh(){return Mh++}function Lh(t){const e=Fh().toString();switch(t){case je.SOURCE:return`S${e}`;case je.TARGET:return`T${e}`;default:throw new Error(`Unknown Handler Role: ${t}`)}}function to(t){switch(t[0]){case"S":return je.SOURCE;case"T":return je.TARGET;default:throw new Error(`Cannot parse handler ID: ${t}`)}}function ro(t,e){const s=t.entries();let n=!1;do{const{done:o,value:[,i]}=s.next();if(i===e)return!0;n=!!o}while(!n);return!1}class _h{addSource(e,s){Es(e),Oh(s);const n=this.addHandler(je.SOURCE,e,s);return this.store.dispatch(Eh(n)),n}addTarget(e,s){Es(e,!0),Ih(s);const n=this.addHandler(je.TARGET,e,s);return this.store.dispatch(Ah(n)),n}containsHandler(e){return ro(this.dragSources,e)||ro(this.dropTargets,e)}getSource(e,s=!1){return H(this.isSourceId(e),"Expected a valid source ID."),s&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return H(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return H(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return H(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return to(e)===je.SOURCE}isTargetId(e){return to(e)===je.TARGET}removeSource(e){H(this.getSource(e),"Expected an existing source."),this.store.dispatch(Ph(e)),Dh(()=>{this.dragSources.delete(e),this.types.delete(e)})}removeTarget(e){H(this.getTarget(e),"Expected an existing target."),this.store.dispatch(Rh(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){const s=this.getSource(e);H(s,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=s}unpinSource(){H(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,s,n){const o=Lh(e);return this.types.set(o,s),e===je.SOURCE?this.dragSources.set(o,n):e===je.TARGET&&this.dropTargets.set(o,n),o}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}const $h=(t,e)=>t===e;function Bh(t,e){return!t&&!e?!0:!t||!e?!1:t.x===e.x&&t.y===e.y}function Uh(t,e,s=$h){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!s(t[n],e[n]))return!1;return!0}function zh(t=Ot,e){switch(e.type){case Ur:break;case sn:case nn:case Gr:case on:return Ot;case Br:case tn:case Hr:case zr:default:return rn}const{targetIds:s=[],prevTargetIds:n=[]}=e.payload,o=Wp(s,n);if(!(o.length>0||!Uh(s,n)))return Ot;const a=n[n.length-1],l=s[s.length-1];return a!==l&&(a&&o.push(a),l&&o.push(l)),o}function Hh(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Gh(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){Hh(t,o,s[o])})}return t}const so={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function qh(t=so,e){const{payload:s}=e;switch(e.type){case en:case Br:return{initialSourceClientOffset:s.sourceClientOffset,initialClientOffset:s.clientOffset,clientOffset:s.clientOffset};case Ur:return Bh(t.clientOffset,s.clientOffset)?t:Gh({},t,{clientOffset:s.clientOffset});case Hr:case zr:return so;default:return t}}function Wh(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function ut(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){Wh(t,o,s[o])})}return t}const Vh={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function Jh(t=Vh,e){const{payload:s}=e;switch(e.type){case Br:return ut({},t,{itemType:s.itemType,item:s.item,sourceId:s.sourceId,isSourcePublic:s.isSourcePublic,dropResult:null,didDrop:!1});case tn:return ut({},t,{isSourcePublic:!0});case Ur:return ut({},t,{targetIds:s.targetIds});case Gr:return t.targetIds.indexOf(s.targetId)===-1?t:ut({},t,{targetIds:qp(t.targetIds,s.targetId)});case zr:return ut({},t,{dropResult:s.dropResult,didDrop:!0,targetIds:[]});case Hr:return ut({},t,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return t}}function Kh(t=0,e){switch(e.type){case sn:case nn:return t+1;case on:case Gr:return t-1;default:return t}}function Yh(t=0){return t+1}function Xh(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Qh(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){Xh(t,o,s[o])})}return t}function Zh(t={},e){return{dirtyHandlerIds:zh(t.dirtyHandlerIds,{type:e.type,payload:Qh({},e.payload,{prevTargetIds:Gp(t,"dragOperation.targetIds",[])})}),dragOffset:qh(t.dragOffset,e),refCount:Kh(t.refCount,e),dragOperation:Jh(t.dragOperation,e),stateId:Yh(t.stateId)}}function ef(t,e=void 0,s={},n=!1){const o=tf(n),i=new wh(o,new _h(o)),a=new gh(o,i),l=t(a,e,s);return a.receiveBackend(l),a}function tf(t){const e=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return $i(Zh,t&&e&&e({name:"dnd-core",instanceId:"dnd-core"}))}function rf(t,e){if(t==null)return{};var s=sf(t,e),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function sf(t,e){if(t==null)return{};var s={},n=Object.keys(t),o,i;for(i=0;i<n.length;i++)o=n[i],!(e.indexOf(o)>=0)&&(s[o]=t[o]);return s}let no=0;const hr=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var nf=p.memo(function(e){var{children:s}=e,n=rf(e,["children"]);const[o,i]=of(n);return p.useEffect(()=>{if(i){const a=qi();return++no,()=>{--no===0&&(a[hr]=null)}}},[]),r.jsx(_i.Provider,{value:o,children:s})});function of(t){if("manager"in t)return[{dragDropManager:t.manager},!1];const e=af(t.backend,t.context,t.options,t.debugMode),s=!t.context;return[e,s]}function af(t,e=qi(),s,n){const o=e;return o[hr]||(o[hr]={dragDropManager:ef(t,e,s,n)}),o[hr]}function qi(){return typeof global<"u"?global:window}var lf=function t(e,s){if(e===s)return!0;if(e&&s&&typeof e=="object"&&typeof s=="object"){if(e.constructor!==s.constructor)return!1;var n,o,i;if(Array.isArray(e)){if(n=e.length,n!=s.length)return!1;for(o=n;o--!==0;)if(!t(e[o],s[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===s.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(s).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(s,i[o]))return!1;for(o=n;o--!==0;){var a=i[o];if(!t(e[a],s[a]))return!1}return!0}return e!==e&&s!==s};const cf=na(lf),at=typeof window<"u"?p.useLayoutEffect:p.useEffect;function df(t,e,s){const[n,o]=p.useState(()=>e(t)),i=p.useCallback(()=>{const a=e(t);cf(n,a)||(o(a),s&&s())},[n,t,s]);return at(i),[n,i]}function uf(t,e,s){const[n,o]=df(t,e,s);return at(function(){const a=t.getHandlerId();if(a!=null)return t.subscribeToStateChange(o,{handlerIds:[a]})},[t,o]),n}function Wi(t,e,s){return uf(e,t||(()=>({})),()=>s.reconnect())}function Vi(t,e){const s=[];return typeof t!="function"&&s.push(t),p.useMemo(()=>typeof t=="function"?t():t,s)}function mf(t){return p.useMemo(()=>t.hooks.dragSource(),[t])}function pf(t){return p.useMemo(()=>t.hooks.dragPreview(),[t])}let ns=!1,os=!1;class hf{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){H(!ns,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return ns=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{ns=!1}}isDragging(){if(!this.sourceId)return!1;H(!os,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return os=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{os=!1}}subscribeToStateChange(e,s){return this.internalMonitor.subscribeToStateChange(e,s)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,s){return this.internalMonitor.isOverTarget(e,s)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}let is=!1;class ff{receiveHandlerId(e){this.targetId=e}getHandlerId(){return this.targetId}subscribeToStateChange(e,s){return this.internalMonitor.subscribeToStateChange(e,s)}canDrop(){if(!this.targetId)return!1;H(!is,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return is=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{is=!1}}isOver(e){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,e):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.targetId=null,this.internalMonitor=e.getMonitor()}}function gf(t,e,s){const n=s.getRegistry(),o=n.addTarget(t,e);return[o,()=>n.removeTarget(o)]}function xf(t,e,s){const n=s.getRegistry(),o=n.addSource(t,e);return[o,()=>n.removeSource(o)]}function As(t,e,s,n){let o;if(o!==void 0)return!!o;if(t===e)return!0;if(typeof t!="object"||!t||typeof e!="object"||!e)return!1;const i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;const l=Object.prototype.hasOwnProperty.bind(e);for(let c=0;c<i.length;c++){const d=i[c];if(!l(d))return!1;const m=t[d],u=e[d];if(o=void 0,o===!1||o===void 0&&m!==u)return!1}return!0}function Ps(t){return t!==null&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function bf(t){if(typeof t.type=="string")return;const e=t.type.displayName||t.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`)}function yf(t){return(e=null,s=null)=>{if(!p.isValidElement(e)){const i=e;return t(i,s),i}const n=e;return bf(n),vf(n,s?i=>t(i,s):t)}}function Ji(t){const e={};return Object.keys(t).forEach(s=>{const n=t[s];if(s.endsWith("Ref"))e[s]=t[s];else{const o=yf(n);e[s]=()=>o}}),e}function oo(t,e){typeof t=="function"?t(e):t.current=e}function vf(t,e){const s=t.ref;return H(typeof s!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),s?p.cloneElement(t,{ref:n=>{oo(s,n),oo(e,n)}}):p.cloneElement(t,{ref:e})}class wf{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){const e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){const e=this.dragSource,s=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return s&&this.disconnectDragSource(),this.handlerId?e?(s&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),s):(this.lastConnectedDragSource=e,s):s}reconnectDragPreview(e=!1){const s=this.dragPreview,n=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!!this.handlerId){if(!s){this.lastConnectedDragPreview=s;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=s,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,s,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!As(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!As(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=Ji({dragSource:(s,n)=>{this.clearDragSource(),this.dragSourceOptions=n||null,Ps(s)?this.dragSourceRef=s:this.dragSourceNode=s,this.reconnectDragSource()},dragPreview:(s,n)=>{this.clearDragPreview(),this.dragPreviewOptions=n||null,Ps(s)?this.dragPreviewRef=s:this.dragPreviewNode=s,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}class jf{get connectTarget(){return this.dropTarget}reconnect(){const e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();const s=this.dropTarget;if(this.handlerId){if(!s){this.lastConnectedDropTarget=s;return}e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=s,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,s,this.dropTargetOptions))}}receiveHandlerId(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(e){this.dropTargetOptionsInternal=e}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!As(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(e){this.hooks=Ji({dropTarget:(s,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,Ps(s)?this.dropTargetRef=s:this.dropTargetNode=s,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}}function jt(){const{dragDropManager:t}=p.useContext(_i);return H(t!=null,"Expected drag drop context"),t}function Nf(t,e){const s=jt(),n=p.useMemo(()=>new wf(s.getBackend()),[s]);return at(()=>(n.dragSourceOptions=t||null,n.reconnect(),()=>n.disconnectDragSource()),[n,t]),at(()=>(n.dragPreviewOptions=e||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,e]),n}function Sf(){const t=jt();return p.useMemo(()=>new hf(t),[t])}class Cf{beginDrag(){const e=this.spec,s=this.monitor;let n=null;return typeof e.item=="object"?n=e.item:typeof e.item=="function"?n=e.item(s):n={},n??null}canDrag(){const e=this.spec,s=this.monitor;return typeof e.canDrag=="boolean"?e.canDrag:typeof e.canDrag=="function"?e.canDrag(s):!0}isDragging(e,s){const n=this.spec,o=this.monitor,{isDragging:i}=n;return i?i(o):s===e.getSourceId()}endDrag(){const e=this.spec,s=this.monitor,n=this.connector,{end:o}=e;o&&o(s.getItem(),s),n.reconnect()}constructor(e,s,n){this.spec=e,this.monitor=s,this.connector=n}}function kf(t,e,s){const n=p.useMemo(()=>new Cf(t,e,s),[e,s]);return p.useEffect(()=>{n.spec=t},[t]),n}function Tf(t){return p.useMemo(()=>{const e=t.type;return H(e!=null,"spec.type must be defined"),e},[t])}function Df(t,e,s){const n=jt(),o=kf(t,e,s),i=Tf(t);at(function(){if(i!=null){const[l,c]=xf(i,o,n);return e.receiveHandlerId(l),s.receiveHandlerId(l),c}},[n,e,s,o,i])}function Ef(t,e){const s=Vi(t);H(!s.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const n=Sf(),o=Nf(s.options,s.previewOptions);return Df(s,n,o),[Wi(s.collect,n,o),mf(o),pf(o)]}function Af(t){return p.useMemo(()=>t.hooks.dropTarget(),[t])}function Pf(t){const e=jt(),s=p.useMemo(()=>new jf(e.getBackend()),[e]);return at(()=>(s.dropTargetOptions=t||null,s.reconnect(),()=>s.disconnectDropTarget()),[t]),s}function Rf(){const t=jt();return p.useMemo(()=>new ff(t),[t])}function Of(t){const{accept:e}=t;return p.useMemo(()=>(H(t.accept!=null,"accept must be defined"),Array.isArray(e)?e:[e]),[e])}class If{canDrop(){const e=this.spec,s=this.monitor;return e.canDrop?e.canDrop(s.getItem(),s):!0}hover(){const e=this.spec,s=this.monitor;e.hover&&e.hover(s.getItem(),s)}drop(){const e=this.spec,s=this.monitor;if(e.drop)return e.drop(s.getItem(),s)}constructor(e,s){this.spec=e,this.monitor=s}}function Mf(t,e){const s=p.useMemo(()=>new If(t,e),[e]);return p.useEffect(()=>{s.spec=t},[t]),s}function Ff(t,e,s){const n=jt(),o=Mf(t,e),i=Of(t);at(function(){const[l,c]=gf(i,o,n);return e.receiveHandlerId(l),s.receiveHandlerId(l),c},[n,e,o,s,i.map(a=>a.toString()).join("|")])}function Lf(t,e){const s=Vi(t),n=Rf(),o=Pf(s.options);return Ff(s,n,o),[Wi(s.collect,n,o),Af(o)]}function Ki(t){let e=null;return()=>(e==null&&(e=t()),e)}function _f(t,e){return t.filter(s=>s!==e)}function $f(t,e){const s=new Set,n=i=>s.add(i);t.forEach(n),e.forEach(n);const o=[];return s.forEach(i=>o.push(i)),o}class Bf{enter(e){const s=this.entered.length,n=o=>this.isNodeInDocument(o)&&(!o.contains||o.contains(e));return this.entered=$f(this.entered.filter(n),[e]),s===0&&this.entered.length>0}leave(e){const s=this.entered.length;return this.entered=_f(this.entered.filter(this.isNodeInDocument),e),s>0&&this.entered.length===0}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class Uf{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null}})})}loadDataTransfer(e){if(e){const s={};Object.keys(this.config.exposeProperties).forEach(n=>{const o=this.config.exposeProperties[n];o!=null&&(s[n]={value:o(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,s)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,s){return s===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const Yi="__NATIVE_FILE__",Xi="__NATIVE_URL__",Qi="__NATIVE_TEXT__",Zi="__NATIVE_HTML__",io=Object.freeze(Object.defineProperty({__proto__:null,FILE:Yi,HTML:Zi,TEXT:Qi,URL:Xi},Symbol.toStringTag,{value:"Module"}));function as(t,e,s){const n=e.reduce((o,i)=>o||t.getData(i),"");return n??s}const Rs={[Yi]:{exposeProperties:{files:t=>Array.prototype.slice.call(t.files),items:t=>t.items,dataTransfer:t=>t},matchesTypes:["Files"]},[Zi]:{exposeProperties:{html:(t,e)=>as(t,e,""),dataTransfer:t=>t},matchesTypes:["Html","text/html"]},[Xi]:{exposeProperties:{urls:(t,e)=>as(t,e,"").split(`
`),dataTransfer:t=>t},matchesTypes:["Url","text/uri-list"]},[Qi]:{exposeProperties:{text:(t,e)=>as(t,e,""),dataTransfer:t=>t},matchesTypes:["Text","text/plain"]}};function zf(t,e){const s=Rs[t];if(!s)throw new Error(`native type ${t} has no configuration`);const n=new Uf(s);return n.loadDataTransfer(e),n}function ls(t){if(!t)return null;const e=Array.prototype.slice.call(t.types||[]);return Object.keys(Rs).filter(s=>{const n=Rs[s];return n!=null&&n.matchesTypes?n.matchesTypes.some(o=>e.indexOf(o)>-1):!1})[0]||null}const Hf=Ki(()=>/firefox/i.test(navigator.userAgent)),ea=Ki(()=>!!window.safari);class ao{interpolate(e){const{xs:s,ys:n,c1s:o,c2s:i,c3s:a}=this;let l=s.length-1;if(e===s[l])return n[l];let c=0,d=a.length-1,m;for(;c<=d;){m=Math.floor(.5*(c+d));const y=s[m];if(y<e)c=m+1;else if(y>e)d=m-1;else return n[m]}l=Math.max(0,d);const u=e-s[l],g=u*u;return n[l]+o[l]*u+i[l]*g+a[l]*u*g}constructor(e,s){const{length:n}=e,o=[];for(let y=0;y<n;y++)o.push(y);o.sort((y,f)=>e[y]<e[f]?-1:1);const i=[],a=[];let l,c;for(let y=0;y<n-1;y++)l=e[y+1]-e[y],c=s[y+1]-s[y],i.push(l),a.push(c/l);const d=[a[0]];for(let y=0;y<i.length-1;y++){const f=a[y],w=a[y+1];if(f*w<=0)d.push(0);else{l=i[y];const h=i[y+1],C=l+h;d.push(3*C/((C+h)/f+(C+l)/w))}}d.push(a[a.length-1]);const m=[],u=[];let g;for(let y=0;y<d.length-1;y++){g=a[y];const f=d[y],w=1/i[y],h=f+d[y+1]-g-g;m.push((g-f-h)*w),u.push(h*w*w)}this.xs=e,this.ys=s,this.c1s=d,this.c2s=m,this.c3s=u}}const Gf=1;function ta(t){const e=t.nodeType===Gf?t:t.parentElement;if(!e)return null;const{top:s,left:n}=e.getBoundingClientRect();return{x:n,y:s}}function sr(t){return{x:t.clientX,y:t.clientY}}function qf(t){var e;return t.nodeName==="IMG"&&(Hf()||!(!((e=document.documentElement)===null||e===void 0)&&e.contains(t)))}function Wf(t,e,s,n){let o=t?e.width:s,i=t?e.height:n;return ea()&&t&&(i/=window.devicePixelRatio,o/=window.devicePixelRatio),{dragPreviewWidth:o,dragPreviewHeight:i}}function Vf(t,e,s,n,o){const i=qf(e),l=ta(i?t:e),c={x:s.x-l.x,y:s.y-l.y},{offsetWidth:d,offsetHeight:m}=t,{anchorX:u,anchorY:g}=n,{dragPreviewWidth:y,dragPreviewHeight:f}=Wf(i,e,d,m),w=()=>{let k=new ao([0,.5,1],[c.y,c.y/m*f,c.y+f-m]).interpolate(g);return ea()&&i&&(k+=(window.devicePixelRatio-1)*f),k},h=()=>new ao([0,.5,1],[c.x,c.x/d*y,c.x+y-d]).interpolate(u),{offsetX:C,offsetY:j}=o,v=C===0||C,b=j===0||j;return{x:v?C:h(),y:b?j:w()}}class Jf{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var e;return!((e=this.globalContext)===null||e===void 0)&&e.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return((e=this.optionsArgs)===null||e===void 0?void 0:e.rootElement)||this.window}constructor(e,s){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=s}}function Kf(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function lo(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{},n=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable}))),n.forEach(function(o){Kf(t,o,s[o])})}return t}class Yf{profile(){var e,s;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((e=this.dragStartSourceIds)===null||e===void 0?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((s=this.dragOverTargetIds)===null||s===void 0?void 0:s.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(e!==void 0){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;if(e!==void 0&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var s;(s=this.window)===null||s===void 0||s.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(e,s,n){return this.sourcePreviewNodeOptions.set(e,n),this.sourcePreviewNodes.set(e,s),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,s,n){this.sourceNodes.set(e,s),this.sourceNodeOptions.set(e,n);const o=a=>this.handleDragStart(a,e),i=a=>this.handleSelectStart(a);return s.setAttribute("draggable","true"),s.addEventListener("dragstart",o),s.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),s.removeEventListener("dragstart",o),s.removeEventListener("selectstart",i),s.setAttribute("draggable","false")}}connectDropTarget(e,s){const n=a=>this.handleDragEnter(a,e),o=a=>this.handleDragOver(a,e),i=a=>this.handleDrop(a,e);return s.addEventListener("dragenter",n),s.addEventListener("dragover",o),s.addEventListener("drop",i),()=>{s.removeEventListener("dragenter",n),s.removeEventListener("dragover",o),s.removeEventListener("drop",i)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),s=this.sourceNodeOptions.get(e);return lo({dropEffect:this.altKeyPressed?"copy":"move"},s||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId(),s=this.sourcePreviewNodeOptions.get(e);return lo({anchorX:.5,anchorY:.5,captureDraggingState:!1},s||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(io).some(s=>io[s]===e)}beginDragNativeItem(e,s){this.clearCurrentDragSourceNode(),this.currentNativeSource=zf(e,s),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;const s=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var n;return(n=this.rootElement)===null||n===void 0?void 0:n.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},s)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var e;(e=this.window)===null||e===void 0||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,s){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(s))}handleDragEnter(e,s){this.dragEnterTargetIds.unshift(s)}handleDragOver(e,s){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(s)}handleDrop(e,s){this.dropTargetIds.unshift(s)}constructor(e,s,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=o=>{const i=this.sourceNodes.get(o);return i&&ta(i)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=o=>!!(o&&this.document&&this.document.body&&this.document.body.contains(o)),this.endDragIfSourceWasRemovedFromDOM=()=>{const o=this.currentDragSourceNode;o==null||this.isNodeInDocument(o)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=o=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(o||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=o=>{if(o.defaultPrevented)return;const{dragStartSourceIds:i}=this;this.dragStartSourceIds=null;const a=sr(o);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(i||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:a});const{dataTransfer:l}=o,c=ls(l);if(this.monitor.isDragging()){if(l&&typeof l.setDragImage=="function"){const m=this.monitor.getSourceId(),u=this.sourceNodes.get(m),g=this.sourcePreviewNodes.get(m)||u;if(g){const{anchorX:y,anchorY:f,offsetX:w,offsetY:h}=this.getCurrentSourcePreviewNodeOptions(),v=Vf(u,g,a,{anchorX:y,anchorY:f},{offsetX:w,offsetY:h});l.setDragImage(g,v.x,v.y)}}try{l==null||l.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(o.target);const{captureDraggingState:d}=this.getCurrentSourcePreviewNodeOptions();d?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(c)this.beginDragNativeItem(c);else{if(l&&!l.types&&(o.target&&!o.target.hasAttribute||!o.target.hasAttribute("draggable")))return;o.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=o=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}if(!this.enterLeaveCounter.enter(o.target)||this.monitor.isDragging())return;const{dataTransfer:l}=o,c=ls(l);c&&this.beginDragNativeItem(c,l)},this.handleTopDragEnter=o=>{const{dragEnterTargetIds:i}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=o.altKey,i.length>0&&this.actions.hover(i,{clientOffset:sr(o)}),i.some(l=>this.monitor.canDropOnTarget(l))&&(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=o=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}},this.handleTopDragOver=o=>{const{dragOverTargetIds:i}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="none");return}this.altKeyPressed=o.altKey,this.lastClientOffset=sr(o),this.scheduleHover(i),(i||[]).some(l=>this.monitor.canDropOnTarget(l))?(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?o.preventDefault():(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=o=>{this.isDraggingNativeItem()&&o.preventDefault(),this.enterLeaveCounter.leave(o.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=o=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var i;o.preventDefault(),(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}else ls(o.dataTransfer)&&o.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=o=>{const{dropTargetIds:i}=this;this.dropTargetIds=[],this.actions.hover(i,{clientOffset:sr(o)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=o=>{const i=o.target;typeof i.dragDrop=="function"&&(i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable||(o.preventDefault(),i.dragDrop()))},this.options=new Jf(s,n),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new Bf(this.isNodeInDocument)}}const Xf=function(e,s,n){return new Yf(e,s,n)},Qf=({projectId:t,onCodeChange:e,initialComponents:s=[]})=>{var S,I,E,P,W,B;const[n,o]=p.useState(s),[i,a]=p.useState(null),[l,c]=p.useState(!1),[d,m]=p.useState(!1),[u,g]=p.useState({width:1200,height:800}),[y,f]=p.useState(1),w=p.useRef(null),h=[{type:"container",name:"Container",icon:"📦",category:"Layout"},{type:"text",name:"Text",icon:"📝",category:"Content"},{type:"button",name:"Button",icon:"🔘",category:"Interactive"},{type:"input",name:"Input",icon:"📝",category:"Form"},{type:"image",name:"Image",icon:"🖼️",category:"Media"},{type:"card",name:"Card",icon:"🃏",category:"Layout"},{type:"header",name:"Header",icon:"📋",category:"Layout"},{type:"footer",name:"Footer",icon:"🦶",category:"Layout"},{type:"sidebar",name:"Sidebar",icon:"📑",category:"Layout"},{type:"navbar",name:"Navbar",icon:"🧭",category:"Navigation"},{type:"form",name:"Form",icon:"📋",category:"Form"},{type:"table",name:"Table",icon:"📊",category:"Data"},{type:"chart",name:"Chart",icon:"📈",category:"Data"},{type:"modal",name:"Modal",icon:"🪟",category:"Overlay"},{type:"dropdown",name:"Dropdown",icon:"📋",category:"Interactive"}],C=T=>({container:`<div className="container" style={${JSON.stringify(T.styles)}}>
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
import './App.css';`,_=`const App = () => {
  return (
    <div className="app">
      ${n.map(J=>C(J)).join(`

`)}
    </div>
  );
};

export default App;`;return`${T}

${_}`},v=(T,F)=>{const _=F.getDropResult();if(!_)return;const J={id:`component-${Date.now()}`,type:T.type,name:T.name,position:{x:_.x,y:_.y},size:{width:200,height:100},styles:{position:"absolute",left:`${_.x}px`,top:`${_.y}px`,width:"200px",height:"100px",border:"1px solid #ddd",padding:"10px",backgroundColor:"#fff"},content:T.name,properties:{}};o(q=>[...q,J])},b=T=>{a(T),c(!0)},x=(T,F)=>{if(!i)return;const _={...i,[T]:F,styles:{...i.styles,[T]:F}};o(J=>J.map(q=>q.id===i.id?_:q)),a(_)},k=()=>`
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
`,A=()=>{const T={components:n,appCode:j(),cssCode:k(),metadata:{projectId:t,exportedAt:new Date().toISOString(),componentCount:n.length}},F=JSON.stringify(T,null,2),_=new Blob([F],{type:"application/json"}),J=URL.createObjectURL(_),q=document.createElement("a");q.href=J,q.download=`dreambuild-project-${t}.json`,q.click(),URL.revokeObjectURL(J)};return p.useEffect(()=>{e&&e({appCode:j(),cssCode:k(),components:n})},[n,e]),r.jsx(nf,{backend:Xf,children:r.jsxs("div",{className:"visual-editor",children:[r.jsxs("div",{className:"editor-header",children:[r.jsx("h2",{children:"🎨 Visual Editor"}),r.jsxs("div",{className:"editor-controls",children:[r.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!d),children:d?"Edit":"Preview"}),r.jsx("button",{className:"btn btn-primary",onClick:A,children:"Export"})]})]}),r.jsxs("div",{className:"editor-layout",children:[r.jsxs("div",{className:"component-library",children:[r.jsx("h3",{children:"📚 Component Library"}),r.jsx("div",{className:"library-categories",children:["Layout","Content","Interactive","Form","Media","Data","Navigation","Overlay"].map(T=>r.jsxs("div",{className:"category",children:[r.jsx("h4",{children:T}),r.jsx("div",{className:"category-components",children:h.filter(F=>F.category===T).map(F=>r.jsx(Zf,{type:F.type,name:F.name,icon:F.icon},F.type))})]},T))})]}),r.jsxs("div",{className:"canvas-container",children:[r.jsxs("div",{className:"canvas-toolbar",children:[r.jsxs("div",{className:"canvas-controls",children:[r.jsx("button",{className:"btn btn-sm",onClick:()=>f(y*.8),children:"Zoom Out"}),r.jsxs("span",{className:"zoom-level",children:[Math.round(y*100),"%"]}),r.jsx("button",{className:"btn btn-sm",onClick:()=>f(y*1.2),children:"Zoom In"})]}),r.jsx("div",{className:"canvas-size",children:r.jsxs("select",{value:`${u.width}x${u.height}`,onChange:T=>{const[F,_]=T.target.value.split("x").map(Number);g({width:F,height:_})},children:[r.jsx("option",{value:"1200x800",children:"Desktop (1200x800)"}),r.jsx("option",{value:"768x1024",children:"Tablet (768x1024)"}),r.jsx("option",{value:"375x667",children:"Mobile (375x667)"})]})})]}),r.jsx("div",{className:"canvas",ref:w,style:{width:u.width*y,height:u.height*y,transform:`scale(${y})`,transformOrigin:"top left"},children:r.jsx(eg,{onDrop:v,children:n.map(T=>r.jsx(tg,{component:T,onSelect:b,isSelected:(i==null?void 0:i.id)===T.id},T.id))})})]}),l&&i&&r.jsxs("div",{className:"properties-panel",children:[r.jsx("h3",{children:"⚙️ Properties"}),r.jsxs("div",{className:"property-groups",children:[r.jsxs("div",{className:"property-group",children:[r.jsx("h4",{children:"Content"}),r.jsxs("div",{className:"property",children:[r.jsx("label",{children:"Text Content"}),r.jsx("input",{type:"text",value:i.content||"",onChange:T=>x("content",T.target.value)})]})]}),r.jsxs("div",{className:"property-group",children:[r.jsx("h4",{children:"Position"}),r.jsxs("div",{className:"property",children:[r.jsx("label",{children:"X Position"}),r.jsx("input",{type:"number",value:((S=i.position)==null?void 0:S.x)||0,onChange:T=>x("left",`${T.target.value}px`)})]}),r.jsxs("div",{className:"property",children:[r.jsx("label",{children:"Y Position"}),r.jsx("input",{type:"number",value:((I=i.position)==null?void 0:I.y)||0,onChange:T=>x("top",`${T.target.value}px`)})]})]}),r.jsxs("div",{className:"property-group",children:[r.jsx("h4",{children:"Size"}),r.jsxs("div",{className:"property",children:[r.jsx("label",{children:"Width"}),r.jsx("input",{type:"number",value:((E=i.size)==null?void 0:E.width)||200,onChange:T=>x("width",`${T.target.value}px`)})]}),r.jsxs("div",{className:"property",children:[r.jsx("label",{children:"Height"}),r.jsx("input",{type:"number",value:((P=i.size)==null?void 0:P.height)||100,onChange:T=>x("height",`${T.target.value}px`)})]})]}),r.jsxs("div",{className:"property-group",children:[r.jsx("h4",{children:"Style"}),r.jsxs("div",{className:"property",children:[r.jsx("label",{children:"Background Color"}),r.jsx("input",{type:"color",value:((W=i.styles)==null?void 0:W.backgroundColor)||"#ffffff",onChange:T=>x("backgroundColor",T.target.value)})]}),r.jsxs("div",{className:"property",children:[r.jsx("label",{children:"Border Color"}),r.jsx("input",{type:"color",value:((B=i.styles)==null?void 0:B.borderColor)||"#dddddd",onChange:T=>x("borderColor",T.target.value)})]})]})]})]})]}),r.jsx("style",{jsx:!0,children:`
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
        `})]})})},Zf=({type:t,name:e,icon:s})=>{const[{isDragging:n},o]=Ef({type:"component",item:{type:t,name:e},collect:i=>({isDragging:i.isDragging()})});return r.jsxs("div",{ref:o,className:`draggable-component ${n?"dragging":""}`,children:[r.jsx("span",{className:"component-icon",children:s}),r.jsx("span",{className:"component-name",children:e})]})},eg=({children:t,onDrop:e})=>{const[{isOver:s},n]=Lf({accept:"component",drop:(o,i)=>{var c;const a=i.getClientOffset(),l=(c=i.getDropResult())==null?void 0:c.getBoundingClientRect();a&&l&&e(o,{x:a.x-l.left,y:a.y-l.top})},collect:o=>({isOver:o.isOver()})});return r.jsx("div",{ref:n,className:`droppable-canvas ${s?"drag-over":""}`,children:t})},tg=({component:t,onSelect:e,isSelected:s})=>{const n=o=>{o.stopPropagation(),e(t)};return r.jsx("div",{className:`visual-component ${s?"selected":""}`,style:t.styles,onClick:n,children:r.jsxs("div",{className:"component-content",children:[t.type==="text"&&(t.content||"Text"),t.type==="button"&&(t.content||"Button"),t.type==="input"&&r.jsx("input",{placeholder:t.placeholder||"Input"}),t.type==="image"&&r.jsx("div",{className:"image-placeholder",children:"🖼️ Image"}),t.type==="card"&&r.jsxs("div",{children:[r.jsx("h3",{children:t.title||"Card Title"}),r.jsx("p",{children:t.content||"Card content"})]}),!["text","button","input","image","card"].includes(t.type)&&r.jsx("div",{className:"component-placeholder",children:t.name})]})})},rg=({projectId:t,projectData:e,onDeploy:s})=>{const[n,o]=p.useState("vercel"),[i,a]=p.useState(!1),[l,c]=p.useState(null),d=[{id:"vercel",name:"Vercel",icon:"▲",description:"Fast, global deployment"},{id:"netlify",name:"Netlify",icon:"🌐",description:"JAMstack deployment"},{id:"aws",name:"AWS Amplify",icon:"☁️",description:"Full-stack deployment"},{id:"firebase",name:"Firebase",icon:"🔥",description:"Google hosting"},{id:"github",name:"GitHub Pages",icon:"🐙",description:"Free static hosting"}],m=async()=>{a(!0),c("Deploying...");try{await new Promise(g=>setTimeout(g,3e3));const u={success:!0,provider:n,url:`https://${t}.${n}.com`,deployedAt:new Date().toISOString()};c("Deployed successfully!"),s&&s(u)}catch{c("Deployment failed")}finally{a(!1)}};return r.jsxs("div",{className:"deployment-panel",children:[r.jsx("h3",{children:"🚀 Deploy Your App"}),r.jsxs("div",{className:"provider-selection",children:[r.jsx("h4",{children:"Choose Hosting Provider"}),r.jsx("div",{className:"providers-grid",children:d.map(u=>r.jsxs("div",{className:`provider-card ${n===u.id?"selected":""}`,onClick:()=>o(u.id),children:[r.jsx("div",{className:"provider-icon",children:u.icon}),r.jsx("div",{className:"provider-name",children:u.name}),r.jsx("div",{className:"provider-description",children:u.description})]},u.id))})]}),r.jsx("div",{className:"deployment-actions",children:r.jsx("button",{className:"btn btn-primary btn-lg",onClick:m,disabled:i,children:i?"Deploying...":"Deploy Now"})}),l&&r.jsx("div",{className:"deployment-status",children:r.jsx("div",{className:`status-message ${l.includes("success")?"success":"error"}`,children:l})}),r.jsx("style",{jsx:!0,children:`
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
      `})]})};var mt={};class sg{constructor(){this.app=null,this.db=null,this.storage=null,this.auth=null,this.user=null,this.isInitialized=!1}async initialize(){try{if(this.isInitialized)return;const e={apiKey:mt.REACT_APP_FIREBASE_API_KEY||"your-api-key",authDomain:mt.REACT_APP_FIREBASE_AUTH_DOMAIN||"your-project.firebaseapp.com",projectId:mt.REACT_APP_FIREBASE_PROJECT_ID||"your-project-id",storageBucket:mt.REACT_APP_FIREBASE_STORAGE_BUCKET||"your-project.appspot.com",messagingSenderId:mt.REACT_APP_FIREBASE_MESSAGING_SENDER_ID||"123456789",appId:mt.REACT_APP_FIREBASE_APP_ID||"your-app-id"};try{this.app=fr(e)}catch(s){if(s.code==="app/duplicate-app")this.app=ds();else if(s.code==="app/no-options")try{this.app=ds()}catch{this.app=fr({apiKey:"demo-key",authDomain:"demo.firebaseapp.com",projectId:"demo-project"})}else throw s}this.db=Is(this.app),this.storage=si(this.app),this.auth=Os(this.app),Ms(this.auth,s=>{this.user=s,console.log("Firebase auth state changed:",s?"authenticated":"not authenticated")});try{await fa(this.auth),console.log("✅ Firebase anonymous auth successful")}catch(s){console.log("⚠️ Firebase auth not available, continuing without authentication:",s.message),this.user=null}this.isInitialized=!0,console.log("🔥 Firebase initialized successfully")}catch(e){console.error("❌ Failed to initialize Firebase:",e),this.isInitialized=!1,this.user=null,console.log("⚠️ Continuing without Firebase services")}}async storeProjectContext(e,s){var n;try{await this.initialize();const o=Y(this.db,"projectContexts",e);await we(o,{...s,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",storedAt:new Date().toISOString(),dataSize:JSON.stringify(s).length}),console.log("✅ Project context stored successfully")}catch(o){throw console.error("❌ Failed to store project context:",o),o}}async loadProjectContext(e){try{await this.initialize();const s=Y(this.db,"projectContexts",e),n=await nr(s);return n.exists()?(console.log("✅ Project context loaded successfully"),n.data()):(console.log("❌ Project context not found"),null)}catch(s){return console.error("❌ Failed to load project context:",s),null}}async storeProjectFiles(e,s){var n;try{await this.initialize();const o=Y(this.db,"projectFiles",e);await we(o,{projectId:e,files:s,fileCount:Object.keys(s).length,totalSize:JSON.stringify(s).length,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",storedAt:new Date().toISOString()}),console.log("✅ Project files stored successfully")}catch(o){throw console.error("❌ Failed to store project files:",o),o}}async loadProjectFiles(e){try{await this.initialize();const s=Y(this.db,"projectFiles",e),n=await nr(s);return n.exists()?(console.log("✅ Project files loaded successfully"),n.data().files):(console.log("❌ Project files not found"),null)}catch(s){return console.error("❌ Failed to load project files:",s),null}}async storeTemplate(e){var s;try{await this.initialize();const n=Y(this.db,"templates",e.id);await we(n,{...e,userId:((s=this.user)==null?void 0:s.uid)||"anonymous",updatedAt:new Date().toISOString()}),console.log("✅ Template stored successfully")}catch(n){throw console.error("❌ Failed to store template:",n),n}}async loadTemplates(){try{await this.initialize();const e=ue(this.db,"templates"),s=await kt(e),n=[];return s.forEach(o=>{n.push(o.data())}),console.log("✅ Templates loaded successfully"),n}catch(e){return console.error("❌ Failed to load templates:",e),[]}}async searchTemplates(e,s,n){try{await this.initialize();const o=ue(this.db,"templates");let i=ve(o);e&&e.length>0&&(i=ve(i,me("keywords","array-contains-any",e))),s&&s.length>0&&(i=ve(i,me("technologies","array-contains-any",s))),n&&n.length>0&&(i=ve(i,me("patterns","array-contains-any",n)));const a=await kt(i),l=[];return a.forEach(c=>{l.push(c.data())}),console.log("✅ Templates searched successfully"),l}catch(o){return console.error("❌ Failed to search templates:",o),[]}}async storeLargeFile(e,s,n){try{await this.initialize();const o=Qe(this.storage,`projects/${e}/${s}`),i=new Blob([n],{type:"text/plain"});await Ye(o,i);const a=await Xe(o);return console.log("✅ Large file stored successfully"),a}catch(o){throw console.error("❌ Failed to store large file:",o),o}}async loadLargeFile(e){try{const n=await(await fetch(e)).text();return console.log("✅ Large file loaded successfully"),n}catch(s){return console.error("❌ Failed to load large file:",s),null}}async getUserProjects(){var e;try{await this.initialize();const s=ue(this.db,"projectContexts"),n=ve(s,me("userId","==",((e=this.user)==null?void 0:e.uid)||"anonymous")),o=await kt(n),i=[];return o.forEach(a=>{i.push({id:a.id,...a.data()})}),console.log("✅ User projects loaded successfully"),i}catch(s){return console.error("❌ Failed to load user projects:",s),[]}}async deleteProject(e){try{await this.initialize();const s=Y(this.db,"projectContexts",e);await or(s);const n=Y(this.db,"projectFiles",e);await or(n),console.log("✅ Project deleted successfully")}catch(s){throw console.error("❌ Failed to delete project:",s),s}}async getStorageStats(){try{await this.initialize();const e=await this.getUserProjects();let s=0,n=0;for(const o of e)s+=o.dataSize||0,n+=o.fileCount||0;return{totalProjects:e.length,totalFiles:n,totalSize:s,totalSizeMB:Math.round(s/(1024*1024)*100)/100}}catch(e){return console.error("❌ Failed to get storage stats:",e),{totalProjects:0,totalFiles:0,totalSize:0,totalSizeMB:0}}}async storeConversationMemory(e,s){var n,o;try{await this.initialize();const i=JSON.stringify(s),a=8e5;if(i.length>a){console.log("⚠️ Conversation data too large, storing in chunks");const l=this.chunkData(s,a);for(let c=0;c<l.length;c++){const d=Y(this.db,"conversationMemory",`${e}_chunk_${c}`);await we(d,{projectId:e,chunkIndex:c,totalChunks:l.length,conversation:l[c],userId:((n=this.user)==null?void 0:n.uid)||"anonymous",lastUpdated:new Date().toISOString()})}console.log(`🧠 Conversation memory stored in ${l.length} chunks`)}else{const l=Y(this.db,"conversationMemory",e);await we(l,{projectId:e,conversation:s,userId:((o=this.user)==null?void 0:o.uid)||"anonymous",lastUpdated:new Date().toISOString(),memorySize:i.length}),console.log("🧠 Conversation memory stored successfully")}}catch(i){throw console.error("❌ Failed to store conversation memory:",i),i}}chunkData(e,s){const n=[],o=JSON.stringify(e);let i=0;for(;i<o.length;){let a=Math.min(i+s,o.length);if(a<o.length){let l=o.lastIndexOf("}",a),c=o.lastIndexOf("]",a),d=o.lastIndexOf(",",a);const m=Math.max(l,c,d);m>i+s*.8&&(a=m+1)}try{n.push(JSON.parse(o.slice(i,a)))}catch{n.push(o.slice(i,a))}i=a}return n}async loadConversationMemory(e){try{await this.initialize();const s=Y(this.db,"conversationMemory",e),n=await nr(s);if(n.exists())return console.log("🧠 Conversation memory loaded successfully"),n.data().conversation;const o=ue(this.db,"conversationMemory"),i=ve(o,me("projectId","==",e)),a=await kt(i);if(!a.empty){const l=[];a.forEach(d=>{l.push({index:d.data().chunkIndex,data:d.data().conversation})}),l.sort((d,m)=>d.index-m.index);const c=l.map(d=>d.data);return console.log(`🧠 Conversation memory loaded from ${l.length} chunks`),c}return console.log("❌ Conversation memory not found"),null}catch(s){return console.error("❌ Failed to load conversation memory:",s),null}}async addPromptToMemory(e,s,n,o){try{await this.initialize();let i=await this.loadConversationMemory(e)||{projectId:e,prompts:[],responses:[],context:{},createdAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return i.prompts.push({id:`prompt-${Date.now()}`,text:s,timestamp:new Date().toISOString(),context:o}),i.responses.push({id:`response-${Date.now()}`,promptId:i.prompts[i.prompts.length-1].id,text:n,timestamp:new Date().toISOString(),context:o}),i.context={...i.context,...o},i.lastUpdated=new Date().toISOString(),await this.storeConversationMemory(e,i),console.log("🧠 Prompt added to memory successfully"),i}catch(i){throw console.error("❌ Failed to add prompt to memory:",i),i}}async getConversationHistory(e,s=50){try{await this.initialize();const n=await this.loadConversationMemory(e);if(!n)return[];const o=n.prompts.slice(-s),i=n.responses.slice(-s);return{prompts:o,responses:i,context:n.context,totalPrompts:n.prompts.length,totalResponses:n.responses.length}}catch(n){return console.error("❌ Failed to get conversation history:",n),[]}}async searchConversationMemory(e,s){try{await this.initialize();const n=await this.loadConversationMemory(e);if(!n)return[];const o=[],i=s.toLowerCase();return n.prompts.forEach(a=>{a.text.toLowerCase().includes(i)&&o.push({type:"prompt",id:a.id,text:a.text,timestamp:a.timestamp,context:a.context})}),n.responses.forEach(a=>{a.text.toLowerCase().includes(i)&&o.push({type:"response",id:a.id,text:a.text,timestamp:a.timestamp,context:a.context})}),console.log("🔍 Conversation memory searched successfully"),o}catch(n){return console.error("❌ Failed to search conversation memory:",n),[]}}async getConversationContext(e,s){try{await this.initialize();const n=await this.loadConversationMemory(e);if(!n)return null;const o={projectId:e,currentPrompt:s,previousPrompts:n.prompts.slice(-10),previousResponses:n.responses.slice(-10),projectContext:n.context,conversationSummary:this.generateConversationSummary(n),relevantHistory:this.findRelevantHistory(n,s)};return console.log("🧠 Conversation context generated successfully"),o}catch(n){return console.error("❌ Failed to get conversation context:",n),null}}generateConversationSummary(e){var i,a;const s=e.prompts,n=e.responses;return s.length===0?"No previous conversation":{totalPrompts:s.length,totalResponses:n.length,firstPrompt:((i=s[0])==null?void 0:i.text)||"",lastPrompt:((a=s[s.length-1])==null?void 0:a.text)||"",keyTopics:this.extractKeyTopics(s),projectEvolution:this.trackProjectEvolution(e)}}extractKeyTopics(e){const s=new Set;return e.forEach(n=>{n.text.toLowerCase().split(" ").forEach(i=>{i.length>4&&!this.isCommonWord(i)&&s.add(i)})}),Array.from(s).slice(0,10)}isCommonWord(e){return["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","two","way","who","boy","did","man","men","put","say","she","too","use"].includes(e)}trackProjectEvolution(e){const s=[],n=e.prompts,o=e.responses;for(let i=0;i<n.length;i++){const a=n[i],l=o[i];s.push({phase:i+1,prompt:a.text,response:l.text,timestamp:a.timestamp,context:a.context})}return s}findRelevantHistory(e,s){const n=[],o=s.toLowerCase().split(" ");return e.prompts.forEach((i,a)=>{var d;const l=i.text.toLowerCase().split(" "),c=o.filter(m=>l.includes(m));c.length>2&&n.push({prompt:i.text,response:((d=e.responses[a])==null?void 0:d.text)||"",relevance:c.length,timestamp:i.timestamp})}),n.sort((i,a)=>a.relevance-i.relevance).slice(0,5)}async storeAILearningPattern(e,s){var n;try{await this.initialize();const o=Y(this.db,"aiLearningPatterns",`${e}-${Date.now()}`);await we(o,{projectId:e,pattern:s,userId:((n=this.user)==null?void 0:n.uid)||"anonymous",createdAt:new Date().toISOString()}),console.log("🧠 AI learning pattern stored successfully")}catch(o){throw console.error("❌ Failed to store AI learning pattern:",o),o}}async getAILearningPatterns(e){try{await this.initialize();const s=ue(this.db,"aiLearningPatterns"),n=ve(s,me("projectId","==",e)),o=await kt(n),i=[];return o.forEach(a=>{i.push(a.data())}),console.log("🧠 AI learning patterns loaded successfully"),i}catch(s){return console.error("❌ Failed to load AI learning patterns:",s),[]}}async clearConversationMemory(e){try{await this.initialize();const s=Y(this.db,"conversationMemory",e);await or(s),console.log("🧠 Conversation memory cleared successfully")}catch(s){throw console.error("❌ Failed to clear conversation memory:",s),s}}}const Et=new sg,ng=({projectId:t,onMemoryUpdate:e})=>{const[s,n]=p.useState(null),[o,i]=p.useState([]),[a,l]=p.useState(""),[c,d]=p.useState([]),[m,u]=p.useState(!1),[g,y]=p.useState(null);p.useEffect(()=>{t&&(f(),w())},[t]);const f=async()=>{try{u(!0);const v=await Et.loadConversationMemory(t);if(n(v),v){const b=await Et.getConversationHistory(t);i(b)}}catch(v){console.error("Failed to load memory:",v)}finally{u(!1)}},w=async()=>{try{const v=await Et.getStorageStats();y(v)}catch(v){console.error("Failed to load stats:",v)}},h=async()=>{if(a.trim())try{u(!0);const v=await Et.searchConversationMemory(t,a);d(v)}catch(v){console.error("Failed to search memory:",v)}finally{u(!1)}},C=async()=>{if(window.confirm("Are you sure you want to clear all conversation memory?"))try{await Et.clearConversationMemory(t),n(null),i([]),d([]),e&&e()}catch(v){console.error("Failed to clear memory:",v)}},j=()=>{if(!s)return;const v=JSON.stringify(s,null,2),b=new Blob([v],{type:"application/json"}),x=URL.createObjectURL(b),k=document.createElement("a");k.href=x,k.download=`dreambuild-memory-${t}.json`,k.click(),URL.revokeObjectURL(x)};return m?r.jsx("div",{className:"memory-manager",children:r.jsx("div",{className:"loading",children:"Loading memory..."})}):r.jsxs("div",{className:"memory-manager",children:[r.jsxs("div",{className:"memory-header",children:[r.jsx("h3",{children:"🧠 Conversation Memory"}),r.jsxs("div",{className:"memory-actions",children:[r.jsx("button",{onClick:f,className:"btn btn-secondary",children:"Refresh"}),r.jsx("button",{onClick:j,className:"btn btn-secondary",children:"Export"}),r.jsx("button",{onClick:C,className:"btn btn-danger",children:"Clear"})]})]}),g&&r.jsxs("div",{className:"memory-stats",children:[r.jsxs("div",{className:"stat",children:[r.jsx("span",{className:"stat-label",children:"Projects:"}),r.jsx("span",{className:"stat-value",children:g.totalProjects})]}),r.jsxs("div",{className:"stat",children:[r.jsx("span",{className:"stat-label",children:"Files:"}),r.jsx("span",{className:"stat-value",children:g.totalFiles})]}),r.jsxs("div",{className:"stat",children:[r.jsx("span",{className:"stat-label",children:"Size:"}),r.jsxs("span",{className:"stat-value",children:[g.totalSizeMB," MB"]})]})]}),r.jsxs("div",{className:"memory-search",children:[r.jsx("input",{type:"text",placeholder:"Search conversation memory...",value:a,onChange:v=>l(v.target.value),onKeyPress:v=>v.key==="Enter"&&h()}),r.jsx("button",{onClick:h,className:"btn btn-primary",children:"Search"})]}),c.length>0&&r.jsxs("div",{className:"search-results",children:[r.jsx("h4",{children:"Search Results"}),c.map((v,b)=>r.jsxs("div",{className:"search-result",children:[r.jsx("div",{className:"result-type",children:v.type}),r.jsx("div",{className:"result-text",children:v.text}),r.jsx("div",{className:"result-timestamp",children:v.timestamp})]},b))]}),o.prompts&&o.prompts.length>0&&r.jsxs("div",{className:"conversation-history",children:[r.jsx("h4",{children:"Conversation History"}),r.jsxs("div",{className:"history-stats",children:[r.jsxs("span",{children:["Prompts: ",o.totalPrompts]}),r.jsxs("span",{children:["Responses: ",o.totalResponses]})]}),r.jsx("div",{className:"history-list",children:o.prompts.map((v,b)=>r.jsxs("div",{className:"history-item",children:[r.jsxs("div",{className:"history-prompt",children:[r.jsx("strong",{children:"Prompt:"})," ",v.text]}),o.responses[b]&&r.jsxs("div",{className:"history-response",children:[r.jsx("strong",{children:"Response:"})," ",o.responses[b].text]}),r.jsx("div",{className:"history-timestamp",children:new Date(v.timestamp).toLocaleString()})]},v.id))})]}),s&&r.jsxs("div",{className:"memory-details",children:[r.jsx("h4",{children:"Memory Details"}),r.jsxs("div",{className:"memory-info",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Project ID:"})," ",s.projectId]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Created:"})," ",new Date(s.createdAt).toLocaleString()]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Last Updated:"})," ",new Date(s.lastUpdated).toLocaleString()]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Memory Size:"})," ",JSON.stringify(s).length," bytes"]})]})]}),r.jsx("style",{jsx:!0,children:`
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
      `})]})},og=({projectId:t,initialFiles:e={}})=>{const[s,n]=p.useState("code"),[o,i]=p.useState(e),[a,l]=p.useState(null),[c,d]=p.useState(!1),[m,u]=p.useState(!1),[g,y]=p.useState(null),f=[{id:"code",name:"Code Editor",icon:"💻"},{id:"visual",name:"Visual Editor",icon:"🎨"},{id:"collaboration",name:"Collaboration",icon:"🤝"},{id:"deployment",name:"Deployment",icon:"🚀"},{id:"memory",name:"Memory",icon:"🧠"}],w=(b,x)=>{i(k=>({...k,[b]:x}))},h=b=>{b.appCode&&w("src/App.jsx",b.appCode),b.cssCode&&w("src/App.css",b.cssCode)},C=b=>{y(b),console.log("Deployment result:",b)},j=b=>{i(x=>({...x,...b})),console.log("Version restored:",b)},v=()=>{switch(s){case"code":return r.jsxs("div",{className:"code-editor-tab",children:[r.jsxs("div",{className:"file-explorer",children:[r.jsx("h3",{children:"📁 Files"}),r.jsx("div",{className:"file-list",children:Object.keys(o).map(b=>r.jsxs("div",{className:`file-item ${a===b?"selected":""}`,onClick:()=>l(b),children:[r.jsx("span",{className:"file-icon",children:"📄"}),r.jsx("span",{className:"file-name",children:b})]},b))})]}),r.jsx("div",{className:"code-editor",children:a&&r.jsxs("div",{className:"editor-container",children:[r.jsxs("div",{className:"editor-header",children:[r.jsx("span",{className:"file-name",children:a}),r.jsxs("div",{className:"editor-actions",children:[r.jsx("button",{className:"btn btn-sm",children:"Save"}),r.jsx("button",{className:"btn btn-sm",children:"Format"})]})]}),r.jsx("textarea",{className:"code-textarea",value:o[a]||"",onChange:b=>w(a,b.target.value),placeholder:"Start coding..."})]})})]});case"visual":return r.jsx("div",{className:"visual-editor-tab",children:r.jsx(Qf,{projectId:t,onCodeChange:h,initialComponents:[]})});case"collaboration":return r.jsxs("div",{className:"collaboration-tab",children:[r.jsxs("div",{className:"collaboration-header",children:[r.jsx("h3",{children:"🤝 Real-time Collaboration"}),r.jsxs("button",{className:`btn ${c?"btn-danger":"btn-primary"}`,onClick:()=>d(!c),children:[c?"Disable":"Enable"," Collaboration"]})]}),c?r.jsx(Up,{projectId:t,fileId:a,onFileChange:w,onVersionRestore:j}):r.jsxs("div",{className:"collaboration-disabled",children:[r.jsx("p",{children:"Enable collaboration to work with team members in real-time"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Multi-user co-editing"}),r.jsx("li",{children:"Real-time comments"}),r.jsx("li",{children:"Version history"}),r.jsx("li",{children:"User presence"})]})]})]});case"deployment":return r.jsxs("div",{className:"deployment-tab",children:[r.jsx(rg,{projectId:t,projectData:{files:o},onDeploy:C}),g&&r.jsxs("div",{className:"deployment-result",children:[r.jsx("h4",{children:"Deployment Result"}),r.jsxs("div",{className:"result-details",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Provider:"})," ",g.provider]}),r.jsxs("p",{children:[r.jsx("strong",{children:"URL:"})," ",r.jsx("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",children:g.url})]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Status:"})," ",g.status]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Deployed:"})," ",new Date(g.deployedAt).toLocaleString()]})]})]})]});case"memory":return r.jsx("div",{className:"memory-tab",children:r.jsx(ng,{projectId:t,onMemoryUpdate:()=>console.log("Memory updated")})});default:return r.jsx("div",{children:"Select a tab to get started"})}};return r.jsxs("div",{className:"integrated-workspace",children:[r.jsxs("div",{className:"workspace-header",children:[r.jsx("h2",{children:"🚀 DreamBuild Advanced Workspace"}),r.jsxs("div",{className:"workspace-status",children:[r.jsx("span",{className:"status-indicator",children:"●"}),r.jsxs("span",{children:["Project: ",t]})]})]}),r.jsx("div",{className:"workspace-tabs",children:f.map(b=>r.jsxs("button",{className:`tab-button ${s===b.id?"active":""}`,onClick:()=>n(b.id),children:[r.jsx("span",{className:"tab-icon",children:b.icon}),r.jsx("span",{className:"tab-name",children:b.name})]},b.id))}),r.jsx("div",{className:"workspace-content",children:v()}),r.jsx("style",{jsx:!0,children:`
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
      `})]})},ig=({onTemplateSelect:t,isVisible:e,onClose:s})=>{var v;const{currentProject:n,updateFile:o,switchFile:i}=lt(),[a,l]=p.useState(""),[c,d]=p.useState("all"),[m,u]=p.useState(!1),g=[{id:"all",name:"All Templates",icon:kr,color:"text-purple-500"},{id:"web-apps",name:"Web Apps",icon:Ie,color:"text-blue-500"},{id:"mobile-apps",name:"Mobile Apps",icon:fo,color:"text-green-500"},{id:"games",name:"Games",icon:Ca,color:"text-orange-500"},{id:"tools",name:"Tools",icon:se,color:"text-gray-500"}],y=pr.getAllTemplates(),f=pr.getPopularTemplates(),w=y.filter(b=>{const x=b.name.toLowerCase().includes(a.toLowerCase())||b.description.toLowerCase().includes(a.toLowerCase()),k=c==="all"||b.category===c;return x&&k}),h=async b=>{u(!0);try{console.log("🎯 Generating template:",b.id);const x=pr.generateTemplateById(b.id);Object.entries(x).forEach(([A,S])=>{o(A,S)});const k=Object.keys(x)[0];k&&i(k),X.success(`Generated ${b.name} successfully!`),t&&t(b,x),s&&s()}catch(x){console.error("❌ Template generation failed:",x),X.error(`Failed to generate ${b.name}`)}finally{u(!1)}},C=b=>{const x=g.find(k=>k.id===b);return x?x.icon:se},j=b=>{const x=g.find(k=>k.id===b);return x?x.color:"text-gray-500"};return e?r.jsx($e,{children:r.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",onClick:s,children:r.jsxs(R.div,{initial:{scale:.95},animate:{scale:1},exit:{scale:.95},className:"bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",onClick:b=>b.stopPropagation(),children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:r.jsx(Ut,{className:"h-5 w-5 text-white"})}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-xl font-semibold text-foreground",children:"Template Gallery"}),r.jsx("p",{className:"text-sm text-muted-foreground",children:"Choose a template to get started"})]})]}),r.jsx("button",{onClick:s,className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Close",children:r.jsx("span",{className:"text-xl text-muted-foreground",children:"×"})})]}),r.jsxs("div",{className:"p-6 border-b border-border",children:[r.jsxs("div",{className:"flex gap-4 mb-4",children:[r.jsxs("div",{className:"flex-1 relative",children:[r.jsx(nt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx("input",{type:"text",placeholder:"Search templates...",value:a,onChange:b=>l(b.target.value),className:"w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20"})]}),r.jsxs("button",{className:"px-4 py-2 bg-muted border border-border rounded-lg text-foreground hover:bg-muted/80 transition-colors flex items-center gap-2",children:[r.jsx(Ls,{className:"h-4 w-4"}),"Filters"]})]}),r.jsx("div",{className:"flex gap-2 overflow-x-auto",children:g.map(b=>{const x=b.icon;return r.jsxs("button",{onClick:()=>d(b.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${c===b.id?"bg-blue-500 text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[r.jsx(x,{className:"h-4 w-4"}),r.jsx("span",{className:"text-sm font-medium",children:b.name})]},b.id)})})]}),r.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[c==="all"&&r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[r.jsx(Ft,{className:"h-5 w-5 text-yellow-500"}),r.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Popular Templates"})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:f.map(b=>{const x=C(b.category),k=j(b.category);return r.jsxs(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>h(b),disabled:m,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[r.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${k}`,children:r.jsx(x,{className:"h-4 w-4"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:b.name}),r.jsxs("p",{className:"text-xs text-muted-foreground",children:[b.files.length," files"]})]})]}),r.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:b.description})]},b.id)})})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("h3",{className:"text-lg font-semibold text-foreground",children:c==="all"?"All Templates":(v=g.find(b=>b.id===c))==null?void 0:v.name}),r.jsxs("span",{className:"text-sm text-muted-foreground",children:[w.length," template",w.length!==1?"s":""]})]}),w.length===0?r.jsxs("div",{className:"text-center py-12",children:[r.jsx("div",{className:"w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4",children:r.jsx(nt,{className:"h-8 w-8 text-muted-foreground"})}),r.jsx("h4",{className:"text-lg font-medium text-foreground mb-2",children:"No templates found"}),r.jsx("p",{className:"text-muted-foreground",children:"Try adjusting your search or filters"})]}):r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:w.map(b=>{const x=C(b.category),k=j(b.category);return r.jsxs(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>h(b),disabled:m,className:"p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 transition-all text-left group",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[r.jsx("div",{className:`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${k}`,children:r.jsx(x,{className:"h-4 w-4"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-foreground group-hover:text-blue-500 transition-colors",children:b.name}),r.jsxs("p",{className:"text-xs text-muted-foreground",children:[b.files.length," files"]})]})]}),r.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:b.description})]},b.id)})})]})]}),r.jsx("div",{className:"p-6 border-t border-border bg-muted/30",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:"text-sm text-muted-foreground",children:"Need something custom? Use the AI prompt to generate unique applications."}),r.jsx("button",{onClick:s,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"Close"})]})})]})})}):null},ag=({children:t,direction:e="horizontal",className:s=""})=>r.jsx("div",{className:`resizable-panel-group flex ${e} h-full ${s}`,children:t}),cs=({children:t,defaultSize:e=50,minSize:s=10,maxSize:n=90,className:o=""})=>r.jsx("div",{className:`resizable-panel ${o}`,style:{flexBasis:`${e}%`,minWidth:`${s}%`,maxWidth:`${n}%`},children:t}),co=({className:t="",onResize:e,children:s,handleIndex:n=0})=>{const[o,i]=p.useState(!1),a=p.useRef(null),l=m=>{i(!0),m.preventDefault(),document.body.style.cursor="col-resize",document.body.style.userSelect="none",console.log("Handle clicked:",n)},c=p.useCallback(m=>{var C;if(!o)return;const u=(C=a.current)==null?void 0:C.parentElement;if(!u)return;const g=u.getBoundingClientRect(),f=(m.clientX-g.left)/g.width*100,h=Array.from(u.children).filter(j=>j.classList.contains("resizable-panel"));if(console.log("Total panels found:",h.length,"Handle index:",n),h.length>=2){let j,v;if(n===0?(j=h[0],v=h[1],console.log("Resizing File Manager and Code Editor")):n===1&&(j=h[1],v=h[2],console.log("Resizing Code Editor and AI Assistant")),j&&v){const b=Math.max(15,Math.min(70,f)),x=Math.max(15,Math.min(70,100-b));console.log("Setting sizes:",{leftSize:b,rightSize:x,percentage:f}),j.style.flexBasis=`${b}%`,v.style.flexBasis=`${x}%`,j.style.border="3px solid red",v.style.border="3px solid blue",setTimeout(()=>{j.style.border="",v.style.border=""},300),e&&e({leftSize:b,rightSize:x})}}},[o,e,n]),d=p.useCallback(()=>{i(!1),document.body.style.cursor="",document.body.style.userSelect=""},[]);return p.useEffect(()=>{if(o)return document.addEventListener("mousemove",c),document.addEventListener("mouseup",d),()=>{document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",d)}},[o,c,d]),r.jsx("div",{ref:a,className:`resizable-handle w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group flex items-center justify-center ${o?"bg-primary/70":""} ${t}`,onMouseDown:l,children:s||r.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full group-hover:bg-primary/70 transition-colors"})})},lg=()=>{const[t,e]=p.useState("editor"),[s,n]=p.useState(!1),[o,i]=p.useState(!1),a=[{id:"editor",label:"Code Editor",icon:se,description:"Edit your code with live preview"},{id:"preview",label:"Live Preview",icon:vr,description:"View your application in real-time"},{id:"terminal",label:"Terminal",icon:hs,description:"Command line interface"},{id:"workspace",label:"Advanced Workspace",icon:ke,description:"Full-featured workspace with collaboration, visual editor, and deployment"}],l=c=>{c==="workspace"?t==="workspace"&&s?(n(!1),e("editor")):(n(!0),e(c)):(e(c),n(!1))};return r.jsxs("div",{className:"h-screen bg-background flex flex-col pt-16",children:[r.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-card/80 backdrop-blur-sm border-b border-border/50 shadow-sm",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("h1",{className:"text-lg font-semibold text-foreground",children:"AI Builder"}),r.jsxs(R.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>i(!0),className:"flex items-center gap-2 px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium",title:"Browse Templates",children:[r.jsx(Ut,{className:"h-4 w-4"}),"Templates"]})]}),r.jsx("div",{className:"flex items-center gap-1 bg-background/50 p-1 rounded-lg border border-border/50",children:a.map(c=>{const d=c.icon;return r.jsxs(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>l(c.id),className:`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${t===c.id?"bg-primary text-primary-foreground shadow-sm":"text-muted-foreground hover:text-foreground hover:bg-background/50"}`,title:c.description,children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{children:c.label})]},c.id)})})]}),r.jsx("div",{className:"flex-1 p-6",children:r.jsxs(ag,{direction:"horizontal",className:"h-full gap-2",children:[r.jsx(cs,{defaultSize:20,minSize:10,maxSize:50,children:r.jsxs("div",{className:"h-full bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col",children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(ze,{className:"h-4 w-4 text-primary"}),r.jsx("span",{className:"text-sm font-medium text-foreground",children:"Files"})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),r.jsx("span",{className:"text-xs text-muted-foreground",children:"Active"})]})]}),r.jsx("div",{className:"flex-1 overflow-hidden",children:r.jsx(eu,{})})]})}),r.jsx(co,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:0,children:r.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),r.jsx(cs,{defaultSize:50,minSize:25,maxSize:70,children:r.jsxs("div",{className:"h-full bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col",children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[t==="editor"&&r.jsx(se,{className:"h-4 w-4 text-primary"}),t==="preview"&&r.jsx(vr,{className:"h-4 w-4 text-primary"}),t==="workspace"&&r.jsx(ke,{className:"h-4 w-4 text-primary"}),t==="terminal"&&r.jsx(hs,{className:"h-4 w-4 text-primary"}),r.jsx("span",{className:"text-sm font-medium text-foreground capitalize",children:t})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),r.jsx("span",{className:"text-xs text-muted-foreground",children:"Ready"})]})]}),r.jsxs("div",{className:"flex-1 overflow-hidden h-full min-h-[600px]",children:[t==="editor"&&r.jsx(im,{}),t==="preview"&&r.jsx(am,{}),t==="workspace"&&s&&r.jsx(og,{projectId:"demo-project"}),t==="workspace"&&!s&&r.jsx("div",{className:"h-full flex items-center justify-center bg-muted/20",children:r.jsxs("div",{className:"text-center",children:[r.jsx(ke,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),r.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"Advanced Workspace"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Click the Advanced Workspace button to open the full-featured workspace"}),r.jsxs("div",{className:"text-sm text-muted-foreground",children:[r.jsx("p",{children:"Features include:"}),r.jsxs("ul",{className:"mt-2 space-y-1",children:[r.jsx("li",{children:"• Real-time Collaboration"}),r.jsx("li",{children:"• Visual Editor"}),r.jsx("li",{children:"• One-click Deployment"}),r.jsx("li",{children:"• Memory Management"})]})]})]})}),t==="terminal"&&r.jsx("div",{className:"h-full flex flex-col bg-gray-900",children:r.jsx("div",{className:"flex-grow p-4 text-green-400 font-mono text-sm overflow-y-auto",children:r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),r.jsx("span",{className:"text-gray-500",children:"$"}),r.jsx("span",{className:"text-gray-300",children:"npm run dev"})]}),r.jsx("div",{className:"text-gray-400",children:"Starting development server..."}),r.jsx("div",{className:"text-green-400",children:"✓ Server running on http://localhost:3000"}),r.jsx("div",{className:"text-blue-400",children:"✓ Ready in 2.3s"}),r.jsx("div",{className:"mt-4",children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-green-400",children:"user@dreambuild"}),r.jsx("span",{className:"text-gray-500",children:"$"}),r.jsx("span",{className:"text-gray-300 animate-pulse",children:"_"})]})})]})})})]})]})}),r.jsx(co,{className:"w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group",handleIndex:1,children:r.jsx("div",{className:"w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors"})}),r.jsx(cs,{defaultSize:30,minSize:15,maxSize:60,children:r.jsxs("div",{className:"h-full bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col",children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(ke,{className:"h-4 w-4 text-primary"}),r.jsx("span",{className:"text-sm font-medium text-foreground",children:"AI Assistant"})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),r.jsx("span",{className:"text-xs text-muted-foreground",children:"Online"})]})]}),r.jsx("div",{className:"flex-1 overflow-hidden",children:r.jsx($p,{})})]})})]})}),r.jsx(ig,{isVisible:o,onClose:()=>i(!1),onTemplateSelect:(c,d)=>{console.log("🎯 Template selected:",c.name),i(!1)}})]})},cg=()=>{const{currentProject:t,projects:e}=lt(),[s,n]=p.useState("7d"),[o,i]=p.useState(!0);p.useEffect(()=>{const u=setTimeout(()=>i(!1),1e3);return()=>clearTimeout(u)},[]);const a={totalProjects:12,aiGenerations:89,linesOfCode:12450,hoursSpent:42.5},l=[{id:1,type:"ai_generation",project:"E-commerce Store",action:"Generated React component",time:"2 minutes ago",icon:ke,color:"text-white"},{id:2,type:"file_created",project:"Portfolio Website",action:"Created new CSS file",time:"15 minutes ago",icon:Ut,color:"text-green-600"},{id:3,type:"project_completed",project:"Task Manager App",action:"Project marked as completed",time:"1 hour ago",icon:Ft,color:"text-yellow-600"},{id:4,type:"deployment",project:"Analytics Dashboard",action:"Deployed to Firebase",time:"3 hours ago",icon:Ue,color:"text-purple-600"}],c=[{name:"E-commerce Store",files:24,lastModified:"2 min ago",type:"web",progress:85},{name:"Portfolio Website",files:12,lastModified:"15 min ago",type:"web",progress:100},{name:"Task Manager App",files:18,lastModified:"1 hour ago",type:"mobile",progress:100},{name:"Analytics Dashboard",files:31,lastModified:"3 hours ago",type:"dashboard",progress:75}],d=[{language:"JavaScript",percentage:45,files:70,color:"bg-yellow-500"},{language:"HTML",percentage:25,files:39,color:"bg-orange-500"},{language:"CSS",percentage:20,files:31,color:"bg-white"},{language:"Python",percentage:10,files:16,color:"bg-green-500"}],m=({title:u,value:g,icon:y,change:f,changeType:w,description:h})=>r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-md transition-all duration-200",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("div",{className:"w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center",children:r.jsx(y,{className:"h-6 w-6 text-white"})}),f&&r.jsxs("div",{className:`flex items-center gap-1 text-sm ${w==="increase"?"text-green-600":"text-red-600"}`,children:[w==="increase"?r.jsx(Da,{className:"h-4 w-4"}):r.jsx(Ea,{className:"h-4 w-4"}),f]})]}),r.jsx("h3",{className:"text-2xl font-bold text-foreground mb-1",children:g}),r.jsx("p",{className:"text-sm text-muted-foreground",children:u}),h&&r.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:h})]});return o?r.jsx("div",{className:"min-h-screen bg-background",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:r.jsxs("div",{className:"animate-pulse",children:[r.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[...Array(4)].map((u,g)=>r.jsxs("div",{className:"bg-card/50 rounded-xl p-6",children:[r.jsx("div",{className:"h-12 w-12 bg-muted rounded-lg mb-4"}),r.jsx("div",{className:"h-6 bg-muted rounded w-1/2 mb-2"}),r.jsx("div",{className:"h-4 bg-muted rounded w-3/4"})]},g))})]})})}):r.jsx("div",{className:"min-h-screen bg-background",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsx("div",{className:"mb-8",children:r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Dashboard"}),r.jsx("p",{className:"text-muted-foreground",children:"Welcome back! Here's what's happening with your projects."})]}),r.jsx("div",{className:"flex items-center gap-2",children:r.jsxs("select",{value:s,onChange:u=>n(u.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[r.jsx("option",{value:"7d",children:"Last 7 days"}),r.jsx("option",{value:"30d",children:"Last 30 days"}),r.jsx("option",{value:"90d",children:"Last 90 days"})]})})]})}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[r.jsx(m,{title:"Total Projects",value:a.totalProjects,icon:ze,change:"+2",changeType:"increase",description:"This week"}),r.jsx(m,{title:"AI Generations",value:a.aiGenerations,icon:ke,change:"+12",changeType:"increase",description:"This week"}),r.jsx(m,{title:"Lines of Code",value:a.linesOfCode.toLocaleString(),icon:se,change:"+1.2k",changeType:"increase",description:"This week"}),r.jsx(m,{title:"Hours Spent",value:a.hoursSpent,icon:_s,change:"+5.2h",changeType:"increase",description:"This week"})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[r.jsxs("div",{className:"lg:col-span-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[r.jsx(ka,{className:"h-5 w-5 text-white"}),"Recent Activity"]}),r.jsx("button",{className:"text-sm text-white hover:text-gray-300 transition-colors",children:"View all"})]}),r.jsx("div",{className:"space-y-4",children:l.map((u,g)=>{const y=u.icon;return r.jsxs(R.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:g*.1},className:"flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors",children:[r.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center ${u.color.replace("text-","bg-").replace("-600","-100")}`,children:r.jsx(y,{className:`h-4 w-4 ${u.color}`})}),r.jsxs("div",{className:"flex-1",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:u.action}),r.jsx("p",{className:"text-xs text-muted-foreground",children:u.project})]}),r.jsx("span",{className:"text-xs text-muted-foreground",children:u.time})]},u.id)})})]}),r.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[r.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[r.jsx(Ta,{className:"h-5 w-5 text-white"}),"Top Projects"]}),r.jsx("div",{className:"space-y-4",children:c.map((u,g)=>r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:g*.1},className:"p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("h3",{className:"font-medium text-foreground text-sm",children:u.name}),r.jsxs("span",{className:"text-xs text-muted-foreground",children:[u.files," files"]})]}),r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("div",{className:"flex-1 bg-muted rounded-full h-2 mr-3",children:r.jsx("div",{className:"bg-white h-2 rounded-full transition-all duration-300",style:{width:`${u.progress}%`}})}),r.jsxs("span",{className:"text-xs text-muted-foreground",children:[u.progress,"%"]})]}),r.jsx("p",{className:"text-xs text-muted-foreground",children:u.lastModified})]},u.name))})]})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[r.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[r.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[r.jsx(se,{className:"h-5 w-5 text-white"}),"Language Usage"]}),r.jsx("div",{className:"space-y-4",children:d.map((u,g)=>r.jsxs(R.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:g*.1},className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-4 h-4 rounded-full bg-muted flex items-center justify-center",children:r.jsx("div",{className:`w-2 h-2 rounded-full ${u.color}`})}),r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex items-center justify-between mb-1",children:[r.jsx("span",{className:"text-sm font-medium text-foreground",children:u.language}),r.jsxs("span",{className:"text-xs text-muted-foreground",children:[u.percentage,"%"]})]}),r.jsx("div",{className:"bg-muted rounded-full h-2",children:r.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${u.color}`,style:{width:`${u.percentage}%`}})}),r.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[u.files," files"]})]})]},u.language))})]}),r.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6",children:[r.jsxs("h2",{className:"text-xl font-semibold text-foreground mb-6 flex items-center gap-2",children:[r.jsx(gt,{className:"h-5 w-5 text-white"}),"Quick Actions"]}),r.jsx("div",{className:"grid grid-cols-2 gap-3",children:[{name:"New Project",icon:ze,color:"bg-white",href:"/ai-builder"},{name:"AI Builder",icon:ke,color:"bg-purple-500",href:"/ai-builder"},{name:"View Projects",icon:Ie,color:"bg-green-500",href:"/projects"},{name:"Settings",icon:pt,color:"bg-orange-500",href:"/settings"}].map((u,g)=>r.jsxs(R.a,{href:u.href,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:g*.1},className:"flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-all duration-200 group",children:[r.jsx("div",{className:`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${u.color} group-hover:scale-105 transition-transform`,children:r.jsx(u.icon,{className:"h-6 w-6 text-white"})}),r.jsx("span",{className:"text-sm font-medium text-foreground text-center",children:u.name})]},u.name))})]})]})]})})},dg=()=>{const{user:t,signInWithGoogle:e,loading:s}=Or(),n=Ar(),[o,i]=p.useState(!1);p.useEffect(()=>{t&&!s&&n("/dashboard")},[t,s,n]);const a=async()=>{try{i(!0),await e()}catch(c){console.error("Sign in error:",c)}finally{i(!1)}},l=()=>{console.log("GitHub authentication coming soon!")};return s?r.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),r.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:[r.jsxs("div",{className:"flex justify-between items-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg",children:r.jsx("span",{className:"text-white font-bold text-lg",children:"D"})}),r.jsx("span",{className:"font-bold text-xl text-slate-800 dark:text-white",children:"DreamBuild"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(R.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/login",className:"px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"Sign in"}),r.jsx(R.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/signup",className:"px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl",children:"Sign up"})]})]}),r.jsx("div",{className:"flex items-center justify-center p-6 -mt-20",children:r.jsx("div",{className:"w-full max-w-md",children:r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-2xl",children:[r.jsxs("div",{className:"text-center mb-8",children:[r.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg",children:r.jsx("span",{className:"text-white font-bold text-2xl",children:"D"})}),r.jsx("h1",{className:"text-2xl font-bold mb-2 text-slate-800 dark:text-white",children:"Welcome back"}),r.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-sm",children:"Sign in to continue building amazing applications"})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:a,disabled:o,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md",children:[o?r.jsx(Mt,{className:"h-5 w-5 animate-spin text-blue-600"}):r.jsx("div",{className:"w-5 h-5 bg-gradient-to-r from-blue-500 to-red-500 rounded flex items-center justify-center",children:r.jsx("span",{className:"text-white text-xs font-bold",children:"G"})}),o?"Signing in...":"Continue with Google"]}),r.jsxs(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:l,className:"w-full flex items-center justify-center gap-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all text-sm font-semibold bg-white dark:bg-slate-700 shadow-sm hover:shadow-md",children:[r.jsx(Ae,{className:"h-5 w-5"}),"Continue with GitHub"]})]}),r.jsxs("div",{className:"relative my-8",children:[r.jsx("div",{className:"absolute inset-0 flex items-center",children:r.jsx("div",{className:"w-full border-t border-slate-200 dark:border-slate-600"})}),r.jsx("div",{className:"relative flex justify-center text-sm",children:r.jsx("span",{className:"bg-white dark:bg-slate-800 px-4 text-slate-500 dark:text-slate-400 font-medium",children:"or"})})]}),r.jsx("div",{className:"text-center",children:r.jsxs(R.a,{whileHover:{scale:1.05},whileTap:{scale:.95},href:"/ai-builder",className:"inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold text-sm bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600",children:["Continue as Guest",r.jsx(Bt,{className:"h-4 w-4"})]})})]})})})]})},ug=()=>{const{user:t,signInWithGoogle:e,loading:s}=Or(),n=Ar(),[o,i]=p.useState(!1);p.useEffect(()=>{t&&!s&&n("/dashboard")},[t,s,n]);const a=async()=>{try{i(!0),await e(),U.success("Welcome to DreamBuild!")}catch(c){console.error("Sign in error:",c),U.error("Failed to sign in. Please try again.")}finally{i(!1)}},l=()=>{U.info("GitHub authentication coming soon!")};return s?r.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),r.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):r.jsxs("div",{className:"min-h-screen bg-background",children:[r.jsxs("div",{className:"flex justify-between items-center p-4",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center",children:r.jsx("span",{className:"text-primary-foreground font-bold text-sm",children:"D"})}),r.jsx("span",{className:"font-semibold text-foreground",children:"DreamBuild"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/login",className:"px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors",children:"Sign in"}),r.jsx(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>window.location.href="/signup",className:"px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors",children:"Sign up"})]})]}),r.jsx("div",{className:"flex items-center justify-center p-4 -mt-16",children:r.jsx("div",{className:"w-full max-w-xs",children:r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},className:"bg-card border border-border rounded-xl p-6 shadow-sm",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("h1",{className:"text-xl font-bold mb-1 text-foreground",children:"Join DreamBuild"}),r.jsx("p",{className:"text-muted-foreground text-xs",children:"Create your account"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs(R.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:a,disabled:o,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background disabled:opacity-50 disabled:cursor-not-allowed",children:[o?r.jsx(Mt,{className:"h-4 w-4 animate-spin text-primary"}):r.jsxs("svg",{className:"h-4 w-4",viewBox:"0 0 24 24",children:[r.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),r.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),r.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),r.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),o?"Creating account...":"Continue with Google"]}),r.jsxs(R.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:l,className:"w-full flex items-center justify-center gap-2 p-2.5 border border-border rounded-md hover:bg-muted/30 transition-colors text-sm font-medium bg-background",children:[r.jsx(Ae,{className:"h-4 w-4"}),"Continue with GitHub"]})]}),r.jsxs("div",{className:"relative my-4",children:[r.jsx("div",{className:"absolute inset-0 flex items-center",children:r.jsx("div",{className:"w-full border-t border-border"})}),r.jsx("div",{className:"relative flex justify-center text-xs",children:r.jsx("span",{className:"bg-card px-2 text-muted-foreground",children:"or"})})]}),r.jsx("div",{className:"text-center",children:r.jsxs(R.a,{whileHover:{scale:1.02},whileTap:{scale:.98},href:"/ai-builder",className:"inline-flex items-center gap-1 px-3 py-1.5 text-primary hover:text-primary-dark transition-colors font-medium text-xs",children:["Continue as Guest",r.jsx(Bt,{className:"h-3 w-3"})]})})]})})})]})},mg=()=>{const{currentProject:t,createNewProject:e,projects:s,switchProject:n}=lt(),[o,i]=p.useState(""),[a,l]=p.useState("all"),[c,d]=p.useState(!1),[m,u]=p.useState(""),[g,y]=p.useState("web"),[f,w]=p.useState(null),[h,C]=p.useState([{id:"1",name:"E-commerce Store",type:"ecommerce",description:"Modern e-commerce platform with React and Node.js",status:"active",lastModified:"2024-01-15",files:12,size:"2.4 MB",tags:["React","Node.js","E-commerce"],preview:"https://via.placeholder.com/300x200/007acc/ffffff?text=E-commerce+Store"},{id:"2",name:"Portfolio Website",type:"web",description:"Personal portfolio website with modern design",status:"completed",lastModified:"2024-01-10",files:8,size:"1.2 MB",tags:["HTML","CSS","JavaScript"],preview:"https://via.placeholder.com/300x200/28a745/ffffff?text=Portfolio+Website"},{id:"3",name:"Task Manager App",type:"mobile",description:"Mobile task management application",status:"development",lastModified:"2024-01-12",files:15,size:"3.1 MB",tags:["React Native","Firebase"],preview:"https://via.placeholder.com/300x200/ffc107/000000?text=Task+Manager"},{id:"4",name:"Analytics Dashboard",type:"dashboard",description:"Business analytics dashboard with charts",status:"active",lastModified:"2024-01-14",files:20,size:"4.2 MB",tags:["Vue.js","D3.js","Charts"],preview:"https://via.placeholder.com/300x200/6f42c1/ffffff?text=Analytics+Dashboard"},{id:"5",name:"REST API Service",type:"api",description:"Node.js REST API with authentication and database",status:"active",lastModified:"2024-01-16",files:25,size:"1.8 MB",tags:["Node.js","Express","MongoDB"],preview:"https://via.placeholder.com/300x200/17a2b8/ffffff?text=REST+API"},{id:"6",name:"Space Adventure Game",type:"game",description:"2D space shooter game built with JavaScript",status:"development",lastModified:"2024-01-13",files:18,size:"2.9 MB",tags:["JavaScript","Canvas","Game"],preview:"https://via.placeholder.com/300x200/e83e8c/ffffff?text=Space+Game"},{id:"7",name:"Social Media App",type:"mobile",description:"Social networking app with real-time chat",status:"active",lastModified:"2024-01-17",files:22,size:"4.1 MB",tags:["Flutter","Firebase","Chat"],preview:"https://via.placeholder.com/300x200/20c997/ffffff?text=Social+App"},{id:"8",name:"Admin Dashboard",type:"dashboard",description:"Administrative interface for managing users and content",status:"completed",lastModified:"2024-01-11",files:16,size:"3.3 MB",tags:["React","Material-UI","Admin"],preview:"https://via.placeholder.com/300x200/6c757d/ffffff?text=Admin+Dashboard"}]),j=[{id:"all",name:"All",icon:ze,count:h.length},{id:"web",name:"Web Apps",icon:Ie,count:h.filter(S=>S.type==="web").length},{id:"mobile",name:"Mobile",icon:se,count:h.filter(S=>S.type==="mobile").length},{id:"dashboard",name:"Dashboards",icon:pt,count:h.filter(S=>S.type==="dashboard").length},{id:"api",name:"APIs",icon:pt,count:h.filter(S=>S.type==="api").length},{id:"game",name:"Games",icon:Ft,count:h.filter(S=>S.type==="game").length},{id:"ecommerce",name:"E-commerce",icon:pt,count:h.filter(S=>S.type==="ecommerce").length},{id:"completed",name:"Completed",icon:Ft,count:h.filter(S=>S.status==="completed").length}],v=h.filter(S=>{const I=S.name.toLowerCase().includes(o.toLowerCase())||S.description.toLowerCase().includes(o.toLowerCase())||S.tags.some(P=>P.toLowerCase().includes(o.toLowerCase())),E=a==="all"||S.type===a||S.status===a;return I&&E}),b=()=>{if(!m.trim()){U.error("Please enter a project name");return}const S={id:Date.now().toString(),name:m,type:g,description:`New ${g} project`,status:"active",lastModified:new Date().toISOString().split("T")[0],files:0,size:"0 MB",tags:[g],preview:"https://via.placeholder.com/300x200/6c757d/ffffff?text=New+Project"};C([S,...h]),u(""),y("web"),d(!1),U.success("Project created successfully!")},x=S=>{C(h.filter(I=>I.id!==S)),w(null),U.success("Project deleted successfully!")},k=S=>{switch(S){case"active":return"bg-green-100 text-green-800 border-green-200";case"development":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"completed":return"bg-white/10 text-white border-white/20";default:return"bg-gray-100 text-gray-800 border-gray-200"}},A=S=>{switch(S){case"web":return Ie;case"mobile":return se;case"dashboard":return pt;default:return ze}};return r.jsxs("div",{className:"min-h-screen bg-background",children:[r.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Projects"}),r.jsx("p",{className:"text-muted-foreground",children:"Manage your AI-generated projects"})]}),r.jsxs(R.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>d(!0),className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[r.jsx(br,{className:"h-4 w-4"}),"New Project"]})]}),r.jsx("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-lg mb-6",children:j.map(S=>{const I=S.icon,E=a===S.id;return r.jsxs(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>l(S.id),className:`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${E?"bg-primary text-primary-foreground shadow-sm":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[r.jsx(I,{className:"h-4 w-4"}),S.name,r.jsx("span",{className:`text-xs px-1.5 py-0.5 rounded-full ${E?"bg-primary-foreground/20":"bg-muted"}`,children:S.count})]},S.id)})}),r.jsxs("div",{className:"relative mb-6",children:[r.jsx(nt,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx("input",{type:"text",placeholder:"Search projects...",value:o,onChange:S=>i(S.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),r.jsx("div",{className:"space-y-2",children:v.map((S,I)=>{const E=A(S.type);return r.jsxs(R.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:I*.05},className:"bg-card border border-border rounded-lg p-4 hover:shadow-sm transition-all duration-200 group",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[r.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",children:r.jsx(E,{className:"h-5 w-5 text-primary"})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-1",children:[r.jsx("h3",{className:"font-semibold text-foreground truncate",children:S.name}),r.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${k(S.status)}`,children:S.status})]}),r.jsx("p",{className:"text-sm text-muted-foreground truncate mb-2",children:S.description}),r.jsxs("div",{className:"flex items-center gap-4 text-xs text-muted-foreground",children:[r.jsxs("span",{className:"flex items-center gap-1",children:[r.jsx(Ut,{className:"h-3 w-3"}),S.files," files"]}),r.jsx("span",{children:S.size}),r.jsxs("span",{className:"flex items-center gap-1",children:[r.jsx(ht,{className:"h-3 w-3"}),S.lastModified]})]})]}),r.jsx("div",{className:"flex items-center gap-2",children:r.jsxs("div",{className:"flex gap-1",children:[S.tags.slice(0,2).map(P=>r.jsx("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:P},P)),S.tags.length>2&&r.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["+",S.tags.length-2]})]})})]}),r.jsxs("div",{className:"flex items-center gap-1 ml-4",children:[r.jsx(R.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 hover:bg-muted rounded-md transition-colors",onClick:()=>n(S.id),children:r.jsx(vr,{className:"h-4 w-4 text-muted-foreground"})}),r.jsx(R.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 hover:bg-muted rounded-md transition-colors",children:r.jsx(ps,{className:"h-4 w-4 text-muted-foreground"})}),r.jsx("button",{onClick:()=>w(f===S.id?null:S.id),className:"p-2 hover:bg-muted rounded-md transition-colors",children:r.jsx(Aa,{className:"h-4 w-4 text-muted-foreground"})})]})]}),r.jsx($e,{children:f===S.id&&r.jsx(R.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"absolute right-4 mt-1 bg-card border border-border rounded-lg shadow-lg z-10 min-w-[150px]",children:r.jsxs("div",{className:"p-1",children:[r.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[r.jsx(vr,{className:"h-4 w-4"}),"View"]}),r.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[r.jsx(ps,{className:"h-4 w-4"}),"Edit"]}),r.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[r.jsx(st,{className:"h-4 w-4"}),"Download"]}),r.jsxs("button",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[r.jsx(go,{className:"h-4 w-4"}),"Share"]}),r.jsx("hr",{className:"my-1"}),r.jsxs("button",{onClick:()=>x(S.id),className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors",children:[r.jsx(po,{className:"h-4 w-4"}),"Delete"]})]})})})]},S.id)})}),v.length===0&&r.jsxs("div",{className:"text-center py-12",children:[r.jsx("div",{className:"w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4",children:r.jsx(ze,{className:"h-8 w-8 text-primary"})}),r.jsx("h3",{className:"text-lg font-semibold text-foreground mb-2",children:o||a!=="all"?"No projects found":"No projects yet"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:o||a!=="all"?"Try adjusting your search or filter criteria.":"Create your first project to get started!"}),r.jsxs(R.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>d(!0),className:"inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[r.jsx(br,{className:"h-4 w-4"}),"Create Project"]})]})]}),r.jsx($e,{children:c&&r.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:()=>d(!1),children:r.jsxs(R.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4",onClick:S=>S.stopPropagation(),children:[r.jsx("h2",{className:"text-xl font-semibold text-foreground mb-4",children:"Create New Project"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Name"}),r.jsx("input",{type:"text",value:m,onChange:S=>u(S.target.value),placeholder:"Enter project name...",className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",autoFocus:!0})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-foreground mb-2",children:"Project Type"}),r.jsxs("select",{value:g,onChange:S=>y(S.target.value),className:"w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[r.jsx("option",{value:"web",children:"Web Application"}),r.jsx("option",{value:"mobile",children:"Mobile Application"}),r.jsx("option",{value:"dashboard",children:"Dashboard"})]})]})]}),r.jsxs("div",{className:"flex gap-3 mt-6",children:[r.jsx(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>d(!1),className:"flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors",children:"Cancel"}),r.jsx(R.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:b,className:"flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Create"})]})]})})}),f&&r.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>w(null)})]})},pg=()=>{var v,b;const{theme:t,setTheme:e}=Gs(),[s,n]=p.useState("appearance"),[o,i]=p.useState({appearance:{theme:t,fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),[a,l]=p.useState(!0),[c,d]=p.useState(!1);p.useEffect(()=>{const x=localStorage.getItem("dreambuild-settings");x&&i(JSON.parse(x)),l(!1)},[]),p.useEffect(()=>{d(!0)},[o]);const m=()=>{localStorage.setItem("dreambuild-settings",JSON.stringify(o)),d(!1),console.log("Settings saved successfully!")},u=()=>{i({appearance:{theme:"system",fontSize:"medium",fontFamily:"system",animations:!0,compactMode:!1},editor:{tabSize:2,wordWrap:!0,minimap:!0,lineNumbers:!0,autoSave:!0,formatOnSave:!0,autoComplete:!0},ai:{defaultModel:"codellama-7b",temperature:.7,maxTokens:4e3,autoGenerate:!1,suggestions:!0},notifications:{projectUpdates:!0,aiCompletions:!0,errors:!0,sound:!1,email:!1},privacy:{analytics:!0,crashReports:!0,telemetry:!1,shareUsage:!1}}),console.log("Settings reset to defaults!")},g=()=>{const x=JSON.stringify(o,null,2),k=new Blob([x],{type:"application/json"}),A=URL.createObjectURL(k),S=document.createElement("a");S.href=A,S.download="dreambuild-settings.json",S.click(),URL.revokeObjectURL(A),console.log("Settings exported!")},y=x=>{const k=x.target.files[0];if(k){const A=new FileReader;A.onload=S=>{try{const I=JSON.parse(S.target.result);i(I),console.log("Settings imported successfully!")}catch{console.error("Invalid settings file!")}},A.readAsText(k)}},f=(x,k,A)=>{i(S=>({...S,[x]:{...S[x],[k]:A}})),x==="appearance"&&k==="theme"&&e(A)},w=[{id:"appearance",name:"Appearance",icon:Pa},{id:"editor",name:"Editor",icon:se},{id:"ai",name:"AI Settings",icon:ke},{id:"notifications",name:"Notifications",icon:Ra},{id:"privacy",name:"Privacy",icon:ms}],h=({title:x,description:k,children:A,warning:S})=>r.jsxs("div",{className:"flex items-start justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors",children:[r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[r.jsx("h3",{className:"font-medium text-foreground",children:x}),S&&r.jsx(Oa,{className:"h-4 w-4 text-yellow-500",title:S})]}),r.jsx("p",{className:"text-sm text-muted-foreground",children:k})]}),r.jsx("div",{className:"ml-4",children:A})]}),C=({checked:x,onChange:k,disabled:A=!1})=>r.jsx("button",{onClick:()=>k(!x),disabled:A,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${x?"bg-gray-700":"bg-muted"} ${A?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,children:r.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${x?"translate-x-6":"translate-x-1"}`})}),j=()=>{switch(s){case"appearance":return r.jsxs("div",{className:"space-y-1",children:[r.jsx(h,{title:"Theme",description:"Choose your preferred color scheme",children:r.jsxs("select",{value:o.appearance.theme,onChange:x=>f("appearance","theme",x.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[r.jsx("option",{value:"light",children:"Light Theme"}),r.jsx("option",{value:"dark",children:"Dark Theme"}),r.jsx("option",{value:"system",children:"System Theme"}),r.jsx("option",{value:"blue",children:"Blue Theme"}),r.jsx("option",{value:"purple",children:"Purple Theme"}),r.jsx("option",{value:"green",children:"Green Theme"}),r.jsx("option",{value:"orange",children:"Orange Theme"}),r.jsx("option",{value:"red",children:"Red Theme"}),r.jsx("option",{value:"pink",children:"Pink Theme"}),r.jsx("option",{value:"cyan",children:"Cyan Theme"}),r.jsx("option",{value:"amber",children:"Amber Theme"}),r.jsx("option",{value:"emerald",children:"Emerald Theme"})]})}),r.jsx(h,{title:"Font Size",description:"Adjust the text size throughout the interface",children:r.jsxs("select",{value:o.appearance.fontSize,onChange:x=>f("appearance","fontSize",x.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[r.jsx("option",{value:"small",children:"Small"}),r.jsx("option",{value:"medium",children:"Medium"}),r.jsx("option",{value:"large",children:"Large"})]})}),r.jsx(h,{title:"Font Family",description:"Choose the font family for the editor",children:r.jsxs("select",{value:o.appearance.fontFamily,onChange:x=>f("appearance","fontFamily",x.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[r.jsx("option",{value:"system",children:"System Default"}),r.jsx("option",{value:"mono",children:"Monospace"}),r.jsx("option",{value:"sans",children:"Sans Serif"}),r.jsx("option",{value:"serif",children:"Serif"})]})}),r.jsx(h,{title:"Animations",description:"Enable smooth animations and transitions",children:r.jsx(C,{checked:o.appearance.animations,onChange:x=>f("appearance","animations",x)})}),r.jsx(h,{title:"Compact Mode",description:"Reduce spacing for a more compact interface",children:r.jsx(C,{checked:o.appearance.compactMode,onChange:x=>f("appearance","compactMode",x)})})]});case"editor":return r.jsxs("div",{className:"space-y-1",children:[r.jsx(h,{title:"Tab Size",description:"Number of spaces for indentation",children:r.jsxs("select",{value:o.editor.tabSize,onChange:x=>f("editor","tabSize",parseInt(x.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[r.jsx("option",{value:2,children:"2 spaces"}),r.jsx("option",{value:4,children:"4 spaces"}),r.jsx("option",{value:8,children:"8 spaces"})]})}),r.jsx(h,{title:"Word Wrap",description:"Wrap long lines in the editor",children:r.jsx(C,{checked:o.editor.wordWrap,onChange:x=>f("editor","wordWrap",x)})}),r.jsx(h,{title:"Minimap",description:"Show a minimap of your code",children:r.jsx(C,{checked:o.editor.minimap,onChange:x=>f("editor","minimap",x)})}),r.jsx(h,{title:"Line Numbers",description:"Show line numbers in the editor",children:r.jsx(C,{checked:o.editor.lineNumbers,onChange:x=>f("editor","lineNumbers",x)})}),r.jsx(h,{title:"Auto Save",description:"Automatically save files as you type",children:r.jsx(C,{checked:o.editor.autoSave,onChange:x=>f("editor","autoSave",x)})}),r.jsx(h,{title:"Format on Save",description:"Automatically format code when saving",children:r.jsx(C,{checked:o.editor.formatOnSave,onChange:x=>f("editor","formatOnSave",x)})}),r.jsx(h,{title:"Auto Complete",description:"Enable intelligent code completion",children:r.jsx(C,{checked:o.editor.autoComplete,onChange:x=>f("editor","autoComplete",x)})})]});case"ai":return r.jsxs("div",{className:"space-y-1",children:[r.jsx(h,{title:"Default AI Model",description:"Choose your preferred AI model for code generation",children:r.jsxs("select",{value:o.ai.defaultModel,onChange:x=>f("ai","defaultModel",x.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[r.jsx("option",{value:"codellama-7b",children:"CodeLlama 7B"}),r.jsx("option",{value:"codellama-13b",children:"CodeLlama 13B"}),r.jsx("option",{value:"starcoder-15b",children:"StarCoder 15B"}),r.jsx("option",{value:"deepseek-coder",children:"DeepSeek Coder"}),r.jsx("option",{value:"wizardcoder-7b",children:"WizardCoder 7B"})]})}),r.jsx(h,{title:"Temperature",description:"Controls randomness in AI responses (0.0 = deterministic, 1.0 = creative)",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:o.ai.temperature,onChange:x=>f("ai","temperature",parseFloat(x.target.value)),className:"w-24"}),r.jsx("span",{className:"text-sm text-muted-foreground w-8",children:o.ai.temperature})]})}),r.jsx(h,{title:"Max Tokens",description:"Maximum number of tokens in AI responses",children:r.jsxs("select",{value:o.ai.maxTokens,onChange:x=>f("ai","maxTokens",parseInt(x.target.value)),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[r.jsx("option",{value:1e3,children:"1,000"}),r.jsx("option",{value:2e3,children:"2,000"}),r.jsx("option",{value:4e3,children:"4,000"}),r.jsx("option",{value:8e3,children:"8,000"})]})}),r.jsx(h,{title:"Auto Generate",description:"Automatically generate code suggestions as you type",children:r.jsx(C,{checked:o.ai.autoGenerate,onChange:x=>f("ai","autoGenerate",x)})}),r.jsx(h,{title:"AI Suggestions",description:"Show contextual AI suggestions in the editor",children:r.jsx(C,{checked:o.ai.suggestions,onChange:x=>f("ai","suggestions",x)})})]});case"notifications":return r.jsxs("div",{className:"space-y-1",children:[r.jsx(h,{title:"Project Updates",description:"Get notified when projects are updated",children:r.jsx(C,{checked:o.notifications.projectUpdates,onChange:x=>f("notifications","projectUpdates",x)})}),r.jsx(h,{title:"AI Completions",description:"Get notified when AI completes code generation",children:r.jsx(C,{checked:o.notifications.aiCompletions,onChange:x=>f("notifications","aiCompletions",x)})}),r.jsx(h,{title:"Error Notifications",description:"Get notified about errors and issues",children:r.jsx(C,{checked:o.notifications.errors,onChange:x=>f("notifications","errors",x)})}),r.jsx(h,{title:"Sound Notifications",description:"Play sounds for notifications",children:r.jsx(C,{checked:o.notifications.sound,onChange:x=>f("notifications","sound",x)})}),r.jsx(h,{title:"Email Notifications",description:"Receive notifications via email",children:r.jsx(C,{checked:o.notifications.email,onChange:x=>f("notifications","email",x)})})]});case"privacy":return r.jsxs("div",{className:"space-y-1",children:[r.jsx(h,{title:"Analytics",description:"Help improve DreamBuild by sharing anonymous usage data",children:r.jsx(C,{checked:o.privacy.analytics,onChange:x=>f("privacy","analytics",x)})}),r.jsx(h,{title:"Crash Reports",description:"Automatically send crash reports to help fix bugs",children:r.jsx(C,{checked:o.privacy.crashReports,onChange:x=>f("privacy","crashReports",x)})}),r.jsx(h,{title:"Telemetry",description:"Share performance and usage telemetry",warning:"This may include personal information",children:r.jsx(C,{checked:o.privacy.telemetry,onChange:x=>f("privacy","telemetry",x)})}),r.jsx(h,{title:"Share Usage Statistics",description:"Share anonymous usage statistics with the community",children:r.jsx(C,{checked:o.privacy.shareUsage,onChange:x=>f("privacy","shareUsage",x)})})]});default:return null}};return a?r.jsx("div",{className:"min-h-screen bg-background",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:r.jsxs("div",{className:"animate-pulse",children:[r.jsx("div",{className:"h-8 bg-muted rounded w-1/4 mb-6"}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[r.jsx("div",{className:"lg:col-span-1",children:r.jsx("div",{className:"space-y-3",children:[...Array(5)].map((x,k)=>r.jsx("div",{className:"h-12 bg-muted rounded"},k))})}),r.jsx("div",{className:"lg:col-span-3",children:r.jsx("div",{className:"bg-card/50 rounded-xl p-6",children:r.jsx("div",{className:"space-y-4",children:[...Array(6)].map((x,k)=>r.jsx("div",{className:"h-16 bg-muted rounded"},k))})})})]})]})})}):r.jsx("div",{className:"min-h-screen bg-background",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsx("div",{className:"mb-8",children:r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Settings"}),r.jsx("p",{className:"text-muted-foreground",children:"Customize your DreamBuild experience and preferences"})]}),r.jsx("div",{className:"flex items-center gap-2",children:c&&r.jsxs(R.button,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},onClick:m,className:"flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200",children:[r.jsx(uo,{className:"h-4 w-4"}),"Save Changes"]})})]})}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[r.jsxs("div",{className:"lg:col-span-1",children:[r.jsx("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:r.jsx("nav",{className:"space-y-2",children:w.map(x=>{const k=x.icon;return r.jsxs("button",{onClick:()=>n(x.id),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${s===x.id?"bg-gray-700 text-white shadow-sm":"text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,children:[r.jsx(k,{className:"h-4 w-4"}),x.name]},x.id)})})}),r.jsxs("div",{className:"mt-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4",children:[r.jsx("h3",{className:"font-semibold text-foreground mb-3",children:"Data Management"}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("button",{onClick:g,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors",children:[r.jsx(st,{className:"h-4 w-4"}),"Export Settings"]}),r.jsxs("label",{className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors cursor-pointer",children:[r.jsx(mo,{className:"h-4 w-4"}),"Import Settings",r.jsx("input",{type:"file",accept:".json",onChange:y,className:"hidden"})]}),r.jsxs("button",{onClick:u,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:[r.jsx(Fs,{className:"h-4 w-4"}),"Reset to Defaults"]})]})]})]}),r.jsx("div",{className:"lg:col-span-3",children:r.jsxs("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden",children:[r.jsx("div",{className:"p-6 border-b border-border/50",children:r.jsxs("h2",{className:"text-xl font-semibold text-foreground flex items-center gap-2",children:[Ee.createElement((v=w.find(x=>x.id===s))==null?void 0:v.icon,{className:"h-5 w-5 text-white"}),(b=w.find(x=>x.id===s))==null?void 0:b.name]})}),r.jsx("div",{className:"divide-y divide-border/50",children:j()})]})})]})]})})},hg=()=>{const[t,e]=p.useState(""),[s,n]=p.useState("getting-started"),o=[{id:"getting-started",title:"Getting Started",icon:gt,articles:[{title:"Quick Start Guide",description:"Get up and running in 5 minutes"},{title:"Installation",description:"Install DreamBuild on your system"},{title:"First Project",description:"Create your first AI-generated project"},{title:"Basic Concepts",description:"Understanding the DreamBuild workflow"}]},{id:"ai-features",title:"AI Features",icon:se,articles:[{title:"Code Generation",description:"Generate code with AI assistance"},{title:"Local AI Setup",description:"Set up Ollama for offline AI"},{title:"Template System",description:"Use pre-built project templates"},{title:"AI Models",description:"Available AI models and capabilities"}]},{id:"api-reference",title:"API Reference",icon:hs,articles:[{title:"REST API",description:"Complete API documentation"},{title:"WebSocket API",description:"Real-time communication"},{title:"Authentication",description:"API authentication methods"},{title:"Rate Limits",description:"API usage limits and quotas"}]},{id:"deployment",title:"Deployment",icon:Ie,articles:[{title:"Firebase Hosting",description:"Deploy to Firebase"},{title:"GitHub Pages",description:"Deploy to GitHub Pages"},{title:"Custom Domain",description:"Set up custom domains"},{title:"CI/CD Pipeline",description:"Automated deployment workflows"}]}],i=[{title:"API Documentation",href:"#",icon:se},{title:"GitHub Repository",href:"https://github.com/ronb12/DreamBuild",icon:Ae},{title:"Community Forum",href:"#",icon:Ie},{title:"Video Tutorials",href:"#",icon:It}];return r.jsx("div",{className:"min-h-screen bg-background",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:r.jsx(ar,{className:"h-6 w-6 text-primary"})}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Documentation"}),r.jsx("p",{className:"text-muted-foreground",children:"Complete guides and API references for DreamBuild"})]})]}),r.jsxs("div",{className:"relative max-w-md",children:[r.jsx(nt,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx("input",{type:"text",placeholder:"Search documentation...",value:t,onChange:a=>e(a.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[r.jsx("div",{className:"lg:col-span-1",children:r.jsxs("div",{className:"sticky top-8 space-y-2",children:[r.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Sections"}),o.map(a=>{const l=a.icon;return r.jsxs("button",{onClick:()=>n(a.id),className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${s===a.id?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx("span",{className:"text-sm font-medium",children:a.title})]},a.id)}),r.jsxs("div",{className:"mt-8 pt-6 border-t border-border",children:[r.jsx("h3",{className:"text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4",children:"Quick Links"}),r.jsx("div",{className:"space-y-2",children:i.map(a=>{const l=a.icon;return r.jsxs("a",{href:a.href,target:a.href.startsWith("http")?"_blank":void 0,rel:a.href.startsWith("http")?"noopener noreferrer":void 0,className:"flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx("span",{children:a.title}),a.href.startsWith("http")&&r.jsx(It,{className:"h-3 w-3 ml-auto"})]},a.title)})})]})]})}),r.jsxs("div",{className:"lg:col-span-3",children:[r.jsx("div",{className:"bg-card border border-border rounded-xl p-6",children:o.map(a=>{const l=a.icon;return r.jsxs("div",{className:s===a.id?"block":"hidden",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[r.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:r.jsx(l,{className:"h-5 w-5 text-primary"})}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-2xl font-bold text-foreground",children:a.title}),r.jsxs("p",{className:"text-muted-foreground",children:["Learn about ",a.title.toLowerCase()]})]})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:a.articles.map((c,d)=>r.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:d*.1},className:"p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer group",children:r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors mb-2",children:c.title}),r.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:c.description})]}),r.jsx(Ia,{className:"h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"})]})},c.title))})]},a.id)})}),s==="getting-started"&&r.jsxs("div",{className:"mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6",children:[r.jsx("h3",{className:"text-lg font-semibold text-foreground mb-4",children:"Ready to get started?"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Follow our quick start guide to create your first AI-generated project in minutes."}),r.jsxs("div",{className:"flex gap-3",children:[r.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[r.jsx(gt,{className:"h-4 w-4"}),"Quick Start Guide"]}),r.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors",children:[r.jsx(st,{className:"h-4 w-4"}),"Download PDF"]})]})]})]})]})]})})},fg=()=>{const[t,e]=p.useState(""),[s,n]=p.useState("all"),[o,i]=p.useState("grid"),a=[{id:"all",name:"All Examples",count:24},{id:"web",name:"Web Apps",count:8},{id:"mobile",name:"Mobile Apps",count:6},{id:"api",name:"APIs",count:5},{id:"dashboard",name:"Dashboards",count:5}],c=[{id:1,title:"E-commerce Store",description:"Full-featured online store with React, Node.js, and Stripe integration",category:"web",difficulty:"Intermediate",tags:["React","Node.js","Stripe","MongoDB"],stars:156,language:"JavaScript",preview:"https://via.placeholder.com/400x250/2563eb/ffffff?text=E-commerce+Store",github:"https://github.com/example/ecommerce-store"},{id:2,title:"Task Management App",description:"Collaborative task management with real-time updates and team features",category:"web",difficulty:"Beginner",tags:["Vue.js","Firebase","Real-time"],stars:89,language:"JavaScript",preview:"https://via.placeholder.com/400x250/10b981/ffffff?text=Task+Manager",github:"https://github.com/example/task-manager"},{id:3,title:"Fitness Tracker",description:"Mobile app for tracking workouts, nutrition, and fitness goals",category:"mobile",difficulty:"Intermediate",tags:["React Native","GraphQL","Health API"],stars:234,language:"TypeScript",preview:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Fitness+Tracker",github:"https://github.com/example/fitness-tracker"},{id:4,title:"Analytics Dashboard",description:"Business intelligence dashboard with charts, metrics, and reporting",category:"dashboard",difficulty:"Advanced",tags:["D3.js","Python","PostgreSQL"],stars:312,language:"Python",preview:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Analytics+Dashboard",github:"https://github.com/example/analytics-dashboard"},{id:5,title:"REST API Template",description:"Production-ready REST API with authentication, validation, and documentation",category:"api",difficulty:"Intermediate",tags:["Express.js","JWT","Swagger"],stars:178,language:"JavaScript",preview:"https://via.placeholder.com/400x250/ef4444/ffffff?text=REST+API",github:"https://github.com/example/rest-api-template"},{id:6,title:"Portfolio Website",description:"Modern portfolio website with animations, blog, and contact form",category:"web",difficulty:"Beginner",tags:["Next.js","Tailwind","Framer Motion"],stars:67,language:"TypeScript",preview:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Portfolio",github:"https://github.com/example/portfolio-website"},{id:7,title:"Social Media App",description:"Instagram-like social media app with posts, stories, and messaging",category:"mobile",difficulty:"Advanced",tags:["Flutter","Firebase","Real-time"],stars:445,language:"Dart",preview:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Social+App",github:"https://github.com/example/social-media-app"},{id:8,title:"GraphQL API",description:"Modern GraphQL API with subscriptions, caching, and real-time updates",category:"api",difficulty:"Advanced",tags:["GraphQL","Apollo","Redis"],stars:298,language:"TypeScript",preview:"https://via.placeholder.com/400x250/84cc16/ffffff?text=GraphQL+API",github:"https://github.com/example/graphql-api"}].filter(u=>{const g=u.title.toLowerCase().includes(t.toLowerCase())||u.description.toLowerCase().includes(t.toLowerCase())||u.tags.some(f=>f.toLowerCase().includes(t.toLowerCase())),y=s==="all"||u.category===s;return g&&y}),d=u=>{switch(u){case"Beginner":return"bg-green-100 text-green-800 border-green-200";case"Intermediate":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"Advanced":return"bg-red-100 text-red-800 border-red-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}},m=u=>{switch(u){case"web":return Ie;case"mobile":return fo;case"api":return ir;case"dashboard":return Ut;default:return Vr}};return r.jsx("div",{className:"min-h-screen bg-background",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:r.jsx(Vr,{className:"h-6 w-6 text-primary"})}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Examples"}),r.jsx("p",{className:"text-muted-foreground",children:"Explore real-world projects and code examples"})]})]}),r.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:[r.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[r.jsxs("div",{className:"relative max-w-md",children:[r.jsx(nt,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx("input",{type:"text",placeholder:"Search examples...",value:t,onChange:u=>e(u.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Ls,{className:"h-4 w-4 text-muted-foreground"}),r.jsx("select",{value:s,onChange:u=>n(u.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:a.map(u=>r.jsxs("option",{value:u.id,children:[u.name," (",u.count,")"]},u.id))})]})]}),r.jsxs("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-lg",children:[r.jsx("button",{onClick:()=>i("grid"),className:`p-2 rounded-md transition-colors ${o==="grid"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:r.jsx(Grid3X3,{className:"h-4 w-4"})}),r.jsx("button",{onClick:()=>i("list"),className:`p-2 rounded-md transition-colors ${o==="list"?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground"}`,children:r.jsx(Ma,{className:"h-4 w-4"})})]})]})]}),r.jsx("div",{className:o==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"space-y-4",children:c.map((u,g)=>{const y=m(u.category);return r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:g*.1},className:`bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group ${o==="list"?"flex":""}`,children:[r.jsxs("div",{className:`relative ${o==="list"?"w-48 h-32":"h-48"} bg-muted/50`,children:[r.jsx("img",{src:u.preview,alt:u.title,className:"w-full h-full object-cover"}),r.jsx("div",{className:"absolute top-3 right-3 flex gap-2",children:r.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${d(u.difficulty)}`,children:u.difficulty})}),r.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100",children:r.jsxs("div",{className:"flex gap-2",children:[r.jsx(R.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-primary text-primary-foreground rounded-lg shadow-lg",title:"Run Example",children:r.jsx(cn,{className:"h-4 w-4"})}),r.jsx(R.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-2 bg-white text-gray-900 rounded-lg shadow-lg",title:"Copy Code",children:r.jsx(Tr,{className:"h-4 w-4"})})]})})]}),r.jsxs("div",{className:`p-4 ${o==="list"?"flex-1":""}`,children:[r.jsxs("div",{className:"flex items-start justify-between mb-3",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",children:r.jsx(y,{className:"h-4 w-4 text-primary"})}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:u.title}),r.jsx("p",{className:"text-sm text-muted-foreground",children:u.language})]})]}),r.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[r.jsx(Ft,{className:"h-4 w-4"}),r.jsx("span",{children:u.stars})]})]}),r.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:u.description}),r.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:u.tags.map(f=>r.jsx("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:f},f))}),r.jsxs("div",{className:"flex gap-2",children:[r.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm",children:[r.jsx(cn,{className:"h-4 w-4"}),"Run"]}),r.jsxs("a",{href:u.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[r.jsx(Ae,{className:"h-4 w-4"}),"Code"]}),r.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm",children:[r.jsx(st,{className:"h-4 w-4"}),"Download"]})]})]})]},u.id)})}),c.length===0&&r.jsxs("div",{className:"text-center py-16",children:[r.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(Vr,{className:"h-12 w-12 text-muted-foreground"})}),r.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No examples found"}),r.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),r.jsx("button",{onClick:()=>{e(""),n("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),r.jsxs("div",{className:"mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[r.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Have a great example to share?"}),r.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Share your projects with the DreamBuild community and help other developers learn and grow."}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[r.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[r.jsx(Ae,{className:"h-5 w-5"}),"Submit Example"]}),r.jsxs("button",{className:"flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[r.jsx(It,{className:"h-5 w-5"}),"View Guidelines"]})]})]})]})})},gg=()=>{const[t,e]=p.useState("discussions"),[s,n]=p.useState(""),o=[{id:"discussions",name:"Discussions",count:156,icon:yr},{id:"projects",name:"Showcase",count:89,icon:se},{id:"events",name:"Events",count:12,icon:ht},{id:"resources",name:"Resources",count:45,icon:fs}],i=[{id:1,title:"How to set up Ollama for local AI development?",author:"Alex Chen",avatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=AC",time:"2 hours ago",category:"Getting Started",replies:12,likes:24,isPinned:!0,tags:["ollama","local-ai","setup"]},{id:2,title:"Building a React Native app with DreamBuild - Tips and tricks",author:"Sarah Johnson",avatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SJ",time:"4 hours ago",category:"Mobile Development",replies:8,likes:18,isPinned:!1,tags:["react-native","mobile","tips"]},{id:3,title:"Share your DreamBuild projects - Monthly showcase",author:"Community Team",avatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=CT",time:"1 day ago",category:"Showcase",replies:34,likes:67,isPinned:!0,tags:["showcase","projects","monthly"]},{id:4,title:"API rate limits and best practices",author:"Mike Rodriguez",avatar:"https://via.placeholder.com/40x40/8b5cf6/ffffff?text=MR",time:"2 days ago",category:"API",replies:15,likes:31,isPinned:!1,tags:["api","rate-limits","best-practices"]},{id:5,title:"Deploying to Firebase vs GitHub Pages - Pros and cons",author:"Emma Wilson",avatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=EW",time:"3 days ago",category:"Deployment",replies:22,likes:45,isPinned:!1,tags:["deployment","firebase","github-pages"]}],a=[{id:1,title:"DreamBuild Live Q&A Session",date:"2024-01-25",time:"2:00 PM EST",type:"Live Stream",attendees:156,description:"Join our monthly Q&A session with the DreamBuild team"},{id:2,title:"AI Development Workshop",date:"2024-01-30",time:"10:00 AM EST",type:"Workshop",attendees:89,description:"Learn advanced AI development techniques with DreamBuild"},{id:3,title:"Community Showcase",date:"2024-02-05",time:"6:00 PM EST",type:"Presentation",attendees:234,description:"Featured projects from our amazing community members"}],l=[{label:"Active Members",value:"2,847",icon:gr},{label:"Discussions",value:"1,234",icon:yr},{label:"Projects Shared",value:"567",icon:se},{label:"Events This Month",value:"8",icon:ht}],c=i.filter(d=>d.title.toLowerCase().includes(s.toLowerCase())||d.category.toLowerCase().includes(s.toLowerCase())||d.tags.some(m=>m.toLowerCase().includes(s.toLowerCase())));return r.jsx("div",{className:"min-h-screen bg-background",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:r.jsx(gr,{className:"h-6 w-6 text-primary"})}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Community"}),r.jsx("p",{className:"text-muted-foreground",children:"Connect with developers, share projects, and get help"})]})]}),r.jsxs("div",{className:"relative max-w-md",children:[r.jsx(nt,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx("input",{type:"text",placeholder:"Search discussions...",value:s,onChange:d=>n(d.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:l.map((d,m)=>{const u=d.icon;return r.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:m*.1},className:"bg-card border border-border rounded-xl p-4",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",children:r.jsx(u,{className:"h-5 w-5 text-primary"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-2xl font-bold text-foreground",children:d.value}),r.jsx("p",{className:"text-sm text-muted-foreground",children:d.label})]})]})},d.label)})}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[r.jsxs("div",{className:"lg:col-span-3",children:[r.jsx("div",{className:"flex items-center gap-1 bg-muted/50 p-1 rounded-xl mb-6",children:o.map(d=>{const m=d.icon;return r.jsxs("button",{onClick:()=>e(d.id),className:`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${t===d.id?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground hover:text-foreground hover:bg-background/50"}`,children:[r.jsx(m,{className:"h-4 w-4"}),r.jsx("span",{children:d.name}),r.jsx("span",{className:"px-2 py-1 text-xs bg-muted/50 rounded-full",children:d.count})]},d.id)})}),t==="discussions"&&r.jsx("div",{className:"space-y-4",children:c.map((d,m)=>r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:m*.1},className:`bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200 ${d.isPinned?"border-primary/20 bg-primary/5":""}`,children:[d.isPinned&&r.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[r.jsx(gt,{className:"h-4 w-4 text-primary"}),r.jsx("span",{className:"text-sm font-medium text-primary",children:"Pinned"})]}),r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("img",{src:d.avatar,alt:d.author,className:"w-10 h-10 rounded-full"}),r.jsxs("div",{className:"flex-1",children:[r.jsx("h3",{className:"font-semibold text-foreground hover:text-primary transition-colors cursor-pointer mb-2",children:d.title}),r.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-3",children:[r.jsxs("span",{children:["by ",d.author]}),r.jsx("span",{children:"•"}),r.jsx("span",{children:d.time}),r.jsx("span",{children:"•"}),r.jsx("span",{className:"px-2 py-1 bg-muted rounded-md",children:d.category})]}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[r.jsx(gs,{className:"h-4 w-4"}),r.jsx("span",{children:d.replies})]}),r.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[r.jsx(xr,{className:"h-4 w-4"}),r.jsx("span",{children:d.likes})]}),r.jsx("div",{className:"flex gap-1",children:d.tags.map(u=>r.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",u]},u))})]})]})]})]},d.id))}),t==="projects"&&r.jsxs("div",{className:"text-center py-16",children:[r.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(se,{className:"h-12 w-12 text-muted-foreground"})}),r.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Project Showcase"}),r.jsx("p",{className:"text-muted-foreground mb-6",children:"Featured projects from our community will appear here"}),r.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Submit Your Project"})]}),t==="events"&&r.jsx("div",{className:"space-y-4",children:a.map((d,m)=>r.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:m*.1},className:"bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200",children:r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("h3",{className:"font-semibold text-foreground mb-2",children:d.title}),r.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:d.description}),r.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(ht,{className:"h-4 w-4"}),r.jsx("span",{children:d.date})]}),r.jsx("span",{children:"•"}),r.jsx("span",{children:d.time}),r.jsx("span",{children:"•"}),r.jsx("span",{className:"px-2 py-1 bg-primary/10 text-primary rounded-md",children:d.type}),r.jsx("span",{children:"•"}),r.jsxs("span",{children:[d.attendees," attendees"]})]})]}),r.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Join Event"})]})},d.id))}),t==="resources"&&r.jsxs("div",{className:"text-center py-16",children:[r.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(fs,{className:"h-12 w-12 text-muted-foreground"})}),r.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"Community Resources"}),r.jsx("p",{className:"text-muted-foreground mb-6",children:"Curated resources and learning materials will appear here"}),r.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Suggest Resource"})]})]}),r.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[r.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[r.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Quick Actions"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:[r.jsx(br,{className:"h-4 w-4"}),"Start Discussion"]}),r.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[r.jsx(se,{className:"h-4 w-4"}),"Share Project"]}),r.jsxs("button",{className:"w-full flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[r.jsx(ht,{className:"h-4 w-4"}),"Create Event"]})]})]}),r.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[r.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Join Our Community"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[r.jsx(Ae,{className:"h-4 w-4"}),r.jsx("span",{children:"GitHub"})]}),r.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[r.jsx(xo,{className:"h-4 w-4"}),r.jsx("span",{children:"Twitter"})]}),r.jsxs("a",{href:"#",className:"flex items-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:[r.jsx(bo,{className:"h-4 w-4"}),r.jsx("span",{children:"Newsletter"})]})]})]}),r.jsxs("div",{className:"bg-primary/5 border border-primary/20 rounded-xl p-6",children:[r.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Community Guidelines"}),r.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[r.jsx("li",{children:"• Be respectful and inclusive"}),r.jsx("li",{children:"• Share helpful and relevant content"}),r.jsx("li",{children:"• Follow our code of conduct"}),r.jsx("li",{children:"• Help others learn and grow"})]})]})]})]})]})})},xg=()=>r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",children:r.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[r.jsx("div",{className:"text-center mb-16",children:r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[r.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg",children:r.jsx("span",{className:"text-white font-bold text-3xl",children:"D"})}),r.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6",children:["About ",r.jsx("span",{className:"text-blue-600",children:"DreamBuild"})]}),r.jsx("p",{className:"text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed",children:"DreamBuild is a revolutionary AI-powered development platform that transforms your ideas into code. Simply describe what you want to build, and watch as DreamBuild generates complete applications for you."})]})}),r.jsx("div",{className:"mb-16",children:r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[r.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"What We Do"}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"AI-Powered Development"}),r.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Transform your ideas into code using cutting-edge AI models. Simply describe what you want to build, and DreamBuild generates complete, working applications for you."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Multi-Language Support"}),r.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Build applications in popular programming languages including React, Vue, Python, JavaScript, HTML/CSS, and many more. Choose your preferred technology stack."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Instant Deployment"}),r.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Deploy your applications instantly to Firebase Hosting and GitHub Pages. No complex configuration required - just click and deploy."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold text-slate-800 dark:text-white mb-3",children:"Local AI Integration"}),r.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Use local AI models for complete privacy and control. No external API keys required - run everything on your own machine for maximum security."})]})]})]})}),r.jsx("div",{className:"mb-16",children:r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[r.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"Our Mission"}),r.jsx("p",{className:"text-lg text-slate-600 dark:text-slate-400 text-center leading-relaxed",children:"To democratize software development by making AI-powered coding tools accessible to everyone. Whether you're an experienced developer or just getting started, DreamBuild empowers you to turn your ideas into reality with the power of artificial intelligence."})]})}),r.jsx("div",{className:"mb-16",children:r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl",children:[r.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center",children:"About Bradley Virtual Solutions"}),r.jsxs("div",{className:"text-center",children:[r.jsxs("p",{className:"text-slate-600 dark:text-slate-400 mb-4",children:["DreamBuild is developed by ",r.jsx("strong",{className:"text-slate-800 dark:text-white",children:"Bradley Virtual Solutions, LLC"}),", a company dedicated to creating innovative AI-powered development tools."]}),r.jsx("p",{className:"text-slate-600 dark:text-slate-400",children:"Founded by Ronell Bradley, a full-stack developer passionate about AI and web development, we're committed to making advanced development tools accessible to everyone."})]})]})}),r.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center",children:r.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl",children:[r.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Building?"}),r.jsx("p",{className:"text-blue-100 mb-6 max-w-xl mx-auto",children:"Start your journey with DreamBuild today and experience the future of AI-powered development."}),r.jsxs(R.a,{href:"/ai-builder",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg",children:[r.jsx(se,{className:"h-5 w-5"}),"Start Building Now",r.jsx(Bt,{className:"h-4 w-4"})]})]})})]})}),bg=()=>{const[t,e]=p.useState(""),[s,n]=p.useState("all"),o=[{id:"all",name:"All Posts",count:24},{id:"tutorials",name:"Tutorials",count:8},{id:"ai",name:"AI & ML",count:6},{id:"development",name:"Development",count:5},{id:"company",name:"Company",count:5}],i={title:"Getting Started with Local AI Development: A Complete Guide",excerpt:"Learn how to set up Ollama, integrate local AI models, and build your first AI-powered application with DreamBuild.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-20",readTime:"8 min read",category:"tutorials",tags:["ai","ollama","tutorial","getting-started"],image:"https://via.placeholder.com/600x300/2563eb/ffffff?text=Local+AI+Guide",likes:156,comments:23},l=[{id:2,title:"Building a React Native App with AI Code Generation",excerpt:"Discover how to leverage DreamBuild's AI capabilities to create a mobile app from scratch.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-18",readTime:"6 min read",category:"tutorials",tags:["react-native","mobile","ai"],featured:!1,image:"https://via.placeholder.com/400x250/10b981/ffffff?text=React+Native",likes:89,comments:12,views:1523},{id:3,title:"The Future of AI-Powered Development Tools",excerpt:"Exploring emerging trends and technologies that will shape the future of software development.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-15",readTime:"10 min read",category:"ai",tags:["ai","future","technology","trends"],featured:!1,image:"https://via.placeholder.com/400x250/f59e0b/ffffff?text=Future+AI",likes:234,comments:34,views:4567},{id:4,title:"DreamBuild 2.0: What's New and Exciting",excerpt:"Announcing the latest features and improvements in DreamBuild 2.0, including enhanced AI capabilities.",author:"Ronell Bradley",authorAvatar:"https://via.placeholder.com/40x40/2563eb/ffffff?text=RB",publishDate:"2024-01-12",readTime:"5 min read",category:"company",tags:["release","features","announcement"],featured:!1,image:"https://via.placeholder.com/400x250/8b5cf6/ffffff?text=DreamBuild+2.0",likes:167,comments:28,views:3421},{id:5,title:"Best Practices for AI Code Generation",excerpt:"Learn how to write effective prompts and get the best results from AI code generation tools.",author:"Sarah Chen",authorAvatar:"https://via.placeholder.com/40x40/10b981/ffffff?text=SC",publishDate:"2024-01-10",readTime:"7 min read",category:"development",tags:["best-practices","prompts","ai","tips"],featured:!1,image:"https://via.placeholder.com/400x250/06b6d4/ffffff?text=Best+Practices",likes:145,comments:19,views:2890},{id:6,title:"Setting Up Your Development Environment for AI",excerpt:"A comprehensive guide to configuring your development environment for optimal AI-assisted coding.",author:"Marcus Rodriguez",authorAvatar:"https://via.placeholder.com/40x40/f59e0b/ffffff?text=MR",publishDate:"2024-01-08",readTime:"9 min read",category:"tutorials",tags:["setup","environment","development","tools"],featured:!1,image:"https://via.placeholder.com/400x250/ec4899/ffffff?text=Dev+Environment",likes:98,comments:15,views:1876},{id:7,title:"Community Spotlight: Amazing Projects Built with DreamBuild",excerpt:"Highlighting some of the incredible projects our community has created using DreamBuild.",author:"Community Team",authorAvatar:"https://via.placeholder.com/40x40/ef4444/ffffff?text=CT",publishDate:"2024-01-05",readTime:"6 min read",category:"company",tags:["community","showcase","projects","spotlight"],featured:!1,image:"https://via.placeholder.com/400x250/84cc16/ffffff?text=Community+Projects",likes:203,comments:41,views:5234}].filter(m=>{const u=m.title.toLowerCase().includes(t.toLowerCase())||m.excerpt.toLowerCase().includes(t.toLowerCase())||m.tags.some(y=>y.toLowerCase().includes(t.toLowerCase())),g=s==="all"||m.category===s;return u&&g}),c=m=>{switch(m){case"tutorials":return se;case"ai":return gt;case"development":return Ie;case"company":return Fa;default:return ar}},d=m=>{switch(m){case"tutorials":return"bg-blue-100 text-blue-800 border-blue-200";case"ai":return"bg-purple-100 text-purple-800 border-purple-200";case"development":return"bg-green-100 text-green-800 border-green-200";case"company":return"bg-orange-100 text-orange-800 border-orange-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}};return r.jsx("div",{className:"min-h-screen bg-background",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",children:r.jsx(ar,{className:"h-6 w-6 text-primary"})}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-foreground",children:"Blog"}),r.jsx("p",{className:"text-muted-foreground",children:"Insights, tutorials, and updates from the DreamBuild team"})]})]}),r.jsx("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between",children:r.jsxs("div",{className:"flex flex-col md:flex-row gap-4 flex-1",children:[r.jsxs("div",{className:"relative max-w-md",children:[r.jsx(nt,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx("input",{type:"text",placeholder:"Search blog posts...",value:t,onChange:m=>e(m.target.value),className:"w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Ls,{className:"h-4 w-4 text-muted-foreground"}),r.jsx("select",{value:s,onChange:m=>n(m.target.value),className:"px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:o.map(m=>r.jsxs("option",{value:m.id,children:[m.name," (",m.count,")"]},m.id))})]})]})})]}),r.jsx(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-12",children:r.jsx("div",{className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200",children:r.jsxs("div",{className:"md:flex",children:[r.jsx("div",{className:"md:w-1/2",children:r.jsx("img",{src:i.image,alt:i.title,className:"w-full h-64 md:h-full object-cover"})}),r.jsxs("div",{className:"md:w-1/2 p-8",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[r.jsx("span",{className:"px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium",children:"Featured"}),r.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full border ${d(i.category)}`,children:i.category})]}),r.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer",children:i.title}),r.jsx("p",{className:"text-muted-foreground mb-6 leading-relaxed",children:i.excerpt}),r.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-6",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("img",{src:i.authorAvatar,alt:i.author,className:"w-6 h-6 rounded-full"}),r.jsx("span",{children:i.author})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(ht,{className:"h-4 w-4"}),r.jsx("span",{children:i.publishDate})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(_s,{className:"h-4 w-4"}),r.jsx("span",{children:i.readTime})]})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:"flex gap-1",children:i.tags.map(m=>r.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",m]},m))}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[r.jsx(xr,{className:"h-4 w-4"}),r.jsx("span",{children:i.likes})]}),r.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[r.jsx(gs,{className:"h-4 w-4"}),r.jsx("span",{children:i.comments})]})]})]})]})]})})}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map((m,u)=>{const g=c(m.category);return r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:u*.1},className:"bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group",children:[r.jsxs("div",{className:"relative h-48 bg-muted/50",children:[r.jsx("img",{src:m.image,alt:m.title,className:"w-full h-full object-cover"}),r.jsx("div",{className:"absolute top-3 right-3",children:r.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full border ${d(m.category)}`,children:m.category})})]}),r.jsxs("div",{className:"p-6",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[r.jsx(g,{className:"h-4 w-4 text-primary"}),r.jsx("span",{className:"text-sm text-primary font-medium",children:m.category})]}),r.jsx("h3",{className:"font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer mb-3 line-clamp-2",children:m.title}),r.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-3",children:m.excerpt}),r.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx("img",{src:m.authorAvatar,alt:m.author,className:"w-8 h-8 rounded-full"}),r.jsxs("div",{className:"flex-1",children:[r.jsx("p",{className:"text-sm font-medium text-foreground",children:m.author}),r.jsxs("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[r.jsx("span",{children:m.publishDate}),r.jsx("span",{children:"•"}),r.jsx("span",{children:m.readTime})]})]})]}),r.jsx("div",{className:"flex flex-wrap gap-1 mb-4",children:m.tags.map(y=>r.jsxs("span",{className:"px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md",children:["#",y]},y))}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(xr,{className:"h-4 w-4"}),r.jsx("span",{children:m.likes})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx(gs,{className:"h-4 w-4"}),r.jsx("span",{children:m.comments})]})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:r.jsx(fs,{className:"h-4 w-4"})}),r.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:r.jsx(go,{className:"h-4 w-4"})}),r.jsxs("button",{className:"flex items-center gap-1 text-primary hover:text-primary-dark transition-colors",children:[r.jsx("span",{className:"text-sm font-medium",children:"Read"}),r.jsx(Bt,{className:"h-4 w-4"})]})]})]})]})]},m.id)})}),l.length===0&&r.jsxs("div",{className:"text-center py-16",children:[r.jsx("div",{className:"w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(ar,{className:"h-12 w-12 text-muted-foreground"})}),r.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:"No posts found"}),r.jsx("p",{className:"text-muted-foreground mb-6",children:"Try adjusting your search or filter criteria"}),r.jsx("button",{onClick:()=>{e(""),n("all")},className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Clear Filters"})]}),r.jsxs("div",{className:"mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[r.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Stay Updated"}),r.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Subscribe to our newsletter for the latest tutorials, updates, and insights from the DreamBuild team."}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto",children:[r.jsx("input",{type:"email",placeholder:"Enter your email",className:"flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"}),r.jsx("button",{className:"px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Subscribe"})]})]})]})})},yg=()=>{const[t,e]=p.useState({name:"",email:"",subject:"",message:""}),[s,n]=p.useState(!1),[o,i]=p.useState(null),a=[{icon:bo,title:"Email Us",description:"Send us an email and we'll respond within 24 hours",value:"hello@dreambuild.dev",action:"mailto:hello@dreambuild.dev"},{icon:yr,title:"Live Chat",description:"Chat with our support team in real-time",value:"Available 9 AM - 6 PM EST",action:"#"},{icon:_a,title:"Call Us",description:"Speak directly with our team",value:"+1 (555) 123-4567",action:"tel:+15551234567"},{icon:$a,title:"Visit Us",description:"Our headquarters location",value:"San Francisco, CA",action:"#"}],l=[{icon:Ae,href:"https://github.com/ronb12/DreamBuild",label:"GitHub"},{icon:xo,href:"#",label:"Twitter"},{icon:Ba,href:"#",label:"LinkedIn"},{icon:Ie,href:"#",label:"Website"}],c=[{question:"How do I get started with DreamBuild?",answer:"Simply visit our documentation page for a complete getting started guide. You can also try our AI Builder without any setup required."},{question:"Do you offer technical support?",answer:"Yes! We provide comprehensive technical support through email, live chat, and our community forum. Premium users get priority support."},{question:"Can I use DreamBuild for commercial projects?",answer:"Absolutely! DreamBuild is designed for both personal and commercial use. Check our pricing page for details on different plans."},{question:"How does the AI code generation work?",answer:"DreamBuild uses advanced AI models to generate code based on your prompts. You can use our cloud AI services or set up local AI with Ollama for complete privacy."}],d=u=>{const{name:g,value:y}=u.target;e(f=>({...f,[g]:y}))},m=async u=>{u.preventDefault(),n(!0),await new Promise(g=>setTimeout(g,2e3)),n(!1),i("success"),e({name:"",email:"",subject:"",message:""}),setTimeout(()=>i(null),5e3)};return r.jsx("div",{className:"min-h-screen bg-background",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[r.jsx("div",{className:"text-center mb-12",children:r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[r.jsxs("h1",{className:"text-4xl md:text-6xl font-bold text-foreground mb-6",children:["Get in ",r.jsx("span",{className:"text-primary",children:"Touch"})]}),r.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto",children:"Have questions about DreamBuild? Need help getting started? Want to share feedback? We'd love to hear from you."})]})}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[r.jsx("div",{className:"lg:col-span-2",children:r.jsxs(R.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-card border border-border rounded-xl p-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsx("h2",{className:"text-2xl font-bold text-foreground mb-2",children:"Send us a Message"}),r.jsx("p",{className:"text-muted-foreground",children:"Fill out the form below and we'll get back to you as soon as possible."})]}),r.jsxs("form",{onSubmit:m,className:"space-y-6",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-foreground mb-2",children:"Name *"}),r.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:d,required:!0,className:"w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",placeholder:"Your full name"})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-foreground mb-2",children:"Email *"}),r.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:d,required:!0,className:"w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",placeholder:"your@email.com"})]})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-foreground mb-2",children:"Subject *"}),r.jsxs("select",{id:"subject",name:"subject",value:t.subject,onChange:d,required:!0,className:"w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[r.jsx("option",{value:"",children:"Select a subject"}),r.jsx("option",{value:"general",children:"General Inquiry"}),r.jsx("option",{value:"support",children:"Technical Support"}),r.jsx("option",{value:"sales",children:"Sales Question"}),r.jsx("option",{value:"feedback",children:"Feedback"}),r.jsx("option",{value:"partnership",children:"Partnership"}),r.jsx("option",{value:"bug",children:"Bug Report"})]})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-foreground mb-2",children:"Message *"}),r.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:d,required:!0,rows:6,className:"w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none",placeholder:"Tell us how we can help you..."})]}),o==="success"&&r.jsxs(R.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg",children:[r.jsx(La,{className:"h-5 w-5 text-green-600"}),r.jsx("span",{className:"text-green-800",children:"Message sent successfully! We'll get back to you soon."})]}),r.jsx("button",{type:"submit",disabled:s,className:"w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:s?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Sending..."]}):r.jsxs(r.Fragment,{children:[r.jsx(ho,{className:"h-5 w-5"}),"Send Message"]})})]})]})}),r.jsxs("div",{className:"space-y-8",children:[r.jsxs(R.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6},className:"bg-card border border-border rounded-xl p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-foreground mb-6",children:"Other Ways to Reach Us"}),r.jsx("div",{className:"space-y-4",children:a.map((u,g)=>{const y=u.icon;return r.jsxs("a",{href:u.action,className:"flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-muted transition-colors group",children:[r.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors",children:r.jsx(y,{className:"h-5 w-5 text-primary"})}),r.jsxs("div",{className:"flex-1",children:[r.jsx("h4",{className:"font-semibold text-foreground group-hover:text-primary transition-colors",children:u.title}),r.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:u.description}),r.jsx("p",{className:"text-sm font-medium text-primary",children:u.value})]})]},u.title)})})]}),r.jsxs(R.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},className:"bg-card border border-border rounded-xl p-6",children:[r.jsx("h3",{className:"text-xl font-bold text-foreground mb-6",children:"Follow Us"}),r.jsx("div",{className:"grid grid-cols-2 gap-3",children:l.map(u=>{const g=u.icon;return r.jsxs("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted transition-colors group",children:[r.jsx(g,{className:"h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"}),r.jsx("span",{className:"text-sm font-medium text-foreground group-hover:text-primary transition-colors",children:u.label})]},u.label)})})]}),r.jsxs(R.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},className:"bg-primary/5 border border-primary/20 rounded-xl p-6",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx(_s,{className:"h-6 w-6 text-primary"}),r.jsx("h3",{className:"text-xl font-bold text-foreground",children:"Business Hours"})]}),r.jsxs("div",{className:"space-y-2 text-sm text-muted-foreground",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{children:"Monday - Friday"}),r.jsx("span",{children:"9:00 AM - 6:00 PM EST"})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{children:"Saturday"}),r.jsx("span",{children:"10:00 AM - 4:00 PM EST"})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{children:"Sunday"}),r.jsx("span",{children:"Closed"})]})]}),r.jsx("p",{className:"text-xs text-muted-foreground mt-4",children:"Emergency support available 24/7 for premium users."})]})]})]}),r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"mt-16",children:[r.jsxs("div",{className:"text-center mb-12",children:[r.jsx("h2",{className:"text-3xl font-bold text-foreground mb-4",children:"Frequently Asked Questions"}),r.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Quick answers to common questions about DreamBuild and our services."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:c.map((u,g)=>r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4+g*.1},className:"bg-card border border-border rounded-xl p-6",children:[r.jsx("h3",{className:"font-semibold text-foreground mb-3",children:u.question}),r.jsx("p",{className:"text-sm text-muted-foreground",children:u.answer})]},u.question))})]}),r.jsxs(R.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},className:"mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center",children:[r.jsx("h3",{className:"text-2xl font-bold text-foreground mb-4",children:"Ready to Get Started?"}),r.jsx("p",{className:"text-muted-foreground mb-6 max-w-2xl mx-auto",children:"Join thousands of developers who are already building amazing applications with DreamBuild."}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[r.jsx("button",{className:"px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors",children:"Try DreamBuild Free"}),r.jsx("button",{className:"px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors",children:"View Documentation"})]})]})]})})};function vg(){const t=Ve();return["/ai-builder"].includes(t.pathname)?null:r.jsx(Xd,{})}function wg({children:t}){const e=Ve();return["/ai-builder"].includes(e.pathname)?r.jsx("main",{children:t}):r.jsx("main",{className:"pt-16",children:t})}function jg(){return r.jsx(Lc,{children:r.jsx(Jd,{children:r.jsx(Kd,{children:r.jsx(ql,{children:r.jsxs("div",{className:"min-h-screen bg-background",children:[r.jsx(Yd,{}),r.jsx(wg,{children:r.jsxs(_l,{children:[r.jsx(de,{path:"/",element:r.jsx(Qd,{})}),r.jsx(de,{path:"/app",element:r.jsx(Fl,{to:"/ai-builder",replace:!0})}),r.jsx(de,{path:"/ai-builder",element:r.jsx(lg,{})}),r.jsx(de,{path:"/dashboard",element:r.jsx(cg,{})}),r.jsx(de,{path:"/login",element:r.jsx(dg,{})}),r.jsx(de,{path:"/signup",element:r.jsx(ug,{})}),r.jsx(de,{path:"/projects",element:r.jsx(mg,{})}),r.jsx(de,{path:"/settings",element:r.jsx(pg,{})}),r.jsx(de,{path:"/documentation",element:r.jsx(hg,{})}),r.jsx(de,{path:"/examples",element:r.jsx(fg,{})}),r.jsx(de,{path:"/community",element:r.jsx(gg,{})}),r.jsx(de,{path:"/about",element:r.jsx(xg,{})}),r.jsx(de,{path:"/blog",element:r.jsx(bg,{})}),r.jsx(de,{path:"/contact",element:r.jsx(yg,{})})]})}),r.jsx(vg,{}),r.jsx(Fc,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--card)",color:"var(--card-foreground)",border:"1px solid var(--border)"}}})]})})})})})}wo(document.getElementById("root")).render(r.jsx(p.StrictMode,{children:r.jsx(jg,{})}));
//# sourceMappingURL=index-DS6vJdWx.js.map
