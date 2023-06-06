<script setup>
import { useChildren } from './browser';
import { data } from '../pages.data.js'
import NavCard from './NavCard.vue';
import { useRoute } from 'vitepress';

const children = useChildren(useRoute(), data)
</script>

<template lang='pug'>
nav.flex.flex-wrap(v-if="children" aria-label="children")
  NavCard(:page="child" v-for="child in children" :key="child")
</template>