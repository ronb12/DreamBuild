const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BiN-b7Za.js","assets/react-vendor-ChHrLFfk.js","assets/router-vendor-BWBiukp8.js","assets/ui-vendor-DbqPAH06.js","assets/monaco-editor-CKIEnvzl.js","assets/monaco-editor-DgbvVKni.css","assets/firebase-D3YEaW0R.js","assets/AIBuilder-hhI1zLpK.js","assets/Resizable-Dbwk4Zim.js","assets/firebaseAppService-BSCldLpi.js","assets/simpleAIService-BUmArGnJ.js","assets/utils-vendor-ngrFHoWO.js","assets/Templates-CaijCWVj.js","assets/Dashboard-DyMcEWK3.js","assets/Login-Dfa1P36V.js","assets/Signup-B3xxya24.js","assets/Projects-Cow3jsc7.js","assets/Settings-C7dH5ikn.js","assets/Documentation-skff1CFE.js","assets/Examples-CN5w-6xo.js","assets/Community-C1nVlbI6.js","assets/About-CwcMION-.js","assets/Blog-B1ZKc6X9.js","assets/Contact-fB8oyK43.js","assets/Privacy-DsScM8qp.js","assets/Terms-BBOYnR7k.js","assets/Education-C3o6zt3X.js","assets/AppHost-B0PLrhM9.js","assets/AppGallery-COul3vuO.js","assets/DeleteApps-B7YP9_DU.js","assets/MultiWindowManager-B5PqVyiT.js"])))=>i.map(i=>d[i]);
import{initializeApp as Rt}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";import{getAuth as Tt,signInWithPopup as At,GithubAuthProvider as Dt,GoogleAuthProvider as Pt}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";import{r as c,b as It,R as be}from"./react-vendor-ChHrLFfk.js";import{_ as b}from"./monaco-editor-CKIEnvzl.js";import{L as S,u as je,B as Ot,R as Ct,a as w,N as Lt}from"./router-vendor-BWBiukp8.js";import{_ as St,C as Ut,r as Pe,S as Bt,F as Ft,g as $t,a as ie,b as Mt,c as Vt,d as zt,i as Ht,e as Gt,f as Wt,o as qt,h as Kt,j as fe,s as Xt,G as Zt,k as Ie,l as Oe,m as Yt,n as Jt}from"./firebase-D3YEaW0R.js";import{A as Qt,R as er,H as tr,S as ye,a as he,C as rr,M as sr,G as nr,B as or,D as me,U as ar,b as ir,c as lr,d as Ce,L as Le,X as cr,e as dr,f as ur,T as fr,g as Se,h as hr}from"./ui-vendor-DbqPAH06.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const mr={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"},Ge=Rt(mr),pr=Tt(Ge);window.firebase={auth:()=>pr,GoogleAuthProvider:Pt,GithubAuthProvider:Dt,signInWithPopup:At};window.firebaseApp=Ge;console.log("Firebase loaded globally with providers:",!!window.firebase);var We={exports:{}},le={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr=c,xr=Symbol.for("react.element"),br=Symbol.for("react.fragment"),yr=Object.prototype.hasOwnProperty,_r=gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wr={key:!0,ref:!0,__self:!0,__source:!0};function qe(e,t,r){var s,n={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(s in t)yr.call(t,s)&&!wr.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)n[s]===void 0&&(n[s]=t[s]);return{$$typeof:xr,type:e,key:i,ref:a,props:n,_owner:_r.current}}le.Fragment=br;le.jsx=qe;le.jsxs=qe;We.exports=le;var o=We.exports,Ke,Ue=It;Ke=Ue.createRoot,Ue.hydrateRoot;let vr={data:""},jr=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||vr,Er=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Nr=/\/\*[^]*?\*\/|  +/g,Be=/\n+/g,z=(e,t)=>{let r="",s="",n="";for(let i in e){let a=e[i];i[0]=="@"?i[1]=="i"?r=i+" "+a+";":s+=i[1]=="f"?z(a,i):i+"{"+z(a,i[1]=="k"?"":t)+"}":typeof a=="object"?s+=z(a,t?t.replace(/([^,])+/g,u=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,u):u?u+" "+d:d)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=z.p?z.p(i,a):i+":"+a+";")}return r+(t&&n?t+"{"+n+"}":n)+s},$={},Xe=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Xe(e[r]);return t}return e},kr=(e,t,r,s,n)=>{let i=Xe(e),a=$[i]||($[i]=(d=>{let l=0,h=11;for(;l<d.length;)h=101*h+d.charCodeAt(l++)>>>0;return"go"+h})(i));if(!$[a]){let d=i!==e?e:(l=>{let h,f,p=[{}];for(;h=Er.exec(l.replace(Nr,""));)h[4]?p.shift():h[3]?(f=h[3].replace(Be," ").trim(),p.unshift(p[0][f]=p[0][f]||{})):p[0][h[1]]=h[2].replace(Be," ").trim();return p[0]})(e);$[a]=z(n?{["@keyframes "+a]:d}:d,r?"":"."+a)}let u=r&&$.g?$.g:null;return r&&($.g=$[a]),((d,l,h,f)=>{f?l.data=l.data.replace(f,d):l.data.indexOf(d)===-1&&(l.data=h?d+l.data:l.data+d)})($[a],t,s,u),a},Rr=(e,t,r)=>e.reduce((s,n,i)=>{let a=t[i];if(a&&a.call){let u=a(r),d=u&&u.props&&u.props.className||/^go/.test(u)&&u;a=d?"."+d:u&&typeof u=="object"?u.props?"":z(u,""):u===!1?"":u}return s+n+(a??"")},"");function ce(e){let t=this||{},r=e.call?e(t.p):e;return kr(r.unshift?r.raw?Rr(r,[].slice.call(arguments,1),t.p):r.reduce((s,n)=>Object.assign(s,n&&n.call?n(t.p):n),{}):r,jr(t.target),t.g,t.o,t.k)}let Ze,_e,we;ce.bind({g:1});let M=ce.bind({k:1});function Tr(e,t,r,s){z.p=t,Ze=e,_e=r,we=s}function G(e,t){let r=this||{};return function(){let s=arguments;function n(i,a){let u=Object.assign({},i),d=u.className||n.className;r.p=Object.assign({theme:_e&&_e()},u),r.o=/ *go\d+/.test(d),u.className=ce.apply(r,s)+(d?" "+d:"");let l=e;return e[0]&&(l=u.as||e,delete u.as),we&&l[0]&&we(u),Ze(l,u)}return n}}var Ar=e=>typeof e=="function",ae=(e,t)=>Ar(e)?e(t):e,Dr=(()=>{let e=0;return()=>(++e).toString()})(),Ye=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Pr=20,Ee="default",Je=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:s}=t;return Je(e,{type:e.toasts.find(a=>a.id===s.id)?1:0,toast:s});case 3:let{toastId:n}=t;return{...e,toasts:e.toasts.map(a=>a.id===n||n===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},ne=[],Qe={toasts:[],pausedAt:void 0,settings:{toastLimit:Pr}},U={},et=(e,t=Ee)=>{U[t]=Je(U[t]||Qe,e),ne.forEach(([r,s])=>{r===t&&s(U[t])})},tt=e=>Object.keys(U).forEach(t=>et(e,t)),Ir=e=>Object.keys(U).find(t=>U[t].toasts.some(r=>r.id===e)),de=(e=Ee)=>t=>{et(t,e)},Or={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Cr=(e={},t=Ee)=>{let[r,s]=c.useState(U[t]||Qe),n=c.useRef(U[t]);c.useEffect(()=>(n.current!==U[t]&&s(U[t]),ne.push([t,s]),()=>{let a=ne.findIndex(([u])=>u===t);a>-1&&ne.splice(a,1)}),[t]);let i=r.toasts.map(a=>{var u,d,l;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((u=e[a.type])==null?void 0:u.removeDelay)||e?.removeDelay,duration:a.duration||((d=e[a.type])==null?void 0:d.duration)||e?.duration||Or[a.type],style:{...e.style,...(l=e[a.type])==null?void 0:l.style,...a.style}}});return{...r,toasts:i}},Lr=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||Dr()}),Q=e=>(t,r)=>{let s=Lr(t,e,r);return de(s.toasterId||Ir(s.id))({type:2,toast:s}),s.id},k=(e,t)=>Q("blank")(e,t);k.error=Q("error");k.success=Q("success");k.loading=Q("loading");k.custom=Q("custom");k.dismiss=(e,t)=>{let r={type:3,toastId:e};t?de(t)(r):tt(r)};k.dismissAll=e=>k.dismiss(void 0,e);k.remove=(e,t)=>{let r={type:4,toastId:e};t?de(t)(r):tt(r)};k.removeAll=e=>k.remove(void 0,e);k.promise=(e,t,r)=>{let s=k.loading(t.loading,{...r,...r?.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let i=t.success?ae(t.success,n):void 0;return i?k.success(i,{id:s,...r,...r?.success}):k.dismiss(s),n}).catch(n=>{let i=t.error?ae(t.error,n):void 0;i?k.error(i,{id:s,...r,...r?.error}):k.dismiss(s)}),e};var Sr=1e3,Ur=(e,t="default")=>{let{toasts:r,pausedAt:s}=Cr(e,t),n=c.useRef(new Map).current,i=c.useCallback((f,p=Sr)=>{if(n.has(f))return;let m=setTimeout(()=>{n.delete(f),a({type:4,toastId:f})},p);n.set(f,m)},[]);c.useEffect(()=>{if(s)return;let f=Date.now(),p=r.map(m=>{if(m.duration===1/0)return;let y=(m.duration||0)+m.pauseDuration-(f-m.createdAt);if(y<0){m.visible&&k.dismiss(m.id);return}return setTimeout(()=>k.dismiss(m.id,t),y)});return()=>{p.forEach(m=>m&&clearTimeout(m))}},[r,s,t]);let a=c.useCallback(de(t),[t]),u=c.useCallback(()=>{a({type:5,time:Date.now()})},[a]),d=c.useCallback((f,p)=>{a({type:1,toast:{id:f,height:p}})},[a]),l=c.useCallback(()=>{s&&a({type:6,time:Date.now()})},[s,a]),h=c.useCallback((f,p)=>{let{reverseOrder:m=!1,gutter:y=8,defaultPosition:C}=p||{},E=r.filter(_=>(_.position||C)===(f.position||C)&&_.height),L=E.findIndex(_=>_.id===f.id),P=E.filter((_,g)=>g<L&&_.visible).length;return E.filter(_=>_.visible).slice(...m?[P+1]:[0,P]).reduce((_,g)=>_+(g.height||0)+y,0)},[r]);return c.useEffect(()=>{r.forEach(f=>{if(f.dismissed)i(f.id,f.removeDelay);else{let p=n.get(f.id);p&&(clearTimeout(p),n.delete(f.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:u,endPause:l,calculateOffset:h}}},Br=M`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Fr=M`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$r=M`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Mr=G("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Br} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Fr} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${$r} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Vr=M`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,zr=G("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Vr} 1s linear infinite;
`,Hr=M`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Gr=M`
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
}`,Wr=G("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Hr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Gr} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,qr=G("div")`
  position: absolute;
`,Kr=G("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Xr=M`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Zr=G("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Xr} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Yr=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?c.createElement(Zr,null,t):t:r==="blank"?null:c.createElement(Kr,null,c.createElement(zr,{...s}),r!=="loading"&&c.createElement(qr,null,r==="error"?c.createElement(Mr,{...s}):c.createElement(Wr,{...s})))},Jr=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Qr=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,es="0%{opacity:0;} 100%{opacity:1;}",ts="0%{opacity:1;} 100%{opacity:0;}",rs=G("div")`
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
`,ss=G("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ns=(e,t)=>{let r=e.includes("top")?1:-1,[s,n]=Ye()?[es,ts]:[Jr(r),Qr(r)];return{animation:t?`${M(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${M(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},os=c.memo(({toast:e,position:t,style:r,children:s})=>{let n=e.height?ns(e.position||t||"top-center",e.visible):{opacity:0},i=c.createElement(Yr,{toast:e}),a=c.createElement(ss,{...e.ariaProps},ae(e.message,e));return c.createElement(rs,{className:e.className,style:{...n,...r,...e.style}},typeof s=="function"?s({icon:i,message:a}):c.createElement(c.Fragment,null,i,a))});Tr(c.createElement);var as=({id:e,className:t,style:r,onHeightUpdate:s,children:n})=>{let i=c.useCallback(a=>{if(a){let u=()=>{let d=a.getBoundingClientRect().height;s(e,d)};u(),new MutationObserver(u).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return c.createElement("div",{ref:i,className:t,style:r},n)},is=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ye()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...n}},ls=ce`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=16,cs=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:n,toasterId:i,containerStyle:a,containerClassName:u})=>{let{toasts:d,handlers:l}=Ur(r,i);return c.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:ee,left:ee,right:ee,bottom:ee,pointerEvents:"none",...a},className:u,onMouseEnter:l.startPause,onMouseLeave:l.endPause},d.map(h=>{let f=h.position||t,p=l.calculateOffset(h,{reverseOrder:e,gutter:s,defaultPosition:t}),m=is(f,p);return c.createElement(as,{id:h.id,key:h.id,onHeightUpdate:l.updateHeight,className:h.visible?ls:"",style:m},h.type==="custom"?ae(h.message,h):n?n(h):c.createElement(os,{toast:h,position:f}))}))},D=k;const rt=c.createContext();function ds(){return c.useContext(rt)}const Fe={light:{name:"Light Theme",cssVars:{"--primary":"#2563eb","--primary-foreground":"#ffffff","--background":"#ffffff","--foreground":"#0f172a","--card":"#ffffff","--muted":"#f8fafc","--border":"#e2e8f0"},isDark:!1},dark:{name:"Dark Theme",cssVars:{"--primary":"#3b82f6","--primary-foreground":"#ffffff","--background":"#0f172a","--foreground":"#f8fafc","--card":"#1e293b","--muted":"#1e293b","--border":"#334155"},isDark:!0},blue:{name:"Blue Theme",cssVars:{"--primary":"#1e40af","--primary-foreground":"#ffffff","--background":"#f0f9ff","--foreground":"#0c4a6e","--card":"#e0f2fe","--muted":"#e0f2fe","--border":"#7dd3fc"},isDark:!1},purple:{name:"Purple Theme",cssVars:{"--primary":"#7c3aed","--primary-foreground":"#ffffff","--background":"#faf5ff","--foreground":"#581c87","--card":"#f3e8ff","--muted":"#f3e8ff","--border":"#c4b5fd"},isDark:!1},green:{name:"Green Theme",cssVars:{"--primary":"#059669","--primary-foreground":"#ffffff","--background":"#f0fdf4","--foreground":"#064e3b","--card":"#dcfce7","--muted":"#dcfce7","--border":"#86efac"},isDark:!1},orange:{name:"Orange Theme",cssVars:{"--primary":"#ea580c","--primary-foreground":"#ffffff","--background":"#fff7ed","--foreground":"#9a3412","--card":"#fed7aa","--muted":"#fed7aa","--border":"#fdba74"},isDark:!1},red:{name:"Red Theme",cssVars:{"--primary":"#dc2626","--primary-foreground":"#ffffff","--background":"#fef2f2","--foreground":"#991b1b","--card":"#fecaca","--muted":"#fecaca","--border":"#fca5a5"},isDark:!1},pink:{name:"Pink Theme",cssVars:{"--primary":"#db2777","--primary-foreground":"#ffffff","--background":"#fdf2f8","--foreground":"#9d174d","--card":"#fce7f3","--muted":"#fce7f3","--border":"#f9a8d4"},isDark:!1},cyan:{name:"Cyan Theme",cssVars:{"--primary":"#0891b2","--primary-foreground":"#ffffff","--background":"#ecfeff","--foreground":"#164e63","--card":"#cffafe","--muted":"#cffafe","--border":"#67e8f9"},isDark:!1},amber:{name:"Amber Theme",cssVars:{"--primary":"#d97706","--primary-foreground":"#ffffff","--background":"#fffbeb","--foreground":"#92400e","--card":"#fef3c7","--muted":"#fef3c7","--border":"#fde68a"},isDark:!1},emerald:{name:"Emerald Theme",cssVars:{"--primary":"#10b981","--primary-foreground":"#ffffff","--background":"#ecfdf5","--foreground":"#064e3b","--card":"#d1fae5","--muted":"#d1fae5","--border":"#6ee7b7"},isDark:!1}};function us({children:e}){const[t,r]=c.useState("light");c.useEffect(()=>{const a=localStorage.getItem("theme")||"light";r(a),s(a)},[]);const s=a=>{const u=Fe[a];u&&(Object.entries(u.cssVars).forEach(([d,l])=>{document.documentElement.style.setProperty(d,l)}),document.documentElement.classList.toggle("dark",u.isDark))},n=a=>{r(a),localStorage.setItem("theme",a),s(a)},i=()=>{n(t==="light"?"dark":"light")};return o.jsx(rt.Provider,{value:{theme:t,setTheme:n,toggleTheme:i,themes:Fe},children:e})}/**
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
 */const st="firebasestorage.googleapis.com",nt="storageBucket",fs=2*60*1e3,hs=10*60*1e3;/**
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
 */class j extends Ft{constructor(t,r,s=0){super(pe(t),`Firebase Storage: ${r} (${pe(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,j.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return pe(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var v;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(v||(v={}));function pe(e){return"storage/"+e}function Ne(){const e="An unknown error occurred, please check the error payload for server response.";return new j(v.UNKNOWN,e)}function ms(e){return new j(v.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function ps(e){return new j(v.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gs(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new j(v.UNAUTHENTICATED,e)}function xs(){return new j(v.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bs(e){return new j(v.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function ys(){return new j(v.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _s(){return new j(v.CANCELED,"User canceled the upload/download.")}function ws(e){return new j(v.INVALID_URL,"Invalid URL '"+e+"'.")}function vs(e){return new j(v.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function js(){return new j(v.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nt+"' property when initializing the app?")}function Es(){return new j(v.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ns(){return new j(v.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ks(e){return new j(v.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ve(e){return new j(v.INVALID_ARGUMENT,e)}function ot(){return new j(v.APP_DELETED,"The Firebase app was deleted.")}function Rs(e){return new j(v.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function J(e,t){return new j(v.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Y(e){throw new j(v.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class O{constructor(t,r){this.bucket=t,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,r){let s;try{s=O.makeFromUrl(t,r)}catch{return new O(t,"")}if(s.path==="")return s;throw vs(t)}static makeFromUrl(t,r){let s=null;const n="([A-Za-z0-9.\\-_]+)";function i(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+n+a,"i"),d={bucket:1,path:3};function l(g){g.path_=decodeURIComponent(g.path)}const h="v[A-Za-z0-9_]+",f=r.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${n}/o${p}`,"i"),y={bucket:1,path:3},C=r===st?"(?:storage.googleapis.com|storage.cloud.google.com)":r,E="([^?#]*)",L=new RegExp(`^https?://${C}/${n}/${E}`,"i"),_=[{regex:u,indices:d,postModify:i},{regex:m,indices:y,postModify:l},{regex:L,indices:{bucket:1,path:2},postModify:l}];for(let g=0;g<_.length;g++){const x=_[g],N=x.regex.exec(t);if(N){const I=N[x.indices.bucket];let R=N[x.indices.path];R||(R=""),s=new O(I,R),x.postModify(s);break}}if(s==null)throw ws(t);return s}}class Ts{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function As(e,t,r){let s=1,n=null,i=null,a=!1,u=0;function d(){return u===2}let l=!1;function h(...E){l||(l=!0,t.apply(null,E))}function f(E){n=setTimeout(()=>{n=null,e(m,d())},E)}function p(){i&&clearTimeout(i)}function m(E,...L){if(l){p();return}if(E){p(),h.call(null,E,...L);return}if(d()||a){p(),h.call(null,E,...L);return}s<64&&(s*=2);let _;u===1?(u=2,_=0):_=(s+Math.random())*1e3,f(_)}let y=!1;function C(E){y||(y=!0,p(),!l&&(n!==null?(E||(u=2),clearTimeout(n),f(0)):E||(u=1)))}return f(0),i=setTimeout(()=>{a=!0,C(!0)},r),C}function Ds(e){e(!1)}/**
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
 */function Ps(e){return e!==void 0}function Is(e){return typeof e=="object"&&!Array.isArray(e)}function ke(e){return typeof e=="string"||e instanceof String}function $e(e){return Re()&&e instanceof Blob}function Re(){return typeof Blob<"u"}function Me(e,t,r,s){if(s<t)throw ve(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>r)throw ve(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
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
 */function Te(e,t,r){let s=t;return r==null&&(s=`https://${t}`),`${r}://${s}/v0${e}`}function at(e){const t=encodeURIComponent;let r="?";for(const s in e)if(e.hasOwnProperty(s)){const n=t(s)+"="+t(e[s]);r=r+n+"&"}return r=r.slice(0,-1),r}var W;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(W||(W={}));/**
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
 */function Os(e,t){const r=e>=500&&e<600,n=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return r||n||i}/**
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
 */class Cs{constructor(t,r,s,n,i,a,u,d,l,h,f,p=!0){this.url_=t,this.method_=r,this.headers_=s,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=d,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const t=(s,n)=>{if(n){s(!1,new te(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=u=>{const d=u.loaded,l=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,l)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const u=i.getErrorCode()===W.NO_ERROR,d=i.getStatus();if(!u||Os(d,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===W.ABORT;s(!1,new te(!1,null,h));return}const l=this.successCodes_.indexOf(d)!==-1;s(!0,new te(l,i))})},r=(s,n)=>{const i=this.resolve_,a=this.reject_,u=n.connection;if(n.wasSuccessCode)try{const d=this.callback_(u,u.getResponse());Ps(d)?i(d):i()}catch(d){a(d)}else if(u!==null){const d=Ne();d.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,d)):a(d)}else if(n.canceled){const d=this.appDelete_?ot():_s();a(d)}else{const d=ys();a(d)}};this.canceled_?r(!1,new te(!1,null,!0)):this.backoffId_=As(t,r,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Ds(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class te{constructor(t,r,s){this.wasSuccessCode=t,this.connection=r,this.canceled=!!s}}function Ls(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Ss(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Us(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Bs(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Fs(e,t,r,s,n,i,a=!0){const u=at(e.urlParams),d=e.url+u,l=Object.assign({},e.headers);return Us(l,t),Ls(l,r),Ss(l,i),Bs(l,s),new Cs(d,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n,a)}/**
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
 */function $s(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ms(...e){const t=$s();if(t!==void 0){const r=new t;for(let s=0;s<e.length;s++)r.append(e[s]);return r.getBlob()}else{if(Re())return new Blob(e);throw new j(v.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Vs(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}/**
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
 */function zs(e){if(typeof atob>"u")throw ks("base-64");return atob(e)}/**
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
 */const B={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ge{constructor(t,r){this.data=t,this.contentType=r||null}}function Hs(e,t){switch(e){case B.RAW:return new ge(it(t));case B.BASE64:case B.BASE64URL:return new ge(lt(e,t));case B.DATA_URL:return new ge(Ws(t),qs(t))}throw Ne()}function it(e){const t=[];for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(r<e.length-1&&(e.charCodeAt(r+1)&64512)===56320))t.push(239,191,189);else{const i=s,a=e.charCodeAt(++r);s=65536|(i&1023)<<10|a&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function Gs(e){let t;try{t=decodeURIComponent(e)}catch{throw J(B.DATA_URL,"Malformed data URL.")}return it(t)}function lt(e,t){switch(e){case B.BASE64:{const n=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(n||i)throw J(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case B.BASE64URL:{const n=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(n||i)throw J(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=zs(t)}catch(n){throw n.message.includes("polyfill")?n:J(e,"Invalid character found")}const s=new Uint8Array(r.length);for(let n=0;n<r.length;n++)s[n]=r.charCodeAt(n);return s}class ct{constructor(t){this.base64=!1,this.contentType=null;const r=t.match(/^data:([^,]+)?,/);if(r===null)throw J(B.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=r[1]||null;s!=null&&(this.base64=Ks(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Ws(e){const t=new ct(e);return t.base64?lt(B.BASE64,t.rest):Gs(t.rest)}function qs(e){return new ct(e).contentType}function Ks(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class H{constructor(t,r){let s=0,n="";$e(t)?(this.data_=t,s=t.size,n=t.type):t instanceof ArrayBuffer?(r?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(r?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=n}size(){return this.size_}type(){return this.type_}slice(t,r){if($e(this.data_)){const s=this.data_,n=Vs(s,t,r);return n===null?null:new H(n)}else{const s=new Uint8Array(this.data_.buffer,t,r-t);return new H(s,!0)}}static getBlob(...t){if(Re()){const r=t.map(s=>s instanceof H?s.data_:s);return new H(Ms.apply(null,r))}else{const r=t.map(a=>ke(a)?Hs(B.RAW,a).data:a.data_);let s=0;r.forEach(a=>{s+=a.byteLength});const n=new Uint8Array(s);let i=0;return r.forEach(a=>{for(let u=0;u<a.length;u++)n[i++]=a[u]}),new H(n,!0)}}uploadData(){return this.data_}}/**
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
 */function dt(e){let t;try{t=JSON.parse(e)}catch{return null}return Is(t)?t:null}/**
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
 */function Xs(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Zs(e,t){const r=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?r:e+"/"+r}function ut(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Ys(e,t){return t}class T{constructor(t,r,s,n){this.server=t,this.local=r||t,this.writable=!!s,this.xform=n||Ys}}let re=null;function Js(e){return!ke(e)||e.length<2?e:ut(e)}function ft(){if(re)return re;const e=[];e.push(new T("bucket")),e.push(new T("generation")),e.push(new T("metageneration")),e.push(new T("name","fullPath",!0));function t(i,a){return Js(a)}const r=new T("name");r.xform=t,e.push(r);function s(i,a){return a!==void 0?Number(a):a}const n=new T("size");return n.xform=s,e.push(n),e.push(new T("timeCreated")),e.push(new T("updated")),e.push(new T("md5Hash",null,!0)),e.push(new T("cacheControl",null,!0)),e.push(new T("contentDisposition",null,!0)),e.push(new T("contentEncoding",null,!0)),e.push(new T("contentLanguage",null,!0)),e.push(new T("contentType",null,!0)),e.push(new T("metadata","customMetadata",!0)),re=e,re}function Qs(e,t){function r(){const s=e.bucket,n=e.fullPath,i=new O(s,n);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:r})}function en(e,t,r){const s={};s.type="file";const n=r.length;for(let i=0;i<n;i++){const a=r[i];s[a.local]=a.xform(s,t[a.server])}return Qs(s,e),s}function ht(e,t,r){const s=dt(t);return s===null?null:en(e,s,r)}function tn(e,t,r,s){const n=dt(t);if(n===null||!ke(n.downloadTokens))return null;const i=n.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(l=>{const h=e.bucket,f=e.fullPath,p="/b/"+a(h)+"/o/"+a(f),m=Te(p,r,s),y=at({alt:"media",token:l});return m+y})[0]}function rn(e,t){const r={},s=t.length;for(let n=0;n<s;n++){const i=t[n];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}class mt{constructor(t,r,s,n){this.url=t,this.method=r,this.handler=s,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pt(e){if(!e)throw Ne()}function sn(e,t){function r(s,n){const i=ht(e,n,t);return pt(i!==null),i}return r}function nn(e,t){function r(s,n){const i=ht(e,n,t);return pt(i!==null),tn(i,n,e.host,e._protocol)}return r}function gt(e){function t(r,s){let n;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?n=xs():n=gs():r.getStatus()===402?n=ps(e.bucket):r.getStatus()===403?n=bs(e.path):n=s,n.status=r.getStatus(),n.serverResponse=s.serverResponse,n}return t}function on(e){const t=gt(e);function r(s,n){let i=t(s,n);return s.getStatus()===404&&(i=ms(e.path)),i.serverResponse=n.serverResponse,i}return r}function an(e,t,r){const s=t.fullServerUrl(),n=Te(s,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,u=new mt(n,i,nn(e,r),a);return u.errorHandler=on(t),u}function ln(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function cn(e,t,r){const s=Object.assign({},r);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=ln(null,t)),s}function dn(e,t,r,s,n){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let _="";for(let g=0;g<2;g++)_=_+Math.random().toString().slice(2);return _}const d=u();a["Content-Type"]="multipart/related; boundary="+d;const l=cn(t,s,n),h=rn(l,r),f="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+d+`\r
Content-Type: `+l.contentType+`\r
\r
`,p=`\r
--`+d+"--",m=H.getBlob(f,s,p);if(m===null)throw Es();const y={name:l.fullPath},C=Te(i,e.host,e._protocol),E="POST",L=e.maxUploadRetryTime,P=new mt(C,E,sn(e,r),L);return P.urlParams=y,P.headers=a,P.body=m.uploadData(),P.errorHandler=gt(t),P}class un{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=W.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=W.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=W.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,r,s,n){if(this.sent_)throw Y("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,t,!0),n!==void 0)for(const i in n)n.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,n[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Y("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Y("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Y("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Y("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class fn extends un{initXhr(){this.xhr_.responseType="text"}}function xt(){return new fn}/**
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
 */class q{constructor(t,r){this._service=t,r instanceof O?this._location=r:this._location=O.makeFromUrl(r,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,r){return new q(t,r)}get root(){const t=new O(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ut(this._location.path)}get storage(){return this._service}get parent(){const t=Xs(this._location.path);if(t===null)return null;const r=new O(this._location.bucket,t);return new q(this._service,r)}_throwIfRoot(t){if(this._location.path==="")throw Rs(t)}}function hn(e,t,r){e._throwIfRoot("uploadBytes");const s=dn(e.storage,e._location,ft(),new H(t,!0),r);return e.storage.makeRequestWithTokens(s,xt).then(n=>({metadata:n,ref:e}))}function mn(e){e._throwIfRoot("getDownloadURL");const t=an(e.storage,e._location,ft());return e.storage.makeRequestWithTokens(t,xt).then(r=>{if(r===null)throw Ns();return r})}function pn(e,t){const r=Zs(e._location.path,t),s=new O(e._location.bucket,r);return new q(e.storage,s)}/**
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
 */function gn(e){return/^[A-Za-z]+:\/\//.test(e)}function xn(e,t){return new q(e,t)}function bt(e,t){if(e instanceof Ae){const r=e;if(r._bucket==null)throw js();const s=new q(r,r._bucket);return t!=null?bt(s,t):s}else return t!==void 0?pn(e,t):e}function bn(e,t){if(t&&gn(t)){if(e instanceof Ae)return xn(e,t);throw ve("To use ref(service, url), the first argument must be a Storage instance.")}else return bt(e,t)}function Ve(e,t){const r=t?.[nt];return r==null?null:O.makeFromBucketSpec(r,e)}function yn(e,t,r,s={}){e.host=`${t}:${r}`,e._protocol="http";const{mockUserToken:n}=s;n&&(e._overrideAuthToken=typeof n=="string"?n:zt(n,e.app.options.projectId))}class Ae{constructor(t,r,s,n,i){this.app=t,this._authProvider=r,this._appCheckProvider=s,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=st,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fs,this._maxUploadRetryTime=hs,this._requests=new Set,n!=null?this._bucket=O.makeFromBucketSpec(n,this._host):this._bucket=Ve(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=Ve(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Me("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Me("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const r=await t.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new q(this,t)}_makeRequest(t,r,s,n,i=!0){if(this._deleted)return new Ts(ot());{const a=Fs(t,this._appId,s,n,r,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,r){const[s,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,r,s,n).getPromise()}}const ze="@firebase/storage",He="0.13.2";/**
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
 */const yt="storage";function ao(e,t,r){return e=ie(e),hn(e,t,r)}function io(e){return e=ie(e),mn(e)}function lo(e,t){return e=ie(e),bn(e,t)}function _n(e=$t(),t){e=ie(e);const s=Mt(e,yt).getImmediate({identifier:t}),n=Vt("storage");return n&&wn(s,...n),s}function wn(e,t,r,s={}){yn(e,t,r,s)}function vn(e,{instanceIdentifier:t}){const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),n=e.getProvider("app-check-internal");return new Ae(r,s,n,t,Bt)}function jn(){St(new Ut(yt,vn,"PUBLIC").setMultipleInstances(!0)),Pe(ze,He,""),Pe(ze,He,"esm2017")}jn();const oe={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"};console.log("Firebase config loaded:",{hasApiKey:!!oe.apiKey,hasAuthDomain:!!oe.authDomain,projectId:oe.projectId,usingEnvVars:!1});const De=Ht(oe),X=Gt(De),se=Wt(De),co=_n(De),_t=c.createContext();function wt(){return c.useContext(_t)}function En({children:e}){const[t,r]=c.useState(null),[s,n]=c.useState(!0);c.useEffect(()=>{let l,h;try{l=qt(X,async f=>{try{if(f)try{const p=await Kt(fe(se,"users",f.uid)),m=p.exists()?p.data():null;r({uid:f.uid,email:f.email,displayName:f.displayName,photoURL:f.photoURL,...m})}catch(p){console.log("⚠️ Firestore not available, using basic user data:",p.message),r({uid:f.uid,email:f.email,displayName:f.displayName,photoURL:f.photoURL})}else r(null)}catch(p){console.error("Error in auth state change:",p),r(null)}finally{n(!1)}}),h=setTimeout(()=>{console.log("Firebase auth timeout - setting loading to false"),n(!1)},5e3)}catch(f){console.error("Error setting up auth listener:",f),n(!1)}return()=>{l&&l(),h&&clearTimeout(h)}},[]);const d={user:t,loading:s,signInWithGoogle:async()=>{try{const l=new Jt;l.addScope("email"),l.addScope("profile");const h=await Ie(X,l);try{await Oe(fe(se,"users",h.user.uid),{uid:h.user.uid,email:h.user.email,displayName:h.user.displayName,photoURL:h.user.photoURL,createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(f){console.warn("Failed to save user data to Firestore:",f)}console.log("Successfully signed in!")}catch(l){throw console.error("Failed to sign in:",l.message),l}},signInWithGitHub:async()=>{try{console.log("Using Firebase GitHub authentication");const l=new Zt;l.addScope("user:email");const h=await Ie(X,l);try{await Oe(fe(se,"users",h.user.uid),{uid:h.user.uid,email:h.user.email,displayName:h.user.displayName||h.user.email?.split("@")[0]||"GitHub User",photoURL:h.user.photoURL,provider:"github",createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(f){console.warn("Failed to save user data to Firestore:",f)}console.log("Successfully signed in with GitHub!")}catch(l){if(console.error("GitHub authentication error:",l.message),l.code==="auth/account-exists-with-different-credential"){const h=l.customData?.email;if(h)try{const f=await Yt(X,h);throw console.log("Available sign-in methods for",h,":",f),f&&f.length>0?f.includes("google.com")?new Error(`An account with ${h} already exists using Google. Please sign in with Google instead, then you can link your GitHub account.`):f.includes("password")?new Error(`An account with ${h} already exists using email/password. Please sign in with your existing method instead.`):new Error(`An account with ${h} already exists. Please sign in with your existing method instead.`):new Error(`An account with ${h} already exists. Please try signing in with Google first, then you can link your GitHub account.`)}catch(f){throw console.error("Failed to check sign-in methods:",f.message),new Error(`An account with ${h} already exists. Please sign in with your existing method instead.`)}else throw new Error("An account with this email already exists. Please sign in with your existing method instead.")}else throw l.code==="auth/internal-error"?(console.error("GitHub authentication internal error:",l.message),new Error("GitHub authentication is not properly configured. Please check Firebase Console settings.")):(console.error("Failed to sign in with GitHub:",l.message),l)}},logout:async()=>{try{await Xt(X),console.log("Successfully signed out!")}catch(l){console.error("Failed to sign out:",l.message)}},auth:X,db:se};return o.jsx(_t.Provider,{value:d,children:s?o.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),o.jsx("p",{className:"text-muted-foreground",children:"Loading DreamBuild..."})]})}):e})}const vt=c.createContext();function uo(){return c.useContext(vt)}function Nn({children:e}){const{user:t,db:r}=wt(),[s,n]=c.useState({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),[i,a]=c.useState([]),[u,d]=c.useState(!1),l=c.useCallback(g=>{n(x=>({...x,activeFile:g,lastModified:new Date}))},[]),h=c.useCallback((g,x)=>{n(N=>({...N,files:{...N.files,[g]:x},lastModified:new Date}))},[]),f=c.useCallback(g=>{n(x=>{const N={...x,config:{...x.config,...g},lastModified:new Date};return g.name&&(N.name=g.name),N})},[]),p=c.useCallback(async()=>{if(t){d(!0);try{const{collection:g,query:x,where:N,getDocs:I,orderBy:R}=await b(async()=>{const{collection:V,query:ue,where:jt,getDocs:Et,orderBy:Nt}=await import("./firebase-D3YEaW0R.js").then(kt=>kt.B);return{collection:V,query:ue,where:jt,getDocs:Et,orderBy:Nt}},[]),A=g(r,"projects"),F=x(A,N("userId","==",t.uid),R("lastModified","desc")),Z=(await I(F)).docs.map(V=>({id:V.id,...V.data()}));a(Z)}catch(g){console.error("Failed to load projects:",g),D.error("Failed to load projects: "+g.message)}finally{d(!1)}}},[t,r]);c.useEffect(()=>{t?p():a([])},[t,p]);const m=c.useCallback(async(g=null)=>{if(!t){D.error("Please sign in to save projects");return}d(!0);try{const x={...s,name:g||s.name,userId:t.uid,lastModified:new Date},{doc:N,setDoc:I,collection:R}=await b(async()=>{const{doc:F,setDoc:K,collection:Z}=await import("./firebase-D3YEaW0R.js").then(V=>V.B);return{doc:F,setDoc:K,collection:Z}},[]),A=N(R(r,"projects"));await I(A,{...x,id:A.id,createdAt:s.id?void 0:new Date}),n(F=>({...F,id:A.id})),D.success("Project saved successfully!"),await p()}catch(x){D.error("Failed to save project: "+x.message)}finally{d(!1)}},[s,t,r,p]),y=c.useCallback(async g=>{if(!t){D.error("Please sign in to save projects");return}d(!0);try{const x={...g,userId:t.uid,lastModified:new Date,createdAt:g.createdAt||new Date},{doc:N,setDoc:I,collection:R}=await b(async()=>{const{doc:K,setDoc:Z,collection:V}=await import("./firebase-D3YEaW0R.js").then(ue=>ue.B);return{doc:K,setDoc:Z,collection:V}},[]),A=N(R(r,"projects")),F={...x,id:A.id};await I(A,F),D.success(`Project "${g.name}" saved successfully!`),await p()}catch(x){console.error("Failed to save external project:",x),D.error("Failed to save project")}finally{d(!1)}},[t,r,p]),C=c.useCallback(async g=>{if(t){d(!0);try{const{doc:x,getDoc:N}=await b(async()=>{const{doc:A,getDoc:F}=await import("./firebase-D3YEaW0R.js").then(K=>K.B);return{doc:A,getDoc:F}},[]),I=x(r,"projects",g),R=await N(I);if(R.exists()){const A={id:R.id,...R.data()};n(A),D.success("Project loaded successfully!")}else D.error("Project not found")}catch(x){D.error("Failed to load project: "+x.message)}finally{d(!1)}}},[t,r]),E=c.useCallback(async g=>{if(t){d(!0);try{const{doc:x,deleteDoc:N}=await b(async()=>{const{doc:I,deleteDoc:R}=await import("./firebase-D3YEaW0R.js").then(A=>A.B);return{doc:I,deleteDoc:R}},[]);await N(x(r,"projects",g)),a(I=>I.filter(R=>R.id!==g)),D.success("Project deleted successfully!")}catch(x){D.error("Failed to delete project: "+x.message)}finally{d(!1)}}},[t,r]),L=c.useCallback(()=>{n({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),D.success("New project created!")},[]),P=c.useCallback(g=>{n(x=>({...x,files:{...x.files,...g},lastModified:new Date})),D.success(`${Object.keys(g).length} files added to project!`)},[]),_=c.useMemo(()=>({currentProject:s,projects:i,isLoading:u,switchFile:l,updateFile:h,updateConfig:f,saveProject:m,saveExternalProject:y,loadProjects:p,loadProject:C,deleteProject:E,createNewProject:L,addFilesToProject:P}),[s,i,u,l,h,f,m,y,p,C,E,L,P]);return o.jsx(vt.Provider,{value:_,children:e})}class xe extends be.Component{constructor(t){super(t),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,r){this.setState({error:t,errorInfo:r}),console.error("Application Error:",{error:t.message,stack:t.stack,componentStack:r.componentStack})}handleRetry=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};render(){return this.state.hasError?o.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center p-4",children:o.jsxs("div",{className:"max-w-md w-full bg-card rounded-2xl shadow-lg border border-border p-8 text-center",children:[o.jsx("div",{className:"w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6",children:o.jsx(Qt,{className:"h-8 w-8 text-red-600 dark:text-red-400"})}),o.jsx("h1",{className:"text-2xl font-bold text-foreground mb-2",children:"Oops! Something went wrong"}),o.jsx("p",{className:"text-muted-foreground mb-6",children:"We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists."}),!1,o.jsxs("div",{className:"flex gap-3 justify-center",children:[o.jsxs("button",{onClick:this.handleRetry,className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",children:[o.jsx(er,{className:"h-4 w-4"}),"Try Again"]}),o.jsxs(S,{to:"/",className:"flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors",children:[o.jsx(tr,{className:"h-4 w-4"}),"Go Home"]})]})]})}):this.props.children}}const kn=()=>{const{theme:e,toggleTheme:t}=ds(),{user:r,logout:s}=wt(),[n,i]=c.useState(!1),[a,u]=c.useState(!1),[d,l]=c.useState(!1),h=je();be.useEffect(()=>{const m=()=>{u(window.innerWidth>=768)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),be.useEffect(()=>{const m=y=>{d&&!y.target.closest(".user-menu")&&l(!1)};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[d]);const f=[{name:"Home",href:"/",icon:he},{name:"AI Builder",href:"/ai-builder",icon:rr},{name:"Multi-Window",href:"/multi-window",icon:sr},{name:"Templates",href:"/templates",icon:ye},{name:"Gallery",href:"/gallery",icon:nr},{name:"Education",href:"/education",icon:or},{name:"Projects",href:"/projects",icon:me},{name:"Dashboard",href:"/dashboard",icon:ar}],p=m=>h.pathname===m;return o.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm",children:o.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"flex items-center justify-between h-16",children:[o.jsxs(S,{to:"/",className:"flex items-center gap-3 group",children:[o.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg",children:o.jsx(ye,{className:"h-6 w-6 text-primary-foreground"})}),o.jsxs("div",{className:"flex flex-col",children:[o.jsx("span",{className:"text-xl font-bold text-high-contrast",children:"DreamBuild"}),o.jsx("span",{className:"text-xs text-muted-foreground -mt-1",children:"AI Development Platform"})]})]}),o.jsx("div",{className:"hidden md:flex items-center gap-1",children:f.map(m=>{const y=m.icon;return o.jsxs(S,{to:m.href,className:`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${p(m.href)?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[o.jsx(y,{className:"h-4 w-4"}),m.name]},m.name)})}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:t,className:"p-2 rounded-lg hover:bg-muted transition-colors",title:`Switch to ${e==="light"?"dark":"light"} mode`,children:e==="light"?o.jsx(ir,{className:"h-4 w-4 text-muted-foreground"}):o.jsx(lr,{className:"h-4 w-4 text-muted-foreground"})}),r?o.jsxs("div",{className:"relative user-menu",children:[o.jsxs("button",{onClick:()=>l(!d),className:"flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors",children:[o.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center",children:o.jsx("span",{className:"text-sm font-semibold text-primary",children:(r.displayName||r.email||"U").charAt(0).toUpperCase()})}),o.jsx("span",{className:"hidden sm:inline text-sm font-medium text-foreground",children:r.displayName||r.email})]}),d&&o.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-[60]",children:[o.jsxs("div",{className:"p-3 border-b border-border",children:[o.jsx("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:r.email})]}),o.jsxs("div",{className:"p-1",children:[o.jsxs(S,{to:"/dashboard",onClick:()=>l(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[o.jsx(me,{className:"h-4 w-4"}),"Dashboard"]}),o.jsxs(S,{to:"/settings",onClick:()=>l(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[o.jsx(Ce,{className:"h-4 w-4"}),"Settings"]}),o.jsx("hr",{className:"my-1"}),o.jsxs("button",{onClick:()=>{s(),l(!1)},className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors",children:[o.jsx(Le,{className:"h-4 w-4"}),"Sign Out"]})]})]})]}):o.jsxs(S,{to:"/login",className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[o.jsx(he,{className:"h-4 w-4"}),"Sign In"]}),!a&&o.jsx("button",{onClick:()=>i(!n),className:"p-2 rounded-lg hover:bg-muted transition-colors ml-2",children:n?o.jsx(cr,{className:"h-4 w-4"}):o.jsx(dr,{className:"h-4 w-4"})})]})]}),!a&&n&&o.jsx("div",{className:"border-t border-border bg-background",children:o.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[f.map(m=>{const y=m.icon;return o.jsxs(S,{to:m.href,onClick:()=>i(!1),className:`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border ${p(m.href)?"bg-primary text-primary-foreground border-primary shadow-md":"bg-card text-foreground border-border hover:bg-muted hover:border-primary/30 shadow-sm"}`,children:[o.jsx(y,{className:"h-5 w-5"}),m.name]},m.name)}),r?o.jsxs("div",{className:"mt-4 space-y-2",children:[o.jsxs("div",{className:"px-4 py-2 border-b border-border",children:[o.jsx("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:r.email})]}),o.jsxs(S,{to:"/dashboard",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[o.jsx(me,{className:"h-5 w-5"}),"Dashboard"]}),o.jsxs(S,{to:"/settings",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[o.jsx(Ce,{className:"h-5 w-5"}),"Settings"]}),o.jsxs("button",{onClick:()=>{s(),i(!1)},className:"w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg",children:[o.jsx(Le,{className:"h-5 w-5"}),"Sign Out"]})]}):o.jsxs(S,{to:"/login",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg text-base font-semibold",children:[o.jsx(he,{className:"h-5 w-5"}),"Sign In"]})]})})]})})},Rn=()=>{const[e,t]=c.useState(""),[r,s]=c.useState(!1),n=i=>{i.preventDefault(),e&&(s(!0),t(""),setTimeout(()=>s(!1),3e3))};return o.jsx("footer",{className:"bg-background border-t border-border",children:o.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:o.jsx(ye,{className:"h-5 w-5 text-primary-foreground"})}),o.jsx("span",{className:"text-xl font-bold text-foreground",children:"DreamBuild"})]}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"AI-powered development platform for modern developers."}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"GitHub",children:o.jsx(ur,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),o.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Twitter",children:o.jsx(fr,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),o.jsx("a",{href:"mailto:contact@dreambuild.ai",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Email",children:o.jsx(Se,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Stay Updated"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Get the latest updates and features."}),o.jsxs("form",{onSubmit:n,className:"space-y-3",children:[o.jsxs("div",{className:"flex gap-2",children:[o.jsx("input",{type:"email",value:e,onChange:i=>t(i.target.value),placeholder:"Enter your email",className:"flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",required:!0}),o.jsx("button",{type:"submit",disabled:r,className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:r?o.jsx(Se,{className:"h-4 w-4"}):o.jsx(hr,{className:"h-4 w-4"})})]}),r&&o.jsx("p",{className:"text-sm text-green-600",children:"Thanks for subscribing!"})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Quick Links"}),o.jsxs("ul",{className:"space-y-2 text-sm",children:[o.jsx("li",{children:o.jsx("a",{href:"/ai-builder",className:"text-muted-foreground hover:text-foreground transition-colors",children:"AI Builder"})}),o.jsx("li",{children:o.jsx("a",{href:"/templates",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Templates"})}),o.jsx("li",{children:o.jsx("a",{href:"/documentation",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Documentation"})}),o.jsx("li",{children:o.jsx("a",{href:"/support",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Support"})})]})]})]}),o.jsx("div",{className:"border-t border-border pt-8 mt-8",children:o.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[o.jsx("div",{className:"text-sm text-muted-foreground",children:o.jsx("span",{children:"© 2024 Bradley Virtual Solutions, LLC"})}),o.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[o.jsx("a",{href:"/privacy",className:"hover:text-foreground transition-colors",children:"Privacy"}),o.jsx("a",{href:"/terms",className:"hover:text-foreground transition-colors",children:"Terms"}),o.jsx("a",{href:"/contact",className:"hover:text-foreground transition-colors",children:"Contact"})]})]})})]})})},Tn=c.lazy(()=>b(()=>import("./Home-BiN-b7Za.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),An=c.lazy(()=>b(()=>import("./AIBuilder-hhI1zLpK.js"),__vite__mapDeps([7,1,2,8,4,5,6,3,9,10,11]))),Dn=c.lazy(()=>b(()=>import("./Templates-CaijCWVj.js"),__vite__mapDeps([12,4,5,1,3,2,6]))),Pn=c.lazy(()=>b(()=>import("./Dashboard-DyMcEWK3.js"),__vite__mapDeps([13,1,2,3,4,5,6]))),In=c.lazy(()=>b(()=>import("./Login-Dfa1P36V.js"),__vite__mapDeps([14,1,2,3,4,5,6]))),On=c.lazy(()=>b(()=>import("./Signup-B3xxya24.js"),__vite__mapDeps([15,1,2,3,4,5,6]))),Cn=c.lazy(()=>b(()=>import("./Projects-Cow3jsc7.js"),__vite__mapDeps([16,1,3,4,5,2,6]))),Ln=c.lazy(()=>b(()=>import("./Settings-C7dH5ikn.js"),__vite__mapDeps([17,1,3,4,5,2,6]))),Sn=c.lazy(()=>b(()=>import("./Documentation-skff1CFE.js"),__vite__mapDeps([18,1,3,4,5,2,6]))),Un=c.lazy(()=>b(()=>import("./Examples-CN5w-6xo.js"),__vite__mapDeps([19,1,3,4,5,2,6]))),Bn=c.lazy(()=>b(()=>import("./Community-C1nVlbI6.js"),__vite__mapDeps([20,1,3,4,5,2,6]))),Fn=c.lazy(()=>b(()=>import("./About-CwcMION-.js"),__vite__mapDeps([21,1,3,4,5,2,6]))),$n=c.lazy(()=>b(()=>import("./Blog-B1ZKc6X9.js"),__vite__mapDeps([22,1,3,4,5,2,6]))),Mn=c.lazy(()=>b(()=>import("./Contact-fB8oyK43.js"),__vite__mapDeps([23,1,3,4,5,2,6]))),Vn=c.lazy(()=>b(()=>import("./Privacy-DsScM8qp.js"),__vite__mapDeps([24,1,3,4,5,2,6]))),zn=c.lazy(()=>b(()=>import("./Terms-BBOYnR7k.js"),__vite__mapDeps([25,1,3,4,5,2,6]))),Hn=c.lazy(()=>b(()=>import("./Education-C3o6zt3X.js"),__vite__mapDeps([26,1,3,4,5,2,6]))),Gn=c.lazy(()=>b(()=>import("./AppHost-B0PLrhM9.js"),__vite__mapDeps([27,1,9,6,2,4,5,3]))),Wn=c.lazy(()=>b(()=>import("./AppGallery-COul3vuO.js"),__vite__mapDeps([28,1,9,6,3,4,5,2]))),qn=c.lazy(()=>b(()=>import("./DeleteApps-B7YP9_DU.js"),__vite__mapDeps([29,1,6,4,5,2,3]))),Kn=c.lazy(()=>b(()=>import("./MultiWindowManager-B5PqVyiT.js"),__vite__mapDeps([30,1,2,8,4,5,6,3,9,10,11]))),Xn=()=>o.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),o.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})});function Zn(){const e=je();return["/ai-builder","/multi-window"].includes(e.pathname)?null:o.jsx(Rn,{})}function Yn({children:e}){const t=je();return["/ai-builder","/dashboard","/projects","/multi-window"].includes(t.pathname)?o.jsx("main",{children:e}):o.jsx("main",{className:"pt-16",children:e})}function Jn(){return o.jsx(xe,{children:o.jsx(us,{children:o.jsx(En,{children:o.jsx(Nn,{children:o.jsx(Ot,{children:o.jsxs("div",{className:"min-h-screen bg-background",children:[o.jsx(xe,{children:o.jsx(kn,{})}),o.jsx(Yn,{children:o.jsx(xe,{children:o.jsx(c.Suspense,{fallback:o.jsx(Xn,{}),children:o.jsxs(Ct,{children:[o.jsx(w,{path:"/",element:o.jsx(Tn,{})}),o.jsx(w,{path:"/app",element:o.jsx(Lt,{to:"/ai-builder",replace:!0})}),o.jsx(w,{path:"/ai-builder",element:o.jsx(An,{})}),o.jsx(w,{path:"/multi-window",element:o.jsx(Kn,{})}),o.jsx(w,{path:"/templates",element:o.jsx(Dn,{})}),o.jsx(w,{path:"/dashboard",element:o.jsx(Pn,{})}),o.jsx(w,{path:"/login",element:o.jsx(In,{})}),o.jsx(w,{path:"/signup",element:o.jsx(On,{})}),o.jsx(w,{path:"/projects",element:o.jsx(Cn,{})}),o.jsx(w,{path:"/settings",element:o.jsx(Ln,{})}),o.jsx(w,{path:"/documentation",element:o.jsx(Sn,{})}),o.jsx(w,{path:"/examples",element:o.jsx(Un,{})}),o.jsx(w,{path:"/community",element:o.jsx(Bn,{})}),o.jsx(w,{path:"/about",element:o.jsx(Fn,{})}),o.jsx(w,{path:"/blog",element:o.jsx($n,{})}),o.jsx(w,{path:"/contact",element:o.jsx(Mn,{})}),o.jsx(w,{path:"/privacy",element:o.jsx(Vn,{})}),o.jsx(w,{path:"/terms",element:o.jsx(zn,{})}),o.jsx(w,{path:"/education",element:o.jsx(Hn,{})}),o.jsx(w,{path:"/apps/:appId",element:o.jsx(Gn,{})}),o.jsx(w,{path:"/gallery",element:o.jsx(Wn,{})}),o.jsx(w,{path:"/delete-apps",element:o.jsx(qn,{})})]})})})}),o.jsx(Zn,{}),o.jsx(cs,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--card)",color:"var(--card-foreground)",border:"1px solid var(--border)"}}})]})})})})})})}Ke(document.getElementById("root")).render(o.jsx(c.StrictMode,{children:o.jsx(Jn,{})}));export{ds as a,wt as b,ao as c,se as d,_n as e,io as g,o as j,k as n,lo as r,co as s,uo as u,D as z};
