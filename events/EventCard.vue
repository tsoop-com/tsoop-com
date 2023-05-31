<script setup>
import { useDateFormat } from '@vueuse/core'
import { computed } from 'vue';
const props = defineProps({
  event: {
    type: Object,
    default: () => ({})
  },
  url: { type: String, default: '' }
})

const formatted = useDateFormat(() => props.event?.date, 'DD MMMM YYYY')

const background = computed(() => {
  const hue = Math.floor(60 + 120 * Math.random());
  const saturation = 20 + Math.random() * 20;
  const lightness = 22 + Math.random() * 8;
  return `linear-gradient(160deg, hsl(${hue},${saturation}%,${lightness}%) 0%, hsl(${hue},${saturation - 20}%,${lightness + 5}%) 70%, hsl(${hue},${saturation}%,${lightness - 10}%) 100%)`
})
</script>

<template lang='pug'>
a.p-4.flex.flex-col.bg-dark-700.rounded-lg.shadow-lg.hover-bg-dark-200.hover-shadow-xl.transition.gap-2.flex-1.max-w-90(:href="url" :style="{background}" )
  img.max-w-full.min-w-50(:src="event.cover" v-if="event?.cover")
  .flex-1
  .text-xs {{ formatted }}
  .text-3xl.font-bold {{ event.title }}
  .text-xl {{ event.description }}
</template>