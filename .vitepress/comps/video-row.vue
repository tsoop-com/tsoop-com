<template lang="pug">
.flex.flex-wrap.py-16
  .flex-1.p-8.flex.items-center.justify-center(v-for="video in list", :key="video")
    iframe(
      width="360", 
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
</style>