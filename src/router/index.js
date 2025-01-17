import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '@/views/BooksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BooksView,
    },
    /*{
      path: '/newbook',
      name: 'new book',
      component: () => import('../views/NewBookView.vue'),
    },
    {
      path: `/editbook/:id`,
      name: 'edit book',
      component: () => import('../views/EditBookView.vue'),
    },*/
  ],
})

export default router
