<template lang="pug">
.row.p-8
  z-logo.flex-1
  .flex-1.text-4xl.text-light-100 live multimedia generation
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
</style>