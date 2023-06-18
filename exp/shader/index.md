---
title: GPU lights
description: GLSL shader display
date: 2023-06-18
cover: cover.png
links: 
  - https://www.youtube.com/watch?v=f4s1h2YETNY
---

<script setup>
import { defineClientComponent } from 'vitepress'

const ExpShader = defineClientComponent(() => {
  return import('./ExpShader.vue')
})

</script>

<ExpShader></ExpShader>
