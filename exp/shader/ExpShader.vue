<script setup>
import { ref, computed } from 'vue'
import shader from './start.glsl?raw'

const light = ref(0)

const shaderCode = computed(() => shader)

function glslUpdate(tickData) {
  console.log(tickData.iResolution);
  light.value = (Math.sin(tickData.iTime * 20) + 1) / 2;
}

</script>

<template lang='pug'>
.min-h-80vh.h-100vh
  gl-canvas(@update="glslUpdate")
    gl-program(name="main", :code="shaderCode")
      gl-float(name="u_light", :value="light")

</template>
