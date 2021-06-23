<template lang="pug">
.row
  .link.text-2xl Experiments:
  a.link(href="/exp/waves.html") Distorted waves
  a.link(href="/exp/blob.html") Morphing blob
  a.link(href="/exp/simplex.html") Simplex noise
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({

});
</script>

<style scoped>
.row {
  @apply flex flex-wrap justify-center items-center p-4 sm:p-16 bg-dark-900 text-light-500;
}

.link {
  @apply p-2 sm:p-4 text-center underline;
  flex: 1 1 150px;
}
</style>