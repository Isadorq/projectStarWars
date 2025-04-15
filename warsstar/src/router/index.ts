// import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '@/views/HomePage.vue'

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes: [    
//       {
//         component: HomePage,
//         path: '/',
//         name: 'HomePage'
//       },
//     ],
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/mainPage.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || '/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    }
  ]
})

export default router