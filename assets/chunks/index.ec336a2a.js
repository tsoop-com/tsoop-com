import{k as g,u as ue,r as b,z as F,a3 as ie,G as K,e as Z,E as U,a6 as se,a7 as oe,a1 as ce,V as fe}from"./framework.c2b5b5d6.js";function T(e){return se()?(oe(e),!0):!1}function y(e){return typeof e=="function"?e():ue(e)}const ee=typeof window<"u",de=e=>e!=null,at=(e,n,t)=>Math.min(t,Math.max(n,e)),D=()=>{};function te(e,n){function t(...r){return new Promise((a,l)=>{Promise.resolve(e(()=>n.apply(this,r),{fn:n,thisArg:this,args:r})).then(a).catch(l)})}return t}const ne=e=>e();function ve(e,n={}){let t,r,a=D;const l=i=>{clearTimeout(i),a(),a=D};return i=>{const c=y(e),d=y(n.maxWait);return t&&l(t),c<=0||d!==void 0&&d<=0?(r&&(l(r),r=null),Promise.resolve(i())):new Promise((u,s)=>{a=n.rejectOnCancel?s:u,d&&!r&&(r=setTimeout(()=>{t&&l(t),r=null,u(i())},d)),t=setTimeout(()=>{r&&l(r),r=null,u(i())},c)})}}function me(e=ne){const n=b(!0);function t(){n.value=!1}function r(){n.value=!0}const a=(...l)=>{n.value&&e(...l)};return{isActive:ie(n),pause:t,resume:r,eventFilter:a}}function pe(e,n=!1,t="Timeout"){return new Promise((r,a)=>{setTimeout(n?()=>a(t):r,e)})}function re(e){return e}function we(e,n=200,t={}){return te(ve(n,t),e)}function lt(e,n=200,t={}){const r=b(e.value),a=we(()=>{r.value=e.value},n,t);return F(e,()=>a()),r}function ye(e,n=!0){K()?Z(e):n?e():U(e)}const he=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Se=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function _e(e,n,t,r){let a=e<12?"AM":"PM";return r&&(a=a.split("").reduce((l,f)=>l+=`${f}.`,"")),t?a.toLowerCase():a}function be(e,n,t={}){var r;const a=e.getFullYear(),l=e.getMonth(),f=e.getDate(),i=e.getHours(),c=e.getMinutes(),d=e.getSeconds(),u=e.getMilliseconds(),s=e.getDay(),v=(r=t.customMeridiem)!=null?r:_e,p={YY:()=>String(a).slice(-2),YYYY:()=>a,M:()=>l+1,MM:()=>`${l+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(t.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(t.locales,{month:"long"}),D:()=>String(f),DD:()=>`${f}`.padStart(2,"0"),H:()=>String(i),HH:()=>`${i}`.padStart(2,"0"),h:()=>`${i%12||12}`.padStart(1,"0"),hh:()=>`${i%12||12}`.padStart(2,"0"),m:()=>String(c),mm:()=>`${c}`.padStart(2,"0"),s:()=>String(d),ss:()=>`${d}`.padStart(2,"0"),SSS:()=>`${u}`.padStart(3,"0"),d:()=>s,dd:()=>e.toLocaleDateString(t.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(t.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(t.locales,{weekday:"long"}),A:()=>v(i,c),AA:()=>v(i,c,!1,!0),a:()=>v(i,c,!0),aa:()=>v(i,c,!0,!0)};return n.replace(Se,(w,h)=>{var S,o;return(o=h??((S=p[w])==null?void 0:S.call(p)))!=null?o:w})}function ge(e){if(e===null)return new Date(Number.NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const n=e.match(he);if(n){const t=n[2]-1||0,r=(n[7]||"0").substring(0,3);return new Date(n[1],t,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(e)}function ut(e,n="HH:mm:ss",t={}){return g(()=>be(ge(y(e)),y(n),t))}var H=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,Pe=(e,n)=>{var t={};for(var r in e)Oe.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&H)for(var r of H(e))n.indexOf(r)<0&&Ee.call(e,r)&&(t[r]=e[r]);return t};function Fe(e,n,t={}){const r=t,{eventFilter:a=ne}=r,l=Pe(r,["eventFilter"]);return F(e,te(a,n),l)}var Ie=Object.defineProperty,De=Object.defineProperties,Me=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,W=(e,n,t)=>n in e?Ie(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ae=(e,n)=>{for(var t in n||(n={}))ae.call(n,t)&&W(e,t,n[t]);if(x)for(var t of x(n))le.call(n,t)&&W(e,t,n[t]);return e},$e=(e,n)=>De(e,Me(n)),Te=(e,n)=>{var t={};for(var r in e)ae.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&x)for(var r of x(e))n.indexOf(r)<0&&le.call(e,r)&&(t[r]=e[r]);return t};function Ne(e,n,t={}){const r=t,{eventFilter:a}=r,l=Te(r,["eventFilter"]),{eventFilter:f,pause:i,resume:c,isActive:d}=me(a);return{stop:Fe(e,n,$e(Ae({},l),{eventFilter:f})),pause:i,resume:c,isActive:d}}function M(e){var n;const t=y(e);return(n=t==null?void 0:t.$el)!=null?n:t}const O=ee?window:void 0,je=ee?window.document:void 0;function A(...e){let n,t,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,r,a]=e,n=O):[n,t,r,a]=e,!n)return D;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const l=[],f=()=>{l.forEach(u=>u()),l.length=0},i=(u,s,v,p)=>(u.addEventListener(s,v,p),()=>u.removeEventListener(s,v,p)),c=F(()=>[M(n),y(a)],([u,s])=>{f(),u&&l.push(...t.flatMap(v=>r.map(p=>i(u,v,p,s))))},{immediate:!0,flush:"post"}),d=()=>{c(),f()};return T(d),d}function Ce(e){return typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0}function it(...e){let n,t,r={};e.length===3?(n=e[0],t=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,t=e[0],r=e[1]):(n=e[0],t=e[1]):(n=!0,t=e[0]);const{target:a=O,eventName:l="keydown",passive:f=!1,dedupe:i=!1}=r,c=Ce(n);return A(a,l,u=>{u.repeat&&y(i)||c(u)&&t(u)},f)}function Ve(){const e=b(!1);return K()&&Z(()=>{e.value=!0}),e}function R(e){const n=Ve();return g(()=>(n.value,!!e()))}function xe(e,n={}){const{window:t=O}=n,r=R(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const l=b(!1),f=d=>{l.value=d.matches},i=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",f):a.removeListener(f))},c=fe(()=>{r.value&&(i(),a=t.matchMedia(y(e)),"addEventListener"in a?a.addEventListener("change",f):a.addListener(f),l.value=a.matches)});return T(()=>{c(),i(),a=void 0}),l}const C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V="__vueuse_ssr_handlers__",ze=Le();function Le(){return V in C||(C[V]=C[V]||{}),C[V]}function Re(e,n){return ze[e]||n}function He(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var We=Object.defineProperty,Q=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,k=(e,n,t)=>n in e?We(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Y=(e,n)=>{for(var t in n||(n={}))Qe.call(n,t)&&k(e,t,n[t]);if(Q)for(var t of Q(n))ke.call(n,t)&&k(e,t,n[t]);return e};const Ye={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},q="vueuse-storage";function st(e,n,t,r={}){var a;const{flush:l="pre",deep:f=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:d=!1,shallow:u,window:s=O,eventFilter:v,onError:p=m=>{console.error(m)}}=r,w=(u?ce:b)(n);if(!t)try{t=Re("getDefaultStorage",()=>{var m;return(m=O)==null?void 0:m.localStorage})()}catch(m){p(m)}if(!t)return w;const h=y(n),S=He(h),o=(a=r.serializer)!=null?a:Ye[S],{pause:N,resume:$}=Ne(w,()=>j(w.value),{flush:l,deep:f,eventFilter:v});return s&&i&&(A(s,"storage",I),A(s,q,E)),I(),w;function j(m){try{if(m==null)t.removeItem(e);else{const _=o.write(m),P=t.getItem(e);P!==_&&(t.setItem(e,_),s&&s.dispatchEvent(new CustomEvent(q,{detail:{key:e,oldValue:P,newValue:_,storageArea:t}})))}}catch(_){p(_)}}function z(m){const _=m?m.newValue:t.getItem(e);if(_==null)return c&&h!==null&&t.setItem(e,o.write(h)),h;if(!m&&d){const P=o.read(_);return typeof d=="function"?d(P,h):S==="object"&&!Array.isArray(P)?Y(Y({},h),P):P}else return typeof _!="string"?_:o.read(_)}function E(m){I(m.detail)}function I(m){if(!(m&&m.storageArea!==t)){if(m&&m.key==null){w.value=h;return}if(!(m&&m.key!==e)){N();try{w.value=z(m)}catch(_){p(_)}finally{m?U($):$()}}}}}function qe(e,n,t={}){const{root:r,rootMargin:a="0px",threshold:l=.1,window:f=O,immediate:i=!0}=t,c=R(()=>f&&"IntersectionObserver"in f),d=g(()=>{const w=y(e);return(Array.isArray(w)?w:[w]).map(M).filter(de)});let u=D;const s=b(i),v=c.value?F(()=>[d.value,M(r),s.value],([w,h])=>{if(u(),!s.value||!w.length)return;const S=new IntersectionObserver(n,{root:M(h),rootMargin:a,threshold:l});w.forEach(o=>o&&S.observe(o)),u=()=>{S.disconnect(),u=D}},{immediate:i,flush:"post"}):D,p=()=>{u(),v(),s.value=!1};return T(p),{isSupported:c,isActive:s,pause(){u(),s.value=!1},resume(){s.value=!0},stop:p}}function ot(e,{window:n=O,scrollTarget:t}={}){const r=b(!1);return qe(e,([{isIntersecting:a}])=>{r.value=a},{root:t,window:n}),r}const B=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function ct(e,n={}){const{document:t=je,autoExit:r=!1}=n,a=g(()=>{var o;return(o=M(e))!=null?o:t==null?void 0:t.querySelector("html")}),l=b(!1),f=g(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(o=>t&&o in t||a.value&&o in a.value)),i=g(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(o=>t&&o in t||a.value&&o in a.value)),c=g(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(o=>t&&o in t||a.value&&o in a.value)),d=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(o=>t&&o in t),u=R(()=>a.value&&t&&f.value!==void 0&&i.value!==void 0&&c.value!==void 0),s=()=>d?(t==null?void 0:t[d])===a.value:!1,v=()=>{if(c.value){if(t&&t[c.value]!=null)return t[c.value];{const o=a.value;if((o==null?void 0:o[c.value])!=null)return!!o[c.value]}}return!1};async function p(){if(!(!u.value||!l.value)){if(i.value)if((t==null?void 0:t[i.value])!=null)await t[i.value]();else{const o=a.value;(o==null?void 0:o[i.value])!=null&&await o[i.value]()}l.value=!1}}async function w(){if(!u.value||l.value)return;v()&&await p();const o=a.value;f.value&&(o==null?void 0:o[f.value])!=null&&(await o[f.value](),l.value=!0)}async function h(){await(l.value?p():w())}const S=()=>{const o=v();(!o||o&&s())&&(l.value=o)};return A(t,B,S,!1),A(()=>M(a),B,S,!1),r&&T(p),{isSupported:u,isFullscreen:l,enter:w,exit:p,toggle:h}}var Be=Object.defineProperty,Je=Object.defineProperties,Ge=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,G=(e,n,t)=>n in e?Be(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ze=(e,n)=>{for(var t in n||(n={}))Xe.call(n,t)&&G(e,t,n[t]);if(J)for(var t of J(n))Ke.call(n,t)&&G(e,t,n[t]);return e},Ue=(e,n)=>Je(e,Ge(n));const et={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]},ft=Object.assign({},{linear:re},et);function tt([e,n,t,r]){const a=(u,s)=>1-3*s+3*u,l=(u,s)=>3*s-6*u,f=u=>3*u,i=(u,s,v)=>((a(s,v)*u+l(s,v))*u+f(s))*u,c=(u,s,v)=>3*a(s,v)*u*u+2*l(s,v)*u+f(s),d=u=>{let s=u;for(let v=0;v<4;++v){const p=c(s,e,t);if(p===0)return s;const w=i(s,e,t)-u;s-=w/p}return s};return u=>e===n&&t===r?u:i(d(u),n,r)}function X(e,n,t){return e+t*(n-e)}function L(e){return(typeof e=="number"?[e]:e)||[]}function nt(e,n,t,r={}){var a,l;const f=y(n),i=y(t),c=L(f),d=L(i),u=(a=y(r.duration))!=null?a:1e3,s=Date.now(),v=Date.now()+u,p=typeof r.transition=="function"?r.transition:(l=y(r.transition))!=null?l:re,w=typeof p=="function"?p:tt(p);return new Promise(h=>{e.value=f;const S=()=>{var o;if((o=r.abort)!=null&&o.call(r)){h();return}const N=Date.now(),$=w((N-s)/u),j=L(e.value).map((z,E)=>X(c[E],d[E],$));Array.isArray(e.value)?e.value=j.map((z,E)=>{var I,m;return X((I=c[E])!=null?I:0,(m=d[E])!=null?m:0,$)}):typeof e.value=="number"&&(e.value=j[0]),N<v?requestAnimationFrame(S):(e.value=i,h())};S()})}function dt(e,n={}){let t=0;const r=()=>{const l=y(e);return typeof l=="number"?l:l.map(y)},a=b(r());return F(r,async l=>{var f,i;if(y(n.disabled))return;const c=++t;if(n.delay&&await pe(y(n.delay)),c!==t)return;const d=Array.isArray(l)?l.map(y):y(l);(f=n.onStarted)==null||f.call(n),await nt(a,a.value,d,Ue(Ze({},n),{abort:()=>{var u;return c!==t||((u=n.abort)==null?void 0:u.call(n))}})),(i=n.onFinished)==null||i.call(n)},{deep:!0}),F(()=>y(n.disabled),l=>{l&&(t++,a.value=r())}),T(()=>{t++}),g(()=>y(n.disabled)?r():a.value)}function vt(e={}){const{window:n=O,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:l=!0}=e,f=b(t),i=b(r),c=()=>{n&&(l?(f.value=n.innerWidth,i.value=n.innerHeight):(f.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};if(c(),ye(c),A("resize",c,{passive:!0}),a){const d=xe("(orientation: portrait)");F(d,()=>c())}return{width:f,height:i}}export{ft as T,ct as a,ot as b,at as c,ut as d,vt as e,dt as f,it as o,lt as r,y as t,st as u};
