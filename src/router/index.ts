import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
/**
 * 静态路由
 */
const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: () => import('@/views/404.vue')
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

export default router
