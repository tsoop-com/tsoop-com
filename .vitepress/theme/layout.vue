<template lang="pug">
.flex.flex-col.items-center 
  .text-2xl.mt-16.mb-8 {{ site.title }}
  z-logo
  content
</template>

<script setup>
import { useData } from 'vitepress'
import { defineProps } from 'vue'

const { site } = useData()
</script>

<style scoped>
</style>