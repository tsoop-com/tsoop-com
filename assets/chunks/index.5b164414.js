import{i as p,h as f}from"./framework.2f81c02c.js";function v(t,o){const r=p(o),n=f(()=>c(r.value)),e=f(()=>n.value[a(t.path)]),i=f(()=>g(t.path,r.value)),l=f(()=>h(t.path,r.value));return{pages:n,siblings:l,children:e,parents:i}}function c(t){let o={};for(let r of t){const n=u(r.url.split("/").slice(0,-2).join("/"));o[n]=o[n]||[],o[n].push(r)}for(let r in o)o[r].sort((n,e)=>{var i,l;return(i=n.frontmatter)!=null&&i.date&&((l=e.frontmatter)!=null&&l.date)?n.frontmatter.date>e.frontmatter.date?-1:1:0});return o}function g(t,o){t=a(t);const r=[],n=t.split("/").filter(Boolean);for(let e=0;e<=n.length;e++){const i=u("/"+n.slice(0,e).join("/"));r.push(o.find(l=>a(l.url)==i))}return r.filter(Boolean)}function h(t,o){let r,n,e,i;const l=u(t.split("/").slice(0,-2).join("/")),s=c(o)[l];return s&&(i=s.length,e=s.findIndex(d=>a(d.url)==a(t)),e>=0&&e<=s.length&&(n=s[e+1]),e>0&&(r=s[e-1])),{next:n,prev:r,index:e,total:i}}function u(t){return t+=t.endsWith("/")?"":"/"}function a(t){return(t||"").replace(/\/[^/]*\.(html)$/,"/")}export{a as c,v as u};
