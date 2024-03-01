import {
  createRouter as _createRrouter,
  createMemoryHistory,
  createWebHistory,
  type RouteRecordRaw
} from 'vue-router'
import home from '@/views/home/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: home
  }
]

export function createRouter() {
  return _createRrouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
