---
title: tsoop
mainLinks:
    instagram: https://www.instagram.com/tsoop.ru
    bandcamp: https://tsoop.bandcamp.com/
    youtube: https://www.youtube.com/channel/UC1khwNdVx2ScQKJuwJJdlxQ
    spotify: https://open.spotify.com/artist/0y3vCTnY6F5UROyBnOAPuF?si=TTC8BaneT0egl9Ek9Z11Hw
    apple: https://music.apple.com/us/artist/tsoop/1473343646
albums:
  joy_collab:
    title: joy of collaboration
    released: 20.06.2021
    links:
      apple: https://music.apple.com/us/album/joy-of-collaboration/1571038664
      spotify: https://open.spotify.com/album/7ed9anWgxTL6ur5uufTxF2
      youtube: https://music.youtube.com/playlist?list=OLAK5uy_lEf_okwpcVgDxw1ApY9U2wYQe8e1eV1II
      yandex: https://music.yandex.ru/album/15766107
      amazon: https://music.amazon.com/albums/B095N8FLYH
      boomplay: https://www.boomplay.com/albums/26006180
  miracle:
    title: miracle mechanism live feat. daria dubovik
    description: live performance @ 7th WAFEst festival
    released: 17.07.2019
    links:
      spotify: https://open.spotify.com/album/19fRx1rV4uAmjNaQfOhRmL?si=ub-kiO77Q-mrk-X8sRTLPQ
      apple: https://music.apple.com/us/album/miracle-mechanism-live/1483671339
      youtube: https://music.youtube.com/playlist?list=OLAK5uy_kl_vb-pjGJRV3v5fBA1ZtbvERuit87vsk
      yandex: https://music.yandex.ru/album/8877544
      vk: https://vk.com/music/album/129086_50020659
      amazon: https://www.amazon.com/Miracle-Mechanism-tsoop/dp/B07YNC3KBX/ref=sr_1_1?keywords=tsoop&qid=1577706006&s=dmusic&sr=1-1
      boomplay: https://www.boomplay.com/albums/4542412?from=search&srModel=COPYLINK&srList=WEB
  cassini:
    title: cassini dreams
    description: Tribute to the Cassini-Huygnes Saturn exploration space mission.
    released: 01.09.2017
    links: 
      spotify: https://open.spotify.com/album/6yU61kt9BTiKsy4CHoS29v
      apple: https://music.apple.com/us/album/cassini-dreams/1500023423
      youtube: https://music.youtube.com/playlist?list=OLAK5uy_np3dWefMN3gkTgpdhz5FyaInVb3z5-MZk
      yandex: https://music.yandex.ru/album/9847367
      vk: https://vk.com/music/album/129086_50020668
---

<top-head />

<about />

<links class="text-4xl py-16" :links="$frontmatter.mainLinks" />

<cassini :album="$frontmatter.albums.cassini" />

<!-- <z-blob /> -->