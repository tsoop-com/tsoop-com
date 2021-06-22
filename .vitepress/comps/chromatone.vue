<template lang="pug">
.flex.flex-wrap.items-center.bg-light-600.py-16
  a.flex-1.p-8(href="https://chromatone.center",target="_blank")
    img(src="/img/holologo.svg")
  .flex-1.text-dark-300.p-8.flex.flex-col.items-center.text-center
    .py-8.flex.flex-col
      .py-4 
        img(src="/img/ct-logo.svg")
      .text-lg We explore music visually with Chromatone – the universal color notation system. It's a whole visual music language, that involves 12 spectral colors met with 12 chromatic notes. Try it today!
      a.mt-4.underline.text-2xl(href="https://chromatone.center",target="_blank") chromatone.center 
    iframe(
      width="360", 
      height="200", 
      src="https://www.youtube.com/embed/3_815sW-ZKY", 
      title="YouTube video player", 
      frameborder="0", 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", 
      allowfullscreen
      )
  
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({

});
</script>

<style scoped>
</style>