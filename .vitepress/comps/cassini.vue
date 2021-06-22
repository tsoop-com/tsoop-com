<template lang="pug">
.flex.flex-wrap.bg-dark-900.bg-cover.bg-no-repeat(
  style="background-image: url(/saturn.jpg)"
)
  .flex-1.p-32
    img.bounce(src="/cassini.png")
  .flex-1.p-16.flex.flex-col.items-center
    .bandcamp
      iframe(style="border: 0; width: 100%; height: 373px;", src="https://bandcamp.com/EmbeddedPlayer/album=3099555767/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/", seamless) <a href="https://tsoop.bandcamp.com/album/cassini-dreams">cassini dreams by tsoop</a>
    links.text-3xl.py-8(:links="album.links")
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  album: {
    type: Object,
    default: {}
  }
});
</script>

<style scoped>
.bounce {
  animation: bounce 12s infinite ease-in-out;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(18px) rotate(8deg);
  }
  100% {
    transform: translateY(0);
  }
}
</style>