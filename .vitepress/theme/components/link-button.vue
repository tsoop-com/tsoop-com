<template lang="pug">
a.link-button(
  :href="url"
  target="_blank"
)
  la-instagram(v-if="service == 'instagram'")
  la-bandcamp(v-if="service == 'bandcamp'")
  la-youtube(v-if="service == 'youtube'")
  la-vimeo(v-if="service == 'vimeo'")
  la-spotify(v-if="service == 'spotify'")
  la-apple(v-if="service == 'apple'")
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  url: {
    type: String,
    default: 'https://www.tsoop.ru'
  },
  service: {
    type: String,
    default: 'instagram'
  }
});
</script>

<style scoped>
.link-button {
  @apply p-2 border-1 rounded-lg m-4 text-light-100 text-3xl cursor-pointer transition-all duration-300;
}
.link-button:hover {
  @apply bg-dark-800;
}
</style>