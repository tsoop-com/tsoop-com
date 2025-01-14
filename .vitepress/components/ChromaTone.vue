<template lang="pug">
.min-h-100vh.flex.flex-wrap.items-center.bg-dark-400.py-8.sm_py-16.shadow-2xl(ref="target")
  a.panel(href="https://chromatone.center",target="_blank")
    img.m-4(src="/img/holologo.svg")
  .panel(v-if="targetIsVisible || loaded")
    iframe.rounded-xl.mx-auto(
      width="320", 
      height="200", 
      src="https://www.youtube.com/embed/3_815sW-ZKY", 
      title="YouTube video player", 
      frameborder="0", 
      allowfullscreen
      )
    .py-4 
      img(src="/img/ct-logo.svg")
    .p-4.text-start
      .text-lg.mb-6 We explore music visually with Chromatone – the universal color notation system. It's a simple visual music language, that involves 12 spectral colors met with 12 chromatic notes. Try it today!
      a.underline.text-2xl.font-bold(href="https://chromatone.center",target="_blank") chromatone.center 
    
  
</template>

<script setup>
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const target = ref(null)
const loaded = ref(false)
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, t => {
  loaded.value = true
})
</script>

<style scoped>
.row {
  @apply ;
}

.panel {
  @apply py-2 flex flex-col text-start;
  flex: 1 1 300px;
}
</style>