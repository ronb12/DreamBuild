const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CABQGFGz.js","assets/react-vendor-ChHrLFfk.js","assets/router-vendor-BWBiukp8.js","assets/ui-vendor-Tfh8VmzK.js","assets/monaco-editor-CKIEnvzl.js","assets/monaco-editor-DgbvVKni.css","assets/firebase-C6E9X45-.js","assets/AIBuilder-BjUU8e7r.js","assets/firebaseAppService-DyLxS1gN.js","assets/simpleAIService-BHA6-clH.js","assets/utils-vendor-ngrFHoWO.js","assets/Templates-CRn8qHT2.js","assets/Dashboard-DHRBJPDu.js","assets/Login-RFKXd9Ng.js","assets/Signup-q_PSYwWE.js","assets/Projects-DqfatWXf.js","assets/Settings-2VKoquH-.js","assets/Documentation-DIUxRMUK.js","assets/Examples-fusdA4SI.js","assets/Community-CSArQ5eA.js","assets/About-Cq3lWUnc.js","assets/Blog-DVJYB3sZ.js","assets/Contact-BFCR29nx.js","assets/Privacy-B7vxUZTN.js","assets/Terms-CXT_7LUu.js","assets/Education-Cv1y7RN8.js","assets/AppHost-DLUnutf9.js","assets/AppGallery-CSRQgPxh.js","assets/DeleteApps-D9Sckzw9.js"])))=>i.map(i=>d[i]);
import{initializeApp as Rt}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";import{getAuth as Tt,signInWithPopup as At,GithubAuthProvider as Dt,GoogleAuthProvider as Pt}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";import{r as d,b as It,R as be}from"./react-vendor-ChHrLFfk.js";import{_ as b}from"./monaco-editor-CKIEnvzl.js";import{L as S,u as je,B as Ot,R as Ct,a as E,N as Lt}from"./router-vendor-BWBiukp8.js";import{_ as St,C as Ut,r as Pe,S as Bt,F as Ft,g as $t,a as ie,b as Mt,c as Vt,d as Ht,i as zt,e as Gt,f as Wt,o as qt,h as Kt,j as fe,s as Xt,G as Zt,k as Ie,l as Oe,m as Yt,n as Jt}from"./firebase-C6E9X45-.js";import{A as Qt,R as er,H as tr,S as ye,a as he,C as rr,G as sr,B as nr,D as me,U as or,M as ar,b as ir,c as Ce,L as Le,X as lr,d as cr,e as dr,T as ur,f as Se,g as fr}from"./ui-vendor-Tfh8VmzK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const hr={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"},Ge=Rt(hr),mr=Tt(Ge);window.firebase={auth:()=>mr,GoogleAuthProvider:Pt,GithubAuthProvider:Dt,signInWithPopup:At};window.firebaseApp=Ge;console.log("Firebase loaded globally with providers:",!!window.firebase);var We={exports:{}},le={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=d,gr=Symbol.for("react.element"),xr=Symbol.for("react.fragment"),br=Object.prototype.hasOwnProperty,yr=pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_r={key:!0,ref:!0,__self:!0,__source:!0};function qe(e,t,r){var s,n={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(s in t)br.call(t,s)&&!_r.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)n[s]===void 0&&(n[s]=t[s]);return{$$typeof:gr,type:e,key:i,ref:a,props:n,_owner:yr.current}}le.Fragment=xr;le.jsx=qe;le.jsxs=qe;We.exports=le;var o=We.exports,Ke,Ue=It;Ke=Ue.createRoot,Ue.hydrateRoot;let wr={data:""},vr=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||wr,jr=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Er=/\/\*[^]*?\*\/|  +/g,Be=/\n+/g,H=(e,t)=>{let r="",s="",n="";for(let i in e){let a=e[i];i[0]=="@"?i[1]=="i"?r=i+" "+a+";":s+=i[1]=="f"?H(a,i):i+"{"+H(a,i[1]=="k"?"":t)+"}":typeof a=="object"?s+=H(a,t?t.replace(/([^,])+/g,u=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,u):u?u+" "+c:c)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=H.p?H.p(i,a):i+":"+a+";")}return r+(t&&n?t+"{"+n+"}":n)+s},$={},Xe=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Xe(e[r]);return t}return e},Nr=(e,t,r,s,n)=>{let i=Xe(e),a=$[i]||($[i]=(c=>{let l=0,h=11;for(;l<c.length;)h=101*h+c.charCodeAt(l++)>>>0;return"go"+h})(i));if(!$[a]){let c=i!==e?e:(l=>{let h,f,p=[{}];for(;h=jr.exec(l.replace(Er,""));)h[4]?p.shift():h[3]?(f=h[3].replace(Be," ").trim(),p.unshift(p[0][f]=p[0][f]||{})):p[0][h[1]]=h[2].replace(Be," ").trim();return p[0]})(e);$[a]=H(n?{["@keyframes "+a]:c}:c,r?"":"."+a)}let u=r&&$.g?$.g:null;return r&&($.g=$[a]),((c,l,h,f)=>{f?l.data=l.data.replace(f,c):l.data.indexOf(c)===-1&&(l.data=h?c+l.data:l.data+c)})($[a],t,s,u),a},kr=(e,t,r)=>e.reduce((s,n,i)=>{let a=t[i];if(a&&a.call){let u=a(r),c=u&&u.props&&u.props.className||/^go/.test(u)&&u;a=c?"."+c:u&&typeof u=="object"?u.props?"":H(u,""):u===!1?"":u}return s+n+(a??"")},"");function ce(e){let t=this||{},r=e.call?e(t.p):e;return Nr(r.unshift?r.raw?kr(r,[].slice.call(arguments,1),t.p):r.reduce((s,n)=>Object.assign(s,n&&n.call?n(t.p):n),{}):r,vr(t.target),t.g,t.o,t.k)}let Ze,_e,we;ce.bind({g:1});let M=ce.bind({k:1});function Rr(e,t,r,s){H.p=t,Ze=e,_e=r,we=s}function G(e,t){let r=this||{};return function(){let s=arguments;function n(i,a){let u=Object.assign({},i),c=u.className||n.className;r.p=Object.assign({theme:_e&&_e()},u),r.o=/ *go\d+/.test(c),u.className=ce.apply(r,s)+(c?" "+c:"");let l=e;return e[0]&&(l=u.as||e,delete u.as),we&&l[0]&&we(u),Ze(l,u)}return n}}var Tr=e=>typeof e=="function",ae=(e,t)=>Tr(e)?e(t):e,Ar=(()=>{let e=0;return()=>(++e).toString()})(),Ye=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Dr=20,Ee="default",Je=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:s}=t;return Je(e,{type:e.toasts.find(a=>a.id===s.id)?1:0,toast:s});case 3:let{toastId:n}=t;return{...e,toasts:e.toasts.map(a=>a.id===n||n===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},ne=[],Qe={toasts:[],pausedAt:void 0,settings:{toastLimit:Dr}},U={},et=(e,t=Ee)=>{U[t]=Je(U[t]||Qe,e),ne.forEach(([r,s])=>{r===t&&s(U[t])})},tt=e=>Object.keys(U).forEach(t=>et(e,t)),Pr=e=>Object.keys(U).find(t=>U[t].toasts.some(r=>r.id===e)),de=(e=Ee)=>t=>{et(t,e)},Ir={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Or=(e={},t=Ee)=>{let[r,s]=d.useState(U[t]||Qe),n=d.useRef(U[t]);d.useEffect(()=>(n.current!==U[t]&&s(U[t]),ne.push([t,s]),()=>{let a=ne.findIndex(([u])=>u===t);a>-1&&ne.splice(a,1)}),[t]);let i=r.toasts.map(a=>{var u,c,l;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((u=e[a.type])==null?void 0:u.removeDelay)||e?.removeDelay,duration:a.duration||((c=e[a.type])==null?void 0:c.duration)||e?.duration||Ir[a.type],style:{...e.style,...(l=e[a.type])==null?void 0:l.style,...a.style}}});return{...r,toasts:i}},Cr=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||Ar()}),Q=e=>(t,r)=>{let s=Cr(t,e,r);return de(s.toasterId||Pr(s.id))({type:2,toast:s}),s.id},k=(e,t)=>Q("blank")(e,t);k.error=Q("error");k.success=Q("success");k.loading=Q("loading");k.custom=Q("custom");k.dismiss=(e,t)=>{let r={type:3,toastId:e};t?de(t)(r):tt(r)};k.dismissAll=e=>k.dismiss(void 0,e);k.remove=(e,t)=>{let r={type:4,toastId:e};t?de(t)(r):tt(r)};k.removeAll=e=>k.remove(void 0,e);k.promise=(e,t,r)=>{let s=k.loading(t.loading,{...r,...r?.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let i=t.success?ae(t.success,n):void 0;return i?k.success(i,{id:s,...r,...r?.success}):k.dismiss(s),n}).catch(n=>{let i=t.error?ae(t.error,n):void 0;i?k.error(i,{id:s,...r,...r?.error}):k.dismiss(s)}),e};var Lr=1e3,Sr=(e,t="default")=>{let{toasts:r,pausedAt:s}=Or(e,t),n=d.useRef(new Map).current,i=d.useCallback((f,p=Lr)=>{if(n.has(f))return;let m=setTimeout(()=>{n.delete(f),a({type:4,toastId:f})},p);n.set(f,m)},[]);d.useEffect(()=>{if(s)return;let f=Date.now(),p=r.map(m=>{if(m.duration===1/0)return;let y=(m.duration||0)+m.pauseDuration-(f-m.createdAt);if(y<0){m.visible&&k.dismiss(m.id);return}return setTimeout(()=>k.dismiss(m.id,t),y)});return()=>{p.forEach(m=>m&&clearTimeout(m))}},[r,s,t]);let a=d.useCallback(de(t),[t]),u=d.useCallback(()=>{a({type:5,time:Date.now()})},[a]),c=d.useCallback((f,p)=>{a({type:1,toast:{id:f,height:p}})},[a]),l=d.useCallback(()=>{s&&a({type:6,time:Date.now()})},[s,a]),h=d.useCallback((f,p)=>{let{reverseOrder:m=!1,gutter:y=8,defaultPosition:C}=p||{},j=r.filter(_=>(_.position||C)===(f.position||C)&&_.height),L=j.findIndex(_=>_.id===f.id),P=j.filter((_,g)=>g<L&&_.visible).length;return j.filter(_=>_.visible).slice(...m?[P+1]:[0,P]).reduce((_,g)=>_+(g.height||0)+y,0)},[r]);return d.useEffect(()=>{r.forEach(f=>{if(f.dismissed)i(f.id,f.removeDelay);else{let p=n.get(f.id);p&&(clearTimeout(p),n.delete(f.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:c,startPause:u,endPause:l,calculateOffset:h}}},Ur=M`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Br=M`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Fr=M`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,$r=G("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ur} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Br} 0.15s ease-out forwards;
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
    animation: ${Fr} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Mr=M`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Vr=G("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Mr} 1s linear infinite;
`,Hr=M`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,zr=M`
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
}`,Gr=G("div")`
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
    animation: ${zr} 0.2s ease-out forwards;
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
`,Wr=G("div")`
  position: absolute;
`,qr=G("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Kr=M`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Xr=G("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Kr} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Zr=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?d.createElement(Xr,null,t):t:r==="blank"?null:d.createElement(qr,null,d.createElement(Vr,{...s}),r!=="loading"&&d.createElement(Wr,null,r==="error"?d.createElement($r,{...s}):d.createElement(Gr,{...s})))},Yr=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Jr=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Qr="0%{opacity:0;} 100%{opacity:1;}",es="0%{opacity:1;} 100%{opacity:0;}",ts=G("div")`
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
`,rs=G("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ss=(e,t)=>{let r=e.includes("top")?1:-1,[s,n]=Ye()?[Qr,es]:[Yr(r),Jr(r)];return{animation:t?`${M(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${M(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ns=d.memo(({toast:e,position:t,style:r,children:s})=>{let n=e.height?ss(e.position||t||"top-center",e.visible):{opacity:0},i=d.createElement(Zr,{toast:e}),a=d.createElement(rs,{...e.ariaProps},ae(e.message,e));return d.createElement(ts,{className:e.className,style:{...n,...r,...e.style}},typeof s=="function"?s({icon:i,message:a}):d.createElement(d.Fragment,null,i,a))});Rr(d.createElement);var os=({id:e,className:t,style:r,onHeightUpdate:s,children:n})=>{let i=d.useCallback(a=>{if(a){let u=()=>{let c=a.getBoundingClientRect().height;s(e,c)};u(),new MutationObserver(u).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return d.createElement("div",{ref:i,className:t,style:r},n)},as=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ye()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...n}},is=ce`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=16,ls=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:n,toasterId:i,containerStyle:a,containerClassName:u})=>{let{toasts:c,handlers:l}=Sr(r,i);return d.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:ee,left:ee,right:ee,bottom:ee,pointerEvents:"none",...a},className:u,onMouseEnter:l.startPause,onMouseLeave:l.endPause},c.map(h=>{let f=h.position||t,p=l.calculateOffset(h,{reverseOrder:e,gutter:s,defaultPosition:t}),m=as(f,p);return d.createElement(os,{id:h.id,key:h.id,onHeightUpdate:l.updateHeight,className:h.visible?is:"",style:m},h.type==="custom"?ae(h.message,h):n?n(h):d.createElement(ns,{toast:h,position:f}))}))},D=k;const rt=d.createContext();function cs(){return d.useContext(rt)}const Fe={light:{name:"Light Theme",cssVars:{"--primary":"#2563eb","--primary-foreground":"#ffffff","--background":"#ffffff","--foreground":"#0f172a","--card":"#ffffff","--muted":"#f8fafc","--border":"#e2e8f0"},isDark:!1},dark:{name:"Dark Theme",cssVars:{"--primary":"#3b82f6","--primary-foreground":"#ffffff","--background":"#0f172a","--foreground":"#f8fafc","--card":"#1e293b","--muted":"#1e293b","--border":"#334155"},isDark:!0},blue:{name:"Blue Theme",cssVars:{"--primary":"#1e40af","--primary-foreground":"#ffffff","--background":"#f0f9ff","--foreground":"#0c4a6e","--card":"#e0f2fe","--muted":"#e0f2fe","--border":"#7dd3fc"},isDark:!1},purple:{name:"Purple Theme",cssVars:{"--primary":"#7c3aed","--primary-foreground":"#ffffff","--background":"#faf5ff","--foreground":"#581c87","--card":"#f3e8ff","--muted":"#f3e8ff","--border":"#c4b5fd"},isDark:!1},green:{name:"Green Theme",cssVars:{"--primary":"#059669","--primary-foreground":"#ffffff","--background":"#f0fdf4","--foreground":"#064e3b","--card":"#dcfce7","--muted":"#dcfce7","--border":"#86efac"},isDark:!1},orange:{name:"Orange Theme",cssVars:{"--primary":"#ea580c","--primary-foreground":"#ffffff","--background":"#fff7ed","--foreground":"#9a3412","--card":"#fed7aa","--muted":"#fed7aa","--border":"#fdba74"},isDark:!1},red:{name:"Red Theme",cssVars:{"--primary":"#dc2626","--primary-foreground":"#ffffff","--background":"#fef2f2","--foreground":"#991b1b","--card":"#fecaca","--muted":"#fecaca","--border":"#fca5a5"},isDark:!1},pink:{name:"Pink Theme",cssVars:{"--primary":"#db2777","--primary-foreground":"#ffffff","--background":"#fdf2f8","--foreground":"#9d174d","--card":"#fce7f3","--muted":"#fce7f3","--border":"#f9a8d4"},isDark:!1},cyan:{name:"Cyan Theme",cssVars:{"--primary":"#0891b2","--primary-foreground":"#ffffff","--background":"#ecfeff","--foreground":"#164e63","--card":"#cffafe","--muted":"#cffafe","--border":"#67e8f9"},isDark:!1},amber:{name:"Amber Theme",cssVars:{"--primary":"#d97706","--primary-foreground":"#ffffff","--background":"#fffbeb","--foreground":"#92400e","--card":"#fef3c7","--muted":"#fef3c7","--border":"#fde68a"},isDark:!1},emerald:{name:"Emerald Theme",cssVars:{"--primary":"#10b981","--primary-foreground":"#ffffff","--background":"#ecfdf5","--foreground":"#064e3b","--card":"#d1fae5","--muted":"#d1fae5","--border":"#6ee7b7"},isDark:!1}};function ds({children:e}){const[t,r]=d.useState("light");d.useEffect(()=>{const a=localStorage.getItem("theme")||"light";r(a),s(a)},[]);const s=a=>{const u=Fe[a];u&&(Object.entries(u.cssVars).forEach(([c,l])=>{document.documentElement.style.setProperty(c,l)}),document.documentElement.classList.toggle("dark",u.isDark))},n=a=>{r(a),localStorage.setItem("theme",a),s(a)},i=()=>{n(t==="light"?"dark":"light")};return o.jsx(rt.Provider,{value:{theme:t,setTheme:n,toggleTheme:i,themes:Fe},children:e})}/**
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
 */const st="firebasestorage.googleapis.com",nt="storageBucket",us=2*60*1e3,fs=10*60*1e3;/**
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
 */class v extends Ft{constructor(t,r,s=0){super(pe(t),`Firebase Storage: ${r} (${pe(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,v.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return pe(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var w;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(w||(w={}));function pe(e){return"storage/"+e}function Ne(){const e="An unknown error occurred, please check the error payload for server response.";return new v(w.UNKNOWN,e)}function hs(e){return new v(w.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function ms(e){return new v(w.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ps(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new v(w.UNAUTHENTICATED,e)}function gs(){return new v(w.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function xs(e){return new v(w.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function bs(){return new v(w.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ys(){return new v(w.CANCELED,"User canceled the upload/download.")}function _s(e){return new v(w.INVALID_URL,"Invalid URL '"+e+"'.")}function ws(e){return new v(w.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function vs(){return new v(w.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nt+"' property when initializing the app?")}function js(){return new v(w.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Es(){return new v(w.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ns(e){return new v(w.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ve(e){return new v(w.INVALID_ARGUMENT,e)}function ot(){return new v(w.APP_DELETED,"The Firebase app was deleted.")}function ks(e){return new v(w.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function J(e,t){return new v(w.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Y(e){throw new v(w.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class O{constructor(t,r){this.bucket=t,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,r){let s;try{s=O.makeFromUrl(t,r)}catch{return new O(t,"")}if(s.path==="")return s;throw ws(t)}static makeFromUrl(t,r){let s=null;const n="([A-Za-z0-9.\\-_]+)";function i(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+n+a,"i"),c={bucket:1,path:3};function l(g){g.path_=decodeURIComponent(g.path)}const h="v[A-Za-z0-9_]+",f=r.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${n}/o${p}`,"i"),y={bucket:1,path:3},C=r===st?"(?:storage.googleapis.com|storage.cloud.google.com)":r,j="([^?#]*)",L=new RegExp(`^https?://${C}/${n}/${j}`,"i"),_=[{regex:u,indices:c,postModify:i},{regex:m,indices:y,postModify:l},{regex:L,indices:{bucket:1,path:2},postModify:l}];for(let g=0;g<_.length;g++){const x=_[g],N=x.regex.exec(t);if(N){const I=N[x.indices.bucket];let R=N[x.indices.path];R||(R=""),s=new O(I,R),x.postModify(s);break}}if(s==null)throw _s(t);return s}}class Rs{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Ts(e,t,r){let s=1,n=null,i=null,a=!1,u=0;function c(){return u===2}let l=!1;function h(...j){l||(l=!0,t.apply(null,j))}function f(j){n=setTimeout(()=>{n=null,e(m,c())},j)}function p(){i&&clearTimeout(i)}function m(j,...L){if(l){p();return}if(j){p(),h.call(null,j,...L);return}if(c()||a){p(),h.call(null,j,...L);return}s<64&&(s*=2);let _;u===1?(u=2,_=0):_=(s+Math.random())*1e3,f(_)}let y=!1;function C(j){y||(y=!0,p(),!l&&(n!==null?(j||(u=2),clearTimeout(n),f(0)):j||(u=1)))}return f(0),i=setTimeout(()=>{a=!0,C(!0)},r),C}function As(e){e(!1)}/**
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
 */function Ds(e){return e!==void 0}function Ps(e){return typeof e=="object"&&!Array.isArray(e)}function ke(e){return typeof e=="string"||e instanceof String}function $e(e){return Re()&&e instanceof Blob}function Re(){return typeof Blob<"u"}function Me(e,t,r,s){if(s<t)throw ve(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>r)throw ve(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
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
 */function Is(e,t){const r=e>=500&&e<600,n=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return r||n||i}/**
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
 */class Os{constructor(t,r,s,n,i,a,u,c,l,h,f,p=!0){this.url_=t,this.method_=r,this.headers_=s,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const t=(s,n)=>{if(n){s(!1,new te(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=u=>{const c=u.loaded,l=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const u=i.getErrorCode()===W.NO_ERROR,c=i.getStatus();if(!u||Is(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===W.ABORT;s(!1,new te(!1,null,h));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new te(l,i))})},r=(s,n)=>{const i=this.resolve_,a=this.reject_,u=n.connection;if(n.wasSuccessCode)try{const c=this.callback_(u,u.getResponse());Ds(c)?i(c):i()}catch(c){a(c)}else if(u!==null){const c=Ne();c.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,c)):a(c)}else if(n.canceled){const c=this.appDelete_?ot():ys();a(c)}else{const c=bs();a(c)}};this.canceled_?r(!1,new te(!1,null,!0)):this.backoffId_=Ts(t,r,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&As(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class te{constructor(t,r,s){this.wasSuccessCode=t,this.connection=r,this.canceled=!!s}}function Cs(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Ls(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ss(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Us(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Bs(e,t,r,s,n,i,a=!0){const u=at(e.urlParams),c=e.url+u,l=Object.assign({},e.headers);return Ss(l,t),Cs(l,r),Ls(l,i),Us(l,s),new Os(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n,a)}/**
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
 */function Fs(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $s(...e){const t=Fs();if(t!==void 0){const r=new t;for(let s=0;s<e.length;s++)r.append(e[s]);return r.getBlob()}else{if(Re())return new Blob(e);throw new v(w.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ms(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}/**
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
 */function Vs(e){if(typeof atob>"u")throw Ns("base-64");return atob(e)}/**
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
 */const B={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ge{constructor(t,r){this.data=t,this.contentType=r||null}}function Hs(e,t){switch(e){case B.RAW:return new ge(it(t));case B.BASE64:case B.BASE64URL:return new ge(lt(e,t));case B.DATA_URL:return new ge(Gs(t),Ws(t))}throw Ne()}function it(e){const t=[];for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(r<e.length-1&&(e.charCodeAt(r+1)&64512)===56320))t.push(239,191,189);else{const i=s,a=e.charCodeAt(++r);s=65536|(i&1023)<<10|a&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function zs(e){let t;try{t=decodeURIComponent(e)}catch{throw J(B.DATA_URL,"Malformed data URL.")}return it(t)}function lt(e,t){switch(e){case B.BASE64:{const n=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(n||i)throw J(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case B.BASE64URL:{const n=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(n||i)throw J(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=Vs(t)}catch(n){throw n.message.includes("polyfill")?n:J(e,"Invalid character found")}const s=new Uint8Array(r.length);for(let n=0;n<r.length;n++)s[n]=r.charCodeAt(n);return s}class ct{constructor(t){this.base64=!1,this.contentType=null;const r=t.match(/^data:([^,]+)?,/);if(r===null)throw J(B.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=r[1]||null;s!=null&&(this.base64=qs(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function Gs(e){const t=new ct(e);return t.base64?lt(B.BASE64,t.rest):zs(t.rest)}function Ws(e){return new ct(e).contentType}function qs(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class z{constructor(t,r){let s=0,n="";$e(t)?(this.data_=t,s=t.size,n=t.type):t instanceof ArrayBuffer?(r?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(r?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=n}size(){return this.size_}type(){return this.type_}slice(t,r){if($e(this.data_)){const s=this.data_,n=Ms(s,t,r);return n===null?null:new z(n)}else{const s=new Uint8Array(this.data_.buffer,t,r-t);return new z(s,!0)}}static getBlob(...t){if(Re()){const r=t.map(s=>s instanceof z?s.data_:s);return new z($s.apply(null,r))}else{const r=t.map(a=>ke(a)?Hs(B.RAW,a).data:a.data_);let s=0;r.forEach(a=>{s+=a.byteLength});const n=new Uint8Array(s);let i=0;return r.forEach(a=>{for(let u=0;u<a.length;u++)n[i++]=a[u]}),new z(n,!0)}}uploadData(){return this.data_}}/**
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
 */function dt(e){let t;try{t=JSON.parse(e)}catch{return null}return Ps(t)?t:null}/**
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
 */function Ks(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Xs(e,t){const r=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?r:e+"/"+r}function ut(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Zs(e,t){return t}class T{constructor(t,r,s,n){this.server=t,this.local=r||t,this.writable=!!s,this.xform=n||Zs}}let re=null;function Ys(e){return!ke(e)||e.length<2?e:ut(e)}function ft(){if(re)return re;const e=[];e.push(new T("bucket")),e.push(new T("generation")),e.push(new T("metageneration")),e.push(new T("name","fullPath",!0));function t(i,a){return Ys(a)}const r=new T("name");r.xform=t,e.push(r);function s(i,a){return a!==void 0?Number(a):a}const n=new T("size");return n.xform=s,e.push(n),e.push(new T("timeCreated")),e.push(new T("updated")),e.push(new T("md5Hash",null,!0)),e.push(new T("cacheControl",null,!0)),e.push(new T("contentDisposition",null,!0)),e.push(new T("contentEncoding",null,!0)),e.push(new T("contentLanguage",null,!0)),e.push(new T("contentType",null,!0)),e.push(new T("metadata","customMetadata",!0)),re=e,re}function Js(e,t){function r(){const s=e.bucket,n=e.fullPath,i=new O(s,n);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:r})}function Qs(e,t,r){const s={};s.type="file";const n=r.length;for(let i=0;i<n;i++){const a=r[i];s[a.local]=a.xform(s,t[a.server])}return Js(s,e),s}function ht(e,t,r){const s=dt(t);return s===null?null:Qs(e,s,r)}function en(e,t,r,s){const n=dt(t);if(n===null||!ke(n.downloadTokens))return null;const i=n.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(l=>{const h=e.bucket,f=e.fullPath,p="/b/"+a(h)+"/o/"+a(f),m=Te(p,r,s),y=at({alt:"media",token:l});return m+y})[0]}function tn(e,t){const r={},s=t.length;for(let n=0;n<s;n++){const i=t[n];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}class mt{constructor(t,r,s,n){this.url=t,this.method=r,this.handler=s,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pt(e){if(!e)throw Ne()}function rn(e,t){function r(s,n){const i=ht(e,n,t);return pt(i!==null),i}return r}function sn(e,t){function r(s,n){const i=ht(e,n,t);return pt(i!==null),en(i,n,e.host,e._protocol)}return r}function gt(e){function t(r,s){let n;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?n=gs():n=ps():r.getStatus()===402?n=ms(e.bucket):r.getStatus()===403?n=xs(e.path):n=s,n.status=r.getStatus(),n.serverResponse=s.serverResponse,n}return t}function nn(e){const t=gt(e);function r(s,n){let i=t(s,n);return s.getStatus()===404&&(i=hs(e.path)),i.serverResponse=n.serverResponse,i}return r}function on(e,t,r){const s=t.fullServerUrl(),n=Te(s,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,u=new mt(n,i,sn(e,r),a);return u.errorHandler=nn(t),u}function an(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function ln(e,t,r){const s=Object.assign({},r);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=an(null,t)),s}function cn(e,t,r,s,n){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let _="";for(let g=0;g<2;g++)_=_+Math.random().toString().slice(2);return _}const c=u();a["Content-Type"]="multipart/related; boundary="+c;const l=ln(t,s,n),h=tn(l,r),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,p=`\r
--`+c+"--",m=z.getBlob(f,s,p);if(m===null)throw js();const y={name:l.fullPath},C=Te(i,e.host,e._protocol),j="POST",L=e.maxUploadRetryTime,P=new mt(C,j,rn(e,r),L);return P.urlParams=y,P.headers=a,P.body=m.uploadData(),P.errorHandler=gt(t),P}class dn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=W.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=W.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=W.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,r,s,n){if(this.sent_)throw Y("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,t,!0),n!==void 0)for(const i in n)n.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,n[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Y("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Y("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Y("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Y("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class un extends dn{initXhr(){this.xhr_.responseType="text"}}function xt(){return new un}/**
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
 */class q{constructor(t,r){this._service=t,r instanceof O?this._location=r:this._location=O.makeFromUrl(r,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,r){return new q(t,r)}get root(){const t=new O(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ut(this._location.path)}get storage(){return this._service}get parent(){const t=Ks(this._location.path);if(t===null)return null;const r=new O(this._location.bucket,t);return new q(this._service,r)}_throwIfRoot(t){if(this._location.path==="")throw ks(t)}}function fn(e,t,r){e._throwIfRoot("uploadBytes");const s=cn(e.storage,e._location,ft(),new z(t,!0),r);return e.storage.makeRequestWithTokens(s,xt).then(n=>({metadata:n,ref:e}))}function hn(e){e._throwIfRoot("getDownloadURL");const t=on(e.storage,e._location,ft());return e.storage.makeRequestWithTokens(t,xt).then(r=>{if(r===null)throw Es();return r})}function mn(e,t){const r=Xs(e._location.path,t),s=new O(e._location.bucket,r);return new q(e.storage,s)}/**
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
 */function pn(e){return/^[A-Za-z]+:\/\//.test(e)}function gn(e,t){return new q(e,t)}function bt(e,t){if(e instanceof Ae){const r=e;if(r._bucket==null)throw vs();const s=new q(r,r._bucket);return t!=null?bt(s,t):s}else return t!==void 0?mn(e,t):e}function xn(e,t){if(t&&pn(t)){if(e instanceof Ae)return gn(e,t);throw ve("To use ref(service, url), the first argument must be a Storage instance.")}else return bt(e,t)}function Ve(e,t){const r=t?.[nt];return r==null?null:O.makeFromBucketSpec(r,e)}function bn(e,t,r,s={}){e.host=`${t}:${r}`,e._protocol="http";const{mockUserToken:n}=s;n&&(e._overrideAuthToken=typeof n=="string"?n:Ht(n,e.app.options.projectId))}class Ae{constructor(t,r,s,n,i){this.app=t,this._authProvider=r,this._appCheckProvider=s,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=st,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=us,this._maxUploadRetryTime=fs,this._requests=new Set,n!=null?this._bucket=O.makeFromBucketSpec(n,this._host):this._bucket=Ve(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=Ve(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Me("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Me("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const r=await t.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new q(this,t)}_makeRequest(t,r,s,n,i=!0){if(this._deleted)return new Rs(ot());{const a=Bs(t,this._appId,s,n,r,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,r){const[s,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,r,s,n).getPromise()}}const He="@firebase/storage",ze="0.13.2";/**
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
 */const yt="storage";function no(e,t,r){return e=ie(e),fn(e,t,r)}function oo(e){return e=ie(e),hn(e)}function ao(e,t){return e=ie(e),xn(e,t)}function yn(e=$t(),t){e=ie(e);const s=Mt(e,yt).getImmediate({identifier:t}),n=Vt("storage");return n&&_n(s,...n),s}function _n(e,t,r,s={}){bn(e,t,r,s)}function wn(e,{instanceIdentifier:t}){const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),n=e.getProvider("app-check-internal");return new Ae(r,s,n,t,Bt)}function vn(){St(new Ut(yt,wn,"PUBLIC").setMultipleInstances(!0)),Pe(He,ze,""),Pe(He,ze,"esm2017")}vn();const oe={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"};console.log("Firebase config loaded:",{hasApiKey:!!oe.apiKey,hasAuthDomain:!!oe.authDomain,projectId:oe.projectId,usingEnvVars:!1});const De=zt(oe),X=Gt(De),se=Wt(De),io=yn(De),_t=d.createContext();function wt(){return d.useContext(_t)}function jn({children:e}){const[t,r]=d.useState(null),[s,n]=d.useState(!0);d.useEffect(()=>{let l,h;try{l=qt(X,async f=>{try{if(f)try{const p=await Kt(fe(se,"users",f.uid)),m=p.exists()?p.data():null;r({uid:f.uid,email:f.email,displayName:f.displayName,photoURL:f.photoURL,...m})}catch(p){console.log("⚠️ Firestore not available, using basic user data:",p.message),r({uid:f.uid,email:f.email,displayName:f.displayName,photoURL:f.photoURL})}else r(null)}catch(p){console.error("Error in auth state change:",p),r(null)}finally{n(!1)}}),h=setTimeout(()=>{console.log("Firebase auth timeout - setting loading to false"),n(!1)},5e3)}catch(f){console.error("Error setting up auth listener:",f),n(!1)}return()=>{l&&l(),h&&clearTimeout(h)}},[]);const c={user:t,loading:s,signInWithGoogle:async()=>{try{const l=new Jt;l.addScope("email"),l.addScope("profile");const h=await Ie(X,l);try{await Oe(fe(se,"users",h.user.uid),{uid:h.user.uid,email:h.user.email,displayName:h.user.displayName,photoURL:h.user.photoURL,createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(f){console.warn("Failed to save user data to Firestore:",f)}console.log("Successfully signed in!")}catch(l){throw console.error("Failed to sign in:",l.message),l}},signInWithGitHub:async()=>{try{console.log("Using Firebase GitHub authentication");const l=new Zt;l.addScope("user:email");const h=await Ie(X,l);try{await Oe(fe(se,"users",h.user.uid),{uid:h.user.uid,email:h.user.email,displayName:h.user.displayName||h.user.email?.split("@")[0]||"GitHub User",photoURL:h.user.photoURL,provider:"github",createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(f){console.warn("Failed to save user data to Firestore:",f)}console.log("Successfully signed in with GitHub!")}catch(l){if(console.error("GitHub authentication error:",l.message),l.code==="auth/account-exists-with-different-credential"){const h=l.customData?.email;if(h)try{const f=await Yt(X,h);throw console.log("Available sign-in methods for",h,":",f),f&&f.length>0?f.includes("google.com")?new Error(`An account with ${h} already exists using Google. Please sign in with Google instead, then you can link your GitHub account.`):f.includes("password")?new Error(`An account with ${h} already exists using email/password. Please sign in with your existing method instead.`):new Error(`An account with ${h} already exists. Please sign in with your existing method instead.`):new Error(`An account with ${h} already exists. Please try signing in with Google first, then you can link your GitHub account.`)}catch(f){throw console.error("Failed to check sign-in methods:",f.message),new Error(`An account with ${h} already exists. Please sign in with your existing method instead.`)}else throw new Error("An account with this email already exists. Please sign in with your existing method instead.")}else throw l.code==="auth/internal-error"?(console.error("GitHub authentication internal error:",l.message),new Error("GitHub authentication is not properly configured. Please check Firebase Console settings.")):(console.error("Failed to sign in with GitHub:",l.message),l)}},logout:async()=>{try{await Xt(X),console.log("Successfully signed out!")}catch(l){console.error("Failed to sign out:",l.message)}},auth:X,db:se};return o.jsx(_t.Provider,{value:c,children:s?o.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),o.jsx("p",{className:"text-muted-foreground",children:"Loading DreamBuild..."})]})}):e})}const vt=d.createContext();function lo(){return d.useContext(vt)}function En({children:e}){const{user:t,db:r}=wt(),[s,n]=d.useState({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),[i,a]=d.useState([]),[u,c]=d.useState(!1),l=d.useCallback(g=>{n(x=>({...x,activeFile:g,lastModified:new Date}))},[]),h=d.useCallback((g,x)=>{n(N=>({...N,files:{...N.files,[g]:x},lastModified:new Date}))},[]),f=d.useCallback(g=>{n(x=>{const N={...x,config:{...x.config,...g},lastModified:new Date};return g.name&&(N.name=g.name),N})},[]),p=d.useCallback(async()=>{if(t){c(!0);try{const{collection:g,query:x,where:N,getDocs:I,orderBy:R}=await b(async()=>{const{collection:V,query:ue,where:jt,getDocs:Et,orderBy:Nt}=await import("./firebase-C6E9X45-.js").then(kt=>kt.B);return{collection:V,query:ue,where:jt,getDocs:Et,orderBy:Nt}},[]),A=g(r,"projects"),F=x(A,N("userId","==",t.uid),R("lastModified","desc")),Z=(await I(F)).docs.map(V=>({id:V.id,...V.data()}));a(Z)}catch(g){console.error("Failed to load projects:",g),D.error("Failed to load projects: "+g.message)}finally{c(!1)}}},[t,r]);d.useEffect(()=>{t?p():a([])},[t,p]);const m=d.useCallback(async(g=null)=>{if(!t){D.error("Please sign in to save projects");return}c(!0);try{const x={...s,name:g||s.name,userId:t.uid,lastModified:new Date},{doc:N,setDoc:I,collection:R}=await b(async()=>{const{doc:F,setDoc:K,collection:Z}=await import("./firebase-C6E9X45-.js").then(V=>V.B);return{doc:F,setDoc:K,collection:Z}},[]),A=N(R(r,"projects"));await I(A,{...x,id:A.id,createdAt:s.id?void 0:new Date}),n(F=>({...F,id:A.id})),D.success("Project saved successfully!"),await p()}catch(x){D.error("Failed to save project: "+x.message)}finally{c(!1)}},[s,t,r,p]),y=d.useCallback(async g=>{if(!t){D.error("Please sign in to save projects");return}c(!0);try{const x={...g,userId:t.uid,lastModified:new Date,createdAt:g.createdAt||new Date},{doc:N,setDoc:I,collection:R}=await b(async()=>{const{doc:K,setDoc:Z,collection:V}=await import("./firebase-C6E9X45-.js").then(ue=>ue.B);return{doc:K,setDoc:Z,collection:V}},[]),A=N(R(r,"projects")),F={...x,id:A.id};await I(A,F),D.success(`Project "${g.name}" saved successfully!`),await p()}catch(x){console.error("Failed to save external project:",x),D.error("Failed to save project")}finally{c(!1)}},[t,r,p]),C=d.useCallback(async g=>{if(t){c(!0);try{const{doc:x,getDoc:N}=await b(async()=>{const{doc:A,getDoc:F}=await import("./firebase-C6E9X45-.js").then(K=>K.B);return{doc:A,getDoc:F}},[]),I=x(r,"projects",g),R=await N(I);if(R.exists()){const A={id:R.id,...R.data()};n(A),D.success("Project loaded successfully!")}else D.error("Project not found")}catch(x){D.error("Failed to load project: "+x.message)}finally{c(!1)}}},[t,r]),j=d.useCallback(async g=>{if(t){c(!0);try{const{doc:x,deleteDoc:N}=await b(async()=>{const{doc:I,deleteDoc:R}=await import("./firebase-C6E9X45-.js").then(A=>A.B);return{doc:I,deleteDoc:R}},[]);await N(x(r,"projects",g)),a(I=>I.filter(R=>R.id!==g)),D.success("Project deleted successfully!")}catch(x){D.error("Failed to delete project: "+x.message)}finally{c(!1)}}},[t,r]),L=d.useCallback(()=>{n({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),D.success("New project created!")},[]),P=d.useCallback(g=>{n(x=>({...x,files:{...x.files,...g},lastModified:new Date})),D.success(`${Object.keys(g).length} files added to project!`)},[]),_=d.useMemo(()=>({currentProject:s,projects:i,isLoading:u,switchFile:l,updateFile:h,updateConfig:f,saveProject:m,saveExternalProject:y,loadProjects:p,loadProject:C,deleteProject:j,createNewProject:L,addFilesToProject:P}),[s,i,u,l,h,f,m,y,p,C,j,L,P]);return o.jsx(vt.Provider,{value:_,children:e})}class xe extends be.Component{constructor(t){super(t),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,r){this.setState({error:t,errorInfo:r}),console.error("Application Error:",{error:t.message,stack:t.stack,componentStack:r.componentStack})}handleRetry=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};render(){return this.state.hasError?o.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center p-4",children:o.jsxs("div",{className:"max-w-md w-full bg-card rounded-2xl shadow-lg border border-border p-8 text-center",children:[o.jsx("div",{className:"w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6",children:o.jsx(Qt,{className:"h-8 w-8 text-red-600 dark:text-red-400"})}),o.jsx("h1",{className:"text-2xl font-bold text-foreground mb-2",children:"Oops! Something went wrong"}),o.jsx("p",{className:"text-muted-foreground mb-6",children:"We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists."}),!1,o.jsxs("div",{className:"flex gap-3 justify-center",children:[o.jsxs("button",{onClick:this.handleRetry,className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",children:[o.jsx(er,{className:"h-4 w-4"}),"Try Again"]}),o.jsxs(S,{to:"/",className:"flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors",children:[o.jsx(tr,{className:"h-4 w-4"}),"Go Home"]})]})]})}):this.props.children}}const Nn=()=>{const{theme:e,toggleTheme:t}=cs(),{user:r,logout:s}=wt(),[n,i]=d.useState(!1),[a,u]=d.useState(!1),[c,l]=d.useState(!1),h=je();be.useEffect(()=>{const m=()=>{u(window.innerWidth>=768)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),be.useEffect(()=>{const m=y=>{c&&!y.target.closest(".user-menu")&&l(!1)};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[c]);const f=[{name:"Home",href:"/",icon:he},{name:"AI Builder",href:"/ai-builder",icon:rr},{name:"Templates",href:"/templates",icon:ye},{name:"Gallery",href:"/gallery",icon:sr},{name:"Education",href:"/education",icon:nr},{name:"Projects",href:"/projects",icon:me},{name:"Dashboard",href:"/dashboard",icon:or}],p=m=>h.pathname===m;return o.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm",children:o.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"flex items-center justify-between h-16",children:[o.jsxs(S,{to:"/",className:"flex items-center gap-3 group",children:[o.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg",children:o.jsx(ye,{className:"h-6 w-6 text-primary-foreground"})}),o.jsxs("div",{className:"flex flex-col",children:[o.jsx("span",{className:"text-xl font-bold text-high-contrast",children:"DreamBuild"}),o.jsx("span",{className:"text-xs text-muted-foreground -mt-1",children:"AI Development Platform"})]})]}),o.jsx("div",{className:"hidden md:flex items-center gap-1",children:f.map(m=>{const y=m.icon;return o.jsxs(S,{to:m.href,className:`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${p(m.href)?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[o.jsx(y,{className:"h-4 w-4"}),m.name]},m.name)})}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:t,className:"p-2 rounded-lg hover:bg-muted transition-colors",title:`Switch to ${e==="light"?"dark":"light"} mode`,children:e==="light"?o.jsx(ar,{className:"h-4 w-4 text-muted-foreground"}):o.jsx(ir,{className:"h-4 w-4 text-muted-foreground"})}),r?o.jsxs("div",{className:"relative user-menu",children:[o.jsxs("button",{onClick:()=>l(!c),className:"flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors",children:[o.jsx("div",{className:"w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center",children:o.jsx("span",{className:"text-sm font-semibold text-primary",children:(r.displayName||r.email||"U").charAt(0).toUpperCase()})}),o.jsx("span",{className:"hidden sm:inline text-sm font-medium text-foreground",children:r.displayName||r.email})]}),c&&o.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-[60]",children:[o.jsxs("div",{className:"p-3 border-b border-border",children:[o.jsx("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:r.email})]}),o.jsxs("div",{className:"p-1",children:[o.jsxs(S,{to:"/dashboard",onClick:()=>l(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[o.jsx(me,{className:"h-4 w-4"}),"Dashboard"]}),o.jsxs(S,{to:"/settings",onClick:()=>l(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[o.jsx(Ce,{className:"h-4 w-4"}),"Settings"]}),o.jsx("hr",{className:"my-1"}),o.jsxs("button",{onClick:()=>{s(),l(!1)},className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors",children:[o.jsx(Le,{className:"h-4 w-4"}),"Sign Out"]})]})]})]}):o.jsxs(S,{to:"/login",className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[o.jsx(he,{className:"h-4 w-4"}),"Sign In"]}),!a&&o.jsx("button",{onClick:()=>i(!n),className:"p-2 rounded-lg hover:bg-muted transition-colors ml-2",children:n?o.jsx(lr,{className:"h-4 w-4"}):o.jsx(cr,{className:"h-4 w-4"})})]})]}),!a&&n&&o.jsx("div",{className:"border-t border-border bg-background",children:o.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[f.map(m=>{const y=m.icon;return o.jsxs(S,{to:m.href,onClick:()=>i(!1),className:`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border ${p(m.href)?"bg-primary text-primary-foreground border-primary shadow-md":"bg-card text-foreground border-border hover:bg-muted hover:border-primary/30 shadow-sm"}`,children:[o.jsx(y,{className:"h-5 w-5"}),m.name]},m.name)}),r?o.jsxs("div",{className:"mt-4 space-y-2",children:[o.jsxs("div",{className:"px-4 py-2 border-b border-border",children:[o.jsx("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:r.email})]}),o.jsxs(S,{to:"/dashboard",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[o.jsx(me,{className:"h-5 w-5"}),"Dashboard"]}),o.jsxs(S,{to:"/settings",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[o.jsx(Ce,{className:"h-5 w-5"}),"Settings"]}),o.jsxs("button",{onClick:()=>{s(),i(!1)},className:"w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg",children:[o.jsx(Le,{className:"h-5 w-5"}),"Sign Out"]})]}):o.jsxs(S,{to:"/login",onClick:()=>i(!1),className:"flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg text-base font-semibold",children:[o.jsx(he,{className:"h-5 w-5"}),"Sign In"]})]})})]})})},kn=()=>{const[e,t]=d.useState(""),[r,s]=d.useState(!1),n=i=>{i.preventDefault(),e&&(s(!0),t(""),setTimeout(()=>s(!1),3e3))};return o.jsx("footer",{className:"bg-background border-t border-border",children:o.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:o.jsx(ye,{className:"h-5 w-5 text-primary-foreground"})}),o.jsx("span",{className:"text-xl font-bold text-foreground",children:"DreamBuild"})]}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"AI-powered development platform for modern developers."}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"GitHub",children:o.jsx(dr,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),o.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Twitter",children:o.jsx(ur,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),o.jsx("a",{href:"mailto:contact@dreambuild.ai",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Email",children:o.jsx(Se,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Stay Updated"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Get the latest updates and features."}),o.jsxs("form",{onSubmit:n,className:"space-y-3",children:[o.jsxs("div",{className:"flex gap-2",children:[o.jsx("input",{type:"email",value:e,onChange:i=>t(i.target.value),placeholder:"Enter your email",className:"flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",required:!0}),o.jsx("button",{type:"submit",disabled:r,className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:r?o.jsx(Se,{className:"h-4 w-4"}):o.jsx(fr,{className:"h-4 w-4"})})]}),r&&o.jsx("p",{className:"text-sm text-green-600",children:"Thanks for subscribing!"})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-semibold text-foreground",children:"Quick Links"}),o.jsxs("ul",{className:"space-y-2 text-sm",children:[o.jsx("li",{children:o.jsx("a",{href:"/ai-builder",className:"text-muted-foreground hover:text-foreground transition-colors",children:"AI Builder"})}),o.jsx("li",{children:o.jsx("a",{href:"/templates",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Templates"})}),o.jsx("li",{children:o.jsx("a",{href:"/documentation",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Documentation"})}),o.jsx("li",{children:o.jsx("a",{href:"/support",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Support"})})]})]})]}),o.jsx("div",{className:"border-t border-border pt-8 mt-8",children:o.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[o.jsx("div",{className:"text-sm text-muted-foreground",children:o.jsx("span",{children:"© 2024 Bradley Virtual Solutions, LLC"})}),o.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[o.jsx("a",{href:"/privacy",className:"hover:text-foreground transition-colors",children:"Privacy"}),o.jsx("a",{href:"/terms",className:"hover:text-foreground transition-colors",children:"Terms"}),o.jsx("a",{href:"/contact",className:"hover:text-foreground transition-colors",children:"Contact"})]})]})})]})})},Rn=d.lazy(()=>b(()=>import("./Home-CABQGFGz.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),Tn=d.lazy(()=>b(()=>import("./AIBuilder-BjUU8e7r.js"),__vite__mapDeps([7,1,2,4,5,6,3,8,9,10]))),An=d.lazy(()=>b(()=>import("./Templates-CRn8qHT2.js"),__vite__mapDeps([11,4,5,1,3,2,6]))),Dn=d.lazy(()=>b(()=>import("./Dashboard-DHRBJPDu.js"),__vite__mapDeps([12,1,2,3,4,5,6]))),Pn=d.lazy(()=>b(()=>import("./Login-RFKXd9Ng.js"),__vite__mapDeps([13,1,2,3,4,5,6]))),In=d.lazy(()=>b(()=>import("./Signup-q_PSYwWE.js"),__vite__mapDeps([14,1,2,3,4,5,6]))),On=d.lazy(()=>b(()=>import("./Projects-DqfatWXf.js"),__vite__mapDeps([15,1,3,4,5,2,6]))),Cn=d.lazy(()=>b(()=>import("./Settings-2VKoquH-.js"),__vite__mapDeps([16,1,3,4,5,2,6]))),Ln=d.lazy(()=>b(()=>import("./Documentation-DIUxRMUK.js"),__vite__mapDeps([17,1,3,4,5,2,6]))),Sn=d.lazy(()=>b(()=>import("./Examples-fusdA4SI.js"),__vite__mapDeps([18,1,3,4,5,2,6]))),Un=d.lazy(()=>b(()=>import("./Community-CSArQ5eA.js"),__vite__mapDeps([19,1,3,4,5,2,6]))),Bn=d.lazy(()=>b(()=>import("./About-Cq3lWUnc.js"),__vite__mapDeps([20,1,3,4,5,2,6]))),Fn=d.lazy(()=>b(()=>import("./Blog-DVJYB3sZ.js"),__vite__mapDeps([21,1,3,4,5,2,6]))),$n=d.lazy(()=>b(()=>import("./Contact-BFCR29nx.js"),__vite__mapDeps([22,1,3,4,5,2,6]))),Mn=d.lazy(()=>b(()=>import("./Privacy-B7vxUZTN.js"),__vite__mapDeps([23,1,3,4,5,2,6]))),Vn=d.lazy(()=>b(()=>import("./Terms-CXT_7LUu.js"),__vite__mapDeps([24,1,3,4,5,2,6]))),Hn=d.lazy(()=>b(()=>import("./Education-Cv1y7RN8.js"),__vite__mapDeps([25,1,3,4,5,2,6]))),zn=d.lazy(()=>b(()=>import("./AppHost-DLUnutf9.js"),__vite__mapDeps([26,1,8,6,2,4,5,3]))),Gn=d.lazy(()=>b(()=>import("./AppGallery-CSRQgPxh.js"),__vite__mapDeps([27,1,8,6,3,4,5,2]))),Wn=d.lazy(()=>b(()=>import("./DeleteApps-D9Sckzw9.js"),__vite__mapDeps([28,1,6,4,5,2,3]))),qn=()=>o.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),o.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})});function Kn(){const e=je();return["/ai-builder"].includes(e.pathname)?null:o.jsx(kn,{})}function Xn({children:e}){const t=je();return["/ai-builder","/dashboard","/projects"].includes(t.pathname)?o.jsx("main",{children:e}):o.jsx("main",{className:"pt-16",children:e})}function Zn(){return o.jsx(xe,{children:o.jsx(ds,{children:o.jsx(jn,{children:o.jsx(En,{children:o.jsx(Ot,{children:o.jsxs("div",{className:"min-h-screen bg-background",children:[o.jsx(xe,{children:o.jsx(Nn,{})}),o.jsx(Xn,{children:o.jsx(xe,{children:o.jsx(d.Suspense,{fallback:o.jsx(qn,{}),children:o.jsxs(Ct,{children:[o.jsx(E,{path:"/",element:o.jsx(Rn,{})}),o.jsx(E,{path:"/app",element:o.jsx(Lt,{to:"/ai-builder",replace:!0})}),o.jsx(E,{path:"/ai-builder",element:o.jsx(Tn,{})}),o.jsx(E,{path:"/templates",element:o.jsx(An,{})}),o.jsx(E,{path:"/dashboard",element:o.jsx(Dn,{})}),o.jsx(E,{path:"/login",element:o.jsx(Pn,{})}),o.jsx(E,{path:"/signup",element:o.jsx(In,{})}),o.jsx(E,{path:"/projects",element:o.jsx(On,{})}),o.jsx(E,{path:"/settings",element:o.jsx(Cn,{})}),o.jsx(E,{path:"/documentation",element:o.jsx(Ln,{})}),o.jsx(E,{path:"/examples",element:o.jsx(Sn,{})}),o.jsx(E,{path:"/community",element:o.jsx(Un,{})}),o.jsx(E,{path:"/about",element:o.jsx(Bn,{})}),o.jsx(E,{path:"/blog",element:o.jsx(Fn,{})}),o.jsx(E,{path:"/contact",element:o.jsx($n,{})}),o.jsx(E,{path:"/privacy",element:o.jsx(Mn,{})}),o.jsx(E,{path:"/terms",element:o.jsx(Vn,{})}),o.jsx(E,{path:"/education",element:o.jsx(Hn,{})}),o.jsx(E,{path:"/apps/:appId",element:o.jsx(zn,{})}),o.jsx(E,{path:"/gallery",element:o.jsx(Gn,{})}),o.jsx(E,{path:"/delete-apps",element:o.jsx(Wn,{})})]})})})}),o.jsx(Kn,{}),o.jsx(ls,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--card)",color:"var(--card-foreground)",border:"1px solid var(--border)"}}})]})})})})})})}Ke(document.getElementById("root")).render(o.jsx(d.StrictMode,{children:o.jsx(Zn,{})}));export{lo as a,cs as b,yn as c,se as d,wt as e,oo as g,o as j,k as n,ao as r,io as s,no as u,D as z};
