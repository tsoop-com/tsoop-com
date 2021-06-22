<template lang="pug">
.flex.flex-wrap.justify-center.py-16
  link-button(
    v-for="link in links"
    :url="link.url"
    :service="link.service"
    )
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  links: {
    type: Array,
    default: []
  }
});
</script>

<style scoped>
</style>