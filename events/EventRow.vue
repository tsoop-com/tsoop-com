<script setup>
import EventCard from './EventCard.vue'

import { ref } from 'vue';
import { usePages, cleanLink } from 'vitepress-pages/client';
import { data } from '../pages.data.js'
import { useRoute } from 'vitepress';

const events = ref([])

const props = defineProps({
  folder: { type: String, default: '/events/' }
})

const { pages } = usePages(useRoute(), data)

pages.value[props.folder].forEach(m => {
  const evs = pages.value[cleanLink(m.url)]
  if (evs) {
    evs.forEach(e => events.value.push(e))
  }
})

const today = new Date().toISOString()

const upcoming = events.value.filter(e => e.frontmatter.date >= today)
const past = events.value.filter(e => e.frontmatter.date < today).slice(0, 5)
</script>

<template lang='pug'>
.p-4.bg-dark-400.flex.flex-col.gap-8(v-if="upcoming.length>0")
  h3.text-4xl.ml-2 Upcoming events
  .flex.flex-wrap.gap-6
    event-card(v-for="event in upcoming" :url="event.url" :key="event.url" :event="event.frontmatter")

.p-4.bg-dark-400.flex.flex-col.gap-8
  .text-4xl.ml-2 Past events
  .flex.flex-wrap.gap-4
    event-card(v-for="event in past" :key="event.url" :event="event.frontmatter" :url="event.url")
  a.p-4.bg-dark-200.rounded-lg.hover-bg-dark-600.transition.font-bold(:href="folder") View all  {{ events.length - upcoming.length }} past events
</template>