const meta = {
  title: 'tsoop',
  description: 'live music generation',
  author: 'Denis Starov',
  tags:
    'electronic, music, live, generation, jam, tsoop, op-z, op-1, nts-1, zoom r-16, fusion',
  icon: '/img/tsoop-icon.svg',
  site: 'www.tsoop.ru',
}

module.exports = {
  title: meta.title,
  description: meta.description,
  lang: 'en',
  head: [
    ['meta', { name: 'author', content: meta.author }],
    ['meta', { name: 'keywords', content: meta.tags }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: meta.icon }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'white-translucent',
      },
    ],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: meta.site }],
    ['meta', { name: 'twitter:title', value: meta.title }],
    ['meta', { name: 'twitter:description', value: meta.description }],
    //@ts-ignore
    ['meta', { name: 'twitter:image', content: meta.icon }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en-EN' }],
    ['meta', { property: 'og:site', content: meta.site }],
    ['meta', { property: 'og:site_name', content: meta.title }],
    ['meta', { property: 'og:title', content: meta.title }],
    ['meta', { property: 'og:image', content: meta.icon }],
    ['meta', { property: 'og:description', content: meta.description }],
  ],
  themeConfig: {
    repo: '',
    logo: '/media/circle/circle.svg',
    docsDir: '.',
    docsBranch: 'master',
    docsRepo: '',
    editLinks: false,
    editLinkText: 'Нашли ошибку?',
  },
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-classy'))
      md.use(require('markdown-it-container'), 'card')
      md.use(require('markdown-it-external-links'), {
        internalDomains: ['localhost', 'tsoop.ru'],
      })
    },
  },
  customData: {},
}
