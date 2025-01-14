---
title: Daria Tishina collaborations
description: Released music
date: 2022-09-16
cover: exit.jpg
full: true
albums:
  best_exit:
    title: Лучший выход всегда насквозь
    description: Новая коллаборация с Дарьей Тишиной. Впервые исполнено вживую на Чтецах весной 2022 года.
    released: 16.09.2022
    background: "#2a5781"
    cover: /img/exit.jpg
    bandcamp: https://bandcamp.com/EmbeddedPlayer/album=2214815470/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/
    links:
      apple: https://music.apple.com/us/album/%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B9-%D0%B2%D1%8B%D1%85%D0%BE%D0%B4-%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-%D0%BD%D0%B0%D1%81%D0%BA%D0%B2%D0%BE%D0%B7%D1%8C-feat-daria-tishina-single/1646003822
      spotify: https://open.spotify.com/album/1vbMoZrprMVDxnQCVGZDa4
      youtube: https://music.youtube.com/playlist?list=OLAK5uy_m4-odKCOlPlX08_btp1iqsJldAY34TaDg
      yandex: https://music.yandex.ru/album/23431950
      vk: https://vk.com/music/playlist/129086_50020682_3221ed49369036f3a4
      amazon: https://music.amazon.com/albums/B0BD7J52CD
      boomplay: https://www.boomplay.com/albums/54303101
      deezer: https://www.deezer.com/ru/album/354247257

  miracle:
    title: miracle mechanism live feat. daria dubovik
    description: live performance @ 7th WAFEst festival
    cover: /img/miracle.png
    bandcamp: https://bandcamp.com/EmbeddedPlayer/album=3719716987/size=large/bgcol=89adb2/linkcol=0687f5/artwork=none/transparent=true/
    background: "#89adb2"
    released: 17.07.2019
    links:
      spotify: https://open.spotify.com/album/19fRx1rV4uAmjNaQfOhRmL?si=ub-kiO77Q-mrk-X8sRTLPQ
      apple: https://music.apple.com/us/album/miracle-mechanism-live/1483671339
      youtube: https://music.youtube.com/playlist?list=OLAK5uy_kl_vb-pjGJRV3v5fBA1ZtbvERuit87vsk
      yandex: https://music.yandex.ru/album/8877544
      vk: https://vk.com/music/album/129086_50020659
      amazon: https://www.amazon.com/Miracle-Mechanism-tsoop/dp/B07YNC3KBX/ref=sr_1_1?keywords=tsoop&qid=1577706006&s=dmusic&sr=1-1
      boomplay: https://www.boomplay.com/albums/4542412?from=search&srModel=COPYLINK&srList=WEB
      deezer: https://www.deezer.com/ru/album/113259752
---

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<album-row id="best_exit" :album="frontmatter.albums.best_exit" />

<album-row :album="frontmatter.albums.miracle" />
