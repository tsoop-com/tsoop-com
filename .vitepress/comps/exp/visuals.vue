<template lang="pug">
.row
  .link.text-2xl Experiments:
  .link
    a(href="/exp/waves.html") Distorted waves
  .link
    a(href="/exp/blob.html") Morping blob
  .link
    a(href="/exp/fleck.html") Fleck
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
  @apply p-2 sm:p-4 text-center;
  flex: 1 1 150px;
}

.link a {
  @apply underline;
}
</style>