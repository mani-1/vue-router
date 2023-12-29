import { createRouter, createWebHistory  } from "vue-router";
import Home from '../page/HomePage.vue'
import About from '../page/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router