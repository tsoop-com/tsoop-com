<template lang="pug">
.row
  a.panel(href="https://chromatone.center",target="_blank")
    img.m-4(src="/img/holologo.svg")
  .panel
    iframe.rounded-xl(
      width="320", 
      height="200", 
      src="https://www.youtube.com/embed/3_815sW-ZKY", 
      title="YouTube video player", 
      frameborder="0", 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", 
      allowfullscreen
      )
    .py-4 
      img(src="/img/ct-logo.svg")
    .p-4
      .text-lg.mb-6 We explore music visually with Chromatone – the universal color notation system. It's a simple visual music language, that involves 12 spectral colors met with 12 chromatic notes. Try it today!
      a.underline.text-2xl.font-bold(href="https://chromatone.center",target="_blank") chromatone.center 
    
  
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({

});
</script>

<style scoped>
.row {
  @apply flex flex-wrap items-center bg-light-900 py-8 sm:py-16 shadow-2xl;
}
.panel {
  @apply text-dark-300 py-2 flex flex-col items-center text-center;
  flex: 1 1 300px;
}
</style>