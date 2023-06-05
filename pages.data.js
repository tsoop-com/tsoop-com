import { createContentLoader } from 'vitepress'

import { transform } from './src/transform'

export default createContentLoader('./**/*/*.md', {
  transform
})