import{C as e,o as s,c as d,e as n,D as a,_ as u}from"./framework.9816b6c1.js";const v=`/* This animation is the material of my first youtube tutorial about creative
coding, which is a video in which I try to introduce programmers to GLSL
and to the wonderful world of shaders, while also trying to share my recent
passion for this community.
Video URL: https://youtu.be/f4s1h2YETNY
*/

//https://iquilezles.org/articles/palettes/
vec3 palette(float t){
  vec3 a=vec3(.5,.5,.5);
  vec3 b=vec3(.5,.5,.5);
  vec3 c=vec3(1.,1.,1.);
  vec3 d=vec3(.263,.416,.557);
  
  return a+b*cos(6.28318*(c*t+d));
}

void mainImage(out vec4 fragColor,in vec2 fragCoord){
  vec2 uv=(fragCoord*2.-iResolution.xy)/iResolution.y;
  vec2 uv0=uv;
  vec3 finalColor=vec3(0.);
  
  for(float i=0.;i<4.;i++){
    uv=fract(uv*1.5)-.5;
    
    float d=length(uv)*exp(-length(uv0));
    
    vec3 col=palette(length(uv0)+i*.4+iTime*.4);
    
    d=sin(d*8.+iTime)/8.;
    d=abs(d);
    
    d=pow(.01/d,1.2);
    
    finalColor+=col*d;
  }
  
  fragColor=vec4(finalColor,1.);
}

`,h={class:"absolute top-0 right-0 left-0 bottom-0"};function f(o,p,g,_,t,l){const i=e("gl-float"),r=e("gl-program"),c=e("gl-canvas");return s(),d("div",h,[n(c,{onUpdate:l.glslUpdate},{default:a(()=>[n(r,{name:"main",code:t.shaderCode},{default:a(()=>[n(i,{name:"u_light",value:t.light},null,8,["value"])]),_:1},8,["code"])]),_:1},8,["onUpdate"])])}const m={data(){return{light:0,shaderCode:v}},methods:{glslUpdate(o){this.light=(Math.sin(o.iTime)+1)/2}}},y=u(m,[["render",f]]);export{y as default};
