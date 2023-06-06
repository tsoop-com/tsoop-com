<script setup>
import EventCard from './EventCard.vue'

import { usePages, cleanLink } from '../src/browser';
import { data } from '../pages.data.js'
import { useRoute } from 'vitepress';

const { pages } = usePages(useRoute(), data)
const months = pages.value['/events/']
</script>

<template lang='pug'>
.flex.flex-col.gap-8.py-8
  .flex.flex-col.bg-dark-400.rounded(v-for="month in months" :key="month")
    .p-4
      .text-2xl {{ month?.frontmatter?.title }}
      .text-md {{ month?.frontmatter?.description }}
    .flex.flex-wrap.gap-4.p-4
      event-card.p-2.bg-dark-400.shadow.flex-1(v-for="event in pages[cleanLink(month.url)].slice().reverse()" :key="event.frontmatter.date" :url="event.url" :event="event.frontmatter") 
</template>