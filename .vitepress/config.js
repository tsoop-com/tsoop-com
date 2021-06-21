module.exports = {
  title: 'tsoop',
  description: 'tsoop official web-site',
  lang: 'en',
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
        internalDomains: ['localhost', 'starovdenis.com'],
      })
    },
  },
  customData: {},
}
