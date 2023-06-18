import{r as g,j as l}from"./framework.4d4a218a.js";function h(e,n){const r=g(n),i=l(()=>c(r.value)),t=l(()=>i.value[a(e.path)]),m=l(()=>p(e.path,r.value)),o=l(()=>f(e.path,r.value));return{pages:i,siblings:o,children:t,parents:m}}function c(e){let n={};for(let r of e){if(r.url=="/")continue;const i=d(r.url.split("/").slice(0,-2).join("/"));n[i]=n[i]||[],n[i].push(r)}for(let r in n)n[r].sort((i,t)=>{var m,o;return(m=i.frontmatter)!=null&&m.date&&((o=t.frontmatter)!=null&&o.date)?i.frontmatter.date>t.frontmatter.date?-1:1:0});return n}function p(e,n){e=a(e);const r=[],i=e.split("/").filter(Boolean);for(let t=0;t<=i.length;t++){const m=d("/"+i.slice(0,t).join("/"));r.push(n.find(o=>a(o.url)==m))}return r.filter(Boolean)}function f(e,n){let r,i,t,m;const o=d(e.split("/").slice(0,-2).join("/")),s=c(n)[o];return s&&(m=s.length,t=s.findIndex(v=>a(v.url)==a(e)),t>=0&&t<=s.length&&(r=s[t+1]),t>0&&(i=s[t-1])),{next:i,prev:r,index:t,total:m}}function d(e){return e+=e.endsWith("/")?"":"/"}function a(e){return(e||"").replace(/\/[^/]*\.(html)$/,"/")}//!SECTION Reactive composables
//!SECTION non reactive getters
const x=JSON.parse(`[{"frontmatter":{"title":"Events","description":"tsoop is a base station for musicians to collaborate in any place and at any time.","cover":"/media_files/cover/events-cover.jpg"},"url":"/events/index.html"},{"frontmatter":{"title":"MGM#26","description":"Live acoustic sound explorations","date":"2023-06-22T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-06-26-cover.jpg"},"url":"/events/mgm/2023-06/26/index.html"},{"frontmatter":{"title":"GPU lights","description":"GLSL shader display","date":"2023-06-18T00:00:00.000Z","cover":"/media_files/cover/exp-shader-cover.png","links":["https://www.youtube.com/watch?v=f4s1h2YETNY"]},"url":"/exp/shader/index.html"},{"frontmatter":{"title":"MGM#25","description":"Rhythm section and Gift Band performing","date":"2023-06-15T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-06-25-cover.jpg"},"url":"/events/mgm/2023-06/25/index.html"},{"frontmatter":{"title":"MGM#24","description":"Handpans and bass dipping","date":"2023-06-08T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-06-24-cover.jpg"},"url":"/events/mgm/2023-06/24/index.html"},{"frontmatter":{"title":"MGM#23","description":"First meetup in June","date":"2023-06-01T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-06-23-mgm23.png"},"url":"/events/mgm/2023-06/23/index.html"},{"frontmatter":{"title":"June 2023","date":"2023-06-01T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-06-23-cover.jpeg"},"url":"/events/mgm/2023-06/index.html"},{"frontmatter":{"title":"MGM#22","description":"More research and fun","date":"2023-05-25T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-05-22-mgm22.png"},"url":"/events/mgm/2023-05/22/index.html"},{"frontmatter":{"title":"MGM#21","description":"Deeper jams","date":"2023-05-11T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-05-21-colors.jpg"},"url":"/events/mgm/2023-05/21/index.html"},{"frontmatter":{"title":"MGM#20","description":"9/8 Uno","date":"2023-05-04T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-05-20-cover.jpg"},"url":"/events/mgm/2023-05/20/index.html"},{"frontmatter":{"title":"May 2023","description":"Getting in touch","date":"2023-05-01T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-05-21-colors.jpg"},"url":"/events/mgm/2023-05/index.html"},{"frontmatter":{"title":"MGM#19","description":"Deep jams and space vibes","date":"2023-04-27T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-04-19-sunset.jpg"},"url":"/events/mgm/2023-04/19/index.html"},{"frontmatter":{"title":"MGM#18","description":"Learn and explore basic music theory","date":"2023-04-20T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-04-18-cover.jpg"},"url":"/events/mgm/2023-04/18/index.html"},{"frontmatter":{"title":"MGM#17","description":"Practice and explore","date":"2023-04-13T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-04-17-cover.jpg"},"url":"/events/mgm/2023-04/17/index.html"},{"frontmatter":{"title":"MGM#16","description":"Live streaming experiment","date":"2023-04-06T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-04-16-cover.jpeg"},"url":"/events/mgm/2023-04/16/index.html"},{"frontmatter":{"title":"April 2023","description":"Getting along","date":"2023-04-01T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-04-19-sunset.jpg"},"url":"/events/mgm/2023-04/index.html"},{"frontmatter":{"title":"MGM#15","description":"Let's create something!","date":"2023-03-30T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-03-15-03-30-music.jpg"},"url":"/events/mgm/2023-03/15/index.html"},{"frontmatter":{"title":"MGM#14","description":"New drum kit and ukulele","date":"2023-03-23T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-03-14-cover.jpg"},"url":"/events/mgm/2023-03/14/index.html"},{"frontmatter":{"title":"MGM#13","description":"More to talk and jam","date":"2023-03-16T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-03-13-cover.jpg"},"url":"/events/mgm/2023-03/13/index.html"},{"frontmatter":{"title":"MGM#12","description":"Metal drum and synth jams","date":"2023-03-09T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-03-12-cover.jpg"},"url":"/events/mgm/2023-03/12/index.html"},{"frontmatter":{"title":"MGM#11","description":"Share your passions and let's play!","date":"2023-03-02T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-03-11-cover.png"},"url":"/events/mgm/2023-03/11/index.html"},{"frontmatter":{"title":"March 2023","description":"Filling the space","date":"2023-03-01T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-03-15-03-30-music.jpg"},"url":"/events/mgm/2023-03/index.html"},{"frontmatter":{"title":"MGM#10","description":"Chromatone 2.0 presentation","date":"2023-02-23T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-02-10-cover.jpg"},"url":"/events/mgm/2023-02/10/index.html"},{"frontmatter":{"title":"MGM#9","description":"Making a game soundtrack","date":"2023-02-16T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-02-9-2023.02.16-music-geeks-meetup.jpg"},"url":"/events/mgm/2023-02/9/index.html"},{"frontmatter":{"title":"MGM#8","description":"Jamming","date":"2023-02-09T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-02-8-music-geeks-02.09.jpg"},"url":"/events/mgm/2023-02/8/index.html"},{"frontmatter":{"title":"MGM#7","description":"Bottle guitar upgraded","date":"2023-02-02T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-02-7-Thumbnail-2023.02.02.jpg"},"url":"/events/mgm/2023-02/7/index.html"},{"frontmatter":{"title":"February 2023","description":"Refining the format","date":"2023-02-01T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-02-10-cover.jpg"},"url":"/events/mgm/2023-02/index.html"},{"frontmatter":{"title":"MGM#6","description":"Bottle guitar and exploring A","date":"2023-01-26T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-01-6-cover.jpg"},"url":"/events/mgm/2023-01/6/index.html"},{"frontmatter":{"title":"MGM#5","description":"New guitar strings","date":"2023-01-19T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-01-5-music.jpg"},"url":"/events/mgm/2023-01/5/index.html"},{"frontmatter":{"title":"MGM#4","description":"Inventing the format","date":"2023-01-12T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-01-4-cover.jpg"},"url":"/events/mgm/2023-01/4/index.html"},{"frontmatter":{"title":"MGM#3","description":"New Year fun","date":"2023-01-05T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-01-3-thumbnail.jpg"},"url":"/events/mgm/2023-01/3/index.html"},{"frontmatter":{"title":"January 2023","description":"Figuring out the format","date":"2023-01-01T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2023-01-6-cover.jpg"},"url":"/events/mgm/2023-01/index.html"},{"frontmatter":{"title":"MGM#2","description":"Circular metronome on the table","date":"2022-12-29T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2022-12-2-cover.png"},"url":"/events/mgm/2022-12/2/index.html"},{"frontmatter":{"title":"MGM#1","description":"The first music meetup at Pirate Bay","date":"2022-12-22T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2022-12-1-maxresdefault.jpg"},"url":"/events/mgm/2022-12/1/index.html"},{"frontmatter":{"title":2022,"description":"Starting from scratch","date":"2022-12-01T00:00:00.000Z","cover":"/media_files/cover/events-mgm-2022-12-1-maxresdefault.jpg"},"url":"/events/mgm/2022-12/index.html"},{"frontmatter":{"title":"Music Geeks Meetups @ Pirate Bay","description":"Weekly gatherings to jam, share and create music visually","cover":"/media_files/cover/events-mgm-main.png"},"url":"/events/mgm/index.html"},{"frontmatter":{"title":"blob","links":["https://codepen.io/aaroniker/pen/YoqNRB"],"attractor":"https://codepen.io/strangerintheq/pen/bGqKpvJ","starfield":"https://codepen.io/soju22/pen/JjEqebK"},"url":"/exp/blob/index.html"},{"frontmatter":{"title":"Fleck houdini experiments","source":"https://codepen.io/georgedoescode/pen/eYvjOMN"},"url":"/exp/fleck/index.html"},{"frontmatter":{"title":"Hydra synth","subtitle":"Experiment with visual synth"},"url":"/exp/hydra/index.html"},{"frontmatter":{"title":"Experiments","date":"2022-01-02T00:00:00.000Z"},"url":"/exp/index.html"},{"frontmatter":{"title":"Simplex noise playground"},"url":"/exp/simplex/index.html"},{"frontmatter":{"title":"Waves","source":"https://codepen.io/Web_yuki1027/pen/yLgYpWM","cover":"/media_files/cover/exp-wave-cover.png"},"url":"/exp/wave/index.html"}]`);export{a as c,x as d,h as u};
