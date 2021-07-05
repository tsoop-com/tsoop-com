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
  la-yandex(v-if="service == 'yandex'")
  uil-boombox(v-if="service == 'boomplay'")
  la-vk(v-if="service == 'vk'")
  la-github(v-if="service == 'github'")
  la-amazon(v-if="service == 'amazon'")
  jam-deezer-circle(v-if="service == 'deezer'")
</template>

<script setup>
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
  @apply p-2  rounded-lg m-1 text-light-100  cursor-pointer transition-all duration-300;
}
.link-button:hover {
  @apply bg-dark-800;
}
</style>