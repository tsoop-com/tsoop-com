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
.p-4.bg-dark-400.flex.flex-col.gap-8
  h3.text-4xl.ml-2 Upcoming events
  .flex.flex-wrap.gap-4
    event-card(v-for="event in upcoming" :key="event.date" :event="event")
.p-4.bg-dark-400.flex.flex-col.gap-8
  h3.text-4xl.ml-2 Past events
  .flex.flex-wrap.gap-4
    event-card(v-for="event in past" :key="event.date" :event="event")
  a.p-4.bg-dark-800.rounded-lg.hover-bg-dark-300.transition(href="/events/") Browse all  {{ list.length - upcoming.length }} past events
</template>