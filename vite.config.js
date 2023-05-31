import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

import path from "node:path";
import { fileURLToPath } from "node:url";

import Sitemap from 'vite-plugin-sitemap'

export default defineConfig(async () => {
  const glsl = (await import('vite-plugin-glsl')).default;
  return {
    plugins: [

      AutoImport({
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue\??/, // .vue
        ],
        imports: ['vue'],
      }),
      glsl(),
      Components({
        dirs: ['.vitepress/theme/components'],
        extensions: ['vue', 'ts'],
        directoryAsNamespace: true,
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
      Sitemap({
        outDir: '.vitepress/dist/',
        hostname: 'https://tsoop.com/'
      }),
    ],
    optimizeDeps: {
      include: ['vue', '@vueuse/core', 'three', 'gsap'],
    },
    ssr: {
      noExternal: ['hydra-ts']
    },
    build: {
      chunkSizeWarningLimit: 800,
    },
  }
})
