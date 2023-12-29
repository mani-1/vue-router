import { createRouter, createWebHistory  } from "vue-router";
import Home from '../page/HomePage.vue'
import About from '../page/AboutPage.vue'
import NotFound from '../page/NotFound.vue'
import HelpLayout from '../layout/HelpLayout.vue'
import FaqPage from '../page/help/FaqPage.vue'
import ContactPage from '../page/help/ContactPage.vue'

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
    },
    {
      path: '/help',
      component: HelpLayout,
      children: [
        {
          path: 'faq',
          name: 'faq',
          component: FaqPage
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactPage
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

export default router