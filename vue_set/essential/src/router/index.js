import { createRouter, createWebHistory } from 'vue-router';

// Source: https://www.youtube.com/watch?v=juocv4AtrHo
// About lazy loading routes: https://router.vuejs.org/guide/advanced/lazy-loading.html

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'LOGIN',
      component: () => import("../components/Pages/LoginPage.vue")
    },
    {
      path: '/counter',
      name: 'COUNTER',
      component: () => import("../components/Pages/CounterPage.vue")
    },
    {
      path: '/todolist',
      name: 'TODOLIST',
      component: () => import("../components/Pages/TodoListPage.vue")
    },
    {
      path: '/registration',
      name: 'REGISTRATION',
      component: () => import("../components/Pages/RegistrationPage.vue")
    },
    {
      path: '/table',
      name: 'TABLE',
      component: () => import("../components/Pages/TablePage.vue")
    }
  ]
});

export default router
