<script setup>
import { useDateFormat } from '@vueuse/core'
import { computed } from 'vue';
const props = defineProps({
  event: {
    type: Object,
    default: () => ({})
  }
})

const formatted = useDateFormat(() => props.event?.date, 'DD MMMM YYYY')

// const colorHash = new ColorHash({
//   lightness: [0.15, 0.25, 0.35],
//   saturation: [0.05, 0.15, 0.25],
// })

// const backgroundColor = computed(() => colorHash?.hex(formatted.value)
// )
</script>

<template lang='pug'>
a.p-4.flex.flex-col.bg-dark-700.rounded.shadow-lg.hover-bg-dark-200.hover-shadow-xl.transition.gap-2.flex-1(:href="event.path" )
  img.max-w-full.min-w-50(:src="event.cover" v-if="event?.cover")
  .flex-1 
  .text-xs {{ formatted }}
  .text-xl.font-bold {{ event.title }}
  .text-md {{ event.description }}
</template>