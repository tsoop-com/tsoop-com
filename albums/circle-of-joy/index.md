---
title: Circle of Joy & Remix Collab
description: Released music
date: 2022-09-16
cover: circle.jpg
full: true
videos:
  title: Circle Of Joy
  list:
    - 5aSf6ik05aY
    - h09USuZoeHM
albums:
  joy_collab:
    title: joy of collaboration
    description: A remix collaboration of 6 producers from Russia. Their takes on the Circle of Joy single - diverse, fun and very intense. Let's dance!
    bandcamp: https://bandcamp.com/EmbeddedPlayer/album=3718915413/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/
    cover: /img/rmx.jpg
    background: "#75cdaa"
    released: 20.06.2021
    links:
      apple: https://music.apple.com/us/album/joy-of-collaboration/1571038664
      spotify: https://open.spotify.com/album/7ed9anWgxTL6ur5uufTxF2
      youtube: https://music.youtube.com/playlist?list=OLAK5uy_lEf_okwpcVgDxw1ApY9U2wYQe8e1eV1II
      yandex: https://music.yandex.ru/album/15766107
      amazon: https://music.amazon.com/albums/B095N8FLYH
      boomplay: https://www.boomplay.com/albums/26006180
      deezer: https://www.deezer.com/ru/album/232350852

  circle:
    title: circle of joy
    description: A song about the structure of any creative process. We’re noting all the steps tou need to go through in order to realise any idea. From just a simple sketch to the final presentation. And having fun with every step made in this beautiful journey.
    bandcamp: https://bandcamp.com/EmbeddedPlayer/album=1151967928/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/
    cover: /img/circle.jpg
    background: "#2d8ea4"
    released: 02.04.2021
    video:
      - 5aSf6ik05aY
      - h09USuZoeHM
    links:
      spotify: https://open.spotify.com/album/7zpJFhhJ65WA25H4yGyqL2
      apple: https://music.apple.com/us/album/circle-of-joy-single/1560696968
      youtube: https://music.youtube.com/playlist?list=OLAK5uy_kXQ7Sa9y7Rm-xTqHgEn7jYaBwTtQ26ptc
      yandex: https://music.yandex.ru/album/14413149
      vk: https://vk.com/music/playlist/129086_50020677_90cae49f028bed02d8
      amazon: https://music.amazon.com/albums/B08YZBNXDP
      boomplay: https://www.boomplay.com/albums/22816238
      deezer: https://www.deezer.com/ru/album/215195452
---

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<album-row :album="frontmatter.albums.circle" />

<video-row v-bind="frontmatter.videos" />

<album-row :album="frontmatter.albums.joy_collab" />
