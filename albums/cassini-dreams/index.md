---
title: Cassini Dreams
description: Tribute to the Cassini-Huygnes Saturn exploration space mission (2017)
date: 2017-09-01
full: true
cover: saturn.jpg
albums:
  cassini:
    title: Cassini Dreams
    description: Tribute to the Cassini-Huygnes Saturn exploration space mission
    cover: /img/cassini.png
    coverClass: bounce
    background: url('/img/saturn.jpg') no-repeat center
    released: 01.09.2017
    bandcamp: https://bandcamp.com/EmbeddedPlayer/album=3099555767/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/
    links:
      spotify: https://open.spotify.com/album/6yU61kt9BTiKsy4CHoS29v
      apple: https://music.apple.com/us/album/cassini-dreams/1500023423
      youtube: https://music.youtube.com/playlist?list=OLAK5uy_np3dWefMN3gkTgpdhz5FyaInVb3z5-MZk
      yandex: https://music.yandex.ru/album/9847367
      vk: https://vk.com/music/album/129086_50020668
      amazon: https://www.amazon.com/Cassini-Dreams-tsoop/dp/B084J78HQF
      boomplay: https://www.boomplay.com/albums/7454561
      deezer: https://www.deezer.com/ru/album/130687022
---

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<album-row :album="frontmatter.albums.cassini" />
