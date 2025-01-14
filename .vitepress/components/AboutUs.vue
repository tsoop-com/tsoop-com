<template lang="pug">
.flex.flex-wrap.text-light-800.bg-dark-500.py-16.gap-2(
  :style="{ backgroundColor: color }"
)
  .panel  
    .p-4.text-3xl tsoop is an independent project to explore collaborative music and multimedia self-expression

  .panel

    .p-4 <b>tsoop</b> is a collaborative multimedia project that focuses on promoting music and multimedia self-expression by creating a space where people can join together, share their unique approaches to music-making, and learn from one another. Our project encourages communication, coordination, and collaboration in creating harmonious music improvisations, from small groups to large masses, with the goal of producing beautiful music together. By offering guidance and technical support, we enable people to easily participate in music jams and create a joyful music experience that transcends cultural and linguistic barriers.

  .panel

    .p-4 Our project aims to make music accessible and enjoyable for everyone, regardless of their musical background. We believe that not a huge set of different instruments is needed to cover all the main sound ranges that people can produce. Instead, we have small portable acoustic and electronic setups that can engage almost anyone in a nice music jam. When people add their instruments, it becomes a real jam party. With our attentive guidance and tech support, we help people explore the world of tsoop and experience the magic of music together.
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: '#88485d'
  }
});
</script>

<style scoped>
.panel {
  @apply p-2 sm_p-8;
  flex: 1 1 300px;
}
</style>