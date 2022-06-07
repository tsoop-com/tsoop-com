<script setup>
import { ref, reactive } from 'vue'
import SimplexNoise from 'simplex-noise'
import { useClamp, useStorage, onKeyStroke, useFullscreen } from '@vueuse/core'


const art = ref()
const count = ref(0)
const increment = useClamp(useStorage('simplex-inc', 0.001), -0.005, 0.005)
const active = ref(true)
const zoom = useClamp(useStorage('simplex-zoom', 5), 1, 100)

onMounted(() => {
  setInterval(() => {
    if (!active.value) return
    count.value += Number(increment.value)
  }, 20)

  onKeyStroke(' ', (e) => {
    e.preventDefault()
    active.value = !active.value
  })
})

const { toggle } = useFullscreen(art)

const progress = computed(() => count.value)

const show = useStorage('simplex-mode', {
  box: false,
  line: false,
  circle: false,
  polygon: true,
})


const simplex = new SimplexNoise()

function getPoints(n, angles = 3) {
  let points = ''
  for (let i = 1; i <= angles; i++) {
    points += `${simplex.noise3D(n * i, n * i, progress.value) * 40 + 50},${simplex.noise3D((n + 1000) * i, (n + 5) * i + 1000, progress.value) * 40 + 50} `
  }
  return points
}



function drag(e) {
  const [x, y] = e.delta
  increment.value += x * 0.00001
  zoom.value += y * 0.1
}

</script>


<template lang="pug">
.flex.flex-col.items-center
  .flex
    .p-2.border-1.rounded-xl.m-2.flex.flex-wrap
      .flex
        input(type="checkbox" id="box" v-model="show.box" )
        label.p-2(for="box") Dots
      .flex
        input(type="checkbox" id="line" v-model="show.line" )
        label.p-2(for="line") Lines
      .flex
        input(type="checkbox" id="circle" v-model="show.circle" )
        label.p-2(for="circle") Disks
      .flex
        input(type="checkbox" id="polygon" v-model="show.polygon" )
        label.p-2(for="polygon") Polygons
  .flex.flex-col.relative(ref="art")
    button.p-2.shadow-lg.rounded-xl.m-1.absolute.left-6.top-6(@click="active = !active")
      la-play(v-if="!active")
      la-pause(v-else)
    button.p-2.shadow.rounded-xl.m-1.absolute.right-6.top-6(@click="toggle()")
      la-expand
    svg.max-h-100vh.m-auto.cursor-pointer(
      style="transform-box: fill-box"
      version="1.1",
      baseProfile="full",
      viewBox="-10 -10 100 100",
      xmlns="http://www.w3.org/2000/svg",
      v-drag="drag"
      )
      defs
        g(id="truchet")
          line(x2="2" stroke="currentColor" stroke-width="0.4")

      g.inc(transform="translate(2,-6)" stroke-width="0.2" )
        rect(width="80" height="2" opacity="0.2")
        text.font-mono.opacity-60(font-size="1.5" x="41" y="1.5" fill="currentColor") Speed {{ (increment * 2000).toFixed(1) }}
        line(x1="40" x2="40" y1="0" y2="2" stroke="currentColor" )
        line(y2="2" stroke="currentColor"  :transform="`translate(${(increment + 0.005) * 1000 * 8},0)`")
        line(x1="40" :x2="40 + increment * 1000 * 8" y1="2" y2="2" stroke-width="1" opacity="0.2" stroke="currentColor")

      g.zoom(transform="translate(-6,2)" stroke-width="0.2" )
        rect(width="2" height="80" opacity="0.2")
        text.font-mono.opacity-60(font-size="1.5" transform="rotate(-90) translate(-40,1.5)" fill="currentColor") Zoom {{ zoom.toFixed(0) }}
        line(x2="2" stroke="currentColor"  :transform="`translate(0,${zoom * .8})`")
      g(v-for="y in 20" :key="y")
        g(v-for="x in 20" :key="x"  :transform="`translate(${x * 4},${y * 4})`")
          g(
            v-if="show.circle" stroke-width="0.5"  
            :transform="`rotate(${simplex.noise3D(y / zoom, x / zoom, progress) * 180})`"
            )
            circle(
              :cx="0"
              :cy="0"
              fill="none"
              :stroke-width="simplex.noise3D(y / zoom, x / zoom, progress) + 1"
              :stroke="`hsla(${simplex.noise3D(y / zoom, x / zoom, progress) * 180},50%,50%,1)`"
              :style="{ transform: `rotate3d(1,1,1,${simplex.noise3D(y / zoom, x / zoom, progress) * 180 + 90}deg)` }"
              :r="1"
              )
            //- use(href="#truchet")
          g(v-if="show.box")
            rect(
              :fill="`hsla(${simplex.noise3D(y / zoom, x / zoom, progress) * 180},50%,50%,1)`"
              :x="- 2"
              :y="- 2"
              rx="2"
              ry="2"
              width="4"
              height="4"
              )
          line(
            v-if="show.line"
            stroke="white"
            stroke-width="0.4"
            :x1="-2"
            :x2="2"
            :y1="0"
            :y2="0"
            :transform="`rotate(${simplex.noise3D(y / zoom, x / zoom, progress) * 180})`"
            )

      g(v-if="show.polygon")
        g(v-for="t in 3" :key="t")
          polygon.fltr.mix-blend-multiply(
            :points="getPoints(t)"
            :fill="`hsla(${simplex.noise3D(t * t * 20, t * (zoom / 5000) * 100 + 900, progress) * 180},50%,50%,1)`"
            )
          line.mix-blend-difference(
            stroke="white"
            :stroke-width="Math.pow(simplex.noise3D(t + 5, t * (zoom / 500) + 5, progress), 2) * 10 + 1"
            :x1="Math.pow(simplex.noise3D(t + 5, t + 5, progress), 2) * 40 + 40"
            :y1="Math.pow(simplex.noise3D(t + 10, t + 10, progress), 2) * 40 + 40"
            :x2="simplex.noise3D(t + 20, t + 20, progress) * 40 + 40"
            :y2="simplex.noise3D(t + 30, t + 30, progress) * 40 + 40"
          )
          circle.mix-blend-screen(
            :fill="`hsla(${simplex.noise3D(t * t * (zoom / 5000), t * 300 + 600, progress) * 180},50%,50%,1)`"
            :cx="simplex.noise3D(t + t * 20, t * 40 + 20, progress) * 30 + 40"
            :cy="simplex.noise3D(t * t + 200, t * 40 - 10, progress) * 30 + 40"
            :r="simplex.noise3D(t * 20 * (zoom / 5000), t + 220, progress) * 10 + 15"
          )

</template>


<style lang="postcss" scoped>
.cell {
  @apply p-2 m-1px rounded sm: (p-4 m-2px rounded-lg) lg:(p-8 m-4px rounded-xl);
}
</style>