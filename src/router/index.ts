import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'auth' },
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'auth' },
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: { layout: 'main' },
      component: () => import('@/views/CategoriesView.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      meta: { layout: 'main' },
      component: () => import('@/views/DetailView.vue')
    },
    {
      path: '/history',
      name: 'history',
      meta: { layout: 'main' },

      component: () => import('@/views/HistoryView.vue')
    },
    {
      path: '/',
      name: 'home',
      meta: { layout: 'main' },
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/planning',
      name: 'planning',
      meta: { layout: 'main' },
      component: () => import('@/views/PlanningView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { layout: 'main' },
      component: () => import('@/views/ProfileView.vue')
    },
    {
      path: '/record',
      name: 'record',
      meta: { layout: 'main' },
      component: () => import('@/views/RecordView.vue')
    },
  ]
})

export default router
