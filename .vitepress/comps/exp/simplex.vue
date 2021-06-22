<template lang="pug">
.flex.flex-col
  input(type="range", v-model="z",min="0",max="200")
  p {{ z }}
  .flex.flex-col
    .p-1.flex(v-for="y in 50", :key="y")
      .p-1.m-1(
        v-for="x in 50", 
        :key="x", 
        :style="{ backgroundColor: `hsla(0,0%,100%,${simplex.noise3D(y, x / 10, z / 100) / 2 + 0.5}` }"
        ) 
</template>

<script setup>
import { defineProps, ref } from 'vue'
import SimplexNoise from 'simplex-noise'

const z = ref(1)
const simplex = new SimplexNoise()
const value2d = simplex.noise2D(0, 1);


</script>

<style scoped>
</style>