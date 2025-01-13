<script setup>
import { useDateFormat } from '@vueuse/core';
import { computed } from 'vue'

const props = defineProps({
  page: { type: Object, default: () => ({}) }
})

const p = computed(() => props?.page?.frontmatter || {})

const date = useDateFormat(p.value?.date, 'DD MMMM YYYY')

</script>

<template lang="pug">
a.card.opacity-80.hover-opacity-100.transition.flex.items-center(v-if="p?.title", :href="page?.url", :style="{ background: `url(${p?.cover})` }")
  .flex.flex-col.items-start.gap-4.p-16.m-8.bg-dark-300.bg-opacity-50.backdrop-blur-none.transition.hover-backdrop-blur-sm
    slot
    h3.text-4xl {{ p?.title }}
    h4.text-xl {{ p?.description }}
    h5.text-lg(v-if="p?.layout=='event'") {{ date }}
</template>

<style scoped lang="postcss">
.card {
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: 150% !important;
  background-clip: border-box;
}
</style>