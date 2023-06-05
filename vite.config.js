
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

import { defineConfig } from 'vite'

export default defineConfig({
  lastUpdated: true,
  plugins: [
    Components({
      dirs: ['.vitepress/theme/components', 'components', 'src'],
      extensions: ['vue', 'ts'],
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      globalNamespaces: ['global'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Icons({
      defaultStyle: 'vertical-align: middle;',
    }),
    Unocss({
      transformers: [
        transformerDirectives(),
      ],
      presets: [
        presetIcons({
          scale: 1.2,
          extraProperties: {
            'vertical-align': 'middle'
          }
        }),
        presetUno(),
      ],
      extractors: [
        extractorSplit,
        extractorPug()
      ]
    }),
  ],
  optimizeDeps: {
    include: ['vue', '@vueuse/core', 'three', 'gsap'],
  },
  ssr: {
    noExternal: ['hydra-ts']
  },

})
