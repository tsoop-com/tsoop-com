<script setup>
import { useRoute } from 'vitepress'
import { pages } from '../../composables/pages'

const route = useRoute()

const list = pages['/events/'].map(p => pages[p.path]).flat()

const today = new Date().toISOString()

const upcoming = list.filter(e => e.date >= today)
const past = list.filter(e => e.date < today).slice(0, 5)
</script>

<template lang='pug'>
.p-4.bg-dark-400.flex.flex-col.gap-8(v-if="upcoming.length>0")
  h3.text-4xl.ml-2 Upcoming events
  .flex.flex-wrap.gap-6
    event-card(v-for="event in upcoming" :key="event.date" :event="event")

.p-4.bg-dark-400.flex.flex-col.gap-8
  a.text-4xl.ml-2(href="/events/") Past events
  .flex.flex-wrap.gap-6
    event-card(v-for="event in past" :key="event.date" :event="event")
  a.p-4.bg-dark-200.rounded-lg.hover-bg-dark-600.transition.font-bold(href="/events/") Browse all  {{ list.length - upcoming.length }} past events
</template>