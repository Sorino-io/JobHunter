import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: () => import('../views/Jobs.vue')
    },
    {
      path: '/applications',
      name: 'Applications',
      component: () => import('../views/Applications.vue')
    }
  ]
})

export default router