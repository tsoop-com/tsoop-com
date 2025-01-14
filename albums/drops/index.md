---
full: true
title: drops
description: Colorful blobs moving freely in the unlimited space
date: 2023-08-23
cover: screen.png
videos:
  title: drops
  list:
    - _qNixUQ2ka8
    - XolLvOAoejo
    - SoT7O82cjWA
    - F_55F__x-SI
    - h-Vwh9Jhr88
    - _p0WiIEkknQ
albums:
  drops:
    title: drops
    description: Colorful blobs moving freely in the unlimited space
    link: https://drops.tsoop.com
    bandcamp: https://bandcamp.com/EmbeddedPlayer/album=3829524105/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/
    cover: /img/drops.jpg
    background: "#b77fb0"
    released: 20.10.2020
    links:
      spotify: https://open.spotify.com/album/2NDJPHtTYKTxaGEbROyCTu?si=zMtr_Bw-TmKTC1QoB61AOw
      apple: https://music.apple.com/ru/album/drops/1540753447
      youtube: https://music.youtube.com/playlist?list=OLAK5uy_km3FiWVOIj91gJ7-okHSn8XUsKl0T1YW8
      yandex: https://music.yandex.ru/album/12666310
      vk: https://vk.com/music/playlist/129086_50020670_f65a1ff6463168a5fc
      amazon: https://music.amazon.com/albums/B08ML4BCGT
      boomplay: https://www.boomplay.com/albums/17750669?from=search
      deezer: https://www.deezer.com/ru/album/184036962
---

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<album-row :album="frontmatter.albums.drops" />

<video-row v-bind="frontmatter.videos" />
