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
  cassini:
    title: cassini dreams
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