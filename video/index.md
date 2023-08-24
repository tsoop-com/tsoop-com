---
title: Videos
description: Music videos and live performance recordings
date: 2023-07-23
cover: 7.jpg
impro:
  title: Live performances
  list:
    - _p0WiIEkknQ
    - X4Jh3f8Hmp4
    - l8b2_6i3sSE

openSource:
  title: Open Source Support
  list:
    - K2MwpOd8vEI
    - eLXAFOZaaTw
    - yq9eTAs3BX8
circle:
  title: Circle Of Joy
  list:
    - 5aSf6ik05aY
    - h09USuZoeHM
drops:
  title: drops
  list:
    - _qNixUQ2ka8
    - XolLvOAoejo
    - SoT7O82cjWA
    - F_55F__x-SI
    - h-Vwh9Jhr88
spring:
  title: Spring Steam
  list:
    - Vwt57rGZUWg
    - ZwuDowhVtaI
---

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<video-row v-bind="frontmatter.openSource" />

<video-row v-bind="frontmatter.impro" />

<video-row v-bind="frontmatter.circle" />

<video-row v-bind="frontmatter.drops" />

<video-row v-bind="frontmatter.spring" />
