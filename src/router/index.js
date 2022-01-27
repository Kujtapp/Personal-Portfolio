import { createRouter, createWebHashHistory } from 'vue-router'

// const routes = [
// ]

import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [ 
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home},
    { path: '/about', component: About},
  ]
})

export default router
