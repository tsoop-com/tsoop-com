import { createContentLoader } from 'vitepress'

import { transformPages } from 'vitepress-pages'

import * as url from 'url';

export default createContentLoader('./**/*/*.md', {
  transform: transformPages({
    root: url.fileURLToPath(new URL('./', import.meta.url)),
    mediaTypes: {
      cover: { size: 1200, height: 1000, fit: "inside" },
    }
  })
})