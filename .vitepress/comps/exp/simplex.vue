<template lang="pug">
.flex.flex-col.items-center
  .flex.flex-col.p-8
    .flex.m-1px(v-for="y in 20", :key="y")
      .p-4.m-1px.rounded(
        v-for="x in 20", 
        :key="x", 
        :style="{ backgroundColor: `hsla(0,0%,100%,${simplex.noise3D(y / 5, x / 5, timestamp / 10000) / 2 + 0.5}` }"
        ) 
</template>

<script setup>
import { defineProps, ref } from 'vue'
import SimplexNoise from 'simplex-noise'
import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp({ offset: -Date.now() })

const z = ref(1)
const simplex = new SimplexNoise()
const value2d = simplex.noise2D(0, 1);


</script>

<style scoped>
</style>