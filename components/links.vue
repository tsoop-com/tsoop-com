<template lang="pug">
.flex.flex-wrap.justify-center(
  :style="{ backgroundColor: color }"
)
  link-button(
    v-for="(link,service) in links"
    :url="link"
    :service="service"
    )
</template>

<script setup>
const props = defineProps({
  links: {
    type: Object,
    default: {}
  },
  color: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
</style>