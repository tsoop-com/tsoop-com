<template lang="pug">
.page
  content
</template>

<script setup>
import { useData } from 'vitepress'

const { site } = useData();
</script>

<style scoped>
.page {
  @apply bg-dark-200;
}
</style>