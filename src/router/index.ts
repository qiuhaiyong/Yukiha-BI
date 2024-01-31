import { createRouter, createWebHashHistory } from 'vue-router'
import { ConstantRouter } from './routes'
const router = createRouter({
  history: createWebHashHistory(),
  routes: ConstantRouter
})

export default router
