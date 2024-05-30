
import { createRouter, createWebHistory } from 'vue-router'
import WorkspaceHome from '../views/WorkspaceHome.vue'
import WorkspaceSignup from  '../views/WorkspaceSignup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WorkspaceHome
    },
    {
      path: '/signup',
      name: 'signup',
      component: WorkspaceSignup
    }
  ]
})

export default router
