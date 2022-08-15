<template lang="pug">
.row
  .link.text-2xl Experiments:
  a.link(href="/exp/wave/") Distorted waves
  a.link(href="/exp/blob/") Morphing blob
  a.link(href="/exp/simplex/") Simplex noise
  a.link(href="/exp/hydra/") Hydra synth
</template>

<script setup>
</script>

<style lang="postcss" scoped>
.row {
  @apply flex flex-wrap justify-center items-center p-4 sm: p-16 bg-dark-900 text-light-500;
}

.link {
  @apply p-2 sm: p-4 text-center underline;
  flex: 1 1 150px;
}
</style>