import{i as L,n as I,t as y,w as X,a as Q,p as U,b as Y,d as C}from"./index.be8cf4d5.js";import{j as E,r as P,w as k,E as Z,G as ee,H as te,p as ne}from"./framework.9816b6c1.js";function F(e){var n;const t=y(e);return(n=t==null?void 0:t.$el)!=null?n:t}const A=L?window:void 0,re=L?window.document:void 0;function V(...e){let n,t,s,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,s,u]=e,n=A):[n,t,s,u]=e,!n)return I;Array.isArray(t)||(t=[t]),Array.isArray(s)||(s=[s]);const o=[],f=()=>{o.forEach(r=>r()),o.length=0},c=(r,a,p,v)=>(r.addEventListener(a,p,v),()=>r.removeEventListener(a,p,v)),d=k(()=>[F(n),y(u)],([r,a])=>{f(),r&&o.push(...t.flatMap(p=>s.map(v=>c(r,p,v,a))))},{immediate:!0,flush:"post"}),w=()=>{d(),f()};return C(w),w}function le(e){return typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0}function Ae(...e){let n,t,s={};e.length===3?(n=e[0],t=e[1],s=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,t=e[0],s=e[1]):(n=e[0],t=e[1]):(n=!0,t=e[0]);const{target:u=A,eventName:o="keydown",passive:f=!1,dedupe:c=!1}=s,d=le(n);return V(u,o,r=>{r.repeat&&y(c)||d(r)&&t(r)},f)}function ae(){const e=P(!1);return te()&&ne(()=>{e.value=!0}),e}function G(e){const n=ae();return E(()=>(n.value,!!e()))}const M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z="__vueuse_ssr_handlers__",ue=se();function se(){return z in M||(M[z]=M[z]||{}),M[z]}function oe(e,n){return ue[e]||n}function ie(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var ce=Object.defineProperty,q=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,R=(e,n,t)=>n in e?ce(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,$=(e,n)=>{for(var t in n||(n={}))fe.call(n,t)&&R(e,t,n[t]);if(q)for(var t of q(n))de.call(n,t)&&R(e,t,n[t]);return e};const ve={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},J="vueuse-storage";function Pe(e,n,t,s={}){var u;const{flush:o="pre",deep:f=!0,listenToStorageChanges:c=!0,writeDefaults:d=!0,mergeDefaults:w=!1,shallow:r,window:a=A,eventFilter:p,onError:v=i=>{console.error(i)}}=s,m=(r?Z:P)(n);if(!t)try{t=oe("getDefaultStorage",()=>{var i;return(i=A)==null?void 0:i.localStorage})()}catch(i){v(i)}if(!t)return m;const b=y(n),_=ie(b),l=(u=s.serializer)!=null?u:ve[_],{pause:D,resume:N}=X(m,()=>j(m.value),{flush:o,deep:f,eventFilter:p});return a&&c&&(V(a,"storage",O),V(a,J,g)),O(),m;function j(i){try{if(i==null)t.removeItem(e);else{const S=l.write(i),h=t.getItem(e);h!==S&&(t.setItem(e,S),a&&a.dispatchEvent(new CustomEvent(J,{detail:{key:e,oldValue:h,newValue:S,storageArea:t}})))}}catch(S){v(S)}}function T(i){const S=i?i.newValue:t.getItem(e);if(S==null)return d&&b!==null&&t.setItem(e,l.write(b)),b;if(!i&&w){const h=l.read(S);return typeof w=="function"?w(h,b):_==="object"&&!Array.isArray(h)?$($({},b),h):h}else return typeof S!="string"?S:l.read(S)}function g(i){O(i.detail)}function O(i){if(!(i&&i.storageArea!==t)){if(i&&i.key==null){m.value=b;return}if(!(i&&i.key!==e)){D();try{m.value=T(i)}catch(S){v(S)}finally{i?ee(N):N()}}}}}function pe(e,n,t={}){const{root:s,rootMargin:u="0px",threshold:o=.1,window:f=A,immediate:c=!0}=t,d=G(()=>f&&"IntersectionObserver"in f),w=E(()=>{const m=y(e);return(Array.isArray(m)?m:[m]).map(F).filter(Q)});let r=I;const a=P(c),p=d.value?k(()=>[w.value,F(s),a.value],([m,b])=>{if(r(),!a.value||!m.length)return;const _=new IntersectionObserver(n,{root:F(b),rootMargin:u,threshold:o});m.forEach(l=>l&&_.observe(l)),r=()=>{_.disconnect(),r=I}},{immediate:c,flush:"post"}):I,v=()=>{r(),p(),a.value=!1};return C(v),{isSupported:d,isActive:a,pause(){r(),a.value=!1},resume(){a.value=!0},stop:v}}function Ne(e,{window:n=A,scrollTarget:t}={}){const s=P(!1);return pe(e,([{isIntersecting:u}])=>{s.value=u},{root:t,window:n}),s}const W=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Ve(e,n={}){const{document:t=re,autoExit:s=!1}=n,u=E(()=>{var l;return(l=F(e))!=null?l:t==null?void 0:t.querySelector("html")}),o=P(!1),f=E(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(l=>t&&l in t||u.value&&l in u.value)),c=E(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(l=>t&&l in t||u.value&&l in u.value)),d=E(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(l=>t&&l in t||u.value&&l in u.value)),w=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(l=>t&&l in t),r=G(()=>u.value&&t&&f.value!==void 0&&c.value!==void 0&&d.value!==void 0),a=()=>w?(t==null?void 0:t[w])===u.value:!1,p=()=>{if(d.value){if(t&&t[d.value]!=null)return t[d.value];{const l=u.value;if((l==null?void 0:l[d.value])!=null)return!!l[d.value]}}return!1};async function v(){if(r.value){if(c.value)if((t==null?void 0:t[c.value])!=null)await t[c.value]();else{const l=u.value;(l==null?void 0:l[c.value])!=null&&await l[c.value]()}o.value=!1}}async function m(){if(!r.value)return;p()&&await v();const l=u.value;f.value&&(l==null?void 0:l[f.value])!=null&&(await l[f.value](),o.value=!0)}async function b(){await(o.value?v():m())}const _=()=>{const l=p();(!l||l&&a())&&(o.value=l)};return V(t,W,_,!1),V(()=>F(u),W,_,!1),s&&C(v),{isSupported:r,isFullscreen:o,enter:m,exit:v,toggle:b}}var me=Object.defineProperty,we=Object.defineProperties,ye=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,B=(e,n,t)=>n in e?me(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,_e=(e,n)=>{for(var t in n||(n={}))be.call(n,t)&&B(e,t,n[t]);if(H)for(var t of H(n))Se.call(n,t)&&B(e,t,n[t]);return e},ge=(e,n)=>we(e,ye(n));function he([e,n,t,s]){const u=(r,a)=>1-3*a+3*r,o=(r,a)=>3*a-6*r,f=r=>3*r,c=(r,a,p)=>((u(a,p)*r+o(a,p))*r+f(a))*r,d=(r,a,p)=>3*u(a,p)*r*r+2*o(a,p)*r+f(a),w=r=>{let a=r;for(let p=0;p<4;++p){const v=d(a,e,t);if(v===0)return a;const m=c(a,e,t)-r;a-=m/v}return a};return r=>e===n&&t===s?r:c(w(r),n,s)}function K(e,n,t){return e+t*(n-e)}function x(e){return(typeof e=="number"?[e]:e)||[]}function Ee(e,n,t,s={}){var u,o;const f=y(n),c=y(t),d=x(f),w=x(c),r=(u=y(s.duration))!=null?u:1e3,a=Date.now(),p=Date.now()+r,v=typeof s.transition=="function"?s.transition:(o=y(s.transition))!=null?o:Y,m=typeof v=="function"?v:he(v);return new Promise(b=>{e.value=f;const _=()=>{var l;if((l=s.abort)!=null&&l.call(s)){b();return}const D=Date.now(),N=m((D-a)/r),j=x(e.value).map((T,g)=>K(d[g],w[g],N));Array.isArray(e.value)?e.value=j.map((T,g)=>{var O,i;return K((O=d[g])!=null?O:0,(i=w[g])!=null?i:0,N)}):typeof e.value=="number"&&(e.value=j[0]),D<p?requestAnimationFrame(_):(e.value=c,b())};_()})}function De(e,n={}){let t=0;const s=()=>{const o=y(e);return typeof o=="number"?o:o.map(y)},u=P(s());return k(s,async o=>{var f,c;if(y(n.disabled))return;const d=++t;if(n.delay&&await U(y(n.delay)),d!==t)return;const w=Array.isArray(o)?o.map(y):y(o);(f=n.onStarted)==null||f.call(n),await Ee(u,u.value,w,ge(_e({},n),{abort:()=>{var r;return d!==t||((r=n.abort)==null?void 0:r.call(n))}})),(c=n.onFinished)==null||c.call(n)},{deep:!0}),k(()=>y(n.disabled),o=>{o&&(t++,u.value=s())}),C(()=>{t++}),E(()=>y(n.disabled)?s():u.value)}export{Ve as a,Ne as b,De as c,Ae as o,Pe as u};
