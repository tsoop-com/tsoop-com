import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import AutoImport from 'unplugin-auto-import/vite'
import Pages from "vite-plugin-pages";
import { extendRoutes } from "vitepress-pages";
import generateSitemap from 'vite-plugin-pages-sitemap'

import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

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
      Pages({
        dirs: [
          { dir: ".", baseRoute: "" },
        ],
        exclude: ['**/node_modules/**/*.*', '**/!(index).md'],
        extensions: ['md'],
        ...extendRoutes({
          root: dirname,
          mediaTypes: {
            cover: { size: 1200, height: 800, fit: "inside" },
            icon: { width: 200, height: 200, fit: "inside" }
          }
        }),
        onRoutesGenerated: routes => (generateSitemap({ routes, hostname: 'https://tsoop.com', dest: "public" })),
      }),
      glsl(),
      Components({
        dirs: ['.vitepress/theme/components', '.vitepress/comps'],
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
