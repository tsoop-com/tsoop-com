<template lang="pug">
.page
  content
</template>

<script setup>
import { useData } from 'vitepress'
import { defineProps } from 'vue'

const { site } = useData()
</script>

<style scoped>
.page {
  @apply bg-dark-200;
}
</style>