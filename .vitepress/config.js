import { defineConfig, createContentLoader, } from 'vitepress'

const meta = {
  title: "tsoop",
  description: "live music generation",
  author: "davay42",
  tags: "electronic, music, live, generation, jam, tsoop, op-z, op-1, nts-1, zoom r-16, fusion",
  icon: "/img/tsoop-icon.svg",
  cover: "/img/exit.jpg",
  site: "tsoop.com",
  url: "https://tsoop.com/"
};

import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import path from 'path'
import { writeFileSync } from 'fs'
// import { Feed } from 'feed'

const links = []


export default defineConfig({
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
      process.env.NODE_ENV === "production" ? ["script", { async: true, defer: true, "data-website-id": "8ad3b2eb-cf2e-4fa8-b2e4-28958b889bd4", src: "https://stats.defucc.me/umami.js" }] : null
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
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath?.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData?.lastUpdated,
        changefreq: 'weekly'
      })
  },
  buildEnd: async ({ outDir }) => {
    //SECTION - Sitemap
    const sitemap = new SitemapStream({ hostname: meta.url })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
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

