import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter } from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/style.css'
import App from './App.vue'
import 'virtual:svg-icons-register'
import svgIcon from '@/components/svgIcon/index.vue'

export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  const pinia = createPinia()
  app.use(router)
  app.use(pinia)
  app.use(ElementPlus)
  app.component('svg-icon', svgIcon)
  return { app, router, pinia }
}
