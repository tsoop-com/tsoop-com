<template lang="pug">
.flex.flex-col.items-center
  .flex
    input(v-model="speed" id="speed" type="range", max="20000" min="1000")
    .p-2.border-1.rounded-xl.m-2
      input(type="checkbox" id="box" v-model="show.box" )
      label.p-2(for="box") Boxes
      input(type="checkbox" id="line" v-model="show.line" )
      label.p-2(for="line") Lines
    input(v-model="zoom" id="zoom" type="range" max="100" min="1")
  svg.max-h-full.m-auto(
    style="transform-box: fill-box"
    version="1.1",
    baseProfile="full",
    viewBox="-4 -4 88 88",
    xmlns="http://www.w3.org/2000/svg",
    )
    g(v-for="y in 20" :key="y")
      rect(
        v-if="show.box"
        v-for="x in 20" 
        :key="x"
        :fill="`hsla(${simplex.noise3D(y / zoom, x / zoom, timestamp / speed) * 180},50%,50%,1)`"
        :x="x * 4 - 4"
        :y="y * 4 - 2"
        rx="2"
        ry="2"
        width="4"
        height="4"
      )
      line(
        v-if="show.line"
        v-for="x in 20" 
        :key="x"
        stroke-linecap="round"
        stroke="white"
        :transform-origin="`${x * 4 - 2}  ${y * 4}`"
        stroke-width="0.4"
        :x1="x * 4 - 2"
        :x2="x * 4 - 2"
        :y1="y * 4 - 1.5"
        :y2="y * 4 + 1.5"
        :transform="`rotate(${simplex.noise3D(y / zoom, x / zoom, timestamp / speed) * 180})`"
        )
</template>

<script setup>
import { defineProps, ref, reactive } from 'vue'
import SimplexNoise from 'simplex-noise'
import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp({ offset: -Date.now() })

const show = reactive({
  box: true,
  line: true
})

const z = ref(1)
const speed = ref(10000)
const exp = ref('box')
const zoom = ref(5)
const simplex = new SimplexNoise()


</script>

<style scoped>
.cell {
  @apply p-2 m-1px rounded sm:(p-4 m-2px rounded-lg) lg:(p-8 m-4px rounded-xl);
}
</style>