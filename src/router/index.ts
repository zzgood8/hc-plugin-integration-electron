import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
/**
 * 静态路由
 */
const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    name: 'BaseLayout',
    component: () => import('@/layouts/index.vue')
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

export default router
