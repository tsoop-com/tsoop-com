<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

import { data as routes } from '../../pages.data.js'
import { useDateFormat } from '@vueuse/core';

const { frontmatter } = useData()

const route = useRoute()

const page = computed(() => routes.find(r => {
  return r.url.replace(/\/[^/]*\.(html)$/, '/') == route.path.replace(/\/[^/]*\.(html)$/, '/')
}))

function scrollToTop() {
  window.scroll(0, 0)
}

const date = useDateFormat(() => page.value?.frontmatter?.date, 'DD MMMM YYYY, dddd')

</script>


<template lang="pug">
.page.relative.flex.flex-col.min-h-100vh

  template(v-if="frontmatter.home")
    content

  template(v-else)
    nav-parents
      a.font-mono(href="/" @click="scrollToTop()") tsoop
    transition(name="fade" mode="out-in")
      .opacity-50.hover-opacity-100.transition.z-0.overflow-hidden(
        :style="{background:`url(${page?.frontmatter?.cover}) no-repeat center/100%`, height: !page?.frontmatter?.cover ? '90px':'40vh' }"
        :key="page?.url"
        )
    .p-4.bg-dark-500.bg-opacity-60.backdrop-blur-md.-mt-20.sticky.top-14.z-20.max-w-55ch(v-if="page?.frontmatter")
      .text-sm {{ date }}
      .text-md
      .text-3xl.font-bold {{ page?.frontmatter?.title }}
      .text-md {{ page?.frontmatter?.description }}
    content.content.p-4.bg-dark-300
  nav-children
  nav-siblings
  .h-50.bg-dark-400.flex.flex-col.items-center.justify-center
    a.text-3xl(href="/") tsoop
    .text-sm.p-2 live multimedia generation
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

.content {
  flex: 1 1 auto;
}

.content p {
  @apply my-4 max-w-50ch;
}

nav a {
  @apply hover-bg-dark-50 bg-opacity-30 transition p-4 bg-dark-300 flex-auto flex items-center;
}

.content a {
  @apply underline
}

.content h1 {
  @apply text-3xl font-bold;
}

.content h2 {
  @apply text-2xl font-bold;
}
</style>