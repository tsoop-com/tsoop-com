import{c as h,T as x}from"./index.1169a3bc.js";import{r as l,j as s,C as e,o as y,c as C,e as o,D as i}from"./framework.9816b6c1.js";import"./index.be8cf4d5.js";const w=`vec3 hsv2rgb(vec3 c) {
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
  vec4 layer1 = vec4(vec3(.0), 1.);

  for(float i = 0.; i < 12.; i++) {

    float angle = 2. * i * 3.1415 / 12.;

    float velocity = u_notes[int(i / 4.)][int(mod(i, 4.))];

    // float velocity = texture2D(u_notesTexture, vec2(i / 12., 0.5)).r;

    vec2 position = vec2(sin(angle), cos(angle)) * center.x * zoom + center;

    vec3 color = hsv2rgb(vec3(i / 12., velocity, .8));

    vec4 layer2 = circle(uv, position, radius * velocity + 1., color);

    layer1 = mix(layer1, layer2, layer2.a);
  }
  fragColor = layer1;
}`,E={__name:"ExpShader",setup(z){const r=l(0),v=s(()=>w),a=l(Array.from({length:12},()=>Math.random())),u=h(a,{duration:200,transition:x.easeInOutExpo}),m=s(()=>{const n=Array(16).fill(0);return u.value.forEach((c,t)=>n[t]=c),n});function p(n){r.value=(Math.sin(n.iTime)+1)/2}function f(){a.value=a.value.map(n=>Math.random())}return(n,c)=>{const t=e("gl-float"),d=e("gl-mat4"),_=e("gl-program"),g=e("gl-canvas");return y(),C("div",{class:"min-h-80vh h-100vh",onClick:f},[o(g,{onUpdate:p},{default:i(()=>[o(_,{name:"main",code:v.value},{default:i(()=>[o(t,{name:"u_light",value:r.value},null,8,["value"]),o(d,{name:"u_notes",value:m.value},null,8,["value"])]),_:1},8,["code"])]),_:1})])}}};export{E as default};
