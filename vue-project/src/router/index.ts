import { createRouter, createWebHistory } from 'vue-router'
import WelcomeVue from '../views/welcomeVue.vue'
import Index from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/welcome',
      name: 'welcome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WelcomeVue.vue'),
    },
  ],
})

export default router
