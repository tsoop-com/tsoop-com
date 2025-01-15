---
title: Sessions
description: Live improvisation recordings, aiming to catch the moment
date: 2023-06-30
cover: tech.jpg
impro:
  title: Live performances
  list:
    - X4Jh3f8Hmp4
    - l8b2_6i3sSE
---

Welcome to tsoop sessions!

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<video-row v-bind="frontmatter.impro" />
