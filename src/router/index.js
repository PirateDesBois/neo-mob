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
        path: '/reservations',
        name: 'Reservations',
        component: () => import('@/views/Reservations.vue'),
      },
      {
        path: '/clients',
        name: 'Clients',
        component: () => import('@/views/Clients.vue'),
      },
      {
        path: '/vehicles',
        name: 'Vehicles',
        component: () => import('@/views/Vehicles.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
