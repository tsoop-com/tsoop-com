<script setup>
import { usePages } from '../composables/pages';

const { parents, siblings } = usePages()
</script>

<template lang='pug'>
nav.grid.grid-cols-2
  a(
    v-if="siblings.prev" :href="siblings.prev?.url"
    :style="{background:`url(${siblings.prev?.frontmatter?.cover}) no-repeat center/100% border-box` }"
    )
    .i-la-arrow-left
    .p-1 {{ siblings.prev.frontmatter.title }}
  a(v-else-if="parents.length>1" :href="parents[parents.length-2]?.url") 
    .i-la-arrow-up
    .p-1 {{ parents[parents.length-2].frontmatter.title }}
  a(v-if="siblings.next" :href="siblings.next?.url") 
    .i-la-arrow-right
    .p-1 {{ siblings.next.frontmatter.title }}
  a(v-else-if="parents.length>1" :href="parents[parents.length-2]?.url")
    .i-la-arrow-up
    .p-1  {{ parents[parents.length-2].frontmatter.title }}
</template>