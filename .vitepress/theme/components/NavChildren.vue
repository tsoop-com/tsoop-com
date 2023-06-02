<script setup>
import { useChildren } from '../composables/pages';

const children = useChildren()
</script>

<template lang='pug'>
nav.flex.flex-wrap(v-if="children" aria-label="children")
  a.pt-16.pb-0.pl-0.opacity-50.hover-opacity-100.transition(
    v-for="child in children" :key="child" :href="child.url"
    :style="{background:`url(${child?.frontmatter?.cover}) no-repeat center/100% border-box` }"
    ) 
    .p-4.bg-dark-300.bg-opacity-50.backdrop-blur-none.hover-backdrop-blur-sm.transition {{ child.frontmatter.title }}
</template>