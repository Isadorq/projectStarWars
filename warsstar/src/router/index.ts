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
import MainPage from '@/views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    }
  ]
})

export default router