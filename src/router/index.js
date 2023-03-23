// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',

    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/clients',
        name: 'Clients',
        component: () => import('@/views/Clients.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
