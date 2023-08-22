import{B as l,d,R as m,D as u,b as f,S as p,W as _,C as v,e as w}from"./chunks/three.module.481d9ae2.js";import{e as g,o as n,c as o,f as x}from"./chunks/framework.c2b5b5d6.js";const S={id:"waves"},y=`
attribute vec3 position;

void main()	{
  gl_Position = vec4(position, 1.0);
}
`,b=`
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float xScale;
uniform float yScale;
uniform float distortion;

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
  
  float d = length(p) * distortion;
  
  float rx = p.x * (1.0 + d);
  float gx = p.x;
  float bx = p.x * (1.0 - d);

  float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
  float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
  float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);
  
  gl_FragColor = vec4(r, g, b, 1.0);
}
`,P={__name:"ExpWaves",setup(h){class a{constructor(){this.renderParam={clearColor:6710886,width:window.innerWidth,height:window.innerHeight},this.cameraParam={left:-1,right:1,top:1,bottom:1,near:0,far:-1},this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.mesh=null,this.isInitialized=!1}init(){this._setScene(),this._setRender(),this._setCamera(),this.isInitialized=!0}_setScene(){this.scene=new p}_setRender(){this.renderer=new _({canvas:document.getElementById("waves")}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(new v(this.renderParam.clearColor)),this.renderer.setSize(this.renderParam.width,this.renderParam.height)}_setCamera(){this.isInitialized||(this.camera=new w(this.cameraParam.left,this.cameraParam.right,this.cameraParam.top,this.cameraParam.bottom,this.cameraParam.near,this.cameraParam.far));const e=window.innerWidth,i=window.innerHeight;this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,i)}_render(){this.renderer.render(this.scene,this.camera)}onResize(){this._setCamera()}onRaf(){this._render()}}class s{constructor(e){this.canvas=document.getElementById("waves"),this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,this.uniforms={resolution:{type:"v2",value:[this.canvasWidth,this.canvasHeight]},time:{type:"f",value:0},xScale:{type:"f",value:1},yScale:{type:"f",value:.5},distortion:{type:"f",value:.05}},this.stage=e,this.mesh=null,this.xScale=3,this.yScale=.7,this.distortion=.1}init(){this._setMesh(),this._setGui()}_setMesh(){const e=[-1,-1,0,1,-1,0,-1,1,0,1,-1,0,-1,1,0,1,1,0],i=new l(new Float32Array(e),3),r=new d;r.setAttribute("position",i);const c=new m({vertexShader:y,fragmentShader:b,uniforms:this.uniforms,side:u});this.mesh=new f(r,c),this.stage.scene.add(this.mesh)}_render(){this.uniforms.time.value+=.01}_setGui(){this.xScale,this.yScale,this.distortion}onRaf(){this._render()}}return g(()=>{const t=new a;t.init();const e=new s(t);e.init(),window.addEventListener("resize",()=>{t.onResize()});const i=()=>{window.requestAnimationFrame(()=>{t.onRaf(),e.onRaf(),i()})};i()}),(t,e)=>(n(),o("canvas",S))}},z=JSON.parse('{"title":"Waves","description":"","frontmatter":{"title":"Waves","source":"https://codepen.io/Web_yuki1027/pen/yLgYpWM","cover":"cover.png"},"headers":[],"relativePath":"exp/wave/index.md","filePath":"exp/wave/index.md","lastUpdated":1685858920000}'),R={name:"exp/wave/index.md"},M=Object.assign(R,{setup(h){return(a,s)=>(n(),o("div",null,[x(P)]))}});export{z as __pageData,M as default};
