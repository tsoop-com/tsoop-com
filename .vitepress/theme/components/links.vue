<template lang="pug">
.flex.flex-wrap.justify-center
  link-button(
    v-for="(link,service) in links"
    :url="link"
    :service="service"
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