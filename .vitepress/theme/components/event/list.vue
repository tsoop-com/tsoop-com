<script setup>
import { useRoute } from 'vitepress'
import { pages } from '../../composables/pages'

const route = useRoute()

const list = pages[route.path]


</script>

<template lang='pug'>
.flex.flex-col.gap-8.py-8
  .p-0.flex.flex-col.gap-6(v-for="month in list" :key="month") 
    .p-4.bg-dark-800
      .text-sm.opacity-50 {{ month.title }}
      .opacity-80.text-3xl {{ month.description }}
    .flex.flex-wrap.gap-6
      event-card.p-2.bg-dark-400.shadow.flex-1(v-for="event in pages[month.path]" :key="event.date" :event="event") 

        
</template>