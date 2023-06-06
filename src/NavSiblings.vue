<script setup>
import { usePages } from './browser';
import { data } from '../pages.data.js'
import NavCard from './NavCard.vue';
import { useRoute } from 'vitepress';

const { parents, siblings } = usePages(useRoute(), data)
</script>

<template lang='pug'>
nav.grid.grid-cols-2
  NavCard(:page="siblings?.prev" v-if="siblings?.prev")
    .i-la-arrow-left
  NavCard(:page="parents[parents.length-2]" v-else-if="parents?.length>1")
    .i-la-arrow-up
  NavCard(:page="siblings?.next" v-if="siblings?.next" )
    .i-la-arrow-right
  NavCard(:page="parents[parents.length-2]" v-else-if="parents?.length>1")
    .i-la-arrow-up
</template>