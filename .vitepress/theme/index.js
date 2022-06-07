import 'virtual:windi.css'
import './styles/index.css'
import './styles/main.css'

import Layout from './layout.vue'
import NotFound from './not-found.vue'

import { GesturePlugin } from '@vueuse/gesture'

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.use(GesturePlugin)

    if (
      process.env.NODE_ENV === 'production' &&
      typeof window !== 'undefined'
    ) {
      window.owa_baseUrl = 'http://stats.frkt.ru/'
      window.owa_cmds = window.owa_cmds || []
      window.owa_cmds.push(['setSiteId', 'f5c705255d57f1ccf9f557b1bea75160'])
      window.owa_cmds.push(['trackPageView'])
      window.owa_cmds.push(['trackClicks'])
        ; (function () {
          var _owa = document.createElement('script')
          _owa.type = 'text/javascript'
          _owa.async = true
          window.owa_baseUrl =
            'https:' == document.location.protocol
              ? window.owa_baseSecUrl ||
              window.owa_baseUrl.replace(/http:/, 'https:')
              : window.owa_baseUrl
          _owa.src =
            window.owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js'
          var _owa_s = document.getElementsByTagName('script')[0]
          _owa_s.parentNode.insertBefore(_owa, _owa_s)
        })()
    }
  },
}
