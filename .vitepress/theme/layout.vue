<script setup>
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData()

function scrollToTop() {
  window.scroll(0, 0)
}
</script>


<template lang="pug">
.page.relative.flex.flex-col
  template(v-if="!frontmatter.home")
    a.font-mono.left-3.fixed.top-4.z-100(href="/" @click="scrollToTop()") tsoop
    //- img.max-w-full.sticky.top-0.opacity-50(:src="page.cover" v-if="page?.cover")
    content.p-4.bg-dark-300.mt-20
  template(v-else)
    content
</template>



<style lang="postcss">
.page {
  @apply bg-transparent;
}

.page>div>div {
  @apply gap-4 flex flex-col
}

.page>div>div>div {
  @apply rounded overflow-hidden;
}

.siblings a {
  @apply hover-bg-dark-100 bg-dark-400
}
</style>