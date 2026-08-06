import './assets/styles/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import BaseFragment from './components/BaseFragment/BaseFragment.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin, {
  enableDevtoolsV6Plugin: true,
})

app.component('BaseFragment', BaseFragment)

app.mount('#app')
