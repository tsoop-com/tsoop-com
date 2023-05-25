<script setup>
import { useData, useRoute } from 'vitepress'

import { usePage, useSiblings, useParents, pages } from '../composables/pages'
import { computed } from 'vue';

const route = useRoute()

const { frontmatter } = useData()

const page = computed(() => usePage(route.path))

const siblings = computed(() => useSiblings(route.path))
const parents = computed(() => useParents(route.path))

const children = computed(() => pages[page.value?.path])

function scrollToTop() {
  window.scroll(0, 0)
}
</script>


<template lang="pug">
.page.relative.flex.flex-col
  template(v-if="!frontmatter.home")
    a.font-mono.left-3.fixed.top-4.z-100(href="/" @click="scrollToTop()") tsoop
    img.max-w-full.sticky.top-0.opacity-50(:src="page.cover" v-if="page?.cover")
    content.p-4.bg-dark-300.mt-20
    .p-2.flex.flex-wrap.gap-4.z-200.bg-dark-400(v-if="children?.length>0")
      event-card(v-for="event in children" :key="event.date" :event="event")

    .flex.flex-wrap.z-200.siblings
      a.p-4.flex-1(v-if="siblings?.next" :href="siblings.next?.path") Prev
        .font-bold {{ siblings.next?.title }}
      a.p-4.flex-1(v-else-if="parents[parents.length-1]" :href="parents[parents.length-1]?.path") Up 
        .font-bold {{ parents[parents.length-1]?.title }} 
      a.p-4.flex-1(v-if="siblings?.prev" :href="siblings.prev?.path") Next 
        .font-bold {{ siblings.prev?.title }}
      a.p-4.flex-1(v-else-if="parents[parents.length-1]" :href="parents[parents.length-1]?.path") Up 
        .font-bold {{ parents[parents.length-1]?.title }} 
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