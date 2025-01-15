---
title: spring steam
description: shades of blooming flowers, melting ice and sounds of our souls’ inner strings
cover: spring.jpg
date: 2020-05-01
spring:
  title: Spring Steam
  list:
    - Vwt57rGZUWg
    - ZwuDowhVtaI
albums:
  spring:
    title: spring steam
    description: shades of blooming flowers, melting ice and sounds of our souls’ inner strings
    bandcamp: https://bandcamp.com/EmbeddedPlayer/album=3010274316/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/
    cover: /img/spring.jpg
    background: "#b0da97"
    released: 01.05.2020
    video:
      - Vwt57rGZUWg
      - ZwuDowhVtaI
---

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<album-row :album="frontmatter.albums.spring" />

<video-row v-bind="frontmatter.spring" />
