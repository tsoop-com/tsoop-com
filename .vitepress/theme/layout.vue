<script setup>
import { computed, ref } from "vue";
import { useData, useRoute } from "vitepress";
import { cleanLink, usePages } from "vitepress-pages";
import { useDateFormat, useFullscreen } from "@vueuse/core";

import { data } from "../../pages.data.js";

// IDK why is there an error of unused createCommentVNode, but this is a temporary fix
import { createCommentVNode } from "vue";
createCommentVNode();

const { frontmatter } = useData();

const route = useRoute();

const { pages, children, parents, siblings } = usePages(route, data);

const page = computed(() =>
  data.find((r) => {
    return cleanLink(r.url) == cleanLink(route.path);
  })
);

function scrollToTop() {
  window?.scroll(0, 0);
}

const date = useDateFormat(
  () => frontmatter.value?.date,
  "DD MMMM YYYY, dddd"
);

const container = ref();

const { isSupported, toggle, isFullscreen } = useFullscreen(container);
</script>

<template lang="pug">
.page.relative.flex.flex-col.min-h-100vh.gap-4

  template(v-if="!frontmatter.home && !frontmatter.full")


    transition(name="fade" mode="out-in")
      .opacity-50.hover-opacity-100.transition.z-0.overflow-hidden.h-100(
        :style="{background:`url(${page?.frontmatter?.cover}) no-repeat center/100%` }"
        :key="page?.url" )

    .mx-4.max-w-55ch.p-4.bg-dark-500.bg-opacity-60.backdrop-blur-md.-mt-20.z-20.flex.flex-col.justify-center.gap-2(v-if="frontmatter")
      nav#parents.font-mono.flex.flex-wrap.gap-4.items-baseline(aria-label="parents")
        a.p-1(href="/" @click="scrollToTop()") tsoop
        a.p-1(v-for="parent in parents.slice(0, -1)", :key="parent", :href="parent?.url") {{ parent?.frontmatter?.title }}
      .text-2xl.font-bold {{ frontmatter?.title }}
      .text-md {{ frontmatter?.description  }}
      .flex.flex-wrap.text-sm.opacity-60.gap-1
        span(v-if="frontmatter?.start_time") {{ frontmatter?.start_time?.slice(0,-3) }},  
        span(v-if="frontmatter?.place") @ {{ frontmatter?.place?.title }}
  .mx-4.max-w-55ch
    youtube-embed(v-if="frontmatter?.youtube_video" :video="`${frontmatter?.youtube_video}`")
  content.mx-4.content.bg-dark-300(
    :class="{ full: isFullscreen }"
    ref="container")

  footer.p-4.flex.flex-col.gap-16
    nav#children.flex.flex-wrap.gap-8(v-if="children", aria-label="children")
      nav-card(style="flex: 1 1 400px" :page="child", v-for="child in children", :key="child")

    nav#siblings.grid.grid-cols-1.sm-grid-cols-2.gap-6
      template(v-for="step in ['prev', 'next']", :key='step')
        nav-card(:page='siblings?.[step]', v-if='siblings?.[step]')
          .i-la-arrow-left(v-if="step == 'prev'") PREV
          .i-la-arrow-right(v-else='') NEXT
        nav-card(:page='parents[parents.length - 2]', v-else-if='parents?.length > 1')
          .i-la-arrow-up UP
  .h-50.bg-dark-400.flex.flex-col.items-center.justify-center.gap-4
    a.text-5xl(href="/") tsoop
    .text-lg.p-2 live multimedia generation
    a.text-sm(href="mailto:davay@tsoop.com") davay@tsoop.com
</template>

<style lang="postcss">
.page {
  @apply bg-transparent;
}

.page>div>div>div {
  @apply rounded overflow-hidden;
}

.siblings a {
  @apply hover-bg-dark-100 bg-dark-400;
}

.content {
  flex: 1 1 auto;
}

.content p {
  @apply m-4 max-w-50ch;
}


.content h1 {
  @apply text-3xl font-bold m-4;
}

.content h2 {
  @apply text-2xl font-bold m-4;
}
</style>
