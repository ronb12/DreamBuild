import{initializeApp as Jr}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";import{getAuth as Qr,GoogleAuthProvider as en,GithubAuthProvider as tn,signInWithPopup as rn}from"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";import{r as f,b as nn,R as Ze}from"./react-vendor-84e09ada.js";import{_ as A}from"./monaco-editor-bb996daf.js";import{L as Z,u as rt,B as on,R as an,a as I,N as sn}from"./router-vendor-e414a864.js";import{g as Ce,_ as ln,a as cn,b as un,c as dn,C as fn,r as Ct,d as hn,S as mn,F as pn,i as gn,e as bn,f as yn,P as _n,o as vn,h as wn,j as We,G as xn,s as St,m as jt,k as En,l as Rn,n as Tn}from"./firebase-24a1fa17.js";import{A as kn,R as Nn,H as Pn,S as Je,M as An,a as Dn,D as Ge,U as Lt,L as Ut,b as Ye,X as On,c as In,C as Cn,d as Sn,G as jn,B as Ln,e as Un,f as Fn,g as Bn,T as Mn,h as Ft,i as $n}from"./ui-vendor-4e0271b3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}})();const Vn={apiKey:"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:"dreambuild-2024-app.firebaseapp.com",projectId:"dreambuild-2024-app",storageBucket:"dreambuild-2024-app.firebasestorage.app",messagingSenderId:"780467658601",appId:"1:780467658601:web:833a9373c15fa3be0be7f8"},Kt=Jr(Vn),zn=Qr(Kt);window.firebase={auth:()=>zn,GoogleAuthProvider:en,GithubAuthProvider:tn,signInWithPopup:rn};window.firebaseApp=Kt;console.log("Firebase loaded globally with providers:",!!window.firebase);var qt={exports:{}},Ae={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var e=f,t=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),N=Symbol.iterator,G="@@iterator";function O(o){if(o===null||typeof o!="object")return null;var c=N&&o[N]||o[G];return typeof c=="function"?c:null}var B=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function k(o){{for(var c=arguments.length,g=new Array(c>1?c-1:0),v=1;v<c;v++)g[v-1]=arguments[v];D("error",o,g)}}function D(o,c,g){{var v=B.ReactDebugCurrentFrame,T=v.getStackAddendum();T!==""&&(c+="%s",g=g.concat([T]));var P=g.map(function(R){return String(R)});P.unshift("Warning: "+c),Function.prototype.apply.call(console[o],console,P)}}var _=!1,E=!1,j=!1,$=!1,M=!1,V;V=Symbol.for("react.module.reference");function ee(o){return!!(typeof o=="string"||typeof o=="function"||o===n||o===l||M||o===a||o===u||o===p||$||o===y||_||E||j||typeof o=="object"&&o!==null&&(o.$$typeof===b||o.$$typeof===m||o.$$typeof===s||o.$$typeof===h||o.$$typeof===d||o.$$typeof===V||o.getModuleId!==void 0))}function _e(o,c,g){var v=o.displayName;if(v)return v;var T=c.displayName||c.name||"";return T!==""?g+"("+T+")":g}function ve(o){return o.displayName||"Context"}function z(o){if(o==null)return null;if(typeof o.tag=="number"&&k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case n:return"Fragment";case r:return"Portal";case l:return"Profiler";case a:return"StrictMode";case u:return"Suspense";case p:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case h:var c=o;return ve(c)+".Consumer";case s:var g=o;return ve(g._context)+".Provider";case d:return _e(o,o.render,"ForwardRef");case m:var v=o.displayName||null;return v!==null?v:z(o.type)||"Memo";case b:{var T=o,P=T._payload,R=T._init;try{return z(R(P))}catch{return null}}}return null}var se=Object.assign,he=0,dt,ft,ht,mt,pt,gt,bt;function yt(){}yt.__reactDisabledLog=!0;function Tr(){{if(he===0){dt=console.log,ft=console.info,ht=console.warn,mt=console.error,pt=console.group,gt=console.groupCollapsed,bt=console.groupEnd;var o={configurable:!0,enumerable:!0,value:yt,writable:!0};Object.defineProperties(console,{info:o,log:o,warn:o,error:o,group:o,groupCollapsed:o,groupEnd:o})}he++}}function kr(){{if(he--,he===0){var o={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:se({},o,{value:dt}),info:se({},o,{value:ft}),warn:se({},o,{value:ht}),error:se({},o,{value:mt}),group:se({},o,{value:pt}),groupCollapsed:se({},o,{value:gt}),groupEnd:se({},o,{value:bt})})}he<0&&k("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Le=B.ReactCurrentDispatcher,Ue;function we(o,c,g){{if(Ue===void 0)try{throw Error()}catch(T){var v=T.stack.trim().match(/\n( *(at )?)/);Ue=v&&v[1]||""}return`
`+Ue+o}}var Fe=!1,xe;{var Nr=typeof WeakMap=="function"?WeakMap:Map;xe=new Nr}function _t(o,c){if(!o||Fe)return"";{var g=xe.get(o);if(g!==void 0)return g}var v;Fe=!0;var T=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var P;P=Le.current,Le.current=null,Tr();try{if(c){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(Y){v=Y}Reflect.construct(o,[],R)}else{try{R.call()}catch(Y){v=Y}o.call(R.prototype)}}else{try{throw Error()}catch(Y){v=Y}o()}}catch(Y){if(Y&&v&&typeof Y.stack=="string"){for(var x=Y.stack.split(`
`),H=v.stack.split(`
`),L=x.length-1,U=H.length-1;L>=1&&U>=0&&x[L]!==H[U];)U--;for(;L>=1&&U>=0;L--,U--)if(x[L]!==H[U]){if(L!==1||U!==1)do if(L--,U--,U<0||x[L]!==H[U]){var X=`
`+x[L].replace(" at new "," at ");return o.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",o.displayName)),typeof o=="function"&&xe.set(o,X),X}while(L>=1&&U>=0);break}}}finally{Fe=!1,Le.current=P,kr(),Error.prepareStackTrace=T}var de=o?o.displayName||o.name:"",ie=de?we(de):"";return typeof o=="function"&&xe.set(o,ie),ie}function Pr(o,c,g){return _t(o,!1)}function Ar(o){var c=o.prototype;return!!(c&&c.isReactComponent)}function Ee(o,c,g){if(o==null)return"";if(typeof o=="function")return _t(o,Ar(o));if(typeof o=="string")return we(o);switch(o){case u:return we("Suspense");case p:return we("SuspenseList")}if(typeof o=="object")switch(o.$$typeof){case d:return Pr(o.render);case m:return Ee(o.type,c,g);case b:{var v=o,T=v._payload,P=v._init;try{return Ee(P(T),c,g)}catch{}}}return""}var me=Object.prototype.hasOwnProperty,vt={},wt=B.ReactDebugCurrentFrame;function Re(o){if(o){var c=o._owner,g=Ee(o.type,o._source,c?c.type:null);wt.setExtraStackFrame(g)}else wt.setExtraStackFrame(null)}function Dr(o,c,g,v,T){{var P=Function.call.bind(me);for(var R in o)if(P(o,R)){var x=void 0;try{if(typeof o[R]!="function"){var H=Error((v||"React class")+": "+g+" type `"+R+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[R]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw H.name="Invariant Violation",H}x=o[R](c,R,v,g,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(L){x=L}x&&!(x instanceof Error)&&(Re(T),k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",v||"React class",g,R,typeof x),Re(null)),x instanceof Error&&!(x.message in vt)&&(vt[x.message]=!0,Re(T),k("Failed %s type: %s",g,x.message),Re(null))}}}var Or=Array.isArray;function Be(o){return Or(o)}function Ir(o){{var c=typeof Symbol=="function"&&Symbol.toStringTag,g=c&&o[Symbol.toStringTag]||o.constructor.name||"Object";return g}}function Cr(o){try{return xt(o),!1}catch{return!0}}function xt(o){return""+o}function Et(o){if(Cr(o))return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ir(o)),xt(o)}var pe=B.ReactCurrentOwner,Sr={key:!0,ref:!0,__self:!0,__source:!0},Rt,Tt,Me;Me={};function jr(o){if(me.call(o,"ref")){var c=Object.getOwnPropertyDescriptor(o,"ref").get;if(c&&c.isReactWarning)return!1}return o.ref!==void 0}function Lr(o){if(me.call(o,"key")){var c=Object.getOwnPropertyDescriptor(o,"key").get;if(c&&c.isReactWarning)return!1}return o.key!==void 0}function Ur(o,c){if(typeof o.ref=="string"&&pe.current&&c&&pe.current.stateNode!==c){var g=z(pe.current.type);Me[g]||(k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',z(pe.current.type),o.ref),Me[g]=!0)}}function Fr(o,c){{var g=function(){Rt||(Rt=!0,k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",c))};g.isReactWarning=!0,Object.defineProperty(o,"key",{get:g,configurable:!0})}}function Br(o,c){{var g=function(){Tt||(Tt=!0,k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",c))};g.isReactWarning=!0,Object.defineProperty(o,"ref",{get:g,configurable:!0})}}var Mr=function(o,c,g,v,T,P,R){var x={$$typeof:t,type:o,key:c,ref:g,props:R,_owner:P};return x._store={},Object.defineProperty(x._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(x,"_self",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.defineProperty(x,"_source",{configurable:!1,enumerable:!1,writable:!1,value:T}),Object.freeze&&(Object.freeze(x.props),Object.freeze(x)),x};function $r(o,c,g,v,T){{var P,R={},x=null,H=null;g!==void 0&&(Et(g),x=""+g),Lr(c)&&(Et(c.key),x=""+c.key),jr(c)&&(H=c.ref,Ur(c,T));for(P in c)me.call(c,P)&&!Sr.hasOwnProperty(P)&&(R[P]=c[P]);if(o&&o.defaultProps){var L=o.defaultProps;for(P in L)R[P]===void 0&&(R[P]=L[P])}if(x||H){var U=typeof o=="function"?o.displayName||o.name||"Unknown":o;x&&Fr(R,U),H&&Br(R,U)}return Mr(o,x,H,T,v,pe.current,R)}}var $e=B.ReactCurrentOwner,kt=B.ReactDebugCurrentFrame;function ue(o){if(o){var c=o._owner,g=Ee(o.type,o._source,c?c.type:null);kt.setExtraStackFrame(g)}else kt.setExtraStackFrame(null)}var Ve;Ve=!1;function ze(o){return typeof o=="object"&&o!==null&&o.$$typeof===t}function Nt(){{if($e.current){var o=z($e.current.type);if(o)return`

Check the render method of \``+o+"`."}return""}}function Vr(o){{if(o!==void 0){var c=o.fileName.replace(/^.*[\\\/]/,""),g=o.lineNumber;return`

Check your code at `+c+":"+g+"."}return""}}var Pt={};function zr(o){{var c=Nt();if(!c){var g=typeof o=="string"?o:o.displayName||o.name;g&&(c=`

Check the top-level render call using <`+g+">.")}return c}}function At(o,c){{if(!o._store||o._store.validated||o.key!=null)return;o._store.validated=!0;var g=zr(c);if(Pt[g])return;Pt[g]=!0;var v="";o&&o._owner&&o._owner!==$e.current&&(v=" It was passed a child from "+z(o._owner.type)+"."),ue(o),k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',g,v),ue(null)}}function Dt(o,c){{if(typeof o!="object")return;if(Be(o))for(var g=0;g<o.length;g++){var v=o[g];ze(v)&&At(v,c)}else if(ze(o))o._store&&(o._store.validated=!0);else if(o){var T=O(o);if(typeof T=="function"&&T!==o.entries)for(var P=T.call(o),R;!(R=P.next()).done;)ze(R.value)&&At(R.value,c)}}}function Hr(o){{var c=o.type;if(c==null||typeof c=="string")return;var g;if(typeof c=="function")g=c.propTypes;else if(typeof c=="object"&&(c.$$typeof===d||c.$$typeof===m))g=c.propTypes;else return;if(g){var v=z(c);Dr(g,o.props,"prop",v,o)}else if(c.PropTypes!==void 0&&!Ve){Ve=!0;var T=z(c);k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",T||"Unknown")}typeof c.getDefaultProps=="function"&&!c.getDefaultProps.isReactClassApproved&&k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Wr(o){{for(var c=Object.keys(o.props),g=0;g<c.length;g++){var v=c[g];if(v!=="children"&&v!=="key"){ue(o),k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",v),ue(null);break}}o.ref!==null&&(ue(o),k("Invalid attribute `ref` supplied to `React.Fragment`."),ue(null))}}var Ot={};function It(o,c,g,v,T,P){{var R=ee(o);if(!R){var x="";(o===void 0||typeof o=="object"&&o!==null&&Object.keys(o).length===0)&&(x+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var H=Vr(T);H?x+=H:x+=Nt();var L;o===null?L="null":Be(o)?L="array":o!==void 0&&o.$$typeof===t?(L="<"+(z(o.type)||"Unknown")+" />",x=" Did you accidentally export a JSX literal instead of a component?"):L=typeof o,k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",L,x)}var U=$r(o,c,g,T,P);if(U==null)return U;if(R){var X=c.children;if(X!==void 0)if(v)if(Be(X)){for(var de=0;de<X.length;de++)Dt(X[de],o);Object.freeze&&Object.freeze(X)}else k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Dt(X,o)}if(me.call(c,"key")){var ie=z(o),Y=Object.keys(c).filter(function(Zr){return Zr!=="key"}),He=Y.length>0?"{key: someKey, "+Y.join(": ..., ")+": ...}":"{key: someKey}";if(!Ot[ie+He]){var Xr=Y.length>0?"{"+Y.join(": ..., ")+": ...}":"{}";k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,He,ie,Xr,ie),Ot[ie+He]=!0}}return o===n?Wr(U):Hr(U),U}}function Gr(o,c,g){return It(o,c,g,!0)}function Yr(o,c,g){return It(o,c,g,!1)}var Kr=Yr,qr=Gr;Ae.Fragment=n,Ae.jsx=Kr,Ae.jsxs=qr})();qt.exports=Ae;var nt=qt.exports;const As=nt.Fragment,i=nt.jsx,w=nt.jsxs;var Xt,Bt=nn;{var Mt=Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Xt=function(e,t){Mt.usingClientEntryPoint=!0;try{return Bt.createRoot(e,t)}finally{Mt.usingClientEntryPoint=!1}}}let Hn={data:""},Wn=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Hn,Gn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Yn=/\/\*[^]*?\*\/|  +/g,$t=/\n+/g,ne=(e,t)=>{let r="",n="",a="";for(let l in e){let s=e[l];l[0]=="@"?l[1]=="i"?r=l+" "+s+";":n+=l[1]=="f"?ne(s,l):l+"{"+ne(s,l[1]=="k"?"":t)+"}":typeof s=="object"?n+=ne(s,t?t.replace(/([^,])+/g,h=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,h):h?h+" "+d:d)):l):s!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=ne.p?ne.p(l,s):l+":"+s+";")}return r+(t&&a?t+"{"+a+"}":a)+n},te={},Zt=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Zt(e[r]);return t}return e},Kn=(e,t,r,n,a)=>{let l=Zt(e),s=te[l]||(te[l]=(d=>{let u=0,p=11;for(;u<d.length;)p=101*p+d.charCodeAt(u++)>>>0;return"go"+p})(l));if(!te[s]){let d=l!==e?e:(u=>{let p,m,b=[{}];for(;p=Gn.exec(u.replace(Yn,""));)p[4]?b.shift():p[3]?(m=p[3].replace($t," ").trim(),b.unshift(b[0][m]=b[0][m]||{})):b[0][p[1]]=p[2].replace($t," ").trim();return b[0]})(e);te[s]=ne(a?{["@keyframes "+s]:d}:d,r?"":"."+s)}let h=r&&te.g?te.g:null;return r&&(te.g=te[s]),((d,u,p,m)=>{m?u.data=u.data.replace(m,d):u.data.indexOf(d)===-1&&(u.data=p?d+u.data:u.data+d)})(te[s],t,n,h),s},qn=(e,t,r)=>e.reduce((n,a,l)=>{let s=t[l];if(s&&s.call){let h=s(r),d=h&&h.props&&h.props.className||/^go/.test(h)&&h;s=d?"."+d:h&&typeof h=="object"?h.props?"":ne(h,""):h===!1?"":h}return n+a+(s??"")},"");function Se(e){let t=this||{},r=e.call?e(t.p):e;return Kn(r.unshift?r.raw?qn(r,[].slice.call(arguments,1),t.p):r.reduce((n,a)=>Object.assign(n,a&&a.call?a(t.p):a),{}):r,Wn(t.target),t.g,t.o,t.k)}let Jt,Qe,et;Se.bind({g:1});let re=Se.bind({k:1});function Xn(e,t,r,n){ne.p=t,Jt=e,Qe=r,et=n}function ae(e,t){let r=this||{};return function(){let n=arguments;function a(l,s){let h=Object.assign({},l),d=h.className||a.className;r.p=Object.assign({theme:Qe&&Qe()},h),r.o=/ *go\d+/.test(d),h.className=Se.apply(r,n)+(d?" "+d:""),t&&(h.ref=s);let u=e;return e[0]&&(u=h.as||e,delete h.as),et&&u[0]&&et(h),Jt(u,h)}return t?t(a):a}}var Zn=e=>typeof e=="function",Ie=(e,t)=>Zn(e)?e(t):e,Jn=(()=>{let e=0;return()=>(++e).toString()})(),Qt=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Qn=20,ot="default",er=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:n}=t;return er(e,{type:e.toasts.find(s=>s.id===n.id)?1:0,toast:n});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(s=>s.id===a||a===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let l=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+l}))}}},De=[],tr={toasts:[],pausedAt:void 0,settings:{toastLimit:Qn}},J={},rr=(e,t=ot)=>{J[t]=er(J[t]||tr,e),De.forEach(([r,n])=>{r===t&&n(J[t])})},nr=e=>Object.keys(J).forEach(t=>rr(e,t)),eo=e=>Object.keys(J).find(t=>J[t].toasts.some(r=>r.id===e)),je=(e=ot)=>t=>{rr(t,e)},to={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ro=(e={},t=ot)=>{let[r,n]=f.useState(J[t]||tr),a=f.useRef(J[t]);f.useEffect(()=>(a.current!==J[t]&&n(J[t]),De.push([t,n]),()=>{let s=De.findIndex(([h])=>h===t);s>-1&&De.splice(s,1)}),[t]);let l=r.toasts.map(s=>{var h,d,u;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||((h=e[s.type])==null?void 0:h.removeDelay)||e?.removeDelay,duration:s.duration||((d=e[s.type])==null?void 0:d.duration)||e?.duration||to[s.type],style:{...e.style,...(u=e[s.type])==null?void 0:u.style,...s.style}}});return{...r,toasts:l}},no=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||Jn()}),ye=e=>(t,r)=>{let n=no(t,e,r);return je(n.toasterId||eo(n.id))({type:2,toast:n}),n.id},F=(e,t)=>ye("blank")(e,t);F.error=ye("error");F.success=ye("success");F.loading=ye("loading");F.custom=ye("custom");F.dismiss=(e,t)=>{let r={type:3,toastId:e};t?je(t)(r):nr(r)};F.dismissAll=e=>F.dismiss(void 0,e);F.remove=(e,t)=>{let r={type:4,toastId:e};t?je(t)(r):nr(r)};F.removeAll=e=>F.remove(void 0,e);F.promise=(e,t,r)=>{let n=F.loading(t.loading,{...r,...r?.loading});return typeof e=="function"&&(e=e()),e.then(a=>{let l=t.success?Ie(t.success,a):void 0;return l?F.success(l,{id:n,...r,...r?.success}):F.dismiss(n),a}).catch(a=>{let l=t.error?Ie(t.error,a):void 0;l?F.error(l,{id:n,...r,...r?.error}):F.dismiss(n)}),e};var oo=1e3,ao=(e,t="default")=>{let{toasts:r,pausedAt:n}=ro(e,t),a=f.useRef(new Map).current,l=f.useCallback((m,b=oo)=>{if(a.has(m))return;let y=setTimeout(()=>{a.delete(m),s({type:4,toastId:m})},b);a.set(m,y)},[]);f.useEffect(()=>{if(n)return;let m=Date.now(),b=r.map(y=>{if(y.duration===1/0)return;let N=(y.duration||0)+y.pauseDuration-(m-y.createdAt);if(N<0){y.visible&&F.dismiss(y.id);return}return setTimeout(()=>F.dismiss(y.id,t),N)});return()=>{b.forEach(y=>y&&clearTimeout(y))}},[r,n,t]);let s=f.useCallback(je(t),[t]),h=f.useCallback(()=>{s({type:5,time:Date.now()})},[s]),d=f.useCallback((m,b)=>{s({type:1,toast:{id:m,height:b}})},[s]),u=f.useCallback(()=>{n&&s({type:6,time:Date.now()})},[n,s]),p=f.useCallback((m,b)=>{let{reverseOrder:y=!1,gutter:N=8,defaultPosition:G}=b||{},O=r.filter(D=>(D.position||G)===(m.position||G)&&D.height),B=O.findIndex(D=>D.id===m.id),k=O.filter((D,_)=>_<B&&D.visible).length;return O.filter(D=>D.visible).slice(...y?[k+1]:[0,k]).reduce((D,_)=>D+(_.height||0)+N,0)},[r]);return f.useEffect(()=>{r.forEach(m=>{if(m.dismissed)l(m.id,m.removeDelay);else{let b=a.get(m.id);b&&(clearTimeout(b),a.delete(m.id))}})},[r,l]),{toasts:r,handlers:{updateHeight:d,startPause:h,endPause:u,calculateOffset:p}}},so=re`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,io=re`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,lo=re`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,co=ae("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${so} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${io} 0.15s ease-out forwards;
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
    animation: ${lo} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,uo=re`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,fo=ae("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${uo} 1s linear infinite;
`,ho=re`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,mo=re`
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
}`,po=ae("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ho} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${mo} 0.2s ease-out forwards;
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
`,go=ae("div")`
  position: absolute;
`,bo=ae("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,yo=re`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_o=ae("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${yo} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,vo=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return t!==void 0?typeof t=="string"?f.createElement(_o,null,t):t:r==="blank"?null:f.createElement(bo,null,f.createElement(fo,{...n}),r!=="loading"&&f.createElement(go,null,r==="error"?f.createElement(co,{...n}):f.createElement(po,{...n})))},wo=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,xo=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Eo="0%{opacity:0;} 100%{opacity:1;}",Ro="0%{opacity:1;} 100%{opacity:0;}",To=ae("div")`
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
`,ko=ae("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,No=(e,t)=>{let r=e.includes("top")?1:-1,[n,a]=Qt()?[Eo,Ro]:[wo(r),xo(r)];return{animation:t?`${re(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${re(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Po=f.memo(({toast:e,position:t,style:r,children:n})=>{let a=e.height?No(e.position||t||"top-center",e.visible):{opacity:0},l=f.createElement(vo,{toast:e}),s=f.createElement(ko,{...e.ariaProps},Ie(e.message,e));return f.createElement(To,{className:e.className,style:{...a,...r,...e.style}},typeof n=="function"?n({icon:l,message:s}):f.createElement(f.Fragment,null,l,s))});Xn(f.createElement);var Ao=({id:e,className:t,style:r,onHeightUpdate:n,children:a})=>{let l=f.useCallback(s=>{if(s){let h=()=>{let d=s.getBoundingClientRect().height;n(e,d)};h(),new MutationObserver(h).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return f.createElement("div",{ref:l,className:t,style:r},a)},Do=(e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Qt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...a}},Oo=Se`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Te=16,Io=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:a,toasterId:l,containerStyle:s,containerClassName:h})=>{let{toasts:d,handlers:u}=ao(r,l);return f.createElement("div",{"data-rht-toaster":l||"",style:{position:"fixed",zIndex:9999,top:Te,left:Te,right:Te,bottom:Te,pointerEvents:"none",...s},className:h,onMouseEnter:u.startPause,onMouseLeave:u.endPause},d.map(p=>{let m=p.position||t,b=u.calculateOffset(p,{reverseOrder:e,gutter:n,defaultPosition:t}),y=Do(m,b);return f.createElement(Ao,{id:p.id,key:p.id,onHeightUpdate:u.updateHeight,className:p.visible?Oo:"",style:y},p.type==="custom"?Ie(p.message,p):a?a(p):f.createElement(Po,{toast:p,position:m}))}))},K=F;const or=f.createContext();function Co(){return f.useContext(or)}const Vt={light:{name:"Light Theme",cssVars:{"--primary":"#2563eb","--primary-foreground":"#ffffff","--background":"#ffffff","--foreground":"#0f172a","--card":"#ffffff","--muted":"#f8fafc","--border":"#e2e8f0"},isDark:!1},dark:{name:"Dark Theme",cssVars:{"--primary":"#3b82f6","--primary-foreground":"#ffffff","--background":"#0f172a","--foreground":"#f8fafc","--card":"#1e293b","--muted":"#1e293b","--border":"#334155"},isDark:!0},blue:{name:"Blue Theme",cssVars:{"--primary":"#1e40af","--primary-foreground":"#ffffff","--background":"#f0f9ff","--foreground":"#0c4a6e","--card":"#e0f2fe","--muted":"#e0f2fe","--border":"#7dd3fc"},isDark:!1},purple:{name:"Purple Theme",cssVars:{"--primary":"#7c3aed","--primary-foreground":"#ffffff","--background":"#faf5ff","--foreground":"#581c87","--card":"#f3e8ff","--muted":"#f3e8ff","--border":"#c4b5fd"},isDark:!1},green:{name:"Green Theme",cssVars:{"--primary":"#059669","--primary-foreground":"#ffffff","--background":"#f0fdf4","--foreground":"#064e3b","--card":"#dcfce7","--muted":"#dcfce7","--border":"#86efac"},isDark:!1},orange:{name:"Orange Theme",cssVars:{"--primary":"#ea580c","--primary-foreground":"#ffffff","--background":"#fff7ed","--foreground":"#9a3412","--card":"#fed7aa","--muted":"#fed7aa","--border":"#fdba74"},isDark:!1},red:{name:"Red Theme",cssVars:{"--primary":"#dc2626","--primary-foreground":"#ffffff","--background":"#fef2f2","--foreground":"#991b1b","--card":"#fecaca","--muted":"#fecaca","--border":"#fca5a5"},isDark:!1},pink:{name:"Pink Theme",cssVars:{"--primary":"#db2777","--primary-foreground":"#ffffff","--background":"#fdf2f8","--foreground":"#9d174d","--card":"#fce7f3","--muted":"#fce7f3","--border":"#f9a8d4"},isDark:!1},cyan:{name:"Cyan Theme",cssVars:{"--primary":"#0891b2","--primary-foreground":"#ffffff","--background":"#ecfeff","--foreground":"#164e63","--card":"#cffafe","--muted":"#cffafe","--border":"#67e8f9"},isDark:!1},amber:{name:"Amber Theme",cssVars:{"--primary":"#d97706","--primary-foreground":"#ffffff","--background":"#fffbeb","--foreground":"#92400e","--card":"#fef3c7","--muted":"#fef3c7","--border":"#fde68a"},isDark:!1},emerald:{name:"Emerald Theme",cssVars:{"--primary":"#10b981","--primary-foreground":"#ffffff","--background":"#ecfdf5","--foreground":"#064e3b","--card":"#d1fae5","--muted":"#d1fae5","--border":"#6ee7b7"},isDark:!1}};function So({children:e}){const[t,r]=f.useState("light");f.useEffect(()=>{const s=localStorage.getItem("theme")||"light";r(s),n(s)},[]);const n=s=>{const h=Vt[s];h&&(Object.entries(h.cssVars).forEach(([d,u])=>{document.documentElement.style.setProperty(d,u)}),document.documentElement.classList.toggle("dark",h.isDark))},a=s=>{r(s),localStorage.setItem("theme",s),n(s)},l=()=>{a(t==="light"?"dark":"light")};return i(or.Provider,{value:{theme:t,setTheme:a,toggleTheme:l,themes:Vt},children:e})}/**
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
 */const ar="firebasestorage.googleapis.com",sr="storageBucket",jo=2*60*1e3,Lo=10*60*1e3;/**
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
 */class S extends pn{constructor(t,r,n=0){super(Ke(t),`Firebase Storage: ${r} (${Ke(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,S.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ke(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var C;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(C||(C={}));function Ke(e){return"storage/"+e}function at(){const e="An unknown error occurred, please check the error payload for server response.";return new S(C.UNKNOWN,e)}function Uo(e){return new S(C.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Fo(e){return new S(C.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Bo(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new S(C.UNAUTHENTICATED,e)}function Mo(){return new S(C.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function $o(e){return new S(C.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Vo(){return new S(C.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zo(){return new S(C.CANCELED,"User canceled the upload/download.")}function Ho(e){return new S(C.INVALID_URL,"Invalid URL '"+e+"'.")}function Wo(e){return new S(C.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Go(){return new S(C.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+sr+"' property when initializing the app?")}function Yo(){return new S(C.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ko(){return new S(C.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qo(e){return new S(C.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tt(e){return new S(C.INVALID_ARGUMENT,e)}function ir(){return new S(C.APP_DELETED,"The Firebase app was deleted.")}function Xo(e){return new S(C.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function be(e,t){return new S(C.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function ge(e){throw new S(C.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class q{constructor(t,r){this.bucket=t,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,r){let n;try{n=q.makeFromUrl(t,r)}catch{return new q(t,"")}if(n.path==="")return n;throw Wo(t)}static makeFromUrl(t,r){let n=null;const a="([A-Za-z0-9.\\-_]+)";function l(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const s="(/(.*))?$",h=new RegExp("^gs://"+a+s,"i"),d={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const p="v[A-Za-z0-9_]+",m=r.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",y=new RegExp(`^https?://${m}/${p}/b/${a}/o${b}`,"i"),N={bucket:1,path:3},G=r===ar?"(?:storage.googleapis.com|storage.cloud.google.com)":r,O="([^?#]*)",B=new RegExp(`^https?://${G}/${a}/${O}`,"i"),D=[{regex:h,indices:d,postModify:l},{regex:y,indices:N,postModify:u},{regex:B,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<D.length;_++){const E=D[_],j=E.regex.exec(t);if(j){const $=j[E.indices.bucket];let M=j[E.indices.path];M||(M=""),n=new q($,M),E.postModify(n);break}}if(n==null)throw Ho(t);return n}}class Zo{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Jo(e,t,r){let n=1,a=null,l=null,s=!1,h=0;function d(){return h===2}let u=!1;function p(...O){u||(u=!0,t.apply(null,O))}function m(O){a=setTimeout(()=>{a=null,e(y,d())},O)}function b(){l&&clearTimeout(l)}function y(O,...B){if(u){b();return}if(O){b(),p.call(null,O,...B);return}if(d()||s){b(),p.call(null,O,...B);return}n<64&&(n*=2);let D;h===1?(h=2,D=0):D=(n+Math.random())*1e3,m(D)}let N=!1;function G(O){N||(N=!0,b(),!u&&(a!==null?(O||(h=2),clearTimeout(a),m(0)):O||(h=1)))}return m(0),l=setTimeout(()=>{s=!0,G(!0)},r),G}function Qo(e){e(!1)}/**
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
 */function ea(e){return e!==void 0}function ta(e){return typeof e=="object"&&!Array.isArray(e)}function st(e){return typeof e=="string"||e instanceof String}function zt(e){return it()&&e instanceof Blob}function it(){return typeof Blob<"u"&&!gn()}function Ht(e,t,r,n){if(n<t)throw tt(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw tt(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
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
 */function lt(e,t,r){let n=t;return r==null&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function lr(e){const t=encodeURIComponent;let r="?";for(const n in e)if(e.hasOwnProperty(n)){const a=t(n)+"="+t(e[n]);r=r+a+"&"}return r=r.slice(0,-1),r}/**
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
 */var le;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(le||(le={}));/**
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
 */function ra(e,t){const r=e>=500&&e<600,a=[408,429].indexOf(e)!==-1,l=t.indexOf(e)!==-1;return r||a||l}/**
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
 */class na{constructor(t,r,n,a,l,s,h,d,u,p,m,b=!0){this.url_=t,this.method_=r,this.headers_=n,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=s,this.callback_=h,this.errorCallback_=d,this.timeout_=u,this.progressCallback_=p,this.connectionFactory_=m,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,N)=>{this.resolve_=y,this.reject_=N,this.start_()})}start_(){const t=(n,a)=>{if(a){n(!1,new ke(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const s=h=>{const d=h.loaded,u=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,u)};this.progressCallback_!==null&&l.addUploadProgressListener(s),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(s),this.pendingConnection_=null;const h=l.getErrorCode()===le.NO_ERROR,d=l.getStatus();if(!h||ra(d,this.additionalRetryCodes_)&&this.retry){const p=l.getErrorCode()===le.ABORT;n(!1,new ke(!1,null,p));return}const u=this.successCodes_.indexOf(d)!==-1;n(!0,new ke(u,l))})},r=(n,a)=>{const l=this.resolve_,s=this.reject_,h=a.connection;if(a.wasSuccessCode)try{const d=this.callback_(h,h.getResponse());ea(d)?l(d):l()}catch(d){s(d)}else if(h!==null){const d=at();d.serverResponse=h.getErrorText(),this.errorCallback_?s(this.errorCallback_(h,d)):s(d)}else if(a.canceled){const d=this.appDelete_?ir():zo();s(d)}else{const d=Vo();s(d)}};this.canceled_?r(!1,new ke(!1,null,!0)):this.backoffId_=Jo(t,r,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Qo(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ke{constructor(t,r,n){this.wasSuccessCode=t,this.connection=r,this.canceled=!!n}}function oa(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function aa(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function sa(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ia(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function la(e,t,r,n,a,l,s=!0){const h=lr(e.urlParams),d=e.url+h,u=Object.assign({},e.headers);return sa(u,t),oa(u,r),aa(u,l),ia(u,n),new na(d,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,a,s)}/**
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
 */function ca(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ua(...e){const t=ca();if(t!==void 0){const r=new t;for(let n=0;n<e.length;n++)r.append(e[n]);return r.getBlob()}else{if(it())return new Blob(e);throw new S(C.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function da(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}/**
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
 */function fa(e){if(typeof atob>"u")throw qo("base-64");return atob(e)}/**
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
 */const Q={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qe{constructor(t,r){this.data=t,this.contentType=r||null}}function ha(e,t){switch(e){case Q.RAW:return new qe(cr(t));case Q.BASE64:case Q.BASE64URL:return new qe(ur(e,t));case Q.DATA_URL:return new qe(pa(t),ga(t))}throw at()}function cr(e){const t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(r<e.length-1&&(e.charCodeAt(r+1)&64512)===56320))t.push(239,191,189);else{const l=n,s=e.charCodeAt(++r);n=65536|(l&1023)<<10|s&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function ma(e){let t;try{t=decodeURIComponent(e)}catch{throw be(Q.DATA_URL,"Malformed data URL.")}return cr(t)}function ur(e,t){switch(e){case Q.BASE64:{const a=t.indexOf("-")!==-1,l=t.indexOf("_")!==-1;if(a||l)throw be(e,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case Q.BASE64URL:{const a=t.indexOf("+")!==-1,l=t.indexOf("/")!==-1;if(a||l)throw be(e,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=fa(t)}catch(a){throw a.message.includes("polyfill")?a:be(e,"Invalid character found")}const n=new Uint8Array(r.length);for(let a=0;a<r.length;a++)n[a]=r.charCodeAt(a);return n}class dr{constructor(t){this.base64=!1,this.contentType=null;const r=t.match(/^data:([^,]+)?,/);if(r===null)throw be(Q.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=r[1]||null;n!=null&&(this.base64=ba(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function pa(e){const t=new dr(e);return t.base64?ur(Q.BASE64,t.rest):ma(t.rest)}function ga(e){return new dr(e).contentType}function ba(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class oe{constructor(t,r){let n=0,a="";zt(t)?(this.data_=t,n=t.size,a=t.type):t instanceof ArrayBuffer?(r?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(r?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=a}size(){return this.size_}type(){return this.type_}slice(t,r){if(zt(this.data_)){const n=this.data_,a=da(n,t,r);return a===null?null:new oe(a)}else{const n=new Uint8Array(this.data_.buffer,t,r-t);return new oe(n,!0)}}static getBlob(...t){if(it()){const r=t.map(n=>n instanceof oe?n.data_:n);return new oe(ua.apply(null,r))}else{const r=t.map(s=>st(s)?ha(Q.RAW,s).data:s.data_);let n=0;r.forEach(s=>{n+=s.byteLength});const a=new Uint8Array(n);let l=0;return r.forEach(s=>{for(let h=0;h<s.length;h++)a[l++]=s[h]}),new oe(a,!0)}}uploadData(){return this.data_}}/**
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
 */function fr(e){let t;try{t=JSON.parse(e)}catch{return null}return ta(t)?t:null}/**
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
 */function ya(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function _a(e,t){const r=t.split("/").filter(n=>n.length>0).join("/");return e.length===0?r:e+"/"+r}function hr(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function va(e,t){return t}class W{constructor(t,r,n,a){this.server=t,this.local=r||t,this.writable=!!n,this.xform=a||va}}let Ne=null;function wa(e){return!st(e)||e.length<2?e:hr(e)}function mr(){if(Ne)return Ne;const e=[];e.push(new W("bucket")),e.push(new W("generation")),e.push(new W("metageneration")),e.push(new W("name","fullPath",!0));function t(l,s){return wa(s)}const r=new W("name");r.xform=t,e.push(r);function n(l,s){return s!==void 0?Number(s):s}const a=new W("size");return a.xform=n,e.push(a),e.push(new W("timeCreated")),e.push(new W("updated")),e.push(new W("md5Hash",null,!0)),e.push(new W("cacheControl",null,!0)),e.push(new W("contentDisposition",null,!0)),e.push(new W("contentEncoding",null,!0)),e.push(new W("contentLanguage",null,!0)),e.push(new W("contentType",null,!0)),e.push(new W("metadata","customMetadata",!0)),Ne=e,Ne}function xa(e,t){function r(){const n=e.bucket,a=e.fullPath,l=new q(n,a);return t._makeStorageReference(l)}Object.defineProperty(e,"ref",{get:r})}function Ea(e,t,r){const n={};n.type="file";const a=r.length;for(let l=0;l<a;l++){const s=r[l];n[s.local]=s.xform(n,t[s.server])}return xa(n,e),n}function pr(e,t,r){const n=fr(t);return n===null?null:Ea(e,n,r)}function Ra(e,t,r,n){const a=fr(t);if(a===null||!st(a.downloadTokens))return null;const l=a.downloadTokens;if(l.length===0)return null;const s=encodeURIComponent;return l.split(",").map(u=>{const p=e.bucket,m=e.fullPath,b="/b/"+s(p)+"/o/"+s(m),y=lt(b,r,n),N=lr({alt:"media",token:u});return y+N})[0]}function Ta(e,t){const r={},n=t.length;for(let a=0;a<n;a++){const l=t[a];l.writable&&(r[l.server]=e[l.local])}return JSON.stringify(r)}class gr{constructor(t,r,n,a){this.url=t,this.method=r,this.handler=n,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function br(e){if(!e)throw at()}function ka(e,t){function r(n,a){const l=pr(e,a,t);return br(l!==null),l}return r}function Na(e,t){function r(n,a){const l=pr(e,a,t);return br(l!==null),Ra(l,a,e.host,e._protocol)}return r}function yr(e){function t(r,n){let a;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?a=Mo():a=Bo():r.getStatus()===402?a=Fo(e.bucket):r.getStatus()===403?a=$o(e.path):a=n,a.status=r.getStatus(),a.serverResponse=n.serverResponse,a}return t}function Pa(e){const t=yr(e);function r(n,a){let l=t(n,a);return n.getStatus()===404&&(l=Uo(e.path)),l.serverResponse=a.serverResponse,l}return r}function Aa(e,t,r){const n=t.fullServerUrl(),a=lt(n,e.host,e._protocol),l="GET",s=e.maxOperationRetryTime,h=new gr(a,l,Na(e,r),s);return h.errorHandler=Pa(t),h}function Da(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Oa(e,t,r){const n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=Da(null,t)),n}function Ia(e,t,r,n,a){const l=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function h(){let D="";for(let _=0;_<2;_++)D=D+Math.random().toString().slice(2);return D}const d=h();s["Content-Type"]="multipart/related; boundary="+d;const u=Oa(t,n,a),p=Ta(u,r),m="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+d+`\r
Content-Type: `+u.contentType+`\r
\r
`,b=`\r
--`+d+"--",y=oe.getBlob(m,n,b);if(y===null)throw Yo();const N={name:u.fullPath},G=lt(l,e.host,e._protocol),O="POST",B=e.maxUploadRetryTime,k=new gr(G,O,ka(e,r),B);return k.urlParams=N,k.headers=s,k.body=y.uploadData(),k.errorHandler=yr(t),k}class Ca{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=le.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=le.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=le.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,r,n,a){if(this.sent_)throw ge("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,t,!0),a!==void 0)for(const l in a)a.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,a[l].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ge("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ge("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ge("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ge("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Sa extends Ca{initXhr(){this.xhr_.responseType="text"}}function _r(){return new Sa}/**
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
 */class ce{constructor(t,r){this._service=t,r instanceof q?this._location=r:this._location=q.makeFromUrl(r,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,r){return new ce(t,r)}get root(){const t=new q(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hr(this._location.path)}get storage(){return this._service}get parent(){const t=ya(this._location.path);if(t===null)return null;const r=new q(this._location.bucket,t);return new ce(this._service,r)}_throwIfRoot(t){if(this._location.path==="")throw Xo(t)}}function ja(e,t,r){e._throwIfRoot("uploadBytes");const n=Ia(e.storage,e._location,mr(),new oe(t,!0),r);return e.storage.makeRequestWithTokens(n,_r).then(a=>({metadata:a,ref:e}))}function La(e){e._throwIfRoot("getDownloadURL");const t=Aa(e.storage,e._location,mr());return e.storage.makeRequestWithTokens(t,_r).then(r=>{if(r===null)throw Ko();return r})}function Ua(e,t){const r=_a(e._location.path,t),n=new q(e._location.bucket,r);return new ce(e.storage,n)}/**
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
 */function Fa(e){return/^[A-Za-z]+:\/\//.test(e)}function Ba(e,t){return new ce(e,t)}function vr(e,t){if(e instanceof ct){const r=e;if(r._bucket==null)throw Go();const n=new ce(r,r._bucket);return t!=null?vr(n,t):n}else return t!==void 0?Ua(e,t):e}function Ma(e,t){if(t&&Fa(t)){if(e instanceof ct)return Ba(e,t);throw tt("To use ref(service, url), the first argument must be a Storage instance.")}else return vr(e,t)}function Wt(e,t){const r=t?.[sr];return r==null?null:q.makeFromBucketSpec(r,e)}function $a(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";const{mockUserToken:a}=n;a&&(e._overrideAuthToken=typeof a=="string"?a:hn(a,e.app.options.projectId))}class ct{constructor(t,r,n,a,l){this.app=t,this._authProvider=r,this._appCheckProvider=n,this._url=a,this._firebaseVersion=l,this._bucket=null,this._host=ar,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jo,this._maxUploadRetryTime=Lo,this._requests=new Set,a!=null?this._bucket=q.makeFromBucketSpec(a,this._host):this._bucket=Wt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=q.makeFromBucketSpec(this._url,t):this._bucket=Wt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Ht("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Ht("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const r=await t.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ce(this,t)}_makeRequest(t,r,n,a,l=!0){if(this._deleted)return new Zo(ir());{const s=la(t,this._appId,n,a,r,this._firebaseVersion,l);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,r){const[n,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,r,n,a).getPromise()}}const Gt="@firebase/storage",Yt="0.11.2";/**
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
 */const wr="storage";function Ds(e,t,r){return e=Ce(e),ja(e,t,r)}function Os(e){return e=Ce(e),La(e)}function Is(e,t){return e=Ce(e),Ma(e,t)}function Va(e=un(),t){e=Ce(e);const n=ln(e,wr).getImmediate({identifier:t}),a=cn("storage");return a&&za(n,...a),n}function za(e,t,r,n={}){$a(e,t,r,n)}function Ha(e,{instanceIdentifier:t}){const r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return new ct(r,n,a,t,mn)}function Wa(){dn(new fn(wr,Ha,"PUBLIC").setMultipleInstances(!0)),Ct(Gt,Yt,""),Ct(Gt,Yt,"esm2017")}Wa();const Oe={apiKey:{}.VITE_FIREBASE_API_KEY||"AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",authDomain:{}.VITE_FIREBASE_AUTH_DOMAIN||"dreambuild-2024-app.firebaseapp.com",projectId:{}.VITE_FIREBASE_PROJECT_ID||"dreambuild-2024-app",storageBucket:{}.VITE_FIREBASE_STORAGE_BUCKET||"dreambuild-2024-app.firebasestorage.app",messagingSenderId:{}.VITE_FIREBASE_MESSAGING_SENDER_ID||"780467658601",appId:{}.VITE_FIREBASE_APP_ID||"1:780467658601:web:833a9373c15fa3be0be7f8"};console.log("Firebase config loaded:",{hasApiKey:!!Oe.apiKey,hasAuthDomain:!!Oe.authDomain,projectId:Oe.projectId,usingEnvVars:!!{}.VITE_FIREBASE_API_KEY});const ut=bn(Oe),fe=yn(ut),Pe=_n(ut),Cs=Va(ut),xr=f.createContext();function Er(){return f.useContext(xr)}function Ga({children:e}){const[t,r]=f.useState(null),[n,a]=f.useState(!0);f.useEffect(()=>{let u,p;try{u=vn(fe,async m=>{try{if(m)try{const b=await wn(We(Pe,"users",m.uid)),y=b.exists()?b.data():null;r({uid:m.uid,email:m.email,displayName:m.displayName,photoURL:m.photoURL,...y})}catch(b){console.log("⚠️ Firestore not available, using basic user data:",b.message),r({uid:m.uid,email:m.email,displayName:m.displayName,photoURL:m.photoURL})}else r(null)}catch(b){console.error("Error in auth state change:",b),r(null)}finally{a(!1)}}),p=setTimeout(()=>{console.log("Firebase auth timeout - setting loading to false"),a(!1)},5e3)}catch(m){console.error("Error setting up auth listener:",m),a(!1)}return()=>{u&&u(),p&&clearTimeout(p)}},[]);const d={user:t,loading:n,signInWithGoogle:async()=>{try{const u=new xn;u.addScope("email"),u.addScope("profile");const p=await St(fe,u);try{await jt(We(Pe,"users",p.user.uid),{uid:p.user.uid,email:p.user.email,displayName:p.user.displayName,photoURL:p.user.photoURL,createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(m){console.warn("Failed to save user data to Firestore:",m)}console.log("Successfully signed in!")}catch(u){throw console.error("Failed to sign in:",u.message),u}},signInWithGitHub:async()=>{try{console.log("Using Firebase GitHub authentication");const u=new En;u.addScope("user:email");const p=await St(fe,u);try{await jt(We(Pe,"users",p.user.uid),{uid:p.user.uid,email:p.user.email,displayName:p.user.displayName||p.user.email?.split("@")[0]||"GitHub User",photoURL:p.user.photoURL,provider:"github",createdAt:new Date,lastLogin:new Date},{merge:!0})}catch(m){console.warn("Failed to save user data to Firestore:",m)}console.log("Successfully signed in with GitHub!")}catch(u){if(console.error("GitHub authentication error:",u.message),u.code==="auth/account-exists-with-different-credential"){const p=u.customData?.email;if(p)try{const m=await Rn(fe,p);throw console.log("Available sign-in methods for",p,":",m),m&&m.length>0?m.includes("google.com")?new Error(`An account with ${p} already exists using Google. Please sign in with Google instead, then you can link your GitHub account.`):m.includes("password")?new Error(`An account with ${p} already exists using email/password. Please sign in with your existing method instead.`):new Error(`An account with ${p} already exists. Please sign in with your existing method instead.`):new Error(`An account with ${p} already exists. Please try signing in with Google first, then you can link your GitHub account.`)}catch(m){throw console.error("Failed to check sign-in methods:",m.message),new Error(`An account with ${p} already exists. Please sign in with your existing method instead.`)}else throw new Error("An account with this email already exists. Please sign in with your existing method instead.")}else throw u.code==="auth/internal-error"?(console.error("GitHub authentication internal error:",u.message),new Error("GitHub authentication is not properly configured. Please check Firebase Console settings.")):(console.error("Failed to sign in with GitHub:",u.message),u)}},logout:async()=>{try{await Tn(fe),console.log("Successfully signed out!")}catch(u){console.error("Failed to sign out:",u.message)}},auth:fe,db:Pe};return i(xr.Provider,{value:d,children:n?i("div",{className:"min-h-screen bg-background flex items-center justify-center",children:w("div",{className:"text-center",children:[i("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),i("p",{className:"text-muted-foreground",children:"Loading DreamBuild..."})]})}):e})}const Rr=f.createContext();function Ss(){return f.useContext(Rr)}function Ya({children:e}){const{user:t,db:r}=Er(),[n,a]=f.useState({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),[l,s]=f.useState([]),[h,d]=f.useState(!1),u=f.useCallback(_=>{a(E=>({...E,activeFile:_,lastModified:new Date}))},[]),p=f.useCallback((_,E)=>{a(j=>({...j,files:{...j.files,[_]:E},lastModified:new Date}))},[]),m=f.useCallback(_=>{a(E=>{const j={...E,config:{...E.config,..._},lastModified:new Date};return _.name&&(j.name=_.name),j})},[]),b=f.useCallback(async()=>{if(t){d(!0);try{const{collection:_,query:E,where:j,getDocs:$,orderBy:M}=await A(()=>import("./firebase-24a1fa17.js").then(z=>z.w),[]),V=_(r,"projects"),ee=E(V,j("userId","==",t.uid),M("lastModified","desc")),ve=(await $(ee)).docs.map(z=>({id:z.id,...z.data()}));s(ve)}catch(_){console.error("Failed to load projects:",_),K.error("Failed to load projects: "+_.message)}finally{d(!1)}}},[t,r]);f.useEffect(()=>{t?b():s([])},[t,b]);const y=f.useCallback(async(_=null)=>{if(!t){K.error("Please sign in to save projects");return}d(!0);try{const E={...n,name:_||n.name,userId:t.uid,lastModified:new Date},{doc:j,setDoc:$,collection:M}=await A(()=>import("./firebase-24a1fa17.js").then(ee=>ee.w),[]),V=j(M(r,"projects"));await $(V,{...E,id:V.id,createdAt:n.id?void 0:new Date}),a(ee=>({...ee,id:V.id})),K.success("Project saved successfully!"),await b()}catch(E){K.error("Failed to save project: "+E.message)}finally{d(!1)}},[n,t,r,b]),N=f.useCallback(async _=>{if(!t){K.error("Please sign in to save projects");return}d(!0);try{const E={..._,userId:t.uid,lastModified:new Date,createdAt:_.createdAt||new Date},{doc:j,setDoc:$,collection:M}=await A(()=>import("./firebase-24a1fa17.js").then(_e=>_e.w),[]),V=j(M(r,"projects")),ee={...E,id:V.id};await $(V,ee),K.success(`Project "${_.name}" saved successfully!`),await b()}catch(E){console.error("Failed to save external project:",E),K.error("Failed to save project")}finally{d(!1)}},[t,r,b]),G=f.useCallback(async _=>{if(t){d(!0);try{const{doc:E,getDoc:j}=await A(()=>import("./firebase-24a1fa17.js").then(V=>V.w),[]),$=E(r,"projects",_),M=await j($);if(M.exists()){const V={id:M.id,...M.data()};a(V),K.success("Project loaded successfully!")}else K.error("Project not found")}catch(E){K.error("Failed to load project: "+E.message)}finally{d(!1)}}},[t,r]),O=f.useCallback(async _=>{if(t){d(!0);try{const{doc:E,deleteDoc:j}=await A(()=>import("./firebase-24a1fa17.js").then($=>$.w),[]);await j(E(r,"projects",_)),s($=>$.filter(M=>M.id!==_)),K.success("Project deleted successfully!")}catch(E){K.error("Failed to delete project: "+E.message)}finally{d(!1)}}},[t,r]),B=f.useCallback(()=>{a({id:null,name:"Untitled Project",files:{"index.html":"","style.css":"","script.js":"","components.jsx":""},activeFile:"index.html",config:{appType:"frontend",language:"javascript",styling:"tailwind",database:"none",auth:"none"},lastModified:new Date}),K.success("New project created!")},[]),k=f.useCallback(_=>{a(E=>({...E,files:{...E.files,..._},lastModified:new Date})),K.success(`${Object.keys(_).length} files added to project!`)},[]),D=f.useMemo(()=>({currentProject:n,projects:l,isLoading:h,switchFile:u,updateFile:p,updateConfig:m,saveProject:y,saveExternalProject:N,loadProjects:b,loadProject:G,deleteProject:O,createNewProject:B,addFilesToProject:k}),[n,l,h,u,p,m,y,N,b,G,O,B,k]);return i(Rr.Provider,{value:D,children:e})}class Xe extends Ze.Component{constructor(t){super(t),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,r){console.error("ErrorBoundary caught an error:",t,r),this.setState({error:t,errorInfo:r})}handleRetry=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};render(){return this.state.hasError?i("div",{className:"min-h-screen bg-background flex items-center justify-center p-4",children:w("div",{className:"max-w-md w-full bg-card rounded-2xl shadow-lg border border-border p-8 text-center",children:[i("div",{className:"w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6",children:i(kn,{className:"h-8 w-8 text-red-600 dark:text-red-400"})}),i("h1",{className:"text-2xl font-bold text-foreground mb-2",children:"Oops! Something went wrong"}),i("p",{className:"text-muted-foreground mb-6",children:"We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists."}),this.state.error&&w("details",{className:"mb-6 text-left",children:[i("summary",{className:"cursor-pointer text-sm text-muted-foreground hover:text-foreground",children:"Error Details (Development)"}),w("div",{className:"mt-2 p-4 bg-muted rounded-lg text-xs font-mono text-red-600 dark:text-red-400 overflow-auto max-h-32",children:[i("div",{className:"font-semibold mb-2",children:"Error:"}),i("div",{className:"mb-2",children:this.state.error.toString()}),i("div",{className:"font-semibold mb-2",children:"Component Stack:"}),i("div",{className:"whitespace-pre-wrap",children:this.state.errorInfo.componentStack})]})]}),w("div",{className:"flex gap-3 justify-center",children:[w("button",{onClick:this.handleRetry,className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",children:[i(Nn,{className:"h-4 w-4"}),"Try Again"]}),w(Z,{to:"/",className:"flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors",children:[i(Pn,{className:"h-4 w-4"}),"Go Home"]})]})]})}):this.props.children}}const Ka=()=>{const{theme:e,toggleTheme:t}=Co(),{user:r,logout:n}=Er(),[a,l]=f.useState(!1),[s,h]=f.useState(!1),[d,u]=f.useState(!1),p=rt();Ze.useEffect(()=>{const y=()=>{h(window.innerWidth>=768)};return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]),Ze.useEffect(()=>{const y=N=>{d&&!N.target.closest(".user-menu")&&u(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[d]);const m=[{name:"Home",href:"/",icon:Ye},{name:"AI Builder",href:"/ai-builder",icon:Cn},{name:"Multi-Window",href:"/multi-window",icon:Sn},{name:"Templates",href:"/templates",icon:Je},{name:"Gallery",href:"/gallery",icon:jn},{name:"Education",href:"/education",icon:Ln},{name:"Projects",href:"/projects",icon:Ge},{name:"Dashboard",href:"/dashboard",icon:Un},{name:"Download",href:"/download",icon:Fn}],b=y=>p.pathname===y;return i("nav",{className:"fixed top-0 left-0 right-0 z-10 bg-background border-b border-border shadow-sm",children:w("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[w("div",{className:"flex items-center justify-between h-16",children:[w(Z,{to:"/",className:"flex items-center gap-3 group",children:[i("div",{className:"w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg",children:i(Je,{className:"h-6 w-6 text-primary-foreground"})}),w("div",{className:"flex flex-col",children:[i("span",{className:"text-xl font-bold text-high-contrast",children:"DreamBuild"}),i("span",{className:"text-xs text-muted-foreground -mt-1",children:"AI Development Platform"})]})]}),i("div",{className:"hidden md:flex items-center gap-1",children:m.map(y=>{const N=y.icon;return w(Z,{to:y.href,className:`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${b(y.href)?"bg-primary text-primary-foreground":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[i(N,{className:"h-4 w-4"}),y.name]},y.name)})}),w("div",{className:"flex items-center gap-2",children:[i("button",{onClick:t,className:"p-2 rounded-lg hover:bg-muted transition-colors",title:`Switch to ${e==="light"?"dark":"light"} mode`,children:e==="light"?i(An,{className:"h-4 w-4 text-muted-foreground"}):i(Dn,{className:"h-4 w-4 text-muted-foreground"})}),r?w("div",{className:"relative user-menu",children:[w("button",{onClick:()=>u(!d),className:"flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors",children:[i("div",{className:"w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center",children:i("span",{className:"text-sm font-semibold text-primary",children:(r.displayName||r.email||"U").charAt(0).toUpperCase()})}),i("span",{className:"hidden sm:inline text-sm font-medium text-foreground",children:r.displayName||r.email})]}),d&&w("div",{className:"absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-20",children:[w("div",{className:"p-3 border-b border-border",children:[i("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),i("p",{className:"text-xs text-muted-foreground",children:r.email})]}),w("div",{className:"p-1",children:[w(Z,{to:"/dashboard",onClick:()=>u(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[i(Ge,{className:"h-4 w-4"}),"Dashboard"]}),w(Z,{to:"/settings",onClick:()=>u(!1),className:"flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors",children:[i(Lt,{className:"h-4 w-4"}),"Settings"]}),i("hr",{className:"my-1"}),w("button",{onClick:()=>{n(),u(!1)},className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors",children:[i(Ut,{className:"h-4 w-4"}),"Sign Out"]})]})]})]}):w(Z,{to:"/login",className:"flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium",children:[i(Ye,{className:"h-4 w-4"}),"Sign In"]}),!s&&i("button",{onClick:()=>l(!a),className:"p-2 rounded-lg hover:bg-muted transition-colors ml-2",children:a?i(On,{className:"h-4 w-4"}):i(In,{className:"h-4 w-4"})})]})]}),!s&&a&&i("div",{className:"border-t border-border bg-background",children:w("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[m.map(y=>{const N=y.icon;return w(Z,{to:y.href,onClick:()=>l(!1),className:`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border ${b(y.href)?"bg-primary text-primary-foreground border-primary shadow-md":"bg-card text-foreground border-border hover:bg-muted hover:border-primary/30 shadow-sm"}`,children:[i(N,{className:"h-5 w-5"}),y.name]},y.name)}),r?w("div",{className:"mt-4 space-y-2",children:[w("div",{className:"px-4 py-2 border-b border-border",children:[i("p",{className:"text-sm font-medium text-foreground",children:r.displayName||"User"}),i("p",{className:"text-xs text-muted-foreground",children:r.email})]}),w(Z,{to:"/dashboard",onClick:()=>l(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[i(Ge,{className:"h-5 w-5"}),"Dashboard"]}),w(Z,{to:"/settings",onClick:()=>l(!1),className:"flex items-center gap-3 px-4 py-3 text-base font-medium hover:bg-muted rounded-lg",children:[i(Lt,{className:"h-5 w-5"}),"Settings"]}),w("button",{onClick:()=>{n(),l(!1)},className:"w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg",children:[i(Ut,{className:"h-5 w-5"}),"Sign Out"]})]}):w(Z,{to:"/login",onClick:()=>l(!1),className:"flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg text-base font-semibold",children:[i(Ye,{className:"h-5 w-5"}),"Sign In"]})]})})]})})},qa=()=>{const[e,t]=f.useState(""),[r,n]=f.useState(!1);return i("footer",{className:"bg-background border-t border-border",children:w("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[w("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[w("div",{className:"space-y-4",children:[w("div",{className:"flex items-center gap-2",children:[i("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center",children:i(Je,{className:"h-5 w-5 text-primary-foreground"})}),i("span",{className:"text-xl font-bold text-foreground",children:"DreamBuild"})]}),i("p",{className:"text-sm text-muted-foreground",children:"AI-powered development platform for modern developers."}),w("div",{className:"flex gap-2",children:[i("a",{href:"https://github.com/ronb12/DreamBuild",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"GitHub",children:i(Bn,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),i("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Twitter",children:i(Mn,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})}),i("a",{href:"mailto:contact@dreambuild.ai",className:"p-2 hover:bg-muted rounded-lg transition-colors",title:"Email",children:i(Ft,{className:"h-4 w-4 text-muted-foreground hover:text-foreground"})})]})]}),w("div",{className:"space-y-4",children:[i("h3",{className:"text-lg font-semibold text-foreground",children:"Stay Updated"}),i("p",{className:"text-sm text-muted-foreground",children:"Get the latest updates and features."}),w("form",{onSubmit:l=>{l.preventDefault(),e&&(n(!0),t(""),setTimeout(()=>n(!1),3e3))},className:"space-y-3",children:[w("div",{className:"flex gap-2",children:[i("input",{type:"email",value:e,onChange:l=>t(l.target.value),placeholder:"Enter your email",className:"flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",required:!0}),i("button",{type:"submit",disabled:r,className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:r?i(Ft,{className:"h-4 w-4"}):i($n,{className:"h-4 w-4"})})]}),r&&i("p",{className:"text-sm text-green-600",children:"Thanks for subscribing!"})]})]}),w("div",{className:"space-y-4",children:[i("h3",{className:"text-lg font-semibold text-foreground",children:"Quick Links"}),w("ul",{className:"space-y-2 text-sm",children:[i("li",{children:i("a",{href:"/ai-builder",className:"text-muted-foreground hover:text-foreground transition-colors",children:"AI Builder"})}),i("li",{children:i("a",{href:"/templates",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Templates"})}),i("li",{children:i("a",{href:"/documentation",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Documentation"})}),i("li",{children:i("a",{href:"/support",className:"text-muted-foreground hover:text-foreground transition-colors",children:"Support"})})]})]})]}),i("div",{className:"border-t border-border pt-8 mt-8",children:w("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[i("div",{className:"text-sm text-muted-foreground",children:i("span",{children:"© 2024 Bradley Virtual Solutions, LLC"})}),w("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[i("a",{href:"/privacy",className:"hover:text-foreground transition-colors",children:"Privacy"}),i("a",{href:"/terms",className:"hover:text-foreground transition-colors",children:"Terms"}),i("a",{href:"/contact",className:"hover:text-foreground transition-colors",children:"Contact"})]})]})})]})})},Xa=f.lazy(()=>A(()=>import("./Home-e8bf767b.js"),["assets/Home-e8bf767b.js","assets/react-vendor-84e09ada.js","assets/router-vendor-e414a864.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/firebase-24a1fa17.js"])),Za=f.lazy(()=>A(()=>import("./AIBuilder-1c47b77a.js"),["assets/AIBuilder-1c47b77a.js","assets/react-vendor-84e09ada.js","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js","assets/ui-vendor-4e0271b3.js","assets/Resizable-98f07f60.js","assets/firebaseAppService-42ea2b00.js","assets/simpleAIService-e06d498e.js","assets/utils-vendor-edfcd65b.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css"])),Ja=f.lazy(()=>A(()=>import("./Templates-e409da23.js"),["assets/Templates-e409da23.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),Qa=f.lazy(()=>A(()=>import("./Dashboard-00997618.js"),["assets/Dashboard-00997618.js","assets/react-vendor-84e09ada.js","assets/router-vendor-e414a864.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/firebase-24a1fa17.js"])),es=f.lazy(()=>A(()=>import("./Login-e834b247.js"),["assets/Login-e834b247.js","assets/react-vendor-84e09ada.js","assets/router-vendor-e414a864.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/firebase-24a1fa17.js"])),ts=f.lazy(()=>A(()=>import("./Signup-12e8dfbd.js"),["assets/Signup-12e8dfbd.js","assets/react-vendor-84e09ada.js","assets/router-vendor-e414a864.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/firebase-24a1fa17.js"])),rs=f.lazy(()=>A(()=>import("./Projects-14fe9d23.js"),["assets/Projects-14fe9d23.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),ns=f.lazy(()=>A(()=>import("./Settings-723a0377.js"),["assets/Settings-723a0377.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),os=f.lazy(()=>A(()=>import("./Documentation-236ec82c.js"),["assets/Documentation-236ec82c.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),as=f.lazy(()=>A(()=>import("./Examples-32a9554a.js"),["assets/Examples-32a9554a.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),ss=f.lazy(()=>A(()=>import("./Community-4b75c860.js"),["assets/Community-4b75c860.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),is=f.lazy(()=>A(()=>import("./About-2bb23605.js"),["assets/About-2bb23605.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),ls=f.lazy(()=>A(()=>import("./Blog-40a51e8e.js"),["assets/Blog-40a51e8e.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),cs=f.lazy(()=>A(()=>import("./Contact-bf07c8d6.js"),["assets/Contact-bf07c8d6.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),us=f.lazy(()=>A(()=>import("./Privacy-847a7642.js"),["assets/Privacy-847a7642.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),ds=f.lazy(()=>A(()=>import("./Terms-813ff9ec.js"),["assets/Terms-813ff9ec.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),fs=f.lazy(()=>A(()=>import("./Education-3479bb3d.js"),["assets/Education-3479bb3d.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),hs=f.lazy(()=>A(()=>import("./AppHost-d9963e1f.js"),["assets/AppHost-d9963e1f.js","assets/react-vendor-84e09ada.js","assets/firebaseAppService-42ea2b00.js","assets/firebase-24a1fa17.js","assets/router-vendor-e414a864.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/ui-vendor-4e0271b3.js"])),ms=f.lazy(()=>A(()=>import("./AppGallery-ed3eced3.js"),["assets/AppGallery-ed3eced3.js","assets/react-vendor-84e09ada.js","assets/firebaseAppService-42ea2b00.js","assets/firebase-24a1fa17.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js"])),ps=f.lazy(()=>A(()=>import("./DeleteApps-9275c2e8.js"),["assets/DeleteApps-9275c2e8.js","assets/react-vendor-84e09ada.js","assets/firebase-24a1fa17.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/ui-vendor-4e0271b3.js"])),gs=f.lazy(()=>A(()=>import("./Download-89a9c42d.js"),["assets/Download-89a9c42d.js","assets/react-vendor-84e09ada.js","assets/ui-vendor-4e0271b3.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/router-vendor-e414a864.js","assets/firebase-24a1fa17.js"])),bs=f.lazy(()=>A(()=>import("./MultiWindowManager-e5d2316c.js"),["assets/MultiWindowManager-e5d2316c.js","assets/react-vendor-84e09ada.js","assets/router-vendor-e414a864.js","assets/monaco-editor-bb996daf.js","assets/monaco-editor-9887b7c1.css","assets/firebase-24a1fa17.js","assets/ui-vendor-4e0271b3.js","assets/Resizable-98f07f60.js","assets/firebaseAppService-42ea2b00.js","assets/simpleAIService-e06d498e.js","assets/utils-vendor-edfcd65b.js"])),ys=()=>i("div",{className:"min-h-screen bg-background flex items-center justify-center",children:w("div",{className:"text-center",children:[i("div",{className:"w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"}),i("p",{className:"text-muted-foreground",children:"Loading..."})]})});function _s(){const e=rt();return["/ai-builder","/multi-window"].includes(e.pathname)?null:i(qa,{})}function vs({children:e}){const t=rt();return["/ai-builder","/dashboard","/projects","/multi-window"].includes(t.pathname)?i("main",{children:e}):i("main",{className:"pt-16",children:e})}function ws(){return i(Xe,{children:i(So,{children:i(Ga,{children:i(Ya,{children:i(on,{children:w("div",{className:"min-h-screen bg-background",children:[i(Xe,{children:i(Ka,{})}),i(vs,{children:i(Xe,{children:i(f.Suspense,{fallback:i(ys,{}),children:w(an,{children:[i(I,{path:"/",element:i(Xa,{})}),i(I,{path:"/app",element:i(sn,{to:"/ai-builder",replace:!0})}),i(I,{path:"/ai-builder",element:i(Za,{})}),i(I,{path:"/multi-window",element:i(bs,{})}),i(I,{path:"/templates",element:i(Ja,{})}),i(I,{path:"/dashboard",element:i(Qa,{})}),i(I,{path:"/login",element:i(es,{})}),i(I,{path:"/signup",element:i(ts,{})}),i(I,{path:"/projects",element:i(rs,{})}),i(I,{path:"/settings",element:i(ns,{})}),i(I,{path:"/documentation",element:i(os,{})}),i(I,{path:"/examples",element:i(as,{})}),i(I,{path:"/community",element:i(ss,{})}),i(I,{path:"/about",element:i(is,{})}),i(I,{path:"/blog",element:i(ls,{})}),i(I,{path:"/contact",element:i(cs,{})}),i(I,{path:"/privacy",element:i(us,{})}),i(I,{path:"/terms",element:i(ds,{})}),i(I,{path:"/education",element:i(fs,{})}),i(I,{path:"/apps/:appId",element:i(hs,{})}),i(I,{path:"/gallery",element:i(ms,{})}),i(I,{path:"/delete-apps",element:i(ps,{})}),i(I,{path:"/download",element:i(gs,{})})]})})})}),i(_s,{}),i(Io,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--card)",color:"var(--card-foreground)",border:"1px solid var(--border)"}}})]})})})})})})}Xt(document.getElementById("root")).render(i(f.StrictMode,{children:i(ws,{})}));export{As as F,i as a,Co as b,Er as c,Pe as d,Ds as e,Va as f,Os as g,w as j,F as n,Is as r,Cs as s,Ss as u,K as z};
