<template lang="pug">
.row
  .flex-1.py-4.flex.items-center.justify-center(v-for="video in list", :key="video")
    iframe.shadow-2xl.rounded-lg(
      loading="lazy"
      width="320", 
      height="200", 
      :src="video", 
      title="YouTube video player", 
      frameborder="0", 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", 
      allowfullscreen
      )
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  list: {
    type: Array,
    default: []
  }
});
</script>

<style scoped>
.row {
  @apply flex flex-wrap py-8 sm:py-32 shadow-2xl;
}
</style>