<script setup>
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

// IDK why is there an error of unused createCommentVNode, but this is a temporary fix
import { createCommentVNode } from 'vue'
createCommentVNode()

import { data } from '../../pages.data.js'
import { useDateFormat } from '@vueuse/core';
import { cleanLink, usePages } from 'vitepress-pages'

const { frontmatter } = useData()

const route = useRoute()

const { pages, children, parents, siblings } = usePages(route, data)

const page = computed(() => data.find(r => {
  return cleanLink(r.url) == cleanLink(route.path)
}))

function scrollToTop() {
  window.scroll(0, 0)
}

const date = useDateFormat(() => page.value?.frontmatter?.date, 'DD MMMM YYYY, dddd')

</script>


<template lang="pug">
.page.relative.flex.flex-col.min-h-100vh.gap-4


  content(v-if="frontmatter.home")

  template(v-else)
    nav#parents.flex.flex-wrap.sticky.top-0.z-10.bg-dark-200.bg-opacity-50.backdrop-blur-lg(aria-label="parents")
      a.font-mono(href="/" @click="scrollToTop()") tsoop
      a.p-2.text-sm.sm-text-lg(v-for="parent in parents.slice(0, -1)", :key="parent", :href="parent?.url") {{ parent?.frontmatter?.title }}


    transition(name="fade" mode="out-in")
      .opacity-50.hover-opacity-100.transition.z-0.overflow-hidden(
        :style="{background:`url(${page?.frontmatter?.cover}) no-repeat center/100%`, height: !page?.frontmatter?.cover ? '90px':'40vh' }"
        :key="page?.url"
        )

    .p-4.bg-dark-500.bg-opacity-60.backdrop-blur-md.-mt-20.sticky.top-14.z-20.flex.flex-wrap.items-center.gap-2(v-if="page?.frontmatter")
      .text-2xl.font-bold {{ page?.frontmatter?.title }}
      .text-md {{ page?.frontmatter?.description }}
      .text-sm.opacity-60 {{ date }}

    content.content.p-4.bg-dark-300

  .p-2.flex.flex-col.gap-2
    nav#children.flex.flex-wrap.gap-2(v-if="children", aria-label="children")
      nav-card(:page="child", v-for="child in children", :key="child")
    nav#siblings.grid.grid-cols-2.gap-2
      template(v-for="step in ['prev', 'next']", :key='step')
        nav-card(:page='siblings?.[step]', v-if='siblings?.[step]')
          .i-la-arrow-left(v-if="step == 'prev'") PREV
          .i-la-arrow-right(v-else='') NEXT
        nav-card(:page='parents[parents.length - 2]', v-else-if='parents?.length > 1')
          .i-la-arrow-up UP
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