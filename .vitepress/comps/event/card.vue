<script setup>
import { useDateFormat } from '@vueuse/core'
import ColorHash from 'color-hash'
import { computed } from 'vue';
const props = defineProps({
  event: {
    type: Object,
    default: () => ({})
  }
})

const formatted = useDateFormat(() => props.event?.date, 'DD MMMM YYYY')

const backgroundColor = computed(() => new ColorHash({
  lightness: [0.15, 0.25, 0.35],
  saturation: [0.05, 0.15, 0.25],
}).hex(formatted.value)
)
</script>

<template lang='pug'>
a.p-4.flex.flex-col.bg-dark-600.rounded.shadow-lg.hover-bg-dark-400.hover-shadow-xl.transition.gap-2.flex-1(:href="event.path" :style="{backgroundColor}")
  img.max-w-full.min-w-50(:src="event.cover" v-if="event?.cover")
  .flex-1 
  .text-xs {{ formatted }}
  .text-xl.font-bold {{ event.title }}
  .text-md {{ event.description }}
</template>