---
title: Chromatone shader
description: A MIDI reactive shader with a circle of 12 Chromatone colored glowing notes.
date: 2023-06-18
---

Let's use GPU power to visualize music notes!

<script setup>
import { defineClientComponent } from 'vitepress'

const ExpShader = defineClientComponent(() => {
  return import('./ExpShader.vue')
})

</script>

<ExpShader></ExpShader>