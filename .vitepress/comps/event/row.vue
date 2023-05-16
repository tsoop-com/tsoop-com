<script setup>
import { useRoute } from 'vitepress'
import { pages } from '../../composables/pages'

const route = useRoute()

const list = pages['/events/'].map(p => pages[p.path]).flat()

const today = new Date().toISOString()

const upcoming = list.filter(e => e.date > today)
</script>

<template lang='pug'>
.p-4.bg-dark-400
  h3.text-4xl Upcoming events
  .flex.flex-wrap.gap-4.p-4
    event-card(v-for="event in upcoming" :key="event.date" :event="event")

    a.p-2.bg-dark-200.rounded-xl(href="/events/") Browse Past {{ list.length - upcoming.length }} Events
</template>