<template lang="pug">
.row
  z-logo.flex-1
  .title live multimedia generation
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({

});
</script>

<style scoped>
.row {
  @apply flex flex-wrap justify-center items-center py-32;
}

.title {
  @apply text-4xl text-center text-light-100;
  flex: 1 1 200px;
}
</style>