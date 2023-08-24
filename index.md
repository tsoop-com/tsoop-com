---
title: live media generation
home: true
mainLinks:
  instagram: https://www.instagram.com/tsoop.music
  bandcamp: https://tsoop.bandcamp.com/
  github: https://github.com/tsoop-com
  youtube: https://www.youtube.com/@tsoop 
  spotify: https://open.spotify.com/artist/0y3vCTnY6F5UROyBnOAPuF?si=TTC8BaneT0egl9Ek9Z11Hw
  apple: https://music.apple.com/us/artist/tsoop/1473343646

---

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<top-head />

<about />

<links color="#709c65" class="text-4xl py-16 row" :links="frontmatter.mainLinks" />

<!-- <browse-content /> -->

<about-us class="row" />
