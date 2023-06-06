<script setup>
const props = defineProps({
  page: { type: Object, default: () => ({}) }
})
</script>

<template>
  <a v-if="page" :href="page?.url" :style="{ background: `url(${page?.frontmatter?.cover})` }">
    <div>
      <slot></slot>
      <h3>{{ page?.frontmatter?.title }}</h3>
      <h4>{{ page?.frontmatter?.description }}</h4>
    </div>
  </a>
</template>

<style lang="postcss">
nav a {
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: 100% !important;
  background-clip: border-box;
  opacity: 0.5;
  transition: all 300ms ease;
}

nav a:hover {
  opacity: 1;
}

nav a>div {
  @apply flex flex-wrap items-center gap-0 p-4 bg-dark-300 bg-opacity-50 backdrop-blur-none hover-backdrop-blur-sm transition;
}

nav a h4 {
  font-size: 16px;
  flex: 1 1 100%;
}
</style>