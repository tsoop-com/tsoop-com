<template lang="pug">
.flex.flex-col.items-center
  .flex
    input(v-model="speed" id="speed" type="range", max="20000" min="1000")
    .p-2.border-1.rounded-xl.m-2
      input(type="checkbox" id="box" v-model="show.box" )
      label.p-2(for="box") Boxes
      input(type="checkbox" id="line" v-model="show.line" )
      label.p-2(for="line") Lines
      input(type="checkbox" id="circle" v-model="show.circle" )
      label.p-2(for="circle") Circles
      input(type="checkbox" id="polygon" v-model="show.polygon" )
      label.p-2(for="polygon") Polygons
    input(v-model="zoom" id="zoom" type="range" max="100" min="1" step="1")
  svg.max-h-full.m-auto(
    style="transform-box: fill-box"
    version="1.1",
    baseProfile="full",
    viewBox="-10 -10 100 100",
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
      circle(
        v-if="show.circle"
        v-for="x in 20" 
        :key="x"
        :cx="x * 4 - 2"
        :cy="y * 4 + 0.2"
        fill="none"
        stroke-width="0.1"
        :stroke="`hsla(${simplex.noise3D(y / zoom, x / zoom, timestamp / speed) * 180},50%,50%,1)`"
        :r="simplex.noise3D(y / zoom, x / zoom, timestamp / speed) * 4 + 4"
      )
    g(v-for="t in 3" :key="t")
      polygon.fltr.mix-blend-multiply(
        :points="getPoints(t)"
        :fill="`hsla(${simplex.noise3D(t * t * 20, t * 20, timestamp / speed) * 180},50%,50%,1)`"
        )
      line.mix-blend-difference(
        stroke="white"
        stroke-width="0.2"
        :x1="simplex.noise3D(t + 5, t + 5, timestamp / speed) * 40 + 40"
        :y1="simplex.noise3D(t + 10, t + 10, timestamp / speed) * 40 + 40"
        :x2="simplex.noise3D(t + 20, t + 20, timestamp / speed) * 40 + 40"
        :y2="simplex.noise3D(t + 30, t + 30, timestamp / speed) * 40 + 40"
      )
      circle.mix-blend-screen(
        :fill="`hsla(${simplex.noise3D(t * t, t + 100, timestamp / speed) * 180},50%,50%,1)`"
        :cx="simplex.noise3D(t + t * 20, t + 20, timestamp / speed) * 30 + 40"
        :cy="simplex.noise3D(t * t + 200, t - 10, timestamp / speed) * 30 + 40"
        :r="simplex.noise3D(t * 20, t + 220, timestamp / speed) * 10 + 15"
      )
</template>

<script setup>
import { defineProps, ref, reactive } from 'vue'
import SimplexNoise from 'simplex-noise'
import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp({ offset: -Date.now() })

const show = reactive({
  box: false,
  line: false,
  circle: false,
  polygon: true,
})

const z = ref(1)
const speed = ref(10000)
const exp = ref('box')
const zoom = ref(5)
const simplex = new SimplexNoise()

function getPoints(n) {
  let points = ''
  for (let i = 1; i < 4; i++) {
    points += `${simplex.noise3D(n * i, n * n * i, timestamp.value / speed.value) * 40 + 50},${simplex.noise3D((n * n + 5) * i, (n + 5) * i, timestamp.value / speed.value) * 40 + 50} `
  }
  return points
}


</script>

<style scoped>
.cell {
  @apply p-2 m-1px rounded sm:(p-4 m-2px rounded-lg) lg:(p-8 m-4px rounded-xl);
}
</style>