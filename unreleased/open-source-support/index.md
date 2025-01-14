---
title: Open Source Support
description: Live performed full album of tracks written during pandemic
date: 2023-07-23
cover: screen.png
openSource:
  title: Open Source Support
  list:
    - K2MwpOd8vEI
    - eLXAFOZaaTw
    - yq9eTAs3BX8
---

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<video-row v-bind="frontmatter.openSource" />
