<script setup>
import { useDateFormat } from '@vueuse/core'
import { computed } from 'vue';
import { cleanLink } from 'vitepress-pages'

const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  url: { type: String, default: '' },
  cover: { type: String, default: '' },
})

const formatted = useDateFormat(() => props.event?.date, 'DD MMMM YYYY')

const hashStr = str => str.split('').reduce((prev, curr) => Math.imul(31, prev) + curr.charCodeAt(0) | 0, 0);

const background = computed(() => {
  const hash = hashStr(props.url)
  const hue = hash % 360
  const saturation = 20 + Math.random() * 20;
  const lightness = 22 + Math.random() * 8;
  return `
  url(https://db.chromatone.center/assets/${props.cover}?w=300) no-repeat top/100%,
  linear-gradient(180deg, hsl(${hue},${saturation}%,${lightness}%) 0%, hsl(${hue}deg,${saturation - 10}%,${lightness + 5}%) 40%, hsl(${hue + 10}deg,${saturation}%,${lightness - 15}%) 100%)`
})
</script>

<template lang='pug'>
a.overflow-hidden.pt-42.flex.flex-col.bg-dark-700.shadow-lg.hover-bg-dark-200.hover-shadow-xl.transition.flex-1.opacity-50.hover-opacity-100.max-w-120.min-w-50(:href="url" :style="{background}" style="padding-bottom:0;padding-left:0; padding-right:0; flex: 1 1 auto" )
  .bg-dark-100.p-2.bg-opacity-50.backdrop-blur-sm.hover-backdrop-blur-lg.transition
    .flex-1
    .text-xs {{ formatted }}
    .text-2xl.font-bold {{ title }}
    .text-md {{ description }}
    pre.text-xs {{ props }}
</template>