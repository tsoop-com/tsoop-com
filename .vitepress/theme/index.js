import '@unocss/reset/tailwind.css'
import 'uno.css'
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
  },
}
