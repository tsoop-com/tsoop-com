<template lang="pug">
.page
  content
</template>

<script setup>
import { useData } from 'vitepress'

const { site } = useData();
</script>

<style lang="postcss">
.page {
  @apply bg-transparent p-2;
}

.page>div>div {
  @apply gap-4 flex flex-col
}

.page>div>div>div {
  @apply rounded overflow-hidden;
}
</style>