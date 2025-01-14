import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

const meta = {
  title: "tsoop",
  description: "live music generation",
  author: "davay42",
  tags: "electronic, music, live, generation, jam, tsoop, op-z, op-1, nts-1, zoom r-16, fusion",
  icon: "/img/tsoop-icon.svg",
  cover: "/img/exit.jpg",
  image: 'img/drops.jpg',
  site: "tsoop.com",
  url: "https://tsoop.com/"
};


export default defineConfig({
  sitemap: {
    hostname: 'https://tsoop.com'
  },
  lastUpdated: true,
  title: meta.title,
  description: meta.description,
  lang: "en",
  assetsInclude: ['**/*.glsl'],
  head: [
    ["meta", { name: "author", content: meta.author }],
    ["meta", { name: "keywords", content: meta.tags }],
    ["link", { rel: "icon", type: "image/svg+xml", href: meta.icon }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "white-translucent" },],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "HandheldFriendly", content: "True" }],
    ["meta", { name: "MobileOptimized", content: "320" }],
    ["meta", { name: "theme-color", content: "#0ea5e9" }],

    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en-EN" }],
    ["meta", { property: "og:site", content: meta.url }],
    ["meta", { property: "og:site_name", content: meta.title }],
  ],
  transformHead(ctx) {
    const url = ctx.pageData.relativePath.split('index.md')[0]
    let image = meta?.image
    if (ctx.pageData.frontmatter?.cover) {
      image = 'media_files/cover/' + url.split('/').join('-') + ctx.pageData.frontmatter?.cover
    }
    return [
      process.env.NODE_ENV === "production" ? ["script", { async: true, defer: true, "data-website-id": "4d8a9e31-89cc-4bbd-a3b2-ac894e893b56", src: "https://stats.chromatone.center/script.js" }] : null,
      ['meta', { property: 'og:title', content: ctx.pageData.title + ' | tsoop.com' }],
      ['meta', { property: 'og:description', content: ctx.pageData.description }],
      ['meta', { property: 'og:url', content: meta.url + url }],
      ['meta', { property: 'og:image', content: meta.url + image }],
      ['meta', { name: 'twitter:title', content: ctx.pageData.title + ' | tsoop.com' }],
      ['meta', { name: 'twitter:description', content: ctx.pageData.description }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: `@${meta.author}` }],
      ['meta', { name: 'twitter:creator', content: `@${meta.author}` }],
      ['meta', { name: 'twitter:image', content: meta.url + image }],
    ]
  },
  transformPageData(pageData) {
    if (pageData.frontmatter.dynamic) {
      pageData.frontmatter = { ...pageData.frontmatter, ...pageData.params, cover: pageData.params?.cover ? 'https://db.chromatone.center/assets/' + pageData.params?.cover : '' }
    }
  },
  transformHtml: (_, id, { pageData }) => {

  },
  buildEnd: async ({ outDir }) => {

  },
  vite: {
    lastUpdated: true,
    server: {
      strictPort: true
    },
    plugins: [
      Components({
        dirs: ['.vitepress/components'],
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

  }
})

//SECTION - RSS https://laros.io/generating-an-rss-feed-with-vitepress
//   const feed = new Feed({
//     title: 'tsoop',
//     description: 'Live multimedia collaborations',
//     id: meta.url,
//     link: meta.url,
//     language: 'en',
//     image: `${meta.url}img/circle.jpg`,
//     favicon: `${meta.url}favicon.ico`,
//     copyright:
//       'Copyright (c) 2018-present, Denis Starov.'
//   })

//   const events = await createContentLoader('events/**/*.md', {
//     render: true
//   }).load()

//   events.sort(
//     (a, b) =>
//       +new Date(b.frontmatter.date) -
//       +new Date(a.frontmatter.date)
//   )
//   for (const { url, frontmatter, html } of events) {
//     feed.addItem({
//       title: frontmatter.title,
//       id: `${meta.url}${url}`,
//       link: `${meta.url}${url}`,
//       description: frontmatter.description,
//       content: html,
//       author: [
//         {
//           name: 'Denis Starov',
//           email: 'davay@tsoop.com',
//           link: 'https://starovdenis.com'
//         }
//       ],
//       date: frontmatter.date
//     })
//   }
//   writeFileSync(path.join(outDir, 'feed.rss'), feed.rss2())

