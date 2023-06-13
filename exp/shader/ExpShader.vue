<script>
import shader from './start.glsl?raw'

export default {
  data() {
    return {
      light: 0,
      shaderCode: shader,
    }
  },
  methods: {
    glslUpdate(tickData) {
      //console.log(tickData);
      this.light = (Math.sin(tickData.iTime) + 1) / 2;
    }
  }
};
</script>

<template lang='pug'>
.absolute.top-0.right-0.left-0.bottom-0
  gl-canvas(@update="glslUpdate")
    gl-program(name="main", :code="shaderCode")
      gl-float(name="u_light", :value="light").

</template>
