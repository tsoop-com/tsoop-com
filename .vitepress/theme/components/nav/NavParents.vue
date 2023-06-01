<script setup>
import { useParents } from '../../composables/pages';

const parents = useParents()
</script>

<template lang='pug'>
nav.flex.flex-wrap.sticky.top-0.z-10.bg-dark-200.bg-opacity-50.backdrop-blur-lg(aria-label="parents")
  slot
  a.p-2.text-sm.sm-text-lg(v-for="parent in parents" :key="parent" :href="parent?.url") {{ parent.frontmatter.title }}
</template>