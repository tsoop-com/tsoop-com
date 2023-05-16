<script setup>
import { useRoute } from 'vitepress'
import { pages } from '../composables/pages'

const route = useRoute()

const list = pages[route.path]
</script>

<template lang='pug'>
.flex.flex-col.gap-2
  .p-2 EVENTS
  .p-2(v-for="month in list" :key="month") 
    .text-lg {{ month.title }}
    .opacity-80 {{ month.description }}
    .flex.flex-col.gap-2
      event-card.p-2(v-for="event in pages[month.path]" :key="event.date" :event="event") 

        
</template>