<script setup>

import { data as events } from './events.data.js'
import EventCard from './EventCard.vue'
</script>

<template lang='pug'>
.flex.flex-col.gap-8.py-8
  .flex.flex-wrap.gap-6
    event-card.p-2.bg-dark-400.shadow.flex-1(v-for="event in events" :key="event.frontmatter.date" :url="event.url" :event="event.frontmatter") 

        
</template>