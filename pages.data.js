import { createContentLoader } from 'vitepress'
import fs from 'fs'
import VPMedia from 'vitepress-pages/media'


const content = createContentLoader('./**/*/*.md', {
  includeSrc: true,
  transform: VPMedia({
    root: new URL('./', import.meta.url),
    mediaTypes: {
      cover: { size: 1200, height: 1000, fit: "inside" },
    }
  })
})

export default content

