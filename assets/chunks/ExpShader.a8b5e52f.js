import{r as v,j as i,C as a,o as d,c as h,e as o,D as m}from"./framework.9816b6c1.js";const R=`vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1., 2. / 3., 1. / 3., 3.);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6. - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0., 1.), c.y);
}

float hash11(float p) {
  p = fract(p * .1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

/**
* Draw a circle at vec2 \`pos\` with radius \`rad\` and
* color \`color\`.
*/
vec4 circle(vec2 uv, vec2 pos, float rad, vec3 color) {
  float d = length(pos - uv) - rad;
  float t = smoothstep(.0, 1., d);
  return vec4(color, 1. - t);
}

// uniform mat4 u_notes;

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  float zoom = .45;
  vec2 uv = fragCoord.xy;
  vec2 center = iResolution.xy * .5;
  float radius = zoom * .12 * iResolution.y;

  // Background layer
  vec4 layer1 = vec4(vec3(abs(sin(iTime * .5) * .1)), 1.);

  for(float i = 0.; i < 12.; i++) {

    float angle = 2. * i * 3.1415 / 12.;

    float velocity = u_notes[int(i / 4.)][int(mod(i, 4.))];

    // float velocity = texture2D(u_notesTexture, vec2(i / 12., 0.5)).r;

    vec2 position = vec2(sin(angle), cos(angle)) * center.x * zoom + center;

    vec3 color = hsv2rgb(vec3(i / 12., velocity, .8));

    vec4 layer2 = circle(uv, position, radius, color);

    layer1 = mix(layer1, layer2, layer2.a);
  }
  fragColor = layer1;
}`,C={__name:"ExpShader",setup(y){function _(n){const e=document.createElement("canvas").getContext("webgl"),l=new Float32Array(n.length*4);for(let t=0;t<n.length;t++)l[t*4]=n[t];const r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.length,1,0,e.RGBA,e.FLOAT,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),r}const u=v(0),g=i(()=>R),c=v(Array.from({length:12},()=>Math.random())),p=i(()=>_(c.value)),T=i(()=>{const n=Array(16).fill(0);return c.value.forEach((s,e)=>n[e]=s),n});function f(n){u.value=(Math.sin(n.iTime)+1)/2}function x(){c.value=c.value.map(n=>Math.random())}return(n,s)=>{const e=a("gl-float"),l=a("gl-mat4"),r=a("gl-image"),t=a("gl-program"),E=a("gl-canvas");return d(),h("div",{class:"min-h-80vh h-100vh",onClick:x},[o(E,{onUpdate:f},{default:m(()=>[o(t,{name:"main",code:g.value},{default:m(()=>[o(e,{name:"u_light",value:u.value},null,8,["value"]),o(l,{name:"u_notes",value:T.value},null,8,["value"]),o(r,{name:"u_notesTexture",value:p.value.value},null,8,["value"])]),_:1},8,["code"])]),_:1})])}}};export{C as default};
