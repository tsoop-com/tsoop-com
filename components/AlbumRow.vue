<template lang="pug">
.row.min-h-100vh(
  :id="album.title.split(' ').join('-')"
  :style="{ background: album.background, backgroundSize: 'cover' }"
  ref="target"
)
  .panel
    img.rounded-xl(:class="{ [album.coverClass]: true }",:src="album.cover")
  .panel
    .bandcamp.w-full.flex.flex-col
      a.text-4xl.text-bold.px-4(:href="`#${album.title.split(' ').join('-')}`") {{ album.title }}
      .text-lg.text-light-100.p-4 {{ album.description }}
      iframe.rounded-lg.shadow-2xl(
        style="border: 0; width: 100%; height: 373px;", 
        :src="album.bandcamp"
        loading="lazy"
        seamless
        ) 
        a(:href="album?.links?.bandcamp") {{ album?.title }} by tsoop
    a.text-light-100.mt-8.mr-auto.ml-4(:href="album.link" v-if="album?.link" target="_blank") {{ album.link }}
    links.text-3xl.py-8(:links="album.links" v-if="album?.links")
</template>

<script setup>
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const target = ref(null)
const loaded = ref(false)
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, t => {
  if (t) loaded.value = true
})


const props = defineProps({
  album: {
    type: Object,
    default: {}
  }
});

</script>

<style scoped lang="postcss">
.panel {
  @apply flex flex-col items-center justify-center p-2 sm_p-8;
  flex: 1 1 300px;
}

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
