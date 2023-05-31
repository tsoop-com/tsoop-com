<script setup>
import BrowsePages from './BrowsePages.vue'
import { useData, useRoute } from 'vitepress'

import { data as routes } from '../../pages.data.js'

const { frontmatter } = useData()

const route = useRoute()

const page = computed(() => routes.find(r => {
  return r.url.replace(/\/[^/]*\.(html)$/, '/') == route.path.replace(/\/[^/]*\.(html)$/, '/')
}))

function scrollToTop() {
  window.scroll(0, 0)
}

</script>


<template lang="pug">
.page.relative.flex.flex-col
  template(v-if="!frontmatter.home")
    a.font-mono.left-3.fixed.top-4.z-100(href="/" @click="scrollToTop()") tsoop
    .max-h-80vh.sticky.top-0.opacity-50.z-0
      img(:src="page.frontmatter.cover" v-if="page?.frontmatter?.cover")
    .p-4(v-if="page?.frontmatter")
      .text-2xl.font-bold {{ page?.frontmatter.title }}
      .text-lg {{ page?.frontmatter.description }}
    content.p-4.bg-dark-300.mt-20
  template(v-else)
    content
  BrowsePages.z-200
</template>



<style lang="postcss">
.page {
  @apply bg-transparent;
}


.page>div>div>div {
  @apply rounded overflow-hidden;
}

.siblings a {
  @apply hover-bg-dark-100 bg-dark-400
}
</style>