<template lang="pug">
.flex.flex-wrap.bg-dark-900.align-center.py-32.shadow-2xl(
  :style="{ background: album.background, backgroundSize: 'cover' }"
)
  .flex-1.p-8.min-w-sm.flex.items-center
    img.rounded-xl(:class="{ [album.coverClass]: true }",:src="album.cover")
  .flex-1.p-16.flex.flex-col.items-center.justify-center.min-w-sm
    .bandcamp.w-full
      .text-lg.text-light-100.p-4 {{ album.description }} {{ album.color }}
      iframe.rounded-lg.shadow-2xl(style="border: 0; width: 100%; height: 373px;", :src="album.bandcamp", seamless) 
        a(:href="album.links.bandcamp") {{album.title}} by tsoop
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
