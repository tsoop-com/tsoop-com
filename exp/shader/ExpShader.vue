<script setup>
import { ref, computed } from 'vue'
import shader from './chromatone.glsl?raw'
import { useTransition } from '@vueuse/core';


// function createWebGLTexture(array) {
//   const canvas = document.createElement('canvas');
//   const gl = canvas.getContext('webgl');

//   const data = new Float32Array(array.length * 4);
//   for (let i = 0; i < array.length; i++) {
//     data[i * 4] = array[i];
//   }

//   const texture = gl.createTexture();
//   gl.bindTexture(gl.TEXTURE_2D, texture);
//   gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, array.length, 1, 0, gl.RGBA, gl.FLOAT, data);

//   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
//   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
//   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
//   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
//   return texture;
// }


const light = ref(0)

const shaderCode = computed(() => shader)

const notes = ref(Array.from({ length: 12 }, () => Math.random()))

const output = useTransition(notes)

// const notesTexture = computed(() => createWebGLTexture(notes.value))

const notesMat4 = computed(() => {
  const mat = Array(16).fill(0);
  output.value.forEach((v, i) => (mat[i] = v));
  return mat;
});

function glslUpdate(tickData) {
  // console.log(tickData.iResolution);
  light.value = (Math.sin(tickData.iTime) + 1) / 2;
}

function mixNotes() {
  notes.value = notes.value.map(el => Math.random())
}



</script>

<template lang='pug'>
.min-h-80vh.h-100vh(@click="mixNotes")
  gl-canvas(@update="glslUpdate")
    gl-program(name="main", :code="shaderCode")
      gl-float(name="u_light", :value="light")
      gl-mat4(name="u_notes", :value="notesMat4")
      //- gl-image(name="u_notesTexture" :value="notesTexture.value")
</template>
