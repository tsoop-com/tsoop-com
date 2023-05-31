<script setup>
import EventCard from './EventCard.vue'

import { data as events } from './events.data.js'

const today = new Date().toISOString()

const upcoming = events.filter(e => e.frontmatter.date >= today)
const past = events.filter(e => e.frontmatter.date < today).slice(0, 5)
</script>

<template lang='pug'>
.p-4.bg-dark-400.flex.flex-col.gap-8(v-if="upcoming.length>0")
  h3.text-4xl.ml-2 Upcoming events
  .flex.flex-wrap.gap-6
    event-card(v-for="event in upcoming" :url="event.url" :key="event.url" :event="event.frontmatter")

.p-4.bg-dark-400.flex.flex-col.gap-8
  a.text-4xl.ml-2(href="/events/") Past events
  .flex.flex-wrap.gap-6
    event-card(v-for="event in past" :key="event.url" :event="event.frontmatter" :url="event.url")
  a.p-4.bg-dark-200.rounded-lg.hover-bg-dark-600.transition.font-bold(href="/events/") Browse all  {{ past.length }} past events
</template>