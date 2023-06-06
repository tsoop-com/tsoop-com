import { createContentLoader } from 'vitepress'

import transformPages from 'vitepress-pages'


export default createContentLoader('./**/*/*.md', {
  transform: transformPages({
    root: new URL('./', import.meta.url),
    mediaTypes: {
      cover: { size: 1200, height: 1000, fit: "inside" },
    }
  })
})