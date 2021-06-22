<template lang="pug">
.flex.flex-col.items-center
  .fleck-demo.p-100(data-theme="blue")
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
const props = defineProps({

});


onMounted(async function() {
  if (CSS["paintWorklet"] === undefined) {
    await import("https://unpkg.com/css-paint-polyfill");
  }

  // The code for this worklet can be found here: https://github.com/georgedoescode/houdini-fleck-patterns/blob/main/fleck-worklet.js
  CSS.paintWorklet.addModule("https://unpkg.com/@georgedoescode/houdini-fleck");

  // Fix a weird Safari/Firefox polyfill issue...
  setTimeout(() => {
    document.querySelectorAll(".fleck-demo").forEach((el) => {
      el.style.width = "100%";
    });
  }, 250);
});


</script>

<style scoped>
.fleck-demo {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: red;
  border-radius: 50%;
  background-color: var(--background-color);
  background-image: paint(fleck);
}

.fleck-demo[data-theme="blue"] {
  --fleck-seed: 123449;
  --fleck-count: 580;
  --fleck-size-base: 4px;
  --fleck-color-1: #0193c1;
  --fleck-color-2: #74d8e6;
  --fleck-color-3: #0bc0e0;
  --fleck-color-4: #3ddaf5;
  --fleck-color-5: #e2f9fe;
  --fleck-color-6: #02313f;

  --background-color: #84dce2;
}
</style>