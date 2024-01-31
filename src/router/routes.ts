import type { RouteRecordRaw } from 'vue-router'

export const ConstantRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/screenedit',
    children: []
  },
  {
    path: '/screenedit',
    name: 'ScreenEdit',
    component: () => import('@/views/ScreenEdit/ScreenEdit.vue')
  }
]
