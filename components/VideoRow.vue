<script setup>
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps({
  title: { type: String, default: '' },
  list: {
    type: Array,
    default: () => ([])
  }
});

const target = ref(null)
const loaded = ref(false)
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, t => {
  loaded.value = true
})
</script>

<template lang="pug">
.flex.flex-col.gap-12.p-8.items-start.my-4.bg-dark-500(ref="target")
  .text-3xl {{ title }}
  .flex.flex-wrap.gap-16
    template(v-if="targetIsVisible || loaded")
      .flex-0.flex.items-center.justify-start(v-for="video in list", :key="video", )
        iframe.shadow-2xl.rounded-lg(
          loading="lazy"
          width="320", 
          height="200", 
          :src="`https://www.youtube.com/embed/${video}`", 
          title="YouTube video player", 
          frameborder="0", 
          allowfullscreen
          )
</template>



<style scoped lang="postcss">
.row {
  @apply bg-transparent;
}
</style>