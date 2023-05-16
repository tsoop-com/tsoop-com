<script setup>
const props = defineProps({
  event: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template lang='pug'>
a.p-2.flex.flex-col(:href="event.path")
  img.max-w-80(:src="event.cover" v-if="event?.cover")
  .text-xs {{ event.date }}
  .text-lg {{ event.title }}
  .text-sm {{ event.description }}
</template>