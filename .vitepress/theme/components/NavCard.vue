<script setup>
import { computed } from 'vue'
import { cleanLink } from 'vitepress-pages'
const props = defineProps({
  page: { type: Object, default: () => ({}) }
})

const p = computed(() => props?.page?.frontmatter || {})

</script>

<template lang="pug">
a.card.opacity-80.hover-opacity-100.transition.flex.items-center(v-if="p?.title", :href="page?.url", :style="{ background: `url(${p?.cover})` }")
  .flex.flex-col.items-start.gap-4.p-16.m-8.bg-dark-300.bg-opacity-50.backdrop-blur-none.transition.hover-backdrop-blur-sm
    slot
    h3.text-32px {{ p?.title }}
    h4.text-16px {{ p?.description }}
</template>

<style scoped lang="postcss">
.card {
  background-repeat: no-repeat !important;
  background-position: top !important;
  background-size: 150% !important;
  background-clip: border-box;
}
</style>