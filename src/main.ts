import '@/assets/css/style.css'
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import svgIcon from "@/components/svgIcon/index.vue";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.component('svg-icon', svgIcon)
app.mount('#app')
